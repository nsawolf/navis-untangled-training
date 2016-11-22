// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
goog.require('om.next');
goog.require('clojure.string');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
return cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null));
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args36720 = [];
var len__33918__auto___36723 = arguments.length;
var i__33919__auto___36724 = (0);
while(true){
if((i__33919__auto___36724 < len__33918__auto___36723)){
args36720.push((arguments[i__33919__auto___36724]));

var G__36725 = (i__33919__auto___36724 + (1));
i__33919__auto___36724 = G__36725;
continue;
} else {
}
break;
}

var G__36722 = args36720.length;
switch (G__36722) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36720.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;

/**
 * Append a CSS class. Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__36733__delegate = function (state_key,default_class_string,p__36730){
var map__36731 = p__36730;
var map__36731__$1 = ((((!((map__36731 == null)))?((((map__36731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36731):map__36731);
var when_true = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str(default_class_string),cljs.core.str(" "),cljs.core.str(append_string)].join('');
};
var G__36733 = function (state_key,default_class_string,var_args){
var p__36730 = null;
if (arguments.length > 2) {
var G__36734__i = 0, G__36734__a = new Array(arguments.length -  2);
while (G__36734__i < G__36734__a.length) {G__36734__a[G__36734__i] = arguments[G__36734__i + 2]; ++G__36734__i;}
  p__36730 = new cljs.core.IndexedSeq(G__36734__a,0);
} 
return G__36733__delegate.call(this,state_key,default_class_string,p__36730);};
G__36733.cljs$lang$maxFixedArity = 2;
G__36733.cljs$lang$applyTo = (function (arglist__36735){
var state_key = cljs.core.first(arglist__36735);
arglist__36735 = cljs.core.next(arglist__36735);
var default_class_string = cljs.core.first(arglist__36735);
var p__36730 = cljs.core.rest(arglist__36735);
return G__36733__delegate(state_key,default_class_string,p__36730);
});
G__36733.cljs$core$IFn$_invoke$arity$variadic = G__36733__delegate;
return G__36733;
})()
;
});
/**
 * Adds the 'visible' CSS class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__33925__auto__ = [];
var len__33918__auto___36743 = arguments.length;
var i__33919__auto___36744 = (0);
while(true){
if((i__33919__auto___36744 < len__33918__auto___36743)){
args__33925__auto__.push((arguments[i__33919__auto___36744]));

var G__36745 = (i__33919__auto___36744 + (1));
i__33919__auto___36744 = G__36745;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((3) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33926__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__36740){
var map__36741 = p__36740;
var map__36741__$1 = ((((!((map__36741 == null)))?((((map__36741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36741):map__36741);
var when_true = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq36736){
var G__36737 = cljs.core.first.call(null,seq36736);
var seq36736__$1 = cljs.core.next.call(null,seq36736);
var G__36738 = cljs.core.first.call(null,seq36736__$1);
var seq36736__$2 = cljs.core.next.call(null,seq36736__$1);
var G__36739 = cljs.core.first.call(null,seq36736__$2);
var seq36736__$3 = cljs.core.next.call(null,seq36736__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__36737,G__36738,G__36739,seq36736__$3);
});

/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e36747){if((e36747 instanceof Object)){
var e = e36747;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e36747;

}
}});

//# sourceMappingURL=dom.js.map?rel=1479747558215