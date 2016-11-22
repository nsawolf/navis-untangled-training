// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__36906_36910 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__36907_36911 = null;
var count__36908_36912 = (0);
var i__36909_36913 = (0);
while(true){
if((i__36909_36913 < count__36908_36912)){
var k_36914 = cljs.core._nth.call(null,chunk__36907_36911,i__36909_36913);
var v_36915 = (b[k_36914]);
(a[k_36914] = v_36915);

var G__36916 = seq__36906_36910;
var G__36917 = chunk__36907_36911;
var G__36918 = count__36908_36912;
var G__36919 = (i__36909_36913 + (1));
seq__36906_36910 = G__36916;
chunk__36907_36911 = G__36917;
count__36908_36912 = G__36918;
i__36909_36913 = G__36919;
continue;
} else {
var temp__4657__auto___36920 = cljs.core.seq.call(null,seq__36906_36910);
if(temp__4657__auto___36920){
var seq__36906_36921__$1 = temp__4657__auto___36920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36906_36921__$1)){
var c__33658__auto___36922 = cljs.core.chunk_first.call(null,seq__36906_36921__$1);
var G__36923 = cljs.core.chunk_rest.call(null,seq__36906_36921__$1);
var G__36924 = c__33658__auto___36922;
var G__36925 = cljs.core.count.call(null,c__33658__auto___36922);
var G__36926 = (0);
seq__36906_36910 = G__36923;
chunk__36907_36911 = G__36924;
count__36908_36912 = G__36925;
i__36909_36913 = G__36926;
continue;
} else {
var k_36927 = cljs.core.first.call(null,seq__36906_36921__$1);
var v_36928 = (b[k_36927]);
(a[k_36927] = v_36928);

var G__36929 = cljs.core.next.call(null,seq__36906_36921__$1);
var G__36930 = null;
var G__36931 = (0);
var G__36932 = (0);
seq__36906_36910 = G__36929;
chunk__36907_36911 = G__36930;
count__36908_36912 = G__36931;
i__36909_36913 = G__36932;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args36933 = [];
var len__33922__auto___36936 = arguments.length;
var i__33923__auto___36937 = (0);
while(true){
if((i__33923__auto___36937 < len__33922__auto___36936)){
args36933.push((arguments[i__33923__auto___36937]));

var G__36938 = (i__33923__auto___36937 + (1));
i__33923__auto___36937 = G__36938;
continue;
} else {
}
break;
}

var G__36935 = args36933.length;
switch (G__36935) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36933.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__36940 = (i + (2));
var G__36941 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__36940;
ret = G__36941;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__36942_36946 = cljs.core.seq.call(null,v);
var chunk__36943_36947 = null;
var count__36944_36948 = (0);
var i__36945_36949 = (0);
while(true){
if((i__36945_36949 < count__36944_36948)){
var x_36950 = cljs.core._nth.call(null,chunk__36943_36947,i__36945_36949);
ret.push(x_36950);

var G__36951 = seq__36942_36946;
var G__36952 = chunk__36943_36947;
var G__36953 = count__36944_36948;
var G__36954 = (i__36945_36949 + (1));
seq__36942_36946 = G__36951;
chunk__36943_36947 = G__36952;
count__36944_36948 = G__36953;
i__36945_36949 = G__36954;
continue;
} else {
var temp__4657__auto___36955 = cljs.core.seq.call(null,seq__36942_36946);
if(temp__4657__auto___36955){
var seq__36942_36956__$1 = temp__4657__auto___36955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36942_36956__$1)){
var c__33658__auto___36957 = cljs.core.chunk_first.call(null,seq__36942_36956__$1);
var G__36958 = cljs.core.chunk_rest.call(null,seq__36942_36956__$1);
var G__36959 = c__33658__auto___36957;
var G__36960 = cljs.core.count.call(null,c__33658__auto___36957);
var G__36961 = (0);
seq__36942_36946 = G__36958;
chunk__36943_36947 = G__36959;
count__36944_36948 = G__36960;
i__36945_36949 = G__36961;
continue;
} else {
var x_36962 = cljs.core.first.call(null,seq__36942_36956__$1);
ret.push(x_36962);

var G__36963 = cljs.core.next.call(null,seq__36942_36956__$1);
var G__36964 = null;
var G__36965 = (0);
var G__36966 = (0);
seq__36942_36946 = G__36963;
chunk__36943_36947 = G__36964;
count__36944_36948 = G__36965;
i__36945_36949 = G__36966;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__36967_36971 = cljs.core.seq.call(null,v);
var chunk__36968_36972 = null;
var count__36969_36973 = (0);
var i__36970_36974 = (0);
while(true){
if((i__36970_36974 < count__36969_36973)){
var x_36975 = cljs.core._nth.call(null,chunk__36968_36972,i__36970_36974);
ret.push(x_36975);

var G__36976 = seq__36967_36971;
var G__36977 = chunk__36968_36972;
var G__36978 = count__36969_36973;
var G__36979 = (i__36970_36974 + (1));
seq__36967_36971 = G__36976;
chunk__36968_36972 = G__36977;
count__36969_36973 = G__36978;
i__36970_36974 = G__36979;
continue;
} else {
var temp__4657__auto___36980 = cljs.core.seq.call(null,seq__36967_36971);
if(temp__4657__auto___36980){
var seq__36967_36981__$1 = temp__4657__auto___36980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36967_36981__$1)){
var c__33658__auto___36982 = cljs.core.chunk_first.call(null,seq__36967_36981__$1);
var G__36983 = cljs.core.chunk_rest.call(null,seq__36967_36981__$1);
var G__36984 = c__33658__auto___36982;
var G__36985 = cljs.core.count.call(null,c__33658__auto___36982);
var G__36986 = (0);
seq__36967_36971 = G__36983;
chunk__36968_36972 = G__36984;
count__36969_36973 = G__36985;
i__36970_36974 = G__36986;
continue;
} else {
var x_36987 = cljs.core.first.call(null,seq__36967_36981__$1);
ret.push(x_36987);

var G__36988 = cljs.core.next.call(null,seq__36967_36981__$1);
var G__36989 = null;
var G__36990 = (0);
var G__36991 = (0);
seq__36967_36971 = G__36988;
chunk__36968_36972 = G__36989;
count__36969_36973 = G__36990;
i__36970_36974 = G__36991;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__36992_36996 = cljs.core.seq.call(null,v);
var chunk__36993_36997 = null;
var count__36994_36998 = (0);
var i__36995_36999 = (0);
while(true){
if((i__36995_36999 < count__36994_36998)){
var x_37000 = cljs.core._nth.call(null,chunk__36993_36997,i__36995_36999);
ret.push(x_37000);

var G__37001 = seq__36992_36996;
var G__37002 = chunk__36993_36997;
var G__37003 = count__36994_36998;
var G__37004 = (i__36995_36999 + (1));
seq__36992_36996 = G__37001;
chunk__36993_36997 = G__37002;
count__36994_36998 = G__37003;
i__36995_36999 = G__37004;
continue;
} else {
var temp__4657__auto___37005 = cljs.core.seq.call(null,seq__36992_36996);
if(temp__4657__auto___37005){
var seq__36992_37006__$1 = temp__4657__auto___37005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36992_37006__$1)){
var c__33658__auto___37007 = cljs.core.chunk_first.call(null,seq__36992_37006__$1);
var G__37008 = cljs.core.chunk_rest.call(null,seq__36992_37006__$1);
var G__37009 = c__33658__auto___37007;
var G__37010 = cljs.core.count.call(null,c__33658__auto___37007);
var G__37011 = (0);
seq__36992_36996 = G__37008;
chunk__36993_36997 = G__37009;
count__36994_36998 = G__37010;
i__36995_36999 = G__37011;
continue;
} else {
var x_37012 = cljs.core.first.call(null,seq__36992_37006__$1);
ret.push(x_37012);

var G__37013 = cljs.core.next.call(null,seq__36992_37006__$1);
var G__37014 = null;
var G__37015 = (0);
var G__37016 = (0);
seq__36992_36996 = G__37013;
chunk__36993_36997 = G__37014;
count__36994_36998 = G__37015;
i__36995_36999 = G__37016;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args37017 = [];
var len__33922__auto___37032 = arguments.length;
var i__33923__auto___37033 = (0);
while(true){
if((i__33923__auto___37033 < len__33922__auto___37032)){
args37017.push((arguments[i__33923__auto___37033]));

var G__37034 = (i__33923__auto___37033 + (1));
i__33923__auto___37033 = G__37034;
continue;
} else {
}
break;
}

var G__37019 = args37017.length;
switch (G__37019) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37017.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37020 = obj;
G__37020.push(kfn.call(null,k),vfn.call(null,v));

return G__37020;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37021 = cljs.core.clone.call(null,handlers);
x37021.forEach = ((function (x37021,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37022 = cljs.core.seq.call(null,coll);
var chunk__37023 = null;
var count__37024 = (0);
var i__37025 = (0);
while(true){
if((i__37025 < count__37024)){
var vec__37026 = cljs.core._nth.call(null,chunk__37023,i__37025);
var k = cljs.core.nth.call(null,vec__37026,(0),null);
var v = cljs.core.nth.call(null,vec__37026,(1),null);
f.call(null,v,k);

var G__37036 = seq__37022;
var G__37037 = chunk__37023;
var G__37038 = count__37024;
var G__37039 = (i__37025 + (1));
seq__37022 = G__37036;
chunk__37023 = G__37037;
count__37024 = G__37038;
i__37025 = G__37039;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37022);
if(temp__4657__auto__){
var seq__37022__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37022__$1)){
var c__33658__auto__ = cljs.core.chunk_first.call(null,seq__37022__$1);
var G__37040 = cljs.core.chunk_rest.call(null,seq__37022__$1);
var G__37041 = c__33658__auto__;
var G__37042 = cljs.core.count.call(null,c__33658__auto__);
var G__37043 = (0);
seq__37022 = G__37040;
chunk__37023 = G__37041;
count__37024 = G__37042;
i__37025 = G__37043;
continue;
} else {
var vec__37029 = cljs.core.first.call(null,seq__37022__$1);
var k = cljs.core.nth.call(null,vec__37029,(0),null);
var v = cljs.core.nth.call(null,vec__37029,(1),null);
f.call(null,v,k);

var G__37044 = cljs.core.next.call(null,seq__37022__$1);
var G__37045 = null;
var G__37046 = (0);
var G__37047 = (0);
seq__37022 = G__37044;
chunk__37023 = G__37045;
count__37024 = G__37046;
i__37025 = G__37047;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37021,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37021;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args37048 = [];
var len__33922__auto___37054 = arguments.length;
var i__33923__auto___37055 = (0);
while(true){
if((i__33923__auto___37055 < len__33922__auto___37054)){
args37048.push((arguments[i__33923__auto___37055]));

var G__37056 = (i__33923__auto___37055 + (1));
i__33923__auto___37055 = G__37056;
continue;
} else {
}
break;
}

var G__37050 = args37048.length;
switch (G__37050) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37048.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit37051 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37052){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37052 = meta37052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37053,meta37052__$1){
var self__ = this;
var _37053__$1 = this;
return (new cognitect.transit.t_cognitect$transit37051(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37052__$1));
});

cognitect.transit.t_cognitect$transit37051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37053){
var self__ = this;
var _37053__$1 = this;
return self__.meta37052;
});

cognitect.transit.t_cognitect$transit37051.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37051.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37051.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37051.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37052","meta37052",1478881298,null)], null);
});

cognitect.transit.t_cognitect$transit37051.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37051.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37051";

cognitect.transit.t_cognitect$transit37051.cljs$lang$ctorPrWriter = (function (this__33453__auto__,writer__33454__auto__,opt__33455__auto__){
return cljs.core._write.call(null,writer__33454__auto__,"cognitect.transit/t_cognitect$transit37051");
});

cognitect.transit.__GT_t_cognitect$transit37051 = (function cognitect$transit$__GT_t_cognitect$transit37051(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37052){
return (new cognitect.transit.t_cognitect$transit37051(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37052));
});

}

return (new cognitect.transit.t_cognitect$transit37051(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__32847__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1479316891497