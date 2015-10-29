(ns guardian-alerts.core
  (:require [cljs.core.async :refer [put! <! chan close! <!]]
            [cljs.nodejs :as nodejs]
            [guardian-alerts.pipeline :refer [| coll| cond|]]
            [guardian-alerts.db :refer [init-db analyse-db migrate-db update-row each-row repair-row]]
            [guardian-alerts.text :refer [slurp read-edn keywordize keyword-match]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(defonce request (js/require "request"))
(defonce cheerio (js/require "cheerio"))
(defonce libxmljs (js/require "libxmljs"))
(defonce http (js/require "http"))

; RSS and scraping

(defn fetch-page [url]
  (let [out-chan (chan)]
    (request url (fn [error response body] 
                   (if error 
                     (println "Error fetching page: " error)
                     (do #_(println "Fetched page: " body)
                         (put! out-chan body)))))
    out-chan))

(defn pipelined-fetch-page [in-chan url]
  (let [out-chan (chan)]
    (go (let [data (<! in-chan)] 
          (request url (fn [error response body] 
                         (if error 
                           (println "Error fetching page: " error)
                           (do #_(println "Fetched page: " body)
                               (put! out-chan body)))))))
    out-chan))

(def DUBLINCORE (clj->js {"dc" "http://purl.org/dc/elements/1.1/"}))

(defn get-text 
  ([item path] (.text (.get item path)))
  ([item path ns-uri]
   (.text (.get item path ns-uri))))

(defn parse-rss-item [frag]
  (let [desc (get-text frag "description")]
    {:guid (get-text frag "guid")
     :link (get-text frag "link")
     :title (get-text frag "title")
     :date (get-text frag "dc:date" DUBLINCORE)
     :creator (get-text frag "dc:creator" DUBLINCORE)
     :description desc
     :keywords (keywordize desc)}))

(defn rss-items [xml]
  (let [doc (.parseXml libxmljs xml)]
    (.find doc "//item")))

(defn parse-article [html-text]
  (let [$ (.load cheerio html-text)
        article-text (.html $ ".content__article-body")]
    {:article article-text
     :article-keywords (keywordize article-text)}))

(defn full-articles [in-chan]
  (let [out-chan (chan)]
    (go (while true
          (let [item (<! in-chan)]
            (put! out-chan (merge item (parse-article (<! (fetch-page (:link item)))))))))
    out-chan))

; DB

(defn migrate [db]
  (let [out-chan (chan)]
    (migrate-db db (fn [] 
                     (println "Migration complete.")
                     (put! out-chan true)))
    out-chan))

(defn fetch-rows [db]
  (let [out-chan (chan)]
    (each-row db (fn [row-data] (put! out-chan row-data)))
    out-chan))

(defn broken-row [row-data]
  (or (nil? (get row-data "article")) (nil? (get row-data "article_keywords"))))

(defn -main [& args]
  (let [config (read-edn "config.edn") ; (first args) 
        db (init-db (:db-file config))
        rss-url (:rss-feed config)
        upsert-row (partial update-row db)]
    (let [out-chan (-> (migrate db)
                       (pipelined-fetch-page rss-url)
                       (coll| rss-items)
                       (| parse-rss-item)
                       (cond| #(keyword-match (:keywords %)))
                       (full-articles)
                       (| upsert-row))]
      (go (while true (println (<! out-chan)))))
    #_(let [out-chan (-> (fetch-rows db)
                       (cond| broken-row)
                       (| (partial repair-row db)))]
      (go (while true (println (<! out-chan)))))))

(set! *main-cli-fn* -main)

