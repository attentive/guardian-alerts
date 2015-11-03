goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1387__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1388__i = 0, G__1388__a = new Array(arguments.length -  0);
while (G__1388__i < G__1388__a.length) {G__1388__a[G__1388__i] = arguments[G__1388__i + 0]; ++G__1388__i;}
  args = new cljs.core.IndexedSeq(G__1388__a,0);
} 
return G__1387__delegate.call(this,args);};
G__1387.cljs$lang$maxFixedArity = 0;
G__1387.cljs$lang$applyTo = (function (arglist__1389){
var args = cljs.core.seq(arglist__1389);
return G__1387__delegate(args);
});
G__1387.cljs$core$IFn$_invoke$arity$variadic = G__1387__delegate;
return G__1387;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1390__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1391__i = 0, G__1391__a = new Array(arguments.length -  0);
while (G__1391__i < G__1391__a.length) {G__1391__a[G__1391__i] = arguments[G__1391__i + 0]; ++G__1391__i;}
  args = new cljs.core.IndexedSeq(G__1391__a,0);
} 
return G__1390__delegate.call(this,args);};
G__1390.cljs$lang$maxFixedArity = 0;
G__1390.cljs$lang$applyTo = (function (arglist__1392){
var args = cljs.core.seq(arglist__1392);
return G__1390__delegate(args);
});
G__1390.cljs$core$IFn$_invoke$arity$variadic = G__1390__delegate;
return G__1390;
})()
;

return null;
});
