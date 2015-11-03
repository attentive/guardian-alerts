goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1330__i = 0, G__1330__a = new Array(arguments.length -  0);
while (G__1330__i < G__1330__a.length) {G__1330__a[G__1330__i] = arguments[G__1330__i + 0]; ++G__1330__i;}
  args = new cljs.core.IndexedSeq(G__1330__a,0);
} 
return G__1329__delegate.call(this,args);};
G__1329.cljs$lang$maxFixedArity = 0;
G__1329.cljs$lang$applyTo = (function (arglist__1331){
var args = cljs.core.seq(arglist__1331);
return G__1329__delegate(args);
});
G__1329.cljs$core$IFn$_invoke$arity$variadic = G__1329__delegate;
return G__1329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1333__i = 0, G__1333__a = new Array(arguments.length -  0);
while (G__1333__i < G__1333__a.length) {G__1333__a[G__1333__i] = arguments[G__1333__i + 0]; ++G__1333__i;}
  args = new cljs.core.IndexedSeq(G__1333__a,0);
} 
return G__1332__delegate.call(this,args);};
G__1332.cljs$lang$maxFixedArity = 0;
G__1332.cljs$lang$applyTo = (function (arglist__1334){
var args = cljs.core.seq(arglist__1334);
return G__1332__delegate(args);
});
G__1332.cljs$core$IFn$_invoke$arity$variadic = G__1332__delegate;
return G__1332;
})()
;

return null;
});
