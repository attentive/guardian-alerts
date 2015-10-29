// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.pipeline');
goog.require('cljs.core');
goog.require('cljs.core.async');
guardian_alerts.pipeline.source_BAR_ = (function guardian_alerts$pipeline$source_BAR_(){
var args__3303__auto__ = [];
var len__3300__auto___1323 = arguments.length;
var i__3301__auto___1324 = (0);
while(true){
if((i__3301__auto___1324 < len__3300__auto___1323)){
args__3303__auto__.push((arguments[i__3301__auto___1324]));

var G__1325 = (i__3301__auto___1324 + (1));
i__3301__auto___1324 = G__1325;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((1) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((1)),(0))):null);
return guardian_alerts.pipeline.source_BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3304__auto__);
});

guardian_alerts.pipeline.source_BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var out_chan = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out_chan){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out_chan,res);
});})(out_chan))
], null)));

return out_chan;
});

guardian_alerts.pipeline.source_BAR_.cljs$lang$maxFixedArity = (1);

guardian_alerts.pipeline.source_BAR_.cljs$lang$applyTo = (function (seq1321){
var G__1322 = cljs.core.first.call(null,seq1321);
var seq1321__$1 = cljs.core.next.call(null,seq1321);
return guardian_alerts.pipeline.source_BAR_.cljs$core$IFn$_invoke$arity$variadic(G__1322,seq1321__$1);
});
guardian_alerts.pipeline.re_source_BAR_ = (function guardian_alerts$pipeline$re_source_BAR_(){
var args__3303__auto__ = [];
var len__3300__auto___1343 = arguments.length;
var i__3301__auto___1344 = (0);
while(true){
if((i__3301__auto___1344 < len__3300__auto___1343)){
args__3303__auto__.push((arguments[i__3301__auto___1344]));

var G__1345 = (i__3301__auto___1344 + (1));
i__3301__auto___1344 = G__1345;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((2) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((2)),(0))):null);
return guardian_alerts.pipeline.re_source_BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__3304__auto__);
});

guardian_alerts.pipeline.re_source_BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (in_chan,f,args){
var out_chan = cljs.core.async.chan.call(null);
var args_STAR_ = cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out_chan){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out_chan,res);
});})(out_chan))
], null));
var c__1248__auto___1346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1346,out_chan,args_STAR_){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1346,out_chan,args_STAR_){
return (function (state_1333){
var state_val_1334 = (state_1333[(1)]);
if((state_val_1334 === (1))){
var state_1333__$1 = state_1333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1333__$1,(2),in_chan);
} else {
if((state_val_1334 === (2))){
var inst_1330 = (state_1333[(2)]);
var inst_1331 = cljs.core.apply.call(null,f,args_STAR_);
var state_1333__$1 = (function (){var statearr_1335 = state_1333;
(statearr_1335[(7)] = inst_1330);

return statearr_1335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1333__$1,inst_1331);
} else {
return null;
}
}
});})(c__1248__auto___1346,out_chan,args_STAR_))
;
return ((function (switch__1227__auto__,c__1248__auto___1346,out_chan,args_STAR_){
return (function() {
var guardian_alerts$pipeline$state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$state_machine__1228__auto____0 = (function (){
var statearr_1339 = [null,null,null,null,null,null,null,null];
(statearr_1339[(0)] = guardian_alerts$pipeline$state_machine__1228__auto__);

(statearr_1339[(1)] = (1));

return statearr_1339;
});
var guardian_alerts$pipeline$state_machine__1228__auto____1 = (function (state_1333){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1340){if((e1340 instanceof Object)){
var ex__1231__auto__ = e1340;
var statearr_1341_1347 = state_1333;
(statearr_1341_1347[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1348 = state_1333;
state_1333 = G__1348;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$state_machine__1228__auto__ = function(state_1333){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$state_machine__1228__auto____1.call(this,state_1333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$state_machine__1228__auto____0;
guardian_alerts$pipeline$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$state_machine__1228__auto____1;
return guardian_alerts$pipeline$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1346,out_chan,args_STAR_))
})();
var state__1250__auto__ = (function (){var statearr_1342 = f__1249__auto__.call(null);
(statearr_1342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1346);

return statearr_1342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1346,out_chan,args_STAR_))
);


return out_chan;
});

guardian_alerts.pipeline.re_source_BAR_.cljs$lang$maxFixedArity = (2);

guardian_alerts.pipeline.re_source_BAR_.cljs$lang$applyTo = (function (seq1326){
var G__1327 = cljs.core.first.call(null,seq1326);
var seq1326__$1 = cljs.core.next.call(null,seq1326);
var G__1328 = cljs.core.first.call(null,seq1326__$1);
var seq1326__$2 = cljs.core.next.call(null,seq1326__$1);
return guardian_alerts.pipeline.re_source_BAR_.cljs$core$IFn$_invoke$arity$variadic(G__1327,G__1328,seq1326__$2);
});
guardian_alerts.pipeline.sink_BAR_ = (function guardian_alerts$pipeline$sink_BAR_(in_chan,f){
var c__1248__auto___1405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1405){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1405){
return (function (state_1389){
var state_val_1390 = (state_1389[(1)]);
if((state_val_1390 === (1))){
var state_1389__$1 = state_1389;
var statearr_1391_1406 = state_1389__$1;
(statearr_1391_1406[(2)] = null);

(statearr_1391_1406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1390 === (2))){
var state_1389__$1 = state_1389;
var statearr_1392_1407 = state_1389__$1;
(statearr_1392_1407[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1390 === (3))){
var inst_1387 = (state_1389[(2)]);
var state_1389__$1 = state_1389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1389__$1,inst_1387);
} else {
if((state_val_1390 === (4))){
var state_1389__$1 = state_1389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1389__$1,(7),in_chan);
} else {
if((state_val_1390 === (5))){
var state_1389__$1 = state_1389;
var statearr_1394_1408 = state_1389__$1;
(statearr_1394_1408[(2)] = null);

(statearr_1394_1408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1390 === (6))){
var inst_1385 = (state_1389[(2)]);
var state_1389__$1 = state_1389;
var statearr_1395_1409 = state_1389__$1;
(statearr_1395_1409[(2)] = inst_1385);

(statearr_1395_1409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1390 === (7))){
var inst_1380 = (state_1389[(2)]);
var inst_1381 = f.call(null,inst_1380);
var state_1389__$1 = (function (){var statearr_1396 = state_1389;
(statearr_1396[(7)] = inst_1381);

return statearr_1396;
})();
var statearr_1397_1410 = state_1389__$1;
(statearr_1397_1410[(2)] = null);

(statearr_1397_1410[(1)] = (2));


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
});})(c__1248__auto___1405))
;
return ((function (switch__1227__auto__,c__1248__auto___1405){
return (function() {
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1401 = [null,null,null,null,null,null,null,null];
(statearr_1401[(0)] = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__);

(statearr_1401[(1)] = (1));

return statearr_1401;
});
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1 = (function (state_1389){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1402){if((e1402 instanceof Object)){
var ex__1231__auto__ = e1402;
var statearr_1403_1411 = state_1389;
(statearr_1403_1411[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1412 = state_1389;
state_1389 = G__1412;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__ = function(state_1389){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1.call(this,state_1389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1405))
})();
var state__1250__auto__ = (function (){var statearr_1404 = f__1249__auto__.call(null);
(statearr_1404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1405);

return statearr_1404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1405))
);


return null;
});
guardian_alerts.pipeline._BAR_ = (function guardian_alerts$pipeline$_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1473,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1473,out_chan){
return (function (state_1457){
var state_val_1458 = (state_1457[(1)]);
if((state_val_1458 === (1))){
var state_1457__$1 = state_1457;
var statearr_1459_1474 = state_1457__$1;
(statearr_1459_1474[(2)] = null);

(statearr_1459_1474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1458 === (2))){
var state_1457__$1 = state_1457;
var statearr_1460_1475 = state_1457__$1;
(statearr_1460_1475[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1458 === (3))){
var inst_1455 = (state_1457[(2)]);
var state_1457__$1 = state_1457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1457__$1,inst_1455);
} else {
if((state_val_1458 === (4))){
var state_1457__$1 = state_1457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1457__$1,(8),in_chan);
} else {
if((state_val_1458 === (5))){
var state_1457__$1 = state_1457;
var statearr_1462_1476 = state_1457__$1;
(statearr_1462_1476[(2)] = null);

(statearr_1462_1476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1458 === (6))){
var inst_1453 = (state_1457[(2)]);
var state_1457__$1 = state_1457;
var statearr_1463_1477 = state_1457__$1;
(statearr_1463_1477[(2)] = inst_1453);

(statearr_1463_1477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1458 === (7))){
var inst_1449 = (state_1457[(2)]);
var state_1457__$1 = (function (){var statearr_1464 = state_1457;
(statearr_1464[(7)] = inst_1449);

return statearr_1464;
})();
var statearr_1465_1478 = state_1457__$1;
(statearr_1465_1478[(2)] = null);

(statearr_1465_1478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1458 === (8))){
var inst_1446 = (state_1457[(2)]);
var inst_1447 = f.call(null,inst_1446);
var state_1457__$1 = state_1457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1457__$1,(7),out_chan,inst_1447);
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
});})(c__1248__auto___1473,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1473,out_chan){
return (function() {
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1469 = [null,null,null,null,null,null,null,null];
(statearr_1469[(0)] = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__);

(statearr_1469[(1)] = (1));

return statearr_1469;
});
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1 = (function (state_1457){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1470){if((e1470 instanceof Object)){
var ex__1231__auto__ = e1470;
var statearr_1471_1479 = state_1457;
(statearr_1471_1479[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1480 = state_1457;
state_1457 = G__1480;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = function(state_1457){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1.call(this,state_1457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1473,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1472 = f__1249__auto__.call(null);
(statearr_1472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1473);

return statearr_1472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1473,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.async_BAR_ = (function guardian_alerts$pipeline$async_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1539,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1539,out_chan){
return (function (state_1523){
var state_val_1524 = (state_1523[(1)]);
if((state_val_1524 === (1))){
var state_1523__$1 = state_1523;
var statearr_1525_1540 = state_1523__$1;
(statearr_1525_1540[(2)] = null);

(statearr_1525_1540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1524 === (2))){
var state_1523__$1 = state_1523;
var statearr_1526_1541 = state_1523__$1;
(statearr_1526_1541[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1524 === (3))){
var inst_1521 = (state_1523[(2)]);
var state_1523__$1 = state_1523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1523__$1,inst_1521);
} else {
if((state_val_1524 === (4))){
var state_1523__$1 = state_1523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1523__$1,(7),in_chan);
} else {
if((state_val_1524 === (5))){
var state_1523__$1 = state_1523;
var statearr_1528_1542 = state_1523__$1;
(statearr_1528_1542[(2)] = null);

(statearr_1528_1542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1524 === (6))){
var inst_1519 = (state_1523[(2)]);
var state_1523__$1 = state_1523;
var statearr_1529_1543 = state_1523__$1;
(statearr_1529_1543[(2)] = inst_1519);

(statearr_1529_1543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1524 === (7))){
var inst_1513 = (state_1523[(2)]);
var inst_1514 = (function (){return ((function (inst_1513,state_val_1524,c__1248__auto___1539,out_chan){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out_chan,res);
});
;})(inst_1513,state_val_1524,c__1248__auto___1539,out_chan))
})();
var inst_1515 = f.call(null,inst_1513,inst_1514);
var state_1523__$1 = (function (){var statearr_1530 = state_1523;
(statearr_1530[(7)] = inst_1515);

return statearr_1530;
})();
var statearr_1531_1544 = state_1523__$1;
(statearr_1531_1544[(2)] = null);

(statearr_1531_1544[(1)] = (2));


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
});})(c__1248__auto___1539,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1539,out_chan){
return (function() {
var guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1535 = [null,null,null,null,null,null,null,null];
(statearr_1535[(0)] = guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__);

(statearr_1535[(1)] = (1));

return statearr_1535;
});
var guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____1 = (function (state_1523){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1536){if((e1536 instanceof Object)){
var ex__1231__auto__ = e1536;
var statearr_1537_1545 = state_1523;
(statearr_1537_1545[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1546 = state_1523;
state_1523 = G__1546;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__ = function(state_1523){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____1.call(this,state_1523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$async_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1539,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1538 = f__1249__auto__.call(null);
(statearr_1538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1539);

return statearr_1538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1539,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.seq_BAR_ = (function guardian_alerts$pipeline$seq_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1727,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1727,out_chan){
return (function (state_1689){
var state_val_1690 = (state_1689[(1)]);
if((state_val_1690 === (7))){
var inst_1640 = (state_1689[(2)]);
var inst_1641 = f.call(null,inst_1640);
var inst_1646 = cljs.core.seq.call(null,inst_1641);
var inst_1647 = inst_1646;
var inst_1648 = null;
var inst_1649 = (0);
var inst_1650 = (0);
var state_1689__$1 = (function (){var statearr_1691 = state_1689;
(statearr_1691[(7)] = inst_1649);

(statearr_1691[(8)] = inst_1648);

(statearr_1691[(9)] = inst_1650);

(statearr_1691[(10)] = inst_1647);

return statearr_1691;
})();
var statearr_1692_1728 = state_1689__$1;
(statearr_1692_1728[(2)] = null);

(statearr_1692_1728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (1))){
var state_1689__$1 = state_1689;
var statearr_1693_1729 = state_1689__$1;
(statearr_1693_1729[(2)] = null);

(statearr_1693_1729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (4))){
var state_1689__$1 = state_1689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1689__$1,(7),in_chan);
} else {
if((state_val_1690 === (15))){
var inst_1677 = (state_1689[(2)]);
var state_1689__$1 = state_1689;
var statearr_1694_1730 = state_1689__$1;
(statearr_1694_1730[(2)] = inst_1677);

(statearr_1694_1730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (13))){
var inst_1660 = (state_1689[(11)]);
var inst_1662 = cljs.core.chunked_seq_QMARK_.call(null,inst_1660);
var state_1689__$1 = state_1689;
if(inst_1662){
var statearr_1695_1731 = state_1689__$1;
(statearr_1695_1731[(1)] = (16));

} else {
var statearr_1696_1732 = state_1689__$1;
(statearr_1696_1732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (6))){
var inst_1685 = (state_1689[(2)]);
var state_1689__$1 = state_1689;
var statearr_1697_1733 = state_1689__$1;
(statearr_1697_1733[(2)] = inst_1685);

(statearr_1697_1733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (17))){
var inst_1660 = (state_1689[(11)]);
var inst_1669 = cljs.core.first.call(null,inst_1660);
var inst_1670 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1669);
var inst_1671 = cljs.core.next.call(null,inst_1660);
var inst_1647 = inst_1671;
var inst_1648 = null;
var inst_1649 = (0);
var inst_1650 = (0);
var state_1689__$1 = (function (){var statearr_1698 = state_1689;
(statearr_1698[(7)] = inst_1649);

(statearr_1698[(12)] = inst_1670);

(statearr_1698[(8)] = inst_1648);

(statearr_1698[(9)] = inst_1650);

(statearr_1698[(10)] = inst_1647);

return statearr_1698;
})();
var statearr_1699_1734 = state_1689__$1;
(statearr_1699_1734[(2)] = null);

(statearr_1699_1734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (3))){
var inst_1687 = (state_1689[(2)]);
var state_1689__$1 = state_1689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1689__$1,inst_1687);
} else {
if((state_val_1690 === (12))){
var inst_1679 = (state_1689[(2)]);
var state_1689__$1 = state_1689;
var statearr_1700_1735 = state_1689__$1;
(statearr_1700_1735[(2)] = inst_1679);

(statearr_1700_1735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (2))){
var state_1689__$1 = state_1689;
var statearr_1701_1736 = state_1689__$1;
(statearr_1701_1736[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (11))){
var inst_1660 = (state_1689[(11)]);
var inst_1647 = (state_1689[(10)]);
var inst_1660__$1 = cljs.core.seq.call(null,inst_1647);
var state_1689__$1 = (function (){var statearr_1703 = state_1689;
(statearr_1703[(11)] = inst_1660__$1);

return statearr_1703;
})();
if(inst_1660__$1){
var statearr_1704_1737 = state_1689__$1;
(statearr_1704_1737[(1)] = (13));

} else {
var statearr_1705_1738 = state_1689__$1;
(statearr_1705_1738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (9))){
var inst_1681 = (state_1689[(2)]);
var state_1689__$1 = (function (){var statearr_1706 = state_1689;
(statearr_1706[(13)] = inst_1681);

return statearr_1706;
})();
var statearr_1707_1739 = state_1689__$1;
(statearr_1707_1739[(2)] = null);

(statearr_1707_1739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (5))){
var state_1689__$1 = state_1689;
var statearr_1708_1740 = state_1689__$1;
(statearr_1708_1740[(2)] = null);

(statearr_1708_1740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (14))){
var state_1689__$1 = state_1689;
var statearr_1712_1741 = state_1689__$1;
(statearr_1712_1741[(2)] = null);

(statearr_1712_1741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (16))){
var inst_1660 = (state_1689[(11)]);
var inst_1664 = cljs.core.chunk_first.call(null,inst_1660);
var inst_1665 = cljs.core.chunk_rest.call(null,inst_1660);
var inst_1666 = cljs.core.count.call(null,inst_1664);
var inst_1647 = inst_1665;
var inst_1648 = inst_1664;
var inst_1649 = inst_1666;
var inst_1650 = (0);
var state_1689__$1 = (function (){var statearr_1713 = state_1689;
(statearr_1713[(7)] = inst_1649);

(statearr_1713[(8)] = inst_1648);

(statearr_1713[(9)] = inst_1650);

(statearr_1713[(10)] = inst_1647);

return statearr_1713;
})();
var statearr_1714_1742 = state_1689__$1;
(statearr_1714_1742[(2)] = null);

(statearr_1714_1742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (10))){
var inst_1649 = (state_1689[(7)]);
var inst_1648 = (state_1689[(8)]);
var inst_1650 = (state_1689[(9)]);
var inst_1647 = (state_1689[(10)]);
var inst_1655 = cljs.core._nth.call(null,inst_1648,inst_1650);
var inst_1656 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1655);
var inst_1657 = (inst_1650 + (1));
var tmp1709 = inst_1649;
var tmp1710 = inst_1648;
var tmp1711 = inst_1647;
var inst_1647__$1 = tmp1711;
var inst_1648__$1 = tmp1710;
var inst_1649__$1 = tmp1709;
var inst_1650__$1 = inst_1657;
var state_1689__$1 = (function (){var statearr_1715 = state_1689;
(statearr_1715[(7)] = inst_1649__$1);

(statearr_1715[(8)] = inst_1648__$1);

(statearr_1715[(9)] = inst_1650__$1);

(statearr_1715[(10)] = inst_1647__$1);

(statearr_1715[(14)] = inst_1656);

return statearr_1715;
})();
var statearr_1716_1743 = state_1689__$1;
(statearr_1716_1743[(2)] = null);

(statearr_1716_1743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (18))){
var inst_1674 = (state_1689[(2)]);
var state_1689__$1 = state_1689;
var statearr_1717_1744 = state_1689__$1;
(statearr_1717_1744[(2)] = inst_1674);

(statearr_1717_1744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1690 === (8))){
var inst_1649 = (state_1689[(7)]);
var inst_1650 = (state_1689[(9)]);
var inst_1652 = (inst_1650 < inst_1649);
var inst_1653 = inst_1652;
var state_1689__$1 = state_1689;
if(cljs.core.truth_(inst_1653)){
var statearr_1718_1745 = state_1689__$1;
(statearr_1718_1745[(1)] = (10));

} else {
var statearr_1719_1746 = state_1689__$1;
(statearr_1719_1746[(1)] = (11));

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
}
}
}
}
}
});})(c__1248__auto___1727,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1727,out_chan){
return (function() {
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1723[(0)] = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__);

(statearr_1723[(1)] = (1));

return statearr_1723;
});
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1 = (function (state_1689){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1724){if((e1724 instanceof Object)){
var ex__1231__auto__ = e1724;
var statearr_1725_1747 = state_1689;
(statearr_1725_1747[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1748 = state_1689;
state_1689 = G__1748;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = function(state_1689){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1.call(this,state_1689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1727,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1726 = f__1249__auto__.call(null);
(statearr_1726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1727);

return statearr_1726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1727,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.cond_BAR_ = (function guardian_alerts$pipeline$cond_BAR_(in_chan,pred){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1825,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1825,out_chan){
return (function (state_1804){
var state_val_1805 = (state_1804[(1)]);
if((state_val_1805 === (7))){
var inst_1790 = (state_1804[(7)]);
var inst_1790__$1 = (state_1804[(2)]);
var inst_1791 = pred.call(null,inst_1790__$1);
var state_1804__$1 = (function (){var statearr_1806 = state_1804;
(statearr_1806[(7)] = inst_1790__$1);

return statearr_1806;
})();
if(cljs.core.truth_(inst_1791)){
var statearr_1807_1826 = state_1804__$1;
(statearr_1807_1826[(1)] = (8));

} else {
var statearr_1808_1827 = state_1804__$1;
(statearr_1808_1827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (1))){
var state_1804__$1 = state_1804;
var statearr_1809_1828 = state_1804__$1;
(statearr_1809_1828[(2)] = null);

(statearr_1809_1828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (4))){
var state_1804__$1 = state_1804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1804__$1,(7),in_chan);
} else {
if((state_val_1805 === (6))){
var inst_1800 = (state_1804[(2)]);
var state_1804__$1 = state_1804;
var statearr_1810_1829 = state_1804__$1;
(statearr_1810_1829[(2)] = inst_1800);

(statearr_1810_1829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (3))){
var inst_1802 = (state_1804[(2)]);
var state_1804__$1 = state_1804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1804__$1,inst_1802);
} else {
if((state_val_1805 === (2))){
var state_1804__$1 = state_1804;
var statearr_1811_1830 = state_1804__$1;
(statearr_1811_1830[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (9))){
var state_1804__$1 = state_1804;
var statearr_1813_1831 = state_1804__$1;
(statearr_1813_1831[(2)] = null);

(statearr_1813_1831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (5))){
var state_1804__$1 = state_1804;
var statearr_1814_1832 = state_1804__$1;
(statearr_1814_1832[(2)] = null);

(statearr_1814_1832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (10))){
var inst_1796 = (state_1804[(2)]);
var state_1804__$1 = (function (){var statearr_1815 = state_1804;
(statearr_1815[(8)] = inst_1796);

return statearr_1815;
})();
var statearr_1816_1833 = state_1804__$1;
(statearr_1816_1833[(2)] = null);

(statearr_1816_1833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1805 === (8))){
var inst_1790 = (state_1804[(7)]);
var inst_1793 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1790);
var state_1804__$1 = state_1804;
var statearr_1817_1834 = state_1804__$1;
(statearr_1817_1834[(2)] = inst_1793);

(statearr_1817_1834[(1)] = (10));


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
});})(c__1248__auto___1825,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1825,out_chan){
return (function() {
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1821 = [null,null,null,null,null,null,null,null,null];
(statearr_1821[(0)] = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__);

(statearr_1821[(1)] = (1));

return statearr_1821;
});
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1 = (function (state_1804){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1822){if((e1822 instanceof Object)){
var ex__1231__auto__ = e1822;
var statearr_1823_1835 = state_1804;
(statearr_1823_1835[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1836 = state_1804;
state_1804 = G__1836;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = function(state_1804){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1.call(this,state_1804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1825,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1824 = f__1249__auto__.call(null);
(statearr_1824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1825);

return statearr_1824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1825,out_chan))
);


return out_chan;
});

//# sourceMappingURL=pipeline.js.map