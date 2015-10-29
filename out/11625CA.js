goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1937__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1938__i = 0, G__1938__a = new Array(arguments.length -  0);
while (G__1938__i < G__1938__a.length) {G__1938__a[G__1938__i] = arguments[G__1938__i + 0]; ++G__1938__i;}
  args = new cljs.core.IndexedSeq(G__1938__a,0);
} 
return G__1937__delegate.call(this,args);};
G__1937.cljs$lang$maxFixedArity = 0;
G__1937.cljs$lang$applyTo = (function (arglist__1939){
var args = cljs.core.seq(arglist__1939);
return G__1937__delegate(args);
});
G__1937.cljs$core$IFn$_invoke$arity$variadic = G__1937__delegate;
return G__1937;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1940__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1941__i = 0, G__1941__a = new Array(arguments.length -  0);
while (G__1941__i < G__1941__a.length) {G__1941__a[G__1941__i] = arguments[G__1941__i + 0]; ++G__1941__i;}
  args = new cljs.core.IndexedSeq(G__1941__a,0);
} 
return G__1940__delegate.call(this,args);};
G__1940.cljs$lang$maxFixedArity = 0;
G__1940.cljs$lang$applyTo = (function (arglist__1942){
var args = cljs.core.seq(arglist__1942);
return G__1940__delegate(args);
});
G__1940.cljs$core$IFn$_invoke$arity$variadic = G__1940__delegate;
return G__1940;
})()
;

return null;
});
