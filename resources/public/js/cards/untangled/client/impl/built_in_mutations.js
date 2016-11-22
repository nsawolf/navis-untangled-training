// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__37447,_,p__37448){
var map__37449 = p__37447;
var map__37449__$1 = ((((!((map__37449 == null)))?((((map__37449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37449):map__37449);
var state = cljs.core.get.call(null,map__37449__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37450 = p__37448;
var map__37450__$1 = ((((!((map__37450 == null)))?((((map__37450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37450):map__37450);
var config = map__37450__$1;
var post_mutation = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
if(cljs.core.truth_((function (){var and__32831__auto__ = post_mutation;
if(cljs.core.truth_(and__32831__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__32831__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37449,map__37449__$1,state,map__37450,map__37450__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__37449,map__37449__$1,state,map__37450,map__37450__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__37454,_,p__37455){
var map__37456 = p__37454;
var map__37456__$1 = ((((!((map__37456 == null)))?((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37456):map__37456);
var state = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37457 = p__37455;
var map__37457__$1 = ((((!((map__37457 == null)))?((((map__37457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37457):map__37457);
var lang = cljs.core.get.call(null,map__37457__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37456,map__37456__$1,state,map__37457,map__37457__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__37456,map__37456__$1,state,map__37457,map__37457__$1,lang){
return (function (p1__37453_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__37453_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__37456,map__37456__$1,state,map__37457,map__37457__$1,lang))
);
});})(map__37456,map__37456__$1,state,map__37457,map__37457__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__37460){
var map__37461 = p__37460;
var map__37461__$1 = ((((!((map__37461 == null)))?((((map__37461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37461):map__37461);
var params = map__37461__$1;
var action = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37461,map__37461__$1,params,action,execute){
return (function (){
var G__37463 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__37463__$1 = (((G__37463 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__37463));
if((G__37463__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__37463__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__37461,map__37461__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__37464,_,params){
var map__37465 = p__37464;
var map__37465__$1 = ((((!((map__37465 == null)))?((((map__37465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37465):map__37465);
var state = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37465,map__37465__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__37465,map__37465__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__37465,map__37465__$1,state,ref))
);
});})(map__37465,map__37465__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__37467,_,p__37468){
var map__37469 = p__37467;
var map__37469__$1 = ((((!((map__37469 == null)))?((((map__37469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37469):map__37469);
var state = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__37470 = p__37468;
var map__37470__$1 = ((((!((map__37470 == null)))?((((map__37470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37470):map__37470);
var field = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37469,map__37469__$1,state,ref,map__37470,map__37470__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__37469,map__37469__$1,state,ref,map__37470,map__37470__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37473,k,_){
var map__37474 = p__37473;
var map__37474__$1 = ((((!((map__37474 == null)))?((((map__37474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37474):map__37474);
var target = cljs.core.get.call(null,map__37474__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1479747559195