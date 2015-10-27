// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('guardian_alerts.db');
goog.require('cljs.core');
if(typeof guardian_alerts.db.sqlite3 !== 'undefined'){
} else {
guardian_alerts.db.sqlite3 = require("sqlite3");
}
guardian_alerts.db.init_db = (function guardian_alerts$db$init_db(filename){
var db = (new guardian_alerts.db.sqlite3.Database(filename));
return db.serialize(((function (db){
return (function (){
db.run("CREATE TABLE IF NOT EXISTS data (guid TEXT PRIMARY KEY NOT NULL, link TEXT, description TEXT, keywords TEXT)");

return db;
});})(db))
);
});
guardian_alerts.db.update_row = (function guardian_alerts$db$update_row(db,p__28){
var map__31 = p__28;
var map__31__$1 = ((((!((map__31 == null)))?((((map__31.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31):map__31);
var guid = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"guid","guid",-1152728289));
var link = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var description = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var stmt = db.prepare("INSERT OR REPLACE INTO data VALUES (?, ?, ?, ?)");
stmt.run(guid,link,description,[cljs.core.str(keywords)].join(''));

return stmt.finalize();
});
guardian_alerts.db.read_rows = (function guardian_alerts$db$read_rows(db){
return db.each("SELECT * FROM data",(function (err,row){
return cljs.core.println.call(null,cljs.core.js__GT_clj.call(null,row));
}));
});

//# sourceMappingURL=db.js.map