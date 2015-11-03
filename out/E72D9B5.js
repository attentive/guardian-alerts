goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3760__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3761__i = 0, G__3761__a = new Array(arguments.length -  0);
while (G__3761__i < G__3761__a.length) {G__3761__a[G__3761__i] = arguments[G__3761__i + 0]; ++G__3761__i;}
  args = new cljs.core.IndexedSeq(G__3761__a,0);
} 
return G__3760__delegate.call(this,args);};
G__3760.cljs$lang$maxFixedArity = 0;
G__3760.cljs$lang$applyTo = (function (arglist__3762){
var args = cljs.core.seq(arglist__3762);
return G__3760__delegate(args);
});
G__3760.cljs$core$IFn$_invoke$arity$variadic = G__3760__delegate;
return G__3760;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3763__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3764__i = 0, G__3764__a = new Array(arguments.length -  0);
while (G__3764__i < G__3764__a.length) {G__3764__a[G__3764__i] = arguments[G__3764__i + 0]; ++G__3764__i;}
  args = new cljs.core.IndexedSeq(G__3764__a,0);
} 
return G__3763__delegate.call(this,args);};
G__3763.cljs$lang$maxFixedArity = 0;
G__3763.cljs$lang$applyTo = (function (arglist__3765){
var args = cljs.core.seq(arglist__3765);
return G__3763__delegate(args);
});
G__3763.cljs$core$IFn$_invoke$arity$variadic = G__3763__delegate;
return G__3763;
})()
;

return null;
});
