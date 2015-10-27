(ns guardian-alerts.text
  (:require [cljs.reader :as reader]
            [clojure.string :as string]))

(defonce fs (js/require "fs"))
(defonce tokenize (js/require "text-tokenize"))

(defn- strip-html [input]
  (string/replace input #"</?[^>]+>" ""))

(defn slurp [f]
    (.readFileSync fs f "utf8"))

(defn read-edn [f]
  (reader/read-string (slurp f)))

(defn keyword-match [keywords]
  (some (set (read-edn "keywords.edn")) keywords))

(def keywordize (comp js->clj tokenize strip-html))

