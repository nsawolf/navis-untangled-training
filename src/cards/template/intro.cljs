(ns template.intro
  (:require-macros
    [untangled.client.cards :as ucard :refer [untangled-app]])
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [om.next :as om :refer-macros [defui]]
            [template.ui.components :as comp]
            [template.ui.todo :as todo]
            [untangled.client.data-fetch :as df]
            [om.dom :as dom]))

(defcard TodoListAppCard
         "Description"
         (untangled-app todo/TodoRoot
                        :started-callback
                        (fn [app]
                          (df/load (:reconciler app) :todo/list todo/TodoList
                                   {:params {:id 55}})))
         {}
         {:inspect-data true})

(defcard SVGPlaceholder
         "# SVG Placeholder

         - a
         - b
         - c
         "
         (comp/ui-placeholder {:w 200 :h 200}))

(defcard todo-item
         "This card shows how we render an individual TODO item"
         (todo/ui-todo-item (om/computed {:db/id 1 :item/label "Item 1"
                                          :ui/editing? false
                                          :ui/input-value "Hello"}
                                         {:onDelete (fn [id] (js/console.log "Delete item " id))})))

(defcard todo-list
         "A todo list"
         (todo/ui-todo-root {:todo/list {:db/id   5
                                         :list/name "Groceries"
                                         :list/items [{:db/id   1
                                                       :item/label "Item 1"
                                                       :ui/editing? false
                                                       :ui/input-value ""
                                                       :item/done? false}
                                                      {:db/id   2
                                                       :item/label "Item 2"
                                                       :ui/editing? false
                                                       :item/done? true
                                                       :ui/input-value ""}
                                                      {:db/id   3
                                                       :item/label "Item 3"
                                                       :ui/editing? true
                                                       :item/done?  true
                                                       :ui/input-value  "Item 3"}]}}))


