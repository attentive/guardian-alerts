goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1429__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1430__i = 0, G__1430__a = new Array(arguments.length -  0);
while (G__1430__i < G__1430__a.length) {G__1430__a[G__1430__i] = arguments[G__1430__i + 0]; ++G__1430__i;}
  args = new cljs.core.IndexedSeq(G__1430__a,0);
} 
return G__1429__delegate.call(this,args);};
G__1429.cljs$lang$maxFixedArity = 0;
G__1429.cljs$lang$applyTo = (function (arglist__1431){
var args = cljs.core.seq(arglist__1431);
return G__1429__delegate(args);
});
G__1429.cljs$core$IFn$_invoke$arity$variadic = G__1429__delegate;
return G__1429;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1432__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1433__i = 0, G__1433__a = new Array(arguments.length -  0);
while (G__1433__i < G__1433__a.length) {G__1433__a[G__1433__i] = arguments[G__1433__i + 0]; ++G__1433__i;}
  args = new cljs.core.IndexedSeq(G__1433__a,0);
} 
return G__1432__delegate.call(this,args);};
G__1432.cljs$lang$maxFixedArity = 0;
G__1432.cljs$lang$applyTo = (function (arglist__1434){
var args = cljs.core.seq(arglist__1434);
return G__1432__delegate(args);
});
G__1432.cljs$core$IFn$_invoke$arity$variadic = G__1432__delegate;
return G__1432;
})()
;

return null;
});
