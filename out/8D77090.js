goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1464__i = 0, G__1464__a = new Array(arguments.length -  0);
while (G__1464__i < G__1464__a.length) {G__1464__a[G__1464__i] = arguments[G__1464__i + 0]; ++G__1464__i;}
  args = new cljs.core.IndexedSeq(G__1464__a,0);
} 
return G__1463__delegate.call(this,args);};
G__1463.cljs$lang$maxFixedArity = 0;
G__1463.cljs$lang$applyTo = (function (arglist__1465){
var args = cljs.core.seq(arglist__1465);
return G__1463__delegate(args);
});
G__1463.cljs$core$IFn$_invoke$arity$variadic = G__1463__delegate;
return G__1463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1467__i = 0, G__1467__a = new Array(arguments.length -  0);
while (G__1467__i < G__1467__a.length) {G__1467__a[G__1467__i] = arguments[G__1467__i + 0]; ++G__1467__i;}
  args = new cljs.core.IndexedSeq(G__1467__a,0);
} 
return G__1466__delegate.call(this,args);};
G__1466.cljs$lang$maxFixedArity = 0;
G__1466.cljs$lang$applyTo = (function (arglist__1468){
var args = cljs.core.seq(arglist__1468);
return G__1466__delegate(args);
});
G__1466.cljs$core$IFn$_invoke$arity$variadic = G__1466__delegate;
return G__1466;
})()
;

return null;
});
