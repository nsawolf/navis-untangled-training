// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args42474 = [];
var len__33922__auto___42480 = arguments.length;
var i__33923__auto___42481 = (0);
while(true){
if((i__33923__auto___42481 < len__33922__auto___42480)){
args42474.push((arguments[i__33923__auto___42481]));

var G__42482 = (i__33923__auto___42481 + (1));
i__33923__auto___42481 = G__42482;
continue;
} else {
}
break;
}

var G__42476 = args42474.length;
switch (G__42476) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42474.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42477 = (function (f,blockable,meta42478){
this.f = f;
this.blockable = blockable;
this.meta42478 = meta42478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42479,meta42478__$1){
var self__ = this;
var _42479__$1 = this;
return (new cljs.core.async.t_cljs$core$async42477(self__.f,self__.blockable,meta42478__$1));
});


cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42479){
var self__ = this;
var _42479__$1 = this;
return self__.meta42478;
});


cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async42477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42478","meta42478",973550613,null)], null);
});

cljs.core.async.t_cljs$core$async42477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42477";

cljs.core.async.t_cljs$core$async42477.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async42477");
});

cljs.core.async.__GT_t_cljs$core$async42477 = (function cljs$core$async$__GT_t_cljs$core$async42477(f__$1,blockable__$1,meta42478){
return (new cljs.core.async.t_cljs$core$async42477(f__$1,blockable__$1,meta42478));
});

}

return (new cljs.core.async.t_cljs$core$async42477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
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
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args42486 = [];
var len__33922__auto___42489 = arguments.length;
var i__33923__auto___42490 = (0);
while(true){
if((i__33923__auto___42490 < len__33922__auto___42489)){
args42486.push((arguments[i__33923__auto___42490]));

var G__42491 = (i__33923__auto___42490 + (1));
i__33923__auto___42490 = G__42491;
continue;
} else {
}
break;
}

var G__42488 = args42486.length;
switch (G__42488) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42486.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args42493 = [];
var len__33922__auto___42496 = arguments.length;
var i__33923__auto___42497 = (0);
while(true){
if((i__33923__auto___42497 < len__33922__auto___42496)){
args42493.push((arguments[i__33923__auto___42497]));

var G__42498 = (i__33923__auto___42497 + (1));
i__33923__auto___42497 = G__42498;
continue;
} else {
}
break;
}

var G__42495 = args42493.length;
switch (G__42495) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42493.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args42500 = [];
var len__33922__auto___42503 = arguments.length;
var i__33923__auto___42504 = (0);
while(true){
if((i__33923__auto___42504 < len__33922__auto___42503)){
args42500.push((arguments[i__33923__auto___42504]));

var G__42505 = (i__33923__auto___42504 + (1));
i__33923__auto___42504 = G__42505;
continue;
} else {
}
break;
}

var G__42502 = args42500.length;
switch (G__42502) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42500.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42507 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42507);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42507,ret){
return (function (){
return fn1.call(null,val_42507);
});})(val_42507,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args42508 = [];
var len__33922__auto___42511 = arguments.length;
var i__33923__auto___42512 = (0);
while(true){
if((i__33923__auto___42512 < len__33922__auto___42511)){
args42508.push((arguments[i__33923__auto___42512]));

var G__42513 = (i__33923__auto___42512 + (1));
i__33923__auto___42512 = G__42513;
continue;
} else {
}
break;
}

var G__42510 = args42508.length;
switch (G__42510) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42508.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__33762__auto___42515 = n;
var x_42516 = (0);
while(true){
if((x_42516 < n__33762__auto___42515)){
(a[x_42516] = (0));

var G__42517 = (x_42516 + (1));
x_42516 = G__42517;
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

var G__42518 = (i + (1));
i = G__42518;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42522 = (function (alt_flag,flag,meta42523){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta42523 = meta42523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42524,meta42523__$1){
var self__ = this;
var _42524__$1 = this;
return (new cljs.core.async.t_cljs$core$async42522(self__.alt_flag,self__.flag,meta42523__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42524){
var self__ = this;
var _42524__$1 = this;
return self__.meta42523;
});})(flag))
;


cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async42522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42522.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42523","meta42523",-2012638108,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42522";

cljs.core.async.t_cljs$core$async42522.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async42522");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42522 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42522(alt_flag__$1,flag__$1,meta42523){
return (new cljs.core.async.t_cljs$core$async42522(alt_flag__$1,flag__$1,meta42523));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42522(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42528 = (function (alt_handler,flag,cb,meta42529){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta42529 = meta42529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42530,meta42529__$1){
var self__ = this;
var _42530__$1 = this;
return (new cljs.core.async.t_cljs$core$async42528(self__.alt_handler,self__.flag,self__.cb,meta42529__$1));
});


cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42530){
var self__ = this;
var _42530__$1 = this;
return self__.meta42529;
});


cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async42528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42529","meta42529",1749059652,null)], null);
});

cljs.core.async.t_cljs$core$async42528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42528";

cljs.core.async.t_cljs$core$async42528.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async42528");
});

cljs.core.async.__GT_t_cljs$core$async42528 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42528(alt_handler__$1,flag__$1,cb__$1,meta42529){
return (new cljs.core.async.t_cljs$core$async42528(alt_handler__$1,flag__$1,cb__$1,meta42529));
});

}

return (new cljs.core.async.t_cljs$core$async42528(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42531_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42532_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__32847__auto__ = wport;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42533 = (i + (1));
i = G__42533;
continue;
}
} else {
return null;
}
break;
}
})();
var or__32847__auto__ = ret;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__32835__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__32835__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__32835__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__33929__auto__ = [];
var len__33922__auto___42539 = arguments.length;
var i__33923__auto___42540 = (0);
while(true){
if((i__33923__auto___42540 < len__33922__auto___42539)){
args__33929__auto__.push((arguments[i__33923__auto___42540]));

var G__42541 = (i__33923__auto___42540 + (1));
i__33923__auto___42540 = G__42541;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((1) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33930__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42536){
var map__42537 = p__42536;
var map__42537__$1 = ((((!((map__42537 == null)))?((((map__42537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42537):map__42537);
var opts = map__42537__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42534){
var G__42535 = cljs.core.first.call(null,seq42534);
var seq42534__$1 = cljs.core.next.call(null,seq42534);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42535,seq42534__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args42542 = [];
var len__33922__auto___42592 = arguments.length;
var i__33923__auto___42593 = (0);
while(true){
if((i__33923__auto___42593 < len__33922__auto___42592)){
args42542.push((arguments[i__33923__auto___42593]));

var G__42594 = (i__33923__auto___42593 + (1));
i__33923__auto___42593 = G__42594;
continue;
} else {
}
break;
}

var G__42544 = args42542.length;
switch (G__42544) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42542.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42429__auto___42596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___42596){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___42596){
return (function (state_42568){
var state_val_42569 = (state_42568[(1)]);
if((state_val_42569 === (7))){
var inst_42564 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42570_42597 = state_42568__$1;
(statearr_42570_42597[(2)] = inst_42564);

(statearr_42570_42597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (1))){
var state_42568__$1 = state_42568;
var statearr_42571_42598 = state_42568__$1;
(statearr_42571_42598[(2)] = null);

(statearr_42571_42598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (4))){
var inst_42547 = (state_42568[(7)]);
var inst_42547__$1 = (state_42568[(2)]);
var inst_42548 = (inst_42547__$1 == null);
var state_42568__$1 = (function (){var statearr_42572 = state_42568;
(statearr_42572[(7)] = inst_42547__$1);

return statearr_42572;
})();
if(cljs.core.truth_(inst_42548)){
var statearr_42573_42599 = state_42568__$1;
(statearr_42573_42599[(1)] = (5));

} else {
var statearr_42574_42600 = state_42568__$1;
(statearr_42574_42600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (13))){
var state_42568__$1 = state_42568;
var statearr_42575_42601 = state_42568__$1;
(statearr_42575_42601[(2)] = null);

(statearr_42575_42601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (6))){
var inst_42547 = (state_42568[(7)]);
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42568__$1,(11),to,inst_42547);
} else {
if((state_val_42569 === (3))){
var inst_42566 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42568__$1,inst_42566);
} else {
if((state_val_42569 === (12))){
var state_42568__$1 = state_42568;
var statearr_42576_42602 = state_42568__$1;
(statearr_42576_42602[(2)] = null);

(statearr_42576_42602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (2))){
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42568__$1,(4),from);
} else {
if((state_val_42569 === (11))){
var inst_42557 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
if(cljs.core.truth_(inst_42557)){
var statearr_42577_42603 = state_42568__$1;
(statearr_42577_42603[(1)] = (12));

} else {
var statearr_42578_42604 = state_42568__$1;
(statearr_42578_42604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (9))){
var state_42568__$1 = state_42568;
var statearr_42579_42605 = state_42568__$1;
(statearr_42579_42605[(2)] = null);

(statearr_42579_42605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (5))){
var state_42568__$1 = state_42568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42580_42606 = state_42568__$1;
(statearr_42580_42606[(1)] = (8));

} else {
var statearr_42581_42607 = state_42568__$1;
(statearr_42581_42607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (14))){
var inst_42562 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42582_42608 = state_42568__$1;
(statearr_42582_42608[(2)] = inst_42562);

(statearr_42582_42608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (10))){
var inst_42554 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42583_42609 = state_42568__$1;
(statearr_42583_42609[(2)] = inst_42554);

(statearr_42583_42609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (8))){
var inst_42551 = cljs.core.async.close_BANG_.call(null,to);
var state_42568__$1 = state_42568;
var statearr_42584_42610 = state_42568__$1;
(statearr_42584_42610[(2)] = inst_42551);

(statearr_42584_42610[(1)] = (10));


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
});})(c__42429__auto___42596))
;
return ((function (switch__42317__auto__,c__42429__auto___42596){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_42588 = [null,null,null,null,null,null,null,null];
(statearr_42588[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_42588[(1)] = (1));

return statearr_42588;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_42568){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42589){if((e42589 instanceof Object)){
var ex__42321__auto__ = e42589;
var statearr_42590_42611 = state_42568;
(statearr_42590_42611[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42612 = state_42568;
state_42568 = G__42612;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_42568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_42568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___42596))
})();
var state__42431__auto__ = (function (){var statearr_42591 = f__42430__auto__.call(null);
(statearr_42591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___42596);

return statearr_42591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___42596))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42800){
var vec__42801 = p__42800;
var v = cljs.core.nth.call(null,vec__42801,(0),null);
var p = cljs.core.nth.call(null,vec__42801,(1),null);
var job = vec__42801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42429__auto___42987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results){
return (function (state_42808){
var state_val_42809 = (state_42808[(1)]);
if((state_val_42809 === (1))){
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42808__$1,(2),res,v);
} else {
if((state_val_42809 === (2))){
var inst_42805 = (state_42808[(2)]);
var inst_42806 = cljs.core.async.close_BANG_.call(null,res);
var state_42808__$1 = (function (){var statearr_42810 = state_42808;
(statearr_42810[(7)] = inst_42805);

return statearr_42810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42808__$1,inst_42806);
} else {
return null;
}
}
});})(c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results))
;
return ((function (switch__42317__auto__,c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_42814 = [null,null,null,null,null,null,null,null];
(statearr_42814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__);

(statearr_42814[(1)] = (1));

return statearr_42814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1 = (function (state_42808){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42815){if((e42815 instanceof Object)){
var ex__42321__auto__ = e42815;
var statearr_42816_42988 = state_42808;
(statearr_42816_42988[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42989 = state_42808;
state_42808 = G__42989;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = function(state_42808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1.call(this,state_42808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results))
})();
var state__42431__auto__ = (function (){var statearr_42817 = f__42430__auto__.call(null);
(statearr_42817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___42987);

return statearr_42817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___42987,res,vec__42801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42818){
var vec__42819 = p__42818;
var v = cljs.core.nth.call(null,vec__42819,(0),null);
var p = cljs.core.nth.call(null,vec__42819,(1),null);
var job = vec__42819;
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
var n__33762__auto___42990 = n;
var __42991 = (0);
while(true){
if((__42991 < n__33762__auto___42990)){
var G__42822_42992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42822_42992) {
case "compute":
var c__42429__auto___42994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42991,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (__42991,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function (state_42835){
var state_val_42836 = (state_42835[(1)]);
if((state_val_42836 === (1))){
var state_42835__$1 = state_42835;
var statearr_42837_42995 = state_42835__$1;
(statearr_42837_42995[(2)] = null);

(statearr_42837_42995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (2))){
var state_42835__$1 = state_42835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42835__$1,(4),jobs);
} else {
if((state_val_42836 === (3))){
var inst_42833 = (state_42835[(2)]);
var state_42835__$1 = state_42835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42835__$1,inst_42833);
} else {
if((state_val_42836 === (4))){
var inst_42825 = (state_42835[(2)]);
var inst_42826 = process.call(null,inst_42825);
var state_42835__$1 = state_42835;
if(cljs.core.truth_(inst_42826)){
var statearr_42838_42996 = state_42835__$1;
(statearr_42838_42996[(1)] = (5));

} else {
var statearr_42839_42997 = state_42835__$1;
(statearr_42839_42997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (5))){
var state_42835__$1 = state_42835;
var statearr_42840_42998 = state_42835__$1;
(statearr_42840_42998[(2)] = null);

(statearr_42840_42998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (6))){
var state_42835__$1 = state_42835;
var statearr_42841_42999 = state_42835__$1;
(statearr_42841_42999[(2)] = null);

(statearr_42841_42999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (7))){
var inst_42831 = (state_42835[(2)]);
var state_42835__$1 = state_42835;
var statearr_42842_43000 = state_42835__$1;
(statearr_42842_43000[(2)] = inst_42831);

(statearr_42842_43000[(1)] = (3));


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
});})(__42991,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
;
return ((function (__42991,switch__42317__auto__,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_42846 = [null,null,null,null,null,null,null];
(statearr_42846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__);

(statearr_42846[(1)] = (1));

return statearr_42846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1 = (function (state_42835){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42847){if((e42847 instanceof Object)){
var ex__42321__auto__ = e42847;
var statearr_42848_43001 = state_42835;
(statearr_42848_43001[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43002 = state_42835;
state_42835 = G__43002;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = function(state_42835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1.call(this,state_42835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__;
})()
;})(__42991,switch__42317__auto__,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
})();
var state__42431__auto__ = (function (){var statearr_42849 = f__42430__auto__.call(null);
(statearr_42849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___42994);

return statearr_42849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(__42991,c__42429__auto___42994,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
);


break;
case "async":
var c__42429__auto___43003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42991,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (__42991,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function (state_42862){
var state_val_42863 = (state_42862[(1)]);
if((state_val_42863 === (1))){
var state_42862__$1 = state_42862;
var statearr_42864_43004 = state_42862__$1;
(statearr_42864_43004[(2)] = null);

(statearr_42864_43004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (2))){
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42862__$1,(4),jobs);
} else {
if((state_val_42863 === (3))){
var inst_42860 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42862__$1,inst_42860);
} else {
if((state_val_42863 === (4))){
var inst_42852 = (state_42862[(2)]);
var inst_42853 = async.call(null,inst_42852);
var state_42862__$1 = state_42862;
if(cljs.core.truth_(inst_42853)){
var statearr_42865_43005 = state_42862__$1;
(statearr_42865_43005[(1)] = (5));

} else {
var statearr_42866_43006 = state_42862__$1;
(statearr_42866_43006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (5))){
var state_42862__$1 = state_42862;
var statearr_42867_43007 = state_42862__$1;
(statearr_42867_43007[(2)] = null);

(statearr_42867_43007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (6))){
var state_42862__$1 = state_42862;
var statearr_42868_43008 = state_42862__$1;
(statearr_42868_43008[(2)] = null);

(statearr_42868_43008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (7))){
var inst_42858 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
var statearr_42869_43009 = state_42862__$1;
(statearr_42869_43009[(2)] = inst_42858);

(statearr_42869_43009[(1)] = (3));


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
});})(__42991,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
;
return ((function (__42991,switch__42317__auto__,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_42873 = [null,null,null,null,null,null,null];
(statearr_42873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__);

(statearr_42873[(1)] = (1));

return statearr_42873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1 = (function (state_42862){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42874){if((e42874 instanceof Object)){
var ex__42321__auto__ = e42874;
var statearr_42875_43010 = state_42862;
(statearr_42875_43010[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43011 = state_42862;
state_42862 = G__43011;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = function(state_42862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1.call(this,state_42862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__;
})()
;})(__42991,switch__42317__auto__,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
})();
var state__42431__auto__ = (function (){var statearr_42876 = f__42430__auto__.call(null);
(statearr_42876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___43003);

return statearr_42876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(__42991,c__42429__auto___43003,G__42822_42992,n__33762__auto___42990,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__43012 = (__42991 + (1));
__42991 = G__43012;
continue;
} else {
}
break;
}

var c__42429__auto___43013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___43013,jobs,results,process,async){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___43013,jobs,results,process,async){
return (function (state_42898){
var state_val_42899 = (state_42898[(1)]);
if((state_val_42899 === (1))){
var state_42898__$1 = state_42898;
var statearr_42900_43014 = state_42898__$1;
(statearr_42900_43014[(2)] = null);

(statearr_42900_43014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42899 === (2))){
var state_42898__$1 = state_42898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42898__$1,(4),from);
} else {
if((state_val_42899 === (3))){
var inst_42896 = (state_42898[(2)]);
var state_42898__$1 = state_42898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42898__$1,inst_42896);
} else {
if((state_val_42899 === (4))){
var inst_42879 = (state_42898[(7)]);
var inst_42879__$1 = (state_42898[(2)]);
var inst_42880 = (inst_42879__$1 == null);
var state_42898__$1 = (function (){var statearr_42901 = state_42898;
(statearr_42901[(7)] = inst_42879__$1);

return statearr_42901;
})();
if(cljs.core.truth_(inst_42880)){
var statearr_42902_43015 = state_42898__$1;
(statearr_42902_43015[(1)] = (5));

} else {
var statearr_42903_43016 = state_42898__$1;
(statearr_42903_43016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42899 === (5))){
var inst_42882 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42898__$1 = state_42898;
var statearr_42904_43017 = state_42898__$1;
(statearr_42904_43017[(2)] = inst_42882);

(statearr_42904_43017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42899 === (6))){
var inst_42884 = (state_42898[(8)]);
var inst_42879 = (state_42898[(7)]);
var inst_42884__$1 = cljs.core.async.chan.call(null,(1));
var inst_42885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42886 = [inst_42879,inst_42884__$1];
var inst_42887 = (new cljs.core.PersistentVector(null,2,(5),inst_42885,inst_42886,null));
var state_42898__$1 = (function (){var statearr_42905 = state_42898;
(statearr_42905[(8)] = inst_42884__$1);

return statearr_42905;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42898__$1,(8),jobs,inst_42887);
} else {
if((state_val_42899 === (7))){
var inst_42894 = (state_42898[(2)]);
var state_42898__$1 = state_42898;
var statearr_42906_43018 = state_42898__$1;
(statearr_42906_43018[(2)] = inst_42894);

(statearr_42906_43018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42899 === (8))){
var inst_42884 = (state_42898[(8)]);
var inst_42889 = (state_42898[(2)]);
var state_42898__$1 = (function (){var statearr_42907 = state_42898;
(statearr_42907[(9)] = inst_42889);

return statearr_42907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42898__$1,(9),results,inst_42884);
} else {
if((state_val_42899 === (9))){
var inst_42891 = (state_42898[(2)]);
var state_42898__$1 = (function (){var statearr_42908 = state_42898;
(statearr_42908[(10)] = inst_42891);

return statearr_42908;
})();
var statearr_42909_43019 = state_42898__$1;
(statearr_42909_43019[(2)] = null);

(statearr_42909_43019[(1)] = (2));


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
});})(c__42429__auto___43013,jobs,results,process,async))
;
return ((function (switch__42317__auto__,c__42429__auto___43013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_42913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__);

(statearr_42913[(1)] = (1));

return statearr_42913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1 = (function (state_42898){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42914){if((e42914 instanceof Object)){
var ex__42321__auto__ = e42914;
var statearr_42915_43020 = state_42898;
(statearr_42915_43020[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43021 = state_42898;
state_42898 = G__43021;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = function(state_42898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1.call(this,state_42898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___43013,jobs,results,process,async))
})();
var state__42431__auto__ = (function (){var statearr_42916 = f__42430__auto__.call(null);
(statearr_42916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___43013);

return statearr_42916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___43013,jobs,results,process,async))
);


var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__,jobs,results,process,async){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__,jobs,results,process,async){
return (function (state_42954){
var state_val_42955 = (state_42954[(1)]);
if((state_val_42955 === (7))){
var inst_42950 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
var statearr_42956_43022 = state_42954__$1;
(statearr_42956_43022[(2)] = inst_42950);

(statearr_42956_43022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (20))){
var state_42954__$1 = state_42954;
var statearr_42957_43023 = state_42954__$1;
(statearr_42957_43023[(2)] = null);

(statearr_42957_43023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (1))){
var state_42954__$1 = state_42954;
var statearr_42958_43024 = state_42954__$1;
(statearr_42958_43024[(2)] = null);

(statearr_42958_43024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (4))){
var inst_42919 = (state_42954[(7)]);
var inst_42919__$1 = (state_42954[(2)]);
var inst_42920 = (inst_42919__$1 == null);
var state_42954__$1 = (function (){var statearr_42959 = state_42954;
(statearr_42959[(7)] = inst_42919__$1);

return statearr_42959;
})();
if(cljs.core.truth_(inst_42920)){
var statearr_42960_43025 = state_42954__$1;
(statearr_42960_43025[(1)] = (5));

} else {
var statearr_42961_43026 = state_42954__$1;
(statearr_42961_43026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (15))){
var inst_42932 = (state_42954[(8)]);
var state_42954__$1 = state_42954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42954__$1,(18),to,inst_42932);
} else {
if((state_val_42955 === (21))){
var inst_42945 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
var statearr_42962_43027 = state_42954__$1;
(statearr_42962_43027[(2)] = inst_42945);

(statearr_42962_43027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (13))){
var inst_42947 = (state_42954[(2)]);
var state_42954__$1 = (function (){var statearr_42963 = state_42954;
(statearr_42963[(9)] = inst_42947);

return statearr_42963;
})();
var statearr_42964_43028 = state_42954__$1;
(statearr_42964_43028[(2)] = null);

(statearr_42964_43028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (6))){
var inst_42919 = (state_42954[(7)]);
var state_42954__$1 = state_42954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42954__$1,(11),inst_42919);
} else {
if((state_val_42955 === (17))){
var inst_42940 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
if(cljs.core.truth_(inst_42940)){
var statearr_42965_43029 = state_42954__$1;
(statearr_42965_43029[(1)] = (19));

} else {
var statearr_42966_43030 = state_42954__$1;
(statearr_42966_43030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (3))){
var inst_42952 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42954__$1,inst_42952);
} else {
if((state_val_42955 === (12))){
var inst_42929 = (state_42954[(10)]);
var state_42954__$1 = state_42954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42954__$1,(14),inst_42929);
} else {
if((state_val_42955 === (2))){
var state_42954__$1 = state_42954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42954__$1,(4),results);
} else {
if((state_val_42955 === (19))){
var state_42954__$1 = state_42954;
var statearr_42967_43031 = state_42954__$1;
(statearr_42967_43031[(2)] = null);

(statearr_42967_43031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (11))){
var inst_42929 = (state_42954[(2)]);
var state_42954__$1 = (function (){var statearr_42968 = state_42954;
(statearr_42968[(10)] = inst_42929);

return statearr_42968;
})();
var statearr_42969_43032 = state_42954__$1;
(statearr_42969_43032[(2)] = null);

(statearr_42969_43032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (9))){
var state_42954__$1 = state_42954;
var statearr_42970_43033 = state_42954__$1;
(statearr_42970_43033[(2)] = null);

(statearr_42970_43033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (5))){
var state_42954__$1 = state_42954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42971_43034 = state_42954__$1;
(statearr_42971_43034[(1)] = (8));

} else {
var statearr_42972_43035 = state_42954__$1;
(statearr_42972_43035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (14))){
var inst_42932 = (state_42954[(8)]);
var inst_42934 = (state_42954[(11)]);
var inst_42932__$1 = (state_42954[(2)]);
var inst_42933 = (inst_42932__$1 == null);
var inst_42934__$1 = cljs.core.not.call(null,inst_42933);
var state_42954__$1 = (function (){var statearr_42973 = state_42954;
(statearr_42973[(8)] = inst_42932__$1);

(statearr_42973[(11)] = inst_42934__$1);

return statearr_42973;
})();
if(inst_42934__$1){
var statearr_42974_43036 = state_42954__$1;
(statearr_42974_43036[(1)] = (15));

} else {
var statearr_42975_43037 = state_42954__$1;
(statearr_42975_43037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (16))){
var inst_42934 = (state_42954[(11)]);
var state_42954__$1 = state_42954;
var statearr_42976_43038 = state_42954__$1;
(statearr_42976_43038[(2)] = inst_42934);

(statearr_42976_43038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (10))){
var inst_42926 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
var statearr_42977_43039 = state_42954__$1;
(statearr_42977_43039[(2)] = inst_42926);

(statearr_42977_43039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (18))){
var inst_42937 = (state_42954[(2)]);
var state_42954__$1 = state_42954;
var statearr_42978_43040 = state_42954__$1;
(statearr_42978_43040[(2)] = inst_42937);

(statearr_42978_43040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42955 === (8))){
var inst_42923 = cljs.core.async.close_BANG_.call(null,to);
var state_42954__$1 = state_42954;
var statearr_42979_43041 = state_42954__$1;
(statearr_42979_43041[(2)] = inst_42923);

(statearr_42979_43041[(1)] = (10));


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
});})(c__42429__auto__,jobs,results,process,async))
;
return ((function (switch__42317__auto__,c__42429__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_42983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__);

(statearr_42983[(1)] = (1));

return statearr_42983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1 = (function (state_42954){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_42954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e42984){if((e42984 instanceof Object)){
var ex__42321__auto__ = e42984;
var statearr_42985_43042 = state_42954;
(statearr_42985_43042[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43043 = state_42954;
state_42954 = G__43043;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__ = function(state_42954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1.call(this,state_42954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__,jobs,results,process,async))
})();
var state__42431__auto__ = (function (){var statearr_42986 = f__42430__auto__.call(null);
(statearr_42986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_42986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__,jobs,results,process,async))
);

return c__42429__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args43044 = [];
var len__33922__auto___43047 = arguments.length;
var i__33923__auto___43048 = (0);
while(true){
if((i__33923__auto___43048 < len__33922__auto___43047)){
args43044.push((arguments[i__33923__auto___43048]));

var G__43049 = (i__33923__auto___43048 + (1));
i__33923__auto___43048 = G__43049;
continue;
} else {
}
break;
}

var G__43046 = args43044.length;
switch (G__43046) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43044.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args43051 = [];
var len__33922__auto___43054 = arguments.length;
var i__33923__auto___43055 = (0);
while(true){
if((i__33923__auto___43055 < len__33922__auto___43054)){
args43051.push((arguments[i__33923__auto___43055]));

var G__43056 = (i__33923__auto___43055 + (1));
i__33923__auto___43055 = G__43056;
continue;
} else {
}
break;
}

var G__43053 = args43051.length;
switch (G__43053) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43051.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args43058 = [];
var len__33922__auto___43111 = arguments.length;
var i__33923__auto___43112 = (0);
while(true){
if((i__33923__auto___43112 < len__33922__auto___43111)){
args43058.push((arguments[i__33923__auto___43112]));

var G__43113 = (i__33923__auto___43112 + (1));
i__33923__auto___43112 = G__43113;
continue;
} else {
}
break;
}

var G__43060 = args43058.length;
switch (G__43060) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43058.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42429__auto___43115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___43115,tc,fc){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___43115,tc,fc){
return (function (state_43086){
var state_val_43087 = (state_43086[(1)]);
if((state_val_43087 === (7))){
var inst_43082 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43088_43116 = state_43086__$1;
(statearr_43088_43116[(2)] = inst_43082);

(statearr_43088_43116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (1))){
var state_43086__$1 = state_43086;
var statearr_43089_43117 = state_43086__$1;
(statearr_43089_43117[(2)] = null);

(statearr_43089_43117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (4))){
var inst_43063 = (state_43086[(7)]);
var inst_43063__$1 = (state_43086[(2)]);
var inst_43064 = (inst_43063__$1 == null);
var state_43086__$1 = (function (){var statearr_43090 = state_43086;
(statearr_43090[(7)] = inst_43063__$1);

return statearr_43090;
})();
if(cljs.core.truth_(inst_43064)){
var statearr_43091_43118 = state_43086__$1;
(statearr_43091_43118[(1)] = (5));

} else {
var statearr_43092_43119 = state_43086__$1;
(statearr_43092_43119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (13))){
var state_43086__$1 = state_43086;
var statearr_43093_43120 = state_43086__$1;
(statearr_43093_43120[(2)] = null);

(statearr_43093_43120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (6))){
var inst_43063 = (state_43086[(7)]);
var inst_43069 = p.call(null,inst_43063);
var state_43086__$1 = state_43086;
if(cljs.core.truth_(inst_43069)){
var statearr_43094_43121 = state_43086__$1;
(statearr_43094_43121[(1)] = (9));

} else {
var statearr_43095_43122 = state_43086__$1;
(statearr_43095_43122[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (3))){
var inst_43084 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43086__$1,inst_43084);
} else {
if((state_val_43087 === (12))){
var state_43086__$1 = state_43086;
var statearr_43096_43123 = state_43086__$1;
(statearr_43096_43123[(2)] = null);

(statearr_43096_43123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (2))){
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43086__$1,(4),ch);
} else {
if((state_val_43087 === (11))){
var inst_43063 = (state_43086[(7)]);
var inst_43073 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43086__$1,(8),inst_43073,inst_43063);
} else {
if((state_val_43087 === (9))){
var state_43086__$1 = state_43086;
var statearr_43097_43124 = state_43086__$1;
(statearr_43097_43124[(2)] = tc);

(statearr_43097_43124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (5))){
var inst_43066 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43067 = cljs.core.async.close_BANG_.call(null,fc);
var state_43086__$1 = (function (){var statearr_43098 = state_43086;
(statearr_43098[(8)] = inst_43066);

return statearr_43098;
})();
var statearr_43099_43125 = state_43086__$1;
(statearr_43099_43125[(2)] = inst_43067);

(statearr_43099_43125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (14))){
var inst_43080 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43100_43126 = state_43086__$1;
(statearr_43100_43126[(2)] = inst_43080);

(statearr_43100_43126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (10))){
var state_43086__$1 = state_43086;
var statearr_43101_43127 = state_43086__$1;
(statearr_43101_43127[(2)] = fc);

(statearr_43101_43127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (8))){
var inst_43075 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
if(cljs.core.truth_(inst_43075)){
var statearr_43102_43128 = state_43086__$1;
(statearr_43102_43128[(1)] = (12));

} else {
var statearr_43103_43129 = state_43086__$1;
(statearr_43103_43129[(1)] = (13));

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
});})(c__42429__auto___43115,tc,fc))
;
return ((function (switch__42317__auto__,c__42429__auto___43115,tc,fc){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_43107 = [null,null,null,null,null,null,null,null,null];
(statearr_43107[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_43107[(1)] = (1));

return statearr_43107;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_43086){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_43086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e43108){if((e43108 instanceof Object)){
var ex__42321__auto__ = e43108;
var statearr_43109_43130 = state_43086;
(statearr_43109_43130[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43131 = state_43086;
state_43086 = G__43131;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_43086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_43086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___43115,tc,fc))
})();
var state__42431__auto__ = (function (){var statearr_43110 = f__42430__auto__.call(null);
(statearr_43110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___43115);

return statearr_43110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___43115,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_43195){
var state_val_43196 = (state_43195[(1)]);
if((state_val_43196 === (7))){
var inst_43191 = (state_43195[(2)]);
var state_43195__$1 = state_43195;
var statearr_43197_43218 = state_43195__$1;
(statearr_43197_43218[(2)] = inst_43191);

(statearr_43197_43218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (1))){
var inst_43175 = init;
var state_43195__$1 = (function (){var statearr_43198 = state_43195;
(statearr_43198[(7)] = inst_43175);

return statearr_43198;
})();
var statearr_43199_43219 = state_43195__$1;
(statearr_43199_43219[(2)] = null);

(statearr_43199_43219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (4))){
var inst_43178 = (state_43195[(8)]);
var inst_43178__$1 = (state_43195[(2)]);
var inst_43179 = (inst_43178__$1 == null);
var state_43195__$1 = (function (){var statearr_43200 = state_43195;
(statearr_43200[(8)] = inst_43178__$1);

return statearr_43200;
})();
if(cljs.core.truth_(inst_43179)){
var statearr_43201_43220 = state_43195__$1;
(statearr_43201_43220[(1)] = (5));

} else {
var statearr_43202_43221 = state_43195__$1;
(statearr_43202_43221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (6))){
var inst_43178 = (state_43195[(8)]);
var inst_43182 = (state_43195[(9)]);
var inst_43175 = (state_43195[(7)]);
var inst_43182__$1 = f.call(null,inst_43175,inst_43178);
var inst_43183 = cljs.core.reduced_QMARK_.call(null,inst_43182__$1);
var state_43195__$1 = (function (){var statearr_43203 = state_43195;
(statearr_43203[(9)] = inst_43182__$1);

return statearr_43203;
})();
if(inst_43183){
var statearr_43204_43222 = state_43195__$1;
(statearr_43204_43222[(1)] = (8));

} else {
var statearr_43205_43223 = state_43195__$1;
(statearr_43205_43223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (3))){
var inst_43193 = (state_43195[(2)]);
var state_43195__$1 = state_43195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43195__$1,inst_43193);
} else {
if((state_val_43196 === (2))){
var state_43195__$1 = state_43195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43195__$1,(4),ch);
} else {
if((state_val_43196 === (9))){
var inst_43182 = (state_43195[(9)]);
var inst_43175 = inst_43182;
var state_43195__$1 = (function (){var statearr_43206 = state_43195;
(statearr_43206[(7)] = inst_43175);

return statearr_43206;
})();
var statearr_43207_43224 = state_43195__$1;
(statearr_43207_43224[(2)] = null);

(statearr_43207_43224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (5))){
var inst_43175 = (state_43195[(7)]);
var state_43195__$1 = state_43195;
var statearr_43208_43225 = state_43195__$1;
(statearr_43208_43225[(2)] = inst_43175);

(statearr_43208_43225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (10))){
var inst_43189 = (state_43195[(2)]);
var state_43195__$1 = state_43195;
var statearr_43209_43226 = state_43195__$1;
(statearr_43209_43226[(2)] = inst_43189);

(statearr_43209_43226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (8))){
var inst_43182 = (state_43195[(9)]);
var inst_43185 = cljs.core.deref.call(null,inst_43182);
var state_43195__$1 = state_43195;
var statearr_43210_43227 = state_43195__$1;
(statearr_43210_43227[(2)] = inst_43185);

(statearr_43210_43227[(1)] = (10));


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
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42318__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42318__auto____0 = (function (){
var statearr_43214 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43214[(0)] = cljs$core$async$reduce_$_state_machine__42318__auto__);

(statearr_43214[(1)] = (1));

return statearr_43214;
});
var cljs$core$async$reduce_$_state_machine__42318__auto____1 = (function (state_43195){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_43195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e43215){if((e43215 instanceof Object)){
var ex__42321__auto__ = e43215;
var statearr_43216_43228 = state_43195;
(statearr_43216_43228[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43229 = state_43195;
state_43195 = G__43229;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42318__auto__ = function(state_43195){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42318__auto____1.call(this,state_43195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42318__auto____0;
cljs$core$async$reduce_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42318__auto____1;
return cljs$core$async$reduce_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_43217 = f__42430__auto__.call(null);
(statearr_43217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_43217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args43230 = [];
var len__33922__auto___43282 = arguments.length;
var i__33923__auto___43283 = (0);
while(true){
if((i__33923__auto___43283 < len__33922__auto___43282)){
args43230.push((arguments[i__33923__auto___43283]));

var G__43284 = (i__33923__auto___43283 + (1));
i__33923__auto___43283 = G__43284;
continue;
} else {
}
break;
}

var G__43232 = args43230.length;
switch (G__43232) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43230.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_43257){
var state_val_43258 = (state_43257[(1)]);
if((state_val_43258 === (7))){
var inst_43239 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43259_43286 = state_43257__$1;
(statearr_43259_43286[(2)] = inst_43239);

(statearr_43259_43286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (1))){
var inst_43233 = cljs.core.seq.call(null,coll);
var inst_43234 = inst_43233;
var state_43257__$1 = (function (){var statearr_43260 = state_43257;
(statearr_43260[(7)] = inst_43234);

return statearr_43260;
})();
var statearr_43261_43287 = state_43257__$1;
(statearr_43261_43287[(2)] = null);

(statearr_43261_43287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (4))){
var inst_43234 = (state_43257[(7)]);
var inst_43237 = cljs.core.first.call(null,inst_43234);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43257__$1,(7),ch,inst_43237);
} else {
if((state_val_43258 === (13))){
var inst_43251 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43262_43288 = state_43257__$1;
(statearr_43262_43288[(2)] = inst_43251);

(statearr_43262_43288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (6))){
var inst_43242 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43242)){
var statearr_43263_43289 = state_43257__$1;
(statearr_43263_43289[(1)] = (8));

} else {
var statearr_43264_43290 = state_43257__$1;
(statearr_43264_43290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (3))){
var inst_43255 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43257__$1,inst_43255);
} else {
if((state_val_43258 === (12))){
var state_43257__$1 = state_43257;
var statearr_43265_43291 = state_43257__$1;
(statearr_43265_43291[(2)] = null);

(statearr_43265_43291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (2))){
var inst_43234 = (state_43257[(7)]);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43234)){
var statearr_43266_43292 = state_43257__$1;
(statearr_43266_43292[(1)] = (4));

} else {
var statearr_43267_43293 = state_43257__$1;
(statearr_43267_43293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (11))){
var inst_43248 = cljs.core.async.close_BANG_.call(null,ch);
var state_43257__$1 = state_43257;
var statearr_43268_43294 = state_43257__$1;
(statearr_43268_43294[(2)] = inst_43248);

(statearr_43268_43294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (9))){
var state_43257__$1 = state_43257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43269_43295 = state_43257__$1;
(statearr_43269_43295[(1)] = (11));

} else {
var statearr_43270_43296 = state_43257__$1;
(statearr_43270_43296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (5))){
var inst_43234 = (state_43257[(7)]);
var state_43257__$1 = state_43257;
var statearr_43271_43297 = state_43257__$1;
(statearr_43271_43297[(2)] = inst_43234);

(statearr_43271_43297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (10))){
var inst_43253 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43272_43298 = state_43257__$1;
(statearr_43272_43298[(2)] = inst_43253);

(statearr_43272_43298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (8))){
var inst_43234 = (state_43257[(7)]);
var inst_43244 = cljs.core.next.call(null,inst_43234);
var inst_43234__$1 = inst_43244;
var state_43257__$1 = (function (){var statearr_43273 = state_43257;
(statearr_43273[(7)] = inst_43234__$1);

return statearr_43273;
})();
var statearr_43274_43299 = state_43257__$1;
(statearr_43274_43299[(2)] = null);

(statearr_43274_43299[(1)] = (2));


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
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_43278 = [null,null,null,null,null,null,null,null];
(statearr_43278[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_43278[(1)] = (1));

return statearr_43278;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_43257){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_43257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e43279){if((e43279 instanceof Object)){
var ex__42321__auto__ = e43279;
var statearr_43280_43300 = state_43257;
(statearr_43280_43300[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43301 = state_43257;
state_43257 = G__43301;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_43257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_43257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_43281 = f__42430__auto__.call(null);
(statearr_43281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_43281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__33510__auto__ = (((_ == null))?null:_);
var m__33511__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,_);
} else {
var m__33511__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__33511__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,ch);
} else {
var m__33511__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,ch);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m);
} else {
var m__33511__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43527 = (function (mult,ch,cs,meta43528){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta43528 = meta43528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43529,meta43528__$1){
var self__ = this;
var _43529__$1 = this;
return (new cljs.core.async.t_cljs$core$async43527(self__.mult,self__.ch,self__.cs,meta43528__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43529){
var self__ = this;
var _43529__$1 = this;
return self__.meta43528;
});})(cs))
;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43527.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43528","meta43528",871702512,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43527";

cljs.core.async.t_cljs$core$async43527.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async43527");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async43527 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43527(mult__$1,ch__$1,cs__$1,meta43528){
return (new cljs.core.async.t_cljs$core$async43527(mult__$1,ch__$1,cs__$1,meta43528));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43527(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42429__auto___43752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___43752,cs,m,dchan,dctr,done){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___43752,cs,m,dchan,dctr,done){
return (function (state_43664){
var state_val_43665 = (state_43664[(1)]);
if((state_val_43665 === (7))){
var inst_43660 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43666_43753 = state_43664__$1;
(statearr_43666_43753[(2)] = inst_43660);

(statearr_43666_43753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (20))){
var inst_43563 = (state_43664[(7)]);
var inst_43575 = cljs.core.first.call(null,inst_43563);
var inst_43576 = cljs.core.nth.call(null,inst_43575,(0),null);
var inst_43577 = cljs.core.nth.call(null,inst_43575,(1),null);
var state_43664__$1 = (function (){var statearr_43667 = state_43664;
(statearr_43667[(8)] = inst_43576);

return statearr_43667;
})();
if(cljs.core.truth_(inst_43577)){
var statearr_43668_43754 = state_43664__$1;
(statearr_43668_43754[(1)] = (22));

} else {
var statearr_43669_43755 = state_43664__$1;
(statearr_43669_43755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (27))){
var inst_43532 = (state_43664[(9)]);
var inst_43607 = (state_43664[(10)]);
var inst_43612 = (state_43664[(11)]);
var inst_43605 = (state_43664[(12)]);
var inst_43612__$1 = cljs.core._nth.call(null,inst_43605,inst_43607);
var inst_43613 = cljs.core.async.put_BANG_.call(null,inst_43612__$1,inst_43532,done);
var state_43664__$1 = (function (){var statearr_43670 = state_43664;
(statearr_43670[(11)] = inst_43612__$1);

return statearr_43670;
})();
if(cljs.core.truth_(inst_43613)){
var statearr_43671_43756 = state_43664__$1;
(statearr_43671_43756[(1)] = (30));

} else {
var statearr_43672_43757 = state_43664__$1;
(statearr_43672_43757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (1))){
var state_43664__$1 = state_43664;
var statearr_43673_43758 = state_43664__$1;
(statearr_43673_43758[(2)] = null);

(statearr_43673_43758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (24))){
var inst_43563 = (state_43664[(7)]);
var inst_43582 = (state_43664[(2)]);
var inst_43583 = cljs.core.next.call(null,inst_43563);
var inst_43541 = inst_43583;
var inst_43542 = null;
var inst_43543 = (0);
var inst_43544 = (0);
var state_43664__$1 = (function (){var statearr_43674 = state_43664;
(statearr_43674[(13)] = inst_43542);

(statearr_43674[(14)] = inst_43541);

(statearr_43674[(15)] = inst_43582);

(statearr_43674[(16)] = inst_43543);

(statearr_43674[(17)] = inst_43544);

return statearr_43674;
})();
var statearr_43675_43759 = state_43664__$1;
(statearr_43675_43759[(2)] = null);

(statearr_43675_43759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (39))){
var state_43664__$1 = state_43664;
var statearr_43679_43760 = state_43664__$1;
(statearr_43679_43760[(2)] = null);

(statearr_43679_43760[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (4))){
var inst_43532 = (state_43664[(9)]);
var inst_43532__$1 = (state_43664[(2)]);
var inst_43533 = (inst_43532__$1 == null);
var state_43664__$1 = (function (){var statearr_43680 = state_43664;
(statearr_43680[(9)] = inst_43532__$1);

return statearr_43680;
})();
if(cljs.core.truth_(inst_43533)){
var statearr_43681_43761 = state_43664__$1;
(statearr_43681_43761[(1)] = (5));

} else {
var statearr_43682_43762 = state_43664__$1;
(statearr_43682_43762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (15))){
var inst_43542 = (state_43664[(13)]);
var inst_43541 = (state_43664[(14)]);
var inst_43543 = (state_43664[(16)]);
var inst_43544 = (state_43664[(17)]);
var inst_43559 = (state_43664[(2)]);
var inst_43560 = (inst_43544 + (1));
var tmp43676 = inst_43542;
var tmp43677 = inst_43541;
var tmp43678 = inst_43543;
var inst_43541__$1 = tmp43677;
var inst_43542__$1 = tmp43676;
var inst_43543__$1 = tmp43678;
var inst_43544__$1 = inst_43560;
var state_43664__$1 = (function (){var statearr_43683 = state_43664;
(statearr_43683[(13)] = inst_43542__$1);

(statearr_43683[(14)] = inst_43541__$1);

(statearr_43683[(18)] = inst_43559);

(statearr_43683[(16)] = inst_43543__$1);

(statearr_43683[(17)] = inst_43544__$1);

return statearr_43683;
})();
var statearr_43684_43763 = state_43664__$1;
(statearr_43684_43763[(2)] = null);

(statearr_43684_43763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (21))){
var inst_43586 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43688_43764 = state_43664__$1;
(statearr_43688_43764[(2)] = inst_43586);

(statearr_43688_43764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (31))){
var inst_43612 = (state_43664[(11)]);
var inst_43616 = done.call(null,null);
var inst_43617 = cljs.core.async.untap_STAR_.call(null,m,inst_43612);
var state_43664__$1 = (function (){var statearr_43689 = state_43664;
(statearr_43689[(19)] = inst_43616);

return statearr_43689;
})();
var statearr_43690_43765 = state_43664__$1;
(statearr_43690_43765[(2)] = inst_43617);

(statearr_43690_43765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (32))){
var inst_43604 = (state_43664[(20)]);
var inst_43606 = (state_43664[(21)]);
var inst_43607 = (state_43664[(10)]);
var inst_43605 = (state_43664[(12)]);
var inst_43619 = (state_43664[(2)]);
var inst_43620 = (inst_43607 + (1));
var tmp43685 = inst_43604;
var tmp43686 = inst_43606;
var tmp43687 = inst_43605;
var inst_43604__$1 = tmp43685;
var inst_43605__$1 = tmp43687;
var inst_43606__$1 = tmp43686;
var inst_43607__$1 = inst_43620;
var state_43664__$1 = (function (){var statearr_43691 = state_43664;
(statearr_43691[(20)] = inst_43604__$1);

(statearr_43691[(21)] = inst_43606__$1);

(statearr_43691[(22)] = inst_43619);

(statearr_43691[(10)] = inst_43607__$1);

(statearr_43691[(12)] = inst_43605__$1);

return statearr_43691;
})();
var statearr_43692_43766 = state_43664__$1;
(statearr_43692_43766[(2)] = null);

(statearr_43692_43766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (40))){
var inst_43632 = (state_43664[(23)]);
var inst_43636 = done.call(null,null);
var inst_43637 = cljs.core.async.untap_STAR_.call(null,m,inst_43632);
var state_43664__$1 = (function (){var statearr_43693 = state_43664;
(statearr_43693[(24)] = inst_43636);

return statearr_43693;
})();
var statearr_43694_43767 = state_43664__$1;
(statearr_43694_43767[(2)] = inst_43637);

(statearr_43694_43767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (33))){
var inst_43623 = (state_43664[(25)]);
var inst_43625 = cljs.core.chunked_seq_QMARK_.call(null,inst_43623);
var state_43664__$1 = state_43664;
if(inst_43625){
var statearr_43695_43768 = state_43664__$1;
(statearr_43695_43768[(1)] = (36));

} else {
var statearr_43696_43769 = state_43664__$1;
(statearr_43696_43769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (13))){
var inst_43553 = (state_43664[(26)]);
var inst_43556 = cljs.core.async.close_BANG_.call(null,inst_43553);
var state_43664__$1 = state_43664;
var statearr_43697_43770 = state_43664__$1;
(statearr_43697_43770[(2)] = inst_43556);

(statearr_43697_43770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (22))){
var inst_43576 = (state_43664[(8)]);
var inst_43579 = cljs.core.async.close_BANG_.call(null,inst_43576);
var state_43664__$1 = state_43664;
var statearr_43698_43771 = state_43664__$1;
(statearr_43698_43771[(2)] = inst_43579);

(statearr_43698_43771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (36))){
var inst_43623 = (state_43664[(25)]);
var inst_43627 = cljs.core.chunk_first.call(null,inst_43623);
var inst_43628 = cljs.core.chunk_rest.call(null,inst_43623);
var inst_43629 = cljs.core.count.call(null,inst_43627);
var inst_43604 = inst_43628;
var inst_43605 = inst_43627;
var inst_43606 = inst_43629;
var inst_43607 = (0);
var state_43664__$1 = (function (){var statearr_43699 = state_43664;
(statearr_43699[(20)] = inst_43604);

(statearr_43699[(21)] = inst_43606);

(statearr_43699[(10)] = inst_43607);

(statearr_43699[(12)] = inst_43605);

return statearr_43699;
})();
var statearr_43700_43772 = state_43664__$1;
(statearr_43700_43772[(2)] = null);

(statearr_43700_43772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (41))){
var inst_43623 = (state_43664[(25)]);
var inst_43639 = (state_43664[(2)]);
var inst_43640 = cljs.core.next.call(null,inst_43623);
var inst_43604 = inst_43640;
var inst_43605 = null;
var inst_43606 = (0);
var inst_43607 = (0);
var state_43664__$1 = (function (){var statearr_43701 = state_43664;
(statearr_43701[(20)] = inst_43604);

(statearr_43701[(21)] = inst_43606);

(statearr_43701[(27)] = inst_43639);

(statearr_43701[(10)] = inst_43607);

(statearr_43701[(12)] = inst_43605);

return statearr_43701;
})();
var statearr_43702_43773 = state_43664__$1;
(statearr_43702_43773[(2)] = null);

(statearr_43702_43773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (43))){
var state_43664__$1 = state_43664;
var statearr_43703_43774 = state_43664__$1;
(statearr_43703_43774[(2)] = null);

(statearr_43703_43774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (29))){
var inst_43648 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43704_43775 = state_43664__$1;
(statearr_43704_43775[(2)] = inst_43648);

(statearr_43704_43775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (44))){
var inst_43657 = (state_43664[(2)]);
var state_43664__$1 = (function (){var statearr_43705 = state_43664;
(statearr_43705[(28)] = inst_43657);

return statearr_43705;
})();
var statearr_43706_43776 = state_43664__$1;
(statearr_43706_43776[(2)] = null);

(statearr_43706_43776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (6))){
var inst_43596 = (state_43664[(29)]);
var inst_43595 = cljs.core.deref.call(null,cs);
var inst_43596__$1 = cljs.core.keys.call(null,inst_43595);
var inst_43597 = cljs.core.count.call(null,inst_43596__$1);
var inst_43598 = cljs.core.reset_BANG_.call(null,dctr,inst_43597);
var inst_43603 = cljs.core.seq.call(null,inst_43596__$1);
var inst_43604 = inst_43603;
var inst_43605 = null;
var inst_43606 = (0);
var inst_43607 = (0);
var state_43664__$1 = (function (){var statearr_43707 = state_43664;
(statearr_43707[(29)] = inst_43596__$1);

(statearr_43707[(20)] = inst_43604);

(statearr_43707[(21)] = inst_43606);

(statearr_43707[(10)] = inst_43607);

(statearr_43707[(12)] = inst_43605);

(statearr_43707[(30)] = inst_43598);

return statearr_43707;
})();
var statearr_43708_43777 = state_43664__$1;
(statearr_43708_43777[(2)] = null);

(statearr_43708_43777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (28))){
var inst_43604 = (state_43664[(20)]);
var inst_43623 = (state_43664[(25)]);
var inst_43623__$1 = cljs.core.seq.call(null,inst_43604);
var state_43664__$1 = (function (){var statearr_43709 = state_43664;
(statearr_43709[(25)] = inst_43623__$1);

return statearr_43709;
})();
if(inst_43623__$1){
var statearr_43710_43778 = state_43664__$1;
(statearr_43710_43778[(1)] = (33));

} else {
var statearr_43711_43779 = state_43664__$1;
(statearr_43711_43779[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (25))){
var inst_43606 = (state_43664[(21)]);
var inst_43607 = (state_43664[(10)]);
var inst_43609 = (inst_43607 < inst_43606);
var inst_43610 = inst_43609;
var state_43664__$1 = state_43664;
if(cljs.core.truth_(inst_43610)){
var statearr_43712_43780 = state_43664__$1;
(statearr_43712_43780[(1)] = (27));

} else {
var statearr_43713_43781 = state_43664__$1;
(statearr_43713_43781[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (34))){
var state_43664__$1 = state_43664;
var statearr_43714_43782 = state_43664__$1;
(statearr_43714_43782[(2)] = null);

(statearr_43714_43782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (17))){
var state_43664__$1 = state_43664;
var statearr_43715_43783 = state_43664__$1;
(statearr_43715_43783[(2)] = null);

(statearr_43715_43783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (3))){
var inst_43662 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43664__$1,inst_43662);
} else {
if((state_val_43665 === (12))){
var inst_43591 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43716_43784 = state_43664__$1;
(statearr_43716_43784[(2)] = inst_43591);

(statearr_43716_43784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (2))){
var state_43664__$1 = state_43664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43664__$1,(4),ch);
} else {
if((state_val_43665 === (23))){
var state_43664__$1 = state_43664;
var statearr_43717_43785 = state_43664__$1;
(statearr_43717_43785[(2)] = null);

(statearr_43717_43785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (35))){
var inst_43646 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43718_43786 = state_43664__$1;
(statearr_43718_43786[(2)] = inst_43646);

(statearr_43718_43786[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (19))){
var inst_43563 = (state_43664[(7)]);
var inst_43567 = cljs.core.chunk_first.call(null,inst_43563);
var inst_43568 = cljs.core.chunk_rest.call(null,inst_43563);
var inst_43569 = cljs.core.count.call(null,inst_43567);
var inst_43541 = inst_43568;
var inst_43542 = inst_43567;
var inst_43543 = inst_43569;
var inst_43544 = (0);
var state_43664__$1 = (function (){var statearr_43719 = state_43664;
(statearr_43719[(13)] = inst_43542);

(statearr_43719[(14)] = inst_43541);

(statearr_43719[(16)] = inst_43543);

(statearr_43719[(17)] = inst_43544);

return statearr_43719;
})();
var statearr_43720_43787 = state_43664__$1;
(statearr_43720_43787[(2)] = null);

(statearr_43720_43787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (11))){
var inst_43541 = (state_43664[(14)]);
var inst_43563 = (state_43664[(7)]);
var inst_43563__$1 = cljs.core.seq.call(null,inst_43541);
var state_43664__$1 = (function (){var statearr_43721 = state_43664;
(statearr_43721[(7)] = inst_43563__$1);

return statearr_43721;
})();
if(inst_43563__$1){
var statearr_43722_43788 = state_43664__$1;
(statearr_43722_43788[(1)] = (16));

} else {
var statearr_43723_43789 = state_43664__$1;
(statearr_43723_43789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (9))){
var inst_43593 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43724_43790 = state_43664__$1;
(statearr_43724_43790[(2)] = inst_43593);

(statearr_43724_43790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (5))){
var inst_43539 = cljs.core.deref.call(null,cs);
var inst_43540 = cljs.core.seq.call(null,inst_43539);
var inst_43541 = inst_43540;
var inst_43542 = null;
var inst_43543 = (0);
var inst_43544 = (0);
var state_43664__$1 = (function (){var statearr_43725 = state_43664;
(statearr_43725[(13)] = inst_43542);

(statearr_43725[(14)] = inst_43541);

(statearr_43725[(16)] = inst_43543);

(statearr_43725[(17)] = inst_43544);

return statearr_43725;
})();
var statearr_43726_43791 = state_43664__$1;
(statearr_43726_43791[(2)] = null);

(statearr_43726_43791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (14))){
var state_43664__$1 = state_43664;
var statearr_43727_43792 = state_43664__$1;
(statearr_43727_43792[(2)] = null);

(statearr_43727_43792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (45))){
var inst_43654 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43728_43793 = state_43664__$1;
(statearr_43728_43793[(2)] = inst_43654);

(statearr_43728_43793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (26))){
var inst_43596 = (state_43664[(29)]);
var inst_43650 = (state_43664[(2)]);
var inst_43651 = cljs.core.seq.call(null,inst_43596);
var state_43664__$1 = (function (){var statearr_43729 = state_43664;
(statearr_43729[(31)] = inst_43650);

return statearr_43729;
})();
if(inst_43651){
var statearr_43730_43794 = state_43664__$1;
(statearr_43730_43794[(1)] = (42));

} else {
var statearr_43731_43795 = state_43664__$1;
(statearr_43731_43795[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (16))){
var inst_43563 = (state_43664[(7)]);
var inst_43565 = cljs.core.chunked_seq_QMARK_.call(null,inst_43563);
var state_43664__$1 = state_43664;
if(inst_43565){
var statearr_43732_43796 = state_43664__$1;
(statearr_43732_43796[(1)] = (19));

} else {
var statearr_43733_43797 = state_43664__$1;
(statearr_43733_43797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (38))){
var inst_43643 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43734_43798 = state_43664__$1;
(statearr_43734_43798[(2)] = inst_43643);

(statearr_43734_43798[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (30))){
var state_43664__$1 = state_43664;
var statearr_43735_43799 = state_43664__$1;
(statearr_43735_43799[(2)] = null);

(statearr_43735_43799[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (10))){
var inst_43542 = (state_43664[(13)]);
var inst_43544 = (state_43664[(17)]);
var inst_43552 = cljs.core._nth.call(null,inst_43542,inst_43544);
var inst_43553 = cljs.core.nth.call(null,inst_43552,(0),null);
var inst_43554 = cljs.core.nth.call(null,inst_43552,(1),null);
var state_43664__$1 = (function (){var statearr_43736 = state_43664;
(statearr_43736[(26)] = inst_43553);

return statearr_43736;
})();
if(cljs.core.truth_(inst_43554)){
var statearr_43737_43800 = state_43664__$1;
(statearr_43737_43800[(1)] = (13));

} else {
var statearr_43738_43801 = state_43664__$1;
(statearr_43738_43801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (18))){
var inst_43589 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43739_43802 = state_43664__$1;
(statearr_43739_43802[(2)] = inst_43589);

(statearr_43739_43802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (42))){
var state_43664__$1 = state_43664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43664__$1,(45),dchan);
} else {
if((state_val_43665 === (37))){
var inst_43532 = (state_43664[(9)]);
var inst_43632 = (state_43664[(23)]);
var inst_43623 = (state_43664[(25)]);
var inst_43632__$1 = cljs.core.first.call(null,inst_43623);
var inst_43633 = cljs.core.async.put_BANG_.call(null,inst_43632__$1,inst_43532,done);
var state_43664__$1 = (function (){var statearr_43740 = state_43664;
(statearr_43740[(23)] = inst_43632__$1);

return statearr_43740;
})();
if(cljs.core.truth_(inst_43633)){
var statearr_43741_43803 = state_43664__$1;
(statearr_43741_43803[(1)] = (39));

} else {
var statearr_43742_43804 = state_43664__$1;
(statearr_43742_43804[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (8))){
var inst_43543 = (state_43664[(16)]);
var inst_43544 = (state_43664[(17)]);
var inst_43546 = (inst_43544 < inst_43543);
var inst_43547 = inst_43546;
var state_43664__$1 = state_43664;
if(cljs.core.truth_(inst_43547)){
var statearr_43743_43805 = state_43664__$1;
(statearr_43743_43805[(1)] = (10));

} else {
var statearr_43744_43806 = state_43664__$1;
(statearr_43744_43806[(1)] = (11));

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
});})(c__42429__auto___43752,cs,m,dchan,dctr,done))
;
return ((function (switch__42317__auto__,c__42429__auto___43752,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42318__auto__ = null;
var cljs$core$async$mult_$_state_machine__42318__auto____0 = (function (){
var statearr_43748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43748[(0)] = cljs$core$async$mult_$_state_machine__42318__auto__);

(statearr_43748[(1)] = (1));

return statearr_43748;
});
var cljs$core$async$mult_$_state_machine__42318__auto____1 = (function (state_43664){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_43664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e43749){if((e43749 instanceof Object)){
var ex__42321__auto__ = e43749;
var statearr_43750_43807 = state_43664;
(statearr_43750_43807[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43808 = state_43664;
state_43664 = G__43808;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42318__auto__ = function(state_43664){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42318__auto____1.call(this,state_43664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42318__auto____0;
cljs$core$async$mult_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42318__auto____1;
return cljs$core$async$mult_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___43752,cs,m,dchan,dctr,done))
})();
var state__42431__auto__ = (function (){var statearr_43751 = f__42430__auto__.call(null);
(statearr_43751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___43752);

return statearr_43751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___43752,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args43809 = [];
var len__33922__auto___43812 = arguments.length;
var i__33923__auto___43813 = (0);
while(true){
if((i__33923__auto___43813 < len__33922__auto___43812)){
args43809.push((arguments[i__33923__auto___43813]));

var G__43814 = (i__33923__auto___43813 + (1));
i__33923__auto___43813 = G__43814;
continue;
} else {
}
break;
}

var G__43811 = args43809.length;
switch (G__43811) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43809.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,ch);
} else {
var m__33511__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,ch);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,ch);
} else {
var m__33511__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,ch);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m);
} else {
var m__33511__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,state_map);
} else {
var m__33511__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,state_map);
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
var x__33510__auto__ = (((m == null))?null:m);
var m__33511__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,m,mode);
} else {
var m__33511__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__33929__auto__ = [];
var len__33922__auto___43826 = arguments.length;
var i__33923__auto___43827 = (0);
while(true){
if((i__33923__auto___43827 < len__33922__auto___43826)){
args__33929__auto__.push((arguments[i__33923__auto___43827]));

var G__43828 = (i__33923__auto___43827 + (1));
i__33923__auto___43827 = G__43828;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((3) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33930__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43820){
var map__43821 = p__43820;
var map__43821__$1 = ((((!((map__43821 == null)))?((((map__43821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43821):map__43821);
var opts = map__43821__$1;
var statearr_43823_43829 = state;
(statearr_43823_43829[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43821,map__43821__$1,opts){
return (function (val){
var statearr_43824_43830 = state;
(statearr_43824_43830[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43821,map__43821__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43825_43831 = state;
(statearr_43825_43831[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43816){
var G__43817 = cljs.core.first.call(null,seq43816);
var seq43816__$1 = cljs.core.next.call(null,seq43816);
var G__43818 = cljs.core.first.call(null,seq43816__$1);
var seq43816__$2 = cljs.core.next.call(null,seq43816__$1);
var G__43819 = cljs.core.first.call(null,seq43816__$2);
var seq43816__$3 = cljs.core.next.call(null,seq43816__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43817,G__43818,G__43819,seq43816__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async43997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43997 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43998){
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
this.meta43998 = meta43998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43999,meta43998__$1){
var self__ = this;
var _43999__$1 = this;
return (new cljs.core.async.t_cljs$core$async43997(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43998__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43999){
var self__ = this;
var _43999__$1 = this;
return self__.meta43998;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43997.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43998","meta43998",1334232470,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43997";

cljs.core.async.t_cljs$core$async43997.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async43997");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43997 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43998){
return (new cljs.core.async.t_cljs$core$async43997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43998));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43997(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42429__auto___44162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44099){
var state_val_44100 = (state_44099[(1)]);
if((state_val_44100 === (7))){
var inst_44015 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
var statearr_44101_44163 = state_44099__$1;
(statearr_44101_44163[(2)] = inst_44015);

(statearr_44101_44163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (20))){
var inst_44027 = (state_44099[(7)]);
var state_44099__$1 = state_44099;
var statearr_44102_44164 = state_44099__$1;
(statearr_44102_44164[(2)] = inst_44027);

(statearr_44102_44164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (27))){
var state_44099__$1 = state_44099;
var statearr_44103_44165 = state_44099__$1;
(statearr_44103_44165[(2)] = null);

(statearr_44103_44165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (1))){
var inst_44003 = (state_44099[(8)]);
var inst_44003__$1 = calc_state.call(null);
var inst_44005 = (inst_44003__$1 == null);
var inst_44006 = cljs.core.not.call(null,inst_44005);
var state_44099__$1 = (function (){var statearr_44104 = state_44099;
(statearr_44104[(8)] = inst_44003__$1);

return statearr_44104;
})();
if(inst_44006){
var statearr_44105_44166 = state_44099__$1;
(statearr_44105_44166[(1)] = (2));

} else {
var statearr_44106_44167 = state_44099__$1;
(statearr_44106_44167[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (24))){
var inst_44059 = (state_44099[(9)]);
var inst_44050 = (state_44099[(10)]);
var inst_44073 = (state_44099[(11)]);
var inst_44073__$1 = inst_44050.call(null,inst_44059);
var state_44099__$1 = (function (){var statearr_44107 = state_44099;
(statearr_44107[(11)] = inst_44073__$1);

return statearr_44107;
})();
if(cljs.core.truth_(inst_44073__$1)){
var statearr_44108_44168 = state_44099__$1;
(statearr_44108_44168[(1)] = (29));

} else {
var statearr_44109_44169 = state_44099__$1;
(statearr_44109_44169[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (4))){
var inst_44018 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44018)){
var statearr_44110_44170 = state_44099__$1;
(statearr_44110_44170[(1)] = (8));

} else {
var statearr_44111_44171 = state_44099__$1;
(statearr_44111_44171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (15))){
var inst_44044 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44044)){
var statearr_44112_44172 = state_44099__$1;
(statearr_44112_44172[(1)] = (19));

} else {
var statearr_44113_44173 = state_44099__$1;
(statearr_44113_44173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (21))){
var inst_44049 = (state_44099[(12)]);
var inst_44049__$1 = (state_44099[(2)]);
var inst_44050 = cljs.core.get.call(null,inst_44049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44051 = cljs.core.get.call(null,inst_44049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44052 = cljs.core.get.call(null,inst_44049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44099__$1 = (function (){var statearr_44114 = state_44099;
(statearr_44114[(10)] = inst_44050);

(statearr_44114[(13)] = inst_44051);

(statearr_44114[(12)] = inst_44049__$1);

return statearr_44114;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44099__$1,(22),inst_44052);
} else {
if((state_val_44100 === (31))){
var inst_44081 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44081)){
var statearr_44115_44174 = state_44099__$1;
(statearr_44115_44174[(1)] = (32));

} else {
var statearr_44116_44175 = state_44099__$1;
(statearr_44116_44175[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (32))){
var inst_44058 = (state_44099[(14)]);
var state_44099__$1 = state_44099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44099__$1,(35),out,inst_44058);
} else {
if((state_val_44100 === (33))){
var inst_44049 = (state_44099[(12)]);
var inst_44027 = inst_44049;
var state_44099__$1 = (function (){var statearr_44117 = state_44099;
(statearr_44117[(7)] = inst_44027);

return statearr_44117;
})();
var statearr_44118_44176 = state_44099__$1;
(statearr_44118_44176[(2)] = null);

(statearr_44118_44176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (13))){
var inst_44027 = (state_44099[(7)]);
var inst_44034 = inst_44027.cljs$lang$protocol_mask$partition0$;
var inst_44035 = (inst_44034 & (64));
var inst_44036 = inst_44027.cljs$core$ISeq$;
var inst_44037 = (inst_44035) || (inst_44036);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44037)){
var statearr_44119_44177 = state_44099__$1;
(statearr_44119_44177[(1)] = (16));

} else {
var statearr_44120_44178 = state_44099__$1;
(statearr_44120_44178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (22))){
var inst_44059 = (state_44099[(9)]);
var inst_44058 = (state_44099[(14)]);
var inst_44057 = (state_44099[(2)]);
var inst_44058__$1 = cljs.core.nth.call(null,inst_44057,(0),null);
var inst_44059__$1 = cljs.core.nth.call(null,inst_44057,(1),null);
var inst_44060 = (inst_44058__$1 == null);
var inst_44061 = cljs.core._EQ_.call(null,inst_44059__$1,change);
var inst_44062 = (inst_44060) || (inst_44061);
var state_44099__$1 = (function (){var statearr_44121 = state_44099;
(statearr_44121[(9)] = inst_44059__$1);

(statearr_44121[(14)] = inst_44058__$1);

return statearr_44121;
})();
if(cljs.core.truth_(inst_44062)){
var statearr_44122_44179 = state_44099__$1;
(statearr_44122_44179[(1)] = (23));

} else {
var statearr_44123_44180 = state_44099__$1;
(statearr_44123_44180[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (36))){
var inst_44049 = (state_44099[(12)]);
var inst_44027 = inst_44049;
var state_44099__$1 = (function (){var statearr_44124 = state_44099;
(statearr_44124[(7)] = inst_44027);

return statearr_44124;
})();
var statearr_44125_44181 = state_44099__$1;
(statearr_44125_44181[(2)] = null);

(statearr_44125_44181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (29))){
var inst_44073 = (state_44099[(11)]);
var state_44099__$1 = state_44099;
var statearr_44126_44182 = state_44099__$1;
(statearr_44126_44182[(2)] = inst_44073);

(statearr_44126_44182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (6))){
var state_44099__$1 = state_44099;
var statearr_44127_44183 = state_44099__$1;
(statearr_44127_44183[(2)] = false);

(statearr_44127_44183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (28))){
var inst_44069 = (state_44099[(2)]);
var inst_44070 = calc_state.call(null);
var inst_44027 = inst_44070;
var state_44099__$1 = (function (){var statearr_44128 = state_44099;
(statearr_44128[(7)] = inst_44027);

(statearr_44128[(15)] = inst_44069);

return statearr_44128;
})();
var statearr_44129_44184 = state_44099__$1;
(statearr_44129_44184[(2)] = null);

(statearr_44129_44184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (25))){
var inst_44095 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
var statearr_44130_44185 = state_44099__$1;
(statearr_44130_44185[(2)] = inst_44095);

(statearr_44130_44185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (34))){
var inst_44093 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
var statearr_44131_44186 = state_44099__$1;
(statearr_44131_44186[(2)] = inst_44093);

(statearr_44131_44186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (17))){
var state_44099__$1 = state_44099;
var statearr_44132_44187 = state_44099__$1;
(statearr_44132_44187[(2)] = false);

(statearr_44132_44187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (3))){
var state_44099__$1 = state_44099;
var statearr_44133_44188 = state_44099__$1;
(statearr_44133_44188[(2)] = false);

(statearr_44133_44188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (12))){
var inst_44097 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44099__$1,inst_44097);
} else {
if((state_val_44100 === (2))){
var inst_44003 = (state_44099[(8)]);
var inst_44008 = inst_44003.cljs$lang$protocol_mask$partition0$;
var inst_44009 = (inst_44008 & (64));
var inst_44010 = inst_44003.cljs$core$ISeq$;
var inst_44011 = (inst_44009) || (inst_44010);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44011)){
var statearr_44134_44189 = state_44099__$1;
(statearr_44134_44189[(1)] = (5));

} else {
var statearr_44135_44190 = state_44099__$1;
(statearr_44135_44190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (23))){
var inst_44058 = (state_44099[(14)]);
var inst_44064 = (inst_44058 == null);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44064)){
var statearr_44136_44191 = state_44099__$1;
(statearr_44136_44191[(1)] = (26));

} else {
var statearr_44137_44192 = state_44099__$1;
(statearr_44137_44192[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (35))){
var inst_44084 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
if(cljs.core.truth_(inst_44084)){
var statearr_44138_44193 = state_44099__$1;
(statearr_44138_44193[(1)] = (36));

} else {
var statearr_44139_44194 = state_44099__$1;
(statearr_44139_44194[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (19))){
var inst_44027 = (state_44099[(7)]);
var inst_44046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44027);
var state_44099__$1 = state_44099;
var statearr_44140_44195 = state_44099__$1;
(statearr_44140_44195[(2)] = inst_44046);

(statearr_44140_44195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (11))){
var inst_44027 = (state_44099[(7)]);
var inst_44031 = (inst_44027 == null);
var inst_44032 = cljs.core.not.call(null,inst_44031);
var state_44099__$1 = state_44099;
if(inst_44032){
var statearr_44141_44196 = state_44099__$1;
(statearr_44141_44196[(1)] = (13));

} else {
var statearr_44142_44197 = state_44099__$1;
(statearr_44142_44197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (9))){
var inst_44003 = (state_44099[(8)]);
var state_44099__$1 = state_44099;
var statearr_44143_44198 = state_44099__$1;
(statearr_44143_44198[(2)] = inst_44003);

(statearr_44143_44198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (5))){
var state_44099__$1 = state_44099;
var statearr_44144_44199 = state_44099__$1;
(statearr_44144_44199[(2)] = true);

(statearr_44144_44199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (14))){
var state_44099__$1 = state_44099;
var statearr_44145_44200 = state_44099__$1;
(statearr_44145_44200[(2)] = false);

(statearr_44145_44200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (26))){
var inst_44059 = (state_44099[(9)]);
var inst_44066 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44059);
var state_44099__$1 = state_44099;
var statearr_44146_44201 = state_44099__$1;
(statearr_44146_44201[(2)] = inst_44066);

(statearr_44146_44201[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (16))){
var state_44099__$1 = state_44099;
var statearr_44147_44202 = state_44099__$1;
(statearr_44147_44202[(2)] = true);

(statearr_44147_44202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (38))){
var inst_44089 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
var statearr_44148_44203 = state_44099__$1;
(statearr_44148_44203[(2)] = inst_44089);

(statearr_44148_44203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (30))){
var inst_44059 = (state_44099[(9)]);
var inst_44050 = (state_44099[(10)]);
var inst_44051 = (state_44099[(13)]);
var inst_44076 = cljs.core.empty_QMARK_.call(null,inst_44050);
var inst_44077 = inst_44051.call(null,inst_44059);
var inst_44078 = cljs.core.not.call(null,inst_44077);
var inst_44079 = (inst_44076) && (inst_44078);
var state_44099__$1 = state_44099;
var statearr_44149_44204 = state_44099__$1;
(statearr_44149_44204[(2)] = inst_44079);

(statearr_44149_44204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (10))){
var inst_44003 = (state_44099[(8)]);
var inst_44023 = (state_44099[(2)]);
var inst_44024 = cljs.core.get.call(null,inst_44023,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44025 = cljs.core.get.call(null,inst_44023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44026 = cljs.core.get.call(null,inst_44023,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44027 = inst_44003;
var state_44099__$1 = (function (){var statearr_44150 = state_44099;
(statearr_44150[(16)] = inst_44025);

(statearr_44150[(17)] = inst_44024);

(statearr_44150[(18)] = inst_44026);

(statearr_44150[(7)] = inst_44027);

return statearr_44150;
})();
var statearr_44151_44205 = state_44099__$1;
(statearr_44151_44205[(2)] = null);

(statearr_44151_44205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (18))){
var inst_44041 = (state_44099[(2)]);
var state_44099__$1 = state_44099;
var statearr_44152_44206 = state_44099__$1;
(statearr_44152_44206[(2)] = inst_44041);

(statearr_44152_44206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (37))){
var state_44099__$1 = state_44099;
var statearr_44153_44207 = state_44099__$1;
(statearr_44153_44207[(2)] = null);

(statearr_44153_44207[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44100 === (8))){
var inst_44003 = (state_44099[(8)]);
var inst_44020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44003);
var state_44099__$1 = state_44099;
var statearr_44154_44208 = state_44099__$1;
(statearr_44154_44208[(2)] = inst_44020);

(statearr_44154_44208[(1)] = (10));


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
});})(c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42317__auto__,c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42318__auto__ = null;
var cljs$core$async$mix_$_state_machine__42318__auto____0 = (function (){
var statearr_44158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44158[(0)] = cljs$core$async$mix_$_state_machine__42318__auto__);

(statearr_44158[(1)] = (1));

return statearr_44158;
});
var cljs$core$async$mix_$_state_machine__42318__auto____1 = (function (state_44099){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44159){if((e44159 instanceof Object)){
var ex__42321__auto__ = e44159;
var statearr_44160_44209 = state_44099;
(statearr_44160_44209[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44210 = state_44099;
state_44099 = G__44210;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42318__auto__ = function(state_44099){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42318__auto____1.call(this,state_44099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42318__auto____0;
cljs$core$async$mix_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42318__auto____1;
return cljs$core$async$mix_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42431__auto__ = (function (){var statearr_44161 = f__42430__auto__.call(null);
(statearr_44161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44162);

return statearr_44161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__33510__auto__ = (((p == null))?null:p);
var m__33511__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__33511__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__33510__auto__ = (((p == null))?null:p);
var m__33511__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,p,v,ch);
} else {
var m__33511__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args44211 = [];
var len__33922__auto___44214 = arguments.length;
var i__33923__auto___44215 = (0);
while(true){
if((i__33923__auto___44215 < len__33922__auto___44214)){
args44211.push((arguments[i__33923__auto___44215]));

var G__44216 = (i__33923__auto___44215 + (1));
i__33923__auto___44215 = G__44216;
continue;
} else {
}
break;
}

var G__44213 = args44211.length;
switch (G__44213) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44211.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__33510__auto__ = (((p == null))?null:p);
var m__33511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,p);
} else {
var m__33511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,p);
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
var x__33510__auto__ = (((p == null))?null:p);
var m__33511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,p,v);
} else {
var m__33511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args44219 = [];
var len__33922__auto___44344 = arguments.length;
var i__33923__auto___44345 = (0);
while(true){
if((i__33923__auto___44345 < len__33922__auto___44344)){
args44219.push((arguments[i__33923__auto___44345]));

var G__44346 = (i__33923__auto___44345 + (1));
i__33923__auto___44345 = G__44346;
continue;
} else {
}
break;
}

var G__44221 = args44219.length;
switch (G__44221) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44219.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__32847__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__32847__auto__,mults){
return (function (p1__44218_SHARP_){
if(cljs.core.truth_(p1__44218_SHARP_.call(null,topic))){
return p1__44218_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44218_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__32847__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44222 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44223){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44223 = meta44223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44224,meta44223__$1){
var self__ = this;
var _44224__$1 = this;
return (new cljs.core.async.t_cljs$core$async44222(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44223__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44224){
var self__ = this;
var _44224__$1 = this;
return self__.meta44223;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44222.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44223","meta44223",-1218783309,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44222";

cljs.core.async.t_cljs$core$async44222.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async44222");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44222 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44223){
return (new cljs.core.async.t_cljs$core$async44222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44223));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44222(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42429__auto___44348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44348,mults,ensure_mult,p){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44348,mults,ensure_mult,p){
return (function (state_44296){
var state_val_44297 = (state_44296[(1)]);
if((state_val_44297 === (7))){
var inst_44292 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44298_44349 = state_44296__$1;
(statearr_44298_44349[(2)] = inst_44292);

(statearr_44298_44349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (20))){
var state_44296__$1 = state_44296;
var statearr_44299_44350 = state_44296__$1;
(statearr_44299_44350[(2)] = null);

(statearr_44299_44350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (1))){
var state_44296__$1 = state_44296;
var statearr_44300_44351 = state_44296__$1;
(statearr_44300_44351[(2)] = null);

(statearr_44300_44351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (24))){
var inst_44275 = (state_44296[(7)]);
var inst_44284 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44275);
var state_44296__$1 = state_44296;
var statearr_44301_44352 = state_44296__$1;
(statearr_44301_44352[(2)] = inst_44284);

(statearr_44301_44352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (4))){
var inst_44227 = (state_44296[(8)]);
var inst_44227__$1 = (state_44296[(2)]);
var inst_44228 = (inst_44227__$1 == null);
var state_44296__$1 = (function (){var statearr_44302 = state_44296;
(statearr_44302[(8)] = inst_44227__$1);

return statearr_44302;
})();
if(cljs.core.truth_(inst_44228)){
var statearr_44303_44353 = state_44296__$1;
(statearr_44303_44353[(1)] = (5));

} else {
var statearr_44304_44354 = state_44296__$1;
(statearr_44304_44354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (15))){
var inst_44269 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44305_44355 = state_44296__$1;
(statearr_44305_44355[(2)] = inst_44269);

(statearr_44305_44355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (21))){
var inst_44289 = (state_44296[(2)]);
var state_44296__$1 = (function (){var statearr_44306 = state_44296;
(statearr_44306[(9)] = inst_44289);

return statearr_44306;
})();
var statearr_44307_44356 = state_44296__$1;
(statearr_44307_44356[(2)] = null);

(statearr_44307_44356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (13))){
var inst_44251 = (state_44296[(10)]);
var inst_44253 = cljs.core.chunked_seq_QMARK_.call(null,inst_44251);
var state_44296__$1 = state_44296;
if(inst_44253){
var statearr_44308_44357 = state_44296__$1;
(statearr_44308_44357[(1)] = (16));

} else {
var statearr_44309_44358 = state_44296__$1;
(statearr_44309_44358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (22))){
var inst_44281 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
if(cljs.core.truth_(inst_44281)){
var statearr_44310_44359 = state_44296__$1;
(statearr_44310_44359[(1)] = (23));

} else {
var statearr_44311_44360 = state_44296__$1;
(statearr_44311_44360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (6))){
var inst_44277 = (state_44296[(11)]);
var inst_44227 = (state_44296[(8)]);
var inst_44275 = (state_44296[(7)]);
var inst_44275__$1 = topic_fn.call(null,inst_44227);
var inst_44276 = cljs.core.deref.call(null,mults);
var inst_44277__$1 = cljs.core.get.call(null,inst_44276,inst_44275__$1);
var state_44296__$1 = (function (){var statearr_44312 = state_44296;
(statearr_44312[(11)] = inst_44277__$1);

(statearr_44312[(7)] = inst_44275__$1);

return statearr_44312;
})();
if(cljs.core.truth_(inst_44277__$1)){
var statearr_44313_44361 = state_44296__$1;
(statearr_44313_44361[(1)] = (19));

} else {
var statearr_44314_44362 = state_44296__$1;
(statearr_44314_44362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (25))){
var inst_44286 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44315_44363 = state_44296__$1;
(statearr_44315_44363[(2)] = inst_44286);

(statearr_44315_44363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (17))){
var inst_44251 = (state_44296[(10)]);
var inst_44260 = cljs.core.first.call(null,inst_44251);
var inst_44261 = cljs.core.async.muxch_STAR_.call(null,inst_44260);
var inst_44262 = cljs.core.async.close_BANG_.call(null,inst_44261);
var inst_44263 = cljs.core.next.call(null,inst_44251);
var inst_44237 = inst_44263;
var inst_44238 = null;
var inst_44239 = (0);
var inst_44240 = (0);
var state_44296__$1 = (function (){var statearr_44316 = state_44296;
(statearr_44316[(12)] = inst_44238);

(statearr_44316[(13)] = inst_44262);

(statearr_44316[(14)] = inst_44237);

(statearr_44316[(15)] = inst_44240);

(statearr_44316[(16)] = inst_44239);

return statearr_44316;
})();
var statearr_44317_44364 = state_44296__$1;
(statearr_44317_44364[(2)] = null);

(statearr_44317_44364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (3))){
var inst_44294 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44296__$1,inst_44294);
} else {
if((state_val_44297 === (12))){
var inst_44271 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44318_44365 = state_44296__$1;
(statearr_44318_44365[(2)] = inst_44271);

(statearr_44318_44365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (2))){
var state_44296__$1 = state_44296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44296__$1,(4),ch);
} else {
if((state_val_44297 === (23))){
var state_44296__$1 = state_44296;
var statearr_44319_44366 = state_44296__$1;
(statearr_44319_44366[(2)] = null);

(statearr_44319_44366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (19))){
var inst_44277 = (state_44296[(11)]);
var inst_44227 = (state_44296[(8)]);
var inst_44279 = cljs.core.async.muxch_STAR_.call(null,inst_44277);
var state_44296__$1 = state_44296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44296__$1,(22),inst_44279,inst_44227);
} else {
if((state_val_44297 === (11))){
var inst_44237 = (state_44296[(14)]);
var inst_44251 = (state_44296[(10)]);
var inst_44251__$1 = cljs.core.seq.call(null,inst_44237);
var state_44296__$1 = (function (){var statearr_44320 = state_44296;
(statearr_44320[(10)] = inst_44251__$1);

return statearr_44320;
})();
if(inst_44251__$1){
var statearr_44321_44367 = state_44296__$1;
(statearr_44321_44367[(1)] = (13));

} else {
var statearr_44322_44368 = state_44296__$1;
(statearr_44322_44368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (9))){
var inst_44273 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44323_44369 = state_44296__$1;
(statearr_44323_44369[(2)] = inst_44273);

(statearr_44323_44369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (5))){
var inst_44234 = cljs.core.deref.call(null,mults);
var inst_44235 = cljs.core.vals.call(null,inst_44234);
var inst_44236 = cljs.core.seq.call(null,inst_44235);
var inst_44237 = inst_44236;
var inst_44238 = null;
var inst_44239 = (0);
var inst_44240 = (0);
var state_44296__$1 = (function (){var statearr_44324 = state_44296;
(statearr_44324[(12)] = inst_44238);

(statearr_44324[(14)] = inst_44237);

(statearr_44324[(15)] = inst_44240);

(statearr_44324[(16)] = inst_44239);

return statearr_44324;
})();
var statearr_44325_44370 = state_44296__$1;
(statearr_44325_44370[(2)] = null);

(statearr_44325_44370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (14))){
var state_44296__$1 = state_44296;
var statearr_44329_44371 = state_44296__$1;
(statearr_44329_44371[(2)] = null);

(statearr_44329_44371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (16))){
var inst_44251 = (state_44296[(10)]);
var inst_44255 = cljs.core.chunk_first.call(null,inst_44251);
var inst_44256 = cljs.core.chunk_rest.call(null,inst_44251);
var inst_44257 = cljs.core.count.call(null,inst_44255);
var inst_44237 = inst_44256;
var inst_44238 = inst_44255;
var inst_44239 = inst_44257;
var inst_44240 = (0);
var state_44296__$1 = (function (){var statearr_44330 = state_44296;
(statearr_44330[(12)] = inst_44238);

(statearr_44330[(14)] = inst_44237);

(statearr_44330[(15)] = inst_44240);

(statearr_44330[(16)] = inst_44239);

return statearr_44330;
})();
var statearr_44331_44372 = state_44296__$1;
(statearr_44331_44372[(2)] = null);

(statearr_44331_44372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (10))){
var inst_44238 = (state_44296[(12)]);
var inst_44237 = (state_44296[(14)]);
var inst_44240 = (state_44296[(15)]);
var inst_44239 = (state_44296[(16)]);
var inst_44245 = cljs.core._nth.call(null,inst_44238,inst_44240);
var inst_44246 = cljs.core.async.muxch_STAR_.call(null,inst_44245);
var inst_44247 = cljs.core.async.close_BANG_.call(null,inst_44246);
var inst_44248 = (inst_44240 + (1));
var tmp44326 = inst_44238;
var tmp44327 = inst_44237;
var tmp44328 = inst_44239;
var inst_44237__$1 = tmp44327;
var inst_44238__$1 = tmp44326;
var inst_44239__$1 = tmp44328;
var inst_44240__$1 = inst_44248;
var state_44296__$1 = (function (){var statearr_44332 = state_44296;
(statearr_44332[(12)] = inst_44238__$1);

(statearr_44332[(17)] = inst_44247);

(statearr_44332[(14)] = inst_44237__$1);

(statearr_44332[(15)] = inst_44240__$1);

(statearr_44332[(16)] = inst_44239__$1);

return statearr_44332;
})();
var statearr_44333_44373 = state_44296__$1;
(statearr_44333_44373[(2)] = null);

(statearr_44333_44373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (18))){
var inst_44266 = (state_44296[(2)]);
var state_44296__$1 = state_44296;
var statearr_44334_44374 = state_44296__$1;
(statearr_44334_44374[(2)] = inst_44266);

(statearr_44334_44374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44297 === (8))){
var inst_44240 = (state_44296[(15)]);
var inst_44239 = (state_44296[(16)]);
var inst_44242 = (inst_44240 < inst_44239);
var inst_44243 = inst_44242;
var state_44296__$1 = state_44296;
if(cljs.core.truth_(inst_44243)){
var statearr_44335_44375 = state_44296__$1;
(statearr_44335_44375[(1)] = (10));

} else {
var statearr_44336_44376 = state_44296__$1;
(statearr_44336_44376[(1)] = (11));

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
});})(c__42429__auto___44348,mults,ensure_mult,p))
;
return ((function (switch__42317__auto__,c__42429__auto___44348,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_44340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44340[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_44340[(1)] = (1));

return statearr_44340;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44296){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44341){if((e44341 instanceof Object)){
var ex__42321__auto__ = e44341;
var statearr_44342_44377 = state_44296;
(statearr_44342_44377[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44378 = state_44296;
state_44296 = G__44378;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44348,mults,ensure_mult,p))
})();
var state__42431__auto__ = (function (){var statearr_44343 = f__42430__auto__.call(null);
(statearr_44343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44348);

return statearr_44343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44348,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args44379 = [];
var len__33922__auto___44382 = arguments.length;
var i__33923__auto___44383 = (0);
while(true){
if((i__33923__auto___44383 < len__33922__auto___44382)){
args44379.push((arguments[i__33923__auto___44383]));

var G__44384 = (i__33923__auto___44383 + (1));
i__33923__auto___44383 = G__44384;
continue;
} else {
}
break;
}

var G__44381 = args44379.length;
switch (G__44381) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44379.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args44386 = [];
var len__33922__auto___44389 = arguments.length;
var i__33923__auto___44390 = (0);
while(true){
if((i__33923__auto___44390 < len__33922__auto___44389)){
args44386.push((arguments[i__33923__auto___44390]));

var G__44391 = (i__33923__auto___44390 + (1));
i__33923__auto___44390 = G__44391;
continue;
} else {
}
break;
}

var G__44388 = args44386.length;
switch (G__44388) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44386.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args44393 = [];
var len__33922__auto___44464 = arguments.length;
var i__33923__auto___44465 = (0);
while(true){
if((i__33923__auto___44465 < len__33922__auto___44464)){
args44393.push((arguments[i__33923__auto___44465]));

var G__44466 = (i__33923__auto___44465 + (1));
i__33923__auto___44465 = G__44466;
continue;
} else {
}
break;
}

var G__44395 = args44393.length;
switch (G__44395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44393.length)].join('')));

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
var c__42429__auto___44468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44434){
var state_val_44435 = (state_44434[(1)]);
if((state_val_44435 === (7))){
var state_44434__$1 = state_44434;
var statearr_44436_44469 = state_44434__$1;
(statearr_44436_44469[(2)] = null);

(statearr_44436_44469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (1))){
var state_44434__$1 = state_44434;
var statearr_44437_44470 = state_44434__$1;
(statearr_44437_44470[(2)] = null);

(statearr_44437_44470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (4))){
var inst_44398 = (state_44434[(7)]);
var inst_44400 = (inst_44398 < cnt);
var state_44434__$1 = state_44434;
if(cljs.core.truth_(inst_44400)){
var statearr_44438_44471 = state_44434__$1;
(statearr_44438_44471[(1)] = (6));

} else {
var statearr_44439_44472 = state_44434__$1;
(statearr_44439_44472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (15))){
var inst_44430 = (state_44434[(2)]);
var state_44434__$1 = state_44434;
var statearr_44440_44473 = state_44434__$1;
(statearr_44440_44473[(2)] = inst_44430);

(statearr_44440_44473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (13))){
var inst_44423 = cljs.core.async.close_BANG_.call(null,out);
var state_44434__$1 = state_44434;
var statearr_44441_44474 = state_44434__$1;
(statearr_44441_44474[(2)] = inst_44423);

(statearr_44441_44474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (6))){
var state_44434__$1 = state_44434;
var statearr_44442_44475 = state_44434__$1;
(statearr_44442_44475[(2)] = null);

(statearr_44442_44475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (3))){
var inst_44432 = (state_44434[(2)]);
var state_44434__$1 = state_44434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44434__$1,inst_44432);
} else {
if((state_val_44435 === (12))){
var inst_44420 = (state_44434[(8)]);
var inst_44420__$1 = (state_44434[(2)]);
var inst_44421 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44420__$1);
var state_44434__$1 = (function (){var statearr_44443 = state_44434;
(statearr_44443[(8)] = inst_44420__$1);

return statearr_44443;
})();
if(cljs.core.truth_(inst_44421)){
var statearr_44444_44476 = state_44434__$1;
(statearr_44444_44476[(1)] = (13));

} else {
var statearr_44445_44477 = state_44434__$1;
(statearr_44445_44477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (2))){
var inst_44397 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44398 = (0);
var state_44434__$1 = (function (){var statearr_44446 = state_44434;
(statearr_44446[(9)] = inst_44397);

(statearr_44446[(7)] = inst_44398);

return statearr_44446;
})();
var statearr_44447_44478 = state_44434__$1;
(statearr_44447_44478[(2)] = null);

(statearr_44447_44478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (11))){
var inst_44398 = (state_44434[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44434,(10),Object,null,(9));
var inst_44407 = chs__$1.call(null,inst_44398);
var inst_44408 = done.call(null,inst_44398);
var inst_44409 = cljs.core.async.take_BANG_.call(null,inst_44407,inst_44408);
var state_44434__$1 = state_44434;
var statearr_44448_44479 = state_44434__$1;
(statearr_44448_44479[(2)] = inst_44409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (9))){
var inst_44398 = (state_44434[(7)]);
var inst_44411 = (state_44434[(2)]);
var inst_44412 = (inst_44398 + (1));
var inst_44398__$1 = inst_44412;
var state_44434__$1 = (function (){var statearr_44449 = state_44434;
(statearr_44449[(10)] = inst_44411);

(statearr_44449[(7)] = inst_44398__$1);

return statearr_44449;
})();
var statearr_44450_44480 = state_44434__$1;
(statearr_44450_44480[(2)] = null);

(statearr_44450_44480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (5))){
var inst_44418 = (state_44434[(2)]);
var state_44434__$1 = (function (){var statearr_44451 = state_44434;
(statearr_44451[(11)] = inst_44418);

return statearr_44451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44434__$1,(12),dchan);
} else {
if((state_val_44435 === (14))){
var inst_44420 = (state_44434[(8)]);
var inst_44425 = cljs.core.apply.call(null,f,inst_44420);
var state_44434__$1 = state_44434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44434__$1,(16),out,inst_44425);
} else {
if((state_val_44435 === (16))){
var inst_44427 = (state_44434[(2)]);
var state_44434__$1 = (function (){var statearr_44452 = state_44434;
(statearr_44452[(12)] = inst_44427);

return statearr_44452;
})();
var statearr_44453_44481 = state_44434__$1;
(statearr_44453_44481[(2)] = null);

(statearr_44453_44481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (10))){
var inst_44402 = (state_44434[(2)]);
var inst_44403 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44434__$1 = (function (){var statearr_44454 = state_44434;
(statearr_44454[(13)] = inst_44402);

return statearr_44454;
})();
var statearr_44455_44482 = state_44434__$1;
(statearr_44455_44482[(2)] = inst_44403);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44435 === (8))){
var inst_44416 = (state_44434[(2)]);
var state_44434__$1 = state_44434;
var statearr_44456_44483 = state_44434__$1;
(statearr_44456_44483[(2)] = inst_44416);

(statearr_44456_44483[(1)] = (5));


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
});})(c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42317__auto__,c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_44460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44460[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_44460[(1)] = (1));

return statearr_44460;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44434){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44461){if((e44461 instanceof Object)){
var ex__42321__auto__ = e44461;
var statearr_44462_44484 = state_44434;
(statearr_44462_44484[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44485 = state_44434;
state_44434 = G__44485;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42431__auto__ = (function (){var statearr_44463 = f__42430__auto__.call(null);
(statearr_44463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44468);

return statearr_44463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44468,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args44487 = [];
var len__33922__auto___44545 = arguments.length;
var i__33923__auto___44546 = (0);
while(true){
if((i__33923__auto___44546 < len__33922__auto___44545)){
args44487.push((arguments[i__33923__auto___44546]));

var G__44547 = (i__33923__auto___44546 + (1));
i__33923__auto___44546 = G__44547;
continue;
} else {
}
break;
}

var G__44489 = args44487.length;
switch (G__44489) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44487.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___44549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44549,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44549,out){
return (function (state_44521){
var state_val_44522 = (state_44521[(1)]);
if((state_val_44522 === (7))){
var inst_44500 = (state_44521[(7)]);
var inst_44501 = (state_44521[(8)]);
var inst_44500__$1 = (state_44521[(2)]);
var inst_44501__$1 = cljs.core.nth.call(null,inst_44500__$1,(0),null);
var inst_44502 = cljs.core.nth.call(null,inst_44500__$1,(1),null);
var inst_44503 = (inst_44501__$1 == null);
var state_44521__$1 = (function (){var statearr_44523 = state_44521;
(statearr_44523[(9)] = inst_44502);

(statearr_44523[(7)] = inst_44500__$1);

(statearr_44523[(8)] = inst_44501__$1);

return statearr_44523;
})();
if(cljs.core.truth_(inst_44503)){
var statearr_44524_44550 = state_44521__$1;
(statearr_44524_44550[(1)] = (8));

} else {
var statearr_44525_44551 = state_44521__$1;
(statearr_44525_44551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (1))){
var inst_44490 = cljs.core.vec.call(null,chs);
var inst_44491 = inst_44490;
var state_44521__$1 = (function (){var statearr_44526 = state_44521;
(statearr_44526[(10)] = inst_44491);

return statearr_44526;
})();
var statearr_44527_44552 = state_44521__$1;
(statearr_44527_44552[(2)] = null);

(statearr_44527_44552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (4))){
var inst_44491 = (state_44521[(10)]);
var state_44521__$1 = state_44521;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44521__$1,(7),inst_44491);
} else {
if((state_val_44522 === (6))){
var inst_44517 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
var statearr_44528_44553 = state_44521__$1;
(statearr_44528_44553[(2)] = inst_44517);

(statearr_44528_44553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (3))){
var inst_44519 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44521__$1,inst_44519);
} else {
if((state_val_44522 === (2))){
var inst_44491 = (state_44521[(10)]);
var inst_44493 = cljs.core.count.call(null,inst_44491);
var inst_44494 = (inst_44493 > (0));
var state_44521__$1 = state_44521;
if(cljs.core.truth_(inst_44494)){
var statearr_44530_44554 = state_44521__$1;
(statearr_44530_44554[(1)] = (4));

} else {
var statearr_44531_44555 = state_44521__$1;
(statearr_44531_44555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (11))){
var inst_44491 = (state_44521[(10)]);
var inst_44510 = (state_44521[(2)]);
var tmp44529 = inst_44491;
var inst_44491__$1 = tmp44529;
var state_44521__$1 = (function (){var statearr_44532 = state_44521;
(statearr_44532[(10)] = inst_44491__$1);

(statearr_44532[(11)] = inst_44510);

return statearr_44532;
})();
var statearr_44533_44556 = state_44521__$1;
(statearr_44533_44556[(2)] = null);

(statearr_44533_44556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (9))){
var inst_44501 = (state_44521[(8)]);
var state_44521__$1 = state_44521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44521__$1,(11),out,inst_44501);
} else {
if((state_val_44522 === (5))){
var inst_44515 = cljs.core.async.close_BANG_.call(null,out);
var state_44521__$1 = state_44521;
var statearr_44534_44557 = state_44521__$1;
(statearr_44534_44557[(2)] = inst_44515);

(statearr_44534_44557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (10))){
var inst_44513 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
var statearr_44535_44558 = state_44521__$1;
(statearr_44535_44558[(2)] = inst_44513);

(statearr_44535_44558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (8))){
var inst_44502 = (state_44521[(9)]);
var inst_44500 = (state_44521[(7)]);
var inst_44501 = (state_44521[(8)]);
var inst_44491 = (state_44521[(10)]);
var inst_44505 = (function (){var cs = inst_44491;
var vec__44496 = inst_44500;
var v = inst_44501;
var c = inst_44502;
return ((function (cs,vec__44496,v,c,inst_44502,inst_44500,inst_44501,inst_44491,state_val_44522,c__42429__auto___44549,out){
return (function (p1__44486_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44486_SHARP_);
});
;})(cs,vec__44496,v,c,inst_44502,inst_44500,inst_44501,inst_44491,state_val_44522,c__42429__auto___44549,out))
})();
var inst_44506 = cljs.core.filterv.call(null,inst_44505,inst_44491);
var inst_44491__$1 = inst_44506;
var state_44521__$1 = (function (){var statearr_44536 = state_44521;
(statearr_44536[(10)] = inst_44491__$1);

return statearr_44536;
})();
var statearr_44537_44559 = state_44521__$1;
(statearr_44537_44559[(2)] = null);

(statearr_44537_44559[(1)] = (2));


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
});})(c__42429__auto___44549,out))
;
return ((function (switch__42317__auto__,c__42429__auto___44549,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_44541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44541[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_44541[(1)] = (1));

return statearr_44541;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44521){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44542){if((e44542 instanceof Object)){
var ex__42321__auto__ = e44542;
var statearr_44543_44560 = state_44521;
(statearr_44543_44560[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44561 = state_44521;
state_44521 = G__44561;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44549,out))
})();
var state__42431__auto__ = (function (){var statearr_44544 = f__42430__auto__.call(null);
(statearr_44544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44549);

return statearr_44544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44549,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args44562 = [];
var len__33922__auto___44611 = arguments.length;
var i__33923__auto___44612 = (0);
while(true){
if((i__33923__auto___44612 < len__33922__auto___44611)){
args44562.push((arguments[i__33923__auto___44612]));

var G__44613 = (i__33923__auto___44612 + (1));
i__33923__auto___44612 = G__44613;
continue;
} else {
}
break;
}

var G__44564 = args44562.length;
switch (G__44564) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44562.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___44615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44615,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44615,out){
return (function (state_44588){
var state_val_44589 = (state_44588[(1)]);
if((state_val_44589 === (7))){
var inst_44570 = (state_44588[(7)]);
var inst_44570__$1 = (state_44588[(2)]);
var inst_44571 = (inst_44570__$1 == null);
var inst_44572 = cljs.core.not.call(null,inst_44571);
var state_44588__$1 = (function (){var statearr_44590 = state_44588;
(statearr_44590[(7)] = inst_44570__$1);

return statearr_44590;
})();
if(inst_44572){
var statearr_44591_44616 = state_44588__$1;
(statearr_44591_44616[(1)] = (8));

} else {
var statearr_44592_44617 = state_44588__$1;
(statearr_44592_44617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (1))){
var inst_44565 = (0);
var state_44588__$1 = (function (){var statearr_44593 = state_44588;
(statearr_44593[(8)] = inst_44565);

return statearr_44593;
})();
var statearr_44594_44618 = state_44588__$1;
(statearr_44594_44618[(2)] = null);

(statearr_44594_44618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (4))){
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44588__$1,(7),ch);
} else {
if((state_val_44589 === (6))){
var inst_44583 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44595_44619 = state_44588__$1;
(statearr_44595_44619[(2)] = inst_44583);

(statearr_44595_44619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (3))){
var inst_44585 = (state_44588[(2)]);
var inst_44586 = cljs.core.async.close_BANG_.call(null,out);
var state_44588__$1 = (function (){var statearr_44596 = state_44588;
(statearr_44596[(9)] = inst_44585);

return statearr_44596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44588__$1,inst_44586);
} else {
if((state_val_44589 === (2))){
var inst_44565 = (state_44588[(8)]);
var inst_44567 = (inst_44565 < n);
var state_44588__$1 = state_44588;
if(cljs.core.truth_(inst_44567)){
var statearr_44597_44620 = state_44588__$1;
(statearr_44597_44620[(1)] = (4));

} else {
var statearr_44598_44621 = state_44588__$1;
(statearr_44598_44621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (11))){
var inst_44565 = (state_44588[(8)]);
var inst_44575 = (state_44588[(2)]);
var inst_44576 = (inst_44565 + (1));
var inst_44565__$1 = inst_44576;
var state_44588__$1 = (function (){var statearr_44599 = state_44588;
(statearr_44599[(10)] = inst_44575);

(statearr_44599[(8)] = inst_44565__$1);

return statearr_44599;
})();
var statearr_44600_44622 = state_44588__$1;
(statearr_44600_44622[(2)] = null);

(statearr_44600_44622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (9))){
var state_44588__$1 = state_44588;
var statearr_44601_44623 = state_44588__$1;
(statearr_44601_44623[(2)] = null);

(statearr_44601_44623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (5))){
var state_44588__$1 = state_44588;
var statearr_44602_44624 = state_44588__$1;
(statearr_44602_44624[(2)] = null);

(statearr_44602_44624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (10))){
var inst_44580 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44603_44625 = state_44588__$1;
(statearr_44603_44625[(2)] = inst_44580);

(statearr_44603_44625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (8))){
var inst_44570 = (state_44588[(7)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44588__$1,(11),out,inst_44570);
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
});})(c__42429__auto___44615,out))
;
return ((function (switch__42317__auto__,c__42429__auto___44615,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_44607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44607[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_44607[(1)] = (1));

return statearr_44607;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44588){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44608){if((e44608 instanceof Object)){
var ex__42321__auto__ = e44608;
var statearr_44609_44626 = state_44588;
(statearr_44609_44626[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44627 = state_44588;
state_44588 = G__44627;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44615,out))
})();
var state__42431__auto__ = (function (){var statearr_44610 = f__42430__auto__.call(null);
(statearr_44610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44615);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44635 = (function (map_LT_,f,ch,meta44636){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44636 = meta44636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44637,meta44636__$1){
var self__ = this;
var _44637__$1 = this;
return (new cljs.core.async.t_cljs$core$async44635(self__.map_LT_,self__.f,self__.ch,meta44636__$1));
});


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44637){
var self__ = this;
var _44637__$1 = this;
return self__.meta44636;
});


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async44638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44638 = (function (map_LT_,f,ch,meta44636,_,fn1,meta44639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44636 = meta44636;
this._ = _;
this.fn1 = fn1;
this.meta44639 = meta44639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44640,meta44639__$1){
var self__ = this;
var _44640__$1 = this;
return (new cljs.core.async.t_cljs$core$async44638(self__.map_LT_,self__.f,self__.ch,self__.meta44636,self__._,self__.fn1,meta44639__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44640){
var self__ = this;
var _44640__$1 = this;
return self__.meta44639;
});})(___$1))
;


cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async44638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44628_SHARP_){
return f1.call(null,(((p1__44628_SHARP_ == null))?null:self__.f.call(null,p1__44628_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44638.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44636","meta44636",-84870939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44635","cljs.core.async/t_cljs$core$async44635",1607707676,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44639","meta44639",-1387679883,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44638";

cljs.core.async.t_cljs$core$async44638.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async44638");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async44638 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44638(map_LT___$1,f__$1,ch__$1,meta44636__$1,___$2,fn1__$1,meta44639){
return (new cljs.core.async.t_cljs$core$async44638(map_LT___$1,f__$1,ch__$1,meta44636__$1,___$2,fn1__$1,meta44639));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44638(self__.map_LT_,self__.f,self__.ch,self__.meta44636,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__32835__auto__ = ret;
if(cljs.core.truth_(and__32835__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__32835__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async44635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44636","meta44636",-84870939,null)], null);
});

cljs.core.async.t_cljs$core$async44635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44635";

cljs.core.async.t_cljs$core$async44635.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async44635");
});

cljs.core.async.__GT_t_cljs$core$async44635 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44635(map_LT___$1,f__$1,ch__$1,meta44636){
return (new cljs.core.async.t_cljs$core$async44635(map_LT___$1,f__$1,ch__$1,meta44636));
});

}

return (new cljs.core.async.t_cljs$core$async44635(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44644 = (function (map_GT_,f,ch,meta44645){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta44645 = meta44645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44646,meta44645__$1){
var self__ = this;
var _44646__$1 = this;
return (new cljs.core.async.t_cljs$core$async44644(self__.map_GT_,self__.f,self__.ch,meta44645__$1));
});


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44646){
var self__ = this;
var _44646__$1 = this;
return self__.meta44645;
});


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async44644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async44644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44645","meta44645",-2051112791,null)], null);
});

cljs.core.async.t_cljs$core$async44644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44644";

cljs.core.async.t_cljs$core$async44644.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async44644");
});

cljs.core.async.__GT_t_cljs$core$async44644 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44644(map_GT___$1,f__$1,ch__$1,meta44645){
return (new cljs.core.async.t_cljs$core$async44644(map_GT___$1,f__$1,ch__$1,meta44645));
});

}

return (new cljs.core.async.t_cljs$core$async44644(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async44650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44650 = (function (filter_GT_,p,ch,meta44651){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta44651 = meta44651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44652,meta44651__$1){
var self__ = this;
var _44652__$1 = this;
return (new cljs.core.async.t_cljs$core$async44650(self__.filter_GT_,self__.p,self__.ch,meta44651__$1));
});


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44652){
var self__ = this;
var _44652__$1 = this;
return self__.meta44651;
});


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44651","meta44651",-518867863,null)], null);
});

cljs.core.async.t_cljs$core$async44650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44650";

cljs.core.async.t_cljs$core$async44650.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cljs.core.async/t_cljs$core$async44650");
});

cljs.core.async.__GT_t_cljs$core$async44650 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44650(filter_GT___$1,p__$1,ch__$1,meta44651){
return (new cljs.core.async.t_cljs$core$async44650(filter_GT___$1,p__$1,ch__$1,meta44651));
});

}

return (new cljs.core.async.t_cljs$core$async44650(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args44653 = [];
var len__33922__auto___44697 = arguments.length;
var i__33923__auto___44698 = (0);
while(true){
if((i__33923__auto___44698 < len__33922__auto___44697)){
args44653.push((arguments[i__33923__auto___44698]));

var G__44699 = (i__33923__auto___44698 + (1));
i__33923__auto___44698 = G__44699;
continue;
} else {
}
break;
}

var G__44655 = args44653.length;
switch (G__44655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44653.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___44701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___44701,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___44701,out){
return (function (state_44676){
var state_val_44677 = (state_44676[(1)]);
if((state_val_44677 === (7))){
var inst_44672 = (state_44676[(2)]);
var state_44676__$1 = state_44676;
var statearr_44678_44702 = state_44676__$1;
(statearr_44678_44702[(2)] = inst_44672);

(statearr_44678_44702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (1))){
var state_44676__$1 = state_44676;
var statearr_44679_44703 = state_44676__$1;
(statearr_44679_44703[(2)] = null);

(statearr_44679_44703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (4))){
var inst_44658 = (state_44676[(7)]);
var inst_44658__$1 = (state_44676[(2)]);
var inst_44659 = (inst_44658__$1 == null);
var state_44676__$1 = (function (){var statearr_44680 = state_44676;
(statearr_44680[(7)] = inst_44658__$1);

return statearr_44680;
})();
if(cljs.core.truth_(inst_44659)){
var statearr_44681_44704 = state_44676__$1;
(statearr_44681_44704[(1)] = (5));

} else {
var statearr_44682_44705 = state_44676__$1;
(statearr_44682_44705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (6))){
var inst_44658 = (state_44676[(7)]);
var inst_44663 = p.call(null,inst_44658);
var state_44676__$1 = state_44676;
if(cljs.core.truth_(inst_44663)){
var statearr_44683_44706 = state_44676__$1;
(statearr_44683_44706[(1)] = (8));

} else {
var statearr_44684_44707 = state_44676__$1;
(statearr_44684_44707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (3))){
var inst_44674 = (state_44676[(2)]);
var state_44676__$1 = state_44676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44676__$1,inst_44674);
} else {
if((state_val_44677 === (2))){
var state_44676__$1 = state_44676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44676__$1,(4),ch);
} else {
if((state_val_44677 === (11))){
var inst_44666 = (state_44676[(2)]);
var state_44676__$1 = state_44676;
var statearr_44685_44708 = state_44676__$1;
(statearr_44685_44708[(2)] = inst_44666);

(statearr_44685_44708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (9))){
var state_44676__$1 = state_44676;
var statearr_44686_44709 = state_44676__$1;
(statearr_44686_44709[(2)] = null);

(statearr_44686_44709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (5))){
var inst_44661 = cljs.core.async.close_BANG_.call(null,out);
var state_44676__$1 = state_44676;
var statearr_44687_44710 = state_44676__$1;
(statearr_44687_44710[(2)] = inst_44661);

(statearr_44687_44710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (10))){
var inst_44669 = (state_44676[(2)]);
var state_44676__$1 = (function (){var statearr_44688 = state_44676;
(statearr_44688[(8)] = inst_44669);

return statearr_44688;
})();
var statearr_44689_44711 = state_44676__$1;
(statearr_44689_44711[(2)] = null);

(statearr_44689_44711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44677 === (8))){
var inst_44658 = (state_44676[(7)]);
var state_44676__$1 = state_44676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44676__$1,(11),out,inst_44658);
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
});})(c__42429__auto___44701,out))
;
return ((function (switch__42317__auto__,c__42429__auto___44701,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_44693 = [null,null,null,null,null,null,null,null,null];
(statearr_44693[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_44693[(1)] = (1));

return statearr_44693;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44676){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44694){if((e44694 instanceof Object)){
var ex__42321__auto__ = e44694;
var statearr_44695_44712 = state_44676;
(statearr_44695_44712[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44713 = state_44676;
state_44676 = G__44713;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___44701,out))
})();
var state__42431__auto__ = (function (){var statearr_44696 = f__42430__auto__.call(null);
(statearr_44696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___44701);

return statearr_44696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___44701,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args44714 = [];
var len__33922__auto___44717 = arguments.length;
var i__33923__auto___44718 = (0);
while(true){
if((i__33923__auto___44718 < len__33922__auto___44717)){
args44714.push((arguments[i__33923__auto___44718]));

var G__44719 = (i__33923__auto___44718 + (1));
i__33923__auto___44718 = G__44719;
continue;
} else {
}
break;
}

var G__44716 = args44714.length;
switch (G__44716) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44714.length)].join('')));

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
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_44886){
var state_val_44887 = (state_44886[(1)]);
if((state_val_44887 === (7))){
var inst_44882 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44888_44929 = state_44886__$1;
(statearr_44888_44929[(2)] = inst_44882);

(statearr_44888_44929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (20))){
var inst_44852 = (state_44886[(7)]);
var inst_44863 = (state_44886[(2)]);
var inst_44864 = cljs.core.next.call(null,inst_44852);
var inst_44838 = inst_44864;
var inst_44839 = null;
var inst_44840 = (0);
var inst_44841 = (0);
var state_44886__$1 = (function (){var statearr_44889 = state_44886;
(statearr_44889[(8)] = inst_44841);

(statearr_44889[(9)] = inst_44839);

(statearr_44889[(10)] = inst_44840);

(statearr_44889[(11)] = inst_44863);

(statearr_44889[(12)] = inst_44838);

return statearr_44889;
})();
var statearr_44890_44930 = state_44886__$1;
(statearr_44890_44930[(2)] = null);

(statearr_44890_44930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (1))){
var state_44886__$1 = state_44886;
var statearr_44891_44931 = state_44886__$1;
(statearr_44891_44931[(2)] = null);

(statearr_44891_44931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (4))){
var inst_44827 = (state_44886[(13)]);
var inst_44827__$1 = (state_44886[(2)]);
var inst_44828 = (inst_44827__$1 == null);
var state_44886__$1 = (function (){var statearr_44892 = state_44886;
(statearr_44892[(13)] = inst_44827__$1);

return statearr_44892;
})();
if(cljs.core.truth_(inst_44828)){
var statearr_44893_44932 = state_44886__$1;
(statearr_44893_44932[(1)] = (5));

} else {
var statearr_44894_44933 = state_44886__$1;
(statearr_44894_44933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (15))){
var state_44886__$1 = state_44886;
var statearr_44898_44934 = state_44886__$1;
(statearr_44898_44934[(2)] = null);

(statearr_44898_44934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (21))){
var state_44886__$1 = state_44886;
var statearr_44899_44935 = state_44886__$1;
(statearr_44899_44935[(2)] = null);

(statearr_44899_44935[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (13))){
var inst_44841 = (state_44886[(8)]);
var inst_44839 = (state_44886[(9)]);
var inst_44840 = (state_44886[(10)]);
var inst_44838 = (state_44886[(12)]);
var inst_44848 = (state_44886[(2)]);
var inst_44849 = (inst_44841 + (1));
var tmp44895 = inst_44839;
var tmp44896 = inst_44840;
var tmp44897 = inst_44838;
var inst_44838__$1 = tmp44897;
var inst_44839__$1 = tmp44895;
var inst_44840__$1 = tmp44896;
var inst_44841__$1 = inst_44849;
var state_44886__$1 = (function (){var statearr_44900 = state_44886;
(statearr_44900[(8)] = inst_44841__$1);

(statearr_44900[(9)] = inst_44839__$1);

(statearr_44900[(10)] = inst_44840__$1);

(statearr_44900[(12)] = inst_44838__$1);

(statearr_44900[(14)] = inst_44848);

return statearr_44900;
})();
var statearr_44901_44936 = state_44886__$1;
(statearr_44901_44936[(2)] = null);

(statearr_44901_44936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (22))){
var state_44886__$1 = state_44886;
var statearr_44902_44937 = state_44886__$1;
(statearr_44902_44937[(2)] = null);

(statearr_44902_44937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (6))){
var inst_44827 = (state_44886[(13)]);
var inst_44836 = f.call(null,inst_44827);
var inst_44837 = cljs.core.seq.call(null,inst_44836);
var inst_44838 = inst_44837;
var inst_44839 = null;
var inst_44840 = (0);
var inst_44841 = (0);
var state_44886__$1 = (function (){var statearr_44903 = state_44886;
(statearr_44903[(8)] = inst_44841);

(statearr_44903[(9)] = inst_44839);

(statearr_44903[(10)] = inst_44840);

(statearr_44903[(12)] = inst_44838);

return statearr_44903;
})();
var statearr_44904_44938 = state_44886__$1;
(statearr_44904_44938[(2)] = null);

(statearr_44904_44938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (17))){
var inst_44852 = (state_44886[(7)]);
var inst_44856 = cljs.core.chunk_first.call(null,inst_44852);
var inst_44857 = cljs.core.chunk_rest.call(null,inst_44852);
var inst_44858 = cljs.core.count.call(null,inst_44856);
var inst_44838 = inst_44857;
var inst_44839 = inst_44856;
var inst_44840 = inst_44858;
var inst_44841 = (0);
var state_44886__$1 = (function (){var statearr_44905 = state_44886;
(statearr_44905[(8)] = inst_44841);

(statearr_44905[(9)] = inst_44839);

(statearr_44905[(10)] = inst_44840);

(statearr_44905[(12)] = inst_44838);

return statearr_44905;
})();
var statearr_44906_44939 = state_44886__$1;
(statearr_44906_44939[(2)] = null);

(statearr_44906_44939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (3))){
var inst_44884 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44886__$1,inst_44884);
} else {
if((state_val_44887 === (12))){
var inst_44872 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44907_44940 = state_44886__$1;
(statearr_44907_44940[(2)] = inst_44872);

(statearr_44907_44940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (2))){
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44886__$1,(4),in$);
} else {
if((state_val_44887 === (23))){
var inst_44880 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44908_44941 = state_44886__$1;
(statearr_44908_44941[(2)] = inst_44880);

(statearr_44908_44941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (19))){
var inst_44867 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44909_44942 = state_44886__$1;
(statearr_44909_44942[(2)] = inst_44867);

(statearr_44909_44942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (11))){
var inst_44852 = (state_44886[(7)]);
var inst_44838 = (state_44886[(12)]);
var inst_44852__$1 = cljs.core.seq.call(null,inst_44838);
var state_44886__$1 = (function (){var statearr_44910 = state_44886;
(statearr_44910[(7)] = inst_44852__$1);

return statearr_44910;
})();
if(inst_44852__$1){
var statearr_44911_44943 = state_44886__$1;
(statearr_44911_44943[(1)] = (14));

} else {
var statearr_44912_44944 = state_44886__$1;
(statearr_44912_44944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (9))){
var inst_44874 = (state_44886[(2)]);
var inst_44875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44886__$1 = (function (){var statearr_44913 = state_44886;
(statearr_44913[(15)] = inst_44874);

return statearr_44913;
})();
if(cljs.core.truth_(inst_44875)){
var statearr_44914_44945 = state_44886__$1;
(statearr_44914_44945[(1)] = (21));

} else {
var statearr_44915_44946 = state_44886__$1;
(statearr_44915_44946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (5))){
var inst_44830 = cljs.core.async.close_BANG_.call(null,out);
var state_44886__$1 = state_44886;
var statearr_44916_44947 = state_44886__$1;
(statearr_44916_44947[(2)] = inst_44830);

(statearr_44916_44947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (14))){
var inst_44852 = (state_44886[(7)]);
var inst_44854 = cljs.core.chunked_seq_QMARK_.call(null,inst_44852);
var state_44886__$1 = state_44886;
if(inst_44854){
var statearr_44917_44948 = state_44886__$1;
(statearr_44917_44948[(1)] = (17));

} else {
var statearr_44918_44949 = state_44886__$1;
(statearr_44918_44949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (16))){
var inst_44870 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44919_44950 = state_44886__$1;
(statearr_44919_44950[(2)] = inst_44870);

(statearr_44919_44950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (10))){
var inst_44841 = (state_44886[(8)]);
var inst_44839 = (state_44886[(9)]);
var inst_44846 = cljs.core._nth.call(null,inst_44839,inst_44841);
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44886__$1,(13),out,inst_44846);
} else {
if((state_val_44887 === (18))){
var inst_44852 = (state_44886[(7)]);
var inst_44861 = cljs.core.first.call(null,inst_44852);
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44886__$1,(20),out,inst_44861);
} else {
if((state_val_44887 === (8))){
var inst_44841 = (state_44886[(8)]);
var inst_44840 = (state_44886[(10)]);
var inst_44843 = (inst_44841 < inst_44840);
var inst_44844 = inst_44843;
var state_44886__$1 = state_44886;
if(cljs.core.truth_(inst_44844)){
var statearr_44920_44951 = state_44886__$1;
(statearr_44920_44951[(1)] = (10));

} else {
var statearr_44921_44952 = state_44886__$1;
(statearr_44921_44952[(1)] = (11));

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
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____0 = (function (){
var statearr_44925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__);

(statearr_44925[(1)] = (1));

return statearr_44925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____1 = (function (state_44886){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e44926){if((e44926 instanceof Object)){
var ex__42321__auto__ = e44926;
var statearr_44927_44953 = state_44886;
(statearr_44927_44953[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44954 = state_44886;
state_44886 = G__44954;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__ = function(state_44886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____1.call(this,state_44886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42318__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_44928 = f__42430__auto__.call(null);
(statearr_44928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_44928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44955 = [];
var len__33922__auto___44958 = arguments.length;
var i__33923__auto___44959 = (0);
while(true){
if((i__33923__auto___44959 < len__33922__auto___44958)){
args44955.push((arguments[i__33923__auto___44959]));

var G__44960 = (i__33923__auto___44959 + (1));
i__33923__auto___44959 = G__44960;
continue;
} else {
}
break;
}

var G__44957 = args44955.length;
switch (G__44957) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44955.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args44962 = [];
var len__33922__auto___44965 = arguments.length;
var i__33923__auto___44966 = (0);
while(true){
if((i__33923__auto___44966 < len__33922__auto___44965)){
args44962.push((arguments[i__33923__auto___44966]));

var G__44967 = (i__33923__auto___44966 + (1));
i__33923__auto___44966 = G__44967;
continue;
} else {
}
break;
}

var G__44964 = args44962.length;
switch (G__44964) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44962.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args44969 = [];
var len__33922__auto___45020 = arguments.length;
var i__33923__auto___45021 = (0);
while(true){
if((i__33923__auto___45021 < len__33922__auto___45020)){
args44969.push((arguments[i__33923__auto___45021]));

var G__45022 = (i__33923__auto___45021 + (1));
i__33923__auto___45021 = G__45022;
continue;
} else {
}
break;
}

var G__44971 = args44969.length;
switch (G__44971) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44969.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___45024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___45024,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___45024,out){
return (function (state_44995){
var state_val_44996 = (state_44995[(1)]);
if((state_val_44996 === (7))){
var inst_44990 = (state_44995[(2)]);
var state_44995__$1 = state_44995;
var statearr_44997_45025 = state_44995__$1;
(statearr_44997_45025[(2)] = inst_44990);

(statearr_44997_45025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (1))){
var inst_44972 = null;
var state_44995__$1 = (function (){var statearr_44998 = state_44995;
(statearr_44998[(7)] = inst_44972);

return statearr_44998;
})();
var statearr_44999_45026 = state_44995__$1;
(statearr_44999_45026[(2)] = null);

(statearr_44999_45026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (4))){
var inst_44975 = (state_44995[(8)]);
var inst_44975__$1 = (state_44995[(2)]);
var inst_44976 = (inst_44975__$1 == null);
var inst_44977 = cljs.core.not.call(null,inst_44976);
var state_44995__$1 = (function (){var statearr_45000 = state_44995;
(statearr_45000[(8)] = inst_44975__$1);

return statearr_45000;
})();
if(inst_44977){
var statearr_45001_45027 = state_44995__$1;
(statearr_45001_45027[(1)] = (5));

} else {
var statearr_45002_45028 = state_44995__$1;
(statearr_45002_45028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (6))){
var state_44995__$1 = state_44995;
var statearr_45003_45029 = state_44995__$1;
(statearr_45003_45029[(2)] = null);

(statearr_45003_45029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (3))){
var inst_44992 = (state_44995[(2)]);
var inst_44993 = cljs.core.async.close_BANG_.call(null,out);
var state_44995__$1 = (function (){var statearr_45004 = state_44995;
(statearr_45004[(9)] = inst_44992);

return statearr_45004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44995__$1,inst_44993);
} else {
if((state_val_44996 === (2))){
var state_44995__$1 = state_44995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44995__$1,(4),ch);
} else {
if((state_val_44996 === (11))){
var inst_44975 = (state_44995[(8)]);
var inst_44984 = (state_44995[(2)]);
var inst_44972 = inst_44975;
var state_44995__$1 = (function (){var statearr_45005 = state_44995;
(statearr_45005[(7)] = inst_44972);

(statearr_45005[(10)] = inst_44984);

return statearr_45005;
})();
var statearr_45006_45030 = state_44995__$1;
(statearr_45006_45030[(2)] = null);

(statearr_45006_45030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (9))){
var inst_44975 = (state_44995[(8)]);
var state_44995__$1 = state_44995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44995__$1,(11),out,inst_44975);
} else {
if((state_val_44996 === (5))){
var inst_44972 = (state_44995[(7)]);
var inst_44975 = (state_44995[(8)]);
var inst_44979 = cljs.core._EQ_.call(null,inst_44975,inst_44972);
var state_44995__$1 = state_44995;
if(inst_44979){
var statearr_45008_45031 = state_44995__$1;
(statearr_45008_45031[(1)] = (8));

} else {
var statearr_45009_45032 = state_44995__$1;
(statearr_45009_45032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (10))){
var inst_44987 = (state_44995[(2)]);
var state_44995__$1 = state_44995;
var statearr_45010_45033 = state_44995__$1;
(statearr_45010_45033[(2)] = inst_44987);

(statearr_45010_45033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44996 === (8))){
var inst_44972 = (state_44995[(7)]);
var tmp45007 = inst_44972;
var inst_44972__$1 = tmp45007;
var state_44995__$1 = (function (){var statearr_45011 = state_44995;
(statearr_45011[(7)] = inst_44972__$1);

return statearr_45011;
})();
var statearr_45012_45034 = state_44995__$1;
(statearr_45012_45034[(2)] = null);

(statearr_45012_45034[(1)] = (2));


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
});})(c__42429__auto___45024,out))
;
return ((function (switch__42317__auto__,c__42429__auto___45024,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_45016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45016[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_45016[(1)] = (1));

return statearr_45016;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_44995){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_44995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e45017){if((e45017 instanceof Object)){
var ex__42321__auto__ = e45017;
var statearr_45018_45035 = state_44995;
(statearr_45018_45035[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45036 = state_44995;
state_44995 = G__45036;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_44995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_44995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___45024,out))
})();
var state__42431__auto__ = (function (){var statearr_45019 = f__42430__auto__.call(null);
(statearr_45019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___45024);

return statearr_45019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___45024,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args45037 = [];
var len__33922__auto___45107 = arguments.length;
var i__33923__auto___45108 = (0);
while(true){
if((i__33923__auto___45108 < len__33922__auto___45107)){
args45037.push((arguments[i__33923__auto___45108]));

var G__45109 = (i__33923__auto___45108 + (1));
i__33923__auto___45108 = G__45109;
continue;
} else {
}
break;
}

var G__45039 = args45037.length;
switch (G__45039) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45037.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___45111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___45111,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___45111,out){
return (function (state_45077){
var state_val_45078 = (state_45077[(1)]);
if((state_val_45078 === (7))){
var inst_45073 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
var statearr_45079_45112 = state_45077__$1;
(statearr_45079_45112[(2)] = inst_45073);

(statearr_45079_45112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (1))){
var inst_45040 = (new Array(n));
var inst_45041 = inst_45040;
var inst_45042 = (0);
var state_45077__$1 = (function (){var statearr_45080 = state_45077;
(statearr_45080[(7)] = inst_45041);

(statearr_45080[(8)] = inst_45042);

return statearr_45080;
})();
var statearr_45081_45113 = state_45077__$1;
(statearr_45081_45113[(2)] = null);

(statearr_45081_45113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (4))){
var inst_45045 = (state_45077[(9)]);
var inst_45045__$1 = (state_45077[(2)]);
var inst_45046 = (inst_45045__$1 == null);
var inst_45047 = cljs.core.not.call(null,inst_45046);
var state_45077__$1 = (function (){var statearr_45082 = state_45077;
(statearr_45082[(9)] = inst_45045__$1);

return statearr_45082;
})();
if(inst_45047){
var statearr_45083_45114 = state_45077__$1;
(statearr_45083_45114[(1)] = (5));

} else {
var statearr_45084_45115 = state_45077__$1;
(statearr_45084_45115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (15))){
var inst_45067 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
var statearr_45085_45116 = state_45077__$1;
(statearr_45085_45116[(2)] = inst_45067);

(statearr_45085_45116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (13))){
var state_45077__$1 = state_45077;
var statearr_45086_45117 = state_45077__$1;
(statearr_45086_45117[(2)] = null);

(statearr_45086_45117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (6))){
var inst_45042 = (state_45077[(8)]);
var inst_45063 = (inst_45042 > (0));
var state_45077__$1 = state_45077;
if(cljs.core.truth_(inst_45063)){
var statearr_45087_45118 = state_45077__$1;
(statearr_45087_45118[(1)] = (12));

} else {
var statearr_45088_45119 = state_45077__$1;
(statearr_45088_45119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (3))){
var inst_45075 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45077__$1,inst_45075);
} else {
if((state_val_45078 === (12))){
var inst_45041 = (state_45077[(7)]);
var inst_45065 = cljs.core.vec.call(null,inst_45041);
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45077__$1,(15),out,inst_45065);
} else {
if((state_val_45078 === (2))){
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45077__$1,(4),ch);
} else {
if((state_val_45078 === (11))){
var inst_45057 = (state_45077[(2)]);
var inst_45058 = (new Array(n));
var inst_45041 = inst_45058;
var inst_45042 = (0);
var state_45077__$1 = (function (){var statearr_45089 = state_45077;
(statearr_45089[(7)] = inst_45041);

(statearr_45089[(10)] = inst_45057);

(statearr_45089[(8)] = inst_45042);

return statearr_45089;
})();
var statearr_45090_45120 = state_45077__$1;
(statearr_45090_45120[(2)] = null);

(statearr_45090_45120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (9))){
var inst_45041 = (state_45077[(7)]);
var inst_45055 = cljs.core.vec.call(null,inst_45041);
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45077__$1,(11),out,inst_45055);
} else {
if((state_val_45078 === (5))){
var inst_45041 = (state_45077[(7)]);
var inst_45045 = (state_45077[(9)]);
var inst_45050 = (state_45077[(11)]);
var inst_45042 = (state_45077[(8)]);
var inst_45049 = (inst_45041[inst_45042] = inst_45045);
var inst_45050__$1 = (inst_45042 + (1));
var inst_45051 = (inst_45050__$1 < n);
var state_45077__$1 = (function (){var statearr_45091 = state_45077;
(statearr_45091[(12)] = inst_45049);

(statearr_45091[(11)] = inst_45050__$1);

return statearr_45091;
})();
if(cljs.core.truth_(inst_45051)){
var statearr_45092_45121 = state_45077__$1;
(statearr_45092_45121[(1)] = (8));

} else {
var statearr_45093_45122 = state_45077__$1;
(statearr_45093_45122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (14))){
var inst_45070 = (state_45077[(2)]);
var inst_45071 = cljs.core.async.close_BANG_.call(null,out);
var state_45077__$1 = (function (){var statearr_45095 = state_45077;
(statearr_45095[(13)] = inst_45070);

return statearr_45095;
})();
var statearr_45096_45123 = state_45077__$1;
(statearr_45096_45123[(2)] = inst_45071);

(statearr_45096_45123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (10))){
var inst_45061 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
var statearr_45097_45124 = state_45077__$1;
(statearr_45097_45124[(2)] = inst_45061);

(statearr_45097_45124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (8))){
var inst_45041 = (state_45077[(7)]);
var inst_45050 = (state_45077[(11)]);
var tmp45094 = inst_45041;
var inst_45041__$1 = tmp45094;
var inst_45042 = inst_45050;
var state_45077__$1 = (function (){var statearr_45098 = state_45077;
(statearr_45098[(7)] = inst_45041__$1);

(statearr_45098[(8)] = inst_45042);

return statearr_45098;
})();
var statearr_45099_45125 = state_45077__$1;
(statearr_45099_45125[(2)] = null);

(statearr_45099_45125[(1)] = (2));


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
});})(c__42429__auto___45111,out))
;
return ((function (switch__42317__auto__,c__42429__auto___45111,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_45103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45103[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_45103[(1)] = (1));

return statearr_45103;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_45077){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_45077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e45104){if((e45104 instanceof Object)){
var ex__42321__auto__ = e45104;
var statearr_45105_45126 = state_45077;
(statearr_45105_45126[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45127 = state_45077;
state_45077 = G__45127;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_45077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_45077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___45111,out))
})();
var state__42431__auto__ = (function (){var statearr_45106 = f__42430__auto__.call(null);
(statearr_45106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___45111);

return statearr_45106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___45111,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args45128 = [];
var len__33922__auto___45202 = arguments.length;
var i__33923__auto___45203 = (0);
while(true){
if((i__33923__auto___45203 < len__33922__auto___45202)){
args45128.push((arguments[i__33923__auto___45203]));

var G__45204 = (i__33923__auto___45203 + (1));
i__33923__auto___45203 = G__45204;
continue;
} else {
}
break;
}

var G__45130 = args45128.length;
switch (G__45130) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45128.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42429__auto___45206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___45206,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___45206,out){
return (function (state_45172){
var state_val_45173 = (state_45172[(1)]);
if((state_val_45173 === (7))){
var inst_45168 = (state_45172[(2)]);
var state_45172__$1 = state_45172;
var statearr_45174_45207 = state_45172__$1;
(statearr_45174_45207[(2)] = inst_45168);

(statearr_45174_45207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (1))){
var inst_45131 = [];
var inst_45132 = inst_45131;
var inst_45133 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45172__$1 = (function (){var statearr_45175 = state_45172;
(statearr_45175[(7)] = inst_45132);

(statearr_45175[(8)] = inst_45133);

return statearr_45175;
})();
var statearr_45176_45208 = state_45172__$1;
(statearr_45176_45208[(2)] = null);

(statearr_45176_45208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (4))){
var inst_45136 = (state_45172[(9)]);
var inst_45136__$1 = (state_45172[(2)]);
var inst_45137 = (inst_45136__$1 == null);
var inst_45138 = cljs.core.not.call(null,inst_45137);
var state_45172__$1 = (function (){var statearr_45177 = state_45172;
(statearr_45177[(9)] = inst_45136__$1);

return statearr_45177;
})();
if(inst_45138){
var statearr_45178_45209 = state_45172__$1;
(statearr_45178_45209[(1)] = (5));

} else {
var statearr_45179_45210 = state_45172__$1;
(statearr_45179_45210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (15))){
var inst_45162 = (state_45172[(2)]);
var state_45172__$1 = state_45172;
var statearr_45180_45211 = state_45172__$1;
(statearr_45180_45211[(2)] = inst_45162);

(statearr_45180_45211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (13))){
var state_45172__$1 = state_45172;
var statearr_45181_45212 = state_45172__$1;
(statearr_45181_45212[(2)] = null);

(statearr_45181_45212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (6))){
var inst_45132 = (state_45172[(7)]);
var inst_45157 = inst_45132.length;
var inst_45158 = (inst_45157 > (0));
var state_45172__$1 = state_45172;
if(cljs.core.truth_(inst_45158)){
var statearr_45182_45213 = state_45172__$1;
(statearr_45182_45213[(1)] = (12));

} else {
var statearr_45183_45214 = state_45172__$1;
(statearr_45183_45214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (3))){
var inst_45170 = (state_45172[(2)]);
var state_45172__$1 = state_45172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45172__$1,inst_45170);
} else {
if((state_val_45173 === (12))){
var inst_45132 = (state_45172[(7)]);
var inst_45160 = cljs.core.vec.call(null,inst_45132);
var state_45172__$1 = state_45172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45172__$1,(15),out,inst_45160);
} else {
if((state_val_45173 === (2))){
var state_45172__$1 = state_45172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45172__$1,(4),ch);
} else {
if((state_val_45173 === (11))){
var inst_45140 = (state_45172[(10)]);
var inst_45136 = (state_45172[(9)]);
var inst_45150 = (state_45172[(2)]);
var inst_45151 = [];
var inst_45152 = inst_45151.push(inst_45136);
var inst_45132 = inst_45151;
var inst_45133 = inst_45140;
var state_45172__$1 = (function (){var statearr_45184 = state_45172;
(statearr_45184[(11)] = inst_45152);

(statearr_45184[(7)] = inst_45132);

(statearr_45184[(8)] = inst_45133);

(statearr_45184[(12)] = inst_45150);

return statearr_45184;
})();
var statearr_45185_45215 = state_45172__$1;
(statearr_45185_45215[(2)] = null);

(statearr_45185_45215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (9))){
var inst_45132 = (state_45172[(7)]);
var inst_45148 = cljs.core.vec.call(null,inst_45132);
var state_45172__$1 = state_45172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45172__$1,(11),out,inst_45148);
} else {
if((state_val_45173 === (5))){
var inst_45140 = (state_45172[(10)]);
var inst_45133 = (state_45172[(8)]);
var inst_45136 = (state_45172[(9)]);
var inst_45140__$1 = f.call(null,inst_45136);
var inst_45141 = cljs.core._EQ_.call(null,inst_45140__$1,inst_45133);
var inst_45142 = cljs.core.keyword_identical_QMARK_.call(null,inst_45133,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45143 = (inst_45141) || (inst_45142);
var state_45172__$1 = (function (){var statearr_45186 = state_45172;
(statearr_45186[(10)] = inst_45140__$1);

return statearr_45186;
})();
if(cljs.core.truth_(inst_45143)){
var statearr_45187_45216 = state_45172__$1;
(statearr_45187_45216[(1)] = (8));

} else {
var statearr_45188_45217 = state_45172__$1;
(statearr_45188_45217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (14))){
var inst_45165 = (state_45172[(2)]);
var inst_45166 = cljs.core.async.close_BANG_.call(null,out);
var state_45172__$1 = (function (){var statearr_45190 = state_45172;
(statearr_45190[(13)] = inst_45165);

return statearr_45190;
})();
var statearr_45191_45218 = state_45172__$1;
(statearr_45191_45218[(2)] = inst_45166);

(statearr_45191_45218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (10))){
var inst_45155 = (state_45172[(2)]);
var state_45172__$1 = state_45172;
var statearr_45192_45219 = state_45172__$1;
(statearr_45192_45219[(2)] = inst_45155);

(statearr_45192_45219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45173 === (8))){
var inst_45140 = (state_45172[(10)]);
var inst_45132 = (state_45172[(7)]);
var inst_45136 = (state_45172[(9)]);
var inst_45145 = inst_45132.push(inst_45136);
var tmp45189 = inst_45132;
var inst_45132__$1 = tmp45189;
var inst_45133 = inst_45140;
var state_45172__$1 = (function (){var statearr_45193 = state_45172;
(statearr_45193[(7)] = inst_45132__$1);

(statearr_45193[(8)] = inst_45133);

(statearr_45193[(14)] = inst_45145);

return statearr_45193;
})();
var statearr_45194_45220 = state_45172__$1;
(statearr_45194_45220[(2)] = null);

(statearr_45194_45220[(1)] = (2));


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
});})(c__42429__auto___45206,out))
;
return ((function (switch__42317__auto__,c__42429__auto___45206,out){
return (function() {
var cljs$core$async$state_machine__42318__auto__ = null;
var cljs$core$async$state_machine__42318__auto____0 = (function (){
var statearr_45198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45198[(0)] = cljs$core$async$state_machine__42318__auto__);

(statearr_45198[(1)] = (1));

return statearr_45198;
});
var cljs$core$async$state_machine__42318__auto____1 = (function (state_45172){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_45172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e45199){if((e45199 instanceof Object)){
var ex__42321__auto__ = e45199;
var statearr_45200_45221 = state_45172;
(statearr_45200_45221[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45222 = state_45172;
state_45172 = G__45222;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
cljs$core$async$state_machine__42318__auto__ = function(state_45172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42318__auto____1.call(this,state_45172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42318__auto____0;
cljs$core$async$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42318__auto____1;
return cljs$core$async$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___45206,out))
})();
var state__42431__auto__ = (function (){var statearr_45201 = f__42430__auto__.call(null);
(statearr_45201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___45206);

return statearr_45201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___45206,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479316901465