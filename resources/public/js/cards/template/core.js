// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('template.state.mutations');
goog.require('untangled.client.logging');
template.core.handle_returns = (function template$core$handle_returns(env,k,p){
return untangled.client.logging.info.call(null,"Got return value for ",k," -> ",p);
});
if(typeof template.core.app !== 'undefined'){
} else {
template.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"return-handler","return-handler",1707956849),template.core.handle_returns,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__41459){
var map__41460 = p__41459;
var map__41460__$1 = ((((!((map__41460 == null)))?((((map__41460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41460):map__41460);
var reconciler = cljs.core.get.call(null,map__41460__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return untangled.client.data_fetch.load_data.call(null,reconciler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null));
})));
}

//# sourceMappingURL=core.js.map?rel=1479747561390