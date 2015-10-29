// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1502__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1503__i = 0, G__1503__a = new Array(arguments.length -  0);
while (G__1503__i < G__1503__a.length) {G__1503__a[G__1503__i] = arguments[G__1503__i + 0]; ++G__1503__i;}
  args = new cljs.core.IndexedSeq(G__1503__a,0);
} 
return G__1502__delegate.call(this,args);};
G__1502.cljs$lang$maxFixedArity = 0;
G__1502.cljs$lang$applyTo = (function (arglist__1504){
var args = cljs.core.seq(arglist__1504);
return G__1502__delegate(args);
});
G__1502.cljs$core$IFn$_invoke$arity$variadic = G__1502__delegate;
return G__1502;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1505__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1506__i = 0, G__1506__a = new Array(arguments.length -  0);
while (G__1506__i < G__1506__a.length) {G__1506__a[G__1506__i] = arguments[G__1506__i + 0]; ++G__1506__i;}
  args = new cljs.core.IndexedSeq(G__1506__a,0);
} 
return G__1505__delegate.call(this,args);};
G__1505.cljs$lang$maxFixedArity = 0;
G__1505.cljs$lang$applyTo = (function (arglist__1507){
var args = cljs.core.seq(arglist__1507);
return G__1505__delegate(args);
});
G__1505.cljs$core$IFn$_invoke$arity$variadic = G__1505__delegate;
return G__1505;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map