goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1378__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1379__i = 0, G__1379__a = new Array(arguments.length -  0);
while (G__1379__i < G__1379__a.length) {G__1379__a[G__1379__i] = arguments[G__1379__i + 0]; ++G__1379__i;}
  args = new cljs.core.IndexedSeq(G__1379__a,0);
} 
return G__1378__delegate.call(this,args);};
G__1378.cljs$lang$maxFixedArity = 0;
G__1378.cljs$lang$applyTo = (function (arglist__1380){
var args = cljs.core.seq(arglist__1380);
return G__1378__delegate(args);
});
G__1378.cljs$core$IFn$_invoke$arity$variadic = G__1378__delegate;
return G__1378;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1381__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1382__i = 0, G__1382__a = new Array(arguments.length -  0);
while (G__1382__i < G__1382__a.length) {G__1382__a[G__1382__i] = arguments[G__1382__i + 0]; ++G__1382__i;}
  args = new cljs.core.IndexedSeq(G__1382__a,0);
} 
return G__1381__delegate.call(this,args);};
G__1381.cljs$lang$maxFixedArity = 0;
G__1381.cljs$lang$applyTo = (function (arglist__1383){
var args = cljs.core.seq(arglist__1383);
return G__1381__delegate(args);
});
G__1381.cljs$core$IFn$_invoke$arity$variadic = G__1381__delegate;
return G__1381;
})()
;

return null;
});
