// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.root');
goog.require('cljs.core');
goog.require('template.ui.main');
goog.require('om.dom');
goog.require('template.ui.login');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('template.ui.new_user');
goog.require('om.next');
template.ui.root.nav_to = (function template$ui$root$nav_to(env,page){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,new cljs.core.Keyword(null,"page","page",849072397)], null));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return template.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"new-user","new-user",1575436062));
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","login","nav/login",1697490065,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return template.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"login","login",55217519));
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","main","nav/main",-477429177,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return template.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"main","main",-2117802661));
})], null);
}));
if(typeof template.ui.root.Loading !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.root.Loading = (function template$ui$root$Loading(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.root.Loading.prototype = goog.object.clone(React.Component.prototype);
}

var x41492_41502 = template.ui.root.Loading.prototype;
x41492_41502.componentWillUpdate = ((function (x41492_41502){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41503 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41504 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41503,next_ident__34655__auto___41504)){
var idxr__34656__auto___41505 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41505 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41505),((function (idxr__34656__auto___41505,ident__34654__auto___41503,next_ident__34655__auto___41504,this__34650__auto__,x41492_41502){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41503], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41504], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41505,ident__34654__auto___41503,next_ident__34655__auto___41504,this__34650__auto__,x41492_41502))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41492_41502))
;

x41492_41502.shouldComponentUpdate = ((function (x41492_41502){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41494 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41494);
} else {
return G__41494;
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
});})(x41492_41502))
;

x41492_41502.componentWillUnmount = ((function (x41492_41502){
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
});})(x41492_41502))
;

x41492_41502.componentDidUpdate = ((function (x41492_41502){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41492_41502))
;

x41492_41502.isMounted = ((function (x41492_41502){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41492_41502))
;

x41492_41502.componentWillMount = ((function (x41492_41502){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41492_41502))
;

x41492_41502.render = ((function (x41492_41502){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41495 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41496 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41497 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41498 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41499 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{return om.dom.div.call(null,null,"Loading...");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41499;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41498;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41497;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41496;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41495;
}});})(x41492_41502))
;


template.ui.root.Loading.prototype.constructor = template.ui.root.Loading;

template.ui.root.Loading.prototype.constructor.displayName = "template.ui.root/Loading";

template.ui.root.Loading.prototype.om$isComponent = true;

var x41500_41506 = template.ui.root.Loading;
/** @nocollapse */
x41500_41506.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41500_41506.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41500_41506){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});})(x41500_41506))
;

/** @nocollapse */
x41500_41506.om$next$IQuery$ = true;

/** @nocollapse */
x41500_41506.om$next$IQuery$query$arity$1 = ((function (x41500_41506){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null);
});})(x41500_41506))
;

/** @nocollapse */
x41500_41506.om$next$Ident$ = true;

/** @nocollapse */
x41500_41506.om$next$Ident$ident$arity$2 = ((function (x41500_41506){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41500_41506))
;


var x41501_41507 = template.ui.root.Loading.prototype;

x41501_41507.untangled$client$core$InitialAppState$ = true;


x41501_41507.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41501_41507){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});})(x41501_41507))
;


x41501_41507.om$next$IQuery$ = true;


x41501_41507.om$next$IQuery$query$arity$1 = ((function (x41501_41507){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null);
});})(x41501_41507))
;


x41501_41507.om$next$Ident$ = true;


x41501_41507.om$next$Ident$ident$arity$2 = ((function (x41501_41507){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41501_41507))
;


template.ui.root.Loading.cljs$lang$type = true;

template.ui.root.Loading.cljs$lang$ctorStr = "template.ui.root/Loading";

template.ui.root.Loading.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.root/Loading");
});
template.ui.root.ui_loading = om.next.factory.call(null,template.ui.root.Loading);
if(typeof template.ui.root.Pages !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.root.Pages = (function template$ui$root$Pages(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.root.Pages.prototype = goog.object.clone(React.Component.prototype);
}

var x41512_41525 = template.ui.root.Pages.prototype;
x41512_41525.componentWillUpdate = ((function (x41512_41525){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41526 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41527 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41526,next_ident__34655__auto___41527)){
var idxr__34656__auto___41528 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41528 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41528),((function (idxr__34656__auto___41528,ident__34654__auto___41526,next_ident__34655__auto___41527,this__34650__auto__,x41512_41525){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41526], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41527], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41528,ident__34654__auto___41526,next_ident__34655__auto___41527,this__34650__auto__,x41512_41525))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41512_41525))
;

x41512_41525.shouldComponentUpdate = ((function (x41512_41525){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41514 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41514);
} else {
return G__41514;
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
});})(x41512_41525))
;

x41512_41525.componentWillUnmount = ((function (x41512_41525){
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
});})(x41512_41525))
;

x41512_41525.componentDidUpdate = ((function (x41512_41525){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41512_41525))
;

x41512_41525.isMounted = ((function (x41512_41525){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41512_41525))
;

x41512_41525.componentWillMount = ((function (x41512_41525){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41512_41525))
;

x41512_41525.render = ((function (x41512_41525){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41515 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41516 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41517 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41518 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41519 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__41520 = om.next.props.call(null,this$);
var map__41520__$1 = ((((!((map__41520 == null)))?((((map__41520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41520):map__41520);
var props = map__41520__$1;
var id = cljs.core.get.call(null,map__41520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var login = cljs.core.get.call(null,map__41520__$1,new cljs.core.Keyword(null,"login","login",55217519));
var G__41522 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__41522) {
case "new-user":
return template.ui.new_user.ui_new_user.call(null,props);

break;
case "loading":
return template.ui.root.ui_loading.call(null,props);

break;
case "login":
return template.ui.login.ui_login.call(null,props);

break;
case "main":
return template.ui.main.ui_main.call(null,props);

break;
default:
return om.dom.div.call(null,null,"MISSING PAGE");

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41519;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41518;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41517;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41516;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41515;
}});})(x41512_41525))
;


template.ui.root.Pages.prototype.constructor = template.ui.root.Pages;

template.ui.root.Pages.prototype.constructor.displayName = "template.ui.root/Pages";

template.ui.root.Pages.prototype.om$isComponent = true;

var x41523_41530 = template.ui.root.Pages;
/** @nocollapse */
x41523_41530.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41523_41530.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41523_41530){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,template.ui.root.Loading,null);
});})(x41523_41530))
;

/** @nocollapse */
x41523_41530.om$next$IQuery$ = true;

/** @nocollapse */
x41523_41530.om$next$IQuery$query$arity$1 = ((function (x41523_41530){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading","loading",-737050189),om.next.get_query.call(null,template.ui.root.Loading),new cljs.core.Keyword(null,"new-user","new-user",1575436062),om.next.get_query.call(null,template.ui.new_user.NewUser),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,template.ui.login.LoginPage),new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,template.ui.main.MainPage)], null);
});})(x41523_41530))
;

/** @nocollapse */
x41523_41530.om$next$Ident$ = true;

/** @nocollapse */
x41523_41530.om$next$Ident$ident$arity$2 = ((function (x41523_41530){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41523_41530))
;


var x41524_41531 = template.ui.root.Pages.prototype;

x41524_41531.untangled$client$core$InitialAppState$ = true;


x41524_41531.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41524_41531){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,template.ui.root.Loading,null);
});})(x41524_41531))
;


x41524_41531.om$next$IQuery$ = true;


x41524_41531.om$next$IQuery$query$arity$1 = ((function (x41524_41531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading","loading",-737050189),om.next.get_query.call(null,template.ui.root.Loading),new cljs.core.Keyword(null,"new-user","new-user",1575436062),om.next.get_query.call(null,template.ui.new_user.NewUser),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,template.ui.login.LoginPage),new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,template.ui.main.MainPage)], null);
});})(x41524_41531))
;


x41524_41531.om$next$Ident$ = true;


x41524_41531.om$next$Ident$ident$arity$2 = ((function (x41524_41531){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41524_41531))
;


template.ui.root.Pages.cljs$lang$type = true;

template.ui.root.Pages.cljs$lang$ctorStr = "template.ui.root/Pages";

template.ui.root.Pages.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.root/Pages");
});
template.ui.root.ui_pages = om.next.factory.call(null,template.ui.root.Pages);
template.ui.root.ui_login_stats = (function template$ui$root$ui_login_stats(loading_QMARK_,user,logout_fn){
return om.dom.p.call(null,({"className": "navbar-text navbar-right"}),(cljs.core.truth_(loading_QMARK_)?om.dom.span.call(null,({"className": "badge"}),"..."):null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user),om.dom.br.call(null,null),om.dom.a.call(null,({"onClick": logout_fn})," Log out"));
});
template.ui.root.ui_login_button = (function template$ui$root$ui_login_button(loading_QMARK_,login_fn){
return om.dom.p.call(null,({"className": "navbar-right"}),(cljs.core.truth_(loading_QMARK_)?om.dom.span.call(null,({"className": "navbar-text badge"}),"..."):null),om.dom.button.call(null,({"type": "button", "onClick": login_fn, "className": "btn btn-default navbar-btn "}),"Sign in"));
});
template.ui.root.ui_navbar = (function template$ui$root$ui_navbar(this$){
var login = (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","login","nav/login",1697490065,null))], null));
});
var logout = ((function (login){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("login","logout","login/logout",-1136924503,null))], null));
});})(login))
;
var map__41534 = om.next.props.call(null,this$);
var map__41534__$1 = ((((!((map__41534 == null)))?((((map__41534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41534):map__41534);
var loading_data = cljs.core.get.call(null,map__41534__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var current_user = cljs.core.get.call(null,map__41534__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var logged_in_QMARK_ = cljs.core.get.call(null,map__41534__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
return om.dom.div.call(null,({"className": "navbar navbar-default"}),om.dom.div.call(null,({"className": "container-fluid"}),om.dom.div.call(null,({"className": "navbar-header"}),om.dom.span.call(null,({"className": "navbar-brand"}),om.dom.span.call(null,null,"Template Brand"))),om.dom.div.call(null,({"className": "collapse navbar-collapse"}),(cljs.core.truth_(logged_in_QMARK_)?om.dom.ul.call(null,({"className": "nav navbar-nav"}),om.dom.li.call(null,null,om.dom.a.call(null,({"className": "active", "onClick": ((function (login,logout,map__41534,map__41534__$1,loading_data,current_user,logged_in_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","main","nav/main",-477429177,null))], null));
});})(login,logout,map__41534,map__41534__$1,loading_data,current_user,logged_in_QMARK_))
, "href": "#"}),"Main"))):null),(cljs.core.truth_(logged_in_QMARK_)?template.ui.root.ui_login_stats.call(null,loading_data,current_user,logout):template.ui.root.ui_login_button.call(null,loading_data,login)))));
});
if(typeof template.ui.root.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.root.Root = (function template$ui$root$Root(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.root.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x41540_41552 = template.ui.root.Root.prototype;
x41540_41552.componentWillUpdate = ((function (x41540_41552){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41553 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41554 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41553,next_ident__34655__auto___41554)){
var idxr__34656__auto___41555 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41555 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41555),((function (idxr__34656__auto___41555,ident__34654__auto___41553,next_ident__34655__auto___41554,this__34650__auto__,x41540_41552){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41553], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41554], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41555,ident__34654__auto___41553,next_ident__34655__auto___41554,this__34650__auto__,x41540_41552))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41540_41552))
;

x41540_41552.shouldComponentUpdate = ((function (x41540_41552){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41542 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41542);
} else {
return G__41542;
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
});})(x41540_41552))
;

x41540_41552.componentWillUnmount = ((function (x41540_41552){
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
});})(x41540_41552))
;

x41540_41552.componentDidUpdate = ((function (x41540_41552){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41540_41552))
;

x41540_41552.isMounted = ((function (x41540_41552){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41540_41552))
;

x41540_41552.componentWillMount = ((function (x41540_41552){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41540_41552))
;

x41540_41552.render = ((function (x41540_41552){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41543 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41544 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41545 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41546 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41547 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__41548 = om.next.props.call(null,this$);
var map__41548__$1 = ((((!((map__41548 == null)))?((((map__41548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41548):map__41548);
var loading_data = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var react_key = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var current_page = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var current_user = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var logged_in_QMARK_ = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var logout = ((function (map__41548,map__41548__$1,loading_data,react_key,current_page,current_user,logged_in_QMARK_,_STAR_reconciler_STAR_41543,_STAR_depth_STAR_41544,_STAR_shared_STAR_41545,_STAR_instrument_STAR_41546,_STAR_parent_STAR_41547,this$,this__34649__auto__,x41540_41552){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("login","logout","login/logout",-1136924503,null))], null));
});})(map__41548,map__41548__$1,loading_data,react_key,current_page,current_user,logged_in_QMARK_,_STAR_reconciler_STAR_41543,_STAR_depth_STAR_41544,_STAR_shared_STAR_41545,_STAR_instrument_STAR_41546,_STAR_parent_STAR_41547,this$,this__34649__auto__,x41540_41552))
;
return om.dom.div.call(null,({"key": react_key}),template.ui.root.ui_navbar.call(null,this$),template.ui.root.ui_pages.call(null,om.next.computed.call(null,current_page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logout","logout",1418564329),logout], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41547;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41546;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41545;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41544;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41543;
}});})(x41540_41552))
;


template.ui.root.Root.prototype.constructor = template.ui.root.Root;

template.ui.root.Root.prototype.constructor.displayName = "template.ui.root/Root";

template.ui.root.Root.prototype.om$isComponent = true;

var x41550_41556 = template.ui.root.Root;
/** @nocollapse */
x41550_41556.om$next$IQuery$ = true;

/** @nocollapse */
x41550_41556.om$next$IQuery$query$arity$1 = ((function (x41550_41556){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,template.ui.root.Pages)], null)], null);
});})(x41550_41556))
;

/** @nocollapse */
x41550_41556.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41550_41556.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41550_41556){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),untangled.client.core.initial_state.call(null,template.ui.root.Pages,null)], null);
});})(x41550_41556))
;


var x41551_41557 = template.ui.root.Root.prototype;

x41551_41557.om$next$IQuery$ = true;


x41551_41557.om$next$IQuery$query$arity$1 = ((function (x41551_41557){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,template.ui.root.Pages)], null)], null);
});})(x41551_41557))
;


x41551_41557.untangled$client$core$InitialAppState$ = true;


x41551_41557.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41551_41557){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),untangled.client.core.initial_state.call(null,template.ui.root.Pages,null)], null);
});})(x41551_41557))
;


template.ui.root.Root.cljs$lang$type = true;

template.ui.root.Root.cljs$lang$ctorStr = "template.ui.root/Root";

template.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1479747561572