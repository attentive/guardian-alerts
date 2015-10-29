goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1454__i = 0, G__1454__a = new Array(arguments.length -  0);
while (G__1454__i < G__1454__a.length) {G__1454__a[G__1454__i] = arguments[G__1454__i + 0]; ++G__1454__i;}
  args = new cljs.core.IndexedSeq(G__1454__a,0);
} 
return G__1453__delegate.call(this,args);};
G__1453.cljs$lang$maxFixedArity = 0;
G__1453.cljs$lang$applyTo = (function (arglist__1455){
var args = cljs.core.seq(arglist__1455);
return G__1453__delegate(args);
});
G__1453.cljs$core$IFn$_invoke$arity$variadic = G__1453__delegate;
return G__1453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1457__i = 0, G__1457__a = new Array(arguments.length -  0);
while (G__1457__i < G__1457__a.length) {G__1457__a[G__1457__i] = arguments[G__1457__i + 0]; ++G__1457__i;}
  args = new cljs.core.IndexedSeq(G__1457__a,0);
} 
return G__1456__delegate.call(this,args);};
G__1456.cljs$lang$maxFixedArity = 0;
G__1456.cljs$lang$applyTo = (function (arglist__1458){
var args = cljs.core.seq(arglist__1458);
return G__1456__delegate(args);
});
G__1456.cljs$core$IFn$_invoke$arity$variadic = G__1456__delegate;
return G__1456;
})()
;

return null;
});
