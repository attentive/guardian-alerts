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
var c__1248__auto___1806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1806,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1806,out_chan){
return (function (state_1797){
var state_val_1798 = (state_1797[(1)]);
if((state_val_1798 === (1))){
var state_1797__$1 = state_1797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1797__$1,(2),in_chan);
} else {
if((state_val_1798 === (2))){
var inst_1793 = (state_1797[(2)]);
var inst_1794 = (function (){var data = inst_1793;
return ((function (data,inst_1793,state_val_1798,c__1248__auto___1806,out_chan){
return (function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return cljs.core.async.put_BANG_.call(null,out_chan,body);
}
});
;})(data,inst_1793,state_val_1798,c__1248__auto___1806,out_chan))
})();
var inst_1795 = guardian_alerts.core.request.call(null,url,inst_1794);
var state_1797__$1 = state_1797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1797__$1,inst_1795);
} else {
return null;
}
}
});})(c__1248__auto___1806,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1806,out_chan){
return (function() {
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__ = null;
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0 = (function (){
var statearr_1802 = [null,null,null,null,null,null,null];
(statearr_1802[(0)] = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__);

(statearr_1802[(1)] = (1));

return statearr_1802;
});
var guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1 = (function (state_1797){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1803){if((e1803 instanceof Object)){
var ex__1231__auto__ = e1803;
var statearr_1804_1807 = state_1797;
(statearr_1804_1807[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1808 = state_1797;
state_1797 = G__1808;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__ = function(state_1797){
switch(arguments.length){
case 0:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1.call(this,state_1797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____0;
guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto____1;
return guardian_alerts$core$pipelined_fetch_page_$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1806,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1805 = f__1249__auto__.call(null);
(statearr_1805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1806);

return statearr_1805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1806,out_chan))
);


return out_chan;
});
guardian_alerts.core.DUBLINCORE_NS = {"dc": "http://purl.org/dc/elements/1.1/"};
guardian_alerts.core.get_text = (function guardian_alerts$core$get_text(){
var args1809 = [];
var len__3300__auto___1812 = arguments.length;
var i__3301__auto___1813 = (0);
while(true){
if((i__3301__auto___1813 < len__3300__auto___1812)){
args1809.push((arguments[i__3301__auto___1813]));

var G__1814 = (i__3301__auto___1813 + (1));
i__3301__auto___1813 = G__1814;
continue;
} else {
}
break;
}

var G__1811 = args1809.length;
switch (G__1811) {
case 2:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guardian_alerts.core.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1809.length)].join('')));

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
var c__1248__auto___1886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto___1886,out_chan){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto___1886,out_chan){
return (function (state_1869){
var state_val_1870 = (state_1869[(1)]);
if((state_val_1870 === (1))){
var state_1869__$1 = state_1869;
var statearr_1871_1887 = state_1869__$1;
(statearr_1871_1887[(2)] = null);

(statearr_1871_1887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1870 === (2))){
var state_1869__$1 = state_1869;
var statearr_1872_1888 = state_1869__$1;
(statearr_1872_1888[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1870 === (3))){
var inst_1867 = (state_1869[(2)]);
var state_1869__$1 = state_1869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1869__$1,inst_1867);
} else {
if((state_val_1870 === (4))){
var state_1869__$1 = state_1869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1869__$1,(7),in_chan);
} else {
if((state_val_1870 === (5))){
var state_1869__$1 = state_1869;
var statearr_1874_1889 = state_1869__$1;
(statearr_1874_1889[(2)] = null);

(statearr_1874_1889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1870 === (6))){
var inst_1865 = (state_1869[(2)]);
var state_1869__$1 = state_1869;
var statearr_1875_1890 = state_1869__$1;
(statearr_1875_1890[(2)] = inst_1865);

(statearr_1875_1890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1870 === (7))){
var inst_1854 = (state_1869[(7)]);
var inst_1854__$1 = (state_1869[(2)]);
var inst_1855 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_1854__$1);
var inst_1856 = guardian_alerts.core.fetch_page.call(null,inst_1855);
var state_1869__$1 = (function (){var statearr_1876 = state_1869;
(statearr_1876[(7)] = inst_1854__$1);

return statearr_1876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1869__$1,(8),inst_1856);
} else {
if((state_val_1870 === (8))){
var inst_1854 = (state_1869[(7)]);
var inst_1858 = (state_1869[(2)]);
var inst_1859 = guardian_alerts.core.parse_article.call(null,inst_1858);
var inst_1860 = cljs.core.merge.call(null,inst_1854,inst_1859);
var inst_1861 = cljs.core.async.put_BANG_.call(null,out_chan,inst_1860);
var state_1869__$1 = (function (){var statearr_1877 = state_1869;
(statearr_1877[(8)] = inst_1861);

return statearr_1877;
})();
var statearr_1878_1891 = state_1869__$1;
(statearr_1878_1891[(2)] = null);

(statearr_1878_1891[(1)] = (2));


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
});})(c__1248__auto___1886,out_chan))
;
return ((function (switch__1227__auto__,c__1248__auto___1886,out_chan){
return (function() {
var guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = null;
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____0 = (function (){
var statearr_1882 = [null,null,null,null,null,null,null,null,null];
(statearr_1882[(0)] = guardian_alerts$core$full_articles_$_state_machine__1228__auto__);

(statearr_1882[(1)] = (1));

return statearr_1882;
});
var guardian_alerts$core$full_articles_$_state_machine__1228__auto____1 = (function (state_1869){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1883){if((e1883 instanceof Object)){
var ex__1231__auto__ = e1883;
var statearr_1884_1892 = state_1869;
(statearr_1884_1892[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1893 = state_1869;
state_1869 = G__1893;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$full_articles_$_state_machine__1228__auto__ = function(state_1869){
switch(arguments.length){
case 0:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$full_articles_$_state_machine__1228__auto____1.call(this,state_1869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____0;
guardian_alerts$core$full_articles_$_state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$full_articles_$_state_machine__1228__auto____1;
return guardian_alerts$core$full_articles_$_state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto___1886,out_chan))
})();
var state__1250__auto__ = (function (){var statearr_1885 = f__1249__auto__.call(null);
(statearr_1885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto___1886);

return statearr_1885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto___1886,out_chan))
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
var len__3300__auto___1924 = arguments.length;
var i__3301__auto___1925 = (0);
while(true){
if((i__3301__auto___1925 < len__3300__auto___1924)){
args__3303__auto__.push((arguments[i__3301__auto___1925]));

var G__1926 = (i__3301__auto___1925 + (1));
i__3301__auto___1925 = G__1926;
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
var out_chan = guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.core.full_articles.call(null,guardian_alerts.pipeline.cond_BAR_.call(null,guardian_alerts.pipeline._BAR_.call(null,guardian_alerts.pipeline.seq_BAR_.call(null,guardian_alerts.core.pipelined_fetch_page.call(null,guardian_alerts.core.migrate.call(null,db),rss_url),guardian_alerts.core.rss_items),guardian_alerts.core.parse_rss_item),((function (config,db,rss_url,upsert_row){
return (function (p1__1894_SHARP_){
return guardian_alerts.text.keyword_match.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(p1__1894_SHARP_));
});})(config,db,rss_url,upsert_row))
)),upsert_row);
var c__1248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (){
var f__1249__auto__ = (function (){var switch__1227__auto__ = ((function (c__1248__auto__,out_chan,config,db,rss_url,upsert_row){
return (function (state_1908){
var state_val_1909 = (state_1908[(1)]);
if((state_val_1909 === (1))){
var state_1908__$1 = state_1908;
var statearr_1910_1927 = state_1908__$1;
(statearr_1910_1927[(2)] = null);

(statearr_1910_1927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1909 === (2))){
var state_1908__$1 = state_1908;
var statearr_1911_1928 = state_1908__$1;
(statearr_1911_1928[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1909 === (3))){
var inst_1906 = (state_1908[(2)]);
var state_1908__$1 = state_1908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1908__$1,inst_1906);
} else {
if((state_val_1909 === (4))){
var state_1908__$1 = state_1908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1908__$1,(7),out_chan);
} else {
if((state_val_1909 === (5))){
var state_1908__$1 = state_1908;
var statearr_1913_1929 = state_1908__$1;
(statearr_1913_1929[(2)] = null);

(statearr_1913_1929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1909 === (6))){
var inst_1904 = (state_1908[(2)]);
var state_1908__$1 = state_1908;
var statearr_1914_1930 = state_1908__$1;
(statearr_1914_1930[(2)] = inst_1904);

(statearr_1914_1930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1909 === (7))){
var inst_1899 = (state_1908[(2)]);
var inst_1900 = cljs.core.println.call(null,inst_1899);
var state_1908__$1 = (function (){var statearr_1915 = state_1908;
(statearr_1915[(7)] = inst_1900);

return statearr_1915;
})();
var statearr_1916_1931 = state_1908__$1;
(statearr_1916_1931[(2)] = null);

(statearr_1916_1931[(1)] = (2));


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
var statearr_1920 = [null,null,null,null,null,null,null,null];
(statearr_1920[(0)] = guardian_alerts$core$state_machine__1228__auto__);

(statearr_1920[(1)] = (1));

return statearr_1920;
});
var guardian_alerts$core$state_machine__1228__auto____1 = (function (state_1908){
while(true){
var ret_value__1229__auto__ = (function (){try{while(true){
var result__1230__auto__ = switch__1227__auto__.call(null,state_1908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1230__auto__;
}
break;
}
}catch (e1921){if((e1921 instanceof Object)){
var ex__1231__auto__ = e1921;
var statearr_1922_1932 = state_1908;
(statearr_1922_1932[(5)] = ex__1231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1933 = state_1908;
state_1908 = G__1933;
continue;
} else {
return ret_value__1229__auto__;
}
break;
}
});
guardian_alerts$core$state_machine__1228__auto__ = function(state_1908){
switch(arguments.length){
case 0:
return guardian_alerts$core$state_machine__1228__auto____0.call(this);
case 1:
return guardian_alerts$core$state_machine__1228__auto____1.call(this,state_1908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$0 = guardian_alerts$core$state_machine__1228__auto____0;
guardian_alerts$core$state_machine__1228__auto__.cljs$core$IFn$_invoke$arity$1 = guardian_alerts$core$state_machine__1228__auto____1;
return guardian_alerts$core$state_machine__1228__auto__;
})()
;})(switch__1227__auto__,c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
})();
var state__1250__auto__ = (function (){var statearr_1923 = f__1249__auto__.call(null);
(statearr_1923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1248__auto__);

return statearr_1923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1250__auto__);
});})(c__1248__auto__,out_chan,config,db,rss_url,upsert_row))
);

return c__1248__auto__;
});

guardian_alerts.core._main.cljs$lang$maxFixedArity = (0);

guardian_alerts.core._main.cljs$lang$applyTo = (function (seq1895){
return guardian_alerts.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1895));
});
cljs.core._STAR_main_cli_fn_STAR_ = guardian_alerts.core._main;

//# sourceMappingURL=core.js.map