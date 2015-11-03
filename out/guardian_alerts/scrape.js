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
var args80 = [];
var len__3300__auto___83 = arguments.length;
var i__3301__auto___84 = (0);
while(true){
if((i__3301__auto___84 < len__3300__auto___83)){
args80.push((arguments[i__3301__auto___84]));

var G__85 = (i__3301__auto___84 + (1));
i__3301__auto___84 = G__85;
continue;
} else {
}
break;
}

var G__82 = args80.length;
switch (G__82) {
case 2:
return guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.scrape.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80.length)].join('')));

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
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"guid","guid",-1152728289),guardian_alerts.scrape.get_text.call(null,frag,"guid"),new cljs.core.Keyword(null,"link","link",-1769163468),guardian_alerts.scrape.get_text.call(null,frag,"link"),new cljs.core.Keyword(null,"title","title",636505583),guardian_alerts.scrape.get_text.call(null,frag,"title"),new cljs.core.Keyword(null,"date","date",-1463434462),guardian_alerts.scrape.get_text.call(null,frag,"dc:date",guardian_alerts.scrape.DUBLINCORE_NS),new cljs.core.Keyword(null,"author","author",2111686192),guardian_alerts.scrape.get_text.call(null,frag,"dc:creator",guardian_alerts.scrape.DUBLINCORE_NS),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
});
guardian_alerts.scrape.rss_items = (function guardian_alerts$scrape$rss_items(xml){
var doc = guardian_alerts.scrape.libxmljs.parseXml(xml);
return cljs.core.map.call(null,guardian_alerts.scrape.parse_rss_item,doc.find("//item"));
});
guardian_alerts.scrape.parse_article = (function guardian_alerts$scrape$parse_article(html_text){
var $ = guardian_alerts.scrape.cheerio.load(html_text);
var link = $.call(null,"link[rel=canonical]").attr("href");
var article_text = $.html(".content__article-body");
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"guid","guid",-1152728289),link,new cljs.core.Keyword(null,"title","title",636505583),$.call(null,"meta[property='og:title']").attr("content"),new cljs.core.Keyword(null,"date","date",-1463434462),$.call(null,"meta[property='article:published_time']").attr("content"),new cljs.core.Keyword(null,"author","author",2111686192),$.call(null,"meta[name=author]").attr("content"),new cljs.core.Keyword(null,"description","description",-1428560544),$.call(null,"meta[name=description]").attr("content"),new cljs.core.Keyword(null,"article","article",-21685045),article_text,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,article_text)], null);
});

//# sourceMappingURL=scrape.js.map