goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1332__i = 0, G__1332__a = new Array(arguments.length -  0);
while (G__1332__i < G__1332__a.length) {G__1332__a[G__1332__i] = arguments[G__1332__i + 0]; ++G__1332__i;}
  args = new cljs.core.IndexedSeq(G__1332__a,0);
} 
return G__1331__delegate.call(this,args);};
G__1331.cljs$lang$maxFixedArity = 0;
G__1331.cljs$lang$applyTo = (function (arglist__1333){
var args = cljs.core.seq(arglist__1333);
return G__1331__delegate(args);
});
G__1331.cljs$core$IFn$_invoke$arity$variadic = G__1331__delegate;
return G__1331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1335__i = 0, G__1335__a = new Array(arguments.length -  0);
while (G__1335__i < G__1335__a.length) {G__1335__a[G__1335__i] = arguments[G__1335__i + 0]; ++G__1335__i;}
  args = new cljs.core.IndexedSeq(G__1335__a,0);
} 
return G__1334__delegate.call(this,args);};
G__1334.cljs$lang$maxFixedArity = 0;
G__1334.cljs$lang$applyTo = (function (arglist__1336){
var args = cljs.core.seq(arglist__1336);
return G__1334__delegate(args);
});
G__1334.cljs$core$IFn$_invoke$arity$variadic = G__1334__delegate;
return G__1334;
})()
;

return null;
});
