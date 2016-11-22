// Compiled by ClojureScript 1.9.229 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__35649 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__35649) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(log_level)].join('')));

}
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str(msg),cljs.core.str(":\n"),cljs.core.str((function (){var sb__33829__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35653_35655 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35654_35656 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35653_35655,_STAR_print_fn_STAR_35654_35656,sb__33829__auto__){
return (function (x__33830__auto__){
return sb__33829__auto__.append(x__33830__auto__);
});})(_STAR_print_newline_STAR_35653_35655,_STAR_print_fn_STAR_35654_35656,sb__33829__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35654_35656;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35653_35655;
}
return [cljs.core.str(sb__33829__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *   Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args35657 = [];
var len__33918__auto___35660 = arguments.length;
var i__33919__auto___35661 = (0);
while(true){
if((i__33919__auto___35661 < len__33918__auto___35660)){
args35657.push((arguments[i__33919__auto___35661]));

var G__35662 = (i__33919__auto___35661 + (1));
i__33919__auto___35661 = G__35662;
continue;
} else {
}
break;
}

var G__35659 = args35657.length;
switch (G__35659) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35657.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__33925__auto__ = [];
var len__33918__auto___35665 = arguments.length;
var i__33919__auto___35666 = (0);
while(true){
if((i__33919__auto___35666 < len__33918__auto___35665)){
args__33925__auto__.push((arguments[i__33919__auto___35666]));

var G__35667 = (i__33919__auto___35666 + (1));
i__33919__auto___35666 = G__35667;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((0) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__33926__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq35664){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35664));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__33925__auto__ = [];
var len__33918__auto___35669 = arguments.length;
var i__33919__auto___35670 = (0);
while(true){
if((i__33919__auto___35670 < len__33918__auto___35669)){
args__33925__auto__.push((arguments[i__33919__auto___35670]));

var G__35671 = (i__33919__auto___35670 + (1));
i__33919__auto___35670 = G__35671;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((0) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__33926__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq35668){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35668));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__33925__auto__ = [];
var len__33918__auto___35673 = arguments.length;
var i__33919__auto___35674 = (0);
while(true){
if((i__33919__auto___35674 < len__33918__auto___35673)){
args__33925__auto__.push((arguments[i__33919__auto___35674]));

var G__35675 = (i__33919__auto___35674 + (1));
i__33919__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__33926__auto__ = ((((0) < args__33925__auto__.length))?(new cljs.core.IndexedSeq(args__33925__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__33926__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq35672){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35672));
});


//# sourceMappingURL=logging.js.map?rel=1479747557436