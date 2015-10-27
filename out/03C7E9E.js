goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1433__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1434__i = 0, G__1434__a = new Array(arguments.length -  0);
while (G__1434__i < G__1434__a.length) {G__1434__a[G__1434__i] = arguments[G__1434__i + 0]; ++G__1434__i;}
  args = new cljs.core.IndexedSeq(G__1434__a,0);
} 
return G__1433__delegate.call(this,args);};
G__1433.cljs$lang$maxFixedArity = 0;
G__1433.cljs$lang$applyTo = (function (arglist__1435){
var args = cljs.core.seq(arglist__1435);
return G__1433__delegate(args);
});
G__1433.cljs$core$IFn$_invoke$arity$variadic = G__1433__delegate;
return G__1433;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1436__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1437__i = 0, G__1437__a = new Array(arguments.length -  0);
while (G__1437__i < G__1437__a.length) {G__1437__a[G__1437__i] = arguments[G__1437__i + 0]; ++G__1437__i;}
  args = new cljs.core.IndexedSeq(G__1437__a,0);
} 
return G__1436__delegate.call(this,args);};
G__1436.cljs$lang$maxFixedArity = 0;
G__1436.cljs$lang$applyTo = (function (arglist__1438){
var args = cljs.core.seq(arglist__1438);
return G__1436__delegate(args);
});
G__1436.cljs$core$IFn$_invoke$arity$variadic = G__1436__delegate;
return G__1436;
})()
;

return null;
});
