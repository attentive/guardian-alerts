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
guardian_alerts.pipeline.seq_BAR_ = (function guardian_alerts$pipeline$seq_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1661,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1661,out_chan){
return (function (state_1623){
var state_val_1624 = (state_1623[(1)]);
if((state_val_1624 === (7))){
var inst_1574 = (state_1623[(2)]);
var inst_1575 = f.call(null,inst_1574);
var inst_1580 = cljs.core.seq.call(null,inst_1575);
var inst_1581 = inst_1580;
var inst_1582 = null;
var inst_1583 = (0);
var inst_1584 = (0);
var state_1623__$1 = (function (){var statearr_1625 = state_1623;
(statearr_1625[(7)] = inst_1584);

(statearr_1625[(8)] = inst_1583);

(statearr_1625[(9)] = inst_1582);

(statearr_1625[(10)] = inst_1581);

return statearr_1625;
})();
var statearr_1626_1662 = state_1623__$1;
(statearr_1626_1662[(2)] = null);

(statearr_1626_1662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (1))){
var state_1623__$1 = state_1623;
var statearr_1627_1663 = state_1623__$1;
(statearr_1627_1663[(2)] = null);

(statearr_1627_1663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (4))){
var state_1623__$1 = state_1623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1623__$1,(7),in_chan);
} else {
if((state_val_1624 === (15))){
var inst_1611 = (state_1623[(2)]);
var state_1623__$1 = state_1623;
var statearr_1628_1664 = state_1623__$1;
(statearr_1628_1664[(2)] = inst_1611);

(statearr_1628_1664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (13))){
var inst_1594 = (state_1623[(11)]);
var inst_1596 = cljs.core.chunked_seq_QMARK_.call(null,inst_1594);
var state_1623__$1 = state_1623;
if(inst_1596){
var statearr_1629_1665 = state_1623__$1;
(statearr_1629_1665[(1)] = (16));

} else {
var statearr_1630_1666 = state_1623__$1;
(statearr_1630_1666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (6))){
var inst_1619 = (state_1623[(2)]);
var state_1623__$1 = state_1623;
var statearr_1631_1667 = state_1623__$1;
(statearr_1631_1667[(2)] = inst_1619);

(statearr_1631_1667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (17))){
var inst_1594 = (state_1623[(11)]);
var inst_1603 = cljs.core.first.call(null,inst_1594);
var inst_1604 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1603);
var inst_1605 = cljs.core.next.call(null,inst_1594);
var inst_1581 = inst_1605;
var inst_1582 = null;
var inst_1583 = (0);
var inst_1584 = (0);
var state_1623__$1 = (function (){var statearr_1632 = state_1623;
(statearr_1632[(12)] = inst_1604);

(statearr_1632[(7)] = inst_1584);

(statearr_1632[(8)] = inst_1583);

(statearr_1632[(9)] = inst_1582);

(statearr_1632[(10)] = inst_1581);

return statearr_1632;
})();
var statearr_1633_1668 = state_1623__$1;
(statearr_1633_1668[(2)] = null);

(statearr_1633_1668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (3))){
var inst_1621 = (state_1623[(2)]);
var state_1623__$1 = state_1623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1623__$1,inst_1621);
} else {
if((state_val_1624 === (12))){
var inst_1613 = (state_1623[(2)]);
var state_1623__$1 = state_1623;
var statearr_1634_1669 = state_1623__$1;
(statearr_1634_1669[(2)] = inst_1613);

(statearr_1634_1669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (2))){
var state_1623__$1 = state_1623;
var statearr_1635_1670 = state_1623__$1;
(statearr_1635_1670[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (11))){
var inst_1594 = (state_1623[(11)]);
var inst_1581 = (state_1623[(10)]);
var inst_1594__$1 = cljs.core.seq.call(null,inst_1581);
var state_1623__$1 = (function (){var statearr_1637 = state_1623;
(statearr_1637[(11)] = inst_1594__$1);

return statearr_1637;
})();
if(inst_1594__$1){
var statearr_1638_1671 = state_1623__$1;
(statearr_1638_1671[(1)] = (13));

} else {
var statearr_1639_1672 = state_1623__$1;
(statearr_1639_1672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (9))){
var inst_1615 = (state_1623[(2)]);
var state_1623__$1 = (function (){var statearr_1640 = state_1623;
(statearr_1640[(13)] = inst_1615);

return statearr_1640;
})();
var statearr_1641_1673 = state_1623__$1;
(statearr_1641_1673[(2)] = null);

(statearr_1641_1673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (5))){
var state_1623__$1 = state_1623;
var statearr_1642_1674 = state_1623__$1;
(statearr_1642_1674[(2)] = null);

(statearr_1642_1674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (14))){
var state_1623__$1 = state_1623;
var statearr_1646_1675 = state_1623__$1;
(statearr_1646_1675[(2)] = null);

(statearr_1646_1675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (16))){
var inst_1594 = (state_1623[(11)]);
var inst_1598 = cljs.core.chunk_first.call(null,inst_1594);
var inst_1599 = cljs.core.chunk_rest.call(null,inst_1594);
var inst_1600 = cljs.core.count.call(null,inst_1598);
var inst_1581 = inst_1599;
var inst_1582 = inst_1598;
var inst_1583 = inst_1600;
var inst_1584 = (0);
var state_1623__$1 = (function (){var statearr_1647 = state_1623;
(statearr_1647[(7)] = inst_1584);

(statearr_1647[(8)] = inst_1583);

(statearr_1647[(9)] = inst_1582);

(statearr_1647[(10)] = inst_1581);

return statearr_1647;
})();
var statearr_1648_1676 = state_1623__$1;
(statearr_1648_1676[(2)] = null);

(statearr_1648_1676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (10))){
var inst_1584 = (state_1623[(7)]);
var inst_1583 = (state_1623[(8)]);
var inst_1582 = (state_1623[(9)]);
var inst_1581 = (state_1623[(10)]);
var inst_1589 = cljs.core._nth.call(null,inst_1582,inst_1584);
var inst_1590 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1589);
var inst_1591 = (inst_1584 + (1));
var tmp1643 = inst_1583;
var tmp1644 = inst_1582;
var tmp1645 = inst_1581;
var inst_1581__$1 = tmp1645;
var inst_1582__$1 = tmp1644;
var inst_1583__$1 = tmp1643;
var inst_1584__$1 = inst_1591;
var state_1623__$1 = (function (){var statearr_1649 = state_1623;
(statearr_1649[(7)] = inst_1584__$1);

(statearr_1649[(8)] = inst_1583__$1);

(statearr_1649[(9)] = inst_1582__$1);

(statearr_1649[(14)] = inst_1590);

(statearr_1649[(10)] = inst_1581__$1);

return statearr_1649;
})();
var statearr_1650_1677 = state_1623__$1;
(statearr_1650_1677[(2)] = null);

(statearr_1650_1677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (18))){
var inst_1608 = (state_1623[(2)]);
var state_1623__$1 = state_1623;
var statearr_1651_1678 = state_1623__$1;
(statearr_1651_1678[(2)] = inst_1608);

(statearr_1651_1678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1624 === (8))){
var inst_1584 = (state_1623[(7)]);
var inst_1583 = (state_1623[(8)]);
var inst_1586 = (inst_1584 < inst_1583);
var inst_1587 = inst_1586;
var state_1623__$1 = state_1623;
if(cljs.core.truth_(inst_1587)){
var statearr_1652_1679 = state_1623__$1;
(statearr_1652_1679[(1)] = (10));

} else {
var statearr_1653_1680 = state_1623__$1;
(statearr_1653_1680[(1)] = (11));

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
});})(c__1248__auto___1661,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1661,out_chan){
return (function() {
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1657[(0)] = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__);

(statearr_1657[(1)] = (1));

return statearr_1657;
});
var guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1 = (function (state_1623){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1658){if((e1658 instanceof Object)){
var ex__1231__auto__ = e1658;
var statearr_1659_1681 = state_1623;
(statearr_1659_1681[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1682 = state_1623;
state_1623 = G__1682;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__ = function(state_1623){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1.call(this,state_1623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$seq_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1661,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1660 = f__1249__auto__.call(null);
(statearr_1660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1661);

return statearr_1660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1661,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.cond_BAR_ = (function guardian_alerts$pipeline$cond_BAR_(in_chan,pred){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1759,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1759,out_chan){
return (function (state_1738){
var state_val_1739 = (state_1738[(1)]);
if((state_val_1739 === (7))){
var inst_1724 = (state_1738[(7)]);
var inst_1724__$1 = (state_1738[(2)]);
var inst_1725 = pred.call(null,inst_1724__$1);
var state_1738__$1 = (function (){var statearr_1740 = state_1738;
(statearr_1740[(7)] = inst_1724__$1);

return statearr_1740;
})();
if(cljs.core.truth_(inst_1725)){
var statearr_1741_1760 = state_1738__$1;
(statearr_1741_1760[(1)] = (8));

} else {
var statearr_1742_1761 = state_1738__$1;
(statearr_1742_1761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (1))){
var state_1738__$1 = state_1738;
var statearr_1743_1762 = state_1738__$1;
(statearr_1743_1762[(2)] = null);

(statearr_1743_1762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (4))){
var state_1738__$1 = state_1738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1738__$1,(7),in_chan);
} else {
if((state_val_1739 === (6))){
var inst_1734 = (state_1738[(2)]);
var state_1738__$1 = state_1738;
var statearr_1744_1763 = state_1738__$1;
(statearr_1744_1763[(2)] = inst_1734);

(statearr_1744_1763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (3))){
var inst_1736 = (state_1738[(2)]);
var state_1738__$1 = state_1738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1738__$1,inst_1736);
} else {
if((state_val_1739 === (2))){
var state_1738__$1 = state_1738;
var statearr_1745_1764 = state_1738__$1;
(statearr_1745_1764[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (9))){
var state_1738__$1 = state_1738;
var statearr_1747_1765 = state_1738__$1;
(statearr_1747_1765[(2)] = null);

(statearr_1747_1765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (5))){
var state_1738__$1 = state_1738;
var statearr_1748_1766 = state_1738__$1;
(statearr_1748_1766[(2)] = null);

(statearr_1748_1766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (10))){
var inst_1730 = (state_1738[(2)]);
var state_1738__$1 = (function (){var statearr_1749 = state_1738;
(statearr_1749[(8)] = inst_1730);

return statearr_1749;
})();
var statearr_1750_1767 = state_1738__$1;
(statearr_1750_1767[(2)] = null);

(statearr_1750_1767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1739 === (8))){
var inst_1724 = (state_1738[(7)]);
var inst_1727 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1724);
var state_1738__$1 = state_1738;
var statearr_1751_1768 = state_1738__$1;
(statearr_1751_1768[(2)] = inst_1727);

(statearr_1751_1768[(1)] = (10));


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
});})(c__1248__auto___1759,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1759,out_chan){
return (function() {
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1755 = [null,null,null,null,null,null,null,null,null];
(statearr_1755[(0)] = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__);

(statearr_1755[(1)] = (1));

return statearr_1755;
});
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1 = (function (state_1738){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1756){if((e1756 instanceof Object)){
var ex__1231__auto__ = e1756;
var statearr_1757_1769 = state_1738;
(statearr_1757_1769[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1770 = state_1738;
state_1738 = G__1770;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = function(state_1738){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1.call(this,state_1738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1759,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1758 = f__1249__auto__.call(null);
(statearr_1758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1759);

return statearr_1758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1759,out_chan))
);


return out_chan;
});

//# sourceMappingURL=pipeline.js.map