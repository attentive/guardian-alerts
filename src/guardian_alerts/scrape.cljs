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
     :author (get-text frag "dc:creator" DUBLINCORE-NS)
     :description desc
     :keywords (keywordize desc)}))

(defn rss-items [xml]
  (let [doc (.parseXml libxmljs xml)]
    (map parse-rss-item (.find doc "//item"))))

(defn parse-article [html-text]
  (let [$ (.load cheerio html-text)
        link (.attr ($ "link[rel=canonical]") "href")
        article-text (.html $ ".content__article-body")]
    {:link link
     :guid link
     :title (.attr ($ "meta[property='og:title']") "content")
     :date (.attr ($ "meta[property='article:published_time']") "content")
     :author (.attr ($ "meta[name=author]") "content")
     :description (.attr ($ "meta[name=description]") "content")
     :article article-text
     :keywords (keywordize article-text)}))

