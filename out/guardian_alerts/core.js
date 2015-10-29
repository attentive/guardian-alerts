// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('guardian_alerts.scrape');
goog.require('guardian_alerts.pipeline');
goog.require('guardian_alerts.db');
goog.require('guardian_alerts.text');
cljs.nodejs.enable_util_print_BANG_.call(null);
guardian_alerts.core.full_articles = (function guardian_alerts$core$full_articles(in_chan){
var dup_chan = cljs.core.async.tap.call(null,cljs.core.async.mult.call(null,in_chan),cljs.core.async.chan.call(null));
var articles_chan = guardian_alerts.pipeline.async_BAR_.call(null,dup_chan,((function (dup_chan){
return (function (p1__1364_SHARP_,p2__1365_SHARP_){
return guardian_alerts.scrape.fetch_page.call(null,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(p1__1364_SHARP_),p2__1365_SHARP_);
});})(dup_chan))
);
return cljs.core.async.map.call(null,guardian_alerts.scrape.full_article,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in_chan,articles_chan], null));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___1426 = arguments.length;
var i__3301__auto___1427 = (0);
while(true){
if((i__3301__auto___1427 < len__3300__auto___1426)){
args__3303__auto__.push((arguments[i__3301__auto___1427]));

var G__1428 = (i__3301__auto___1427 + (1));
i__3301__auto___1427 = G__1428;
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
var out_chan_1429 = guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.core.full_articles.call(null,guardian_alerts.pipeline.cond_BAR_.call(null,guardian_alerts.pipeline.seq_BAR_.call(null,guardian_alerts.pipeline.re_source_BAR_.call(null,guardian_alerts.pipeline.source_BAR_.call(null,guardian_alerts.db.migrate_db,db),guardian_alerts.scrape.fetch_page,rss_url),guardian_alerts.scrape.rss_items),((function (config,db,rss_url,upsert_row){
return (function (p1__1366_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1366_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1291__auto___1430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row){
return (function (state_1381){
var state_val_1382 = (state_1381[(1)]);
if((state_val_1382 === (1))){
var state_1381__$1 = state_1381;
var statearr_1383_1431 = state_1381__$1;
(statearr_1383_1431[(2)] = null);

(statearr_1383_1431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (2))){
var state_1381__$1 = state_1381;
var statearr_1384_1432 = state_1381__$1;
(statearr_1384_1432[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (3))){
var inst_1379 = (state_1381[(2)]);
var state_1381__$1 = state_1381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1381__$1,inst_1379);
} else {
if((state_val_1382 === (4))){
var state_1381__$1 = state_1381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1381__$1,(7),out_chan_1429);
} else {
if((state_val_1382 === (5))){
var state_1381__$1 = state_1381;
var statearr_1386_1433 = state_1381__$1;
(statearr_1386_1433[(2)] = null);

(statearr_1386_1433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (6))){
var inst_1377 = (state_1381[(2)]);
var state_1381__$1 = state_1381;
var statearr_1387_1434 = state_1381__$1;
(statearr_1387_1434[(2)] = inst_1377);

(statearr_1387_1434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1382 === (7))){
var inst_1372 = (state_1381[(2)]);
var inst_1373 = cljs.core.println.call(null,inst_1372);
var state_1381__$1 = (function (){var statearr_1388 = state_1381;
(statearr_1388[(7)] = inst_1373);

return statearr_1388;
})();
var statearr_1389_1435 = state_1381__$1;
(statearr_1389_1435[(2)] = null);

(statearr_1389_1435[(1)] = (2));


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
});})(c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row))
;
return ((function (switch__1270__auto__,c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row){
return (function() {
var guardian_alerts$core$state_machine__1271__auto__ = null;
var guardian_alerts$core$state_machine__1271__auto____0 = (function (){
var statearr_1393 = [null,null,null,null,null,null,null,null];
(statearr_1393[(0)] = guardian_alerts$core$state_machine__1271__auto__);

(statearr_1393[(1)] = (1));

return statearr_1393;
});
var guardian_alerts$core$state_machine__1271__auto____1 = (function (state_1381){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1394){if((e1394 instanceof Object)){
var ex__1274__auto__ = e1394;
var statearr_1395_1436 = state_1381;
(statearr_1395_1436[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1437 = state_1381;
state_1381 = G__1437;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1271__auto__ = function(state_1381){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1271__auto____1.call(this,state_1381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1271__auto____0;
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1271__auto____1;
return guardian_alerts$core$state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row))
})();
var state__1293__auto__ = (function (){var statearr_1396 = f__1292__auto__.call(null);
(statearr_1396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto___1430);

return statearr_1396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto___1430,out_chan_1429,config,db,rss_url,upsert_row))
);


var out_chan = guardian_alerts.pipeline.cond_BAR_.call(null,guardian_alerts.pipeline.source_BAR_.call(null,guardian_alerts.db.each_row,db),((function (config,db,rss_url,upsert_row){
return (function (p1__1367_SHARP_){
return cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,p1__1367_SHARP_));
});})(config,db,rss_url,upsert_row))
);
var c__1291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1292__auto__ = (function (){var switch__1270__auto__ = ((function (c__1291__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1410){
var state_val_1411 = (state_1410[(1)]);
if((state_val_1411 === (1))){
var state_1410__$1 = state_1410;
var statearr_1412_1438 = state_1410__$1;
(statearr_1412_1438[(2)] = null);

(statearr_1412_1438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1411 === (2))){
var state_1410__$1 = state_1410;
var statearr_1413_1439 = state_1410__$1;
(statearr_1413_1439[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1411 === (3))){
var inst_1408 = (state_1410[(2)]);
var state_1410__$1 = state_1410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1410__$1,inst_1408);
} else {
if((state_val_1411 === (4))){
var state_1410__$1 = state_1410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1410__$1,(7),out_chan);
} else {
if((state_val_1411 === (5))){
var state_1410__$1 = state_1410;
var statearr_1415_1440 = state_1410__$1;
(statearr_1415_1440[(2)] = null);

(statearr_1415_1440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1411 === (6))){
var inst_1406 = (state_1410[(2)]);
var state_1410__$1 = state_1410;
var statearr_1416_1441 = state_1410__$1;
(statearr_1416_1441[(2)] = inst_1406);

(statearr_1416_1441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1411 === (7))){
var inst_1400 = (state_1410[(2)]);
var inst_1401 = cljs.core.get.call(null,inst_1400,"guid");
var inst_1402 = cljs.core.println.call(null,"missing values in",inst_1401);
var state_1410__$1 = (function (){var statearr_1417 = state_1410;
(statearr_1417[(7)] = inst_1402);

return statearr_1417;
})();
var statearr_1418_1442 = state_1410__$1;
(statearr_1418_1442[(2)] = null);

(statearr_1418_1442[(1)] = (2));


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
var statearr_1422 = [null,null,null,null,null,null,null,null];
(statearr_1422[(0)] = guardian_alerts$core$state_machine__1271__auto__);

(statearr_1422[(1)] = (1));

return statearr_1422;
});
var guardian_alerts$core$state_machine__1271__auto____1 = (function (state_1410){
while(true){
var ret_value__1272__auto__ = (function (){try{while(true){
var result__1273__auto__ = switch__1270__auto__.call(null,state_1410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1273__auto__;
}
break;
}
}catch (e1423){if((e1423 instanceof Object)){
var ex__1274__auto__ = e1423;
var statearr_1424_1443 = state_1410;
(statearr_1424_1443[(5)] = ex__1274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1444 = state_1410;
state_1410 = G__1444;
continue;
} else {
return ret_value__1272__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1271__auto__ = function(state_1410){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1271__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1271__auto____1.call(this,state_1410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1271__auto____0;
guardian_alerts$core$state_machine__1271__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1271__auto____1;
return guardian_alerts$core$state_machine__1271__auto__;
})()
;})(switch__1270__auto__,c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1293__auto__ = (function (){var statearr_1425 = f__1292__auto__.call(null);
(statearr_1425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1291__auto__);

return statearr_1425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1293__auto__);
});})(c__1291__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1291__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1368){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1368));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map