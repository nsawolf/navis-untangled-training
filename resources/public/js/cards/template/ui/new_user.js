// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.new_user');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('om_css.core');
goog.require('om.next');
goog.require('untangled.client.data_fetch');
if(typeof template.ui.new_user.NewUser !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.new_user.NewUser = (function template$ui$new_user$NewUser(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.new_user.NewUser.prototype = goog.object.clone(React.Component.prototype);
}

var x41439_41451 = template.ui.new_user.NewUser.prototype;
x41439_41451.componentWillUpdate = ((function (x41439_41451){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41452 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41453 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41452,next_ident__34655__auto___41453)){
var idxr__34656__auto___41454 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41454 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41454),((function (idxr__34656__auto___41454,ident__34654__auto___41452,next_ident__34655__auto___41453,this__34650__auto__,x41439_41451){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41452], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41454,ident__34654__auto___41452,next_ident__34655__auto___41453,this__34650__auto__,x41439_41451))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41439_41451))
;

x41439_41451.shouldComponentUpdate = ((function (x41439_41451){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41441 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41441);
} else {
return G__41441;
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
});})(x41439_41451))
;

x41439_41451.componentWillUnmount = ((function (x41439_41451){
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
});})(x41439_41451))
;

x41439_41451.componentDidUpdate = ((function (x41439_41451){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41439_41451))
;

x41439_41451.isMounted = ((function (x41439_41451){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41439_41451))
;

x41439_41451.componentWillMount = ((function (x41439_41451){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41439_41451))
;

x41439_41451.render = ((function (x41439_41451){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41442 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41443 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41444 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41445 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41446 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__41447 = om.next.props.call(null,this$);
var map__41447__$1 = ((((!((map__41447 == null)))?((((map__41447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41447):map__41447);
var username = cljs.core.get.call(null,map__41447__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__41447__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var password2 = cljs.core.get.call(null,map__41447__$1,new cljs.core.Keyword("ui","password2","ui/password2",557832013));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str(om_css.core.local_class.call(null,template.ui.new_user.NewUser,"form")),cljs.core.str(" "),cljs.core.str("col-xs-4"),cljs.core.str(" ")].join('')], null)),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Email Address"),om.dom.input.call(null,({"className": "form-control", "type": "email", "name": "username", "value": username, "onChange": ((function (map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451){
return (function (p1__41432_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__41432_SHARP_);
});})(map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451){
return (function (p1__41433_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__41433_SHARP_);
});})(map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password2"}),"Verify your Password"),om.dom.input.call(null,({"name": "password2", "className": "form-control", "type": "password", "value": password2, "onChange": ((function (map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451){
return (function (p1__41434_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password2","ui/password2",557832013),new cljs.core.Keyword(null,"event","event",301435442),p1__41434_SHARP_);
});})(map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451))
}))),om.dom.button.call(null,({"onClick": ((function (map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("new-user","sign-up","new-user/sign-up",1268156135,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__33677__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__33677__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__33677__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())))));
});})(map__41447,map__41447__$1,username,password,password2,_STAR_reconciler_STAR_41442,_STAR_depth_STAR_41443,_STAR_shared_STAR_41444,_STAR_instrument_STAR_41445,_STAR_parent_STAR_41446,this$,this__34649__auto__,x41439_41451))
}),"Sign Up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41446;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41445;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41444;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41443;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41442;
}});})(x41439_41451))
;


template.ui.new_user.NewUser.prototype.constructor = template.ui.new_user.NewUser;

template.ui.new_user.NewUser.prototype.constructor.displayName = "template.ui.new-user/NewUser";

template.ui.new_user.NewUser.prototype.om$isComponent = true;

var x41449_41455 = template.ui.new_user.NewUser;
/** @nocollapse */
x41449_41455.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41449_41455.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41449_41455){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x41449_41455))
;

/** @nocollapse */
x41449_41455.om$next$IQuery$ = true;

/** @nocollapse */
x41449_41455.om$next$IQuery$query$arity$1 = ((function (x41449_41455){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x41449_41455))
;

/** @nocollapse */
x41449_41455.om$next$Ident$ = true;

/** @nocollapse */
x41449_41455.om$next$Ident$ident$arity$2 = ((function (x41449_41455){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41449_41455))
;


var x41450_41456 = template.ui.new_user.NewUser.prototype;

x41450_41456.untangled$client$core$InitialAppState$ = true;


x41450_41456.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41450_41456){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x41450_41456))
;


x41450_41456.om$next$IQuery$ = true;


x41450_41456.om$next$IQuery$query$arity$1 = ((function (x41450_41456){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x41450_41456))
;


x41450_41456.om$next$Ident$ = true;


x41450_41456.om$next$Ident$ident$arity$2 = ((function (x41450_41456){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41450_41456))
;


template.ui.new_user.NewUser.cljs$lang$type = true;

template.ui.new_user.NewUser.cljs$lang$ctorStr = "template.ui.new-user/NewUser";

template.ui.new_user.NewUser.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.new-user/NewUser");
});
template.ui.new_user.ui_new_user = om.next.factory.call(null,template.ui.new_user.NewUser);

//# sourceMappingURL=new_user.js.map?rel=1479747561369