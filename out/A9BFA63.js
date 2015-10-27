goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1505__i = 0, G__1505__a = new Array(arguments.length -  0);
while (G__1505__i < G__1505__a.length) {G__1505__a[G__1505__i] = arguments[G__1505__i + 0]; ++G__1505__i;}
  args = new cljs.core.IndexedSeq(G__1505__a,0);
} 
return G__1504__delegate.call(this,args);};
G__1504.cljs$lang$maxFixedArity = 0;
G__1504.cljs$lang$applyTo = (function (arglist__1506){
var args = cljs.core.seq(arglist__1506);
return G__1504__delegate(args);
});
G__1504.cljs$core$IFn$_invoke$arity$variadic = G__1504__delegate;
return G__1504;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1508__i = 0, G__1508__a = new Array(arguments.length -  0);
while (G__1508__i < G__1508__a.length) {G__1508__a[G__1508__i] = arguments[G__1508__i + 0]; ++G__1508__i;}
  args = new cljs.core.IndexedSeq(G__1508__a,0);
} 
return G__1507__delegate.call(this,args);};
G__1507.cljs$lang$maxFixedArity = 0;
G__1507.cljs$lang$applyTo = (function (arglist__1509){
var args = cljs.core.seq(arglist__1509);
return G__1507__delegate(args);
});
G__1507.cljs$core$IFn$_invoke$arity$variadic = G__1507__delegate;
return G__1507;
})()
;

return null;
});
