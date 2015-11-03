goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1428__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1429__i = 0, G__1429__a = new Array(arguments.length -  0);
while (G__1429__i < G__1429__a.length) {G__1429__a[G__1429__i] = arguments[G__1429__i + 0]; ++G__1429__i;}
  args = new cljs.core.IndexedSeq(G__1429__a,0);
} 
return G__1428__delegate.call(this,args);};
G__1428.cljs$lang$maxFixedArity = 0;
G__1428.cljs$lang$applyTo = (function (arglist__1430){
var args = cljs.core.seq(arglist__1430);
return G__1428__delegate(args);
});
G__1428.cljs$core$IFn$_invoke$arity$variadic = G__1428__delegate;
return G__1428;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1431__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1432__i = 0, G__1432__a = new Array(arguments.length -  0);
while (G__1432__i < G__1432__a.length) {G__1432__a[G__1432__i] = arguments[G__1432__i + 0]; ++G__1432__i;}
  args = new cljs.core.IndexedSeq(G__1432__a,0);
} 
return G__1431__delegate.call(this,args);};
G__1431.cljs$lang$maxFixedArity = 0;
G__1431.cljs$lang$applyTo = (function (arglist__1433){
var args = cljs.core.seq(arglist__1433);
return G__1431__delegate(args);
});
G__1431.cljs$core$IFn$_invoke$arity$variadic = G__1431__delegate;
return G__1431;
})()
;

return null;
});
