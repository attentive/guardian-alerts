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
guardian_alerts.core.pipelined_fetch_page = (function guardian_alerts$core$pipelined_fetch_page(in_chan,url){
var out_chan = cljs.core.async.chan.call(null);
var c__1291__auto___1364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto___1364,out_chan){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto___1364,out_chan){
return (function (state_1355){
var state_val_1356 = (state_1355[(1)]);
if((state_val_1356 === (1))){
var state_1355__$1 = state_1355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1355__$1,(2),in_chan);
} else {
if((state_val_1356 === (2))){
var inst_1351 = (state_1355[(2)]);
var inst_1352 = (function (){var data = inst_1351;
return ((function (data,inst_1351,state_val_1356,c__1291__auto___1364,out_chan){
return (function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return cljs.core.async.put_BANG_.call(null,out_chan,body);
}
});
;})(data,inst_1351,state_val_1356,c__1291__auto___1364,out_chan))
})();
var inst_1353 = guardian_alerts.core.request.call(null,url,inst_1352);
var state_1355__$1 = state_1355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1355__$1,inst_1353);
} else {
return null;
}
}
});})(c__1291__auto___1364,out_chan))
;
return ((function (switch__1270__auto__,c__1291__auto___1364,out_chan){
return (function() {
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__ = null;
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____0 = (function (){
var statearr_1360 = [null,null,null,null,null,null,null];
(statearr_1360[(0)] = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__);

(statearr_1360[(1)] = (1));

return statearr_1360;
});
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____1 = (function (state_1355){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1361){if((e1361 instanceof Object)){
var ex__1274__auto__ = e1361;
var statearr_1362_1365 = state_1355;
(statearr_1362_1365[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1366 = state_1355;
state_1355 = G__1366;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__ = function(state_1355){
switch(arguments.length){
case 0:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____1.call(this,state_1355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____0;
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto____1;
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto___1364,out_chan))
})();
var state__1293__auto__ = (function (){var statearr_1363 = f__1292__auto__.call(null);
(statearr_1363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto___1364);

return statearr_1363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto___1364,out_chan))
);


return out_chan;
});
guardian_alerts.core.DUBLINCORE = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["dc","http://purl.org/dc/elements/1.1/"], null));
guardian_alerts.core.get_text = (function guardian_alerts$core$get_text(){
var args1367 = [];
var len__3300__auto___1370 = arguments.length;
var i__3301__auto___1371 = (0);
while(true){
if((i__3301__auto___1371 < len__3300__auto___1370)){
args1367.push((arguments[i__3301__auto___1371]));

var G__1372 = (i__3301__auto___1371 + (1));
i__3301__auto___1371 = G__1372;
continue;
} else {
}
break;
}

var G__1369 = args1367.length;
switch (G__1369) {
case 2:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1367.length)].join('')));

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
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"guid","guid",-1152728289),guardian_alerts.core.get_text.call(null,frag,"guid"),new cljs.core.Keyword(null,"link","link",-1769163468),guardian_alerts.core.get_text.call(null,frag,"link"),new cljs.core.Keyword(null,"title","title",636505583),guardian_alerts.core.get_text.call(null,frag,"title"),new cljs.core.Keyword(null,"date","date",-1463434462),guardian_alerts.core.get_text.call(null,frag,"dc:date",guardian_alerts.core.DUBLINCORE),new cljs.core.Keyword(null,"creator","creator",-1069241724),guardian_alerts.core.get_text.call(null,frag,"dc:creator",guardian_alerts.core.DUBLINCORE),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
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
var c__1291__auto___1444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto___1444,out_chan){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto___1444,out_chan){
return (function (state_1427){
var state_val_1428 = (state_1427[(1)]);
if((state_val_1428 === (1))){
var state_1427__$1 = state_1427;
var statearr_1429_1445 = state_1427__$1;
(statearr_1429_1445[(2)] = null);

(statearr_1429_1445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1428 === (2))){
var state_1427__$1 = state_1427;
var statearr_1430_1446 = state_1427__$1;
(statearr_1430_1446[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1428 === (3))){
var inst_1425 = (state_1427[(2)]);
var state_1427__$1 = state_1427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1427__$1,inst_1425);
} else {
if((state_val_1428 === (4))){
var state_1427__$1 = state_1427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1427__$1,(7),in_chan);
} else {
if((state_val_1428 === (5))){
var state_1427__$1 = state_1427;
var statearr_1432_1447 = state_1427__$1;
(statearr_1432_1447[(2)] = null);

(statearr_1432_1447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1428 === (6))){
var inst_1423 = (state_1427[(2)]);
var state_1427__$1 = state_1427;
var statearr_1433_1448 = state_1427__$1;
(statearr_1433_1448[(2)] = inst_1423);

(statearr_1433_1448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1428 === (7))){
var inst_1412 = (state_1427[(7)]);
var inst_1412__$1 = (state_1427[(2)]);
var inst_1413 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1412__$1);
var inst_1414 = guardian_alerts.core.fetch_page.call(null,inst_1413);
var state_1427__$1 = (function (){var statearr_1434 = state_1427;
(statearr_1434[(7)] = inst_1412__$1);

return statearr_1434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1427__$1,(8),inst_1414);
} else {
if((state_val_1428 === (8))){
var inst_1412 = (state_1427[(7)]);
var inst_1416 = (state_1427[(2)]);
var inst_1417 = guardian_alerts.core.parse_article.call(null,inst_1416);
var inst_1418 = cljs.core.merge.call(null,inst_1412,inst_1417);
var inst_1419 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1418);
var state_1427__$1 = (function (){var statearr_1435 = state_1427;
(statearr_1435[(8)] = inst_1419);

return statearr_1435;
})();
var statearr_1436_1449 = state_1427__$1;
(statearr_1436_1449[(2)] = null);

(statearr_1436_1449[(1)] = (2));


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
});})(c__1291__auto___1444,out_chan))
;
return ((function (switch__1270__auto__,c__1291__auto___1444,out_chan){
return (function() {
var guardian_alerts$core$full_articles_$_state_machine__1271__auto__ = null;
var guardian_alerts$core$full_articles_$_state_machine__1271__auto____0 = (function (){
var statearr_1440 = [null,null,null,null,null,null,null,null,null];
(statearr_1440[(0)] = guardian_alerts$core$full_articles_$_state_machine__1271__auto__);

(statearr_1440[(1)] = (1));

return statearr_1440;
});
var guardian_alerts$core$full_articles_$_state_machine__1271__auto____1 = (function (state_1427){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1441){if((e1441 instanceof Object)){
var ex__1274__auto__ = e1441;
var statearr_1442_1450 = state_1427;
(statearr_1442_1450[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1451 = state_1427;
state_1427 = G__1451;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$full_articles_$_state_machine__1271__auto__ = function(state_1427){
switch(arguments.length){
case 0:
return guardian_alerts$core$full_articles_$_state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$full_articles_$_state_machine__1271__auto____1.call(this,state_1427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$full_articles_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$full_articles_$_state_machine__1271__auto____0;
guardian_alerts$core$full_articles_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$full_articles_$_state_machine__1271__auto____1;
return guardian_alerts$core$full_articles_$_state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto___1444,out_chan))
})();
var state__1293__auto__ = (function (){var statearr_1443 = f__1292__auto__.call(null);
(statearr_1443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto___1444);

return statearr_1443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto___1444,out_chan))
);


return out_chan;
});
guardian_alerts.core.migrate = (function guardian_alerts$core$migrate(db){
var out_chan = cljs.core.async.chan.call(null);
guardian_alerts.db.migrate_db.call(null,db,((function (out_chan){
return (function (){
cljs.core.println.call(null,"Migration complete.");

return cljs.core.async.put_BANG_.call(null,out_chan,true);
});})(out_chan))
);

return out_chan;
});
guardian_alerts.core.fetch_rows = (function guardian_alerts$core$fetch_rows(db){
var out_chan = cljs.core.async.chan.call(null);
guardian_alerts.db.each_row.call(null,db,((function (out_chan){
return (function (row_data){
return cljs.core.async.put_BANG_.call(null,out_chan,row_data);
});})(out_chan))
);

return out_chan;
});
guardian_alerts.core.broken_row = (function guardian_alerts$core$broken_row(row_data){
return ((cljs.core.get.call(null,row_data,"article") == null)) || ((cljs.core.get.call(null,row_data,"article_keywords") == null));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___1482 = arguments.length;
var i__3301__auto___1483 = (0);
while(true){
if((i__3301__auto___1483 < len__3300__auto___1482)){
args__3303__auto__.push((arguments[i__3301__auto___1483]));

var G__1484 = (i__3301__auto___1483 + (1));
i__3301__auto___1483 = G__1484;
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
var out_chan = guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.core.full_articles.call(null,guardian_alerts.pipeline.cond_BAR_.call(null,guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.pipeline.coll_BAR_.call(null,guardian_alerts.core.pipelined_fetch_page.call(null,guardian_alerts.core.migrate.call(null,db),rss_url),guardian_alerts.core.rss_items),guardian_alerts.core.parse_rss_item),((function (config,db,rss_url,upsert_row){
return (function (p1__1452_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1452_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1466){
var state_val_1467 = (state_1466[(1)]);
if((state_val_1467 === (1))){
var state_1466__$1 = state_1466;
var statearr_1468_1485 = state_1466__$1;
(statearr_1468_1485[(2)] = null);

(statearr_1468_1485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1467 === (2))){
var state_1466__$1 = state_1466;
var statearr_1469_1486 = state_1466__$1;
(statearr_1469_1486[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1467 === (3))){
var inst_1464 = (state_1466[(2)]);
var state_1466__$1 = state_1466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1466__$1,inst_1464);
} else {
if((state_val_1467 === (4))){
var state_1466__$1 = state_1466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1466__$1,(7),out_chan);
} else {
if((state_val_1467 === (5))){
var state_1466__$1 = state_1466;
var statearr_1471_1487 = state_1466__$1;
(statearr_1471_1487[(2)] = null);

(statearr_1471_1487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1467 === (6))){
var inst_1462 = (state_1466[(2)]);
var state_1466__$1 = state_1466;
var statearr_1472_1488 = state_1466__$1;
(statearr_1472_1488[(2)] = inst_1462);

(statearr_1472_1488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1467 === (7))){
var inst_1457 = (state_1466[(2)]);
var inst_1458 = cljs.core.println.call(null,inst_1457);
var state_1466__$1 = (function (){var statearr_1473 = state_1466;
(statearr_1473[(7)] = inst_1458);

return statearr_1473;
})();
var statearr_1474_1489 = state_1466__$1;
(statearr_1474_1489[(2)] = null);

(statearr_1474_1489[(1)] = (2));


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
});})(c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
;
return ((function (switch__1270__auto__,c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function() {
var guardian_alerts$core$state_machine__1271__auto__ = null;
var guardian_alerts$core$state_machine__1271__auto____0 = (function (){
var statearr_1478 = [null,null,null,null,null,null,null,null];
(statearr_1478[(0)] = guardian_alerts$core$state_machine__1271__auto__);

(statearr_1478[(1)] = (1));

return statearr_1478;
});
var guardian_alerts$core$state_machine__1271__auto____1 = (function (state_1466){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1479){if((e1479 instanceof Object)){
var ex__1274__auto__ = e1479;
var statearr_1480_1490 = state_1466;
(statearr_1480_1490[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1491 = state_1466;
state_1466 = G__1491;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1271__auto__ = function(state_1466){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1271__auto____1.call(this,state_1466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1271__auto____0;
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1271__auto____1;
return guardian_alerts$core$state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1293__auto__ = (function (){var statearr_1481 = f__1292__auto__.call(null);
(statearr_1481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto__);

return statearr_1481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1291__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1453){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1453));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map