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
if(typeof cljs.core.async.t3914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3914 = (function (fn_handler,f,meta3915){
this.fn_handler = fn_handler;
this.f = f;
this.meta3915 = meta3915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3916,meta3915__$1){
var self__ = this;
var _3916__$1 = this;
return (new cljs.core.async.t3914(self__.fn_handler,self__.f,meta3915__$1));
});

cljs.core.async.t3914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3916){
var self__ = this;
var _3916__$1 = this;
return self__.meta3915;
});

cljs.core.async.t3914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t3914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t3914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta3915","meta3915",-1502717547,null)], null);
});

cljs.core.async.t3914.cljs$lang$type = true;

cljs.core.async.t3914.cljs$lang$ctorStr = "cljs.core.async/t3914";

cljs.core.async.t3914.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3914");
});

cljs.core.async.__GT_t3914 = (function cljs$core$async$fn_handler_$___GT_t3914(fn_handler__$1,f__$1,meta3915){
return (new cljs.core.async.t3914(fn_handler__$1,f__$1,meta3915));
});

}

return (new cljs.core.async.t3914(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args3919 = [];
var len__3300__auto___3922 = arguments.length;
var i__3301__auto___3923 = (0);
while(true){
if((i__3301__auto___3923 < len__3300__auto___3922)){
args3919.push((arguments[i__3301__auto___3923]));

var G__3924 = (i__3301__auto___3923 + (1));
i__3301__auto___3923 = G__3924;
continue;
} else {
}
break;
}

var G__3921 = args3919.length;
switch (G__3921) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3919.length)].join('')));

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
var args3926 = [];
var len__3300__auto___3929 = arguments.length;
var i__3301__auto___3930 = (0);
while(true){
if((i__3301__auto___3930 < len__3300__auto___3929)){
args3926.push((arguments[i__3301__auto___3930]));

var G__3931 = (i__3301__auto___3930 + (1));
i__3301__auto___3930 = G__3931;
continue;
} else {
}
break;
}

var G__3928 = args3926.length;
switch (G__3928) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3926.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3933 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3933);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3933,ret){
return (function (){
return fn1.call(null,val_3933);
});})(val_3933,ret))
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
var args3934 = [];
var len__3300__auto___3937 = arguments.length;
var i__3301__auto___3938 = (0);
while(true){
if((i__3301__auto___3938 < len__3300__auto___3937)){
args3934.push((arguments[i__3301__auto___3938]));

var G__3939 = (i__3301__auto___3938 + (1));
i__3301__auto___3938 = G__3939;
continue;
} else {
}
break;
}

var G__3936 = args3934.length;
switch (G__3936) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3934.length)].join('')));

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
var n__3209__auto___3941 = n;
var x_3942 = (0);
while(true){
if((x_3942 < n__3209__auto___3941)){
(a[x_3942] = (0));

var G__3943 = (x_3942 + (1));
x_3942 = G__3943;
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

var G__3944 = (i + (1));
i = G__3944;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t3948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3948 = (function (alt_flag,flag,meta3949){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta3949 = meta3949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3950,meta3949__$1){
var self__ = this;
var _3950__$1 = this;
return (new cljs.core.async.t3948(self__.alt_flag,self__.flag,meta3949__$1));
});})(flag))
;

cljs.core.async.t3948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3950){
var self__ = this;
var _3950__$1 = this;
return self__.meta3949;
});})(flag))
;

cljs.core.async.t3948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t3948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t3948.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3949","meta3949",-1547096411,null)], null);
});})(flag))
;

cljs.core.async.t3948.cljs$lang$type = true;

cljs.core.async.t3948.cljs$lang$ctorStr = "cljs.core.async/t3948";

cljs.core.async.t3948.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3948");
});})(flag))
;

cljs.core.async.__GT_t3948 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t3948(alt_flag__$1,flag__$1,meta3949){
return (new cljs.core.async.t3948(alt_flag__$1,flag__$1,meta3949));
});})(flag))
;

}

return (new cljs.core.async.t3948(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t3954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3954 = (function (alt_handler,flag,cb,meta3955){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta3955 = meta3955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3956,meta3955__$1){
var self__ = this;
var _3956__$1 = this;
return (new cljs.core.async.t3954(self__.alt_handler,self__.flag,self__.cb,meta3955__$1));
});

cljs.core.async.t3954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3956){
var self__ = this;
var _3956__$1 = this;
return self__.meta3955;
});

cljs.core.async.t3954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t3954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t3954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3955","meta3955",-99234135,null)], null);
});

cljs.core.async.t3954.cljs$lang$type = true;

cljs.core.async.t3954.cljs$lang$ctorStr = "cljs.core.async/t3954";

cljs.core.async.t3954.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t3954");
});

cljs.core.async.__GT_t3954 = (function cljs$core$async$alt_handler_$___GT_t3954(alt_handler__$1,flag__$1,cb__$1,meta3955){
return (new cljs.core.async.t3954(alt_handler__$1,flag__$1,cb__$1,meta3955));
});

}

return (new cljs.core.async.t3954(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3957_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3957_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3958_SHARP_,port], null));
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
var G__3959 = (i + (1));
i = G__3959;
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
var len__3300__auto___3965 = arguments.length;
var i__3301__auto___3966 = (0);
while(true){
if((i__3301__auto___3966 < len__3300__auto___3965)){
args__3303__auto__.push((arguments[i__3301__auto___3966]));

var G__3967 = (i__3301__auto___3966 + (1));
i__3301__auto___3966 = G__3967;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((1) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3962){
var map__3963 = p__3962;
var map__3963__$1 = ((((!((map__3963 == null)))?((((map__3963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3963):map__3963);
var opts = map__3963__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3960){
var G__3961 = cljs.core.first.call(null,seq3960);
var seq3960__$1 = cljs.core.next.call(null,seq3960);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3961,seq3960__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args3968 = [];
var len__3300__auto___4018 = arguments.length;
var i__3301__auto___4019 = (0);
while(true){
if((i__3301__auto___4019 < len__3300__auto___4018)){
args3968.push((arguments[i__3301__auto___4019]));

var G__4020 = (i__3301__auto___4019 + (1));
i__3301__auto___4019 = G__4020;
continue;
} else {
}
break;
}

var G__3970 = args3968.length;
switch (G__3970) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3968.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1320__auto___4022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___4022){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___4022){
return (function (state_3994){
var state_val_3995 = (state_3994[(1)]);
if((state_val_3995 === (7))){
var inst_3990 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_3996_4023 = state_3994__$1;
(statearr_3996_4023[(2)] = inst_3990);

(statearr_3996_4023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (1))){
var state_3994__$1 = state_3994;
var statearr_3997_4024 = state_3994__$1;
(statearr_3997_4024[(2)] = null);

(statearr_3997_4024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (4))){
var inst_3973 = (state_3994[(7)]);
var inst_3973__$1 = (state_3994[(2)]);
var inst_3974 = (inst_3973__$1 == null);
var state_3994__$1 = (function (){var statearr_3998 = state_3994;
(statearr_3998[(7)] = inst_3973__$1);

return statearr_3998;
})();
if(cljs.core.truth_(inst_3974)){
var statearr_3999_4025 = state_3994__$1;
(statearr_3999_4025[(1)] = (5));

} else {
var statearr_4000_4026 = state_3994__$1;
(statearr_4000_4026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (13))){
var state_3994__$1 = state_3994;
var statearr_4001_4027 = state_3994__$1;
(statearr_4001_4027[(2)] = null);

(statearr_4001_4027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (6))){
var inst_3973 = (state_3994[(7)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3994__$1,(11),to,inst_3973);
} else {
if((state_val_3995 === (3))){
var inst_3992 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3994__$1,inst_3992);
} else {
if((state_val_3995 === (12))){
var state_3994__$1 = state_3994;
var statearr_4002_4028 = state_3994__$1;
(statearr_4002_4028[(2)] = null);

(statearr_4002_4028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (2))){
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3994__$1,(4),from);
} else {
if((state_val_3995 === (11))){
var inst_3983 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
if(cljs.core.truth_(inst_3983)){
var statearr_4003_4029 = state_3994__$1;
(statearr_4003_4029[(1)] = (12));

} else {
var statearr_4004_4030 = state_3994__$1;
(statearr_4004_4030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (9))){
var state_3994__$1 = state_3994;
var statearr_4005_4031 = state_3994__$1;
(statearr_4005_4031[(2)] = null);

(statearr_4005_4031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (5))){
var state_3994__$1 = state_3994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4006_4032 = state_3994__$1;
(statearr_4006_4032[(1)] = (8));

} else {
var statearr_4007_4033 = state_3994__$1;
(statearr_4007_4033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (14))){
var inst_3988 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_4008_4034 = state_3994__$1;
(statearr_4008_4034[(2)] = inst_3988);

(statearr_4008_4034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (10))){
var inst_3980 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_4009_4035 = state_3994__$1;
(statearr_4009_4035[(2)] = inst_3980);

(statearr_4009_4035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (8))){
var inst_3977 = cljs.core.async.close_BANG_.call(null,to);
var state_3994__$1 = state_3994;
var statearr_4010_4036 = state_3994__$1;
(statearr_4010_4036[(2)] = inst_3977);

(statearr_4010_4036[(1)] = (10));


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
});})(c__1320__auto___4022))
;
return ((function (switch__1255__auto__,c__1320__auto___4022){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_4014 = [null,null,null,null,null,null,null,null];
(statearr_4014[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_4014[(1)] = (1));

return statearr_4014;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_3994){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_3994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4015){if((e4015 instanceof Object)){
var ex__1259__auto__ = e4015;
var statearr_4016_4037 = state_3994;
(statearr_4016_4037[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4038 = state_3994;
state_3994 = G__4038;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_3994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_3994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___4022))
})();
var state__1322__auto__ = (function (){var statearr_4017 = f__1321__auto__.call(null);
(statearr_4017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4022);

return statearr_4017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___4022))
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
return (function (p__4222){
var vec__4223 = p__4222;
var v = cljs.core.nth.call(null,vec__4223,(0),null);
var p = cljs.core.nth.call(null,vec__4223,(1),null);
var job = vec__4223;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1320__auto___4405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results){
return (function (state_4228){
var state_val_4229 = (state_4228[(1)]);
if((state_val_4229 === (1))){
var state_4228__$1 = state_4228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4228__$1,(2),res,v);
} else {
if((state_val_4229 === (2))){
var inst_4225 = (state_4228[(2)]);
var inst_4226 = cljs.core.async.close_BANG_.call(null,res);
var state_4228__$1 = (function (){var statearr_4230 = state_4228;
(statearr_4230[(7)] = inst_4225);

return statearr_4230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4228__$1,inst_4226);
} else {
return null;
}
}
});})(c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results))
;
return ((function (switch__1255__auto__,c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_4234 = [null,null,null,null,null,null,null,null];
(statearr_4234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__);

(statearr_4234[(1)] = (1));

return statearr_4234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1 = (function (state_4228){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4235){if((e4235 instanceof Object)){
var ex__1259__auto__ = e4235;
var statearr_4236_4406 = state_4228;
(statearr_4236_4406[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4407 = state_4228;
state_4228 = G__4407;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = function(state_4228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1.call(this,state_4228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results))
})();
var state__1322__auto__ = (function (){var statearr_4237 = f__1321__auto__.call(null);
(statearr_4237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4405);

return statearr_4237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___4405,res,vec__4223,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4238){
var vec__4239 = p__4238;
var v = cljs.core.nth.call(null,vec__4239,(0),null);
var p = cljs.core.nth.call(null,vec__4239,(1),null);
var job = vec__4239;
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
var n__3209__auto___4408 = n;
var __4409 = (0);
while(true){
if((__4409 < n__3209__auto___4408)){
var G__4240_4410 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__4240_4410) {
case "compute":
var c__1320__auto___4412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4409,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (__4409,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function (state_4253){
var state_val_4254 = (state_4253[(1)]);
if((state_val_4254 === (1))){
var state_4253__$1 = state_4253;
var statearr_4255_4413 = state_4253__$1;
(statearr_4255_4413[(2)] = null);

(statearr_4255_4413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4254 === (2))){
var state_4253__$1 = state_4253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4253__$1,(4),jobs);
} else {
if((state_val_4254 === (3))){
var inst_4251 = (state_4253[(2)]);
var state_4253__$1 = state_4253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4253__$1,inst_4251);
} else {
if((state_val_4254 === (4))){
var inst_4243 = (state_4253[(2)]);
var inst_4244 = process.call(null,inst_4243);
var state_4253__$1 = state_4253;
if(cljs.core.truth_(inst_4244)){
var statearr_4256_4414 = state_4253__$1;
(statearr_4256_4414[(1)] = (5));

} else {
var statearr_4257_4415 = state_4253__$1;
(statearr_4257_4415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4254 === (5))){
var state_4253__$1 = state_4253;
var statearr_4258_4416 = state_4253__$1;
(statearr_4258_4416[(2)] = null);

(statearr_4258_4416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4254 === (6))){
var state_4253__$1 = state_4253;
var statearr_4259_4417 = state_4253__$1;
(statearr_4259_4417[(2)] = null);

(statearr_4259_4417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4254 === (7))){
var inst_4249 = (state_4253[(2)]);
var state_4253__$1 = state_4253;
var statearr_4260_4418 = state_4253__$1;
(statearr_4260_4418[(2)] = inst_4249);

(statearr_4260_4418[(1)] = (3));


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
});})(__4409,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
;
return ((function (__4409,switch__1255__auto__,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_4264 = [null,null,null,null,null,null,null];
(statearr_4264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__);

(statearr_4264[(1)] = (1));

return statearr_4264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1 = (function (state_4253){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4265){if((e4265 instanceof Object)){
var ex__1259__auto__ = e4265;
var statearr_4266_4419 = state_4253;
(statearr_4266_4419[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4420 = state_4253;
state_4253 = G__4420;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = function(state_4253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1.call(this,state_4253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__;
})()
;})(__4409,switch__1255__auto__,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
})();
var state__1322__auto__ = (function (){var statearr_4267 = f__1321__auto__.call(null);
(statearr_4267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4412);

return statearr_4267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(__4409,c__1320__auto___4412,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
);


break;
case "async":
var c__1320__auto___4421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4409,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (__4409,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function (state_4280){
var state_val_4281 = (state_4280[(1)]);
if((state_val_4281 === (1))){
var state_4280__$1 = state_4280;
var statearr_4282_4422 = state_4280__$1;
(statearr_4282_4422[(2)] = null);

(statearr_4282_4422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4281 === (2))){
var state_4280__$1 = state_4280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4280__$1,(4),jobs);
} else {
if((state_val_4281 === (3))){
var inst_4278 = (state_4280[(2)]);
var state_4280__$1 = state_4280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4280__$1,inst_4278);
} else {
if((state_val_4281 === (4))){
var inst_4270 = (state_4280[(2)]);
var inst_4271 = async.call(null,inst_4270);
var state_4280__$1 = state_4280;
if(cljs.core.truth_(inst_4271)){
var statearr_4283_4423 = state_4280__$1;
(statearr_4283_4423[(1)] = (5));

} else {
var statearr_4284_4424 = state_4280__$1;
(statearr_4284_4424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4281 === (5))){
var state_4280__$1 = state_4280;
var statearr_4285_4425 = state_4280__$1;
(statearr_4285_4425[(2)] = null);

(statearr_4285_4425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4281 === (6))){
var state_4280__$1 = state_4280;
var statearr_4286_4426 = state_4280__$1;
(statearr_4286_4426[(2)] = null);

(statearr_4286_4426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4281 === (7))){
var inst_4276 = (state_4280[(2)]);
var state_4280__$1 = state_4280;
var statearr_4287_4427 = state_4280__$1;
(statearr_4287_4427[(2)] = inst_4276);

(statearr_4287_4427[(1)] = (3));


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
});})(__4409,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
;
return ((function (__4409,switch__1255__auto__,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_4291 = [null,null,null,null,null,null,null];
(statearr_4291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__);

(statearr_4291[(1)] = (1));

return statearr_4291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1 = (function (state_4280){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4292){if((e4292 instanceof Object)){
var ex__1259__auto__ = e4292;
var statearr_4293_4428 = state_4280;
(statearr_4293_4428[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4429 = state_4280;
state_4280 = G__4429;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = function(state_4280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1.call(this,state_4280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__;
})()
;})(__4409,switch__1255__auto__,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
})();
var state__1322__auto__ = (function (){var statearr_4294 = f__1321__auto__.call(null);
(statearr_4294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4421);

return statearr_4294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(__4409,c__1320__auto___4421,G__4240_4410,n__3209__auto___4408,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__4430 = (__4409 + (1));
__4409 = G__4430;
continue;
} else {
}
break;
}

var c__1320__auto___4431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___4431,jobs,results,process,async){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___4431,jobs,results,process,async){
return (function (state_4316){
var state_val_4317 = (state_4316[(1)]);
if((state_val_4317 === (1))){
var state_4316__$1 = state_4316;
var statearr_4318_4432 = state_4316__$1;
(statearr_4318_4432[(2)] = null);

(statearr_4318_4432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4317 === (2))){
var state_4316__$1 = state_4316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4316__$1,(4),from);
} else {
if((state_val_4317 === (3))){
var inst_4314 = (state_4316[(2)]);
var state_4316__$1 = state_4316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4316__$1,inst_4314);
} else {
if((state_val_4317 === (4))){
var inst_4297 = (state_4316[(7)]);
var inst_4297__$1 = (state_4316[(2)]);
var inst_4298 = (inst_4297__$1 == null);
var state_4316__$1 = (function (){var statearr_4319 = state_4316;
(statearr_4319[(7)] = inst_4297__$1);

return statearr_4319;
})();
if(cljs.core.truth_(inst_4298)){
var statearr_4320_4433 = state_4316__$1;
(statearr_4320_4433[(1)] = (5));

} else {
var statearr_4321_4434 = state_4316__$1;
(statearr_4321_4434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4317 === (5))){
var inst_4300 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4316__$1 = state_4316;
var statearr_4322_4435 = state_4316__$1;
(statearr_4322_4435[(2)] = inst_4300);

(statearr_4322_4435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4317 === (6))){
var inst_4302 = (state_4316[(8)]);
var inst_4297 = (state_4316[(7)]);
var inst_4302__$1 = cljs.core.async.chan.call(null,(1));
var inst_4303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4304 = [inst_4297,inst_4302__$1];
var inst_4305 = (new cljs.core.PersistentVector(null,2,(5),inst_4303,inst_4304,null));
var state_4316__$1 = (function (){var statearr_4323 = state_4316;
(statearr_4323[(8)] = inst_4302__$1);

return statearr_4323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4316__$1,(8),jobs,inst_4305);
} else {
if((state_val_4317 === (7))){
var inst_4312 = (state_4316[(2)]);
var state_4316__$1 = state_4316;
var statearr_4324_4436 = state_4316__$1;
(statearr_4324_4436[(2)] = inst_4312);

(statearr_4324_4436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4317 === (8))){
var inst_4302 = (state_4316[(8)]);
var inst_4307 = (state_4316[(2)]);
var state_4316__$1 = (function (){var statearr_4325 = state_4316;
(statearr_4325[(9)] = inst_4307);

return statearr_4325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4316__$1,(9),results,inst_4302);
} else {
if((state_val_4317 === (9))){
var inst_4309 = (state_4316[(2)]);
var state_4316__$1 = (function (){var statearr_4326 = state_4316;
(statearr_4326[(10)] = inst_4309);

return statearr_4326;
})();
var statearr_4327_4437 = state_4316__$1;
(statearr_4327_4437[(2)] = null);

(statearr_4327_4437[(1)] = (2));


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
});})(c__1320__auto___4431,jobs,results,process,async))
;
return ((function (switch__1255__auto__,c__1320__auto___4431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_4331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__);

(statearr_4331[(1)] = (1));

return statearr_4331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1 = (function (state_4316){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4332){if((e4332 instanceof Object)){
var ex__1259__auto__ = e4332;
var statearr_4333_4438 = state_4316;
(statearr_4333_4438[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4439 = state_4316;
state_4316 = G__4439;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = function(state_4316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1.call(this,state_4316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___4431,jobs,results,process,async))
})();
var state__1322__auto__ = (function (){var statearr_4334 = f__1321__auto__.call(null);
(statearr_4334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4431);

return statearr_4334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___4431,jobs,results,process,async))
);


var c__1320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto__,jobs,results,process,async){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto__,jobs,results,process,async){
return (function (state_4372){
var state_val_4373 = (state_4372[(1)]);
if((state_val_4373 === (7))){
var inst_4368 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
var statearr_4374_4440 = state_4372__$1;
(statearr_4374_4440[(2)] = inst_4368);

(statearr_4374_4440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (20))){
var state_4372__$1 = state_4372;
var statearr_4375_4441 = state_4372__$1;
(statearr_4375_4441[(2)] = null);

(statearr_4375_4441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (1))){
var state_4372__$1 = state_4372;
var statearr_4376_4442 = state_4372__$1;
(statearr_4376_4442[(2)] = null);

(statearr_4376_4442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (4))){
var inst_4337 = (state_4372[(7)]);
var inst_4337__$1 = (state_4372[(2)]);
var inst_4338 = (inst_4337__$1 == null);
var state_4372__$1 = (function (){var statearr_4377 = state_4372;
(statearr_4377[(7)] = inst_4337__$1);

return statearr_4377;
})();
if(cljs.core.truth_(inst_4338)){
var statearr_4378_4443 = state_4372__$1;
(statearr_4378_4443[(1)] = (5));

} else {
var statearr_4379_4444 = state_4372__$1;
(statearr_4379_4444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (15))){
var inst_4350 = (state_4372[(8)]);
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4372__$1,(18),to,inst_4350);
} else {
if((state_val_4373 === (21))){
var inst_4363 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
var statearr_4380_4445 = state_4372__$1;
(statearr_4380_4445[(2)] = inst_4363);

(statearr_4380_4445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (13))){
var inst_4365 = (state_4372[(2)]);
var state_4372__$1 = (function (){var statearr_4381 = state_4372;
(statearr_4381[(9)] = inst_4365);

return statearr_4381;
})();
var statearr_4382_4446 = state_4372__$1;
(statearr_4382_4446[(2)] = null);

(statearr_4382_4446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (6))){
var inst_4337 = (state_4372[(7)]);
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4372__$1,(11),inst_4337);
} else {
if((state_val_4373 === (17))){
var inst_4358 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
if(cljs.core.truth_(inst_4358)){
var statearr_4383_4447 = state_4372__$1;
(statearr_4383_4447[(1)] = (19));

} else {
var statearr_4384_4448 = state_4372__$1;
(statearr_4384_4448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (3))){
var inst_4370 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4372__$1,inst_4370);
} else {
if((state_val_4373 === (12))){
var inst_4347 = (state_4372[(10)]);
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4372__$1,(14),inst_4347);
} else {
if((state_val_4373 === (2))){
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4372__$1,(4),results);
} else {
if((state_val_4373 === (19))){
var state_4372__$1 = state_4372;
var statearr_4385_4449 = state_4372__$1;
(statearr_4385_4449[(2)] = null);

(statearr_4385_4449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (11))){
var inst_4347 = (state_4372[(2)]);
var state_4372__$1 = (function (){var statearr_4386 = state_4372;
(statearr_4386[(10)] = inst_4347);

return statearr_4386;
})();
var statearr_4387_4450 = state_4372__$1;
(statearr_4387_4450[(2)] = null);

(statearr_4387_4450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (9))){
var state_4372__$1 = state_4372;
var statearr_4388_4451 = state_4372__$1;
(statearr_4388_4451[(2)] = null);

(statearr_4388_4451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (5))){
var state_4372__$1 = state_4372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4389_4452 = state_4372__$1;
(statearr_4389_4452[(1)] = (8));

} else {
var statearr_4390_4453 = state_4372__$1;
(statearr_4390_4453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (14))){
var inst_4350 = (state_4372[(8)]);
var inst_4352 = (state_4372[(11)]);
var inst_4350__$1 = (state_4372[(2)]);
var inst_4351 = (inst_4350__$1 == null);
var inst_4352__$1 = cljs.core.not.call(null,inst_4351);
var state_4372__$1 = (function (){var statearr_4391 = state_4372;
(statearr_4391[(8)] = inst_4350__$1);

(statearr_4391[(11)] = inst_4352__$1);

return statearr_4391;
})();
if(inst_4352__$1){
var statearr_4392_4454 = state_4372__$1;
(statearr_4392_4454[(1)] = (15));

} else {
var statearr_4393_4455 = state_4372__$1;
(statearr_4393_4455[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (16))){
var inst_4352 = (state_4372[(11)]);
var state_4372__$1 = state_4372;
var statearr_4394_4456 = state_4372__$1;
(statearr_4394_4456[(2)] = inst_4352);

(statearr_4394_4456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (10))){
var inst_4344 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
var statearr_4395_4457 = state_4372__$1;
(statearr_4395_4457[(2)] = inst_4344);

(statearr_4395_4457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (18))){
var inst_4355 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
var statearr_4396_4458 = state_4372__$1;
(statearr_4396_4458[(2)] = inst_4355);

(statearr_4396_4458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (8))){
var inst_4341 = cljs.core.async.close_BANG_.call(null,to);
var state_4372__$1 = state_4372;
var statearr_4397_4459 = state_4372__$1;
(statearr_4397_4459[(2)] = inst_4341);

(statearr_4397_4459[(1)] = (10));


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
});})(c__1320__auto__,jobs,results,process,async))
;
return ((function (switch__1255__auto__,c__1320__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_4401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__);

(statearr_4401[(1)] = (1));

return statearr_4401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1 = (function (state_4372){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4402){if((e4402 instanceof Object)){
var ex__1259__auto__ = e4402;
var statearr_4403_4460 = state_4372;
(statearr_4403_4460[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4461 = state_4372;
state_4372 = G__4461;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__ = function(state_4372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1.call(this,state_4372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto__,jobs,results,process,async))
})();
var state__1322__auto__ = (function (){var statearr_4404 = f__1321__auto__.call(null);
(statearr_4404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto__);

return statearr_4404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto__,jobs,results,process,async))
);

return c__1320__auto__;
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
var args4462 = [];
var len__3300__auto___4465 = arguments.length;
var i__3301__auto___4466 = (0);
while(true){
if((i__3301__auto___4466 < len__3300__auto___4465)){
args4462.push((arguments[i__3301__auto___4466]));

var G__4467 = (i__3301__auto___4466 + (1));
i__3301__auto___4466 = G__4467;
continue;
} else {
}
break;
}

var G__4464 = args4462.length;
switch (G__4464) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4462.length)].join('')));

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
var args4469 = [];
var len__3300__auto___4472 = arguments.length;
var i__3301__auto___4473 = (0);
while(true){
if((i__3301__auto___4473 < len__3300__auto___4472)){
args4469.push((arguments[i__3301__auto___4473]));

var G__4474 = (i__3301__auto___4473 + (1));
i__3301__auto___4473 = G__4474;
continue;
} else {
}
break;
}

var G__4471 = args4469.length;
switch (G__4471) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4469.length)].join('')));

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
var args4476 = [];
var len__3300__auto___4529 = arguments.length;
var i__3301__auto___4530 = (0);
while(true){
if((i__3301__auto___4530 < len__3300__auto___4529)){
args4476.push((arguments[i__3301__auto___4530]));

var G__4531 = (i__3301__auto___4530 + (1));
i__3301__auto___4530 = G__4531;
continue;
} else {
}
break;
}

var G__4478 = args4476.length;
switch (G__4478) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4476.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1320__auto___4533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___4533,tc,fc){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___4533,tc,fc){
return (function (state_4504){
var state_val_4505 = (state_4504[(1)]);
if((state_val_4505 === (7))){
var inst_4500 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
var statearr_4506_4534 = state_4504__$1;
(statearr_4506_4534[(2)] = inst_4500);

(statearr_4506_4534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (1))){
var state_4504__$1 = state_4504;
var statearr_4507_4535 = state_4504__$1;
(statearr_4507_4535[(2)] = null);

(statearr_4507_4535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (4))){
var inst_4481 = (state_4504[(7)]);
var inst_4481__$1 = (state_4504[(2)]);
var inst_4482 = (inst_4481__$1 == null);
var state_4504__$1 = (function (){var statearr_4508 = state_4504;
(statearr_4508[(7)] = inst_4481__$1);

return statearr_4508;
})();
if(cljs.core.truth_(inst_4482)){
var statearr_4509_4536 = state_4504__$1;
(statearr_4509_4536[(1)] = (5));

} else {
var statearr_4510_4537 = state_4504__$1;
(statearr_4510_4537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (13))){
var state_4504__$1 = state_4504;
var statearr_4511_4538 = state_4504__$1;
(statearr_4511_4538[(2)] = null);

(statearr_4511_4538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (6))){
var inst_4481 = (state_4504[(7)]);
var inst_4487 = p.call(null,inst_4481);
var state_4504__$1 = state_4504;
if(cljs.core.truth_(inst_4487)){
var statearr_4512_4539 = state_4504__$1;
(statearr_4512_4539[(1)] = (9));

} else {
var statearr_4513_4540 = state_4504__$1;
(statearr_4513_4540[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (3))){
var inst_4502 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4504__$1,inst_4502);
} else {
if((state_val_4505 === (12))){
var state_4504__$1 = state_4504;
var statearr_4514_4541 = state_4504__$1;
(statearr_4514_4541[(2)] = null);

(statearr_4514_4541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (2))){
var state_4504__$1 = state_4504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4504__$1,(4),ch);
} else {
if((state_val_4505 === (11))){
var inst_4481 = (state_4504[(7)]);
var inst_4491 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4504__$1,(8),inst_4491,inst_4481);
} else {
if((state_val_4505 === (9))){
var state_4504__$1 = state_4504;
var statearr_4515_4542 = state_4504__$1;
(statearr_4515_4542[(2)] = tc);

(statearr_4515_4542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (5))){
var inst_4484 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4485 = cljs.core.async.close_BANG_.call(null,fc);
var state_4504__$1 = (function (){var statearr_4516 = state_4504;
(statearr_4516[(8)] = inst_4484);

return statearr_4516;
})();
var statearr_4517_4543 = state_4504__$1;
(statearr_4517_4543[(2)] = inst_4485);

(statearr_4517_4543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (14))){
var inst_4498 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
var statearr_4518_4544 = state_4504__$1;
(statearr_4518_4544[(2)] = inst_4498);

(statearr_4518_4544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (10))){
var state_4504__$1 = state_4504;
var statearr_4519_4545 = state_4504__$1;
(statearr_4519_4545[(2)] = fc);

(statearr_4519_4545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (8))){
var inst_4493 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
if(cljs.core.truth_(inst_4493)){
var statearr_4520_4546 = state_4504__$1;
(statearr_4520_4546[(1)] = (12));

} else {
var statearr_4521_4547 = state_4504__$1;
(statearr_4521_4547[(1)] = (13));

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
});})(c__1320__auto___4533,tc,fc))
;
return ((function (switch__1255__auto__,c__1320__auto___4533,tc,fc){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_4525 = [null,null,null,null,null,null,null,null,null];
(statearr_4525[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_4525[(1)] = (1));

return statearr_4525;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_4504){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4526){if((e4526 instanceof Object)){
var ex__1259__auto__ = e4526;
var statearr_4527_4548 = state_4504;
(statearr_4527_4548[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4549 = state_4504;
state_4504 = G__4549;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_4504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_4504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___4533,tc,fc))
})();
var state__1322__auto__ = (function (){var statearr_4528 = f__1321__auto__.call(null);
(statearr_4528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___4533);

return statearr_4528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___4533,tc,fc))
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
var c__1320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto__){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto__){
return (function (state_4596){
var state_val_4597 = (state_4596[(1)]);
if((state_val_4597 === (1))){
var inst_4582 = init;
var state_4596__$1 = (function (){var statearr_4598 = state_4596;
(statearr_4598[(7)] = inst_4582);

return statearr_4598;
})();
var statearr_4599_4614 = state_4596__$1;
(statearr_4599_4614[(2)] = null);

(statearr_4599_4614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4597 === (2))){
var state_4596__$1 = state_4596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4596__$1,(4),ch);
} else {
if((state_val_4597 === (3))){
var inst_4594 = (state_4596[(2)]);
var state_4596__$1 = state_4596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4596__$1,inst_4594);
} else {
if((state_val_4597 === (4))){
var inst_4585 = (state_4596[(8)]);
var inst_4585__$1 = (state_4596[(2)]);
var inst_4586 = (inst_4585__$1 == null);
var state_4596__$1 = (function (){var statearr_4600 = state_4596;
(statearr_4600[(8)] = inst_4585__$1);

return statearr_4600;
})();
if(cljs.core.truth_(inst_4586)){
var statearr_4601_4615 = state_4596__$1;
(statearr_4601_4615[(1)] = (5));

} else {
var statearr_4602_4616 = state_4596__$1;
(statearr_4602_4616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4597 === (5))){
var inst_4582 = (state_4596[(7)]);
var state_4596__$1 = state_4596;
var statearr_4603_4617 = state_4596__$1;
(statearr_4603_4617[(2)] = inst_4582);

(statearr_4603_4617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4597 === (6))){
var inst_4582 = (state_4596[(7)]);
var inst_4585 = (state_4596[(8)]);
var inst_4589 = f.call(null,inst_4582,inst_4585);
var inst_4582__$1 = inst_4589;
var state_4596__$1 = (function (){var statearr_4604 = state_4596;
(statearr_4604[(7)] = inst_4582__$1);

return statearr_4604;
})();
var statearr_4605_4618 = state_4596__$1;
(statearr_4605_4618[(2)] = null);

(statearr_4605_4618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4597 === (7))){
var inst_4592 = (state_4596[(2)]);
var state_4596__$1 = state_4596;
var statearr_4606_4619 = state_4596__$1;
(statearr_4606_4619[(2)] = inst_4592);

(statearr_4606_4619[(1)] = (3));


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
});})(c__1320__auto__))
;
return ((function (switch__1255__auto__,c__1320__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1256__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1256__auto____0 = (function (){
var statearr_4610 = [null,null,null,null,null,null,null,null,null];
(statearr_4610[(0)] = cljs$core$async$reduce_$_state_machine__1256__auto__);

(statearr_4610[(1)] = (1));

return statearr_4610;
});
var cljs$core$async$reduce_$_state_machine__1256__auto____1 = (function (state_4596){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4611){if((e4611 instanceof Object)){
var ex__1259__auto__ = e4611;
var statearr_4612_4620 = state_4596;
(statearr_4612_4620[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4621 = state_4596;
state_4596 = G__4621;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1256__auto__ = function(state_4596){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1256__auto____1.call(this,state_4596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1256__auto____0;
cljs$core$async$reduce_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1256__auto____1;
return cljs$core$async$reduce_$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto__))
})();
var state__1322__auto__ = (function (){var statearr_4613 = f__1321__auto__.call(null);
(statearr_4613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto__);

return statearr_4613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto__))
);

return c__1320__auto__;
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
var args4622 = [];
var len__3300__auto___4674 = arguments.length;
var i__3301__auto___4675 = (0);
while(true){
if((i__3301__auto___4675 < len__3300__auto___4674)){
args4622.push((arguments[i__3301__auto___4675]));

var G__4676 = (i__3301__auto___4675 + (1));
i__3301__auto___4675 = G__4676;
continue;
} else {
}
break;
}

var G__4624 = args4622.length;
switch (G__4624) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4622.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto__){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto__){
return (function (state_4649){
var state_val_4650 = (state_4649[(1)]);
if((state_val_4650 === (7))){
var inst_4631 = (state_4649[(2)]);
var state_4649__$1 = state_4649;
var statearr_4651_4678 = state_4649__$1;
(statearr_4651_4678[(2)] = inst_4631);

(statearr_4651_4678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (1))){
var inst_4625 = cljs.core.seq.call(null,coll);
var inst_4626 = inst_4625;
var state_4649__$1 = (function (){var statearr_4652 = state_4649;
(statearr_4652[(7)] = inst_4626);

return statearr_4652;
})();
var statearr_4653_4679 = state_4649__$1;
(statearr_4653_4679[(2)] = null);

(statearr_4653_4679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (4))){
var inst_4626 = (state_4649[(7)]);
var inst_4629 = cljs.core.first.call(null,inst_4626);
var state_4649__$1 = state_4649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4649__$1,(7),ch,inst_4629);
} else {
if((state_val_4650 === (13))){
var inst_4643 = (state_4649[(2)]);
var state_4649__$1 = state_4649;
var statearr_4654_4680 = state_4649__$1;
(statearr_4654_4680[(2)] = inst_4643);

(statearr_4654_4680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (6))){
var inst_4634 = (state_4649[(2)]);
var state_4649__$1 = state_4649;
if(cljs.core.truth_(inst_4634)){
var statearr_4655_4681 = state_4649__$1;
(statearr_4655_4681[(1)] = (8));

} else {
var statearr_4656_4682 = state_4649__$1;
(statearr_4656_4682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (3))){
var inst_4647 = (state_4649[(2)]);
var state_4649__$1 = state_4649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4649__$1,inst_4647);
} else {
if((state_val_4650 === (12))){
var state_4649__$1 = state_4649;
var statearr_4657_4683 = state_4649__$1;
(statearr_4657_4683[(2)] = null);

(statearr_4657_4683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (2))){
var inst_4626 = (state_4649[(7)]);
var state_4649__$1 = state_4649;
if(cljs.core.truth_(inst_4626)){
var statearr_4658_4684 = state_4649__$1;
(statearr_4658_4684[(1)] = (4));

} else {
var statearr_4659_4685 = state_4649__$1;
(statearr_4659_4685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (11))){
var inst_4640 = cljs.core.async.close_BANG_.call(null,ch);
var state_4649__$1 = state_4649;
var statearr_4660_4686 = state_4649__$1;
(statearr_4660_4686[(2)] = inst_4640);

(statearr_4660_4686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (9))){
var state_4649__$1 = state_4649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4661_4687 = state_4649__$1;
(statearr_4661_4687[(1)] = (11));

} else {
var statearr_4662_4688 = state_4649__$1;
(statearr_4662_4688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (5))){
var inst_4626 = (state_4649[(7)]);
var state_4649__$1 = state_4649;
var statearr_4663_4689 = state_4649__$1;
(statearr_4663_4689[(2)] = inst_4626);

(statearr_4663_4689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (10))){
var inst_4645 = (state_4649[(2)]);
var state_4649__$1 = state_4649;
var statearr_4664_4690 = state_4649__$1;
(statearr_4664_4690[(2)] = inst_4645);

(statearr_4664_4690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4650 === (8))){
var inst_4626 = (state_4649[(7)]);
var inst_4636 = cljs.core.next.call(null,inst_4626);
var inst_4626__$1 = inst_4636;
var state_4649__$1 = (function (){var statearr_4665 = state_4649;
(statearr_4665[(7)] = inst_4626__$1);

return statearr_4665;
})();
var statearr_4666_4691 = state_4649__$1;
(statearr_4666_4691[(2)] = null);

(statearr_4666_4691[(1)] = (2));


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
});})(c__1320__auto__))
;
return ((function (switch__1255__auto__,c__1320__auto__){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_4670 = [null,null,null,null,null,null,null,null];
(statearr_4670[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_4670[(1)] = (1));

return statearr_4670;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_4649){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_4649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e4671){if((e4671 instanceof Object)){
var ex__1259__auto__ = e4671;
var statearr_4672_4692 = state_4649;
(statearr_4672_4692[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4693 = state_4649;
state_4649 = G__4693;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_4649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_4649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto__))
})();
var state__1322__auto__ = (function (){var statearr_4673 = f__1321__auto__.call(null);
(statearr_4673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto__);

return statearr_4673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto__))
);

return c__1320__auto__;
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
if(typeof cljs.core.async.t4919 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4919 = (function (mult,ch,cs,meta4920){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta4920 = meta4920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4921,meta4920__$1){
var self__ = this;
var _4921__$1 = this;
return (new cljs.core.async.t4919(self__.mult,self__.ch,self__.cs,meta4920__$1));
});})(cs))
;

cljs.core.async.t4919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4921){
var self__ = this;
var _4921__$1 = this;
return self__.meta4920;
});})(cs))
;

cljs.core.async.t4919.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t4919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t4919.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t4919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t4919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t4919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t4919.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4920","meta4920",-2110247344,null)], null);
});})(cs))
;

cljs.core.async.t4919.cljs$lang$type = true;

cljs.core.async.t4919.cljs$lang$ctorStr = "cljs.core.async/t4919";

cljs.core.async.t4919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4919");
});})(cs))
;

cljs.core.async.__GT_t4919 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t4919(mult__$1,ch__$1,cs__$1,meta4920){
return (new cljs.core.async.t4919(mult__$1,ch__$1,cs__$1,meta4920));
});})(cs))
;

}

return (new cljs.core.async.t4919(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__1320__auto___5140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___5140,cs,m,dchan,dctr,done){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___5140,cs,m,dchan,dctr,done){
return (function (state_5052){
var state_val_5053 = (state_5052[(1)]);
if((state_val_5053 === (7))){
var inst_5048 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5054_5141 = state_5052__$1;
(statearr_5054_5141[(2)] = inst_5048);

(statearr_5054_5141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (20))){
var inst_4953 = (state_5052[(7)]);
var inst_4963 = cljs.core.first.call(null,inst_4953);
var inst_4964 = cljs.core.nth.call(null,inst_4963,(0),null);
var inst_4965 = cljs.core.nth.call(null,inst_4963,(1),null);
var state_5052__$1 = (function (){var statearr_5055 = state_5052;
(statearr_5055[(8)] = inst_4964);

return statearr_5055;
})();
if(cljs.core.truth_(inst_4965)){
var statearr_5056_5142 = state_5052__$1;
(statearr_5056_5142[(1)] = (22));

} else {
var statearr_5057_5143 = state_5052__$1;
(statearr_5057_5143[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (27))){
var inst_5000 = (state_5052[(9)]);
var inst_4924 = (state_5052[(10)]);
var inst_4993 = (state_5052[(11)]);
var inst_4995 = (state_5052[(12)]);
var inst_5000__$1 = cljs.core._nth.call(null,inst_4993,inst_4995);
var inst_5001 = cljs.core.async.put_BANG_.call(null,inst_5000__$1,inst_4924,done);
var state_5052__$1 = (function (){var statearr_5058 = state_5052;
(statearr_5058[(9)] = inst_5000__$1);

return statearr_5058;
})();
if(cljs.core.truth_(inst_5001)){
var statearr_5059_5144 = state_5052__$1;
(statearr_5059_5144[(1)] = (30));

} else {
var statearr_5060_5145 = state_5052__$1;
(statearr_5060_5145[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (1))){
var state_5052__$1 = state_5052;
var statearr_5061_5146 = state_5052__$1;
(statearr_5061_5146[(2)] = null);

(statearr_5061_5146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (24))){
var inst_4953 = (state_5052[(7)]);
var inst_4970 = (state_5052[(2)]);
var inst_4971 = cljs.core.next.call(null,inst_4953);
var inst_4933 = inst_4971;
var inst_4934 = null;
var inst_4935 = (0);
var inst_4936 = (0);
var state_5052__$1 = (function (){var statearr_5062 = state_5052;
(statearr_5062[(13)] = inst_4970);

(statearr_5062[(14)] = inst_4934);

(statearr_5062[(15)] = inst_4935);

(statearr_5062[(16)] = inst_4936);

(statearr_5062[(17)] = inst_4933);

return statearr_5062;
})();
var statearr_5063_5147 = state_5052__$1;
(statearr_5063_5147[(2)] = null);

(statearr_5063_5147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (39))){
var state_5052__$1 = state_5052;
var statearr_5067_5148 = state_5052__$1;
(statearr_5067_5148[(2)] = null);

(statearr_5067_5148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (4))){
var inst_4924 = (state_5052[(10)]);
var inst_4924__$1 = (state_5052[(2)]);
var inst_4925 = (inst_4924__$1 == null);
var state_5052__$1 = (function (){var statearr_5068 = state_5052;
(statearr_5068[(10)] = inst_4924__$1);

return statearr_5068;
})();
if(cljs.core.truth_(inst_4925)){
var statearr_5069_5149 = state_5052__$1;
(statearr_5069_5149[(1)] = (5));

} else {
var statearr_5070_5150 = state_5052__$1;
(statearr_5070_5150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (15))){
var inst_4934 = (state_5052[(14)]);
var inst_4935 = (state_5052[(15)]);
var inst_4936 = (state_5052[(16)]);
var inst_4933 = (state_5052[(17)]);
var inst_4949 = (state_5052[(2)]);
var inst_4950 = (inst_4936 + (1));
var tmp5064 = inst_4934;
var tmp5065 = inst_4935;
var tmp5066 = inst_4933;
var inst_4933__$1 = tmp5066;
var inst_4934__$1 = tmp5064;
var inst_4935__$1 = tmp5065;
var inst_4936__$1 = inst_4950;
var state_5052__$1 = (function (){var statearr_5071 = state_5052;
(statearr_5071[(14)] = inst_4934__$1);

(statearr_5071[(15)] = inst_4935__$1);

(statearr_5071[(18)] = inst_4949);

(statearr_5071[(16)] = inst_4936__$1);

(statearr_5071[(17)] = inst_4933__$1);

return statearr_5071;
})();
var statearr_5072_5151 = state_5052__$1;
(statearr_5072_5151[(2)] = null);

(statearr_5072_5151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (21))){
var inst_4974 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5076_5152 = state_5052__$1;
(statearr_5076_5152[(2)] = inst_4974);

(statearr_5076_5152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (31))){
var inst_5000 = (state_5052[(9)]);
var inst_5004 = done.call(null,null);
var inst_5005 = cljs.core.async.untap_STAR_.call(null,m,inst_5000);
var state_5052__$1 = (function (){var statearr_5077 = state_5052;
(statearr_5077[(19)] = inst_5004);

return statearr_5077;
})();
var statearr_5078_5153 = state_5052__$1;
(statearr_5078_5153[(2)] = inst_5005);

(statearr_5078_5153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (32))){
var inst_4994 = (state_5052[(20)]);
var inst_4992 = (state_5052[(21)]);
var inst_4993 = (state_5052[(11)]);
var inst_4995 = (state_5052[(12)]);
var inst_5007 = (state_5052[(2)]);
var inst_5008 = (inst_4995 + (1));
var tmp5073 = inst_4994;
var tmp5074 = inst_4992;
var tmp5075 = inst_4993;
var inst_4992__$1 = tmp5074;
var inst_4993__$1 = tmp5075;
var inst_4994__$1 = tmp5073;
var inst_4995__$1 = inst_5008;
var state_5052__$1 = (function (){var statearr_5079 = state_5052;
(statearr_5079[(20)] = inst_4994__$1);

(statearr_5079[(21)] = inst_4992__$1);

(statearr_5079[(11)] = inst_4993__$1);

(statearr_5079[(22)] = inst_5007);

(statearr_5079[(12)] = inst_4995__$1);

return statearr_5079;
})();
var statearr_5080_5154 = state_5052__$1;
(statearr_5080_5154[(2)] = null);

(statearr_5080_5154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (40))){
var inst_5020 = (state_5052[(23)]);
var inst_5024 = done.call(null,null);
var inst_5025 = cljs.core.async.untap_STAR_.call(null,m,inst_5020);
var state_5052__$1 = (function (){var statearr_5081 = state_5052;
(statearr_5081[(24)] = inst_5024);

return statearr_5081;
})();
var statearr_5082_5155 = state_5052__$1;
(statearr_5082_5155[(2)] = inst_5025);

(statearr_5082_5155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (33))){
var inst_5011 = (state_5052[(25)]);
var inst_5013 = cljs.core.chunked_seq_QMARK_.call(null,inst_5011);
var state_5052__$1 = state_5052;
if(inst_5013){
var statearr_5083_5156 = state_5052__$1;
(statearr_5083_5156[(1)] = (36));

} else {
var statearr_5084_5157 = state_5052__$1;
(statearr_5084_5157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (13))){
var inst_4943 = (state_5052[(26)]);
var inst_4946 = cljs.core.async.close_BANG_.call(null,inst_4943);
var state_5052__$1 = state_5052;
var statearr_5085_5158 = state_5052__$1;
(statearr_5085_5158[(2)] = inst_4946);

(statearr_5085_5158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (22))){
var inst_4964 = (state_5052[(8)]);
var inst_4967 = cljs.core.async.close_BANG_.call(null,inst_4964);
var state_5052__$1 = state_5052;
var statearr_5086_5159 = state_5052__$1;
(statearr_5086_5159[(2)] = inst_4967);

(statearr_5086_5159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (36))){
var inst_5011 = (state_5052[(25)]);
var inst_5015 = cljs.core.chunk_first.call(null,inst_5011);
var inst_5016 = cljs.core.chunk_rest.call(null,inst_5011);
var inst_5017 = cljs.core.count.call(null,inst_5015);
var inst_4992 = inst_5016;
var inst_4993 = inst_5015;
var inst_4994 = inst_5017;
var inst_4995 = (0);
var state_5052__$1 = (function (){var statearr_5087 = state_5052;
(statearr_5087[(20)] = inst_4994);

(statearr_5087[(21)] = inst_4992);

(statearr_5087[(11)] = inst_4993);

(statearr_5087[(12)] = inst_4995);

return statearr_5087;
})();
var statearr_5088_5160 = state_5052__$1;
(statearr_5088_5160[(2)] = null);

(statearr_5088_5160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (41))){
var inst_5011 = (state_5052[(25)]);
var inst_5027 = (state_5052[(2)]);
var inst_5028 = cljs.core.next.call(null,inst_5011);
var inst_4992 = inst_5028;
var inst_4993 = null;
var inst_4994 = (0);
var inst_4995 = (0);
var state_5052__$1 = (function (){var statearr_5089 = state_5052;
(statearr_5089[(20)] = inst_4994);

(statearr_5089[(21)] = inst_4992);

(statearr_5089[(27)] = inst_5027);

(statearr_5089[(11)] = inst_4993);

(statearr_5089[(12)] = inst_4995);

return statearr_5089;
})();
var statearr_5090_5161 = state_5052__$1;
(statearr_5090_5161[(2)] = null);

(statearr_5090_5161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (43))){
var state_5052__$1 = state_5052;
var statearr_5091_5162 = state_5052__$1;
(statearr_5091_5162[(2)] = null);

(statearr_5091_5162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (29))){
var inst_5036 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5092_5163 = state_5052__$1;
(statearr_5092_5163[(2)] = inst_5036);

(statearr_5092_5163[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (44))){
var inst_5045 = (state_5052[(2)]);
var state_5052__$1 = (function (){var statearr_5093 = state_5052;
(statearr_5093[(28)] = inst_5045);

return statearr_5093;
})();
var statearr_5094_5164 = state_5052__$1;
(statearr_5094_5164[(2)] = null);

(statearr_5094_5164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (6))){
var inst_4984 = (state_5052[(29)]);
var inst_4983 = cljs.core.deref.call(null,cs);
var inst_4984__$1 = cljs.core.keys.call(null,inst_4983);
var inst_4985 = cljs.core.count.call(null,inst_4984__$1);
var inst_4986 = cljs.core.reset_BANG_.call(null,dctr,inst_4985);
var inst_4991 = cljs.core.seq.call(null,inst_4984__$1);
var inst_4992 = inst_4991;
var inst_4993 = null;
var inst_4994 = (0);
var inst_4995 = (0);
var state_5052__$1 = (function (){var statearr_5095 = state_5052;
(statearr_5095[(30)] = inst_4986);

(statearr_5095[(20)] = inst_4994);

(statearr_5095[(29)] = inst_4984__$1);

(statearr_5095[(21)] = inst_4992);

(statearr_5095[(11)] = inst_4993);

(statearr_5095[(12)] = inst_4995);

return statearr_5095;
})();
var statearr_5096_5165 = state_5052__$1;
(statearr_5096_5165[(2)] = null);

(statearr_5096_5165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (28))){
var inst_5011 = (state_5052[(25)]);
var inst_4992 = (state_5052[(21)]);
var inst_5011__$1 = cljs.core.seq.call(null,inst_4992);
var state_5052__$1 = (function (){var statearr_5097 = state_5052;
(statearr_5097[(25)] = inst_5011__$1);

return statearr_5097;
})();
if(inst_5011__$1){
var statearr_5098_5166 = state_5052__$1;
(statearr_5098_5166[(1)] = (33));

} else {
var statearr_5099_5167 = state_5052__$1;
(statearr_5099_5167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (25))){
var inst_4994 = (state_5052[(20)]);
var inst_4995 = (state_5052[(12)]);
var inst_4997 = (inst_4995 < inst_4994);
var inst_4998 = inst_4997;
var state_5052__$1 = state_5052;
if(cljs.core.truth_(inst_4998)){
var statearr_5100_5168 = state_5052__$1;
(statearr_5100_5168[(1)] = (27));

} else {
var statearr_5101_5169 = state_5052__$1;
(statearr_5101_5169[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (34))){
var state_5052__$1 = state_5052;
var statearr_5102_5170 = state_5052__$1;
(statearr_5102_5170[(2)] = null);

(statearr_5102_5170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (17))){
var state_5052__$1 = state_5052;
var statearr_5103_5171 = state_5052__$1;
(statearr_5103_5171[(2)] = null);

(statearr_5103_5171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (3))){
var inst_5050 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5052__$1,inst_5050);
} else {
if((state_val_5053 === (12))){
var inst_4979 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5104_5172 = state_5052__$1;
(statearr_5104_5172[(2)] = inst_4979);

(statearr_5104_5172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (2))){
var state_5052__$1 = state_5052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5052__$1,(4),ch);
} else {
if((state_val_5053 === (23))){
var state_5052__$1 = state_5052;
var statearr_5105_5173 = state_5052__$1;
(statearr_5105_5173[(2)] = null);

(statearr_5105_5173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (35))){
var inst_5034 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5106_5174 = state_5052__$1;
(statearr_5106_5174[(2)] = inst_5034);

(statearr_5106_5174[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (19))){
var inst_4953 = (state_5052[(7)]);
var inst_4957 = cljs.core.chunk_first.call(null,inst_4953);
var inst_4958 = cljs.core.chunk_rest.call(null,inst_4953);
var inst_4959 = cljs.core.count.call(null,inst_4957);
var inst_4933 = inst_4958;
var inst_4934 = inst_4957;
var inst_4935 = inst_4959;
var inst_4936 = (0);
var state_5052__$1 = (function (){var statearr_5107 = state_5052;
(statearr_5107[(14)] = inst_4934);

(statearr_5107[(15)] = inst_4935);

(statearr_5107[(16)] = inst_4936);

(statearr_5107[(17)] = inst_4933);

return statearr_5107;
})();
var statearr_5108_5175 = state_5052__$1;
(statearr_5108_5175[(2)] = null);

(statearr_5108_5175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (11))){
var inst_4953 = (state_5052[(7)]);
var inst_4933 = (state_5052[(17)]);
var inst_4953__$1 = cljs.core.seq.call(null,inst_4933);
var state_5052__$1 = (function (){var statearr_5109 = state_5052;
(statearr_5109[(7)] = inst_4953__$1);

return statearr_5109;
})();
if(inst_4953__$1){
var statearr_5110_5176 = state_5052__$1;
(statearr_5110_5176[(1)] = (16));

} else {
var statearr_5111_5177 = state_5052__$1;
(statearr_5111_5177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (9))){
var inst_4981 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5112_5178 = state_5052__$1;
(statearr_5112_5178[(2)] = inst_4981);

(statearr_5112_5178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (5))){
var inst_4931 = cljs.core.deref.call(null,cs);
var inst_4932 = cljs.core.seq.call(null,inst_4931);
var inst_4933 = inst_4932;
var inst_4934 = null;
var inst_4935 = (0);
var inst_4936 = (0);
var state_5052__$1 = (function (){var statearr_5113 = state_5052;
(statearr_5113[(14)] = inst_4934);

(statearr_5113[(15)] = inst_4935);

(statearr_5113[(16)] = inst_4936);

(statearr_5113[(17)] = inst_4933);

return statearr_5113;
})();
var statearr_5114_5179 = state_5052__$1;
(statearr_5114_5179[(2)] = null);

(statearr_5114_5179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (14))){
var state_5052__$1 = state_5052;
var statearr_5115_5180 = state_5052__$1;
(statearr_5115_5180[(2)] = null);

(statearr_5115_5180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (45))){
var inst_5042 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5116_5181 = state_5052__$1;
(statearr_5116_5181[(2)] = inst_5042);

(statearr_5116_5181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (26))){
var inst_4984 = (state_5052[(29)]);
var inst_5038 = (state_5052[(2)]);
var inst_5039 = cljs.core.seq.call(null,inst_4984);
var state_5052__$1 = (function (){var statearr_5117 = state_5052;
(statearr_5117[(31)] = inst_5038);

return statearr_5117;
})();
if(inst_5039){
var statearr_5118_5182 = state_5052__$1;
(statearr_5118_5182[(1)] = (42));

} else {
var statearr_5119_5183 = state_5052__$1;
(statearr_5119_5183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (16))){
var inst_4953 = (state_5052[(7)]);
var inst_4955 = cljs.core.chunked_seq_QMARK_.call(null,inst_4953);
var state_5052__$1 = state_5052;
if(inst_4955){
var statearr_5120_5184 = state_5052__$1;
(statearr_5120_5184[(1)] = (19));

} else {
var statearr_5121_5185 = state_5052__$1;
(statearr_5121_5185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (38))){
var inst_5031 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5122_5186 = state_5052__$1;
(statearr_5122_5186[(2)] = inst_5031);

(statearr_5122_5186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (30))){
var state_5052__$1 = state_5052;
var statearr_5123_5187 = state_5052__$1;
(statearr_5123_5187[(2)] = null);

(statearr_5123_5187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (10))){
var inst_4934 = (state_5052[(14)]);
var inst_4936 = (state_5052[(16)]);
var inst_4942 = cljs.core._nth.call(null,inst_4934,inst_4936);
var inst_4943 = cljs.core.nth.call(null,inst_4942,(0),null);
var inst_4944 = cljs.core.nth.call(null,inst_4942,(1),null);
var state_5052__$1 = (function (){var statearr_5124 = state_5052;
(statearr_5124[(26)] = inst_4943);

return statearr_5124;
})();
if(cljs.core.truth_(inst_4944)){
var statearr_5125_5188 = state_5052__$1;
(statearr_5125_5188[(1)] = (13));

} else {
var statearr_5126_5189 = state_5052__$1;
(statearr_5126_5189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (18))){
var inst_4977 = (state_5052[(2)]);
var state_5052__$1 = state_5052;
var statearr_5127_5190 = state_5052__$1;
(statearr_5127_5190[(2)] = inst_4977);

(statearr_5127_5190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (42))){
var state_5052__$1 = state_5052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5052__$1,(45),dchan);
} else {
if((state_val_5053 === (37))){
var inst_4924 = (state_5052[(10)]);
var inst_5020 = (state_5052[(23)]);
var inst_5011 = (state_5052[(25)]);
var inst_5020__$1 = cljs.core.first.call(null,inst_5011);
var inst_5021 = cljs.core.async.put_BANG_.call(null,inst_5020__$1,inst_4924,done);
var state_5052__$1 = (function (){var statearr_5128 = state_5052;
(statearr_5128[(23)] = inst_5020__$1);

return statearr_5128;
})();
if(cljs.core.truth_(inst_5021)){
var statearr_5129_5191 = state_5052__$1;
(statearr_5129_5191[(1)] = (39));

} else {
var statearr_5130_5192 = state_5052__$1;
(statearr_5130_5192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5053 === (8))){
var inst_4935 = (state_5052[(15)]);
var inst_4936 = (state_5052[(16)]);
var inst_4938 = (inst_4936 < inst_4935);
var inst_4939 = inst_4938;
var state_5052__$1 = state_5052;
if(cljs.core.truth_(inst_4939)){
var statearr_5131_5193 = state_5052__$1;
(statearr_5131_5193[(1)] = (10));

} else {
var statearr_5132_5194 = state_5052__$1;
(statearr_5132_5194[(1)] = (11));

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
});})(c__1320__auto___5140,cs,m,dchan,dctr,done))
;
return ((function (switch__1255__auto__,c__1320__auto___5140,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1256__auto__ = null;
var cljs$core$async$mult_$_state_machine__1256__auto____0 = (function (){
var statearr_5136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5136[(0)] = cljs$core$async$mult_$_state_machine__1256__auto__);

(statearr_5136[(1)] = (1));

return statearr_5136;
});
var cljs$core$async$mult_$_state_machine__1256__auto____1 = (function (state_5052){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5137){if((e5137 instanceof Object)){
var ex__1259__auto__ = e5137;
var statearr_5138_5195 = state_5052;
(statearr_5138_5195[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5196 = state_5052;
state_5052 = G__5196;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1256__auto__ = function(state_5052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1256__auto____1.call(this,state_5052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1256__auto____0;
cljs$core$async$mult_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1256__auto____1;
return cljs$core$async$mult_$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___5140,cs,m,dchan,dctr,done))
})();
var state__1322__auto__ = (function (){var statearr_5139 = f__1321__auto__.call(null);
(statearr_5139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___5140);

return statearr_5139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___5140,cs,m,dchan,dctr,done))
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
var args5197 = [];
var len__3300__auto___5200 = arguments.length;
var i__3301__auto___5201 = (0);
while(true){
if((i__3301__auto___5201 < len__3300__auto___5200)){
args5197.push((arguments[i__3301__auto___5201]));

var G__5202 = (i__3301__auto___5201 + (1));
i__3301__auto___5201 = G__5202;
continue;
} else {
}
break;
}

var G__5199 = args5197.length;
switch (G__5199) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5197.length)].join('')));

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
var len__3300__auto___5216 = arguments.length;
var i__3301__auto___5217 = (0);
while(true){
if((i__3301__auto___5217 < len__3300__auto___5216)){
args__3303__auto__.push((arguments[i__3301__auto___5217]));

var G__5218 = (i__3301__auto___5217 + (1));
i__3301__auto___5217 = G__5218;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((3) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5210){
var map__5211 = p__5210;
var map__5211__$1 = ((((!((map__5211 == null)))?((((map__5211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5211):map__5211);
var opts = map__5211__$1;
var statearr_5213_5219 = state;
(statearr_5213_5219[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__5211,map__5211__$1,opts){
return (function (val){
var statearr_5214_5220 = state;
(statearr_5214_5220[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5211,map__5211__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_5215_5221 = state;
(statearr_5215_5221[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5206){
var G__5207 = cljs.core.first.call(null,seq5206);
var seq5206__$1 = cljs.core.next.call(null,seq5206);
var G__5208 = cljs.core.first.call(null,seq5206__$1);
var seq5206__$2 = cljs.core.next.call(null,seq5206__$1);
var G__5209 = cljs.core.first.call(null,seq5206__$2);
var seq5206__$3 = cljs.core.next.call(null,seq5206__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5207,G__5208,G__5209,seq5206__$3);
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
if(typeof cljs.core.async.t5385 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5385 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5386){
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
this.meta5386 = meta5386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5387,meta5386__$1){
var self__ = this;
var _5387__$1 = this;
return (new cljs.core.async.t5385(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5386__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5387){
var self__ = this;
var _5387__$1 = this;
return self__.meta5386;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t5385.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5386","meta5386",143015951,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5385.cljs$lang$type = true;

cljs.core.async.t5385.cljs$lang$ctorStr = "cljs.core.async/t5385";

cljs.core.async.t5385.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5385");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t5385 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t5385(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5386){
return (new cljs.core.async.t5385(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5386));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t5385(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1320__auto___5548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5485){
var state_val_5486 = (state_5485[(1)]);
if((state_val_5486 === (7))){
var inst_5403 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
var statearr_5487_5549 = state_5485__$1;
(statearr_5487_5549[(2)] = inst_5403);

(statearr_5487_5549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (20))){
var inst_5415 = (state_5485[(7)]);
var state_5485__$1 = state_5485;
var statearr_5488_5550 = state_5485__$1;
(statearr_5488_5550[(2)] = inst_5415);

(statearr_5488_5550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (27))){
var state_5485__$1 = state_5485;
var statearr_5489_5551 = state_5485__$1;
(statearr_5489_5551[(2)] = null);

(statearr_5489_5551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (1))){
var inst_5391 = (state_5485[(8)]);
var inst_5391__$1 = calc_state.call(null);
var inst_5393 = (inst_5391__$1 == null);
var inst_5394 = cljs.core.not.call(null,inst_5393);
var state_5485__$1 = (function (){var statearr_5490 = state_5485;
(statearr_5490[(8)] = inst_5391__$1);

return statearr_5490;
})();
if(inst_5394){
var statearr_5491_5552 = state_5485__$1;
(statearr_5491_5552[(1)] = (2));

} else {
var statearr_5492_5553 = state_5485__$1;
(statearr_5492_5553[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (24))){
var inst_5445 = (state_5485[(9)]);
var inst_5438 = (state_5485[(10)]);
var inst_5459 = (state_5485[(11)]);
var inst_5459__$1 = inst_5438.call(null,inst_5445);
var state_5485__$1 = (function (){var statearr_5493 = state_5485;
(statearr_5493[(11)] = inst_5459__$1);

return statearr_5493;
})();
if(cljs.core.truth_(inst_5459__$1)){
var statearr_5494_5554 = state_5485__$1;
(statearr_5494_5554[(1)] = (29));

} else {
var statearr_5495_5555 = state_5485__$1;
(statearr_5495_5555[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (4))){
var inst_5406 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5406)){
var statearr_5496_5556 = state_5485__$1;
(statearr_5496_5556[(1)] = (8));

} else {
var statearr_5497_5557 = state_5485__$1;
(statearr_5497_5557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (15))){
var inst_5432 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5432)){
var statearr_5498_5558 = state_5485__$1;
(statearr_5498_5558[(1)] = (19));

} else {
var statearr_5499_5559 = state_5485__$1;
(statearr_5499_5559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (21))){
var inst_5437 = (state_5485[(12)]);
var inst_5437__$1 = (state_5485[(2)]);
var inst_5438 = cljs.core.get.call(null,inst_5437__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5439 = cljs.core.get.call(null,inst_5437__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5440 = cljs.core.get.call(null,inst_5437__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5485__$1 = (function (){var statearr_5500 = state_5485;
(statearr_5500[(13)] = inst_5439);

(statearr_5500[(10)] = inst_5438);

(statearr_5500[(12)] = inst_5437__$1);

return statearr_5500;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5485__$1,(22),inst_5440);
} else {
if((state_val_5486 === (31))){
var inst_5467 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5467)){
var statearr_5501_5560 = state_5485__$1;
(statearr_5501_5560[(1)] = (32));

} else {
var statearr_5502_5561 = state_5485__$1;
(statearr_5502_5561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (32))){
var inst_5444 = (state_5485[(14)]);
var state_5485__$1 = state_5485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5485__$1,(35),out,inst_5444);
} else {
if((state_val_5486 === (33))){
var inst_5437 = (state_5485[(12)]);
var inst_5415 = inst_5437;
var state_5485__$1 = (function (){var statearr_5503 = state_5485;
(statearr_5503[(7)] = inst_5415);

return statearr_5503;
})();
var statearr_5504_5562 = state_5485__$1;
(statearr_5504_5562[(2)] = null);

(statearr_5504_5562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (13))){
var inst_5415 = (state_5485[(7)]);
var inst_5422 = inst_5415.cljs$lang$protocol_mask$partition0$;
var inst_5423 = (inst_5422 & (64));
var inst_5424 = inst_5415.cljs$core$ISeq$;
var inst_5425 = (inst_5423) || (inst_5424);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5425)){
var statearr_5505_5563 = state_5485__$1;
(statearr_5505_5563[(1)] = (16));

} else {
var statearr_5506_5564 = state_5485__$1;
(statearr_5506_5564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (22))){
var inst_5444 = (state_5485[(14)]);
var inst_5445 = (state_5485[(9)]);
var inst_5443 = (state_5485[(2)]);
var inst_5444__$1 = cljs.core.nth.call(null,inst_5443,(0),null);
var inst_5445__$1 = cljs.core.nth.call(null,inst_5443,(1),null);
var inst_5446 = (inst_5444__$1 == null);
var inst_5447 = cljs.core._EQ_.call(null,inst_5445__$1,change);
var inst_5448 = (inst_5446) || (inst_5447);
var state_5485__$1 = (function (){var statearr_5507 = state_5485;
(statearr_5507[(14)] = inst_5444__$1);

(statearr_5507[(9)] = inst_5445__$1);

return statearr_5507;
})();
if(cljs.core.truth_(inst_5448)){
var statearr_5508_5565 = state_5485__$1;
(statearr_5508_5565[(1)] = (23));

} else {
var statearr_5509_5566 = state_5485__$1;
(statearr_5509_5566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (36))){
var inst_5437 = (state_5485[(12)]);
var inst_5415 = inst_5437;
var state_5485__$1 = (function (){var statearr_5510 = state_5485;
(statearr_5510[(7)] = inst_5415);

return statearr_5510;
})();
var statearr_5511_5567 = state_5485__$1;
(statearr_5511_5567[(2)] = null);

(statearr_5511_5567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (29))){
var inst_5459 = (state_5485[(11)]);
var state_5485__$1 = state_5485;
var statearr_5512_5568 = state_5485__$1;
(statearr_5512_5568[(2)] = inst_5459);

(statearr_5512_5568[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (6))){
var state_5485__$1 = state_5485;
var statearr_5513_5569 = state_5485__$1;
(statearr_5513_5569[(2)] = false);

(statearr_5513_5569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (28))){
var inst_5455 = (state_5485[(2)]);
var inst_5456 = calc_state.call(null);
var inst_5415 = inst_5456;
var state_5485__$1 = (function (){var statearr_5514 = state_5485;
(statearr_5514[(7)] = inst_5415);

(statearr_5514[(15)] = inst_5455);

return statearr_5514;
})();
var statearr_5515_5570 = state_5485__$1;
(statearr_5515_5570[(2)] = null);

(statearr_5515_5570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (25))){
var inst_5481 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
var statearr_5516_5571 = state_5485__$1;
(statearr_5516_5571[(2)] = inst_5481);

(statearr_5516_5571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (34))){
var inst_5479 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
var statearr_5517_5572 = state_5485__$1;
(statearr_5517_5572[(2)] = inst_5479);

(statearr_5517_5572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (17))){
var state_5485__$1 = state_5485;
var statearr_5518_5573 = state_5485__$1;
(statearr_5518_5573[(2)] = false);

(statearr_5518_5573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (3))){
var state_5485__$1 = state_5485;
var statearr_5519_5574 = state_5485__$1;
(statearr_5519_5574[(2)] = false);

(statearr_5519_5574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (12))){
var inst_5483 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5485__$1,inst_5483);
} else {
if((state_val_5486 === (2))){
var inst_5391 = (state_5485[(8)]);
var inst_5396 = inst_5391.cljs$lang$protocol_mask$partition0$;
var inst_5397 = (inst_5396 & (64));
var inst_5398 = inst_5391.cljs$core$ISeq$;
var inst_5399 = (inst_5397) || (inst_5398);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5399)){
var statearr_5520_5575 = state_5485__$1;
(statearr_5520_5575[(1)] = (5));

} else {
var statearr_5521_5576 = state_5485__$1;
(statearr_5521_5576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (23))){
var inst_5444 = (state_5485[(14)]);
var inst_5450 = (inst_5444 == null);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5450)){
var statearr_5522_5577 = state_5485__$1;
(statearr_5522_5577[(1)] = (26));

} else {
var statearr_5523_5578 = state_5485__$1;
(statearr_5523_5578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (35))){
var inst_5470 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
if(cljs.core.truth_(inst_5470)){
var statearr_5524_5579 = state_5485__$1;
(statearr_5524_5579[(1)] = (36));

} else {
var statearr_5525_5580 = state_5485__$1;
(statearr_5525_5580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (19))){
var inst_5415 = (state_5485[(7)]);
var inst_5434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5415);
var state_5485__$1 = state_5485;
var statearr_5526_5581 = state_5485__$1;
(statearr_5526_5581[(2)] = inst_5434);

(statearr_5526_5581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (11))){
var inst_5415 = (state_5485[(7)]);
var inst_5419 = (inst_5415 == null);
var inst_5420 = cljs.core.not.call(null,inst_5419);
var state_5485__$1 = state_5485;
if(inst_5420){
var statearr_5527_5582 = state_5485__$1;
(statearr_5527_5582[(1)] = (13));

} else {
var statearr_5528_5583 = state_5485__$1;
(statearr_5528_5583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (9))){
var inst_5391 = (state_5485[(8)]);
var state_5485__$1 = state_5485;
var statearr_5529_5584 = state_5485__$1;
(statearr_5529_5584[(2)] = inst_5391);

(statearr_5529_5584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (5))){
var state_5485__$1 = state_5485;
var statearr_5530_5585 = state_5485__$1;
(statearr_5530_5585[(2)] = true);

(statearr_5530_5585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (14))){
var state_5485__$1 = state_5485;
var statearr_5531_5586 = state_5485__$1;
(statearr_5531_5586[(2)] = false);

(statearr_5531_5586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (26))){
var inst_5445 = (state_5485[(9)]);
var inst_5452 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5445);
var state_5485__$1 = state_5485;
var statearr_5532_5587 = state_5485__$1;
(statearr_5532_5587[(2)] = inst_5452);

(statearr_5532_5587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (16))){
var state_5485__$1 = state_5485;
var statearr_5533_5588 = state_5485__$1;
(statearr_5533_5588[(2)] = true);

(statearr_5533_5588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (38))){
var inst_5475 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
var statearr_5534_5589 = state_5485__$1;
(statearr_5534_5589[(2)] = inst_5475);

(statearr_5534_5589[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (30))){
var inst_5445 = (state_5485[(9)]);
var inst_5439 = (state_5485[(13)]);
var inst_5438 = (state_5485[(10)]);
var inst_5462 = cljs.core.empty_QMARK_.call(null,inst_5438);
var inst_5463 = inst_5439.call(null,inst_5445);
var inst_5464 = cljs.core.not.call(null,inst_5463);
var inst_5465 = (inst_5462) && (inst_5464);
var state_5485__$1 = state_5485;
var statearr_5535_5590 = state_5485__$1;
(statearr_5535_5590[(2)] = inst_5465);

(statearr_5535_5590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (10))){
var inst_5391 = (state_5485[(8)]);
var inst_5411 = (state_5485[(2)]);
var inst_5412 = cljs.core.get.call(null,inst_5411,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5413 = cljs.core.get.call(null,inst_5411,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5414 = cljs.core.get.call(null,inst_5411,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5415 = inst_5391;
var state_5485__$1 = (function (){var statearr_5536 = state_5485;
(statearr_5536[(16)] = inst_5413);

(statearr_5536[(7)] = inst_5415);

(statearr_5536[(17)] = inst_5412);

(statearr_5536[(18)] = inst_5414);

return statearr_5536;
})();
var statearr_5537_5591 = state_5485__$1;
(statearr_5537_5591[(2)] = null);

(statearr_5537_5591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (18))){
var inst_5429 = (state_5485[(2)]);
var state_5485__$1 = state_5485;
var statearr_5538_5592 = state_5485__$1;
(statearr_5538_5592[(2)] = inst_5429);

(statearr_5538_5592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (37))){
var state_5485__$1 = state_5485;
var statearr_5539_5593 = state_5485__$1;
(statearr_5539_5593[(2)] = null);

(statearr_5539_5593[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5486 === (8))){
var inst_5391 = (state_5485[(8)]);
var inst_5408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5391);
var state_5485__$1 = state_5485;
var statearr_5540_5594 = state_5485__$1;
(statearr_5540_5594[(2)] = inst_5408);

(statearr_5540_5594[(1)] = (10));


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
});})(c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1255__auto__,c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1256__auto__ = null;
var cljs$core$async$mix_$_state_machine__1256__auto____0 = (function (){
var statearr_5544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5544[(0)] = cljs$core$async$mix_$_state_machine__1256__auto__);

(statearr_5544[(1)] = (1));

return statearr_5544;
});
var cljs$core$async$mix_$_state_machine__1256__auto____1 = (function (state_5485){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5545){if((e5545 instanceof Object)){
var ex__1259__auto__ = e5545;
var statearr_5546_5595 = state_5485;
(statearr_5546_5595[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5596 = state_5485;
state_5485 = G__5596;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1256__auto__ = function(state_5485){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1256__auto____1.call(this,state_5485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1256__auto____0;
cljs$core$async$mix_$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1256__auto____1;
return cljs$core$async$mix_$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1322__auto__ = (function (){var statearr_5547 = f__1321__auto__.call(null);
(statearr_5547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___5548);

return statearr_5547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___5548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args5599 = [];
var len__3300__auto___5602 = arguments.length;
var i__3301__auto___5603 = (0);
while(true){
if((i__3301__auto___5603 < len__3300__auto___5602)){
args5599.push((arguments[i__3301__auto___5603]));

var G__5604 = (i__3301__auto___5603 + (1));
i__3301__auto___5603 = G__5604;
continue;
} else {
}
break;
}

var G__5601 = args5599.length;
switch (G__5601) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5599.length)].join('')));

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
var args5607 = [];
var len__3300__auto___5732 = arguments.length;
var i__3301__auto___5733 = (0);
while(true){
if((i__3301__auto___5733 < len__3300__auto___5732)){
args5607.push((arguments[i__3301__auto___5733]));

var G__5734 = (i__3301__auto___5733 + (1));
i__3301__auto___5733 = G__5734;
continue;
} else {
}
break;
}

var G__5609 = args5607.length;
switch (G__5609) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5607.length)].join('')));

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
return (function (p1__5606_SHARP_){
if(cljs.core.truth_(p1__5606_SHARP_.call(null,topic))){
return p1__5606_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5606_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2789__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t5610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5610 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5611){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5611 = meta5611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5612,meta5611__$1){
var self__ = this;
var _5612__$1 = this;
return (new cljs.core.async.t5610(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5611__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t5610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5612){
var self__ = this;
var _5612__$1 = this;
return self__.meta5611;
});})(mults,ensure_mult))
;

cljs.core.async.t5610.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t5610.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t5610.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t5610.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t5610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t5610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t5610.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5611","meta5611",-924653182,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t5610.cljs$lang$type = true;

cljs.core.async.t5610.cljs$lang$ctorStr = "cljs.core.async/t5610";

cljs.core.async.t5610.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5610");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t5610 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t5610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5611){
return (new cljs.core.async.t5610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5611));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t5610(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1320__auto___5736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___5736,mults,ensure_mult,p){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___5736,mults,ensure_mult,p){
return (function (state_5684){
var state_val_5685 = (state_5684[(1)]);
if((state_val_5685 === (7))){
var inst_5680 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5686_5737 = state_5684__$1;
(statearr_5686_5737[(2)] = inst_5680);

(statearr_5686_5737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (20))){
var state_5684__$1 = state_5684;
var statearr_5687_5738 = state_5684__$1;
(statearr_5687_5738[(2)] = null);

(statearr_5687_5738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (1))){
var state_5684__$1 = state_5684;
var statearr_5688_5739 = state_5684__$1;
(statearr_5688_5739[(2)] = null);

(statearr_5688_5739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (24))){
var inst_5663 = (state_5684[(7)]);
var inst_5672 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5663);
var state_5684__$1 = state_5684;
var statearr_5689_5740 = state_5684__$1;
(statearr_5689_5740[(2)] = inst_5672);

(statearr_5689_5740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (4))){
var inst_5615 = (state_5684[(8)]);
var inst_5615__$1 = (state_5684[(2)]);
var inst_5616 = (inst_5615__$1 == null);
var state_5684__$1 = (function (){var statearr_5690 = state_5684;
(statearr_5690[(8)] = inst_5615__$1);

return statearr_5690;
})();
if(cljs.core.truth_(inst_5616)){
var statearr_5691_5741 = state_5684__$1;
(statearr_5691_5741[(1)] = (5));

} else {
var statearr_5692_5742 = state_5684__$1;
(statearr_5692_5742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (15))){
var inst_5657 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5693_5743 = state_5684__$1;
(statearr_5693_5743[(2)] = inst_5657);

(statearr_5693_5743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (21))){
var inst_5677 = (state_5684[(2)]);
var state_5684__$1 = (function (){var statearr_5694 = state_5684;
(statearr_5694[(9)] = inst_5677);

return statearr_5694;
})();
var statearr_5695_5744 = state_5684__$1;
(statearr_5695_5744[(2)] = null);

(statearr_5695_5744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (13))){
var inst_5639 = (state_5684[(10)]);
var inst_5641 = cljs.core.chunked_seq_QMARK_.call(null,inst_5639);
var state_5684__$1 = state_5684;
if(inst_5641){
var statearr_5696_5745 = state_5684__$1;
(statearr_5696_5745[(1)] = (16));

} else {
var statearr_5697_5746 = state_5684__$1;
(statearr_5697_5746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (22))){
var inst_5669 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
if(cljs.core.truth_(inst_5669)){
var statearr_5698_5747 = state_5684__$1;
(statearr_5698_5747[(1)] = (23));

} else {
var statearr_5699_5748 = state_5684__$1;
(statearr_5699_5748[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (6))){
var inst_5615 = (state_5684[(8)]);
var inst_5665 = (state_5684[(11)]);
var inst_5663 = (state_5684[(7)]);
var inst_5663__$1 = topic_fn.call(null,inst_5615);
var inst_5664 = cljs.core.deref.call(null,mults);
var inst_5665__$1 = cljs.core.get.call(null,inst_5664,inst_5663__$1);
var state_5684__$1 = (function (){var statearr_5700 = state_5684;
(statearr_5700[(11)] = inst_5665__$1);

(statearr_5700[(7)] = inst_5663__$1);

return statearr_5700;
})();
if(cljs.core.truth_(inst_5665__$1)){
var statearr_5701_5749 = state_5684__$1;
(statearr_5701_5749[(1)] = (19));

} else {
var statearr_5702_5750 = state_5684__$1;
(statearr_5702_5750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (25))){
var inst_5674 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5703_5751 = state_5684__$1;
(statearr_5703_5751[(2)] = inst_5674);

(statearr_5703_5751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (17))){
var inst_5639 = (state_5684[(10)]);
var inst_5648 = cljs.core.first.call(null,inst_5639);
var inst_5649 = cljs.core.async.muxch_STAR_.call(null,inst_5648);
var inst_5650 = cljs.core.async.close_BANG_.call(null,inst_5649);
var inst_5651 = cljs.core.next.call(null,inst_5639);
var inst_5625 = inst_5651;
var inst_5626 = null;
var inst_5627 = (0);
var inst_5628 = (0);
var state_5684__$1 = (function (){var statearr_5704 = state_5684;
(statearr_5704[(12)] = inst_5650);

(statearr_5704[(13)] = inst_5626);

(statearr_5704[(14)] = inst_5627);

(statearr_5704[(15)] = inst_5625);

(statearr_5704[(16)] = inst_5628);

return statearr_5704;
})();
var statearr_5705_5752 = state_5684__$1;
(statearr_5705_5752[(2)] = null);

(statearr_5705_5752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (3))){
var inst_5682 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5684__$1,inst_5682);
} else {
if((state_val_5685 === (12))){
var inst_5659 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5706_5753 = state_5684__$1;
(statearr_5706_5753[(2)] = inst_5659);

(statearr_5706_5753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (2))){
var state_5684__$1 = state_5684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5684__$1,(4),ch);
} else {
if((state_val_5685 === (23))){
var state_5684__$1 = state_5684;
var statearr_5707_5754 = state_5684__$1;
(statearr_5707_5754[(2)] = null);

(statearr_5707_5754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (19))){
var inst_5615 = (state_5684[(8)]);
var inst_5665 = (state_5684[(11)]);
var inst_5667 = cljs.core.async.muxch_STAR_.call(null,inst_5665);
var state_5684__$1 = state_5684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5684__$1,(22),inst_5667,inst_5615);
} else {
if((state_val_5685 === (11))){
var inst_5625 = (state_5684[(15)]);
var inst_5639 = (state_5684[(10)]);
var inst_5639__$1 = cljs.core.seq.call(null,inst_5625);
var state_5684__$1 = (function (){var statearr_5708 = state_5684;
(statearr_5708[(10)] = inst_5639__$1);

return statearr_5708;
})();
if(inst_5639__$1){
var statearr_5709_5755 = state_5684__$1;
(statearr_5709_5755[(1)] = (13));

} else {
var statearr_5710_5756 = state_5684__$1;
(statearr_5710_5756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (9))){
var inst_5661 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5711_5757 = state_5684__$1;
(statearr_5711_5757[(2)] = inst_5661);

(statearr_5711_5757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (5))){
var inst_5622 = cljs.core.deref.call(null,mults);
var inst_5623 = cljs.core.vals.call(null,inst_5622);
var inst_5624 = cljs.core.seq.call(null,inst_5623);
var inst_5625 = inst_5624;
var inst_5626 = null;
var inst_5627 = (0);
var inst_5628 = (0);
var state_5684__$1 = (function (){var statearr_5712 = state_5684;
(statearr_5712[(13)] = inst_5626);

(statearr_5712[(14)] = inst_5627);

(statearr_5712[(15)] = inst_5625);

(statearr_5712[(16)] = inst_5628);

return statearr_5712;
})();
var statearr_5713_5758 = state_5684__$1;
(statearr_5713_5758[(2)] = null);

(statearr_5713_5758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (14))){
var state_5684__$1 = state_5684;
var statearr_5717_5759 = state_5684__$1;
(statearr_5717_5759[(2)] = null);

(statearr_5717_5759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (16))){
var inst_5639 = (state_5684[(10)]);
var inst_5643 = cljs.core.chunk_first.call(null,inst_5639);
var inst_5644 = cljs.core.chunk_rest.call(null,inst_5639);
var inst_5645 = cljs.core.count.call(null,inst_5643);
var inst_5625 = inst_5644;
var inst_5626 = inst_5643;
var inst_5627 = inst_5645;
var inst_5628 = (0);
var state_5684__$1 = (function (){var statearr_5718 = state_5684;
(statearr_5718[(13)] = inst_5626);

(statearr_5718[(14)] = inst_5627);

(statearr_5718[(15)] = inst_5625);

(statearr_5718[(16)] = inst_5628);

return statearr_5718;
})();
var statearr_5719_5760 = state_5684__$1;
(statearr_5719_5760[(2)] = null);

(statearr_5719_5760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (10))){
var inst_5626 = (state_5684[(13)]);
var inst_5627 = (state_5684[(14)]);
var inst_5625 = (state_5684[(15)]);
var inst_5628 = (state_5684[(16)]);
var inst_5633 = cljs.core._nth.call(null,inst_5626,inst_5628);
var inst_5634 = cljs.core.async.muxch_STAR_.call(null,inst_5633);
var inst_5635 = cljs.core.async.close_BANG_.call(null,inst_5634);
var inst_5636 = (inst_5628 + (1));
var tmp5714 = inst_5626;
var tmp5715 = inst_5627;
var tmp5716 = inst_5625;
var inst_5625__$1 = tmp5716;
var inst_5626__$1 = tmp5714;
var inst_5627__$1 = tmp5715;
var inst_5628__$1 = inst_5636;
var state_5684__$1 = (function (){var statearr_5720 = state_5684;
(statearr_5720[(13)] = inst_5626__$1);

(statearr_5720[(14)] = inst_5627__$1);

(statearr_5720[(15)] = inst_5625__$1);

(statearr_5720[(17)] = inst_5635);

(statearr_5720[(16)] = inst_5628__$1);

return statearr_5720;
})();
var statearr_5721_5761 = state_5684__$1;
(statearr_5721_5761[(2)] = null);

(statearr_5721_5761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (18))){
var inst_5654 = (state_5684[(2)]);
var state_5684__$1 = state_5684;
var statearr_5722_5762 = state_5684__$1;
(statearr_5722_5762[(2)] = inst_5654);

(statearr_5722_5762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5685 === (8))){
var inst_5627 = (state_5684[(14)]);
var inst_5628 = (state_5684[(16)]);
var inst_5630 = (inst_5628 < inst_5627);
var inst_5631 = inst_5630;
var state_5684__$1 = state_5684;
if(cljs.core.truth_(inst_5631)){
var statearr_5723_5763 = state_5684__$1;
(statearr_5723_5763[(1)] = (10));

} else {
var statearr_5724_5764 = state_5684__$1;
(statearr_5724_5764[(1)] = (11));

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
});})(c__1320__auto___5736,mults,ensure_mult,p))
;
return ((function (switch__1255__auto__,c__1320__auto___5736,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_5728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5728[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_5728[(1)] = (1));

return statearr_5728;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_5684){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5729){if((e5729 instanceof Object)){
var ex__1259__auto__ = e5729;
var statearr_5730_5765 = state_5684;
(statearr_5730_5765[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5766 = state_5684;
state_5684 = G__5766;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_5684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_5684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___5736,mults,ensure_mult,p))
})();
var state__1322__auto__ = (function (){var statearr_5731 = f__1321__auto__.call(null);
(statearr_5731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___5736);

return statearr_5731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___5736,mults,ensure_mult,p))
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
var args5767 = [];
var len__3300__auto___5770 = arguments.length;
var i__3301__auto___5771 = (0);
while(true){
if((i__3301__auto___5771 < len__3300__auto___5770)){
args5767.push((arguments[i__3301__auto___5771]));

var G__5772 = (i__3301__auto___5771 + (1));
i__3301__auto___5771 = G__5772;
continue;
} else {
}
break;
}

var G__5769 = args5767.length;
switch (G__5769) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5767.length)].join('')));

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
var args5774 = [];
var len__3300__auto___5777 = arguments.length;
var i__3301__auto___5778 = (0);
while(true){
if((i__3301__auto___5778 < len__3300__auto___5777)){
args5774.push((arguments[i__3301__auto___5778]));

var G__5779 = (i__3301__auto___5778 + (1));
i__3301__auto___5778 = G__5779;
continue;
} else {
}
break;
}

var G__5776 = args5774.length;
switch (G__5776) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5774.length)].join('')));

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
var args5781 = [];
var len__3300__auto___5852 = arguments.length;
var i__3301__auto___5853 = (0);
while(true){
if((i__3301__auto___5853 < len__3300__auto___5852)){
args5781.push((arguments[i__3301__auto___5853]));

var G__5854 = (i__3301__auto___5853 + (1));
i__3301__auto___5853 = G__5854;
continue;
} else {
}
break;
}

var G__5783 = args5781.length;
switch (G__5783) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5781.length)].join('')));

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
var c__1320__auto___5856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5822){
var state_val_5823 = (state_5822[(1)]);
if((state_val_5823 === (7))){
var state_5822__$1 = state_5822;
var statearr_5824_5857 = state_5822__$1;
(statearr_5824_5857[(2)] = null);

(statearr_5824_5857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (1))){
var state_5822__$1 = state_5822;
var statearr_5825_5858 = state_5822__$1;
(statearr_5825_5858[(2)] = null);

(statearr_5825_5858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (4))){
var inst_5786 = (state_5822[(7)]);
var inst_5788 = (inst_5786 < cnt);
var state_5822__$1 = state_5822;
if(cljs.core.truth_(inst_5788)){
var statearr_5826_5859 = state_5822__$1;
(statearr_5826_5859[(1)] = (6));

} else {
var statearr_5827_5860 = state_5822__$1;
(statearr_5827_5860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (15))){
var inst_5818 = (state_5822[(2)]);
var state_5822__$1 = state_5822;
var statearr_5828_5861 = state_5822__$1;
(statearr_5828_5861[(2)] = inst_5818);

(statearr_5828_5861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (13))){
var inst_5811 = cljs.core.async.close_BANG_.call(null,out);
var state_5822__$1 = state_5822;
var statearr_5829_5862 = state_5822__$1;
(statearr_5829_5862[(2)] = inst_5811);

(statearr_5829_5862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (6))){
var state_5822__$1 = state_5822;
var statearr_5830_5863 = state_5822__$1;
(statearr_5830_5863[(2)] = null);

(statearr_5830_5863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (3))){
var inst_5820 = (state_5822[(2)]);
var state_5822__$1 = state_5822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5822__$1,inst_5820);
} else {
if((state_val_5823 === (12))){
var inst_5808 = (state_5822[(8)]);
var inst_5808__$1 = (state_5822[(2)]);
var inst_5809 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5808__$1);
var state_5822__$1 = (function (){var statearr_5831 = state_5822;
(statearr_5831[(8)] = inst_5808__$1);

return statearr_5831;
})();
if(cljs.core.truth_(inst_5809)){
var statearr_5832_5864 = state_5822__$1;
(statearr_5832_5864[(1)] = (13));

} else {
var statearr_5833_5865 = state_5822__$1;
(statearr_5833_5865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (2))){
var inst_5785 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5786 = (0);
var state_5822__$1 = (function (){var statearr_5834 = state_5822;
(statearr_5834[(7)] = inst_5786);

(statearr_5834[(9)] = inst_5785);

return statearr_5834;
})();
var statearr_5835_5866 = state_5822__$1;
(statearr_5835_5866[(2)] = null);

(statearr_5835_5866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (11))){
var inst_5786 = (state_5822[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5822,(10),Object,null,(9));
var inst_5795 = chs__$1.call(null,inst_5786);
var inst_5796 = done.call(null,inst_5786);
var inst_5797 = cljs.core.async.take_BANG_.call(null,inst_5795,inst_5796);
var state_5822__$1 = state_5822;
var statearr_5836_5867 = state_5822__$1;
(statearr_5836_5867[(2)] = inst_5797);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (9))){
var inst_5786 = (state_5822[(7)]);
var inst_5799 = (state_5822[(2)]);
var inst_5800 = (inst_5786 + (1));
var inst_5786__$1 = inst_5800;
var state_5822__$1 = (function (){var statearr_5837 = state_5822;
(statearr_5837[(7)] = inst_5786__$1);

(statearr_5837[(10)] = inst_5799);

return statearr_5837;
})();
var statearr_5838_5868 = state_5822__$1;
(statearr_5838_5868[(2)] = null);

(statearr_5838_5868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (5))){
var inst_5806 = (state_5822[(2)]);
var state_5822__$1 = (function (){var statearr_5839 = state_5822;
(statearr_5839[(11)] = inst_5806);

return statearr_5839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5822__$1,(12),dchan);
} else {
if((state_val_5823 === (14))){
var inst_5808 = (state_5822[(8)]);
var inst_5813 = cljs.core.apply.call(null,f,inst_5808);
var state_5822__$1 = state_5822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5822__$1,(16),out,inst_5813);
} else {
if((state_val_5823 === (16))){
var inst_5815 = (state_5822[(2)]);
var state_5822__$1 = (function (){var statearr_5840 = state_5822;
(statearr_5840[(12)] = inst_5815);

return statearr_5840;
})();
var statearr_5841_5869 = state_5822__$1;
(statearr_5841_5869[(2)] = null);

(statearr_5841_5869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (10))){
var inst_5790 = (state_5822[(2)]);
var inst_5791 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5822__$1 = (function (){var statearr_5842 = state_5822;
(statearr_5842[(13)] = inst_5790);

return statearr_5842;
})();
var statearr_5843_5870 = state_5822__$1;
(statearr_5843_5870[(2)] = inst_5791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5823 === (8))){
var inst_5804 = (state_5822[(2)]);
var state_5822__$1 = state_5822;
var statearr_5844_5871 = state_5822__$1;
(statearr_5844_5871[(2)] = inst_5804);

(statearr_5844_5871[(1)] = (5));


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
});})(c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1255__auto__,c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_5848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5848[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_5848[(1)] = (1));

return statearr_5848;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_5822){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5849){if((e5849 instanceof Object)){
var ex__1259__auto__ = e5849;
var statearr_5850_5872 = state_5822;
(statearr_5850_5872[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5873 = state_5822;
state_5822 = G__5873;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_5822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_5822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1322__auto__ = (function (){var statearr_5851 = f__1321__auto__.call(null);
(statearr_5851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___5856);

return statearr_5851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___5856,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args5875 = [];
var len__3300__auto___5931 = arguments.length;
var i__3301__auto___5932 = (0);
while(true){
if((i__3301__auto___5932 < len__3300__auto___5931)){
args5875.push((arguments[i__3301__auto___5932]));

var G__5933 = (i__3301__auto___5932 + (1));
i__3301__auto___5932 = G__5933;
continue;
} else {
}
break;
}

var G__5877 = args5875.length;
switch (G__5877) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5875.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___5935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___5935,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___5935,out){
return (function (state_5907){
var state_val_5908 = (state_5907[(1)]);
if((state_val_5908 === (7))){
var inst_5887 = (state_5907[(7)]);
var inst_5886 = (state_5907[(8)]);
var inst_5886__$1 = (state_5907[(2)]);
var inst_5887__$1 = cljs.core.nth.call(null,inst_5886__$1,(0),null);
var inst_5888 = cljs.core.nth.call(null,inst_5886__$1,(1),null);
var inst_5889 = (inst_5887__$1 == null);
var state_5907__$1 = (function (){var statearr_5909 = state_5907;
(statearr_5909[(7)] = inst_5887__$1);

(statearr_5909[(9)] = inst_5888);

(statearr_5909[(8)] = inst_5886__$1);

return statearr_5909;
})();
if(cljs.core.truth_(inst_5889)){
var statearr_5910_5936 = state_5907__$1;
(statearr_5910_5936[(1)] = (8));

} else {
var statearr_5911_5937 = state_5907__$1;
(statearr_5911_5937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (1))){
var inst_5878 = cljs.core.vec.call(null,chs);
var inst_5879 = inst_5878;
var state_5907__$1 = (function (){var statearr_5912 = state_5907;
(statearr_5912[(10)] = inst_5879);

return statearr_5912;
})();
var statearr_5913_5938 = state_5907__$1;
(statearr_5913_5938[(2)] = null);

(statearr_5913_5938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (4))){
var inst_5879 = (state_5907[(10)]);
var state_5907__$1 = state_5907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5907__$1,(7),inst_5879);
} else {
if((state_val_5908 === (6))){
var inst_5903 = (state_5907[(2)]);
var state_5907__$1 = state_5907;
var statearr_5914_5939 = state_5907__$1;
(statearr_5914_5939[(2)] = inst_5903);

(statearr_5914_5939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (3))){
var inst_5905 = (state_5907[(2)]);
var state_5907__$1 = state_5907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5907__$1,inst_5905);
} else {
if((state_val_5908 === (2))){
var inst_5879 = (state_5907[(10)]);
var inst_5881 = cljs.core.count.call(null,inst_5879);
var inst_5882 = (inst_5881 > (0));
var state_5907__$1 = state_5907;
if(cljs.core.truth_(inst_5882)){
var statearr_5916_5940 = state_5907__$1;
(statearr_5916_5940[(1)] = (4));

} else {
var statearr_5917_5941 = state_5907__$1;
(statearr_5917_5941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (11))){
var inst_5879 = (state_5907[(10)]);
var inst_5896 = (state_5907[(2)]);
var tmp5915 = inst_5879;
var inst_5879__$1 = tmp5915;
var state_5907__$1 = (function (){var statearr_5918 = state_5907;
(statearr_5918[(10)] = inst_5879__$1);

(statearr_5918[(11)] = inst_5896);

return statearr_5918;
})();
var statearr_5919_5942 = state_5907__$1;
(statearr_5919_5942[(2)] = null);

(statearr_5919_5942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (9))){
var inst_5887 = (state_5907[(7)]);
var state_5907__$1 = state_5907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5907__$1,(11),out,inst_5887);
} else {
if((state_val_5908 === (5))){
var inst_5901 = cljs.core.async.close_BANG_.call(null,out);
var state_5907__$1 = state_5907;
var statearr_5920_5943 = state_5907__$1;
(statearr_5920_5943[(2)] = inst_5901);

(statearr_5920_5943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (10))){
var inst_5899 = (state_5907[(2)]);
var state_5907__$1 = state_5907;
var statearr_5921_5944 = state_5907__$1;
(statearr_5921_5944[(2)] = inst_5899);

(statearr_5921_5944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5908 === (8))){
var inst_5887 = (state_5907[(7)]);
var inst_5879 = (state_5907[(10)]);
var inst_5888 = (state_5907[(9)]);
var inst_5886 = (state_5907[(8)]);
var inst_5891 = (function (){var cs = inst_5879;
var vec__5884 = inst_5886;
var v = inst_5887;
var c = inst_5888;
return ((function (cs,vec__5884,v,c,inst_5887,inst_5879,inst_5888,inst_5886,state_val_5908,c__1320__auto___5935,out){
return (function (p1__5874_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5874_SHARP_);
});
;})(cs,vec__5884,v,c,inst_5887,inst_5879,inst_5888,inst_5886,state_val_5908,c__1320__auto___5935,out))
})();
var inst_5892 = cljs.core.filterv.call(null,inst_5891,inst_5879);
var inst_5879__$1 = inst_5892;
var state_5907__$1 = (function (){var statearr_5922 = state_5907;
(statearr_5922[(10)] = inst_5879__$1);

return statearr_5922;
})();
var statearr_5923_5945 = state_5907__$1;
(statearr_5923_5945[(2)] = null);

(statearr_5923_5945[(1)] = (2));


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
});})(c__1320__auto___5935,out))
;
return ((function (switch__1255__auto__,c__1320__auto___5935,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_5927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5927[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_5927[(1)] = (1));

return statearr_5927;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_5907){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5928){if((e5928 instanceof Object)){
var ex__1259__auto__ = e5928;
var statearr_5929_5946 = state_5907;
(statearr_5929_5946[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5947 = state_5907;
state_5907 = G__5947;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_5907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_5907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___5935,out))
})();
var state__1322__auto__ = (function (){var statearr_5930 = f__1321__auto__.call(null);
(statearr_5930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___5935);

return statearr_5930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___5935,out))
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
var args5948 = [];
var len__3300__auto___5997 = arguments.length;
var i__3301__auto___5998 = (0);
while(true){
if((i__3301__auto___5998 < len__3300__auto___5997)){
args5948.push((arguments[i__3301__auto___5998]));

var G__5999 = (i__3301__auto___5998 + (1));
i__3301__auto___5998 = G__5999;
continue;
} else {
}
break;
}

var G__5950 = args5948.length;
switch (G__5950) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5948.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___6001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___6001,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___6001,out){
return (function (state_5974){
var state_val_5975 = (state_5974[(1)]);
if((state_val_5975 === (7))){
var inst_5956 = (state_5974[(7)]);
var inst_5956__$1 = (state_5974[(2)]);
var inst_5957 = (inst_5956__$1 == null);
var inst_5958 = cljs.core.not.call(null,inst_5957);
var state_5974__$1 = (function (){var statearr_5976 = state_5974;
(statearr_5976[(7)] = inst_5956__$1);

return statearr_5976;
})();
if(inst_5958){
var statearr_5977_6002 = state_5974__$1;
(statearr_5977_6002[(1)] = (8));

} else {
var statearr_5978_6003 = state_5974__$1;
(statearr_5978_6003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (1))){
var inst_5951 = (0);
var state_5974__$1 = (function (){var statearr_5979 = state_5974;
(statearr_5979[(8)] = inst_5951);

return statearr_5979;
})();
var statearr_5980_6004 = state_5974__$1;
(statearr_5980_6004[(2)] = null);

(statearr_5980_6004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (4))){
var state_5974__$1 = state_5974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5974__$1,(7),ch);
} else {
if((state_val_5975 === (6))){
var inst_5969 = (state_5974[(2)]);
var state_5974__$1 = state_5974;
var statearr_5981_6005 = state_5974__$1;
(statearr_5981_6005[(2)] = inst_5969);

(statearr_5981_6005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (3))){
var inst_5971 = (state_5974[(2)]);
var inst_5972 = cljs.core.async.close_BANG_.call(null,out);
var state_5974__$1 = (function (){var statearr_5982 = state_5974;
(statearr_5982[(9)] = inst_5971);

return statearr_5982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5974__$1,inst_5972);
} else {
if((state_val_5975 === (2))){
var inst_5951 = (state_5974[(8)]);
var inst_5953 = (inst_5951 < n);
var state_5974__$1 = state_5974;
if(cljs.core.truth_(inst_5953)){
var statearr_5983_6006 = state_5974__$1;
(statearr_5983_6006[(1)] = (4));

} else {
var statearr_5984_6007 = state_5974__$1;
(statearr_5984_6007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (11))){
var inst_5951 = (state_5974[(8)]);
var inst_5961 = (state_5974[(2)]);
var inst_5962 = (inst_5951 + (1));
var inst_5951__$1 = inst_5962;
var state_5974__$1 = (function (){var statearr_5985 = state_5974;
(statearr_5985[(8)] = inst_5951__$1);

(statearr_5985[(10)] = inst_5961);

return statearr_5985;
})();
var statearr_5986_6008 = state_5974__$1;
(statearr_5986_6008[(2)] = null);

(statearr_5986_6008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (9))){
var state_5974__$1 = state_5974;
var statearr_5987_6009 = state_5974__$1;
(statearr_5987_6009[(2)] = null);

(statearr_5987_6009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (5))){
var state_5974__$1 = state_5974;
var statearr_5988_6010 = state_5974__$1;
(statearr_5988_6010[(2)] = null);

(statearr_5988_6010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (10))){
var inst_5966 = (state_5974[(2)]);
var state_5974__$1 = state_5974;
var statearr_5989_6011 = state_5974__$1;
(statearr_5989_6011[(2)] = inst_5966);

(statearr_5989_6011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5975 === (8))){
var inst_5956 = (state_5974[(7)]);
var state_5974__$1 = state_5974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5974__$1,(11),out,inst_5956);
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
});})(c__1320__auto___6001,out))
;
return ((function (switch__1255__auto__,c__1320__auto___6001,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_5993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5993[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_5993[(1)] = (1));

return statearr_5993;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_5974){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_5974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e5994){if((e5994 instanceof Object)){
var ex__1259__auto__ = e5994;
var statearr_5995_6012 = state_5974;
(statearr_5995_6012[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6013 = state_5974;
state_5974 = G__6013;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_5974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_5974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___6001,out))
})();
var state__1322__auto__ = (function (){var statearr_5996 = f__1321__auto__.call(null);
(statearr_5996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___6001);

return statearr_5996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___6001,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t6021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6021 = (function (map_LT_,f,ch,meta6022){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta6022 = meta6022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6023,meta6022__$1){
var self__ = this;
var _6023__$1 = this;
return (new cljs.core.async.t6021(self__.map_LT_,self__.f,self__.ch,meta6022__$1));
});

cljs.core.async.t6021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6023){
var self__ = this;
var _6023__$1 = this;
return self__.meta6022;
});

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t6024 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6024 = (function (map_LT_,f,ch,meta6022,_,fn1,meta6025){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta6022 = meta6022;
this._ = _;
this.fn1 = fn1;
this.meta6025 = meta6025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6026,meta6025__$1){
var self__ = this;
var _6026__$1 = this;
return (new cljs.core.async.t6024(self__.map_LT_,self__.f,self__.ch,self__.meta6022,self__._,self__.fn1,meta6025__$1));
});})(___$1))
;

cljs.core.async.t6024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6026){
var self__ = this;
var _6026__$1 = this;
return self__.meta6025;
});})(___$1))
;

cljs.core.async.t6024.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t6024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6014_SHARP_){
return f1.call(null,(((p1__6014_SHARP_ == null))?null:self__.f.call(null,p1__6014_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t6024.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6022","meta6022",-121527717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t6021","cljs.core.async/t6021",-20276882,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6025","meta6025",-2404436,null)], null);
});})(___$1))
;

cljs.core.async.t6024.cljs$lang$type = true;

cljs.core.async.t6024.cljs$lang$ctorStr = "cljs.core.async/t6024";

cljs.core.async.t6024.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6024");
});})(___$1))
;

cljs.core.async.__GT_t6024 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t6024(map_LT___$1,f__$1,ch__$1,meta6022__$1,___$2,fn1__$1,meta6025){
return (new cljs.core.async.t6024(map_LT___$1,f__$1,ch__$1,meta6022__$1,___$2,fn1__$1,meta6025));
});})(___$1))
;

}

return (new cljs.core.async.t6024(self__.map_LT_,self__.f,self__.ch,self__.meta6022,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t6021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6022","meta6022",-121527717,null)], null);
});

cljs.core.async.t6021.cljs$lang$type = true;

cljs.core.async.t6021.cljs$lang$ctorStr = "cljs.core.async/t6021";

cljs.core.async.t6021.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6021");
});

cljs.core.async.__GT_t6021 = (function cljs$core$async$map_LT__$___GT_t6021(map_LT___$1,f__$1,ch__$1,meta6022){
return (new cljs.core.async.t6021(map_LT___$1,f__$1,ch__$1,meta6022));
});

}

return (new cljs.core.async.t6021(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t6030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6030 = (function (map_GT_,f,ch,meta6031){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta6031 = meta6031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6032,meta6031__$1){
var self__ = this;
var _6032__$1 = this;
return (new cljs.core.async.t6030(self__.map_GT_,self__.f,self__.ch,meta6031__$1));
});

cljs.core.async.t6030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6032){
var self__ = this;
var _6032__$1 = this;
return self__.meta6031;
});

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t6030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6031","meta6031",-718106302,null)], null);
});

cljs.core.async.t6030.cljs$lang$type = true;

cljs.core.async.t6030.cljs$lang$ctorStr = "cljs.core.async/t6030";

cljs.core.async.t6030.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6030");
});

cljs.core.async.__GT_t6030 = (function cljs$core$async$map_GT__$___GT_t6030(map_GT___$1,f__$1,ch__$1,meta6031){
return (new cljs.core.async.t6030(map_GT___$1,f__$1,ch__$1,meta6031));
});

}

return (new cljs.core.async.t6030(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t6036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6036 = (function (filter_GT_,p,ch,meta6037){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta6037 = meta6037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6038,meta6037__$1){
var self__ = this;
var _6038__$1 = this;
return (new cljs.core.async.t6036(self__.filter_GT_,self__.p,self__.ch,meta6037__$1));
});

cljs.core.async.t6036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6038){
var self__ = this;
var _6038__$1 = this;
return self__.meta6037;
});

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t6036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6037","meta6037",634853230,null)], null);
});

cljs.core.async.t6036.cljs$lang$type = true;

cljs.core.async.t6036.cljs$lang$ctorStr = "cljs.core.async/t6036";

cljs.core.async.t6036.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6036");
});

cljs.core.async.__GT_t6036 = (function cljs$core$async$filter_GT__$___GT_t6036(filter_GT___$1,p__$1,ch__$1,meta6037){
return (new cljs.core.async.t6036(filter_GT___$1,p__$1,ch__$1,meta6037));
});

}

return (new cljs.core.async.t6036(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args6039 = [];
var len__3300__auto___6083 = arguments.length;
var i__3301__auto___6084 = (0);
while(true){
if((i__3301__auto___6084 < len__3300__auto___6083)){
args6039.push((arguments[i__3301__auto___6084]));

var G__6085 = (i__3301__auto___6084 + (1));
i__3301__auto___6084 = G__6085;
continue;
} else {
}
break;
}

var G__6041 = args6039.length;
switch (G__6041) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6039.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___6087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___6087,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___6087,out){
return (function (state_6062){
var state_val_6063 = (state_6062[(1)]);
if((state_val_6063 === (7))){
var inst_6058 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
var statearr_6064_6088 = state_6062__$1;
(statearr_6064_6088[(2)] = inst_6058);

(statearr_6064_6088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (1))){
var state_6062__$1 = state_6062;
var statearr_6065_6089 = state_6062__$1;
(statearr_6065_6089[(2)] = null);

(statearr_6065_6089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (4))){
var inst_6044 = (state_6062[(7)]);
var inst_6044__$1 = (state_6062[(2)]);
var inst_6045 = (inst_6044__$1 == null);
var state_6062__$1 = (function (){var statearr_6066 = state_6062;
(statearr_6066[(7)] = inst_6044__$1);

return statearr_6066;
})();
if(cljs.core.truth_(inst_6045)){
var statearr_6067_6090 = state_6062__$1;
(statearr_6067_6090[(1)] = (5));

} else {
var statearr_6068_6091 = state_6062__$1;
(statearr_6068_6091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (6))){
var inst_6044 = (state_6062[(7)]);
var inst_6049 = p.call(null,inst_6044);
var state_6062__$1 = state_6062;
if(cljs.core.truth_(inst_6049)){
var statearr_6069_6092 = state_6062__$1;
(statearr_6069_6092[(1)] = (8));

} else {
var statearr_6070_6093 = state_6062__$1;
(statearr_6070_6093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (3))){
var inst_6060 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6062__$1,inst_6060);
} else {
if((state_val_6063 === (2))){
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6062__$1,(4),ch);
} else {
if((state_val_6063 === (11))){
var inst_6052 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
var statearr_6071_6094 = state_6062__$1;
(statearr_6071_6094[(2)] = inst_6052);

(statearr_6071_6094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (9))){
var state_6062__$1 = state_6062;
var statearr_6072_6095 = state_6062__$1;
(statearr_6072_6095[(2)] = null);

(statearr_6072_6095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (5))){
var inst_6047 = cljs.core.async.close_BANG_.call(null,out);
var state_6062__$1 = state_6062;
var statearr_6073_6096 = state_6062__$1;
(statearr_6073_6096[(2)] = inst_6047);

(statearr_6073_6096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (10))){
var inst_6055 = (state_6062[(2)]);
var state_6062__$1 = (function (){var statearr_6074 = state_6062;
(statearr_6074[(8)] = inst_6055);

return statearr_6074;
})();
var statearr_6075_6097 = state_6062__$1;
(statearr_6075_6097[(2)] = null);

(statearr_6075_6097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (8))){
var inst_6044 = (state_6062[(7)]);
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6062__$1,(11),out,inst_6044);
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
});})(c__1320__auto___6087,out))
;
return ((function (switch__1255__auto__,c__1320__auto___6087,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_6079 = [null,null,null,null,null,null,null,null,null];
(statearr_6079[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_6079[(1)] = (1));

return statearr_6079;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_6062){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_6062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e6080){if((e6080 instanceof Object)){
var ex__1259__auto__ = e6080;
var statearr_6081_6098 = state_6062;
(statearr_6081_6098[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6099 = state_6062;
state_6062 = G__6099;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_6062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_6062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___6087,out))
})();
var state__1322__auto__ = (function (){var statearr_6082 = f__1321__auto__.call(null);
(statearr_6082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___6087);

return statearr_6082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___6087,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args6100 = [];
var len__3300__auto___6103 = arguments.length;
var i__3301__auto___6104 = (0);
while(true){
if((i__3301__auto___6104 < len__3300__auto___6103)){
args6100.push((arguments[i__3301__auto___6104]));

var G__6105 = (i__3301__auto___6104 + (1));
i__3301__auto___6104 = G__6105;
continue;
} else {
}
break;
}

var G__6102 = args6100.length;
switch (G__6102) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6100.length)].join('')));

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
var c__1320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto__){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto__){
return (function (state_6272){
var state_val_6273 = (state_6272[(1)]);
if((state_val_6273 === (7))){
var inst_6268 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
var statearr_6274_6315 = state_6272__$1;
(statearr_6274_6315[(2)] = inst_6268);

(statearr_6274_6315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (20))){
var inst_6238 = (state_6272[(7)]);
var inst_6249 = (state_6272[(2)]);
var inst_6250 = cljs.core.next.call(null,inst_6238);
var inst_6224 = inst_6250;
var inst_6225 = null;
var inst_6226 = (0);
var inst_6227 = (0);
var state_6272__$1 = (function (){var statearr_6275 = state_6272;
(statearr_6275[(8)] = inst_6249);

(statearr_6275[(9)] = inst_6225);

(statearr_6275[(10)] = inst_6226);

(statearr_6275[(11)] = inst_6227);

(statearr_6275[(12)] = inst_6224);

return statearr_6275;
})();
var statearr_6276_6316 = state_6272__$1;
(statearr_6276_6316[(2)] = null);

(statearr_6276_6316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (1))){
var state_6272__$1 = state_6272;
var statearr_6277_6317 = state_6272__$1;
(statearr_6277_6317[(2)] = null);

(statearr_6277_6317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (4))){
var inst_6213 = (state_6272[(13)]);
var inst_6213__$1 = (state_6272[(2)]);
var inst_6214 = (inst_6213__$1 == null);
var state_6272__$1 = (function (){var statearr_6278 = state_6272;
(statearr_6278[(13)] = inst_6213__$1);

return statearr_6278;
})();
if(cljs.core.truth_(inst_6214)){
var statearr_6279_6318 = state_6272__$1;
(statearr_6279_6318[(1)] = (5));

} else {
var statearr_6280_6319 = state_6272__$1;
(statearr_6280_6319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (15))){
var state_6272__$1 = state_6272;
var statearr_6284_6320 = state_6272__$1;
(statearr_6284_6320[(2)] = null);

(statearr_6284_6320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (21))){
var state_6272__$1 = state_6272;
var statearr_6285_6321 = state_6272__$1;
(statearr_6285_6321[(2)] = null);

(statearr_6285_6321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (13))){
var inst_6225 = (state_6272[(9)]);
var inst_6226 = (state_6272[(10)]);
var inst_6227 = (state_6272[(11)]);
var inst_6224 = (state_6272[(12)]);
var inst_6234 = (state_6272[(2)]);
var inst_6235 = (inst_6227 + (1));
var tmp6281 = inst_6225;
var tmp6282 = inst_6226;
var tmp6283 = inst_6224;
var inst_6224__$1 = tmp6283;
var inst_6225__$1 = tmp6281;
var inst_6226__$1 = tmp6282;
var inst_6227__$1 = inst_6235;
var state_6272__$1 = (function (){var statearr_6286 = state_6272;
(statearr_6286[(9)] = inst_6225__$1);

(statearr_6286[(10)] = inst_6226__$1);

(statearr_6286[(11)] = inst_6227__$1);

(statearr_6286[(12)] = inst_6224__$1);

(statearr_6286[(14)] = inst_6234);

return statearr_6286;
})();
var statearr_6287_6322 = state_6272__$1;
(statearr_6287_6322[(2)] = null);

(statearr_6287_6322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (22))){
var state_6272__$1 = state_6272;
var statearr_6288_6323 = state_6272__$1;
(statearr_6288_6323[(2)] = null);

(statearr_6288_6323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (6))){
var inst_6213 = (state_6272[(13)]);
var inst_6222 = f.call(null,inst_6213);
var inst_6223 = cljs.core.seq.call(null,inst_6222);
var inst_6224 = inst_6223;
var inst_6225 = null;
var inst_6226 = (0);
var inst_6227 = (0);
var state_6272__$1 = (function (){var statearr_6289 = state_6272;
(statearr_6289[(9)] = inst_6225);

(statearr_6289[(10)] = inst_6226);

(statearr_6289[(11)] = inst_6227);

(statearr_6289[(12)] = inst_6224);

return statearr_6289;
})();
var statearr_6290_6324 = state_6272__$1;
(statearr_6290_6324[(2)] = null);

(statearr_6290_6324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (17))){
var inst_6238 = (state_6272[(7)]);
var inst_6242 = cljs.core.chunk_first.call(null,inst_6238);
var inst_6243 = cljs.core.chunk_rest.call(null,inst_6238);
var inst_6244 = cljs.core.count.call(null,inst_6242);
var inst_6224 = inst_6243;
var inst_6225 = inst_6242;
var inst_6226 = inst_6244;
var inst_6227 = (0);
var state_6272__$1 = (function (){var statearr_6291 = state_6272;
(statearr_6291[(9)] = inst_6225);

(statearr_6291[(10)] = inst_6226);

(statearr_6291[(11)] = inst_6227);

(statearr_6291[(12)] = inst_6224);

return statearr_6291;
})();
var statearr_6292_6325 = state_6272__$1;
(statearr_6292_6325[(2)] = null);

(statearr_6292_6325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (3))){
var inst_6270 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6272__$1,inst_6270);
} else {
if((state_val_6273 === (12))){
var inst_6258 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
var statearr_6293_6326 = state_6272__$1;
(statearr_6293_6326[(2)] = inst_6258);

(statearr_6293_6326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (2))){
var state_6272__$1 = state_6272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6272__$1,(4),in$);
} else {
if((state_val_6273 === (23))){
var inst_6266 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
var statearr_6294_6327 = state_6272__$1;
(statearr_6294_6327[(2)] = inst_6266);

(statearr_6294_6327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (19))){
var inst_6253 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
var statearr_6295_6328 = state_6272__$1;
(statearr_6295_6328[(2)] = inst_6253);

(statearr_6295_6328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (11))){
var inst_6238 = (state_6272[(7)]);
var inst_6224 = (state_6272[(12)]);
var inst_6238__$1 = cljs.core.seq.call(null,inst_6224);
var state_6272__$1 = (function (){var statearr_6296 = state_6272;
(statearr_6296[(7)] = inst_6238__$1);

return statearr_6296;
})();
if(inst_6238__$1){
var statearr_6297_6329 = state_6272__$1;
(statearr_6297_6329[(1)] = (14));

} else {
var statearr_6298_6330 = state_6272__$1;
(statearr_6298_6330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (9))){
var inst_6260 = (state_6272[(2)]);
var inst_6261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6272__$1 = (function (){var statearr_6299 = state_6272;
(statearr_6299[(15)] = inst_6260);

return statearr_6299;
})();
if(cljs.core.truth_(inst_6261)){
var statearr_6300_6331 = state_6272__$1;
(statearr_6300_6331[(1)] = (21));

} else {
var statearr_6301_6332 = state_6272__$1;
(statearr_6301_6332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (5))){
var inst_6216 = cljs.core.async.close_BANG_.call(null,out);
var state_6272__$1 = state_6272;
var statearr_6302_6333 = state_6272__$1;
(statearr_6302_6333[(2)] = inst_6216);

(statearr_6302_6333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (14))){
var inst_6238 = (state_6272[(7)]);
var inst_6240 = cljs.core.chunked_seq_QMARK_.call(null,inst_6238);
var state_6272__$1 = state_6272;
if(inst_6240){
var statearr_6303_6334 = state_6272__$1;
(statearr_6303_6334[(1)] = (17));

} else {
var statearr_6304_6335 = state_6272__$1;
(statearr_6304_6335[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (16))){
var inst_6256 = (state_6272[(2)]);
var state_6272__$1 = state_6272;
var statearr_6305_6336 = state_6272__$1;
(statearr_6305_6336[(2)] = inst_6256);

(statearr_6305_6336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6273 === (10))){
var inst_6225 = (state_6272[(9)]);
var inst_6227 = (state_6272[(11)]);
var inst_6232 = cljs.core._nth.call(null,inst_6225,inst_6227);
var state_6272__$1 = state_6272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6272__$1,(13),out,inst_6232);
} else {
if((state_val_6273 === (18))){
var inst_6238 = (state_6272[(7)]);
var inst_6247 = cljs.core.first.call(null,inst_6238);
var state_6272__$1 = state_6272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6272__$1,(20),out,inst_6247);
} else {
if((state_val_6273 === (8))){
var inst_6226 = (state_6272[(10)]);
var inst_6227 = (state_6272[(11)]);
var inst_6229 = (inst_6227 < inst_6226);
var inst_6230 = inst_6229;
var state_6272__$1 = state_6272;
if(cljs.core.truth_(inst_6230)){
var statearr_6306_6337 = state_6272__$1;
(statearr_6306_6337[(1)] = (10));

} else {
var statearr_6307_6338 = state_6272__$1;
(statearr_6307_6338[(1)] = (11));

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
});})(c__1320__auto__))
;
return ((function (switch__1255__auto__,c__1320__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____0 = (function (){
var statearr_6311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6311[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__);

(statearr_6311[(1)] = (1));

return statearr_6311;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____1 = (function (state_6272){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_6272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e6312){if((e6312 instanceof Object)){
var ex__1259__auto__ = e6312;
var statearr_6313_6339 = state_6272;
(statearr_6313_6339[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6340 = state_6272;
state_6272 = G__6340;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__ = function(state_6272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____1.call(this,state_6272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1256__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto__))
})();
var state__1322__auto__ = (function (){var statearr_6314 = f__1321__auto__.call(null);
(statearr_6314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto__);

return statearr_6314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto__))
);

return c__1320__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args6341 = [];
var len__3300__auto___6344 = arguments.length;
var i__3301__auto___6345 = (0);
while(true){
if((i__3301__auto___6345 < len__3300__auto___6344)){
args6341.push((arguments[i__3301__auto___6345]));

var G__6346 = (i__3301__auto___6345 + (1));
i__3301__auto___6345 = G__6346;
continue;
} else {
}
break;
}

var G__6343 = args6341.length;
switch (G__6343) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6341.length)].join('')));

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
var args6348 = [];
var len__3300__auto___6351 = arguments.length;
var i__3301__auto___6352 = (0);
while(true){
if((i__3301__auto___6352 < len__3300__auto___6351)){
args6348.push((arguments[i__3301__auto___6352]));

var G__6353 = (i__3301__auto___6352 + (1));
i__3301__auto___6352 = G__6353;
continue;
} else {
}
break;
}

var G__6350 = args6348.length;
switch (G__6350) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6348.length)].join('')));

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
var args6355 = [];
var len__3300__auto___6406 = arguments.length;
var i__3301__auto___6407 = (0);
while(true){
if((i__3301__auto___6407 < len__3300__auto___6406)){
args6355.push((arguments[i__3301__auto___6407]));

var G__6408 = (i__3301__auto___6407 + (1));
i__3301__auto___6407 = G__6408;
continue;
} else {
}
break;
}

var G__6357 = args6355.length;
switch (G__6357) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6355.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___6410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___6410,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___6410,out){
return (function (state_6381){
var state_val_6382 = (state_6381[(1)]);
if((state_val_6382 === (7))){
var inst_6376 = (state_6381[(2)]);
var state_6381__$1 = state_6381;
var statearr_6383_6411 = state_6381__$1;
(statearr_6383_6411[(2)] = inst_6376);

(statearr_6383_6411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (1))){
var inst_6358 = null;
var state_6381__$1 = (function (){var statearr_6384 = state_6381;
(statearr_6384[(7)] = inst_6358);

return statearr_6384;
})();
var statearr_6385_6412 = state_6381__$1;
(statearr_6385_6412[(2)] = null);

(statearr_6385_6412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (4))){
var inst_6361 = (state_6381[(8)]);
var inst_6361__$1 = (state_6381[(2)]);
var inst_6362 = (inst_6361__$1 == null);
var inst_6363 = cljs.core.not.call(null,inst_6362);
var state_6381__$1 = (function (){var statearr_6386 = state_6381;
(statearr_6386[(8)] = inst_6361__$1);

return statearr_6386;
})();
if(inst_6363){
var statearr_6387_6413 = state_6381__$1;
(statearr_6387_6413[(1)] = (5));

} else {
var statearr_6388_6414 = state_6381__$1;
(statearr_6388_6414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (6))){
var state_6381__$1 = state_6381;
var statearr_6389_6415 = state_6381__$1;
(statearr_6389_6415[(2)] = null);

(statearr_6389_6415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (3))){
var inst_6378 = (state_6381[(2)]);
var inst_6379 = cljs.core.async.close_BANG_.call(null,out);
var state_6381__$1 = (function (){var statearr_6390 = state_6381;
(statearr_6390[(9)] = inst_6378);

return statearr_6390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6381__$1,inst_6379);
} else {
if((state_val_6382 === (2))){
var state_6381__$1 = state_6381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6381__$1,(4),ch);
} else {
if((state_val_6382 === (11))){
var inst_6361 = (state_6381[(8)]);
var inst_6370 = (state_6381[(2)]);
var inst_6358 = inst_6361;
var state_6381__$1 = (function (){var statearr_6391 = state_6381;
(statearr_6391[(10)] = inst_6370);

(statearr_6391[(7)] = inst_6358);

return statearr_6391;
})();
var statearr_6392_6416 = state_6381__$1;
(statearr_6392_6416[(2)] = null);

(statearr_6392_6416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (9))){
var inst_6361 = (state_6381[(8)]);
var state_6381__$1 = state_6381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6381__$1,(11),out,inst_6361);
} else {
if((state_val_6382 === (5))){
var inst_6358 = (state_6381[(7)]);
var inst_6361 = (state_6381[(8)]);
var inst_6365 = cljs.core._EQ_.call(null,inst_6361,inst_6358);
var state_6381__$1 = state_6381;
if(inst_6365){
var statearr_6394_6417 = state_6381__$1;
(statearr_6394_6417[(1)] = (8));

} else {
var statearr_6395_6418 = state_6381__$1;
(statearr_6395_6418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (10))){
var inst_6373 = (state_6381[(2)]);
var state_6381__$1 = state_6381;
var statearr_6396_6419 = state_6381__$1;
(statearr_6396_6419[(2)] = inst_6373);

(statearr_6396_6419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6382 === (8))){
var inst_6358 = (state_6381[(7)]);
var tmp6393 = inst_6358;
var inst_6358__$1 = tmp6393;
var state_6381__$1 = (function (){var statearr_6397 = state_6381;
(statearr_6397[(7)] = inst_6358__$1);

return statearr_6397;
})();
var statearr_6398_6420 = state_6381__$1;
(statearr_6398_6420[(2)] = null);

(statearr_6398_6420[(1)] = (2));


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
});})(c__1320__auto___6410,out))
;
return ((function (switch__1255__auto__,c__1320__auto___6410,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_6402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6402[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_6402[(1)] = (1));

return statearr_6402;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_6381){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_6381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e6403){if((e6403 instanceof Object)){
var ex__1259__auto__ = e6403;
var statearr_6404_6421 = state_6381;
(statearr_6404_6421[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6422 = state_6381;
state_6381 = G__6422;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_6381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_6381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___6410,out))
})();
var state__1322__auto__ = (function (){var statearr_6405 = f__1321__auto__.call(null);
(statearr_6405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___6410);

return statearr_6405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___6410,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args6423 = [];
var len__3300__auto___6493 = arguments.length;
var i__3301__auto___6494 = (0);
while(true){
if((i__3301__auto___6494 < len__3300__auto___6493)){
args6423.push((arguments[i__3301__auto___6494]));

var G__6495 = (i__3301__auto___6494 + (1));
i__3301__auto___6494 = G__6495;
continue;
} else {
}
break;
}

var G__6425 = args6423.length;
switch (G__6425) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6423.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___6497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___6497,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___6497,out){
return (function (state_6463){
var state_val_6464 = (state_6463[(1)]);
if((state_val_6464 === (7))){
var inst_6459 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
var statearr_6465_6498 = state_6463__$1;
(statearr_6465_6498[(2)] = inst_6459);

(statearr_6465_6498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (1))){
var inst_6426 = (new Array(n));
var inst_6427 = inst_6426;
var inst_6428 = (0);
var state_6463__$1 = (function (){var statearr_6466 = state_6463;
(statearr_6466[(7)] = inst_6428);

(statearr_6466[(8)] = inst_6427);

return statearr_6466;
})();
var statearr_6467_6499 = state_6463__$1;
(statearr_6467_6499[(2)] = null);

(statearr_6467_6499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (4))){
var inst_6431 = (state_6463[(9)]);
var inst_6431__$1 = (state_6463[(2)]);
var inst_6432 = (inst_6431__$1 == null);
var inst_6433 = cljs.core.not.call(null,inst_6432);
var state_6463__$1 = (function (){var statearr_6468 = state_6463;
(statearr_6468[(9)] = inst_6431__$1);

return statearr_6468;
})();
if(inst_6433){
var statearr_6469_6500 = state_6463__$1;
(statearr_6469_6500[(1)] = (5));

} else {
var statearr_6470_6501 = state_6463__$1;
(statearr_6470_6501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (15))){
var inst_6453 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
var statearr_6471_6502 = state_6463__$1;
(statearr_6471_6502[(2)] = inst_6453);

(statearr_6471_6502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (13))){
var state_6463__$1 = state_6463;
var statearr_6472_6503 = state_6463__$1;
(statearr_6472_6503[(2)] = null);

(statearr_6472_6503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (6))){
var inst_6428 = (state_6463[(7)]);
var inst_6449 = (inst_6428 > (0));
var state_6463__$1 = state_6463;
if(cljs.core.truth_(inst_6449)){
var statearr_6473_6504 = state_6463__$1;
(statearr_6473_6504[(1)] = (12));

} else {
var statearr_6474_6505 = state_6463__$1;
(statearr_6474_6505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (3))){
var inst_6461 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6463__$1,inst_6461);
} else {
if((state_val_6464 === (12))){
var inst_6427 = (state_6463[(8)]);
var inst_6451 = cljs.core.vec.call(null,inst_6427);
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6463__$1,(15),out,inst_6451);
} else {
if((state_val_6464 === (2))){
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6463__$1,(4),ch);
} else {
if((state_val_6464 === (11))){
var inst_6443 = (state_6463[(2)]);
var inst_6444 = (new Array(n));
var inst_6427 = inst_6444;
var inst_6428 = (0);
var state_6463__$1 = (function (){var statearr_6475 = state_6463;
(statearr_6475[(7)] = inst_6428);

(statearr_6475[(8)] = inst_6427);

(statearr_6475[(10)] = inst_6443);

return statearr_6475;
})();
var statearr_6476_6506 = state_6463__$1;
(statearr_6476_6506[(2)] = null);

(statearr_6476_6506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (9))){
var inst_6427 = (state_6463[(8)]);
var inst_6441 = cljs.core.vec.call(null,inst_6427);
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6463__$1,(11),out,inst_6441);
} else {
if((state_val_6464 === (5))){
var inst_6436 = (state_6463[(11)]);
var inst_6428 = (state_6463[(7)]);
var inst_6427 = (state_6463[(8)]);
var inst_6431 = (state_6463[(9)]);
var inst_6435 = (inst_6427[inst_6428] = inst_6431);
var inst_6436__$1 = (inst_6428 + (1));
var inst_6437 = (inst_6436__$1 < n);
var state_6463__$1 = (function (){var statearr_6477 = state_6463;
(statearr_6477[(11)] = inst_6436__$1);

(statearr_6477[(12)] = inst_6435);

return statearr_6477;
})();
if(cljs.core.truth_(inst_6437)){
var statearr_6478_6507 = state_6463__$1;
(statearr_6478_6507[(1)] = (8));

} else {
var statearr_6479_6508 = state_6463__$1;
(statearr_6479_6508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (14))){
var inst_6456 = (state_6463[(2)]);
var inst_6457 = cljs.core.async.close_BANG_.call(null,out);
var state_6463__$1 = (function (){var statearr_6481 = state_6463;
(statearr_6481[(13)] = inst_6456);

return statearr_6481;
})();
var statearr_6482_6509 = state_6463__$1;
(statearr_6482_6509[(2)] = inst_6457);

(statearr_6482_6509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (10))){
var inst_6447 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
var statearr_6483_6510 = state_6463__$1;
(statearr_6483_6510[(2)] = inst_6447);

(statearr_6483_6510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6464 === (8))){
var inst_6436 = (state_6463[(11)]);
var inst_6427 = (state_6463[(8)]);
var tmp6480 = inst_6427;
var inst_6427__$1 = tmp6480;
var inst_6428 = inst_6436;
var state_6463__$1 = (function (){var statearr_6484 = state_6463;
(statearr_6484[(7)] = inst_6428);

(statearr_6484[(8)] = inst_6427__$1);

return statearr_6484;
})();
var statearr_6485_6511 = state_6463__$1;
(statearr_6485_6511[(2)] = null);

(statearr_6485_6511[(1)] = (2));


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
});})(c__1320__auto___6497,out))
;
return ((function (switch__1255__auto__,c__1320__auto___6497,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_6489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6489[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_6489[(1)] = (1));

return statearr_6489;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_6463){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_6463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e6490){if((e6490 instanceof Object)){
var ex__1259__auto__ = e6490;
var statearr_6491_6512 = state_6463;
(statearr_6491_6512[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6513 = state_6463;
state_6463 = G__6513;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_6463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_6463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___6497,out))
})();
var state__1322__auto__ = (function (){var statearr_6492 = f__1321__auto__.call(null);
(statearr_6492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___6497);

return statearr_6492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___6497,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args6514 = [];
var len__3300__auto___6588 = arguments.length;
var i__3301__auto___6589 = (0);
while(true){
if((i__3301__auto___6589 < len__3300__auto___6588)){
args6514.push((arguments[i__3301__auto___6589]));

var G__6590 = (i__3301__auto___6589 + (1));
i__3301__auto___6589 = G__6590;
continue;
} else {
}
break;
}

var G__6516 = args6514.length;
switch (G__6516) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6514.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1320__auto___6592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1320__auto___6592,out){
return (function (){
var f__1321__auto__ = (function (){var switch__1255__auto__ = ((function (c__1320__auto___6592,out){
return (function (state_6558){
var state_val_6559 = (state_6558[(1)]);
if((state_val_6559 === (7))){
var inst_6554 = (state_6558[(2)]);
var state_6558__$1 = state_6558;
var statearr_6560_6593 = state_6558__$1;
(statearr_6560_6593[(2)] = inst_6554);

(statearr_6560_6593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (1))){
var inst_6517 = [];
var inst_6518 = inst_6517;
var inst_6519 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6558__$1 = (function (){var statearr_6561 = state_6558;
(statearr_6561[(7)] = inst_6519);

(statearr_6561[(8)] = inst_6518);

return statearr_6561;
})();
var statearr_6562_6594 = state_6558__$1;
(statearr_6562_6594[(2)] = null);

(statearr_6562_6594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (4))){
var inst_6522 = (state_6558[(9)]);
var inst_6522__$1 = (state_6558[(2)]);
var inst_6523 = (inst_6522__$1 == null);
var inst_6524 = cljs.core.not.call(null,inst_6523);
var state_6558__$1 = (function (){var statearr_6563 = state_6558;
(statearr_6563[(9)] = inst_6522__$1);

return statearr_6563;
})();
if(inst_6524){
var statearr_6564_6595 = state_6558__$1;
(statearr_6564_6595[(1)] = (5));

} else {
var statearr_6565_6596 = state_6558__$1;
(statearr_6565_6596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (15))){
var inst_6548 = (state_6558[(2)]);
var state_6558__$1 = state_6558;
var statearr_6566_6597 = state_6558__$1;
(statearr_6566_6597[(2)] = inst_6548);

(statearr_6566_6597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (13))){
var state_6558__$1 = state_6558;
var statearr_6567_6598 = state_6558__$1;
(statearr_6567_6598[(2)] = null);

(statearr_6567_6598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (6))){
var inst_6518 = (state_6558[(8)]);
var inst_6543 = inst_6518.length;
var inst_6544 = (inst_6543 > (0));
var state_6558__$1 = state_6558;
if(cljs.core.truth_(inst_6544)){
var statearr_6568_6599 = state_6558__$1;
(statearr_6568_6599[(1)] = (12));

} else {
var statearr_6569_6600 = state_6558__$1;
(statearr_6569_6600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (3))){
var inst_6556 = (state_6558[(2)]);
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6558__$1,inst_6556);
} else {
if((state_val_6559 === (12))){
var inst_6518 = (state_6558[(8)]);
var inst_6546 = cljs.core.vec.call(null,inst_6518);
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6558__$1,(15),out,inst_6546);
} else {
if((state_val_6559 === (2))){
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6558__$1,(4),ch);
} else {
if((state_val_6559 === (11))){
var inst_6526 = (state_6558[(10)]);
var inst_6522 = (state_6558[(9)]);
var inst_6536 = (state_6558[(2)]);
var inst_6537 = [];
var inst_6538 = inst_6537.push(inst_6522);
var inst_6518 = inst_6537;
var inst_6519 = inst_6526;
var state_6558__$1 = (function (){var statearr_6570 = state_6558;
(statearr_6570[(11)] = inst_6538);

(statearr_6570[(7)] = inst_6519);

(statearr_6570[(8)] = inst_6518);

(statearr_6570[(12)] = inst_6536);

return statearr_6570;
})();
var statearr_6571_6601 = state_6558__$1;
(statearr_6571_6601[(2)] = null);

(statearr_6571_6601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (9))){
var inst_6518 = (state_6558[(8)]);
var inst_6534 = cljs.core.vec.call(null,inst_6518);
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6558__$1,(11),out,inst_6534);
} else {
if((state_val_6559 === (5))){
var inst_6526 = (state_6558[(10)]);
var inst_6519 = (state_6558[(7)]);
var inst_6522 = (state_6558[(9)]);
var inst_6526__$1 = f.call(null,inst_6522);
var inst_6527 = cljs.core._EQ_.call(null,inst_6526__$1,inst_6519);
var inst_6528 = cljs.core.keyword_identical_QMARK_.call(null,inst_6519,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6529 = (inst_6527) || (inst_6528);
var state_6558__$1 = (function (){var statearr_6572 = state_6558;
(statearr_6572[(10)] = inst_6526__$1);

return statearr_6572;
})();
if(cljs.core.truth_(inst_6529)){
var statearr_6573_6602 = state_6558__$1;
(statearr_6573_6602[(1)] = (8));

} else {
var statearr_6574_6603 = state_6558__$1;
(statearr_6574_6603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (14))){
var inst_6551 = (state_6558[(2)]);
var inst_6552 = cljs.core.async.close_BANG_.call(null,out);
var state_6558__$1 = (function (){var statearr_6576 = state_6558;
(statearr_6576[(13)] = inst_6551);

return statearr_6576;
})();
var statearr_6577_6604 = state_6558__$1;
(statearr_6577_6604[(2)] = inst_6552);

(statearr_6577_6604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (10))){
var inst_6541 = (state_6558[(2)]);
var state_6558__$1 = state_6558;
var statearr_6578_6605 = state_6558__$1;
(statearr_6578_6605[(2)] = inst_6541);

(statearr_6578_6605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6559 === (8))){
var inst_6526 = (state_6558[(10)]);
var inst_6522 = (state_6558[(9)]);
var inst_6518 = (state_6558[(8)]);
var inst_6531 = inst_6518.push(inst_6522);
var tmp6575 = inst_6518;
var inst_6518__$1 = tmp6575;
var inst_6519 = inst_6526;
var state_6558__$1 = (function (){var statearr_6579 = state_6558;
(statearr_6579[(7)] = inst_6519);

(statearr_6579[(8)] = inst_6518__$1);

(statearr_6579[(14)] = inst_6531);

return statearr_6579;
})();
var statearr_6580_6606 = state_6558__$1;
(statearr_6580_6606[(2)] = null);

(statearr_6580_6606[(1)] = (2));


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
});})(c__1320__auto___6592,out))
;
return ((function (switch__1255__auto__,c__1320__auto___6592,out){
return (function() {
var cljs$core$async$state_machine__1256__auto__ = null;
var cljs$core$async$state_machine__1256__auto____0 = (function (){
var statearr_6584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6584[(0)] = cljs$core$async$state_machine__1256__auto__);

(statearr_6584[(1)] = (1));

return statearr_6584;
});
var cljs$core$async$state_machine__1256__auto____1 = (function (state_6558){
while(true){
var ret_value__1257__auto__ = (function (){try{while(true){
var result__1258__auto__ = switch__1255__auto__.call(null,state_6558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1258__auto__;
}
break;
}
}catch (e6585){if((e6585 instanceof Object)){
var ex__1259__auto__ = e6585;
var statearr_6586_6607 = state_6558;
(statearr_6586_6607[(5)] = ex__1259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6608 = state_6558;
state_6558 = G__6608;
continue;
} else {
return ret_value__1257__auto__;
}
break;
}
});
cljs$core$async$state_machine__1256__auto__ = function(state_6558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1256__auto____1.call(this,state_6558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1256__auto____0;
cljs$core$async$state_machine__1256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1256__auto____1;
return cljs$core$async$state_machine__1256__auto__;
})()
;})(switch__1255__auto__,c__1320__auto___6592,out))
})();
var state__1322__auto__ = (function (){var statearr_6587 = f__1321__auto__.call(null);
(statearr_6587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1320__auto___6592);

return statearr_6587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1322__auto__);
});})(c__1320__auto___6592,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map