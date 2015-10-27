goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1398__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1399__i = 0, G__1399__a = new Array(arguments.length -  0);
while (G__1399__i < G__1399__a.length) {G__1399__a[G__1399__i] = arguments[G__1399__i + 0]; ++G__1399__i;}
  args = new cljs.core.IndexedSeq(G__1399__a,0);
} 
return G__1398__delegate.call(this,args);};
G__1398.cljs$lang$maxFixedArity = 0;
G__1398.cljs$lang$applyTo = (function (arglist__1400){
var args = cljs.core.seq(arglist__1400);
return G__1398__delegate(args);
});
G__1398.cljs$core$IFn$_invoke$arity$variadic = G__1398__delegate;
return G__1398;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1401__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1402__i = 0, G__1402__a = new Array(arguments.length -  0);
while (G__1402__i < G__1402__a.length) {G__1402__a[G__1402__i] = arguments[G__1402__i + 0]; ++G__1402__i;}
  args = new cljs.core.IndexedSeq(G__1402__a,0);
} 
return G__1401__delegate.call(this,args);};
G__1401.cljs$lang$maxFixedArity = 0;
G__1401.cljs$lang$applyTo = (function (arglist__1403){
var args = cljs.core.seq(arglist__1403);
return G__1401__delegate(args);
});
G__1401.cljs$core$IFn$_invoke$arity$variadic = G__1401__delegate;
return G__1401;
})()
;

return null;
});
