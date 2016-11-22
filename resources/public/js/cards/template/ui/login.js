// Compiled by ClojureScript 1.9.229 {}
goog.provide('template.ui.login');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('om_css.core');
goog.require('om.next');
goog.require('untangled.client.data_fetch');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null),(function (p__41384,k,p__41385){
var map__41386 = p__41384;
var map__41386__$1 = ((((!((map__41386 == null)))?((((map__41386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41386):map__41386);
var state = cljs.core.get.call(null,map__41386__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__41387 = p__41385;
var map__41387__$1 = ((((!((map__41387 == null)))?((((map__41387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41387):map__41387);
var uid = cljs.core.get.call(null,map__41387__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__41386,map__41386__$1,state,map__41387,map__41387__$1,uid){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uid,new cljs.core.Keyword(null,"name","name",1843675177),"???"], null),new cljs.core.Keyword(null,"server-down","server-down",1750502325),false);
});})(map__41386,map__41386__$1,state,map__41387,map__41387__$1,uid))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null),(function (p__41390,k,p){
var map__41391 = p__41390;
var map__41391__$1 = ((((!((map__41391 == null)))?((((map__41391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41391):map__41391);
var state = cljs.core.get.call(null,map__41391__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__41391,map__41391__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"server-down","server-down",1750502325),true);
});})(map__41391,map__41391__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null),(function (p__41393,k,p){
var map__41394 = p__41393;
var map__41394__$1 = ((((!((map__41394 == null)))?((((map__41394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41394):map__41394);
var state = cljs.core.get.call(null,map__41394__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__41394,map__41394__$1,state){
return (function (){
var map__41396 = cljs.core.deref.call(null,state);
var map__41396__$1 = ((((!((map__41396 == null)))?((((map__41396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41396):map__41396);
var logged_in_QMARK_ = cljs.core.get.call(null,map__41396__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var current_user = cljs.core.get.call(null,map__41396__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
if(cljs.core.truth_(logged_in_QMARK_)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
}
});})(map__41394,map__41394__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","logout","login/logout",-1136924503,null),(function (p__41398,k,p){
var map__41399 = p__41398;
var map__41399__$1 = ((((!((map__41399 == null)))?((((map__41399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41399):map__41399);
var state = cljs.core.get.call(null,map__41399__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__41399,map__41399__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
});})(map__41399,map__41399__$1,state))
], null);
}));
if(typeof template.ui.login.LoginPage !== 'undefined'){
} else {
/**
 * @constructor
 */
template.ui.login.LoginPage = (function template$ui$login$LoginPage(){
var this__34750__auto__ = this;
React.Component.apply(this__34750__auto__,arguments);

if(!((this__34750__auto__.initLocalState == null))){
this__34750__auto__.state = this__34750__auto__.initLocalState();
} else {
this__34750__auto__.state = {};
}

return this__34750__auto__;
});

template.ui.login.LoginPage.prototype = goog.object.clone(React.Component.prototype);
}

var x41407_41424 = template.ui.login.LoginPage.prototype;
x41407_41424.componentWillUpdate = ((function (x41407_41424){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
if(((!((this__34650__auto__ == null)))?(((false) || (this__34650__auto__.om$next$Ident$))?true:false):false)){
var ident__34654__auto___41425 = om.next.ident.call(null,this__34650__auto__,om.next.props.call(null,this__34650__auto__));
var next_ident__34655__auto___41426 = om.next.ident.call(null,this__34650__auto__,om.next._next_props.call(null,next_props__34651__auto__,this__34650__auto__));
if(cljs.core.not_EQ_.call(null,ident__34654__auto___41425,next_ident__34655__auto___41426)){
var idxr__34656__auto___41427 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34656__auto___41427 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34656__auto___41427),((function (idxr__34656__auto___41427,ident__34654__auto___41425,next_ident__34655__auto___41426,this__34650__auto__,x41407_41424){
return (function (indexes__34657__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34657__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34654__auto___41425], null),cljs.core.disj,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34655__auto___41426], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34650__auto__);
});})(idxr__34656__auto___41427,ident__34654__auto___41425,next_ident__34655__auto___41426,this__34650__auto__,x41407_41424))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34650__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34650__auto__);
});})(x41407_41424))
;

x41407_41424.shouldComponentUpdate = ((function (x41407_41424){
return (function (next_props__34651__auto__,next_state__34652__auto__){
var this__34650__auto__ = this;
var next_children__34653__auto__ = next_props__34651__auto__.children;
var next_props__34651__auto____$1 = goog.object.get(next_props__34651__auto__,"omcljs$value");
var next_props__34651__auto____$2 = (function (){var G__41409 = next_props__34651__auto____$1;
if((next_props__34651__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41409);
} else {
return G__41409;
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
});})(x41407_41424))
;

x41407_41424.componentWillUnmount = ((function (x41407_41424){
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
});})(x41407_41424))
;

x41407_41424.componentDidUpdate = ((function (x41407_41424){
return (function (prev_props__34658__auto__,prev_state__34659__auto__){
var this__34650__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34650__auto__);
});})(x41407_41424))
;

x41407_41424.isMounted = ((function (x41407_41424){
return (function (){
var this__34650__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34650__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41407_41424))
;

x41407_41424.componentWillMount = ((function (x41407_41424){
return (function (){
var this__34650__auto__ = this;
var indexer__34660__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34650__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34660__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34660__auto__,this__34650__auto__);
}
});})(x41407_41424))
;

x41407_41424.render = ((function (x41407_41424){
return (function (){
var this__34649__auto__ = this;
var this$ = this__34649__auto__;
var _STAR_reconciler_STAR_41410 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41411 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41412 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41413 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41414 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34649__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34649__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34649__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34649__auto__);

om.next._STAR_parent_STAR_ = this__34649__auto__;

try{var map__41420 = om.next.props.call(null,this$);
var map__41420__$1 = ((((!((map__41420 == null)))?((((map__41420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41420):map__41420);
var username = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var server_down = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword(null,"server-down","server-down",1750502325));
var loading_data = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str(om_css.core.local_class.call(null,template.ui.login.LoginPage,"form")),cljs.core.str(" "),cljs.core.str("col-xs-4"),cljs.core.str(" ")].join('')], null)),(cljs.core.truth_(server_down)?om.dom.div.call(null,null,"Unable to contact server. Try again later."):null),(cljs.core.truth_(loading_data)?om.dom.div.call(null,null,"Working..."):null),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Username"),om.dom.input.call(null,({"className": "form-control", "name": "username", "value": username, "onChange": ((function (map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424){
return (function (p1__41401_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__41401_SHARP_);
});})(map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424){
return (function (p1__41402_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__41402_SHARP_);
});})(map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424))
}))),om.dom.button.call(null,({"onClick": ((function (map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__33677__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__33677__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__33677__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action","action",-811238024)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),(function (){var x__33677__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),(function (){var x__33677__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510)),(function (){var x__33677__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33677__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091)))))));
});})(map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424))
}),"Login"))),om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,({"className": "col-xs-4"}),"Don't have a login yet? ",om.dom.a.call(null,({"onClick": ((function (map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null)),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null));
});})(map__41420,map__41420__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_41410,_STAR_depth_STAR_41411,_STAR_shared_STAR_41412,_STAR_instrument_STAR_41413,_STAR_parent_STAR_41414,this$,this__34649__auto__,x41407_41424))
}),"Sign up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41414;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41413;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41412;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41411;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41410;
}});})(x41407_41424))
;


template.ui.login.LoginPage.prototype.constructor = template.ui.login.LoginPage;

template.ui.login.LoginPage.prototype.constructor.displayName = "template.ui.login/LoginPage";

template.ui.login.LoginPage.prototype.om$isComponent = true;

var x41422_41428 = template.ui.login.LoginPage;
/** @nocollapse */
x41422_41428.untangled$client$core$InitialAppState$ = true;

/** @nocollapse */
x41422_41428.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41422_41428){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x41422_41428))
;

/** @nocollapse */
x41422_41428.om$next$IQuery$ = true;

/** @nocollapse */
x41422_41428.om$next$IQuery$query$arity$1 = ((function (x41422_41428){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x41422_41428))
;

/** @nocollapse */
x41422_41428.om_css$core$CSS$ = true;

/** @nocollapse */
x41422_41428.om_css$core$CSS$css$arity$1 = ((function (x41422_41428){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,template.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x41422_41428))
;

/** @nocollapse */
x41422_41428.om$next$Ident$ = true;

/** @nocollapse */
x41422_41428.om$next$Ident$ident$arity$2 = ((function (x41422_41428){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41422_41428))
;


var x41423_41429 = template.ui.login.LoginPage.prototype;

x41423_41429.untangled$client$core$InitialAppState$ = true;


x41423_41429.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x41423_41429){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x41423_41429))
;


x41423_41429.om$next$IQuery$ = true;


x41423_41429.om$next$IQuery$query$arity$1 = ((function (x41423_41429){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x41423_41429))
;


x41423_41429.om_css$core$CSS$ = true;


x41423_41429.om_css$core$CSS$css$arity$1 = ((function (x41423_41429){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,template.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x41423_41429))
;


x41423_41429.om$next$Ident$ = true;


x41423_41429.om$next$Ident$ident$arity$2 = ((function (x41423_41429){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x41423_41429))
;


template.ui.login.LoginPage.cljs$lang$type = true;

template.ui.login.LoginPage.cljs$lang$ctorStr = "template.ui.login/LoginPage";

template.ui.login.LoginPage.cljs$lang$ctorPrWriter = (function (this__34753__auto__,writer__34754__auto__,opt__34755__auto__){
return cljs.core._write.call(null,writer__34754__auto__,"template.ui.login/LoginPage");
});
template.ui.login.ui_login = om.next.factory.call(null,template.ui.login.LoginPage);

//# sourceMappingURL=login.js.map?rel=1479747561299