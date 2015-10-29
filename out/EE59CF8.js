goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4332__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4333__i = 0, G__4333__a = new Array(arguments.length -  0);
while (G__4333__i < G__4333__a.length) {G__4333__a[G__4333__i] = arguments[G__4333__i + 0]; ++G__4333__i;}
  args = new cljs.core.IndexedSeq(G__4333__a,0);
} 
return G__4332__delegate.call(this,args);};
G__4332.cljs$lang$maxFixedArity = 0;
G__4332.cljs$lang$applyTo = (function (arglist__4334){
var args = cljs.core.seq(arglist__4334);
return G__4332__delegate(args);
});
G__4332.cljs$core$IFn$_invoke$arity$variadic = G__4332__delegate;
return G__4332;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4335__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4336__i = 0, G__4336__a = new Array(arguments.length -  0);
while (G__4336__i < G__4336__a.length) {G__4336__a[G__4336__i] = arguments[G__4336__i + 0]; ++G__4336__i;}
  args = new cljs.core.IndexedSeq(G__4336__a,0);
} 
return G__4335__delegate.call(this,args);};
G__4335.cljs$lang$maxFixedArity = 0;
G__4335.cljs$lang$applyTo = (function (arglist__4337){
var args = cljs.core.seq(arglist__4337);
return G__4335__delegate(args);
});
G__4335.cljs$core$IFn$_invoke$arity$variadic = G__4335__delegate;
return G__4335;
})()
;

return null;
});
