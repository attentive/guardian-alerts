goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59__i = 0, G__59__a = new Array(arguments.length -  0);
while (G__59__i < G__59__a.length) {G__59__a[G__59__i] = arguments[G__59__i + 0]; ++G__59__i;}
  args = new cljs.core.IndexedSeq(G__59__a,0);
} 
return G__58__delegate.call(this,args);};
G__58.cljs$lang$maxFixedArity = 0;
G__58.cljs$lang$applyTo = (function (arglist__60){
var args = cljs.core.seq(arglist__60);
return G__58__delegate(args);
});
G__58.cljs$core$IFn$_invoke$arity$variadic = G__58__delegate;
return G__58;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62__i = 0, G__62__a = new Array(arguments.length -  0);
while (G__62__i < G__62__a.length) {G__62__a[G__62__i] = arguments[G__62__i + 0]; ++G__62__i;}
  args = new cljs.core.IndexedSeq(G__62__a,0);
} 
return G__61__delegate.call(this,args);};
G__61.cljs$lang$maxFixedArity = 0;
G__61.cljs$lang$applyTo = (function (arglist__63){
var args = cljs.core.seq(arglist__63);
return G__61__delegate(args);
});
G__61.cljs$core$IFn$_invoke$arity$variadic = G__61__delegate;
return G__61;
})()
;

return null;
});
