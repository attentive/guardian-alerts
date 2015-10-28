goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3747__i = 0, G__3747__a = new Array(arguments.length -  0);
while (G__3747__i < G__3747__a.length) {G__3747__a[G__3747__i] = arguments[G__3747__i + 0]; ++G__3747__i;}
  args = new cljs.core.IndexedSeq(G__3747__a,0);
} 
return G__3746__delegate.call(this,args);};
G__3746.cljs$lang$maxFixedArity = 0;
G__3746.cljs$lang$applyTo = (function (arglist__3748){
var args = cljs.core.seq(arglist__3748);
return G__3746__delegate(args);
});
G__3746.cljs$core$IFn$_invoke$arity$variadic = G__3746__delegate;
return G__3746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3750__i = 0, G__3750__a = new Array(arguments.length -  0);
while (G__3750__i < G__3750__a.length) {G__3750__a[G__3750__i] = arguments[G__3750__i + 0]; ++G__3750__i;}
  args = new cljs.core.IndexedSeq(G__3750__a,0);
} 
return G__3749__delegate.call(this,args);};
G__3749.cljs$lang$maxFixedArity = 0;
G__3749.cljs$lang$applyTo = (function (arglist__3751){
var args = cljs.core.seq(arglist__3751);
return G__3749__delegate(args);
});
G__3749.cljs$core$IFn$_invoke$arity$variadic = G__3749__delegate;
return G__3749;
})()
;

return null;
});
