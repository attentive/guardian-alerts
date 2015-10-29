goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1903__i = 0, G__1903__a = new Array(arguments.length -  0);
while (G__1903__i < G__1903__a.length) {G__1903__a[G__1903__i] = arguments[G__1903__i + 0]; ++G__1903__i;}
  args = new cljs.core.IndexedSeq(G__1903__a,0);
} 
return G__1902__delegate.call(this,args);};
G__1902.cljs$lang$maxFixedArity = 0;
G__1902.cljs$lang$applyTo = (function (arglist__1904){
var args = cljs.core.seq(arglist__1904);
return G__1902__delegate(args);
});
G__1902.cljs$core$IFn$_invoke$arity$variadic = G__1902__delegate;
return G__1902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1906__i = 0, G__1906__a = new Array(arguments.length -  0);
while (G__1906__i < G__1906__a.length) {G__1906__a[G__1906__i] = arguments[G__1906__i + 0]; ++G__1906__i;}
  args = new cljs.core.IndexedSeq(G__1906__a,0);
} 
return G__1905__delegate.call(this,args);};
G__1905.cljs$lang$maxFixedArity = 0;
G__1905.cljs$lang$applyTo = (function (arglist__1907){
var args = cljs.core.seq(arglist__1907);
return G__1905__delegate(args);
});
G__1905.cljs$core$IFn$_invoke$arity$variadic = G__1905__delegate;
return G__1905;
})()
;

return null;
});
