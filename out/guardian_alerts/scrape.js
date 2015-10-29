// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.scrape');
goog.require('cljs.core');
goog.require('guardian_alerts.text');
if(typeof guardian_alerts.scrape.request !== 'undefined'){
} else {
guardian_alerts.scrape.request = require("request");
}
if(typeof guardian_alerts.scrape.cheerio !== 'undefined'){
} else {
guardian_alerts.scrape.cheerio = require("cheerio");
}
if(typeof guardian_alerts.scrape.libxmljs !== 'undefined'){
} else {
guardian_alerts.scrape.libxmljs = require("libxmljs");
}
guardian_alerts.scrape.fetch_page = (function guardian_alerts$scrape$fetch_page(url,callback){
return guardian_alerts.scrape.request.call(null,url,(function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"fetch error",error);
} else {
return callback.call(null,body);
}
}));
});
if(typeof guardian_alerts.scrape.DUBLINCORE_NS !== 'undefined'){
} else {
guardian_alerts.scrape.DUBLINCORE_NS = {"dc": "http://purl.org/dc/elements/1.1/"};
}
guardian_alerts.scrape.get_text = (function guardian_alerts$scrape$get_text(){
var args28 = [];
var len__3300__auto___31 = arguments.length;
var i__3301__auto___32 = (0);
while(true){
if((i__3301__auto___32 < len__3300__auto___31)){
args28.push((arguments[i__3301__auto___32]));

var G__33 = (i__3301__auto___32 + (1));
i__3301__auto___32 = G__33;
continue;
} else {
}
break;
}

var G__30 = args28.length;
switch (G__30) {
case 2:
return guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28.length)].join('')));

}
});

guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$2 = (function (item,path){
return item.get(path).text();
});

guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$3 = (function (item,path,ns_uri){
return item.get(path,ns_uri).text();
});

guardian_alerts.scrape.get_text.cljs$lang$maxFixedArity = 3;
guardian_alerts.scrape.parse_rss_item = (function guardian_alerts$scrape$parse_rss_item(frag){
var desc = guardian_alerts.scrape.get_text.call(null,frag,"description");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"guid","guid",-1152728289),guardian_alerts.scrape.get_text.call(null,frag,"guid"),new cljs.core.Keyword(null,"link","link",-1769163468),guardian_alerts.scrape.get_text.call(null,frag,"link"),new cljs.core.Keyword(null,"title","title",636505583),guardian_alerts.scrape.get_text.call(null,frag,"title"),new cljs.core.Keyword(null,"date","date",-1463434462),guardian_alerts.scrape.get_text.call(null,frag,"dc:date",guardian_alerts.scrape.DUBLINCORE_NS),new cljs.core.Keyword(null,"creator","creator",-1069241724),guardian_alerts.scrape.get_text.call(null,frag,"dc:creator",guardian_alerts.scrape.DUBLINCORE_NS),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
});
guardian_alerts.scrape.rss_items = (function guardian_alerts$scrape$rss_items(xml){
var doc = guardian_alerts.scrape.libxmljs.parseXml(xml);
return cljs.core.map.call(null,guardian_alerts.scrape.parse_rss_item,doc.find("//item"));
});
guardian_alerts.scrape.parse_article = (function guardian_alerts$scrape$parse_article(html_text){
var $ = guardian_alerts.scrape.cheerio.load(html_text);
var article_text = $.html(".content__article-body");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),article_text,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061),guardian_alerts.text.keywordize.call(null,article_text)], null);
});
guardian_alerts.scrape.full_article = (function guardian_alerts$scrape$full_article(item,html_text){
return cljs.core.merge.call(null,item,guardian_alerts.scrape.parse_article.call(null,html_text));
});

//# sourceMappingURL=scrape.js.map