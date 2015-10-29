(ns guardian-alerts.core
  (:require [cljs.core.async :as async :refer [put! <! chan close! <! tap mult]]
            [cljs.nodejs :as nodejs]
            [guardian-alerts.scrape :refer [fetch-page full-article rss-items]]
            [guardian-alerts.pipeline :refer [source| sink| re-source| | async| seq| cond|]]
            [guardian-alerts.db :refer [init-db migrate-db update-row each-row repair-row]]
            [guardian-alerts.text :refer [read-edn keyword-match]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(defn full-articles [in-chan]
  (let [dup-chan (tap (mult in-chan) (chan))
        articles-chan (async| dup-chan #(fetch-page (:link %1) %2))]
    (async/map full-article [in-chan articles-chan])))

(defn -main [& args]
  (let [config (read-edn "config.edn") ; (first args) 
        db (init-db (:db-file config))
        rss-url (:rss-feed config)
        upsert-row (partial update-row db)]
    
    ; Scrape new data
    (let [out-chan (-> (source| migrate-db db)
                       (re-source| fetch-page rss-url)
                       (seq| rss-items)
                       (cond| #(keyword-match (:keywords %)))
                       (full-articles)
                       (| upsert-row))]
      (go (while true (println (<! out-chan)))))
    
    ; Report on broken data (unfinished)
    (let [out-chan (-> (source| each-row db)
                       (cond| #(some nil? (vals %))))]
      ;(| (partial repair-row db)))]
      (go (while true (println "missing values in" (get (<! out-chan) "guid")))))))

(set! *main-cli-fn* -main)

