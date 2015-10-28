goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1866__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1867__i = 0, G__1867__a = new Array(arguments.length -  0);
while (G__1867__i < G__1867__a.length) {G__1867__a[G__1867__i] = arguments[G__1867__i + 0]; ++G__1867__i;}
  args = new cljs.core.IndexedSeq(G__1867__a,0);
} 
return G__1866__delegate.call(this,args);};
G__1866.cljs$lang$maxFixedArity = 0;
G__1866.cljs$lang$applyTo = (function (arglist__1868){
var args = cljs.core.seq(arglist__1868);
return G__1866__delegate(args);
});
G__1866.cljs$core$IFn$_invoke$arity$variadic = G__1866__delegate;
return G__1866;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1869__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1870__i = 0, G__1870__a = new Array(arguments.length -  0);
while (G__1870__i < G__1870__a.length) {G__1870__a[G__1870__i] = arguments[G__1870__i + 0]; ++G__1870__i;}
  args = new cljs.core.IndexedSeq(G__1870__a,0);
} 
return G__1869__delegate.call(this,args);};
G__1869.cljs$lang$maxFixedArity = 0;
G__1869.cljs$lang$applyTo = (function (arglist__1871){
var args = cljs.core.seq(arglist__1871);
return G__1869__delegate(args);
});
G__1869.cljs$core$IFn$_invoke$arity$variadic = G__1869__delegate;
return G__1869;
})()
;

return null;
});
