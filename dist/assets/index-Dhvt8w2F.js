(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function w_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ph={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function LM(){if(xv)return rl;xv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:d,ref:c!==void 0?c:null,props:f}}return rl.Fragment=t,rl.jsx=i,rl.jsxs=i,rl}var vv;function OM(){return vv||(vv=1,ph.exports=LM()),ph.exports}var p=OM(),mh={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function IM(){if(_v)return ft;_v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),b=Symbol.iterator;function A(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function D(B,me,Re){this.props=B,this.context=me,this.refs=y,this.updater=Re||C}D.prototype.isReactComponent={},D.prototype.setState=function(B,me){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,me,"setState")},D.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function V(){}V.prototype=D.prototype;function N(B,me,Re){this.props=B,this.context=me,this.refs=y,this.updater=Re||C}var L=N.prototype=new V;L.constructor=N,M(L,D.prototype),L.isPureReactComponent=!0;var U=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function F(B,me,Re){var Q=Re.ref;return{$$typeof:o,type:B,key:me,ref:Q!==void 0?Q:null,props:Re}}function j(B,me){return F(B.type,me,B.props)}function K(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function ae(B){var me={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Re){return me[Re]})}var X=/\/+/g;function ee(B,me){return typeof B=="object"&&B!==null&&B.key!=null?ae(""+B.key):me.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(me){B.status==="pending"&&(B.status="fulfilled",B.value=me)},function(me){B.status==="pending"&&(B.status="rejected",B.reason=me)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function q(B,me,Re,Q,he){var Ae=typeof B;(Ae==="undefined"||Ae==="boolean")&&(B=null);var we=!1;if(B===null)we=!0;else switch(Ae){case"bigint":case"string":case"number":we=!0;break;case"object":switch(B.$$typeof){case o:case t:we=!0;break;case S:return we=B._init,q(we(B._payload),me,Re,Q,he)}}if(we)return he=he(B),we=Q===""?"."+ee(B,0):Q,U(he)?(Re="",we!=null&&(Re=we.replace(X,"$&/")+"/"),q(he,me,Re,"",function(zt){return zt})):he!=null&&(K(he)&&(he=j(he,Re+(he.key==null||B&&B.key===he.key?"":(""+he.key).replace(X,"$&/")+"/")+we)),me.push(he)),1;we=0;var ge=Q===""?".":Q+":";if(U(B))for(var Ce=0;Ce<B.length;Ce++)Q=B[Ce],Ae=ge+ee(Q,Ce),we+=q(Q,me,Re,Ae,he);else if(Ce=A(B),typeof Ce=="function")for(B=Ce.call(B),Ce=0;!(Q=B.next()).done;)Q=Q.value,Ae=ge+ee(Q,Ce++),we+=q(Q,me,Re,Ae,he);else if(Ae==="object"){if(typeof B.then=="function")return q(k(B),me,Re,Q,he);throw me=String(B),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return we}function ce(B,me,Re){if(B==null)return B;var Q=[],he=0;return q(B,Q,"","",function(Ae){return me.call(Re,Ae,he++)}),Q}function ie(B){if(B._status===-1){var me=B._result,Re=me();Re.then(function(Q){(B._status===0||B._status===-1)&&(B._status=1,B._result=Q,Re.status===void 0&&(Re.status="fulfilled",Re.value=Q))},function(Q){(B._status===0||B._status===-1)&&(B._status=2,B._result=Q,Re.status===void 0&&(Re.status="rejected",Re.reason=Q))}),B._status===-1&&(B._status=0,B._result=Re)}if(B._status===1)return B._result.default;throw B._result}var pe=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function _e(B){var me=T.T,Re={};Re.types=me!==null?me.types:null,T.T=Re;try{var Q=B(),he=T.S;he!==null&&he(Re,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(P,pe)}catch(Ae){pe(Ae)}finally{me!==null&&Re.types!==null&&(me.types=Re.types),T.T=me}}function Ye(B){var me=T.T;if(me!==null){var Re=me.types;Re===null?me.types=[B]:Re.indexOf(B)===-1&&Re.push(B)}else _e(Ye.bind(null,B))}var We={map:ce,forEach:function(B,me,Re){ce(B,function(){me.apply(this,arguments)},Re)},count:function(B){var me=0;return ce(B,function(){me++}),me},toArray:function(B){return ce(B,function(me){return me})||[]},only:function(B){if(!K(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ft.Activity=v,ft.Children=We,ft.Component=D,ft.Fragment=i,ft.Profiler=c,ft.PureComponent=N,ft.StrictMode=r,ft.Suspense=m,ft.ViewTransition=_,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ft.__COMPILER_RUNTIME={__proto__:null,c:function(B){return T.H.useMemoCache(B)}},ft.addTransitionType=Ye,ft.cache=function(B){return function(){return B.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(B,me,Re){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Q=M({},B.props),he=B.key;if(me!=null)for(Ae in me.key!==void 0&&(he=""+me.key),me)!O.call(me,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&me.ref===void 0||(Q[Ae]=me[Ae]);var Ae=arguments.length-2;if(Ae===1)Q.children=Re;else if(1<Ae){for(var we=Array(Ae),ge=0;ge<Ae;ge++)we[ge]=arguments[ge+2];Q.children=we}return F(B.type,he,Q)},ft.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ft.createElement=function(B,me,Re){var Q,he={},Ae=null;if(me!=null)for(Q in me.key!==void 0&&(Ae=""+me.key),me)O.call(me,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(he[Q]=me[Q]);var we=arguments.length-2;if(we===1)he.children=Re;else if(1<we){for(var ge=Array(we),Ce=0;Ce<we;Ce++)ge[Ce]=arguments[Ce+2];he.children=ge}if(B&&B.defaultProps)for(Q in we=B.defaultProps,we)he[Q]===void 0&&(he[Q]=we[Q]);return F(B,Ae,he)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(B){return{$$typeof:h,render:B}},ft.isValidElement=K,ft.lazy=function(B){return{$$typeof:S,_payload:{_status:-1,_result:B},_init:ie}},ft.memo=function(B,me){return{$$typeof:g,type:B,compare:me===void 0?null:me}},ft.startTransition=_e,ft.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ft.use=function(B){return T.H.use(B)},ft.useActionState=function(B,me,Re){return T.H.useActionState(B,me,Re)},ft.useCallback=function(B,me){return T.H.useCallback(B,me)},ft.useContext=function(B){return T.H.useContext(B)},ft.useDebugValue=function(){},ft.useDeferredValue=function(B,me){return T.H.useDeferredValue(B,me)},ft.useEffect=function(B,me){return T.H.useEffect(B,me)},ft.useEffectEvent=function(B){return T.H.useEffectEvent(B)},ft.useId=function(){return T.H.useId()},ft.useImperativeHandle=function(B,me,Re){return T.H.useImperativeHandle(B,me,Re)},ft.useInsertionEffect=function(B,me){return T.H.useInsertionEffect(B,me)},ft.useLayoutEffect=function(B,me){return T.H.useLayoutEffect(B,me)},ft.useMemo=function(B,me){return T.H.useMemo(B,me)},ft.useOptimistic=function(B,me){return T.H.useOptimistic(B,me)},ft.useReducer=function(B,me,Re){return T.H.useReducer(B,me,Re)},ft.useRef=function(B){return T.H.useRef(B)},ft.useState=function(B){return T.H.useState(B)},ft.useSyncExternalStore=function(B,me,Re){return T.H.useSyncExternalStore(B,me,Re)},ft.useTransition=function(){return T.H.useTransition()},ft.version="19.3.0",ft}var Sv;function jp(){return Sv||(Sv=1,mh.exports=IM()),mh.exports}var st=jp();const PM=w_(st);var gh={exports:{}},ol={},xh={exports:{}},vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function zM(){return yv||(yv=1,(function(o){function t(k,q){var ce=k.length;k.push(q);e:for(;0<ce;){var ie=ce-1>>>1,pe=k[ie];if(0<c(pe,q))k[ie]=q,k[ce]=pe,ce=ie;else break e}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var q=k[0],ce=k.pop();if(ce!==q){k[0]=ce;e:for(var ie=0,pe=k.length,_e=pe>>>1;ie<_e;){var Ye=2*(ie+1)-1,We=k[Ye],B=Ye+1,me=k[B];if(0>c(We,ce))B<pe&&0>c(me,We)?(k[ie]=me,k[B]=ce,ie=B):(k[ie]=We,k[Ye]=ce,ie=Ye);else if(B<pe&&0>c(me,ce))k[ie]=me,k[B]=ce,ie=B;else break e}}return q}function c(k,q){var ce=k.sortIndex-q.sortIndex;return ce!==0?ce:k.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],g=[],S=1,v=null,_=3,b=!1,A=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function N(k){for(var q=i(g);q!==null;){if(q.callback===null)r(g);else if(q.startTime<=k)r(g),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(g)}}function L(k){if(C=!1,N(k),!A)if(i(m)!==null)A=!0,U||(U=!0,K());else{var q=i(g);q!==null&&ee(L,q.startTime-k)}}var U=!1,P=-1,T=5,O=-1;function F(){return M?!0:!(o.unstable_now()-O<T)}function j(){if(M=!1,U){var k=o.unstable_now();O=k;var q=!0;try{e:{A=!1,C&&(C=!1,D(P),P=-1),b=!0;var ce=_;try{t:{for(N(k),v=i(m);v!==null&&!(v.expirationTime>k&&F());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,_=v.priorityLevel;var pe=ie(v.expirationTime<=k);if(k=o.unstable_now(),typeof pe=="function"){v.callback=pe,N(k),q=!0;break t}v===i(m)&&r(m),N(k)}else r(m);v=i(m)}if(v!==null)q=!0;else{var _e=i(g);_e!==null&&ee(L,_e.startTime-k),q=!1}}break e}finally{v=null,_=ce,b=!1}q=void 0}}finally{q?K():U=!1}}}var K;if(typeof V=="function")K=function(){V(j)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,X=ae.port2;ae.port1.onmessage=j,K=function(){X.postMessage(null)}}else K=function(){y(j,0)};function ee(k,q){P=y(function(){k(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var ce=_;_=q;try{return k()}finally{_=ce}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ce=_;_=k;try{return q()}finally{_=ce}},o.unstable_scheduleCallback=function(k,q,ce){var ie=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ie+ce:ie):ce=ie,k){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ce+pe,k={id:S++,callback:q,priorityLevel:k,startTime:ce,expirationTime:pe,sortIndex:-1},ce>ie?(k.sortIndex=ce,t(g,k),i(m)===null&&k===i(g)&&(C?(D(P),P=-1):C=!0,ee(L,ce-ie))):(k.sortIndex=pe,t(m,k),A||b||(A=!0,U||(U=!0,K()))),k},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(k){var q=_;return function(){var ce=_;_=q;try{return k.apply(this,arguments)}finally{_=ce}}}})(vh)),vh}var bv;function BM(){return bv||(bv=1,xh.exports=zM()),xh.exports}var _h={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function FM(){if(Mv)return Ln;Mv=1;var o=jp();function t(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:b===d?d:""+b,children:S,containerInfo:v,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(S){return{$$typeof:f,_reason:S}},Ln.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(S,v,null,_)},Ln.flushSync=function(S){var v=m.T,_=r.p;try{if(m.T=null,r.p=2,S)return S()}finally{m.T=v,r.p=_,r.d.f()}},Ln.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(S,v))},Ln.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Ln.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,b=g(_,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,C=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?r.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:C}):_==="script"&&r.d.X(S,{crossOrigin:b,integrity:A,fetchPriority:C,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ln.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=g(v.as,v.crossOrigin);r.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&r.d.M(S)},Ln.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,b=g(_,v.crossOrigin);r.d.L(S,_,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ln.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=g(v.as,v.crossOrigin);r.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else r.d.m(S)},Ln.requestFormReset=function(S){r.d.r(S)},Ln.unstable_batchedUpdates=function(S,v){return S(v)},Ln.useFormState=function(S,v,_){return m.H.useFormState(S,v,_)},Ln.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var Ev;function HM(){if(Ev)return _h.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),_h.exports=FM(),_h.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function GM(){if(Tv)return ol;Tv=1;var o=BM(),t=jp(),i=HM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return m(l),e;if(u===s)return m(l),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=u;else{for(var x=!1,R=l.child;R;){if(R===a){x=!0,a=l,s=u;break}if(R===s){x=!0,s=l,a=u;break}R=R.sibling}if(!x){for(R=u.child;R;){if(R===a){x=!0,a=u,s=l;break}if(R===s){x=!0,s=u,a=l;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,s,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,s,l,u))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function b(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function A(e){var n=[null,null],a=_(e);return a===null||C(n,e,a.child,{foundSelf:!1}),n}function C(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,D=null;function V(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function N(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(y=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,a){for(var s=0,l=e;l;l=a(l))s++;l=0;for(var u=n;u;u=a(u))l++;for(;0<s-l;)e=a(e),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),Ye=Symbol.for("react.legacy_hidden"),We=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),me=Symbol.for("react.recoverable"),Re=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case ae:return"Profiler";case K:return"StrictMode";case q:return"Suspense";case ce:return"SuspenseList";case _e:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ee:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case pe:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var we=Array.isArray,ge=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt={pending:!1,data:null,method:null,action:null},dt=[],xt=-1;function yt(e){return{current:e}}function be(e){0>xt||(e.current=dt[xt],dt[xt]=null,xt--)}function Ne(e,n){xt++,dt[xt]=e.current,e.current=n}var rt=yt(null),lt=yt(null),tt=yt(null),Jt=yt(null);function Y(e,n){switch(Ne(tt,n),Ne(lt,e),Ne(rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ax(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ax(n),e=wx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(rt),Ne(rt,e)}function sn(){be(rt),be(lt),be(tt)}function Ht(e){var n=e.memoizedState;n!==null&&(Gr._currentValue=n.memoizedState,Ne(Jt,e)),n=rt.current;var a=wx(n,e.type);n!==a&&(Ne(lt,e),Ne(rt,a))}function I(e){lt.current===e&&(be(rt),be(lt)),Jt.current===e&&(be(Jt),Gr._currentValue=zt)}var E,te;function le(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+te}var xe=!1;function De(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ze){var Z=ze}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(ze){Z=ze}ye=!1;try{var oe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(oe!==void 0?Object.defineProperty(e.prototype,"props",oe):delete e.prototype.props)}}}else{try{throw Error()}catch(ze){Z=ze}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ze){if(ze&&Z&&typeof ze.stack=="string")return[ze.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),x=u[0],R=u[1];if(x&&R){var z=x.split(`
`),$=R.split(`
`);for(l=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(s===z.length||l===$.length)for(s=z.length-1,l=$.length-1;1<=s&&0<=l&&z[s]!==$[l];)l--;for(;1<=s&&0<=l;s--,l--)if(z[s]!==$[l]){if(s!==1||l!==1)do if(s--,l--,0>l||z[s]!==$[l]){var ue=`
`+z[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=l);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Oe(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=Oe(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ee=Object.prototype.hasOwnProperty,Le=o.unstable_scheduleCallback,nt=o.unstable_cancelCallback,Fe=o.unstable_shouldYield,Be=o.unstable_requestPaint,Xe=o.unstable_now,at=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,W=o.unstable_UserBlockingPriority,Ue=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Ie=o.unstable_IdlePriority,je=o.log,Te=o.unstable_setDisableYieldValue,et=null,ke=null;function Ot(e){if(typeof je=="function"&&Te(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(et,e)}catch{}}var pt=Math.clz32?Math.clz32:Vu,ni=Math.log,xi=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(ni(e)/xi|0)|0}var ir=256,bs=262144,Fa=4194304;function pa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ms(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var l=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~u,s!==0?l=pa(s):(x&=R,x!==0?l=pa(x):a||(a=R&~e,a!==0&&(l=pa(a))))):(R=s&~u,R!==0?l=pa(R):x!==0?l=pa(x):a||(a=s&~e,a!==0&&(l=pa(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ha(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ki(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-pt(a),l=1<<s;n|=e[s],a&=~l}return n}function fo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var e=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),e}function ar(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ji(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Cl(e,n,a,s,l,u){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var ue=31-pt(a),ye=1<<ue;R[ue]=0,z[ue]=-1;var Z=$[ue];if(Z!==null)for($[ue]=null,ue=0;ue<Z.length;ue++){var oe=Z[ue];oe!==null&&(oe.lane&=-536870913)}a&=~ye}s!==0&&Es(e,s,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~n))}function Es(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function po(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-pt(a),l=1<<s;l&n|e[s]&n&&(e[s]|=n),a&=~l}}function mo(e,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(e.suspendedLanes|n))!==0?0:a}function go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nl(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function Dl(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var vi=Math.random().toString(36).slice(2),w="__reactFiber$"+vi,H="__reactProps$"+vi,de="__reactContainer$"+vi,se="__reactEvents$"+vi,re="__reactListeners$"+vi,He="__reactHandles$"+vi,qe="__reactResources$"+vi,Pe="__reactMarker$"+vi,Qe="__reactLoad$"+vi;function Je(e){delete e[w],delete e[H],delete e[re],delete e[He]}function ct(e){var n;if(n=e[w])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[w]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jx(e);e!==null;){if(a=e[w])return a;e=jx(e)}return n}e=a,a=e.parentNode}return null}function mt(e){if(e=e[w]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ze(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Tt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function bt(e){e[Pe]=!0}function Kt(e){e[Qe]=void 0}var jt=new Set,Sn={};function Ge(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(Sn[e]=n,e=0;e<n.length;e++)jt.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ii={};function Xi(e){return Ee.call(ii,e)?!0:Ee.call(Gn,e)?!1:It.test(e)?ii[e]=!0:(Gn[e]=!0,!1)}var Mt=!1;function Vt(){var e=Mt;return Mt=!1,e}function en(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ai(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ma(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ul(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,u.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ku(e){if(!e._valueTracker){var n=ma(e)?"checked":"value";e._valueTracker=Ul(e,n,""+e[n])}}function pm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ma(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var ey=/[\n"\\]/g;function _i(e){return e.replace(ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ju(e,n,a,s,l,u,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?Xu(e,un(e.value)):Xu(e,un(n)):a!=null?Xu(e,un(a)):s!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+un(R):e.removeAttribute("name")}function mm(e,n,a,s,l,u,x,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){ku(e);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ku(e)}function Xu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function sr(e,n,a,s){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&s&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function gm(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function xm(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(we(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),ku(e)}function rr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vm(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||ty.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _m(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",Mt=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(vm(e,l,s),Mt=!0)}else for(var u in n)n.hasOwnProperty(u)&&vm(e,u,n[u])}function Wu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return iy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var qu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var or=null,lr=null;function Sm(e){var n=mt(e);if(n&&(e=n.stateNode)){var a=e[H]||null;e:switch(e=n.stateNode,n.type){case"input":if(ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var l=s[H]||null;if(!l)throw Error(r(90));ju(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&pm(s)}break e;case"textarea":gm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&sr(e,!!a.multiple,n,!1)}}}var Zu=!1;function ym(e,n,a){if(Zu)return e(n,a);Zu=!0;try{var s=e(n);return s}finally{if(Zu=!1,(or!==null||lr!==null)&&(Lc(),or&&(n=or,e=lr,lr=or=null,Sm(n),e)))for(n=0;n<e.length;n++)Sm(e[n])}}function vo(e,n){var a=e.stateNode;if(a===null)return null;var s=a[H]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=!1;if(ga)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ku=!1}var Ga=null,Qu=null,Ol=null;function bm(){if(Ol)return Ol;var e,n=Qu,a=n.length,s,l="value"in Ga?Ga.value:Ga.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===l[u-s];s++);return Ol=l.slice(e,1<s?1-s:void 0)}function Il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function Mm(){return!1}function Vn(e){function n(a,s,l,u,x){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Pl:Mm,this.isPropagationStopped=Mm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Vn(Va),So=P({},Va,{view:0,detail:0}),ay=Vn(So),Ju,$u,yo,Bl=P({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(Ju=e.screenX-yo.screenX,$u=e.screenY-yo.screenY):$u=Ju=0,yo=e),Ju)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Em=Vn(Bl),sy=P({},Bl,{dataTransfer:0}),ry=Vn(sy),oy=P({},So,{relatedTarget:0}),ef=Vn(oy),ly=P({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Vn(ly),uy=P({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fy=Vn(uy),dy=P({},Va,{data:0}),Tm=Vn(dy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=my[e])?!!n[e]:!1}function tf(){return gy}var xy=P({},So,{key:function(e){if(e.key){var n=hy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?py[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=Vn(xy),_y=P({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Vn(_y),Sy=P({},Va,{submitter:0}),yy=Vn(Sy),by=P({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),My=Vn(by),Ey=P({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Vn(Ey),Ay=P({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=Vn(Ay),Ry=P({},Va,{newState:0,oldState:0,source:0}),Cy=Vn(Ry),Ny=[9,13,27,32],nf=ga&&"CompositionEvent"in window,bo=null;ga&&"documentMode"in document&&(bo=document.documentMode);var Dy=ga&&"TextEvent"in window&&!bo,wm=ga&&(!nf||bo&&8<bo&&11>=bo),Rm=" ",Cm=!1;function Nm(e,n){switch(e){case"keyup":return Ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Uy(e,n){switch(e){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return e=n.data,e===Rm&&Cm?null:e;default:return null}}function Ly(e,n){if(cr)return e==="compositionend"||!nf&&Nm(e,n)?(e=bm(),Ol=Qu=Ga=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wm&&n.locale!=="ko"?null:n.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Oy[e.type]:n==="textarea"}function Lm(e,n,a,s){or?lr?lr.push(s):lr=[s]:or=s,n=Fc(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Mo=null,Eo=null;function Iy(e){Sx(e,0)}function Fl(e){var n=Ze(e);if(pm(n))return e}function Om(e,n){if(e==="change")return n}var Im=!1;if(ga){var af;if(ga){var sf="oninput"in document;if(!sf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),sf=typeof Pm.oninput=="function"}af=sf}else af=!1;Im=af&&(!document.documentMode||9<document.documentMode)}function zm(){Mo&&(Mo.detachEvent("onpropertychange",Bm),Eo=Mo=null)}function Bm(e){if(e.propertyName==="value"&&Fl(Eo)){var n=[];Lm(n,Eo,e,Yu(e)),ym(Iy,n)}}function Py(e,n,a){e==="focusin"?(zm(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",Bm)):e==="focusout"&&zm()}function zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Eo)}function By(e,n){if(e==="click")return Fl(n)}function Fy(e,n){if(e==="input"||e==="change")return Fl(n)}function Hy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:Hy;function To(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Ee.call(n,l)||!si(e[l],n[l]))return!1}return!0}function rf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hm(e,n){var a=Fm(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fm(a)}}function Gm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=rf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=rf(e.document)}return n}function of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gy=ga&&"documentMode"in document&&11>=document.documentMode,ur=null,lf=null,Ao=null,cf=!1;function km(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cf||ur==null||ur!==rf(s)||(s=ur,"selectionStart"in s&&of(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ao&&To(Ao,s)||(Ao=s,s=Fc(lf,"onSelect"),0<s.length&&(n=new zl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=ur)))}function Ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var fr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},uf={},jm={};ga&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function As(e){if(uf[e])return uf[e];if(!fr[e])return e;var n=fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jm)return uf[e]=n[a];return e}var Xm=As("animationend"),Wm=As("animationiteration"),qm=As("animationstart"),Vy=As("transitionrun"),ky=As("transitionstart"),jy=As("transitioncancel"),Ym=As("transitionend"),Zm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ni(e,n){Zm.set(e,n),Ge(n,[e])}var Xy=0;function xa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Oi.identifierPrefix;var a=Xy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Km(e){if(e==null||typeof e=="string")return e;var n=null,a=Dr;if(a!==null)for(var s=0;s<a.length;s++){var l=e[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function va(e,n){return e=Km(e),n=Km(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],dr=0,df=0;function Gl(){for(var e=dr,n=df=dr=0;n<e;){var a=Si[n];Si[n++]=null;var s=Si[n];Si[n++]=null;var l=Si[n];Si[n++]=null;var u=Si[n];if(Si[n++]=null,s!==null&&l!==null){var x=s.pending;x===null?l.next=l:(l.next=x.next,x.next=l),s.pending=l}u!==0&&Qm(a,l,u)}}function Vl(e,n,a,s){Si[dr++]=e,Si[dr++]=n,Si[dr++]=a,Si[dr++]=s,df|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hf(e,n,a,s){return Vl(e,n,a,s),kl(e)}function ws(e,n){return Vl(e,null,null,n),kl(e)}function Qm(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-pt(a),e=u.hiddenUpdates,s=e[l],s===null?e[l]=[n]:s.push(n),n.lane=a|536870912),u):null}function kl(e){if(50<Yo)throw Yo=0,Uc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hr={};function Wy(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new Wy(e,n,a,s)}function pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jl(e,n,a,s,l,u){var x=0;if(s=e,typeof s=="function")pf(s)&&(x=1);else if(typeof s=="string")x=SM(e,a,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case _e:return e=Kn(31,a,n,l),e.elementType=_e,e.lanes=u,e;case j:return Rs(a.children,l,u,n);case K:x=8,l|=24;break;case ae:return e=Kn(12,a,n,l|2),e.elementType=ae,e.lanes=u,e;case q:return e=Kn(13,a,n,l),e.elementType=q,e.lanes=u,e;case ce:return e=Kn(19,a,n,l),e.elementType=ce,e.lanes=u,e;case Ye:case B:return e=l|32,e=Kn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ee:x=10;break e;case X:x=9;break e;case k:x=11;break e;case ie:x=14;break e;case pe:x=16,s=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(x,a,n,l),n.elementType=e,n.type=s,n.lanes=u,n}function Rs(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function mf(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function $m(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function gf(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var e0=new WeakMap;function yi(e,n){if(typeof e=="object"&&e!==null){var a=e0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},e0.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var pr=[],mr=0,Xl=null,wo=0,bi=[],Mi=0,ka=null,qi=1,Yi="";function Sa(e,n){pr[mr++]=wo,pr[mr++]=Xl,Xl=e,wo=n}function t0(e,n,a){bi[Mi++]=qi,bi[Mi++]=Yi,bi[Mi++]=ka,ka=e;var s=qi;e=Yi;var l=32-pt(s)-1;s&=~(1<<l),a+=1;var u=32-pt(n)+l;if(30<u){var x=l-l%5;u=(s&(1<<x)-1).toString(32),s>>=x,l-=x,qi=1<<32-pt(n)+l|a<<l|s,Yi=u+e}else qi=1<<u|a<<l|s,Yi=e}function Wl(e){e.return!==null&&(Sa(e,1),t0(e,1,0))}function xf(e){for(;e===Xl;)Xl=pr[--mr],pr[mr]=null,wo=pr[--mr],pr[mr]=null;for(;e===ka;)ka=bi[--Mi],bi[Mi]=null,Yi=bi[--Mi],bi[Mi]=null,qi=bi[--Mi],bi[Mi]=null}function n0(e,n){bi[Mi++]=qi,bi[Mi++]=Yi,bi[Mi++]=ka,qi=n.id,Yi=n.overflow,ka=e}var En=null,tn=null,Et=!1,ja=null,Ei=!1,vf=Error(r(519));function Xa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(yi(n,e)),vf}function i0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[w]=e,n[H]=s,a){case"dialog":wt("cancel",n),wt("close",n);break;case"iframe":case"object":case"embed":wt("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)wt(Ko[a],n);break;case"source":wt("error",n);break;case"img":case"image":case"link":wt("error",n),wt("load",n);break;case"details":wt("toggle",n);break;case"input":wt("invalid",n),mm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":wt("invalid",n);break;case"textarea":wt("invalid",n),xm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ex(n.textContent,a)?(s.popover!=null&&(wt("beforetoggle",n),wt("toggle",n)),s.onScroll!=null&&wt("scroll",n),s.onScrollEnd!=null&&wt("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Xa(e,!0)}function ql(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:En=En.return}}function gr(e){if(e!==En)return!1;if(!Et)return ql(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yd(e.type,e.memoizedProps)),a=!a),a&&tn&&Xa(e),ql(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));tn=kx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));tn=kx(e)}else n===27?(n=tn,os(e.type)?(e=ih,ih=null,tn=e):tn=n):tn=En?Ai(e.stateNode.nextSibling):null;return!0}function Cs(){tn=En=null,Et=!1}function _f(){var e=ja;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),ja=null),e}function Ro(e){ja===null?ja=[e]:ja.push(e)}var Sf=yt(null),Ns=null,ya=null;function Wa(e,n,a){Ne(Sf,n._currentValue),n._currentValue=a}function ba(e){e._currentValue=Sf.current,be(Sf)}function Yl(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function yf(e,n,a,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var x=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var z=0;z<n.length;z++)if(R.context===n[z]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Yl(u.return,a,e),s||(x=null);break e}u=R.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(r(341));x.lanes|=a,u=x.alternate,u!==null&&(u.lanes|=a),Yl(x,a,e),x=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,x=l.alternate,x!==null&&(x.lanes|=a),Yl(l.return,a,e),x=l.child,x=x!==null?x.sibling:null):x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Ds(e,n,a,s){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=l.type;si(l.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(l===Jt.current){if(x=l.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Gr):e=[Gr])}l=l.return}return e!==null&&yf(n,e,a,s),n.flags|=262144,e!==null}function Zl(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ns=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return a0(Ns,e)}function Kl(e,n){return Ns===null&&Us(e),a0(e,n)}function a0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(r(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var qy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yy=o.unstable_scheduleCallback,Zy=o.unstable_NormalPriority,mn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new qy,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&Yy(Zy,function(){e.controller.abort()})}function s0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var No=null;function Ky(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Do=null,Mf=0,Ls=0,xr=null;function Qy(e,n){if(Do===null){var a=Do=[];Mf=0,Ls=Fd(),xr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mf++,n.then(r0,r0),n}function r0(){if(--Mf===0&&(No=null,Do!==null)){xr!==null&&(xr.status="fulfilled");var e=Do;Do=null,Ls=0,xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jy(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var o0=ge.S;ge.S=function(e,n){if($g=Xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qy(e,n),No!==null)for(var a=Ir;a!==null;)s0(a,No),a=a.next;if(a=e.types,a!==null){for(var s=Ir;s!==null;)s0(s,a),s=s.next;if(Ls!==0){s=No,s===null&&(s=No=[]);for(var l=0;l<a.length;l++){var u=a[l];s.indexOf(u)===-1&&s.push(u)}}}o0!==null&&o0(e,n)};var Os=yt(null);function Ef(){var e=Os.current;return e!==null?e:$t.pooledCache}function Ql(e,n){n===null?Ne(Os,Os.current):Ne(Os,n.pool)}function l0(){var e=Ef();return e===null?null:{parent:mn._currentValue,pool:e}}var vr=Error(r(460)),Tf=Error(r(474)),Jl=Error(r(542)),$l={then:function(){}};function c0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,d0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=$t,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,d0(e),e}throw Ps=n,vr}}function Is(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,vr):a}}var Ps=null;function f0(){if(Ps===null)throw Error(r(459));var e=Ps;return Ps=null,e}function d0(e){if(e===vr||e===Jl)throw Error(r(483))}var _r=null,Uo=0;function ec(e){var n=Uo;return Uo+=1,_r===null&&(_r=[]),u0(_r,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function tc(e,n){throw n.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function h0(e){function n(J,G){if(e){var ne=J.deletions;ne===null?(J.deletions=[G],J.flags|=16):ne.push(G)}}function a(J,G){if(!e)return null;for(;G!==null;)n(J,G),G=G.sibling;return null}function s(J){for(var G=new Map;J!==null;)J.key===null?G.set(J.index,J):G.set(J.key,J),J=J.sibling;return G}function l(J,G){return J=_a(J,G),J.index=0,J.sibling=null,J}function u(J,G,ne){return J.index=ne,e?(ne=J.alternate,ne!==null?(ne=ne.index,ne<G?(J.flags|=2,G):ne):(J.flags|=134217730,G)):(J.flags|=1048576,G)}function x(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function R(J,G,ne,Se){return G===null||G.tag!==6?(G=mf(ne,J.mode,Se),G.return=J,G):(G=l(G,ne),G.return=J,G)}function z(J,G,ne,Se){var Ke=ne.type;return Ke===j?(J=ue(J,G,ne.props.children,Se,ne.key),qa(J,ne),J):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===pe&&Is(Ke)===G.type)?(G=l(G,ne.props),qa(G,ne),G.return=J,G):(G=jl(ne.type,ne.key,ne.props,null,J.mode,Se),qa(G,ne),G.return=J,G)}function $(J,G,ne,Se){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=gf(ne,J.mode,Se),G.return=J,G):(G=l(G,ne.children||[]),G.return=J,G)}function ue(J,G,ne,Se,Ke){return G===null||G.tag!==7?(G=Rs(ne,J.mode,Se,Ke),G.return=J,G):(G=l(G,ne),G.return=J,G)}function ye(J,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mf(""+G,J.mode,ne),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return ne=jl(G.type,G.key,G.props,null,J.mode,ne),qa(ne,G),ne.return=J,ne;case F:return G=gf(G,J.mode,ne),G.return=J,G;case pe:return G=Is(G),ye(J,G,ne)}if(we(G)||Q(G))return G=Rs(G,J.mode,ne,null),G.return=J,G;if(typeof G.then=="function")return ye(J,ec(G),ne);if(G.$$typeof===ee)return ye(J,Kl(J,G),ne);tc(J,G)}return null}function Z(J,G,ne,Se){var Ke=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return Ke!==null?null:R(J,G,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:return ne.key===Ke?z(J,G,ne,Se):null;case F:return ne.key===Ke?$(J,G,ne,Se):null;case pe:return ne=Is(ne),Z(J,G,ne,Se)}if(we(ne)||Q(ne))return Ke!==null?null:ue(J,G,ne,Se,null);if(typeof ne.then=="function")return Z(J,G,ec(ne),Se);if(ne.$$typeof===ee)return Z(J,G,Kl(J,ne),Se);tc(J,ne)}return null}function oe(J,G,ne,Se,Ke){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ne)||null,R(G,J,""+Se,Ke);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case O:return J=J.get(Se.key===null?ne:Se.key)||null,z(G,J,Se,Ke);case F:return J=J.get(Se.key===null?ne:Se.key)||null,$(G,J,Se,Ke);case pe:return Se=Is(Se),oe(J,G,ne,Se,Ke)}if(we(Se)||Q(Se))return J=J.get(ne)||null,ue(G,J,Se,Ke,null);if(typeof Se.then=="function")return oe(J,G,ne,ec(Se),Ke);if(Se.$$typeof===ee)return oe(J,G,ne,Kl(G,Se),Ke);tc(G,Se)}return null}function ze(J,G,ne,Se){for(var Ke=null,Nt=null,it=G,ot=G=0,vn=null;it!==null&&ot<ne.length;ot++){it.index>ot?(vn=it,it=null):vn=it.sibling;var Bt=Z(J,it,ne[ot],Se);if(Bt===null){it===null&&(it=vn);break}e&&it&&Bt.alternate===null&&n(J,it),G=u(Bt,G,ot),Nt===null?Ke=Bt:Nt.sibling=Bt,Nt=Bt,it=vn}if(ot===ne.length)return a(J,it),Et&&Sa(J,ot),Ke;if(it===null){for(;ot<ne.length;ot++)it=ye(J,ne[ot],Se),it!==null&&(G=u(it,G,ot),Nt===null?Ke=it:Nt.sibling=it,Nt=it);return Et&&Sa(J,ot),Ke}for(it=s(it);ot<ne.length;ot++)vn=oe(it,J,ot,ne[ot],Se),vn!==null&&(e&&(Bt=vn.alternate,Bt!==null&&it.delete(Bt.key===null?ot:Bt.key)),G=u(vn,G,ot),Nt===null?Ke=vn:Nt.sibling=vn,Nt=vn);return e&&it.forEach(function(ds){return n(J,ds)}),Et&&Sa(J,ot),Ke}function $e(J,G,ne,Se){if(ne==null)throw Error(r(151));for(var Ke=null,Nt=null,it=G,ot=G=0,vn=null,Bt=ne.next();it!==null&&!Bt.done;ot++,Bt=ne.next()){it.index>ot?(vn=it,it=null):vn=it.sibling;var ds=Z(J,it,Bt.value,Se);if(ds===null){it===null&&(it=vn);break}e&&it&&ds.alternate===null&&n(J,it),G=u(ds,G,ot),Nt===null?Ke=ds:Nt.sibling=ds,Nt=ds,it=vn}if(Bt.done)return a(J,it),Et&&Sa(J,ot),Ke;if(it===null){for(;!Bt.done;ot++,Bt=ne.next())Bt=ye(J,Bt.value,Se),Bt!==null&&(G=u(Bt,G,ot),Nt===null?Ke=Bt:Nt.sibling=Bt,Nt=Bt);return Et&&Sa(J,ot),Ke}for(it=s(it);!Bt.done;ot++,Bt=ne.next())Bt=oe(it,J,ot,Bt.value,Se),Bt!==null&&(e&&(vn=Bt.alternate,vn!==null&&it.delete(vn.key===null?ot:vn.key)),G=u(Bt,G,ot),Nt===null?Ke=Bt:Nt.sibling=Bt,Nt=Bt);return e&&it.forEach(function(UM){return n(J,UM)}),Et&&Sa(J,ot),Ke}function _t(J,G,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===j&&ne.key===null&&ne.props.ref===void 0&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:e:{for(var Ke=ne.key;G!==null;){if(G.key===Ke){if(Ke=ne.type,Ke===j){if(G.tag===7){a(J,G.sibling),Se=l(G,ne.props.children),qa(Se,ne),Se.return=J,J=Se;break e}}else if(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===pe&&Is(Ke)===G.type){a(J,G.sibling),Se=l(G,ne.props),qa(Se,ne),Se.return=J,J=Se;break e}a(J,G);break}else n(J,G);G=G.sibling}ne.type===j?(Se=Rs(ne.props.children,J.mode,Se,ne.key),qa(Se,ne),Se.return=J,J=Se):(Se=jl(ne.type,ne.key,ne.props,null,J.mode,Se),qa(Se,ne),Se.return=J,J=Se)}return x(J);case F:e:{for(Ke=ne.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){a(J,G.sibling),Se=l(G,ne.children||[]),Se.return=J,J=Se;break e}else{a(J,G);break}else n(J,G);G=G.sibling}Se=gf(ne,J.mode,Se),Se.return=J,J=Se}return x(J);case pe:return ne=Is(ne),_t(J,G,ne,Se)}if(we(ne))return ze(J,G,ne,Se);if(Q(ne)){if(Ke=Q(ne),typeof Ke!="function")throw Error(r(150));return ne=Ke.call(ne),$e(J,G,ne,Se)}if(typeof ne.then=="function")return _t(J,G,ec(ne),Se);if(ne.$$typeof===ee)return _t(J,G,Kl(J,ne),Se);tc(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,G!==null&&G.tag===6?(a(J,G.sibling),Se=l(G,ne),Se.return=J,J=Se):(a(J,G),Se=mf(ne,J.mode,Se),Se.return=J,J=Se),x(J)):a(J,G)}return function(J,G,ne,Se){try{Uo=0;var Ke=_t(J,G,ne,Se);return _r=null,Ke}catch(it){if(it===vr||it===Jl)throw it;var Nt=Kn(29,it,null,J.mode);return Nt.lanes=Se,Nt.return=J,Nt}finally{}}}var zs=h0(!0),p0=h0(!1),Ya=!1;function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(kt&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=kl(e),Qm(e,null,a),n}return Vl(e,s,n,a),kl(e)}function Lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,po(e,a)}}function Rf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=x:u=u.next=x,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cf=!1;function Oo(){if(Cf){var e=xr;if(e!==null)throw e}}function Io(e,n,a,s){Cf=!1;var l=e.updateQueue;Ya=!1;var u=l.firstBaseUpdate,x=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var z=R,$=z.next;z.next=null,x===null?u=$:x.next=$,x=z;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,R=ue.lastBaseUpdate,R!==x&&(R===null?ue.firstBaseUpdate=$:R.next=$,ue.lastBaseUpdate=z))}if(u!==null){var ye=l.baseState;x=0,ue=$=z=null,R=u;do{var Z=R.lane&-536870913,oe=Z!==R.lane;if(oe?(Ct&Z)===Z:(s&Z)===Z){Z!==0&&Z===Ls&&(Cf=!0),ue!==null&&(ue=ue.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ze=e,$e=R;Z=n;var _t=a;switch($e.tag){case 1:if(ze=$e.payload,typeof ze=="function"){ye=ze.call(_t,ye,Z);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=$e.payload,Z=typeof ze=="function"?ze.call(_t,ye,Z):ze,Z==null)break e;ye=P({},ye,Z);break e;case 2:Ya=!0}}Z=R.callback,Z!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=l.callbacks,oe===null?l.callbacks=[Z]:oe.push(Z))}else oe={lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ue===null?($=ue=oe,z=ye):ue=ue.next=oe,x|=Z;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,l.lastBaseUpdate=oe,l.shared.pending=null}}while(!0);ue===null&&(z=ye),l.baseState=z,l.firstBaseUpdate=$,l.lastBaseUpdate=ue,u===null&&(l.shared.lanes=0),is|=x,e.lanes=x,e.memoizedState=ye}}function m0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function g0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)m0(a[e],n)}var Qa=yt(null),nc=yt(0);function x0(e,n){e=wa,Ne(nc,e),Ne(Qa,n),wa=e|n.baseLanes}function Nf(){Ne(nc,wa),Ne(Qa,Qa.current)}function Df(){wa=nc.current,be(Qa),be(nc)}var Cn=yt(null),Pn=null;function Ja(e){var n=e.alternate;Ne(Nn,Nn.current&1),Ne(Cn,e),Pn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(Pn=e)}function Uf(e){Ne(Nn,Nn.current),Ne(Cn,e),Pn===null&&(Pn=e)}function v0(e){e.tag===22?(Ne(Nn,Nn.current),Ne(Cn,e),Pn===null&&(Pn=e)):$a()}function $a(){Ne(Nn,Nn.current),Ne(Cn,Cn.current)}function ri(e){be(Cn),Pn===e&&(Pn=null),be(Nn)}var Nn=yt(0);function Po(e,n){Ne(Cn,Cn.current),Ne(Nn,n)}function Lf(e){be(Nn),be(Cn),Pn===e&&(Pn=null)}function ic(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,vt=null,Qt=null,gn=null,ac=!1,Sr=!1,Bs=!1,sc=0,zo=0,yr=null,$y=0;function fn(){throw Error(r(321))}function Of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function If(e,n,a,s,l,u){return Ma=u,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ge.H=e===null||e.memoizedState===null?tg:ng,Bs=!1,u=a(s,l),Bs=!1,Sr&&(u=S0(n,a,s,l)),_0(e),u}function _0(e){ge.H=dc;var n=Qt!==null&&Qt.next!==null;if(Ma=0,gn=Qt=vt=null,ac=!1,zo=0,yr=null,n)throw Error(r(300));e===null||xn||(e=e.dependencies,e!==null&&Zl(e)&&(xn=!0))}function S0(e,n,a,s){vt=e;var l=0;do{if(Sr&&(yr=null),zo=0,Sr=!1,25<=l)throw Error(r(301));if(l+=1,gn=Qt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ge.H=ob,u=n(a,s)}while(Sr);return u}function eb(){var e=ge.H,n=e.useState()[0];return n=typeof n.then=="function"?Bo(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(vt.flags|=1024),n}function Pf(){var e=sc!==0;return sc=0,e}function zf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bf(e){if(ac){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ac=!1}Ma=0,gn=Qt=vt=null,Sr=!1,zo=sc=0,yr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?vt.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(Qt===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=gn===null?vt.memoizedState:gn.next;if(n!==null)gn=n,Qt=e;else{if(e===null)throw vt.alternate===null?Error(r(467)):Error(r(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},gn===null?vt.memoizedState=gn=e:gn=gn.next=e}return gn}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var n=zo;return zo+=1,yr===null&&(yr=[]),e=u0(yr,e,n),n=vt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,ge.H=n===null||n.memoizedState===null?tg:ng),e}function oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===me)return;if(e.$$typeof===ee)return Rn(e)}throw Error(r(438,String(e)))}function Ff(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=vt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rc(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=We;return n.index++,a}function Ea(e,n){return typeof n=="function"?n(e):n}function lc(e){var n=pn();return Hf(n,Qt,e)}function Hf(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=e.baseQueue,u=s.pending;if(u!==null){if(l!==null){var x=l.next;l.next=u.next,u.next=x}n.baseQueue=l=u,s.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var R=x=null,z=null,$=n,ue=!1;do{var ye=$.lane&-536870913;if(ye!==$.lane?(Ct&ye)===ye:(Ma&ye)===ye){var Z=$.revertLane;if(Z===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ye===Ls&&(ue=!0);else if((Ma&Z)===Z){$=$.next,Z===Ls&&(ue=!0);continue}else ye={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=ye,x=u):z=z.next=ye,vt.lanes|=Z,is|=Z;ye=$.action,Bs&&a(u,ye),u=$.hasEagerState?$.eagerState:a(u,ye)}else Z={lane:ye,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=Z,x=u):z=z.next=Z,vt.lanes|=ye,is|=ye;$=$.next}while($!==null&&$!==n);if(z===null?x=u:z.next=R,!si(u,e.memoizedState)&&(xn=!0,ue&&(a=xr,a!==null)))throw a;e.memoizedState=u,e.baseState=x,e.baseQueue=z,s.lastRenderedState=u}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Gf(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do u=e(u,x.action),x=x.next;while(x!==l);si(u,n.memoizedState)||(xn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function y0(e,n,a){var s=vt,l=pn(),u=Et;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!si((Qt||l).memoizedState,a);if(x&&(l.memoizedState=a,xn=!0),l=l.queue,jf(E0.bind(null,s,l,e),[e]),e=l.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,br(e?9:8,{destroy:void 0},M0.bind(null,s,l,a,n),null),e){if(s.flags|=2048,$t===null)throw Error(r(349));u||(Ma&127)!==0||b0(s,n,a)}return a}function b0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=rc(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function M0(e,n,a,s){n.value=a,n.getSnapshot=s,T0(n)&&A0(e)}function E0(e,n,a){return a(function(){T0(n)&&A0(e)})}function T0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function A0(e){var n=ws(e,2);n!==null&&ei(n,e,2)}function Vf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Bs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n}function w0(e,n,a,s){return e.baseState=a,Hf(e,Qt,typeof s=="function"?s:Ea)}function tb(e,n,a,s,l){if(fc(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};ge.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,R0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function R0(e,n){var a=n.action,s=n.payload,l=e.state;if(n.isTransition){var u=ge.T,x={};x.types=u!==null?u.types:null,ge.T=x;try{var R=a(l,s),z=ge.S;z!==null&&z(x,R),C0(e,n,R)}catch($){kf(e,n,$)}finally{u!==null&&x.types!==null&&(u.types=x.types),ge.T=u}}else try{u=a(l,s),C0(e,n,u)}catch($){kf(e,n,$)}}function C0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){N0(e,n,s)},function(s){return kf(e,n,s)}):N0(e,n,a)}function N0(e,n,a){n.status="fulfilled",n.value=a,D0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,R0(e,a)))}function kf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,D0(n),n=n.next;while(n!==s)}e.action=null}function D0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function U0(e,n){return n}function L0(e,n){if(Et){var a=$t.formState;if(a!==null){e:{var s=vt;if(Et){if(tn){t:{for(var l=tn,u=Ei;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ai(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){tn=Ai(l.nextSibling),s=l.data==="F!";break e}}Xa(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U0,lastRenderedState:n},a.queue=s,a=J0.bind(null,vt,s),s.dispatch=a,s=Vf(!1),u=Zf.bind(null,vt,!1,s.queue),s=kn(),l={state:n,dispatch:null,action:e,pending:null},s.queue=l,a=tb.bind(null,vt,l,u,a),l.dispatch=a,s.memoizedState=e,[n,a,!1]}function O0(e){var n=pn();return I0(n,Qt,e)}function I0(e,n,a){if(n=Hf(e,n,U0)[0],e=lc(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Bo(n)}catch(x){throw x===vr?Jl:x}else s=n;n=pn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,br(9,{destroy:void 0},nb.bind(null,l,a),null)),[s,u,e]}function nb(e,n){e.action=n}function P0(e){var n=pn(),a=Qt;if(a!==null)return I0(n,a,e);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function br(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=vt.updateQueue,n===null&&(n=rc(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function z0(){return pn().memoizedState}function cc(e,n,a,s){var l=kn();vt.flags|=e,l.memoizedState=br(1|n,{destroy:void 0},a,s===void 0?null:s)}function uc(e,n,a,s){var l=pn();s=s===void 0?null:s;var u=l.memoizedState.inst;Qt!==null&&s!==null&&Of(s,Qt.memoizedState.deps)?l.memoizedState=br(n,u,a,s):(vt.flags|=e,l.memoizedState=br(1|n,u,a,s))}function B0(e,n){cc(8390656,8,e,n)}function jf(e,n){uc(2048,8,e,n)}function ib(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=rc(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function F0(e){var n=pn().memoizedState;return ib({ref:n,nextImpl:e}),function(){if((kt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function H0(e,n){return uc(4,2,e,n)}function G0(e,n){return uc(4,4,e,n)}function V0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function k0(e,n,a){a=a!=null?a.concat([e]):null,uc(4,4,V0.bind(null,n,e),a)}function Xf(){}function j0(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Of(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function X0(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Of(n,s[1]))return s[0];if(s=e(),Bs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s}function Wf(e,n,a){return a===void 0||(Ma&1073741824)!==0&&(Ct&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=tx(),vt.lanes|=e,is|=e,a)}function W0(e,n,a,s){return si(a,n)?a:Qa.current!==null?(e=Wf(e,a,s),si(e,n)||(xn=!0),e):(Ma&106)===0||(Ma&1073741824)!==0&&(Ct&261930)===0?(xn=!0,e.memoizedState=a):(e=tx(),vt.lanes|=e,is|=e,n)}function q0(e,n,a,s,l){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var x=ge.T,R={};R.types=x!==null?x.types:null,ge.T=R,Zf(e,!1,n,a);try{var z=l(),$=ge.S;if($!==null&&$(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=Jy(z,s);Fo(e,n,ue,ui(e))}else Fo(e,n,s,ui(e))}catch(ye){Fo(e,n,{then:function(){},status:"rejected",reason:ye},ui())}finally{Ce.p=u,x!==null&&R.types!==null&&(x.types=R.types),ge.T=x}}function ab(){}function qf(e,n,a,s){if(e.tag!==5)throw Error(r(476));var l=Y0(e).queue;q0(e,l,n,zt,a===null?ab:function(){return Z0(e),a(s)})}function Y0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:zt,baseState:zt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:zt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Z0(e){var n=Y0(e);n.next===null&&(n=e.alternate.memoizedState),Fo(e,n.next.queue,{},ui())}function Yf(){return Rn(Gr)}function K0(){return pn().memoizedState}function Q0(){return pn().memoizedState}function sb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=Za(a);var s=Ka(n,e,a);s!==null&&(ei(s,n,a),Lo(s,n,a)),n={cache:bf()},e.payload=n;return}n=n.return}}function rb(e,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fc(e)?$0(n,a):(a=hf(e,n,a,s),a!==null&&(ei(a,e,s),eg(a,n,s)))}function J0(e,n,a){var s=ui();Fo(e,n,a,s)}function Fo(e,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fc(e))$0(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var x=n.lastRenderedState,R=u(x,a);if(l.hasEagerState=!0,l.eagerState=R,si(R,x))return Vl(e,n,l,0),$t===null&&Gl(),!1}catch{}finally{}if(a=hf(e,n,l,s),a!==null)return ei(a,e,s),eg(a,n,s),!0}return!1}function Zf(e,n,a,s){if(s={lane:2,revertLane:Fd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(n)throw Error(r(479))}else n=hf(e,a,s,2),n!==null&&ei(n,e,2)}function fc(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function $0(e,n){Sr=ac=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function eg(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,po(e,a)}}var dc={readContext:Rn,use:oc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},tg={readContext:Rn,use:oc,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:B0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cc(4194308,4,V0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cc(4194308,4,e,n)},useInsertionEffect:function(e,n){cc(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(Bs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var l=a(n);if(Bs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else l=n;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=rb.bind(null,vt,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vf(e);var n=e.queue,a=J0.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xf,useDeferredValue:function(e,n){var a=kn();return Wf(a,e,n)},useTransition:function(){var e=Vf(!1);return e=q0.bind(null,vt,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=vt,l=kn();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$t===null)throw Error(r(349));(Ct&127)!==0||b0(s,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,B0(E0.bind(null,s,u,e),[e]),s.flags|=2048,br(9,{destroy:void 0},M0.bind(null,s,u,a,n),null),a},useId:function(){var e=kn(),n=$t.identifierPrefix;if(Et){var a=Yi,s=qi;a=(s&~(1<<32-pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$y++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yf,useFormState:L0,useActionState:L0,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zf.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ff,useCacheRefresh:function(){return kn().memoizedState=sb.bind(null,vt)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((kt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ng={readContext:Rn,use:oc,useCallback:j0,useContext:Rn,useEffect:jf,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:X0,useReducer:lc,useRef:z0,useState:function(){return lc(Ea)},useDebugValue:Xf,useDeferredValue:function(e,n){var a=pn();return W0(a,Qt.memoizedState,e,n)},useTransition:function(){var e=lc(Ea)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Bo(e),n]},useSyncExternalStore:y0,useId:K0,useHostTransitionStatus:Yf,useFormState:O0,useActionState:O0,useOptimistic:function(e,n){var a=pn();return w0(a,Qt,e,n)},useMemoCache:Ff,useCacheRefresh:Q0,useEffectEvent:F0},ob={readContext:Rn,use:oc,useCallback:j0,useContext:Rn,useEffect:jf,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:X0,useReducer:Gf,useRef:z0,useState:function(){return Gf(Ea)},useDebugValue:Xf,useDeferredValue:function(e,n){var a=pn();return Qt===null?Wf(a,e,n):W0(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Gf(Ea)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Bo(e),n]},useSyncExternalStore:y0,useId:K0,useHostTransitionStatus:Yf,useFormState:P0,useActionState:P0,useOptimistic:function(e,n){var a=pn();return Qt!==null?w0(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:Q0,useEffectEvent:F0};function Kf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qf={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ui(),l=Za(s);l.payload=n,a!=null&&(l.callback=a),n=Ka(e,l,s),n!==null&&(ei(n,e,s),Lo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ui(),l=Za(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ka(e,l,s),n!==null&&(ei(n,e,s),Lo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),s=Za(a);s.tag=2,n!=null&&(s.callback=n),n=Ka(e,s,a),n!==null&&(ei(n,e,a),Lo(n,e,a))}};function ig(e,n,a,s,l,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,x):n.prototype&&n.prototype.isPureReactComponent?!To(a,s)||!To(l,u):!0}function ag(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Qf.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function sg(e){Hl(e)}function rg(e){console.error(e)}function og(e){Hl(e)}function hc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function lg(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Jf(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){hc(e,n)},a}function cg(e){return e=Za(e),e.tag=3,e}function ug(e,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;e.payload=function(){return l(u)},e.callback=function(){lg(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){lg(n,a,s),typeof l!="function"&&(as===null?as=new Set([this]):as.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function lb(e,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ds(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Oc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===$l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Pd(e,s,l)),!1;case 22:return a.flags|=65536,s===$l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Pd(e,s,l)),!1}throw Error(r(435,a.tag))}return Pd(e,s,l),Oc(),!1}if(Et)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==vf&&(e=Error(r(422),{cause:s}),Ro(yi(e,a)))):(s!==vf&&(n=Error(r(423),{cause:s}),Ro(yi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=yi(s,a),l=Jf(e.stateNode,s,l),Rf(e,l),dn!==4&&(dn=2)),!1;var u=Error(r(520),{cause:s});if(u=yi(u,a),qo===null?qo=[u]:qo.push(u),dn!==4&&(dn=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Jf(a.stateNode,s,e),Rf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(as===null||!as.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=cg(l),ug(l,e,a,s),Rf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var $f=Error(r(461)),xn=!1;function yn(e,n,a,s){n.child=e===null?p0(n,null,a,s):zs(n,e.child,a,s)}function fg(e,n,a,s,l){a=a.render;var u=n.ref;if("ref"in s){var x={};for(var R in s)R!=="ref"&&(x[R]=s[R])}else x=s;return Us(n),s=If(e,n,a,x,u,l),R=Pf(),e!==null&&!xn?(zf(e,n,l),Ta(e,n,l)):(Et&&R&&Wl(n),n.flags|=1,yn(e,n,s,l),n.child)}function dg(e,n,a,s,l){if(e===null){var u=a.type;return typeof u=="function"&&!pf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,hg(e,n,u,s,l)):(e=jl(a.type,null,s,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!od(e,l)){var x=u.memoizedProps;if(a=a.compare,a=a!==null?a:To,a(x,s)&&e.ref===n.ref)return Ta(e,n,l)}return n.flags|=1,e=_a(u,s),e.ref=n.ref,e.return=n,n.child=e}function hg(e,n,a,s,l){if(e!==null){var u=e.memoizedProps;if(To(u,s)&&e.ref===n.ref)if(xn=!1,n.pendingProps=s=u,od(e,l))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Ta(e,n,l)}return ed(e,n,a,s,l)}function pg(e,n,a,s){var l=s.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(s=n.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return mg(e,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ql(n,u!==null?u.cachePool:null),u!==null?x0(n,u):Nf(),v0(n);else return s=n.lanes=536870912,mg(e,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Ql(n,u.cachePool),x0(n,u),$a(),n.memoizedState=null):(e!==null&&Ql(n,null),Nf(),$a());return yn(e,n,l,a),n.child}function Ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mg(e,n,a,s,l){var u=Ef();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ql(n,null),Nf(),v0(n),e!==null&&Ds(e,n,s,!0),n.childLanes=l,null}function pc(e,n){return n=mc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gg(e,n,a){return zs(n,e.child,null,a),e=pc(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function cb(e,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(s.mode==="hidden")return e=pc(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ho(null,e);if(Uf(n),(e=tn)?(e=Vx(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=$m(e),a.return=n,n.child=a,En=n,tn=null)):e=null,e===null)throw Xa(n);return n.lanes=536870912,null}return pc(n,s)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Uf(n),l)if(n.flags&256)n.flags&=-257,n=gg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||Ds(e,n,a,!1),l=(a&e.childLanes)!==0,xn||l){if(Qa.current===null){if(s=$t,s!==null&&(x=mo(s,a),x!==0&&x!==u.retryLane))throw u.retryLane=x,ws(e,x),ei(s,e,x),$f;Oc()}n=gg(e,n,a)}else e=u.treeContext,tn=Ai(x.nextSibling),En=n,Et=!0,ja=null,Ei=!1,e!==null&&n0(n,e),n=pc(n,s),n.flags|=134221824;return n}return e=_a(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Mr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ed(e,n,a,s,l){return Us(n),a=If(e,n,a,s,void 0,l),s=Pf(),e!==null&&!xn?(zf(e,n,l),Ta(e,n,l)):(Et&&s&&Wl(n),n.flags|=1,yn(e,n,a,l),n.child)}function xg(e,n,a,s,l,u){return Us(n),n.updateQueue=null,a=S0(n,s,a,l),_0(e),s=Pf(),e!==null&&!xn?(zf(e,n,u),Ta(e,n,u)):(Et&&s&&Wl(n),n.flags|=1,yn(e,n,a,u),n.child)}function vg(e,n,a,s,l){if(Us(n),n.stateNode===null){var u=hr,x=a.contextType;typeof x=="object"&&x!==null&&(u=Rn(x)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Qf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Af(n),x=a.contextType,u.context=typeof x=="object"&&x!==null?Rn(x):hr,u.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Kf(n,a,x,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&Qf.enqueueReplaceState(u,u.state,null),Io(n,s,u,l),Oo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,z=Fs(a,R);u.props=z;var $=u.context,ue=a.contextType;x=hr,typeof ue=="object"&&ue!==null&&(x=Rn(ue));var ye=a.getDerivedStateFromProps;ue=typeof ye=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ue||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||$!==x)&&ag(n,u,s,x),Ya=!1;var Z=n.memoizedState;u.state=Z,Io(n,s,u,l),Oo(),$=n.memoizedState,R||Z!==$||Ya?(typeof ye=="function"&&(Kf(n,a,ye,s),$=n.memoizedState),(z=Ya||ig(n,a,z,s,Z,$,x))?(ue||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),u.props=s,u.state=$,u.context=x,s=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,wf(e,n),x=n.memoizedProps,ue=Fs(a,x),u.props=ue,ye=n.pendingProps,Z=u.context,$=a.contextType,z=hr,typeof $=="object"&&$!==null&&(z=Rn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==ye||Z!==z)&&ag(n,u,s,z),Ya=!1,Z=n.memoizedState,u.state=Z,Io(n,s,u,l),Oo();var oe=n.memoizedState;x!==ye||Z!==oe||Ya||e!==null&&e.dependencies!==null&&Zl(e.dependencies)?(typeof R=="function"&&(Kf(n,a,R,s),oe=n.memoizedState),(ue=Ya||ig(n,a,ue,s,Z,oe,z)||e!==null&&e.dependencies!==null&&Zl(e.dependencies))?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,oe,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,oe,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),u.props=s,u.state=oe,u.context=z,s=ue):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),s=!1)}return u=s,Mr(e,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&s?(n.child=zs(n,e.child,null,l),n.child=zs(n,null,a,l)):yn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=Ta(e,n,l),e}function _g(e,n,a,s){return Cs(),n.flags|=256,yn(e,n,a,s),n.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(e){return{baseLanes:e,cachePool:l0()}}function id(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function Sg(e,n,a){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),x&&(l=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(l?Ja(n):$a(),(e=tn)?(e=Vx(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=$m(e),a.return=n,n.child=a,En=n,tn=null)):e=null,e===null)throw Xa(n);return nh(e)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?($a(),l=n.mode,u=mc({mode:"hidden",children:u},l),s=Rs(s,l,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=nd(a),s.childLanes=id(e,x,a),n.memoizedState=td,Ho(null,s)):(Ja(n),ad(n,u))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return ub(e,n,u,x,s,z,R,a)}return l?($a(),l=s.fallback,u=n.mode,R=e.child,z=R.sibling,s=_a(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,z!==null?l=_a(z,l):(l=Rs(l,u,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Ho(null,s),s=n.child,l=e.child.memoizedState,l===null?l=nd(a):(u=l.cachePool,u!==null?(R=mn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=l0(),l={baseLanes:l.baseLanes|a,cachePool:u}),s.memoizedState=l,s.childLanes=id(e,x,a),n.memoizedState=td,Ho(e.child,s)):(Ja(n),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function ad(e,n){return n=mc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function mc(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function gc(e,n,a){return zs(n,e.child,null,a),e=ad(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ub(e,n,a,s,l,u,x,R){if(a)return n.flags&256?(Ja(n),n.flags&=-257,gc(e,n,R)):n.memoizedState!==null?($a(),n.child=e.child,n.flags|=128,null):($a(),u=l.fallback,x=n.mode,l=mc({mode:"visible",children:l.children},x),u=Rs(u,x,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,zs(n,e.child,null,R),l=n.child,l.memoizedState=nd(R),l.childLanes=id(e,s,R),n.memoizedState=td,Ho(null,l));if(Ja(n),nh(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Ro({value:l,source:null,stack:null})),gc(e,n,R)}if(xn||Ds(e,n,R,!1),s=(R&e.childLanes)!==0,xn||s){if(Qa.current!==null)return gc(e,n,R);if(s=$t,s!==null&&(l=mo(s,R),l!==0&&l!==x.retryLane))throw x.retryLane=l,ws(e,l),ei(s,e,l),$f;return th(u)||Oc(),gc(e,n,R)}return th(u)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,tn=Ai(u.nextSibling),En=n,Et=!0,ja=null,Ei=!1,e!==null&&n0(n,e),n=ad(n,l.children),n.flags|=134221824,n)}function yg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Yl(e.return,n,a)}function bg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&ic(a)===null&&(n=e),e=e.sibling}return n}function xc(e,n,a,s,l,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:u}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=l,x.treeForkCount=u)}function sd(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function rd(e,n,a){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var x=Nn.current;if(n.flags&128)return Po(n,x),null;var R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Po(n,x),l==="backwards"&&e!==null?(sd(e),yn(e,n,s,a),sd(e)):yn(e,n,s,a),s=Et?wo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,a,n);else if(e.tag===19)yg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=bg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,sd(n)),xc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ic(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}xc(n,!0,a,null,u,s);break;case"together":xc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=bg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),xc(n,!1,l,a,u,s)}return n.child}function Mg(e,n,a){var s=n.pendingProps;return Wa(n,n.type,s.value),yn(e,n,s.children,a),n.child}function Ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ds(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=_a(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function od(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zl(e)))}function fb(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Wa(n,mn,e.memoizedState.cache),Cs();break;case 27:case 5:Ht(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ja(n),n.flags|=128,null;s=Ds(e,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?Sg(e,n,a):(Ja(n),e=Ta(e,n,a),e!==null?e.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return rd(e,n,a);if(l=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ds(e,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return rd(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Po(n,Nn.current),s)break;return null;case 22:return n.lanes=0,pg(e,n,a,n.pendingProps);case 24:Wa(n,mn,e.memoizedState.cache)}return Ta(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!od(e,a)&&(n.flags&128)===0)return xn=!1,fb(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Et&&(n.flags&1048576)!==0&&t0(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Is(n.elementType),n.type=e,typeof e=="function")pf(e)?(s=Fs(e,s),n.tag=1,n=vg(null,n,e,s,a)):(n.tag=0,n=ed(null,n,e,s,a));else{if(e!=null){var l=e.$$typeof;if(l===k){n.tag=11,n=fg(null,n,e,s,a);break e}else if(l===ie){n.tag=14,n=dg(null,n,e,s,a);break e}else if(l===ee){n.tag=10,n.type=e,n=Mg(null,n,a);break e}}throw n=Ae(e)||e,Error(r(306,n,""))}}return n;case 0:return ed(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Fs(s,n.pendingProps),vg(e,n,s,l,a);case 3:e:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,wf(e,n),Io(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Wa(n,mn,s),s!==u.cache&&yf(n,[mn],a,!0),Oo(),s=x.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=_g(e,n,s,a);break e}else if(s!==l){l=yi(Error(r(424)),n),Ro(l),n=_g(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ai(e.firstChild),En=n,Et=!0,ja=null,Ei=!0,a=p0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Cs(),s===l){n=Ta(e,n,a);break e}yn(e,n,s,a)}n=n.child}return n;case 26:return Mr(e,n),e===null?(a=Zx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(n.stateNode=Rx(n.type,n.pendingProps,tt.current,n)):n.memoizedState=Zx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Et&&(s=n.stateNode=Xx(n.type,n.pendingProps,tt.current),En=n,Ei=!0,l=tn,os(n.type)?(ih=l,tn=Ai(s.firstChild)):tn=l),yn(e,n,n.pendingProps.children,a),Mr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((l=s=tn)&&(s=sM(s,n.type,n.pendingProps,Ei),s!==null?(n.stateNode=s,En=n,tn=Ai(s.firstChild),Ei=!1,l=!0):l=!1),l||Xa(n)),Ht(n),l=n.type,u=n.pendingProps,x=e!==null?e.memoizedProps:null,s=u.children,Yd(l,u)?s=null:x!==null&&Yd(l,x)&&(n.flags|=32),n.memoizedState!==null&&(l=If(e,n,eb,null,null,a),Gr._currentValue=l),Mr(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&Et&&((e=a=tn)&&(a=rM(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,En=n,tn=null,e=!0):e=!1),e||Xa(n)),null;case 13:return Sg(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=zs(n,null,s,a):yn(e,n,s,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Mr(e,n),yn(e,n,s,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return Mg(e,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Us(n),l=Rn(l),s=s(l),n.flags|=1,yn(e,n,s,a),n.child;case 14:return dg(e,n,n.type,n.pendingProps,a);case 15:return hg(e,n,n.type,n.pendingProps,a);case 19:return rd(e,n,a);case 31:return cb(e,n,a);case 22:return pg(e,n,a,n.pendingProps);case 24:return Us(n),s=Rn(mn),e===null?(l=Ef(),l===null&&(l=$t,u=bf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:s,cache:l},Af(n),Wa(n,mn,l)):((e.lanes&a)!==0&&(wf(e,n),Io(n,null,null,a),Oo()),l=e.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,mn,s)):(s=u.cache,Wa(n,mn,s),s!==l.cache&&yf(n,[mn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:Et&&Wl(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Mr(e,n),yn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Aa(e){e.flags|=4}function ld(e,n,a,s,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?$x(n,s):$x(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(sx())e.flags|=8192;else throw Ps=$l,Tf}else e.flags&=-16777217}function Tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ev(n))if(sx())e.flags|=8192;else throw Ps=$l,Tf}function vc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ho():536870912,e.lanes|=n,Rr|=n)}function Go(e,n){if(!Et)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function db(e,n,a){var s=n.pendingProps;switch(xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ba(mn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gr(n)?Aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),nn(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Aa(n),u!==null?(nn(n),Tg(n,u)):(nn(n),ld(n,l,null,s,a))):u?u!==e.memoizedState?(Aa(n),nn(n),Tg(n,u)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Aa(n),nn(n),ld(n,l,e,s,a)),null;case 27:if(I(n),a=tt.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),n.subtreeFlags&=-33554433,null}e=rt.current,gr(n)?i0(n):(e=Xx(l,s,a),n.stateNode=e,Aa(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(I(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),n.subtreeFlags&=-33554433,null}if(u=rt.current,gr(n))i0(n);else{var x=Jo(tt.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?x.createElement(l,{is:s.is}):x.createElement(l)}}u[w]=n,u[H]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=u;e:switch(Un(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Aa(n)}}return nn(n),n.subtreeFlags&=-33554433,ld(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Aa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=tt.current,gr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,l=En,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[w]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ex(e.nodeValue,a)),e||Xa(n,!0)}else e=Jo(e).createTextNode(s),e[w]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=gr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[w]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=gr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[w]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),l=!1}else l=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),vc(n,n.updateQueue),nn(n),null);case 4:return sn(),e===null&&kd(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return ba(n.type),nn(n),null;case 19:if(Lf(n),s=n.memoizedState,s===null)return nn(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)Go(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=ic(e),u!==null){for(n.flags|=128,Go(s,!1),e=u.updateQueue,n.updateQueue=e,vc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jm(a,e),a=a.sibling;return Po(n,Nn.current&1|2),Et&&Sa(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Xe()>Nc&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304)}else{if(!l)if(e=ic(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,vc(n,e),Go(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!Et)return nn(n),null}else 2*Xe()-s.renderingStartTime>Nc&&a!==536870912&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(e=s.last,e!==null?e.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,u=Nn.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Et?Po(n,u):(a=u,Ne(Cn,n),Ne(Nn,a),Pn===null&&(Pn=n)),Et&&Sa(n,s.treeForkCount),e}return nn(n),null;case 22:case 23:return ri(n),Df(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&vc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&be(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(mn),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(r(156,n.tag))}function hb(e,n){switch(xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ba(mn),sn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return I(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Lf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return ba(n.type),null;case 22:case 23:return ri(n),Df(),e!==null&&be(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ba(mn),null;case 25:return null;default:return null}}function Ag(e,n){switch(xf(n),n.tag){case 3:ba(mn),sn();break;case 26:case 27:case 5:I(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Lf(n);break;case 10:ba(n.type);break;case 22:case 23:ri(n),Df(),e!==null&&be(Os);break;case 24:ba(mn)}}function Vo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&e)===e){s=void 0;var u=a.create,x=a.inst;s=u(),x.destroy=s}a=a.next}while(a!==l)}}catch(R){qt(n,n.return,R)}}function es(e,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){var x=s.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,l=n;var z=a,$=R;try{$()}catch(ue){qt(l,z,ue)}}}s=s.next}while(s!==u)}}catch(ue){qt(n,n.return,ue)}}function wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{g0(n,a)}catch(s){qt(e,e.return,s)}}}function Rg(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){qt(e,n,s)}}function Zi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var l=e.stateNode,u=xa(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=Ix(u)),s=l.ref;break;case 7:if(e.stateNode===null){var x=new fi(e);v(e.child,!1,iM,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){qt(e,n,R)}}function Dn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){qt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qt(e,n,l)}else a.current=null}function _c(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Gx(e.stateNode,n[a])}function Cg(e){for(var n=e.return;n!==null&&(ud(n)&&Gx(e.stateNode,n.stateNode),!cd(n));)n=n.return}function ko(e){for(var n=e.return;n!==null&&(ud(n)&&aM(e.stateNode,n.stateNode),!cd(n));)n=n.return}function cd(e){return e.tag===5||e.tag===3||e.tag===27}function ud(e){return e&&e.tag===7&&e.stateNode!==null}function fd(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){qt(e,e.return,l)}}function dd(e,n,a){try{var s=e.stateNode;Fb(s,e.type,a,n),s[H]=n}catch(l){qt(e,e.return,l)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pd(e,n,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),_c(e,s),Mt=!0;else if(l!==4&&(l===27&&(_c(e,s),s=null,os(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(pd(e,n,a,s),e=e.sibling;e!==null;)pd(e,n,a,s),e=e.sibling}function Sc(e,n,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),_c(e,s),Mt=!0;else if(l!==4&&(l===27&&(_c(e,s),s=null,os(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Sc(e,n,a,s),e=e.sibling;e!==null;)Sc(e,n,a,s),e=e.sibling}function Dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Un(n,s,a),n[w]=e,n[H]=a}catch(u){qt(e,e.return,u)}}var yc=!1,oi=null;function Ug(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(yc=!0)}var Ki=null;function Lg(){var e=Ki;return Ki=null,e}var Qn=0;function Er(e,n,a,s,l){return Qn=0,Og(e.child,n,a,s,l)}function Og(e,n,a,s,l){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var R=Qd(x);s.push(R),R.view&&(u=!0)}else u||Qd(x).view&&(u=!0);yc=!0,Lx(x,Qn===0?n:n+"_"+Qn,a),Qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Og(e.child,n,a,s,l)&&(u=!0));e=e.sibling}return u}function Qi(e,n){for(;e!==null;)e.tag===5?Ox(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Qi(e.child,n)),e=e.sibling}function bc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(bc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=va(n.default,n.share),n!=="none"&&(Er(e,a,n,null,!1)||Qi(e.child,!1))}e=e.sibling}}function md(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,l=xa(s,a),u=va(s.default,a.paired?s.share:s.enter);u!=="none"?Er(e,l,u,null,!1)?(bc(e),a.paired||n||Ur(e,s.onEnter)):Qi(e.child,!1):bc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)md(e,n),e=e.sibling;else bc(e)}function gd(e){if(oi!==null&&oi.size!==0){var n=oi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=va(a.default,a.share);if(u!=="none"&&(Er(e,s,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,Ur(e,a.onShare)):Qi(e.child,!1)),n.delete(s),n.size===0)break}}}gd(e)}e=e.sibling}}}function xd(e){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode),s=oi!==null?oi.get(a):void 0,l=va(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(Er(e,a,l,null,!1)?s!==void 0?(l=e.stateNode,s.paired=l,l.paired=s,oi.delete(a),Ur(e,n.onShare)):Ur(e,n.onExit):Qi(e.child,!1)),oi!==null&&gd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xd(e),e=e.sibling;else oi!==null&&gd(e)}function Ig(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode);n=va(n.default,n.update),e.flags&=-5,n!=="none"&&Er(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ig(e);e=e.sibling}}function vd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Qi(e.child,!1))}vd(e)}e=e.sibling}}function Mc(e){if(e.tag===30)e.stateNode.paired=null,Qi(e.child,!1),vd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mc(e),e=e.sibling;else vd(e)}function Pg(e){for(e=e.child;e!==null;)e.tag===30?Qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Pg(e),e=e.sibling}function _d(e,n,a,s,l,u,x){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&Qn<u.length){var $=u[Qn],ue=Qd(z);($.view||ue.view)&&(R=!0);var ye;if(ye=(e.flags&4)===0)if(ue.clip)ye=!0;else{ye=$.rect;var Z=ue.rect;ye=ye.y!==Z.y||ye.x!==Z.x||ye.height!==Z.height||ye.width!==Z.width}ye&&(e.flags|=4),ue.abs?ue=!$.abs:($=$.rect,ue=ue.rect,ue=$.height!==ue.height||$.width!==ue.width),ue&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Lx(z,Qn===0?a:a+"_"+Qn,l),R&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(z,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:_d(e,n.child,a,s,l,u,x)&&(R=!0));n=n.sibling}return R}function zg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,l=xa(a,s),u=va(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;Qn=0,l=_d(s,R,l,l,u,x,!1),(e.flags&4)!==0&&l&&Ur(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&zg(e);e=e.sibling}}var Tn=!1,Xt=!1,Ji=!1,Sd=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,An=null,$i=!1,jo=!1,Ec=!1,yd=!1;function pb(e,n,a){if(e=e.containerInfo,Wd=Vr,e=Vm(e),of(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,x=l.focusNode;l=l.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var R=0,z=-1,$=-1,ue=0,ye=0,Z=e,oe=null;t:for(;;){for(var ze;Z!==s||u!==0&&Z.nodeType!==3||(z=R+u),Z!==x||l!==0&&Z.nodeType!==3||($=R+l),Z.nodeType===3&&(R+=Z.nodeValue.length),(ze=Z.firstChild)!==null;)oe=Z,Z=ze;for(;;){if(Z===e)break t;if(oe===s&&++ue===u&&(z=R),oe===x&&++ye===l&&($=R),(ze=Z.nextSibling)!==null)break;Z=oe,oe=Z.parentNode}Z=ze}s=z===-1||$===-1?null:{start:z,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(qd={focusedElem:e,selectionRange:s},Vr=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(e=An,a&&(s=e.deletions,s!==null))for(u=0;u<s.length;u++)a&&xd(s[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&Ug(e),Tc(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&xd(s),Tc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Ug(e),Tc(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,An=s):(a&&Ig(e),Tc(a))}}oi=null}function Tc(e){for(;An!==null;){var n=An,a=e,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var x=Fs(n.type,l);a=u.getSnapshotBeforeUpdate(x,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){qt(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)eh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":eh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=xa(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=va(l.default,l.update),l!=="none"&&Er(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function Fg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),s&4&&Vo(5,a);break;case 1:if(ea(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){qt(a,a.return,x)}else{var l=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){qt(a,a.return,x)}}s&64&&wg(a),s&512&&Zi(a,a.return);break;case 3:if(ea(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{g0(e,n)}catch(x){qt(a,a.return,x)}}break;case 27:n===null&&s&4&&Dg(a);case 26:case 5:ea(e,a),n===null&&s&4&&fd(a),s&512&&Zi(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),s&4&&kg(e,a);break;case 13:ea(e,a),s&4&&jg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ab.bind(null,a),oM(e,a))));break;case 22:if(s=a.memoizedState!==null||Tn,!s){var u=n!==null&&n.memoizedState!==null||Xt;n=Tn,l=Xt,Tn=s,(Xt=u)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Li(e,a,s)):ea(e,a),Tn=n,Xt=l}break;case 30:ea(e,a),s&512&&Zi(a,a.return);break;case 7:s&512&&Zi(a,a.return);default:ea(e,a)}}function bd(e,n){for(e=e.child;e!==null;)Hg(e,n),e=e.sibling}function Hg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(z){qt(e,e.return,z)}Md(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Mt=!0}catch(z){qt(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?Ux(R,!0):Ux(e.stateNode,!1)}catch(z){qt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&bd(e,n);break;default:bd(e,n)}}function Md(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=n;switch(a.tag){case 4:Hg(a,s);break e;case 22:a.memoizedState===null&&Md(a,s);break e;default:Md(a,s)}}e=e.sibling}}function Gg(e){var n=e.alternate;n!==null&&(e.alternate=null,Gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Je(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Jn=!1;function Di(e,n,a){for(a=a.child;a!==null;)Vg(e,n,a),a=a.sibling}function Vg(e,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 26:Xt||Dn(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||Dn(a,n),ko(a);var s=an,l=Jn;os(a.type)&&(an=a.stateNode,Jn=!1),Di(e,n,a),Wx(a.stateNode,a.type,a.memoizedProps),an=s,Jn=l;break;case 5:Xt||Dn(a,n),ko(a);case 6:if(a.tag===6&&ko(a),s=an,l=Jn,an=null,Di(e,n,a),an=s,Jn=l,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),Mt=!0}catch(u){qt(a,n,u)}else try{an.removeChild(a.stateNode),Mt=!0}catch(u){qt(a,n,u)}break;case 18:an!==null&&(Jn?(e=an,Dx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),kr(e)):Dx(an,a.stateNode));break;case 4:s=an,l=Jn,an=a.stateNode.containerInfo,Jn=!0,Di(e,n,a),an=s,Jn=l;break;case 0:case 11:case 14:case 15:es(2,a,n),Xt||es(4,a,n),Di(e,n,a);break;case 1:Xt||(Dn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rg(a,n,s)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:Xt=(s=Xt)||a.memoizedState!==null,Di(e,n,a),Xt=s;break;case 30:Dn(a,n),Di(e,n,a);break;case 7:Xt||Dn(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(a){qt(n,n.return,a)}}}function jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(a){qt(n,n.return,a)}}function mb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bg),n;default:throw Error(r(435,e.tag))}}function Ac(e,n){var a=mb(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=wb.bind(null,e,s);s.then(l,l)}})}function jn(e,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],x=e,R=n,z=R;e:for(;z!==null;){switch(z.tag){case 27:if(os(z.type)){an=z.stateNode,Jn=!1;break e}break;case 5:an=z.stateNode,Jn=!1;break e;case 3:case 4:an=z.stateNode.containerInfo,Jn=!0;break e}z=z.return}if(an===null)throw Error(r(160));Vg(x,R,u),an=null,Jn=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xg(n,e,a),n=n.sibling}var Ui=null;function Xg(e,n,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var x=s[u];x.ref.impl=x.nextImpl}jn(n,e,a),Xn(e),l&4&&(es(3,e,e.return),Vo(3,e),es(5,e,e.return));break;case 1:jn(n,e,a),Xn(e),l&512&&(Xt||s===null||Dn(s,s.return)),l&64&&Tn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ui,jn(n,e,a),Xn(e),l&512&&(Xt||s===null||Dn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(Tn)e.stateNode=Rx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Pe]||s[w]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Un(s,n,a),s[w]=e,bt(s),n=s;break e;case"link":if(u=Jx("link","href",l).get(n+(a.href||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;case"meta":if(u=Jx("meta","content",l).get(n+(a.content||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[w]=e,bt(s),n=s}e.stateNode=n}else Tn||oh(u,e.type,e.stateNode);else e.stateNode=Qx(u,a,e.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Xt||n.parentNode.removeChild(n)):l.count--,a===null?Tn||oh(u,e.type,e.stateNode):Qx(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&dd(e,e.memoizedProps,s.memoizedProps);break;case 27:jn(n,e,a),Xn(e),l&512&&(Xt||s===null||Dn(s,s.return)),s!==null&&l&4&&dd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(u=Ji,Ji=!1,jn(n,e,a),Ji=u,Xn(e),l&512&&(Xt||s===null||Dn(s,s.return)),e.flags&32){n=e.stateNode;try{rr(n,""),Mt=!0}catch(ue){qt(e,e.return,ue)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,dd(e,n,s!==null?s.memoizedProps:n)),l&1024&&(Sd=!0);break;case 6:if(jn(n,e,a),Xn(e),l&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Mt=!0}catch(ue){qt(e,e.return,ue)}}break;case 3:if(Mt=!1,Gc=null,u=Ui,Ui=$o(n.containerInfo),jn(n,e,a),Ui=u,Xn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{kr(n.containerInfo)}catch(ue){qt(e,e.return,ue)}Sd&&(Sd=!1,Wg(e)),Mt=!1;break;case 4:l=Ji,Ji=Tn,s=Vt(),u=Ui,Ui=$o(e.stateNode.containerInfo),jn(n,e,a),Xn(e),Ui=u,Mt&&jo&&(Ec=!0),Mt=s,Ji=l;break;case 12:jn(n,e,a),Xn(e);break;case 31:jn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ac(e,n)));break;case 13:jn(n,e,a),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cc=Xe()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ac(e,n)));break;case 22:u=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var R=Tn,z=Xt,$=Ji;Tn=R||u,Ji=$||u,Xt=z||x,jn(n,e,a),Xt=z,Ji=$,Tn=R,Xn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||x||Tn||Xt||(n=x||Xt,a=Tn,s=Xt,Tn=u||Tn,Xt=n,ts(e,2),Tn=a,Xt=s),!u&&Ji||bd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ac(e,a))));break;case 19:jn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ac(e,n)));break;case 30:l&512&&(Xt||s===null||Dn(s,s.return)),l=Vt(),u=jo,x=(a&335544064)===a,R=e.memoizedProps,jo=x&&va(R.default,R.update)!=="none",jn(n,e,a),Xn(e),x&&s!==null&&Mt&&(e.flags|=4),jo=u,Mt=l;break;case 21:break;case 7:l&512&&(Xt||s===null||Dn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:jn(n,e,a),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Ng(s)){a=s;break}s=s.return}s=null;for(var l=e.return;l!==null;){if(ud(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(cd(l))break;l=l.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,z=hd(e);Sc(e,z,R,x);break;case 5:var $=a.stateNode;a.flags&32&&(rr($,""),a.flags&=-33);var ue=hd(e);Sc(e,ue,$,x);break;case 3:case 4:var ye=a.stateNode.containerInfo,Z=hd(e);pd(e,Z,ye,x);break;default:throw Error(r(161))}}catch(oe){qt(e,e.return,oe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Wg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vr=!0,n.reset(),Vr=!1),e=e.sibling}}function Tr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)qg(n,e),n=n.sibling;else zg(n)}function qg(e,n){var a=e.alternate;if(a===null)md(e,!1);else switch(e.tag){case 3:if(yd=$i=!1,Lg(),Tr(n,e),!$i&&!Ec){if(e=Ki,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var l=e[s+1];Ox(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yd=!0}Ki=null;break;case 5:Tr(n,e);break;case 4:s=$i,$i=!1,Tr(n,e),$i&&(Ec=!0),$i=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?md(e,!1):Tr(n,e));break;case 30:s=$i,l=Lg(),$i=!1,Tr(n,e),$i&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;n=xa(u,x),x=xa(a.memoizedProps,x);var R=va(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Qn=0,n=_d(e,a,n,x,R,u,!0),Qn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ur(e,e.memoizedProps.onUpdate),Ki=l):l!==null&&(l.push.apply(l,Ki),Ki=l),$i=(e.flags&32)!==0?!0:s;break;default:Tr(n,e)}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fg(e,n.alternate,n),n=n.sibling}function ts(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:es(4,a,a.return),ts(a,s);break;case 1:Dn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Rg(a,a.return,l),ts(a,s);break;case 27:(s&2)!==0&&Wx(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||ko(a),ts(a,s);break;case 6:ko(a);break;case 26:Dn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Xt||l.parentNode.removeChild(l),ts(a,s);break;case 22:a.memoizedState===null&&ts(a,s);break;case 30:Dn(a,a.return),ts(a,s);break;case 7:Dn(a,a.return);default:ts(a,s)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=e,u=n,x=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(l,u,a),Vo(4,u);break;case 1:if(Li(l,u,a),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ue){qt(s,s.return,ue)}if(s=u,l=s.updateQueue,l!==null){var z=s.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)m0($[l],z)}catch(ue){qt(s,s.return,ue)}}R&&x&64&&wg(u),Zi(u,u.return);break;case 27:(a&2)!==0&&Dg(u);case 5:u.tag!==5&&u.tag!==27||Cg(u),Li(l,u,a),R&&s===null&&x&4&&fd(u),Zi(u,u.return);break;case 6:Cg(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||Tn||oh($o(z.ownerDocument),u.type,z),Li(l,u,a),R&&s===null&&x&4&&fd(u),Zi(u,u.return);break;case 12:Li(l,u,a);break;case 31:Li(l,u,a),R&&x&4&&kg(l,u);break;case 13:Li(l,u,a),R&&x&4&&jg(l,u);break;case 22:u.memoizedState===null&&Li(l,u,a),Zi(u,u.return);break;case 30:Li(l,u,a),Zi(u,u.return);break;case 7:Zi(u,u.return);default:Li(l,u,a)}n=n.sibling}}function Ed(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Co(a))}function Td(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e))}function Ti(e,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Yg(e,n,a,s),n=n.sibling;else l&&Pg(n)}function Yg(e,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Mc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,s),u&2048&&Vo(9,n);break;case 1:Ti(e,n,a,s);break;case 3:Ti(e,n,a,s),l&&yd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Co(u)));break;case 12:if(u&2048){Ti(e,n,a,s),u=n.stateNode;try{var x=n.memoizedProps,R=x.id,z=x.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch($){qt(n,n.return,$)}}else Ti(e,n,a,s);break;case 31:Ti(e,n,a,s);break;case 13:Ti(e,n,a,s);break;case 23:break;case 22:x=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&Mc(R),x._visibility&2?Ti(e,n,a,s):Xo(e,n)):(l&&R!==null&&R.memoizedState!==null&&Mc(n),x._visibility&2?Ti(e,n,a,s):(x._visibility|=2,Ar(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Ed(R,n);break;case 24:Ti(e,n,a,s),u&2048&&Td(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Qi(u.child,!0),Qi(n.child,!0))),Ti(e,n,a,s);break;default:Ti(e,n,a,s)}}function Ar(e,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,x=n,R=a,z=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Ar(u,x,R,z,l),Vo(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?Ar(u,x,R,z,l):Xo(u,x):(ue._visibility|=2,Ar(u,x,R,z,l)),l&&$&2048&&Ed(x.alternate,x);break;case 24:Ar(u,x,R,z,l),l&&$&2048&&Td(x.alternate,x);break;default:Ar(u,x,R,z,l)}n=n.sibling}}function Xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,l=s.flags;switch(s.tag){case 22:Xo(a,s),l&2048&&Ed(s.alternate,s);break;case 24:Xo(a,s),l&2048&&Td(s.alternate,s);break;default:Xo(a,s)}n=n.sibling}}var Hs=8192;function Gs(e,n,a){if(e.subtreeFlags&Hs)for(e=e.child;e!==null;)Zg(e,n,a),e=e.sibling}function Zg(e,n,a){switch(e.tag){case 26:Gs(e,n,a),e.flags&Hs&&(e.memoizedState!==null?yM(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&nv(a,e)));break;case 5:Gs(e,n,a),e.flags&Hs&&(e=e.stateNode,(n&335544128)===n&&nv(a,e));break;case 3:case 4:var s=Ui;Ui=$o(e.stateNode.containerInfo),Gs(e,n,a),Ui=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Hs,Hs=16777216,Gs(e,n,a),Hs=s):Gs(e,n,a));break;case 30:if((e.flags&Hs)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var l=e.stateNode;l.paired=null,oi===null&&(oi=new Map),oi.set(s,l)}Gs(e,n,a);break;default:Gs(e,n,a)}}function Kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Jg(s,e)}Kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qg(e),e=e.sibling}function Qg(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&es(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wc(e)):Wo(e);break;default:Wo(e)}}function wc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Jg(s,e)}Kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:es(8,n,n.return),wc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wc(n));break;default:wc(n)}e=e.sibling}}function Jg(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:es(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Co(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else e:for(a=e;An!==null;){s=An;var l=s.sibling,u=s.return;if(Gg(s),s===a){An=null;break e}if(l!==null){l.return=u,An=l;break e}An=u}}}var gb={getCacheForType:function(e){var n=Rn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(mn).controller.signal}},xb=typeof WeakMap=="function"?WeakMap:Map,kt=0,$t=null,At=null,Ct=0,Wt=0,li=null,ns=!1,wr=!1,Ad=!1,wa=0,dn=0,is=0,Vs=0,Rc=0,ci=0,Rr=0,qo=null,$n=null,wd=!1,Cc=0,$g=0,Nc=1/0,Dc=null,as=null,rn=0,Oi=null,ks=null,ta=0,Rd=0,Cd=null,ex=null,Cr=null,Nr=null,Dr=null,Yo=0,Uc=null;function ui(){return(kt&2)!==0&&Ct!==0?Ct&-Ct:ge.T!==null?Fd():Nl()}function tx(){if(ci===0)if((Ct&536870912)===0||Et){var e=bs;bs<<=1,(bs&3932160)===0&&(bs=262144),ci=e}else ci=536870912;return e=Cn.current,e!==null&&(e.flags|=32),ci}function Ur(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Ix(xa(e.memoizedProps,a))),Nr===null&&(Nr=[]),Nr.push(n.bind(null,s))}}function ei(e,n,a){(e===$t&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&(Lr(e,0),ss(e,Ct,ci,!1)),ji(e,a),((kt&2)===0||e!==$t)&&(e===$t&&((kt&2)===0&&(Vs|=a),dn===4&&ss(e,Ct,ci,!1)),na(e))}function nx(e,n,a){if((kt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ha(e,n),l=s?Sb(e,n):Dd(e,n,!0),u=s;do{if(l===0){wr&&!s&&ss(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!vb(a)){l=Dd(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=e;l=qo;var z=R.current.memoizedState.isDehydrated;if(z&&(Lr(R,x).flags|=256),x=Dd(R,x,!1),x!==2&&x!==6){if(Ad&&!z){R.errorRecoveryDisabledLanes|=u,Vs|=u,l=4;break e}u=$n,$n=l,u!==null&&($n===null?$n=u:$n.push.apply($n,u))}l=x}if(u=!1,l!==2)continue}}if(l===1){Lr(e,0),ss(e,n,0,!0);break}e:{switch(s=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ss(s,n,ci,!ns);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Cc+300-Xe(),10<l)){if(ss(s,n,ci,!ns),Ms(s,0,!0)!==0)break e;ta=n,s.timeoutHandle=Kd(ix.bind(null,s,a,$n,Dc,wd,n,ci,Vs,Rr,ns,u,"Throttled",-0,0),l);break e}ix(s,a,$n,Dc,wd,n,ci,Vs,Rr,ns,u,null,-0,0)}}break}while(!0);na(e)}function ix(e,n,a,s,l,u,x,R,z,$,ue,ye,Z,oe){e.timeoutHandle=-1;var ze=n.subtreeFlags,$e=(u&335544064)===u;if(ye=null,($e||ze&8192||(ze&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},oi=null,Zg(n,u,ye),$e&&(ze=ye,$e=e.containerInfo,$e=($e.nodeType===9?$e:$e.ownerDocument).__reactViewTransition,$e!=null&&(ze.count++,ze.waitingForViewTransition=!0,ze=nl.bind(ze),$e.finished.then(ze,ze))),ze=(u&62914560)===u?Cc-Xe():(u&4194048)===u?$g-Xe():0,ze=bM(ye,ze),ze!==null)){ta=u,e.cancelPendingCommit=ze(fx.bind(null,e,n,u,a,s,l,x,R,z,$,ue,ye,null,Z,oe)),ss(e,u,x,!$);return}fx(e,n,u,a,s,l,x,R,z,$,ue,ye)}function vb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],u=l.getSnapshot;l=l.value;try{if(!si(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(e,n,a,s){n=ki(e,n),n&=~Rc,n&=~Vs,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var l=n;0<l;){var u=31-pt(l),x=1<<u;s[u]=-1,l&=~x}a!==0&&Es(e,a,n)}function Lc(){return(kt&6)===0?(Zo(0),!1):!0}function Nd(){if(At!==null){if(Wt===0)var e=At.return;else e=At,ya=Ns=null,Bf(e),_r=null,Uo=0,e=At;for(;e!==null;)Ag(e.alternate,e),e=e.return;At=null}}function Lr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Vb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Nd(),$t=e,At=a=_a(e.current,null),Ct=n,Wt=0,li=null,ns=!1,wr=Ha(e,n),Ad=!1,Rr=ci=Rc=Vs=is=dn=0,$n=qo=null,wd=!1,wa=ki(e,n),Gl(),a}function ax(e,n){vt=null,ge.H=dc,n===vr||n===Jl?(n=f0(),Wt=3):n===Tf?(n=f0(),Wt=4):Wt=n===$f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,At===null&&(dn=1,hc(e,yi(n,e.current)))}function sx(){var e=Cn.current;return e===null?!0:(Ct&4194048)===Ct?Pn===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?e===Pn:!1}function rx(){var e=ge.H;return ge.H=dc,e===null?dc:e}function ox(){var e=ge.A;return ge.A=gb,e}function Oc(){dn=4,ns||(Ct&4194048)!==Ct&&Cn.current!==null||(wr=!0),(is&134217727)===0&&(Vs&134217727)===0||$t===null||ss($t,Ct,ci,!1)}function Dd(e,n,a){var s=kt;kt|=2;var l=rx(),u=ox();($t!==e||Ct!==n)&&(Dc=null,Lr(e,n)),n=!1;var x=dn;e:do try{if(Wt!==0&&At!==null){var R=At,z=li;switch(Wt){case 8:Nd(),x=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var $=Wt;if(Wt=0,li=null,Or(e,R,z,$),a&&wr){x=0;break e}break;default:$=Wt,Wt=0,li=null,Or(e,R,z,$)}}_b(),x=dn;break}catch(ue){ax(e,ue)}while(!0);return n&&e.shellSuspendCounter++,ya=Ns=null,kt=s,ge.H=l,ge.A=u,At===null&&($t=null,Ct=0,Gl()),x}function _b(){for(;At!==null;)lx(At)}function Sb(e,n){var a=kt;kt|=2;var s=rx(),l=ox();$t!==e||Ct!==n?(Dc=null,Nc=Xe()+500,Lr(e,n)):wr=Ha(e,n);e:do try{if(Wt!==0&&At!==null){n=At;var u=li;t:switch(Wt){case 1:Wt=0,li=null,Or(e,n,u,1);break;case 2:case 9:if(c0(u)){Wt=0,li=null,cx(n);break}n=function(){Wt!==2&&Wt!==9||$t!==e||(Wt=7),na(e)},u.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:c0(u)?(Wt=0,li=null,cx(n)):(Wt=0,li=null,Or(e,n,u,7));break;case 5:var x=null;switch(At.tag){case 26:x=At.memoizedState;case 5:case 27:var R=At;if(x?ev(x):R.stateNode.complete){Wt=0,li=null;var z=R.sibling;if(z!==null)At=z;else{var $=R.return;$!==null?(At=$,Ic($)):At=null}break t}}Wt=0,li=null,Or(e,n,u,5);break;case 6:Wt=0,li=null,Or(e,n,u,6);break;case 8:Nd(),dn=6;break e;default:throw Error(r(462))}}yb();break}catch(ue){ax(e,ue)}while(!0);return ya=Ns=null,ge.H=s,ge.A=l,kt=a,At!==null?0:($t=null,Ct=0,Gl(),dn)}function yb(){for(;At!==null&&!Fe();)lx(At)}function lx(e){var n=Eg(e.alternate,e,wa);e.memoizedProps=e.pendingProps,n===null?Ic(e):At=n}function cx(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:Bf(n);var s=n;s===En&&(Et?(ql(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(ql(s),Et=!0));default:Ag(a,n),n=At=Jm(n,wa),n=Eg(a,n,wa)}e.memoizedProps=e.pendingProps,n===null?Ic(e):At=n}function Or(e,n,a,s){ya=Ns=null,Bf(n),_r=null,Uo=0;var l=n.return;try{if(lb(e,l,n,a,Ct)){dn=1,hc(e,yi(a,e.current)),At=null;return}}catch(u){if(l!==null)throw At=l,u;dn=1,hc(e,yi(a,e.current)),At=null;return}n.flags&32768?(Et||s===1?e=!0:wr||(Ct&536870912)!==0?e=!1:(ns=e=!0,(s===2||s===9||s===3||s===6)&&(s=Cn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ux(n,e)):Ic(n)}function Ic(e){var n=e;do{if((n.flags&32768)!==0){ux(n,ns);return}e=n.return;var a=db(n.alternate,n,wa);if(a!==null){At=a;return}if(n=n.sibling,n!==null){At=n;return}At=n=e}while(n!==null);dn===0&&(dn=5)}function ux(e,n){do{var a=hb(e.alternate,e);if(a!==null){a.flags&=32767,At=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){At=e;return}At=e=a}while(e!==null);dn=6,At=null}function fx(e,n,a,s,l,u,x,R,z,$,ue,ye){e.cancelPendingCommit=null;do Pc();while(rn!==0);if((kt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===$t&&(At=$t=null,Ct=0),ks=n,Oi=e,ta=a,Cd=l,ex=s,bb(e,n,a,x,R,z,ye)}}function bb(e,n,a,s,l,u,x){var R=n.lanes|n.childLanes;if(Rd=R,R|=df,Cl(e,a,R,s,l,u),Nr=null,(a&335544064)===a?(Dr=Ky(e),s=10262):(Dr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,Rb(Ue,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),yc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=ge.T,ge.T=null,l=Ce.p,Ce.p=2,u=kt,kt|=4;try{pb(e,n,a)}finally{kt=u,Ce.p=l,ge.T=s}}rn=1,yc?Cr=Yb(x,e.containerInfo,Dr,Ud,Ld,Eb,Od,Id,Mb):(Ud(),Ld(),Od())}function Mb(e){if(rn!==0){var n=Oi.onRecoverableError;n(e,{componentStack:null})}}function Eb(){rn===3&&(rn=0,qg(ks,Oi),rn=4)}function Ud(){if(rn===1){rn=0;var e=Oi,n=ks,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=ge.T,ge.T=null;var l=Ce.p;Ce.p=2;var u=kt;kt|=4;try{jo=Ec=!1,Xg(n,e,a),a=qd;var x=Vm(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(x!==R&&R&&R.ownerDocument&&Gm(R.ownerDocument.documentElement,R)){if(z!==null&&of(R)){var $=z.start,ue=z.end;if(ue===void 0&&(ue=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(ue,R.value.length);else{var ye=R.ownerDocument||document,Z=ye&&ye.defaultView||window;if(Z.getSelection){var oe=Z.getSelection(),ze=R.textContent.length,$e=Math.min(z.start,ze),_t=z.end===void 0?$e:Math.min(z.end,ze);!oe.extend&&$e>_t&&(x=_t,_t=$e,$e=x);var J=Hm(R,$e),G=Hm(R,_t);if(J&&G&&(oe.rangeCount!==1||oe.anchorNode!==J.node||oe.anchorOffset!==J.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var ne=ye.createRange();ne.setStart(J.node,J.offset),oe.removeAllRanges(),$e>_t?(oe.addRange(ne),oe.extend(G.node,G.offset)):(ne.setEnd(G.node,G.offset),oe.addRange(ne))}}}}for(ye=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Vr=!!Wd,qd=Wd=null}finally{kt=u,Ce.p=l,ge.T=s}}e.current=n,rn=2}}function Ld(){if(rn===2){rn=0;var e=Oi,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ge.T,ge.T=null;var s=Ce.p;Ce.p=2;var l=kt;kt|=4;try{Fg(e,n.alternate,n)}finally{kt=l,Ce.p=s,ge.T=a}}rn=3}}function Od(){if(rn===4||rn===3){rn=0;var e=Cr;Cr=null,Be();var n=Oi,a=ks,s=ta,l=ex,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?rn=5:(rn=0,ks=Oi=null,dx(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(as=null),xo(s),a=a.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(et,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ge.T,u=Ce.p,Ce.p=2,ge.T=null;try{for(var x=n.onRecoverableError,R=0;R<l.length;R++){var z=l[R];x(z.value,{componentStack:z.stack})}}finally{ge.T=a,Ce.p=u}}if(l=Nr,x=Dr,Dr=null,l!==null&&(Nr=null,x===null&&(x=[]),e!==null))for(z=0;z<l.length;z++)a=(0,l[z])(x),a!==void 0&&e.finished.finally(a);(ta&3)!==0&&Pc(),na(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Uc?Yo++:(Yo=0,Uc=n):(Yo=0,Uc=null),Zo(0)}}function dx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Co(n)))}function Pc(){return Cr!==null&&(Cr.skipTransition(),Cr=null),Ud(),Ld(),Od(),Id()}function Id(){if(rn!==5)return!1;var e=Oi,n=Rd;Rd=0;var a=xo(ta),s=ge.T,l=Ce.p;try{Ce.p=32>a?32:a,ge.T=null,a=Cd,Cd=null;var u=Oi,x=ta;if(rn=0,ks=Oi=null,ta=0,(kt&6)!==0)throw Error(r(331));var R=kt;if(kt|=4,Qg(u.current),Yg(u,u.current,x,a),kt=R,Zo(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(et,u)}catch{}return!0}finally{Ce.p=l,ge.T=s,dx(e,n)}}function hx(e,n,a){n=yi(a,n),n=Jf(e.stateNode,n,2),e=Ka(e,n,2),e!==null&&(ji(e,2),na(e))}function qt(e,n,a){if(e.tag===3)hx(e,e,a);else for(;n!==null;){if(n.tag===3){hx(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(as===null||!as.has(s))){e=yi(a,e),a=cg(2),s=Ka(n,a,2),s!==null&&(ug(a,s,n,e),ji(s,2),na(s));break}}n=n.return}}function Pd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new xb;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Ad=!0,l.add(a),e=Tb.bind(null,e,n,a),n.then(e,e))}function Tb(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$t===e&&(Ct&a)===a&&((dn===4||dn===3&&(Ct&62914560)===Ct&&300>Xe()-Cc)&&(kt&2)===0?Lr(e,0):Rc|=a,Rr===Ct&&(Rr=0)),na(e)}function px(e,n){n===0&&(n=ho()),e=ws(e,n),e!==null&&(ji(e,n),na(e))}function Ab(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),px(e,a)}function wb(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),px(e,a)}function Rb(e,n){return Le(e,n)}var Ir=null,Pr=null,zd=!1,zc=!1,Bd=!1,rs=0;function na(e){e!==Pr&&e.next===null&&(Pr===null?Ir=Pr=e:Pr=Pr.next=e),zc=!0,zd||(zd=!0,Nb())}function Zo(e,n){if(!Bd&&zc){Bd=!0;do for(var a=!1,s=Ir;s!==null;){if(e!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var x=s.suspendedLanes,R=s.pingedLanes;u=(1<<31-pt(42|e)+1)-1,u&=l&~(x&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,vx(s,u))}else u=Ct,u=Ms(s,s===$t?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ha(s,u)||(a=!0,vx(s,u));s=s.next}while(a);Bd=!1}}function Cb(){mx()}function mx(){zc=zd=!1;var e=0;rs!==0&&Gb()&&(e=rs);for(var n=Xe(),a=null,s=Ir;s!==null;){var l=s.next,u=gx(s,n);u===0?(s.next=null,a===null?Ir=l:a.next=l,l===null&&(Pr=a)):(a=s,(e!==0||(u&3)!==0)&&(zc=!0)),s=l}rn!==0&&rn!==5||Zo(e),rs!==0&&(rs=0)}function gx(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-pt(u),R=1<<x,z=l[x];z===-1?((R&a)===0||(R&s)!==0)&&(l[x]=fo(R,n)):z<=n&&(e.expiredLanes|=R),u&=~R}if(n=$t,a=Ct,a=Ms(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&nt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ha(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&nt(s),xo(a)){case 2:case 8:a=W;break;case 32:a=Ue;break;case 268435456:a=Ie;break;default:a=Ue}return s=xx.bind(null,e),a=Le(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&nt(s),e.callbackPriority=2,e.callbackNode=null,2}function xx(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pc()&&e.callbackNode!==a)return null;var s=Ct;return s=Ms(e,e===$t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(nx(e,s,n),gx(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?xx.bind(null,e):null)}function vx(e,n){if(Pc())return null;nx(e,n,!0)}function Nb(){kb(function(){(kt&6)!==0?Le(ht,Cb):mx()})}function Fd(){if(rs===0){var e=Ls;e===0&&(e=ir,ir<<=1,(ir&261888)===0&&(ir=256)),rs=e}return rs}function _x(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(e)}function Db(e,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var u=_x((l[H]||null).action),x=s.submitter;x&&(n=(n=x[H]||null)?_x(n.formAction):x.getAttribute("formAction"),n!==null&&(u=n,x=null));var R=new zl("action","action",null,s,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rs!==0){var z=new FormData(l,x);qf(a,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(R.preventDefault(),z=new FormData(l,x),qf(a,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Hd=0;Hd<ff.length;Hd++){var Gd=ff[Hd],Ub=Gd.toLowerCase(),Lb=Gd[0].toUpperCase()+Gd.slice(1);Ni(Ub,"on"+Lb)}Ni(Xm,"onAnimationEnd"),Ni(Wm,"onAnimationIteration"),Ni(qm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Vy,"onTransitionRun"),Ni(ky,"onTransitionStart"),Ni(jy,"onTransitionCancel"),Ni(Ym,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Sx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],l=s.event;s=s.listeners;e:{var u=void 0;if(n)for(var x=s.length-1;0<=x;x--){var R=s[x],z=R.instance,$=R.currentTarget;if(R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=$;try{u(l)}catch(ue){Hl(ue)}l.currentTarget=null,u=z}else for(x=0;x<s.length;x++){if(R=s[x],z=R.instance,$=R.currentTarget,R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=$;try{u(l)}catch(ue){Hl(ue)}l.currentTarget=null,u=z}}}}function wt(e,n){var a=n[se];a===void 0&&(a=n[se]=new Set);var s=e+"__bubble";a.has(s)||(yx(n,e,2,!1),a.add(s))}function Vd(e,n,a){var s=0;n&&(s|=4),yx(a,e,s,n)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function kd(e){if(!e[Bc]){e[Bc]=!0,jt.forEach(function(a){a!=="selectionchange"&&(Ob.has(a)||Vd(a,!1,e),Vd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bc]||(n[Bc]=!0,Vd("selectionchange",!1,n))}}function yx(e,n,a,s){switch(uv(n)){case 2:var l=AM;break;case 8:l=wM;break;default:l=ch}a=l.bind(null,n,a,e),l=void 0,!Ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function jd(e,n,a,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var R=s.stateNode.containerInfo;if(R===l)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;R!==null;){if(x=ct(R),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=u=x;continue e}R=R.parentNode}}s=s.return}ym(function(){var $=u,ue=Yu(a),ye=[];e:{var Z=Zm.get(e);if(Z!==void 0){var oe=zl,ze=e;switch(e){case"keypress":if(Il(a)===0)break e;case"keydown":case"keyup":oe=vy;break;case"focusin":ze="focus",oe=ef;break;case"focusout":ze="blur",oe=ef;break;case"beforeblur":case"afterblur":oe=ef;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=My;break;case Xm:case Wm:case qm:oe=cy;break;case Ym:oe=Ty;break;case"scroll":case"scrollend":oe=ay;break;case"wheel":oe=wy;break;case"copy":case"cut":case"paste":oe=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Am;break;case"submit":oe=yy;break;case"toggle":case"beforetoggle":oe=Cy}var $e=(n&4)!==0,_t=!$e&&(e==="scroll"||e==="scrollend"),J=$e?Z!==null?Z+"Capture":null:Z;$e=[];for(var G=$,ne;G!==null;){var Se=G;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||J===null||(Se=vo(G,J),Se!=null&&$e.push(Qo(G,Se,ne))),_t)break;G=G.return}0<$e.length&&(Z=new oe(Z,ze,null,a,ue),ye.push({event:Z,listeners:$e}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",oe&&a!==qu&&(ze=a.relatedTarget||a.fromElement)&&(ct(ze)||ze[de]))break e;(Z||oe)&&(ze=ue.window===ue?ue:(oe=ue.ownerDocument)?oe.defaultView||oe.parentWindow:window,Z?(oe=a.relatedTarget||a.toElement,Z=$,oe=oe?ct(oe):null,oe!==null&&(_t=f(oe),$e=oe.tag,oe!==_t||$e!==5&&$e!==27&&$e!==6)&&(oe=null)):(Z=null,oe=$),Z!==oe&&($e=Em,Se="onMouseLeave",J="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($e=Am,Se="onPointerLeave",J="onPointerEnter",G="pointer"),_t=Z==null?ze:Ze(Z),ne=oe==null?ze:Ze(oe),ze=new $e(Se,G+"leave",Z,a,ue),ze.target=_t,ze.relatedTarget=ne,Se=null,ct(ue)===$&&($e=new $e(J,G+"enter",oe,a,ue),$e.target=ne,$e.relatedTarget=_t,Se=$e),_t=Se,$e=Z&&oe?U(Z,oe,Ib):null,Z!==null&&bx(ye,ze,Z,$e,!1),oe!==null&&_t!==null&&bx(ye,_t,oe,$e,!0)))}e:{if(Z=$?Ze($):window,oe=Z.nodeName&&Z.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Z.type==="file")var Ke=Om;else if(Um(Z))if(Im)Ke=Fy;else{Ke=zy;var Nt=Py}else oe=Z.nodeName,!oe||oe.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&Wu($.elementType)&&(Ke=Om):Ke=By;if(Ke&&(Ke=Ke(e,$))){Lm(ye,Ke,a,ue);break e}Nt&&Nt(e,Z,$)}switch(Nt=$?Ze($):window,e){case"focusin":(Um(Nt)||Nt.contentEditable==="true")&&(ur=Nt,lf=$,Ao=null);break;case"focusout":Ao=lf=ur=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,km(ye,a,ue);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":km(ye,a,ue)}var it;if(nf)e:{switch(e){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else cr?Nm(e,a)&&(ot="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(wm&&a.locale!=="ko"&&(cr||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&cr&&(it=bm()):(Ga=ue,Qu="value"in Ga?Ga.value:Ga.textContent,cr=!0)),Nt=Fc($,ot),0<Nt.length&&(ot=new Tm(ot,e,null,a,ue),ye.push({event:ot,listeners:Nt}),it?ot.data=it:(it=Dm(a),it!==null&&(ot.data=it)))),(it=Dy?Uy(e,a):Ly(e,a))&&(ot=Fc($,"onBeforeInput"),0<ot.length&&(Nt=new Tm("onBeforeInput","beforeinput",null,a,ue),ye.push({event:Nt,listeners:ot}),Nt.data=it)),Db(ye,e,$,a,ue)}Sx(ye,n)})}function Qo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fc(e,n){for(var a=n+"Capture",s=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=vo(e,a),l!=null&&s.unshift(Qo(e,l,u)),l=vo(e,n),l!=null&&s.push(Qo(e,l,u))),e.tag===3)return s;e=e.return}return[]}function Ib(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bx(e,n,a,s,l){for(var u=n._reactName,x=[];a!==null&&a!==s;){var R=a,z=R.alternate,$=R.stateNode;if(R=R.tag,z!==null&&z===s)break;R!==5&&R!==26&&R!==27||$===null||(z=$,l?($=vo(a,u),$!=null&&x.unshift(Qo(a,$,z))):l||($=vo(a,u),$!=null&&x.push(Qo(a,$,z)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Pb=/\r\n?/g,zb=/\u0000|\uFFFD/g;function Mx(e){return(typeof e=="string"?e:""+e).replace(Pb,`
`).replace(zb,"")}function Ex(e,n){return n=Mx(n),Mx(e)===n}function Yt(e,n,a,s,l,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||rr(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&rr(e,""+s);else return;break;case"className":ai(e,"class",s);break;case"tabIndex":ai(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,a,s);break;case"style":_m(e,s,u);return;case"data":if(n!=="object"){ai(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ll(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Yt(e,n,"name",l.name,l,null),Yt(e,n,"formEncType",l.formEncType,l,null),Yt(e,n,"formMethod",l.formMethod,l,null),Yt(e,n,"formTarget",l.formTarget,l,null)):(Yt(e,n,"encType",l.encType,l,null),Yt(e,n,"method",l.method,l,null),Yt(e,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ll(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Wi);return;case"onScroll":s!=null&&wt("scroll",e);return;case"onScrollEnd":s!=null&&wt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ll(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":wt("beforetoggle",e),wt("toggle",e),en(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ny.get(a)||a,en(e,a,s);else return}Mt=!0}function Xd(e,n,a,s,l,u){switch(a){case"style":_m(e,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")rr(e,s);else if(typeof s=="number"||typeof s=="bigint")rr(e,""+s);else return;break;case"onScroll":s!=null&&wt("scroll",e);return;case"onScrollEnd":s!=null&&wt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,s,l);break e}Mt=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):en(e,a,s)}return}Mt=!0}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",e),wt("load",e);var s=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var x=a[u];if(x!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,u,x,a,null)}}l&&Yt(e,n,"srcSet",a.srcSet,a,null),s&&Yt(e,n,"src",a.src,a,null);return;case"input":wt("invalid",e);var R=u=x=l=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":l=ue;break;case"type":x=ue;break;case"checked":z=ue;break;case"defaultChecked":$=ue;break;case"value":u=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Yt(e,n,s,ue,a,null)}}mm(e,u,R,z,$,x,l,!1);return;case"select":wt("invalid",e),s=x=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":x=R;break;case"multiple":s=R;default:Yt(e,n,l,R,a,null)}n=u,a=x,e.multiple=!!s,n!=null?sr(e,!!s,n,!1):a!=null&&sr(e,!!s,a,!0);return;case"textarea":wt("invalid",e),u=l=s=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":s=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Yt(e,n,x,R,a,null)}xm(e,s,l,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Yt(e,n,z,s,a,null)}return;case"dialog":wt("beforetoggle",e),wt("toggle",e),wt("cancel",e),wt("close",e);break;case"iframe":case"object":wt("load",e);break;case"video":case"audio":for(s=0;s<Ko.length;s++)wt(Ko[s],e);break;case"image":wt("error",e),wt("load",e);break;case"details":wt("toggle",e);break;case"embed":case"source":case"link":wt("error",e),wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,$,s,a,null)}return;default:if(Wu(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Xd(e,n,ue,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Yt(e,n,R,s,a,null))}var Bb={};function Fb(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,x=null,R=null,z=null,$=null,ue=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=ye;default:s.hasOwnProperty(oe)||Yt(e,n,oe,null,s,ye)}}for(var Z in s){var oe=s[Z];if(ye=a[Z],s.hasOwnProperty(Z)&&(oe!=null||ye!=null))switch(Z){case"type":oe!==ye&&(Mt=!0),u=oe;break;case"name":oe!==ye&&(Mt=!0),l=oe;break;case"checked":oe!==ye&&(Mt=!0),$=oe;break;case"defaultChecked":oe!==ye&&(Mt=!0),ue=oe;break;case"value":oe!==ye&&(Mt=!0),x=oe;break;case"defaultValue":oe!==ye&&(Mt=!0),R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ye&&Yt(e,n,Z,oe,s,ye)}}ju(e,x,R,z,$,ue,u,l);return;case"select":oe=x=R=Z=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":oe=z;default:s.hasOwnProperty(u)||Yt(e,n,u,null,s,z)}for(l in s)if(u=s[l],z=a[l],s.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(Mt=!0),Z=u;break;case"defaultValue":u!==z&&(Mt=!0),R=u;break;case"multiple":u!==z&&(Mt=!0),x=u;default:u!==z&&Yt(e,n,l,u,s,z)}n=R,a=x,s=oe,Z!=null?sr(e,!!a,Z,!1):!!s!=!!a&&(n!=null?sr(e,!!a,n,!0):sr(e,!!a,a?[]:"",!1));return;case"textarea":oe=Z=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(e,n,R,null,s,l)}for(x in s)if(l=s[x],u=a[x],s.hasOwnProperty(x)&&(l!=null||u!=null))switch(x){case"value":l!==u&&(Mt=!0),Z=l;break;case"defaultValue":l!==u&&(Mt=!0),oe=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Yt(e,n,x,l,s,u)}gm(e,Z,oe);return;case"option":for(var ze in a)if(Z=a[ze],a.hasOwnProperty(ze)&&Z!=null&&!s.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Yt(e,n,ze,null,s,Z)}for(z in s)if(Z=s[z],oe=a[z],s.hasOwnProperty(z)&&Z!==oe&&(Z!=null||oe!=null))switch(z){case"selected":Z!==oe&&(Mt=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Yt(e,n,z,Z,s,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)Z=a[$e],a.hasOwnProperty($e)&&Z!=null&&!s.hasOwnProperty($e)&&Yt(e,n,$e,null,s,Z);for($ in s)if(Z=s[$],oe=a[$],s.hasOwnProperty($)&&Z!==oe&&(Z!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:Yt(e,n,$,Z,s,oe)}return;default:if(Wu(n)){for(var _t in a)Z=a[_t],a.hasOwnProperty(_t)&&Z!==void 0&&!s.hasOwnProperty(_t)&&Xd(e,n,_t,void 0,s,Z);for(ue in s)Z=s[ue],oe=a[ue],!s.hasOwnProperty(ue)||Z===oe||Z===void 0&&oe===void 0||Xd(e,n,ue,Z,s,oe);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!s.hasOwnProperty(J)&&Yt(e,n,J,null,s,Z);for(ye in s)Z=s[ye],oe=a[ye],!s.hasOwnProperty(ye)||Z===oe||Z==null&&oe==null||Yt(e,n,ye,Z,s,oe)}function Tx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],u=l.transferSize,x=l.initiatorType,R=l.duration;if(u&&R&&Tx(x)){for(x=0,R=l.responseEnd,s+=1;s<a.length;s++){var z=a[s],$=z.startTime;if($>R)break;var ue=z.transferSize,ye=z.initiatorType;ue&&Tx(ye)&&(z=z.responseEnd,x+=ue*(z<R?1:(R-$)/(z-$)))}if(--s,n+=8*(u+x)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wd=null,qd=null;function Jo(e){return e.nodeType===9?e:e.ownerDocument}function Ax(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rx(e,n,a,s){return a=Jo(a).createElement(e),a[w]=s,a[H]=n,Un(a,e,n),bt(a),a}function Yd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zd=null;function Gb(){var e=window.event;return e&&e.type==="popstate"?e===Zd?!1:(Zd=e,!0):(Zd=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Vb=typeof clearTimeout=="function"?clearTimeout:void 0,Cx=typeof Promise=="function"?Promise:void 0,Nx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kd,kb=typeof queueMicrotask=="function"?queueMicrotask:typeof Cx<"u"?function(e){return Cx.resolve(null).then(e).catch(jb)}:Kd;function jb(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function Dx(e,n){var a=n,s=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(l),kr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ah(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ah(a);for(var u=a.firstChild;u;){var x=u.nextSibling,R=u.nodeName;u[Pe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=x}}else a==="body"&&ah(e.ownerDocument.body);a=l}while(a);kr(n)}function Ux(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Lx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Ox(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Xb(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Qd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return Xb(n,a,e)}function Wb(e){return e.documentElement.clientHeight}function qb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Yb(e,n,a,s,l,u,x,R,z){var $=n.nodeType===9?n:n.ownerDocument;try{var ue=$.startViewTransition({update:function(){var Z=$.defaultView,oe=Z.navigation&&Z.navigation.transition,ze=$.fonts.status;s();var $e=[];if(ze==="loaded"&&(Wb($),$.fonts.status==="loading"&&$e.push($.fonts.ready)),ze=$e.length,e!==null)for(var _t=e.suspenseyImages,J=0,G=0;G<_t.length;G++){var ne=_t[G];if(!ne.complete){var Se=ne.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Z.innerHeight&&Se.left<Z.innerWidth){if(J+=tv(ne),J>Vc){$e.length=ze;break}ne=new Promise(qb.bind(ne)),$e.push(ne)}}}if(0<$e.length)return Z=Promise.race([Promise.all($e),new Promise(function(Ke){return setTimeout(Ke,500)})]).then(l,l),(oe?Promise.allSettled([oe.finished,Z]):Z).then(u,u);if(l(),oe)return oe.finished.then(u,u);u()},types:a});$.__reactViewTransition=ue;var ye=[];return ue.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),oe=0;oe<Z.length;oe++){var ze=Z[oe],$e=ze.effect,_t=$e.pseudoElement;if(_t!=null&&_t.startsWith("::view-transition")){ye.push(ze),ze=$e.getKeyframes();for(var J=_t=void 0,G=!0,ne=0;ne<ze.length;ne++){var Se=ze[ne],Ke=Se.width;if(_t===void 0)_t=Ke;else if(_t!==Ke){G=!1;break}if(Ke=Se.height,J===void 0)J=Ke;else if(J!==Ke){G=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}G&&_t!==void 0&&J!==void 0&&($e.setKeyframes(ze),G=getComputedStyle($e.target,$e.pseudoElement),G.width!==_t||G.height!==J)&&(G=ze[0],G.width=_t,G.height=J,G=ze[ze.length-1],G.width=_t,G.height=J,$e.setKeyframes(ze))}}x()},function(Z){$.__reactViewTransition===ue&&($.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&z(Z)}finally{s(),l(),x()}}),ue.finished.finally(function(){for(var Z=0;Z<ye.length;Z++)ye[Z].cancel();$.__reactViewTransition===ue&&($.__reactViewTransition=null),R()}),ue}catch{return s(),l(),x(),null}}function js(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}js.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},js.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&s.push(a[l])}return s},js.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ix(e){return{name:e,group:new js("group",e),imagePair:new js("image-pair",e),old:new js("old",e),new:new js("new",e)}}function fi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(e,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(zx(u,e,n,a)===-1){var x=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(l=x.removeEventListener.bind(x,e,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=zr(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),v(this._fragmentFiber.child,!1,Zb,e,R,s)}this._eventListeners=u}};function Zb(e,n,a,s){return M(e).addEventListener(n,a,s),!1}fi.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=zx(s,e,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var u=l.cleanup;l=zr(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Kb,e,a,l),s.splice(n,1),u!==null&&u()}};function Kb(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function zr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Px(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function zx(e,n,a,s){if(e.length===0)return-1;s=Px(s);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&Px(u.optionsOrUseCapture)===s)return l}return-1}fi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];s.addEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],s.removeEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},fi.prototype.focus=function(e){v(this._fragmentFiber.child,!0,Bx,e,void 0,void 0)};function Bx(e,n){return e.tag===6?!1:(e=M(e),lM(e,n))}fi.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,Jd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Bx(n[a],e);a--);};function Jd(e,n){return n.push(e),!1}fi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=Jo(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,Qb,e,void 0,void 0))};function Qb(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,Jb,e,void 0,void 0)};function Jb(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}fi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,$b,e,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var s=Ii[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Ii[n++]=s}Ii.length=n}};function $b(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ii=[],$d=!1;function eM(e,n,a){Ii.push({fragmentInstance:e,observer:n,instance:a}),$d||($d=!0,cM(function(){$d=!1;var s=Ii;Ii=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}fi.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,tM,e,void 0,void 0),e};function tM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}fi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},fi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Jd,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,b(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var u=b(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),R=l.compareDocumentPosition(e),z=x&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||u&&l===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||nM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function nM(e,n,a,s,l){var u=ct(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=_(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=U(a,u,L),n===null?n=!1:(v(n,!0,V,u,a),u=y,y=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=U(s,u,L),n===null?n=!1:(v(n,!0,N,u,s),u=y,D=y=null,n=u!==null)),n):!1}function Fx(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];v(this._fragmentFiber.child,!1,Jd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=A(this._fragmentFiber);if(s=a?s[1]||s[0]||_(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),Fx(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=M(l),Fx(l,a)):M(l).scrollIntoView(e),s+=a?-1:1}};function iM(e,n){return e=M(e),Hx(e,n),!1}function Hx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Gx(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.addEventListener(l.type,l.attachedListener,zr(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var x=0,R=0;R<Ii.length;R++){var z=Ii[R];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Ii[x++]=z)}Ii.length=x,u.observe(e)}),Hx(e,n))}function aM(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.removeEventListener(l.type,l.attachedListener,zr(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?eM(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Je(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sM(e,n,a,s){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Pe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function rM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function Vx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ih=null;function kx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function jx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function lM(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function cM(e){Nx(function(){Nx(function(n){return e(n)})})}function Xx(e,n,a){switch(n=Jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Wx(e,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Yt(e,n,s,null,Bb,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),Je(e)}function ah(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Je(e)}var wi=new Map,qx=new Set;function $o(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ra=Ce.d;Ce.d={f:uM,r:fM,D:dM,C:hM,L:pM,m:mM,X:xM,S:gM,M:vM};function uM(){var e=Ra.f(),n=Lc();return e||n}function fM(e){var n=mt(e);n!==null&&n.tag===5&&n.type==="form"?Z0(n):Ra.r(e)}var Br=typeof document>"u"?null:document;function Yx(e,n,a){var s=Br;if(s&&typeof n=="string"&&n){var l=_i(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),qx.has(l)||(qx.add(l),e={rel:e,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Un(n,"link",e),bt(n),s.head.appendChild(n)))}}function dM(e){Ra.D(e),Yx("dns-prefetch",e,null)}function hM(e,n){Ra.C(e,n),Yx("preconnect",e,n)}function pM(e,n,a){Ra.L(e,n,a);var s=Br;if(s&&e&&n){var l='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+_i(a.imageSizes)+'"]')):l+='[href="'+_i(e)+'"]';var u=l;switch(n){case"style":u=Fr(e);break;case"script":u=Hr(e)}if(!(wi.has(u)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),wi.set(u,e),s.querySelector(l)!==null||n==="style"&&s.querySelector(el(u))||n==="script"&&s.querySelector(tl(u))))){var x=s.createElement("link");Un(x,"link",e),n==="style"&&(x[Qe]=!0,x.onload=x.onerror=function(){Kt(x)}),bt(x),s.head.appendChild(x)}}}function mM(e,n){Ra.m(e,n);var a=Br;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+_i(s)+'"][href="'+_i(e)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hr(e)}if(!wi.has(u)&&(e=P({rel:"modulepreload",href:e},n),wi.set(u,e),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tl(u)))return}s=a.createElement("link"),Un(s,"link",e),bt(s),a.head.appendChild(s)}}}function gM(e,n,a){Ra.S(e,n,a);var s=Br;if(s&&e){var l=Tt(s).hoistableStyles,u=Fr(e);n=n||"default";var x=l.get(u);if(!x){var R={loading:0,preload:null};if(x=s.querySelector(el(u)))R.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=wi.get(u))&&sh(e,a);var z=x=s.createElement("link");bt(z),Un(z,"link",e),z._p=new Promise(function($,ue){z.onload=$,z.onerror=ue}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Hc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:R},l.set(u,x)}}}function xM(e,n){Ra.X(e,n);var a=Br;if(a&&e){var s=Tt(a).hoistableScripts,l=Hr(e),u=s.get(l);u||(u=a.querySelector(tl(l)),u||(e=P({src:e,async:!0},n),(n=wi.get(l))&&rh(e,n),u=a.createElement("script"),bt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function vM(e,n){Ra.M(e,n);var a=Br;if(a&&e){var s=Tt(a).hoistableScripts,l=Hr(e),u=s.get(l);u||(u=a.querySelector(tl(l)),u||(e=P({src:e,async:!0,type:"module"},n),(n=wi.get(l))&&rh(e,n),u=a.createElement("script"),bt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function Zx(e,n,a,s){var l=(l=tt.current)?$o(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Fr(a.href),n=Tt(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fr(a.href);var u=Tt(l).hoistableStyles,x=u.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=l.querySelector(el(e)))?u._p||(x.instance=u,x.state.loading=5):(u=wi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(e,u)),_M(l,e,u,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Hr(a),n=Tt(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Fr(e){return'href="'+_i(e)+'"'}function el(e){return'link[rel="stylesheet"]['+e+"]"}function Kx(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function _M(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qe]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[Qe]=!0,n.onload=n.onerror=Kt.bind(null,n),Un(n,"link",a),bt(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Hr(e){return'[src="'+_i(e)+'"]'}function tl(e){return"script[async]"+e}function Qx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_i(a.href)+'"]');if(s)return n.instance=s,bt(s),s;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),bt(s),Un(s,"style",l),Hc(s,a.precedence,e),n.instance=s;case"stylesheet":l=Fr(a.href);var u=e.querySelector(el(l));if(u)return n.state.loading|=4,n.instance=u,bt(u),u;s=Kx(a),(l=wi.get(l))&&sh(s,l),u=(e.ownerDocument||e).createElement("link"),bt(u);var x=u;return x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),Un(u,"link",s),n.state.loading|=4,Hc(u,a.precedence,e),n.instance=u;case"script":return u=Hr(a.src),(l=e.querySelector(tl(u)))?(n.instance=l,bt(l),l):(s=a,(l=wi.get(u))&&(s=P({},a),rh(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),bt(l),Un(l,"link",s),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hc(s,a.precedence,e));return n.instance}function Hc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,x=0;x<s.length;x++){var R=s[x];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gc=null;function Jx(e,n,a){if(Gc===null){var s=new Map,l=Gc=new Map;l.set(a,s)}else l=Gc,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Pe]||u[w]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(n)||"";x=e+x;var R=s.get(x);R?R.push(u):s.set(x,[u])}}return s}function oh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function SM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $x(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function nv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=tv(n),e.suspenseyImages.push(n)),e=MM.bind(e),n.decode().then(e,e))}function yM(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Fr(s.href),u=n.querySelector(el(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,bt(u);return}u=n.ownerDocument||n,s=Kx(s),(l=wi.get(l))&&sh(s,l),u=u.createElement("link"),bt(u);var x=u;x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),Un(u,"link",s),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vc=0;function bM(e,n){return e.stylesheets&&e.count===0&&jc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Vc===0&&(Vc=62500*Hb());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function iv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)jc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function nl(){this.count--,iv(this)}function MM(){this.imgCount--,iv(this)}var kc=null;function jc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,n.forEach(EM,e),kc=null,nl.call(e))}function EM(e,n){if(!(n.state.loading&4)){var a=kc.get(e);if(a)var s=a.get(null);else{a=new Map,kc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var x=l[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}l=n.instance,x=l.getAttribute("data-precedence"),u=a.get(x)||s,u===s&&a.set(null,l),a.set(x,l),this.count++,s=nl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Gr={$$typeof:ee,Provider:null,Consumer:null,_currentValue:zt,_currentValue2:zt,_threadCount:0};function TM(e,n,a,s,l,u,x,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ar(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ar(0),this.hiddenUpdates=ar(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function av(e,n,a,s,l,u,x,R,z,$,ue,ye){return e=new TM(e,n,a,x,z,$,ue,ye,R),n=1,u===!0&&(n|=24),u=Kn(3,null,null,n),e.current=u,u.stateNode=e,n=bf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Af(u),e}function sv(e){return e?(e=hr,e):hr}function rv(e,n,a,s,l,u){l=sv(l),s.context===null?s.context=l:s.pendingContext=l,s=Za(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ka(e,s,n),a!==null&&(ei(a,e,n),Lo(a,e,n))}function ov(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function lh(e,n){ov(e,n),(e=e.alternate)&&ov(e,n)}function lv(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&ei(n,e,67108864),lh(e,67108864)}}function cv(e){if(e.tag===13||e.tag===31){var n=ui();n=go(n);var a=ws(e,n);a!==null&&ei(a,e,n),lh(e,n)}}var Vr=!0;function AM(e,n,a,s){var l=ge.T;ge.T=null;var u=Ce.p;try{Ce.p=2,ch(e,n,a,s)}finally{Ce.p=u,ge.T=l}}function wM(e,n,a,s){var l=ge.T;ge.T=null;var u=Ce.p;try{Ce.p=8,ch(e,n,a,s)}finally{Ce.p=u,ge.T=l}}function ch(e,n,a,s){if(Vr){var l=uh(s);if(l===null)jd(e,n,s,Xc,a),fv(e,s);else if(CM(l,e,n,a,s))s.stopPropagation();else if(fv(e,s),n&4&&-1<RM.indexOf(e)){for(;l!==null;){var u=mt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=pa(u.pendingLanes);if(x!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var z=1<<31-pt(x);R.entanglements[1]|=z,x&=~z}na(u),(kt&6)===0&&(Nc=Xe()+500,Zo(0))}}break;case 31:case 13:R=ws(u,2),R!==null&&ei(R,u,2),Lc(),lh(u,2)}if(u=uh(s),u===null&&jd(e,n,s,Xc,a),u===l)break;l=u}l!==null&&s.stopPropagation()}else jd(e,n,s,null,a)}}function uh(e){return e=Yu(e),fh(e)}var Xc=null;function fh(e){if(Xc=null,e=ct(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xc=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case ht:return 2;case W:return 8;case Ue:case Me:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var dh=!1,ls=null,cs=null,us=null,il=new Map,al=new Map,fs=[],RM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fv(e,n){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(e,n,a,s,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=mt(n),n!==null&&lv(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function CM(e,n,a,s,l){switch(n){case"focusin":return ls=sl(ls,e,n,a,s,l),!0;case"dragenter":return cs=sl(cs,e,n,a,s,l),!0;case"mouseover":return us=sl(us,e,n,a,s,l),!0;case"pointerover":var u=l.pointerId;return il.set(u,sl(il.get(u)||null,e,n,a,s,l)),!0;case"gotpointercapture":return u=l.pointerId,al.set(u,sl(al.get(u)||null,e,n,a,s,l)),!0}return!1}function dv(e){var n=ct(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Dl(e.priority,function(){cv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Dl(e.priority,function(){cv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=uh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);qu=s,a.target.dispatchEvent(s),qu=null}else return n=mt(a),n!==null&&lv(n),e.blockedOn=a,!1;n.shift()}return!0}function hv(e,n,a){Wc(e)&&a.delete(n)}function NM(){dh=!1,ls!==null&&Wc(ls)&&(ls=null),cs!==null&&Wc(cs)&&(cs=null),us!==null&&Wc(us)&&(us=null),il.forEach(hv),al.forEach(hv)}function qc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,NM)))}var Yc=null;function pv(e){Yc!==e&&(Yc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yc===e&&(Yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],l=e[n+2];if(typeof s!="function"){if(fh(s||a)===null)continue;break}var u=mt(a);u!==null&&(e.splice(n,3),n-=3,qf(u,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function kr(e){function n(z){return qc(z,e)}ls!==null&&qc(ls,e),cs!==null&&qc(cs,e),us!==null&&qc(us,e),il.forEach(n),al.forEach(n);for(var a=0;a<fs.length;a++){var s=fs[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)dv(a),a.blockedOn===null&&fs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],u=a[s+1],x=l[H]||null;if(typeof u=="function")x||pv(a);else if(x){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,x=u[H]||null)R=x.formAction;else if(fh(l)!==null)continue}else R=x.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),pv(a)}}}function mv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return l=x})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function hh(e){this._internalRoot=e}Zc.prototype.render=hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();rv(a,s,e,n,null,null)},Zc.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rv(e.current,2,null,e,null,null),Lc(),n[de]=null}};function Zc(e){this._internalRoot=e}Zc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,e),a===0&&dv(e)}};var gv=t.version;if(gv!=="19.3.0")throw Error(r(527,gv,"19.3.0"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var DM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ge,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{et=Kc.inject(DM),ke=Kc}catch{}}return ol.createRoot=function(e,n){if(!c(e))throw Error(r(299));var a=!1,s="",l=sg,u=rg,x=og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=av(e,1,!1,null,null,a,s,null,l,u,x,mv),e[de]=n.current,kd(e),new hh(n)},ol.hydrateRoot=function(e,n,a){if(!c(e))throw Error(r(299));var s=!1,l="",u=sg,x=rg,R=og,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=av(e,1,!0,n,a??null,s,l,z,u,x,R,mv),n.context=sv(null),a=n.current,s=ui(),s=go(s),l=Za(s),l.callback=null,Ka(a,l,s),a=s,n.current.lanes=a,ji(n,a),na(n),e[de]=n.current,kd(e),new Zc(n)},ol.version="19.3.0",ol}var Av;function VM(){if(Av)return gh.exports;Av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gh.exports=GM(),gh.exports}var kM=VM();const jM=w_(kM),wv=[{id:"murphy-mini-master-4",name:"Murphy Mini Master 4 (Sinus Chassis)",year:1968,decade:"1960s",category:"Radio",heroImage:"/images/murphy-mini-master-4-front.jpg",initialLikes:42,specs:{chassis:"Murphy India Sinus Transistor Superheterodyne",bands:"Medium Wave (MW 200–550m) & Short Wave (SW 16–60m)",speaker:"Murphy India Sinus 3-Ohm Tropic Proof Alnico Driver",ifFrequency:"455 kHz Intermediate Frequency",aerial:"Internal high-Q Ferrite Rod Aerial + External SW Wire Tap",power:"6V DC (4x 1.5V Cells) / External Battery Socket"},summary:"Vintage transistor radio teardown — rescued with heavy static on MW and silence on SW. Serviced tuning gang, recapped dried electrolytic stages, and peaked the 455 kHz IF cans.",description:`Rescued from a scrap market with severe static, weak scratchy reception on MW, and total silence across the SW band. The volume potentiometer crackled loudly and dropped audio intermittently whenever rotated.

Opened the vintage clamshell case to inspect the Murphy India Sinus chassis. Found a classic dual-gang air dielectric variable capacitor, long ferrite loopstick antenna bar, discrete germanium transistors, and shielded IF cans wired to the heavy 3-ohm Sinus speaker.

Leaking vintage wax-paper and dried electrolytic decoupling capacitors caused heavy DC bias drift across intermediate RF stages, choking signal gain.

Flushed the tuning capacitor plates and volume pot with contact cleaner. Replaced all degraded electrolytic capacitors with modern low-ESR equivalents, reflowed oxidized solder joints on the bandswitch, and peaked the 455 kHz IF transformers with an RF generator. Vintage Murphy India sets were engineered exceptionally well for tropical humidity — once the leaking caps are replaced and IF cans re-peaked, the RF sensitivity pulls in distant stations with crystal clarity.`,teardownImages:[{url:"/images/murphy-sinus-internal-chassis.jpg",caption:"Chassis interior showing Murphy India Sinus 3-Ohm speaker, ferrite loopstick aerial, IF cans & discrete transistor stage."},{url:"/images/murphy-mini-master-4-front.jpg",caption:"Front tuning scale with Medium Wave / Short Wave logging scale and original retro leather protective case."}]},{id:"philips-portable-radio",name:"Philips Multi-Band Portable Radio",year:1982,decade:"1980s",category:"Radio",heroImage:"/images/philips-radio-teardown-open.jpg",initialLikes:35,specs:{chassis:"Philips Dual-Power Portable Superheterodyne",powerSupply:"Internal 230V AC Mains Step-Down Transformer + DC Battery Bay",aerialSystem:"Ferrite Rod Loopstick Antenna + Telescopic SW Lead",circuitry:"Discrete RF Front-End + Monolithic Audio/IF IC Sub-board",speaker:"Permanent Magnet Dynamic 4-Ohm Loudspeaker"},summary:"Dual-power portable superhet teardown — repaired snapped internal transformer mains leads, cleared audio motorboating, and serviced the ferrite aerial bar.",description:`Dead on AC mains due to severed internal transformer wiring; running on battery produced severe motorboating oscillation and distorted output.

Split the two housing shells apart. The rear lid houses the step-down mains transformer, fuse block, and battery bay with flying lead wires bridging across to the lower chassis containing the speaker, ferrite rod antenna, tuning gang, and main RF PCB with auxiliary IC board.

Mechanical fatigue severed the AC transformer secondary wire at the casing pivot. An open-circuit filter capacitor in the audio feedback loop caused rail instability (motorboating).

Resoldered and heat-shrunk the power transformer leads. Replaced the dried rail bypass capacitor to eliminate oscillation and reflowed cracked solder joints around the headphone jack and audio IC. Clamshell portable radios that split transformer power across cabinet halves almost always suffer wire fatigue at the hinge point. Always check the harness before suspecting complex IC failures.`,teardownImages:[{url:"/images/philips-radio-teardown-open.jpg",caption:"Full internal teardown showing integrated mains step-down transformer in rear casing, battery bays, and main RF/Audio PCB."},{url:"/images/philips-radio-rf-pcb-detail.jpg",caption:"Detailed view of PCB showing ferrite antenna bar, local oscillator coils, ceramic filter, and auxiliary IC daughterboard."}]},{id:"panasonic-cordless",name:"Panasonic Cordless Phone Handset",year:2002,decade:"2000s",category:"Telephony",heroImage:"/images/panasonic-phone-teardown.jpg",initialLikes:18,specs:{standard:"DECT 6.0 Digital Enhanced Cordless Telecommunications",frequency:"1.9 GHz Band Handset & Base Station",display:"Monochrome Segmented Backlit LCD with Ribbon Cable",keypad:"Conductive Carbon Pill Elastomeric Dome Matrix",earpiece:"32-Ohm Dynamic Transducer Driver with Strain-Relief Clip"},summary:"Full 3-piece handset teardown — inspecting the carbon contact keypad membrane, monochrome LCD display controller, baseband ASIC, and audio transducer.",description:`Opened up the cordless handset casing to diagnose keypad unresponsiveness and intermittent audio during calls.

The handset disassembles into three distinct layers:
1. The rear housing contains the dynamic earpiece speaker secured by a plastic bracket, with insulated twisted leads routed to the main PCB, along with battery bay spring contacts.
2. The main circuit board features a monochrome LCD screen mounted at the top, a conductive carbon contact matrix pad for the keypad buttons, and a surface-mount microphone capsule at the bottom edge.
3. The front bezel houses the optical window for the screen and a translucent elastomeric silicone rubber keypad dome sheet with conductive carbon pads.

Cleaned the carbon keypad contact pads and PCB traces with isopropyl alcohol to remove accumulated skin oil and residue, restored tactile bounce to the dome switches, and inspected the LCD flex ribbon bonding.`,teardownImages:[{url:"/images/panasonic-phone-teardown.jpg",caption:"Chassis separated into 3 tiers: Rear housing with earpiece driver, central PCB with LCD & keypad carbon contacts matrix, and front faceplate with silicone rubber dome membrane."}]},{id:"philips-cassette-eliminator",name:"Philips Cassette Eliminator",year:1985,decade:"1980s",category:"Audio",heroImage:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80",initialLikes:19,specs:{type:"Magnetic Induction Tape Head Coupler",interface:"3.5mm Stereo TRS to Inductive Audio Head",housing:"Molded Compact Cassette Shell"},summary:"A cassette-shaped adapter meant to play external line-in audio through vintage tape decks — re-soldered snapped internal wires with strain-relief loops.",description:`A cassette-shaped adapter meant to let old tape decks play audio from an external line-in jack. Dead output despite the deck's flywheel mechanism spinning it smoothly.

Cracked open the sonic-welded plastic housing to inspect the magnetic coupling head and internal wiring harness. Traced the fault to a snapped lead wire where the 3.5mm cable enters the PCB strain-relief collar from years of insertion and bending fatigue.

Re-soldered the joint with a reinforced strain-relief loop to prevent repeated bending stress. Always check physical interconnects and solder joints before assuming head or coil failures.`,teardownImages:[]}],Rv={name:"Shaoor Ahmad",title:"Fourth-Year B.Tech Electronics & Telecommunication Student",upiId:"shaoor.retroforge@upi",workspaceImage:"/images/shaoor-soldering-bench.jpg",workspaceCaption:"Shaoor soldering prototype point-to-point PCB circuitry at the RetroForge bench under safety extraction.",bio:`I'm a fourth-year Electronics & Telecommunication engineering student. Outside of coursework, I go looking for old, broken electronics — scrap markets, junkyards, things people are throwing out — and try to figure out what's wrong with them and fix it.

I'm not an expert. I'm a few years into a hobby that started with curiosity about what's actually inside these things, and most of what I know I've learned from getting it wrong first. RetroForge is where I document that process — the repairs that worked, the ones that didn't, and the original projects I'm building alongside it, including a computer built from individual logic ICs.

If you've got something old and broken, or you just want to talk electronics, get in touch.`,benchGallery:[{url:"/images/shaoor-soldering-bench.jpg",title:"Point-to-Point Soldering & Prototyping",subtitle:"Shaoor at the bench wiring custom perfboard logic buses with flux smoke & schematic checks."},{url:"/images/murphy-sinus-internal-chassis.jpg",title:"Murphy India Sinus Radio Teardown",subtitle:"Chassis interior: 3Ω Sinus loudspeaker, ferrite rod aerial, IF transformers & germanium stages."},{url:"/images/philips-radio-teardown-open.jpg",title:"Philips Multi-Band Radio Disassembly",subtitle:"Clamshell housing opened to expose internal mains transformer, battery bays, and RF tuning PCB."},{url:"/images/murphy-mini-master-4-front.jpg",title:"Murphy Mini Master 4 Dial & Leather Casing",subtitle:"Vintage MW/SW dial glass restored alongside its original protective leather casing."}]},Tu=[{id:"bare-ic-computer",title:"Bare-IC Computer",subtitle:'Building a working computer from individual logic ICs — no microcontroller, no pre-built CPU. The goal is to understand, at the level of individual gates and registers, what a "computer" actually is.',category:"Digital Logic",status:"Ongoing",heroImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",buildLogs:[{entryNumber:1,title:"Clock and reset circuit",content:"Started with the most boring but most essential part: a stable clock signal and a clean reset line. Got a 555-based clock working, but it's noisy at higher speeds — need to look into crystal-based timing next."},{entryNumber:2,title:"Register bank",content:"Wired up a 4-bit register using 74LS-series flip-flops. First attempt had a data corruption issue that turned out to be a floating input pin I'd forgotten to pull down. Small mistake, large debugging session."}],futureNote:"(Future entries will document the ALU, bus architecture, and instruction decoding as they're built.)"}],Au=[{id:"log-01",title:"On being bad at desoldering",date:"Recent Bench Entry",tags:["#mistakes","#desoldering","#pcb"],readingTime:"1 min read",content:"Spent two hours today lifting a pad clean off a 1990s PCB trying to remove a capacitor. Turns out I was using too much heat for too long instead of a quick, confident touch. Ordered proper solder wick instead of relying on a bulb sucker. Not every post here is a win — this one's just so I remember not to do that again."}];class XM{constructor(){this.ctx=null,this.muted=localStorage.getItem("retroforge_muted")==="true"}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playSwitch(){if(!this.muted)try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(140,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.04),i.gain.setValueAtTime(.15,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),t.connect(i),i.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.04)}catch{}}playRelayClick(){if(!this.muted)try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.sampleRate*.02,r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),c=r.getChannelData(0);for(let m=0;m<i;m++)c[m]=(Math.random()*2-1)*Math.exp(-m/(i*.3));const f=this.ctx.createBufferSource();f.buffer=r;const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=1800,d.Q.value=3;const h=this.ctx.createGain();h.gain.setValueAtTime(.2,t),h.gain.exponentialRampToValueAtTime(.001,t+.02),f.connect(d),d.connect(h),h.connect(this.ctx.destination),f.start(t)}catch{}}playMeterThump(){if(!this.muted)try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(85,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.06),i.gain.setValueAtTime(.25,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.06),t.connect(i),i.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.06)}catch{}}toggleMute(){return this.muted=!this.muted,localStorage.setItem("retroforge_muted",this.muted),this.muted}}const on=new XM,R_=st.createContext(),WM={"murphy-mini-master-4":[{id:"c1",author:"VU2SDR",date:"Sep 18, 2024",text:"Those Murphy India Sinus chassis had the best IF sensitivity of their era. Brilliant job re-peaking the 455 kHz transformers!"}],"philips-portable-radio":[{id:"c2",author:"Kester6337",date:"Sep 20, 2024",text:"Transformer hinge wire fatigue is such a common failure in clamshell models. Adding strain relief prevents it permanently."}]},qM=({children:o})=>{const[t,i]=st.useState("home"),[r,c]=st.useState(null),[f,d]=st.useState(null),[h,m]=st.useState(!1),[g,S]=st.useState(()=>localStorage.getItem("retroforge_muted")==="true"),[v,_]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_custom_repairs");if(be)return JSON.parse(be)}catch{}return wv}),[b,A]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_custom_about");if(be)return JSON.parse(be)}catch{}return Rv}),[C,M]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_custom_builds");if(be)return JSON.parse(be)}catch{}return Tu}),[y,D]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_custom_logs");if(be)return JSON.parse(be)}catch{}return Au}),[V,N]=st.useState(()=>localStorage.getItem("retroforge_is_admin")==="true"),[L,U]=st.useState(!1),[P,T]=st.useState(!1),[O,F]=st.useState({type:"repair",id:null,data:null}),[j,K]=st.useState("All"),[ae,X]=st.useState("All"),[ee,k]=st.useState(""),[q,ce]=st.useState(()=>{try{const Ne=localStorage.getItem("retroforge_likes");if(Ne)return JSON.parse(Ne)}catch{}const be={};return v.forEach(Ne=>{be[Ne.id]={count:Ne.initialLikes||20,userLiked:!1}}),be}),[ie,pe]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_comments");if(be)return JSON.parse(be)}catch{}return WM}),[_e,Ye]=st.useState(()=>{try{const be=localStorage.getItem("retroforge_donations");if(be)return JSON.parse(be)}catch{}return[{id:"TKT-8902",date:"2024-09-12",itemName:"1972 Philips Stereo Cassette Recorder",condition:"Belts melted, heads dirty, power cord intact",city:"Pune",transit:"Local bench pickup",donorName:"Arjun M.",status:"Received & Queued"}]});st.useEffect(()=>{try{localStorage.setItem("retroforge_custom_repairs",JSON.stringify(v))}catch{}},[v]),st.useEffect(()=>{try{localStorage.setItem("retroforge_custom_about",JSON.stringify(b))}catch{}},[b]),st.useEffect(()=>{try{localStorage.setItem("retroforge_custom_builds",JSON.stringify(C))}catch{}},[C]),st.useEffect(()=>{try{localStorage.setItem("retroforge_custom_logs",JSON.stringify(y))}catch{}},[y]),st.useEffect(()=>{try{localStorage.setItem("retroforge_is_admin",V?"true":"false")}catch{}},[V]),st.useEffect(()=>{try{localStorage.setItem("retroforge_likes",JSON.stringify(q))}catch{}},[q]),st.useEffect(()=>{try{localStorage.setItem("retroforge_comments",JSON.stringify(ie))}catch{}},[ie]),st.useEffect(()=>{try{localStorage.setItem("retroforge_donations",JSON.stringify(_e))}catch{}},[_e]);const We=be=>be.trim().toLowerCase()==="admin"||be.trim().toLowerCase()==="retroforge"||be.trim()==="1234"?(on.playRelayClick(),N(!0),U(!1),!0):!1,B=()=>{on.playSwitch(),N(!1),T(!1)},me=(be,Ne=null,rt=null)=>{on.playSwitch();let lt=rt;!lt&&Ne&&(be==="repair"&&(lt=v.find(tt=>tt.id===Ne)),be==="build"&&(lt=C.find(tt=>tt.id===Ne)),be==="log"&&(lt=y.find(tt=>tt.id===Ne))),be==="about"&&(lt=b),F({type:be,id:Ne,data:lt}),T(!0)},Re=()=>{on.playSwitch(),T(!1),F({type:"repair",id:null,data:null})},Q=(be,Ne,rt)=>{if(on.playRelayClick(),be==="repair")if(Ne)_(lt=>lt.map(tt=>tt.id===Ne?{...tt,...rt}:tt));else{const lt="repair-"+Date.now(),tt={id:lt,initialLikes:1,...rt};_(Jt=>[tt,...Jt]),c(lt)}else if(be==="about")A(lt=>({...lt,...rt}));else if(be==="build")if(Ne)M(lt=>lt.map(tt=>tt.id===Ne?{...tt,...rt}:tt));else{const lt="build-"+Date.now();M(tt=>[{id:lt,...rt},...tt])}else if(be==="log")if(Ne)D(lt=>lt.map(tt=>tt.id===Ne?{...tt,...rt}:tt));else{const lt="log-"+Date.now();D(tt=>[{id:lt,date:new Date().toISOString().split("T")[0],...rt},...tt])}Re()},he=be=>{window.confirm("Delete this teardown log permanently from your bench?")&&(on.playRelayClick(),_(Ne=>Ne.filter(rt=>rt.id!==be)),r===be&&c(null))},Ae=()=>{window.confirm("Reset all content (repairs, about bio, photos) back to factory stock defaults?")&&(on.playRelayClick(),_(wv),A(Rv),M(Tu),D(Au),localStorage.removeItem("retroforge_custom_repairs"),localStorage.removeItem("retroforge_custom_about"),localStorage.removeItem("retroforge_custom_builds"),localStorage.removeItem("retroforge_custom_logs"))},we=be=>{on.playRelayClick(),ce(Ne=>{const rt=Ne[be]||{count:0,userLiked:!1},lt=!rt.userLiked,tt=lt?rt.count+1:Math.max(0,rt.count-1);return{...Ne,[be]:{count:tt,userLiked:lt}}})},ge=(be,Ne,rt)=>{if(!rt.trim())return;on.playSwitch();const lt={id:"c_"+Date.now(),author:Ne.trim()||"Anonymous Explorer",date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),text:rt.trim()};pe(tt=>({...tt,[be]:[lt,...tt[be]||[]]}))},Ce=be=>{on.playRelayClick();const Ne="TKT-"+Math.floor(1e3+Math.random()*9e3),rt={id:Ne,date:new Date().toISOString().split("T")[0],...be,status:"Intake Logged / Awaiting Dispatch"};return Ye(lt=>[rt,...lt]),Ne},zt=()=>{const be=on.toggleMute();S(be),be||on.playSwitch()},dt=(be,Ne={})=>{on.playSwitch(),i(be),Ne.repairId!==void 0&&c(Ne.repairId),Ne.buildId!==void 0&&d(Ne.buildId),Ne.decade&&K(Ne.decade),Ne.category&&X(Ne.category),window.scrollTo({top:0,behavior:"smooth"})},xt=be=>{on.playSwitch(),c(be)},yt=()=>{on.playSwitch(),c(null)};return p.jsx(R_.Provider,{value:{activeTab:t,setActiveTab:i,navigateTo:dt,repairs:v,about:b,builds:C,logs:y,isAdmin:V,isAuthModalOpen:L,setIsAuthModalOpen:U,isEditorModalOpen:P,editorTarget:O,loginAdmin:We,logoutAdmin:B,openEditor:me,closeEditor:Re,saveEditedContent:Q,deleteRepair:he,resetToDefaults:Ae,selectedRepairId:r,openRepairModal:xt,closeRepairModal:yt,selectedBuildId:f,setSelectedBuildId:d,isSupportOpen:h,setIsSupportOpen:m,isMuted:g,toggleSound:zt,filterDecade:j,setFilterDecade:K,filterCategory:ae,setFilterCategory:X,searchQuery:ee,setSearchQuery:k,likes:q,toggleLike:we,comments:ie,addComment:ge,donations:_e,submitDonation:Ce},children:o})},gi=()=>st.useContext(R_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ZM(o,t,i=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:YM(o),size:24,node:t,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=o=>{let t="",i=!1;for(const r of o){if(r==="-"||r==="_"||r<=" "){i=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=i?r.toUpperCase():r,i=!1}return t};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=o=>{const t=KM(o);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Sh(o){return o!=null}function JM(o,t={}){var _,b;const i=t.attributeNames??{},r=A=>i[A]??A,c=o.size??o.width??Xs.width,f=o.size??o.height??Xs.height,d=((_=o.aliases)==null?void 0:_.filter(A=>typeof A=="string"&&A.trim()!=="").map(A=>`lucide-${A}`))??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],m=((b=t.className)==null?void 0:b.split(" ").filter(Boolean))??[],g=t.includeDefaultClasses===!1?ep(...m):ep("lucide",...h,...m),S=t.absoluteStrokeWidth?Number(t.strokeWidth??Xs["stroke-width"])*Number(o.size??o.width??Xs.width)/Number(t.size??t.width??Xs.width):t.strokeWidth??Xs["stroke-width"];return["svg",{...Object.entries(Xs).reduce((A,[C,M])=>(A[r(C)]=M,A),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&Sh(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&Sh(t.width)&&{[r("width")]:t.width},..."height"in t&&Sh(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:S,...g&&{[r("class")]:g},[r("viewBox")]:`0 0 ${c} ${f}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},o.node.map(A=>{const[C,M,y]=A,D=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...M}:M;return y?[C,D,y]:[C,D]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $M(o,t={}){return JM(o,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},t1=st.createContext({}),n1=()=>st.useContext(t1),i1=st.forwardRef(({color:o,size:t,width:i,height:r,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:m,iconNode:g=[],icon:S={node:g,aliases:[],size:24},...v},_)=>{const{size:b=24,strokeWidth:A=2,absoluteStrokeWidth:C=!1,nonScalingStroke:M=!1,color:y="currentColor",className:D=""}=n1()??{},V=!!m||e1(v),[N,L,U=[]]=$M(S,{color:o??y,width:i??t??b,height:r??t??b,strokeWidth:c??A,absoluteStrokeWidth:f??C,nonScalingStroke:d??M,className:ep(D,h),hasA11yProp:V,attributes:v});return st.createElement(N,{ref:_,...L},[...U.map(([P,T])=>st.createElement(P,T)),...Array.isArray(m)?m:[m]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ft(o,t=[],i=[]){const r=typeof o=="string"?ZM(o,t,i):o,c=st.forwardRef(({className:f,...d},h)=>st.createElement(i1,{ref:h,icon:r,className:f,...d}));return r.name&&(c.displayName=QM(r.name)),c}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};C_.node;const sa=Ft(C_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};N_.node;const wu=Ft(N_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};D_.node;const U_=Ft(D_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};L_.node;const Xp=Ft(L_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};O_.node;const a1=Ft(O_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};I_.node;const P_=Ft(I_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_={name:"heart-handshake",size:24,node:[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]};z_.node;const s1=Ft(z_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};B_.node;const F_=Ft(B_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};H_.node;const r1=Ft(H_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};G_.node;const V_=Ft(G_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};k_.node;const o1=Ft(k_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};j_.node;const l1=Ft(j_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};X_.node;const c1=Ft(X_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};W_.node;const u1=Ft(W_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};q_.node;const f1=Ft(q_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_={name:"package-plus",size:24,node:[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",key:"28k6lz"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]]};Y_.node;const d1=Ft(Y_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]};Z_.node;const Iu=Ft(Z_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};K_.node;const Wp=Ft(K_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Q_.node;const J_=Ft(Q_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};$_.node;const h1=Ft($_);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};eS.node;const p1=Ft(eS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};tS.node;const m1=Ft(tS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};nS.node;const g1=Ft(nS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};iS.node;const Pu=Ft(iS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};aS.node;const x1=Ft(aS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS={name:"square-pen",size:24,node:[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],aliases:["pen-box","edit","pen-square"]};sS.node;const v1=Ft(sS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};rS.node;const _1=Ft(rS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};oS.node;const S1=Ft(oS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};lS.node;const y1=Ft(lS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};cS.node;const b1=Ft(cS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};uS.node;const M1=Ft(uS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};fS.node;const E1=Ft(fS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]};dS.node;const T1=Ft(dS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};hS.node;const zu=Ft(hS),A1=()=>{const{activeTab:o,navigateTo:t,isMuted:i,toggleSound:r,setIsSupportOpen:c,isAdmin:f,setIsAuthModalOpen:d,logoutAdmin:h,about:m}=gi(),g=[{id:"home",num:"00",label:"Index"},{id:"bench",num:"01",label:"The Bench"},{id:"builds",num:"02",label:"Builds"},{id:"log",num:"03",label:"Log"},{id:"junk",num:"04",label:"Send Junk"},{id:"about",num:"05",label:"About"}];return p.jsx("header",{className:"sticky top-0 z-40 bg-chassis-950/85 backdrop-blur-md border-b border-chassis-800/60",children:p.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex items-center justify-between h-16",children:[p.jsxs("button",{onClick:()=>t("home"),className:"flex items-center gap-3 text-left group cursor-pointer focus:outline-none",children:[p.jsx("div",{className:"w-8 h-8 rounded bg-chassis-900 border border-chassis-700 flex items-center justify-center font-mono text-copper-400 text-xs font-bold group-hover:border-copper-500/60 transition-colors",children:"RF"}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"font-serif text-lg text-chassis-100 group-hover:text-copper-400 transition-colors",children:"RetroForge"}),p.jsx("span",{className:"text-[10px] font-mono text-chassis-500 border border-chassis-800 px-1.5 py-0.5 rounded",children:m.name||"Shaoor Ahmad"})]}),p.jsx("span",{className:"text-[11px] font-mono text-chassis-500 block -mt-0.5",children:"Electronics & Telecommunication // 2026"})]})]}),p.jsx("nav",{className:"hidden md:flex items-center gap-6 text-xs font-mono","aria-label":"Main Navigation",children:g.map(S=>{const v=o===S.id;return p.jsxs("button",{onClick:()=>t(S.id),className:`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${v?"text-copper-400 font-semibold":"text-chassis-500 hover:text-chassis-200"}`,children:[p.jsx("span",{className:"text-[10px] text-chassis-600",children:S.num}),p.jsx("span",{children:S.label})]},S.id)})}),p.jsxs("div",{className:"flex items-center gap-2.5",children:[p.jsxs("button",{onClick:()=>f?h():d(!0),className:`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-all cursor-pointer ${f?"bg-copper-500/20 text-copper-400 border-copper-500/60 shadow-amber-glow font-bold":"bg-chassis-900/50 text-chassis-500 hover:text-copper-400 border-chassis-800 hover:border-chassis-700"}`,title:f?"Admin Mode Active (Click to Logout)":"Login as Admin to Edit Content",children:[f?p.jsx(g1,{className:"w-3.5 h-3.5 text-copper-400"}):p.jsx(Pu,{className:"w-3.5 h-3.5"}),p.jsx("span",{className:"text-[11px] hidden sm:inline",children:f?"Admin: ON":"Admin"})]}),p.jsxs("button",{onClick:r,"aria-label":i?"Unmute sounds":"Mute sounds",className:"flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-chassis-500 hover:text-copper-400 border border-chassis-800 hover:border-chassis-700 bg-chassis-900/50 transition-colors cursor-pointer",title:i?"Audio feedback muted":"Tactile audio feedback on",children:[i?p.jsx(E1,{className:"w-3.5 h-3.5 text-chassis-600"}):p.jsx(M1,{className:"w-3.5 h-3.5 text-copper-400"}),p.jsx("span",{className:"text-[11px] hidden sm:inline",children:i?"Muted":"Sound"})]}),p.jsxs("button",{onClick:()=>c(!0),className:"hidden lg:flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-chassis-300 hover:text-copper-400 border border-chassis-800 bg-chassis-900/50 hover:border-copper-500/40 transition-colors cursor-pointer",children:[p.jsx(s1,{className:"w-3.5 h-3.5 text-copper-400"}),p.jsx("span",{children:"Support"})]})]})]}),p.jsx("div",{className:"md:hidden flex items-center justify-between py-2 border-t border-chassis-850 gap-1 overflow-x-auto scrollbar-none font-mono text-xs",children:g.map(S=>{const v=o===S.id;return p.jsxs("button",{onClick:()=>t(S.id),className:`flex-shrink-0 px-2 py-1 rounded flex items-center gap-1 ${v?"text-copper-400 bg-chassis-900 font-bold":"text-chassis-500"}`,children:[p.jsx("span",{className:"text-[10px] text-chassis-600",children:S.num}),p.jsx("span",{children:S.label})]},S.id)})})]})})},w1=()=>{const{navigateTo:o,setIsSupportOpen:t,isAdmin:i,setIsAuthModalOpen:r,about:c}=gi(),[f,d]=st.useState(!1),h=c.upiId||"shaoor.retroforge@upi",m=g=>{g.stopPropagation(),on.playRelayClick(),navigator.clipboard.writeText(h),d(!0),setTimeout(()=>d(!1),2500)};return p.jsx("footer",{className:"mt-24 border-t border-chassis-800 bg-chassis-950/90 text-chassis-500 text-sm",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"font-serif text-lg text-chassis-100",children:"RetroForge"}),p.jsx("span",{className:"text-[10px] font-mono text-copper-400 bg-chassis-900 px-1.5 py-0.5 rounded border border-copper-500/30",children:c.name||"Shaoor Ahmad"})]}),p.jsx("p",{className:"text-xs text-chassis-400 mt-1 max-w-md font-sans",children:"Vintage electronics repair & bare-IC maker portfolio. Fourth-year B.Tech EnTC student."})]}),p.jsxs("div",{className:"bg-chassis-900 p-3 rounded border border-chassis-800 flex items-center gap-3",children:[p.jsx("button",{onClick:()=>t(!0),className:"text-xs font-mono text-chassis-300 hover:text-copper-400 underline cursor-pointer",children:"Optional Support / QR"}),p.jsxs("div",{className:"flex items-center gap-1.5 bg-chassis-950 px-2 py-1 rounded border border-chassis-800 font-mono text-xs text-chassis-200",children:[p.jsx("span",{children:h}),p.jsx("button",{onClick:m,className:"text-copper-400 hover:text-copper-300 p-0.5 cursor-pointer",title:"Copy UPI ID",children:f?p.jsx(Xp,{className:"w-3.5 h-3.5 text-emerald-400"}):p.jsx(P_,{className:"w-3.5 h-3.5"})})]})]})]}),p.jsxs("div",{className:"border-t border-chassis-850 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-chassis-600",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{children:"DOCUMENTATION OVER POLISH"}),p.jsx("span",{children:"·"}),p.jsxs("button",{onClick:()=>r(!0),className:"text-chassis-500 hover:text-copper-400 flex items-center gap-1 cursor-pointer transition-colors",children:[p.jsx(Pu,{className:"w-3 h-3"}),p.jsx("span",{children:i?"Admin Mode (Active)":"Admin Login"})]})]}),p.jsxs("span",{children:["© ",new Date().getFullYear()," RetroForge"]})]})]})})},pS=({item:o,index:t=0})=>{const{openRepairModal:i,isAdmin:r,openEditor:c}=gi(),f=(t+1).toString().padStart(2,"0"),d=h=>{h.stopPropagation(),c("repair",o.id,o)};return p.jsxs("article",{onClick:()=>i(o.id),className:"group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-chassis-700 rounded-lg p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-sm relative",children:[p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[p.jsxs("span",{className:"text-copper-400 font-semibold",children:[o.category," · ",o.year]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("span",{className:"text-chassis-500 font-mono text-[11px]",children:["SPECIMEN #",f]}),r&&p.jsxs("button",{type:"button",onClick:d,className:"px-2 py-0.5 rounded bg-copper-500/20 border border-copper-500/40 text-copper-400 hover:bg-copper-500 hover:text-chassis-950 text-[10px] font-mono flex items-center gap-1 transition-colors",title:"Edit this project",children:[p.jsx(Iu,{className:"w-3 h-3"}),p.jsx("span",{children:"Edit"})]})]})]}),p.jsxs("div",{className:"relative aspect-[16/10] rounded overflow-hidden bg-chassis-950 border border-chassis-800",children:[p.jsx("img",{src:o.heroImage,alt:o.name,className:"w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500",loading:"lazy"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-chassis-950/80 via-transparent to-transparent"}),p.jsxs("div",{className:"absolute bottom-2 right-2 text-[10px] font-mono bg-chassis-950/90 text-chassis-300 px-2 py-0.5 rounded border border-chassis-700/80 flex items-center gap-1",children:[p.jsx("span",{children:"Open log"}),p.jsx(wu,{className:"w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-serif text-xl text-chassis-100 group-hover:text-copper-400 transition-colors leading-snug",children:o.name}),p.jsx("p",{className:"text-xs text-chassis-400 mt-2 font-sans line-clamp-3 leading-relaxed",children:o.summary||o.description||o.symptom})]})]}),p.jsxs("div",{className:"pt-3 border-t border-chassis-800/80 text-xs font-mono text-copper-400/90 flex items-center justify-between",children:[p.jsx("span",{className:"truncate pr-2",children:"Read complete teardown & schematic notes"}),p.jsx(wu,{className:"w-3.5 h-3.5 flex-shrink-0 text-chassis-500 group-hover:text-copper-400 transition-colors"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="186",R1=0,Cv=1,C1=2,_u=1,mS=2,ml=3,$s=0,qn=1,oa=2,Ia=0,_l=1,Nv=2,Dv=3,Uv=4,N1=5,io=100,D1=101,U1=102,L1=103,O1=104,I1=200,P1=201,z1=202,B1=203,gS=204,xS=205,F1=206,H1=207,G1=208,V1=209,k1=210,j1=211,X1=212,W1=213,q1=214,tp=0,np=1,ip=2,Sl=3,ap=4,sp=5,rp=6,op=7,vS=0,Y1=1,Z1=2,ua=0,_S=1,SS=2,yS=3,bS=4,MS=5,ES=6,TS=7,AS=300,er=301,oo=302,yh=303,bh=304,Bu=306,lp=1e3,Oa=1001,cp=1002,In=1003,K1=1004,Qc=1005,Fn=1006,Mh=1007,Qs=1008,mi=1009,wS=1010,RS=1011,yl=1012,Yp=1013,fa=1014,la=1015,da=1016,Zp=1017,Kp=1018,bl=1020,CS=35902,NS=35899,DS=1021,US=1022,Hi=1023,Ba=1026,Js=1027,LS=1028,Qp=1029,tr=1030,Jp=1031,$p=1033,Su=33776,yu=33777,bu=33778,Mu=33779,up=35840,fp=35841,dp=35842,hp=35843,pp=36196,mp=37492,gp=37496,xp=37488,vp=37489,Ru=37490,_p=37491,Sp=37808,yp=37809,bp=37810,Mp=37811,Ep=37812,Tp=37813,Ap=37814,wp=37815,Rp=37816,Cp=37817,Np=37818,Dp=37819,Up=37820,Lp=37821,Op=36492,Ip=36494,Pp=36495,zp=36283,Bp=36284,Cu=36285,Fp=36286,Q1=3200,Hp=0,J1=1,_s="",Ci="srgb",Nu="srgb-linear",Du="linear",Zt="srgb",Eh=7680,$1=519,eE=512,tE=513,nE=514,em=515,iE=516,aE=517,tm=518,sE=519,rE=35044,Lv="300 es",ca=2e3,Ml=2001;function oE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Uu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function lE(){const o=Uu("canvas");return o.style.display="block",o}const Ov={};function Iv(...o){const t="THREE."+o.shift();console.log(t,...o)}function OS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ut(...o){o=OS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Gt(...o){o=OS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function so(...o){const t=o.join(" ");t in Ov||(Ov[t]=!0,ut(...o))}function cE(o,t,i){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const uE={[tp]:np,[ip]:rp,[ap]:op,[Sl]:sp,[np]:tp,[rp]:ip,[op]:ap,[sp]:Sl};class nr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const c=r[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,Gp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function fE(o,t){return(o%t+t)%t}function Ah(o,t,i){return(1-i)*o+i*t}function ll(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cm=class cm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Dt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*r-d*c+t.x,this.y=f*c+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cm.prototype.isVector2=!0;let Lt=cm;class co{constructor(t=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=c}static slerpFlat(t,i,r,c,f,d,h){let m=r[c+0],g=r[c+1],S=r[c+2],v=r[c+3],_=f[d+0],b=f[d+1],A=f[d+2],C=f[d+3];if(v!==C||m!==_||g!==b||S!==A){let M=m*_+g*b+S*A+v*C;M<0&&(_=-_,b=-b,A=-A,C=-C,M=-M);let y=1-h;if(M<.9995){const D=Math.acos(M),V=Math.sin(D);y=Math.sin(y*D)/V,h=Math.sin(h*D)/V,m=m*y+_*h,g=g*y+b*h,S=S*y+A*h,v=v*y+C*h}else{m=m*y+_*h,g=g*y+b*h,S=S*y+A*h,v=v*y+C*h;const D=1/Math.sqrt(m*m+g*g+S*S+v*v);m*=D,g*=D,S*=D,v*=D}}t[i]=m,t[i+1]=g,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,c,f,d){const h=r[c],m=r[c+1],g=r[c+2],S=r[c+3],v=f[d],_=f[d+1],b=f[d+2],A=f[d+3];return t[i]=h*A+S*v+m*b-g*_,t[i+1]=m*A+S*_+g*v-h*b,t[i+2]=g*A+S*b+h*_-m*v,t[i+3]=S*A-h*v-m*_-g*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,c){return this._x=t,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,m=Math.sin,g=h(r/2),S=h(c/2),v=h(f/2),_=m(r/2),b=m(c/2),A=m(f/2);switch(d){case"XYZ":this._x=_*S*v+g*b*A,this._y=g*b*v-_*S*A,this._z=g*S*A+_*b*v,this._w=g*S*v-_*b*A;break;case"YXZ":this._x=_*S*v+g*b*A,this._y=g*b*v-_*S*A,this._z=g*S*A-_*b*v,this._w=g*S*v+_*b*A;break;case"ZXY":this._x=_*S*v-g*b*A,this._y=g*b*v+_*S*A,this._z=g*S*A+_*b*v,this._w=g*S*v-_*b*A;break;case"ZYX":this._x=_*S*v-g*b*A,this._y=g*b*v+_*S*A,this._z=g*S*A-_*b*v,this._w=g*S*v+_*b*A;break;case"YZX":this._x=_*S*v+g*b*A,this._y=g*b*v+_*S*A,this._z=g*S*A-_*b*v,this._w=g*S*v-_*b*A;break;case"XZY":this._x=_*S*v-g*b*A,this._y=g*b*v-_*S*A,this._z=g*S*A+_*b*v,this._w=g*S*v+_*b*A;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,c=Math.sin(r);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],c=i[4],f=i[8],d=i[1],h=i[5],m=i[9],g=i[2],S=i[6],v=i[10],_=r+h+v;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(S-m)*b,this._y=(f-g)*b,this._z=(d-c)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(S-m)/b,this._x=.25*b,this._y=(c+d)/b,this._z=(f+g)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(f-g)/b,this._x=(c+d)/b,this._y=.25*b,this._z=(m+S)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(d-c)/b,this._x=(f+g)/b,this._y=(m+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,c=t._y,f=t._z,d=t._w,h=i._x,m=i._y,g=i._z,S=i._w;return this._x=r*S+d*h+c*g-f*m,this._y=c*S+d*m+f*h-r*g,this._z=f*S+d*g+r*m-c*h,this._w=d*S-r*h-c*m-f*g,this._onChangeCallback(),this}slerp(t,i){let r=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,c=-c,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const g=Math.acos(h),S=Math.sin(g);m=Math.sin(m*g)/S,i=Math.sin(i*g)/S,this._x=this._x*m+r*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const um=class um{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*r+f[6]*c,this.y=f[1]*i+f[4]*r+f[7]*c,this.z=f[2]*i+f[5]*r+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,c=this.z,f=t.x,d=t.y,h=t.z,m=t.w,g=2*(d*c-h*r),S=2*(h*i-f*c),v=2*(f*r-d*i);return this.x=i+m*g+d*v-h*S,this.y=r+m*S+h*g-f*v,this.z=c+m*v+f*S-d*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*c,this.y=f[1]*i+f[5]*r+f[9]*c,this.z=f[2]*i+f[6]*r+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,c=t.y,f=t.z,d=i.x,h=i.y,m=i.z;return this.x=c*m-f*h,this.y=f*d-r*m,this.z=r*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Dt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,c=this.z-t.z;return i*i+r*r+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const c=Math.sin(i)*t;return this.x=c*Math.sin(r),this.y=Math.cos(i)*t,this.z=c*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};um.prototype.isVector3=!0;let fe=um;const wh=new fe,Pv=new co,fm=class fm{constructor(t,i,r,c,f,d,h,m,g){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,h,m,g)}set(t,i,r,c,f,d,h,m,g){const S=this.elements;return S[0]=t,S[1]=c,S[2]=h,S[3]=i,S[4]=f,S[5]=m,S[6]=r,S[7]=d,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],h=r[3],m=r[6],g=r[1],S=r[4],v=r[7],_=r[2],b=r[5],A=r[8],C=c[0],M=c[3],y=c[6],D=c[1],V=c[4],N=c[7],L=c[2],U=c[5],P=c[8];return f[0]=d*C+h*D+m*L,f[3]=d*M+h*V+m*U,f[6]=d*y+h*N+m*P,f[1]=g*C+S*D+v*L,f[4]=g*M+S*V+v*U,f[7]=g*y+S*N+v*P,f[2]=_*C+b*D+A*L,f[5]=_*M+b*V+A*U,f[8]=_*y+b*N+A*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],g=t[7],S=t[8];return i*d*S-i*h*g-r*f*S+r*h*m+c*f*g-c*d*m}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],g=t[7],S=t[8],v=S*d-h*g,_=h*m-S*f,b=g*f-d*m,A=i*v+r*_+c*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(c*g-S*r)*C,t[2]=(h*r-c*d)*C,t[3]=_*C,t[4]=(S*i-c*m)*C,t[5]=(c*f-h*i)*C,t[6]=b*C,t[7]=(r*m-g*i)*C,t[8]=(d*i-r*f)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,c,f,d,h){const m=Math.cos(f),g=Math.sin(f);return this.set(r*m,r*g,-r*(m*d+g*h)+d+t,-c*g,c*m,-c*(-g*d+m*h)+h+i,0,0,1),this}scale(t,i){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fm.prototype.isMatrix3=!0;let gt=fm;const Rh=new gt,zv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const o={enabled:!0,workingColorSpace:Nu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Zt&&(c.r=Pa(c.r),c.g=Pa(c.g),c.b=Pa(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Zt&&(c.r=ro(c.r),c.g=ro(c.g),c.b=ro(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===_s?Du:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Nu]:{primaries:t,whitePoint:r,transfer:Du,toXYZ:zv,fromXYZ:Bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:t,whitePoint:r,transfer:Zt,toXYZ:zv,fromXYZ:Bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),o}const Pt=dE();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class hE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{jr===void 0&&(jr=Uu("canvas")),jr.width=t.width,jr.height=t.height;const c=jr.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),r=jr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const c=r.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return r.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:t.width,height:t.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pE=0;class nm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(Ch(c[d].image)):f.push(Ch(c[d]))}else f=Ch(c);r.url=f}return i||(t.images[this.uuid]=r),r}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let mE=0;const Nh=new fe;class Yn extends nr{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=Oa,c=Oa,f=Fn,d=Qs,h=Hi,m=mi,g=Yn.DEFAULT_ANISOTROPY,S=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Tl(),this.name="",this.source=new nm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==AS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lp:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case cp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lp:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case cp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=AS;Yn.DEFAULT_ANISOTROPY=1;const dm=class dm{constructor(t=0,i=0,r=0,c=1){this.x=t,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,c){return this.x=t,this.y=i,this.z=r,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,c,f;const m=t.elements,g=m[0],S=m[4],v=m[8],_=m[1],b=m[5],A=m[9],C=m[2],M=m[6],y=m[10];if(Math.abs(S-_)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(g+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(g+1)/2,N=(b+1)/2,L=(y+1)/2,U=(S+_)/4,P=(v+C)/4,T=(A+M)/4;return V>N&&V>L?V<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(V),c=U/r,f=P/r):N>L?N<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(N),r=U/c,f=T/c):L<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(L),r=P/f,c=T/f),this.set(r,c,f,i),this}let D=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(_-S)*(_-S));return Math.abs(D)<.001&&(D=1),this.x=(M-A)/D,this.y=(v-C)/D,this.z=(_-S)/D,this.w=Math.acos((g+b+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dm.prototype.isVector4=!0;let ln=dm;class gE extends nr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:r.depth},f=new Yn(c),d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=r,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new nm(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends gE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class IS extends Yn{constructor(t=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=In,this.minFilter=In,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xE extends Yn{constructor(t=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=In,this.minFilter=In,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ou=class Ou{constructor(t,i,r,c,f,d,h,m,g,S,v,_,b,A,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,h,m,g,S,v,_,b,A,C,M)}set(t,i,r,c,f,d,h,m,g,S,v,_,b,A,C,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=c,y[1]=f,y[5]=d,y[9]=h,y[13]=m,y[2]=g,y[6]=S,y[10]=v,y[14]=_,y[3]=b,y[7]=A,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ou().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,c=1/Xr.setFromMatrixColumn(t,0).length(),f=1/Xr.setFromMatrixColumn(t,1).length(),d=1/Xr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,c=t.y,f=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(c),g=Math.sin(c),S=Math.cos(f),v=Math.sin(f);if(t.order==="XYZ"){const _=d*S,b=d*v,A=h*S,C=h*v;i[0]=m*S,i[4]=-m*v,i[8]=g,i[1]=b+A*g,i[5]=_-C*g,i[9]=-h*m,i[2]=C-_*g,i[6]=A+b*g,i[10]=d*m}else if(t.order==="YXZ"){const _=m*S,b=m*v,A=g*S,C=g*v;i[0]=_+C*h,i[4]=A*h-b,i[8]=d*g,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=b*h-A,i[6]=C+_*h,i[10]=d*m}else if(t.order==="ZXY"){const _=m*S,b=m*v,A=g*S,C=g*v;i[0]=_-C*h,i[4]=-d*v,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*S,i[9]=C-_*h,i[2]=-d*g,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const _=d*S,b=d*v,A=h*S,C=h*v;i[0]=m*S,i[4]=A*g-b,i[8]=_*g+C,i[1]=m*v,i[5]=C*g+_,i[9]=b*g-A,i[2]=-g,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const _=d*m,b=d*g,A=h*m,C=h*g;i[0]=m*S,i[4]=C-_*v,i[8]=A*v+b,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-g*S,i[6]=b*v+A,i[10]=_-C*v}else if(t.order==="XZY"){const _=d*m,b=d*g,A=h*m,C=h*g;i[0]=m*S,i[4]=-v,i[8]=g*S,i[1]=_*v+C,i[5]=d*S,i[9]=b*v-A,i[2]=A*v-b,i[6]=h*S,i[10]=C*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,_E)}lookAt(t,i,r){const c=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),hs.crossVectors(r,di),hs.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),hs.crossVectors(r,di)),hs.normalize(),Jc.crossVectors(di,hs),c[0]=hs.x,c[4]=Jc.x,c[8]=di.x,c[1]=hs.y,c[5]=Jc.y,c[9]=di.y,c[2]=hs.z,c[6]=Jc.z,c[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],h=r[4],m=r[8],g=r[12],S=r[1],v=r[5],_=r[9],b=r[13],A=r[2],C=r[6],M=r[10],y=r[14],D=r[3],V=r[7],N=r[11],L=r[15],U=c[0],P=c[4],T=c[8],O=c[12],F=c[1],j=c[5],K=c[9],ae=c[13],X=c[2],ee=c[6],k=c[10],q=c[14],ce=c[3],ie=c[7],pe=c[11],_e=c[15];return f[0]=d*U+h*F+m*X+g*ce,f[4]=d*P+h*j+m*ee+g*ie,f[8]=d*T+h*K+m*k+g*pe,f[12]=d*O+h*ae+m*q+g*_e,f[1]=S*U+v*F+_*X+b*ce,f[5]=S*P+v*j+_*ee+b*ie,f[9]=S*T+v*K+_*k+b*pe,f[13]=S*O+v*ae+_*q+b*_e,f[2]=A*U+C*F+M*X+y*ce,f[6]=A*P+C*j+M*ee+y*ie,f[10]=A*T+C*K+M*k+y*pe,f[14]=A*O+C*ae+M*q+y*_e,f[3]=D*U+V*F+N*X+L*ce,f[7]=D*P+V*j+N*ee+L*ie,f[11]=D*T+V*K+N*k+L*pe,f[15]=D*O+V*ae+N*q+L*_e,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[12],d=t[1],h=t[5],m=t[9],g=t[13],S=t[2],v=t[6],_=t[10],b=t[14],A=t[3],C=t[7],M=t[11],y=t[15],D=m*b-g*_,V=h*b-g*v,N=h*_-m*v,L=d*b-g*S,U=d*_-m*S,P=d*v-h*S;return i*(C*D-M*V+y*N)-r*(A*D-M*L+y*U)+c*(A*V-C*L+y*P)-f*(A*N-C*U+M*P)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[1],d=t[5],h=t[9],m=t[2],g=t[6],S=t[10];return i*(d*S-h*g)-r*(f*S-h*m)+c*(f*g-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],g=t[7],S=t[8],v=t[9],_=t[10],b=t[11],A=t[12],C=t[13],M=t[14],y=t[15],D=i*h-r*d,V=i*m-c*d,N=i*g-f*d,L=r*m-c*h,U=r*g-f*h,P=c*g-f*m,T=S*C-v*A,O=S*M-_*A,F=S*y-b*A,j=v*M-_*C,K=v*y-b*C,ae=_*y-b*M,X=D*ae-V*K+N*j+L*F-U*O+P*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/X;return t[0]=(h*ae-m*K+g*j)*ee,t[1]=(c*K-r*ae-f*j)*ee,t[2]=(C*P-M*U+y*L)*ee,t[3]=(_*U-v*P-b*L)*ee,t[4]=(m*F-d*ae-g*O)*ee,t[5]=(i*ae-c*F+f*O)*ee,t[6]=(M*N-A*P-y*V)*ee,t[7]=(S*P-_*N+b*V)*ee,t[8]=(d*K-h*F+g*T)*ee,t[9]=(r*F-i*K-f*T)*ee,t[10]=(A*U-C*N+y*D)*ee,t[11]=(v*N-S*U-b*D)*ee,t[12]=(h*O-d*j-m*T)*ee,t[13]=(i*j-r*O+c*T)*ee,t[14]=(C*V-A*L-M*D)*ee,t[15]=(S*L-v*V+_*D)*ee,this}scale(t){const i=this.elements,r=t.x,c=t.y,f=t.z;return i[0]*=r,i[4]*=c,i[8]*=f,i[1]*=r,i[5]*=c,i[9]*=f,i[2]*=r,i[6]*=c,i[10]*=f,i[3]*=r,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),c=Math.sin(i),f=1-r,d=t.x,h=t.y,m=t.z,g=f*d,S=f*h;return this.set(g*d+r,g*h-c*m,g*m+c*h,0,g*h+c*m,S*h+r,S*m-c*d,0,g*m-c*h,S*m+c*d,f*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,c,f,d){return this.set(1,r,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,r){const c=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,g=f+f,S=d+d,v=h+h,_=f*g,b=f*S,A=f*v,C=d*S,M=d*v,y=h*v,D=m*g,V=m*S,N=m*v,L=r.x,U=r.y,P=r.z;return c[0]=(1-(C+y))*L,c[1]=(b+N)*L,c[2]=(A-V)*L,c[3]=0,c[4]=(b-N)*U,c[5]=(1-(_+y))*U,c[6]=(M+D)*U,c[7]=0,c[8]=(A+V)*P,c[9]=(M-D)*P,c[10]=(1-(_+C))*P,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,r){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return r.set(1,1,1),i.identity(),this;let d=Xr.set(c[0],c[1],c[2]).length();const h=Xr.set(c[4],c[5],c[6]).length(),m=Xr.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Pi.copy(this);const g=1/d,S=1/h,v=1/m;return Pi.elements[0]*=g,Pi.elements[1]*=g,Pi.elements[2]*=g,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,i.setFromRotationMatrix(Pi),r.x=d,r.y=h,r.z=m,this}makePerspective(t,i,r,c,f,d,h=ca,m=!1){const g=this.elements,S=2*f/(i-t),v=2*f/(r-c),_=(i+t)/(i-t),b=(r+c)/(r-c);let A,C;if(m)A=f/(d-f),C=d*f/(d-f);else if(h===ca)A=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Ml)A=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=v,g[9]=b,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,r,c,f,d,h=ca,m=!1){const g=this.elements,S=2/(i-t),v=2/(r-c),_=-(i+t)/(i-t),b=-(r+c)/(r-c);let A,C;if(m)A=1/(d-f),C=d/(d-f);else if(h===ca)A=-2/(d-f),C=-(d+f)/(d-f);else if(h===Ml)A=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=v,g[9]=0,g[13]=b,g[2]=0,g[6]=0,g[10]=A,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Ou.prototype.isMatrix4=!0;let hn=Ou;const Xr=new fe,Pi=new hn,vE=new fe(0,0,0),_E=new fe(1,1,1),hs=new fe,Jc=new fe,di=new fe,Fv=new hn,Hv=new co;class ys{constructor(t=0,i=0,r=0,c=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,c=this._order){return this._x=t,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],m=c[1],g=c[5],S=c[9],v=c[2],_=c[6],b=c[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Hv.setFromEuler(this),this.setFromQuaternion(Hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class PS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SE=0;const Gv=new fe,Wr=new co,Ca=new hn,$c=new fe,cl=new fe,yE=new fe,bE=new co,Vv=new fe(1,0,0),kv=new fe(0,1,0),jv=new fe(0,0,1),Xv={type:"added"},ME={type:"removed"},qr={type:"childadded",child:null},Dh={type:"childremoved",child:null};class Hn extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new fe,i=new ys,r=new co,c=new fe(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new hn},normalMatrix:{value:new gt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new PS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Wr.setFromAxisAngle(t,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,i){return Wr.setFromAxisAngle(t,i),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(kv,t)}rotateZ(t){return this.rotateOnAxis(jv,t)}translateOnAxis(t,i){return Gv.copy(t).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(kv,t)}translateZ(t){return this.translateOnAxis(jv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$c.copy(t):$c.set(t,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(cl,$c,this.up):Ca.lookAt($c,cl,this.up),this.quaternion.setFromRotationMatrix(Ca),c&&(Ca.extractRotation(c.matrixWorld),Wr.setFromRotationMatrix(Ca),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),qr.child=t,this.dispatchEvent(qr),qr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ME),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,yE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,bE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*c,f[13]+=r-f[1]*i-f[5]*r-f[9]*c,f[14]+=c-f[2]*i-f[6]*r-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let g=0,S=m.length;g<S;g++){const v=m[g];f(t.shapes,v)}else f(t.shapes,m)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,g=this.material.length;m<g;m++)h.push(f(t.materials,this.material[m]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];c.animations.push(f(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),g=d(t.textures),S=d(t.images),v=d(t.shapes),_=d(t.skeletons),b=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),g.length>0&&(r.textures=g),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=c,r;function d(h){const m=[];for(const g in h){const S=h[g];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const c=t.children[r];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Hn.DEFAULT_UP=new fe(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gl extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let c=null,f=null,d=null;const h=this._targetRay,m=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){d=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),y=this._getHandJoint(g,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const S=g.joints["index-finger-tip"],v=g.joints["thumb-tip"],_=S.position.distanceTo(v.position),b=.02,A=.005;g.inputState.pinching&&_>b+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&_<=b-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},eu={h:0,s:0,l:0};function Lh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,c=Pt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Pt.colorSpaceToWorking(this,c),this}setHSL(t,i,r,c=Pt.workingColorSpace){if(t=fE(t,1),i=Dt(i,0,1),r=Dt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Lh(d,f,t+1/3),this.g=Lh(d,f,t),this.b=Lh(d,f,t-1/3)}return Pt.colorSpaceToWorking(this,c),this}setStyle(t,i=Ci){function r(f){f!==void 0&&parseFloat(f)<1&&ut("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:ut("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ci){const r=zS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ci){return Pt.workingToColorSpace(Bn.copy(this),t),Math.round(Dt(Bn.r*255,0,255))*65536+Math.round(Dt(Bn.g*255,0,255))*256+Math.round(Dt(Bn.b*255,0,255))}getHexString(t=Ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pt.workingColorSpace){Pt.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,c=Bn.g,f=Bn.b,d=Math.max(r,c,f),h=Math.min(r,c,f);let m,g;const S=(h+d)/2;if(h===d)m=0,g=0;else{const v=d-h;switch(g=S<=.5?v/(d+h):v/(2-d-h),d){case r:m=(c-f)/v+(c<f?6:0);break;case c:m=(f-r)/v+2;break;case f:m=(r-c)/v+4;break}m/=6}return t.h=m,t.s=g,t.l=S,t}getRGB(t,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ci){Pt.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,r=Bn.g,c=Bn.b;return t!==Ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(t,i,r){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+i,ps.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ps),t.getHSL(eu);const r=Ah(ps.h,eu.h,i),c=Ah(ps.s,eu.s,i),f=Ah(ps.l,eu.l,i);return this.setHSL(r,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*r+f[6]*c,this.g=f[1]*i+f[4]*r+f[7]*c,this.b=f[2]*i+f[5]*r+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Ut;Ut.NAMES=zS;class TE extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new fe,Na=new fe,Oh=new fe,Da=new fe,Yr=new fe,Zr=new fe,Wv=new fe,Ih=new fe,Ph=new fe,zh=new fe,Bh=new ln,Fh=new ln,Hh=new ln;class Fi{constructor(t=new fe,i=new fe,r=new fe){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,c){c.subVectors(r,i),zi.subVectors(t,i),c.cross(zi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,r,c,f){zi.subVectors(c,i),Na.subVectors(r,i),Oh.subVectors(t,i);const d=zi.dot(zi),h=zi.dot(Na),m=zi.dot(Oh),g=Na.dot(Na),S=Na.dot(Oh),v=d*g-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,b=(g*m-h*S)*_,A=(d*S-h*m)*_;return f.set(1-b-A,A,b)}static containsPoint(t,i,r,c){return this.getBarycoord(t,i,r,c,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(t,i,r,c,f,d,h,m){return this.getBarycoord(t,i,r,c,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Da.x),m.addScaledVector(d,Da.y),m.addScaledVector(h,Da.z),m)}static getInterpolatedAttribute(t,i,r,c,f,d){return Bh.setScalar(0),Fh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,r),Hh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Bh,f.x),d.addScaledVector(Fh,f.y),d.addScaledVector(Hh,f.z),d}static isFrontFacing(t,i,r,c){return zi.subVectors(r,i),Na.subVectors(t,i),zi.cross(Na).dot(c)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,c){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,r,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),zi.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,c,f){return Fi.getInterpolation(t,this.a,this.b,this.c,i,r,c,f)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,c=this.b,f=this.c;let d,h;Yr.subVectors(c,r),Zr.subVectors(f,r),Ih.subVectors(t,r);const m=Yr.dot(Ih),g=Zr.dot(Ih);if(m<=0&&g<=0)return i.copy(r);Ph.subVectors(t,c);const S=Yr.dot(Ph),v=Zr.dot(Ph);if(S>=0&&v<=S)return i.copy(c);const _=m*v-S*g;if(_<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(r).addScaledVector(Yr,d);zh.subVectors(t,f);const b=Yr.dot(zh),A=Zr.dot(zh);if(A>=0&&b<=A)return i.copy(f);const C=b*g-m*A;if(C<=0&&g>=0&&A<=0)return h=g/(g-A),i.copy(r).addScaledVector(Zr,h);const M=S*A-b*v;if(M<=0&&v-S>=0&&b-A>=0)return Wv.subVectors(f,c),h=(v-S)/(v-S+(b-A)),i.copy(c).addScaledVector(Wv,h);const y=1/(M+C+_);return d=C*y,h=_*y,i.copy(r).addScaledVector(Yr,d).addScaledVector(Zr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Al{constructor(t=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Bi):Bi.fromBufferAttribute(f,d),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(t.matrixWorld),this.union(tu)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ul),nu.subVectors(this.max,ul),Kr.subVectors(t.a,ul),Qr.subVectors(t.b,ul),Jr.subVectors(t.c,ul),ms.subVectors(Qr,Kr),gs.subVectors(Jr,Qr),Ws.subVectors(Kr,Jr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ws.z,Ws.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ws.z,0,-Ws.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ws.y,Ws.x,0];return!Gh(i,Kr,Qr,Jr,nu)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,Kr,Qr,Jr,nu))?!1:(iu.crossVectors(ms,gs),i=[iu.x,iu.y,iu.z],Gh(i,Kr,Qr,Jr,nu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ua=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Bi=new fe,tu=new Al,Kr=new fe,Qr=new fe,Jr=new fe,ms=new fe,gs=new fe,Ws=new fe,ul=new fe,nu=new fe,iu=new fe,qs=new fe;function Gh(o,t,i,r,c){for(let f=0,d=o.length-3;f<=d;f+=3){qs.fromArray(o,f);const h=c.x*Math.abs(qs.x)+c.y*Math.abs(qs.y)+c.z*Math.abs(qs.z),m=t.dot(qs),g=i.dot(qs),S=r.dot(qs);if(Math.max(-Math.max(m,g,S),Math.min(m,g,S))>h)return!1}return!0}const _n=new fe,au=new Lt;let AE=0;class za extends nr{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=rE,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[r+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(t),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=ll(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ti(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,c){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),c=ti(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this}setXYZW(t,i,r,c,f){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),c=ti(c,this.array),f=ti(f,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class BS extends za{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class FS extends za{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Zn extends za{constructor(t,i,r){super(new Float32Array(t),i,r)}}const wE=new Al,fl=new fe,Vh=new fe;class im{constructor(t=new fe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):wE.setFromPoints(t).getCenter(r);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,r.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fl.subVectors(t,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(fl,c/r),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fl.copy(t.center).add(Vh)),this.expandByPoint(fl.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let RE=0;const Ri=new hn,kh=new Hn,$r=new fe,hi=new Al,dl=new Al,wn=new fe;class Vi extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oE(t)?FS:BS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new gt().getNormalMatrix(t);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,r){return Ri.makeTranslation(t,i,r),this.applyMatrix4(Ri),this}scale(t,i,r){return Ri.makeScale(t,i,r),this.applyMatrix4(Ri),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Zn(r,3))}else{const r=Math.min(t.length,i.count);for(let c=0;c<r;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,c=i.length;r<c;r++){const f=i[r];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new im);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(t){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(hi.min,dl.min),hi.expandByPoint(wn),wn.addVectors(hi.max,dl.max),hi.expandByPoint(wn)):(hi.expandByPoint(dl.min),hi.expandByPoint(dl.max))}hi.getCenter(r);let c=0;for(let f=0,d=t.count;f<d;f++)wn.fromBufferAttribute(t,f),c=Math.max(c,r.distanceToSquared(wn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let g=0,S=h.count;g<S;g++)wn.fromBufferAttribute(h,g),m&&($r.fromBufferAttribute(t,g),wn.add($r)),c=Math.max(c,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new za(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new fe,m[T]=new fe;const g=new fe,S=new fe,v=new fe,_=new Lt,b=new Lt,A=new Lt,C=new fe,M=new fe;function y(T,O,F){g.fromBufferAttribute(r,T),S.fromBufferAttribute(r,O),v.fromBufferAttribute(r,F),_.fromBufferAttribute(f,T),b.fromBufferAttribute(f,O),A.fromBufferAttribute(f,F),S.sub(g),v.sub(g),b.sub(_),A.sub(_);const j=1/(b.x*A.y-A.x*b.y);isFinite(j)&&(C.copy(S).multiplyScalar(A.y).addScaledVector(v,-b.y).multiplyScalar(j),M.copy(v).multiplyScalar(b.x).addScaledVector(S,-A.x).multiplyScalar(j),h[T].add(C),h[O].add(C),h[F].add(C),m[T].add(M),m[O].add(M),m[F].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,O=D.length;T<O;++T){const F=D[T],j=F.start,K=F.count;for(let ae=j,X=j+K;ae<X;ae+=3)y(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const V=new fe,N=new fe,L=new fe,U=new fe;function P(T){L.fromBufferAttribute(c,T),U.copy(L);const O=h[T];V.copy(O),V.sub(L.multiplyScalar(L.dot(O))).normalize(),N.crossVectors(U,O);const j=N.dot(m[T])<0?-1:1;d.setXYZW(T,V.x,V.y,V.z,j)}for(let T=0,O=D.length;T<O;++T){const F=D[T],j=F.start,K=F.count;for(let ae=j,X=j+K;ae<X;ae+=3)P(t.getX(ae+0)),P(t.getX(ae+1)),P(t.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new za(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const c=new fe,f=new fe,d=new fe,h=new fe,m=new fe,g=new fe,S=new fe,v=new fe;if(t)for(let _=0,b=t.count;_<b;_+=3){const A=t.getX(_+0),C=t.getX(_+1),M=t.getX(_+2);c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),S.subVectors(d,f),v.subVectors(c,f),S.cross(v),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,M),h.add(S),m.add(S),g.add(S),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,g.x,g.y,g.z)}else for(let _=0,b=i.count;_<b;_+=3)c.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(c,f),S.cross(v),r.setXYZ(_+0,S.x,S.y,S.z),r.setXYZ(_+1,S.x,S.y,S.z),r.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(h,m){const g=h.array,S=h.itemSize,v=h.normalized,_=new g.constructor(m.length*S);let b=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*S;for(let y=0;y<S;y++)_[A++]=g[b++]}return new za(_,S,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vi,r=this.index.array,c=this.attributes;for(const h in c){const m=c[h],g=t(m,r);i.setAttribute(h,g)}const f=this.morphAttributes;for(const h in f){const m=[],g=f[h];for(let S=0,v=g.length;S<v;S++){const _=g[S],b=t(_,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(t[g]=m[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const g=r[m];t.data.attributes[m]=g.toJSON(t.data)}const c={};let f=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],S=[];for(let v=0,_=g.length;v<_;v++){const b=g[v];S.push(b.toJSON(t.data))}S.length>0&&(c[m]=S,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const c=t.attributes;for(const g in c){const S=c[g];this.setAttribute(g,S.clone(i))}const f=t.morphAttributes;for(const g in f){const S=[],v=f[g];for(let _=0,b=v.length;_<b;_++)S.push(v[_].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let g=0,S=d.length;g<S;g++){const v=d[g];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new fe,CE=new fe,NE=new gt;class vs{constructor(t=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,c){return this.normal.set(t,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const c=jh.subVectors(r,i).cross(CE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const c=t.delta(jh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||NE.getNormalMatrix(t),c=this.coplanarPoint(jh).applyMatrix4(t),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let DE=0;class wl extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=_l,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gS,this.blendDst=xS,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eh,this.stencilZFail=Eh,this.stencilZPass=Eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector2&&r&&r.isVector2||c&&c.isEuler&&r&&r.isEuler||c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new vs().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const La=new fe,Xh=new fe,su=new fe,ru=new fe;class UE{constructor(t=new fe,i=new fe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,La)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=La.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(La.copy(this.origin).addScaledVector(this.direction,i),La.distanceToSquared(t))}distanceSqToSegment(t,i,r,c){Xh.copy(t).add(i).multiplyScalar(.5),su.copy(i).sub(t).normalize(),ru.copy(this.origin).sub(Xh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(su),h=ru.dot(this.direction),m=-ru.dot(su),g=ru.lengthSq(),S=Math.abs(1-d*d);let v,_,b,A;if(S>0)if(v=d*m-h,_=d*h-m,A=f*S,v>=0)if(_>=-A)if(_<=A){const C=1/S;v*=C,_*=C,b=v*(v+d*_+2*h)+_*(d*v+_+2*m)+g}else _=f,v=Math.max(0,-(d*_+h)),b=-v*v+_*(_+2*m)+g;else _=-f,v=Math.max(0,-(d*_+h)),b=-v*v+_*(_+2*m)+g;else _<=-A?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-m),f),b=-v*v+_*(_+2*m)+g):_<=A?(v=0,_=Math.min(Math.max(-f,-m),f),b=_*(_+2*m)+g):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-m),f),b=-v*v+_*(_+2*m)+g);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),b=-v*v+_*(_+2*m)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Xh).addScaledVector(su,_),b}intersectSphere(t,i){if(t.radius<0)return null;La.subVectors(t.center,this.origin);const r=La.dot(this.direction),c=La.dot(La)-r*r,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,c,f,d,h,m;const g=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return g>=0?(r=(t.min.x-_.x)*g,c=(t.max.x-_.x)*g):(r=(t.max.x-_.x)*g,c=(t.min.x-_.x)*g),S>=0?(f=(t.min.y-_.y)*S,d=(t.max.y-_.y)*S):(f=(t.max.y-_.y)*S,d=(t.min.y-_.y)*S),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),r>m||h>c)||((h>r||r!==r)&&(r=h),(m<c||c!==c)&&(c=m),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(t){return this.intersectBox(t,La)!==null}intersectTriangle(t,i,r,c,f){const d=this.origin,h=this.direction,m=h.x,g=h.y,S=h.z,v=t.x-d.x,_=t.y-d.y,b=t.z-d.z,A=i.x-d.x,C=i.y-d.y,M=i.z-d.z,y=r.x-d.x,D=r.y-d.y,V=r.z-d.z,N=Math.abs(m),L=Math.abs(g),U=Math.abs(S);let P,T,O,F,j,K,ae,X,ee,k,q,ce;if(N>=L&&N>=U?(O=m,K=v,ee=A,ce=y,m>=0?(P=g,T=S,F=_,j=b,ae=C,X=M,k=D,q=V):(P=S,T=g,F=b,j=_,ae=M,X=C,k=V,q=D)):L>=U?(O=g,K=_,ee=C,ce=D,g>=0?(P=S,T=m,F=b,j=v,ae=M,X=A,k=V,q=y):(P=m,T=S,F=v,j=b,ae=A,X=M,k=y,q=V)):(O=S,K=b,ee=M,ce=V,S>=0?(P=m,T=g,F=v,j=_,ae=A,X=C,k=y,q=D):(P=g,T=m,F=_,j=v,ae=C,X=A,k=D,q=y)),O===0)return null;const ie=P/O,pe=T/O,_e=1/O,Ye=F-ie*K,We=j-pe*K,B=ae-ie*ee,me=X-pe*ee,Re=k-ie*ce,Q=q-pe*ce,he=Re*me-Q*B,Ae=Ye*Q-We*Re,we=B*We-me*Ye;if(c){if(he<0||Ae<0||we<0)return null}else if((he<0||Ae<0||we<0)&&(he>0||Ae>0||we>0))return null;const ge=he+Ae+we;if(ge===0)return null;const Ce=_e*(he*K+Ae*ee+we*ce);return(ge>0?Ce<0:Ce>0)?null:this.at(Ce/ge,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class am extends wl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=vS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qv=new hn,Ys=new UE,ou=new im,Yv=new fe,lu=new fe,cu=new fe,uu=new fe,Wh=new fe,fu=new fe,Zv=new fe,du=new fe;class On extends Hn{constructor(t=new Vi,i=new am){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){fu.set(0,0,0);for(let m=0,g=f.length;m<g;m++){const S=h[m],v=f[m];S!==0&&(Wh.fromBufferAttribute(v,t),d?fu.addScaledVector(Wh,S):fu.addScaledVector(Wh.sub(i),S))}i.add(fu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ou.copy(r.boundingSphere),ou.applyMatrix4(f),Ys.copy(t.ray).recast(t.near),!(ou.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(ou,Yv)===null||Ys.origin.distanceToSquared(Yv)>(t.far-t.near)**2))&&(qv.copy(f).invert(),Ys.copy(t.ray).applyMatrix4(qv),!(r.boundingBox!==null&&Ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Ys)))}_computeIntersections(t,i,r){let c;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,g=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,b=f.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=_.length;A<C;A++){const M=_[A],y=d[M.materialIndex],D=Math.max(M.start,b.start),V=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let N=D,L=V;N<L;N+=3){const U=h.getX(N),P=h.getX(N+1),T=h.getX(N+2);c=hu(this,y,t,r,g,S,v,U,P,T),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let M=A,y=C;M<y;M+=3){const D=h.getX(M),V=h.getX(M+1),N=h.getX(M+2);c=hu(this,d,t,r,g,S,v,D,V,N),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=_.length;A<C;A++){const M=_[A],y=d[M.materialIndex],D=Math.max(M.start,b.start),V=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let N=D,L=V;N<L;N+=3){const U=N,P=N+1,T=N+2;c=hu(this,y,t,r,g,S,v,U,P,T),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let M=A,y=C;M<y;M+=3){const D=M,V=M+1,N=M+2;c=hu(this,d,t,r,g,S,v,D,V,N),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function LE(o,t,i,r,c,f,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,f,c,!0,h):m=r.intersectTriangle(c,f,d,t.side===$s,h),m===null)return null;du.copy(h),du.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(du);return g<i.near||g>i.far?null:{distance:g,point:du.clone(),object:o}}function hu(o,t,i,r,c,f,d,h,m,g){o.getVertexPosition(h,lu),o.getVertexPosition(m,cu),o.getVertexPosition(g,uu);const S=LE(o,t,i,r,lu,cu,uu,Zv);if(S){const v=new fe;Fi.getBarycoord(Zv,lu,cu,uu,v),c&&(S.uv=Fi.getInterpolatedAttribute(c,h,m,g,v,new Lt)),f&&(S.uv1=Fi.getInterpolatedAttribute(f,h,m,g,v,new Lt)),d&&(S.normal=Fi.getInterpolatedAttribute(d,h,m,g,v,new fe),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:m,c:g,normal:new fe,materialIndex:0};Fi.getNormal(lu,cu,uu,_.normal),S.face=_,S.barycoord=v}return S}class OE extends Yn{constructor(t=null,i=1,r=1,c,f,d,h,m,g=In,S=In,v,_){super(null,d,h,m,g,S,c,f,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zs=new im,IE=new Lt(.5,.5),pu=new fe;class sm{constructor(t=new vs,i=new vs,r=new vs,c=new vs,f=new vs,d=new vs){this.planes=[t,i,r,c,f,d]}set(t,i,r,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ca,r=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],m=f[2],g=f[3],S=f[4],v=f[5],_=f[6],b=f[7],A=f[8],C=f[9],M=f[10],y=f[11],D=f[12],V=f[13],N=f[14],L=f[15];if(c[0].setComponents(g-d,b-S,y-A,L-D).normalize(),c[1].setComponents(g+d,b+S,y+A,L+D).normalize(),c[2].setComponents(g+h,b+v,y+C,L+V).normalize(),c[3].setComponents(g-h,b-v,y-C,L-V).normalize(),r)c[4].setComponents(m,_,M,N).normalize(),c[5].setComponents(g-m,b-_,y-M,L-N).normalize();else if(c[4].setComponents(g-m,b-_,y-M,L-N).normalize(),i===ca)c[5].setComponents(g+m,b+_,y+M,L+N).normalize();else if(i===Ml)c[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);const i=IE.distanceTo(t.center);return Zs.radius=.7071067811865476+i,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){const i=this.planes,r=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(pu.x=c.normal.x>0?t.max.x:t.min.x,pu.y=c.normal.y>0?t.max.y:t.min.y,pu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(pu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends Yn{constructor(t=[],i=er,r,c,f,d,h,m,g,S){super(t,i,r,c,f,d,h,m,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class El extends Yn{constructor(t,i,r=fa,c,f,d,h=In,m=In,g,S=Ba,v=1){if(S!==Ba&&S!==Js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,c,f,d,h,m,S,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class PE extends El{constructor(t,i=fa,r=er,c,f,d=In,h=In,m,g=Ba){const S={width:t,height:t,depth:1},v=[S,S,S,S,S,S];super(t,t,i,r,c,f,d,h,m,g),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class GS extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rl extends Vi{constructor(t=1,i=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const m=[],g=[],S=[],v=[];let _=0,b=0;A("z","y","x",-1,-1,r,i,t,d,f,0),A("z","y","x",1,-1,r,i,-t,d,f,1),A("x","z","y",1,1,t,r,i,c,d,2),A("x","z","y",1,-1,t,r,-i,c,d,3),A("x","y","z",1,-1,t,i,r,c,f,4),A("x","y","z",-1,-1,t,i,-r,c,f,5),this.setIndex(m),this.setAttribute("position",new Zn(g,3)),this.setAttribute("normal",new Zn(S,3)),this.setAttribute("uv",new Zn(v,2));function A(C,M,y,D,V,N,L,U,P,T,O){const F=N/P,j=L/T,K=N/2,ae=L/2,X=U/2,ee=P+1,k=T+1;let q=0,ce=0;const ie=new fe;for(let pe=0;pe<k;pe++){const _e=pe*j-ae;for(let Ye=0;Ye<ee;Ye++){const We=Ye*F-K;ie[C]=We*D,ie[M]=_e*V,ie[y]=X,g.push(ie.x,ie.y,ie.z),ie[C]=0,ie[M]=0,ie[y]=U>0?1:-1,S.push(ie.x,ie.y,ie.z),v.push(Ye/P),v.push(1-pe/T),q+=1}}for(let pe=0;pe<T;pe++)for(let _e=0;_e<P;_e++){const Ye=_+_e+ee*pe,We=_+_e+ee*(pe+1),B=_+(_e+1)+ee*(pe+1),me=_+(_e+1)+ee*pe;m.push(Ye,We,me),m.push(We,B,me),ce+=6}h.addGroup(b,ce,O),b+=ce,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ss extends Vi{constructor(t=1,i=1,r=1,c=32,f=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:c,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:m};const g=this;c=Math.floor(c),f=Math.floor(f);const S=[],v=[],_=[],b=[];let A=0;const C=[],M=r/2;let y=0;D(),d===!1&&(t>0&&V(!0),i>0&&V(!1)),this.setIndex(S),this.setAttribute("position",new Zn(v,3)),this.setAttribute("normal",new Zn(_,3)),this.setAttribute("uv",new Zn(b,2));function D(){const N=new fe,L=new fe;let U=0;const P=(i-t)/r;for(let T=0;T<=f;T++){const O=[],F=T/f,j=F*(i-t)+t;for(let K=0;K<=c;K++){const ae=K/c,X=ae*m+h,ee=Math.sin(X),k=Math.cos(X);L.x=j*ee,L.y=-F*r+M,L.z=j*k,v.push(L.x,L.y,L.z),N.set(ee,P,k).normalize(),_.push(N.x,N.y,N.z),b.push(ae,1-F),O.push(A++)}C.push(O)}for(let T=0;T<c;T++)for(let O=0;O<f;O++){const F=C[O][T],j=C[O+1][T],K=C[O+1][T+1],ae=C[O][T+1];(t>0||O!==0)&&(S.push(F,j,ae),U+=3),(i>0||O!==f-1)&&(S.push(j,K,ae),U+=3)}g.addGroup(y,U,0),y+=U}function V(N){const L=A,U=new Lt,P=new fe;let T=0;const O=N===!0?t:i,F=N===!0?1:-1;for(let K=1;K<=c;K++)v.push(0,M*F,0),_.push(0,F,0),b.push(.5,.5),A++;const j=A;for(let K=0;K<=c;K++){const X=K/c*m+h,ee=Math.cos(X),k=Math.sin(X);P.x=O*k,P.y=M*F,P.z=O*ee,v.push(P.x,P.y,P.z),_.push(0,F,0),U.x=ee*.5+.5,U.y=k*.5*F+.5,b.push(U.x,U.y),A++}for(let K=0;K<c;K++){const ae=L+K,X=j+K;N===!0?S.push(X,X+1,ae):S.push(X+1,X,ae),T+=3}g.addGroup(y,T,N===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rm extends Ss{constructor(t=1,i=1,r=32,c=1,f=!1,d=0,h=Math.PI*2){super(0,t,i,r,c,f,d,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(t){return new rm(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fu extends Vi{constructor(t=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(r),m=Math.floor(c),g=h+1,S=m+1,v=t/h,_=i/m,b=[],A=[],C=[],M=[];for(let y=0;y<S;y++){const D=y*_-d;for(let V=0;V<g;V++){const N=V*v-f;A.push(N,-D,0),C.push(0,0,1),M.push(V/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<h;D++){const V=D+g*y,N=D+g*(y+1),L=D+1+g*(y+1),U=D+1+g*y;b.push(V,N,U),b.push(N,L,U)}this.setIndex(b),this.setAttribute("position",new Zn(A,3)),this.setAttribute("normal",new Zn(C,3)),this.setAttribute("uv",new Zn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Lu extends Vi{constructor(t=1,i=32,r=16,c=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:c,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let g=0;const S=[],v=new fe,_=new fe,b=[],A=[],C=[],M=[];for(let y=0;y<=r;y++){const D=[],V=y/r,N=d+V*h,L=t*Math.cos(N),U=Math.sqrt(t*t-L*L);let P=0;y===0&&d===0?P=.5/i:y===r&&m===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const O=T/i,F=c+O*f;v.x=-U*Math.cos(F),v.y=L,v.z=U*Math.sin(F),A.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),M.push(O+P,1-V),D.push(g++)}S.push(D)}for(let y=0;y<r;y++)for(let D=0;D<i;D++){const V=S[y][D+1],N=S[y][D],L=S[y+1][D],U=S[y+1][D+1];(y!==0||d>0)&&b.push(V,N,U),(y!==r-1||m<Math.PI)&&b.push(N,L,U)}this.setIndex(b),this.setAttribute("position",new Zn(A,3)),this.setAttribute("normal",new Zn(C,3)),this.setAttribute("uv",new Zn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function lo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const c=o[i][r];if(Kv(c))c.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=c.clone();else if(Array.isArray(c))if(Kv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][r]=f}else t[i][r]=c.slice();else t[i][r]=c}}return t}function Wn(o){const t={};for(let i=0;i<o.length;i++){const r=lo(o[i]);for(const c in r)t[c]=r[c]}return t}function Kv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function zE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function VS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}const BE={clone:lo,merge:Wn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends wl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=zE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const c=t.uniforms[r];switch(this.uniforms[r]={},c.type){case"t":this.uniforms[r].value=i[c.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(c.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(c.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(c.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(c.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(c.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(c.value);break;default:this.uniforms[r].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class GE extends ha{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xl extends wl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class VE extends xl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class kE extends wl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jE extends wl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class om extends Hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new hn,Qv=new fe,Jv=new fe;class kS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Qv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Qv),Jv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Jv),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,c){qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(qh,t.coordinateSystem,t.reversedDepth);const f=this._frameExtents,d=c?c.z/f.x:1,h=c?c.w/f.y:1,m=c?c.x/f.x:0,g=c?c.y/f.y:0;t.coordinateSystem===Ml||t.reversedDepth?i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+g,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+g,0,0,.5,.5,0,0,0,1),i.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mu=new fe,gu=new co,ia=new fe;class jS extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mu,gu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ia.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(mu,gu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new fe,$v=new Lt,e_=new Lt;class pi extends jS{constructor(t=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gp*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,i){return this.getViewBounds(t,$v,e_),i.subVectors(e_,$v)}setViewOffset(t,i,r,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Th*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,g=d.fullHeight;f+=d.offsetX*c/m,i-=d.offsetY*r/g,c*=d.width/m,r*=d.height/g}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class XE extends kS{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class WE extends om{constructor(t,i,r=0,c=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=c,this.shadow=new XE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class lm extends jS{constructor(t=-1,i=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-t,d=r+t,h=c+i,m=c-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qE extends kS{constructor(){super(new lm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t_ extends om{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new qE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class YE extends om{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const eo=-90,to=1;class ZE extends Hn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new pi(eo,to,t,i);c.layers=this.layers,this.add(c);const f=new pi(eo,to,t,i);f.layers=this.layers,this.add(f);const d=new pi(eo,to,t,i);d.layers=this.layers,this.add(d);const h=new pi(eo,to,t,i);h.layers=this.layers,this.add(h);const m=new pi(eo,to,t,i);m.layers=this.layers,this.add(m);const g=new pi(eo,to,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,c,f,d,h,m]=i;for(const g of i)this.remove(g);if(t===ca)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,g,S]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,1,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,3,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(v,_,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class KE extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class QE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const hm=class hm{constructor(t,i,r,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=r,f[3]=c,this}};hm.prototype.isMatrix2=!0;let n_=hm;function i_(o,t,i,r){const c=JE(r);switch(i){case DS:return o*t;case LS:return o*t/c.components*c.byteLength;case Qp:return o*t/c.components*c.byteLength;case tr:return o*t*2/c.components*c.byteLength;case Jp:return o*t*2/c.components*c.byteLength;case US:return o*t*3/c.components*c.byteLength;case Hi:return o*t*4/c.components*c.byteLength;case $p:return o*t*4/c.components*c.byteLength;case Su:case yu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case bu:case Mu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fp:case hp:return Math.max(o,16)*Math.max(t,8)/4;case up:case dp:return Math.max(o,8)*Math.max(t,8)/2;case pp:case mp:case xp:case vp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case gp:case Ru:case _p:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case yp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case bp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case wp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Np:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Lp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Op:case Ip:case Pp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case zp:case Bp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Cu:case Fp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JE(o){switch(o){case mi:case wS:return{byteLength:1,components:1};case yl:case RS:case da:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case fa:case Yp:case la:return{byteLength:4,components:1};case CS:case NS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XS(){let o=null,t=!1,i=null,r=null;function c(f,d){r=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function $E(o){const t=new WeakMap;function i(h,m){const g=h.array,S=h.usage,v=g.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,g,S),h.onUploadCallback();let b;if(g instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)b=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=o.SHORT;else if(g instanceof Uint32Array)b=o.UNSIGNED_INT;else if(g instanceof Int32Array)b=o.INT;else if(g instanceof Int8Array)b=o.BYTE;else if(g instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,g){const S=m.array,v=m.updateRanges;if(o.bindBuffer(g,h),v.length===0)o.bufferSubData(g,0,S);else{v.sort((b,A)=>b.start-A.start);let _=0;for(let b=1;b<v.length;b++){const A=v[_],C=v[b];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++_,v[_]=C)}v.length=_+1;for(let b=0,A=v.length;b<A;b++){const C=v[b];o.bufferSubData(g,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=t.get(h);(!S||S.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=t.get(h);if(g===void 0)t.set(h,i(h,m));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,m),g.version=h.version}}return{get:c,remove:f,update:d}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:aT,alphatest_pars_fragment:sT,aomap_fragment:rT,aomap_pars_fragment:oT,batching_pars_vertex:lT,batching_vertex:cT,begin_vertex:uT,beginnormal_vertex:fT,bsdfs:dT,iridescence_fragment:hT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:vT,color_fragment:_T,color_pars_fragment:ST,color_pars_vertex:yT,color_vertex:bT,common:MT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:AT,displacementmap_vertex:wT,emissivemap_fragment:RT,emissivemap_pars_fragment:CT,colorspace_fragment:NT,colorspace_pars_fragment:DT,envmap_fragment:UT,envmap_common_pars_fragment:LT,envmap_pars_fragment:OT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:WT,envmap_vertex:PT,fog_vertex:zT,fog_pars_vertex:BT,fog_fragment:FT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:VT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:jT,lights_pars_begin:XT,lights_toon_fragment:qT,lights_toon_pars_fragment:YT,lights_phong_fragment:ZT,lights_phong_pars_fragment:KT,lights_physical_fragment:QT,lights_physical_pars_fragment:JT,lights_fragment_begin:$T,lights_fragment_maps:eA,lights_fragment_end:tA,lightprobes_pars_fragment:nA,logdepthbuf_fragment:iA,logdepthbuf_pars_fragment:aA,logdepthbuf_pars_vertex:sA,logdepthbuf_vertex:rA,map_fragment:oA,map_pars_fragment:lA,map_particle_fragment:cA,map_particle_pars_fragment:uA,metalnessmap_fragment:fA,metalnessmap_pars_fragment:dA,morphinstance_vertex:hA,morphcolor_vertex:pA,morphnormal_vertex:mA,morphtarget_pars_vertex:gA,morphtarget_vertex:xA,normal_fragment_begin:vA,normal_fragment_maps:_A,normal_pars_fragment:SA,normal_pars_vertex:yA,normal_vertex:bA,normalmap_pars_fragment:MA,clearcoat_normal_fragment_begin:EA,clearcoat_normal_fragment_maps:TA,clearcoat_pars_fragment:AA,iridescence_pars_fragment:wA,opaque_fragment:RA,packing:CA,premultiplied_alpha_fragment:NA,project_vertex:DA,dithering_fragment:UA,dithering_pars_fragment:LA,roughnessmap_fragment:OA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:PA,shadowmap_pars_vertex:zA,shadowmap_vertex:BA,shadowmask_pars_fragment:FA,skinbase_vertex:HA,skinning_pars_vertex:GA,skinning_vertex:VA,skinnormal_vertex:kA,specularmap_fragment:jA,specularmap_pars_fragment:XA,tonemapping_fragment:WA,tonemapping_pars_fragment:qA,transmission_fragment:YA,transmission_pars_fragment:ZA,uv_pars_fragment:KA,uv_pars_vertex:QA,uv_vertex:JA,worldpos_vertex:$A,background_vert:e2,background_frag:t2,backgroundCube_vert:n2,backgroundCube_frag:i2,cube_vert:a2,cube_frag:s2,depth_vert:r2,depth_frag:o2,distance_vert:l2,distance_frag:c2,equirect_vert:u2,equirect_frag:f2,linedashed_vert:d2,linedashed_frag:h2,meshbasic_vert:p2,meshbasic_frag:m2,meshlambert_vert:g2,meshlambert_frag:x2,meshmatcap_vert:v2,meshmatcap_frag:_2,meshnormal_vert:S2,meshnormal_frag:y2,meshphong_vert:b2,meshphong_frag:M2,meshphysical_vert:E2,meshphysical_frag:T2,meshtoon_vert:A2,meshtoon_frag:w2,points_vert:R2,points_frag:C2,shadow_vert:N2,shadow_frag:D2,sprite_vert:U2,sprite_frag:L2},Ve={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new fe},probesMax:{value:new fe},probesResolution:{value:new fe}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ra={basic:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Wn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Wn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Wn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Wn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Wn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Wn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Wn([Ve.common,Ve.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Wn([Ve.lights,Ve.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ra.physical={uniforms:Wn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const xu={r:0,b:0,g:0},O2=new hn,WS=new gt;WS.set(-1,0,0,0,1,0,0,0,1);function I2(o,t,i,r,c,f){const d=new Ut(0);let h=c===!0?0:1,m,g,S=null,v=0,_=null;function b(D){let V=D.isScene===!0?D.background:null;if(V&&V.isTexture){const N=D.backgroundBlurriness>0;V=t.get(V,N)}return V}function A(D){let V=!1;const N=b(D);N===null?M(d,h):N&&N.isColor&&(M(N,1),V=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||V)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,V){const N=b(V);N&&(N.isCubeTexture||N.mapping===Bu)?(g===void 0&&(g=new On(new Rl(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:lo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),g.material.uniforms.envMap.value=N,g.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(V.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(WS),g.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Zt,(S!==N||v!==N.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,S=N,v=N.version,_=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new On(new Fu(2,2),new ha({name:"BackgroundMaterial",uniforms:lo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Zt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||v!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=N,v=N.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,V){D.getRGB(xu,VS(o)),i.buffers.color.setClear(xu.r,xu.g,xu.b,V,f)}function y(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,V=1){d.set(D),h=V,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,M(d,h)},render:A,addToRenderList:C,dispose:y}}function P2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=_(null);let f=c,d=!1;function h(j,K,ae,X,ee){let k=!1;const q=v(j,X,ae,K);f!==q&&(f=q,g(f.object)),k=b(j,X,ae,ee),k&&A(j,X,ae,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,N(j,K,ae,X),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function m(){return o.createVertexArray()}function g(j){return o.bindVertexArray(j)}function S(j){return o.deleteVertexArray(j)}function v(j,K,ae,X){const ee=X.wireframe===!0;let k=r[K.id];k===void 0&&(k={},r[K.id]=k);const q=j.isInstancedMesh===!0?j.id:0;let ce=k[q];ce===void 0&&(ce={},k[q]=ce);let ie=ce[ae.id];ie===void 0&&(ie={},ce[ae.id]=ie);let pe=ie[ee];return pe===void 0&&(pe=_(m()),ie[ee]=pe),pe}function _(j){const K=[],ae=[],X=[];for(let ee=0;ee<i;ee++)K[ee]=0,ae[ee]=0,X[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:X,object:j,attributes:{},index:null}}function b(j,K,ae,X){const ee=f.attributes,k=K.attributes;let q=0;const ce=ae.getAttributes();for(const ie in ce)if(ce[ie].location>=0){const _e=ee[ie];let Ye=k[ie];if(Ye===void 0&&(ie==="instanceMatrix"&&j.instanceMatrix&&(Ye=j.instanceMatrix),ie==="instanceColor"&&j.instanceColor&&(Ye=j.instanceColor)),_e===void 0||_e.attribute!==Ye||Ye&&_e.data!==Ye.data)return!0;q++}return f.attributesNum!==q||f.index!==X}function A(j,K,ae,X){const ee={},k=K.attributes;let q=0;const ce=ae.getAttributes();for(const ie in ce)if(ce[ie].location>=0){let _e=k[ie];_e===void 0&&(ie==="instanceMatrix"&&j.instanceMatrix&&(_e=j.instanceMatrix),ie==="instanceColor"&&j.instanceColor&&(_e=j.instanceColor));const Ye={};Ye.attribute=_e,_e&&_e.data&&(Ye.data=_e.data),ee[ie]=Ye,q++}f.attributes=ee,f.attributesNum=q,f.index=X}function C(){const j=f.newAttributes;for(let K=0,ae=j.length;K<ae;K++)j[K]=0}function M(j){y(j,0)}function y(j,K){const ae=f.newAttributes,X=f.enabledAttributes,ee=f.attributeDivisors;ae[j]=1,X[j]===0&&(o.enableVertexAttribArray(j),X[j]=1),ee[j]!==K&&(o.vertexAttribDivisor(j,K),ee[j]=K)}function D(){const j=f.newAttributes,K=f.enabledAttributes;for(let ae=0,X=K.length;ae<X;ae++)K[ae]!==j[ae]&&(o.disableVertexAttribArray(ae),K[ae]=0)}function V(j,K,ae,X,ee,k,q){q===!0?o.vertexAttribIPointer(j,K,ae,ee,k):o.vertexAttribPointer(j,K,ae,X,ee,k)}function N(j,K,ae,X){C();const ee=X.attributes,k=ae.getAttributes(),q=K.defaultAttributeValues;for(const ce in k){const ie=k[ce];if(ie.location>=0){let pe=ee[ce];if(pe===void 0&&(ce==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),ce==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor)),pe!==void 0){const _e=pe.normalized,Ye=pe.itemSize,We=t.get(pe);if(We===void 0)continue;const B=We.buffer,me=We.type,Re=We.bytesPerElement,Q=me===o.INT||me===o.UNSIGNED_INT||pe.gpuType===Yp;if(pe.isInterleavedBufferAttribute){const he=pe.data,Ae=he.stride,we=pe.offset;if(he.isInstancedInterleavedBuffer){for(let ge=0;ge<ie.locationSize;ge++)y(ie.location+ge,he.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<ie.locationSize;ge++)M(ie.location+ge);o.bindBuffer(o.ARRAY_BUFFER,B);for(let ge=0;ge<ie.locationSize;ge++)V(ie.location+ge,Ye/ie.locationSize,me,_e,Ae*Re,(we+Ye/ie.locationSize*ge)*Re,Q)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<ie.locationSize;he++)y(ie.location+he,pe.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<ie.locationSize;he++)M(ie.location+he);o.bindBuffer(o.ARRAY_BUFFER,B);for(let he=0;he<ie.locationSize;he++)V(ie.location+he,Ye/ie.locationSize,me,_e,Ye*Re,Ye/ie.locationSize*he*Re,Q)}}else if(q!==void 0){const _e=q[ce];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(ie.location,_e);break;case 3:o.vertexAttrib3fv(ie.location,_e);break;case 4:o.vertexAttrib4fv(ie.location,_e);break;default:o.vertexAttrib1fv(ie.location,_e)}}}}D()}function L(){O();for(const j in r){const K=r[j];for(const ae in K){const X=K[ae];for(const ee in X){const k=X[ee];for(const q in k)S(k[q].object),delete k[q];delete X[ee]}}delete r[j]}}function U(j){if(r[j.id]===void 0)return;const K=r[j.id];for(const ae in K){const X=K[ae];for(const ee in X){const k=X[ee];for(const q in k)S(k[q].object),delete k[q];delete X[ee]}}delete r[j.id]}function P(j){for(const K in r){const ae=r[K];for(const X in ae){const ee=ae[X];if(ee[j.id]===void 0)continue;const k=ee[j.id];for(const q in k)S(k[q].object),delete k[q];delete ee[j.id]}}}function T(j){for(const K in r){const ae=r[K],X=j.isInstancedMesh===!0?j.id:0,ee=ae[X];if(ee!==void 0){for(const k in ee){const q=ee[k];for(const ce in q)S(q[ce].object),delete q[ce];delete ee[k]}delete ae[X],Object.keys(ae).length===0&&delete r[K]}}}function O(){F(),d=!0,f!==c&&(f=c,g(f.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function z2(o,t,i){let r;function c(m){r=m}function f(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,S){S!==0&&(o.drawArraysInstanced(r,m,g,S),i.update(g,r,S))}function h(m,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,S);let _=0;for(let b=0;b<S;b++)_+=g[b];i.update(_,r,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function B2(o,t,i,r){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==Hi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mi&&P!==la&&!T&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=m(g);S!==g&&(ut("WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),V=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:V,maxFragmentUniforms:N,maxSamples:L,samples:U}}function F2(o){const t=this;let i=null,r=0,c=!1,f=!1;const d=new vs,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const b=v.length!==0||_||r!==0||c;return c=_,r=v.length,b},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,b){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,y=o.get(v);if(!c||A===null||A.length===0||f&&!M)f?S(null):g();else{const D=f?0:r,V=D*4;let N=y.clippingState||null;m.value=N,N=S(A,_,V,b);for(let L=0;L!==V;++L)N[L]=i[L];y.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function g(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(v,_,b,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const y=b+C*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let V=0,N=b;V!==C;++V,N+=4)d.copy(v[V]).applyMatrix4(D,h),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const ao=4,H2=6,G2=20,V2=256,hl=new lm,a_=new Ut;let Yh=null,Zh=0,Kh=0,Qh=!1;const k2=new fe,Ks=new fe;class s_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,c=100,f={}){const{size:d=256,position:h=k2}=f;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,c,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,Zh,Kh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===er||t.mapping===oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:da,format:Hi,colorSpace:Nu,depthBuffer:!1},c=r_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(t,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=j2(f)),this._blurMaterial=W2(f,t,i),this._ggxMaterial=X2(f,t,i)}return c}_compileMaterial(t){const i=new On(new Vi,t);this._renderer.compile(i,hl)}_sceneToCubeUV(t,i,r,c,f){const m=new pi(90,1,i,r),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,b=v.toneMapping;v.getClearColor(a_),v.toneMapping=ua,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(c),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Rl,new am({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(a_),y=!0);for(let V=0;V<6;V++){const N=V%3;N===0?(m.up.set(0,g[V],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+S[V],f.y,f.z)):N===1?(m.up.set(0,0,g[V]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+S[V],f.z)):(m.up.set(0,g[V],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+S[V]));const L=this._cubeSize;no(c,N*L,V>2?L:0,L,L),v.setRenderTarget(c),y&&v.render(C,m),v.render(t,m)}v.toneMapping=b,v.autoClear=_,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,c=t.mapping===er||t.mapping===oo;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const m=this._cubeSize;no(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,hl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=r}_applyGGXFilter(t,i,r){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,g=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(g*g-S*S),_=g*1.25,b=v*_,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-ao?r-A+ao:0),y=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,no(f,M,y,3*C,2*C),c.setRenderTarget(f),c.render(h,hl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=A-r,no(t,M,y,3*C,2*C),c.setRenderTarget(t),c.render(h,hl)}_blur(t,i,r,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,r,d),this._blurPass(f,t,r,r,d)}_blurPass(t,i,r,c,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[c];m.material=h;const g=h.uniforms;g.envMap.value=t.texture,g.sigma.value=f,g.mipInt.value=this._lodMax-r;const S=this._sizeLods[c],v=3*S*(c>this._lodMax-ao?c-this._lodMax+ao:0),_=4*(this._cubeSize-S);no(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(m,hl)}}function j2(o){const t=[],i=[];let r=o;const c=o-ao+1+H2;for(let f=0;f<c;f++){const d=Math.pow(2,r);t.push(d);const h=1/(d-2),m=-h,g=1+h,S=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,_=6,b=3,A=new Float32Array(b*_*v),C=new Float32Array(b*_*v);for(let y=0;y<v;y++){const D=y%3*2/3-1,V=y>2?0:-1,N=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];A.set(N,b*_*y);for(let L=0;L<_;L++){const U=S[L*2]*2-1,P=S[L*2+1]*2-1;y===0?Ks.set(1,P,U):y===1?Ks.set(-U,1,-P):y===2?Ks.set(-U,P,1):y===3?Ks.set(-1,P,-U):y===4?Ks.set(-U,-1,P):Ks.set(U,P,-1),Ks.toArray(C,(y*_+L)*b)}}const M=new Vi;M.setAttribute("position",new za(A,b)),M.setAttribute("outputDirection",new za(C,b)),i.push(new On(M,null)),r>ao&&r--}return{lodMeshes:i,sizeLods:t}}function r_(o,t,i){const r=new Gi(o,t,i);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function no(o,t,i,r,c){o.viewport.set(t,i,r,c),o.scissor.set(t,i,r,c)}function X2(o,t,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function W2(o,t,i){return new ha({name:"SphericalGaussianBlur",defines:{SAMPLES:G2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function o_(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function l_(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},c=[r,r,r,r,r,r];this.texture=new HS(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Rl(5,5,5),f=new ha({name:"CubemapFromEquirect",uniforms:lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ia});f.uniforms.tEquirect.value=i;const d=new On(c,f),h=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Fn),new ZE(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,c);t.setRenderTarget(f)}}function q2(o){let t=new WeakMap,i=new WeakMap,r=null;function c(_,b=!1){return _==null?null:b?d(_):f(_)}function f(_){if(_&&_.isTexture){const b=_.mapping;if(b===yh||b===bh)if(t.has(_)){const A=t.get(_).texture;return h(A,_.mapping)}else{const A=_.image;if(A&&A.height>0){const C=new qS(A.height);return C.fromEquirectangularTexture(o,_),t.set(_,C),_.addEventListener("dispose",g),h(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const b=_.mapping,A=b===yh||b===bh,C=b===er||b===oo;if(A||C){let M=i.get(_);const y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new s_(o)),M=A?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return A&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new s_(o)),M=A?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function h(_,b){return b===yh?_.mapping=er:b===bh&&(_.mapping=oo),_}function m(_){let b=0;const A=6;for(let C=0;C<A;C++)_[C]!==void 0&&b++;return b===A}function g(_){const b=_.target;b.removeEventListener("dispose",g);const A=t.get(b);A!==void 0&&(t.delete(b),A.dispose())}function S(_){const b=_.target;b.removeEventListener("dispose",S);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:c,dispose:v}}function Y2(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const c=o.getExtension(r);return t[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&so("WebGLRenderer: "+r+" extension not supported."),c}}}function Z2(o,t,i,r){const c={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const A in _.attributes)t.remove(_.attributes[A]);_.removeEventListener("dispose",d),delete c[_.id];const b=f.get(_);b&&(t.remove(b),f.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return c[_.id]===!0||(_.addEventListener("dispose",d),c[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const b in _)t.update(_[b],o.ARRAY_BUFFER)}function g(v){const _=[],b=v.index,A=v.attributes.position;let C=0;if(A===void 0)return;if(b!==null){const D=b.array;C=b.version;for(let V=0,N=D.length;V<N;V+=3){const L=D[V+0],U=D[V+1],P=D[V+2];_.push(L,U,U,P,P,L)}}else{const D=A.array;C=A.version;for(let V=0,N=D.length/3-1;V<N;V+=3){const L=V+0,U=V+1,P=V+2;_.push(L,U,U,P,P,L)}}const M=new(A.count>=65535?FS:BS)(_,1);M.version=C;const y=f.get(v);y&&t.remove(y),f.set(v,M)}function S(v){const _=f.get(v);if(_){const b=v.index;b!==null&&_.version<b.version&&g(v)}else g(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:S}}function K2(o,t,i){let r;function c(v){r=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(r,_,f,v*d),i.update(_,r,1)}function g(v,_,b){b!==0&&(o.drawElementsInstanced(r,_,f,v*d,b),i.update(_,r,b))}function S(v,_,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,f,v,0,b);let C=0;for(let M=0;M<b;M++)C+=_[M];i.update(C,r,1)}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=g,this.renderMultiDraw=S}function Q2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Gt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:r}}function J2(o,t,i){const r=new WeakMap,c=new ln;function f(d,h,m){const g=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let F=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var b=F;_!==void 0&&_.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let N=0;A===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let L=h.attributes.position.count*N,U=1;L>t.maxTextureSize&&(U=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*U*4*v),T=new IS(P,L,U,v);T.type=la,T.needsUpdate=!0;const O=N*4;for(let j=0;j<v;j++){const K=y[j],ae=D[j],X=V[j],ee=L*U*4*j;for(let k=0;k<K.count;k++){const q=k*O;A===!0&&(c.fromBufferAttribute(K,k),P[ee+q+0]=c.x,P[ee+q+1]=c.y,P[ee+q+2]=c.z,P[ee+q+3]=0),C===!0&&(c.fromBufferAttribute(ae,k),P[ee+q+4]=c.x,P[ee+q+5]=c.y,P[ee+q+6]=c.z,P[ee+q+7]=0),M===!0&&(c.fromBufferAttribute(X,k),P[ee+q+8]=c.x,P[ee+q+9]=c.y,P[ee+q+10]=c.z,P[ee+q+11]=X.itemSize===4?c.w:1)}}_={count:v,texture:T,size:new Lt(L,U)},r.set(h,_),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<g.length;M++)A+=g[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",g)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function $2(o,t,i,r,c){let f=new WeakMap;function d(g){const S=c.render.frame,v=g.geometry,_=t.get(g,v);if(f.get(_)!==S&&(t.update(_),f.set(_,S)),g.isInstancedMesh&&(g.hasEventListener("dispose",m)===!1&&g.addEventListener("dispose",m),f.get(g)!==S&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),f.set(g,S))),g.isSkinnedMesh){const b=g.skeleton;f.get(b)!==S&&(b.update(),f.set(b,S))}return _}function h(){f=new WeakMap}function m(g){const S=g.target;S.removeEventListener("dispose",m),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const e3={[_S]:"LINEAR_TONE_MAPPING",[SS]:"REINHARD_TONE_MAPPING",[yS]:"CINEON_TONE_MAPPING",[bS]:"ACES_FILMIC_TONE_MAPPING",[ES]:"AGX_TONE_MAPPING",[TS]:"NEUTRAL_TONE_MAPPING",[MS]:"CUSTOM_TONE_MAPPING"};function t3(o,t,i,r,c,f){const d=new Gi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const g=new Vi;g.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Zn([0,2,0,0,2,0],2));const S=new GE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new On(g,S),_=new lm(-1,1,1,-1,0,1);let b=null,A=null,C=!1,M,y=null,D=[],V=!1;this.setSize=function(N,L){d.setSize(N,L),h!==null&&h.setSize(N,L),m!==null&&m.setSize(N,L);for(let U=0;U<D.length;U++){const P=D[U];P.setSize&&P.setSize(N,L)}},this.setEffects=function(N){D=N,V=D.length>0&&D[0].isRenderPass===!0;const L=d.width,U=d.height;D.length>0&&h===null&&(h=new Gi(L,U,{type:da,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(L,U,{type:da,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<D.length;P++){const T=D[P];T.setSize&&T.setSize(L,U)}},this.begin=function(N,L){if(C||N.toneMapping===ua&&D.length===0)return!1;if(y=L,L!==null){const U=L.width,P=L.height;(d.width!==U||d.height!==P)&&this.setSize(U,P)}return V===!1&&N.setRenderTarget(d),M=N.toneMapping,N.toneMapping=ua,!0},this.hasRenderPass=function(){return V},this.end=function(N,L){N.toneMapping=M,C=!0;let U=d,P=h;for(let T=0;T<D.length;T++){const O=D[T];O.enabled!==!1&&(O.render(N,P,U,L),O.needsSwap!==!1&&(U=P,P=P===h?m:h))}if(b!==N.outputColorSpace||A!==N.toneMapping){b=N.outputColorSpace,A=N.toneMapping,S.defines={},Pt.getTransfer(b)===Zt&&(S.defines.SRGB_TRANSFER="");const T=e3[A];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(y),N.render(v,_),y=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),g.dispose(),S.dispose()}}const YS=new Yn,Vp=new El(1,1),ZS=new IS,KS=new xE,QS=new HS,c_=[],u_=[],f_=new Float32Array(16),d_=new Float32Array(9),h_=new Float32Array(4);function uo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const c=t*i;let f=c_[c];if(f===void 0&&(f=new Float32Array(c),c_[c]=f),t!==0){r.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Gu(o,t){let i=u_[t];i===void 0&&(i=new Int32Array(t),u_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function n3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function i3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),Mn(i,t)}}function a3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),Mn(i,t)}}function s3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),Mn(i,t)}}function r3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;h_.set(r),o.uniformMatrix2fv(this.addr,!1,h_),Mn(i,r)}}function o3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;d_.set(r),o.uniformMatrix3fv(this.addr,!1,d_),Mn(i,r)}}function l3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;f_.set(r),o.uniformMatrix4fv(this.addr,!1,f_),Mn(i,r)}}function c3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function u3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),Mn(i,t)}}function f3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),Mn(i,t)}}function d3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),Mn(i,t)}}function h3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),Mn(i,t)}}function m3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),Mn(i,t)}}function g3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),Mn(i,t)}}function x3(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Vp.compareFunction=i.isReversedDepthBuffer()?tm:em,f=Vp):f=YS,i.setTexture2D(t||f,c)}function v3(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(t||KS,c)}function _3(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTextureCube(t||QS,c)}function S3(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(t||ZS,c)}function y3(o){switch(o){case 5126:return n3;case 35664:return i3;case 35665:return a3;case 35666:return s3;case 35674:return r3;case 35675:return o3;case 35676:return l3;case 5124:case 35670:return c3;case 35667:case 35671:return u3;case 35668:case 35672:return f3;case 35669:case 35673:return d3;case 5125:return h3;case 36294:return p3;case 36295:return m3;case 36296:return g3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return S3}}function b3(o,t){o.uniform1fv(this.addr,t)}function M3(o,t){const i=uo(t,this.size,2);o.uniform2fv(this.addr,i)}function E3(o,t){const i=uo(t,this.size,3);o.uniform3fv(this.addr,i)}function T3(o,t){const i=uo(t,this.size,4);o.uniform4fv(this.addr,i)}function A3(o,t){const i=uo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function w3(o,t){const i=uo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function R3(o,t){const i=uo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function C3(o,t){o.uniform1iv(this.addr,t)}function N3(o,t){o.uniform2iv(this.addr,t)}function D3(o,t){o.uniform3iv(this.addr,t)}function U3(o,t){o.uniform4iv(this.addr,t)}function L3(o,t){o.uniform1uiv(this.addr,t)}function O3(o,t){o.uniform2uiv(this.addr,t)}function I3(o,t){o.uniform3uiv(this.addr,t)}function P3(o,t){o.uniform4uiv(this.addr,t)}function z3(o,t,i){const r=this.cache,c=t.length,f=Gu(i,c);bn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Vp:d=YS;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function B3(o,t,i){const r=this.cache,c=t.length,f=Gu(i,c);bn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||KS,f[d])}function F3(o,t,i){const r=this.cache,c=t.length,f=Gu(i,c);bn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||QS,f[d])}function H3(o,t,i){const r=this.cache,c=t.length,f=Gu(i,c);bn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||ZS,f[d])}function G3(o){switch(o){case 5126:return b3;case 35664:return M3;case 35665:return E3;case 35666:return T3;case 35674:return A3;case 35675:return w3;case 35676:return R3;case 5124:case 35670:return C3;case 35667:case 35671:return N3;case 35668:case 35672:return D3;case 35669:case 35673:return U3;case 5125:return L3;case 36294:return O3;case 36295:return I3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return z3;case 35679:case 36299:case 36307:return B3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return H3}}class V3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=y3(i.type)}}class k3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=G3(i.type)}}class j3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],r)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function p_(o,t){o.seq.push(t),o.map[t.id]=t}function X3(o,t,i){const r=o.name,c=r.length;for(Jh.lastIndex=0;;){const f=Jh.exec(r),d=Jh.lastIndex;let h=f[1];const m=f[2]==="]",g=f[3];if(m&&(h=h|0),g===void 0||g==="["&&d+2===c){p_(i,g===void 0?new V3(h,o,t):new k3(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new j3(h),p_(i,v)),i=v}}}class Eu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);X3(h,m,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,r,c){const f=this.map[i];f!==void 0&&f.setValue(t,r,c)}setOptional(t,i,r){const c=i[r];c!==void 0&&this.setValue(t,r,c)}static upload(t,i,r,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,c)}}static seqWithValue(t,i){const r=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&r.push(d)}return r}}function m_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const W3=37297;let q3=0;function Y3(o,t){const i=o.split(`
`),r=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const g_=new gt;function Z3(o){Pt._getMatrix(g_,Pt.workingColorSpace,o);const t=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(o)){case Du:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function x_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+Y3(o.getShaderSource(t),h)}else return f}function K3(o,t){const i=Z3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Q3={[_S]:"Linear",[SS]:"Reinhard",[yS]:"Cineon",[bS]:"ACESFilmic",[ES]:"AgX",[TS]:"Neutral",[MS]:"Custom"};function J3(o,t){const i=Q3[t];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new fe;function $3(){Pt.getLuminanceCoefficients(vu);const o=vu.x.toFixed(4),t=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ew(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function tw(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function nw(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function vl(o){return o!==""}function v_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function __(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(o){return o.replace(iw,sw)}const aw=new Map;function sw(o,t){let i=St[t];if(i===void 0){const r=aw.get(t);if(r!==void 0)i=St[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return kp(i)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(rw,ow)}function ow(o,t,i,r){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function y_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lw={[_u]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function cw(o){return lw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uw={[er]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function fw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const dw={[oo]:"ENVMAP_MODE_REFRACTION"};function hw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":dw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pw={[vS]:"ENVMAP_BLENDING_MULTIPLY",[Y1]:"ENVMAP_BLENDING_MIX",[Z1]:"ENVMAP_BLENDING_ADD"};function mw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":pw[o.combine]||"ENVMAP_BLENDING_NONE"}function gw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function xw(o,t,i,r){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=cw(i),g=fw(i),S=hw(i),v=mw(i),_=gw(i),b=ew(i),A=tw(f),C=c.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(vl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(M=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?St.tonemapping_pars_fragment:"",i.toneMapping!==ua?J3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,K3("linearToOutputTexel",i.outputColorSpace),$3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),d=kp(d),d=v_(d,i),d=__(d,i),h=kp(h),h=v_(h,i),h=__(h,i),d=S_(d),h=S_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const V=D+M+d,N=D+y+h,L=m_(c,c.VERTEX_SHADER,V),U=m_(c,c.FRAGMENT_SHADER,N);c.attachShader(C,L),c.attachShader(C,U),i.index0AttributeName!==void 0?c.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(C,0,"position"),c.linkProgram(C);function P(j){if(o.debug.checkShaderErrors){const K=c.getProgramInfoLog(C)||"",ae=c.getShaderInfoLog(L)||"",X=c.getShaderInfoLog(U)||"",ee=K.trim(),k=ae.trim(),q=X.trim();let ce=!0,ie=!0;if(c.getProgramParameter(C,c.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,C,L,U);else{const pe=x_(c,L,"vertex"),_e=x_(c,U,"fragment");Gt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(C,c.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ee+`
`+pe+`
`+_e)}else ee!==""?ut("WebGLProgram: Program Info Log:",ee):(k===""||q==="")&&(ie=!1);ie&&(j.diagnostics={runnable:ce,programLog:ee,vertexShader:{log:k,prefix:M},fragmentShader:{log:q,prefix:y}})}c.deleteShader(L),c.deleteShader(U),T=new Eu(c,C),O=nw(c,C)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=c.getProgramParameter(C,W3)),F},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=q3++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=U,this}let vw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Sw(t),i.set(t,r)),r}}class Sw{constructor(t){this.id=vw++,this.code=t,this.usedTimes=0}}function yw(o){return o===tr||o===Ru||o===Cu}function bw(o,t,i,r,c,f){const d=new PS,h=new _w,m=new Set,g=[],S=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,O,F,j,K,ae){const X=j.fog,ee=K.geometry,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?j.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ce=t.get(T.envMap||k,q),ie=ce&&ce.mapping===Bu?ce.image.height:null,pe=b[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ye=_e!==void 0?_e.length:0;let We=0;ee.morphAttributes.position!==void 0&&(We=1),ee.morphAttributes.normal!==void 0&&(We=2),ee.morphAttributes.color!==void 0&&(We=3);let B,me,Re,Q;if(pe){const Ot=ra[pe];B=Ot.vertexShader,me=Ot.fragmentShader}else{B=T.vertexShader,me=T.fragmentShader;const Ot=h.getVertexShaderStage(T),pt=h.getFragmentShaderStage(T);h.update(T,Ot,pt),Re=Ot.id,Q=pt.id}const he=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),we=K.isInstancedMesh===!0,ge=K.isBatchedMesh===!0,Ce=!!T.map,zt=!!T.matcap,dt=!!ce,xt=!!T.aoMap,yt=!!T.lightMap,be=!!T.bumpMap&&T.wireframe===!1,Ne=!!T.normalMap,rt=!!T.displacementMap,lt=!!T.emissiveMap,tt=!!T.metalnessMap,Jt=!!T.roughnessMap,Y=T.anisotropy>0,sn=T.clearcoat>0,Ht=T.dispersion>0,I=T.retroreflectivity>0,E=T.iridescence>0,te=T.sheen>0,le=T.transmission>0,xe=Y&&!!T.anisotropyMap,De=sn&&!!T.clearcoatMap,Oe=sn&&!!T.clearcoatNormalMap,ve=sn&&!!T.clearcoatRoughnessMap,Ee=E&&!!T.iridescenceMap,Le=E&&!!T.iridescenceThicknessMap,nt=te&&!!T.sheenColorMap,Fe=te&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Xe=!!T.specularColorMap,at=!!T.specularIntensityMap,ht=le&&!!T.transmissionMap,W=le&&!!T.thicknessMap,Ue=!!T.gradientMap,Me=!!T.alphaMap,Ie=T.alphaTest>0,je=!!T.alphaHash,Te=!!T.extensions;let et=ua;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(et=o.toneMapping);const ke={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:B,fragmentShader:me,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ge,batchingColor:ge&&K._colorsTexture!==null,instancing:we,instancingColor:we&&K.instanceColor!==null,instancingMorph:we&&K.morphTexture!==null,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ce,matcap:zt,envMap:dt,envMapMode:dt&&ce.mapping,envMapCubeUVHeight:ie,aoMap:xt,lightMap:yt,bumpMap:be,normalMap:Ne,displacementMap:rt,emissiveMap:lt,normalMapObjectSpace:Ne&&T.normalMapType===J1,normalMapTangentSpace:Ne&&T.normalMapType===Hp,packedNormalMap:Ne&&T.normalMapType===Hp&&yw(T.normalMap.format),metalnessMap:tt,roughnessMap:Jt,anisotropy:Y,anisotropyMap:xe,clearcoat:sn,clearcoatMap:De,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ve,dispersion:Ht,retroreflection:I,iridescence:E,iridescenceMap:Ee,iridescenceThicknessMap:Le,sheen:te,sheenColorMap:nt,sheenRoughnessMap:Fe,specularMap:Be,specularColorMap:Xe,specularIntensityMap:at,transmission:le,transmissionMap:ht,thicknessMap:W,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===_l&&T.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ie,alphaHash:je,combine:T.combine,mapUv:Ce&&A(T.map.channel),aoMapUv:xt&&A(T.aoMap.channel),lightMapUv:yt&&A(T.lightMap.channel),bumpMapUv:be&&A(T.bumpMap.channel),normalMapUv:Ne&&A(T.normalMap.channel),displacementMapUv:rt&&A(T.displacementMap.channel),emissiveMapUv:lt&&A(T.emissiveMap.channel),metalnessMapUv:tt&&A(T.metalnessMap.channel),roughnessMapUv:Jt&&A(T.roughnessMap.channel),anisotropyMapUv:xe&&A(T.anisotropyMap.channel),clearcoatMapUv:De&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(T.sheenRoughnessMap.channel),specularMapUv:Be&&A(T.specularMap.channel),specularColorMapUv:Xe&&A(T.specularColorMap.channel),specularIntensityMapUv:at&&A(T.specularIntensityMap.channel),transmissionMapUv:ht&&A(T.transmissionMap.channel),thicknessMapUv:W&&A(T.thicknessMap.channel),alphaMapUv:Me&&A(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ne||Y),vertexNormals:!!ee.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ee.attributes.uv&&(Ce||Me),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&Ne===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ye,morphTextureStride:We,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:et,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:lt&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===oa,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Te&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&T.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ke.vertexUv1s=m.has(1),ke.vertexUv2s=m.has(2),ke.vertexUv3s=m.has(3),m.clear(),ke}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)O.push(F),O.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(y(O,T),D(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function y(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function V(T){const O=b[T.type];let F;if(O){const j=ra[O];F=BE.clone(j.uniforms)}else F=T.uniforms;return F}function N(T,O){let F=S.get(O);return F!==void 0?++F.usedTimes:(F=new xw(o,O,T,c),g.push(F),S.set(O,F)),F}function L(T){if(--T.usedTimes===0){const O=g.indexOf(T);g[O]=g[g.length-1],g.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function P(){h.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:V,acquireProgram:N,releaseProgram:L,releaseShaderCache:U,programs:g,dispose:P}}function Mw(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function c(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:t,get:i,remove:r,update:c,dispose:f}}function Ew(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function b_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function M_(){const o=[];let t=0;const i=[],r=[],c=[];function f(){t=0,i.length=0,r.length=0,c.length=0}function d(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function h(_,b,A,C,M,y){let D=o[t];return D===void 0?(D={id:_.id,object:_,geometry:b,material:A,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:y},o[t]=D):(D.id=_.id,D.object=_,D.geometry=b,D.material=A,D.materialVariant=d(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=y),t++,D}function m(_,b,A,C,M,y,D){D.reversedDepth===!0&&(M=-M);const V=h(_,b,A,C,M,y);A.transmission>0?r.push(V):A.transparent===!0?c.push(V):i.push(V)}function g(_,b,A,C,M,y){const D=h(_,b,A,C,M,y);A.transmission>0?r.unshift(D):A.transparent===!0?c.unshift(D):i.unshift(D)}function S(_,b){i.length>1&&i.sort(_||Ew),r.length>1&&r.sort(b||b_),c.length>1&&c.sort(b||b_)}function v(){for(let _=t,b=o.length;_<b;_++){const A=o[_];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:c,init:f,push:m,unshift:g,finish:v,sort:S}}function Tw(){let o=new WeakMap;function t(r,c){const f=o.get(r);let d;return f===void 0?(d=new M_,o.set(r,[d])):c>=f.length?(d=new M_,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Aw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new fe,color:new Ut};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return o[t.id]=i,i}}}function ww(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Rw=0;function Cw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Nw(o){const t=new Aw,i=ww(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new fe);const c=new fe,f=new hn,d=new hn;function h(g){let S=0,v=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let b=0,A=0,C=0,M=0,y=0,D=0,V=0,N=0,L=0,U=0,P=0,T=0,O=0,F=0;g.sort(Cw);for(let K=0,ae=g.length;K<ae;K++){const X=g[K],ee=X.color,k=X.intensity,q=X.distance;let ce=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===tr?ce=X.shadow.map.texture:ce=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)S+=ee.r*k,v+=ee.g*k,_+=ee.b*k;else if(X.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(X.sh.coefficients[ie],k);F++}else if(X.isSunLight){const ie=t.get(X);if(ie.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const pe=X.shadow,_e=i.get(X);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),r.sunShadow[A]=_e,r.sunShadowMap[A]=ce;const Ye=pe.getViewportCount();for(let We=0;We<Ye;We++)r.sunShadowMatrix[C+We]=pe.getMatrix(We),r.sunShadowCascade[C+We]=pe._cascadeData[We];C+=Ye,A++}r.sun[b]=ie,b++}else if(X.isDirectionalLight){const ie=t.get(X);if(ie.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const pe=X.shadow,_e=i.get(X);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,r.directionalShadow[M]=_e,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=X.shadow.matrix,L++}r.directional[M]=ie,M++}else if(X.isSpotLight){const ie=t.get(X);ie.position.setFromMatrixPosition(X.matrixWorld),ie.color.copy(ee).multiplyScalar(k),ie.distance=q,ie.coneCos=Math.cos(X.angle),ie.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ie.decay=X.decay,r.spot[D]=ie;const pe=X.shadow;if(X.map&&(r.spotLightMap[T]=X.map,T++,pe.updateMatrices(X),X.castShadow&&O++),r.spotLightMatrix[D]=pe.matrix,X.castShadow){const _e=i.get(X);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,r.spotShadow[D]=_e,r.spotShadowMap[D]=ce,P++}D++}else if(X.isRectAreaLight){const ie=t.get(X);ie.color.copy(ee).multiplyScalar(k),ie.halfWidth.set(X.width*.5,0,0),ie.halfHeight.set(0,X.height*.5,0),r.rectArea[V]=ie,V++}else if(X.isPointLight){const ie=t.get(X);if(ie.color.copy(X.color).multiplyScalar(X.intensity),ie.distance=X.distance,ie.decay=X.decay,X.castShadow){const pe=X.shadow,_e=i.get(X);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,_e.shadowCameraNear=pe.camera.near,_e.shadowCameraFar=pe.camera.far,r.pointShadow[y]=_e,r.pointShadowMap[y]=ce,r.pointShadowMatrix[y]=X.shadow.matrix,U++}r.point[y]=ie,y++}else if(X.isHemisphereLight){const ie=t.get(X);ie.skyColor.copy(X.color).multiplyScalar(k),ie.groundColor.copy(X.groundColor).multiplyScalar(k),r.hemi[N]=ie,N++}}V>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=_;const j=r.hash;(j.sunLength!==b||j.directionalLength!==M||j.pointLength!==y||j.spotLength!==D||j.rectAreaLength!==V||j.hemiLength!==N||j.numSunShadows!==A||j.numDirectionalShadows!==L||j.numPointShadows!==U||j.numSpotShadows!==P||j.numSpotMaps!==T||j.numLightProbes!==F)&&(r.sun.length=b,r.directional.length=M,r.spot.length=D,r.rectArea.length=V,r.point.length=y,r.hemi.length=N,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.spotLightMatrix.length=P+T-O,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,j.sunLength=b,j.directionalLength=M,j.pointLength=y,j.spotLength=D,j.rectAreaLength=V,j.hemiLength=N,j.numSunShadows=A,j.numDirectionalShadows=L,j.numPointShadows=U,j.numSpotShadows=P,j.numSpotMaps=T,j.numLightProbes=F,r.version=Rw++)}function m(g,S){let v=0,_=0,b=0,A=0,C=0,M=0;const y=S.matrixWorldInverse;for(let D=0,V=g.length;D<V;D++){const N=g[D];if(N.isSunLight){const L=r.sun[v];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),v++}else if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(y),_++}else if(N.isSpotLight){const L=r.spot[A];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(y),A++}else if(N.isRectAreaLight){const L=r.rectArea[C];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),d.identity(),f.copy(N.matrixWorld),f.premultiply(y),d.extractRotation(f),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),C++}else if(N.isPointLight){const L=r.point[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),b++}else if(N.isHemisphereLight){const L=r.hemi[M];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),M++}}}return{setup:h,setupView:m,state:r}}function E_(o){const t=new Nw(o),i=[],r=[],c=[];function f(_){v.camera=_,i.length=0,r.length=0,c.length=0}function d(_){i.push(_)}function h(_){r.push(_)}function m(_){c.push(_)}function g(){t.setup(i)}function S(_){t.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:g,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function Dw(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new E_(o),t.set(c,[h])):f>=d.length?(h=new E_(o),d.push(h)):h=d[f],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ow=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],Iw=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],T_=new hn,pl=new fe,$h=new fe;function Pw(o,t,i){let r=new sm;const c=new Lt,f=new Lt,d=new ln,h=new kE,m=new jE,g={},S=i.maxTextureSize,v={[$s]:qn,[qn]:$s,[oa]:oa},_=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Uw,fragmentShader:Lw}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const A=new Vi;A.setAttribute("position",new za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new On(A,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let y=this.type;this.render=function(U,P,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===mS&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_u);const O=o.getRenderTarget(),F=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Ia),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ae=y!==this.type;ae&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(ee=>ee.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,ee=U.length;X<ee;X++){const k=U[X],q=k.shadow;if(q===void 0){ut("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const ce=q.getFrameExtents();c.multiply(ce),f.copy(q.mapSize),(c.x>S||c.y>S)&&(c.x>S&&(f.x=Math.floor(S/ce.x),c.x=f.x*ce.x,q.mapSize.x=f.x),c.y>S&&(f.y=Math.floor(S/ce.y),c.y=f.y*ce.y,q.mapSize.y=f.y));const ie=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ie,q.map===null||ae===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ml){if(k.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Gi(c.x,c.y,{format:tr,type:da,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),q.map.texture.name=k.name+".shadowMap",q.map.depthTexture=new El(c.x,c.y,la),q.map.depthTexture.name=k.name+".shadowMapDepth",q.map.depthTexture.format=Ba,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In}else k.isPointLight?(q.map=new qS(c.x),q.map.depthTexture=new PE(c.x,fa)):(q.map=new Gi(c.x,c.y),q.map.depthTexture=new El(c.x,c.y,fa)),q.map.depthTexture.name=k.name+".shadowMap",q.map.depthTexture.format=Ba,this.type===_u?(q.map.depthTexture.compareFunction=ie?tm:em,q.map.depthTexture.minFilter=Fn,q.map.depthTexture.magFilter=Fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const pe=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();k.isPointLight!==!0&&q.updateMatrices(k,T);for(let _e=0;_e<pe;_e++){const Ye=q.getCamera(_e);if(k.isPointLight){const We=q.camera,B=q.matrix,me=k.distance||We.far;me!==We.far&&(We.far=me,We.updateProjectionMatrix()),pl.setFromMatrixPosition(k.matrixWorld),We.position.copy(pl),$h.copy(We.position),$h.add(Ow[_e]),We.up.copy(Iw[_e]),We.lookAt($h),We.updateMatrixWorld(),B.makeTranslation(-pl.x,-pl.y,-pl.z),T_.multiplyMatrices(We.projectionMatrix,We.matrixWorldInverse),q._frustum.setFromProjectionMatrix(T_,We.coordinateSystem,We.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,_e),o.clear();else{_e===0&&(o.setRenderTarget(q.map),o.clear());const We=q.getViewport(_e);d.set(f.x*We.x,f.y*We.y,f.x*We.z,f.y*We.w),K.viewport(d)}r=q.getFrustum(_e),N(P,T,Ye,k,this.type)}q.isPointLightShadow!==!0&&this.type===ml&&D(q,T),q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(O,F,j)};function D(U,P){const T=t.update(C);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null?U.mapPass=new Gi(c.x,c.y,{format:tr,type:da}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,T,_,C,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value.set(U.map.width,U.map.height),b.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,T,b,C,null)}function V(U,P,T,O){let F=null;const j=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(j!==void 0)F=j;else if(F=T.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=F.uuid,ae=P.uuid;let X=g[K];X===void 0&&(X={},g[K]=X);let ee=X[ae];ee===void 0&&(ee=F.clone(),X[ae]=ee,P.addEventListener("dispose",L)),F=ee}if(F.visible=P.visible,F.wireframe=P.wireframe,O===ml?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:v[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const K=o.properties.get(F);K.light=T}return F}function N(U,P,T,O,F){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&F===ml)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ae=t.update(U),X=U.material;if(Array.isArray(X)){const ee=ae.groups;for(let k=0,q=ee.length;k<q;k++){const ce=ee[k],ie=X[ce.materialIndex];if(ie&&ie.visible){const pe=V(U,ie,O,F);U.onBeforeShadow(o,U,P,T,ae,pe,ce),o.renderBufferDirect(T,null,ae,pe,U,ce),U.onAfterShadow(o,U,P,T,ae,pe,ce)}}}else if(X.visible){const ee=V(U,X,O,F);U.onBeforeShadow(o,U,P,T,ae,ee,null),o.renderBufferDirect(T,null,ae,ee,U,null),U.onAfterShadow(o,U,P,T,ae,ee,null)}}const K=U.children;for(let ae=0,X=K.length;ae<X;ae++)N(K[ae],P,T,O,F)}function L(U){U.target.removeEventListener("dispose",L);for(const T in g){const O=g[T],F=U.target.uuid;F in O&&(O[F].dispose(),delete O[F])}}}function zw(o,t){function i(){let W=!1;const Ue=new ln;let Me=null;const Ie=new ln(0,0,0,0);return{setMask:function(je){Me!==je&&!W&&(o.colorMask(je,je,je,je),Me=je)},setLocked:function(je){W=je},setClear:function(je,Te,et,ke,Ot){Ot===!0&&(je*=ke,Te*=ke,et*=ke),Ue.set(je,Te,et,ke),Ie.equals(Ue)===!1&&(o.clearColor(je,Te,et,ke),Ie.copy(Ue))},reset:function(){W=!1,Me=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Ue=!1,Me=null,Ie=null,je=null;return{setReversed:function(Te){if(Ue!==Te){const et=t.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const ke=je;je=null,this.setClear(ke)}},getReversed:function(){return Ue},setTest:function(Te){Te?he(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!W&&(o.depthMask(Te),Me=Te)},setFunc:function(Te){if(Ue&&(Te=uE[Te]),Ie!==Te){switch(Te){case tp:o.depthFunc(o.NEVER);break;case np:o.depthFunc(o.ALWAYS);break;case ip:o.depthFunc(o.LESS);break;case Sl:o.depthFunc(o.LEQUAL);break;case ap:o.depthFunc(o.EQUAL);break;case sp:o.depthFunc(o.GEQUAL);break;case rp:o.depthFunc(o.GREATER);break;case op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=Te}},setLocked:function(Te){W=Te},setClear:function(Te){je!==Te&&(je=Te,Ue&&(Te=1-Te),o.clearDepth(Te))},reset:function(){W=!1,Me=null,Ie=null,je=null,Ue=!1}}}function c(){let W=!1,Ue=null,Me=null,Ie=null,je=null,Te=null,et=null,ke=null,Ot=null;return{setTest:function(pt){W||(pt?he(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(pt){Ue!==pt&&!W&&(o.stencilMask(pt),Ue=pt)},setFunc:function(pt,ni,xi){(Me!==pt||Ie!==ni||je!==xi)&&(o.stencilFunc(pt,ni,xi),Me=pt,Ie=ni,je=xi)},setOp:function(pt,ni,xi){(Te!==pt||et!==ni||ke!==xi)&&(o.stencilOp(pt,ni,xi),Te=pt,et=ni,ke=xi)},setLocked:function(pt){W=pt},setClear:function(pt){Ot!==pt&&(o.clearStencil(pt),Ot=pt)},reset:function(){W=!1,Ue=null,Me=null,Ie=null,je=null,Te=null,et=null,ke=null,Ot=null}}}const f=new i,d=new r,h=new c,m=new WeakMap,g=new WeakMap;let S={},v={},_={},b=new WeakMap,A=[],C=null,M=!1,y=null,D=null,V=null,N=null,L=null,U=null,P=null,T=new Ut(0,0,0),O=0,F=!1,j=null,K=null,ae=null,X=null,ee=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ce=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=ce>=1):ie.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=ce>=2);let pe=null,_e={};const Ye=o.getParameter(o.SCISSOR_BOX),We=o.getParameter(o.VIEWPORT),B=new ln().fromArray(Ye),me=new ln().fromArray(We);function Re(W,Ue,Me,Ie){const je=new Uint8Array(4),Te=o.createTexture();o.bindTexture(W,Te),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let et=0;et<Me;et++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,je):o.texImage2D(Ue+et,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,je);return Te}const Q={};Q[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(o.DEPTH_TEST),d.setFunc(Sl),be(!1),Ne(Cv),he(o.CULL_FACE),xt(Ia);function he(W){S[W]!==!0&&(o.enable(W),S[W]=!0)}function Ae(W){S[W]!==!1&&(o.disable(W),S[W]=!1)}function we(W,Ue){return _[W]!==Ue?(o.bindFramebuffer(W,Ue),_[W]=Ue,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ue),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ge(W,Ue){let Me=A,Ie=!1;if(W){Me=b.get(Ue),Me===void 0&&(Me=[],b.set(Ue,Me));const je=W.textures;if(Me.length!==je.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,et=je.length;Te<et;Te++)Me[Te]=o.COLOR_ATTACHMENT0+Te;Me.length=je.length,Ie=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Me)}function Ce(W){return C!==W?(o.useProgram(W),C=W,!0):!1}const zt={[io]:o.FUNC_ADD,[D1]:o.FUNC_SUBTRACT,[U1]:o.FUNC_REVERSE_SUBTRACT};zt[L1]=o.MIN,zt[O1]=o.MAX;const dt={[I1]:o.ZERO,[P1]:o.ONE,[z1]:o.SRC_COLOR,[gS]:o.SRC_ALPHA,[k1]:o.SRC_ALPHA_SATURATE,[G1]:o.DST_COLOR,[F1]:o.DST_ALPHA,[B1]:o.ONE_MINUS_SRC_COLOR,[xS]:o.ONE_MINUS_SRC_ALPHA,[V1]:o.ONE_MINUS_DST_COLOR,[H1]:o.ONE_MINUS_DST_ALPHA,[j1]:o.CONSTANT_COLOR,[X1]:o.ONE_MINUS_CONSTANT_COLOR,[W1]:o.CONSTANT_ALPHA,[q1]:o.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ue,Me,Ie,je,Te,et,ke,Ot,pt){if(W===Ia){M===!0&&(Ae(o.BLEND),M=!1);return}if(M===!1&&(he(o.BLEND),M=!0),W!==N1){if(W!==y||pt!==F){if((D!==io||L!==io)&&(o.blendEquation(o.FUNC_ADD),D=io,L=io),pt)switch(W){case _l:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nv:o.blendFunc(o.ONE,o.ONE);break;case Dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Uv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Gt("WebGLState: Invalid blending: ",W);break}else switch(W){case _l:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dv:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uv:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",W);break}V=null,N=null,U=null,P=null,T.set(0,0,0),O=0,y=W,F=pt}return}je=je||Ue,Te=Te||Me,et=et||Ie,(Ue!==D||je!==L)&&(o.blendEquationSeparate(zt[Ue],zt[je]),D=Ue,L=je),(Me!==V||Ie!==N||Te!==U||et!==P)&&(o.blendFuncSeparate(dt[Me],dt[Ie],dt[Te],dt[et]),V=Me,N=Ie,U=Te,P=et),(ke.equals(T)===!1||Ot!==O)&&(o.blendColor(ke.r,ke.g,ke.b,Ot),T.copy(ke),O=Ot),y=W,F=!1}function yt(W,Ue){W.side===oa?Ae(o.CULL_FACE):he(o.CULL_FACE);let Me=W.side===qn;Ue&&(Me=!Me),be(Me),W.blending===_l&&W.transparent===!1?xt(Ia):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),f.setMask(W.colorWrite);const Ie=W.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){j!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),j=W)}function Ne(W){W!==R1?(he(o.CULL_FACE),W!==K&&(W===Cv?o.cullFace(o.BACK):W===C1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),K=W}function rt(W){W!==ae&&(q&&o.lineWidth(W),ae=W)}function lt(W,Ue,Me){W?(he(o.POLYGON_OFFSET_FILL),(X!==Ue||ee!==Me)&&(X=Ue,ee=Me,d.getReversed()&&(Ue=-Ue),o.polygonOffset(Ue,Me))):Ae(o.POLYGON_OFFSET_FILL)}function tt(W){W?he(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function Jt(W){W===void 0&&(W=o.TEXTURE0+k-1),pe!==W&&(o.activeTexture(W),pe=W)}function Y(W,Ue,Me){Me===void 0&&(pe===null?Me=o.TEXTURE0+k-1:Me=pe);let Ie=_e[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},_e[Me]=Ie),(Ie.type!==W||Ie.texture!==Ue)&&(pe!==Me&&(o.activeTexture(Me),pe=Me),o.bindTexture(W,Ue||Q[W]),Ie.type=W,Ie.texture=Ue)}function sn(){const W=_e[pe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ht(){try{o.compressedTexImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function E(){try{o.texSubImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function te(){try{o.texSubImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function xe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function De(){try{o.texStorage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Oe(){try{o.texStorage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function ve(){try{o.texImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Ee(){try{o.texImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Le(W){return v[W]!==void 0?v[W]:o.getParameter(W)}function nt(W,Ue){v[W]!==Ue&&(o.pixelStorei(W,Ue),v[W]=Ue)}function Fe(W){B.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),B.copy(W))}function Be(W){me.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function Xe(W,Ue){let Me=g.get(Ue);Me===void 0&&(Me=new WeakMap,g.set(Ue,Me));let Ie=Me.get(W);Ie===void 0&&(Ie=o.getUniformBlockIndex(Ue,W.name),Me.set(W,Ie))}function at(W,Ue){const Ie=g.get(Ue).get(W);m.get(Ue)!==Ie&&(o.uniformBlockBinding(Ue,Ie,W.__bindingPointIndex),m.set(Ue,Ie))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},pe=null,_e={},_={},b=new WeakMap,A=[],C=null,M=!1,y=null,D=null,V=null,N=null,L=null,U=null,P=null,T=new Ut(0,0,0),O=0,F=!1,j=null,K=null,ae=null,X=null,ee=null,B.set(0,0,o.canvas.width,o.canvas.height),me.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:he,disable:Ae,bindFramebuffer:we,drawBuffers:ge,useProgram:Ce,setBlending:xt,setMaterial:yt,setFlipSided:be,setCullFace:Ne,setLineWidth:rt,setPolygonOffset:lt,setScissorTest:tt,activeTexture:Jt,bindTexture:Y,unbindTexture:sn,compressedTexImage2D:Ht,compressedTexImage3D:I,texImage2D:ve,texImage3D:Ee,pixelStorei:nt,getParameter:Le,updateUBOMapping:Xe,uniformBlockBinding:at,texStorage2D:De,texStorage3D:Oe,texSubImage2D:E,texSubImage3D:te,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Fe,viewport:Be,reset:ht}}function Bw(o,t,i,r,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Lt,S=new WeakMap,v=new Set;let _;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,E){return A?new OffscreenCanvas(I,E):Uu("canvas")}function M(I,E,te){let le=1;const xe=Ht(I);if((xe.width>te||xe.height>te)&&(le=te/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const De=Math.floor(le*xe.width),Oe=Math.floor(le*xe.height);_===void 0&&(_=C(De,Oe));const ve=E?C(De,Oe):_;return ve.width=De,ve.height=Oe,ve.getContext("2d").drawImage(I,0,0,De,Oe),ut("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+De+"x"+Oe+")."),ve}else return"data"in I&&ut("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function y(I){return I.generateMipmaps}function D(I){o.generateMipmap(I)}function V(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(I,E,te,le,xe,De=!1){if(I!==null){if(o[I]!==void 0)return o[I];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;le&&(Oe=t.get("EXT_texture_norm16"),Oe||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===o.RED&&(te===o.FLOAT&&(ve=o.R32F),te===o.HALF_FLOAT&&(ve=o.R16F),te===o.UNSIGNED_BYTE&&(ve=o.R8),te===o.UNSIGNED_SHORT&&Oe&&(ve=Oe.R16_EXT),te===o.SHORT&&Oe&&(ve=Oe.R16_SNORM_EXT)),E===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(ve=o.R8UI),te===o.UNSIGNED_SHORT&&(ve=o.R16UI),te===o.UNSIGNED_INT&&(ve=o.R32UI),te===o.BYTE&&(ve=o.R8I),te===o.SHORT&&(ve=o.R16I),te===o.INT&&(ve=o.R32I)),E===o.RG&&(te===o.FLOAT&&(ve=o.RG32F),te===o.HALF_FLOAT&&(ve=o.RG16F),te===o.UNSIGNED_BYTE&&(ve=o.RG8),te===o.UNSIGNED_SHORT&&Oe&&(ve=Oe.RG16_EXT),te===o.SHORT&&Oe&&(ve=Oe.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(ve=o.RG8UI),te===o.UNSIGNED_SHORT&&(ve=o.RG16UI),te===o.UNSIGNED_INT&&(ve=o.RG32UI),te===o.BYTE&&(ve=o.RG8I),te===o.SHORT&&(ve=o.RG16I),te===o.INT&&(ve=o.RG32I)),E===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(ve=o.RGB8UI),te===o.UNSIGNED_SHORT&&(ve=o.RGB16UI),te===o.UNSIGNED_INT&&(ve=o.RGB32UI),te===o.BYTE&&(ve=o.RGB8I),te===o.SHORT&&(ve=o.RGB16I),te===o.INT&&(ve=o.RGB32I)),E===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(ve=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(ve=o.RGBA16UI),te===o.UNSIGNED_INT&&(ve=o.RGBA32UI),te===o.BYTE&&(ve=o.RGBA8I),te===o.SHORT&&(ve=o.RGBA16I),te===o.INT&&(ve=o.RGBA32I)),E===o.RGB&&(te===o.UNSIGNED_SHORT&&Oe&&(ve=Oe.RGB16_EXT),te===o.SHORT&&Oe&&(ve=Oe.RGB16_SNORM_EXT),te===o.UNSIGNED_INT_5_9_9_9_REV&&(ve=o.RGB9_E5),te===o.UNSIGNED_INT_10F_11F_11F_REV&&(ve=o.R11F_G11F_B10F)),E===o.RGBA){const Ee=De?Du:Pt.getTransfer(xe);te===o.FLOAT&&(ve=o.RGBA32F),te===o.HALF_FLOAT&&(ve=o.RGBA16F),te===o.UNSIGNED_BYTE&&(ve=Ee===Zt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT&&Oe&&(ve=Oe.RGBA16_EXT),te===o.SHORT&&Oe&&(ve=Oe.RGBA16_SNORM_EXT),te===o.UNSIGNED_SHORT_4_4_4_4&&(ve=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(ve=o.RGB5_A1)}return(ve===o.R16F||ve===o.R32F||ve===o.RG16F||ve===o.RG32F||ve===o.RGBA16F||ve===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function L(I,E){let te;return I?E===null||E===fa||E===bl?te=o.DEPTH24_STENCIL8:E===la?te=o.DEPTH32F_STENCIL8:E===yl&&(te=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fa||E===bl?te=o.DEPTH_COMPONENT24:E===la?te=o.DEPTH_COMPONENT32F:E===yl&&(te=o.DEPTH_COMPONENT16),te}function U(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function P(I){const E=I.target;E.removeEventListener("dispose",P),O(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),j(E)}function O(I){const E=r.get(I);if(E.__webglInit===void 0)return;const te=I.source,le=b.get(te);if(le){const xe=le[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&F(I),Object.keys(le).length===0&&b.delete(te)}r.remove(I)}function F(I){const E=r.get(I);o.deleteTexture(E.__webglTexture);const te=I.source,le=b.get(te);delete le[E.__cacheKey],d.memory.textures--}function j(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let xe=0;xe<E.__webglFramebuffer[le].length;xe++)o.deleteFramebuffer(E.__webglFramebuffer[le][xe]);else o.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)o.deleteFramebuffer(E.__webglFramebuffer[le]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=I.textures;for(let le=0,xe=te.length;le<xe;le++){const De=r.get(te[le]);De.__webglTexture&&(o.deleteTexture(De.__webglTexture),d.memory.textures--),r.remove(te[le])}r.remove(I)}let K=0;function ae(){K=0}function X(){return K}function ee(I){K=I}function k(){const I=K;return I>=c.maxTextures&&ut("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+c.maxTextures),K+=1,I}function q(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ce(I,E){const te=r.get(I);if(I.isVideoTexture&&Y(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&te.__version!==I.version){const le=I.image;if(le===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(te,I,E);return}}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+E)}function ie(I,E){const te=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){Ae(te,I,E);return}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+E)}function pe(I,E){const te=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){Ae(te,I,E);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+E)}function _e(I,E){const te=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&te.__version!==I.version){we(te,I,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+E)}const Ye={[lp]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[cp]:o.MIRRORED_REPEAT},We={[In]:o.NEAREST,[K1]:o.NEAREST_MIPMAP_NEAREST,[Qc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[Mh]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},B={[eE]:o.NEVER,[sE]:o.ALWAYS,[tE]:o.LESS,[em]:o.LEQUAL,[nE]:o.EQUAL,[tm]:o.GEQUAL,[iE]:o.GREATER,[aE]:o.NOTEQUAL};function me(I,E){if(E.type===la&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Mh||E.magFilter===Qc||E.magFilter===Qs||E.minFilter===Fn||E.minFilter===Mh||E.minFilter===Qc||E.minFilter===Qs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,Ye[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,Ye[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,Ye[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,We[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,We[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==Qc&&E.minFilter!==Qs||E.type===la&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,c.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Re(I,E){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",P));const le=E.source;let xe=b.get(le);xe===void 0&&(xe={},b.set(le,xe));const De=q(E);if(De!==I.__cacheKey){xe[De]===void 0&&(xe[De]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,te=!0),xe[De].usedTimes++;const Oe=xe[I.__cacheKey];Oe!==void 0&&(xe[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&F(E)),I.__cacheKey=De,I.__webglTexture=xe[De].texture}return te}function Q(I,E,te){return Math.floor(Math.floor(I/te)/E)}function he(I,E,te,le){const De=I.updateRanges;if(De.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,te,le,E.data);else{De.sort((nt,Fe)=>nt.start-Fe.start);let Oe=0;for(let nt=1;nt<De.length;nt++){const Fe=De[Oe],Be=De[nt],Xe=Fe.start+Fe.count,at=Q(Be.start,E.width,4),ht=Q(Fe.start,E.width,4);Be.start<=Xe+1&&at===ht&&Q(Be.start+Be.count-1,E.width,4)===at?Fe.count=Math.max(Fe.count,Be.start+Be.count-Fe.start):(++Oe,De[Oe]=Be)}De.length=Oe+1;const ve=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Le=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let nt=0,Fe=De.length;nt<Fe;nt++){const Be=De[nt],Xe=Math.floor(Be.start/4),at=Math.ceil(Be.count/4),ht=Xe%E.width,W=Math.floor(Xe/E.width),Ue=at,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ht,W,Ue,Me,te,le,E.data)}I.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ve),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Le)}}function Ae(I,E,te){let le=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=o.TEXTURE_3D);const xe=Re(I,E),De=E.source;i.bindTexture(le,I.__webglTexture,o.TEXTURE0+te);const Oe=r.get(De);if(De.version!==Oe.__version||xe===!0){if(i.activeTexture(o.TEXTURE0+te),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=Pt.getPrimaries(Pt.workingColorSpace),Ie=E.colorSpace===_s?null:Pt.getPrimaries(E.colorSpace),je=E.colorSpace===_s||Me===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Ee=M(E.image,!1,c.maxTextureSize);Ee=sn(E,Ee);const Le=f.convert(E.format,E.colorSpace),nt=f.convert(E.type);let Fe=N(E.internalFormat,Le,nt,E.normalized,E.colorSpace,E.isVideoTexture);me(le,E);let Be;const Xe=E.mipmaps,at=E.isVideoTexture!==!0,ht=Oe.__version===void 0||xe===!0,W=De.dataReady,Ue=U(E,Ee);if(E.isDepthTexture)Fe=L(E.format===Js,E.type),ht&&(at?i.texStorage2D(o.TEXTURE_2D,1,Fe,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Le,nt,null));else if(E.isDataTexture)if(Xe.length>0){at&&ht&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Xe[0].width,Xe[0].height);for(let Me=0,Ie=Xe.length;Me<Ie;Me++)Be=Xe[Me],at?W&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Le,nt,Be.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,Be.width,Be.height,0,Le,nt,Be.data);E.generateMipmaps=!1}else at?(ht&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Ee.width,Ee.height),W&&he(E,Ee,Le,nt)):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Le,nt,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Fe,Xe[0].width,Xe[0].height,Ee.depth);for(let Me=0,Ie=Xe.length;Me<Ie;Me++)if(Be=Xe[Me],E.format!==Hi)if(Le!==null)if(at){if(W)if(E.layerUpdates.size>0){const je=i_(Be.width,Be.height,E.format,E.type);for(const Te of E.layerUpdates){const et=Be.data.subarray(Te*je/Be.data.BYTES_PER_ELEMENT,(Te+1)*je/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,Te,Be.width,Be.height,1,Le,et)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Be.width,Be.height,Ee.depth,Le,Be.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Be.width,Be.height,Ee.depth,Le,nt,Be.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,Be.width,Be.height,Ee.depth,0,Le,nt,Be.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{at&&ht&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Xe[0].width,Xe[0].height);for(let Me=0,Ie=Xe.length;Me<Ie;Me++)Be=Xe[Me],E.format!==Hi?Le!==null?at?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Le,Be.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Fe,Be.width,Be.height,0,Be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?W&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Le,nt,Be.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,Be.width,Be.height,0,Le,nt,Be.data)}else if(E.isDataArrayTexture)if(at){if(ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Fe,Ee.width,Ee.height,Ee.depth),W)if(E.layerUpdates.size>0){const Me=i_(Ee.width,Ee.height,E.format,E.type);for(const Ie of E.layerUpdates){const je=Ee.data.subarray(Ie*Me/Ee.data.BYTES_PER_ELEMENT,(Ie+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ie,Ee.width,Ee.height,1,Le,nt,je)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,nt,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,Le,nt,Ee.data);else if(E.isData3DTexture)at?(ht&&i.texStorage3D(o.TEXTURE_3D,Ue,Fe,Ee.width,Ee.height,Ee.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,nt,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,Le,nt,Ee.data);else if(E.isFramebufferTexture){if(ht)if(at)i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Ee.width,Ee.height);else{let Me=Ee.width,Ie=Ee.height;for(let je=0;je<Ue;je++)i.texImage2D(o.TEXTURE_2D,je,Fe,Me,Ie,0,Le,nt,null),Me>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),v.add(E),Me.onpaint=Ie=>{const je=Ie.changedElements;for(const Te of v)je.includes(Te.image)&&(Te.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const je=o.RGBA,Te=o.RGBA,et=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,je,Te,et,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(at&&ht){const Me=Ht(Xe[0]);i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Me.width,Me.height)}for(let Me=0,Ie=Xe.length;Me<Ie;Me++)Be=Xe[Me],at?W&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Le,nt,Be):i.texImage2D(o.TEXTURE_2D,Me,Fe,Le,nt,Be);E.generateMipmaps=!1}else if(at){if(ht){const Me=Ht(Ee);i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Me.width,Me.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,nt,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Fe,Le,nt,Ee);y(E)&&D(le),Oe.__version=De.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function we(I,E,te){if(E.image.length!==6)return;const le=Re(I,E),xe=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+te);const De=r.get(xe);if(xe.version!==De.__version||le===!0){i.activeTexture(o.TEXTURE0+te);const Oe=Pt.getPrimaries(Pt.workingColorSpace),ve=E.colorSpace===_s?null:Pt.getPrimaries(E.colorSpace),Ee=E.colorSpace===_s||Oe===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let Te=0;Te<6;Te++)!Le&&!nt?Fe[Te]=M(E.image[Te],!0,c.maxCubemapSize):Fe[Te]=nt?E.image[Te].image:E.image[Te],Fe[Te]=sn(E,Fe[Te]);const Be=Fe[0],Xe=f.convert(E.format,E.colorSpace),at=f.convert(E.type),ht=N(E.internalFormat,Xe,at,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ue=De.__version===void 0||le===!0,Me=xe.dataReady;let Ie=U(E,Be);me(o.TEXTURE_CUBE_MAP,E);let je;if(Le){W&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ht,Be.width,Be.height);for(let Te=0;Te<6;Te++){je=Fe[Te].mipmaps;for(let et=0;et<je.length;et++){const ke=je[et];E.format!==Hi?Xe!==null?W?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ke.width,ke.height,Xe,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,ht,ke.width,ke.height,0,ke.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ke.width,ke.height,Xe,at,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,ht,ke.width,ke.height,0,Xe,at,ke.data)}}}else{if(je=E.mipmaps,W&&Ue){je.length>0&&Ie++;const Te=Ht(Fe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ht,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(nt){W?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Fe[Te].width,Fe[Te].height,Xe,at,Fe[Te].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,Fe[Te].width,Fe[Te].height,0,Xe,at,Fe[Te].data);for(let et=0;et<je.length;et++){const Ot=je[et].image[Te].image;W?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,Ot.width,Ot.height,Xe,at,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,ht,Ot.width,Ot.height,0,Xe,at,Ot.data)}}else{W?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Xe,at,Fe[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,Xe,at,Fe[Te]);for(let et=0;et<je.length;et++){const ke=je[et];W?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,Xe,at,ke.image[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,ht,Xe,at,ke.image[Te])}}}y(E)&&D(o.TEXTURE_CUBE_MAP),De.__version=xe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ge(I,E,te,le,xe,De){const Oe=f.convert(te.format,te.colorSpace),ve=f.convert(te.type),Ee=N(te.internalFormat,Oe,ve,te.normalized,te.colorSpace),Le=r.get(E),nt=r.get(te);if(nt.__renderTarget=E,!Le.__hasExternalTextures){const Fe=Math.max(1,E.width>>De),Be=Math.max(1,E.height>>De);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,De,Ee,Fe,Be,E.depth,0,Oe,ve,null):i.texImage2D(xe,De,Ee,Fe,Be,0,Oe,ve,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),Jt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,xe,nt.__webglTexture,0,tt(E)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,le,xe,nt.__webglTexture,De),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(I,E,te){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){const le=E.depthTexture,xe=le&&le.isDepthTexture?le.type:null,De=L(E.stencilBuffer,xe),Oe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Jt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tt(E),De,E.width,E.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,tt(E),De,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,De,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,I)}else{const le=E.textures;for(let xe=0;xe<le.length;xe++){const De=le[xe],Oe=f.convert(De.format,De.colorSpace),ve=f.convert(De.type),Ee=N(De.internalFormat,Oe,ve,De.normalized,De.colorSpace);Jt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tt(E),Ee,E.width,E.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,tt(E),Ee,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(I,E,te){const le=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),me(o.TEXTURE_CUBE_MAP,E.depthTexture);const Le=f.convert(E.depthTexture.format),nt=f.convert(E.depthTexture.type);let Fe;E.depthTexture.format===Ba?Fe=o.DEPTH_COMPONENT24:E.depthTexture.format===Js&&(Fe=o.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Fe,E.width,E.height,0,Le,nt,null)}}else ce(E.depthTexture,0);const De=xe.__webglTexture,Oe=tt(E),ve=le?o.TEXTURE_CUBE_MAP_POSITIVE_X+te:o.TEXTURE_2D,Ee=E.depthTexture.format===Js?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ba)Jt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,De,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,De,0);else if(E.depthTexture.format===Js)Jt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,De,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(I){const E=r.get(I),te=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=le}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(te)for(let le=0;le<6;le++)zt(E.__webglFramebuffer[le],I,le);else{const le=I.texture.mipmaps;le&&le.length>0?zt(E.__webglFramebuffer[0],I,0):zt(E.__webglFramebuffer,I,0)}else if(te){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=o.createRenderbuffer(),Ce(E.__webglDepthbuffer[le],I,!1);else{const xe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer[le];o.bindRenderbuffer(o.RENDERBUFFER,De),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,De)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ce(E.__webglDepthbuffer,I,!1);else{const xe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,De),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,De)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(I,E,te){const le=r.get(I);E!==void 0&&ge(le.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&dt(I)}function yt(I){const E=I.texture,te=r.get(I),le=r.get(E);I.addEventListener("dispose",T);const xe=I.textures,De=I.isWebGLCubeRenderTarget===!0,Oe=xe.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture()),le.__version=E.version,d.memory.textures++),De){te.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)te.__webglFramebuffer[ve][Ee]=o.createFramebuffer()}else te.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)te.__webglFramebuffer[ve]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let ve=0,Ee=xe.length;ve<Ee;ve++){const Le=r.get(xe[ve]);Le.__webglTexture===void 0&&(Le.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&Jt(I)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ve=0;ve<xe.length;ve++){const Ee=xe[ve];te.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const Le=f.convert(Ee.format,Ee.colorSpace),nt=f.convert(Ee.type),Fe=N(Ee.internalFormat,Le,nt,Ee.normalized,Ee.colorSpace,I.isXRRenderTarget===!0),Be=tt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,Fe,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,te.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(te.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(De){i.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture),me(o.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ge(te.__webglFramebuffer[ve][Ee],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else ge(te.__webglFramebuffer[ve],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ve=0,Ee=xe.length;ve<Ee;ve++){const Le=xe[ve],nt=r.get(Le);let Fe=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Fe=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Fe,nt.__webglTexture),me(Fe,Le),ge(te.__webglFramebuffer,I,Le,o.COLOR_ATTACHMENT0+ve,Fe,0),y(Le)&&D(Fe)}i.unbindTexture()}else{let ve=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,le.__webglTexture),me(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ge(te.__webglFramebuffer[Ee],I,E,o.COLOR_ATTACHMENT0,ve,Ee);else ge(te.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,ve,0);y(E)&&D(ve),i.unbindTexture()}I.depthBuffer&&dt(I)}function be(I){const E=I.textures;for(let te=0,le=E.length;te<le;te++){const xe=E[te];if(y(xe)){const De=V(I),Oe=r.get(xe).__webglTexture;i.bindTexture(De,Oe),D(De),i.unbindTexture()}}}const Ne=[],rt=[];function lt(I){if(I.samples>0){if(Jt(I)===!1){const E=I.textures,te=I.width,le=I.height;let xe=o.COLOR_BUFFER_BIT;const De=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=r.get(I),ve=E.length>1;if(ve)for(let Le=0;Le<E.length;Le++)i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ee=I.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const nt=r.get(E[Le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,nt,0)}o.blitFramebuffer(0,0,te,le,0,0,te,le,xe,o.NEAREST),m===!0&&(Ne.length=0,rt.length=0,Ne.push(o.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ne.push(De),rt.push(De),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,rt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<E.length;Le++){i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const nt=r.get(E[Le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,nt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&m){const E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function tt(I){return Math.min(c.maxSamples,I.samples)}function Jt(I){const E=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(I){const E=d.render.frame;S.get(I)!==E&&(S.set(I,E),I.update())}function sn(I,E){const te=I.colorSpace,le=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==Nu&&te!==_s&&(Pt.getTransfer(te)===Zt?(le!==Hi||xe!==mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",te)),E}function Ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(g.width=I.naturalWidth||I.width,g.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(g.width=I.displayWidth,g.height=I.displayHeight):(g.width=I.width,g.height=I.height),g}this.allocateTextureUnit=k,this.resetTextureUnits=ae,this.getTextureUnits=X,this.setTextureUnits=ee,this.setTexture2D=ce,this.setTexture2DArray=ie,this.setTexture3D=pe,this.setTextureCube=_e,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Fw(o,t){function i(r,c=_s){let f;const d=Pt.getTransfer(c);if(r===mi)return o.UNSIGNED_BYTE;if(r===Zp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Kp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===CS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===NS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===wS)return o.BYTE;if(r===RS)return o.SHORT;if(r===yl)return o.UNSIGNED_SHORT;if(r===Yp)return o.INT;if(r===fa)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===da)return o.HALF_FLOAT;if(r===DS)return o.ALPHA;if(r===US)return o.RGB;if(r===Hi)return o.RGBA;if(r===Ba)return o.DEPTH_COMPONENT;if(r===Js)return o.DEPTH_STENCIL;if(r===LS)return o.RED;if(r===Qp)return o.RED_INTEGER;if(r===tr)return o.RG;if(r===Jp)return o.RG_INTEGER;if(r===$p)return o.RGBA_INTEGER;if(r===Su||r===yu||r===bu||r===Mu)if(d===Zt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Su)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Su)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===up||r===fp||r===dp||r===hp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===up)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pp||r===mp||r===gp||r===xp||r===vp||r===Ru||r===_p)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(r===pp||r===mp)return d===Zt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===gp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===xp)return f.COMPRESSED_R11_EAC;if(r===vp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===Ru)return f.COMPRESSED_RG11_EAC;if(r===_p)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sp||r===yp||r===bp||r===Mp||r===Ep||r===Tp||r===Ap||r===wp||r===Rp||r===Cp||r===Np||r===Dp||r===Up||r===Lp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Sp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ep)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ap)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Np)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Up)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Op||r===Ip||r===Pp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(r===Op)return d===Zt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ip)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zp||r===Bp||r===Cu||r===Fp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(r===zp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Bp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new GS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ha({vertexShader:Hw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new On(new Fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends nr{constructor(t,i){super();const r=this;let c=null,f=1,d=null,h="local-floor",m=1,g=null,S=null,v=null,_=null,b=null,A=null;const C=typeof XRWebGLBinding<"u",M=new Vw,y={},D=i.getContextAttributes();let V=null,N=null;const L=[],U=[],P=new Lt;let T=null,O=null;const F=new pi;F.viewport=new ln;const j=new pi;j.viewport=new ln;const K=[F,j],ae=new KE;let X=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new Uh,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new Uh,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new Uh,L[Q]=he),he.getHandSpace()};function k(Q){const he=U.indexOf(Q.inputSource);if(he===-1)return;const Ae=L[he];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,g||d),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){c.removeEventListener("select",k),c.removeEventListener("selectstart",k),c.removeEventListener("selectend",k),c.removeEventListener("squeeze",k),c.removeEventListener("squeezestart",k),c.removeEventListener("squeezeend",k),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<L.length;Q++){const he=U[Q];he!==null&&(U[Q]=null,L[Q].disconnect(he))}X=null,ee=null,M.reset();for(const Q in y)delete y[Q];if(t.setRenderTarget(V),b=null,_=null,v=null,c=null,N=null,Re.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(Q){if(c=Q,c!==null){if(V=t.getRenderTarget(),c.addEventListener("select",k),c.addEventListener("selectstart",k),c.addEventListener("selectend",k),c.addEventListener("squeeze",k),c.addEventListener("squeezestart",k),c.addEventListener("squeezeend",k),c.addEventListener("end",q),c.addEventListener("inputsourceschange",ce),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,we=null,ge=null;D.depth&&(ge=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=D.stencil?Js:Ba,we=D.stencil?bl:fa);const Ce={colorFormat:i.RGBA8,depthFormat:ge,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Ce),c.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new Gi(_.textureWidth,_.textureHeight,{format:Hi,type:mi,depthTexture:new El(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ae={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};b=new XRWebGLLayer(c,i,Ae),c.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Gi(b.framebufferWidth,b.framebufferHeight,{format:Hi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),g=null,d=await c.requestReferenceSpace(h),Re.setContext(c),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(Q){for(let he=0;he<Q.removed.length;he++){const Ae=Q.removed[he],we=U.indexOf(Ae);we>=0&&(U[we]=null,L[we].disconnect(Ae))}for(let he=0;he<Q.added.length;he++){const Ae=Q.added[he];let we=U.indexOf(Ae);if(we===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=U.length){U.push(Ae),we=Ce;break}else if(U[Ce]===null){U[Ce]=Ae,we=Ce;break}if(we===-1)break}const ge=L[we];ge&&ge.connect(Ae)}}const ie=new fe,pe=new fe;function _e(Q,he,Ae){ie.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(Ae.matrixWorld);const we=ie.distanceTo(pe),ge=he.projectionMatrix.elements,Ce=Ae.projectionMatrix.elements,zt=ge[14]/(ge[10]-1),dt=ge[14]/(ge[10]+1),xt=(ge[9]+1)/ge[5],yt=(ge[9]-1)/ge[5],be=(ge[8]-1)/ge[0],Ne=(Ce[8]+1)/Ce[0],rt=zt*be,lt=zt*Ne,tt=we/(-be+Ne),Jt=tt*-be;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Jt),Q.translateZ(tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ge[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Y=zt+tt,sn=dt+tt,Ht=rt-Jt,I=lt+(we-Jt),E=xt*dt/sn*Y,te=yt*dt/sn*Y;Q.projectionMatrix.makePerspective(Ht,I,E,te,Y,sn),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ye(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(c===null)return;let he=Q.near,Ae=Q.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Ae=M.depthFar)),ae.near=j.near=F.near=he,ae.far=j.far=F.far=Ae,(X!==ae.near||ee!==ae.far)&&(c.updateRenderState({depthNear:ae.near,depthFar:ae.far}),X=ae.near,ee=ae.far),ae.layers.mask=Q.layers.mask|6,F.layers.mask=ae.layers.mask&-5,j.layers.mask=ae.layers.mask&-3;const we=Q.parent,ge=ae.cameras;Ye(ae,we);for(let Ce=0;Ce<ge.length;Ce++)Ye(ge[Ce],we);ge.length===2?_e(ae,F,j):ae.projectionMatrix.copy(F.projectionMatrix),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),We(Q,ae,we)};function We(Q,he,Ae){Ae===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(_===null&&b===null))return m},this.setFoveation=function(Q){m=Q,_!==null&&(_.fixedFoveation=Q),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ae)},this.getCameraTexture=function(Q){return y[Q]};let B=null;function me(Q,he){if(S=he.getViewerPose(g||d),A=he,S!==null){const Ae=S.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let we=!1;Ae.length!==ae.cameras.length&&(ae.cameras.length=0,we=!0);for(let dt=0;dt<Ae.length;dt++){const xt=Ae[dt];let yt=null;if(b!==null)yt=b.getViewport(xt);else{const Ne=v.getViewSubImage(_,xt);yt=Ne.viewport,dt===0&&(t.setRenderTargetTextures(N,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(N))}let be=K[dt];be===void 0&&(be=new pi,be.layers.enable(dt),be.viewport=new ln,K[dt]=be),be.matrix.fromArray(xt.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(xt.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(yt.x,yt.y,yt.width,yt.height),dt===0&&(ae.matrix.copy(be.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),we===!0&&ae.cameras.push(be)}const ge=c.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const dt=v.getDepthInformation(Ae[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,c.renderState)}if(ge&&ge.includes("camera-access")&&C){t.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Ae.length;dt++){const xt=Ae[dt].camera;if(xt){let yt=y[xt];yt||(yt=new GS,y[xt]=yt);const be=v.getCameraImage(xt);yt.sourceTexture=be}}}}for(let Ae=0;Ae<L.length;Ae++){const we=U[Ae],ge=L[Ae];we!==null&&ge!==void 0&&ge.update(we,he,g||d)}B&&B(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),A=null}const Re=new XS;Re.setAnimationLoop(me),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}}const jw=new hn,JS=new gt;JS.set(-1,0,0,0,1,0,0,0,1);function Xw(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,VS(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function c(M,y,D,V,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?f(M,y):y.isMeshLambertMaterial?(f(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(f(M,y),v(M,y)):y.isMeshPhongMaterial?(f(M,y),S(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(f(M,y),_(M,y),y.isMeshPhysicalMaterial&&b(M,y,N)):y.isMeshMatcapMaterial?(f(M,y),A(M,y)):y.isMeshDepthMaterial?f(M,y):y.isMeshDistanceMaterial?(f(M,y),C(M,y)):y.isMeshNormalMaterial?f(M,y):y.isLineBasicMaterial?(d(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,D,V):y.isSpriteMaterial?g(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),V=D.envMap,N=D.envMapRotation;V&&(M.envMap.value=V,M.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(N)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(JS),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,V){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=V*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function S(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function Ww(o,t,i,r){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const U=L.program;r.uniformBlockBinding(N,U)}function g(N,L){let U=c[N.id];U===void 0&&(M(N),U=S(N),c[N.id]=U,N.addEventListener("dispose",D));const P=L.program;r.updateUBOMapping(N,P);const T=t.render.frame;f[N.id]!==T&&(_(N),f[N.id]=T)}function S(N){const L=v();N.__bindingPointIndex=L;const U=o.createBuffer(),P=N.__size,T=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function v(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const L=c[N.id],U=N.uniforms,P=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let T=0,O=U.length;T<O;T++){const F=U[T];if(Array.isArray(F))for(let j=0,K=F.length;j<K;j++)b(F[j],T,j,P);else b(F,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(N,L,U,P){if(C(N,L,U,P)===!0){const T=N.__offset,O=N.value;if(Array.isArray(O)){let F=0;for(let j=0;j<O.length;j++){const K=O[j],ae=y(K);A(K,N.__data,F),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(F+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,N.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,N.__data)}}function A(N,L,U){typeof N=="number"||typeof N=="boolean"?L[0]=N:N.isMatrix3?(L[0]=N.elements[0],L[1]=N.elements[1],L[2]=N.elements[2],L[3]=0,L[4]=N.elements[3],L[5]=N.elements[4],L[6]=N.elements[5],L[7]=0,L[8]=N.elements[6],L[9]=N.elements[7],L[10]=N.elements[8],L[11]=0):ArrayBuffer.isView(N)?L.set(new N.constructor(N.buffer,N.byteOffset,L.length)):N.toArray(L,U)}function C(N,L,U,P){const T=N.value,O=L+"_"+U;if(P[O]===void 0)return typeof T=="number"||typeof T=="boolean"?P[O]=T:ArrayBuffer.isView(T)?P[O]=T.slice():P[O]=T.clone(),!0;{const F=P[O];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return P[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(F.equals(T)===!1)return F.copy(T),!0}}return!1}function M(N){const L=N.uniforms;let U=0;const P=16;for(let O=0,F=L.length;O<F;O++){const j=Array.isArray(L[O])?L[O]:[L[O]];for(let K=0,ae=j.length;K<ae;K++){const X=j[K],ee=Array.isArray(X.value)?X.value:[X.value];for(let k=0,q=ee.length;k<q;k++){const ce=ee[k],ie=y(ce),pe=U%P,_e=pe%ie.boundary,Ye=pe+_e;U+=_e,Ye!==0&&P-Ye<ie.storage&&(U+=P-Ye),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=U,U+=ie.storage}}}const T=U%P;return T>0&&(U+=P-T),N.__size=U,N.__cache={},this}function y(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(L.boundary=16,L.storage=N.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",N),L}function D(N){const L=N.target;L.removeEventListener("dispose",D);const U=d.indexOf(L.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(c[L.id]),delete c[L.id],delete f[L.id]}function V(){for(const N in c)o.deleteBuffer(c[N]);d=[],c={},f={}}return{bind:m,update:g,dispose:V}}const qw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function Yw(){return aa===null&&(aa=new OE(qw,16,16,tr,da),aa.name="DFG_LUT",aa.minFilter=Fn,aa.magFilter=Fn,aa.wrapS=Oa,aa.wrapT=Oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class Zw{constructor(t={}){const{canvas:i=lE(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:b=mi}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const C=b,M=new Set([$p,Jp,Qp]),y=new Set([mi,fa,yl,bl,Zp,Kp]),D=new Uint32Array(4),V=new Int32Array(4),N=new fe;let L=null,U=null;const P=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let j=!1,K=null,ae=null,X=null,ee=null;this._outputColorSpace=Ci;let k=0,q=0,ce=null,ie=-1,pe=null;const _e=new ln,Ye=new ln;let We=null;const B=new Ut(0);let me=0,Re=i.width,Q=i.height,he=1,Ae=null,we=null;const ge=new ln(0,0,Re,Q),Ce=new ln(0,0,Re,Q);let zt=!1;const dt=new sm;let xt=!1,yt=!1;const be=new hn,Ne=new fe,rt=new ln,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Jt(){return ce===null?he:1}let Y=r;function sn(w,H){return i.getContext(w,H)}let Ht,I,E,te,le,xe,De,Oe,ve,Ee,Le,nt,Fe,Be,Xe,at,ht,W,Ue,Me,Ie,je,Te;try{const w={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qp}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",pt,!1),i.addEventListener("webglcontextcreationerror",ni,!1),Y===null){const H="webgl2";if(Y=sn(H,w),Y===null)throw sn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(w){throw i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),Gt("WebGLRenderer: "+w.message),w}function et(){Ht=new Y2(Y),Ht.init(),Ie=new Fw(Y,Ht),I=new B2(Y,Ht,t,Ie),E=new zw(Y,Ht),I.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ae=Y.createFramebuffer(),X=Y.createFramebuffer(),ee=Y.createFramebuffer(),te=new Q2(Y),le=new Mw,xe=new Bw(Y,Ht,E,le,I,Ie,te),De=new q2(F),Oe=new $E(Y),je=new P2(Y,Oe),ve=new Z2(Y,Oe,te,je),Ee=new $2(Y,ve,Oe,je,te),W=new J2(Y,I,xe),Xe=new F2(le),Le=new bw(F,De,Ht,I,je,Xe),nt=new Xw(F,le),Fe=new Tw,Be=new Dw(Ht),ht=new I2(F,De,E,Ee,A,m),at=new Pw(F,Ee,I),Te=new Ww(Y,te,I,E),Ue=new z2(Y,Ht,te),Me=new K2(Y,Ht,te),te.programs=Le.programs,F.capabilities=I,F.extensions=Ht,F.properties=le,F.renderLists=Fe,F.shadowMap=at,F.state=E,F.info=te}C!==mi&&(O=new t3(C,i.width,i.height,h,c,f));const ke=new kw(F,Y);this.xr=ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(Re,Q,!1))},this.getSize=function(w){return w.set(Re,Q)},this.setSize=function(w,H,de=!0){if(ke.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=w,Q=H,i.width=Math.floor(w*he),i.height=Math.floor(H*he),de===!0&&(i.style.width=w+"px",i.style.height=H+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Re*he,Q*he).floor()},this.setDrawingBufferSize=function(w,H,de){Re=w,Q=H,he=de,i.width=Math.floor(w*de),i.height=Math.floor(H*de),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(C===mi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(_e)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,H,de,se){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,H,de,se),E.viewport(_e.copy(ge).multiplyScalar(he).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,H,de,se){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,H,de,se),E.scissor(Ye.copy(Ce).multiplyScalar(he).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){E.setScissorTest(zt=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,de=!0){let se=0;if(w){let re=!1;if(ce!==null){const He=ce.texture.format;re=M.has(He)}if(re){const He=ce.texture.type,qe=y.has(He),Pe=ht.getClearColor(),Qe=ht.getClearAlpha(),Je=Pe.r,ct=Pe.g,mt=Pe.b;qe?(D[0]=Je,D[1]=ct,D[2]=mt,D[3]=Qe,Y.clearBufferuiv(Y.COLOR,0,D)):(V[0]=Je,V[1]=ct,V[2]=mt,V[3]=Qe,Y.clearBufferiv(Y.COLOR,0,V))}else se|=Y.COLOR_BUFFER_BIT}H&&(se|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(se|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Y.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),K=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),ht.dispose(),Fe.dispose(),Be.dispose(),le.dispose(),De.dispose(),Ee.dispose(),je.dispose(),Te.dispose(),Le.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ms),ke.removeEventListener("sessionend",Ha),ki.stop()};function Ot(w){w.preventDefault(),Iv("WebGLRenderer: Context Lost."),j=!0}function pt(){Iv("WebGLRenderer: Context Restored."),j=!1;const w=te.autoReset,H=at.enabled,de=at.autoUpdate,se=at.needsUpdate,re=at.type;et(),te.autoReset=w,at.enabled=H,at.autoUpdate=de,at.needsUpdate=se,at.type=re}function ni(w){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xi(w){const H=w.target;H.removeEventListener("dispose",xi),Vu(H)}function Vu(w){ir(w),le.remove(w)}function ir(w){const H=le.get(w).programs;H!==void 0&&(H.forEach(function(de){Le.releaseProgram(de)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,de,se,re,He){H===null&&(H=lt);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Pe=xo(w,H,de,se,re);E.setMaterial(se,qe);let Qe=de.index,Je=1;if(se.wireframe===!0){if(Qe=ve.getWireframeAttribute(de),Qe===void 0)return;Je=2}const ct=de.drawRange,mt=de.attributes.position;let Ze=ct.start*Je,Tt=(ct.start+ct.count)*Je;He!==null&&(Ze=Math.max(Ze,He.start*Je),Tt=Math.min(Tt,(He.start+He.count)*Je)),Qe!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Qe.count)):mt!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,mt.count));const bt=Tt-Ze;if(bt<0||bt===1/0)return;je.setup(re,se,Pe,de,Qe);let Kt,jt=Ue;if(Qe!==null&&(Kt=Oe.get(Qe),jt=Me,jt.setIndex(Kt)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*Jt()),jt.setMode(Y.LINES)):jt.setMode(Y.TRIANGLES);else if(re.isLine){let Sn=se.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*Jt()),re.isLineSegments?jt.setMode(Y.LINES):re.isLineLoop?jt.setMode(Y.LINE_LOOP):jt.setMode(Y.LINE_STRIP)}else re.isPoints?jt.setMode(Y.POINTS):re.isSprite&&jt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Sn=re._multiDrawStarts,Ge=re._multiDrawCounts,cn=re._multiDrawCount,It=Qe?Oe.get(Qe).bytesPerElement:1,Gn=le.get(se).currentProgram.getUniforms();for(let ii=0;ii<cn;ii++)Gn.setValue(Y,"_gl_DrawID",ii),jt.render(Sn[ii]/It,Ge[ii])}else if(re.isInstancedMesh)jt.renderInstances(Ze,bt,re.count);else if(de.isInstancedBufferGeometry){const Sn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ge=Math.min(de.instanceCount,Sn);jt.renderInstances(Ze,bt,Ge)}else jt.render(Ze,bt)};function bs(w,H,de,se){K!==null&&w.isNodeMaterial&&K.setObject(se,w),xt===!0&&Xe.setState(w,de,!1),w.transparent===!0&&w.side===oa&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,Es(w,H,se),w.side=$s,w.needsUpdate=!0,Es(w,H,se),w.side=oa):Es(w,H,se)}this.compile=function(w,H,de=null){de===null&&(de=w),K!==null&&K.renderStart(w,H,de),U=Be.get(de),U.init(H),T.push(U),de.traverseVisible(function(re){re.isLight&&re.layers.test(H.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),w!==de&&w.traverseVisible(function(re){re.isLight&&re.layers.test(H.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights(),K!==null&&K.updateLights(U.state.lightsArray),yt=this.localClippingEnabled,xt=Xe.init(this.clippingPlanes,yt),xt===!0&&Xe.setGlobalState(this.clippingPlanes,H),K!==null&&at.render(U.state.shadowsArray,de,H);const se=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const He=re.material;if(He)if(Array.isArray(He))for(let qe=0;qe<He.length;qe++){const Pe=He[qe];bs(Pe,de,H,re),se.add(Pe)}else bs(He,de,H,re),se.add(He)}),U=T.pop(),K!==null&&K.renderEnd(),se},this.compileAsync=function(w,H,de=null){const se=this.compile(w,H,de);return new Promise(re=>{function He(){if(se.forEach(function(qe){const Qe=le.get(qe).currentProgram;(Qe===void 0||Qe.isReady())&&se.delete(qe)}),se.size===0){re(w);return}setTimeout(He,10)}Ht.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Fa=null;function pa(w){Fa&&Fa(w)}function Ms(){ki.stop()}function Ha(){ki.start()}const ki=new XS;ki.setAnimationLoop(pa),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(w){Fa=w,ke.setAnimationLoop(w),w===null?ki.stop():ki.start()},ke.addEventListener("sessionstart",Ms),ke.addEventListener("sessionend",Ha),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;K!==null&&K.renderStart(w,H);const de=ke.enabled===!0&&ke.isPresenting===!0,se=O!==null&&(ce===null||de)&&O.begin(F,ce);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(H),H=ke.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,H,ce),U=Be.get(w,T.length),U.init(H),U.state.textureUnits=xe.getTextureUnits(),T.push(U),be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),dt.setFromProjectionMatrix(be,ca,H.reversedDepth),yt=this.localClippingEnabled,xt=Xe.init(this.clippingPlanes,yt),L=Fe.get(w,P.length),L.init(),P.push(L),ke.enabled===!0&&ke.isPresenting===!0){const qe=F.xr.getDepthSensingMesh();qe!==null&&fo(qe,H,-1/0,F.sortObjects)}fo(w,H,0,F.sortObjects),L.finish(),K!==null&&K.updateLights(U.state.lightsArray),F.sortObjects===!0&&L.sort(Ae,we),tt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,tt&&ht.addToRenderList(L,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Xe.beginShadows();const re=U.state.shadowsArray;if(at.render(re,w,H),xt===!0&&Xe.endShadows(),(se&&O.hasRenderPass())===!1){const qe=L.opaque,Pe=L.transmissive;if(U.setupLights(),H.isArrayCamera){const Qe=H.cameras;if(Pe.length>0)for(let Je=0,ct=Qe.length;Je<ct;Je++){const mt=Qe[Je];ar(qe,Pe,w,mt)}tt&&ht.render(w);for(let Je=0,ct=Qe.length;Je<ct;Je++){const mt=Qe[Je];ho(L,w,mt,mt.viewport)}}else Pe.length>0&&ar(qe,Pe,w,H),tt&&ht.render(w),ho(L,w,H)}ce!==null&&q===0&&(xe.updateMultisampleRenderTarget(ce),xe.updateRenderTargetMipmap(ce)),se&&O.end(F),w.isScene===!0&&w.onAfterRender(F,w,H),je.resetDefaultState(),ie=-1,pe=null,T.pop(),T.length>0?(U=T[T.length-1],xe.setTextureUnits(U.state.textureUnits),xt===!0&&Xe.setGlobalState(F.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?L=P[P.length-1]:L=null,K!==null&&K.renderEnd()};function fo(w,H,de,se){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)U.pushLightProbeGrid(w);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(dt)){se&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const qe=Ee.update(w),Pe=w.material;Pe.visible&&L.push(w,qe,Pe,de,rt.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(dt))){const qe=Ee.update(w),Pe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),rt.copy(qe.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(Pe)){const Qe=qe.groups;for(let Je=0,ct=Qe.length;Je<ct;Je++){const mt=Qe[Je],Ze=Pe[mt.materialIndex];Ze&&Ze.visible&&L.push(w,qe,Ze,de,rt.z,mt,H)}}else Pe.visible&&L.push(w,qe,Pe,de,rt.z,null,H)}}const He=w.children;for(let qe=0,Pe=He.length;qe<Pe;qe++)fo(He[qe],H,de,se)}function ho(w,H,de,se){const{opaque:re,transmissive:He,transparent:qe}=w;U.setupLightsView(de),xt===!0&&Xe.setGlobalState(F.clippingPlanes,de),se&&E.viewport(_e.copy(se)),re.length>0&&ji(re,H,de),He.length>0&&ji(He,H,de),qe.length>0&&ji(qe,H,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ar(w,H,de,se){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const Ze=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new Gi(1,1,{generateMipmaps:!0,type:Ze?da:mi,minFilter:Qs,samples:Math.max(4,I.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const He=U.state.transmissionRenderTarget[se.id],qe=se.viewport||_e;He.setSize(qe.z*F.transmissionResolutionScale,qe.w*F.transmissionResolutionScale);const Pe=F.getRenderTarget(),Qe=F.getActiveCubeFace(),Je=F.getActiveMipmapLevel();F.setRenderTarget(He),F.getClearColor(B),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),tt&&ht.render(de);const ct=F.toneMapping;F.toneMapping=ua;const mt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),xt===!0&&Xe.setGlobalState(F.clippingPlanes,se),ji(w,de,se),xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Tt=0,bt=H.length;Tt<bt;Tt++){const Kt=H[Tt],{object:jt,geometry:Sn,material:Ge,group:cn}=Kt;if(Ge.side===oa&&jt.layers.test(se.layers)){const It=Ge.side;Ge.side=qn,Ge.needsUpdate=!0,Cl(jt,de,se,Sn,Ge,cn),Ge.side=It,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He))}F.setRenderTarget(Pe,Qe,Je),F.setClearColor(B,me),mt!==void 0&&(se.viewport=mt),F.toneMapping=ct}function ji(w,H,de){const se=H.isScene===!0?H.overrideMaterial:null;for(let re=0,He=w.length;re<He;re++){const qe=w[re],{object:Pe,geometry:Qe,group:Je}=qe;let ct=qe.material;ct.allowOverride===!0&&se!==null&&(ct=se),Pe.layers.test(de.layers)&&Cl(Pe,H,de,Qe,ct,Je)}}function Cl(w,H,de,se,re,He){K!==null&&re.isNodeMaterial&&K.setObject(w,re),w.onBeforeRender(F,H,de,se,re,He),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(F,H,de,se,w,He),re.transparent===!0&&re.side===oa&&re.forceSinglePass===!1?(re.side=qn,re.needsUpdate=!0,F.renderBufferDirect(de,H,se,re,w,He),re.side=$s,re.needsUpdate=!0,F.renderBufferDirect(de,H,se,re,w,He),re.side=oa):F.renderBufferDirect(de,H,se,re,w,He),w.onAfterRender(F,H,de,se,re,He)}function Es(w,H,de){H.isScene!==!0&&(H=lt);const se=le.get(w),re=U.state.lights,He=U.state.shadowsArray,qe=re.state.version,Pe=Le.getParameters(w,re.state,He,H,de,U.state.lightProbeGridArray),Qe=Le.getProgramCacheKey(Pe);let Je=se.programs;se.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,se.fog=H.fog;const ct=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;se.envMap=De.get(w.envMap||se.environment,ct),se.envMapRotation=se.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",xi),Je=new Map,se.programs=Je);let mt=Je.get(Qe);if(mt!==void 0){if(se.currentProgram===mt&&se.lightsStateVersion===qe)return mo(w,Pe),mt}else Pe.uniforms=Le.getUniforms(w),K!==null&&w.isNodeMaterial&&K.build(w,de,Pe),w.onBeforeCompile(Pe,F),mt=Le.acquireProgram(Pe,Qe),Je.set(Qe,mt),se.uniforms=Pe.uniforms;const Ze=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Xe.uniform),mo(w,Pe),se.needsLights=Dl(w),se.lightsStateVersion=qe,se.needsLights&&(Ze.ambientLightColor.value=re.state.ambient,Ze.lightProbe.value=re.state.probe,Ze.sunLights.value=re.state.sun,Ze.sunLightShadows.value=re.state.sunShadow,Ze.directionalLights.value=re.state.directional,Ze.directionalLightShadows.value=re.state.directionalShadow,Ze.spotLights.value=re.state.spot,Ze.spotLightShadows.value=re.state.spotShadow,Ze.rectAreaLights.value=re.state.rectArea,Ze.ltc_1.value=re.state.rectAreaLTC1,Ze.ltc_2.value=re.state.rectAreaLTC2,Ze.pointLights.value=re.state.point,Ze.pointLightShadows.value=re.state.pointShadow,Ze.hemisphereLights.value=re.state.hemi,Ze.sunShadowMatrix.value=re.state.sunShadowMatrix,Ze.sunShadowCascade.value=re.state.sunShadowCascade,Ze.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ze.spotLightMatrix.value=re.state.spotLightMatrix,Ze.spotLightMap.value=re.state.spotLightMap,Ze.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=U.state.lightProbeGridArray.length>0,se.currentProgram=mt,se.uniformsList=null,mt}function po(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Eu.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function mo(w,H){const de=le.get(w);de.outputColorSpace=H.outputColorSpace,de.batching=H.batching,de.batchingColor=H.batchingColor,de.instancing=H.instancing,de.instancingColor=H.instancingColor,de.instancingMorph=H.instancingMorph,de.skinning=H.skinning,de.morphTargets=H.morphTargets,de.morphNormals=H.morphNormals,de.morphColors=H.morphColors,de.morphTargetsCount=H.morphTargetsCount,de.numClippingPlanes=H.numClippingPlanes,de.numIntersection=H.numClipIntersection,de.vertexAlphas=H.vertexAlphas,de.vertexTangents=H.vertexTangents,de.toneMapping=H.toneMapping}function go(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(H.matrixWorld);for(let de=0,se=w.length;de<se;de++){const re=w[de];if(re.texture!==null&&re.boundingBox.containsPoint(N))return re}return null}function xo(w,H,de,se,re){H.isScene!==!0&&(H=lt),xe.resetTextureUnits();const He=H.fog,qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?H.environment:null,Pe=ce===null?F.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Pt.workingColorSpace,Qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Je=De.get(se.envMap||qe,Qe),ct=se.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,mt=!!de.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!de.morphAttributes.position,Tt=!!de.morphAttributes.normal,bt=!!de.morphAttributes.color;let Kt=ua;se.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Kt=F.toneMapping);const jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Sn=jt!==void 0?jt.length:0,Ge=le.get(se),cn=U.state.lights;if(xt===!0&&(yt===!0||w!==pe)){const Rt=w===pe&&se.id===ie;Xe.setState(se,w,Rt)}let It=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==cn.state.version||Ge.outputColorSpace!==Pe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==Je||se.fog===!0&&Ge.fog!==He||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Xe.numPlanes||Ge.numIntersection!==Xe.numIntersection)||Ge.vertexAlphas!==ct||Ge.vertexTangents!==mt||Ge.morphTargets!==Ze||Ge.morphNormals!==Tt||Ge.morphColors!==bt||Ge.toneMapping!==Kt||Ge.morphTargetsCount!==Sn||!!Ge.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,Ge.__version=se.version);let Gn=Ge.currentProgram;It===!0&&(Gn=Es(se,H,re),K&&se.isNodeMaterial&&K.onUpdateProgram(se,Gn,Ge));let ii=!1,Xi=!1,Mt=!1;const Vt=Gn.getUniforms(),en=Ge.uniforms;if(E.useProgram(Gn.program)&&(ii=!0,Xi=!0,Mt=!0),se.id!==ie&&(ie=se.id,Xi=!0),Ge.needsLights){const Rt=go(U.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Rt&&(Ge.lightProbeGrid=Rt,Xi=!0)}if(ii||pe!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(Y,"projectionMatrix",w.projectionMatrix),Vt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const un=Vt.map.cameraPosition;un!==void 0&&un.setValue(Y,Ne.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Vt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),pe!==w&&(pe=w,Xi=!0,Mt=!0)}if(Ge.needsLights&&(cn.state.sunShadowMap.length>0&&Vt.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,xe),cn.state.directionalShadowMap.length>0&&Vt.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,xe),cn.state.spotShadowMap.length>0&&Vt.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,xe),cn.state.pointShadowMap.length>0&&Vt.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,xe)),re.isSkinnedMesh){Vt.setOptional(Y,re,"bindMatrix"),Vt.setOptional(Y,re,"bindMatrixInverse");const Rt=re.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Vt.setValue(Y,"boneTexture",Rt.boneTexture,xe))}re.isBatchedMesh&&(Vt.setOptional(Y,re,"batchingTexture"),Vt.setValue(Y,"batchingTexture",re._matricesTexture,xe),Vt.setOptional(Y,re,"batchingIdTexture"),Vt.setValue(Y,"batchingIdTexture",re._indirectTexture,xe),Vt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&Vt.setValue(Y,"batchingColorTexture",re._colorsTexture,xe));const ai=de.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&W.update(re,de,Gn),(Xi||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Vt.setValue(Y,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Yw()),Xi){if(Vt.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Ge.needsLights&&Nl(en,Mt),He&&se.fog===!0&&nt.refreshFogUniforms(en,He),nt.refreshMaterialUniforms(en,se,he,Q,U.state.transmissionRenderTarget[w.id]),Ge.needsLights&&Ge.lightProbeGrid){const Rt=Ge.lightProbeGrid;en.probesSH.value=Rt.texture,en.probesMin.value.copy(Rt.boundingBox.min),en.probesMax.value.copy(Rt.boundingBox.max),en.probesResolution.value.copy(Rt.resolution)}Eu.upload(Y,po(Ge),en,xe)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Eu.upload(Y,po(Ge),en,xe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(Y,"center",re.center),Vt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(Y,"normalMatrix",re.normalMatrix),Vt.setValue(Y,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Rt=se.uniformsGroups;for(let un=0,ma=Rt.length;un<ma;un++){const Ul=Rt[un];Te.update(Ul,Gn),Te.bind(Ul,Gn)}}return Gn}function Nl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Dl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(w,H,de){const se=le.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(w.texture).__webglTexture=H,le.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:de,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const de=le.get(w);de.__webglFramebuffer=H,de.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,de=0){ce=w,k=H,q=de;let se=null,re=!1,He=!1;if(w){const Pe=le.get(w);if(Pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Pe.__webglFramebuffer),_e.copy(w.viewport),Ye.copy(w.scissor),We=w.scissorTest,E.viewport(_e),E.scissor(Ye),E.setScissorTest(We),ie=-1;return}else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(w);else if(Pe.__hasExternalTextures)xe.rebindTextures(w,le.get(w.texture).__webglTexture,le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ct=w.depthTexture;if(Pe.__boundDepthTexture!==ct){if(ct!==null&&le.has(ct)&&(w.width!==ct.image.width||w.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(He=!0);const Je=le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[H])?se=Je[H][de]:se=Je[H],re=!0):w.samples>0&&xe.useMultisampledRTT(w)===!1?se=le.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?se=Je[de]:se=Je,_e.copy(w.viewport),Ye.copy(w.scissor),We=w.scissorTest}else _e.copy(ge).multiplyScalar(he).floor(),Ye.copy(Ce).multiplyScalar(he).floor(),We=zt;if(de!==0&&(se=ae),E.bindFramebuffer(Y.FRAMEBUFFER,se)&&E.drawBuffers(w,se),E.viewport(_e),E.scissor(Ye),E.setScissorTest(We),re){const Pe=le.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,de)}else if(He){const Pe=H;for(let Qe=0;Qe<w.textures.length;Qe++){const Je=le.get(w.textures[Qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Qe,Je.__webglTexture,de,Pe)}}else if(w!==null&&de!==0){const Pe=le.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pe.__webglTexture,de)}ie=-1};function vi(w){const H=le.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=I.textureFormatReadable(w.format),H.__typeReadable=I.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,de,se,re,He,qe,Pe=0){if(!(w&&w.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){E.bindFramebuffer(Y.FRAMEBUFFER,Qe);try{const Je=w.textures[Pe],ct=Je.format,mt=Je.type;w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pe);const Ze=vi(Je);if(Ze.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-se&&de>=0&&de<=w.height-re&&Y.readPixels(H,de,se,re,Ie.convert(ct),Ie.convert(mt),He)}finally{const Je=ce!==null?le.get(ce).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,H,de,se,re,He,qe,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe)if(H>=0&&H<=w.width-se&&de>=0&&de<=w.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,Qe);const Je=w.textures[Pe],ct=Je.format,mt=Je.type;w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pe);const Ze=vi(Je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Tt),Y.bufferData(Y.PIXEL_PACK_BUFFER,He.byteLength,Y.STREAM_READ),Y.readPixels(H,de,se,re,Ie.convert(ct),Ie.convert(mt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const bt=ce!==null?le.get(ce).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,bt);const Kt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await cE(Y,Kt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Tt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,He),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Tt),Y.deleteSync(Kt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,de=0){const se=Math.pow(2,-de),re=Math.floor(w.image.width*se),He=Math.floor(w.image.height*se),qe=H!==null?H.x:0,Pe=H!==null?H.y:0;xe.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,de,0,0,qe,Pe,re,He),E.unbindTexture()},this.copyTextureToTexture=function(w,H,de=null,se=null,re=0,He=0){let qe,Pe,Qe,Je,ct,mt,Ze,Tt,bt;const Kt=w.isCompressedTexture?w.mipmaps[He]:w.image;if(de!==null)qe=de.max.x-de.min.x,Pe=de.max.y-de.min.y,Qe=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,ct=de.min.y,mt=de.isBox3?de.min.z:0;else{const en=Math.pow(2,-re);qe=Math.floor(Kt.width*en),Pe=Math.floor(Kt.height*en),w.isDataArrayTexture?Qe=Kt.depth:w.isData3DTexture?Qe=Math.floor(Kt.depth*en):Qe=1,Je=0,ct=0,mt=0}se!==null?(Ze=se.x,Tt=se.y,bt=se.z):(Ze=0,Tt=0,bt=0);const jt=Ie.convert(H.format),Sn=Ie.convert(H.type);let Ge;H.isData3DTexture?(xe.setTexture3D(H,0),Ge=Y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(xe.setTexture2DArray(H,0),Ge=Y.TEXTURE_2D_ARRAY):(xe.setTexture2D(H,0),Ge=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);const cn=E.getParameter(Y.UNPACK_ROW_LENGTH),It=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ii=E.getParameter(Y.UNPACK_SKIP_ROWS),Xi=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ct),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);const Mt=w.isDataArrayTexture||w.isData3DTexture,Vt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const en=le.get(w),ai=le.get(H),Rt=le.get(en.__renderTarget),un=le.get(ai.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Rt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ma=0;ma<Qe;ma++)Mt&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(w).__webglTexture,re,mt+ma),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(H).__webglTexture,He,bt+ma)),Y.blitFramebuffer(Je,ct,qe,Pe,Ze,Tt,qe,Pe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||le.has(w)){const en=le.get(w),ai=le.get(H);E.bindFramebuffer(Y.READ_FRAMEBUFFER,X),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ee);for(let Rt=0;Rt<Qe;Rt++)Mt?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,en.__webglTexture,re,mt+Rt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,en.__webglTexture,re),Vt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ai.__webglTexture,He,bt+Rt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ai.__webglTexture,He),re!==0?Y.blitFramebuffer(Je,ct,qe,Pe,Ze,Tt,qe,Pe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Vt?Y.copyTexSubImage3D(Ge,He,Ze,Tt,bt+Rt,Je,ct,qe,Pe):Y.copyTexSubImage2D(Ge,He,Ze,Tt,Je,ct,qe,Pe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Vt?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(Ge,He,Ze,Tt,bt,qe,Pe,Qe,jt,Sn,Kt.data):H.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ge,He,Ze,Tt,bt,qe,Pe,Qe,jt,Kt.data):Y.texSubImage3D(Ge,He,Ze,Tt,bt,qe,Pe,Qe,jt,Sn,Kt):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,He,Ze,Tt,qe,Pe,jt,Sn,Kt.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,He,Ze,Tt,Kt.width,Kt.height,jt,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,He,Ze,Tt,qe,Pe,jt,Sn,Kt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ii),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Xi),He===0&&H.generateMipmaps&&Y.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(w){le.get(w).__webglFramebuffer===void 0&&xe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xe.setTextureCube(w,0):w.isData3DTexture?xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xe.setTexture2DArray(w,0):xe.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){k=0,q=0,ce=null,E.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pt._getUnpackColorSpace()}}const $S=()=>{const o=st.useRef(null);return st.useEffect(()=>{const t=o.current;if(!t)return;const i=t.clientWidth,r=t.clientHeight,c=new TE,f=new pi(45,i/r,.1,100);f.position.set(0,0,7.5);const d=new Zw({alpha:!0,antialias:!0});d.setSize(i,r),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,d.shadowMap.type=mS,t.appendChild(d.domElement);const h=new gl;c.add(h);const m=new VE({color:16777215,transparent:!0,opacity:.28,roughness:.1,metalness:.1,transmission:.9,ior:1.5,reflectivity:.5,clearcoat:1,clearcoatRoughness:.1}),g=new Ss(1.2,1.2,3.2,32,1,!0),S=new On(g,m);h.add(S);const v=new Lu(1.2,32,16,0,Math.PI*2,0,Math.PI/2),_=new On(v,m);_.position.y=1.6,h.add(_);const b=new rm(.2,.4,16),A=new On(b,m);A.position.y=2.8,h.add(A);const C=new Ss(1.25,1.25,.9,32),M=new xl({color:3881011,roughness:.7,metalness:.2}),y=new On(C,M);y.position.y=-2.05,h.add(y);const D=new Ss(.08,.08,.7,16),V=new xl({color:14703951,roughness:.3,metalness:.8});[0,45,90,135,180,225,270,315].forEach(we=>{const ge=we*Math.PI/180,Ce=new On(D,V);Ce.position.set(Math.cos(ge)*.75,-2.7,Math.sin(ge)*.75),h.add(Ce)});const L=new Ss(.8,.8,2,16,1,!0),U=new xl({color:5656650,roughness:.5,metalness:.8,side:oa}),P=new On(L,U);P.position.y=.2,h.add(P);const T=new Lu(1.15,32,16,0,Math.PI*2,0,Math.PI/3),O=new xl({color:13421772,roughness:.1,metalness:.95,side:qn,transparent:!0,opacity:.75}),F=new On(T,O);F.position.y=1.6,h.add(F);const j=new Ss(.06,.06,1.8,16),K=new am({color:15364706}),ae=new On(j,K);ae.position.y=.2,h.add(ae);const X=new WE(14703951,3.2,5);X.position.set(0,.2,0),h.add(X);const ee=new YE(16775408,.75);c.add(ee);const k=new t_(16775408,1.5);k.position.set(4,5,4),c.add(k);const q=new t_(6386320,1.2);q.position.set(-4,-2,-4),c.add(q);let ce=!1,ie={x:0,y:0},pe=.3,_e=.15;const Ye=we=>{ce=!0,ie={x:we.clientX,y:we.clientY}},We=we=>{if(!ce){const zt=t.getBoundingClientRect(),dt=(we.clientX-zt.left)/i*2-1,xt=-((we.clientY-zt.top)/r*2-1);pe=dt*.6,_e=-xt*.4+.1;return}const ge=we.clientX-ie.x,Ce=we.clientY-ie.y;pe+=ge*.01,_e+=Ce*.01,ie={x:we.clientX,y:we.clientY}},B=()=>{ce=!1},me=d.domElement;me.addEventListener("mousedown",Ye),window.addEventListener("mousemove",We),window.addEventListener("mouseup",B);const Re=()=>{if(!t)return;const we=t.clientWidth,ge=t.clientHeight;f.aspect=we/ge,f.updateProjectionMatrix(),d.setSize(we,ge)};window.addEventListener("resize",Re);let Q,he=new QE;const Ae=()=>{Q=requestAnimationFrame(Ae);const we=he.getElapsedTime();ce?(h.rotation.y+=(pe-h.rotation.y)*.1,h.rotation.x+=(_e-h.rotation.x)*.1):(h.rotation.y+=(pe+Math.sin(we*.8)*.15-h.rotation.y)*.05,h.rotation.x+=(_e+Math.cos(we*.6)*.08-h.rotation.x)*.05),X.intensity=2.4+Math.sin(we*4)*.4,d.render(c,f)};return Ae(),()=>{cancelAnimationFrame(Q),me.removeEventListener("mousedown",Ye),window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",B),window.removeEventListener("resize",Re),t&&d.domElement&&t.removeChild(d.domElement),d.dispose()}},[]),p.jsxs("div",{className:"relative w-full h-[320px] sm:h-[380px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing",children:[p.jsx("div",{ref:o,className:"w-full h-full"}),p.jsx("div",{className:"absolute bottom-2 right-3 text-[10px] font-mono text-chassis-600 bg-chassis-950/80 px-2 py-0.5 rounded border border-chassis-800 pointer-events-none",children:"3D VACUUM TUBE // INTERACTIVE DRAG"})]})},A_=()=>{const{navigateTo:o,openRepairModal:t,repairs:i,about:r,isAdmin:c,openEditor:f}=gi(),d=Tu[0],h=Au[0];return p.jsxs("div",{className:"space-y-24 max-w-5xl mx-auto",children:[p.jsxs("section",{className:"pt-6 sm:pt-12 space-y-8 border-b border-chassis-800/60 pb-16",children:[p.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-chassis-500",children:[p.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-copper-400 animate-pulse"}),p.jsxs("span",{children:[r.name||"Shaoor Ahmad"," · B.Tech EnTC Student"]}),p.jsx("span",{children:"·"}),p.jsx("span",{children:"Pune / Mumbai"})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h1",{className:"font-serif text-5xl sm:text-7xl text-chassis-100 tracking-tight font-normal",children:"RetroForge"}),p.jsx("p",{className:"font-serif text-2xl sm:text-3xl text-copper-400 max-w-3xl leading-relaxed font-normal",children:"I take apart things other people throw away — radios, phones, tape decks from the 1940s to the 2000s — and figure out what's inside them."})]}),p.jsx("p",{className:"text-sm sm:text-base text-chassis-400 font-sans max-w-2xl leading-relaxed",children:"Currently documenting vintage radio superhets, telephony handsets, and building an 8-bit computer from bare logic ICs."}),p.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2 text-xs font-mono",children:[p.jsxs("button",{onClick:()=>o("bench"),className:"flex items-center gap-1 text-copper-400 hover:text-copper-300 transition-colors cursor-pointer",children:[p.jsx("span",{children:"01 The Bench"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]}),p.jsx("span",{className:"text-chassis-700",children:"·"}),p.jsxs("button",{onClick:()=>o("builds"),className:"flex items-center gap-1 text-bakelite-400 hover:text-bakelite-300 transition-colors cursor-pointer",children:[p.jsx("span",{children:"02 Builds"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]}),p.jsx("span",{className:"text-chassis-700",children:"·"}),p.jsxs("button",{onClick:()=>o("log"),className:"flex items-center gap-1 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer",children:[p.jsx("span",{children:"03 Log"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]}),p.jsx("span",{className:"text-chassis-700",children:"·"}),p.jsxs("button",{onClick:()=>o("junk"),className:"flex items-center gap-1 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer",children:[p.jsx("span",{children:"04 Send Me Your Junk"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})]})]}),p.jsxs("section",{className:"space-y-8",children:[p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[p.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400",children:[p.jsx("span",{className:"text-chassis-600",children:"00 /"}),p.jsx("span",{className:"uppercase tracking-wider",children:"INTRODUCTION"})]}),c&&p.jsxs("button",{onClick:()=>f("about",null),className:"flex items-center gap-1 text-xs font-mono text-copper-400 hover:underline cursor-pointer",children:[p.jsx(Iu,{className:"w-3 h-3"}),p.jsx("span",{children:"Edit Bio"})]})]}),p.jsxs("h2",{className:"font-serif text-3xl sm:text-4xl text-chassis-100",children:["Hi, I'm ",r.name||"Shaoor Ahmad"]}),p.jsx("p",{className:"text-sm text-chassis-300 leading-relaxed font-sans pt-1 whitespace-pre-line",children:r.bio}),p.jsx("div",{className:"pt-2 flex items-center gap-4 text-xs font-mono",children:p.jsxs("button",{onClick:()=>o("about"),className:"text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer",children:[p.jsx("span",{children:"Read more about my background"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})})]}),p.jsx("div",{className:"lg:col-span-5 bg-chassis-900/60 rounded-lg border border-chassis-800/80 overflow-hidden shadow-sm",children:p.jsx($S,{})})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"rounded-lg overflow-hidden border border-chassis-800/80 bg-chassis-900/40",children:[p.jsxs("div",{className:"p-3 bg-chassis-950/90 border-b border-chassis-800/80 flex items-center justify-between text-xs font-mono text-chassis-500",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-copper-500 animate-pulse"}),p.jsx("span",{children:"RETROFORGE BENCH // ACTIVE PROTOTYPING"})]}),p.jsx("span",{className:"text-copper-400",children:"Soldering Station · Perfboard Bus Routing · Flux Extraction"})]}),p.jsxs("div",{className:"relative group",children:[p.jsx("img",{src:r.workspaceImage,alt:"Shaoor Ahmad Soldering at the Bench",className:"w-full h-64 sm:h-96 object-cover brightness-95 contrast-105",loading:"lazy"}),p.jsxs("div",{className:"absolute bottom-0 inset-x-0 bg-gradient-to-t from-chassis-950 via-chassis-950/80 to-transparent p-4 sm:p-5",children:[p.jsx("p",{className:"text-xs sm:text-sm font-mono text-chassis-100 font-medium",children:"Shaoor Ahmad building point-to-point logic circuits & testing vintage RF stages on the bench."}),p.jsx("p",{className:"text-[11px] font-mono text-chassis-400 mt-0.5",children:"Real hands-on teardowns: Murphy India Sinus Transistor Radio, Philips Portable Superhet & Panasonic Cordless Handset."})]})]})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[p.jsxs("div",{onClick:()=>t("murphy-mini-master-4"),className:"group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2",children:[p.jsx("div",{className:"h-28 rounded overflow-hidden border border-chassis-800",children:p.jsx("img",{src:"/images/murphy-sinus-internal-chassis.jpg",alt:"Murphy Sinus Chassis Teardown",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),p.jsxs("div",{className:"text-xs font-mono",children:[p.jsx("span",{className:"text-copper-400 font-bold block",children:"Murphy Sinus Chassis"}),p.jsx("span",{className:"text-chassis-500 text-[11px]",children:"3Ω Speaker · Ferrite Bar · IF Cans"})]})]}),p.jsxs("div",{onClick:()=>t("philips-portable-radio"),className:"group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2",children:[p.jsx("div",{className:"h-28 rounded overflow-hidden border border-chassis-800",children:p.jsx("img",{src:"/images/philips-radio-teardown-open.jpg",alt:"Philips Radio Teardown",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),p.jsxs("div",{className:"text-xs font-mono",children:[p.jsx("span",{className:"text-copper-400 font-bold block",children:"Philips Multi-Band Radio"}),p.jsx("span",{className:"text-chassis-500 text-[11px]",children:"Internal Transformer & RF PCB"})]})]}),p.jsxs("div",{onClick:()=>t("panasonic-cordless"),className:"group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2",children:[p.jsx("div",{className:"h-28 rounded overflow-hidden border border-chassis-800",children:p.jsx("img",{src:"/images/panasonic-phone-teardown.jpg",alt:"Panasonic Cordless Phone Teardown",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),p.jsxs("div",{className:"text-xs font-mono",children:[p.jsx("span",{className:"text-copper-400 font-bold block",children:"Panasonic Cordless Handset"}),p.jsx("span",{className:"text-chassis-500 text-[11px]",children:"3-Tier Teardown · LCD · Keypad Matrix"})]})]})]})]})]}),p.jsxs("section",{className:"space-y-6 pt-6 border-t border-chassis-800/60",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400 mb-1",children:[p.jsx("span",{className:"text-chassis-600",children:"01 /"}),p.jsx("span",{className:"uppercase tracking-wider",children:"THE BENCH"})]}),p.jsx("h2",{className:"font-serif text-2xl sm:text-3xl text-chassis-100",children:`"Things I've opened up, diagnosed, and brought back."`})]}),p.jsxs("button",{onClick:()=>o("bench"),className:"text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0",children:[p.jsxs("span",{children:["View All (",i.length,")"]}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.slice(0,3).map((m,g)=>p.jsx(pS,{item:m,index:g},m.id))})]}),p.jsxs("section",{className:"space-y-6 pt-6 border-t border-chassis-800/60",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-bakelite-400 mb-1",children:[p.jsx("span",{className:"text-chassis-600",children:"02 /"}),p.jsx("span",{className:"uppercase tracking-wider",children:"BUILDS"})]}),p.jsx("h2",{className:"font-serif text-2xl sm:text-3xl text-chassis-100",children:`"Things I'm making from scratch."`})]}),p.jsxs("button",{onClick:()=>o("builds"),className:"text-xs font-mono text-bakelite-400 hover:text-bakelite-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0",children:[p.jsx("span",{children:"Open Builds Section"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})]}),p.jsxs("div",{onClick:()=>o("builds"),className:"group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-bakelite-500/50 p-6 sm:p-8 rounded-lg transition-all cursor-pointer shadow-sm space-y-6",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 font-mono text-xs border-b border-chassis-800/80 pb-3",children:[p.jsxs("span",{className:"text-bakelite-400 font-bold uppercase tracking-wider",children:[d.title," — ",d.status]}),p.jsxs("div",{className:"flex items-center gap-1 text-chassis-500",children:[p.jsx("span",{children:"View full build log"}),p.jsx(wu,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),p.jsx("p",{className:"text-sm sm:text-base text-chassis-300 font-sans leading-relaxed",children:d.subtitle}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:d.buildLogs.map(m=>p.jsxs("div",{className:"bg-chassis-950 p-4 rounded border border-chassis-800 space-y-1.5",children:[p.jsxs("span",{className:"text-xs font-mono text-bakelite-400 font-bold block",children:["Entry ",m.entryNumber," — ",m.title]}),p.jsx("p",{className:"text-xs text-chassis-400 font-sans leading-relaxed",children:m.content})]},m.entryNumber))}),p.jsx("div",{className:"text-xs font-mono text-chassis-500 italic pt-1",children:d.futureNote})]})]}),p.jsxs("section",{className:"space-y-6 pt-6 border-t border-chassis-800/60",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400 mb-1",children:[p.jsx("span",{className:"text-chassis-600",children:"03 /"}),p.jsx("span",{className:"uppercase tracking-wider",children:"LOG"})]}),p.jsx("h2",{className:"font-serif text-2xl sm:text-3xl text-chassis-100",children:'"Where the mistakes live."'})]}),p.jsxs("button",{onClick:()=>o("log"),className:"text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0",children:[p.jsx("span",{children:"Open Log"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})]}),p.jsxs("article",{onClick:()=>o("log"),className:"group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-chassis-700 p-6 sm:p-8 rounded-lg transition-all cursor-pointer shadow-sm space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-copper-400 border-b border-chassis-800/80 pb-3",children:[p.jsx("span",{className:"font-bold",children:h.title}),p.jsxs("div",{className:"flex items-center gap-1 text-chassis-500",children:[p.jsx("span",{children:h.readingTime}),p.jsx(wu,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),p.jsx("p",{className:"text-sm text-chassis-300 font-sans leading-relaxed",children:h.content})]})]}),p.jsxs("section",{className:"bg-chassis-900/80 border border-chassis-800/80 p-8 rounded-lg space-y-4 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400",children:[p.jsx("span",{className:"text-chassis-600",children:"04 /"}),p.jsx("span",{className:"uppercase tracking-wider",children:"SEND ME YOUR JUNK"})]}),p.jsx("h2",{className:"font-serif text-2xl sm:text-3xl text-chassis-100",children:"Got something old and broken sitting in a cupboard?"}),p.jsx("p",{className:"text-sm text-chassis-300 leading-relaxed font-sans max-w-2xl",children:"If you've got an old radio, phone, tape player, or similar electronics that doesn't work and you don't know why — that's exactly what I'm looking for. No obligation, no charge."}),p.jsx("div",{className:"pt-2",children:p.jsxs("button",{onClick:()=>o("junk"),className:"px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center gap-2 transition-colors cursor-pointer",children:[p.jsx("span",{children:"Open Intake Questionnaire"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})})]})]})},Kw=()=>{const{repairs:o,isAdmin:t,openEditor:i,filterDecade:r,setFilterDecade:c,filterCategory:f,setFilterCategory:d,searchQuery:h,setSearchQuery:m}=gi(),g=["All","1940s","1950s","1960s","1970s","1980s","2000s"],S=["All","Radio","Telephony","Audio","Test Equipment"],v=C=>{on.playSwitch(),c(C)},_=C=>{on.playSwitch(),d(C)},b=()=>{on.playSwitch(),c("All"),d("All"),m("")},A=o.filter(C=>{const M=r==="All"||C.decade===r,y=f==="All"||C.category===f,D=`${C.name} ${C.description||""} ${C.summary||""} ${C.symptom||""} ${C.category} ${C.year}`.toLowerCase(),V=h===""||D.includes(h.toLowerCase());return M&&y&&V});return p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-chassis-800 pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400",children:[p.jsx(T1,{className:"w-4 h-4 text-copper-400"}),p.jsx("span",{className:"uppercase tracking-wider",children:"APPARATUS ARCHIVE & BENCH TEARDOWNS"})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsxs("span",{className:"text-xs font-mono text-chassis-500",children:[A.length," OF ",o.length," SPECIMENS"]}),t&&p.jsxs("button",{onClick:()=>i("repair",null),className:"flex items-center gap-1.5 px-3 py-1 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold transition-colors cursor-pointer",children:[p.jsx(Wp,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Add Teardown"})]})]})]}),p.jsx("h1",{className:"font-serif text-3xl sm:text-4xl text-chassis-100",children:"The Bench: Vintage Electronics Teardowns & Restorations"}),p.jsx("p",{className:"text-sm text-chassis-400 leading-relaxed font-sans max-w-3xl",children:"Detailed teardowns and technical write-ups of restored transistor superhets, rotary telephony apparatus, cordless handsets, and analog audio circuits from the 1940s to 2000s."})]}),p.jsxs("div",{className:"bg-chassis-900/80 border border-chassis-800 rounded-lg p-5 space-y-4 shadow-chassis-raised",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-chassis-800",children:[p.jsxs("div",{className:"relative flex-1",children:[p.jsx(p1,{className:"w-4 h-4 text-chassis-600 absolute left-3 top-1/2 -translate-y-1/2"}),p.jsx("input",{type:"text",placeholder:"Search by model, chassis, category, or component...",value:h,onChange:C=>m(C.target.value),className:"w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-1.5 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"})]}),p.jsxs("button",{onClick:b,className:"flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-chassis-950 border border-chassis-700 hover:text-copper-400 text-chassis-500 transition-colors cursor-pointer flex-shrink-0",children:[p.jsx(J_,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Reset"})]})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[p.jsx("span",{className:"text-[11px] font-mono text-chassis-500 w-24 flex-shrink-0 uppercase",children:"Decade Era:"}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:g.map(C=>p.jsx("button",{onClick:()=>v(C),className:`px-2.5 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${r===C?"bg-copper-500/20 text-copper-400 border-copper-500 font-semibold":"bg-chassis-950 text-chassis-500 border-chassis-800 hover:text-chassis-200"}`,children:C},C))})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[p.jsx("span",{className:"text-[11px] font-mono text-chassis-500 w-24 flex-shrink-0 uppercase",children:"Category:"}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:S.map(C=>p.jsx("button",{onClick:()=>_(C),className:`px-2.5 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${f===C?"bg-copper-500/20 text-copper-400 border-copper-500 font-semibold":"bg-chassis-950 text-chassis-500 border-chassis-800 hover:text-chassis-200"}`,children:C},C))})]})]})]}),A.length===0?p.jsxs("div",{className:"text-center py-16 bg-chassis-900/40 rounded-lg border border-chassis-800 space-y-3 font-mono",children:[p.jsx(V_,{className:"w-8 h-8 text-chassis-600 mx-auto"}),p.jsx("p",{className:"text-sm text-chassis-400",children:"No vintage specimens match the active filters."}),p.jsx("button",{onClick:b,className:"text-xs text-copper-400 underline hover:text-copper-300 cursor-pointer",children:"Clear all filters and search parameters"})]}):p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:A.map((C,M)=>p.jsx(pS,{item:C,index:M},C.id))})]})},Qw=()=>{const o=Tu[0];return p.jsxs("div",{className:"max-w-4xl mx-auto space-y-10",children:[p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3",children:[p.jsx("span",{className:"text-xs font-mono uppercase text-bakelite-400 block",children:`BUILDS — "Things I'm making from scratch."`}),p.jsxs("h1",{className:"font-serif text-3xl sm:text-4xl text-chassis-100",children:[o.title," — ",o.status]}),p.jsx("p",{className:"text-sm text-chassis-300 leading-relaxed font-sans",children:o.subtitle})]}),p.jsxs("div",{className:"space-y-6",children:[o.buildLogs.map(t=>p.jsxs("article",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 space-y-3 shadow-chassis-raised",children:[p.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-bakelite-400 border-b border-chassis-800 pb-2 font-bold",children:[p.jsx(_1,{className:"w-4 h-4"}),p.jsxs("span",{children:["Entry ",t.entryNumber," — ",t.title]})]}),p.jsx("p",{className:"text-sm text-chassis-200 font-sans leading-relaxed",children:t.content})]},t.entryNumber)),p.jsx("div",{className:"p-4 rounded bg-chassis-950 border border-chassis-800 text-xs font-mono text-chassis-500 italic text-center",children:o.futureNote})]})]})},Jw=()=>p.jsxs("div",{className:"max-w-3xl mx-auto space-y-8",children:[p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3",children:[p.jsx("span",{className:"text-xs font-mono uppercase text-copper-400 block",children:'LOG — "Where the mistakes live."'}),p.jsx("h1",{className:"font-serif text-3xl sm:text-4xl text-chassis-100",children:"Raw Bench Logbook"})]}),p.jsx("div",{className:"space-y-6",children:Au.map(o=>p.jsxs("article",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 space-y-4 shadow-chassis-raised",children:[p.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-copper-400 border-b border-chassis-800 pb-3 font-semibold",children:[p.jsx("span",{children:o.title}),p.jsx("span",{className:"text-chassis-600",children:o.readingTime})]}),p.jsx("p",{className:"text-sm text-chassis-200 font-sans leading-relaxed whitespace-pre-line",children:o.content})]},o.id))})]}),$w=()=>{const{submitDonation:o,donations:t}=gi(),[i,r]=st.useState({itemName:"",symptom:"",city:"",transit:"Pickup",contactInfo:""}),[c,f]=st.useState(null),[d,h]=st.useState(""),[m,g]=st.useState(!1),[S,v]=st.useState(null),_=C=>{var y;const M=(y=C.target.files)==null?void 0:y[0];if(M){on.playSwitch(),h(M.name);const D=new FileReader;D.onload=V=>{var N;f((N=V.target)==null?void 0:N.result)},D.readAsDataURL(M)}},b=()=>{on.playSwitch(),r({itemName:"1975 Philips 2-Band Portable Radio",symptom:"Faint buzz from speaker when turned on, but tuning dial produces no stations. Volume dial is scratchy.",city:"Pune",transit:"Pickup",contactInfo:"rahul.vintage@example.com / +91 9876543210"}),f("https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80"),h("philips_radio.jpg")},A=C=>{if(C.preventDefault(),!i.itemName.trim()||!i.symptom.trim()||!i.contactInfo.trim()){alert("Please fill out the required details.");return}g(!0),setTimeout(()=>{const M=o({...i,donorName:i.contactInfo.split(" ")[0]||"Friend of RetroForge",photoUrl:c||""});v(M),g(!1)},500)};return p.jsxs("div",{className:"max-w-3xl mx-auto space-y-10",children:[p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-chassis-800 pb-3",children:[p.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-copper-400",children:"SEND ME YOUR JUNK"}),p.jsxs("button",{onClick:b,className:"text-xs font-mono text-chassis-500 hover:text-copper-400 border border-chassis-700 hover:border-copper-500/50 px-2.5 py-1 rounded bg-chassis-950 transition-colors flex items-center gap-1 cursor-pointer",children:[p.jsx(x1,{className:"w-3 h-3 text-copper-400"}),p.jsx("span",{children:"Sample Preset"})]})]}),p.jsx("h1",{className:"font-serif text-3xl sm:text-4xl text-chassis-100",children:"Got something old and broken sitting in a cupboard?"}),p.jsx("p",{className:"text-sm text-chassis-300 leading-relaxed font-sans",children:"If you've got an old radio, phone, tape player, or similar electronics that doesn't work and you don't know why — that's exactly what I'm looking for. I'll document what's wrong with it, try to bring it back to life, and credit you for finding it when I post the write-up."}),p.jsx("p",{className:"text-xs text-chassis-500 leading-relaxed font-sans",children:"No obligation, no charge. If it's local, I can pick it up. If it needs to be shipped, let's talk about cost first."})]}),S?p.jsxs("div",{className:"bg-[#171A16] border border-status-fixed/50 rounded-lg p-6 sm:p-8 space-y-6 shadow-chassis-raised",children:[p.jsxs("div",{className:"flex items-center gap-3 text-status-fixed",children:[p.jsx(a1,{className:"w-6 h-6"}),p.jsxs("div",{children:[p.jsxs("h2",{className:"font-serif text-2xl text-chassis-100",children:["Logged to Bench Queue: #",S]}),p.jsx("span",{className:"text-xs font-mono text-status-fixed",children:"THANKS FOR SAVING VINTAGE GEAR // I WILL REACH OUT SHORTLY"})]})]}),p.jsx("button",{onClick:()=>{on.playSwitch(),v(null)},className:"px-4 py-2 bg-chassis-900 border border-chassis-700 hover:border-copper-500 text-copper-400 text-xs font-mono rounded transition-colors cursor-pointer",children:"Submit Another Item"})]}):p.jsxs("form",{onSubmit:A,className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 space-y-5 shadow-chassis-raised",children:[p.jsx("h2",{className:"font-serif text-xl text-chassis-100 border-b border-chassis-800 pb-2",children:"Tell me about it:"}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{htmlFor:"itemName",className:"block text-xs font-mono text-chassis-200",children:"1. What is it? (name, brand, rough age if you know it) *"}),p.jsx("input",{id:"itemName",type:"text",required:!0,placeholder:"e.g. 1950s Murphy Valve Radio, 1980s Sony Walkman",value:i.itemName,onChange:C=>r({...i,itemName:C.target.value}),className:"w-full bg-chassis-950 border border-chassis-700 rounded px-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-sans"})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{htmlFor:"symptom",className:"block text-xs font-mono text-chassis-200",children:"2. What's wrong with it? (won't turn on, no sound, etc.) *"}),p.jsx("textarea",{id:"symptom",required:!0,rows:"3",placeholder:"Describe symptoms: completely dead, hums, mechanical tape transport jammed, smoke, etc.",value:i.symptom,onChange:C=>r({...i,symptom:C.target.value}),className:"w-full bg-chassis-950 border border-chassis-700 rounded p-3 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-sans"})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("span",{className:"block text-xs font-mono text-chassis-200",children:"3. A photo, if you can"}),p.jsxs("div",{className:"border border-dashed border-chassis-700 rounded-lg p-4 bg-chassis-950/60 text-center relative hover:border-copper-500 transition-colors",children:[p.jsx("input",{type:"file",accept:"image/*",onChange:_,className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full","aria-label":"Upload device photo"}),c?p.jsxs("div",{className:"flex flex-col items-center gap-2",children:[p.jsx("img",{src:c,alt:"Preview",className:"w-28 h-20 object-cover rounded border border-chassis-700"}),p.jsx("span",{className:"text-xs font-mono text-copper-400",children:d||"Photo Attached"})]}):p.jsxs("div",{className:"flex flex-col items-center gap-1",children:[p.jsx(b1,{className:"w-5 h-5 text-chassis-500"}),p.jsx("span",{className:"text-xs text-chassis-400 font-mono",children:"Upload photo (optional)"})]})]})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{htmlFor:"city",className:"block text-xs font-mono text-chassis-200",children:"4. Your city *"}),p.jsxs("div",{className:"relative",children:[p.jsx(u1,{className:"w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2"}),p.jsx("input",{id:"city",type:"text",required:!0,placeholder:"e.g. Pune, Mumbai, Delhi",value:i.city,onChange:C=>r({...i,city:C.target.value}),className:"w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none"})]})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{htmlFor:"transit",className:"block text-xs font-mono text-chassis-200",children:"5. Drop-off or Pickup/Shipping?"}),p.jsxs("div",{className:"relative",children:[p.jsx(y1,{className:"w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2"}),p.jsxs("select",{id:"transit",value:i.transit,onChange:C=>r({...i,transit:C.target.value}),className:"w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 focus:border-copper-500 focus:outline-none font-mono",children:[p.jsx("option",{value:"Pickup",children:"Local Pickup (I can come pick it up)"}),p.jsx("option",{value:"Drop-off",children:"I can drop it off"}),p.jsx("option",{value:"Shipping",children:"Needs shipping (let's talk about cost)"})]})]})]})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{htmlFor:"contactInfo",className:"block text-xs font-mono text-chassis-200",children:"6. How to reach you (Email or Phone/WhatsApp) *"}),p.jsxs("div",{className:"relative",children:[p.jsx(c1,{className:"w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2"}),p.jsx("input",{id:"contactInfo",type:"text",required:!0,placeholder:"email@domain.com or +91...",value:i.contactInfo,onChange:C=>r({...i,contactInfo:C.target.value}),className:"w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"})]})]}),p.jsx("div",{className:"pt-3 border-t border-chassis-800 flex justify-end",children:p.jsxs("button",{type:"submit",disabled:m,className:"px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer",children:[p.jsx(d1,{className:"w-4 h-4"}),p.jsx("span",{children:m?"Submitting...":"Send Message"})]})})]})]})},eR=()=>{const{about:o,isAdmin:t,openEditor:i,navigateTo:r}=gi();return p.jsxs("div",{className:"max-w-4xl mx-auto space-y-10",children:[p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-6",children:[p.jsxs("div",{className:"border-b border-chassis-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-xs font-mono uppercase text-copper-400",children:"ENGINEERING & MAKER LOG"}),p.jsxs("h1",{className:"font-serif text-3xl sm:text-4xl text-chassis-100 mt-1",children:["About ",o.name||"Shaoor Ahmad"]}),p.jsx("p",{className:"text-xs font-mono text-chassis-500 mt-1",children:o.title||"Fourth-Year B.Tech Student • Electronics & Telecommunication Engineering"})]}),t&&p.jsxs("button",{onClick:()=>i("about",null),className:"flex items-center gap-1.5 px-3 py-1.5 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto",children:[p.jsx(Iu,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Edit Bio & Photos"})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-center",children:[p.jsx("div",{className:"md:col-span-7 text-sm text-chassis-300 leading-relaxed font-sans whitespace-pre-line space-y-4",children:o.bio}),p.jsx("div",{className:"md:col-span-5 bg-chassis-950 rounded-lg border border-chassis-800 overflow-hidden shadow-chassis-inset",children:p.jsx($S,{})})]}),p.jsx("div",{className:"pt-4 border-t border-chassis-800",children:p.jsxs("div",{className:"relative rounded overflow-hidden border border-chassis-800 bg-chassis-950",children:[p.jsx("img",{src:o.workspaceImage,alt:"Shaoor Ahmad Soldering",className:"w-full h-64 sm:h-96 object-cover"}),p.jsxs("div",{className:"p-3 bg-chassis-950/95 border-t border-chassis-800 text-xs font-mono text-chassis-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[p.jsx("span",{className:"text-copper-400 font-bold",children:o.workspaceCaption||"Shaoor soldering prototype point-to-point PCB circuitry at the RetroForge bench under safety extraction."}),p.jsx("span",{className:"text-[11px] text-chassis-500",children:"Flux Smoke Extraction · Hakko Station · Perfboard Logic"})]})]})})]}),p.jsxs("div",{className:"bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-6",children:[p.jsxs("div",{className:"border-b border-chassis-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-copper-400",children:[p.jsx(U_,{className:"w-4 h-4"}),p.jsx("span",{className:"uppercase tracking-wider",children:"BENCH LOG ARCHIVE // PHOTOGRAPHY"})]}),p.jsx("h2",{className:"font-serif text-2xl text-chassis-100 mt-1",children:"Vintage Apparatus Teardowns & Internal Circuitry"})]}),p.jsxs("button",{onClick:()=>r("bench"),className:"text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer",children:[p.jsx("span",{children:"Explore All Bench Logs"}),p.jsx(sa,{className:"w-3.5 h-3.5"})]})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:(o.benchGallery||[]).map((c,f)=>p.jsxs("div",{className:"bg-chassis-950 rounded border border-chassis-800 overflow-hidden group hover:border-copper-500/50 transition-all",children:[p.jsx("div",{className:"h-56 overflow-hidden bg-chassis-900 relative",children:p.jsx("img",{src:c.url,alt:c.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),p.jsxs("div",{className:"p-4 space-y-1 font-mono",children:[p.jsx("span",{className:"text-xs text-copper-400 font-bold block",children:c.title}),p.jsx("p",{className:"text-[11px] text-chassis-500 font-sans leading-relaxed",children:c.subtitle})]})]},f))})]})]})},tR=()=>{const{selectedRepairId:o,closeRepairModal:t,likes:i,toggleLike:r,comments:c,addComment:f,repairs:d,isAdmin:h,openEditor:m}=gi(),[g,S]=st.useState(""),[v,_]=st.useState("");if(!o)return null;const b=d.find(D=>D.id===o);if(!b)return null;const A=i[b.id]||{count:b.initialLikes||20,userLiked:!1},C=c[b.id]||[],M=D=>{D.preventDefault(),v.trim()&&(f(b.id,g,v),_(""))},y=()=>{m("repair",b.id,b)};return p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn",onClick:t,children:p.jsxs("div",{onClick:D=>D.stopPropagation(),className:"relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-chassis-500",children:[p.jsxs("div",{className:"sticky top-0 z-20 bg-chassis-900 border-b border-chassis-800 px-6 py-4 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-copper-500"}),p.jsxs("div",{children:[p.jsxs("span",{className:"text-[11px] font-mono uppercase text-copper-400",children:["BENCH TEARDOWN LOG // SPECIMEN #",b.id.toUpperCase()]}),p.jsx("h2",{className:"font-serif text-xl sm:text-2xl text-chassis-100",children:b.name})]})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[h&&p.jsxs("button",{type:"button",onClick:y,className:"flex items-center gap-1.5 px-3 py-1 rounded bg-copper-500/20 border border-copper-500/50 text-copper-400 hover:bg-copper-500 hover:text-chassis-950 text-xs font-mono font-bold transition-colors cursor-pointer",children:[p.jsx(Iu,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Edit Content"})]}),p.jsx("button",{onClick:t,className:"p-1.5 rounded-md hover:bg-chassis-800 text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer","aria-label":"Close repair detail",children:p.jsx(zu,{className:"w-5 h-5"})})]})]}),p.jsxs("div",{className:"p-6 sm:p-8 space-y-8",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-start",children:[p.jsxs("div",{className:"md:col-span-7 rounded overflow-hidden border border-chassis-800 bg-chassis-900",children:[p.jsx("img",{src:b.heroImage,alt:b.name,className:"w-full h-72 object-cover"}),p.jsxs("div",{className:"p-3 bg-chassis-900/90 border-t border-chassis-800 text-xs font-mono text-chassis-500 flex justify-between",children:[p.jsxs("span",{children:["YEAR: CIRCA ",b.year]}),p.jsxs("span",{children:["CATEGORY: ",b.category]}),p.jsxs("span",{children:["DECADE: ",b.decade]})]})]}),p.jsxs("div",{className:"md:col-span-5 bg-chassis-900/60 p-4 rounded border border-chassis-800 space-y-3 font-mono text-xs",children:[p.jsxs("div",{className:"flex items-center gap-1.5 text-copper-400 uppercase tracking-wider pb-2 border-b border-chassis-800",children:[p.jsx(V_,{className:"w-4 h-4"}),p.jsx("span",{children:"CHASSIS ARCHITECTURE"})]}),Object.entries(b.specs||{}).map(([D,V])=>p.jsxs("div",{className:"space-y-0.5",children:[p.jsx("span",{className:"text-[10px] text-chassis-600 uppercase tracking-tight block",children:D.replace(/([A-Z])/g," $1")}),p.jsx("span",{className:"text-chassis-200 block text-[11px] break-words",children:V})]},D))]})]}),p.jsxs("section",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center gap-2 text-sm font-mono text-copper-400 uppercase tracking-wider",children:[p.jsx("span",{className:"w-2 h-2 bg-copper-500 rounded-sm"}),p.jsx("span",{children:"BENCH TEARDOWN NOTES & OBSERVATIONS"})]}),p.jsx("div",{className:"p-5 rounded bg-chassis-900/70 border border-chassis-800 text-chassis-200 text-sm leading-relaxed whitespace-pre-line font-sans space-y-3",children:b.description||b.symptom||b.summary})]}),b.teardownImages&&b.teardownImages.length>0&&p.jsxs("section",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center gap-2 text-sm font-mono text-copper-400 uppercase tracking-wider",children:[p.jsx(U_,{className:"w-4 h-4"}),p.jsx("span",{children:"INTERNAL CIRCUITRY & DISASSEMBLY PHOTOGRAPHY"})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",children:b.teardownImages.map((D,V)=>p.jsxs("div",{className:"rounded border border-chassis-800 overflow-hidden bg-chassis-900",children:[p.jsx("img",{src:D.url,alt:D.caption,className:"w-full h-52 object-cover"}),p.jsxs("div",{className:"p-3 text-xs text-chassis-400 bg-chassis-950/95 font-mono leading-relaxed border-t border-chassis-800",children:[p.jsxs("span",{className:"text-copper-400 font-bold mr-1",children:["FIG ",V+1,":"]}),D.caption]})]},V))})]}),p.jsxs("div",{className:"pt-4 border-t border-chassis-800 flex items-center justify-between",children:[p.jsxs("button",{onClick:()=>r(b.id),className:`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all cursor-pointer ${A.userLiked?"bg-copper-500/20 text-copper-400 border border-copper-500/50":"bg-chassis-900 text-chassis-500 border border-chassis-700 hover:text-copper-400 hover:border-copper-500/40"}`,children:[p.jsx(F_,{className:`w-4 h-4 ${A.userLiked?"fill-copper-400 text-copper-400":""}`}),p.jsxs("span",{children:[A.userLiked?"Liked Bench Log":"Respect this Log"," (",A.count,")"]})]}),p.jsxs("span",{className:"text-xs font-mono text-chassis-600",children:[C.length," TRANSMISSION",C.length===1?"":"S"," IN THREAD"]})]}),p.jsxs("section",{className:"pt-4 border-t border-chassis-800 space-y-6",children:[p.jsxs("div",{className:"flex items-center gap-2 text-sm font-mono text-chassis-200 uppercase tracking-wider",children:[p.jsx(f1,{className:"w-4 h-4 text-copper-400"}),p.jsx("span",{children:"BENCH NOTES & COMMUNITY TRANSMISSIONS"})]}),p.jsxs("form",{onSubmit:M,className:"bg-chassis-900 p-4 rounded border border-chassis-800 space-y-3",children:[p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:p.jsxs("div",{children:[p.jsx("label",{htmlFor:"commentAuthor",className:"block text-[11px] font-mono text-chassis-500 mb-1",children:"YOUR CALLSIGN / NAME (OPTIONAL)"}),p.jsx("input",{id:"commentAuthor",type:"text",placeholder:"e.g. VU2XYZ / SolderJunkie",value:g,onChange:D=>S(D.target.value),className:"w-full bg-chassis-950 border border-chassis-700 rounded px-3 py-1.5 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"})]})}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"commentNote",className:"block text-[11px] font-mono text-chassis-500 mb-1",children:"ADD A DIAGNOSTIC NOTE, TUBE EQUIVALENT, OR QUESTION"}),p.jsx("textarea",{id:"commentNote",rows:"3",required:!0,placeholder:"Share advice, alternate component substitutions, or questions...",value:v,onChange:D=>_(D.target.value),className:"w-full bg-chassis-950 border border-chassis-700 rounded p-3 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none"})]}),p.jsx("div",{className:"flex justify-end",children:p.jsxs("button",{type:"submit",className:"px-4 py-2 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer",children:[p.jsx(m1,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Transmit Note"})]})})]}),p.jsx("div",{className:"space-y-3",children:C.length===0?p.jsx("div",{className:"text-center py-6 text-xs font-mono text-chassis-600",children:"No transmissions yet on this chassis log. Be the first to leave a note!"}):C.map(D=>p.jsxs("div",{className:"bg-chassis-900/50 p-4 rounded border border-chassis-800 space-y-1.5",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[p.jsx("span",{className:"text-copper-400 font-semibold",children:D.author}),p.jsx("span",{className:"text-chassis-600 text-[11px]",children:D.date})]}),p.jsx("p",{className:"text-xs text-chassis-300 leading-relaxed font-sans",children:D.text})]},D.id))})]})]})]})})},nR=()=>{const{isSupportOpen:o,setIsSupportOpen:t}=gi(),[i,r]=st.useState(!1),c="shaoor.retroforge@upi";if(!o)return null;const f=()=>{on.playRelayClick(),navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2500)};return p.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",onClick:()=>t(!1),children:p.jsxs("div",{onClick:d=>d.stopPropagation(),className:"relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-md w-full p-6 space-y-6 shadow-2xl text-chassis-500",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-chassis-800 pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(F_,{className:"w-4 h-4 text-copper-400"}),p.jsx("h3",{className:"font-serif text-xl text-chassis-100",children:"Support RetroForge"})]}),p.jsx("button",{onClick:()=>t(!1),className:"p-1 rounded text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer",children:p.jsx(zu,{className:"w-5 h-5"})})]}),p.jsx("p",{className:"text-sm text-chassis-300 leading-relaxed font-sans",children:"If something here was useful or you just enjoyed following along, you can support this work here. Entirely optional — the write-ups stay free either way."}),p.jsxs("div",{className:"bg-chassis-900 p-5 rounded border border-chassis-800 flex flex-col items-center space-y-3 text-center",children:[p.jsx("div",{className:"w-40 h-40 bg-white p-3 rounded border border-chassis-700 flex items-center justify-center shadow-inner",children:p.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full text-chassis-950 fill-current",children:[p.jsx("path",{d:"M0 0h30v30H0zm4 4h22v22H4zm4 4h14v14H8zM70 0h30v30H70zm4 4h22v22H74zm4 4h14v14H78zM0 70h30v30H0zm4 4h22v22H4zm4 4h14v14H8zM40 10h10v10H40zm10 20h10v10H50zm-10 10h20v10H40zm30 10h10v10H70zm10 20h10v10H80zm-40 0h10v10H40zm10 10h10v10H50zm20 10h20v10H70zm-30 0h10v10H40z"}),p.jsx("rect",{x:"42",y:"42",width:"16",height:"16",fill:"#E05D4F"})]})}),p.jsx("span",{className:"text-xs font-mono text-chassis-500",children:"Scan via any UPI Application (GPay, PhonePe, Paytm, BHIM)"})]}),p.jsxs("div",{className:"bg-chassis-950 p-3 rounded border border-chassis-800 flex items-center justify-between",children:[p.jsxs("div",{className:"font-mono text-xs text-chassis-200",children:[p.jsx("span",{className:"text-chassis-500 mr-2",children:"UPI:"}),c]}),p.jsxs("button",{onClick:f,className:"flex items-center gap-1 px-3 py-1.5 text-xs font-mono rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold transition-colors cursor-pointer",children:[i?p.jsx(Xp,{className:"w-3.5 h-3.5"}):p.jsx(P_,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:i?"Copied":"Copy"})]})]})]})})},iR=()=>{const{isAdmin:o,logoutAdmin:t,openEditor:i,resetToDefaults:r}=gi();return o?p.jsx("div",{className:"sticky top-16 z-30 bg-copper-500/15 border-b border-copper-500/40 backdrop-blur-md px-4 py-2 font-mono text-xs",children:p.jsxs("div",{className:"max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3",children:[p.jsxs("div",{className:"flex items-center gap-2 text-copper-400 font-bold",children:[p.jsx(Pu,{className:"w-4 h-4 text-copper-400"}),p.jsx("span",{children:"ADMIN CMS ACTIVE // LIVE EDITING UNLOCKED"})]}),p.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[p.jsxs("button",{onClick:()=>i("repair",null),className:"flex items-center gap-1 px-2.5 py-1 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold transition-colors cursor-pointer",children:[p.jsx(Wp,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Add New Bench Teardown"})]}),p.jsxs("button",{onClick:()=>i("about",null),className:"flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-900 border border-chassis-700 hover:border-copper-500/60 text-chassis-200 hover:text-copper-400 transition-colors cursor-pointer",children:[p.jsx(v1,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Edit Bio & Workshop"})]}),p.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-900 border border-chassis-700 hover:border-rose-500/50 text-chassis-400 hover:text-rose-400 transition-colors cursor-pointer",title:"Reset all content to original defaults",children:[p.jsx(J_,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Reset Stock Data"})]}),p.jsxs("button",{onClick:t,className:"flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-950 border border-chassis-700 hover:bg-chassis-900 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer",children:[p.jsx(l1,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Exit Admin"})]})]})]})}):null},aR=()=>{const{isAuthModalOpen:o,setIsAuthModalOpen:t,loginAdmin:i}=gi(),[r,c]=st.useState(""),[f,d]=st.useState(!1);if(!o)return null;const h=g=>{g.preventDefault(),i(r||"admin")?(c(""),d(!1)):d(!0)},m=()=>{i("admin")};return p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",onClick:()=>t(!1),children:p.jsxs("div",{onClick:g=>g.stopPropagation(),className:"relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-md w-full p-6 shadow-2xl space-y-5",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-chassis-800 pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Pu,{className:"w-5 h-5 text-copper-400"}),p.jsx("h3",{className:"font-serif text-lg text-chassis-100",children:"RetroForge Admin CMS Portal"})]}),p.jsx("button",{onClick:()=>t(!1),className:"p-1 rounded text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer",children:p.jsx(zu,{className:"w-5 h-5"})})]}),p.jsx("p",{className:"text-xs text-chassis-500 font-sans leading-relaxed",children:"Log in to edit project descriptions, add new teardowns, update photos, or change bio text directly in the browser."}),p.jsxs("form",{onSubmit:h,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] font-mono text-chassis-400 mb-1 uppercase",children:"Admin Access PIN / Password"}),p.jsxs("div",{className:"relative",children:[p.jsx(r1,{className:"w-4 h-4 text-chassis-600 absolute left-3 top-1/2 -translate-y-1/2"}),p.jsx("input",{type:"password",placeholder:"Enter password (default: admin)",value:r,onChange:g=>{c(g.target.value),d(!1)},autoFocus:!0,className:"w-full bg-chassis-900 border border-chassis-700 rounded pl-9 pr-3 py-2 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"})]}),f&&p.jsx("span",{className:"text-[11px] font-mono text-rose-400 mt-1 block",children:'Incorrect PIN. (Tip: Use "admin" or click Quick Unlock below)'})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2 pt-2",children:[p.jsxs("button",{type:"submit",className:"w-full py-2 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer",children:[p.jsx(o1,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Login as Admin"})]}),p.jsxs("button",{type:"button",onClick:m,className:"w-full py-2 bg-chassis-900 hover:bg-chassis-850 border border-chassis-700 text-chassis-300 font-mono text-xs rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer",children:[p.jsx(Xp,{className:"w-3.5 h-3.5 text-copper-400"}),p.jsx("span",{children:"Quick Unlock"})]})]})]})]})})},sR=()=>{const{isEditorModalOpen:o,closeEditor:t,editorTarget:i,saveEditedContent:r,deleteRepair:c}=gi(),[f,d]=st.useState({});if(st.useEffect(()=>{i&&i.data?d({...i.data}):i&&i.type==="repair"?d({name:"New Vintage Apparatus",year:1975,decade:"1970s",category:"Radio",heroImage:"/images/murphy-mini-master-4-front.jpg",summary:"Brief overview of what was inspected and restored on the bench...",description:"Full teardown notes, schematic findings, replaced components, and circuit observations...",specs:{chassis:"Custom Chassis Specification",power:"230V AC / 9V DC",audio:"Discrete Output Stage"},teardownImages:[]}):d({})},[i]),!o)return null;const{type:h,id:m}=i,g=b=>{b.preventDefault(),r(h,m,f)},S=(b,A)=>{d(C=>({...C,specs:{...C.specs||{},[b]:A}}))},v=()=>{const b=prompt('Enter new specification label (e.g. "Speaker", "IF Frequency", "Power"):');b&&b.trim()&&S(b.trim().toLowerCase(),"Details...")},_=b=>{d(A=>{const C={...A.specs||{}};return delete C[b],{...A,specs:C}})};return p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn",onClick:t,children:p.jsxs("div",{onClick:b=>b.stopPropagation(),className:"relative bg-chassis-950 border border-copper-500/50 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 p-6 sm:p-8",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-chassis-800 pb-4",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-copper-500 animate-pulse"}),p.jsxs("div",{children:[p.jsxs("span",{className:"text-[10px] font-mono uppercase text-copper-400",children:["LIVE CONTENT EDITOR // ",h.toUpperCase()]}),p.jsx("h2",{className:"font-serif text-2xl text-chassis-100",children:m?`Edit: ${f.name||f.title||"Item"}`:`Add New ${h.toUpperCase()}`})]})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[m&&h==="repair"&&p.jsx("button",{type:"button",onClick:()=>c(m),className:"p-1.5 rounded bg-rose-950/40 border border-rose-500/30 text-rose-400 hover:bg-rose-900/60 transition-colors cursor-pointer",title:"Delete this repair entry",children:p.jsx(S1,{className:"w-4 h-4"})}),p.jsx("button",{onClick:t,className:"p-1.5 rounded hover:bg-chassis-800 text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer",children:p.jsx(zu,{className:"w-5 h-5"})})]})]}),p.jsxs("form",{onSubmit:g,className:"space-y-6 text-xs font-mono",children:[h==="repair"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[p.jsxs("div",{className:"sm:col-span-2",children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Apparatus / Model Name"}),p.jsx("input",{type:"text",required:!0,value:f.name||"",onChange:b=>d({...f,name:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Year (e.g. 1968)"}),p.jsx("input",{type:"number",value:f.year||"",onChange:b=>d({...f,year:parseInt(b.target.value)||""}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Category (Radio / Telephony / Audio / Test Equipment)"}),p.jsx("input",{type:"text",value:f.category||"Radio",onChange:b=>d({...f,category:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Decade Tag (e.g. 1960s)"}),p.jsx("input",{type:"text",value:f.decade||"1960s",onChange:b=>d({...f,decade:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Hero Image Path / URL"}),p.jsx("div",{className:"flex gap-2",children:p.jsx("input",{type:"text",required:!0,value:f.heroImage||"",onChange:b=>d({...f,heroImage:b.target.value}),placeholder:"/images/... or https://...",className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})}),p.jsx("span",{className:"text-[10px] text-chassis-600 mt-1 block",children:"Available local photos: /images/murphy-mini-master-4-front.jpg, /images/murphy-sinus-internal-chassis.jpg, /images/philips-radio-teardown-open.jpg, /images/philips-radio-rf-pcb-detail.jpg, /images/panasonic-phone-teardown.jpg, /images/shaoor-soldering-bench.jpg"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Short Summary (Shown on Bench Card)"}),p.jsx("input",{type:"text",value:f.summary||"",onChange:b=>d({...f,summary:b.target.value}),placeholder:"One sentence summary of the teardown...",className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Complete Project Description & Teardown Notes"}),p.jsx("textarea",{rows:"7",required:!0,value:f.description||"",onChange:b=>d({...f,description:b.target.value}),placeholder:"Write the full narrative of what happened on the bench...",className:"w-full bg-chassis-900 border border-chassis-700 rounded p-3 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans text-sm leading-relaxed"})]}),p.jsxs("div",{className:"space-y-3 p-4 bg-chassis-900/60 rounded border border-chassis-800",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-copper-400 uppercase font-bold",children:"Chassis Specifications"}),p.jsxs("button",{type:"button",onClick:v,className:"flex items-center gap-1 text-[11px] text-copper-400 hover:text-copper-300 cursor-pointer",children:[p.jsx(Wp,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Add Spec Field"})]})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Object.entries(f.specs||{}).map(([b,A])=>p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex items-center justify-between text-[10px] text-chassis-500 uppercase",children:[p.jsx("span",{children:b}),p.jsx("button",{type:"button",onClick:()=>_(b),className:"text-rose-400 hover:text-rose-300",children:"remove"})]}),p.jsx("input",{type:"text",value:A,onChange:C=>S(b,C.target.value),className:"w-full bg-chassis-950 border border-chassis-700 rounded px-2.5 py-1 text-chassis-100 text-xs font-sans"})]},b))})]})]}),h==="about"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Your Name"}),p.jsx("input",{type:"text",required:!0,value:f.name||"",onChange:b=>d({...f,name:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Engineering Title / Subtitle"}),p.jsx("input",{type:"text",value:f.title||"",onChange:b=>d({...f,title:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Workbench Photo Path / URL"}),p.jsx("input",{type:"text",value:f.workspaceImage||"",onChange:b=>d({...f,workspaceImage:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"Workbench Photo Caption"}),p.jsx("input",{type:"text",value:f.workspaceCaption||"",onChange:b=>d({...f,workspaceCaption:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-chassis-400 uppercase mb-1",children:"About Bio Text"}),p.jsx("textarea",{rows:"8",required:!0,value:f.bio||"",onChange:b=>d({...f,bio:b.target.value}),className:"w-full bg-chassis-900 border border-chassis-700 rounded p-3 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans text-sm leading-relaxed"})]})]}),p.jsxs("div",{className:"pt-4 border-t border-chassis-800 flex items-center justify-end gap-3",children:[p.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 rounded bg-chassis-900 hover:bg-chassis-850 border border-chassis-700 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer",children:"Cancel"}),p.jsxs("button",{type:"submit",className:"px-5 py-2 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-amber-glow",children:[p.jsx(h1,{className:"w-4 h-4"}),p.jsx("span",{children:"Save & Publish Live"})]})]})]})]})})},rR=()=>{const{activeTab:o}=gi(),t=()=>{switch(o){case"home":return p.jsx(A_,{});case"bench":return p.jsx(Kw,{});case"builds":return p.jsx(Qw,{});case"log":return p.jsx(Jw,{});case"junk":return p.jsx($w,{});case"about":return p.jsx(eR,{});default:return p.jsx(A_,{})}};return p.jsxs("div",{className:"min-h-screen flex flex-col justify-between selection:bg-copper-500/30 selection:text-chassis-100 relative",children:[p.jsx("div",{className:"fixed inset-0 crt-overlay opacity-30 pointer-events-none z-50"}),p.jsxs("div",{children:[p.jsx(A1,{}),p.jsx(iR,{}),p.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-opacity duration-300",children:t()})]}),p.jsx(tR,{}),p.jsx(nR,{}),p.jsx(aR,{}),p.jsx(sR,{}),p.jsx(w1,{})]})};jM.createRoot(document.getElementById("root")).render(p.jsx(PM.StrictMode,{children:p.jsx(qM,{children:p.jsx(rR,{})})}));
