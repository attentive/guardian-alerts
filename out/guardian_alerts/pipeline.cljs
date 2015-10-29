(ns guardian-alerts.pipeline 
  (:require [cljs.core.async :refer [put! <! chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [guardian-alerts.macros :refer [while-let]]))

(defn source| [f & args]
  (let [out-chan (chan)]
    (apply f (concat args [(fn [res] (put! out-chan res))]))
    out-chan))

(defn re-source| [in-chan f & args]
  (let [out-chan (chan)
        args* (concat args [(fn [res] (put! out-chan res))])] 
    (go (<! in-chan)
        (apply f args*))
    out-chan))

(defn sink| [in-chan f]
  (go (while true (f (<! in-chan))))
  nil)

(defn | [in-chan f]
  (let [out-chan (chan)]
    (go (while true (>! out-chan (f (<! in-chan)))))
    out-chan))

(defn seq| [in-chan f]
  (let [out-chan (chan)]
    (go (while true (let [coll (f (<! in-chan))]
                      (doseq [item coll] (put! out-chan item)))))
    out-chan))

(defn cond| [in-chan pred]
  (let [out-chan (chan)]
    (go (while true (let [val (<! in-chan)]
                      (if (pred val) (put! out-chan val)))))
    out-chan))



