// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('guardian_alerts.db');
goog.require('guardian_alerts.text');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof guardian_alerts.core.request !== 'undefined'){
} else {
guardian_alerts.core.request = require("request");
}
if(typeof guardian_alerts.core.libxmljs !== 'undefined'){
} else {
guardian_alerts.core.libxmljs = require("libxmljs");
}
if(typeof guardian_alerts.core.http !== 'undefined'){
} else {
guardian_alerts.core.http = require("http");
}
guardian_alerts.core.fetch_page = (function guardian_alerts$core$fetch_page(url,callback){
return guardian_alerts.core.request.call(null,url,(function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return callback.call(null,body);
}
}));
});
guardian_alerts.core.rss_item = (function guardian_alerts$core$rss_item(frag){
var gt = (function (p1__1293_SHARP_,p2__1294_SHARP_){
return p1__1293_SHARP_.get(p2__1294_SHARP_).text();
});
var desc = gt.call(null,frag,"description");
var link = gt.call(null,frag,"link");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"guid","guid",-1152728289),link,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.text.keywordize.call(null,desc)], null);
});
if(typeof guardian_alerts.core.rss_chan !== 'undefined'){
} else {
guardian_alerts.core.rss_chan = cljs.core.async.chan.call(null);
}
guardian_alerts.core.rss_items = (function guardian_alerts$core$rss_items(url){
return guardian_alerts.core.fetch_page.call(null,url,(function (body){
var doc = guardian_alerts.core.libxmljs.parseXml(body);
var items = doc.find("//item");
var get_text = ((function (doc,items){
return (function (item,path){
return item.get(path).text();
});})(doc,items))
;
return cljs.core.async.put_BANG_.call(null,guardian_alerts.core.rss_chan,cljs.core.filter.call(null,((function (doc,items,get_text){
return (function (p1__1295_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1295_SHARP_));
});})(doc,items,get_text))
,cljs.core.map.call(null,guardian_alerts.core.rss_item,items)));
}));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___1377 = arguments.length;
var i__3301__auto___1378 = (0);
while(true){
if((i__3301__auto___1378 < len__3300__auto___1377)){
args__3303__auto__.push((arguments[i__3301__auto___1378]));

var G__1379 = (i__3301__auto___1378 + (1));
i__3301__auto___1378 = G__1379;
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
guardian_alerts.core.rss_items.call(null,new cljs.core.Keyword(null,"rss-feed","rss-feed",-1518622057).cljs$core$IFn$_invoke$arity$1(config));

var c__1248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto__,config,db){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto__,config,db){
return (function (state_1345){
var state_val_1346 = (state_1345[(1)]);
if((state_val_1346 === (7))){
var inst_1340 = (state_1345[(2)]);
var state_1345__$1 = state_1345;
var statearr_1347_1380 = state_1345__$1;
(statearr_1347_1380[(2)] = inst_1340);

(statearr_1347_1380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (1))){
var state_1345__$1 = state_1345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1345__$1,(2),guardian_alerts.core.rss_chan);
} else {
if((state_val_1346 === (4))){
var inst_1342 = (state_1345[(2)]);
var inst_1343 = db.close();
var state_1345__$1 = (function (){var statearr_1348 = state_1345;
(statearr_1348[(7)] = inst_1342);

return statearr_1348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1345__$1,inst_1343);
} else {
if((state_val_1346 === (13))){
var inst_1335 = (state_1345[(2)]);
var state_1345__$1 = state_1345;
var statearr_1349_1381 = state_1345__$1;
(statearr_1349_1381[(2)] = inst_1335);

(statearr_1349_1381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (6))){
var inst_1319 = (state_1345[(8)]);
var inst_1304 = (state_1345[(9)]);
var inst_1319__$1 = cljs.core.seq.call(null,inst_1304);
var state_1345__$1 = (function (){var statearr_1350 = state_1345;
(statearr_1350[(8)] = inst_1319__$1);

return statearr_1350;
})();
if(inst_1319__$1){
var statearr_1351_1382 = state_1345__$1;
(statearr_1351_1382[(1)] = (8));

} else {
var statearr_1352_1383 = state_1345__$1;
(statearr_1352_1383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (3))){
var inst_1306 = (state_1345[(10)]);
var inst_1307 = (state_1345[(11)]);
var inst_1309 = (inst_1307 < inst_1306);
var inst_1310 = inst_1309;
var state_1345__$1 = state_1345;
if(cljs.core.truth_(inst_1310)){
var statearr_1353_1384 = state_1345__$1;
(statearr_1353_1384[(1)] = (5));

} else {
var statearr_1354_1385 = state_1345__$1;
(statearr_1354_1385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (12))){
var inst_1319 = (state_1345[(8)]);
var inst_1328 = cljs.core.first.call(null,inst_1319);
var inst_1329 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1328);
var inst_1330 = cljs.core.println.call(null,inst_1329);
var inst_1331 = guardian_alerts.db.update_row.call(null,db,inst_1328);
var inst_1332 = cljs.core.next.call(null,inst_1319);
var inst_1304 = inst_1332;
var inst_1305 = null;
var inst_1306 = (0);
var inst_1307 = (0);
var state_1345__$1 = (function (){var statearr_1355 = state_1345;
(statearr_1355[(12)] = inst_1330);

(statearr_1355[(13)] = inst_1331);

(statearr_1355[(14)] = inst_1305);

(statearr_1355[(9)] = inst_1304);

(statearr_1355[(10)] = inst_1306);

(statearr_1355[(11)] = inst_1307);

return statearr_1355;
})();
var statearr_1356_1386 = state_1345__$1;
(statearr_1356_1386[(2)] = null);

(statearr_1356_1386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (2))){
var inst_1298 = (state_1345[(2)]);
var inst_1303 = cljs.core.seq.call(null,inst_1298);
var inst_1304 = inst_1303;
var inst_1305 = null;
var inst_1306 = (0);
var inst_1307 = (0);
var state_1345__$1 = (function (){var statearr_1357 = state_1345;
(statearr_1357[(14)] = inst_1305);

(statearr_1357[(9)] = inst_1304);

(statearr_1357[(10)] = inst_1306);

(statearr_1357[(11)] = inst_1307);

return statearr_1357;
})();
var statearr_1358_1387 = state_1345__$1;
(statearr_1358_1387[(2)] = null);

(statearr_1358_1387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (11))){
var inst_1319 = (state_1345[(8)]);
var inst_1323 = cljs.core.chunk_first.call(null,inst_1319);
var inst_1324 = cljs.core.chunk_rest.call(null,inst_1319);
var inst_1325 = cljs.core.count.call(null,inst_1323);
var inst_1304 = inst_1324;
var inst_1305 = inst_1323;
var inst_1306 = inst_1325;
var inst_1307 = (0);
var state_1345__$1 = (function (){var statearr_1362 = state_1345;
(statearr_1362[(14)] = inst_1305);

(statearr_1362[(9)] = inst_1304);

(statearr_1362[(10)] = inst_1306);

(statearr_1362[(11)] = inst_1307);

return statearr_1362;
})();
var statearr_1363_1388 = state_1345__$1;
(statearr_1363_1388[(2)] = null);

(statearr_1363_1388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (9))){
var state_1345__$1 = state_1345;
var statearr_1364_1389 = state_1345__$1;
(statearr_1364_1389[(2)] = null);

(statearr_1364_1389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (5))){
var inst_1305 = (state_1345[(14)]);
var inst_1304 = (state_1345[(9)]);
var inst_1306 = (state_1345[(10)]);
var inst_1307 = (state_1345[(11)]);
var inst_1312 = cljs.core._nth.call(null,inst_1305,inst_1307);
var inst_1313 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1312);
var inst_1314 = cljs.core.println.call(null,inst_1313);
var inst_1315 = guardian_alerts.db.update_row.call(null,db,inst_1312);
var inst_1316 = (inst_1307 + (1));
var tmp1359 = inst_1305;
var tmp1360 = inst_1304;
var tmp1361 = inst_1306;
var inst_1304__$1 = tmp1360;
var inst_1305__$1 = tmp1359;
var inst_1306__$1 = tmp1361;
var inst_1307__$1 = inst_1316;
var state_1345__$1 = (function (){var statearr_1365 = state_1345;
(statearr_1365[(15)] = inst_1314);

(statearr_1365[(14)] = inst_1305__$1);

(statearr_1365[(16)] = inst_1315);

(statearr_1365[(9)] = inst_1304__$1);

(statearr_1365[(10)] = inst_1306__$1);

(statearr_1365[(11)] = inst_1307__$1);

return statearr_1365;
})();
var statearr_1366_1390 = state_1345__$1;
(statearr_1366_1390[(2)] = null);

(statearr_1366_1390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (10))){
var inst_1338 = (state_1345[(2)]);
var state_1345__$1 = state_1345;
var statearr_1367_1391 = state_1345__$1;
(statearr_1367_1391[(2)] = inst_1338);

(statearr_1367_1391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1346 === (8))){
var inst_1319 = (state_1345[(8)]);
var inst_1321 = cljs.core.chunked_seq_QMARK_.call(null,inst_1319);
var state_1345__$1 = state_1345;
if(inst_1321){
var statearr_1368_1392 = state_1345__$1;
(statearr_1368_1392[(1)] = (11));

} else {
var statearr_1369_1393 = state_1345__$1;
(statearr_1369_1393[(1)] = (12));

}

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
}
}
}
}
}
});})(c__1248__auto__,config,db))
;
return ((function (switch__1227__auto__,c__1248__auto__,config,db){
return (function() {
var guardian_alerts$core$state_machine__1228__auto__ = null;
var guardian_alerts$core$state_machine__1228__auto____0 = (function (){
var statearr_1373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1373[(0)] = guardian_alerts$core$state_machine__1228__auto__);

(statearr_1373[(1)] = (1));

return statearr_1373;
});
var guardian_alerts$core$state_machine__1228__auto____1 = (function (state_1345){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1374){if((e1374 instanceof Object)){
var ex__1231__auto__ = e1374;
var statearr_1375_1394 = state_1345;
(statearr_1375_1394[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1395 = state_1345;
state_1345 = G__1395;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1228__auto__ = function(state_1345){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1228__auto____1.call(this,state_1345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1228__auto____0;
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1228__auto____1;
return guardian_alerts$core$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto__,config,db))
})();
var state__1250__auto__ = (function (){var statearr_1376 = f__1249__auto__.call(null);
(statearr_1376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto__);

return statearr_1376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto__,config,db))
);

return c__1248__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1296){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1296));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map