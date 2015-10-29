(ns guardian-alerts.scrape
  (:require [guardian-alerts.text :refer [keywordize]]))

(defonce request (js/require "request"))
(defonce cheerio (js/require "cheerio"))
(defonce libxmljs (js/require "libxmljs"))

; RSS and scraping

(defn fetch-page [url callback]
  (request url (fn [error response body]
                 (if error
                   (println "fetch error" error)
                   (callback body)))))

(defonce DUBLINCORE-NS #js {:dc "http://purl.org/dc/elements/1.1/"})

(defn- get-text 
  ([item path] (.text (.get item path)))
  ([item path ns-uri]
   (.text (.get item path ns-uri))))

(defn- parse-rss-item [frag]
  (let [desc (get-text frag "description")]
    {:guid (get-text frag "guid")
     :link (get-text frag "link")
     :title (get-text frag "title")
     :date (get-text frag "dc:date" DUBLINCORE-NS)
     :creator (get-text frag "dc:creator" DUBLINCORE-NS)
     :description desc
     :keywords (keywordize desc)}))

(defn rss-items [xml]
  (let [doc (.parseXml libxmljs xml)]
    (map parse-rss-item (.find doc "//item"))))

(defn- parse-article [html-text]
  (let [$ (.load cheerio html-text)
        article-text (.html $ ".content__article-body")]
    {:article article-text
     :article-keywords (keywordize article-text)}))

(defn full-article [item html-text]
  (merge item (parse-article html-text)))

