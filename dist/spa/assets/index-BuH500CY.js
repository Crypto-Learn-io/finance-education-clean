var hp=n=>{throw TypeError(n)};var Jc=(n,r,i)=>r.has(n)||hp("Cannot "+i);var B=(n,r,i)=>(Jc(n,r,"read from private field"),i?i.call(n):r.get(n)),Ie=(n,r,i)=>r.has(n)?hp("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(n):r.set(n,i),ke=(n,r,i,s)=>(Jc(n,r,"write to private field"),s?s.call(n,i):r.set(n,i),i),pt=(n,r,i)=>(Jc(n,r,"access private method"),i);var pa=(n,r,i,s)=>({set _(l){ke(n,r,l,i)},get _(){return B(n,r,s)}});function M0(n,r){for(var i=0;i<r.length;i++){const s=r[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Dh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zc={exports:{}},zo={},eu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function L0(){if(gp)return Ce;gp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,k={};function C(P,_,ee){this.props=P,this.context=_,this.refs=k,this.updater=ee||S}C.prototype.isReactComponent={},C.prototype.setState=function(P,_){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,_,"setState")},C.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function T(){}T.prototype=C.prototype;function N(P,_,ee){this.props=P,this.context=_,this.refs=k,this.updater=ee||S}var j=N.prototype=new T;j.constructor=N,E(j,C.prototype),j.isPureReactComponent=!0;var L=Array.isArray,$=Object.prototype.hasOwnProperty,H={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function Y(P,_,ee){var de,xe={},fe=null,Re=null;if(_!=null)for(de in _.ref!==void 0&&(Re=_.ref),_.key!==void 0&&(fe=""+_.key),_)$.call(_,de)&&!z.hasOwnProperty(de)&&(xe[de]=_[de]);var Se=arguments.length-2;if(Se===1)xe.children=ee;else if(1<Se){for(var Pe=Array(Se),qe=0;qe<Se;qe++)Pe[qe]=arguments[qe+2];xe.children=Pe}if(P&&P.defaultProps)for(de in Se=P.defaultProps,Se)xe[de]===void 0&&(xe[de]=Se[de]);return{$$typeof:n,type:P,key:fe,ref:Re,props:xe,_owner:H.current}}function q(P,_){return{$$typeof:n,type:P.type,key:_,ref:P.ref,props:P.props,_owner:P._owner}}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function re(P){var _={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ee){return _[ee]})}var te=/\/+/g;function oe(P,_){return typeof P=="object"&&P!==null&&P.key!=null?re(""+P.key):_.toString(36)}function J(P,_,ee,de,xe){var fe=typeof P;(fe==="undefined"||fe==="boolean")&&(P=null);var Re=!1;if(P===null)Re=!0;else switch(fe){case"string":case"number":Re=!0;break;case"object":switch(P.$$typeof){case n:case r:Re=!0}}if(Re)return Re=P,xe=xe(Re),P=de===""?"."+oe(Re,0):de,L(xe)?(ee="",P!=null&&(ee=P.replace(te,"$&/")+"/"),J(xe,_,ee,"",function(qe){return qe})):xe!=null&&(G(xe)&&(xe=q(xe,ee+(!xe.key||Re&&Re.key===xe.key?"":(""+xe.key).replace(te,"$&/")+"/")+P)),_.push(xe)),1;if(Re=0,de=de===""?".":de+":",L(P))for(var Se=0;Se<P.length;Se++){fe=P[Se];var Pe=de+oe(fe,Se);Re+=J(fe,_,ee,Pe,xe)}else if(Pe=v(P),typeof Pe=="function")for(P=Pe.call(P),Se=0;!(fe=P.next()).done;)fe=fe.value,Pe=de+oe(fe,Se++),Re+=J(fe,_,ee,Pe,xe);else if(fe==="object")throw _=String(P),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return Re}function he(P,_,ee){if(P==null)return P;var de=[],xe=0;return J(P,de,"","",function(fe){return _.call(ee,fe,xe++)}),de}function ce(P){if(P._status===-1){var _=P._result;_=_(),_.then(function(ee){(P._status===0||P._status===-1)&&(P._status=1,P._result=ee)},function(ee){(P._status===0||P._status===-1)&&(P._status=2,P._result=ee)}),P._status===-1&&(P._status=0,P._result=_)}if(P._status===1)return P._result.default;throw P._result}var ae={current:null},F={transition:null},Q={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:F,ReactCurrentOwner:H};function X(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:he,forEach:function(P,_,ee){he(P,function(){_.apply(this,arguments)},ee)},count:function(P){var _=0;return he(P,function(){_++}),_},toArray:function(P){return he(P,function(_){return _})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ce.Component=C,Ce.Fragment=i,Ce.Profiler=l,Ce.PureComponent=N,Ce.StrictMode=s,Ce.Suspense=h,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Ce.act=X,Ce.cloneElement=function(P,_,ee){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=E({},P.props),xe=P.key,fe=P.ref,Re=P._owner;if(_!=null){if(_.ref!==void 0&&(fe=_.ref,Re=H.current),_.key!==void 0&&(xe=""+_.key),P.type&&P.type.defaultProps)var Se=P.type.defaultProps;for(Pe in _)$.call(_,Pe)&&!z.hasOwnProperty(Pe)&&(de[Pe]=_[Pe]===void 0&&Se!==void 0?Se[Pe]:_[Pe])}var Pe=arguments.length-2;if(Pe===1)de.children=ee;else if(1<Pe){Se=Array(Pe);for(var qe=0;qe<Pe;qe++)Se[qe]=arguments[qe+2];de.children=Se}return{$$typeof:n,type:P.type,key:xe,ref:fe,props:de,_owner:Re}},Ce.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:u,_context:P},P.Consumer=P},Ce.createElement=Y,Ce.createFactory=function(P){var _=Y.bind(null,P);return _.type=P,_},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(P){return{$$typeof:m,render:P}},Ce.isValidElement=G,Ce.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:ce}},Ce.memo=function(P,_){return{$$typeof:y,type:P,compare:_===void 0?null:_}},Ce.startTransition=function(P){var _=F.transition;F.transition={};try{P()}finally{F.transition=_}},Ce.unstable_act=X,Ce.useCallback=function(P,_){return ae.current.useCallback(P,_)},Ce.useContext=function(P){return ae.current.useContext(P)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(P){return ae.current.useDeferredValue(P)},Ce.useEffect=function(P,_){return ae.current.useEffect(P,_)},Ce.useId=function(){return ae.current.useId()},Ce.useImperativeHandle=function(P,_,ee){return ae.current.useImperativeHandle(P,_,ee)},Ce.useInsertionEffect=function(P,_){return ae.current.useInsertionEffect(P,_)},Ce.useLayoutEffect=function(P,_){return ae.current.useLayoutEffect(P,_)},Ce.useMemo=function(P,_){return ae.current.useMemo(P,_)},Ce.useReducer=function(P,_,ee){return ae.current.useReducer(P,_,ee)},Ce.useRef=function(P){return ae.current.useRef(P)},Ce.useState=function(P){return ae.current.useState(P)},Ce.useSyncExternalStore=function(P,_,ee){return ae.current.useSyncExternalStore(P,_,ee)},Ce.useTransition=function(){return ae.current.useTransition()},Ce.version="18.3.1",Ce}var yp;function Yu(){return yp||(yp=1,eu.exports=L0()),eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function D0(){if(vp)return zo;vp=1;var n=Yu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,y){var x,b={},v=null,S=null;y!==void 0&&(v=""+y),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(x in h)s.call(h,x)&&!u.hasOwnProperty(x)&&(b[x]=h[x]);if(m&&m.defaultProps)for(x in h=m.defaultProps,h)b[x]===void 0&&(b[x]=h[x]);return{$$typeof:r,type:m,key:v,ref:S,props:b,_owner:l.current}}return zo.Fragment=i,zo.jsx=f,zo.jsxs=f,zo}var xp;function O0(){return xp||(xp=1,Zc.exports=D0()),Zc.exports}var c=O0(),ha={},tu={exports:{}},Et={},nu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function F0(){return wp||(wp=1,function(n){function r(F,Q){var X=F.length;F.push(Q);e:for(;0<X;){var P=X-1>>>1,_=F[P];if(0<l(_,Q))F[P]=Q,F[X]=_,X=P;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var Q=F[0],X=F.pop();if(X!==Q){F[0]=X;e:for(var P=0,_=F.length,ee=_>>>1;P<ee;){var de=2*(P+1)-1,xe=F[de],fe=de+1,Re=F[fe];if(0>l(xe,X))fe<_&&0>l(Re,xe)?(F[P]=Re,F[fe]=X,P=fe):(F[P]=xe,F[de]=X,P=de);else if(fe<_&&0>l(Re,X))F[P]=Re,F[fe]=X,P=fe;else break e}}return Q}function l(F,Q){var X=F.sortIndex-Q.sortIndex;return X!==0?X:F.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var h=[],y=[],x=1,b=null,v=3,S=!1,E=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(F){for(var Q=i(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=F)s(y),Q.sortIndex=Q.expirationTime,r(h,Q);else break;Q=i(y)}}function L(F){if(k=!1,j(F),!E)if(i(h)!==null)E=!0,ce($);else{var Q=i(y);Q!==null&&ae(L,Q.startTime-F)}}function $(F,Q){E=!1,k&&(k=!1,T(Y),Y=-1),S=!0;var X=v;try{for(j(Q),b=i(h);b!==null&&(!(b.expirationTime>Q)||F&&!re());){var P=b.callback;if(typeof P=="function"){b.callback=null,v=b.priorityLevel;var _=P(b.expirationTime<=Q);Q=n.unstable_now(),typeof _=="function"?b.callback=_:b===i(h)&&s(h),j(Q)}else s(h);b=i(h)}if(b!==null)var ee=!0;else{var de=i(y);de!==null&&ae(L,de.startTime-Q),ee=!1}return ee}finally{b=null,v=X,S=!1}}var H=!1,z=null,Y=-1,q=5,G=-1;function re(){return!(n.unstable_now()-G<q)}function te(){if(z!==null){var F=n.unstable_now();G=F;var Q=!0;try{Q=z(!0,F)}finally{Q?oe():(H=!1,z=null)}}else H=!1}var oe;if(typeof N=="function")oe=function(){N(te)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,he=J.port2;J.port1.onmessage=te,oe=function(){he.postMessage(null)}}else oe=function(){C(te,0)};function ce(F){z=F,H||(H=!0,oe())}function ae(F,Q){Y=C(function(){F(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,ce($))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(F){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var X=v;v=Q;try{return F()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=v;v=F;try{return Q()}finally{v=X}},n.unstable_scheduleCallback=function(F,Q,X){var P=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,F){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=X+_,F={id:x++,callback:Q,priorityLevel:F,startTime:X,expirationTime:_,sortIndex:-1},X>P?(F.sortIndex=X,r(y,F),i(h)===null&&F===i(y)&&(k?(T(Y),Y=-1):k=!0,ae(L,X-P))):(F.sortIndex=_,r(h,F),E||S||(E=!0,ce($))),F},n.unstable_shouldYield=re,n.unstable_wrapCallback=function(F){var Q=v;return function(){var X=v;v=Q;try{return F.apply(this,arguments)}finally{v=X}}}}(ru)),ru}var bp;function $0(){return bp||(bp=1,nu.exports=F0()),nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function _0(){if(kp)return Et;kp=1;var n=Yu(),r=$0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function v(e){return h.call(b,e)?!0:h.call(x,e)?!1:y.test(e)?b[e]=!0:(x[e]=!0,!1)}function S(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,o,a){if(t===null||typeof t>"u"||S(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function k(e,t,o,a,d,p,w){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=w}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,N);C[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,N);C[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,N);C[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,t,o,a){var d=C.hasOwnProperty(t)?C[t]:null;(d!==null?d.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,o,d,a)&&(o=null),a||d===null?v(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(t=d.attributeName,a=d.attributeNamespace,o===null?e.removeAttribute(t):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),H=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),re=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),F=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,P;function _(e){if(P===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var ee=!1;function de(e,t){if(!e||ee)return"";ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var a=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){a=O}e.call(t.prototype)}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var d=O.stack.split(`
`),p=a.stack.split(`
`),w=d.length-1,R=p.length-1;1<=w&&0<=R&&d[w]!==p[R];)R--;for(;1<=w&&0<=R;w--,R--)if(d[w]!==p[R]){if(w!==1||R!==1)do if(w--,R--,0>R||d[w]!==p[R]){var A=`
`+d[w].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=w&&0<=R);break}}}finally{ee=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?_(e):""}function xe(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case H:return"Portal";case q:return"Profiler";case Y:return"StrictMode";case oe:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function Re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qe(e){var t=Pe(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(w){a=""+w,p.call(this,w)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(w){a=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cn(e){e._valueTracker||(e._valueTracker=qe(e))}function En(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=Pe(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rn(e,t){var o=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ar(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=Se(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qt(e,t){t=t.checked,t!=null&&j(e,"checked",t,!1)}function Nr(e,t){Qt(e,t);var o=Se(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ge(e,t.type,o):t.hasOwnProperty("defaultValue")&&Ge(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ei(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ge(e,t,o){(t!=="number"||$t(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var _t=Array.isArray;function Wn(e,t,o,a){if(e=e.options,t){t={};for(var d=0;d<o.length;d++)t["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=t.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&a&&(e[o].defaultSelected=!0)}else{for(o=""+Se(o),t=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ir(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(_t(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:Se(o)}}function rs(e,t){var o=Se(t.value),a=Se(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function Zi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ti(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function un(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ti(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Pn=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,d){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,d)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},is=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){is.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function eo(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function os(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=eo(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,d):e[o]=d}}var to=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zt(e,t){if(t){if(to[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function no(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function Me(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ne=null,ot=null,st=null;function Lr(e){if(e=Eo(e)){if(typeof Ne!="function")throw Error(i(280));var t=e.stateNode;t&&(t=As(t),Ne(e.stateNode,e.type,t))}}function ss(e){ot?st?st.push(e):st=[e]:ot=e}function Md(){if(ot){var e=ot,t=st;if(st=ot=null,Lr(e),t)for(e=0;e<t.length;e++)Lr(t[e])}}function Ld(e,t){return e(t)}function Dd(){}var hl=!1;function Od(e,t,o){if(hl)return e(t,o);hl=!0;try{return Ld(e,t,o)}finally{hl=!1,(ot!==null||st!==null)&&(Dd(),Md())}}function ro(e,t){var o=e.stateNode;if(o===null)return null;var a=As(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var gl=!1;if(m)try{var io={};Object.defineProperty(io,"passive",{get:function(){gl=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{gl=!1}function _v(e,t,o,a,d,p,w,R,A){var O=Array.prototype.slice.call(arguments,3);try{t.apply(o,O)}catch(U){this.onError(U)}}var oo=!1,as=null,ls=!1,yl=null,zv={onError:function(e){oo=!0,as=e}};function Bv(e,t,o,a,d,p,w,R,A){oo=!1,as=null,_v.apply(zv,arguments)}function Hv(e,t,o,a,d,p,w,R,A){if(Bv.apply(this,arguments),oo){if(oo){var O=as;oo=!1,as=null}else throw Error(i(198));ls||(ls=!0,yl=O)}}function Dr(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $d(e){if(Dr(e)!==e)throw Error(i(188))}function Wv(e){var t=e.alternate;if(!t){if(t=Dr(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,a=t;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return $d(d),e;if(p===a)return $d(d),t;p=p.sibling}throw Error(i(188))}if(o.return!==a.return)o=d,a=p;else{for(var w=!1,R=d.child;R;){if(R===o){w=!0,o=d,a=p;break}if(R===a){w=!0,a=d,o=p;break}R=R.sibling}if(!w){for(R=p.child;R;){if(R===o){w=!0,o=p,a=d;break}if(R===a){w=!0,a=p,o=d;break}R=R.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function _d(e){return e=Wv(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var Bd=r.unstable_scheduleCallback,Hd=r.unstable_cancelCallback,Uv=r.unstable_shouldYield,qv=r.unstable_requestPaint,Qe=r.unstable_now,Vv=r.unstable_getCurrentPriorityLevel,vl=r.unstable_ImmediatePriority,Wd=r.unstable_UserBlockingPriority,cs=r.unstable_NormalPriority,Yv=r.unstable_LowPriority,Ud=r.unstable_IdlePriority,us=null,dn=null;function Gv(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Xv,Qv=Math.log,Kv=Math.LN2;function Xv(e){return e>>>=0,e===0?32:31-(Qv(e)/Kv|0)|0}var ds=64,fs=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,d=e.suspendedLanes,p=e.pingedLanes,w=o&268435455;if(w!==0){var R=w&~d;R!==0?a=so(R):(p&=w,p!==0&&(a=so(p)))}else w=o&~d,w!==0?a=so(w):p!==0&&(a=so(p));if(a===0)return 0;if(t!==0&&t!==a&&(t&d)===0&&(d=a&-a,p=t&-t,d>=p||d===16&&(p&4194240)!==0))return t;if((a&4)!==0&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-Kt(t),d=1<<o,a|=e[o],t&=~d;return a}function Jv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var w=31-Kt(p),R=1<<w,A=d[w];A===-1?((R&o)===0||(R&a)!==0)&&(d[w]=Jv(R,t)):A<=t&&(e.expiredLanes|=R),p&=~R}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=ds;return ds<<=1,(ds&4194240)===0&&(ds=64),e}function wl(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function ao(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=o}function ex(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-Kt(o),p=1<<d;t[d]=0,a[d]=-1,e[d]=-1,o&=~p}}function bl(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-Kt(o),d=1<<a;d&t|e[a]&t&&(e[a]|=t),o&=~d}}var Le=0;function Vd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yd,kl,Gd,Qd,Kd,Sl=!1,ps=[],qn=null,Vn=null,Yn=null,lo=new Map,co=new Map,Gn=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function uo(e,t,o,a,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:p,targetContainers:[d]},t!==null&&(t=Eo(t),t!==null&&kl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function nx(e,t,o,a,d){switch(t){case"focusin":return qn=uo(qn,e,t,o,a,d),!0;case"dragenter":return Vn=uo(Vn,e,t,o,a,d),!0;case"mouseover":return Yn=uo(Yn,e,t,o,a,d),!0;case"pointerover":var p=d.pointerId;return lo.set(p,uo(lo.get(p)||null,e,t,o,a,d)),!0;case"gotpointercapture":return p=d.pointerId,co.set(p,uo(co.get(p)||null,e,t,o,a,d)),!0}return!1}function Jd(e){var t=Or(e.target);if(t!==null){var o=Dr(t);if(o!==null){if(t=o.tag,t===13){if(t=Fd(o),t!==null){e.blockedOn=t,Kd(e.priority,function(){Gd(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);ve=a,o.target.dispatchEvent(a),ve=null}else return t=Eo(o),t!==null&&kl(t),e.blockedOn=o,!1;t.shift()}return!0}function Zd(e,t,o){hs(e)&&o.delete(t)}function rx(){Sl=!1,qn!==null&&hs(qn)&&(qn=null),Vn!==null&&hs(Vn)&&(Vn=null),Yn!==null&&hs(Yn)&&(Yn=null),lo.forEach(Zd),co.forEach(Zd)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rx)))}function mo(e){function t(d){return fo(d,e)}if(0<ps.length){fo(ps[0],e);for(var o=1;o<ps.length;o++){var a=ps[o];a.blockedOn===e&&(a.blockedOn=null)}}for(qn!==null&&fo(qn,e),Vn!==null&&fo(Vn,e),Yn!==null&&fo(Yn,e),lo.forEach(t),co.forEach(t),o=0;o<Gn.length;o++)a=Gn[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Gn.length&&(o=Gn[0],o.blockedOn===null);)Jd(o),o.blockedOn===null&&Gn.shift()}var ni=L.ReactCurrentBatchConfig,gs=!0;function ix(e,t,o,a){var d=Le,p=ni.transition;ni.transition=null;try{Le=1,Cl(e,t,o,a)}finally{Le=d,ni.transition=p}}function ox(e,t,o,a){var d=Le,p=ni.transition;ni.transition=null;try{Le=4,Cl(e,t,o,a)}finally{Le=d,ni.transition=p}}function Cl(e,t,o,a){if(gs){var d=El(e,t,o,a);if(d===null)Hl(e,t,a,ys,o),Xd(e,a);else if(nx(d,e,t,o,a))a.stopPropagation();else if(Xd(e,a),t&4&&-1<tx.indexOf(e)){for(;d!==null;){var p=Eo(d);if(p!==null&&Yd(p),p=El(e,t,o,a),p===null&&Hl(e,t,a,ys,o),p===d)break;d=p}d!==null&&a.stopPropagation()}else Hl(e,t,a,null,o)}}var ys=null;function El(e,t,o,a){if(ys=null,e=Me(a),e=Or(e),e!==null)if(t=Dr(e),t===null)e=null;else if(o=t.tag,o===13){if(e=Fd(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ys=e,null}function ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vv()){case vl:return 1;case Wd:return 4;case cs:case Yv:return 16;case Ud:return 536870912;default:return 16}default:return 16}}var Qn=null,Rl=null,vs=null;function tf(){if(vs)return vs;var e,t=Rl,o=t.length,a,d="value"in Qn?Qn.value:Qn.textContent,p=d.length;for(e=0;e<o&&t[e]===d[e];e++);var w=o-e;for(a=1;a<=w&&t[o-a]===d[p-a];a++);return vs=d.slice(e,1<a?1-a:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function nf(){return!1}function Pt(e){function t(o,a,d,p,w){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(o=e[R],this[R]=o?o(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ws:nf,this.isPropagationStopped=nf,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Pt(ri),po=X({},ri,{view:0,detail:0}),sx=Pt(po),Tl,Al,ho,bs=X({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Tl=e.screenX-ho.screenX,Al=e.screenY-ho.screenY):Al=Tl=0,ho=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),rf=Pt(bs),ax=X({},bs,{dataTransfer:0}),lx=Pt(ax),cx=X({},po,{relatedTarget:0}),Nl=Pt(cx),ux=X({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=Pt(ux),fx=X({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mx=Pt(fx),px=X({},ri,{data:0}),of=Pt(px),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yx[e])?!!t[e]:!1}function Il(){return vx}var xx=X({},po,{key:function(e){if(e.key){var t=hx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wx=Pt(xx),bx=X({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=Pt(bx),kx=X({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),Sx=Pt(kx),Cx=X({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Pt(Cx),Rx=X({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Pt(Rx),Tx=[9,13,27,32],jl=m&&"CompositionEvent"in window,go=null;m&&"documentMode"in document&&(go=document.documentMode);var Ax=m&&"TextEvent"in window&&!go,af=m&&(!jl||go&&8<go&&11>=go),lf=" ",cf=!1;function uf(e,t){switch(e){case"keyup":return Tx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function Nx(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(cf=!0,lf);case"textInput":return e=t.data,e===lf&&cf?null:e;default:return null}}function Ix(e,t){if(ii)return e==="compositionend"||!jl&&uf(e,t)?(e=tf(),vs=Rl=Qn=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return af&&t.locale!=="ko"?null:t.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jx[e.type]:t==="textarea"}function mf(e,t,o,a){ss(a),t=Rs(t,"onChange"),0<t.length&&(o=new Pl("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var yo=null,vo=null;function Mx(e){If(e,0)}function ks(e){var t=ci(e);if(En(t))return e}function Lx(e,t){if(e==="change")return t}var pf=!1;if(m){var Ml;if(m){var Ll="oninput"in document;if(!Ll){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),Ll=typeof hf.oninput=="function"}Ml=Ll}else Ml=!1;pf=Ml&&(!document.documentMode||9<document.documentMode)}function gf(){yo&&(yo.detachEvent("onpropertychange",yf),vo=yo=null)}function yf(e){if(e.propertyName==="value"&&ks(vo)){var t=[];mf(t,vo,e,Me(e)),Od(Mx,t)}}function Dx(e,t,o){e==="focusin"?(gf(),yo=t,vo=o,yo.attachEvent("onpropertychange",yf)):e==="focusout"&&gf()}function Ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ks(vo)}function Fx(e,t){if(e==="click")return ks(t)}function $x(e,t){if(e==="input"||e==="change")return ks(t)}function _x(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:_x;function xo(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!h.call(t,d)||!Xt(e[d],t[d]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,t){var o=vf(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vf(o)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bf(){for(var e=window,t=$t();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=$t(e.document)}return t}function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zx(e){var t=bf(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&wf(o.ownerDocument.documentElement,o)){if(a!==null&&Dl(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,p=Math.min(a.start,d);a=a.end===void 0?p:Math.min(a.end,d),!e.extend&&p>a&&(d=a,a=p,p=d),d=xf(o,p);var w=xf(o,a);d&&w&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),p>a?(e.addRange(t),e.extend(w.node,w.offset)):(t.setEnd(w.node,w.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bx=m&&"documentMode"in document&&11>=document.documentMode,oi=null,Ol=null,wo=null,Fl=!1;function kf(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fl||oi==null||oi!==$t(a)||(a=oi,"selectionStart"in a&&Dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wo&&xo(wo,a)||(wo=a,a=Rs(Ol,"onSelect"),0<a.length&&(t=new Pl("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=oi)))}function Ss(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var si={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},$l={},Sf={};m&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Cs(e){if($l[e])return $l[e];if(!si[e])return e;var t=si[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Sf)return $l[e]=t[o];return e}var Cf=Cs("animationend"),Ef=Cs("animationiteration"),Rf=Cs("animationstart"),Pf=Cs("transitionend"),Tf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Tf.set(e,t),u(t,[e])}for(var _l=0;_l<Af.length;_l++){var zl=Af[_l],Hx=zl.toLowerCase(),Wx=zl[0].toUpperCase()+zl.slice(1);Kn(Hx,"on"+Wx)}Kn(Cf,"onAnimationEnd"),Kn(Ef,"onAnimationIteration"),Kn(Rf,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Pf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Nf(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,Hv(a,t,void 0,e),e.currentTarget=null}function If(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],d=a.event;a=a.listeners;e:{var p=void 0;if(t)for(var w=a.length-1;0<=w;w--){var R=a[w],A=R.instance,O=R.currentTarget;if(R=R.listener,A!==p&&d.isPropagationStopped())break e;Nf(d,R,O),p=A}else for(w=0;w<a.length;w++){if(R=a[w],A=R.instance,O=R.currentTarget,R=R.listener,A!==p&&d.isPropagationStopped())break e;Nf(d,R,O),p=A}}}if(ls)throw e=yl,ls=!1,yl=null,e}function $e(e,t){var o=t[Gl];o===void 0&&(o=t[Gl]=new Set);var a=e+"__bubble";o.has(a)||(jf(t,e,2,!1),o.add(a))}function Bl(e,t,o){var a=0;t&&(a|=4),jf(o,e,a,t)}var Es="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Es]){e[Es]=!0,s.forEach(function(o){o!=="selectionchange"&&(Ux.has(o)||Bl(o,!1,e),Bl(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Es]||(t[Es]=!0,Bl("selectionchange",!1,t))}}function jf(e,t,o,a){switch(ef(t)){case 1:var d=ix;break;case 4:d=ox;break;default:d=Cl}o=d.bind(null,t,o,e),d=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,o,{capture:!0,passive:d}):e.addEventListener(t,o,!0):d!==void 0?e.addEventListener(t,o,{passive:d}):e.addEventListener(t,o,!1)}function Hl(e,t,o,a,d){var p=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var w=a.tag;if(w===3||w===4){var R=a.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(w===4)for(w=a.return;w!==null;){var A=w.tag;if((A===3||A===4)&&(A=w.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;w=w.return}for(;R!==null;){if(w=Or(R),w===null)return;if(A=w.tag,A===5||A===6){a=p=w;continue e}R=R.parentNode}}a=a.return}Od(function(){var O=p,U=Me(o),V=[];e:{var W=Tf.get(e);if(W!==void 0){var ne=Pl,se=e;switch(e){case"keypress":if(xs(o)===0)break e;case"keydown":case"keyup":ne=wx;break;case"focusin":se="focus",ne=Nl;break;case"focusout":se="blur",ne=Nl;break;case"beforeblur":case"afterblur":ne=Nl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Sx;break;case Cf:case Ef:case Rf:ne=dx;break;case Pf:ne=Ex;break;case"scroll":ne=sx;break;case"wheel":ne=Px;break;case"copy":case"cut":case"paste":ne=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=sf}var le=(t&4)!==0,Ke=!le&&e==="scroll",M=le?W!==null?W+"Capture":null:W;le=[];for(var I=O,D;I!==null;){D=I;var K=D.stateNode;if(D.tag===5&&K!==null&&(D=K,M!==null&&(K=ro(I,M),K!=null&&le.push(So(I,K,D)))),Ke)break;I=I.return}0<le.length&&(W=new ne(W,se,null,o,U),V.push({event:W,listeners:le}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",W&&o!==ve&&(se=o.relatedTarget||o.fromElement)&&(Or(se)||se[Tn]))break e;if((ne||W)&&(W=U.window===U?U:(W=U.ownerDocument)?W.defaultView||W.parentWindow:window,ne?(se=o.relatedTarget||o.toElement,ne=O,se=se?Or(se):null,se!==null&&(Ke=Dr(se),se!==Ke||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=O),ne!==se)){if(le=rf,K="onMouseLeave",M="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(le=sf,K="onPointerLeave",M="onPointerEnter",I="pointer"),Ke=ne==null?W:ci(ne),D=se==null?W:ci(se),W=new le(K,I+"leave",ne,o,U),W.target=Ke,W.relatedTarget=D,K=null,Or(U)===O&&(le=new le(M,I+"enter",se,o,U),le.target=D,le.relatedTarget=Ke,K=le),Ke=K,ne&&se)t:{for(le=ne,M=se,I=0,D=le;D;D=ai(D))I++;for(D=0,K=M;K;K=ai(K))D++;for(;0<I-D;)le=ai(le),I--;for(;0<D-I;)M=ai(M),D--;for(;I--;){if(le===M||M!==null&&le===M.alternate)break t;le=ai(le),M=ai(M)}le=null}else le=null;ne!==null&&Mf(V,W,ne,le,!1),se!==null&&Ke!==null&&Mf(V,Ke,se,le,!0)}}e:{if(W=O?ci(O):window,ne=W.nodeName&&W.nodeName.toLowerCase(),ne==="select"||ne==="input"&&W.type==="file")var ue=Lx;else if(ff(W))if(pf)ue=$x;else{ue=Ox;var me=Dx}else(ne=W.nodeName)&&ne.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ue=Fx);if(ue&&(ue=ue(e,O))){mf(V,ue,o,U);break e}me&&me(e,W,O),e==="focusout"&&(me=W._wrapperState)&&me.controlled&&W.type==="number"&&Ge(W,"number",W.value)}switch(me=O?ci(O):window,e){case"focusin":(ff(me)||me.contentEditable==="true")&&(oi=me,Ol=O,wo=null);break;case"focusout":wo=Ol=oi=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,kf(V,o,U);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":kf(V,o,U)}var pe;if(jl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ii?uf(e,o)&&(ge="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(af&&o.locale!=="ko"&&(ii||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ii&&(pe=tf()):(Qn=U,Rl="value"in Qn?Qn.value:Qn.textContent,ii=!0)),me=Rs(O,ge),0<me.length&&(ge=new of(ge,e,null,o,U),V.push({event:ge,listeners:me}),pe?ge.data=pe:(pe=df(o),pe!==null&&(ge.data=pe)))),(pe=Ax?Nx(e,o):Ix(e,o))&&(O=Rs(O,"onBeforeInput"),0<O.length&&(U=new of("onBeforeInput","beforeinput",null,o,U),V.push({event:U,listeners:O}),U.data=pe))}If(V,t)})}function So(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Rs(e,t){for(var o=t+"Capture",a=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ro(e,o),p!=null&&a.unshift(So(e,p,d)),p=ro(e,t),p!=null&&a.push(So(e,p,d))),e=e.return}return a}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mf(e,t,o,a,d){for(var p=t._reactName,w=[];o!==null&&o!==a;){var R=o,A=R.alternate,O=R.stateNode;if(A!==null&&A===a)break;R.tag===5&&O!==null&&(R=O,d?(A=ro(o,p),A!=null&&w.unshift(So(o,A,R))):d||(A=ro(o,p),A!=null&&w.push(So(o,A,R)))),o=o.return}w.length!==0&&e.push({event:t,listeners:w})}var qx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(qx,`
`).replace(Vx,"")}function Ps(e,t,o){if(t=Lf(t),Lf(e)!==t&&o)throw Error(i(425))}function Ts(){}var Wl=null,Ul=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(Qx)}:Vl;function Qx(e){setTimeout(function(){throw e})}function Yl(e,t){var o=t,a=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){e.removeChild(d),mo(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);mo(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),fn="__reactFiber$"+li,Co="__reactProps$"+li,Tn="__reactContainer$"+li,Gl="__reactEvents$"+li,Kx="__reactListeners$"+li,Xx="__reactHandles$"+li;function Or(e){var t=e[fn];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Tn]||o[fn]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Of(e);e!==null;){if(o=e[fn])return o;e=Of(e)}return t}e=o,o=e.parentNode}return null}function Eo(e){return e=e[fn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ci(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function As(e){return e[Co]||null}var Ql=[],ui=-1;function Jn(e){return{current:e}}function _e(e){0>ui||(e.current=Ql[ui],Ql[ui]=null,ui--)}function Fe(e,t){ui++,Ql[ui]=e.current,e.current=t}var Zn={},ut=Jn(Zn),wt=Jn(!1),Fr=Zn;function di(e,t){var o=e.type.contextTypes;if(!o)return Zn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=t[p];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function bt(e){return e=e.childContextTypes,e!=null}function Ns(){_e(wt),_e(ut)}function Ff(e,t,o){if(ut.current!==Zn)throw Error(i(168));Fe(ut,t),Fe(wt,o)}function $f(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in t))throw Error(i(108,Re(e)||"Unknown",d));return X({},o,a)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,Fr=ut.current,Fe(ut,e),Fe(wt,wt.current),!0}function _f(e,t,o){var a=e.stateNode;if(!a)throw Error(i(169));o?(e=$f(e,t,Fr),a.__reactInternalMemoizedMergedChildContext=e,_e(wt),_e(ut),Fe(ut,e)):_e(wt),Fe(wt,o)}var An=null,js=!1,Kl=!1;function zf(e){An===null?An=[e]:An.push(e)}function Jx(e){js=!0,zf(e)}function er(){if(!Kl&&An!==null){Kl=!0;var e=0,t=Le;try{var o=An;for(Le=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}An=null,js=!1}catch(d){throw An!==null&&(An=An.slice(e+1)),Bd(vl,er),d}finally{Le=t,Kl=!1}}return null}var fi=[],mi=0,Ms=null,Ls=0,Bt=[],Ht=0,$r=null,Nn=1,In="";function _r(e,t){fi[mi++]=Ls,fi[mi++]=Ms,Ms=e,Ls=t}function Bf(e,t,o){Bt[Ht++]=Nn,Bt[Ht++]=In,Bt[Ht++]=$r,$r=e;var a=Nn;e=In;var d=32-Kt(a)-1;a&=~(1<<d),o+=1;var p=32-Kt(t)+d;if(30<p){var w=d-d%5;p=(a&(1<<w)-1).toString(32),a>>=w,d-=w,Nn=1<<32-Kt(t)+d|o<<d|a,In=p+e}else Nn=1<<p|o<<d|a,In=e}function Xl(e){e.return!==null&&(_r(e,1),Bf(e,1,0))}function Jl(e){for(;e===Ms;)Ms=fi[--mi],fi[mi]=null,Ls=fi[--mi],fi[mi]=null;for(;e===$r;)$r=Bt[--Ht],Bt[Ht]=null,In=Bt[--Ht],Bt[Ht]=null,Nn=Bt[--Ht],Bt[Ht]=null}var Tt=null,At=null,He=!1,Jt=null;function Hf(e,t){var o=Vt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Wf(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,At=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=$r!==null?{id:Nn,overflow:In}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Vt(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Tt=e,At=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ec(e){if(He){var t=At;if(t){var o=t;if(!Wf(e,t)){if(Zl(e))throw Error(i(418));t=Xn(o.nextSibling);var a=Tt;t&&Wf(e,t)?Hf(a,o):(e.flags=e.flags&-4097|2,He=!1,Tt=e)}}else{if(Zl(e))throw Error(i(418));e.flags=e.flags&-4097|2,He=!1,Tt=e}}}function Uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Ds(e){if(e!==Tt)return!1;if(!He)return Uf(e),He=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=At)){if(Zl(e))throw qf(),Error(i(418));for(;t;)Hf(e,t),t=Xn(t.nextSibling)}if(Uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){At=Xn(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}At=null}}else At=Tt?Xn(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=At;e;)e=Xn(e.nextSibling)}function pi(){At=Tt=null,He=!1}function tc(e){Jt===null?Jt=[e]:Jt.push(e)}var Zx=L.ReactCurrentBatchConfig;function Ro(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,e));var d=a,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(w){var R=d.refs;w===null?delete R[p]:R[p]=w},t._stringRef=p,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Os(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function Yf(e){function t(M,I){if(e){var D=M.deletions;D===null?(M.deletions=[I],M.flags|=16):D.push(I)}}function o(M,I){if(!e)return null;for(;I!==null;)t(M,I),I=I.sibling;return null}function a(M,I){for(M=new Map;I!==null;)I.key!==null?M.set(I.key,I):M.set(I.index,I),I=I.sibling;return M}function d(M,I){return M=lr(M,I),M.index=0,M.sibling=null,M}function p(M,I,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<I?(M.flags|=2,I):D):(M.flags|=2,I)):(M.flags|=1048576,I)}function w(M){return e&&M.alternate===null&&(M.flags|=2),M}function R(M,I,D,K){return I===null||I.tag!==6?(I=Vc(D,M.mode,K),I.return=M,I):(I=d(I,D),I.return=M,I)}function A(M,I,D,K){var ue=D.type;return ue===z?U(M,I,D.props.children,K,D.key):I!==null&&(I.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ce&&Vf(ue)===I.type)?(K=d(I,D.props),K.ref=Ro(M,I,D),K.return=M,K):(K=sa(D.type,D.key,D.props,null,M.mode,K),K.ref=Ro(M,I,D),K.return=M,K)}function O(M,I,D,K){return I===null||I.tag!==4||I.stateNode.containerInfo!==D.containerInfo||I.stateNode.implementation!==D.implementation?(I=Yc(D,M.mode,K),I.return=M,I):(I=d(I,D.children||[]),I.return=M,I)}function U(M,I,D,K,ue){return I===null||I.tag!==7?(I=Yr(D,M.mode,K,ue),I.return=M,I):(I=d(I,D),I.return=M,I)}function V(M,I,D){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Vc(""+I,M.mode,D),I.return=M,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $:return D=sa(I.type,I.key,I.props,null,M.mode,D),D.ref=Ro(M,null,I),D.return=M,D;case H:return I=Yc(I,M.mode,D),I.return=M,I;case ce:var K=I._init;return V(M,K(I._payload),D)}if(_t(I)||Q(I))return I=Yr(I,M.mode,D,null),I.return=M,I;Os(M,I)}return null}function W(M,I,D,K){var ue=I!==null?I.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ue!==null?null:R(M,I,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $:return D.key===ue?A(M,I,D,K):null;case H:return D.key===ue?O(M,I,D,K):null;case ce:return ue=D._init,W(M,I,ue(D._payload),K)}if(_t(D)||Q(D))return ue!==null?null:U(M,I,D,K,null);Os(M,D)}return null}function ne(M,I,D,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number")return M=M.get(D)||null,R(I,M,""+K,ue);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case $:return M=M.get(K.key===null?D:K.key)||null,A(I,M,K,ue);case H:return M=M.get(K.key===null?D:K.key)||null,O(I,M,K,ue);case ce:var me=K._init;return ne(M,I,D,me(K._payload),ue)}if(_t(K)||Q(K))return M=M.get(D)||null,U(I,M,K,ue,null);Os(I,K)}return null}function se(M,I,D,K){for(var ue=null,me=null,pe=I,ge=I=0,it=null;pe!==null&&ge<D.length;ge++){pe.index>ge?(it=pe,pe=null):it=pe.sibling;var Ae=W(M,pe,D[ge],K);if(Ae===null){pe===null&&(pe=it);break}e&&pe&&Ae.alternate===null&&t(M,pe),I=p(Ae,I,ge),me===null?ue=Ae:me.sibling=Ae,me=Ae,pe=it}if(ge===D.length)return o(M,pe),He&&_r(M,ge),ue;if(pe===null){for(;ge<D.length;ge++)pe=V(M,D[ge],K),pe!==null&&(I=p(pe,I,ge),me===null?ue=pe:me.sibling=pe,me=pe);return He&&_r(M,ge),ue}for(pe=a(M,pe);ge<D.length;ge++)it=ne(pe,M,ge,D[ge],K),it!==null&&(e&&it.alternate!==null&&pe.delete(it.key===null?ge:it.key),I=p(it,I,ge),me===null?ue=it:me.sibling=it,me=it);return e&&pe.forEach(function(cr){return t(M,cr)}),He&&_r(M,ge),ue}function le(M,I,D,K){var ue=Q(D);if(typeof ue!="function")throw Error(i(150));if(D=ue.call(D),D==null)throw Error(i(151));for(var me=ue=null,pe=I,ge=I=0,it=null,Ae=D.next();pe!==null&&!Ae.done;ge++,Ae=D.next()){pe.index>ge?(it=pe,pe=null):it=pe.sibling;var cr=W(M,pe,Ae.value,K);if(cr===null){pe===null&&(pe=it);break}e&&pe&&cr.alternate===null&&t(M,pe),I=p(cr,I,ge),me===null?ue=cr:me.sibling=cr,me=cr,pe=it}if(Ae.done)return o(M,pe),He&&_r(M,ge),ue;if(pe===null){for(;!Ae.done;ge++,Ae=D.next())Ae=V(M,Ae.value,K),Ae!==null&&(I=p(Ae,I,ge),me===null?ue=Ae:me.sibling=Ae,me=Ae);return He&&_r(M,ge),ue}for(pe=a(M,pe);!Ae.done;ge++,Ae=D.next())Ae=ne(pe,M,ge,Ae.value,K),Ae!==null&&(e&&Ae.alternate!==null&&pe.delete(Ae.key===null?ge:Ae.key),I=p(Ae,I,ge),me===null?ue=Ae:me.sibling=Ae,me=Ae);return e&&pe.forEach(function(j0){return t(M,j0)}),He&&_r(M,ge),ue}function Ke(M,I,D,K){if(typeof D=="object"&&D!==null&&D.type===z&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case $:e:{for(var ue=D.key,me=I;me!==null;){if(me.key===ue){if(ue=D.type,ue===z){if(me.tag===7){o(M,me.sibling),I=d(me,D.props.children),I.return=M,M=I;break e}}else if(me.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ce&&Vf(ue)===me.type){o(M,me.sibling),I=d(me,D.props),I.ref=Ro(M,me,D),I.return=M,M=I;break e}o(M,me);break}else t(M,me);me=me.sibling}D.type===z?(I=Yr(D.props.children,M.mode,K,D.key),I.return=M,M=I):(K=sa(D.type,D.key,D.props,null,M.mode,K),K.ref=Ro(M,I,D),K.return=M,M=K)}return w(M);case H:e:{for(me=D.key;I!==null;){if(I.key===me)if(I.tag===4&&I.stateNode.containerInfo===D.containerInfo&&I.stateNode.implementation===D.implementation){o(M,I.sibling),I=d(I,D.children||[]),I.return=M,M=I;break e}else{o(M,I);break}else t(M,I);I=I.sibling}I=Yc(D,M.mode,K),I.return=M,M=I}return w(M);case ce:return me=D._init,Ke(M,I,me(D._payload),K)}if(_t(D))return se(M,I,D,K);if(Q(D))return le(M,I,D,K);Os(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,I!==null&&I.tag===6?(o(M,I.sibling),I=d(I,D),I.return=M,M=I):(o(M,I),I=Vc(D,M.mode,K),I.return=M,M=I),w(M)):o(M,I)}return Ke}var hi=Yf(!0),Gf=Yf(!1),Fs=Jn(null),$s=null,gi=null,nc=null;function rc(){nc=gi=$s=null}function ic(e){var t=Fs.current;_e(Fs),e._currentValue=t}function oc(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function yi(e,t){$s=e,nc=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(kt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:t,next:null},gi===null){if($s===null)throw Error(i(308));gi=e,$s.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return t}var zr=null;function sc(e){zr===null?zr=[e]:zr.push(e)}function Qf(e,t,o,a){var d=t.interleaved;return d===null?(o.next=o,sc(t)):(o.next=d.next,d.next=o),t.interleaved=o,jn(e,a)}function jn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var tr=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nr(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,jn(e,o)}return d=a.interleaved,d===null?(t.next=t,sc(a)):(t.next=d.next,d.next=t),a.interleaved=t,jn(e,o)}function _s(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,bl(e,o)}}function Xf(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?d=p=t:p=p.next=t}else d=p=t;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function zs(e,t,o,a){var d=e.updateQueue;tr=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var A=R,O=A.next;A.next=null,w===null?p=O:w.next=O,w=A;var U=e.alternate;U!==null&&(U=U.updateQueue,R=U.lastBaseUpdate,R!==w&&(R===null?U.firstBaseUpdate=O:R.next=O,U.lastBaseUpdate=A))}if(p!==null){var V=d.baseState;w=0,U=O=A=null,R=p;do{var W=R.lane,ne=R.eventTime;if((a&W)===W){U!==null&&(U=U.next={eventTime:ne,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var se=e,le=R;switch(W=t,ne=o,le.tag){case 1:if(se=le.payload,typeof se=="function"){V=se.call(ne,V,W);break e}V=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=le.payload,W=typeof se=="function"?se.call(ne,V,W):se,W==null)break e;V=X({},V,W);break e;case 2:tr=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,W=d.effects,W===null?d.effects=[R]:W.push(R))}else ne={eventTime:ne,lane:W,tag:R.tag,payload:R.payload,callback:R.callback,next:null},U===null?(O=U=ne,A=V):U=U.next=ne,w|=W;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;W=R,R=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(U===null&&(A=V),d.baseState=A,d.firstBaseUpdate=O,d.lastBaseUpdate=U,t=d.shared.interleaved,t!==null){d=t;do w|=d.lane,d=d.next;while(d!==t)}else p===null&&(d.shared.lanes=0);Wr|=w,e.lanes=w,e.memoizedState=V}}function Jf(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var Po={},mn=Jn(Po),To=Jn(Po),Ao=Jn(Po);function Br(e){if(e===Po)throw Error(i(174));return e}function lc(e,t){switch(Fe(Ao,t),Fe(To,e),Fe(mn,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:un(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=un(t,e)}_e(mn),Fe(mn,t)}function vi(){_e(mn),_e(To),_e(Ao)}function Zf(e){Br(Ao.current);var t=Br(mn.current),o=un(t,e.type);t!==o&&(Fe(To,e),Fe(mn,o))}function cc(e){To.current===e&&(_e(mn),_e(To))}var We=Jn(0);function Bs(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uc=[];function dc(){for(var e=0;e<uc.length;e++)uc[e]._workInProgressVersionPrimary=null;uc.length=0}var Hs=L.ReactCurrentDispatcher,fc=L.ReactCurrentBatchConfig,Hr=0,Ue=null,et=null,nt=null,Ws=!1,No=!1,Io=0,e0=0;function dt(){throw Error(i(321))}function mc(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Xt(e[o],t[o]))return!1;return!0}function pc(e,t,o,a,d,p){if(Hr=p,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hs.current=e===null||e.memoizedState===null?i0:o0,e=o(a,d),No){p=0;do{if(No=!1,Io=0,25<=p)throw Error(i(301));p+=1,nt=et=null,t.updateQueue=null,Hs.current=s0,e=o(a,d)}while(No)}if(Hs.current=Vs,t=et!==null&&et.next!==null,Hr=0,nt=et=Ue=null,Ws=!1,t)throw Error(i(300));return e}function hc(){var e=Io!==0;return Io=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ue.memoizedState=nt=e:nt=nt.next=e,nt}function Ut(){if(et===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=nt===null?Ue.memoizedState:nt.next;if(t!==null)nt=t,et=e;else{if(e===null)throw Error(i(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},nt===null?Ue.memoizedState=nt=e:nt=nt.next=e}return nt}function jo(e,t){return typeof t=="function"?t(e):t}function gc(e){var t=Ut(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=et,d=a.baseQueue,p=o.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}a.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,a=a.baseState;var R=w=null,A=null,O=p;do{var U=O.lane;if((Hr&U)===U)A!==null&&(A=A.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),a=O.hasEagerState?O.eagerState:e(a,O.action);else{var V={lane:U,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};A===null?(R=A=V,w=a):A=A.next=V,Ue.lanes|=U,Wr|=U}O=O.next}while(O!==null&&O!==p);A===null?w=a:A.next=R,Xt(a,t.memoizedState)||(kt=!0),t.memoizedState=a,t.baseState=w,t.baseQueue=A,o.lastRenderedState=a}if(e=o.interleaved,e!==null){d=e;do p=d.lane,Ue.lanes|=p,Wr|=p,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function yc(e){var t=Ut(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=o.dispatch,d=o.pending,p=t.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do p=e(p,w.action),w=w.next;while(w!==d);Xt(p,t.memoizedState)||(kt=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),o.lastRenderedState=p}return[p,a]}function em(){}function tm(e,t){var o=Ue,a=Ut(),d=t(),p=!Xt(a.memoizedState,d);if(p&&(a.memoizedState=d,kt=!0),a=a.queue,vc(im.bind(null,o,a,e),[e]),a.getSnapshot!==t||p||nt!==null&&nt.memoizedState.tag&1){if(o.flags|=2048,Mo(9,rm.bind(null,o,a,d,t),void 0,null),rt===null)throw Error(i(349));(Hr&30)!==0||nm(o,t,d)}return d}function nm(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function rm(e,t,o,a){t.value=o,t.getSnapshot=a,om(t)&&sm(e)}function im(e,t,o){return o(function(){om(t)&&sm(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Xt(e,o)}catch{return!0}}function sm(e){var t=jn(e,1);t!==null&&nn(t,e,1,-1)}function am(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=r0.bind(null,Ue,e),[t.memoizedState,e]}function Mo(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function lm(){return Ut().memoizedState}function Us(e,t,o,a){var d=pn();Ue.flags|=e,d.memoizedState=Mo(1|t,o,void 0,a===void 0?null:a)}function qs(e,t,o,a){var d=Ut();a=a===void 0?null:a;var p=void 0;if(et!==null){var w=et.memoizedState;if(p=w.destroy,a!==null&&mc(a,w.deps)){d.memoizedState=Mo(t,o,p,a);return}}Ue.flags|=e,d.memoizedState=Mo(1|t,o,p,a)}function cm(e,t){return Us(8390656,8,e,t)}function vc(e,t){return qs(2048,8,e,t)}function um(e,t){return qs(4,2,e,t)}function dm(e,t){return qs(4,4,e,t)}function fm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mm(e,t,o){return o=o!=null?o.concat([e]):null,qs(4,4,fm.bind(null,t,e),o)}function xc(){}function pm(e,t){var o=Ut();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&mc(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function hm(e,t){var o=Ut();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&mc(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function gm(e,t,o){return(Hr&21)===0?(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=o):(Xt(o,t)||(o=qd(),Ue.lanes|=o,Wr|=o,e.baseState=!0),t)}function t0(e,t){var o=Le;Le=o!==0&&4>o?o:4,e(!0);var a=fc.transition;fc.transition={};try{e(!1),t()}finally{Le=o,fc.transition=a}}function ym(){return Ut().memoizedState}function n0(e,t,o){var a=sr(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},vm(e))xm(t,o);else if(o=Qf(e,t,o,a),o!==null){var d=yt();nn(o,e,a,d),wm(o,t,a)}}function r0(e,t,o){var a=sr(e),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(vm(e))xm(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var w=t.lastRenderedState,R=p(w,o);if(d.hasEagerState=!0,d.eagerState=R,Xt(R,w)){var A=t.interleaved;A===null?(d.next=d,sc(t)):(d.next=A.next,A.next=d),t.interleaved=d;return}}catch{}finally{}o=Qf(e,t,d,a),o!==null&&(d=yt(),nn(o,e,a,d),wm(o,t,a))}}function vm(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function xm(e,t){No=Ws=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function wm(e,t,o){if((o&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,bl(e,o)}}var Vs={readContext:Wt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},i0={readContext:Wt,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:cm,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Us(4194308,4,fm.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Us(4194308,4,e,t)},useInsertionEffect:function(e,t){return Us(4,2,e,t)},useMemo:function(e,t){var o=pn();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=pn();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=n0.bind(null,Ue,e),[a.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:am,useDebugValue:xc,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=am(!1),t=e[0];return e=t0.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=Ue,d=pn();if(He){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),rt===null)throw Error(i(349));(Hr&30)!==0||nm(a,t,o)}d.memoizedState=o;var p={value:o,getSnapshot:t};return d.queue=p,cm(im.bind(null,a,p,e),[e]),a.flags|=2048,Mo(9,rm.bind(null,a,p,o,t),void 0,null),o},useId:function(){var e=pn(),t=rt.identifierPrefix;if(He){var o=In,a=Nn;o=(a&~(1<<32-Kt(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=Io++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=e0++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},o0={readContext:Wt,useCallback:pm,useContext:Wt,useEffect:vc,useImperativeHandle:mm,useInsertionEffect:um,useLayoutEffect:dm,useMemo:hm,useReducer:gc,useRef:lm,useState:function(){return gc(jo)},useDebugValue:xc,useDeferredValue:function(e){var t=Ut();return gm(t,et.memoizedState,e)},useTransition:function(){var e=gc(jo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1},s0={readContext:Wt,useCallback:pm,useContext:Wt,useEffect:vc,useImperativeHandle:mm,useInsertionEffect:um,useLayoutEffect:dm,useMemo:hm,useReducer:yc,useRef:lm,useState:function(){return yc(jo)},useDebugValue:xc,useDeferredValue:function(e){var t=Ut();return et===null?t.memoizedState=e:gm(t,et.memoizedState,e)},useTransition:function(){var e=yc(jo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1};function Zt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function wc(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:X({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ys={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=yt(),d=sr(e),p=Mn(a,d);p.payload=t,o!=null&&(p.callback=o),t=nr(e,p,d),t!==null&&(nn(t,e,d,a),_s(t,e,d))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=yt(),d=sr(e),p=Mn(a,d);p.tag=1,p.payload=t,o!=null&&(p.callback=o),t=nr(e,p,d),t!==null&&(nn(t,e,d,a),_s(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=yt(),a=sr(e),d=Mn(o,a);d.tag=2,t!=null&&(d.callback=t),t=nr(e,d,a),t!==null&&(nn(t,e,a,o),_s(t,e,a))}};function bm(e,t,o,a,d,p,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,p,w):t.prototype&&t.prototype.isPureReactComponent?!xo(o,a)||!xo(d,p):!0}function km(e,t,o){var a=!1,d=Zn,p=t.contextType;return typeof p=="object"&&p!==null?p=Wt(p):(d=bt(t)?Fr:ut.current,a=t.contextTypes,p=(a=a!=null)?di(e,d):Zn),t=new t(o,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),t}function Sm(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function bc(e,t,o,a){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},ac(e);var p=t.contextType;typeof p=="object"&&p!==null?d.context=Wt(p):(p=bt(t)?Fr:ut.current,d.context=di(e,p)),d.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(wc(e,t,p,o),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Ys.enqueueReplaceState(d,d.state,null),zs(e,o,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function xi(e,t){try{var o="",a=t;do o+=xe(a),a=a.return;while(a);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:d,digest:null}}function kc(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Sc(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var a0=typeof WeakMap=="function"?WeakMap:Map;function Cm(e,t,o){o=Mn(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){ea||(ea=!0,$c=a),Sc(e,t)},o}function Em(e,t,o){o=Mn(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=t.value;o.payload=function(){return a(d)},o.callback=function(){Sc(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Sc(e,t),typeof a!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=t.stack;this.componentDidCatch(t.value,{componentStack:w!==null?w:""})}),o}function Rm(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new a0;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(o)||(d.add(o),e=b0.bind(null,e,t,o),t.then(e,e))}function Pm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tm(e,t,o,a,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=Mn(-1,1),t.tag=2,nr(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var l0=L.ReactCurrentOwner,kt=!1;function gt(e,t,o,a){t.child=e===null?Gf(t,null,o,a):hi(t,e.child,o,a)}function Am(e,t,o,a,d){o=o.render;var p=t.ref;return yi(t,d),a=pc(e,t,o,a,p,d),o=hc(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,Ln(e,t,d)):(He&&o&&Xl(t),t.flags|=1,gt(e,t,a,d),t.child)}function Nm(e,t,o,a,d){if(e===null){var p=o.type;return typeof p=="function"&&!qc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=p,Im(e,t,p,a,d)):(e=sa(o.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&d)===0){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(w,a)&&e.ref===t.ref)return Ln(e,t,d)}return t.flags|=1,e=lr(p,a),e.ref=t.ref,e.return=t,t.child=e}function Im(e,t,o,a,d){if(e!==null){var p=e.memoizedProps;if(xo(p,a)&&e.ref===t.ref)if(kt=!1,t.pendingProps=a=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(kt=!0);else return t.lanes=e.lanes,Ln(e,t,d)}return Cc(e,t,o,a,d)}function jm(e,t,o){var a=t.pendingProps,d=a.children,p=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(bi,Nt),Nt|=o;else{if((o&1073741824)===0)return e=p!==null?p.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fe(bi,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=p!==null?p.baseLanes:o,Fe(bi,Nt),Nt|=a}else p!==null?(a=p.baseLanes|o,t.memoizedState=null):a=o,Fe(bi,Nt),Nt|=a;return gt(e,t,d,o),t.child}function Mm(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Cc(e,t,o,a,d){var p=bt(o)?Fr:ut.current;return p=di(t,p),yi(t,d),o=pc(e,t,o,a,p,d),a=hc(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,Ln(e,t,d)):(He&&a&&Xl(t),t.flags|=1,gt(e,t,o,d),t.child)}function Lm(e,t,o,a,d){if(bt(o)){var p=!0;Is(t)}else p=!1;if(yi(t,d),t.stateNode===null)Qs(e,t),km(t,o,a),bc(t,o,a,d),a=!0;else if(e===null){var w=t.stateNode,R=t.memoizedProps;w.props=R;var A=w.context,O=o.contextType;typeof O=="object"&&O!==null?O=Wt(O):(O=bt(o)?Fr:ut.current,O=di(t,O));var U=o.getDerivedStateFromProps,V=typeof U=="function"||typeof w.getSnapshotBeforeUpdate=="function";V||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==a||A!==O)&&Sm(t,w,a,O),tr=!1;var W=t.memoizedState;w.state=W,zs(t,a,w,d),A=t.memoizedState,R!==a||W!==A||wt.current||tr?(typeof U=="function"&&(wc(t,o,U,a),A=t.memoizedState),(R=tr||bm(t,o,R,a,W,A,O))?(V||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(t.flags|=4194308)):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),w.props=a,w.state=A,w.context=O,a=R):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{w=t.stateNode,Kf(e,t),R=t.memoizedProps,O=t.type===t.elementType?R:Zt(t.type,R),w.props=O,V=t.pendingProps,W=w.context,A=o.contextType,typeof A=="object"&&A!==null?A=Wt(A):(A=bt(o)?Fr:ut.current,A=di(t,A));var ne=o.getDerivedStateFromProps;(U=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==V||W!==A)&&Sm(t,w,a,A),tr=!1,W=t.memoizedState,w.state=W,zs(t,a,w,d);var se=t.memoizedState;R!==V||W!==se||wt.current||tr?(typeof ne=="function"&&(wc(t,o,ne,a),se=t.memoizedState),(O=tr||bm(t,o,O,a,W,se,A)||!1)?(U||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(a,se,A),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(a,se,A)),typeof w.componentDidUpdate=="function"&&(t.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=se),w.props=a,w.state=se,w.context=A,a=O):(typeof w.componentDidUpdate!="function"||R===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),a=!1)}return Ec(e,t,o,a,p,d)}function Ec(e,t,o,a,d,p){Mm(e,t);var w=(t.flags&128)!==0;if(!a&&!w)return d&&_f(t,o,!1),Ln(e,t,p);a=t.stateNode,l0.current=t;var R=w&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&w?(t.child=hi(t,e.child,null,p),t.child=hi(t,null,R,p)):gt(e,t,R,p),t.memoizedState=a.state,d&&_f(t,o,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?Ff(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ff(e,t.context,!1),lc(e,t.containerInfo)}function Om(e,t,o,a,d){return pi(),tc(d),t.flags|=256,gt(e,t,o,a),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function Pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fm(e,t,o){var a=t.pendingProps,d=We.current,p=!1,w=(t.flags&128)!==0,R;if((R=w)||(R=e!==null&&e.memoizedState===null?!1:(d&2)!==0),R?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Fe(We,d&1),e===null)return ec(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(w=a.children,e=a.fallback,p?(a=t.mode,p=t.child,w={mode:"hidden",children:w},(a&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=aa(w,a,0,null),e=Yr(e,a,o,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=Pc(o),t.memoizedState=Rc,e):Tc(t,w));if(d=e.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return c0(e,t,w,a,R,d,o);if(p){p=a.fallback,w=t.mode,d=e.child,R=d.sibling;var A={mode:"hidden",children:a.children};return(w&1)===0&&t.child!==d?(a=t.child,a.childLanes=0,a.pendingProps=A,t.deletions=null):(a=lr(d,A),a.subtreeFlags=d.subtreeFlags&14680064),R!==null?p=lr(R,p):(p=Yr(p,w,o,null),p.flags|=2),p.return=t,a.return=t,a.sibling=p,t.child=a,a=p,p=t.child,w=e.child.memoizedState,w=w===null?Pc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=e.childLanes&~o,t.memoizedState=Rc,a}return p=e.child,e=p.sibling,a=lr(p,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function Tc(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gs(e,t,o,a){return a!==null&&tc(a),hi(t,e.child,null,o),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c0(e,t,o,a,d,p,w){if(o)return t.flags&256?(t.flags&=-257,a=kc(Error(i(422))),Gs(e,t,w,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=a.fallback,d=t.mode,a=aa({mode:"visible",children:a.children},d,0,null),p=Yr(p,d,w,null),p.flags|=2,a.return=t,p.return=t,a.sibling=p,t.child=a,(t.mode&1)!==0&&hi(t,e.child,null,w),t.child.memoizedState=Pc(w),t.memoizedState=Rc,p);if((t.mode&1)===0)return Gs(e,t,w,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var R=a.dgst;return a=R,p=Error(i(419)),a=kc(p,a,void 0),Gs(e,t,w,a)}if(R=(w&e.childLanes)!==0,kt||R){if(a=rt,a!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,jn(e,d),nn(a,e,d,-1))}return Uc(),a=kc(Error(i(421))),Gs(e,t,w,a)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=k0.bind(null,e),d._reactRetry=t,null):(e=p.treeContext,At=Xn(d.nextSibling),Tt=t,He=!0,Jt=null,e!==null&&(Bt[Ht++]=Nn,Bt[Ht++]=In,Bt[Ht++]=$r,Nn=e.id,In=e.overflow,$r=t),t=Tc(t,a.children),t.flags|=4096,t)}function $m(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),oc(e.return,t,o)}function Ac(e,t,o,a,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=o,p.tailMode=d)}function _m(e,t,o){var a=t.pendingProps,d=a.revealOrder,p=a.tail;if(gt(e,t,a.children,o),a=We.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,o,t);else if(e.tag===19)$m(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Fe(We,a),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(o=t.child,d=null;o!==null;)e=o.alternate,e!==null&&Bs(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=t.child,t.child=null):(d=o.sibling,o.sibling=null),Ac(t,!1,d,o,p);break;case"backwards":for(o=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Bs(e)===null){t.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}Ac(t,!0,o,null,p);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),Wr|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=lr(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=lr(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function u0(e,t,o){switch(t.tag){case 3:Dm(t),pi();break;case 5:Zf(t);break;case 1:bt(t.type)&&Is(t);break;case 4:lc(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,d=t.memoizedProps.value;Fe(Fs,a._currentValue),a._currentValue=d;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Fe(We,We.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?Fm(e,t,o):(Fe(We,We.current&1),e=Ln(e,t,o),e!==null?e.sibling:null);Fe(We,We.current&1);break;case 19:if(a=(o&t.childLanes)!==0,(e.flags&128)!==0){if(a)return _m(e,t,o);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Fe(We,We.current),a)break;return null;case 22:case 23:return t.lanes=0,jm(e,t,o)}return Ln(e,t,o)}var zm,Nc,Bm,Hm;zm=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Nc=function(){},Bm=function(e,t,o,a){var d=e.memoizedProps;if(d!==a){e=t.stateNode,Br(mn.current);var p=null;switch(o){case"input":d=Rn(e,d),a=Rn(e,a),p=[];break;case"select":d=X({},d,{value:void 0}),a=X({},a,{value:void 0}),p=[];break;case"textarea":d=Ji(e,d),a=Ji(e,a),p=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ts)}zt(o,a);var w;o=null;for(O in d)if(!a.hasOwnProperty(O)&&d.hasOwnProperty(O)&&d[O]!=null)if(O==="style"){var R=d[O];for(w in R)R.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(l.hasOwnProperty(O)?p||(p=[]):(p=p||[]).push(O,null));for(O in a){var A=a[O];if(R=d!=null?d[O]:void 0,a.hasOwnProperty(O)&&A!==R&&(A!=null||R!=null))if(O==="style")if(R){for(w in R)!R.hasOwnProperty(w)||A&&A.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in A)A.hasOwnProperty(w)&&R[w]!==A[w]&&(o||(o={}),o[w]=A[w])}else o||(p||(p=[]),p.push(O,o)),o=A;else O==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,R=R?R.__html:void 0,A!=null&&R!==A&&(p=p||[]).push(O,A)):O==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(O,""+A):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(l.hasOwnProperty(O)?(A!=null&&O==="onScroll"&&$e("scroll",e),p||R===A||(p=[])):(p=p||[]).push(O,A))}o&&(p=p||[]).push("style",o);var O=p;(t.updateQueue=O)&&(t.flags|=4)}},Hm=function(e,t,o,a){o!==a&&(t.flags|=4)};function Lo(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function d0(e,t,o){var a=t.pendingProps;switch(Jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return bt(t.type)&&Ns(),ft(t),null;case 3:return a=t.stateNode,vi(),_e(wt),_e(ut),dc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jt!==null&&(Bc(Jt),Jt=null))),Nc(e,t),ft(t),null;case 5:cc(t);var d=Br(Ao.current);if(o=t.type,e!==null&&t.stateNode!=null)Bm(e,t,o,a,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return ft(t),null}if(e=Br(mn.current),Ds(t)){a=t.stateNode,o=t.type;var p=t.memoizedProps;switch(a[fn]=t,a[Co]=p,e=(t.mode&1)!==0,o){case"dialog":$e("cancel",a),$e("close",a);break;case"iframe":case"object":case"embed":$e("load",a);break;case"video":case"audio":for(d=0;d<bo.length;d++)$e(bo[d],a);break;case"source":$e("error",a);break;case"img":case"image":case"link":$e("error",a),$e("load",a);break;case"details":$e("toggle",a);break;case"input":Ar(a,p),$e("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!p.multiple},$e("invalid",a);break;case"textarea":Ir(a,p),$e("invalid",a)}zt(o,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var R=p[w];w==="children"?typeof R=="string"?a.textContent!==R&&(p.suppressHydrationWarning!==!0&&Ps(a.textContent,R,e),d=["children",R]):typeof R=="number"&&a.textContent!==""+R&&(p.suppressHydrationWarning!==!0&&Ps(a.textContent,R,e),d=["children",""+R]):l.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&$e("scroll",a)}switch(o){case"input":Cn(a),ei(a,p,!0);break;case"textarea":Cn(a),Zi(a);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(a.onclick=Ts)}a=d,t.updateQueue=a,a!==null&&(t.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ti(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=w.createElement(o,{is:a.is}):(e=w.createElement(o),o==="select"&&(w=e,a.multiple?w.multiple=!0:a.size&&(w.size=a.size))):e=w.createElementNS(e,o),e[fn]=t,e[Co]=a,zm(e,t,!1,!1),t.stateNode=e;e:{switch(w=no(o,a),o){case"dialog":$e("cancel",e),$e("close",e),d=a;break;case"iframe":case"object":case"embed":$e("load",e),d=a;break;case"video":case"audio":for(d=0;d<bo.length;d++)$e(bo[d],e);d=a;break;case"source":$e("error",e),d=a;break;case"img":case"image":case"link":$e("error",e),$e("load",e),d=a;break;case"details":$e("toggle",e),d=a;break;case"input":Ar(e,a),d=Rn(e,a),$e("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=X({},a,{value:void 0}),$e("invalid",e);break;case"textarea":Ir(e,a),d=Ji(e,a),$e("invalid",e);break;default:d=a}zt(o,d),R=d;for(p in R)if(R.hasOwnProperty(p)){var A=R[p];p==="style"?os(e,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Pn(e,A)):p==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&Un(e,A):typeof A=="number"&&Un(e,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?A!=null&&p==="onScroll"&&$e("scroll",e):A!=null&&j(e,p,A,w))}switch(o){case"input":Cn(e),ei(e,a,!1);break;case"textarea":Cn(e),Zi(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Se(a.value));break;case"select":e.multiple=!!a.multiple,p=a.value,p!=null?Wn(e,!!a.multiple,p,!1):a.defaultValue!=null&&Wn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ts)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)Hm(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(o=Br(Ao.current),Br(mn.current),Ds(t)){if(a=t.stateNode,o=t.memoizedProps,a[fn]=t,(p=a.nodeValue!==o)&&(e=Tt,e!==null))switch(e.tag){case 3:Ps(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(a.nodeValue,o,(e.mode&1)!==0)}p&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[fn]=t,t.stateNode=a}return ft(t),null;case 13:if(_e(We),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(He&&At!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qf(),pi(),t.flags|=98560,p=!1;else if(p=Ds(t),a!==null&&a.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[fn]=t}else pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ft(t),p=!1}else Jt!==null&&(Bc(Jt),Jt=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(We.current&1)!==0?tt===0&&(tt=3):Uc())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return vi(),Nc(e,t),e===null&&ko(t.stateNode.containerInfo),ft(t),null;case 10:return ic(t.type._context),ft(t),null;case 17:return bt(t.type)&&Ns(),ft(t),null;case 19:if(_e(We),p=t.memoizedState,p===null)return ft(t),null;if(a=(t.flags&128)!==0,w=p.rendering,w===null)if(a)Lo(p,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(w=Bs(e),w!==null){for(t.flags|=128,Lo(p,!1),a=w.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)p=o,e=a,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,e=w.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Fe(We,We.current&1|2),t.child}e=e.sibling}p.tail!==null&&Qe()>ki&&(t.flags|=128,a=!0,Lo(p,!1),t.lanes=4194304)}else{if(!a)if(e=Bs(w),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!He)return ft(t),null}else 2*Qe()-p.renderingStartTime>ki&&o!==1073741824&&(t.flags|=128,a=!0,Lo(p,!1),t.lanes=4194304);p.isBackwards?(w.sibling=t.child,t.child=w):(o=p.last,o!==null?o.sibling=w:t.child=w,p.last=w)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=Qe(),t.sibling=null,o=We.current,Fe(We,a?o&1|2:o&1),t):(ft(t),null);case 22:case 23:return Wc(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Nt&1073741824)!==0&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function f0(e,t){switch(Jl(t),t.tag){case 1:return bt(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),_e(wt),_e(ut),dc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if(_e(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(We),null;case 4:return vi(),null;case 10:return ic(t.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var Ks=!1,mt=!1,m0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function wi(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ve(e,t,a)}else o.current=null}function Ic(e,t,o){try{o()}catch(a){Ve(e,t,a)}}var Wm=!1;function p0(e,t){if(Wl=gs,e=bf(),Dl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,p=a.focusNode;a=a.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,R=-1,A=-1,O=0,U=0,V=e,W=null;t:for(;;){for(var ne;V!==o||d!==0&&V.nodeType!==3||(R=w+d),V!==p||a!==0&&V.nodeType!==3||(A=w+a),V.nodeType===3&&(w+=V.nodeValue.length),(ne=V.firstChild)!==null;)W=V,V=ne;for(;;){if(V===e)break t;if(W===o&&++O===d&&(R=w),W===p&&++U===a&&(A=w),(ne=V.nextSibling)!==null)break;V=W,W=V.parentNode}V=ne}o=R===-1||A===-1?null:{start:R,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ul={focusedElem:e,selectionRange:o},gs=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var se=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var le=se.memoizedProps,Ke=se.memoizedState,M=t.stateNode,I=M.getSnapshotBeforeUpdate(t.elementType===t.type?le:Zt(t.type,le),Ke);M.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(K){Ve(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return se=Wm,Wm=!1,se}function Do(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ic(t,o,p)}d=d.next}while(d!==a)}}function Xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function jc(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function Um(e){var t=e.alternate;t!==null&&(e.alternate=null,Um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[Co],delete t[Gl],delete t[Kx],delete t[Xx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qm(e){return e.tag===5||e.tag===3||e.tag===4}function Vm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Ts));else if(a!==4&&(e=e.child,e!==null))for(Mc(e,t,o),e=e.sibling;e!==null;)Mc(e,t,o),e=e.sibling}function Lc(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Lc(e,t,o),e=e.sibling;e!==null;)Lc(e,t,o),e=e.sibling}var at=null,en=!1;function rr(e,t,o){for(o=o.child;o!==null;)Ym(e,t,o),o=o.sibling}function Ym(e,t,o){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(us,o)}catch{}switch(o.tag){case 5:mt||wi(o,t);case 6:var a=at,d=en;at=null,rr(e,t,o),at=a,en=d,at!==null&&(en?(e=at,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):at.removeChild(o.stateNode));break;case 18:at!==null&&(en?(e=at,o=o.stateNode,e.nodeType===8?Yl(e.parentNode,o):e.nodeType===1&&Yl(e,o),mo(e)):Yl(at,o.stateNode));break;case 4:a=at,d=en,at=o.stateNode.containerInfo,en=!0,rr(e,t,o),at=a,en=d;break;case 0:case 11:case 14:case 15:if(!mt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Ic(o,t,w),d=d.next}while(d!==a)}rr(e,t,o);break;case 1:if(!mt&&(wi(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(R){Ve(o,t,R)}rr(e,t,o);break;case 21:rr(e,t,o);break;case 22:o.mode&1?(mt=(a=mt)||o.memoizedState!==null,rr(e,t,o),mt=a):rr(e,t,o);break;default:rr(e,t,o)}}function Gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new m0),t.forEach(function(a){var d=S0.bind(null,e,a);o.has(a)||(o.add(a),a.then(d,d))})}}function tn(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var p=e,w=t,R=w;e:for(;R!==null;){switch(R.tag){case 5:at=R.stateNode,en=!1;break e;case 3:at=R.stateNode.containerInfo,en=!0;break e;case 4:at=R.stateNode.containerInfo,en=!0;break e}R=R.return}if(at===null)throw Error(i(160));Ym(p,w,d),at=null,en=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(O){Ve(d,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qm(t,e),t=t.sibling}function Qm(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),hn(e),a&4){try{Do(3,e,e.return),Xs(3,e)}catch(le){Ve(e,e.return,le)}try{Do(5,e,e.return)}catch(le){Ve(e,e.return,le)}}break;case 1:tn(t,e),hn(e),a&512&&o!==null&&wi(o,o.return);break;case 5:if(tn(t,e),hn(e),a&512&&o!==null&&wi(o,o.return),e.flags&32){var d=e.stateNode;try{Un(d,"")}catch(le){Ve(e,e.return,le)}}if(a&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,w=o!==null?o.memoizedProps:p,R=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{R==="input"&&p.type==="radio"&&p.name!=null&&Qt(d,p),no(R,w);var O=no(R,p);for(w=0;w<A.length;w+=2){var U=A[w],V=A[w+1];U==="style"?os(d,V):U==="dangerouslySetInnerHTML"?Pn(d,V):U==="children"?Un(d,V):j(d,U,V,O)}switch(R){case"input":Nr(d,p);break;case"textarea":rs(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?Wn(d,!!p.multiple,ne,!1):W!==!!p.multiple&&(p.defaultValue!=null?Wn(d,!!p.multiple,p.defaultValue,!0):Wn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Co]=p}catch(le){Ve(e,e.return,le)}}break;case 6:if(tn(t,e),hn(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(le){Ve(e,e.return,le)}}break;case 3:if(tn(t,e),hn(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(le){Ve(e,e.return,le)}break;case 4:tn(t,e),hn(e);break;case 13:tn(t,e),hn(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fc=Qe())),a&4&&Gm(e);break;case 22:if(U=o!==null&&o.memoizedState!==null,e.mode&1?(mt=(O=mt)||U,tn(t,e),mt=O):tn(t,e),hn(e),a&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!U&&(e.mode&1)!==0)for(ie=e,U=e.child;U!==null;){for(V=ie=U;ie!==null;){switch(W=ie,ne=W.child,W.tag){case 0:case 11:case 14:case 15:Do(4,W,W.return);break;case 1:wi(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){a=W,o=W.return;try{t=a,se.props=t.memoizedProps,se.state=t.memoizedState,se.componentWillUnmount()}catch(le){Ve(a,o,le)}}break;case 5:wi(W,W.return);break;case 22:if(W.memoizedState!==null){Jm(V);continue}}ne!==null?(ne.return=W,ie=ne):Jm(V)}U=U.sibling}e:for(U=null,V=e;;){if(V.tag===5){if(U===null){U=V;try{d=V.stateNode,O?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(R=V.stateNode,A=V.memoizedProps.style,w=A!=null&&A.hasOwnProperty("display")?A.display:null,R.style.display=eo("display",w))}catch(le){Ve(e,e.return,le)}}}else if(V.tag===6){if(U===null)try{V.stateNode.nodeValue=O?"":V.memoizedProps}catch(le){Ve(e,e.return,le)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;U===V&&(U=null),V=V.return}U===V&&(U=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:tn(t,e),hn(e),a&4&&Gm(e);break;case 21:break;default:tn(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(qm(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Un(d,""),a.flags&=-33);var p=Vm(e);Lc(e,p,d);break;case 3:case 4:var w=a.stateNode.containerInfo,R=Vm(e);Mc(e,R,w);break;default:throw Error(i(161))}}catch(A){Ve(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h0(e,t,o){ie=e,Km(e)}function Km(e,t,o){for(var a=(e.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&a){var w=d.memoizedState!==null||Ks;if(!w){var R=d.alternate,A=R!==null&&R.memoizedState!==null||mt;R=Ks;var O=mt;if(Ks=w,(mt=A)&&!O)for(ie=d;ie!==null;)w=ie,A=w.child,w.tag===22&&w.memoizedState!==null?Zm(d):A!==null?(A.return=w,ie=A):Zm(d);for(;p!==null;)ie=p,Km(p),p=p.sibling;ie=d,Ks=R,mt=O}Xm(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Xm(e)}}function Xm(e){for(;ie!==null;){var t=ie;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:mt||Xs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!mt)if(o===null)a.componentDidMount();else{var d=t.elementType===t.type?o.memoizedProps:Zt(t.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&Jf(t,p,a);break;case 3:var w=t.updateQueue;if(w!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Jf(t,w,o)}break;case 5:var R=t.stateNode;if(o===null&&t.flags&4){o=R;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var U=O.memoizedState;if(U!==null){var V=U.dehydrated;V!==null&&mo(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}mt||t.flags&512&&jc(t)}catch(W){Ve(t,t.return,W)}}if(t===e){ie=null;break}if(o=t.sibling,o!==null){o.return=t.return,ie=o;break}ie=t.return}}function Jm(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var o=t.sibling;if(o!==null){o.return=t.return,ie=o;break}ie=t.return}}function Zm(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Xs(4,t)}catch(A){Ve(t,o,A)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var d=t.return;try{a.componentDidMount()}catch(A){Ve(t,d,A)}}var p=t.return;try{jc(t)}catch(A){Ve(t,p,A)}break;case 5:var w=t.return;try{jc(t)}catch(A){Ve(t,w,A)}}}catch(A){Ve(t,t.return,A)}if(t===e){ie=null;break}var R=t.sibling;if(R!==null){R.return=t.return,ie=R;break}ie=t.return}}var g0=Math.ceil,Js=L.ReactCurrentDispatcher,Dc=L.ReactCurrentOwner,qt=L.ReactCurrentBatchConfig,Te=0,rt=null,Ze=null,lt=0,Nt=0,bi=Jn(0),tt=0,Oo=null,Wr=0,Zs=0,Oc=0,Fo=null,St=null,Fc=0,ki=1/0,Dn=null,ea=!1,$c=null,ir=null,ta=!1,or=null,na=0,$o=0,_c=null,ra=-1,ia=0;function yt(){return(Te&6)!==0?Qe():ra!==-1?ra:ra=Qe()}function sr(e){return(e.mode&1)===0?1:(Te&2)!==0&&lt!==0?lt&-lt:Zx.transition!==null?(ia===0&&(ia=qd()),ia):(e=Le,e!==0||(e=window.event,e=e===void 0?16:ef(e.type)),e)}function nn(e,t,o,a){if(50<$o)throw $o=0,_c=null,Error(i(185));ao(e,o,a),((Te&2)===0||e!==rt)&&(e===rt&&((Te&2)===0&&(Zs|=o),tt===4&&ar(e,lt)),Ct(e,a),o===1&&Te===0&&(t.mode&1)===0&&(ki=Qe()+500,js&&er()))}function Ct(e,t){var o=e.callbackNode;Zv(e,t);var a=ms(e,e===rt?lt:0);if(a===0)o!==null&&Hd(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&Hd(o),t===1)e.tag===0?Jx(tp.bind(null,e)):zf(tp.bind(null,e)),Gx(function(){(Te&6)===0&&er()}),o=null;else{switch(Vd(a)){case 1:o=vl;break;case 4:o=Wd;break;case 16:o=cs;break;case 536870912:o=Ud;break;default:o=cs}o=cp(o,ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function ep(e,t){if(ra=-1,ia=0,(Te&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Si()&&e.callbackNode!==o)return null;var a=ms(e,e===rt?lt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=oa(e,a);else{t=a;var d=Te;Te|=2;var p=rp();(rt!==e||lt!==t)&&(Dn=null,ki=Qe()+500,qr(e,t));do try{x0();break}catch(R){np(e,R)}while(!0);rc(),Js.current=p,Te=d,Ze!==null?t=0:(rt=null,lt=0,t=tt)}if(t!==0){if(t===2&&(d=xl(e),d!==0&&(a=d,t=zc(e,d))),t===1)throw o=Oo,qr(e,0),ar(e,a),Ct(e,Qe()),o;if(t===6)ar(e,a);else{if(d=e.current.alternate,(a&30)===0&&!y0(d)&&(t=oa(e,a),t===2&&(p=xl(e),p!==0&&(a=p,t=zc(e,p))),t===1))throw o=Oo,qr(e,0),ar(e,a),Ct(e,Qe()),o;switch(e.finishedWork=d,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Vr(e,St,Dn);break;case 3:if(ar(e,a),(a&130023424)===a&&(t=Fc+500-Qe(),10<t)){if(ms(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){yt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Vl(Vr.bind(null,e,St,Dn),t);break}Vr(e,St,Dn);break;case 4:if(ar(e,a),(a&4194240)===a)break;for(t=e.eventTimes,d=-1;0<a;){var w=31-Kt(a);p=1<<w,w=t[w],w>d&&(d=w),a&=~p}if(a=d,a=Qe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*g0(a/1960))-a,10<a){e.timeoutHandle=Vl(Vr.bind(null,e,St,Dn),a);break}Vr(e,St,Dn);break;case 5:Vr(e,St,Dn);break;default:throw Error(i(329))}}}return Ct(e,Qe()),e.callbackNode===o?ep.bind(null,e):null}function zc(e,t){var o=Fo;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=oa(e,t),e!==2&&(t=St,St=o,t!==null&&Bc(t)),e}function Bc(e){St===null?St=e:St.push.apply(St,e)}function y0(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],p=d.getSnapshot;d=d.value;try{if(!Xt(p(),d))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Oc,t&=~Zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Kt(t),a=1<<o;e[o]=-1,t&=~a}}function tp(e){if((Te&6)!==0)throw Error(i(327));Si();var t=ms(e,0);if((t&1)===0)return Ct(e,Qe()),null;var o=oa(e,t);if(e.tag!==0&&o===2){var a=xl(e);a!==0&&(t=a,o=zc(e,a))}if(o===1)throw o=Oo,qr(e,0),ar(e,t),Ct(e,Qe()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,St,Dn),Ct(e,Qe()),null}function Hc(e,t){var o=Te;Te|=1;try{return e(t)}finally{Te=o,Te===0&&(ki=Qe()+500,js&&er())}}function Ur(e){or!==null&&or.tag===0&&(Te&6)===0&&Si();var t=Te;Te|=1;var o=qt.transition,a=Le;try{if(qt.transition=null,Le=1,e)return e()}finally{Le=a,qt.transition=o,Te=t,(Te&6)===0&&er()}}function Wc(){Nt=bi.current,_e(bi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Yx(o)),Ze!==null)for(o=Ze.return;o!==null;){var a=o;switch(Jl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ns();break;case 3:vi(),_e(wt),_e(ut),dc();break;case 5:cc(a);break;case 4:vi();break;case 13:_e(We);break;case 19:_e(We);break;case 10:ic(a.type._context);break;case 22:case 23:Wc()}o=o.return}if(rt=e,Ze=e=lr(e.current,null),lt=Nt=t,tt=0,Oo=null,Oc=Zs=Wr=0,St=Fo=null,zr!==null){for(t=0;t<zr.length;t++)if(o=zr[t],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,p=o.pending;if(p!==null){var w=p.next;p.next=d,a.next=w}o.pending=a}zr=null}return e}function np(e,t){do{var o=Ze;try{if(rc(),Hs.current=Vs,Ws){for(var a=Ue.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Ws=!1}if(Hr=0,nt=et=Ue=null,No=!1,Io=0,Dc.current=null,o===null||o.return===null){tt=1,Oo=t,Ze=null;break}e:{var p=e,w=o.return,R=o,A=t;if(t=lt,R.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var O=A,U=R,V=U.tag;if((U.mode&1)===0&&(V===0||V===11||V===15)){var W=U.alternate;W?(U.updateQueue=W.updateQueue,U.memoizedState=W.memoizedState,U.lanes=W.lanes):(U.updateQueue=null,U.memoizedState=null)}var ne=Pm(w);if(ne!==null){ne.flags&=-257,Tm(ne,w,R,p,t),ne.mode&1&&Rm(p,O,t),t=ne,A=O;var se=t.updateQueue;if(se===null){var le=new Set;le.add(A),t.updateQueue=le}else se.add(A);break e}else{if((t&1)===0){Rm(p,O,t),Uc();break e}A=Error(i(426))}}else if(He&&R.mode&1){var Ke=Pm(w);if(Ke!==null){(Ke.flags&65536)===0&&(Ke.flags|=256),Tm(Ke,w,R,p,t),tc(xi(A,R));break e}}p=A=xi(A,R),tt!==4&&(tt=2),Fo===null?Fo=[p]:Fo.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var M=Cm(p,A,t);Xf(p,M);break e;case 1:R=A;var I=p.type,D=p.stateNode;if((p.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(ir===null||!ir.has(D)))){p.flags|=65536,t&=-t,p.lanes|=t;var K=Em(p,R,t);Xf(p,K);break e}}p=p.return}while(p!==null)}op(o)}catch(ue){t=ue,Ze===o&&o!==null&&(Ze=o=o.return);continue}break}while(!0)}function rp(){var e=Js.current;return Js.current=Vs,e===null?Vs:e}function Uc(){(tt===0||tt===3||tt===2)&&(tt=4),rt===null||(Wr&268435455)===0&&(Zs&268435455)===0||ar(rt,lt)}function oa(e,t){var o=Te;Te|=2;var a=rp();(rt!==e||lt!==t)&&(Dn=null,qr(e,t));do try{v0();break}catch(d){np(e,d)}while(!0);if(rc(),Te=o,Js.current=a,Ze!==null)throw Error(i(261));return rt=null,lt=0,tt}function v0(){for(;Ze!==null;)ip(Ze)}function x0(){for(;Ze!==null&&!Uv();)ip(Ze)}function ip(e){var t=lp(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?op(e):Ze=t,Dc.current=null}function op(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=d0(o,t,Nt),o!==null){Ze=o;return}}else{if(o=f0(o,t),o!==null){o.flags&=32767,Ze=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Ze=null;return}}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);tt===0&&(tt=5)}function Vr(e,t,o){var a=Le,d=qt.transition;try{qt.transition=null,Le=1,w0(e,t,o,a)}finally{qt.transition=d,Le=a}return null}function w0(e,t,o,a){do Si();while(or!==null);if((Te&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=o.lanes|o.childLanes;if(ex(e,p),e===rt&&(Ze=rt=null,lt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ta||(ta=!0,cp(cs,function(){return Si(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=qt.transition,qt.transition=null;var w=Le;Le=1;var R=Te;Te|=4,Dc.current=null,p0(e,o),Qm(o,e),zx(Ul),gs=!!Wl,Ul=Wl=null,e.current=o,h0(o),qv(),Te=R,Le=w,qt.transition=p}else e.current=o;if(ta&&(ta=!1,or=e,na=d),p=e.pendingLanes,p===0&&(ir=null),Gv(o.stateNode),Ct(e,Qe()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)d=t[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(ea)throw ea=!1,e=$c,$c=null,e;return(na&1)!==0&&e.tag!==0&&Si(),p=e.pendingLanes,(p&1)!==0?e===_c?$o++:($o=0,_c=e):$o=0,er(),null}function Si(){if(or!==null){var e=Vd(na),t=qt.transition,o=Le;try{if(qt.transition=null,Le=16>e?16:e,or===null)var a=!1;else{if(e=or,or=null,na=0,(Te&6)!==0)throw Error(i(331));var d=Te;for(Te|=4,ie=e.current;ie!==null;){var p=ie,w=p.child;if((ie.flags&16)!==0){var R=p.deletions;if(R!==null){for(var A=0;A<R.length;A++){var O=R[A];for(ie=O;ie!==null;){var U=ie;switch(U.tag){case 0:case 11:case 15:Do(8,U,p)}var V=U.child;if(V!==null)V.return=U,ie=V;else for(;ie!==null;){U=ie;var W=U.sibling,ne=U.return;if(Um(U),U===O){ie=null;break}if(W!==null){W.return=ne,ie=W;break}ie=ne}}}var se=p.alternate;if(se!==null){var le=se.child;if(le!==null){se.child=null;do{var Ke=le.sibling;le.sibling=null,le=Ke}while(le!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ie=w;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var I=e.current;for(ie=I;ie!==null;){w=ie;var D=w.child;if((w.subtreeFlags&2064)!==0&&D!==null)D.return=w,ie=D;else e:for(w=I;ie!==null;){if(R=ie,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Xs(9,R)}}catch(ue){Ve(R,R.return,ue)}if(R===w){ie=null;break e}var K=R.sibling;if(K!==null){K.return=R.return,ie=K;break e}ie=R.return}}if(Te=d,er(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(us,e)}catch{}a=!0}return a}finally{Le=o,qt.transition=t}}return!1}function sp(e,t,o){t=xi(o,t),t=Cm(e,t,1),e=nr(e,t,1),t=yt(),e!==null&&(ao(e,1,t),Ct(e,t))}function Ve(e,t,o){if(e.tag===3)sp(e,e,o);else for(;t!==null;){if(t.tag===3){sp(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ir===null||!ir.has(a))){e=xi(o,e),e=Em(t,e,1),t=nr(t,e,1),e=yt(),t!==null&&(ao(t,1,e),Ct(t,e));break}}t=t.return}}function b0(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&o,rt===e&&(lt&o)===o&&(tt===4||tt===3&&(lt&130023424)===lt&&500>Qe()-Fc?qr(e,0):Oc|=o),Ct(e,t)}function ap(e,t){t===0&&((e.mode&1)===0?t=1:(t=fs,fs<<=1,(fs&130023424)===0&&(fs=4194304)));var o=yt();e=jn(e,t),e!==null&&(ao(e,t,o),Ct(e,o))}function k0(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),ap(e,o)}function S0(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),ap(e,o)}var lp;lp=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)kt=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return kt=!1,u0(e,t,o);kt=(e.flags&131072)!==0}else kt=!1,He&&(t.flags&1048576)!==0&&Bf(t,Ls,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Qs(e,t),e=t.pendingProps;var d=di(t,ut.current);yi(t,o),d=pc(null,t,a,e,d,o);var p=hc();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(a)?(p=!0,Is(t)):p=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ac(t),d.updater=Ys,t.stateNode=d,d._reactInternals=t,bc(t,a,e,o),t=Ec(null,t,a,!0,p,o)):(t.tag=0,He&&p&&Xl(t),gt(null,t,d,o),t=t.child),t;case 16:a=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,d=a._init,a=d(a._payload),t.type=a,d=t.tag=E0(a),e=Zt(a,e),d){case 0:t=Cc(null,t,a,e,o);break e;case 1:t=Lm(null,t,a,e,o);break e;case 11:t=Am(null,t,a,e,o);break e;case 14:t=Nm(null,t,a,Zt(a.type,e),o);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:Zt(a,d),Cc(e,t,a,d,o);case 1:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:Zt(a,d),Lm(e,t,a,d,o);case 3:e:{if(Dm(t),e===null)throw Error(i(387));a=t.pendingProps,p=t.memoizedState,d=p.element,Kf(e,t),zs(t,a,null,o);var w=t.memoizedState;if(a=w.element,p.isDehydrated)if(p={element:a,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){d=xi(Error(i(423)),t),t=Om(e,t,a,o,d);break e}else if(a!==d){d=xi(Error(i(424)),t),t=Om(e,t,a,o,d);break e}else for(At=Xn(t.stateNode.containerInfo.firstChild),Tt=t,He=!0,Jt=null,o=Gf(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(pi(),a===d){t=Ln(e,t,o);break e}gt(e,t,a,o)}t=t.child}return t;case 5:return Zf(t),e===null&&ec(t),a=t.type,d=t.pendingProps,p=e!==null?e.memoizedProps:null,w=d.children,ql(a,d)?w=null:p!==null&&ql(a,p)&&(t.flags|=32),Mm(e,t),gt(e,t,w,o),t.child;case 6:return e===null&&ec(t),null;case 13:return Fm(e,t,o);case 4:return lc(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=hi(t,null,a,o):gt(e,t,a,o),t.child;case 11:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:Zt(a,d),Am(e,t,a,d,o);case 7:return gt(e,t,t.pendingProps,o),t.child;case 8:return gt(e,t,t.pendingProps.children,o),t.child;case 12:return gt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,d=t.pendingProps,p=t.memoizedProps,w=d.value,Fe(Fs,a._currentValue),a._currentValue=w,p!==null)if(Xt(p.value,w)){if(p.children===d.children&&!wt.current){t=Ln(e,t,o);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var R=p.dependencies;if(R!==null){w=p.child;for(var A=R.firstContext;A!==null;){if(A.context===a){if(p.tag===1){A=Mn(-1,o&-o),A.tag=2;var O=p.updateQueue;if(O!==null){O=O.shared;var U=O.pending;U===null?A.next=A:(A.next=U.next,U.next=A),O.pending=A}}p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),oc(p.return,o,t),R.lanes|=o;break}A=A.next}}else if(p.tag===10)w=p.type===t.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(i(341));w.lanes|=o,R=w.alternate,R!==null&&(R.lanes|=o),oc(w,o,t),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===t){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}gt(e,t,d.children,o),t=t.child}return t;case 9:return d=t.type,a=t.pendingProps.children,yi(t,o),d=Wt(d),a=a(d),t.flags|=1,gt(e,t,a,o),t.child;case 14:return a=t.type,d=Zt(a,t.pendingProps),d=Zt(a.type,d),Nm(e,t,a,d,o);case 15:return Im(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:Zt(a,d),Qs(e,t),t.tag=1,bt(a)?(e=!0,Is(t)):e=!1,yi(t,o),km(t,a,d),bc(t,a,d,o),Ec(null,t,a,!0,e,o);case 19:return _m(e,t,o);case 22:return jm(e,t,o)}throw Error(i(156,t.tag))};function cp(e,t){return Bd(e,t)}function C0(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,o,a){return new C0(e,t,o,a)}function qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E0(e){if(typeof e=="function")return qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===he)return 14}return 2}function lr(e,t){var o=e.alternate;return o===null?(o=Vt(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function sa(e,t,o,a,d,p){var w=2;if(a=e,typeof e=="function")qc(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case z:return Yr(o.children,d,p,t);case Y:w=8,d|=8;break;case q:return e=Vt(12,o,t,d|2),e.elementType=q,e.lanes=p,e;case oe:return e=Vt(13,o,t,d),e.elementType=oe,e.lanes=p,e;case J:return e=Vt(19,o,t,d),e.elementType=J,e.lanes=p,e;case ae:return aa(o,d,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:w=10;break e;case re:w=9;break e;case te:w=11;break e;case he:w=14;break e;case ce:w=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Vt(w,o,t,d),t.elementType=e,t.type=a,t.lanes=p,t}function Yr(e,t,o,a){return e=Vt(7,e,a,t),e.lanes=o,e}function aa(e,t,o,a){return e=Vt(22,e,a,t),e.elementType=ae,e.lanes=o,e.stateNode={isHidden:!1},e}function Vc(e,t,o){return e=Vt(6,e,null,t),e.lanes=o,e}function Yc(e,t,o){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function R0(e,t,o,a,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gc(e,t,o,a,d,p,w,R,A){return e=new R0(e,t,o,R,A),t===1?(t=1,p===!0&&(t|=8)):t=0,p=Vt(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(p),e}function P0(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function up(e){if(!e)return Zn;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(bt(o))return $f(e,o,t)}return t}function dp(e,t,o,a,d,p,w,R,A){return e=Gc(o,a,!0,e,d,p,w,R,A),e.context=up(null),o=e.current,a=yt(),d=sr(o),p=Mn(a,d),p.callback=t??null,nr(o,p,d),e.current.lanes=d,ao(e,d,a),Ct(e,a),e}function la(e,t,o,a){var d=t.current,p=yt(),w=sr(d);return o=up(o),t.context===null?t.context=o:t.pendingContext=o,t=Mn(p,w),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=nr(d,t,w),e!==null&&(nn(e,d,w,p),_s(e,d,w)),w}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Qc(e,t){fp(e,t),(e=e.alternate)&&fp(e,t)}function T0(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}ua.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));la(e,t,null,null)},ua.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){la(null,e,null,null)}),t[Tn]=null}};function ua(e){this._internalRoot=e}ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qd();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Gn.length&&t!==0&&t<Gn[o].priority;o++);Gn.splice(o,0,e),o===0&&Jd(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pp(){}function A0(e,t,o,a,d){if(d){if(typeof a=="function"){var p=a;a=function(){var O=ca(w);p.call(O)}}var w=dp(t,a,e,0,null,!1,!1,"",pp);return e._reactRootContainer=w,e[Tn]=w.current,ko(e.nodeType===8?e.parentNode:e),Ur(),w}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var R=a;a=function(){var O=ca(A);R.call(O)}}var A=Gc(e,0,!1,null,null,!1,!1,"",pp);return e._reactRootContainer=A,e[Tn]=A.current,ko(e.nodeType===8?e.parentNode:e),Ur(function(){la(t,A,o,a)}),A}function fa(e,t,o,a,d){var p=o._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var R=d;d=function(){var A=ca(w);R.call(A)}}la(t,w,e,d)}else w=A0(o,t,e,d,a);return ca(w)}Yd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=so(t.pendingLanes);o!==0&&(bl(t,o|1),Ct(t,Qe()),(Te&6)===0&&(ki=Qe()+500,er()))}break;case 13:Ur(function(){var a=jn(e,1);if(a!==null){var d=yt();nn(a,e,1,d)}}),Qc(e,1)}},kl=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var o=yt();nn(t,e,134217728,o)}Qc(e,134217728)}},Gd=function(e){if(e.tag===13){var t=sr(e),o=jn(e,t);if(o!==null){var a=yt();nn(o,e,t,a)}Qc(e,t)}},Qd=function(){return Le},Kd=function(e,t){var o=Le;try{return Le=e,t()}finally{Le=o}},Ne=function(e,t,o){switch(t){case"input":if(Nr(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var d=As(a);if(!d)throw Error(i(90));En(a),Nr(a,d)}}}break;case"textarea":rs(e,o);break;case"select":t=o.value,t!=null&&Wn(e,!!o.multiple,t,!1)}},Ld=Hc,Dd=Ur;var N0={usingClientEntryPoint:!1,Events:[Eo,ci,As,ss,Md,Hc]},_o={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I0={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_d(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{us=ma.inject(I0),dn=ma}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0,Et.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(i(200));return P0(e,t,null,o)},Et.createRoot=function(e,t){if(!Xc(e))throw Error(i(299));var o=!1,a="",d=mp;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Gc(e,1,!1,null,null,o,!1,a,d),e[Tn]=t.current,ko(e.nodeType===8?e.parentNode:e),new Kc(t)},Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=_d(t),e=e===null?null:e.stateNode,e},Et.flushSync=function(e){return Ur(e)},Et.hydrate=function(e,t,o){if(!da(t))throw Error(i(200));return fa(null,e,t,!0,o)},Et.hydrateRoot=function(e,t,o){if(!Xc(e))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,d=!1,p="",w=mp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),t=dp(t,null,e,1,o??null,d,!1,p,w),e[Tn]=t.current,ko(e),a)for(e=0;e<a.length;e++)o=a[e],d=o._getVersion,d=d(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,d]:t.mutableSourceEagerHydrationData.push(o,d);return new ua(t)},Et.render=function(e,t,o){if(!da(t))throw Error(i(200));return fa(null,e,t,!1,o)},Et.unmountComponentAtNode=function(e){if(!da(e))throw Error(i(40));return e._reactRootContainer?(Ur(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Et.unstable_batchedUpdates=Hc,Et.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!da(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return fa(e,t,o,!1,a)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var Sp;function Oh(){if(Sp)return tu.exports;Sp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),tu.exports=_0(),tu.exports}var Cp;function z0(){if(Cp)return ha;Cp=1;var n=Oh();return ha.createRoot=n.createRoot,ha.hydrateRoot=n.hydrateRoot,ha}var B0=z0(),g=Yu();const Z=Dh(g),Fh=M0({__proto__:null,default:Z},[g]),H0=1,W0=1e6;let iu=0;function U0(){return iu=(iu+1)%Number.MAX_SAFE_INTEGER,iu.toString()}const ou=new Map,Ep=n=>{if(ou.has(n))return;const r=setTimeout(()=>{ou.delete(n),Uo({type:"REMOVE_TOAST",toastId:n})},W0);ou.set(n,r)},q0=(n,r)=>{switch(r.type){case"ADD_TOAST":return{...n,toasts:[r.toast,...n.toasts].slice(0,H0)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(i=>i.id===r.toast.id?{...i,...r.toast}:i)};case"DISMISS_TOAST":{const{toastId:i}=r;return i?Ep(i):n.toasts.forEach(s=>{Ep(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===i||i===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return r.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(i=>i.id!==r.toastId)}}},Pa=[];let Ta={toasts:[]};function Uo(n){Ta=q0(Ta,n),Pa.forEach(r=>{r(Ta)})}function V0({...n}){const r=U0(),i=l=>Uo({type:"UPDATE_TOAST",toast:{...l,id:r}}),s=()=>Uo({type:"DISMISS_TOAST",toastId:r});return Uo({type:"ADD_TOAST",toast:{...n,id:r,open:!0,onOpenChange:l=>{l||s()}}}),{id:r,dismiss:s,update:i}}function Y0(){const[n,r]=g.useState(Ta);return g.useEffect(()=>(Pa.push(r),()=>{const i=Pa.indexOf(r);i>-1&&Pa.splice(i,1)}),[n]),{...n,toast:V0,dismiss:i=>Uo({type:"DISMISS_TOAST",toastId:i})}}var Zo=Oh();const Gu=Dh(Zo);function Ee(n,r,{checkForDefaultPrevented:i=!0}={}){return function(l){if(n==null||n(l),i===!1||!l.defaultPrevented)return r==null?void 0:r(l)}}function G0(n,r){typeof n=="function"?n(r):n!=null&&(n.current=r)}function $h(...n){return r=>n.forEach(i=>G0(i,r))}function Be(...n){return g.useCallback($h(...n),n)}function es(n,r=[]){let i=[];function s(u,f){const m=g.createContext(f),h=i.length;i=[...i,f];function y(b){const{scope:v,children:S,...E}=b,k=(v==null?void 0:v[n][h])||m,C=g.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:C,children:S})}function x(b,v){const S=(v==null?void 0:v[n][h])||m,E=g.useContext(S);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return y.displayName=u+"Provider",[y,x]}const l=()=>{const u=i.map(f=>g.createContext(f));return function(m){const h=(m==null?void 0:m[n])||u;return g.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return l.scopeName=n,[s,Q0(l,...r)]}function Q0(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((m,{useScope:h,scopeName:y})=>{const b=h(u)[`__scope${y}`];return{...m,...b}},{});return g.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var zi=g.forwardRef((n,r)=>{const{children:i,...s}=n,l=g.Children.toArray(i),u=l.find(K0);if(u){const f=u.props.children,m=l.map(h=>h===u?g.Children.count(f)>1?g.Children.only(null):g.isValidElement(f)?f.props.children:null:h);return c.jsx(Su,{...s,ref:r,children:g.isValidElement(f)?g.cloneElement(f,void 0,m):null})}return c.jsx(Su,{...s,ref:r,children:i})});zi.displayName="Slot";var Su=g.forwardRef((n,r)=>{const{children:i,...s}=n;if(g.isValidElement(i)){const l=J0(i);return g.cloneElement(i,{...X0(s,i.props),ref:r?$h(r,l):l})}return g.Children.count(i)>1?g.Children.only(null):null});Su.displayName="SlotClone";var _h=({children:n})=>c.jsx(c.Fragment,{children:n});function K0(n){return g.isValidElement(n)&&n.type===_h}function X0(n,r){const i={...r};for(const s in r){const l=n[s],u=r[s];/^on[A-Z]/.test(s)?l&&u?i[s]=(...m)=>{u(...m),l(...m)}:l&&(i[s]=l):s==="style"?i[s]={...l,...u}:s==="className"&&(i[s]=[l,u].filter(Boolean).join(" "))}return{...n,...i}}function J0(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function Z0(n){const r=n+"CollectionProvider",[i,s]=es(r),[l,u]=i(r,{collectionRef:{current:null},itemMap:new Map}),f=S=>{const{scope:E,children:k}=S,C=Z.useRef(null),T=Z.useRef(new Map).current;return c.jsx(l,{scope:E,itemMap:T,collectionRef:C,children:k})};f.displayName=r;const m=n+"CollectionSlot",h=Z.forwardRef((S,E)=>{const{scope:k,children:C}=S,T=u(m,k),N=Be(E,T.collectionRef);return c.jsx(zi,{ref:N,children:C})});h.displayName=m;const y=n+"CollectionItemSlot",x="data-radix-collection-item",b=Z.forwardRef((S,E)=>{const{scope:k,children:C,...T}=S,N=Z.useRef(null),j=Be(E,N),L=u(y,k);return Z.useEffect(()=>(L.itemMap.set(N,{ref:N,...T}),()=>void L.itemMap.delete(N))),c.jsx(zi,{[x]:"",ref:j,children:C})});b.displayName=y;function v(S){const E=u(n+"CollectionConsumer",S);return Z.useCallback(()=>{const C=E.collectionRef.current;if(!C)return[];const T=Array.from(C.querySelectorAll(`[${x}]`));return Array.from(E.itemMap.values()).sort((L,$)=>T.indexOf(L.ref.current)-T.indexOf($.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:f,Slot:h,ItemSlot:b},v,s]}var ew=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],je=ew.reduce((n,r)=>{const i=g.forwardRef((s,l)=>{const{asChild:u,...f}=s,m=u?zi:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(m,{...f,ref:l})});return i.displayName=`Primitive.${r}`,{...n,[r]:i}},{});function Qu(n,r){n&&Zo.flushSync(()=>n.dispatchEvent(r))}function Xe(n){const r=g.useRef(n);return g.useEffect(()=>{r.current=n}),g.useMemo(()=>(...i)=>{var s;return(s=r.current)==null?void 0:s.call(r,...i)},[])}function zh(n,r=globalThis==null?void 0:globalThis.document){const i=Xe(n);g.useEffect(()=>{const s=l=>{l.key==="Escape"&&i(l)};return r.addEventListener("keydown",s,{capture:!0}),()=>r.removeEventListener("keydown",s,{capture:!0})},[i,r])}var tw="DismissableLayer",Cu="dismissableLayer.update",nw="dismissableLayer.pointerDownOutside",rw="dismissableLayer.focusOutside",Rp,Bh=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Hh=g.forwardRef((n,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:f,onDismiss:m,...h}=n,y=g.useContext(Bh),[x,b]=g.useState(null),v=(x==null?void 0:x.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=g.useState({}),E=Be(r,z=>b(z)),k=Array.from(y.layers),[C]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),T=k.indexOf(C),N=x?k.indexOf(x):-1,j=y.layersWithOutsidePointerEventsDisabled.size>0,L=N>=T,$=ow(z=>{const Y=z.target,q=[...y.branches].some(G=>G.contains(Y));!L||q||(l==null||l(z),f==null||f(z),z.defaultPrevented||m==null||m())},v),H=sw(z=>{const Y=z.target;[...y.branches].some(G=>G.contains(Y))||(u==null||u(z),f==null||f(z),z.defaultPrevented||m==null||m())},v);return zh(z=>{N===y.layers.size-1&&(s==null||s(z),!z.defaultPrevented&&m&&(z.preventDefault(),m()))},v),g.useEffect(()=>{if(x)return i&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(Rp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(x)),y.layers.add(x),Pp(),()=>{i&&y.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Rp)}},[x,v,i,y]),g.useEffect(()=>()=>{x&&(y.layers.delete(x),y.layersWithOutsidePointerEventsDisabled.delete(x),Pp())},[x,y]),g.useEffect(()=>{const z=()=>S({});return document.addEventListener(Cu,z),()=>document.removeEventListener(Cu,z)},[]),c.jsx(je.div,{...h,ref:E,style:{pointerEvents:j?L?"auto":"none":void 0,...n.style},onFocusCapture:Ee(n.onFocusCapture,H.onFocusCapture),onBlurCapture:Ee(n.onBlurCapture,H.onBlurCapture),onPointerDownCapture:Ee(n.onPointerDownCapture,$.onPointerDownCapture)})});Hh.displayName=tw;var iw="DismissableLayerBranch",Wh=g.forwardRef((n,r)=>{const i=g.useContext(Bh),s=g.useRef(null),l=Be(r,s);return g.useEffect(()=>{const u=s.current;if(u)return i.branches.add(u),()=>{i.branches.delete(u)}},[i.branches]),c.jsx(je.div,{...n,ref:l})});Wh.displayName=iw;function ow(n,r=globalThis==null?void 0:globalThis.document){const i=Xe(n),s=g.useRef(!1),l=g.useRef(()=>{});return g.useEffect(()=>{const u=m=>{if(m.target&&!s.current){let h=function(){Uh(nw,i,y,{discrete:!0})};const y={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",l.current),l.current=h,r.addEventListener("click",l.current,{once:!0})):h()}else r.removeEventListener("click",l.current);s.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",u),r.removeEventListener("click",l.current)}},[r,i]),{onPointerDownCapture:()=>s.current=!0}}function sw(n,r=globalThis==null?void 0:globalThis.document){const i=Xe(n),s=g.useRef(!1);return g.useEffect(()=>{const l=u=>{u.target&&!s.current&&Uh(rw,i,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",l),()=>r.removeEventListener("focusin",l)},[r,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Pp(){const n=new CustomEvent(Cu);document.dispatchEvent(n)}function Uh(n,r,i,{discrete:s}){const l=i.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Qu(l,u):l.dispatchEvent(u)}var aw=Hh,lw=Wh,Rt=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},cw="Portal",qh=g.forwardRef((n,r)=>{var m;const{container:i,...s}=n,[l,u]=g.useState(!1);Rt(()=>u(!0),[]);const f=i||l&&((m=globalThis==null?void 0:globalThis.document)==null?void 0:m.body);return f?Gu.createPortal(c.jsx(je.div,{...s,ref:r}),f):null});qh.displayName=cw;function uw(n,r){return g.useReducer((i,s)=>r[i][s]??i,n)}var Vi=n=>{const{present:r,children:i}=n,s=dw(r),l=typeof i=="function"?i({present:s.isPresent}):g.Children.only(i),u=Be(s.ref,fw(l));return typeof i=="function"||s.isPresent?g.cloneElement(l,{ref:u}):null};Vi.displayName="Presence";function dw(n){const[r,i]=g.useState(),s=g.useRef({}),l=g.useRef(n),u=g.useRef("none"),f=n?"mounted":"unmounted",[m,h]=uw(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const y=ga(s.current);u.current=m==="mounted"?y:"none"},[m]),Rt(()=>{const y=s.current,x=l.current;if(x!==n){const v=u.current,S=ga(y);n?h("MOUNT"):S==="none"||(y==null?void 0:y.display)==="none"?h("UNMOUNT"):h(x&&v!==S?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),Rt(()=>{if(r){const y=b=>{const S=ga(s.current).includes(b.animationName);b.target===r&&S&&Zo.flushSync(()=>h("ANIMATION_END"))},x=b=>{b.target===r&&(u.current=ga(s.current))};return r.addEventListener("animationstart",x),r.addEventListener("animationcancel",y),r.addEventListener("animationend",y),()=>{r.removeEventListener("animationstart",x),r.removeEventListener("animationcancel",y),r.removeEventListener("animationend",y)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:g.useCallback(y=>{y&&(s.current=getComputedStyle(y)),i(y)},[])}}function ga(n){return(n==null?void 0:n.animationName)||"none"}function fw(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function Vh({prop:n,defaultProp:r,onChange:i=()=>{}}){const[s,l]=mw({defaultProp:r,onChange:i}),u=n!==void 0,f=u?n:s,m=Xe(i),h=g.useCallback(y=>{if(u){const b=typeof y=="function"?y(n):y;b!==n&&m(b)}else l(y)},[u,n,l,m]);return[f,h]}function mw({defaultProp:n,onChange:r}){const i=g.useState(n),[s]=i,l=g.useRef(s),u=Xe(r);return g.useEffect(()=>{l.current!==s&&(u(s),l.current=s)},[s,l,u]),i}var pw="VisuallyHidden",Va=g.forwardRef((n,r)=>c.jsx(je.span,{...n,ref:r,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...n.style}}));Va.displayName=pw;var hw=Va,Ku="ToastProvider",[Xu,gw,yw]=Z0("Toast"),[Yh,KR]=es("Toast",[yw]),[vw,Ya]=Yh(Ku),Gh=n=>{const{__scopeToast:r,label:i="Notification",duration:s=5e3,swipeDirection:l="right",swipeThreshold:u=50,children:f}=n,[m,h]=g.useState(null),[y,x]=g.useState(0),b=g.useRef(!1),v=g.useRef(!1);return i.trim()||console.error(`Invalid prop \`label\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`),c.jsx(Xu.Provider,{scope:r,children:c.jsx(vw,{scope:r,label:i,duration:s,swipeDirection:l,swipeThreshold:u,toastCount:y,viewport:m,onViewportChange:h,onToastAdd:g.useCallback(()=>x(S=>S+1),[]),onToastRemove:g.useCallback(()=>x(S=>S-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:v,children:f})})};Gh.displayName=Ku;var Qh="ToastViewport",xw=["F8"],Eu="toast.viewportPause",Ru="toast.viewportResume",Kh=g.forwardRef((n,r)=>{const{__scopeToast:i,hotkey:s=xw,label:l="Notifications ({hotkey})",...u}=n,f=Ya(Qh,i),m=gw(i),h=g.useRef(null),y=g.useRef(null),x=g.useRef(null),b=g.useRef(null),v=Be(r,b,f.onViewportChange),S=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=f.toastCount>0;g.useEffect(()=>{const C=T=>{var j;s.every(L=>T[L]||T.code===L)&&((j=b.current)==null||j.focus())};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[s]),g.useEffect(()=>{const C=h.current,T=b.current;if(E&&C&&T){const N=()=>{if(!f.isClosePausedRef.current){const H=new CustomEvent(Eu);T.dispatchEvent(H),f.isClosePausedRef.current=!0}},j=()=>{if(f.isClosePausedRef.current){const H=new CustomEvent(Ru);T.dispatchEvent(H),f.isClosePausedRef.current=!1}},L=H=>{!C.contains(H.relatedTarget)&&j()},$=()=>{C.contains(document.activeElement)||j()};return C.addEventListener("focusin",N),C.addEventListener("focusout",L),C.addEventListener("pointermove",N),C.addEventListener("pointerleave",$),window.addEventListener("blur",N),window.addEventListener("focus",j),()=>{C.removeEventListener("focusin",N),C.removeEventListener("focusout",L),C.removeEventListener("pointermove",N),C.removeEventListener("pointerleave",$),window.removeEventListener("blur",N),window.removeEventListener("focus",j)}}},[E,f.isClosePausedRef]);const k=g.useCallback(({tabbingDirection:C})=>{const N=m().map(j=>{const L=j.ref.current,$=[L,...jw(L)];return C==="forwards"?$:$.reverse()});return(C==="forwards"?N.reverse():N).flat()},[m]);return g.useEffect(()=>{const C=b.current;if(C){const T=N=>{var $,H,z;const j=N.altKey||N.ctrlKey||N.metaKey;if(N.key==="Tab"&&!j){const Y=document.activeElement,q=N.shiftKey;if(N.target===C&&q){($=y.current)==null||$.focus();return}const te=k({tabbingDirection:q?"backwards":"forwards"}),oe=te.findIndex(J=>J===Y);su(te.slice(oe+1))?N.preventDefault():q?(H=y.current)==null||H.focus():(z=x.current)==null||z.focus()}};return C.addEventListener("keydown",T),()=>C.removeEventListener("keydown",T)}},[m,k]),c.jsxs(lw,{ref:h,role:"region","aria-label":l.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&c.jsx(Pu,{ref:y,onFocusFromOutsideViewport:()=>{const C=k({tabbingDirection:"forwards"});su(C)}}),c.jsx(Xu.Slot,{scope:i,children:c.jsx(je.ol,{tabIndex:-1,...u,ref:v})}),E&&c.jsx(Pu,{ref:x,onFocusFromOutsideViewport:()=>{const C=k({tabbingDirection:"backwards"});su(C)}})]})});Kh.displayName=Qh;var Xh="ToastFocusProxy",Pu=g.forwardRef((n,r)=>{const{__scopeToast:i,onFocusFromOutsideViewport:s,...l}=n,u=Ya(Xh,i);return c.jsx(Va,{"aria-hidden":!0,tabIndex:0,...l,ref:r,style:{position:"fixed"},onFocus:f=>{var y;const m=f.relatedTarget;!((y=u.viewport)!=null&&y.contains(m))&&s()}})});Pu.displayName=Xh;var Ga="Toast",ww="toast.swipeStart",bw="toast.swipeMove",kw="toast.swipeCancel",Sw="toast.swipeEnd",Jh=g.forwardRef((n,r)=>{const{forceMount:i,open:s,defaultOpen:l,onOpenChange:u,...f}=n,[m=!0,h]=Vh({prop:s,defaultProp:l,onChange:u});return c.jsx(Vi,{present:i||m,children:c.jsx(Rw,{open:m,...f,ref:r,onClose:()=>h(!1),onPause:Xe(n.onPause),onResume:Xe(n.onResume),onSwipeStart:Ee(n.onSwipeStart,y=>{y.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ee(n.onSwipeMove,y=>{const{x,y:b}=y.detail.delta;y.currentTarget.setAttribute("data-swipe","move"),y.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${x}px`),y.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:Ee(n.onSwipeCancel,y=>{y.currentTarget.setAttribute("data-swipe","cancel"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),y.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ee(n.onSwipeEnd,y=>{const{x,y:b}=y.detail.delta;y.currentTarget.setAttribute("data-swipe","end"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),y.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${x}px`),y.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),h(!1)})})})});Jh.displayName=Ga;var[Cw,Ew]=Yh(Ga,{onClose(){}}),Rw=g.forwardRef((n,r)=>{const{__scopeToast:i,type:s="foreground",duration:l,open:u,onClose:f,onEscapeKeyDown:m,onPause:h,onResume:y,onSwipeStart:x,onSwipeMove:b,onSwipeCancel:v,onSwipeEnd:S,...E}=n,k=Ya(Ga,i),[C,T]=g.useState(null),N=Be(r,J=>T(J)),j=g.useRef(null),L=g.useRef(null),$=l||k.duration,H=g.useRef(0),z=g.useRef($),Y=g.useRef(0),{onToastAdd:q,onToastRemove:G}=k,re=Xe(()=>{var he;(C==null?void 0:C.contains(document.activeElement))&&((he=k.viewport)==null||he.focus()),f()}),te=g.useCallback(J=>{!J||J===1/0||(window.clearTimeout(Y.current),H.current=new Date().getTime(),Y.current=window.setTimeout(re,J))},[re]);g.useEffect(()=>{const J=k.viewport;if(J){const he=()=>{te(z.current),y==null||y()},ce=()=>{const ae=new Date().getTime()-H.current;z.current=z.current-ae,window.clearTimeout(Y.current),h==null||h()};return J.addEventListener(Eu,ce),J.addEventListener(Ru,he),()=>{J.removeEventListener(Eu,ce),J.removeEventListener(Ru,he)}}},[k.viewport,$,h,y,te]),g.useEffect(()=>{u&&!k.isClosePausedRef.current&&te($)},[u,$,k.isClosePausedRef,te]),g.useEffect(()=>(q(),()=>G()),[q,G]);const oe=g.useMemo(()=>C?og(C):null,[C]);return k.viewport?c.jsxs(c.Fragment,{children:[oe&&c.jsx(Pw,{__scopeToast:i,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:oe}),c.jsx(Cw,{scope:i,onClose:re,children:Zo.createPortal(c.jsx(Xu.ItemSlot,{scope:i,children:c.jsx(aw,{asChild:!0,onEscapeKeyDown:Ee(m,()=>{k.isFocusedToastEscapeKeyDownRef.current||re(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(je.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":k.swipeDirection,...E,ref:N,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:Ee(n.onKeyDown,J=>{J.key==="Escape"&&(m==null||m(J.nativeEvent),J.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,re()))}),onPointerDown:Ee(n.onPointerDown,J=>{J.button===0&&(j.current={x:J.clientX,y:J.clientY})}),onPointerMove:Ee(n.onPointerMove,J=>{if(!j.current)return;const he=J.clientX-j.current.x,ce=J.clientY-j.current.y,ae=!!L.current,F=["left","right"].includes(k.swipeDirection),Q=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,X=F?Q(0,he):0,P=F?0:Q(0,ce),_=J.pointerType==="touch"?10:2,ee={x:X,y:P},de={originalEvent:J,delta:ee};ae?(L.current=ee,ya(bw,b,de,{discrete:!1})):Tp(ee,k.swipeDirection,_)?(L.current=ee,ya(ww,x,de,{discrete:!1}),J.target.setPointerCapture(J.pointerId)):(Math.abs(he)>_||Math.abs(ce)>_)&&(j.current=null)}),onPointerUp:Ee(n.onPointerUp,J=>{const he=L.current,ce=J.target;if(ce.hasPointerCapture(J.pointerId)&&ce.releasePointerCapture(J.pointerId),L.current=null,j.current=null,he){const ae=J.currentTarget,F={originalEvent:J,delta:he};Tp(he,k.swipeDirection,k.swipeThreshold)?ya(Sw,S,F,{discrete:!0}):ya(kw,v,F,{discrete:!0}),ae.addEventListener("click",Q=>Q.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),Pw=n=>{const{__scopeToast:r,children:i,...s}=n,l=Ya(Ga,r),[u,f]=g.useState(!1),[m,h]=g.useState(!1);return Nw(()=>f(!0)),g.useEffect(()=>{const y=window.setTimeout(()=>h(!0),1e3);return()=>window.clearTimeout(y)},[]),m?null:c.jsx(qh,{asChild:!0,children:c.jsx(Va,{...s,children:u&&c.jsxs(c.Fragment,{children:[l.label," ",i]})})})},Tw="ToastTitle",Zh=g.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return c.jsx(je.div,{...s,ref:r})});Zh.displayName=Tw;var Aw="ToastDescription",eg=g.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return c.jsx(je.div,{...s,ref:r})});eg.displayName=Aw;var tg="ToastAction",ng=g.forwardRef((n,r)=>{const{altText:i,...s}=n;return i.trim()?c.jsx(ig,{altText:i,asChild:!0,children:c.jsx(Ju,{...s,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${tg}\`. Expected non-empty \`string\`.`),null)});ng.displayName=tg;var rg="ToastClose",Ju=g.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n,l=Ew(rg,i);return c.jsx(ig,{asChild:!0,children:c.jsx(je.button,{type:"button",...s,ref:r,onClick:Ee(n.onClick,l.onClose)})})});Ju.displayName=rg;var ig=g.forwardRef((n,r)=>{const{__scopeToast:i,altText:s,...l}=n;return c.jsx(je.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...l,ref:r})});function og(n){const r=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&r.push(s.textContent),Iw(s)){const l=s.ariaHidden||s.hidden||s.style.display==="none",u=s.dataset.radixToastAnnounceExclude==="";if(!l)if(u){const f=s.dataset.radixToastAnnounceAlt;f&&r.push(f)}else r.push(...og(s))}}),r}function ya(n,r,i,{discrete:s}){const l=i.originalEvent.currentTarget,u=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Qu(l,u):l.dispatchEvent(u)}var Tp=(n,r,i=0)=>{const s=Math.abs(n.x),l=Math.abs(n.y),u=s>l;return r==="left"||r==="right"?u&&s>i:!u&&l>i};function Nw(n=()=>{}){const r=Xe(n);Rt(()=>{let i=0,s=0;return i=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(s)}},[r])}function Iw(n){return n.nodeType===n.ELEMENT_NODE}function jw(n){const r=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const l=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||l?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function su(n){const r=document.activeElement;return n.some(i=>i===r?!0:(i.focus(),document.activeElement!==r))}var Mw=Gh,sg=Kh,ag=Jh,lg=Zh,cg=eg,ug=ng,dg=Ju;function fg(n){var r,i,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(i=fg(n[r]))&&(s&&(s+=" "),s+=i)}else for(i in n)n[i]&&(s&&(s+=" "),s+=i);return s}function mg(){for(var n,r,i=0,s="",l=arguments.length;i<l;i++)(n=arguments[i])&&(r=fg(n))&&(s&&(s+=" "),s+=r);return s}const Ap=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Np=mg,Qa=(n,r)=>i=>{var s;if((r==null?void 0:r.variants)==null)return Np(n,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:u}=r,f=Object.keys(l).map(y=>{const x=i==null?void 0:i[y],b=u==null?void 0:u[y];if(x===null)return null;const v=Ap(x)||Ap(b);return l[y][v]}),m=i&&Object.entries(i).reduce((y,x)=>{let[b,v]=x;return v===void 0||(y[b]=v),y},{}),h=r==null||(s=r.compoundVariants)===null||s===void 0?void 0:s.reduce((y,x)=>{let{class:b,className:v,...S}=x;return Object.entries(S).every(E=>{let[k,C]=E;return Array.isArray(C)?C.includes({...u,...m}[k]):{...u,...m}[k]===C})?[...y,b,v]:y},[]);return Np(n,f,h,i==null?void 0:i.class,i==null?void 0:i.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pg=(...n)=>n.filter((r,i,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=g.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...m},h)=>g.createElement("svg",{ref:h,...Dw,width:r,height:r,stroke:n,strokeWidth:s?Number(i)*24/Number(r):i,className:pg("lucide",l),...m},[...f.map(([y,x])=>g.createElement(y,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(n,r)=>{const i=g.forwardRef(({className:s,...l},u)=>g.createElement(Ow,{ref:u,iconNode:r,className:pg(`lucide-${Lw(n)}`,s),...l}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=we("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=we("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=we("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=we("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=we("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=we("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=we("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=we("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=we("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=we("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=we("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=we("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=we("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=we("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=we("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=we("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=we("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=we("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=we("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=we("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=we("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=we("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=we("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=we("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=we("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=we("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=we("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=we("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=we("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=we("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=we("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=we("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=we("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=we("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=we("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=we("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=we("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=we("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=we("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nd="-",sb=n=>{const r=lb(n),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:f=>{const m=f.split(nd);return m[0]===""&&m.length!==1&&m.shift(),vg(m,r)||ab(f)},getConflictingClassGroupIds:(f,m)=>{const h=i[f]||[];return m&&s[f]?[...h,...s[f]]:h}}},vg=(n,r)=>{var f;if(n.length===0)return r.classGroupId;const i=n[0],s=r.nextPart.get(i),l=s?vg(n.slice(1),s):void 0;if(l)return l;if(r.validators.length===0)return;const u=n.join(nd);return(f=r.validators.find(({validator:m})=>m(u)))==null?void 0:f.classGroupId},jp=/^\[(.+)\]$/,ab=n=>{if(jp.test(n)){const r=jp.exec(n)[1],i=r==null?void 0:r.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}},lb=n=>{const{theme:r,prefix:i}=n,s={nextPart:new Map,validators:[]};return ub(Object.entries(n.classGroups),i).forEach(([u,f])=>{Nu(f,s,u,r)}),s},Nu=(n,r,i,s)=>{n.forEach(l=>{if(typeof l=="string"){const u=l===""?r:Mp(r,l);u.classGroupId=i;return}if(typeof l=="function"){if(cb(l)){Nu(l(s),r,i,s);return}r.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([u,f])=>{Nu(f,Mp(r,u),i,s)})})},Mp=(n,r)=>{let i=n;return r.split(nd).forEach(s=>{i.nextPart.has(s)||i.nextPart.set(s,{nextPart:new Map,validators:[]}),i=i.nextPart.get(s)}),i},cb=n=>n.isThemeGetter,ub=(n,r)=>r?n.map(([i,s])=>{const l=s.map(u=>typeof u=="string"?r+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([f,m])=>[r+f,m])):u);return[i,l]}):n,db=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,i=new Map,s=new Map;const l=(u,f)=>{i.set(u,f),r++,r>n&&(r=0,s=i,i=new Map)};return{get(u){let f=i.get(u);if(f!==void 0)return f;if((f=s.get(u))!==void 0)return l(u,f),f},set(u,f){i.has(u)?i.set(u,f):l(u,f)}}},xg="!",fb=n=>{const{separator:r,experimentalParseClassName:i}=n,s=r.length===1,l=r[0],u=r.length,f=m=>{const h=[];let y=0,x=0,b;for(let C=0;C<m.length;C++){let T=m[C];if(y===0){if(T===l&&(s||m.slice(C,C+u)===r)){h.push(m.slice(x,C)),x=C+u;continue}if(T==="/"){b=C;continue}}T==="["?y++:T==="]"&&y--}const v=h.length===0?m:m.substring(x),S=v.startsWith(xg),E=S?v.substring(1):v,k=b&&b>x?b-x:void 0;return{modifiers:h,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:k}};return i?m=>i({className:m,parseClassName:f}):f},mb=n=>{if(n.length<=1)return n;const r=[];let i=[];return n.forEach(s=>{s[0]==="["?(r.push(...i.sort(),s),i=[]):i.push(s)}),r.push(...i.sort()),r},pb=n=>({cache:db(n.cacheSize),parseClassName:fb(n),...sb(n)}),hb=/\s+/,gb=(n,r)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:l}=r,u=[],f=n.trim().split(hb);let m="";for(let h=f.length-1;h>=0;h-=1){const y=f[h],{modifiers:x,hasImportantModifier:b,baseClassName:v,maybePostfixModifierPosition:S}=i(y);let E=!!S,k=s(E?v.substring(0,S):v);if(!k){if(!E){m=y+(m.length>0?" "+m:m);continue}if(k=s(v),!k){m=y+(m.length>0?" "+m:m);continue}E=!1}const C=mb(x).join(":"),T=b?C+xg:C,N=T+k;if(u.includes(N))continue;u.push(N);const j=l(k,E);for(let L=0;L<j.length;++L){const $=j[L];u.push(T+$)}m=y+(m.length>0?" "+m:m)}return m};function yb(){let n=0,r,i,s="";for(;n<arguments.length;)(r=arguments[n++])&&(i=wg(r))&&(s&&(s+=" "),s+=i);return s}const wg=n=>{if(typeof n=="string")return n;let r,i="";for(let s=0;s<n.length;s++)n[s]&&(r=wg(n[s]))&&(i&&(i+=" "),i+=r);return i};function vb(n,...r){let i,s,l,u=f;function f(h){const y=r.reduce((x,b)=>b(x),n());return i=pb(y),s=i.cache.get,l=i.cache.set,u=m,m(h)}function m(h){const y=s(h);if(y)return y;const x=gb(h,i);return l(h,x),x}return function(){return u(yb.apply(null,arguments))}}const ze=n=>{const r=i=>i[n]||[];return r.isThemeGetter=!0,r},bg=/^\[(?:([a-z-]+):)?(.+)\]$/i,xb=/^\d+\/\d+$/,wb=new Set(["px","full","screen"]),bb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Sb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Cb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Eb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,On=n=>Ti(n)||wb.has(n)||xb.test(n),ur=n=>Yi(n,"length",Mb),Ti=n=>!!n&&!Number.isNaN(Number(n)),cu=n=>Yi(n,"number",Ti),Bo=n=>!!n&&Number.isInteger(Number(n)),Rb=n=>n.endsWith("%")&&Ti(n.slice(0,-1)),be=n=>bg.test(n),dr=n=>bb.test(n),Pb=new Set(["length","size","percentage"]),Tb=n=>Yi(n,Pb,kg),Ab=n=>Yi(n,"position",kg),Nb=new Set(["image","url"]),Ib=n=>Yi(n,Nb,Db),jb=n=>Yi(n,"",Lb),Ho=()=>!0,Yi=(n,r,i)=>{const s=bg.exec(n);return s?s[1]?typeof r=="string"?s[1]===r:r.has(s[1]):i(s[2]):!1},Mb=n=>kb.test(n)&&!Sb.test(n),kg=()=>!1,Lb=n=>Cb.test(n),Db=n=>Eb.test(n),Ob=()=>{const n=ze("colors"),r=ze("spacing"),i=ze("blur"),s=ze("brightness"),l=ze("borderColor"),u=ze("borderRadius"),f=ze("borderSpacing"),m=ze("borderWidth"),h=ze("contrast"),y=ze("grayscale"),x=ze("hueRotate"),b=ze("invert"),v=ze("gap"),S=ze("gradientColorStops"),E=ze("gradientColorStopPositions"),k=ze("inset"),C=ze("margin"),T=ze("opacity"),N=ze("padding"),j=ze("saturate"),L=ze("scale"),$=ze("sepia"),H=ze("skew"),z=ze("space"),Y=ze("translate"),q=()=>["auto","contain","none"],G=()=>["auto","hidden","clip","visible","scroll"],re=()=>["auto",be,r],te=()=>[be,r],oe=()=>["",On,ur],J=()=>["auto",Ti,be],he=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],ae=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",be],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>[Ti,be];return{cacheSize:500,separator:":",theme:{colors:[Ho],spacing:[On,ur],blur:["none","",dr,be],brightness:P(),borderColor:[n],borderRadius:["none","","full",dr,be],borderSpacing:te(),borderWidth:oe(),contrast:P(),grayscale:Q(),hueRotate:P(),invert:Q(),gap:te(),gradientColorStops:[n],gradientColorStopPositions:[Rb,ur],inset:re(),margin:re(),opacity:P(),padding:te(),saturate:P(),scale:P(),sepia:Q(),skew:P(),space:te(),translate:te()},classGroups:{aspect:[{aspect:["auto","square","video",be]}],container:["container"],columns:[{columns:[dr]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...he(),be]}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Bo,be]}],basis:[{basis:re()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",be]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",Bo,be]}],"grid-cols":[{"grid-cols":[Ho]}],"col-start-end":[{col:["auto",{span:["full",Bo,be]},be]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[Ho]}],"row-start-end":[{row:["auto",{span:[Bo,be]},be]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",be]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],ps:[{ps:[N]}],pe:[{pe:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",be,r]}],"min-w":[{"min-w":[be,r,"min","max","fit"]}],"max-w":[{"max-w":[be,r,"none","full","min","max","fit","prose",{screen:[dr]},dr]}],h:[{h:[be,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[be,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[be,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[be,r,"auto","min","max","fit"]}],"font-size":[{text:["base",dr,ur]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",cu]}],"font-family":[{font:[Ho]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",be]}],"line-clamp":[{"line-clamp":["none",Ti,cu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",On,be]}],"list-image":[{"list-image":["none",be]}],"list-style-type":[{list:["none","disc","decimal",be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",On,ur]}],"underline-offset":[{"underline-offset":["auto",On,be]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:te()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...he(),Ab]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Tb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ib]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[m]}],"border-w-x":[{"border-x":[m]}],"border-w-y":[{"border-y":[m]}],"border-w-s":[{"border-s":[m]}],"border-w-e":[{"border-e":[m]}],"border-w-t":[{"border-t":[m]}],"border-w-r":[{"border-r":[m]}],"border-w-b":[{"border-b":[m]}],"border-w-l":[{"border-l":[m]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[m]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[m]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:ce()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[On,be]}],"outline-w":[{outline:[On,ur]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[On,ur]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",dr,jb]}],"shadow-color":[{shadow:[Ho]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":[...ae(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ae()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[s]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",dr,be]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[b]}],saturate:[{saturate:[j]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[f]}],"border-spacing-x":[{"border-spacing-x":[f]}],"border-spacing-y":[{"border-spacing-y":[f]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",be]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",be]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[Bo,be]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",be]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":te()}],"scroll-mx":[{"scroll-mx":te()}],"scroll-my":[{"scroll-my":te()}],"scroll-ms":[{"scroll-ms":te()}],"scroll-me":[{"scroll-me":te()}],"scroll-mt":[{"scroll-mt":te()}],"scroll-mr":[{"scroll-mr":te()}],"scroll-mb":[{"scroll-mb":te()}],"scroll-ml":[{"scroll-ml":te()}],"scroll-p":[{"scroll-p":te()}],"scroll-px":[{"scroll-px":te()}],"scroll-py":[{"scroll-py":te()}],"scroll-ps":[{"scroll-ps":te()}],"scroll-pe":[{"scroll-pe":te()}],"scroll-pt":[{"scroll-pt":te()}],"scroll-pr":[{"scroll-pr":te()}],"scroll-pb":[{"scroll-pb":te()}],"scroll-pl":[{"scroll-pl":te()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[On,ur,cu]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Fb=vb(Ob);function ye(...n){return Fb(mg(n))}const $b=Mw,Sg=g.forwardRef(({className:n,...r},i)=>c.jsx(sg,{ref:i,className:ye("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...r}));Sg.displayName=sg.displayName;const _b=Qa("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Cg=g.forwardRef(({className:n,variant:r,...i},s)=>c.jsx(ag,{ref:s,className:ye(_b({variant:r}),n),...i}));Cg.displayName=ag.displayName;const zb=g.forwardRef(({className:n,...r},i)=>c.jsx(ug,{ref:i,className:ye("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...r}));zb.displayName=ug.displayName;const Eg=g.forwardRef(({className:n,...r},i)=>c.jsx(dg,{ref:i,className:ye("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...r,children:c.jsx(Xa,{className:"h-4 w-4"})}));Eg.displayName=dg.displayName;const Rg=g.forwardRef(({className:n,...r},i)=>c.jsx(lg,{ref:i,className:ye("text-sm font-semibold",n),...r}));Rg.displayName=lg.displayName;const Pg=g.forwardRef(({className:n,...r},i)=>c.jsx(cg,{ref:i,className:ye("text-sm opacity-90",n),...r}));Pg.displayName=cg.displayName;function Bb(){const{toasts:n}=Y0();return c.jsxs($b,{children:[n.map(function({id:r,title:i,description:s,action:l,...u}){return c.jsxs(Cg,{...u,children:[c.jsxs("div",{className:"grid gap-1",children:[i&&c.jsx(Rg,{children:i}),s&&c.jsx(Pg,{children:s})]}),l,c.jsx(Eg,{})]},r)}),c.jsx(Sg,{})]})}var Lp=["light","dark"],Hb="(prefers-color-scheme: dark)",Wb=g.createContext(void 0),Ub={setTheme:n=>{},themes:[]},qb=()=>{var n;return(n=g.useContext(Wb))!=null?n:Ub};g.memo(({forcedTheme:n,storageKey:r,attribute:i,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:f,attrs:m,nonce:h})=>{let y=u==="system",x=i==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${m.map(E=>`'${E}'`).join(",")})`};`:`var d=document.documentElement,n='${i}',s='setAttribute';`,b=l?Lp.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(E,k=!1,C=!0)=>{let T=f?f[E]:E,N=k?E+"|| ''":`'${T}'`,j="";return l&&C&&!k&&Lp.includes(E)&&(j+=`d.style.colorScheme = '${E}';`),i==="class"?k||T?j+=`c.add(${N})`:j+="null":T&&(j+=`d[s](n,${N})`),j},S=n?`!function(){${x}${v(n)}}()`:s?`!function(){try{${x}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${y})){var t='${Hb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${f?`var x=${JSON.stringify(f)};`:""}${v(f?"x[e]":"e",!0)}}${y?"":"else{"+v(u,!1,!1)+"}"}${b}}catch(e){}}()`:`!function(){try{${x}var e=localStorage.getItem('${r}');if(e){${f?`var x=${JSON.stringify(f)};`:""}${v(f?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${b}}catch(t){}}();`;return g.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:S}})});var Vb=n=>{switch(n){case"success":return Qb;case"info":return Xb;case"warning":return Kb;case"error":return Jb;default:return null}},Yb=Array(12).fill(0),Gb=({visible:n})=>Z.createElement("div",{className:"sonner-loading-wrapper","data-visible":n},Z.createElement("div",{className:"sonner-spinner"},Yb.map((r,i)=>Z.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),Qb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Kb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Xb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Jb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Zb=()=>{let[n,r]=Z.useState(document.hidden);return Z.useEffect(()=>{let i=()=>{r(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),n},Iu=1,e1=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let r=this.subscribers.indexOf(n);this.subscribers.splice(r,1)}),this.publish=n=>{this.subscribers.forEach(r=>r(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var r;let{message:i,...s}=n,l=typeof(n==null?void 0:n.id)=="number"||((r=n.id)==null?void 0:r.length)>0?n.id:Iu++,u=this.toasts.find(m=>m.id===l),f=n.dismissible===void 0?!0:n.dismissible;return u?this.toasts=this.toasts.map(m=>m.id===l?(this.publish({...m,...n,id:l,title:i}),{...m,...n,id:l,dismissible:f,title:i}):m):this.addToast({title:i,...s,dismissible:f,id:l}),l},this.dismiss=n=>(n||this.toasts.forEach(r=>{this.subscribers.forEach(i=>i({id:r.id,dismiss:!0}))}),this.subscribers.forEach(r=>r({id:n,dismiss:!0})),n),this.message=(n,r)=>this.create({...r,message:n}),this.error=(n,r)=>this.create({...r,message:n,type:"error"}),this.success=(n,r)=>this.create({...r,type:"success",message:n}),this.info=(n,r)=>this.create({...r,type:"info",message:n}),this.warning=(n,r)=>this.create({...r,type:"warning",message:n}),this.loading=(n,r)=>this.create({...r,type:"loading",message:n}),this.promise=(n,r)=>{if(!r)return;let i;r.loading!==void 0&&(i=this.create({...r,promise:n,type:"loading",message:r.loading,description:typeof r.description!="function"?r.description:void 0}));let s=n instanceof Promise?n:n(),l=i!==void 0;return s.then(async u=>{if(n1(u)&&!u.ok){l=!1;let f=typeof r.error=="function"?await r.error(`HTTP error! status: ${u.status}`):r.error,m=typeof r.description=="function"?await r.description(`HTTP error! status: ${u.status}`):r.description;this.create({id:i,type:"error",message:f,description:m})}else if(r.success!==void 0){l=!1;let f=typeof r.success=="function"?await r.success(u):r.success,m=typeof r.description=="function"?await r.description(u):r.description;this.create({id:i,type:"success",message:f,description:m})}}).catch(async u=>{if(r.error!==void 0){l=!1;let f=typeof r.error=="function"?await r.error(u):r.error,m=typeof r.description=="function"?await r.description(u):r.description;this.create({id:i,type:"error",message:f,description:m})}}).finally(()=>{var u;l&&(this.dismiss(i),i=void 0),(u=r.finally)==null||u.call(r)}),i},this.custom=(n,r)=>{let i=(r==null?void 0:r.id)||Iu++;return this.create({jsx:n(i),id:i,...r}),i},this.subscribers=[],this.toasts=[]}},jt=new e1,t1=(n,r)=>{let i=(r==null?void 0:r.id)||Iu++;return jt.addToast({title:n,...r,id:i}),i},n1=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",r1=t1,i1=()=>jt.toasts;Object.assign(r1,{success:jt.success,info:jt.info,warning:jt.warning,error:jt.error,custom:jt.custom,message:jt.message,promise:jt.promise,dismiss:jt.dismiss,loading:jt.loading},{getHistory:i1});function o1(n,{insertAt:r}={}){if(typeof document>"u")return;let i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}o1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function va(n){return n.label!==void 0}var s1=3,a1="32px",l1=4e3,c1=356,u1=14,d1=20,f1=200;function m1(...n){return n.filter(Boolean).join(" ")}var p1=n=>{var r,i,s,l,u,f,m,h,y,x;let{invert:b,toast:v,unstyled:S,interacting:E,setHeights:k,visibleToasts:C,heights:T,index:N,toasts:j,expanded:L,removeToast:$,defaultRichColors:H,closeButton:z,style:Y,cancelButtonStyle:q,actionButtonStyle:G,className:re="",descriptionClassName:te="",duration:oe,position:J,gap:he,loadingIcon:ce,expandByDefault:ae,classNames:F,icons:Q,closeButtonAriaLabel:X="Close toast",pauseWhenPageIsHidden:P,cn:_}=n,[ee,de]=Z.useState(!1),[xe,fe]=Z.useState(!1),[Re,Se]=Z.useState(!1),[Pe,qe]=Z.useState(!1),[Cn,En]=Z.useState(0),[$t,Rn]=Z.useState(0),Ar=Z.useRef(null),Qt=Z.useRef(null),Nr=N===0,ei=N+1<=C,Ge=v.type,_t=v.dismissible!==!1,Wn=v.className||"",Ji=v.descriptionClassName||"",Ir=Z.useMemo(()=>T.findIndex(ve=>ve.toastId===v.id)||0,[T,v.id]),rs=Z.useMemo(()=>{var ve;return(ve=v.closeButton)!=null?ve:z},[v.closeButton,z]),Zi=Z.useMemo(()=>v.duration||oe||l1,[v.duration,oe]),ti=Z.useRef(0),un=Z.useRef(0),jr=Z.useRef(0),Pn=Z.useRef(null),[Un,Mr]=J.split("-"),is=Z.useMemo(()=>T.reduce((ve,Me,Ne)=>Ne>=Ir?ve:ve+Me.height,0),[T,Ir]),eo=Zb(),os=v.invert||b,to=Ge==="loading";un.current=Z.useMemo(()=>Ir*he+is,[Ir,is]),Z.useEffect(()=>{de(!0)},[]),Z.useLayoutEffect(()=>{if(!ee)return;let ve=Qt.current,Me=ve.style.height;ve.style.height="auto";let Ne=ve.getBoundingClientRect().height;ve.style.height=Me,Rn(Ne),k(ot=>ot.find(st=>st.toastId===v.id)?ot.map(st=>st.toastId===v.id?{...st,height:Ne}:st):[{toastId:v.id,height:Ne,position:v.position},...ot])},[ee,v.title,v.description,k,v.id]);let zt=Z.useCallback(()=>{fe(!0),En(un.current),k(ve=>ve.filter(Me=>Me.toastId!==v.id)),setTimeout(()=>{$(v)},f1)},[v,$,k,un]);Z.useEffect(()=>{if(v.promise&&Ge==="loading"||v.duration===1/0||v.type==="loading")return;let ve,Me=Zi;return L||E||P&&eo?(()=>{if(jr.current<ti.current){let Ne=new Date().getTime()-ti.current;Me=Me-Ne}jr.current=new Date().getTime()})():Me!==1/0&&(ti.current=new Date().getTime(),ve=setTimeout(()=>{var Ne;(Ne=v.onAutoClose)==null||Ne.call(v,v),zt()},Me)),()=>clearTimeout(ve)},[L,E,ae,v,Zi,zt,v.promise,Ge,P,eo]),Z.useEffect(()=>{let ve=Qt.current;if(ve){let Me=ve.getBoundingClientRect().height;return Rn(Me),k(Ne=>[{toastId:v.id,height:Me,position:v.position},...Ne]),()=>k(Ne=>Ne.filter(ot=>ot.toastId!==v.id))}},[k,v.id]),Z.useEffect(()=>{v.delete&&zt()},[zt,v.delete]);function no(){return Q!=null&&Q.loading?Z.createElement("div",{className:"sonner-loader","data-visible":Ge==="loading"},Q.loading):ce?Z.createElement("div",{className:"sonner-loader","data-visible":Ge==="loading"},ce):Z.createElement(Gb,{visible:Ge==="loading"})}return Z.createElement("li",{"aria-live":v.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:Qt,className:_(re,Wn,F==null?void 0:F.toast,(r=v==null?void 0:v.classNames)==null?void 0:r.toast,F==null?void 0:F.default,F==null?void 0:F[Ge],(i=v==null?void 0:v.classNames)==null?void 0:i[Ge]),"data-sonner-toast":"","data-rich-colors":(s=v.richColors)!=null?s:H,"data-styled":!(v.jsx||v.unstyled||S),"data-mounted":ee,"data-promise":!!v.promise,"data-removed":xe,"data-visible":ei,"data-y-position":Un,"data-x-position":Mr,"data-index":N,"data-front":Nr,"data-swiping":Re,"data-dismissible":_t,"data-type":Ge,"data-invert":os,"data-swipe-out":Pe,"data-expanded":!!(L||ae&&ee),style:{"--index":N,"--toasts-before":N,"--z-index":j.length-N,"--offset":`${xe?Cn:un.current}px`,"--initial-height":ae?"auto":`${$t}px`,...Y,...v.style},onPointerDown:ve=>{to||!_t||(Ar.current=new Date,En(un.current),ve.target.setPointerCapture(ve.pointerId),ve.target.tagName!=="BUTTON"&&(Se(!0),Pn.current={x:ve.clientX,y:ve.clientY}))},onPointerUp:()=>{var ve,Me,Ne,ot;if(Pe||!_t)return;Pn.current=null;let st=Number(((ve=Qt.current)==null?void 0:ve.style.getPropertyValue("--swipe-amount").replace("px",""))||0),Lr=new Date().getTime()-((Me=Ar.current)==null?void 0:Me.getTime()),ss=Math.abs(st)/Lr;if(Math.abs(st)>=d1||ss>.11){En(un.current),(Ne=v.onDismiss)==null||Ne.call(v,v),zt(),qe(!0);return}(ot=Qt.current)==null||ot.style.setProperty("--swipe-amount","0px"),Se(!1)},onPointerMove:ve=>{var Me;if(!Pn.current||!_t)return;let Ne=ve.clientY-Pn.current.y,ot=ve.clientX-Pn.current.x,st=(Un==="top"?Math.min:Math.max)(0,Ne),Lr=ve.pointerType==="touch"?10:2;Math.abs(st)>Lr?(Me=Qt.current)==null||Me.style.setProperty("--swipe-amount",`${Ne}px`):Math.abs(ot)>Lr&&(Pn.current=null)}},rs&&!v.jsx?Z.createElement("button",{"aria-label":X,"data-disabled":to,"data-close-button":!0,onClick:to||!_t?()=>{}:()=>{var ve;zt(),(ve=v.onDismiss)==null||ve.call(v,v)},className:_(F==null?void 0:F.closeButton,(l=v==null?void 0:v.classNames)==null?void 0:l.closeButton)},Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Z.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Z.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,v.jsx||Z.isValidElement(v.title)?v.jsx||v.title:Z.createElement(Z.Fragment,null,Ge||v.icon||v.promise?Z.createElement("div",{"data-icon":"",className:_(F==null?void 0:F.icon,(u=v==null?void 0:v.classNames)==null?void 0:u.icon)},v.promise||v.type==="loading"&&!v.icon?v.icon||no():null,v.type!=="loading"?v.icon||(Q==null?void 0:Q[Ge])||Vb(Ge):null):null,Z.createElement("div",{"data-content":"",className:_(F==null?void 0:F.content,(f=v==null?void 0:v.classNames)==null?void 0:f.content)},Z.createElement("div",{"data-title":"",className:_(F==null?void 0:F.title,(m=v==null?void 0:v.classNames)==null?void 0:m.title)},v.title),v.description?Z.createElement("div",{"data-description":"",className:_(te,Ji,F==null?void 0:F.description,(h=v==null?void 0:v.classNames)==null?void 0:h.description)},v.description):null),Z.isValidElement(v.cancel)?v.cancel:v.cancel&&va(v.cancel)?Z.createElement("button",{"data-button":!0,"data-cancel":!0,style:v.cancelButtonStyle||q,onClick:ve=>{var Me,Ne;va(v.cancel)&&_t&&((Ne=(Me=v.cancel).onClick)==null||Ne.call(Me,ve),zt())},className:_(F==null?void 0:F.cancelButton,(y=v==null?void 0:v.classNames)==null?void 0:y.cancelButton)},v.cancel.label):null,Z.isValidElement(v.action)?v.action:v.action&&va(v.action)?Z.createElement("button",{"data-button":!0,"data-action":!0,style:v.actionButtonStyle||G,onClick:ve=>{var Me,Ne;va(v.action)&&(ve.defaultPrevented||((Ne=(Me=v.action).onClick)==null||Ne.call(Me,ve),zt()))},className:_(F==null?void 0:F.actionButton,(x=v==null?void 0:v.classNames)==null?void 0:x.actionButton)},v.action.label):null))};function Dp(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}var h1=n=>{let{invert:r,position:i="bottom-right",hotkey:s=["altKey","KeyT"],expand:l,closeButton:u,className:f,offset:m,theme:h="light",richColors:y,duration:x,style:b,visibleToasts:v=s1,toastOptions:S,dir:E=Dp(),gap:k=u1,loadingIcon:C,icons:T,containerAriaLabel:N="Notifications",pauseWhenPageIsHidden:j,cn:L=m1}=n,[$,H]=Z.useState([]),z=Z.useMemo(()=>Array.from(new Set([i].concat($.filter(P=>P.position).map(P=>P.position)))),[$,i]),[Y,q]=Z.useState([]),[G,re]=Z.useState(!1),[te,oe]=Z.useState(!1),[J,he]=Z.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ce=Z.useRef(null),ae=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),F=Z.useRef(null),Q=Z.useRef(!1),X=Z.useCallback(P=>{var _;(_=$.find(ee=>ee.id===P.id))!=null&&_.delete||jt.dismiss(P.id),H(ee=>ee.filter(({id:de})=>de!==P.id))},[$]);return Z.useEffect(()=>jt.subscribe(P=>{if(P.dismiss){H(_=>_.map(ee=>ee.id===P.id?{...ee,delete:!0}:ee));return}setTimeout(()=>{Gu.flushSync(()=>{H(_=>{let ee=_.findIndex(de=>de.id===P.id);return ee!==-1?[..._.slice(0,ee),{..._[ee],...P},..._.slice(ee+1)]:[P,..._]})})})}),[]),Z.useEffect(()=>{if(h!=="system"){he(h);return}h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?he("dark"):he("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:P})=>{he(P?"dark":"light")})},[h]),Z.useEffect(()=>{$.length<=1&&re(!1)},[$]),Z.useEffect(()=>{let P=_=>{var ee,de;s.every(xe=>_[xe]||_.code===xe)&&(re(!0),(ee=ce.current)==null||ee.focus()),_.code==="Escape"&&(document.activeElement===ce.current||(de=ce.current)!=null&&de.contains(document.activeElement))&&re(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[s]),Z.useEffect(()=>{if(ce.current)return()=>{F.current&&(F.current.focus({preventScroll:!0}),F.current=null,Q.current=!1)}},[ce.current]),$.length?Z.createElement("section",{"aria-label":`${N} ${ae}`,tabIndex:-1},z.map((P,_)=>{var ee;let[de,xe]=P.split("-");return Z.createElement("ol",{key:P,dir:E==="auto"?Dp():E,tabIndex:-1,ref:ce,className:f,"data-sonner-toaster":!0,"data-theme":J,"data-y-position":de,"data-x-position":xe,style:{"--front-toast-height":`${((ee=Y[0])==null?void 0:ee.height)||0}px`,"--offset":typeof m=="number"?`${m}px`:m||a1,"--width":`${c1}px`,"--gap":`${k}px`,...b},onBlur:fe=>{Q.current&&!fe.currentTarget.contains(fe.relatedTarget)&&(Q.current=!1,F.current&&(F.current.focus({preventScroll:!0}),F.current=null))},onFocus:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||Q.current||(Q.current=!0,F.current=fe.relatedTarget)},onMouseEnter:()=>re(!0),onMouseMove:()=>re(!0),onMouseLeave:()=>{te||re(!1)},onPointerDown:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||oe(!0)},onPointerUp:()=>oe(!1)},$.filter(fe=>!fe.position&&_===0||fe.position===P).map((fe,Re)=>{var Se,Pe;return Z.createElement(p1,{key:fe.id,icons:T,index:Re,toast:fe,defaultRichColors:y,duration:(Se=S==null?void 0:S.duration)!=null?Se:x,className:S==null?void 0:S.className,descriptionClassName:S==null?void 0:S.descriptionClassName,invert:r,visibleToasts:v,closeButton:(Pe=S==null?void 0:S.closeButton)!=null?Pe:u,interacting:te,position:P,style:S==null?void 0:S.style,unstyled:S==null?void 0:S.unstyled,classNames:S==null?void 0:S.classNames,cancelButtonStyle:S==null?void 0:S.cancelButtonStyle,actionButtonStyle:S==null?void 0:S.actionButtonStyle,removeToast:X,toasts:$.filter(qe=>qe.position==fe.position),heights:Y.filter(qe=>qe.position==fe.position),setHeights:q,expandByDefault:l,gap:k,loadingIcon:C,expanded:G,pauseWhenPageIsHidden:j,cn:L})}))})):null};const g1=({...n})=>{const{theme:r="system"}=qb();return c.jsx(h1,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n})};function y1(n,r=[]){let i=[];function s(u,f){const m=g.createContext(f),h=i.length;i=[...i,f];const y=b=>{var T;const{scope:v,children:S,...E}=b,k=((T=v==null?void 0:v[n])==null?void 0:T[h])||m,C=g.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:C,children:S})};y.displayName=u+"Provider";function x(b,v){var k;const S=((k=v==null?void 0:v[n])==null?void 0:k[h])||m,E=g.useContext(S);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[y,x]}const l=()=>{const u=i.map(f=>g.createContext(f));return function(m){const h=(m==null?void 0:m[n])||u;return g.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return l.scopeName=n,[s,v1(l,...r)]}function v1(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((m,{useScope:h,scopeName:y})=>{const b=h(u)[`__scope${y}`];return{...m,...b}},{});return g.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var x1="DismissableLayer",ju="dismissableLayer.update",w1="dismissableLayer.pointerDownOutside",b1="dismissableLayer.focusOutside",Op,Tg=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),rd=g.forwardRef((n,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:f,onDismiss:m,...h}=n,y=g.useContext(Tg),[x,b]=g.useState(null),v=(x==null?void 0:x.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=g.useState({}),E=Be(r,z=>b(z)),k=Array.from(y.layers),[C]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),T=k.indexOf(C),N=x?k.indexOf(x):-1,j=y.layersWithOutsidePointerEventsDisabled.size>0,L=N>=T,$=C1(z=>{const Y=z.target,q=[...y.branches].some(G=>G.contains(Y));!L||q||(l==null||l(z),f==null||f(z),z.defaultPrevented||m==null||m())},v),H=E1(z=>{const Y=z.target;[...y.branches].some(G=>G.contains(Y))||(u==null||u(z),f==null||f(z),z.defaultPrevented||m==null||m())},v);return zh(z=>{N===y.layers.size-1&&(s==null||s(z),!z.defaultPrevented&&m&&(z.preventDefault(),m()))},v),g.useEffect(()=>{if(x)return i&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(Op=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(x)),y.layers.add(x),Fp(),()=>{i&&y.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Op)}},[x,v,i,y]),g.useEffect(()=>()=>{x&&(y.layers.delete(x),y.layersWithOutsidePointerEventsDisabled.delete(x),Fp())},[x,y]),g.useEffect(()=>{const z=()=>S({});return document.addEventListener(ju,z),()=>document.removeEventListener(ju,z)},[]),c.jsx(je.div,{...h,ref:E,style:{pointerEvents:j?L?"auto":"none":void 0,...n.style},onFocusCapture:Ee(n.onFocusCapture,H.onFocusCapture),onBlurCapture:Ee(n.onBlurCapture,H.onBlurCapture),onPointerDownCapture:Ee(n.onPointerDownCapture,$.onPointerDownCapture)})});rd.displayName=x1;var k1="DismissableLayerBranch",S1=g.forwardRef((n,r)=>{const i=g.useContext(Tg),s=g.useRef(null),l=Be(r,s);return g.useEffect(()=>{const u=s.current;if(u)return i.branches.add(u),()=>{i.branches.delete(u)}},[i.branches]),c.jsx(je.div,{...n,ref:l})});S1.displayName=k1;function C1(n,r=globalThis==null?void 0:globalThis.document){const i=Xe(n),s=g.useRef(!1),l=g.useRef(()=>{});return g.useEffect(()=>{const u=m=>{if(m.target&&!s.current){let h=function(){Ag(w1,i,y,{discrete:!0})};const y={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",l.current),l.current=h,r.addEventListener("click",l.current,{once:!0})):h()}else r.removeEventListener("click",l.current);s.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",u),r.removeEventListener("click",l.current)}},[r,i]),{onPointerDownCapture:()=>s.current=!0}}function E1(n,r=globalThis==null?void 0:globalThis.document){const i=Xe(n),s=g.useRef(!1);return g.useEffect(()=>{const l=u=>{u.target&&!s.current&&Ag(b1,i,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",l),()=>r.removeEventListener("focusin",l)},[r,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Fp(){const n=new CustomEvent(ju);document.dispatchEvent(n)}function Ag(n,r,i,{discrete:s}){const l=i.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Qu(l,u):l.dispatchEvent(u)}var R1=Fh.useId||(()=>{}),P1=0;function uu(n){const[r,i]=g.useState(R1());return Rt(()=>{i(s=>s??String(P1++))},[n]),n||(r?`radix-${r}`:"")}const T1=["top","right","bottom","left"],kr=Math.min,Dt=Math.max,La=Math.round,xa=Math.floor,Sr=n=>({x:n,y:n}),A1={left:"right",right:"left",bottom:"top",top:"bottom"},N1={start:"end",end:"start"};function Mu(n,r,i){return Dt(n,kr(r,i))}function _n(n,r){return typeof n=="function"?n(r):n}function zn(n){return n.split("-")[0]}function Gi(n){return n.split("-")[1]}function id(n){return n==="x"?"y":"x"}function od(n){return n==="y"?"height":"width"}function Cr(n){return["top","bottom"].includes(zn(n))?"y":"x"}function sd(n){return id(Cr(n))}function I1(n,r,i){i===void 0&&(i=!1);const s=Gi(n),l=sd(n),u=od(l);let f=l==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return r.reference[u]>r.floating[u]&&(f=Da(f)),[f,Da(f)]}function j1(n){const r=Da(n);return[Lu(n),r,Lu(r)]}function Lu(n){return n.replace(/start|end/g,r=>N1[r])}function M1(n,r,i){const s=["left","right"],l=["right","left"],u=["top","bottom"],f=["bottom","top"];switch(n){case"top":case"bottom":return i?r?l:s:r?s:l;case"left":case"right":return r?u:f;default:return[]}}function L1(n,r,i,s){const l=Gi(n);let u=M1(zn(n),i==="start",s);return l&&(u=u.map(f=>f+"-"+l),r&&(u=u.concat(u.map(Lu)))),u}function Da(n){return n.replace(/left|right|bottom|top/g,r=>A1[r])}function D1(n){return{top:0,right:0,bottom:0,left:0,...n}}function Ng(n){return typeof n!="number"?D1(n):{top:n,right:n,bottom:n,left:n}}function Oa(n){const{x:r,y:i,width:s,height:l}=n;return{width:s,height:l,top:i,left:r,right:r+s,bottom:i+l,x:r,y:i}}function $p(n,r,i){let{reference:s,floating:l}=n;const u=Cr(r),f=sd(r),m=od(f),h=zn(r),y=u==="y",x=s.x+s.width/2-l.width/2,b=s.y+s.height/2-l.height/2,v=s[m]/2-l[m]/2;let S;switch(h){case"top":S={x,y:s.y-l.height};break;case"bottom":S={x,y:s.y+s.height};break;case"right":S={x:s.x+s.width,y:b};break;case"left":S={x:s.x-l.width,y:b};break;default:S={x:s.x,y:s.y}}switch(Gi(r)){case"start":S[f]-=v*(i&&y?-1:1);break;case"end":S[f]+=v*(i&&y?-1:1);break}return S}const O1=async(n,r,i)=>{const{placement:s="bottom",strategy:l="absolute",middleware:u=[],platform:f}=i,m=u.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(r));let y=await f.getElementRects({reference:n,floating:r,strategy:l}),{x,y:b}=$p(y,s,h),v=s,S={},E=0;for(let k=0;k<m.length;k++){const{name:C,fn:T}=m[k],{x:N,y:j,data:L,reset:$}=await T({x,y:b,initialPlacement:s,placement:v,strategy:l,middlewareData:S,rects:y,platform:f,elements:{reference:n,floating:r}});x=N??x,b=j??b,S={...S,[C]:{...S[C],...L}},$&&E<=50&&(E++,typeof $=="object"&&($.placement&&(v=$.placement),$.rects&&(y=$.rects===!0?await f.getElementRects({reference:n,floating:r,strategy:l}):$.rects),{x,y:b}=$p(y,v,h)),k=-1)}return{x,y:b,placement:v,strategy:l,middlewareData:S}};async function qo(n,r){var i;r===void 0&&(r={});const{x:s,y:l,platform:u,rects:f,elements:m,strategy:h}=n,{boundary:y="clippingAncestors",rootBoundary:x="viewport",elementContext:b="floating",altBoundary:v=!1,padding:S=0}=_n(r,n),E=Ng(S),C=m[v?b==="floating"?"reference":"floating":b],T=Oa(await u.getClippingRect({element:(i=await(u.isElement==null?void 0:u.isElement(C)))==null||i?C:C.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(m.floating)),boundary:y,rootBoundary:x,strategy:h})),N=b==="floating"?{x:s,y:l,width:f.floating.width,height:f.floating.height}:f.reference,j=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m.floating)),L=await(u.isElement==null?void 0:u.isElement(j))?await(u.getScale==null?void 0:u.getScale(j))||{x:1,y:1}:{x:1,y:1},$=Oa(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:N,offsetParent:j,strategy:h}):N);return{top:(T.top-$.top+E.top)/L.y,bottom:($.bottom-T.bottom+E.bottom)/L.y,left:(T.left-$.left+E.left)/L.x,right:($.right-T.right+E.right)/L.x}}const F1=n=>({name:"arrow",options:n,async fn(r){const{x:i,y:s,placement:l,rects:u,platform:f,elements:m,middlewareData:h}=r,{element:y,padding:x=0}=_n(n,r)||{};if(y==null)return{};const b=Ng(x),v={x:i,y:s},S=sd(l),E=od(S),k=await f.getDimensions(y),C=S==="y",T=C?"top":"left",N=C?"bottom":"right",j=C?"clientHeight":"clientWidth",L=u.reference[E]+u.reference[S]-v[S]-u.floating[E],$=v[S]-u.reference[S],H=await(f.getOffsetParent==null?void 0:f.getOffsetParent(y));let z=H?H[j]:0;(!z||!await(f.isElement==null?void 0:f.isElement(H)))&&(z=m.floating[j]||u.floating[E]);const Y=L/2-$/2,q=z/2-k[E]/2-1,G=kr(b[T],q),re=kr(b[N],q),te=G,oe=z-k[E]-re,J=z/2-k[E]/2+Y,he=Mu(te,J,oe),ce=!h.arrow&&Gi(l)!=null&&J!==he&&u.reference[E]/2-(J<te?G:re)-k[E]/2<0,ae=ce?J<te?J-te:J-oe:0;return{[S]:v[S]+ae,data:{[S]:he,centerOffset:J-he-ae,...ce&&{alignmentOffset:ae}},reset:ce}}}),$1=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var i,s;const{placement:l,middlewareData:u,rects:f,initialPlacement:m,platform:h,elements:y}=r,{mainAxis:x=!0,crossAxis:b=!0,fallbackPlacements:v,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:k=!0,...C}=_n(n,r);if((i=u.arrow)!=null&&i.alignmentOffset)return{};const T=zn(l),N=Cr(m),j=zn(m)===m,L=await(h.isRTL==null?void 0:h.isRTL(y.floating)),$=v||(j||!k?[Da(m)]:j1(m)),H=E!=="none";!v&&H&&$.push(...L1(m,k,E,L));const z=[m,...$],Y=await qo(r,C),q=[];let G=((s=u.flip)==null?void 0:s.overflows)||[];if(x&&q.push(Y[T]),b){const J=I1(l,f,L);q.push(Y[J[0]],Y[J[1]])}if(G=[...G,{placement:l,overflows:q}],!q.every(J=>J<=0)){var re,te;const J=(((re=u.flip)==null?void 0:re.index)||0)+1,he=z[J];if(he)return{data:{index:J,overflows:G},reset:{placement:he}};let ce=(te=G.filter(ae=>ae.overflows[0]<=0).sort((ae,F)=>ae.overflows[1]-F.overflows[1])[0])==null?void 0:te.placement;if(!ce)switch(S){case"bestFit":{var oe;const ae=(oe=G.filter(F=>{if(H){const Q=Cr(F.placement);return Q===N||Q==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(Q=>Q>0).reduce((Q,X)=>Q+X,0)]).sort((F,Q)=>F[1]-Q[1])[0])==null?void 0:oe[0];ae&&(ce=ae);break}case"initialPlacement":ce=m;break}if(l!==ce)return{reset:{placement:ce}}}return{}}}};function _p(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function zp(n){return T1.some(r=>n[r]>=0)}const _1=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:i}=r,{strategy:s="referenceHidden",...l}=_n(n,r);switch(s){case"referenceHidden":{const u=await qo(r,{...l,elementContext:"reference"}),f=_p(u,i.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:zp(f)}}}case"escaped":{const u=await qo(r,{...l,altBoundary:!0}),f=_p(u,i.floating);return{data:{escapedOffsets:f,escaped:zp(f)}}}default:return{}}}}};async function z1(n,r){const{placement:i,platform:s,elements:l}=n,u=await(s.isRTL==null?void 0:s.isRTL(l.floating)),f=zn(i),m=Gi(i),h=Cr(i)==="y",y=["left","top"].includes(f)?-1:1,x=u&&h?-1:1,b=_n(r,n);let{mainAxis:v,crossAxis:S,alignmentAxis:E}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return m&&typeof E=="number"&&(S=m==="end"?E*-1:E),h?{x:S*x,y:v*y}:{x:v*y,y:S*x}}const B1=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var i,s;const{x:l,y:u,placement:f,middlewareData:m}=r,h=await z1(r,n);return f===((i=m.offset)==null?void 0:i.placement)&&(s=m.arrow)!=null&&s.alignmentOffset?{}:{x:l+h.x,y:u+h.y,data:{...h,placement:f}}}}},H1=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:i,y:s,placement:l}=r,{mainAxis:u=!0,crossAxis:f=!1,limiter:m={fn:C=>{let{x:T,y:N}=C;return{x:T,y:N}}},...h}=_n(n,r),y={x:i,y:s},x=await qo(r,h),b=Cr(zn(l)),v=id(b);let S=y[v],E=y[b];if(u){const C=v==="y"?"top":"left",T=v==="y"?"bottom":"right",N=S+x[C],j=S-x[T];S=Mu(N,S,j)}if(f){const C=b==="y"?"top":"left",T=b==="y"?"bottom":"right",N=E+x[C],j=E-x[T];E=Mu(N,E,j)}const k=m.fn({...r,[v]:S,[b]:E});return{...k,data:{x:k.x-i,y:k.y-s,enabled:{[v]:u,[b]:f}}}}}},W1=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:i,y:s,placement:l,rects:u,middlewareData:f}=r,{offset:m=0,mainAxis:h=!0,crossAxis:y=!0}=_n(n,r),x={x:i,y:s},b=Cr(l),v=id(b);let S=x[v],E=x[b];const k=_n(m,r),C=typeof k=="number"?{mainAxis:k,crossAxis:0}:{mainAxis:0,crossAxis:0,...k};if(h){const j=v==="y"?"height":"width",L=u.reference[v]-u.floating[j]+C.mainAxis,$=u.reference[v]+u.reference[j]-C.mainAxis;S<L?S=L:S>$&&(S=$)}if(y){var T,N;const j=v==="y"?"width":"height",L=["top","left"].includes(zn(l)),$=u.reference[b]-u.floating[j]+(L&&((T=f.offset)==null?void 0:T[b])||0)+(L?0:C.crossAxis),H=u.reference[b]+u.reference[j]+(L?0:((N=f.offset)==null?void 0:N[b])||0)-(L?C.crossAxis:0);E<$?E=$:E>H&&(E=H)}return{[v]:S,[b]:E}}}},U1=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var i,s;const{placement:l,rects:u,platform:f,elements:m}=r,{apply:h=()=>{},...y}=_n(n,r),x=await qo(r,y),b=zn(l),v=Gi(l),S=Cr(l)==="y",{width:E,height:k}=u.floating;let C,T;b==="top"||b==="bottom"?(C=b,T=v===(await(f.isRTL==null?void 0:f.isRTL(m.floating))?"start":"end")?"left":"right"):(T=b,C=v==="end"?"top":"bottom");const N=k-x.top-x.bottom,j=E-x.left-x.right,L=kr(k-x[C],N),$=kr(E-x[T],j),H=!r.middlewareData.shift;let z=L,Y=$;if((i=r.middlewareData.shift)!=null&&i.enabled.x&&(Y=j),(s=r.middlewareData.shift)!=null&&s.enabled.y&&(z=N),H&&!v){const G=Dt(x.left,0),re=Dt(x.right,0),te=Dt(x.top,0),oe=Dt(x.bottom,0);S?Y=E-2*(G!==0||re!==0?G+re:Dt(x.left,x.right)):z=k-2*(te!==0||oe!==0?te+oe:Dt(x.top,x.bottom))}await h({...r,availableWidth:Y,availableHeight:z});const q=await f.getDimensions(m.floating);return E!==q.width||k!==q.height?{reset:{rects:!0}}:{}}}};function Ja(){return typeof window<"u"}function Qi(n){return Ig(n)?(n.nodeName||"").toLowerCase():"#document"}function Ft(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function kn(n){var r;return(r=(Ig(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Ig(n){return Ja()?n instanceof Node||n instanceof Ft(n).Node:!1}function an(n){return Ja()?n instanceof Element||n instanceof Ft(n).Element:!1}function wn(n){return Ja()?n instanceof HTMLElement||n instanceof Ft(n).HTMLElement:!1}function Bp(n){return!Ja()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ft(n).ShadowRoot}function ns(n){const{overflow:r,overflowX:i,overflowY:s,display:l}=ln(n);return/auto|scroll|overlay|hidden|clip/.test(r+s+i)&&!["inline","contents"].includes(l)}function q1(n){return["table","td","th"].includes(Qi(n))}function Za(n){return[":popover-open",":modal"].some(r=>{try{return n.matches(r)}catch{return!1}})}function ad(n){const r=ld(),i=an(n)?ln(n):n;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!r&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!r&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function V1(n){let r=Er(n);for(;wn(r)&&!Hi(r);){if(ad(r))return r;if(Za(r))return null;r=Er(r)}return null}function ld(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Hi(n){return["html","body","#document"].includes(Qi(n))}function ln(n){return Ft(n).getComputedStyle(n)}function el(n){return an(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Er(n){if(Qi(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Bp(n)&&n.host||kn(n);return Bp(r)?r.host:r}function jg(n){const r=Er(n);return Hi(r)?n.ownerDocument?n.ownerDocument.body:n.body:wn(r)&&ns(r)?r:jg(r)}function Vo(n,r,i){var s;r===void 0&&(r=[]),i===void 0&&(i=!0);const l=jg(n),u=l===((s=n.ownerDocument)==null?void 0:s.body),f=Ft(l);if(u){const m=Du(f);return r.concat(f,f.visualViewport||[],ns(l)?l:[],m&&i?Vo(m):[])}return r.concat(l,Vo(l,[],i))}function Du(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Mg(n){const r=ln(n);let i=parseFloat(r.width)||0,s=parseFloat(r.height)||0;const l=wn(n),u=l?n.offsetWidth:i,f=l?n.offsetHeight:s,m=La(i)!==u||La(s)!==f;return m&&(i=u,s=f),{width:i,height:s,$:m}}function cd(n){return an(n)?n:n.contextElement}function Ai(n){const r=cd(n);if(!wn(r))return Sr(1);const i=r.getBoundingClientRect(),{width:s,height:l,$:u}=Mg(r);let f=(u?La(i.width):i.width)/s,m=(u?La(i.height):i.height)/l;return(!f||!Number.isFinite(f))&&(f=1),(!m||!Number.isFinite(m))&&(m=1),{x:f,y:m}}const Y1=Sr(0);function Lg(n){const r=Ft(n);return!ld()||!r.visualViewport?Y1:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function G1(n,r,i){return r===void 0&&(r=!1),!i||r&&i!==Ft(n)?!1:r}function Jr(n,r,i,s){r===void 0&&(r=!1),i===void 0&&(i=!1);const l=n.getBoundingClientRect(),u=cd(n);let f=Sr(1);r&&(s?an(s)&&(f=Ai(s)):f=Ai(n));const m=G1(u,i,s)?Lg(u):Sr(0);let h=(l.left+m.x)/f.x,y=(l.top+m.y)/f.y,x=l.width/f.x,b=l.height/f.y;if(u){const v=Ft(u),S=s&&an(s)?Ft(s):s;let E=v,k=Du(E);for(;k&&s&&S!==E;){const C=Ai(k),T=k.getBoundingClientRect(),N=ln(k),j=T.left+(k.clientLeft+parseFloat(N.paddingLeft))*C.x,L=T.top+(k.clientTop+parseFloat(N.paddingTop))*C.y;h*=C.x,y*=C.y,x*=C.x,b*=C.y,h+=j,y+=L,E=Ft(k),k=Du(E)}}return Oa({width:x,height:b,x:h,y})}function Q1(n){let{elements:r,rect:i,offsetParent:s,strategy:l}=n;const u=l==="fixed",f=kn(s),m=r?Za(r.floating):!1;if(s===f||m&&u)return i;let h={scrollLeft:0,scrollTop:0},y=Sr(1);const x=Sr(0),b=wn(s);if((b||!b&&!u)&&((Qi(s)!=="body"||ns(f))&&(h=el(s)),wn(s))){const v=Jr(s);y=Ai(s),x.x=v.x+s.clientLeft,x.y=v.y+s.clientTop}return{width:i.width*y.x,height:i.height*y.y,x:i.x*y.x-h.scrollLeft*y.x+x.x,y:i.y*y.y-h.scrollTop*y.y+x.y}}function K1(n){return Array.from(n.getClientRects())}function Ou(n,r){const i=el(n).scrollLeft;return r?r.left+i:Jr(kn(n)).left+i}function X1(n){const r=kn(n),i=el(n),s=n.ownerDocument.body,l=Dt(r.scrollWidth,r.clientWidth,s.scrollWidth,s.clientWidth),u=Dt(r.scrollHeight,r.clientHeight,s.scrollHeight,s.clientHeight);let f=-i.scrollLeft+Ou(n);const m=-i.scrollTop;return ln(s).direction==="rtl"&&(f+=Dt(r.clientWidth,s.clientWidth)-l),{width:l,height:u,x:f,y:m}}function J1(n,r){const i=Ft(n),s=kn(n),l=i.visualViewport;let u=s.clientWidth,f=s.clientHeight,m=0,h=0;if(l){u=l.width,f=l.height;const y=ld();(!y||y&&r==="fixed")&&(m=l.offsetLeft,h=l.offsetTop)}return{width:u,height:f,x:m,y:h}}function Z1(n,r){const i=Jr(n,!0,r==="fixed"),s=i.top+n.clientTop,l=i.left+n.clientLeft,u=wn(n)?Ai(n):Sr(1),f=n.clientWidth*u.x,m=n.clientHeight*u.y,h=l*u.x,y=s*u.y;return{width:f,height:m,x:h,y}}function Hp(n,r,i){let s;if(r==="viewport")s=J1(n,i);else if(r==="document")s=X1(kn(n));else if(an(r))s=Z1(r,i);else{const l=Lg(n);s={...r,x:r.x-l.x,y:r.y-l.y}}return Oa(s)}function Dg(n,r){const i=Er(n);return i===r||!an(i)||Hi(i)?!1:ln(i).position==="fixed"||Dg(i,r)}function ek(n,r){const i=r.get(n);if(i)return i;let s=Vo(n,[],!1).filter(m=>an(m)&&Qi(m)!=="body"),l=null;const u=ln(n).position==="fixed";let f=u?Er(n):n;for(;an(f)&&!Hi(f);){const m=ln(f),h=ad(f);!h&&m.position==="fixed"&&(l=null),(u?!h&&!l:!h&&m.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||ns(f)&&!h&&Dg(n,f))?s=s.filter(x=>x!==f):l=m,f=Er(f)}return r.set(n,s),s}function tk(n){let{element:r,boundary:i,rootBoundary:s,strategy:l}=n;const f=[...i==="clippingAncestors"?Za(r)?[]:ek(r,this._c):[].concat(i),s],m=f[0],h=f.reduce((y,x)=>{const b=Hp(r,x,l);return y.top=Dt(b.top,y.top),y.right=kr(b.right,y.right),y.bottom=kr(b.bottom,y.bottom),y.left=Dt(b.left,y.left),y},Hp(r,m,l));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function nk(n){const{width:r,height:i}=Mg(n);return{width:r,height:i}}function rk(n,r,i){const s=wn(r),l=kn(r),u=i==="fixed",f=Jr(n,!0,u,r);let m={scrollLeft:0,scrollTop:0};const h=Sr(0);if(s||!s&&!u)if((Qi(r)!=="body"||ns(l))&&(m=el(r)),s){const S=Jr(r,!0,u,r);h.x=S.x+r.clientLeft,h.y=S.y+r.clientTop}else l&&(h.x=Ou(l));let y=0,x=0;if(l&&!s&&!u){const S=l.getBoundingClientRect();x=S.top+m.scrollTop,y=S.left+m.scrollLeft-Ou(l,S)}const b=f.left+m.scrollLeft-h.x-y,v=f.top+m.scrollTop-h.y-x;return{x:b,y:v,width:f.width,height:f.height}}function du(n){return ln(n).position==="static"}function Wp(n,r){if(!wn(n)||ln(n).position==="fixed")return null;if(r)return r(n);let i=n.offsetParent;return kn(n)===i&&(i=i.ownerDocument.body),i}function Og(n,r){const i=Ft(n);if(Za(n))return i;if(!wn(n)){let l=Er(n);for(;l&&!Hi(l);){if(an(l)&&!du(l))return l;l=Er(l)}return i}let s=Wp(n,r);for(;s&&q1(s)&&du(s);)s=Wp(s,r);return s&&Hi(s)&&du(s)&&!ad(s)?i:s||V1(n)||i}const ik=async function(n){const r=this.getOffsetParent||Og,i=this.getDimensions,s=await i(n.floating);return{reference:rk(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function ok(n){return ln(n).direction==="rtl"}const sk={convertOffsetParentRelativeRectToViewportRelativeRect:Q1,getDocumentElement:kn,getClippingRect:tk,getOffsetParent:Og,getElementRects:ik,getClientRects:K1,getDimensions:nk,getScale:Ai,isElement:an,isRTL:ok};function ak(n,r){let i=null,s;const l=kn(n);function u(){var m;clearTimeout(s),(m=i)==null||m.disconnect(),i=null}function f(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),u();const{left:y,top:x,width:b,height:v}=n.getBoundingClientRect();if(m||r(),!b||!v)return;const S=xa(x),E=xa(l.clientWidth-(y+b)),k=xa(l.clientHeight-(x+v)),C=xa(y),N={rootMargin:-S+"px "+-E+"px "+-k+"px "+-C+"px",threshold:Dt(0,kr(1,h))||1};let j=!0;function L($){const H=$[0].intersectionRatio;if(H!==h){if(!j)return f();H?f(!1,H):s=setTimeout(()=>{f(!1,1e-7)},1e3)}j=!1}try{i=new IntersectionObserver(L,{...N,root:l.ownerDocument})}catch{i=new IntersectionObserver(L,N)}i.observe(n)}return f(!0),u}function lk(n,r,i,s){s===void 0&&(s={});const{ancestorScroll:l=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=s,y=cd(n),x=l||u?[...y?Vo(y):[],...Vo(r)]:[];x.forEach(T=>{l&&T.addEventListener("scroll",i,{passive:!0}),u&&T.addEventListener("resize",i)});const b=y&&m?ak(y,i):null;let v=-1,S=null;f&&(S=new ResizeObserver(T=>{let[N]=T;N&&N.target===y&&S&&(S.unobserve(r),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var j;(j=S)==null||j.observe(r)})),i()}),y&&!h&&S.observe(y),S.observe(r));let E,k=h?Jr(n):null;h&&C();function C(){const T=Jr(n);k&&(T.x!==k.x||T.y!==k.y||T.width!==k.width||T.height!==k.height)&&i(),k=T,E=requestAnimationFrame(C)}return i(),()=>{var T;x.forEach(N=>{l&&N.removeEventListener("scroll",i),u&&N.removeEventListener("resize",i)}),b==null||b(),(T=S)==null||T.disconnect(),S=null,h&&cancelAnimationFrame(E)}}const ck=B1,uk=H1,dk=$1,fk=U1,mk=_1,Up=F1,pk=W1,hk=(n,r,i)=>{const s=new Map,l={platform:sk,...i},u={...l.platform,_c:s};return O1(n,r,{...l,platform:u})};var Na=typeof document<"u"?g.useLayoutEffect:g.useEffect;function Fa(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let i,s,l;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(i=n.length,i!==r.length)return!1;for(s=i;s--!==0;)if(!Fa(n[s],r[s]))return!1;return!0}if(l=Object.keys(n),i=l.length,i!==Object.keys(r).length)return!1;for(s=i;s--!==0;)if(!{}.hasOwnProperty.call(r,l[s]))return!1;for(s=i;s--!==0;){const u=l[s];if(!(u==="_owner"&&n.$$typeof)&&!Fa(n[u],r[u]))return!1}return!0}return n!==n&&r!==r}function Fg(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function qp(n,r){const i=Fg(n);return Math.round(r*i)/i}function fu(n){const r=g.useRef(n);return Na(()=>{r.current=n}),r}function gk(n){n===void 0&&(n={});const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:l,elements:{reference:u,floating:f}={},transform:m=!0,whileElementsMounted:h,open:y}=n,[x,b]=g.useState({x:0,y:0,strategy:i,placement:r,middlewareData:{},isPositioned:!1}),[v,S]=g.useState(s);Fa(v,s)||S(s);const[E,k]=g.useState(null),[C,T]=g.useState(null),N=g.useCallback(F=>{F!==H.current&&(H.current=F,k(F))},[]),j=g.useCallback(F=>{F!==z.current&&(z.current=F,T(F))},[]),L=u||E,$=f||C,H=g.useRef(null),z=g.useRef(null),Y=g.useRef(x),q=h!=null,G=fu(h),re=fu(l),te=fu(y),oe=g.useCallback(()=>{if(!H.current||!z.current)return;const F={placement:r,strategy:i,middleware:v};re.current&&(F.platform=re.current),hk(H.current,z.current,F).then(Q=>{const X={...Q,isPositioned:te.current!==!1};J.current&&!Fa(Y.current,X)&&(Y.current=X,Zo.flushSync(()=>{b(X)}))})},[v,r,i,re,te]);Na(()=>{y===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,b(F=>({...F,isPositioned:!1})))},[y]);const J=g.useRef(!1);Na(()=>(J.current=!0,()=>{J.current=!1}),[]),Na(()=>{if(L&&(H.current=L),$&&(z.current=$),L&&$){if(G.current)return G.current(L,$,oe);oe()}},[L,$,oe,G,q]);const he=g.useMemo(()=>({reference:H,floating:z,setReference:N,setFloating:j}),[N,j]),ce=g.useMemo(()=>({reference:L,floating:$}),[L,$]),ae=g.useMemo(()=>{const F={position:i,left:0,top:0};if(!ce.floating)return F;const Q=qp(ce.floating,x.x),X=qp(ce.floating,x.y);return m?{...F,transform:"translate("+Q+"px, "+X+"px)",...Fg(ce.floating)>=1.5&&{willChange:"transform"}}:{position:i,left:Q,top:X}},[i,m,ce.floating,x.x,x.y]);return g.useMemo(()=>({...x,update:oe,refs:he,elements:ce,floatingStyles:ae}),[x,oe,he,ce,ae])}const yk=n=>{function r(i){return{}.hasOwnProperty.call(i,"current")}return{name:"arrow",options:n,fn(i){const{element:s,padding:l}=typeof n=="function"?n(i):n;return s&&r(s)?s.current!=null?Up({element:s.current,padding:l}).fn(i):{}:s?Up({element:s,padding:l}).fn(i):{}}}},vk=(n,r)=>({...ck(n),options:[n,r]}),xk=(n,r)=>({...uk(n),options:[n,r]}),wk=(n,r)=>({...pk(n),options:[n,r]}),bk=(n,r)=>({...dk(n),options:[n,r]}),kk=(n,r)=>({...fk(n),options:[n,r]}),Sk=(n,r)=>({...mk(n),options:[n,r]}),Ck=(n,r)=>({...yk(n),options:[n,r]});var Ek="Arrow",$g=g.forwardRef((n,r)=>{const{children:i,width:s=10,height:l=5,...u}=n;return c.jsx(je.svg,{...u,ref:r,width:s,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?i:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});$g.displayName=Ek;var Rk=$g;function Pk(n){const[r,i]=g.useState(void 0);return Rt(()=>{if(n){i({width:n.offsetWidth,height:n.offsetHeight});const s=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const u=l[0];let f,m;if("borderBoxSize"in u){const h=u.borderBoxSize,y=Array.isArray(h)?h[0]:h;f=y.inlineSize,m=y.blockSize}else f=n.offsetWidth,m=n.offsetHeight;i({width:f,height:m})});return s.observe(n,{box:"border-box"}),()=>s.unobserve(n)}else i(void 0)},[n]),r}var _g="Popper",[zg,Bg]=es(_g),[XR,Hg]=zg(_g),Wg="PopperAnchor",Ug=g.forwardRef((n,r)=>{const{__scopePopper:i,virtualRef:s,...l}=n,u=Hg(Wg,i),f=g.useRef(null),m=Be(r,f);return g.useEffect(()=>{u.onAnchorChange((s==null?void 0:s.current)||f.current)}),s?null:c.jsx(je.div,{...l,ref:m})});Ug.displayName=Wg;var ud="PopperContent",[Tk,Ak]=zg(ud),qg=g.forwardRef((n,r)=>{var Re,Se,Pe,qe,Cn,En;const{__scopePopper:i,side:s="bottom",sideOffset:l=0,align:u="center",alignOffset:f=0,arrowPadding:m=0,avoidCollisions:h=!0,collisionBoundary:y=[],collisionPadding:x=0,sticky:b="partial",hideWhenDetached:v=!1,updatePositionStrategy:S="optimized",onPlaced:E,...k}=n,C=Hg(ud,i),[T,N]=g.useState(null),j=Be(r,$t=>N($t)),[L,$]=g.useState(null),H=Pk(L),z=(H==null?void 0:H.width)??0,Y=(H==null?void 0:H.height)??0,q=s+(u!=="center"?"-"+u:""),G=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},re=Array.isArray(y)?y:[y],te=re.length>0,oe={padding:G,boundary:re.filter(Ik),altBoundary:te},{refs:J,floatingStyles:he,placement:ce,isPositioned:ae,middlewareData:F}=gk({strategy:"fixed",placement:q,whileElementsMounted:(...$t)=>lk(...$t,{animationFrame:S==="always"}),elements:{reference:C.anchor},middleware:[vk({mainAxis:l+Y,alignmentAxis:f}),h&&xk({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?wk():void 0,...oe}),h&&bk({...oe}),kk({...oe,apply:({elements:$t,rects:Rn,availableWidth:Ar,availableHeight:Qt})=>{const{width:Nr,height:ei}=Rn.reference,Ge=$t.floating.style;Ge.setProperty("--radix-popper-available-width",`${Ar}px`),Ge.setProperty("--radix-popper-available-height",`${Qt}px`),Ge.setProperty("--radix-popper-anchor-width",`${Nr}px`),Ge.setProperty("--radix-popper-anchor-height",`${ei}px`)}}),L&&Ck({element:L,padding:m}),jk({arrowWidth:z,arrowHeight:Y}),v&&Sk({strategy:"referenceHidden",...oe})]}),[Q,X]=Gg(ce),P=Xe(E);Rt(()=>{ae&&(P==null||P())},[ae,P]);const _=(Re=F.arrow)==null?void 0:Re.x,ee=(Se=F.arrow)==null?void 0:Se.y,de=((Pe=F.arrow)==null?void 0:Pe.centerOffset)!==0,[xe,fe]=g.useState();return Rt(()=>{T&&fe(window.getComputedStyle(T).zIndex)},[T]),c.jsx("div",{ref:J.setFloating,"data-radix-popper-content-wrapper":"",style:{...he,transform:ae?he.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:xe,"--radix-popper-transform-origin":[(qe=F.transformOrigin)==null?void 0:qe.x,(Cn=F.transformOrigin)==null?void 0:Cn.y].join(" "),...((En=F.hide)==null?void 0:En.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:c.jsx(Tk,{scope:i,placedSide:Q,onArrowChange:$,arrowX:_,arrowY:ee,shouldHideArrow:de,children:c.jsx(je.div,{"data-side":Q,"data-align":X,...k,ref:j,style:{...k.style,animation:ae?void 0:"none"}})})})});qg.displayName=ud;var Vg="PopperArrow",Nk={top:"bottom",right:"left",bottom:"top",left:"right"},Yg=g.forwardRef(function(r,i){const{__scopePopper:s,...l}=r,u=Ak(Vg,s),f=Nk[u.placedSide];return c.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:c.jsx(Rk,{...l,ref:i,style:{...l.style,display:"block"}})})});Yg.displayName=Vg;function Ik(n){return n!==null}var jk=n=>({name:"transformOrigin",options:n,fn(r){var C,T,N;const{placement:i,rects:s,middlewareData:l}=r,f=((C=l.arrow)==null?void 0:C.centerOffset)!==0,m=f?0:n.arrowWidth,h=f?0:n.arrowHeight,[y,x]=Gg(i),b={start:"0%",center:"50%",end:"100%"}[x],v=(((T=l.arrow)==null?void 0:T.x)??0)+m/2,S=(((N=l.arrow)==null?void 0:N.y)??0)+h/2;let E="",k="";return y==="bottom"?(E=f?b:`${v}px`,k=`${-h}px`):y==="top"?(E=f?b:`${v}px`,k=`${s.floating.height+h}px`):y==="right"?(E=`${-h}px`,k=f?b:`${S}px`):y==="left"&&(E=`${s.floating.width+h}px`,k=f?b:`${S}px`),{data:{x:E,y:k}}}});function Gg(n){const[r,i="center"]=n.split("-");return[r,i]}var Mk=Ug,Lk=qg,Dk=Yg,Ok="Portal",Qg=g.forwardRef((n,r)=>{var m;const{container:i,...s}=n,[l,u]=g.useState(!1);Rt(()=>u(!0),[]);const f=i||l&&((m=globalThis==null?void 0:globalThis.document)==null?void 0:m.body);return f?Gu.createPortal(c.jsx(je.div,{...s,ref:r}),f):null});Qg.displayName=Ok;function Fk(n,r){return g.useReducer((i,s)=>r[i][s]??i,n)}var Kg=n=>{const{present:r,children:i}=n,s=$k(r),l=typeof i=="function"?i({present:s.isPresent}):g.Children.only(i),u=Be(s.ref,_k(l));return typeof i=="function"||s.isPresent?g.cloneElement(l,{ref:u}):null};Kg.displayName="Presence";function $k(n){const[r,i]=g.useState(),s=g.useRef({}),l=g.useRef(n),u=g.useRef("none"),f=n?"mounted":"unmounted",[m,h]=Fk(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const y=wa(s.current);u.current=m==="mounted"?y:"none"},[m]),Rt(()=>{const y=s.current,x=l.current;if(x!==n){const v=u.current,S=wa(y);n?h("MOUNT"):S==="none"||(y==null?void 0:y.display)==="none"?h("UNMOUNT"):h(x&&v!==S?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),Rt(()=>{if(r){let y;const x=r.ownerDocument.defaultView??window,b=S=>{const k=wa(s.current).includes(S.animationName);if(S.target===r&&k&&(h("ANIMATION_END"),!l.current)){const C=r.style.animationFillMode;r.style.animationFillMode="forwards",y=x.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=C)})}},v=S=>{S.target===r&&(u.current=wa(s.current))};return r.addEventListener("animationstart",v),r.addEventListener("animationcancel",b),r.addEventListener("animationend",b),()=>{x.clearTimeout(y),r.removeEventListener("animationstart",v),r.removeEventListener("animationcancel",b),r.removeEventListener("animationend",b)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:g.useCallback(y=>{y&&(s.current=getComputedStyle(y)),i(y)},[])}}function wa(n){return(n==null?void 0:n.animationName)||"none"}function _k(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}var[tl,JR]=y1("Tooltip",[Bg]),dd=Bg(),Xg="TooltipProvider",zk=700,Vp="tooltip.open",[Bk,Jg]=tl(Xg),Zg=n=>{const{__scopeTooltip:r,delayDuration:i=zk,skipDelayDuration:s=300,disableHoverableContent:l=!1,children:u}=n,[f,m]=g.useState(!0),h=g.useRef(!1),y=g.useRef(0);return g.useEffect(()=>{const x=y.current;return()=>window.clearTimeout(x)},[]),c.jsx(Bk,{scope:r,isOpenDelayed:f,delayDuration:i,onOpen:g.useCallback(()=>{window.clearTimeout(y.current),m(!1)},[]),onClose:g.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>m(!0),s)},[s]),isPointerInTransitRef:h,onPointerInTransitChange:g.useCallback(x=>{h.current=x},[]),disableHoverableContent:l,children:u})};Zg.displayName=Xg;var ey="Tooltip",[ZR,nl]=tl(ey),Fu="TooltipTrigger",Hk=g.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,l=nl(Fu,i),u=Jg(Fu,i),f=dd(i),m=g.useRef(null),h=Be(r,m,l.onTriggerChange),y=g.useRef(!1),x=g.useRef(!1),b=g.useCallback(()=>y.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",b),[b]),c.jsx(Mk,{asChild:!0,...f,children:c.jsx(je.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...s,ref:h,onPointerMove:Ee(n.onPointerMove,v=>{v.pointerType!=="touch"&&!x.current&&!u.isPointerInTransitRef.current&&(l.onTriggerEnter(),x.current=!0)}),onPointerLeave:Ee(n.onPointerLeave,()=>{l.onTriggerLeave(),x.current=!1}),onPointerDown:Ee(n.onPointerDown,()=>{y.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:Ee(n.onFocus,()=>{y.current||l.onOpen()}),onBlur:Ee(n.onBlur,l.onClose),onClick:Ee(n.onClick,l.onClose)})})});Hk.displayName=Fu;var Wk="TooltipPortal",[e2,Uk]=tl(Wk,{forceMount:void 0}),Wi="TooltipContent",ty=g.forwardRef((n,r)=>{const i=Uk(Wi,n.__scopeTooltip),{forceMount:s=i.forceMount,side:l="top",...u}=n,f=nl(Wi,n.__scopeTooltip);return c.jsx(Kg,{present:s||f.open,children:f.disableHoverableContent?c.jsx(ny,{side:l,...u,ref:r}):c.jsx(qk,{side:l,...u,ref:r})})}),qk=g.forwardRef((n,r)=>{const i=nl(Wi,n.__scopeTooltip),s=Jg(Wi,n.__scopeTooltip),l=g.useRef(null),u=Be(r,l),[f,m]=g.useState(null),{trigger:h,onClose:y}=i,x=l.current,{onPointerInTransitChange:b}=s,v=g.useCallback(()=>{m(null),b(!1)},[b]),S=g.useCallback((E,k)=>{const C=E.currentTarget,T={x:E.clientX,y:E.clientY},N=Qk(T,C.getBoundingClientRect()),j=Kk(T,N),L=Xk(k.getBoundingClientRect()),$=Zk([...j,...L]);m($),b(!0)},[b]);return g.useEffect(()=>()=>v(),[v]),g.useEffect(()=>{if(h&&x){const E=C=>S(C,x),k=C=>S(C,h);return h.addEventListener("pointerleave",E),x.addEventListener("pointerleave",k),()=>{h.removeEventListener("pointerleave",E),x.removeEventListener("pointerleave",k)}}},[h,x,S,v]),g.useEffect(()=>{if(f){const E=k=>{const C=k.target,T={x:k.clientX,y:k.clientY},N=(h==null?void 0:h.contains(C))||(x==null?void 0:x.contains(C)),j=!Jk(T,f);N?v():j&&(v(),y())};return document.addEventListener("pointermove",E),()=>document.removeEventListener("pointermove",E)}},[h,x,f,y,v]),c.jsx(ny,{...n,ref:u})}),[Vk,Yk]=tl(ey,{isInside:!1}),ny=g.forwardRef((n,r)=>{const{__scopeTooltip:i,children:s,"aria-label":l,onEscapeKeyDown:u,onPointerDownOutside:f,...m}=n,h=nl(Wi,i),y=dd(i),{onClose:x}=h;return g.useEffect(()=>(document.addEventListener(Vp,x),()=>document.removeEventListener(Vp,x)),[x]),g.useEffect(()=>{if(h.trigger){const b=v=>{const S=v.target;S!=null&&S.contains(h.trigger)&&x()};return window.addEventListener("scroll",b,{capture:!0}),()=>window.removeEventListener("scroll",b,{capture:!0})}},[h.trigger,x]),c.jsx(rd,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:b=>b.preventDefault(),onDismiss:x,children:c.jsxs(Lk,{"data-state":h.stateAttribute,...y,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(_h,{children:s}),c.jsx(Vk,{scope:i,isInside:!0,children:c.jsx(hw,{id:h.contentId,role:"tooltip",children:l||s})})]})})});ty.displayName=Wi;var ry="TooltipArrow",Gk=g.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,l=dd(i);return Yk(ry,i).isInside?null:c.jsx(Dk,{...l,...s,ref:r})});Gk.displayName=ry;function Qk(n,r){const i=Math.abs(r.top-n.y),s=Math.abs(r.bottom-n.y),l=Math.abs(r.right-n.x),u=Math.abs(r.left-n.x);switch(Math.min(i,s,l,u)){case u:return"left";case l:return"right";case i:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function Kk(n,r,i=5){const s=[];switch(r){case"top":s.push({x:n.x-i,y:n.y+i},{x:n.x+i,y:n.y+i});break;case"bottom":s.push({x:n.x-i,y:n.y-i},{x:n.x+i,y:n.y-i});break;case"left":s.push({x:n.x+i,y:n.y-i},{x:n.x+i,y:n.y+i});break;case"right":s.push({x:n.x-i,y:n.y-i},{x:n.x-i,y:n.y+i});break}return s}function Xk(n){const{top:r,right:i,bottom:s,left:l}=n;return[{x:l,y:r},{x:i,y:r},{x:i,y:s},{x:l,y:s}]}function Jk(n,r){const{x:i,y:s}=n;let l=!1;for(let u=0,f=r.length-1;u<r.length;f=u++){const m=r[u].x,h=r[u].y,y=r[f].x,x=r[f].y;h>s!=x>s&&i<(y-m)*(s-h)/(x-h)+m&&(l=!l)}return l}function Zk(n){const r=n.slice();return r.sort((i,s)=>i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0),eS(r)}function eS(n){if(n.length<=1)return n.slice();const r=[];for(let s=0;s<n.length;s++){const l=n[s];for(;r.length>=2;){const u=r[r.length-1],f=r[r.length-2];if((u.x-f.x)*(l.y-f.y)>=(u.y-f.y)*(l.x-f.x))r.pop();else break}r.push(l)}r.pop();const i=[];for(let s=n.length-1;s>=0;s--){const l=n[s];for(;i.length>=2;){const u=i[i.length-1],f=i[i.length-2];if((u.x-f.x)*(l.y-f.y)>=(u.y-f.y)*(l.x-f.x))i.pop();else break}i.push(l)}return i.pop(),r.length===1&&i.length===1&&r[0].x===i[0].x&&r[0].y===i[0].y?r:r.concat(i)}var tS=Zg,iy=ty;const nS=tS,rS=g.forwardRef(({className:n,sideOffset:r=4,...i},s)=>c.jsx(iy,{ref:s,sideOffset:r,className:ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i}));rS.displayName=iy.displayName;var rl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},il=typeof window>"u"||"Deno"in globalThis;function on(){}function iS(n,r){return typeof n=="function"?n(r):n}function oS(n){return typeof n=="number"&&n>=0&&n!==1/0}function sS(n,r){return Math.max(n+(r||0)-Date.now(),0)}function Yp(n,r){return typeof n=="function"?n(r):n}function aS(n,r){return typeof n=="function"?n(r):n}function Gp(n,r){const{type:i="all",exact:s,fetchStatus:l,predicate:u,queryKey:f,stale:m}=n;if(f){if(s){if(r.queryHash!==fd(f,r.options))return!1}else if(!Go(r.queryKey,f))return!1}if(i!=="all"){const h=r.isActive();if(i==="active"&&!h||i==="inactive"&&h)return!1}return!(typeof m=="boolean"&&r.isStale()!==m||l&&l!==r.state.fetchStatus||u&&!u(r))}function Qp(n,r){const{exact:i,status:s,predicate:l,mutationKey:u}=n;if(u){if(!r.options.mutationKey)return!1;if(i){if(Yo(r.options.mutationKey)!==Yo(u))return!1}else if(!Go(r.options.mutationKey,u))return!1}return!(s&&r.state.status!==s||l&&!l(r))}function fd(n,r){return((r==null?void 0:r.queryKeyHashFn)||Yo)(n)}function Yo(n){return JSON.stringify(n,(r,i)=>$u(i)?Object.keys(i).sort().reduce((s,l)=>(s[l]=i[l],s),{}):i)}function Go(n,r){return n===r?!0:typeof n!=typeof r?!1:n&&r&&typeof n=="object"&&typeof r=="object"?!Object.keys(r).some(i=>!Go(n[i],r[i])):!1}function oy(n,r){if(n===r)return n;const i=Kp(n)&&Kp(r);if(i||$u(n)&&$u(r)){const s=i?n:Object.keys(n),l=s.length,u=i?r:Object.keys(r),f=u.length,m=i?[]:{};let h=0;for(let y=0;y<f;y++){const x=i?y:u[y];(!i&&s.includes(x)||i)&&n[x]===void 0&&r[x]===void 0?(m[x]=void 0,h++):(m[x]=oy(n[x],r[x]),m[x]===n[x]&&n[x]!==void 0&&h++)}return l===f&&h===l?n:m}return r}function Kp(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function $u(n){if(!Xp(n))return!1;const r=n.constructor;if(r===void 0)return!0;const i=r.prototype;return!(!Xp(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Xp(n){return Object.prototype.toString.call(n)==="[object Object]"}function lS(n){return new Promise(r=>{setTimeout(r,n)})}function cS(n,r,i){return typeof i.structuralSharing=="function"?i.structuralSharing(n,r):i.structuralSharing!==!1?oy(n,r):r}function uS(n,r,i=0){const s=[...n,r];return i&&s.length>i?s.slice(1):s}function dS(n,r,i=0){const s=[r,...n];return i&&s.length>i?s.slice(0,-1):s}var sy=Symbol();function ay(n,r){return!n.queryFn&&(r!=null&&r.initialPromise)?()=>r.initialPromise:!n.queryFn||n.queryFn===sy?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var Gr,pr,Ii,Ph,fS=(Ph=class extends rl{constructor(){super();Ie(this,Gr);Ie(this,pr);Ie(this,Ii);ke(this,Ii,r=>{if(!il&&window.addEventListener){const i=()=>r();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){B(this,pr)||this.setEventListener(B(this,Ii))}onUnsubscribe(){var r;this.hasListeners()||((r=B(this,pr))==null||r.call(this),ke(this,pr,void 0))}setEventListener(r){var i;ke(this,Ii,r),(i=B(this,pr))==null||i.call(this),ke(this,pr,r(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()}))}setFocused(r){B(this,Gr)!==r&&(ke(this,Gr,r),this.onFocus())}onFocus(){const r=this.isFocused();this.listeners.forEach(i=>{i(r)})}isFocused(){var r;return typeof B(this,Gr)=="boolean"?B(this,Gr):((r=globalThis.document)==null?void 0:r.visibilityState)!=="hidden"}},Gr=new WeakMap,pr=new WeakMap,Ii=new WeakMap,Ph),ly=new fS,ji,hr,Mi,Th,mS=(Th=class extends rl{constructor(){super();Ie(this,ji,!0);Ie(this,hr);Ie(this,Mi);ke(this,Mi,r=>{if(!il&&window.addEventListener){const i=()=>r(!0),s=()=>r(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",s)}}})}onSubscribe(){B(this,hr)||this.setEventListener(B(this,Mi))}onUnsubscribe(){var r;this.hasListeners()||((r=B(this,hr))==null||r.call(this),ke(this,hr,void 0))}setEventListener(r){var i;ke(this,Mi,r),(i=B(this,hr))==null||i.call(this),ke(this,hr,r(this.setOnline.bind(this)))}setOnline(r){B(this,ji)!==r&&(ke(this,ji,r),this.listeners.forEach(s=>{s(r)}))}isOnline(){return B(this,ji)}},ji=new WeakMap,hr=new WeakMap,Mi=new WeakMap,Th),$a=new mS;function pS(n){return Math.min(1e3*2**n,3e4)}function cy(n){return(n??"online")==="online"?$a.isOnline():!0}var uy=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function mu(n){return n instanceof uy}function dy(n){let r=!1,i=0,s=!1,l,u,f;const m=new Promise((T,N)=>{u=T,f=N}),h=T=>{var N;s||(E(new uy(T)),(N=n.abort)==null||N.call(n))},y=()=>{r=!0},x=()=>{r=!1},b=()=>ly.isFocused()&&(n.networkMode==="always"||$a.isOnline())&&n.canRun(),v=()=>cy(n.networkMode)&&n.canRun(),S=T=>{var N;s||(s=!0,(N=n.onSuccess)==null||N.call(n,T),l==null||l(),u(T))},E=T=>{var N;s||(s=!0,(N=n.onError)==null||N.call(n,T),l==null||l(),f(T))},k=()=>new Promise(T=>{var N;l=j=>{(s||b())&&T(j)},(N=n.onPause)==null||N.call(n)}).then(()=>{var T;l=void 0,s||(T=n.onContinue)==null||T.call(n)}),C=()=>{if(s)return;let T;const N=i===0?n.initialPromise:void 0;try{T=N??n.fn()}catch(j){T=Promise.reject(j)}Promise.resolve(T).then(S).catch(j=>{var Y;if(s)return;const L=n.retry??(il?0:3),$=n.retryDelay??pS,H=typeof $=="function"?$(i,j):$,z=L===!0||typeof L=="number"&&i<L||typeof L=="function"&&L(i,j);if(r||!z){E(j);return}i++,(Y=n.onFail)==null||Y.call(n,i,j),lS(H).then(()=>b()?void 0:k()).then(()=>{r?E(j):C()})})};return{promise:m,cancel:h,continue:()=>(l==null||l(),m),cancelRetry:y,continueRetry:x,canStart:v,start:()=>(v()?C():k().then(C),m)}}function hS(){let n=[],r=0,i=m=>{m()},s=m=>{m()},l=m=>setTimeout(m,0);const u=m=>{r?n.push(m):l(()=>{i(m)})},f=()=>{const m=n;n=[],m.length&&l(()=>{s(()=>{m.forEach(h=>{i(h)})})})};return{batch:m=>{let h;r++;try{h=m()}finally{r--,r||f()}return h},batchCalls:m=>(...h)=>{u(()=>{m(...h)})},schedule:u,setNotifyFunction:m=>{i=m},setBatchNotifyFunction:m=>{s=m},setScheduler:m=>{l=m}}}var xt=hS(),Qr,Ah,fy=(Ah=class{constructor(){Ie(this,Qr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),oS(this.gcTime)&&ke(this,Qr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(il?1/0:5*60*1e3))}clearGcTimeout(){B(this,Qr)&&(clearTimeout(B(this,Qr)),ke(this,Qr,void 0))}},Qr=new WeakMap,Ah),Li,Di,Yt,ht,Xo,Kr,sn,Fn,Nh,gS=(Nh=class extends fy{constructor(r){super();Ie(this,sn);Ie(this,Li);Ie(this,Di);Ie(this,Yt);Ie(this,ht);Ie(this,Xo);Ie(this,Kr);ke(this,Kr,!1),ke(this,Xo,r.defaultOptions),this.setOptions(r.options),this.observers=[],ke(this,Yt,r.cache),this.queryKey=r.queryKey,this.queryHash=r.queryHash,ke(this,Li,vS(this.options)),this.state=r.state??B(this,Li),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var r;return(r=B(this,ht))==null?void 0:r.promise}setOptions(r){this.options={...B(this,Xo),...r},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&B(this,Yt).remove(this)}setData(r,i){const s=cS(this.state.data,r,this.options);return pt(this,sn,Fn).call(this,{data:s,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),s}setState(r,i){pt(this,sn,Fn).call(this,{type:"setState",state:r,setStateOptions:i})}cancel(r){var s,l;const i=(s=B(this,ht))==null?void 0:s.promise;return(l=B(this,ht))==null||l.cancel(r),i?i.then(on).catch(on):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(B(this,Li))}isActive(){return this.observers.some(r=>aS(r.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(r=>r.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(r=0){return this.state.isInvalidated||this.state.data===void 0||!sS(this.state.dataUpdatedAt,r)}onFocus(){var i;const r=this.observers.find(s=>s.shouldFetchOnWindowFocus());r==null||r.refetch({cancelRefetch:!1}),(i=B(this,ht))==null||i.continue()}onOnline(){var i;const r=this.observers.find(s=>s.shouldFetchOnReconnect());r==null||r.refetch({cancelRefetch:!1}),(i=B(this,ht))==null||i.continue()}addObserver(r){this.observers.includes(r)||(this.observers.push(r),this.clearGcTimeout(),B(this,Yt).notify({type:"observerAdded",query:this,observer:r}))}removeObserver(r){this.observers.includes(r)&&(this.observers=this.observers.filter(i=>i!==r),this.observers.length||(B(this,ht)&&(B(this,Kr)?B(this,ht).cancel({revert:!0}):B(this,ht).cancelRetry()),this.scheduleGc()),B(this,Yt).notify({type:"observerRemoved",query:this,observer:r}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||pt(this,sn,Fn).call(this,{type:"invalidate"})}fetch(r,i){var h,y,x;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(B(this,ht))return B(this,ht).continueRetry(),B(this,ht).promise}if(r&&this.setOptions(r),!this.options.queryFn){const b=this.observers.find(v=>v.options.queryFn);b&&this.setOptions(b.options)}const s=new AbortController,l=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(ke(this,Kr,!0),s.signal)})},u=()=>{const b=ay(this.options,i),v={queryKey:this.queryKey,meta:this.meta};return l(v),ke(this,Kr,!1),this.options.persister?this.options.persister(b,v,this):b(v)},f={fetchOptions:i,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};l(f),(h=this.options.behavior)==null||h.onFetch(f,this),ke(this,Di,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((y=f.fetchOptions)==null?void 0:y.meta))&&pt(this,sn,Fn).call(this,{type:"fetch",meta:(x=f.fetchOptions)==null?void 0:x.meta});const m=b=>{var v,S,E,k;mu(b)&&b.silent||pt(this,sn,Fn).call(this,{type:"error",error:b}),mu(b)||((S=(v=B(this,Yt).config).onError)==null||S.call(v,b,this),(k=(E=B(this,Yt).config).onSettled)==null||k.call(E,this.state.data,b,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return ke(this,ht,dy({initialPromise:i==null?void 0:i.initialPromise,fn:f.fetchFn,abort:s.abort.bind(s),onSuccess:b=>{var v,S,E,k;if(b===void 0){m(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(b)}catch(C){m(C);return}(S=(v=B(this,Yt).config).onSuccess)==null||S.call(v,b,this),(k=(E=B(this,Yt).config).onSettled)==null||k.call(E,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(b,v)=>{pt(this,sn,Fn).call(this,{type:"failed",failureCount:b,error:v})},onPause:()=>{pt(this,sn,Fn).call(this,{type:"pause"})},onContinue:()=>{pt(this,sn,Fn).call(this,{type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0})),B(this,ht).start()}},Li=new WeakMap,Di=new WeakMap,Yt=new WeakMap,ht=new WeakMap,Xo=new WeakMap,Kr=new WeakMap,sn=new WeakSet,Fn=function(r){const i=s=>{switch(r.type){case"failed":return{...s,fetchFailureCount:r.failureCount,fetchFailureReason:r.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...yS(s.data,this.options),fetchMeta:r.meta??null};case"success":return{...s,data:r.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:r.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!r.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const l=r.error;return mu(l)&&l.revert&&B(this,Di)?{...B(this,Di),fetchStatus:"idle"}:{...s,error:l,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...r.state}}};this.state=i(this.state),xt.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),B(this,Yt).notify({query:this,type:"updated",action:r})})},Nh);function yS(n,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:cy(r.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function vS(n){const r=typeof n.initialData=="function"?n.initialData():n.initialData,i=r!==void 0,s=i?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var gn,Ih,xS=(Ih=class extends rl{constructor(r={}){super();Ie(this,gn);this.config=r,ke(this,gn,new Map)}build(r,i,s){const l=i.queryKey,u=i.queryHash??fd(l,i);let f=this.get(u);return f||(f=new gS({cache:this,queryKey:l,queryHash:u,options:r.defaultQueryOptions(i),state:s,defaultOptions:r.getQueryDefaults(l)}),this.add(f)),f}add(r){B(this,gn).has(r.queryHash)||(B(this,gn).set(r.queryHash,r),this.notify({type:"added",query:r}))}remove(r){const i=B(this,gn).get(r.queryHash);i&&(r.destroy(),i===r&&B(this,gn).delete(r.queryHash),this.notify({type:"removed",query:r}))}clear(){xt.batch(()=>{this.getAll().forEach(r=>{this.remove(r)})})}get(r){return B(this,gn).get(r)}getAll(){return[...B(this,gn).values()]}find(r){const i={exact:!0,...r};return this.getAll().find(s=>Gp(i,s))}findAll(r={}){const i=this.getAll();return Object.keys(r).length>0?i.filter(s=>Gp(r,s)):i}notify(r){xt.batch(()=>{this.listeners.forEach(i=>{i(r)})})}onFocus(){xt.batch(()=>{this.getAll().forEach(r=>{r.onFocus()})})}onOnline(){xt.batch(()=>{this.getAll().forEach(r=>{r.onOnline()})})}},gn=new WeakMap,Ih),yn,vt,Xr,vn,fr,jh,wS=(jh=class extends fy{constructor(r){super();Ie(this,vn);Ie(this,yn);Ie(this,vt);Ie(this,Xr);this.mutationId=r.mutationId,ke(this,vt,r.mutationCache),ke(this,yn,[]),this.state=r.state||bS(),this.setOptions(r.options),this.scheduleGc()}setOptions(r){this.options=r,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(r){B(this,yn).includes(r)||(B(this,yn).push(r),this.clearGcTimeout(),B(this,vt).notify({type:"observerAdded",mutation:this,observer:r}))}removeObserver(r){ke(this,yn,B(this,yn).filter(i=>i!==r)),this.scheduleGc(),B(this,vt).notify({type:"observerRemoved",mutation:this,observer:r})}optionalRemove(){B(this,yn).length||(this.state.status==="pending"?this.scheduleGc():B(this,vt).remove(this))}continue(){var r;return((r=B(this,Xr))==null?void 0:r.continue())??this.execute(this.state.variables)}async execute(r){var l,u,f,m,h,y,x,b,v,S,E,k,C,T,N,j,L,$,H,z;ke(this,Xr,dy({fn:()=>this.options.mutationFn?this.options.mutationFn(r):Promise.reject(new Error("No mutationFn found")),onFail:(Y,q)=>{pt(this,vn,fr).call(this,{type:"failed",failureCount:Y,error:q})},onPause:()=>{pt(this,vn,fr).call(this,{type:"pause"})},onContinue:()=>{pt(this,vn,fr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>B(this,vt).canRun(this)}));const i=this.state.status==="pending",s=!B(this,Xr).canStart();try{if(!i){pt(this,vn,fr).call(this,{type:"pending",variables:r,isPaused:s}),await((u=(l=B(this,vt).config).onMutate)==null?void 0:u.call(l,r,this));const q=await((m=(f=this.options).onMutate)==null?void 0:m.call(f,r));q!==this.state.context&&pt(this,vn,fr).call(this,{type:"pending",context:q,variables:r,isPaused:s})}const Y=await B(this,Xr).start();return await((y=(h=B(this,vt).config).onSuccess)==null?void 0:y.call(h,Y,r,this.state.context,this)),await((b=(x=this.options).onSuccess)==null?void 0:b.call(x,Y,r,this.state.context)),await((S=(v=B(this,vt).config).onSettled)==null?void 0:S.call(v,Y,null,this.state.variables,this.state.context,this)),await((k=(E=this.options).onSettled)==null?void 0:k.call(E,Y,null,r,this.state.context)),pt(this,vn,fr).call(this,{type:"success",data:Y}),Y}catch(Y){try{throw await((T=(C=B(this,vt).config).onError)==null?void 0:T.call(C,Y,r,this.state.context,this)),await((j=(N=this.options).onError)==null?void 0:j.call(N,Y,r,this.state.context)),await(($=(L=B(this,vt).config).onSettled)==null?void 0:$.call(L,void 0,Y,this.state.variables,this.state.context,this)),await((z=(H=this.options).onSettled)==null?void 0:z.call(H,void 0,Y,r,this.state.context)),Y}finally{pt(this,vn,fr).call(this,{type:"error",error:Y})}}finally{B(this,vt).runNext(this)}}},yn=new WeakMap,vt=new WeakMap,Xr=new WeakMap,vn=new WeakSet,fr=function(r){const i=s=>{switch(r.type){case"failed":return{...s,failureCount:r.failureCount,failureReason:r.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:r.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:r.isPaused,status:"pending",variables:r.variables,submittedAt:Date.now()};case"success":return{...s,data:r.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:r.error,failureCount:s.failureCount+1,failureReason:r.error,isPaused:!1,status:"error"}}};this.state=i(this.state),xt.batch(()=>{B(this,yn).forEach(s=>{s.onMutationUpdate(r)}),B(this,vt).notify({mutation:this,type:"updated",action:r})})},jh);function bS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var It,Jo,Mh,kS=(Mh=class extends rl{constructor(r={}){super();Ie(this,It);Ie(this,Jo);this.config=r,ke(this,It,new Map),ke(this,Jo,Date.now())}build(r,i,s){const l=new wS({mutationCache:this,mutationId:++pa(this,Jo)._,options:r.defaultMutationOptions(i),state:s});return this.add(l),l}add(r){const i=ba(r),s=B(this,It).get(i)??[];s.push(r),B(this,It).set(i,s),this.notify({type:"added",mutation:r})}remove(r){var s;const i=ba(r);if(B(this,It).has(i)){const l=(s=B(this,It).get(i))==null?void 0:s.filter(u=>u!==r);l&&(l.length===0?B(this,It).delete(i):B(this,It).set(i,l))}this.notify({type:"removed",mutation:r})}canRun(r){var s;const i=(s=B(this,It).get(ba(r)))==null?void 0:s.find(l=>l.state.status==="pending");return!i||i===r}runNext(r){var s;const i=(s=B(this,It).get(ba(r)))==null?void 0:s.find(l=>l!==r&&l.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}clear(){xt.batch(()=>{this.getAll().forEach(r=>{this.remove(r)})})}getAll(){return[...B(this,It).values()].flat()}find(r){const i={exact:!0,...r};return this.getAll().find(s=>Qp(i,s))}findAll(r={}){return this.getAll().filter(i=>Qp(r,i))}notify(r){xt.batch(()=>{this.listeners.forEach(i=>{i(r)})})}resumePausedMutations(){const r=this.getAll().filter(i=>i.state.isPaused);return xt.batch(()=>Promise.all(r.map(i=>i.continue().catch(on))))}},It=new WeakMap,Jo=new WeakMap,Mh);function ba(n){var r;return((r=n.options.scope)==null?void 0:r.id)??String(n.mutationId)}function Jp(n){return{onFetch:(r,i)=>{var x,b,v,S,E;const s=r.options,l=(v=(b=(x=r.fetchOptions)==null?void 0:x.meta)==null?void 0:b.fetchMore)==null?void 0:v.direction,u=((S=r.state.data)==null?void 0:S.pages)||[],f=((E=r.state.data)==null?void 0:E.pageParams)||[];let m={pages:[],pageParams:[]},h=0;const y=async()=>{let k=!1;const C=j=>{Object.defineProperty(j,"signal",{enumerable:!0,get:()=>(r.signal.aborted?k=!0:r.signal.addEventListener("abort",()=>{k=!0}),r.signal)})},T=ay(r.options,r.fetchOptions),N=async(j,L,$)=>{if(k)return Promise.reject();if(L==null&&j.pages.length)return Promise.resolve(j);const H={queryKey:r.queryKey,pageParam:L,direction:$?"backward":"forward",meta:r.options.meta};C(H);const z=await T(H),{maxPages:Y}=r.options,q=$?dS:uS;return{pages:q(j.pages,z,Y),pageParams:q(j.pageParams,L,Y)}};if(l&&u.length){const j=l==="backward",L=j?SS:Zp,$={pages:u,pageParams:f},H=L(s,$);m=await N($,H,j)}else{const j=n??u.length;do{const L=h===0?f[0]??s.initialPageParam:Zp(s,m);if(h>0&&L==null)break;m=await N(m,L),h++}while(h<j)}return m};r.options.persister?r.fetchFn=()=>{var k,C;return(C=(k=r.options).persister)==null?void 0:C.call(k,y,{queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},i)}:r.fetchFn=y}}}function Zp(n,{pages:r,pageParams:i}){const s=r.length-1;return r.length>0?n.getNextPageParam(r[s],r,i[s],i):void 0}function SS(n,{pages:r,pageParams:i}){var s;return r.length>0?(s=n.getPreviousPageParam)==null?void 0:s.call(n,r[0],r,i[0],i):void 0}var Ye,gr,yr,Oi,Fi,vr,$i,_i,Lh,CS=(Lh=class{constructor(n={}){Ie(this,Ye);Ie(this,gr);Ie(this,yr);Ie(this,Oi);Ie(this,Fi);Ie(this,vr);Ie(this,$i);Ie(this,_i);ke(this,Ye,n.queryCache||new xS),ke(this,gr,n.mutationCache||new kS),ke(this,yr,n.defaultOptions||{}),ke(this,Oi,new Map),ke(this,Fi,new Map),ke(this,vr,0)}mount(){pa(this,vr)._++,B(this,vr)===1&&(ke(this,$i,ly.subscribe(async n=>{n&&(await this.resumePausedMutations(),B(this,Ye).onFocus())})),ke(this,_i,$a.subscribe(async n=>{n&&(await this.resumePausedMutations(),B(this,Ye).onOnline())})))}unmount(){var n,r;pa(this,vr)._--,B(this,vr)===0&&((n=B(this,$i))==null||n.call(this),ke(this,$i,void 0),(r=B(this,_i))==null||r.call(this),ke(this,_i,void 0))}isFetching(n){return B(this,Ye).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return B(this,gr).findAll({...n,status:"pending"}).length}getQueryData(n){var i;const r=this.defaultQueryOptions({queryKey:n});return(i=B(this,Ye).get(r.queryHash))==null?void 0:i.state.data}ensureQueryData(n){const r=this.getQueryData(n.queryKey);if(r===void 0)return this.fetchQuery(n);{const i=this.defaultQueryOptions(n),s=B(this,Ye).build(this,i);return n.revalidateIfStale&&s.isStaleByTime(Yp(i.staleTime,s))&&this.prefetchQuery(i),Promise.resolve(r)}}getQueriesData(n){return B(this,Ye).findAll(n).map(({queryKey:r,state:i})=>{const s=i.data;return[r,s]})}setQueryData(n,r,i){const s=this.defaultQueryOptions({queryKey:n}),l=B(this,Ye).get(s.queryHash),u=l==null?void 0:l.state.data,f=iS(r,u);if(f!==void 0)return B(this,Ye).build(this,s).setData(f,{...i,manual:!0})}setQueriesData(n,r,i){return xt.batch(()=>B(this,Ye).findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,r,i)]))}getQueryState(n){var i;const r=this.defaultQueryOptions({queryKey:n});return(i=B(this,Ye).get(r.queryHash))==null?void 0:i.state}removeQueries(n){const r=B(this,Ye);xt.batch(()=>{r.findAll(n).forEach(i=>{r.remove(i)})})}resetQueries(n,r){const i=B(this,Ye),s={type:"active",...n};return xt.batch(()=>(i.findAll(n).forEach(l=>{l.reset()}),this.refetchQueries(s,r)))}cancelQueries(n={},r={}){const i={revert:!0,...r},s=xt.batch(()=>B(this,Ye).findAll(n).map(l=>l.cancel(i)));return Promise.all(s).then(on).catch(on)}invalidateQueries(n={},r={}){return xt.batch(()=>{if(B(this,Ye).findAll(n).forEach(s=>{s.invalidate()}),n.refetchType==="none")return Promise.resolve();const i={...n,type:n.refetchType??n.type??"active"};return this.refetchQueries(i,r)})}refetchQueries(n={},r){const i={...r,cancelRefetch:(r==null?void 0:r.cancelRefetch)??!0},s=xt.batch(()=>B(this,Ye).findAll(n).filter(l=>!l.isDisabled()).map(l=>{let u=l.fetch(void 0,i);return i.throwOnError||(u=u.catch(on)),l.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(s).then(on)}fetchQuery(n){const r=this.defaultQueryOptions(n);r.retry===void 0&&(r.retry=!1);const i=B(this,Ye).build(this,r);return i.isStaleByTime(Yp(r.staleTime,i))?i.fetch(r):Promise.resolve(i.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(on).catch(on)}fetchInfiniteQuery(n){return n.behavior=Jp(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(on).catch(on)}ensureInfiniteQueryData(n){return n.behavior=Jp(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return $a.isOnline()?B(this,gr).resumePausedMutations():Promise.resolve()}getQueryCache(){return B(this,Ye)}getMutationCache(){return B(this,gr)}getDefaultOptions(){return B(this,yr)}setDefaultOptions(n){ke(this,yr,n)}setQueryDefaults(n,r){B(this,Oi).set(Yo(n),{queryKey:n,defaultOptions:r})}getQueryDefaults(n){const r=[...B(this,Oi).values()];let i={};return r.forEach(s=>{Go(n,s.queryKey)&&(i={...i,...s.defaultOptions})}),i}setMutationDefaults(n,r){B(this,Fi).set(Yo(n),{mutationKey:n,defaultOptions:r})}getMutationDefaults(n){const r=[...B(this,Fi).values()];let i={};return r.forEach(s=>{Go(n,s.mutationKey)&&(i={...i,...s.defaultOptions})}),i}defaultQueryOptions(n){if(n._defaulted)return n;const r={...B(this,yr).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return r.queryHash||(r.queryHash=fd(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.enabled!==!0&&r.queryFn===sy&&(r.enabled=!1),r}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...B(this,yr).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){B(this,Ye).clear(),B(this,gr).clear()}},Ye=new WeakMap,gr=new WeakMap,yr=new WeakMap,Oi=new WeakMap,Fi=new WeakMap,vr=new WeakMap,$i=new WeakMap,_i=new WeakMap,Lh),ES=g.createContext(void 0),RS=({client:n,children:r})=>(g.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),c.jsx(ES.Provider,{value:n,children:r}));/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Qo.apply(this,arguments)}var xr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(xr||(xr={}));const eh="popstate";function PS(n){n===void 0&&(n={});function r(s,l){let{pathname:u,search:f,hash:m}=s.location;return _u("",{pathname:u,search:f,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:_a(l)}return AS(r,i,null,n)}function Je(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function my(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function TS(){return Math.random().toString(36).substr(2,8)}function th(n,r){return{usr:n.state,key:n.key,idx:r}}function _u(n,r,i,s){return i===void 0&&(i=null),Qo({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?Ki(r):r,{state:i,key:r&&r.key||s||TS()})}function _a(n){let{pathname:r="/",search:i="",hash:s=""}=n;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function Ki(n){let r={};if(n){let i=n.indexOf("#");i>=0&&(r.hash=n.substr(i),n=n.substr(0,i));let s=n.indexOf("?");s>=0&&(r.search=n.substr(s),n=n.substr(0,s)),n&&(r.pathname=n)}return r}function AS(n,r,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,m=xr.Pop,h=null,y=x();y==null&&(y=0,f.replaceState(Qo({},f.state,{idx:y}),""));function x(){return(f.state||{idx:null}).idx}function b(){m=xr.Pop;let C=x(),T=C==null?null:C-y;y=C,h&&h({action:m,location:k.location,delta:T})}function v(C,T){m=xr.Push;let N=_u(k.location,C,T);y=x()+1;let j=th(N,y),L=k.createHref(N);try{f.pushState(j,"",L)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;l.location.assign(L)}u&&h&&h({action:m,location:k.location,delta:1})}function S(C,T){m=xr.Replace;let N=_u(k.location,C,T);y=x();let j=th(N,y),L=k.createHref(N);f.replaceState(j,"",L),u&&h&&h({action:m,location:k.location,delta:0})}function E(C){let T=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof C=="string"?C:_a(C);return N=N.replace(/ $/,"%20"),Je(T,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,T)}let k={get action(){return m},get location(){return n(l,f)},listen(C){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(eh,b),h=C,()=>{l.removeEventListener(eh,b),h=null}},createHref(C){return r(l,C)},createURL:E,encodeLocation(C){let T=E(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:v,replace:S,go(C){return f.go(C)}};return k}var nh;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(nh||(nh={}));function NS(n,r,i){return i===void 0&&(i="/"),IS(n,r,i)}function IS(n,r,i,s){let l=typeof r=="string"?Ki(r):r,u=md(l.pathname||"/",i);if(u==null)return null;let f=py(n);jS(f);let m=null;for(let h=0;m==null&&h<f.length;++h){let y=US(u);m=BS(f[h],y)}return m}function py(n,r,i,s){r===void 0&&(r=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(u,f,m)=>{let h={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(Je(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let y=br([s,h.relativePath]),x=i.concat(h);u.children&&u.children.length>0&&(Je(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),py(u.children,r,x,y)),!(u.path==null&&!u.index)&&r.push({path:y,score:_S(y,u.index),routesMeta:x})};return n.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))l(u,f);else for(let h of hy(u.path))l(u,f,h)}),r}function hy(n){let r=n.split("/");if(r.length===0)return[];let[i,...s]=r,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=hy(s.join("/")),m=[];return m.push(...f.map(h=>h===""?u:[u,h].join("/"))),l&&m.push(...f),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function jS(n){n.sort((r,i)=>r.score!==i.score?i.score-r.score:zS(r.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const MS=/^:[\w-]+$/,LS=3,DS=2,OS=1,FS=10,$S=-2,rh=n=>n==="*";function _S(n,r){let i=n.split("/"),s=i.length;return i.some(rh)&&(s+=$S),r&&(s+=DS),i.filter(l=>!rh(l)).reduce((l,u)=>l+(MS.test(u)?LS:u===""?OS:FS),s)}function zS(n,r){return n.length===r.length&&n.slice(0,-1).every((s,l)=>s===r[l])?n[n.length-1]-r[r.length-1]:0}function BS(n,r,i){let{routesMeta:s}=n,l={},u="/",f=[];for(let m=0;m<s.length;++m){let h=s[m],y=m===s.length-1,x=u==="/"?r:r.slice(u.length)||"/",b=HS({path:h.relativePath,caseSensitive:h.caseSensitive,end:y},x),v=h.route;if(!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:br([u,b.pathname]),pathnameBase:GS(br([u,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(u=br([u,b.pathnameBase]))}return f}function HS(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,s]=WS(n.path,n.caseSensitive,n.end),l=r.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((y,x,b)=>{let{paramName:v,isOptional:S}=x;if(v==="*"){let k=m[b]||"";f=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const E=m[b];return S&&!E?y[v]=void 0:y[v]=(E||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:n}}function WS(n,r,i){r===void 0&&(r=!1),i===void 0&&(i=!0),my(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h)=>(s.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),s]}function US(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return my(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function md(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,s=n.charAt(i);return s&&s!=="/"?null:n.slice(i)||"/"}function qS(n,r){r===void 0&&(r="/");let{pathname:i,search:s="",hash:l=""}=typeof n=="string"?Ki(n):n;return{pathname:i?i.startsWith("/")?i:VS(i,r):r,search:QS(s),hash:KS(l)}}function VS(n,r){let i=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function pu(n,r,i,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YS(n){return n.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function pd(n,r){let i=YS(n);return r?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function hd(n,r,i,s){s===void 0&&(s=!1);let l;typeof n=="string"?l=Ki(n):(l=Qo({},n),Je(!l.pathname||!l.pathname.includes("?"),pu("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),pu("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),pu("#","search","hash",l)));let u=n===""||l.pathname==="",f=u?"/":l.pathname,m;if(f==null)m=i;else{let b=r.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),b-=1;l.pathname=v.join("/")}m=b>=0?r[b]:"/"}let h=qS(l,m),y=f&&f!=="/"&&f.endsWith("/"),x=(u||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(y||x)&&(h.pathname+="/"),h}const br=n=>n.join("/").replace(/\/\/+/g,"/"),GS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,KS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function XS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const gy=["post","put","patch","delete"];new Set(gy);const JS=["get",...gy];new Set(JS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Ko.apply(this,arguments)}const gd=g.createContext(null),ZS=g.createContext(null),Pr=g.createContext(null),ol=g.createContext(null),Bn=g.createContext({outlet:null,matches:[],isDataRoute:!1}),yy=g.createContext(null);function eC(n,r){let{relative:i}=r===void 0?{}:r;Xi()||Je(!1);let{basename:s,navigator:l}=g.useContext(Pr),{hash:u,pathname:f,search:m}=xy(n,{relative:i}),h=f;return s!=="/"&&(h=f==="/"?s:br([s,f])),l.createHref({pathname:h,search:m,hash:u})}function Xi(){return g.useContext(ol)!=null}function Tr(){return Xi()||Je(!1),g.useContext(ol).location}function vy(n){g.useContext(Pr).static||g.useLayoutEffect(n)}function sl(){let{isDataRoute:n}=g.useContext(Bn);return n?pC():tC()}function tC(){Xi()||Je(!1);let n=g.useContext(gd),{basename:r,future:i,navigator:s}=g.useContext(Pr),{matches:l}=g.useContext(Bn),{pathname:u}=Tr(),f=JSON.stringify(pd(l,i.v7_relativeSplatPath)),m=g.useRef(!1);return vy(()=>{m.current=!0}),g.useCallback(function(y,x){if(x===void 0&&(x={}),!m.current)return;if(typeof y=="number"){s.go(y);return}let b=hd(y,JSON.parse(f),u,x.relative==="path");n==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:br([r,b.pathname])),(x.replace?s.replace:s.push)(b,x.state,x)},[r,s,f,u,n])}function nC(){let{matches:n}=g.useContext(Bn),r=n[n.length-1];return r?r.params:{}}function xy(n,r){let{relative:i}=r===void 0?{}:r,{future:s}=g.useContext(Pr),{matches:l}=g.useContext(Bn),{pathname:u}=Tr(),f=JSON.stringify(pd(l,s.v7_relativeSplatPath));return g.useMemo(()=>hd(n,JSON.parse(f),u,i==="path"),[n,f,u,i])}function rC(n,r){return iC(n,r)}function iC(n,r,i,s){Xi()||Je(!1);let{navigator:l}=g.useContext(Pr),{matches:u}=g.useContext(Bn),f=u[u.length-1],m=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let y=Tr(),x;if(r){var b;let C=typeof r=="string"?Ki(r):r;h==="/"||(b=C.pathname)!=null&&b.startsWith(h)||Je(!1),x=C}else x=y;let v=x.pathname||"/",S=v;if(h!=="/"){let C=h.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=NS(n,{pathname:S}),k=cC(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},m,C.params),pathname:br([h,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?h:br([h,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),u,i,s);return r&&k?g.createElement(ol.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:xr.Pop}},k):k}function oC(){let n=mC(),r=XS(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},r),i?g.createElement("pre",{style:l},i):null,null)}const sC=g.createElement(oC,null);class aC extends g.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?g.createElement(Bn.Provider,{value:this.props.routeContext},g.createElement(yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lC(n){let{routeContext:r,match:i,children:s}=n,l=g.useContext(gd);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),g.createElement(Bn.Provider,{value:r},s)}function cC(n,r,i,s){var l;if(r===void 0&&(r=[]),i===void 0&&(i=null),s===void 0&&(s=null),n==null){var u;if(!i)return null;if(i.errors)n=i.matches;else if((u=s)!=null&&u.v7_partialHydration&&r.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let f=n,m=(l=i)==null?void 0:l.errors;if(m!=null){let x=f.findIndex(b=>b.route.id&&(m==null?void 0:m[b.route.id])!==void 0);x>=0||Je(!1),f=f.slice(0,Math.min(f.length,x+1))}let h=!1,y=-1;if(i&&s&&s.v7_partialHydration)for(let x=0;x<f.length;x++){let b=f[x];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(y=x),b.route.id){let{loaderData:v,errors:S}=i,E=b.route.loader&&v[b.route.id]===void 0&&(!S||S[b.route.id]===void 0);if(b.route.lazy||E){h=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((x,b,v)=>{let S,E=!1,k=null,C=null;i&&(S=m&&b.route.id?m[b.route.id]:void 0,k=b.route.errorElement||sC,h&&(y<0&&v===0?(hC("route-fallback"),E=!0,C=null):y===v&&(E=!0,C=b.route.hydrateFallbackElement||null)));let T=r.concat(f.slice(0,v+1)),N=()=>{let j;return S?j=k:E?j=C:b.route.Component?j=g.createElement(b.route.Component,null):b.route.element?j=b.route.element:j=x,g.createElement(lC,{match:b,routeContext:{outlet:x,matches:T,isDataRoute:i!=null},children:j})};return i&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?g.createElement(aC,{location:i.location,revalidation:i.revalidation,component:k,error:S,children:N(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):N()},null)}var wy=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(wy||{}),by=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(by||{});function uC(n){let r=g.useContext(gd);return r||Je(!1),r}function dC(n){let r=g.useContext(ZS);return r||Je(!1),r}function fC(n){let r=g.useContext(Bn);return r||Je(!1),r}function ky(n){let r=fC(),i=r.matches[r.matches.length-1];return i.route.id||Je(!1),i.route.id}function mC(){var n;let r=g.useContext(yy),i=dC(),s=ky();return r!==void 0?r:(n=i.errors)==null?void 0:n[s]}function pC(){let{router:n}=uC(wy.UseNavigateStable),r=ky(by.UseNavigateStable),i=g.useRef(!1);return vy(()=>{i.current=!0}),g.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,Ko({fromRouteId:r},u)))},[n,r])}const ih={};function hC(n,r,i){ih[n]||(ih[n]=!0)}function zu(n){let{to:r,replace:i,state:s,relative:l}=n;Xi()||Je(!1);let{future:u,static:f}=g.useContext(Pr),{matches:m}=g.useContext(Bn),{pathname:h}=Tr(),y=sl(),x=hd(r,pd(m,u.v7_relativeSplatPath),h,l==="path"),b=JSON.stringify(x);return g.useEffect(()=>y(JSON.parse(b),{replace:i,state:s,relative:l}),[y,b,l,i,s]),null}function ct(n){Je(!1)}function gC(n){let{basename:r="/",children:i=null,location:s,navigationType:l=xr.Pop,navigator:u,static:f=!1,future:m}=n;Xi()&&Je(!1);let h=r.replace(/^\/*/,"/"),y=g.useMemo(()=>({basename:h,navigator:u,static:f,future:Ko({v7_relativeSplatPath:!1},m)}),[h,m,u,f]);typeof s=="string"&&(s=Ki(s));let{pathname:x="/",search:b="",hash:v="",state:S=null,key:E="default"}=s,k=g.useMemo(()=>{let C=md(x,h);return C==null?null:{location:{pathname:C,search:b,hash:v,state:S,key:E},navigationType:l}},[h,x,b,v,S,E,l]);return k==null?null:g.createElement(Pr.Provider,{value:y},g.createElement(ol.Provider,{children:i,value:k}))}function yC(n){let{children:r,location:i}=n;return rC(Bu(r),i)}new Promise(()=>{});function Bu(n,r){r===void 0&&(r=[]);let i=[];return g.Children.forEach(n,(s,l)=>{if(!g.isValidElement(s))return;let u=[...r,l];if(s.type===g.Fragment){i.push.apply(i,Bu(s.props.children,u));return}s.type!==ct&&Je(!1),!s.props.index||!s.props.children||Je(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Bu(s.props.children,u)),i.push(f)}),i}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Hu.apply(this,arguments)}function vC(n,r){if(n==null)return{};var i={},s=Object.keys(n),l,u;for(u=0;u<s.length;u++)l=s[u],!(r.indexOf(l)>=0)&&(i[l]=n[l]);return i}function xC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function wC(n,r){return n.button===0&&(!r||r==="_self")&&!xC(n)}const bC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kC="6";try{window.__reactRouterVersion=kC}catch{}const SC="startTransition",oh=Fh[SC];function CC(n){let{basename:r,children:i,future:s,window:l}=n,u=g.useRef();u.current==null&&(u.current=PS({window:l,v5Compat:!0}));let f=u.current,[m,h]=g.useState({action:f.action,location:f.location}),{v7_startTransition:y}=s||{},x=g.useCallback(b=>{y&&oh?oh(()=>h(b)):h(b)},[h,y]);return g.useLayoutEffect(()=>f.listen(x),[f,x]),g.createElement(gC,{basename:r,children:i,location:m.location,navigationType:m.action,navigator:f,future:s})}const EC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=g.forwardRef(function(r,i){let{onClick:s,relative:l,reloadDocument:u,replace:f,state:m,target:h,to:y,preventScrollReset:x,unstable_viewTransition:b}=r,v=vC(r,bC),{basename:S}=g.useContext(Pr),E,k=!1;if(typeof y=="string"&&RC.test(y)&&(E=y,EC))try{let j=new URL(window.location.href),L=y.startsWith("//")?new URL(j.protocol+y):new URL(y),$=md(L.pathname,S);L.origin===j.origin&&$!=null?y=$+L.search+L.hash:k=!0}catch{}let C=eC(y,{relative:l}),T=PC(y,{replace:f,state:m,target:h,preventScrollReset:x,relative:l,unstable_viewTransition:b});function N(j){s&&s(j),j.defaultPrevented||T(j)}return g.createElement("a",Hu({},v,{href:E||C,onClick:k||u?s:N,ref:i,target:h}))});var sh;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(sh||(sh={}));var ah;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(ah||(ah={}));function PC(n,r){let{target:i,replace:s,state:l,preventScrollReset:u,relative:f,unstable_viewTransition:m}=r===void 0?{}:r,h=sl(),y=Tr(),x=xy(n,{relative:f});return g.useCallback(b=>{if(wC(b,i)){b.preventDefault();let v=s!==void 0?s:_a(y)===_a(x);h(n,{replace:v,state:l,preventScrollReset:u,relative:f,unstable_viewTransition:m})}},[y,h,x,s,l,i,n,u,f,m])}const TC=Qa("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-[transform,box-shadow,background-color,color] duration-200 ease-out hover:scale-[1.03] hover:shadow-md active:scale-[0.99] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary-hover",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-2 border-primary/30 bg-background text-primary hover:border-primary hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground hover:shadow-none",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 px-3",lg:"h-12 px-8 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Oe=g.forwardRef(({className:n,variant:r,size:i,asChild:s=!1,...l},u)=>{const f=s?zi:"button";return c.jsx(f,{className:ye(TC({variant:r,size:i,className:n})),ref:u,...l})});Oe.displayName="Button";const lh=[{href:"/",label:"Home",icon:Ww},{href:"/courses",label:"Courses",icon:Ka},{href:"/quizzes",label:"Quizzes",icon:Bi}];function AC(){const n=Tr(),[r,i]=g.useState(!1);g.useEffect(()=>i(!1),[n.pathname]);const s=l=>l==="/"?n.pathname==="/":n.pathname.startsWith(l)||l==="/courses"&&n.pathname.startsWith("/lessons");return c.jsx("header",{className:"sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md",children:c.jsxs("nav",{"aria-label":"Main",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsxs(De,{to:"/",className:"group flex items-center gap-2.5 rounded-lg",title:"THRIVE: Track, Habits, Responsibility, Invest, Value, Earn",children:[c.jsx("img",{src:"/favicon.svg",alt:"",width:36,height:36,className:"w-9 h-9 transition-transform duration-300 group-hover:rotate-[-6deg] motion-reduce:transition-none"}),c.jsxs("span",{className:"flex flex-col leading-none",children:[c.jsx("span",{className:"text-xl font-black tracking-wider text-ink",children:"THRIVE"}),c.jsx("span",{className:"hidden sm:block text-[11px] font-semibold text-brand-dark mt-0.5",children:"Track · Habits · Responsibility · Invest · Value · Earn"})]})]}),c.jsxs("ul",{className:"hidden md:flex items-center gap-2",children:[lh.map(({href:l,label:u,icon:f})=>c.jsx("li",{children:c.jsxs(De,{to:l,"aria-current":s(l)?"page":void 0,className:ye("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200",s(l)?"text-primary bg-mint":"text-ink-muted hover:text-primary hover:bg-mint/70"),children:[c.jsx(f,{className:"w-4 h-4","aria-hidden":"true"}),c.jsx("span",{children:u})]})},l)),c.jsx("li",{className:"ml-2",children:c.jsx(Oe,{asChild:!0,size:"sm",className:"px-5",children:c.jsx(De,{to:"/courses",children:"Start free"})})})]}),c.jsx("button",{type:"button",className:"md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:bg-mint transition-colors","aria-expanded":r,"aria-controls":"mobile-menu","aria-label":r?"Close menu":"Open menu",onClick:()=>i(l=>!l),children:r?c.jsx(Xa,{className:"w-6 h-6","aria-hidden":"true"}):c.jsx(Vw,{className:"w-6 h-6","aria-hidden":"true"})})]}),c.jsxs("div",{id:"mobile-menu",hidden:!r,className:"md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200",children:[c.jsx("ul",{className:"flex flex-col gap-1",children:lh.map(({href:l,label:u,icon:f})=>c.jsx("li",{children:c.jsxs(De,{to:l,"aria-current":s(l)?"page":void 0,className:ye("flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold",s(l)?"text-primary bg-mint":"text-ink hover:bg-mint/70"),children:[c.jsx(f,{className:"w-5 h-5","aria-hidden":"true"}),u]})},l))}),c.jsx(Oe,{asChild:!0,className:"w-full mt-3",children:c.jsx(De,{to:"/courses",children:"Start free"})})]})]})})}function NC(){g.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i="IntersectionObserver"in window?new IntersectionObserver(u=>{u.forEach(f=>{f.isIntersecting&&(f.target.classList.add("is-visible"),i==null||i.unobserve(f.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.12}):null,s=()=>{document.querySelectorAll(".reveal:not(.is-visible)").forEach(u=>{n||!i?u.classList.add("is-visible"):i.observe(u)})};s();const l=new MutationObserver(s);return l.observe(document.body,{childList:!0,subtree:!0}),()=>{l.disconnect(),i==null||i.disconnect()}},[])}function Rr({children:n}){return NC(),c.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[c.jsx("a",{href:"#main",className:"sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white",children:"Skip to content"}),c.jsx(AC,{}),c.jsx("main",{id:"main",className:"flex-1",children:n}),c.jsx("footer",{className:"border-t border-border bg-mint-soft",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("img",{src:"/favicon.svg",alt:"",width:24,height:24}),c.jsxs("span",{children:[c.jsx("strong",{className:"text-ink",children:"THRIVE"}),": Track, Habits, Responsibility, Invest, Value, Earn"]})]}),c.jsxs("nav",{"aria-label":"Footer",className:"flex items-center gap-5",children:[c.jsx(De,{to:"/courses",className:"link-underline font-semibold",children:"Courses"}),c.jsx(De,{to:"/quizzes",className:"link-underline font-semibold",children:"Quizzes"}),c.jsx("span",{className:"free-pill text-xs",children:"Always free"})]})]})})]})}const Sy=[{key:"T",word:"Track",line:"Know where your money goes.",icon:Uw},{key:"H",word:"Habits",line:"Small steps, done often, add up.",icon:Kw},{key:"R",word:"Responsibility",line:"Borrow smart and keep your word.",icon:Hw},{key:"I",word:"Invest",line:"Help your money grow over time.",icon:eb},{key:"V",word:"Value",line:"Know what things really cost.",icon:tb},{key:"E",word:"Earn",line:"Turn effort and skills into income.",icon:zw}],Cy=n=>{var r;return((r=Sy.find(i=>i.key===n))==null?void 0:r.word)??n},$n=[{slug:"budgeting-and-saving",path:"/lessons/budgeting-and-saving",title:"Budgeting & Saving",age:"Ages 10–14",time:"8 short parts, about 10 min",level:"Beginner",blurb:"Learn where your money goes and how to keep some. Simple steps help you build a saving habit.",objectives:["Make a simple budget","Use the 50/30/20 rule","Start an emergency fund","Set a saving goal and stick to it"],outcome:"By the end, you can plan a monthly budget and set a saving goal.",pillars:["T","H"],icon:Gw,tint:"bg-emerald-100 text-emerald-800",featured:!0},{slug:"understanding-credit",path:"/lessons/understanding-credit",title:"Understanding Credit",age:"Ages 14–18",time:"7 short parts, about 15 min",level:"Beginner",blurb:"Credit is trust you build over time. Learn how scores work and how to protect yours.",objectives:["Read a credit score","Know what raises or lowers it","Use a card without falling into debt","Pay down debt step by step"],outcome:"By the end, you can explain how to build good credit from zero.",pillars:["R"],icon:Bw,tint:"bg-violet-100 text-violet-800",featured:!0},{slug:"interest-rates",path:"/lessons/interest-rates",title:"Interest Rates",age:"Ages 12–16",time:"6 short parts, about 15 min",level:"Beginner",blurb:"Interest can work for you or against you. See how small rates grow big over time.",objectives:["Tell simple and compound interest apart","Compare APR and APY","See why starting early pays off"],outcome:"By the end, you can compare two rates and pick the better deal.",pillars:["V","I"],icon:Yw,tint:"bg-amber-100 text-amber-800"},{slug:"understanding-inflation",path:"/lessons/understanding-inflation",title:"Understanding Inflation",age:"Ages 11–15",time:"4 short parts, about 20 min",level:"Beginner",blurb:"Why does a snack cost more than it used to? That's inflation. Learn what causes it and how to keep up.",objectives:["Explain inflation in plain words","See how prices change over time","Protect savings from rising prices"],outcome:"By the end, you can explain why saving alone isn't always enough.",pillars:["V"],icon:nb,tint:"bg-orange-100 text-orange-800"},{slug:"investment-basics",path:"/lessons/investment-basics",title:"Investment Basics",age:"Ages 13–18",time:"5 short parts, about 15 min",level:"Intermediate",blurb:"Investing helps money grow while you sleep. Learn the basics without the jargon.",objectives:["Know stocks, bonds, and funds","Understand ETFs and index funds","Spread risk across investments","Invest a little, often"],outcome:"By the end, you can explain how a simple starter portfolio works.",pillars:["I"],icon:rb,tint:"bg-green-100 text-green-800",featured:!0},{slug:"risk-vs-return",path:"/lessons/risk-vs-return",title:"Risk vs Return",age:"Ages 14–18",time:"5 short parts, about 20 min",level:"Intermediate",blurb:"Bigger rewards come with bigger risks. Find a balance that feels right for you.",objectives:["Name the main types of risk","Find your own comfort with risk","Use diversification to stay steady"],outcome:"By the end, you can match an investment to your goals.",pillars:["I"],icon:Jw,tint:"bg-rose-100 text-rose-800"},{slug:"tax-fundamentals",path:"/lessons/tax-fundamentals",title:"Tax Basics",age:"Ages 15+",time:"4 short parts, about 15 min",level:"Intermediate",blurb:"When you earn money, some goes to taxes. Learn where it goes and how to keep more, legally.",objectives:["See how tax brackets work","Know deductions from credits","Use tax-friendly savings accounts","Plan ahead, not just in April"],outcome:"By the end, you can explain how taxes affect what you earn.",pillars:["E","R"],icon:$w,tint:"bg-teal-100 text-teal-800"},{slug:"loans-and-mortgages",path:"/lessons/loans-and-mortgages",title:"Loans & Mortgages",age:"Ages 16+, great with a parent",time:"6 short parts, about 15 min",level:"Intermediate",blurb:"Big buys often need a loan. Learn how loans work before you sign anything.",objectives:["Know the main types of loans","Understand down payments and PMI","Compare loan offers side by side","Ask the right questions"],outcome:"By the end, you can read a loan offer and spot the true cost.",pillars:["R"],icon:Fw,tint:"bg-indigo-100 text-indigo-800"},{slug:"retirement-planning",path:"/lessons/retirement-planning",title:"Retirement Planning",age:"Ages 16+ and parents",time:"5 short parts, about 30 min",level:"Intermediate",blurb:"Retirement feels far away. That's exactly why starting early helps so much.",objectives:["See how time grows savings","Know 401(k) and IRA basics","Choose between Roth and traditional","Set a simple savings target"],outcome:"By the end, you can start a retirement plan with confidence.",pillars:["I","H"],icon:Au,tint:"bg-pink-100 text-pink-800",featured:!0}],IC=["budgeting-and-saving","understanding-credit","interest-rates","investment-basics"],Ey="thrive_course_progress",Wu="thrive-progress-change";function Ry(){try{const n=window.localStorage.getItem(Ey);return n?JSON.parse(n):{}}catch{return{}}}function jC(n){try{window.localStorage.setItem(Ey,JSON.stringify(n))}catch{}window.dispatchEvent(new Event(Wu))}function ch(n){return Ry()[n]??[]}function MC(n,r){const i=Ry(),s=new Set(i[n]??[]);s.has(r)||(s.add(r),i[n]=[...s],jC(i))}function Py(n){const[r,i]=g.useState(()=>new Set(n?ch(n):[]));g.useEffect(()=>{if(!n)return;const l=()=>i(new Set(ch(n)));return l(),window.addEventListener(Wu,l),window.addEventListener("storage",l),()=>{window.removeEventListener(Wu,l),window.removeEventListener("storage",l)}},[n]);const s=g.useCallback(l=>n&&MC(n,l),[n]);return{done:r,mark:s}}function Ty({course:n,index:r=0,compact:i=!1}){const s=`course-${n.slug}`,{done:l}=Py(n.slug),u=l.size>0;return c.jsxs("article",{"aria-labelledby":s,className:"reveal card-lift group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm",style:{"--delay":`${r%3*80}ms`},children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsx("div",{className:ye("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 motion-reduce:transform-none",n.tint),children:c.jsx(n.icon,{className:"w-7 h-7","aria-hidden":"true"})}),c.jsx("ul",{className:"flex flex-wrap justify-end gap-1.5","aria-label":"THRIVE skills",children:n.pillars.map(f=>c.jsx("li",{className:"rounded-full bg-mint px-2.5 py-1 text-xs font-bold text-primary",children:Cy(f)},f))})]}),c.jsx("h3",{id:s,className:"mt-4 text-xl font-extrabold text-ink",children:n.title}),c.jsxs("dl",{className:"mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-ink-muted",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("dt",{className:"sr-only",children:"Age"}),c.jsx(td,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),c.jsx("dd",{children:n.age})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("dt",{className:"sr-only",children:"Time"}),c.jsx(Ma,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),c.jsx("dd",{children:n.time})]})]}),c.jsx("p",{className:"mt-3 text-base leading-relaxed text-ink-muted",children:n.blurb}),!i&&c.jsxs(c.Fragment,{children:[c.jsx("h4",{className:"mt-5 text-sm font-extrabold uppercase tracking-wide text-ink",children:"You'll learn to"}),c.jsx("ul",{className:"mt-2 space-y-2",children:n.objectives.map(f=>c.jsxs("li",{className:"flex items-start gap-2 text-[15px] text-ink",children:[c.jsx(ts,{className:"mt-0.5 w-5 h-5 flex-none text-brand","aria-hidden":"true"}),c.jsx("span",{children:f})]},f))}),c.jsxs("p",{className:"mt-5 flex items-start gap-2 rounded-2xl bg-sun-soft px-4 py-3 text-[15px] font-semibold text-ink",children:[c.jsx(Pi,{className:"mt-0.5 w-5 h-5 flex-none text-amber-600","aria-hidden":"true"}),c.jsx("span",{children:n.outcome})]})]}),c.jsx("div",{className:"mt-auto pt-6",children:c.jsx(Oe,{asChild:!0,className:"w-full",size:"lg",children:c.jsxs(De,{to:n.path,children:[u?"Continue":"Start for free",c.jsxs("span",{className:"sr-only",children:[": ",n.title]}),c.jsx(Ot,{className:"transition-transform duration-200 group-hover:translate-x-1","aria-hidden":"true"})]})})})]})}const rn=n=>({"--delay":`${n}ms`}),LC=[{icon:Ka,title:"Pick a course",text:"Start with saving and budgeting. Every course shows the right age."},{icon:Zu,title:"Read and watch",text:"Short parts and a video make each idea easy to follow."},{icon:Bi,title:"Take the quiz",text:"Check what you learned and earn points as you go."}];function DC(){const n=$n.filter(r=>r.featured);return c.jsxs(Rr,{children:[c.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-mint via-mint-soft to-sun-soft",children:[c.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/10"}),c.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]",children:[c.jsxs("div",{className:"text-center lg:text-left",children:[c.jsxs("p",{className:"hero-animate inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-primary shadow-sm",children:[c.jsx(ed,{className:"w-4 h-4 text-amber-500","aria-hidden":"true"}),"Money lessons for kids and parents"]}),c.jsxs("h1",{className:"hero-animate mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-ink",style:rn(80),children:["Money skills that help kids"," ",c.jsxs("span",{className:"relative whitespace-nowrap text-brand-dark",children:["THRIVE",c.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 200 12",className:"absolute -bottom-2 left-0 w-full h-3 text-sun",preserveAspectRatio:"none",children:c.jsx("path",{d:"M2 9C50 2 150 2 198 9",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",fill:"none"})})]})]}),c.jsx("p",{className:"hero-animate mt-6 text-lg md:text-xl text-ink-muted max-w-xl mx-auto lg:mx-0",style:rn(160),children:"Short lessons, fun videos, and quick quizzes. Kids learn to save, spend wisely, and grow their money. Parents can learn right alongside them."}),c.jsxs("div",{className:"hero-animate mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start",style:rn(240),children:[c.jsx(Oe,{asChild:!0,size:"lg",className:"w-full sm:w-auto",children:c.jsxs(De,{to:"/courses",children:["Start for free",c.jsx(Ot,{"aria-hidden":"true"})]})}),c.jsx(Oe,{asChild:!0,size:"lg",variant:"outline",className:"w-full sm:w-auto",children:c.jsx(De,{to:"/quizzes",children:"Try a quiz"})}),c.jsxs("span",{className:"free-pill",children:[c.jsx(ts,{className:"w-4 h-4","aria-hidden":"true"}),"Always free"]})]}),c.jsx("p",{className:"hero-animate mt-4 text-sm text-ink-muted",style:rn(300),children:"No sign-up. No credit card. Just start."})]}),c.jsx("div",{className:"hero-animate mx-auto w-64 sm:w-80 lg:w-full max-w-sm",style:rn(200),children:c.jsxs("svg",{viewBox:"0 0 320 300",role:"img","aria-label":"A sprout growing out of a stack of coins",className:"w-full h-auto drop-shadow-sm",children:[c.jsx("ellipse",{cx:"160",cy:"268",rx:"120",ry:"16",fill:"#0A7A4A",opacity:"0.12"}),[0,1,2,3].map(r=>c.jsxs("g",{transform:`translate(0 ${-r*22})`,children:[c.jsx("ellipse",{cx:"160",cy:"250",rx:"70",ry:"18",fill:"#E8A92E"}),c.jsx("rect",{x:"90",y:"236",width:"140",height:"14",fill:"#E8A92E"}),c.jsx("ellipse",{cx:"160",cy:"236",rx:"70",ry:"18",fill:"#FFC857"}),c.jsx("ellipse",{cx:"160",cy:"236",rx:"44",ry:"10",fill:"none",stroke:"#E8A92E",strokeWidth:"3"})]},r)),c.jsxs("g",{className:"sway",style:{transformBox:"fill-box"},children:[c.jsx("path",{d:"M160 170V92",stroke:"#0A7A4A",strokeWidth:"8",strokeLinecap:"round"}),c.jsx("path",{d:"M160 128c-34 0-52-20-52-52 33 0 52 19 52 52Z",fill:"#0F9D58"}),c.jsx("path",{d:"M160 104c0-34 19-56 56-56 0 35-21 56-56 56Z",fill:"#0A7A4A"})]}),c.jsxs("g",{className:"float-slow",children:[c.jsx("circle",{cx:"62",cy:"96",r:"20",fill:"#FFC857",stroke:"#E8A92E",strokeWidth:"4"}),c.jsx("text",{x:"62",y:"103",textAnchor:"middle",fontSize:"20",fontWeight:"900",fill:"#8A5A00",children:"$"})]}),c.jsxs("g",{className:"float-slow",style:{animationDelay:"1.2s"},children:[c.jsx("circle",{cx:"262",cy:"150",r:"15",fill:"#FFC857",stroke:"#E8A92E",strokeWidth:"3.5"}),c.jsx("text",{x:"262",y:"156",textAnchor:"middle",fontSize:"15",fontWeight:"900",fill:"#8A5A00",children:"$"})]}),c.jsxs("g",{className:"float-slow",style:{animationDelay:"2.1s"},children:[c.jsx("circle",{cx:"96",cy:"30",r:"10",fill:"#D6F5E3"}),c.jsx("circle",{cx:"250",cy:"54",r:"7",fill:"#D6F5E3"})]})]})})]})]}),c.jsxs("section",{"aria-labelledby":"thrive-heading",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",children:[c.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[c.jsx("h2",{id:"thrive-heading",className:"reveal text-3xl md:text-4xl font-black text-ink",children:"Six skills. One word."}),c.jsx("p",{className:"reveal mt-3 text-lg text-ink-muted",style:rn(80),children:"Every lesson builds one of these money skills."})]}),c.jsx("ul",{className:"mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:Sy.map((r,i)=>c.jsxs("li",{className:"reveal card-lift rounded-3xl border border-border bg-white p-5 text-center shadow-sm",style:rn(i%6*60),children:[c.jsx("span",{"aria-hidden":"true",className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-white",children:r.key}),c.jsx("h3",{className:"mt-3 text-lg font-extrabold text-ink",children:r.word}),c.jsx("p",{className:"mt-1 text-sm text-ink-muted",children:r.line})]},r.key))})]}),c.jsx("section",{"aria-labelledby":"how-heading",className:"bg-mint-soft",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",children:[c.jsx("h2",{id:"how-heading",className:"reveal text-center text-3xl md:text-4xl font-black text-ink",children:"How it works"}),c.jsx("ol",{className:"mt-10 grid gap-6 md:grid-cols-3",children:LC.map((r,i)=>c.jsxs("li",{className:"reveal relative rounded-3xl bg-white p-6 shadow-sm",style:rn(i*80),children:[c.jsxs("span",{"aria-hidden":"true",className:"absolute -top-3 left-6 rounded-full bg-sun px-3 py-0.5 text-sm font-black text-sun-foreground",children:["Step ",i+1]}),c.jsx(r.icon,{className:"w-9 h-9 text-brand","aria-hidden":"true"}),c.jsx("h3",{className:"mt-3 text-xl font-extrabold text-ink",children:r.title}),c.jsx("p",{className:"mt-1 text-ink-muted",children:r.text})]},r.title))})]})}),c.jsxs("section",{"aria-labelledby":"popular-heading",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("h2",{id:"popular-heading",className:"reveal text-3xl md:text-4xl font-black text-ink",children:"Popular courses"}),c.jsx("p",{className:"reveal mt-2 text-lg text-ink-muted",style:rn(80),children:"Great places to start."})]}),c.jsxs(De,{to:"/courses",className:"link-underline inline-flex items-center gap-1 self-start sm:self-auto font-bold text-primary",children:["See all ",$n.length," courses",c.jsx(Ot,{className:"w-4 h-4","aria-hidden":"true"})]})]}),c.jsx("div",{className:"mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:n.map((r,i)=>c.jsx(Ty,{course:r,index:i,compact:!0},r.slug))})]}),c.jsx("section",{"aria-labelledby":"parents-heading",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20",children:c.jsxs("div",{className:"reveal grid gap-8 rounded-3xl bg-sun-soft p-8 md:p-10 md:grid-cols-2 items-center",children:[c.jsxs("div",{children:[c.jsx("h2",{id:"parents-heading",className:"text-2xl md:text-3xl font-black text-ink",children:"Parents, learn together"}),c.jsx("p",{className:"mt-3 text-lg text-ink-muted",children:"Money talks are easier with a plan. Do a lesson side by side, then chat about it at dinner."})]}),c.jsx("ul",{className:"space-y-3 text-ink",children:[{icon:td,text:"Each course lists an age range."},{icon:Zu,text:"Videos make tricky ideas simple."},{icon:yg,text:"Stuck? Ask the money tutor in the corner."}].map(({icon:r,text:i})=>c.jsxs("li",{className:"flex items-center gap-3 font-semibold",children:[c.jsx("span",{className:"flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white",children:c.jsx(r,{className:"w-5 h-5 text-brand-dark","aria-hidden":"true"})}),i]},i))})]})}),c.jsx("section",{className:"bg-primary text-white",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center",children:[c.jsx("h2",{className:"reveal text-3xl md:text-4xl font-black",children:"Ready to start?"}),c.jsx("p",{className:"reveal mt-3 text-lg md:text-xl text-white/90 max-w-xl mx-auto",style:rn(80),children:"Pick a course and do your first lesson today. It's free."}),c.jsx("div",{className:"reveal mt-8",style:rn(160),children:c.jsx(Oe,{asChild:!0,size:"lg",className:"bg-white text-primary hover:bg-mint",children:c.jsxs(De,{to:"/courses",children:["Start for free",c.jsx(Ot,{"aria-hidden":"true"})]})})})]})})]})}const OC=[{value:"All",label:"All courses"},{value:"Beginner",label:"Start here"},{value:"Intermediate",label:"Next steps"}];function FC(){const[n,r]=g.useState("All"),i=g.useMemo(()=>n==="All"?$n:$n.filter(l=>l.level===n),[n]),s=IC.map(l=>$n.find(u=>u.slug===l)).filter(Boolean);return c.jsxs(Rr,{children:[c.jsx("section",{className:"bg-gradient-to-b from-mint to-white",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center",children:[c.jsx("span",{className:"free-pill hero-animate",children:"Every course is free"}),c.jsx("h1",{className:"hero-animate mt-4 text-4xl md:text-5xl font-black text-ink",style:{"--delay":"80ms"},children:"Pick a course. Start learning."}),c.jsx("p",{className:"hero-animate mt-4 text-lg md:text-xl text-ink-muted max-w-2xl mx-auto",style:{"--delay":"160ms"},children:"Each course has short reading parts, a video, and a quiz. Go at your own pace."}),c.jsxs("ul",{className:"hero-animate mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-ink",style:{"--delay":"240ms"},children:[c.jsxs("li",{className:"flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm",children:[c.jsx(Ka,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),$n.length," courses"]}),c.jsxs("li",{className:"flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm",children:[c.jsx(ob,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),"A video in every course"]}),c.jsxs("li",{className:"flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm",children:[c.jsx(Bi,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),"Quizzes to check what you know"]})]})]})}),c.jsx("section",{"aria-labelledby":"path-heading",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"reveal rounded-3xl bg-ink px-6 py-6 md:px-8 text-white",children:[c.jsx("h2",{id:"path-heading",className:"text-lg font-extrabold",children:"New here? Try this order."}),c.jsx("ol",{className:"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:s.map((l,u)=>c.jsx("li",{children:c.jsxs(De,{to:l.path,className:"flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-bold transition-colors duration-200 hover:bg-white/20",children:[c.jsx("span",{className:"flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sun text-sun-foreground text-sm font-black",children:u+1}),l.title]})},l.slug))})]})}),c.jsxs("section",{"aria-labelledby":"all-courses",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",children:[c.jsx("h2",{id:"all-courses",className:"text-2xl md:text-3xl font-black text-ink",children:"All courses"}),c.jsx("div",{role:"group","aria-label":"Filter courses",className:"inline-flex self-start rounded-full bg-mint p-1",children:OC.map(l=>c.jsx("button",{type:"button","aria-pressed":n===l.value,onClick:()=>r(l.value),className:ye("rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200",n===l.value?"bg-primary text-primary-foreground shadow-sm":"text-primary hover:bg-white"),children:l.label},l.value))})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:i.map((l,u)=>c.jsx(Ty,{course:l,index:u},l.slug))}),c.jsxs("p",{className:"mt-12 text-center text-ink-muted",children:["Done with a course?"," ",c.jsxs(De,{to:"/quizzes",className:"link-underline inline-flex items-center gap-1 font-bold text-primary",children:["Test yourself with a quiz",c.jsx(Ot,{className:"w-4 h-4","aria-hidden":"true"})]})]})]})]})}const Mt=g.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ye("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r}));Mt.displayName="Card";const za=g.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ye("flex flex-col space-y-1.5 p-6",n),...r}));za.displayName="CardHeader";const Ba=g.forwardRef(({className:n,...r},i)=>c.jsx("h3",{ref:i,className:ye("text-2xl font-semibold leading-none tracking-tight",n),...r}));Ba.displayName="CardTitle";const Ay=g.forwardRef(({className:n,...r},i)=>c.jsx("p",{ref:i,className:ye("text-sm text-muted-foreground",n),...r}));Ay.displayName="CardDescription";const Lt=g.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ye("p-6 pt-0",n),...r}));Lt.displayName="CardContent";const $C=g.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ye("flex items-center p-6 pt-0",n),...r}));$C.displayName="CardFooter";const _C=Qa("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function wr({className:n,variant:r,...i}){return c.jsx("div",{className:ye(_C({variant:r}),n),...i})}var yd="Progress",vd=100,[zC,t2]=es(yd),[BC,HC]=zC(yd),Ny=g.forwardRef((n,r)=>{const{__scopeProgress:i,value:s=null,max:l,getValueLabel:u=WC,...f}=n;(l||l===0)&&!uh(l)&&console.error(UC(`${l}`,"Progress"));const m=uh(l)?l:vd;s!==null&&!dh(s,m)&&console.error(qC(`${s}`,"Progress"));const h=dh(s,m)?s:null,y=Ha(h)?u(h,m):void 0;return c.jsx(BC,{scope:i,value:h,max:m,children:c.jsx(je.div,{"aria-valuemax":m,"aria-valuemin":0,"aria-valuenow":Ha(h)?h:void 0,"aria-valuetext":y,role:"progressbar","data-state":My(h,m),"data-value":h??void 0,"data-max":m,...f,ref:r})})});Ny.displayName=yd;var Iy="ProgressIndicator",jy=g.forwardRef((n,r)=>{const{__scopeProgress:i,...s}=n,l=HC(Iy,i);return c.jsx(je.div,{"data-state":My(l.value,l.max),"data-value":l.value??void 0,"data-max":l.max,...s,ref:r})});jy.displayName=Iy;function WC(n,r){return`${Math.round(n/r*100)}%`}function My(n,r){return n==null?"indeterminate":n===r?"complete":"loading"}function Ha(n){return typeof n=="number"}function uh(n){return Ha(n)&&!isNaN(n)&&n>0}function dh(n,r){return Ha(n)&&!isNaN(n)&&n<=r&&n>=0}function UC(n,r){return`Invalid prop \`max\` of value \`${n}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${vd}\`.`}function qC(n,r){return`Invalid prop \`value\` of value \`${n}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${vd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var Ly=Ny,VC=jy;const Ui=g.forwardRef(({className:n,value:r,...i},s)=>c.jsx(Ly,{ref:s,className:ye("relative h-4 w-full overflow-hidden rounded-full bg-secondary",n),...i,children:c.jsx(VC,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));Ui.displayName=Ly.displayName;const Uu=[{id:"budgeting-and-saving",title:"Budgeting & Saving",description:"Test your knowledge of budgeting fundamentals and saving strategies",xpReward:100,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to create and manage budgets like a pro."},good:{min:5,max:7,message:"Good grasp of budgeting basics, but review recommended for stronger foundation."},needsImprovement:{max:4,message:"Keep going. Revisit the budgeting lesson to strengthen your knowledge."}},questions:[{id:"budget-1",question:"What is the 50/30/20 rule in budgeting?",options:["50% savings, 30% needs, 20% wants","50% needs, 30% wants, 20% savings","50% wants, 30% savings, 20% needs","50% income, 30% expenses, 20% taxes"],correctAnswer:1,difficulty:"Easy"},{id:"budget-2",question:"Which expense is considered a 'need' in budgeting?",options:["Netflix subscription","Dining out at restaurants","Rent or mortgage payment","Gaming console"],correctAnswer:2,difficulty:"Easy"},{id:"budget-3",question:"How much should you aim to save in an emergency fund?",options:["1-2 months of expenses","3-6 months of expenses","6-12 months of expenses","1 year of income"],correctAnswer:1,difficulty:"Medium"},{id:"budget-4",question:"What is 'paying yourself first'?",options:["Paying your salary before others","Saving money before paying any expenses","Investing before saving","Buying wants before needs"],correctAnswer:1,difficulty:"Medium"},{id:"budget-5",question:"Which is the best place to keep your emergency fund?",options:["Under your mattress","In a checking account","In a high-yield savings account","In the stock market"],correctAnswer:2,difficulty:"Easy"},{id:"budget-6",question:"What percentage of income is typically recommended for housing costs?",options:["No more than 20%","No more than 28%","No more than 40%","No more than 50%"],correctAnswer:1,difficulty:"Medium"},{id:"budget-7",question:"Which budgeting method assigns every dollar a specific purpose?",options:["50/30/20 budgeting","Envelope method","Zero-based budgeting","Percentage budgeting"],correctAnswer:2,difficulty:"Hard"},{id:"budget-8",question:"How often should you review and adjust your budget?",options:["Once a year","Every 6 months","Monthly","Daily"],correctAnswer:2,difficulty:"Easy"},{id:"budget-9",question:"What should you do if your expenses exceed your income?",options:["Use credit cards to cover the difference","Ignore it and hope it improves","Cut expenses or increase income","Borrow money from family"],correctAnswer:2,difficulty:"Medium"},{id:"budget-10",question:"Which app feature is most helpful for tracking spending?",options:["Social media integration","Automatic transaction categorization","Gaming features","Photo filters"],correctAnswer:1,difficulty:"Hard"}]},{id:"understanding-credit",title:"Understanding Credit",description:"Test your knowledge of credit scores, credit reports, and credit management",xpReward:120,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're well-prepared to build and maintain great credit."},good:{min:5,max:7,message:"Good foundation in credit basics, but review recommended for optimal credit management."},needsImprovement:{max:4,message:"Keep going. Revisit the credit lesson to better understand this crucial topic."}},questions:[{id:"credit-1",question:"What is a good credit score range?",options:["300-579","580-669","670-739","740-850"],correctAnswer:3,difficulty:"Easy"},{id:"credit-2",question:"What factor has the biggest impact on your credit score?",options:["Length of credit history","Payment history","Credit utilization","Types of credit"],correctAnswer:1,difficulty:"Medium"},{id:"credit-3",question:"What should your credit utilization ratio be?",options:["Below 10%","Below 30%","Below 50%","Below 70%"],correctAnswer:1,difficulty:"Medium"},{id:"credit-4",question:"How often can you check your credit report for free?",options:["Once per month","Once per quarter","Once per year from each bureau","Only when applying for credit"],correctAnswer:2,difficulty:"Easy"},{id:"credit-5",question:"What happens if you only make minimum payments on credit cards?",options:["You build credit faster","You pay more interest over time","Your credit score improves quickly","You get rewards points faster"],correctAnswer:1,difficulty:"Medium"},{id:"credit-6",question:"Which action will hurt your credit score the most?",options:["Applying for a new credit card","Paying off a loan early","Missing several payments","Checking your credit score"],correctAnswer:2,difficulty:"Easy"},{id:"credit-7",question:"What is a secured credit card?",options:["A card with no credit limit","A card that requires a cash deposit","A card with guaranteed approval","A card that builds credit faster"],correctAnswer:1,difficulty:"Hard"},{id:"credit-8",question:"How long do negative items typically stay on your credit report?",options:["2 years","5 years","7 years","10 years"],correctAnswer:2,difficulty:"Hard"},{id:"credit-9",question:"What should you do if you find an error on your credit report?",options:["Ignore it, it will fix itself","Wait for your next credit report","Dispute it with the credit bureau","Apply for a new credit card"],correctAnswer:2,difficulty:"Medium"},{id:"credit-10",question:"Which is better for your credit score?",options:["Closing old credit cards you don't use","Keeping old credit cards open","Opening many new credit cards","Using all available credit"],correctAnswer:1,difficulty:"Hard"}]},{id:"interest-rates",title:"Interest Rates Explained",description:"Test your understanding of simple vs compound interest and how rates work",xpReward:110,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You grasp how interest works in borrowing and investing."},good:{min:5,max:7,message:"Good knowledge of interest basics, but review recommended for stronger comprehension."},needsImprovement:{max:4,message:"Keep going. Revisit the interest rates lesson to master this important concept."}},questions:[{id:"interest-1",question:"What is simple interest?",options:["Interest calculated on principal and accumulated interest","Interest calculated only on the principal amount","Interest that changes daily","Interest that is tax-free"],correctAnswer:1,difficulty:"Easy"},{id:"interest-2",question:"What is compound interest?",options:["Interest calculated only on principal","Interest that compounds monthly","Interest calculated on principal plus accumulated interest","Interest that never changes"],correctAnswer:2,difficulty:"Easy"},{id:"interest-3",question:"Which grows your money faster over time?",options:["Simple interest","Compound interest","They grow at the same rate","It depends on the principal amount"],correctAnswer:1,difficulty:"Medium"},{id:"interest-4",question:"What does APR stand for?",options:["Annual Payment Rate","Average Percentage Rate","Annual Percentage Rate","Automatic Payment Rate"],correctAnswer:2,difficulty:"Easy"},{id:"interest-5",question:"What does APY stand for?",options:["Annual Percentage Yield","Average Payment Yearly","Annual Payment Year","Automatic Percentage Yield"],correctAnswer:0,difficulty:"Easy"},{id:"interest-6",question:"For borrowers, which is better?",options:["Higher interest rates","Lower interest rates","Variable interest rates","Interest rates don't matter"],correctAnswer:1,difficulty:"Easy"},{id:"interest-7",question:"For savers, which is better?",options:["Lower APY","Higher APY","APY doesn't matter","Variable APY only"],correctAnswer:1,difficulty:"Easy"},{id:"interest-8",question:"How often does compound interest typically compound in savings accounts?",options:["Annually","Quarterly","Monthly","Daily"],correctAnswer:3,difficulty:"Medium"},{id:"interest-9",question:"If you invest $1,000 at 5% compound interest annually, how much will you have after 2 years?",options:["$1,100","$1,102.50","$1,105","$1,050"],correctAnswer:1,difficulty:"Hard"},{id:"interest-10",question:"What is the 'Rule of 72'?",options:["A way to calculate loan payments","A method to estimate how long it takes money to double","A credit score calculation","A budgeting rule"],correctAnswer:1,difficulty:"Hard"}]},{id:"loans-and-mortgages",title:"Loans & Mortgages",description:"Test your knowledge of different types of loans and mortgage basics",xpReward:130,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're prepared to make informed borrowing decisions."},good:{min:5,max:7,message:"Good grasp of loan basics, but review recommended before major borrowing decisions."},needsImprovement:{max:4,message:"Keep going. Revisit the loans lesson before considering any major borrowing."}},questions:[{id:"loans-1",question:"What is a secured loan?",options:["A loan that's guaranteed to be approved","A loan backed by collateral","A loan with no interest","A loan from a secure bank"],correctAnswer:1,difficulty:"Medium"},{id:"loans-2",question:"What is an unsecured loan?",options:["A loan without collateral","A loan that's not safe","A loan with variable rates","A loan from an online bank"],correctAnswer:0,difficulty:"Medium"},{id:"loans-3",question:"What is PMI in mortgages?",options:["Principal Monthly Interest","Private Mortgage Insurance","Property Management Income","Primary Mortgage Investment"],correctAnswer:1,difficulty:"Hard"},{id:"loans-4",question:"When is PMI typically required?",options:["When you put down less than 10%","When you put down less than 20%","When you put down less than 30%","PMI is always required"],correctAnswer:1,difficulty:"Medium"},{id:"loans-5",question:"What is a typical mortgage term length?",options:["10 years","15 years","30 years","Both 15 and 30 years are common"],correctAnswer:3,difficulty:"Easy"},{id:"loans-6",question:"What does 'pre-approved' mean for a mortgage?",options:["You're guaranteed to get the house","The bank has checked your finances and given you a loan estimate","You don't need a down payment","You get the best interest rate"],correctAnswer:1,difficulty:"Medium"},{id:"loans-7",question:"Which loan type typically has the highest interest rate?",options:["Mortgage","Auto loan","Personal loan","Student loan"],correctAnswer:2,difficulty:"Medium"},{id:"loans-8",question:"What is refinancing?",options:["Taking out a second loan","Paying off a loan early","Replacing an existing loan with a new one","Increasing your loan amount"],correctAnswer:2,difficulty:"Hard"},{id:"loans-9",question:"What's included in a mortgage payment (PITI)?",options:["Principal, Interest, Taxes, Insurance","Payment, Interest, Transfer, Insurance","Principal, Investment, Taxes, Income","Payment, Investment, Transfer, Income"],correctAnswer:0,difficulty:"Hard"},{id:"loans-10",question:"Which factor most affects your loan interest rate?",options:["Your age","Your credit score","Your job title","Your education level"],correctAnswer:1,difficulty:"Easy"}]},{id:"investment-basics",title:"Investment Basics",description:"Test your knowledge of stocks, bonds, funds, and investment principles",xpReward:140,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to start building an investment portfolio."},good:{min:5,max:7,message:"Good foundation in investing, but review recommended before making investment decisions."},needsImprovement:{max:4,message:"Keep going. Revisit the investment lesson before considering any investments."}},questions:[{id:"invest-1",question:"What does a stock represent?",options:["A loan to a company","Ownership in a company","A government bond","A savings account"],correctAnswer:1,difficulty:"Easy"},{id:"invest-2",question:"What is a bond?",options:["Ownership in a company","A type of stock","A loan to a company or government","A savings account"],correctAnswer:2,difficulty:"Easy"},{id:"invest-3",question:"What is diversification?",options:["Buying only one stock","Spreading investments across different assets","Investing all money at once","Only investing in bonds"],correctAnswer:1,difficulty:"Medium"},{id:"invest-4",question:"What is an ETF?",options:["Electronic Transfer Fund","Exchange Traded Fund","Emergency Trust Fund","Equity Trading Fund"],correctAnswer:1,difficulty:"Medium"},{id:"invest-5",question:"What is dollar-cost averaging?",options:["Investing a large sum all at once","Investing a fixed amount regularly regardless of market conditions","Only investing when markets are down","Only investing when markets are up"],correctAnswer:1,difficulty:"Hard"},{id:"invest-6",question:"Which investment typically has the highest long-term returns?",options:["Savings accounts","Bonds","Stocks","CDs"],correctAnswer:2,difficulty:"Medium"},{id:"invest-7",question:"What is a mutual fund?",options:["A single stock","A pooled investment vehicle managed by professionals","A type of bond","A savings account"],correctAnswer:1,difficulty:"Medium"},{id:"invest-8",question:"When should you start investing?",options:["When you have $10,000 saved","When you're 30 years old","As early as possible","Only when markets are performing well"],correctAnswer:2,difficulty:"Easy"},{id:"invest-9",question:"What is market volatility?",options:["Steady, predictable returns","Up and down movements in investment values","Only upward movements","Only downward movements"],correctAnswer:1,difficulty:"Hard"},{id:"invest-10",question:"Which investment approach is recommended for beginners?",options:["Day trading individual stocks","Low-cost index funds or ETFs","Cryptocurrency only","Individual company stocks only"],correctAnswer:1,difficulty:"Hard"}]},{id:"risk-vs-return",title:"Risk vs Return",description:"Test your understanding of investment risk and return relationships",xpReward:125,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You can balance risk and return to meet your goals."},good:{min:5,max:7,message:"Good grasp of risk concepts, but review recommended for better risk management."},needsImprovement:{max:4,message:"Keep going. Revisit the risk vs return lesson for safer investing."}},questions:[{id:"risk-1",question:"What is the general relationship between risk and return?",options:["Higher risk, lower return","Higher risk, higher potential return","Risk and return are unrelated","Lower risk, higher return"],correctAnswer:1,difficulty:"Easy"},{id:"risk-2",question:"Which investment is typically considered the safest?",options:["Individual stocks","Corporate bonds","Government bonds","Cryptocurrency"],correctAnswer:2,difficulty:"Easy"},{id:"risk-3",question:"What is risk tolerance?",options:["How much money you can invest","How much loss you can emotionally and financially handle","How long you plan to invest","How much return you expect"],correctAnswer:1,difficulty:"Medium"},{id:"risk-4",question:"Who typically can take more investment risk?",options:["Someone near retirement","Someone who needs money in 1 year","A young person with decades until retirement","Someone with no emergency fund"],correctAnswer:2,difficulty:"Medium"},{id:"risk-5",question:"What is systematic risk?",options:["Risk specific to one company","Risk that affects the entire market","Risk you can eliminate through diversification","Risk from poor management"],correctAnswer:1,difficulty:"Hard"},{id:"risk-6",question:"How can you reduce investment risk?",options:["Put all money in one stock","Diversify across different investments","Only invest when markets are up","Avoid all investments"],correctAnswer:1,difficulty:"Medium"},{id:"risk-7",question:"What is inflation risk?",options:["Risk of market crashes","Risk that returns won't keep up with rising prices","Risk of company bankruptcy","Risk of interest rate changes"],correctAnswer:1,difficulty:"Hard"},{id:"risk-8",question:"Which asset allocation is more aggressive?",options:["80% bonds, 20% stocks","50% bonds, 50% stocks","20% bonds, 80% stocks","100% bonds"],correctAnswer:2,difficulty:"Medium"},{id:"risk-9",question:"What should drive your risk tolerance?",options:["Current market performance","Your friend's investment choices","Your age, goals, and financial situation","Latest investment trends"],correctAnswer:2,difficulty:"Hard"},{id:"risk-10",question:"When should you reassess your risk tolerance?",options:["Never, it should stay the same","Only during market crashes","Regularly, as your life circumstances change","Only when you lose money"],correctAnswer:2,difficulty:"Easy"}]},{id:"understanding-inflation",title:"Understanding Inflation",description:"Test your knowledge of inflation and its impact on your money",xpReward:105,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You know how to protect your money from inflation."},good:{min:5,max:7,message:"Good grasp of inflation basics, but review recommended for better protection strategies."},needsImprovement:{max:4,message:"Keep going. Revisit the inflation lesson to protect your purchasing power."}},questions:[{id:"inflation-1",question:"What is inflation?",options:["When prices go down over time","When prices go up over time","When money becomes worth more","When interest rates are high"],correctAnswer:1,difficulty:"Easy"},{id:"inflation-2",question:"How does inflation affect your money?",options:["It increases purchasing power","It decreases purchasing power","It has no effect on money","It only affects investments"],correctAnswer:1,difficulty:"Easy"},{id:"inflation-3",question:"What is a typical healthy inflation rate?",options:["0%","2%","5%","10%"],correctAnswer:1,difficulty:"Medium"},{id:"inflation-4",question:"Which type of account is most hurt by inflation?",options:["Stock investments","Real estate","Cash in a low-interest savings account","Commodities"],correctAnswer:2,difficulty:"Medium"},{id:"inflation-5",question:"What are TIPS?",options:["Tax Interest Proof Securities","Treasury Inflation-Protected Securities","Total Investment Protection Schemes","Time Interest Payment Systems"],correctAnswer:1,difficulty:"Hard"},{id:"inflation-6",question:"Which often provides better inflation protection?",options:["Cash under a mattress","Low-interest savings accounts","Stock investments","Fixed-rate bonds"],correctAnswer:2,difficulty:"Medium"},{id:"inflation-7",question:"What causes inflation?",options:["Increased demand for goods and services","Rising production costs","Monetary policy changes","All of the above"],correctAnswer:3,difficulty:"Hard"},{id:"inflation-8",question:"How does inflation affect fixed-rate debt?",options:["It makes debt more expensive","It makes debt easier to pay off","It has no effect on debt","It only affects variable-rate debt"],correctAnswer:1,difficulty:"Hard"},{id:"inflation-9",question:"Which group is most hurt by unexpected inflation?",options:["Young workers","People on fixed incomes","Stock investors","Real estate owners"],correctAnswer:1,difficulty:"Medium"},{id:"inflation-10",question:"What is deflation?",options:["Very high inflation","Moderate inflation","When prices decrease over time","When inflation stops"],correctAnswer:2,difficulty:"Easy"}]},{id:"tax-fundamentals",title:"Tax Fundamentals",description:"Test your knowledge of taxes, deductions, and tax planning strategies",xpReward:135,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to optimize your tax strategy."},good:{min:5,max:7,message:"Good tax knowledge foundation, but review recommended for better tax planning."},needsImprovement:{max:4,message:"Keep going. Revisit the tax lesson for better financial planning."}},questions:[{id:"tax-1",question:"What is a progressive tax system?",options:["Everyone pays the same rate","Higher earners pay higher rates","Lower earners pay higher rates","No one pays taxes"],correctAnswer:1,difficulty:"Medium"},{id:"tax-2",question:"What is the difference between deductions and credits?",options:["There is no difference","Deductions reduce taxable income, credits reduce tax owed","Credits reduce taxable income, deductions reduce tax owed","Both reduce tax owed dollar-for-dollar"],correctAnswer:1,difficulty:"Hard"},{id:"tax-3",question:"Which is more valuable?",options:["A $1,000 tax deduction","A $1,000 tax credit","They have the same value","It depends on your tax bracket"],correctAnswer:1,difficulty:"Medium"},{id:"tax-4",question:"What is the standard deduction for 2024 (single filer)?",options:["$12,550","$13,850","$14,600","$15,000"],correctAnswer:1,difficulty:"Hard"},{id:"tax-5",question:"What are payroll taxes used for?",options:["General government operations","Social Security and Medicare","Military spending","Education funding"],correctAnswer:1,difficulty:"Medium"},{id:"tax-6",question:"When are taxes typically due?",options:["April 1st","April 15th","March 15th","May 1st"],correctAnswer:1,difficulty:"Easy"},{id:"tax-7",question:"What is a traditional 401(k)?",options:["A post-tax retirement account","A pre-tax retirement account","A type of savings account","A government bond"],correctAnswer:1,difficulty:"Medium"},{id:"tax-8",question:"What is capital gains tax?",options:["Tax on your salary","Tax on investment profits","Tax on your home","Tax on business income"],correctAnswer:1,difficulty:"Medium"},{id:"tax-9",question:"How long must you hold an investment for long-term capital gains treatment?",options:["6 months","1 year","More than 1 year","2 years"],correctAnswer:2,difficulty:"Hard"},{id:"tax-10",question:"What is tax loss harvesting?",options:["Growing vegetables to reduce taxes","Selling losing investments to offset gains","Avoiding all investments","Only investing in tax-free accounts"],correctAnswer:1,difficulty:"Hard"}]},{id:"retirement-planning",title:"Retirement Planning",description:"Test your knowledge of 401(k)s, IRAs, and retirement strategies",xpReward:150,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're well-prepared to plan for a secure retirement."},good:{min:5,max:7,message:"Good retirement planning foundation, but review recommended for optimal planning."},needsImprovement:{max:4,message:"Keep going. Revisit the retirement lesson to secure your financial future."}},questions:[{id:"retirement-1",question:"What is the main difference between a traditional and Roth IRA?",options:["Traditional is for young people, Roth is for older people","Traditional offers tax deduction now, Roth offers tax-free withdrawals later","Traditional has higher contribution limits","There is no difference"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-2",question:"What is employer matching in a 401(k)?",options:["When your employer pays your salary","When your employer contributes money based on your contributions","When your employer manages your investments","When your employer pays your taxes"],correctAnswer:1,difficulty:"Easy"},{id:"retirement-3",question:"What is the 2024 contribution limit for 401(k)s?",options:["$20,500","$22,500","$23,000","$25,000"],correctAnswer:2,difficulty:"Hard"},{id:"retirement-4",question:"When can you withdraw from a 401(k) without penalty?",options:["Age 55","Age 59½","Age 62","Age 65"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-5",question:"What percentage of income should you save for retirement?",options:["5-8%","10-15%","20-25%","30%+"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-6",question:"What is Social Security?",options:["A government retirement program","A type of 401(k)","A private insurance plan","A savings account"],correctAnswer:0,difficulty:"Easy"},{id:"retirement-7",question:"At what age can you collect full Social Security benefits?",options:["62","65","67 (for most people)","70"],correctAnswer:2,difficulty:"Medium"},{id:"retirement-8",question:"What is a target-date fund?",options:["A fund that expires on a certain date","A fund that automatically adjusts allocation as you age","A fund that only invests in one company","A fund with guaranteed returns"],correctAnswer:1,difficulty:"Hard"},{id:"retirement-9",question:"What is the penalty for early 401(k) withdrawal?",options:["5%","10%","15%","20%"],correctAnswer:1,difficulty:"Hard"},{id:"retirement-10",question:"Why is starting retirement savings early important?",options:["You get better investment options","Compound interest has more time to work","Early savers get government bonuses","You can retire at 50"],correctAnswer:1,difficulty:"Easy"}]}];function xd(n){return Uu.find(r=>r.id===n)}function fh(n,r){const i=n.questions.reduce((m,h,y)=>m+(h.correctAnswer===r[y]?1:0),0),s=Math.round(i/n.questions.length*100);let l,u,f;return i>=n.masteryScoring.excellent.min?(l="excellent",u=n.masteryScoring.excellent.message,f=n.xpReward):i>=n.masteryScoring.good.min?(l="good",u=n.masteryScoring.good.message,f=Math.round(n.xpReward*.7)):(l="needsImprovement",u=n.masteryScoring.needsImprovement.message,f=Math.round(n.xpReward*.3)),{score:i,percentage:s,masteryLevel:l,message:u,xpEarned:f}}const qu=[{level:1,title:"Finance Novice",minXP:0,maxXP:199,description:"Just starting your financial journey",badge:"🌱"},{level:2,title:"Budget Builder",minXP:200,maxXP:449,description:"Learning to manage money basics",badge:"💰"},{level:3,title:"Credit Climber",minXP:450,maxXP:749,description:"Understanding credit and debt management",badge:"📈"},{level:4,title:"Investment Explorer",minXP:750,maxXP:1099,description:"Discovering the world of investing",badge:"🎯"},{level:5,title:"Risk Manager",minXP:1100,maxXP:1499,description:"Balancing risk and return like a pro",badge:"⚖️"},{level:6,title:"Tax Strategist",minXP:1500,maxXP:1999,description:"Optimizing your tax situation",badge:"🧮"},{level:7,title:"Retirement Planner",minXP:2e3,maxXP:2599,description:"Building wealth for the future",badge:"🏆"},{level:8,title:"Finance Expert",minXP:2600,maxXP:3299,description:"Mastering advanced financial concepts",badge:"🎓"},{level:9,title:"Wealth Builder",minXP:3300,maxXP:4099,description:"Creating substantial financial wealth",badge:"💎"},{level:10,title:"Financial Guru",minXP:4100,maxXP:1/0,description:"Peak financial literacy mastery",badge:"👑"}];function Dy(n){return qu.find(r=>n>=r.minXP&&n<=r.maxXP)||qu[0]}function YC(n){return qu.find(r=>r.level===n+1)||null}function Oy(n){const r=Dy(n),i=YC(r.level);if(!i)return{currentLevel:r,nextLevel:null,progressToNext:100,xpNeededForNext:0};const s=n-r.minXP,l=i.minXP-r.minXP,u=Math.round(s/l*100),f=i.minXP-n;return{currentLevel:r,nextLevel:i,progressToNext:u,xpNeededForNext:f}}function Fy(n){typeof window<"u"&&localStorage.setItem("fintechlearn_progress",JSON.stringify(n))}function wd(){if(typeof window<"u"){const n=localStorage.getItem("fintechlearn_progress");if(n)return JSON.parse(n)}return{totalXP:0,currentLevel:1,completedQuizzes:[],badges:[]}}function GC(n,r){const i=n.totalXP+r,s=Dy(i),l={...n,totalXP:i,currentLevel:s.level};return s.level>n.currentLevel&&(l.badges=[...n.badges,s.badge]),Fy(l),l}function QC(n,r,i){if(n.completedQuizzes.includes(r))return n;const s=GC(n,i);return s.completedQuizzes=[...n.completedQuizzes,r],Fy(s),s}function KC(){const[n,r]=g.useState(null);g.useEffect(()=>{r(wd())},[]);const i=h=>{switch(h){case"Easy":return"bg-green-100 text-green-700";case"Medium":return"bg-yellow-100 text-yellow-700";case"Hard":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}},s=h=>(n==null?void 0:n.completedQuizzes.includes(h))||!1,l=()=>(n==null?void 0:n.completedQuizzes.length)||0,u=()=>l()>0?85:0,f=()=>l()>0?"Budgeting":"-",m=n?Oy(n.totalXP):null;return c.jsx(Rr,{children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("span",{className:"free-pill hero-animate",children:"Free to play"}),c.jsx("h1",{className:"hero-animate mt-4 text-4xl md:text-5xl font-black text-ink mb-4",children:"Money quizzes"}),c.jsx("p",{className:"hero-animate text-xl text-ink-muted max-w-2xl mx-auto",children:"Quick quizzes to check what you learned. Earn points and level up as you go."})]}),m&&c.jsx(Mt,{className:"mb-8 bg-gradient-to-r from-primary/10 to-blue-50",children:c.jsxs(Lt,{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold",children:[m.currentLevel.badge," Level"," ",m.currentLevel.level,": ",m.currentLevel.title]}),c.jsx("p",{className:"text-gray-600",children:m.currentLevel.description})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("div",{className:"text-2xl font-bold",children:[n==null?void 0:n.totalXP," XP"]}),m.nextLevel&&c.jsxs("div",{className:"text-sm text-gray-600",children:[m.xpNeededForNext," XP to next level"]})]})]}),m.nextLevel&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-sm",children:[c.jsxs("span",{children:["Progress to ",m.nextLevel.badge," ",m.nextLevel.title]}),c.jsxs("span",{children:[m.progressToNext,"%"]})]}),c.jsx(Ui,{value:m.progressToNext,className:"h-3","aria-label":"Progress to next level"})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-12",children:[c.jsx(Mt,{className:"text-center",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Bi,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:Uu.length}),c.jsx("div",{className:"text-sm text-gray-600",children:"Available Quizzes"})]})}),c.jsx(Mt,{className:"text-center",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Au,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:l()}),c.jsx("div",{className:"text-sm text-gray-600",children:"Completed"})]})}),c.jsx(Mt,{className:"text-center",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Pi,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsxs("div",{className:"text-2xl font-bold text-gray-900",children:[u(),"%"]}),c.jsx("div",{className:"text-sm text-gray-600",children:"Average Score"})]})}),c.jsx(Mt,{className:"text-center",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Ip,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:f()}),c.jsx("div",{className:"text-sm text-gray-600",children:"Best Category"})]})})]}),c.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",children:Uu.map(h=>{const y=s(h.id),x=h.questions.reduce((b,v)=>(b[v.difficulty]=(b[v.difficulty]||0)+1,b),{});return c.jsxs(Mt,{className:"hover:shadow-lg transition-shadow border-0 shadow-md",children:[c.jsxs(za,{className:"pb-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex gap-2",children:[c.jsxs(wr,{className:"bg-primary/10 text-primary",children:[h.questions.length," Questions"]}),c.jsxs(wr,{className:"bg-blue-100 text-blue-700",children:["+",h.xpReward," XP"]})]}),c.jsxs("div",{className:"flex gap-2",children:[Object.entries(x).map(([b,v])=>c.jsxs(wr,{className:i(b),variant:"outline",children:[v," ",b]},b)),y&&c.jsxs(wr,{className:"bg-green-100 text-green-700",children:[c.jsx(hg,{className:"w-3 h-3 mr-1"}),"Completed"]})]})]}),c.jsx(Ba,{className:"text-xl mb-2",children:h.title}),c.jsx(Ay,{className:"text-base mb-4",children:h.description}),c.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Bi,{className:"w-4 h-4"}),h.questions.length," questions"]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Ma,{className:"w-4 h-4"}),"~15 min"]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(ed,{className:"w-4 h-4"}),"+",h.xpReward," XP"]})]})]}),c.jsx(Lt,{className:"pt-0",children:c.jsx(Oe,{asChild:!0,className:"w-full",size:"lg",children:c.jsx(De,{to:`/quiz/${h.id}`,children:y?c.jsxs(c.Fragment,{children:[c.jsx(Pi,{className:"mr-2 w-4 h-4"}),"Retake Quiz"]}):c.jsxs(c.Fragment,{children:[c.jsx(Qw,{className:"mr-2 w-4 h-4"}),"Start Quiz"]})})})})]},h.id)})}),c.jsx("div",{className:"bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-8 mb-12",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Study Recommendations"}),c.jsx("p",{className:"text-gray-600 mb-6 max-w-2xl mx-auto",children:"Start with our courses to build your knowledge, then come back to test what you've learned with these quizzes."}),c.jsx(Oe,{asChild:!0,size:"lg",children:c.jsxs(De,{to:"/courses",children:["Browse Courses",c.jsx(Ot,{className:"ml-2 w-5 h-5"})]})})]})}),c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Coming Soon"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[c.jsx(Mt,{className:"text-center border-dashed",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Pi,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Leaderboards"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Compete with other learners"})]})}),c.jsx(Mt,{className:"text-center border-dashed",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Au,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Achievements"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Earn badges for milestones"})]})}),c.jsx(Mt,{className:"text-center border-dashed",children:c.jsxs(Lt,{className:"pt-6",children:[c.jsx(Ip,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Analytics"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Detailed progress tracking"})]})})]})]})]})})}const XC=()=>{const n=Tr();return g.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),c.jsx(Rr,{children:c.jsxs("section",{className:"max-w-xl mx-auto px-4 py-24 text-center",children:[c.jsx("p",{className:"text-6xl font-black text-brand",children:"404"}),c.jsx("h1",{className:"mt-4 text-3xl font-black text-ink",children:"Hmm, we can't find that page."}),c.jsx("p",{className:"mt-3 text-lg text-ink-muted",children:"It may have moved. Let's get you back on track."}),c.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-3 justify-center",children:[c.jsx(Oe,{asChild:!0,size:"lg",children:c.jsx(De,{to:"/courses",children:"See the courses"})}),c.jsx(Oe,{asChild:!0,size:"lg",variant:"outline",children:c.jsx(De,{to:"/",children:"Go home"})})]})]})})},$y=g.forwardRef(({className:n,type:r,...i},s)=>c.jsx("input",{type:r,className:ye("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:s,...i}));$y.displayName="Input";var JC=g.createContext(void 0);function ZC(n){const r=g.useContext(JC);return n||r||"ltr"}function eE(n,[r,i]){return Math.min(i,Math.max(r,n))}function tE(n,r){return g.useReducer((i,s)=>r[i][s]??i,n)}var bd="ScrollArea",[_y,n2]=es(bd),[nE,Gt]=_y(bd),zy=g.forwardRef((n,r)=>{const{__scopeScrollArea:i,type:s="hover",dir:l,scrollHideDelay:u=600,...f}=n,[m,h]=g.useState(null),[y,x]=g.useState(null),[b,v]=g.useState(null),[S,E]=g.useState(null),[k,C]=g.useState(null),[T,N]=g.useState(0),[j,L]=g.useState(0),[$,H]=g.useState(!1),[z,Y]=g.useState(!1),q=Be(r,re=>h(re)),G=ZC(l);return c.jsx(nE,{scope:i,type:s,dir:G,scrollHideDelay:u,scrollArea:m,viewport:y,onViewportChange:x,content:b,onContentChange:v,scrollbarX:S,onScrollbarXChange:E,scrollbarXEnabled:$,onScrollbarXEnabledChange:H,scrollbarY:k,onScrollbarYChange:C,scrollbarYEnabled:z,onScrollbarYEnabledChange:Y,onCornerWidthChange:N,onCornerHeightChange:L,children:c.jsx(je.div,{dir:G,...f,ref:q,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":j+"px",...n.style}})})});zy.displayName=bd;var By="ScrollAreaViewport",Hy=g.forwardRef((n,r)=>{const{__scopeScrollArea:i,children:s,nonce:l,...u}=n,f=Gt(By,i),m=g.useRef(null),h=Be(r,m,f.onViewportChange);return c.jsxs(c.Fragment,{children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),c.jsx(je.div,{"data-radix-scroll-area-viewport":"",...u,ref:h,style:{overflowX:f.scrollbarXEnabled?"scroll":"hidden",overflowY:f.scrollbarYEnabled?"scroll":"hidden",...n.style},children:c.jsx("div",{ref:f.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});Hy.displayName=By;var Sn="ScrollAreaScrollbar",kd=g.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Gt(Sn,n.__scopeScrollArea),{onScrollbarXEnabledChange:u,onScrollbarYEnabledChange:f}=l,m=n.orientation==="horizontal";return g.useEffect(()=>(m?u(!0):f(!0),()=>{m?u(!1):f(!1)}),[m,u,f]),l.type==="hover"?c.jsx(rE,{...s,ref:r,forceMount:i}):l.type==="scroll"?c.jsx(iE,{...s,ref:r,forceMount:i}):l.type==="auto"?c.jsx(Wy,{...s,ref:r,forceMount:i}):l.type==="always"?c.jsx(Sd,{...s,ref:r}):null});kd.displayName=Sn;var rE=g.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Gt(Sn,n.__scopeScrollArea),[u,f]=g.useState(!1);return g.useEffect(()=>{const m=l.scrollArea;let h=0;if(m){const y=()=>{window.clearTimeout(h),f(!0)},x=()=>{h=window.setTimeout(()=>f(!1),l.scrollHideDelay)};return m.addEventListener("pointerenter",y),m.addEventListener("pointerleave",x),()=>{window.clearTimeout(h),m.removeEventListener("pointerenter",y),m.removeEventListener("pointerleave",x)}}},[l.scrollArea,l.scrollHideDelay]),c.jsx(Vi,{present:i||u,children:c.jsx(Wy,{"data-state":u?"visible":"hidden",...s,ref:r})})}),iE=g.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Gt(Sn,n.__scopeScrollArea),u=n.orientation==="horizontal",f=ll(()=>h("SCROLL_END"),100),[m,h]=tE("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return g.useEffect(()=>{if(m==="idle"){const y=window.setTimeout(()=>h("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(y)}},[m,l.scrollHideDelay,h]),g.useEffect(()=>{const y=l.viewport,x=u?"scrollLeft":"scrollTop";if(y){let b=y[x];const v=()=>{const S=y[x];b!==S&&(h("SCROLL"),f()),b=S};return y.addEventListener("scroll",v),()=>y.removeEventListener("scroll",v)}},[l.viewport,u,h,f]),c.jsx(Vi,{present:i||m!=="hidden",children:c.jsx(Sd,{"data-state":m==="hidden"?"hidden":"visible",...s,ref:r,onPointerEnter:Ee(n.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:Ee(n.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),Wy=g.forwardRef((n,r)=>{const i=Gt(Sn,n.__scopeScrollArea),{forceMount:s,...l}=n,[u,f]=g.useState(!1),m=n.orientation==="horizontal",h=ll(()=>{if(i.viewport){const y=i.viewport.offsetWidth<i.viewport.scrollWidth,x=i.viewport.offsetHeight<i.viewport.scrollHeight;f(m?y:x)}},10);return qi(i.viewport,h),qi(i.content,h),c.jsx(Vi,{present:s||u,children:c.jsx(Sd,{"data-state":u?"visible":"hidden",...l,ref:r})})}),Sd=g.forwardRef((n,r)=>{const{orientation:i="vertical",...s}=n,l=Gt(Sn,n.__scopeScrollArea),u=g.useRef(null),f=g.useRef(0),[m,h]=g.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),y=Gy(m.viewport,m.content),x={...s,sizes:m,onSizesChange:h,hasThumb:y>0&&y<1,onThumbChange:v=>u.current=v,onThumbPointerUp:()=>f.current=0,onThumbPointerDown:v=>f.current=v};function b(v,S){return uE(v,f.current,m,S)}return i==="horizontal"?c.jsx(oE,{...x,ref:r,onThumbPositionChange:()=>{if(l.viewport&&u.current){const v=l.viewport.scrollLeft,S=mh(v,m,l.dir);u.current.style.transform=`translate3d(${S}px, 0, 0)`}},onWheelScroll:v=>{l.viewport&&(l.viewport.scrollLeft=v)},onDragScroll:v=>{l.viewport&&(l.viewport.scrollLeft=b(v,l.dir))}}):i==="vertical"?c.jsx(sE,{...x,ref:r,onThumbPositionChange:()=>{if(l.viewport&&u.current){const v=l.viewport.scrollTop,S=mh(v,m);u.current.style.transform=`translate3d(0, ${S}px, 0)`}},onWheelScroll:v=>{l.viewport&&(l.viewport.scrollTop=v)},onDragScroll:v=>{l.viewport&&(l.viewport.scrollTop=b(v))}}):null}),oE=g.forwardRef((n,r)=>{const{sizes:i,onSizesChange:s,...l}=n,u=Gt(Sn,n.__scopeScrollArea),[f,m]=g.useState(),h=g.useRef(null),y=Be(r,h,u.onScrollbarXChange);return g.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),c.jsx(qy,{"data-orientation":"horizontal",...l,ref:y,sizes:i,style:{bottom:0,left:u.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:u.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":al(i)+"px",...n.style},onThumbPointerDown:x=>n.onThumbPointerDown(x.x),onDragScroll:x=>n.onDragScroll(x.x),onWheelScroll:(x,b)=>{if(u.viewport){const v=u.viewport.scrollLeft+x.deltaX;n.onWheelScroll(v),Ky(v,b)&&x.preventDefault()}},onResize:()=>{h.current&&u.viewport&&f&&s({content:u.viewport.scrollWidth,viewport:u.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:Ua(f.paddingLeft),paddingEnd:Ua(f.paddingRight)}})}})}),sE=g.forwardRef((n,r)=>{const{sizes:i,onSizesChange:s,...l}=n,u=Gt(Sn,n.__scopeScrollArea),[f,m]=g.useState(),h=g.useRef(null),y=Be(r,h,u.onScrollbarYChange);return g.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),c.jsx(qy,{"data-orientation":"vertical",...l,ref:y,sizes:i,style:{top:0,right:u.dir==="ltr"?0:void 0,left:u.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":al(i)+"px",...n.style},onThumbPointerDown:x=>n.onThumbPointerDown(x.y),onDragScroll:x=>n.onDragScroll(x.y),onWheelScroll:(x,b)=>{if(u.viewport){const v=u.viewport.scrollTop+x.deltaY;n.onWheelScroll(v),Ky(v,b)&&x.preventDefault()}},onResize:()=>{h.current&&u.viewport&&f&&s({content:u.viewport.scrollHeight,viewport:u.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:Ua(f.paddingTop),paddingEnd:Ua(f.paddingBottom)}})}})}),[aE,Uy]=_y(Sn),qy=g.forwardRef((n,r)=>{const{__scopeScrollArea:i,sizes:s,hasThumb:l,onThumbChange:u,onThumbPointerUp:f,onThumbPointerDown:m,onThumbPositionChange:h,onDragScroll:y,onWheelScroll:x,onResize:b,...v}=n,S=Gt(Sn,i),[E,k]=g.useState(null),C=Be(r,q=>k(q)),T=g.useRef(null),N=g.useRef(""),j=S.viewport,L=s.content-s.viewport,$=Xe(x),H=Xe(h),z=ll(b,10);function Y(q){if(T.current){const G=q.clientX-T.current.left,re=q.clientY-T.current.top;y({x:G,y:re})}}return g.useEffect(()=>{const q=G=>{const re=G.target;(E==null?void 0:E.contains(re))&&$(G,L)};return document.addEventListener("wheel",q,{passive:!1}),()=>document.removeEventListener("wheel",q,{passive:!1})},[j,E,L,$]),g.useEffect(H,[s,H]),qi(E,z),qi(S.content,z),c.jsx(aE,{scope:i,scrollbar:E,hasThumb:l,onThumbChange:Xe(u),onThumbPointerUp:Xe(f),onThumbPositionChange:H,onThumbPointerDown:Xe(m),children:c.jsx(je.div,{...v,ref:C,style:{position:"absolute",...v.style},onPointerDown:Ee(n.onPointerDown,q=>{q.button===0&&(q.target.setPointerCapture(q.pointerId),T.current=E.getBoundingClientRect(),N.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),Y(q))}),onPointerMove:Ee(n.onPointerMove,Y),onPointerUp:Ee(n.onPointerUp,q=>{const G=q.target;G.hasPointerCapture(q.pointerId)&&G.releasePointerCapture(q.pointerId),document.body.style.webkitUserSelect=N.current,S.viewport&&(S.viewport.style.scrollBehavior=""),T.current=null})})})}),Wa="ScrollAreaThumb",Vy=g.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Uy(Wa,n.__scopeScrollArea);return c.jsx(Vi,{present:i||l.hasThumb,children:c.jsx(lE,{ref:r,...s})})}),lE=g.forwardRef((n,r)=>{const{__scopeScrollArea:i,style:s,...l}=n,u=Gt(Wa,i),f=Uy(Wa,i),{onThumbPositionChange:m}=f,h=Be(r,b=>f.onThumbChange(b)),y=g.useRef(),x=ll(()=>{y.current&&(y.current(),y.current=void 0)},100);return g.useEffect(()=>{const b=u.viewport;if(b){const v=()=>{if(x(),!y.current){const S=dE(b,m);y.current=S,m()}};return m(),b.addEventListener("scroll",v),()=>b.removeEventListener("scroll",v)}},[u.viewport,x,m]),c.jsx(je.div,{"data-state":f.hasThumb?"visible":"hidden",...l,ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:Ee(n.onPointerDownCapture,b=>{const S=b.target.getBoundingClientRect(),E=b.clientX-S.left,k=b.clientY-S.top;f.onThumbPointerDown({x:E,y:k})}),onPointerUp:Ee(n.onPointerUp,f.onThumbPointerUp)})});Vy.displayName=Wa;var Cd="ScrollAreaCorner",Yy=g.forwardRef((n,r)=>{const i=Gt(Cd,n.__scopeScrollArea),s=!!(i.scrollbarX&&i.scrollbarY);return i.type!=="scroll"&&s?c.jsx(cE,{...n,ref:r}):null});Yy.displayName=Cd;var cE=g.forwardRef((n,r)=>{const{__scopeScrollArea:i,...s}=n,l=Gt(Cd,i),[u,f]=g.useState(0),[m,h]=g.useState(0),y=!!(u&&m);return qi(l.scrollbarX,()=>{var b;const x=((b=l.scrollbarX)==null?void 0:b.offsetHeight)||0;l.onCornerHeightChange(x),h(x)}),qi(l.scrollbarY,()=>{var b;const x=((b=l.scrollbarY)==null?void 0:b.offsetWidth)||0;l.onCornerWidthChange(x),f(x)}),y?c.jsx(je.div,{...s,ref:r,style:{width:u,height:m,position:"absolute",right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function Ua(n){return n?parseInt(n,10):0}function Gy(n,r){const i=n/r;return isNaN(i)?0:i}function al(n){const r=Gy(n.viewport,n.content),i=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,s=(n.scrollbar.size-i)*r;return Math.max(s,18)}function uE(n,r,i,s="ltr"){const l=al(i),u=l/2,f=r||u,m=l-f,h=i.scrollbar.paddingStart+f,y=i.scrollbar.size-i.scrollbar.paddingEnd-m,x=i.content-i.viewport,b=s==="ltr"?[0,x]:[x*-1,0];return Qy([h,y],b)(n)}function mh(n,r,i="ltr"){const s=al(r),l=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,u=r.scrollbar.size-l,f=r.content-r.viewport,m=u-s,h=i==="ltr"?[0,f]:[f*-1,0],y=eE(n,h);return Qy([0,f],[0,m])(y)}function Qy(n,r){return i=>{if(n[0]===n[1]||r[0]===r[1])return r[0];const s=(r[1]-r[0])/(n[1]-n[0]);return r[0]+s*(i-n[0])}}function Ky(n,r){return n>0&&n<r}var dE=(n,r=()=>{})=>{let i={left:n.scrollLeft,top:n.scrollTop},s=0;return function l(){const u={left:n.scrollLeft,top:n.scrollTop},f=i.left!==u.left,m=i.top!==u.top;(f||m)&&r(),i=u,s=window.requestAnimationFrame(l)}(),()=>window.cancelAnimationFrame(s)};function ll(n,r){const i=Xe(n),s=g.useRef(0);return g.useEffect(()=>()=>window.clearTimeout(s.current),[]),g.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(i,r)},[i,r])}function qi(n,r){const i=Xe(r);Rt(()=>{let s=0;if(n){const l=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(i)});return l.observe(n),()=>{window.cancelAnimationFrame(s),l.unobserve(n)}}},[n,i])}var Xy=zy,fE=Hy,mE=Yy;const Jy=g.forwardRef(({className:n,children:r,...i},s)=>c.jsxs(Xy,{ref:s,className:ye("relative overflow-hidden",n),...i,children:[c.jsx(fE,{className:"h-full w-full rounded-[inherit]",children:r}),c.jsx(Zy,{}),c.jsx(mE,{})]}));Jy.displayName=Xy.displayName;const Zy=g.forwardRef(({className:n,orientation:r="vertical",...i},s)=>c.jsx(kd,{ref:s,orientation:r,className:ye("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:c.jsx(Vy,{className:"relative flex-1 rounded-full bg-border"})}));Zy.displayName=kd.displayName;function pE(n,r){const i=g.createContext(r),s=u=>{const{children:f,...m}=u,h=g.useMemo(()=>m,Object.values(m));return c.jsx(i.Provider,{value:h,children:f})};s.displayName=n+"Provider";function l(u){const f=g.useContext(i);if(f)return f;if(r!==void 0)return r;throw new Error(`\`${u}\` must be used within \`${n}\``)}return[s,l]}function hE(n,r=[]){let i=[];function s(u,f){const m=g.createContext(f),h=i.length;i=[...i,f];const y=b=>{var T;const{scope:v,children:S,...E}=b,k=((T=v==null?void 0:v[n])==null?void 0:T[h])||m,C=g.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:C,children:S})};y.displayName=u+"Provider";function x(b,v){var k;const S=((k=v==null?void 0:v[n])==null?void 0:k[h])||m,E=g.useContext(S);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[y,x]}const l=()=>{const u=i.map(f=>g.createContext(f));return function(m){const h=(m==null?void 0:m[n])||u;return g.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return l.scopeName=n,[s,gE(l,...r)]}function gE(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((m,{useScope:h,scopeName:y})=>{const b=h(u)[`__scope${y}`];return{...m,...b}},{});return g.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var hu="focusScope.autoFocusOnMount",gu="focusScope.autoFocusOnUnmount",ph={bubbles:!1,cancelable:!0},yE="FocusScope",ev=g.forwardRef((n,r)=>{const{loop:i=!1,trapped:s=!1,onMountAutoFocus:l,onUnmountAutoFocus:u,...f}=n,[m,h]=g.useState(null),y=Xe(l),x=Xe(u),b=g.useRef(null),v=Be(r,k=>h(k)),S=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(s){let k=function(j){if(S.paused||!m)return;const L=j.target;m.contains(L)?b.current=L:mr(b.current,{select:!0})},C=function(j){if(S.paused||!m)return;const L=j.relatedTarget;L!==null&&(m.contains(L)||mr(b.current,{select:!0}))},T=function(j){if(document.activeElement===document.body)for(const $ of j)$.removedNodes.length>0&&mr(m)};document.addEventListener("focusin",k),document.addEventListener("focusout",C);const N=new MutationObserver(T);return m&&N.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",k),document.removeEventListener("focusout",C),N.disconnect()}}},[s,m,S.paused]),g.useEffect(()=>{if(m){gh.add(S);const k=document.activeElement;if(!m.contains(k)){const T=new CustomEvent(hu,ph);m.addEventListener(hu,y),m.dispatchEvent(T),T.defaultPrevented||(vE(SE(tv(m)),{select:!0}),document.activeElement===k&&mr(m))}return()=>{m.removeEventListener(hu,y),setTimeout(()=>{const T=new CustomEvent(gu,ph);m.addEventListener(gu,x),m.dispatchEvent(T),T.defaultPrevented||mr(k??document.body,{select:!0}),m.removeEventListener(gu,x),gh.remove(S)},0)}}},[m,y,x,S]);const E=g.useCallback(k=>{if(!i&&!s||S.paused)return;const C=k.key==="Tab"&&!k.altKey&&!k.ctrlKey&&!k.metaKey,T=document.activeElement;if(C&&T){const N=k.currentTarget,[j,L]=xE(N);j&&L?!k.shiftKey&&T===L?(k.preventDefault(),i&&mr(j,{select:!0})):k.shiftKey&&T===j&&(k.preventDefault(),i&&mr(L,{select:!0})):T===N&&k.preventDefault()}},[i,s,S.paused]);return c.jsx(je.div,{tabIndex:-1,...f,ref:v,onKeyDown:E})});ev.displayName=yE;function vE(n,{select:r=!1}={}){const i=document.activeElement;for(const s of n)if(mr(s,{select:r}),document.activeElement!==i)return}function xE(n){const r=tv(n),i=hh(r,n),s=hh(r.reverse(),n);return[i,s]}function tv(n){const r=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const l=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||l?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function hh(n,r){for(const i of n)if(!wE(i,{upTo:r}))return i}function wE(n,{upTo:r}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(r!==void 0&&n===r)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function bE(n){return n instanceof HTMLInputElement&&"select"in n}function mr(n,{select:r=!1}={}){if(n&&n.focus){const i=document.activeElement;n.focus({preventScroll:!0}),n!==i&&bE(n)&&r&&n.select()}}var gh=kE();function kE(){let n=[];return{add(r){const i=n[0];r!==i&&(i==null||i.pause()),n=yh(n,r),n.unshift(r)},remove(r){var i;n=yh(n,r),(i=n[0])==null||i.resume()}}}function yh(n,r){const i=[...n],s=i.indexOf(r);return s!==-1&&i.splice(s,1),i}function SE(n){return n.filter(r=>r.tagName!=="A")}function CE(n,r){return g.useReducer((i,s)=>r[i][s]??i,n)}var cl=n=>{const{present:r,children:i}=n,s=EE(r),l=typeof i=="function"?i({present:s.isPresent}):g.Children.only(i),u=Be(s.ref,RE(l));return typeof i=="function"||s.isPresent?g.cloneElement(l,{ref:u}):null};cl.displayName="Presence";function EE(n){const[r,i]=g.useState(),s=g.useRef({}),l=g.useRef(n),u=g.useRef("none"),f=n?"mounted":"unmounted",[m,h]=CE(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const y=ka(s.current);u.current=m==="mounted"?y:"none"},[m]),Rt(()=>{const y=s.current,x=l.current;if(x!==n){const v=u.current,S=ka(y);n?h("MOUNT"):S==="none"||(y==null?void 0:y.display)==="none"?h("UNMOUNT"):h(x&&v!==S?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),Rt(()=>{if(r){let y;const x=r.ownerDocument.defaultView??window,b=S=>{const k=ka(s.current).includes(S.animationName);if(S.target===r&&k&&(h("ANIMATION_END"),!l.current)){const C=r.style.animationFillMode;r.style.animationFillMode="forwards",y=x.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=C)})}},v=S=>{S.target===r&&(u.current=ka(s.current))};return r.addEventListener("animationstart",v),r.addEventListener("animationcancel",b),r.addEventListener("animationend",b),()=>{x.clearTimeout(y),r.removeEventListener("animationstart",v),r.removeEventListener("animationcancel",b),r.removeEventListener("animationend",b)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:g.useCallback(y=>{y&&(s.current=getComputedStyle(y)),i(y)},[])}}function ka(n){return(n==null?void 0:n.animationName)||"none"}function RE(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}var yu=0;function PE(){g.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??vh()),document.body.insertAdjacentElement("beforeend",n[1]??vh()),yu++,()=>{yu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),yu--}},[])}function vh(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var xn=function(){return xn=Object.assign||function(r){for(var i,s=1,l=arguments.length;s<l;s++){i=arguments[s];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(r[u]=i[u])}return r},xn.apply(this,arguments)};function nv(n,r){var i={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&r.indexOf(s)<0&&(i[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(n);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(n,s[l])&&(i[s[l]]=n[s[l]]);return i}function TE(n,r,i){if(i||arguments.length===2)for(var s=0,l=r.length,u;s<l;s++)(u||!(s in r))&&(u||(u=Array.prototype.slice.call(r,0,s)),u[s]=r[s]);return n.concat(u||Array.prototype.slice.call(r))}var Ia="right-scroll-bar-position",ja="width-before-scroll-bar",AE="with-scroll-bars-hidden",NE="--removed-body-scroll-bar-size";function vu(n,r){return typeof n=="function"?n(r):n&&(n.current=r),n}function IE(n,r){var i=g.useState(function(){return{value:n,callback:r,facade:{get current(){return i.value},set current(s){var l=i.value;l!==s&&(i.value=s,i.callback(s,l))}}}})[0];return i.callback=r,i.facade}var jE=typeof window<"u"?g.useLayoutEffect:g.useEffect,xh=new WeakMap;function ME(n,r){var i=IE(null,function(s){return n.forEach(function(l){return vu(l,s)})});return jE(function(){var s=xh.get(i);if(s){var l=new Set(s),u=new Set(n),f=i.current;l.forEach(function(m){u.has(m)||vu(m,null)}),u.forEach(function(m){l.has(m)||vu(m,f)})}xh.set(i,n)},[n]),i}function LE(n){return n}function DE(n,r){r===void 0&&(r=LE);var i=[],s=!1,l={read:function(){if(s)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:n},useMedium:function(u){var f=r(u,s);return i.push(f),function(){i=i.filter(function(m){return m!==f})}},assignSyncMedium:function(u){for(s=!0;i.length;){var f=i;i=[],f.forEach(u)}i={push:function(m){return u(m)},filter:function(){return i}}},assignMedium:function(u){s=!0;var f=[];if(i.length){var m=i;i=[],m.forEach(u),f=i}var h=function(){var x=f;f=[],x.forEach(u)},y=function(){return Promise.resolve().then(h)};y(),i={push:function(x){f.push(x),y()},filter:function(x){return f=f.filter(x),i}}}};return l}function OE(n){n===void 0&&(n={});var r=DE(null);return r.options=xn({async:!0,ssr:!1},n),r}var rv=function(n){var r=n.sideCar,i=nv(n,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var s=r.read();if(!s)throw new Error("Sidecar medium not found");return g.createElement(s,xn({},i))};rv.isSideCarExport=!0;function FE(n,r){return n.useMedium(r),rv}var iv=OE(),xu=function(){},ul=g.forwardRef(function(n,r){var i=g.useRef(null),s=g.useState({onScrollCapture:xu,onWheelCapture:xu,onTouchMoveCapture:xu}),l=s[0],u=s[1],f=n.forwardProps,m=n.children,h=n.className,y=n.removeScrollBar,x=n.enabled,b=n.shards,v=n.sideCar,S=n.noIsolation,E=n.inert,k=n.allowPinchZoom,C=n.as,T=C===void 0?"div":C,N=n.gapMode,j=nv(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),L=v,$=ME([i,r]),H=xn(xn({},j),l);return g.createElement(g.Fragment,null,x&&g.createElement(L,{sideCar:iv,removeScrollBar:y,shards:b,noIsolation:S,inert:E,setCallbacks:u,allowPinchZoom:!!k,lockRef:i,gapMode:N}),f?g.cloneElement(g.Children.only(m),xn(xn({},H),{ref:$})):g.createElement(T,xn({},H,{className:h,ref:$}),m))});ul.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ul.classNames={fullWidth:ja,zeroRight:Ia};var $E=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function _E(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var r=$E();return r&&n.setAttribute("nonce",r),n}function zE(n,r){n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}function BE(n){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(n)}var HE=function(){var n=0,r=null;return{add:function(i){n==0&&(r=_E())&&(zE(r,i),BE(r)),n++},remove:function(){n--,!n&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},WE=function(){var n=HE();return function(r,i){g.useEffect(function(){return n.add(r),function(){n.remove()}},[r&&i])}},ov=function(){var n=WE(),r=function(i){var s=i.styles,l=i.dynamic;return n(s,l),null};return r},UE={left:0,top:0,right:0,gap:0},wu=function(n){return parseInt(n||"",10)||0},qE=function(n){var r=window.getComputedStyle(document.body),i=r[n==="padding"?"paddingLeft":"marginLeft"],s=r[n==="padding"?"paddingTop":"marginTop"],l=r[n==="padding"?"paddingRight":"marginRight"];return[wu(i),wu(s),wu(l)]},VE=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return UE;var r=qE(n),i=document.documentElement.clientWidth,s=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,s-i+r[2]-r[0])}},YE=ov(),Ni="data-scroll-locked",GE=function(n,r,i,s){var l=n.left,u=n.top,f=n.right,m=n.gap;return i===void 0&&(i="margin"),`
  .`.concat(AE,` {
   overflow: hidden `).concat(s,`;
   padding-right: `).concat(m,"px ").concat(s,`;
  }
  body[`).concat(Ni,`] {
    overflow: hidden `).concat(s,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(s,";"),i==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m,"px ").concat(s,`;
    `),i==="padding"&&"padding-right: ".concat(m,"px ").concat(s,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ia,` {
    right: `).concat(m,"px ").concat(s,`;
  }
  
  .`).concat(ja,` {
    margin-right: `).concat(m,"px ").concat(s,`;
  }
  
  .`).concat(Ia," .").concat(Ia,` {
    right: 0 `).concat(s,`;
  }
  
  .`).concat(ja," .").concat(ja,` {
    margin-right: 0 `).concat(s,`;
  }
  
  body[`).concat(Ni,`] {
    `).concat(NE,": ").concat(m,`px;
  }
`)},wh=function(){var n=parseInt(document.body.getAttribute(Ni)||"0",10);return isFinite(n)?n:0},QE=function(){g.useEffect(function(){return document.body.setAttribute(Ni,(wh()+1).toString()),function(){var n=wh()-1;n<=0?document.body.removeAttribute(Ni):document.body.setAttribute(Ni,n.toString())}},[])},KE=function(n){var r=n.noRelative,i=n.noImportant,s=n.gapMode,l=s===void 0?"margin":s;QE();var u=g.useMemo(function(){return VE(l)},[l]);return g.createElement(YE,{styles:GE(u,!r,l,i?"":"!important")})},Vu=!1;if(typeof window<"u")try{var Sa=Object.defineProperty({},"passive",{get:function(){return Vu=!0,!0}});window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{Vu=!1}var Ci=Vu?{passive:!1}:!1,XE=function(n){return n.tagName==="TEXTAREA"},sv=function(n,r){if(!(n instanceof Element))return!1;var i=window.getComputedStyle(n);return i[r]!=="hidden"&&!(i.overflowY===i.overflowX&&!XE(n)&&i[r]==="visible")},JE=function(n){return sv(n,"overflowY")},ZE=function(n){return sv(n,"overflowX")},bh=function(n,r){var i=r.ownerDocument,s=r;do{typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&(s=s.host);var l=av(n,s);if(l){var u=lv(n,s),f=u[1],m=u[2];if(f>m)return!0}s=s.parentNode}while(s&&s!==i.body);return!1},eR=function(n){var r=n.scrollTop,i=n.scrollHeight,s=n.clientHeight;return[r,i,s]},tR=function(n){var r=n.scrollLeft,i=n.scrollWidth,s=n.clientWidth;return[r,i,s]},av=function(n,r){return n==="v"?JE(r):ZE(r)},lv=function(n,r){return n==="v"?eR(r):tR(r)},nR=function(n,r){return n==="h"&&r==="rtl"?-1:1},rR=function(n,r,i,s,l){var u=nR(n,window.getComputedStyle(r).direction),f=u*s,m=i.target,h=r.contains(m),y=!1,x=f>0,b=0,v=0;do{var S=lv(n,m),E=S[0],k=S[1],C=S[2],T=k-C-u*E;(E||T)&&av(n,m)&&(b+=T,v+=E),m instanceof ShadowRoot?m=m.host:m=m.parentNode}while(!h&&m!==document.body||h&&(r.contains(m)||r===m));return(x&&Math.abs(b)<1||!x&&Math.abs(v)<1)&&(y=!0),y},Ca=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},kh=function(n){return[n.deltaX,n.deltaY]},Sh=function(n){return n&&"current"in n?n.current:n},iR=function(n,r){return n[0]===r[0]&&n[1]===r[1]},oR=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},sR=0,Ei=[];function aR(n){var r=g.useRef([]),i=g.useRef([0,0]),s=g.useRef(),l=g.useState(sR++)[0],u=g.useState(ov)[0],f=g.useRef(n);g.useEffect(function(){f.current=n},[n]),g.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(l));var k=TE([n.lockRef.current],(n.shards||[]).map(Sh),!0).filter(Boolean);return k.forEach(function(C){return C.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),k.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(l))})}}},[n.inert,n.lockRef.current,n.shards]);var m=g.useCallback(function(k,C){if("touches"in k&&k.touches.length===2||k.type==="wheel"&&k.ctrlKey)return!f.current.allowPinchZoom;var T=Ca(k),N=i.current,j="deltaX"in k?k.deltaX:N[0]-T[0],L="deltaY"in k?k.deltaY:N[1]-T[1],$,H=k.target,z=Math.abs(j)>Math.abs(L)?"h":"v";if("touches"in k&&z==="h"&&H.type==="range")return!1;var Y=bh(z,H);if(!Y)return!0;if(Y?$=z:($=z==="v"?"h":"v",Y=bh(z,H)),!Y)return!1;if(!s.current&&"changedTouches"in k&&(j||L)&&(s.current=$),!$)return!0;var q=s.current||$;return rR(q,C,k,q==="h"?j:L)},[]),h=g.useCallback(function(k){var C=k;if(!(!Ei.length||Ei[Ei.length-1]!==u)){var T="deltaY"in C?kh(C):Ca(C),N=r.current.filter(function($){return $.name===C.type&&($.target===C.target||C.target===$.shadowParent)&&iR($.delta,T)})[0];if(N&&N.should){C.cancelable&&C.preventDefault();return}if(!N){var j=(f.current.shards||[]).map(Sh).filter(Boolean).filter(function($){return $.contains(C.target)}),L=j.length>0?m(C,j[0]):!f.current.noIsolation;L&&C.cancelable&&C.preventDefault()}}},[]),y=g.useCallback(function(k,C,T,N){var j={name:k,delta:C,target:T,should:N,shadowParent:lR(T)};r.current.push(j),setTimeout(function(){r.current=r.current.filter(function(L){return L!==j})},1)},[]),x=g.useCallback(function(k){i.current=Ca(k),s.current=void 0},[]),b=g.useCallback(function(k){y(k.type,kh(k),k.target,m(k,n.lockRef.current))},[]),v=g.useCallback(function(k){y(k.type,Ca(k),k.target,m(k,n.lockRef.current))},[]);g.useEffect(function(){return Ei.push(u),n.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:v}),document.addEventListener("wheel",h,Ci),document.addEventListener("touchmove",h,Ci),document.addEventListener("touchstart",x,Ci),function(){Ei=Ei.filter(function(k){return k!==u}),document.removeEventListener("wheel",h,Ci),document.removeEventListener("touchmove",h,Ci),document.removeEventListener("touchstart",x,Ci)}},[]);var S=n.removeScrollBar,E=n.inert;return g.createElement(g.Fragment,null,E?g.createElement(u,{styles:oR(l)}):null,S?g.createElement(KE,{gapMode:n.gapMode}):null)}function lR(n){for(var r=null;n!==null;)n instanceof ShadowRoot&&(r=n.host,n=n.host),n=n.parentNode;return r}const cR=FE(iv,aR);var cv=g.forwardRef(function(n,r){return g.createElement(ul,xn({},n,{ref:r,sideCar:cR}))});cv.classNames=ul.classNames;var uR=function(n){if(typeof document>"u")return null;var r=Array.isArray(n)?n[0]:n;return r.ownerDocument.body},Ri=new WeakMap,Ea=new WeakMap,Ra={},bu=0,uv=function(n){return n&&(n.host||uv(n.parentNode))},dR=function(n,r){return r.map(function(i){if(n.contains(i))return i;var s=uv(i);return s&&n.contains(s)?s:(console.error("aria-hidden",i,"in not contained inside",n,". Doing nothing"),null)}).filter(function(i){return!!i})},fR=function(n,r,i,s){var l=dR(r,Array.isArray(n)?n:[n]);Ra[i]||(Ra[i]=new WeakMap);var u=Ra[i],f=[],m=new Set,h=new Set(l),y=function(b){!b||m.has(b)||(m.add(b),y(b.parentNode))};l.forEach(y);var x=function(b){!b||h.has(b)||Array.prototype.forEach.call(b.children,function(v){if(m.has(v))x(v);else try{var S=v.getAttribute(s),E=S!==null&&S!=="false",k=(Ri.get(v)||0)+1,C=(u.get(v)||0)+1;Ri.set(v,k),u.set(v,C),f.push(v),k===1&&E&&Ea.set(v,!0),C===1&&v.setAttribute(i,"true"),E||v.setAttribute(s,"true")}catch(T){console.error("aria-hidden: cannot operate on ",v,T)}})};return x(r),m.clear(),bu++,function(){f.forEach(function(b){var v=Ri.get(b)-1,S=u.get(b)-1;Ri.set(b,v),u.set(b,S),v||(Ea.has(b)||b.removeAttribute(s),Ea.delete(b)),S||b.removeAttribute(i)}),bu--,bu||(Ri=new WeakMap,Ri=new WeakMap,Ea=new WeakMap,Ra={})}},mR=function(n,r,i){i===void 0&&(i="data-aria-hidden");var s=Array.from(Array.isArray(n)?n:[n]),l=uR(n);return l?(s.push.apply(s,Array.from(l.querySelectorAll("[aria-live]"))),fR(s,l,i,"aria-hidden")):function(){return null}},Ed="Dialog",[dv,r2]=hE(Ed),[pR,cn]=dv(Ed),fv=n=>{const{__scopeDialog:r,children:i,open:s,defaultOpen:l,onOpenChange:u,modal:f=!0}=n,m=g.useRef(null),h=g.useRef(null),[y=!1,x]=Vh({prop:s,defaultProp:l,onChange:u});return c.jsx(pR,{scope:r,triggerRef:m,contentRef:h,contentId:uu(),titleId:uu(),descriptionId:uu(),open:y,onOpenChange:x,onOpenToggle:g.useCallback(()=>x(b=>!b),[x]),modal:f,children:i})};fv.displayName=Ed;var mv="DialogTrigger",pv=g.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=cn(mv,i),u=Be(r,l.triggerRef);return c.jsx(je.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":Td(l.open),...s,ref:u,onClick:Ee(n.onClick,l.onOpenToggle)})});pv.displayName=mv;var Rd="DialogPortal",[hR,hv]=dv(Rd,{forceMount:void 0}),gv=n=>{const{__scopeDialog:r,forceMount:i,children:s,container:l}=n,u=cn(Rd,r);return c.jsx(hR,{scope:r,forceMount:i,children:g.Children.map(s,f=>c.jsx(cl,{present:i||u.open,children:c.jsx(Qg,{asChild:!0,container:l,children:f})}))})};gv.displayName=Rd;var qa="DialogOverlay",yv=g.forwardRef((n,r)=>{const i=hv(qa,n.__scopeDialog),{forceMount:s=i.forceMount,...l}=n,u=cn(qa,n.__scopeDialog);return u.modal?c.jsx(cl,{present:s||u.open,children:c.jsx(gR,{...l,ref:r})}):null});yv.displayName=qa;var gR=g.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=cn(qa,i);return c.jsx(cv,{as:zi,allowPinchZoom:!0,shards:[l.contentRef],children:c.jsx(je.div,{"data-state":Td(l.open),...s,ref:r,style:{pointerEvents:"auto",...s.style}})})}),Zr="DialogContent",vv=g.forwardRef((n,r)=>{const i=hv(Zr,n.__scopeDialog),{forceMount:s=i.forceMount,...l}=n,u=cn(Zr,n.__scopeDialog);return c.jsx(cl,{present:s||u.open,children:u.modal?c.jsx(yR,{...l,ref:r}):c.jsx(vR,{...l,ref:r})})});vv.displayName=Zr;var yR=g.forwardRef((n,r)=>{const i=cn(Zr,n.__scopeDialog),s=g.useRef(null),l=Be(r,i.contentRef,s);return g.useEffect(()=>{const u=s.current;if(u)return mR(u)},[]),c.jsx(xv,{...n,ref:l,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Ee(n.onCloseAutoFocus,u=>{var f;u.preventDefault(),(f=i.triggerRef.current)==null||f.focus()}),onPointerDownOutside:Ee(n.onPointerDownOutside,u=>{const f=u.detail.originalEvent,m=f.button===0&&f.ctrlKey===!0;(f.button===2||m)&&u.preventDefault()}),onFocusOutside:Ee(n.onFocusOutside,u=>u.preventDefault())})}),vR=g.forwardRef((n,r)=>{const i=cn(Zr,n.__scopeDialog),s=g.useRef(!1),l=g.useRef(!1);return c.jsx(xv,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:u=>{var f,m;(f=n.onCloseAutoFocus)==null||f.call(n,u),u.defaultPrevented||(s.current||(m=i.triggerRef.current)==null||m.focus(),u.preventDefault()),s.current=!1,l.current=!1},onInteractOutside:u=>{var h,y;(h=n.onInteractOutside)==null||h.call(n,u),u.defaultPrevented||(s.current=!0,u.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const f=u.target;((y=i.triggerRef.current)==null?void 0:y.contains(f))&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&l.current&&u.preventDefault()}})}),xv=g.forwardRef((n,r)=>{const{__scopeDialog:i,trapFocus:s,onOpenAutoFocus:l,onCloseAutoFocus:u,...f}=n,m=cn(Zr,i),h=g.useRef(null),y=Be(r,h);return PE(),c.jsxs(c.Fragment,{children:[c.jsx(ev,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:l,onUnmountAutoFocus:u,children:c.jsx(rd,{role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":Td(m.open),...f,ref:y,onDismiss:()=>m.onOpenChange(!1)})}),c.jsxs(c.Fragment,{children:[c.jsx(xR,{titleId:m.titleId}),c.jsx(bR,{contentRef:h,descriptionId:m.descriptionId})]})]})}),Pd="DialogTitle",wv=g.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=cn(Pd,i);return c.jsx(je.h2,{id:l.titleId,...s,ref:r})});wv.displayName=Pd;var bv="DialogDescription",kv=g.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=cn(bv,i);return c.jsx(je.p,{id:l.descriptionId,...s,ref:r})});kv.displayName=bv;var Sv="DialogClose",Cv=g.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=cn(Sv,i);return c.jsx(je.button,{type:"button",...s,ref:r,onClick:Ee(n.onClick,()=>l.onOpenChange(!1))})});Cv.displayName=Sv;function Td(n){return n?"open":"closed"}var Ev="DialogTitleWarning",[i2,Rv]=pE(Ev,{contentName:Zr,titleName:Pd,docsSlug:"dialog"}),xR=({titleId:n})=>{const r=Rv(Ev),i=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return g.useEffect(()=>{n&&(document.getElementById(n)||console.error(i))},[i,n]),null},wR="DialogDescriptionWarning",bR=({contentRef:n,descriptionId:r})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rv(wR).contentName}}.`;return g.useEffect(()=>{var u;const l=(u=n.current)==null?void 0:u.getAttribute("aria-describedby");r&&l&&(document.getElementById(r)||console.warn(s))},[s,n,r]),null},Pv=fv,Tv=pv,Av=gv,dl=yv,fl=vv,ml=wv,pl=kv,Nv=Cv;const Iv=Pv,kR=Tv,SR=Av,jv=g.forwardRef(({className:n,...r},i)=>c.jsx(dl,{ref:i,className:ye("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r}));jv.displayName=dl.displayName;const Ad=g.forwardRef(({className:n,children:r,...i},s)=>c.jsxs(SR,{children:[c.jsx(jv,{}),c.jsxs(fl,{ref:s,className:ye("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...i,children:[r,c.jsxs(Nv,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[c.jsx(Xa,{className:"h-4 w-4"}),c.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Ad.displayName=fl.displayName;const Nd=({className:n,...r})=>c.jsx("div",{className:ye("flex flex-col space-y-1.5 text-center sm:text-left",n),...r});Nd.displayName="DialogHeader";const Id=g.forwardRef(({className:n,...r},i)=>c.jsx(ml,{ref:i,className:ye("text-lg font-semibold leading-none tracking-tight",n),...r}));Id.displayName=ml.displayName;const jd=g.forwardRef(({className:n,...r},i)=>c.jsx(pl,{ref:i,className:ye("text-sm text-muted-foreground",n),...r}));jd.displayName=pl.displayName;function CR({className:n}){const[r,i]=g.useState(!1),[s,l]=g.useState([{id:"1",content:"Hi! I'm the THRIVE money tutor. Ask me anything about saving, budgeting, credit, or investing. No question is too small.",sender:"bot",timestamp:new Date}]),[u,f]=g.useState(""),[m,h]=g.useState(!1),y=g.useRef(null),x=()=>{if(y.current){const E=y.current.querySelector("[data-radix-scroll-area-viewport]");E&&(E.scrollTop=E.scrollHeight)}};g.useEffect(()=>{x()},[s]);const b=async()=>{if(!u.trim()||m)return;const E={id:Date.now().toString(),content:u,sender:"user",timestamp:new Date};l(k=>[...k,E]),f(""),h(!0);try{const k=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:u})});if(!k.ok)throw new Error("Failed to get AI response");const T=(await k.json()).response||"I'm sorry, I couldn't process your request right now.",N={id:(Date.now()+1).toString(),content:T,sender:"bot",timestamp:new Date};l(j=>[...j,N])}catch(k){console.error("Chat error:",k);const C={id:(Date.now()+1).toString(),content:"I'm sorry, I'm having trouble connecting right now. Please try again later, or explore our courses to learn more about personal finance!",sender:"bot",timestamp:new Date};l(T=>[...T,C])}finally{h(!1)}},v=E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),b())},S=E=>E.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return c.jsx(c.Fragment,{children:c.jsxs(Iv,{open:r,onOpenChange:i,children:[c.jsx(kR,{asChild:!0,children:c.jsx(Oe,{size:"lg",className:ye("fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all",n),"aria-label":"Ask the THRIVE money tutor",children:c.jsx(yg,{className:"h-6 w-6"})})}),c.jsxs(Ad,{className:"sm:max-w-md h-[600px] flex flex-col p-0",children:[c.jsxs(Nd,{className:"p-6 pb-0",children:[c.jsxs(Id,{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 bg-primary rounded-full flex items-center justify-center",children:c.jsx(au,{className:"w-5 h-5 text-white"})}),"THRIVE Money Tutor",c.jsx(Zw,{className:"w-4 h-4 text-yellow-500"})]}),c.jsx(jd,{children:"Ask about saving, budgeting, credit, or investing."})]}),c.jsxs("div",{className:"flex-1 flex flex-col min-h-0",children:[c.jsx(Jy,{className:"flex-1 px-6",ref:y,children:c.jsxs("div",{className:"space-y-4 py-4",children:[s.map(E=>c.jsxs("div",{className:ye("flex gap-3 items-start",E.sender==="user"&&"flex-row-reverse"),children:[c.jsx("div",{className:ye("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",E.sender==="user"?"bg-primary text-white":"bg-gray-200 text-gray-600"),children:E.sender==="user"?c.jsx(ib,{className:"w-4 h-4"}):c.jsx(au,{className:"w-4 h-4"})}),c.jsxs("div",{className:ye("max-w-[80%] rounded-lg p-3 text-sm",E.sender==="user"?"bg-primary text-white":"bg-gray-100 text-gray-900"),children:[c.jsx("p",{className:"whitespace-pre-wrap",children:E.content}),c.jsx("p",{className:ye("text-xs mt-1 opacity-70",E.sender==="user"?"text-primary-foreground":"text-gray-500"),children:S(E.timestamp)})]})]},E.id)),m&&c.jsxs("div",{className:"flex gap-3 items-start",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center",children:c.jsx(au,{className:"w-4 h-4"})}),c.jsx("div",{className:"bg-gray-100 rounded-lg p-3",children:c.jsx(qw,{className:"w-4 h-4 animate-spin text-gray-500"})})]})]})}),c.jsxs("div",{className:"border-t p-4",children:[c.jsxs("div",{className:"flex gap-2",children:[c.jsx($y,{placeholder:"Ask me about budgeting, investing, credit...",value:u,onChange:E=>f(E.target.value),onKeyPress:v,disabled:m,className:"flex-1"}),c.jsx(Oe,{onClick:b,disabled:!u.trim()||m,size:"icon",children:c.jsx(Xw,{className:"w-4 h-4"})})]}),c.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Powered by OpenAI GPT-3.5. Responses are for educational purposes."})]})]})]})]})})}const Ch=/^\s*[•▪◦]\s+/,Eh=/^\s*\d+\.\s+/,ER=/^\*\*([^*]+)\*\*:?\s*$/;function RR(n){const r=[],i=n.split(`
`);for(const s of i){const l=s.trimEnd();if(!l.trim())continue;const u=r[r.length-1];if(Ch.test(l)){const m=l.replace(Ch,"");(u==null?void 0:u.kind)==="ul"?u.items.push(m):r.push({kind:"ul",items:[m]});continue}if(Eh.test(l)){const m=l.replace(Eh,"");(u==null?void 0:u.kind)==="ol"?u.items.push(m):r.push({kind:"ol",items:[m]});continue}const f=l.trim().match(ER);if(f){r.push({kind:"h",text:f[1]});continue}r.push({kind:"p",text:l.trim()})}return r}function ku(n){return n.split(/(\*\*[^*]+\*\*)/g).map((i,s)=>i.startsWith("**")&&i.endsWith("**")?c.jsx("strong",{className:"font-extrabold text-ink",children:i.slice(2,-2)},s):c.jsx(g.Fragment,{children:i},s))}function PR({content:n}){const r=RR(n);return c.jsx("div",{className:"space-y-4 text-[17px] leading-relaxed text-ink-muted",children:r.map((i,s)=>{switch(i.kind){case"h":return c.jsxs("h4",{className:"pt-2 text-lg font-extrabold text-ink flex items-center gap-2",children:[c.jsx("span",{"aria-hidden":"true",className:"h-2 w-2 rounded-full bg-sun flex-none"}),i.text]},s);case"ul":return c.jsx("ul",{className:"space-y-2 rounded-2xl bg-mint-soft p-4",children:i.items.map((l,u)=>c.jsxs("li",{className:"flex gap-3",children:[c.jsx("span",{"aria-hidden":"true",className:"mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-brand"}),c.jsx("span",{children:ku(l)})]},u))},s);case"ol":return c.jsx("ol",{className:"space-y-2 rounded-2xl bg-mint-soft p-4",children:i.items.map((l,u)=>c.jsxs("li",{className:"flex gap-3",children:[c.jsx("span",{"aria-hidden":"true",className:"flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-black text-white",children:u+1}),c.jsx("span",{children:ku(l)})]},u))},s);default:return c.jsx("p",{children:ku(i.text)},s)}})})}function Mv({quiz:n,onComplete:r}){var Y;const[i,s]=g.useState(0),[l,u]=g.useState(new Array(n.questions.length).fill(-1)),[f,m]=g.useState(!1),[h,y]=g.useState(null),[x,b]=g.useState(!1),[v,S]=g.useState(null);g.useEffect(()=>{y(wd())},[]);const E=n.questions[i],k=i===n.questions.length-1,C=l[i],T=q=>{const G=[...l];G[i]=q,u(G)},N=()=>{k?L():s(i+1)},j=()=>{i>0&&s(i-1)},L=()=>{if(!h)return;const q=fh(n,l),G=h.currentLevel,re=QC(h,n.id,q.xpEarned);y(re),re.currentLevel>G&&(S(re.currentLevel),b(!0)),m(!0)},$=()=>{s(0),u(new Array(n.questions.length).fill(-1)),m(!1)},H=q=>{switch(q){case"Easy":return"bg-green-100 text-green-700";case"Medium":return"bg-yellow-100 text-yellow-700";case"Hard":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}},z=q=>{switch(q){case"excellent":return"text-green-600";case"good":return"text-yellow-600";case"needsImprovement":return"text-red-600";default:return"text-gray-600"}};if(f){const q=fh(n,l),G=h?Oy(h.totalXP):null;return c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs(Mt,{className:"text-center",children:[c.jsxs(za,{children:[c.jsx("div",{className:"flex justify-center mb-4",children:q.masteryLevel==="excellent"?c.jsx(Pi,{className:"w-16 h-16 text-yellow-500"}):q.masteryLevel==="good"?c.jsx(ed,{className:"w-16 h-16 text-blue-500"}):c.jsx(Tu,{className:"w-16 h-16 text-gray-500"})}),c.jsx(Ba,{className:"text-3xl mb-2",children:"Quiz Complete!"}),c.jsxs("div",{className:"text-6xl font-bold mb-2",children:[q.score,"/",n.questions.length]}),c.jsxs("div",{className:"text-xl text-gray-600 mb-4",children:[q.percentage,"% Correct"]}),c.jsx(wr,{className:ye("text-lg px-4 py-2",z(q.masteryLevel)),children:q.masteryLevel==="excellent"?"Excellent!":q.masteryLevel==="good"?"Good Work!":"Keep Learning!"})]}),c.jsxs(Lt,{className:"space-y-6",children:[c.jsx("p",{className:"text-lg",children:q.message}),c.jsxs("div",{className:"bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-6",children:[c.jsxs("div",{className:"text-lg font-semibold mb-2",children:["XP Earned: +",q.xpEarned]}),G&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-sm",children:[c.jsxs("span",{children:[G.currentLevel.badge," Level"," ",G.currentLevel.level,": ",G.currentLevel.title]}),c.jsxs("span",{children:[h==null?void 0:h.totalXP," /"," ",((Y=G.nextLevel)==null?void 0:Y.minXP)||"Max Level"]})]}),c.jsx(Ui,{value:G.progressToNext,className:"h-3","aria-label":"Progress to next level"}),G.nextLevel&&c.jsxs("div",{className:"text-sm text-gray-600",children:[G.xpNeededForNext," XP to ",G.nextLevel.badge," ",G.nextLevel.title]})]})]}),c.jsxs("div",{className:"flex gap-4 justify-center",children:[c.jsxs(Oe,{onClick:$,variant:"outline",size:"lg",children:[c.jsx(Tu,{className:"mr-2 w-5 h-5"}),"Retake Quiz"]}),c.jsxs(Oe,{onClick:r,size:"lg",children:["Continue Learning",c.jsx(Ot,{className:"ml-2 w-5 h-5"})]})]}),c.jsxs("div",{className:"mt-8 text-left",children:[c.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Review Answers"}),c.jsx("div",{className:"space-y-4",children:n.questions.map((re,te)=>c.jsx(Mt,{className:ye("border-l-4",l[te]===re.correctAnswer?"border-l-green-500":"border-l-red-500"),children:c.jsxs(Lt,{className:"pt-4",children:[c.jsxs("div",{className:"flex justify-between items-start mb-2",children:[c.jsxs("h4",{className:"font-medium",children:[te+1,". ",re.question]}),c.jsx(wr,{className:H(re.difficulty),children:re.difficulty})]}),c.jsx("div",{className:"space-y-2",children:re.options.map((oe,J)=>c.jsx("div",{className:ye("p-2 rounded text-sm",J===re.correctAnswer?"bg-green-100 text-green-800":J===l[te]&&l[te]!==re.correctAnswer?"bg-red-100 text-red-800":"bg-gray-50"),children:c.jsxs("div",{className:"flex items-center gap-2",children:[J===re.correctAnswer?c.jsx(hg,{className:"w-4 h-4 text-green-600"}):J===l[te]&&l[te]!==re.correctAnswer?c.jsx(_w,{className:"w-4 h-4 text-red-600"}):null,oe]})},J))})]})},re.id))})]})]})]}),c.jsx(Iv,{open:x,onOpenChange:b,children:c.jsxs(Ad,{className:"sm:max-w-md",children:[c.jsxs(Nd,{children:[c.jsx(Id,{className:"text-center",children:"Level Up! 🎉"}),c.jsx(jd,{className:"text-center",children:"Congratulations! You've reached a new level!"})]}),c.jsxs("div",{className:"text-center py-6",children:[c.jsx("div",{className:"text-6xl mb-4",children:G==null?void 0:G.currentLevel.badge}),c.jsxs("div",{className:"text-2xl font-bold mb-2",children:["Level ",v,": ",G==null?void 0:G.currentLevel.title]}),c.jsx("p",{className:"text-gray-600",children:G==null?void 0:G.currentLevel.description})]}),c.jsx(Oe,{onClick:()=>b(!1),className:"w-full",size:"lg",children:"Awesome!"})]})})]})}return c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsxs("h1",{className:"text-3xl font-bold",children:[n.title," Quiz"]}),c.jsxs(wr,{className:"text-lg px-3 py-1",children:[i+1," of ",n.questions.length]})]}),c.jsx(Ui,{"aria-label":"Quiz progress",value:(i+1)/n.questions.length*100,className:"h-3"})]}),c.jsxs(Mt,{className:"mb-8",children:[c.jsx(za,{children:c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsx(Ba,{className:"text-xl flex-1",children:E.question}),c.jsx(wr,{className:H(E.difficulty),children:E.difficulty})]})}),c.jsx(Lt,{children:c.jsx("div",{className:"space-y-3",children:E.options.map((q,G)=>c.jsx("button",{onClick:()=>T(G),className:ye("w-full p-4 text-left rounded-lg border-2 transition-all hover:bg-gray-50",C===G?"border-primary bg-primary/5":"border-gray-200"),children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:ye("w-6 h-6 rounded-full border-2 flex items-center justify-center",C===G?"border-primary bg-primary text-white":"border-gray-300"),children:C===G&&c.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})}),c.jsx("span",{className:"text-lg",children:q})]})},G))})})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx(Oe,{onClick:j,disabled:i===0,variant:"outline",size:"lg",children:"Previous"}),c.jsxs(Oe,{onClick:N,disabled:C===-1,size:"lg",children:[k?"Finish Quiz":"Next",c.jsx(Ot,{className:"ml-2 w-5 h-5"})]})]})]})}const TR=Pv,AR=Tv,NR=Av,Lv=g.forwardRef(({className:n,...r},i)=>c.jsx(dl,{className:ye("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r,ref:i}));Lv.displayName=dl.displayName;const IR=Qa("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Dv=g.forwardRef(({side:n="right",className:r,children:i,...s},l)=>c.jsxs(NR,{children:[c.jsx(Lv,{}),c.jsxs(fl,{ref:l,className:ye(IR({side:n}),r),...s,children:[i,c.jsxs(Nv,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[c.jsx(Xa,{className:"h-4 w-4"}),c.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Dv.displayName=fl.displayName;const Ov=({className:n,...r})=>c.jsx("div",{className:ye("flex flex-col space-y-2 text-center sm:text-left",n),...r});Ov.displayName="SheetHeader";const Fv=g.forwardRef(({className:n,...r},i)=>c.jsx(ml,{ref:i,className:ye("text-lg font-semibold text-foreground",n),...r}));Fv.displayName=ml.displayName;const jR=g.forwardRef(({className:n,...r},i)=>c.jsx(pl,{ref:i,className:ye("text-sm text-muted-foreground",n),...r}));jR.displayName=pl.displayName;const Wo={video:"Video",reading:"Reading",quiz:"Quiz"},$v={video:Zu,reading:Ka,quiz:Bi};function MR(n){const r=n.split(/\s+/).filter(Boolean).length;return Math.max(2,Math.ceil(r/150))}function LR(n,r,i){const s=Math.ceil(n.length/2),l=(y,x,b)=>({id:`part-${x+1}`,kind:"reading",title:y.title,meta:`${MR(y.content)} min`,module:b,section:y}),u=[];r!==void 0&&u.push({id:"video",kind:"video",title:r||"Watch and learn",meta:"Short video",module:1}),n.slice(0,s).forEach((y,x)=>u.push(l(y,x,1)));const f=n.slice(s).map((y,x)=>l(y,x+s,2)),m=[{number:1,title:"The basics",summary:"Watch the video, then learn the key ideas.",items:u}];f.length&&m.push({number:2,title:"Going further",summary:"Build on the basics with real examples and tips.",items:f});const h=i?xd(i):void 0;return m.push({number:m.length+1,title:"Check what you learned",summary:"Take the quiz and earn points.",items:[{id:"quiz",kind:"quiz",title:"Course quiz",meta:h?`${h.questions.length} questions`:"Coming soon",module:m.length+1}]}),m}function DR({kind:n,done:r}){const i=r?ts:$v[n];return c.jsx("span",{className:ye("flex h-10 w-10 flex-none items-center justify-center rounded-full border-2",r?"border-primary bg-primary text-white":"border-border bg-white text-ink"),"aria-hidden":"true",children:c.jsx(i,{className:"h-5 w-5"})})}function Rh({base:n,modules:r,done:i,currentId:s,onNavigate:l}){return c.jsx("ol",{className:"space-y-5",children:r.map(u=>c.jsxs("li",{children:[c.jsxs("p",{className:"px-2 text-xs font-extrabold uppercase tracking-wide text-ink-muted",children:["Module ",u.number]}),c.jsx("p",{className:"px-2 font-extrabold text-ink",children:u.title}),c.jsx("ol",{className:"mt-2 space-y-1",children:u.items.map(f=>{const m=i.has(f.id),h=f.id===s,y=m?ts:$v[f.kind];return c.jsx("li",{children:c.jsxs(De,{to:`${n}/${f.id}`,onClick:l,"aria-current":h?"page":void 0,className:ye("flex items-start gap-2.5 rounded-xl border-l-4 px-2 py-2 text-sm transition-colors duration-150",h?"border-primary bg-mint font-bold text-ink":"border-transparent text-ink-muted hover:bg-mint/60 hover:text-ink"),children:[c.jsx(y,{className:ye("mt-0.5 h-4 w-4 flex-none",m?"text-primary":"text-ink-muted"),"aria-hidden":"true"}),c.jsxs("span",{className:"flex-1",children:[c.jsx("span",{className:"sr-only",children:m?"Completed. ":""}),c.jsxs("span",{className:"font-bold",children:[Wo[f.kind],":"]})," ",f.title,c.jsx("span",{className:"block text-xs font-semibold text-ink-muted",children:f.meta})]})]})},f.id)})})]},u.number))})}function Hn({title:n,intro:r,sections:i,videoEmbed:s,duration:l,difficulty:u,nextLessonPath:f,nextLessonTitle:m,prevLessonPath:h,prevLessonTitle:y,quizId:x}){var Q,X;const{pathname:b}=Tr(),v=sl(),S=$n.find(P=>b===P.path||b.startsWith(P.path+"/")),E=(S==null?void 0:S.path)??b.replace(/\/[^/]*$/,""),k=b.startsWith(E+"/")?b.slice(E.length+1).replace(/\/$/,""):"",C=g.isValidElement(s)?s.props.title??"":void 0,T=g.useMemo(()=>LR(i,C,x),[i,C,x]),N=g.useMemo(()=>T.flatMap(P=>P.items),[T]),{done:j,mark:L}=Py(S==null?void 0:S.slug),$=g.useMemo(()=>{const P=new Set(j);return x&&wd().completedQuizzes.includes(x)&&P.add("quiz"),P},[j,x]),H=N.filter(P=>$.has(P.id)).length,z=Math.round(H/N.length*100),Y=N.find(P=>!$.has(P.id)),q=(S==null?void 0:S.title)??n,G=f?((Q=$n.find(P=>P.path===f))==null?void 0:Q.title)??m:void 0,re=h?((X=$n.find(P=>P.path===h))==null?void 0:X.title)??y:void 0;if(g.useEffect(()=>{window.scrollTo({top:0})},[k]),!k)return c.jsxs(Rr,{children:[c.jsx("section",{className:"bg-gradient-to-b from-mint to-white",children:c.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10",children:[c.jsx("nav",{"aria-label":"Breadcrumb",children:c.jsxs("ol",{className:"flex items-center gap-1 text-sm font-semibold text-ink-muted",children:[c.jsx("li",{children:c.jsx(De,{to:"/courses",className:"link-underline text-primary",children:"Courses"})}),c.jsx("li",{"aria-hidden":"true",children:c.jsx(lu,{className:"w-4 h-4"})}),c.jsx("li",{"aria-current":"page",className:"text-ink",children:q})]})}),c.jsxs("div",{className:"mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"hero-animate flex flex-wrap items-center gap-2",children:[c.jsx("span",{className:"free-pill",children:"Free"}),c.jsx("span",{className:"rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm",children:(S==null?void 0:S.level)??u}),S==null?void 0:S.pillars.map(P=>c.jsx("span",{className:"rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow-sm",children:Cy(P)},P))]}),c.jsx("h1",{className:"hero-animate mt-4 text-4xl md:text-5xl font-black text-ink",children:q}),c.jsx("p",{className:"hero-animate mt-4 text-lg md:text-xl text-ink-muted max-w-2xl",children:(S==null?void 0:S.blurb)??r}),c.jsxs("dl",{className:"hero-animate mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-muted",children:[S&&c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("dt",{className:"sr-only",children:"Age"}),c.jsx(td,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),c.jsx("dd",{children:S.age})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("dt",{className:"sr-only",children:"Length"}),c.jsx(gg,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),c.jsxs("dd",{children:[T.length," modules, ",N.length," items"]})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("dt",{className:"sr-only",children:"Time"}),c.jsx(Ma,{className:"w-4 h-4 text-brand","aria-hidden":"true"}),c.jsx("dd",{children:(S==null?void 0:S.time.split(", ").pop())??l})]})]})]}),c.jsxs("div",{className:"hero-animate rounded-3xl border border-border bg-white p-6 shadow-sm",children:[c.jsx("p",{className:"text-sm font-extrabold uppercase tracking-wide text-ink",children:"Your progress"}),c.jsxs("p",{className:"mt-2 text-3xl font-black text-ink",children:[z,"%"]}),c.jsx(Ui,{value:z,className:"mt-2 h-3","aria-label":"Course progress"}),c.jsxs("p",{className:"mt-2 text-sm text-ink-muted",children:[H," of ",N.length," items done"]}),c.jsx(Oe,{asChild:!0,size:"lg",className:"mt-5 w-full",children:c.jsx(De,{to:`${E}/${(Y??N[0]).id}`,children:H===0?c.jsxs(c.Fragment,{children:["Start course ",c.jsx(Ot,{"aria-hidden":"true"})]}):Y?c.jsxs(c.Fragment,{children:["Resume ",c.jsx(Ot,{"aria-hidden":"true"})]}):c.jsxs(c.Fragment,{children:[c.jsx(Tu,{"aria-hidden":"true"})," Review course"]})})}),Y&&H>0&&c.jsxs("p",{className:"mt-3 text-sm text-ink-muted",children:["Up next: ",Wo[Y.kind],", ",Y.title]})]})]})]})}),c.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",children:[S&&c.jsxs("section",{"aria-labelledby":"learn-heading",className:"rounded-3xl border border-border bg-white p-6 shadow-sm",children:[c.jsx("h2",{id:"learn-heading",className:"text-sm font-extrabold uppercase tracking-wide text-ink",children:"What you'll learn"}),c.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:S.objectives.map(P=>c.jsxs("li",{className:"flex items-start gap-2 text-ink",children:[c.jsx(ts,{className:"mt-0.5 w-5 h-5 flex-none text-brand","aria-hidden":"true"}),P]},P))})]}),c.jsxs("section",{"aria-labelledby":"syllabus-heading",className:"mt-10",children:[c.jsx("h2",{id:"syllabus-heading",className:"text-2xl md:text-3xl font-black text-ink",children:"Course content"}),c.jsx("p",{className:"mt-1 text-ink-muted",children:"Go in order, or jump to any part. Your progress saves in this browser."}),c.jsx("ol",{className:"mt-6 space-y-6",children:T.map(P=>{const _=P.items.filter(ee=>$.has(ee.id)).length;return c.jsxs("li",{className:"reveal overflow-hidden rounded-3xl border border-border bg-white shadow-sm",children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 border-b border-border bg-mint-soft px-6 py-5",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-xs font-extrabold uppercase tracking-wide text-primary",children:["Module ",P.number]}),c.jsx("h3",{className:"text-xl font-extrabold text-ink",children:P.title}),c.jsx("p",{className:"mt-1 text-sm text-ink-muted",children:P.summary})]}),c.jsxs("span",{className:"rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm",children:[_,"/",P.items.length," done"]})]}),c.jsx("ol",{children:P.items.map(ee=>{const de=$.has(ee.id);return c.jsx("li",{className:"border-b border-border last:border-b-0",children:c.jsxs(De,{to:`${E}/${ee.id}`,className:"group flex items-center gap-4 px-6 py-4 transition-colors duration-150 hover:bg-mint-soft",children:[c.jsx(DR,{kind:ee.kind,done:de}),c.jsxs("span",{className:"flex-1 min-w-0",children:[c.jsxs("span",{className:"block text-ink",children:[c.jsx("span",{className:"font-extrabold",children:Wo[ee.kind]})," ",ee.title]}),c.jsxs("span",{className:"mt-0.5 flex items-center gap-1.5 text-sm text-ink-muted",children:[c.jsx(Ma,{className:"w-3.5 h-3.5","aria-hidden":"true"}),ee.meta,de&&c.jsx("span",{className:"font-bold text-primary",children:"· Completed"})]})]}),c.jsx(lu,{className:"w-5 h-5 text-ink-muted transition-transform duration-200 group-hover:translate-x-1","aria-hidden":"true"})]})},ee.id)})})]},P.number)})})]}),S&&c.jsxs("p",{className:"mt-8 flex items-start gap-2 rounded-2xl bg-sun-soft px-5 py-4 font-semibold text-ink",children:[c.jsx(Pi,{className:"mt-0.5 w-5 h-5 flex-none text-amber-600","aria-hidden":"true"}),S.outcome]}),c.jsxs("nav",{"aria-label":"More courses",className:"mt-10 flex flex-col sm:flex-row justify-between gap-4",children:[c.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",className:"flex-1",children:c.jsxs(De,{to:h??"/courses",children:[c.jsx(Aa,{"aria-hidden":"true"}),c.jsx("span",{className:"truncate",children:re??"All courses"})]})}),c.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",className:"flex-1",children:c.jsxs(De,{to:f??"/courses",children:[c.jsx("span",{className:"truncate",children:G?`Next course: ${G}`:"Pick another course"}),c.jsx(Ot,{"aria-hidden":"true"})]})})]})]})]});const te=N.findIndex(P=>P.id===k);if(te===-1)return c.jsx(zu,{to:E,replace:!0});const oe=N[te],J=N[te-1],he=N[te+1],ce=T.find(P=>P.number===oe.module),ae=oe.kind==="quiz"&&x?xd(x):void 0,F=()=>{L(oe.id),v(he?`${E}/${he.id}`:E)};return c.jsxs(OR,{base:E,heading:q,modules:T,done:$,currentId:oe.id,percent:z,completedCount:H,total:N.length,children:[c.jsx("nav",{"aria-label":"Breadcrumb",children:c.jsxs("ol",{className:"flex flex-wrap items-center gap-1 text-sm font-semibold text-ink-muted",children:[c.jsx("li",{children:c.jsx(De,{to:E,className:"link-underline text-primary",children:q})}),c.jsx("li",{"aria-hidden":"true",children:c.jsx(lu,{className:"w-4 h-4"})}),c.jsxs("li",{children:["Module ",ce.number,": ",ce.title]})]})}),c.jsxs("p",{className:"mt-5 flex items-center gap-2 text-sm font-bold text-ink-muted",children:[c.jsx("span",{className:"rounded-full bg-mint px-3 py-1 text-primary",children:Wo[oe.kind]}),c.jsx("span",{children:oe.meta}),c.jsx("span",{"aria-hidden":"true",children:"·"}),c.jsxs("span",{children:["Item ",te+1," of ",N.length]})]}),!(oe.kind==="quiz"&&ae)&&c.jsx("h1",{className:"mt-3 text-3xl md:text-4xl font-black text-ink",children:oe.title}),c.jsxs("div",{className:"mt-6",children:[oe.kind==="video"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"overflow-hidden rounded-2xl bg-black shadow-sm",children:s}),c.jsx("p",{className:"mt-4 text-ink-muted",children:"Watch the video, then move on to the readings. You can pause or rewatch any time."})]}),oe.kind==="reading"&&oe.section&&c.jsx("article",{className:"rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm",children:c.jsx(PR,{content:oe.section.content})}),oe.kind==="quiz"&&(ae?c.jsx("div",{className:"-mx-6",children:c.jsx(Mv,{quiz:ae,onComplete:()=>{L("quiz"),v(E)}},ae.id)}):c.jsx("p",{className:"rounded-3xl bg-sun-soft p-8 text-center font-semibold text-ink",children:"The quiz for this course is coming soon."}))]}),c.jsxs("nav",{"aria-label":"Course items",className:"mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border pt-6",children:[J?c.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(De,{to:`${E}/${J.id}`,children:[c.jsx(Aa,{"aria-hidden":"true"}),"Previous"]})}):c.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(De,{to:E,children:[c.jsx(Aa,{"aria-hidden":"true"}),"Course home"]})}),oe.kind!=="quiz"||!ae?c.jsxs(Oe,{size:"lg",onClick:F,className:"sm:max-w-[60%]",children:[c.jsx("span",{className:"truncate",children:he?`Done, next: ${Wo[he.kind]}`:"Finish course"}),c.jsx(Ot,{"aria-hidden":"true"})]}):c.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(De,{to:E,children:["Back to course home",c.jsx(Ot,{"aria-hidden":"true"})]})})]})]})}function OR({base:n,heading:r,modules:i,done:s,currentId:l,percent:u,completedCount:f,total:m,children:h}){const[y,x]=g.useState(!1),b=c.jsxs("div",{children:[c.jsx(De,{to:n,className:"link-underline font-extrabold text-ink hover:text-primary",children:r}),c.jsx(Ui,{value:u,className:"mt-3 h-2","aria-label":"Course progress"}),c.jsxs("p",{className:"mt-1.5 text-xs font-semibold text-ink-muted",children:[f," of ",m," done"]})]});return c.jsx(Rr,{children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 grid gap-8 lg:grid-cols-[300px_1fr]",children:[c.jsx("aside",{"aria-label":"Course outline",className:"hidden lg:block",children:c.jsxs("div",{className:"sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-border bg-white p-4 shadow-sm",children:[b,c.jsx("div",{className:"mt-5",children:c.jsx(Rh,{base:n,modules:i,done:s,currentId:l})})]})}),c.jsxs("div",{className:"min-w-0 max-w-3xl",children:[c.jsx("div",{className:"lg:hidden mb-5",children:c.jsxs(TR,{open:y,onOpenChange:x,children:[c.jsx(AR,{asChild:!0,children:c.jsxs(Oe,{variant:"outline",className:"w-full justify-between",children:[c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx(gg,{"aria-hidden":"true"}),"Course outline"]}),c.jsxs("span",{className:"text-ink-muted",children:[f,"/",m," done"]})]})}),c.jsxs(Dv,{side:"left",className:"w-[88vw] max-w-sm overflow-y-auto",children:[c.jsx(Ov,{className:"text-left",children:c.jsx(Fv,{className:"sr-only",children:"Course outline"})}),b,c.jsx("div",{className:"mt-5",children:c.jsx(Rh,{base:n,modules:i,done:s,currentId:l,onNavigate:()=>x(!1)})})]})]})}),h]})]})})}function bn({videoId:n,title:r}){return c.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:c.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-lg",src:`https://www.youtube.com/embed/${n}?rel=0&modestbranding=1`,title:r||"Educational Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}function FR(){const n=[{title:"Understanding the Fundamentals of Budgeting",content:`Budgeting is the cornerstone of personal financial success. At its core, budgeting is the process of creating a detailed plan that outlines how you'll allocate your income across various expenses, savings, and financial goals over a specific period, typically monthly.

Think of a budget as your financial GPS - it shows you where your money is currently going, helps you navigate toward your destination (financial goals), and alerts you when you're getting off track. Without a budget, you're essentially driving blindfolded through your financial life.

Many people avoid budgeting because they think it's restrictive or complicated, but the opposite is true. A well-crafted budget actually gives you more freedom because you're making conscious decisions about your money rather than wondering where it all went at the end of the month.

The key to successful budgeting isn't perfection - it's awareness and intentionality. When you track where every dollar goes, you gain control over your financial destiny and can make informed decisions that align with your values and goals.`},{title:"The Psychology of Money and Spending",content:`Before diving into budgeting mechanics, it's crucial to understand the emotional and psychological aspects of money management. Our relationship with money is deeply personal and often shaped by childhood experiences, cultural background, and societal pressures.

Common psychological barriers to effective budgeting include:

**Emotional Spending**: Using purchases to cope with stress, sadness, or boredom. This "retail therapy" can derail even the best-planned budgets.

**Lifestyle Inflation**: As income increases, expenses tend to increase proportionally, leaving little room for additional savings despite earning more money.

**Present Bias**: Humans naturally prioritize immediate gratification over future benefits, making it challenging to save for long-term goals.

**Analysis Paralysis**: Some people become so overwhelmed by budgeting options and strategies that they never start at all.

Understanding these tendencies helps you develop strategies to overcome them. For example, if you're an emotional spender, you might build a small "fun money" category into your budget or find alternative ways to manage stress.`},{title:"The Complete Guide to the 50/30/20 Rule",content:`The 50/30/20 rule, popularized by Senator Elizabeth Warren, provides a simple framework for dividing your after-tax income. This rule is particularly effective for beginners because it's straightforward and flexible.

**50% for Needs (Essential Expenses)**
These are expenses you cannot avoid:
• Housing (rent/mortgage, property taxes, essential repairs)
• Transportation (car payments, gas, insurance, public transit)
• Utilities (electricity, water, gas, basic phone/internet)
• Groceries and essential household items
• Insurance (health, life, disability)
• Minimum debt payments
• Basic clothing

**30% for Wants (Discretionary Spending)**
These enhance your quality of life but aren't essential:
• Dining out and entertainment
• Hobbies and recreation
• Cable/streaming services
• Gym memberships
• Non-essential shopping
• Travel and vacations
• Personal care beyond basics

**20% for Savings and Debt Repayment**
This category secures your financial future:
• Emergency fund contributions
• Retirement savings (401k, IRA)
• Extra debt payments beyond minimums
• Short-term savings goals
• Investment contributions

**Adapting the Rule**: If your housing costs exceed 50% of your income (common in expensive cities), you might need to adjust to 60/20/20 or focus on increasing income or reducing housing costs.`},{title:"Building a Bulletproof Emergency Fund",content:`An emergency fund is your financial safety net - money set aside specifically for unexpected expenses or income disruptions. This fund serves as a buffer between you and debt when life throws curveballs.

**Why Emergency Funds Matter**
Without an emergency fund, unexpected expenses often get charged to credit cards, creating a cycle of debt that can take years to overcome. Studies show that people with emergency funds experience significantly less financial stress and are better positioned to take advantage of opportunities.

**The Building Strategy**
Start with micro-goals to build momentum:
• Week 1-2: Save $100 (even if it's $5-10 per day)
• Month 1: Reach $500
• Months 2-3: Build to $1,000
• Months 4-12: Work toward 3-6 months of expenses

**Calculating Your Target Amount**
Add up your essential monthly expenses:
• Housing (rent/mortgage, utilities)
• Food and groceries
• Transportation
• Insurance premiums
• Minimum debt payments
• Basic personal care

Multiply this total by 3-6 months. If you have stable employment, 3 months might suffice. If you're self-employed or in an unstable industry, aim for 6 months or more.

**Where to Keep Emergency Funds**
• High-yield savings account (separate from checking)
• Money market account
• Short-term CDs (if you won't need immediate access)

**What Constitutes an Emergency**
True emergencies include:
• Job loss or significant income reduction
• Medical emergencies not covered by insurance
• Major home or car repairs
• Unexpected travel for family emergencies

Not emergencies: vacations, holidays gifts, or predictable expenses like car registration.`},{title:"Advanced Saving Strategies and Automation",content:`The secret to consistent saving isn't willpower - it's automation and strategic planning. By removing the decision-making process from saving, you're more likely to stick to your goals.

**Pay Yourself First Philosophy**
This fundamental principle means treating savings like a non-negotiable bill. Before spending on anything else, allocate money to savings. This ensures your future self gets "paid" before present you spends everything.

**Automation Strategies**
Set up automatic transfers for:
• Savings accounts (the day after payday)
• Retirement contributions
• Investment accounts
• Bill payments to avoid late fees

**The Power of Small Amounts**
Don't underestimate small savings:
• $25 per week = $1,300 per year
• $5 per day = $1,825 per year
• Rounding up purchases to the nearest dollar can save $300-500 annually

**High-Yield Savings Accounts**
Traditional savings accounts often earn less than 0.5% interest, while high-yield accounts can earn 4-5%. On a $10,000 emergency fund, this difference amounts to hundreds of dollars per year.

**Savings Challenges**
• 52-week challenge: Save $1 week 1, $2 week 2, etc. (Total: $1,378)
• $5 challenge: Save every $5 bill you receive
• No-spend weekends: Choose one weekend per month to avoid unnecessary spending

**Multiple Savings Goals**
Use separate accounts for different goals:
• Emergency fund
• Vacation fund
• Home down payment
• Car replacement fund
• Holiday gift fund

This prevents you from "borrowing" from one goal to fund another.`},{title:"Budgeting Methods and Tools",content:`Different budgeting methods work for different personalities and lifestyles. Experiment to find what resonates with you.

**Zero-Based Budgeting**
Every dollar gets assigned a purpose before the month begins. Income minus expenses and savings should equal zero. This method ensures intentional spending but requires detailed planning.

**Envelope Method**
Allocate cash into physical or digital "envelopes" for each spending category. When the envelope is empty, you're done spending in that category for the month.

**Pay-Check Budgeting**
Instead of monthly budgeting, plan how you'll use each paycheck. This works well for irregular income or people paid bi-weekly.

**Digital Tools and Apps**
• Mint: Free, comprehensive tracking and categorization
• YNAB (You Need A Budget): Zero-based budgeting philosophy
• Personal Capital: Great for investment tracking
• Spreadsheets: Ultimate customization and control

**The Importance of Tracking**
You can't manage what you don't measure. Track spending for at least one month before creating a budget to understand your actual spending patterns vs. perceived spending.`},{title:"Overcoming Common Budgeting Obstacles",content:`Even the best budgets face challenges. Anticipating and preparing for these obstacles increases your likelihood of long-term success.

**Irregular Income**
If your income varies monthly:
• Use your lowest income month as your baseline budget
• Save excess income from good months in a "income smoothing" account
• Prioritize building a larger emergency fund (6-9 months of expenses)

**Overspending in Categories**
When you consistently overspend in specific categories:
• Increase the budget for that category and decrease another
• Examine if the overspending is due to poor estimates or lack of discipline
• Consider if it's a "need" miscategorized as a "want"

**Budget Fatigue**
To prevent burnout:
• Review and adjust your budget monthly, not daily
• Build in some flexibility with a "miscellaneous" category
• Focus on progress, not perfection
• Celebrate small wins and milestones

**Spousal or Family Conflicts**
Money disagreements are common. Strategies include:
• Regular budget meetings to discuss goals and concerns
• Separate "fun money" allowances for each person
• Compromise on spending priorities
• Focus on shared values and goals

**Lifestyle Changes**
Life events require budget adjustments:
• Job changes: Wait 2-3 months before increasing lifestyle expenses
• New baby: Plan for reduced income and increased expenses
• Moving: Factor in one-time costs and ongoing changes

**The 80/20 Rule**
Focus on the 20% of expenses that make up 80% of your spending (usually housing, transportation, and food). Small improvements in these areas have the biggest impact.`},{title:"Advanced Budgeting: Beyond the Basics",content:`Once you've mastered basic budgeting, these advanced strategies can accelerate your financial progress.

**Sinking Funds**
These are mini-savings accounts for predictable but irregular expenses:
• Annual insurance premiums
• Holiday gifts
• Car maintenance and repairs
• Property taxes
• Vacation costs

Calculate the annual cost and save monthly amounts to avoid budget shocks.

**The Anti-Budget**
For those who hate detailed tracking:
• Automate all savings and fixed expenses
• Spend whatever remains guilt-free
• Requires strong automation and higher savings rates

**Percentage-Based Budgeting**
Instead of fixed dollar amounts, use percentages that adjust with income changes:
• Housing: 25-30%
• Transportation: 15-20%
• Food: 10-15%
• Savings: 20%+

**Value-Based Budgeting**
Align spending with personal values:
• Identify your top 5 values (family, health, education, etc.)
• Ensure your budget reflects these priorities
• Cut spending on things that don't align with your values

**The Abundance Mindset**
Shift from "I can't afford it" to "How can I afford it?" This reframes money conversations from restriction to opportunity and can motivate income-increasing activities.

**Budgeting for Financial Independence**
If your goal is early retirement or financial independence:
• Track your savings rate (savings ÷ income)
• Aim for 25-50% savings rates
• Focus on reducing expenses and increasing income
• Calculate your "financial independence number" (annual expenses × 25)

Remember: budgeting is a skill that improves with practice. Start simple, be consistent, and gradually incorporate more sophisticated strategies as you become comfortable with the basics.`}];return c.jsx(Hn,{title:"Budgeting & Saving",intro:"Learn how to create a budget that works for you and build a strong savings foundation for your financial future.",sections:n,videoEmbed:c.jsx(bn,{videoId:"-Of_WRjDrx0",title:"How to Make a Budget | Beginner's Guide to Budgeting"}),duration:"15 min",difficulty:"Beginner",nextLessonPath:"/lessons/understanding-credit",nextLessonTitle:"Understanding Credit",quizId:"budgeting-and-saving"})}function $R(){const n=[{title:"The Foundation of Credit: What You Need to Know",content:`Credit is fundamentally about trust and reputation in the financial world. When you use credit, you're entering into a contractual agreement where a lender provides you with money, goods, or services immediately, and you promise to repay the debt according to agreed-upon terms.

This system exists because it benefits both parties: lenders earn money through interest and fees, while borrowers can make purchases they couldn't afford with cash alone, from everyday items to major investments like homes and education.

**Types of Credit Accounts**
There are three main categories of credit:

**Revolving Credit**: Credit cards and lines of credit where you can borrow, repay, and borrow again up to a set limit. The available credit "revolves" as you make payments.

**Installment Credit**: Loans with fixed payment amounts over a set period, such as car loans, mortgages, student loans, and personal loans.

**Open Credit**: Less common accounts where the full balance must be paid each month, such as charge cards and some utility accounts.

**How Credit Reporting Works**
Your credit activities are reported to three major credit bureaus: Experian, Equifax, and TransUnion. These companies collect information from lenders and create credit reports that serve as the foundation for your credit scores. Understanding this system is crucial because errors in reporting can significantly impact your creditworthiness.`},{title:"Deep Dive into Credit Scores and Reports",content:`Your credit score is essentially a numerical grade that represents your creditworthiness based on your credit history. Think of it as your financial GPA - it's a quick way for lenders to assess the risk of lending to you.

**Credit Score Ranges and Their Meanings**
• 800-850 (Exceptional): You'll qualify for the best rates and terms
• 740-799 (Very Good): You'll get favorable rates and terms
• 670-739 (Good): You'll get reasonable rates, though not the best available
• 580-669 (Fair): You may face higher rates and stricter terms
• 300-579 (Poor): Credit approval will be difficult and expensive

**The Five Factors That Determine Your Score**

**1. Payment History (35% of your score)**
This is the most important factor. It tracks whether you've paid your bills on time, how many times you've been late, how late you were, and how recently late payments occurred. Even one 30-day late payment can drop your score by 60-110 points.

**2. Credit Utilization (30% of your score)**
This measures how much of your available credit you're using. For example, if you have a $1,000 credit limit and a $300 balance, your utilization is 30%. Lower utilization generally means higher scores, with optimal utilization below 10%.

**3. Length of Credit History (15% of your score)**
This considers how long your accounts have been open, the age of your oldest account, and the average age of all accounts. Longer credit history generally improves your score because it provides more data about your borrowing behavior.

**4. Credit Mix (10% of your score)**
Having different types of credit (credit cards, auto loans, mortgages) can positively impact your score, as it shows you can manage various forms of credit responsibly.

**5. New Credit Inquiries (10% of your score)**
When you apply for credit, the lender performs a "hard inquiry" which can temporarily lower your score by a few points. Multiple inquiries in a short period can be more damaging, though multiple inquiries for the same type of loan (like mortgage shopping) within 14-45 days typically count as a single inquiry.

**Understanding Your Credit Report**
Your credit report contains detailed information about your credit accounts, payment history, public records (like bankruptcies), and recent credit inquiries. Review your reports annually from all three bureaus at annualcreditreport.com to check for errors and signs of identity theft.`},{title:"Building Credit from Ground Zero",content:`If you're new to credit or have no credit history, you're essentially invisible to the credit scoring system. Here's how to build credit responsibly from the beginning.

**Starting Options for No Credit History**

**Secured Credit Cards**: You provide a cash deposit (typically $200-$500) that serves as your credit limit. This removes risk for the lender while allowing you to build credit history. After 6-12 months of responsible use, many companies will upgrade you to an unsecured card and return your deposit.

**Student Credit Cards**: Designed for college students with limited credit history. These typically have lower credit limits and fewer rewards but easier approval requirements.

**Authorized User Status**: Being added as an authorized user on a family member's account can help you benefit from their positive payment history and long credit history.

**Credit-Builder Loans**: Some credit unions and banks offer small loans where the money is held in an account while you make payments. This builds payment history without the temptation to overspend.

**Best Practices for New Credit Users**

**Start Small and Build Gradually**: Begin with one credit account and use it responsibly for 6-12 months before applying for additional credit.

**Use Credit for Regular Expenses**: Put predictable expenses like gas or groceries on your credit card, then pay the full balance immediately. This builds positive payment history without increasing your spending.

**Set Up Automatic Payments**: At minimum, automate the minimum payment to ensure you're never late. Ideally, automate full balance payments to avoid interest charges.

**Monitor Your Progress**: Use free credit monitoring services to track your score growth and catch any errors early.

**Common Mistakes to Avoid**
• Applying for multiple cards quickly
• Making only minimum payments
• Using credit for impulse purchases
• Ignoring your statements and credit reports
• Closing your first credit card once you get better options`},{title:"Mastering Credit Utilization",content:`Credit utilization is the second most important factor in your credit score, yet it's one of the most misunderstood aspects of credit management.

**Understanding Utilization Calculations**
Utilization is calculated both per individual card and across all your credit cards combined. For example:
• Card A: $500 balance / $1,000 limit = 50% utilization
• Card B: $0 balance / $2,000 limit = 0% utilization
• Overall: $500 total balance / $3,000 total limits = 16.7% overall utilization

**Optimal Utilization Strategies**

**The 10% Rule**: While keeping utilization below 30% is good, keeping it below 10% is better. People with the highest credit scores typically use less than 10% of their available credit.

**The 1% Strategy**: Some credit experts recommend keeping a small balance (1-2%) on your cards rather than 0% to show active credit use. However, the benefit is minimal and may not justify paying interest.

**Balance Timing Matters**: Credit card companies typically report your balance to credit bureaus on your statement date, not your payment due date. Paying down balances before your statement date can lower your reported utilization.

**Strategies for High Utilization**
If your utilization is currently high:
• Pay down balances before statement dates
• Make multiple payments per month
• Request credit limit increases (but don't increase spending)
• Consider spreading balances across multiple cards temporarily
• Pay off balances in order of highest utilization percentage

**The Credit Limit Increase Strategy**
Requesting credit limit increases can lower your utilization without changing your spending. Most credit card companies allow online requests every 6-12 months. A successful increase immediately improves your utilization ratio.

**Managing Multiple Cards**
As you build credit, you may acquire multiple cards. Strategies include:
• Use different cards for different categories to maximize rewards
• Rotate usage to keep all accounts active
• Keep older cards open even if you don't use them regularly
• Set up small automatic payments on unused cards to maintain activity`},{title:"Strategic Credit Card Management",content:`Credit cards are powerful financial tools when used strategically, but they can become expensive debt traps when mismanaged.

**Choosing the Right Credit Cards**

**No Annual Fee Cards**: Best for beginners or those who don't want to worry about justifying annual costs.

**Rewards Cards**: Cash back, points, or miles cards can provide value, but only if you pay balances in full. The average rewards rate is 1-2%, while average credit card interest is 18-24%.

**0% APR Cards**: Useful for large purchases or balance transfers, but require discipline to pay off before the promotional rate expires.

**Understanding Credit Card Terms**

**APR (Annual Percentage Rate)**: The interest rate charged on balances you carry month to month.

**Grace Period**: The time between your statement date and due date when no interest is charged on new purchases (typically 21-25 days).

**Minimum Payment**: Usually 2-3% of your balance, but paying only the minimum means most of your payment goes to interest, not principal.

**Payment Hierarchy**: Credit card companies apply payments to lowest-interest balances first, so balance transfer or promotional rates get paid off before regular purchases.

**Advanced Credit Card Strategies**

**Credit Card Churning**: Opening cards for sign-up bonuses then moving to new cards. This requires excellent credit management and isn't recommended for beginners.

**Balance Transfer Strategy**: Moving high-interest debt to 0% APR cards can save significant money, but requires discipline to pay off the debt during the promotional period.

**Authorized User Strategy**: Adding family members as authorized users can help them build credit, but you're responsible for all charges.

**Travel Hacking**: Using credit card rewards strategically to fund travel. This requires careful planning and excellent payment discipline.

**Credit Card Safety and Security**
• Monitor accounts regularly for fraudulent charges
• Set up account alerts for transactions
• Use secure networks when making online purchases
• Keep physical cards secure and report lost cards immediately
• Never share account information via email or phone calls`},{title:"Debt Management and Recovery Strategies",content:`If you're carrying credit card debt, you're not alone - the average American household with credit card debt owes about $6,200. Here's how to tackle it strategically.

**Debt Payoff Strategies**

**The Debt Avalanche Method**: Pay minimum payments on all cards, then put extra money toward the card with the highest interest rate. This method saves the most money in interest over time.

Example:
• Card A: $2,000 at 24% APR
• Card B: $3,000 at 18% APR
• Card C: $1,000 at 15% APR
Focus extra payments on Card A first.

**The Debt Snowball Method**: Pay minimums on all cards, then put extra money toward the card with the smallest balance. This method provides psychological wins that can help maintain motivation.

Using the same example, you'd focus on Card C first.

**The Hybrid Approach**: Focus on small balances first to gain momentum, then switch to highest interest rates for larger balances.

**Advanced Debt Strategies**

**Balance Transfers**: Moving debt to a 0% APR card can provide breathing room. Key considerations:
• Transfer fees are typically 3-5% of the balance
• Promotional rates usually last 12-21 months
• You must qualify based on credit score and income
• Have a payoff plan before the promotional rate expires

**Debt Consolidation Loans**: Personal loans to pay off credit card debt. Benefits include:
• Fixed payment amounts and timeline
• Often lower interest rates than credit cards
• Simplifies multiple payments into one

**Credit Counseling**: Non-profit organizations can help create debt management plans and negotiate with creditors. Be wary of for-profit debt settlement companies that charge high fees and can damage your credit.

**Preventing Future Debt**
• Create and stick to a budget
• Build an emergency fund to avoid charging unexpected expenses
• Use credit cards like debit cards - only spend what you have
• Review and categorize all spending monthly
• Consider removing credit cards from your wallet for impulse control

**When to Seek Professional Help**
Consider professional assistance if:
• Your debt payments exceed 20% of your income
• You're only making minimum payments
• You're considering bankruptcy
• You're using credit cards for basic necessities
• Your credit utilization is consistently above 50%`},{title:"Advanced Credit Optimization",content:`Once you understand the basics, these advanced strategies can help you maximize your credit profile and financial opportunities.

**Credit Score Optimization Techniques**

**The Perfect Credit Profile**:
• Multiple credit cards with low utilization (under 10%)
• A mix of credit types (cards, auto loan, mortgage)
• No late payments in the past 2+ years
• Average account age of 10+ years
• Minimal recent credit inquiries

**Strategic Account Management**:
• Keep old accounts open even if you don't use them
• Use old cards occasionally to prevent closure due to inactivity
• Request credit limit increases annually
• Consider product changes instead of closing accounts

**Rapid Credit Repair Strategies**
If your credit needs immediate improvement:
• Pay down credit cards to below 10% utilization
• Pay off any past-due accounts immediately
• Dispute any errors on your credit reports
• Consider becoming an authorized user on someone else's account
• Pay down balances before statement dates

**Credit Monitoring and Protection**
Free credit monitoring services alert you to:
• Changes in your credit score
• New accounts opened in your name
• Credit inquiries
• Changes to existing accounts

**Identity Theft Protection**
• Consider credit freezes if you're not actively applying for credit
• Monitor credit reports quarterly
• Set up fraud alerts on accounts
• Use identity monitoring services

**Using Credit for Wealth Building**
Advanced users can leverage credit for:
• Real estate investments (careful consideration required)
• Business financing
• Arbitrage opportunities (0% credit to high-yield savings)
• Travel rewards and benefits

**The Credit Score Plateau**
Once you reach excellent credit (740+), additional score improvements have diminishing returns. Focus shifts to:
• Maintaining excellent credit
• Maximizing rewards and benefits
• Using credit strategically for major purchases
• Teaching others good credit habits

**Building a Credit Legacy**
• Add children as authorized users to give them early credit history
• Teach family members about responsible credit use
• Consider the long-term impact of credit decisions
• Maintain excellent credit for life's major purchases

Remember: excellent credit is not an end goal but a tool for achieving broader financial objectives. Use it wisely to build wealth, not to accumulate possessions you can't afford.`}];return c.jsx(Hn,{title:"Understanding Credit",intro:"Master the fundamentals of credit scores, credit reports, and how to build excellent credit for life.",sections:n,videoEmbed:c.jsx(bn,{videoId:"-z2ObeDKjlw",title:"How Do Credit Cards Work?"}),duration:"12 min",difficulty:"Beginner",prevLessonPath:"/lessons/budgeting-and-saving",prevLessonTitle:"Budgeting & Saving",nextLessonPath:"/lessons/interest-rates",nextLessonTitle:"Interest Rates Explained",quizId:"understanding-credit"})}function _R(){const n=[{title:"Understanding Interest: The Foundation of Finance",content:`Interest is one of the most fundamental concepts in personal finance, yet it's often misunderstood. At its core, interest represents the time value of money - the idea that money available today is worth more than the same amount in the future because of its earning potential.

**The Dual Nature of Interest**
Interest serves two distinct purposes depending on your position:

**For Borrowers**: Interest is the cost of accessing money you don't currently have. It compensates lenders for the risk they take and the opportunity cost of not using their money elsewhere.

**For Savers/Investors**: Interest is the reward for delaying consumption and providing your money to others to use. It's how your money can grow over time without additional effort from you.

**Factors That Influence Interest Rates**
Understanding what drives interest rates helps you make better financial decisions:

**Economic Conditions**: During economic growth, interest rates typically rise as demand for money increases. During recessions, rates often fall to stimulate borrowing and spending.

**Inflation**: Lenders demand higher rates when inflation is expected to rise, ensuring their returns maintain purchasing power.

**Risk Assessment**: Higher-risk borrowers pay higher rates. This is why credit scores matter so much for loan terms.

**Time Frame**: Longer-term loans typically carry higher rates due to increased uncertainty over time.

**Market Competition**: More competition among lenders generally leads to better rates for consumers.

**Central Bank Policy**: The Federal Reserve's decisions significantly influence all other interest rates in the economy.

**Real vs. Nominal Interest Rates**
**Nominal Rate**: The stated interest rate before adjusting for inflation.
**Real Rate**: The interest rate after accounting for inflation.

If you earn 3% interest but inflation is 2%, your real return is only 1%. This distinction is crucial for long-term financial planning.`},{title:"Simple Interest: The Foundation",content:`Simple interest is calculated only on the original principal amount, making it the most straightforward form of interest calculation.

**The Simple Interest Formula**
Interest = Principal × Rate × Time

**Example Calculation**
If you invest $1,000 at 5% simple interest for 3 years:
Interest = $1,000 × 0.05 × 3 = $150
Total Amount = $1,000 + $150 = $1,150

**Where You'll Encounter Simple Interest**
• Short-term loans (some personal loans, payday loans)
• Certificate of deposits (CDs) that pay interest at maturity
• Some government bonds
• Basic savings calculations

**Advantages of Simple Interest**
• Easy to calculate and understand
• Predictable returns or costs
• No compounding complexity

**Disadvantages of Simple Interest**
• Lower growth potential for investments
• Less favorable for long-term wealth building
• Doesn't reflect how money actually grows in most real-world scenarios

**Real-World Example: Car Loan**
A $20,000 car loan at 6% simple interest for 5 years:
Interest = $20,000 × 0.06 × 5 = $6,000
Total Payment = $20,000 + $6,000 = $26,000
Monthly Payment = $26,000 ÷ 60 months = $433.33

However, most car loans use compound interest with monthly compounding, which would result in lower total interest due to principal reduction over time.

**Simple Interest vs. Daily Life**
While simple interest calculations are rare in modern finance, understanding them helps you:
• Quickly estimate costs and returns
• Understand the baseline before compounding effects
• Appreciate the power of compound interest by comparison
• Make rough calculations for financial planning`},{title:"Compound Interest: The Eighth Wonder of the World",content:`Compound interest is arguably the most powerful force in personal finance. Unlike simple interest, compound interest calculates returns not only on your original principal but also on all previously earned interest.

**The Compound Interest Formula**
A = P(1 + r/n)^(nt)
Where:
• A = Final amount
• P = Principal
• r = Annual interest rate (decimal)
• n = Number of times interest compounds per year
• t = Number of years

**The Magic of Compounding**
Let's compare $1,000 invested at 7% for 30 years:

**Simple Interest**: $1,000 + ($1,000 × 0.07 × 30) = $3,100

**Compound Interest (Annual)**: $1,000 × (1.07)^30 = $7,612

The difference? $4,512 in additional growth, just from compounding!

**Compounding Frequency Matters**
The same $1,000 at 7% for 30 years compounded:
• Annually: $7,612
• Semi-annually: $7,738
• Quarterly: $7,804
• Monthly: $7,841
• Daily: $7,847

**The Rule of 72**
This quick calculation estimates how long it takes money to double:
Time to Double = 72 ÷ Interest Rate

Examples:
• At 6% interest: 72 ÷ 6 = 12 years to double
• At 9% interest: 72 ÷ 9 = 8 years to double
• At 3% interest: 72 ÷ 3 = 24 years to double

**Real-World Compounding Examples**

**Retirement Savings**
Starting at age 25, saving $200/month at 7% annual return:
• By age 35 (10 years): $33,014
• By age 45 (20 years): $98,846
• By age 55 (30 years): $224,370
• By age 65 (40 years): $479,632

The last 10 years alone add $255,262 - more than the first 30 years combined!

**Credit Card Debt (Compound Interest Working Against You)**
A $5,000 credit card balance at 18% APR with minimum payments (2% of balance):
• Year 1: $5,900 balance
• Year 5: $6,923 balance
• Year 10: $8,813 balance
• Total time to pay off: 47 years
• Total interest paid: $13,931

**The Early Start Advantage**
Compare two investors:
• Early Eddie: Invests $2,000/year from age 25-35 (10 years), then stops
• Late Larry: Invests $2,000/year from age 35-65 (30 years)

Both earn 10% annually. At age 65:
• Early Eddie: $973,704 (invested $20,000)
• Late Larry: $328,988 (invested $60,000)

Eddie invested less money but started earlier, demonstrating the incredible power of time in compounding.

**Maximizing Compound Interest**
• Start as early as possible
• Contribute regularly and consistently
• Reinvest all earnings and dividends
• Choose accounts with higher compounding frequency
• Avoid early withdrawals that break the compounding chain
• Focus on long-term growth rather than short-term fluctuations`},{title:"APR vs APY: Understanding the True Cost and Return",content:`APR and APY are two critical terms that can make the difference between good and poor financial decisions. Understanding their differences helps you compare financial products accurately.

**APR (Annual Percentage Rate)**
APR represents the total cost of borrowing money for a year, including:
• Base interest rate
• Loan origination fees
• Points (for mortgages)
• Other lender fees

**What APR Tells You**
APR provides a standardized way to compare loan costs. A loan with a 5% interest rate plus $1,000 in fees might have a 5.5% APR, while a loan with 5.5% interest and no fees also has a 5.5% APR.

**APR Examples by Loan Type**

**Credit Cards**
• APR typically ranges from 15-25%
• Often variable, tied to prime rate
• Different APRs for purchases, balance transfers, and cash advances
• No additional fees included since credit cards don't have origination fees

**Mortgages**
• Purchase APR includes interest rate plus fees
• Refinance APR accounts for new loan fees
• Lower APR means lower total borrowing cost
• Compare APRs when mortgage shopping

**Personal Loans**
• APR includes interest plus origination fees
• Can range from 6% (excellent credit) to 36% (poor credit)
• Fixed APR provides payment certainty

**Auto Loans**
• Dealer financing often has higher APRs than banks/credit unions
• 0% APR promotions usually require excellent credit
• Compare dealer financing APR to outside lender options

**APY (Annual Percentage Yield)**
APY represents what you actually earn on savings or investments, accounting for compound interest.

**APY Formula**
APY = (1 + r/n)^n - 1
Where r = nominal rate, n = compounding periods per year

**APY Examples**

**Savings Accounts**
A 2% interest rate compounded:
• Annually: 2% APY
• Semi-annually: 2.01% APY
• Quarterly: 2.015% APY
• Monthly: 2.018% APY
• Daily: 2.020% APY

**Certificates of Deposit (CDs)**
• Higher rates typically offer higher APY
• Longer terms generally provide higher APY
• Shop APY, not just interest rate

**Investment Accounts**
• Money market accounts often compound daily
• Compare APY across different institutions
• Consider minimum balance requirements

**Key Differences Summary**
• APR = Cost of borrowing (lower is better)
• APY = Return on savings (higher is better)
• APR includes fees; APY shows compounding effect
• APR is for loans; APY is for savings/investments

**Making Better Financial Decisions**
• Always compare APRs when borrowing
• Always compare APYs when saving
• Don't be fooled by promotional rates without considering APR/APY
• Factor in all fees and terms, not just the headline rate
• Consider how long you'll keep the loan or investment`},{title:"Interest Rate Types and Structures",content:`Understanding different types of interest rates helps you choose the right financial products and manage risk effectively.

**Fixed vs. Variable Interest Rates**

**Fixed Interest Rates**
• Rate stays the same throughout the loan or investment term
• Provides payment predictability and budgeting certainty
• Protection against rising interest rate environments
• Typically higher initial rates than variable options

**Best For**: Long-term planning, risk-averse borrowers, when rates are expected to rise

**Variable Interest Rates**
• Rate changes based on an underlying benchmark (prime rate, LIBOR, etc.)
• Often start lower than fixed rates
• Payments can increase or decrease over time
• Can include rate caps and floors for protection

**Best For**: Short-term needs, when rates are expected to fall, borrowers who can handle payment fluctuations

**Common Interest Rate Benchmarks**

**Prime Rate**: The rate banks charge their most creditworthy customers, typically 3% above the federal funds rate

**LIBOR (being phased out)**: London Interbank Offered Rate, historically used for many variable rate products

**SOFR**: Secured Overnight Financing Rate, replacing LIBOR for new products

**Federal Funds Rate**: The rate banks charge each other for overnight loans, set by the Federal Reserve

**Treasury Rates**: Interest rates on U.S. government securities, used as benchmarks for many consumer products

**Specialized Interest Rate Products**

**Teaser Rates**: Low introductory rates that increase after a specified period
• Common in credit cards (0% APR promotions)
• Adjustable-rate mortgages (ARM)
• Balance transfer offers

**Tiered Interest Rates**: Different rates based on account balance or loan amount
• Higher balances often earn higher rates
• Larger loans may qualify for better rates

**Promotional Rates**: Temporary rates to attract new customers
• May require meeting specific conditions
• Important to understand post-promotional rates

**Interest Rate Risk Management**

**For Borrowers**:
• Lock in fixed rates when rates are low
• Consider variable rates for short-term needs
• Understand rate adjustment mechanisms
• Plan for potential payment increases

**For Savers/Investors**:
• Diversify across different rate types
• Consider rate laddering strategies
• Monitor rate environments for opportunities
• Balance liquidity needs with rate maximization

**Economic Factors Affecting Interest Rates**

**Inflation**: Higher inflation expectations lead to higher rates
**Economic Growth**: Strong growth typically increases rates
**Government Policy**: Federal Reserve actions directly impact rates
**Global Events**: International crises can affect U.S. rates
**Supply and Demand**: Money supply and borrowing demand influence rates

Understanding these factors helps you time major financial decisions and anticipate rate changes.`},{title:"Strategic Applications of Interest Knowledge",content:`Understanding interest rates empowers you to make strategic financial decisions that can save or earn you thousands of dollars over your lifetime.

**Debt Management Strategies**

**Interest Rate Arbitrage**
• Pay off high-interest debt before investing
• If investment returns exceed debt interest rates, consider keeping low-rate debt
• Example: Keep a 3% mortgage while investing in accounts earning 7%

**Debt Consolidation Analysis**
Before consolidating debt, calculate:
• Total interest under current structure
• Total interest under consolidation
• Impact on monthly cash flow
• Any fees associated with consolidation

**Refinancing Decisions**
Refinance when:
• Current rates are at least 0.5-1% below your existing rate
• You plan to stay in the home long enough to recoup closing costs
• Your credit score has improved significantly
• You want to change loan terms (15-year vs. 30-year)

**Investment Strategies Based on Interest Rates**

**Rate Environment Analysis**
**Rising Rate Environment**:
• Consider shorter-term bonds and CDs
• Variable rate investments may become more attractive
• Focus on dividend-paying stocks over bonds
• Lock in current fixed-rate debt

**Falling Rate Environment**:
• Lock in longer-term fixed-rate investments
• Consider refinancing existing debt
• Growth stocks may outperform dividend stocks
• Fixed-rate bonds increase in value

**Laddering Strategies**
Create a bond or CD ladder by purchasing securities with staggered maturity dates. This provides:
• Regular income as securities mature
• Protection against interest rate changes
• Opportunities to reinvest at new rates

**Emergency Fund Optimization**
• Keep 3-6 months expenses in high-yield savings
• Consider money market accounts for higher rates
• Use CDs for portions you won't need immediately
• Monitor online banks for competitive rates

**Advanced Interest Strategies**

**Float vs. Fixed Decisions**
For businesses and sophisticated investors:
• Analyze interest rate forecasts
• Consider hedging strategies
• Evaluate swap opportunities
• Balance risk tolerance with cost savings

**Tax Implications**
• Municipal bonds for high-income earners
• Consider after-tax yields when comparing investments
• Understand how interest income affects your tax bracket
• Time investment sales for optimal tax treatment

**International Considerations**
• Currency risk in foreign investments
• International interest rate differentials
• Impact of global economic conditions
• Diversification benefits and risks

**Psychological Aspects of Interest Decisions**

**Present Bias**: Tendency to overweight immediate costs and benefits
**Loss Aversion**: Feeling losses more acutely than equivalent gains
**Anchoring**: Over-relying on first information received (like initial rates quoted)
**Optimism Bias**: Assuming rates will move in your favor

**Making Better Interest-Based Decisions**
• Use calculators to quantify different scenarios
• Consider total cost/return over time, not just monthly payments
• Factor in your risk tolerance and life circumstances
• Regularly review and adjust strategies as conditions change
• Seek professional advice for complex decisions

**Long-Term Wealth Building with Interest**
• Start early to maximize compound interest benefits
• Reinvest all interest and dividends
• Gradually increase savings rates over time
• Balance growth investments with stable, interest-bearing accounts
• Use interest knowledge to evaluate all financial products

Remember: Understanding interest rates isn't just about calculations - it's about making informed decisions that align with your financial goals and risk tolerance. The knowledge you gain here will serve you throughout your financial life, helping you build wealth more effectively and avoid costly mistakes.`}];return c.jsx(Hn,{title:"Interest Rates Explained",intro:"Understand how interest rates work and how they impact your borrowing and saving decisions.",sections:n,videoEmbed:c.jsx(bn,{videoId:"lMVwYoiiV0w",title:"Simple vs. Compound Interest | Simple Beginners Guide"}),duration:"10 min",difficulty:"Beginner",prevLessonPath:"/lessons/understanding-credit",prevLessonTitle:"Understanding Credit",nextLessonPath:"/lessons/loans-and-mortgages",nextLessonTitle:"Loans & Mortgages",quizId:"interest-rates"})}function zR(){const n=[{title:"Understanding Different Types of Loans",content:`Loans are essential financial tools that allow you to make major purchases and investments by borrowing money today and repaying it over time. Understanding the different types helps you choose the right financing for your needs.

**Secured vs. Unsecured Loans**

**Secured Loans** are backed by collateral - an asset the lender can seize if you don't repay:
• **Mortgages**: Your home serves as collateral
• **Auto Loans**: The vehicle secures the loan
• **Home Equity Loans**: Your home's equity backs the loan
• **Secured Personal Loans**: Various assets can serve as collateral

Benefits: Lower interest rates, larger loan amounts, easier approval
Risks: Loss of collateral if you default

**Unsecured Loans** don't require collateral but rely on your creditworthiness:
• **Personal Loans**: For various purposes, 2-7 year terms
• **Credit Cards**: Revolving credit lines
• **Student Loans**: Education financing with special protections
• **Signature Loans**: Based solely on your promise to repay

Benefits: No risk of losing specific assets, faster approval process
Drawbacks: Higher interest rates, stricter qualification requirements

**Installment vs. Revolving Credit**

**Installment Loans** have fixed payments over a set period:
• Predictable monthly payments
• Declining balance over time
• Fixed or variable interest rates
• Examples: auto loans, mortgages, personal loans

**Revolving Credit** allows you to borrow, repay, and borrow again:
• Variable payment amounts
• Reusable credit line
• Interest only on outstanding balance
• Examples: credit cards, home equity lines of credit (HELOC)

**Specialized Loan Categories**

**Government-Backed Loans**:
• **FHA Loans**: Lower down payment mortgages (3.5%)
• **VA Loans**: Military veteran mortgages (0% down)
• **USDA Loans**: Rural area mortgages
• **SBA Loans**: Small business financing

**Alternative Lending**:
• **Peer-to-Peer Loans**: Individual investors fund your loan
• **Payday Loans**: Short-term, high-cost emergency loans (avoid if possible)
• **Title Loans**: Your car title secures a short-term loan
• **Online Lenders**: Fast approval, often higher rates`},{title:"Comprehensive Mortgage Guide",content:`A mortgage is likely the largest loan you'll ever take, making it crucial to understand every aspect of the process.

**How Mortgages Work**
When you get a mortgage, the lender pays the seller for your home, and you agree to repay the lender over time (typically 15-30 years) with interest. Your home serves as collateral, meaning the lender can foreclose if you don't make payments.

**Types of Mortgages**

**Fixed-Rate Mortgages**:
• Interest rate stays the same throughout the loan
• Predictable monthly payments
• Protection against rising interest rates
• Most popular choice for long-term homeowners

**Adjustable-Rate Mortgages (ARMs)**:
• Interest rate changes periodically (annually after initial period)
• Often start with lower rates than fixed mortgages
• Payments can increase or decrease over time
• Better for short-term ownership or falling rate environments

**Government-Insured Mortgages**:

**FHA Loans**:
• 3.5% down payment minimum
• More flexible credit requirements
• Mortgage insurance required
• Loan limits vary by area

**VA Loans** (Veterans):
• 0% down payment option
• No mortgage insurance required
• Competitive interest rates
• Reusable benefit

**USDA Loans** (Rural areas):
• 0% down payment in eligible areas
• Income limits apply
• Property must be in qualifying rural area

**Conventional Loans**:
• Not government-insured
• Typically require 5-20% down
• PMI required if less than 20% down
• More flexible property types and locations

**Jumbo Loans**:
• Exceed conforming loan limits ($766,550+ in most areas)
• Stricter qualification requirements
• Typically require larger down payments
• Higher interest rates than conventional loans

**Understanding Mortgage Terms**

**Principal**: The actual loan amount you borrow
**Interest**: The cost of borrowing, expressed as an annual percentage
**Property Taxes**: Local government taxes on your property value
**Insurance**: Homeowner's insurance and possibly mortgage insurance
**Escrow**: Account where lender collects taxes and insurance payments

**PITI Calculation Example**:
$300,000 home, $250,000 loan at 6.5% for 30 years:
• Principal & Interest: $1,580/month
• Property Taxes: $400/month
• Insurance: $100/month
• PMI: $125/month
• **Total PITI**: $2,205/month`},{title:"Down Payments and Private Mortgage Insurance (PMI)",content:`Your down payment significantly impacts your mortgage terms, monthly payments, and total cost of homeownership.

**Down Payment Basics**
The down payment is money you pay upfront toward the home's purchase price. It reduces your loan amount and demonstrates your commitment to the lender.

**Down Payment Amounts by Loan Type**:
• **Conventional**: 5-20% (3% for first-time buyers)
• **FHA**: 3.5% minimum
• **VA**: 0% for qualified veterans
• **USDA**: 0% in eligible rural areas

**Impact of Down Payment Size**

**Example: $400,000 Home Purchase**

**5% Down ($20,000)**:
• Loan Amount: $380,000
• Monthly Payment: $2,406 (plus PMI $190)
• Total Monthly: $2,596

**10% Down ($40,000)**:
• Loan Amount: $360,000
• Monthly Payment: $2,279 (plus PMI $180)
• Total Monthly: $2,459

**20% Down ($80,000)**:
• Loan Amount: $320,000
• Monthly Payment: $2,027 (no PMI)
• Total Monthly: $2,027

**Private Mortgage Insurance (PMI) Explained**

PMI protects the lender if you default on your loan. It's required on conventional loans with less than 20% down.

**PMI Costs**:
• Typically 0.3% to 1.5% of loan amount annually
• Paid monthly as part of mortgage payment
• Can be removed once you reach 20% equity

**PMI Removal Strategies**:
• **Automatic**: Removed at 78% loan-to-value ratio
• **Request Removal**: At 80% loan-to-value with good payment history
• **Refinance**: If home value increased significantly
• **Extra Payments**: Accelerate principal reduction

**PMI vs. FHA Mortgage Insurance Premium (MIP)**:
• PMI (conventional loans): Can be removed
• MIP (FHA loans): Often permanent for the life of the loan

**Down Payment Sources**
• Personal savings (most common)
• Gift from family members (with proper documentation)
• Down payment assistance programs
• 401(k) loans (for first-time buyers)
• IRA withdrawals (up to $10,000 penalty-free for first home)

**Strategies for Low Down Payment Buyers**
• Start with FHA loan, refinance to conventional later
• Look for first-time buyer programs
• Consider homes below maximum budget to minimize PMI
• Factor PMI into affordability calculations
• Build equity quickly with extra principal payments`},{title:"The Complete Loan Application Process",content:`Understanding the loan application process helps you prepare properly and increases your chances of approval at the best terms.

**Pre-Qualification vs. Pre-Approval**

**Pre-Qualification** (Soft inquiry):
• Basic financial overview
• Estimated loan amount
• No verification of information
• Takes minutes to complete
• Good for initial house hunting

**Pre-Approval** (Hard inquiry):
• Thorough financial review
• Verification of income, assets, credit
• Conditional loan commitment
• Expires in 60-90 days
• Strengthens purchase offers

**Required Documentation**
Gather these documents before applying:

**Income Verification**:
• 2 years of tax returns
• Recent pay stubs (30-60 days)
• W-2 forms for past 2 years
• 1099s for contract work
• Profit & loss statements (self-employed)

**Asset Documentation**:
• Bank statements (2-3 months)
• Investment account statements
• 401(k)/retirement account statements
• Gift letters for down payment assistance

**Credit Information**:
• Credit reports from all three bureaus
• Explanations for any credit issues
• Debt statements (credit cards, loans)

**Property Information** (for home purchases):
• Purchase contract
• Property appraisal
• Homeowner's insurance quote
• HOA documentation (if applicable)

**The Underwriting Process**

**Initial Review**: Loan officer reviews your application and documents
**Automated Underwriting**: Computer system evaluates your creditworthiness
**Manual Underwriting**: Human underwriter reviews complex applications
**Conditional Approval**: Approval subject to meeting specific conditions
**Final Approval**: All conditions met, ready to close

**Common Reasons for Loan Denial**:
• Insufficient income or employment history
• High debt-to-income ratio
• Poor credit history or low credit score
• Insufficient down payment or assets
• Property issues (appraisal problems, condition)
• Changes in financial situation during process

**Tips for Smooth Loan Processing**:
• Don't make large purchases during the process
• Don't change jobs unless absolutely necessary
• Respond quickly to lender requests
• Keep all financial documentation organized
• Don't close credit accounts during the process
• Maintain consistent banking patterns`},{title:"Loan Shopping and Rate Comparison",content:`Shopping for loans effectively can save you thousands of dollars over the life of your loan. Here's how to compare options systematically.

**The Loan Shopping Timeline**
• **Rate Shopping Window**: 14-45 days for mortgage/auto loans (multiple inquiries count as one on credit report)
• **Application Process**: 30-45 days for mortgages
• **Closing Preparation**: 7-14 days before closing

**Key Factors to Compare**

**Interest Rates and APR**:
• **Interest Rate**: The cost of borrowing before fees
• **APR**: Total cost including fees and closing costs
• **Points**: Upfront fees to reduce interest rate (1 point = 1% of loan amount)

**Loan Terms**:
• **Loan Length**: 15-year vs. 30-year mortgages
• **Fixed vs. Variable**: Rate stability vs. potential savings
• **Prepayment Penalties**: Fees for paying off early

**Closing Costs and Fees**:
• **Origination Fees**: Lender charges for processing
• **Application Fees**: Upfront processing costs
• **Appraisal Fees**: Property valuation costs
• **Title Insurance**: Protection against ownership issues

**Lender Comparison**

**Traditional Banks**:
• Established relationships
• In-person service
• Often higher rates
• Stricter qualification requirements

**Credit Unions**:
• Member-owned, not-for-profit
• Often better rates and terms
• Personalized service
• Membership requirements

**Online Lenders**:
• Streamlined application process
• Competitive rates
• Lower overhead costs
• Less personal interaction

**Mortgage Brokers**:
• Access to multiple lenders
• Can find specialized programs
• Broker fees to consider
• May not represent all options

**Rate Lock Strategies**
• **Rate Lock Period**: 30-60 days typical
• **Float-Down Options**: Ability to take lower rate if rates fall
• **Extension Fees**: Cost to extend lock period
• **Timing**: Lock when you find acceptable rate and are ready to close

**Calculating True Loan Costs**

**Example: $300,000 Mortgage Comparison**

**Lender A**: 6.25% rate, $2,000 closing costs
• Monthly Payment: $1,847
• Total Interest (30 years): $364,932
• Total Cost: $366,932

**Lender B**: 6.5% rate, $500 closing costs
• Monthly Payment: $1,896
• Total Interest (30 years): $382,632
• Total Cost: $383,132

**Break-even**: Lender A saves $16,200 over 30 years despite higher upfront costs

**Red Flags When Loan Shopping**:
• Pressure to sign immediately
• Rates significantly below market
• Excessive upfront fees
• Unclear terms and conditions
• Unlicensed lenders
• Promises that seem too good to be true

**Negotiation Strategies**:
• Get quotes from multiple lenders
• Use competing offers to negotiate
• Ask about fee waivers
• Consider timing (rates change daily)
• Don't be afraid to walk away
• Read all documents carefully before signing`},{title:"Advanced Loan Strategies and Optimization",content:`Once you understand the basics, these advanced strategies can help you optimize your borrowing and build wealth more effectively.

**Loan Acceleration Strategies**

**Extra Principal Payments**:
Making additional payments toward principal can significantly reduce interest costs:
• **Monthly Extra**: $100 extra on $300k mortgage saves $63,000 interest
• **Annual Bonus**: Use tax refunds or bonuses for principal reduction
• **Bi-weekly Payments**: 26 payments per year instead of 12 (equivalent to 13 monthly payments)

**Refinancing Strategies**

**Rate-and-Term Refinancing**:
• Lower interest rate reduces payments
• Change loan term (30-year to 15-year)
• Remove PMI with increased home value
• Generally worth it if rate drops 0.5-1%

**Cash-Out Refinancing**:
• Borrow against home equity
• Use funds for improvements, debt consolidation, investments
• Higher loan amount, potentially higher rate
• Consider tax implications

**Debt Consolidation with Loans**

**Benefits**:
• Single monthly payment
• Potentially lower interest rate
• Fixed payment schedule
• Simplified debt management

**Considerations**:
• Total interest cost over loan term
• Fees associated with consolidation
• Risk of accumulating new debt
• Impact on credit utilization

**Investment Property Financing**

**Primary vs. Investment Property Rates**:
• Investment properties typically 0.5-1% higher rates
• Larger down payment requirements (20-25%)
• Stricter qualification requirements
• Different tax implications

**House Hacking Strategies**:
• Live in duplex, rent other unit
• FHA loans allow 3.5% down on 2-4 unit properties
• Rental income can help qualify for larger loans
• Build wealth through appreciation and cash flow

**Business Loan Strategies**

**SBA Loans**:
• Government-backed business financing
• Lower down payments and rates
• Longer repayment terms
• More complex application process

**Equipment Financing**:
• Equipment serves as collateral
• Preserve working capital
• Potential tax advantages through depreciation

**Lines of Credit**:
• Flexible access to funds
• Interest only on used portion
• Good for seasonal businesses
• Variable interest rates

**Loan Portfolio Management**

**Diversification Strategies**:
• Mix of fixed and variable rate loans
• Different maturity dates
• Various collateral types
• Balance risk and return

**Tax Optimization**:
• Mortgage interest deduction (up to $750,000 loan amount)
• Business loan interest deductibility
• Investment property depreciation
• Home office deductions

**Exit Strategies**:
• Refinancing when rates drop
• Selling assets to pay off loans
• Using other investments to pay down debt
• Strategic default considerations (last resort)

**Risk Management**:
• Disability insurance to cover payments
• Life insurance to protect family
• Emergency funds for payment continuity
• Regular review of loan portfolio performance

Remember: Loans are tools that can either build or destroy wealth depending on how they're used. Focus on borrowing for appreciating assets and investments that generate returns exceeding the loan's cost.`}];return c.jsx(Hn,{title:"Loans & Mortgages",intro:"Navigate the world of borrowing with confidence, from personal loans to home mortgages.",sections:n,videoEmbed:c.jsxs("div",{className:"space-y-4",children:[c.jsx(bn,{videoId:"fuiiJuB7tJs",title:"Loans 101 (Loan Basics 1/3)"}),c.jsx(bn,{videoId:"l4J5RvGB-iM",title:"Mortgage Explained | Personal Finance 101"})]}),duration:"18 min",difficulty:"Intermediate",prevLessonPath:"/lessons/interest-rates",prevLessonTitle:"Interest Rates Explained",nextLessonPath:"/lessons/investment-basics",nextLessonTitle:"Investment Basics",quizId:"loans-and-mortgages"})}function BR(){const n=[{title:"The Fundamental Reasons to Invest",content:`Investing is essential for building long-term wealth and achieving financial independence. Understanding why you should invest helps motivate consistent, disciplined investing behavior.

**The Inflation Problem**
Money sitting in checking accounts loses purchasing power over time due to inflation. If inflation averages 3% annually and your savings earn 0.5%, you're effectively losing 2.5% of purchasing power each year.

**Historical Example**: $1,000 in 1990 had the same purchasing power as $2,300 in 2023. Without investing, your money would have lost more than half its value.

**The Power of Compound Growth**
Investing allows your money to grow exponentially rather than linearly. When your investments earn returns, those returns then earn returns, creating a snowball effect.

**Example: $10,000 Invested at 7% Annual Return**:
• Year 10: $19,672
• Year 20: $38,697
• Year 30: $76,123
• Year 40: $149,745

The last decade alone adds $73,622 - more than the first three decades combined!

**Building Financial Independence**
Investing creates passive income streams that can eventually replace your salary. The goal is to accumulate enough assets that their returns cover your living expenses.

**The 25x Rule**: To maintain your current lifestyle in retirement, you need about 25 times your annual expenses invested. If you spend $60,000 annually, you need $1.5 million invested.

**Time Advantage**
Starting early gives you the most powerful investing tool: time. A 25-year-old investing $200 monthly at 7% will have more at retirement than a 35-year-old investing $400 monthly at the same return.

**Wealth Building vs. Savings**
• **Savings**: Preserve money, low risk, low return
• **Investing**: Grow money, higher risk, higher potential return

**Protection Against Economic Changes**
Diversified investing protects against:
• Inflation eroding purchasing power
• Currency devaluation
• Economic downturns (when spread across time)
• Industry-specific risks

**The Cost of Not Investing**
Every year you delay investing costs you significantly:
• Opportunity cost of compound growth
• Higher required savings rates later
• Increased risk of not meeting financial goals
• Dependence on Social Security and employer benefits`},{title:"Understanding Different Asset Classes",content:`Different types of investments serve different purposes in your portfolio. Understanding each asset class helps you make informed allocation decisions.

**Stocks (Equities)**
Stocks represent ownership shares in companies. As a shareholder, you own a piece of the business and benefit from its growth and profits.

**Types of Stocks**:
• **Large-cap**: Established companies ($10B+ market cap)
• **Mid-cap**: Growing companies ($2-10B market cap)
• **Small-cap**: Smaller companies (under $2B market cap)
• **Growth stocks**: Companies expected to grow faster than average
• **Value stocks**: Companies trading below their intrinsic value
• **Dividend stocks**: Companies that pay regular income to shareholders

**Stock Investing Approaches**:
• **Individual stocks**: Higher risk, potential for higher returns
• **Index funds**: Broad market exposure, lower risk
• **Sector funds**: Focus on specific industries
• **International stocks**: Geographic diversification

**Bonds (Fixed Income)**
Bonds are loans you make to companies or governments. They pay regular interest and return your principal at maturity.

**Types of Bonds**:
• **Government bonds**: U.S. Treasury securities, very safe
• **Corporate bonds**: Company debt, higher yield than government bonds
• **Municipal bonds**: State/local government debt, often tax-free
• **High-yield bonds**: Lower-rated bonds with higher interest rates

**Bond Characteristics**:
• **Face value**: Amount paid at maturity
• **Coupon rate**: Annual interest rate
• **Maturity date**: When principal is repaid
• **Credit rating**: Assessment of default risk

**Real Estate Investment Trusts (REITs)**
REITs allow you to invest in real estate without buying property directly.

**REIT Types**:
• **Equity REITs**: Own and operate income-producing real estate
• **Mortgage REITs**: Finance real estate transactions
• **Hybrid REITs**: Combination of equity and mortgage REITs

**Benefits**: Regular income, inflation protection, portfolio diversification
**Considerations**: Interest rate sensitivity, property market risks

**Commodities**
Physical goods like gold, oil, agricultural products, and precious metals.

**Investment Methods**:
• **Physical ownership**: Buying actual commodities
• **Futures contracts**: Agreements to buy/sell at future dates
• **Commodity ETFs**: Funds that track commodity prices
• **Commodity stocks**: Companies involved in commodity production

**Alternative Investments**
• **Private equity**: Investments in private companies
• **Hedge funds**: Complex strategies for wealthy investors
• **Cryptocurrency**: Digital assets with high volatility
• **Collectibles**: Art, rare coins, vintage items

**Cash and Cash Equivalents**
• **High-yield savings accounts**: FDIC-insured, immediate access
• **Money market funds**: Slightly higher yields, very liquid
• **Certificates of deposit**: Fixed terms, guaranteed returns
• **Treasury bills**: Short-term government securities

**Asset Class Risk and Return Characteristics**:
• **Highest Risk/Return**: Individual stocks, commodities, alternatives
• **Moderate Risk/Return**: Stock index funds, REITs, corporate bonds
• **Lower Risk/Return**: Government bonds, CDs, high-yield savings
• **Lowest Risk/Return**: Treasury bills, money market accounts`},{title:"Investment Vehicles: Mutual Funds, ETFs, and More",content:`Understanding different investment vehicles helps you choose the most cost-effective and suitable options for your goals.

**Mutual Funds**
Professionally managed pools of money from many investors used to buy securities.

**Mutual Fund Structure**:
• **Active management**: Fund managers make investment decisions
• **Diversification**: Instant access to hundreds or thousands of securities
• **Professional oversight**: Research teams analyze investments
• **Economies of scale**: Lower costs through pooled purchasing

**Types of Mutual Funds**:
• **Stock funds**: Focus on equity investments
• **Bond funds**: Primarily fixed-income securities
• **Balanced funds**: Mix of stocks and bonds
• **Target-date funds**: Automatically adjust allocation as you age
• **Index funds**: Track specific market indexes

**Mutual Fund Fees**:
• **Expense ratio**: Annual fee (0.1% to 2%+ of assets)
• **Load fees**: Sales charges (front-end or back-end)
• **12b-1 fees**: Marketing and distribution costs
• **Transaction fees**: Costs for buying/selling shares

**Exchange-Traded Funds (ETFs)**
Similar to mutual funds but trade like individual stocks on exchanges.

**ETF Advantages**:
• **Lower fees**: Typically 0.03% to 0.75% expense ratios
• **Tax efficiency**: More tax-efficient than mutual funds
• **Flexibility**: Trade during market hours
• **Transparency**: Holdings disclosed daily

**ETF Types**:
• **Broad market ETFs**: Track major indexes (S&P 500, Total Stock Market)
• **Sector ETFs**: Focus on specific industries
• **International ETFs**: Foreign market exposure
• **Bond ETFs**: Fixed-income exposure
• **Commodity ETFs**: Exposure to physical goods

**Index Funds vs. Actively Managed Funds**

**Index Funds**:
• **Lower costs**: Expense ratios typically under 0.5%
• **Consistent performance**: Match market returns
• **Lower turnover**: Less trading, more tax-efficient
• **Simplicity**: Easy to understand and compare

**Actively Managed Funds**:
• **Professional management**: Attempt to beat market returns
• **Higher costs**: Expense ratios often 1%+ annually
• **Inconsistent performance**: Most fail to beat their benchmark long-term
• **Tax implications**: Higher turnover can generate taxable events

**Individual Stocks**
Buying shares of specific companies directly.

**Advantages**:
• **No management fees**: Keep all returns
• **Control**: Choose exactly what you own
• **Potential for high returns**: Successful companies can provide exceptional returns

**Disadvantages**:
• **Higher risk**: Lack of diversification
• **Research required**: Need to analyze individual companies
• **Time intensive**: Ongoing monitoring required

**Target-Date Funds**
All-in-one funds that automatically adjust allocation based on your target retirement date.

**How They Work**:
• **Aggressive early**: Higher stock allocation when young
• **Conservative later**: Shift to bonds as retirement approaches
• **Automatic rebalancing**: No action required from investor

**Example Allocation by Age**:
• Age 25: 90% stocks, 10% bonds
• Age 45: 70% stocks, 30% bonds
• Age 65: 40% stocks, 60% bonds

**Robo-Advisors**
Automated investment platforms that create and manage portfolios.

**Services Provided**:
• **Automated rebalancing**: Maintain target allocations
• **Tax-loss harvesting**: Offset gains with losses
• **Goal-based investing**: Customize for specific objectives
• **Low fees**: Typically 0.25%-0.5% annually

**Popular Robo-Advisors**: Betterment, Wealthfront, Vanguard Digital Advisor

**Choosing the Right Investment Vehicle**:
• **Beginners**: Start with target-date funds or broad market ETFs
• **Intermediate**: Add sector ETFs and individual stocks
• **Advanced**: Consider alternatives and complex strategies
• **All levels**: Prioritize low fees and broad diversification`},{title:"Building and Managing Your Investment Portfolio",content:`Creating an effective investment portfolio requires understanding asset allocation, diversification, and rebalancing strategies.

**Asset Allocation Fundamentals**
Asset allocation - how you divide investments among different asset classes - is the most important factor in determining your portfolio's risk and return.

**Age-Based Allocation Rules**:
• **"100 minus your age" rule**: Percentage in stocks
• **110 minus your age**: More aggressive version
• **Target-date fund approach**: Gradual shift from stocks to bonds

**Example Allocations by Life Stage**:

**Age 25 (40+ years to retirement)**:
• 90% stocks (60% U.S., 30% international)
• 10% bonds
• High growth potential, can weather volatility

**Age 45 (20 years to retirement)**:
• 70% stocks (50% U.S., 20% international)
• 25% bonds
• 5% alternatives (REITs, commodities)

**Age 65 (retirement)**:
• 40% stocks (30% U.S., 10% international)
• 55% bonds
• 5% cash/short-term securities

**Diversification Strategies**

**Geographic Diversification**:
• **U.S. stocks**: 50-70% of equity allocation
• **International developed markets**: 20-30%
• **Emerging markets**: 5-15%
• Benefits: Reduce country-specific risks, access global growth

**Sector Diversification**:
• **Technology**: Growth potential but volatile
• **Healthcare**: Defensive, aging population benefits
• **Financial services**: Economic cycle dependent
• **Consumer goods**: Stable, dividend-paying
• **Avoid over-concentration** in any single sector

**Company Size Diversification**:
• **Large-cap stocks**: Stability, established companies
• **Mid-cap stocks**: Growth potential, moderate risk
• **Small-cap stocks**: High growth potential, higher volatility

**Style Diversification**:
• **Growth stocks**: Companies with above-average growth rates
• **Value stocks**: Companies trading below intrinsic value
• **Blend approach**: Combination of growth and value

**Rebalancing Your Portfolio**
Rebalancing maintains your target asset allocation as market movements change your portfolio's composition.

**Rebalancing Methods**:
• **Calendar rebalancing**: Quarterly or annually
• **Threshold rebalancing**: When allocation drifts 5-10% from target
• **Hybrid approach**: Combination of time and threshold triggers

**Rebalancing Example**:
Target allocation: 70% stocks, 30% bonds
After market gains: 80% stocks, 20% bonds
Action: Sell stocks, buy bonds to return to 70/30

**Tax-Efficient Rebalancing**:
• **Use new contributions**: Direct new money to underweight assets
• **Rebalance in tax-advantaged accounts**: Avoid taxable events
• **Tax-loss harvesting**: Sell losing investments to offset gains

**Dollar-Cost Averaging (DCA)**
Investing a fixed amount regularly regardless of market conditions.

**DCA Benefits**:
• **Reduces timing risk**: Avoid trying to time the market
• **Emotional discipline**: Removes emotion from investing decisions
• **Potential for lower average cost**: Buy more shares when prices are low

**DCA Example**:
Invest $500 monthly in S&P 500 index fund:
• Month 1: $500 buys 10 shares at $50
• Month 2: $500 buys 12.5 shares at $40
• Month 3: $500 buys 8.33 shares at $60
• Average cost per share: $48.89 vs. average price of $50

**Portfolio Monitoring and Adjustments**

**Regular Review Schedule**:
• **Monthly**: Check account balances and contributions
• **Quarterly**: Review asset allocation and performance
• **Annually**: Comprehensive portfolio review and rebalancing

**When to Adjust Your Portfolio**:
• **Life changes**: Marriage, children, job changes
• **Goal changes**: New financial objectives
• **Risk tolerance shifts**: Market crashes, personal circumstances
• **Time horizon changes**: Approaching retirement

**Common Portfolio Mistakes to Avoid**:
• **Over-diversification**: Owning too many similar funds
• **Under-diversification**: Concentrated in few investments
• **Emotional investing**: Buying high, selling low
• **Timing the market**: Attempting to predict short-term movements
• **Ignoring fees**: High-cost investments erode returns
• **Lack of rebalancing**: Letting allocation drift from target`},{title:"Investment Strategies and Advanced Concepts",content:`As you become more comfortable with investing, these advanced strategies can help optimize your returns and manage risk more effectively.

**Value Investing**
Strategy of buying stocks that appear underpriced by fundamental analysis.

**Value Investing Principles**:
• **Intrinsic value**: Calculate what a company is really worth
• **Margin of safety**: Buy at significant discount to intrinsic value
• **Long-term focus**: Hold undervalued stocks until market recognizes value
• **Quality companies**: Focus on businesses with sustainable competitive advantages

**Key Value Metrics**:
• **Price-to-earnings (P/E) ratio**: Stock price ÷ earnings per share
• **Price-to-book (P/B) ratio**: Stock price ÷ book value per share
• **Debt-to-equity ratio**: Company's debt relative to shareholder equity
• **Return on equity (ROE)**: Net income ÷ shareholder equity

**Growth Investing**
Strategy of buying stocks in companies expected to grow faster than average.

**Growth Investing Characteristics**:
• **Higher P/E ratios**: Investors pay premium for future growth
• **Reinvested earnings**: Companies plow profits back into expansion
• **Revenue growth**: Focus on increasing sales and market share
• **Innovation focus**: Technology and disruptive companies

**Growth vs. Value Performance**:
• **Bull markets**: Growth often outperforms
• **Bear markets**: Value typically provides more protection
• **Long-term**: Both strategies can be successful

**Dividend Investing**
Focus on stocks that pay regular dividends to shareholders.

**Dividend Strategy Benefits**:
• **Regular income**: Quarterly or monthly cash payments
• **Inflation protection**: Dividends often grow over time
• **Lower volatility**: Dividend stocks tend to be less volatile
• **Compounding**: Reinvesting dividends accelerates growth

**Dividend Metrics**:
• **Dividend yield**: Annual dividends ÷ stock price
��� **Payout ratio**: Dividends ÷ earnings (sustainability measure)
• **Dividend growth rate**: Annual increase in dividend payments

**Sector Rotation Strategy**
Moving investments between different sectors based on economic cycles.

**Economic Cycle Phases**:
• **Early cycle**: Technology, consumer discretionary perform well
• **Mid cycle**: Energy, materials benefit from growth
• **Late cycle**: Healthcare, utilities provide stability
• **Recession**: Consumer staples, bonds offer protection

**International Investing**
Adding foreign investments to your portfolio.

**International Benefits**:
• **Diversification**: Reduce dependence on U.S. market
• **Growth opportunities**: Access to faster-growing economies
• **Currency exposure**: Potential benefits from dollar weakness

**International Considerations**:
• **Currency risk**: Exchange rate fluctuations affect returns
• **Political risk**: Government instability can impact investments
• **Information challenges**: Less transparent financial reporting
• **Tax complications**: Foreign tax implications

**Tax-Efficient Investing Strategies**

**Asset Location**:
• **Tax-advantaged accounts**: Hold tax-inefficient investments
• **Taxable accounts**: Hold tax-efficient investments
• **Example**: Put bonds in 401(k), index funds in taxable account

**Tax-Loss Harvesting**:
• **Realize losses**: Sell losing investments to offset gains
• **Wash sale rule**: Can't repurchase same security for 30 days
• **Tax alpha**: Additional return from tax management

**Alternative Investment Strategies**

**Real Estate Investment**:
• **REITs**: Liquid real estate exposure
• **Direct ownership**: Rental properties, flipping
• **Real estate crowdfunding**: Access to commercial real estate

**Commodities Investment**:
• **Inflation hedge**: Commodities often rise with inflation
• **Portfolio diversification**: Low correlation with stocks/bonds
• **Investment methods**: ETFs, futures, direct ownership

**Environmental, Social, and Governance (ESG) Investing**:
• **Sustainable investing**: Focus on environmentally responsible companies
• **Impact investing**: Investments intended to generate positive social impact
• **ESG funds**: Mutual funds and ETFs with ESG criteria

**Behavioral Finance and Investment Psychology**

**Common Investment Biases**:
• **Confirmation bias**: Seeking information that confirms existing beliefs
• **Loss aversion**: Feeling losses more acutely than gains
• **Herding**: Following the crowd rather than independent analysis
• **Overconfidence**: Believing you can predict market movements

**Overcoming Emotional Investing**:
• **Stick to your plan**: Don't let emotions drive decisions
• **Automate investments**: Remove emotion from the equation
• **Focus on long-term**: Short-term volatility is normal
• **Educate yourself**: Understanding reduces fear and panic

Remember: Successful investing is more about time in the market than timing the market. Start early, invest consistently, diversify broadly, and stay disciplined through market ups and downs.`}];return c.jsx(Hn,{title:"Investment Basics",intro:"Learn the fundamentals of investing in stocks, bonds, and funds to build long-term wealth.",sections:n,videoEmbed:c.jsx(bn,{videoId:"Ay4fmZdZqJE",title:"How to Invest for Beginners in 2025"}),duration:"20 min",difficulty:"Intermediate",prevLessonPath:"/lessons/loans-and-mortgages",prevLessonTitle:"Loans & Mortgages",nextLessonPath:"/lessons/risk-vs-return",nextLessonTitle:"Risk vs Return",quizId:"investment-basics"})}function HR(){const n=[{title:"The Complete Guide to Investment Risk",content:`Investment risk is the possibility that your actual returns will differ from your expected returns. Understanding different types of risk helps you make informed investment decisions and build appropriate portfolios.

**Systematic Risk (Market Risk)**
Risk that affects the entire market or economy and cannot be eliminated through diversification.

**Types of Systematic Risk**:
• **Market Risk**: Overall stock market fluctuations
• **Interest Rate Risk**: Changes in interest rates affecting all investments
• **Inflation Risk**: Rising prices reducing purchasing power
• **Political Risk**: Government policy changes affecting markets
• **Economic Risk**: Recession, unemployment, GDP changes

**Example**: During the 2008 financial crisis, nearly all asset classes declined regardless of company quality or diversification.

**Unsystematic Risk (Specific Risk)**
Risk specific to individual companies or industries that can be reduced through diversification.

**Types of Unsystematic Risk**:
• **Business Risk**: Company-specific operational challenges
• **Financial Risk**: Company's debt levels and financial structure
• **Industry Risk**: Sector-specific challenges (e.g., energy price swings)
• **Management Risk**: Poor leadership decisions
• **Regulatory Risk**: Industry-specific regulation changes

**Example**: Enron's collapse in 2001 was primarily unsystematic risk that could have been mitigated through diversification.

**Measuring Risk**

**Standard Deviation**:
Measures how much returns vary from the average return. Higher standard deviation indicates higher volatility.

**Historical Annual Returns and Standard Deviation**:
• **Large-cap stocks**: 10% return, 20% standard deviation
• **Small-cap stocks**: 12% return, 32% standard deviation
• **Bonds**: 5% return, 6% standard deviation
• **Treasury bills**: 3% return, 3% standard deviation

**Beta**:
Measures a stock's volatility relative to the overall market (beta = 1.0).
• **Beta > 1**: More volatile than market
• **Beta < 1**: Less volatile than market
• **Beta = 0**: No correlation with market

**Value at Risk (VaR)**:
Estimates potential losses over a specific time period with a given confidence level.

**Example**: A portfolio with 5% VaR of $10,000 means there's a 5% chance of losing $10,000 or more in the specified period.

**Risk vs. Uncertainty**
• **Risk**: Possible outcomes and probabilities are known
• **Uncertainty**: Possible outcomes or probabilities are unknown

**Example**: Rolling dice is risk (known outcomes), but predicting new technology disruption is uncertainty.

**The Risk Premium**
The extra return investors demand for taking on additional risk compared to risk-free investments.

**Risk Premium = Expected Return - Risk-Free Rate**

**Example**: If stocks are expected to return 8% and Treasury bills yield 2%, the equity risk premium is 6%.`},{title:"The Risk-Return Relationship: Foundation of Finance",content:`The relationship between risk and return is fundamental to all investing. Understanding this relationship helps you set realistic expectations and make appropriate investment choices.

**The Risk-Return Spectrum**

**Conservative Investments (Low Risk, Low Return)**:
• **Savings accounts**: 0.5-2% annual return, virtually no risk
• **CDs**: 2-4% annual return, FDIC insured
• **Treasury bonds**: 3-5% annual return, government backed
• **Money market funds**: 1-3% annual return, very stable

**Moderate Investments (Medium Risk, Medium Return)**:
• **Investment-grade corporate bonds**: 4-6% annual return
• **Dividend-paying stocks**: 6-8% annual return
• **Balanced mutual funds**: 5-7% annual return
• **REITs**: 6-10% annual return

**Aggressive Investments (High Risk, High Return)**:
• **Growth stocks**: 8-12% potential annual return
• **Small-cap stocks**: 10-15% potential annual return
• **Emerging markets**: 8-15% potential annual return
• **Individual stocks**: -100% to +500%+ potential annual return

**Historical Risk-Return Evidence**

**90-Year Historical Returns (1928-2018)**:
• **Large-cap stocks**: 10.1% average annual return
• **Small-cap stocks**: 12.1% average annual return
• **Long-term government bonds**: 5.5% average annual return
• **Treasury bills**: 3.4% average annual return
• **Inflation**: 2.9% average annual rate

**The Risk-Return Trade-off in Action**

**Conservative Portfolio (30% stocks, 70% bonds)**:
• **Expected return**: 6-7% annually
• **Standard deviation**: 8-10%
• **Best year**: +15% to +20%
• **Worst year**: -5% to -10%

**Moderate Portfolio (60% stocks, 40% bonds)**:
• **Expected return**: 7-8% annually
• **Standard deviation**: 12-15%
• **Best year**: +25% to +30%
• **Worst year**: -15% to -20%

**Aggressive Portfolio (90% stocks, 10% bonds)**:
• **Expected return**: 8-10% annually
• **Standard deviation**: 18-22%
�� **Best year**: +35% to +40%
• **Worst year**: -25% to -35%

**Why Higher Risk Demands Higher Returns**

**Rational Investor Behavior**: Investors are risk-averse and require compensation for taking on additional risk.

**Market Efficiency**: If lower-risk investments offered the same returns as higher-risk investments, everyone would choose the lower-risk option, driving down its price and increasing its expected return.

**Risk Capacity vs. Risk Tolerance**

**Risk Capacity**: Your financial ability to withstand losses
• **High capacity**: Large emergency fund, stable income, long time horizon
• **Low capacity**: Limited savings, unstable income, short time horizon

**Risk Tolerance**: Your emotional comfort with volatility
• **High tolerance**: Stay calm during market downturns
• **Low tolerance**: Lose sleep over portfolio fluctuations

**Optimal Risk Level**: Where your risk capacity and tolerance intersect

**Common Risk-Return Mistakes**

**Reaching for Yield**: Taking excessive risk for slightly higher returns
**Example**: Buying junk bonds yielding 8% instead of Treasury bonds yielding 5%, dramatically increasing default risk for just 3% additional yield.

**Risk Perception Errors**: Misunderstanding actual risk levels
**Example**: Thinking individual stocks are safer than diversified funds because you "understand" the companies.

**Timing Risk**: Trying to time market cycles
**Example**: Moving to cash during volatility, missing subsequent recovery.`},{title:"Comprehensive Risk Tolerance Assessment",content:`Accurately assessing your risk tolerance is crucial for building an appropriate investment portfolio. Your risk tolerance is influenced by multiple factors that change over time.

**Financial Factors**

**Time Horizon**:
• **Short-term (1-3 years)**: Conservative approach, preserve capital
• **Medium-term (3-10 years)**: Moderate risk acceptable
• **Long-term (10+ years)**: Can withstand significant volatility

**Example**: Money for a house down payment in 2 years should be in safe investments, while retirement funds for a 30-year-old can be aggressive.

**Income Stability**:
• **Stable employment**: Can take more investment risk
• **Variable income**: Need more conservative approach
• **Multiple income sources**: Allows for higher risk tolerance

**Emergency Fund Status**:
• **6+ months expenses saved**: Higher risk tolerance
• **3-6 months expenses saved**: Moderate risk tolerance
• **Less than 3 months expenses saved**: Conservative approach

**Debt Levels**:
• **No high-interest debt**: Can focus on growth
�� **Some low-interest debt**: Moderate approach
• **High-interest debt**: Pay off debt before aggressive investing

**Psychological Factors**

**Investment Experience**:
• **Novice investors**: Often overestimate risk tolerance
• **Experienced investors**: Better understand their actual reactions
• **Market veterans**: Have lived through multiple cycles

**Loss Aversion**:
Most people feel losses about twice as strongly as equivalent gains.

**Test**: Would you rather:
A) Guaranteed gain of $500
B) 50% chance of gaining $1,000, 50% chance of gaining nothing

Most choose A, despite B having higher expected value ($500 vs. $500).

**Behavioral Biases Affecting Risk Tolerance**:

**Overconfidence**: Believing you can predict market movements
**Herding**: Following crowd behavior during market extremes
**Anchoring**: Over-relying on recent performance
**Recency bias**: Giving too much weight to recent events

**Life Stage Considerations**

**Young Adults (20s-30s)**:
• **High risk tolerance**: Long time horizon for recovery
• **Growth focus**: Emphasize capital appreciation
• **Learning phase**: Can afford to make mistakes

**Middle Age (40s-50s)**:
• **Moderate risk tolerance**: Balancing growth and stability
• **Peak earning years**: May have higher risk capacity
• **Goal clarity**: Clearer picture of retirement needs

**Pre-Retirement (50s-60s)**:
• **Decreasing risk tolerance**: Less time to recover from losses
• **Sequence of returns risk**: Early retirement losses are devastating
• **Transition planning**: Gradually reducing risk

**Retirement (65+)**:
• **Conservative approach**: Emphasis on income and preservation
• **Longevity risk**: Money must last 20-30 years
• **Flexibility needed**: Some growth to combat inflation

**Risk Tolerance Questionnaire**

**Financial Situation Questions**:
1. How many years until you need this money?
2. What percentage of your income can you afford to lose?
3. How stable is your employment?
4. Do you have adequate emergency funds?

**Behavioral Questions**:
1. How would you react to a 20% portfolio loss?
2. Have you invested during market downturns before?
3. Do you check your portfolio balance frequently?
4. Would you panic sell during a market crash?

**Scenario-Based Questions**:
1. Your portfolio loses 30% in a year. Do you:
   a) Sell everything and go to cash
   b) Stop contributing and wait
   c) Continue your investment plan
   d) Invest more money

**Risk Tolerance Adjustments**

**Increasing Risk Tolerance**:
• **Education**: Understanding reduces fear
• **Experience**: Living through market cycles
• **Improved financial situation**: Higher income, more savings
• **Longer time horizon**: More time to recover

**Decreasing Risk Tolerance**:
• **Market losses**: Bad experiences reduce appetite for risk
• **Life changes**: Marriage, children, job loss
• **Approaching goals**: Less time to recover from setbacks
• **Reduced income**: Less ability to handle losses

**Aligning Portfolio with Risk Tolerance**

**Conservative Investors**:
• **Asset allocation**: 30% stocks, 70% bonds
• **Stock focus**: Large-cap dividend stocks, utilities
• **Bond focus**: High-quality government and corporate bonds
• **Alternatives**: REITs, money market funds

**Moderate Investors**:
• **Asset allocation**: 50-70% stocks, 30-50% bonds
• **Stock focus**: Broad market index funds, some international
• **Bond focus**: Mix of government and corporate bonds
• **Alternatives**: Small allocation to REITs or commodities

**Aggressive Investors**:
• **Asset allocation**: 80-100% stocks, 0-20% bonds
• **Stock focus**: Growth stocks, small-cap, emerging markets
• **Bond focus**: Minimal allocation, perhaps high-yield bonds
• **Alternatives**: Individual stocks, sector funds, alternatives

Remember: Your risk tolerance should drive your investment strategy, not the other way around. It's better to earn lower returns that you can stick with than to chase higher returns that cause you to panic and sell at the wrong time.`},{title:"Diversification: The Only Free Lunch in Investing",content:`Diversification is the practice of spreading investments across different assets to reduce overall portfolio risk. It's often called the only "free lunch" in investing because it can reduce risk without necessarily reducing expected returns.

**The Mathematics of Diversification**

**Correlation**: Measures how investments move relative to each other
• **+1.0**: Perfect positive correlation (move exactly together)
• **0.0**: No correlation (move independently)
• **-1.0**: Perfect negative correlation (move in opposite directions)

**Example**: If two investments both return 10% annually but have 0.5 correlation, a portfolio of both will have lower volatility than either individual investment.

**Portfolio Standard Deviation Formula**:
For two assets: σp = √[(w₁σ₁)² + (w₂σ₂)² + 2w₁w₂σ₁σ₂ρ₁₂]

Where:
• w = weight of each asset
• σ = standard deviation of each asset
• ρ = correlation between assets

**Diversification Benefits Example**:
• **Asset A**: 12% return, 25% standard deviation
• **Asset B**: 8% return, 15% standard deviation
• **Correlation**: 0.3
• **50/50 Portfolio**: 10% return, 17% standard deviation

The portfolio has lower risk than either individual asset!

**Types of Diversification**

**Asset Class Diversification**:
Spreading investments across different categories:
• **Stocks**: Growth potential, higher volatility
• **Bonds**: Stability, income generation
• **Real Estate**: Inflation hedge, low correlation with stocks
• **Commodities**: Inflation protection, portfolio insurance
• **Cash**: Liquidity, safety, opportunity for rebalancing

**Geographic Diversification**:
• **Domestic investments**: Home country bias, familiar markets
• **International developed**: Lower correlation, currency exposure
• **Emerging markets**: Higher growth potential, higher volatility
• **Global approach**: Reduces country-specific risks

**Sector Diversification**:
• **Technology**: Growth potential, innovation exposure
• **Healthcare**: Defensive characteristics, aging population
• **Financial services**: Economic cycle sensitivity
• **Consumer staples**: Recession-resistant, steady demand
• **Energy**: Commodity exposure, inflation hedge
• **Utilities**: Stable dividends, interest rate sensitivity

**Company Size Diversification**:
• **Large-cap**: Stability, established businesses
• **Mid-cap**: Growth potential, less analyst coverage
• **Small-cap**: Highest growth potential, highest volatility
• **Micro-cap**: Speculative, illiquid, highest risk/reward

**Time Diversification**:
• **Dollar-cost averaging**: Investing regularly over time
• **Rebalancing**: Buying low, selling high systematically
• **Laddering**: Staggering bond maturities
• **Lifecycle funds**: Automatically adjusting over time

**Style Diversification**:
• **Growth investing**: Companies with above-average growth
• **Value investing**: Companies trading below intrinsic value
• **Blend approach**: Combination of growth and value
• **Momentum investing**: Following price trends

**Limits of Diversification**

**Systematic Risk Cannot Be Eliminated**:
During major market crises, correlations between assets tend to increase toward 1.0, reducing diversification benefits when you need them most.

**Example**: During the 2008 financial crisis, both stocks and bonds declined, and even alternative investments like REITs and commodities were affected.

**Over-Diversification (Diworsification)**:
• **Too many holdings**: Increased costs without meaningful risk reduction
• **Overlapping investments**: Multiple funds holding similar assets
• **Complexity**: Difficult to monitor and manage
• **Diluted returns**: Outstanding performers get averaged out

**Optimal Number of Holdings**:
• **Individual stocks**: 20-30 stocks provide most diversification benefits
• **Mutual funds/ETFs**: 5-10 funds can provide broad diversification
• **Asset classes**: 4-6 major asset classes are typically sufficient

**Diversification Strategies by Investment Level**

**Beginning Investors ($1,000-$10,000)**:
• **Target-date fund**: Instant diversification in one fund
• **Broad market ETF**: S&P 500 or Total Stock Market
• **Balanced fund**: Pre-mixed stocks and bonds
• **Robo-advisor**: Automated diversification

**Intermediate Investors ($10,000-$100,000)**:
• **Core-satellite approach**: Broad market core with specialized satellites
• **Asset allocation funds**: Separate stock and bond funds
• **International exposure**: Add developed and emerging market funds
• **REIT allocation**: Real estate exposure for diversification

**Advanced Investors ($100,000+)**:
• **Individual stocks**: 20-30 stocks across sectors
• **Sector rotation**: Tactical allocation based on economic cycles
• **Alternative investments**: Commodities, private equity, hedge funds
• **Tax-loss harvesting**: Systematic realization of losses

**Measuring Diversification Effectiveness**

**Sharpe Ratio**: Risk-adjusted return measure
Sharpe Ratio = (Return - Risk-free rate) / Standard deviation

**Example**:
• **Undiversified portfolio**: 10% return, 25% volatility, Sharpe ratio = 0.32
• **Diversified portfolio**: 10% return, 18% volatility, Sharpe ratio = 0.44

**Correlation Matrix**: Shows how different investments move together
• **Effective diversification**: Low correlations between holdings
• **Poor diversification**: High correlations between holdings

**Maximum Drawdown**: Largest peak-to-trough decline
• **Diversified portfolios**: Typically lower maximum drawdowns
• **Concentrated portfolios**: Higher potential for large losses

**Rebalancing for Diversification**

**Rebalancing Frequency**:
• **Calendar-based**: Quarterly or annually
• **Threshold-based**: When allocation drifts 5-10% from target
• **Combination approach**: Check quarterly, rebalance if needed

**Rebalancing Example**:
Target: 60% stocks, 40% bonds
After market gains: 70% stocks, 30% bonds
Rebalance: Sell 10% stocks, buy 10% bonds

**Tax Considerations**:
• **Tax-advantaged accounts**: Rebalance freely
• **Taxable accounts**: Consider tax implications
• **Tax-loss harvesting**: Offset gains with losses

Remember: Diversification is about managing risk, not eliminating it. The goal is to achieve the highest possible return for your acceptable level of risk, not to avoid all risk entirely.`},{title:"Advanced Risk Management Strategies",content:`Beyond basic diversification, sophisticated investors can employ additional risk management techniques to protect and optimize their portfolios.

**Dynamic Asset Allocation**

**Tactical Asset Allocation**:
Short-term adjustments based on market conditions while maintaining long-term strategic allocation.

**Example Strategy**:
• **Normal allocation**: 60% stocks, 40% bonds
• **Bull market**: Increase to 70% stocks, 30% bonds
• **Bear market**: Decrease to 50% stocks, 50% bonds

**Strategic Asset Allocation**:
Long-term, buy-and-hold approach based on investor goals and risk tolerance.

**Constant Proportion Portfolio Insurance (CPPI)**:
Maintains a minimum portfolio value while allowing for upside participation.

**Formula**: Stock allocation = (Portfolio Value - Floor Value) × Multiplier

**Risk Parity Strategies**

**Traditional 60/40 Portfolio Risk**:
• **Stocks contribute**: ~85% of portfolio risk
• **Bonds contribute**: ~15% of portfolio risk

**Risk Parity Approach**:
• **Equal risk contribution**: Each asset class contributes equally to portfolio risk
• **Leverage bonds**: Use borrowed money to increase bond allocation
• **Result**: More balanced risk distribution

**Hedge Strategies**

**Put Options**:
Insurance against portfolio declines
• **Cost**: Premium paid (typically 1-3% annually)
• **Benefit**: Limits downside losses
• **Trade-off**: Reduces overall returns

**Covered Calls**:
Selling call options on owned stocks
• **Benefit**: Additional income from premiums
• **Trade-off**: Limits upside potential
• **Best for**: Sideways or moderately bullish markets

**Inverse ETFs**:
Funds that move opposite to their underlying index
• **Use**: Hedge against market declines
• **Risk**: Daily rebalancing can cause tracking errors
• **Caution**: Not suitable for long-term holding

**Volatility-Based Strategies**

**Low-Volatility Investing**:
Focus on stocks with historically low price volatility
• **Benefit**: Lower portfolio volatility
• **Risk**: May underperform in strong bull markets
• **Research**: Low-vol stocks often provide better risk-adjusted returns

**VIX-Based Strategies**:
Using volatility index (VIX) products for portfolio insurance
• **VIX spikes**: During market stress, providing hedge benefits
• **Contango decay**: VIX products typically lose value over time
• **Timing critical**: Difficult to implement successfully

**Alternative Risk Measures**

**Value at Risk (VaR)**:
Estimates potential losses at a given confidence level
• **Example**: 5% VaR of $10,000 means 5% chance of losing $10,000+ in a given period
• **Limitation**: Doesn't capture tail risks or extreme events

**Conditional Value at Risk (CVaR)**:
Expected loss beyond the VaR threshold
• **More comprehensive**: Considers severity of losses beyond VaR
• **Better for**: Extreme event planning

**Maximum Drawdown**:
Largest peak-to-trough decline in portfolio value
• **Historical analysis**: Look at worst-case scenarios
• **Forward-looking**: Estimate potential future drawdowns

**Risk Budgeting**

**Risk Budget Allocation**:
Instead of allocating dollars, allocate risk across investments
• **High-risk investments**: Smaller dollar allocation
• **Low-risk investments**: Larger dollar allocation
• **Goal**: Equal risk contribution from each position

**Risk Budget Example**:
$100,000 portfolio with 10% risk budget per position:
• **High-risk stock** (30% volatility): $3,333 allocation
• **Moderate-risk stock** (20% volatility): $5,000 allocation
• **Low-risk bond** (5% volatility): $20,000 allocation

**Behavioral Risk Management**

**Systematic Rebalancing**:
Remove emotion from buy/sell decisions
• **Calendar-based**: Quarterly or annual rebalancing
• **Threshold-based**: Rebalance when allocation drifts 5-10%
• **Combination**: Check regularly, rebalance when needed

**Dollar-Cost Averaging**:
Reduces timing risk through regular investments
• **Benefit**: Avoid lump-sum timing risk
• **Trade-off**: May underperform lump-sum investing in bull markets
• **Behavioral**: Easier to stick with during volatility

**Stop-Loss Orders**:
Automatic sell orders when investments decline to specific levels
• **Benefit**: Limits losses on individual positions
• **Risk**: May sell at temporary bottoms
• **Consideration**: Best for speculative investments

**Stress Testing**

**Scenario Analysis**:
Test portfolio performance under various market conditions
• **Historical scenarios**: How would portfolio perform in 2008, 2000, etc.?
• **Hypothetical scenarios**: What if interest rates rise 3%?
• **Extreme scenarios**: What if stock market falls 50%?

**Monte Carlo Simulation**:
Uses random sampling to model potential outcomes
• **Thousands of scenarios**: Tests wide range of possibilities
• **Probability distributions**: Shows range of likely outcomes
• **Confidence intervals**: Estimates probability of achieving goals

**Risk Management for Different Life Stages**

**Young Investors (20s-30s)**:
• **High risk tolerance**: Can recover from losses
• **Focus on growth**: Emphasize capital appreciation
• **Simple strategies**: Broad diversification, regular investing

**Middle Age (40s-50s)**:
• **Moderate risk management**: Balance growth and protection
• **Diversification**: Geographic, sector, and asset class spreading
• **Hedge strategies**: Consider protective puts on large positions

**Pre-Retirement (50s-60s)**:
• **Sequence of returns risk**: Early retirement losses are devastating
• **Bond ladders**: Predictable income stream
• **Glide path**: Gradually reducing risk as retirement approaches

**Retirement (65+)**:
• **Withdrawal rate management**: Sustainable spending levels
• **Bucket strategy**: Different time horizons for different needs
• **Inflation protection**: Maintain purchasing power over time

**Professional Risk Management**

**When to Seek Help**:
• **Complex portfolios**: Multiple account types, significant assets
• **Lack of time**: Busy professionals who can't monitor investments
• **Emotional challenges**: Difficulty making objective decisions
• **Specialized needs**: Tax planning, estate planning, business ownership

**Types of Professional Help**:
• **Fee-only advisors**: Fiduciary duty, no commission conflicts
• **Robo-advisors**: Automated, low-cost portfolio management
• **Hybrid advisors**: Combination of human and automated advice
• **Institutional managers**: High-net-worth and institutional investors

Remember: Risk management is not about eliminating all risk—it's about taking appropriate risks for your situation and goals while avoiding catastrophic losses that could derail your financial future.`}];return c.jsx(Hn,{title:"Risk vs Return",intro:"Learn to balance investment risk with potential returns to create a strategy that matches your goals.",sections:n,videoEmbed:c.jsx(bn,{videoId:"7mo167ohvJw",title:"What is risk and return? | Financial Literacy | Khan Academy"}),duration:"15 min",difficulty:"Intermediate",prevLessonPath:"/lessons/investment-basics",prevLessonTitle:"Investment Basics",nextLessonPath:"/lessons/understanding-inflation",nextLessonTitle:"Understanding Inflation",quizId:"risk-vs-return"})}function WR(){const n=[{title:"Understanding Inflation: The Silent Wealth Killer",content:`Inflation is the sustained increase in the general price level of goods and services over time. While it might seem like a abstract economic concept, inflation directly impacts your daily life and long-term wealth.

**The Mechanics of Inflation**
When inflation occurs, each dollar in your pocket buys less than it did before. This erosion of purchasing power is often called the "invisible tax" because it affects everyone, regardless of income level.

**Real-World Example**:
• **1990**: Average new car cost $16,000
• **2023**: Average new car cost $48,000
• **Inflation impact**: The same car costs 3x more, representing about 3.4% annual inflation

**The Compound Effect of Inflation**
Just like compound interest works for investments, inflation compounds against your wealth:

**$1,000 purchasing power over time at 3% inflation**:
• **Today**: $1,000 buys $1,000 worth of goods
• **10 years**: $1,000 buys $744 worth of goods
• **20 years**: $1,000 buys $554 worth of goods
• **30 years**: $1,000 buys $412 worth of goods

**Historical Inflation Rates**
• **1900-2023 average**: 2.9% annually
• **1970s energy crisis**: Peak of 13.5% in 1980
• **2008 financial crisis**: Brief deflation period (-0.4%)
• **2020-2022 pandemic**: Spike to 9.1% in 2022

**Types of Inflation**

**Demand-Pull Inflation**: Too much money chasing too few goods
• **Cause**: Increased consumer spending, government spending, or business investment
• **Example**: Housing prices rising due to low mortgage rates and high demand

**Cost-Push Inflation**: Rising production costs passed to consumers
• **Cause**: Higher wages, raw material costs, or energy prices
• **Example**: Oil price increases leading to higher transportation and manufacturing costs

**Built-in Inflation**: Expectations of future price increases
• **Cause**: Workers demand higher wages expecting inflation, businesses raise prices expecting higher costs
• **Example**: Union contracts with automatic cost-of-living adjustments

**Monetary Inflation**: Increase in money supply
• **Cause**: Central bank policies, quantitative easing
• **Example**: Federal Reserve printing money during economic crises

**Measuring Inflation**

**Consumer Price Index (CPI)**:
Most common inflation measure, tracks prices of goods and services typical consumers buy
• **Categories**: Food, housing, transportation, medical care, recreation, education, apparel
• **Weighting**: Housing accounts for about 40% of CPI

**Producer Price Index (PPI)**:
Measures inflation at the wholesale level before reaching consumers
• **Leading indicator**: Often predicts future CPI changes
• **Business impact**: Helps businesses anticipate cost increases

**Personal Consumption Expenditures (PCE)**:
Federal Reserve's preferred inflation measure
• **Broader scope**: Includes services businesses buy on behalf of consumers
• **Dynamic weighting**: Adjusts for changing consumption patterns

**Core Inflation**:
Excludes volatile food and energy prices
• **Stability**: Provides clearer picture of underlying inflation trends
• **Policy tool**: Used by central banks for monetary policy decisions

**Inflation's Impact on Different Asset Classes**

**Cash and Cash Equivalents**:
• **Negative real return**: Purchasing power erodes over time
• **Example**: $10,000 in 0.5% savings account loses $250 annually in purchasing power at 3% inflation

**Bonds**:
• **Fixed-rate bonds**: Lose value as inflation rises
• **Inflation-protected bonds**: TIPS adjust principal with inflation
• **Floating-rate bonds**: Interest rates adjust with market conditions

**Stocks**:
• **Mixed impact**: Some companies can pass costs to consumers, others cannot
• **Long-term protection**: Stocks historically outpace inflation over long periods
• **Sector variation**: Utilities and consumer staples often struggle, while materials and energy may benefit

**Real Estate**:
• **Inflation hedge**: Property values and rents typically rise with inflation
• **Mortgage benefit**: Fixed-rate mortgages become cheaper to pay off
• **Location matters**: Supply-constrained areas perform better

**Commodities**:
• **Direct inflation play**: Gold, oil, agricultural products often rise with inflation
• **Volatility**: Short-term price swings can be extreme
• **Storage costs**: Physical commodities have carrying costs`},{title:"The Causes and Drivers of Inflation",content:`Understanding what drives inflation helps you anticipate economic changes and make better financial decisions. Inflation rarely has a single cause but results from multiple interacting factors.

**Demand-Side Factors**

**Consumer Demand**:
• **Economic growth**: Rising incomes increase spending power
• **Low interest rates**: Cheaper borrowing encourages spending
• **Stimulus spending**: Government payments increase consumer spending
• **Demographic changes**: Aging population, changing household formation

**Business Investment**:
• **Capital expansion**: Companies buying equipment and facilities
• **Inventory building**: Businesses stocking up on materials
• **Technology adoption**: Investment in productivity improvements
• **Expansion plans**: Geographic or product line growth

**Government Spending**:
• **Infrastructure projects**: Large-scale construction and improvement
• **Military spending**: Defense contracts and equipment
• **Social programs**: Healthcare, education, and welfare spending
• **Emergency response**: Disaster relief and pandemic response

**Supply-Side Factors**

**Production Costs**:
• **Labor costs**: Wage increases, benefits, training expenses
• **Raw materials**: Commodity price increases
• **Energy costs**: Oil, natural gas, electricity prices
• **Transportation**: Shipping, logistics, and distribution costs

**Supply Chain Disruptions**:
• **Natural disasters**: Hurricanes, earthquakes, floods affecting production
• **Geopolitical events**: Wars, trade disputes, sanctions
• **Pandemic effects**: Factory shutdowns, worker shortages
• **Infrastructure problems**: Port congestion, trucking shortages

**Regulatory Changes**:
• **Environmental regulations**: Compliance costs passed to consumers
• **Trade policies**: Tariffs increasing import costs
• **Zoning laws**: Restricting housing supply
• **Professional licensing**: Limiting service provider supply

**Monopolistic Practices**:
• **Market concentration**: Fewer competitors leading to higher prices
• **Price coordination**: Implicit or explicit price-setting among competitors
• **Barriers to entry**: Regulations or costs preventing new competition
• **Patent protections**: Exclusive rights limiting competition

**Monetary Policy Factors**

**Central Bank Actions**:
• **Interest rate policy**: Lower rates stimulate borrowing and spending
• **Quantitative easing**: Purchasing bonds to increase money supply
• **Forward guidance**: Communication about future policy intentions
• **Reserve requirements**: Rules affecting bank lending capacity

**Money Supply Growth**:
• **M1 money supply**: Cash and checking deposits
• **M2 money supply**: M1 plus savings accounts and money market funds
• **Credit creation**: Bank lending creating new money
• **Velocity of money**: How quickly money changes hands

**Exchange Rate Effects**:
• **Currency devaluation**: Makes imports more expensive
• **Trade balance**: Large trade deficits can weaken currency
• **Foreign investment**: Capital flows affecting currency value
• **Speculation**: Currency trading impacting exchange rates

**Psychological and Behavioral Factors**

**Inflation Expectations**:
• **Self-fulfilling prophecy**: Expecting inflation can cause inflation
• **Wage negotiations**: Workers demanding raises to offset expected price increases
• **Business pricing**: Companies raising prices in anticipation of higher costs
• **Consumer behavior**: Rushing to buy before prices rise

**Anchoring Effects**:
• **Recent experience**: People expect recent inflation rates to continue
• **Central bank credibility**: Trust in inflation targets affects expectations
• **Media coverage**: News reports influencing public perception
• **Survey data**: Consumer and business sentiment surveys

**Global Factors**

**International Trade**:
• **Import prices**: Foreign inflation transmitted through trade
• **Export demand**: Strong global demand pushing up domestic prices
• **Supply chain globalization**: Disruptions affecting multiple countries
• **Currency fluctuations**: Exchange rate changes affecting trade prices

**Commodity Markets**:
• **Oil prices**: Energy costs affecting transportation and production
• **Food prices**: Agricultural commodity prices affecting food costs
• **Precious metals**: Gold and silver prices affecting jewelry and industrial costs
• **Industrial metals**: Steel, copper, aluminum prices affecting manufacturing

**Regional Economic Conditions**:
• **Economic growth**: Faster-growing regions experiencing higher inflation
• **Employment levels**: Low unemployment pushing up wages
• **Housing markets**: Regional supply/demand imbalances
• **Migration patterns**: Population shifts affecting local prices

**Sectoral Analysis**

**Housing Inflation**:
• **Largest CPI component**: About 40% of inflation basket
• **Supply constraints**: Zoning, construction costs, land availability
• **Demand factors**: Population growth, household formation, investment demand
• **Policy impacts**: Interest rates, tax policies, regulation

**Healthcare Inflation**:
• **Persistent above-average inflation**: Typically 3-5% annually
• **Supply factors**: Physician shortages, hospital consolidation, drug patents
• **Demand factors**: Aging population, technological advances, insurance coverage
• **Regulatory impact**: FDA approvals, Medicare/Medicaid policies

**Education Inflation**:
• **College costs**: Rising faster than general inflation for decades
• **Supply factors**: Limited capacity, prestigious institution competition
• **Demand factors**: Easy credit, employment requirements, social expectations
• **Policy impacts**: Student loans, state funding, tax incentives

**Food and Energy Inflation**:
• **High volatility**: Weather, geopolitical events, seasonal patterns
• **Global markets**: International supply and demand affecting local prices
• **Speculation**: Financial market trading affecting commodity prices
• **Policy impacts**: Ethanol mandates, trade policies, strategic reserves

Understanding these diverse factors helps explain why inflation can be difficult to predict and control, and why it affects different people and sectors differently.`},{title:"Inflation's Impact on Personal Finances",content:`Inflation affects every aspect of your financial life, from daily expenses to long-term wealth building. Understanding these impacts helps you make informed financial decisions.

**Impact on Different Asset Classes**

**Cash and Bank Accounts**:
• **Guaranteed purchasing power loss**: Money in 0% accounts loses value equal to inflation rate
• **Real return calculation**: Account yield minus inflation rate
• **Example**: 1% savings account with 3% inflation = -2% real return

**Certificates of Deposit (CDs)**:
• **Fixed returns**: Locked-in rates may not keep pace with rising inflation
• **Penalty risk**: Early withdrawal fees if you need to move to higher-yield options
• **Strategy**: Consider shorter-term CDs during rising inflation periods

**Bonds and Fixed-Income Securities**:
• **Interest rate risk**: Rising inflation typically leads to rising interest rates
• **Price decline**: Existing bonds lose value when new bonds offer higher rates
• **Duration risk**: Longer-term bonds more sensitive to interest rate changes

**Example**: 10-year Treasury bond yielding 2% when inflation is 1%
• **Real yield**: 1% (2% yield - 1% inflation)
• **If inflation rises to 4%**: Real yield becomes -2% (2% yield - 4% inflation)

**Stocks and Equity Investments**:
• **Mixed impact**: Some companies benefit, others suffer
• **Pricing power**: Companies that can raise prices maintain margins
• **Cost pressures**: Companies with fixed contracts or high competition struggle

**Winners in Inflation**:
• **Energy companies**: Oil, natural gas, renewable energy
• **Materials companies**: Mining, chemicals, construction materials
• **Real estate**: Property values and rents typically rise
• **Banks**: Benefit from higher interest rates on loans

**Losers in Inflation**:
• **Utilities**: Regulated pricing, high fixed costs
• **Consumer discretionary**: Luxury goods, restaurants, travel
• **Technology**: High valuations sensitive to interest rates
• **Long-term bonds**: Fixed payments lose purchasing power

**Real Estate Investments**:
• **Property values**: Tend to rise with inflation over long term
• **Rental income**: Rents can be adjusted upward with inflation
• **Mortgage benefits**: Fixed-rate mortgages become cheaper to pay off
• **Location matters**: Supply-constrained areas perform better

**Commodities**:
• **Direct inflation hedge**: Gold, silver, oil, agricultural products
• **Volatility**: Short-term price swings can be extreme
• **Storage costs**: Physical commodities have carrying costs
• **Investment vehicles**: ETFs, futures, mining stocks

**Impact on Debt and Borrowing**

**Fixed-Rate Debt Benefits**:
• **Real cost decreases**: Inflation makes debt cheaper to repay
• **Example**: $300k mortgage at 3% becomes easier to pay when wages rise with inflation
• **Refinancing considerations**: May want to avoid refinancing during high inflation

**Variable-Rate Debt Risks**:
• **Rising payments**: Credit cards, HELOCs, adjustable-rate mortgages
• **Budget impact**: Monthly payments increase with interest rates
• **Strategy**: Consider converting to fixed-rate debt before rates rise

**New Borrowing Costs**:
• **Higher interest rates**: Inflation typically leads to higher lending rates
• **Qualification challenges**: Higher rates reduce borrowing capacity
• **Timing considerations**: Lock in rates before they rise further

**Employment and Income Effects**

**Wage Growth Patterns**:
• **Lag effect**: Wages typically rise after inflation, not before
• **Negotiation power**: Strong job market helps workers demand raises
• **Skill premium**: High-skilled workers better able to maintain purchasing power
• **Public sector**: Government employees often have cost-of-living adjustments

**Real Income Calculation**:
• **Nominal income**: Your actual dollar salary
• **Real income**: Purchasing power after adjusting for inflation
• **Formula**: Real income = Nominal income ÷ (1 + inflation rate)

**Example**: $60,000 salary with 4% inflation
• **Real income**: $60,000 ÷ 1.04 = $57,692
• **Purchasing power loss**: $2,308 annually without a raise

**Business Ownership Impact**:
• **Pricing power**: Ability to raise prices with costs
• **Contract risk**: Fixed-price contracts become unprofitable
• **Inventory benefits**: Goods bought before inflation become more valuable
• **Labor costs**: Pressure to raise wages to retain employees

**Retirement Planning Impact**

**Purchasing Power Erosion**:
• **Fixed pensions**: Lose value over time without cost-of-living adjustments
• **Social Security**: Has automatic inflation adjustments (COLA)
• **Savings targets**: Need larger nest egg to maintain purchasing power

**Retirement Income Strategies**:
• **Inflation-protected annuities**: Payments adjust with inflation
• **Equity exposure**: Stocks provide long-term inflation protection
• **TIPS bonds**: Treasury Inflation-Protected Securities
• **Real estate**: Rental income and property values adjust with inflation

**Healthcare Cost Inflation**:
• **Above-average inflation**: Healthcare costs typically rise 3-5% annually
• **Medicare gaps**: Supplemental insurance becomes more expensive
• **Long-term care**: Costs rising faster than general inflation
• **Planning need**: Healthcare expenses major retirement risk

**Education Cost Impact**:
• **College inflation**: Historically higher than general inflation
• **Student loans**: Fixed-rate debt becomes cheaper with inflation
• **529 plans**: Tax-advantaged savings for education expenses
• **Career ROI**: Higher education costs vs. wage growth

**Tax Implications**

**Bracket Creep**:
• **Nominal income rises**: Inflation pushes wages higher
• **Higher tax brackets**: May push taxpayers into higher rates
• **IRS adjustments**: Tax brackets adjusted annually for inflation

**Capital Gains Impact**:
• **Nominal vs. real gains**: Inflation inflates nominal gains
• **Tax on inflation**: Pay taxes on inflation-adjusted gains
• **Long-term holdings**: Inflation erodes real returns after taxes

**Deduction Erosion**:
• **Fixed deductions**: Standard deduction adjusted for inflation
• **Itemized deductions**: Some not indexed to inflation
• **Real value decline**: Fixed-dollar deductions lose purchasing power

**International Considerations**

**Currency Impact**:
• **Domestic inflation**: May weaken currency vs. countries with lower inflation
• **International investments**: Foreign investments may benefit from currency changes
• **Travel costs**: Inflation affects vacation and business travel expenses
• **Import prices**: Weaker currency makes imports more expensive

Understanding these comprehensive impacts helps you develop strategies to protect your wealth and take advantage of opportunities that inflation creates.`},{title:"Inflation Protection Strategies",content:`Protecting your wealth from inflation requires a multi-faceted approach combining various asset classes, investment strategies, and financial planning techniques.

**Treasury Inflation-Protected Securities (TIPS)**

**How TIPS Work**:
• **Principal adjustment**: Bond face value increases with inflation
• **Interest payments**: Based on adjusted principal, so payments rise with inflation
• **Maturity protection**: Receive at least original principal at maturity
• **Tax considerations**: Phantom income tax on principal adjustments

**TIPS Example**:
• **Purchase**: $1,000 TIPS with 2% coupon
• **Year 1 inflation**: 3%
• **New principal**: $1,030
• **Interest payment**: $1,030 × 2% = $20.60
• **Total return**: $20.60 interest + $30 principal adjustment = $50.60

**TIPS Variants**:
• **I Bonds**: Individual savings bonds with inflation protection
• **TIPS mutual funds**: Diversified TIPS portfolios
• **International TIPS**: Inflation-protected bonds from other countries

**Real Estate Investment Strategies**

**Direct Real Estate Ownership**:
• **Primary residence**: Home values typically rise with inflation
• **Rental properties**: Rents can be adjusted upward with inflation
• **Commercial real estate**: Lease terms often include inflation escalators
• **Land investment**: Finite supply, increasing demand over time

**Real Estate Investment Trusts (REITs)**:
• **Equity REITs**: Own income-producing properties
• **Mortgage REITs**: Finance real estate transactions
• **Infrastructure REITs**: Toll roads, pipelines, utilities
• **Inflation sensitivity**: Property values and rents adjust with inflation

**Real Estate Considerations**:
• **Leverage benefits**: Fixed-rate mortgages become cheaper with inflation
• **Maintenance costs**: Property upkeep costs rise with inflation
• **Location importance**: Supply-constrained areas perform better
• **Liquidity**: Real estate less liquid than stocks and bonds

**Stock Market Inflation Protection**

**Inflation-Resistant Sectors**:
• **Energy**: Oil, natural gas, renewable energy companies
• **Materials**: Mining, chemicals, construction materials
• **Utilities**: Some regulated utilities have inflation adjustments
• **Consumer staples**: Essential goods with pricing power

**Value vs. Growth Stocks**:
• **Value stocks**: Often better during inflationary periods
• **Growth stocks**: High valuations sensitive to interest rate changes
• **Dividend stocks**: Companies with growing dividends provide income protection
• **International stocks**: Exposure to different inflation environments

**Commodity Investments**:
• **Precious metals**: Gold, silver as inflation hedges
• **Energy commodities**: Oil, natural gas prices rise with inflation
• **Agricultural commodities**: Food prices increase with inflation
• **Industrial metals**: Copper, aluminum for economic growth

**Commodity Investment Vehicles**:
• **Commodity ETFs**: Track commodity price indices
• **Commodity mutual funds**: Diversified commodity exposure
• **Commodity-producing stocks**: Mining, energy, agricultural companies
• **Futures contracts**: Direct commodity exposure (advanced investors)

**Floating-Rate Investments**

**Floating-Rate Notes (FRNs)**:
• **Adjustable rates**: Interest payments rise with market rates
• **Rate reset**: Typically every 3-6 months
• **Credit risk**: Still exposed to issuer default risk
• **Bank loans**: Floating-rate corporate loans

**Floating-Rate Funds**:
• **Bank loan funds**: Invest in floating-rate corporate loans
• **Floating-rate bond funds**: Adjustable-rate bond portfolios
• **Money market funds**: Short-term, floating-rate securities
• **HELOC**: Home equity line of credit with variable rates

**International Diversification**

**Foreign Investments**:
• **Developed markets**: Exposure to different inflation environments
• **Emerging markets**: Often have higher inflation but faster growth
• **Currency diversification**: Protection against dollar weakness
• **Global commodities**: International commodity exposure

**Currency Hedging**:
• **Hedged funds**: Remove currency risk from international investments
• **Unhedged funds**: Benefit from currency appreciation
• **Currency ETFs**: Direct exposure to foreign currencies
• **International bonds**: Foreign government and corporate bonds

**Business and Human Capital**

**Skill Development**:
• **High-demand skills**: Ability to command higher wages
��� **Continuous learning**: Stay relevant in changing economy
• **Professional certifications**: Increase earning potential
• **Networking**: Build relationships for career advancement

**Business Ownership**:
• **Pricing power**: Ability to raise prices with costs
• **Asset ownership**: Business assets may appreciate with inflation
• **Tax benefits**: Business deductions and depreciation
• **Scalability**: Grow business to offset inflation impact

**Career Strategies**:
• **Inflation-resistant careers**: Healthcare, skilled trades, technology
• **Geographic mobility**: Move to areas with better wage growth
• **Multiple income streams**: Diversify income sources
• **Entrepreneurship**: Start businesses with inflation protection

**Portfolio Construction for Inflation**

**All-Weather Portfolio**:
• **Stocks**: 30% (growth and value mix)
• **TIPS**: 20% (inflation protection)
• **Commodities**: 15% (direct inflation hedge)
• **Real Estate**: 20% (REITs and direct ownership)
• **Cash/Short-term**: 15% (liquidity and opportunity)

**Defensive Inflation Portfolio**:
• **TIPS**: 40% (primary inflation protection)
• **Dividend stocks**: 25% (growing income)
• **Real estate**: 20% (property and REITs)
• **Commodities**: 10% (diversification)
• **International bonds**: 5% (currency diversification)

**Aggressive Inflation Portfolio**:
• **Stocks**: 50% (emphasis on value and cyclical)
• **Real estate**: 25% (direct and REITs)
• **Commodities**: 15% (gold, energy, materials)
• **TIPS**: 10% (defensive allocation)

**Dynamic Inflation Strategies**

**Tactical Allocation**:
• **Inflation expectations**: Adjust allocation based on inflation outlook
• **Interest rate environment**: Consider Fed policy and rate cycle
• **Economic indicators**: Monitor inflation data and trends
• **Rebalancing**: Adjust allocations as inflation changes

**Timing Considerations**:
• **Early inflation**: Emphasize real assets and commodities
• **Peak inflation**: Maintain defensive positioning
• **Declining inflation**: Shift toward growth assets
• **Deflation risk**: Consider high-quality bonds and cash

**Implementation Tips**:
• **Start gradually**: Don't make dramatic allocation changes
• **Cost awareness**: Inflation protection shouldn't be expensive
• **Tax efficiency**: Use tax-advantaged accounts where possible
• **Regular review**: Inflation environment changes over time

Remember: No single strategy provides perfect inflation protection. The key is diversification across different inflation-resistant assets and regular portfolio review to ensure your strategy remains appropriate for the current environment.`}];return c.jsx(Hn,{title:"Understanding Inflation",intro:"Discover how inflation affects your money and learn strategies to protect your purchasing power.",sections:n,videoEmbed:c.jsx(bn,{videoId:"Ou0l5lcGrR4",title:"What is Inflation? | It's simple."}),duration:"8 min",difficulty:"Beginner",prevLessonPath:"/lessons/risk-vs-return",prevLessonTitle:"Risk vs Return",nextLessonPath:"/lessons/tax-fundamentals",nextLessonTitle:"Tax Fundamentals",quizId:"understanding-inflation"})}function UR(){const n=[{title:"Understanding the U.S. Tax System",content:`The United States has a complex tax system with multiple types of taxes at federal, state, and local levels. Understanding how these taxes work is essential for effective financial planning.

**Federal Income Tax Structure**

**Progressive Tax System**:
The U.S. uses a progressive tax system where higher income levels are taxed at higher rates. This means you don't pay the same rate on all your income—only income above certain thresholds is taxed at higher rates.

**2024 Tax Brackets (Single Filers)**:
• 10%: $0 to $11,000
• 12%: $11,001 to $44,725
• 22%: $44,726 to $95,375
• 24%: $95,376 to $182,050
• 32%: $182,051 to $231,250
• 35%: $231,251 to $578,125
• 37%: $578,126 and above

**Tax Bracket Example**:
If you earn $60,000 as a single filer:
• First $11,000: 10% tax = $1,100
• Next $33,725: 12% tax = $4,047
• Next $15,275: 22% tax = $3,361
• **Total tax**: $8,508 (14.2% effective rate)

**Marginal vs. Effective Tax Rates**:
• **Marginal rate**: Tax rate on your last dollar of income
• **Effective rate**: Total tax divided by total income
• **Average rate**: Often same as effective rate

**State and Local Taxes**

**State Income Tax**:
• **No state income tax**: 9 states including FL, TX, WA, NV
• **Flat rate states**: 8 states with single tax rate
• **Progressive states**: Most states with multiple brackets
• **Reciprocity agreements**: Some states don't double-tax border workers

**State Sales Tax**:
• **Range**: 0% (5 states) to 7.25% (California)
• **Local additions**: Cities and counties can add additional sales tax
• **Exemptions**: Food, medicine, clothing (varies by state)
• **Use tax**: Tax on out-of-state purchases

**Property Tax**:
• **Local assessment**: Based on property value assessments
• **Mill rates**: Tax rate expressed per $1,000 of assessed value
• **Homestead exemptions**: Reductions for primary residences
• **Assessment appeals**: Process to challenge property valuations

**Payroll Taxes**

**Social Security Tax**:
• **Rate**: 6.2% for employee, 6.2% for employer (12.4% total)
• **Wage base**: $160,200 for 2024 (adjusted annually)
• **Self-employed**: Pay both portions (12.4% total)
• **Benefits**: Earnings history determines future Social Security benefits

**Medicare Tax**:
• **Rate**: 1.45% for employee, 1.45% for employer (2.9% total)
• **No wage cap**: Applies to all earned income
• **Additional Medicare**: 0.9% on high earners ($200K+ single, $250K+ married)
• **Self-employed**: Pay both portions (2.9% total)

**Types of Income**

**Ordinary Income**:
• **Wages and salaries**: Employment income
• **Business income**: Self-employment and partnership income
• **Interest income**: Bank accounts, bonds, loans
• **Rental income**: Real estate rental income
• **Royalties**: Patents, copyrights, natural resources

**Capital Gains**:
• **Short-term**: Assets held 1 year or less (taxed as ordinary income)
• **Long-term**: Assets held more than 1 year (preferential rates)
• **Collectibles**: 28% maximum rate for art, coins, etc.
• **Real estate**: Special rules for primary residence sales

**Tax-Advantaged Income**:
• **Municipal bonds**: Interest often tax-free
• **Roth IRA distributions**: Tax-free in retirement
• **Life insurance**: Death benefits generally tax-free
• **Gifts and inheritances**: Generally not taxable to recipient

This foundation helps you understand how taxes work before diving into specific strategies for minimizing your tax burden.`},{title:"Deductions vs. Credits: Maximizing Tax Benefits",content:`Understanding the difference between tax deductions and credits is crucial for effective tax planning. Both reduce your tax burden, but they work in fundamentally different ways.

**Tax Deductions Explained**

**How Deductions Work**:
Deductions reduce your taxable income, which then reduces your tax bill based on your marginal tax rate.

**Deduction Value Formula**:
Tax savings = Deduction amount × Marginal tax rate

**Example**: $1,000 deduction in 22% tax bracket
• **Tax savings**: $1,000 × 22% = $220
• **Higher bracket = more savings**: Same deduction worth $370 in 37% bracket

**Standard vs. Itemized Deductions**

**Standard Deduction Benefits**:
• **Simplicity**: No need to track individual expenses
• **Guaranteed**: Available to all taxpayers
• **Inflation adjusted**: Increases annually with inflation
• **Reduced audit risk**: Less complex than itemizing

**Standard Deduction (2024)**:
• **Single**: $14,600
• **Married Filing Jointly**: $29,200
• **Married Filing Separately**: $14,600
• **Head of Household**: $21,900

**When to Itemize**:
• **Total itemized deductions exceed standard deduction**
• **Significant mortgage interest**: Large home loans
• **High state and local taxes**: Before $10,000 SALT cap
• **Major medical expenses**: Exceeding 7.5% of AGI
• **Significant charitable giving**: Large donations

**Common Itemized Deductions**

**State and Local Taxes (SALT)**:
• **Limitation**: $10,000 cap for income and property taxes combined
• **Strategies**: Timing payments, considering state tax planning
• **Married filing separately**: Each spouse can claim $10,000

**Mortgage Interest**:
• **Acquisition debt**: Interest on first $750,000 of home loans
• **Points**: Prepaid interest often deductible
• **Refinancing**: Points must be amortized over loan term
• **Second homes**: Interest on vacation homes may be deductible

**Charitable Contributions**:
• **Cash donations**: Up to 60% of AGI for most charities
• **Appreciated assets**: Deduct fair market value, avoid capital gains
• **Volunteer expenses**: Mileage and out-of-pocket costs
• **Documentation**: Receipts required for all donations

**Tax Credits Explained**

**How Credits Work**:
Tax credits directly reduce your tax bill dollar-for-dollar, making them more valuable than deductions.

**Types of Credits**:
• **Refundable**: Can result in refund even if no tax owed
• **Non-refundable**: Limited to your tax liability
• **Partially refundable**: Combination of both types

**Major Tax Credits**

**Child Tax Credit**:
• **Amount**: Up to $2,000 per qualifying child under 17
• **Refundable portion**: Up to $1,600 per child
• **Income limits**: Phases out at higher income levels
• **Qualifying children**: Must meet relationship, age, and residency tests

**Earned Income Tax Credit (EITC)**:
• **Low-income workers**: Designed to supplement wages
• **Maximum credit**: Varies by number of children and income
• **Fully refundable**: Can result in refund exceeding taxes paid
• **Investment income limit**: Disqualified if investment income too high

**Education Credits**:
• **American Opportunity Credit**: Up to $2,500 per student (first 4 years)
• **Lifetime Learning Credit**: Up to $2,000 per family (any post-secondary)
• **Income limits**: Credits phase out at higher income levels
• **Qualified expenses**: Tuition, fees, books, supplies

**Strategic Planning**

**Timing Deductions**:
• **Bunching**: Accelerate deductions into years when itemizing
• **Charitable giving**: Large donations in alternating years
• **Medical expenses**: Time elective procedures to exceed threshold
• **Business expenses**: Accelerate or defer business purchases

**Maximizing Credits**:
• **Income management**: Stay within credit phase-out ranges
• **Education planning**: Coordinate education credits with 529 plans
• **Retirement contributions**: Maximize saver's credit eligibility
• **Energy improvements**: Take advantage of temporary credits

Understanding these concepts helps you make informed decisions about tax planning strategies and ensure you're taking advantage of all available benefits.`},{title:"Tax-Advantaged Accounts and Retirement Planning",content:`Tax-advantaged accounts are powerful tools for building wealth while reducing your current tax burden. Understanding how these accounts work is essential for optimal tax planning.

**Traditional vs. Roth Account Comparison**

**Traditional Accounts (Tax-Deferred)**:
• **Immediate tax benefit**: Deductible contributions reduce current taxes
• **Tax-deferred growth**: No taxes on investment gains while in account
• **Taxable withdrawals**: Pay ordinary income taxes on all withdrawals
• **Required distributions**: Must start taking money out at age 73

**Roth Accounts (Tax-Free)**:
• **After-tax contributions**: No immediate tax deduction
• **Tax-free growth**: No taxes on investment gains
• **Tax-free withdrawals**: No taxes on qualified distributions
• **No required distributions**: Can leave money in account indefinitely

**401(k) and 403(b) Plans**

**Employer-Sponsored Benefits**:
• **Employer matching**: Free money that should be maximized
• **Higher contribution limits**: $23,000 in 2024 (plus $7,500 catch-up if 50+)
• **Automatic payroll deduction**: Easy to maintain consistent contributions
• **Vesting schedules**: Employer contributions may have vesting requirements

**Individual Retirement Accounts (IRAs)**

**Traditional IRA**:
• **Contribution limits**: $7,000 in 2024 (plus $1,000 catch-up if 50+)
• **Deductibility**: Phases out at higher income levels if covered by employer plan
• **Investment flexibility**: Can invest in almost anything
• **Required distributions**: Must start at age 73

**Roth IRA**:
• **Income limits**: Contribution eligibility phases out at higher incomes
• **5-year rule**: Must wait 5 years for tax-free earnings withdrawals
• **Contribution flexibility**: Can withdraw contributions anytime tax-free
• **No required distributions**: Can leave money in account indefinitely

**Health Savings Accounts (HSAs)**

**Triple Tax Advantage**:
• **Tax-deductible contributions**: Reduce current year taxes
• **Tax-free growth**: No taxes on investment gains
• **Tax-free withdrawals**: For qualified medical expenses

**HSA Requirements**:
• **High-deductible health plan**: Must be enrolled in qualifying plan
• **No other coverage**: Can't have other health insurance coverage
• **Contribution limits**: $4,300 individual, $8,550 family in 2024
• **Catch-up contributions**: Additional $1,000 if 55 or older

**529 Education Savings Plans**

**Education Benefits**:
• **Tax-free growth**: No taxes on investment gains
• **Tax-free withdrawals**: For qualified education expenses
• **State tax benefits**: Many states offer deductions or credits
• **Flexible beneficiary**: Can change beneficiary to other family members

**Advanced Strategies**

**Roth Conversion Ladder**:
• **Systematic conversions**: Convert traditional IRA to Roth annually
• **Tax management**: Control timing and amount of conversions
• **Income planning**: Coordinate with other income sources

**Tax-Loss Harvesting**:
• **Realize losses**: Sell investments at a loss to offset gains
• **Wash sale rule**: Can't repurchase same security for 30 days
• **Tax-alpha generation**: Additional returns from tax management

**Asset Location**:
• **Tax-efficient placement**: Put right investments in right accounts
• **Taxable accounts**: Tax-efficient index funds, individual stocks
• **Tax-deferred accounts**: REITs, bonds, actively managed funds
• **Roth accounts**: Highest growth potential investments

Remember: Tax laws change frequently, and individual circumstances vary significantly. Consider working with a qualified tax professional to develop strategies appropriate for your specific situation.`},{title:"Year-Round Tax Planning Strategies",content:`Effective tax planning isn't just a year-end activity—it requires ongoing attention throughout the year to maximize opportunities and avoid costly mistakes.

**January - March: Tax Season Planning**

**Tax Preparation**:
��� **Organize documents**: Gather all tax forms and receipts
• **Software vs. professional**: Decide on tax preparation method
• **Prior year review**: Learn from previous year's tax situation
• **Estimated payments**: Calculate first quarter estimated taxes

**IRA Contributions**:
• **Deadline**: Can contribute for prior year until April 15
• **Traditional vs. Roth**: Evaluate which type makes sense
• **Catch-up contributions**: Additional $1,000 if 50 or older
• **Backdoor Roth**: Execute strategy if applicable

**April - June: Second Quarter Strategy**

**Estimated Tax Payments**:
• **Self-employed**: Make quarterly payments by April 15, June 15
• **Investment income**: Plan for capital gains and dividends
• **Safe harbor rules**: Pay 100% of prior year tax (110% if high income)
• **Penalty avoidance**: Ensure adequate withholding or payments

**Mid-Year Tax Projection**:
• **Income assessment**: Review year-to-date income and projections
• **Deduction planning**: Estimate itemized vs. standard deduction
• **Withholding adjustment**: Modify W-4 if needed
• **Roth conversion opportunity**: Consider conversions in low-income years

**July - September: Third Quarter Adjustments**

**Retirement Plan Contributions**:
• **401(k) contributions**: Adjust to maximize employer match
• **Catch-up contributions**: Increase contributions if 50 or older
• **Roth conversions**: Consider converting traditional IRA funds
• **Beneficiary updates**: Review and update beneficiary designations

**October - December: Year-End Tax Planning**

**Income Management**:
• **Bonus timing**: Defer bonuses to next year if beneficial
• **Roth conversions**: Execute conversions before year-end
• **Required distributions**: Take RMDs from retirement accounts
• **Capital gains**: Realize gains to use up lower tax brackets

**Deduction Strategies**:
• **Bunching deductions**: Accelerate deductions into current year
• **Charitable giving**: Make large donations before year-end
• **Medical expenses**: Schedule elective procedures if beneficial
• **State tax payments**: Prepay state taxes if deductible

**Investment Tax Planning**:
• **Tax-loss harvesting**: Realize losses to offset gains
• **Asset location**: Move investments to tax-efficient accounts
• **Municipal bonds**: Consider tax-free municipal bonds
• **Dividend timing**: Manage dividend income for optimal taxation

**Multi-Year Tax Planning**

**Income Smoothing**:
• **Bunching income**: Concentrate income in certain years
• **Roth conversion ladders**: Systematic traditional to Roth conversions
• **Deferral strategies**: Delay income to lower tax years
• **Acceleration strategies**: Accelerate income in lower tax years

**Lifecycle Tax Planning**:
• **Early career**: Maximize Roth contributions, minimize current taxes
• **Peak earning years**: Balance current and future tax rates
• **Pre-retirement**: Optimize withdrawal strategies
• **Retirement**: Minimize taxes on retirement income

**State Tax Considerations**

**Multi-State Planning**:
• **Residency rules**: Understand state residency requirements
• **Source rules**: Different states tax different types of income
• **Reciprocity agreements**: Some states don't double-tax
• **Retirement income**: Some states don't tax retirement income

**Common Tax Planning Mistakes**

**Timing Errors**:
• **Procrastination**: Waiting until year-end limits options
• **Wash sale violations**: Repurchasing securities too quickly
• **RMD failures**: Missing required minimum distributions
• **Estimated payment penalties**: Inadequate quarterly payments

**Documentation Failures**:
• **Missing receipts**: Losing documentation for deductions
• **Inadequate records**: Poor record-keeping for business expenses
• **Beneficiary oversights**: Outdated beneficiary designations
• **Audit preparation**: Insufficient documentation for tax positions

**Strategy Coordination**:
• **Conflicting strategies**: Tax moves that work against each other
• **Ignoring state taxes**: Focusing only on federal tax implications
• **Short-term thinking**: Optimizing current year at expense of future
• **Professional coordination**: Advisors not communicating effectively

Remember: Tax planning is most effective when integrated with your overall financial plan. Regular review and adjustment of strategies ensures you're taking advantage of all available opportunities while staying compliant with tax laws.`}];return c.jsx(Hn,{title:"Tax Fundamentals",intro:"Learn about different types of taxes, deductions, credits, and strategies to minimize your tax burden legally.",sections:n,videoEmbed:c.jsx(bn,{videoId:"ROb2Vp5Rs7A",title:"How Taxes Work in the U.S."}),duration:"16 min",difficulty:"Intermediate",prevLessonPath:"/lessons/understanding-inflation",prevLessonTitle:"Understanding Inflation",nextLessonPath:"/lessons/retirement-planning",nextLessonTitle:"Retirement Planning",quizId:"tax-fundamentals"})}function qR(){const n=[{title:"The Power of Starting Early: Why Time Is Your Greatest Asset",content:`Retirement planning is one of the most important financial decisions you'll make, and time is your most powerful ally. The earlier you start, the less you need to save each month to reach your goals, thanks to the magic of compound interest.

**The Compound Interest Advantage**

When you invest for retirement, your money doesn't just grow—it grows exponentially. Each year, you earn returns not only on your original contributions but also on all the previous years' gains. This compounding effect becomes incredibly powerful over long periods.

**Real-World Example: The Power of Starting Early**

Let's compare two investors:

**Early Emma**: Starts investing at age 25
• Invests $200/month for 10 years (ages 25-35)
• Then stops contributing but leaves money invested
• Total contributions: $24,000
• At age 65 with 7% returns: $602,070

**Late Larry**: Starts investing at age 35
• Invests $200/month for 30 years (ages 35-65)
• Total contributions: $72,000
• At age 65 with 7% returns: $244,692

**Result**: Emma contributed $48,000 less but has $357,378 more at retirement!

**The 10-Year Difference Impact**

Starting just 10 years later requires dramatically higher savings:
• **Start at 25**: $200/month reaches $1.2M by age 65
• **Start at 35**: Need $500/month to reach $1.2M by age 65
• **Start at 45**: Need $1,200/month to reach $1.2M by age 65

**Why People Don't Start Early**

**Common Excuses**:
• "I don't have enough money to save"
• "I'll start when I get a raise"
• "I'm young, I have plenty of time"
• "I need to pay off debt first"

**The Reality**:
• Even $50/month makes a difference
• Waiting for the "perfect time" costs you years of compound growth
• Time is finite—every year you wait is a year you can't get back
• Starting small while paying off debt is better than not starting at all

**Making Starting Early Possible**

**Automatic Enrollment**: Many employers now automatically enroll new employees in 401(k) plans, starting with a small percentage that increases over time.

**The 1% Solution**: Start with just 1% of your salary. Most people won't even notice the difference in their paycheck, but it establishes the habit.

**Raise Escalation**: Increase your savings rate by 1% each year or whenever you get a raise. This painless approach gradually builds your savings rate.

**Side Hustle Savings**: Use income from part-time work, freelancing, or gig economy jobs exclusively for retirement savings.

**The Flexibility Advantage of Starting Early**

When you start early, you have more options:
• **Market downturns**: You can ride out volatility because you have decades to recover
• **Career changes**: You have flexibility to pursue lower-paying but more fulfilling work
• **Economic uncertainty**: You're not dependent on perfect market timing
• **Life changes**: You can adjust your strategy as circumstances change

**Starting Early vs. Starting Late: The Math**

**Target**: $1 million by age 65 (assuming 7% annual returns)

**Age 25**: $286/month
**Age 30**: $421/month
**Age 35**: $642/month
**Age 40**: $1,010/month
**Age 45**: $1,679/month
**Age 50**: $3,041/month
**Age 55**: $6,439/month

**The message is clear**: Every year you delay makes retirement planning significantly more expensive.

**Taking Action Today**

**If You're in Your 20s**: Start with whatever you can afford, even if it's just $25/month. Focus on building the habit and increasing contributions over time.

**If You're in Your 30s**: You still have significant time for compound growth. Aim for 10-15% of income including employer match.

**If You're in Your 40s**: Play catch-up by maximizing contributions and considering more aggressive savings rates.

**If You're 50+**: Take advantage of catch-up contributions and consider working a few extra years if needed.

Remember: The best time to start saving for retirement was 20 years ago. The second-best time is today.`},{title:"401(k) Plans: Your Primary Retirement Vehicle",content:`For most Americans, a 401(k) plan is the foundation of retirement savings. Understanding how to maximize these plans is crucial for building retirement wealth.

**How 401(k) Plans Work**

**Pre-Tax Contributions**: Money comes out of your paycheck before income taxes are calculated, reducing your current tax bill.

**Tax-Deferred Growth**: Your investments grow tax-free while in the account. You only pay taxes when you withdraw money in retirement.

**Employer Matching**: Many employers contribute money to your account based on your contributions—essentially free money.

**Vesting**: You own your contributions immediately, but employer contributions may vest over time (typically 3-6 years).

**2024 Contribution Limits**
• **Employee contribution**: $23,000 annually
• **Catch-up contribution**: Additional $7,500 if age 50 or older
• **Total limit**: $69,000 including employer contributions ($76,500 with catch-up)

**Understanding Employer Matching**

**Common Matching Formulas**:
• **Dollar-for-dollar up to 3%**: Employer matches 100% of your contributions up to 3% of salary
• **50 cents per dollar up to 6%**: Employer matches 50% of your contributions up to 6% of salary
• **Tiered matching**: Different percentages for different contribution levels

**Matching Example**:
$60,000 salary with 50% match up to 6%:
• **You contribute 6%**: $3,600
• **Employer contributes 3%**: $1,800
• **Total annual contribution**: $5,400

**Maximizing Your 401(k)**

**Step 1: Get the Full Match**
Always contribute enough to get the full employer match. This is typically a 25-100% immediate return on your money.

**Step 2: Increase Contributions Annually**
• Start with the match, then increase by 1% each year
• Use raises to increase contributions without reducing take-home pay
• Consider automatic escalation features

**Step 3: Maximize Contributions**
If possible, contribute the maximum amount allowed. High earners should especially take advantage of the tax benefits.

**Step 4: Use Catch-Up Contributions**
Once you turn 50, you can contribute an additional $7,500 annually. This is crucial for workers who started saving late.

**Investment Options in 401(k)s**

**Target-Date Funds**: Automatically adjust asset allocation as you age. Good default option for hands-off investors.

**Index Funds**: Low-cost funds that track market indices. Often the best choice for long-term growth.

**Actively Managed Funds**: Professional management, but higher fees and often underperform index funds.

**Company Stock**: Avoid concentrating too much in your employer's stock. Diversification is key.

**Common 401(k) Mistakes**

**Not Contributing Enough for Full Match**: Leaving free money on the table.

**Poor Investment Selection**: Choosing high-fee funds or being too conservative.

**Taking Loans**: Borrowing against your 401(k) reduces retirement savings and has risks.

**Cashing Out When Changing Jobs**: Taking distributions instead of rolling over to new employer or IRA.

**Ignoring Rebalancing**: Not adjusting investment mix as you age or as market conditions change.

**401(k) Loan Considerations**

**When Loans Make Sense**:
• Avoid high-interest credit card debt
• Prevent foreclosure on your home
• Emergency situations with no other options

**Loan Terms**:
• **Maximum amount**: Lesser of 50% of vested balance or $50,000
• **Repayment period**: Usually 5 years (longer for home purchase)
• **Interest rate**: Typically prime rate + 1-2%
• **Repayment**: Through payroll deduction

**Loan Risks**:
• **Opportunity cost**: Missing out on investment growth
• **Job loss risk**: Loan becomes due immediately if you leave your job
• **Double taxation**: Repay with after-tax dollars, then pay taxes again in retirement

**Roth 401(k) Option**

**How Roth 401(k) Differs**:
• **After-tax contributions**: No immediate tax deduction
• **Tax-free growth**: No taxes on investment gains
• **Tax-free withdrawals**: No taxes on qualified distributions in retirement
• **Same contribution limits**: Can contribute same amounts as traditional 401(k)

**Roth 401(k) vs. Traditional 401(k)**:
• **Choose Roth if**: You expect to be in higher tax bracket in retirement
• **Choose Traditional if**: You expect to be in lower tax bracket in retirement
• **Hedge approach**: Split contributions between both types

**401(k) Rollover Strategies**

**When Changing Jobs**:
• **Direct rollover**: Move money directly to new employer's plan or IRA
• **Indirect rollover**: Receive check and have 60 days to deposit in new account
• **Leave with former employer**: Usually possible but may have limitations
• **Cash out**: Worst option due to taxes and penalties

**Rollover to IRA Benefits**:
• **More investment options**: Broader selection than employer plans
• **Lower fees**: Often cheaper than employer plan options
• **Consolidation**: Combine multiple old 401(k)s into one account
• **Roth conversion opportunities**: Can convert traditional IRA to Roth

**Required Minimum Distributions (RMDs)**

**RMD Rules**:
• **Start age**: Must begin taking distributions at age 73
• **Calculation**: Based on account balance and life expectancy
• **Penalty**: 50% penalty on missed distributions
• **Working exception**: Can delay RMDs from current employer's plan if still working

**RMD Planning**:
• **Roth conversions**: Convert traditional money to Roth before RMDs begin
• **Charitable giving**: Use qualified charitable distributions to satisfy RMDs
• **Tax planning**: Coordinate RMDs with other retirement income

Remember: Your 401(k) is likely your most important retirement savings vehicle. Maximize contributions, get the full employer match, choose appropriate investments, and avoid common mistakes to build substantial retirement wealth.`},{title:"IRA Strategies: Traditional vs. Roth Decision Making",content:`Individual Retirement Accounts (IRAs) are essential tools for retirement planning, offering tax advantages and investment flexibility that complement employer-sponsored plans.

**Traditional IRA Deep Dive**

**Tax Benefits**:
• **Deductible contributions**: Reduce current year taxable income
• **Tax-deferred growth**: No taxes on investment gains while in account
• **Taxable distributions**: Pay ordinary income tax on withdrawals in retirement

**Contribution Limits (2024)**:
• **Under 50**: $7,000 annually
• **50 and older**: $8,000 annually (includes $1,000 catch-up)
• **Deadline**: Can contribute until April 15 of following year

**Deductibility Rules**:
If you have a workplace retirement plan, traditional IRA deductibility phases out:
• **Single**: $73,000 - $83,000 AGI
• **Married filing jointly**: $116,000 - $136,000 AGI
• **Married filing separately**: $0 - $10,000 AGI

**If no workplace plan**: Full deductibility regardless of income

**Roth IRA Deep Dive**

**Tax Benefits**:
• **After-tax contributions**: No immediate tax deduction
• **Tax-free growth**: No taxes on investment gains
• **Tax-free qualified distributions**: No taxes on withdrawals of contributions or earnings

**Income Limits (2024)**:
Roth IRA contribution eligibility phases out:
• **Single**: $138,000 - $153,000 AGI
• **Married filing jointly**: $218,000 - $228,000 AGI
• **Married filing separately**: $0 - $10,000 AGI

**Roth IRA Advantages**:
• **No required distributions**: Can leave money in account indefinitely
• **Contribution flexibility**: Can withdraw contributions anytime tax-free
• **Tax-free inheritance**: Heirs receive tax-free distributions
• **No age restrictions**: Can contribute at any age with earned income

**The Roth vs. Traditional Decision**

**Choose Traditional IRA When**:
• **High current tax bracket**: Benefit from immediate tax deduction
• **Expect lower tax bracket in retirement**: Pay less tax on withdrawals
• **Need current tax relief**: Want to reduce current year tax bill
• **Shorter time horizon**: Less time for tax-free growth to compound

**Choose Roth IRA When**:
• **Low current tax bracket**: Tax cost of contribution is low
• **Expect higher tax bracket in retirement**: Avoid future high tax rates
• **Young investor**: Long time horizon maximizes tax-free growth
• **Estate planning**: Want to leave tax-free money to heirs

**Mathematical Example**:
$5,000 annual contribution, 7% return, 30 years:

**Traditional IRA** (22% tax bracket now, 22% in retirement):
• **Tax savings now**: $1,100
• **Account value**: $506,337
• **After-tax value**: $395,923 (assuming 22% tax on withdrawal)

**Roth IRA** (22% tax bracket now):
• **After-tax contribution**: $3,900
• **Account value**: $395,923
• **After-tax value**: $395,923 (no taxes on withdrawal)

**Result**: If tax brackets are the same, outcomes are identical. The advantage comes from different tax rates or other factors.

**Advanced IRA Strategies**

**Backdoor Roth IRA**:
Strategy for high earners who exceed Roth income limits:
1. **Contribute to traditional IRA**: Make non-deductible contribution
2. **Convert to Roth**: Immediately convert traditional to Roth
3. **Pay conversion taxes**: Pay taxes on any gains during conversion
4. **Ongoing strategy**: Repeat annually

**Backdoor Roth Complications**:
• **Pro-rata rule**: Other traditional IRA balances complicate the strategy
• **Step transaction doctrine**: IRS scrutiny of immediate conversions
• **State tax considerations**: Some states tax Roth conversions differently

**Mega Backdoor Roth**:
Strategy for maximizing Roth contributions through employer plans:
1. **After-tax 401(k) contributions**: Contribute after-tax dollars to 401(k)
2. **In-service conversions**: Convert after-tax contributions to Roth
3. **Higher limits**: Can contribute much more than regular Roth IRA limits

**Requirements**:
• **Employer plan allows**: After-tax contributions and in-service conversions
• **High income**: Ability to contribute beyond regular limits
• **Tax planning**: Coordinate with other tax strategies

**Roth Conversion Strategies**

**When to Convert**:
• **Low income years**: Pay conversion taxes at lower rates
• **Market downturns**: Convert when account values are depressed
• **Before RMDs**: Convert traditional money before required distributions
• **Tax rate arbitrage**: Convert when current rates are lower than expected future rates

**Conversion Considerations**:
• **Tax impact**: Conversions are taxable events
• **Medicare premiums**: Higher income may increase Medicare costs
• **Tax bracket management**: Spread conversions over multiple years
• **State tax planning**: Some states don't tax Roth conversions

**Roth Conversion Ladder**:
Systematic strategy for accessing retirement money before age 59½:
1. **Convert traditional to Roth**: Pay taxes on conversion
2. **Wait 5 years**: Each conversion has its own 5-year clock
3. **Access converted funds**: Withdraw conversion amounts penalty-free
4. **Repeat process**: Continue conversions to create ongoing access

**IRA Investment Strategies**

**Asset Location Optimization**:
• **Tax-efficient investments**: Index funds, individual stocks in taxable accounts
• **Tax-inefficient investments**: REITs, bonds, actively managed funds in IRAs
• **Highest growth potential**: Put growth investments in Roth IRAs

**IRA Investment Rules**:
• **Prohibited investments**: Life insurance, collectibles, S-corp stock
• **Self-directed IRAs**: Can invest in real estate, private businesses, etc.
• **Unrelated business income**: May trigger taxes in retirement accounts

**Required Minimum Distributions (RMDs)**

**Traditional IRA RMD Rules**:
• **Start age**: Must begin at age 73
• **Calculation**: Account balance ÷ life expectancy factor
• **Penalty**: 50% penalty on missed distributions
• **Multiple accounts**: Can satisfy RMD from one account

**Roth IRA RMD Rules**:
�� **No RMDs**: Owner never required to take distributions
• **Inherited Roth**: Heirs may have RMD requirements
• **Advantage**: Can leave money to grow tax-free indefinitely

**RMD Strategies**:
• **Qualified charitable distributions**: Direct transfer to charity
• **Bunching strategy**: Take larger distributions in some years
• **Roth conversions**: Convert before RMDs begin
• **Asset allocation**: Plan for forced distributions

**Estate Planning with IRAs**

**Beneficiary Designations**:
• **Primary beneficiaries**: First in line to inherit
• **Contingent beneficiaries**: Backup if primary predeceases
• **Regular updates**: Review after major life events
• **Specific instructions**: Include percentage splits, per stirpes/per capita

**SECURE Act Changes**:
• **10-year rule**: Most non-spouse beneficiaries must empty account in 10 years
• **Spouse exceptions**: Surviving spouses can treat as their own
• **Minor children**: Can stretch until age of majority, then 10-year rule
• **Chronically ill/disabled**: Can continue stretch distributions

**IRA vs. 401(k) Comparison**

**IRA Advantages**:
• **Investment flexibility**: Can invest in almost anything
• **Lower fees**: Often cheaper than employer plans
• **Consolidation**: Combine multiple accounts
• **Roth options**: Available even if employer doesn't offer Roth 401(k)

**401(k) Advantages**:
• **Higher contribution limits**: $23,000 vs. $7,000
• **Employer matching**: Free money
• **Loan options**: Can borrow against balance
• **Creditor protection**: Generally stronger than IRAs

**Optimal Strategy**: Use both accounts complementarily—maximize employer match in 401(k), then contribute to IRA for flexibility and additional savings.

Understanding these nuances helps you make informed decisions about traditional vs. Roth IRAs and implement sophisticated strategies to maximize your retirement wealth.`},{title:"Retirement Savings Targets and Withdrawal Strategies",content:`Determining how much to save for retirement and how to withdraw money once you're retired are two of the most important financial planning decisions you'll make.

**How Much Money Do You Need for Retirement?**

**The 25x Rule**:
A common rule of thumb is that you need 25 times your annual expenses in retirement savings. This is based on the 4% withdrawal rule, which suggests you can safely withdraw 4% of your portfolio annually.

**Example**: If you need $60,000 annually in retirement:
• **Savings needed**: $60,000 × 25 = $1.5 million
• **4% withdrawal**: $1.5 million × 4% = $60,000

**Replacement Ratio Method**:
Aim to replace 70-90% of your pre-retirement income:
• **Lower end (70%)**: Mortgage paid off, lower expenses
• **Higher end (90%)**: Maintain current lifestyle, travel plans

**Example**: $80,000 pre-retirement income
• **80% replacement**: $64,000 needed annually
• **Savings needed**: $64,000 × 25 = $1.6 million

**Factors Affecting Retirement Needs**

**Healthcare Costs**:
• **Medicare gaps**: Supplemental insurance needed
• **Long-term care**: Average cost $50,000+ annually
• **Prescription drugs**: Increasing medication costs
• **Dental/vision**: Often not covered by Medicare

**Inflation Impact**:
• **3% annual inflation**: Doubles costs every 23 years
• **30-year retirement**: May need twice as much income at end
• **Healthcare inflation**: Often exceeds general inflation

**Longevity Risk**:
• **Life expectancy**: Many retirees live 20-30 years in retirement
• **Sequence of returns**: Poor early returns can devastate portfolios
• **Lifestyle changes**: May need assistance or care later

**Tax Considerations**:
• **Traditional account withdrawals**: Taxed as ordinary income
• **Roth account withdrawals**: Tax-free qualified distributions
• **Tax diversification**: Having both traditional and Roth accounts

**Income Replacement Sources**

**Social Security**:
• **Average benefit**: About $1,800/month in 2024
• **Claiming strategies**: Age 62 (reduced) to age 70 (maximum)
• **Spousal benefits**: Up to 50% of spouse's benefit
• **Survivor benefits**: Higher-earning spouse's benefit continues

**Employer Pensions**:
• **Defined benefit**: Guaranteed monthly payments
• **Lump sum options**: May be available for some pensions
• **Survivor benefits**: Continuing payments to surviving spouse
• **COLA adjustments**: Cost-of-living increases (rare)

**Personal Savings**:
• **401(k)/403(b)**: Employer-sponsored retirement plans
• **IRAs**: Traditional and Roth individual retirement accounts
• **Taxable investments**: Brokerage accounts, individual stocks
• **Real estate**: Rental income or home equity

**Part-Time Work**:
• **Consulting**: Use professional skills part-time
• **Retail/service**: Flexible part-time employment
• **Entrepreneurship**: Start small business in retirement
• **Benefits**: Social interaction, purpose, additional income

**Retirement Savings Benchmarks by Age**

**Age 30**: 1x annual salary saved
**Age 35**: 2x annual salary saved
**Age 40**: 3x annual salary saved
**Age 45**: 4x annual salary saved
**Age 50**: 6x annual salary saved
**Age 55**: 7x annual salary saved
**Age 60**: 8x annual salary saved
**Age 65**: 10x annual salary saved

**Example**: $60,000 salary at age 40
• **Target savings**: $180,000 (3x salary)
• **Behind target**: Increase savings rate, consider catch-up strategies
• **Ahead of target**: Continue current strategy, consider tax optimization

**Withdrawal Strategies in Retirement**

**The 4% Rule**:
Withdraw 4% of your portfolio in the first year of retirement, then adjust for inflation annually.

**4% Rule Example**:
• **Year 1**: $1 million portfolio, withdraw $40,000
• **Year 2**: Adjust for 3% inflation, withdraw $41,200
• **Year 3**: Adjust for inflation again, withdraw $42,436

**4% Rule Limitations**:
• **Market timing**: Poor early returns can cause failure
• **Inflation variability**: Some years have higher inflation
• **Spending flexibility**: Assumes constant inflation-adjusted spending
• **Portfolio composition**: Originally based on 50% stocks, 50% bonds

**Dynamic Withdrawal Strategies**

**Guardrails Strategy**:
Adjust spending based on portfolio performance:
• **Upper guardrail**: Increase spending if portfolio grows significantly
• **Lower guardrail**: Decrease spending if portfolio declines
• **Flexibility**: Maintains purchasing power while protecting portfolio

**Bucket Strategy**:
Divide portfolio into time-based buckets:
• **Bucket 1**: 1-3 years expenses in cash/CDs
• **Bucket 2**: 4-10 years expenses in bonds
• **Bucket 3**: 10+ years expenses in stocks

**Benefits**: Emotional comfort, sequence of returns protection, clear strategy

**Bond Ladder Strategy**:
Create series of bonds maturing at different times:
• **Predictable income**: Know exactly when bonds mature
• **Reinvestment flexibility**: Can adjust as rates change
• **Inflation protection**: Can buy higher-yielding bonds as rates rise

**Tax-Efficient Withdrawal Strategies**

**Account Prioritization**:
1. **Taxable accounts first**: Use up accounts with no tax benefits
2. **Traditional retirement accounts**: Manage tax brackets
3. **Roth accounts last**: Maximize tax-free growth

**Exception**: May prioritize Roth conversions in low-income years

**Tax Bracket Management**:
• **Fill up brackets**: Withdraw enough to stay in current bracket
• **Avoid cliffs**: Don't trigger Medicare premium increases
• **Roth conversions**: Convert traditional to Roth in low-income years
• **Charitable giving**: Use qualified charitable distributions

**Asset Location in Retirement**:
• **Income-producing assets**: Hold in tax-deferred accounts
• **Growth assets**: Hold in Roth accounts
• **Tax-efficient assets**: Hold in taxable accounts

**Sequence of Returns Risk**

**The Problem**: Poor investment returns early in retirement can permanently damage your portfolio's ability to provide lifetime income.

**Example**: Two retirees with identical average returns but different sequences:
• **Retiree A**: Poor returns in years 1-5, good returns in years 6-30
• **Retiree B**: Good returns in years 1-5, poor returns in years 6-30
• **Result**: Retiree A may run out of money, Retiree B may not

**Mitigation Strategies**:
• **Conservative early years**: Start with lower withdrawal rates
• **Flexible spending**: Reduce spending in poor market years
• **Bond tent**: Gradually increase bond allocation as retirement approaches
• **Bucket strategy**: Maintain cash for near-term expenses

**Healthcare Cost Planning**

**Medicare Planning**:
• **Part A**: Hospital insurance (usually premium-free)
• **Part B**: Medical insurance (standard premium $174.70/month in 2024)
• **Part C**: Medicare Advantage (alternative to Parts A & B)
• **Part D**: Prescription drug coverage
• **Medigap**: Supplemental insurance for Medicare gaps

**Long-Term Care Insurance**:
• **Probability**: 70% chance of needing long-term care
• **Costs**: $50,000-$100,000+ annually
• **Insurance options**: Traditional, hybrid life/LTC, annuity/LTC
• **Self-insurance**: Save specifically for long-term care costs

**Estate Planning in Retirement**

**Will and Trust Updates**:
• **Regular reviews**: Update after major life events
• **Beneficiary designations**: Keep retirement accounts updated
• **Healthcare directives**: Medical power of attorney, living will
• **Financial power of attorney**: Someone to manage finances if needed

**Tax-Efficient Wealth Transfer**:
• **Roth conversions**: Leave tax-free money to heirs
• **Charitable giving**: Reduce taxable estate
• **Generation-skipping**: Strategies for grandchildren
• **Step-up basis**: Appreciated assets get new cost basis at death

Remember: Retirement planning is not just about accumulating money—it's about creating a sustainable income stream that lasts throughout your retirement years. Start early, save consistently, and develop a withdrawal strategy that protects your wealth while providing the income you need.`},{title:"Advanced Retirement Planning Strategies",content:`As you approach retirement or seek to optimize your retirement plan, these advanced strategies can help maximize your retirement security and tax efficiency.

**Social Security Optimization**

**Claiming Strategies**:
• **Early claiming (62)**: Receive 75% of full benefit for life
• **Full retirement age (67)**: Receive 100% of calculated benefit
• **Delayed retirement (70)**: Receive 132% of full benefit for life

**Break-Even Analysis**:
• **Early vs. full retirement**: Break-even around age 78
• **Full retirement vs. delayed**: Break-even around age 82
• **Health considerations**: Poor health may favor early claiming
• **Longevity planning**: Good health and family history favor delayed claiming

**Spousal Claiming Strategies**:
• **Spousal benefits**: Up to 50% of spouse's benefit
• **Survivor benefits**: Higher-earning spouse's benefit continues
• **File and suspend**: Eliminated by 2015 law changes
• **Restricted application**: Phased out for those born after 1954

**Working in Retirement**:
• **Earnings test**: Benefits reduced if working before full retirement age
• **No earnings test**: After full retirement age, no limit on earnings
• **Higher benefits**: Continued work may increase future benefits
• **Tax implications**: Social Security may become taxable with higher income

**Medicare and Healthcare Planning**

**Medicare Enrollment**:
• **Initial enrollment**: 7-month window around 65th birthday
• **Late enrollment penalties**: Permanent premium increases
• **Special enrollment**: Qualifying life events allow enrollment
• **Employer coverage**: May delay Medicare enrollment

**Medicare Supplement Planning**:
• **Medigap policies**: Supplement Medicare coverage
• **Guaranteed issue**: 6-month window when turning 65
• **Medical underwriting**: Required after initial enrollment period
• **Plan comparison**: Different plans offer different coverage

**Health Savings Account (HSA) in Retirement**:
• **Triple tax advantage**: Deductible, growth, and withdrawals for medical
• **Age 65 rule**: Can withdraw for any purpose without penalty
• **Medicare coordination**: Cannot contribute once enrolled in Medicare
• **Strategy**: Use HSA as retirement account, pay medical expenses out-of-pocket

**Long-Term Care Planning**:
• **Probability**: 70% chance of needing some form of long-term care
• **Costs**: $50,000-$100,000+ annually depending on care level
• **Insurance options**: Traditional LTC, hybrid life/LTC, annuity/LTC
• **Self-insurance**: Saving and investing for potential care needs

**Tax-Efficient Retirement Income**

**Roth Conversion Ladder**:
Systematic strategy for tax-free retirement income:
1. **Convert traditional to Roth**: Pay taxes on conversion
2. **Wait 5 years**: Each conversion has its own 5-year clock
3. **Access converted funds**: Withdraw conversion amounts penalty-free
4. **Repeat annually**: Create ongoing tax-free income stream

**Tax Location Strategy**:
• **Taxable accounts**: Tax-efficient index funds, individual stocks
• **Tax-deferred accounts**: REITs, bonds, actively managed funds
• **Roth accounts**: Highest growth potential investments

**Charitable Giving Strategies**:
• **Qualified charitable distributions**: Direct IRA to charity transfers
• **Donor-advised funds**: Immediate deduction, flexible timing
• **Charitable remainder trusts**: Income stream plus charitable deduction
• **Appreciated asset gifts**: Avoid capital gains taxes

**Estate Planning Integration**

**Retirement Account Beneficiaries**:
• **Spouse beneficiaries**: Can treat as own account
• **Non-spouse beneficiaries**: 10-year distribution rule under SECURE Act
• **Minor children**: Can stretch until age of majority
• **Disabled beneficiaries**: Can continue stretch distributions

**Trust Strategies**:
• **Revocable trusts**: Avoid probate, provide management
• **Irrevocable trusts**: Reduce taxable estate, provide control
• **Charitable trusts**: Combine income and charitable goals
• **Special needs trusts**: Protect disabled beneficiaries

**Generation-Skipping Strategies**:
• **Direct gifts to grandchildren**: Use annual exclusion amounts
• **529 plan superfunding**: 5-year gift tax exclusion acceleration
• **Generation-skipping trusts**: Provide for multiple generations
• **Dynasty trusts**: Perpetual wealth transfer (where legally allowed)

**Alternative Retirement Strategies**

**FIRE Movement (Financial Independence, Retire Early)**:
• **High savings rates**: Often 50%+ of income
• **Lean FIRE**: Minimal expenses, early retirement
• **Fat FIRE**: Maintain higher lifestyle in early retirement
• **Barista FIRE**: Partial retirement with part-time work

**Geographic Arbitrage**:
• **Domestic**: Move to lower cost-of-living areas
• **International**: Retire in countries with lower costs
• **Tax considerations**: State tax implications of moving
• **Healthcare access**: Ensure adequate healthcare availability

**Phased Retirement**:
• **Gradual transition**: Reduce hours rather than immediate retirement
• **Consulting**: Use professional expertise part-time
• **Benefits**: Social interaction, purpose, gradual adjustment
• **Bridge strategy**: Delay Social Security and retirement withdrawals

**Business Ownership in Retirement**:
• **Franchise ownership**: Established business model
• **Consulting practice**: Leverage professional expertise
• **Real estate**: Rental property management
• **Online business**: E-commerce or digital services

**Risk Management in Retirement**

**Longevity Risk**:
• **Life expectancy**: 50% chance of living beyond life expectancy
• **Planning horizon**: Plan for longer retirement than expected
• **Healthcare costs**: Increase with age
• **Inflation protection**: Maintain purchasing power over time

**Sequence of Returns Risk**:
• **Early retirement volatility**: Poor returns early in retirement are devastating
• **Mitigation strategies**: Conservative early years, flexible spending
• **Bond tent**: Gradually increase bond allocation approaching retirement
• **Bucket strategy**: Maintain cash for near-term expenses

**Inflation Risk**:
• **Fixed income erosion**: Bonds and pensions lose purchasing power
• **Healthcare inflation**: Often exceeds general inflation
• **Protection strategies**: Stocks, TIPS, real estate
• **Spending flexibility**: Ability to adjust expenses with inflation

**Interest Rate Risk**:
• **Bond portfolio impact**: Rising rates reduce bond values
• **Reinvestment opportunity**: Higher rates benefit new investments
• **Ladder strategy**: Systematic maturity dates
• **Duration management**: Shorter duration reduces rate sensitivity

**Cognitive Decline Planning**:
• **Financial power of attorney**: Someone to manage finances
• **Simplified portfolios**: Reduce complexity as you age
• **Automatic systems**: Set up systems requiring minimal management
• **Family involvement**: Include family in financial planning

**International Retirement Considerations**

**Tax Treaties**:
• **Double taxation**: Avoid paying taxes to both countries
• **Social Security**: Some countries have totalization agreements
• **Pension recognition**: Tax treatment of U.S. retirement accounts
• **Professional advice**: Complex international tax planning

**Currency Risk**:
• **Exchange rate fluctuations**: Impact purchasing power
• **Hedging strategies**: Currency hedged investments
• **Diversification**: Maintain some U.S. dollar exposure
• **Local currency**: Some expenses in local currency

**Healthcare Access**:
• **Medicare coverage**: Generally doesn't cover international care
• **Local insurance**: May need separate international coverage
• **Quality of care**: Research healthcare quality in target countries
• **Prescription access**: Ensure medication availability

Remember: Advanced retirement planning strategies require careful consideration of your specific circumstances, goals, and risk tolerance. Many of these strategies have complex tax and legal implications that may benefit from professional advice. The key is to start with solid fundamentals and gradually incorporate more sophisticated strategies as appropriate for your situation.`}];return c.jsx(Hn,{title:"Retirement Planning",intro:"Plan for a secure financial future with 401(k)s, IRAs, and smart retirement strategies.",sections:n,videoEmbed:c.jsx(bn,{videoId:"pZNnueqfj_A",title:"Retirement Planning Guide"}),duration:"22 min",difficulty:"Intermediate",prevLessonPath:"/lessons/tax-fundamentals",prevLessonTitle:"Tax Fundamentals",quizId:"retirement-planning"})}function VR(){const{quizId:n}=nC(),r=sl(),i=n?xd(n):null;return i?c.jsx(Rr,{children:c.jsx(Mv,{quiz:i,onComplete:()=>r("/quizzes")})}):c.jsx(Rr,{children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center",children:[c.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Quiz Not Found"}),c.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"The quiz you're looking for doesn't exist."}),c.jsxs(Oe,{onClick:()=>r("/quizzes"),size:"lg",children:[c.jsx(Aa,{className:"mr-2 w-5 h-5"}),"Back to Quizzes"]})]})})}const YR=new CS;function GR(){return c.jsx(RS,{client:YR,children:c.jsxs(nS,{children:[c.jsx(Bb,{}),c.jsx(g1,{}),c.jsxs(CC,{children:[c.jsxs(yC,{children:[c.jsx(ct,{path:"/",element:c.jsx(DC,{})}),c.jsx(ct,{path:"/courses",element:c.jsx(FC,{})}),c.jsx(ct,{path:"/pricing",element:c.jsx(zu,{to:"/courses",replace:!0})}),c.jsx(ct,{path:"/about",element:c.jsx(zu,{to:"/",replace:!0})}),c.jsx(ct,{path:"/quizzes",element:c.jsx(KC,{})}),c.jsx(ct,{path:"/lessons/budgeting-and-saving/*",element:c.jsx(FR,{})}),c.jsx(ct,{path:"/lessons/understanding-credit/*",element:c.jsx($R,{})}),c.jsx(ct,{path:"/lessons/interest-rates/*",element:c.jsx(_R,{})}),c.jsx(ct,{path:"/lessons/loans-and-mortgages/*",element:c.jsx(zR,{})}),c.jsx(ct,{path:"/lessons/investment-basics/*",element:c.jsx(BR,{})}),c.jsx(ct,{path:"/lessons/risk-vs-return/*",element:c.jsx(HR,{})}),c.jsx(ct,{path:"/lessons/understanding-inflation/*",element:c.jsx(WR,{})}),c.jsx(ct,{path:"/lessons/tax-fundamentals/*",element:c.jsx(UR,{})}),c.jsx(ct,{path:"/lessons/retirement-planning/*",element:c.jsx(qR,{})}),c.jsx(ct,{path:"/quiz/:quizId",element:c.jsx(VR,{})}),c.jsx(ct,{path:"*",element:c.jsx(XC,{})})]}),c.jsx(CR,{})]})]})})}B0.createRoot(document.getElementById("root")).render(c.jsx(GR,{}));
