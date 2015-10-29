goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1373__i = 0, G__1373__a = new Array(arguments.length -  0);
while (G__1373__i < G__1373__a.length) {G__1373__a[G__1373__i] = arguments[G__1373__i + 0]; ++G__1373__i;}
  args = new cljs.core.IndexedSeq(G__1373__a,0);
} 
return G__1372__delegate.call(this,args);};
G__1372.cljs$lang$maxFixedArity = 0;
G__1372.cljs$lang$applyTo = (function (arglist__1374){
var args = cljs.core.seq(arglist__1374);
return G__1372__delegate(args);
});
G__1372.cljs$core$IFn$_invoke$arity$variadic = G__1372__delegate;
return G__1372;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1376__i = 0, G__1376__a = new Array(arguments.length -  0);
while (G__1376__i < G__1376__a.length) {G__1376__a[G__1376__i] = arguments[G__1376__i + 0]; ++G__1376__i;}
  args = new cljs.core.IndexedSeq(G__1376__a,0);
} 
return G__1375__delegate.call(this,args);};
G__1375.cljs$lang$maxFixedArity = 0;
G__1375.cljs$lang$applyTo = (function (arglist__1377){
var args = cljs.core.seq(arglist__1377);
return G__1375__delegate(args);
});
G__1375.cljs$core$IFn$_invoke$arity$variadic = G__1375__delegate;
return G__1375;
})()
;

return null;
});
