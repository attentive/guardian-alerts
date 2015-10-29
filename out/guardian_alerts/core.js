// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('guardian_alerts.pipeline');
goog.require('guardian_alerts.db');
goog.require('guardian_alerts.text');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof guardian_alerts.core.request !== 'undefined'){
} else {
guardian_alerts.core.request = require("request");
}
if(typeof guardian_alerts.core.cheerio !== 'undefined'){
} else {
guardian_alerts.core.cheerio = require("cheerio");
}
if(typeof guardian_alerts.core.libxmljs !== 'undefined'){
} else {
guardian_alerts.core.libxmljs = require("libxmljs");
}
if(typeof guardian_alerts.core.http !== 'undefined'){
} else {
guardian_alerts.core.http = require("http");
}
guardian_alerts.core.fetch_page_STAR_ = (function guardian_alerts$core$fetch_page_STAR_(url,callback){
return guardian_alerts.core.request.call(null,url,(function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"fetch error",error);
} else {
return callback.call(null,body);
}
}));
});
guardian_alerts.core.fetch_page = (function guardian_alerts$core$fetch_page(url){
var out_chan = cljs.core.async.chan.call(null);
guardian_alerts.core.request.call(null,url,((function (out_chan){
return (function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return cljs.core.async.put_BANG_.call(null,out_chan,body);
}
});})(out_chan))
);

return out_chan;
});
guardian_alerts.core.DUBLINCORE_NS = {"dc": "http://purl.org/dc/elements/1.1/"};
guardian_alerts.core.get_text = (function guardian_alerts$core$get_text(){
var args1321 = [];
var len__3300__auto___1324 = arguments.length;
var i__3301__auto___1325 = (0);
while(true){
if((i__3301__auto___1325 < len__3300__auto___1324)){
args1321.push((arguments[i__3301__auto___1325]));

var G__1326 = (i__3301__auto___1325 + (1));
i__3301__auto___1325 = G__1326;
continue;
} else {
}
break;
}

var G__1323 = args1321.length;
switch (G__1323) {
case 2:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1321.length)].join('')));

}
});

guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$2 = (function (item,path){
return item.get(path).text();
});

guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$3 = (function (item,path,ns_uri){
return item.get(path,ns_uri).text();
});

guardian_alerts.core.get_text.cljs$lang$maxFixedArity = 3;
guardian_alerts.core.parse_rss_item = (function guardian_alerts$core$parse_rss_item(frag){
var desc = guardian_alerts.core.get_text.call(null,frag,"description");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"guid","guid",-1152728289),guardian_alerts.core.get_text.call(null,frag,"guid"),new cljs.core.Keyword(null,"link","link",-1769163468),guardian_alerts.core.get_text.call(null,frag,"link"),new cljs.core.Keyword(null,"title","title",636505583),guardian_alerts.core.get_text.call(null,frag,"title"),new cljs.core.Keyword(null,"date","date",-1463434462),guardian_alerts.core.get_text.call(null,frag,"dc:date",guardian_alerts.core.DUBLINCORE_NS),new cljs.core.Keyword(null,"creator","creator",-1069241724),guardian_alerts.core.get_text.call(null,frag,"dc:creator",guardian_alerts.core.DUBLINCORE_NS),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
});
guardian_alerts.core.rss_items = (function guardian_alerts$core$rss_items(xml){
var doc = guardian_alerts.core.libxmljs.parseXml(xml);
return doc.find("//item");
});
guardian_alerts.core.parse_article = (function guardian_alerts$core$parse_article(html_text){
var $ = guardian_alerts.core.cheerio.load(html_text);
var article_text = $.html(".content__article-body");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),article_text,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061),guardian_alerts.text.keywordize.call(null,article_text)], null);
});
guardian_alerts.core.full_articles = (function guardian_alerts$core$full_articles(in_chan){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1398,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1398,out_chan){
return (function (state_1381){
var state_val_1382 = (state_1381[(1)]);
if((state_val_1382 === (1))){
var state_1381__$1 = state_1381;
var statearr_1383_1399 = state_1381__$1;
(statearr_1383_1399[(2)] = null);

(statearr_1383_1399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (2))){
var state_1381__$1 = state_1381;
var statearr_1384_1400 = state_1381__$1;
(statearr_1384_1400[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (3))){
var inst_1379 = (state_1381[(2)]);
var state_1381__$1 = state_1381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1381__$1,inst_1379);
} else {
if((state_val_1382 === (4))){
var state_1381__$1 = state_1381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1381__$1,(7),in_chan);
} else {
if((state_val_1382 === (5))){
var state_1381__$1 = state_1381;
var statearr_1386_1401 = state_1381__$1;
(statearr_1386_1401[(2)] = null);

(statearr_1386_1401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (6))){
var inst_1377 = (state_1381[(2)]);
var state_1381__$1 = state_1381;
var statearr_1387_1402 = state_1381__$1;
(statearr_1387_1402[(2)] = inst_1377);

(statearr_1387_1402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (7))){
var inst_1366 = (state_1381[(7)]);
var inst_1366__$1 = (state_1381[(2)]);
var inst_1367 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1366__$1);
var inst_1368 = guardian_alerts.core.fetch_page.call(null,inst_1367);
var state_1381__$1 = (function (){var statearr_1388 = state_1381;
(statearr_1388[(7)] = inst_1366__$1);

return statearr_1388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1381__$1,(8),inst_1368);
} else {
if((state_val_1382 === (8))){
var inst_1366 = (state_1381[(7)]);
var inst_1370 = (state_1381[(2)]);
var inst_1371 = guardian_alerts.core.parse_article.call(null,inst_1370);
var inst_1372 = cljs.core.merge.call(null,inst_1366,inst_1371);
var inst_1373 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1372);
var state_1381__$1 = (function (){var statearr_1389 = state_1381;
(statearr_1389[(8)] = inst_1373);

return statearr_1389;
})();
var statearr_1390_1403 = state_1381__$1;
(statearr_1390_1403[(2)] = null);

(statearr_1390_1403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__1248__auto___1398,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1398,out_chan){
return (function() {
var guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = null;
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____0 = (function (){
var statearr_1394 = [null,null,null,null,null,null,null,null,null];
(statearr_1394[(0)] = guardian_alerts$core$full_articles_$_state_machine__1228__auto__);

(statearr_1394[(1)] = (1));

return statearr_1394;
});
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____1 = (function (state_1381){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1395){if((e1395 instanceof Object)){
var ex__1231__auto__ = e1395;
var statearr_1396_1404 = state_1381;
(statearr_1396_1404[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1405 = state_1381;
state_1381 = G__1405;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = function(state_1381){
switch(arguments.length){
case 0:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____1.call(this,state_1381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____0;
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____1;
return guardian_alerts$core$full_articles_$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1398,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1397 = f__1249__auto__.call(null);
(statearr_1397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1398);

return statearr_1397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1398,out_chan))
);


return out_chan;
});
guardian_alerts.core.broken_row = (function guardian_alerts$core$broken_row(row_data){
return ((cljs.core.get.call(null,row_data,"article") == null)) || ((cljs.core.get.call(null,row_data,"article_keywords") == null));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___1436 = arguments.length;
var i__3301__auto___1437 = (0);
while(true){
if((i__3301__auto___1437 < len__3300__auto___1436)){
args__3303__auto__.push((arguments[i__3301__auto___1437]));

var G__1438 = (i__3301__auto___1437 + (1));
i__3301__auto___1437 = G__1438;
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
var out_chan = guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.core.full_articles.call(null,guardian_alerts.pipeline.cond_BAR_.call(null,guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.pipeline.seq_BAR_.call(null,guardian_alerts.pipeline.re_source_BAR_.call(null,guardian_alerts.pipeline.source_BAR_.call(null,guardian_alerts.db.migrate_db,db),guardian_alerts.core.fetch_page_STAR_,rss_url),guardian_alerts.core.rss_items),guardian_alerts.core.parse_rss_item),((function (config,db,rss_url,upsert_row){
return (function (p1__1406_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1406_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1420){
var state_val_1421 = (state_1420[(1)]);
if((state_val_1421 === (1))){
var state_1420__$1 = state_1420;
var statearr_1422_1439 = state_1420__$1;
(statearr_1422_1439[(2)] = null);

(statearr_1422_1439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1421 === (2))){
var state_1420__$1 = state_1420;
var statearr_1423_1440 = state_1420__$1;
(statearr_1423_1440[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1421 === (3))){
var inst_1418 = (state_1420[(2)]);
var state_1420__$1 = state_1420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1420__$1,inst_1418);
} else {
if((state_val_1421 === (4))){
var state_1420__$1 = state_1420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1420__$1,(7),out_chan);
} else {
if((state_val_1421 === (5))){
var state_1420__$1 = state_1420;
var statearr_1425_1441 = state_1420__$1;
(statearr_1425_1441[(2)] = null);

(statearr_1425_1441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1421 === (6))){
var inst_1416 = (state_1420[(2)]);
var state_1420__$1 = state_1420;
var statearr_1426_1442 = state_1420__$1;
(statearr_1426_1442[(2)] = inst_1416);

(statearr_1426_1442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1421 === (7))){
var inst_1411 = (state_1420[(2)]);
var inst_1412 = cljs.core.println.call(null,inst_1411);
var state_1420__$1 = (function (){var statearr_1427 = state_1420;
(statearr_1427[(7)] = inst_1412);

return statearr_1427;
})();
var statearr_1428_1443 = state_1420__$1;
(statearr_1428_1443[(2)] = null);

(statearr_1428_1443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
;
return ((function (switch__1227__auto__,c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function() {
var guardian_alerts$core$state_machine__1228__auto__ = null;
var guardian_alerts$core$state_machine__1228__auto____0 = (function (){
var statearr_1432 = [null,null,null,null,null,null,null,null];
(statearr_1432[(0)] = guardian_alerts$core$state_machine__1228__auto__);

(statearr_1432[(1)] = (1));

return statearr_1432;
});
var guardian_alerts$core$state_machine__1228__auto____1 = (function (state_1420){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1433){if((e1433 instanceof Object)){
var ex__1231__auto__ = e1433;
var statearr_1434_1444 = state_1420;
(statearr_1434_1444[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1445 = state_1420;
state_1420 = G__1445;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1228__auto__ = function(state_1420){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1228__auto____1.call(this,state_1420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1228__auto____0;
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1228__auto____1;
return guardian_alerts$core$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1250__auto__ = (function (){var statearr_1435 = f__1249__auto__.call(null);
(statearr_1435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto__);

return statearr_1435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1248__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1407){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1407));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map