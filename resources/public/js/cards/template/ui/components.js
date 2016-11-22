// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.components');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
template.ui.components.PlaceholderImage = (function template$ui$components$PlaceholderImage(){
var this__37771__auto__ = this;
React.Component.apply(this__37771__auto__,arguments);

if(!((this__37771__auto__.initLocalState == null))){
this__37771__auto__.state = this__37771__auto__.initLocalState();
} else {
this__37771__auto__.state = {};
}

return this__37771__auto__;
});

template.ui.components.PlaceholderImage.prototype = goog.object.clone(React.Component.prototype);

var x54543_54555 = template.ui.components.PlaceholderImage.prototype;
x54543_54555.componentWillUpdate = ((function (x54543_54555){
return (function (next_props__37672__auto__,next_state__37673__auto__){
var this__37671__auto__ = this;
if(((!((this__37671__auto__ == null)))?(((false) || (this__37671__auto__.om$next$Ident$))?true:false):false)){
var ident__37675__auto___54556 = om.next.ident.call(null,this__37671__auto__,om.next.props.call(null,this__37671__auto__));
var next_ident__37676__auto___54557 = om.next.ident.call(null,this__37671__auto__,om.next._next_props.call(null,next_props__37672__auto__,this__37671__auto__));
if(cljs.core.not_EQ_.call(null,ident__37675__auto___54556,next_ident__37676__auto___54557)){
var idxr__37677__auto___54558 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37671__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37677__auto___54558 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37677__auto___54558),((function (idxr__37677__auto___54558,ident__37675__auto___54556,next_ident__37676__auto___54557,this__37671__auto__,x54543_54555){
return (function (indexes__37678__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37678__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37675__auto___54556], null),cljs.core.disj,this__37671__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37676__auto___54557], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37671__auto__);
});})(idxr__37677__auto___54558,ident__37675__auto___54556,next_ident__37676__auto___54557,this__37671__auto__,x54543_54555))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37671__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37671__auto__);
});})(x54543_54555))
;

x54543_54555.shouldComponentUpdate = ((function (x54543_54555){
return (function (next_props__37672__auto__,next_state__37673__auto__){
var this__37671__auto__ = this;
var next_children__37674__auto__ = next_props__37672__auto__.children;
var next_props__37672__auto____$1 = goog.object.get(next_props__37672__auto__,"omcljs$value");
var next_props__37672__auto____$2 = (function (){var G__54545 = next_props__37672__auto____$1;
if((next_props__37672__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__54545);
} else {
return G__54545;
}
})();
var or__32847__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37671__auto__),next_props__37672__auto____$2);
if(or__32847__auto__){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = (function (){var and__32835__auto__ = this__37671__auto__.state;
if(cljs.core.truth_(and__32835__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37671__auto__.state,"omcljs$state"),goog.object.get(next_state__37673__auto__,"omcljs$state"));
} else {
return and__32835__auto__;
}
})();
if(cljs.core.truth_(or__32847__auto____$1)){
return or__32847__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37671__auto__.props.children,next_children__37674__auto__);
}
}
});})(x54543_54555))
;

x54543_54555.componentWillUnmount = ((function (x54543_54555){
return (function (){
var this__37671__auto__ = this;
var r__37682__auto__ = om.next.get_reconciler.call(null,this__37671__auto__);
var cfg__37683__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37682__auto__);
var st__37684__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37683__auto__);
var indexer__37681__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37683__auto__);
if(cljs.core.truth_((function (){var and__32835__auto__ = !((st__37684__auto__ == null));
if(and__32835__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37684__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37671__auto__], null));
} else {
return and__32835__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37684__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37671__auto__);
} else {
}

if((indexer__37681__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37681__auto__,this__37671__auto__);
}
});})(x54543_54555))
;

x54543_54555.componentDidUpdate = ((function (x54543_54555){
return (function (prev_props__37679__auto__,prev_state__37680__auto__){
var this__37671__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37671__auto__);
});})(x54543_54555))
;

x54543_54555.isMounted = ((function (x54543_54555){
return (function (){
var this__37671__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37671__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x54543_54555))
;

x54543_54555.componentWillMount = ((function (x54543_54555){
return (function (){
var this__37671__auto__ = this;
var indexer__37681__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37671__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37681__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37681__auto__,this__37671__auto__);
}
});})(x54543_54555))
;

x54543_54555.render = ((function (x54543_54555){
return (function (){
var this__37670__auto__ = this;
var this$ = this__37670__auto__;
var _STAR_reconciler_STAR_54546 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_54547 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_54548 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_54549 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_54550 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37670__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37670__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37670__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37670__auto__);

om.next._STAR_parent_STAR_ = this__37670__auto__;

try{var map__54551 = om.next.props.call(null,this$);
var map__54551__$1 = ((((!((map__54551 == null)))?((((map__54551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54551):map__54551);
var w = cljs.core.get.call(null,map__54551__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__54551__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var label = cljs.core.get.call(null,map__54551__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var label__$1 = (function (){var or__32847__auto__ = label;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return [cljs.core.str(w),cljs.core.str("x"),cljs.core.str(h)].join('');
}
})();
return om.dom.svg.call(null,({"width": w, "height": h}),om.dom.rect.call(null,({"width": w, "height": h, "style": ({"fill": "rgb(200,200,200)", "strokeWidth": (2), "stroke": "black"})})),om.dom.text.call(null,({"textAnchor": "middle", "x": (w / (2)), "y": (h / (2))}),label__$1));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_54550;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_54549;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_54548;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_54547;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_54546;
}});})(x54543_54555))
;


template.ui.components.PlaceholderImage.prototype.constructor = template.ui.components.PlaceholderImage;

template.ui.components.PlaceholderImage.prototype.constructor.displayName = "template.ui.components/PlaceholderImage";

template.ui.components.PlaceholderImage.prototype.om$isComponent = true;

var x54553_54559 = template.ui.components.PlaceholderImage;


var x54554_54560 = template.ui.components.PlaceholderImage.prototype;


template.ui.components.PlaceholderImage.cljs$lang$type = true;

template.ui.components.PlaceholderImage.cljs$lang$ctorStr = "template.ui.components/PlaceholderImage";

template.ui.components.PlaceholderImage.cljs$lang$ctorPrWriter = (function (this__37774__auto__,writer__37775__auto__,opt__37776__auto__){
return cljs.core._write.call(null,writer__37775__auto__,"template.ui.components/PlaceholderImage");
});
template.ui.components.ui_placeholder = om.next.factory.call(null,template.ui.components.PlaceholderImage);

//# sourceMappingURL=components.js.map?rel=1479316908346