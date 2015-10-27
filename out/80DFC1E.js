goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1421__i = 0, G__1421__a = new Array(arguments.length -  0);
while (G__1421__i < G__1421__a.length) {G__1421__a[G__1421__i] = arguments[G__1421__i + 0]; ++G__1421__i;}
  args = new cljs.core.IndexedSeq(G__1421__a,0);
} 
return G__1420__delegate.call(this,args);};
G__1420.cljs$lang$maxFixedArity = 0;
G__1420.cljs$lang$applyTo = (function (arglist__1422){
var args = cljs.core.seq(arglist__1422);
return G__1420__delegate(args);
});
G__1420.cljs$core$IFn$_invoke$arity$variadic = G__1420__delegate;
return G__1420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1424__i = 0, G__1424__a = new Array(arguments.length -  0);
while (G__1424__i < G__1424__a.length) {G__1424__a[G__1424__i] = arguments[G__1424__i + 0]; ++G__1424__i;}
  args = new cljs.core.IndexedSeq(G__1424__a,0);
} 
return G__1423__delegate.call(this,args);};
G__1423.cljs$lang$maxFixedArity = 0;
G__1423.cljs$lang$applyTo = (function (arglist__1425){
var args = cljs.core.seq(arglist__1425);
return G__1423__delegate(args);
});
G__1423.cljs$core$IFn$_invoke$arity$variadic = G__1423__delegate;
return G__1423;
})()
;

return null;
});
