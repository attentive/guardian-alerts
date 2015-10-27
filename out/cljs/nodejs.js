// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1406__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1407__i = 0, G__1407__a = new Array(arguments.length -  0);
while (G__1407__i < G__1407__a.length) {G__1407__a[G__1407__i] = arguments[G__1407__i + 0]; ++G__1407__i;}
  args = new cljs.core.IndexedSeq(G__1407__a,0);
} 
return G__1406__delegate.call(this,args);};
G__1406.cljs$lang$maxFixedArity = 0;
G__1406.cljs$lang$applyTo = (function (arglist__1408){
var args = cljs.core.seq(arglist__1408);
return G__1406__delegate(args);
});
G__1406.cljs$core$IFn$_invoke$arity$variadic = G__1406__delegate;
return G__1406;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1409__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1410__i = 0, G__1410__a = new Array(arguments.length -  0);
while (G__1410__i < G__1410__a.length) {G__1410__a[G__1410__i] = arguments[G__1410__i + 0]; ++G__1410__i;}
  args = new cljs.core.IndexedSeq(G__1410__a,0);
} 
return G__1409__delegate.call(this,args);};
G__1409.cljs$lang$maxFixedArity = 0;
G__1409.cljs$lang$applyTo = (function (arglist__1411){
var args = cljs.core.seq(arglist__1411);
return G__1409__delegate(args);
});
G__1409.cljs$core$IFn$_invoke$arity$variadic = G__1409__delegate;
return G__1409;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map