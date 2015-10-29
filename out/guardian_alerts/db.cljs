(ns guardian-alerts.db)

(defonce sqlite3 (js/require "sqlite3"))

(defn init-db [filename] 
  (let [db (sqlite3.Database. filename)]
    (.serialize db (fn [] 
                     (.run db "CREATE TABLE IF NOT EXISTS data (
                              guid TEXT PRIMARY KEY NOT NULL, 
                              link TEXT, 
                              description TEXT, 
                              keywords TEXT,
                              article TEXT,
                              article_keywords TEXT,
                              title TEXT,
                              date TEXT, 
                              creator TEXT
                              )")
                     db))))

(defn add-column [db colnam]
  (.serialize db (fn []
                   (let [stmt (str "ALTER TABLE data ADD COLUMN " colnam " TEXT")]
                     (println "migrated" (str "(" stmt ")"))
                     (.run db stmt))
                   db)))

(defn analyse-db [db callback]
  (.all db "PRAGMA table_info(data)"
        (fn [err rows] (callback (js->clj rows)))))

(defn migrate-db [db callback]
  (analyse-db db
              (fn [rows]
                (let [has-col (set (map #(get % "name") rows))]
                  (doseq [colnam ["article" "article_keywords" "title" "date" "creator"]]
                    (if (not (has-col colnam))
                      (do (println "column" colnam "not found")
                          (add-column db colnam))))
                  (callback true)))))

(defn update-row [db {:keys [guid link description keywords article article-keywords title date creator]}] 
  (let [stmt (.prepare db "INSERT OR REPLACE INTO data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")]
    (.run stmt guid link description (str keywords) article (str article-keywords) title date creator)
    (.finalize stmt)
    (str "processed " guid)))

(defn missing-values [row-data]
  (some nil? (vals row-data)))

(defn repair-row [db {:keys [guid link description keywords article article-keywords title date creator]}] 
  (str "repaired " guid))

(defn each-row [db callback]
  (.each db "SELECT * FROM data"
         (fn [err row] (callback (js->clj row)))))

