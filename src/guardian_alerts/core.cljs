(ns guardian-alerts.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defonce cheerio (js/require "cheerio"))
(defonce request (js/require "request"))
(defonce sqlite3 (js/require "sqlite3"))

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

(defn run [db]
  (fetch-page "https://morph.io" 
              (fn [body]
                (let [$ (.load cheerio body)
                      title (.text ($ "title"))]
                  (update-row db title))
                (read-rows db)
                (.close db)))) 

(defn -main [& args]
  (init-db run))

(set! *main-cli-fn* -main)

