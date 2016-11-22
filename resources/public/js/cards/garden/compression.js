// Compiled by ClojureScript 1.9.229 {}
goog.provide('garden.compression');
goog.require('cljs.core');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__50407){
var vec__50411 = p__50407;
var tag = cljs.core.nth.call(null,vec__50411,(0),null);
var re = cljs.core.nth.call(null,vec__50411,(1),null);
return ((function (vec__50411,tag,re){
return (function (s){
var temp__4657__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count.call(null,chunk)], null);
} else {
return null;
}
});
;})(vec__50411,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__33929__auto__ = [];
var len__33922__auto___50416 = arguments.length;
var i__33923__auto___50417 = (0);
while(true){
if((i__33923__auto___50417 < len__33922__auto___50416)){
args__33929__auto__.push((arguments[i__33923__auto___50417]));

var G__50418 = (i__33923__auto___50417 + (1));
i__33923__auto___50417 = G__50418;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.call(null,garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some.call(null,((function (fs){
return (function (p1__50414_SHARP_){
return p1__50414_SHARP_.call(null,s);
});})(fs))
,fs);
});
;})(fs))
});

garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

garden.compression.tokenizer.cljs$lang$applyTo = (function (seq50415){
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50415));
});

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__4655__auto__ = garden.compression.stylesheet_tokenizer.call(null,s1);
if(cljs.core.truth_(temp__4655__auto__)){
var map__50422 = temp__4655__auto__;
var map__50422__$1 = ((((!((map__50422 == null)))?((((map__50422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50422):map__50422);
var tag = cljs.core.get.call(null,map__50422__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.call(null,map__50422__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.call(null,map__50422__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__50425 = cljs.core.subs.call(null,s1,size);
var G__50426 = [cljs.core.str(s2),cljs.core.str((function (){var G__50424 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);
switch (G__50424) {
case "l-brace":
return "}";

break;
case "l-paren":
return ")";

break;
case "space+":
return " ";

break;
case "comma":
return ",";

break;
case "white-space+":
return "";

break;
case "string":
return chunk;

break;
case "colon":
return ":";

break;
case "semi-comma":
return ";";

break;
case "r-brace":
return "{";

break;
case "r-paren":
return "(";

break;
default:
return chunk;

}
})())].join('');
s1 = G__50425;
s2 = G__50426;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=compression.js.map?rel=1479316906025