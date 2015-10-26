// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof guardian_alerts.core.cheerio !== 'undefined'){
} else {
guardian_alerts.core.cheerio = require("cheerio");
}
if(typeof guardian_alerts.core.request !== 'undefined'){
} else {
guardian_alerts.core.request = require("request");
}
if(typeof guardian_alerts.core.sqlite3 !== 'undefined'){
} else {
guardian_alerts.core.sqlite3 = require("sqlite3");
}
if(typeof guardian_alerts.core.libxmljs !== 'undefined'){
} else {
guardian_alerts.core.libxmljs = require("libxmljs");
}
if(typeof guardian_alerts.core.tokenize !== 'undefined'){
} else {
guardian_alerts.core.tokenize = require("text-tokenize");
}
guardian_alerts.core.strip_html = (function guardian_alerts$core$strip_html(input){
return clojure.string.replace.call(null,input,/<\/?[^>]+>/,"");
});
guardian_alerts.core.keywordize = cljs.core.comp.call(null,cljs.core.js__GT_clj,guardian_alerts.core.tokenize,guardian_alerts.core.strip_html);
guardian_alerts.core.init_db = (function guardian_alerts$core$init_db(callback){
var db = (new guardian_alerts.core.sqlite3.Database("data.sqlite"));
return db.serialize(((function (db){
return (function (){
db.run("CREATE TABLE IF NOT EXISTS data (name TEXT)");

return callback.call(null,db);
});})(db))
);
});
guardian_alerts.core.update_row = (function guardian_alerts$core$update_row(db,value){
var G__1294 = db.prepare("INSERT INTO data VALUES (?)");
G__1294.run(value);

G__1294.finalize();

return G__1294;
});
guardian_alerts.core.read_rows = (function guardian_alerts$core$read_rows(db){
return db.each("SELECT rowid AS id, name FROM data",(function (err,row){
return cljs.core.println.call(null,row.id,": ",row.name);
}));
});
guardian_alerts.core.fetch_page = (function guardian_alerts$core$fetch_page(url,callback){
return guardian_alerts.core.request.call(null,url,(function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return callback.call(null,body);
}
}));
});
if(typeof guardian_alerts.core.rss_chan !== 'undefined'){
} else {
guardian_alerts.core.rss_chan = cljs.core.async.chan.call(null);
}
guardian_alerts.core.rss_item = (function guardian_alerts$core$rss_item(frag){
var gt = (function (p1__1295_SHARP_,p2__1296_SHARP_){
return p1__1295_SHARP_.get(p2__1296_SHARP_).text();
});
var desc = gt.call(null,frag,"description");
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"link","link",-1769163468),gt.call(null,frag,"link"),new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"keywords","keywords",1526959054),guardian_alerts.core.keywordize.call(null,desc)], null);
});
guardian_alerts.core.has_keyword = (function guardian_alerts$core$has_keyword(item){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["asylum",null,"refugees",null], null), null),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(item));
});
guardian_alerts.core.rss_items = (function guardian_alerts$core$rss_items(url){
return guardian_alerts.core.fetch_page.call(null,url,(function (body){
var doc = guardian_alerts.core.libxmljs.parseXml(body);
var items = doc.find("//item");
var get_text = ((function (doc,items){
return (function (item,path){
return item.get(path).text();
});})(doc,items))
;
return cljs.core.async.put_BANG_.call(null,guardian_alerts.core.rss_chan,cljs.core.filter.call(null,guardian_alerts.core.has_keyword,cljs.core.map.call(null,guardian_alerts.core.rss_item,items)));
}));
});
guardian_alerts.core.run = (function guardian_alerts$core$run(db){
return guardian_alerts.core.fetch_page.call(null,"https://morph.io",(function (body){
var $_1297 = guardian_alerts.core.cheerio.load(body);
var title_1298 = $_1297.call(null,"title").text();
guardian_alerts.core.update_row.call(null,db,title_1298);

guardian_alerts.core.read_rows.call(null,db);

return db.close();
}));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___1313 = arguments.length;
var i__3301__auto___1314 = (0);
while(true){
if((i__3301__auto___1314 < len__3300__auto___1313)){
args__3303__auto__.push((arguments[i__3301__auto___1314]));

var G__1315 = (i__3301__auto___1314 + (1));
i__3301__auto___1314 = G__1315;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((0) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((0)),(0))):null);
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3304__auto__);
});

guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
guardian_alerts.core.rss_items.call(null,"http://www.theguardian.com/au/rss");

var c__1248__auto___1316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1316){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1316){
return (function (state_1304){
var state_val_1305 = (state_1304[(1)]);
if((state_val_1305 === (1))){
var state_1304__$1 = state_1304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1304__$1,(2),guardian_alerts.core.rss_chan);
} else {
if((state_val_1305 === (2))){
var inst_1301 = (state_1304[(2)]);
var inst_1302 = cljs.core.println.call(null,inst_1301);
var state_1304__$1 = state_1304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1304__$1,inst_1302);
} else {
return null;
}
}
});})(c__1248__auto___1316))
;
return ((function (switch__1227__auto__,c__1248__auto___1316){
return (function() {
var guardian_alerts$core$state_machine__1228__auto__ = null;
var guardian_alerts$core$state_machine__1228__auto____0 = (function (){
var statearr_1309 = [null,null,null,null,null,null,null];
(statearr_1309[(0)] = guardian_alerts$core$state_machine__1228__auto__);

(statearr_1309[(1)] = (1));

return statearr_1309;
});
var guardian_alerts$core$state_machine__1228__auto____1 = (function (state_1304){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1310){if((e1310 instanceof Object)){
var ex__1231__auto__ = e1310;
var statearr_1311_1317 = state_1304;
(statearr_1311_1317[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1318 = state_1304;
state_1304 = G__1318;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1228__auto__ = function(state_1304){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1228__auto____1.call(this,state_1304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1228__auto____0;
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1228__auto____1;
return guardian_alerts$core$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1316))
})();
var state__1250__auto__ = (function (){var statearr_1312 = f__1249__auto__.call(null);
(statearr_1312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1316);

return statearr_1312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1316))
);


return guardian_alerts.core.init_db.call(null,guardian_alerts.core.run);
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1299){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1299));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map