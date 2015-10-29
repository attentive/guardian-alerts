goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1405__i = 0, G__1405__a = new Array(arguments.length -  0);
while (G__1405__i < G__1405__a.length) {G__1405__a[G__1405__i] = arguments[G__1405__i + 0]; ++G__1405__i;}
  args = new cljs.core.IndexedSeq(G__1405__a,0);
} 
return G__1404__delegate.call(this,args);};
G__1404.cljs$lang$maxFixedArity = 0;
G__1404.cljs$lang$applyTo = (function (arglist__1406){
var args = cljs.core.seq(arglist__1406);
return G__1404__delegate(args);
});
G__1404.cljs$core$IFn$_invoke$arity$variadic = G__1404__delegate;
return G__1404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1408__i = 0, G__1408__a = new Array(arguments.length -  0);
while (G__1408__i < G__1408__a.length) {G__1408__a[G__1408__i] = arguments[G__1408__i + 0]; ++G__1408__i;}
  args = new cljs.core.IndexedSeq(G__1408__a,0);
} 
return G__1407__delegate.call(this,args);};
G__1407.cljs$lang$maxFixedArity = 0;
G__1407.cljs$lang$applyTo = (function (arglist__1409){
var args = cljs.core.seq(arglist__1409);
return G__1407__delegate(args);
});
G__1407.cljs$core$IFn$_invoke$arity$variadic = G__1407__delegate;
return G__1407;
})()
;

return null;
});
