(ns template.api.read
  (:require
    [taoensso.timbre :as timbre]))

(timbre/info "Loading API definitions for template.api.read")

(def todo-db (atom
               {:items {4 {:db/id      4 :list 55 :ordinal 1
                           :item/label "Server item 2"
                           :item/done? false}
                        5 {:db/id      5 :list 65 :ordinal 0
                           :item/label "Server item 2"
                           :item/done? false}
                        1 {:db/id      1 :list 55 :ordinal 0
                           :item/label "Server item 1"
                           :item/done? false}}
                :lists {55 {:db/id     55
                            :list/name "My List"}}}))

(defn get-list [list-id]
  (let [list (get-in @todo-db [:lists list-id])
        items (->> (get @todo-db :items)
                   vals
                   (filter #(= list-id (:list %)))          ;; value of list field matches list id
                   (sort-by :oridnal)
                   (map #(select-keys % [:db/id :item/label :item/done?]))
                   vec)                                     ;; the thing to the client we want to return to as vector not as a list
        result (assoc list :list/items items)]
    result))

(defn api-read [{:keys [query request] :as env} disp-key params]
  (println "params :: " params)
  (timbre/info "Incoming query on key " disp-key " with subquery " query " and params " params)
  ;(let [connection (udb/get-connection survey-database)])
  (case disp-key
    :todo/list {:values (get-list (:id params))}
    ;:logged-in? {:value @m/logged-in?}
    :hello-world {:value 42}
    :current-user {:value {:id 42 :name "Tony Kay"}}
    (throw (ex-info "Invalid request" {:query query :key disp-key}))))
