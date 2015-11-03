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
var stmt_89 = [cljs.core.str("ALTER TABLE data ADD COLUMN "),cljs.core.str(colnam),cljs.core.str(" TEXT")].join('');
cljs.core.println.call(null,"migrated",[cljs.core.str("("),cljs.core.str(stmt_89),cljs.core.str(")")].join(''));

db.run(stmt_89);

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
var has_col = cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__90_SHARP_){
return cljs.core.get.call(null,p1__90_SHARP_,"name");
}),rows));
var seq__95_99 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["article","article_keywords","title","date","creator"], null));
var chunk__96_100 = null;
var count__97_101 = (0);
var i__98_102 = (0);
while(true){
if((i__98_102 < count__97_101)){
var colnam_103 = cljs.core._nth.call(null,chunk__96_100,i__98_102);
if(cljs.core.not.call(null,has_col.call(null,colnam_103))){
cljs.core.println.call(null,"column",colnam_103,"not found");

guardian_alerts.db.add_column.call(null,db,colnam_103);
} else {
}

var G__104 = seq__95_99;
var G__105 = chunk__96_100;
var G__106 = count__97_101;
var G__107 = (i__98_102 + (1));
seq__95_99 = G__104;
chunk__96_100 = G__105;
count__97_101 = G__106;
i__98_102 = G__107;
continue;
} else {
var temp__4425__auto___108 = cljs.core.seq.call(null,seq__95_99);
if(temp__4425__auto___108){
var seq__95_109__$1 = temp__4425__auto___108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__95_109__$1)){
var c__3157__auto___110 = cljs.core.chunk_first.call(null,seq__95_109__$1);
var G__111 = cljs.core.chunk_rest.call(null,seq__95_109__$1);
var G__112 = c__3157__auto___110;
var G__113 = cljs.core.count.call(null,c__3157__auto___110);
var G__114 = (0);
seq__95_99 = G__111;
chunk__96_100 = G__112;
count__97_101 = G__113;
i__98_102 = G__114;
continue;
} else {
var colnam_115 = cljs.core.first.call(null,seq__95_109__$1);
if(cljs.core.not.call(null,has_col.call(null,colnam_115))){
cljs.core.println.call(null,"column",colnam_115,"not found");

guardian_alerts.db.add_column.call(null,db,colnam_115);
} else {
}

var G__116 = cljs.core.next.call(null,seq__95_109__$1);
var G__117 = null;
var G__118 = (0);
var G__119 = (0);
seq__95_99 = G__116;
chunk__96_100 = G__117;
count__97_101 = G__118;
i__98_102 = G__119;
continue;
}
} else {
}
}
break;
}

return callback.call(null,true);
}));
});
guardian_alerts.db.update_row = (function guardian_alerts$db$update_row(db,p__120){
var map__123 = p__120;
var map__123__$1 = ((((!((map__123 == null)))?((((map__123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__123):map__123);
var guid = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"guid","guid",-1152728289));
var link = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var description = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var article = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var article_keywords = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061));
var title = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var creator = cljs.core.get.call(null,map__123__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var stmt = db.prepare("INSERT OR REPLACE INTO data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
stmt.run(guid,link,description,[cljs.core.str(keywords)].join(''),article,[cljs.core.str(article_keywords)].join(''),title,date,creator);

stmt.finalize();

return [cljs.core.str("processed "),cljs.core.str(guid)].join('');
});
guardian_alerts.db.missing_values = (function guardian_alerts$db$missing_values(row_data){
return cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,row_data));
});
guardian_alerts.db.repair_row = (function guardian_alerts$db$repair_row(db,p__125){
var map__128 = p__125;
var map__128__$1 = ((((!((map__128 == null)))?((((map__128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__128):map__128);
var guid = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"guid","guid",-1152728289));
var link = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var description = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var article = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var article_keywords = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"article-keywords","article-keywords",1958564061));
var title = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var creator = cljs.core.get.call(null,map__128__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
return [cljs.core.str("repaired "),cljs.core.str(guid)].join('');
});
guardian_alerts.db.each_row = (function guardian_alerts$db$each_row(db,callback){
return db.each("SELECT * FROM data",(function (err,row){
return callback.call(null,cljs.core.js__GT_clj.call(null,row));
}));
});

//# sourceMappingURL=db.js.map