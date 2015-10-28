(ns guardian-alerts.pipeline 
  (:require [cljs.core.async :refer [put! <! chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn | [in-chan f]
  (let [out-chan (chan)]
    (go (while true (>! out-chan (f (<! in-chan)))))
    out-chan))

(defn coll| [in-chan f]
  (let [out-chan (chan)]
    (go (while true (let [coll (f (<! in-chan))]
                      (doseq [item coll] (put! out-chan item)))))
    out-chan))

(defn cond| [in-chan pred]
  (let [out-chan (chan)]
    (go (while true (let [val (<! in-chan)]
                      (if (pred val) (put! out-chan val)))))
    out-chan))

(defn condf| [in-chan pred f]
  (let [out-chan (chan)]
    (go (while true (let [val (<! in-chan)]
                      (if (pred val) (put! out-chan (f val)) (put! out-chan val)))))))



