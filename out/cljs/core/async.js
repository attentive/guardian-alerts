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
if(typeof cljs.core.async.t4500 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4500 = (function (fn_handler,f,meta4501){
this.fn_handler = fn_handler;
this.f = f;
this.meta4501 = meta4501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4502,meta4501__$1){
var self__ = this;
var _4502__$1 = this;
return (new cljs.core.async.t4500(self__.fn_handler,self__.f,meta4501__$1));
});

cljs.core.async.t4500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4502){
var self__ = this;
var _4502__$1 = this;
return self__.meta4501;
});

cljs.core.async.t4500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t4500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t4500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta4501","meta4501",294546524,null)], null);
});

cljs.core.async.t4500.cljs$lang$type = true;

cljs.core.async.t4500.cljs$lang$ctorStr = "cljs.core.async/t4500";

cljs.core.async.t4500.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4500");
});

cljs.core.async.__GT_t4500 = (function cljs$core$async$fn_handler_$___GT_t4500(fn_handler__$1,f__$1,meta4501){
return (new cljs.core.async.t4500(fn_handler__$1,f__$1,meta4501));
});

}

return (new cljs.core.async.t4500(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args4505 = [];
var len__3300__auto___4508 = arguments.length;
var i__3301__auto___4509 = (0);
while(true){
if((i__3301__auto___4509 < len__3300__auto___4508)){
args4505.push((arguments[i__3301__auto___4509]));

var G__4510 = (i__3301__auto___4509 + (1));
i__3301__auto___4509 = G__4510;
continue;
} else {
}
break;
}

var G__4507 = args4505.length;
switch (G__4507) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4505.length)].join('')));

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
var args4512 = [];
var len__3300__auto___4515 = arguments.length;
var i__3301__auto___4516 = (0);
while(true){
if((i__3301__auto___4516 < len__3300__auto___4515)){
args4512.push((arguments[i__3301__auto___4516]));

var G__4517 = (i__3301__auto___4516 + (1));
i__3301__auto___4516 = G__4517;
continue;
} else {
}
break;
}

var G__4514 = args4512.length;
switch (G__4514) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4512.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4519 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4519);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4519,ret){
return (function (){
return fn1.call(null,val_4519);
});})(val_4519,ret))
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
var args4520 = [];
var len__3300__auto___4523 = arguments.length;
var i__3301__auto___4524 = (0);
while(true){
if((i__3301__auto___4524 < len__3300__auto___4523)){
args4520.push((arguments[i__3301__auto___4524]));

var G__4525 = (i__3301__auto___4524 + (1));
i__3301__auto___4524 = G__4525;
continue;
} else {
}
break;
}

var G__4522 = args4520.length;
switch (G__4522) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4520.length)].join('')));

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
var n__3209__auto___4527 = n;
var x_4528 = (0);
while(true){
if((x_4528 < n__3209__auto___4527)){
(a[x_4528] = (0));

var G__4529 = (x_4528 + (1));
x_4528 = G__4529;
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

var G__4530 = (i + (1));
i = G__4530;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t4534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4534 = (function (alt_flag,flag,meta4535){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta4535 = meta4535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4536,meta4535__$1){
var self__ = this;
var _4536__$1 = this;
return (new cljs.core.async.t4534(self__.alt_flag,self__.flag,meta4535__$1));
});})(flag))
;

cljs.core.async.t4534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4536){
var self__ = this;
var _4536__$1 = this;
return self__.meta4535;
});})(flag))
;

cljs.core.async.t4534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t4534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t4534.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4535","meta4535",-166006252,null)], null);
});})(flag))
;

cljs.core.async.t4534.cljs$lang$type = true;

cljs.core.async.t4534.cljs$lang$ctorStr = "cljs.core.async/t4534";

cljs.core.async.t4534.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4534");
});})(flag))
;

cljs.core.async.__GT_t4534 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t4534(alt_flag__$1,flag__$1,meta4535){
return (new cljs.core.async.t4534(alt_flag__$1,flag__$1,meta4535));
});})(flag))
;

}

return (new cljs.core.async.t4534(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t4540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4540 = (function (alt_handler,flag,cb,meta4541){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta4541 = meta4541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4542,meta4541__$1){
var self__ = this;
var _4542__$1 = this;
return (new cljs.core.async.t4540(self__.alt_handler,self__.flag,self__.cb,meta4541__$1));
});

cljs.core.async.t4540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4542){
var self__ = this;
var _4542__$1 = this;
return self__.meta4541;
});

cljs.core.async.t4540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t4540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t4540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t4540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4541","meta4541",1177566128,null)], null);
});

cljs.core.async.t4540.cljs$lang$type = true;

cljs.core.async.t4540.cljs$lang$ctorStr = "cljs.core.async/t4540";

cljs.core.async.t4540.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t4540");
});

cljs.core.async.__GT_t4540 = (function cljs$core$async$alt_handler_$___GT_t4540(alt_handler__$1,flag__$1,cb__$1,meta4541){
return (new cljs.core.async.t4540(alt_handler__$1,flag__$1,cb__$1,meta4541));
});

}

return (new cljs.core.async.t4540(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__4543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4544_SHARP_,port], null));
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
var G__4545 = (i + (1));
i = G__4545;
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
var len__3300__auto___4551 = arguments.length;
var i__3301__auto___4552 = (0);
while(true){
if((i__3301__auto___4552 < len__3300__auto___4551)){
args__3303__auto__.push((arguments[i__3301__auto___4552]));

var G__4553 = (i__3301__auto___4552 + (1));
i__3301__auto___4552 = G__4553;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((1) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4548){
var map__4549 = p__4548;
var map__4549__$1 = ((((!((map__4549 == null)))?((((map__4549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4549):map__4549);
var opts = map__4549__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4546){
var G__4547 = cljs.core.first.call(null,seq4546);
var seq4546__$1 = cljs.core.next.call(null,seq4546);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__4547,seq4546__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args4554 = [];
var len__3300__auto___4604 = arguments.length;
var i__3301__auto___4605 = (0);
while(true){
if((i__3301__auto___4605 < len__3300__auto___4604)){
args4554.push((arguments[i__3301__auto___4605]));

var G__4606 = (i__3301__auto___4605 + (1));
i__3301__auto___4605 = G__4606;
continue;
} else {
}
break;
}

var G__4556 = args4554.length;
switch (G__4556) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4554.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1363__auto___4608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___4608){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___4608){
return (function (state_4580){
var state_val_4581 = (state_4580[(1)]);
if((state_val_4581 === (7))){
var inst_4576 = (state_4580[(2)]);
var state_4580__$1 = state_4580;
var statearr_4582_4609 = state_4580__$1;
(statearr_4582_4609[(2)] = inst_4576);

(statearr_4582_4609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (1))){
var state_4580__$1 = state_4580;
var statearr_4583_4610 = state_4580__$1;
(statearr_4583_4610[(2)] = null);

(statearr_4583_4610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (4))){
var inst_4559 = (state_4580[(7)]);
var inst_4559__$1 = (state_4580[(2)]);
var inst_4560 = (inst_4559__$1 == null);
var state_4580__$1 = (function (){var statearr_4584 = state_4580;
(statearr_4584[(7)] = inst_4559__$1);

return statearr_4584;
})();
if(cljs.core.truth_(inst_4560)){
var statearr_4585_4611 = state_4580__$1;
(statearr_4585_4611[(1)] = (5));

} else {
var statearr_4586_4612 = state_4580__$1;
(statearr_4586_4612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (13))){
var state_4580__$1 = state_4580;
var statearr_4587_4613 = state_4580__$1;
(statearr_4587_4613[(2)] = null);

(statearr_4587_4613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (6))){
var inst_4559 = (state_4580[(7)]);
var state_4580__$1 = state_4580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4580__$1,(11),to,inst_4559);
} else {
if((state_val_4581 === (3))){
var inst_4578 = (state_4580[(2)]);
var state_4580__$1 = state_4580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4580__$1,inst_4578);
} else {
if((state_val_4581 === (12))){
var state_4580__$1 = state_4580;
var statearr_4588_4614 = state_4580__$1;
(statearr_4588_4614[(2)] = null);

(statearr_4588_4614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (2))){
var state_4580__$1 = state_4580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4580__$1,(4),from);
} else {
if((state_val_4581 === (11))){
var inst_4569 = (state_4580[(2)]);
var state_4580__$1 = state_4580;
if(cljs.core.truth_(inst_4569)){
var statearr_4589_4615 = state_4580__$1;
(statearr_4589_4615[(1)] = (12));

} else {
var statearr_4590_4616 = state_4580__$1;
(statearr_4590_4616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (9))){
var state_4580__$1 = state_4580;
var statearr_4591_4617 = state_4580__$1;
(statearr_4591_4617[(2)] = null);

(statearr_4591_4617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (5))){
var state_4580__$1 = state_4580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4592_4618 = state_4580__$1;
(statearr_4592_4618[(1)] = (8));

} else {
var statearr_4593_4619 = state_4580__$1;
(statearr_4593_4619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (14))){
var inst_4574 = (state_4580[(2)]);
var state_4580__$1 = state_4580;
var statearr_4594_4620 = state_4580__$1;
(statearr_4594_4620[(2)] = inst_4574);

(statearr_4594_4620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (10))){
var inst_4566 = (state_4580[(2)]);
var state_4580__$1 = state_4580;
var statearr_4595_4621 = state_4580__$1;
(statearr_4595_4621[(2)] = inst_4566);

(statearr_4595_4621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4581 === (8))){
var inst_4563 = cljs.core.async.close_BANG_.call(null,to);
var state_4580__$1 = state_4580;
var statearr_4596_4622 = state_4580__$1;
(statearr_4596_4622[(2)] = inst_4563);

(statearr_4596_4622[(1)] = (10));


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
});})(c__1363__auto___4608))
;
return ((function (switch__1298__auto__,c__1363__auto___4608){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_4600 = [null,null,null,null,null,null,null,null];
(statearr_4600[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_4600[(1)] = (1));

return statearr_4600;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_4580){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4601){if((e4601 instanceof Object)){
var ex__1302__auto__ = e4601;
var statearr_4602_4623 = state_4580;
(statearr_4602_4623[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4624 = state_4580;
state_4580 = G__4624;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_4580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_4580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___4608))
})();
var state__1365__auto__ = (function (){var statearr_4603 = f__1364__auto__.call(null);
(statearr_4603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___4608);

return statearr_4603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___4608))
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
return (function (p__4808){
var vec__4809 = p__4808;
var v = cljs.core.nth.call(null,vec__4809,(0),null);
var p = cljs.core.nth.call(null,vec__4809,(1),null);
var job = vec__4809;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1363__auto___4991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results){
return (function (state_4814){
var state_val_4815 = (state_4814[(1)]);
if((state_val_4815 === (1))){
var state_4814__$1 = state_4814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4814__$1,(2),res,v);
} else {
if((state_val_4815 === (2))){
var inst_4811 = (state_4814[(2)]);
var inst_4812 = cljs.core.async.close_BANG_.call(null,res);
var state_4814__$1 = (function (){var statearr_4816 = state_4814;
(statearr_4816[(7)] = inst_4811);

return statearr_4816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4814__$1,inst_4812);
} else {
return null;
}
}
});})(c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results))
;
return ((function (switch__1298__auto__,c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_4820 = [null,null,null,null,null,null,null,null];
(statearr_4820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__);

(statearr_4820[(1)] = (1));

return statearr_4820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1 = (function (state_4814){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4821){if((e4821 instanceof Object)){
var ex__1302__auto__ = e4821;
var statearr_4822_4992 = state_4814;
(statearr_4822_4992[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4993 = state_4814;
state_4814 = G__4993;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = function(state_4814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1.call(this,state_4814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results))
})();
var state__1365__auto__ = (function (){var statearr_4823 = f__1364__auto__.call(null);
(statearr_4823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___4991);

return statearr_4823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___4991,res,vec__4809,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4824){
var vec__4825 = p__4824;
var v = cljs.core.nth.call(null,vec__4825,(0),null);
var p = cljs.core.nth.call(null,vec__4825,(1),null);
var job = vec__4825;
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
var n__3209__auto___4994 = n;
var __4995 = (0);
while(true){
if((__4995 < n__3209__auto___4994)){
var G__4826_4996 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__4826_4996) {
case "compute":
var c__1363__auto___4998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4995,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (__4995,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function (state_4839){
var state_val_4840 = (state_4839[(1)]);
if((state_val_4840 === (1))){
var state_4839__$1 = state_4839;
var statearr_4841_4999 = state_4839__$1;
(statearr_4841_4999[(2)] = null);

(statearr_4841_4999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4840 === (2))){
var state_4839__$1 = state_4839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4839__$1,(4),jobs);
} else {
if((state_val_4840 === (3))){
var inst_4837 = (state_4839[(2)]);
var state_4839__$1 = state_4839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4839__$1,inst_4837);
} else {
if((state_val_4840 === (4))){
var inst_4829 = (state_4839[(2)]);
var inst_4830 = process.call(null,inst_4829);
var state_4839__$1 = state_4839;
if(cljs.core.truth_(inst_4830)){
var statearr_4842_5000 = state_4839__$1;
(statearr_4842_5000[(1)] = (5));

} else {
var statearr_4843_5001 = state_4839__$1;
(statearr_4843_5001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4840 === (5))){
var state_4839__$1 = state_4839;
var statearr_4844_5002 = state_4839__$1;
(statearr_4844_5002[(2)] = null);

(statearr_4844_5002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4840 === (6))){
var state_4839__$1 = state_4839;
var statearr_4845_5003 = state_4839__$1;
(statearr_4845_5003[(2)] = null);

(statearr_4845_5003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4840 === (7))){
var inst_4835 = (state_4839[(2)]);
var state_4839__$1 = state_4839;
var statearr_4846_5004 = state_4839__$1;
(statearr_4846_5004[(2)] = inst_4835);

(statearr_4846_5004[(1)] = (3));


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
});})(__4995,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
;
return ((function (__4995,switch__1298__auto__,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_4850 = [null,null,null,null,null,null,null];
(statearr_4850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__);

(statearr_4850[(1)] = (1));

return statearr_4850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1 = (function (state_4839){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4851){if((e4851 instanceof Object)){
var ex__1302__auto__ = e4851;
var statearr_4852_5005 = state_4839;
(statearr_4852_5005[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5006 = state_4839;
state_4839 = G__5006;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = function(state_4839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1.call(this,state_4839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__;
})()
;})(__4995,switch__1298__auto__,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
})();
var state__1365__auto__ = (function (){var statearr_4853 = f__1364__auto__.call(null);
(statearr_4853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___4998);

return statearr_4853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(__4995,c__1363__auto___4998,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
);


break;
case "async":
var c__1363__auto___5007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4995,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (__4995,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function (state_4866){
var state_val_4867 = (state_4866[(1)]);
if((state_val_4867 === (1))){
var state_4866__$1 = state_4866;
var statearr_4868_5008 = state_4866__$1;
(statearr_4868_5008[(2)] = null);

(statearr_4868_5008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4867 === (2))){
var state_4866__$1 = state_4866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4866__$1,(4),jobs);
} else {
if((state_val_4867 === (3))){
var inst_4864 = (state_4866[(2)]);
var state_4866__$1 = state_4866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4866__$1,inst_4864);
} else {
if((state_val_4867 === (4))){
var inst_4856 = (state_4866[(2)]);
var inst_4857 = async.call(null,inst_4856);
var state_4866__$1 = state_4866;
if(cljs.core.truth_(inst_4857)){
var statearr_4869_5009 = state_4866__$1;
(statearr_4869_5009[(1)] = (5));

} else {
var statearr_4870_5010 = state_4866__$1;
(statearr_4870_5010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4867 === (5))){
var state_4866__$1 = state_4866;
var statearr_4871_5011 = state_4866__$1;
(statearr_4871_5011[(2)] = null);

(statearr_4871_5011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4867 === (6))){
var state_4866__$1 = state_4866;
var statearr_4872_5012 = state_4866__$1;
(statearr_4872_5012[(2)] = null);

(statearr_4872_5012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4867 === (7))){
var inst_4862 = (state_4866[(2)]);
var state_4866__$1 = state_4866;
var statearr_4873_5013 = state_4866__$1;
(statearr_4873_5013[(2)] = inst_4862);

(statearr_4873_5013[(1)] = (3));


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
});})(__4995,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
;
return ((function (__4995,switch__1298__auto__,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_4877 = [null,null,null,null,null,null,null];
(statearr_4877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__);

(statearr_4877[(1)] = (1));

return statearr_4877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1 = (function (state_4866){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4878){if((e4878 instanceof Object)){
var ex__1302__auto__ = e4878;
var statearr_4879_5014 = state_4866;
(statearr_4879_5014[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5015 = state_4866;
state_4866 = G__5015;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = function(state_4866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1.call(this,state_4866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__;
})()
;})(__4995,switch__1298__auto__,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
})();
var state__1365__auto__ = (function (){var statearr_4880 = f__1364__auto__.call(null);
(statearr_4880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___5007);

return statearr_4880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(__4995,c__1363__auto___5007,G__4826_4996,n__3209__auto___4994,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__5016 = (__4995 + (1));
__4995 = G__5016;
continue;
} else {
}
break;
}

var c__1363__auto___5017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___5017,jobs,results,process,async){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___5017,jobs,results,process,async){
return (function (state_4902){
var state_val_4903 = (state_4902[(1)]);
if((state_val_4903 === (1))){
var state_4902__$1 = state_4902;
var statearr_4904_5018 = state_4902__$1;
(statearr_4904_5018[(2)] = null);

(statearr_4904_5018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4903 === (2))){
var state_4902__$1 = state_4902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4902__$1,(4),from);
} else {
if((state_val_4903 === (3))){
var inst_4900 = (state_4902[(2)]);
var state_4902__$1 = state_4902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4902__$1,inst_4900);
} else {
if((state_val_4903 === (4))){
var inst_4883 = (state_4902[(7)]);
var inst_4883__$1 = (state_4902[(2)]);
var inst_4884 = (inst_4883__$1 == null);
var state_4902__$1 = (function (){var statearr_4905 = state_4902;
(statearr_4905[(7)] = inst_4883__$1);

return statearr_4905;
})();
if(cljs.core.truth_(inst_4884)){
var statearr_4906_5019 = state_4902__$1;
(statearr_4906_5019[(1)] = (5));

} else {
var statearr_4907_5020 = state_4902__$1;
(statearr_4907_5020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4903 === (5))){
var inst_4886 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4902__$1 = state_4902;
var statearr_4908_5021 = state_4902__$1;
(statearr_4908_5021[(2)] = inst_4886);

(statearr_4908_5021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4903 === (6))){
var inst_4883 = (state_4902[(7)]);
var inst_4888 = (state_4902[(8)]);
var inst_4888__$1 = cljs.core.async.chan.call(null,(1));
var inst_4889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4890 = [inst_4883,inst_4888__$1];
var inst_4891 = (new cljs.core.PersistentVector(null,2,(5),inst_4889,inst_4890,null));
var state_4902__$1 = (function (){var statearr_4909 = state_4902;
(statearr_4909[(8)] = inst_4888__$1);

return statearr_4909;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4902__$1,(8),jobs,inst_4891);
} else {
if((state_val_4903 === (7))){
var inst_4898 = (state_4902[(2)]);
var state_4902__$1 = state_4902;
var statearr_4910_5022 = state_4902__$1;
(statearr_4910_5022[(2)] = inst_4898);

(statearr_4910_5022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4903 === (8))){
var inst_4888 = (state_4902[(8)]);
var inst_4893 = (state_4902[(2)]);
var state_4902__$1 = (function (){var statearr_4911 = state_4902;
(statearr_4911[(9)] = inst_4893);

return statearr_4911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4902__$1,(9),results,inst_4888);
} else {
if((state_val_4903 === (9))){
var inst_4895 = (state_4902[(2)]);
var state_4902__$1 = (function (){var statearr_4912 = state_4902;
(statearr_4912[(10)] = inst_4895);

return statearr_4912;
})();
var statearr_4913_5023 = state_4902__$1;
(statearr_4913_5023[(2)] = null);

(statearr_4913_5023[(1)] = (2));


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
});})(c__1363__auto___5017,jobs,results,process,async))
;
return ((function (switch__1298__auto__,c__1363__auto___5017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_4917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__);

(statearr_4917[(1)] = (1));

return statearr_4917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1 = (function (state_4902){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4918){if((e4918 instanceof Object)){
var ex__1302__auto__ = e4918;
var statearr_4919_5024 = state_4902;
(statearr_4919_5024[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5025 = state_4902;
state_4902 = G__5025;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = function(state_4902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1.call(this,state_4902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___5017,jobs,results,process,async))
})();
var state__1365__auto__ = (function (){var statearr_4920 = f__1364__auto__.call(null);
(statearr_4920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___5017);

return statearr_4920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___5017,jobs,results,process,async))
);


var c__1363__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto__,jobs,results,process,async){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto__,jobs,results,process,async){
return (function (state_4958){
var state_val_4959 = (state_4958[(1)]);
if((state_val_4959 === (7))){
var inst_4954 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
var statearr_4960_5026 = state_4958__$1;
(statearr_4960_5026[(2)] = inst_4954);

(statearr_4960_5026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (20))){
var state_4958__$1 = state_4958;
var statearr_4961_5027 = state_4958__$1;
(statearr_4961_5027[(2)] = null);

(statearr_4961_5027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (1))){
var state_4958__$1 = state_4958;
var statearr_4962_5028 = state_4958__$1;
(statearr_4962_5028[(2)] = null);

(statearr_4962_5028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (4))){
var inst_4923 = (state_4958[(7)]);
var inst_4923__$1 = (state_4958[(2)]);
var inst_4924 = (inst_4923__$1 == null);
var state_4958__$1 = (function (){var statearr_4963 = state_4958;
(statearr_4963[(7)] = inst_4923__$1);

return statearr_4963;
})();
if(cljs.core.truth_(inst_4924)){
var statearr_4964_5029 = state_4958__$1;
(statearr_4964_5029[(1)] = (5));

} else {
var statearr_4965_5030 = state_4958__$1;
(statearr_4965_5030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (15))){
var inst_4936 = (state_4958[(8)]);
var state_4958__$1 = state_4958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4958__$1,(18),to,inst_4936);
} else {
if((state_val_4959 === (21))){
var inst_4949 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
var statearr_4966_5031 = state_4958__$1;
(statearr_4966_5031[(2)] = inst_4949);

(statearr_4966_5031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (13))){
var inst_4951 = (state_4958[(2)]);
var state_4958__$1 = (function (){var statearr_4967 = state_4958;
(statearr_4967[(9)] = inst_4951);

return statearr_4967;
})();
var statearr_4968_5032 = state_4958__$1;
(statearr_4968_5032[(2)] = null);

(statearr_4968_5032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (6))){
var inst_4923 = (state_4958[(7)]);
var state_4958__$1 = state_4958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4958__$1,(11),inst_4923);
} else {
if((state_val_4959 === (17))){
var inst_4944 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
if(cljs.core.truth_(inst_4944)){
var statearr_4969_5033 = state_4958__$1;
(statearr_4969_5033[(1)] = (19));

} else {
var statearr_4970_5034 = state_4958__$1;
(statearr_4970_5034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (3))){
var inst_4956 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4958__$1,inst_4956);
} else {
if((state_val_4959 === (12))){
var inst_4933 = (state_4958[(10)]);
var state_4958__$1 = state_4958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4958__$1,(14),inst_4933);
} else {
if((state_val_4959 === (2))){
var state_4958__$1 = state_4958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4958__$1,(4),results);
} else {
if((state_val_4959 === (19))){
var state_4958__$1 = state_4958;
var statearr_4971_5035 = state_4958__$1;
(statearr_4971_5035[(2)] = null);

(statearr_4971_5035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (11))){
var inst_4933 = (state_4958[(2)]);
var state_4958__$1 = (function (){var statearr_4972 = state_4958;
(statearr_4972[(10)] = inst_4933);

return statearr_4972;
})();
var statearr_4973_5036 = state_4958__$1;
(statearr_4973_5036[(2)] = null);

(statearr_4973_5036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (9))){
var state_4958__$1 = state_4958;
var statearr_4974_5037 = state_4958__$1;
(statearr_4974_5037[(2)] = null);

(statearr_4974_5037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (5))){
var state_4958__$1 = state_4958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4975_5038 = state_4958__$1;
(statearr_4975_5038[(1)] = (8));

} else {
var statearr_4976_5039 = state_4958__$1;
(statearr_4976_5039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (14))){
var inst_4938 = (state_4958[(11)]);
var inst_4936 = (state_4958[(8)]);
var inst_4936__$1 = (state_4958[(2)]);
var inst_4937 = (inst_4936__$1 == null);
var inst_4938__$1 = cljs.core.not.call(null,inst_4937);
var state_4958__$1 = (function (){var statearr_4977 = state_4958;
(statearr_4977[(11)] = inst_4938__$1);

(statearr_4977[(8)] = inst_4936__$1);

return statearr_4977;
})();
if(inst_4938__$1){
var statearr_4978_5040 = state_4958__$1;
(statearr_4978_5040[(1)] = (15));

} else {
var statearr_4979_5041 = state_4958__$1;
(statearr_4979_5041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (16))){
var inst_4938 = (state_4958[(11)]);
var state_4958__$1 = state_4958;
var statearr_4980_5042 = state_4958__$1;
(statearr_4980_5042[(2)] = inst_4938);

(statearr_4980_5042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (10))){
var inst_4930 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
var statearr_4981_5043 = state_4958__$1;
(statearr_4981_5043[(2)] = inst_4930);

(statearr_4981_5043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (18))){
var inst_4941 = (state_4958[(2)]);
var state_4958__$1 = state_4958;
var statearr_4982_5044 = state_4958__$1;
(statearr_4982_5044[(2)] = inst_4941);

(statearr_4982_5044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4959 === (8))){
var inst_4927 = cljs.core.async.close_BANG_.call(null,to);
var state_4958__$1 = state_4958;
var statearr_4983_5045 = state_4958__$1;
(statearr_4983_5045[(2)] = inst_4927);

(statearr_4983_5045[(1)] = (10));


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
});})(c__1363__auto__,jobs,results,process,async))
;
return ((function (switch__1298__auto__,c__1363__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_4987 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__);

(statearr_4987[(1)] = (1));

return statearr_4987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1 = (function (state_4958){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_4958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e4988){if((e4988 instanceof Object)){
var ex__1302__auto__ = e4988;
var statearr_4989_5046 = state_4958;
(statearr_4989_5046[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5047 = state_4958;
state_4958 = G__5047;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__ = function(state_4958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1.call(this,state_4958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto__,jobs,results,process,async))
})();
var state__1365__auto__ = (function (){var statearr_4990 = f__1364__auto__.call(null);
(statearr_4990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto__);

return statearr_4990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto__,jobs,results,process,async))
);

return c__1363__auto__;
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
var args5048 = [];
var len__3300__auto___5051 = arguments.length;
var i__3301__auto___5052 = (0);
while(true){
if((i__3301__auto___5052 < len__3300__auto___5051)){
args5048.push((arguments[i__3301__auto___5052]));

var G__5053 = (i__3301__auto___5052 + (1));
i__3301__auto___5052 = G__5053;
continue;
} else {
}
break;
}

var G__5050 = args5048.length;
switch (G__5050) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5048.length)].join('')));

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
var args5055 = [];
var len__3300__auto___5058 = arguments.length;
var i__3301__auto___5059 = (0);
while(true){
if((i__3301__auto___5059 < len__3300__auto___5058)){
args5055.push((arguments[i__3301__auto___5059]));

var G__5060 = (i__3301__auto___5059 + (1));
i__3301__auto___5059 = G__5060;
continue;
} else {
}
break;
}

var G__5057 = args5055.length;
switch (G__5057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5055.length)].join('')));

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
var args5062 = [];
var len__3300__auto___5115 = arguments.length;
var i__3301__auto___5116 = (0);
while(true){
if((i__3301__auto___5116 < len__3300__auto___5115)){
args5062.push((arguments[i__3301__auto___5116]));

var G__5117 = (i__3301__auto___5116 + (1));
i__3301__auto___5116 = G__5117;
continue;
} else {
}
break;
}

var G__5064 = args5062.length;
switch (G__5064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5062.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1363__auto___5119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___5119,tc,fc){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___5119,tc,fc){
return (function (state_5090){
var state_val_5091 = (state_5090[(1)]);
if((state_val_5091 === (7))){
var inst_5086 = (state_5090[(2)]);
var state_5090__$1 = state_5090;
var statearr_5092_5120 = state_5090__$1;
(statearr_5092_5120[(2)] = inst_5086);

(statearr_5092_5120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (1))){
var state_5090__$1 = state_5090;
var statearr_5093_5121 = state_5090__$1;
(statearr_5093_5121[(2)] = null);

(statearr_5093_5121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (4))){
var inst_5067 = (state_5090[(7)]);
var inst_5067__$1 = (state_5090[(2)]);
var inst_5068 = (inst_5067__$1 == null);
var state_5090__$1 = (function (){var statearr_5094 = state_5090;
(statearr_5094[(7)] = inst_5067__$1);

return statearr_5094;
})();
if(cljs.core.truth_(inst_5068)){
var statearr_5095_5122 = state_5090__$1;
(statearr_5095_5122[(1)] = (5));

} else {
var statearr_5096_5123 = state_5090__$1;
(statearr_5096_5123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (13))){
var state_5090__$1 = state_5090;
var statearr_5097_5124 = state_5090__$1;
(statearr_5097_5124[(2)] = null);

(statearr_5097_5124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (6))){
var inst_5067 = (state_5090[(7)]);
var inst_5073 = p.call(null,inst_5067);
var state_5090__$1 = state_5090;
if(cljs.core.truth_(inst_5073)){
var statearr_5098_5125 = state_5090__$1;
(statearr_5098_5125[(1)] = (9));

} else {
var statearr_5099_5126 = state_5090__$1;
(statearr_5099_5126[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (3))){
var inst_5088 = (state_5090[(2)]);
var state_5090__$1 = state_5090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5090__$1,inst_5088);
} else {
if((state_val_5091 === (12))){
var state_5090__$1 = state_5090;
var statearr_5100_5127 = state_5090__$1;
(statearr_5100_5127[(2)] = null);

(statearr_5100_5127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (2))){
var state_5090__$1 = state_5090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5090__$1,(4),ch);
} else {
if((state_val_5091 === (11))){
var inst_5067 = (state_5090[(7)]);
var inst_5077 = (state_5090[(2)]);
var state_5090__$1 = state_5090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5090__$1,(8),inst_5077,inst_5067);
} else {
if((state_val_5091 === (9))){
var state_5090__$1 = state_5090;
var statearr_5101_5128 = state_5090__$1;
(statearr_5101_5128[(2)] = tc);

(statearr_5101_5128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (5))){
var inst_5070 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5071 = cljs.core.async.close_BANG_.call(null,fc);
var state_5090__$1 = (function (){var statearr_5102 = state_5090;
(statearr_5102[(8)] = inst_5070);

return statearr_5102;
})();
var statearr_5103_5129 = state_5090__$1;
(statearr_5103_5129[(2)] = inst_5071);

(statearr_5103_5129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (14))){
var inst_5084 = (state_5090[(2)]);
var state_5090__$1 = state_5090;
var statearr_5104_5130 = state_5090__$1;
(statearr_5104_5130[(2)] = inst_5084);

(statearr_5104_5130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (10))){
var state_5090__$1 = state_5090;
var statearr_5105_5131 = state_5090__$1;
(statearr_5105_5131[(2)] = fc);

(statearr_5105_5131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5091 === (8))){
var inst_5079 = (state_5090[(2)]);
var state_5090__$1 = state_5090;
if(cljs.core.truth_(inst_5079)){
var statearr_5106_5132 = state_5090__$1;
(statearr_5106_5132[(1)] = (12));

} else {
var statearr_5107_5133 = state_5090__$1;
(statearr_5107_5133[(1)] = (13));

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
});})(c__1363__auto___5119,tc,fc))
;
return ((function (switch__1298__auto__,c__1363__auto___5119,tc,fc){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_5111 = [null,null,null,null,null,null,null,null,null];
(statearr_5111[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_5111[(1)] = (1));

return statearr_5111;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_5090){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_5090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e5112){if((e5112 instanceof Object)){
var ex__1302__auto__ = e5112;
var statearr_5113_5134 = state_5090;
(statearr_5113_5134[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5135 = state_5090;
state_5090 = G__5135;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_5090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_5090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___5119,tc,fc))
})();
var state__1365__auto__ = (function (){var statearr_5114 = f__1364__auto__.call(null);
(statearr_5114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___5119);

return statearr_5114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___5119,tc,fc))
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
var c__1363__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto__){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto__){
return (function (state_5182){
var state_val_5183 = (state_5182[(1)]);
if((state_val_5183 === (1))){
var inst_5168 = init;
var state_5182__$1 = (function (){var statearr_5184 = state_5182;
(statearr_5184[(7)] = inst_5168);

return statearr_5184;
})();
var statearr_5185_5200 = state_5182__$1;
(statearr_5185_5200[(2)] = null);

(statearr_5185_5200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5183 === (2))){
var state_5182__$1 = state_5182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5182__$1,(4),ch);
} else {
if((state_val_5183 === (3))){
var inst_5180 = (state_5182[(2)]);
var state_5182__$1 = state_5182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5182__$1,inst_5180);
} else {
if((state_val_5183 === (4))){
var inst_5171 = (state_5182[(8)]);
var inst_5171__$1 = (state_5182[(2)]);
var inst_5172 = (inst_5171__$1 == null);
var state_5182__$1 = (function (){var statearr_5186 = state_5182;
(statearr_5186[(8)] = inst_5171__$1);

return statearr_5186;
})();
if(cljs.core.truth_(inst_5172)){
var statearr_5187_5201 = state_5182__$1;
(statearr_5187_5201[(1)] = (5));

} else {
var statearr_5188_5202 = state_5182__$1;
(statearr_5188_5202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5183 === (5))){
var inst_5168 = (state_5182[(7)]);
var state_5182__$1 = state_5182;
var statearr_5189_5203 = state_5182__$1;
(statearr_5189_5203[(2)] = inst_5168);

(statearr_5189_5203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5183 === (6))){
var inst_5171 = (state_5182[(8)]);
var inst_5168 = (state_5182[(7)]);
var inst_5175 = f.call(null,inst_5168,inst_5171);
var inst_5168__$1 = inst_5175;
var state_5182__$1 = (function (){var statearr_5190 = state_5182;
(statearr_5190[(7)] = inst_5168__$1);

return statearr_5190;
})();
var statearr_5191_5204 = state_5182__$1;
(statearr_5191_5204[(2)] = null);

(statearr_5191_5204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5183 === (7))){
var inst_5178 = (state_5182[(2)]);
var state_5182__$1 = state_5182;
var statearr_5192_5205 = state_5182__$1;
(statearr_5192_5205[(2)] = inst_5178);

(statearr_5192_5205[(1)] = (3));


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
});})(c__1363__auto__))
;
return ((function (switch__1298__auto__,c__1363__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1299__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1299__auto____0 = (function (){
var statearr_5196 = [null,null,null,null,null,null,null,null,null];
(statearr_5196[(0)] = cljs$core$async$reduce_$_state_machine__1299__auto__);

(statearr_5196[(1)] = (1));

return statearr_5196;
});
var cljs$core$async$reduce_$_state_machine__1299__auto____1 = (function (state_5182){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_5182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e5197){if((e5197 instanceof Object)){
var ex__1302__auto__ = e5197;
var statearr_5198_5206 = state_5182;
(statearr_5198_5206[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5207 = state_5182;
state_5182 = G__5207;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1299__auto__ = function(state_5182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1299__auto____1.call(this,state_5182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1299__auto____0;
cljs$core$async$reduce_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1299__auto____1;
return cljs$core$async$reduce_$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto__))
})();
var state__1365__auto__ = (function (){var statearr_5199 = f__1364__auto__.call(null);
(statearr_5199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto__);

return statearr_5199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto__))
);

return c__1363__auto__;
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
var args5208 = [];
var len__3300__auto___5260 = arguments.length;
var i__3301__auto___5261 = (0);
while(true){
if((i__3301__auto___5261 < len__3300__auto___5260)){
args5208.push((arguments[i__3301__auto___5261]));

var G__5262 = (i__3301__auto___5261 + (1));
i__3301__auto___5261 = G__5262;
continue;
} else {
}
break;
}

var G__5210 = args5208.length;
switch (G__5210) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5208.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1363__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto__){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto__){
return (function (state_5235){
var state_val_5236 = (state_5235[(1)]);
if((state_val_5236 === (7))){
var inst_5217 = (state_5235[(2)]);
var state_5235__$1 = state_5235;
var statearr_5237_5264 = state_5235__$1;
(statearr_5237_5264[(2)] = inst_5217);

(statearr_5237_5264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (1))){
var inst_5211 = cljs.core.seq.call(null,coll);
var inst_5212 = inst_5211;
var state_5235__$1 = (function (){var statearr_5238 = state_5235;
(statearr_5238[(7)] = inst_5212);

return statearr_5238;
})();
var statearr_5239_5265 = state_5235__$1;
(statearr_5239_5265[(2)] = null);

(statearr_5239_5265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (4))){
var inst_5212 = (state_5235[(7)]);
var inst_5215 = cljs.core.first.call(null,inst_5212);
var state_5235__$1 = state_5235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5235__$1,(7),ch,inst_5215);
} else {
if((state_val_5236 === (13))){
var inst_5229 = (state_5235[(2)]);
var state_5235__$1 = state_5235;
var statearr_5240_5266 = state_5235__$1;
(statearr_5240_5266[(2)] = inst_5229);

(statearr_5240_5266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (6))){
var inst_5220 = (state_5235[(2)]);
var state_5235__$1 = state_5235;
if(cljs.core.truth_(inst_5220)){
var statearr_5241_5267 = state_5235__$1;
(statearr_5241_5267[(1)] = (8));

} else {
var statearr_5242_5268 = state_5235__$1;
(statearr_5242_5268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (3))){
var inst_5233 = (state_5235[(2)]);
var state_5235__$1 = state_5235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5235__$1,inst_5233);
} else {
if((state_val_5236 === (12))){
var state_5235__$1 = state_5235;
var statearr_5243_5269 = state_5235__$1;
(statearr_5243_5269[(2)] = null);

(statearr_5243_5269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (2))){
var inst_5212 = (state_5235[(7)]);
var state_5235__$1 = state_5235;
if(cljs.core.truth_(inst_5212)){
var statearr_5244_5270 = state_5235__$1;
(statearr_5244_5270[(1)] = (4));

} else {
var statearr_5245_5271 = state_5235__$1;
(statearr_5245_5271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (11))){
var inst_5226 = cljs.core.async.close_BANG_.call(null,ch);
var state_5235__$1 = state_5235;
var statearr_5246_5272 = state_5235__$1;
(statearr_5246_5272[(2)] = inst_5226);

(statearr_5246_5272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (9))){
var state_5235__$1 = state_5235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5247_5273 = state_5235__$1;
(statearr_5247_5273[(1)] = (11));

} else {
var statearr_5248_5274 = state_5235__$1;
(statearr_5248_5274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (5))){
var inst_5212 = (state_5235[(7)]);
var state_5235__$1 = state_5235;
var statearr_5249_5275 = state_5235__$1;
(statearr_5249_5275[(2)] = inst_5212);

(statearr_5249_5275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (10))){
var inst_5231 = (state_5235[(2)]);
var state_5235__$1 = state_5235;
var statearr_5250_5276 = state_5235__$1;
(statearr_5250_5276[(2)] = inst_5231);

(statearr_5250_5276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5236 === (8))){
var inst_5212 = (state_5235[(7)]);
var inst_5222 = cljs.core.next.call(null,inst_5212);
var inst_5212__$1 = inst_5222;
var state_5235__$1 = (function (){var statearr_5251 = state_5235;
(statearr_5251[(7)] = inst_5212__$1);

return statearr_5251;
})();
var statearr_5252_5277 = state_5235__$1;
(statearr_5252_5277[(2)] = null);

(statearr_5252_5277[(1)] = (2));


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
});})(c__1363__auto__))
;
return ((function (switch__1298__auto__,c__1363__auto__){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_5256 = [null,null,null,null,null,null,null,null];
(statearr_5256[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_5256[(1)] = (1));

return statearr_5256;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_5235){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_5235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e5257){if((e5257 instanceof Object)){
var ex__1302__auto__ = e5257;
var statearr_5258_5278 = state_5235;
(statearr_5258_5278[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5279 = state_5235;
state_5235 = G__5279;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_5235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_5235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto__))
})();
var state__1365__auto__ = (function (){var statearr_5259 = f__1364__auto__.call(null);
(statearr_5259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto__);

return statearr_5259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto__))
);

return c__1363__auto__;
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
if(typeof cljs.core.async.t5505 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5505 = (function (mult,ch,cs,meta5506){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta5506 = meta5506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_5507,meta5506__$1){
var self__ = this;
var _5507__$1 = this;
return (new cljs.core.async.t5505(self__.mult,self__.ch,self__.cs,meta5506__$1));
});})(cs))
;

cljs.core.async.t5505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_5507){
var self__ = this;
var _5507__$1 = this;
return self__.meta5506;
});})(cs))
;

cljs.core.async.t5505.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t5505.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t5505.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t5505.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t5505.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t5505.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta5506","meta5506",-1735758214,null)], null);
});})(cs))
;

cljs.core.async.t5505.cljs$lang$type = true;

cljs.core.async.t5505.cljs$lang$ctorStr = "cljs.core.async/t5505";

cljs.core.async.t5505.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5505");
});})(cs))
;

cljs.core.async.__GT_t5505 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t5505(mult__$1,ch__$1,cs__$1,meta5506){
return (new cljs.core.async.t5505(mult__$1,ch__$1,cs__$1,meta5506));
});})(cs))
;

}

return (new cljs.core.async.t5505(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__1363__auto___5726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___5726,cs,m,dchan,dctr,done){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___5726,cs,m,dchan,dctr,done){
return (function (state_5638){
var state_val_5639 = (state_5638[(1)]);
if((state_val_5639 === (7))){
var inst_5634 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5640_5727 = state_5638__$1;
(statearr_5640_5727[(2)] = inst_5634);

(statearr_5640_5727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (20))){
var inst_5539 = (state_5638[(7)]);
var inst_5549 = cljs.core.first.call(null,inst_5539);
var inst_5550 = cljs.core.nth.call(null,inst_5549,(0),null);
var inst_5551 = cljs.core.nth.call(null,inst_5549,(1),null);
var state_5638__$1 = (function (){var statearr_5641 = state_5638;
(statearr_5641[(8)] = inst_5550);

return statearr_5641;
})();
if(cljs.core.truth_(inst_5551)){
var statearr_5642_5728 = state_5638__$1;
(statearr_5642_5728[(1)] = (22));

} else {
var statearr_5643_5729 = state_5638__$1;
(statearr_5643_5729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (27))){
var inst_5579 = (state_5638[(9)]);
var inst_5510 = (state_5638[(10)]);
var inst_5581 = (state_5638[(11)]);
var inst_5586 = (state_5638[(12)]);
var inst_5586__$1 = cljs.core._nth.call(null,inst_5579,inst_5581);
var inst_5587 = cljs.core.async.put_BANG_.call(null,inst_5586__$1,inst_5510,done);
var state_5638__$1 = (function (){var statearr_5644 = state_5638;
(statearr_5644[(12)] = inst_5586__$1);

return statearr_5644;
})();
if(cljs.core.truth_(inst_5587)){
var statearr_5645_5730 = state_5638__$1;
(statearr_5645_5730[(1)] = (30));

} else {
var statearr_5646_5731 = state_5638__$1;
(statearr_5646_5731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (1))){
var state_5638__$1 = state_5638;
var statearr_5647_5732 = state_5638__$1;
(statearr_5647_5732[(2)] = null);

(statearr_5647_5732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (24))){
var inst_5539 = (state_5638[(7)]);
var inst_5556 = (state_5638[(2)]);
var inst_5557 = cljs.core.next.call(null,inst_5539);
var inst_5519 = inst_5557;
var inst_5520 = null;
var inst_5521 = (0);
var inst_5522 = (0);
var state_5638__$1 = (function (){var statearr_5648 = state_5638;
(statearr_5648[(13)] = inst_5556);

(statearr_5648[(14)] = inst_5520);

(statearr_5648[(15)] = inst_5521);

(statearr_5648[(16)] = inst_5519);

(statearr_5648[(17)] = inst_5522);

return statearr_5648;
})();
var statearr_5649_5733 = state_5638__$1;
(statearr_5649_5733[(2)] = null);

(statearr_5649_5733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (39))){
var state_5638__$1 = state_5638;
var statearr_5653_5734 = state_5638__$1;
(statearr_5653_5734[(2)] = null);

(statearr_5653_5734[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (4))){
var inst_5510 = (state_5638[(10)]);
var inst_5510__$1 = (state_5638[(2)]);
var inst_5511 = (inst_5510__$1 == null);
var state_5638__$1 = (function (){var statearr_5654 = state_5638;
(statearr_5654[(10)] = inst_5510__$1);

return statearr_5654;
})();
if(cljs.core.truth_(inst_5511)){
var statearr_5655_5735 = state_5638__$1;
(statearr_5655_5735[(1)] = (5));

} else {
var statearr_5656_5736 = state_5638__$1;
(statearr_5656_5736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (15))){
var inst_5520 = (state_5638[(14)]);
var inst_5521 = (state_5638[(15)]);
var inst_5519 = (state_5638[(16)]);
var inst_5522 = (state_5638[(17)]);
var inst_5535 = (state_5638[(2)]);
var inst_5536 = (inst_5522 + (1));
var tmp5650 = inst_5520;
var tmp5651 = inst_5521;
var tmp5652 = inst_5519;
var inst_5519__$1 = tmp5652;
var inst_5520__$1 = tmp5650;
var inst_5521__$1 = tmp5651;
var inst_5522__$1 = inst_5536;
var state_5638__$1 = (function (){var statearr_5657 = state_5638;
(statearr_5657[(18)] = inst_5535);

(statearr_5657[(14)] = inst_5520__$1);

(statearr_5657[(15)] = inst_5521__$1);

(statearr_5657[(16)] = inst_5519__$1);

(statearr_5657[(17)] = inst_5522__$1);

return statearr_5657;
})();
var statearr_5658_5737 = state_5638__$1;
(statearr_5658_5737[(2)] = null);

(statearr_5658_5737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (21))){
var inst_5560 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5662_5738 = state_5638__$1;
(statearr_5662_5738[(2)] = inst_5560);

(statearr_5662_5738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (31))){
var inst_5586 = (state_5638[(12)]);
var inst_5590 = done.call(null,null);
var inst_5591 = cljs.core.async.untap_STAR_.call(null,m,inst_5586);
var state_5638__$1 = (function (){var statearr_5663 = state_5638;
(statearr_5663[(19)] = inst_5590);

return statearr_5663;
})();
var statearr_5664_5739 = state_5638__$1;
(statearr_5664_5739[(2)] = inst_5591);

(statearr_5664_5739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (32))){
var inst_5579 = (state_5638[(9)]);
var inst_5578 = (state_5638[(20)]);
var inst_5580 = (state_5638[(21)]);
var inst_5581 = (state_5638[(11)]);
var inst_5593 = (state_5638[(2)]);
var inst_5594 = (inst_5581 + (1));
var tmp5659 = inst_5579;
var tmp5660 = inst_5578;
var tmp5661 = inst_5580;
var inst_5578__$1 = tmp5660;
var inst_5579__$1 = tmp5659;
var inst_5580__$1 = tmp5661;
var inst_5581__$1 = inst_5594;
var state_5638__$1 = (function (){var statearr_5665 = state_5638;
(statearr_5665[(9)] = inst_5579__$1);

(statearr_5665[(20)] = inst_5578__$1);

(statearr_5665[(21)] = inst_5580__$1);

(statearr_5665[(11)] = inst_5581__$1);

(statearr_5665[(22)] = inst_5593);

return statearr_5665;
})();
var statearr_5666_5740 = state_5638__$1;
(statearr_5666_5740[(2)] = null);

(statearr_5666_5740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (40))){
var inst_5606 = (state_5638[(23)]);
var inst_5610 = done.call(null,null);
var inst_5611 = cljs.core.async.untap_STAR_.call(null,m,inst_5606);
var state_5638__$1 = (function (){var statearr_5667 = state_5638;
(statearr_5667[(24)] = inst_5610);

return statearr_5667;
})();
var statearr_5668_5741 = state_5638__$1;
(statearr_5668_5741[(2)] = inst_5611);

(statearr_5668_5741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (33))){
var inst_5597 = (state_5638[(25)]);
var inst_5599 = cljs.core.chunked_seq_QMARK_.call(null,inst_5597);
var state_5638__$1 = state_5638;
if(inst_5599){
var statearr_5669_5742 = state_5638__$1;
(statearr_5669_5742[(1)] = (36));

} else {
var statearr_5670_5743 = state_5638__$1;
(statearr_5670_5743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (13))){
var inst_5529 = (state_5638[(26)]);
var inst_5532 = cljs.core.async.close_BANG_.call(null,inst_5529);
var state_5638__$1 = state_5638;
var statearr_5671_5744 = state_5638__$1;
(statearr_5671_5744[(2)] = inst_5532);

(statearr_5671_5744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (22))){
var inst_5550 = (state_5638[(8)]);
var inst_5553 = cljs.core.async.close_BANG_.call(null,inst_5550);
var state_5638__$1 = state_5638;
var statearr_5672_5745 = state_5638__$1;
(statearr_5672_5745[(2)] = inst_5553);

(statearr_5672_5745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (36))){
var inst_5597 = (state_5638[(25)]);
var inst_5601 = cljs.core.chunk_first.call(null,inst_5597);
var inst_5602 = cljs.core.chunk_rest.call(null,inst_5597);
var inst_5603 = cljs.core.count.call(null,inst_5601);
var inst_5578 = inst_5602;
var inst_5579 = inst_5601;
var inst_5580 = inst_5603;
var inst_5581 = (0);
var state_5638__$1 = (function (){var statearr_5673 = state_5638;
(statearr_5673[(9)] = inst_5579);

(statearr_5673[(20)] = inst_5578);

(statearr_5673[(21)] = inst_5580);

(statearr_5673[(11)] = inst_5581);

return statearr_5673;
})();
var statearr_5674_5746 = state_5638__$1;
(statearr_5674_5746[(2)] = null);

(statearr_5674_5746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (41))){
var inst_5597 = (state_5638[(25)]);
var inst_5613 = (state_5638[(2)]);
var inst_5614 = cljs.core.next.call(null,inst_5597);
var inst_5578 = inst_5614;
var inst_5579 = null;
var inst_5580 = (0);
var inst_5581 = (0);
var state_5638__$1 = (function (){var statearr_5675 = state_5638;
(statearr_5675[(9)] = inst_5579);

(statearr_5675[(20)] = inst_5578);

(statearr_5675[(21)] = inst_5580);

(statearr_5675[(11)] = inst_5581);

(statearr_5675[(27)] = inst_5613);

return statearr_5675;
})();
var statearr_5676_5747 = state_5638__$1;
(statearr_5676_5747[(2)] = null);

(statearr_5676_5747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (43))){
var state_5638__$1 = state_5638;
var statearr_5677_5748 = state_5638__$1;
(statearr_5677_5748[(2)] = null);

(statearr_5677_5748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (29))){
var inst_5622 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5678_5749 = state_5638__$1;
(statearr_5678_5749[(2)] = inst_5622);

(statearr_5678_5749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (44))){
var inst_5631 = (state_5638[(2)]);
var state_5638__$1 = (function (){var statearr_5679 = state_5638;
(statearr_5679[(28)] = inst_5631);

return statearr_5679;
})();
var statearr_5680_5750 = state_5638__$1;
(statearr_5680_5750[(2)] = null);

(statearr_5680_5750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (6))){
var inst_5570 = (state_5638[(29)]);
var inst_5569 = cljs.core.deref.call(null,cs);
var inst_5570__$1 = cljs.core.keys.call(null,inst_5569);
var inst_5571 = cljs.core.count.call(null,inst_5570__$1);
var inst_5572 = cljs.core.reset_BANG_.call(null,dctr,inst_5571);
var inst_5577 = cljs.core.seq.call(null,inst_5570__$1);
var inst_5578 = inst_5577;
var inst_5579 = null;
var inst_5580 = (0);
var inst_5581 = (0);
var state_5638__$1 = (function (){var statearr_5681 = state_5638;
(statearr_5681[(9)] = inst_5579);

(statearr_5681[(20)] = inst_5578);

(statearr_5681[(21)] = inst_5580);

(statearr_5681[(11)] = inst_5581);

(statearr_5681[(29)] = inst_5570__$1);

(statearr_5681[(30)] = inst_5572);

return statearr_5681;
})();
var statearr_5682_5751 = state_5638__$1;
(statearr_5682_5751[(2)] = null);

(statearr_5682_5751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (28))){
var inst_5578 = (state_5638[(20)]);
var inst_5597 = (state_5638[(25)]);
var inst_5597__$1 = cljs.core.seq.call(null,inst_5578);
var state_5638__$1 = (function (){var statearr_5683 = state_5638;
(statearr_5683[(25)] = inst_5597__$1);

return statearr_5683;
})();
if(inst_5597__$1){
var statearr_5684_5752 = state_5638__$1;
(statearr_5684_5752[(1)] = (33));

} else {
var statearr_5685_5753 = state_5638__$1;
(statearr_5685_5753[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (25))){
var inst_5580 = (state_5638[(21)]);
var inst_5581 = (state_5638[(11)]);
var inst_5583 = (inst_5581 < inst_5580);
var inst_5584 = inst_5583;
var state_5638__$1 = state_5638;
if(cljs.core.truth_(inst_5584)){
var statearr_5686_5754 = state_5638__$1;
(statearr_5686_5754[(1)] = (27));

} else {
var statearr_5687_5755 = state_5638__$1;
(statearr_5687_5755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (34))){
var state_5638__$1 = state_5638;
var statearr_5688_5756 = state_5638__$1;
(statearr_5688_5756[(2)] = null);

(statearr_5688_5756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (17))){
var state_5638__$1 = state_5638;
var statearr_5689_5757 = state_5638__$1;
(statearr_5689_5757[(2)] = null);

(statearr_5689_5757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (3))){
var inst_5636 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5638__$1,inst_5636);
} else {
if((state_val_5639 === (12))){
var inst_5565 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5690_5758 = state_5638__$1;
(statearr_5690_5758[(2)] = inst_5565);

(statearr_5690_5758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (2))){
var state_5638__$1 = state_5638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5638__$1,(4),ch);
} else {
if((state_val_5639 === (23))){
var state_5638__$1 = state_5638;
var statearr_5691_5759 = state_5638__$1;
(statearr_5691_5759[(2)] = null);

(statearr_5691_5759[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (35))){
var inst_5620 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5692_5760 = state_5638__$1;
(statearr_5692_5760[(2)] = inst_5620);

(statearr_5692_5760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (19))){
var inst_5539 = (state_5638[(7)]);
var inst_5543 = cljs.core.chunk_first.call(null,inst_5539);
var inst_5544 = cljs.core.chunk_rest.call(null,inst_5539);
var inst_5545 = cljs.core.count.call(null,inst_5543);
var inst_5519 = inst_5544;
var inst_5520 = inst_5543;
var inst_5521 = inst_5545;
var inst_5522 = (0);
var state_5638__$1 = (function (){var statearr_5693 = state_5638;
(statearr_5693[(14)] = inst_5520);

(statearr_5693[(15)] = inst_5521);

(statearr_5693[(16)] = inst_5519);

(statearr_5693[(17)] = inst_5522);

return statearr_5693;
})();
var statearr_5694_5761 = state_5638__$1;
(statearr_5694_5761[(2)] = null);

(statearr_5694_5761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (11))){
var inst_5539 = (state_5638[(7)]);
var inst_5519 = (state_5638[(16)]);
var inst_5539__$1 = cljs.core.seq.call(null,inst_5519);
var state_5638__$1 = (function (){var statearr_5695 = state_5638;
(statearr_5695[(7)] = inst_5539__$1);

return statearr_5695;
})();
if(inst_5539__$1){
var statearr_5696_5762 = state_5638__$1;
(statearr_5696_5762[(1)] = (16));

} else {
var statearr_5697_5763 = state_5638__$1;
(statearr_5697_5763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (9))){
var inst_5567 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5698_5764 = state_5638__$1;
(statearr_5698_5764[(2)] = inst_5567);

(statearr_5698_5764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (5))){
var inst_5517 = cljs.core.deref.call(null,cs);
var inst_5518 = cljs.core.seq.call(null,inst_5517);
var inst_5519 = inst_5518;
var inst_5520 = null;
var inst_5521 = (0);
var inst_5522 = (0);
var state_5638__$1 = (function (){var statearr_5699 = state_5638;
(statearr_5699[(14)] = inst_5520);

(statearr_5699[(15)] = inst_5521);

(statearr_5699[(16)] = inst_5519);

(statearr_5699[(17)] = inst_5522);

return statearr_5699;
})();
var statearr_5700_5765 = state_5638__$1;
(statearr_5700_5765[(2)] = null);

(statearr_5700_5765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (14))){
var state_5638__$1 = state_5638;
var statearr_5701_5766 = state_5638__$1;
(statearr_5701_5766[(2)] = null);

(statearr_5701_5766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (45))){
var inst_5628 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5702_5767 = state_5638__$1;
(statearr_5702_5767[(2)] = inst_5628);

(statearr_5702_5767[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (26))){
var inst_5570 = (state_5638[(29)]);
var inst_5624 = (state_5638[(2)]);
var inst_5625 = cljs.core.seq.call(null,inst_5570);
var state_5638__$1 = (function (){var statearr_5703 = state_5638;
(statearr_5703[(31)] = inst_5624);

return statearr_5703;
})();
if(inst_5625){
var statearr_5704_5768 = state_5638__$1;
(statearr_5704_5768[(1)] = (42));

} else {
var statearr_5705_5769 = state_5638__$1;
(statearr_5705_5769[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (16))){
var inst_5539 = (state_5638[(7)]);
var inst_5541 = cljs.core.chunked_seq_QMARK_.call(null,inst_5539);
var state_5638__$1 = state_5638;
if(inst_5541){
var statearr_5706_5770 = state_5638__$1;
(statearr_5706_5770[(1)] = (19));

} else {
var statearr_5707_5771 = state_5638__$1;
(statearr_5707_5771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (38))){
var inst_5617 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5708_5772 = state_5638__$1;
(statearr_5708_5772[(2)] = inst_5617);

(statearr_5708_5772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (30))){
var state_5638__$1 = state_5638;
var statearr_5709_5773 = state_5638__$1;
(statearr_5709_5773[(2)] = null);

(statearr_5709_5773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (10))){
var inst_5520 = (state_5638[(14)]);
var inst_5522 = (state_5638[(17)]);
var inst_5528 = cljs.core._nth.call(null,inst_5520,inst_5522);
var inst_5529 = cljs.core.nth.call(null,inst_5528,(0),null);
var inst_5530 = cljs.core.nth.call(null,inst_5528,(1),null);
var state_5638__$1 = (function (){var statearr_5710 = state_5638;
(statearr_5710[(26)] = inst_5529);

return statearr_5710;
})();
if(cljs.core.truth_(inst_5530)){
var statearr_5711_5774 = state_5638__$1;
(statearr_5711_5774[(1)] = (13));

} else {
var statearr_5712_5775 = state_5638__$1;
(statearr_5712_5775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (18))){
var inst_5563 = (state_5638[(2)]);
var state_5638__$1 = state_5638;
var statearr_5713_5776 = state_5638__$1;
(statearr_5713_5776[(2)] = inst_5563);

(statearr_5713_5776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (42))){
var state_5638__$1 = state_5638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5638__$1,(45),dchan);
} else {
if((state_val_5639 === (37))){
var inst_5510 = (state_5638[(10)]);
var inst_5597 = (state_5638[(25)]);
var inst_5606 = (state_5638[(23)]);
var inst_5606__$1 = cljs.core.first.call(null,inst_5597);
var inst_5607 = cljs.core.async.put_BANG_.call(null,inst_5606__$1,inst_5510,done);
var state_5638__$1 = (function (){var statearr_5714 = state_5638;
(statearr_5714[(23)] = inst_5606__$1);

return statearr_5714;
})();
if(cljs.core.truth_(inst_5607)){
var statearr_5715_5777 = state_5638__$1;
(statearr_5715_5777[(1)] = (39));

} else {
var statearr_5716_5778 = state_5638__$1;
(statearr_5716_5778[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5639 === (8))){
var inst_5521 = (state_5638[(15)]);
var inst_5522 = (state_5638[(17)]);
var inst_5524 = (inst_5522 < inst_5521);
var inst_5525 = inst_5524;
var state_5638__$1 = state_5638;
if(cljs.core.truth_(inst_5525)){
var statearr_5717_5779 = state_5638__$1;
(statearr_5717_5779[(1)] = (10));

} else {
var statearr_5718_5780 = state_5638__$1;
(statearr_5718_5780[(1)] = (11));

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
});})(c__1363__auto___5726,cs,m,dchan,dctr,done))
;
return ((function (switch__1298__auto__,c__1363__auto___5726,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1299__auto__ = null;
var cljs$core$async$mult_$_state_machine__1299__auto____0 = (function (){
var statearr_5722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5722[(0)] = cljs$core$async$mult_$_state_machine__1299__auto__);

(statearr_5722[(1)] = (1));

return statearr_5722;
});
var cljs$core$async$mult_$_state_machine__1299__auto____1 = (function (state_5638){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_5638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e5723){if((e5723 instanceof Object)){
var ex__1302__auto__ = e5723;
var statearr_5724_5781 = state_5638;
(statearr_5724_5781[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5782 = state_5638;
state_5638 = G__5782;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1299__auto__ = function(state_5638){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1299__auto____1.call(this,state_5638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1299__auto____0;
cljs$core$async$mult_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1299__auto____1;
return cljs$core$async$mult_$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___5726,cs,m,dchan,dctr,done))
})();
var state__1365__auto__ = (function (){var statearr_5725 = f__1364__auto__.call(null);
(statearr_5725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___5726);

return statearr_5725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___5726,cs,m,dchan,dctr,done))
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
var args5783 = [];
var len__3300__auto___5786 = arguments.length;
var i__3301__auto___5787 = (0);
while(true){
if((i__3301__auto___5787 < len__3300__auto___5786)){
args5783.push((arguments[i__3301__auto___5787]));

var G__5788 = (i__3301__auto___5787 + (1));
i__3301__auto___5787 = G__5788;
continue;
} else {
}
break;
}

var G__5785 = args5783.length;
switch (G__5785) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5783.length)].join('')));

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
var len__3300__auto___5802 = arguments.length;
var i__3301__auto___5803 = (0);
while(true){
if((i__3301__auto___5803 < len__3300__auto___5802)){
args__3303__auto__.push((arguments[i__3301__auto___5803]));

var G__5804 = (i__3301__auto___5803 + (1));
i__3301__auto___5803 = G__5804;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((3) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5796){
var map__5797 = p__5796;
var map__5797__$1 = ((((!((map__5797 == null)))?((((map__5797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5797):map__5797);
var opts = map__5797__$1;
var statearr_5799_5805 = state;
(statearr_5799_5805[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__5797,map__5797__$1,opts){
return (function (val){
var statearr_5800_5806 = state;
(statearr_5800_5806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5797,map__5797__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_5801_5807 = state;
(statearr_5801_5807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5792){
var G__5793 = cljs.core.first.call(null,seq5792);
var seq5792__$1 = cljs.core.next.call(null,seq5792);
var G__5794 = cljs.core.first.call(null,seq5792__$1);
var seq5792__$2 = cljs.core.next.call(null,seq5792__$1);
var G__5795 = cljs.core.first.call(null,seq5792__$2);
var seq5792__$3 = cljs.core.next.call(null,seq5792__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5793,G__5794,G__5795,seq5792__$3);
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
if(typeof cljs.core.async.t5971 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5971 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5972){
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
this.meta5972 = meta5972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5973,meta5972__$1){
var self__ = this;
var _5973__$1 = this;
return (new cljs.core.async.t5971(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5973){
var self__ = this;
var _5973__$1 = this;
return self__.meta5972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t5971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5972","meta5972",-948074344,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5971.cljs$lang$type = true;

cljs.core.async.t5971.cljs$lang$ctorStr = "cljs.core.async/t5971";

cljs.core.async.t5971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t5971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t5971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t5971(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5972){
return (new cljs.core.async.t5971(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t5971(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1363__auto___6134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_6071){
var state_val_6072 = (state_6071[(1)]);
if((state_val_6072 === (7))){
var inst_5989 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6073_6135 = state_6071__$1;
(statearr_6073_6135[(2)] = inst_5989);

(statearr_6073_6135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (20))){
var inst_6001 = (state_6071[(7)]);
var state_6071__$1 = state_6071;
var statearr_6074_6136 = state_6071__$1;
(statearr_6074_6136[(2)] = inst_6001);

(statearr_6074_6136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (27))){
var state_6071__$1 = state_6071;
var statearr_6075_6137 = state_6071__$1;
(statearr_6075_6137[(2)] = null);

(statearr_6075_6137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (1))){
var inst_5977 = (state_6071[(8)]);
var inst_5977__$1 = calc_state.call(null);
var inst_5979 = (inst_5977__$1 == null);
var inst_5980 = cljs.core.not.call(null,inst_5979);
var state_6071__$1 = (function (){var statearr_6076 = state_6071;
(statearr_6076[(8)] = inst_5977__$1);

return statearr_6076;
})();
if(inst_5980){
var statearr_6077_6138 = state_6071__$1;
(statearr_6077_6138[(1)] = (2));

} else {
var statearr_6078_6139 = state_6071__$1;
(statearr_6078_6139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (24))){
var inst_6045 = (state_6071[(9)]);
var inst_6031 = (state_6071[(10)]);
var inst_6024 = (state_6071[(11)]);
var inst_6045__$1 = inst_6024.call(null,inst_6031);
var state_6071__$1 = (function (){var statearr_6079 = state_6071;
(statearr_6079[(9)] = inst_6045__$1);

return statearr_6079;
})();
if(cljs.core.truth_(inst_6045__$1)){
var statearr_6080_6140 = state_6071__$1;
(statearr_6080_6140[(1)] = (29));

} else {
var statearr_6081_6141 = state_6071__$1;
(statearr_6081_6141[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (4))){
var inst_5992 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_5992)){
var statearr_6082_6142 = state_6071__$1;
(statearr_6082_6142[(1)] = (8));

} else {
var statearr_6083_6143 = state_6071__$1;
(statearr_6083_6143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (15))){
var inst_6018 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6018)){
var statearr_6084_6144 = state_6071__$1;
(statearr_6084_6144[(1)] = (19));

} else {
var statearr_6085_6145 = state_6071__$1;
(statearr_6085_6145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (21))){
var inst_6023 = (state_6071[(12)]);
var inst_6023__$1 = (state_6071[(2)]);
var inst_6024 = cljs.core.get.call(null,inst_6023__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6025 = cljs.core.get.call(null,inst_6023__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6026 = cljs.core.get.call(null,inst_6023__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_6071__$1 = (function (){var statearr_6086 = state_6071;
(statearr_6086[(13)] = inst_6025);

(statearr_6086[(12)] = inst_6023__$1);

(statearr_6086[(11)] = inst_6024);

return statearr_6086;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_6071__$1,(22),inst_6026);
} else {
if((state_val_6072 === (31))){
var inst_6053 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6053)){
var statearr_6087_6146 = state_6071__$1;
(statearr_6087_6146[(1)] = (32));

} else {
var statearr_6088_6147 = state_6071__$1;
(statearr_6088_6147[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (32))){
var inst_6030 = (state_6071[(14)]);
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6071__$1,(35),out,inst_6030);
} else {
if((state_val_6072 === (33))){
var inst_6023 = (state_6071[(12)]);
var inst_6001 = inst_6023;
var state_6071__$1 = (function (){var statearr_6089 = state_6071;
(statearr_6089[(7)] = inst_6001);

return statearr_6089;
})();
var statearr_6090_6148 = state_6071__$1;
(statearr_6090_6148[(2)] = null);

(statearr_6090_6148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (13))){
var inst_6001 = (state_6071[(7)]);
var inst_6008 = inst_6001.cljs$lang$protocol_mask$partition0$;
var inst_6009 = (inst_6008 & (64));
var inst_6010 = inst_6001.cljs$core$ISeq$;
var inst_6011 = (inst_6009) || (inst_6010);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6011)){
var statearr_6091_6149 = state_6071__$1;
(statearr_6091_6149[(1)] = (16));

} else {
var statearr_6092_6150 = state_6071__$1;
(statearr_6092_6150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (22))){
var inst_6030 = (state_6071[(14)]);
var inst_6031 = (state_6071[(10)]);
var inst_6029 = (state_6071[(2)]);
var inst_6030__$1 = cljs.core.nth.call(null,inst_6029,(0),null);
var inst_6031__$1 = cljs.core.nth.call(null,inst_6029,(1),null);
var inst_6032 = (inst_6030__$1 == null);
var inst_6033 = cljs.core._EQ_.call(null,inst_6031__$1,change);
var inst_6034 = (inst_6032) || (inst_6033);
var state_6071__$1 = (function (){var statearr_6093 = state_6071;
(statearr_6093[(14)] = inst_6030__$1);

(statearr_6093[(10)] = inst_6031__$1);

return statearr_6093;
})();
if(cljs.core.truth_(inst_6034)){
var statearr_6094_6151 = state_6071__$1;
(statearr_6094_6151[(1)] = (23));

} else {
var statearr_6095_6152 = state_6071__$1;
(statearr_6095_6152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (36))){
var inst_6023 = (state_6071[(12)]);
var inst_6001 = inst_6023;
var state_6071__$1 = (function (){var statearr_6096 = state_6071;
(statearr_6096[(7)] = inst_6001);

return statearr_6096;
})();
var statearr_6097_6153 = state_6071__$1;
(statearr_6097_6153[(2)] = null);

(statearr_6097_6153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (29))){
var inst_6045 = (state_6071[(9)]);
var state_6071__$1 = state_6071;
var statearr_6098_6154 = state_6071__$1;
(statearr_6098_6154[(2)] = inst_6045);

(statearr_6098_6154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (6))){
var state_6071__$1 = state_6071;
var statearr_6099_6155 = state_6071__$1;
(statearr_6099_6155[(2)] = false);

(statearr_6099_6155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (28))){
var inst_6041 = (state_6071[(2)]);
var inst_6042 = calc_state.call(null);
var inst_6001 = inst_6042;
var state_6071__$1 = (function (){var statearr_6100 = state_6071;
(statearr_6100[(15)] = inst_6041);

(statearr_6100[(7)] = inst_6001);

return statearr_6100;
})();
var statearr_6101_6156 = state_6071__$1;
(statearr_6101_6156[(2)] = null);

(statearr_6101_6156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (25))){
var inst_6067 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6102_6157 = state_6071__$1;
(statearr_6102_6157[(2)] = inst_6067);

(statearr_6102_6157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (34))){
var inst_6065 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6103_6158 = state_6071__$1;
(statearr_6103_6158[(2)] = inst_6065);

(statearr_6103_6158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (17))){
var state_6071__$1 = state_6071;
var statearr_6104_6159 = state_6071__$1;
(statearr_6104_6159[(2)] = false);

(statearr_6104_6159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (3))){
var state_6071__$1 = state_6071;
var statearr_6105_6160 = state_6071__$1;
(statearr_6105_6160[(2)] = false);

(statearr_6105_6160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (12))){
var inst_6069 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6071__$1,inst_6069);
} else {
if((state_val_6072 === (2))){
var inst_5977 = (state_6071[(8)]);
var inst_5982 = inst_5977.cljs$lang$protocol_mask$partition0$;
var inst_5983 = (inst_5982 & (64));
var inst_5984 = inst_5977.cljs$core$ISeq$;
var inst_5985 = (inst_5983) || (inst_5984);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_5985)){
var statearr_6106_6161 = state_6071__$1;
(statearr_6106_6161[(1)] = (5));

} else {
var statearr_6107_6162 = state_6071__$1;
(statearr_6107_6162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (23))){
var inst_6030 = (state_6071[(14)]);
var inst_6036 = (inst_6030 == null);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6036)){
var statearr_6108_6163 = state_6071__$1;
(statearr_6108_6163[(1)] = (26));

} else {
var statearr_6109_6164 = state_6071__$1;
(statearr_6109_6164[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (35))){
var inst_6056 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6056)){
var statearr_6110_6165 = state_6071__$1;
(statearr_6110_6165[(1)] = (36));

} else {
var statearr_6111_6166 = state_6071__$1;
(statearr_6111_6166[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (19))){
var inst_6001 = (state_6071[(7)]);
var inst_6020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_6001);
var state_6071__$1 = state_6071;
var statearr_6112_6167 = state_6071__$1;
(statearr_6112_6167[(2)] = inst_6020);

(statearr_6112_6167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (11))){
var inst_6001 = (state_6071[(7)]);
var inst_6005 = (inst_6001 == null);
var inst_6006 = cljs.core.not.call(null,inst_6005);
var state_6071__$1 = state_6071;
if(inst_6006){
var statearr_6113_6168 = state_6071__$1;
(statearr_6113_6168[(1)] = (13));

} else {
var statearr_6114_6169 = state_6071__$1;
(statearr_6114_6169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (9))){
var inst_5977 = (state_6071[(8)]);
var state_6071__$1 = state_6071;
var statearr_6115_6170 = state_6071__$1;
(statearr_6115_6170[(2)] = inst_5977);

(statearr_6115_6170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (5))){
var state_6071__$1 = state_6071;
var statearr_6116_6171 = state_6071__$1;
(statearr_6116_6171[(2)] = true);

(statearr_6116_6171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (14))){
var state_6071__$1 = state_6071;
var statearr_6117_6172 = state_6071__$1;
(statearr_6117_6172[(2)] = false);

(statearr_6117_6172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (26))){
var inst_6031 = (state_6071[(10)]);
var inst_6038 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_6031);
var state_6071__$1 = state_6071;
var statearr_6118_6173 = state_6071__$1;
(statearr_6118_6173[(2)] = inst_6038);

(statearr_6118_6173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (16))){
var state_6071__$1 = state_6071;
var statearr_6119_6174 = state_6071__$1;
(statearr_6119_6174[(2)] = true);

(statearr_6119_6174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (38))){
var inst_6061 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6120_6175 = state_6071__$1;
(statearr_6120_6175[(2)] = inst_6061);

(statearr_6120_6175[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (30))){
var inst_6025 = (state_6071[(13)]);
var inst_6031 = (state_6071[(10)]);
var inst_6024 = (state_6071[(11)]);
var inst_6048 = cljs.core.empty_QMARK_.call(null,inst_6024);
var inst_6049 = inst_6025.call(null,inst_6031);
var inst_6050 = cljs.core.not.call(null,inst_6049);
var inst_6051 = (inst_6048) && (inst_6050);
var state_6071__$1 = state_6071;
var statearr_6121_6176 = state_6071__$1;
(statearr_6121_6176[(2)] = inst_6051);

(statearr_6121_6176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (10))){
var inst_5977 = (state_6071[(8)]);
var inst_5997 = (state_6071[(2)]);
var inst_5998 = cljs.core.get.call(null,inst_5997,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5999 = cljs.core.get.call(null,inst_5997,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6000 = cljs.core.get.call(null,inst_5997,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_6001 = inst_5977;
var state_6071__$1 = (function (){var statearr_6122 = state_6071;
(statearr_6122[(16)] = inst_6000);

(statearr_6122[(17)] = inst_5999);

(statearr_6122[(7)] = inst_6001);

(statearr_6122[(18)] = inst_5998);

return statearr_6122;
})();
var statearr_6123_6177 = state_6071__$1;
(statearr_6123_6177[(2)] = null);

(statearr_6123_6177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (18))){
var inst_6015 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6124_6178 = state_6071__$1;
(statearr_6124_6178[(2)] = inst_6015);

(statearr_6124_6178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (37))){
var state_6071__$1 = state_6071;
var statearr_6125_6179 = state_6071__$1;
(statearr_6125_6179[(2)] = null);

(statearr_6125_6179[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (8))){
var inst_5977 = (state_6071[(8)]);
var inst_5994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5977);
var state_6071__$1 = state_6071;
var statearr_6126_6180 = state_6071__$1;
(statearr_6126_6180[(2)] = inst_5994);

(statearr_6126_6180[(1)] = (10));


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
});})(c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1298__auto__,c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1299__auto__ = null;
var cljs$core$async$mix_$_state_machine__1299__auto____0 = (function (){
var statearr_6130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6130[(0)] = cljs$core$async$mix_$_state_machine__1299__auto__);

(statearr_6130[(1)] = (1));

return statearr_6130;
});
var cljs$core$async$mix_$_state_machine__1299__auto____1 = (function (state_6071){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6131){if((e6131 instanceof Object)){
var ex__1302__auto__ = e6131;
var statearr_6132_6181 = state_6071;
(statearr_6132_6181[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6182 = state_6071;
state_6071 = G__6182;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1299__auto__ = function(state_6071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1299__auto____1.call(this,state_6071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1299__auto____0;
cljs$core$async$mix_$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1299__auto____1;
return cljs$core$async$mix_$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1365__auto__ = (function (){var statearr_6133 = f__1364__auto__.call(null);
(statearr_6133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6134);

return statearr_6133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args6185 = [];
var len__3300__auto___6188 = arguments.length;
var i__3301__auto___6189 = (0);
while(true){
if((i__3301__auto___6189 < len__3300__auto___6188)){
args6185.push((arguments[i__3301__auto___6189]));

var G__6190 = (i__3301__auto___6189 + (1));
i__3301__auto___6189 = G__6190;
continue;
} else {
}
break;
}

var G__6187 = args6185.length;
switch (G__6187) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6185.length)].join('')));

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
var args6193 = [];
var len__3300__auto___6318 = arguments.length;
var i__3301__auto___6319 = (0);
while(true){
if((i__3301__auto___6319 < len__3300__auto___6318)){
args6193.push((arguments[i__3301__auto___6319]));

var G__6320 = (i__3301__auto___6319 + (1));
i__3301__auto___6319 = G__6320;
continue;
} else {
}
break;
}

var G__6195 = args6193.length;
switch (G__6195) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6193.length)].join('')));

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
return (function (p1__6192_SHARP_){
if(cljs.core.truth_(p1__6192_SHARP_.call(null,topic))){
return p1__6192_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2789__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t6196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6196 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6197){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6197 = meta6197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_6198,meta6197__$1){
var self__ = this;
var _6198__$1 = this;
return (new cljs.core.async.t6196(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6197__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t6196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_6198){
var self__ = this;
var _6198__$1 = this;
return self__.meta6197;
});})(mults,ensure_mult))
;

cljs.core.async.t6196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t6196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t6196.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t6196.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t6196.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t6196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t6196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t6196.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6197","meta6197",-1313253864,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t6196.cljs$lang$type = true;

cljs.core.async.t6196.cljs$lang$ctorStr = "cljs.core.async/t6196";

cljs.core.async.t6196.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6196");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t6196 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t6196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6197){
return (new cljs.core.async.t6196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6197));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t6196(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1363__auto___6322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6322,mults,ensure_mult,p){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6322,mults,ensure_mult,p){
return (function (state_6270){
var state_val_6271 = (state_6270[(1)]);
if((state_val_6271 === (7))){
var inst_6266 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6272_6323 = state_6270__$1;
(statearr_6272_6323[(2)] = inst_6266);

(statearr_6272_6323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (20))){
var state_6270__$1 = state_6270;
var statearr_6273_6324 = state_6270__$1;
(statearr_6273_6324[(2)] = null);

(statearr_6273_6324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (1))){
var state_6270__$1 = state_6270;
var statearr_6274_6325 = state_6270__$1;
(statearr_6274_6325[(2)] = null);

(statearr_6274_6325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (24))){
var inst_6249 = (state_6270[(7)]);
var inst_6258 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_6249);
var state_6270__$1 = state_6270;
var statearr_6275_6326 = state_6270__$1;
(statearr_6275_6326[(2)] = inst_6258);

(statearr_6275_6326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (4))){
var inst_6201 = (state_6270[(8)]);
var inst_6201__$1 = (state_6270[(2)]);
var inst_6202 = (inst_6201__$1 == null);
var state_6270__$1 = (function (){var statearr_6276 = state_6270;
(statearr_6276[(8)] = inst_6201__$1);

return statearr_6276;
})();
if(cljs.core.truth_(inst_6202)){
var statearr_6277_6327 = state_6270__$1;
(statearr_6277_6327[(1)] = (5));

} else {
var statearr_6278_6328 = state_6270__$1;
(statearr_6278_6328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (15))){
var inst_6243 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6279_6329 = state_6270__$1;
(statearr_6279_6329[(2)] = inst_6243);

(statearr_6279_6329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (21))){
var inst_6263 = (state_6270[(2)]);
var state_6270__$1 = (function (){var statearr_6280 = state_6270;
(statearr_6280[(9)] = inst_6263);

return statearr_6280;
})();
var statearr_6281_6330 = state_6270__$1;
(statearr_6281_6330[(2)] = null);

(statearr_6281_6330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (13))){
var inst_6225 = (state_6270[(10)]);
var inst_6227 = cljs.core.chunked_seq_QMARK_.call(null,inst_6225);
var state_6270__$1 = state_6270;
if(inst_6227){
var statearr_6282_6331 = state_6270__$1;
(statearr_6282_6331[(1)] = (16));

} else {
var statearr_6283_6332 = state_6270__$1;
(statearr_6283_6332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (22))){
var inst_6255 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
if(cljs.core.truth_(inst_6255)){
var statearr_6284_6333 = state_6270__$1;
(statearr_6284_6333[(1)] = (23));

} else {
var statearr_6285_6334 = state_6270__$1;
(statearr_6285_6334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (6))){
var inst_6249 = (state_6270[(7)]);
var inst_6251 = (state_6270[(11)]);
var inst_6201 = (state_6270[(8)]);
var inst_6249__$1 = topic_fn.call(null,inst_6201);
var inst_6250 = cljs.core.deref.call(null,mults);
var inst_6251__$1 = cljs.core.get.call(null,inst_6250,inst_6249__$1);
var state_6270__$1 = (function (){var statearr_6286 = state_6270;
(statearr_6286[(7)] = inst_6249__$1);

(statearr_6286[(11)] = inst_6251__$1);

return statearr_6286;
})();
if(cljs.core.truth_(inst_6251__$1)){
var statearr_6287_6335 = state_6270__$1;
(statearr_6287_6335[(1)] = (19));

} else {
var statearr_6288_6336 = state_6270__$1;
(statearr_6288_6336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (25))){
var inst_6260 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6289_6337 = state_6270__$1;
(statearr_6289_6337[(2)] = inst_6260);

(statearr_6289_6337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (17))){
var inst_6225 = (state_6270[(10)]);
var inst_6234 = cljs.core.first.call(null,inst_6225);
var inst_6235 = cljs.core.async.muxch_STAR_.call(null,inst_6234);
var inst_6236 = cljs.core.async.close_BANG_.call(null,inst_6235);
var inst_6237 = cljs.core.next.call(null,inst_6225);
var inst_6211 = inst_6237;
var inst_6212 = null;
var inst_6213 = (0);
var inst_6214 = (0);
var state_6270__$1 = (function (){var statearr_6290 = state_6270;
(statearr_6290[(12)] = inst_6236);

(statearr_6290[(13)] = inst_6211);

(statearr_6290[(14)] = inst_6214);

(statearr_6290[(15)] = inst_6212);

(statearr_6290[(16)] = inst_6213);

return statearr_6290;
})();
var statearr_6291_6338 = state_6270__$1;
(statearr_6291_6338[(2)] = null);

(statearr_6291_6338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (3))){
var inst_6268 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6270__$1,inst_6268);
} else {
if((state_val_6271 === (12))){
var inst_6245 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6292_6339 = state_6270__$1;
(statearr_6292_6339[(2)] = inst_6245);

(statearr_6292_6339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (2))){
var state_6270__$1 = state_6270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6270__$1,(4),ch);
} else {
if((state_val_6271 === (23))){
var state_6270__$1 = state_6270;
var statearr_6293_6340 = state_6270__$1;
(statearr_6293_6340[(2)] = null);

(statearr_6293_6340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (19))){
var inst_6251 = (state_6270[(11)]);
var inst_6201 = (state_6270[(8)]);
var inst_6253 = cljs.core.async.muxch_STAR_.call(null,inst_6251);
var state_6270__$1 = state_6270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6270__$1,(22),inst_6253,inst_6201);
} else {
if((state_val_6271 === (11))){
var inst_6211 = (state_6270[(13)]);
var inst_6225 = (state_6270[(10)]);
var inst_6225__$1 = cljs.core.seq.call(null,inst_6211);
var state_6270__$1 = (function (){var statearr_6294 = state_6270;
(statearr_6294[(10)] = inst_6225__$1);

return statearr_6294;
})();
if(inst_6225__$1){
var statearr_6295_6341 = state_6270__$1;
(statearr_6295_6341[(1)] = (13));

} else {
var statearr_6296_6342 = state_6270__$1;
(statearr_6296_6342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (9))){
var inst_6247 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6297_6343 = state_6270__$1;
(statearr_6297_6343[(2)] = inst_6247);

(statearr_6297_6343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (5))){
var inst_6208 = cljs.core.deref.call(null,mults);
var inst_6209 = cljs.core.vals.call(null,inst_6208);
var inst_6210 = cljs.core.seq.call(null,inst_6209);
var inst_6211 = inst_6210;
var inst_6212 = null;
var inst_6213 = (0);
var inst_6214 = (0);
var state_6270__$1 = (function (){var statearr_6298 = state_6270;
(statearr_6298[(13)] = inst_6211);

(statearr_6298[(14)] = inst_6214);

(statearr_6298[(15)] = inst_6212);

(statearr_6298[(16)] = inst_6213);

return statearr_6298;
})();
var statearr_6299_6344 = state_6270__$1;
(statearr_6299_6344[(2)] = null);

(statearr_6299_6344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (14))){
var state_6270__$1 = state_6270;
var statearr_6303_6345 = state_6270__$1;
(statearr_6303_6345[(2)] = null);

(statearr_6303_6345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (16))){
var inst_6225 = (state_6270[(10)]);
var inst_6229 = cljs.core.chunk_first.call(null,inst_6225);
var inst_6230 = cljs.core.chunk_rest.call(null,inst_6225);
var inst_6231 = cljs.core.count.call(null,inst_6229);
var inst_6211 = inst_6230;
var inst_6212 = inst_6229;
var inst_6213 = inst_6231;
var inst_6214 = (0);
var state_6270__$1 = (function (){var statearr_6304 = state_6270;
(statearr_6304[(13)] = inst_6211);

(statearr_6304[(14)] = inst_6214);

(statearr_6304[(15)] = inst_6212);

(statearr_6304[(16)] = inst_6213);

return statearr_6304;
})();
var statearr_6305_6346 = state_6270__$1;
(statearr_6305_6346[(2)] = null);

(statearr_6305_6346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (10))){
var inst_6211 = (state_6270[(13)]);
var inst_6214 = (state_6270[(14)]);
var inst_6212 = (state_6270[(15)]);
var inst_6213 = (state_6270[(16)]);
var inst_6219 = cljs.core._nth.call(null,inst_6212,inst_6214);
var inst_6220 = cljs.core.async.muxch_STAR_.call(null,inst_6219);
var inst_6221 = cljs.core.async.close_BANG_.call(null,inst_6220);
var inst_6222 = (inst_6214 + (1));
var tmp6300 = inst_6211;
var tmp6301 = inst_6212;
var tmp6302 = inst_6213;
var inst_6211__$1 = tmp6300;
var inst_6212__$1 = tmp6301;
var inst_6213__$1 = tmp6302;
var inst_6214__$1 = inst_6222;
var state_6270__$1 = (function (){var statearr_6306 = state_6270;
(statearr_6306[(13)] = inst_6211__$1);

(statearr_6306[(17)] = inst_6221);

(statearr_6306[(14)] = inst_6214__$1);

(statearr_6306[(15)] = inst_6212__$1);

(statearr_6306[(16)] = inst_6213__$1);

return statearr_6306;
})();
var statearr_6307_6347 = state_6270__$1;
(statearr_6307_6347[(2)] = null);

(statearr_6307_6347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (18))){
var inst_6240 = (state_6270[(2)]);
var state_6270__$1 = state_6270;
var statearr_6308_6348 = state_6270__$1;
(statearr_6308_6348[(2)] = inst_6240);

(statearr_6308_6348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6271 === (8))){
var inst_6214 = (state_6270[(14)]);
var inst_6213 = (state_6270[(16)]);
var inst_6216 = (inst_6214 < inst_6213);
var inst_6217 = inst_6216;
var state_6270__$1 = state_6270;
if(cljs.core.truth_(inst_6217)){
var statearr_6309_6349 = state_6270__$1;
(statearr_6309_6349[(1)] = (10));

} else {
var statearr_6310_6350 = state_6270__$1;
(statearr_6310_6350[(1)] = (11));

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
});})(c__1363__auto___6322,mults,ensure_mult,p))
;
return ((function (switch__1298__auto__,c__1363__auto___6322,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6314[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6314[(1)] = (1));

return statearr_6314;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6270){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6315){if((e6315 instanceof Object)){
var ex__1302__auto__ = e6315;
var statearr_6316_6351 = state_6270;
(statearr_6316_6351[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6352 = state_6270;
state_6270 = G__6352;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6322,mults,ensure_mult,p))
})();
var state__1365__auto__ = (function (){var statearr_6317 = f__1364__auto__.call(null);
(statearr_6317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6322);

return statearr_6317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6322,mults,ensure_mult,p))
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
var args6353 = [];
var len__3300__auto___6356 = arguments.length;
var i__3301__auto___6357 = (0);
while(true){
if((i__3301__auto___6357 < len__3300__auto___6356)){
args6353.push((arguments[i__3301__auto___6357]));

var G__6358 = (i__3301__auto___6357 + (1));
i__3301__auto___6357 = G__6358;
continue;
} else {
}
break;
}

var G__6355 = args6353.length;
switch (G__6355) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6353.length)].join('')));

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
var args6360 = [];
var len__3300__auto___6363 = arguments.length;
var i__3301__auto___6364 = (0);
while(true){
if((i__3301__auto___6364 < len__3300__auto___6363)){
args6360.push((arguments[i__3301__auto___6364]));

var G__6365 = (i__3301__auto___6364 + (1));
i__3301__auto___6364 = G__6365;
continue;
} else {
}
break;
}

var G__6362 = args6360.length;
switch (G__6362) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6360.length)].join('')));

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
var args6367 = [];
var len__3300__auto___6438 = arguments.length;
var i__3301__auto___6439 = (0);
while(true){
if((i__3301__auto___6439 < len__3300__auto___6438)){
args6367.push((arguments[i__3301__auto___6439]));

var G__6440 = (i__3301__auto___6439 + (1));
i__3301__auto___6439 = G__6440;
continue;
} else {
}
break;
}

var G__6369 = args6367.length;
switch (G__6369) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6367.length)].join('')));

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
var c__1363__auto___6442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_6408){
var state_val_6409 = (state_6408[(1)]);
if((state_val_6409 === (7))){
var state_6408__$1 = state_6408;
var statearr_6410_6443 = state_6408__$1;
(statearr_6410_6443[(2)] = null);

(statearr_6410_6443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (1))){
var state_6408__$1 = state_6408;
var statearr_6411_6444 = state_6408__$1;
(statearr_6411_6444[(2)] = null);

(statearr_6411_6444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (4))){
var inst_6372 = (state_6408[(7)]);
var inst_6374 = (inst_6372 < cnt);
var state_6408__$1 = state_6408;
if(cljs.core.truth_(inst_6374)){
var statearr_6412_6445 = state_6408__$1;
(statearr_6412_6445[(1)] = (6));

} else {
var statearr_6413_6446 = state_6408__$1;
(statearr_6413_6446[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (15))){
var inst_6404 = (state_6408[(2)]);
var state_6408__$1 = state_6408;
var statearr_6414_6447 = state_6408__$1;
(statearr_6414_6447[(2)] = inst_6404);

(statearr_6414_6447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (13))){
var inst_6397 = cljs.core.async.close_BANG_.call(null,out);
var state_6408__$1 = state_6408;
var statearr_6415_6448 = state_6408__$1;
(statearr_6415_6448[(2)] = inst_6397);

(statearr_6415_6448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (6))){
var state_6408__$1 = state_6408;
var statearr_6416_6449 = state_6408__$1;
(statearr_6416_6449[(2)] = null);

(statearr_6416_6449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (3))){
var inst_6406 = (state_6408[(2)]);
var state_6408__$1 = state_6408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6408__$1,inst_6406);
} else {
if((state_val_6409 === (12))){
var inst_6394 = (state_6408[(8)]);
var inst_6394__$1 = (state_6408[(2)]);
var inst_6395 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6394__$1);
var state_6408__$1 = (function (){var statearr_6417 = state_6408;
(statearr_6417[(8)] = inst_6394__$1);

return statearr_6417;
})();
if(cljs.core.truth_(inst_6395)){
var statearr_6418_6450 = state_6408__$1;
(statearr_6418_6450[(1)] = (13));

} else {
var statearr_6419_6451 = state_6408__$1;
(statearr_6419_6451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (2))){
var inst_6371 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6372 = (0);
var state_6408__$1 = (function (){var statearr_6420 = state_6408;
(statearr_6420[(9)] = inst_6371);

(statearr_6420[(7)] = inst_6372);

return statearr_6420;
})();
var statearr_6421_6452 = state_6408__$1;
(statearr_6421_6452[(2)] = null);

(statearr_6421_6452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (11))){
var inst_6372 = (state_6408[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_6408,(10),Object,null,(9));
var inst_6381 = chs__$1.call(null,inst_6372);
var inst_6382 = done.call(null,inst_6372);
var inst_6383 = cljs.core.async.take_BANG_.call(null,inst_6381,inst_6382);
var state_6408__$1 = state_6408;
var statearr_6422_6453 = state_6408__$1;
(statearr_6422_6453[(2)] = inst_6383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (9))){
var inst_6372 = (state_6408[(7)]);
var inst_6385 = (state_6408[(2)]);
var inst_6386 = (inst_6372 + (1));
var inst_6372__$1 = inst_6386;
var state_6408__$1 = (function (){var statearr_6423 = state_6408;
(statearr_6423[(7)] = inst_6372__$1);

(statearr_6423[(10)] = inst_6385);

return statearr_6423;
})();
var statearr_6424_6454 = state_6408__$1;
(statearr_6424_6454[(2)] = null);

(statearr_6424_6454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (5))){
var inst_6392 = (state_6408[(2)]);
var state_6408__$1 = (function (){var statearr_6425 = state_6408;
(statearr_6425[(11)] = inst_6392);

return statearr_6425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6408__$1,(12),dchan);
} else {
if((state_val_6409 === (14))){
var inst_6394 = (state_6408[(8)]);
var inst_6399 = cljs.core.apply.call(null,f,inst_6394);
var state_6408__$1 = state_6408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6408__$1,(16),out,inst_6399);
} else {
if((state_val_6409 === (16))){
var inst_6401 = (state_6408[(2)]);
var state_6408__$1 = (function (){var statearr_6426 = state_6408;
(statearr_6426[(12)] = inst_6401);

return statearr_6426;
})();
var statearr_6427_6455 = state_6408__$1;
(statearr_6427_6455[(2)] = null);

(statearr_6427_6455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (10))){
var inst_6376 = (state_6408[(2)]);
var inst_6377 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6408__$1 = (function (){var statearr_6428 = state_6408;
(statearr_6428[(13)] = inst_6376);

return statearr_6428;
})();
var statearr_6429_6456 = state_6408__$1;
(statearr_6429_6456[(2)] = inst_6377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6409 === (8))){
var inst_6390 = (state_6408[(2)]);
var state_6408__$1 = state_6408;
var statearr_6430_6457 = state_6408__$1;
(statearr_6430_6457[(2)] = inst_6390);

(statearr_6430_6457[(1)] = (5));


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
});})(c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1298__auto__,c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6434[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6434[(1)] = (1));

return statearr_6434;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6408){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6435){if((e6435 instanceof Object)){
var ex__1302__auto__ = e6435;
var statearr_6436_6458 = state_6408;
(statearr_6436_6458[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6459 = state_6408;
state_6408 = G__6459;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1365__auto__ = (function (){var statearr_6437 = f__1364__auto__.call(null);
(statearr_6437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6442);

return statearr_6437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6442,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args6461 = [];
var len__3300__auto___6517 = arguments.length;
var i__3301__auto___6518 = (0);
while(true){
if((i__3301__auto___6518 < len__3300__auto___6517)){
args6461.push((arguments[i__3301__auto___6518]));

var G__6519 = (i__3301__auto___6518 + (1));
i__3301__auto___6518 = G__6519;
continue;
} else {
}
break;
}

var G__6463 = args6461.length;
switch (G__6463) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6461.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___6521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6521,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6521,out){
return (function (state_6493){
var state_val_6494 = (state_6493[(1)]);
if((state_val_6494 === (7))){
var inst_6473 = (state_6493[(7)]);
var inst_6472 = (state_6493[(8)]);
var inst_6472__$1 = (state_6493[(2)]);
var inst_6473__$1 = cljs.core.nth.call(null,inst_6472__$1,(0),null);
var inst_6474 = cljs.core.nth.call(null,inst_6472__$1,(1),null);
var inst_6475 = (inst_6473__$1 == null);
var state_6493__$1 = (function (){var statearr_6495 = state_6493;
(statearr_6495[(7)] = inst_6473__$1);

(statearr_6495[(9)] = inst_6474);

(statearr_6495[(8)] = inst_6472__$1);

return statearr_6495;
})();
if(cljs.core.truth_(inst_6475)){
var statearr_6496_6522 = state_6493__$1;
(statearr_6496_6522[(1)] = (8));

} else {
var statearr_6497_6523 = state_6493__$1;
(statearr_6497_6523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (1))){
var inst_6464 = cljs.core.vec.call(null,chs);
var inst_6465 = inst_6464;
var state_6493__$1 = (function (){var statearr_6498 = state_6493;
(statearr_6498[(10)] = inst_6465);

return statearr_6498;
})();
var statearr_6499_6524 = state_6493__$1;
(statearr_6499_6524[(2)] = null);

(statearr_6499_6524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (4))){
var inst_6465 = (state_6493[(10)]);
var state_6493__$1 = state_6493;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6493__$1,(7),inst_6465);
} else {
if((state_val_6494 === (6))){
var inst_6489 = (state_6493[(2)]);
var state_6493__$1 = state_6493;
var statearr_6500_6525 = state_6493__$1;
(statearr_6500_6525[(2)] = inst_6489);

(statearr_6500_6525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (3))){
var inst_6491 = (state_6493[(2)]);
var state_6493__$1 = state_6493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6493__$1,inst_6491);
} else {
if((state_val_6494 === (2))){
var inst_6465 = (state_6493[(10)]);
var inst_6467 = cljs.core.count.call(null,inst_6465);
var inst_6468 = (inst_6467 > (0));
var state_6493__$1 = state_6493;
if(cljs.core.truth_(inst_6468)){
var statearr_6502_6526 = state_6493__$1;
(statearr_6502_6526[(1)] = (4));

} else {
var statearr_6503_6527 = state_6493__$1;
(statearr_6503_6527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (11))){
var inst_6465 = (state_6493[(10)]);
var inst_6482 = (state_6493[(2)]);
var tmp6501 = inst_6465;
var inst_6465__$1 = tmp6501;
var state_6493__$1 = (function (){var statearr_6504 = state_6493;
(statearr_6504[(10)] = inst_6465__$1);

(statearr_6504[(11)] = inst_6482);

return statearr_6504;
})();
var statearr_6505_6528 = state_6493__$1;
(statearr_6505_6528[(2)] = null);

(statearr_6505_6528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (9))){
var inst_6473 = (state_6493[(7)]);
var state_6493__$1 = state_6493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6493__$1,(11),out,inst_6473);
} else {
if((state_val_6494 === (5))){
var inst_6487 = cljs.core.async.close_BANG_.call(null,out);
var state_6493__$1 = state_6493;
var statearr_6506_6529 = state_6493__$1;
(statearr_6506_6529[(2)] = inst_6487);

(statearr_6506_6529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (10))){
var inst_6485 = (state_6493[(2)]);
var state_6493__$1 = state_6493;
var statearr_6507_6530 = state_6493__$1;
(statearr_6507_6530[(2)] = inst_6485);

(statearr_6507_6530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6494 === (8))){
var inst_6465 = (state_6493[(10)]);
var inst_6473 = (state_6493[(7)]);
var inst_6474 = (state_6493[(9)]);
var inst_6472 = (state_6493[(8)]);
var inst_6477 = (function (){var cs = inst_6465;
var vec__6470 = inst_6472;
var v = inst_6473;
var c = inst_6474;
return ((function (cs,vec__6470,v,c,inst_6465,inst_6473,inst_6474,inst_6472,state_val_6494,c__1363__auto___6521,out){
return (function (p1__6460_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6460_SHARP_);
});
;})(cs,vec__6470,v,c,inst_6465,inst_6473,inst_6474,inst_6472,state_val_6494,c__1363__auto___6521,out))
})();
var inst_6478 = cljs.core.filterv.call(null,inst_6477,inst_6465);
var inst_6465__$1 = inst_6478;
var state_6493__$1 = (function (){var statearr_6508 = state_6493;
(statearr_6508[(10)] = inst_6465__$1);

return statearr_6508;
})();
var statearr_6509_6531 = state_6493__$1;
(statearr_6509_6531[(2)] = null);

(statearr_6509_6531[(1)] = (2));


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
});})(c__1363__auto___6521,out))
;
return ((function (switch__1298__auto__,c__1363__auto___6521,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6513[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6513[(1)] = (1));

return statearr_6513;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6493){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6514){if((e6514 instanceof Object)){
var ex__1302__auto__ = e6514;
var statearr_6515_6532 = state_6493;
(statearr_6515_6532[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6533 = state_6493;
state_6493 = G__6533;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6521,out))
})();
var state__1365__auto__ = (function (){var statearr_6516 = f__1364__auto__.call(null);
(statearr_6516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6521);

return statearr_6516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6521,out))
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
var args6534 = [];
var len__3300__auto___6583 = arguments.length;
var i__3301__auto___6584 = (0);
while(true){
if((i__3301__auto___6584 < len__3300__auto___6583)){
args6534.push((arguments[i__3301__auto___6584]));

var G__6585 = (i__3301__auto___6584 + (1));
i__3301__auto___6584 = G__6585;
continue;
} else {
}
break;
}

var G__6536 = args6534.length;
switch (G__6536) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6534.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___6587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6587,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6587,out){
return (function (state_6560){
var state_val_6561 = (state_6560[(1)]);
if((state_val_6561 === (7))){
var inst_6542 = (state_6560[(7)]);
var inst_6542__$1 = (state_6560[(2)]);
var inst_6543 = (inst_6542__$1 == null);
var inst_6544 = cljs.core.not.call(null,inst_6543);
var state_6560__$1 = (function (){var statearr_6562 = state_6560;
(statearr_6562[(7)] = inst_6542__$1);

return statearr_6562;
})();
if(inst_6544){
var statearr_6563_6588 = state_6560__$1;
(statearr_6563_6588[(1)] = (8));

} else {
var statearr_6564_6589 = state_6560__$1;
(statearr_6564_6589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (1))){
var inst_6537 = (0);
var state_6560__$1 = (function (){var statearr_6565 = state_6560;
(statearr_6565[(8)] = inst_6537);

return statearr_6565;
})();
var statearr_6566_6590 = state_6560__$1;
(statearr_6566_6590[(2)] = null);

(statearr_6566_6590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (4))){
var state_6560__$1 = state_6560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6560__$1,(7),ch);
} else {
if((state_val_6561 === (6))){
var inst_6555 = (state_6560[(2)]);
var state_6560__$1 = state_6560;
var statearr_6567_6591 = state_6560__$1;
(statearr_6567_6591[(2)] = inst_6555);

(statearr_6567_6591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (3))){
var inst_6557 = (state_6560[(2)]);
var inst_6558 = cljs.core.async.close_BANG_.call(null,out);
var state_6560__$1 = (function (){var statearr_6568 = state_6560;
(statearr_6568[(9)] = inst_6557);

return statearr_6568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6560__$1,inst_6558);
} else {
if((state_val_6561 === (2))){
var inst_6537 = (state_6560[(8)]);
var inst_6539 = (inst_6537 < n);
var state_6560__$1 = state_6560;
if(cljs.core.truth_(inst_6539)){
var statearr_6569_6592 = state_6560__$1;
(statearr_6569_6592[(1)] = (4));

} else {
var statearr_6570_6593 = state_6560__$1;
(statearr_6570_6593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (11))){
var inst_6537 = (state_6560[(8)]);
var inst_6547 = (state_6560[(2)]);
var inst_6548 = (inst_6537 + (1));
var inst_6537__$1 = inst_6548;
var state_6560__$1 = (function (){var statearr_6571 = state_6560;
(statearr_6571[(10)] = inst_6547);

(statearr_6571[(8)] = inst_6537__$1);

return statearr_6571;
})();
var statearr_6572_6594 = state_6560__$1;
(statearr_6572_6594[(2)] = null);

(statearr_6572_6594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (9))){
var state_6560__$1 = state_6560;
var statearr_6573_6595 = state_6560__$1;
(statearr_6573_6595[(2)] = null);

(statearr_6573_6595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (5))){
var state_6560__$1 = state_6560;
var statearr_6574_6596 = state_6560__$1;
(statearr_6574_6596[(2)] = null);

(statearr_6574_6596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (10))){
var inst_6552 = (state_6560[(2)]);
var state_6560__$1 = state_6560;
var statearr_6575_6597 = state_6560__$1;
(statearr_6575_6597[(2)] = inst_6552);

(statearr_6575_6597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6561 === (8))){
var inst_6542 = (state_6560[(7)]);
var state_6560__$1 = state_6560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6560__$1,(11),out,inst_6542);
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
});})(c__1363__auto___6587,out))
;
return ((function (switch__1298__auto__,c__1363__auto___6587,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6579[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6579[(1)] = (1));

return statearr_6579;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6560){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6580){if((e6580 instanceof Object)){
var ex__1302__auto__ = e6580;
var statearr_6581_6598 = state_6560;
(statearr_6581_6598[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6599 = state_6560;
state_6560 = G__6599;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6587,out))
})();
var state__1365__auto__ = (function (){var statearr_6582 = f__1364__auto__.call(null);
(statearr_6582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6587);

return statearr_6582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6587,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t6607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6607 = (function (map_LT_,f,ch,meta6608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta6608 = meta6608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6609,meta6608__$1){
var self__ = this;
var _6609__$1 = this;
return (new cljs.core.async.t6607(self__.map_LT_,self__.f,self__.ch,meta6608__$1));
});

cljs.core.async.t6607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6609){
var self__ = this;
var _6609__$1 = this;
return self__.meta6608;
});

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t6610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6610 = (function (map_LT_,f,ch,meta6608,_,fn1,meta6611){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta6608 = meta6608;
this._ = _;
this.fn1 = fn1;
this.meta6611 = meta6611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6612,meta6611__$1){
var self__ = this;
var _6612__$1 = this;
return (new cljs.core.async.t6610(self__.map_LT_,self__.f,self__.ch,self__.meta6608,self__._,self__.fn1,meta6611__$1));
});})(___$1))
;

cljs.core.async.t6610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6612){
var self__ = this;
var _6612__$1 = this;
return self__.meta6611;
});})(___$1))
;

cljs.core.async.t6610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t6610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6600_SHARP_){
return f1.call(null,(((p1__6600_SHARP_ == null))?null:self__.f.call(null,p1__6600_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t6610.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6608","meta6608",-1437498434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t6607","cljs.core.async/t6607",-508623397,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6611","meta6611",1574774441,null)], null);
});})(___$1))
;

cljs.core.async.t6610.cljs$lang$type = true;

cljs.core.async.t6610.cljs$lang$ctorStr = "cljs.core.async/t6610";

cljs.core.async.t6610.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6610");
});})(___$1))
;

cljs.core.async.__GT_t6610 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t6610(map_LT___$1,f__$1,ch__$1,meta6608__$1,___$2,fn1__$1,meta6611){
return (new cljs.core.async.t6610(map_LT___$1,f__$1,ch__$1,meta6608__$1,___$2,fn1__$1,meta6611));
});})(___$1))
;

}

return (new cljs.core.async.t6610(self__.map_LT_,self__.f,self__.ch,self__.meta6608,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t6607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6608","meta6608",-1437498434,null)], null);
});

cljs.core.async.t6607.cljs$lang$type = true;

cljs.core.async.t6607.cljs$lang$ctorStr = "cljs.core.async/t6607";

cljs.core.async.t6607.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6607");
});

cljs.core.async.__GT_t6607 = (function cljs$core$async$map_LT__$___GT_t6607(map_LT___$1,f__$1,ch__$1,meta6608){
return (new cljs.core.async.t6607(map_LT___$1,f__$1,ch__$1,meta6608));
});

}

return (new cljs.core.async.t6607(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t6616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6616 = (function (map_GT_,f,ch,meta6617){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta6617 = meta6617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6618,meta6617__$1){
var self__ = this;
var _6618__$1 = this;
return (new cljs.core.async.t6616(self__.map_GT_,self__.f,self__.ch,meta6617__$1));
});

cljs.core.async.t6616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6618){
var self__ = this;
var _6618__$1 = this;
return self__.meta6617;
});

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t6616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6617","meta6617",781424560,null)], null);
});

cljs.core.async.t6616.cljs$lang$type = true;

cljs.core.async.t6616.cljs$lang$ctorStr = "cljs.core.async/t6616";

cljs.core.async.t6616.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6616");
});

cljs.core.async.__GT_t6616 = (function cljs$core$async$map_GT__$___GT_t6616(map_GT___$1,f__$1,ch__$1,meta6617){
return (new cljs.core.async.t6616(map_GT___$1,f__$1,ch__$1,meta6617));
});

}

return (new cljs.core.async.t6616(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t6622 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6622 = (function (filter_GT_,p,ch,meta6623){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta6623 = meta6623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6624,meta6623__$1){
var self__ = this;
var _6624__$1 = this;
return (new cljs.core.async.t6622(self__.filter_GT_,self__.p,self__.ch,meta6623__$1));
});

cljs.core.async.t6622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6624){
var self__ = this;
var _6624__$1 = this;
return self__.meta6623;
});

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t6622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t6622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6623","meta6623",316620292,null)], null);
});

cljs.core.async.t6622.cljs$lang$type = true;

cljs.core.async.t6622.cljs$lang$ctorStr = "cljs.core.async/t6622";

cljs.core.async.t6622.cljs$lang$ctorPrWriter = (function (this__3004__auto__,writer__3005__auto__,opt__3006__auto__){
return cljs.core._write.call(null,writer__3005__auto__,"cljs.core.async/t6622");
});

cljs.core.async.__GT_t6622 = (function cljs$core$async$filter_GT__$___GT_t6622(filter_GT___$1,p__$1,ch__$1,meta6623){
return (new cljs.core.async.t6622(filter_GT___$1,p__$1,ch__$1,meta6623));
});

}

return (new cljs.core.async.t6622(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args6625 = [];
var len__3300__auto___6669 = arguments.length;
var i__3301__auto___6670 = (0);
while(true){
if((i__3301__auto___6670 < len__3300__auto___6669)){
args6625.push((arguments[i__3301__auto___6670]));

var G__6671 = (i__3301__auto___6670 + (1));
i__3301__auto___6670 = G__6671;
continue;
} else {
}
break;
}

var G__6627 = args6625.length;
switch (G__6627) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6625.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___6673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6673,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6673,out){
return (function (state_6648){
var state_val_6649 = (state_6648[(1)]);
if((state_val_6649 === (7))){
var inst_6644 = (state_6648[(2)]);
var state_6648__$1 = state_6648;
var statearr_6650_6674 = state_6648__$1;
(statearr_6650_6674[(2)] = inst_6644);

(statearr_6650_6674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (1))){
var state_6648__$1 = state_6648;
var statearr_6651_6675 = state_6648__$1;
(statearr_6651_6675[(2)] = null);

(statearr_6651_6675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (4))){
var inst_6630 = (state_6648[(7)]);
var inst_6630__$1 = (state_6648[(2)]);
var inst_6631 = (inst_6630__$1 == null);
var state_6648__$1 = (function (){var statearr_6652 = state_6648;
(statearr_6652[(7)] = inst_6630__$1);

return statearr_6652;
})();
if(cljs.core.truth_(inst_6631)){
var statearr_6653_6676 = state_6648__$1;
(statearr_6653_6676[(1)] = (5));

} else {
var statearr_6654_6677 = state_6648__$1;
(statearr_6654_6677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (6))){
var inst_6630 = (state_6648[(7)]);
var inst_6635 = p.call(null,inst_6630);
var state_6648__$1 = state_6648;
if(cljs.core.truth_(inst_6635)){
var statearr_6655_6678 = state_6648__$1;
(statearr_6655_6678[(1)] = (8));

} else {
var statearr_6656_6679 = state_6648__$1;
(statearr_6656_6679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (3))){
var inst_6646 = (state_6648[(2)]);
var state_6648__$1 = state_6648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6648__$1,inst_6646);
} else {
if((state_val_6649 === (2))){
var state_6648__$1 = state_6648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6648__$1,(4),ch);
} else {
if((state_val_6649 === (11))){
var inst_6638 = (state_6648[(2)]);
var state_6648__$1 = state_6648;
var statearr_6657_6680 = state_6648__$1;
(statearr_6657_6680[(2)] = inst_6638);

(statearr_6657_6680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (9))){
var state_6648__$1 = state_6648;
var statearr_6658_6681 = state_6648__$1;
(statearr_6658_6681[(2)] = null);

(statearr_6658_6681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (5))){
var inst_6633 = cljs.core.async.close_BANG_.call(null,out);
var state_6648__$1 = state_6648;
var statearr_6659_6682 = state_6648__$1;
(statearr_6659_6682[(2)] = inst_6633);

(statearr_6659_6682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (10))){
var inst_6641 = (state_6648[(2)]);
var state_6648__$1 = (function (){var statearr_6660 = state_6648;
(statearr_6660[(8)] = inst_6641);

return statearr_6660;
})();
var statearr_6661_6683 = state_6648__$1;
(statearr_6661_6683[(2)] = null);

(statearr_6661_6683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6649 === (8))){
var inst_6630 = (state_6648[(7)]);
var state_6648__$1 = state_6648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6648__$1,(11),out,inst_6630);
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
});})(c__1363__auto___6673,out))
;
return ((function (switch__1298__auto__,c__1363__auto___6673,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6665 = [null,null,null,null,null,null,null,null,null];
(statearr_6665[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6665[(1)] = (1));

return statearr_6665;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6648){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6666){if((e6666 instanceof Object)){
var ex__1302__auto__ = e6666;
var statearr_6667_6684 = state_6648;
(statearr_6667_6684[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6685 = state_6648;
state_6648 = G__6685;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6673,out))
})();
var state__1365__auto__ = (function (){var statearr_6668 = f__1364__auto__.call(null);
(statearr_6668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6673);

return statearr_6668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6673,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args6686 = [];
var len__3300__auto___6689 = arguments.length;
var i__3301__auto___6690 = (0);
while(true){
if((i__3301__auto___6690 < len__3300__auto___6689)){
args6686.push((arguments[i__3301__auto___6690]));

var G__6691 = (i__3301__auto___6690 + (1));
i__3301__auto___6690 = G__6691;
continue;
} else {
}
break;
}

var G__6688 = args6686.length;
switch (G__6688) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6686.length)].join('')));

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
var c__1363__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto__){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto__){
return (function (state_6858){
var state_val_6859 = (state_6858[(1)]);
if((state_val_6859 === (7))){
var inst_6854 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
var statearr_6860_6901 = state_6858__$1;
(statearr_6860_6901[(2)] = inst_6854);

(statearr_6860_6901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (20))){
var inst_6824 = (state_6858[(7)]);
var inst_6835 = (state_6858[(2)]);
var inst_6836 = cljs.core.next.call(null,inst_6824);
var inst_6810 = inst_6836;
var inst_6811 = null;
var inst_6812 = (0);
var inst_6813 = (0);
var state_6858__$1 = (function (){var statearr_6861 = state_6858;
(statearr_6861[(8)] = inst_6835);

(statearr_6861[(9)] = inst_6813);

(statearr_6861[(10)] = inst_6810);

(statearr_6861[(11)] = inst_6811);

(statearr_6861[(12)] = inst_6812);

return statearr_6861;
})();
var statearr_6862_6902 = state_6858__$1;
(statearr_6862_6902[(2)] = null);

(statearr_6862_6902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (1))){
var state_6858__$1 = state_6858;
var statearr_6863_6903 = state_6858__$1;
(statearr_6863_6903[(2)] = null);

(statearr_6863_6903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (4))){
var inst_6799 = (state_6858[(13)]);
var inst_6799__$1 = (state_6858[(2)]);
var inst_6800 = (inst_6799__$1 == null);
var state_6858__$1 = (function (){var statearr_6864 = state_6858;
(statearr_6864[(13)] = inst_6799__$1);

return statearr_6864;
})();
if(cljs.core.truth_(inst_6800)){
var statearr_6865_6904 = state_6858__$1;
(statearr_6865_6904[(1)] = (5));

} else {
var statearr_6866_6905 = state_6858__$1;
(statearr_6866_6905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (15))){
var state_6858__$1 = state_6858;
var statearr_6870_6906 = state_6858__$1;
(statearr_6870_6906[(2)] = null);

(statearr_6870_6906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (21))){
var state_6858__$1 = state_6858;
var statearr_6871_6907 = state_6858__$1;
(statearr_6871_6907[(2)] = null);

(statearr_6871_6907[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (13))){
var inst_6813 = (state_6858[(9)]);
var inst_6810 = (state_6858[(10)]);
var inst_6811 = (state_6858[(11)]);
var inst_6812 = (state_6858[(12)]);
var inst_6820 = (state_6858[(2)]);
var inst_6821 = (inst_6813 + (1));
var tmp6867 = inst_6810;
var tmp6868 = inst_6811;
var tmp6869 = inst_6812;
var inst_6810__$1 = tmp6867;
var inst_6811__$1 = tmp6868;
var inst_6812__$1 = tmp6869;
var inst_6813__$1 = inst_6821;
var state_6858__$1 = (function (){var statearr_6872 = state_6858;
(statearr_6872[(14)] = inst_6820);

(statearr_6872[(9)] = inst_6813__$1);

(statearr_6872[(10)] = inst_6810__$1);

(statearr_6872[(11)] = inst_6811__$1);

(statearr_6872[(12)] = inst_6812__$1);

return statearr_6872;
})();
var statearr_6873_6908 = state_6858__$1;
(statearr_6873_6908[(2)] = null);

(statearr_6873_6908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (22))){
var state_6858__$1 = state_6858;
var statearr_6874_6909 = state_6858__$1;
(statearr_6874_6909[(2)] = null);

(statearr_6874_6909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (6))){
var inst_6799 = (state_6858[(13)]);
var inst_6808 = f.call(null,inst_6799);
var inst_6809 = cljs.core.seq.call(null,inst_6808);
var inst_6810 = inst_6809;
var inst_6811 = null;
var inst_6812 = (0);
var inst_6813 = (0);
var state_6858__$1 = (function (){var statearr_6875 = state_6858;
(statearr_6875[(9)] = inst_6813);

(statearr_6875[(10)] = inst_6810);

(statearr_6875[(11)] = inst_6811);

(statearr_6875[(12)] = inst_6812);

return statearr_6875;
})();
var statearr_6876_6910 = state_6858__$1;
(statearr_6876_6910[(2)] = null);

(statearr_6876_6910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (17))){
var inst_6824 = (state_6858[(7)]);
var inst_6828 = cljs.core.chunk_first.call(null,inst_6824);
var inst_6829 = cljs.core.chunk_rest.call(null,inst_6824);
var inst_6830 = cljs.core.count.call(null,inst_6828);
var inst_6810 = inst_6829;
var inst_6811 = inst_6828;
var inst_6812 = inst_6830;
var inst_6813 = (0);
var state_6858__$1 = (function (){var statearr_6877 = state_6858;
(statearr_6877[(9)] = inst_6813);

(statearr_6877[(10)] = inst_6810);

(statearr_6877[(11)] = inst_6811);

(statearr_6877[(12)] = inst_6812);

return statearr_6877;
})();
var statearr_6878_6911 = state_6858__$1;
(statearr_6878_6911[(2)] = null);

(statearr_6878_6911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (3))){
var inst_6856 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6858__$1,inst_6856);
} else {
if((state_val_6859 === (12))){
var inst_6844 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
var statearr_6879_6912 = state_6858__$1;
(statearr_6879_6912[(2)] = inst_6844);

(statearr_6879_6912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (2))){
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6858__$1,(4),in$);
} else {
if((state_val_6859 === (23))){
var inst_6852 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
var statearr_6880_6913 = state_6858__$1;
(statearr_6880_6913[(2)] = inst_6852);

(statearr_6880_6913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (19))){
var inst_6839 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
var statearr_6881_6914 = state_6858__$1;
(statearr_6881_6914[(2)] = inst_6839);

(statearr_6881_6914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (11))){
var inst_6810 = (state_6858[(10)]);
var inst_6824 = (state_6858[(7)]);
var inst_6824__$1 = cljs.core.seq.call(null,inst_6810);
var state_6858__$1 = (function (){var statearr_6882 = state_6858;
(statearr_6882[(7)] = inst_6824__$1);

return statearr_6882;
})();
if(inst_6824__$1){
var statearr_6883_6915 = state_6858__$1;
(statearr_6883_6915[(1)] = (14));

} else {
var statearr_6884_6916 = state_6858__$1;
(statearr_6884_6916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (9))){
var inst_6846 = (state_6858[(2)]);
var inst_6847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6858__$1 = (function (){var statearr_6885 = state_6858;
(statearr_6885[(15)] = inst_6846);

return statearr_6885;
})();
if(cljs.core.truth_(inst_6847)){
var statearr_6886_6917 = state_6858__$1;
(statearr_6886_6917[(1)] = (21));

} else {
var statearr_6887_6918 = state_6858__$1;
(statearr_6887_6918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (5))){
var inst_6802 = cljs.core.async.close_BANG_.call(null,out);
var state_6858__$1 = state_6858;
var statearr_6888_6919 = state_6858__$1;
(statearr_6888_6919[(2)] = inst_6802);

(statearr_6888_6919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (14))){
var inst_6824 = (state_6858[(7)]);
var inst_6826 = cljs.core.chunked_seq_QMARK_.call(null,inst_6824);
var state_6858__$1 = state_6858;
if(inst_6826){
var statearr_6889_6920 = state_6858__$1;
(statearr_6889_6920[(1)] = (17));

} else {
var statearr_6890_6921 = state_6858__$1;
(statearr_6890_6921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (16))){
var inst_6842 = (state_6858[(2)]);
var state_6858__$1 = state_6858;
var statearr_6891_6922 = state_6858__$1;
(statearr_6891_6922[(2)] = inst_6842);

(statearr_6891_6922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6859 === (10))){
var inst_6813 = (state_6858[(9)]);
var inst_6811 = (state_6858[(11)]);
var inst_6818 = cljs.core._nth.call(null,inst_6811,inst_6813);
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6858__$1,(13),out,inst_6818);
} else {
if((state_val_6859 === (18))){
var inst_6824 = (state_6858[(7)]);
var inst_6833 = cljs.core.first.call(null,inst_6824);
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6858__$1,(20),out,inst_6833);
} else {
if((state_val_6859 === (8))){
var inst_6813 = (state_6858[(9)]);
var inst_6812 = (state_6858[(12)]);
var inst_6815 = (inst_6813 < inst_6812);
var inst_6816 = inst_6815;
var state_6858__$1 = state_6858;
if(cljs.core.truth_(inst_6816)){
var statearr_6892_6923 = state_6858__$1;
(statearr_6892_6923[(1)] = (10));

} else {
var statearr_6893_6924 = state_6858__$1;
(statearr_6893_6924[(1)] = (11));

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
});})(c__1363__auto__))
;
return ((function (switch__1298__auto__,c__1363__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____0 = (function (){
var statearr_6897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6897[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__);

(statearr_6897[(1)] = (1));

return statearr_6897;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____1 = (function (state_6858){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6898){if((e6898 instanceof Object)){
var ex__1302__auto__ = e6898;
var statearr_6899_6925 = state_6858;
(statearr_6899_6925[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6926 = state_6858;
state_6858 = G__6926;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__ = function(state_6858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____1.call(this,state_6858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1299__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto__))
})();
var state__1365__auto__ = (function (){var statearr_6900 = f__1364__auto__.call(null);
(statearr_6900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto__);

return statearr_6900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto__))
);

return c__1363__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args6927 = [];
var len__3300__auto___6930 = arguments.length;
var i__3301__auto___6931 = (0);
while(true){
if((i__3301__auto___6931 < len__3300__auto___6930)){
args6927.push((arguments[i__3301__auto___6931]));

var G__6932 = (i__3301__auto___6931 + (1));
i__3301__auto___6931 = G__6932;
continue;
} else {
}
break;
}

var G__6929 = args6927.length;
switch (G__6929) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6927.length)].join('')));

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
var args6934 = [];
var len__3300__auto___6937 = arguments.length;
var i__3301__auto___6938 = (0);
while(true){
if((i__3301__auto___6938 < len__3300__auto___6937)){
args6934.push((arguments[i__3301__auto___6938]));

var G__6939 = (i__3301__auto___6938 + (1));
i__3301__auto___6938 = G__6939;
continue;
} else {
}
break;
}

var G__6936 = args6934.length;
switch (G__6936) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6934.length)].join('')));

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
var args6941 = [];
var len__3300__auto___6992 = arguments.length;
var i__3301__auto___6993 = (0);
while(true){
if((i__3301__auto___6993 < len__3300__auto___6992)){
args6941.push((arguments[i__3301__auto___6993]));

var G__6994 = (i__3301__auto___6993 + (1));
i__3301__auto___6993 = G__6994;
continue;
} else {
}
break;
}

var G__6943 = args6941.length;
switch (G__6943) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6941.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___6996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___6996,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___6996,out){
return (function (state_6967){
var state_val_6968 = (state_6967[(1)]);
if((state_val_6968 === (7))){
var inst_6962 = (state_6967[(2)]);
var state_6967__$1 = state_6967;
var statearr_6969_6997 = state_6967__$1;
(statearr_6969_6997[(2)] = inst_6962);

(statearr_6969_6997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (1))){
var inst_6944 = null;
var state_6967__$1 = (function (){var statearr_6970 = state_6967;
(statearr_6970[(7)] = inst_6944);

return statearr_6970;
})();
var statearr_6971_6998 = state_6967__$1;
(statearr_6971_6998[(2)] = null);

(statearr_6971_6998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (4))){
var inst_6947 = (state_6967[(8)]);
var inst_6947__$1 = (state_6967[(2)]);
var inst_6948 = (inst_6947__$1 == null);
var inst_6949 = cljs.core.not.call(null,inst_6948);
var state_6967__$1 = (function (){var statearr_6972 = state_6967;
(statearr_6972[(8)] = inst_6947__$1);

return statearr_6972;
})();
if(inst_6949){
var statearr_6973_6999 = state_6967__$1;
(statearr_6973_6999[(1)] = (5));

} else {
var statearr_6974_7000 = state_6967__$1;
(statearr_6974_7000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (6))){
var state_6967__$1 = state_6967;
var statearr_6975_7001 = state_6967__$1;
(statearr_6975_7001[(2)] = null);

(statearr_6975_7001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (3))){
var inst_6964 = (state_6967[(2)]);
var inst_6965 = cljs.core.async.close_BANG_.call(null,out);
var state_6967__$1 = (function (){var statearr_6976 = state_6967;
(statearr_6976[(9)] = inst_6964);

return statearr_6976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6967__$1,inst_6965);
} else {
if((state_val_6968 === (2))){
var state_6967__$1 = state_6967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6967__$1,(4),ch);
} else {
if((state_val_6968 === (11))){
var inst_6947 = (state_6967[(8)]);
var inst_6956 = (state_6967[(2)]);
var inst_6944 = inst_6947;
var state_6967__$1 = (function (){var statearr_6977 = state_6967;
(statearr_6977[(7)] = inst_6944);

(statearr_6977[(10)] = inst_6956);

return statearr_6977;
})();
var statearr_6978_7002 = state_6967__$1;
(statearr_6978_7002[(2)] = null);

(statearr_6978_7002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (9))){
var inst_6947 = (state_6967[(8)]);
var state_6967__$1 = state_6967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6967__$1,(11),out,inst_6947);
} else {
if((state_val_6968 === (5))){
var inst_6947 = (state_6967[(8)]);
var inst_6944 = (state_6967[(7)]);
var inst_6951 = cljs.core._EQ_.call(null,inst_6947,inst_6944);
var state_6967__$1 = state_6967;
if(inst_6951){
var statearr_6980_7003 = state_6967__$1;
(statearr_6980_7003[(1)] = (8));

} else {
var statearr_6981_7004 = state_6967__$1;
(statearr_6981_7004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (10))){
var inst_6959 = (state_6967[(2)]);
var state_6967__$1 = state_6967;
var statearr_6982_7005 = state_6967__$1;
(statearr_6982_7005[(2)] = inst_6959);

(statearr_6982_7005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6968 === (8))){
var inst_6944 = (state_6967[(7)]);
var tmp6979 = inst_6944;
var inst_6944__$1 = tmp6979;
var state_6967__$1 = (function (){var statearr_6983 = state_6967;
(statearr_6983[(7)] = inst_6944__$1);

return statearr_6983;
})();
var statearr_6984_7006 = state_6967__$1;
(statearr_6984_7006[(2)] = null);

(statearr_6984_7006[(1)] = (2));


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
});})(c__1363__auto___6996,out))
;
return ((function (switch__1298__auto__,c__1363__auto___6996,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_6988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6988[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_6988[(1)] = (1));

return statearr_6988;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_6967){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_6967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e6989){if((e6989 instanceof Object)){
var ex__1302__auto__ = e6989;
var statearr_6990_7007 = state_6967;
(statearr_6990_7007[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7008 = state_6967;
state_6967 = G__7008;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_6967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_6967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___6996,out))
})();
var state__1365__auto__ = (function (){var statearr_6991 = f__1364__auto__.call(null);
(statearr_6991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___6996);

return statearr_6991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___6996,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args7009 = [];
var len__3300__auto___7079 = arguments.length;
var i__3301__auto___7080 = (0);
while(true){
if((i__3301__auto___7080 < len__3300__auto___7079)){
args7009.push((arguments[i__3301__auto___7080]));

var G__7081 = (i__3301__auto___7080 + (1));
i__3301__auto___7080 = G__7081;
continue;
} else {
}
break;
}

var G__7011 = args7009.length;
switch (G__7011) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7009.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___7083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___7083,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___7083,out){
return (function (state_7049){
var state_val_7050 = (state_7049[(1)]);
if((state_val_7050 === (7))){
var inst_7045 = (state_7049[(2)]);
var state_7049__$1 = state_7049;
var statearr_7051_7084 = state_7049__$1;
(statearr_7051_7084[(2)] = inst_7045);

(statearr_7051_7084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (1))){
var inst_7012 = (new Array(n));
var inst_7013 = inst_7012;
var inst_7014 = (0);
var state_7049__$1 = (function (){var statearr_7052 = state_7049;
(statearr_7052[(7)] = inst_7014);

(statearr_7052[(8)] = inst_7013);

return statearr_7052;
})();
var statearr_7053_7085 = state_7049__$1;
(statearr_7053_7085[(2)] = null);

(statearr_7053_7085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (4))){
var inst_7017 = (state_7049[(9)]);
var inst_7017__$1 = (state_7049[(2)]);
var inst_7018 = (inst_7017__$1 == null);
var inst_7019 = cljs.core.not.call(null,inst_7018);
var state_7049__$1 = (function (){var statearr_7054 = state_7049;
(statearr_7054[(9)] = inst_7017__$1);

return statearr_7054;
})();
if(inst_7019){
var statearr_7055_7086 = state_7049__$1;
(statearr_7055_7086[(1)] = (5));

} else {
var statearr_7056_7087 = state_7049__$1;
(statearr_7056_7087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (15))){
var inst_7039 = (state_7049[(2)]);
var state_7049__$1 = state_7049;
var statearr_7057_7088 = state_7049__$1;
(statearr_7057_7088[(2)] = inst_7039);

(statearr_7057_7088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (13))){
var state_7049__$1 = state_7049;
var statearr_7058_7089 = state_7049__$1;
(statearr_7058_7089[(2)] = null);

(statearr_7058_7089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (6))){
var inst_7014 = (state_7049[(7)]);
var inst_7035 = (inst_7014 > (0));
var state_7049__$1 = state_7049;
if(cljs.core.truth_(inst_7035)){
var statearr_7059_7090 = state_7049__$1;
(statearr_7059_7090[(1)] = (12));

} else {
var statearr_7060_7091 = state_7049__$1;
(statearr_7060_7091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (3))){
var inst_7047 = (state_7049[(2)]);
var state_7049__$1 = state_7049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7049__$1,inst_7047);
} else {
if((state_val_7050 === (12))){
var inst_7013 = (state_7049[(8)]);
var inst_7037 = cljs.core.vec.call(null,inst_7013);
var state_7049__$1 = state_7049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7049__$1,(15),out,inst_7037);
} else {
if((state_val_7050 === (2))){
var state_7049__$1 = state_7049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7049__$1,(4),ch);
} else {
if((state_val_7050 === (11))){
var inst_7029 = (state_7049[(2)]);
var inst_7030 = (new Array(n));
var inst_7013 = inst_7030;
var inst_7014 = (0);
var state_7049__$1 = (function (){var statearr_7061 = state_7049;
(statearr_7061[(7)] = inst_7014);

(statearr_7061[(8)] = inst_7013);

(statearr_7061[(10)] = inst_7029);

return statearr_7061;
})();
var statearr_7062_7092 = state_7049__$1;
(statearr_7062_7092[(2)] = null);

(statearr_7062_7092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (9))){
var inst_7013 = (state_7049[(8)]);
var inst_7027 = cljs.core.vec.call(null,inst_7013);
var state_7049__$1 = state_7049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7049__$1,(11),out,inst_7027);
} else {
if((state_val_7050 === (5))){
var inst_7014 = (state_7049[(7)]);
var inst_7013 = (state_7049[(8)]);
var inst_7017 = (state_7049[(9)]);
var inst_7022 = (state_7049[(11)]);
var inst_7021 = (inst_7013[inst_7014] = inst_7017);
var inst_7022__$1 = (inst_7014 + (1));
var inst_7023 = (inst_7022__$1 < n);
var state_7049__$1 = (function (){var statearr_7063 = state_7049;
(statearr_7063[(12)] = inst_7021);

(statearr_7063[(11)] = inst_7022__$1);

return statearr_7063;
})();
if(cljs.core.truth_(inst_7023)){
var statearr_7064_7093 = state_7049__$1;
(statearr_7064_7093[(1)] = (8));

} else {
var statearr_7065_7094 = state_7049__$1;
(statearr_7065_7094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (14))){
var inst_7042 = (state_7049[(2)]);
var inst_7043 = cljs.core.async.close_BANG_.call(null,out);
var state_7049__$1 = (function (){var statearr_7067 = state_7049;
(statearr_7067[(13)] = inst_7042);

return statearr_7067;
})();
var statearr_7068_7095 = state_7049__$1;
(statearr_7068_7095[(2)] = inst_7043);

(statearr_7068_7095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (10))){
var inst_7033 = (state_7049[(2)]);
var state_7049__$1 = state_7049;
var statearr_7069_7096 = state_7049__$1;
(statearr_7069_7096[(2)] = inst_7033);

(statearr_7069_7096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7050 === (8))){
var inst_7013 = (state_7049[(8)]);
var inst_7022 = (state_7049[(11)]);
var tmp7066 = inst_7013;
var inst_7013__$1 = tmp7066;
var inst_7014 = inst_7022;
var state_7049__$1 = (function (){var statearr_7070 = state_7049;
(statearr_7070[(7)] = inst_7014);

(statearr_7070[(8)] = inst_7013__$1);

return statearr_7070;
})();
var statearr_7071_7097 = state_7049__$1;
(statearr_7071_7097[(2)] = null);

(statearr_7071_7097[(1)] = (2));


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
});})(c__1363__auto___7083,out))
;
return ((function (switch__1298__auto__,c__1363__auto___7083,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_7075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7075[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_7075[(1)] = (1));

return statearr_7075;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_7049){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_7049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e7076){if((e7076 instanceof Object)){
var ex__1302__auto__ = e7076;
var statearr_7077_7098 = state_7049;
(statearr_7077_7098[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7099 = state_7049;
state_7049 = G__7099;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_7049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_7049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___7083,out))
})();
var state__1365__auto__ = (function (){var statearr_7078 = f__1364__auto__.call(null);
(statearr_7078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___7083);

return statearr_7078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___7083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args7100 = [];
var len__3300__auto___7174 = arguments.length;
var i__3301__auto___7175 = (0);
while(true){
if((i__3301__auto___7175 < len__3300__auto___7174)){
args7100.push((arguments[i__3301__auto___7175]));

var G__7176 = (i__3301__auto___7175 + (1));
i__3301__auto___7175 = G__7176;
continue;
} else {
}
break;
}

var G__7102 = args7100.length;
switch (G__7102) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7100.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1363__auto___7178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1363__auto___7178,out){
return (function (){
var f__1364__auto__ = (function (){var switch__1298__auto__ = ((function (c__1363__auto___7178,out){
return (function (state_7144){
var state_val_7145 = (state_7144[(1)]);
if((state_val_7145 === (7))){
var inst_7140 = (state_7144[(2)]);
var state_7144__$1 = state_7144;
var statearr_7146_7179 = state_7144__$1;
(statearr_7146_7179[(2)] = inst_7140);

(statearr_7146_7179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (1))){
var inst_7103 = [];
var inst_7104 = inst_7103;
var inst_7105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7144__$1 = (function (){var statearr_7147 = state_7144;
(statearr_7147[(7)] = inst_7104);

(statearr_7147[(8)] = inst_7105);

return statearr_7147;
})();
var statearr_7148_7180 = state_7144__$1;
(statearr_7148_7180[(2)] = null);

(statearr_7148_7180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (4))){
var inst_7108 = (state_7144[(9)]);
var inst_7108__$1 = (state_7144[(2)]);
var inst_7109 = (inst_7108__$1 == null);
var inst_7110 = cljs.core.not.call(null,inst_7109);
var state_7144__$1 = (function (){var statearr_7149 = state_7144;
(statearr_7149[(9)] = inst_7108__$1);

return statearr_7149;
})();
if(inst_7110){
var statearr_7150_7181 = state_7144__$1;
(statearr_7150_7181[(1)] = (5));

} else {
var statearr_7151_7182 = state_7144__$1;
(statearr_7151_7182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (15))){
var inst_7134 = (state_7144[(2)]);
var state_7144__$1 = state_7144;
var statearr_7152_7183 = state_7144__$1;
(statearr_7152_7183[(2)] = inst_7134);

(statearr_7152_7183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (13))){
var state_7144__$1 = state_7144;
var statearr_7153_7184 = state_7144__$1;
(statearr_7153_7184[(2)] = null);

(statearr_7153_7184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (6))){
var inst_7104 = (state_7144[(7)]);
var inst_7129 = inst_7104.length;
var inst_7130 = (inst_7129 > (0));
var state_7144__$1 = state_7144;
if(cljs.core.truth_(inst_7130)){
var statearr_7154_7185 = state_7144__$1;
(statearr_7154_7185[(1)] = (12));

} else {
var statearr_7155_7186 = state_7144__$1;
(statearr_7155_7186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (3))){
var inst_7142 = (state_7144[(2)]);
var state_7144__$1 = state_7144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7144__$1,inst_7142);
} else {
if((state_val_7145 === (12))){
var inst_7104 = (state_7144[(7)]);
var inst_7132 = cljs.core.vec.call(null,inst_7104);
var state_7144__$1 = state_7144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7144__$1,(15),out,inst_7132);
} else {
if((state_val_7145 === (2))){
var state_7144__$1 = state_7144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7144__$1,(4),ch);
} else {
if((state_val_7145 === (11))){
var inst_7108 = (state_7144[(9)]);
var inst_7112 = (state_7144[(10)]);
var inst_7122 = (state_7144[(2)]);
var inst_7123 = [];
var inst_7124 = inst_7123.push(inst_7108);
var inst_7104 = inst_7123;
var inst_7105 = inst_7112;
var state_7144__$1 = (function (){var statearr_7156 = state_7144;
(statearr_7156[(11)] = inst_7122);

(statearr_7156[(7)] = inst_7104);

(statearr_7156[(8)] = inst_7105);

(statearr_7156[(12)] = inst_7124);

return statearr_7156;
})();
var statearr_7157_7187 = state_7144__$1;
(statearr_7157_7187[(2)] = null);

(statearr_7157_7187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (9))){
var inst_7104 = (state_7144[(7)]);
var inst_7120 = cljs.core.vec.call(null,inst_7104);
var state_7144__$1 = state_7144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7144__$1,(11),out,inst_7120);
} else {
if((state_val_7145 === (5))){
var inst_7108 = (state_7144[(9)]);
var inst_7112 = (state_7144[(10)]);
var inst_7105 = (state_7144[(8)]);
var inst_7112__$1 = f.call(null,inst_7108);
var inst_7113 = cljs.core._EQ_.call(null,inst_7112__$1,inst_7105);
var inst_7114 = cljs.core.keyword_identical_QMARK_.call(null,inst_7105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_7115 = (inst_7113) || (inst_7114);
var state_7144__$1 = (function (){var statearr_7158 = state_7144;
(statearr_7158[(10)] = inst_7112__$1);

return statearr_7158;
})();
if(cljs.core.truth_(inst_7115)){
var statearr_7159_7188 = state_7144__$1;
(statearr_7159_7188[(1)] = (8));

} else {
var statearr_7160_7189 = state_7144__$1;
(statearr_7160_7189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (14))){
var inst_7137 = (state_7144[(2)]);
var inst_7138 = cljs.core.async.close_BANG_.call(null,out);
var state_7144__$1 = (function (){var statearr_7162 = state_7144;
(statearr_7162[(13)] = inst_7137);

return statearr_7162;
})();
var statearr_7163_7190 = state_7144__$1;
(statearr_7163_7190[(2)] = inst_7138);

(statearr_7163_7190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (10))){
var inst_7127 = (state_7144[(2)]);
var state_7144__$1 = state_7144;
var statearr_7164_7191 = state_7144__$1;
(statearr_7164_7191[(2)] = inst_7127);

(statearr_7164_7191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7145 === (8))){
var inst_7108 = (state_7144[(9)]);
var inst_7112 = (state_7144[(10)]);
var inst_7104 = (state_7144[(7)]);
var inst_7117 = inst_7104.push(inst_7108);
var tmp7161 = inst_7104;
var inst_7104__$1 = tmp7161;
var inst_7105 = inst_7112;
var state_7144__$1 = (function (){var statearr_7165 = state_7144;
(statearr_7165[(14)] = inst_7117);

(statearr_7165[(7)] = inst_7104__$1);

(statearr_7165[(8)] = inst_7105);

return statearr_7165;
})();
var statearr_7166_7192 = state_7144__$1;
(statearr_7166_7192[(2)] = null);

(statearr_7166_7192[(1)] = (2));


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
});})(c__1363__auto___7178,out))
;
return ((function (switch__1298__auto__,c__1363__auto___7178,out){
return (function() {
var cljs$core$async$state_machine__1299__auto__ = null;
var cljs$core$async$state_machine__1299__auto____0 = (function (){
var statearr_7170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7170[(0)] = cljs$core$async$state_machine__1299__auto__);

(statearr_7170[(1)] = (1));

return statearr_7170;
});
var cljs$core$async$state_machine__1299__auto____1 = (function (state_7144){
while(true){
var ret_value__1300__auto__ = (function (){try{while(true){
var result__1301__auto__ = switch__1298__auto__.call(null,state_7144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1301__auto__;
}
break;
}
}catch (e7171){if((e7171 instanceof Object)){
var ex__1302__auto__ = e7171;
var statearr_7172_7193 = state_7144;
(statearr_7172_7193[(5)] = ex__1302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7194 = state_7144;
state_7144 = G__7194;
continue;
} else {
return ret_value__1300__auto__;
}
break;
}
});
cljs$core$async$state_machine__1299__auto__ = function(state_7144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1299__auto____1.call(this,state_7144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1299__auto____0;
cljs$core$async$state_machine__1299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1299__auto____1;
return cljs$core$async$state_machine__1299__auto__;
})()
;})(switch__1298__auto__,c__1363__auto___7178,out))
})();
var state__1365__auto__ = (function (){var statearr_7173 = f__1364__auto__.call(null);
(statearr_7173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1363__auto___7178);

return statearr_7173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1365__auto__);
});})(c__1363__auto___7178,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map