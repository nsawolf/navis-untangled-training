// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__32847__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__32847__auto__){
return or__32847__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__32847__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53384_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53384_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__53389 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53390 = null;
var count__53391 = (0);
var i__53392 = (0);
while(true){
if((i__53392 < count__53391)){
var n = cljs.core._nth.call(null,chunk__53390,i__53392);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53393 = seq__53389;
var G__53394 = chunk__53390;
var G__53395 = count__53391;
var G__53396 = (i__53392 + (1));
seq__53389 = G__53393;
chunk__53390 = G__53394;
count__53391 = G__53395;
i__53392 = G__53396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53389);
if(temp__4657__auto__){
var seq__53389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53389__$1)){
var c__33658__auto__ = cljs.core.chunk_first.call(null,seq__53389__$1);
var G__53397 = cljs.core.chunk_rest.call(null,seq__53389__$1);
var G__53398 = c__33658__auto__;
var G__53399 = cljs.core.count.call(null,c__33658__auto__);
var G__53400 = (0);
seq__53389 = G__53397;
chunk__53390 = G__53398;
count__53391 = G__53399;
i__53392 = G__53400;
continue;
} else {
var n = cljs.core.first.call(null,seq__53389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53401 = cljs.core.next.call(null,seq__53389__$1);
var G__53402 = null;
var G__53403 = (0);
var G__53404 = (0);
seq__53389 = G__53401;
chunk__53390 = G__53402;
count__53391 = G__53403;
i__53392 = G__53404;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__53455_53466 = cljs.core.seq.call(null,deps);
var chunk__53456_53467 = null;
var count__53457_53468 = (0);
var i__53458_53469 = (0);
while(true){
if((i__53458_53469 < count__53457_53468)){
var dep_53470 = cljs.core._nth.call(null,chunk__53456_53467,i__53458_53469);
topo_sort_helper_STAR_.call(null,dep_53470,(depth + (1)),state);

var G__53471 = seq__53455_53466;
var G__53472 = chunk__53456_53467;
var G__53473 = count__53457_53468;
var G__53474 = (i__53458_53469 + (1));
seq__53455_53466 = G__53471;
chunk__53456_53467 = G__53472;
count__53457_53468 = G__53473;
i__53458_53469 = G__53474;
continue;
} else {
var temp__4657__auto___53475 = cljs.core.seq.call(null,seq__53455_53466);
if(temp__4657__auto___53475){
var seq__53455_53476__$1 = temp__4657__auto___53475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53455_53476__$1)){
var c__33658__auto___53477 = cljs.core.chunk_first.call(null,seq__53455_53476__$1);
var G__53478 = cljs.core.chunk_rest.call(null,seq__53455_53476__$1);
var G__53479 = c__33658__auto___53477;
var G__53480 = cljs.core.count.call(null,c__33658__auto___53477);
var G__53481 = (0);
seq__53455_53466 = G__53478;
chunk__53456_53467 = G__53479;
count__53457_53468 = G__53480;
i__53458_53469 = G__53481;
continue;
} else {
var dep_53482 = cljs.core.first.call(null,seq__53455_53476__$1);
topo_sort_helper_STAR_.call(null,dep_53482,(depth + (1)),state);

var G__53483 = cljs.core.next.call(null,seq__53455_53476__$1);
var G__53484 = null;
var G__53485 = (0);
var G__53486 = (0);
seq__53455_53466 = G__53483;
chunk__53456_53467 = G__53484;
count__53457_53468 = G__53485;
i__53458_53469 = G__53486;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53459){
var vec__53463 = p__53459;
var seq__53464 = cljs.core.seq.call(null,vec__53463);
var first__53465 = cljs.core.first.call(null,seq__53464);
var seq__53464__$1 = cljs.core.next.call(null,seq__53464);
var x = first__53465;
var xs = seq__53464__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53463,seq__53464,first__53465,seq__53464__$1,x,xs,get_deps__$1){
return (function (p1__53405_SHARP_){
return clojure.set.difference.call(null,p1__53405_SHARP_,x);
});})(vec__53463,seq__53464,first__53465,seq__53464__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__53499 = cljs.core.seq.call(null,provides);
var chunk__53500 = null;
var count__53501 = (0);
var i__53502 = (0);
while(true){
if((i__53502 < count__53501)){
var prov = cljs.core._nth.call(null,chunk__53500,i__53502);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53503_53511 = cljs.core.seq.call(null,requires);
var chunk__53504_53512 = null;
var count__53505_53513 = (0);
var i__53506_53514 = (0);
while(true){
if((i__53506_53514 < count__53505_53513)){
var req_53515 = cljs.core._nth.call(null,chunk__53504_53512,i__53506_53514);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53515,prov);

var G__53516 = seq__53503_53511;
var G__53517 = chunk__53504_53512;
var G__53518 = count__53505_53513;
var G__53519 = (i__53506_53514 + (1));
seq__53503_53511 = G__53516;
chunk__53504_53512 = G__53517;
count__53505_53513 = G__53518;
i__53506_53514 = G__53519;
continue;
} else {
var temp__4657__auto___53520 = cljs.core.seq.call(null,seq__53503_53511);
if(temp__4657__auto___53520){
var seq__53503_53521__$1 = temp__4657__auto___53520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53503_53521__$1)){
var c__33658__auto___53522 = cljs.core.chunk_first.call(null,seq__53503_53521__$1);
var G__53523 = cljs.core.chunk_rest.call(null,seq__53503_53521__$1);
var G__53524 = c__33658__auto___53522;
var G__53525 = cljs.core.count.call(null,c__33658__auto___53522);
var G__53526 = (0);
seq__53503_53511 = G__53523;
chunk__53504_53512 = G__53524;
count__53505_53513 = G__53525;
i__53506_53514 = G__53526;
continue;
} else {
var req_53527 = cljs.core.first.call(null,seq__53503_53521__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53527,prov);

var G__53528 = cljs.core.next.call(null,seq__53503_53521__$1);
var G__53529 = null;
var G__53530 = (0);
var G__53531 = (0);
seq__53503_53511 = G__53528;
chunk__53504_53512 = G__53529;
count__53505_53513 = G__53530;
i__53506_53514 = G__53531;
continue;
}
} else {
}
}
break;
}

var G__53532 = seq__53499;
var G__53533 = chunk__53500;
var G__53534 = count__53501;
var G__53535 = (i__53502 + (1));
seq__53499 = G__53532;
chunk__53500 = G__53533;
count__53501 = G__53534;
i__53502 = G__53535;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53499);
if(temp__4657__auto__){
var seq__53499__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53499__$1)){
var c__33658__auto__ = cljs.core.chunk_first.call(null,seq__53499__$1);
var G__53536 = cljs.core.chunk_rest.call(null,seq__53499__$1);
var G__53537 = c__33658__auto__;
var G__53538 = cljs.core.count.call(null,c__33658__auto__);
var G__53539 = (0);
seq__53499 = G__53536;
chunk__53500 = G__53537;
count__53501 = G__53538;
i__53502 = G__53539;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53499__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53507_53540 = cljs.core.seq.call(null,requires);
var chunk__53508_53541 = null;
var count__53509_53542 = (0);
var i__53510_53543 = (0);
while(true){
if((i__53510_53543 < count__53509_53542)){
var req_53544 = cljs.core._nth.call(null,chunk__53508_53541,i__53510_53543);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53544,prov);

var G__53545 = seq__53507_53540;
var G__53546 = chunk__53508_53541;
var G__53547 = count__53509_53542;
var G__53548 = (i__53510_53543 + (1));
seq__53507_53540 = G__53545;
chunk__53508_53541 = G__53546;
count__53509_53542 = G__53547;
i__53510_53543 = G__53548;
continue;
} else {
var temp__4657__auto___53549__$1 = cljs.core.seq.call(null,seq__53507_53540);
if(temp__4657__auto___53549__$1){
var seq__53507_53550__$1 = temp__4657__auto___53549__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53507_53550__$1)){
var c__33658__auto___53551 = cljs.core.chunk_first.call(null,seq__53507_53550__$1);
var G__53552 = cljs.core.chunk_rest.call(null,seq__53507_53550__$1);
var G__53553 = c__33658__auto___53551;
var G__53554 = cljs.core.count.call(null,c__33658__auto___53551);
var G__53555 = (0);
seq__53507_53540 = G__53552;
chunk__53508_53541 = G__53553;
count__53509_53542 = G__53554;
i__53510_53543 = G__53555;
continue;
} else {
var req_53556 = cljs.core.first.call(null,seq__53507_53550__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53556,prov);

var G__53557 = cljs.core.next.call(null,seq__53507_53550__$1);
var G__53558 = null;
var G__53559 = (0);
var G__53560 = (0);
seq__53507_53540 = G__53557;
chunk__53508_53541 = G__53558;
count__53509_53542 = G__53559;
i__53510_53543 = G__53560;
continue;
}
} else {
}
}
break;
}

var G__53561 = cljs.core.next.call(null,seq__53499__$1);
var G__53562 = null;
var G__53563 = (0);
var G__53564 = (0);
seq__53499 = G__53561;
chunk__53500 = G__53562;
count__53501 = G__53563;
i__53502 = G__53564;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__53569_53573 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53570_53574 = null;
var count__53571_53575 = (0);
var i__53572_53576 = (0);
while(true){
if((i__53572_53576 < count__53571_53575)){
var ns_53577 = cljs.core._nth.call(null,chunk__53570_53574,i__53572_53576);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53577);

var G__53578 = seq__53569_53573;
var G__53579 = chunk__53570_53574;
var G__53580 = count__53571_53575;
var G__53581 = (i__53572_53576 + (1));
seq__53569_53573 = G__53578;
chunk__53570_53574 = G__53579;
count__53571_53575 = G__53580;
i__53572_53576 = G__53581;
continue;
} else {
var temp__4657__auto___53582 = cljs.core.seq.call(null,seq__53569_53573);
if(temp__4657__auto___53582){
var seq__53569_53583__$1 = temp__4657__auto___53582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53569_53583__$1)){
var c__33658__auto___53584 = cljs.core.chunk_first.call(null,seq__53569_53583__$1);
var G__53585 = cljs.core.chunk_rest.call(null,seq__53569_53583__$1);
var G__53586 = c__33658__auto___53584;
var G__53587 = cljs.core.count.call(null,c__33658__auto___53584);
var G__53588 = (0);
seq__53569_53573 = G__53585;
chunk__53570_53574 = G__53586;
count__53571_53575 = G__53587;
i__53572_53576 = G__53588;
continue;
} else {
var ns_53589 = cljs.core.first.call(null,seq__53569_53583__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53589);

var G__53590 = cljs.core.next.call(null,seq__53569_53583__$1);
var G__53591 = null;
var G__53592 = (0);
var G__53593 = (0);
seq__53569_53573 = G__53590;
chunk__53570_53574 = G__53591;
count__53571_53575 = G__53592;
i__53572_53576 = G__53593;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__32847__auto__ = goog.require__;
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__53594__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53595__i = 0, G__53595__a = new Array(arguments.length -  0);
while (G__53595__i < G__53595__a.length) {G__53595__a[G__53595__i] = arguments[G__53595__i + 0]; ++G__53595__i;}
  args = new cljs.core.IndexedSeq(G__53595__a,0);
} 
return G__53594__delegate.call(this,args);};
G__53594.cljs$lang$maxFixedArity = 0;
G__53594.cljs$lang$applyTo = (function (arglist__53596){
var args = cljs.core.seq(arglist__53596);
return G__53594__delegate(args);
});
G__53594.cljs$core$IFn$_invoke$arity$variadic = G__53594__delegate;
return G__53594;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53598 = cljs.core._EQ_;
var expr__53599 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53598.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53599))){
var path_parts = ((function (pred__53598,expr__53599){
return (function (p1__53597_SHARP_){
return clojure.string.split.call(null,p1__53597_SHARP_,/[\/\\]/);
});})(pred__53598,expr__53599))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__53598,expr__53599){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53601){if((e53601 instanceof Error)){
var e = e53601;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53601;

}
}})());
});
;})(path_parts,sep,root,pred__53598,expr__53599))
} else {
if(cljs.core.truth_(pred__53598.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53599))){
return ((function (pred__53598,expr__53599){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__53598,expr__53599){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__53598,expr__53599))
);

return deferred.addErrback(((function (deferred,pred__53598,expr__53599){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__53598,expr__53599))
);
});
;})(pred__53598,expr__53599))
} else {
return ((function (pred__53598,expr__53599){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53598,expr__53599))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53602,callback){
var map__53605 = p__53602;
var map__53605__$1 = ((((!((map__53605 == null)))?((((map__53605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53605):map__53605);
var file_msg = map__53605__$1;
var request_url = cljs.core.get.call(null,map__53605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53605,map__53605__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53605,map__53605__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_53629){
var state_val_53630 = (state_53629[(1)]);
if((state_val_53630 === (7))){
var inst_53625 = (state_53629[(2)]);
var state_53629__$1 = state_53629;
var statearr_53631_53651 = state_53629__$1;
(statearr_53631_53651[(2)] = inst_53625);

(statearr_53631_53651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (1))){
var state_53629__$1 = state_53629;
var statearr_53632_53652 = state_53629__$1;
(statearr_53632_53652[(2)] = null);

(statearr_53632_53652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (4))){
var inst_53609 = (state_53629[(7)]);
var inst_53609__$1 = (state_53629[(2)]);
var state_53629__$1 = (function (){var statearr_53633 = state_53629;
(statearr_53633[(7)] = inst_53609__$1);

return statearr_53633;
})();
if(cljs.core.truth_(inst_53609__$1)){
var statearr_53634_53653 = state_53629__$1;
(statearr_53634_53653[(1)] = (5));

} else {
var statearr_53635_53654 = state_53629__$1;
(statearr_53635_53654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (6))){
var state_53629__$1 = state_53629;
var statearr_53636_53655 = state_53629__$1;
(statearr_53636_53655[(2)] = null);

(statearr_53636_53655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (3))){
var inst_53627 = (state_53629[(2)]);
var state_53629__$1 = state_53629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53629__$1,inst_53627);
} else {
if((state_val_53630 === (2))){
var state_53629__$1 = state_53629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53629__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53630 === (11))){
var inst_53621 = (state_53629[(2)]);
var state_53629__$1 = (function (){var statearr_53637 = state_53629;
(statearr_53637[(8)] = inst_53621);

return statearr_53637;
})();
var statearr_53638_53656 = state_53629__$1;
(statearr_53638_53656[(2)] = null);

(statearr_53638_53656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (9))){
var inst_53613 = (state_53629[(9)]);
var inst_53615 = (state_53629[(10)]);
var inst_53617 = inst_53615.call(null,inst_53613);
var state_53629__$1 = state_53629;
var statearr_53639_53657 = state_53629__$1;
(statearr_53639_53657[(2)] = inst_53617);

(statearr_53639_53657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (5))){
var inst_53609 = (state_53629[(7)]);
var inst_53611 = figwheel.client.file_reloading.blocking_load.call(null,inst_53609);
var state_53629__$1 = state_53629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53629__$1,(8),inst_53611);
} else {
if((state_val_53630 === (10))){
var inst_53613 = (state_53629[(9)]);
var inst_53619 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53613);
var state_53629__$1 = state_53629;
var statearr_53640_53658 = state_53629__$1;
(statearr_53640_53658[(2)] = inst_53619);

(statearr_53640_53658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53630 === (8))){
var inst_53609 = (state_53629[(7)]);
var inst_53615 = (state_53629[(10)]);
var inst_53613 = (state_53629[(2)]);
var inst_53614 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53615__$1 = cljs.core.get.call(null,inst_53614,inst_53609);
var state_53629__$1 = (function (){var statearr_53641 = state_53629;
(statearr_53641[(9)] = inst_53613);

(statearr_53641[(10)] = inst_53615__$1);

return statearr_53641;
})();
if(cljs.core.truth_(inst_53615__$1)){
var statearr_53642_53659 = state_53629__$1;
(statearr_53642_53659[(1)] = (9));

} else {
var statearr_53643_53660 = state_53629__$1;
(statearr_53643_53660[(1)] = (10));

}

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
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42318__auto__ = null;
var figwheel$client$file_reloading$state_machine__42318__auto____0 = (function (){
var statearr_53647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53647[(0)] = figwheel$client$file_reloading$state_machine__42318__auto__);

(statearr_53647[(1)] = (1));

return statearr_53647;
});
var figwheel$client$file_reloading$state_machine__42318__auto____1 = (function (state_53629){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_53629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e53648){if((e53648 instanceof Object)){
var ex__42321__auto__ = e53648;
var statearr_53649_53661 = state_53629;
(statearr_53649_53661[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53662 = state_53629;
state_53629 = G__53662;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42318__auto__ = function(state_53629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42318__auto____1.call(this,state_53629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42318__auto____0;
figwheel$client$file_reloading$state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42318__auto____1;
return figwheel$client$file_reloading$state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_53650 = f__42430__auto__.call(null);
(statearr_53650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_53650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53663,callback){
var map__53666 = p__53663;
var map__53666__$1 = ((((!((map__53666 == null)))?((((map__53666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53666):map__53666);
var file_msg = map__53666__$1;
var namespace = cljs.core.get.call(null,map__53666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53666,map__53666__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53666,map__53666__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53668){
var map__53671 = p__53668;
var map__53671__$1 = ((((!((map__53671 == null)))?((((map__53671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53671):map__53671);
var file_msg = map__53671__$1;
var namespace = cljs.core.get.call(null,map__53671__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__32835__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__32835__auto__){
var or__32847__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
var or__32847__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32847__auto____$1)){
return or__32847__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__32835__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53673,callback){
var map__53676 = p__53673;
var map__53676__$1 = ((((!((map__53676 == null)))?((((map__53676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53676):map__53676);
var file_msg = map__53676__$1;
var request_url = cljs.core.get.call(null,map__53676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__42429__auto___53780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___53780,out){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___53780,out){
return (function (state_53762){
var state_val_53763 = (state_53762[(1)]);
if((state_val_53763 === (1))){
var inst_53736 = cljs.core.seq.call(null,files);
var inst_53737 = cljs.core.first.call(null,inst_53736);
var inst_53738 = cljs.core.next.call(null,inst_53736);
var inst_53739 = files;
var state_53762__$1 = (function (){var statearr_53764 = state_53762;
(statearr_53764[(7)] = inst_53739);

(statearr_53764[(8)] = inst_53738);

(statearr_53764[(9)] = inst_53737);

return statearr_53764;
})();
var statearr_53765_53781 = state_53762__$1;
(statearr_53765_53781[(2)] = null);

(statearr_53765_53781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53763 === (2))){
var inst_53739 = (state_53762[(7)]);
var inst_53745 = (state_53762[(10)]);
var inst_53744 = cljs.core.seq.call(null,inst_53739);
var inst_53745__$1 = cljs.core.first.call(null,inst_53744);
var inst_53746 = cljs.core.next.call(null,inst_53744);
var inst_53747 = (inst_53745__$1 == null);
var inst_53748 = cljs.core.not.call(null,inst_53747);
var state_53762__$1 = (function (){var statearr_53766 = state_53762;
(statearr_53766[(11)] = inst_53746);

(statearr_53766[(10)] = inst_53745__$1);

return statearr_53766;
})();
if(inst_53748){
var statearr_53767_53782 = state_53762__$1;
(statearr_53767_53782[(1)] = (4));

} else {
var statearr_53768_53783 = state_53762__$1;
(statearr_53768_53783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53763 === (3))){
var inst_53760 = (state_53762[(2)]);
var state_53762__$1 = state_53762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53762__$1,inst_53760);
} else {
if((state_val_53763 === (4))){
var inst_53745 = (state_53762[(10)]);
var inst_53750 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53745);
var state_53762__$1 = state_53762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53762__$1,(7),inst_53750);
} else {
if((state_val_53763 === (5))){
var inst_53756 = cljs.core.async.close_BANG_.call(null,out);
var state_53762__$1 = state_53762;
var statearr_53769_53784 = state_53762__$1;
(statearr_53769_53784[(2)] = inst_53756);

(statearr_53769_53784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53763 === (6))){
var inst_53758 = (state_53762[(2)]);
var state_53762__$1 = state_53762;
var statearr_53770_53785 = state_53762__$1;
(statearr_53770_53785[(2)] = inst_53758);

(statearr_53770_53785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53763 === (7))){
var inst_53746 = (state_53762[(11)]);
var inst_53752 = (state_53762[(2)]);
var inst_53753 = cljs.core.async.put_BANG_.call(null,out,inst_53752);
var inst_53739 = inst_53746;
var state_53762__$1 = (function (){var statearr_53771 = state_53762;
(statearr_53771[(7)] = inst_53739);

(statearr_53771[(12)] = inst_53753);

return statearr_53771;
})();
var statearr_53772_53786 = state_53762__$1;
(statearr_53772_53786[(2)] = null);

(statearr_53772_53786[(1)] = (2));


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
});})(c__42429__auto___53780,out))
;
return ((function (switch__42317__auto__,c__42429__auto___53780,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____0 = (function (){
var statearr_53776 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53776[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__);

(statearr_53776[(1)] = (1));

return statearr_53776;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____1 = (function (state_53762){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_53762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e53777){if((e53777 instanceof Object)){
var ex__42321__auto__ = e53777;
var statearr_53778_53787 = state_53762;
(statearr_53778_53787[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53788 = state_53762;
state_53762 = G__53788;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__ = function(state_53762){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____1.call(this,state_53762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___53780,out))
})();
var state__42431__auto__ = (function (){var statearr_53779 = f__42430__auto__.call(null);
(statearr_53779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___53780);

return statearr_53779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___53780,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53789,opts){
var map__53793 = p__53789;
var map__53793__$1 = ((((!((map__53793 == null)))?((((map__53793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53793):map__53793);
var eval_body__$1 = cljs.core.get.call(null,map__53793__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__32835__auto__ = eval_body__$1;
if(cljs.core.truth_(and__32835__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__32835__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e53795){var e = e53795;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__53796_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53796_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__53805){
var vec__53806 = p__53805;
var k = cljs.core.nth.call(null,vec__53806,(0),null);
var v = cljs.core.nth.call(null,vec__53806,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53809){
var vec__53810 = p__53809;
var k = cljs.core.nth.call(null,vec__53810,(0),null);
var v = cljs.core.nth.call(null,vec__53810,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53816,p__53817){
var map__54064 = p__53816;
var map__54064__$1 = ((((!((map__54064 == null)))?((((map__54064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54064):map__54064);
var opts = map__54064__$1;
var before_jsload = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__54065 = p__53817;
var map__54065__$1 = ((((!((map__54065 == null)))?((((map__54065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54065):map__54065);
var msg = map__54065__$1;
var files = cljs.core.get.call(null,map__54065__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__54065__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__54065__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_54218){
var state_val_54219 = (state_54218[(1)]);
if((state_val_54219 === (7))){
var inst_54081 = (state_54218[(7)]);
var inst_54080 = (state_54218[(8)]);
var inst_54079 = (state_54218[(9)]);
var inst_54082 = (state_54218[(10)]);
var inst_54087 = cljs.core._nth.call(null,inst_54080,inst_54082);
var inst_54088 = figwheel.client.file_reloading.eval_body.call(null,inst_54087,opts);
var inst_54089 = (inst_54082 + (1));
var tmp54220 = inst_54081;
var tmp54221 = inst_54080;
var tmp54222 = inst_54079;
var inst_54079__$1 = tmp54222;
var inst_54080__$1 = tmp54221;
var inst_54081__$1 = tmp54220;
var inst_54082__$1 = inst_54089;
var state_54218__$1 = (function (){var statearr_54223 = state_54218;
(statearr_54223[(7)] = inst_54081__$1);

(statearr_54223[(8)] = inst_54080__$1);

(statearr_54223[(9)] = inst_54079__$1);

(statearr_54223[(10)] = inst_54082__$1);

(statearr_54223[(11)] = inst_54088);

return statearr_54223;
})();
var statearr_54224_54310 = state_54218__$1;
(statearr_54224_54310[(2)] = null);

(statearr_54224_54310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (20))){
var inst_54122 = (state_54218[(12)]);
var inst_54130 = figwheel.client.file_reloading.sort_files.call(null,inst_54122);
var state_54218__$1 = state_54218;
var statearr_54225_54311 = state_54218__$1;
(statearr_54225_54311[(2)] = inst_54130);

(statearr_54225_54311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (27))){
var state_54218__$1 = state_54218;
var statearr_54226_54312 = state_54218__$1;
(statearr_54226_54312[(2)] = null);

(statearr_54226_54312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (1))){
var inst_54071 = (state_54218[(13)]);
var inst_54068 = before_jsload.call(null,files);
var inst_54069 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_54070 = (function (){return ((function (inst_54071,inst_54068,inst_54069,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53813_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53813_SHARP_);
});
;})(inst_54071,inst_54068,inst_54069,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54071__$1 = cljs.core.filter.call(null,inst_54070,files);
var inst_54072 = cljs.core.not_empty.call(null,inst_54071__$1);
var state_54218__$1 = (function (){var statearr_54227 = state_54218;
(statearr_54227[(14)] = inst_54069);

(statearr_54227[(13)] = inst_54071__$1);

(statearr_54227[(15)] = inst_54068);

return statearr_54227;
})();
if(cljs.core.truth_(inst_54072)){
var statearr_54228_54313 = state_54218__$1;
(statearr_54228_54313[(1)] = (2));

} else {
var statearr_54229_54314 = state_54218__$1;
(statearr_54229_54314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (24))){
var state_54218__$1 = state_54218;
var statearr_54230_54315 = state_54218__$1;
(statearr_54230_54315[(2)] = null);

(statearr_54230_54315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (39))){
var inst_54172 = (state_54218[(16)]);
var state_54218__$1 = state_54218;
var statearr_54231_54316 = state_54218__$1;
(statearr_54231_54316[(2)] = inst_54172);

(statearr_54231_54316[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (46))){
var inst_54213 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54232_54317 = state_54218__$1;
(statearr_54232_54317[(2)] = inst_54213);

(statearr_54232_54317[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (4))){
var inst_54116 = (state_54218[(2)]);
var inst_54117 = cljs.core.List.EMPTY;
var inst_54118 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_54117);
var inst_54119 = (function (){return ((function (inst_54116,inst_54117,inst_54118,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53814_SHARP_){
var and__32835__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53814_SHARP_);
if(cljs.core.truth_(and__32835__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53814_SHARP_));
} else {
return and__32835__auto__;
}
});
;})(inst_54116,inst_54117,inst_54118,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54120 = cljs.core.filter.call(null,inst_54119,files);
var inst_54121 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_54122 = cljs.core.concat.call(null,inst_54120,inst_54121);
var state_54218__$1 = (function (){var statearr_54233 = state_54218;
(statearr_54233[(17)] = inst_54118);

(statearr_54233[(12)] = inst_54122);

(statearr_54233[(18)] = inst_54116);

return statearr_54233;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_54234_54318 = state_54218__$1;
(statearr_54234_54318[(1)] = (16));

} else {
var statearr_54235_54319 = state_54218__$1;
(statearr_54235_54319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (15))){
var inst_54106 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54236_54320 = state_54218__$1;
(statearr_54236_54320[(2)] = inst_54106);

(statearr_54236_54320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (21))){
var inst_54132 = (state_54218[(19)]);
var inst_54132__$1 = (state_54218[(2)]);
var inst_54133 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_54132__$1);
var state_54218__$1 = (function (){var statearr_54237 = state_54218;
(statearr_54237[(19)] = inst_54132__$1);

return statearr_54237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54218__$1,(22),inst_54133);
} else {
if((state_val_54219 === (31))){
var inst_54216 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54218__$1,inst_54216);
} else {
if((state_val_54219 === (32))){
var inst_54172 = (state_54218[(16)]);
var inst_54177 = inst_54172.cljs$lang$protocol_mask$partition0$;
var inst_54178 = (inst_54177 & (64));
var inst_54179 = inst_54172.cljs$core$ISeq$;
var inst_54180 = (inst_54178) || (inst_54179);
var state_54218__$1 = state_54218;
if(cljs.core.truth_(inst_54180)){
var statearr_54238_54321 = state_54218__$1;
(statearr_54238_54321[(1)] = (35));

} else {
var statearr_54239_54322 = state_54218__$1;
(statearr_54239_54322[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (40))){
var inst_54193 = (state_54218[(20)]);
var inst_54192 = (state_54218[(2)]);
var inst_54193__$1 = cljs.core.get.call(null,inst_54192,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_54194 = cljs.core.get.call(null,inst_54192,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_54195 = cljs.core.not_empty.call(null,inst_54193__$1);
var state_54218__$1 = (function (){var statearr_54240 = state_54218;
(statearr_54240[(20)] = inst_54193__$1);

(statearr_54240[(21)] = inst_54194);

return statearr_54240;
})();
if(cljs.core.truth_(inst_54195)){
var statearr_54241_54323 = state_54218__$1;
(statearr_54241_54323[(1)] = (41));

} else {
var statearr_54242_54324 = state_54218__$1;
(statearr_54242_54324[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (33))){
var state_54218__$1 = state_54218;
var statearr_54243_54325 = state_54218__$1;
(statearr_54243_54325[(2)] = false);

(statearr_54243_54325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (13))){
var inst_54092 = (state_54218[(22)]);
var inst_54096 = cljs.core.chunk_first.call(null,inst_54092);
var inst_54097 = cljs.core.chunk_rest.call(null,inst_54092);
var inst_54098 = cljs.core.count.call(null,inst_54096);
var inst_54079 = inst_54097;
var inst_54080 = inst_54096;
var inst_54081 = inst_54098;
var inst_54082 = (0);
var state_54218__$1 = (function (){var statearr_54244 = state_54218;
(statearr_54244[(7)] = inst_54081);

(statearr_54244[(8)] = inst_54080);

(statearr_54244[(9)] = inst_54079);

(statearr_54244[(10)] = inst_54082);

return statearr_54244;
})();
var statearr_54245_54326 = state_54218__$1;
(statearr_54245_54326[(2)] = null);

(statearr_54245_54326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (22))){
var inst_54132 = (state_54218[(19)]);
var inst_54135 = (state_54218[(23)]);
var inst_54140 = (state_54218[(24)]);
var inst_54136 = (state_54218[(25)]);
var inst_54135__$1 = (state_54218[(2)]);
var inst_54136__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54135__$1);
var inst_54137 = (function (){var all_files = inst_54132;
var res_SINGLEQUOTE_ = inst_54135__$1;
var res = inst_54136__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_54132,inst_54135,inst_54140,inst_54136,inst_54135__$1,inst_54136__$1,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53815_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53815_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_54132,inst_54135,inst_54140,inst_54136,inst_54135__$1,inst_54136__$1,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54138 = cljs.core.filter.call(null,inst_54137,inst_54135__$1);
var inst_54139 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_54140__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54139);
var inst_54141 = cljs.core.not_empty.call(null,inst_54140__$1);
var state_54218__$1 = (function (){var statearr_54246 = state_54218;
(statearr_54246[(26)] = inst_54138);

(statearr_54246[(23)] = inst_54135__$1);

(statearr_54246[(24)] = inst_54140__$1);

(statearr_54246[(25)] = inst_54136__$1);

return statearr_54246;
})();
if(cljs.core.truth_(inst_54141)){
var statearr_54247_54327 = state_54218__$1;
(statearr_54247_54327[(1)] = (23));

} else {
var statearr_54248_54328 = state_54218__$1;
(statearr_54248_54328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (36))){
var state_54218__$1 = state_54218;
var statearr_54249_54329 = state_54218__$1;
(statearr_54249_54329[(2)] = false);

(statearr_54249_54329[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (41))){
var inst_54193 = (state_54218[(20)]);
var inst_54197 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_54198 = cljs.core.map.call(null,inst_54197,inst_54193);
var inst_54199 = cljs.core.pr_str.call(null,inst_54198);
var inst_54200 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_54199)].join('');
var inst_54201 = figwheel.client.utils.log.call(null,inst_54200);
var state_54218__$1 = state_54218;
var statearr_54250_54330 = state_54218__$1;
(statearr_54250_54330[(2)] = inst_54201);

(statearr_54250_54330[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (43))){
var inst_54194 = (state_54218[(21)]);
var inst_54204 = (state_54218[(2)]);
var inst_54205 = cljs.core.not_empty.call(null,inst_54194);
var state_54218__$1 = (function (){var statearr_54251 = state_54218;
(statearr_54251[(27)] = inst_54204);

return statearr_54251;
})();
if(cljs.core.truth_(inst_54205)){
var statearr_54252_54331 = state_54218__$1;
(statearr_54252_54331[(1)] = (44));

} else {
var statearr_54253_54332 = state_54218__$1;
(statearr_54253_54332[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (29))){
var inst_54138 = (state_54218[(26)]);
var inst_54172 = (state_54218[(16)]);
var inst_54132 = (state_54218[(19)]);
var inst_54135 = (state_54218[(23)]);
var inst_54140 = (state_54218[(24)]);
var inst_54136 = (state_54218[(25)]);
var inst_54168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_54171 = (function (){var all_files = inst_54132;
var res_SINGLEQUOTE_ = inst_54135;
var res = inst_54136;
var files_not_loaded = inst_54138;
var dependencies_that_loaded = inst_54140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54172,inst_54132,inst_54135,inst_54140,inst_54136,inst_54168,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54170){
var map__54254 = p__54170;
var map__54254__$1 = ((((!((map__54254 == null)))?((((map__54254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54254):map__54254);
var namespace = cljs.core.get.call(null,map__54254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54172,inst_54132,inst_54135,inst_54140,inst_54136,inst_54168,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54172__$1 = cljs.core.group_by.call(null,inst_54171,inst_54138);
var inst_54174 = (inst_54172__$1 == null);
var inst_54175 = cljs.core.not.call(null,inst_54174);
var state_54218__$1 = (function (){var statearr_54256 = state_54218;
(statearr_54256[(28)] = inst_54168);

(statearr_54256[(16)] = inst_54172__$1);

return statearr_54256;
})();
if(inst_54175){
var statearr_54257_54333 = state_54218__$1;
(statearr_54257_54333[(1)] = (32));

} else {
var statearr_54258_54334 = state_54218__$1;
(statearr_54258_54334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (44))){
var inst_54194 = (state_54218[(21)]);
var inst_54207 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54194);
var inst_54208 = cljs.core.pr_str.call(null,inst_54207);
var inst_54209 = [cljs.core.str("not required: "),cljs.core.str(inst_54208)].join('');
var inst_54210 = figwheel.client.utils.log.call(null,inst_54209);
var state_54218__$1 = state_54218;
var statearr_54259_54335 = state_54218__$1;
(statearr_54259_54335[(2)] = inst_54210);

(statearr_54259_54335[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (6))){
var inst_54113 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54260_54336 = state_54218__$1;
(statearr_54260_54336[(2)] = inst_54113);

(statearr_54260_54336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (28))){
var inst_54138 = (state_54218[(26)]);
var inst_54165 = (state_54218[(2)]);
var inst_54166 = cljs.core.not_empty.call(null,inst_54138);
var state_54218__$1 = (function (){var statearr_54261 = state_54218;
(statearr_54261[(29)] = inst_54165);

return statearr_54261;
})();
if(cljs.core.truth_(inst_54166)){
var statearr_54262_54337 = state_54218__$1;
(statearr_54262_54337[(1)] = (29));

} else {
var statearr_54263_54338 = state_54218__$1;
(statearr_54263_54338[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (25))){
var inst_54136 = (state_54218[(25)]);
var inst_54152 = (state_54218[(2)]);
var inst_54153 = cljs.core.not_empty.call(null,inst_54136);
var state_54218__$1 = (function (){var statearr_54264 = state_54218;
(statearr_54264[(30)] = inst_54152);

return statearr_54264;
})();
if(cljs.core.truth_(inst_54153)){
var statearr_54265_54339 = state_54218__$1;
(statearr_54265_54339[(1)] = (26));

} else {
var statearr_54266_54340 = state_54218__$1;
(statearr_54266_54340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (34))){
var inst_54187 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
if(cljs.core.truth_(inst_54187)){
var statearr_54267_54341 = state_54218__$1;
(statearr_54267_54341[(1)] = (38));

} else {
var statearr_54268_54342 = state_54218__$1;
(statearr_54268_54342[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (17))){
var state_54218__$1 = state_54218;
var statearr_54269_54343 = state_54218__$1;
(statearr_54269_54343[(2)] = recompile_dependents);

(statearr_54269_54343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (3))){
var state_54218__$1 = state_54218;
var statearr_54270_54344 = state_54218__$1;
(statearr_54270_54344[(2)] = null);

(statearr_54270_54344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (12))){
var inst_54109 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54271_54345 = state_54218__$1;
(statearr_54271_54345[(2)] = inst_54109);

(statearr_54271_54345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (2))){
var inst_54071 = (state_54218[(13)]);
var inst_54078 = cljs.core.seq.call(null,inst_54071);
var inst_54079 = inst_54078;
var inst_54080 = null;
var inst_54081 = (0);
var inst_54082 = (0);
var state_54218__$1 = (function (){var statearr_54272 = state_54218;
(statearr_54272[(7)] = inst_54081);

(statearr_54272[(8)] = inst_54080);

(statearr_54272[(9)] = inst_54079);

(statearr_54272[(10)] = inst_54082);

return statearr_54272;
})();
var statearr_54273_54346 = state_54218__$1;
(statearr_54273_54346[(2)] = null);

(statearr_54273_54346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (23))){
var inst_54138 = (state_54218[(26)]);
var inst_54132 = (state_54218[(19)]);
var inst_54135 = (state_54218[(23)]);
var inst_54140 = (state_54218[(24)]);
var inst_54136 = (state_54218[(25)]);
var inst_54143 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_54145 = (function (){var all_files = inst_54132;
var res_SINGLEQUOTE_ = inst_54135;
var res = inst_54136;
var files_not_loaded = inst_54138;
var dependencies_that_loaded = inst_54140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54143,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54144){
var map__54274 = p__54144;
var map__54274__$1 = ((((!((map__54274 == null)))?((((map__54274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54274):map__54274);
var request_url = cljs.core.get.call(null,map__54274__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54143,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54146 = cljs.core.reverse.call(null,inst_54140);
var inst_54147 = cljs.core.map.call(null,inst_54145,inst_54146);
var inst_54148 = cljs.core.pr_str.call(null,inst_54147);
var inst_54149 = figwheel.client.utils.log.call(null,inst_54148);
var state_54218__$1 = (function (){var statearr_54276 = state_54218;
(statearr_54276[(31)] = inst_54143);

return statearr_54276;
})();
var statearr_54277_54347 = state_54218__$1;
(statearr_54277_54347[(2)] = inst_54149);

(statearr_54277_54347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (35))){
var state_54218__$1 = state_54218;
var statearr_54278_54348 = state_54218__$1;
(statearr_54278_54348[(2)] = true);

(statearr_54278_54348[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (19))){
var inst_54122 = (state_54218[(12)]);
var inst_54128 = figwheel.client.file_reloading.expand_files.call(null,inst_54122);
var state_54218__$1 = state_54218;
var statearr_54279_54349 = state_54218__$1;
(statearr_54279_54349[(2)] = inst_54128);

(statearr_54279_54349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (11))){
var state_54218__$1 = state_54218;
var statearr_54280_54350 = state_54218__$1;
(statearr_54280_54350[(2)] = null);

(statearr_54280_54350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (9))){
var inst_54111 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54281_54351 = state_54218__$1;
(statearr_54281_54351[(2)] = inst_54111);

(statearr_54281_54351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (5))){
var inst_54081 = (state_54218[(7)]);
var inst_54082 = (state_54218[(10)]);
var inst_54084 = (inst_54082 < inst_54081);
var inst_54085 = inst_54084;
var state_54218__$1 = state_54218;
if(cljs.core.truth_(inst_54085)){
var statearr_54282_54352 = state_54218__$1;
(statearr_54282_54352[(1)] = (7));

} else {
var statearr_54283_54353 = state_54218__$1;
(statearr_54283_54353[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (14))){
var inst_54092 = (state_54218[(22)]);
var inst_54101 = cljs.core.first.call(null,inst_54092);
var inst_54102 = figwheel.client.file_reloading.eval_body.call(null,inst_54101,opts);
var inst_54103 = cljs.core.next.call(null,inst_54092);
var inst_54079 = inst_54103;
var inst_54080 = null;
var inst_54081 = (0);
var inst_54082 = (0);
var state_54218__$1 = (function (){var statearr_54284 = state_54218;
(statearr_54284[(7)] = inst_54081);

(statearr_54284[(8)] = inst_54080);

(statearr_54284[(9)] = inst_54079);

(statearr_54284[(10)] = inst_54082);

(statearr_54284[(32)] = inst_54102);

return statearr_54284;
})();
var statearr_54285_54354 = state_54218__$1;
(statearr_54285_54354[(2)] = null);

(statearr_54285_54354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (45))){
var state_54218__$1 = state_54218;
var statearr_54286_54355 = state_54218__$1;
(statearr_54286_54355[(2)] = null);

(statearr_54286_54355[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (26))){
var inst_54138 = (state_54218[(26)]);
var inst_54132 = (state_54218[(19)]);
var inst_54135 = (state_54218[(23)]);
var inst_54140 = (state_54218[(24)]);
var inst_54136 = (state_54218[(25)]);
var inst_54155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_54157 = (function (){var all_files = inst_54132;
var res_SINGLEQUOTE_ = inst_54135;
var res = inst_54136;
var files_not_loaded = inst_54138;
var dependencies_that_loaded = inst_54140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54155,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54156){
var map__54287 = p__54156;
var map__54287__$1 = ((((!((map__54287 == null)))?((((map__54287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54287):map__54287);
var namespace = cljs.core.get.call(null,map__54287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__54287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54155,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54158 = cljs.core.map.call(null,inst_54157,inst_54136);
var inst_54159 = cljs.core.pr_str.call(null,inst_54158);
var inst_54160 = figwheel.client.utils.log.call(null,inst_54159);
var inst_54161 = (function (){var all_files = inst_54132;
var res_SINGLEQUOTE_ = inst_54135;
var res = inst_54136;
var files_not_loaded = inst_54138;
var dependencies_that_loaded = inst_54140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54155,inst_54157,inst_54158,inst_54159,inst_54160,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54138,inst_54132,inst_54135,inst_54140,inst_54136,inst_54155,inst_54157,inst_54158,inst_54159,inst_54160,state_val_54219,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54162 = setTimeout(inst_54161,(10));
var state_54218__$1 = (function (){var statearr_54289 = state_54218;
(statearr_54289[(33)] = inst_54160);

(statearr_54289[(34)] = inst_54155);

return statearr_54289;
})();
var statearr_54290_54356 = state_54218__$1;
(statearr_54290_54356[(2)] = inst_54162);

(statearr_54290_54356[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (16))){
var state_54218__$1 = state_54218;
var statearr_54291_54357 = state_54218__$1;
(statearr_54291_54357[(2)] = reload_dependents);

(statearr_54291_54357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (38))){
var inst_54172 = (state_54218[(16)]);
var inst_54189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54172);
var state_54218__$1 = state_54218;
var statearr_54292_54358 = state_54218__$1;
(statearr_54292_54358[(2)] = inst_54189);

(statearr_54292_54358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (30))){
var state_54218__$1 = state_54218;
var statearr_54293_54359 = state_54218__$1;
(statearr_54293_54359[(2)] = null);

(statearr_54293_54359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (10))){
var inst_54092 = (state_54218[(22)]);
var inst_54094 = cljs.core.chunked_seq_QMARK_.call(null,inst_54092);
var state_54218__$1 = state_54218;
if(inst_54094){
var statearr_54294_54360 = state_54218__$1;
(statearr_54294_54360[(1)] = (13));

} else {
var statearr_54295_54361 = state_54218__$1;
(statearr_54295_54361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (18))){
var inst_54126 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
if(cljs.core.truth_(inst_54126)){
var statearr_54296_54362 = state_54218__$1;
(statearr_54296_54362[(1)] = (19));

} else {
var statearr_54297_54363 = state_54218__$1;
(statearr_54297_54363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (42))){
var state_54218__$1 = state_54218;
var statearr_54298_54364 = state_54218__$1;
(statearr_54298_54364[(2)] = null);

(statearr_54298_54364[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (37))){
var inst_54184 = (state_54218[(2)]);
var state_54218__$1 = state_54218;
var statearr_54299_54365 = state_54218__$1;
(statearr_54299_54365[(2)] = inst_54184);

(statearr_54299_54365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54219 === (8))){
var inst_54092 = (state_54218[(22)]);
var inst_54079 = (state_54218[(9)]);
var inst_54092__$1 = cljs.core.seq.call(null,inst_54079);
var state_54218__$1 = (function (){var statearr_54300 = state_54218;
(statearr_54300[(22)] = inst_54092__$1);

return statearr_54300;
})();
if(inst_54092__$1){
var statearr_54301_54366 = state_54218__$1;
(statearr_54301_54366[(1)] = (10));

} else {
var statearr_54302_54367 = state_54218__$1;
(statearr_54302_54367[(1)] = (11));

}

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
});})(c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42317__auto__,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____0 = (function (){
var statearr_54306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54306[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__);

(statearr_54306[(1)] = (1));

return statearr_54306;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____1 = (function (state_54218){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_54218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e54307){if((e54307 instanceof Object)){
var ex__42321__auto__ = e54307;
var statearr_54308_54368 = state_54218;
(statearr_54308_54368[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54369 = state_54218;
state_54218 = G__54369;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__ = function(state_54218){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____1.call(this,state_54218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__42431__auto__ = (function (){var statearr_54309 = f__42430__auto__.call(null);
(statearr_54309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_54309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__,map__54064,map__54064__$1,opts,before_jsload,on_jsload,reload_dependents,map__54065,map__54065__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__42429__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__54372,link){
var map__54375 = p__54372;
var map__54375__$1 = ((((!((map__54375 == null)))?((((map__54375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54375):map__54375);
var file = cljs.core.get.call(null,map__54375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__54375,map__54375__$1,file){
return (function (p1__54370_SHARP_,p2__54371_SHARP_){
if(cljs.core._EQ_.call(null,p1__54370_SHARP_,p2__54371_SHARP_)){
return p1__54370_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__54375,map__54375__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__54381){
var map__54382 = p__54381;
var map__54382__$1 = ((((!((map__54382 == null)))?((((map__54382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54382):map__54382);
var match_length = cljs.core.get.call(null,map__54382__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__54382__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__54377_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__54377_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args54384 = [];
var len__33922__auto___54387 = arguments.length;
var i__33923__auto___54388 = (0);
while(true){
if((i__33923__auto___54388 < len__33922__auto___54387)){
args54384.push((arguments[i__33923__auto___54388]));

var G__54389 = (i__33923__auto___54388 + (1));
i__33923__auto___54388 = G__54389;
continue;
} else {
}
break;
}

var G__54386 = args54384.length;
switch (G__54386) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54384.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__54391_SHARP_,p2__54392_SHARP_){
return cljs.core.assoc.call(null,p1__54391_SHARP_,cljs.core.get.call(null,p2__54392_SHARP_,key),p2__54392_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__54393){
var map__54396 = p__54393;
var map__54396__$1 = ((((!((map__54396 == null)))?((((map__54396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54396):map__54396);
var f_data = map__54396__$1;
var file = cljs.core.get.call(null,map__54396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__54398,p__54399){
var map__54408 = p__54398;
var map__54408__$1 = ((((!((map__54408 == null)))?((((map__54408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54408):map__54408);
var opts = map__54408__$1;
var on_cssload = cljs.core.get.call(null,map__54408__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__54409 = p__54399;
var map__54409__$1 = ((((!((map__54409 == null)))?((((map__54409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54409):map__54409);
var files_msg = map__54409__$1;
var files = cljs.core.get.call(null,map__54409__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__54412_54416 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__54413_54417 = null;
var count__54414_54418 = (0);
var i__54415_54419 = (0);
while(true){
if((i__54415_54419 < count__54414_54418)){
var f_54420 = cljs.core._nth.call(null,chunk__54413_54417,i__54415_54419);
figwheel.client.file_reloading.reload_css_file.call(null,f_54420);

var G__54421 = seq__54412_54416;
var G__54422 = chunk__54413_54417;
var G__54423 = count__54414_54418;
var G__54424 = (i__54415_54419 + (1));
seq__54412_54416 = G__54421;
chunk__54413_54417 = G__54422;
count__54414_54418 = G__54423;
i__54415_54419 = G__54424;
continue;
} else {
var temp__4657__auto___54425 = cljs.core.seq.call(null,seq__54412_54416);
if(temp__4657__auto___54425){
var seq__54412_54426__$1 = temp__4657__auto___54425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54412_54426__$1)){
var c__33658__auto___54427 = cljs.core.chunk_first.call(null,seq__54412_54426__$1);
var G__54428 = cljs.core.chunk_rest.call(null,seq__54412_54426__$1);
var G__54429 = c__33658__auto___54427;
var G__54430 = cljs.core.count.call(null,c__33658__auto___54427);
var G__54431 = (0);
seq__54412_54416 = G__54428;
chunk__54413_54417 = G__54429;
count__54414_54418 = G__54430;
i__54415_54419 = G__54431;
continue;
} else {
var f_54432 = cljs.core.first.call(null,seq__54412_54426__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_54432);

var G__54433 = cljs.core.next.call(null,seq__54412_54426__$1);
var G__54434 = null;
var G__54435 = (0);
var G__54436 = (0);
seq__54412_54416 = G__54433;
chunk__54413_54417 = G__54434;
count__54414_54418 = G__54435;
i__54415_54419 = G__54436;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__54408,map__54408__$1,opts,on_cssload,map__54409,map__54409__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__54408,map__54408__$1,opts,on_cssload,map__54409,map__54409__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479316908083