// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('untangled.i18n.core');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.next');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming Om transaction, which is in turn used by the error-handling logic of the plumbing.
 */
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__37044,query){
var map__37047 = p__37044;
var map__37047__$1 = ((((!((map__37047 == null)))?((((map__37047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37047):map__37047);
var reconciler = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__37047,map__37047__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__4655__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__37047,map__37047__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__36581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36581__auto__){
return (function (){
var f__36582__auto__ = (function (){var switch__36560__auto__ = ((function (c__36581__auto__){
return (function (state_37064){
var state_val_37065 = (state_37064[(1)]);
if((state_val_37065 === (1))){
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37064__$1,(2),q,v);
} else {
if((state_val_37065 === (2))){
var inst_37062 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37064__$1,inst_37062);
} else {
return null;
}
}
});})(c__36581__auto__))
;
return ((function (switch__36560__auto__,c__36581__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__36561__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__36561__auto____0 = (function (){
var statearr_37069 = [null,null,null,null,null,null,null];
(statearr_37069[(0)] = untangled$client$impl$application$enqueue_$_state_machine__36561__auto__);

(statearr_37069[(1)] = (1));

return statearr_37069;
});
var untangled$client$impl$application$enqueue_$_state_machine__36561__auto____1 = (function (state_37064){
while(true){
var ret_value__36562__auto__ = (function (){try{while(true){
var result__36563__auto__ = switch__36560__auto__.call(null,state_37064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36563__auto__;
}
break;
}
}catch (e37070){if((e37070 instanceof Object)){
var ex__36564__auto__ = e37070;
var statearr_37071_37073 = state_37064;
(statearr_37071_37073[(5)] = ex__36564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_37064;
state_37064 = G__37074;
continue;
} else {
return ret_value__36562__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__36561__auto__ = function(state_37064){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__36561__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__36561__auto____1.call(this,state_37064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__36561__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__36561__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__36561__auto__;
})()
;})(switch__36560__auto__,c__36581__auto__))
})();
var state__36583__auto__ = (function (){var statearr_37072 = f__36582__auto__.call(null);
(statearr_37072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36581__auto__);

return statearr_37072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36583__auto__);
});})(c__36581__auto__))
);

return c__36581__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_load,on_error){
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_load,on_error);
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__37076,remote_tx_map,cb){
var map__37079 = p__37076;
var map__37079__$1 = ((((!((map__37079 == null)))?((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37079):map__37079);
var app = map__37079__$1;
var queue = cljs.core.get.call(null,map__37079__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__37079,map__37079__$1,app,queue){
return (function (p1__37075_SHARP_){
return fallback.call(null,p1__37075_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__37079,map__37079__$1,app,queue))
], null);
if(has_mutations_QMARK_){
return untangled.client.impl.application.enqueue.call(null,queue,payload);
} else {
return null;
}
});
/**
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__37083){
var map__37094 = p__37083;
var map__37094__$1 = ((((!((map__37094 == null)))?((((map__37094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37094):map__37094);
var queue = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__37096_37104 = cljs.core.seq.call(null,parallel_payload);
var chunk__37097_37105 = null;
var count__37098_37106 = (0);
var i__37099_37107 = (0);
while(true){
if((i__37099_37107 < count__37098_37106)){
var map__37100_37108 = cljs.core._nth.call(null,chunk__37097_37105,i__37099_37107);
var map__37100_37109__$1 = ((((!((map__37100_37108 == null)))?((((map__37100_37108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37100_37108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37100_37108):map__37100_37108);
var query_37110 = cljs.core.get.call(null,map__37100_37109__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_37111 = cljs.core.get.call(null,map__37100_37109__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_37112 = cljs.core.get.call(null,map__37100_37109__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_37113 = cljs.core.get.call(null,map__37100_37109__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__37114 = ((function (seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,map__37100_37108,map__37100_37109__$1,query_37110,on_load_37111,on_error_37112,callback_args_37113,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking){
return (function (p1__37081_SHARP_){
return on_load_37111.call(null,p1__37081_SHARP_,callback_args_37113);
});})(seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,map__37100_37108,map__37100_37109__$1,query_37110,on_load_37111,on_error_37112,callback_args_37113,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__37115 = ((function (seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,on_load_SINGLEQUOTE__37114,map__37100_37108,map__37100_37109__$1,query_37110,on_load_37111,on_error_37112,callback_args_37113,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking){
return (function (p1__37082_SHARP_){
return on_error_37112.call(null,p1__37082_SHARP_,callback_args_37113);
});})(seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,on_load_SINGLEQUOTE__37114,map__37100_37108,map__37100_37109__$1,query_37110,on_load_37111,on_error_37112,callback_args_37113,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_37110,on_load_SINGLEQUOTE__37114,on_error_SINGLEQUOTE__37115);

var G__37116 = seq__37096_37104;
var G__37117 = chunk__37097_37105;
var G__37118 = count__37098_37106;
var G__37119 = (i__37099_37107 + (1));
seq__37096_37104 = G__37116;
chunk__37097_37105 = G__37117;
count__37098_37106 = G__37118;
i__37099_37107 = G__37119;
continue;
} else {
var temp__4657__auto___37120 = cljs.core.seq.call(null,seq__37096_37104);
if(temp__4657__auto___37120){
var seq__37096_37121__$1 = temp__4657__auto___37120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37096_37121__$1)){
var c__33654__auto___37122 = cljs.core.chunk_first.call(null,seq__37096_37121__$1);
var G__37123 = cljs.core.chunk_rest.call(null,seq__37096_37121__$1);
var G__37124 = c__33654__auto___37122;
var G__37125 = cljs.core.count.call(null,c__33654__auto___37122);
var G__37126 = (0);
seq__37096_37104 = G__37123;
chunk__37097_37105 = G__37124;
count__37098_37106 = G__37125;
i__37099_37107 = G__37126;
continue;
} else {
var map__37102_37127 = cljs.core.first.call(null,seq__37096_37121__$1);
var map__37102_37128__$1 = ((((!((map__37102_37127 == null)))?((((map__37102_37127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37102_37127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37102_37127):map__37102_37127);
var query_37129 = cljs.core.get.call(null,map__37102_37128__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_37130 = cljs.core.get.call(null,map__37102_37128__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_37131 = cljs.core.get.call(null,map__37102_37128__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_37132 = cljs.core.get.call(null,map__37102_37128__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__37133 = ((function (seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,map__37102_37127,map__37102_37128__$1,query_37129,on_load_37130,on_error_37131,callback_args_37132,seq__37096_37121__$1,temp__4657__auto___37120,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking){
return (function (p1__37081_SHARP_){
return on_load_37130.call(null,p1__37081_SHARP_,callback_args_37132);
});})(seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,map__37102_37127,map__37102_37128__$1,query_37129,on_load_37130,on_error_37131,callback_args_37132,seq__37096_37121__$1,temp__4657__auto___37120,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__37134 = ((function (seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,on_load_SINGLEQUOTE__37133,map__37102_37127,map__37102_37128__$1,query_37129,on_load_37130,on_error_37131,callback_args_37132,seq__37096_37121__$1,temp__4657__auto___37120,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking){
return (function (p1__37082_SHARP_){
return on_error_37131.call(null,p1__37082_SHARP_,callback_args_37132);
});})(seq__37096_37104,chunk__37097_37105,count__37098_37106,i__37099_37107,on_load_SINGLEQUOTE__37133,map__37102_37127,map__37102_37128__$1,query_37129,on_load_37130,on_error_37131,callback_args_37132,seq__37096_37121__$1,temp__4657__auto___37120,parallel_payload,map__37094,map__37094__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_37129,on_load_SINGLEQUOTE__37133,on_error_SINGLEQUOTE__37134);

var G__37135 = cljs.core.next.call(null,seq__37096_37121__$1);
var G__37136 = null;
var G__37137 = (0);
var G__37138 = (0);
seq__37096_37104 = G__37135;
chunk__37097_37105 = G__37136;
count__37098_37106 = G__37137;
i__37099_37107 = G__37138;
continue;
}
} else {
}
}
break;
}

var fetch_payload = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload)){
untangled.client.impl.application.enqueue.call(null,queue,cljs.core.assoc.call(null,fetch_payload,new cljs.core.Keyword(null,"networking","networking",586110628),networking));

var G__37139 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__37139;
continue;
} else {
return null;
}
break;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app,remote_tx_map,cb){
untangled.client.impl.application.enqueue_mutations.call(null,app,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__37140){
var map__37258 = p__37140;
var map__37258__$1 = ((((!((map__37258 == null)))?((((map__37258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37258):map__37258);
var networking = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__37258,map__37258__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__37258,map__37258__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__36581__auto___37375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel){
return (function (){
var f__36582__auto__ = (function (){var switch__36560__auto__ = ((function (c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel){
return (function (state_37299){
var state_val_37300 = (state_37299[(1)]);
if((state_val_37300 === (1))){
var state_37299__$1 = state_37299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37299__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_37300 === (2))){
var inst_37297 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37299__$1,inst_37297);
} else {
return null;
}
}
});})(c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel))
;
return ((function (switch__36560__auto__,c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____0 = (function (){
var statearr_37304 = [null,null,null,null,null,null,null];
(statearr_37304[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__);

(statearr_37304[(1)] = (1));

return statearr_37304;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____1 = (function (state_37299){
while(true){
var ret_value__36562__auto__ = (function (){try{while(true){
var result__36563__auto__ = switch__36560__auto__.call(null,state_37299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36563__auto__;
}
break;
}
}catch (e37305){if((e37305 instanceof Object)){
var ex__36564__auto__ = e37305;
var statearr_37306_37376 = state_37299;
(statearr_37306_37376[(5)] = ex__36564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37377 = state_37299;
state_37299 = G__37377;
continue;
} else {
return ret_value__36562__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__ = function(state_37299){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____1.call(this,state_37299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__36561__auto__;
})()
;})(switch__36560__auto__,c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel))
})();
var state__36583__auto__ = (function (){var statearr_37307 = f__36582__auto__.call(null);
(statearr_37307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36581__auto___37375);

return statearr_37307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36583__auto__);
});})(c__36581__auto___37375,map__37258,map__37258__$1,networking,queue,response_channel))
);

}});
;})(map__37258,map__37258__$1,networking,queue,response_channel))
});})(map__37258,map__37258__$1,networking,queue,response_channel))
;
var c__36581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel){
return (function (){
var f__36582__auto__ = (function (){var switch__36560__auto__ = ((function (c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel){
return (function (state_37348){
var state_val_37349 = (state_37348[(1)]);
if((state_val_37349 === (7))){
var inst_37327 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37327)){
var statearr_37350_37378 = state_37348__$1;
(statearr_37350_37378[(1)] = (11));

} else {
var statearr_37351_37379 = state_37348__$1;
(statearr_37351_37379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (1))){
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(2),queue);
} else {
if((state_val_37349 === (4))){
var inst_37346 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37348__$1,inst_37346);
} else {
if((state_val_37349 === (15))){
var inst_37343 = (state_37348[(2)]);
var inst_37310 = inst_37343;
var state_37348__$1 = (function (){var statearr_37352 = state_37348;
(statearr_37352[(7)] = inst_37310);

return statearr_37352;
})();
var statearr_37353_37380 = state_37348__$1;
(statearr_37353_37380[(2)] = null);

(statearr_37353_37380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (13))){
var inst_37332 = (state_37348[(2)]);
var inst_37333 = cljs.core.get.call(null,inst_37332,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_37334 = cljs.core.get.call(null,inst_37332,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_37335 = cljs.core.get.call(null,inst_37332,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_37336 = cljs.core.get.call(null,inst_37332,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_37337 = make_process_response.call(null,inst_37334,inst_37336);
var inst_37338 = make_process_response.call(null,inst_37335,inst_37336);
var inst_37339 = untangled.client.impl.application.real_send.call(null,networking,inst_37333,inst_37337,inst_37338);
var state_37348__$1 = (function (){var statearr_37354 = state_37348;
(statearr_37354[(8)] = inst_37339);

return statearr_37354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(14),response_channel);
} else {
if((state_val_37349 === (6))){
var state_37348__$1 = state_37348;
var statearr_37355_37381 = state_37348__$1;
(statearr_37355_37381[(2)] = false);

(statearr_37355_37381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (3))){
var inst_37310 = (state_37348[(7)]);
var inst_37314 = (inst_37310 == null);
var inst_37315 = cljs.core.not.call(null,inst_37314);
var state_37348__$1 = state_37348;
if(inst_37315){
var statearr_37356_37382 = state_37348__$1;
(statearr_37356_37382[(1)] = (5));

} else {
var statearr_37357_37383 = state_37348__$1;
(statearr_37357_37383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (12))){
var inst_37310 = (state_37348[(7)]);
var state_37348__$1 = state_37348;
var statearr_37358_37384 = state_37348__$1;
(statearr_37358_37384[(2)] = inst_37310);

(statearr_37358_37384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (2))){
var inst_37309 = (state_37348[(2)]);
var inst_37310 = inst_37309;
var state_37348__$1 = (function (){var statearr_37359 = state_37348;
(statearr_37359[(7)] = inst_37310);

return statearr_37359;
})();
var statearr_37360_37385 = state_37348__$1;
(statearr_37360_37385[(2)] = null);

(statearr_37360_37385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (11))){
var inst_37310 = (state_37348[(7)]);
var inst_37329 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37310);
var state_37348__$1 = state_37348;
var statearr_37361_37386 = state_37348__$1;
(statearr_37361_37386[(2)] = inst_37329);

(statearr_37361_37386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (9))){
var state_37348__$1 = state_37348;
var statearr_37362_37387 = state_37348__$1;
(statearr_37362_37387[(2)] = false);

(statearr_37362_37387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (5))){
var inst_37310 = (state_37348[(7)]);
var inst_37317 = inst_37310.cljs$lang$protocol_mask$partition0$;
var inst_37318 = (inst_37317 & (64));
var inst_37319 = inst_37310.cljs$core$ISeq$;
var inst_37320 = (inst_37318) || (inst_37319);
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37320)){
var statearr_37363_37388 = state_37348__$1;
(statearr_37363_37388[(1)] = (8));

} else {
var statearr_37364_37389 = state_37348__$1;
(statearr_37364_37389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (14))){
var inst_37341 = (state_37348[(2)]);
var state_37348__$1 = (function (){var statearr_37365 = state_37348;
(statearr_37365[(9)] = inst_37341);

return statearr_37365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(15),queue);
} else {
if((state_val_37349 === (10))){
var inst_37324 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37366_37390 = state_37348__$1;
(statearr_37366_37390[(2)] = inst_37324);

(statearr_37366_37390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (8))){
var state_37348__$1 = state_37348;
var statearr_37367_37391 = state_37348__$1;
(statearr_37367_37391[(2)] = true);

(statearr_37367_37391[(1)] = (10));


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
});})(c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel))
;
return ((function (switch__36560__auto__,c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____0 = (function (){
var statearr_37371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37371[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__);

(statearr_37371[(1)] = (1));

return statearr_37371;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____1 = (function (state_37348){
while(true){
var ret_value__36562__auto__ = (function (){try{while(true){
var result__36563__auto__ = switch__36560__auto__.call(null,state_37348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36563__auto__;
}
break;
}
}catch (e37372){if((e37372 instanceof Object)){
var ex__36564__auto__ = e37372;
var statearr_37373_37392 = state_37348;
(statearr_37373_37392[(5)] = ex__36564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37393 = state_37348;
state_37348 = G__37393;
continue;
} else {
return ret_value__36562__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__ = function(state_37348){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____1.call(this,state_37348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__36561__auto__;
})()
;})(switch__36560__auto__,c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel))
})();
var state__36583__auto__ = (function (){var statearr_37374 = f__36582__auto__.call(null);
(statearr_37374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36581__auto__);

return statearr_37374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36583__auto__);
});})(c__36581__auto__,map__37258,map__37258__$1,networking,queue,response_channel))
);

return c__36581__auto__;
});
/**
 * Configure a re-render when the locale changes. During startup this function will be called once for each
 *   reconciler that is running on a page.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__37398){
var vec__37399 = p__37398;
var k = cljs.core.nth.call(null,vec__37399,(0),null);
var v = cljs.core.nth.call(null,vec__37399,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__37406){
var vec__37407 = p__37406;
var k = cljs.core.nth.call(null,vec__37407,(0),null);
var v = cljs.core.nth.call(null,vec__37407,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled$client$impl$application$sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.call(null,(function (acc,p__37414){
var vec__37415 = p__37414;
var k = cljs.core.nth.call(null,vec__37415,(0),null);
var v = cljs.core.nth.call(null,vec__37415,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled$client$impl$application$sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
untangled.client.impl.application.merge_handler = (function untangled$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__37426){
var vec__37427 = p__37426;
var k = cljs.core.nth.call(null,vec__37427,(0),null);
var _ = cljs.core.nth.call(null,vec__37427,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__37430){
var vec__37431 = p__37430;
var k = cljs.core.nth.call(null,vec__37431,(0),null);
var v = cljs.core.nth.call(null,vec__37431,(1),null);
if(cljs.core.truth_((function (){var and__32831__auto__ = mutation_merge;
if(cljs.core.truth_(and__32831__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__32831__auto__;
}
})())){
var temp__4655__auto__ = mutation_merge.call(null,acc,k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"tempids","tempids",1767509089)));
if(cljs.core.truth_(temp__4655__auto__)){
var updated_state = temp__4655__auto__;
return updated_state;
} else {
untangled.client.logging.info.call(null,"Return value handler for",k,"returned nil. Ignored.");

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__37434,initial_state,parser,p__37435){
var map__37440 = p__37434;
var map__37440__$1 = ((((!((map__37440 == null)))?((((map__37440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37440):map__37440);
var app = map__37440__$1;
var queue = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__37441 = p__37435;
var map__37441__$1 = ((((!((map__37441 == null)))?((((map__37441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37441):map__37441);
var pathopt = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__32843__auto__ = migrate;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = ((cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,initial_state)))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__32843__auto__ = migrate;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__37440,map__37440__$1,app,queue,mutation_merge,map__37441,map__37441__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__37444_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__37444_SHARP_)){
return cljs.core.partial.call(null,p1__37444_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1479747559118