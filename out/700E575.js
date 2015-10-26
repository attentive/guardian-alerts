goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1133__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1134__i = 0, G__1134__a = new Array(arguments.length -  0);
while (G__1134__i < G__1134__a.length) {G__1134__a[G__1134__i] = arguments[G__1134__i + 0]; ++G__1134__i;}
  args = new cljs.core.IndexedSeq(G__1134__a,0);
} 
return G__1133__delegate.call(this,args);};
G__1133.cljs$lang$maxFixedArity = 0;
G__1133.cljs$lang$applyTo = (function (arglist__1135){
var args = cljs.core.seq(arglist__1135);
return G__1133__delegate(args);
});
G__1133.cljs$core$IFn$_invoke$arity$variadic = G__1133__delegate;
return G__1133;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1136__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1137__i = 0, G__1137__a = new Array(arguments.length -  0);
while (G__1137__i < G__1137__a.length) {G__1137__a[G__1137__i] = arguments[G__1137__i + 0]; ++G__1137__i;}
  args = new cljs.core.IndexedSeq(G__1137__a,0);
} 
return G__1136__delegate.call(this,args);};
G__1136.cljs$lang$maxFixedArity = 0;
G__1136.cljs$lang$applyTo = (function (arglist__1138){
var args = cljs.core.seq(arglist__1138);
return G__1136__delegate(args);
});
G__1136.cljs$core$IFn$_invoke$arity$variadic = G__1136__delegate;
return G__1136;
})()
;

return null;
});
