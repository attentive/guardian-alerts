goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1380__i = 0, G__1380__a = new Array(arguments.length -  0);
while (G__1380__i < G__1380__a.length) {G__1380__a[G__1380__i] = arguments[G__1380__i + 0]; ++G__1380__i;}
  args = new cljs.core.IndexedSeq(G__1380__a,0);
} 
return G__1379__delegate.call(this,args);};
G__1379.cljs$lang$maxFixedArity = 0;
G__1379.cljs$lang$applyTo = (function (arglist__1381){
var args = cljs.core.seq(arglist__1381);
return G__1379__delegate(args);
});
G__1379.cljs$core$IFn$_invoke$arity$variadic = G__1379__delegate;
return G__1379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1383__i = 0, G__1383__a = new Array(arguments.length -  0);
while (G__1383__i < G__1383__a.length) {G__1383__a[G__1383__i] = arguments[G__1383__i + 0]; ++G__1383__i;}
  args = new cljs.core.IndexedSeq(G__1383__a,0);
} 
return G__1382__delegate.call(this,args);};
G__1382.cljs$lang$maxFixedArity = 0;
G__1382.cljs$lang$applyTo = (function (arglist__1384){
var args = cljs.core.seq(arglist__1384);
return G__1382__delegate(args);
});
G__1382.cljs$core$IFn$_invoke$arity$variadic = G__1382__delegate;
return G__1382;
})()
;

return null;
});
