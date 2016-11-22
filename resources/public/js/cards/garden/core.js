// Compiled by ClojureScript 1.9.229 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__33929__auto__ = [];
var len__33922__auto___50973 = arguments.length;
var i__33923__auto___50974 = (0);
while(true){
if((i__33923__auto___50974 < len__33922__auto___50973)){
args__33929__auto__.push((arguments[i__33923__auto___50974]));

var G__50975 = (i__33923__auto___50974 + (1));
i__33923__auto___50974 = G__50975;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq50972){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50972));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__33929__auto__ = [];
var len__33922__auto___50977 = arguments.length;
var i__33923__auto___50978 = (0);
while(true){
if((i__33923__auto___50978 < len__33922__auto___50977)){
args__33929__auto__.push((arguments[i__33923__auto___50978]));

var G__50979 = (i__33923__auto___50978 + (1));
i__33923__auto___50978 = G__50979;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq50976){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50976));
});


//# sourceMappingURL=core.js.map?rel=1479316906448