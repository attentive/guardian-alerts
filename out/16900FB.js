goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1937__i = 0, G__1937__a = new Array(arguments.length -  0);
while (G__1937__i < G__1937__a.length) {G__1937__a[G__1937__i] = arguments[G__1937__i + 0]; ++G__1937__i;}
  args = new cljs.core.IndexedSeq(G__1937__a,0);
} 
return G__1936__delegate.call(this,args);};
G__1936.cljs$lang$maxFixedArity = 0;
G__1936.cljs$lang$applyTo = (function (arglist__1938){
var args = cljs.core.seq(arglist__1938);
return G__1936__delegate(args);
});
G__1936.cljs$core$IFn$_invoke$arity$variadic = G__1936__delegate;
return G__1936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1940__i = 0, G__1940__a = new Array(arguments.length -  0);
while (G__1940__i < G__1940__a.length) {G__1940__a[G__1940__i] = arguments[G__1940__i + 0]; ++G__1940__i;}
  args = new cljs.core.IndexedSeq(G__1940__a,0);
} 
return G__1939__delegate.call(this,args);};
G__1939.cljs$lang$maxFixedArity = 0;
G__1939.cljs$lang$applyTo = (function (arglist__1941){
var args = cljs.core.seq(arglist__1941);
return G__1939__delegate(args);
});
G__1939.cljs$core$IFn$_invoke$arity$variadic = G__1939__delegate;
return G__1939;
})()
;

return null;
});
