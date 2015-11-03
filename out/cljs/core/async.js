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
if(typeof cljs.core.async.t3854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3854 = (function (fn_handler,f,meta3855){
this.fn_handler = fn_handler;
this.f = f;
this.meta3855 = meta3855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3856,meta3855__$1){
var self__ = this;
var _3856__$1 = this;
return (new cljs.core.async.t3854(self__.fn_handler,self__.f,meta3855__$1));
});

cljs.core.async.t3854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3856){
var self__ = this;
var _3856__$1 = this;
return self__.meta3855;
});

cljs.core.async.t3854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t3854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t3854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta3855","meta3855",-1191930212,null)], null);
});

cljs.core.async.t3854.cljs$lang$type = true;

cljs.core.async.t3854.cljs$lang$ctorStr = "cljs.core.async/t3854";

cljs.core.async.t3854.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3854");
});

cljs.core.async.__GT_t3854 = (function cljs$core$async$fn_handler_$___GT_t3854(fn_handler__$1,f__$1,meta3855){
return (new cljs.core.async.t3854(fn_handler__$1,f__$1,meta3855));
});

}

return (new cljs.core.async.t3854(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args3859 = [];
var len__3300__auto___3862 = arguments.length;
var i__3301__auto___3863 = (0);
while(true){
if((i__3301__auto___3863 < len__3300__auto___3862)){
args3859.push((arguments[i__3301__auto___3863]));

var G__3864 = (i__3301__auto___3863 + (1));
i__3301__auto___3863 = G__3864;
continue;
} else {
}
break;
}

var G__3861 = args3859.length;
switch (G__3861) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3859.length)].join('')));

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
var args3866 = [];
var len__3300__auto___3869 = arguments.length;
var i__3301__auto___3870 = (0);
while(true){
if((i__3301__auto___3870 < len__3300__auto___3869)){
args3866.push((arguments[i__3301__auto___3870]));

var G__3871 = (i__3301__auto___3870 + (1));
i__3301__auto___3870 = G__3871;
continue;
} else {
}
break;
}

var G__3868 = args3866.length;
switch (G__3868) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3866.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3873 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3873);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3873,ret){
return (function (){
return fn1.call(null,val_3873);
});})(val_3873,ret))
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
var args3874 = [];
var len__3300__auto___3877 = arguments.length;
var i__3301__auto___3878 = (0);
while(true){
if((i__3301__auto___3878 < len__3300__auto___3877)){
args3874.push((arguments[i__3301__auto___3878]));

var G__3879 = (i__3301__auto___3878 + (1));
i__3301__auto___3878 = G__3879;
continue;
} else {
}
break;
}

var G__3876 = args3874.length;
switch (G__3876) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3874.length)].join('')));

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
var n__3209__auto___3881 = n;
var x_3882 = (0);
while(true){
if((x_3882 < n__3209__auto___3881)){
(a[x_3882] = (0));

var G__3883 = (x_3882 + (1));
x_3882 = G__3883;
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

var G__3884 = (i + (1));
i = G__3884;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t3888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3888 = (function (alt_flag,flag,meta3889){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta3889 = meta3889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3890,meta3889__$1){
var self__ = this;
var _3890__$1 = this;
return (new cljs.core.async.t3888(self__.alt_flag,self__.flag,meta3889__$1));
});})(flag))
;

cljs.core.async.t3888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3890){
var self__ = this;
var _3890__$1 = this;
return self__.meta3889;
});})(flag))
;

cljs.core.async.t3888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t3888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t3888.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3889","meta3889",387744851,null)], null);
});})(flag))
;

cljs.core.async.t3888.cljs$lang$type = true;

cljs.core.async.t3888.cljs$lang$ctorStr = "cljs.core.async/t3888";

cljs.core.async.t3888.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3888");
});})(flag))
;

cljs.core.async.__GT_t3888 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t3888(alt_flag__$1,flag__$1,meta3889){
return (new cljs.core.async.t3888(alt_flag__$1,flag__$1,meta3889));
});})(flag))
;

}

return (new cljs.core.async.t3888(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t3894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3894 = (function (alt_handler,flag,cb,meta3895){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta3895 = meta3895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3896,meta3895__$1){
var self__ = this;
var _3896__$1 = this;
return (new cljs.core.async.t3894(self__.alt_handler,self__.flag,self__.cb,meta3895__$1));
});

cljs.core.async.t3894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3896){
var self__ = this;
var _3896__$1 = this;
return self__.meta3895;
});

cljs.core.async.t3894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t3894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t3894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3895","meta3895",1269134453,null)], null);
});

cljs.core.async.t3894.cljs$lang$type = true;

cljs.core.async.t3894.cljs$lang$ctorStr = "cljs.core.async/t3894";

cljs.core.async.t3894.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3894");
});

cljs.core.async.__GT_t3894 = (function cljs$core$async$alt_handler_$___GT_t3894(alt_handler__$1,flag__$1,cb__$1,meta3895){
return (new cljs.core.async.t3894(alt_handler__$1,flag__$1,cb__$1,meta3895));
});

}

return (new cljs.core.async.t3894(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3897_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3897_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3898_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3898_SHARP_,port], null));
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
var G__3899 = (i + (1));
i = G__3899;
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
var len__3300__auto___3905 = arguments.length;
var i__3301__auto___3906 = (0);
while(true){
if((i__3301__auto___3906 < len__3300__auto___3905)){
args__3303__auto__.push((arguments[i__3301__auto___3906]));

var G__3907 = (i__3301__auto___3906 + (1));
i__3301__auto___3906 = G__3907;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((1) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3902){
var map__3903 = p__3902;
var map__3903__$1 = ((((!((map__3903 == null)))?((((map__3903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3903):map__3903);
var opts = map__3903__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3900){
var G__3901 = cljs.core.first.call(null,seq3900);
var seq3900__$1 = cljs.core.next.call(null,seq3900);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3901,seq3900__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args3908 = [];
var len__3300__auto___3958 = arguments.length;
var i__3301__auto___3959 = (0);
while(true){
if((i__3301__auto___3959 < len__3300__auto___3958)){
args3908.push((arguments[i__3301__auto___3959]));

var G__3960 = (i__3301__auto___3959 + (1));
i__3301__auto___3959 = G__3960;
continue;
} else {
}
break;
}

var G__3910 = args3908.length;
switch (G__3910) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3908.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1424__auto___3962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___3962){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___3962){
return (function (state_3934){
var state_val_3935 = (state_3934[(1)]);
if((state_val_3935 === (7))){
var inst_3930 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3936_3963 = state_3934__$1;
(statearr_3936_3963[(2)] = inst_3930);

(statearr_3936_3963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (1))){
var state_3934__$1 = state_3934;
var statearr_3937_3964 = state_3934__$1;
(statearr_3937_3964[(2)] = null);

(statearr_3937_3964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (4))){
var inst_3913 = (state_3934[(7)]);
var inst_3913__$1 = (state_3934[(2)]);
var inst_3914 = (inst_3913__$1 == null);
var state_3934__$1 = (function (){var statearr_3938 = state_3934;
(statearr_3938[(7)] = inst_3913__$1);

return statearr_3938;
})();
if(cljs.core.truth_(inst_3914)){
var statearr_3939_3965 = state_3934__$1;
(statearr_3939_3965[(1)] = (5));

} else {
var statearr_3940_3966 = state_3934__$1;
(statearr_3940_3966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (13))){
var state_3934__$1 = state_3934;
var statearr_3941_3967 = state_3934__$1;
(statearr_3941_3967[(2)] = null);

(statearr_3941_3967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (6))){
var inst_3913 = (state_3934[(7)]);
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3934__$1,(11),to,inst_3913);
} else {
if((state_val_3935 === (3))){
var inst_3932 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3934__$1,inst_3932);
} else {
if((state_val_3935 === (12))){
var state_3934__$1 = state_3934;
var statearr_3942_3968 = state_3934__$1;
(statearr_3942_3968[(2)] = null);

(statearr_3942_3968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (2))){
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3934__$1,(4),from);
} else {
if((state_val_3935 === (11))){
var inst_3923 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
if(cljs.core.truth_(inst_3923)){
var statearr_3943_3969 = state_3934__$1;
(statearr_3943_3969[(1)] = (12));

} else {
var statearr_3944_3970 = state_3934__$1;
(statearr_3944_3970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (9))){
var state_3934__$1 = state_3934;
var statearr_3945_3971 = state_3934__$1;
(statearr_3945_3971[(2)] = null);

(statearr_3945_3971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (5))){
var state_3934__$1 = state_3934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3946_3972 = state_3934__$1;
(statearr_3946_3972[(1)] = (8));

} else {
var statearr_3947_3973 = state_3934__$1;
(statearr_3947_3973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (14))){
var inst_3928 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3948_3974 = state_3934__$1;
(statearr_3948_3974[(2)] = inst_3928);

(statearr_3948_3974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (10))){
var inst_3920 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3949_3975 = state_3934__$1;
(statearr_3949_3975[(2)] = inst_3920);

(statearr_3949_3975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (8))){
var inst_3917 = cljs.core.async.close_BANG_.call(null,to);
var state_3934__$1 = state_3934;
var statearr_3950_3976 = state_3934__$1;
(statearr_3950_3976[(2)] = inst_3917);

(statearr_3950_3976[(1)] = (10));


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
});})(c__1424__auto___3962))
;
return ((function (switch__1359__auto__,c__1424__auto___3962){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_3954 = [null,null,null,null,null,null,null,null];
(statearr_3954[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_3954[(1)] = (1));

return statearr_3954;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_3934){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_3934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e3955){if((e3955 instanceof Object)){
var ex__1363__auto__ = e3955;
var statearr_3956_3977 = state_3934;
(statearr_3956_3977[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3978 = state_3934;
state_3934 = G__3978;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_3934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_3934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___3962))
})();
var state__1426__auto__ = (function (){var statearr_3957 = f__1425__auto__.call(null);
(statearr_3957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___3962);

return statearr_3957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___3962))
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
return (function (p__4162){
var vec__4163 = p__4162;
var v = cljs.core.nth.call(null,vec__4163,(0),null);
var p = cljs.core.nth.call(null,vec__4163,(1),null);
var job = vec__4163;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1424__auto___4345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results){
return (function (state_4168){
var state_val_4169 = (state_4168[(1)]);
if((state_val_4169 === (1))){
var state_4168__$1 = state_4168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4168__$1,(2),res,v);
} else {
if((state_val_4169 === (2))){
var inst_4165 = (state_4168[(2)]);
var inst_4166 = cljs.core.async.close_BANG_.call(null,res);
var state_4168__$1 = (function (){var statearr_4170 = state_4168;
(statearr_4170[(7)] = inst_4165);

return statearr_4170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4168__$1,inst_4166);
} else {
return null;
}
}
});})(c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results))
;
return ((function (switch__1359__auto__,c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_4174 = [null,null,null,null,null,null,null,null];
(statearr_4174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__);

(statearr_4174[(1)] = (1));

return statearr_4174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1 = (function (state_4168){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4175){if((e4175 instanceof Object)){
var ex__1363__auto__ = e4175;
var statearr_4176_4346 = state_4168;
(statearr_4176_4346[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4347 = state_4168;
state_4168 = G__4347;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = function(state_4168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1.call(this,state_4168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results))
})();
var state__1426__auto__ = (function (){var statearr_4177 = f__1425__auto__.call(null);
(statearr_4177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___4345);

return statearr_4177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___4345,res,vec__4163,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4178){
var vec__4179 = p__4178;
var v = cljs.core.nth.call(null,vec__4179,(0),null);
var p = cljs.core.nth.call(null,vec__4179,(1),null);
var job = vec__4179;
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
var n__3209__auto___4348 = n;
var __4349 = (0);
while(true){
if((__4349 < n__3209__auto___4348)){
var G__4180_4350 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__4180_4350) {
case "compute":
var c__1424__auto___4352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4349,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (__4349,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function (state_4193){
var state_val_4194 = (state_4193[(1)]);
if((state_val_4194 === (1))){
var state_4193__$1 = state_4193;
var statearr_4195_4353 = state_4193__$1;
(statearr_4195_4353[(2)] = null);

(statearr_4195_4353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (2))){
var state_4193__$1 = state_4193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4193__$1,(4),jobs);
} else {
if((state_val_4194 === (3))){
var inst_4191 = (state_4193[(2)]);
var state_4193__$1 = state_4193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4193__$1,inst_4191);
} else {
if((state_val_4194 === (4))){
var inst_4183 = (state_4193[(2)]);
var inst_4184 = process.call(null,inst_4183);
var state_4193__$1 = state_4193;
if(cljs.core.truth_(inst_4184)){
var statearr_4196_4354 = state_4193__$1;
(statearr_4196_4354[(1)] = (5));

} else {
var statearr_4197_4355 = state_4193__$1;
(statearr_4197_4355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (5))){
var state_4193__$1 = state_4193;
var statearr_4198_4356 = state_4193__$1;
(statearr_4198_4356[(2)] = null);

(statearr_4198_4356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (6))){
var state_4193__$1 = state_4193;
var statearr_4199_4357 = state_4193__$1;
(statearr_4199_4357[(2)] = null);

(statearr_4199_4357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (7))){
var inst_4189 = (state_4193[(2)]);
var state_4193__$1 = state_4193;
var statearr_4200_4358 = state_4193__$1;
(statearr_4200_4358[(2)] = inst_4189);

(statearr_4200_4358[(1)] = (3));


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
});})(__4349,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
;
return ((function (__4349,switch__1359__auto__,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_4204 = [null,null,null,null,null,null,null];
(statearr_4204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__);

(statearr_4204[(1)] = (1));

return statearr_4204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1 = (function (state_4193){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4205){if((e4205 instanceof Object)){
var ex__1363__auto__ = e4205;
var statearr_4206_4359 = state_4193;
(statearr_4206_4359[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4360 = state_4193;
state_4193 = G__4360;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = function(state_4193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1.call(this,state_4193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__;
})()
;})(__4349,switch__1359__auto__,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
})();
var state__1426__auto__ = (function (){var statearr_4207 = f__1425__auto__.call(null);
(statearr_4207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___4352);

return statearr_4207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(__4349,c__1424__auto___4352,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
);


break;
case "async":
var c__1424__auto___4361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4349,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (__4349,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function (state_4220){
var state_val_4221 = (state_4220[(1)]);
if((state_val_4221 === (1))){
var state_4220__$1 = state_4220;
var statearr_4222_4362 = state_4220__$1;
(statearr_4222_4362[(2)] = null);

(statearr_4222_4362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (2))){
var state_4220__$1 = state_4220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4220__$1,(4),jobs);
} else {
if((state_val_4221 === (3))){
var inst_4218 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4220__$1,inst_4218);
} else {
if((state_val_4221 === (4))){
var inst_4210 = (state_4220[(2)]);
var inst_4211 = async.call(null,inst_4210);
var state_4220__$1 = state_4220;
if(cljs.core.truth_(inst_4211)){
var statearr_4223_4363 = state_4220__$1;
(statearr_4223_4363[(1)] = (5));

} else {
var statearr_4224_4364 = state_4220__$1;
(statearr_4224_4364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (5))){
var state_4220__$1 = state_4220;
var statearr_4225_4365 = state_4220__$1;
(statearr_4225_4365[(2)] = null);

(statearr_4225_4365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (6))){
var state_4220__$1 = state_4220;
var statearr_4226_4366 = state_4220__$1;
(statearr_4226_4366[(2)] = null);

(statearr_4226_4366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (7))){
var inst_4216 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
var statearr_4227_4367 = state_4220__$1;
(statearr_4227_4367[(2)] = inst_4216);

(statearr_4227_4367[(1)] = (3));


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
});})(__4349,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
;
return ((function (__4349,switch__1359__auto__,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_4231 = [null,null,null,null,null,null,null];
(statearr_4231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__);

(statearr_4231[(1)] = (1));

return statearr_4231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1 = (function (state_4220){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4232){if((e4232 instanceof Object)){
var ex__1363__auto__ = e4232;
var statearr_4233_4368 = state_4220;
(statearr_4233_4368[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4369 = state_4220;
state_4220 = G__4369;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = function(state_4220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1.call(this,state_4220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__;
})()
;})(__4349,switch__1359__auto__,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
})();
var state__1426__auto__ = (function (){var statearr_4234 = f__1425__auto__.call(null);
(statearr_4234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___4361);

return statearr_4234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(__4349,c__1424__auto___4361,G__4180_4350,n__3209__auto___4348,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__4370 = (__4349 + (1));
__4349 = G__4370;
continue;
} else {
}
break;
}

var c__1424__auto___4371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___4371,jobs,results,process,async){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___4371,jobs,results,process,async){
return (function (state_4256){
var state_val_4257 = (state_4256[(1)]);
if((state_val_4257 === (1))){
var state_4256__$1 = state_4256;
var statearr_4258_4372 = state_4256__$1;
(statearr_4258_4372[(2)] = null);

(statearr_4258_4372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4257 === (2))){
var state_4256__$1 = state_4256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4256__$1,(4),from);
} else {
if((state_val_4257 === (3))){
var inst_4254 = (state_4256[(2)]);
var state_4256__$1 = state_4256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4256__$1,inst_4254);
} else {
if((state_val_4257 === (4))){
var inst_4237 = (state_4256[(7)]);
var inst_4237__$1 = (state_4256[(2)]);
var inst_4238 = (inst_4237__$1 == null);
var state_4256__$1 = (function (){var statearr_4259 = state_4256;
(statearr_4259[(7)] = inst_4237__$1);

return statearr_4259;
})();
if(cljs.core.truth_(inst_4238)){
var statearr_4260_4373 = state_4256__$1;
(statearr_4260_4373[(1)] = (5));

} else {
var statearr_4261_4374 = state_4256__$1;
(statearr_4261_4374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4257 === (5))){
var inst_4240 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4256__$1 = state_4256;
var statearr_4262_4375 = state_4256__$1;
(statearr_4262_4375[(2)] = inst_4240);

(statearr_4262_4375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4257 === (6))){
var inst_4237 = (state_4256[(7)]);
var inst_4242 = (state_4256[(8)]);
var inst_4242__$1 = cljs.core.async.chan.call(null,(1));
var inst_4243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4244 = [inst_4237,inst_4242__$1];
var inst_4245 = (new cljs.core.PersistentVector(null,2,(5),inst_4243,inst_4244,null));
var state_4256__$1 = (function (){var statearr_4263 = state_4256;
(statearr_4263[(8)] = inst_4242__$1);

return statearr_4263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4256__$1,(8),jobs,inst_4245);
} else {
if((state_val_4257 === (7))){
var inst_4252 = (state_4256[(2)]);
var state_4256__$1 = state_4256;
var statearr_4264_4376 = state_4256__$1;
(statearr_4264_4376[(2)] = inst_4252);

(statearr_4264_4376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4257 === (8))){
var inst_4242 = (state_4256[(8)]);
var inst_4247 = (state_4256[(2)]);
var state_4256__$1 = (function (){var statearr_4265 = state_4256;
(statearr_4265[(9)] = inst_4247);

return statearr_4265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4256__$1,(9),results,inst_4242);
} else {
if((state_val_4257 === (9))){
var inst_4249 = (state_4256[(2)]);
var state_4256__$1 = (function (){var statearr_4266 = state_4256;
(statearr_4266[(10)] = inst_4249);

return statearr_4266;
})();
var statearr_4267_4377 = state_4256__$1;
(statearr_4267_4377[(2)] = null);

(statearr_4267_4377[(1)] = (2));


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
});})(c__1424__auto___4371,jobs,results,process,async))
;
return ((function (switch__1359__auto__,c__1424__auto___4371,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_4271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__);

(statearr_4271[(1)] = (1));

return statearr_4271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1 = (function (state_4256){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4272){if((e4272 instanceof Object)){
var ex__1363__auto__ = e4272;
var statearr_4273_4378 = state_4256;
(statearr_4273_4378[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4379 = state_4256;
state_4256 = G__4379;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = function(state_4256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1.call(this,state_4256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___4371,jobs,results,process,async))
})();
var state__1426__auto__ = (function (){var statearr_4274 = f__1425__auto__.call(null);
(statearr_4274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___4371);

return statearr_4274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___4371,jobs,results,process,async))
);


var c__1424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto__,jobs,results,process,async){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto__,jobs,results,process,async){
return (function (state_4312){
var state_val_4313 = (state_4312[(1)]);
if((state_val_4313 === (7))){
var inst_4308 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4314_4380 = state_4312__$1;
(statearr_4314_4380[(2)] = inst_4308);

(statearr_4314_4380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (20))){
var state_4312__$1 = state_4312;
var statearr_4315_4381 = state_4312__$1;
(statearr_4315_4381[(2)] = null);

(statearr_4315_4381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (1))){
var state_4312__$1 = state_4312;
var statearr_4316_4382 = state_4312__$1;
(statearr_4316_4382[(2)] = null);

(statearr_4316_4382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (4))){
var inst_4277 = (state_4312[(7)]);
var inst_4277__$1 = (state_4312[(2)]);
var inst_4278 = (inst_4277__$1 == null);
var state_4312__$1 = (function (){var statearr_4317 = state_4312;
(statearr_4317[(7)] = inst_4277__$1);

return statearr_4317;
})();
if(cljs.core.truth_(inst_4278)){
var statearr_4318_4383 = state_4312__$1;
(statearr_4318_4383[(1)] = (5));

} else {
var statearr_4319_4384 = state_4312__$1;
(statearr_4319_4384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (15))){
var inst_4290 = (state_4312[(8)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4312__$1,(18),to,inst_4290);
} else {
if((state_val_4313 === (21))){
var inst_4303 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4320_4385 = state_4312__$1;
(statearr_4320_4385[(2)] = inst_4303);

(statearr_4320_4385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (13))){
var inst_4305 = (state_4312[(2)]);
var state_4312__$1 = (function (){var statearr_4321 = state_4312;
(statearr_4321[(9)] = inst_4305);

return statearr_4321;
})();
var statearr_4322_4386 = state_4312__$1;
(statearr_4322_4386[(2)] = null);

(statearr_4322_4386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (6))){
var inst_4277 = (state_4312[(7)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4312__$1,(11),inst_4277);
} else {
if((state_val_4313 === (17))){
var inst_4298 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
if(cljs.core.truth_(inst_4298)){
var statearr_4323_4387 = state_4312__$1;
(statearr_4323_4387[(1)] = (19));

} else {
var statearr_4324_4388 = state_4312__$1;
(statearr_4324_4388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (3))){
var inst_4310 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4312__$1,inst_4310);
} else {
if((state_val_4313 === (12))){
var inst_4287 = (state_4312[(10)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4312__$1,(14),inst_4287);
} else {
if((state_val_4313 === (2))){
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4312__$1,(4),results);
} else {
if((state_val_4313 === (19))){
var state_4312__$1 = state_4312;
var statearr_4325_4389 = state_4312__$1;
(statearr_4325_4389[(2)] = null);

(statearr_4325_4389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (11))){
var inst_4287 = (state_4312[(2)]);
var state_4312__$1 = (function (){var statearr_4326 = state_4312;
(statearr_4326[(10)] = inst_4287);

return statearr_4326;
})();
var statearr_4327_4390 = state_4312__$1;
(statearr_4327_4390[(2)] = null);

(statearr_4327_4390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (9))){
var state_4312__$1 = state_4312;
var statearr_4328_4391 = state_4312__$1;
(statearr_4328_4391[(2)] = null);

(statearr_4328_4391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (5))){
var state_4312__$1 = state_4312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4329_4392 = state_4312__$1;
(statearr_4329_4392[(1)] = (8));

} else {
var statearr_4330_4393 = state_4312__$1;
(statearr_4330_4393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (14))){
var inst_4292 = (state_4312[(11)]);
var inst_4290 = (state_4312[(8)]);
var inst_4290__$1 = (state_4312[(2)]);
var inst_4291 = (inst_4290__$1 == null);
var inst_4292__$1 = cljs.core.not.call(null,inst_4291);
var state_4312__$1 = (function (){var statearr_4331 = state_4312;
(statearr_4331[(11)] = inst_4292__$1);

(statearr_4331[(8)] = inst_4290__$1);

return statearr_4331;
})();
if(inst_4292__$1){
var statearr_4332_4394 = state_4312__$1;
(statearr_4332_4394[(1)] = (15));

} else {
var statearr_4333_4395 = state_4312__$1;
(statearr_4333_4395[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (16))){
var inst_4292 = (state_4312[(11)]);
var state_4312__$1 = state_4312;
var statearr_4334_4396 = state_4312__$1;
(statearr_4334_4396[(2)] = inst_4292);

(statearr_4334_4396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (10))){
var inst_4284 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4335_4397 = state_4312__$1;
(statearr_4335_4397[(2)] = inst_4284);

(statearr_4335_4397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (18))){
var inst_4295 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4336_4398 = state_4312__$1;
(statearr_4336_4398[(2)] = inst_4295);

(statearr_4336_4398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (8))){
var inst_4281 = cljs.core.async.close_BANG_.call(null,to);
var state_4312__$1 = state_4312;
var statearr_4337_4399 = state_4312__$1;
(statearr_4337_4399[(2)] = inst_4281);

(statearr_4337_4399[(1)] = (10));


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
});})(c__1424__auto__,jobs,results,process,async))
;
return ((function (switch__1359__auto__,c__1424__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_4341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__);

(statearr_4341[(1)] = (1));

return statearr_4341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1 = (function (state_4312){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4342){if((e4342 instanceof Object)){
var ex__1363__auto__ = e4342;
var statearr_4343_4400 = state_4312;
(statearr_4343_4400[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4401 = state_4312;
state_4312 = G__4401;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__ = function(state_4312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1.call(this,state_4312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto__,jobs,results,process,async))
})();
var state__1426__auto__ = (function (){var statearr_4344 = f__1425__auto__.call(null);
(statearr_4344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto__);

return statearr_4344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto__,jobs,results,process,async))
);

return c__1424__auto__;
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
var args4402 = [];
var len__3300__auto___4405 = arguments.length;
var i__3301__auto___4406 = (0);
while(true){
if((i__3301__auto___4406 < len__3300__auto___4405)){
args4402.push((arguments[i__3301__auto___4406]));

var G__4407 = (i__3301__auto___4406 + (1));
i__3301__auto___4406 = G__4407;
continue;
} else {
}
break;
}

var G__4404 = args4402.length;
switch (G__4404) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4402.length)].join('')));

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
var args4409 = [];
var len__3300__auto___4412 = arguments.length;
var i__3301__auto___4413 = (0);
while(true){
if((i__3301__auto___4413 < len__3300__auto___4412)){
args4409.push((arguments[i__3301__auto___4413]));

var G__4414 = (i__3301__auto___4413 + (1));
i__3301__auto___4413 = G__4414;
continue;
} else {
}
break;
}

var G__4411 = args4409.length;
switch (G__4411) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4409.length)].join('')));

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
var args4416 = [];
var len__3300__auto___4469 = arguments.length;
var i__3301__auto___4470 = (0);
while(true){
if((i__3301__auto___4470 < len__3300__auto___4469)){
args4416.push((arguments[i__3301__auto___4470]));

var G__4471 = (i__3301__auto___4470 + (1));
i__3301__auto___4470 = G__4471;
continue;
} else {
}
break;
}

var G__4418 = args4416.length;
switch (G__4418) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4416.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1424__auto___4473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___4473,tc,fc){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___4473,tc,fc){
return (function (state_4444){
var state_val_4445 = (state_4444[(1)]);
if((state_val_4445 === (7))){
var inst_4440 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4446_4474 = state_4444__$1;
(statearr_4446_4474[(2)] = inst_4440);

(statearr_4446_4474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (1))){
var state_4444__$1 = state_4444;
var statearr_4447_4475 = state_4444__$1;
(statearr_4447_4475[(2)] = null);

(statearr_4447_4475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (4))){
var inst_4421 = (state_4444[(7)]);
var inst_4421__$1 = (state_4444[(2)]);
var inst_4422 = (inst_4421__$1 == null);
var state_4444__$1 = (function (){var statearr_4448 = state_4444;
(statearr_4448[(7)] = inst_4421__$1);

return statearr_4448;
})();
if(cljs.core.truth_(inst_4422)){
var statearr_4449_4476 = state_4444__$1;
(statearr_4449_4476[(1)] = (5));

} else {
var statearr_4450_4477 = state_4444__$1;
(statearr_4450_4477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (13))){
var state_4444__$1 = state_4444;
var statearr_4451_4478 = state_4444__$1;
(statearr_4451_4478[(2)] = null);

(statearr_4451_4478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (6))){
var inst_4421 = (state_4444[(7)]);
var inst_4427 = p.call(null,inst_4421);
var state_4444__$1 = state_4444;
if(cljs.core.truth_(inst_4427)){
var statearr_4452_4479 = state_4444__$1;
(statearr_4452_4479[(1)] = (9));

} else {
var statearr_4453_4480 = state_4444__$1;
(statearr_4453_4480[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (3))){
var inst_4442 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4444__$1,inst_4442);
} else {
if((state_val_4445 === (12))){
var state_4444__$1 = state_4444;
var statearr_4454_4481 = state_4444__$1;
(statearr_4454_4481[(2)] = null);

(statearr_4454_4481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (2))){
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4444__$1,(4),ch);
} else {
if((state_val_4445 === (11))){
var inst_4421 = (state_4444[(7)]);
var inst_4431 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4444__$1,(8),inst_4431,inst_4421);
} else {
if((state_val_4445 === (9))){
var state_4444__$1 = state_4444;
var statearr_4455_4482 = state_4444__$1;
(statearr_4455_4482[(2)] = tc);

(statearr_4455_4482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (5))){
var inst_4424 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4425 = cljs.core.async.close_BANG_.call(null,fc);
var state_4444__$1 = (function (){var statearr_4456 = state_4444;
(statearr_4456[(8)] = inst_4424);

return statearr_4456;
})();
var statearr_4457_4483 = state_4444__$1;
(statearr_4457_4483[(2)] = inst_4425);

(statearr_4457_4483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (14))){
var inst_4438 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4458_4484 = state_4444__$1;
(statearr_4458_4484[(2)] = inst_4438);

(statearr_4458_4484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (10))){
var state_4444__$1 = state_4444;
var statearr_4459_4485 = state_4444__$1;
(statearr_4459_4485[(2)] = fc);

(statearr_4459_4485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (8))){
var inst_4433 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
if(cljs.core.truth_(inst_4433)){
var statearr_4460_4486 = state_4444__$1;
(statearr_4460_4486[(1)] = (12));

} else {
var statearr_4461_4487 = state_4444__$1;
(statearr_4461_4487[(1)] = (13));

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
});})(c__1424__auto___4473,tc,fc))
;
return ((function (switch__1359__auto__,c__1424__auto___4473,tc,fc){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_4465 = [null,null,null,null,null,null,null,null,null];
(statearr_4465[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_4465[(1)] = (1));

return statearr_4465;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_4444){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4466){if((e4466 instanceof Object)){
var ex__1363__auto__ = e4466;
var statearr_4467_4488 = state_4444;
(statearr_4467_4488[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4489 = state_4444;
state_4444 = G__4489;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_4444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_4444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___4473,tc,fc))
})();
var state__1426__auto__ = (function (){var statearr_4468 = f__1425__auto__.call(null);
(statearr_4468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___4473);

return statearr_4468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___4473,tc,fc))
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
var c__1424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto__){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto__){
return (function (state_4536){
var state_val_4537 = (state_4536[(1)]);
if((state_val_4537 === (1))){
var inst_4522 = init;
var state_4536__$1 = (function (){var statearr_4538 = state_4536;
(statearr_4538[(7)] = inst_4522);

return statearr_4538;
})();
var statearr_4539_4554 = state_4536__$1;
(statearr_4539_4554[(2)] = null);

(statearr_4539_4554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (2))){
var state_4536__$1 = state_4536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4536__$1,(4),ch);
} else {
if((state_val_4537 === (3))){
var inst_4534 = (state_4536[(2)]);
var state_4536__$1 = state_4536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4536__$1,inst_4534);
} else {
if((state_val_4537 === (4))){
var inst_4525 = (state_4536[(8)]);
var inst_4525__$1 = (state_4536[(2)]);
var inst_4526 = (inst_4525__$1 == null);
var state_4536__$1 = (function (){var statearr_4540 = state_4536;
(statearr_4540[(8)] = inst_4525__$1);

return statearr_4540;
})();
if(cljs.core.truth_(inst_4526)){
var statearr_4541_4555 = state_4536__$1;
(statearr_4541_4555[(1)] = (5));

} else {
var statearr_4542_4556 = state_4536__$1;
(statearr_4542_4556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (5))){
var inst_4522 = (state_4536[(7)]);
var state_4536__$1 = state_4536;
var statearr_4543_4557 = state_4536__$1;
(statearr_4543_4557[(2)] = inst_4522);

(statearr_4543_4557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (6))){
var inst_4525 = (state_4536[(8)]);
var inst_4522 = (state_4536[(7)]);
var inst_4529 = f.call(null,inst_4522,inst_4525);
var inst_4522__$1 = inst_4529;
var state_4536__$1 = (function (){var statearr_4544 = state_4536;
(statearr_4544[(7)] = inst_4522__$1);

return statearr_4544;
})();
var statearr_4545_4558 = state_4536__$1;
(statearr_4545_4558[(2)] = null);

(statearr_4545_4558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (7))){
var inst_4532 = (state_4536[(2)]);
var state_4536__$1 = state_4536;
var statearr_4546_4559 = state_4536__$1;
(statearr_4546_4559[(2)] = inst_4532);

(statearr_4546_4559[(1)] = (3));


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
});})(c__1424__auto__))
;
return ((function (switch__1359__auto__,c__1424__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1360__auto____0 = (function (){
var statearr_4550 = [null,null,null,null,null,null,null,null,null];
(statearr_4550[(0)] = cljs$core$async$reduce_$_state_machine__1360__auto__);

(statearr_4550[(1)] = (1));

return statearr_4550;
});
var cljs$core$async$reduce_$_state_machine__1360__auto____1 = (function (state_4536){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4551){if((e4551 instanceof Object)){
var ex__1363__auto__ = e4551;
var statearr_4552_4560 = state_4536;
(statearr_4552_4560[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4561 = state_4536;
state_4536 = G__4561;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1360__auto__ = function(state_4536){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1360__auto____1.call(this,state_4536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1360__auto____0;
cljs$core$async$reduce_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1360__auto____1;
return cljs$core$async$reduce_$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto__))
})();
var state__1426__auto__ = (function (){var statearr_4553 = f__1425__auto__.call(null);
(statearr_4553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto__);

return statearr_4553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto__))
);

return c__1424__auto__;
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
var args4562 = [];
var len__3300__auto___4614 = arguments.length;
var i__3301__auto___4615 = (0);
while(true){
if((i__3301__auto___4615 < len__3300__auto___4614)){
args4562.push((arguments[i__3301__auto___4615]));

var G__4616 = (i__3301__auto___4615 + (1));
i__3301__auto___4615 = G__4616;
continue;
} else {
}
break;
}

var G__4564 = args4562.length;
switch (G__4564) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4562.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto__){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto__){
return (function (state_4589){
var state_val_4590 = (state_4589[(1)]);
if((state_val_4590 === (7))){
var inst_4571 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4591_4618 = state_4589__$1;
(statearr_4591_4618[(2)] = inst_4571);

(statearr_4591_4618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (1))){
var inst_4565 = cljs.core.seq.call(null,coll);
var inst_4566 = inst_4565;
var state_4589__$1 = (function (){var statearr_4592 = state_4589;
(statearr_4592[(7)] = inst_4566);

return statearr_4592;
})();
var statearr_4593_4619 = state_4589__$1;
(statearr_4593_4619[(2)] = null);

(statearr_4593_4619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (4))){
var inst_4566 = (state_4589[(7)]);
var inst_4569 = cljs.core.first.call(null,inst_4566);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4589__$1,(7),ch,inst_4569);
} else {
if((state_val_4590 === (13))){
var inst_4583 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4594_4620 = state_4589__$1;
(statearr_4594_4620[(2)] = inst_4583);

(statearr_4594_4620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (6))){
var inst_4574 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
if(cljs.core.truth_(inst_4574)){
var statearr_4595_4621 = state_4589__$1;
(statearr_4595_4621[(1)] = (8));

} else {
var statearr_4596_4622 = state_4589__$1;
(statearr_4596_4622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (3))){
var inst_4587 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4589__$1,inst_4587);
} else {
if((state_val_4590 === (12))){
var state_4589__$1 = state_4589;
var statearr_4597_4623 = state_4589__$1;
(statearr_4597_4623[(2)] = null);

(statearr_4597_4623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (2))){
var inst_4566 = (state_4589[(7)]);
var state_4589__$1 = state_4589;
if(cljs.core.truth_(inst_4566)){
var statearr_4598_4624 = state_4589__$1;
(statearr_4598_4624[(1)] = (4));

} else {
var statearr_4599_4625 = state_4589__$1;
(statearr_4599_4625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (11))){
var inst_4580 = cljs.core.async.close_BANG_.call(null,ch);
var state_4589__$1 = state_4589;
var statearr_4600_4626 = state_4589__$1;
(statearr_4600_4626[(2)] = inst_4580);

(statearr_4600_4626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (9))){
var state_4589__$1 = state_4589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4601_4627 = state_4589__$1;
(statearr_4601_4627[(1)] = (11));

} else {
var statearr_4602_4628 = state_4589__$1;
(statearr_4602_4628[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (5))){
var inst_4566 = (state_4589[(7)]);
var state_4589__$1 = state_4589;
var statearr_4603_4629 = state_4589__$1;
(statearr_4603_4629[(2)] = inst_4566);

(statearr_4603_4629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (10))){
var inst_4585 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4604_4630 = state_4589__$1;
(statearr_4604_4630[(2)] = inst_4585);

(statearr_4604_4630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (8))){
var inst_4566 = (state_4589[(7)]);
var inst_4576 = cljs.core.next.call(null,inst_4566);
var inst_4566__$1 = inst_4576;
var state_4589__$1 = (function (){var statearr_4605 = state_4589;
(statearr_4605[(7)] = inst_4566__$1);

return statearr_4605;
})();
var statearr_4606_4631 = state_4589__$1;
(statearr_4606_4631[(2)] = null);

(statearr_4606_4631[(1)] = (2));


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
});})(c__1424__auto__))
;
return ((function (switch__1359__auto__,c__1424__auto__){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_4610 = [null,null,null,null,null,null,null,null];
(statearr_4610[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_4610[(1)] = (1));

return statearr_4610;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_4589){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e4611){if((e4611 instanceof Object)){
var ex__1363__auto__ = e4611;
var statearr_4612_4632 = state_4589;
(statearr_4612_4632[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4633 = state_4589;
state_4589 = G__4633;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_4589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_4589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto__))
})();
var state__1426__auto__ = (function (){var statearr_4613 = f__1425__auto__.call(null);
(statearr_4613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto__);

return statearr_4613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto__))
);

return c__1424__auto__;
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
if(typeof cljs.core.async.t4859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4859 = (function (mult,ch,cs,meta4860){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta4860 = meta4860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4861,meta4860__$1){
var self__ = this;
var _4861__$1 = this;
return (new cljs.core.async.t4859(self__.mult,self__.ch,self__.cs,meta4860__$1));
});})(cs))
;

cljs.core.async.t4859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4861){
var self__ = this;
var _4861__$1 = this;
return self__.meta4860;
});})(cs))
;

cljs.core.async.t4859.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t4859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t4859.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t4859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t4859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t4859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t4859.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4860","meta4860",1543862976,null)], null);
});})(cs))
;

cljs.core.async.t4859.cljs$lang$type = true;

cljs.core.async.t4859.cljs$lang$ctorStr = "cljs.core.async/t4859";

cljs.core.async.t4859.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4859");
});})(cs))
;

cljs.core.async.__GT_t4859 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t4859(mult__$1,ch__$1,cs__$1,meta4860){
return (new cljs.core.async.t4859(mult__$1,ch__$1,cs__$1,meta4860));
});})(cs))
;

}

return (new cljs.core.async.t4859(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__1424__auto___5080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5080,cs,m,dchan,dctr,done){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5080,cs,m,dchan,dctr,done){
return (function (state_4992){
var state_val_4993 = (state_4992[(1)]);
if((state_val_4993 === (7))){
var inst_4988 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_4994_5081 = state_4992__$1;
(statearr_4994_5081[(2)] = inst_4988);

(statearr_4994_5081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (20))){
var inst_4893 = (state_4992[(7)]);
var inst_4903 = cljs.core.first.call(null,inst_4893);
var inst_4904 = cljs.core.nth.call(null,inst_4903,(0),null);
var inst_4905 = cljs.core.nth.call(null,inst_4903,(1),null);
var state_4992__$1 = (function (){var statearr_4995 = state_4992;
(statearr_4995[(8)] = inst_4904);

return statearr_4995;
})();
if(cljs.core.truth_(inst_4905)){
var statearr_4996_5082 = state_4992__$1;
(statearr_4996_5082[(1)] = (22));

} else {
var statearr_4997_5083 = state_4992__$1;
(statearr_4997_5083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (27))){
var inst_4864 = (state_4992[(9)]);
var inst_4935 = (state_4992[(10)]);
var inst_4940 = (state_4992[(11)]);
var inst_4933 = (state_4992[(12)]);
var inst_4940__$1 = cljs.core._nth.call(null,inst_4933,inst_4935);
var inst_4941 = cljs.core.async.put_BANG_.call(null,inst_4940__$1,inst_4864,done);
var state_4992__$1 = (function (){var statearr_4998 = state_4992;
(statearr_4998[(11)] = inst_4940__$1);

return statearr_4998;
})();
if(cljs.core.truth_(inst_4941)){
var statearr_4999_5084 = state_4992__$1;
(statearr_4999_5084[(1)] = (30));

} else {
var statearr_5000_5085 = state_4992__$1;
(statearr_5000_5085[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (1))){
var state_4992__$1 = state_4992;
var statearr_5001_5086 = state_4992__$1;
(statearr_5001_5086[(2)] = null);

(statearr_5001_5086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (24))){
var inst_4893 = (state_4992[(7)]);
var inst_4910 = (state_4992[(2)]);
var inst_4911 = cljs.core.next.call(null,inst_4893);
var inst_4873 = inst_4911;
var inst_4874 = null;
var inst_4875 = (0);
var inst_4876 = (0);
var state_4992__$1 = (function (){var statearr_5002 = state_4992;
(statearr_5002[(13)] = inst_4874);

(statearr_5002[(14)] = inst_4875);

(statearr_5002[(15)] = inst_4876);

(statearr_5002[(16)] = inst_4910);

(statearr_5002[(17)] = inst_4873);

return statearr_5002;
})();
var statearr_5003_5087 = state_4992__$1;
(statearr_5003_5087[(2)] = null);

(statearr_5003_5087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (39))){
var state_4992__$1 = state_4992;
var statearr_5007_5088 = state_4992__$1;
(statearr_5007_5088[(2)] = null);

(statearr_5007_5088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (4))){
var inst_4864 = (state_4992[(9)]);
var inst_4864__$1 = (state_4992[(2)]);
var inst_4865 = (inst_4864__$1 == null);
var state_4992__$1 = (function (){var statearr_5008 = state_4992;
(statearr_5008[(9)] = inst_4864__$1);

return statearr_5008;
})();
if(cljs.core.truth_(inst_4865)){
var statearr_5009_5089 = state_4992__$1;
(statearr_5009_5089[(1)] = (5));

} else {
var statearr_5010_5090 = state_4992__$1;
(statearr_5010_5090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (15))){
var inst_4874 = (state_4992[(13)]);
var inst_4875 = (state_4992[(14)]);
var inst_4876 = (state_4992[(15)]);
var inst_4873 = (state_4992[(17)]);
var inst_4889 = (state_4992[(2)]);
var inst_4890 = (inst_4876 + (1));
var tmp5004 = inst_4874;
var tmp5005 = inst_4875;
var tmp5006 = inst_4873;
var inst_4873__$1 = tmp5006;
var inst_4874__$1 = tmp5004;
var inst_4875__$1 = tmp5005;
var inst_4876__$1 = inst_4890;
var state_4992__$1 = (function (){var statearr_5011 = state_4992;
(statearr_5011[(13)] = inst_4874__$1);

(statearr_5011[(14)] = inst_4875__$1);

(statearr_5011[(15)] = inst_4876__$1);

(statearr_5011[(18)] = inst_4889);

(statearr_5011[(17)] = inst_4873__$1);

return statearr_5011;
})();
var statearr_5012_5091 = state_4992__$1;
(statearr_5012_5091[(2)] = null);

(statearr_5012_5091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (21))){
var inst_4914 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5016_5092 = state_4992__$1;
(statearr_5016_5092[(2)] = inst_4914);

(statearr_5016_5092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (31))){
var inst_4940 = (state_4992[(11)]);
var inst_4944 = done.call(null,null);
var inst_4945 = cljs.core.async.untap_STAR_.call(null,m,inst_4940);
var state_4992__$1 = (function (){var statearr_5017 = state_4992;
(statearr_5017[(19)] = inst_4944);

return statearr_5017;
})();
var statearr_5018_5093 = state_4992__$1;
(statearr_5018_5093[(2)] = inst_4945);

(statearr_5018_5093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (32))){
var inst_4932 = (state_4992[(20)]);
var inst_4934 = (state_4992[(21)]);
var inst_4935 = (state_4992[(10)]);
var inst_4933 = (state_4992[(12)]);
var inst_4947 = (state_4992[(2)]);
var inst_4948 = (inst_4935 + (1));
var tmp5013 = inst_4932;
var tmp5014 = inst_4934;
var tmp5015 = inst_4933;
var inst_4932__$1 = tmp5013;
var inst_4933__$1 = tmp5015;
var inst_4934__$1 = tmp5014;
var inst_4935__$1 = inst_4948;
var state_4992__$1 = (function (){var statearr_5019 = state_4992;
(statearr_5019[(20)] = inst_4932__$1);

(statearr_5019[(21)] = inst_4934__$1);

(statearr_5019[(10)] = inst_4935__$1);

(statearr_5019[(22)] = inst_4947);

(statearr_5019[(12)] = inst_4933__$1);

return statearr_5019;
})();
var statearr_5020_5094 = state_4992__$1;
(statearr_5020_5094[(2)] = null);

(statearr_5020_5094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (40))){
var inst_4960 = (state_4992[(23)]);
var inst_4964 = done.call(null,null);
var inst_4965 = cljs.core.async.untap_STAR_.call(null,m,inst_4960);
var state_4992__$1 = (function (){var statearr_5021 = state_4992;
(statearr_5021[(24)] = inst_4964);

return statearr_5021;
})();
var statearr_5022_5095 = state_4992__$1;
(statearr_5022_5095[(2)] = inst_4965);

(statearr_5022_5095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (33))){
var inst_4951 = (state_4992[(25)]);
var inst_4953 = cljs.core.chunked_seq_QMARK_.call(null,inst_4951);
var state_4992__$1 = state_4992;
if(inst_4953){
var statearr_5023_5096 = state_4992__$1;
(statearr_5023_5096[(1)] = (36));

} else {
var statearr_5024_5097 = state_4992__$1;
(statearr_5024_5097[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (13))){
var inst_4883 = (state_4992[(26)]);
var inst_4886 = cljs.core.async.close_BANG_.call(null,inst_4883);
var state_4992__$1 = state_4992;
var statearr_5025_5098 = state_4992__$1;
(statearr_5025_5098[(2)] = inst_4886);

(statearr_5025_5098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (22))){
var inst_4904 = (state_4992[(8)]);
var inst_4907 = cljs.core.async.close_BANG_.call(null,inst_4904);
var state_4992__$1 = state_4992;
var statearr_5026_5099 = state_4992__$1;
(statearr_5026_5099[(2)] = inst_4907);

(statearr_5026_5099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (36))){
var inst_4951 = (state_4992[(25)]);
var inst_4955 = cljs.core.chunk_first.call(null,inst_4951);
var inst_4956 = cljs.core.chunk_rest.call(null,inst_4951);
var inst_4957 = cljs.core.count.call(null,inst_4955);
var inst_4932 = inst_4956;
var inst_4933 = inst_4955;
var inst_4934 = inst_4957;
var inst_4935 = (0);
var state_4992__$1 = (function (){var statearr_5027 = state_4992;
(statearr_5027[(20)] = inst_4932);

(statearr_5027[(21)] = inst_4934);

(statearr_5027[(10)] = inst_4935);

(statearr_5027[(12)] = inst_4933);

return statearr_5027;
})();
var statearr_5028_5100 = state_4992__$1;
(statearr_5028_5100[(2)] = null);

(statearr_5028_5100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (41))){
var inst_4951 = (state_4992[(25)]);
var inst_4967 = (state_4992[(2)]);
var inst_4968 = cljs.core.next.call(null,inst_4951);
var inst_4932 = inst_4968;
var inst_4933 = null;
var inst_4934 = (0);
var inst_4935 = (0);
var state_4992__$1 = (function (){var statearr_5029 = state_4992;
(statearr_5029[(20)] = inst_4932);

(statearr_5029[(27)] = inst_4967);

(statearr_5029[(21)] = inst_4934);

(statearr_5029[(10)] = inst_4935);

(statearr_5029[(12)] = inst_4933);

return statearr_5029;
})();
var statearr_5030_5101 = state_4992__$1;
(statearr_5030_5101[(2)] = null);

(statearr_5030_5101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (43))){
var state_4992__$1 = state_4992;
var statearr_5031_5102 = state_4992__$1;
(statearr_5031_5102[(2)] = null);

(statearr_5031_5102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (29))){
var inst_4976 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5032_5103 = state_4992__$1;
(statearr_5032_5103[(2)] = inst_4976);

(statearr_5032_5103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (44))){
var inst_4985 = (state_4992[(2)]);
var state_4992__$1 = (function (){var statearr_5033 = state_4992;
(statearr_5033[(28)] = inst_4985);

return statearr_5033;
})();
var statearr_5034_5104 = state_4992__$1;
(statearr_5034_5104[(2)] = null);

(statearr_5034_5104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (6))){
var inst_4924 = (state_4992[(29)]);
var inst_4923 = cljs.core.deref.call(null,cs);
var inst_4924__$1 = cljs.core.keys.call(null,inst_4923);
var inst_4925 = cljs.core.count.call(null,inst_4924__$1);
var inst_4926 = cljs.core.reset_BANG_.call(null,dctr,inst_4925);
var inst_4931 = cljs.core.seq.call(null,inst_4924__$1);
var inst_4932 = inst_4931;
var inst_4933 = null;
var inst_4934 = (0);
var inst_4935 = (0);
var state_4992__$1 = (function (){var statearr_5035 = state_4992;
(statearr_5035[(29)] = inst_4924__$1);

(statearr_5035[(30)] = inst_4926);

(statearr_5035[(20)] = inst_4932);

(statearr_5035[(21)] = inst_4934);

(statearr_5035[(10)] = inst_4935);

(statearr_5035[(12)] = inst_4933);

return statearr_5035;
})();
var statearr_5036_5105 = state_4992__$1;
(statearr_5036_5105[(2)] = null);

(statearr_5036_5105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (28))){
var inst_4932 = (state_4992[(20)]);
var inst_4951 = (state_4992[(25)]);
var inst_4951__$1 = cljs.core.seq.call(null,inst_4932);
var state_4992__$1 = (function (){var statearr_5037 = state_4992;
(statearr_5037[(25)] = inst_4951__$1);

return statearr_5037;
})();
if(inst_4951__$1){
var statearr_5038_5106 = state_4992__$1;
(statearr_5038_5106[(1)] = (33));

} else {
var statearr_5039_5107 = state_4992__$1;
(statearr_5039_5107[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (25))){
var inst_4934 = (state_4992[(21)]);
var inst_4935 = (state_4992[(10)]);
var inst_4937 = (inst_4935 < inst_4934);
var inst_4938 = inst_4937;
var state_4992__$1 = state_4992;
if(cljs.core.truth_(inst_4938)){
var statearr_5040_5108 = state_4992__$1;
(statearr_5040_5108[(1)] = (27));

} else {
var statearr_5041_5109 = state_4992__$1;
(statearr_5041_5109[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (34))){
var state_4992__$1 = state_4992;
var statearr_5042_5110 = state_4992__$1;
(statearr_5042_5110[(2)] = null);

(statearr_5042_5110[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (17))){
var state_4992__$1 = state_4992;
var statearr_5043_5111 = state_4992__$1;
(statearr_5043_5111[(2)] = null);

(statearr_5043_5111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (3))){
var inst_4990 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4992__$1,inst_4990);
} else {
if((state_val_4993 === (12))){
var inst_4919 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5044_5112 = state_4992__$1;
(statearr_5044_5112[(2)] = inst_4919);

(statearr_5044_5112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (2))){
var state_4992__$1 = state_4992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4992__$1,(4),ch);
} else {
if((state_val_4993 === (23))){
var state_4992__$1 = state_4992;
var statearr_5045_5113 = state_4992__$1;
(statearr_5045_5113[(2)] = null);

(statearr_5045_5113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (35))){
var inst_4974 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5046_5114 = state_4992__$1;
(statearr_5046_5114[(2)] = inst_4974);

(statearr_5046_5114[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (19))){
var inst_4893 = (state_4992[(7)]);
var inst_4897 = cljs.core.chunk_first.call(null,inst_4893);
var inst_4898 = cljs.core.chunk_rest.call(null,inst_4893);
var inst_4899 = cljs.core.count.call(null,inst_4897);
var inst_4873 = inst_4898;
var inst_4874 = inst_4897;
var inst_4875 = inst_4899;
var inst_4876 = (0);
var state_4992__$1 = (function (){var statearr_5047 = state_4992;
(statearr_5047[(13)] = inst_4874);

(statearr_5047[(14)] = inst_4875);

(statearr_5047[(15)] = inst_4876);

(statearr_5047[(17)] = inst_4873);

return statearr_5047;
})();
var statearr_5048_5115 = state_4992__$1;
(statearr_5048_5115[(2)] = null);

(statearr_5048_5115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (11))){
var inst_4893 = (state_4992[(7)]);
var inst_4873 = (state_4992[(17)]);
var inst_4893__$1 = cljs.core.seq.call(null,inst_4873);
var state_4992__$1 = (function (){var statearr_5049 = state_4992;
(statearr_5049[(7)] = inst_4893__$1);

return statearr_5049;
})();
if(inst_4893__$1){
var statearr_5050_5116 = state_4992__$1;
(statearr_5050_5116[(1)] = (16));

} else {
var statearr_5051_5117 = state_4992__$1;
(statearr_5051_5117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (9))){
var inst_4921 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5052_5118 = state_4992__$1;
(statearr_5052_5118[(2)] = inst_4921);

(statearr_5052_5118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (5))){
var inst_4871 = cljs.core.deref.call(null,cs);
var inst_4872 = cljs.core.seq.call(null,inst_4871);
var inst_4873 = inst_4872;
var inst_4874 = null;
var inst_4875 = (0);
var inst_4876 = (0);
var state_4992__$1 = (function (){var statearr_5053 = state_4992;
(statearr_5053[(13)] = inst_4874);

(statearr_5053[(14)] = inst_4875);

(statearr_5053[(15)] = inst_4876);

(statearr_5053[(17)] = inst_4873);

return statearr_5053;
})();
var statearr_5054_5119 = state_4992__$1;
(statearr_5054_5119[(2)] = null);

(statearr_5054_5119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (14))){
var state_4992__$1 = state_4992;
var statearr_5055_5120 = state_4992__$1;
(statearr_5055_5120[(2)] = null);

(statearr_5055_5120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (45))){
var inst_4982 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5056_5121 = state_4992__$1;
(statearr_5056_5121[(2)] = inst_4982);

(statearr_5056_5121[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (26))){
var inst_4924 = (state_4992[(29)]);
var inst_4978 = (state_4992[(2)]);
var inst_4979 = cljs.core.seq.call(null,inst_4924);
var state_4992__$1 = (function (){var statearr_5057 = state_4992;
(statearr_5057[(31)] = inst_4978);

return statearr_5057;
})();
if(inst_4979){
var statearr_5058_5122 = state_4992__$1;
(statearr_5058_5122[(1)] = (42));

} else {
var statearr_5059_5123 = state_4992__$1;
(statearr_5059_5123[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (16))){
var inst_4893 = (state_4992[(7)]);
var inst_4895 = cljs.core.chunked_seq_QMARK_.call(null,inst_4893);
var state_4992__$1 = state_4992;
if(inst_4895){
var statearr_5060_5124 = state_4992__$1;
(statearr_5060_5124[(1)] = (19));

} else {
var statearr_5061_5125 = state_4992__$1;
(statearr_5061_5125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (38))){
var inst_4971 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5062_5126 = state_4992__$1;
(statearr_5062_5126[(2)] = inst_4971);

(statearr_5062_5126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (30))){
var state_4992__$1 = state_4992;
var statearr_5063_5127 = state_4992__$1;
(statearr_5063_5127[(2)] = null);

(statearr_5063_5127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (10))){
var inst_4874 = (state_4992[(13)]);
var inst_4876 = (state_4992[(15)]);
var inst_4882 = cljs.core._nth.call(null,inst_4874,inst_4876);
var inst_4883 = cljs.core.nth.call(null,inst_4882,(0),null);
var inst_4884 = cljs.core.nth.call(null,inst_4882,(1),null);
var state_4992__$1 = (function (){var statearr_5064 = state_4992;
(statearr_5064[(26)] = inst_4883);

return statearr_5064;
})();
if(cljs.core.truth_(inst_4884)){
var statearr_5065_5128 = state_4992__$1;
(statearr_5065_5128[(1)] = (13));

} else {
var statearr_5066_5129 = state_4992__$1;
(statearr_5066_5129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (18))){
var inst_4917 = (state_4992[(2)]);
var state_4992__$1 = state_4992;
var statearr_5067_5130 = state_4992__$1;
(statearr_5067_5130[(2)] = inst_4917);

(statearr_5067_5130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (42))){
var state_4992__$1 = state_4992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4992__$1,(45),dchan);
} else {
if((state_val_4993 === (37))){
var inst_4951 = (state_4992[(25)]);
var inst_4864 = (state_4992[(9)]);
var inst_4960 = (state_4992[(23)]);
var inst_4960__$1 = cljs.core.first.call(null,inst_4951);
var inst_4961 = cljs.core.async.put_BANG_.call(null,inst_4960__$1,inst_4864,done);
var state_4992__$1 = (function (){var statearr_5068 = state_4992;
(statearr_5068[(23)] = inst_4960__$1);

return statearr_5068;
})();
if(cljs.core.truth_(inst_4961)){
var statearr_5069_5131 = state_4992__$1;
(statearr_5069_5131[(1)] = (39));

} else {
var statearr_5070_5132 = state_4992__$1;
(statearr_5070_5132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4993 === (8))){
var inst_4875 = (state_4992[(14)]);
var inst_4876 = (state_4992[(15)]);
var inst_4878 = (inst_4876 < inst_4875);
var inst_4879 = inst_4878;
var state_4992__$1 = state_4992;
if(cljs.core.truth_(inst_4879)){
var statearr_5071_5133 = state_4992__$1;
(statearr_5071_5133[(1)] = (10));

} else {
var statearr_5072_5134 = state_4992__$1;
(statearr_5072_5134[(1)] = (11));

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
});})(c__1424__auto___5080,cs,m,dchan,dctr,done))
;
return ((function (switch__1359__auto__,c__1424__auto___5080,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1360__auto__ = null;
var cljs$core$async$mult_$_state_machine__1360__auto____0 = (function (){
var statearr_5076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5076[(0)] = cljs$core$async$mult_$_state_machine__1360__auto__);

(statearr_5076[(1)] = (1));

return statearr_5076;
});
var cljs$core$async$mult_$_state_machine__1360__auto____1 = (function (state_4992){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_4992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5077){if((e5077 instanceof Object)){
var ex__1363__auto__ = e5077;
var statearr_5078_5135 = state_4992;
(statearr_5078_5135[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5136 = state_4992;
state_4992 = G__5136;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1360__auto__ = function(state_4992){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1360__auto____1.call(this,state_4992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1360__auto____0;
cljs$core$async$mult_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1360__auto____1;
return cljs$core$async$mult_$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5080,cs,m,dchan,dctr,done))
})();
var state__1426__auto__ = (function (){var statearr_5079 = f__1425__auto__.call(null);
(statearr_5079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5080);

return statearr_5079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5080,cs,m,dchan,dctr,done))
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
var args5137 = [];
var len__3300__auto___5140 = arguments.length;
var i__3301__auto___5141 = (0);
while(true){
if((i__3301__auto___5141 < len__3300__auto___5140)){
args5137.push((arguments[i__3301__auto___5141]));

var G__5142 = (i__3301__auto___5141 + (1));
i__3301__auto___5141 = G__5142;
continue;
} else {
}
break;
}

var G__5139 = args5137.length;
switch (G__5139) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5137.length)].join('')));

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
var len__3300__auto___5156 = arguments.length;
var i__3301__auto___5157 = (0);
while(true){
if((i__3301__auto___5157 < len__3300__auto___5156)){
args__3303__auto__.push((arguments[i__3301__auto___5157]));

var G__5158 = (i__3301__auto___5157 + (1));
i__3301__auto___5157 = G__5158;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((3) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5150){
var map__5151 = p__5150;
var map__5151__$1 = ((((!((map__5151 == null)))?((((map__5151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5151):map__5151);
var opts = map__5151__$1;
var statearr_5153_5159 = state;
(statearr_5153_5159[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__5151,map__5151__$1,opts){
return (function (val){
var statearr_5154_5160 = state;
(statearr_5154_5160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5151,map__5151__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_5155_5161 = state;
(statearr_5155_5161[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5146){
var G__5147 = cljs.core.first.call(null,seq5146);
var seq5146__$1 = cljs.core.next.call(null,seq5146);
var G__5148 = cljs.core.first.call(null,seq5146__$1);
var seq5146__$2 = cljs.core.next.call(null,seq5146__$1);
var G__5149 = cljs.core.first.call(null,seq5146__$2);
var seq5146__$3 = cljs.core.next.call(null,seq5146__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5147,G__5148,G__5149,seq5146__$3);
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
if(typeof cljs.core.async.t5325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5325 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5326){
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
this.meta5326 = meta5326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5327,meta5326__$1){
var self__ = this;
var _5327__$1 = this;
return (new cljs.core.async.t5325(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5326__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5327){
var self__ = this;
var _5327__$1 = this;
return self__.meta5326;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t5325.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5326","meta5326",1868477420,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5325.cljs$lang$type = true;

cljs.core.async.t5325.cljs$lang$ctorStr = "cljs.core.async/t5325";

cljs.core.async.t5325.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5325");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t5325 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t5325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5326){
return (new cljs.core.async.t5325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5326));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t5325(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1424__auto___5488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5425){
var state_val_5426 = (state_5425[(1)]);
if((state_val_5426 === (7))){
var inst_5343 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
var statearr_5427_5489 = state_5425__$1;
(statearr_5427_5489[(2)] = inst_5343);

(statearr_5427_5489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (20))){
var inst_5355 = (state_5425[(7)]);
var state_5425__$1 = state_5425;
var statearr_5428_5490 = state_5425__$1;
(statearr_5428_5490[(2)] = inst_5355);

(statearr_5428_5490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (27))){
var state_5425__$1 = state_5425;
var statearr_5429_5491 = state_5425__$1;
(statearr_5429_5491[(2)] = null);

(statearr_5429_5491[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (1))){
var inst_5331 = (state_5425[(8)]);
var inst_5331__$1 = calc_state.call(null);
var inst_5333 = (inst_5331__$1 == null);
var inst_5334 = cljs.core.not.call(null,inst_5333);
var state_5425__$1 = (function (){var statearr_5430 = state_5425;
(statearr_5430[(8)] = inst_5331__$1);

return statearr_5430;
})();
if(inst_5334){
var statearr_5431_5492 = state_5425__$1;
(statearr_5431_5492[(1)] = (2));

} else {
var statearr_5432_5493 = state_5425__$1;
(statearr_5432_5493[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (24))){
var inst_5385 = (state_5425[(9)]);
var inst_5399 = (state_5425[(10)]);
var inst_5378 = (state_5425[(11)]);
var inst_5399__$1 = inst_5378.call(null,inst_5385);
var state_5425__$1 = (function (){var statearr_5433 = state_5425;
(statearr_5433[(10)] = inst_5399__$1);

return statearr_5433;
})();
if(cljs.core.truth_(inst_5399__$1)){
var statearr_5434_5494 = state_5425__$1;
(statearr_5434_5494[(1)] = (29));

} else {
var statearr_5435_5495 = state_5425__$1;
(statearr_5435_5495[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (4))){
var inst_5346 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5346)){
var statearr_5436_5496 = state_5425__$1;
(statearr_5436_5496[(1)] = (8));

} else {
var statearr_5437_5497 = state_5425__$1;
(statearr_5437_5497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (15))){
var inst_5372 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5372)){
var statearr_5438_5498 = state_5425__$1;
(statearr_5438_5498[(1)] = (19));

} else {
var statearr_5439_5499 = state_5425__$1;
(statearr_5439_5499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (21))){
var inst_5377 = (state_5425[(12)]);
var inst_5377__$1 = (state_5425[(2)]);
var inst_5378 = cljs.core.get.call(null,inst_5377__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5379 = cljs.core.get.call(null,inst_5377__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5380 = cljs.core.get.call(null,inst_5377__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5425__$1 = (function (){var statearr_5440 = state_5425;
(statearr_5440[(13)] = inst_5379);

(statearr_5440[(12)] = inst_5377__$1);

(statearr_5440[(11)] = inst_5378);

return statearr_5440;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5425__$1,(22),inst_5380);
} else {
if((state_val_5426 === (31))){
var inst_5407 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5407)){
var statearr_5441_5500 = state_5425__$1;
(statearr_5441_5500[(1)] = (32));

} else {
var statearr_5442_5501 = state_5425__$1;
(statearr_5442_5501[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (32))){
var inst_5384 = (state_5425[(14)]);
var state_5425__$1 = state_5425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5425__$1,(35),out,inst_5384);
} else {
if((state_val_5426 === (33))){
var inst_5377 = (state_5425[(12)]);
var inst_5355 = inst_5377;
var state_5425__$1 = (function (){var statearr_5443 = state_5425;
(statearr_5443[(7)] = inst_5355);

return statearr_5443;
})();
var statearr_5444_5502 = state_5425__$1;
(statearr_5444_5502[(2)] = null);

(statearr_5444_5502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (13))){
var inst_5355 = (state_5425[(7)]);
var inst_5362 = inst_5355.cljs$lang$protocol_mask$partition0$;
var inst_5363 = (inst_5362 & (64));
var inst_5364 = inst_5355.cljs$core$ISeq$;
var inst_5365 = (inst_5363) || (inst_5364);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5365)){
var statearr_5445_5503 = state_5425__$1;
(statearr_5445_5503[(1)] = (16));

} else {
var statearr_5446_5504 = state_5425__$1;
(statearr_5446_5504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (22))){
var inst_5385 = (state_5425[(9)]);
var inst_5384 = (state_5425[(14)]);
var inst_5383 = (state_5425[(2)]);
var inst_5384__$1 = cljs.core.nth.call(null,inst_5383,(0),null);
var inst_5385__$1 = cljs.core.nth.call(null,inst_5383,(1),null);
var inst_5386 = (inst_5384__$1 == null);
var inst_5387 = cljs.core._EQ_.call(null,inst_5385__$1,change);
var inst_5388 = (inst_5386) || (inst_5387);
var state_5425__$1 = (function (){var statearr_5447 = state_5425;
(statearr_5447[(9)] = inst_5385__$1);

(statearr_5447[(14)] = inst_5384__$1);

return statearr_5447;
})();
if(cljs.core.truth_(inst_5388)){
var statearr_5448_5505 = state_5425__$1;
(statearr_5448_5505[(1)] = (23));

} else {
var statearr_5449_5506 = state_5425__$1;
(statearr_5449_5506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (36))){
var inst_5377 = (state_5425[(12)]);
var inst_5355 = inst_5377;
var state_5425__$1 = (function (){var statearr_5450 = state_5425;
(statearr_5450[(7)] = inst_5355);

return statearr_5450;
})();
var statearr_5451_5507 = state_5425__$1;
(statearr_5451_5507[(2)] = null);

(statearr_5451_5507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (29))){
var inst_5399 = (state_5425[(10)]);
var state_5425__$1 = state_5425;
var statearr_5452_5508 = state_5425__$1;
(statearr_5452_5508[(2)] = inst_5399);

(statearr_5452_5508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (6))){
var state_5425__$1 = state_5425;
var statearr_5453_5509 = state_5425__$1;
(statearr_5453_5509[(2)] = false);

(statearr_5453_5509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (28))){
var inst_5395 = (state_5425[(2)]);
var inst_5396 = calc_state.call(null);
var inst_5355 = inst_5396;
var state_5425__$1 = (function (){var statearr_5454 = state_5425;
(statearr_5454[(7)] = inst_5355);

(statearr_5454[(15)] = inst_5395);

return statearr_5454;
})();
var statearr_5455_5510 = state_5425__$1;
(statearr_5455_5510[(2)] = null);

(statearr_5455_5510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (25))){
var inst_5421 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
var statearr_5456_5511 = state_5425__$1;
(statearr_5456_5511[(2)] = inst_5421);

(statearr_5456_5511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (34))){
var inst_5419 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
var statearr_5457_5512 = state_5425__$1;
(statearr_5457_5512[(2)] = inst_5419);

(statearr_5457_5512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (17))){
var state_5425__$1 = state_5425;
var statearr_5458_5513 = state_5425__$1;
(statearr_5458_5513[(2)] = false);

(statearr_5458_5513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (3))){
var state_5425__$1 = state_5425;
var statearr_5459_5514 = state_5425__$1;
(statearr_5459_5514[(2)] = false);

(statearr_5459_5514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (12))){
var inst_5423 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5425__$1,inst_5423);
} else {
if((state_val_5426 === (2))){
var inst_5331 = (state_5425[(8)]);
var inst_5336 = inst_5331.cljs$lang$protocol_mask$partition0$;
var inst_5337 = (inst_5336 & (64));
var inst_5338 = inst_5331.cljs$core$ISeq$;
var inst_5339 = (inst_5337) || (inst_5338);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5339)){
var statearr_5460_5515 = state_5425__$1;
(statearr_5460_5515[(1)] = (5));

} else {
var statearr_5461_5516 = state_5425__$1;
(statearr_5461_5516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (23))){
var inst_5384 = (state_5425[(14)]);
var inst_5390 = (inst_5384 == null);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5390)){
var statearr_5462_5517 = state_5425__$1;
(statearr_5462_5517[(1)] = (26));

} else {
var statearr_5463_5518 = state_5425__$1;
(statearr_5463_5518[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (35))){
var inst_5410 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
if(cljs.core.truth_(inst_5410)){
var statearr_5464_5519 = state_5425__$1;
(statearr_5464_5519[(1)] = (36));

} else {
var statearr_5465_5520 = state_5425__$1;
(statearr_5465_5520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (19))){
var inst_5355 = (state_5425[(7)]);
var inst_5374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5355);
var state_5425__$1 = state_5425;
var statearr_5466_5521 = state_5425__$1;
(statearr_5466_5521[(2)] = inst_5374);

(statearr_5466_5521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (11))){
var inst_5355 = (state_5425[(7)]);
var inst_5359 = (inst_5355 == null);
var inst_5360 = cljs.core.not.call(null,inst_5359);
var state_5425__$1 = state_5425;
if(inst_5360){
var statearr_5467_5522 = state_5425__$1;
(statearr_5467_5522[(1)] = (13));

} else {
var statearr_5468_5523 = state_5425__$1;
(statearr_5468_5523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (9))){
var inst_5331 = (state_5425[(8)]);
var state_5425__$1 = state_5425;
var statearr_5469_5524 = state_5425__$1;
(statearr_5469_5524[(2)] = inst_5331);

(statearr_5469_5524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (5))){
var state_5425__$1 = state_5425;
var statearr_5470_5525 = state_5425__$1;
(statearr_5470_5525[(2)] = true);

(statearr_5470_5525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (14))){
var state_5425__$1 = state_5425;
var statearr_5471_5526 = state_5425__$1;
(statearr_5471_5526[(2)] = false);

(statearr_5471_5526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (26))){
var inst_5385 = (state_5425[(9)]);
var inst_5392 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5385);
var state_5425__$1 = state_5425;
var statearr_5472_5527 = state_5425__$1;
(statearr_5472_5527[(2)] = inst_5392);

(statearr_5472_5527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (16))){
var state_5425__$1 = state_5425;
var statearr_5473_5528 = state_5425__$1;
(statearr_5473_5528[(2)] = true);

(statearr_5473_5528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (38))){
var inst_5415 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
var statearr_5474_5529 = state_5425__$1;
(statearr_5474_5529[(2)] = inst_5415);

(statearr_5474_5529[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (30))){
var inst_5385 = (state_5425[(9)]);
var inst_5379 = (state_5425[(13)]);
var inst_5378 = (state_5425[(11)]);
var inst_5402 = cljs.core.empty_QMARK_.call(null,inst_5378);
var inst_5403 = inst_5379.call(null,inst_5385);
var inst_5404 = cljs.core.not.call(null,inst_5403);
var inst_5405 = (inst_5402) && (inst_5404);
var state_5425__$1 = state_5425;
var statearr_5475_5530 = state_5425__$1;
(statearr_5475_5530[(2)] = inst_5405);

(statearr_5475_5530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (10))){
var inst_5331 = (state_5425[(8)]);
var inst_5351 = (state_5425[(2)]);
var inst_5352 = cljs.core.get.call(null,inst_5351,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5353 = cljs.core.get.call(null,inst_5351,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5354 = cljs.core.get.call(null,inst_5351,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5355 = inst_5331;
var state_5425__$1 = (function (){var statearr_5476 = state_5425;
(statearr_5476[(16)] = inst_5352);

(statearr_5476[(17)] = inst_5353);

(statearr_5476[(7)] = inst_5355);

(statearr_5476[(18)] = inst_5354);

return statearr_5476;
})();
var statearr_5477_5531 = state_5425__$1;
(statearr_5477_5531[(2)] = null);

(statearr_5477_5531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (18))){
var inst_5369 = (state_5425[(2)]);
var state_5425__$1 = state_5425;
var statearr_5478_5532 = state_5425__$1;
(statearr_5478_5532[(2)] = inst_5369);

(statearr_5478_5532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (37))){
var state_5425__$1 = state_5425;
var statearr_5479_5533 = state_5425__$1;
(statearr_5479_5533[(2)] = null);

(statearr_5479_5533[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5426 === (8))){
var inst_5331 = (state_5425[(8)]);
var inst_5348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5331);
var state_5425__$1 = state_5425;
var statearr_5480_5534 = state_5425__$1;
(statearr_5480_5534[(2)] = inst_5348);

(statearr_5480_5534[(1)] = (10));


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
});})(c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1359__auto__,c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1360__auto__ = null;
var cljs$core$async$mix_$_state_machine__1360__auto____0 = (function (){
var statearr_5484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5484[(0)] = cljs$core$async$mix_$_state_machine__1360__auto__);

(statearr_5484[(1)] = (1));

return statearr_5484;
});
var cljs$core$async$mix_$_state_machine__1360__auto____1 = (function (state_5425){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_5425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5485){if((e5485 instanceof Object)){
var ex__1363__auto__ = e5485;
var statearr_5486_5535 = state_5425;
(statearr_5486_5535[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5536 = state_5425;
state_5425 = G__5536;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1360__auto__ = function(state_5425){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1360__auto____1.call(this,state_5425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1360__auto____0;
cljs$core$async$mix_$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1360__auto____1;
return cljs$core$async$mix_$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1426__auto__ = (function (){var statearr_5487 = f__1425__auto__.call(null);
(statearr_5487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5488);

return statearr_5487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5488,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args5539 = [];
var len__3300__auto___5542 = arguments.length;
var i__3301__auto___5543 = (0);
while(true){
if((i__3301__auto___5543 < len__3300__auto___5542)){
args5539.push((arguments[i__3301__auto___5543]));

var G__5544 = (i__3301__auto___5543 + (1));
i__3301__auto___5543 = G__5544;
continue;
} else {
}
break;
}

var G__5541 = args5539.length;
switch (G__5541) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5539.length)].join('')));

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
var args5547 = [];
var len__3300__auto___5672 = arguments.length;
var i__3301__auto___5673 = (0);
while(true){
if((i__3301__auto___5673 < len__3300__auto___5672)){
args5547.push((arguments[i__3301__auto___5673]));

var G__5674 = (i__3301__auto___5673 + (1));
i__3301__auto___5673 = G__5674;
continue;
} else {
}
break;
}

var G__5549 = args5547.length;
switch (G__5549) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5547.length)].join('')));

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
return (function (p1__5546_SHARP_){
if(cljs.core.truth_(p1__5546_SHARP_.call(null,topic))){
return p1__5546_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5546_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2789__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t5550 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5550 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5551){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5551 = meta5551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5552,meta5551__$1){
var self__ = this;
var _5552__$1 = this;
return (new cljs.core.async.t5550(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5551__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t5550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5552){
var self__ = this;
var _5552__$1 = this;
return self__.meta5551;
});})(mults,ensure_mult))
;

cljs.core.async.t5550.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t5550.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t5550.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t5550.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t5550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t5550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t5550.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5551","meta5551",-1055192319,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t5550.cljs$lang$type = true;

cljs.core.async.t5550.cljs$lang$ctorStr = "cljs.core.async/t5550";

cljs.core.async.t5550.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5550");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t5550 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t5550(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5551){
return (new cljs.core.async.t5550(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5551));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t5550(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1424__auto___5676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5676,mults,ensure_mult,p){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5676,mults,ensure_mult,p){
return (function (state_5624){
var state_val_5625 = (state_5624[(1)]);
if((state_val_5625 === (7))){
var inst_5620 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5626_5677 = state_5624__$1;
(statearr_5626_5677[(2)] = inst_5620);

(statearr_5626_5677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (20))){
var state_5624__$1 = state_5624;
var statearr_5627_5678 = state_5624__$1;
(statearr_5627_5678[(2)] = null);

(statearr_5627_5678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (1))){
var state_5624__$1 = state_5624;
var statearr_5628_5679 = state_5624__$1;
(statearr_5628_5679[(2)] = null);

(statearr_5628_5679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (24))){
var inst_5603 = (state_5624[(7)]);
var inst_5612 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5603);
var state_5624__$1 = state_5624;
var statearr_5629_5680 = state_5624__$1;
(statearr_5629_5680[(2)] = inst_5612);

(statearr_5629_5680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (4))){
var inst_5555 = (state_5624[(8)]);
var inst_5555__$1 = (state_5624[(2)]);
var inst_5556 = (inst_5555__$1 == null);
var state_5624__$1 = (function (){var statearr_5630 = state_5624;
(statearr_5630[(8)] = inst_5555__$1);

return statearr_5630;
})();
if(cljs.core.truth_(inst_5556)){
var statearr_5631_5681 = state_5624__$1;
(statearr_5631_5681[(1)] = (5));

} else {
var statearr_5632_5682 = state_5624__$1;
(statearr_5632_5682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (15))){
var inst_5597 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5633_5683 = state_5624__$1;
(statearr_5633_5683[(2)] = inst_5597);

(statearr_5633_5683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (21))){
var inst_5617 = (state_5624[(2)]);
var state_5624__$1 = (function (){var statearr_5634 = state_5624;
(statearr_5634[(9)] = inst_5617);

return statearr_5634;
})();
var statearr_5635_5684 = state_5624__$1;
(statearr_5635_5684[(2)] = null);

(statearr_5635_5684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (13))){
var inst_5579 = (state_5624[(10)]);
var inst_5581 = cljs.core.chunked_seq_QMARK_.call(null,inst_5579);
var state_5624__$1 = state_5624;
if(inst_5581){
var statearr_5636_5685 = state_5624__$1;
(statearr_5636_5685[(1)] = (16));

} else {
var statearr_5637_5686 = state_5624__$1;
(statearr_5637_5686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (22))){
var inst_5609 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
if(cljs.core.truth_(inst_5609)){
var statearr_5638_5687 = state_5624__$1;
(statearr_5638_5687[(1)] = (23));

} else {
var statearr_5639_5688 = state_5624__$1;
(statearr_5639_5688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (6))){
var inst_5603 = (state_5624[(7)]);
var inst_5605 = (state_5624[(11)]);
var inst_5555 = (state_5624[(8)]);
var inst_5603__$1 = topic_fn.call(null,inst_5555);
var inst_5604 = cljs.core.deref.call(null,mults);
var inst_5605__$1 = cljs.core.get.call(null,inst_5604,inst_5603__$1);
var state_5624__$1 = (function (){var statearr_5640 = state_5624;
(statearr_5640[(7)] = inst_5603__$1);

(statearr_5640[(11)] = inst_5605__$1);

return statearr_5640;
})();
if(cljs.core.truth_(inst_5605__$1)){
var statearr_5641_5689 = state_5624__$1;
(statearr_5641_5689[(1)] = (19));

} else {
var statearr_5642_5690 = state_5624__$1;
(statearr_5642_5690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (25))){
var inst_5614 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5643_5691 = state_5624__$1;
(statearr_5643_5691[(2)] = inst_5614);

(statearr_5643_5691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (17))){
var inst_5579 = (state_5624[(10)]);
var inst_5588 = cljs.core.first.call(null,inst_5579);
var inst_5589 = cljs.core.async.muxch_STAR_.call(null,inst_5588);
var inst_5590 = cljs.core.async.close_BANG_.call(null,inst_5589);
var inst_5591 = cljs.core.next.call(null,inst_5579);
var inst_5565 = inst_5591;
var inst_5566 = null;
var inst_5567 = (0);
var inst_5568 = (0);
var state_5624__$1 = (function (){var statearr_5644 = state_5624;
(statearr_5644[(12)] = inst_5568);

(statearr_5644[(13)] = inst_5566);

(statearr_5644[(14)] = inst_5567);

(statearr_5644[(15)] = inst_5565);

(statearr_5644[(16)] = inst_5590);

return statearr_5644;
})();
var statearr_5645_5692 = state_5624__$1;
(statearr_5645_5692[(2)] = null);

(statearr_5645_5692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (3))){
var inst_5622 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5624__$1,inst_5622);
} else {
if((state_val_5625 === (12))){
var inst_5599 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5646_5693 = state_5624__$1;
(statearr_5646_5693[(2)] = inst_5599);

(statearr_5646_5693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (2))){
var state_5624__$1 = state_5624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5624__$1,(4),ch);
} else {
if((state_val_5625 === (23))){
var state_5624__$1 = state_5624;
var statearr_5647_5694 = state_5624__$1;
(statearr_5647_5694[(2)] = null);

(statearr_5647_5694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (19))){
var inst_5605 = (state_5624[(11)]);
var inst_5555 = (state_5624[(8)]);
var inst_5607 = cljs.core.async.muxch_STAR_.call(null,inst_5605);
var state_5624__$1 = state_5624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5624__$1,(22),inst_5607,inst_5555);
} else {
if((state_val_5625 === (11))){
var inst_5579 = (state_5624[(10)]);
var inst_5565 = (state_5624[(15)]);
var inst_5579__$1 = cljs.core.seq.call(null,inst_5565);
var state_5624__$1 = (function (){var statearr_5648 = state_5624;
(statearr_5648[(10)] = inst_5579__$1);

return statearr_5648;
})();
if(inst_5579__$1){
var statearr_5649_5695 = state_5624__$1;
(statearr_5649_5695[(1)] = (13));

} else {
var statearr_5650_5696 = state_5624__$1;
(statearr_5650_5696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (9))){
var inst_5601 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5651_5697 = state_5624__$1;
(statearr_5651_5697[(2)] = inst_5601);

(statearr_5651_5697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (5))){
var inst_5562 = cljs.core.deref.call(null,mults);
var inst_5563 = cljs.core.vals.call(null,inst_5562);
var inst_5564 = cljs.core.seq.call(null,inst_5563);
var inst_5565 = inst_5564;
var inst_5566 = null;
var inst_5567 = (0);
var inst_5568 = (0);
var state_5624__$1 = (function (){var statearr_5652 = state_5624;
(statearr_5652[(12)] = inst_5568);

(statearr_5652[(13)] = inst_5566);

(statearr_5652[(14)] = inst_5567);

(statearr_5652[(15)] = inst_5565);

return statearr_5652;
})();
var statearr_5653_5698 = state_5624__$1;
(statearr_5653_5698[(2)] = null);

(statearr_5653_5698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (14))){
var state_5624__$1 = state_5624;
var statearr_5657_5699 = state_5624__$1;
(statearr_5657_5699[(2)] = null);

(statearr_5657_5699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (16))){
var inst_5579 = (state_5624[(10)]);
var inst_5583 = cljs.core.chunk_first.call(null,inst_5579);
var inst_5584 = cljs.core.chunk_rest.call(null,inst_5579);
var inst_5585 = cljs.core.count.call(null,inst_5583);
var inst_5565 = inst_5584;
var inst_5566 = inst_5583;
var inst_5567 = inst_5585;
var inst_5568 = (0);
var state_5624__$1 = (function (){var statearr_5658 = state_5624;
(statearr_5658[(12)] = inst_5568);

(statearr_5658[(13)] = inst_5566);

(statearr_5658[(14)] = inst_5567);

(statearr_5658[(15)] = inst_5565);

return statearr_5658;
})();
var statearr_5659_5700 = state_5624__$1;
(statearr_5659_5700[(2)] = null);

(statearr_5659_5700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (10))){
var inst_5568 = (state_5624[(12)]);
var inst_5566 = (state_5624[(13)]);
var inst_5567 = (state_5624[(14)]);
var inst_5565 = (state_5624[(15)]);
var inst_5573 = cljs.core._nth.call(null,inst_5566,inst_5568);
var inst_5574 = cljs.core.async.muxch_STAR_.call(null,inst_5573);
var inst_5575 = cljs.core.async.close_BANG_.call(null,inst_5574);
var inst_5576 = (inst_5568 + (1));
var tmp5654 = inst_5566;
var tmp5655 = inst_5567;
var tmp5656 = inst_5565;
var inst_5565__$1 = tmp5656;
var inst_5566__$1 = tmp5654;
var inst_5567__$1 = tmp5655;
var inst_5568__$1 = inst_5576;
var state_5624__$1 = (function (){var statearr_5660 = state_5624;
(statearr_5660[(12)] = inst_5568__$1);

(statearr_5660[(17)] = inst_5575);

(statearr_5660[(13)] = inst_5566__$1);

(statearr_5660[(14)] = inst_5567__$1);

(statearr_5660[(15)] = inst_5565__$1);

return statearr_5660;
})();
var statearr_5661_5701 = state_5624__$1;
(statearr_5661_5701[(2)] = null);

(statearr_5661_5701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (18))){
var inst_5594 = (state_5624[(2)]);
var state_5624__$1 = state_5624;
var statearr_5662_5702 = state_5624__$1;
(statearr_5662_5702[(2)] = inst_5594);

(statearr_5662_5702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5625 === (8))){
var inst_5568 = (state_5624[(12)]);
var inst_5567 = (state_5624[(14)]);
var inst_5570 = (inst_5568 < inst_5567);
var inst_5571 = inst_5570;
var state_5624__$1 = state_5624;
if(cljs.core.truth_(inst_5571)){
var statearr_5663_5703 = state_5624__$1;
(statearr_5663_5703[(1)] = (10));

} else {
var statearr_5664_5704 = state_5624__$1;
(statearr_5664_5704[(1)] = (11));

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
});})(c__1424__auto___5676,mults,ensure_mult,p))
;
return ((function (switch__1359__auto__,c__1424__auto___5676,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_5668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5668[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_5668[(1)] = (1));

return statearr_5668;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_5624){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_5624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5669){if((e5669 instanceof Object)){
var ex__1363__auto__ = e5669;
var statearr_5670_5705 = state_5624;
(statearr_5670_5705[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5706 = state_5624;
state_5624 = G__5706;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_5624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_5624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5676,mults,ensure_mult,p))
})();
var state__1426__auto__ = (function (){var statearr_5671 = f__1425__auto__.call(null);
(statearr_5671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5676);

return statearr_5671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5676,mults,ensure_mult,p))
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
var args5707 = [];
var len__3300__auto___5710 = arguments.length;
var i__3301__auto___5711 = (0);
while(true){
if((i__3301__auto___5711 < len__3300__auto___5710)){
args5707.push((arguments[i__3301__auto___5711]));

var G__5712 = (i__3301__auto___5711 + (1));
i__3301__auto___5711 = G__5712;
continue;
} else {
}
break;
}

var G__5709 = args5707.length;
switch (G__5709) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5707.length)].join('')));

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
var args5714 = [];
var len__3300__auto___5717 = arguments.length;
var i__3301__auto___5718 = (0);
while(true){
if((i__3301__auto___5718 < len__3300__auto___5717)){
args5714.push((arguments[i__3301__auto___5718]));

var G__5719 = (i__3301__auto___5718 + (1));
i__3301__auto___5718 = G__5719;
continue;
} else {
}
break;
}

var G__5716 = args5714.length;
switch (G__5716) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5714.length)].join('')));

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
var args5721 = [];
var len__3300__auto___5792 = arguments.length;
var i__3301__auto___5793 = (0);
while(true){
if((i__3301__auto___5793 < len__3300__auto___5792)){
args5721.push((arguments[i__3301__auto___5793]));

var G__5794 = (i__3301__auto___5793 + (1));
i__3301__auto___5793 = G__5794;
continue;
} else {
}
break;
}

var G__5723 = args5721.length;
switch (G__5723) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5721.length)].join('')));

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
var c__1424__auto___5796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5762){
var state_val_5763 = (state_5762[(1)]);
if((state_val_5763 === (7))){
var state_5762__$1 = state_5762;
var statearr_5764_5797 = state_5762__$1;
(statearr_5764_5797[(2)] = null);

(statearr_5764_5797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (1))){
var state_5762__$1 = state_5762;
var statearr_5765_5798 = state_5762__$1;
(statearr_5765_5798[(2)] = null);

(statearr_5765_5798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (4))){
var inst_5726 = (state_5762[(7)]);
var inst_5728 = (inst_5726 < cnt);
var state_5762__$1 = state_5762;
if(cljs.core.truth_(inst_5728)){
var statearr_5766_5799 = state_5762__$1;
(statearr_5766_5799[(1)] = (6));

} else {
var statearr_5767_5800 = state_5762__$1;
(statearr_5767_5800[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (15))){
var inst_5758 = (state_5762[(2)]);
var state_5762__$1 = state_5762;
var statearr_5768_5801 = state_5762__$1;
(statearr_5768_5801[(2)] = inst_5758);

(statearr_5768_5801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (13))){
var inst_5751 = cljs.core.async.close_BANG_.call(null,out);
var state_5762__$1 = state_5762;
var statearr_5769_5802 = state_5762__$1;
(statearr_5769_5802[(2)] = inst_5751);

(statearr_5769_5802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (6))){
var state_5762__$1 = state_5762;
var statearr_5770_5803 = state_5762__$1;
(statearr_5770_5803[(2)] = null);

(statearr_5770_5803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (3))){
var inst_5760 = (state_5762[(2)]);
var state_5762__$1 = state_5762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5762__$1,inst_5760);
} else {
if((state_val_5763 === (12))){
var inst_5748 = (state_5762[(8)]);
var inst_5748__$1 = (state_5762[(2)]);
var inst_5749 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5748__$1);
var state_5762__$1 = (function (){var statearr_5771 = state_5762;
(statearr_5771[(8)] = inst_5748__$1);

return statearr_5771;
})();
if(cljs.core.truth_(inst_5749)){
var statearr_5772_5804 = state_5762__$1;
(statearr_5772_5804[(1)] = (13));

} else {
var statearr_5773_5805 = state_5762__$1;
(statearr_5773_5805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (2))){
var inst_5725 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5726 = (0);
var state_5762__$1 = (function (){var statearr_5774 = state_5762;
(statearr_5774[(7)] = inst_5726);

(statearr_5774[(9)] = inst_5725);

return statearr_5774;
})();
var statearr_5775_5806 = state_5762__$1;
(statearr_5775_5806[(2)] = null);

(statearr_5775_5806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (11))){
var inst_5726 = (state_5762[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5762,(10),Object,null,(9));
var inst_5735 = chs__$1.call(null,inst_5726);
var inst_5736 = done.call(null,inst_5726);
var inst_5737 = cljs.core.async.take_BANG_.call(null,inst_5735,inst_5736);
var state_5762__$1 = state_5762;
var statearr_5776_5807 = state_5762__$1;
(statearr_5776_5807[(2)] = inst_5737);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (9))){
var inst_5726 = (state_5762[(7)]);
var inst_5739 = (state_5762[(2)]);
var inst_5740 = (inst_5726 + (1));
var inst_5726__$1 = inst_5740;
var state_5762__$1 = (function (){var statearr_5777 = state_5762;
(statearr_5777[(7)] = inst_5726__$1);

(statearr_5777[(10)] = inst_5739);

return statearr_5777;
})();
var statearr_5778_5808 = state_5762__$1;
(statearr_5778_5808[(2)] = null);

(statearr_5778_5808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (5))){
var inst_5746 = (state_5762[(2)]);
var state_5762__$1 = (function (){var statearr_5779 = state_5762;
(statearr_5779[(11)] = inst_5746);

return statearr_5779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5762__$1,(12),dchan);
} else {
if((state_val_5763 === (14))){
var inst_5748 = (state_5762[(8)]);
var inst_5753 = cljs.core.apply.call(null,f,inst_5748);
var state_5762__$1 = state_5762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5762__$1,(16),out,inst_5753);
} else {
if((state_val_5763 === (16))){
var inst_5755 = (state_5762[(2)]);
var state_5762__$1 = (function (){var statearr_5780 = state_5762;
(statearr_5780[(12)] = inst_5755);

return statearr_5780;
})();
var statearr_5781_5809 = state_5762__$1;
(statearr_5781_5809[(2)] = null);

(statearr_5781_5809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (10))){
var inst_5730 = (state_5762[(2)]);
var inst_5731 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5762__$1 = (function (){var statearr_5782 = state_5762;
(statearr_5782[(13)] = inst_5730);

return statearr_5782;
})();
var statearr_5783_5810 = state_5762__$1;
(statearr_5783_5810[(2)] = inst_5731);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5763 === (8))){
var inst_5744 = (state_5762[(2)]);
var state_5762__$1 = state_5762;
var statearr_5784_5811 = state_5762__$1;
(statearr_5784_5811[(2)] = inst_5744);

(statearr_5784_5811[(1)] = (5));


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
});})(c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1359__auto__,c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_5788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5788[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_5788[(1)] = (1));

return statearr_5788;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_5762){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_5762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5789){if((e5789 instanceof Object)){
var ex__1363__auto__ = e5789;
var statearr_5790_5812 = state_5762;
(statearr_5790_5812[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5813 = state_5762;
state_5762 = G__5813;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_5762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_5762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1426__auto__ = (function (){var statearr_5791 = f__1425__auto__.call(null);
(statearr_5791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5796);

return statearr_5791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5796,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args5815 = [];
var len__3300__auto___5871 = arguments.length;
var i__3301__auto___5872 = (0);
while(true){
if((i__3301__auto___5872 < len__3300__auto___5871)){
args5815.push((arguments[i__3301__auto___5872]));

var G__5873 = (i__3301__auto___5872 + (1));
i__3301__auto___5872 = G__5873;
continue;
} else {
}
break;
}

var G__5817 = args5815.length;
switch (G__5817) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5815.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___5875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5875,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5875,out){
return (function (state_5847){
var state_val_5848 = (state_5847[(1)]);
if((state_val_5848 === (7))){
var inst_5826 = (state_5847[(7)]);
var inst_5827 = (state_5847[(8)]);
var inst_5826__$1 = (state_5847[(2)]);
var inst_5827__$1 = cljs.core.nth.call(null,inst_5826__$1,(0),null);
var inst_5828 = cljs.core.nth.call(null,inst_5826__$1,(1),null);
var inst_5829 = (inst_5827__$1 == null);
var state_5847__$1 = (function (){var statearr_5849 = state_5847;
(statearr_5849[(7)] = inst_5826__$1);

(statearr_5849[(8)] = inst_5827__$1);

(statearr_5849[(9)] = inst_5828);

return statearr_5849;
})();
if(cljs.core.truth_(inst_5829)){
var statearr_5850_5876 = state_5847__$1;
(statearr_5850_5876[(1)] = (8));

} else {
var statearr_5851_5877 = state_5847__$1;
(statearr_5851_5877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (1))){
var inst_5818 = cljs.core.vec.call(null,chs);
var inst_5819 = inst_5818;
var state_5847__$1 = (function (){var statearr_5852 = state_5847;
(statearr_5852[(10)] = inst_5819);

return statearr_5852;
})();
var statearr_5853_5878 = state_5847__$1;
(statearr_5853_5878[(2)] = null);

(statearr_5853_5878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (4))){
var inst_5819 = (state_5847[(10)]);
var state_5847__$1 = state_5847;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5847__$1,(7),inst_5819);
} else {
if((state_val_5848 === (6))){
var inst_5843 = (state_5847[(2)]);
var state_5847__$1 = state_5847;
var statearr_5854_5879 = state_5847__$1;
(statearr_5854_5879[(2)] = inst_5843);

(statearr_5854_5879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (3))){
var inst_5845 = (state_5847[(2)]);
var state_5847__$1 = state_5847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5847__$1,inst_5845);
} else {
if((state_val_5848 === (2))){
var inst_5819 = (state_5847[(10)]);
var inst_5821 = cljs.core.count.call(null,inst_5819);
var inst_5822 = (inst_5821 > (0));
var state_5847__$1 = state_5847;
if(cljs.core.truth_(inst_5822)){
var statearr_5856_5880 = state_5847__$1;
(statearr_5856_5880[(1)] = (4));

} else {
var statearr_5857_5881 = state_5847__$1;
(statearr_5857_5881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (11))){
var inst_5819 = (state_5847[(10)]);
var inst_5836 = (state_5847[(2)]);
var tmp5855 = inst_5819;
var inst_5819__$1 = tmp5855;
var state_5847__$1 = (function (){var statearr_5858 = state_5847;
(statearr_5858[(11)] = inst_5836);

(statearr_5858[(10)] = inst_5819__$1);

return statearr_5858;
})();
var statearr_5859_5882 = state_5847__$1;
(statearr_5859_5882[(2)] = null);

(statearr_5859_5882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (9))){
var inst_5827 = (state_5847[(8)]);
var state_5847__$1 = state_5847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5847__$1,(11),out,inst_5827);
} else {
if((state_val_5848 === (5))){
var inst_5841 = cljs.core.async.close_BANG_.call(null,out);
var state_5847__$1 = state_5847;
var statearr_5860_5883 = state_5847__$1;
(statearr_5860_5883[(2)] = inst_5841);

(statearr_5860_5883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (10))){
var inst_5839 = (state_5847[(2)]);
var state_5847__$1 = state_5847;
var statearr_5861_5884 = state_5847__$1;
(statearr_5861_5884[(2)] = inst_5839);

(statearr_5861_5884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5848 === (8))){
var inst_5826 = (state_5847[(7)]);
var inst_5827 = (state_5847[(8)]);
var inst_5828 = (state_5847[(9)]);
var inst_5819 = (state_5847[(10)]);
var inst_5831 = (function (){var cs = inst_5819;
var vec__5824 = inst_5826;
var v = inst_5827;
var c = inst_5828;
return ((function (cs,vec__5824,v,c,inst_5826,inst_5827,inst_5828,inst_5819,state_val_5848,c__1424__auto___5875,out){
return (function (p1__5814_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5814_SHARP_);
});
;})(cs,vec__5824,v,c,inst_5826,inst_5827,inst_5828,inst_5819,state_val_5848,c__1424__auto___5875,out))
})();
var inst_5832 = cljs.core.filterv.call(null,inst_5831,inst_5819);
var inst_5819__$1 = inst_5832;
var state_5847__$1 = (function (){var statearr_5862 = state_5847;
(statearr_5862[(10)] = inst_5819__$1);

return statearr_5862;
})();
var statearr_5863_5885 = state_5847__$1;
(statearr_5863_5885[(2)] = null);

(statearr_5863_5885[(1)] = (2));


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
});})(c__1424__auto___5875,out))
;
return ((function (switch__1359__auto__,c__1424__auto___5875,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_5867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5867[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_5867[(1)] = (1));

return statearr_5867;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_5847){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_5847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5868){if((e5868 instanceof Object)){
var ex__1363__auto__ = e5868;
var statearr_5869_5886 = state_5847;
(statearr_5869_5886[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5887 = state_5847;
state_5847 = G__5887;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_5847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_5847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5875,out))
})();
var state__1426__auto__ = (function (){var statearr_5870 = f__1425__auto__.call(null);
(statearr_5870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5875);

return statearr_5870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5875,out))
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
var args5888 = [];
var len__3300__auto___5937 = arguments.length;
var i__3301__auto___5938 = (0);
while(true){
if((i__3301__auto___5938 < len__3300__auto___5937)){
args5888.push((arguments[i__3301__auto___5938]));

var G__5939 = (i__3301__auto___5938 + (1));
i__3301__auto___5938 = G__5939;
continue;
} else {
}
break;
}

var G__5890 = args5888.length;
switch (G__5890) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5888.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___5941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___5941,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___5941,out){
return (function (state_5914){
var state_val_5915 = (state_5914[(1)]);
if((state_val_5915 === (7))){
var inst_5896 = (state_5914[(7)]);
var inst_5896__$1 = (state_5914[(2)]);
var inst_5897 = (inst_5896__$1 == null);
var inst_5898 = cljs.core.not.call(null,inst_5897);
var state_5914__$1 = (function (){var statearr_5916 = state_5914;
(statearr_5916[(7)] = inst_5896__$1);

return statearr_5916;
})();
if(inst_5898){
var statearr_5917_5942 = state_5914__$1;
(statearr_5917_5942[(1)] = (8));

} else {
var statearr_5918_5943 = state_5914__$1;
(statearr_5918_5943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (1))){
var inst_5891 = (0);
var state_5914__$1 = (function (){var statearr_5919 = state_5914;
(statearr_5919[(8)] = inst_5891);

return statearr_5919;
})();
var statearr_5920_5944 = state_5914__$1;
(statearr_5920_5944[(2)] = null);

(statearr_5920_5944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (4))){
var state_5914__$1 = state_5914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5914__$1,(7),ch);
} else {
if((state_val_5915 === (6))){
var inst_5909 = (state_5914[(2)]);
var state_5914__$1 = state_5914;
var statearr_5921_5945 = state_5914__$1;
(statearr_5921_5945[(2)] = inst_5909);

(statearr_5921_5945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (3))){
var inst_5911 = (state_5914[(2)]);
var inst_5912 = cljs.core.async.close_BANG_.call(null,out);
var state_5914__$1 = (function (){var statearr_5922 = state_5914;
(statearr_5922[(9)] = inst_5911);

return statearr_5922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5914__$1,inst_5912);
} else {
if((state_val_5915 === (2))){
var inst_5891 = (state_5914[(8)]);
var inst_5893 = (inst_5891 < n);
var state_5914__$1 = state_5914;
if(cljs.core.truth_(inst_5893)){
var statearr_5923_5946 = state_5914__$1;
(statearr_5923_5946[(1)] = (4));

} else {
var statearr_5924_5947 = state_5914__$1;
(statearr_5924_5947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (11))){
var inst_5891 = (state_5914[(8)]);
var inst_5901 = (state_5914[(2)]);
var inst_5902 = (inst_5891 + (1));
var inst_5891__$1 = inst_5902;
var state_5914__$1 = (function (){var statearr_5925 = state_5914;
(statearr_5925[(8)] = inst_5891__$1);

(statearr_5925[(10)] = inst_5901);

return statearr_5925;
})();
var statearr_5926_5948 = state_5914__$1;
(statearr_5926_5948[(2)] = null);

(statearr_5926_5948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (9))){
var state_5914__$1 = state_5914;
var statearr_5927_5949 = state_5914__$1;
(statearr_5927_5949[(2)] = null);

(statearr_5927_5949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (5))){
var state_5914__$1 = state_5914;
var statearr_5928_5950 = state_5914__$1;
(statearr_5928_5950[(2)] = null);

(statearr_5928_5950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (10))){
var inst_5906 = (state_5914[(2)]);
var state_5914__$1 = state_5914;
var statearr_5929_5951 = state_5914__$1;
(statearr_5929_5951[(2)] = inst_5906);

(statearr_5929_5951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5915 === (8))){
var inst_5896 = (state_5914[(7)]);
var state_5914__$1 = state_5914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5914__$1,(11),out,inst_5896);
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
});})(c__1424__auto___5941,out))
;
return ((function (switch__1359__auto__,c__1424__auto___5941,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_5933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5933[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_5933[(1)] = (1));

return statearr_5933;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_5914){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_5914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e5934){if((e5934 instanceof Object)){
var ex__1363__auto__ = e5934;
var statearr_5935_5952 = state_5914;
(statearr_5935_5952[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5953 = state_5914;
state_5914 = G__5953;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_5914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_5914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___5941,out))
})();
var state__1426__auto__ = (function (){var statearr_5936 = f__1425__auto__.call(null);
(statearr_5936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___5941);

return statearr_5936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___5941,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t5961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5961 = (function (map_LT_,f,ch,meta5962){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5962 = meta5962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5963,meta5962__$1){
var self__ = this;
var _5963__$1 = this;
return (new cljs.core.async.t5961(self__.map_LT_,self__.f,self__.ch,meta5962__$1));
});

cljs.core.async.t5961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5963){
var self__ = this;
var _5963__$1 = this;
return self__.meta5962;
});

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t5964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5964 = (function (map_LT_,f,ch,meta5962,_,fn1,meta5965){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5962 = meta5962;
this._ = _;
this.fn1 = fn1;
this.meta5965 = meta5965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5966,meta5965__$1){
var self__ = this;
var _5966__$1 = this;
return (new cljs.core.async.t5964(self__.map_LT_,self__.f,self__.ch,self__.meta5962,self__._,self__.fn1,meta5965__$1));
});})(___$1))
;

cljs.core.async.t5964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5966){
var self__ = this;
var _5966__$1 = this;
return self__.meta5965;
});})(___$1))
;

cljs.core.async.t5964.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t5964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t5964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5954_SHARP_){
return f1.call(null,(((p1__5954_SHARP_ == null))?null:self__.f.call(null,p1__5954_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t5964.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5962","meta5962",-502931619,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t5961","cljs.core.async/t5961",-1973131733,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5965","meta5965",1815333183,null)], null);
});})(___$1))
;

cljs.core.async.t5964.cljs$lang$type = true;

cljs.core.async.t5964.cljs$lang$ctorStr = "cljs.core.async/t5964";

cljs.core.async.t5964.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5964");
});})(___$1))
;

cljs.core.async.__GT_t5964 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t5964(map_LT___$1,f__$1,ch__$1,meta5962__$1,___$2,fn1__$1,meta5965){
return (new cljs.core.async.t5964(map_LT___$1,f__$1,ch__$1,meta5962__$1,___$2,fn1__$1,meta5965));
});})(___$1))
;

}

return (new cljs.core.async.t5964(self__.map_LT_,self__.f,self__.ch,self__.meta5962,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t5961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5962","meta5962",-502931619,null)], null);
});

cljs.core.async.t5961.cljs$lang$type = true;

cljs.core.async.t5961.cljs$lang$ctorStr = "cljs.core.async/t5961";

cljs.core.async.t5961.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5961");
});

cljs.core.async.__GT_t5961 = (function cljs$core$async$map_LT__$___GT_t5961(map_LT___$1,f__$1,ch__$1,meta5962){
return (new cljs.core.async.t5961(map_LT___$1,f__$1,ch__$1,meta5962));
});

}

return (new cljs.core.async.t5961(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t5970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5970 = (function (map_GT_,f,ch,meta5971){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta5971 = meta5971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5972,meta5971__$1){
var self__ = this;
var _5972__$1 = this;
return (new cljs.core.async.t5970(self__.map_GT_,self__.f,self__.ch,meta5971__$1));
});

cljs.core.async.t5970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5972){
var self__ = this;
var _5972__$1 = this;
return self__.meta5971;
});

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t5970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5971","meta5971",1417286952,null)], null);
});

cljs.core.async.t5970.cljs$lang$type = true;

cljs.core.async.t5970.cljs$lang$ctorStr = "cljs.core.async/t5970";

cljs.core.async.t5970.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5970");
});

cljs.core.async.__GT_t5970 = (function cljs$core$async$map_GT__$___GT_t5970(map_GT___$1,f__$1,ch__$1,meta5971){
return (new cljs.core.async.t5970(map_GT___$1,f__$1,ch__$1,meta5971));
});

}

return (new cljs.core.async.t5970(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t5976 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5976 = (function (filter_GT_,p,ch,meta5977){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta5977 = meta5977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5978,meta5977__$1){
var self__ = this;
var _5978__$1 = this;
return (new cljs.core.async.t5976(self__.filter_GT_,self__.p,self__.ch,meta5977__$1));
});

cljs.core.async.t5976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5978){
var self__ = this;
var _5978__$1 = this;
return self__.meta5977;
});

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t5976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5977","meta5977",-989266488,null)], null);
});

cljs.core.async.t5976.cljs$lang$type = true;

cljs.core.async.t5976.cljs$lang$ctorStr = "cljs.core.async/t5976";

cljs.core.async.t5976.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5976");
});

cljs.core.async.__GT_t5976 = (function cljs$core$async$filter_GT__$___GT_t5976(filter_GT___$1,p__$1,ch__$1,meta5977){
return (new cljs.core.async.t5976(filter_GT___$1,p__$1,ch__$1,meta5977));
});

}

return (new cljs.core.async.t5976(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args5979 = [];
var len__3300__auto___6023 = arguments.length;
var i__3301__auto___6024 = (0);
while(true){
if((i__3301__auto___6024 < len__3300__auto___6023)){
args5979.push((arguments[i__3301__auto___6024]));

var G__6025 = (i__3301__auto___6024 + (1));
i__3301__auto___6024 = G__6025;
continue;
} else {
}
break;
}

var G__5981 = args5979.length;
switch (G__5981) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5979.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___6027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___6027,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___6027,out){
return (function (state_6002){
var state_val_6003 = (state_6002[(1)]);
if((state_val_6003 === (7))){
var inst_5998 = (state_6002[(2)]);
var state_6002__$1 = state_6002;
var statearr_6004_6028 = state_6002__$1;
(statearr_6004_6028[(2)] = inst_5998);

(statearr_6004_6028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (1))){
var state_6002__$1 = state_6002;
var statearr_6005_6029 = state_6002__$1;
(statearr_6005_6029[(2)] = null);

(statearr_6005_6029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (4))){
var inst_5984 = (state_6002[(7)]);
var inst_5984__$1 = (state_6002[(2)]);
var inst_5985 = (inst_5984__$1 == null);
var state_6002__$1 = (function (){var statearr_6006 = state_6002;
(statearr_6006[(7)] = inst_5984__$1);

return statearr_6006;
})();
if(cljs.core.truth_(inst_5985)){
var statearr_6007_6030 = state_6002__$1;
(statearr_6007_6030[(1)] = (5));

} else {
var statearr_6008_6031 = state_6002__$1;
(statearr_6008_6031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (6))){
var inst_5984 = (state_6002[(7)]);
var inst_5989 = p.call(null,inst_5984);
var state_6002__$1 = state_6002;
if(cljs.core.truth_(inst_5989)){
var statearr_6009_6032 = state_6002__$1;
(statearr_6009_6032[(1)] = (8));

} else {
var statearr_6010_6033 = state_6002__$1;
(statearr_6010_6033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (3))){
var inst_6000 = (state_6002[(2)]);
var state_6002__$1 = state_6002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6002__$1,inst_6000);
} else {
if((state_val_6003 === (2))){
var state_6002__$1 = state_6002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6002__$1,(4),ch);
} else {
if((state_val_6003 === (11))){
var inst_5992 = (state_6002[(2)]);
var state_6002__$1 = state_6002;
var statearr_6011_6034 = state_6002__$1;
(statearr_6011_6034[(2)] = inst_5992);

(statearr_6011_6034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (9))){
var state_6002__$1 = state_6002;
var statearr_6012_6035 = state_6002__$1;
(statearr_6012_6035[(2)] = null);

(statearr_6012_6035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (5))){
var inst_5987 = cljs.core.async.close_BANG_.call(null,out);
var state_6002__$1 = state_6002;
var statearr_6013_6036 = state_6002__$1;
(statearr_6013_6036[(2)] = inst_5987);

(statearr_6013_6036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (10))){
var inst_5995 = (state_6002[(2)]);
var state_6002__$1 = (function (){var statearr_6014 = state_6002;
(statearr_6014[(8)] = inst_5995);

return statearr_6014;
})();
var statearr_6015_6037 = state_6002__$1;
(statearr_6015_6037[(2)] = null);

(statearr_6015_6037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6003 === (8))){
var inst_5984 = (state_6002[(7)]);
var state_6002__$1 = state_6002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6002__$1,(11),out,inst_5984);
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
});})(c__1424__auto___6027,out))
;
return ((function (switch__1359__auto__,c__1424__auto___6027,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_6019 = [null,null,null,null,null,null,null,null,null];
(statearr_6019[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_6019[(1)] = (1));

return statearr_6019;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_6002){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_6002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e6020){if((e6020 instanceof Object)){
var ex__1363__auto__ = e6020;
var statearr_6021_6038 = state_6002;
(statearr_6021_6038[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6039 = state_6002;
state_6002 = G__6039;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_6002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_6002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___6027,out))
})();
var state__1426__auto__ = (function (){var statearr_6022 = f__1425__auto__.call(null);
(statearr_6022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___6027);

return statearr_6022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___6027,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args6040 = [];
var len__3300__auto___6043 = arguments.length;
var i__3301__auto___6044 = (0);
while(true){
if((i__3301__auto___6044 < len__3300__auto___6043)){
args6040.push((arguments[i__3301__auto___6044]));

var G__6045 = (i__3301__auto___6044 + (1));
i__3301__auto___6044 = G__6045;
continue;
} else {
}
break;
}

var G__6042 = args6040.length;
switch (G__6042) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6040.length)].join('')));

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
var c__1424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto__){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto__){
return (function (state_6212){
var state_val_6213 = (state_6212[(1)]);
if((state_val_6213 === (7))){
var inst_6208 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
var statearr_6214_6255 = state_6212__$1;
(statearr_6214_6255[(2)] = inst_6208);

(statearr_6214_6255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (20))){
var inst_6178 = (state_6212[(7)]);
var inst_6189 = (state_6212[(2)]);
var inst_6190 = cljs.core.next.call(null,inst_6178);
var inst_6164 = inst_6190;
var inst_6165 = null;
var inst_6166 = (0);
var inst_6167 = (0);
var state_6212__$1 = (function (){var statearr_6215 = state_6212;
(statearr_6215[(8)] = inst_6164);

(statearr_6215[(9)] = inst_6189);

(statearr_6215[(10)] = inst_6167);

(statearr_6215[(11)] = inst_6165);

(statearr_6215[(12)] = inst_6166);

return statearr_6215;
})();
var statearr_6216_6256 = state_6212__$1;
(statearr_6216_6256[(2)] = null);

(statearr_6216_6256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (1))){
var state_6212__$1 = state_6212;
var statearr_6217_6257 = state_6212__$1;
(statearr_6217_6257[(2)] = null);

(statearr_6217_6257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (4))){
var inst_6153 = (state_6212[(13)]);
var inst_6153__$1 = (state_6212[(2)]);
var inst_6154 = (inst_6153__$1 == null);
var state_6212__$1 = (function (){var statearr_6218 = state_6212;
(statearr_6218[(13)] = inst_6153__$1);

return statearr_6218;
})();
if(cljs.core.truth_(inst_6154)){
var statearr_6219_6258 = state_6212__$1;
(statearr_6219_6258[(1)] = (5));

} else {
var statearr_6220_6259 = state_6212__$1;
(statearr_6220_6259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (15))){
var state_6212__$1 = state_6212;
var statearr_6224_6260 = state_6212__$1;
(statearr_6224_6260[(2)] = null);

(statearr_6224_6260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (21))){
var state_6212__$1 = state_6212;
var statearr_6225_6261 = state_6212__$1;
(statearr_6225_6261[(2)] = null);

(statearr_6225_6261[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (13))){
var inst_6164 = (state_6212[(8)]);
var inst_6167 = (state_6212[(10)]);
var inst_6165 = (state_6212[(11)]);
var inst_6166 = (state_6212[(12)]);
var inst_6174 = (state_6212[(2)]);
var inst_6175 = (inst_6167 + (1));
var tmp6221 = inst_6164;
var tmp6222 = inst_6165;
var tmp6223 = inst_6166;
var inst_6164__$1 = tmp6221;
var inst_6165__$1 = tmp6222;
var inst_6166__$1 = tmp6223;
var inst_6167__$1 = inst_6175;
var state_6212__$1 = (function (){var statearr_6226 = state_6212;
(statearr_6226[(8)] = inst_6164__$1);

(statearr_6226[(10)] = inst_6167__$1);

(statearr_6226[(11)] = inst_6165__$1);

(statearr_6226[(14)] = inst_6174);

(statearr_6226[(12)] = inst_6166__$1);

return statearr_6226;
})();
var statearr_6227_6262 = state_6212__$1;
(statearr_6227_6262[(2)] = null);

(statearr_6227_6262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (22))){
var state_6212__$1 = state_6212;
var statearr_6228_6263 = state_6212__$1;
(statearr_6228_6263[(2)] = null);

(statearr_6228_6263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (6))){
var inst_6153 = (state_6212[(13)]);
var inst_6162 = f.call(null,inst_6153);
var inst_6163 = cljs.core.seq.call(null,inst_6162);
var inst_6164 = inst_6163;
var inst_6165 = null;
var inst_6166 = (0);
var inst_6167 = (0);
var state_6212__$1 = (function (){var statearr_6229 = state_6212;
(statearr_6229[(8)] = inst_6164);

(statearr_6229[(10)] = inst_6167);

(statearr_6229[(11)] = inst_6165);

(statearr_6229[(12)] = inst_6166);

return statearr_6229;
})();
var statearr_6230_6264 = state_6212__$1;
(statearr_6230_6264[(2)] = null);

(statearr_6230_6264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (17))){
var inst_6178 = (state_6212[(7)]);
var inst_6182 = cljs.core.chunk_first.call(null,inst_6178);
var inst_6183 = cljs.core.chunk_rest.call(null,inst_6178);
var inst_6184 = cljs.core.count.call(null,inst_6182);
var inst_6164 = inst_6183;
var inst_6165 = inst_6182;
var inst_6166 = inst_6184;
var inst_6167 = (0);
var state_6212__$1 = (function (){var statearr_6231 = state_6212;
(statearr_6231[(8)] = inst_6164);

(statearr_6231[(10)] = inst_6167);

(statearr_6231[(11)] = inst_6165);

(statearr_6231[(12)] = inst_6166);

return statearr_6231;
})();
var statearr_6232_6265 = state_6212__$1;
(statearr_6232_6265[(2)] = null);

(statearr_6232_6265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (3))){
var inst_6210 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6212__$1,inst_6210);
} else {
if((state_val_6213 === (12))){
var inst_6198 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
var statearr_6233_6266 = state_6212__$1;
(statearr_6233_6266[(2)] = inst_6198);

(statearr_6233_6266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (2))){
var state_6212__$1 = state_6212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6212__$1,(4),in$);
} else {
if((state_val_6213 === (23))){
var inst_6206 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
var statearr_6234_6267 = state_6212__$1;
(statearr_6234_6267[(2)] = inst_6206);

(statearr_6234_6267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (19))){
var inst_6193 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
var statearr_6235_6268 = state_6212__$1;
(statearr_6235_6268[(2)] = inst_6193);

(statearr_6235_6268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (11))){
var inst_6164 = (state_6212[(8)]);
var inst_6178 = (state_6212[(7)]);
var inst_6178__$1 = cljs.core.seq.call(null,inst_6164);
var state_6212__$1 = (function (){var statearr_6236 = state_6212;
(statearr_6236[(7)] = inst_6178__$1);

return statearr_6236;
})();
if(inst_6178__$1){
var statearr_6237_6269 = state_6212__$1;
(statearr_6237_6269[(1)] = (14));

} else {
var statearr_6238_6270 = state_6212__$1;
(statearr_6238_6270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (9))){
var inst_6200 = (state_6212[(2)]);
var inst_6201 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6212__$1 = (function (){var statearr_6239 = state_6212;
(statearr_6239[(15)] = inst_6200);

return statearr_6239;
})();
if(cljs.core.truth_(inst_6201)){
var statearr_6240_6271 = state_6212__$1;
(statearr_6240_6271[(1)] = (21));

} else {
var statearr_6241_6272 = state_6212__$1;
(statearr_6241_6272[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (5))){
var inst_6156 = cljs.core.async.close_BANG_.call(null,out);
var state_6212__$1 = state_6212;
var statearr_6242_6273 = state_6212__$1;
(statearr_6242_6273[(2)] = inst_6156);

(statearr_6242_6273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (14))){
var inst_6178 = (state_6212[(7)]);
var inst_6180 = cljs.core.chunked_seq_QMARK_.call(null,inst_6178);
var state_6212__$1 = state_6212;
if(inst_6180){
var statearr_6243_6274 = state_6212__$1;
(statearr_6243_6274[(1)] = (17));

} else {
var statearr_6244_6275 = state_6212__$1;
(statearr_6244_6275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (16))){
var inst_6196 = (state_6212[(2)]);
var state_6212__$1 = state_6212;
var statearr_6245_6276 = state_6212__$1;
(statearr_6245_6276[(2)] = inst_6196);

(statearr_6245_6276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6213 === (10))){
var inst_6167 = (state_6212[(10)]);
var inst_6165 = (state_6212[(11)]);
var inst_6172 = cljs.core._nth.call(null,inst_6165,inst_6167);
var state_6212__$1 = state_6212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6212__$1,(13),out,inst_6172);
} else {
if((state_val_6213 === (18))){
var inst_6178 = (state_6212[(7)]);
var inst_6187 = cljs.core.first.call(null,inst_6178);
var state_6212__$1 = state_6212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6212__$1,(20),out,inst_6187);
} else {
if((state_val_6213 === (8))){
var inst_6167 = (state_6212[(10)]);
var inst_6166 = (state_6212[(12)]);
var inst_6169 = (inst_6167 < inst_6166);
var inst_6170 = inst_6169;
var state_6212__$1 = state_6212;
if(cljs.core.truth_(inst_6170)){
var statearr_6246_6277 = state_6212__$1;
(statearr_6246_6277[(1)] = (10));

} else {
var statearr_6247_6278 = state_6212__$1;
(statearr_6247_6278[(1)] = (11));

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
});})(c__1424__auto__))
;
return ((function (switch__1359__auto__,c__1424__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____0 = (function (){
var statearr_6251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6251[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__);

(statearr_6251[(1)] = (1));

return statearr_6251;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____1 = (function (state_6212){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_6212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e6252){if((e6252 instanceof Object)){
var ex__1363__auto__ = e6252;
var statearr_6253_6279 = state_6212;
(statearr_6253_6279[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6280 = state_6212;
state_6212 = G__6280;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__ = function(state_6212){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____1.call(this,state_6212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto__))
})();
var state__1426__auto__ = (function (){var statearr_6254 = f__1425__auto__.call(null);
(statearr_6254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto__);

return statearr_6254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto__))
);

return c__1424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args6281 = [];
var len__3300__auto___6284 = arguments.length;
var i__3301__auto___6285 = (0);
while(true){
if((i__3301__auto___6285 < len__3300__auto___6284)){
args6281.push((arguments[i__3301__auto___6285]));

var G__6286 = (i__3301__auto___6285 + (1));
i__3301__auto___6285 = G__6286;
continue;
} else {
}
break;
}

var G__6283 = args6281.length;
switch (G__6283) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6281.length)].join('')));

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
var args6288 = [];
var len__3300__auto___6291 = arguments.length;
var i__3301__auto___6292 = (0);
while(true){
if((i__3301__auto___6292 < len__3300__auto___6291)){
args6288.push((arguments[i__3301__auto___6292]));

var G__6293 = (i__3301__auto___6292 + (1));
i__3301__auto___6292 = G__6293;
continue;
} else {
}
break;
}

var G__6290 = args6288.length;
switch (G__6290) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6288.length)].join('')));

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
var args6295 = [];
var len__3300__auto___6346 = arguments.length;
var i__3301__auto___6347 = (0);
while(true){
if((i__3301__auto___6347 < len__3300__auto___6346)){
args6295.push((arguments[i__3301__auto___6347]));

var G__6348 = (i__3301__auto___6347 + (1));
i__3301__auto___6347 = G__6348;
continue;
} else {
}
break;
}

var G__6297 = args6295.length;
switch (G__6297) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6295.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___6350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___6350,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___6350,out){
return (function (state_6321){
var state_val_6322 = (state_6321[(1)]);
if((state_val_6322 === (7))){
var inst_6316 = (state_6321[(2)]);
var state_6321__$1 = state_6321;
var statearr_6323_6351 = state_6321__$1;
(statearr_6323_6351[(2)] = inst_6316);

(statearr_6323_6351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (1))){
var inst_6298 = null;
var state_6321__$1 = (function (){var statearr_6324 = state_6321;
(statearr_6324[(7)] = inst_6298);

return statearr_6324;
})();
var statearr_6325_6352 = state_6321__$1;
(statearr_6325_6352[(2)] = null);

(statearr_6325_6352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (4))){
var inst_6301 = (state_6321[(8)]);
var inst_6301__$1 = (state_6321[(2)]);
var inst_6302 = (inst_6301__$1 == null);
var inst_6303 = cljs.core.not.call(null,inst_6302);
var state_6321__$1 = (function (){var statearr_6326 = state_6321;
(statearr_6326[(8)] = inst_6301__$1);

return statearr_6326;
})();
if(inst_6303){
var statearr_6327_6353 = state_6321__$1;
(statearr_6327_6353[(1)] = (5));

} else {
var statearr_6328_6354 = state_6321__$1;
(statearr_6328_6354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (6))){
var state_6321__$1 = state_6321;
var statearr_6329_6355 = state_6321__$1;
(statearr_6329_6355[(2)] = null);

(statearr_6329_6355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (3))){
var inst_6318 = (state_6321[(2)]);
var inst_6319 = cljs.core.async.close_BANG_.call(null,out);
var state_6321__$1 = (function (){var statearr_6330 = state_6321;
(statearr_6330[(9)] = inst_6318);

return statearr_6330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6321__$1,inst_6319);
} else {
if((state_val_6322 === (2))){
var state_6321__$1 = state_6321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6321__$1,(4),ch);
} else {
if((state_val_6322 === (11))){
var inst_6301 = (state_6321[(8)]);
var inst_6310 = (state_6321[(2)]);
var inst_6298 = inst_6301;
var state_6321__$1 = (function (){var statearr_6331 = state_6321;
(statearr_6331[(10)] = inst_6310);

(statearr_6331[(7)] = inst_6298);

return statearr_6331;
})();
var statearr_6332_6356 = state_6321__$1;
(statearr_6332_6356[(2)] = null);

(statearr_6332_6356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (9))){
var inst_6301 = (state_6321[(8)]);
var state_6321__$1 = state_6321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6321__$1,(11),out,inst_6301);
} else {
if((state_val_6322 === (5))){
var inst_6301 = (state_6321[(8)]);
var inst_6298 = (state_6321[(7)]);
var inst_6305 = cljs.core._EQ_.call(null,inst_6301,inst_6298);
var state_6321__$1 = state_6321;
if(inst_6305){
var statearr_6334_6357 = state_6321__$1;
(statearr_6334_6357[(1)] = (8));

} else {
var statearr_6335_6358 = state_6321__$1;
(statearr_6335_6358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (10))){
var inst_6313 = (state_6321[(2)]);
var state_6321__$1 = state_6321;
var statearr_6336_6359 = state_6321__$1;
(statearr_6336_6359[(2)] = inst_6313);

(statearr_6336_6359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6322 === (8))){
var inst_6298 = (state_6321[(7)]);
var tmp6333 = inst_6298;
var inst_6298__$1 = tmp6333;
var state_6321__$1 = (function (){var statearr_6337 = state_6321;
(statearr_6337[(7)] = inst_6298__$1);

return statearr_6337;
})();
var statearr_6338_6360 = state_6321__$1;
(statearr_6338_6360[(2)] = null);

(statearr_6338_6360[(1)] = (2));


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
});})(c__1424__auto___6350,out))
;
return ((function (switch__1359__auto__,c__1424__auto___6350,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_6342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6342[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_6342[(1)] = (1));

return statearr_6342;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_6321){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_6321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e6343){if((e6343 instanceof Object)){
var ex__1363__auto__ = e6343;
var statearr_6344_6361 = state_6321;
(statearr_6344_6361[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6362 = state_6321;
state_6321 = G__6362;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_6321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_6321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___6350,out))
})();
var state__1426__auto__ = (function (){var statearr_6345 = f__1425__auto__.call(null);
(statearr_6345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___6350);

return statearr_6345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___6350,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args6363 = [];
var len__3300__auto___6433 = arguments.length;
var i__3301__auto___6434 = (0);
while(true){
if((i__3301__auto___6434 < len__3300__auto___6433)){
args6363.push((arguments[i__3301__auto___6434]));

var G__6435 = (i__3301__auto___6434 + (1));
i__3301__auto___6434 = G__6435;
continue;
} else {
}
break;
}

var G__6365 = args6363.length;
switch (G__6365) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6363.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___6437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___6437,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___6437,out){
return (function (state_6403){
var state_val_6404 = (state_6403[(1)]);
if((state_val_6404 === (7))){
var inst_6399 = (state_6403[(2)]);
var state_6403__$1 = state_6403;
var statearr_6405_6438 = state_6403__$1;
(statearr_6405_6438[(2)] = inst_6399);

(statearr_6405_6438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (1))){
var inst_6366 = (new Array(n));
var inst_6367 = inst_6366;
var inst_6368 = (0);
var state_6403__$1 = (function (){var statearr_6406 = state_6403;
(statearr_6406[(7)] = inst_6368);

(statearr_6406[(8)] = inst_6367);

return statearr_6406;
})();
var statearr_6407_6439 = state_6403__$1;
(statearr_6407_6439[(2)] = null);

(statearr_6407_6439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (4))){
var inst_6371 = (state_6403[(9)]);
var inst_6371__$1 = (state_6403[(2)]);
var inst_6372 = (inst_6371__$1 == null);
var inst_6373 = cljs.core.not.call(null,inst_6372);
var state_6403__$1 = (function (){var statearr_6408 = state_6403;
(statearr_6408[(9)] = inst_6371__$1);

return statearr_6408;
})();
if(inst_6373){
var statearr_6409_6440 = state_6403__$1;
(statearr_6409_6440[(1)] = (5));

} else {
var statearr_6410_6441 = state_6403__$1;
(statearr_6410_6441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (15))){
var inst_6393 = (state_6403[(2)]);
var state_6403__$1 = state_6403;
var statearr_6411_6442 = state_6403__$1;
(statearr_6411_6442[(2)] = inst_6393);

(statearr_6411_6442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (13))){
var state_6403__$1 = state_6403;
var statearr_6412_6443 = state_6403__$1;
(statearr_6412_6443[(2)] = null);

(statearr_6412_6443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (6))){
var inst_6368 = (state_6403[(7)]);
var inst_6389 = (inst_6368 > (0));
var state_6403__$1 = state_6403;
if(cljs.core.truth_(inst_6389)){
var statearr_6413_6444 = state_6403__$1;
(statearr_6413_6444[(1)] = (12));

} else {
var statearr_6414_6445 = state_6403__$1;
(statearr_6414_6445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (3))){
var inst_6401 = (state_6403[(2)]);
var state_6403__$1 = state_6403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6403__$1,inst_6401);
} else {
if((state_val_6404 === (12))){
var inst_6367 = (state_6403[(8)]);
var inst_6391 = cljs.core.vec.call(null,inst_6367);
var state_6403__$1 = state_6403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6403__$1,(15),out,inst_6391);
} else {
if((state_val_6404 === (2))){
var state_6403__$1 = state_6403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6403__$1,(4),ch);
} else {
if((state_val_6404 === (11))){
var inst_6383 = (state_6403[(2)]);
var inst_6384 = (new Array(n));
var inst_6367 = inst_6384;
var inst_6368 = (0);
var state_6403__$1 = (function (){var statearr_6415 = state_6403;
(statearr_6415[(7)] = inst_6368);

(statearr_6415[(8)] = inst_6367);

(statearr_6415[(10)] = inst_6383);

return statearr_6415;
})();
var statearr_6416_6446 = state_6403__$1;
(statearr_6416_6446[(2)] = null);

(statearr_6416_6446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (9))){
var inst_6367 = (state_6403[(8)]);
var inst_6381 = cljs.core.vec.call(null,inst_6367);
var state_6403__$1 = state_6403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6403__$1,(11),out,inst_6381);
} else {
if((state_val_6404 === (5))){
var inst_6368 = (state_6403[(7)]);
var inst_6371 = (state_6403[(9)]);
var inst_6367 = (state_6403[(8)]);
var inst_6376 = (state_6403[(11)]);
var inst_6375 = (inst_6367[inst_6368] = inst_6371);
var inst_6376__$1 = (inst_6368 + (1));
var inst_6377 = (inst_6376__$1 < n);
var state_6403__$1 = (function (){var statearr_6417 = state_6403;
(statearr_6417[(12)] = inst_6375);

(statearr_6417[(11)] = inst_6376__$1);

return statearr_6417;
})();
if(cljs.core.truth_(inst_6377)){
var statearr_6418_6447 = state_6403__$1;
(statearr_6418_6447[(1)] = (8));

} else {
var statearr_6419_6448 = state_6403__$1;
(statearr_6419_6448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (14))){
var inst_6396 = (state_6403[(2)]);
var inst_6397 = cljs.core.async.close_BANG_.call(null,out);
var state_6403__$1 = (function (){var statearr_6421 = state_6403;
(statearr_6421[(13)] = inst_6396);

return statearr_6421;
})();
var statearr_6422_6449 = state_6403__$1;
(statearr_6422_6449[(2)] = inst_6397);

(statearr_6422_6449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (10))){
var inst_6387 = (state_6403[(2)]);
var state_6403__$1 = state_6403;
var statearr_6423_6450 = state_6403__$1;
(statearr_6423_6450[(2)] = inst_6387);

(statearr_6423_6450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6404 === (8))){
var inst_6367 = (state_6403[(8)]);
var inst_6376 = (state_6403[(11)]);
var tmp6420 = inst_6367;
var inst_6367__$1 = tmp6420;
var inst_6368 = inst_6376;
var state_6403__$1 = (function (){var statearr_6424 = state_6403;
(statearr_6424[(7)] = inst_6368);

(statearr_6424[(8)] = inst_6367__$1);

return statearr_6424;
})();
var statearr_6425_6451 = state_6403__$1;
(statearr_6425_6451[(2)] = null);

(statearr_6425_6451[(1)] = (2));


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
});})(c__1424__auto___6437,out))
;
return ((function (switch__1359__auto__,c__1424__auto___6437,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_6429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6429[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_6429[(1)] = (1));

return statearr_6429;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_6403){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_6403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e6430){if((e6430 instanceof Object)){
var ex__1363__auto__ = e6430;
var statearr_6431_6452 = state_6403;
(statearr_6431_6452[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6453 = state_6403;
state_6403 = G__6453;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_6403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_6403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___6437,out))
})();
var state__1426__auto__ = (function (){var statearr_6432 = f__1425__auto__.call(null);
(statearr_6432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___6437);

return statearr_6432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___6437,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args6454 = [];
var len__3300__auto___6528 = arguments.length;
var i__3301__auto___6529 = (0);
while(true){
if((i__3301__auto___6529 < len__3300__auto___6528)){
args6454.push((arguments[i__3301__auto___6529]));

var G__6530 = (i__3301__auto___6529 + (1));
i__3301__auto___6529 = G__6530;
continue;
} else {
}
break;
}

var G__6456 = args6454.length;
switch (G__6456) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6454.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1424__auto___6532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1424__auto___6532,out){
return (function (){
var f__1425__auto__ = (function (){var switch__1359__auto__ = ((function (c__1424__auto___6532,out){
return (function (state_6498){
var state_val_6499 = (state_6498[(1)]);
if((state_val_6499 === (7))){
var inst_6494 = (state_6498[(2)]);
var state_6498__$1 = state_6498;
var statearr_6500_6533 = state_6498__$1;
(statearr_6500_6533[(2)] = inst_6494);

(statearr_6500_6533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (1))){
var inst_6457 = [];
var inst_6458 = inst_6457;
var inst_6459 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6498__$1 = (function (){var statearr_6501 = state_6498;
(statearr_6501[(7)] = inst_6458);

(statearr_6501[(8)] = inst_6459);

return statearr_6501;
})();
var statearr_6502_6534 = state_6498__$1;
(statearr_6502_6534[(2)] = null);

(statearr_6502_6534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (4))){
var inst_6462 = (state_6498[(9)]);
var inst_6462__$1 = (state_6498[(2)]);
var inst_6463 = (inst_6462__$1 == null);
var inst_6464 = cljs.core.not.call(null,inst_6463);
var state_6498__$1 = (function (){var statearr_6503 = state_6498;
(statearr_6503[(9)] = inst_6462__$1);

return statearr_6503;
})();
if(inst_6464){
var statearr_6504_6535 = state_6498__$1;
(statearr_6504_6535[(1)] = (5));

} else {
var statearr_6505_6536 = state_6498__$1;
(statearr_6505_6536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (15))){
var inst_6488 = (state_6498[(2)]);
var state_6498__$1 = state_6498;
var statearr_6506_6537 = state_6498__$1;
(statearr_6506_6537[(2)] = inst_6488);

(statearr_6506_6537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (13))){
var state_6498__$1 = state_6498;
var statearr_6507_6538 = state_6498__$1;
(statearr_6507_6538[(2)] = null);

(statearr_6507_6538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (6))){
var inst_6458 = (state_6498[(7)]);
var inst_6483 = inst_6458.length;
var inst_6484 = (inst_6483 > (0));
var state_6498__$1 = state_6498;
if(cljs.core.truth_(inst_6484)){
var statearr_6508_6539 = state_6498__$1;
(statearr_6508_6539[(1)] = (12));

} else {
var statearr_6509_6540 = state_6498__$1;
(statearr_6509_6540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (3))){
var inst_6496 = (state_6498[(2)]);
var state_6498__$1 = state_6498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6498__$1,inst_6496);
} else {
if((state_val_6499 === (12))){
var inst_6458 = (state_6498[(7)]);
var inst_6486 = cljs.core.vec.call(null,inst_6458);
var state_6498__$1 = state_6498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6498__$1,(15),out,inst_6486);
} else {
if((state_val_6499 === (2))){
var state_6498__$1 = state_6498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6498__$1,(4),ch);
} else {
if((state_val_6499 === (11))){
var inst_6466 = (state_6498[(10)]);
var inst_6462 = (state_6498[(9)]);
var inst_6476 = (state_6498[(2)]);
var inst_6477 = [];
var inst_6478 = inst_6477.push(inst_6462);
var inst_6458 = inst_6477;
var inst_6459 = inst_6466;
var state_6498__$1 = (function (){var statearr_6510 = state_6498;
(statearr_6510[(11)] = inst_6476);

(statearr_6510[(7)] = inst_6458);

(statearr_6510[(12)] = inst_6478);

(statearr_6510[(8)] = inst_6459);

return statearr_6510;
})();
var statearr_6511_6541 = state_6498__$1;
(statearr_6511_6541[(2)] = null);

(statearr_6511_6541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (9))){
var inst_6458 = (state_6498[(7)]);
var inst_6474 = cljs.core.vec.call(null,inst_6458);
var state_6498__$1 = state_6498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6498__$1,(11),out,inst_6474);
} else {
if((state_val_6499 === (5))){
var inst_6466 = (state_6498[(10)]);
var inst_6459 = (state_6498[(8)]);
var inst_6462 = (state_6498[(9)]);
var inst_6466__$1 = f.call(null,inst_6462);
var inst_6467 = cljs.core._EQ_.call(null,inst_6466__$1,inst_6459);
var inst_6468 = cljs.core.keyword_identical_QMARK_.call(null,inst_6459,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6469 = (inst_6467) || (inst_6468);
var state_6498__$1 = (function (){var statearr_6512 = state_6498;
(statearr_6512[(10)] = inst_6466__$1);

return statearr_6512;
})();
if(cljs.core.truth_(inst_6469)){
var statearr_6513_6542 = state_6498__$1;
(statearr_6513_6542[(1)] = (8));

} else {
var statearr_6514_6543 = state_6498__$1;
(statearr_6514_6543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (14))){
var inst_6491 = (state_6498[(2)]);
var inst_6492 = cljs.core.async.close_BANG_.call(null,out);
var state_6498__$1 = (function (){var statearr_6516 = state_6498;
(statearr_6516[(13)] = inst_6491);

return statearr_6516;
})();
var statearr_6517_6544 = state_6498__$1;
(statearr_6517_6544[(2)] = inst_6492);

(statearr_6517_6544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (10))){
var inst_6481 = (state_6498[(2)]);
var state_6498__$1 = state_6498;
var statearr_6518_6545 = state_6498__$1;
(statearr_6518_6545[(2)] = inst_6481);

(statearr_6518_6545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6499 === (8))){
var inst_6458 = (state_6498[(7)]);
var inst_6466 = (state_6498[(10)]);
var inst_6462 = (state_6498[(9)]);
var inst_6471 = inst_6458.push(inst_6462);
var tmp6515 = inst_6458;
var inst_6458__$1 = tmp6515;
var inst_6459 = inst_6466;
var state_6498__$1 = (function (){var statearr_6519 = state_6498;
(statearr_6519[(7)] = inst_6458__$1);

(statearr_6519[(8)] = inst_6459);

(statearr_6519[(14)] = inst_6471);

return statearr_6519;
})();
var statearr_6520_6546 = state_6498__$1;
(statearr_6520_6546[(2)] = null);

(statearr_6520_6546[(1)] = (2));


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
});})(c__1424__auto___6532,out))
;
return ((function (switch__1359__auto__,c__1424__auto___6532,out){
return (function() {
var cljs$core$async$state_machine__1360__auto__ = null;
var cljs$core$async$state_machine__1360__auto____0 = (function (){
var statearr_6524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6524[(0)] = cljs$core$async$state_machine__1360__auto__);

(statearr_6524[(1)] = (1));

return statearr_6524;
});
var cljs$core$async$state_machine__1360__auto____1 = (function (state_6498){
while(true){
var ret_value__1361__auto__ = (function (){try{while(true){
var result__1362__auto__ = switch__1359__auto__.call(null,state_6498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1362__auto__;
}
break;
}
}catch (e6525){if((e6525 instanceof Object)){
var ex__1363__auto__ = e6525;
var statearr_6526_6547 = state_6498;
(statearr_6526_6547[(5)] = ex__1363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6548 = state_6498;
state_6498 = G__6548;
continue;
} else {
return ret_value__1361__auto__;
}
break;
}
});
cljs$core$async$state_machine__1360__auto__ = function(state_6498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1360__auto____1.call(this,state_6498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1360__auto____0;
cljs$core$async$state_machine__1360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1360__auto____1;
return cljs$core$async$state_machine__1360__auto__;
})()
;})(switch__1359__auto__,c__1424__auto___6532,out))
})();
var state__1426__auto__ = (function (){var statearr_6527 = f__1425__auto__.call(null);
(statearr_6527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1424__auto___6532);

return statearr_6527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1426__auto__);
});})(c__1424__auto___6532,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map