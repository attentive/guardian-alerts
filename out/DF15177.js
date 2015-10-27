goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1344__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1345__i = 0, G__1345__a = new Array(arguments.length -  0);
while (G__1345__i < G__1345__a.length) {G__1345__a[G__1345__i] = arguments[G__1345__i + 0]; ++G__1345__i;}
  args = new cljs.core.IndexedSeq(G__1345__a,0);
} 
return G__1344__delegate.call(this,args);};
G__1344.cljs$lang$maxFixedArity = 0;
G__1344.cljs$lang$applyTo = (function (arglist__1346){
var args = cljs.core.seq(arglist__1346);
return G__1344__delegate(args);
});
G__1344.cljs$core$IFn$_invoke$arity$variadic = G__1344__delegate;
return G__1344;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1347__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1348__i = 0, G__1348__a = new Array(arguments.length -  0);
while (G__1348__i < G__1348__a.length) {G__1348__a[G__1348__i] = arguments[G__1348__i + 0]; ++G__1348__i;}
  args = new cljs.core.IndexedSeq(G__1348__a,0);
} 
return G__1347__delegate.call(this,args);};
G__1347.cljs$lang$maxFixedArity = 0;
G__1347.cljs$lang$applyTo = (function (arglist__1349){
var args = cljs.core.seq(arglist__1349);
return G__1347__delegate(args);
});
G__1347.cljs$core$IFn$_invoke$arity$variadic = G__1347__delegate;
return G__1347;
})()
;

return null;
});
