// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_);
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.call(null,cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_),untangled.i18n.current_locale.call(null));
});
tr = (function (msg){
var msg_key = [cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str(ctxt),cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__37771__delegate = function (fmt,p__37767){
var map__37768 = p__37767;
var map__37768__$1 = ((((!((map__37768 == null)))?((((map__37768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37768):map__37768);
var argmap = map__37768__$1;
try{var msg_key = [cljs.core.str("|"),cljs.core.str(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e37770){var e = e37770;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__37771 = function (fmt,var_args){
var p__37767 = null;
if (arguments.length > 1) {
var G__37772__i = 0, G__37772__a = new Array(arguments.length -  1);
while (G__37772__i < G__37772__a.length) {G__37772__a[G__37772__i] = arguments[G__37772__i + 1]; ++G__37772__i;}
  p__37767 = new cljs.core.IndexedSeq(G__37772__a,0);
} 
return G__37771__delegate.call(this,fmt,p__37767);};
G__37771.cljs$lang$maxFixedArity = 1;
G__37771.cljs$lang$applyTo = (function (arglist__37773){
var fmt = cljs.core.first(arglist__37773);
var p__37767 = cljs.core.rest(arglist__37773);
return G__37771__delegate(fmt,p__37767);
});
G__37771.cljs$core$IFn$_invoke$arity$variadic = G__37771__delegate;
return G__37771;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1479747559680