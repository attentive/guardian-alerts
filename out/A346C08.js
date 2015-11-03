goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1387__i = 0, G__1387__a = new Array(arguments.length -  0);
while (G__1387__i < G__1387__a.length) {G__1387__a[G__1387__i] = arguments[G__1387__i + 0]; ++G__1387__i;}
  args = new cljs.core.IndexedSeq(G__1387__a,0);
} 
return G__1386__delegate.call(this,args);};
G__1386.cljs$lang$maxFixedArity = 0;
G__1386.cljs$lang$applyTo = (function (arglist__1388){
var args = cljs.core.seq(arglist__1388);
return G__1386__delegate(args);
});
G__1386.cljs$core$IFn$_invoke$arity$variadic = G__1386__delegate;
return G__1386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1390__i = 0, G__1390__a = new Array(arguments.length -  0);
while (G__1390__i < G__1390__a.length) {G__1390__a[G__1390__i] = arguments[G__1390__i + 0]; ++G__1390__i;}
  args = new cljs.core.IndexedSeq(G__1390__a,0);
} 
return G__1389__delegate.call(this,args);};
G__1389.cljs$lang$maxFixedArity = 0;
G__1389.cljs$lang$applyTo = (function (arglist__1391){
var args = cljs.core.seq(arglist__1391);
return G__1389__delegate(args);
});
G__1389.cljs$core$IFn$_invoke$arity$variadic = G__1389__delegate;
return G__1389;
})()
;

return null;
});
