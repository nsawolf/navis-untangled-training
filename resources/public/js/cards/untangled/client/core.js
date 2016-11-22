// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('untangled.client.logging');
goog.require('om.next.cache');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.util');
goog.require('om.next.protocols');
goog.require('untangled.client.impl.application');
goog.require('untangled.dom');
goog.require('om.next');
goog.require('untangled.client.impl.built_in_mutations');


/**
 * Entrypoint for creating a new untangled client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [edn headers] [edn' headers'])
 *   ```
 * 
 *   it can replace the outgoing EDN or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Untangled databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized untangled application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the built-in networking record.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   `:transit-handlers` (optional). A map with keys for `:read` and `:write`, which contain maps to be used for the read
 *   and write side of transit to extend the supported data types. See `make-untangled-network` in network.cljs.
 * 
 *   `:pathopt` (optional, defaults to true).  Turn on/off Om path optimization. This is here in case you're experiencing problems with rendering.
 *   Path optimization is a rendering optimization that may still have bugs.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (om/shared this)
 * 
 *   `:mutation-merge (optional). A function `(fn [state mutation-symbol return-value])` that receives the app state as a
 *   map (NOT an atom) and should return the new state as a map. This function is run when network results are being merged,
 *   and is called once for each mutation that had a return value on the server. Returning nil from this function is safe, and will be ignored
 *   with a console message for debugging. If you need information about the original mutation arguments then you must reflect
 *   them back from the server in your return value. By default such values are discarded.
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
untangled.client.core.new_untangled_client = (function untangled$client$core$new_untangled_client(var_args){
var args__33925__auto__ = [];
var len__33918__auto___37482 = arguments.length;
var i__33919__auto___37483 = (0);
while(true){
if((i__33919__auto___37483 < len__33918__auto___37482)){
args__33925__auto__.push((arguments[i__33919__auto___37483]));

var G__37484 = (i__33919__auto___37483 + (1));
i__33919__auto___37483 = G__37484;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((0) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(argseq__33926__auto__);
});

untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__37479){
var map__37480 = p__37479;
var map__37480__$1 = ((((!((map__37480 == null)))?((((map__37480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37480):map__37480);
var started_callback = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),cljs.core.constantly.call(null,null));
var initial_state = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var network_error_callback = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"network-error-callback","network-error-callback",93849635),cljs.core.constantly.call(null,null));
var pathopt = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var networking = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var mutation_merge = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var transit_handlers = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
var migrate = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var request_transform = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var shared = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),mutation_merge,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),migrate,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null),new cljs.core.Keyword(null,"networking","networking",586110628),(function (){var or__32843__auto__ = networking;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return untangled.client.impl.network.make_untangled_network.call(null,"/api",new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),network_error_callback);
}
})()], null));
});

untangled.client.core.new_untangled_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_client.cljs$lang$applyTo = (function (seq37478){
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37478));
});


/**
 * @interface
 */
untangled.client.core.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
untangled.client.core.initial_state = (function untangled$client$core$initial_state(clz,params){
if((!((clz == null))) && (!((clz.untangled$client$core$InitialAppState$initial_state$arity$2 == null)))){
return clz.untangled$client$core$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__33506__auto__ = (((clz == null))?null:clz);
var m__33507__auto__ = (untangled.client.core.initial_state[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,clz,params);
} else {
var m__33507__auto____$1 = (untangled.client.core.initial_state["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,clz,params);
} else {
throw cljs.core.missing_protocol.call(null,"InitialAppState.initial-state",clz);
}
}
}
});


/**
 * @interface
 */
untangled.client.core.UntangledApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
untangled.client.core.mount = (function untangled$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$mount$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.mount[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,root_component,target_dom_id);
} else {
var m__33507__auto____$1 = (untangled.client.core.mount["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,root_component,target_dom_id);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
untangled.client.core.reset_state_BANG_ = (function untangled$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.reset_state_BANG_[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,new_state);
} else {
var m__33507__auto____$1 = (untangled.client.core.reset_state_BANG_["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
untangled.client.core.reset_app_BANG_ = (function untangled$client$core$reset_app_BANG_(this$,root_component,callback){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.reset_app_BANG_[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$,root_component,callback);
} else {
var m__33507__auto____$1 = (untangled.client.core.reset_app_BANG_["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$,root_component,callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests. Useful on failures to eliminate cascading failures.
 */
untangled.client.core.clear_pending_remote_requests_BANG_ = (function untangled$client$core$clear_pending_remote_requests_BANG_(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1(this$);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.clear_pending_remote_requests_BANG_[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$);
} else {
var m__33507__auto____$1 = (untangled.client.core.clear_pending_remote_requests_BANG_["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
untangled.client.core.refresh = (function untangled$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$refresh$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$refresh$arity$1(this$);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.refresh[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$);
} else {
var m__33507__auto____$1 = (untangled.client.core.refresh["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
untangled.client.core.history = (function untangled$client$core$history(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$history$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$history$arity$1(this$);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.history[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$);
} else {
var m__33507__auto____$1 = (untangled.client.core.history["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.history",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
untangled.client.core.reset_history_BANG_ = (function untangled$client$core$reset_history_BANG_(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__33506__auto__ = (((this$ == null))?null:this$);
var m__33507__auto__ = (untangled.client.core.reset_history_BANG_[goog.typeOf(x__33506__auto__)]);
if(!((m__33507__auto__ == null))){
return m__33507__auto__.call(null,this$);
} else {
var m__33507__auto____$1 = (untangled.client.core.reset_history_BANG_["_"]);
if(!((m__33507__auto____$1 == null))){
return m__33507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-history!",this$);
}
}
}
});

untangled.client.core.merge_alternate_union_elements_BANG_ = (function untangled$client$core$merge_alternate_union_elements_BANG_(app,root_component){
var walk_ast = (function() {
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = null;
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2 = (function (ast,visitor){
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,null);
});
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3 = (function (ast,visitor,last_join_component){
visitor.call(null,ast,last_join_component);

if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
var join_component = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast):last_join_component);
var seq__37588 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__37589 = null;
var count__37590 = (0);
var i__37591 = (0);
while(true){
if((i__37591 < count__37590)){
var c = cljs.core._nth.call(null,chunk__37589,i__37591);
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,c,visitor,join_component);

var G__37617 = seq__37588;
var G__37618 = chunk__37589;
var G__37619 = count__37590;
var G__37620 = (i__37591 + (1));
seq__37588 = G__37617;
chunk__37589 = G__37618;
count__37590 = G__37619;
i__37591 = G__37620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37588);
if(temp__4657__auto__){
var seq__37588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37588__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__37588__$1);
var G__37621 = cljs.core.chunk_rest.call(null,seq__37588__$1);
var G__37622 = c__33654__auto__;
var G__37623 = cljs.core.count.call(null,c__33654__auto__);
var G__37624 = (0);
seq__37588 = G__37621;
chunk__37589 = G__37622;
count__37590 = G__37623;
i__37591 = G__37624;
continue;
} else {
var c = cljs.core.first.call(null,seq__37588__$1);
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,c,visitor,join_component);

var G__37625 = cljs.core.next.call(null,seq__37588__$1);
var G__37626 = null;
var G__37627 = (0);
var G__37628 = (0);
seq__37588 = G__37625;
chunk__37589 = G__37626;
count__37590 = G__37627;
i__37591 = G__37628;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = function(ast,visitor,last_join_component){
switch(arguments.length){
case 2:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2.call(this,ast,visitor);
case 3:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3.call(this,ast,visitor,last_join_component);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$2 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2;
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3;
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast;
})()
;
var merge_union = (function untangled$client$core$merge_alternate_union_elements_BANG__$_merge_union(p__37592,last_join_component){
var map__37605 = p__37592;
var map__37605__$1 = ((((!((map__37605 == null)))?((((map__37605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37605):map__37605);
var n = map__37605__$1;
var type = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var query = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var children = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),type)){
var default_branch = (function (){var and__32831__auto__ = last_join_component;
if(cljs.core.truth_(and__32831__auto__)){
var and__32831__auto____$1 = ((!((last_join_component == null)))?(((false) || (last_join_component.untangled$client$core$InitialAppState$))?true:false):false);
if(and__32831__auto____$1){
return untangled.client.core.initial_state.call(null,last_join_component,null);
} else {
return and__32831__auto____$1;
}
} else {
return and__32831__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_.call(null,default_branch);
var seq__37609 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.meta),cljs.core.vals.call(null,query)));
var chunk__37610 = null;
var count__37611 = (0);
var i__37612 = (0);
while(true){
if((i__37612 < count__37611)){
var element = cljs.core._nth.call(null,chunk__37610,i__37612);
var temp__4655__auto___37629 = (function (){var and__32831__auto__ = ((!((element == null)))?(((false) || (element.untangled$client$core$InitialAppState$))?true:false):false);
if(and__32831__auto__){
return untangled.client.core.initial_state.call(null,element,null);
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto___37629)){
var state_37630 = temp__4655__auto___37629;
if(cljs.core.truth_((function (){var and__32831__auto__ = state_37630;
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not.call(null,default_branch);
} else {
return and__32831__auto__;
}
})())){
untangled.client.logging.warn.call(null,"Subelements of union with query ",query," have initial state, but the union component itself has no initial app state. Your app state may not have been initialized correctly.");
} else {
if(!(to_many_QMARK_)){
untangled.client.core.merge_state_BANG_.call(null,app,last_join_component,state_37630);
} else {
}
}
} else {
}

var G__37631 = seq__37609;
var G__37632 = chunk__37610;
var G__37633 = count__37611;
var G__37634 = (i__37612 + (1));
seq__37609 = G__37631;
chunk__37610 = G__37632;
count__37611 = G__37633;
i__37612 = G__37634;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37609);
if(temp__4657__auto__){
var seq__37609__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37609__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__37609__$1);
var G__37635 = cljs.core.chunk_rest.call(null,seq__37609__$1);
var G__37636 = c__33654__auto__;
var G__37637 = cljs.core.count.call(null,c__33654__auto__);
var G__37638 = (0);
seq__37609 = G__37635;
chunk__37610 = G__37636;
count__37611 = G__37637;
i__37612 = G__37638;
continue;
} else {
var element = cljs.core.first.call(null,seq__37609__$1);
var temp__4655__auto___37639 = (function (){var and__32831__auto__ = ((!((element == null)))?(((false) || (element.untangled$client$core$InitialAppState$))?true:false):false);
if(and__32831__auto__){
return untangled.client.core.initial_state.call(null,element,null);
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto___37639)){
var state_37640 = temp__4655__auto___37639;
if(cljs.core.truth_((function (){var and__32831__auto__ = state_37640;
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not.call(null,default_branch);
} else {
return and__32831__auto__;
}
})())){
untangled.client.logging.warn.call(null,"Subelements of union with query ",query," have initial state, but the union component itself has no initial app state. Your app state may not have been initialized correctly.");
} else {
if(!(to_many_QMARK_)){
untangled.client.core.merge_state_BANG_.call(null,app,last_join_component,state_37640);
} else {
}
}
} else {
}

var G__37641 = cljs.core.next.call(null,seq__37609__$1);
var G__37642 = null;
var G__37643 = (0);
var G__37644 = (0);
seq__37609 = G__37641;
chunk__37610 = G__37642;
count__37611 = G__37643;
i__37612 = G__37644;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
return walk_ast.call(null,om.next.query__GT_ast.call(null,om.next.get_query.call(null,root_component)),merge_union);
});
/**
 * Initialize the untangled Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
untangled.client.core.initialize = (function untangled$client$core$initialize(p__37645,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__37648 = p__37645;
var map__37648__$1 = ((((!((map__37648 == null)))?((((map__37648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37648):map__37648);
var app = map__37648__$1;
var networking = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var started_callback = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var queue = cljs.core.async.chan.call(null,(1024));
var rc = cljs.core.async.chan.call(null);
var parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.client.impl.om_plumbing.read_local,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),rc,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),true,new cljs.core.Keyword(null,"networking","networking",586110628),networking);
var rec = untangled.client.impl.application.generate_reconciler.call(null,initial_app,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.call(null,initial_app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
untangled.client.impl.network.start.call(null,networking,completed_app);

untangled.client.impl.application.initialize_internationalization.call(null,rec);

untangled.client.impl.application.initialize_global_error_callback.call(null,completed_app);

untangled.client.impl.application.start_network_sequential_processing.call(null,completed_app);

om.next.add_root_BANG_.call(null,rec,root_component,node);

untangled.client.core.merge_alternate_union_elements_BANG_.call(null,completed_app,root_component);

if(cljs.core.truth_(started_callback)){
started_callback.call(null,completed_app);
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.clear_queue = (function untangled$client$core$clear_queue(queue){
var element = cljs.core.async.poll_BANG_.call(null,queue);
while(true){
if(cljs.core.truth_(element)){
var G__37650 = cljs.core.async.poll_BANG_.call(null,queue);
element = G__37650;
continue;
} else {
return null;
}
break;
}
});
/**
 * Needed for mocking in tests. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.reset_history_impl = (function untangled$client$core$reset_history_impl(app){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (p1__37651_SHARP_){
return om.next.cache.cache.call(null,p1__37651_SHARP_.size);
})));
});
untangled.client.core.refresh_STAR_ = (function untangled$client$core$refresh_STAR_(p__37652){
var map__37655 = p__37652;
var map__37655__$1 = ((((!((map__37655 == null)))?((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);
var app = map__37655__$1;
var reconciler = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,reconciler);
});
untangled.client.core.mount_STAR_ = (function untangled$client$core$mount_STAR_(p__37657,root_component,dom_id_or_node){
var map__37663 = p__37657;
var map__37663__$1 = ((((!((map__37663 == null)))?((((map__37663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37663):map__37663);
var app = map__37663__$1;
var mounted_QMARK_ = cljs.core.get.call(null,map__37663__$1,new cljs.core.Keyword(null,"mounted?","mounted?",712114760));
var initial_state = cljs.core.get.call(null,map__37663__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var reconciler_options = cljs.core.get.call(null,map__37663__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
if(cljs.core.truth_(mounted_QMARK_)){
untangled.client.core.refresh_STAR_.call(null,app);

return app;
} else {
var uses_initial_app_state_QMARK_ = ((!((root_component == null)))?(((false) || (root_component.untangled$client$core$InitialAppState$))?true:false):false);
var ui_declared_state = (function (){var and__32831__auto__ = uses_initial_app_state_QMARK_;
if(and__32831__auto__){
return untangled.client.core.initial_state.call(null,root_component,null);
} else {
return and__32831__auto__;
}
})();
var atom_supplied_QMARK_ = cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,initial_state));
var init_conflict_QMARK_ = (function (){var and__32831__auto__ = (atom_supplied_QMARK_) || (cljs.core.seq.call(null,initial_state));
if(and__32831__auto__){
if(!((root_component == null))){
if((false) || (root_component.untangled$client$core$InitialAppState$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__32831__auto__;
}
})();
var state = ((!(uses_initial_app_state_QMARK_))?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):((atom_supplied_QMARK_)?(function (){
cljs.core.reset_BANG_.call(null,initial_state,om.next.tree__GT_db.call(null,root_component,ui_declared_state,true));

return initial_state;
})()
:ui_declared_state
));
if(init_conflict_QMARK_){
untangled.client.logging.warn.call(null,"You supplied an initial state AND a root component with initial state. Using root's InitialAppState (atom overwritten)!");
} else {
}

return untangled.client.core.initialize.call(null,app,state,root_component,dom_id_or_node,reconciler_options);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {untangled.client.core.UntangledApplication}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.core.Application = (function (initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.networking = networking;
this.queue = queue;
this.response_channel = response_channel;
this.reconciler = reconciler;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33465__auto__,k__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
return cljs.core._lookup.call(null,this__33465__auto____$1,k__33466__auto__,null);
});


untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33467__auto__,k37669,else__33468__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
var G__37671 = (((k37669 instanceof cljs.core.Keyword))?k37669.fqn:null);
switch (G__37671) {
case "networking":
return self__.networking;

break;
case "response-channel":
return self__.response_channel;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "queue":
return self__.queue;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler":
return self__.reconciler;

break;
case "parser":
return self__.parser;

break;
case "started-callback":
return self__.started_callback;

break;
case "initial-state":
return self__.initial_state;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37669,else__33468__auto__);

}
});


untangled.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33479__auto__,writer__33480__auto__,opts__33481__auto__){
var self__ = this;
var this__33479__auto____$1 = this;
var pr_pair__33482__auto__ = ((function (this__33479__auto____$1){
return (function (keyval__33483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,cljs.core.pr_writer,""," ","",opts__33481__auto__,keyval__33483__auto__);
});})(this__33479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33480__auto__,pr_pair__33482__auto__,"#untangled.client.core.Application{",", ","}",opts__33481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IIterable$ = true;


untangled.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37668){
var self__ = this;
var G__37668__$1 = this;
return (new cljs.core.RecordIter((0),G__37668__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


untangled.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return self__.__meta;
});


untangled.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33459__auto__){
var self__ = this;
var this__33459__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33469__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33460__auto__){
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


untangled.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33461__auto__,other__33462__auto__){
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


untangled.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33474__auto__,k__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"networking","networking",586110628),null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"parser","parser",-1543495310),null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),null], null), null),k__33475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33474__auto____$1),self__.__meta),k__33475__auto__);
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33475__auto__)),null));
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$ = true;


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.mount_STAR_.call(null,this$__$1,root_component,dom_id_or_node);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),new_state);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if(!(((!((root_component == null)))?(((false) || (root_component.untangled$client$core$InitialAppState$))?true:false):false))){
return untangled.client.logging.error.call(null,"The specified root component does not implement InitialAppState!");
} else {
var base_state = om.next.tree__GT_db.call(null,root_component,untangled.client.core.initial_state.call(null,root_component,null),true);
untangled.client.core.clear_pending_remote_requests_BANG_.call(null,this$__$1);

cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),base_state);

untangled.client.core.reset_history_BANG_.call(null,this$__$1);

untangled.client.core.merge_alternate_union_elements_BANG_.call(null,this$__$1,root_component);

untangled.client.logging.info.call(null,"updated app state to original ",om.next.app_state.call(null,self__.reconciler));

if(cljs.core._EQ_.call(null,callback,new cljs.core.Keyword(null,"original","original",-445386197))){
self__.started_callback.call(null,this$__$1);
} else {
if(cljs.core.truth_(callback)){
callback.call(null,this$__$1);
} else {
}
}

return untangled.client.core.refresh.call(null,this$__$1);
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.clear_queue.call(null,self__.queue);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"steps","steps",-128433302),history_steps,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (history_steps,history_map,this$__$1){
return (function (p__37673){
var vec__37674 = p__37673;
var k = cljs.core.nth.call(null,vec__37674,(0),null);
var v = cljs.core.nth.call(null,vec__37674,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword("untangled","meta","untangled/meta",1275048992),cljs.core.meta.call(null,v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.reset_history_impl.call(null,this$__$1);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,self__.reconciler);
});


untangled.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33472__auto__,k__33473__auto__,G__37668){
var self__ = this;
var this__33472__auto____$1 = this;
var pred__37677 = cljs.core.keyword_identical_QMARK_;
var expr__37678 = k__33473__auto__;
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__37678))){
return (new untangled.client.core.Application(G__37668,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,G__37668,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,G__37668,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__37668,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,G__37668,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,G__37668,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,G__37668,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,G__37668,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,G__37668,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37677.call(null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__37678))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,G__37668,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33473__auto__,G__37668),null));
}
}
}
}
}
}
}
}
}
}
});


untangled.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33477__auto__){
var self__ = this;
var this__33477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33464__auto__,G__37668){
var self__ = this;
var this__33464__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__37668,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33470__auto__,entry__33471__auto__){
var self__ = this;
var this__33470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33471__auto__)){
return cljs.core._assoc.call(null,this__33470__auto____$1,cljs.core._nth.call(null,entry__33471__auto__,(0)),cljs.core._nth.call(null,entry__33471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33470__auto____$1,entry__33471__auto__);
}
});

untangled.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"mutation-merge","mutation-merge",-491211795,null),new cljs.core.Symbol(null,"started-callback","started-callback",-158055424,null),new cljs.core.Symbol(null,"networking","networking",-2068325141,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"response-channel","response-channel",-1259244276,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.Symbol(null,"mounted?","mounted?",-1942321009,null),new cljs.core.Symbol(null,"reconciler-options","reconciler-options",-1005320734,null)], null);
});

untangled.client.core.Application.cljs$lang$type = true;

untangled.client.core.Application.cljs$lang$ctorPrSeq = (function (this__33499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.core/Application");
});

untangled.client.core.Application.cljs$lang$ctorPrWriter = (function (this__33499__auto__,writer__33500__auto__){
return cljs.core._write.call(null,writer__33500__auto__,"untangled.client.core/Application");
});

untangled.client.core.__GT_Application = (function untangled$client$core$__GT_Application(initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options){
return (new untangled.client.core.Application(initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

untangled.client.core.map__GT_Application = (function untangled$client$core$map__GT_Application(G__37670){
return (new untangled.client.core.Application(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(G__37670),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035).cljs$core$IFn$_invoke$arity$1(G__37670),null,cljs.core.dissoc.call(null,G__37670,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)),null));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Untangled app container.
 */
untangled.client.core.new_untangled_test_client = (function untangled$client$core$new_untangled_test_client(var_args){
var args__33925__auto__ = [];
var len__33918__auto___37685 = arguments.length;
var i__33919__auto___37686 = (0);
while(true){
if((i__33919__auto___37686 < len__33918__auto___37685)){
args__33925__auto__.push((arguments[i__33919__auto___37686]));

var G__37687 = (i__33919__auto___37686 + (1));
i__33919__auto___37686 = G__37687;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((0) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__33926__auto__);
});

untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__37682){
var map__37683 = p__37682;
var map__37683__$1 = ((((!((map__37683 == null)))?((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37683):map__37683);
var initial_state = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.client.impl.network.mock_network.call(null)], null));
});

untangled.client.core.new_untangled_test_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_test_client.cljs$lang$applyTo = (function (seq37681){
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37681));
});

/**
 * Get the current window location from the browser
 */
untangled.client.core.get_url = (function untangled$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
untangled.client.core.uri_params = (function untangled$client$core$uri_params(var_args){
var args37688 = [];
var len__33918__auto___37695 = arguments.length;
var i__33919__auto___37696 = (0);
while(true){
if((i__33919__auto___37696 < len__33918__auto___37695)){
args37688.push((arguments[i__33919__auto___37696]));

var G__37697 = (i__33919__auto___37696 + (1));
i__33919__auto___37696 = G__37697;
continue;
} else {
}
break;
}

var G__37690 = args37688.length;
switch (G__37690) {
case 0:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37688.length)].join('')));

}
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled.client.core.uri_params.call(null,untangled.client.core.get_url.call(null));
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__33623__auto__ = ((function (query_data){
return (function untangled$client$core$iter__37691(s__37692){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__37692__$1 = s__37692;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37692__$1);
if(temp__4657__auto__){
var s__37692__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37692__$2)){
var c__33621__auto__ = cljs.core.chunk_first.call(null,s__37692__$2);
var size__33622__auto__ = cljs.core.count.call(null,c__33621__auto__);
var b__37694 = cljs.core.chunk_buffer.call(null,size__33622__auto__);
if((function (){var i__37693 = (0);
while(true){
if((i__37693 < size__33622__auto__)){
var k = cljs.core._nth.call(null,c__33621__auto__,i__37693);
cljs.core.chunk_append.call(null,b__37694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__37699 = (i__37693 + (1));
i__37693 = G__37699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37694),untangled$client$core$iter__37691.call(null,cljs.core.chunk_rest.call(null,s__37692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37694),null);
}
} else {
var k = cljs.core.first.call(null,s__37692__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),untangled$client$core$iter__37691.call(null,cljs.core.rest.call(null,s__37692__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__33623__auto__.call(null,query_data.getKeys());
})());
});

untangled.client.core.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
untangled.client.core.get_url_param = (function untangled$client$core$get_url_param(var_args){
var args37700 = [];
var len__33918__auto___37703 = arguments.length;
var i__33919__auto___37704 = (0);
while(true){
if((i__33919__auto___37704 < len__33918__auto___37703)){
args37700.push((arguments[i__33919__auto___37704]));

var G__37705 = (i__33919__auto___37704 + (1));
i__33919__auto___37704 = G__37705;
continue;
} else {
}
break;
}

var G__37702 = args37700.length;
switch (G__37702) {
case 1:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37700.length)].join('')));

}
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return untangled.client.core.get_url_param.call(null,untangled.client.core.get_url.call(null),param_name);
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.call(null,untangled.client.core.uri_params.call(null,url),param_name);
});

untangled.client.core.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * Get the ident using a component class and data. Om's simulated statics are elided by
 *   advanced compilation. This function compensates.
 */
untangled.client.core.get_class_ident = (function untangled$client$core$get_class_ident(comp,data){
if(((!((comp == null)))?(((false) || (comp.om$next$Ident$))?true:false):false)){
return om.next.ident.call(null,comp,data);
} else {
if(cljs.core.truth_(goog.isFunction(comp))){
var resurrection = Object.create(comp.prototype);
if(((!((resurrection == null)))?(((false) || (resurrection.om$next$Ident$))?true:false):false)){
return om.next.ident.call(null,resurrection,data);
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
untangled.client.core.component_merge_query = (function untangled$client$core$component_merge_query(component,object_data){
var ident = untangled.client.core.get_class_ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([ident,object_query], true, false)], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Untangled with respect
 *   to data overwrites in the app database.
 */
untangled.client.core.preprocess_merge = (function untangled$client$core$preprocess_merge(state_atom,component,object_data){
var ident = untangled.client.core.get_class_ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
var base_query = untangled.client.core.component_merge_query.call(null,component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),base_query], null)], null);
var existing_data = cljs.core.get.call(null,om.next.db__GT_tree.call(null,base_query,cljs.core.deref.call(null,state_atom),cljs.core.deref.call(null,state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = untangled.client.impl.om_plumbing.mark_missing.call(null,object_data,object_query);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),cljs.core.PersistentArrayMap.fromArray([ident,untangled.client.impl.util.deep_merge.call(null,existing_data,marked_data)], true, false)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge-query","merge-query",610171663),merge_query,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734),merge_data], null);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 *   
 */
untangled.client.core.integrate_ident_BANG_ = (function untangled$client$core$integrate_ident_BANG_(var_args){
var args__33925__auto__ = [];
var len__33918__auto___37728 = arguments.length;
var i__33919__auto___37729 = (0);
while(true){
if((i__33919__auto___37729 < len__33918__auto___37728)){
args__33925__auto__.push((arguments[i__33919__auto___37729]));

var G__37730 = (i__33919__auto___37729 + (1));
i__33919__auto___37729 = G__37730;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((2) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((2)),(0),null)):null);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33926__auto__);
});

untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
var already_has_ident_at_path_QMARK_ = (function (data_path){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__37711_SHARP_){
return cljs.core._EQ_.call(null,p1__37711_SHARP_,ident);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))));
});
var actions = cljs.core.partition.call(null,(2),named_parameters);
var seq__37716 = cljs.core.seq.call(null,actions);
var chunk__37717 = null;
var count__37718 = (0);
var i__37719 = (0);
while(true){
if((i__37719 < count__37718)){
var vec__37720 = cljs.core._nth.call(null,chunk__37717,i__37719);
var command = cljs.core.nth.call(null,vec__37720,(0),null);
var data_path = cljs.core.nth.call(null,vec__37720,(1),null);
var G__37723_37731 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__37723_37731) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for prepend must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__37716,chunk__37717,count__37718,i__37719,G__37723_37731,vec__37720,command,data_path,already_has_ident_at_path_QMARK_,actions){
return (function (p1__37712_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__37712_SHARP_);
});})(seq__37716,chunk__37717,count__37718,i__37719,G__37723_37731,vec__37720,command,data_path,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for append must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_37733 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__37734 = (cljs.core.seq.call(null,path_to_vector_37733)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_37733)));
var index_37735 = cljs.core.last.call(null,data_path);
var vector_37736 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_37733);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Replacement path must be a vector. You passed: "),cljs.core.str(data_path)].join('')),cljs.core.str("\n"),cljs.core.str("(vector? data-path)")].join('')));
}

if(to_many_QMARK__37734){
if(cljs.core.vector_QMARK_.call(null,vector_37736)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must be a vector"),cljs.core.str("\n"),cljs.core.str("(vector? vector)")].join('')));
}

if(typeof index_37735 === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must end in a vector index"),cljs.core.str("\n"),cljs.core.str("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_37736,index_37735)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Target vector for replacement does not have an item at index "),cljs.core.str(index_37735)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__37737 = seq__37716;
var G__37738 = chunk__37717;
var G__37739 = count__37718;
var G__37740 = (i__37719 + (1));
seq__37716 = G__37737;
chunk__37717 = G__37738;
count__37718 = G__37739;
i__37719 = G__37740;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37716);
if(temp__4657__auto__){
var seq__37716__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37716__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__37716__$1);
var G__37741 = cljs.core.chunk_rest.call(null,seq__37716__$1);
var G__37742 = c__33654__auto__;
var G__37743 = cljs.core.count.call(null,c__33654__auto__);
var G__37744 = (0);
seq__37716 = G__37741;
chunk__37717 = G__37742;
count__37718 = G__37743;
i__37719 = G__37744;
continue;
} else {
var vec__37724 = cljs.core.first.call(null,seq__37716__$1);
var command = cljs.core.nth.call(null,vec__37724,(0),null);
var data_path = cljs.core.nth.call(null,vec__37724,(1),null);
var G__37727_37745 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__37727_37745) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for prepend must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__37716,chunk__37717,count__37718,i__37719,G__37727_37745,vec__37724,command,data_path,seq__37716__$1,temp__4657__auto__,already_has_ident_at_path_QMARK_,actions){
return (function (p1__37712_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__37712_SHARP_);
});})(seq__37716,chunk__37717,count__37718,i__37719,G__37727_37745,vec__37724,command,data_path,seq__37716__$1,temp__4657__auto__,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for append must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_37747 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__37748 = (cljs.core.seq.call(null,path_to_vector_37747)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_37747)));
var index_37749 = cljs.core.last.call(null,data_path);
var vector_37750 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_37747);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Replacement path must be a vector. You passed: "),cljs.core.str(data_path)].join('')),cljs.core.str("\n"),cljs.core.str("(vector? data-path)")].join('')));
}

if(to_many_QMARK__37748){
if(cljs.core.vector_QMARK_.call(null,vector_37750)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must be a vector"),cljs.core.str("\n"),cljs.core.str("(vector? vector)")].join('')));
}

if(typeof index_37749 === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must end in a vector index"),cljs.core.str("\n"),cljs.core.str("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_37750,index_37749)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Target vector for replacement does not have an item at index "),cljs.core.str(index_37749)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__37751 = cljs.core.next.call(null,seq__37716__$1);
var G__37752 = null;
var G__37753 = (0);
var G__37754 = (0);
seq__37716 = G__37751;
chunk__37717 = G__37752;
count__37718 = G__37753;
i__37719 = G__37754;
continue;
}
} else {
return null;
}
}
break;
}
});

untangled.client.core.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.core.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq37713){
var G__37714 = cljs.core.first.call(null,seq37713);
var seq37713__$1 = cljs.core.next.call(null,seq37713);
var G__37715 = cljs.core.first.call(null,seq37713__$1);
var seq37713__$2 = cljs.core.next.call(null,seq37713__$1);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37714,G__37715,seq37713__$2);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Untangled: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - app-or-reconciler: The Untangled application or Om reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 *   
 */
untangled.client.core.merge_state_BANG_ = (function untangled$client$core$merge_state_BANG_(var_args){
var args__33925__auto__ = [];
var len__33918__auto___37762 = arguments.length;
var i__33919__auto___37763 = (0);
while(true){
if((i__33919__auto___37763 < len__33918__auto___37762)){
args__33925__auto__.push((arguments[i__33919__auto___37763]));

var G__37764 = (i__33919__auto___37763 + (1));
i__33919__auto___37763 = G__37764;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((3) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((3)),(0),null)):null);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33926__auto__);
});

untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_parameters){
if(((!((component == null)))?(((false) || (component.om$next$Ident$))?true:false):false)){
} else {
untangled.client.logging.warn.call(null,"merge-state!: component must implement Ident");
}

var ident = untangled.client.core.get_class_ident.call(null,component,object_data);
var reconciler = ((cljs.core._EQ_.call(null,untangled.client.core.Application,cljs.core.type.call(null,app_or_reconciler)))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
var state = om.next.app_state.call(null,reconciler);
var data_path_keys = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),named_parameters))))));
var map__37760 = untangled.client.core.preprocess_merge.call(null,state,component,object_data);
var map__37760__$1 = ((((!((map__37760 == null)))?((((map__37760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37760):map__37760);
var merge_data = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
om.next.merge_BANG_.call(null,reconciler,merge_data,merge_query);

cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677));

cljs.core.apply.call(null,untangled.client.core.integrate_ident_BANG_,state,ident,named_parameters);

om.next.protocols.queue_BANG_.call(null,reconciler,data_path_keys);

return cljs.core.deref.call(null,state);
});

untangled.client.core.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

untangled.client.core.merge_state_BANG_.cljs$lang$applyTo = (function (seq37755){
var G__37756 = cljs.core.first.call(null,seq37755);
var seq37755__$1 = cljs.core.next.call(null,seq37755);
var G__37757 = cljs.core.first.call(null,seq37755__$1);
var seq37755__$2 = cljs.core.next.call(null,seq37755__$1);
var G__37758 = cljs.core.first.call(null,seq37755__$2);
var seq37755__$3 = cljs.core.next.call(null,seq37755__$2);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37756,G__37757,G__37758,seq37755__$3);
});


//# sourceMappingURL=core.js.map?rel=1479747559601