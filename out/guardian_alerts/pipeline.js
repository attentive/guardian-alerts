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
cljs.core.apply.call(null,f,cljs.core.conj.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out_chan){
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
var len__3300__auto___1348 = arguments.length;
var i__3301__auto___1349 = (0);
while(true){
if((i__3301__auto___1349 < len__3300__auto___1348)){
args__3303__auto__.push((arguments[i__3301__auto___1349]));

var G__1350 = (i__3301__auto___1349 + (1));
i__3301__auto___1349 = G__1350;
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
var c__1248__auto___1351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1351,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1351,out_chan){
return (function (state_1339){
var state_val_1340 = (state_1339[(1)]);
if((state_val_1340 === (1))){
var state_1339__$1 = state_1339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1339__$1,(2),in_chan);
} else {
if((state_val_1340 === (2))){
var inst_1330 = (state_1339[(2)]);
var inst_1331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1332 = (function (){var data = inst_1330;
return ((function (data,inst_1330,inst_1331,state_val_1340,c__1248__auto___1351,out_chan){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out_chan,res);
});
;})(data,inst_1330,inst_1331,state_val_1340,c__1248__auto___1351,out_chan))
})();
var inst_1333 = [inst_1332];
var inst_1334 = (new cljs.core.PersistentVector(null,1,(5),inst_1331,inst_1333,null));
var inst_1335 = args.call(null,inst_1334);
var inst_1336 = cljs.core.conj.call(null,inst_1335);
var inst_1337 = cljs.core.apply.call(null,f,inst_1336);
var state_1339__$1 = state_1339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1339__$1,inst_1337);
} else {
return null;
}
}
});})(c__1248__auto___1351,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1351,out_chan){
return (function() {
var guardian_alerts$pipeline$state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$state_machine__1228__auto____0 = (function (){
var statearr_1344 = [null,null,null,null,null,null,null];
(statearr_1344[(0)] = guardian_alerts$pipeline$state_machine__1228__auto__);

(statearr_1344[(1)] = (1));

return statearr_1344;
});
var guardian_alerts$pipeline$state_machine__1228__auto____1 = (function (state_1339){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1345){if((e1345 instanceof Object)){
var ex__1231__auto__ = e1345;
var statearr_1346_1352 = state_1339;
(statearr_1346_1352[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1353 = state_1339;
state_1339 = G__1353;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$state_machine__1228__auto__ = function(state_1339){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$state_machine__1228__auto____1.call(this,state_1339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$state_machine__1228__auto____0;
guardian_alerts$pipeline$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$state_machine__1228__auto____1;
return guardian_alerts$pipeline$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1351,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1347 = f__1249__auto__.call(null);
(statearr_1347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1351);

return statearr_1347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1351,out_chan))
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
var c__1248__auto___1410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1410){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1410){
return (function (state_1394){
var state_val_1395 = (state_1394[(1)]);
if((state_val_1395 === (1))){
var state_1394__$1 = state_1394;
var statearr_1396_1411 = state_1394__$1;
(statearr_1396_1411[(2)] = null);

(statearr_1396_1411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1395 === (2))){
var state_1394__$1 = state_1394;
var statearr_1397_1412 = state_1394__$1;
(statearr_1397_1412[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1395 === (3))){
var inst_1392 = (state_1394[(2)]);
var state_1394__$1 = state_1394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1394__$1,inst_1392);
} else {
if((state_val_1395 === (4))){
var state_1394__$1 = state_1394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1394__$1,(7),in_chan);
} else {
if((state_val_1395 === (5))){
var state_1394__$1 = state_1394;
var statearr_1399_1413 = state_1394__$1;
(statearr_1399_1413[(2)] = null);

(statearr_1399_1413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1395 === (6))){
var inst_1390 = (state_1394[(2)]);
var state_1394__$1 = state_1394;
var statearr_1400_1414 = state_1394__$1;
(statearr_1400_1414[(2)] = inst_1390);

(statearr_1400_1414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1395 === (7))){
var inst_1385 = (state_1394[(2)]);
var inst_1386 = f.call(null,inst_1385);
var state_1394__$1 = (function (){var statearr_1401 = state_1394;
(statearr_1401[(7)] = inst_1386);

return statearr_1401;
})();
var statearr_1402_1415 = state_1394__$1;
(statearr_1402_1415[(2)] = null);

(statearr_1402_1415[(1)] = (2));


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
});})(c__1248__auto___1410))
;
return ((function (switch__1227__auto__,c__1248__auto___1410){
return (function() {
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1406 = [null,null,null,null,null,null,null,null];
(statearr_1406[(0)] = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__);

(statearr_1406[(1)] = (1));

return statearr_1406;
});
var guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1 = (function (state_1394){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1407){if((e1407 instanceof Object)){
var ex__1231__auto__ = e1407;
var statearr_1408_1416 = state_1394;
(statearr_1408_1416[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1417 = state_1394;
state_1394 = G__1417;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__ = function(state_1394){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1.call(this,state_1394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$sink_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1410))
})();
var state__1250__auto__ = (function (){var statearr_1409 = f__1249__auto__.call(null);
(statearr_1409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1410);

return statearr_1409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1410))
);


return null;
});
guardian_alerts.pipeline._BAR_ = (function guardian_alerts$pipeline$_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1478,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1478,out_chan){
return (function (state_1462){
var state_val_1463 = (state_1462[(1)]);
if((state_val_1463 === (1))){
var state_1462__$1 = state_1462;
var statearr_1464_1479 = state_1462__$1;
(statearr_1464_1479[(2)] = null);

(statearr_1464_1479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1463 === (2))){
var state_1462__$1 = state_1462;
var statearr_1465_1480 = state_1462__$1;
(statearr_1465_1480[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1463 === (3))){
var inst_1460 = (state_1462[(2)]);
var state_1462__$1 = state_1462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1462__$1,inst_1460);
} else {
if((state_val_1463 === (4))){
var state_1462__$1 = state_1462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1462__$1,(8),in_chan);
} else {
if((state_val_1463 === (5))){
var state_1462__$1 = state_1462;
var statearr_1467_1481 = state_1462__$1;
(statearr_1467_1481[(2)] = null);

(statearr_1467_1481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1463 === (6))){
var inst_1458 = (state_1462[(2)]);
var state_1462__$1 = state_1462;
var statearr_1468_1482 = state_1462__$1;
(statearr_1468_1482[(2)] = inst_1458);

(statearr_1468_1482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1463 === (7))){
var inst_1454 = (state_1462[(2)]);
var state_1462__$1 = (function (){var statearr_1469 = state_1462;
(statearr_1469[(7)] = inst_1454);

return statearr_1469;
})();
var statearr_1470_1483 = state_1462__$1;
(statearr_1470_1483[(2)] = null);

(statearr_1470_1483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1463 === (8))){
var inst_1451 = (state_1462[(2)]);
var inst_1452 = f.call(null,inst_1451);
var state_1462__$1 = state_1462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1462__$1,(7),out_chan,inst_1452);
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
});})(c__1248__auto___1478,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1478,out_chan){
return (function() {
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1474 = [null,null,null,null,null,null,null,null];
(statearr_1474[(0)] = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__);

(statearr_1474[(1)] = (1));

return statearr_1474;
});
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1 = (function (state_1462){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1475){if((e1475 instanceof Object)){
var ex__1231__auto__ = e1475;
var statearr_1476_1484 = state_1462;
(statearr_1476_1484[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1485 = state_1462;
state_1462 = G__1485;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = function(state_1462){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1.call(this,state_1462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1478,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1477 = f__1249__auto__.call(null);
(statearr_1477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1478);

return statearr_1477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1478,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.seq_BAR_ = (function guardian_alerts$pipeline$seq_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1666,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1666,out_chan){
return (function (state_1628){
var state_val_1629 = (state_1628[(1)]);
if((state_val_1629 === (7))){
var inst_1579 = (state_1628[(2)]);
var inst_1580 = f.call(null,inst_1579);
var inst_1585 = cljs.core.seq.call(null,inst_1580);
var inst_1586 = inst_1585;
var inst_1587 = null;
var inst_1588 = (0);
var inst_1589 = (0);
var state_1628__$1 = (function (){var statearr_1630 = state_1628;
(statearr_1630[(7)] = inst_1587);

(statearr_1630[(8)] = inst_1586);

(statearr_1630[(9)] = inst_1588);

(statearr_1630[(10)] = inst_1589);

return statearr_1630;
})();
var statearr_1631_1667 = state_1628__$1;
(statearr_1631_1667[(2)] = null);

(statearr_1631_1667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (1))){
var state_1628__$1 = state_1628;
var statearr_1632_1668 = state_1628__$1;
(statearr_1632_1668[(2)] = null);

(statearr_1632_1668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (4))){
var state_1628__$1 = state_1628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1628__$1,(7),in_chan);
} else {
if((state_val_1629 === (15))){
var inst_1616 = (state_1628[(2)]);
var state_1628__$1 = state_1628;
var statearr_1633_1669 = state_1628__$1;
(statearr_1633_1669[(2)] = inst_1616);

(statearr_1633_1669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (13))){
var inst_1599 = (state_1628[(11)]);
var inst_1601 = cljs.core.chunked_seq_QMARK_.call(null,inst_1599);
var state_1628__$1 = state_1628;
if(inst_1601){
var statearr_1634_1670 = state_1628__$1;
(statearr_1634_1670[(1)] = (16));

} else {
var statearr_1635_1671 = state_1628__$1;
(statearr_1635_1671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (6))){
var inst_1624 = (state_1628[(2)]);
var state_1628__$1 = state_1628;
var statearr_1636_1672 = state_1628__$1;
(statearr_1636_1672[(2)] = inst_1624);

(statearr_1636_1672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (17))){
var inst_1599 = (state_1628[(11)]);
var inst_1608 = cljs.core.first.call(null,inst_1599);
var inst_1609 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1608);
var inst_1610 = cljs.core.next.call(null,inst_1599);
var inst_1586 = inst_1610;
var inst_1587 = null;
var inst_1588 = (0);
var inst_1589 = (0);
var state_1628__$1 = (function (){var statearr_1637 = state_1628;
(statearr_1637[(7)] = inst_1587);

(statearr_1637[(8)] = inst_1586);

(statearr_1637[(9)] = inst_1588);

(statearr_1637[(12)] = inst_1609);

(statearr_1637[(10)] = inst_1589);

return statearr_1637;
})();
var statearr_1638_1673 = state_1628__$1;
(statearr_1638_1673[(2)] = null);

(statearr_1638_1673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (3))){
var inst_1626 = (state_1628[(2)]);
var state_1628__$1 = state_1628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1628__$1,inst_1626);
} else {
if((state_val_1629 === (12))){
var inst_1618 = (state_1628[(2)]);
var state_1628__$1 = state_1628;
var statearr_1639_1674 = state_1628__$1;
(statearr_1639_1674[(2)] = inst_1618);

(statearr_1639_1674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (2))){
var state_1628__$1 = state_1628;
var statearr_1640_1675 = state_1628__$1;
(statearr_1640_1675[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (11))){
var inst_1586 = (state_1628[(8)]);
var inst_1599 = (state_1628[(11)]);
var inst_1599__$1 = cljs.core.seq.call(null,inst_1586);
var state_1628__$1 = (function (){var statearr_1642 = state_1628;
(statearr_1642[(11)] = inst_1599__$1);

return statearr_1642;
})();
if(inst_1599__$1){
var statearr_1643_1676 = state_1628__$1;
(statearr_1643_1676[(1)] = (13));

} else {
var statearr_1644_1677 = state_1628__$1;
(statearr_1644_1677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (9))){
var inst_1620 = (state_1628[(2)]);
var state_1628__$1 = (function (){var statearr_1645 = state_1628;
(statearr_1645[(13)] = inst_1620);

return statearr_1645;
})();
var statearr_1646_1678 = state_1628__$1;
(statearr_1646_1678[(2)] = null);

(statearr_1646_1678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (5))){
var state_1628__$1 = state_1628;
var statearr_1647_1679 = state_1628__$1;
(statearr_1647_1679[(2)] = null);

(statearr_1647_1679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (14))){
var state_1628__$1 = state_1628;
var statearr_1651_1680 = state_1628__$1;
(statearr_1651_1680[(2)] = null);

(statearr_1651_1680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (16))){
var inst_1599 = (state_1628[(11)]);
var inst_1603 = cljs.core.chunk_first.call(null,inst_1599);
var inst_1604 = cljs.core.chunk_rest.call(null,inst_1599);
var inst_1605 = cljs.core.count.call(null,inst_1603);
var inst_1586 = inst_1604;
var inst_1587 = inst_1603;
var inst_1588 = inst_1605;
var inst_1589 = (0);
var state_1628__$1 = (function (){var statearr_1652 = state_1628;
(statearr_1652[(7)] = inst_1587);

(statearr_1652[(8)] = inst_1586);

(statearr_1652[(9)] = inst_1588);

(statearr_1652[(10)] = inst_1589);

return statearr_1652;
})();
var statearr_1653_1681 = state_1628__$1;
(statearr_1653_1681[(2)] = null);

(statearr_1653_1681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (10))){
var inst_1587 = (state_1628[(7)]);
var inst_1586 = (state_1628[(8)]);
var inst_1588 = (state_1628[(9)]);
var inst_1589 = (state_1628[(10)]);
var inst_1594 = cljs.core._nth.call(null,inst_1587,inst_1589);
var inst_1595 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1594);
var inst_1596 = (inst_1589 + (1));
var tmp1648 = inst_1587;
var tmp1649 = inst_1586;
var tmp1650 = inst_1588;
var inst_1586__$1 = tmp1649;
var inst_1587__$1 = tmp1648;
var inst_1588__$1 = tmp1650;
var inst_1589__$1 = inst_1596;
var state_1628__$1 = (function (){var statearr_1654 = state_1628;
(statearr_1654[(7)] = inst_1587__$1);

(statearr_1654[(8)] = inst_1586__$1);

(statearr_1654[(9)] = inst_1588__$1);

(statearr_1654[(14)] = inst_1595);

(statearr_1654[(10)] = inst_1589__$1);

return statearr_1654;
})();
var statearr_1655_1682 = state_1628__$1;
(statearr_1655_1682[(2)] = null);

(statearr_1655_1682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (18))){
var inst_1613 = (state_1628[(2)]);
var state_1628__$1 = state_1628;
var statearr_1656_1683 = state_1628__$1;
(statearr_1656_1683[(2)] = inst_1613);

(statearr_1656_1683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1629 === (8))){
var inst_1588 = (state_1628[(9)]);
var inst_1589 = (state_1628[(10)]);
var inst_1591 = (inst_1589 < inst_1588);
var inst_1592 = inst_1591;
var state_1628__$1 = state_1628;
if(cljs.core.truth_(inst_1592)){
var statearr_1657_1684 = state_1628__$1;
(statearr_1657_1684[(1)] = (10));

} else {
var statearr_1658_1685 = state_1628__$1;
(statearr_1658_1685[(1)] = (11));

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
});})(c__1248__auto___1666,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1666,out_chan){
return (function() {
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1662[(0)] = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__);

(statearr_1662[(1)] = (1));

return statearr_1662;
});
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1 = (function (state_1628){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1663){if((e1663 instanceof Object)){
var ex__1231__auto__ = e1663;
var statearr_1664_1686 = state_1628;
(statearr_1664_1686[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1687 = state_1628;
state_1628 = G__1687;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = function(state_1628){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1.call(this,state_1628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1666,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1665 = f__1249__auto__.call(null);
(statearr_1665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1666);

return statearr_1665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1666,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.cond_BAR_ = (function guardian_alerts$pipeline$cond_BAR_(in_chan,pred){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1764,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1764,out_chan){
return (function (state_1743){
var state_val_1744 = (state_1743[(1)]);
if((state_val_1744 === (7))){
var inst_1729 = (state_1743[(7)]);
var inst_1729__$1 = (state_1743[(2)]);
var inst_1730 = pred.call(null,inst_1729__$1);
var state_1743__$1 = (function (){var statearr_1745 = state_1743;
(statearr_1745[(7)] = inst_1729__$1);

return statearr_1745;
})();
if(cljs.core.truth_(inst_1730)){
var statearr_1746_1765 = state_1743__$1;
(statearr_1746_1765[(1)] = (8));

} else {
var statearr_1747_1766 = state_1743__$1;
(statearr_1747_1766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (1))){
var state_1743__$1 = state_1743;
var statearr_1748_1767 = state_1743__$1;
(statearr_1748_1767[(2)] = null);

(statearr_1748_1767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (4))){
var state_1743__$1 = state_1743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1743__$1,(7),in_chan);
} else {
if((state_val_1744 === (6))){
var inst_1739 = (state_1743[(2)]);
var state_1743__$1 = state_1743;
var statearr_1749_1768 = state_1743__$1;
(statearr_1749_1768[(2)] = inst_1739);

(statearr_1749_1768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (3))){
var inst_1741 = (state_1743[(2)]);
var state_1743__$1 = state_1743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1743__$1,inst_1741);
} else {
if((state_val_1744 === (2))){
var state_1743__$1 = state_1743;
var statearr_1750_1769 = state_1743__$1;
(statearr_1750_1769[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (9))){
var state_1743__$1 = state_1743;
var statearr_1752_1770 = state_1743__$1;
(statearr_1752_1770[(2)] = null);

(statearr_1752_1770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (5))){
var state_1743__$1 = state_1743;
var statearr_1753_1771 = state_1743__$1;
(statearr_1753_1771[(2)] = null);

(statearr_1753_1771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (10))){
var inst_1735 = (state_1743[(2)]);
var state_1743__$1 = (function (){var statearr_1754 = state_1743;
(statearr_1754[(8)] = inst_1735);

return statearr_1754;
})();
var statearr_1755_1772 = state_1743__$1;
(statearr_1755_1772[(2)] = null);

(statearr_1755_1772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1744 === (8))){
var inst_1729 = (state_1743[(7)]);
var inst_1732 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1729);
var state_1743__$1 = state_1743;
var statearr_1756_1773 = state_1743__$1;
(statearr_1756_1773[(2)] = inst_1732);

(statearr_1756_1773[(1)] = (10));


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
});})(c__1248__auto___1764,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1764,out_chan){
return (function() {
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1760 = [null,null,null,null,null,null,null,null,null];
(statearr_1760[(0)] = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__);

(statearr_1760[(1)] = (1));

return statearr_1760;
});
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1 = (function (state_1743){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1761){if((e1761 instanceof Object)){
var ex__1231__auto__ = e1761;
var statearr_1762_1774 = state_1743;
(statearr_1762_1774[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1775 = state_1743;
state_1743 = G__1775;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = function(state_1743){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1.call(this,state_1743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1764,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1763 = f__1249__auto__.call(null);
(statearr_1763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1764);

return statearr_1763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1764,out_chan))
);


return out_chan;
});

//# sourceMappingURL=pipeline.js.map