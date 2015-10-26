// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
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
var G__29 = db.prepare("INSERT INTO data VALUES (?)");
G__29.run(value);

G__29.finalize();

return G__29;
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
guardian_alerts.core.run = (function guardian_alerts$core$run(db){
return guardian_alerts.core.fetch_page.call(null,"https://morph.io",(function (body){
var $_30 = guardian_alerts.core.cheerio.load(body);
var title_31 = $_30.call(null,"title").text();
guardian_alerts.core.update_row.call(null,db,title_31);

guardian_alerts.core.read_rows.call(null,db);

return db.close();
}));
});
guardian_alerts.core._main = (function guardian_alerts$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___33 = arguments.length;
var i__3301__auto___34 = (0);
while(true){
if((i__3301__auto___34 < len__3300__auto___33)){
args__3303__auto__.push((arguments[i__3301__auto___34]));

var G__35 = (i__3301__auto___34 + (1));
i__3301__auto___34 = G__35;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((0) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((0)),(0))):null);
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3304__auto__);
});

guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return guardian_alerts.core.init_db.call(null,guardian_alerts.core.run);
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq32){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map