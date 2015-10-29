goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1479__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1480__i = 0, G__1480__a = new Array(arguments.length -  0);
while (G__1480__i < G__1480__a.length) {G__1480__a[G__1480__i] = arguments[G__1480__i + 0]; ++G__1480__i;}
  args = new cljs.core.IndexedSeq(G__1480__a,0);
} 
return G__1479__delegate.call(this,args);};
G__1479.cljs$lang$maxFixedArity = 0;
G__1479.cljs$lang$applyTo = (function (arglist__1481){
var args = cljs.core.seq(arglist__1481);
return G__1479__delegate(args);
});
G__1479.cljs$core$IFn$_invoke$arity$variadic = G__1479__delegate;
return G__1479;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1482__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1483__i = 0, G__1483__a = new Array(arguments.length -  0);
while (G__1483__i < G__1483__a.length) {G__1483__a[G__1483__i] = arguments[G__1483__i + 0]; ++G__1483__i;}
  args = new cljs.core.IndexedSeq(G__1483__a,0);
} 
return G__1482__delegate.call(this,args);};
G__1482.cljs$lang$maxFixedArity = 0;
G__1482.cljs$lang$applyTo = (function (arglist__1484){
var args = cljs.core.seq(arglist__1484);
return G__1482__delegate(args);
});
G__1482.cljs$core$IFn$_invoke$arity$variadic = G__1482__delegate;
return G__1482;
})()
;

return null;
});
