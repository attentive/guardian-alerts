// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1460__i = 0, G__1460__a = new Array(arguments.length -  0);
while (G__1460__i < G__1460__a.length) {G__1460__a[G__1460__i] = arguments[G__1460__i + 0]; ++G__1460__i;}
  args = new cljs.core.IndexedSeq(G__1460__a,0);
} 
return G__1459__delegate.call(this,args);};
G__1459.cljs$lang$maxFixedArity = 0;
G__1459.cljs$lang$applyTo = (function (arglist__1461){
var args = cljs.core.seq(arglist__1461);
return G__1459__delegate(args);
});
G__1459.cljs$core$IFn$_invoke$arity$variadic = G__1459__delegate;
return G__1459;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map