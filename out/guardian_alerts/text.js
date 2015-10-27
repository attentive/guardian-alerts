// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.text');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
if(typeof guardian_alerts.text.fs !== 'undefined'){
} else {
guardian_alerts.text.fs = require("fs");
}
if(typeof guardian_alerts.text.tokenize !== 'undefined'){
} else {
guardian_alerts.text.tokenize = require("text-tokenize");
}
guardian_alerts.text.strip_html = (function guardian_alerts$text$strip_html(input){
return clojure.string.replace.call(null,input,/<\/?[^>]+>/,"");
});
guardian_alerts.text.slurp = (function guardian_alerts$text$slurp(f){
return guardian_alerts.text.fs.readFileSync(f,"utf8");
});
guardian_alerts.text.read_edn = (function guardian_alerts$text$read_edn(f){
return cljs.reader.read_string.call(null,guardian_alerts.text.slurp.call(null,f));
});
guardian_alerts.text.keyword_match = (function guardian_alerts$text$keyword_match(keywords){
return cljs.core.some.call(null,cljs.core.set.call(null,guardian_alerts.text.read_edn.call(null,"keywords.edn")),keywords);
});
guardian_alerts.text.keywordize = cljs.core.comp.call(null,cljs.core.js__GT_clj,guardian_alerts.text.tokenize,guardian_alerts.text.strip_html);

//# sourceMappingURL=text.js.map