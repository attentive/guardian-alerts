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
db.run("CREATE TABLE IF NOT EXISTS data (\n                              guid TEXT PRIMARY KEY NOT NULL, \n                              link TEXT, \n                              description TEXT, \n                              keywords TEXT,\n                              article TEXT,\n                              article_keywords TEXT,\n                              title TEXT,\n                              date TEXT, \n                              creator TEXT\n                              )");

return db;
});})(db))
);
});
guardian_alerts.db.add_column = (function guardian_alerts$db$add_column(db,colnam){
return db.serialize((function (){
var stmt_28 = [cljs.core.str("ALTER TABLE data ADD COLUMN "),cljs.core.str(colnam),cljs.core.str(" TEXT")].join('');
cljs.core.println.call(null,"migrated",[cljs.core.str("("),cljs.core.str(stmt_28),cljs.core.str(")")].join(''));

db.run(stmt_28);

return db;
}));
});
guardian_alerts.db.analyse_db = (function guardian_alerts$db$analyse_db(db,callback){
return db.all("PRAGMA table_info(data)",(function (err,rows){
return callback.call(null,cljs.core.js__GT_clj.call(null,rows));
}));
});
guardian_alerts.db.migrate_db = (function guardian_alerts$db$migrate_db(db,callback){
return guardian_alerts.db.analyse_db.call(null,db,(function (rows){
var has_col = cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__29_SHARP_){
return cljs.core.get.call(null,p1__29_SHARP_,"name");
}),rows));
var seq__34_38 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["article","article_keywords","title","date","creator"], null));
var chunk__35_39 = null;
var count__36_40 = (0);
var i__37_41 = (0);
while(true){
if((i__37_41 < count__36_40)){
var colnam_42 = cljs.core._nth.call(null,chunk__35_39,i__37_41);
if(cljs.core.not.call(null,has_col.call(null,colnam_42))){
cljs.core.println.call(null,"column",colnam_42,"not found");

guardian_alerts.db.add_column.call(null,db,colnam_42);
} else {
cljs.core.println.call(null,"column",colnam_42,"found");
}

var G__43 = seq__34_38;
var G__44 = chunk__35_39;
var G__45 = count__36_40;
var G__46 = (i__37_41 + (1));
seq__34_38 = G__43;
chunk__35_39 = G__44;
count__36_40 = G__45;
i__37_41 = G__46;
continue;
} else {
var temp__4425__auto___47 = cljs.core.seq.call(null,seq__34_38);
if(temp__4425__auto___47){
var seq__34_48__$1 = temp__4425__auto___47;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34_48__$1)){
var c__3157__auto___49 = cljs.core.chunk_first.call(null,seq__34_48__$1);
var G__50 = cljs.core.chunk_rest.call(null,seq__34_48__$1);
var G__51 = c__3157__auto___49;
var G__52 = cljs.core.count.call(null,c__3157__auto___49);
var G__53 = (0);
seq__34_38 = G__50;
chunk__35_39 = G__51;
count__36_40 = G__52;
i__37_41 = G__53;
continue;
} else {
var colnam_54 = cljs.core.first.call(null,seq__34_48__$1);
if(cljs.core.not.call(null,has_col.call(null,colnam_54))){
cljs.core.println.call(null,"column",colnam_54,"not found");

guardian_alerts.db.add_column.call(null,db,colnam_54);
} else {
cljs.core.println.call(null,"column",colnam_54,"found");
}

var G__55 = cljs.core.next.call(null,seq__34_48__$1);
var G__56 = null;
var G__57 = (0);
var G__58 = (0);
seq__34_38 = G__55;
chunk__35_39 = G__56;
count__36_40 = G__57;
i__37_41 = G__58;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,"migration complete");

return callback.call(null,true);
}));
});
guardian_alerts.db.update_row = (function guardian_alerts$db$update_row(db,p__59){
var map__62 = p__59;
var map__62__$1 = ((((!((map__62 == null)))?((((map__62.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62):map__62);
var guid = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"guid","guid",-1152728289));
var link = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var description = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var article = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var article_keywords = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061));
var title = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var creator = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var stmt = db.prepare("INSERT OR REPLACE INTO data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
stmt.run(guid,link,description,[cljs.core.str(keywords)].join(''),article,[cljs.core.str(article_keywords)].join(''),title,date,creator);

stmt.finalize();

return [cljs.core.str("processed "),cljs.core.str(guid)].join('');
});
guardian_alerts.db.repair_row = (function guardian_alerts$db$repair_row(db,p__64){
var map__67 = p__64;
var map__67__$1 = ((((!((map__67 == null)))?((((map__67.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67):map__67);
var guid = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"guid","guid",-1152728289));
var link = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var description = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var article = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var article_keywords = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061));
var title = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var creator = cljs.core.get.call(null,map__67__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
return [cljs.core.str("repaired "),cljs.core.str(guid)].join('');
});
guardian_alerts.db.each_row = (function guardian_alerts$db$each_row(db,callback){
return db.each("SELECT * FROM data",(function (err,row){
return callback.call(null,cljs.core.js__GT_clj.call(null,row));
}));
});

//# sourceMappingURL=db.js.map