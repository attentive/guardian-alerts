goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1452__i = 0, G__1452__a = new Array(arguments.length -  0);
while (G__1452__i < G__1452__a.length) {G__1452__a[G__1452__i] = arguments[G__1452__i + 0]; ++G__1452__i;}
  args = new cljs.core.IndexedSeq(G__1452__a,0);
} 
return G__1451__delegate.call(this,args);};
G__1451.cljs$lang$maxFixedArity = 0;
G__1451.cljs$lang$applyTo = (function (arglist__1453){
var args = cljs.core.seq(arglist__1453);
return G__1451__delegate(args);
});
G__1451.cljs$core$IFn$_invoke$arity$variadic = G__1451__delegate;
return G__1451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1455__i = 0, G__1455__a = new Array(arguments.length -  0);
while (G__1455__i < G__1455__a.length) {G__1455__a[G__1455__i] = arguments[G__1455__i + 0]; ++G__1455__i;}
  args = new cljs.core.IndexedSeq(G__1455__a,0);
} 
return G__1454__delegate.call(this,args);};
G__1454.cljs$lang$maxFixedArity = 0;
G__1454.cljs$lang$applyTo = (function (arglist__1456){
var args = cljs.core.seq(arglist__1456);
return G__1454__delegate(args);
});
G__1454.cljs$core$IFn$_invoke$arity$variadic = G__1454__delegate;
return G__1454;
})()
;

return null;
});
