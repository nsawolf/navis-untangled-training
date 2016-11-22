// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.set');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('om.next.impl.parser');
goog.require('om.next.protocols');
goog.require('untangled.dom');
goog.require('untangled.client.mutations');
goog.require('om.util');
goog.require('om.next');
goog.require('clojure.walk');








/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

/**
 * Test if the given item is a data state marker in the loading state
 */
untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

/**
 * Test if the given item is a data state marker in the failed state
 */
untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__36754 = cljs.core.seq.call(null,items_to_load);
var chunk__36755 = null;
var count__36756 = (0);
var i__36757 = (0);
while(true){
if((i__36757 < count__36756)){
var item = cljs.core._nth.call(null,chunk__36755,i__36757);
var i_36758 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_36759 = ((function (seq__36754,chunk__36755,count__36756,i__36757,i_36758,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_36758))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_36758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_36758], null));
} else {
return state;
}
});})(seq__36754,chunk__36755,count__36756,i__36757,i_36758,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__36754,chunk__36755,count__36756,i__36757,i_36758,place_marker_36759,item){
return (function (s){
return cljs.core.update.call(null,place_marker_36759.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_36758));
});})(seq__36754,chunk__36755,count__36756,i__36757,i_36758,place_marker_36759,item))
);

var G__36760 = seq__36754;
var G__36761 = chunk__36755;
var G__36762 = count__36756;
var G__36763 = (i__36757 + (1));
seq__36754 = G__36760;
chunk__36755 = G__36761;
count__36756 = G__36762;
i__36757 = G__36763;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36754);
if(temp__4657__auto__){
var seq__36754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36754__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36754__$1);
var G__36764 = cljs.core.chunk_rest.call(null,seq__36754__$1);
var G__36765 = c__33654__auto__;
var G__36766 = cljs.core.count.call(null,c__33654__auto__);
var G__36767 = (0);
seq__36754 = G__36764;
chunk__36755 = G__36765;
count__36756 = G__36766;
i__36757 = G__36767;
continue;
} else {
var item = cljs.core.first.call(null,seq__36754__$1);
var i_36768 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_36769 = ((function (seq__36754,chunk__36755,count__36756,i__36757,i_36768,item,seq__36754__$1,temp__4657__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_36768))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_36768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_36768], null));
} else {
return state;
}
});})(seq__36754,chunk__36755,count__36756,i__36757,i_36768,item,seq__36754__$1,temp__4657__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__36754,chunk__36755,count__36756,i__36757,i_36768,place_marker_36769,item,seq__36754__$1,temp__4657__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_36769.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_36768));
});})(seq__36754,chunk__36755,count__36756,i__36757,i_36768,place_marker_36769,item,seq__36754__$1,temp__4657__auto__))
);

var G__36770 = cljs.core.next.call(null,seq__36754__$1);
var G__36771 = null;
var G__36772 = (0);
var G__36773 = (0);
seq__36754 = G__36770;
chunk__36755 = G__36771;
count__36756 = G__36772;
i__36757 = G__36773;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var items_to_load = cljs.core.filter.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),queued_items);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292)),queued_items));

var iter__33623__auto__ = ((function (state,queued_items,items_to_load){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__36778(s__36779){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__36779__$1 = s__36779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36779__$1);
if(temp__4657__auto__){
var s__36779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36779__$2)){
var c__33621__auto__ = cljs.core.chunk_first.call(null,s__36779__$2);
var size__33622__auto__ = cljs.core.count.call(null,c__33621__auto__);
var b__36781 = cljs.core.chunk_buffer.call(null,size__33622__auto__);
if((function (){var i__36780 = (0);
while(true){
if((i__36780 < size__33622__auto__)){
var item = cljs.core._nth.call(null,c__33621__auto__,i__36780);
cljs.core.chunk_append.call(null,b__36781,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__36782 = (i__36780 + (1));
i__36780 = G__36782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36781),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__36778.call(null,cljs.core.chunk_rest.call(null,s__36779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36781),null);
}
} else {
var item = cljs.core.first.call(null,s__36779__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__36778.call(null,cljs.core.rest.call(null,s__36779__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,items_to_load))
,null,null));
});})(state,queued_items,items_to_load))
;
return iter__33623__auto__.call(null,items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args36783 = [];
var len__33918__auto___36786 = arguments.length;
var i__33919__auto___36787 = (0);
while(true){
if((i__33919__auto___36787 < len__33918__auto___36786)){
args36783.push((arguments[i__33919__auto___36787]));

var G__36788 = (i__33919__auto___36787 + (1));
i__33919__auto___36787 = G__36788;
continue;
} else {
}
break;
}

var G__36785 = args36783.length;
switch (G__36785) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36783.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__36790 = null;
var G__36790__0 = (function (){
return rf.call(null);
});
var G__36790__1 = (function (result){
return rf.call(null,result);
});
var G__36790__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__36790 = function(result,input){
switch(arguments.length){
case 0:
return G__36790__0.call(this);
case 1:
return G__36790__1.call(this,result);
case 2:
return G__36790__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36790.cljs$core$IFn$_invoke$arity$0 = G__36790__0;
G__36790.cljs$core$IFn$_invoke$arity$1 = G__36790__1;
G__36790.cljs$core$IFn$_invoke$arity$2 = G__36790__2;
return G__36790;
})()
;})(keys_seen))
});
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,keys_fn),coll);
});

untangled.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.join_key_or_nil = (function untangled$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var join_key_or_ident = om.util.join_key.call(null,expr);
if(om.util.ident_QMARK_.call(null,join_key_or_ident)){
return cljs.core.first.call(null,join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
untangled.client.impl.data_fetch.split_items_ready_to_load = (function untangled$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.set.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,(function (item){
return cljs.core.map.call(null,untangled.client.impl.data_fetch.join_key_or_nil,untangled.client.impl.data_fetch.data_query.call(null,item));
}),items_ready_to_load));
var items_to_defer = cljs.core.vec.call(null,cljs.core.remove.call(null,items_to_load_now,items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var items_ready_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var vec__36794 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__36794,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__36794,(1),null);
if(cljs.core.empty_QMARK_.call(null,items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load_now);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),items_to_defer);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args36797 = [];
var len__33918__auto___36800 = arguments.length;
var i__33919__auto___36801 = (0);
while(true){
if((i__33919__auto___36801 < len__33918__auto___36800)){
args36797.push((arguments[i__33919__auto___36801]));

var G__36802 = (i__33919__auto___36801 + (1));
i__33919__auto___36801 = G__36802;
continue;
} else {
}
break;
}

var G__36799 = args36797.length;
switch (G__36799) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36797.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("INVALID DATA STATE TYPE: "),cljs.core.str(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__36805,elision_set){
var map__36808 = p__36805;
var map__36808__$1 = ((((!((map__36808 == null)))?((((map__36808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36808):map__36808);
var ast = map__36808__$1;
var key = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__36808,map__36808__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__36808,map__36808__$1,ast,key,union_key,children){
return (function (p1__36804_SHARP_){
return untangled$client$impl$data_fetch$elide_ast_nodes.call(null,p1__36804_SHARP_,elision_set);
});})(union_elision_QMARK_,map__36808,map__36808__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__36808,map__36808__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str("Error: You attempted to add parameters for "),cljs.core.str(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str(" to top-level key(s) of "),cljs.core.str(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__36810_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__4655__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__4655__auto__)){
var new_params = temp__4655__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__36810_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__36811){
var map__36815 = p__36811;
var map__36815__$1 = ((((!((map__36815 == null)))?((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36815):map__36815);
var target = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__32843__auto__ = field;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You must supply a query or a field/ident pair"),cljs.core.str("\n"),cljs.core.str("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__32843__auto__ = cljs.core.not.call(null,field);
if(or__32843__auto__){
return or__32843__auto__;
} else {
var and__32831__auto__ = field;
if(cljs.core.truth_(and__32831__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__32831__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Field requires ident"),cljs.core.str("\n"),cljs.core.str("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__36817 = old_ast;
var G__36817__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__36817,without):G__36817);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__36817__$1,params);
} else {
return G__36817__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Component fetch query does not match supplied field."),cljs.core.str("\n"),cljs.core.str("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,marker,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,post_mutation_params,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__36818){
var map__36821 = p__36818;
var map__36821__$1 = ((((!((map__36821 == null)))?((((map__36821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36821):map__36821);
var config = map__36821__$1;
var state = cljs.core.get.call(null,map__36821__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),untangled.client.impl.data_fetch.ready_state.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config)));
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_target = (function untangled$client$impl$data_fetch$data_target(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)], true, false)], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
untangled.client.impl.data_fetch.data_marker_QMARK_ = (function untangled$client$impl$data_fetch$data_marker_QMARK_(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
var target = untangled.client.impl.data_fetch.data_target.call(null,state);
if(cljs.core.truth_((function (){var and__32831__auto__ = cljs.core.vector_QMARK_.call(null,target);
if(and__32831__auto__){
return cljs.core.not_empty.call(null,target);
} else {
return and__32831__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state))) && ((untangled.client.impl.data_fetch.data_field.call(null,state) instanceof cljs.core.Keyword))){
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);

}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args36823 = [];
var len__33918__auto___36832 = arguments.length;
var i__33919__auto___36833 = (0);
while(true){
if((i__33919__auto___36833 < len__33918__auto___36832)){
args36823.push((arguments[i__33919__auto___36833]));

var G__36834 = (i__33919__auto___36833 + (1));
i__33919__auto___36833 = G__36834;
continue;
} else {
}
break;
}

var G__36825 = args36823.length;
switch (G__36825) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36823.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args36826 = [];
var len__33918__auto___36836 = arguments.length;
var i__33919__auto___36837 = (0);
while(true){
if((i__33919__auto___36837 < len__33918__auto___36836)){
args36826.push((arguments[i__33919__auto___36837]));

var G__36838 = (i__33919__auto___36837 + (1));
i__33919__auto___36837 = G__36838;
continue;
} else {
}
break;
}

var G__36828 = args36826.length;
switch (G__36828) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36826.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args36829 = [];
var len__33918__auto___36840 = arguments.length;
var i__33919__auto___36841 = (0);
while(true){
if((i__33919__auto___36841 < len__33918__auto___36840)){
args36829.push((arguments[i__33919__auto___36841]));

var G__36842 = (i__33919__auto___36841 + (1));
i__33919__auto___36841 = G__36842;
continue;
} else {
}
break;
}

var G__36831 = args36829.length;
switch (G__36831) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36829.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
untangled.client.impl.data_fetch.relocate_targeted_results = (function untangled$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
var seq__36848 = cljs.core.seq.call(null,items);
var chunk__36849 = null;
var count__36850 = (0);
var i__36851 = (0);
while(true){
if((i__36851 < count__36850)){
var item = cljs.core._nth.call(null,chunk__36849,i__36851);
var default_target_36852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_36853 = cljs.core.conj.call(null,(function (){var or__32843__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_36854 = (function (){var or__32843__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__36855 = (function (){var and__32831__auto__ = cljs.core.not_empty.call(null,explicit_target_36854);
if(cljs.core.truth_(and__32831__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_36854,field_target_36853)) && (cljs.core.not_EQ_.call(null,explicit_target_36854,default_target_36852));
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__36855)){
var value_36856 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_36852);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__36848,chunk__36849,count__36850,i__36851,value_36856,default_target_36852,field_target_36853,explicit_target_36854,relocate_QMARK__36855,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_36854,value_36856);
});})(seq__36848,chunk__36849,count__36850,i__36851,value_36856,default_target_36852,field_target_36853,explicit_target_36854,relocate_QMARK__36855,item))
);
} else {
}

var G__36857 = seq__36848;
var G__36858 = chunk__36849;
var G__36859 = count__36850;
var G__36860 = (i__36851 + (1));
seq__36848 = G__36857;
chunk__36849 = G__36858;
count__36850 = G__36859;
i__36851 = G__36860;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36848);
if(temp__4657__auto__){
var seq__36848__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36848__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36848__$1);
var G__36861 = cljs.core.chunk_rest.call(null,seq__36848__$1);
var G__36862 = c__33654__auto__;
var G__36863 = cljs.core.count.call(null,c__33654__auto__);
var G__36864 = (0);
seq__36848 = G__36861;
chunk__36849 = G__36862;
count__36850 = G__36863;
i__36851 = G__36864;
continue;
} else {
var item = cljs.core.first.call(null,seq__36848__$1);
var default_target_36865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_36866 = cljs.core.conj.call(null,(function (){var or__32843__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_36867 = (function (){var or__32843__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__36868 = (function (){var and__32831__auto__ = cljs.core.not_empty.call(null,explicit_target_36867);
if(cljs.core.truth_(and__32831__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_36867,field_target_36866)) && (cljs.core.not_EQ_.call(null,explicit_target_36867,default_target_36865));
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__36868)){
var value_36869 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_36865);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__36848,chunk__36849,count__36850,i__36851,value_36869,default_target_36865,field_target_36866,explicit_target_36867,relocate_QMARK__36868,item,seq__36848__$1,temp__4657__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_36867,value_36869);
});})(seq__36848,chunk__36849,count__36850,i__36851,value_36869,default_target_36865,field_target_36866,explicit_target_36867,relocate_QMARK__36868,item,seq__36848__$1,temp__4657__auto__))
);
} else {
}

var G__36870 = cljs.core.next.call(null,seq__36848__$1);
var G__36871 = null;
var G__36872 = (0);
var G__36873 = (0);
seq__36848 = G__36870;
chunk__36849 = G__36871;
count__36850 = G__36872;
i__36851 = G__36873;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote load has completed. This includes:
 * 
 *   - Marking the items that were queries for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Forcing a global re-render if post-mutations ran (may change in future versions)
 *   
 */
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__36886 = cljs.core.seq.call(null,loading_items);
var chunk__36887 = null;
var count__36888 = (0);
var i__36889 = (0);
while(true){
if((i__36889 < count__36888)){
var item = cljs.core._nth.call(null,chunk__36887,i__36889);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__36886,chunk__36887,count__36888,i__36889,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__36890 = s;
var G__36890__$1 = cljs.core.update.call(null,G__36890,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__36890__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__36890__$1;
}
});})(seq__36886,chunk__36887,count__36888,i__36889,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__36898 = seq__36886;
var G__36899 = chunk__36887;
var G__36900 = count__36888;
var G__36901 = (i__36889 + (1));
seq__36886 = G__36898;
chunk__36887 = G__36899;
count__36888 = G__36900;
i__36889 = G__36901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36886);
if(temp__4657__auto__){
var seq__36886__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36886__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36886__$1);
var G__36902 = cljs.core.chunk_rest.call(null,seq__36886__$1);
var G__36903 = c__33654__auto__;
var G__36904 = cljs.core.count.call(null,c__33654__auto__);
var G__36905 = (0);
seq__36886 = G__36902;
chunk__36887 = G__36903;
count__36888 = G__36904;
i__36889 = G__36905;
continue;
} else {
var item = cljs.core.first.call(null,seq__36886__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__36886,chunk__36887,count__36888,i__36889,item,seq__36886__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__36891 = s;
var G__36891__$1 = cljs.core.update.call(null,G__36891,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__36891__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__36891__$1;
}
});})(seq__36886,chunk__36887,count__36888,i__36889,item,seq__36886__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__36906 = cljs.core.next.call(null,seq__36886__$1);
var G__36907 = null;
var G__36908 = (0);
var G__36909 = (0);
seq__36886 = G__36906;
chunk__36887 = G__36907;
count__36888 = G__36908;
i__36889 = G__36909;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__36892 = cljs.core.seq.call(null,loading_items);
var chunk__36893 = null;
var count__36894 = (0);
var i__36895 = (0);
while(true){
if((i__36895 < count__36894)){
var item = cljs.core._nth.call(null,chunk__36893,i__36895);
var temp__4657__auto___36910 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___36910)){
var mutation_symbol_36911 = temp__4657__auto___36910;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_36912 = (function (){var or__32843__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__36896_36913 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_36911,params_36912);
var G__36896_36914__$1 = (((G__36896_36913 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__36896_36913));
if((G__36896_36914__$1 == null)){
} else {
cljs.core.apply.call(null,G__36896_36914__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__36915 = seq__36892;
var G__36916 = chunk__36893;
var G__36917 = count__36894;
var G__36918 = (i__36895 + (1));
seq__36892 = G__36915;
chunk__36893 = G__36916;
count__36894 = G__36917;
i__36895 = G__36918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36892);
if(temp__4657__auto__){
var seq__36892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36892__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36892__$1);
var G__36919 = cljs.core.chunk_rest.call(null,seq__36892__$1);
var G__36920 = c__33654__auto__;
var G__36921 = cljs.core.count.call(null,c__33654__auto__);
var G__36922 = (0);
seq__36892 = G__36919;
chunk__36893 = G__36920;
count__36894 = G__36921;
i__36895 = G__36922;
continue;
} else {
var item = cljs.core.first.call(null,seq__36892__$1);
var temp__4657__auto___36923__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___36923__$1)){
var mutation_symbol_36924 = temp__4657__auto___36923__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_36925 = (function (){var or__32843__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__36897_36926 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_36924,params_36925);
var G__36897_36927__$1 = (((G__36897_36926 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__36897_36926));
if((G__36897_36927__$1 == null)){
} else {
cljs.core.apply.call(null,G__36897_36927__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__36928 = cljs.core.next.call(null,seq__36892__$1);
var G__36929 = null;
var G__36930 = (0);
var G__36931 = (0);
seq__36892 = G__36928;
chunk__36893 = G__36929;
count__36894 = G__36930;
i__36895 = G__36931;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

untangled.client.impl.data_fetch.relocate_targeted_results.call(null,app_state,loading_items);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.truth_((function (){var or__32843__auto__ = cljs.core.deref.call(null,ran_mutations);
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319));
}
})())){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:untangled/server-error)
 *   - Refreshes UI
 *   
 */
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__36944 = cljs.core.seq.call(null,loading_items);
var chunk__36945 = null;
var count__36946 = (0);
var i__36947 = (0);
while(true){
if((i__36947 < count__36946)){
var item = cljs.core._nth.call(null,chunk__36945,i__36947);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__36944,chunk__36945,count__36946,i__36947,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__36948 = s;
var G__36948__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__36948,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__36948);
return cljs.core.update.call(null,G__36948__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__36944,chunk__36945,count__36946,i__36947,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__36956 = seq__36944;
var G__36957 = chunk__36945;
var G__36958 = count__36946;
var G__36959 = (i__36947 + (1));
seq__36944 = G__36956;
chunk__36945 = G__36957;
count__36946 = G__36958;
i__36947 = G__36959;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36944);
if(temp__4657__auto__){
var seq__36944__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36944__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36944__$1);
var G__36960 = cljs.core.chunk_rest.call(null,seq__36944__$1);
var G__36961 = c__33654__auto__;
var G__36962 = cljs.core.count.call(null,c__33654__auto__);
var G__36963 = (0);
seq__36944 = G__36960;
chunk__36945 = G__36961;
count__36946 = G__36962;
i__36947 = G__36963;
continue;
} else {
var item = cljs.core.first.call(null,seq__36944__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__36944,chunk__36945,count__36946,i__36947,item,seq__36944__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__36949 = s;
var G__36949__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__36949,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__36949);
return cljs.core.update.call(null,G__36949__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__36944,chunk__36945,count__36946,i__36947,item,seq__36944__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__36964 = cljs.core.next.call(null,seq__36944__$1);
var G__36965 = null;
var G__36966 = (0);
var G__36967 = (0);
seq__36944 = G__36964;
chunk__36945 = G__36965;
count__36946 = G__36966;
i__36947 = G__36967;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__36950 = cljs.core.seq.call(null,loading_items);
var chunk__36951 = null;
var count__36952 = (0);
var i__36953 = (0);
while(true){
if((i__36953 < count__36952)){
var item = cljs.core._nth.call(null,chunk__36951,i__36953);
var temp__4657__auto___36968 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___36968)){
var fallback_symbol_36969 = temp__4657__auto___36968;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__36954_36970 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_36969,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__36954_36971__$1 = (((G__36954_36970 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__36954_36970));
if((G__36954_36971__$1 == null)){
} else {
cljs.core.apply.call(null,G__36954_36971__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__36972 = seq__36950;
var G__36973 = chunk__36951;
var G__36974 = count__36952;
var G__36975 = (i__36953 + (1));
seq__36950 = G__36972;
chunk__36951 = G__36973;
count__36952 = G__36974;
i__36953 = G__36975;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36950);
if(temp__4657__auto__){
var seq__36950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36950__$1)){
var c__33654__auto__ = cljs.core.chunk_first.call(null,seq__36950__$1);
var G__36976 = cljs.core.chunk_rest.call(null,seq__36950__$1);
var G__36977 = c__33654__auto__;
var G__36978 = cljs.core.count.call(null,c__33654__auto__);
var G__36979 = (0);
seq__36950 = G__36976;
chunk__36951 = G__36977;
count__36952 = G__36978;
i__36953 = G__36979;
continue;
} else {
var item = cljs.core.first.call(null,seq__36950__$1);
var temp__4657__auto___36980__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___36980__$1)){
var fallback_symbol_36981 = temp__4657__auto___36980__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__36955_36982 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_36981,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__36955_36983__$1 = (((G__36955_36982 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__36955_36982));
if((G__36955_36983__$1 == null)){
} else {
cljs.core.apply.call(null,G__36955_36983__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__36984 = cljs.core.next.call(null,seq__36950__$1);
var G__36985 = null;
var G__36986 = (0);
var G__36987 = (0);
seq__36950 = G__36984;
chunk__36951 = G__36985;
count__36952 = G__36986;
i__36953 = G__36987;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1479747558542