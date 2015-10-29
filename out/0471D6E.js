goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1494__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1495__i = 0, G__1495__a = new Array(arguments.length -  0);
while (G__1495__i < G__1495__a.length) {G__1495__a[G__1495__i] = arguments[G__1495__i + 0]; ++G__1495__i;}
  args = new cljs.core.IndexedSeq(G__1495__a,0);
} 
return G__1494__delegate.call(this,args);};
G__1494.cljs$lang$maxFixedArity = 0;
G__1494.cljs$lang$applyTo = (function (arglist__1496){
var args = cljs.core.seq(arglist__1496);
return G__1494__delegate(args);
});
G__1494.cljs$core$IFn$_invoke$arity$variadic = G__1494__delegate;
return G__1494;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1497__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1498__i = 0, G__1498__a = new Array(arguments.length -  0);
while (G__1498__i < G__1498__a.length) {G__1498__a[G__1498__i] = arguments[G__1498__i + 0]; ++G__1498__i;}
  args = new cljs.core.IndexedSeq(G__1498__a,0);
} 
return G__1497__delegate.call(this,args);};
G__1497.cljs$lang$maxFixedArity = 0;
G__1497.cljs$lang$applyTo = (function (arglist__1499){
var args = cljs.core.seq(arglist__1499);
return G__1497__delegate(args);
});
G__1497.cljs$core$IFn$_invoke$arity$variadic = G__1497__delegate;
return G__1497;
})()
;

return null;
});
