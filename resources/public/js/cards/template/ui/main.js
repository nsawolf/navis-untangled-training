// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.main');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('om_css.core');
goog.require('om.next');
if(typeof template.ui.main.MainPage !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.main.MainPage = (function template$ui$main$MainPage(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.main.MainPage.prototype = goog.object.clone(React.Component.prototype);
}

var x41468_41480 = template.ui.main.MainPage.prototype;
x41468_41480.componentWillUpdate = ((function (x41468_41480){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41481 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41482 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41481,next_ident__34655__auto___41482)){
var idxr__34656__auto___41483 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41483 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41483),((function (idxr__34656__auto___41483,ident__34654__auto___41481,next_ident__34655__auto___41482,this__34650__auto__,x41468_41480){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41481], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41482], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41483,ident__34654__auto___41481,next_ident__34655__auto___41482,this__34650__auto__,x41468_41480))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41468_41480))
;

x41468_41480.shouldComponentUpdate = ((function (x41468_41480){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41470 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41470);
} else {
return G__41470;
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
});})(x41468_41480))
;

x41468_41480.componentWillUnmount = ((function (x41468_41480){
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
});})(x41468_41480))
;

x41468_41480.componentDidUpdate = ((function (x41468_41480){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41468_41480))
;

x41468_41480.isMounted = ((function (x41468_41480){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41468_41480))
;

x41468_41480.componentWillMount = ((function (x41468_41480){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41468_41480))
;

x41468_41480.render = ((function (x41468_41480){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41471 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41472 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41473 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41474 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41475 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__41476 = om.next.props.call(null,this$);
var map__41476__$1 = ((((!((map__41476 == null)))?((((map__41476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41476):map__41476);
var current_user = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),om_css.core.local_class.call(null,template.ui.main.MainPage,"form")], null)),"MAIN PAGE");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41475;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41474;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41473;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41472;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41471;
}});})(x41468_41480))
;


template.ui.main.MainPage.prototype.constructor = template.ui.main.MainPage;

template.ui.main.MainPage.prototype.constructor.displayName = "template.ui.main/MainPage";

template.ui.main.MainPage.prototype.om$isComponent = true;

var x41478_41484 = template.ui.main.MainPage;
/** @nocollapse */
x41478_41484.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41478_41484.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41478_41484){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x41478_41484))
;

/** @nocollapse */
x41478_41484.om$next$IQuery$ = true;

/** @nocollapse */
x41478_41484.om$next$IQuery$query$arity$1 = ((function (x41478_41484){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x41478_41484))
;

/** @nocollapse */
x41478_41484.om_css$core$CSS$ = true;

/** @nocollapse */
x41478_41484.om_css$core$CSS$css$arity$1 = ((function (x41478_41484){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,template.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x41478_41484))
;

/** @nocollapse */
x41478_41484.om$next$Ident$ = true;

/** @nocollapse */
x41478_41484.om$next$Ident$ident$arity$2 = ((function (x41478_41484){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41478_41484))
;


var x41479_41485 = template.ui.main.MainPage.prototype;

x41479_41485.untangled$client$core$InitialAppState$ = true;


x41479_41485.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41479_41485){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x41479_41485))
;


x41479_41485.om$next$IQuery$ = true;


x41479_41485.om$next$IQuery$query$arity$1 = ((function (x41479_41485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x41479_41485))
;


x41479_41485.om_css$core$CSS$ = true;


x41479_41485.om_css$core$CSS$css$arity$1 = ((function (x41479_41485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,template.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x41479_41485))
;


x41479_41485.om$next$Ident$ = true;


x41479_41485.om$next$Ident$ident$arity$2 = ((function (x41479_41485){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41479_41485))
;


template.ui.main.MainPage.cljs$lang$type = true;

template.ui.main.MainPage.cljs$lang$ctorStr = "template.ui.main/MainPage";

template.ui.main.MainPage.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.main/MainPage");
});
template.ui.main.ui_main = om.next.factory.call(null,template.ui.main.MainPage);

//# sourceMappingURL=main.js.map?rel=1479747561440