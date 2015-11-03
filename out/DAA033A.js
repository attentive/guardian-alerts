goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1395__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1396__i = 0, G__1396__a = new Array(arguments.length -  0);
while (G__1396__i < G__1396__a.length) {G__1396__a[G__1396__i] = arguments[G__1396__i + 0]; ++G__1396__i;}
  args = new cljs.core.IndexedSeq(G__1396__a,0);
} 
return G__1395__delegate.call(this,args);};
G__1395.cljs$lang$maxFixedArity = 0;
G__1395.cljs$lang$applyTo = (function (arglist__1397){
var args = cljs.core.seq(arglist__1397);
return G__1395__delegate(args);
});
G__1395.cljs$core$IFn$_invoke$arity$variadic = G__1395__delegate;
return G__1395;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1398__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1399__i = 0, G__1399__a = new Array(arguments.length -  0);
while (G__1399__i < G__1399__a.length) {G__1399__a[G__1399__i] = arguments[G__1399__i + 0]; ++G__1399__i;}
  args = new cljs.core.IndexedSeq(G__1399__a,0);
} 
return G__1398__delegate.call(this,args);};
G__1398.cljs$lang$maxFixedArity = 0;
G__1398.cljs$lang$applyTo = (function (arglist__1400){
var args = cljs.core.seq(arglist__1400);
return G__1398__delegate(args);
});
G__1398.cljs$core$IFn$_invoke$arity$variadic = G__1398__delegate;
return G__1398;
})()
;

return null;
});
