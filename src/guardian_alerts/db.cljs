(ns guardian-alerts.db)

(defonce sqlite3 (js/require "sqlite3"))

(defn init-db [filename] 
  (let [db (sqlite3.Database. filename)]
    (.serialize db (fn [] 
                     (.run db "CREATE TABLE IF NOT EXISTS data (guid TEXT PRIMARY KEY NOT NULL, link TEXT, description TEXT, keywords TEXT)")
                     db))))

(defn update-row [db {:keys [guid link description keywords]}] 
  (let [stmt (.prepare db "INSERT OR REPLACE INTO data VALUES (?, ?, ?, ?)")]
    (.run stmt guid link description (str keywords))
    (.finalize stmt)))

(defn read-rows [db]
  (.each db "SELECT * FROM data"
         (fn [err row] (println (js->clj row)))))

