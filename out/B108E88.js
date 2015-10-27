goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1405__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1406__i = 0, G__1406__a = new Array(arguments.length -  0);
while (G__1406__i < G__1406__a.length) {G__1406__a[G__1406__i] = arguments[G__1406__i + 0]; ++G__1406__i;}
  args = new cljs.core.IndexedSeq(G__1406__a,0);
} 
return G__1405__delegate.call(this,args);};
G__1405.cljs$lang$maxFixedArity = 0;
G__1405.cljs$lang$applyTo = (function (arglist__1407){
var args = cljs.core.seq(arglist__1407);
return G__1405__delegate(args);
});
G__1405.cljs$core$IFn$_invoke$arity$variadic = G__1405__delegate;
return G__1405;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1408__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1409__i = 0, G__1409__a = new Array(arguments.length -  0);
while (G__1409__i < G__1409__a.length) {G__1409__a[G__1409__i] = arguments[G__1409__i + 0]; ++G__1409__i;}
  args = new cljs.core.IndexedSeq(G__1409__a,0);
} 
return G__1408__delegate.call(this,args);};
G__1408.cljs$lang$maxFixedArity = 0;
G__1408.cljs$lang$applyTo = (function (arglist__1410){
var args = cljs.core.seq(arglist__1410);
return G__1408__delegate(args);
});
G__1408.cljs$core$IFn$_invoke$arity$variadic = G__1408__delegate;
return G__1408;
})()
;

return null;
});
