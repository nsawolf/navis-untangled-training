// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args56236 = [];
var len__33922__auto___56239 = arguments.length;
var i__33923__auto___56240 = (0);
while(true){
if((i__33923__auto___56240 < len__33922__auto___56239)){
args56236.push((arguments[i__33923__auto___56240]));

var G__56241 = (i__33923__auto___56240 + (1));
i__33923__auto___56240 = G__56241;
continue;
} else {
}
break;
}

var G__56238 = args56236.length;
switch (G__56238) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56236.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__33929__auto__ = [];
var len__33922__auto___56244 = arguments.length;
var i__33923__auto___56245 = (0);
while(true){
if((i__33923__auto___56245 < len__33922__auto___56244)){
args__33929__auto__.push((arguments[i__33923__auto___56245]));

var G__56246 = (i__33923__auto___56245 + (1));
i__33923__auto___56245 = G__56246;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56243){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56243));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__33929__auto__ = [];
var len__33922__auto___56248 = arguments.length;
var i__33923__auto___56249 = (0);
while(true){
if((i__33923__auto___56249 < len__33922__auto___56248)){
args__33929__auto__.push((arguments[i__33923__auto___56249]));

var G__56250 = (i__33923__auto___56249 + (1));
i__33923__auto___56249 = G__56250;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56247){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56247));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__56251 = cljs.core._EQ_;
var expr__56252 = (function (){var or__32847__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e56255){if((e56255 instanceof Error)){
var e = e56255;
return false;
} else {
throw e56255;

}
}})();
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__56251.call(null,"true",expr__56252))){
return true;
} else {
if(cljs.core.truth_(pred__56251.call(null,"false",expr__56252))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__56252)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e56257){if((e56257 instanceof Error)){
var e = e56257;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e56257;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56258){
var map__56261 = p__56258;
var map__56261__$1 = ((((!((map__56261 == null)))?((((map__56261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56261):map__56261);
var message = cljs.core.get.call(null,map__56261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56261__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__32847__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__32847__auto__)){
return or__32847__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__32835__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__32835__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__32835__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__42429__auto___56423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___56423,ch){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___56423,ch){
return (function (state_56392){
var state_val_56393 = (state_56392[(1)]);
if((state_val_56393 === (7))){
var inst_56388 = (state_56392[(2)]);
var state_56392__$1 = state_56392;
var statearr_56394_56424 = state_56392__$1;
(statearr_56394_56424[(2)] = inst_56388);

(statearr_56394_56424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (1))){
var state_56392__$1 = state_56392;
var statearr_56395_56425 = state_56392__$1;
(statearr_56395_56425[(2)] = null);

(statearr_56395_56425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (4))){
var inst_56345 = (state_56392[(7)]);
var inst_56345__$1 = (state_56392[(2)]);
var state_56392__$1 = (function (){var statearr_56396 = state_56392;
(statearr_56396[(7)] = inst_56345__$1);

return statearr_56396;
})();
if(cljs.core.truth_(inst_56345__$1)){
var statearr_56397_56426 = state_56392__$1;
(statearr_56397_56426[(1)] = (5));

} else {
var statearr_56398_56427 = state_56392__$1;
(statearr_56398_56427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (15))){
var inst_56352 = (state_56392[(8)]);
var inst_56367 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56352);
var inst_56368 = cljs.core.first.call(null,inst_56367);
var inst_56369 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56368);
var inst_56370 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_56369)].join('');
var inst_56371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56370);
var state_56392__$1 = state_56392;
var statearr_56399_56428 = state_56392__$1;
(statearr_56399_56428[(2)] = inst_56371);

(statearr_56399_56428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (13))){
var inst_56376 = (state_56392[(2)]);
var state_56392__$1 = state_56392;
var statearr_56400_56429 = state_56392__$1;
(statearr_56400_56429[(2)] = inst_56376);

(statearr_56400_56429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (6))){
var state_56392__$1 = state_56392;
var statearr_56401_56430 = state_56392__$1;
(statearr_56401_56430[(2)] = null);

(statearr_56401_56430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (17))){
var inst_56374 = (state_56392[(2)]);
var state_56392__$1 = state_56392;
var statearr_56402_56431 = state_56392__$1;
(statearr_56402_56431[(2)] = inst_56374);

(statearr_56402_56431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (3))){
var inst_56390 = (state_56392[(2)]);
var state_56392__$1 = state_56392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56392__$1,inst_56390);
} else {
if((state_val_56393 === (12))){
var inst_56351 = (state_56392[(9)]);
var inst_56365 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56351,opts);
var state_56392__$1 = state_56392;
if(cljs.core.truth_(inst_56365)){
var statearr_56403_56432 = state_56392__$1;
(statearr_56403_56432[(1)] = (15));

} else {
var statearr_56404_56433 = state_56392__$1;
(statearr_56404_56433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (2))){
var state_56392__$1 = state_56392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56392__$1,(4),ch);
} else {
if((state_val_56393 === (11))){
var inst_56352 = (state_56392[(8)]);
var inst_56357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56358 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56352);
var inst_56359 = cljs.core.async.timeout.call(null,(1000));
var inst_56360 = [inst_56358,inst_56359];
var inst_56361 = (new cljs.core.PersistentVector(null,2,(5),inst_56357,inst_56360,null));
var state_56392__$1 = state_56392;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56392__$1,(14),inst_56361);
} else {
if((state_val_56393 === (9))){
var inst_56352 = (state_56392[(8)]);
var inst_56378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56379 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56352);
var inst_56380 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56379);
var inst_56381 = [cljs.core.str("Not loading: "),cljs.core.str(inst_56380)].join('');
var inst_56382 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56381);
var state_56392__$1 = (function (){var statearr_56405 = state_56392;
(statearr_56405[(10)] = inst_56378);

return statearr_56405;
})();
var statearr_56406_56434 = state_56392__$1;
(statearr_56406_56434[(2)] = inst_56382);

(statearr_56406_56434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (5))){
var inst_56345 = (state_56392[(7)]);
var inst_56347 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56348 = (new cljs.core.PersistentArrayMap(null,2,inst_56347,null));
var inst_56349 = (new cljs.core.PersistentHashSet(null,inst_56348,null));
var inst_56350 = figwheel.client.focus_msgs.call(null,inst_56349,inst_56345);
var inst_56351 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56350);
var inst_56352 = cljs.core.first.call(null,inst_56350);
var inst_56353 = figwheel.client.autoload_QMARK_.call(null);
var state_56392__$1 = (function (){var statearr_56407 = state_56392;
(statearr_56407[(9)] = inst_56351);

(statearr_56407[(8)] = inst_56352);

return statearr_56407;
})();
if(cljs.core.truth_(inst_56353)){
var statearr_56408_56435 = state_56392__$1;
(statearr_56408_56435[(1)] = (8));

} else {
var statearr_56409_56436 = state_56392__$1;
(statearr_56409_56436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (14))){
var inst_56363 = (state_56392[(2)]);
var state_56392__$1 = state_56392;
var statearr_56410_56437 = state_56392__$1;
(statearr_56410_56437[(2)] = inst_56363);

(statearr_56410_56437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (16))){
var state_56392__$1 = state_56392;
var statearr_56411_56438 = state_56392__$1;
(statearr_56411_56438[(2)] = null);

(statearr_56411_56438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (10))){
var inst_56384 = (state_56392[(2)]);
var state_56392__$1 = (function (){var statearr_56412 = state_56392;
(statearr_56412[(11)] = inst_56384);

return statearr_56412;
})();
var statearr_56413_56439 = state_56392__$1;
(statearr_56413_56439[(2)] = null);

(statearr_56413_56439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56393 === (8))){
var inst_56351 = (state_56392[(9)]);
var inst_56355 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56351,opts);
var state_56392__$1 = state_56392;
if(cljs.core.truth_(inst_56355)){
var statearr_56414_56440 = state_56392__$1;
(statearr_56414_56440[(1)] = (11));

} else {
var statearr_56415_56441 = state_56392__$1;
(statearr_56415_56441[(1)] = (12));

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
});})(c__42429__auto___56423,ch))
;
return ((function (switch__42317__auto__,c__42429__auto___56423,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____0 = (function (){
var statearr_56419 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56419[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__);

(statearr_56419[(1)] = (1));

return statearr_56419;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____1 = (function (state_56392){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_56392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e56420){if((e56420 instanceof Object)){
var ex__42321__auto__ = e56420;
var statearr_56421_56442 = state_56392;
(statearr_56421_56442[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56443 = state_56392;
state_56392 = G__56443;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__ = function(state_56392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____1.call(this,state_56392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42318__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___56423,ch))
})();
var state__42431__auto__ = (function (){var statearr_56422 = f__42430__auto__.call(null);
(statearr_56422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___56423);

return statearr_56422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___56423,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56444_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56444_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_56447 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56447){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e56446){if((e56446 instanceof Error)){
var e = e56446;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56447], null));
} else {
var e = e56446;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_56447))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56448){
var map__56457 = p__56448;
var map__56457__$1 = ((((!((map__56457 == null)))?((((map__56457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56457):map__56457);
var opts = map__56457__$1;
var build_id = cljs.core.get.call(null,map__56457__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56457,map__56457__$1,opts,build_id){
return (function (p__56459){
var vec__56460 = p__56459;
var seq__56461 = cljs.core.seq.call(null,vec__56460);
var first__56462 = cljs.core.first.call(null,seq__56461);
var seq__56461__$1 = cljs.core.next.call(null,seq__56461);
var map__56463 = first__56462;
var map__56463__$1 = ((((!((map__56463 == null)))?((((map__56463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56463):map__56463);
var msg = map__56463__$1;
var msg_name = cljs.core.get.call(null,map__56463__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56461__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56460,seq__56461,first__56462,seq__56461__$1,map__56463,map__56463__$1,msg,msg_name,_,map__56457,map__56457__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56460,seq__56461,first__56462,seq__56461__$1,map__56463,map__56463__$1,msg,msg_name,_,map__56457,map__56457__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56457,map__56457__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56471){
var vec__56472 = p__56471;
var seq__56473 = cljs.core.seq.call(null,vec__56472);
var first__56474 = cljs.core.first.call(null,seq__56473);
var seq__56473__$1 = cljs.core.next.call(null,seq__56473);
var map__56475 = first__56474;
var map__56475__$1 = ((((!((map__56475 == null)))?((((map__56475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56475):map__56475);
var msg = map__56475__$1;
var msg_name = cljs.core.get.call(null,map__56475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56473__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56477){
var map__56489 = p__56477;
var map__56489__$1 = ((((!((map__56489 == null)))?((((map__56489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56489):map__56489);
var on_compile_warning = cljs.core.get.call(null,map__56489__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56489__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56489,map__56489__$1,on_compile_warning,on_compile_fail){
return (function (p__56491){
var vec__56492 = p__56491;
var seq__56493 = cljs.core.seq.call(null,vec__56492);
var first__56494 = cljs.core.first.call(null,seq__56493);
var seq__56493__$1 = cljs.core.next.call(null,seq__56493);
var map__56495 = first__56494;
var map__56495__$1 = ((((!((map__56495 == null)))?((((map__56495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56495):map__56495);
var msg = map__56495__$1;
var msg_name = cljs.core.get.call(null,map__56495__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56493__$1;
var pred__56497 = cljs.core._EQ_;
var expr__56498 = msg_name;
if(cljs.core.truth_(pred__56497.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56498))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56497.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56498))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56489,map__56489__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__,msg_hist,msg_names,msg){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__,msg_hist,msg_names,msg){
return (function (state_56726){
var state_val_56727 = (state_56726[(1)]);
if((state_val_56727 === (7))){
var inst_56646 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56646)){
var statearr_56728_56778 = state_56726__$1;
(statearr_56728_56778[(1)] = (8));

} else {
var statearr_56729_56779 = state_56726__$1;
(statearr_56729_56779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (20))){
var inst_56720 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56730_56780 = state_56726__$1;
(statearr_56730_56780[(2)] = inst_56720);

(statearr_56730_56780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (27))){
var inst_56716 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56731_56781 = state_56726__$1;
(statearr_56731_56781[(2)] = inst_56716);

(statearr_56731_56781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (1))){
var inst_56639 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56639)){
var statearr_56732_56782 = state_56726__$1;
(statearr_56732_56782[(1)] = (2));

} else {
var statearr_56733_56783 = state_56726__$1;
(statearr_56733_56783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (24))){
var inst_56718 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56734_56784 = state_56726__$1;
(statearr_56734_56784[(2)] = inst_56718);

(statearr_56734_56784[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (4))){
var inst_56724 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56726__$1,inst_56724);
} else {
if((state_val_56727 === (15))){
var inst_56722 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56735_56785 = state_56726__$1;
(statearr_56735_56785[(2)] = inst_56722);

(statearr_56735_56785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (21))){
var inst_56675 = (state_56726[(2)]);
var inst_56676 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56677 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56676);
var state_56726__$1 = (function (){var statearr_56736 = state_56726;
(statearr_56736[(7)] = inst_56675);

return statearr_56736;
})();
var statearr_56737_56786 = state_56726__$1;
(statearr_56737_56786[(2)] = inst_56677);

(statearr_56737_56786[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (31))){
var inst_56705 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56705)){
var statearr_56738_56787 = state_56726__$1;
(statearr_56738_56787[(1)] = (34));

} else {
var statearr_56739_56788 = state_56726__$1;
(statearr_56739_56788[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (32))){
var inst_56714 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56740_56789 = state_56726__$1;
(statearr_56740_56789[(2)] = inst_56714);

(statearr_56740_56789[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (33))){
var inst_56701 = (state_56726[(2)]);
var inst_56702 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56703 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56702);
var state_56726__$1 = (function (){var statearr_56741 = state_56726;
(statearr_56741[(8)] = inst_56701);

return statearr_56741;
})();
var statearr_56742_56790 = state_56726__$1;
(statearr_56742_56790[(2)] = inst_56703);

(statearr_56742_56790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (13))){
var inst_56660 = figwheel.client.heads_up.clear.call(null);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(16),inst_56660);
} else {
if((state_val_56727 === (22))){
var inst_56681 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56682 = figwheel.client.heads_up.append_warning_message.call(null,inst_56681);
var state_56726__$1 = state_56726;
var statearr_56743_56791 = state_56726__$1;
(statearr_56743_56791[(2)] = inst_56682);

(statearr_56743_56791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (36))){
var inst_56712 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56744_56792 = state_56726__$1;
(statearr_56744_56792[(2)] = inst_56712);

(statearr_56744_56792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (29))){
var inst_56692 = (state_56726[(2)]);
var inst_56693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56693);
var state_56726__$1 = (function (){var statearr_56745 = state_56726;
(statearr_56745[(9)] = inst_56692);

return statearr_56745;
})();
var statearr_56746_56793 = state_56726__$1;
(statearr_56746_56793[(2)] = inst_56694);

(statearr_56746_56793[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (6))){
var inst_56641 = (state_56726[(10)]);
var state_56726__$1 = state_56726;
var statearr_56747_56794 = state_56726__$1;
(statearr_56747_56794[(2)] = inst_56641);

(statearr_56747_56794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (28))){
var inst_56688 = (state_56726[(2)]);
var inst_56689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56690 = figwheel.client.heads_up.display_warning.call(null,inst_56689);
var state_56726__$1 = (function (){var statearr_56748 = state_56726;
(statearr_56748[(11)] = inst_56688);

return statearr_56748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(29),inst_56690);
} else {
if((state_val_56727 === (25))){
var inst_56686 = figwheel.client.heads_up.clear.call(null);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(28),inst_56686);
} else {
if((state_val_56727 === (34))){
var inst_56707 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(37),inst_56707);
} else {
if((state_val_56727 === (17))){
var inst_56666 = (state_56726[(2)]);
var inst_56667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56667);
var state_56726__$1 = (function (){var statearr_56749 = state_56726;
(statearr_56749[(12)] = inst_56666);

return statearr_56749;
})();
var statearr_56750_56795 = state_56726__$1;
(statearr_56750_56795[(2)] = inst_56668);

(statearr_56750_56795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (3))){
var inst_56658 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56658)){
var statearr_56751_56796 = state_56726__$1;
(statearr_56751_56796[(1)] = (13));

} else {
var statearr_56752_56797 = state_56726__$1;
(statearr_56752_56797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (12))){
var inst_56654 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56753_56798 = state_56726__$1;
(statearr_56753_56798[(2)] = inst_56654);

(statearr_56753_56798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (2))){
var inst_56641 = (state_56726[(10)]);
var inst_56641__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56726__$1 = (function (){var statearr_56754 = state_56726;
(statearr_56754[(10)] = inst_56641__$1);

return statearr_56754;
})();
if(cljs.core.truth_(inst_56641__$1)){
var statearr_56755_56799 = state_56726__$1;
(statearr_56755_56799[(1)] = (5));

} else {
var statearr_56756_56800 = state_56726__$1;
(statearr_56756_56800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (23))){
var inst_56684 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56684)){
var statearr_56757_56801 = state_56726__$1;
(statearr_56757_56801[(1)] = (25));

} else {
var statearr_56758_56802 = state_56726__$1;
(statearr_56758_56802[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (35))){
var state_56726__$1 = state_56726;
var statearr_56759_56803 = state_56726__$1;
(statearr_56759_56803[(2)] = null);

(statearr_56759_56803[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (19))){
var inst_56679 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56679)){
var statearr_56760_56804 = state_56726__$1;
(statearr_56760_56804[(1)] = (22));

} else {
var statearr_56761_56805 = state_56726__$1;
(statearr_56761_56805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (11))){
var inst_56650 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56762_56806 = state_56726__$1;
(statearr_56762_56806[(2)] = inst_56650);

(statearr_56762_56806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (9))){
var inst_56652 = figwheel.client.heads_up.clear.call(null);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(12),inst_56652);
} else {
if((state_val_56727 === (5))){
var inst_56643 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56726__$1 = state_56726;
var statearr_56763_56807 = state_56726__$1;
(statearr_56763_56807[(2)] = inst_56643);

(statearr_56763_56807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (14))){
var inst_56670 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56670)){
var statearr_56764_56808 = state_56726__$1;
(statearr_56764_56808[(1)] = (18));

} else {
var statearr_56765_56809 = state_56726__$1;
(statearr_56765_56809[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (26))){
var inst_56696 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56726__$1 = state_56726;
if(cljs.core.truth_(inst_56696)){
var statearr_56766_56810 = state_56726__$1;
(statearr_56766_56810[(1)] = (30));

} else {
var statearr_56767_56811 = state_56726__$1;
(statearr_56767_56811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (16))){
var inst_56662 = (state_56726[(2)]);
var inst_56663 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56664 = figwheel.client.heads_up.display_exception.call(null,inst_56663);
var state_56726__$1 = (function (){var statearr_56768 = state_56726;
(statearr_56768[(13)] = inst_56662);

return statearr_56768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(17),inst_56664);
} else {
if((state_val_56727 === (30))){
var inst_56698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56699 = figwheel.client.heads_up.display_warning.call(null,inst_56698);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(33),inst_56699);
} else {
if((state_val_56727 === (10))){
var inst_56656 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56769_56812 = state_56726__$1;
(statearr_56769_56812[(2)] = inst_56656);

(statearr_56769_56812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (18))){
var inst_56672 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56673 = figwheel.client.heads_up.display_exception.call(null,inst_56672);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(21),inst_56673);
} else {
if((state_val_56727 === (37))){
var inst_56709 = (state_56726[(2)]);
var state_56726__$1 = state_56726;
var statearr_56770_56813 = state_56726__$1;
(statearr_56770_56813[(2)] = inst_56709);

(statearr_56770_56813[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56727 === (8))){
var inst_56648 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56726__$1 = state_56726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56726__$1,(11),inst_56648);
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
});})(c__42429__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42317__auto__,c__42429__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____0 = (function (){
var statearr_56774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56774[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__);

(statearr_56774[(1)] = (1));

return statearr_56774;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____1 = (function (state_56726){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_56726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e56775){if((e56775 instanceof Object)){
var ex__42321__auto__ = e56775;
var statearr_56776_56814 = state_56726;
(statearr_56776_56814[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56815 = state_56726;
state_56726 = G__56815;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__ = function(state_56726){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____1.call(this,state_56726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__,msg_hist,msg_names,msg))
})();
var state__42431__auto__ = (function (){var statearr_56777 = f__42430__auto__.call(null);
(statearr_56777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_56777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__,msg_hist,msg_names,msg))
);

return c__42429__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42429__auto___56878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto___56878,ch){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto___56878,ch){
return (function (state_56861){
var state_val_56862 = (state_56861[(1)]);
if((state_val_56862 === (1))){
var state_56861__$1 = state_56861;
var statearr_56863_56879 = state_56861__$1;
(statearr_56863_56879[(2)] = null);

(statearr_56863_56879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (2))){
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56861__$1,(4),ch);
} else {
if((state_val_56862 === (3))){
var inst_56859 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56861__$1,inst_56859);
} else {
if((state_val_56862 === (4))){
var inst_56849 = (state_56861[(7)]);
var inst_56849__$1 = (state_56861[(2)]);
var state_56861__$1 = (function (){var statearr_56864 = state_56861;
(statearr_56864[(7)] = inst_56849__$1);

return statearr_56864;
})();
if(cljs.core.truth_(inst_56849__$1)){
var statearr_56865_56880 = state_56861__$1;
(statearr_56865_56880[(1)] = (5));

} else {
var statearr_56866_56881 = state_56861__$1;
(statearr_56866_56881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (5))){
var inst_56849 = (state_56861[(7)]);
var inst_56851 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56849);
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56861__$1,(8),inst_56851);
} else {
if((state_val_56862 === (6))){
var state_56861__$1 = state_56861;
var statearr_56867_56882 = state_56861__$1;
(statearr_56867_56882[(2)] = null);

(statearr_56867_56882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (7))){
var inst_56857 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
var statearr_56868_56883 = state_56861__$1;
(statearr_56868_56883[(2)] = inst_56857);

(statearr_56868_56883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (8))){
var inst_56853 = (state_56861[(2)]);
var state_56861__$1 = (function (){var statearr_56869 = state_56861;
(statearr_56869[(8)] = inst_56853);

return statearr_56869;
})();
var statearr_56870_56884 = state_56861__$1;
(statearr_56870_56884[(2)] = null);

(statearr_56870_56884[(1)] = (2));


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
});})(c__42429__auto___56878,ch))
;
return ((function (switch__42317__auto__,c__42429__auto___56878,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42318__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42318__auto____0 = (function (){
var statearr_56874 = [null,null,null,null,null,null,null,null,null];
(statearr_56874[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42318__auto__);

(statearr_56874[(1)] = (1));

return statearr_56874;
});
var figwheel$client$heads_up_plugin_$_state_machine__42318__auto____1 = (function (state_56861){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_56861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e56875){if((e56875 instanceof Object)){
var ex__42321__auto__ = e56875;
var statearr_56876_56885 = state_56861;
(statearr_56876_56885[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56886 = state_56861;
state_56861 = G__56886;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42318__auto__ = function(state_56861){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42318__auto____1.call(this,state_56861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42318__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42318__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto___56878,ch))
})();
var state__42431__auto__ = (function (){var statearr_56877 = f__42430__auto__.call(null);
(statearr_56877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto___56878);

return statearr_56877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto___56878,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__){
return (function (state_56907){
var state_val_56908 = (state_56907[(1)]);
if((state_val_56908 === (1))){
var inst_56902 = cljs.core.async.timeout.call(null,(3000));
var state_56907__$1 = state_56907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56907__$1,(2),inst_56902);
} else {
if((state_val_56908 === (2))){
var inst_56904 = (state_56907[(2)]);
var inst_56905 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56907__$1 = (function (){var statearr_56909 = state_56907;
(statearr_56909[(7)] = inst_56904);

return statearr_56909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56907__$1,inst_56905);
} else {
return null;
}
}
});})(c__42429__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____0 = (function (){
var statearr_56913 = [null,null,null,null,null,null,null,null];
(statearr_56913[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__);

(statearr_56913[(1)] = (1));

return statearr_56913;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____1 = (function (state_56907){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_56907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e56914){if((e56914 instanceof Object)){
var ex__42321__auto__ = e56914;
var statearr_56915_56917 = state_56907;
(statearr_56915_56917[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56918 = state_56907;
state_56907 = G__56918;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__ = function(state_56907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____1.call(this,state_56907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42318__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__))
})();
var state__42431__auto__ = (function (){var statearr_56916 = f__42430__auto__.call(null);
(statearr_56916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_56916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__))
);

return c__42429__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42429__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__42430__auto__ = (function (){var switch__42317__auto__ = ((function (c__42429__auto__,figwheel_version,temp__4657__auto__){
return (function (state_56941){
var state_val_56942 = (state_56941[(1)]);
if((state_val_56942 === (1))){
var inst_56935 = cljs.core.async.timeout.call(null,(2000));
var state_56941__$1 = state_56941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56941__$1,(2),inst_56935);
} else {
if((state_val_56942 === (2))){
var inst_56937 = (state_56941[(2)]);
var inst_56938 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_56939 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56938);
var state_56941__$1 = (function (){var statearr_56943 = state_56941;
(statearr_56943[(7)] = inst_56937);

return statearr_56943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56941__$1,inst_56939);
} else {
return null;
}
}
});})(c__42429__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__42317__auto__,c__42429__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____0 = (function (){
var statearr_56947 = [null,null,null,null,null,null,null,null];
(statearr_56947[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__);

(statearr_56947[(1)] = (1));

return statearr_56947;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____1 = (function (state_56941){
while(true){
var ret_value__42319__auto__ = (function (){try{while(true){
var result__42320__auto__ = switch__42317__auto__.call(null,state_56941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42320__auto__;
}
break;
}
}catch (e56948){if((e56948 instanceof Object)){
var ex__42321__auto__ = e56948;
var statearr_56949_56951 = state_56941;
(statearr_56949_56951[(5)] = ex__42321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56952 = state_56941;
state_56941 = G__56952;
continue;
} else {
return ret_value__42319__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__ = function(state_56941){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____1.call(this,state_56941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42318__auto__;
})()
;})(switch__42317__auto__,c__42429__auto__,figwheel_version,temp__4657__auto__))
})();
var state__42431__auto__ = (function (){var statearr_56950 = f__42430__auto__.call(null);
(statearr_56950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42429__auto__);

return statearr_56950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42431__auto__);
});})(c__42429__auto__,figwheel_version,temp__4657__auto__))
);

return c__42429__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__56953){
var map__56957 = p__56953;
var map__56957__$1 = ((((!((map__56957 == null)))?((((map__56957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56957):map__56957);
var file = cljs.core.get.call(null,map__56957__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56957__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__56959 = "";
var G__56959__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__56959),cljs.core.str("file "),cljs.core.str(file)].join(''):G__56959);
var G__56959__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__56959__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__56959__$1);
if(cljs.core.truth_((function (){var and__32835__auto__ = line;
if(cljs.core.truth_(and__32835__auto__)){
return column;
} else {
return and__32835__auto__;
}
})())){
return [cljs.core.str(G__56959__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__56959__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56960){
var map__56967 = p__56960;
var map__56967__$1 = ((((!((map__56967 == null)))?((((map__56967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56967):map__56967);
var ed = map__56967__$1;
var formatted_exception = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56969_56973 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56970_56974 = null;
var count__56971_56975 = (0);
var i__56972_56976 = (0);
while(true){
if((i__56972_56976 < count__56971_56975)){
var msg_56977 = cljs.core._nth.call(null,chunk__56970_56974,i__56972_56976);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56977);

var G__56978 = seq__56969_56973;
var G__56979 = chunk__56970_56974;
var G__56980 = count__56971_56975;
var G__56981 = (i__56972_56976 + (1));
seq__56969_56973 = G__56978;
chunk__56970_56974 = G__56979;
count__56971_56975 = G__56980;
i__56972_56976 = G__56981;
continue;
} else {
var temp__4657__auto___56982 = cljs.core.seq.call(null,seq__56969_56973);
if(temp__4657__auto___56982){
var seq__56969_56983__$1 = temp__4657__auto___56982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56969_56983__$1)){
var c__33658__auto___56984 = cljs.core.chunk_first.call(null,seq__56969_56983__$1);
var G__56985 = cljs.core.chunk_rest.call(null,seq__56969_56983__$1);
var G__56986 = c__33658__auto___56984;
var G__56987 = cljs.core.count.call(null,c__33658__auto___56984);
var G__56988 = (0);
seq__56969_56973 = G__56985;
chunk__56970_56974 = G__56986;
count__56971_56975 = G__56987;
i__56972_56976 = G__56988;
continue;
} else {
var msg_56989 = cljs.core.first.call(null,seq__56969_56983__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56989);

var G__56990 = cljs.core.next.call(null,seq__56969_56983__$1);
var G__56991 = null;
var G__56992 = (0);
var G__56993 = (0);
seq__56969_56973 = G__56990;
chunk__56970_56974 = G__56991;
count__56971_56975 = G__56992;
i__56972_56976 = G__56993;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56994){
var map__56997 = p__56994;
var map__56997__$1 = ((((!((map__56997 == null)))?((((map__56997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56997):map__56997);
var w = map__56997__$1;
var message = cljs.core.get.call(null,map__56997__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/cards/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/cards/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__32835__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__32835__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__32835__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__57009 = cljs.core.seq.call(null,plugins);
var chunk__57010 = null;
var count__57011 = (0);
var i__57012 = (0);
while(true){
if((i__57012 < count__57011)){
var vec__57013 = cljs.core._nth.call(null,chunk__57010,i__57012);
var k = cljs.core.nth.call(null,vec__57013,(0),null);
var plugin = cljs.core.nth.call(null,vec__57013,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57009,chunk__57010,count__57011,i__57012,pl_57019,vec__57013,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57019.call(null,msg_hist);
});})(seq__57009,chunk__57010,count__57011,i__57012,pl_57019,vec__57013,k,plugin))
);
} else {
}

var G__57020 = seq__57009;
var G__57021 = chunk__57010;
var G__57022 = count__57011;
var G__57023 = (i__57012 + (1));
seq__57009 = G__57020;
chunk__57010 = G__57021;
count__57011 = G__57022;
i__57012 = G__57023;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57009);
if(temp__4657__auto__){
var seq__57009__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57009__$1)){
var c__33658__auto__ = cljs.core.chunk_first.call(null,seq__57009__$1);
var G__57024 = cljs.core.chunk_rest.call(null,seq__57009__$1);
var G__57025 = c__33658__auto__;
var G__57026 = cljs.core.count.call(null,c__33658__auto__);
var G__57027 = (0);
seq__57009 = G__57024;
chunk__57010 = G__57025;
count__57011 = G__57026;
i__57012 = G__57027;
continue;
} else {
var vec__57016 = cljs.core.first.call(null,seq__57009__$1);
var k = cljs.core.nth.call(null,vec__57016,(0),null);
var plugin = cljs.core.nth.call(null,vec__57016,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57028 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57009,chunk__57010,count__57011,i__57012,pl_57028,vec__57016,k,plugin,seq__57009__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57028.call(null,msg_hist);
});})(seq__57009,chunk__57010,count__57011,i__57012,pl_57028,vec__57016,k,plugin,seq__57009__$1,temp__4657__auto__))
);
} else {
}

var G__57029 = cljs.core.next.call(null,seq__57009__$1);
var G__57030 = null;
var G__57031 = (0);
var G__57032 = (0);
seq__57009 = G__57029;
chunk__57010 = G__57030;
count__57011 = G__57031;
i__57012 = G__57032;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args57033 = [];
var len__33922__auto___57040 = arguments.length;
var i__33923__auto___57041 = (0);
while(true){
if((i__33923__auto___57041 < len__33922__auto___57040)){
args57033.push((arguments[i__33923__auto___57041]));

var G__57042 = (i__33923__auto___57041 + (1));
i__33923__auto___57041 = G__57042;
continue;
} else {
}
break;
}

var G__57035 = args57033.length;
switch (G__57035) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57033.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__57036_57044 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57037_57045 = null;
var count__57038_57046 = (0);
var i__57039_57047 = (0);
while(true){
if((i__57039_57047 < count__57038_57046)){
var msg_57048 = cljs.core._nth.call(null,chunk__57037_57045,i__57039_57047);
figwheel.client.socket.handle_incoming_message.call(null,msg_57048);

var G__57049 = seq__57036_57044;
var G__57050 = chunk__57037_57045;
var G__57051 = count__57038_57046;
var G__57052 = (i__57039_57047 + (1));
seq__57036_57044 = G__57049;
chunk__57037_57045 = G__57050;
count__57038_57046 = G__57051;
i__57039_57047 = G__57052;
continue;
} else {
var temp__4657__auto___57053 = cljs.core.seq.call(null,seq__57036_57044);
if(temp__4657__auto___57053){
var seq__57036_57054__$1 = temp__4657__auto___57053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57036_57054__$1)){
var c__33658__auto___57055 = cljs.core.chunk_first.call(null,seq__57036_57054__$1);
var G__57056 = cljs.core.chunk_rest.call(null,seq__57036_57054__$1);
var G__57057 = c__33658__auto___57055;
var G__57058 = cljs.core.count.call(null,c__33658__auto___57055);
var G__57059 = (0);
seq__57036_57044 = G__57056;
chunk__57037_57045 = G__57057;
count__57038_57046 = G__57058;
i__57039_57047 = G__57059;
continue;
} else {
var msg_57060 = cljs.core.first.call(null,seq__57036_57054__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57060);

var G__57061 = cljs.core.next.call(null,seq__57036_57054__$1);
var G__57062 = null;
var G__57063 = (0);
var G__57064 = (0);
seq__57036_57044 = G__57061;
chunk__57037_57045 = G__57062;
count__57038_57046 = G__57063;
i__57039_57047 = G__57064;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__33929__auto__ = [];
var len__33922__auto___57069 = arguments.length;
var i__33923__auto___57070 = (0);
while(true){
if((i__33923__auto___57070 < len__33922__auto___57069)){
args__33929__auto__.push((arguments[i__33923__auto___57070]));

var G__57071 = (i__33923__auto___57070 + (1));
i__33923__auto___57070 = G__57071;
continue;
} else {
}
break;
}

var argseq__33930__auto__ = ((((0) < args__33929__auto__.length))?(new cljs.core.IndexedSeq(args__33929__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__33930__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57066){
var map__57067 = p__57066;
var map__57067__$1 = ((((!((map__57067 == null)))?((((map__57067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57067):map__57067);
var opts = map__57067__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57065){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57065));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57073){if((e57073 instanceof Error)){
var e = e57073;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57073;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__57077){
var map__57078 = p__57077;
var map__57078__$1 = ((((!((map__57078 == null)))?((((map__57078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57078):map__57078);
var msg_name = cljs.core.get.call(null,map__57078__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479316910205