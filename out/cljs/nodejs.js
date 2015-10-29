// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1945__i = 0, G__1945__a = new Array(arguments.length -  0);
while (G__1945__i < G__1945__a.length) {G__1945__a[G__1945__i] = arguments[G__1945__i + 0]; ++G__1945__i;}
  args = new cljs.core.IndexedSeq(G__1945__a,0);
} 
return G__1944__delegate.call(this,args);};
G__1944.cljs$lang$maxFixedArity = 0;
G__1944.cljs$lang$applyTo = (function (arglist__1946){
var args = cljs.core.seq(arglist__1946);
return G__1944__delegate(args);
});
G__1944.cljs$core$IFn$_invoke$arity$variadic = G__1944__delegate;
return G__1944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1948__i = 0, G__1948__a = new Array(arguments.length -  0);
while (G__1948__i < G__1948__a.length) {G__1948__a[G__1948__i] = arguments[G__1948__i + 0]; ++G__1948__i;}
  args = new cljs.core.IndexedSeq(G__1948__a,0);
} 
return G__1947__delegate.call(this,args);};
G__1947.cljs$lang$maxFixedArity = 0;
G__1947.cljs$lang$applyTo = (function (arglist__1949){
var args = cljs.core.seq(arglist__1949);
return G__1947__delegate(args);
});
G__1947.cljs$core$IFn$_invoke$arity$variadic = G__1947__delegate;
return G__1947;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map