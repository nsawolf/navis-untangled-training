// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.todo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("todo","add-item","todo/add-item",-1941400700,null),(function (p__45720,k,p__45721){
var map__45722 = p__45720;
var map__45722__$1 = ((((!((map__45722 == null)))?((((map__45722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45722):map__45722);
var state = cljs.core.get.call(null,map__45722__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__45723 = p__45721;
var map__45723__$1 = ((((!((map__45723 == null)))?((((map__45723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45723):map__45723);
var new_item = map__45723__$1;
var list_id = cljs.core.get.call(null,map__45723__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
var id = cljs.core.get.call(null,map__45723__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45722,map__45722__$1,state,map__45723,map__45723__$1,new_item,list_id,id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),id], null),new_item);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),list_id,new cljs.core.Keyword("list","items","list/items",1035416224)], null),((function (map__45722,map__45722__$1,state,map__45723,map__45723__$1,new_item,list_id,id){
return (function (old_list){
return cljs.core.conj.call(null,old_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),id], null));
});})(map__45722,map__45722__$1,state,map__45723,map__45723__$1,new_item,list_id,id))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),list_id,new cljs.core.Keyword("ui","new-thing","ui/new-thing",2075026457)], null),"");
});})(map__45722,map__45722__$1,state,map__45723,map__45723__$1,new_item,list_id,id))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("todo","delete-item","todo/delete-item",-156224459,null),(function (p__45727,k,p__45728){
var map__45729 = p__45727;
var map__45729__$1 = ((((!((map__45729 == null)))?((((map__45729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45729):map__45729);
var state = cljs.core.get.call(null,map__45729__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__45730 = p__45728;
var map__45730__$1 = ((((!((map__45730 == null)))?((((map__45730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45730):map__45730);
var id = cljs.core.get.call(null,map__45730__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var list_id = cljs.core.get.call(null,map__45730__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),cljs.core.dissoc,id);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),list_id,new cljs.core.Keyword("list","items","list/items",1035416224)], null),((function (map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id){
return (function (old_list){
return cljs.core.filterv.call(null,((function (map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id){
return (function (p1__45726_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.second.call(null,p1__45726_SHARP_),id);
});})(map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id))
,old_list);
});})(map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id))
,id);
});})(map__45729,map__45729__$1,state,map__45730,map__45730__$1,id,list_id))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("todo","update-item","todo/update-item",1553650331,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var state_atom = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var item_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),item_id,new cljs.core.Keyword("item","label","item/label",1746690887)], null);
var new_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,path,new_value);
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("todo","finish-edit","todo/finish-edit",-734275378,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var state_atom = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var item_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),item_id,new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500)], null);
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,path,false);
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("todo","set-done","todo/set-done",1787035030,null),(function (p__45733,k,p__45734){
var map__45735 = p__45733;
var map__45735__$1 = ((((!((map__45735 == null)))?((((map__45735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45735):map__45735);
var state = cljs.core.get.call(null,map__45735__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__45736 = p__45734;
var map__45736__$1 = ((((!((map__45736 == null)))?((((map__45736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45736):map__45736);
var id = cljs.core.get.call(null,map__45736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__45736__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45735,map__45735__$1,state,map__45736,map__45736__$1,id,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),id,new cljs.core.Keyword("item","done?","item/done?",-1854426489)], null),value);
});})(map__45735,map__45735__$1,state,map__45736,map__45736__$1,id,value))
], null);
}));
/**
 * @constructor
 */
template.ui.todo.TodoItem = (function template$ui$todo$TodoItem(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.todo.TodoItem.prototype = goog.object.clone(React.Component.prototype);

var x45743_45761 = template.ui.todo.TodoItem.prototype;
x45743_45761.componentWillUpdate = ((function (x45743_45761){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___45762 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___45763 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___45762,next_ident__34655__auto___45763)){
var idxr__34656__auto___45764 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___45764 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___45764),((function (idxr__34656__auto___45764,ident__34654__auto___45762,next_ident__34655__auto___45763,this__34650__auto__,x45743_45761){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___45762], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___45763], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___45764,ident__34654__auto___45762,next_ident__34655__auto___45763,this__34650__auto__,x45743_45761))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x45743_45761))
;

x45743_45761.shouldComponentUpdate = ((function (x45743_45761){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__45745 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45745);
} else {
return G__45745;
}
})();
var or__32843__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__34650__auto__),next_props__34651__auto____$2);
if(or__32843__auto__){
return or__32843__auto__;
} else {
var or__32843__auto____$1 = (function (){var and__32831__auto__ = this__34650__auto__.state;
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__34650__auto__.state,"omcljs$state"),goog.object.get(next_state__34652__auto__,"omcljs$state"));
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(or__32843__auto____$1)){
return or__32843__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__34650__auto__.props.children,next_children__34653__auto__);
}
}
});})(x45743_45761))
;

x45743_45761.componentWillUnmount = ((function (x45743_45761){
return (function (){
var this__34650__auto__ = this;
var r__34661__auto__ = om.next.get_reconciler.call(null,this__34650__auto__);
var cfg__34662__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__34661__auto__);
var st__34663__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
var indexer__34660__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
if(cljs.core.truth_((function (){var and__32831__auto__ = !((st__34663__auto__ == null));
if(and__32831__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__34663__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__34650__auto__], null));
} else {
return and__32831__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__34663__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__34650__auto__);
} else {
}

if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45743_45761))
;

x45743_45761.componentDidUpdate = ((function (x45743_45761){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x45743_45761))
;

x45743_45761.isMounted = ((function (x45743_45761){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45743_45761))
;

x45743_45761.componentWillMount = ((function (x45743_45761){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45743_45761))
;

x45743_45761.render = ((function (x45743_45761){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_45746 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45747 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45748 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45749 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45750 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__45751 = om.next.props.call(null,this$);
var map__45751__$1 = ((((!((map__45751 == null)))?((((map__45751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45751):map__45751);
var id = cljs.core.get.call(null,map__45751__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var label = cljs.core.get.call(null,map__45751__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
var done_QMARK_ = cljs.core.get.call(null,map__45751__$1,new cljs.core.Keyword("item","done?","item/done?",-1854426489));
var editing_QMARK_ = cljs.core.get.call(null,map__45751__$1,new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500));
var onDelete = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return om.dom.li.call(null,null,(cljs.core.truth_(editing_QMARK_)?om.dom.input.call(null,({"type": "text", "onBlur": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","finish-edit","todo/finish-edit",-734275378,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
, "onKeyDown": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
if((cljs.core._EQ_.call(null,evt.keyCode,(13))) || (cljs.core._EQ_.call(null,evt.keyCode,(27)))){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","finish-edit","todo/finish-edit",-734275378,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
} else {
return null;
}
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
, "onChange": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("item","label","item/label",1746690887),new cljs.core.Keyword(null,"event","event",301435442),evt);
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
, "placeholder": "Do what?", "value": label})):om.dom.div.call(null,({"onDoubleClick": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
return untangled.client.mutations.toggle_BANG_.call(null,this$,new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500));
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
}),om.dom.input.call(null,({"type": "checkbox", "checked": done_QMARK_, "onChange": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","set-done","todo/set-done",1787035030,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__33677__auto__ = cljs.core.not.call(null,done_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
})),label,om.dom.button.call(null,({"onClick": ((function (map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761){
return (function (evt){
return onDelete.call(null,id);
});})(map__45751,map__45751__$1,id,label,done_QMARK_,editing_QMARK_,onDelete,_STAR_reconciler_STAR_45746,_STAR_depth_STAR_45747,_STAR_shared_STAR_45748,_STAR_instrument_STAR_45749,_STAR_parent_STAR_45750,this$,this__34649__auto__,x45743_45761))
}),"X"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45750;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45749;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45748;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45747;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45746;
}});})(x45743_45761))
;


template.ui.todo.TodoItem.prototype.constructor = template.ui.todo.TodoItem;

template.ui.todo.TodoItem.prototype.constructor.displayName = "template.ui.todo/TodoItem";

template.ui.todo.TodoItem.prototype.om$isComponent = true;

var x45753_45765 = template.ui.todo.TodoItem;
/** @nocollapse */
x45753_45765.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x45753_45765.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45753_45765){
return (function (this$,p__45754){
var map__45755 = p__45754;
var map__45755__$1 = ((((!((map__45755 == null)))?((((map__45755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45755):map__45755);
var id = cljs.core.get.call(null,map__45755__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__45755__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("item","label","item/label",1746690887),label,new cljs.core.Keyword("item","done?","item/done?",-1854426489),false,new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500),false], null);
});})(x45753_45765))
;

/** @nocollapse */
x45753_45765.om$next$IQuery$ = true;

/** @nocollapse */
x45753_45765.om$next$IQuery$query$arity$1 = ((function (x45753_45765){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","label","item/label",1746690887),new cljs.core.Keyword("item","done?","item/done?",-1854426489),new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500)], null);
});})(x45753_45765))
;

/** @nocollapse */
x45753_45765.om$next$Ident$ = true;

/** @nocollapse */
x45753_45765.om$next$Ident$ident$arity$2 = ((function (x45753_45765){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45753_45765))
;


var x45757_45766 = template.ui.todo.TodoItem.prototype;

x45757_45766.untangled$client$core$InitialAppState$ = true;


x45757_45766.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45757_45766){
return (function (this$,p__45758){
var map__45759 = p__45758;
var map__45759__$1 = ((((!((map__45759 == null)))?((((map__45759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45759):map__45759);
var id = cljs.core.get.call(null,map__45759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__45759__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("item","label","item/label",1746690887),label,new cljs.core.Keyword("item","done?","item/done?",-1854426489),false,new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500),false], null);
});})(x45757_45766))
;


x45757_45766.om$next$IQuery$ = true;


x45757_45766.om$next$IQuery$query$arity$1 = ((function (x45757_45766){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","label","item/label",1746690887),new cljs.core.Keyword("item","done?","item/done?",-1854426489),new cljs.core.Keyword("ui","editing?","ui/editing?",1646444500)], null);
});})(x45757_45766))
;


x45757_45766.om$next$Ident$ = true;


x45757_45766.om$next$Ident$ident$arity$2 = ((function (x45757_45766){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45757_45766))
;


template.ui.todo.TodoItem.cljs$lang$type = true;

template.ui.todo.TodoItem.cljs$lang$ctorStr = "template.ui.todo/TodoItem";

template.ui.todo.TodoItem.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.todo/TodoItem");
});
template.ui.todo.ui_todo_item = om.next.factory.call(null,template.ui.todo.TodoItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * @constructor
 */
template.ui.todo.TodoList = (function template$ui$todo$TodoList(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.todo.TodoList.prototype = goog.object.clone(React.Component.prototype);

var x45772_45790 = template.ui.todo.TodoList.prototype;
x45772_45790.componentWillUpdate = ((function (x45772_45790){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___45791 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___45792 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___45791,next_ident__34655__auto___45792)){
var idxr__34656__auto___45793 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___45793 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___45793),((function (idxr__34656__auto___45793,ident__34654__auto___45791,next_ident__34655__auto___45792,this__34650__auto__,x45772_45790){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___45791], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___45792], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___45793,ident__34654__auto___45791,next_ident__34655__auto___45792,this__34650__auto__,x45772_45790))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x45772_45790))
;

x45772_45790.shouldComponentUpdate = ((function (x45772_45790){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__45774 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45774);
} else {
return G__45774;
}
})();
var or__32843__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__34650__auto__),next_props__34651__auto____$2);
if(or__32843__auto__){
return or__32843__auto__;
} else {
var or__32843__auto____$1 = (function (){var and__32831__auto__ = this__34650__auto__.state;
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__34650__auto__.state,"omcljs$state"),goog.object.get(next_state__34652__auto__,"omcljs$state"));
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(or__32843__auto____$1)){
return or__32843__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__34650__auto__.props.children,next_children__34653__auto__);
}
}
});})(x45772_45790))
;

x45772_45790.componentWillUnmount = ((function (x45772_45790){
return (function (){
var this__34650__auto__ = this;
var r__34661__auto__ = om.next.get_reconciler.call(null,this__34650__auto__);
var cfg__34662__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__34661__auto__);
var st__34663__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
var indexer__34660__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
if(cljs.core.truth_((function (){var and__32831__auto__ = !((st__34663__auto__ == null));
if(and__32831__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__34663__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__34650__auto__], null));
} else {
return and__32831__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__34663__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__34650__auto__);
} else {
}

if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45772_45790))
;

x45772_45790.componentDidUpdate = ((function (x45772_45790){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x45772_45790))
;

x45772_45790.isMounted = ((function (x45772_45790){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45772_45790))
;

x45772_45790.componentWillMount = ((function (x45772_45790){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45772_45790))
;

x45772_45790.render = ((function (x45772_45790){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_45775 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45776 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45777 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45778 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45779 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__45780 = om.next.props.call(null,this$);
var map__45780__$1 = ((((!((map__45780 == null)))?((((map__45780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45780):map__45780);
var id = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
var new_thing = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword("ui","new-thing","ui/new-thing",2075026457));
var items = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword("list","items","list/items",1035416224));
var render_item = ((function (map__45780,map__45780__$1,id,name,new_thing,items,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790){
return (function (item){
var callbacks = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),((function (map__45780,map__45780__$1,id,name,new_thing,items,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790){
return (function (iid){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","delete-item","todo/delete-item",-156224459,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),(function (){var x__33677__auto__ = iid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"list-id","list-id",1757820635)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});})(map__45780,map__45780__$1,id,name,new_thing,items,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790))
], null);
return template.ui.todo.ui_todo_item.call(null,om.next.computed.call(null,item,callbacks));
});})(map__45780,map__45780__$1,id,name,new_thing,items,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790))
;
return om.dom.div.call(null,null,om.dom.h4.call(null,null,name),om.dom.div.call(null,null,om.dom.input.call(null,({"type": "text", "placeholder": "What else?", "value": new_thing, "onChange": ((function (map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790){
return (function (p1__45767_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","new-thing","ui/new-thing",2075026457),new cljs.core.Keyword(null,"event","event",301435442),p1__45767_SHARP_);
});})(map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790))
, "onKeyDown": ((function (map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790){
return (function (evt){
if(cljs.core._EQ_.call(null,evt.keyCode,(13))){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","add-item","todo/add-item",-1941400700,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),(function (){var x__33677__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"list-id","list-id",1757820635)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("item","label","item/label",1746690887)),(function (){var x__33677__auto__ = new_thing;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("item","done?","item/done?",-1854426489)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
} else {
return null;
}
});})(map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790))
})),om.dom.button.call(null,({"onClick": ((function (map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todo","add-item","todo/add-item",-1941400700,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),(function (){var x__33677__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"list-id","list-id",1757820635)),(function (){var x__33677__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("item","label","item/label",1746690887)),(function (){var x__33677__auto__ = new_thing;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("item","done?","item/done?",-1854426489)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});})(map__45780,map__45780__$1,id,name,new_thing,items,render_item,_STAR_reconciler_STAR_45775,_STAR_depth_STAR_45776,_STAR_shared_STAR_45777,_STAR_instrument_STAR_45778,_STAR_parent_STAR_45779,this$,this__34649__auto__,x45772_45790))
}),"+")),om.dom.ul.call(null,null,cljs.core.map.call(null,render_item,items)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45779;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45778;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45777;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45776;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45775;
}});})(x45772_45790))
;


template.ui.todo.TodoList.prototype.constructor = template.ui.todo.TodoList;

template.ui.todo.TodoList.prototype.constructor.displayName = "template.ui.todo/TodoList";

template.ui.todo.TodoList.prototype.om$isComponent = true;

var x45782_45794 = template.ui.todo.TodoList;
/** @nocollapse */
x45782_45794.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x45782_45794.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45782_45794){
return (function (this$,p__45783){
var map__45784 = p__45783;
var map__45784__$1 = ((((!((map__45784 == null)))?((((map__45784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45784):map__45784);
var id = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("list","name","list/name",1849094347),name,new cljs.core.Keyword("list","items","list/items",1035416224),cljs.core.PersistentVector.EMPTY], null);
});})(x45782_45794))
;

/** @nocollapse */
x45782_45794.om$next$IQuery$ = true;

/** @nocollapse */
x45782_45794.om$next$IQuery$query$arity$1 = ((function (x45782_45794){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("list","name","list/name",1849094347),new cljs.core.Keyword("ui","new-thing","ui/new-thing",2075026457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","items","list/items",1035416224),om.next.get_query.call(null,template.ui.todo.TodoItem)], null)], null);
});})(x45782_45794))
;

/** @nocollapse */
x45782_45794.om$next$Ident$ = true;

/** @nocollapse */
x45782_45794.om$next$Ident$ident$arity$2 = ((function (x45782_45794){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45782_45794))
;


var x45786_45795 = template.ui.todo.TodoList.prototype;

x45786_45795.untangled$client$core$InitialAppState$ = true;


x45786_45795.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45786_45795){
return (function (this$,p__45787){
var map__45788 = p__45787;
var map__45788__$1 = ((((!((map__45788 == null)))?((((map__45788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45788):map__45788);
var id = cljs.core.get.call(null,map__45788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__45788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("list","name","list/name",1849094347),name,new cljs.core.Keyword("list","items","list/items",1035416224),cljs.core.PersistentVector.EMPTY], null);
});})(x45786_45795))
;


x45786_45795.om$next$IQuery$ = true;


x45786_45795.om$next$IQuery$query$arity$1 = ((function (x45786_45795){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("list","name","list/name",1849094347),new cljs.core.Keyword("ui","new-thing","ui/new-thing",2075026457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","items","list/items",1035416224),om.next.get_query.call(null,template.ui.todo.TodoItem)], null)], null);
});})(x45786_45795))
;


x45786_45795.om$next$Ident$ = true;


x45786_45795.om$next$Ident$ident$arity$2 = ((function (x45786_45795){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45786_45795))
;


template.ui.todo.TodoList.cljs$lang$type = true;

template.ui.todo.TodoList.cljs$lang$ctorStr = "template.ui.todo/TodoList";

template.ui.todo.TodoList.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.todo/TodoList");
});
template.ui.todo.ui_todo_list = om.next.factory.call(null,template.ui.todo.TodoList);
/**
 * @constructor
 */
template.ui.todo.TodoRoot = (function template$ui$todo$TodoRoot(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.todo.TodoRoot.prototype = goog.object.clone(React.Component.prototype);

var x45800_45812 = template.ui.todo.TodoRoot.prototype;
x45800_45812.componentWillUpdate = ((function (x45800_45812){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___45813 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___45814 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___45813,next_ident__34655__auto___45814)){
var idxr__34656__auto___45815 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___45815 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___45815),((function (idxr__34656__auto___45815,ident__34654__auto___45813,next_ident__34655__auto___45814,this__34650__auto__,x45800_45812){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___45813], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___45814], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___45815,ident__34654__auto___45813,next_ident__34655__auto___45814,this__34650__auto__,x45800_45812))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x45800_45812))
;

x45800_45812.shouldComponentUpdate = ((function (x45800_45812){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__45802 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45802);
} else {
return G__45802;
}
})();
var or__32843__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__34650__auto__),next_props__34651__auto____$2);
if(or__32843__auto__){
return or__32843__auto__;
} else {
var or__32843__auto____$1 = (function (){var and__32831__auto__ = this__34650__auto__.state;
if(cljs.core.truth_(and__32831__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__34650__auto__.state,"omcljs$state"),goog.object.get(next_state__34652__auto__,"omcljs$state"));
} else {
return and__32831__auto__;
}
})();
if(cljs.core.truth_(or__32843__auto____$1)){
return or__32843__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__34650__auto__.props.children,next_children__34653__auto__);
}
}
});})(x45800_45812))
;

x45800_45812.componentWillUnmount = ((function (x45800_45812){
return (function (){
var this__34650__auto__ = this;
var r__34661__auto__ = om.next.get_reconciler.call(null,this__34650__auto__);
var cfg__34662__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__34661__auto__);
var st__34663__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
var indexer__34660__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__34662__auto__);
if(cljs.core.truth_((function (){var and__32831__auto__ = !((st__34663__auto__ == null));
if(and__32831__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__34663__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__34650__auto__], null));
} else {
return and__32831__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__34663__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__34650__auto__);
} else {
}

if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45800_45812))
;

x45800_45812.componentDidUpdate = ((function (x45800_45812){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x45800_45812))
;

x45800_45812.isMounted = ((function (x45800_45812){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45800_45812))
;

x45800_45812.componentWillMount = ((function (x45800_45812){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x45800_45812))
;

x45800_45812.render = ((function (x45800_45812){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_45803 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45804 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45805 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45806 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45807 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__45808 = om.next.props.call(null,this$);
var map__45808__$1 = ((((!((map__45808 == null)))?((((map__45808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45808):map__45808);
var list = cljs.core.get.call(null,map__45808__$1,new cljs.core.Keyword("todo","list","todo/list",761521689));
return om.dom.div.call(null,null,om.dom.h2.call(null,null,template.ui.todo.ui_todo_list.call(null,list)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45807;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45806;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45805;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45804;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45803;
}});})(x45800_45812))
;


template.ui.todo.TodoRoot.prototype.constructor = template.ui.todo.TodoRoot;

template.ui.todo.TodoRoot.prototype.constructor.displayName = "template.ui.todo/TodoRoot";

template.ui.todo.TodoRoot.prototype.om$isComponent = true;

var x45810_45816 = template.ui.todo.TodoRoot;
/** @nocollapse */
x45810_45816.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x45810_45816.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45810_45816){
return (function (this$,params){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(x45810_45816))
;

/** @nocollapse */
x45810_45816.om$next$IQuery$ = true;

/** @nocollapse */
x45810_45816.om$next$IQuery$query$arity$1 = ((function (x45810_45816){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","list","todo/list",761521689),om.next.get_query.call(null,template.ui.todo.TodoList)], null)], null);
});})(x45810_45816))
;


var x45811_45817 = template.ui.todo.TodoRoot.prototype;

x45811_45817.untangled$client$core$InitialAppState$ = true;


x45811_45817.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45811_45817){
return (function (this$,params){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(x45811_45817))
;


x45811_45817.om$next$IQuery$ = true;


x45811_45817.om$next$IQuery$query$arity$1 = ((function (x45811_45817){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","list","todo/list",761521689),om.next.get_query.call(null,template.ui.todo.TodoList)], null)], null);
});})(x45811_45817))
;


template.ui.todo.TodoRoot.cljs$lang$type = true;

template.ui.todo.TodoRoot.cljs$lang$ctorStr = "template.ui.todo/TodoRoot";

template.ui.todo.TodoRoot.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.todo/TodoRoot");
});
template.ui.todo.ui_todo_root = om.next.factory.call(null,template.ui.todo.TodoRoot);

//# sourceMappingURL=todo.js.map?rel=1479752960731