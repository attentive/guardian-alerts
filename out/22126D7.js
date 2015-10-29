goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1412__i = 0, G__1412__a = new Array(arguments.length -  0);
while (G__1412__i < G__1412__a.length) {G__1412__a[G__1412__i] = arguments[G__1412__i + 0]; ++G__1412__i;}
  args = new cljs.core.IndexedSeq(G__1412__a,0);
} 
return G__1411__delegate.call(this,args);};
G__1411.cljs$lang$maxFixedArity = 0;
G__1411.cljs$lang$applyTo = (function (arglist__1413){
var args = cljs.core.seq(arglist__1413);
return G__1411__delegate(args);
});
G__1411.cljs$core$IFn$_invoke$arity$variadic = G__1411__delegate;
return G__1411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1415__i = 0, G__1415__a = new Array(arguments.length -  0);
while (G__1415__i < G__1415__a.length) {G__1415__a[G__1415__i] = arguments[G__1415__i + 0]; ++G__1415__i;}
  args = new cljs.core.IndexedSeq(G__1415__a,0);
} 
return G__1414__delegate.call(this,args);};
G__1414.cljs$lang$maxFixedArity = 0;
G__1414.cljs$lang$applyTo = (function (arglist__1416){
var args = cljs.core.seq(arglist__1416);
return G__1414__delegate(args);
});
G__1414.cljs$core$IFn$_invoke$arity$variadic = G__1414__delegate;
return G__1414;
})()
;

return null;
});
