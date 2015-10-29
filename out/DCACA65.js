goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1411__i = 0, G__1411__a = new Array(arguments.length -  0);
while (G__1411__i < G__1411__a.length) {G__1411__a[G__1411__i] = arguments[G__1411__i + 0]; ++G__1411__i;}
  args = new cljs.core.IndexedSeq(G__1411__a,0);
} 
return G__1410__delegate.call(this,args);};
G__1410.cljs$lang$maxFixedArity = 0;
G__1410.cljs$lang$applyTo = (function (arglist__1412){
var args = cljs.core.seq(arglist__1412);
return G__1410__delegate(args);
});
G__1410.cljs$core$IFn$_invoke$arity$variadic = G__1410__delegate;
return G__1410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1414__i = 0, G__1414__a = new Array(arguments.length -  0);
while (G__1414__i < G__1414__a.length) {G__1414__a[G__1414__i] = arguments[G__1414__i + 0]; ++G__1414__i;}
  args = new cljs.core.IndexedSeq(G__1414__a,0);
} 
return G__1413__delegate.call(this,args);};
G__1413.cljs$lang$maxFixedArity = 0;
G__1413.cljs$lang$applyTo = (function (arglist__1415){
var args = cljs.core.seq(arglist__1415);
return G__1413__delegate(args);
});
G__1413.cljs$core$IFn$_invoke$arity$variadic = G__1413__delegate;
return G__1413;
})()
;

return null;
});
