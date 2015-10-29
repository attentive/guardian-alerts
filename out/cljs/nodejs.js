// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1456__i = 0, G__1456__a = new Array(arguments.length -  0);
while (G__1456__i < G__1456__a.length) {G__1456__a[G__1456__i] = arguments[G__1456__i + 0]; ++G__1456__i;}
  args = new cljs.core.IndexedSeq(G__1456__a,0);
} 
return G__1455__delegate.call(this,args);};
G__1455.cljs$lang$maxFixedArity = 0;
G__1455.cljs$lang$applyTo = (function (arglist__1457){
var args = cljs.core.seq(arglist__1457);
return G__1455__delegate(args);
});
G__1455.cljs$core$IFn$_invoke$arity$variadic = G__1455__delegate;
return G__1455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1459__i = 0, G__1459__a = new Array(arguments.length -  0);
while (G__1459__i < G__1459__a.length) {G__1459__a[G__1459__i] = arguments[G__1459__i + 0]; ++G__1459__i;}
  args = new cljs.core.IndexedSeq(G__1459__a,0);
} 
return G__1458__delegate.call(this,args);};
G__1458.cljs$lang$maxFixedArity = 0;
G__1458.cljs$lang$applyTo = (function (arglist__1460){
var args = cljs.core.seq(arglist__1460);
return G__1458__delegate(args);
});
G__1458.cljs$core$IFn$_invoke$arity$variadic = G__1458__delegate;
return G__1458;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map