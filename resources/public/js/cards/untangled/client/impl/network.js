// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.impl.network');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
/**
 * This is here (not inlined) to make mocking easier.
 */
untangled.client.impl.network.make_xhrio = (function untangled$client$impl$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
untangled.client.impl.network.UntangledNetwork = function(){};

/**
 * Send method, transmits EDN to the server and gets an EDN response. Calls result-callback with that response,
 *      or a map with key `:error` on errors. optional options may include `:headers`, but you may NOT override content
 *      type. The method CANNOT be used for parallel network requests.
 */
untangled.client.impl.network.send = (function untangled$client$impl$network$send(this$,edn,ok_callback,error_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$send$arity$4 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$send$arity$4(this$,edn,ok_callback,error_callback);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.impl.network.send[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,edn,ok_callback,error_callback);
} else {
var m__33507__auto____$1 = (untangled.client.impl.network.send["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,edn,ok_callback,error_callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.send",this$);
}
}
}
});

/**
 * Starts the network, passing in the app for any components that may need it.
 */
untangled.client.impl.network.start = (function untangled$client$impl$network$start(this$,complete_app){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$start$arity$2 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$start$arity$2(this$,complete_app);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.impl.network.start[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,complete_app);
} else {
var m__33507__auto____$1 = (untangled.client.impl.network.start["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,complete_app);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
untangled.client.impl.network.response_ok = (function untangled$client$impl$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.impl.network.response_ok[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,xhrio,ok_cb);
} else {
var m__33507__auto____$1 = (untangled.client.impl.network.response_ok["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,xhrio,ok_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
untangled.client.impl.network.response_error = (function untangled$client$impl$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.impl.network.response_error[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,xhrio,err_cb);
} else {
var m__33507__auto____$1 = (untangled.client.impl.network.response_error["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,xhrio,err_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-error",this$);
}
}
}
});

/**
 * An XhrIo-specific implementation method for interpreting the server response.
 */
untangled.client.impl.network.parse_response = (function untangled$client$impl$network$parse_response(var_args){
var args36992 = [];
var len__33918__auto___36996 = arguments.length;
var i__33919__auto___36997 = (0);
while(true){
if((i__33919__auto___36997 < len__33918__auto___36996)){
args36992.push((arguments[i__33919__auto___36997]));

var G__36998 = (i__33919__auto___36997 + (1));
i__33919__auto___36997 = G__36998;
continue;
} else {
}
break;
}

var G__36994 = args36992.length;
switch (G__36994) {
case 1:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36992.length)].join('')));

}
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1 = (function (xhr_io){
return untangled.client.impl.network.parse_response.call(null,xhr_io,null);
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2 = (function (xhr_io,read_handlers){
try{var text = xhr_io.getResponseText();
var base_handlers = new cljs.core.PersistentArrayMap(null, 2, ["f",((function (text){
return (function (v){
return parseFloat(v);
});})(text))
,"u",cljs.core.uuid], null);
var handlers = ((cljs.core.map_QMARK_.call(null,read_handlers))?cljs.core.merge.call(null,base_handlers,read_handlers):base_handlers);
if(clojure.string.blank_QMARK_.call(null,text)){
return xhr_io.getStatus();
} else {
return cognitect.transit.read.call(null,om.transit.reader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),xhr_io.getResponseText());
}
}catch (e36995){if((e36995 instanceof Object)){
var e = e36995;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(404),new cljs.core.Keyword(null,"message","message",-406056002),"Server down"], null);
} else {
throw e36995;

}
}});

untangled.client.impl.network.parse_response.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled.client.impl.network.IXhrIOCallbacks}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.Network = (function (url,request_transform,global_error_callback,complete_app,transit_handlers,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.transit_handlers = transit_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33465__auto__,k__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
return cljs.core._lookup.call(null,this__33465__auto____$1,k__33466__auto__,null);
});


untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33467__auto__,k37001,else__33468__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
var G__37003 = (((k37001 instanceof cljs.core.Keyword))?k37001.fqn:null);
switch (G__37003) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
case "transit-handlers":
return self__.transit_handlers;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37001,else__33468__auto__);

}
});


untangled.client.impl.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33479__auto__,writer__33480__auto__,opts__33481__auto__){
var self__ = this;
var this__33479__auto____$1 = this;
var pr_pair__33482__auto__ = ((function (this__33479__auto____$1){
return (function (keyval__33483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,cljs.core.pr_writer,""," ","",opts__33481__auto__,keyval__33483__auto__);
});})(this__33479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,pr_pair__33482__auto__,"#untangled.client.impl.network.Network{",", ","}",opts__33481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$ = true;


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37000){
var self__ = this;
var G__37000__$1 = this;
return (new cljs.core.RecordIter((0),G__37000__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


untangled.client.impl.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33459__auto__){
var self__ = this;
var this__33459__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$ = true;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = untangled.client.impl.network.parse_response.call(null,xhr_io,read_handlers);
if(cljs.core.truth_((function (){var and__32831__auto__ = query_response;
if(cljs.core.truth_(and__32831__auto__)){
return valid_data_callback;
} else {
return and__32831__auto__;
}
})())){
return valid_data_callback.call(null,query_response);
} else {
return null;
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
untangled.client.logging.error.call(null,str);

if(cljs.core.truth_(cljs.core.deref.call(null,self__.global_error_callback))){
cljs.core.deref.call(null,self__.global_error_callback).call(null,status,error);
} else {
}

return error_callback.call(null,error);
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error.call(null,[cljs.core.str("UNTANGLED NETWORK ERROR: No connection established.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697)], null));
} else {
return log_and_dispatch_error.call(null,[cljs.core.str("SERVER ERROR CODE: "),cljs.core.str(status)].join(''),untangled.client.impl.network.parse_response.call(null,xhr_io,self__.transit_handlers));
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33469__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33460__auto__){
var self__ = this;
var this__33460__auto____$1 = this;
var h__33278__auto__ = self__.__hash;
if(!((h__33278__auto__ == null))){
return h__33278__auto__;
} else {
var h__33278__auto____$1 = cljs.core.hash_imap.call(null,this__33460__auto____$1);
self__.__hash = h__33278__auto____$1;

return h__33278__auto____$1;
}
});


untangled.client.impl.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33461__auto__,other__33462__auto__){
var self__ = this;
var this__33461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__32831__auto__ = other__33462__auto__;
if(cljs.core.truth_(and__32831__auto__)){
var and__32831__auto____$1 = (this__33461__auto____$1.constructor === other__33462__auto__.constructor);
if(and__32831__auto____$1){
return cljs.core.equiv_map.call(null,this__33461__auto____$1,other__33462__auto__);
} else {
return and__32831__auto____$1;
}
} else {
return and__32831__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$ = true;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var xhrio = untangled.client.impl.network.make_xhrio.call(null);
var handlers = (function (){var or__32843__auto__ = new cljs.core.Keyword(null,"write","write",-1857649168).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__37004 = (function (){var G__37005 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null);
if(cljs.core.truth_(self__.request_transform)){
return self__.request_transform.call(null,G__37005);
} else {
return G__37005;
}
})();
var map__37004__$1 = ((((!((map__37004 == null)))?((((map__37004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37004):map__37004);
var body = cljs.core.get.call(null,map__37004__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers__$1 = cljs.core.get.call(null,map__37004__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var post_data = cognitect.transit.write.call(null,om.transit.writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js.call(null,headers__$1);
xhrio.send(self__.url,"POST",post_data,headers__$2);

goog.events.listen(xhrio,goog.net.EventType.SUCCESS,((function (xhrio,handlers,headers,map__37004,map__37004__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_ok.call(null,this$__$1,xhrio,ok);
});})(xhrio,handlers,headers,map__37004,map__37004__$1,body,headers__$1,post_data,headers__$2,this$__$1))
);

return goog.events.listen(xhrio,goog.net.EventType.ERROR,((function (xhrio,handlers,headers,map__37004,map__37004__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_error.call(null,this$__$1,xhrio,err);
});})(xhrio,handlers,headers,map__37004,map__37004__$1,body,headers__$1,post_data,headers__$2,this$__$1))
);
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.client.impl.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33474__auto__,k__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__33475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33474__auto____$1),self__.__meta),k__33475__auto__);
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33475__auto__)),null));
}
});


untangled.client.impl.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33472__auto__,k__33473__auto__,G__37000){
var self__ = this;
var this__33472__auto____$1 = this;
var pred__37007 = cljs.core.keyword_identical_QMARK_;
var expr__37008 = k__33473__auto__;
if(cljs.core.truth_(pred__37007.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__37008))){
return (new untangled.client.impl.network.Network(G__37000,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37007.call(null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),expr__37008))){
return (new untangled.client.impl.network.Network(self__.url,G__37000,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37007.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__37008))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,G__37000,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37007.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__37008))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__37000,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37007.call(null,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),expr__37008))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__37000,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33473__auto__,G__37000),null));
}
}
}
}
}
});


untangled.client.impl.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33477__auto__){
var self__ = this;
var this__33477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33464__auto__,G__37000){
var self__ = this;
var this__33464__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__37000,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33470__auto__,entry__33471__auto__){
var self__ = this;
var this__33470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33471__auto__)){
return cljs.core._assoc.call(null,this__33470__auto____$1,cljs.core._nth.call(null,entry__33471__auto__,(0)),cljs.core._nth.call(null,entry__33471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33470__auto____$1,entry__33471__auto__);
}
});

untangled.client.impl.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-transform","request-transform",1810868824,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null),new cljs.core.Symbol(null,"transit-handlers","transit-handlers",434450736,null)], null);
});

untangled.client.impl.network.Network.cljs$lang$type = true;

untangled.client.impl.network.Network.cljs$lang$ctorPrSeq = (function (this__33499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.Network.cljs$lang$ctorPrWriter = (function (this__33499__auto__,writer__33500__auto__){
return cljs.core._write.call(null,writer__33500__auto__,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.__GT_Network = (function untangled$client$impl$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new untangled.client.impl.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

untangled.client.impl.network.map__GT_Network = (function untangled$client$impl$network$map__GT_Network(G__37002){
return (new untangled.client.impl.network.Network(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__37002),new cljs.core.Keyword(null,"request-transform","request-transform",170337297).cljs$core$IFn$_invoke$arity$1(G__37002),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__37002),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__37002),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791).cljs$core$IFn$_invoke$arity$1(G__37002),null,cljs.core.dissoc.call(null,G__37002,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)),null));
});

/**
 * TODO: This is PUBLIC API! Should not be in impl ns.
 * 
 *   Build an Untangled Network object using the default implementation.
 * 
 *   Features:
 * 
 *   - Can configure the target URL on the server for Om network requests
 *   - Can supply a (fn [{:keys [body headers] :as req}] req') to transform arbitrary requests (e.g. to add things like auth headers)
 *   - Supports a global error callback (fn [status-code error] ) that is notified when a 400+ status code or hard network error occurs
 *   - `transit-handlers`: A map of transit handlers to install on the reader, such as
 * 
 * `{ :read { "thing" (fn [wire-value] (convert wire-value))) }
 *    :write { Thing (ThingHandler.) } }`
 * 
 * where:
 * 
 * (defrecord Thing [foo])
 * 
 * (deftype ThingHandler []
 *   Object
 *   (tag [_ _] "thing")
 *   (rep [_ thing] (make-raw thing))
 *   (stringRep [_ _] nil)))
 *   
 */
untangled.client.impl.network.make_untangled_network = (function untangled$client$impl$network$make_untangled_network(var_args){
var args__33925__auto__ = [];
var len__33918__auto___37016 = arguments.length;
var i__33919__auto___37017 = (0);
while(true){
if((i__33919__auto___37017 < len__33918__auto___37016)){
args__33925__auto__.push((arguments[i__33919__auto___37017]));

var G__37018 = (i__33919__auto___37017 + (1));
i__33919__auto___37017 = G__37018;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((1) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33926__auto__);
});

untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37013){
var map__37014 = p__37013;
var map__37014__$1 = ((((!((map__37014 == null)))?((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37014):map__37014);
var request_transform = cljs.core.get.call(null,map__37014__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var global_error_callback = cljs.core.get.call(null,map__37014__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
var transit_handlers = cljs.core.get.call(null,map__37014__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
return untangled.client.impl.network.map__GT_Network.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.call(null,global_error_callback)], null));
});

untangled.client.impl.network.make_untangled_network.cljs$lang$maxFixedArity = (1);

untangled.client.impl.network.make_untangled_network.cljs$lang$applyTo = (function (seq37011){
var G__37012 = cljs.core.first.call(null,seq37011);
var seq37011__$1 = cljs.core.next.call(null,seq37011);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic(G__37012,seq37011__$1);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33465__auto__,k__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
return cljs.core._lookup.call(null,this__33465__auto____$1,k__33466__auto__,null);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33467__auto__,k37020,else__33468__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
var G__37022 = (((k37020 instanceof cljs.core.Keyword))?k37020.fqn:null);
switch (G__37022) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37020,else__33468__auto__);

}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33479__auto__,writer__33480__auto__,opts__33481__auto__){
var self__ = this;
var this__33479__auto____$1 = this;
var pr_pair__33482__auto__ = ((function (this__33479__auto____$1){
return (function (keyval__33483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,cljs.core.pr_writer,""," ","",opts__33481__auto__,keyval__33483__auto__);
});})(this__33479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,pr_pair__33482__auto__,"#untangled.client.impl.network.MockNetwork{",", ","}",opts__33481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$ = true;


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37019){
var self__ = this;
var G__37019__$1 = this;
return (new cljs.core.RecordIter((0),G__37019__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33459__auto__){
var self__ = this;
var this__33459__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33469__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33460__auto__){
var self__ = this;
var this__33460__auto____$1 = this;
var h__33278__auto__ = self__.__hash;
if(!((h__33278__auto__ == null))){
return h__33278__auto__;
} else {
var h__33278__auto____$1 = cljs.core.hash_imap.call(null,this__33460__auto____$1);
self__.__hash = h__33278__auto____$1;

return h__33278__auto____$1;
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33461__auto__,other__33462__auto__){
var self__ = this;
var this__33461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__32831__auto__ = other__33462__auto__;
if(cljs.core.truth_(and__32831__auto__)){
var and__32831__auto____$1 = (this__33461__auto____$1.constructor === other__33462__auto__.constructor);
if(and__32831__auto____$1){
return cljs.core.equiv_map.call(null,this__33461__auto____$1,other__33462__auto__);
} else {
return and__32831__auto____$1;
}
} else {
return and__32831__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = true;


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return untangled.client.logging.info.call(null,"Ignored (mock) Network request ",edn);
});


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33474__auto__,k__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__33475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33474__auto____$1),self__.__meta),k__33475__auto__);
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33475__auto__)),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33472__auto__,k__33473__auto__,G__37019){
var self__ = this;
var this__33472__auto____$1 = this;
var pred__37023 = cljs.core.keyword_identical_QMARK_;
var expr__37024 = k__33473__auto__;
if(cljs.core.truth_(pred__37023.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__37024))){
return (new untangled.client.impl.network.MockNetwork(G__37019,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33473__auto__,G__37019),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33477__auto__){
var self__ = this;
var this__33477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33464__auto__,G__37019){
var self__ = this;
var this__33464__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,G__37019,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33470__auto__,entry__33471__auto__){
var self__ = this;
var this__33470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33471__auto__)){
return cljs.core._assoc.call(null,this__33470__auto____$1,cljs.core._nth.call(null,entry__33471__auto__,(0)),cljs.core._nth.call(null,entry__33471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33470__auto____$1,entry__33471__auto__);
}
});

untangled.client.impl.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.MockNetwork.cljs$lang$type = true;

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__33499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__33499__auto__,writer__33500__auto__){
return cljs.core._write.call(null,writer__33500__auto__,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.__GT_MockNetwork = (function untangled$client$impl$network$__GT_MockNetwork(complete_app){
return (new untangled.client.impl.network.MockNetwork(complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_MockNetwork = (function untangled$client$impl$network$map__GT_MockNetwork(G__37021){
return (new untangled.client.impl.network.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__37021),null,cljs.core.dissoc.call(null,G__37021,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.mock_network = (function untangled$client$impl$network$mock_network(){
return untangled.client.impl.network.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=network.js.map?rel=1479747558809