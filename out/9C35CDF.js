goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1488__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1489__i = 0, G__1489__a = new Array(arguments.length -  0);
while (G__1489__i < G__1489__a.length) {G__1489__a[G__1489__i] = arguments[G__1489__i + 0]; ++G__1489__i;}
  args = new cljs.core.IndexedSeq(G__1489__a,0);
} 
return G__1488__delegate.call(this,args);};
G__1488.cljs$lang$maxFixedArity = 0;
G__1488.cljs$lang$applyTo = (function (arglist__1490){
var args = cljs.core.seq(arglist__1490);
return G__1488__delegate(args);
});
G__1488.cljs$core$IFn$_invoke$arity$variadic = G__1488__delegate;
return G__1488;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1491__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1492__i = 0, G__1492__a = new Array(arguments.length -  0);
while (G__1492__i < G__1492__a.length) {G__1492__a[G__1492__i] = arguments[G__1492__i + 0]; ++G__1492__i;}
  args = new cljs.core.IndexedSeq(G__1492__a,0);
} 
return G__1491__delegate.call(this,args);};
G__1491.cljs$lang$maxFixedArity = 0;
G__1491.cljs$lang$applyTo = (function (arglist__1493){
var args = cljs.core.seq(arglist__1493);
return G__1491__delegate(args);
});
G__1491.cljs$core$IFn$_invoke$arity$variadic = G__1491__delegate;
return G__1491;
})()
;

return null;
});
