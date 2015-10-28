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
guardian_alerts.core.get_text = (function guardian_alerts$core$get_text(item,path){
return item.get(path).text();
});
guardian_alerts.core.parse_rss_item = (function guardian_alerts$core$parse_rss_item(frag){
var gt = (function (p1__1367_SHARP_,p2__1368_SHARP_){
return p1__1367_SHARP_.get(p2__1368_SHARP_).text();
});
var desc = gt.call(null,frag,"description");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"guid","guid",-1152728289),gt.call(null,frag,"guid"),new cljs.core.Keyword(null,"link","link",-1769163468),gt.call(null,frag,"link"),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
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
var c__1291__auto___1439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto___1439,out_chan){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto___1439,out_chan){
return (function (state_1422){
var state_val_1423 = (state_1422[(1)]);
if((state_val_1423 === (1))){
var state_1422__$1 = state_1422;
var statearr_1424_1440 = state_1422__$1;
(statearr_1424_1440[(2)] = null);

(statearr_1424_1440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1423 === (2))){
var state_1422__$1 = state_1422;
var statearr_1425_1441 = state_1422__$1;
(statearr_1425_1441[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1423 === (3))){
var inst_1420 = (state_1422[(2)]);
var state_1422__$1 = state_1422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1422__$1,inst_1420);
} else {
if((state_val_1423 === (4))){
var state_1422__$1 = state_1422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1422__$1,(7),in_chan);
} else {
if((state_val_1423 === (5))){
var state_1422__$1 = state_1422;
var statearr_1427_1442 = state_1422__$1;
(statearr_1427_1442[(2)] = null);

(statearr_1427_1442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1423 === (6))){
var inst_1418 = (state_1422[(2)]);
var state_1422__$1 = state_1422;
var statearr_1428_1443 = state_1422__$1;
(statearr_1428_1443[(2)] = inst_1418);

(statearr_1428_1443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1423 === (7))){
var inst_1407 = (state_1422[(7)]);
var inst_1407__$1 = (state_1422[(2)]);
var inst_1408 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1407__$1);
var inst_1409 = guardian_alerts.core.fetch_page.call(null,inst_1408);
var state_1422__$1 = (function (){var statearr_1429 = state_1422;
(statearr_1429[(7)] = inst_1407__$1);

return statearr_1429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1422__$1,(8),inst_1409);
} else {
if((state_val_1423 === (8))){
var inst_1407 = (state_1422[(7)]);
var inst_1411 = (state_1422[(2)]);
var inst_1412 = guardian_alerts.core.parse_article.call(null,inst_1411);
var inst_1413 = cljs.core.merge.call(null,inst_1407,inst_1412);
var inst_1414 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1413);
var state_1422__$1 = (function (){var statearr_1430 = state_1422;
(statearr_1430[(8)] = inst_1414);

return statearr_1430;
})();
var statearr_1431_1444 = state_1422__$1;
(statearr_1431_1444[(2)] = null);

(statearr_1431_1444[(1)] = (2));


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
});})(c__1291__auto___1439,out_chan))
;
return ((function (switch__1270__auto__,c__1291__auto___1439,out_chan){
return (function() {
var guardian_alerts$core$full_articles_$_state_machine__1271__auto__ = null;
var guardian_alerts$core$full_articles_$_state_machine__1271__auto____0 = (function (){
var statearr_1435 = [null,null,null,null,null,null,null,null,null];
(statearr_1435[(0)] = guardian_alerts$core$full_articles_$_state_machine__1271__auto__);

(statearr_1435[(1)] = (1));

return statearr_1435;
});
var guardian_alerts$core$full_articles_$_state_machine__1271__auto____1 = (function (state_1422){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1436){if((e1436 instanceof Object)){
var ex__1274__auto__ = e1436;
var statearr_1437_1445 = state_1422;
(statearr_1437_1445[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1446 = state_1422;
state_1422 = G__1446;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$full_articles_$_state_machine__1271__auto__ = function(state_1422){
switch(arguments.length){
case 0:
return guardian_alerts$core$full_articles_$_state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$full_articles_$_state_machine__1271__auto____1.call(this,state_1422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$full_articles_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$full_articles_$_state_machine__1271__auto____0;
guardian_alerts$core$full_articles_$_state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$full_articles_$_state_machine__1271__auto____1;
return guardian_alerts$core$full_articles_$_state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto___1439,out_chan))
})();
var state__1293__auto__ = (function (){var statearr_1438 = f__1292__auto__.call(null);
(statearr_1438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto___1439);

return statearr_1438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto___1439,out_chan))
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
var len__3300__auto___1477 = arguments.length;
var i__3301__auto___1478 = (0);
while(true){
if((i__3301__auto___1478 < len__3300__auto___1477)){
args__3303__auto__.push((arguments[i__3301__auto___1478]));

var G__1479 = (i__3301__auto___1478 + (1));
i__3301__auto___1478 = G__1479;
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
return (function (p1__1447_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1447_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1461){
var state_val_1462 = (state_1461[(1)]);
if((state_val_1462 === (1))){
var state_1461__$1 = state_1461;
var statearr_1463_1480 = state_1461__$1;
(statearr_1463_1480[(2)] = null);

(statearr_1463_1480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1462 === (2))){
var state_1461__$1 = state_1461;
var statearr_1464_1481 = state_1461__$1;
(statearr_1464_1481[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1462 === (3))){
var inst_1459 = (state_1461[(2)]);
var state_1461__$1 = state_1461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1461__$1,inst_1459);
} else {
if((state_val_1462 === (4))){
var state_1461__$1 = state_1461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1461__$1,(7),out_chan);
} else {
if((state_val_1462 === (5))){
var state_1461__$1 = state_1461;
var statearr_1466_1482 = state_1461__$1;
(statearr_1466_1482[(2)] = null);

(statearr_1466_1482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1462 === (6))){
var inst_1457 = (state_1461[(2)]);
var state_1461__$1 = state_1461;
var statearr_1467_1483 = state_1461__$1;
(statearr_1467_1483[(2)] = inst_1457);

(statearr_1467_1483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1462 === (7))){
var inst_1452 = (state_1461[(2)]);
var inst_1453 = cljs.core.println.call(null,inst_1452);
var state_1461__$1 = (function (){var statearr_1468 = state_1461;
(statearr_1468[(7)] = inst_1453);

return statearr_1468;
})();
var statearr_1469_1484 = state_1461__$1;
(statearr_1469_1484[(2)] = null);

(statearr_1469_1484[(1)] = (2));


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
var statearr_1473 = [null,null,null,null,null,null,null,null];
(statearr_1473[(0)] = guardian_alerts$core$state_machine__1271__auto__);

(statearr_1473[(1)] = (1));

return statearr_1473;
});
var guardian_alerts$core$state_machine__1271__auto____1 = (function (state_1461){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1474){if((e1474 instanceof Object)){
var ex__1274__auto__ = e1474;
var statearr_1475_1485 = state_1461;
(statearr_1475_1485[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1486 = state_1461;
state_1461 = G__1486;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1271__auto__ = function(state_1461){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1271__auto____1.call(this,state_1461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1271__auto____0;
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1271__auto____1;
return guardian_alerts$core$state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1293__auto__ = (function (){var statearr_1476 = f__1292__auto__.call(null);
(statearr_1476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto__);

return statearr_1476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1291__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1448){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1448));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map