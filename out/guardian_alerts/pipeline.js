// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.pipeline');
goog.require('cljs.core');
goog.require('cljs.core.async');
guardian_alerts.pipeline._BAR_ = (function guardian_alerts$pipeline$_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1353,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1353,out_chan){
return (function (state_1337){
var state_val_1338 = (state_1337[(1)]);
if((state_val_1338 === (1))){
var state_1337__$1 = state_1337;
var statearr_1339_1354 = state_1337__$1;
(statearr_1339_1354[(2)] = null);

(statearr_1339_1354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1338 === (2))){
var state_1337__$1 = state_1337;
var statearr_1340_1355 = state_1337__$1;
(statearr_1340_1355[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1338 === (3))){
var inst_1335 = (state_1337[(2)]);
var state_1337__$1 = state_1337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1337__$1,inst_1335);
} else {
if((state_val_1338 === (4))){
var state_1337__$1 = state_1337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1337__$1,(8),in_chan);
} else {
if((state_val_1338 === (5))){
var state_1337__$1 = state_1337;
var statearr_1342_1356 = state_1337__$1;
(statearr_1342_1356[(2)] = null);

(statearr_1342_1356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1338 === (6))){
var inst_1333 = (state_1337[(2)]);
var state_1337__$1 = state_1337;
var statearr_1343_1357 = state_1337__$1;
(statearr_1343_1357[(2)] = inst_1333);

(statearr_1343_1357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1338 === (7))){
var inst_1329 = (state_1337[(2)]);
var state_1337__$1 = (function (){var statearr_1344 = state_1337;
(statearr_1344[(7)] = inst_1329);

return statearr_1344;
})();
var statearr_1345_1358 = state_1337__$1;
(statearr_1345_1358[(2)] = null);

(statearr_1345_1358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1338 === (8))){
var inst_1326 = (state_1337[(2)]);
var inst_1327 = f.call(null,inst_1326);
var state_1337__$1 = state_1337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1337__$1,(7),out_chan,inst_1327);
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
});})(c__1248__auto___1353,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1353,out_chan){
return (function() {
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1349 = [null,null,null,null,null,null,null,null];
(statearr_1349[(0)] = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__);

(statearr_1349[(1)] = (1));

return statearr_1349;
});
var guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1 = (function (state_1337){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1350){if((e1350 instanceof Object)){
var ex__1231__auto__ = e1350;
var statearr_1351_1359 = state_1337;
(statearr_1351_1359[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1360 = state_1337;
state_1337 = G__1360;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__ = function(state_1337){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1.call(this,state_1337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1353,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1352 = f__1249__auto__.call(null);
(statearr_1352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1353);

return statearr_1352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1353,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.coll_BAR_ = (function guardian_alerts$pipeline$coll_BAR_(in_chan,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1541,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1541,out_chan){
return (function (state_1503){
var state_val_1504 = (state_1503[(1)]);
if((state_val_1504 === (7))){
var inst_1454 = (state_1503[(2)]);
var inst_1455 = f.call(null,inst_1454);
var inst_1460 = cljs.core.seq.call(null,inst_1455);
var inst_1461 = inst_1460;
var inst_1462 = null;
var inst_1463 = (0);
var inst_1464 = (0);
var state_1503__$1 = (function (){var statearr_1505 = state_1503;
(statearr_1505[(7)] = inst_1461);

(statearr_1505[(8)] = inst_1464);

(statearr_1505[(9)] = inst_1463);

(statearr_1505[(10)] = inst_1462);

return statearr_1505;
})();
var statearr_1506_1542 = state_1503__$1;
(statearr_1506_1542[(2)] = null);

(statearr_1506_1542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (1))){
var state_1503__$1 = state_1503;
var statearr_1507_1543 = state_1503__$1;
(statearr_1507_1543[(2)] = null);

(statearr_1507_1543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (4))){
var state_1503__$1 = state_1503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1503__$1,(7),in_chan);
} else {
if((state_val_1504 === (15))){
var inst_1491 = (state_1503[(2)]);
var state_1503__$1 = state_1503;
var statearr_1508_1544 = state_1503__$1;
(statearr_1508_1544[(2)] = inst_1491);

(statearr_1508_1544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (13))){
var inst_1474 = (state_1503[(11)]);
var inst_1476 = cljs.core.chunked_seq_QMARK_.call(null,inst_1474);
var state_1503__$1 = state_1503;
if(inst_1476){
var statearr_1509_1545 = state_1503__$1;
(statearr_1509_1545[(1)] = (16));

} else {
var statearr_1510_1546 = state_1503__$1;
(statearr_1510_1546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (6))){
var inst_1499 = (state_1503[(2)]);
var state_1503__$1 = state_1503;
var statearr_1511_1547 = state_1503__$1;
(statearr_1511_1547[(2)] = inst_1499);

(statearr_1511_1547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (17))){
var inst_1474 = (state_1503[(11)]);
var inst_1483 = cljs.core.first.call(null,inst_1474);
var inst_1484 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1483);
var inst_1485 = cljs.core.next.call(null,inst_1474);
var inst_1461 = inst_1485;
var inst_1462 = null;
var inst_1463 = (0);
var inst_1464 = (0);
var state_1503__$1 = (function (){var statearr_1512 = state_1503;
(statearr_1512[(12)] = inst_1484);

(statearr_1512[(7)] = inst_1461);

(statearr_1512[(8)] = inst_1464);

(statearr_1512[(9)] = inst_1463);

(statearr_1512[(10)] = inst_1462);

return statearr_1512;
})();
var statearr_1513_1548 = state_1503__$1;
(statearr_1513_1548[(2)] = null);

(statearr_1513_1548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (3))){
var inst_1501 = (state_1503[(2)]);
var state_1503__$1 = state_1503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1503__$1,inst_1501);
} else {
if((state_val_1504 === (12))){
var inst_1493 = (state_1503[(2)]);
var state_1503__$1 = state_1503;
var statearr_1514_1549 = state_1503__$1;
(statearr_1514_1549[(2)] = inst_1493);

(statearr_1514_1549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (2))){
var state_1503__$1 = state_1503;
var statearr_1515_1550 = state_1503__$1;
(statearr_1515_1550[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (11))){
var inst_1474 = (state_1503[(11)]);
var inst_1461 = (state_1503[(7)]);
var inst_1474__$1 = cljs.core.seq.call(null,inst_1461);
var state_1503__$1 = (function (){var statearr_1517 = state_1503;
(statearr_1517[(11)] = inst_1474__$1);

return statearr_1517;
})();
if(inst_1474__$1){
var statearr_1518_1551 = state_1503__$1;
(statearr_1518_1551[(1)] = (13));

} else {
var statearr_1519_1552 = state_1503__$1;
(statearr_1519_1552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (9))){
var inst_1495 = (state_1503[(2)]);
var state_1503__$1 = (function (){var statearr_1520 = state_1503;
(statearr_1520[(13)] = inst_1495);

return statearr_1520;
})();
var statearr_1521_1553 = state_1503__$1;
(statearr_1521_1553[(2)] = null);

(statearr_1521_1553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (5))){
var state_1503__$1 = state_1503;
var statearr_1522_1554 = state_1503__$1;
(statearr_1522_1554[(2)] = null);

(statearr_1522_1554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (14))){
var state_1503__$1 = state_1503;
var statearr_1526_1555 = state_1503__$1;
(statearr_1526_1555[(2)] = null);

(statearr_1526_1555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (16))){
var inst_1474 = (state_1503[(11)]);
var inst_1478 = cljs.core.chunk_first.call(null,inst_1474);
var inst_1479 = cljs.core.chunk_rest.call(null,inst_1474);
var inst_1480 = cljs.core.count.call(null,inst_1478);
var inst_1461 = inst_1479;
var inst_1462 = inst_1478;
var inst_1463 = inst_1480;
var inst_1464 = (0);
var state_1503__$1 = (function (){var statearr_1527 = state_1503;
(statearr_1527[(7)] = inst_1461);

(statearr_1527[(8)] = inst_1464);

(statearr_1527[(9)] = inst_1463);

(statearr_1527[(10)] = inst_1462);

return statearr_1527;
})();
var statearr_1528_1556 = state_1503__$1;
(statearr_1528_1556[(2)] = null);

(statearr_1528_1556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (10))){
var inst_1461 = (state_1503[(7)]);
var inst_1464 = (state_1503[(8)]);
var inst_1463 = (state_1503[(9)]);
var inst_1462 = (state_1503[(10)]);
var inst_1469 = cljs.core._nth.call(null,inst_1462,inst_1464);
var inst_1470 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1469);
var inst_1471 = (inst_1464 + (1));
var tmp1523 = inst_1461;
var tmp1524 = inst_1463;
var tmp1525 = inst_1462;
var inst_1461__$1 = tmp1523;
var inst_1462__$1 = tmp1525;
var inst_1463__$1 = tmp1524;
var inst_1464__$1 = inst_1471;
var state_1503__$1 = (function (){var statearr_1529 = state_1503;
(statearr_1529[(7)] = inst_1461__$1);

(statearr_1529[(8)] = inst_1464__$1);

(statearr_1529[(9)] = inst_1463__$1);

(statearr_1529[(10)] = inst_1462__$1);

(statearr_1529[(14)] = inst_1470);

return statearr_1529;
})();
var statearr_1530_1557 = state_1503__$1;
(statearr_1530_1557[(2)] = null);

(statearr_1530_1557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (18))){
var inst_1488 = (state_1503[(2)]);
var state_1503__$1 = state_1503;
var statearr_1531_1558 = state_1503__$1;
(statearr_1531_1558[(2)] = inst_1488);

(statearr_1531_1558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1504 === (8))){
var inst_1464 = (state_1503[(8)]);
var inst_1463 = (state_1503[(9)]);
var inst_1466 = (inst_1464 < inst_1463);
var inst_1467 = inst_1466;
var state_1503__$1 = state_1503;
if(cljs.core.truth_(inst_1467)){
var statearr_1532_1559 = state_1503__$1;
(statearr_1532_1559[(1)] = (10));

} else {
var statearr_1533_1560 = state_1503__$1;
(statearr_1533_1560[(1)] = (11));

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
});})(c__1248__auto___1541,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1541,out_chan){
return (function() {
var guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1537[(0)] = guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__);

(statearr_1537[(1)] = (1));

return statearr_1537;
});
var guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____1 = (function (state_1503){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1538){if((e1538 instanceof Object)){
var ex__1231__auto__ = e1538;
var statearr_1539_1561 = state_1503;
(statearr_1539_1561[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1562 = state_1503;
state_1503 = G__1562;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__ = function(state_1503){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____1.call(this,state_1503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$coll_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1541,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1540 = f__1249__auto__.call(null);
(statearr_1540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1541);

return statearr_1540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1541,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.cond_BAR_ = (function guardian_alerts$pipeline$cond_BAR_(in_chan,pred){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto___1639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1639,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1639,out_chan){
return (function (state_1618){
var state_val_1619 = (state_1618[(1)]);
if((state_val_1619 === (7))){
var inst_1604 = (state_1618[(7)]);
var inst_1604__$1 = (state_1618[(2)]);
var inst_1605 = pred.call(null,inst_1604__$1);
var state_1618__$1 = (function (){var statearr_1620 = state_1618;
(statearr_1620[(7)] = inst_1604__$1);

return statearr_1620;
})();
if(cljs.core.truth_(inst_1605)){
var statearr_1621_1640 = state_1618__$1;
(statearr_1621_1640[(1)] = (8));

} else {
var statearr_1622_1641 = state_1618__$1;
(statearr_1622_1641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (1))){
var state_1618__$1 = state_1618;
var statearr_1623_1642 = state_1618__$1;
(statearr_1623_1642[(2)] = null);

(statearr_1623_1642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (4))){
var state_1618__$1 = state_1618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1618__$1,(7),in_chan);
} else {
if((state_val_1619 === (6))){
var inst_1614 = (state_1618[(2)]);
var state_1618__$1 = state_1618;
var statearr_1624_1643 = state_1618__$1;
(statearr_1624_1643[(2)] = inst_1614);

(statearr_1624_1643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (3))){
var inst_1616 = (state_1618[(2)]);
var state_1618__$1 = state_1618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1618__$1,inst_1616);
} else {
if((state_val_1619 === (2))){
var state_1618__$1 = state_1618;
var statearr_1625_1644 = state_1618__$1;
(statearr_1625_1644[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (9))){
var state_1618__$1 = state_1618;
var statearr_1627_1645 = state_1618__$1;
(statearr_1627_1645[(2)] = null);

(statearr_1627_1645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (5))){
var state_1618__$1 = state_1618;
var statearr_1628_1646 = state_1618__$1;
(statearr_1628_1646[(2)] = null);

(statearr_1628_1646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (10))){
var inst_1610 = (state_1618[(2)]);
var state_1618__$1 = (function (){var statearr_1629 = state_1618;
(statearr_1629[(8)] = inst_1610);

return statearr_1629;
})();
var statearr_1630_1647 = state_1618__$1;
(statearr_1630_1647[(2)] = null);

(statearr_1630_1647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1619 === (8))){
var inst_1604 = (state_1618[(7)]);
var inst_1607 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1604);
var state_1618__$1 = state_1618;
var statearr_1631_1648 = state_1618__$1;
(statearr_1631_1648[(2)] = inst_1607);

(statearr_1631_1648[(1)] = (10));


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
});})(c__1248__auto___1639,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1639,out_chan){
return (function() {
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1635 = [null,null,null,null,null,null,null,null,null];
(statearr_1635[(0)] = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__);

(statearr_1635[(1)] = (1));

return statearr_1635;
});
var guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1 = (function (state_1618){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1636){if((e1636 instanceof Object)){
var ex__1231__auto__ = e1636;
var statearr_1637_1649 = state_1618;
(statearr_1637_1649[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1650 = state_1618;
state_1618 = G__1650;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__ = function(state_1618){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1.call(this,state_1618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$cond_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1639,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1638 = f__1249__auto__.call(null);
(statearr_1638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1639);

return statearr_1638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1639,out_chan))
);


return out_chan;
});
guardian_alerts.pipeline.condf_BAR_ = (function guardian_alerts$pipeline$condf_BAR_(in_chan,pred,f){
var out_chan = cljs.core.async.chan.call(null);
var c__1248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto__,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto__,out_chan){
return (function (state_1710){
var state_val_1711 = (state_1710[(1)]);
if((state_val_1711 === (7))){
var inst_1694 = (state_1710[(7)]);
var inst_1694__$1 = (state_1710[(2)]);
var inst_1695 = pred.call(null,inst_1694__$1);
var state_1710__$1 = (function (){var statearr_1712 = state_1710;
(statearr_1712[(7)] = inst_1694__$1);

return statearr_1712;
})();
if(cljs.core.truth_(inst_1695)){
var statearr_1713_1731 = state_1710__$1;
(statearr_1713_1731[(1)] = (8));

} else {
var statearr_1714_1732 = state_1710__$1;
(statearr_1714_1732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (1))){
var state_1710__$1 = state_1710;
var statearr_1715_1733 = state_1710__$1;
(statearr_1715_1733[(2)] = null);

(statearr_1715_1733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (4))){
var state_1710__$1 = state_1710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1710__$1,(7),in_chan);
} else {
if((state_val_1711 === (6))){
var inst_1706 = (state_1710[(2)]);
var state_1710__$1 = state_1710;
var statearr_1716_1734 = state_1710__$1;
(statearr_1716_1734[(2)] = inst_1706);

(statearr_1716_1734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (3))){
var inst_1708 = (state_1710[(2)]);
var state_1710__$1 = state_1710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1710__$1,inst_1708);
} else {
if((state_val_1711 === (2))){
var state_1710__$1 = state_1710;
var statearr_1717_1735 = state_1710__$1;
(statearr_1717_1735[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (9))){
var inst_1694 = (state_1710[(7)]);
var inst_1700 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1694);
var state_1710__$1 = state_1710;
var statearr_1719_1736 = state_1710__$1;
(statearr_1719_1736[(2)] = inst_1700);

(statearr_1719_1736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (5))){
var state_1710__$1 = state_1710;
var statearr_1720_1737 = state_1710__$1;
(statearr_1720_1737[(2)] = null);

(statearr_1720_1737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (10))){
var inst_1702 = (state_1710[(2)]);
var state_1710__$1 = (function (){var statearr_1721 = state_1710;
(statearr_1721[(8)] = inst_1702);

return statearr_1721;
})();
var statearr_1722_1738 = state_1710__$1;
(statearr_1722_1738[(2)] = null);

(statearr_1722_1738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1711 === (8))){
var inst_1694 = (state_1710[(7)]);
var inst_1697 = f.call(null,inst_1694);
var inst_1698 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1697);
var state_1710__$1 = state_1710;
var statearr_1723_1739 = state_1710__$1;
(statearr_1723_1739[(2)] = inst_1698);

(statearr_1723_1739[(1)] = (10));


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
});})(c__1248__auto__,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto__,out_chan){
return (function() {
var guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__ = null;
var guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____0 = (function (){
var statearr_1727 = [null,null,null,null,null,null,null,null,null];
(statearr_1727[(0)] = guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__);

(statearr_1727[(1)] = (1));

return statearr_1727;
});
var guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____1 = (function (state_1710){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1728){if((e1728 instanceof Object)){
var ex__1231__auto__ = e1728;
var statearr_1729_1740 = state_1710;
(statearr_1729_1740[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1741 = state_1710;
state_1710 = G__1741;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__ = function(state_1710){
switch(arguments.length){
case 0:
return guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____1.call(this,state_1710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____0;
guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto____1;
return guardian_alerts$pipeline$condf_BAR__$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto__,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1730 = f__1249__auto__.call(null);
(statearr_1730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto__);

return statearr_1730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto__,out_chan))
);

return c__1248__auto__;
});

//# sourceMappingURL=pipeline.js.map