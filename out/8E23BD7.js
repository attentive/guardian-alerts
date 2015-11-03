goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1377__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1378__i = 0, G__1378__a = new Array(arguments.length -  0);
while (G__1378__i < G__1378__a.length) {G__1378__a[G__1378__i] = arguments[G__1378__i + 0]; ++G__1378__i;}
  args = new cljs.core.IndexedSeq(G__1378__a,0);
} 
return G__1377__delegate.call(this,args);};
G__1377.cljs$lang$maxFixedArity = 0;
G__1377.cljs$lang$applyTo = (function (arglist__1379){
var args = cljs.core.seq(arglist__1379);
return G__1377__delegate(args);
});
G__1377.cljs$core$IFn$_invoke$arity$variadic = G__1377__delegate;
return G__1377;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1380__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1381__i = 0, G__1381__a = new Array(arguments.length -  0);
while (G__1381__i < G__1381__a.length) {G__1381__a[G__1381__i] = arguments[G__1381__i + 0]; ++G__1381__i;}
  args = new cljs.core.IndexedSeq(G__1381__a,0);
} 
return G__1380__delegate.call(this,args);};
G__1380.cljs$lang$maxFixedArity = 0;
G__1380.cljs$lang$applyTo = (function (arglist__1382){
var args = cljs.core.seq(arglist__1382);
return G__1380__delegate(args);
});
G__1380.cljs$core$IFn$_invoke$arity$variadic = G__1380__delegate;
return G__1380;
})()
;

return null;
});
