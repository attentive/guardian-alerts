goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1932__i = 0, G__1932__a = new Array(arguments.length -  0);
while (G__1932__i < G__1932__a.length) {G__1932__a[G__1932__i] = arguments[G__1932__i + 0]; ++G__1932__i;}
  args = new cljs.core.IndexedSeq(G__1932__a,0);
} 
return G__1931__delegate.call(this,args);};
G__1931.cljs$lang$maxFixedArity = 0;
G__1931.cljs$lang$applyTo = (function (arglist__1933){
var args = cljs.core.seq(arglist__1933);
return G__1931__delegate(args);
});
G__1931.cljs$core$IFn$_invoke$arity$variadic = G__1931__delegate;
return G__1931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1935__i = 0, G__1935__a = new Array(arguments.length -  0);
while (G__1935__i < G__1935__a.length) {G__1935__a[G__1935__i] = arguments[G__1935__i + 0]; ++G__1935__i;}
  args = new cljs.core.IndexedSeq(G__1935__a,0);
} 
return G__1934__delegate.call(this,args);};
G__1934.cljs$lang$maxFixedArity = 0;
G__1934.cljs$lang$applyTo = (function (arglist__1936){
var args = cljs.core.seq(arglist__1936);
return G__1934__delegate(args);
});
G__1934.cljs$core$IFn$_invoke$arity$variadic = G__1934__delegate;
return G__1934;
})()
;

return null;
});
