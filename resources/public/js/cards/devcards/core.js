// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__32847__auto__ = (function (){var and__32835__auto__ = typeof Symbol !== 'undefined';
if(and__32835__auto__){
var and__32835__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__32835__auto____$1){
var and__32835__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__32835__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__32835__auto____$2;
}
} else {
return and__32835__auto____$1;
}
} else {
return and__32835__auto__;
}
})();
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__47286_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__47286_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args47287 = [];
var len__33922__auto___47290 = arguments.length;
var i__33923__auto___47291 = (0);
while(true){
if((i__33923__auto___47291 < len__33922__auto___47290)){
args47287.push((arguments[i__33923__auto___47291]));

var G__47292 = (i__33923__auto___47291 + (1));
i__33923__auto___47291 = G__47292;
continue;
} else {
}
break;
}

var G__47289 = args47287.length;
switch (G__47289) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47287.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__32835__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__32835__auto__){
var map__47300 = c;
var map__47300__$1 = ((((!((map__47300 == null)))?((((map__47300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47300):map__47300);
var path = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__32835__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__46494__auto___47306 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__32847__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__46494__auto___47306);
}

var seq__47302_47307 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__47303_47308 = null;
var count__47304_47309 = (0);
var i__47305_47310 = (0);
while(true){
if((i__47305_47310 < count__47304_47309)){
var property__46495__auto___47311 = cljs.core._nth.call(null,chunk__47303_47308,i__47305_47310);
if(cljs.core.truth_((base__46494__auto___47306[property__46495__auto___47311]))){
(devcards.core.CodeHighlight.prototype[property__46495__auto___47311] = (base__46494__auto___47306[property__46495__auto___47311]));
} else {
}

var G__47312 = seq__47302_47307;
var G__47313 = chunk__47303_47308;
var G__47314 = count__47304_47309;
var G__47315 = (i__47305_47310 + (1));
seq__47302_47307 = G__47312;
chunk__47303_47308 = G__47313;
count__47304_47309 = G__47314;
i__47305_47310 = G__47315;
continue;
} else {
var temp__4657__auto___47316 = cljs.core.seq.call(null,seq__47302_47307);
if(temp__4657__auto___47316){
var seq__47302_47317__$1 = temp__4657__auto___47316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47302_47317__$1)){
var c__33658__auto___47318 = cljs.core.chunk_first.call(null,seq__47302_47317__$1);
var G__47319 = cljs.core.chunk_rest.call(null,seq__47302_47317__$1);
var G__47320 = c__33658__auto___47318;
var G__47321 = cljs.core.count.call(null,c__33658__auto___47318);
var G__47322 = (0);
seq__47302_47307 = G__47319;
chunk__47303_47308 = G__47320;
count__47304_47309 = G__47321;
i__47305_47310 = G__47322;
continue;
} else {
var property__46495__auto___47323 = cljs.core.first.call(null,seq__47302_47317__$1);
if(cljs.core.truth_((base__46494__auto___47306[property__46495__auto___47323]))){
(devcards.core.CodeHighlight.prototype[property__46495__auto___47323] = (base__46494__auto___47306[property__46495__auto___47323]));
} else {
}

var G__47324 = cljs.core.next.call(null,seq__47302_47317__$1);
var G__47325 = null;
var G__47326 = (0);
var G__47327 = (0);
seq__47302_47307 = G__47324;
chunk__47303_47308 = G__47325;
count__47304_47309 = G__47326;
i__47305_47310 = G__47327;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__33772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__33773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__33774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__33775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__33776__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__33776__auto__,method_table__33772__auto__,prefer_table__33773__auto__,method_cache__33774__auto__,cached_hierarchy__33775__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__47328){
var map__47329 = p__47328;
var map__47329__$1 = ((((!((map__47329 == null)))?((((map__47329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47329):map__47329);
var content = cljs.core.get.call(null,map__47329__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__47331){
var map__47332 = p__47331;
var map__47332__$1 = ((((!((map__47332 == null)))?((((map__47332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47332):map__47332);
var block = map__47332__$1;
var content = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__33929__auto__ = [];
var len__33922__auto___47335 = arguments.length;
var i__33923__auto___47336 = (0);
while(true){
if((i__33923__auto___47336 < len__33922__auto___47335)){
args__33929__auto__.push((arguments[i__33923__auto___47336]));

var G__47337 = (i__33923__auto___47336 + (1));
i__33923__auto___47336 = G__47337;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq47334){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47334));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__47339 = devcards.system.devcards_rendered_card_class;
var G__47339__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__47339),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__47339);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__47339__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__47339__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args47340 = [];
var len__33922__auto___47348 = arguments.length;
var i__33923__auto___47349 = (0);
while(true){
if((i__33923__auto___47349 < len__33922__auto___47348)){
args47340.push((arguments[i__33923__auto___47349]));

var G__47350 = (i__33923__auto___47349 + (1));
i__33923__auto___47349 = G__47350;
continue;
} else {
}
break;
}

var G__47342 = args47340.length;
switch (G__47342) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47340.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__47343 = card;
var map__47343__$1 = ((((!((map__47343 == null)))?((((map__47343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47343):map__47343);
var path = cljs.core.get.call(null,map__47343__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__47343__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__47343,map__47343__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__47343,map__47343__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs47345 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs47345))?sablono.interpreter.attributes.call(null,attrs47345):null),((cljs.core.map_QMARK_.call(null,attrs47345))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47345)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__33510__auto__ = (((this$ == null))?null:this$);
var m__33511__auto__ = (devcards.core._devcard_options[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,this$,devcard_opts);
} else {
var m__33511__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__33510__auto__ = (((this$ == null))?null:this$);
var m__33511__auto__ = (devcards.core._devcard[goog.typeOf(x__33510__auto__)]);
if(!((m__33511__auto__ == null))){
return m__33511__auto__.call(null,this$,devcard_opts);
} else {
var m__33511__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__33511__auto____$1 == null))){
return m__33511__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__46494__auto___47357 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs47352 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47352))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs47352)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs47352))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47352)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__46494__auto___47357);
}

var seq__47353_47358 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__47354_47359 = null;
var count__47355_47360 = (0);
var i__47356_47361 = (0);
while(true){
if((i__47356_47361 < count__47355_47360)){
var property__46495__auto___47362 = cljs.core._nth.call(null,chunk__47354_47359,i__47356_47361);
if(cljs.core.truth_((base__46494__auto___47357[property__46495__auto___47362]))){
(devcards.core.DontUpdate.prototype[property__46495__auto___47362] = (base__46494__auto___47357[property__46495__auto___47362]));
} else {
}

var G__47363 = seq__47353_47358;
var G__47364 = chunk__47354_47359;
var G__47365 = count__47355_47360;
var G__47366 = (i__47356_47361 + (1));
seq__47353_47358 = G__47363;
chunk__47354_47359 = G__47364;
count__47355_47360 = G__47365;
i__47356_47361 = G__47366;
continue;
} else {
var temp__4657__auto___47367 = cljs.core.seq.call(null,seq__47353_47358);
if(temp__4657__auto___47367){
var seq__47353_47368__$1 = temp__4657__auto___47367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47353_47368__$1)){
var c__33658__auto___47369 = cljs.core.chunk_first.call(null,seq__47353_47368__$1);
var G__47370 = cljs.core.chunk_rest.call(null,seq__47353_47368__$1);
var G__47371 = c__33658__auto___47369;
var G__47372 = cljs.core.count.call(null,c__33658__auto___47369);
var G__47373 = (0);
seq__47353_47358 = G__47370;
chunk__47354_47359 = G__47371;
count__47355_47360 = G__47372;
i__47356_47361 = G__47373;
continue;
} else {
var property__46495__auto___47374 = cljs.core.first.call(null,seq__47353_47368__$1);
if(cljs.core.truth_((base__46494__auto___47357[property__46495__auto___47374]))){
(devcards.core.DontUpdate.prototype[property__46495__auto___47374] = (base__46494__auto___47357[property__46495__auto___47374]));
} else {
}

var G__47375 = cljs.core.next.call(null,seq__47353_47368__$1);
var G__47376 = null;
var G__47377 = (0);
var G__47378 = (0);
seq__47353_47358 = G__47375;
chunk__47354_47359 = G__47376;
count__47355_47360 = G__47377;
i__47356_47361 = G__47378;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__32847__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__33681__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__33681__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__33681__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__33681__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33681__auto____$3);
})(),x__33681__auto____$2);
})(),x__33681__auto____$1);
})(),x__33681__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__46494__auto___47385 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__32847__auto__ = (function (){var and__32835__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__32835__auto__)){
return this$.state;
} else {
return and__32835__auto__;
}
})();
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__32835__auto__ = data_atom;
if(cljs.core.truth_(and__32835__auto__)){
return id;
} else {
return and__32835__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__46494__auto___47385);
}

var seq__47381_47386 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__47382_47387 = null;
var count__47383_47388 = (0);
var i__47384_47389 = (0);
while(true){
if((i__47384_47389 < count__47383_47388)){
var property__46495__auto___47390 = cljs.core._nth.call(null,chunk__47382_47387,i__47384_47389);
if(cljs.core.truth_((base__46494__auto___47385[property__46495__auto___47390]))){
(devcards.core.DevcardBase.prototype[property__46495__auto___47390] = (base__46494__auto___47385[property__46495__auto___47390]));
} else {
}

var G__47391 = seq__47381_47386;
var G__47392 = chunk__47382_47387;
var G__47393 = count__47383_47388;
var G__47394 = (i__47384_47389 + (1));
seq__47381_47386 = G__47391;
chunk__47382_47387 = G__47392;
count__47383_47388 = G__47393;
i__47384_47389 = G__47394;
continue;
} else {
var temp__4657__auto___47395 = cljs.core.seq.call(null,seq__47381_47386);
if(temp__4657__auto___47395){
var seq__47381_47396__$1 = temp__4657__auto___47395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47381_47396__$1)){
var c__33658__auto___47397 = cljs.core.chunk_first.call(null,seq__47381_47396__$1);
var G__47398 = cljs.core.chunk_rest.call(null,seq__47381_47396__$1);
var G__47399 = c__33658__auto___47397;
var G__47400 = cljs.core.count.call(null,c__33658__auto___47397);
var G__47401 = (0);
seq__47381_47386 = G__47398;
chunk__47382_47387 = G__47399;
count__47383_47388 = G__47400;
i__47384_47389 = G__47401;
continue;
} else {
var property__46495__auto___47402 = cljs.core.first.call(null,seq__47381_47396__$1);
if(cljs.core.truth_((base__46494__auto___47385[property__46495__auto___47402]))){
(devcards.core.DevcardBase.prototype[property__46495__auto___47402] = (base__46494__auto___47385[property__46495__auto___47402]));
} else {
}

var G__47403 = cljs.core.next.call(null,seq__47381_47396__$1);
var G__47404 = null;
var G__47405 = (0);
var G__47406 = (0);
seq__47381_47386 = G__47403;
chunk__47382_47387 = G__47404;
count__47383_47388 = G__47405;
i__47384_47389 = G__47406;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__46494__auto___47411 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__32835__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__32835__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__32835__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__46494__auto___47411);
}

var seq__47407_47412 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__47408_47413 = null;
var count__47409_47414 = (0);
var i__47410_47415 = (0);
while(true){
if((i__47410_47415 < count__47409_47414)){
var property__46495__auto___47416 = cljs.core._nth.call(null,chunk__47408_47413,i__47410_47415);
if(cljs.core.truth_((base__46494__auto___47411[property__46495__auto___47416]))){
(devcards.core.DomComponent.prototype[property__46495__auto___47416] = (base__46494__auto___47411[property__46495__auto___47416]));
} else {
}

var G__47417 = seq__47407_47412;
var G__47418 = chunk__47408_47413;
var G__47419 = count__47409_47414;
var G__47420 = (i__47410_47415 + (1));
seq__47407_47412 = G__47417;
chunk__47408_47413 = G__47418;
count__47409_47414 = G__47419;
i__47410_47415 = G__47420;
continue;
} else {
var temp__4657__auto___47421 = cljs.core.seq.call(null,seq__47407_47412);
if(temp__4657__auto___47421){
var seq__47407_47422__$1 = temp__4657__auto___47421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47407_47422__$1)){
var c__33658__auto___47423 = cljs.core.chunk_first.call(null,seq__47407_47422__$1);
var G__47424 = cljs.core.chunk_rest.call(null,seq__47407_47422__$1);
var G__47425 = c__33658__auto___47423;
var G__47426 = cljs.core.count.call(null,c__33658__auto___47423);
var G__47427 = (0);
seq__47407_47412 = G__47424;
chunk__47408_47413 = G__47425;
count__47409_47414 = G__47426;
i__47410_47415 = G__47427;
continue;
} else {
var property__46495__auto___47428 = cljs.core.first.call(null,seq__47407_47422__$1);
if(cljs.core.truth_((base__46494__auto___47411[property__46495__auto___47428]))){
(devcards.core.DomComponent.prototype[property__46495__auto___47428] = (base__46494__auto___47411[property__46495__auto___47428]));
} else {
}

var G__47429 = cljs.core.next.call(null,seq__47407_47422__$1);
var G__47430 = null;
var G__47431 = (0);
var G__47432 = (0);
seq__47407_47412 = G__47429;
chunk__47408_47413 = G__47430;
count__47409_47414 = G__47431;
i__47410_47415 = G__47432;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__32847__auto__ = x === true;
if(or__32847__auto__){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = x === false;
if(or__32847__auto____$1){
return or__32847__auto____$1;
} else {
var or__32847__auto____$2 = (x == null);
if(or__32847__auto____$2){
return or__32847__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__32847__auto__ = typeof x === 'string';
if(or__32847__auto__){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = (x == null);
if(or__32847__auto____$1){
return or__32847__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__32847__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__47433_SHARP_){
return !(p1__47433_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__47442 = opts;
var map__47442__$1 = ((((!((map__47442 == null)))?((((map__47442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47442):map__47442);
var name = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__32847__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__32847__auto__){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = (options == null);
if(or__32847__auto____$1){
return or__32847__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__32847__auto__ = (initial_data == null);
if(or__32847__auto__){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__32847__auto____$1){
return or__32847__auto____$1;
} else {
var or__32847__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__32847__auto____$2){
return or__32847__auto____$2;
} else {
var or__32847__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__32847__auto____$3){
return or__32847__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__47442,map__47442__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__47434_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__47434_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__47442,map__47442__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs47450 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs47450))?sablono.interpreter.attributes.call(null,attrs47450):null),((cljs.core.map_QMARK_.call(null,attrs47450))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47450)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs47454 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47454))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs47454)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs47454))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47454)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs47455 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47455))?sablono.interpreter.attributes.call(null,attrs47455):null),((cljs.core.map_QMARK_.call(null,attrs47455))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47455)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs47456 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47456))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs47456)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs47456))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47456)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__47457_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__47457_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33469__auto__,k__33470__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return cljs.core._lookup.call(null,this__33469__auto____$1,k__33470__auto__,null);
});


devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33471__auto__,k47459,else__33472__auto__){
var self__ = this;
var this__33471__auto____$1 = this;
var G__47461 = (((k47459 instanceof cljs.core.Keyword))?k47459.fqn:null);
switch (G__47461) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47459,else__33472__auto__);

}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33483__auto__,writer__33484__auto__,opts__33485__auto__){
var self__ = this;
var this__33483__auto____$1 = this;
var pr_pair__33486__auto__ = ((function (this__33483__auto____$1){
return (function (keyval__33487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,cljs.core.pr_writer,""," ","",opts__33485__auto__,keyval__33487__auto__);
});})(this__33483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,pr_pair__33486__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__33485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;


devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47458){
var self__ = this;
var G__47458__$1 = this;
return (new cljs.core.RecordIter((0),G__47458__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33467__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
return self__.__meta;
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33473__auto__){
var self__ = this;
var this__33473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33464__auto__){
var self__ = this;
var this__33464__auto____$1 = this;
var h__33282__auto__ = self__.__hash;
if(!((h__33282__auto__ == null))){
return h__33282__auto__;
} else {
var h__33282__auto____$1 = cljs.core.hash_imap.call(null,this__33464__auto____$1);
self__.__hash = h__33282__auto____$1;

return h__33282__auto____$1;
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33465__auto__,other__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__32835__auto__ = other__33466__auto__;
if(cljs.core.truth_(and__32835__auto__)){
var and__32835__auto____$1 = (this__33465__auto____$1.constructor === other__33466__auto__.constructor);
if(and__32835__auto____$1){
return cljs.core.equiv_map.call(null,this__33465__auto____$1,other__33466__auto__);
} else {
return and__32835__auto____$1;
}
} else {
return and__32835__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33478__auto__,k__33479__auto__){
var self__ = this;
var this__33478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__33479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33478__auto____$1),self__.__meta),k__33479__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33479__auto__)),null));
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33476__auto__,k__33477__auto__,G__47458){
var self__ = this;
var this__33476__auto____$1 = this;
var pred__47462 = cljs.core.keyword_identical_QMARK_;
var expr__47463 = k__33477__auto__;
if(cljs.core.truth_(pred__47462.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__47463))){
return (new devcards.core.IdentiyOptions(G__47458,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33477__auto__,G__47458),null));
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33481__auto__){
var self__ = this;
var this__33481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;


devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});


devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33468__auto__,G__47458){
var self__ = this;
var this__33468__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__47458,self__.__extmap,self__.__hash));
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33474__auto__,entry__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33475__auto__)){
return cljs.core._assoc.call(null,this__33474__auto____$1,cljs.core._nth.call(null,entry__33475__auto__,(0)),cljs.core._nth.call(null,entry__33475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33474__auto____$1,entry__33475__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__33503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__33503__auto__,writer__33504__auto__){
return cljs.core._write.call(null,writer__33504__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__47460){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__47460),null,cljs.core.dissoc.call(null,G__47460,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__47466){
var map__47469 = p__47466;
var map__47469__$1 = ((((!((map__47469 == null)))?((((map__47469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47469):map__47469);
var devcard_opts = map__47469__$1;
var options = cljs.core.get.call(null,map__47469__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__47469,map__47469__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__47469,map__47469__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33469__auto__,k__33470__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return cljs.core._lookup.call(null,this__33469__auto____$1,k__33470__auto__,null);
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33471__auto__,k47472,else__33472__auto__){
var self__ = this;
var this__33471__auto____$1 = this;
var G__47474 = (((k47472 instanceof cljs.core.Keyword))?k47472.fqn:null);
switch (G__47474) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47472,else__33472__auto__);

}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33483__auto__,writer__33484__auto__,opts__33485__auto__){
var self__ = this;
var this__33483__auto____$1 = this;
var pr_pair__33486__auto__ = ((function (this__33483__auto____$1){
return (function (keyval__33487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,cljs.core.pr_writer,""," ","",opts__33485__auto__,keyval__33487__auto__);
});})(this__33483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,pr_pair__33486__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__33485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;


devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47471){
var self__ = this;
var G__47471__$1 = this;
return (new cljs.core.RecordIter((0),G__47471__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33467__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
return self__.__meta;
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33473__auto__){
var self__ = this;
var this__33473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33464__auto__){
var self__ = this;
var this__33464__auto____$1 = this;
var h__33282__auto__ = self__.__hash;
if(!((h__33282__auto__ == null))){
return h__33282__auto__;
} else {
var h__33282__auto____$1 = cljs.core.hash_imap.call(null,this__33464__auto____$1);
self__.__hash = h__33282__auto____$1;

return h__33282__auto____$1;
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33465__auto__,other__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__32835__auto__ = other__33466__auto__;
if(cljs.core.truth_(and__32835__auto__)){
var and__32835__auto____$1 = (this__33465__auto____$1.constructor === other__33466__auto__.constructor);
if(and__32835__auto____$1){
return cljs.core.equiv_map.call(null,this__33465__auto____$1,other__33466__auto__);
} else {
return and__32835__auto____$1;
}
} else {
return and__32835__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33478__auto__,k__33479__auto__){
var self__ = this;
var this__33478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__33479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33478__auto____$1),self__.__meta),k__33479__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33479__auto__)),null));
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33476__auto__,k__33477__auto__,G__47471){
var self__ = this;
var this__33476__auto____$1 = this;
var pred__47475 = cljs.core.keyword_identical_QMARK_;
var expr__47476 = k__33477__auto__;
if(cljs.core.truth_(pred__47475.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__47476))){
return (new devcards.core.AtomLikeOptions(G__47471,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33477__auto__,G__47471),null));
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33481__auto__){
var self__ = this;
var this__33481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;


devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33468__auto__,G__47471){
var self__ = this;
var this__33468__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__47471,self__.__extmap,self__.__hash));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33474__auto__,entry__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33475__auto__)){
return cljs.core._assoc.call(null,this__33474__auto____$1,cljs.core._nth.call(null,entry__33475__auto__,(0)),cljs.core._nth.call(null,entry__33475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33474__auto____$1,entry__33475__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__33503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__33503__auto__,writer__33504__auto__){
return cljs.core._write.call(null,writer__33504__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__47473){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__47473),null,cljs.core.dissoc.call(null,G__47473,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33469__auto__,k__33470__auto__){
var self__ = this;
var this__33469__auto____$1 = this;
return cljs.core._lookup.call(null,this__33469__auto____$1,k__33470__auto__,null);
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33471__auto__,k47482,else__33472__auto__){
var self__ = this;
var this__33471__auto____$1 = this;
var G__47484 = (((k47482 instanceof cljs.core.Keyword))?k47482.fqn:null);
switch (G__47484) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47482,else__33472__auto__);

}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33483__auto__,writer__33484__auto__,opts__33485__auto__){
var self__ = this;
var this__33483__auto____$1 = this;
var pr_pair__33486__auto__ = ((function (this__33483__auto____$1){
return (function (keyval__33487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,cljs.core.pr_writer,""," ","",opts__33485__auto__,keyval__33487__auto__);
});})(this__33483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33484__auto__,pr_pair__33486__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__33485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;


devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47481){
var self__ = this;
var G__47481__$1 = this;
return (new cljs.core.RecordIter((0),G__47481__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33467__auto__){
var self__ = this;
var this__33467__auto____$1 = this;
return self__.__meta;
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33463__auto__){
var self__ = this;
var this__33463__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33473__auto__){
var self__ = this;
var this__33473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33464__auto__){
var self__ = this;
var this__33464__auto____$1 = this;
var h__33282__auto__ = self__.__hash;
if(!((h__33282__auto__ == null))){
return h__33282__auto__;
} else {
var h__33282__auto____$1 = cljs.core.hash_imap.call(null,this__33464__auto____$1);
self__.__hash = h__33282__auto____$1;

return h__33282__auto____$1;
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__33465__auto__,other__33466__auto__){
var self__ = this;
var this__33465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__32835__auto__ = other__33466__auto__;
if(cljs.core.truth_(and__32835__auto__)){
var and__32835__auto____$1 = (this__33465__auto____$1.constructor === other__33466__auto__.constructor);
if(and__32835__auto____$1){
return cljs.core.equiv_map.call(null,this__33465__auto____$1,other__33466__auto__);
} else {
return and__32835__auto____$1;
}
} else {
return and__32835__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33478__auto__,k__33479__auto__){
var self__ = this;
var this__33478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__33479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33478__auto____$1),self__.__meta),k__33479__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33479__auto__)),null));
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33476__auto__,k__33477__auto__,G__47481){
var self__ = this;
var this__33476__auto____$1 = this;
var pred__47485 = cljs.core.keyword_identical_QMARK_;
var expr__47486 = k__33477__auto__;
if(cljs.core.truth_(pred__47485.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__47486))){
return (new devcards.core.EdnLikeOptions(G__47481,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33477__auto__,G__47481),null));
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33481__auto__){
var self__ = this;
var this__33481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;


devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33468__auto__,G__47481){
var self__ = this;
var this__33468__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__47481,self__.__extmap,self__.__hash));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33474__auto__,entry__33475__auto__){
var self__ = this;
var this__33474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33475__auto__)){
return cljs.core._assoc.call(null,this__33474__auto____$1,cljs.core._nth.call(null,entry__33475__auto__,(0)),cljs.core._nth.call(null,entry__33475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33474__auto____$1,entry__33475__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__33503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__33503__auto__,writer__33504__auto__){
return cljs.core._write.call(null,writer__33504__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__47483){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__47483),null,cljs.core.dissoc.call(null,G__47483,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__32835__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__32835__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__32835__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__47500 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__47500 == null))){
if((false) || (G__47500.devcards$core$IDevcard$)){
return true;
} else {
if((!G__47500.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__47500);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__47500);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;


cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__47503 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__47503__$1 = ((((!((map__47503 == null)))?((((map__47503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47503):map__47503);
var history = cljs.core.get.call(null,map__47503__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__47503__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__47507 = cljs.core.deref.call(null,history_atom);
var map__47507__$1 = ((((!((map__47507 == null)))?((((map__47507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47507):map__47507);
var history = cljs.core.get.call(null,map__47507__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__47507__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__47511 = cljs.core.deref.call(null,history_atom);
var map__47511__$1 = ((((!((map__47511 == null)))?((((map__47511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47511):map__47511);
var history = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__47515 = cljs.core.deref.call(null,history_atom);
var map__47515__$1 = ((((!((map__47515 == null)))?((((map__47515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47515):map__47515);
var history = cljs.core.get.call(null,map__47515__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__33681__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33681__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__32835__auto__ = data_atom;
if(cljs.core.truth_(and__32835__auto__)){
return id;
} else {
return and__32835__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__47517){
var map__47518 = p__47517;
var map__47518__$1 = ((((!((map__47518 == null)))?((((map__47518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47518):map__47518);
var ha = map__47518__$1;
var pointer = cljs.core.get.call(null,map__47518__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__47518__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__47518__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__32847__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__32847__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_47533 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_47533;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__33772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__33773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__33774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__33775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__33776__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__33776__auto__,method_table__33772__auto__,prefer_table__33773__auto__,method_cache__33774__auto__,cached_hierarchy__33775__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs47534 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47534))?sablono.interpreter.attributes.call(null,attrs47534):null),((cljs.core.map_QMARK_.call(null,attrs47534))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47534)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__47535,body){
var map__47539 = p__47535;
var map__47539__$1 = ((((!((map__47539 == null)))?((((map__47539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47539):map__47539);
var message = cljs.core.get.call(null,map__47539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs47541 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs47541))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs47541)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs47541))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47541)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__47542){
var map__47550 = p__47542;
var map__47550__$1 = ((((!((map__47550 == null)))?((((map__47550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47550):map__47550);
var m = map__47550__$1;
var expected = cljs.core.get.call(null,map__47550__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__47550__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__47550__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs47552 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47552))?sablono.interpreter.attributes.call(null,attrs47552):null),((cljs.core.map_QMARK_.call(null,attrs47552))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47552),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs47559 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs47559))?sablono.interpreter.attributes.call(null,attrs47559):null),((cljs.core.map_QMARK_.call(null,attrs47559))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47559)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs47560 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47560))?sablono.interpreter.attributes.call(null,attrs47560):null),((cljs.core.map_QMARK_.call(null,attrs47560))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47560)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__47561){
var map__47562 = p__47561;
var map__47562__$1 = ((((!((map__47562 == null)))?((((map__47562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47562):map__47562);
var testing_contexts = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs47564 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__47562,map__47562__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__47562,map__47562__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__33681__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33681__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47564))?sablono.interpreter.attributes.call(null,attrs47564):null),((cljs.core.map_QMARK_.call(null,attrs47564))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47564)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs47573 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__47574,p__47575){
var map__47576 = p__47574;
var map__47576__$1 = ((((!((map__47576 == null)))?((((map__47576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47576):map__47576);
var last_context = cljs.core.get.call(null,map__47576__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__47576__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__47577 = p__47575;
var i = cljs.core.nth.call(null,vec__47577,(0),null);
var t = cljs.core.nth.call(null,vec__47577,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__33681__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__33681__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47573))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs47573)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs47573))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47573)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__47593){
var map__47594 = p__47593;
var map__47594__$1 = ((((!((map__47594 == null)))?((((map__47594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47594):map__47594);
var type = cljs.core.get.call(null,map__47594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__47592 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__47592__$1 = ((((!((map__47592 == null)))?((((map__47592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47592):map__47592);
var fail = cljs.core.get.call(null,map__47592__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__47592__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__47592__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (p__47597){
var map__47598 = p__47597;
var map__47598__$1 = ((((!((map__47598 == null)))?((((map__47598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47598):map__47598);
var type = cljs.core.get.call(null,map__47598__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1){
return (function (p__47600){
var map__47601 = p__47600;
var map__47601__$1 = ((((!((map__47601 == null)))?((((map__47601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47601):map__47601);
var type = cljs.core.get.call(null,map__47601__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__47592,map__47592__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__32847__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_47691){
var state_val_47692 = (state_47691[(1)]);
if((state_val_47692 === (7))){
var state_47691__$1 = state_47691;
var statearr_47693_47742 = state_47691__$1;
(statearr_47693_47742[(2)] = false);

(statearr_47693_47742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (20))){
var inst_47630 = (state_47691[(7)]);
var inst_47649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47630);
var state_47691__$1 = state_47691;
var statearr_47694_47743 = state_47691__$1;
(statearr_47694_47743[(2)] = inst_47649);

(statearr_47694_47743[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (27))){
var inst_47666 = (state_47691[(8)]);
var inst_47654 = (state_47691[(9)]);
var inst_47670 = inst_47654.call(null,inst_47666);
var state_47691__$1 = state_47691;
var statearr_47695_47744 = state_47691__$1;
(statearr_47695_47744[(2)] = inst_47670);

(statearr_47695_47744[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (1))){
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47691__$1,(2),devcards.core.test_channel);
} else {
if((state_val_47692 === (24))){
var state_47691__$1 = state_47691;
var statearr_47696_47745 = state_47691__$1;
(statearr_47696_47745[(2)] = null);

(statearr_47696_47745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (4))){
var state_47691__$1 = state_47691;
var statearr_47697_47746 = state_47691__$1;
(statearr_47697_47746[(2)] = false);

(statearr_47697_47746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (15))){
var state_47691__$1 = state_47691;
var statearr_47698_47747 = state_47691__$1;
(statearr_47698_47747[(2)] = false);

(statearr_47698_47747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (21))){
var inst_47630 = (state_47691[(7)]);
var state_47691__$1 = state_47691;
var statearr_47699_47748 = state_47691__$1;
(statearr_47699_47748[(2)] = inst_47630);

(statearr_47699_47748[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (13))){
var inst_47689 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47691__$1,inst_47689);
} else {
if((state_val_47692 === (22))){
var inst_47653 = (state_47691[(10)]);
var inst_47652 = (state_47691[(2)]);
var inst_47653__$1 = cljs.core.get.call(null,inst_47652,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_47654 = cljs.core.get.call(null,inst_47652,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_47691__$1 = (function (){var statearr_47700 = state_47691;
(statearr_47700[(9)] = inst_47654);

(statearr_47700[(10)] = inst_47653__$1);

return statearr_47700;
})();
if(cljs.core.truth_(inst_47653__$1)){
var statearr_47701_47749 = state_47691__$1;
(statearr_47701_47749[(1)] = (23));

} else {
var statearr_47702_47750 = state_47691__$1;
(statearr_47702_47750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (29))){
var inst_47680 = (state_47691[(2)]);
var inst_47681 = cljs.test.clear_env_BANG_.call(null);
var state_47691__$1 = (function (){var statearr_47703 = state_47691;
(statearr_47703[(11)] = inst_47680);

(statearr_47703[(12)] = inst_47681);

return statearr_47703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47691__$1,(30),devcards.core.test_channel);
} else {
if((state_val_47692 === (6))){
var state_47691__$1 = state_47691;
var statearr_47704_47751 = state_47691__$1;
(statearr_47704_47751[(2)] = true);

(statearr_47704_47751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (28))){
var inst_47654 = (state_47691[(9)]);
var inst_47672 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_47673 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_47674 = cljs.core.PersistentHashMap.fromArrays(inst_47672,inst_47673);
var inst_47675 = devcards.core.collect_test.call(null,inst_47674);
var inst_47676 = cljs.test.get_current_env.call(null);
var inst_47677 = cljs.core.assoc.call(null,inst_47676,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_47678 = inst_47654.call(null,inst_47677);
var state_47691__$1 = (function (){var statearr_47705 = state_47691;
(statearr_47705[(13)] = inst_47675);

return statearr_47705;
})();
var statearr_47706_47752 = state_47691__$1;
(statearr_47706_47752[(2)] = inst_47678);

(statearr_47706_47752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (25))){
var inst_47687 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47707_47753 = state_47691__$1;
(statearr_47707_47753[(2)] = inst_47687);

(statearr_47707_47753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (17))){
var state_47691__$1 = state_47691;
var statearr_47708_47754 = state_47691__$1;
(statearr_47708_47754[(2)] = true);

(statearr_47708_47754[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (3))){
var inst_47607 = (state_47691[(14)]);
var inst_47612 = inst_47607.cljs$lang$protocol_mask$partition0$;
var inst_47613 = (inst_47612 & (64));
var inst_47614 = inst_47607.cljs$core$ISeq$;
var inst_47615 = (inst_47613) || (inst_47614);
var state_47691__$1 = state_47691;
if(cljs.core.truth_(inst_47615)){
var statearr_47709_47755 = state_47691__$1;
(statearr_47709_47755[(1)] = (6));

} else {
var statearr_47710_47756 = state_47691__$1;
(statearr_47710_47756[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (12))){
var inst_47630 = (state_47691[(7)]);
var inst_47634 = (inst_47630 == null);
var inst_47635 = cljs.core.not.call(null,inst_47634);
var state_47691__$1 = state_47691;
if(inst_47635){
var statearr_47711_47757 = state_47691__$1;
(statearr_47711_47757[(1)] = (14));

} else {
var statearr_47712_47758 = state_47691__$1;
(statearr_47712_47758[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (2))){
var inst_47607 = (state_47691[(14)]);
var inst_47607__$1 = (state_47691[(2)]);
var inst_47609 = (inst_47607__$1 == null);
var inst_47610 = cljs.core.not.call(null,inst_47609);
var state_47691__$1 = (function (){var statearr_47713 = state_47691;
(statearr_47713[(14)] = inst_47607__$1);

return statearr_47713;
})();
if(inst_47610){
var statearr_47714_47759 = state_47691__$1;
(statearr_47714_47759[(1)] = (3));

} else {
var statearr_47715_47760 = state_47691__$1;
(statearr_47715_47760[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (23))){
var inst_47659 = (state_47691[(15)]);
var inst_47653 = (state_47691[(10)]);
var inst_47659__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_47660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47661 = devcards.core.run_card_tests.call(null,inst_47653);
var inst_47662 = [inst_47661,inst_47659__$1];
var inst_47663 = (new cljs.core.PersistentVector(null,2,(5),inst_47660,inst_47662,null));
var state_47691__$1 = (function (){var statearr_47716 = state_47691;
(statearr_47716[(15)] = inst_47659__$1);

return statearr_47716;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47691__$1,(26),inst_47663);
} else {
if((state_val_47692 === (19))){
var inst_47644 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47717_47761 = state_47691__$1;
(statearr_47717_47761[(2)] = inst_47644);

(statearr_47717_47761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (11))){
var inst_47607 = (state_47691[(14)]);
var inst_47627 = (state_47691[(2)]);
var inst_47628 = cljs.core.get.call(null,inst_47627,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_47629 = cljs.core.get.call(null,inst_47627,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_47630 = inst_47607;
var state_47691__$1 = (function (){var statearr_47718 = state_47691;
(statearr_47718[(16)] = inst_47629);

(statearr_47718[(17)] = inst_47628);

(statearr_47718[(7)] = inst_47630);

return statearr_47718;
})();
var statearr_47719_47762 = state_47691__$1;
(statearr_47719_47762[(2)] = null);

(statearr_47719_47762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (9))){
var inst_47607 = (state_47691[(14)]);
var inst_47624 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47607);
var state_47691__$1 = state_47691;
var statearr_47720_47763 = state_47691__$1;
(statearr_47720_47763[(2)] = inst_47624);

(statearr_47720_47763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (5))){
var inst_47622 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
if(cljs.core.truth_(inst_47622)){
var statearr_47721_47764 = state_47691__$1;
(statearr_47721_47764[(1)] = (9));

} else {
var statearr_47722_47765 = state_47691__$1;
(statearr_47722_47765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (14))){
var inst_47630 = (state_47691[(7)]);
var inst_47637 = inst_47630.cljs$lang$protocol_mask$partition0$;
var inst_47638 = (inst_47637 & (64));
var inst_47639 = inst_47630.cljs$core$ISeq$;
var inst_47640 = (inst_47638) || (inst_47639);
var state_47691__$1 = state_47691;
if(cljs.core.truth_(inst_47640)){
var statearr_47723_47766 = state_47691__$1;
(statearr_47723_47766[(1)] = (17));

} else {
var statearr_47724_47767 = state_47691__$1;
(statearr_47724_47767[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (26))){
var inst_47659 = (state_47691[(15)]);
var inst_47665 = (state_47691[(2)]);
var inst_47666 = cljs.core.nth.call(null,inst_47665,(0),null);
var inst_47667 = cljs.core.nth.call(null,inst_47665,(1),null);
var inst_47668 = cljs.core.not_EQ_.call(null,inst_47667,inst_47659);
var state_47691__$1 = (function (){var statearr_47725 = state_47691;
(statearr_47725[(8)] = inst_47666);

return statearr_47725;
})();
if(inst_47668){
var statearr_47726_47768 = state_47691__$1;
(statearr_47726_47768[(1)] = (27));

} else {
var statearr_47727_47769 = state_47691__$1;
(statearr_47727_47769[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (16))){
var inst_47647 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
if(cljs.core.truth_(inst_47647)){
var statearr_47728_47770 = state_47691__$1;
(statearr_47728_47770[(1)] = (20));

} else {
var statearr_47729_47771 = state_47691__$1;
(statearr_47729_47771[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (30))){
var inst_47683 = (state_47691[(2)]);
var inst_47630 = inst_47683;
var state_47691__$1 = (function (){var statearr_47730 = state_47691;
(statearr_47730[(7)] = inst_47630);

return statearr_47730;
})();
var statearr_47731_47772 = state_47691__$1;
(statearr_47731_47772[(2)] = null);

(statearr_47731_47772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (10))){
var inst_47607 = (state_47691[(14)]);
var state_47691__$1 = state_47691;
var statearr_47732_47773 = state_47691__$1;
(statearr_47732_47773[(2)] = inst_47607);

(statearr_47732_47773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (18))){
var state_47691__$1 = state_47691;
var statearr_47733_47774 = state_47691__$1;
(statearr_47733_47774[(2)] = false);

(statearr_47733_47774[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (8))){
var inst_47619 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47734_47775 = state_47691__$1;
(statearr_47734_47775[(2)] = inst_47619);

(statearr_47734_47775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var devcards$core$state_machine__42318__auto__ = null;
var devcards$core$state_machine__42318__auto____0 = (function (){
var statearr_47738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47738[(0)] = devcards$core$state_machine__42318__auto__);

(statearr_47738[(1)] = (1));

return statearr_47738;
});
var devcards$core$state_machine__42318__auto____1 = (function (state_47691){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_47691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e47739){if((e47739 instanceof Object)){
var ex__42321__auto__ = e47739;
var statearr_47740_47776 = state_47691;
(statearr_47740_47776[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47777 = state_47691;
state_47691 = G__47777;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
devcards$core$state_machine__42318__auto__ = function(state_47691){
switch(arguments.length){
case 0:
return devcards$core$state_machine__42318__auto____0.call(this);
case 1:
return devcards$core$state_machine__42318__auto____1.call(this,state_47691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__42318__auto____0;
devcards$core$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__42318__auto____1;
return devcards$core$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_47741 = f__42430__auto__.call(null);
(statearr_47741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_47741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__46494__auto___47782 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__46494__auto___47782);
}

var seq__47778_47783 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__47779_47784 = null;
var count__47780_47785 = (0);
var i__47781_47786 = (0);
while(true){
if((i__47781_47786 < count__47780_47785)){
var property__46495__auto___47787 = cljs.core._nth.call(null,chunk__47779_47784,i__47781_47786);
if(cljs.core.truth_((base__46494__auto___47782[property__46495__auto___47787]))){
(devcards.core.TestDevcard.prototype[property__46495__auto___47787] = (base__46494__auto___47782[property__46495__auto___47787]));
} else {
}

var G__47788 = seq__47778_47783;
var G__47789 = chunk__47779_47784;
var G__47790 = count__47780_47785;
var G__47791 = (i__47781_47786 + (1));
seq__47778_47783 = G__47788;
chunk__47779_47784 = G__47789;
count__47780_47785 = G__47790;
i__47781_47786 = G__47791;
continue;
} else {
var temp__4657__auto___47792 = cljs.core.seq.call(null,seq__47778_47783);
if(temp__4657__auto___47792){
var seq__47778_47793__$1 = temp__4657__auto___47792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47778_47793__$1)){
var c__33658__auto___47794 = cljs.core.chunk_first.call(null,seq__47778_47793__$1);
var G__47795 = cljs.core.chunk_rest.call(null,seq__47778_47793__$1);
var G__47796 = c__33658__auto___47794;
var G__47797 = cljs.core.count.call(null,c__33658__auto___47794);
var G__47798 = (0);
seq__47778_47783 = G__47795;
chunk__47779_47784 = G__47796;
count__47780_47785 = G__47797;
i__47781_47786 = G__47798;
continue;
} else {
var property__46495__auto___47799 = cljs.core.first.call(null,seq__47778_47793__$1);
if(cljs.core.truth_((base__46494__auto___47782[property__46495__auto___47799]))){
(devcards.core.TestDevcard.prototype[property__46495__auto___47799] = (base__46494__auto___47782[property__46495__auto___47799]));
} else {
}

var G__47800 = cljs.core.next.call(null,seq__47778_47793__$1);
var G__47801 = null;
var G__47802 = (0);
var G__47803 = (0);
seq__47778_47783 = G__47800;
chunk__47779_47784 = G__47801;
count__47780_47785 = G__47802;
i__47781_47786 = G__47803;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__33929__auto__ = [];
var len__33922__auto___47808 = arguments.length;
var i__33923__auto___47809 = (0);
while(true){
if((i__33923__auto___47809 < len__33922__auto___47808)){
args__33929__auto__.push((arguments[i__33923__auto___47809]));

var G__47810 = (i__33923__auto___47809 + (1));
i__33923__auto___47809 = G__47810;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core47805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core47805 = (function (test_thunks,meta47806){
this.test_thunks = test_thunks;
this.meta47806 = meta47806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

devcards.core.t_devcards$core47805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47807,meta47806__$1){
var self__ = this;
var _47807__$1 = this;
return (new devcards.core.t_devcards$core47805(self__.test_thunks,meta47806__$1));
});


devcards.core.t_devcards$core47805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47807){
var self__ = this;
var _47807__$1 = this;
return self__.meta47806;
});


devcards.core.t_devcards$core47805.prototype.devcards$core$IDevcard$ = true;


devcards.core.t_devcards$core47805.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core47805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta47806","meta47806",1101276560,null)], null);
});

devcards.core.t_devcards$core47805.cljs$lang$type = true;

devcards.core.t_devcards$core47805.cljs$lang$ctorStr = "devcards.core/t_devcards$core47805";

devcards.core.t_devcards$core47805.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"devcards.core/t_devcards$core47805");
});

devcards.core.__GT_t_devcards$core47805 = (function devcards$core$__GT_t_devcards$core47805(test_thunks__$1,meta47806){
return (new devcards.core.t_devcards$core47805(test_thunks__$1,meta47806));
});

}

return (new devcards.core.t_devcards$core47805(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq47804){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47804));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs47812 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47812))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs47812)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs47812))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47812)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs47814 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47814))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs47814)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs47814))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47814)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_47844){
var state_val_47845 = (state_47844[(1)]);
if((state_val_47845 === (1))){
var inst_47835 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_47844__$1 = state_47844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47844__$1,(2),inst_47835);
} else {
if((state_val_47845 === (2))){
var inst_47837 = (state_47844[(2)]);
var inst_47838 = cljs.core.async.timeout.call(null,(100));
var state_47844__$1 = (function (){var statearr_47846 = state_47844;
(statearr_47846[(7)] = inst_47837);

return statearr_47846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47844__$1,(3),inst_47838);
} else {
if((state_val_47845 === (3))){
var inst_47840 = (state_47844[(2)]);
var inst_47841 = (function (){return ((function (inst_47840,state_val_47845,c__42429__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_47840,state_val_47845,c__42429__auto__))
})();
var inst_47842 = setTimeout(inst_47841,(0));
var state_47844__$1 = (function (){var statearr_47847 = state_47844;
(statearr_47847[(8)] = inst_47840);

return statearr_47847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47844__$1,inst_47842);
} else {
return null;
}
}
}
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__42318__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__42318__auto____0 = (function (){
var statearr_47851 = [null,null,null,null,null,null,null,null,null];
(statearr_47851[(0)] = devcards$core$mount_namespace_$_state_machine__42318__auto__);

(statearr_47851[(1)] = (1));

return statearr_47851;
});
var devcards$core$mount_namespace_$_state_machine__42318__auto____1 = (function (state_47844){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_47844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e47852){if((e47852 instanceof Object)){
var ex__42321__auto__ = e47852;
var statearr_47853_47855 = state_47844;
(statearr_47853_47855[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47856 = state_47844;
state_47844 = G__47856;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__42318__auto__ = function(state_47844){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__42318__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__42318__auto____1.call(this,state_47844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__42318__auto____0;
devcards$core$mount_namespace_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__42318__auto____1;
return devcards$core$mount_namespace_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_47854 = f__42430__auto__.call(null);
(statearr_47854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_47854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1479316903537