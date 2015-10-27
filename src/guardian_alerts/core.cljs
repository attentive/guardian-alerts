(ns guardian-alerts.core
  (:require [cljs.core.async :refer [put! <! chan]]
            [cljs.nodejs :as nodejs]
            [guardian-alerts.db :refer [init-db update-row]]
            [guardian-alerts.text :refer [slurp read-edn keywordize keyword-match]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(defonce request (js/require "request"))
(defonce libxmljs (js/require "libxmljs"))
(defonce http (js/require "http"))

(defn fetch-page [url callback]
  (request url (fn [error response body] 
                 (if error 
                   (println "Error fetching page: " error)
                   (callback body)))))

(defn rss-item [frag]
  (let [gt #(.text (.get %1 %2))
        desc (gt frag "description")
        link (gt frag "link")]
    {:guid link
     :link link
     :description desc
     :keywords (keywordize desc)}))

(defonce rss-chan (chan))
(defn rss-items [url]
  (fetch-page url
              (fn [body]
                (let [doc (.parseXml libxmljs body)
                      items (.find doc "//item")
                      get-text (fn [item path] (.text (.get item path)))]
                  (put! rss-chan 
                        (filter #(keyword-match (:keywords %)) (map rss-item items)))))))

(defn -main [& args]
  (let [config (read-edn "config.edn") ; (first args) 
        db (init-db (:db-file config))]
    (rss-items (:rss-feed config))
    (go (let [items (<! rss-chan)]
          (doseq [item items]
            (println (:link item))
            (update-row db item))
          (.close db)))))

(set! *main-cli-fn* -main)

