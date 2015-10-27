goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1425__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1426__i = 0, G__1426__a = new Array(arguments.length -  0);
while (G__1426__i < G__1426__a.length) {G__1426__a[G__1426__i] = arguments[G__1426__i + 0]; ++G__1426__i;}
  args = new cljs.core.IndexedSeq(G__1426__a,0);
} 
return G__1425__delegate.call(this,args);};
G__1425.cljs$lang$maxFixedArity = 0;
G__1425.cljs$lang$applyTo = (function (arglist__1427){
var args = cljs.core.seq(arglist__1427);
return G__1425__delegate(args);
});
G__1425.cljs$core$IFn$_invoke$arity$variadic = G__1425__delegate;
return G__1425;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1428__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1429__i = 0, G__1429__a = new Array(arguments.length -  0);
while (G__1429__i < G__1429__a.length) {G__1429__a[G__1429__i] = arguments[G__1429__i + 0]; ++G__1429__i;}
  args = new cljs.core.IndexedSeq(G__1429__a,0);
} 
return G__1428__delegate.call(this,args);};
G__1428.cljs$lang$maxFixedArity = 0;
G__1428.cljs$lang$applyTo = (function (arglist__1430){
var args = cljs.core.seq(arglist__1430);
return G__1428__delegate(args);
});
G__1428.cljs$core$IFn$_invoke$arity$variadic = G__1428__delegate;
return G__1428;
})()
;

return null;
});
