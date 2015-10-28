goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1447__i = 0, G__1447__a = new Array(arguments.length -  0);
while (G__1447__i < G__1447__a.length) {G__1447__a[G__1447__i] = arguments[G__1447__i + 0]; ++G__1447__i;}
  args = new cljs.core.IndexedSeq(G__1447__a,0);
} 
return G__1446__delegate.call(this,args);};
G__1446.cljs$lang$maxFixedArity = 0;
G__1446.cljs$lang$applyTo = (function (arglist__1448){
var args = cljs.core.seq(arglist__1448);
return G__1446__delegate(args);
});
G__1446.cljs$core$IFn$_invoke$arity$variadic = G__1446__delegate;
return G__1446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1450__i = 0, G__1450__a = new Array(arguments.length -  0);
while (G__1450__i < G__1450__a.length) {G__1450__a[G__1450__i] = arguments[G__1450__i + 0]; ++G__1450__i;}
  args = new cljs.core.IndexedSeq(G__1450__a,0);
} 
return G__1449__delegate.call(this,args);};
G__1449.cljs$lang$maxFixedArity = 0;
G__1449.cljs$lang$applyTo = (function (arglist__1451){
var args = cljs.core.seq(arglist__1451);
return G__1449__delegate(args);
});
G__1449.cljs$core$IFn$_invoke$arity$variadic = G__1449__delegate;
return G__1449;
})()
;

return null;
});
