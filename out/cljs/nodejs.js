// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1497__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1500__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1501__i = 0, G__1501__a = new Array(arguments.length -  0);
while (G__1501__i < G__1501__a.length) {G__1501__a[G__1501__i] = arguments[G__1501__i + 0]; ++G__1501__i;}
  args = new cljs.core.IndexedSeq(G__1501__a,0);
} 
return G__1500__delegate.call(this,args);};
G__1500.cljs$lang$maxFixedArity = 0;
G__1500.cljs$lang$applyTo = (function (arglist__1502){
var args = cljs.core.seq(arglist__1502);
return G__1500__delegate(args);
});
G__1500.cljs$core$IFn$_invoke$arity$variadic = G__1500__delegate;
return G__1500;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map