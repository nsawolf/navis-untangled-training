// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__46164__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__46161 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__46162 = cljs.core.seq.call(null,vec__46161);
var first__46163 = cljs.core.first.call(null,seq__46162);
var seq__46162__$1 = cljs.core.next.call(null,seq__46162);
var tag = first__46163;
var body = seq__46162__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__46164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46165__i = 0, G__46165__a = new Array(arguments.length -  0);
while (G__46165__i < G__46165__a.length) {G__46165__a[G__46165__i] = arguments[G__46165__i + 0]; ++G__46165__i;}
  args = new cljs.core.IndexedSeq(G__46165__a,0);
} 
return G__46164__delegate.call(this,args);};
G__46164.cljs$lang$maxFixedArity = 0;
G__46164.cljs$lang$applyTo = (function (arglist__46166){
var args = cljs.core.seq(arglist__46166);
return G__46164__delegate(args);
});
G__46164.cljs$core$IFn$_invoke$arity$variadic = G__46164__delegate;
return G__46164;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__33627__auto__ = (function sablono$core$update_arglists_$_iter__46171(s__46172){
return (new cljs.core.LazySeq(null,(function (){
var s__46172__$1 = s__46172;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46172__$1);
if(temp__4657__auto__){
var s__46172__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46172__$2)){
var c__33625__auto__ = cljs.core.chunk_first.call(null,s__46172__$2);
var size__33626__auto__ = cljs.core.count.call(null,c__33625__auto__);
var b__46174 = cljs.core.chunk_buffer.call(null,size__33626__auto__);
if((function (){var i__46173 = (0);
while(true){
if((i__46173 < size__33626__auto__)){
var args = cljs.core._nth.call(null,c__33625__auto__,i__46173);
cljs.core.chunk_append.call(null,b__46174,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__46175 = (i__46173 + (1));
i__46173 = G__46175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46174),sablono$core$update_arglists_$_iter__46171.call(null,cljs.core.chunk_rest.call(null,s__46172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46174),null);
}
} else {
var args = cljs.core.first.call(null,s__46172__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__46171.call(null,cljs.core.rest.call(null,s__46172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33627__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__33929__auto__ = [];
var len__33922__auto___46181 = arguments.length;
var i__33923__auto___46182 = (0);
while(true){
if((i__33923__auto___46182 < len__33922__auto___46181)){
args__33929__auto__.push((arguments[i__33923__auto___46182]));

var G__46183 = (i__33923__auto___46182 + (1));
i__33923__auto___46182 = G__46183;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__33627__auto__ = (function sablono$core$iter__46177(s__46178){
return (new cljs.core.LazySeq(null,(function (){
var s__46178__$1 = s__46178;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46178__$1);
if(temp__4657__auto__){
var s__46178__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46178__$2)){
var c__33625__auto__ = cljs.core.chunk_first.call(null,s__46178__$2);
var size__33626__auto__ = cljs.core.count.call(null,c__33625__auto__);
var b__46180 = cljs.core.chunk_buffer.call(null,size__33626__auto__);
if((function (){var i__46179 = (0);
while(true){
if((i__46179 < size__33626__auto__)){
var style = cljs.core._nth.call(null,c__33625__auto__,i__46179);
cljs.core.chunk_append.call(null,b__46180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__46184 = (i__46179 + (1));
i__46179 = G__46184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46180),sablono$core$iter__46177.call(null,cljs.core.chunk_rest.call(null,s__46178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46180),null);
}
} else {
var style = cljs.core.first.call(null,s__46178__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__46177.call(null,cljs.core.rest.call(null,s__46178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33627__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq46176){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46176));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to46185 = (function sablono$core$link_to46185(var_args){
var args__33929__auto__ = [];
var len__33922__auto___46188 = arguments.length;
var i__33923__auto___46189 = (0);
while(true){
if((i__33923__auto___46189 < len__33922__auto___46188)){
args__33929__auto__.push((arguments[i__33923__auto___46189]));

var G__46190 = (i__33923__auto___46189 + (1));
i__33923__auto___46189 = G__46190;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((1) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to46185.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33930__auto__);
});

sablono.core.link_to46185.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to46185.cljs$lang$maxFixedArity = (1);

sablono.core.link_to46185.cljs$lang$applyTo = (function (seq46186){
var G__46187 = cljs.core.first.call(null,seq46186);
var seq46186__$1 = cljs.core.next.call(null,seq46186);
return sablono.core.link_to46185.cljs$core$IFn$_invoke$arity$variadic(G__46187,seq46186__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to46185);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46191 = (function sablono$core$mail_to46191(var_args){
var args__33929__auto__ = [];
var len__33922__auto___46198 = arguments.length;
var i__33923__auto___46199 = (0);
while(true){
if((i__33923__auto___46199 < len__33922__auto___46198)){
args__33929__auto__.push((arguments[i__33923__auto___46199]));

var G__46200 = (i__33923__auto___46199 + (1));
i__33923__auto___46199 = G__46200;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((1) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to46191.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33930__auto__);
});

sablono.core.mail_to46191.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46194){
var vec__46195 = p__46194;
var content = cljs.core.nth.call(null,vec__46195,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__32847__auto__ = content;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to46191.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to46191.cljs$lang$applyTo = (function (seq46192){
var G__46193 = cljs.core.first.call(null,seq46192);
var seq46192__$1 = cljs.core.next.call(null,seq46192);
return sablono.core.mail_to46191.cljs$core$IFn$_invoke$arity$variadic(G__46193,seq46192__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to46191);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46201 = (function sablono$core$unordered_list46201(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__33627__auto__ = (function sablono$core$unordered_list46201_$_iter__46206(s__46207){
return (new cljs.core.LazySeq(null,(function (){
var s__46207__$1 = s__46207;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46207__$1);
if(temp__4657__auto__){
var s__46207__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46207__$2)){
var c__33625__auto__ = cljs.core.chunk_first.call(null,s__46207__$2);
var size__33626__auto__ = cljs.core.count.call(null,c__33625__auto__);
var b__46209 = cljs.core.chunk_buffer.call(null,size__33626__auto__);
if((function (){var i__46208 = (0);
while(true){
if((i__46208 < size__33626__auto__)){
var x = cljs.core._nth.call(null,c__33625__auto__,i__46208);
cljs.core.chunk_append.call(null,b__46209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46210 = (i__46208 + (1));
i__46208 = G__46210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46209),sablono$core$unordered_list46201_$_iter__46206.call(null,cljs.core.chunk_rest.call(null,s__46207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46209),null);
}
} else {
var x = cljs.core.first.call(null,s__46207__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list46201_$_iter__46206.call(null,cljs.core.rest.call(null,s__46207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33627__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list46201);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46211 = (function sablono$core$ordered_list46211(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__33627__auto__ = (function sablono$core$ordered_list46211_$_iter__46216(s__46217){
return (new cljs.core.LazySeq(null,(function (){
var s__46217__$1 = s__46217;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46217__$1);
if(temp__4657__auto__){
var s__46217__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46217__$2)){
var c__33625__auto__ = cljs.core.chunk_first.call(null,s__46217__$2);
var size__33626__auto__ = cljs.core.count.call(null,c__33625__auto__);
var b__46219 = cljs.core.chunk_buffer.call(null,size__33626__auto__);
if((function (){var i__46218 = (0);
while(true){
if((i__46218 < size__33626__auto__)){
var x = cljs.core._nth.call(null,c__33625__auto__,i__46218);
cljs.core.chunk_append.call(null,b__46219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46220 = (i__46218 + (1));
i__46218 = G__46220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46219),sablono$core$ordered_list46211_$_iter__46216.call(null,cljs.core.chunk_rest.call(null,s__46217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46219),null);
}
} else {
var x = cljs.core.first.call(null,s__46217__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list46211_$_iter__46216.call(null,cljs.core.rest.call(null,s__46217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33627__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list46211);
/**
 * Create an image element.
 */
sablono.core.image46221 = (function sablono$core$image46221(var_args){
var args46222 = [];
var len__33922__auto___46225 = arguments.length;
var i__33923__auto___46226 = (0);
while(true){
if((i__33923__auto___46226 < len__33922__auto___46225)){
args46222.push((arguments[i__33923__auto___46226]));

var G__46227 = (i__33923__auto___46226 + (1));
i__33923__auto___46226 = G__46227;
continue;
} else {
}
break;
}

var G__46224 = args46222.length;
switch (G__46224) {
case 1:
return sablono.core.image46221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46222.length)].join('')));

}
});

sablono.core.image46221.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image46221.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image46221.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image46221);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__46229_SHARP_,p2__46230_SHARP_){
return [cljs.core.str(p1__46229_SHARP_),cljs.core.str("["),cljs.core.str(p2__46230_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__46231_SHARP_,p2__46232_SHARP_){
return [cljs.core.str(p1__46231_SHARP_),cljs.core.str("-"),cljs.core.str(p2__46232_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__32847__auto__ = value;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field46233 = (function sablono$core$color_field46233(var_args){
var args46234 = [];
var len__33922__auto___46301 = arguments.length;
var i__33923__auto___46302 = (0);
while(true){
if((i__33923__auto___46302 < len__33922__auto___46301)){
args46234.push((arguments[i__33923__auto___46302]));

var G__46303 = (i__33923__auto___46302 + (1));
i__33923__auto___46302 = G__46303;
continue;
} else {
}
break;
}

var G__46236 = args46234.length;
switch (G__46236) {
case 1:
return sablono.core.color_field46233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46234.length)].join('')));

}
});

sablono.core.color_field46233.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.color_field46233.call(null,name__46148__auto__,null);
});

sablono.core.color_field46233.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.color_field46233.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field46233);

/**
 * Creates a date input field.
 */
sablono.core.date_field46237 = (function sablono$core$date_field46237(var_args){
var args46238 = [];
var len__33922__auto___46305 = arguments.length;
var i__33923__auto___46306 = (0);
while(true){
if((i__33923__auto___46306 < len__33922__auto___46305)){
args46238.push((arguments[i__33923__auto___46306]));

var G__46307 = (i__33923__auto___46306 + (1));
i__33923__auto___46306 = G__46307;
continue;
} else {
}
break;
}

var G__46240 = args46238.length;
switch (G__46240) {
case 1:
return sablono.core.date_field46237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46238.length)].join('')));

}
});

sablono.core.date_field46237.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.date_field46237.call(null,name__46148__auto__,null);
});

sablono.core.date_field46237.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.date_field46237.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field46237);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46241 = (function sablono$core$datetime_field46241(var_args){
var args46242 = [];
var len__33922__auto___46309 = arguments.length;
var i__33923__auto___46310 = (0);
while(true){
if((i__33923__auto___46310 < len__33922__auto___46309)){
args46242.push((arguments[i__33923__auto___46310]));

var G__46311 = (i__33923__auto___46310 + (1));
i__33923__auto___46310 = G__46311;
continue;
} else {
}
break;
}

var G__46244 = args46242.length;
switch (G__46244) {
case 1:
return sablono.core.datetime_field46241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46242.length)].join('')));

}
});

sablono.core.datetime_field46241.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.datetime_field46241.call(null,name__46148__auto__,null);
});

sablono.core.datetime_field46241.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.datetime_field46241.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field46241);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46245 = (function sablono$core$datetime_local_field46245(var_args){
var args46246 = [];
var len__33922__auto___46313 = arguments.length;
var i__33923__auto___46314 = (0);
while(true){
if((i__33923__auto___46314 < len__33922__auto___46313)){
args46246.push((arguments[i__33923__auto___46314]));

var G__46315 = (i__33923__auto___46314 + (1));
i__33923__auto___46314 = G__46315;
continue;
} else {
}
break;
}

var G__46248 = args46246.length;
switch (G__46248) {
case 1:
return sablono.core.datetime_local_field46245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46246.length)].join('')));

}
});

sablono.core.datetime_local_field46245.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.datetime_local_field46245.call(null,name__46148__auto__,null);
});

sablono.core.datetime_local_field46245.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.datetime_local_field46245.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field46245);

/**
 * Creates a email input field.
 */
sablono.core.email_field46249 = (function sablono$core$email_field46249(var_args){
var args46250 = [];
var len__33922__auto___46317 = arguments.length;
var i__33923__auto___46318 = (0);
while(true){
if((i__33923__auto___46318 < len__33922__auto___46317)){
args46250.push((arguments[i__33923__auto___46318]));

var G__46319 = (i__33923__auto___46318 + (1));
i__33923__auto___46318 = G__46319;
continue;
} else {
}
break;
}

var G__46252 = args46250.length;
switch (G__46252) {
case 1:
return sablono.core.email_field46249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46250.length)].join('')));

}
});

sablono.core.email_field46249.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.email_field46249.call(null,name__46148__auto__,null);
});

sablono.core.email_field46249.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.email_field46249.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field46249);

/**
 * Creates a file input field.
 */
sablono.core.file_field46253 = (function sablono$core$file_field46253(var_args){
var args46254 = [];
var len__33922__auto___46321 = arguments.length;
var i__33923__auto___46322 = (0);
while(true){
if((i__33923__auto___46322 < len__33922__auto___46321)){
args46254.push((arguments[i__33923__auto___46322]));

var G__46323 = (i__33923__auto___46322 + (1));
i__33923__auto___46322 = G__46323;
continue;
} else {
}
break;
}

var G__46256 = args46254.length;
switch (G__46256) {
case 1:
return sablono.core.file_field46253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46254.length)].join('')));

}
});

sablono.core.file_field46253.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.file_field46253.call(null,name__46148__auto__,null);
});

sablono.core.file_field46253.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.file_field46253.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field46253);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46257 = (function sablono$core$hidden_field46257(var_args){
var args46258 = [];
var len__33922__auto___46325 = arguments.length;
var i__33923__auto___46326 = (0);
while(true){
if((i__33923__auto___46326 < len__33922__auto___46325)){
args46258.push((arguments[i__33923__auto___46326]));

var G__46327 = (i__33923__auto___46326 + (1));
i__33923__auto___46326 = G__46327;
continue;
} else {
}
break;
}

var G__46260 = args46258.length;
switch (G__46260) {
case 1:
return sablono.core.hidden_field46257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46258.length)].join('')));

}
});

sablono.core.hidden_field46257.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.hidden_field46257.call(null,name__46148__auto__,null);
});

sablono.core.hidden_field46257.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.hidden_field46257.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field46257);

/**
 * Creates a month input field.
 */
sablono.core.month_field46261 = (function sablono$core$month_field46261(var_args){
var args46262 = [];
var len__33922__auto___46329 = arguments.length;
var i__33923__auto___46330 = (0);
while(true){
if((i__33923__auto___46330 < len__33922__auto___46329)){
args46262.push((arguments[i__33923__auto___46330]));

var G__46331 = (i__33923__auto___46330 + (1));
i__33923__auto___46330 = G__46331;
continue;
} else {
}
break;
}

var G__46264 = args46262.length;
switch (G__46264) {
case 1:
return sablono.core.month_field46261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46262.length)].join('')));

}
});

sablono.core.month_field46261.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.month_field46261.call(null,name__46148__auto__,null);
});

sablono.core.month_field46261.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.month_field46261.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field46261);

/**
 * Creates a number input field.
 */
sablono.core.number_field46265 = (function sablono$core$number_field46265(var_args){
var args46266 = [];
var len__33922__auto___46333 = arguments.length;
var i__33923__auto___46334 = (0);
while(true){
if((i__33923__auto___46334 < len__33922__auto___46333)){
args46266.push((arguments[i__33923__auto___46334]));

var G__46335 = (i__33923__auto___46334 + (1));
i__33923__auto___46334 = G__46335;
continue;
} else {
}
break;
}

var G__46268 = args46266.length;
switch (G__46268) {
case 1:
return sablono.core.number_field46265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46266.length)].join('')));

}
});

sablono.core.number_field46265.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.number_field46265.call(null,name__46148__auto__,null);
});

sablono.core.number_field46265.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.number_field46265.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field46265);

/**
 * Creates a password input field.
 */
sablono.core.password_field46269 = (function sablono$core$password_field46269(var_args){
var args46270 = [];
var len__33922__auto___46337 = arguments.length;
var i__33923__auto___46338 = (0);
while(true){
if((i__33923__auto___46338 < len__33922__auto___46337)){
args46270.push((arguments[i__33923__auto___46338]));

var G__46339 = (i__33923__auto___46338 + (1));
i__33923__auto___46338 = G__46339;
continue;
} else {
}
break;
}

var G__46272 = args46270.length;
switch (G__46272) {
case 1:
return sablono.core.password_field46269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46270.length)].join('')));

}
});

sablono.core.password_field46269.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.password_field46269.call(null,name__46148__auto__,null);
});

sablono.core.password_field46269.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.password_field46269.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field46269);

/**
 * Creates a range input field.
 */
sablono.core.range_field46273 = (function sablono$core$range_field46273(var_args){
var args46274 = [];
var len__33922__auto___46341 = arguments.length;
var i__33923__auto___46342 = (0);
while(true){
if((i__33923__auto___46342 < len__33922__auto___46341)){
args46274.push((arguments[i__33923__auto___46342]));

var G__46343 = (i__33923__auto___46342 + (1));
i__33923__auto___46342 = G__46343;
continue;
} else {
}
break;
}

var G__46276 = args46274.length;
switch (G__46276) {
case 1:
return sablono.core.range_field46273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46274.length)].join('')));

}
});

sablono.core.range_field46273.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.range_field46273.call(null,name__46148__auto__,null);
});

sablono.core.range_field46273.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.range_field46273.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field46273);

/**
 * Creates a search input field.
 */
sablono.core.search_field46277 = (function sablono$core$search_field46277(var_args){
var args46278 = [];
var len__33922__auto___46345 = arguments.length;
var i__33923__auto___46346 = (0);
while(true){
if((i__33923__auto___46346 < len__33922__auto___46345)){
args46278.push((arguments[i__33923__auto___46346]));

var G__46347 = (i__33923__auto___46346 + (1));
i__33923__auto___46346 = G__46347;
continue;
} else {
}
break;
}

var G__46280 = args46278.length;
switch (G__46280) {
case 1:
return sablono.core.search_field46277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46278.length)].join('')));

}
});

sablono.core.search_field46277.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.search_field46277.call(null,name__46148__auto__,null);
});

sablono.core.search_field46277.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.search_field46277.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field46277);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46281 = (function sablono$core$tel_field46281(var_args){
var args46282 = [];
var len__33922__auto___46349 = arguments.length;
var i__33923__auto___46350 = (0);
while(true){
if((i__33923__auto___46350 < len__33922__auto___46349)){
args46282.push((arguments[i__33923__auto___46350]));

var G__46351 = (i__33923__auto___46350 + (1));
i__33923__auto___46350 = G__46351;
continue;
} else {
}
break;
}

var G__46284 = args46282.length;
switch (G__46284) {
case 1:
return sablono.core.tel_field46281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46282.length)].join('')));

}
});

sablono.core.tel_field46281.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.tel_field46281.call(null,name__46148__auto__,null);
});

sablono.core.tel_field46281.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.tel_field46281.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field46281);

/**
 * Creates a text input field.
 */
sablono.core.text_field46285 = (function sablono$core$text_field46285(var_args){
var args46286 = [];
var len__33922__auto___46353 = arguments.length;
var i__33923__auto___46354 = (0);
while(true){
if((i__33923__auto___46354 < len__33922__auto___46353)){
args46286.push((arguments[i__33923__auto___46354]));

var G__46355 = (i__33923__auto___46354 + (1));
i__33923__auto___46354 = G__46355;
continue;
} else {
}
break;
}

var G__46288 = args46286.length;
switch (G__46288) {
case 1:
return sablono.core.text_field46285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46286.length)].join('')));

}
});

sablono.core.text_field46285.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.text_field46285.call(null,name__46148__auto__,null);
});

sablono.core.text_field46285.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.text_field46285.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field46285);

/**
 * Creates a time input field.
 */
sablono.core.time_field46289 = (function sablono$core$time_field46289(var_args){
var args46290 = [];
var len__33922__auto___46357 = arguments.length;
var i__33923__auto___46358 = (0);
while(true){
if((i__33923__auto___46358 < len__33922__auto___46357)){
args46290.push((arguments[i__33923__auto___46358]));

var G__46359 = (i__33923__auto___46358 + (1));
i__33923__auto___46358 = G__46359;
continue;
} else {
}
break;
}

var G__46292 = args46290.length;
switch (G__46292) {
case 1:
return sablono.core.time_field46289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46290.length)].join('')));

}
});

sablono.core.time_field46289.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.time_field46289.call(null,name__46148__auto__,null);
});

sablono.core.time_field46289.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.time_field46289.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field46289);

/**
 * Creates a url input field.
 */
sablono.core.url_field46293 = (function sablono$core$url_field46293(var_args){
var args46294 = [];
var len__33922__auto___46361 = arguments.length;
var i__33923__auto___46362 = (0);
while(true){
if((i__33923__auto___46362 < len__33922__auto___46361)){
args46294.push((arguments[i__33923__auto___46362]));

var G__46363 = (i__33923__auto___46362 + (1));
i__33923__auto___46362 = G__46363;
continue;
} else {
}
break;
}

var G__46296 = args46294.length;
switch (G__46296) {
case 1:
return sablono.core.url_field46293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46294.length)].join('')));

}
});

sablono.core.url_field46293.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.url_field46293.call(null,name__46148__auto__,null);
});

sablono.core.url_field46293.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.url_field46293.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field46293);

/**
 * Creates a week input field.
 */
sablono.core.week_field46297 = (function sablono$core$week_field46297(var_args){
var args46298 = [];
var len__33922__auto___46365 = arguments.length;
var i__33923__auto___46366 = (0);
while(true){
if((i__33923__auto___46366 < len__33922__auto___46365)){
args46298.push((arguments[i__33923__auto___46366]));

var G__46367 = (i__33923__auto___46366 + (1));
i__33923__auto___46366 = G__46367;
continue;
} else {
}
break;
}

var G__46300 = args46298.length;
switch (G__46300) {
case 1:
return sablono.core.week_field46297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46298.length)].join('')));

}
});

sablono.core.week_field46297.cljs$core$IFn$_invoke$arity$1 = (function (name__46148__auto__){
return sablono.core.week_field46297.call(null,name__46148__auto__,null);
});

sablono.core.week_field46297.cljs$core$IFn$_invoke$arity$2 = (function (name__46148__auto__,value__46149__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__46148__auto__,value__46149__auto__);
});

sablono.core.week_field46297.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field46297);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46369 = (function sablono$core$check_box46369(var_args){
var args46370 = [];
var len__33922__auto___46373 = arguments.length;
var i__33923__auto___46374 = (0);
while(true){
if((i__33923__auto___46374 < len__33922__auto___46373)){
args46370.push((arguments[i__33923__auto___46374]));

var G__46375 = (i__33923__auto___46374 + (1));
i__33923__auto___46374 = G__46375;
continue;
} else {
}
break;
}

var G__46372 = args46370.length;
switch (G__46372) {
case 1:
return sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46370.length)].join('')));

}
});

sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box46369.call(null,name,null);
});

sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box46369.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box46369.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__32847__auto__ = value;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box46369.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box46369);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46377 = (function sablono$core$radio_button46377(var_args){
var args46378 = [];
var len__33922__auto___46381 = arguments.length;
var i__33923__auto___46382 = (0);
while(true){
if((i__33923__auto___46382 < len__33922__auto___46381)){
args46378.push((arguments[i__33923__auto___46382]));

var G__46383 = (i__33923__auto___46382 + (1));
i__33923__auto___46382 = G__46383;
continue;
} else {
}
break;
}

var G__46380 = args46378.length;
switch (G__46380) {
case 1:
return sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46378.length)].join('')));

}
});

sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button46377.call(null,group,null);
});

sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button46377.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button46377.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__32847__auto__ = value;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button46377.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button46377);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46385 = (function sablono$core$select_options46385(coll){
var iter__33627__auto__ = (function sablono$core$select_options46385_$_iter__46402(s__46403){
return (new cljs.core.LazySeq(null,(function (){
var s__46403__$1 = s__46403;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46403__$1);
if(temp__4657__auto__){
var s__46403__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46403__$2)){
var c__33625__auto__ = cljs.core.chunk_first.call(null,s__46403__$2);
var size__33626__auto__ = cljs.core.count.call(null,c__33625__auto__);
var b__46405 = cljs.core.chunk_buffer.call(null,size__33626__auto__);
if((function (){var i__46404 = (0);
while(true){
if((i__46404 < size__33626__auto__)){
var x = cljs.core._nth.call(null,c__33625__auto__,i__46404);
cljs.core.chunk_append.call(null,b__46405,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__46412 = x;
var text = cljs.core.nth.call(null,vec__46412,(0),null);
var val = cljs.core.nth.call(null,vec__46412,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__46412,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options46385.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__46418 = (i__46404 + (1));
i__46404 = G__46418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46405),sablono$core$select_options46385_$_iter__46402.call(null,cljs.core.chunk_rest.call(null,s__46403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46405),null);
}
} else {
var x = cljs.core.first.call(null,s__46403__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__46415 = x;
var text = cljs.core.nth.call(null,vec__46415,(0),null);
var val = cljs.core.nth.call(null,vec__46415,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__46415,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options46385.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options46385_$_iter__46402.call(null,cljs.core.rest.call(null,s__46403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33627__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options46385);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46419 = (function sablono$core$drop_down46419(var_args){
var args46420 = [];
var len__33922__auto___46423 = arguments.length;
var i__33923__auto___46424 = (0);
while(true){
if((i__33923__auto___46424 < len__33922__auto___46423)){
args46420.push((arguments[i__33923__auto___46424]));

var G__46425 = (i__33923__auto___46424 + (1));
i__33923__auto___46424 = G__46425;
continue;
} else {
}
break;
}

var G__46422 = args46420.length;
switch (G__46422) {
case 2:
return sablono.core.drop_down46419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46419.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46420.length)].join('')));

}
});

sablono.core.drop_down46419.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46419.call(null,name,options,null);
});

sablono.core.drop_down46419.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down46419.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down46419);
/**
 * Creates a text area element.
 */
sablono.core.text_area46427 = (function sablono$core$text_area46427(var_args){
var args46428 = [];
var len__33922__auto___46431 = arguments.length;
var i__33923__auto___46432 = (0);
while(true){
if((i__33923__auto___46432 < len__33922__auto___46431)){
args46428.push((arguments[i__33923__auto___46432]));

var G__46433 = (i__33923__auto___46432 + (1));
i__33923__auto___46432 = G__46433;
continue;
} else {
}
break;
}

var G__46430 = args46428.length;
switch (G__46430) {
case 1:
return sablono.core.text_area46427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46428.length)].join('')));

}
});

sablono.core.text_area46427.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area46427.call(null,name,null);
});

sablono.core.text_area46427.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__32847__auto__ = value;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area46427.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area46427);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46435 = (function sablono$core$label46435(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label46435);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46436 = (function sablono$core$submit_button46436(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button46436);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46437 = (function sablono$core$reset_button46437(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button46437);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46438 = (function sablono$core$form_to46438(var_args){
var args__33929__auto__ = [];
var len__33922__auto___46445 = arguments.length;
var i__33923__auto___46446 = (0);
while(true){
if((i__33923__auto___46446 < len__33922__auto___46445)){
args__33929__auto__.push((arguments[i__33923__auto___46446]));

var G__46447 = (i__33923__auto___46446 + (1));
i__33923__auto___46446 = G__46447;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((1) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46438.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33930__auto__);
});

sablono.core.form_to46438.cljs$core$IFn$_invoke$arity$variadic = (function (p__46441,body){
var vec__46442 = p__46441;
var method = cljs.core.nth.call(null,vec__46442,(0),null);
var action = cljs.core.nth.call(null,vec__46442,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to46438.cljs$lang$maxFixedArity = (1);

sablono.core.form_to46438.cljs$lang$applyTo = (function (seq46439){
var G__46440 = cljs.core.first.call(null,seq46439);
var seq46439__$1 = cljs.core.next.call(null,seq46439);
return sablono.core.form_to46438.cljs$core$IFn$_invoke$arity$variadic(G__46440,seq46439__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to46438);

//# sourceMappingURL=core.js.map?rel=1479316902430