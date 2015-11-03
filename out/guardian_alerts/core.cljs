(ns guardian-alerts.core
  (:require [cljs.core.async :as async :refer [put! chan close! pipe pipeline pipeline-async buffer]]
            [cljs.nodejs :as nodejs]
            [guardian-alerts.scrape :refer [fetch-page parse-article rss-items]]
            [guardian-alerts.db :refer [init-db migrate-db update-row each-row repair-row]]
            [guardian-alerts.text :refer [read-edn keyword-match]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(defn source
  "Convert a function f taking one argument and a callback to a function taking
  one argument and an output chan, formed by calling f with a callback that places 
  the result of f on the channel. Optionally close the channel after the callback 
  returns. Return the output channel."
  [f]
  (fn [arg out-chan] 
    (f arg (fn [result] (put! out-chan result))) 
    out-chan))

(defn -main [& args]
  (let [config (read-edn "config.edn") ; (first args) 
        db (init-db (:db-file config))
        rss-url (:rss-feed config)
        upsert-row (partial update-row db)]

    (migrate-db db 
                (fn [_]
                  (let [rss-chan (chan (buffer 1) (comp (mapcat rss-items)
                                                        (filter #(keyword-match (:keywords %)))
                                                        (map #(:link %))))
                        to-scrape-chan (chan)
                        scraped-chan (chan (buffer 1) (map (comp 
                                                             (partial update-row db)
                                                             (fn [html-text] 
                                                               (let [article (parse-article html-text)]
                                                                 (println "Processed" (:guid article))
                                                                 article)))))]
                    ((source fetch-page) rss-url rss-chan)
                    (pipe rss-chan to-scrape-chan)
                    (pipeline-async 1 scraped-chan (source fetch-page) to-scrape-chan)))))) 

(set! *main-cli-fn* -main)

