// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t2489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t2489 = (function (fn_handler,f,meta2490){
this.fn_handler = fn_handler;
this.f = f;
this.meta2490 = meta2490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t2489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2491,meta2490__$1){
var self__ = this;
var _2491__$1 = this;
return (new cljs.core.async.t2489(self__.fn_handler,self__.f,meta2490__$1));
});

cljs.core.async.t2489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2491){
var self__ = this;
var _2491__$1 = this;
return self__.meta2490;
});

cljs.core.async.t2489.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t2489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t2489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t2489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta2490","meta2490",-1413249024,null)], null);
});

cljs.core.async.t2489.cljs$lang$type = true;

cljs.core.async.t2489.cljs$lang$ctorStr = "cljs.core.async/t2489";

cljs.core.async.t2489.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t2489");
});

cljs.core.async.__GT_t2489 = (function cljs$core$async$fn_handler_$___GT_t2489(fn_handler__$1,f__$1,meta2490){
return (new cljs.core.async.t2489(fn_handler__$1,f__$1,meta2490));
});

}

return (new cljs.core.async.t2489(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args2494 = [];
var len__3300__auto___2497 = arguments.length;
var i__3301__auto___2498 = (0);
while(true){
if((i__3301__auto___2498 < len__3300__auto___2497)){
args2494.push((arguments[i__3301__auto___2498]));

var G__2499 = (i__3301__auto___2498 + (1));
i__3301__auto___2498 = G__2499;
continue;
} else {
}
break;
}

var G__2496 = args2494.length;
switch (G__2496) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2494.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args2501 = [];
var len__3300__auto___2504 = arguments.length;
var i__3301__auto___2505 = (0);
while(true){
if((i__3301__auto___2505 < len__3300__auto___2504)){
args2501.push((arguments[i__3301__auto___2505]));

var G__2506 = (i__3301__auto___2505 + (1));
i__3301__auto___2505 = G__2506;
continue;
} else {
}
break;
}

var G__2503 = args2501.length;
switch (G__2503) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2501.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2508 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2508);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_2508,ret){
return (function (){
return fn1.call(null,val_2508);
});})(val_2508,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args2509 = [];
var len__3300__auto___2512 = arguments.length;
var i__3301__auto___2513 = (0);
while(true){
if((i__3301__auto___2513 < len__3300__auto___2512)){
args2509.push((arguments[i__3301__auto___2513]));

var G__2514 = (i__3301__auto___2513 + (1));
i__3301__auto___2513 = G__2514;
continue;
} else {
}
break;
}

var G__2511 = args2509.length;
switch (G__2511) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2509.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__3209__auto___2516 = n;
var x_2517 = (0);
while(true){
if((x_2517 < n__3209__auto___2516)){
(a[x_2517] = (0));

var G__2518 = (x_2517 + (1));
x_2517 = G__2518;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__2519 = (i + (1));
i = G__2519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t2523 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t2523 = (function (alt_flag,flag,meta2524){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta2524 = meta2524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t2523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_2525,meta2524__$1){
var self__ = this;
var _2525__$1 = this;
return (new cljs.core.async.t2523(self__.alt_flag,self__.flag,meta2524__$1));
});})(flag))
;

cljs.core.async.t2523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_2525){
var self__ = this;
var _2525__$1 = this;
return self__.meta2524;
});})(flag))
;

cljs.core.async.t2523.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t2523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t2523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t2523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2524","meta2524",1357639088,null)], null);
});})(flag))
;

cljs.core.async.t2523.cljs$lang$type = true;

cljs.core.async.t2523.cljs$lang$ctorStr = "cljs.core.async/t2523";

cljs.core.async.t2523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t2523");
});})(flag))
;

cljs.core.async.__GT_t2523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t2523(alt_flag__$1,flag__$1,meta2524){
return (new cljs.core.async.t2523(alt_flag__$1,flag__$1,meta2524));
});})(flag))
;

}

return (new cljs.core.async.t2523(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t2529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t2529 = (function (alt_handler,flag,cb,meta2530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta2530 = meta2530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t2529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2531,meta2530__$1){
var self__ = this;
var _2531__$1 = this;
return (new cljs.core.async.t2529(self__.alt_handler,self__.flag,self__.cb,meta2530__$1));
});

cljs.core.async.t2529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2531){
var self__ = this;
var _2531__$1 = this;
return self__.meta2530;
});

cljs.core.async.t2529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t2529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t2529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t2529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2530","meta2530",882449891,null)], null);
});

cljs.core.async.t2529.cljs$lang$type = true;

cljs.core.async.t2529.cljs$lang$ctorStr = "cljs.core.async/t2529";

cljs.core.async.t2529.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t2529");
});

cljs.core.async.__GT_t2529 = (function cljs$core$async$alt_handler_$___GT_t2529(alt_handler__$1,flag__$1,cb__$1,meta2530){
return (new cljs.core.async.t2529(alt_handler__$1,flag__$1,cb__$1,meta2530));
});

}

return (new cljs.core.async.t2529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2532_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2533_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2533_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__2789__auto__ = wport;
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2534 = (i + (1));
i = G__2534;
continue;
}
} else {
return null;
}
break;
}
})();
var or__2789__auto__ = ret;
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__2781__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__2781__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__2781__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__3303__auto__ = [];
var len__3300__auto___2540 = arguments.length;
var i__3301__auto___2541 = (0);
while(true){
if((i__3301__auto___2541 < len__3300__auto___2540)){
args__3303__auto__.push((arguments[i__3301__auto___2541]));

var G__2542 = (i__3301__auto___2541 + (1));
i__3301__auto___2541 = G__2542;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((1) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2537){
var map__2538 = p__2537;
var map__2538__$1 = ((((!((map__2538 == null)))?((((map__2538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2538):map__2538);
var opts = map__2538__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2535){
var G__2536 = cljs.core.first.call(null,seq2535);
var seq2535__$1 = cljs.core.next.call(null,seq2535);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__2536,seq2535__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args2543 = [];
var len__3300__auto___2593 = arguments.length;
var i__3301__auto___2594 = (0);
while(true){
if((i__3301__auto___2594 < len__3300__auto___2593)){
args2543.push((arguments[i__3301__auto___2594]));

var G__2595 = (i__3301__auto___2594 + (1));
i__3301__auto___2594 = G__2595;
continue;
} else {
}
break;
}

var G__2545 = args2543.length;
switch (G__2545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2543.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2441__auto___2597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___2597){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___2597){
return (function (state_2569){
var state_val_2570 = (state_2569[(1)]);
if((state_val_2570 === (7))){
var inst_2565 = (state_2569[(2)]);
var state_2569__$1 = state_2569;
var statearr_2571_2598 = state_2569__$1;
(statearr_2571_2598[(2)] = inst_2565);

(statearr_2571_2598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (1))){
var state_2569__$1 = state_2569;
var statearr_2572_2599 = state_2569__$1;
(statearr_2572_2599[(2)] = null);

(statearr_2572_2599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (4))){
var inst_2548 = (state_2569[(7)]);
var inst_2548__$1 = (state_2569[(2)]);
var inst_2549 = (inst_2548__$1 == null);
var state_2569__$1 = (function (){var statearr_2573 = state_2569;
(statearr_2573[(7)] = inst_2548__$1);

return statearr_2573;
})();
if(cljs.core.truth_(inst_2549)){
var statearr_2574_2600 = state_2569__$1;
(statearr_2574_2600[(1)] = (5));

} else {
var statearr_2575_2601 = state_2569__$1;
(statearr_2575_2601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (13))){
var state_2569__$1 = state_2569;
var statearr_2576_2602 = state_2569__$1;
(statearr_2576_2602[(2)] = null);

(statearr_2576_2602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (6))){
var inst_2548 = (state_2569[(7)]);
var state_2569__$1 = state_2569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2569__$1,(11),to,inst_2548);
} else {
if((state_val_2570 === (3))){
var inst_2567 = (state_2569[(2)]);
var state_2569__$1 = state_2569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2569__$1,inst_2567);
} else {
if((state_val_2570 === (12))){
var state_2569__$1 = state_2569;
var statearr_2577_2603 = state_2569__$1;
(statearr_2577_2603[(2)] = null);

(statearr_2577_2603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (2))){
var state_2569__$1 = state_2569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2569__$1,(4),from);
} else {
if((state_val_2570 === (11))){
var inst_2558 = (state_2569[(2)]);
var state_2569__$1 = state_2569;
if(cljs.core.truth_(inst_2558)){
var statearr_2578_2604 = state_2569__$1;
(statearr_2578_2604[(1)] = (12));

} else {
var statearr_2579_2605 = state_2569__$1;
(statearr_2579_2605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (9))){
var state_2569__$1 = state_2569;
var statearr_2580_2606 = state_2569__$1;
(statearr_2580_2606[(2)] = null);

(statearr_2580_2606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (5))){
var state_2569__$1 = state_2569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2581_2607 = state_2569__$1;
(statearr_2581_2607[(1)] = (8));

} else {
var statearr_2582_2608 = state_2569__$1;
(statearr_2582_2608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (14))){
var inst_2563 = (state_2569[(2)]);
var state_2569__$1 = state_2569;
var statearr_2583_2609 = state_2569__$1;
(statearr_2583_2609[(2)] = inst_2563);

(statearr_2583_2609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (10))){
var inst_2555 = (state_2569[(2)]);
var state_2569__$1 = state_2569;
var statearr_2584_2610 = state_2569__$1;
(statearr_2584_2610[(2)] = inst_2555);

(statearr_2584_2610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2570 === (8))){
var inst_2552 = cljs.core.async.close_BANG_.call(null,to);
var state_2569__$1 = state_2569;
var statearr_2585_2611 = state_2569__$1;
(statearr_2585_2611[(2)] = inst_2552);

(statearr_2585_2611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___2597))
;
return ((function (switch__2376__auto__,c__2441__auto___2597){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_2589 = [null,null,null,null,null,null,null,null];
(statearr_2589[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_2589[(1)] = (1));

return statearr_2589;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_2569){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2590){if((e2590 instanceof Object)){
var ex__2380__auto__ = e2590;
var statearr_2591_2612 = state_2569;
(statearr_2591_2612[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2613 = state_2569;
state_2569 = G__2613;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_2569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_2569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___2597))
})();
var state__2443__auto__ = (function (){var statearr_2592 = f__2442__auto__.call(null);
(statearr_2592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___2597);

return statearr_2592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___2597))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__2797){
var vec__2798 = p__2797;
var v = cljs.core.nth.call(null,vec__2798,(0),null);
var p = cljs.core.nth.call(null,vec__2798,(1),null);
var job = vec__2798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2441__auto___2980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results){
return (function (state_2803){
var state_val_2804 = (state_2803[(1)]);
if((state_val_2804 === (1))){
var state_2803__$1 = state_2803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2803__$1,(2),res,v);
} else {
if((state_val_2804 === (2))){
var inst_2800 = (state_2803[(2)]);
var inst_2801 = cljs.core.async.close_BANG_.call(null,res);
var state_2803__$1 = (function (){var statearr_2805 = state_2803;
(statearr_2805[(7)] = inst_2800);

return statearr_2805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2803__$1,inst_2801);
} else {
return null;
}
}
});})(c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results))
;
return ((function (switch__2376__auto__,c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_2809 = [null,null,null,null,null,null,null,null];
(statearr_2809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__);

(statearr_2809[(1)] = (1));

return statearr_2809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1 = (function (state_2803){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2810){if((e2810 instanceof Object)){
var ex__2380__auto__ = e2810;
var statearr_2811_2981 = state_2803;
(statearr_2811_2981[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2982 = state_2803;
state_2803 = G__2982;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = function(state_2803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1.call(this,state_2803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results))
})();
var state__2443__auto__ = (function (){var statearr_2812 = f__2442__auto__.call(null);
(statearr_2812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___2980);

return statearr_2812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___2980,res,vec__2798,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__2813){
var vec__2814 = p__2813;
var v = cljs.core.nth.call(null,vec__2814,(0),null);
var p = cljs.core.nth.call(null,vec__2814,(1),null);
var job = vec__2814;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__3209__auto___2983 = n;
var __2984 = (0);
while(true){
if((__2984 < n__3209__auto___2983)){
var G__2815_2985 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__2815_2985) {
case "compute":
var c__2441__auto___2987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2984,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (__2984,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function (state_2828){
var state_val_2829 = (state_2828[(1)]);
if((state_val_2829 === (1))){
var state_2828__$1 = state_2828;
var statearr_2830_2988 = state_2828__$1;
(statearr_2830_2988[(2)] = null);

(statearr_2830_2988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2829 === (2))){
var state_2828__$1 = state_2828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2828__$1,(4),jobs);
} else {
if((state_val_2829 === (3))){
var inst_2826 = (state_2828[(2)]);
var state_2828__$1 = state_2828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2828__$1,inst_2826);
} else {
if((state_val_2829 === (4))){
var inst_2818 = (state_2828[(2)]);
var inst_2819 = process.call(null,inst_2818);
var state_2828__$1 = state_2828;
if(cljs.core.truth_(inst_2819)){
var statearr_2831_2989 = state_2828__$1;
(statearr_2831_2989[(1)] = (5));

} else {
var statearr_2832_2990 = state_2828__$1;
(statearr_2832_2990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2829 === (5))){
var state_2828__$1 = state_2828;
var statearr_2833_2991 = state_2828__$1;
(statearr_2833_2991[(2)] = null);

(statearr_2833_2991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2829 === (6))){
var state_2828__$1 = state_2828;
var statearr_2834_2992 = state_2828__$1;
(statearr_2834_2992[(2)] = null);

(statearr_2834_2992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2829 === (7))){
var inst_2824 = (state_2828[(2)]);
var state_2828__$1 = state_2828;
var statearr_2835_2993 = state_2828__$1;
(statearr_2835_2993[(2)] = inst_2824);

(statearr_2835_2993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2984,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
;
return ((function (__2984,switch__2376__auto__,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_2839 = [null,null,null,null,null,null,null];
(statearr_2839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__);

(statearr_2839[(1)] = (1));

return statearr_2839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1 = (function (state_2828){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2840){if((e2840 instanceof Object)){
var ex__2380__auto__ = e2840;
var statearr_2841_2994 = state_2828;
(statearr_2841_2994[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2995 = state_2828;
state_2828 = G__2995;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = function(state_2828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1.call(this,state_2828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__;
})()
;})(__2984,switch__2376__auto__,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
})();
var state__2443__auto__ = (function (){var statearr_2842 = f__2442__auto__.call(null);
(statearr_2842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___2987);

return statearr_2842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(__2984,c__2441__auto___2987,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
);


break;
case "async":
var c__2441__auto___2996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2984,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (__2984,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function (state_2855){
var state_val_2856 = (state_2855[(1)]);
if((state_val_2856 === (1))){
var state_2855__$1 = state_2855;
var statearr_2857_2997 = state_2855__$1;
(statearr_2857_2997[(2)] = null);

(statearr_2857_2997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2856 === (2))){
var state_2855__$1 = state_2855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2855__$1,(4),jobs);
} else {
if((state_val_2856 === (3))){
var inst_2853 = (state_2855[(2)]);
var state_2855__$1 = state_2855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2855__$1,inst_2853);
} else {
if((state_val_2856 === (4))){
var inst_2845 = (state_2855[(2)]);
var inst_2846 = async.call(null,inst_2845);
var state_2855__$1 = state_2855;
if(cljs.core.truth_(inst_2846)){
var statearr_2858_2998 = state_2855__$1;
(statearr_2858_2998[(1)] = (5));

} else {
var statearr_2859_2999 = state_2855__$1;
(statearr_2859_2999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2856 === (5))){
var state_2855__$1 = state_2855;
var statearr_2860_3000 = state_2855__$1;
(statearr_2860_3000[(2)] = null);

(statearr_2860_3000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2856 === (6))){
var state_2855__$1 = state_2855;
var statearr_2861_3001 = state_2855__$1;
(statearr_2861_3001[(2)] = null);

(statearr_2861_3001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2856 === (7))){
var inst_2851 = (state_2855[(2)]);
var state_2855__$1 = state_2855;
var statearr_2862_3002 = state_2855__$1;
(statearr_2862_3002[(2)] = inst_2851);

(statearr_2862_3002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2984,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
;
return ((function (__2984,switch__2376__auto__,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_2866 = [null,null,null,null,null,null,null];
(statearr_2866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__);

(statearr_2866[(1)] = (1));

return statearr_2866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1 = (function (state_2855){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2867){if((e2867 instanceof Object)){
var ex__2380__auto__ = e2867;
var statearr_2868_3003 = state_2855;
(statearr_2868_3003[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3004 = state_2855;
state_2855 = G__3004;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = function(state_2855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1.call(this,state_2855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__;
})()
;})(__2984,switch__2376__auto__,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
})();
var state__2443__auto__ = (function (){var statearr_2869 = f__2442__auto__.call(null);
(statearr_2869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___2996);

return statearr_2869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(__2984,c__2441__auto___2996,G__2815_2985,n__3209__auto___2983,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__3005 = (__2984 + (1));
__2984 = G__3005;
continue;
} else {
}
break;
}

var c__2441__auto___3006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___3006,jobs,results,process,async){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___3006,jobs,results,process,async){
return (function (state_2891){
var state_val_2892 = (state_2891[(1)]);
if((state_val_2892 === (1))){
var state_2891__$1 = state_2891;
var statearr_2893_3007 = state_2891__$1;
(statearr_2893_3007[(2)] = null);

(statearr_2893_3007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2892 === (2))){
var state_2891__$1 = state_2891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2891__$1,(4),from);
} else {
if((state_val_2892 === (3))){
var inst_2889 = (state_2891[(2)]);
var state_2891__$1 = state_2891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2891__$1,inst_2889);
} else {
if((state_val_2892 === (4))){
var inst_2872 = (state_2891[(7)]);
var inst_2872__$1 = (state_2891[(2)]);
var inst_2873 = (inst_2872__$1 == null);
var state_2891__$1 = (function (){var statearr_2894 = state_2891;
(statearr_2894[(7)] = inst_2872__$1);

return statearr_2894;
})();
if(cljs.core.truth_(inst_2873)){
var statearr_2895_3008 = state_2891__$1;
(statearr_2895_3008[(1)] = (5));

} else {
var statearr_2896_3009 = state_2891__$1;
(statearr_2896_3009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2892 === (5))){
var inst_2875 = cljs.core.async.close_BANG_.call(null,jobs);
var state_2891__$1 = state_2891;
var statearr_2897_3010 = state_2891__$1;
(statearr_2897_3010[(2)] = inst_2875);

(statearr_2897_3010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2892 === (6))){
var inst_2872 = (state_2891[(7)]);
var inst_2877 = (state_2891[(8)]);
var inst_2877__$1 = cljs.core.async.chan.call(null,(1));
var inst_2878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2879 = [inst_2872,inst_2877__$1];
var inst_2880 = (new cljs.core.PersistentVector(null,2,(5),inst_2878,inst_2879,null));
var state_2891__$1 = (function (){var statearr_2898 = state_2891;
(statearr_2898[(8)] = inst_2877__$1);

return statearr_2898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2891__$1,(8),jobs,inst_2880);
} else {
if((state_val_2892 === (7))){
var inst_2887 = (state_2891[(2)]);
var state_2891__$1 = state_2891;
var statearr_2899_3011 = state_2891__$1;
(statearr_2899_3011[(2)] = inst_2887);

(statearr_2899_3011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2892 === (8))){
var inst_2877 = (state_2891[(8)]);
var inst_2882 = (state_2891[(2)]);
var state_2891__$1 = (function (){var statearr_2900 = state_2891;
(statearr_2900[(9)] = inst_2882);

return statearr_2900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2891__$1,(9),results,inst_2877);
} else {
if((state_val_2892 === (9))){
var inst_2884 = (state_2891[(2)]);
var state_2891__$1 = (function (){var statearr_2901 = state_2891;
(statearr_2901[(10)] = inst_2884);

return statearr_2901;
})();
var statearr_2902_3012 = state_2891__$1;
(statearr_2902_3012[(2)] = null);

(statearr_2902_3012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___3006,jobs,results,process,async))
;
return ((function (switch__2376__auto__,c__2441__auto___3006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_2906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__);

(statearr_2906[(1)] = (1));

return statearr_2906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1 = (function (state_2891){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2907){if((e2907 instanceof Object)){
var ex__2380__auto__ = e2907;
var statearr_2908_3013 = state_2891;
(statearr_2908_3013[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3014 = state_2891;
state_2891 = G__3014;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = function(state_2891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1.call(this,state_2891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___3006,jobs,results,process,async))
})();
var state__2443__auto__ = (function (){var statearr_2909 = f__2442__auto__.call(null);
(statearr_2909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___3006);

return statearr_2909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___3006,jobs,results,process,async))
);


var c__2441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto__,jobs,results,process,async){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto__,jobs,results,process,async){
return (function (state_2947){
var state_val_2948 = (state_2947[(1)]);
if((state_val_2948 === (7))){
var inst_2943 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2949_3015 = state_2947__$1;
(statearr_2949_3015[(2)] = inst_2943);

(statearr_2949_3015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (20))){
var state_2947__$1 = state_2947;
var statearr_2950_3016 = state_2947__$1;
(statearr_2950_3016[(2)] = null);

(statearr_2950_3016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (1))){
var state_2947__$1 = state_2947;
var statearr_2951_3017 = state_2947__$1;
(statearr_2951_3017[(2)] = null);

(statearr_2951_3017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (4))){
var inst_2912 = (state_2947[(7)]);
var inst_2912__$1 = (state_2947[(2)]);
var inst_2913 = (inst_2912__$1 == null);
var state_2947__$1 = (function (){var statearr_2952 = state_2947;
(statearr_2952[(7)] = inst_2912__$1);

return statearr_2952;
})();
if(cljs.core.truth_(inst_2913)){
var statearr_2953_3018 = state_2947__$1;
(statearr_2953_3018[(1)] = (5));

} else {
var statearr_2954_3019 = state_2947__$1;
(statearr_2954_3019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (15))){
var inst_2925 = (state_2947[(8)]);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2947__$1,(18),to,inst_2925);
} else {
if((state_val_2948 === (21))){
var inst_2938 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2955_3020 = state_2947__$1;
(statearr_2955_3020[(2)] = inst_2938);

(statearr_2955_3020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (13))){
var inst_2940 = (state_2947[(2)]);
var state_2947__$1 = (function (){var statearr_2956 = state_2947;
(statearr_2956[(9)] = inst_2940);

return statearr_2956;
})();
var statearr_2957_3021 = state_2947__$1;
(statearr_2957_3021[(2)] = null);

(statearr_2957_3021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (6))){
var inst_2912 = (state_2947[(7)]);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2947__$1,(11),inst_2912);
} else {
if((state_val_2948 === (17))){
var inst_2933 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
if(cljs.core.truth_(inst_2933)){
var statearr_2958_3022 = state_2947__$1;
(statearr_2958_3022[(1)] = (19));

} else {
var statearr_2959_3023 = state_2947__$1;
(statearr_2959_3023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (3))){
var inst_2945 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2947__$1,inst_2945);
} else {
if((state_val_2948 === (12))){
var inst_2922 = (state_2947[(10)]);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2947__$1,(14),inst_2922);
} else {
if((state_val_2948 === (2))){
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2947__$1,(4),results);
} else {
if((state_val_2948 === (19))){
var state_2947__$1 = state_2947;
var statearr_2960_3024 = state_2947__$1;
(statearr_2960_3024[(2)] = null);

(statearr_2960_3024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (11))){
var inst_2922 = (state_2947[(2)]);
var state_2947__$1 = (function (){var statearr_2961 = state_2947;
(statearr_2961[(10)] = inst_2922);

return statearr_2961;
})();
var statearr_2962_3025 = state_2947__$1;
(statearr_2962_3025[(2)] = null);

(statearr_2962_3025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (9))){
var state_2947__$1 = state_2947;
var statearr_2963_3026 = state_2947__$1;
(statearr_2963_3026[(2)] = null);

(statearr_2963_3026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (5))){
var state_2947__$1 = state_2947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2964_3027 = state_2947__$1;
(statearr_2964_3027[(1)] = (8));

} else {
var statearr_2965_3028 = state_2947__$1;
(statearr_2965_3028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (14))){
var inst_2925 = (state_2947[(8)]);
var inst_2927 = (state_2947[(11)]);
var inst_2925__$1 = (state_2947[(2)]);
var inst_2926 = (inst_2925__$1 == null);
var inst_2927__$1 = cljs.core.not.call(null,inst_2926);
var state_2947__$1 = (function (){var statearr_2966 = state_2947;
(statearr_2966[(8)] = inst_2925__$1);

(statearr_2966[(11)] = inst_2927__$1);

return statearr_2966;
})();
if(inst_2927__$1){
var statearr_2967_3029 = state_2947__$1;
(statearr_2967_3029[(1)] = (15));

} else {
var statearr_2968_3030 = state_2947__$1;
(statearr_2968_3030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (16))){
var inst_2927 = (state_2947[(11)]);
var state_2947__$1 = state_2947;
var statearr_2969_3031 = state_2947__$1;
(statearr_2969_3031[(2)] = inst_2927);

(statearr_2969_3031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (10))){
var inst_2919 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2970_3032 = state_2947__$1;
(statearr_2970_3032[(2)] = inst_2919);

(statearr_2970_3032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (18))){
var inst_2930 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2971_3033 = state_2947__$1;
(statearr_2971_3033[(2)] = inst_2930);

(statearr_2971_3033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2948 === (8))){
var inst_2916 = cljs.core.async.close_BANG_.call(null,to);
var state_2947__$1 = state_2947;
var statearr_2972_3034 = state_2947__$1;
(statearr_2972_3034[(2)] = inst_2916);

(statearr_2972_3034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto__,jobs,results,process,async))
;
return ((function (switch__2376__auto__,c__2441__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_2976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__);

(statearr_2976[(1)] = (1));

return statearr_2976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1 = (function (state_2947){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_2947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e2977){if((e2977 instanceof Object)){
var ex__2380__auto__ = e2977;
var statearr_2978_3035 = state_2947;
(statearr_2978_3035[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3036 = state_2947;
state_2947 = G__3036;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__ = function(state_2947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1.call(this,state_2947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto__,jobs,results,process,async))
})();
var state__2443__auto__ = (function (){var statearr_2979 = f__2442__auto__.call(null);
(statearr_2979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto__);

return statearr_2979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto__,jobs,results,process,async))
);

return c__2441__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args3037 = [];
var len__3300__auto___3040 = arguments.length;
var i__3301__auto___3041 = (0);
while(true){
if((i__3301__auto___3041 < len__3300__auto___3040)){
args3037.push((arguments[i__3301__auto___3041]));

var G__3042 = (i__3301__auto___3041 + (1));
i__3301__auto___3041 = G__3042;
continue;
} else {
}
break;
}

var G__3039 = args3037.length;
switch (G__3039) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3037.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args3044 = [];
var len__3300__auto___3047 = arguments.length;
var i__3301__auto___3048 = (0);
while(true){
if((i__3301__auto___3048 < len__3300__auto___3047)){
args3044.push((arguments[i__3301__auto___3048]));

var G__3049 = (i__3301__auto___3048 + (1));
i__3301__auto___3048 = G__3049;
continue;
} else {
}
break;
}

var G__3046 = args3044.length;
switch (G__3046) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3044.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args3051 = [];
var len__3300__auto___3104 = arguments.length;
var i__3301__auto___3105 = (0);
while(true){
if((i__3301__auto___3105 < len__3300__auto___3104)){
args3051.push((arguments[i__3301__auto___3105]));

var G__3106 = (i__3301__auto___3105 + (1));
i__3301__auto___3105 = G__3106;
continue;
} else {
}
break;
}

var G__3053 = args3051.length;
switch (G__3053) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3051.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2441__auto___3108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___3108,tc,fc){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___3108,tc,fc){
return (function (state_3079){
var state_val_3080 = (state_3079[(1)]);
if((state_val_3080 === (7))){
var inst_3075 = (state_3079[(2)]);
var state_3079__$1 = state_3079;
var statearr_3081_3109 = state_3079__$1;
(statearr_3081_3109[(2)] = inst_3075);

(statearr_3081_3109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (1))){
var state_3079__$1 = state_3079;
var statearr_3082_3110 = state_3079__$1;
(statearr_3082_3110[(2)] = null);

(statearr_3082_3110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (4))){
var inst_3056 = (state_3079[(7)]);
var inst_3056__$1 = (state_3079[(2)]);
var inst_3057 = (inst_3056__$1 == null);
var state_3079__$1 = (function (){var statearr_3083 = state_3079;
(statearr_3083[(7)] = inst_3056__$1);

return statearr_3083;
})();
if(cljs.core.truth_(inst_3057)){
var statearr_3084_3111 = state_3079__$1;
(statearr_3084_3111[(1)] = (5));

} else {
var statearr_3085_3112 = state_3079__$1;
(statearr_3085_3112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (13))){
var state_3079__$1 = state_3079;
var statearr_3086_3113 = state_3079__$1;
(statearr_3086_3113[(2)] = null);

(statearr_3086_3113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (6))){
var inst_3056 = (state_3079[(7)]);
var inst_3062 = p.call(null,inst_3056);
var state_3079__$1 = state_3079;
if(cljs.core.truth_(inst_3062)){
var statearr_3087_3114 = state_3079__$1;
(statearr_3087_3114[(1)] = (9));

} else {
var statearr_3088_3115 = state_3079__$1;
(statearr_3088_3115[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (3))){
var inst_3077 = (state_3079[(2)]);
var state_3079__$1 = state_3079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3079__$1,inst_3077);
} else {
if((state_val_3080 === (12))){
var state_3079__$1 = state_3079;
var statearr_3089_3116 = state_3079__$1;
(statearr_3089_3116[(2)] = null);

(statearr_3089_3116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (2))){
var state_3079__$1 = state_3079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3079__$1,(4),ch);
} else {
if((state_val_3080 === (11))){
var inst_3056 = (state_3079[(7)]);
var inst_3066 = (state_3079[(2)]);
var state_3079__$1 = state_3079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3079__$1,(8),inst_3066,inst_3056);
} else {
if((state_val_3080 === (9))){
var state_3079__$1 = state_3079;
var statearr_3090_3117 = state_3079__$1;
(statearr_3090_3117[(2)] = tc);

(statearr_3090_3117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (5))){
var inst_3059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3060 = cljs.core.async.close_BANG_.call(null,fc);
var state_3079__$1 = (function (){var statearr_3091 = state_3079;
(statearr_3091[(8)] = inst_3059);

return statearr_3091;
})();
var statearr_3092_3118 = state_3079__$1;
(statearr_3092_3118[(2)] = inst_3060);

(statearr_3092_3118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (14))){
var inst_3073 = (state_3079[(2)]);
var state_3079__$1 = state_3079;
var statearr_3093_3119 = state_3079__$1;
(statearr_3093_3119[(2)] = inst_3073);

(statearr_3093_3119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (10))){
var state_3079__$1 = state_3079;
var statearr_3094_3120 = state_3079__$1;
(statearr_3094_3120[(2)] = fc);

(statearr_3094_3120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3080 === (8))){
var inst_3068 = (state_3079[(2)]);
var state_3079__$1 = state_3079;
if(cljs.core.truth_(inst_3068)){
var statearr_3095_3121 = state_3079__$1;
(statearr_3095_3121[(1)] = (12));

} else {
var statearr_3096_3122 = state_3079__$1;
(statearr_3096_3122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___3108,tc,fc))
;
return ((function (switch__2376__auto__,c__2441__auto___3108,tc,fc){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_3100 = [null,null,null,null,null,null,null,null,null];
(statearr_3100[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_3100[(1)] = (1));

return statearr_3100;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_3079){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_3079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e3101){if((e3101 instanceof Object)){
var ex__2380__auto__ = e3101;
var statearr_3102_3123 = state_3079;
(statearr_3102_3123[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3124 = state_3079;
state_3079 = G__3124;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_3079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_3079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___3108,tc,fc))
})();
var state__2443__auto__ = (function (){var statearr_3103 = f__2442__auto__.call(null);
(statearr_3103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___3108);

return statearr_3103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___3108,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto__){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto__){
return (function (state_3171){
var state_val_3172 = (state_3171[(1)]);
if((state_val_3172 === (1))){
var inst_3157 = init;
var state_3171__$1 = (function (){var statearr_3173 = state_3171;
(statearr_3173[(7)] = inst_3157);

return statearr_3173;
})();
var statearr_3174_3189 = state_3171__$1;
(statearr_3174_3189[(2)] = null);

(statearr_3174_3189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3172 === (2))){
var state_3171__$1 = state_3171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(4),ch);
} else {
if((state_val_3172 === (3))){
var inst_3169 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3171__$1,inst_3169);
} else {
if((state_val_3172 === (4))){
var inst_3160 = (state_3171[(8)]);
var inst_3160__$1 = (state_3171[(2)]);
var inst_3161 = (inst_3160__$1 == null);
var state_3171__$1 = (function (){var statearr_3175 = state_3171;
(statearr_3175[(8)] = inst_3160__$1);

return statearr_3175;
})();
if(cljs.core.truth_(inst_3161)){
var statearr_3176_3190 = state_3171__$1;
(statearr_3176_3190[(1)] = (5));

} else {
var statearr_3177_3191 = state_3171__$1;
(statearr_3177_3191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3172 === (5))){
var inst_3157 = (state_3171[(7)]);
var state_3171__$1 = state_3171;
var statearr_3178_3192 = state_3171__$1;
(statearr_3178_3192[(2)] = inst_3157);

(statearr_3178_3192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3172 === (6))){
var inst_3157 = (state_3171[(7)]);
var inst_3160 = (state_3171[(8)]);
var inst_3164 = f.call(null,inst_3157,inst_3160);
var inst_3157__$1 = inst_3164;
var state_3171__$1 = (function (){var statearr_3179 = state_3171;
(statearr_3179[(7)] = inst_3157__$1);

return statearr_3179;
})();
var statearr_3180_3193 = state_3171__$1;
(statearr_3180_3193[(2)] = null);

(statearr_3180_3193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3172 === (7))){
var inst_3167 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
var statearr_3181_3194 = state_3171__$1;
(statearr_3181_3194[(2)] = inst_3167);

(statearr_3181_3194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__2441__auto__))
;
return ((function (switch__2376__auto__,c__2441__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2377__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2377__auto____0 = (function (){
var statearr_3185 = [null,null,null,null,null,null,null,null,null];
(statearr_3185[(0)] = cljs$core$async$reduce_$_state_machine__2377__auto__);

(statearr_3185[(1)] = (1));

return statearr_3185;
});
var cljs$core$async$reduce_$_state_machine__2377__auto____1 = (function (state_3171){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_3171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e3186){if((e3186 instanceof Object)){
var ex__2380__auto__ = e3186;
var statearr_3187_3195 = state_3171;
(statearr_3187_3195[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3196 = state_3171;
state_3171 = G__3196;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2377__auto__ = function(state_3171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2377__auto____1.call(this,state_3171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2377__auto____0;
cljs$core$async$reduce_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2377__auto____1;
return cljs$core$async$reduce_$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto__))
})();
var state__2443__auto__ = (function (){var statearr_3188 = f__2442__auto__.call(null);
(statearr_3188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto__);

return statearr_3188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto__))
);

return c__2441__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args3197 = [];
var len__3300__auto___3249 = arguments.length;
var i__3301__auto___3250 = (0);
while(true){
if((i__3301__auto___3250 < len__3300__auto___3249)){
args3197.push((arguments[i__3301__auto___3250]));

var G__3251 = (i__3301__auto___3250 + (1));
i__3301__auto___3250 = G__3251;
continue;
} else {
}
break;
}

var G__3199 = args3197.length;
switch (G__3199) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3197.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto__){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto__){
return (function (state_3224){
var state_val_3225 = (state_3224[(1)]);
if((state_val_3225 === (7))){
var inst_3206 = (state_3224[(2)]);
var state_3224__$1 = state_3224;
var statearr_3226_3253 = state_3224__$1;
(statearr_3226_3253[(2)] = inst_3206);

(statearr_3226_3253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (1))){
var inst_3200 = cljs.core.seq.call(null,coll);
var inst_3201 = inst_3200;
var state_3224__$1 = (function (){var statearr_3227 = state_3224;
(statearr_3227[(7)] = inst_3201);

return statearr_3227;
})();
var statearr_3228_3254 = state_3224__$1;
(statearr_3228_3254[(2)] = null);

(statearr_3228_3254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (4))){
var inst_3201 = (state_3224[(7)]);
var inst_3204 = cljs.core.first.call(null,inst_3201);
var state_3224__$1 = state_3224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3224__$1,(7),ch,inst_3204);
} else {
if((state_val_3225 === (13))){
var inst_3218 = (state_3224[(2)]);
var state_3224__$1 = state_3224;
var statearr_3229_3255 = state_3224__$1;
(statearr_3229_3255[(2)] = inst_3218);

(statearr_3229_3255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (6))){
var inst_3209 = (state_3224[(2)]);
var state_3224__$1 = state_3224;
if(cljs.core.truth_(inst_3209)){
var statearr_3230_3256 = state_3224__$1;
(statearr_3230_3256[(1)] = (8));

} else {
var statearr_3231_3257 = state_3224__$1;
(statearr_3231_3257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (3))){
var inst_3222 = (state_3224[(2)]);
var state_3224__$1 = state_3224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3224__$1,inst_3222);
} else {
if((state_val_3225 === (12))){
var state_3224__$1 = state_3224;
var statearr_3232_3258 = state_3224__$1;
(statearr_3232_3258[(2)] = null);

(statearr_3232_3258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (2))){
var inst_3201 = (state_3224[(7)]);
var state_3224__$1 = state_3224;
if(cljs.core.truth_(inst_3201)){
var statearr_3233_3259 = state_3224__$1;
(statearr_3233_3259[(1)] = (4));

} else {
var statearr_3234_3260 = state_3224__$1;
(statearr_3234_3260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (11))){
var inst_3215 = cljs.core.async.close_BANG_.call(null,ch);
var state_3224__$1 = state_3224;
var statearr_3235_3261 = state_3224__$1;
(statearr_3235_3261[(2)] = inst_3215);

(statearr_3235_3261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (9))){
var state_3224__$1 = state_3224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3236_3262 = state_3224__$1;
(statearr_3236_3262[(1)] = (11));

} else {
var statearr_3237_3263 = state_3224__$1;
(statearr_3237_3263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (5))){
var inst_3201 = (state_3224[(7)]);
var state_3224__$1 = state_3224;
var statearr_3238_3264 = state_3224__$1;
(statearr_3238_3264[(2)] = inst_3201);

(statearr_3238_3264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (10))){
var inst_3220 = (state_3224[(2)]);
var state_3224__$1 = state_3224;
var statearr_3239_3265 = state_3224__$1;
(statearr_3239_3265[(2)] = inst_3220);

(statearr_3239_3265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3225 === (8))){
var inst_3201 = (state_3224[(7)]);
var inst_3211 = cljs.core.next.call(null,inst_3201);
var inst_3201__$1 = inst_3211;
var state_3224__$1 = (function (){var statearr_3240 = state_3224;
(statearr_3240[(7)] = inst_3201__$1);

return statearr_3240;
})();
var statearr_3241_3266 = state_3224__$1;
(statearr_3241_3266[(2)] = null);

(statearr_3241_3266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto__))
;
return ((function (switch__2376__auto__,c__2441__auto__){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_3245 = [null,null,null,null,null,null,null,null];
(statearr_3245[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_3245[(1)] = (1));

return statearr_3245;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_3224){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_3224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e3246){if((e3246 instanceof Object)){
var ex__2380__auto__ = e3246;
var statearr_3247_3267 = state_3224;
(statearr_3247_3267[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3268 = state_3224;
state_3224 = G__3268;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_3224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_3224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto__))
})();
var state__2443__auto__ = (function (){var statearr_3248 = f__2442__auto__.call(null);
(statearr_3248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto__);

return statearr_3248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto__))
);

return c__2441__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3053__auto__ = (((_ == null))?null:_);
var m__3054__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,_);
} else {
var m__3054__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__3054__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,ch);
} else {
var m__3054__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m);
} else {
var m__3054__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t3494 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3494 = (function (mult,ch,cs,meta3495){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta3495 = meta3495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3496,meta3495__$1){
var self__ = this;
var _3496__$1 = this;
return (new cljs.core.async.t3494(self__.mult,self__.ch,self__.cs,meta3495__$1));
});})(cs))
;

cljs.core.async.t3494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3496){
var self__ = this;
var _3496__$1 = this;
return self__.meta3495;
});})(cs))
;

cljs.core.async.t3494.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t3494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t3494.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t3494.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t3494.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t3494.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t3494.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3495","meta3495",1488747118,null)], null);
});})(cs))
;

cljs.core.async.t3494.cljs$lang$type = true;

cljs.core.async.t3494.cljs$lang$ctorStr = "cljs.core.async/t3494";

cljs.core.async.t3494.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3494");
});})(cs))
;

cljs.core.async.__GT_t3494 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t3494(mult__$1,ch__$1,cs__$1,meta3495){
return (new cljs.core.async.t3494(mult__$1,ch__$1,cs__$1,meta3495));
});})(cs))
;

}

return (new cljs.core.async.t3494(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__2441__auto___3715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___3715,cs,m,dchan,dctr,done){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___3715,cs,m,dchan,dctr,done){
return (function (state_3627){
var state_val_3628 = (state_3627[(1)]);
if((state_val_3628 === (7))){
var inst_3623 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3629_3716 = state_3627__$1;
(statearr_3629_3716[(2)] = inst_3623);

(statearr_3629_3716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (20))){
var inst_3528 = (state_3627[(7)]);
var inst_3538 = cljs.core.first.call(null,inst_3528);
var inst_3539 = cljs.core.nth.call(null,inst_3538,(0),null);
var inst_3540 = cljs.core.nth.call(null,inst_3538,(1),null);
var state_3627__$1 = (function (){var statearr_3630 = state_3627;
(statearr_3630[(8)] = inst_3539);

return statearr_3630;
})();
if(cljs.core.truth_(inst_3540)){
var statearr_3631_3717 = state_3627__$1;
(statearr_3631_3717[(1)] = (22));

} else {
var statearr_3632_3718 = state_3627__$1;
(statearr_3632_3718[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (27))){
var inst_3570 = (state_3627[(9)]);
var inst_3575 = (state_3627[(10)]);
var inst_3499 = (state_3627[(11)]);
var inst_3568 = (state_3627[(12)]);
var inst_3575__$1 = cljs.core._nth.call(null,inst_3568,inst_3570);
var inst_3576 = cljs.core.async.put_BANG_.call(null,inst_3575__$1,inst_3499,done);
var state_3627__$1 = (function (){var statearr_3633 = state_3627;
(statearr_3633[(10)] = inst_3575__$1);

return statearr_3633;
})();
if(cljs.core.truth_(inst_3576)){
var statearr_3634_3719 = state_3627__$1;
(statearr_3634_3719[(1)] = (30));

} else {
var statearr_3635_3720 = state_3627__$1;
(statearr_3635_3720[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (1))){
var state_3627__$1 = state_3627;
var statearr_3636_3721 = state_3627__$1;
(statearr_3636_3721[(2)] = null);

(statearr_3636_3721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (24))){
var inst_3528 = (state_3627[(7)]);
var inst_3545 = (state_3627[(2)]);
var inst_3546 = cljs.core.next.call(null,inst_3528);
var inst_3508 = inst_3546;
var inst_3509 = null;
var inst_3510 = (0);
var inst_3511 = (0);
var state_3627__$1 = (function (){var statearr_3637 = state_3627;
(statearr_3637[(13)] = inst_3509);

(statearr_3637[(14)] = inst_3508);

(statearr_3637[(15)] = inst_3545);

(statearr_3637[(16)] = inst_3510);

(statearr_3637[(17)] = inst_3511);

return statearr_3637;
})();
var statearr_3638_3722 = state_3627__$1;
(statearr_3638_3722[(2)] = null);

(statearr_3638_3722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (39))){
var state_3627__$1 = state_3627;
var statearr_3642_3723 = state_3627__$1;
(statearr_3642_3723[(2)] = null);

(statearr_3642_3723[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (4))){
var inst_3499 = (state_3627[(11)]);
var inst_3499__$1 = (state_3627[(2)]);
var inst_3500 = (inst_3499__$1 == null);
var state_3627__$1 = (function (){var statearr_3643 = state_3627;
(statearr_3643[(11)] = inst_3499__$1);

return statearr_3643;
})();
if(cljs.core.truth_(inst_3500)){
var statearr_3644_3724 = state_3627__$1;
(statearr_3644_3724[(1)] = (5));

} else {
var statearr_3645_3725 = state_3627__$1;
(statearr_3645_3725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (15))){
var inst_3509 = (state_3627[(13)]);
var inst_3508 = (state_3627[(14)]);
var inst_3510 = (state_3627[(16)]);
var inst_3511 = (state_3627[(17)]);
var inst_3524 = (state_3627[(2)]);
var inst_3525 = (inst_3511 + (1));
var tmp3639 = inst_3509;
var tmp3640 = inst_3508;
var tmp3641 = inst_3510;
var inst_3508__$1 = tmp3640;
var inst_3509__$1 = tmp3639;
var inst_3510__$1 = tmp3641;
var inst_3511__$1 = inst_3525;
var state_3627__$1 = (function (){var statearr_3646 = state_3627;
(statearr_3646[(13)] = inst_3509__$1);

(statearr_3646[(14)] = inst_3508__$1);

(statearr_3646[(18)] = inst_3524);

(statearr_3646[(16)] = inst_3510__$1);

(statearr_3646[(17)] = inst_3511__$1);

return statearr_3646;
})();
var statearr_3647_3726 = state_3627__$1;
(statearr_3647_3726[(2)] = null);

(statearr_3647_3726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (21))){
var inst_3549 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3651_3727 = state_3627__$1;
(statearr_3651_3727[(2)] = inst_3549);

(statearr_3651_3727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (31))){
var inst_3575 = (state_3627[(10)]);
var inst_3579 = done.call(null,null);
var inst_3580 = cljs.core.async.untap_STAR_.call(null,m,inst_3575);
var state_3627__$1 = (function (){var statearr_3652 = state_3627;
(statearr_3652[(19)] = inst_3579);

return statearr_3652;
})();
var statearr_3653_3728 = state_3627__$1;
(statearr_3653_3728[(2)] = inst_3580);

(statearr_3653_3728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (32))){
var inst_3567 = (state_3627[(20)]);
var inst_3570 = (state_3627[(9)]);
var inst_3569 = (state_3627[(21)]);
var inst_3568 = (state_3627[(12)]);
var inst_3582 = (state_3627[(2)]);
var inst_3583 = (inst_3570 + (1));
var tmp3648 = inst_3567;
var tmp3649 = inst_3569;
var tmp3650 = inst_3568;
var inst_3567__$1 = tmp3648;
var inst_3568__$1 = tmp3650;
var inst_3569__$1 = tmp3649;
var inst_3570__$1 = inst_3583;
var state_3627__$1 = (function (){var statearr_3654 = state_3627;
(statearr_3654[(20)] = inst_3567__$1);

(statearr_3654[(9)] = inst_3570__$1);

(statearr_3654[(22)] = inst_3582);

(statearr_3654[(21)] = inst_3569__$1);

(statearr_3654[(12)] = inst_3568__$1);

return statearr_3654;
})();
var statearr_3655_3729 = state_3627__$1;
(statearr_3655_3729[(2)] = null);

(statearr_3655_3729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (40))){
var inst_3595 = (state_3627[(23)]);
var inst_3599 = done.call(null,null);
var inst_3600 = cljs.core.async.untap_STAR_.call(null,m,inst_3595);
var state_3627__$1 = (function (){var statearr_3656 = state_3627;
(statearr_3656[(24)] = inst_3599);

return statearr_3656;
})();
var statearr_3657_3730 = state_3627__$1;
(statearr_3657_3730[(2)] = inst_3600);

(statearr_3657_3730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (33))){
var inst_3586 = (state_3627[(25)]);
var inst_3588 = cljs.core.chunked_seq_QMARK_.call(null,inst_3586);
var state_3627__$1 = state_3627;
if(inst_3588){
var statearr_3658_3731 = state_3627__$1;
(statearr_3658_3731[(1)] = (36));

} else {
var statearr_3659_3732 = state_3627__$1;
(statearr_3659_3732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (13))){
var inst_3518 = (state_3627[(26)]);
var inst_3521 = cljs.core.async.close_BANG_.call(null,inst_3518);
var state_3627__$1 = state_3627;
var statearr_3660_3733 = state_3627__$1;
(statearr_3660_3733[(2)] = inst_3521);

(statearr_3660_3733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (22))){
var inst_3539 = (state_3627[(8)]);
var inst_3542 = cljs.core.async.close_BANG_.call(null,inst_3539);
var state_3627__$1 = state_3627;
var statearr_3661_3734 = state_3627__$1;
(statearr_3661_3734[(2)] = inst_3542);

(statearr_3661_3734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (36))){
var inst_3586 = (state_3627[(25)]);
var inst_3590 = cljs.core.chunk_first.call(null,inst_3586);
var inst_3591 = cljs.core.chunk_rest.call(null,inst_3586);
var inst_3592 = cljs.core.count.call(null,inst_3590);
var inst_3567 = inst_3591;
var inst_3568 = inst_3590;
var inst_3569 = inst_3592;
var inst_3570 = (0);
var state_3627__$1 = (function (){var statearr_3662 = state_3627;
(statearr_3662[(20)] = inst_3567);

(statearr_3662[(9)] = inst_3570);

(statearr_3662[(21)] = inst_3569);

(statearr_3662[(12)] = inst_3568);

return statearr_3662;
})();
var statearr_3663_3735 = state_3627__$1;
(statearr_3663_3735[(2)] = null);

(statearr_3663_3735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (41))){
var inst_3586 = (state_3627[(25)]);
var inst_3602 = (state_3627[(2)]);
var inst_3603 = cljs.core.next.call(null,inst_3586);
var inst_3567 = inst_3603;
var inst_3568 = null;
var inst_3569 = (0);
var inst_3570 = (0);
var state_3627__$1 = (function (){var statearr_3664 = state_3627;
(statearr_3664[(20)] = inst_3567);

(statearr_3664[(9)] = inst_3570);

(statearr_3664[(21)] = inst_3569);

(statearr_3664[(27)] = inst_3602);

(statearr_3664[(12)] = inst_3568);

return statearr_3664;
})();
var statearr_3665_3736 = state_3627__$1;
(statearr_3665_3736[(2)] = null);

(statearr_3665_3736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (43))){
var state_3627__$1 = state_3627;
var statearr_3666_3737 = state_3627__$1;
(statearr_3666_3737[(2)] = null);

(statearr_3666_3737[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (29))){
var inst_3611 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3667_3738 = state_3627__$1;
(statearr_3667_3738[(2)] = inst_3611);

(statearr_3667_3738[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (44))){
var inst_3620 = (state_3627[(2)]);
var state_3627__$1 = (function (){var statearr_3668 = state_3627;
(statearr_3668[(28)] = inst_3620);

return statearr_3668;
})();
var statearr_3669_3739 = state_3627__$1;
(statearr_3669_3739[(2)] = null);

(statearr_3669_3739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (6))){
var inst_3559 = (state_3627[(29)]);
var inst_3558 = cljs.core.deref.call(null,cs);
var inst_3559__$1 = cljs.core.keys.call(null,inst_3558);
var inst_3560 = cljs.core.count.call(null,inst_3559__$1);
var inst_3561 = cljs.core.reset_BANG_.call(null,dctr,inst_3560);
var inst_3566 = cljs.core.seq.call(null,inst_3559__$1);
var inst_3567 = inst_3566;
var inst_3568 = null;
var inst_3569 = (0);
var inst_3570 = (0);
var state_3627__$1 = (function (){var statearr_3670 = state_3627;
(statearr_3670[(20)] = inst_3567);

(statearr_3670[(9)] = inst_3570);

(statearr_3670[(21)] = inst_3569);

(statearr_3670[(30)] = inst_3561);

(statearr_3670[(29)] = inst_3559__$1);

(statearr_3670[(12)] = inst_3568);

return statearr_3670;
})();
var statearr_3671_3740 = state_3627__$1;
(statearr_3671_3740[(2)] = null);

(statearr_3671_3740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (28))){
var inst_3586 = (state_3627[(25)]);
var inst_3567 = (state_3627[(20)]);
var inst_3586__$1 = cljs.core.seq.call(null,inst_3567);
var state_3627__$1 = (function (){var statearr_3672 = state_3627;
(statearr_3672[(25)] = inst_3586__$1);

return statearr_3672;
})();
if(inst_3586__$1){
var statearr_3673_3741 = state_3627__$1;
(statearr_3673_3741[(1)] = (33));

} else {
var statearr_3674_3742 = state_3627__$1;
(statearr_3674_3742[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (25))){
var inst_3570 = (state_3627[(9)]);
var inst_3569 = (state_3627[(21)]);
var inst_3572 = (inst_3570 < inst_3569);
var inst_3573 = inst_3572;
var state_3627__$1 = state_3627;
if(cljs.core.truth_(inst_3573)){
var statearr_3675_3743 = state_3627__$1;
(statearr_3675_3743[(1)] = (27));

} else {
var statearr_3676_3744 = state_3627__$1;
(statearr_3676_3744[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (34))){
var state_3627__$1 = state_3627;
var statearr_3677_3745 = state_3627__$1;
(statearr_3677_3745[(2)] = null);

(statearr_3677_3745[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (17))){
var state_3627__$1 = state_3627;
var statearr_3678_3746 = state_3627__$1;
(statearr_3678_3746[(2)] = null);

(statearr_3678_3746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (3))){
var inst_3625 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3627__$1,inst_3625);
} else {
if((state_val_3628 === (12))){
var inst_3554 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3679_3747 = state_3627__$1;
(statearr_3679_3747[(2)] = inst_3554);

(statearr_3679_3747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (2))){
var state_3627__$1 = state_3627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3627__$1,(4),ch);
} else {
if((state_val_3628 === (23))){
var state_3627__$1 = state_3627;
var statearr_3680_3748 = state_3627__$1;
(statearr_3680_3748[(2)] = null);

(statearr_3680_3748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (35))){
var inst_3609 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3681_3749 = state_3627__$1;
(statearr_3681_3749[(2)] = inst_3609);

(statearr_3681_3749[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (19))){
var inst_3528 = (state_3627[(7)]);
var inst_3532 = cljs.core.chunk_first.call(null,inst_3528);
var inst_3533 = cljs.core.chunk_rest.call(null,inst_3528);
var inst_3534 = cljs.core.count.call(null,inst_3532);
var inst_3508 = inst_3533;
var inst_3509 = inst_3532;
var inst_3510 = inst_3534;
var inst_3511 = (0);
var state_3627__$1 = (function (){var statearr_3682 = state_3627;
(statearr_3682[(13)] = inst_3509);

(statearr_3682[(14)] = inst_3508);

(statearr_3682[(16)] = inst_3510);

(statearr_3682[(17)] = inst_3511);

return statearr_3682;
})();
var statearr_3683_3750 = state_3627__$1;
(statearr_3683_3750[(2)] = null);

(statearr_3683_3750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (11))){
var inst_3508 = (state_3627[(14)]);
var inst_3528 = (state_3627[(7)]);
var inst_3528__$1 = cljs.core.seq.call(null,inst_3508);
var state_3627__$1 = (function (){var statearr_3684 = state_3627;
(statearr_3684[(7)] = inst_3528__$1);

return statearr_3684;
})();
if(inst_3528__$1){
var statearr_3685_3751 = state_3627__$1;
(statearr_3685_3751[(1)] = (16));

} else {
var statearr_3686_3752 = state_3627__$1;
(statearr_3686_3752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (9))){
var inst_3556 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3687_3753 = state_3627__$1;
(statearr_3687_3753[(2)] = inst_3556);

(statearr_3687_3753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (5))){
var inst_3506 = cljs.core.deref.call(null,cs);
var inst_3507 = cljs.core.seq.call(null,inst_3506);
var inst_3508 = inst_3507;
var inst_3509 = null;
var inst_3510 = (0);
var inst_3511 = (0);
var state_3627__$1 = (function (){var statearr_3688 = state_3627;
(statearr_3688[(13)] = inst_3509);

(statearr_3688[(14)] = inst_3508);

(statearr_3688[(16)] = inst_3510);

(statearr_3688[(17)] = inst_3511);

return statearr_3688;
})();
var statearr_3689_3754 = state_3627__$1;
(statearr_3689_3754[(2)] = null);

(statearr_3689_3754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (14))){
var state_3627__$1 = state_3627;
var statearr_3690_3755 = state_3627__$1;
(statearr_3690_3755[(2)] = null);

(statearr_3690_3755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (45))){
var inst_3617 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3691_3756 = state_3627__$1;
(statearr_3691_3756[(2)] = inst_3617);

(statearr_3691_3756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (26))){
var inst_3559 = (state_3627[(29)]);
var inst_3613 = (state_3627[(2)]);
var inst_3614 = cljs.core.seq.call(null,inst_3559);
var state_3627__$1 = (function (){var statearr_3692 = state_3627;
(statearr_3692[(31)] = inst_3613);

return statearr_3692;
})();
if(inst_3614){
var statearr_3693_3757 = state_3627__$1;
(statearr_3693_3757[(1)] = (42));

} else {
var statearr_3694_3758 = state_3627__$1;
(statearr_3694_3758[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (16))){
var inst_3528 = (state_3627[(7)]);
var inst_3530 = cljs.core.chunked_seq_QMARK_.call(null,inst_3528);
var state_3627__$1 = state_3627;
if(inst_3530){
var statearr_3695_3759 = state_3627__$1;
(statearr_3695_3759[(1)] = (19));

} else {
var statearr_3696_3760 = state_3627__$1;
(statearr_3696_3760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (38))){
var inst_3606 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3697_3761 = state_3627__$1;
(statearr_3697_3761[(2)] = inst_3606);

(statearr_3697_3761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (30))){
var state_3627__$1 = state_3627;
var statearr_3698_3762 = state_3627__$1;
(statearr_3698_3762[(2)] = null);

(statearr_3698_3762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (10))){
var inst_3509 = (state_3627[(13)]);
var inst_3511 = (state_3627[(17)]);
var inst_3517 = cljs.core._nth.call(null,inst_3509,inst_3511);
var inst_3518 = cljs.core.nth.call(null,inst_3517,(0),null);
var inst_3519 = cljs.core.nth.call(null,inst_3517,(1),null);
var state_3627__$1 = (function (){var statearr_3699 = state_3627;
(statearr_3699[(26)] = inst_3518);

return statearr_3699;
})();
if(cljs.core.truth_(inst_3519)){
var statearr_3700_3763 = state_3627__$1;
(statearr_3700_3763[(1)] = (13));

} else {
var statearr_3701_3764 = state_3627__$1;
(statearr_3701_3764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (18))){
var inst_3552 = (state_3627[(2)]);
var state_3627__$1 = state_3627;
var statearr_3702_3765 = state_3627__$1;
(statearr_3702_3765[(2)] = inst_3552);

(statearr_3702_3765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (42))){
var state_3627__$1 = state_3627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3627__$1,(45),dchan);
} else {
if((state_val_3628 === (37))){
var inst_3586 = (state_3627[(25)]);
var inst_3595 = (state_3627[(23)]);
var inst_3499 = (state_3627[(11)]);
var inst_3595__$1 = cljs.core.first.call(null,inst_3586);
var inst_3596 = cljs.core.async.put_BANG_.call(null,inst_3595__$1,inst_3499,done);
var state_3627__$1 = (function (){var statearr_3703 = state_3627;
(statearr_3703[(23)] = inst_3595__$1);

return statearr_3703;
})();
if(cljs.core.truth_(inst_3596)){
var statearr_3704_3766 = state_3627__$1;
(statearr_3704_3766[(1)] = (39));

} else {
var statearr_3705_3767 = state_3627__$1;
(statearr_3705_3767[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3628 === (8))){
var inst_3510 = (state_3627[(16)]);
var inst_3511 = (state_3627[(17)]);
var inst_3513 = (inst_3511 < inst_3510);
var inst_3514 = inst_3513;
var state_3627__$1 = state_3627;
if(cljs.core.truth_(inst_3514)){
var statearr_3706_3768 = state_3627__$1;
(statearr_3706_3768[(1)] = (10));

} else {
var statearr_3707_3769 = state_3627__$1;
(statearr_3707_3769[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___3715,cs,m,dchan,dctr,done))
;
return ((function (switch__2376__auto__,c__2441__auto___3715,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2377__auto__ = null;
var cljs$core$async$mult_$_state_machine__2377__auto____0 = (function (){
var statearr_3711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3711[(0)] = cljs$core$async$mult_$_state_machine__2377__auto__);

(statearr_3711[(1)] = (1));

return statearr_3711;
});
var cljs$core$async$mult_$_state_machine__2377__auto____1 = (function (state_3627){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_3627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e3712){if((e3712 instanceof Object)){
var ex__2380__auto__ = e3712;
var statearr_3713_3770 = state_3627;
(statearr_3713_3770[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3771 = state_3627;
state_3627 = G__3771;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2377__auto__ = function(state_3627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2377__auto____1.call(this,state_3627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2377__auto____0;
cljs$core$async$mult_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2377__auto____1;
return cljs$core$async$mult_$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___3715,cs,m,dchan,dctr,done))
})();
var state__2443__auto__ = (function (){var statearr_3714 = f__2442__auto__.call(null);
(statearr_3714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___3715);

return statearr_3714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___3715,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args3772 = [];
var len__3300__auto___3775 = arguments.length;
var i__3301__auto___3776 = (0);
while(true){
if((i__3301__auto___3776 < len__3300__auto___3775)){
args3772.push((arguments[i__3301__auto___3776]));

var G__3777 = (i__3301__auto___3776 + (1));
i__3301__auto___3776 = G__3777;
continue;
} else {
}
break;
}

var G__3774 = args3772.length;
switch (G__3774) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3772.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,ch);
} else {
var m__3054__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,ch);
} else {
var m__3054__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m);
} else {
var m__3054__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,state_map);
} else {
var m__3054__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3053__auto__ = (((m == null))?null:m);
var m__3054__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,m,mode);
} else {
var m__3054__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__3303__auto__ = [];
var len__3300__auto___3791 = arguments.length;
var i__3301__auto___3792 = (0);
while(true){
if((i__3301__auto___3792 < len__3300__auto___3791)){
args__3303__auto__.push((arguments[i__3301__auto___3792]));

var G__3793 = (i__3301__auto___3792 + (1));
i__3301__auto___3792 = G__3793;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((3) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3785){
var map__3786 = p__3785;
var map__3786__$1 = ((((!((map__3786 == null)))?((((map__3786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3786):map__3786);
var opts = map__3786__$1;
var statearr_3788_3794 = state;
(statearr_3788_3794[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__3786,map__3786__$1,opts){
return (function (val){
var statearr_3789_3795 = state;
(statearr_3789_3795[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3786,map__3786__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_3790_3796 = state;
(statearr_3790_3796[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3781){
var G__3782 = cljs.core.first.call(null,seq3781);
var seq3781__$1 = cljs.core.next.call(null,seq3781);
var G__3783 = cljs.core.first.call(null,seq3781__$1);
var seq3781__$2 = cljs.core.next.call(null,seq3781__$1);
var G__3784 = cljs.core.first.call(null,seq3781__$2);
var seq3781__$3 = cljs.core.next.call(null,seq3781__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3782,G__3783,G__3784,seq3781__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t3960 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3960 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3961){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3961 = meta3961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3962,meta3961__$1){
var self__ = this;
var _3962__$1 = this;
return (new cljs.core.async.t3960(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3961__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3962){
var self__ = this;
var _3962__$1 = this;
return self__.meta3961;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t3960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta3961","meta3961",297626961,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t3960.cljs$lang$type = true;

cljs.core.async.t3960.cljs$lang$ctorStr = "cljs.core.async/t3960";

cljs.core.async.t3960.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3960");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t3960 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t3960(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3961){
return (new cljs.core.async.t3960(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3961));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t3960(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2441__auto___4123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4060){
var state_val_4061 = (state_4060[(1)]);
if((state_val_4061 === (7))){
var inst_3978 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
var statearr_4062_4124 = state_4060__$1;
(statearr_4062_4124[(2)] = inst_3978);

(statearr_4062_4124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (20))){
var inst_3990 = (state_4060[(7)]);
var state_4060__$1 = state_4060;
var statearr_4063_4125 = state_4060__$1;
(statearr_4063_4125[(2)] = inst_3990);

(statearr_4063_4125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (27))){
var state_4060__$1 = state_4060;
var statearr_4064_4126 = state_4060__$1;
(statearr_4064_4126[(2)] = null);

(statearr_4064_4126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (1))){
var inst_3966 = (state_4060[(8)]);
var inst_3966__$1 = calc_state.call(null);
var inst_3968 = (inst_3966__$1 == null);
var inst_3969 = cljs.core.not.call(null,inst_3968);
var state_4060__$1 = (function (){var statearr_4065 = state_4060;
(statearr_4065[(8)] = inst_3966__$1);

return statearr_4065;
})();
if(inst_3969){
var statearr_4066_4127 = state_4060__$1;
(statearr_4066_4127[(1)] = (2));

} else {
var statearr_4067_4128 = state_4060__$1;
(statearr_4067_4128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (24))){
var inst_4013 = (state_4060[(9)]);
var inst_4020 = (state_4060[(10)]);
var inst_4034 = (state_4060[(11)]);
var inst_4034__$1 = inst_4013.call(null,inst_4020);
var state_4060__$1 = (function (){var statearr_4068 = state_4060;
(statearr_4068[(11)] = inst_4034__$1);

return statearr_4068;
})();
if(cljs.core.truth_(inst_4034__$1)){
var statearr_4069_4129 = state_4060__$1;
(statearr_4069_4129[(1)] = (29));

} else {
var statearr_4070_4130 = state_4060__$1;
(statearr_4070_4130[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (4))){
var inst_3981 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_3981)){
var statearr_4071_4131 = state_4060__$1;
(statearr_4071_4131[(1)] = (8));

} else {
var statearr_4072_4132 = state_4060__$1;
(statearr_4072_4132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (15))){
var inst_4007 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_4007)){
var statearr_4073_4133 = state_4060__$1;
(statearr_4073_4133[(1)] = (19));

} else {
var statearr_4074_4134 = state_4060__$1;
(statearr_4074_4134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (21))){
var inst_4012 = (state_4060[(12)]);
var inst_4012__$1 = (state_4060[(2)]);
var inst_4013 = cljs.core.get.call(null,inst_4012__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4014 = cljs.core.get.call(null,inst_4012__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4015 = cljs.core.get.call(null,inst_4012__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4060__$1 = (function (){var statearr_4075 = state_4060;
(statearr_4075[(9)] = inst_4013);

(statearr_4075[(13)] = inst_4014);

(statearr_4075[(12)] = inst_4012__$1);

return statearr_4075;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4060__$1,(22),inst_4015);
} else {
if((state_val_4061 === (31))){
var inst_4042 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_4042)){
var statearr_4076_4135 = state_4060__$1;
(statearr_4076_4135[(1)] = (32));

} else {
var statearr_4077_4136 = state_4060__$1;
(statearr_4077_4136[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (32))){
var inst_4019 = (state_4060[(14)]);
var state_4060__$1 = state_4060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4060__$1,(35),out,inst_4019);
} else {
if((state_val_4061 === (33))){
var inst_4012 = (state_4060[(12)]);
var inst_3990 = inst_4012;
var state_4060__$1 = (function (){var statearr_4078 = state_4060;
(statearr_4078[(7)] = inst_3990);

return statearr_4078;
})();
var statearr_4079_4137 = state_4060__$1;
(statearr_4079_4137[(2)] = null);

(statearr_4079_4137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (13))){
var inst_3990 = (state_4060[(7)]);
var inst_3997 = inst_3990.cljs$lang$protocol_mask$partition0$;
var inst_3998 = (inst_3997 & (64));
var inst_3999 = inst_3990.cljs$core$ISeq$;
var inst_4000 = (inst_3998) || (inst_3999);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_4000)){
var statearr_4080_4138 = state_4060__$1;
(statearr_4080_4138[(1)] = (16));

} else {
var statearr_4081_4139 = state_4060__$1;
(statearr_4081_4139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (22))){
var inst_4020 = (state_4060[(10)]);
var inst_4019 = (state_4060[(14)]);
var inst_4018 = (state_4060[(2)]);
var inst_4019__$1 = cljs.core.nth.call(null,inst_4018,(0),null);
var inst_4020__$1 = cljs.core.nth.call(null,inst_4018,(1),null);
var inst_4021 = (inst_4019__$1 == null);
var inst_4022 = cljs.core._EQ_.call(null,inst_4020__$1,change);
var inst_4023 = (inst_4021) || (inst_4022);
var state_4060__$1 = (function (){var statearr_4082 = state_4060;
(statearr_4082[(10)] = inst_4020__$1);

(statearr_4082[(14)] = inst_4019__$1);

return statearr_4082;
})();
if(cljs.core.truth_(inst_4023)){
var statearr_4083_4140 = state_4060__$1;
(statearr_4083_4140[(1)] = (23));

} else {
var statearr_4084_4141 = state_4060__$1;
(statearr_4084_4141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (36))){
var inst_4012 = (state_4060[(12)]);
var inst_3990 = inst_4012;
var state_4060__$1 = (function (){var statearr_4085 = state_4060;
(statearr_4085[(7)] = inst_3990);

return statearr_4085;
})();
var statearr_4086_4142 = state_4060__$1;
(statearr_4086_4142[(2)] = null);

(statearr_4086_4142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (29))){
var inst_4034 = (state_4060[(11)]);
var state_4060__$1 = state_4060;
var statearr_4087_4143 = state_4060__$1;
(statearr_4087_4143[(2)] = inst_4034);

(statearr_4087_4143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (6))){
var state_4060__$1 = state_4060;
var statearr_4088_4144 = state_4060__$1;
(statearr_4088_4144[(2)] = false);

(statearr_4088_4144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (28))){
var inst_4030 = (state_4060[(2)]);
var inst_4031 = calc_state.call(null);
var inst_3990 = inst_4031;
var state_4060__$1 = (function (){var statearr_4089 = state_4060;
(statearr_4089[(7)] = inst_3990);

(statearr_4089[(15)] = inst_4030);

return statearr_4089;
})();
var statearr_4090_4145 = state_4060__$1;
(statearr_4090_4145[(2)] = null);

(statearr_4090_4145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (25))){
var inst_4056 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
var statearr_4091_4146 = state_4060__$1;
(statearr_4091_4146[(2)] = inst_4056);

(statearr_4091_4146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (34))){
var inst_4054 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
var statearr_4092_4147 = state_4060__$1;
(statearr_4092_4147[(2)] = inst_4054);

(statearr_4092_4147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (17))){
var state_4060__$1 = state_4060;
var statearr_4093_4148 = state_4060__$1;
(statearr_4093_4148[(2)] = false);

(statearr_4093_4148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (3))){
var state_4060__$1 = state_4060;
var statearr_4094_4149 = state_4060__$1;
(statearr_4094_4149[(2)] = false);

(statearr_4094_4149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (12))){
var inst_4058 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4060__$1,inst_4058);
} else {
if((state_val_4061 === (2))){
var inst_3966 = (state_4060[(8)]);
var inst_3971 = inst_3966.cljs$lang$protocol_mask$partition0$;
var inst_3972 = (inst_3971 & (64));
var inst_3973 = inst_3966.cljs$core$ISeq$;
var inst_3974 = (inst_3972) || (inst_3973);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_3974)){
var statearr_4095_4150 = state_4060__$1;
(statearr_4095_4150[(1)] = (5));

} else {
var statearr_4096_4151 = state_4060__$1;
(statearr_4096_4151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (23))){
var inst_4019 = (state_4060[(14)]);
var inst_4025 = (inst_4019 == null);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_4025)){
var statearr_4097_4152 = state_4060__$1;
(statearr_4097_4152[(1)] = (26));

} else {
var statearr_4098_4153 = state_4060__$1;
(statearr_4098_4153[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (35))){
var inst_4045 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
if(cljs.core.truth_(inst_4045)){
var statearr_4099_4154 = state_4060__$1;
(statearr_4099_4154[(1)] = (36));

} else {
var statearr_4100_4155 = state_4060__$1;
(statearr_4100_4155[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (19))){
var inst_3990 = (state_4060[(7)]);
var inst_4009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3990);
var state_4060__$1 = state_4060;
var statearr_4101_4156 = state_4060__$1;
(statearr_4101_4156[(2)] = inst_4009);

(statearr_4101_4156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (11))){
var inst_3990 = (state_4060[(7)]);
var inst_3994 = (inst_3990 == null);
var inst_3995 = cljs.core.not.call(null,inst_3994);
var state_4060__$1 = state_4060;
if(inst_3995){
var statearr_4102_4157 = state_4060__$1;
(statearr_4102_4157[(1)] = (13));

} else {
var statearr_4103_4158 = state_4060__$1;
(statearr_4103_4158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (9))){
var inst_3966 = (state_4060[(8)]);
var state_4060__$1 = state_4060;
var statearr_4104_4159 = state_4060__$1;
(statearr_4104_4159[(2)] = inst_3966);

(statearr_4104_4159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (5))){
var state_4060__$1 = state_4060;
var statearr_4105_4160 = state_4060__$1;
(statearr_4105_4160[(2)] = true);

(statearr_4105_4160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (14))){
var state_4060__$1 = state_4060;
var statearr_4106_4161 = state_4060__$1;
(statearr_4106_4161[(2)] = false);

(statearr_4106_4161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (26))){
var inst_4020 = (state_4060[(10)]);
var inst_4027 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4020);
var state_4060__$1 = state_4060;
var statearr_4107_4162 = state_4060__$1;
(statearr_4107_4162[(2)] = inst_4027);

(statearr_4107_4162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (16))){
var state_4060__$1 = state_4060;
var statearr_4108_4163 = state_4060__$1;
(statearr_4108_4163[(2)] = true);

(statearr_4108_4163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (38))){
var inst_4050 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
var statearr_4109_4164 = state_4060__$1;
(statearr_4109_4164[(2)] = inst_4050);

(statearr_4109_4164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (30))){
var inst_4013 = (state_4060[(9)]);
var inst_4014 = (state_4060[(13)]);
var inst_4020 = (state_4060[(10)]);
var inst_4037 = cljs.core.empty_QMARK_.call(null,inst_4013);
var inst_4038 = inst_4014.call(null,inst_4020);
var inst_4039 = cljs.core.not.call(null,inst_4038);
var inst_4040 = (inst_4037) && (inst_4039);
var state_4060__$1 = state_4060;
var statearr_4110_4165 = state_4060__$1;
(statearr_4110_4165[(2)] = inst_4040);

(statearr_4110_4165[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (10))){
var inst_3966 = (state_4060[(8)]);
var inst_3986 = (state_4060[(2)]);
var inst_3987 = cljs.core.get.call(null,inst_3986,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3988 = cljs.core.get.call(null,inst_3986,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3989 = cljs.core.get.call(null,inst_3986,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3990 = inst_3966;
var state_4060__$1 = (function (){var statearr_4111 = state_4060;
(statearr_4111[(7)] = inst_3990);

(statearr_4111[(16)] = inst_3987);

(statearr_4111[(17)] = inst_3988);

(statearr_4111[(18)] = inst_3989);

return statearr_4111;
})();
var statearr_4112_4166 = state_4060__$1;
(statearr_4112_4166[(2)] = null);

(statearr_4112_4166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (18))){
var inst_4004 = (state_4060[(2)]);
var state_4060__$1 = state_4060;
var statearr_4113_4167 = state_4060__$1;
(statearr_4113_4167[(2)] = inst_4004);

(statearr_4113_4167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (37))){
var state_4060__$1 = state_4060;
var statearr_4114_4168 = state_4060__$1;
(statearr_4114_4168[(2)] = null);

(statearr_4114_4168[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4061 === (8))){
var inst_3966 = (state_4060[(8)]);
var inst_3983 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3966);
var state_4060__$1 = state_4060;
var statearr_4115_4169 = state_4060__$1;
(statearr_4115_4169[(2)] = inst_3983);

(statearr_4115_4169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2376__auto__,c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2377__auto__ = null;
var cljs$core$async$mix_$_state_machine__2377__auto____0 = (function (){
var statearr_4119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4119[(0)] = cljs$core$async$mix_$_state_machine__2377__auto__);

(statearr_4119[(1)] = (1));

return statearr_4119;
});
var cljs$core$async$mix_$_state_machine__2377__auto____1 = (function (state_4060){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4120){if((e4120 instanceof Object)){
var ex__2380__auto__ = e4120;
var statearr_4121_4170 = state_4060;
(statearr_4121_4170[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4171 = state_4060;
state_4060 = G__4171;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2377__auto__ = function(state_4060){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2377__auto____1.call(this,state_4060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2377__auto____0;
cljs$core$async$mix_$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2377__auto____1;
return cljs$core$async$mix_$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2443__auto__ = (function (){var statearr_4122 = f__2442__auto__.call(null);
(statearr_4122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4123);

return statearr_4122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4123,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3053__auto__ = (((p == null))?null:p);
var m__3054__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__3054__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3053__auto__ = (((p == null))?null:p);
var m__3054__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,p,v,ch);
} else {
var m__3054__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args4174 = [];
var len__3300__auto___4177 = arguments.length;
var i__3301__auto___4178 = (0);
while(true){
if((i__3301__auto___4178 < len__3300__auto___4177)){
args4174.push((arguments[i__3301__auto___4178]));

var G__4179 = (i__3301__auto___4178 + (1));
i__3301__auto___4178 = G__4179;
continue;
} else {
}
break;
}

var G__4176 = args4174.length;
switch (G__4176) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4174.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3053__auto__ = (((p == null))?null:p);
var m__3054__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,p);
} else {
var m__3054__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3053__auto__ = (((p == null))?null:p);
var m__3054__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3053__auto__)]);
if(!((m__3054__auto__ == null))){
return m__3054__auto__.call(null,p,v);
} else {
var m__3054__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__3054__auto____$1 == null))){
return m__3054__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args4182 = [];
var len__3300__auto___4307 = arguments.length;
var i__3301__auto___4308 = (0);
while(true){
if((i__3301__auto___4308 < len__3300__auto___4307)){
args4182.push((arguments[i__3301__auto___4308]));

var G__4309 = (i__3301__auto___4308 + (1));
i__3301__auto___4308 = G__4309;
continue;
} else {
}
break;
}

var G__4184 = args4182.length;
switch (G__4184) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4182.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__2789__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__2789__auto__,mults){
return (function (p1__4181_SHARP_){
if(cljs.core.truth_(p1__4181_SHARP_.call(null,topic))){
return p1__4181_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4181_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2789__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t4185 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4185 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4186){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4186 = meta4186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4187,meta4186__$1){
var self__ = this;
var _4187__$1 = this;
return (new cljs.core.async.t4185(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4186__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4187){
var self__ = this;
var _4187__$1 = this;
return self__.meta4186;
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t4185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t4185.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t4185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t4185.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4186","meta4186",2058545660,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t4185.cljs$lang$type = true;

cljs.core.async.t4185.cljs$lang$ctorStr = "cljs.core.async/t4185";

cljs.core.async.t4185.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4185");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t4185 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t4185(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4186){
return (new cljs.core.async.t4185(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4186));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t4185(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2441__auto___4311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4311,mults,ensure_mult,p){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4311,mults,ensure_mult,p){
return (function (state_4259){
var state_val_4260 = (state_4259[(1)]);
if((state_val_4260 === (7))){
var inst_4255 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4261_4312 = state_4259__$1;
(statearr_4261_4312[(2)] = inst_4255);

(statearr_4261_4312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (20))){
var state_4259__$1 = state_4259;
var statearr_4262_4313 = state_4259__$1;
(statearr_4262_4313[(2)] = null);

(statearr_4262_4313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (1))){
var state_4259__$1 = state_4259;
var statearr_4263_4314 = state_4259__$1;
(statearr_4263_4314[(2)] = null);

(statearr_4263_4314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (24))){
var inst_4238 = (state_4259[(7)]);
var inst_4247 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4238);
var state_4259__$1 = state_4259;
var statearr_4264_4315 = state_4259__$1;
(statearr_4264_4315[(2)] = inst_4247);

(statearr_4264_4315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (4))){
var inst_4190 = (state_4259[(8)]);
var inst_4190__$1 = (state_4259[(2)]);
var inst_4191 = (inst_4190__$1 == null);
var state_4259__$1 = (function (){var statearr_4265 = state_4259;
(statearr_4265[(8)] = inst_4190__$1);

return statearr_4265;
})();
if(cljs.core.truth_(inst_4191)){
var statearr_4266_4316 = state_4259__$1;
(statearr_4266_4316[(1)] = (5));

} else {
var statearr_4267_4317 = state_4259__$1;
(statearr_4267_4317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (15))){
var inst_4232 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4268_4318 = state_4259__$1;
(statearr_4268_4318[(2)] = inst_4232);

(statearr_4268_4318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (21))){
var inst_4252 = (state_4259[(2)]);
var state_4259__$1 = (function (){var statearr_4269 = state_4259;
(statearr_4269[(9)] = inst_4252);

return statearr_4269;
})();
var statearr_4270_4319 = state_4259__$1;
(statearr_4270_4319[(2)] = null);

(statearr_4270_4319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (13))){
var inst_4214 = (state_4259[(10)]);
var inst_4216 = cljs.core.chunked_seq_QMARK_.call(null,inst_4214);
var state_4259__$1 = state_4259;
if(inst_4216){
var statearr_4271_4320 = state_4259__$1;
(statearr_4271_4320[(1)] = (16));

} else {
var statearr_4272_4321 = state_4259__$1;
(statearr_4272_4321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (22))){
var inst_4244 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
if(cljs.core.truth_(inst_4244)){
var statearr_4273_4322 = state_4259__$1;
(statearr_4273_4322[(1)] = (23));

} else {
var statearr_4274_4323 = state_4259__$1;
(statearr_4274_4323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (6))){
var inst_4240 = (state_4259[(11)]);
var inst_4238 = (state_4259[(7)]);
var inst_4190 = (state_4259[(8)]);
var inst_4238__$1 = topic_fn.call(null,inst_4190);
var inst_4239 = cljs.core.deref.call(null,mults);
var inst_4240__$1 = cljs.core.get.call(null,inst_4239,inst_4238__$1);
var state_4259__$1 = (function (){var statearr_4275 = state_4259;
(statearr_4275[(11)] = inst_4240__$1);

(statearr_4275[(7)] = inst_4238__$1);

return statearr_4275;
})();
if(cljs.core.truth_(inst_4240__$1)){
var statearr_4276_4324 = state_4259__$1;
(statearr_4276_4324[(1)] = (19));

} else {
var statearr_4277_4325 = state_4259__$1;
(statearr_4277_4325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (25))){
var inst_4249 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4278_4326 = state_4259__$1;
(statearr_4278_4326[(2)] = inst_4249);

(statearr_4278_4326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (17))){
var inst_4214 = (state_4259[(10)]);
var inst_4223 = cljs.core.first.call(null,inst_4214);
var inst_4224 = cljs.core.async.muxch_STAR_.call(null,inst_4223);
var inst_4225 = cljs.core.async.close_BANG_.call(null,inst_4224);
var inst_4226 = cljs.core.next.call(null,inst_4214);
var inst_4200 = inst_4226;
var inst_4201 = null;
var inst_4202 = (0);
var inst_4203 = (0);
var state_4259__$1 = (function (){var statearr_4279 = state_4259;
(statearr_4279[(12)] = inst_4201);

(statearr_4279[(13)] = inst_4202);

(statearr_4279[(14)] = inst_4225);

(statearr_4279[(15)] = inst_4203);

(statearr_4279[(16)] = inst_4200);

return statearr_4279;
})();
var statearr_4280_4327 = state_4259__$1;
(statearr_4280_4327[(2)] = null);

(statearr_4280_4327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (3))){
var inst_4257 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4259__$1,inst_4257);
} else {
if((state_val_4260 === (12))){
var inst_4234 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4281_4328 = state_4259__$1;
(statearr_4281_4328[(2)] = inst_4234);

(statearr_4281_4328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (2))){
var state_4259__$1 = state_4259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4259__$1,(4),ch);
} else {
if((state_val_4260 === (23))){
var state_4259__$1 = state_4259;
var statearr_4282_4329 = state_4259__$1;
(statearr_4282_4329[(2)] = null);

(statearr_4282_4329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (19))){
var inst_4240 = (state_4259[(11)]);
var inst_4190 = (state_4259[(8)]);
var inst_4242 = cljs.core.async.muxch_STAR_.call(null,inst_4240);
var state_4259__$1 = state_4259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4259__$1,(22),inst_4242,inst_4190);
} else {
if((state_val_4260 === (11))){
var inst_4214 = (state_4259[(10)]);
var inst_4200 = (state_4259[(16)]);
var inst_4214__$1 = cljs.core.seq.call(null,inst_4200);
var state_4259__$1 = (function (){var statearr_4283 = state_4259;
(statearr_4283[(10)] = inst_4214__$1);

return statearr_4283;
})();
if(inst_4214__$1){
var statearr_4284_4330 = state_4259__$1;
(statearr_4284_4330[(1)] = (13));

} else {
var statearr_4285_4331 = state_4259__$1;
(statearr_4285_4331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (9))){
var inst_4236 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4286_4332 = state_4259__$1;
(statearr_4286_4332[(2)] = inst_4236);

(statearr_4286_4332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (5))){
var inst_4197 = cljs.core.deref.call(null,mults);
var inst_4198 = cljs.core.vals.call(null,inst_4197);
var inst_4199 = cljs.core.seq.call(null,inst_4198);
var inst_4200 = inst_4199;
var inst_4201 = null;
var inst_4202 = (0);
var inst_4203 = (0);
var state_4259__$1 = (function (){var statearr_4287 = state_4259;
(statearr_4287[(12)] = inst_4201);

(statearr_4287[(13)] = inst_4202);

(statearr_4287[(15)] = inst_4203);

(statearr_4287[(16)] = inst_4200);

return statearr_4287;
})();
var statearr_4288_4333 = state_4259__$1;
(statearr_4288_4333[(2)] = null);

(statearr_4288_4333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (14))){
var state_4259__$1 = state_4259;
var statearr_4292_4334 = state_4259__$1;
(statearr_4292_4334[(2)] = null);

(statearr_4292_4334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (16))){
var inst_4214 = (state_4259[(10)]);
var inst_4218 = cljs.core.chunk_first.call(null,inst_4214);
var inst_4219 = cljs.core.chunk_rest.call(null,inst_4214);
var inst_4220 = cljs.core.count.call(null,inst_4218);
var inst_4200 = inst_4219;
var inst_4201 = inst_4218;
var inst_4202 = inst_4220;
var inst_4203 = (0);
var state_4259__$1 = (function (){var statearr_4293 = state_4259;
(statearr_4293[(12)] = inst_4201);

(statearr_4293[(13)] = inst_4202);

(statearr_4293[(15)] = inst_4203);

(statearr_4293[(16)] = inst_4200);

return statearr_4293;
})();
var statearr_4294_4335 = state_4259__$1;
(statearr_4294_4335[(2)] = null);

(statearr_4294_4335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (10))){
var inst_4201 = (state_4259[(12)]);
var inst_4202 = (state_4259[(13)]);
var inst_4203 = (state_4259[(15)]);
var inst_4200 = (state_4259[(16)]);
var inst_4208 = cljs.core._nth.call(null,inst_4201,inst_4203);
var inst_4209 = cljs.core.async.muxch_STAR_.call(null,inst_4208);
var inst_4210 = cljs.core.async.close_BANG_.call(null,inst_4209);
var inst_4211 = (inst_4203 + (1));
var tmp4289 = inst_4201;
var tmp4290 = inst_4202;
var tmp4291 = inst_4200;
var inst_4200__$1 = tmp4291;
var inst_4201__$1 = tmp4289;
var inst_4202__$1 = tmp4290;
var inst_4203__$1 = inst_4211;
var state_4259__$1 = (function (){var statearr_4295 = state_4259;
(statearr_4295[(12)] = inst_4201__$1);

(statearr_4295[(13)] = inst_4202__$1);

(statearr_4295[(17)] = inst_4210);

(statearr_4295[(15)] = inst_4203__$1);

(statearr_4295[(16)] = inst_4200__$1);

return statearr_4295;
})();
var statearr_4296_4336 = state_4259__$1;
(statearr_4296_4336[(2)] = null);

(statearr_4296_4336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (18))){
var inst_4229 = (state_4259[(2)]);
var state_4259__$1 = state_4259;
var statearr_4297_4337 = state_4259__$1;
(statearr_4297_4337[(2)] = inst_4229);

(statearr_4297_4337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4260 === (8))){
var inst_4202 = (state_4259[(13)]);
var inst_4203 = (state_4259[(15)]);
var inst_4205 = (inst_4203 < inst_4202);
var inst_4206 = inst_4205;
var state_4259__$1 = state_4259;
if(cljs.core.truth_(inst_4206)){
var statearr_4298_4338 = state_4259__$1;
(statearr_4298_4338[(1)] = (10));

} else {
var statearr_4299_4339 = state_4259__$1;
(statearr_4299_4339[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4311,mults,ensure_mult,p))
;
return ((function (switch__2376__auto__,c__2441__auto___4311,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4303[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4303[(1)] = (1));

return statearr_4303;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4259){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4304){if((e4304 instanceof Object)){
var ex__2380__auto__ = e4304;
var statearr_4305_4340 = state_4259;
(statearr_4305_4340[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4341 = state_4259;
state_4259 = G__4341;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4311,mults,ensure_mult,p))
})();
var state__2443__auto__ = (function (){var statearr_4306 = f__2442__auto__.call(null);
(statearr_4306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4311);

return statearr_4306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4311,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args4342 = [];
var len__3300__auto___4345 = arguments.length;
var i__3301__auto___4346 = (0);
while(true){
if((i__3301__auto___4346 < len__3300__auto___4345)){
args4342.push((arguments[i__3301__auto___4346]));

var G__4347 = (i__3301__auto___4346 + (1));
i__3301__auto___4346 = G__4347;
continue;
} else {
}
break;
}

var G__4344 = args4342.length;
switch (G__4344) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4342.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args4349 = [];
var len__3300__auto___4352 = arguments.length;
var i__3301__auto___4353 = (0);
while(true){
if((i__3301__auto___4353 < len__3300__auto___4352)){
args4349.push((arguments[i__3301__auto___4353]));

var G__4354 = (i__3301__auto___4353 + (1));
i__3301__auto___4353 = G__4354;
continue;
} else {
}
break;
}

var G__4351 = args4349.length;
switch (G__4351) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4349.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args4356 = [];
var len__3300__auto___4427 = arguments.length;
var i__3301__auto___4428 = (0);
while(true){
if((i__3301__auto___4428 < len__3300__auto___4427)){
args4356.push((arguments[i__3301__auto___4428]));

var G__4429 = (i__3301__auto___4428 + (1));
i__3301__auto___4428 = G__4429;
continue;
} else {
}
break;
}

var G__4358 = args4356.length;
switch (G__4358) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4356.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__2441__auto___4431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4397){
var state_val_4398 = (state_4397[(1)]);
if((state_val_4398 === (7))){
var state_4397__$1 = state_4397;
var statearr_4399_4432 = state_4397__$1;
(statearr_4399_4432[(2)] = null);

(statearr_4399_4432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (1))){
var state_4397__$1 = state_4397;
var statearr_4400_4433 = state_4397__$1;
(statearr_4400_4433[(2)] = null);

(statearr_4400_4433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (4))){
var inst_4361 = (state_4397[(7)]);
var inst_4363 = (inst_4361 < cnt);
var state_4397__$1 = state_4397;
if(cljs.core.truth_(inst_4363)){
var statearr_4401_4434 = state_4397__$1;
(statearr_4401_4434[(1)] = (6));

} else {
var statearr_4402_4435 = state_4397__$1;
(statearr_4402_4435[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (15))){
var inst_4393 = (state_4397[(2)]);
var state_4397__$1 = state_4397;
var statearr_4403_4436 = state_4397__$1;
(statearr_4403_4436[(2)] = inst_4393);

(statearr_4403_4436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (13))){
var inst_4386 = cljs.core.async.close_BANG_.call(null,out);
var state_4397__$1 = state_4397;
var statearr_4404_4437 = state_4397__$1;
(statearr_4404_4437[(2)] = inst_4386);

(statearr_4404_4437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (6))){
var state_4397__$1 = state_4397;
var statearr_4405_4438 = state_4397__$1;
(statearr_4405_4438[(2)] = null);

(statearr_4405_4438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (3))){
var inst_4395 = (state_4397[(2)]);
var state_4397__$1 = state_4397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4397__$1,inst_4395);
} else {
if((state_val_4398 === (12))){
var inst_4383 = (state_4397[(8)]);
var inst_4383__$1 = (state_4397[(2)]);
var inst_4384 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4383__$1);
var state_4397__$1 = (function (){var statearr_4406 = state_4397;
(statearr_4406[(8)] = inst_4383__$1);

return statearr_4406;
})();
if(cljs.core.truth_(inst_4384)){
var statearr_4407_4439 = state_4397__$1;
(statearr_4407_4439[(1)] = (13));

} else {
var statearr_4408_4440 = state_4397__$1;
(statearr_4408_4440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (2))){
var inst_4360 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4361 = (0);
var state_4397__$1 = (function (){var statearr_4409 = state_4397;
(statearr_4409[(9)] = inst_4360);

(statearr_4409[(7)] = inst_4361);

return statearr_4409;
})();
var statearr_4410_4441 = state_4397__$1;
(statearr_4410_4441[(2)] = null);

(statearr_4410_4441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (11))){
var inst_4361 = (state_4397[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4397,(10),Object,null,(9));
var inst_4370 = chs__$1.call(null,inst_4361);
var inst_4371 = done.call(null,inst_4361);
var inst_4372 = cljs.core.async.take_BANG_.call(null,inst_4370,inst_4371);
var state_4397__$1 = state_4397;
var statearr_4411_4442 = state_4397__$1;
(statearr_4411_4442[(2)] = inst_4372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (9))){
var inst_4361 = (state_4397[(7)]);
var inst_4374 = (state_4397[(2)]);
var inst_4375 = (inst_4361 + (1));
var inst_4361__$1 = inst_4375;
var state_4397__$1 = (function (){var statearr_4412 = state_4397;
(statearr_4412[(10)] = inst_4374);

(statearr_4412[(7)] = inst_4361__$1);

return statearr_4412;
})();
var statearr_4413_4443 = state_4397__$1;
(statearr_4413_4443[(2)] = null);

(statearr_4413_4443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (5))){
var inst_4381 = (state_4397[(2)]);
var state_4397__$1 = (function (){var statearr_4414 = state_4397;
(statearr_4414[(11)] = inst_4381);

return statearr_4414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4397__$1,(12),dchan);
} else {
if((state_val_4398 === (14))){
var inst_4383 = (state_4397[(8)]);
var inst_4388 = cljs.core.apply.call(null,f,inst_4383);
var state_4397__$1 = state_4397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4397__$1,(16),out,inst_4388);
} else {
if((state_val_4398 === (16))){
var inst_4390 = (state_4397[(2)]);
var state_4397__$1 = (function (){var statearr_4415 = state_4397;
(statearr_4415[(12)] = inst_4390);

return statearr_4415;
})();
var statearr_4416_4444 = state_4397__$1;
(statearr_4416_4444[(2)] = null);

(statearr_4416_4444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (10))){
var inst_4365 = (state_4397[(2)]);
var inst_4366 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4397__$1 = (function (){var statearr_4417 = state_4397;
(statearr_4417[(13)] = inst_4365);

return statearr_4417;
})();
var statearr_4418_4445 = state_4397__$1;
(statearr_4418_4445[(2)] = inst_4366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4398 === (8))){
var inst_4379 = (state_4397[(2)]);
var state_4397__$1 = state_4397;
var statearr_4419_4446 = state_4397__$1;
(statearr_4419_4446[(2)] = inst_4379);

(statearr_4419_4446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2376__auto__,c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4423[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4423[(1)] = (1));

return statearr_4423;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4397){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4424){if((e4424 instanceof Object)){
var ex__2380__auto__ = e4424;
var statearr_4425_4447 = state_4397;
(statearr_4425_4447[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4448 = state_4397;
state_4397 = G__4448;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2443__auto__ = (function (){var statearr_4426 = f__2442__auto__.call(null);
(statearr_4426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4431);

return statearr_4426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4431,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args4450 = [];
var len__3300__auto___4506 = arguments.length;
var i__3301__auto___4507 = (0);
while(true){
if((i__3301__auto___4507 < len__3300__auto___4506)){
args4450.push((arguments[i__3301__auto___4507]));

var G__4508 = (i__3301__auto___4507 + (1));
i__3301__auto___4507 = G__4508;
continue;
} else {
}
break;
}

var G__4452 = args4450.length;
switch (G__4452) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4450.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___4510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4510,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4510,out){
return (function (state_4482){
var state_val_4483 = (state_4482[(1)]);
if((state_val_4483 === (7))){
var inst_4462 = (state_4482[(7)]);
var inst_4461 = (state_4482[(8)]);
var inst_4461__$1 = (state_4482[(2)]);
var inst_4462__$1 = cljs.core.nth.call(null,inst_4461__$1,(0),null);
var inst_4463 = cljs.core.nth.call(null,inst_4461__$1,(1),null);
var inst_4464 = (inst_4462__$1 == null);
var state_4482__$1 = (function (){var statearr_4484 = state_4482;
(statearr_4484[(7)] = inst_4462__$1);

(statearr_4484[(8)] = inst_4461__$1);

(statearr_4484[(9)] = inst_4463);

return statearr_4484;
})();
if(cljs.core.truth_(inst_4464)){
var statearr_4485_4511 = state_4482__$1;
(statearr_4485_4511[(1)] = (8));

} else {
var statearr_4486_4512 = state_4482__$1;
(statearr_4486_4512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (1))){
var inst_4453 = cljs.core.vec.call(null,chs);
var inst_4454 = inst_4453;
var state_4482__$1 = (function (){var statearr_4487 = state_4482;
(statearr_4487[(10)] = inst_4454);

return statearr_4487;
})();
var statearr_4488_4513 = state_4482__$1;
(statearr_4488_4513[(2)] = null);

(statearr_4488_4513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (4))){
var inst_4454 = (state_4482[(10)]);
var state_4482__$1 = state_4482;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4482__$1,(7),inst_4454);
} else {
if((state_val_4483 === (6))){
var inst_4478 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4489_4514 = state_4482__$1;
(statearr_4489_4514[(2)] = inst_4478);

(statearr_4489_4514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (3))){
var inst_4480 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4482__$1,inst_4480);
} else {
if((state_val_4483 === (2))){
var inst_4454 = (state_4482[(10)]);
var inst_4456 = cljs.core.count.call(null,inst_4454);
var inst_4457 = (inst_4456 > (0));
var state_4482__$1 = state_4482;
if(cljs.core.truth_(inst_4457)){
var statearr_4491_4515 = state_4482__$1;
(statearr_4491_4515[(1)] = (4));

} else {
var statearr_4492_4516 = state_4482__$1;
(statearr_4492_4516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (11))){
var inst_4454 = (state_4482[(10)]);
var inst_4471 = (state_4482[(2)]);
var tmp4490 = inst_4454;
var inst_4454__$1 = tmp4490;
var state_4482__$1 = (function (){var statearr_4493 = state_4482;
(statearr_4493[(11)] = inst_4471);

(statearr_4493[(10)] = inst_4454__$1);

return statearr_4493;
})();
var statearr_4494_4517 = state_4482__$1;
(statearr_4494_4517[(2)] = null);

(statearr_4494_4517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (9))){
var inst_4462 = (state_4482[(7)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4482__$1,(11),out,inst_4462);
} else {
if((state_val_4483 === (5))){
var inst_4476 = cljs.core.async.close_BANG_.call(null,out);
var state_4482__$1 = state_4482;
var statearr_4495_4518 = state_4482__$1;
(statearr_4495_4518[(2)] = inst_4476);

(statearr_4495_4518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (10))){
var inst_4474 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4496_4519 = state_4482__$1;
(statearr_4496_4519[(2)] = inst_4474);

(statearr_4496_4519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (8))){
var inst_4462 = (state_4482[(7)]);
var inst_4461 = (state_4482[(8)]);
var inst_4463 = (state_4482[(9)]);
var inst_4454 = (state_4482[(10)]);
var inst_4466 = (function (){var cs = inst_4454;
var vec__4459 = inst_4461;
var v = inst_4462;
var c = inst_4463;
return ((function (cs,vec__4459,v,c,inst_4462,inst_4461,inst_4463,inst_4454,state_val_4483,c__2441__auto___4510,out){
return (function (p1__4449_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4449_SHARP_);
});
;})(cs,vec__4459,v,c,inst_4462,inst_4461,inst_4463,inst_4454,state_val_4483,c__2441__auto___4510,out))
})();
var inst_4467 = cljs.core.filterv.call(null,inst_4466,inst_4454);
var inst_4454__$1 = inst_4467;
var state_4482__$1 = (function (){var statearr_4497 = state_4482;
(statearr_4497[(10)] = inst_4454__$1);

return statearr_4497;
})();
var statearr_4498_4520 = state_4482__$1;
(statearr_4498_4520[(2)] = null);

(statearr_4498_4520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4510,out))
;
return ((function (switch__2376__auto__,c__2441__auto___4510,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4502[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4502[(1)] = (1));

return statearr_4502;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4482){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4503){if((e4503 instanceof Object)){
var ex__2380__auto__ = e4503;
var statearr_4504_4521 = state_4482;
(statearr_4504_4521[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4522 = state_4482;
state_4482 = G__4522;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4510,out))
})();
var state__2443__auto__ = (function (){var statearr_4505 = f__2442__auto__.call(null);
(statearr_4505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4510);

return statearr_4505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4510,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args4523 = [];
var len__3300__auto___4572 = arguments.length;
var i__3301__auto___4573 = (0);
while(true){
if((i__3301__auto___4573 < len__3300__auto___4572)){
args4523.push((arguments[i__3301__auto___4573]));

var G__4574 = (i__3301__auto___4573 + (1));
i__3301__auto___4573 = G__4574;
continue;
} else {
}
break;
}

var G__4525 = args4523.length;
switch (G__4525) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4523.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___4576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4576,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4576,out){
return (function (state_4549){
var state_val_4550 = (state_4549[(1)]);
if((state_val_4550 === (7))){
var inst_4531 = (state_4549[(7)]);
var inst_4531__$1 = (state_4549[(2)]);
var inst_4532 = (inst_4531__$1 == null);
var inst_4533 = cljs.core.not.call(null,inst_4532);
var state_4549__$1 = (function (){var statearr_4551 = state_4549;
(statearr_4551[(7)] = inst_4531__$1);

return statearr_4551;
})();
if(inst_4533){
var statearr_4552_4577 = state_4549__$1;
(statearr_4552_4577[(1)] = (8));

} else {
var statearr_4553_4578 = state_4549__$1;
(statearr_4553_4578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (1))){
var inst_4526 = (0);
var state_4549__$1 = (function (){var statearr_4554 = state_4549;
(statearr_4554[(8)] = inst_4526);

return statearr_4554;
})();
var statearr_4555_4579 = state_4549__$1;
(statearr_4555_4579[(2)] = null);

(statearr_4555_4579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (4))){
var state_4549__$1 = state_4549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4549__$1,(7),ch);
} else {
if((state_val_4550 === (6))){
var inst_4544 = (state_4549[(2)]);
var state_4549__$1 = state_4549;
var statearr_4556_4580 = state_4549__$1;
(statearr_4556_4580[(2)] = inst_4544);

(statearr_4556_4580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (3))){
var inst_4546 = (state_4549[(2)]);
var inst_4547 = cljs.core.async.close_BANG_.call(null,out);
var state_4549__$1 = (function (){var statearr_4557 = state_4549;
(statearr_4557[(9)] = inst_4546);

return statearr_4557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4549__$1,inst_4547);
} else {
if((state_val_4550 === (2))){
var inst_4526 = (state_4549[(8)]);
var inst_4528 = (inst_4526 < n);
var state_4549__$1 = state_4549;
if(cljs.core.truth_(inst_4528)){
var statearr_4558_4581 = state_4549__$1;
(statearr_4558_4581[(1)] = (4));

} else {
var statearr_4559_4582 = state_4549__$1;
(statearr_4559_4582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (11))){
var inst_4526 = (state_4549[(8)]);
var inst_4536 = (state_4549[(2)]);
var inst_4537 = (inst_4526 + (1));
var inst_4526__$1 = inst_4537;
var state_4549__$1 = (function (){var statearr_4560 = state_4549;
(statearr_4560[(10)] = inst_4536);

(statearr_4560[(8)] = inst_4526__$1);

return statearr_4560;
})();
var statearr_4561_4583 = state_4549__$1;
(statearr_4561_4583[(2)] = null);

(statearr_4561_4583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (9))){
var state_4549__$1 = state_4549;
var statearr_4562_4584 = state_4549__$1;
(statearr_4562_4584[(2)] = null);

(statearr_4562_4584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (5))){
var state_4549__$1 = state_4549;
var statearr_4563_4585 = state_4549__$1;
(statearr_4563_4585[(2)] = null);

(statearr_4563_4585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (10))){
var inst_4541 = (state_4549[(2)]);
var state_4549__$1 = state_4549;
var statearr_4564_4586 = state_4549__$1;
(statearr_4564_4586[(2)] = inst_4541);

(statearr_4564_4586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4550 === (8))){
var inst_4531 = (state_4549[(7)]);
var state_4549__$1 = state_4549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4549__$1,(11),out,inst_4531);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4576,out))
;
return ((function (switch__2376__auto__,c__2441__auto___4576,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4568[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4568[(1)] = (1));

return statearr_4568;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4549){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4569){if((e4569 instanceof Object)){
var ex__2380__auto__ = e4569;
var statearr_4570_4587 = state_4549;
(statearr_4570_4587[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4588 = state_4549;
state_4549 = G__4588;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4576,out))
})();
var state__2443__auto__ = (function (){var statearr_4571 = f__2442__auto__.call(null);
(statearr_4571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4576);

return statearr_4571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4576,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t4596 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4596 = (function (map_LT_,f,ch,meta4597){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta4597 = meta4597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4598,meta4597__$1){
var self__ = this;
var _4598__$1 = this;
return (new cljs.core.async.t4596(self__.map_LT_,self__.f,self__.ch,meta4597__$1));
});

cljs.core.async.t4596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4598){
var self__ = this;
var _4598__$1 = this;
return self__.meta4597;
});

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t4599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4599 = (function (map_LT_,f,ch,meta4597,_,fn1,meta4600){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta4597 = meta4597;
this._ = _;
this.fn1 = fn1;
this.meta4600 = meta4600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4601,meta4600__$1){
var self__ = this;
var _4601__$1 = this;
return (new cljs.core.async.t4599(self__.map_LT_,self__.f,self__.ch,self__.meta4597,self__._,self__.fn1,meta4600__$1));
});})(___$1))
;

cljs.core.async.t4599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4601){
var self__ = this;
var _4601__$1 = this;
return self__.meta4600;
});})(___$1))
;

cljs.core.async.t4599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t4599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4589_SHARP_){
return f1.call(null,(((p1__4589_SHARP_ == null))?null:self__.f.call(null,p1__4589_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t4599.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4597","meta4597",389404803,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t4596","cljs.core.async/t4596",-403846265,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4600","meta4600",-1631234558,null)], null);
});})(___$1))
;

cljs.core.async.t4599.cljs$lang$type = true;

cljs.core.async.t4599.cljs$lang$ctorStr = "cljs.core.async/t4599";

cljs.core.async.t4599.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4599");
});})(___$1))
;

cljs.core.async.__GT_t4599 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t4599(map_LT___$1,f__$1,ch__$1,meta4597__$1,___$2,fn1__$1,meta4600){
return (new cljs.core.async.t4599(map_LT___$1,f__$1,ch__$1,meta4597__$1,___$2,fn1__$1,meta4600));
});})(___$1))
;

}

return (new cljs.core.async.t4599(self__.map_LT_,self__.f,self__.ch,self__.meta4597,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__2781__auto__ = ret;
if(cljs.core.truth_(and__2781__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__2781__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t4596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t4596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4597","meta4597",389404803,null)], null);
});

cljs.core.async.t4596.cljs$lang$type = true;

cljs.core.async.t4596.cljs$lang$ctorStr = "cljs.core.async/t4596";

cljs.core.async.t4596.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4596");
});

cljs.core.async.__GT_t4596 = (function cljs$core$async$map_LT__$___GT_t4596(map_LT___$1,f__$1,ch__$1,meta4597){
return (new cljs.core.async.t4596(map_LT___$1,f__$1,ch__$1,meta4597));
});

}

return (new cljs.core.async.t4596(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t4605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4605 = (function (map_GT_,f,ch,meta4606){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta4606 = meta4606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4607,meta4606__$1){
var self__ = this;
var _4607__$1 = this;
return (new cljs.core.async.t4605(self__.map_GT_,self__.f,self__.ch,meta4606__$1));
});

cljs.core.async.t4605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4607){
var self__ = this;
var _4607__$1 = this;
return self__.meta4606;
});

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t4605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t4605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4606","meta4606",-1601828815,null)], null);
});

cljs.core.async.t4605.cljs$lang$type = true;

cljs.core.async.t4605.cljs$lang$ctorStr = "cljs.core.async/t4605";

cljs.core.async.t4605.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4605");
});

cljs.core.async.__GT_t4605 = (function cljs$core$async$map_GT__$___GT_t4605(map_GT___$1,f__$1,ch__$1,meta4606){
return (new cljs.core.async.t4605(map_GT___$1,f__$1,ch__$1,meta4606));
});

}

return (new cljs.core.async.t4605(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t4611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4611 = (function (filter_GT_,p,ch,meta4612){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta4612 = meta4612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4613,meta4612__$1){
var self__ = this;
var _4613__$1 = this;
return (new cljs.core.async.t4611(self__.filter_GT_,self__.p,self__.ch,meta4612__$1));
});

cljs.core.async.t4611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4613){
var self__ = this;
var _4613__$1 = this;
return self__.meta4612;
});

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t4611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t4611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4612","meta4612",149484694,null)], null);
});

cljs.core.async.t4611.cljs$lang$type = true;

cljs.core.async.t4611.cljs$lang$ctorStr = "cljs.core.async/t4611";

cljs.core.async.t4611.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4611");
});

cljs.core.async.__GT_t4611 = (function cljs$core$async$filter_GT__$___GT_t4611(filter_GT___$1,p__$1,ch__$1,meta4612){
return (new cljs.core.async.t4611(filter_GT___$1,p__$1,ch__$1,meta4612));
});

}

return (new cljs.core.async.t4611(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args4614 = [];
var len__3300__auto___4658 = arguments.length;
var i__3301__auto___4659 = (0);
while(true){
if((i__3301__auto___4659 < len__3300__auto___4658)){
args4614.push((arguments[i__3301__auto___4659]));

var G__4660 = (i__3301__auto___4659 + (1));
i__3301__auto___4659 = G__4660;
continue;
} else {
}
break;
}

var G__4616 = args4614.length;
switch (G__4616) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4614.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___4662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4662,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4662,out){
return (function (state_4637){
var state_val_4638 = (state_4637[(1)]);
if((state_val_4638 === (7))){
var inst_4633 = (state_4637[(2)]);
var state_4637__$1 = state_4637;
var statearr_4639_4663 = state_4637__$1;
(statearr_4639_4663[(2)] = inst_4633);

(statearr_4639_4663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (1))){
var state_4637__$1 = state_4637;
var statearr_4640_4664 = state_4637__$1;
(statearr_4640_4664[(2)] = null);

(statearr_4640_4664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (4))){
var inst_4619 = (state_4637[(7)]);
var inst_4619__$1 = (state_4637[(2)]);
var inst_4620 = (inst_4619__$1 == null);
var state_4637__$1 = (function (){var statearr_4641 = state_4637;
(statearr_4641[(7)] = inst_4619__$1);

return statearr_4641;
})();
if(cljs.core.truth_(inst_4620)){
var statearr_4642_4665 = state_4637__$1;
(statearr_4642_4665[(1)] = (5));

} else {
var statearr_4643_4666 = state_4637__$1;
(statearr_4643_4666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (6))){
var inst_4619 = (state_4637[(7)]);
var inst_4624 = p.call(null,inst_4619);
var state_4637__$1 = state_4637;
if(cljs.core.truth_(inst_4624)){
var statearr_4644_4667 = state_4637__$1;
(statearr_4644_4667[(1)] = (8));

} else {
var statearr_4645_4668 = state_4637__$1;
(statearr_4645_4668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (3))){
var inst_4635 = (state_4637[(2)]);
var state_4637__$1 = state_4637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4637__$1,inst_4635);
} else {
if((state_val_4638 === (2))){
var state_4637__$1 = state_4637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4637__$1,(4),ch);
} else {
if((state_val_4638 === (11))){
var inst_4627 = (state_4637[(2)]);
var state_4637__$1 = state_4637;
var statearr_4646_4669 = state_4637__$1;
(statearr_4646_4669[(2)] = inst_4627);

(statearr_4646_4669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (9))){
var state_4637__$1 = state_4637;
var statearr_4647_4670 = state_4637__$1;
(statearr_4647_4670[(2)] = null);

(statearr_4647_4670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (5))){
var inst_4622 = cljs.core.async.close_BANG_.call(null,out);
var state_4637__$1 = state_4637;
var statearr_4648_4671 = state_4637__$1;
(statearr_4648_4671[(2)] = inst_4622);

(statearr_4648_4671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (10))){
var inst_4630 = (state_4637[(2)]);
var state_4637__$1 = (function (){var statearr_4649 = state_4637;
(statearr_4649[(8)] = inst_4630);

return statearr_4649;
})();
var statearr_4650_4672 = state_4637__$1;
(statearr_4650_4672[(2)] = null);

(statearr_4650_4672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4638 === (8))){
var inst_4619 = (state_4637[(7)]);
var state_4637__$1 = state_4637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4637__$1,(11),out,inst_4619);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4662,out))
;
return ((function (switch__2376__auto__,c__2441__auto___4662,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4654 = [null,null,null,null,null,null,null,null,null];
(statearr_4654[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4654[(1)] = (1));

return statearr_4654;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4637){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4655){if((e4655 instanceof Object)){
var ex__2380__auto__ = e4655;
var statearr_4656_4673 = state_4637;
(statearr_4656_4673[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4674 = state_4637;
state_4637 = G__4674;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4662,out))
})();
var state__2443__auto__ = (function (){var statearr_4657 = f__2442__auto__.call(null);
(statearr_4657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4662);

return statearr_4657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4662,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args4675 = [];
var len__3300__auto___4678 = arguments.length;
var i__3301__auto___4679 = (0);
while(true){
if((i__3301__auto___4679 < len__3300__auto___4678)){
args4675.push((arguments[i__3301__auto___4679]));

var G__4680 = (i__3301__auto___4679 + (1));
i__3301__auto___4679 = G__4680;
continue;
} else {
}
break;
}

var G__4677 = args4675.length;
switch (G__4677) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4675.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto__){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto__){
return (function (state_4847){
var state_val_4848 = (state_4847[(1)]);
if((state_val_4848 === (7))){
var inst_4843 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
var statearr_4849_4890 = state_4847__$1;
(statearr_4849_4890[(2)] = inst_4843);

(statearr_4849_4890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (20))){
var inst_4813 = (state_4847[(7)]);
var inst_4824 = (state_4847[(2)]);
var inst_4825 = cljs.core.next.call(null,inst_4813);
var inst_4799 = inst_4825;
var inst_4800 = null;
var inst_4801 = (0);
var inst_4802 = (0);
var state_4847__$1 = (function (){var statearr_4850 = state_4847;
(statearr_4850[(8)] = inst_4801);

(statearr_4850[(9)] = inst_4802);

(statearr_4850[(10)] = inst_4800);

(statearr_4850[(11)] = inst_4824);

(statearr_4850[(12)] = inst_4799);

return statearr_4850;
})();
var statearr_4851_4891 = state_4847__$1;
(statearr_4851_4891[(2)] = null);

(statearr_4851_4891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (1))){
var state_4847__$1 = state_4847;
var statearr_4852_4892 = state_4847__$1;
(statearr_4852_4892[(2)] = null);

(statearr_4852_4892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (4))){
var inst_4788 = (state_4847[(13)]);
var inst_4788__$1 = (state_4847[(2)]);
var inst_4789 = (inst_4788__$1 == null);
var state_4847__$1 = (function (){var statearr_4853 = state_4847;
(statearr_4853[(13)] = inst_4788__$1);

return statearr_4853;
})();
if(cljs.core.truth_(inst_4789)){
var statearr_4854_4893 = state_4847__$1;
(statearr_4854_4893[(1)] = (5));

} else {
var statearr_4855_4894 = state_4847__$1;
(statearr_4855_4894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (15))){
var state_4847__$1 = state_4847;
var statearr_4859_4895 = state_4847__$1;
(statearr_4859_4895[(2)] = null);

(statearr_4859_4895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (21))){
var state_4847__$1 = state_4847;
var statearr_4860_4896 = state_4847__$1;
(statearr_4860_4896[(2)] = null);

(statearr_4860_4896[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (13))){
var inst_4801 = (state_4847[(8)]);
var inst_4802 = (state_4847[(9)]);
var inst_4800 = (state_4847[(10)]);
var inst_4799 = (state_4847[(12)]);
var inst_4809 = (state_4847[(2)]);
var inst_4810 = (inst_4802 + (1));
var tmp4856 = inst_4801;
var tmp4857 = inst_4800;
var tmp4858 = inst_4799;
var inst_4799__$1 = tmp4858;
var inst_4800__$1 = tmp4857;
var inst_4801__$1 = tmp4856;
var inst_4802__$1 = inst_4810;
var state_4847__$1 = (function (){var statearr_4861 = state_4847;
(statearr_4861[(8)] = inst_4801__$1);

(statearr_4861[(9)] = inst_4802__$1);

(statearr_4861[(10)] = inst_4800__$1);

(statearr_4861[(14)] = inst_4809);

(statearr_4861[(12)] = inst_4799__$1);

return statearr_4861;
})();
var statearr_4862_4897 = state_4847__$1;
(statearr_4862_4897[(2)] = null);

(statearr_4862_4897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (22))){
var state_4847__$1 = state_4847;
var statearr_4863_4898 = state_4847__$1;
(statearr_4863_4898[(2)] = null);

(statearr_4863_4898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (6))){
var inst_4788 = (state_4847[(13)]);
var inst_4797 = f.call(null,inst_4788);
var inst_4798 = cljs.core.seq.call(null,inst_4797);
var inst_4799 = inst_4798;
var inst_4800 = null;
var inst_4801 = (0);
var inst_4802 = (0);
var state_4847__$1 = (function (){var statearr_4864 = state_4847;
(statearr_4864[(8)] = inst_4801);

(statearr_4864[(9)] = inst_4802);

(statearr_4864[(10)] = inst_4800);

(statearr_4864[(12)] = inst_4799);

return statearr_4864;
})();
var statearr_4865_4899 = state_4847__$1;
(statearr_4865_4899[(2)] = null);

(statearr_4865_4899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (17))){
var inst_4813 = (state_4847[(7)]);
var inst_4817 = cljs.core.chunk_first.call(null,inst_4813);
var inst_4818 = cljs.core.chunk_rest.call(null,inst_4813);
var inst_4819 = cljs.core.count.call(null,inst_4817);
var inst_4799 = inst_4818;
var inst_4800 = inst_4817;
var inst_4801 = inst_4819;
var inst_4802 = (0);
var state_4847__$1 = (function (){var statearr_4866 = state_4847;
(statearr_4866[(8)] = inst_4801);

(statearr_4866[(9)] = inst_4802);

(statearr_4866[(10)] = inst_4800);

(statearr_4866[(12)] = inst_4799);

return statearr_4866;
})();
var statearr_4867_4900 = state_4847__$1;
(statearr_4867_4900[(2)] = null);

(statearr_4867_4900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (3))){
var inst_4845 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4847__$1,inst_4845);
} else {
if((state_val_4848 === (12))){
var inst_4833 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
var statearr_4868_4901 = state_4847__$1;
(statearr_4868_4901[(2)] = inst_4833);

(statearr_4868_4901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (2))){
var state_4847__$1 = state_4847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4847__$1,(4),in$);
} else {
if((state_val_4848 === (23))){
var inst_4841 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
var statearr_4869_4902 = state_4847__$1;
(statearr_4869_4902[(2)] = inst_4841);

(statearr_4869_4902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (19))){
var inst_4828 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
var statearr_4870_4903 = state_4847__$1;
(statearr_4870_4903[(2)] = inst_4828);

(statearr_4870_4903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (11))){
var inst_4813 = (state_4847[(7)]);
var inst_4799 = (state_4847[(12)]);
var inst_4813__$1 = cljs.core.seq.call(null,inst_4799);
var state_4847__$1 = (function (){var statearr_4871 = state_4847;
(statearr_4871[(7)] = inst_4813__$1);

return statearr_4871;
})();
if(inst_4813__$1){
var statearr_4872_4904 = state_4847__$1;
(statearr_4872_4904[(1)] = (14));

} else {
var statearr_4873_4905 = state_4847__$1;
(statearr_4873_4905[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (9))){
var inst_4835 = (state_4847[(2)]);
var inst_4836 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4847__$1 = (function (){var statearr_4874 = state_4847;
(statearr_4874[(15)] = inst_4835);

return statearr_4874;
})();
if(cljs.core.truth_(inst_4836)){
var statearr_4875_4906 = state_4847__$1;
(statearr_4875_4906[(1)] = (21));

} else {
var statearr_4876_4907 = state_4847__$1;
(statearr_4876_4907[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (5))){
var inst_4791 = cljs.core.async.close_BANG_.call(null,out);
var state_4847__$1 = state_4847;
var statearr_4877_4908 = state_4847__$1;
(statearr_4877_4908[(2)] = inst_4791);

(statearr_4877_4908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (14))){
var inst_4813 = (state_4847[(7)]);
var inst_4815 = cljs.core.chunked_seq_QMARK_.call(null,inst_4813);
var state_4847__$1 = state_4847;
if(inst_4815){
var statearr_4878_4909 = state_4847__$1;
(statearr_4878_4909[(1)] = (17));

} else {
var statearr_4879_4910 = state_4847__$1;
(statearr_4879_4910[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (16))){
var inst_4831 = (state_4847[(2)]);
var state_4847__$1 = state_4847;
var statearr_4880_4911 = state_4847__$1;
(statearr_4880_4911[(2)] = inst_4831);

(statearr_4880_4911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4848 === (10))){
var inst_4802 = (state_4847[(9)]);
var inst_4800 = (state_4847[(10)]);
var inst_4807 = cljs.core._nth.call(null,inst_4800,inst_4802);
var state_4847__$1 = state_4847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4847__$1,(13),out,inst_4807);
} else {
if((state_val_4848 === (18))){
var inst_4813 = (state_4847[(7)]);
var inst_4822 = cljs.core.first.call(null,inst_4813);
var state_4847__$1 = state_4847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4847__$1,(20),out,inst_4822);
} else {
if((state_val_4848 === (8))){
var inst_4801 = (state_4847[(8)]);
var inst_4802 = (state_4847[(9)]);
var inst_4804 = (inst_4802 < inst_4801);
var inst_4805 = inst_4804;
var state_4847__$1 = state_4847;
if(cljs.core.truth_(inst_4805)){
var statearr_4881_4912 = state_4847__$1;
(statearr_4881_4912[(1)] = (10));

} else {
var statearr_4882_4913 = state_4847__$1;
(statearr_4882_4913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto__))
;
return ((function (switch__2376__auto__,c__2441__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____0 = (function (){
var statearr_4886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4886[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__);

(statearr_4886[(1)] = (1));

return statearr_4886;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____1 = (function (state_4847){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4887){if((e4887 instanceof Object)){
var ex__2380__auto__ = e4887;
var statearr_4888_4914 = state_4847;
(statearr_4888_4914[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4915 = state_4847;
state_4847 = G__4915;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__ = function(state_4847){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____1.call(this,state_4847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2377__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto__))
})();
var state__2443__auto__ = (function (){var statearr_4889 = f__2442__auto__.call(null);
(statearr_4889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto__);

return statearr_4889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto__))
);

return c__2441__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args4916 = [];
var len__3300__auto___4919 = arguments.length;
var i__3301__auto___4920 = (0);
while(true){
if((i__3301__auto___4920 < len__3300__auto___4919)){
args4916.push((arguments[i__3301__auto___4920]));

var G__4921 = (i__3301__auto___4920 + (1));
i__3301__auto___4920 = G__4921;
continue;
} else {
}
break;
}

var G__4918 = args4916.length;
switch (G__4918) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4916.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args4923 = [];
var len__3300__auto___4926 = arguments.length;
var i__3301__auto___4927 = (0);
while(true){
if((i__3301__auto___4927 < len__3300__auto___4926)){
args4923.push((arguments[i__3301__auto___4927]));

var G__4928 = (i__3301__auto___4927 + (1));
i__3301__auto___4927 = G__4928;
continue;
} else {
}
break;
}

var G__4925 = args4923.length;
switch (G__4925) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4923.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args4930 = [];
var len__3300__auto___4981 = arguments.length;
var i__3301__auto___4982 = (0);
while(true){
if((i__3301__auto___4982 < len__3300__auto___4981)){
args4930.push((arguments[i__3301__auto___4982]));

var G__4983 = (i__3301__auto___4982 + (1));
i__3301__auto___4982 = G__4983;
continue;
} else {
}
break;
}

var G__4932 = args4930.length;
switch (G__4932) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4930.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___4985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___4985,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___4985,out){
return (function (state_4956){
var state_val_4957 = (state_4956[(1)]);
if((state_val_4957 === (7))){
var inst_4951 = (state_4956[(2)]);
var state_4956__$1 = state_4956;
var statearr_4958_4986 = state_4956__$1;
(statearr_4958_4986[(2)] = inst_4951);

(statearr_4958_4986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (1))){
var inst_4933 = null;
var state_4956__$1 = (function (){var statearr_4959 = state_4956;
(statearr_4959[(7)] = inst_4933);

return statearr_4959;
})();
var statearr_4960_4987 = state_4956__$1;
(statearr_4960_4987[(2)] = null);

(statearr_4960_4987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (4))){
var inst_4936 = (state_4956[(8)]);
var inst_4936__$1 = (state_4956[(2)]);
var inst_4937 = (inst_4936__$1 == null);
var inst_4938 = cljs.core.not.call(null,inst_4937);
var state_4956__$1 = (function (){var statearr_4961 = state_4956;
(statearr_4961[(8)] = inst_4936__$1);

return statearr_4961;
})();
if(inst_4938){
var statearr_4962_4988 = state_4956__$1;
(statearr_4962_4988[(1)] = (5));

} else {
var statearr_4963_4989 = state_4956__$1;
(statearr_4963_4989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (6))){
var state_4956__$1 = state_4956;
var statearr_4964_4990 = state_4956__$1;
(statearr_4964_4990[(2)] = null);

(statearr_4964_4990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (3))){
var inst_4953 = (state_4956[(2)]);
var inst_4954 = cljs.core.async.close_BANG_.call(null,out);
var state_4956__$1 = (function (){var statearr_4965 = state_4956;
(statearr_4965[(9)] = inst_4953);

return statearr_4965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4956__$1,inst_4954);
} else {
if((state_val_4957 === (2))){
var state_4956__$1 = state_4956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4956__$1,(4),ch);
} else {
if((state_val_4957 === (11))){
var inst_4936 = (state_4956[(8)]);
var inst_4945 = (state_4956[(2)]);
var inst_4933 = inst_4936;
var state_4956__$1 = (function (){var statearr_4966 = state_4956;
(statearr_4966[(10)] = inst_4945);

(statearr_4966[(7)] = inst_4933);

return statearr_4966;
})();
var statearr_4967_4991 = state_4956__$1;
(statearr_4967_4991[(2)] = null);

(statearr_4967_4991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (9))){
var inst_4936 = (state_4956[(8)]);
var state_4956__$1 = state_4956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4956__$1,(11),out,inst_4936);
} else {
if((state_val_4957 === (5))){
var inst_4936 = (state_4956[(8)]);
var inst_4933 = (state_4956[(7)]);
var inst_4940 = cljs.core._EQ_.call(null,inst_4936,inst_4933);
var state_4956__$1 = state_4956;
if(inst_4940){
var statearr_4969_4992 = state_4956__$1;
(statearr_4969_4992[(1)] = (8));

} else {
var statearr_4970_4993 = state_4956__$1;
(statearr_4970_4993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (10))){
var inst_4948 = (state_4956[(2)]);
var state_4956__$1 = state_4956;
var statearr_4971_4994 = state_4956__$1;
(statearr_4971_4994[(2)] = inst_4948);

(statearr_4971_4994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4957 === (8))){
var inst_4933 = (state_4956[(7)]);
var tmp4968 = inst_4933;
var inst_4933__$1 = tmp4968;
var state_4956__$1 = (function (){var statearr_4972 = state_4956;
(statearr_4972[(7)] = inst_4933__$1);

return statearr_4972;
})();
var statearr_4973_4995 = state_4956__$1;
(statearr_4973_4995[(2)] = null);

(statearr_4973_4995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___4985,out))
;
return ((function (switch__2376__auto__,c__2441__auto___4985,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_4977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4977[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_4977[(1)] = (1));

return statearr_4977;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_4956){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_4956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e4978){if((e4978 instanceof Object)){
var ex__2380__auto__ = e4978;
var statearr_4979_4996 = state_4956;
(statearr_4979_4996[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4997 = state_4956;
state_4956 = G__4997;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_4956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_4956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___4985,out))
})();
var state__2443__auto__ = (function (){var statearr_4980 = f__2442__auto__.call(null);
(statearr_4980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___4985);

return statearr_4980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___4985,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args4998 = [];
var len__3300__auto___5068 = arguments.length;
var i__3301__auto___5069 = (0);
while(true){
if((i__3301__auto___5069 < len__3300__auto___5068)){
args4998.push((arguments[i__3301__auto___5069]));

var G__5070 = (i__3301__auto___5069 + (1));
i__3301__auto___5069 = G__5070;
continue;
} else {
}
break;
}

var G__5000 = args4998.length;
switch (G__5000) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4998.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___5072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___5072,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___5072,out){
return (function (state_5038){
var state_val_5039 = (state_5038[(1)]);
if((state_val_5039 === (7))){
var inst_5034 = (state_5038[(2)]);
var state_5038__$1 = state_5038;
var statearr_5040_5073 = state_5038__$1;
(statearr_5040_5073[(2)] = inst_5034);

(statearr_5040_5073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (1))){
var inst_5001 = (new Array(n));
var inst_5002 = inst_5001;
var inst_5003 = (0);
var state_5038__$1 = (function (){var statearr_5041 = state_5038;
(statearr_5041[(7)] = inst_5003);

(statearr_5041[(8)] = inst_5002);

return statearr_5041;
})();
var statearr_5042_5074 = state_5038__$1;
(statearr_5042_5074[(2)] = null);

(statearr_5042_5074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (4))){
var inst_5006 = (state_5038[(9)]);
var inst_5006__$1 = (state_5038[(2)]);
var inst_5007 = (inst_5006__$1 == null);
var inst_5008 = cljs.core.not.call(null,inst_5007);
var state_5038__$1 = (function (){var statearr_5043 = state_5038;
(statearr_5043[(9)] = inst_5006__$1);

return statearr_5043;
})();
if(inst_5008){
var statearr_5044_5075 = state_5038__$1;
(statearr_5044_5075[(1)] = (5));

} else {
var statearr_5045_5076 = state_5038__$1;
(statearr_5045_5076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (15))){
var inst_5028 = (state_5038[(2)]);
var state_5038__$1 = state_5038;
var statearr_5046_5077 = state_5038__$1;
(statearr_5046_5077[(2)] = inst_5028);

(statearr_5046_5077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (13))){
var state_5038__$1 = state_5038;
var statearr_5047_5078 = state_5038__$1;
(statearr_5047_5078[(2)] = null);

(statearr_5047_5078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (6))){
var inst_5003 = (state_5038[(7)]);
var inst_5024 = (inst_5003 > (0));
var state_5038__$1 = state_5038;
if(cljs.core.truth_(inst_5024)){
var statearr_5048_5079 = state_5038__$1;
(statearr_5048_5079[(1)] = (12));

} else {
var statearr_5049_5080 = state_5038__$1;
(statearr_5049_5080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (3))){
var inst_5036 = (state_5038[(2)]);
var state_5038__$1 = state_5038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5038__$1,inst_5036);
} else {
if((state_val_5039 === (12))){
var inst_5002 = (state_5038[(8)]);
var inst_5026 = cljs.core.vec.call(null,inst_5002);
var state_5038__$1 = state_5038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5038__$1,(15),out,inst_5026);
} else {
if((state_val_5039 === (2))){
var state_5038__$1 = state_5038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5038__$1,(4),ch);
} else {
if((state_val_5039 === (11))){
var inst_5018 = (state_5038[(2)]);
var inst_5019 = (new Array(n));
var inst_5002 = inst_5019;
var inst_5003 = (0);
var state_5038__$1 = (function (){var statearr_5050 = state_5038;
(statearr_5050[(10)] = inst_5018);

(statearr_5050[(7)] = inst_5003);

(statearr_5050[(8)] = inst_5002);

return statearr_5050;
})();
var statearr_5051_5081 = state_5038__$1;
(statearr_5051_5081[(2)] = null);

(statearr_5051_5081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (9))){
var inst_5002 = (state_5038[(8)]);
var inst_5016 = cljs.core.vec.call(null,inst_5002);
var state_5038__$1 = state_5038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5038__$1,(11),out,inst_5016);
} else {
if((state_val_5039 === (5))){
var inst_5006 = (state_5038[(9)]);
var inst_5003 = (state_5038[(7)]);
var inst_5002 = (state_5038[(8)]);
var inst_5011 = (state_5038[(11)]);
var inst_5010 = (inst_5002[inst_5003] = inst_5006);
var inst_5011__$1 = (inst_5003 + (1));
var inst_5012 = (inst_5011__$1 < n);
var state_5038__$1 = (function (){var statearr_5052 = state_5038;
(statearr_5052[(11)] = inst_5011__$1);

(statearr_5052[(12)] = inst_5010);

return statearr_5052;
})();
if(cljs.core.truth_(inst_5012)){
var statearr_5053_5082 = state_5038__$1;
(statearr_5053_5082[(1)] = (8));

} else {
var statearr_5054_5083 = state_5038__$1;
(statearr_5054_5083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (14))){
var inst_5031 = (state_5038[(2)]);
var inst_5032 = cljs.core.async.close_BANG_.call(null,out);
var state_5038__$1 = (function (){var statearr_5056 = state_5038;
(statearr_5056[(13)] = inst_5031);

return statearr_5056;
})();
var statearr_5057_5084 = state_5038__$1;
(statearr_5057_5084[(2)] = inst_5032);

(statearr_5057_5084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (10))){
var inst_5022 = (state_5038[(2)]);
var state_5038__$1 = state_5038;
var statearr_5058_5085 = state_5038__$1;
(statearr_5058_5085[(2)] = inst_5022);

(statearr_5058_5085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5039 === (8))){
var inst_5002 = (state_5038[(8)]);
var inst_5011 = (state_5038[(11)]);
var tmp5055 = inst_5002;
var inst_5002__$1 = tmp5055;
var inst_5003 = inst_5011;
var state_5038__$1 = (function (){var statearr_5059 = state_5038;
(statearr_5059[(7)] = inst_5003);

(statearr_5059[(8)] = inst_5002__$1);

return statearr_5059;
})();
var statearr_5060_5086 = state_5038__$1;
(statearr_5060_5086[(2)] = null);

(statearr_5060_5086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___5072,out))
;
return ((function (switch__2376__auto__,c__2441__auto___5072,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_5064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5064[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_5064[(1)] = (1));

return statearr_5064;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_5038){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_5038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e5065){if((e5065 instanceof Object)){
var ex__2380__auto__ = e5065;
var statearr_5066_5087 = state_5038;
(statearr_5066_5087[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5088 = state_5038;
state_5038 = G__5088;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_5038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_5038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___5072,out))
})();
var state__2443__auto__ = (function (){var statearr_5067 = f__2442__auto__.call(null);
(statearr_5067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___5072);

return statearr_5067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___5072,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args5089 = [];
var len__3300__auto___5163 = arguments.length;
var i__3301__auto___5164 = (0);
while(true){
if((i__3301__auto___5164 < len__3300__auto___5163)){
args5089.push((arguments[i__3301__auto___5164]));

var G__5165 = (i__3301__auto___5164 + (1));
i__3301__auto___5164 = G__5165;
continue;
} else {
}
break;
}

var G__5091 = args5089.length;
switch (G__5091) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5089.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2441__auto___5167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2441__auto___5167,out){
return (function (){
var f__2442__auto__ = (function (){var switch__2376__auto__ = ((function (c__2441__auto___5167,out){
return (function (state_5133){
var state_val_5134 = (state_5133[(1)]);
if((state_val_5134 === (7))){
var inst_5129 = (state_5133[(2)]);
var state_5133__$1 = state_5133;
var statearr_5135_5168 = state_5133__$1;
(statearr_5135_5168[(2)] = inst_5129);

(statearr_5135_5168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (1))){
var inst_5092 = [];
var inst_5093 = inst_5092;
var inst_5094 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5133__$1 = (function (){var statearr_5136 = state_5133;
(statearr_5136[(7)] = inst_5094);

(statearr_5136[(8)] = inst_5093);

return statearr_5136;
})();
var statearr_5137_5169 = state_5133__$1;
(statearr_5137_5169[(2)] = null);

(statearr_5137_5169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (4))){
var inst_5097 = (state_5133[(9)]);
var inst_5097__$1 = (state_5133[(2)]);
var inst_5098 = (inst_5097__$1 == null);
var inst_5099 = cljs.core.not.call(null,inst_5098);
var state_5133__$1 = (function (){var statearr_5138 = state_5133;
(statearr_5138[(9)] = inst_5097__$1);

return statearr_5138;
})();
if(inst_5099){
var statearr_5139_5170 = state_5133__$1;
(statearr_5139_5170[(1)] = (5));

} else {
var statearr_5140_5171 = state_5133__$1;
(statearr_5140_5171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (15))){
var inst_5123 = (state_5133[(2)]);
var state_5133__$1 = state_5133;
var statearr_5141_5172 = state_5133__$1;
(statearr_5141_5172[(2)] = inst_5123);

(statearr_5141_5172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (13))){
var state_5133__$1 = state_5133;
var statearr_5142_5173 = state_5133__$1;
(statearr_5142_5173[(2)] = null);

(statearr_5142_5173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (6))){
var inst_5093 = (state_5133[(8)]);
var inst_5118 = inst_5093.length;
var inst_5119 = (inst_5118 > (0));
var state_5133__$1 = state_5133;
if(cljs.core.truth_(inst_5119)){
var statearr_5143_5174 = state_5133__$1;
(statearr_5143_5174[(1)] = (12));

} else {
var statearr_5144_5175 = state_5133__$1;
(statearr_5144_5175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (3))){
var inst_5131 = (state_5133[(2)]);
var state_5133__$1 = state_5133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5133__$1,inst_5131);
} else {
if((state_val_5134 === (12))){
var inst_5093 = (state_5133[(8)]);
var inst_5121 = cljs.core.vec.call(null,inst_5093);
var state_5133__$1 = state_5133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5133__$1,(15),out,inst_5121);
} else {
if((state_val_5134 === (2))){
var state_5133__$1 = state_5133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5133__$1,(4),ch);
} else {
if((state_val_5134 === (11))){
var inst_5097 = (state_5133[(9)]);
var inst_5101 = (state_5133[(10)]);
var inst_5111 = (state_5133[(2)]);
var inst_5112 = [];
var inst_5113 = inst_5112.push(inst_5097);
var inst_5093 = inst_5112;
var inst_5094 = inst_5101;
var state_5133__$1 = (function (){var statearr_5145 = state_5133;
(statearr_5145[(11)] = inst_5111);

(statearr_5145[(12)] = inst_5113);

(statearr_5145[(7)] = inst_5094);

(statearr_5145[(8)] = inst_5093);

return statearr_5145;
})();
var statearr_5146_5176 = state_5133__$1;
(statearr_5146_5176[(2)] = null);

(statearr_5146_5176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (9))){
var inst_5093 = (state_5133[(8)]);
var inst_5109 = cljs.core.vec.call(null,inst_5093);
var state_5133__$1 = state_5133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5133__$1,(11),out,inst_5109);
} else {
if((state_val_5134 === (5))){
var inst_5097 = (state_5133[(9)]);
var inst_5094 = (state_5133[(7)]);
var inst_5101 = (state_5133[(10)]);
var inst_5101__$1 = f.call(null,inst_5097);
var inst_5102 = cljs.core._EQ_.call(null,inst_5101__$1,inst_5094);
var inst_5103 = cljs.core.keyword_identical_QMARK_.call(null,inst_5094,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5104 = (inst_5102) || (inst_5103);
var state_5133__$1 = (function (){var statearr_5147 = state_5133;
(statearr_5147[(10)] = inst_5101__$1);

return statearr_5147;
})();
if(cljs.core.truth_(inst_5104)){
var statearr_5148_5177 = state_5133__$1;
(statearr_5148_5177[(1)] = (8));

} else {
var statearr_5149_5178 = state_5133__$1;
(statearr_5149_5178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (14))){
var inst_5126 = (state_5133[(2)]);
var inst_5127 = cljs.core.async.close_BANG_.call(null,out);
var state_5133__$1 = (function (){var statearr_5151 = state_5133;
(statearr_5151[(13)] = inst_5126);

return statearr_5151;
})();
var statearr_5152_5179 = state_5133__$1;
(statearr_5152_5179[(2)] = inst_5127);

(statearr_5152_5179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (10))){
var inst_5116 = (state_5133[(2)]);
var state_5133__$1 = state_5133;
var statearr_5153_5180 = state_5133__$1;
(statearr_5153_5180[(2)] = inst_5116);

(statearr_5153_5180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5134 === (8))){
var inst_5097 = (state_5133[(9)]);
var inst_5093 = (state_5133[(8)]);
var inst_5101 = (state_5133[(10)]);
var inst_5106 = inst_5093.push(inst_5097);
var tmp5150 = inst_5093;
var inst_5093__$1 = tmp5150;
var inst_5094 = inst_5101;
var state_5133__$1 = (function (){var statearr_5154 = state_5133;
(statearr_5154[(14)] = inst_5106);

(statearr_5154[(7)] = inst_5094);

(statearr_5154[(8)] = inst_5093__$1);

return statearr_5154;
})();
var statearr_5155_5181 = state_5133__$1;
(statearr_5155_5181[(2)] = null);

(statearr_5155_5181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2441__auto___5167,out))
;
return ((function (switch__2376__auto__,c__2441__auto___5167,out){
return (function() {
var cljs$core$async$state_machine__2377__auto__ = null;
var cljs$core$async$state_machine__2377__auto____0 = (function (){
var statearr_5159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5159[(0)] = cljs$core$async$state_machine__2377__auto__);

(statearr_5159[(1)] = (1));

return statearr_5159;
});
var cljs$core$async$state_machine__2377__auto____1 = (function (state_5133){
while(true){
var ret_value__2378__auto__ = (function (){try{while(true){
var result__2379__auto__ = switch__2376__auto__.call(null,state_5133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2379__auto__;
}
break;
}
}catch (e5160){if((e5160 instanceof Object)){
var ex__2380__auto__ = e5160;
var statearr_5161_5182 = state_5133;
(statearr_5161_5182[(5)] = ex__2380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5183 = state_5133;
state_5133 = G__5183;
continue;
} else {
return ret_value__2378__auto__;
}
break;
}
});
cljs$core$async$state_machine__2377__auto__ = function(state_5133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2377__auto____1.call(this,state_5133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2377__auto____0;
cljs$core$async$state_machine__2377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2377__auto____1;
return cljs$core$async$state_machine__2377__auto__;
})()
;})(switch__2376__auto__,c__2441__auto___5167,out))
})();
var state__2443__auto__ = (function (){var statearr_5162 = f__2442__auto__.call(null);
(statearr_5162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2441__auto___5167);

return statearr_5162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2443__auto__);
});})(c__2441__auto___5167,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map