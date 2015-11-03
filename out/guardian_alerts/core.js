// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('guardian_alerts.scrape');
goog.require('guardian_alerts.db');
goog.require('guardian_alerts.text');
cljs.nodejs.enable_util_print_BANG_.call(null);
/**
 * Convert a function f taking one argument and a callback to a function taking
 * one argument and an output chan, formed by calling f with a callback that places
 * the result of f on the channel. Optionally close the channel after the callback
 * returns. Return the output channel.
 */
guardian_alerts.core.source = (function guardian_alerts$core$source(f){
return (function (arg,out_chan){
f.call(null,arg,(function (result){
return cljs.core.async.put_BANG_.call(null,out_chan,result);
}));

return out_chan;
});
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___3681 = arguments.length;
var i__3301__auto___3682 = (0);
while(true){
if((i__3301__auto___3682 < len__3300__auto___3681)){
args__3303__auto__.push((arguments[i__3301__auto___3682]));

var G__3683 = (i__3301__auto___3682 + (1));
i__3301__auto___3682 = G__3683;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((0) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((0)),(0))):null);
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3304__auto__);
});

guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var config = guardian_alerts.text.read_edn.call(null,"config.edn");
var db = guardian_alerts.db.init_db.call(null,new cljs.core.Keyword(null,"db-file","db-file",-804029406).cljs$core$IFn$_invoke$arity$1(config));
var rss_url = new cljs.core.Keyword(null,"rss-feed","rss-feed",-1518622057).cljs$core$IFn$_invoke$arity$1(config);
var upsert_row = cljs.core.partial.call(null,guardian_alerts.db.update_row,db);
return guardian_alerts.db.migrate_db.call(null,db,((function (config,db,rss_url,upsert_row){
return (function (_){
var rss_chan = cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,(1)),cljs.core.comp.call(null,cljs.core.mapcat.call(null,guardian_alerts.scrape.rss_items),cljs.core.filter.call(null,((function (config,db,rss_url,upsert_row){
return (function (p1__3678_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__3678_SHARP_));
});})(config,db,rss_url,upsert_row))
),cljs.core.map.call(null,((function (config,db,rss_url,upsert_row){
return (function (p1__3679_SHARP_){
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(p1__3679_SHARP_);
});})(config,db,rss_url,upsert_row))
)));
var to_scrape_chan = cljs.core.async.chan.call(null);
var scraped_chan = cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,(1)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,guardian_alerts.db.update_row,db),((function (rss_chan,to_scrape_chan,config,db,rss_url,upsert_row){
return (function (html_text){
var article = guardian_alerts.scrape.parse_article.call(null,html_text);
cljs.core.println.call(null,"Processed",new cljs.core.Keyword(null,"guid","guid",-1152728289).cljs$core$IFn$_invoke$arity$1(article));

return article;
});})(rss_chan,to_scrape_chan,config,db,rss_url,upsert_row))
)));
guardian_alerts.core.source.call(null,guardian_alerts.scrape.fetch_page).call(null,rss_url,rss_chan);

cljs.core.async.pipe.call(null,rss_chan,to_scrape_chan);

return cljs.core.async.pipeline_async.call(null,(1),scraped_chan,guardian_alerts.core.source.call(null,guardian_alerts.scrape.fetch_page),to_scrape_chan);
});})(config,db,rss_url,upsert_row))
);
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq3680){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3680));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map