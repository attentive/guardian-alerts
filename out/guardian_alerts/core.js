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
var c__1248__auto___1321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1321,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1321,out_chan){
return (function (state_1312){
var state_val_1313 = (state_1312[(1)]);
if((state_val_1313 === (1))){
var state_1312__$1 = state_1312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1312__$1,(2),in_chan);
} else {
if((state_val_1313 === (2))){
var inst_1308 = (state_1312[(2)]);
var inst_1309 = (function (){var data = inst_1308;
return ((function (data,inst_1308,state_val_1313,c__1248__auto___1321,out_chan){
return (function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return cljs.core.async.put_BANG_.call(null,out_chan,body);
}
});
;})(data,inst_1308,state_val_1313,c__1248__auto___1321,out_chan))
})();
var inst_1310 = guardian_alerts.core.request.call(null,url,inst_1309);
var state_1312__$1 = state_1312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1312__$1,inst_1310);
} else {
return null;
}
}
});})(c__1248__auto___1321,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1321,out_chan){
return (function() {
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__ = null;
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0 = (function (){
var statearr_1317 = [null,null,null,null,null,null,null];
(statearr_1317[(0)] = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__);

(statearr_1317[(1)] = (1));

return statearr_1317;
});
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1 = (function (state_1312){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1318){if((e1318 instanceof Object)){
var ex__1231__auto__ = e1318;
var statearr_1319_1322 = state_1312;
(statearr_1319_1322[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1323 = state_1312;
state_1312 = G__1323;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__ = function(state_1312){
switch(arguments.length){
case 0:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1.call(this,state_1312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0;
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1;
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1321,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1320 = f__1249__auto__.call(null);
(statearr_1320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1321);

return statearr_1320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1321,out_chan))
);


return out_chan;
});
guardian_alerts.core.DUBLINCORE_NS = {"dc": "http://purl.org/dc/elements/1.1/"};
guardian_alerts.core.get_text = (function guardian_alerts$core$get_text(){
var args1324 = [];
var len__3300__auto___1327 = arguments.length;
var i__3301__auto___1328 = (0);
while(true){
if((i__3301__auto___1328 < len__3300__auto___1327)){
args1324.push((arguments[i__3301__auto___1328]));

var G__1329 = (i__3301__auto___1328 + (1));
i__3301__auto___1328 = G__1329;
continue;
} else {
}
break;
}

var G__1326 = args1324.length;
switch (G__1326) {
case 2:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1324.length)].join('')));

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
var c__1248__auto___1401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1401,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1401,out_chan){
return (function (state_1384){
var state_val_1385 = (state_1384[(1)]);
if((state_val_1385 === (1))){
var state_1384__$1 = state_1384;
var statearr_1386_1402 = state_1384__$1;
(statearr_1386_1402[(2)] = null);

(statearr_1386_1402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1385 === (2))){
var state_1384__$1 = state_1384;
var statearr_1387_1403 = state_1384__$1;
(statearr_1387_1403[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1385 === (3))){
var inst_1382 = (state_1384[(2)]);
var state_1384__$1 = state_1384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1384__$1,inst_1382);
} else {
if((state_val_1385 === (4))){
var state_1384__$1 = state_1384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1384__$1,(7),in_chan);
} else {
if((state_val_1385 === (5))){
var state_1384__$1 = state_1384;
var statearr_1389_1404 = state_1384__$1;
(statearr_1389_1404[(2)] = null);

(statearr_1389_1404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1385 === (6))){
var inst_1380 = (state_1384[(2)]);
var state_1384__$1 = state_1384;
var statearr_1390_1405 = state_1384__$1;
(statearr_1390_1405[(2)] = inst_1380);

(statearr_1390_1405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1385 === (7))){
var inst_1369 = (state_1384[(7)]);
var inst_1369__$1 = (state_1384[(2)]);
var inst_1370 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1369__$1);
var inst_1371 = guardian_alerts.core.fetch_page.call(null,inst_1370);
var state_1384__$1 = (function (){var statearr_1391 = state_1384;
(statearr_1391[(7)] = inst_1369__$1);

return statearr_1391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1384__$1,(8),inst_1371);
} else {
if((state_val_1385 === (8))){
var inst_1369 = (state_1384[(7)]);
var inst_1373 = (state_1384[(2)]);
var inst_1374 = guardian_alerts.core.parse_article.call(null,inst_1373);
var inst_1375 = cljs.core.merge.call(null,inst_1369,inst_1374);
var inst_1376 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1375);
var state_1384__$1 = (function (){var statearr_1392 = state_1384;
(statearr_1392[(8)] = inst_1376);

return statearr_1392;
})();
var statearr_1393_1406 = state_1384__$1;
(statearr_1393_1406[(2)] = null);

(statearr_1393_1406[(1)] = (2));


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
});})(c__1248__auto___1401,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1401,out_chan){
return (function() {
var guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = null;
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____0 = (function (){
var statearr_1397 = [null,null,null,null,null,null,null,null,null];
(statearr_1397[(0)] = guardian_alerts$core$full_articles_$_state_machine__1228__auto__);

(statearr_1397[(1)] = (1));

return statearr_1397;
});
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____1 = (function (state_1384){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1398){if((e1398 instanceof Object)){
var ex__1231__auto__ = e1398;
var statearr_1399_1407 = state_1384;
(statearr_1399_1407[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1408 = state_1384;
state_1384 = G__1408;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = function(state_1384){
switch(arguments.length){
case 0:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____1.call(this,state_1384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____0;
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____1;
return guardian_alerts$core$full_articles_$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1401,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1400 = f__1249__auto__.call(null);
(statearr_1400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1401);

return statearr_1400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1401,out_chan))
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
var len__3300__auto___1439 = arguments.length;
var i__3301__auto___1440 = (0);
while(true){
if((i__3301__auto___1440 < len__3300__auto___1439)){
args__3303__auto__.push((arguments[i__3301__auto___1440]));

var G__1441 = (i__3301__auto___1440 + (1));
i__3301__auto___1440 = G__1441;
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
return (function (p1__1409_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1409_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1423){
var state_val_1424 = (state_1423[(1)]);
if((state_val_1424 === (1))){
var state_1423__$1 = state_1423;
var statearr_1425_1442 = state_1423__$1;
(statearr_1425_1442[(2)] = null);

(statearr_1425_1442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1424 === (2))){
var state_1423__$1 = state_1423;
var statearr_1426_1443 = state_1423__$1;
(statearr_1426_1443[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1424 === (3))){
var inst_1421 = (state_1423[(2)]);
var state_1423__$1 = state_1423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1423__$1,inst_1421);
} else {
if((state_val_1424 === (4))){
var state_1423__$1 = state_1423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1423__$1,(7),out_chan);
} else {
if((state_val_1424 === (5))){
var state_1423__$1 = state_1423;
var statearr_1428_1444 = state_1423__$1;
(statearr_1428_1444[(2)] = null);

(statearr_1428_1444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1424 === (6))){
var inst_1419 = (state_1423[(2)]);
var state_1423__$1 = state_1423;
var statearr_1429_1445 = state_1423__$1;
(statearr_1429_1445[(2)] = inst_1419);

(statearr_1429_1445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1424 === (7))){
var inst_1414 = (state_1423[(2)]);
var inst_1415 = cljs.core.println.call(null,inst_1414);
var state_1423__$1 = (function (){var statearr_1430 = state_1423;
(statearr_1430[(7)] = inst_1415);

return statearr_1430;
})();
var statearr_1431_1446 = state_1423__$1;
(statearr_1431_1446[(2)] = null);

(statearr_1431_1446[(1)] = (2));


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
var statearr_1435 = [null,null,null,null,null,null,null,null];
(statearr_1435[(0)] = guardian_alerts$core$state_machine__1228__auto__);

(statearr_1435[(1)] = (1));

return statearr_1435;
});
var guardian_alerts$core$state_machine__1228__auto____1 = (function (state_1423){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1436){if((e1436 instanceof Object)){
var ex__1231__auto__ = e1436;
var statearr_1437_1447 = state_1423;
(statearr_1437_1447[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1448 = state_1423;
state_1423 = G__1448;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1228__auto__ = function(state_1423){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1228__auto____1.call(this,state_1423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1228__auto____0;
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1228__auto____1;
return guardian_alerts$core$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1250__auto__ = (function (){var statearr_1438 = f__1249__auto__.call(null);
(statearr_1438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto__);

return statearr_1438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1248__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1410){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1410));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map