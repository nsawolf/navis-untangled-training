(ns template.api.mutations
  (:require

    [om.next.server :as oms]
    [taoensso.timbre :as timbre]
    [template.api.read :as db]
    [untangled.server.core :as core]))

(defmulti apimutate oms/dispatch)

(defonce logged-in? (atom false))

(defmethod apimutate 'login/attempt-login [env k {:keys [u p uid]}]
  {:action (fn []
             (reset! logged-in? true)
             {:uid     42
              :tempids {uid 42}})})

(defmethod apimutate 'login/logout [env k {:keys [u p uid]}]
  {:action (fn [] (reset! logged-in? false))})

;; update todo things
(defmethod apimutate 'todo/set-done [env k {:keys [id value]}]
  {:action (fn []
             (swap! db/todo-db update-in [:items id] assoc :item/done? value))})

(defmethod apimutate 'todo/delete [env k {:keys [id list-id]}]
  {:action (fn []
             (swap! db/todo-db update :items dissoc id))})


(defmethod apimutate 'todo/update-item [env k params]
  {:action (fn []
             (let [item-id (:id params)
                   new-value (:value params)]
               (swap! db/todo-db update-in [:items item-id] assoc :item/label new-value)))})

(defmethod apimutate 'todo/add-item [env k {:keys [id] :as new-item}]
  {:action (fn []
             (println "new item: " new-item)
             (println "item id: " id)
             #_(let [item-id (:id id)]
               (swap! db/todo-db assoc-in [:items item-id] new-item)
               ))})