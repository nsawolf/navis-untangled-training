(ns template.ui.todo
  (:require
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.core :as u]
    [untangled.client.mutations :as m]))

(defmethod m/mutate 'todo/add-item [{:keys [state]} k {:keys [list-id db/id] :as new-item}]
  {:remote true
   :action
           (fn []
             (swap! state assoc-in [:item/by-id id] new-item)
             (swap! state update-in [:list/by-id list-id :list/items]
                    (fn [old-list]
                      (conj old-list [:item/by-id id])))
             (swap! state assoc-in [:list/by-id list-id :ui/new-thing] "")
             )})

(defmethod m/mutate 'todo/delete-item [{:keys [state]} k {:keys [db/id list-id]}]
  {:remote true
   :action
           (fn []
             (swap! state update :item/by-id dissoc id)
             (swap! state update-in [:list/by-id list-id :list/items]
                    (fn [old-list]
                      (filterv #(not= (second %) id) old-list)) id))})

(defmethod m/mutate 'todo/update-item
  [env k params]
  {:remote true
   :action
           (fn []
             (let [state-atom (:state env)
                   item-id (:id params)
                   path [:item/by-id item-id :item/label]
                   new-value (:value params)]
               (swap! state-atom assoc-in path new-value)))})

(defmethod m/mutate 'todo/finish-edit
  [env k params]
  {:action
   (fn []
     (let [state-atom (:state env)
           item-id (:id params)
           path [:item/by-id item-id :ui/editing?]]
       (swap! state-atom assoc-in path false)))})

(defmethod m/mutate 'todo/set-done [{:keys [state]} k {:keys [id value]}]
  {:remote true   ;;alternate  :remote (update ast :params assoc :list-id 55)
    ;;; makes this communicate with the server and make it full stack -- this is on the client
   :action (fn [] (swap! state assoc-in [:item/by-id id :item/done?] value))})


(defui TodoItem
  static u/InitialAppState
  ; a way to generate an initial ui when the thing first loads
  ; need to return a map of what could represent the initial query of the item
  (u/initial-state [this {:keys [id label]}]
    {:db/id id :item/label label :item/done? false :ui/editing? false})
  static om/IQuery
  (query [this] [:db/id :item/label :item/done? :ui/editing?])
  static om/Ident
  ; always returns a vector of two elements.
  ; First is "app db tbl name", second is ID
  ; lets you normalize your database based on incoming data
  ; look it up in the database and to put the incoming thing in the correct place within the database.
  (ident [this props] [:item/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [db/id item/label item/done? ui/editing?]} (om/props this)
          onDelete (om/get-computed this :onDelete)]
      (dom/li nil
              (if editing?
                (dom/input #js {:type        "text"
                                :onBlur      (fn [evt] (om/transact! this `[(todo/finish-edit {:id ~id})]))
                                :onKeyDown   (fn [evt] (if (or (= (.-keyCode evt) 13) (= (.-keyCode evt) 27)) (om/transact! this `[(todo/finish-edit {:id ~id})])))
                                :onChange    (fn [evt] (m/set-string! this :item/label :event evt))
                                :placeholder "Do what?"
                                :value       label})
                (dom/div #js {:onDoubleClick (fn [evt]
                                               (m/toggle! this :ui/editing?))}
                         (dom/input #js {:type     "checkbox"
                                         :checked  done?
                                         :onChange (fn [evt] (om/transact! this `[(todo/set-done {:id ~id :value ~(not done?)})]))})
                         label
                         (dom/button #js {:onClick (fn [evt] (onDelete id))} "X")))))))

(def ui-todo-item (om/factory TodoItem {:keyfn :db/id}))

(defui TodoList
  static u/InitialAppState
  (u/initial-state [this {:keys [id name]}]
    {:db/id id :list/name name :list/items []})
     ; can do an empty list here []
     ;or a list of default items as follows
     ;[(u/initial-state TodoItem {:id 42 :label "Sample"})
     ;   (u/initial-state TodoItem {:id 44 :label "Other"})]})
  static om/IQuery
  (query [this] [:db/id :list/name :ui/new-thing {:list/items (om/get-query TodoItem)}])
  static om/Ident
  (ident [this props] [:list/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [db/id list/name ui/new-thing list/items]} (om/props this)
          render-item (fn [item]
                        (let [callbacks {:onDelete
                                         (fn [iid] (om/transact! this `[(todo/delete-item {:db/id ~iid :list-id ~id})])
                                           #_(js/console.log "Delete item " id))}]
                          (ui-todo-item (om/computed item callbacks))))]

      (dom/div nil
               (dom/h4 nil name)
               (dom/div nil
                        (dom/input #js {:type        "text"
                                        :placeholder "What else?"
                                        :value       new-thing
                                        :onChange    #(m/set-string! this :ui/new-thing :event %)
                                        :onKeyDown   (fn [evt] (if (= (.-keyCode evt) 13) (om/transact! this `[(todo/add-item {:db/id      ~(om/tempid)
                                                                                                                               :list-id    ~id
                                                                                                                               :item/label ~new-thing
                                                                                                                               :item/done? false})])))})
                        (dom/button #js {
                                         :onClick (fn []
                                                    (om/transact! this `[(todo/add-item {:db/id      ~(om/tempid)
                                                                                         :list-id    ~id
                                                                                         :item/label ~new-thing
                                                                                         :item/done? false})]))

                                         } "+"))
               (dom/ul nil
                       (map render-item items))))))

(def ui-todo-list (om/factory TodoList))

(defui TodoRoot
  static u/InitialAppState
  (u/initial-state [this params] {})                  ; could also use [this {:keys [id name]} if you don't care
    ; about what is being passed in, or this could look like [this params] or [_ _]
    ; depending on how you need to use the data
    ;{:todo/list (u/initial-state TodoList {:id 55 :name "My Grocery List"})})
  static om/IQuery
  (query [this] [{:todo/list (om/get-query TodoList)}])
  Object
  (render [this]
    (let [{:keys [todo/list]} (om/props this)]
      (dom/div nil
               (dom/h2 nil
               (ui-todo-list list))))))

(def ui-todo-root (om/factory TodoRoot))




