(ns guardian-alerts.core
  (:require [cljs.core.async :refer [put! <! chan timeout pub sub]]
            [cljs.nodejs :as nodejs]
            [clojure.string :as s])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(defonce cheerio (js/require "cheerio"))
(defonce request (js/require "request"))
(defonce sqlite3 (js/require "sqlite3"))
(defonce libxmljs (js/require "libxmljs"))
(defonce tokenize (js/require "text-tokenize"))

(defn strip-html [input]
  (s/replace input #"</?[^>]+>" ""))

(def keywordize (comp js->clj tokenize strip-html))

(defn init-db [callback] 
  (let [db (sqlite3.Database. "data.sqlite")]
    (.serialize db (fn [] 
                     (.run db "CREATE TABLE IF NOT EXISTS data (name TEXT)")
                     (callback db)))))

(defn update-row [db value] 
  (doto (.prepare db "INSERT INTO data VALUES (?)")
    (.run value)
    (.finalize)))

(defn read-rows [db]
  (.each db "SELECT rowid AS id, name FROM data"
         (fn [err row] (println (.-id row) ": " (.-name row)))))

(defn fetch-page [url callback]
  (request url (fn [error response body] 
                 (if error 
                   (println "Error fetching page: " error)
                   (callback body)))))

(defonce rss-chan (chan))

(defn rss-item [frag]
  (let [gt #(.text (.get %1 %2))
        desc (gt frag "description")]
    {:link (gt frag "link")
     :description desc
     :keywords (keywordize desc)}))

(defn has-keyword [item]
  (some #{"asylum" "refugees"} (:keywords item)))

(defn rss-items [url]
  (fetch-page url
              (fn [body]
                (let [doc (.parseXml libxmljs body)
                      items (.find doc "//item")
                      get-text (fn [item path] (.text (.get item path)))]
                  (put! rss-chan 
                        (filter has-keyword (map rss-item items)))))))

(defn run [db]
  (fetch-page "https://morph.io" 
              (fn [body]
                (let [$ (.load cheerio body)
                      title (.text ($ "title"))]
                  (update-row db title))
                (read-rows db)
                (.close db)))) 

(defn -main [& args]
  (rss-items "http://www.theguardian.com/au/rss")
  (go (let [items (<! rss-chan)]
        (println items)))
  (init-db run))

(set! *main-cli-fn* -main)

