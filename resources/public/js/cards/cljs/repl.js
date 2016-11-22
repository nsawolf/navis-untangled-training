// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55798){
var map__55823 = p__55798;
var map__55823__$1 = ((((!((map__55823 == null)))?((((map__55823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55823):map__55823);
var m = map__55823__$1;
var n = cljs.core.get.call(null,map__55823__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55825_55847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55826_55848 = null;
var count__55827_55849 = (0);
var i__55828_55850 = (0);
while(true){
if((i__55828_55850 < count__55827_55849)){
var f_55851 = cljs.core._nth.call(null,chunk__55826_55848,i__55828_55850);
cljs.core.println.call(null,"  ",f_55851);

var G__55852 = seq__55825_55847;
var G__55853 = chunk__55826_55848;
var G__55854 = count__55827_55849;
var G__55855 = (i__55828_55850 + (1));
seq__55825_55847 = G__55852;
chunk__55826_55848 = G__55853;
count__55827_55849 = G__55854;
i__55828_55850 = G__55855;
continue;
} else {
var temp__4657__auto___55856 = cljs.core.seq.call(null,seq__55825_55847);
if(temp__4657__auto___55856){
var seq__55825_55857__$1 = temp__4657__auto___55856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55825_55857__$1)){
var c__33658__auto___55858 = cljs.core.chunk_first.call(null,seq__55825_55857__$1);
var G__55859 = cljs.core.chunk_rest.call(null,seq__55825_55857__$1);
var G__55860 = c__33658__auto___55858;
var G__55861 = cljs.core.count.call(null,c__33658__auto___55858);
var G__55862 = (0);
seq__55825_55847 = G__55859;
chunk__55826_55848 = G__55860;
count__55827_55849 = G__55861;
i__55828_55850 = G__55862;
continue;
} else {
var f_55863 = cljs.core.first.call(null,seq__55825_55857__$1);
cljs.core.println.call(null,"  ",f_55863);

var G__55864 = cljs.core.next.call(null,seq__55825_55857__$1);
var G__55865 = null;
var G__55866 = (0);
var G__55867 = (0);
seq__55825_55847 = G__55864;
chunk__55826_55848 = G__55865;
count__55827_55849 = G__55866;
i__55828_55850 = G__55867;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55868 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32847__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55868);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55868)))?cljs.core.second.call(null,arglists_55868):arglists_55868));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55829_55869 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55830_55870 = null;
var count__55831_55871 = (0);
var i__55832_55872 = (0);
while(true){
if((i__55832_55872 < count__55831_55871)){
var vec__55833_55873 = cljs.core._nth.call(null,chunk__55830_55870,i__55832_55872);
var name_55874 = cljs.core.nth.call(null,vec__55833_55873,(0),null);
var map__55836_55875 = cljs.core.nth.call(null,vec__55833_55873,(1),null);
var map__55836_55876__$1 = ((((!((map__55836_55875 == null)))?((((map__55836_55875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55836_55875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55836_55875):map__55836_55875);
var doc_55877 = cljs.core.get.call(null,map__55836_55876__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55878 = cljs.core.get.call(null,map__55836_55876__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55874);

cljs.core.println.call(null," ",arglists_55878);

if(cljs.core.truth_(doc_55877)){
cljs.core.println.call(null," ",doc_55877);
} else {
}

var G__55879 = seq__55829_55869;
var G__55880 = chunk__55830_55870;
var G__55881 = count__55831_55871;
var G__55882 = (i__55832_55872 + (1));
seq__55829_55869 = G__55879;
chunk__55830_55870 = G__55880;
count__55831_55871 = G__55881;
i__55832_55872 = G__55882;
continue;
} else {
var temp__4657__auto___55883 = cljs.core.seq.call(null,seq__55829_55869);
if(temp__4657__auto___55883){
var seq__55829_55884__$1 = temp__4657__auto___55883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55829_55884__$1)){
var c__33658__auto___55885 = cljs.core.chunk_first.call(null,seq__55829_55884__$1);
var G__55886 = cljs.core.chunk_rest.call(null,seq__55829_55884__$1);
var G__55887 = c__33658__auto___55885;
var G__55888 = cljs.core.count.call(null,c__33658__auto___55885);
var G__55889 = (0);
seq__55829_55869 = G__55886;
chunk__55830_55870 = G__55887;
count__55831_55871 = G__55888;
i__55832_55872 = G__55889;
continue;
} else {
var vec__55838_55890 = cljs.core.first.call(null,seq__55829_55884__$1);
var name_55891 = cljs.core.nth.call(null,vec__55838_55890,(0),null);
var map__55841_55892 = cljs.core.nth.call(null,vec__55838_55890,(1),null);
var map__55841_55893__$1 = ((((!((map__55841_55892 == null)))?((((map__55841_55892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55841_55892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55841_55892):map__55841_55892);
var doc_55894 = cljs.core.get.call(null,map__55841_55893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55895 = cljs.core.get.call(null,map__55841_55893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55891);

cljs.core.println.call(null," ",arglists_55895);

if(cljs.core.truth_(doc_55894)){
cljs.core.println.call(null," ",doc_55894);
} else {
}

var G__55896 = cljs.core.next.call(null,seq__55829_55884__$1);
var G__55897 = null;
var G__55898 = (0);
var G__55899 = (0);
seq__55829_55869 = G__55896;
chunk__55830_55870 = G__55897;
count__55831_55871 = G__55898;
i__55832_55872 = G__55899;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__55843 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55844 = null;
var count__55845 = (0);
var i__55846 = (0);
while(true){
if((i__55846 < count__55845)){
var role = cljs.core._nth.call(null,chunk__55844,i__55846);
var temp__4657__auto___55900__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55900__$1)){
var spec_55901 = temp__4657__auto___55900__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_55901));
} else {
}

var G__55902 = seq__55843;
var G__55903 = chunk__55844;
var G__55904 = count__55845;
var G__55905 = (i__55846 + (1));
seq__55843 = G__55902;
chunk__55844 = G__55903;
count__55845 = G__55904;
i__55846 = G__55905;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__55843);
if(temp__4657__auto____$1){
var seq__55843__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55843__$1)){
var c__33658__auto__ = cljs.core.chunk_first.call(null,seq__55843__$1);
var G__55906 = cljs.core.chunk_rest.call(null,seq__55843__$1);
var G__55907 = c__33658__auto__;
var G__55908 = cljs.core.count.call(null,c__33658__auto__);
var G__55909 = (0);
seq__55843 = G__55906;
chunk__55844 = G__55907;
count__55845 = G__55908;
i__55846 = G__55909;
continue;
} else {
var role = cljs.core.first.call(null,seq__55843__$1);
var temp__4657__auto___55910__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55910__$2)){
var spec_55911 = temp__4657__auto___55910__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_55911));
} else {
}

var G__55912 = cljs.core.next.call(null,seq__55843__$1);
var G__55913 = null;
var G__55914 = (0);
var G__55915 = (0);
seq__55843 = G__55912;
chunk__55844 = G__55913;
count__55845 = G__55914;
i__55846 = G__55915;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479316909625