goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1956__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1957__i = 0, G__1957__a = new Array(arguments.length -  0);
while (G__1957__i < G__1957__a.length) {G__1957__a[G__1957__i] = arguments[G__1957__i + 0]; ++G__1957__i;}
  args = new cljs.core.IndexedSeq(G__1957__a,0);
} 
return G__1956__delegate.call(this,args);};
G__1956.cljs$lang$maxFixedArity = 0;
G__1956.cljs$lang$applyTo = (function (arglist__1958){
var args = cljs.core.seq(arglist__1958);
return G__1956__delegate(args);
});
G__1956.cljs$core$IFn$_invoke$arity$variadic = G__1956__delegate;
return G__1956;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1959__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1960__i = 0, G__1960__a = new Array(arguments.length -  0);
while (G__1960__i < G__1960__a.length) {G__1960__a[G__1960__i] = arguments[G__1960__i + 0]; ++G__1960__i;}
  args = new cljs.core.IndexedSeq(G__1960__a,0);
} 
return G__1959__delegate.call(this,args);};
G__1959.cljs$lang$maxFixedArity = 0;
G__1959.cljs$lang$applyTo = (function (arglist__1961){
var args = cljs.core.seq(arglist__1961);
return G__1959__delegate(args);
});
G__1959.cljs$core$IFn$_invoke$arity$variadic = G__1959__delegate;
return G__1959;
})()
;

return null;
});
