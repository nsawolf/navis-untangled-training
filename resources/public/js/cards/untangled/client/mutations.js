// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__33768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__33769__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__33770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__33771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__33772__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__33772__auto__,method_table__33768__auto__,prefer_table__33769__auto__,method_cache__33770__auto__,cached_hierarchy__33771__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__33768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__33769__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__33770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__33771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__33772__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__33772__auto__,method_table__33768__auto__,prefer_table__33769__auto__,method_cache__33770__auto__,cached_hierarchy__33771__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__33677__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__33677__auto__ = cljs.core.PersistentArrayMap.fromArray([field,value], true, false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__33925__auto__ = [];
var len__33918__auto___35544 = arguments.length;
var i__33919__auto___35545 = (0);
while(true){
if((i__33919__auto___35545 < len__33918__auto___35544)){
args__33925__auto__.push((arguments[i__33919__auto___35545]));

var G__35546 = (i__33919__auto___35545 + (1));
i__33919__auto___35545 = G__35546;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((2) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33926__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__35541){
var map__35542 = p__35541;
var map__35542__$1 = ((((!((map__35542 == null)))?((((map__35542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35542):map__35542);
var event = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__32831__auto__ = (function (){var or__32843__auto__ = event;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not.call(null,(function (){var and__32831__auto____$1 = event;
if(cljs.core.truth_(and__32831__auto____$1)){
return value;
} else {
return and__32831__auto____$1;
}
})());
} else {
return and__32831__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?event.target.value:value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq35538){
var G__35539 = cljs.core.first.call(null,seq35538);
var seq35538__$1 = cljs.core.next.call(null,seq35538);
var G__35540 = cljs.core.first.call(null,seq35538__$1);
var seq35538__$2 = cljs.core.next.call(null,seq35538__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35539,G__35540,seq35538__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__33925__auto__ = [];
var len__33918__auto___35553 = arguments.length;
var i__33919__auto___35554 = (0);
while(true){
if((i__33919__auto___35554 < len__33918__auto___35553)){
args__33925__auto__.push((arguments[i__33919__auto___35554]));

var G__35555 = (i__33919__auto___35554 + (1));
i__33919__auto___35554 = G__35555;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((2) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33926__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__35550){
var map__35551 = p__35550;
var map__35551__$1 = ((((!((map__35551 == null)))?((((map__35551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35551):map__35551);
var event = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__32831__auto__ = (function (){var or__32843__auto__ = event;
if(cljs.core.truth_(or__32843__auto__)){
return or__32843__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not.call(null,(function (){var and__32831__auto____$1 = event;
if(cljs.core.truth_(and__32831__auto____$1)){
return value;
} else {
return and__32831__auto____$1;
}
})());
} else {
return and__32831__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?event.target.value:value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq35547){
var G__35548 = cljs.core.first.call(null,seq35547);
var seq35547__$1 = cljs.core.next.call(null,seq35547);
var G__35549 = cljs.core.first.call(null,seq35547__$1);
var seq35547__$2 = cljs.core.next.call(null,seq35547__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35548,G__35549,seq35547__$2);
});


//# sourceMappingURL=mutations.js.map?rel=1479747557240