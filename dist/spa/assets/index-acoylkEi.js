var np=n=>{throw TypeError(n)};var Uc=(n,r,i)=>r.has(n)||np("Cannot "+i);var B=(n,r,i)=>(Uc(n,r,"read from private field"),i?i.call(n):r.get(n)),Le=(n,r,i)=>r.has(n)?np("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(n):r.set(n,i),be=(n,r,i,s)=>(Uc(n,r,"write to private field"),s?s.call(n,i):r.set(n,i),i),yt=(n,r,i)=>(Uc(n,r,"access private method"),i);var pa=(n,r,i,s)=>({set _(l){be(n,r,l,i)},get _(){return B(n,r,s)}});function lx(n,r){for(var i=0;i<r.length;i++){const s=r[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function yh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qc={exports:{}},Bo={},Vc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function cx(){if(rp)return Se;rp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,k={};function S(P,_,te){this.props=P,this.context=_,this.refs=k,this.updater=te||C}S.prototype.isReactComponent={},S.prototype.setState=function(P,_){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,_,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function T(){}T.prototype=S.prototype;function I(P,_,te){this.props=P,this.context=_,this.refs=k,this.updater=te||C}var j=I.prototype=new T;j.constructor=I,E(j,S.prototype),j.isPureReactComponent=!0;var D=Array.isArray,$=Object.prototype.hasOwnProperty,U={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function G(P,_,te){var de,xe={},ue=null,Te=null;if(_!=null)for(de in _.ref!==void 0&&(Te=_.ref),_.key!==void 0&&(ue=""+_.key),_)$.call(_,de)&&!z.hasOwnProperty(de)&&(xe[de]=_[de]);var ke=arguments.length-2;if(ke===1)xe.children=te;else if(1<ke){for(var Ae=Array(ke),Ye=0;Ye<ke;Ye++)Ae[Ye]=arguments[Ye+2];xe.children=Ae}if(P&&P.defaultProps)for(de in ke=P.defaultProps,ke)xe[de]===void 0&&(xe[de]=ke[de]);return{$$typeof:n,type:P,key:ue,ref:Te,props:xe,_owner:U.current}}function V(P,_){return{$$typeof:n,type:P.type,key:_,ref:P.ref,props:P.props,_owner:P._owner}}function Y(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function ie(P){var _={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(te){return _[te]})}var ee=/\/+/g;function pe(P,_){return typeof P=="object"&&P!==null&&P.key!=null?ie(""+P.key):_.toString(36)}function J(P,_,te,de,xe){var ue=typeof P;(ue==="undefined"||ue==="boolean")&&(P=null);var Te=!1;if(P===null)Te=!0;else switch(ue){case"string":case"number":Te=!0;break;case"object":switch(P.$$typeof){case n:case r:Te=!0}}if(Te)return Te=P,xe=xe(Te),P=de===""?"."+pe(Te,0):de,D(xe)?(te="",P!=null&&(te=P.replace(ee,"$&/")+"/"),J(xe,_,te,"",function(Ye){return Ye})):xe!=null&&(Y(xe)&&(xe=V(xe,te+(!xe.key||Te&&Te.key===xe.key?"":(""+xe.key).replace(ee,"$&/")+"/")+P)),_.push(xe)),1;if(Te=0,de=de===""?".":de+":",D(P))for(var ke=0;ke<P.length;ke++){ue=P[ke];var Ae=de+pe(ue,ke);Te+=J(ue,_,te,Ae,xe)}else if(Ae=v(P),typeof Ae=="function")for(P=Ae.call(P),ke=0;!(ue=P.next()).done;)ue=ue.value,Ae=de+pe(ue,ke++),Te+=J(ue,_,te,Ae,xe);else if(ue==="object")throw _=String(P),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return Te}function ge(P,_,te){if(P==null)return P;var de=[],xe=0;return J(P,de,"","",function(ue){return _.call(te,ue,xe++)}),de}function le(P){if(P._status===-1){var _=P._result;_=_(),_.then(function(te){(P._status===0||P._status===-1)&&(P._status=1,P._result=te)},function(te){(P._status===0||P._status===-1)&&(P._status=2,P._result=te)}),P._status===-1&&(P._status=0,P._result=_)}if(P._status===1)return P._result.default;throw P._result}var ce={current:null},F={transition:null},Q={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:F,ReactCurrentOwner:U};function X(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ge,forEach:function(P,_,te){ge(P,function(){_.apply(this,arguments)},te)},count:function(P){var _=0;return ge(P,function(){_++}),_},toArray:function(P){return ge(P,function(_){return _})||[]},only:function(P){if(!Y(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Se.Component=S,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=I,Se.StrictMode=s,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Se.act=X,Se.cloneElement=function(P,_,te){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=E({},P.props),xe=P.key,ue=P.ref,Te=P._owner;if(_!=null){if(_.ref!==void 0&&(ue=_.ref,Te=U.current),_.key!==void 0&&(xe=""+_.key),P.type&&P.type.defaultProps)var ke=P.type.defaultProps;for(Ae in _)$.call(_,Ae)&&!z.hasOwnProperty(Ae)&&(de[Ae]=_[Ae]===void 0&&ke!==void 0?ke[Ae]:_[Ae])}var Ae=arguments.length-2;if(Ae===1)de.children=te;else if(1<Ae){ke=Array(Ae);for(var Ye=0;Ye<Ae;Ye++)ke[Ye]=arguments[Ye+2];de.children=ke}return{$$typeof:n,type:P.type,key:xe,ref:ue,props:de,_owner:Te}},Se.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:u,_context:P},P.Consumer=P},Se.createElement=G,Se.createFactory=function(P){var _=G.bind(null,P);return _.type=P,_},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:p,render:P}},Se.isValidElement=Y,Se.lazy=function(P){return{$$typeof:w,_payload:{_status:-1,_result:P},_init:le}},Se.memo=function(P,_){return{$$typeof:g,type:P,compare:_===void 0?null:_}},Se.startTransition=function(P){var _=F.transition;F.transition={};try{P()}finally{F.transition=_}},Se.unstable_act=X,Se.useCallback=function(P,_){return ce.current.useCallback(P,_)},Se.useContext=function(P){return ce.current.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P){return ce.current.useDeferredValue(P)},Se.useEffect=function(P,_){return ce.current.useEffect(P,_)},Se.useId=function(){return ce.current.useId()},Se.useImperativeHandle=function(P,_,te){return ce.current.useImperativeHandle(P,_,te)},Se.useInsertionEffect=function(P,_){return ce.current.useInsertionEffect(P,_)},Se.useLayoutEffect=function(P,_){return ce.current.useLayoutEffect(P,_)},Se.useMemo=function(P,_){return ce.current.useMemo(P,_)},Se.useReducer=function(P,_,te){return ce.current.useReducer(P,_,te)},Se.useRef=function(P){return ce.current.useRef(P)},Se.useState=function(P){return ce.current.useState(P)},Se.useSyncExternalStore=function(P,_,te){return ce.current.useSyncExternalStore(P,_,te)},Se.useTransition=function(){return ce.current.useTransition()},Se.version="18.3.1",Se}var ip;function $u(){return ip||(ip=1,Vc.exports=cx()),Vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function ux(){if(op)return Bo;op=1;var n=$u(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,g){var w,b={},v=null,C=null;g!==void 0&&(v=""+g),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(C=h.ref);for(w in h)s.call(h,w)&&!u.hasOwnProperty(w)&&(b[w]=h[w]);if(p&&p.defaultProps)for(w in h=p.defaultProps,h)b[w]===void 0&&(b[w]=h[w]);return{$$typeof:r,type:p,key:v,ref:C,props:b,_owner:l.current}}return Bo.Fragment=i,Bo.jsx=f,Bo.jsxs=f,Bo}var sp;function dx(){return sp||(sp=1,qc.exports=ux()),qc.exports}var c=dx(),ha={},Yc={exports:{}},Tt={},Gc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function fx(){return ap||(ap=1,function(n){function r(F,Q){var X=F.length;F.push(Q);e:for(;0<X;){var P=X-1>>>1,_=F[P];if(0<l(_,Q))F[P]=Q,F[X]=_,X=P;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var Q=F[0],X=F.pop();if(X!==Q){F[0]=X;e:for(var P=0,_=F.length,te=_>>>1;P<te;){var de=2*(P+1)-1,xe=F[de],ue=de+1,Te=F[ue];if(0>l(xe,X))ue<_&&0>l(Te,xe)?(F[P]=Te,F[ue]=X,P=ue):(F[P]=xe,F[de]=X,P=de);else if(ue<_&&0>l(Te,X))F[P]=Te,F[ue]=X,P=ue;else break e}}return Q}function l(F,Q){var X=F.sortIndex-Q.sortIndex;return X!==0?X:F.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],g=[],w=1,b=null,v=3,C=!1,E=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(F){for(var Q=i(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=F)s(g),Q.sortIndex=Q.expirationTime,r(h,Q);else break;Q=i(g)}}function D(F){if(k=!1,j(F),!E)if(i(h)!==null)E=!0,le($);else{var Q=i(g);Q!==null&&ce(D,Q.startTime-F)}}function $(F,Q){E=!1,k&&(k=!1,T(G),G=-1),C=!0;var X=v;try{for(j(Q),b=i(h);b!==null&&(!(b.expirationTime>Q)||F&&!ie());){var P=b.callback;if(typeof P=="function"){b.callback=null,v=b.priorityLevel;var _=P(b.expirationTime<=Q);Q=n.unstable_now(),typeof _=="function"?b.callback=_:b===i(h)&&s(h),j(Q)}else s(h);b=i(h)}if(b!==null)var te=!0;else{var de=i(g);de!==null&&ce(D,de.startTime-Q),te=!1}return te}finally{b=null,v=X,C=!1}}var U=!1,z=null,G=-1,V=5,Y=-1;function ie(){return!(n.unstable_now()-Y<V)}function ee(){if(z!==null){var F=n.unstable_now();Y=F;var Q=!0;try{Q=z(!0,F)}finally{Q?pe():(U=!1,z=null)}}else U=!1}var pe;if(typeof I=="function")pe=function(){I(ee)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ge=J.port2;J.port1.onmessage=ee,pe=function(){ge.postMessage(null)}}else pe=function(){S(ee,0)};function le(F){z=F,U||(U=!0,pe())}function ce(F,Q){G=S(function(){F(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){E||C||(E=!0,le($))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(F){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var X=v;v=Q;try{return F()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=v;v=F;try{return Q()}finally{v=X}},n.unstable_scheduleCallback=function(F,Q,X){var P=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,F){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=X+_,F={id:w++,callback:Q,priorityLevel:F,startTime:X,expirationTime:_,sortIndex:-1},X>P?(F.sortIndex=X,r(g,F),i(h)===null&&F===i(g)&&(k?(T(G),G=-1):k=!0,ce(D,X-P))):(F.sortIndex=_,r(h,F),E||C||(E=!0,le($))),F},n.unstable_shouldYield=ie,n.unstable_wrapCallback=function(F){var Q=v;return function(){var X=v;v=Q;try{return F.apply(this,arguments)}finally{v=X}}}}(Qc)),Qc}var lp;function mx(){return lp||(lp=1,Gc.exports=fx()),Gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function px(){if(cp)return Tt;cp=1;var n=$u(),r=mx();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},b={};function v(e){return h.call(b,e)?!0:h.call(w,e)?!1:g.test(e)?b[e]=!0:(w[e]=!0,!1)}function C(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,o,a){if(t===null||typeof t>"u"||C(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function k(e,t,o,a,d,m,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=m,this.removeEmptyString=x}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,I);S[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,I);S[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,I);S[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,t,o,a){var d=S.hasOwnProperty(t)?S[t]:null;(d!==null?d.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,o,d,a)&&(o=null),a||d===null?v(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(t=d.attributeName,a=d.attributeNamespace,o===null?e.removeAttribute(t):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),ie=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),F=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,P;function _(e){if(P===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var te=!1;function de(e,t){if(!e||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var a=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){a=O}e.call(t.prototype)}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var d=O.stack.split(`
`),m=a.stack.split(`
`),x=d.length-1,R=m.length-1;1<=x&&0<=R&&d[x]!==m[R];)R--;for(;1<=x&&0<=R;x--,R--)if(d[x]!==m[R]){if(x!==1||R!==1)do if(x--,R--,0>R||d[x]!==m[R]){var A=`
`+d[x].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=x&&0<=R);break}}}finally{te=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?_(e):""}function xe(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case U:return"Portal";case V:return"Profiler";case G:return"StrictMode";case pe:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Y:return(e._context.displayName||"Context")+".Provider";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function Te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ke(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=Ae(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(x){a=""+x,m.call(this,x)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=Ye(e))}function Tn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=Ae(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Bt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function An(e,t){var o=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Nr(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=ke(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jt(e,t){t=t.checked,t!=null&&j(e,"checked",t,!1)}function Ir(e,t){Jt(e,t);var o=ke(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ke(e,t.type,o):t.hasOwnProperty("defaultValue")&&Ke(e,t.type,ke(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ni(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ke(e,t,o){(t!=="number"||Bt(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var zt=Array.isArray;function Un(e,t,o,a){if(e=e.options,t){t={};for(var d=0;d<o.length;d++)t["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=t.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&a&&(e[o].defaultSelected=!0)}else{for(o=""+ke(o),t=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jr(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(zt(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:ke(o)}}function rs(e,t){var o=ke(t.value),a=ke(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function Zi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ri(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ri(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Nn=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,d){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,d)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},is=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){is.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function eo(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function os(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=eo(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,d):e[o]=d}}var to=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ht(e,t){if(t){if(to[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function no(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function Oe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Me=null,lt=null,ct=null;function Dr(e){if(e=Eo(e)){if(typeof Me!="function")throw Error(i(280));var t=e.stateNode;t&&(t=As(t),Me(e.stateNode,e.type,t))}}function ss(e){lt?ct?ct.push(e):ct=[e]:lt=e}function wd(){if(lt){var e=lt,t=ct;if(ct=lt=null,Dr(e),t)for(e=0;e<t.length;e++)Dr(t[e])}}function bd(e,t){return e(t)}function kd(){}var al=!1;function Sd(e,t,o){if(al)return e(t,o);al=!0;try{return bd(e,t,o)}finally{al=!1,(lt!==null||ct!==null)&&(kd(),wd())}}function ro(e,t){var o=e.stateNode;if(o===null)return null;var a=As(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var ll=!1;if(p)try{var io={};Object.defineProperty(io,"passive",{get:function(){ll=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{ll=!1}function pv(e,t,o,a,d,m,x,R,A){var O=Array.prototype.slice.call(arguments,3);try{t.apply(o,O)}catch(W){this.onError(W)}}var oo=!1,as=null,ls=!1,cl=null,hv={onError:function(e){oo=!0,as=e}};function gv(e,t,o,a,d,m,x,R,A){oo=!1,as=null,pv.apply(hv,arguments)}function yv(e,t,o,a,d,m,x,R,A){if(gv.apply(this,arguments),oo){if(oo){var O=as;oo=!1,as=null}else throw Error(i(198));ls||(ls=!0,cl=O)}}function Or(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function Cd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ed(e){if(Or(e)!==e)throw Error(i(188))}function vv(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,a=t;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return Ed(d),e;if(m===a)return Ed(d),t;m=m.sibling}throw Error(i(188))}if(o.return!==a.return)o=d,a=m;else{for(var x=!1,R=d.child;R;){if(R===o){x=!0,o=d,a=m;break}if(R===a){x=!0,a=d,o=m;break}R=R.sibling}if(!x){for(R=m.child;R;){if(R===o){x=!0,o=m,a=d;break}if(R===a){x=!0,a=m,o=d;break}R=R.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function Rd(e){return e=vv(e),e!==null?Pd(e):null}function Pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pd(e);if(t!==null)return t;e=e.sibling}return null}var Td=r.unstable_scheduleCallback,Ad=r.unstable_cancelCallback,xv=r.unstable_shouldYield,wv=r.unstable_requestPaint,Xe=r.unstable_now,bv=r.unstable_getCurrentPriorityLevel,ul=r.unstable_ImmediatePriority,Nd=r.unstable_UserBlockingPriority,cs=r.unstable_NormalPriority,kv=r.unstable_LowPriority,Id=r.unstable_IdlePriority,us=null,pn=null;function Sv(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Rv,Cv=Math.log,Ev=Math.LN2;function Rv(e){return e>>>=0,e===0?32:31-(Cv(e)/Ev|0)|0}var ds=64,fs=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,d=e.suspendedLanes,m=e.pingedLanes,x=o&268435455;if(x!==0){var R=x&~d;R!==0?a=so(R):(m&=x,m!==0&&(a=so(m)))}else x=o&~d,x!==0?a=so(x):m!==0&&(a=so(m));if(a===0)return 0;if(t!==0&&t!==a&&(t&d)===0&&(d=a&-a,m=t&-t,d>=m||d===16&&(m&4194240)!==0))return t;if((a&4)!==0&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-Zt(t),d=1<<o,a|=e[o],t&=~d;return a}function Pv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tv(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes;0<m;){var x=31-Zt(m),R=1<<x,A=d[x];A===-1?((R&o)===0||(R&a)!==0)&&(d[x]=Pv(R,t)):A<=t&&(e.expiredLanes|=R),m&=~R}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=ds;return ds<<=1,(ds&4194240)===0&&(ds=64),e}function fl(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function ao(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=o}function Av(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-Zt(o),m=1<<d;t[d]=0,a[d]=-1,e[d]=-1,o&=~m}}function ml(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-Zt(o),d=1<<a;d&t|e[a]&t&&(e[a]|=t),o&=~d}}var Fe=0;function Md(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ld,pl,Dd,Od,Fd,hl=!1,ps=[],Vn=null,Yn=null,Gn=null,lo=new Map,co=new Map,Qn=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function uo(e,t,o,a,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:m,targetContainers:[d]},t!==null&&(t=Eo(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function Iv(e,t,o,a,d){switch(t){case"focusin":return Vn=uo(Vn,e,t,o,a,d),!0;case"dragenter":return Yn=uo(Yn,e,t,o,a,d),!0;case"mouseover":return Gn=uo(Gn,e,t,o,a,d),!0;case"pointerover":var m=d.pointerId;return lo.set(m,uo(lo.get(m)||null,e,t,o,a,d)),!0;case"gotpointercapture":return m=d.pointerId,co.set(m,uo(co.get(m)||null,e,t,o,a,d)),!0}return!1}function _d(e){var t=Fr(e.target);if(t!==null){var o=Or(t);if(o!==null){if(t=o.tag,t===13){if(t=Cd(o),t!==null){e.blockedOn=t,Fd(e.priority,function(){Dd(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);ye=a,o.target.dispatchEvent(a),ye=null}else return t=Eo(o),t!==null&&pl(t),e.blockedOn=o,!1;t.shift()}return!0}function Bd(e,t,o){hs(e)&&o.delete(t)}function jv(){hl=!1,Vn!==null&&hs(Vn)&&(Vn=null),Yn!==null&&hs(Yn)&&(Yn=null),Gn!==null&&hs(Gn)&&(Gn=null),lo.forEach(Bd),co.forEach(Bd)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jv)))}function mo(e){function t(d){return fo(d,e)}if(0<ps.length){fo(ps[0],e);for(var o=1;o<ps.length;o++){var a=ps[o];a.blockedOn===e&&(a.blockedOn=null)}}for(Vn!==null&&fo(Vn,e),Yn!==null&&fo(Yn,e),Gn!==null&&fo(Gn,e),lo.forEach(t),co.forEach(t),o=0;o<Qn.length;o++)a=Qn[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(o=Qn[0],o.blockedOn===null);)_d(o),o.blockedOn===null&&Qn.shift()}var ii=D.ReactCurrentBatchConfig,gs=!0;function Mv(e,t,o,a){var d=Fe,m=ii.transition;ii.transition=null;try{Fe=1,gl(e,t,o,a)}finally{Fe=d,ii.transition=m}}function Lv(e,t,o,a){var d=Fe,m=ii.transition;ii.transition=null;try{Fe=4,gl(e,t,o,a)}finally{Fe=d,ii.transition=m}}function gl(e,t,o,a){if(gs){var d=yl(e,t,o,a);if(d===null)Ll(e,t,a,ys,o),$d(e,a);else if(Iv(d,e,t,o,a))a.stopPropagation();else if($d(e,a),t&4&&-1<Nv.indexOf(e)){for(;d!==null;){var m=Eo(d);if(m!==null&&Ld(m),m=yl(e,t,o,a),m===null&&Ll(e,t,a,ys,o),m===d)break;d=m}d!==null&&a.stopPropagation()}else Ll(e,t,a,null,o)}}var ys=null;function yl(e,t,o,a){if(ys=null,e=Oe(a),e=Fr(e),e!==null)if(t=Or(e),t===null)e=null;else if(o=t.tag,o===13){if(e=Cd(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ys=e,null}function zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bv()){case ul:return 1;case Nd:return 4;case cs:case kv:return 16;case Id:return 536870912;default:return 16}default:return 16}}var Kn=null,vl=null,vs=null;function Hd(){if(vs)return vs;var e,t=vl,o=t.length,a,d="value"in Kn?Kn.value:Kn.textContent,m=d.length;for(e=0;e<o&&t[e]===d[e];e++);var x=o-e;for(a=1;a<=x&&t[o-a]===d[m-a];a++);return vs=d.slice(e,1<a?1-a:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function Wd(){return!1}function Nt(e){function t(o,a,d,m,x){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(o=e[R],this[R]=o?o(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ws:Wd,this.isPropagationStopped=Wd,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Nt(oi),po=X({},oi,{view:0,detail:0}),Dv=Nt(po),wl,bl,ho,bs=X({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(wl=e.screenX-ho.screenX,bl=e.screenY-ho.screenY):bl=wl=0,ho=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),Ud=Nt(bs),Ov=X({},bs,{dataTransfer:0}),Fv=Nt(Ov),$v=X({},po,{relatedTarget:0}),kl=Nt($v),_v=X({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=Nt(_v),zv=X({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hv=Nt(zv),Wv=X({},oi,{data:0}),qd=Nt(Wv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vv[e])?!!t[e]:!1}function Sl(){return Yv}var Gv=X({},po,{key:function(e){if(e.key){var t=Uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sl,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=Nt(Gv),Kv=X({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Nt(Kv),Xv=X({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sl}),Jv=Nt(Xv),Zv=X({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=Nt(Zv),t0=X({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Nt(t0),r0=[9,13,27,32],Cl=p&&"CompositionEvent"in window,go=null;p&&"documentMode"in document&&(go=document.documentMode);var i0=p&&"TextEvent"in window&&!go,Yd=p&&(!Cl||go&&8<go&&11>=go),Gd=" ",Qd=!1;function Kd(e,t){switch(e){case"keyup":return r0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function o0(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(Qd=!0,Gd);case"textInput":return e=t.data,e===Gd&&Qd?null:e;default:return null}}function s0(e,t){if(si)return e==="compositionend"||!Cl&&Kd(e,t)?(e=Hd(),vs=vl=Kn=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yd&&t.locale!=="ko"?null:t.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a0[e.type]:t==="textarea"}function Zd(e,t,o,a){ss(a),t=Rs(t,"onChange"),0<t.length&&(o=new xl("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var yo=null,vo=null;function l0(e){vf(e,0)}function ks(e){var t=di(e);if(Tn(t))return e}function c0(e,t){if(e==="change")return t}var ef=!1;if(p){var El;if(p){var Rl="oninput"in document;if(!Rl){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Rl=typeof tf.oninput=="function"}El=Rl}else El=!1;ef=El&&(!document.documentMode||9<document.documentMode)}function nf(){yo&&(yo.detachEvent("onpropertychange",rf),vo=yo=null)}function rf(e){if(e.propertyName==="value"&&ks(vo)){var t=[];Zd(t,vo,e,Oe(e)),Sd(l0,t)}}function u0(e,t,o){e==="focusin"?(nf(),yo=t,vo=o,yo.attachEvent("onpropertychange",rf)):e==="focusout"&&nf()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ks(vo)}function f0(e,t){if(e==="click")return ks(t)}function m0(e,t){if(e==="input"||e==="change")return ks(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:p0;function xo(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!h.call(t,d)||!en(e[d],t[d]))return!1}return!0}function of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sf(e,t){var o=of(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=of(o)}}function af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lf(){for(var e=window,t=Bt();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Bt(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=lf(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&af(o.ownerDocument.documentElement,o)){if(a!==null&&Pl(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,m=Math.min(a.start,d);a=a.end===void 0?m:Math.min(a.end,d),!e.extend&&m>a&&(d=a,a=m,m=d),d=sf(o,m);var x=sf(o,a);d&&x&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),m>a?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g0=p&&"documentMode"in document&&11>=document.documentMode,ai=null,Tl=null,wo=null,Al=!1;function cf(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Al||ai==null||ai!==Bt(a)||(a=ai,"selectionStart"in a&&Pl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wo&&xo(wo,a)||(wo=a,a=Rs(Tl,"onSelect"),0<a.length&&(t=new xl("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=ai)))}function Ss(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var li={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},Nl={},uf={};p&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Cs(e){if(Nl[e])return Nl[e];if(!li[e])return e;var t=li[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in uf)return Nl[e]=t[o];return e}var df=Cs("animationend"),ff=Cs("animationiteration"),mf=Cs("animationstart"),pf=Cs("transitionend"),hf=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){hf.set(e,t),u(t,[e])}for(var Il=0;Il<gf.length;Il++){var jl=gf[Il],y0=jl.toLowerCase(),v0=jl[0].toUpperCase()+jl.slice(1);Xn(y0,"on"+v0)}Xn(df,"onAnimationEnd"),Xn(ff,"onAnimationIteration"),Xn(mf,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(pf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function yf(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,yv(a,t,void 0,e),e.currentTarget=null}function vf(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],d=a.event;a=a.listeners;e:{var m=void 0;if(t)for(var x=a.length-1;0<=x;x--){var R=a[x],A=R.instance,O=R.currentTarget;if(R=R.listener,A!==m&&d.isPropagationStopped())break e;yf(d,R,O),m=A}else for(x=0;x<a.length;x++){if(R=a[x],A=R.instance,O=R.currentTarget,R=R.listener,A!==m&&d.isPropagationStopped())break e;yf(d,R,O),m=A}}}if(ls)throw e=cl,ls=!1,cl=null,e}function _e(e,t){var o=t[Bl];o===void 0&&(o=t[Bl]=new Set);var a=e+"__bubble";o.has(a)||(xf(t,e,2,!1),o.add(a))}function Ml(e,t,o){var a=0;t&&(a|=4),xf(o,e,a,t)}var Es="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Es]){e[Es]=!0,s.forEach(function(o){o!=="selectionchange"&&(x0.has(o)||Ml(o,!1,e),Ml(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Es]||(t[Es]=!0,Ml("selectionchange",!1,t))}}function xf(e,t,o,a){switch(zd(t)){case 1:var d=Mv;break;case 4:d=Lv;break;default:d=gl}o=d.bind(null,t,o,e),d=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,o,{capture:!0,passive:d}):e.addEventListener(t,o,!0):d!==void 0?e.addEventListener(t,o,{passive:d}):e.addEventListener(t,o,!1)}function Ll(e,t,o,a,d){var m=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var R=a.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(x===4)for(x=a.return;x!==null;){var A=x.tag;if((A===3||A===4)&&(A=x.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;x=x.return}for(;R!==null;){if(x=Fr(R),x===null)return;if(A=x.tag,A===5||A===6){a=m=x;continue e}R=R.parentNode}}a=a.return}Sd(function(){var O=m,W=Oe(o),q=[];e:{var H=hf.get(e);if(H!==void 0){var ne=xl,oe=e;switch(e){case"keypress":if(xs(o)===0)break e;case"keydown":case"keyup":ne=Qv;break;case"focusin":oe="focus",ne=kl;break;case"focusout":oe="blur",ne=kl;break;case"beforeblur":case"afterblur":ne=kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Jv;break;case df:case ff:case mf:ne=Bv;break;case pf:ne=e0;break;case"scroll":ne=Dv;break;case"wheel":ne=n0;break;case"copy":case"cut":case"paste":ne=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Vd}var se=(t&4)!==0,Je=!se&&e==="scroll",M=se?H!==null?H+"Capture":null:H;se=[];for(var N=O,L;N!==null;){L=N;var K=L.stateNode;if(L.tag===5&&K!==null&&(L=K,M!==null&&(K=ro(N,M),K!=null&&se.push(So(N,K,L)))),Je)break;N=N.return}0<se.length&&(H=new ne(H,oe,null,o,W),q.push({event:H,listeners:se}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",H&&o!==ye&&(oe=o.relatedTarget||o.fromElement)&&(Fr(oe)||oe[In]))break e;if((ne||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,ne?(oe=o.relatedTarget||o.toElement,ne=O,oe=oe?Fr(oe):null,oe!==null&&(Je=Or(oe),oe!==Je||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=O),ne!==oe)){if(se=Ud,K="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(se=Vd,K="onPointerLeave",M="onPointerEnter",N="pointer"),Je=ne==null?H:di(ne),L=oe==null?H:di(oe),H=new se(K,N+"leave",ne,o,W),H.target=Je,H.relatedTarget=L,K=null,Fr(W)===O&&(se=new se(M,N+"enter",oe,o,W),se.target=L,se.relatedTarget=Je,K=se),Je=K,ne&&oe)t:{for(se=ne,M=oe,N=0,L=se;L;L=ci(L))N++;for(L=0,K=M;K;K=ci(K))L++;for(;0<N-L;)se=ci(se),N--;for(;0<L-N;)M=ci(M),L--;for(;N--;){if(se===M||M!==null&&se===M.alternate)break t;se=ci(se),M=ci(M)}se=null}else se=null;ne!==null&&wf(q,H,ne,se,!1),oe!==null&&Je!==null&&wf(q,Je,oe,se,!0)}}e:{if(H=O?di(O):window,ne=H.nodeName&&H.nodeName.toLowerCase(),ne==="select"||ne==="input"&&H.type==="file")var ae=c0;else if(Jd(H))if(ef)ae=m0;else{ae=d0;var fe=u0}else(ne=H.nodeName)&&ne.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=f0);if(ae&&(ae=ae(e,O))){Zd(q,ae,o,W);break e}fe&&fe(e,H,O),e==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&Ke(H,"number",H.value)}switch(fe=O?di(O):window,e){case"focusin":(Jd(fe)||fe.contentEditable==="true")&&(ai=fe,Tl=O,wo=null);break;case"focusout":wo=Tl=ai=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,cf(q,o,W);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":cf(q,o,W)}var me;if(Cl)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else si?Kd(e,o)&&(he="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(he="onCompositionStart");he&&(Yd&&o.locale!=="ko"&&(si||he!=="onCompositionStart"?he==="onCompositionEnd"&&si&&(me=Hd()):(Kn=W,vl="value"in Kn?Kn.value:Kn.textContent,si=!0)),fe=Rs(O,he),0<fe.length&&(he=new qd(he,e,null,o,W),q.push({event:he,listeners:fe}),me?he.data=me:(me=Xd(o),me!==null&&(he.data=me)))),(me=i0?o0(e,o):s0(e,o))&&(O=Rs(O,"onBeforeInput"),0<O.length&&(W=new qd("onBeforeInput","beforeinput",null,o,W),q.push({event:W,listeners:O}),W.data=me))}vf(q,t)})}function So(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Rs(e,t){for(var o=t+"Capture",a=[];e!==null;){var d=e,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ro(e,o),m!=null&&a.unshift(So(e,m,d)),m=ro(e,t),m!=null&&a.push(So(e,m,d))),e=e.return}return a}function ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,t,o,a,d){for(var m=t._reactName,x=[];o!==null&&o!==a;){var R=o,A=R.alternate,O=R.stateNode;if(A!==null&&A===a)break;R.tag===5&&O!==null&&(R=O,d?(A=ro(o,m),A!=null&&x.unshift(So(o,A,R))):d||(A=ro(o,m),A!=null&&x.push(So(o,A,R)))),o=o.return}x.length!==0&&e.push({event:t,listeners:x})}var w0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function bf(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(b0,"")}function Ps(e,t,o){if(t=bf(t),bf(e)!==t&&o)throw Error(i(425))}function Ts(){}var Dl=null,Ol=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(e){return kf.resolve(null).then(e).catch(C0)}:$l;function C0(e){setTimeout(function(){throw e})}function _l(e,t){var o=t,a=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){e.removeChild(d),mo(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);mo(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),hn="__reactFiber$"+ui,Co="__reactProps$"+ui,In="__reactContainer$"+ui,Bl="__reactEvents$"+ui,E0="__reactListeners$"+ui,R0="__reactHandles$"+ui;function Fr(e){var t=e[hn];if(t)return t;for(var o=e.parentNode;o;){if(t=o[In]||o[hn]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Sf(e);e!==null;){if(o=e[hn])return o;e=Sf(e)}return t}e=o,o=e.parentNode}return null}function Eo(e){return e=e[hn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function As(e){return e[Co]||null}var zl=[],fi=-1;function Zn(e){return{current:e}}function Be(e){0>fi||(e.current=zl[fi],zl[fi]=null,fi--)}function $e(e,t){fi++,zl[fi]=e.current,e.current=t}var er={},mt=Zn(er),St=Zn(!1),$r=er;function mi(e,t){var o=e.type.contextTypes;if(!o)return er;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=t[m];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function Ct(e){return e=e.childContextTypes,e!=null}function Ns(){Be(St),Be(mt)}function Cf(e,t,o){if(mt.current!==er)throw Error(i(168));$e(mt,t),$e(St,o)}function Ef(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in t))throw Error(i(108,Te(e)||"Unknown",d));return X({},o,a)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,$r=mt.current,$e(mt,e),$e(St,St.current),!0}function Rf(e,t,o){var a=e.stateNode;if(!a)throw Error(i(169));o?(e=Ef(e,t,$r),a.__reactInternalMemoizedMergedChildContext=e,Be(St),Be(mt),$e(mt,e)):Be(St),$e(St,o)}var jn=null,js=!1,Hl=!1;function Pf(e){jn===null?jn=[e]:jn.push(e)}function P0(e){js=!0,Pf(e)}function tr(){if(!Hl&&jn!==null){Hl=!0;var e=0,t=Fe;try{var o=jn;for(Fe=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}jn=null,js=!1}catch(d){throw jn!==null&&(jn=jn.slice(e+1)),Td(ul,tr),d}finally{Fe=t,Hl=!1}}return null}var pi=[],hi=0,Ms=null,Ls=0,Wt=[],Ut=0,_r=null,Mn=1,Ln="";function Br(e,t){pi[hi++]=Ls,pi[hi++]=Ms,Ms=e,Ls=t}function Tf(e,t,o){Wt[Ut++]=Mn,Wt[Ut++]=Ln,Wt[Ut++]=_r,_r=e;var a=Mn;e=Ln;var d=32-Zt(a)-1;a&=~(1<<d),o+=1;var m=32-Zt(t)+d;if(30<m){var x=d-d%5;m=(a&(1<<x)-1).toString(32),a>>=x,d-=x,Mn=1<<32-Zt(t)+d|o<<d|a,Ln=m+e}else Mn=1<<m|o<<d|a,Ln=e}function Wl(e){e.return!==null&&(Br(e,1),Tf(e,1,0))}function Ul(e){for(;e===Ms;)Ms=pi[--hi],pi[hi]=null,Ls=pi[--hi],pi[hi]=null;for(;e===_r;)_r=Wt[--Ut],Wt[Ut]=null,Ln=Wt[--Ut],Wt[Ut]=null,Mn=Wt[--Ut],Wt[Ut]=null}var It=null,jt=null,We=!1,tn=null;function Af(e,t){var o=Gt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Nf(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,jt=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=_r!==null?{id:Mn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Gt(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,It=e,jt=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(We){var t=jt;if(t){var o=t;if(!Nf(e,t)){if(ql(e))throw Error(i(418));t=Jn(o.nextSibling);var a=It;t&&Nf(e,t)?Af(a,o):(e.flags=e.flags&-4097|2,We=!1,It=e)}}else{if(ql(e))throw Error(i(418));e.flags=e.flags&-4097|2,We=!1,It=e}}}function If(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Ds(e){if(e!==It)return!1;if(!We)return If(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=jt)){if(ql(e))throw jf(),Error(i(418));for(;t;)Af(e,t),t=Jn(t.nextSibling)}if(If(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){jt=Jn(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=It?Jn(e.stateNode.nextSibling):null;return!0}function jf(){for(var e=jt;e;)e=Jn(e.nextSibling)}function gi(){jt=It=null,We=!1}function Yl(e){tn===null?tn=[e]:tn.push(e)}var T0=D.ReactCurrentBatchConfig;function Ro(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,e));var d=a,m=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===m?t.ref:(t=function(x){var R=d.refs;x===null?delete R[m]:R[m]=x},t._stringRef=m,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Os(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mf(e){var t=e._init;return t(e._payload)}function Lf(e){function t(M,N){if(e){var L=M.deletions;L===null?(M.deletions=[N],M.flags|=16):L.push(N)}}function o(M,N){if(!e)return null;for(;N!==null;)t(M,N),N=N.sibling;return null}function a(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=cr(M,N),M.index=0,M.sibling=null,M}function m(M,N,L){return M.index=L,e?(L=M.alternate,L!==null?(L=L.index,L<N?(M.flags|=2,N):L):(M.flags|=2,N)):(M.flags|=1048576,N)}function x(M){return e&&M.alternate===null&&(M.flags|=2),M}function R(M,N,L,K){return N===null||N.tag!==6?(N=$c(L,M.mode,K),N.return=M,N):(N=d(N,L),N.return=M,N)}function A(M,N,L,K){var ae=L.type;return ae===z?W(M,N,L.props.children,K,L.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===le&&Mf(ae)===N.type)?(K=d(N,L.props),K.ref=Ro(M,N,L),K.return=M,K):(K=sa(L.type,L.key,L.props,null,M.mode,K),K.ref=Ro(M,N,L),K.return=M,K)}function O(M,N,L,K){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=_c(L,M.mode,K),N.return=M,N):(N=d(N,L.children||[]),N.return=M,N)}function W(M,N,L,K,ae){return N===null||N.tag!==7?(N=Gr(L,M.mode,K,ae),N.return=M,N):(N=d(N,L),N.return=M,N)}function q(M,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return N=$c(""+N,M.mode,L),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $:return L=sa(N.type,N.key,N.props,null,M.mode,L),L.ref=Ro(M,null,N),L.return=M,L;case U:return N=_c(N,M.mode,L),N.return=M,N;case le:var K=N._init;return q(M,K(N._payload),L)}if(zt(N)||Q(N))return N=Gr(N,M.mode,L,null),N.return=M,N;Os(M,N)}return null}function H(M,N,L,K){var ae=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ae!==null?null:R(M,N,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case $:return L.key===ae?A(M,N,L,K):null;case U:return L.key===ae?O(M,N,L,K):null;case le:return ae=L._init,H(M,N,ae(L._payload),K)}if(zt(L)||Q(L))return ae!==null?null:W(M,N,L,K,null);Os(M,L)}return null}function ne(M,N,L,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return M=M.get(L)||null,R(N,M,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case $:return M=M.get(K.key===null?L:K.key)||null,A(N,M,K,ae);case U:return M=M.get(K.key===null?L:K.key)||null,O(N,M,K,ae);case le:var fe=K._init;return ne(M,N,L,fe(K._payload),ae)}if(zt(K)||Q(K))return M=M.get(L)||null,W(N,M,K,ae,null);Os(N,K)}return null}function oe(M,N,L,K){for(var ae=null,fe=null,me=N,he=N=0,at=null;me!==null&&he<L.length;he++){me.index>he?(at=me,me=null):at=me.sibling;var je=H(M,me,L[he],K);if(je===null){me===null&&(me=at);break}e&&me&&je.alternate===null&&t(M,me),N=m(je,N,he),fe===null?ae=je:fe.sibling=je,fe=je,me=at}if(he===L.length)return o(M,me),We&&Br(M,he),ae;if(me===null){for(;he<L.length;he++)me=q(M,L[he],K),me!==null&&(N=m(me,N,he),fe===null?ae=me:fe.sibling=me,fe=me);return We&&Br(M,he),ae}for(me=a(M,me);he<L.length;he++)at=ne(me,M,he,L[he],K),at!==null&&(e&&at.alternate!==null&&me.delete(at.key===null?he:at.key),N=m(at,N,he),fe===null?ae=at:fe.sibling=at,fe=at);return e&&me.forEach(function(ur){return t(M,ur)}),We&&Br(M,he),ae}function se(M,N,L,K){var ae=Q(L);if(typeof ae!="function")throw Error(i(150));if(L=ae.call(L),L==null)throw Error(i(151));for(var fe=ae=null,me=N,he=N=0,at=null,je=L.next();me!==null&&!je.done;he++,je=L.next()){me.index>he?(at=me,me=null):at=me.sibling;var ur=H(M,me,je.value,K);if(ur===null){me===null&&(me=at);break}e&&me&&ur.alternate===null&&t(M,me),N=m(ur,N,he),fe===null?ae=ur:fe.sibling=ur,fe=ur,me=at}if(je.done)return o(M,me),We&&Br(M,he),ae;if(me===null){for(;!je.done;he++,je=L.next())je=q(M,je.value,K),je!==null&&(N=m(je,N,he),fe===null?ae=je:fe.sibling=je,fe=je);return We&&Br(M,he),ae}for(me=a(M,me);!je.done;he++,je=L.next())je=ne(me,M,he,je.value,K),je!==null&&(e&&je.alternate!==null&&me.delete(je.key===null?he:je.key),N=m(je,N,he),fe===null?ae=je:fe.sibling=je,fe=je);return e&&me.forEach(function(ax){return t(M,ax)}),We&&Br(M,he),ae}function Je(M,N,L,K){if(typeof L=="object"&&L!==null&&L.type===z&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case $:e:{for(var ae=L.key,fe=N;fe!==null;){if(fe.key===ae){if(ae=L.type,ae===z){if(fe.tag===7){o(M,fe.sibling),N=d(fe,L.props.children),N.return=M,M=N;break e}}else if(fe.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===le&&Mf(ae)===fe.type){o(M,fe.sibling),N=d(fe,L.props),N.ref=Ro(M,fe,L),N.return=M,M=N;break e}o(M,fe);break}else t(M,fe);fe=fe.sibling}L.type===z?(N=Gr(L.props.children,M.mode,K,L.key),N.return=M,M=N):(K=sa(L.type,L.key,L.props,null,M.mode,K),K.ref=Ro(M,N,L),K.return=M,M=K)}return x(M);case U:e:{for(fe=L.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){o(M,N.sibling),N=d(N,L.children||[]),N.return=M,M=N;break e}else{o(M,N);break}else t(M,N);N=N.sibling}N=_c(L,M.mode,K),N.return=M,M=N}return x(M);case le:return fe=L._init,Je(M,N,fe(L._payload),K)}if(zt(L))return oe(M,N,L,K);if(Q(L))return se(M,N,L,K);Os(M,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,N!==null&&N.tag===6?(o(M,N.sibling),N=d(N,L),N.return=M,M=N):(o(M,N),N=$c(L,M.mode,K),N.return=M,M=N),x(M)):o(M,N)}return Je}var yi=Lf(!0),Df=Lf(!1),Fs=Zn(null),$s=null,vi=null,Gl=null;function Ql(){Gl=vi=$s=null}function Kl(e){var t=Fs.current;Be(Fs),e._currentValue=t}function Xl(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function xi(e,t){$s=e,Gl=vi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Et=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},vi===null){if($s===null)throw Error(i(308));vi=e,$s.dependencies={lanes:0,firstContext:e}}else vi=vi.next=e;return t}var zr=null;function Jl(e){zr===null?zr=[e]:zr.push(e)}function Of(e,t,o,a){var d=t.interleaved;return d===null?(o.next=o,Jl(t)):(o.next=d.next,d.next=o),t.interleaved=o,Dn(e,a)}function Dn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var nr=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ff(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,Dn(e,o)}return d=a.interleaved,d===null?(t.next=t,Jl(a)):(t.next=d.next,d.next=t),a.interleaved=t,Dn(e,o)}function _s(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,ml(e,o)}}function $f(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?d=m=t:m=m.next=t}else d=m=t;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function Bs(e,t,o,a){var d=e.updateQueue;nr=!1;var m=d.firstBaseUpdate,x=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var A=R,O=A.next;A.next=null,x===null?m=O:x.next=O,x=A;var W=e.alternate;W!==null&&(W=W.updateQueue,R=W.lastBaseUpdate,R!==x&&(R===null?W.firstBaseUpdate=O:R.next=O,W.lastBaseUpdate=A))}if(m!==null){var q=d.baseState;x=0,W=O=A=null,R=m;do{var H=R.lane,ne=R.eventTime;if((a&H)===H){W!==null&&(W=W.next={eventTime:ne,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var oe=e,se=R;switch(H=t,ne=o,se.tag){case 1:if(oe=se.payload,typeof oe=="function"){q=oe.call(ne,q,H);break e}q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=se.payload,H=typeof oe=="function"?oe.call(ne,q,H):oe,H==null)break e;q=X({},q,H);break e;case 2:nr=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,H=d.effects,H===null?d.effects=[R]:H.push(R))}else ne={eventTime:ne,lane:H,tag:R.tag,payload:R.payload,callback:R.callback,next:null},W===null?(O=W=ne,A=q):W=W.next=ne,x|=H;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;H=R,R=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(A=q),d.baseState=A,d.firstBaseUpdate=O,d.lastBaseUpdate=W,t=d.shared.interleaved,t!==null){d=t;do x|=d.lane,d=d.next;while(d!==t)}else m===null&&(d.shared.lanes=0);Ur|=x,e.lanes=x,e.memoizedState=q}}function _f(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var Po={},gn=Zn(Po),To=Zn(Po),Ao=Zn(Po);function Hr(e){if(e===Po)throw Error(i(174));return e}function ec(e,t){switch($e(Ao,t),$e(To,e),$e(gn,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mn(t,e)}Be(gn),$e(gn,t)}function wi(){Be(gn),Be(To),Be(Ao)}function Bf(e){Hr(Ao.current);var t=Hr(gn.current),o=mn(t,e.type);t!==o&&($e(To,e),$e(gn,o))}function tc(e){To.current===e&&(Be(gn),Be(To))}var qe=Zn(0);function zs(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nc=[];function rc(){for(var e=0;e<nc.length;e++)nc[e]._workInProgressVersionPrimary=null;nc.length=0}var Hs=D.ReactCurrentDispatcher,ic=D.ReactCurrentBatchConfig,Wr=0,Ve=null,nt=null,ot=null,Ws=!1,No=!1,Io=0,A0=0;function pt(){throw Error(i(321))}function oc(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!en(e[o],t[o]))return!1;return!0}function sc(e,t,o,a,d,m){if(Wr=m,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hs.current=e===null||e.memoizedState===null?M0:L0,e=o(a,d),No){m=0;do{if(No=!1,Io=0,25<=m)throw Error(i(301));m+=1,ot=nt=null,t.updateQueue=null,Hs.current=D0,e=o(a,d)}while(No)}if(Hs.current=Vs,t=nt!==null&&nt.next!==null,Wr=0,ot=nt=Ve=null,Ws=!1,t)throw Error(i(300));return e}function ac(){var e=Io!==0;return Io=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ve.memoizedState=ot=e:ot=ot.next=e,ot}function Vt(){if(nt===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=ot===null?Ve.memoizedState:ot.next;if(t!==null)ot=t,nt=e;else{if(e===null)throw Error(i(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ot===null?Ve.memoizedState=ot=e:ot=ot.next=e}return ot}function jo(e,t){return typeof t=="function"?t(e):t}function lc(e){var t=Vt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=nt,d=a.baseQueue,m=o.pending;if(m!==null){if(d!==null){var x=d.next;d.next=m.next,m.next=x}a.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,a=a.baseState;var R=x=null,A=null,O=m;do{var W=O.lane;if((Wr&W)===W)A!==null&&(A=A.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),a=O.hasEagerState?O.eagerState:e(a,O.action);else{var q={lane:W,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};A===null?(R=A=q,x=a):A=A.next=q,Ve.lanes|=W,Ur|=W}O=O.next}while(O!==null&&O!==m);A===null?x=a:A.next=R,en(a,t.memoizedState)||(Et=!0),t.memoizedState=a,t.baseState=x,t.baseQueue=A,o.lastRenderedState=a}if(e=o.interleaved,e!==null){d=e;do m=d.lane,Ve.lanes|=m,Ur|=m,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function cc(e){var t=Vt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=o.dispatch,d=o.pending,m=t.memoizedState;if(d!==null){o.pending=null;var x=d=d.next;do m=e(m,x.action),x=x.next;while(x!==d);en(m,t.memoizedState)||(Et=!0),t.memoizedState=m,t.baseQueue===null&&(t.baseState=m),o.lastRenderedState=m}return[m,a]}function zf(){}function Hf(e,t){var o=Ve,a=Vt(),d=t(),m=!en(a.memoizedState,d);if(m&&(a.memoizedState=d,Et=!0),a=a.queue,uc(qf.bind(null,o,a,e),[e]),a.getSnapshot!==t||m||ot!==null&&ot.memoizedState.tag&1){if(o.flags|=2048,Mo(9,Uf.bind(null,o,a,d,t),void 0,null),st===null)throw Error(i(349));(Wr&30)!==0||Wf(o,t,d)}return d}function Wf(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Uf(e,t,o,a){t.value=o,t.getSnapshot=a,Vf(t)&&Yf(e)}function qf(e,t,o){return o(function(){Vf(t)&&Yf(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!en(e,o)}catch{return!0}}function Yf(e){var t=Dn(e,1);t!==null&&sn(t,e,1,-1)}function Gf(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=j0.bind(null,Ve,e),[t.memoizedState,e]}function Mo(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function Qf(){return Vt().memoizedState}function Us(e,t,o,a){var d=yn();Ve.flags|=e,d.memoizedState=Mo(1|t,o,void 0,a===void 0?null:a)}function qs(e,t,o,a){var d=Vt();a=a===void 0?null:a;var m=void 0;if(nt!==null){var x=nt.memoizedState;if(m=x.destroy,a!==null&&oc(a,x.deps)){d.memoizedState=Mo(t,o,m,a);return}}Ve.flags|=e,d.memoizedState=Mo(1|t,o,m,a)}function Kf(e,t){return Us(8390656,8,e,t)}function uc(e,t){return qs(2048,8,e,t)}function Xf(e,t){return qs(4,2,e,t)}function Jf(e,t){return qs(4,4,e,t)}function Zf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,o){return o=o!=null?o.concat([e]):null,qs(4,4,Zf.bind(null,t,e),o)}function dc(){}function tm(e,t){var o=Vt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&oc(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function nm(e,t){var o=Vt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&oc(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function rm(e,t,o){return(Wr&21)===0?(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=o):(en(o,t)||(o=jd(),Ve.lanes|=o,Ur|=o,e.baseState=!0),t)}function N0(e,t){var o=Fe;Fe=o!==0&&4>o?o:4,e(!0);var a=ic.transition;ic.transition={};try{e(!1),t()}finally{Fe=o,ic.transition=a}}function im(){return Vt().memoizedState}function I0(e,t,o){var a=ar(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},om(e))sm(t,o);else if(o=Of(e,t,o,a),o!==null){var d=wt();sn(o,e,a,d),am(o,t,a)}}function j0(e,t,o){var a=ar(e),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(om(e))sm(t,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=t.lastRenderedReducer,m!==null))try{var x=t.lastRenderedState,R=m(x,o);if(d.hasEagerState=!0,d.eagerState=R,en(R,x)){var A=t.interleaved;A===null?(d.next=d,Jl(t)):(d.next=A.next,A.next=d),t.interleaved=d;return}}catch{}finally{}o=Of(e,t,d,a),o!==null&&(d=wt(),sn(o,e,a,d),am(o,t,a))}}function om(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function sm(e,t){No=Ws=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function am(e,t,o){if((o&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,ml(e,o)}}var Vs={readContext:qt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},M0={readContext:qt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Kf,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Us(4194308,4,Zf.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Us(4194308,4,e,t)},useInsertionEffect:function(e,t){return Us(4,2,e,t)},useMemo:function(e,t){var o=yn();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=yn();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=I0.bind(null,Ve,e),[a.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Gf,useDebugValue:dc,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Gf(!1),t=e[0];return e=N0.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=Ve,d=yn();if(We){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),st===null)throw Error(i(349));(Wr&30)!==0||Wf(a,t,o)}d.memoizedState=o;var m={value:o,getSnapshot:t};return d.queue=m,Kf(qf.bind(null,a,m,e),[e]),a.flags|=2048,Mo(9,Uf.bind(null,a,m,o,t),void 0,null),o},useId:function(){var e=yn(),t=st.identifierPrefix;if(We){var o=Ln,a=Mn;o=(a&~(1<<32-Zt(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=Io++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=A0++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L0={readContext:qt,useCallback:tm,useContext:qt,useEffect:uc,useImperativeHandle:em,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:nm,useReducer:lc,useRef:Qf,useState:function(){return lc(jo)},useDebugValue:dc,useDeferredValue:function(e){var t=Vt();return rm(t,nt.memoizedState,e)},useTransition:function(){var e=lc(jo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Hf,useId:im,unstable_isNewReconciler:!1},D0={readContext:qt,useCallback:tm,useContext:qt,useEffect:uc,useImperativeHandle:em,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:nm,useReducer:cc,useRef:Qf,useState:function(){return cc(jo)},useDebugValue:dc,useDeferredValue:function(e){var t=Vt();return nt===null?t.memoizedState=e:rm(t,nt.memoizedState,e)},useTransition:function(){var e=cc(jo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Hf,useId:im,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function fc(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:X({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ys={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=wt(),d=ar(e),m=On(a,d);m.payload=t,o!=null&&(m.callback=o),t=rr(e,m,d),t!==null&&(sn(t,e,d,a),_s(t,e,d))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=wt(),d=ar(e),m=On(a,d);m.tag=1,m.payload=t,o!=null&&(m.callback=o),t=rr(e,m,d),t!==null&&(sn(t,e,d,a),_s(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=wt(),a=ar(e),d=On(o,a);d.tag=2,t!=null&&(d.callback=t),t=rr(e,d,a),t!==null&&(sn(t,e,a,o),_s(t,e,a))}};function lm(e,t,o,a,d,m,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,m,x):t.prototype&&t.prototype.isPureReactComponent?!xo(o,a)||!xo(d,m):!0}function cm(e,t,o){var a=!1,d=er,m=t.contextType;return typeof m=="object"&&m!==null?m=qt(m):(d=Ct(t)?$r:mt.current,a=t.contextTypes,m=(a=a!=null)?mi(e,d):er),t=new t(o,m),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=m),t}function um(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function mc(e,t,o,a){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},Zl(e);var m=t.contextType;typeof m=="object"&&m!==null?d.context=qt(m):(m=Ct(t)?$r:mt.current,d.context=mi(e,m)),d.state=e.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(fc(e,t,m,o),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Ys.enqueueReplaceState(d,d.state,null),Bs(e,o,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var o="",a=t;do o+=xe(a),a=a.return;while(a);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:t,stack:d,digest:null}}function pc(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function hc(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function dm(e,t,o){o=On(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){ea||(ea=!0,Nc=a),hc(e,t)},o}function fm(e,t,o){o=On(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=t.value;o.payload=function(){return a(d)},o.callback=function(){hc(e,t)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){hc(e,t),typeof a!="function"&&(or===null?or=new Set([this]):or.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),o}function mm(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new O0;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(o)||(d.add(o),e=K0.bind(null,e,t,o),t.then(e,e))}function pm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hm(e,t,o,a,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=On(-1,1),t.tag=2,rr(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var F0=D.ReactCurrentOwner,Et=!1;function xt(e,t,o,a){t.child=e===null?Df(t,null,o,a):yi(t,e.child,o,a)}function gm(e,t,o,a,d){o=o.render;var m=t.ref;return xi(t,d),a=sc(e,t,o,a,m,d),o=ac(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,Fn(e,t,d)):(We&&o&&Wl(t),t.flags|=1,xt(e,t,a,d),t.child)}function ym(e,t,o,a,d){if(e===null){var m=o.type;return typeof m=="function"&&!Fc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=m,vm(e,t,m,a,d)):(e=sa(o.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(m=e.child,(e.lanes&d)===0){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(x,a)&&e.ref===t.ref)return Fn(e,t,d)}return t.flags|=1,e=cr(m,a),e.ref=t.ref,e.return=t,t.child=e}function vm(e,t,o,a,d){if(e!==null){var m=e.memoizedProps;if(xo(m,a)&&e.ref===t.ref)if(Et=!1,t.pendingProps=a=m,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,Fn(e,t,d)}return gc(e,t,o,a,d)}function xm(e,t,o){var a=t.pendingProps,d=a.children,m=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Si,Mt),Mt|=o;else{if((o&1073741824)===0)return e=m!==null?m.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(Si,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=m!==null?m.baseLanes:o,$e(Si,Mt),Mt|=a}else m!==null?(a=m.baseLanes|o,t.memoizedState=null):a=o,$e(Si,Mt),Mt|=a;return xt(e,t,d,o),t.child}function wm(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function gc(e,t,o,a,d){var m=Ct(o)?$r:mt.current;return m=mi(t,m),xi(t,d),o=sc(e,t,o,a,m,d),a=ac(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,Fn(e,t,d)):(We&&a&&Wl(t),t.flags|=1,xt(e,t,o,d),t.child)}function bm(e,t,o,a,d){if(Ct(o)){var m=!0;Is(t)}else m=!1;if(xi(t,d),t.stateNode===null)Qs(e,t),cm(t,o,a),mc(t,o,a,d),a=!0;else if(e===null){var x=t.stateNode,R=t.memoizedProps;x.props=R;var A=x.context,O=o.contextType;typeof O=="object"&&O!==null?O=qt(O):(O=Ct(o)?$r:mt.current,O=mi(t,O));var W=o.getDerivedStateFromProps,q=typeof W=="function"||typeof x.getSnapshotBeforeUpdate=="function";q||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(R!==a||A!==O)&&um(t,x,a,O),nr=!1;var H=t.memoizedState;x.state=H,Bs(t,a,x,d),A=t.memoizedState,R!==a||H!==A||St.current||nr?(typeof W=="function"&&(fc(t,o,W,a),A=t.memoizedState),(R=nr||lm(t,o,R,a,H,A,O))?(q||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),x.props=a,x.state=A,x.context=O,a=R):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{x=t.stateNode,Ff(e,t),R=t.memoizedProps,O=t.type===t.elementType?R:nn(t.type,R),x.props=O,q=t.pendingProps,H=x.context,A=o.contextType,typeof A=="object"&&A!==null?A=qt(A):(A=Ct(o)?$r:mt.current,A=mi(t,A));var ne=o.getDerivedStateFromProps;(W=typeof ne=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(R!==q||H!==A)&&um(t,x,a,A),nr=!1,H=t.memoizedState,x.state=H,Bs(t,a,x,d);var oe=t.memoizedState;R!==q||H!==oe||St.current||nr?(typeof ne=="function"&&(fc(t,o,ne,a),oe=t.memoizedState),(O=nr||lm(t,o,O,a,H,oe,A)||!1)?(W||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(a,oe,A),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(a,oe,A)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||R===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=oe),x.props=a,x.state=oe,x.context=A,a=O):(typeof x.componentDidUpdate!="function"||R===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),a=!1)}return yc(e,t,o,a,m,d)}function yc(e,t,o,a,d,m){wm(e,t);var x=(t.flags&128)!==0;if(!a&&!x)return d&&Rf(t,o,!1),Fn(e,t,m);a=t.stateNode,F0.current=t;var R=x&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&x?(t.child=yi(t,e.child,null,m),t.child=yi(t,null,R,m)):xt(e,t,R,m),t.memoizedState=a.state,d&&Rf(t,o,!0),t.child}function km(e){var t=e.stateNode;t.pendingContext?Cf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cf(e,t.context,!1),ec(e,t.containerInfo)}function Sm(e,t,o,a,d){return gi(),Yl(d),t.flags|=256,xt(e,t,o,a),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function xc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cm(e,t,o){var a=t.pendingProps,d=qe.current,m=!1,x=(t.flags&128)!==0,R;if((R=x)||(R=e!==null&&e.memoizedState===null?!1:(d&2)!==0),R?(m=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),$e(qe,d&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=a.children,e=a.fallback,m?(a=t.mode,m=t.child,x={mode:"hidden",children:x},(a&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=x):m=aa(x,a,0,null),e=Gr(e,a,o,null),m.return=t,e.return=t,m.sibling=e,t.child=m,t.child.memoizedState=xc(o),t.memoizedState=vc,e):wc(t,x));if(d=e.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return $0(e,t,x,a,R,d,o);if(m){m=a.fallback,x=t.mode,d=e.child,R=d.sibling;var A={mode:"hidden",children:a.children};return(x&1)===0&&t.child!==d?(a=t.child,a.childLanes=0,a.pendingProps=A,t.deletions=null):(a=cr(d,A),a.subtreeFlags=d.subtreeFlags&14680064),R!==null?m=cr(R,m):(m=Gr(m,x,o,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,a=m,m=t.child,x=e.child.memoizedState,x=x===null?xc(o):{baseLanes:x.baseLanes|o,cachePool:null,transitions:x.transitions},m.memoizedState=x,m.childLanes=e.childLanes&~o,t.memoizedState=vc,a}return m=e.child,e=m.sibling,a=cr(m,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function wc(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gs(e,t,o,a){return a!==null&&Yl(a),yi(t,e.child,null,o),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,o,a,d,m,x){if(o)return t.flags&256?(t.flags&=-257,a=pc(Error(i(422))),Gs(e,t,x,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(m=a.fallback,d=t.mode,a=aa({mode:"visible",children:a.children},d,0,null),m=Gr(m,d,x,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,(t.mode&1)!==0&&yi(t,e.child,null,x),t.child.memoizedState=xc(x),t.memoizedState=vc,m);if((t.mode&1)===0)return Gs(e,t,x,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var R=a.dgst;return a=R,m=Error(i(419)),a=pc(m,a,void 0),Gs(e,t,x,a)}if(R=(x&e.childLanes)!==0,Et||R){if(a=st,a!==null){switch(x&-x){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|x))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Dn(e,d),sn(a,e,d,-1))}return Oc(),a=pc(Error(i(421))),Gs(e,t,x,a)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),d._reactRetry=t,null):(e=m.treeContext,jt=Jn(d.nextSibling),It=t,We=!0,tn=null,e!==null&&(Wt[Ut++]=Mn,Wt[Ut++]=Ln,Wt[Ut++]=_r,Mn=e.id,Ln=e.overflow,_r=t),t=wc(t,a.children),t.flags|=4096,t)}function Em(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Xl(e.return,t,o)}function bc(e,t,o,a,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=a,m.tail=o,m.tailMode=d)}function Rm(e,t,o){var a=t.pendingProps,d=a.revealOrder,m=a.tail;if(xt(e,t,a.children,o),a=qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Em(e,o,t);else if(e.tag===19)Em(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if($e(qe,a),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(o=t.child,d=null;o!==null;)e=o.alternate,e!==null&&zs(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=t.child,t.child=null):(d=o.sibling,o.sibling=null),bc(t,!1,d,o,m);break;case"backwards":for(o=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&zs(e)===null){t.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}bc(t,!0,o,null,m);break;case"together":bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=cr(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=cr(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function _0(e,t,o){switch(t.tag){case 3:km(t),gi();break;case 5:Bf(t);break;case 1:Ct(t.type)&&Is(t);break;case 4:ec(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,d=t.memoizedProps.value;$e(Fs,a._currentValue),a._currentValue=d;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?($e(qe,qe.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?Cm(e,t,o):($e(qe,qe.current&1),e=Fn(e,t,o),e!==null?e.sibling:null);$e(qe,qe.current&1);break;case 19:if(a=(o&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Rm(e,t,o);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(qe,qe.current),a)break;return null;case 22:case 23:return t.lanes=0,xm(e,t,o)}return Fn(e,t,o)}var Pm,kc,Tm,Am;Pm=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},Tm=function(e,t,o,a){var d=e.memoizedProps;if(d!==a){e=t.stateNode,Hr(gn.current);var m=null;switch(o){case"input":d=An(e,d),a=An(e,a),m=[];break;case"select":d=X({},d,{value:void 0}),a=X({},a,{value:void 0}),m=[];break;case"textarea":d=Ji(e,d),a=Ji(e,a),m=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ts)}Ht(o,a);var x;o=null;for(O in d)if(!a.hasOwnProperty(O)&&d.hasOwnProperty(O)&&d[O]!=null)if(O==="style"){var R=d[O];for(x in R)R.hasOwnProperty(x)&&(o||(o={}),o[x]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(l.hasOwnProperty(O)?m||(m=[]):(m=m||[]).push(O,null));for(O in a){var A=a[O];if(R=d!=null?d[O]:void 0,a.hasOwnProperty(O)&&A!==R&&(A!=null||R!=null))if(O==="style")if(R){for(x in R)!R.hasOwnProperty(x)||A&&A.hasOwnProperty(x)||(o||(o={}),o[x]="");for(x in A)A.hasOwnProperty(x)&&R[x]!==A[x]&&(o||(o={}),o[x]=A[x])}else o||(m||(m=[]),m.push(O,o)),o=A;else O==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,R=R?R.__html:void 0,A!=null&&R!==A&&(m=m||[]).push(O,A)):O==="children"?typeof A!="string"&&typeof A!="number"||(m=m||[]).push(O,""+A):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(l.hasOwnProperty(O)?(A!=null&&O==="onScroll"&&_e("scroll",e),m||R===A||(m=[])):(m=m||[]).push(O,A))}o&&(m=m||[]).push("style",o);var O=m;(t.updateQueue=O)&&(t.flags|=4)}},Am=function(e,t,o,a){o!==a&&(t.flags|=4)};function Lo(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function B0(e,t,o){var a=t.pendingProps;switch(Ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Ct(t.type)&&Ns(),ht(t),null;case 3:return a=t.stateNode,wi(),Be(St),Be(mt),rc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tn!==null&&(Mc(tn),tn=null))),kc(e,t),ht(t),null;case 5:tc(t);var d=Hr(Ao.current);if(o=t.type,e!==null&&t.stateNode!=null)Tm(e,t,o,a,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return ht(t),null}if(e=Hr(gn.current),Ds(t)){a=t.stateNode,o=t.type;var m=t.memoizedProps;switch(a[hn]=t,a[Co]=m,e=(t.mode&1)!==0,o){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(d=0;d<bo.length;d++)_e(bo[d],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":Nr(a,m),_e("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!m.multiple},_e("invalid",a);break;case"textarea":jr(a,m),_e("invalid",a)}Ht(o,m),d=null;for(var x in m)if(m.hasOwnProperty(x)){var R=m[x];x==="children"?typeof R=="string"?a.textContent!==R&&(m.suppressHydrationWarning!==!0&&Ps(a.textContent,R,e),d=["children",R]):typeof R=="number"&&a.textContent!==""+R&&(m.suppressHydrationWarning!==!0&&Ps(a.textContent,R,e),d=["children",""+R]):l.hasOwnProperty(x)&&R!=null&&x==="onScroll"&&_e("scroll",a)}switch(o){case"input":Pn(a),ni(a,m,!0);break;case"textarea":Pn(a),Zi(a);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(a.onclick=Ts)}a=d,t.updateQueue=a,a!==null&&(t.flags|=4)}else{x=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ri(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=x.createElement(o,{is:a.is}):(e=x.createElement(o),o==="select"&&(x=e,a.multiple?x.multiple=!0:a.size&&(x.size=a.size))):e=x.createElementNS(e,o),e[hn]=t,e[Co]=a,Pm(e,t,!1,!1),t.stateNode=e;e:{switch(x=no(o,a),o){case"dialog":_e("cancel",e),_e("close",e),d=a;break;case"iframe":case"object":case"embed":_e("load",e),d=a;break;case"video":case"audio":for(d=0;d<bo.length;d++)_e(bo[d],e);d=a;break;case"source":_e("error",e),d=a;break;case"img":case"image":case"link":_e("error",e),_e("load",e),d=a;break;case"details":_e("toggle",e),d=a;break;case"input":Nr(e,a),d=An(e,a),_e("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=X({},a,{value:void 0}),_e("invalid",e);break;case"textarea":jr(e,a),d=Ji(e,a),_e("invalid",e);break;default:d=a}Ht(o,d),R=d;for(m in R)if(R.hasOwnProperty(m)){var A=R[m];m==="style"?os(e,A):m==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Nn(e,A)):m==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&qn(e,A):typeof A=="number"&&qn(e,""+A):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?A!=null&&m==="onScroll"&&_e("scroll",e):A!=null&&j(e,m,A,x))}switch(o){case"input":Pn(e),ni(e,a,!1);break;case"textarea":Pn(e),Zi(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ke(a.value));break;case"select":e.multiple=!!a.multiple,m=a.value,m!=null?Un(e,!!a.multiple,m,!1):a.defaultValue!=null&&Un(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ts)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)Am(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(o=Hr(Ao.current),Hr(gn.current),Ds(t)){if(a=t.stateNode,o=t.memoizedProps,a[hn]=t,(m=a.nodeValue!==o)&&(e=It,e!==null))switch(e.tag){case 3:Ps(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(a.nodeValue,o,(e.mode&1)!==0)}m&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[hn]=t,t.stateNode=a}return ht(t),null;case 13:if(Be(qe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&jt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jf(),gi(),t.flags|=98560,m=!1;else if(m=Ds(t),a!==null&&a.dehydrated!==null){if(e===null){if(!m)throw Error(i(318));if(m=t.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[hn]=t}else gi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),m=!1}else tn!==null&&(Mc(tn),tn=null),m=!0;if(!m)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(qe.current&1)!==0?rt===0&&(rt=3):Oc())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return wi(),kc(e,t),e===null&&ko(t.stateNode.containerInfo),ht(t),null;case 10:return Kl(t.type._context),ht(t),null;case 17:return Ct(t.type)&&Ns(),ht(t),null;case 19:if(Be(qe),m=t.memoizedState,m===null)return ht(t),null;if(a=(t.flags&128)!==0,x=m.rendering,x===null)if(a)Lo(m,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=zs(e),x!==null){for(t.flags|=128,Lo(m,!1),a=x.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)m=o,e=a,m.flags&=14680066,x=m.alternate,x===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=x.childLanes,m.lanes=x.lanes,m.child=x.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=x.memoizedProps,m.memoizedState=x.memoizedState,m.updateQueue=x.updateQueue,m.type=x.type,e=x.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return $e(qe,qe.current&1|2),t.child}e=e.sibling}m.tail!==null&&Xe()>Ci&&(t.flags|=128,a=!0,Lo(m,!1),t.lanes=4194304)}else{if(!a)if(e=zs(x),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!x.alternate&&!We)return ht(t),null}else 2*Xe()-m.renderingStartTime>Ci&&o!==1073741824&&(t.flags|=128,a=!0,Lo(m,!1),t.lanes=4194304);m.isBackwards?(x.sibling=t.child,t.child=x):(o=m.last,o!==null?o.sibling=x:t.child=x,m.last=x)}return m.tail!==null?(t=m.tail,m.rendering=t,m.tail=t.sibling,m.renderingStartTime=Xe(),t.sibling=null,o=qe.current,$e(qe,a?o&1|2:o&1),t):(ht(t),null);case 22:case 23:return Dc(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Mt&1073741824)!==0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function z0(e,t){switch(Ul(t),t.tag){case 1:return Ct(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),Be(St),Be(mt),rc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tc(t),null;case 13:if(Be(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(qe),null;case 4:return wi(),null;case 10:return Kl(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var Ks=!1,gt=!1,H0=typeof WeakSet=="function"?WeakSet:Set,re=null;function ki(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ge(e,t,a)}else o.current=null}function Sc(e,t,o){try{o()}catch(a){Ge(e,t,a)}}var Nm=!1;function W0(e,t){if(Dl=gs,e=lf(),Pl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,m=a.focusNode;a=a.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,R=-1,A=-1,O=0,W=0,q=e,H=null;t:for(;;){for(var ne;q!==o||d!==0&&q.nodeType!==3||(R=x+d),q!==m||a!==0&&q.nodeType!==3||(A=x+a),q.nodeType===3&&(x+=q.nodeValue.length),(ne=q.firstChild)!==null;)H=q,q=ne;for(;;){if(q===e)break t;if(H===o&&++O===d&&(R=x),H===m&&++W===a&&(A=x),(ne=q.nextSibling)!==null)break;q=H,H=q.parentNode}q=ne}o=R===-1||A===-1?null:{start:R,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ol={focusedElem:e,selectionRange:o},gs=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var oe=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var se=oe.memoizedProps,Je=oe.memoizedState,M=t.stateNode,N=M.getSnapshotBeforeUpdate(t.elementType===t.type?se:nn(t.type,se),Je);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(K){Ge(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return oe=Nm,Nm=!1,oe}function Do(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var m=d.destroy;d.destroy=void 0,m!==void 0&&Sc(t,o,m)}d=d.next}while(d!==a)}}function Xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function Cc(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[Co],delete t[Bl],delete t[E0],delete t[R0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function Mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Ts));else if(a!==4&&(e=e.child,e!==null))for(Ec(e,t,o),e=e.sibling;e!==null;)Ec(e,t,o),e=e.sibling}function Rc(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Rc(e,t,o),e=e.sibling;e!==null;)Rc(e,t,o),e=e.sibling}var ut=null,rn=!1;function ir(e,t,o){for(o=o.child;o!==null;)Lm(e,t,o),o=o.sibling}function Lm(e,t,o){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(us,o)}catch{}switch(o.tag){case 5:gt||ki(o,t);case 6:var a=ut,d=rn;ut=null,ir(e,t,o),ut=a,rn=d,ut!==null&&(rn?(e=ut,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):ut.removeChild(o.stateNode));break;case 18:ut!==null&&(rn?(e=ut,o=o.stateNode,e.nodeType===8?_l(e.parentNode,o):e.nodeType===1&&_l(e,o),mo(e)):_l(ut,o.stateNode));break;case 4:a=ut,d=rn,ut=o.stateNode.containerInfo,rn=!0,ir(e,t,o),ut=a,rn=d;break;case 0:case 11:case 14:case 15:if(!gt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var m=d,x=m.destroy;m=m.tag,x!==void 0&&((m&2)!==0||(m&4)!==0)&&Sc(o,t,x),d=d.next}while(d!==a)}ir(e,t,o);break;case 1:if(!gt&&(ki(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(R){Ge(o,t,R)}ir(e,t,o);break;case 21:ir(e,t,o);break;case 22:o.mode&1?(gt=(a=gt)||o.memoizedState!==null,ir(e,t,o),gt=a):ir(e,t,o);break;default:ir(e,t,o)}}function Dm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new H0),t.forEach(function(a){var d=J0.bind(null,e,a);o.has(a)||(o.add(a),a.then(d,d))})}}function on(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var m=e,x=t,R=x;e:for(;R!==null;){switch(R.tag){case 5:ut=R.stateNode,rn=!1;break e;case 3:ut=R.stateNode.containerInfo,rn=!0;break e;case 4:ut=R.stateNode.containerInfo,rn=!0;break e}R=R.return}if(ut===null)throw Error(i(160));Lm(m,x,d),ut=null,rn=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(O){Ge(d,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}function Om(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),vn(e),a&4){try{Do(3,e,e.return),Xs(3,e)}catch(se){Ge(e,e.return,se)}try{Do(5,e,e.return)}catch(se){Ge(e,e.return,se)}}break;case 1:on(t,e),vn(e),a&512&&o!==null&&ki(o,o.return);break;case 5:if(on(t,e),vn(e),a&512&&o!==null&&ki(o,o.return),e.flags&32){var d=e.stateNode;try{qn(d,"")}catch(se){Ge(e,e.return,se)}}if(a&4&&(d=e.stateNode,d!=null)){var m=e.memoizedProps,x=o!==null?o.memoizedProps:m,R=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{R==="input"&&m.type==="radio"&&m.name!=null&&Jt(d,m),no(R,x);var O=no(R,m);for(x=0;x<A.length;x+=2){var W=A[x],q=A[x+1];W==="style"?os(d,q):W==="dangerouslySetInnerHTML"?Nn(d,q):W==="children"?qn(d,q):j(d,W,q,O)}switch(R){case"input":Ir(d,m);break;case"textarea":rs(d,m);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?Un(d,!!m.multiple,ne,!1):H!==!!m.multiple&&(m.defaultValue!=null?Un(d,!!m.multiple,m.defaultValue,!0):Un(d,!!m.multiple,m.multiple?[]:"",!1))}d[Co]=m}catch(se){Ge(e,e.return,se)}}break;case 6:if(on(t,e),vn(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,m=e.memoizedProps;try{d.nodeValue=m}catch(se){Ge(e,e.return,se)}}break;case 3:if(on(t,e),vn(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(se){Ge(e,e.return,se)}break;case 4:on(t,e),vn(e);break;case 13:on(t,e),vn(e),d=e.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ac=Xe())),a&4&&Dm(e);break;case 22:if(W=o!==null&&o.memoizedState!==null,e.mode&1?(gt=(O=gt)||W,on(t,e),gt=O):on(t,e),vn(e),a&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!W&&(e.mode&1)!==0)for(re=e,W=e.child;W!==null;){for(q=re=W;re!==null;){switch(H=re,ne=H.child,H.tag){case 0:case 11:case 14:case 15:Do(4,H,H.return);break;case 1:ki(H,H.return);var oe=H.stateNode;if(typeof oe.componentWillUnmount=="function"){a=H,o=H.return;try{t=a,oe.props=t.memoizedProps,oe.state=t.memoizedState,oe.componentWillUnmount()}catch(se){Ge(a,o,se)}}break;case 5:ki(H,H.return);break;case 22:if(H.memoizedState!==null){_m(q);continue}}ne!==null?(ne.return=H,re=ne):_m(q)}W=W.sibling}e:for(W=null,q=e;;){if(q.tag===5){if(W===null){W=q;try{d=q.stateNode,O?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(R=q.stateNode,A=q.memoizedProps.style,x=A!=null&&A.hasOwnProperty("display")?A.display:null,R.style.display=eo("display",x))}catch(se){Ge(e,e.return,se)}}}else if(q.tag===6){if(W===null)try{q.stateNode.nodeValue=O?"":q.memoizedProps}catch(se){Ge(e,e.return,se)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;W===q&&(W=null),q=q.return}W===q&&(W=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:on(t,e),vn(e),a&4&&Dm(e);break;case 21:break;default:on(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(jm(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(qn(d,""),a.flags&=-33);var m=Mm(e);Rc(e,m,d);break;case 3:case 4:var x=a.stateNode.containerInfo,R=Mm(e);Ec(e,R,x);break;default:throw Error(i(161))}}catch(A){Ge(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U0(e,t,o){re=e,Fm(e)}function Fm(e,t,o){for(var a=(e.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&a){var x=d.memoizedState!==null||Ks;if(!x){var R=d.alternate,A=R!==null&&R.memoizedState!==null||gt;R=Ks;var O=gt;if(Ks=x,(gt=A)&&!O)for(re=d;re!==null;)x=re,A=x.child,x.tag===22&&x.memoizedState!==null?Bm(d):A!==null?(A.return=x,re=A):Bm(d);for(;m!==null;)re=m,Fm(m),m=m.sibling;re=d,Ks=R,gt=O}$m(e)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,re=m):$m(e)}}function $m(e){for(;re!==null;){var t=re;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:gt||Xs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!gt)if(o===null)a.componentDidMount();else{var d=t.elementType===t.type?o.memoizedProps:nn(t.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var m=t.updateQueue;m!==null&&_f(t,m,a);break;case 3:var x=t.updateQueue;if(x!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}_f(t,x,o)}break;case 5:var R=t.stateNode;if(o===null&&t.flags&4){o=R;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var W=O.memoizedState;if(W!==null){var q=W.dehydrated;q!==null&&mo(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}gt||t.flags&512&&Cc(t)}catch(H){Ge(t,t.return,H)}}if(t===e){re=null;break}if(o=t.sibling,o!==null){o.return=t.return,re=o;break}re=t.return}}function _m(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}function Bm(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Xs(4,t)}catch(A){Ge(t,o,A)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var d=t.return;try{a.componentDidMount()}catch(A){Ge(t,d,A)}}var m=t.return;try{Cc(t)}catch(A){Ge(t,m,A)}break;case 5:var x=t.return;try{Cc(t)}catch(A){Ge(t,x,A)}}}catch(A){Ge(t,t.return,A)}if(t===e){re=null;break}var R=t.sibling;if(R!==null){R.return=t.return,re=R;break}re=t.return}}var q0=Math.ceil,Js=D.ReactCurrentDispatcher,Pc=D.ReactCurrentOwner,Yt=D.ReactCurrentBatchConfig,Ne=0,st=null,et=null,dt=0,Mt=0,Si=Zn(0),rt=0,Oo=null,Ur=0,Zs=0,Tc=0,Fo=null,Rt=null,Ac=0,Ci=1/0,$n=null,ea=!1,Nc=null,or=null,ta=!1,sr=null,na=0,$o=0,Ic=null,ra=-1,ia=0;function wt(){return(Ne&6)!==0?Xe():ra!==-1?ra:ra=Xe()}function ar(e){return(e.mode&1)===0?1:(Ne&2)!==0&&dt!==0?dt&-dt:T0.transition!==null?(ia===0&&(ia=jd()),ia):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:zd(e.type)),e)}function sn(e,t,o,a){if(50<$o)throw $o=0,Ic=null,Error(i(185));ao(e,o,a),((Ne&2)===0||e!==st)&&(e===st&&((Ne&2)===0&&(Zs|=o),rt===4&&lr(e,dt)),Pt(e,a),o===1&&Ne===0&&(t.mode&1)===0&&(Ci=Xe()+500,js&&tr()))}function Pt(e,t){var o=e.callbackNode;Tv(e,t);var a=ms(e,e===st?dt:0);if(a===0)o!==null&&Ad(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&Ad(o),t===1)e.tag===0?P0(Hm.bind(null,e)):Pf(Hm.bind(null,e)),S0(function(){(Ne&6)===0&&tr()}),o=null;else{switch(Md(a)){case 1:o=ul;break;case 4:o=Nd;break;case 16:o=cs;break;case 536870912:o=Id;break;default:o=cs}o=Km(o,zm.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function zm(e,t){if(ra=-1,ia=0,(Ne&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Ei()&&e.callbackNode!==o)return null;var a=ms(e,e===st?dt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=oa(e,a);else{t=a;var d=Ne;Ne|=2;var m=Um();(st!==e||dt!==t)&&($n=null,Ci=Xe()+500,Vr(e,t));do try{G0();break}catch(R){Wm(e,R)}while(!0);Ql(),Js.current=m,Ne=d,et!==null?t=0:(st=null,dt=0,t=rt)}if(t!==0){if(t===2&&(d=dl(e),d!==0&&(a=d,t=jc(e,d))),t===1)throw o=Oo,Vr(e,0),lr(e,a),Pt(e,Xe()),o;if(t===6)lr(e,a);else{if(d=e.current.alternate,(a&30)===0&&!V0(d)&&(t=oa(e,a),t===2&&(m=dl(e),m!==0&&(a=m,t=jc(e,m))),t===1))throw o=Oo,Vr(e,0),lr(e,a),Pt(e,Xe()),o;switch(e.finishedWork=d,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Yr(e,Rt,$n);break;case 3:if(lr(e,a),(a&130023424)===a&&(t=Ac+500-Xe(),10<t)){if(ms(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){wt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=$l(Yr.bind(null,e,Rt,$n),t);break}Yr(e,Rt,$n);break;case 4:if(lr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,d=-1;0<a;){var x=31-Zt(a);m=1<<x,x=t[x],x>d&&(d=x),a&=~m}if(a=d,a=Xe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*q0(a/1960))-a,10<a){e.timeoutHandle=$l(Yr.bind(null,e,Rt,$n),a);break}Yr(e,Rt,$n);break;case 5:Yr(e,Rt,$n);break;default:throw Error(i(329))}}}return Pt(e,Xe()),e.callbackNode===o?zm.bind(null,e):null}function jc(e,t){var o=Fo;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=oa(e,t),e!==2&&(t=Rt,Rt=o,t!==null&&Mc(t)),e}function Mc(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function V0(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],m=d.getSnapshot;d=d.value;try{if(!en(m(),d))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t){for(t&=~Tc,t&=~Zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Zt(t),a=1<<o;e[o]=-1,t&=~a}}function Hm(e){if((Ne&6)!==0)throw Error(i(327));Ei();var t=ms(e,0);if((t&1)===0)return Pt(e,Xe()),null;var o=oa(e,t);if(e.tag!==0&&o===2){var a=dl(e);a!==0&&(t=a,o=jc(e,a))}if(o===1)throw o=Oo,Vr(e,0),lr(e,t),Pt(e,Xe()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yr(e,Rt,$n),Pt(e,Xe()),null}function Lc(e,t){var o=Ne;Ne|=1;try{return e(t)}finally{Ne=o,Ne===0&&(Ci=Xe()+500,js&&tr())}}function qr(e){sr!==null&&sr.tag===0&&(Ne&6)===0&&Ei();var t=Ne;Ne|=1;var o=Yt.transition,a=Fe;try{if(Yt.transition=null,Fe=1,e)return e()}finally{Fe=a,Yt.transition=o,Ne=t,(Ne&6)===0&&tr()}}function Dc(){Mt=Si.current,Be(Si)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,k0(o)),et!==null)for(o=et.return;o!==null;){var a=o;switch(Ul(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ns();break;case 3:wi(),Be(St),Be(mt),rc();break;case 5:tc(a);break;case 4:wi();break;case 13:Be(qe);break;case 19:Be(qe);break;case 10:Kl(a.type._context);break;case 22:case 23:Dc()}o=o.return}if(st=e,et=e=cr(e.current,null),dt=Mt=t,rt=0,Oo=null,Tc=Zs=Ur=0,Rt=Fo=null,zr!==null){for(t=0;t<zr.length;t++)if(o=zr[t],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,m=o.pending;if(m!==null){var x=m.next;m.next=d,a.next=x}o.pending=a}zr=null}return e}function Wm(e,t){do{var o=et;try{if(Ql(),Hs.current=Vs,Ws){for(var a=Ve.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Ws=!1}if(Wr=0,ot=nt=Ve=null,No=!1,Io=0,Pc.current=null,o===null||o.return===null){rt=1,Oo=t,et=null;break}e:{var m=e,x=o.return,R=o,A=t;if(t=dt,R.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var O=A,W=R,q=W.tag;if((W.mode&1)===0&&(q===0||q===11||q===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var ne=pm(x);if(ne!==null){ne.flags&=-257,hm(ne,x,R,m,t),ne.mode&1&&mm(m,O,t),t=ne,A=O;var oe=t.updateQueue;if(oe===null){var se=new Set;se.add(A),t.updateQueue=se}else oe.add(A);break e}else{if((t&1)===0){mm(m,O,t),Oc();break e}A=Error(i(426))}}else if(We&&R.mode&1){var Je=pm(x);if(Je!==null){(Je.flags&65536)===0&&(Je.flags|=256),hm(Je,x,R,m,t),Yl(bi(A,R));break e}}m=A=bi(A,R),rt!==4&&(rt=2),Fo===null?Fo=[m]:Fo.push(m),m=x;do{switch(m.tag){case 3:m.flags|=65536,t&=-t,m.lanes|=t;var M=dm(m,A,t);$f(m,M);break e;case 1:R=A;var N=m.type,L=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(or===null||!or.has(L)))){m.flags|=65536,t&=-t,m.lanes|=t;var K=fm(m,R,t);$f(m,K);break e}}m=m.return}while(m!==null)}Vm(o)}catch(ae){t=ae,et===o&&o!==null&&(et=o=o.return);continue}break}while(!0)}function Um(){var e=Js.current;return Js.current=Vs,e===null?Vs:e}function Oc(){(rt===0||rt===3||rt===2)&&(rt=4),st===null||(Ur&268435455)===0&&(Zs&268435455)===0||lr(st,dt)}function oa(e,t){var o=Ne;Ne|=2;var a=Um();(st!==e||dt!==t)&&($n=null,Vr(e,t));do try{Y0();break}catch(d){Wm(e,d)}while(!0);if(Ql(),Ne=o,Js.current=a,et!==null)throw Error(i(261));return st=null,dt=0,rt}function Y0(){for(;et!==null;)qm(et)}function G0(){for(;et!==null&&!xv();)qm(et)}function qm(e){var t=Qm(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Vm(e):et=t,Pc.current=null}function Vm(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=B0(o,t,Mt),o!==null){et=o;return}}else{if(o=z0(o,t),o!==null){o.flags&=32767,et=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,et=null;return}}if(t=t.sibling,t!==null){et=t;return}et=t=e}while(t!==null);rt===0&&(rt=5)}function Yr(e,t,o){var a=Fe,d=Yt.transition;try{Yt.transition=null,Fe=1,Q0(e,t,o,a)}finally{Yt.transition=d,Fe=a}return null}function Q0(e,t,o,a){do Ei();while(sr!==null);if((Ne&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var m=o.lanes|o.childLanes;if(Av(e,m),e===st&&(et=st=null,dt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ta||(ta=!0,Km(cs,function(){return Ei(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Yt.transition,Yt.transition=null;var x=Fe;Fe=1;var R=Ne;Ne|=4,Pc.current=null,W0(e,o),Om(o,e),h0(Ol),gs=!!Dl,Ol=Dl=null,e.current=o,U0(o),wv(),Ne=R,Fe=x,Yt.transition=m}else e.current=o;if(ta&&(ta=!1,sr=e,na=d),m=e.pendingLanes,m===0&&(or=null),Sv(o.stateNode),Pt(e,Xe()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)d=t[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(ea)throw ea=!1,e=Nc,Nc=null,e;return(na&1)!==0&&e.tag!==0&&Ei(),m=e.pendingLanes,(m&1)!==0?e===Ic?$o++:($o=0,Ic=e):$o=0,tr(),null}function Ei(){if(sr!==null){var e=Md(na),t=Yt.transition,o=Fe;try{if(Yt.transition=null,Fe=16>e?16:e,sr===null)var a=!1;else{if(e=sr,sr=null,na=0,(Ne&6)!==0)throw Error(i(331));var d=Ne;for(Ne|=4,re=e.current;re!==null;){var m=re,x=m.child;if((re.flags&16)!==0){var R=m.deletions;if(R!==null){for(var A=0;A<R.length;A++){var O=R[A];for(re=O;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:Do(8,W,m)}var q=W.child;if(q!==null)q.return=W,re=q;else for(;re!==null;){W=re;var H=W.sibling,ne=W.return;if(Im(W),W===O){re=null;break}if(H!==null){H.return=ne,re=H;break}re=ne}}}var oe=m.alternate;if(oe!==null){var se=oe.child;if(se!==null){oe.child=null;do{var Je=se.sibling;se.sibling=null,se=Je}while(se!==null)}}re=m}}if((m.subtreeFlags&2064)!==0&&x!==null)x.return=m,re=x;else e:for(;re!==null;){if(m=re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,re=M;break e}re=m.return}}var N=e.current;for(re=N;re!==null;){x=re;var L=x.child;if((x.subtreeFlags&2064)!==0&&L!==null)L.return=x,re=L;else e:for(x=N;re!==null;){if(R=re,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Xs(9,R)}}catch(ae){Ge(R,R.return,ae)}if(R===x){re=null;break e}var K=R.sibling;if(K!==null){K.return=R.return,re=K;break e}re=R.return}}if(Ne=d,tr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(us,e)}catch{}a=!0}return a}finally{Fe=o,Yt.transition=t}}return!1}function Ym(e,t,o){t=bi(o,t),t=dm(e,t,1),e=rr(e,t,1),t=wt(),e!==null&&(ao(e,1,t),Pt(e,t))}function Ge(e,t,o){if(e.tag===3)Ym(e,e,o);else for(;t!==null;){if(t.tag===3){Ym(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(or===null||!or.has(a))){e=bi(o,e),e=fm(t,e,1),t=rr(t,e,1),e=wt(),t!==null&&(ao(t,1,e),Pt(t,e));break}}t=t.return}}function K0(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&o,st===e&&(dt&o)===o&&(rt===4||rt===3&&(dt&130023424)===dt&&500>Xe()-Ac?Vr(e,0):Tc|=o),Pt(e,t)}function Gm(e,t){t===0&&((e.mode&1)===0?t=1:(t=fs,fs<<=1,(fs&130023424)===0&&(fs=4194304)));var o=wt();e=Dn(e,t),e!==null&&(ao(e,t,o),Pt(e,o))}function X0(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),Gm(e,o)}function J0(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Gm(e,o)}var Qm;Qm=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)Et=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return Et=!1,_0(e,t,o);Et=(e.flags&131072)!==0}else Et=!1,We&&(t.flags&1048576)!==0&&Tf(t,Ls,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Qs(e,t),e=t.pendingProps;var d=mi(t,mt.current);xi(t,o),d=sc(null,t,a,e,d,o);var m=ac();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(a)?(m=!0,Is(t)):m=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Zl(t),d.updater=Ys,t.stateNode=d,d._reactInternals=t,mc(t,a,e,o),t=yc(null,t,a,!0,m,o)):(t.tag=0,We&&m&&Wl(t),xt(null,t,d,o),t=t.child),t;case 16:a=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,d=a._init,a=d(a._payload),t.type=a,d=t.tag=ex(a),e=nn(a,e),d){case 0:t=gc(null,t,a,e,o);break e;case 1:t=bm(null,t,a,e,o);break e;case 11:t=gm(null,t,a,e,o);break e;case 14:t=ym(null,t,a,nn(a.type,e),o);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:nn(a,d),gc(e,t,a,d,o);case 1:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:nn(a,d),bm(e,t,a,d,o);case 3:e:{if(km(t),e===null)throw Error(i(387));a=t.pendingProps,m=t.memoizedState,d=m.element,Ff(e,t),Bs(t,a,null,o);var x=t.memoizedState;if(a=x.element,m.isDehydrated)if(m={element:a,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=m,t.memoizedState=m,t.flags&256){d=bi(Error(i(423)),t),t=Sm(e,t,a,o,d);break e}else if(a!==d){d=bi(Error(i(424)),t),t=Sm(e,t,a,o,d);break e}else for(jt=Jn(t.stateNode.containerInfo.firstChild),It=t,We=!0,tn=null,o=Df(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gi(),a===d){t=Fn(e,t,o);break e}xt(e,t,a,o)}t=t.child}return t;case 5:return Bf(t),e===null&&Vl(t),a=t.type,d=t.pendingProps,m=e!==null?e.memoizedProps:null,x=d.children,Fl(a,d)?x=null:m!==null&&Fl(a,m)&&(t.flags|=32),wm(e,t),xt(e,t,x,o),t.child;case 6:return e===null&&Vl(t),null;case 13:return Cm(e,t,o);case 4:return ec(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=yi(t,null,a,o):xt(e,t,a,o),t.child;case 11:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:nn(a,d),gm(e,t,a,d,o);case 7:return xt(e,t,t.pendingProps,o),t.child;case 8:return xt(e,t,t.pendingProps.children,o),t.child;case 12:return xt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,d=t.pendingProps,m=t.memoizedProps,x=d.value,$e(Fs,a._currentValue),a._currentValue=x,m!==null)if(en(m.value,x)){if(m.children===d.children&&!St.current){t=Fn(e,t,o);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var R=m.dependencies;if(R!==null){x=m.child;for(var A=R.firstContext;A!==null;){if(A.context===a){if(m.tag===1){A=On(-1,o&-o),A.tag=2;var O=m.updateQueue;if(O!==null){O=O.shared;var W=O.pending;W===null?A.next=A:(A.next=W.next,W.next=A),O.pending=A}}m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),Xl(m.return,o,t),R.lanes|=o;break}A=A.next}}else if(m.tag===10)x=m.type===t.type?null:m.child;else if(m.tag===18){if(x=m.return,x===null)throw Error(i(341));x.lanes|=o,R=x.alternate,R!==null&&(R.lanes|=o),Xl(x,o,t),x=m.sibling}else x=m.child;if(x!==null)x.return=m;else for(x=m;x!==null;){if(x===t){x=null;break}if(m=x.sibling,m!==null){m.return=x.return,x=m;break}x=x.return}m=x}xt(e,t,d.children,o),t=t.child}return t;case 9:return d=t.type,a=t.pendingProps.children,xi(t,o),d=qt(d),a=a(d),t.flags|=1,xt(e,t,a,o),t.child;case 14:return a=t.type,d=nn(a,t.pendingProps),d=nn(a.type,d),ym(e,t,a,d,o);case 15:return vm(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:nn(a,d),Qs(e,t),t.tag=1,Ct(a)?(e=!0,Is(t)):e=!1,xi(t,o),cm(t,a,d),mc(t,a,d,o),yc(null,t,a,!0,e,o);case 19:return Rm(e,t,o);case 22:return xm(e,t,o)}throw Error(i(156,t.tag))};function Km(e,t){return Td(e,t)}function Z0(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,o,a){return new Z0(e,t,o,a)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ex(e){if(typeof e=="function")return Fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===ge)return 14}return 2}function cr(e,t){var o=e.alternate;return o===null?(o=Gt(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function sa(e,t,o,a,d,m){var x=2;if(a=e,typeof e=="function")Fc(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case z:return Gr(o.children,d,m,t);case G:x=8,d|=8;break;case V:return e=Gt(12,o,t,d|2),e.elementType=V,e.lanes=m,e;case pe:return e=Gt(13,o,t,d),e.elementType=pe,e.lanes=m,e;case J:return e=Gt(19,o,t,d),e.elementType=J,e.lanes=m,e;case ce:return aa(o,d,m,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:x=10;break e;case ie:x=9;break e;case ee:x=11;break e;case ge:x=14;break e;case le:x=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Gt(x,o,t,d),t.elementType=e,t.type=a,t.lanes=m,t}function Gr(e,t,o,a){return e=Gt(7,e,a,t),e.lanes=o,e}function aa(e,t,o,a){return e=Gt(22,e,a,t),e.elementType=ce,e.lanes=o,e.stateNode={isHidden:!1},e}function $c(e,t,o){return e=Gt(6,e,null,t),e.lanes=o,e}function _c(e,t,o){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tx(e,t,o,a,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bc(e,t,o,a,d,m,x,R,A){return e=new tx(e,t,o,R,A),t===1?(t=1,m===!0&&(t|=8)):t=0,m=Gt(3,null,null,t),e.current=m,m.stateNode=e,m.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(m),e}function nx(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function Xm(e){if(!e)return er;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Ct(o))return Ef(e,o,t)}return t}function Jm(e,t,o,a,d,m,x,R,A){return e=Bc(o,a,!0,e,d,m,x,R,A),e.context=Xm(null),o=e.current,a=wt(),d=ar(o),m=On(a,d),m.callback=t??null,rr(o,m,d),e.current.lanes=d,ao(e,d,a),Pt(e,a),e}function la(e,t,o,a){var d=t.current,m=wt(),x=ar(d);return o=Xm(o),t.context===null?t.context=o:t.pendingContext=o,t=On(m,x),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=rr(d,t,x),e!==null&&(sn(e,d,x,m),_s(e,d,x)),x}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function zc(e,t){Zm(e,t),(e=e.alternate)&&Zm(e,t)}function rx(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ua.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));la(e,t,null,null)},ua.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){la(null,e,null,null)}),t[In]=null}};function ua(e){this._internalRoot=e}ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Qn.length&&t!==0&&t<Qn[o].priority;o++);Qn.splice(o,0,e),o===0&&_d(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tp(){}function ix(e,t,o,a,d){if(d){if(typeof a=="function"){var m=a;a=function(){var O=ca(x);m.call(O)}}var x=Jm(t,a,e,0,null,!1,!1,"",tp);return e._reactRootContainer=x,e[In]=x.current,ko(e.nodeType===8?e.parentNode:e),qr(),x}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var R=a;a=function(){var O=ca(A);R.call(O)}}var A=Bc(e,0,!1,null,null,!1,!1,"",tp);return e._reactRootContainer=A,e[In]=A.current,ko(e.nodeType===8?e.parentNode:e),qr(function(){la(t,A,o,a)}),A}function fa(e,t,o,a,d){var m=o._reactRootContainer;if(m){var x=m;if(typeof d=="function"){var R=d;d=function(){var A=ca(x);R.call(A)}}la(t,x,e,d)}else x=ix(o,t,e,d,a);return ca(x)}Ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=so(t.pendingLanes);o!==0&&(ml(t,o|1),Pt(t,Xe()),(Ne&6)===0&&(Ci=Xe()+500,tr()))}break;case 13:qr(function(){var a=Dn(e,1);if(a!==null){var d=wt();sn(a,e,1,d)}}),zc(e,1)}},pl=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var o=wt();sn(t,e,134217728,o)}zc(e,134217728)}},Dd=function(e){if(e.tag===13){var t=ar(e),o=Dn(e,t);if(o!==null){var a=wt();sn(o,e,t,a)}zc(e,t)}},Od=function(){return Fe},Fd=function(e,t){var o=Fe;try{return Fe=e,t()}finally{Fe=o}},Me=function(e,t,o){switch(t){case"input":if(Ir(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var d=As(a);if(!d)throw Error(i(90));Tn(a),Ir(a,d)}}}break;case"textarea":rs(e,o);break;case"select":t=o.value,t!=null&&Un(e,!!o.multiple,t,!1)}},bd=Lc,kd=qr;var ox={usingClientEntryPoint:!1,Events:[Eo,di,As,ss,wd,Lc]},_o={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{us=ma.inject(sx),pn=ma}catch{}}return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox,Tt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(i(200));return nx(e,t,null,o)},Tt.createRoot=function(e,t){if(!Wc(e))throw Error(i(299));var o=!1,a="",d=ep;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Bc(e,1,!1,null,null,o,!1,a,d),e[In]=t.current,ko(e.nodeType===8?e.parentNode:e),new Hc(t)},Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e},Tt.flushSync=function(e){return qr(e)},Tt.hydrate=function(e,t,o){if(!da(t))throw Error(i(200));return fa(null,e,t,!0,o)},Tt.hydrateRoot=function(e,t,o){if(!Wc(e))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,d=!1,m="",x=ep;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(x=o.onRecoverableError)),t=Jm(t,null,e,1,o??null,d,!1,m,x),e[In]=t.current,ko(e),a)for(e=0;e<a.length;e++)o=a[e],d=o._getVersion,d=d(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,d]:t.mutableSourceEagerHydrationData.push(o,d);return new ua(t)},Tt.render=function(e,t,o){if(!da(t))throw Error(i(200));return fa(null,e,t,!1,o)},Tt.unmountComponentAtNode=function(e){if(!da(e))throw Error(i(40));return e._reactRootContainer?(qr(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1},Tt.unstable_batchedUpdates=Lc,Tt.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!da(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return fa(e,t,o,!1,a)},Tt.version="18.3.1-next-f1338f8080-20240426",Tt}var up;function vh(){if(up)return Yc.exports;up=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Yc.exports=px(),Yc.exports}var dp;function hx(){if(dp)return ha;dp=1;var n=vh();return ha.createRoot=n.createRoot,ha.hydrateRoot=n.hydrateRoot,ha}var gx=hx(),y=$u();const Z=yh(y),xh=lx({__proto__:null,default:Z},[y]),yx=1,vx=1e6;let Kc=0;function xx(){return Kc=(Kc+1)%Number.MAX_SAFE_INTEGER,Kc.toString()}const Xc=new Map,fp=n=>{if(Xc.has(n))return;const r=setTimeout(()=>{Xc.delete(n),Wo({type:"REMOVE_TOAST",toastId:n})},vx);Xc.set(n,r)},wx=(n,r)=>{switch(r.type){case"ADD_TOAST":return{...n,toasts:[r.toast,...n.toasts].slice(0,yx)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(i=>i.id===r.toast.id?{...i,...r.toast}:i)};case"DISMISS_TOAST":{const{toastId:i}=r;return i?fp(i):n.toasts.forEach(s=>{fp(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===i||i===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return r.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(i=>i.id!==r.toastId)}}},Pa=[];let Ta={toasts:[]};function Wo(n){Ta=wx(Ta,n),Pa.forEach(r=>{r(Ta)})}function bx({...n}){const r=xx(),i=l=>Wo({type:"UPDATE_TOAST",toast:{...l,id:r}}),s=()=>Wo({type:"DISMISS_TOAST",toastId:r});return Wo({type:"ADD_TOAST",toast:{...n,id:r,open:!0,onOpenChange:l=>{l||s()}}}),{id:r,dismiss:s,update:i}}function kx(){const[n,r]=y.useState(Ta);return y.useEffect(()=>(Pa.push(r),()=>{const i=Pa.indexOf(r);i>-1&&Pa.splice(i,1)}),[n]),{...n,toast:bx,dismiss:i=>Wo({type:"DISMISS_TOAST",toastId:i})}}var Zo=vh();const _u=yh(Zo);function Pe(n,r,{checkForDefaultPrevented:i=!0}={}){return function(l){if(n==null||n(l),i===!1||!l.defaultPrevented)return r==null?void 0:r(l)}}function Sx(n,r){typeof n=="function"?n(r):n!=null&&(n.current=r)}function wh(...n){return r=>n.forEach(i=>Sx(i,r))}function He(...n){return y.useCallback(wh(...n),n)}function es(n,r=[]){let i=[];function s(u,f){const p=y.createContext(f),h=i.length;i=[...i,f];function g(b){const{scope:v,children:C,...E}=b,k=(v==null?void 0:v[n][h])||p,S=y.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:S,children:C})}function w(b,v){const C=(v==null?void 0:v[n][h])||p,E=y.useContext(C);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return g.displayName=u+"Provider",[g,w]}const l=()=>{const u=i.map(f=>y.createContext(f));return function(p){const h=(p==null?void 0:p[n])||u;return y.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return l.scopeName=n,[s,Cx(l,...r)]}function Cx(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((p,{useScope:h,scopeName:g})=>{const b=h(u)[`__scope${g}`];return{...p,...b}},{});return y.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var zi=y.forwardRef((n,r)=>{const{children:i,...s}=n,l=y.Children.toArray(i),u=l.find(Ex);if(u){const f=u.props.children,p=l.map(h=>h===u?y.Children.count(f)>1?y.Children.only(null):y.isValidElement(f)?f.props.children:null:h);return c.jsx(mu,{...s,ref:r,children:y.isValidElement(f)?y.cloneElement(f,void 0,p):null})}return c.jsx(mu,{...s,ref:r,children:i})});zi.displayName="Slot";var mu=y.forwardRef((n,r)=>{const{children:i,...s}=n;if(y.isValidElement(i)){const l=Px(i);return y.cloneElement(i,{...Rx(s,i.props),ref:r?wh(r,l):l})}return y.Children.count(i)>1?y.Children.only(null):null});mu.displayName="SlotClone";var bh=({children:n})=>c.jsx(c.Fragment,{children:n});function Ex(n){return y.isValidElement(n)&&n.type===bh}function Rx(n,r){const i={...r};for(const s in r){const l=n[s],u=r[s];/^on[A-Z]/.test(s)?l&&u?i[s]=(...p)=>{u(...p),l(...p)}:l&&(i[s]=l):s==="style"?i[s]={...l,...u}:s==="className"&&(i[s]=[l,u].filter(Boolean).join(" "))}return{...n,...i}}function Px(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function Tx(n){const r=n+"CollectionProvider",[i,s]=es(r),[l,u]=i(r,{collectionRef:{current:null},itemMap:new Map}),f=C=>{const{scope:E,children:k}=C,S=Z.useRef(null),T=Z.useRef(new Map).current;return c.jsx(l,{scope:E,itemMap:T,collectionRef:S,children:k})};f.displayName=r;const p=n+"CollectionSlot",h=Z.forwardRef((C,E)=>{const{scope:k,children:S}=C,T=u(p,k),I=He(E,T.collectionRef);return c.jsx(zi,{ref:I,children:S})});h.displayName=p;const g=n+"CollectionItemSlot",w="data-radix-collection-item",b=Z.forwardRef((C,E)=>{const{scope:k,children:S,...T}=C,I=Z.useRef(null),j=He(E,I),D=u(g,k);return Z.useEffect(()=>(D.itemMap.set(I,{ref:I,...T}),()=>void D.itemMap.delete(I))),c.jsx(zi,{[w]:"",ref:j,children:S})});b.displayName=g;function v(C){const E=u(n+"CollectionConsumer",C);return Z.useCallback(()=>{const S=E.collectionRef.current;if(!S)return[];const T=Array.from(S.querySelectorAll(`[${w}]`));return Array.from(E.itemMap.values()).sort((D,$)=>T.indexOf(D.ref.current)-T.indexOf($.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:f,Slot:h,ItemSlot:b},v,s]}var Ax=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],De=Ax.reduce((n,r)=>{const i=y.forwardRef((s,l)=>{const{asChild:u,...f}=s,p=u?zi:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(p,{...f,ref:l})});return i.displayName=`Primitive.${r}`,{...n,[r]:i}},{});function Bu(n,r){n&&Zo.flushSync(()=>n.dispatchEvent(r))}function Ze(n){const r=y.useRef(n);return y.useEffect(()=>{r.current=n}),y.useMemo(()=>(...i)=>{var s;return(s=r.current)==null?void 0:s.call(r,...i)},[])}function kh(n,r=globalThis==null?void 0:globalThis.document){const i=Ze(n);y.useEffect(()=>{const s=l=>{l.key==="Escape"&&i(l)};return r.addEventListener("keydown",s,{capture:!0}),()=>r.removeEventListener("keydown",s,{capture:!0})},[i,r])}var Nx="DismissableLayer",pu="dismissableLayer.update",Ix="dismissableLayer.pointerDownOutside",jx="dismissableLayer.focusOutside",mp,Sh=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ch=y.forwardRef((n,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:f,onDismiss:p,...h}=n,g=y.useContext(Sh),[w,b]=y.useState(null),v=(w==null?void 0:w.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,C]=y.useState({}),E=He(r,z=>b(z)),k=Array.from(g.layers),[S]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),T=k.indexOf(S),I=w?k.indexOf(w):-1,j=g.layersWithOutsidePointerEventsDisabled.size>0,D=I>=T,$=Lx(z=>{const G=z.target,V=[...g.branches].some(Y=>Y.contains(G));!D||V||(l==null||l(z),f==null||f(z),z.defaultPrevented||p==null||p())},v),U=Dx(z=>{const G=z.target;[...g.branches].some(Y=>Y.contains(G))||(u==null||u(z),f==null||f(z),z.defaultPrevented||p==null||p())},v);return kh(z=>{I===g.layers.size-1&&(s==null||s(z),!z.defaultPrevented&&p&&(z.preventDefault(),p()))},v),y.useEffect(()=>{if(w)return i&&(g.layersWithOutsidePointerEventsDisabled.size===0&&(mp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(w)),g.layers.add(w),pp(),()=>{i&&g.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=mp)}},[w,v,i,g]),y.useEffect(()=>()=>{w&&(g.layers.delete(w),g.layersWithOutsidePointerEventsDisabled.delete(w),pp())},[w,g]),y.useEffect(()=>{const z=()=>C({});return document.addEventListener(pu,z),()=>document.removeEventListener(pu,z)},[]),c.jsx(De.div,{...h,ref:E,style:{pointerEvents:j?D?"auto":"none":void 0,...n.style},onFocusCapture:Pe(n.onFocusCapture,U.onFocusCapture),onBlurCapture:Pe(n.onBlurCapture,U.onBlurCapture),onPointerDownCapture:Pe(n.onPointerDownCapture,$.onPointerDownCapture)})});Ch.displayName=Nx;var Mx="DismissableLayerBranch",Eh=y.forwardRef((n,r)=>{const i=y.useContext(Sh),s=y.useRef(null),l=He(r,s);return y.useEffect(()=>{const u=s.current;if(u)return i.branches.add(u),()=>{i.branches.delete(u)}},[i.branches]),c.jsx(De.div,{...n,ref:l})});Eh.displayName=Mx;function Lx(n,r=globalThis==null?void 0:globalThis.document){const i=Ze(n),s=y.useRef(!1),l=y.useRef(()=>{});return y.useEffect(()=>{const u=p=>{if(p.target&&!s.current){let h=function(){Rh(Ix,i,g,{discrete:!0})};const g={originalEvent:p};p.pointerType==="touch"?(r.removeEventListener("click",l.current),l.current=h,r.addEventListener("click",l.current,{once:!0})):h()}else r.removeEventListener("click",l.current);s.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",u),r.removeEventListener("click",l.current)}},[r,i]),{onPointerDownCapture:()=>s.current=!0}}function Dx(n,r=globalThis==null?void 0:globalThis.document){const i=Ze(n),s=y.useRef(!1);return y.useEffect(()=>{const l=u=>{u.target&&!s.current&&Rh(jx,i,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",l),()=>r.removeEventListener("focusin",l)},[r,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function pp(){const n=new CustomEvent(pu);document.dispatchEvent(n)}function Rh(n,r,i,{discrete:s}){const l=i.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Bu(l,u):l.dispatchEvent(u)}var Ox=Ch,Fx=Eh,At=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{},$x="Portal",Ph=y.forwardRef((n,r)=>{var p;const{container:i,...s}=n,[l,u]=y.useState(!1);At(()=>u(!0),[]);const f=i||l&&((p=globalThis==null?void 0:globalThis.document)==null?void 0:p.body);return f?_u.createPortal(c.jsx(De.div,{...s,ref:r}),f):null});Ph.displayName=$x;function _x(n,r){return y.useReducer((i,s)=>r[i][s]??i,n)}var Vi=n=>{const{present:r,children:i}=n,s=Bx(r),l=typeof i=="function"?i({present:s.isPresent}):y.Children.only(i),u=He(s.ref,zx(l));return typeof i=="function"||s.isPresent?y.cloneElement(l,{ref:u}):null};Vi.displayName="Presence";function Bx(n){const[r,i]=y.useState(),s=y.useRef({}),l=y.useRef(n),u=y.useRef("none"),f=n?"mounted":"unmounted",[p,h]=_x(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const g=ga(s.current);u.current=p==="mounted"?g:"none"},[p]),At(()=>{const g=s.current,w=l.current;if(w!==n){const v=u.current,C=ga(g);n?h("MOUNT"):C==="none"||(g==null?void 0:g.display)==="none"?h("UNMOUNT"):h(w&&v!==C?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),At(()=>{if(r){const g=b=>{const C=ga(s.current).includes(b.animationName);b.target===r&&C&&Zo.flushSync(()=>h("ANIMATION_END"))},w=b=>{b.target===r&&(u.current=ga(s.current))};return r.addEventListener("animationstart",w),r.addEventListener("animationcancel",g),r.addEventListener("animationend",g),()=>{r.removeEventListener("animationstart",w),r.removeEventListener("animationcancel",g),r.removeEventListener("animationend",g)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:y.useCallback(g=>{g&&(s.current=getComputedStyle(g)),i(g)},[])}}function ga(n){return(n==null?void 0:n.animationName)||"none"}function zx(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function Th({prop:n,defaultProp:r,onChange:i=()=>{}}){const[s,l]=Hx({defaultProp:r,onChange:i}),u=n!==void 0,f=u?n:s,p=Ze(i),h=y.useCallback(g=>{if(u){const b=typeof g=="function"?g(n):g;b!==n&&p(b)}else l(g)},[u,n,l,p]);return[f,h]}function Hx({defaultProp:n,onChange:r}){const i=y.useState(n),[s]=i,l=y.useRef(s),u=Ze(r);return y.useEffect(()=>{l.current!==s&&(u(s),l.current=s)},[s,l,u]),i}var Wx="VisuallyHidden",qa=y.forwardRef((n,r)=>c.jsx(De.span,{...n,ref:r,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...n.style}}));qa.displayName=Wx;var Ux=qa,zu="ToastProvider",[Hu,qx,Vx]=Tx("Toast"),[Ah,lR]=es("Toast",[Vx]),[Yx,Va]=Ah(zu),Nh=n=>{const{__scopeToast:r,label:i="Notification",duration:s=5e3,swipeDirection:l="right",swipeThreshold:u=50,children:f}=n,[p,h]=y.useState(null),[g,w]=y.useState(0),b=y.useRef(!1),v=y.useRef(!1);return i.trim()||console.error(`Invalid prop \`label\` supplied to \`${zu}\`. Expected non-empty \`string\`.`),c.jsx(Hu.Provider,{scope:r,children:c.jsx(Yx,{scope:r,label:i,duration:s,swipeDirection:l,swipeThreshold:u,toastCount:g,viewport:p,onViewportChange:h,onToastAdd:y.useCallback(()=>w(C=>C+1),[]),onToastRemove:y.useCallback(()=>w(C=>C-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:v,children:f})})};Nh.displayName=zu;var Ih="ToastViewport",Gx=["F8"],hu="toast.viewportPause",gu="toast.viewportResume",jh=y.forwardRef((n,r)=>{const{__scopeToast:i,hotkey:s=Gx,label:l="Notifications ({hotkey})",...u}=n,f=Va(Ih,i),p=qx(i),h=y.useRef(null),g=y.useRef(null),w=y.useRef(null),b=y.useRef(null),v=He(r,b,f.onViewportChange),C=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=f.toastCount>0;y.useEffect(()=>{const S=T=>{var j;s.every(D=>T[D]||T.code===D)&&((j=b.current)==null||j.focus())};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[s]),y.useEffect(()=>{const S=h.current,T=b.current;if(E&&S&&T){const I=()=>{if(!f.isClosePausedRef.current){const U=new CustomEvent(hu);T.dispatchEvent(U),f.isClosePausedRef.current=!0}},j=()=>{if(f.isClosePausedRef.current){const U=new CustomEvent(gu);T.dispatchEvent(U),f.isClosePausedRef.current=!1}},D=U=>{!S.contains(U.relatedTarget)&&j()},$=()=>{S.contains(document.activeElement)||j()};return S.addEventListener("focusin",I),S.addEventListener("focusout",D),S.addEventListener("pointermove",I),S.addEventListener("pointerleave",$),window.addEventListener("blur",I),window.addEventListener("focus",j),()=>{S.removeEventListener("focusin",I),S.removeEventListener("focusout",D),S.removeEventListener("pointermove",I),S.removeEventListener("pointerleave",$),window.removeEventListener("blur",I),window.removeEventListener("focus",j)}}},[E,f.isClosePausedRef]);const k=y.useCallback(({tabbingDirection:S})=>{const I=p().map(j=>{const D=j.ref.current,$=[D,...aw(D)];return S==="forwards"?$:$.reverse()});return(S==="forwards"?I.reverse():I).flat()},[p]);return y.useEffect(()=>{const S=b.current;if(S){const T=I=>{var $,U,z;const j=I.altKey||I.ctrlKey||I.metaKey;if(I.key==="Tab"&&!j){const G=document.activeElement,V=I.shiftKey;if(I.target===S&&V){($=g.current)==null||$.focus();return}const ee=k({tabbingDirection:V?"backwards":"forwards"}),pe=ee.findIndex(J=>J===G);Jc(ee.slice(pe+1))?I.preventDefault():V?(U=g.current)==null||U.focus():(z=w.current)==null||z.focus()}};return S.addEventListener("keydown",T),()=>S.removeEventListener("keydown",T)}},[p,k]),c.jsxs(Fx,{ref:h,role:"region","aria-label":l.replace("{hotkey}",C),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&c.jsx(yu,{ref:g,onFocusFromOutsideViewport:()=>{const S=k({tabbingDirection:"forwards"});Jc(S)}}),c.jsx(Hu.Slot,{scope:i,children:c.jsx(De.ol,{tabIndex:-1,...u,ref:v})}),E&&c.jsx(yu,{ref:w,onFocusFromOutsideViewport:()=>{const S=k({tabbingDirection:"backwards"});Jc(S)}})]})});jh.displayName=Ih;var Mh="ToastFocusProxy",yu=y.forwardRef((n,r)=>{const{__scopeToast:i,onFocusFromOutsideViewport:s,...l}=n,u=Va(Mh,i);return c.jsx(qa,{"aria-hidden":!0,tabIndex:0,...l,ref:r,style:{position:"fixed"},onFocus:f=>{var g;const p=f.relatedTarget;!((g=u.viewport)!=null&&g.contains(p))&&s()}})});yu.displayName=Mh;var Ya="Toast",Qx="toast.swipeStart",Kx="toast.swipeMove",Xx="toast.swipeCancel",Jx="toast.swipeEnd",Lh=y.forwardRef((n,r)=>{const{forceMount:i,open:s,defaultOpen:l,onOpenChange:u,...f}=n,[p=!0,h]=Th({prop:s,defaultProp:l,onChange:u});return c.jsx(Vi,{present:i||p,children:c.jsx(tw,{open:p,...f,ref:r,onClose:()=>h(!1),onPause:Ze(n.onPause),onResume:Ze(n.onResume),onSwipeStart:Pe(n.onSwipeStart,g=>{g.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Pe(n.onSwipeMove,g=>{const{x:w,y:b}=g.detail.delta;g.currentTarget.setAttribute("data-swipe","move"),g.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${w}px`),g.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:Pe(n.onSwipeCancel,g=>{g.currentTarget.setAttribute("data-swipe","cancel"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),g.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Pe(n.onSwipeEnd,g=>{const{x:w,y:b}=g.detail.delta;g.currentTarget.setAttribute("data-swipe","end"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),g.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${w}px`),g.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),h(!1)})})})});Lh.displayName=Ya;var[Zx,ew]=Ah(Ya,{onClose(){}}),tw=y.forwardRef((n,r)=>{const{__scopeToast:i,type:s="foreground",duration:l,open:u,onClose:f,onEscapeKeyDown:p,onPause:h,onResume:g,onSwipeStart:w,onSwipeMove:b,onSwipeCancel:v,onSwipeEnd:C,...E}=n,k=Va(Ya,i),[S,T]=y.useState(null),I=He(r,J=>T(J)),j=y.useRef(null),D=y.useRef(null),$=l||k.duration,U=y.useRef(0),z=y.useRef($),G=y.useRef(0),{onToastAdd:V,onToastRemove:Y}=k,ie=Ze(()=>{var ge;(S==null?void 0:S.contains(document.activeElement))&&((ge=k.viewport)==null||ge.focus()),f()}),ee=y.useCallback(J=>{!J||J===1/0||(window.clearTimeout(G.current),U.current=new Date().getTime(),G.current=window.setTimeout(ie,J))},[ie]);y.useEffect(()=>{const J=k.viewport;if(J){const ge=()=>{ee(z.current),g==null||g()},le=()=>{const ce=new Date().getTime()-U.current;z.current=z.current-ce,window.clearTimeout(G.current),h==null||h()};return J.addEventListener(hu,le),J.addEventListener(gu,ge),()=>{J.removeEventListener(hu,le),J.removeEventListener(gu,ge)}}},[k.viewport,$,h,g,ee]),y.useEffect(()=>{u&&!k.isClosePausedRef.current&&ee($)},[u,$,k.isClosePausedRef,ee]),y.useEffect(()=>(V(),()=>Y()),[V,Y]);const pe=y.useMemo(()=>S?zh(S):null,[S]);return k.viewport?c.jsxs(c.Fragment,{children:[pe&&c.jsx(nw,{__scopeToast:i,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:pe}),c.jsx(Zx,{scope:i,onClose:ie,children:Zo.createPortal(c.jsx(Hu.ItemSlot,{scope:i,children:c.jsx(Ox,{asChild:!0,onEscapeKeyDown:Pe(p,()=>{k.isFocusedToastEscapeKeyDownRef.current||ie(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(De.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":k.swipeDirection,...E,ref:I,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:Pe(n.onKeyDown,J=>{J.key==="Escape"&&(p==null||p(J.nativeEvent),J.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,ie()))}),onPointerDown:Pe(n.onPointerDown,J=>{J.button===0&&(j.current={x:J.clientX,y:J.clientY})}),onPointerMove:Pe(n.onPointerMove,J=>{if(!j.current)return;const ge=J.clientX-j.current.x,le=J.clientY-j.current.y,ce=!!D.current,F=["left","right"].includes(k.swipeDirection),Q=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,X=F?Q(0,ge):0,P=F?0:Q(0,le),_=J.pointerType==="touch"?10:2,te={x:X,y:P},de={originalEvent:J,delta:te};ce?(D.current=te,ya(Kx,b,de,{discrete:!1})):hp(te,k.swipeDirection,_)?(D.current=te,ya(Qx,w,de,{discrete:!1}),J.target.setPointerCapture(J.pointerId)):(Math.abs(ge)>_||Math.abs(le)>_)&&(j.current=null)}),onPointerUp:Pe(n.onPointerUp,J=>{const ge=D.current,le=J.target;if(le.hasPointerCapture(J.pointerId)&&le.releasePointerCapture(J.pointerId),D.current=null,j.current=null,ge){const ce=J.currentTarget,F={originalEvent:J,delta:ge};hp(ge,k.swipeDirection,k.swipeThreshold)?ya(Jx,C,F,{discrete:!0}):ya(Xx,v,F,{discrete:!0}),ce.addEventListener("click",Q=>Q.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),nw=n=>{const{__scopeToast:r,children:i,...s}=n,l=Va(Ya,r),[u,f]=y.useState(!1),[p,h]=y.useState(!1);return ow(()=>f(!0)),y.useEffect(()=>{const g=window.setTimeout(()=>h(!0),1e3);return()=>window.clearTimeout(g)},[]),p?null:c.jsx(Ph,{asChild:!0,children:c.jsx(qa,{...s,children:u&&c.jsxs(c.Fragment,{children:[l.label," ",i]})})})},rw="ToastTitle",Dh=y.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return c.jsx(De.div,{...s,ref:r})});Dh.displayName=rw;var iw="ToastDescription",Oh=y.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return c.jsx(De.div,{...s,ref:r})});Oh.displayName=iw;var Fh="ToastAction",$h=y.forwardRef((n,r)=>{const{altText:i,...s}=n;return i.trim()?c.jsx(Bh,{altText:i,asChild:!0,children:c.jsx(Wu,{...s,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${Fh}\`. Expected non-empty \`string\`.`),null)});$h.displayName=Fh;var _h="ToastClose",Wu=y.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n,l=ew(_h,i);return c.jsx(Bh,{asChild:!0,children:c.jsx(De.button,{type:"button",...s,ref:r,onClick:Pe(n.onClick,l.onClose)})})});Wu.displayName=_h;var Bh=y.forwardRef((n,r)=>{const{__scopeToast:i,altText:s,...l}=n;return c.jsx(De.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...l,ref:r})});function zh(n){const r=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&r.push(s.textContent),sw(s)){const l=s.ariaHidden||s.hidden||s.style.display==="none",u=s.dataset.radixToastAnnounceExclude==="";if(!l)if(u){const f=s.dataset.radixToastAnnounceAlt;f&&r.push(f)}else r.push(...zh(s))}}),r}function ya(n,r,i,{discrete:s}){const l=i.originalEvent.currentTarget,u=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Bu(l,u):l.dispatchEvent(u)}var hp=(n,r,i=0)=>{const s=Math.abs(n.x),l=Math.abs(n.y),u=s>l;return r==="left"||r==="right"?u&&s>i:!u&&l>i};function ow(n=()=>{}){const r=Ze(n);At(()=>{let i=0,s=0;return i=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(s)}},[r])}function sw(n){return n.nodeType===n.ELEMENT_NODE}function aw(n){const r=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const l=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||l?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function Jc(n){const r=document.activeElement;return n.some(i=>i===r?!0:(i.focus(),document.activeElement!==r))}var lw=Nh,Hh=jh,Wh=Lh,Uh=Dh,qh=Oh,Vh=$h,Yh=Wu;function Gh(n){var r,i,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(i=Gh(n[r]))&&(s&&(s+=" "),s+=i)}else for(i in n)n[i]&&(s&&(s+=" "),s+=i);return s}function Qh(){for(var n,r,i=0,s="",l=arguments.length;i<l;i++)(n=arguments[i])&&(r=Gh(n))&&(s&&(s+=" "),s+=r);return s}const gp=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,yp=Qh,Uu=(n,r)=>i=>{var s;if((r==null?void 0:r.variants)==null)return yp(n,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:u}=r,f=Object.keys(l).map(g=>{const w=i==null?void 0:i[g],b=u==null?void 0:u[g];if(w===null)return null;const v=gp(w)||gp(b);return l[g][v]}),p=i&&Object.entries(i).reduce((g,w)=>{let[b,v]=w;return v===void 0||(g[b]=v),g},{}),h=r==null||(s=r.compoundVariants)===null||s===void 0?void 0:s.reduce((g,w)=>{let{class:b,className:v,...C}=w;return Object.entries(C).every(E=>{let[k,S]=E;return Array.isArray(S)?S.includes({...u,...p}[k]):{...u,...p}[k]===S})?[...g,b,v]:g},[]);return yp(n,f,h,i==null?void 0:i.class,i==null?void 0:i.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kh=(...n)=>n.filter((r,i,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=y.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...p},h)=>y.createElement("svg",{ref:h,...uw,width:r,height:r,stroke:n,strokeWidth:s?Number(i)*24/Number(r):i,className:Kh("lucide",l),...p},[...f.map(([g,w])=>y.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(n,r)=>{const i=y.forwardRef(({className:s,...l},u)=>y.createElement(dw,{ref:u,iconNode:r,className:Kh(`lucide-${cw(n)}`,s),...l}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=Ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Ce("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=Ce("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=Ce("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Ce("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Ce("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Ce("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=Ce("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Ce("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Ce("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=Ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=Ce("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=Ce("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=Ce("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Ce("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Ce("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=Ce("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Ce("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Ce("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=Ce("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=Ce("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=Ce("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Ce("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Ce("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Ce("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=Ce("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=Ce("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Ce("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Ce("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=Ce("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=Ce("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=Ce("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=Ce("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vu="-",Tw=n=>{const r=Nw(n),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:f=>{const p=f.split(Vu);return p[0]===""&&p.length!==1&&p.shift(),rg(p,r)||Aw(f)},getConflictingClassGroupIds:(f,p)=>{const h=i[f]||[];return p&&s[f]?[...h,...s[f]]:h}}},rg=(n,r)=>{var f;if(n.length===0)return r.classGroupId;const i=n[0],s=r.nextPart.get(i),l=s?rg(n.slice(1),s):void 0;if(l)return l;if(r.validators.length===0)return;const u=n.join(Vu);return(f=r.validators.find(({validator:p})=>p(u)))==null?void 0:f.classGroupId},xp=/^\[(.+)\]$/,Aw=n=>{if(xp.test(n)){const r=xp.exec(n)[1],i=r==null?void 0:r.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}},Nw=n=>{const{theme:r,prefix:i}=n,s={nextPart:new Map,validators:[]};return jw(Object.entries(n.classGroups),i).forEach(([u,f])=>{Su(f,s,u,r)}),s},Su=(n,r,i,s)=>{n.forEach(l=>{if(typeof l=="string"){const u=l===""?r:wp(r,l);u.classGroupId=i;return}if(typeof l=="function"){if(Iw(l)){Su(l(s),r,i,s);return}r.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([u,f])=>{Su(f,wp(r,u),i,s)})})},wp=(n,r)=>{let i=n;return r.split(Vu).forEach(s=>{i.nextPart.has(s)||i.nextPart.set(s,{nextPart:new Map,validators:[]}),i=i.nextPart.get(s)}),i},Iw=n=>n.isThemeGetter,jw=(n,r)=>r?n.map(([i,s])=>{const l=s.map(u=>typeof u=="string"?r+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([f,p])=>[r+f,p])):u);return[i,l]}):n,Mw=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,i=new Map,s=new Map;const l=(u,f)=>{i.set(u,f),r++,r>n&&(r=0,s=i,i=new Map)};return{get(u){let f=i.get(u);if(f!==void 0)return f;if((f=s.get(u))!==void 0)return l(u,f),f},set(u,f){i.has(u)?i.set(u,f):l(u,f)}}},ig="!",Lw=n=>{const{separator:r,experimentalParseClassName:i}=n,s=r.length===1,l=r[0],u=r.length,f=p=>{const h=[];let g=0,w=0,b;for(let S=0;S<p.length;S++){let T=p[S];if(g===0){if(T===l&&(s||p.slice(S,S+u)===r)){h.push(p.slice(w,S)),w=S+u;continue}if(T==="/"){b=S;continue}}T==="["?g++:T==="]"&&g--}const v=h.length===0?p:p.substring(w),C=v.startsWith(ig),E=C?v.substring(1):v,k=b&&b>w?b-w:void 0;return{modifiers:h,hasImportantModifier:C,baseClassName:E,maybePostfixModifierPosition:k}};return i?p=>i({className:p,parseClassName:f}):f},Dw=n=>{if(n.length<=1)return n;const r=[];let i=[];return n.forEach(s=>{s[0]==="["?(r.push(...i.sort(),s),i=[]):i.push(s)}),r.push(...i.sort()),r},Ow=n=>({cache:Mw(n.cacheSize),parseClassName:Lw(n),...Tw(n)}),Fw=/\s+/,$w=(n,r)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:l}=r,u=[],f=n.trim().split(Fw);let p="";for(let h=f.length-1;h>=0;h-=1){const g=f[h],{modifiers:w,hasImportantModifier:b,baseClassName:v,maybePostfixModifierPosition:C}=i(g);let E=!!C,k=s(E?v.substring(0,C):v);if(!k){if(!E){p=g+(p.length>0?" "+p:p);continue}if(k=s(v),!k){p=g+(p.length>0?" "+p:p);continue}E=!1}const S=Dw(w).join(":"),T=b?S+ig:S,I=T+k;if(u.includes(I))continue;u.push(I);const j=l(k,E);for(let D=0;D<j.length;++D){const $=j[D];u.push(T+$)}p=g+(p.length>0?" "+p:p)}return p};function _w(){let n=0,r,i,s="";for(;n<arguments.length;)(r=arguments[n++])&&(i=og(r))&&(s&&(s+=" "),s+=i);return s}const og=n=>{if(typeof n=="string")return n;let r,i="";for(let s=0;s<n.length;s++)n[s]&&(r=og(n[s]))&&(i&&(i+=" "),i+=r);return i};function Bw(n,...r){let i,s,l,u=f;function f(h){const g=r.reduce((w,b)=>b(w),n());return i=Ow(g),s=i.cache.get,l=i.cache.set,u=p,p(h)}function p(h){const g=s(h);if(g)return g;const w=$w(h,i);return l(h,w),w}return function(){return u(_w.apply(null,arguments))}}const ze=n=>{const r=i=>i[n]||[];return r.isThemeGetter=!0,r},sg=/^\[(?:([a-z-]+):)?(.+)\]$/i,zw=/^\d+\/\d+$/,Hw=new Set(["px","full","screen"]),Ww=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Uw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Vw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Yw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_n=n=>Ai(n)||Hw.has(n)||zw.test(n),dr=n=>Yi(n,"length",tb),Ai=n=>!!n&&!Number.isNaN(Number(n)),eu=n=>Yi(n,"number",Ai),zo=n=>!!n&&Number.isInteger(Number(n)),Gw=n=>n.endsWith("%")&&Ai(n.slice(0,-1)),we=n=>sg.test(n),fr=n=>Ww.test(n),Qw=new Set(["length","size","percentage"]),Kw=n=>Yi(n,Qw,ag),Xw=n=>Yi(n,"position",ag),Jw=new Set(["image","url"]),Zw=n=>Yi(n,Jw,rb),eb=n=>Yi(n,"",nb),Ho=()=>!0,Yi=(n,r,i)=>{const s=sg.exec(n);return s?s[1]?typeof r=="string"?s[1]===r:r.has(s[1]):i(s[2]):!1},tb=n=>Uw.test(n)&&!qw.test(n),ag=()=>!1,nb=n=>Vw.test(n),rb=n=>Yw.test(n),ib=()=>{const n=ze("colors"),r=ze("spacing"),i=ze("blur"),s=ze("brightness"),l=ze("borderColor"),u=ze("borderRadius"),f=ze("borderSpacing"),p=ze("borderWidth"),h=ze("contrast"),g=ze("grayscale"),w=ze("hueRotate"),b=ze("invert"),v=ze("gap"),C=ze("gradientColorStops"),E=ze("gradientColorStopPositions"),k=ze("inset"),S=ze("margin"),T=ze("opacity"),I=ze("padding"),j=ze("saturate"),D=ze("scale"),$=ze("sepia"),U=ze("skew"),z=ze("space"),G=ze("translate"),V=()=>["auto","contain","none"],Y=()=>["auto","hidden","clip","visible","scroll"],ie=()=>["auto",we,r],ee=()=>[we,r],pe=()=>["",_n,dr],J=()=>["auto",Ai,we],ge=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],le=()=>["solid","dashed","dotted","double","none"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",we],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>[Ai,we];return{cacheSize:500,separator:":",theme:{colors:[Ho],spacing:[_n,dr],blur:["none","",fr,we],brightness:P(),borderColor:[n],borderRadius:["none","","full",fr,we],borderSpacing:ee(),borderWidth:pe(),contrast:P(),grayscale:Q(),hueRotate:P(),invert:Q(),gap:ee(),gradientColorStops:[n],gradientColorStopPositions:[Gw,dr],inset:ie(),margin:ie(),opacity:P(),padding:ee(),saturate:P(),scale:P(),sepia:Q(),skew:P(),space:ee(),translate:ee()},classGroups:{aspect:[{aspect:["auto","square","video",we]}],container:["container"],columns:[{columns:[fr]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ge(),we]}],overflow:[{overflow:Y()}],"overflow-x":[{"overflow-x":Y()}],"overflow-y":[{"overflow-y":Y()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",zo,we]}],basis:[{basis:ie()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",we]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",zo,we]}],"grid-cols":[{"grid-cols":[Ho]}],"col-start-end":[{col:["auto",{span:["full",zo,we]},we]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[Ho]}],"row-start-end":[{row:["auto",{span:[zo,we]},we]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",we]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",we]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",we,r]}],"min-w":[{"min-w":[we,r,"min","max","fit"]}],"max-w":[{"max-w":[we,r,"none","full","min","max","fit","prose",{screen:[fr]},fr]}],h:[{h:[we,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[we,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[we,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[we,r,"auto","min","max","fit"]}],"font-size":[{text:["base",fr,dr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",eu]}],"font-family":[{font:[Ho]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",we]}],"line-clamp":[{"line-clamp":["none",Ai,eu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_n,we]}],"list-image":[{"list-image":["none",we]}],"list-style-type":[{list:["none","disc","decimal",we]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...le(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_n,dr]}],"underline-offset":[{"underline-offset":["auto",_n,we]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ee()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ge(),Xw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Kw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zw]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...le(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:le()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...le()]}],"outline-offset":[{"outline-offset":[_n,we]}],"outline-w":[{outline:[_n,dr]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[_n,dr]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",fr,eb]}],"shadow-color":[{shadow:[Ho]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":[...ce(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ce()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[s]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",fr,we]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[w]}],invert:[{invert:[b]}],saturate:[{saturate:[j]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[w]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[f]}],"border-spacing-x":[{"border-spacing-x":[f]}],"border-spacing-y":[{"border-spacing-y":[f]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",we]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",we]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",we]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[zo,we]}],"translate-x":[{"translate-x":[G]}],"translate-y":[{"translate-y":[G]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",we]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ee()}],"scroll-mx":[{"scroll-mx":ee()}],"scroll-my":[{"scroll-my":ee()}],"scroll-ms":[{"scroll-ms":ee()}],"scroll-me":[{"scroll-me":ee()}],"scroll-mt":[{"scroll-mt":ee()}],"scroll-mr":[{"scroll-mr":ee()}],"scroll-mb":[{"scroll-mb":ee()}],"scroll-ml":[{"scroll-ml":ee()}],"scroll-p":[{"scroll-p":ee()}],"scroll-px":[{"scroll-px":ee()}],"scroll-py":[{"scroll-py":ee()}],"scroll-ps":[{"scroll-ps":ee()}],"scroll-pe":[{"scroll-pe":ee()}],"scroll-pt":[{"scroll-pt":ee()}],"scroll-pr":[{"scroll-pr":ee()}],"scroll-pb":[{"scroll-pb":ee()}],"scroll-pl":[{"scroll-pl":ee()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[_n,dr,eu]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ob=Bw(ib);function ve(...n){return ob(Qh(n))}const sb=lw,lg=y.forwardRef(({className:n,...r},i)=>c.jsx(Hh,{ref:i,className:ve("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...r}));lg.displayName=Hh.displayName;const ab=Uu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),cg=y.forwardRef(({className:n,variant:r,...i},s)=>c.jsx(Wh,{ref:s,className:ve(ab({variant:r}),n),...i}));cg.displayName=Wh.displayName;const lb=y.forwardRef(({className:n,...r},i)=>c.jsx(Vh,{ref:i,className:ve("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...r}));lb.displayName=Vh.displayName;const ug=y.forwardRef(({className:n,...r},i)=>c.jsx(Yh,{ref:i,className:ve("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...r,children:c.jsx(ng,{className:"h-4 w-4"})}));ug.displayName=Yh.displayName;const dg=y.forwardRef(({className:n,...r},i)=>c.jsx(Uh,{ref:i,className:ve("text-sm font-semibold",n),...r}));dg.displayName=Uh.displayName;const fg=y.forwardRef(({className:n,...r},i)=>c.jsx(qh,{ref:i,className:ve("text-sm opacity-90",n),...r}));fg.displayName=qh.displayName;function cb(){const{toasts:n}=kx();return c.jsxs(sb,{children:[n.map(function({id:r,title:i,description:s,action:l,...u}){return c.jsxs(cg,{...u,children:[c.jsxs("div",{className:"grid gap-1",children:[i&&c.jsx(dg,{children:i}),s&&c.jsx(fg,{children:s})]}),l,c.jsx(ug,{})]},r)}),c.jsx(lg,{})]})}var bp=["light","dark"],ub="(prefers-color-scheme: dark)",db=y.createContext(void 0),fb={setTheme:n=>{},themes:[]},mb=()=>{var n;return(n=y.useContext(db))!=null?n:fb};y.memo(({forcedTheme:n,storageKey:r,attribute:i,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:f,attrs:p,nonce:h})=>{let g=u==="system",w=i==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${p.map(E=>`'${E}'`).join(",")})`};`:`var d=document.documentElement,n='${i}',s='setAttribute';`,b=l?bp.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(E,k=!1,S=!0)=>{let T=f?f[E]:E,I=k?E+"|| ''":`'${T}'`,j="";return l&&S&&!k&&bp.includes(E)&&(j+=`d.style.colorScheme = '${E}';`),i==="class"?k||T?j+=`c.add(${I})`:j+="null":T&&(j+=`d[s](n,${I})`),j},C=n?`!function(){${w}${v(n)}}()`:s?`!function(){try{${w}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${g})){var t='${ub}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${f?`var x=${JSON.stringify(f)};`:""}${v(f?"x[e]":"e",!0)}}${g?"":"else{"+v(u,!1,!1)+"}"}${b}}catch(e){}}()`:`!function(){try{${w}var e=localStorage.getItem('${r}');if(e){${f?`var x=${JSON.stringify(f)};`:""}${v(f?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${b}}catch(t){}}();`;return y.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:C}})});var pb=n=>{switch(n){case"success":return yb;case"info":return xb;case"warning":return vb;case"error":return wb;default:return null}},hb=Array(12).fill(0),gb=({visible:n})=>Z.createElement("div",{className:"sonner-loading-wrapper","data-visible":n},Z.createElement("div",{className:"sonner-spinner"},hb.map((r,i)=>Z.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),yb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),vb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),xb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),wb=Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Z.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),bb=()=>{let[n,r]=Z.useState(document.hidden);return Z.useEffect(()=>{let i=()=>{r(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),n},Cu=1,kb=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let r=this.subscribers.indexOf(n);this.subscribers.splice(r,1)}),this.publish=n=>{this.subscribers.forEach(r=>r(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var r;let{message:i,...s}=n,l=typeof(n==null?void 0:n.id)=="number"||((r=n.id)==null?void 0:r.length)>0?n.id:Cu++,u=this.toasts.find(p=>p.id===l),f=n.dismissible===void 0?!0:n.dismissible;return u?this.toasts=this.toasts.map(p=>p.id===l?(this.publish({...p,...n,id:l,title:i}),{...p,...n,id:l,dismissible:f,title:i}):p):this.addToast({title:i,...s,dismissible:f,id:l}),l},this.dismiss=n=>(n||this.toasts.forEach(r=>{this.subscribers.forEach(i=>i({id:r.id,dismiss:!0}))}),this.subscribers.forEach(r=>r({id:n,dismiss:!0})),n),this.message=(n,r)=>this.create({...r,message:n}),this.error=(n,r)=>this.create({...r,message:n,type:"error"}),this.success=(n,r)=>this.create({...r,type:"success",message:n}),this.info=(n,r)=>this.create({...r,type:"info",message:n}),this.warning=(n,r)=>this.create({...r,type:"warning",message:n}),this.loading=(n,r)=>this.create({...r,type:"loading",message:n}),this.promise=(n,r)=>{if(!r)return;let i;r.loading!==void 0&&(i=this.create({...r,promise:n,type:"loading",message:r.loading,description:typeof r.description!="function"?r.description:void 0}));let s=n instanceof Promise?n:n(),l=i!==void 0;return s.then(async u=>{if(Cb(u)&&!u.ok){l=!1;let f=typeof r.error=="function"?await r.error(`HTTP error! status: ${u.status}`):r.error,p=typeof r.description=="function"?await r.description(`HTTP error! status: ${u.status}`):r.description;this.create({id:i,type:"error",message:f,description:p})}else if(r.success!==void 0){l=!1;let f=typeof r.success=="function"?await r.success(u):r.success,p=typeof r.description=="function"?await r.description(u):r.description;this.create({id:i,type:"success",message:f,description:p})}}).catch(async u=>{if(r.error!==void 0){l=!1;let f=typeof r.error=="function"?await r.error(u):r.error,p=typeof r.description=="function"?await r.description(u):r.description;this.create({id:i,type:"error",message:f,description:p})}}).finally(()=>{var u;l&&(this.dismiss(i),i=void 0),(u=r.finally)==null||u.call(r)}),i},this.custom=(n,r)=>{let i=(r==null?void 0:r.id)||Cu++;return this.create({jsx:n(i),id:i,...r}),i},this.subscribers=[],this.toasts=[]}},Dt=new kb,Sb=(n,r)=>{let i=(r==null?void 0:r.id)||Cu++;return Dt.addToast({title:n,...r,id:i}),i},Cb=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",Eb=Sb,Rb=()=>Dt.toasts;Object.assign(Eb,{success:Dt.success,info:Dt.info,warning:Dt.warning,error:Dt.error,custom:Dt.custom,message:Dt.message,promise:Dt.promise,dismiss:Dt.dismiss,loading:Dt.loading},{getHistory:Rb});function Pb(n,{insertAt:r}={}){if(typeof document>"u")return;let i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}Pb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function va(n){return n.label!==void 0}var Tb=3,Ab="32px",Nb=4e3,Ib=356,jb=14,Mb=20,Lb=200;function Db(...n){return n.filter(Boolean).join(" ")}var Ob=n=>{var r,i,s,l,u,f,p,h,g,w;let{invert:b,toast:v,unstyled:C,interacting:E,setHeights:k,visibleToasts:S,heights:T,index:I,toasts:j,expanded:D,removeToast:$,defaultRichColors:U,closeButton:z,style:G,cancelButtonStyle:V,actionButtonStyle:Y,className:ie="",descriptionClassName:ee="",duration:pe,position:J,gap:ge,loadingIcon:le,expandByDefault:ce,classNames:F,icons:Q,closeButtonAriaLabel:X="Close toast",pauseWhenPageIsHidden:P,cn:_}=n,[te,de]=Z.useState(!1),[xe,ue]=Z.useState(!1),[Te,ke]=Z.useState(!1),[Ae,Ye]=Z.useState(!1),[Pn,Tn]=Z.useState(0),[Bt,An]=Z.useState(0),Nr=Z.useRef(null),Jt=Z.useRef(null),Ir=I===0,ni=I+1<=S,Ke=v.type,zt=v.dismissible!==!1,Un=v.className||"",Ji=v.descriptionClassName||"",jr=Z.useMemo(()=>T.findIndex(ye=>ye.toastId===v.id)||0,[T,v.id]),rs=Z.useMemo(()=>{var ye;return(ye=v.closeButton)!=null?ye:z},[v.closeButton,z]),Zi=Z.useMemo(()=>v.duration||pe||Nb,[v.duration,pe]),ri=Z.useRef(0),mn=Z.useRef(0),Mr=Z.useRef(0),Nn=Z.useRef(null),[qn,Lr]=J.split("-"),is=Z.useMemo(()=>T.reduce((ye,Oe,Me)=>Me>=jr?ye:ye+Oe.height,0),[T,jr]),eo=bb(),os=v.invert||b,to=Ke==="loading";mn.current=Z.useMemo(()=>jr*ge+is,[jr,is]),Z.useEffect(()=>{de(!0)},[]),Z.useLayoutEffect(()=>{if(!te)return;let ye=Jt.current,Oe=ye.style.height;ye.style.height="auto";let Me=ye.getBoundingClientRect().height;ye.style.height=Oe,An(Me),k(lt=>lt.find(ct=>ct.toastId===v.id)?lt.map(ct=>ct.toastId===v.id?{...ct,height:Me}:ct):[{toastId:v.id,height:Me,position:v.position},...lt])},[te,v.title,v.description,k,v.id]);let Ht=Z.useCallback(()=>{ue(!0),Tn(mn.current),k(ye=>ye.filter(Oe=>Oe.toastId!==v.id)),setTimeout(()=>{$(v)},Lb)},[v,$,k,mn]);Z.useEffect(()=>{if(v.promise&&Ke==="loading"||v.duration===1/0||v.type==="loading")return;let ye,Oe=Zi;return D||E||P&&eo?(()=>{if(Mr.current<ri.current){let Me=new Date().getTime()-ri.current;Oe=Oe-Me}Mr.current=new Date().getTime()})():Oe!==1/0&&(ri.current=new Date().getTime(),ye=setTimeout(()=>{var Me;(Me=v.onAutoClose)==null||Me.call(v,v),Ht()},Oe)),()=>clearTimeout(ye)},[D,E,ce,v,Zi,Ht,v.promise,Ke,P,eo]),Z.useEffect(()=>{let ye=Jt.current;if(ye){let Oe=ye.getBoundingClientRect().height;return An(Oe),k(Me=>[{toastId:v.id,height:Oe,position:v.position},...Me]),()=>k(Me=>Me.filter(lt=>lt.toastId!==v.id))}},[k,v.id]),Z.useEffect(()=>{v.delete&&Ht()},[Ht,v.delete]);function no(){return Q!=null&&Q.loading?Z.createElement("div",{className:"sonner-loader","data-visible":Ke==="loading"},Q.loading):le?Z.createElement("div",{className:"sonner-loader","data-visible":Ke==="loading"},le):Z.createElement(gb,{visible:Ke==="loading"})}return Z.createElement("li",{"aria-live":v.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:Jt,className:_(ie,Un,F==null?void 0:F.toast,(r=v==null?void 0:v.classNames)==null?void 0:r.toast,F==null?void 0:F.default,F==null?void 0:F[Ke],(i=v==null?void 0:v.classNames)==null?void 0:i[Ke]),"data-sonner-toast":"","data-rich-colors":(s=v.richColors)!=null?s:U,"data-styled":!(v.jsx||v.unstyled||C),"data-mounted":te,"data-promise":!!v.promise,"data-removed":xe,"data-visible":ni,"data-y-position":qn,"data-x-position":Lr,"data-index":I,"data-front":Ir,"data-swiping":Te,"data-dismissible":zt,"data-type":Ke,"data-invert":os,"data-swipe-out":Ae,"data-expanded":!!(D||ce&&te),style:{"--index":I,"--toasts-before":I,"--z-index":j.length-I,"--offset":`${xe?Pn:mn.current}px`,"--initial-height":ce?"auto":`${Bt}px`,...G,...v.style},onPointerDown:ye=>{to||!zt||(Nr.current=new Date,Tn(mn.current),ye.target.setPointerCapture(ye.pointerId),ye.target.tagName!=="BUTTON"&&(ke(!0),Nn.current={x:ye.clientX,y:ye.clientY}))},onPointerUp:()=>{var ye,Oe,Me,lt;if(Ae||!zt)return;Nn.current=null;let ct=Number(((ye=Jt.current)==null?void 0:ye.style.getPropertyValue("--swipe-amount").replace("px",""))||0),Dr=new Date().getTime()-((Oe=Nr.current)==null?void 0:Oe.getTime()),ss=Math.abs(ct)/Dr;if(Math.abs(ct)>=Mb||ss>.11){Tn(mn.current),(Me=v.onDismiss)==null||Me.call(v,v),Ht(),Ye(!0);return}(lt=Jt.current)==null||lt.style.setProperty("--swipe-amount","0px"),ke(!1)},onPointerMove:ye=>{var Oe;if(!Nn.current||!zt)return;let Me=ye.clientY-Nn.current.y,lt=ye.clientX-Nn.current.x,ct=(qn==="top"?Math.min:Math.max)(0,Me),Dr=ye.pointerType==="touch"?10:2;Math.abs(ct)>Dr?(Oe=Jt.current)==null||Oe.style.setProperty("--swipe-amount",`${Me}px`):Math.abs(lt)>Dr&&(Nn.current=null)}},rs&&!v.jsx?Z.createElement("button",{"aria-label":X,"data-disabled":to,"data-close-button":!0,onClick:to||!zt?()=>{}:()=>{var ye;Ht(),(ye=v.onDismiss)==null||ye.call(v,v)},className:_(F==null?void 0:F.closeButton,(l=v==null?void 0:v.classNames)==null?void 0:l.closeButton)},Z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Z.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Z.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,v.jsx||Z.isValidElement(v.title)?v.jsx||v.title:Z.createElement(Z.Fragment,null,Ke||v.icon||v.promise?Z.createElement("div",{"data-icon":"",className:_(F==null?void 0:F.icon,(u=v==null?void 0:v.classNames)==null?void 0:u.icon)},v.promise||v.type==="loading"&&!v.icon?v.icon||no():null,v.type!=="loading"?v.icon||(Q==null?void 0:Q[Ke])||pb(Ke):null):null,Z.createElement("div",{"data-content":"",className:_(F==null?void 0:F.content,(f=v==null?void 0:v.classNames)==null?void 0:f.content)},Z.createElement("div",{"data-title":"",className:_(F==null?void 0:F.title,(p=v==null?void 0:v.classNames)==null?void 0:p.title)},v.title),v.description?Z.createElement("div",{"data-description":"",className:_(ee,Ji,F==null?void 0:F.description,(h=v==null?void 0:v.classNames)==null?void 0:h.description)},v.description):null),Z.isValidElement(v.cancel)?v.cancel:v.cancel&&va(v.cancel)?Z.createElement("button",{"data-button":!0,"data-cancel":!0,style:v.cancelButtonStyle||V,onClick:ye=>{var Oe,Me;va(v.cancel)&&zt&&((Me=(Oe=v.cancel).onClick)==null||Me.call(Oe,ye),Ht())},className:_(F==null?void 0:F.cancelButton,(g=v==null?void 0:v.classNames)==null?void 0:g.cancelButton)},v.cancel.label):null,Z.isValidElement(v.action)?v.action:v.action&&va(v.action)?Z.createElement("button",{"data-button":!0,"data-action":!0,style:v.actionButtonStyle||Y,onClick:ye=>{var Oe,Me;va(v.action)&&(ye.defaultPrevented||((Me=(Oe=v.action).onClick)==null||Me.call(Oe,ye),Ht()))},className:_(F==null?void 0:F.actionButton,(w=v==null?void 0:v.classNames)==null?void 0:w.actionButton)},v.action.label):null))};function kp(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}var Fb=n=>{let{invert:r,position:i="bottom-right",hotkey:s=["altKey","KeyT"],expand:l,closeButton:u,className:f,offset:p,theme:h="light",richColors:g,duration:w,style:b,visibleToasts:v=Tb,toastOptions:C,dir:E=kp(),gap:k=jb,loadingIcon:S,icons:T,containerAriaLabel:I="Notifications",pauseWhenPageIsHidden:j,cn:D=Db}=n,[$,U]=Z.useState([]),z=Z.useMemo(()=>Array.from(new Set([i].concat($.filter(P=>P.position).map(P=>P.position)))),[$,i]),[G,V]=Z.useState([]),[Y,ie]=Z.useState(!1),[ee,pe]=Z.useState(!1),[J,ge]=Z.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),le=Z.useRef(null),ce=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),F=Z.useRef(null),Q=Z.useRef(!1),X=Z.useCallback(P=>{var _;(_=$.find(te=>te.id===P.id))!=null&&_.delete||Dt.dismiss(P.id),U(te=>te.filter(({id:de})=>de!==P.id))},[$]);return Z.useEffect(()=>Dt.subscribe(P=>{if(P.dismiss){U(_=>_.map(te=>te.id===P.id?{...te,delete:!0}:te));return}setTimeout(()=>{_u.flushSync(()=>{U(_=>{let te=_.findIndex(de=>de.id===P.id);return te!==-1?[..._.slice(0,te),{..._[te],...P},..._.slice(te+1)]:[P,..._]})})})}),[]),Z.useEffect(()=>{if(h!=="system"){ge(h);return}h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ge("dark"):ge("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:P})=>{ge(P?"dark":"light")})},[h]),Z.useEffect(()=>{$.length<=1&&ie(!1)},[$]),Z.useEffect(()=>{let P=_=>{var te,de;s.every(xe=>_[xe]||_.code===xe)&&(ie(!0),(te=le.current)==null||te.focus()),_.code==="Escape"&&(document.activeElement===le.current||(de=le.current)!=null&&de.contains(document.activeElement))&&ie(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[s]),Z.useEffect(()=>{if(le.current)return()=>{F.current&&(F.current.focus({preventScroll:!0}),F.current=null,Q.current=!1)}},[le.current]),$.length?Z.createElement("section",{"aria-label":`${I} ${ce}`,tabIndex:-1},z.map((P,_)=>{var te;let[de,xe]=P.split("-");return Z.createElement("ol",{key:P,dir:E==="auto"?kp():E,tabIndex:-1,ref:le,className:f,"data-sonner-toaster":!0,"data-theme":J,"data-y-position":de,"data-x-position":xe,style:{"--front-toast-height":`${((te=G[0])==null?void 0:te.height)||0}px`,"--offset":typeof p=="number"?`${p}px`:p||Ab,"--width":`${Ib}px`,"--gap":`${k}px`,...b},onBlur:ue=>{Q.current&&!ue.currentTarget.contains(ue.relatedTarget)&&(Q.current=!1,F.current&&(F.current.focus({preventScroll:!0}),F.current=null))},onFocus:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||Q.current||(Q.current=!0,F.current=ue.relatedTarget)},onMouseEnter:()=>ie(!0),onMouseMove:()=>ie(!0),onMouseLeave:()=>{ee||ie(!1)},onPointerDown:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||pe(!0)},onPointerUp:()=>pe(!1)},$.filter(ue=>!ue.position&&_===0||ue.position===P).map((ue,Te)=>{var ke,Ae;return Z.createElement(Ob,{key:ue.id,icons:T,index:Te,toast:ue,defaultRichColors:g,duration:(ke=C==null?void 0:C.duration)!=null?ke:w,className:C==null?void 0:C.className,descriptionClassName:C==null?void 0:C.descriptionClassName,invert:r,visibleToasts:v,closeButton:(Ae=C==null?void 0:C.closeButton)!=null?Ae:u,interacting:ee,position:P,style:C==null?void 0:C.style,unstyled:C==null?void 0:C.unstyled,classNames:C==null?void 0:C.classNames,cancelButtonStyle:C==null?void 0:C.cancelButtonStyle,actionButtonStyle:C==null?void 0:C.actionButtonStyle,removeToast:X,toasts:$.filter(Ye=>Ye.position==ue.position),heights:G.filter(Ye=>Ye.position==ue.position),setHeights:V,expandByDefault:l,gap:k,loadingIcon:S,expanded:Y,pauseWhenPageIsHidden:j,cn:D})}))})):null};const $b=({...n})=>{const{theme:r="system"}=mb();return c.jsx(Fb,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n})};function _b(n,r=[]){let i=[];function s(u,f){const p=y.createContext(f),h=i.length;i=[...i,f];const g=b=>{var T;const{scope:v,children:C,...E}=b,k=((T=v==null?void 0:v[n])==null?void 0:T[h])||p,S=y.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:S,children:C})};g.displayName=u+"Provider";function w(b,v){var k;const C=((k=v==null?void 0:v[n])==null?void 0:k[h])||p,E=y.useContext(C);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[g,w]}const l=()=>{const u=i.map(f=>y.createContext(f));return function(p){const h=(p==null?void 0:p[n])||u;return y.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return l.scopeName=n,[s,Bb(l,...r)]}function Bb(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((p,{useScope:h,scopeName:g})=>{const b=h(u)[`__scope${g}`];return{...p,...b}},{});return y.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var zb="DismissableLayer",Eu="dismissableLayer.update",Hb="dismissableLayer.pointerDownOutside",Wb="dismissableLayer.focusOutside",Sp,mg=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Yu=y.forwardRef((n,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:f,onDismiss:p,...h}=n,g=y.useContext(mg),[w,b]=y.useState(null),v=(w==null?void 0:w.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,C]=y.useState({}),E=He(r,z=>b(z)),k=Array.from(g.layers),[S]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),T=k.indexOf(S),I=w?k.indexOf(w):-1,j=g.layersWithOutsidePointerEventsDisabled.size>0,D=I>=T,$=Vb(z=>{const G=z.target,V=[...g.branches].some(Y=>Y.contains(G));!D||V||(l==null||l(z),f==null||f(z),z.defaultPrevented||p==null||p())},v),U=Yb(z=>{const G=z.target;[...g.branches].some(Y=>Y.contains(G))||(u==null||u(z),f==null||f(z),z.defaultPrevented||p==null||p())},v);return kh(z=>{I===g.layers.size-1&&(s==null||s(z),!z.defaultPrevented&&p&&(z.preventDefault(),p()))},v),y.useEffect(()=>{if(w)return i&&(g.layersWithOutsidePointerEventsDisabled.size===0&&(Sp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(w)),g.layers.add(w),Cp(),()=>{i&&g.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Sp)}},[w,v,i,g]),y.useEffect(()=>()=>{w&&(g.layers.delete(w),g.layersWithOutsidePointerEventsDisabled.delete(w),Cp())},[w,g]),y.useEffect(()=>{const z=()=>C({});return document.addEventListener(Eu,z),()=>document.removeEventListener(Eu,z)},[]),c.jsx(De.div,{...h,ref:E,style:{pointerEvents:j?D?"auto":"none":void 0,...n.style},onFocusCapture:Pe(n.onFocusCapture,U.onFocusCapture),onBlurCapture:Pe(n.onBlurCapture,U.onBlurCapture),onPointerDownCapture:Pe(n.onPointerDownCapture,$.onPointerDownCapture)})});Yu.displayName=zb;var Ub="DismissableLayerBranch",qb=y.forwardRef((n,r)=>{const i=y.useContext(mg),s=y.useRef(null),l=He(r,s);return y.useEffect(()=>{const u=s.current;if(u)return i.branches.add(u),()=>{i.branches.delete(u)}},[i.branches]),c.jsx(De.div,{...n,ref:l})});qb.displayName=Ub;function Vb(n,r=globalThis==null?void 0:globalThis.document){const i=Ze(n),s=y.useRef(!1),l=y.useRef(()=>{});return y.useEffect(()=>{const u=p=>{if(p.target&&!s.current){let h=function(){pg(Hb,i,g,{discrete:!0})};const g={originalEvent:p};p.pointerType==="touch"?(r.removeEventListener("click",l.current),l.current=h,r.addEventListener("click",l.current,{once:!0})):h()}else r.removeEventListener("click",l.current);s.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",u),r.removeEventListener("click",l.current)}},[r,i]),{onPointerDownCapture:()=>s.current=!0}}function Yb(n,r=globalThis==null?void 0:globalThis.document){const i=Ze(n),s=y.useRef(!1);return y.useEffect(()=>{const l=u=>{u.target&&!s.current&&pg(Wb,i,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",l),()=>r.removeEventListener("focusin",l)},[r,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Cp(){const n=new CustomEvent(Eu);document.dispatchEvent(n)}function pg(n,r,i,{discrete:s}){const l=i.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:i});r&&l.addEventListener(n,r,{once:!0}),s?Bu(l,u):l.dispatchEvent(u)}var Gb=xh.useId||(()=>{}),Qb=0;function tu(n){const[r,i]=y.useState(Gb());return At(()=>{i(s=>s??String(Qb++))},[n]),n||(r?`radix-${r}`:"")}const Kb=["top","right","bottom","left"],Cr=Math.min,Ot=Math.max,Da=Math.round,xa=Math.floor,Er=n=>({x:n,y:n}),Xb={left:"right",right:"left",bottom:"top",top:"bottom"},Jb={start:"end",end:"start"};function Ru(n,r,i){return Ot(n,Cr(r,i))}function zn(n,r){return typeof n=="function"?n(r):n}function Hn(n){return n.split("-")[0]}function Gi(n){return n.split("-")[1]}function Gu(n){return n==="x"?"y":"x"}function Qu(n){return n==="y"?"height":"width"}function Rr(n){return["top","bottom"].includes(Hn(n))?"y":"x"}function Ku(n){return Gu(Rr(n))}function Zb(n,r,i){i===void 0&&(i=!1);const s=Gi(n),l=Ku(n),u=Qu(l);let f=l==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return r.reference[u]>r.floating[u]&&(f=Oa(f)),[f,Oa(f)]}function e1(n){const r=Oa(n);return[Pu(n),r,Pu(r)]}function Pu(n){return n.replace(/start|end/g,r=>Jb[r])}function t1(n,r,i){const s=["left","right"],l=["right","left"],u=["top","bottom"],f=["bottom","top"];switch(n){case"top":case"bottom":return i?r?l:s:r?s:l;case"left":case"right":return r?u:f;default:return[]}}function n1(n,r,i,s){const l=Gi(n);let u=t1(Hn(n),i==="start",s);return l&&(u=u.map(f=>f+"-"+l),r&&(u=u.concat(u.map(Pu)))),u}function Oa(n){return n.replace(/left|right|bottom|top/g,r=>Xb[r])}function r1(n){return{top:0,right:0,bottom:0,left:0,...n}}function hg(n){return typeof n!="number"?r1(n):{top:n,right:n,bottom:n,left:n}}function Fa(n){const{x:r,y:i,width:s,height:l}=n;return{width:s,height:l,top:i,left:r,right:r+s,bottom:i+l,x:r,y:i}}function Ep(n,r,i){let{reference:s,floating:l}=n;const u=Rr(r),f=Ku(r),p=Qu(f),h=Hn(r),g=u==="y",w=s.x+s.width/2-l.width/2,b=s.y+s.height/2-l.height/2,v=s[p]/2-l[p]/2;let C;switch(h){case"top":C={x:w,y:s.y-l.height};break;case"bottom":C={x:w,y:s.y+s.height};break;case"right":C={x:s.x+s.width,y:b};break;case"left":C={x:s.x-l.width,y:b};break;default:C={x:s.x,y:s.y}}switch(Gi(r)){case"start":C[f]-=v*(i&&g?-1:1);break;case"end":C[f]+=v*(i&&g?-1:1);break}return C}const i1=async(n,r,i)=>{const{placement:s="bottom",strategy:l="absolute",middleware:u=[],platform:f}=i,p=u.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(r));let g=await f.getElementRects({reference:n,floating:r,strategy:l}),{x:w,y:b}=Ep(g,s,h),v=s,C={},E=0;for(let k=0;k<p.length;k++){const{name:S,fn:T}=p[k],{x:I,y:j,data:D,reset:$}=await T({x:w,y:b,initialPlacement:s,placement:v,strategy:l,middlewareData:C,rects:g,platform:f,elements:{reference:n,floating:r}});w=I??w,b=j??b,C={...C,[S]:{...C[S],...D}},$&&E<=50&&(E++,typeof $=="object"&&($.placement&&(v=$.placement),$.rects&&(g=$.rects===!0?await f.getElementRects({reference:n,floating:r,strategy:l}):$.rects),{x:w,y:b}=Ep(g,v,h)),k=-1)}return{x:w,y:b,placement:v,strategy:l,middlewareData:C}};async function Uo(n,r){var i;r===void 0&&(r={});const{x:s,y:l,platform:u,rects:f,elements:p,strategy:h}=n,{boundary:g="clippingAncestors",rootBoundary:w="viewport",elementContext:b="floating",altBoundary:v=!1,padding:C=0}=zn(r,n),E=hg(C),S=p[v?b==="floating"?"reference":"floating":b],T=Fa(await u.getClippingRect({element:(i=await(u.isElement==null?void 0:u.isElement(S)))==null||i?S:S.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:g,rootBoundary:w,strategy:h})),I=b==="floating"?{x:s,y:l,width:f.floating.width,height:f.floating.height}:f.reference,j=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),D=await(u.isElement==null?void 0:u.isElement(j))?await(u.getScale==null?void 0:u.getScale(j))||{x:1,y:1}:{x:1,y:1},$=Fa(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:I,offsetParent:j,strategy:h}):I);return{top:(T.top-$.top+E.top)/D.y,bottom:($.bottom-T.bottom+E.bottom)/D.y,left:(T.left-$.left+E.left)/D.x,right:($.right-T.right+E.right)/D.x}}const o1=n=>({name:"arrow",options:n,async fn(r){const{x:i,y:s,placement:l,rects:u,platform:f,elements:p,middlewareData:h}=r,{element:g,padding:w=0}=zn(n,r)||{};if(g==null)return{};const b=hg(w),v={x:i,y:s},C=Ku(l),E=Qu(C),k=await f.getDimensions(g),S=C==="y",T=S?"top":"left",I=S?"bottom":"right",j=S?"clientHeight":"clientWidth",D=u.reference[E]+u.reference[C]-v[C]-u.floating[E],$=v[C]-u.reference[C],U=await(f.getOffsetParent==null?void 0:f.getOffsetParent(g));let z=U?U[j]:0;(!z||!await(f.isElement==null?void 0:f.isElement(U)))&&(z=p.floating[j]||u.floating[E]);const G=D/2-$/2,V=z/2-k[E]/2-1,Y=Cr(b[T],V),ie=Cr(b[I],V),ee=Y,pe=z-k[E]-ie,J=z/2-k[E]/2+G,ge=Ru(ee,J,pe),le=!h.arrow&&Gi(l)!=null&&J!==ge&&u.reference[E]/2-(J<ee?Y:ie)-k[E]/2<0,ce=le?J<ee?J-ee:J-pe:0;return{[C]:v[C]+ce,data:{[C]:ge,centerOffset:J-ge-ce,...le&&{alignmentOffset:ce}},reset:le}}}),s1=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var i,s;const{placement:l,middlewareData:u,rects:f,initialPlacement:p,platform:h,elements:g}=r,{mainAxis:w=!0,crossAxis:b=!0,fallbackPlacements:v,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:k=!0,...S}=zn(n,r);if((i=u.arrow)!=null&&i.alignmentOffset)return{};const T=Hn(l),I=Rr(p),j=Hn(p)===p,D=await(h.isRTL==null?void 0:h.isRTL(g.floating)),$=v||(j||!k?[Oa(p)]:e1(p)),U=E!=="none";!v&&U&&$.push(...n1(p,k,E,D));const z=[p,...$],G=await Uo(r,S),V=[];let Y=((s=u.flip)==null?void 0:s.overflows)||[];if(w&&V.push(G[T]),b){const J=Zb(l,f,D);V.push(G[J[0]],G[J[1]])}if(Y=[...Y,{placement:l,overflows:V}],!V.every(J=>J<=0)){var ie,ee;const J=(((ie=u.flip)==null?void 0:ie.index)||0)+1,ge=z[J];if(ge)return{data:{index:J,overflows:Y},reset:{placement:ge}};let le=(ee=Y.filter(ce=>ce.overflows[0]<=0).sort((ce,F)=>ce.overflows[1]-F.overflows[1])[0])==null?void 0:ee.placement;if(!le)switch(C){case"bestFit":{var pe;const ce=(pe=Y.filter(F=>{if(U){const Q=Rr(F.placement);return Q===I||Q==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(Q=>Q>0).reduce((Q,X)=>Q+X,0)]).sort((F,Q)=>F[1]-Q[1])[0])==null?void 0:pe[0];ce&&(le=ce);break}case"initialPlacement":le=p;break}if(l!==le)return{reset:{placement:le}}}return{}}}};function Rp(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function Pp(n){return Kb.some(r=>n[r]>=0)}const a1=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:i}=r,{strategy:s="referenceHidden",...l}=zn(n,r);switch(s){case"referenceHidden":{const u=await Uo(r,{...l,elementContext:"reference"}),f=Rp(u,i.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:Pp(f)}}}case"escaped":{const u=await Uo(r,{...l,altBoundary:!0}),f=Rp(u,i.floating);return{data:{escapedOffsets:f,escaped:Pp(f)}}}default:return{}}}}};async function l1(n,r){const{placement:i,platform:s,elements:l}=n,u=await(s.isRTL==null?void 0:s.isRTL(l.floating)),f=Hn(i),p=Gi(i),h=Rr(i)==="y",g=["left","top"].includes(f)?-1:1,w=u&&h?-1:1,b=zn(r,n);let{mainAxis:v,crossAxis:C,alignmentAxis:E}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return p&&typeof E=="number"&&(C=p==="end"?E*-1:E),h?{x:C*w,y:v*g}:{x:v*g,y:C*w}}const c1=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var i,s;const{x:l,y:u,placement:f,middlewareData:p}=r,h=await l1(r,n);return f===((i=p.offset)==null?void 0:i.placement)&&(s=p.arrow)!=null&&s.alignmentOffset?{}:{x:l+h.x,y:u+h.y,data:{...h,placement:f}}}}},u1=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:i,y:s,placement:l}=r,{mainAxis:u=!0,crossAxis:f=!1,limiter:p={fn:S=>{let{x:T,y:I}=S;return{x:T,y:I}}},...h}=zn(n,r),g={x:i,y:s},w=await Uo(r,h),b=Rr(Hn(l)),v=Gu(b);let C=g[v],E=g[b];if(u){const S=v==="y"?"top":"left",T=v==="y"?"bottom":"right",I=C+w[S],j=C-w[T];C=Ru(I,C,j)}if(f){const S=b==="y"?"top":"left",T=b==="y"?"bottom":"right",I=E+w[S],j=E-w[T];E=Ru(I,E,j)}const k=p.fn({...r,[v]:C,[b]:E});return{...k,data:{x:k.x-i,y:k.y-s,enabled:{[v]:u,[b]:f}}}}}},d1=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:i,y:s,placement:l,rects:u,middlewareData:f}=r,{offset:p=0,mainAxis:h=!0,crossAxis:g=!0}=zn(n,r),w={x:i,y:s},b=Rr(l),v=Gu(b);let C=w[v],E=w[b];const k=zn(p,r),S=typeof k=="number"?{mainAxis:k,crossAxis:0}:{mainAxis:0,crossAxis:0,...k};if(h){const j=v==="y"?"height":"width",D=u.reference[v]-u.floating[j]+S.mainAxis,$=u.reference[v]+u.reference[j]-S.mainAxis;C<D?C=D:C>$&&(C=$)}if(g){var T,I;const j=v==="y"?"width":"height",D=["top","left"].includes(Hn(l)),$=u.reference[b]-u.floating[j]+(D&&((T=f.offset)==null?void 0:T[b])||0)+(D?0:S.crossAxis),U=u.reference[b]+u.reference[j]+(D?0:((I=f.offset)==null?void 0:I[b])||0)-(D?S.crossAxis:0);E<$?E=$:E>U&&(E=U)}return{[v]:C,[b]:E}}}},f1=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var i,s;const{placement:l,rects:u,platform:f,elements:p}=r,{apply:h=()=>{},...g}=zn(n,r),w=await Uo(r,g),b=Hn(l),v=Gi(l),C=Rr(l)==="y",{width:E,height:k}=u.floating;let S,T;b==="top"||b==="bottom"?(S=b,T=v===(await(f.isRTL==null?void 0:f.isRTL(p.floating))?"start":"end")?"left":"right"):(T=b,S=v==="end"?"top":"bottom");const I=k-w.top-w.bottom,j=E-w.left-w.right,D=Cr(k-w[S],I),$=Cr(E-w[T],j),U=!r.middlewareData.shift;let z=D,G=$;if((i=r.middlewareData.shift)!=null&&i.enabled.x&&(G=j),(s=r.middlewareData.shift)!=null&&s.enabled.y&&(z=I),U&&!v){const Y=Ot(w.left,0),ie=Ot(w.right,0),ee=Ot(w.top,0),pe=Ot(w.bottom,0);C?G=E-2*(Y!==0||ie!==0?Y+ie:Ot(w.left,w.right)):z=k-2*(ee!==0||pe!==0?ee+pe:Ot(w.top,w.bottom))}await h({...r,availableWidth:G,availableHeight:z});const V=await f.getDimensions(p.floating);return E!==V.width||k!==V.height?{reset:{rects:!0}}:{}}}};function Qa(){return typeof window<"u"}function Qi(n){return gg(n)?(n.nodeName||"").toLowerCase():"#document"}function Ft(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function En(n){var r;return(r=(gg(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function gg(n){return Qa()?n instanceof Node||n instanceof Ft(n).Node:!1}function un(n){return Qa()?n instanceof Element||n instanceof Ft(n).Element:!1}function Sn(n){return Qa()?n instanceof HTMLElement||n instanceof Ft(n).HTMLElement:!1}function Tp(n){return!Qa()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ft(n).ShadowRoot}function ts(n){const{overflow:r,overflowX:i,overflowY:s,display:l}=dn(n);return/auto|scroll|overlay|hidden|clip/.test(r+s+i)&&!["inline","contents"].includes(l)}function m1(n){return["table","td","th"].includes(Qi(n))}function Ka(n){return[":popover-open",":modal"].some(r=>{try{return n.matches(r)}catch{return!1}})}function Xu(n){const r=Ju(),i=un(n)?dn(n):n;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!r&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!r&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function p1(n){let r=Pr(n);for(;Sn(r)&&!Wi(r);){if(Xu(r))return r;if(Ka(r))return null;r=Pr(r)}return null}function Ju(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Wi(n){return["html","body","#document"].includes(Qi(n))}function dn(n){return Ft(n).getComputedStyle(n)}function Xa(n){return un(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Pr(n){if(Qi(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Tp(n)&&n.host||En(n);return Tp(r)?r.host:r}function yg(n){const r=Pr(n);return Wi(r)?n.ownerDocument?n.ownerDocument.body:n.body:Sn(r)&&ts(r)?r:yg(r)}function qo(n,r,i){var s;r===void 0&&(r=[]),i===void 0&&(i=!0);const l=yg(n),u=l===((s=n.ownerDocument)==null?void 0:s.body),f=Ft(l);if(u){const p=Tu(f);return r.concat(f,f.visualViewport||[],ts(l)?l:[],p&&i?qo(p):[])}return r.concat(l,qo(l,[],i))}function Tu(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function vg(n){const r=dn(n);let i=parseFloat(r.width)||0,s=parseFloat(r.height)||0;const l=Sn(n),u=l?n.offsetWidth:i,f=l?n.offsetHeight:s,p=Da(i)!==u||Da(s)!==f;return p&&(i=u,s=f),{width:i,height:s,$:p}}function Zu(n){return un(n)?n:n.contextElement}function Ni(n){const r=Zu(n);if(!Sn(r))return Er(1);const i=r.getBoundingClientRect(),{width:s,height:l,$:u}=vg(r);let f=(u?Da(i.width):i.width)/s,p=(u?Da(i.height):i.height)/l;return(!f||!Number.isFinite(f))&&(f=1),(!p||!Number.isFinite(p))&&(p=1),{x:f,y:p}}const h1=Er(0);function xg(n){const r=Ft(n);return!Ju()||!r.visualViewport?h1:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function g1(n,r,i){return r===void 0&&(r=!1),!i||r&&i!==Ft(n)?!1:r}function Zr(n,r,i,s){r===void 0&&(r=!1),i===void 0&&(i=!1);const l=n.getBoundingClientRect(),u=Zu(n);let f=Er(1);r&&(s?un(s)&&(f=Ni(s)):f=Ni(n));const p=g1(u,i,s)?xg(u):Er(0);let h=(l.left+p.x)/f.x,g=(l.top+p.y)/f.y,w=l.width/f.x,b=l.height/f.y;if(u){const v=Ft(u),C=s&&un(s)?Ft(s):s;let E=v,k=Tu(E);for(;k&&s&&C!==E;){const S=Ni(k),T=k.getBoundingClientRect(),I=dn(k),j=T.left+(k.clientLeft+parseFloat(I.paddingLeft))*S.x,D=T.top+(k.clientTop+parseFloat(I.paddingTop))*S.y;h*=S.x,g*=S.y,w*=S.x,b*=S.y,h+=j,g+=D,E=Ft(k),k=Tu(E)}}return Fa({width:w,height:b,x:h,y:g})}function y1(n){let{elements:r,rect:i,offsetParent:s,strategy:l}=n;const u=l==="fixed",f=En(s),p=r?Ka(r.floating):!1;if(s===f||p&&u)return i;let h={scrollLeft:0,scrollTop:0},g=Er(1);const w=Er(0),b=Sn(s);if((b||!b&&!u)&&((Qi(s)!=="body"||ts(f))&&(h=Xa(s)),Sn(s))){const v=Zr(s);g=Ni(s),w.x=v.x+s.clientLeft,w.y=v.y+s.clientTop}return{width:i.width*g.x,height:i.height*g.y,x:i.x*g.x-h.scrollLeft*g.x+w.x,y:i.y*g.y-h.scrollTop*g.y+w.y}}function v1(n){return Array.from(n.getClientRects())}function Au(n,r){const i=Xa(n).scrollLeft;return r?r.left+i:Zr(En(n)).left+i}function x1(n){const r=En(n),i=Xa(n),s=n.ownerDocument.body,l=Ot(r.scrollWidth,r.clientWidth,s.scrollWidth,s.clientWidth),u=Ot(r.scrollHeight,r.clientHeight,s.scrollHeight,s.clientHeight);let f=-i.scrollLeft+Au(n);const p=-i.scrollTop;return dn(s).direction==="rtl"&&(f+=Ot(r.clientWidth,s.clientWidth)-l),{width:l,height:u,x:f,y:p}}function w1(n,r){const i=Ft(n),s=En(n),l=i.visualViewport;let u=s.clientWidth,f=s.clientHeight,p=0,h=0;if(l){u=l.width,f=l.height;const g=Ju();(!g||g&&r==="fixed")&&(p=l.offsetLeft,h=l.offsetTop)}return{width:u,height:f,x:p,y:h}}function b1(n,r){const i=Zr(n,!0,r==="fixed"),s=i.top+n.clientTop,l=i.left+n.clientLeft,u=Sn(n)?Ni(n):Er(1),f=n.clientWidth*u.x,p=n.clientHeight*u.y,h=l*u.x,g=s*u.y;return{width:f,height:p,x:h,y:g}}function Ap(n,r,i){let s;if(r==="viewport")s=w1(n,i);else if(r==="document")s=x1(En(n));else if(un(r))s=b1(r,i);else{const l=xg(n);s={...r,x:r.x-l.x,y:r.y-l.y}}return Fa(s)}function wg(n,r){const i=Pr(n);return i===r||!un(i)||Wi(i)?!1:dn(i).position==="fixed"||wg(i,r)}function k1(n,r){const i=r.get(n);if(i)return i;let s=qo(n,[],!1).filter(p=>un(p)&&Qi(p)!=="body"),l=null;const u=dn(n).position==="fixed";let f=u?Pr(n):n;for(;un(f)&&!Wi(f);){const p=dn(f),h=Xu(f);!h&&p.position==="fixed"&&(l=null),(u?!h&&!l:!h&&p.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||ts(f)&&!h&&wg(n,f))?s=s.filter(w=>w!==f):l=p,f=Pr(f)}return r.set(n,s),s}function S1(n){let{element:r,boundary:i,rootBoundary:s,strategy:l}=n;const f=[...i==="clippingAncestors"?Ka(r)?[]:k1(r,this._c):[].concat(i),s],p=f[0],h=f.reduce((g,w)=>{const b=Ap(r,w,l);return g.top=Ot(b.top,g.top),g.right=Cr(b.right,g.right),g.bottom=Cr(b.bottom,g.bottom),g.left=Ot(b.left,g.left),g},Ap(r,p,l));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function C1(n){const{width:r,height:i}=vg(n);return{width:r,height:i}}function E1(n,r,i){const s=Sn(r),l=En(r),u=i==="fixed",f=Zr(n,!0,u,r);let p={scrollLeft:0,scrollTop:0};const h=Er(0);if(s||!s&&!u)if((Qi(r)!=="body"||ts(l))&&(p=Xa(r)),s){const C=Zr(r,!0,u,r);h.x=C.x+r.clientLeft,h.y=C.y+r.clientTop}else l&&(h.x=Au(l));let g=0,w=0;if(l&&!s&&!u){const C=l.getBoundingClientRect();w=C.top+p.scrollTop,g=C.left+p.scrollLeft-Au(l,C)}const b=f.left+p.scrollLeft-h.x-g,v=f.top+p.scrollTop-h.y-w;return{x:b,y:v,width:f.width,height:f.height}}function nu(n){return dn(n).position==="static"}function Np(n,r){if(!Sn(n)||dn(n).position==="fixed")return null;if(r)return r(n);let i=n.offsetParent;return En(n)===i&&(i=i.ownerDocument.body),i}function bg(n,r){const i=Ft(n);if(Ka(n))return i;if(!Sn(n)){let l=Pr(n);for(;l&&!Wi(l);){if(un(l)&&!nu(l))return l;l=Pr(l)}return i}let s=Np(n,r);for(;s&&m1(s)&&nu(s);)s=Np(s,r);return s&&Wi(s)&&nu(s)&&!Xu(s)?i:s||p1(n)||i}const R1=async function(n){const r=this.getOffsetParent||bg,i=this.getDimensions,s=await i(n.floating);return{reference:E1(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function P1(n){return dn(n).direction==="rtl"}const T1={convertOffsetParentRelativeRectToViewportRelativeRect:y1,getDocumentElement:En,getClippingRect:S1,getOffsetParent:bg,getElementRects:R1,getClientRects:v1,getDimensions:C1,getScale:Ni,isElement:un,isRTL:P1};function A1(n,r){let i=null,s;const l=En(n);function u(){var p;clearTimeout(s),(p=i)==null||p.disconnect(),i=null}function f(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),u();const{left:g,top:w,width:b,height:v}=n.getBoundingClientRect();if(p||r(),!b||!v)return;const C=xa(w),E=xa(l.clientWidth-(g+b)),k=xa(l.clientHeight-(w+v)),S=xa(g),I={rootMargin:-C+"px "+-E+"px "+-k+"px "+-S+"px",threshold:Ot(0,Cr(1,h))||1};let j=!0;function D($){const U=$[0].intersectionRatio;if(U!==h){if(!j)return f();U?f(!1,U):s=setTimeout(()=>{f(!1,1e-7)},1e3)}j=!1}try{i=new IntersectionObserver(D,{...I,root:l.ownerDocument})}catch{i=new IntersectionObserver(D,I)}i.observe(n)}return f(!0),u}function N1(n,r,i,s){s===void 0&&(s={});const{ancestorScroll:l=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=s,g=Zu(n),w=l||u?[...g?qo(g):[],...qo(r)]:[];w.forEach(T=>{l&&T.addEventListener("scroll",i,{passive:!0}),u&&T.addEventListener("resize",i)});const b=g&&p?A1(g,i):null;let v=-1,C=null;f&&(C=new ResizeObserver(T=>{let[I]=T;I&&I.target===g&&C&&(C.unobserve(r),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var j;(j=C)==null||j.observe(r)})),i()}),g&&!h&&C.observe(g),C.observe(r));let E,k=h?Zr(n):null;h&&S();function S(){const T=Zr(n);k&&(T.x!==k.x||T.y!==k.y||T.width!==k.width||T.height!==k.height)&&i(),k=T,E=requestAnimationFrame(S)}return i(),()=>{var T;w.forEach(I=>{l&&I.removeEventListener("scroll",i),u&&I.removeEventListener("resize",i)}),b==null||b(),(T=C)==null||T.disconnect(),C=null,h&&cancelAnimationFrame(E)}}const I1=c1,j1=u1,M1=s1,L1=f1,D1=a1,Ip=o1,O1=d1,F1=(n,r,i)=>{const s=new Map,l={platform:T1,...i},u={...l.platform,_c:s};return i1(n,r,{...l,platform:u})};var Na=typeof document<"u"?y.useLayoutEffect:y.useEffect;function $a(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let i,s,l;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(i=n.length,i!==r.length)return!1;for(s=i;s--!==0;)if(!$a(n[s],r[s]))return!1;return!0}if(l=Object.keys(n),i=l.length,i!==Object.keys(r).length)return!1;for(s=i;s--!==0;)if(!{}.hasOwnProperty.call(r,l[s]))return!1;for(s=i;s--!==0;){const u=l[s];if(!(u==="_owner"&&n.$$typeof)&&!$a(n[u],r[u]))return!1}return!0}return n!==n&&r!==r}function kg(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function jp(n,r){const i=kg(n);return Math.round(r*i)/i}function ru(n){const r=y.useRef(n);return Na(()=>{r.current=n}),r}function $1(n){n===void 0&&(n={});const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:l,elements:{reference:u,floating:f}={},transform:p=!0,whileElementsMounted:h,open:g}=n,[w,b]=y.useState({x:0,y:0,strategy:i,placement:r,middlewareData:{},isPositioned:!1}),[v,C]=y.useState(s);$a(v,s)||C(s);const[E,k]=y.useState(null),[S,T]=y.useState(null),I=y.useCallback(F=>{F!==U.current&&(U.current=F,k(F))},[]),j=y.useCallback(F=>{F!==z.current&&(z.current=F,T(F))},[]),D=u||E,$=f||S,U=y.useRef(null),z=y.useRef(null),G=y.useRef(w),V=h!=null,Y=ru(h),ie=ru(l),ee=ru(g),pe=y.useCallback(()=>{if(!U.current||!z.current)return;const F={placement:r,strategy:i,middleware:v};ie.current&&(F.platform=ie.current),F1(U.current,z.current,F).then(Q=>{const X={...Q,isPositioned:ee.current!==!1};J.current&&!$a(G.current,X)&&(G.current=X,Zo.flushSync(()=>{b(X)}))})},[v,r,i,ie,ee]);Na(()=>{g===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,b(F=>({...F,isPositioned:!1})))},[g]);const J=y.useRef(!1);Na(()=>(J.current=!0,()=>{J.current=!1}),[]),Na(()=>{if(D&&(U.current=D),$&&(z.current=$),D&&$){if(Y.current)return Y.current(D,$,pe);pe()}},[D,$,pe,Y,V]);const ge=y.useMemo(()=>({reference:U,floating:z,setReference:I,setFloating:j}),[I,j]),le=y.useMemo(()=>({reference:D,floating:$}),[D,$]),ce=y.useMemo(()=>{const F={position:i,left:0,top:0};if(!le.floating)return F;const Q=jp(le.floating,w.x),X=jp(le.floating,w.y);return p?{...F,transform:"translate("+Q+"px, "+X+"px)",...kg(le.floating)>=1.5&&{willChange:"transform"}}:{position:i,left:Q,top:X}},[i,p,le.floating,w.x,w.y]);return y.useMemo(()=>({...w,update:pe,refs:ge,elements:le,floatingStyles:ce}),[w,pe,ge,le,ce])}const _1=n=>{function r(i){return{}.hasOwnProperty.call(i,"current")}return{name:"arrow",options:n,fn(i){const{element:s,padding:l}=typeof n=="function"?n(i):n;return s&&r(s)?s.current!=null?Ip({element:s.current,padding:l}).fn(i):{}:s?Ip({element:s,padding:l}).fn(i):{}}}},B1=(n,r)=>({...I1(n),options:[n,r]}),z1=(n,r)=>({...j1(n),options:[n,r]}),H1=(n,r)=>({...O1(n),options:[n,r]}),W1=(n,r)=>({...M1(n),options:[n,r]}),U1=(n,r)=>({...L1(n),options:[n,r]}),q1=(n,r)=>({...D1(n),options:[n,r]}),V1=(n,r)=>({..._1(n),options:[n,r]});var Y1="Arrow",Sg=y.forwardRef((n,r)=>{const{children:i,width:s=10,height:l=5,...u}=n;return c.jsx(De.svg,{...u,ref:r,width:s,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?i:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});Sg.displayName=Y1;var G1=Sg;function Q1(n){const[r,i]=y.useState(void 0);return At(()=>{if(n){i({width:n.offsetWidth,height:n.offsetHeight});const s=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const u=l[0];let f,p;if("borderBoxSize"in u){const h=u.borderBoxSize,g=Array.isArray(h)?h[0]:h;f=g.inlineSize,p=g.blockSize}else f=n.offsetWidth,p=n.offsetHeight;i({width:f,height:p})});return s.observe(n,{box:"border-box"}),()=>s.unobserve(n)}else i(void 0)},[n]),r}var Cg="Popper",[Eg,Rg]=es(Cg),[cR,Pg]=Eg(Cg),Tg="PopperAnchor",Ag=y.forwardRef((n,r)=>{const{__scopePopper:i,virtualRef:s,...l}=n,u=Pg(Tg,i),f=y.useRef(null),p=He(r,f);return y.useEffect(()=>{u.onAnchorChange((s==null?void 0:s.current)||f.current)}),s?null:c.jsx(De.div,{...l,ref:p})});Ag.displayName=Tg;var ed="PopperContent",[K1,X1]=Eg(ed),Ng=y.forwardRef((n,r)=>{var Te,ke,Ae,Ye,Pn,Tn;const{__scopePopper:i,side:s="bottom",sideOffset:l=0,align:u="center",alignOffset:f=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:g=[],collisionPadding:w=0,sticky:b="partial",hideWhenDetached:v=!1,updatePositionStrategy:C="optimized",onPlaced:E,...k}=n,S=Pg(ed,i),[T,I]=y.useState(null),j=He(r,Bt=>I(Bt)),[D,$]=y.useState(null),U=Q1(D),z=(U==null?void 0:U.width)??0,G=(U==null?void 0:U.height)??0,V=s+(u!=="center"?"-"+u:""),Y=typeof w=="number"?w:{top:0,right:0,bottom:0,left:0,...w},ie=Array.isArray(g)?g:[g],ee=ie.length>0,pe={padding:Y,boundary:ie.filter(Z1),altBoundary:ee},{refs:J,floatingStyles:ge,placement:le,isPositioned:ce,middlewareData:F}=$1({strategy:"fixed",placement:V,whileElementsMounted:(...Bt)=>N1(...Bt,{animationFrame:C==="always"}),elements:{reference:S.anchor},middleware:[B1({mainAxis:l+G,alignmentAxis:f}),h&&z1({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?H1():void 0,...pe}),h&&W1({...pe}),U1({...pe,apply:({elements:Bt,rects:An,availableWidth:Nr,availableHeight:Jt})=>{const{width:Ir,height:ni}=An.reference,Ke=Bt.floating.style;Ke.setProperty("--radix-popper-available-width",`${Nr}px`),Ke.setProperty("--radix-popper-available-height",`${Jt}px`),Ke.setProperty("--radix-popper-anchor-width",`${Ir}px`),Ke.setProperty("--radix-popper-anchor-height",`${ni}px`)}}),D&&V1({element:D,padding:p}),ek({arrowWidth:z,arrowHeight:G}),v&&q1({strategy:"referenceHidden",...pe})]}),[Q,X]=Mg(le),P=Ze(E);At(()=>{ce&&(P==null||P())},[ce,P]);const _=(Te=F.arrow)==null?void 0:Te.x,te=(ke=F.arrow)==null?void 0:ke.y,de=((Ae=F.arrow)==null?void 0:Ae.centerOffset)!==0,[xe,ue]=y.useState();return At(()=>{T&&ue(window.getComputedStyle(T).zIndex)},[T]),c.jsx("div",{ref:J.setFloating,"data-radix-popper-content-wrapper":"",style:{...ge,transform:ce?ge.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:xe,"--radix-popper-transform-origin":[(Ye=F.transformOrigin)==null?void 0:Ye.x,(Pn=F.transformOrigin)==null?void 0:Pn.y].join(" "),...((Tn=F.hide)==null?void 0:Tn.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:c.jsx(K1,{scope:i,placedSide:Q,onArrowChange:$,arrowX:_,arrowY:te,shouldHideArrow:de,children:c.jsx(De.div,{"data-side":Q,"data-align":X,...k,ref:j,style:{...k.style,animation:ce?void 0:"none"}})})})});Ng.displayName=ed;var Ig="PopperArrow",J1={top:"bottom",right:"left",bottom:"top",left:"right"},jg=y.forwardRef(function(r,i){const{__scopePopper:s,...l}=r,u=X1(Ig,s),f=J1[u.placedSide];return c.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:c.jsx(G1,{...l,ref:i,style:{...l.style,display:"block"}})})});jg.displayName=Ig;function Z1(n){return n!==null}var ek=n=>({name:"transformOrigin",options:n,fn(r){var S,T,I;const{placement:i,rects:s,middlewareData:l}=r,f=((S=l.arrow)==null?void 0:S.centerOffset)!==0,p=f?0:n.arrowWidth,h=f?0:n.arrowHeight,[g,w]=Mg(i),b={start:"0%",center:"50%",end:"100%"}[w],v=(((T=l.arrow)==null?void 0:T.x)??0)+p/2,C=(((I=l.arrow)==null?void 0:I.y)??0)+h/2;let E="",k="";return g==="bottom"?(E=f?b:`${v}px`,k=`${-h}px`):g==="top"?(E=f?b:`${v}px`,k=`${s.floating.height+h}px`):g==="right"?(E=`${-h}px`,k=f?b:`${C}px`):g==="left"&&(E=`${s.floating.width+h}px`,k=f?b:`${C}px`),{data:{x:E,y:k}}}});function Mg(n){const[r,i="center"]=n.split("-");return[r,i]}var tk=Ag,nk=Ng,rk=jg,ik="Portal",Lg=y.forwardRef((n,r)=>{var p;const{container:i,...s}=n,[l,u]=y.useState(!1);At(()=>u(!0),[]);const f=i||l&&((p=globalThis==null?void 0:globalThis.document)==null?void 0:p.body);return f?_u.createPortal(c.jsx(De.div,{...s,ref:r}),f):null});Lg.displayName=ik;function ok(n,r){return y.useReducer((i,s)=>r[i][s]??i,n)}var Dg=n=>{const{present:r,children:i}=n,s=sk(r),l=typeof i=="function"?i({present:s.isPresent}):y.Children.only(i),u=He(s.ref,ak(l));return typeof i=="function"||s.isPresent?y.cloneElement(l,{ref:u}):null};Dg.displayName="Presence";function sk(n){const[r,i]=y.useState(),s=y.useRef({}),l=y.useRef(n),u=y.useRef("none"),f=n?"mounted":"unmounted",[p,h]=ok(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const g=wa(s.current);u.current=p==="mounted"?g:"none"},[p]),At(()=>{const g=s.current,w=l.current;if(w!==n){const v=u.current,C=wa(g);n?h("MOUNT"):C==="none"||(g==null?void 0:g.display)==="none"?h("UNMOUNT"):h(w&&v!==C?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),At(()=>{if(r){let g;const w=r.ownerDocument.defaultView??window,b=C=>{const k=wa(s.current).includes(C.animationName);if(C.target===r&&k&&(h("ANIMATION_END"),!l.current)){const S=r.style.animationFillMode;r.style.animationFillMode="forwards",g=w.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=S)})}},v=C=>{C.target===r&&(u.current=wa(s.current))};return r.addEventListener("animationstart",v),r.addEventListener("animationcancel",b),r.addEventListener("animationend",b),()=>{w.clearTimeout(g),r.removeEventListener("animationstart",v),r.removeEventListener("animationcancel",b),r.removeEventListener("animationend",b)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:y.useCallback(g=>{g&&(s.current=getComputedStyle(g)),i(g)},[])}}function wa(n){return(n==null?void 0:n.animationName)||"none"}function ak(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}var[Ja,uR]=_b("Tooltip",[Rg]),td=Rg(),Og="TooltipProvider",lk=700,Mp="tooltip.open",[ck,Fg]=Ja(Og),$g=n=>{const{__scopeTooltip:r,delayDuration:i=lk,skipDelayDuration:s=300,disableHoverableContent:l=!1,children:u}=n,[f,p]=y.useState(!0),h=y.useRef(!1),g=y.useRef(0);return y.useEffect(()=>{const w=g.current;return()=>window.clearTimeout(w)},[]),c.jsx(ck,{scope:r,isOpenDelayed:f,delayDuration:i,onOpen:y.useCallback(()=>{window.clearTimeout(g.current),p(!1)},[]),onClose:y.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>p(!0),s)},[s]),isPointerInTransitRef:h,onPointerInTransitChange:y.useCallback(w=>{h.current=w},[]),disableHoverableContent:l,children:u})};$g.displayName=Og;var _g="Tooltip",[dR,Za]=Ja(_g),Nu="TooltipTrigger",uk=y.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,l=Za(Nu,i),u=Fg(Nu,i),f=td(i),p=y.useRef(null),h=He(r,p,l.onTriggerChange),g=y.useRef(!1),w=y.useRef(!1),b=y.useCallback(()=>g.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",b),[b]),c.jsx(tk,{asChild:!0,...f,children:c.jsx(De.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...s,ref:h,onPointerMove:Pe(n.onPointerMove,v=>{v.pointerType!=="touch"&&!w.current&&!u.isPointerInTransitRef.current&&(l.onTriggerEnter(),w.current=!0)}),onPointerLeave:Pe(n.onPointerLeave,()=>{l.onTriggerLeave(),w.current=!1}),onPointerDown:Pe(n.onPointerDown,()=>{g.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:Pe(n.onFocus,()=>{g.current||l.onOpen()}),onBlur:Pe(n.onBlur,l.onClose),onClick:Pe(n.onClick,l.onClose)})})});uk.displayName=Nu;var dk="TooltipPortal",[fR,fk]=Ja(dk,{forceMount:void 0}),Ui="TooltipContent",Bg=y.forwardRef((n,r)=>{const i=fk(Ui,n.__scopeTooltip),{forceMount:s=i.forceMount,side:l="top",...u}=n,f=Za(Ui,n.__scopeTooltip);return c.jsx(Dg,{present:s||f.open,children:f.disableHoverableContent?c.jsx(zg,{side:l,...u,ref:r}):c.jsx(mk,{side:l,...u,ref:r})})}),mk=y.forwardRef((n,r)=>{const i=Za(Ui,n.__scopeTooltip),s=Fg(Ui,n.__scopeTooltip),l=y.useRef(null),u=He(r,l),[f,p]=y.useState(null),{trigger:h,onClose:g}=i,w=l.current,{onPointerInTransitChange:b}=s,v=y.useCallback(()=>{p(null),b(!1)},[b]),C=y.useCallback((E,k)=>{const S=E.currentTarget,T={x:E.clientX,y:E.clientY},I=yk(T,S.getBoundingClientRect()),j=vk(T,I),D=xk(k.getBoundingClientRect()),$=bk([...j,...D]);p($),b(!0)},[b]);return y.useEffect(()=>()=>v(),[v]),y.useEffect(()=>{if(h&&w){const E=S=>C(S,w),k=S=>C(S,h);return h.addEventListener("pointerleave",E),w.addEventListener("pointerleave",k),()=>{h.removeEventListener("pointerleave",E),w.removeEventListener("pointerleave",k)}}},[h,w,C,v]),y.useEffect(()=>{if(f){const E=k=>{const S=k.target,T={x:k.clientX,y:k.clientY},I=(h==null?void 0:h.contains(S))||(w==null?void 0:w.contains(S)),j=!wk(T,f);I?v():j&&(v(),g())};return document.addEventListener("pointermove",E),()=>document.removeEventListener("pointermove",E)}},[h,w,f,g,v]),c.jsx(zg,{...n,ref:u})}),[pk,hk]=Ja(_g,{isInside:!1}),zg=y.forwardRef((n,r)=>{const{__scopeTooltip:i,children:s,"aria-label":l,onEscapeKeyDown:u,onPointerDownOutside:f,...p}=n,h=Za(Ui,i),g=td(i),{onClose:w}=h;return y.useEffect(()=>(document.addEventListener(Mp,w),()=>document.removeEventListener(Mp,w)),[w]),y.useEffect(()=>{if(h.trigger){const b=v=>{const C=v.target;C!=null&&C.contains(h.trigger)&&w()};return window.addEventListener("scroll",b,{capture:!0}),()=>window.removeEventListener("scroll",b,{capture:!0})}},[h.trigger,w]),c.jsx(Yu,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:b=>b.preventDefault(),onDismiss:w,children:c.jsxs(nk,{"data-state":h.stateAttribute,...g,...p,ref:r,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(bh,{children:s}),c.jsx(pk,{scope:i,isInside:!0,children:c.jsx(Ux,{id:h.contentId,role:"tooltip",children:l||s})})]})})});Bg.displayName=Ui;var Hg="TooltipArrow",gk=y.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,l=td(i);return hk(Hg,i).isInside?null:c.jsx(rk,{...l,...s,ref:r})});gk.displayName=Hg;function yk(n,r){const i=Math.abs(r.top-n.y),s=Math.abs(r.bottom-n.y),l=Math.abs(r.right-n.x),u=Math.abs(r.left-n.x);switch(Math.min(i,s,l,u)){case u:return"left";case l:return"right";case i:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function vk(n,r,i=5){const s=[];switch(r){case"top":s.push({x:n.x-i,y:n.y+i},{x:n.x+i,y:n.y+i});break;case"bottom":s.push({x:n.x-i,y:n.y-i},{x:n.x+i,y:n.y-i});break;case"left":s.push({x:n.x+i,y:n.y-i},{x:n.x+i,y:n.y+i});break;case"right":s.push({x:n.x-i,y:n.y-i},{x:n.x-i,y:n.y+i});break}return s}function xk(n){const{top:r,right:i,bottom:s,left:l}=n;return[{x:l,y:r},{x:i,y:r},{x:i,y:s},{x:l,y:s}]}function wk(n,r){const{x:i,y:s}=n;let l=!1;for(let u=0,f=r.length-1;u<r.length;f=u++){const p=r[u].x,h=r[u].y,g=r[f].x,w=r[f].y;h>s!=w>s&&i<(g-p)*(s-h)/(w-h)+p&&(l=!l)}return l}function bk(n){const r=n.slice();return r.sort((i,s)=>i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0),kk(r)}function kk(n){if(n.length<=1)return n.slice();const r=[];for(let s=0;s<n.length;s++){const l=n[s];for(;r.length>=2;){const u=r[r.length-1],f=r[r.length-2];if((u.x-f.x)*(l.y-f.y)>=(u.y-f.y)*(l.x-f.x))r.pop();else break}r.push(l)}r.pop();const i=[];for(let s=n.length-1;s>=0;s--){const l=n[s];for(;i.length>=2;){const u=i[i.length-1],f=i[i.length-2];if((u.x-f.x)*(l.y-f.y)>=(u.y-f.y)*(l.x-f.x))i.pop();else break}i.push(l)}return i.pop(),r.length===1&&i.length===1&&r[0].x===i[0].x&&r[0].y===i[0].y?r:r.concat(i)}var Sk=$g,Wg=Bg;const Ck=Sk,Ek=y.forwardRef(({className:n,sideOffset:r=4,...i},s)=>c.jsx(Wg,{ref:s,sideOffset:r,className:ve("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i}));Ek.displayName=Wg.displayName;var el=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},tl=typeof window>"u"||"Deno"in globalThis;function an(){}function Rk(n,r){return typeof n=="function"?n(r):n}function Pk(n){return typeof n=="number"&&n>=0&&n!==1/0}function Tk(n,r){return Math.max(n+(r||0)-Date.now(),0)}function Lp(n,r){return typeof n=="function"?n(r):n}function Ak(n,r){return typeof n=="function"?n(r):n}function Dp(n,r){const{type:i="all",exact:s,fetchStatus:l,predicate:u,queryKey:f,stale:p}=n;if(f){if(s){if(r.queryHash!==nd(f,r.options))return!1}else if(!Yo(r.queryKey,f))return!1}if(i!=="all"){const h=r.isActive();if(i==="active"&&!h||i==="inactive"&&h)return!1}return!(typeof p=="boolean"&&r.isStale()!==p||l&&l!==r.state.fetchStatus||u&&!u(r))}function Op(n,r){const{exact:i,status:s,predicate:l,mutationKey:u}=n;if(u){if(!r.options.mutationKey)return!1;if(i){if(Vo(r.options.mutationKey)!==Vo(u))return!1}else if(!Yo(r.options.mutationKey,u))return!1}return!(s&&r.state.status!==s||l&&!l(r))}function nd(n,r){return((r==null?void 0:r.queryKeyHashFn)||Vo)(n)}function Vo(n){return JSON.stringify(n,(r,i)=>Iu(i)?Object.keys(i).sort().reduce((s,l)=>(s[l]=i[l],s),{}):i)}function Yo(n,r){return n===r?!0:typeof n!=typeof r?!1:n&&r&&typeof n=="object"&&typeof r=="object"?!Object.keys(r).some(i=>!Yo(n[i],r[i])):!1}function Ug(n,r){if(n===r)return n;const i=Fp(n)&&Fp(r);if(i||Iu(n)&&Iu(r)){const s=i?n:Object.keys(n),l=s.length,u=i?r:Object.keys(r),f=u.length,p=i?[]:{};let h=0;for(let g=0;g<f;g++){const w=i?g:u[g];(!i&&s.includes(w)||i)&&n[w]===void 0&&r[w]===void 0?(p[w]=void 0,h++):(p[w]=Ug(n[w],r[w]),p[w]===n[w]&&n[w]!==void 0&&h++)}return l===f&&h===l?n:p}return r}function Fp(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Iu(n){if(!$p(n))return!1;const r=n.constructor;if(r===void 0)return!0;const i=r.prototype;return!(!$p(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function $p(n){return Object.prototype.toString.call(n)==="[object Object]"}function Nk(n){return new Promise(r=>{setTimeout(r,n)})}function Ik(n,r,i){return typeof i.structuralSharing=="function"?i.structuralSharing(n,r):i.structuralSharing!==!1?Ug(n,r):r}function jk(n,r,i=0){const s=[...n,r];return i&&s.length>i?s.slice(1):s}function Mk(n,r,i=0){const s=[r,...n];return i&&s.length>i?s.slice(0,-1):s}var qg=Symbol();function Vg(n,r){return!n.queryFn&&(r!=null&&r.initialPromise)?()=>r.initialPromise:!n.queryFn||n.queryFn===qg?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var Qr,hr,ji,ch,Lk=(ch=class extends el{constructor(){super();Le(this,Qr);Le(this,hr);Le(this,ji);be(this,ji,r=>{if(!tl&&window.addEventListener){const i=()=>r();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){B(this,hr)||this.setEventListener(B(this,ji))}onUnsubscribe(){var r;this.hasListeners()||((r=B(this,hr))==null||r.call(this),be(this,hr,void 0))}setEventListener(r){var i;be(this,ji,r),(i=B(this,hr))==null||i.call(this),be(this,hr,r(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()}))}setFocused(r){B(this,Qr)!==r&&(be(this,Qr,r),this.onFocus())}onFocus(){const r=this.isFocused();this.listeners.forEach(i=>{i(r)})}isFocused(){var r;return typeof B(this,Qr)=="boolean"?B(this,Qr):((r=globalThis.document)==null?void 0:r.visibilityState)!=="hidden"}},Qr=new WeakMap,hr=new WeakMap,ji=new WeakMap,ch),Yg=new Lk,Mi,gr,Li,uh,Dk=(uh=class extends el{constructor(){super();Le(this,Mi,!0);Le(this,gr);Le(this,Li);be(this,Li,r=>{if(!tl&&window.addEventListener){const i=()=>r(!0),s=()=>r(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",s)}}})}onSubscribe(){B(this,gr)||this.setEventListener(B(this,Li))}onUnsubscribe(){var r;this.hasListeners()||((r=B(this,gr))==null||r.call(this),be(this,gr,void 0))}setEventListener(r){var i;be(this,Li,r),(i=B(this,gr))==null||i.call(this),be(this,gr,r(this.setOnline.bind(this)))}setOnline(r){B(this,Mi)!==r&&(be(this,Mi,r),this.listeners.forEach(s=>{s(r)}))}isOnline(){return B(this,Mi)}},Mi=new WeakMap,gr=new WeakMap,Li=new WeakMap,uh),_a=new Dk;function Ok(n){return Math.min(1e3*2**n,3e4)}function Gg(n){return(n??"online")==="online"?_a.isOnline():!0}var Qg=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function iu(n){return n instanceof Qg}function Kg(n){let r=!1,i=0,s=!1,l,u,f;const p=new Promise((T,I)=>{u=T,f=I}),h=T=>{var I;s||(E(new Qg(T)),(I=n.abort)==null||I.call(n))},g=()=>{r=!0},w=()=>{r=!1},b=()=>Yg.isFocused()&&(n.networkMode==="always"||_a.isOnline())&&n.canRun(),v=()=>Gg(n.networkMode)&&n.canRun(),C=T=>{var I;s||(s=!0,(I=n.onSuccess)==null||I.call(n,T),l==null||l(),u(T))},E=T=>{var I;s||(s=!0,(I=n.onError)==null||I.call(n,T),l==null||l(),f(T))},k=()=>new Promise(T=>{var I;l=j=>{(s||b())&&T(j)},(I=n.onPause)==null||I.call(n)}).then(()=>{var T;l=void 0,s||(T=n.onContinue)==null||T.call(n)}),S=()=>{if(s)return;let T;const I=i===0?n.initialPromise:void 0;try{T=I??n.fn()}catch(j){T=Promise.reject(j)}Promise.resolve(T).then(C).catch(j=>{var G;if(s)return;const D=n.retry??(tl?0:3),$=n.retryDelay??Ok,U=typeof $=="function"?$(i,j):$,z=D===!0||typeof D=="number"&&i<D||typeof D=="function"&&D(i,j);if(r||!z){E(j);return}i++,(G=n.onFail)==null||G.call(n,i,j),Nk(U).then(()=>b()?void 0:k()).then(()=>{r?E(j):S()})})};return{promise:p,cancel:h,continue:()=>(l==null||l(),p),cancelRetry:g,continueRetry:w,canStart:v,start:()=>(v()?S():k().then(S),p)}}function Fk(){let n=[],r=0,i=p=>{p()},s=p=>{p()},l=p=>setTimeout(p,0);const u=p=>{r?n.push(p):l(()=>{i(p)})},f=()=>{const p=n;n=[],p.length&&l(()=>{s(()=>{p.forEach(h=>{i(h)})})})};return{batch:p=>{let h;r++;try{h=p()}finally{r--,r||f()}return h},batchCalls:p=>(...h)=>{u(()=>{p(...h)})},schedule:u,setNotifyFunction:p=>{i=p},setBatchNotifyFunction:p=>{s=p},setScheduler:p=>{l=p}}}var kt=Fk(),Kr,dh,Xg=(dh=class{constructor(){Le(this,Kr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Pk(this.gcTime)&&be(this,Kr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(tl?1/0:5*60*1e3))}clearGcTimeout(){B(this,Kr)&&(clearTimeout(B(this,Kr)),be(this,Kr,void 0))}},Kr=new WeakMap,dh),Di,Oi,Qt,vt,Xo,Xr,ln,Bn,fh,$k=(fh=class extends Xg{constructor(r){super();Le(this,ln);Le(this,Di);Le(this,Oi);Le(this,Qt);Le(this,vt);Le(this,Xo);Le(this,Xr);be(this,Xr,!1),be(this,Xo,r.defaultOptions),this.setOptions(r.options),this.observers=[],be(this,Qt,r.cache),this.queryKey=r.queryKey,this.queryHash=r.queryHash,be(this,Di,Bk(this.options)),this.state=r.state??B(this,Di),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var r;return(r=B(this,vt))==null?void 0:r.promise}setOptions(r){this.options={...B(this,Xo),...r},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&B(this,Qt).remove(this)}setData(r,i){const s=Ik(this.state.data,r,this.options);return yt(this,ln,Bn).call(this,{data:s,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),s}setState(r,i){yt(this,ln,Bn).call(this,{type:"setState",state:r,setStateOptions:i})}cancel(r){var s,l;const i=(s=B(this,vt))==null?void 0:s.promise;return(l=B(this,vt))==null||l.cancel(r),i?i.then(an).catch(an):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(B(this,Di))}isActive(){return this.observers.some(r=>Ak(r.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(r=>r.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(r=0){return this.state.isInvalidated||this.state.data===void 0||!Tk(this.state.dataUpdatedAt,r)}onFocus(){var i;const r=this.observers.find(s=>s.shouldFetchOnWindowFocus());r==null||r.refetch({cancelRefetch:!1}),(i=B(this,vt))==null||i.continue()}onOnline(){var i;const r=this.observers.find(s=>s.shouldFetchOnReconnect());r==null||r.refetch({cancelRefetch:!1}),(i=B(this,vt))==null||i.continue()}addObserver(r){this.observers.includes(r)||(this.observers.push(r),this.clearGcTimeout(),B(this,Qt).notify({type:"observerAdded",query:this,observer:r}))}removeObserver(r){this.observers.includes(r)&&(this.observers=this.observers.filter(i=>i!==r),this.observers.length||(B(this,vt)&&(B(this,Xr)?B(this,vt).cancel({revert:!0}):B(this,vt).cancelRetry()),this.scheduleGc()),B(this,Qt).notify({type:"observerRemoved",query:this,observer:r}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||yt(this,ln,Bn).call(this,{type:"invalidate"})}fetch(r,i){var h,g,w;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(B(this,vt))return B(this,vt).continueRetry(),B(this,vt).promise}if(r&&this.setOptions(r),!this.options.queryFn){const b=this.observers.find(v=>v.options.queryFn);b&&this.setOptions(b.options)}const s=new AbortController,l=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(be(this,Xr,!0),s.signal)})},u=()=>{const b=Vg(this.options,i),v={queryKey:this.queryKey,meta:this.meta};return l(v),be(this,Xr,!1),this.options.persister?this.options.persister(b,v,this):b(v)},f={fetchOptions:i,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};l(f),(h=this.options.behavior)==null||h.onFetch(f,this),be(this,Oi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((g=f.fetchOptions)==null?void 0:g.meta))&&yt(this,ln,Bn).call(this,{type:"fetch",meta:(w=f.fetchOptions)==null?void 0:w.meta});const p=b=>{var v,C,E,k;iu(b)&&b.silent||yt(this,ln,Bn).call(this,{type:"error",error:b}),iu(b)||((C=(v=B(this,Qt).config).onError)==null||C.call(v,b,this),(k=(E=B(this,Qt).config).onSettled)==null||k.call(E,this.state.data,b,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return be(this,vt,Kg({initialPromise:i==null?void 0:i.initialPromise,fn:f.fetchFn,abort:s.abort.bind(s),onSuccess:b=>{var v,C,E,k;if(b===void 0){p(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(b)}catch(S){p(S);return}(C=(v=B(this,Qt).config).onSuccess)==null||C.call(v,b,this),(k=(E=B(this,Qt).config).onSettled)==null||k.call(E,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(b,v)=>{yt(this,ln,Bn).call(this,{type:"failed",failureCount:b,error:v})},onPause:()=>{yt(this,ln,Bn).call(this,{type:"pause"})},onContinue:()=>{yt(this,ln,Bn).call(this,{type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0})),B(this,vt).start()}},Di=new WeakMap,Oi=new WeakMap,Qt=new WeakMap,vt=new WeakMap,Xo=new WeakMap,Xr=new WeakMap,ln=new WeakSet,Bn=function(r){const i=s=>{switch(r.type){case"failed":return{...s,fetchFailureCount:r.failureCount,fetchFailureReason:r.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,..._k(s.data,this.options),fetchMeta:r.meta??null};case"success":return{...s,data:r.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:r.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!r.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const l=r.error;return iu(l)&&l.revert&&B(this,Oi)?{...B(this,Oi),fetchStatus:"idle"}:{...s,error:l,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...r.state}}};this.state=i(this.state),kt.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),B(this,Qt).notify({query:this,type:"updated",action:r})})},fh);function _k(n,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Gg(r.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function Bk(n){const r=typeof n.initialData=="function"?n.initialData():n.initialData,i=r!==void 0,s=i?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var xn,mh,zk=(mh=class extends el{constructor(r={}){super();Le(this,xn);this.config=r,be(this,xn,new Map)}build(r,i,s){const l=i.queryKey,u=i.queryHash??nd(l,i);let f=this.get(u);return f||(f=new $k({cache:this,queryKey:l,queryHash:u,options:r.defaultQueryOptions(i),state:s,defaultOptions:r.getQueryDefaults(l)}),this.add(f)),f}add(r){B(this,xn).has(r.queryHash)||(B(this,xn).set(r.queryHash,r),this.notify({type:"added",query:r}))}remove(r){const i=B(this,xn).get(r.queryHash);i&&(r.destroy(),i===r&&B(this,xn).delete(r.queryHash),this.notify({type:"removed",query:r}))}clear(){kt.batch(()=>{this.getAll().forEach(r=>{this.remove(r)})})}get(r){return B(this,xn).get(r)}getAll(){return[...B(this,xn).values()]}find(r){const i={exact:!0,...r};return this.getAll().find(s=>Dp(i,s))}findAll(r={}){const i=this.getAll();return Object.keys(r).length>0?i.filter(s=>Dp(r,s)):i}notify(r){kt.batch(()=>{this.listeners.forEach(i=>{i(r)})})}onFocus(){kt.batch(()=>{this.getAll().forEach(r=>{r.onFocus()})})}onOnline(){kt.batch(()=>{this.getAll().forEach(r=>{r.onOnline()})})}},xn=new WeakMap,mh),wn,bt,Jr,bn,mr,ph,Hk=(ph=class extends Xg{constructor(r){super();Le(this,bn);Le(this,wn);Le(this,bt);Le(this,Jr);this.mutationId=r.mutationId,be(this,bt,r.mutationCache),be(this,wn,[]),this.state=r.state||Wk(),this.setOptions(r.options),this.scheduleGc()}setOptions(r){this.options=r,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(r){B(this,wn).includes(r)||(B(this,wn).push(r),this.clearGcTimeout(),B(this,bt).notify({type:"observerAdded",mutation:this,observer:r}))}removeObserver(r){be(this,wn,B(this,wn).filter(i=>i!==r)),this.scheduleGc(),B(this,bt).notify({type:"observerRemoved",mutation:this,observer:r})}optionalRemove(){B(this,wn).length||(this.state.status==="pending"?this.scheduleGc():B(this,bt).remove(this))}continue(){var r;return((r=B(this,Jr))==null?void 0:r.continue())??this.execute(this.state.variables)}async execute(r){var l,u,f,p,h,g,w,b,v,C,E,k,S,T,I,j,D,$,U,z;be(this,Jr,Kg({fn:()=>this.options.mutationFn?this.options.mutationFn(r):Promise.reject(new Error("No mutationFn found")),onFail:(G,V)=>{yt(this,bn,mr).call(this,{type:"failed",failureCount:G,error:V})},onPause:()=>{yt(this,bn,mr).call(this,{type:"pause"})},onContinue:()=>{yt(this,bn,mr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>B(this,bt).canRun(this)}));const i=this.state.status==="pending",s=!B(this,Jr).canStart();try{if(!i){yt(this,bn,mr).call(this,{type:"pending",variables:r,isPaused:s}),await((u=(l=B(this,bt).config).onMutate)==null?void 0:u.call(l,r,this));const V=await((p=(f=this.options).onMutate)==null?void 0:p.call(f,r));V!==this.state.context&&yt(this,bn,mr).call(this,{type:"pending",context:V,variables:r,isPaused:s})}const G=await B(this,Jr).start();return await((g=(h=B(this,bt).config).onSuccess)==null?void 0:g.call(h,G,r,this.state.context,this)),await((b=(w=this.options).onSuccess)==null?void 0:b.call(w,G,r,this.state.context)),await((C=(v=B(this,bt).config).onSettled)==null?void 0:C.call(v,G,null,this.state.variables,this.state.context,this)),await((k=(E=this.options).onSettled)==null?void 0:k.call(E,G,null,r,this.state.context)),yt(this,bn,mr).call(this,{type:"success",data:G}),G}catch(G){try{throw await((T=(S=B(this,bt).config).onError)==null?void 0:T.call(S,G,r,this.state.context,this)),await((j=(I=this.options).onError)==null?void 0:j.call(I,G,r,this.state.context)),await(($=(D=B(this,bt).config).onSettled)==null?void 0:$.call(D,void 0,G,this.state.variables,this.state.context,this)),await((z=(U=this.options).onSettled)==null?void 0:z.call(U,void 0,G,r,this.state.context)),G}finally{yt(this,bn,mr).call(this,{type:"error",error:G})}}finally{B(this,bt).runNext(this)}}},wn=new WeakMap,bt=new WeakMap,Jr=new WeakMap,bn=new WeakSet,mr=function(r){const i=s=>{switch(r.type){case"failed":return{...s,failureCount:r.failureCount,failureReason:r.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:r.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:r.isPaused,status:"pending",variables:r.variables,submittedAt:Date.now()};case"success":return{...s,data:r.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:r.error,failureCount:s.failureCount+1,failureReason:r.error,isPaused:!1,status:"error"}}};this.state=i(this.state),kt.batch(()=>{B(this,wn).forEach(s=>{s.onMutationUpdate(r)}),B(this,bt).notify({mutation:this,type:"updated",action:r})})},ph);function Wk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Lt,Jo,hh,Uk=(hh=class extends el{constructor(r={}){super();Le(this,Lt);Le(this,Jo);this.config=r,be(this,Lt,new Map),be(this,Jo,Date.now())}build(r,i,s){const l=new Hk({mutationCache:this,mutationId:++pa(this,Jo)._,options:r.defaultMutationOptions(i),state:s});return this.add(l),l}add(r){const i=ba(r),s=B(this,Lt).get(i)??[];s.push(r),B(this,Lt).set(i,s),this.notify({type:"added",mutation:r})}remove(r){var s;const i=ba(r);if(B(this,Lt).has(i)){const l=(s=B(this,Lt).get(i))==null?void 0:s.filter(u=>u!==r);l&&(l.length===0?B(this,Lt).delete(i):B(this,Lt).set(i,l))}this.notify({type:"removed",mutation:r})}canRun(r){var s;const i=(s=B(this,Lt).get(ba(r)))==null?void 0:s.find(l=>l.state.status==="pending");return!i||i===r}runNext(r){var s;const i=(s=B(this,Lt).get(ba(r)))==null?void 0:s.find(l=>l!==r&&l.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}clear(){kt.batch(()=>{this.getAll().forEach(r=>{this.remove(r)})})}getAll(){return[...B(this,Lt).values()].flat()}find(r){const i={exact:!0,...r};return this.getAll().find(s=>Op(i,s))}findAll(r={}){return this.getAll().filter(i=>Op(r,i))}notify(r){kt.batch(()=>{this.listeners.forEach(i=>{i(r)})})}resumePausedMutations(){const r=this.getAll().filter(i=>i.state.isPaused);return kt.batch(()=>Promise.all(r.map(i=>i.continue().catch(an))))}},Lt=new WeakMap,Jo=new WeakMap,hh);function ba(n){var r;return((r=n.options.scope)==null?void 0:r.id)??String(n.mutationId)}function _p(n){return{onFetch:(r,i)=>{var w,b,v,C,E;const s=r.options,l=(v=(b=(w=r.fetchOptions)==null?void 0:w.meta)==null?void 0:b.fetchMore)==null?void 0:v.direction,u=((C=r.state.data)==null?void 0:C.pages)||[],f=((E=r.state.data)==null?void 0:E.pageParams)||[];let p={pages:[],pageParams:[]},h=0;const g=async()=>{let k=!1;const S=j=>{Object.defineProperty(j,"signal",{enumerable:!0,get:()=>(r.signal.aborted?k=!0:r.signal.addEventListener("abort",()=>{k=!0}),r.signal)})},T=Vg(r.options,r.fetchOptions),I=async(j,D,$)=>{if(k)return Promise.reject();if(D==null&&j.pages.length)return Promise.resolve(j);const U={queryKey:r.queryKey,pageParam:D,direction:$?"backward":"forward",meta:r.options.meta};S(U);const z=await T(U),{maxPages:G}=r.options,V=$?Mk:jk;return{pages:V(j.pages,z,G),pageParams:V(j.pageParams,D,G)}};if(l&&u.length){const j=l==="backward",D=j?qk:Bp,$={pages:u,pageParams:f},U=D(s,$);p=await I($,U,j)}else{const j=n??u.length;do{const D=h===0?f[0]??s.initialPageParam:Bp(s,p);if(h>0&&D==null)break;p=await I(p,D),h++}while(h<j)}return p};r.options.persister?r.fetchFn=()=>{var k,S;return(S=(k=r.options).persister)==null?void 0:S.call(k,g,{queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},i)}:r.fetchFn=g}}}function Bp(n,{pages:r,pageParams:i}){const s=r.length-1;return r.length>0?n.getNextPageParam(r[s],r,i[s],i):void 0}function qk(n,{pages:r,pageParams:i}){var s;return r.length>0?(s=n.getPreviousPageParam)==null?void 0:s.call(n,r[0],r,i[0],i):void 0}var Qe,yr,vr,Fi,$i,xr,_i,Bi,gh,Vk=(gh=class{constructor(n={}){Le(this,Qe);Le(this,yr);Le(this,vr);Le(this,Fi);Le(this,$i);Le(this,xr);Le(this,_i);Le(this,Bi);be(this,Qe,n.queryCache||new zk),be(this,yr,n.mutationCache||new Uk),be(this,vr,n.defaultOptions||{}),be(this,Fi,new Map),be(this,$i,new Map),be(this,xr,0)}mount(){pa(this,xr)._++,B(this,xr)===1&&(be(this,_i,Yg.subscribe(async n=>{n&&(await this.resumePausedMutations(),B(this,Qe).onFocus())})),be(this,Bi,_a.subscribe(async n=>{n&&(await this.resumePausedMutations(),B(this,Qe).onOnline())})))}unmount(){var n,r;pa(this,xr)._--,B(this,xr)===0&&((n=B(this,_i))==null||n.call(this),be(this,_i,void 0),(r=B(this,Bi))==null||r.call(this),be(this,Bi,void 0))}isFetching(n){return B(this,Qe).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return B(this,yr).findAll({...n,status:"pending"}).length}getQueryData(n){var i;const r=this.defaultQueryOptions({queryKey:n});return(i=B(this,Qe).get(r.queryHash))==null?void 0:i.state.data}ensureQueryData(n){const r=this.getQueryData(n.queryKey);if(r===void 0)return this.fetchQuery(n);{const i=this.defaultQueryOptions(n),s=B(this,Qe).build(this,i);return n.revalidateIfStale&&s.isStaleByTime(Lp(i.staleTime,s))&&this.prefetchQuery(i),Promise.resolve(r)}}getQueriesData(n){return B(this,Qe).findAll(n).map(({queryKey:r,state:i})=>{const s=i.data;return[r,s]})}setQueryData(n,r,i){const s=this.defaultQueryOptions({queryKey:n}),l=B(this,Qe).get(s.queryHash),u=l==null?void 0:l.state.data,f=Rk(r,u);if(f!==void 0)return B(this,Qe).build(this,s).setData(f,{...i,manual:!0})}setQueriesData(n,r,i){return kt.batch(()=>B(this,Qe).findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,r,i)]))}getQueryState(n){var i;const r=this.defaultQueryOptions({queryKey:n});return(i=B(this,Qe).get(r.queryHash))==null?void 0:i.state}removeQueries(n){const r=B(this,Qe);kt.batch(()=>{r.findAll(n).forEach(i=>{r.remove(i)})})}resetQueries(n,r){const i=B(this,Qe),s={type:"active",...n};return kt.batch(()=>(i.findAll(n).forEach(l=>{l.reset()}),this.refetchQueries(s,r)))}cancelQueries(n={},r={}){const i={revert:!0,...r},s=kt.batch(()=>B(this,Qe).findAll(n).map(l=>l.cancel(i)));return Promise.all(s).then(an).catch(an)}invalidateQueries(n={},r={}){return kt.batch(()=>{if(B(this,Qe).findAll(n).forEach(s=>{s.invalidate()}),n.refetchType==="none")return Promise.resolve();const i={...n,type:n.refetchType??n.type??"active"};return this.refetchQueries(i,r)})}refetchQueries(n={},r){const i={...r,cancelRefetch:(r==null?void 0:r.cancelRefetch)??!0},s=kt.batch(()=>B(this,Qe).findAll(n).filter(l=>!l.isDisabled()).map(l=>{let u=l.fetch(void 0,i);return i.throwOnError||(u=u.catch(an)),l.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(s).then(an)}fetchQuery(n){const r=this.defaultQueryOptions(n);r.retry===void 0&&(r.retry=!1);const i=B(this,Qe).build(this,r);return i.isStaleByTime(Lp(r.staleTime,i))?i.fetch(r):Promise.resolve(i.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(an).catch(an)}fetchInfiniteQuery(n){return n.behavior=_p(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(an).catch(an)}ensureInfiniteQueryData(n){return n.behavior=_p(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return _a.isOnline()?B(this,yr).resumePausedMutations():Promise.resolve()}getQueryCache(){return B(this,Qe)}getMutationCache(){return B(this,yr)}getDefaultOptions(){return B(this,vr)}setDefaultOptions(n){be(this,vr,n)}setQueryDefaults(n,r){B(this,Fi).set(Vo(n),{queryKey:n,defaultOptions:r})}getQueryDefaults(n){const r=[...B(this,Fi).values()];let i={};return r.forEach(s=>{Yo(n,s.queryKey)&&(i={...i,...s.defaultOptions})}),i}setMutationDefaults(n,r){B(this,$i).set(Vo(n),{mutationKey:n,defaultOptions:r})}getMutationDefaults(n){const r=[...B(this,$i).values()];let i={};return r.forEach(s=>{Yo(n,s.mutationKey)&&(i={...i,...s.defaultOptions})}),i}defaultQueryOptions(n){if(n._defaulted)return n;const r={...B(this,vr).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return r.queryHash||(r.queryHash=nd(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.enabled!==!0&&r.queryFn===qg&&(r.enabled=!1),r}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...B(this,vr).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){B(this,Qe).clear(),B(this,yr).clear()}},Qe=new WeakMap,yr=new WeakMap,vr=new WeakMap,Fi=new WeakMap,$i=new WeakMap,xr=new WeakMap,_i=new WeakMap,Bi=new WeakMap,gh),Yk=y.createContext(void 0),Gk=({client:n,children:r})=>(y.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),c.jsx(Yk.Provider,{value:n,children:r}));/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Go.apply(this,arguments)}var wr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(wr||(wr={}));const zp="popstate";function Qk(n){n===void 0&&(n={});function r(s,l){let{pathname:u,search:f,hash:p}=s.location;return ju("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Ba(l)}return Xk(r,i,null,n)}function tt(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Jg(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Kk(){return Math.random().toString(36).substr(2,8)}function Hp(n,r){return{usr:n.state,key:n.key,idx:r}}function ju(n,r,i,s){return i===void 0&&(i=null),Go({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?Ki(r):r,{state:i,key:r&&r.key||s||Kk()})}function Ba(n){let{pathname:r="/",search:i="",hash:s=""}=n;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function Ki(n){let r={};if(n){let i=n.indexOf("#");i>=0&&(r.hash=n.substr(i),n=n.substr(0,i));let s=n.indexOf("?");s>=0&&(r.search=n.substr(s),n=n.substr(0,s)),n&&(r.pathname=n)}return r}function Xk(n,r,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,p=wr.Pop,h=null,g=w();g==null&&(g=0,f.replaceState(Go({},f.state,{idx:g}),""));function w(){return(f.state||{idx:null}).idx}function b(){p=wr.Pop;let S=w(),T=S==null?null:S-g;g=S,h&&h({action:p,location:k.location,delta:T})}function v(S,T){p=wr.Push;let I=ju(k.location,S,T);g=w()+1;let j=Hp(I,g),D=k.createHref(I);try{f.pushState(j,"",D)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;l.location.assign(D)}u&&h&&h({action:p,location:k.location,delta:1})}function C(S,T){p=wr.Replace;let I=ju(k.location,S,T);g=w();let j=Hp(I,g),D=k.createHref(I);f.replaceState(j,"",D),u&&h&&h({action:p,location:k.location,delta:0})}function E(S){let T=l.location.origin!=="null"?l.location.origin:l.location.href,I=typeof S=="string"?S:Ba(S);return I=I.replace(/ $/,"%20"),tt(T,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,T)}let k={get action(){return p},get location(){return n(l,f)},listen(S){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(zp,b),h=S,()=>{l.removeEventListener(zp,b),h=null}},createHref(S){return r(l,S)},createURL:E,encodeLocation(S){let T=E(S);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:v,replace:C,go(S){return f.go(S)}};return k}var Wp;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Wp||(Wp={}));function Jk(n,r,i){return i===void 0&&(i="/"),Zk(n,r,i)}function Zk(n,r,i,s){let l=typeof r=="string"?Ki(r):r,u=rd(l.pathname||"/",i);if(u==null)return null;let f=Zg(n);eS(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let g=fS(u);p=cS(f[h],g)}return p}function Zg(n,r,i,s){r===void 0&&(r=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(u,f,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(tt(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let g=br([s,h.relativePath]),w=i.concat(h);u.children&&u.children.length>0&&(tt(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Zg(u.children,r,w,g)),!(u.path==null&&!u.index)&&r.push({path:g,score:aS(g,u.index),routesMeta:w})};return n.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let h of ey(u.path))l(u,f,h)}),r}function ey(n){let r=n.split("/");if(r.length===0)return[];let[i,...s]=r,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=ey(s.join("/")),p=[];return p.push(...f.map(h=>h===""?u:[u,h].join("/"))),l&&p.push(...f),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function eS(n){n.sort((r,i)=>r.score!==i.score?i.score-r.score:lS(r.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const tS=/^:[\w-]+$/,nS=3,rS=2,iS=1,oS=10,sS=-2,Up=n=>n==="*";function aS(n,r){let i=n.split("/"),s=i.length;return i.some(Up)&&(s+=sS),r&&(s+=rS),i.filter(l=>!Up(l)).reduce((l,u)=>l+(tS.test(u)?nS:u===""?iS:oS),s)}function lS(n,r){return n.length===r.length&&n.slice(0,-1).every((s,l)=>s===r[l])?n[n.length-1]-r[r.length-1]:0}function cS(n,r,i){let{routesMeta:s}=n,l={},u="/",f=[];for(let p=0;p<s.length;++p){let h=s[p],g=p===s.length-1,w=u==="/"?r:r.slice(u.length)||"/",b=uS({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},w),v=h.route;if(!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:br([u,b.pathname]),pathnameBase:gS(br([u,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(u=br([u,b.pathnameBase]))}return f}function uS(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,s]=dS(n.path,n.caseSensitive,n.end),l=r.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((g,w,b)=>{let{paramName:v,isOptional:C}=w;if(v==="*"){let k=p[b]||"";f=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const E=p[b];return C&&!E?g[v]=void 0:g[v]=(E||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:n}}function dS(n,r,i){r===void 0&&(r=!1),i===void 0&&(i=!0),Jg(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(s.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),s]}function fS(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Jg(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function rd(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,s=n.charAt(i);return s&&s!=="/"?null:n.slice(i)||"/"}function mS(n,r){r===void 0&&(r="/");let{pathname:i,search:s="",hash:l=""}=typeof n=="string"?Ki(n):n;return{pathname:i?i.startsWith("/")?i:pS(i,r):r,search:yS(s),hash:vS(l)}}function pS(n,r){let i=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ou(n,r,i,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hS(n){return n.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function ty(n,r){let i=hS(n);return r?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function ny(n,r,i,s){s===void 0&&(s=!1);let l;typeof n=="string"?l=Ki(n):(l=Go({},n),tt(!l.pathname||!l.pathname.includes("?"),ou("?","pathname","search",l)),tt(!l.pathname||!l.pathname.includes("#"),ou("#","pathname","hash",l)),tt(!l.search||!l.search.includes("#"),ou("#","search","hash",l)));let u=n===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=i;else{let b=r.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),b-=1;l.pathname=v.join("/")}p=b>=0?r[b]:"/"}let h=mS(l,p),g=f&&f!=="/"&&f.endsWith("/"),w=(u||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(g||w)&&(h.pathname+="/"),h}const br=n=>n.join("/").replace(/\/\/+/g,"/"),gS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),yS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function xS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ry=["post","put","patch","delete"];new Set(ry);const wS=["get",...ry];new Set(wS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Qo.apply(this,arguments)}const id=y.createContext(null),bS=y.createContext(null),ti=y.createContext(null),nl=y.createContext(null),Ar=y.createContext({outlet:null,matches:[],isDataRoute:!1}),iy=y.createContext(null);function kS(n,r){let{relative:i}=r===void 0?{}:r;ns()||tt(!1);let{basename:s,navigator:l}=y.useContext(ti),{hash:u,pathname:f,search:p}=sy(n,{relative:i}),h=f;return s!=="/"&&(h=f==="/"?s:br([s,f])),l.createHref({pathname:h,search:p,hash:u})}function ns(){return y.useContext(nl)!=null}function Xi(){return ns()||tt(!1),y.useContext(nl).location}function oy(n){y.useContext(ti).static||y.useLayoutEffect(n)}function od(){let{isDataRoute:n}=y.useContext(Ar);return n?OS():SS()}function SS(){ns()||tt(!1);let n=y.useContext(id),{basename:r,future:i,navigator:s}=y.useContext(ti),{matches:l}=y.useContext(Ar),{pathname:u}=Xi(),f=JSON.stringify(ty(l,i.v7_relativeSplatPath)),p=y.useRef(!1);return oy(()=>{p.current=!0}),y.useCallback(function(g,w){if(w===void 0&&(w={}),!p.current)return;if(typeof g=="number"){s.go(g);return}let b=ny(g,JSON.parse(f),u,w.relative==="path");n==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:br([r,b.pathname])),(w.replace?s.replace:s.push)(b,w.state,w)},[r,s,f,u,n])}function CS(){let{matches:n}=y.useContext(Ar),r=n[n.length-1];return r?r.params:{}}function sy(n,r){let{relative:i}=r===void 0?{}:r,{future:s}=y.useContext(ti),{matches:l}=y.useContext(Ar),{pathname:u}=Xi(),f=JSON.stringify(ty(l,s.v7_relativeSplatPath));return y.useMemo(()=>ny(n,JSON.parse(f),u,i==="path"),[n,f,u,i])}function ES(n,r){return RS(n,r)}function RS(n,r,i,s){ns()||tt(!1);let{navigator:l}=y.useContext(ti),{matches:u}=y.useContext(Ar),f=u[u.length-1],p=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let g=Xi(),w;if(r){var b;let S=typeof r=="string"?Ki(r):r;h==="/"||(b=S.pathname)!=null&&b.startsWith(h)||tt(!1),w=S}else w=g;let v=w.pathname||"/",C=v;if(h!=="/"){let S=h.replace(/^\//,"").split("/");C="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=Jk(n,{pathname:C}),k=IS(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},p,S.params),pathname:br([h,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:br([h,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),u,i,s);return r&&k?y.createElement(nl.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:wr.Pop}},k):k}function PS(){let n=DS(),r=xS(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},r),i?y.createElement("pre",{style:l},i):null,null)}const TS=y.createElement(PS,null);class AS extends y.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?y.createElement(Ar.Provider,{value:this.props.routeContext},y.createElement(iy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NS(n){let{routeContext:r,match:i,children:s}=n,l=y.useContext(id);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),y.createElement(Ar.Provider,{value:r},s)}function IS(n,r,i,s){var l;if(r===void 0&&(r=[]),i===void 0&&(i=null),s===void 0&&(s=null),n==null){var u;if(!i)return null;if(i.errors)n=i.matches;else if((u=s)!=null&&u.v7_partialHydration&&r.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let f=n,p=(l=i)==null?void 0:l.errors;if(p!=null){let w=f.findIndex(b=>b.route.id&&(p==null?void 0:p[b.route.id])!==void 0);w>=0||tt(!1),f=f.slice(0,Math.min(f.length,w+1))}let h=!1,g=-1;if(i&&s&&s.v7_partialHydration)for(let w=0;w<f.length;w++){let b=f[w];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=w),b.route.id){let{loaderData:v,errors:C}=i,E=b.route.loader&&v[b.route.id]===void 0&&(!C||C[b.route.id]===void 0);if(b.route.lazy||E){h=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((w,b,v)=>{let C,E=!1,k=null,S=null;i&&(C=p&&b.route.id?p[b.route.id]:void 0,k=b.route.errorElement||TS,h&&(g<0&&v===0?(FS("route-fallback"),E=!0,S=null):g===v&&(E=!0,S=b.route.hydrateFallbackElement||null)));let T=r.concat(f.slice(0,v+1)),I=()=>{let j;return C?j=k:E?j=S:b.route.Component?j=y.createElement(b.route.Component,null):b.route.element?j=b.route.element:j=w,y.createElement(NS,{match:b,routeContext:{outlet:w,matches:T,isDataRoute:i!=null},children:j})};return i&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?y.createElement(AS,{location:i.location,revalidation:i.revalidation,component:k,error:C,children:I(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):I()},null)}var ay=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(ay||{}),ly=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ly||{});function jS(n){let r=y.useContext(id);return r||tt(!1),r}function MS(n){let r=y.useContext(bS);return r||tt(!1),r}function LS(n){let r=y.useContext(Ar);return r||tt(!1),r}function cy(n){let r=LS(),i=r.matches[r.matches.length-1];return i.route.id||tt(!1),i.route.id}function DS(){var n;let r=y.useContext(iy),i=MS(),s=cy();return r!==void 0?r:(n=i.errors)==null?void 0:n[s]}function OS(){let{router:n}=jS(ay.UseNavigateStable),r=cy(ly.UseNavigateStable),i=y.useRef(!1);return oy(()=>{i.current=!0}),y.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,Qo({fromRouteId:r},u)))},[n,r])}const qp={};function FS(n,r,i){qp[n]||(qp[n]=!0)}function ft(n){tt(!1)}function $S(n){let{basename:r="/",children:i=null,location:s,navigationType:l=wr.Pop,navigator:u,static:f=!1,future:p}=n;ns()&&tt(!1);let h=r.replace(/^\/*/,"/"),g=y.useMemo(()=>({basename:h,navigator:u,static:f,future:Qo({v7_relativeSplatPath:!1},p)}),[h,p,u,f]);typeof s=="string"&&(s=Ki(s));let{pathname:w="/",search:b="",hash:v="",state:C=null,key:E="default"}=s,k=y.useMemo(()=>{let S=rd(w,h);return S==null?null:{location:{pathname:S,search:b,hash:v,state:C,key:E},navigationType:l}},[h,w,b,v,C,E,l]);return k==null?null:y.createElement(ti.Provider,{value:g},y.createElement(nl.Provider,{children:i,value:k}))}function _S(n){let{children:r,location:i}=n;return ES(Mu(r),i)}new Promise(()=>{});function Mu(n,r){r===void 0&&(r=[]);let i=[];return y.Children.forEach(n,(s,l)=>{if(!y.isValidElement(s))return;let u=[...r,l];if(s.type===y.Fragment){i.push.apply(i,Mu(s.props.children,u));return}s.type!==ft&&tt(!1),!s.props.index||!s.props.children||tt(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Mu(s.props.children,u)),i.push(f)}),i}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lu(){return Lu=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},Lu.apply(this,arguments)}function BS(n,r){if(n==null)return{};var i={},s=Object.keys(n),l,u;for(u=0;u<s.length;u++)l=s[u],!(r.indexOf(l)>=0)&&(i[l]=n[l]);return i}function zS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function HS(n,r){return n.button===0&&(!r||r==="_self")&&!zS(n)}const WS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],US="6";try{window.__reactRouterVersion=US}catch{}const qS="startTransition",Vp=xh[qS];function VS(n){let{basename:r,children:i,future:s,window:l}=n,u=y.useRef();u.current==null&&(u.current=Qk({window:l,v5Compat:!0}));let f=u.current,[p,h]=y.useState({action:f.action,location:f.location}),{v7_startTransition:g}=s||{},w=y.useCallback(b=>{g&&Vp?Vp(()=>h(b)):h(b)},[h,g]);return y.useLayoutEffect(()=>f.listen(w),[f,w]),y.createElement($S,{basename:r,children:i,location:p.location,navigationType:p.action,navigator:f,future:s})}const YS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=y.forwardRef(function(r,i){let{onClick:s,relative:l,reloadDocument:u,replace:f,state:p,target:h,to:g,preventScrollReset:w,unstable_viewTransition:b}=r,v=BS(r,WS),{basename:C}=y.useContext(ti),E,k=!1;if(typeof g=="string"&&GS.test(g)&&(E=g,YS))try{let j=new URL(window.location.href),D=g.startsWith("//")?new URL(j.protocol+g):new URL(g),$=rd(D.pathname,C);D.origin===j.origin&&$!=null?g=$+D.search+D.hash:k=!0}catch{}let S=kS(g,{relative:l}),T=QS(g,{replace:f,state:p,target:h,preventScrollReset:w,relative:l,unstable_viewTransition:b});function I(j){s&&s(j),j.defaultPrevented||T(j)}return y.createElement("a",Lu({},v,{href:E||S,onClick:k||u?s:I,ref:i,target:h}))});var Yp;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Gp;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Gp||(Gp={}));function QS(n,r){let{target:i,replace:s,state:l,preventScrollReset:u,relative:f,unstable_viewTransition:p}=r===void 0?{}:r,h=od(),g=Xi(),w=sy(n,{relative:f});return y.useCallback(b=>{if(HS(b,i)){b.preventDefault();let v=s!==void 0?s:Ba(g)===Ba(w);h(n,{replace:v,state:l,preventScrollReset:u,relative:f,unstable_viewTransition:p})}},[g,h,w,s,l,i,n,u,f,p])}function KS(){const n=Xi(),r=[{href:"/",label:"Home",icon:bu},{href:"/courses",label:"Courses",icon:cn},{href:"/pricing",label:"Pricing",icon:Sr},{href:"/about",label:"About",icon:Ga},{href:"/quizzes",label:"Quizzes",icon:xu}];return c.jsx("nav",{className:"border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex justify-between h-16",children:[c.jsx("div",{className:"flex items-center",children:c.jsxs(Ue,{to:"/",className:"flex items-center space-x-2",children:[c.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:c.jsx(bu,{className:"w-5 h-5 text-white"})}),c.jsx("span",{className:"text-xl font-bold text-gray-900",children:"FintechLearn"})]})}),c.jsx("div",{className:"flex items-center space-x-8",children:r.map(({href:i,label:s,icon:l})=>c.jsxs(Ue,{to:i,className:ve("flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",n.pathname===i?"text-primary bg-primary/10":"text-gray-700 hover:text-primary hover:bg-primary/5"),children:[c.jsx(l,{className:"w-4 h-4"}),c.jsx("span",{children:s})]},i))})]})})})}function Tr({children:n}){return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(KS,{}),c.jsx("main",{children:n})]})}const XS=Uu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ie=y.forwardRef(({className:n,variant:r,size:i,asChild:s=!1,...l},u)=>{const f=s?zi:"button";return c.jsx(f,{className:ve(XS({variant:r,size:i,className:n})),ref:u,...l})});Ie.displayName="Button";const Ee=y.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ve("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r}));Ee.displayName="Card";const $t=y.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ve("flex flex-col space-y-1.5 p-6",n),...r}));$t.displayName="CardHeader";const _t=y.forwardRef(({className:n,...r},i)=>c.jsx("h3",{ref:i,className:ve("text-2xl font-semibold leading-none tracking-tight",n),...r}));_t.displayName="CardTitle";const kr=y.forwardRef(({className:n,...r},i)=>c.jsx("p",{ref:i,className:ve("text-sm text-muted-foreground",n),...r}));kr.displayName="CardDescription";const Re=y.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ve("p-6 pt-0",n),...r}));Re.displayName="CardContent";const JS=y.forwardRef(({className:n,...r},i)=>c.jsx("div",{ref:i,className:ve("flex items-center p-6 pt-0",n),...r}));JS.displayName="CardFooter";const ZS=Uu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function it({className:n,variant:r,...i}){return c.jsx("div",{className:ve(ZS({variant:r}),n),...i})}function eC(){const n=[{icon:cn,title:"Interactive Lessons",description:"Learn through engaging text lessons and real-world examples"},{icon:Hi,title:"Video Content",description:"Watch curated YouTube videos from finance experts"},{icon:qu,title:"Progress Tracking",description:"Track your learning journey with completion checkmarks"},{icon:eg,title:"AI Tutor",description:"Get personalized help from our AI finance tutor"}],r=[{id:1,title:"Budgeting & Saving",description:"Master the fundamentals of personal budgeting and building your savings",icon:Zh,lessons:6,difficulty:"Beginner",color:"bg-blue-100 text-blue-600"},{id:2,title:"Understanding Credit",description:"Learn about credit scores, debt management, and responsible borrowing",icon:Xh,lessons:5,difficulty:"Beginner",color:"bg-purple-100 text-purple-600"},{id:3,title:"Investment Basics",description:"Introduction to stocks, bonds, mutual funds, and investment strategies",icon:tg,lessons:8,difficulty:"Intermediate",color:"bg-green-100 text-green-600"},{id:4,title:"Retirement Planning",description:"Plan for your future with 401k, IRA, and retirement strategies",icon:Sr,lessons:7,difficulty:"Intermediate",color:"bg-orange-100 text-orange-600"}];return c.jsx(Tr,{children:c.jsxs("div",{className:"bg-gradient-to-br from-white via-green-50 to-blue-50",children:[c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16",children:[c.jsxs("div",{className:"text-center",children:[c.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["Master Your",c.jsx("span",{className:"text-primary block",children:"Financial Future"})]}),c.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-3xl mx-auto",children:"Learn essential financial skills through interactive lessons, expert videos, and personalized AI tutoring. From budgeting basics to investment strategies, we'll guide you every step of the way."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx(Ie,{asChild:!0,size:"lg",className:"text-lg px-8 py-3",children:c.jsxs(Ue,{to:"/courses",children:["Start Learning",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})}),c.jsxs(Ie,{variant:"outline",size:"lg",className:"text-lg px-8 py-3",children:[c.jsx(Hi,{className:"mr-2 w-5 h-5"}),"Watch Demo"]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-20",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(cn,{className:"w-8 h-8 text-primary"})}),c.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:"25+"}),c.jsx("p",{className:"text-gray-600",children:"Interactive Lessons"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(wu,{className:"w-8 h-8 text-primary"})}),c.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:"9"}),c.jsx("p",{className:"text-gray-600",children:"Core Topics"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(vw,{className:"w-8 h-8 text-primary"})}),c.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:"100%"}),c.jsx("p",{className:"text-gray-600",children:"Free to Use"})]})]})]}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Why Choose FintechLearn?"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Our comprehensive platform combines proven educational methods with modern technology"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((i,s)=>c.jsxs(Ee,{className:"text-center border-0 shadow-lg hover:shadow-xl transition-shadow",children:[c.jsxs($t,{children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(i.icon,{className:"w-8 h-8 text-primary"})}),c.jsx(_t,{className:"text-xl",children:i.title})]}),c.jsx(Re,{children:c.jsx(kr,{className:"text-base",children:i.description})})]},s))})]}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Popular Courses"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Start with these foundational courses designed for beginners"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map(i=>c.jsxs(Ee,{className:"hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md",children:[c.jsxs($t,{children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center ${i.color}`,children:c.jsx(i.icon,{className:"w-6 h-6"})}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx(it,{variant:"secondary",children:i.difficulty}),c.jsxs(it,{variant:"outline",children:[i.lessons," lessons"]})]})]}),c.jsx(_t,{className:"text-xl",children:i.title}),c.jsx(kr,{className:"text-base",children:i.description})]}),c.jsx(Re,{children:c.jsx(Ie,{asChild:!0,className:"w-full",children:c.jsxs(Ue,{to:"/courses",children:["Start Course",c.jsx(Kt,{className:"ml-2 w-4 h-4"})]})})})]},i.id))}),c.jsx("div",{className:"text-center mt-12",children:c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(Ue,{to:"/courses",children:["View All Courses",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})})]}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Choose Your Learning Path"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Start free or unlock premium features with personalized coaching and advanced AI support"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto",children:[c.jsx(Ee,{className:"text-center border-2 border-gray-200 hover:border-gray-300 transition-colors",children:c.jsxs(Re,{className:"p-8",children:[c.jsx("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:"Free"}),c.jsx("div",{className:"text-gray-600 mb-4",children:"Basic courses & community"}),c.jsx(Ie,{asChild:!0,variant:"outline",className:"w-full",children:c.jsx(Ue,{to:"/courses",children:"Start Free"})})]})}),c.jsxs(Ee,{className:"text-center border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors relative",children:[c.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:c.jsx(it,{className:"bg-primary text-white",children:"Most Popular"})}),c.jsxs(Re,{className:"p-8",children:[c.jsxs("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:["$10.99",c.jsx("span",{className:"text-lg text-gray-600",children:"/year"})]}),c.jsx("div",{className:"text-gray-600 mb-4",children:"Premium lessons & AI tutor"}),c.jsx(Ie,{asChild:!0,className:"w-full",children:c.jsx(Ue,{to:"/pricing",children:"Choose Premium"})})]})]}),c.jsx(Ee,{className:"text-center border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors",children:c.jsxs(Re,{className:"p-8",children:[c.jsxs("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:["$15.99",c.jsx("span",{className:"text-lg text-gray-600",children:"/year"})]}),c.jsx("div",{className:"text-gray-600 mb-4",children:"Personal coaching included"}),c.jsx(Ie,{asChild:!0,variant:"outline",className:"w-full border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white",children:c.jsx(Ue,{to:"/pricing",children:"Go Pro"})})]})})]}),c.jsx("div",{className:"text-center mt-8",children:c.jsx(Ie,{asChild:!0,variant:"ghost",size:"lg",children:c.jsxs(Ue,{to:"/pricing",children:["View All Plans & Features",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})})]}),c.jsx("section",{className:"bg-primary text-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Take Control of Your Finances?"}),c.jsx("p",{className:"text-xl mb-8 opacity-90 max-w-2xl mx-auto",children:"Join thousands of learners who have improved their financial literacy with our comprehensive courses."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx(Ie,{asChild:!0,size:"lg",variant:"secondary",className:"text-lg px-8 py-3",children:c.jsxs(Ue,{to:"/courses",children:["Start Learning Free",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})}),c.jsx(Ie,{asChild:!0,size:"lg",variant:"outline",className:"text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary",children:c.jsxs(Ue,{to:"/pricing",children:["View Pricing",c.jsx(Sr,{className:"ml-2 w-5 h-5"})]})})]})]})})})]})})}var sd="Progress",ad=100,[tC,mR]=es(sd),[nC,rC]=tC(sd),uy=y.forwardRef((n,r)=>{const{__scopeProgress:i,value:s=null,max:l,getValueLabel:u=iC,...f}=n;(l||l===0)&&!Qp(l)&&console.error(oC(`${l}`,"Progress"));const p=Qp(l)?l:ad;s!==null&&!Kp(s,p)&&console.error(sC(`${s}`,"Progress"));const h=Kp(s,p)?s:null,g=za(h)?u(h,p):void 0;return c.jsx(nC,{scope:i,value:h,max:p,children:c.jsx(De.div,{"aria-valuemax":p,"aria-valuemin":0,"aria-valuenow":za(h)?h:void 0,"aria-valuetext":g,role:"progressbar","data-state":my(h,p),"data-value":h??void 0,"data-max":p,...f,ref:r})})});uy.displayName=sd;var dy="ProgressIndicator",fy=y.forwardRef((n,r)=>{const{__scopeProgress:i,...s}=n,l=rC(dy,i);return c.jsx(De.div,{"data-state":my(l.value,l.max),"data-value":l.value??void 0,"data-max":l.max,...s,ref:r})});fy.displayName=dy;function iC(n,r){return`${Math.round(n/r*100)}%`}function my(n,r){return n==null?"indeterminate":n===r?"complete":"loading"}function za(n){return typeof n=="number"}function Qp(n){return za(n)&&!isNaN(n)&&n>0}function Kp(n,r){return za(n)&&!isNaN(n)&&n<=r&&n>=0}function oC(n,r){return`Invalid prop \`max\` of value \`${n}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ad}\`.`}function sC(n,r){return`Invalid prop \`value\` of value \`${n}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ad} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var py=uy,aC=fy;const Ko=y.forwardRef(({className:n,value:r,...i},s)=>c.jsx(py,{ref:s,className:ve("relative h-4 w-full overflow-hidden rounded-full bg-secondary",n),...i,children:c.jsx(aC,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));Ko.displayName=py.displayName;function lC(){const n=[{id:1,title:"Budgeting & Saving",description:"Master the fundamentals of personal budgeting, tracking expenses, and building a solid savings foundation for your future.",icon:Zh,lessons:6,duration:"2 hours",difficulty:"Beginner",progress:0,color:"bg-blue-100 text-blue-600",topics:["Creating a Budget","Tracking Expenses","Emergency Funds","Savings Goals","50/30/20 Rule","Money-Saving Tips"]},{id:2,title:"Understanding Credit",description:"Learn about credit scores, debt management, and how to build and maintain excellent credit throughout your life.",icon:Xh,lessons:5,duration:"1.5 hours",difficulty:"Beginner",progress:0,color:"bg-purple-100 text-purple-600",topics:["Credit Scores Explained","Building Credit History","Debt Management","Credit Cards vs Loans","Improving Your Score"]},{id:3,title:"Interest Rates Explained",description:"Understand simple vs compound interest, how rates affect loans and investments, and make informed financial decisions.",icon:bw,lessons:4,duration:"1 hour",difficulty:"Beginner",progress:0,color:"bg-yellow-100 text-yellow-600",topics:["Simple Interest","Compound Interest","APR vs APY","Rate Comparisons"]},{id:4,title:"Loans & Mortgages",description:"Navigate the world of borrowing, from personal loans to mortgages, and understand terms that affect your payments.",icon:mw,lessons:7,duration:"2.5 hours",difficulty:"Intermediate",progress:0,color:"bg-indigo-100 text-indigo-600",topics:["Types of Loans","Mortgage Basics","Down Payments","Loan Terms","Refinancing","PMI Explained","First-Time Buyer Tips"]},{id:5,title:"Investment Basics",description:"Introduction to stocks, bonds, mutual funds, ETFs, and building a diversified investment portfolio.",icon:tg,lessons:8,duration:"3 hours",difficulty:"Intermediate",progress:0,color:"bg-green-100 text-green-600",topics:["Stock Market Basics","Bonds & Fixed Income","Mutual Funds","ETFs","Portfolio Diversification","Dollar-Cost Averaging","Index Investing","Risk Assessment"]},{id:6,title:"Risk vs Return",description:"Learn to balance investment risk with potential returns and create a strategy that matches your risk tolerance.",icon:eg,lessons:5,duration:"1.5 hours",difficulty:"Intermediate",progress:0,color:"bg-red-100 text-red-600",topics:["Risk Types","Risk Tolerance","Asset Allocation","Risk-Return Relationship","Diversification Benefits"]},{id:7,title:"Understanding Inflation",description:"Discover how inflation affects your money over time and strategies to protect your purchasing power.",icon:Cw,lessons:3,duration:"45 minutes",difficulty:"Beginner",progress:0,color:"bg-orange-100 text-orange-600",topics:["What is Inflation","Historical Inflation Rates","Inflation Protection Strategies"]},{id:8,title:"Tax Fundamentals",description:"Learn about different types of taxes, deductions, credits, and strategies to minimize your tax burden legally.",icon:pw,lessons:6,duration:"2 hours",difficulty:"Intermediate",progress:0,color:"bg-teal-100 text-teal-600",topics:["Income Tax Basics","Tax Brackets","Deductions vs Credits","Tax-Advantaged Accounts","Tax Planning","Filing Basics"]},{id:9,title:"Retirement Planning",description:"Plan for your future with 401k, IRA, and other retirement accounts. Learn about contribution limits and strategies.",icon:Sr,lessons:7,duration:"2.5 hours",difficulty:"Intermediate",progress:0,color:"bg-pink-100 text-pink-600",topics:["401k Basics","Traditional vs Roth IRA","Contribution Limits","Employer Matching","Retirement Timeline","Social Security","Withdrawal Strategies"]}],r=i=>{switch(i){case"Beginner":return"bg-green-100 text-green-700";case"Intermediate":return"bg-yellow-100 text-yellow-700";case"Advanced":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}};return c.jsx(Tr,{children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:"Financial Literacy Courses"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Master essential financial skills through our comprehensive course library. Each course includes interactive lessons, expert videos, and quizzes to test your knowledge."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-12",children:[c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(cn,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"9"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Total Courses"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Hi,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"50+"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Video Lessons"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Ma,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"15+"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Hours of Content"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Ga,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"1000+"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Students"})]})})]}),c.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:n.map(i=>c.jsxs(Ee,{className:"hover:shadow-lg transition-shadow border-0 shadow-md",children:[c.jsxs($t,{className:"pb-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center ${i.color}`,children:c.jsx(i.icon,{className:"w-6 h-6"})}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx(it,{className:r(i.difficulty),children:i.difficulty}),c.jsxs(it,{variant:"outline",children:[i.lessons," lessons"]})]})]}),c.jsx(_t,{className:"text-xl mb-2",children:i.title}),c.jsx(kr,{className:"text-base mb-4",children:i.description}),c.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Ma,{className:"w-4 h-4"}),i.duration]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(cn,{className:"w-4 h-4"}),i.lessons," lessons"]})]}),c.jsxs("div",{className:"mb-4",children:[c.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[c.jsx("span",{children:"Progress"}),c.jsxs("span",{children:[i.progress,"%"]})]}),c.jsx(Ko,{value:i.progress,className:"h-2"})]})]}),c.jsxs(Re,{className:"pt-0",children:[c.jsxs("div",{className:"mb-6",children:[c.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Topics Covered:"}),c.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.topics.slice(0,4).map((s,l)=>c.jsx(it,{variant:"secondary",className:"text-xs",children:s},l)),i.topics.length>4&&c.jsxs(it,{variant:"secondary",className:"text-xs",children:["+",i.topics.length-4," more"]})]})]}),c.jsx(Ie,{asChild:!0,className:"w-full",size:"lg",children:c.jsx(Ue,{to:`/lessons/${i.id===1?"budgeting-and-saving":i.id===2?"understanding-credit":i.id===3?"interest-rates":i.id===4?"loans-and-mortgages":i.id===5?"investment-basics":i.id===6?"risk-vs-return":i.id===7?"understanding-inflation":i.id===8?"tax-fundamentals":i.id===9?"retirement-planning":"budgeting-and-saving"}`,children:i.progress>0?c.jsxs(c.Fragment,{children:[c.jsx(Hi,{className:"mr-2 w-4 h-4"}),"Continue Course"]}):c.jsxs(c.Fragment,{children:[c.jsx(cn,{className:"mr-2 w-4 h-4"}),"Start Course"]})})})]})]},i.id))}),c.jsx("div",{className:"mt-16 bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-8",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Recommended Learning Path"}),c.jsx("p",{className:"text-gray-600 mb-6 max-w-2xl mx-auto",children:"New to finance? Start with these courses in order for the best learning experience."}),c.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:["Budgeting & Saving","Understanding Credit","Interest Rates Explained","Investment Basics"].map((i,s)=>c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"bg-white rounded-full px-4 py-2 shadow-sm",children:c.jsxs("span",{className:"text-sm font-medium",children:[s+1,". ",i]})}),s<3&&c.jsx("div",{className:"w-8 h-px bg-gray-300 mx-2"})]},i))})]})})]})})}function cC(){return c.jsx(Tr,{children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:"About FintechLearn"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We're on a mission to make financial literacy accessible to everyone. Learn the skills you need to build a secure financial future."})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Our Mission"}),c.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"Financial literacy shouldn't be a privilege. We believe everyone deserves access to clear, practical financial education that empowers them to make informed decisions about their money."}),c.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Through interactive lessons, expert videos, and AI-powered tutoring, we're making finance education engaging and accessible for learners at every level."}),c.jsx(Ie,{asChild:!0,size:"lg",children:c.jsxs(Ue,{to:"/courses",children:["Explore Courses",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})]}),c.jsx("div",{className:"lg:pl-12",children:c.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Ga,{className:"w-8 h-8 text-primary mx-auto mb-3"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"10K+"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Students Helped"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(cn,{className:"w-8 h-8 text-primary mx-auto mb-3"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"50+"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Lessons Created"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(fw,{className:"w-8 h-8 text-primary mx-auto mb-3"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"95%"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Success Rate"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(xw,{className:"w-8 h-8 text-primary mx-auto mb-3"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"Free"}),c.jsx("div",{className:"text-sm text-gray-600",children:"Always"})]})})]})})]}),c.jsxs("div",{className:"mb-20",children:[c.jsx("h2",{className:"text-3xl font-bold text-gray-900 text-center mb-12",children:"Our Values"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[c.jsxs(Ee,{className:"text-center border-0 shadow-lg",children:[c.jsxs($t,{children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(Jh,{className:"w-8 h-8 text-primary"})}),c.jsx(_t,{children:"Accessibility"})]}),c.jsx(Re,{children:c.jsx(kr,{className:"text-base",children:"Financial education should be free and available to everyone, regardless of background or income level."})})]}),c.jsxs(Ee,{className:"text-center border-0 shadow-lg",children:[c.jsxs($t,{children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(Sr,{className:"w-8 h-8 text-primary"})}),c.jsx(_t,{children:"Practical"})]}),c.jsx(Re,{children:c.jsx(kr,{className:"text-base",children:"We focus on real-world applications and skills you can immediately apply to improve your financial situation."})})]}),c.jsxs(Ee,{className:"text-center border-0 shadow-lg",children:[c.jsxs($t,{children:[c.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(bu,{className:"w-8 h-8 text-primary"})}),c.jsx(_t,{children:"Excellence"})]}),c.jsx(Re,{children:c.jsx(kr,{className:"text-base",children:"We partner with financial experts and educators to ensure our content is accurate, up-to-date, and pedagogically sound."})})]})]})]}),c.jsxs("div",{className:"text-center bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-12",children:[c.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Ready to Start Your Financial Journey?"}),c.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-2xl mx-auto",children:"Join thousands of learners who are taking control of their financial future."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx(Ie,{asChild:!0,size:"lg",children:c.jsxs(Ue,{to:"/courses",children:["Browse Courses",c.jsx(cn,{className:"ml-2 w-5 h-5"})]})}),c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(Ue,{to:"/",children:["Learn More",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})]})]})]})})}const Du=[{id:"budgeting-and-saving",title:"Budgeting & Saving",description:"Test your knowledge of budgeting fundamentals and saving strategies",xpReward:100,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to create and manage budgets like a pro."},good:{min:5,max:7,message:"Good grasp of budgeting basics, but review recommended for stronger foundation."},needsImprovement:{max:4,message:"Needs improvement — revisit the budgeting lesson to strengthen your knowledge."}},questions:[{id:"budget-1",question:"What is the 50/30/20 rule in budgeting?",options:["50% savings, 30% needs, 20% wants","50% needs, 30% wants, 20% savings","50% wants, 30% savings, 20% needs","50% income, 30% expenses, 20% taxes"],correctAnswer:1,difficulty:"Easy"},{id:"budget-2",question:"Which expense is considered a 'need' in budgeting?",options:["Netflix subscription","Dining out at restaurants","Rent or mortgage payment","Gaming console"],correctAnswer:2,difficulty:"Easy"},{id:"budget-3",question:"How much should you aim to save in an emergency fund?",options:["1-2 months of expenses","3-6 months of expenses","6-12 months of expenses","1 year of income"],correctAnswer:1,difficulty:"Medium"},{id:"budget-4",question:"What is 'paying yourself first'?",options:["Paying your salary before others","Saving money before paying any expenses","Investing before saving","Buying wants before needs"],correctAnswer:1,difficulty:"Medium"},{id:"budget-5",question:"Which is the best place to keep your emergency fund?",options:["Under your mattress","In a checking account","In a high-yield savings account","In the stock market"],correctAnswer:2,difficulty:"Easy"},{id:"budget-6",question:"What percentage of income is typically recommended for housing costs?",options:["No more than 20%","No more than 28%","No more than 40%","No more than 50%"],correctAnswer:1,difficulty:"Medium"},{id:"budget-7",question:"Which budgeting method assigns every dollar a specific purpose?",options:["50/30/20 budgeting","Envelope method","Zero-based budgeting","Percentage budgeting"],correctAnswer:2,difficulty:"Hard"},{id:"budget-8",question:"How often should you review and adjust your budget?",options:["Once a year","Every 6 months","Monthly","Daily"],correctAnswer:2,difficulty:"Easy"},{id:"budget-9",question:"What should you do if your expenses exceed your income?",options:["Use credit cards to cover the difference","Ignore it and hope it improves","Cut expenses or increase income","Borrow money from family"],correctAnswer:2,difficulty:"Medium"},{id:"budget-10",question:"Which app feature is most helpful for tracking spending?",options:["Social media integration","Automatic transaction categorization","Gaming features","Photo filters"],correctAnswer:1,difficulty:"Hard"}]},{id:"understanding-credit",title:"Understanding Credit",description:"Test your knowledge of credit scores, credit reports, and credit management",xpReward:120,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're well-prepared to build and maintain great credit."},good:{min:5,max:7,message:"Good foundation in credit basics, but review recommended for optimal credit management."},needsImprovement:{max:4,message:"Needs improvement — revisit the credit lesson to better understand this crucial topic."}},questions:[{id:"credit-1",question:"What is a good credit score range?",options:["300-579","580-669","670-739","740-850"],correctAnswer:3,difficulty:"Easy"},{id:"credit-2",question:"What factor has the biggest impact on your credit score?",options:["Length of credit history","Payment history","Credit utilization","Types of credit"],correctAnswer:1,difficulty:"Medium"},{id:"credit-3",question:"What should your credit utilization ratio be?",options:["Below 10%","Below 30%","Below 50%","Below 70%"],correctAnswer:1,difficulty:"Medium"},{id:"credit-4",question:"How often can you check your credit report for free?",options:["Once per month","Once per quarter","Once per year from each bureau","Only when applying for credit"],correctAnswer:2,difficulty:"Easy"},{id:"credit-5",question:"What happens if you only make minimum payments on credit cards?",options:["You build credit faster","You pay more interest over time","Your credit score improves quickly","You get rewards points faster"],correctAnswer:1,difficulty:"Medium"},{id:"credit-6",question:"Which action will hurt your credit score the most?",options:["Applying for a new credit card","Paying off a loan early","Missing several payments","Checking your credit score"],correctAnswer:2,difficulty:"Easy"},{id:"credit-7",question:"What is a secured credit card?",options:["A card with no credit limit","A card that requires a cash deposit","A card with guaranteed approval","A card that builds credit faster"],correctAnswer:1,difficulty:"Hard"},{id:"credit-8",question:"How long do negative items typically stay on your credit report?",options:["2 years","5 years","7 years","10 years"],correctAnswer:2,difficulty:"Hard"},{id:"credit-9",question:"What should you do if you find an error on your credit report?",options:["Ignore it, it will fix itself","Wait for your next credit report","Dispute it with the credit bureau","Apply for a new credit card"],correctAnswer:2,difficulty:"Medium"},{id:"credit-10",question:"Which is better for your credit score?",options:["Closing old credit cards you don't use","Keeping old credit cards open","Opening many new credit cards","Using all available credit"],correctAnswer:1,difficulty:"Hard"}]},{id:"interest-rates",title:"Interest Rates Explained",description:"Test your understanding of simple vs compound interest and how rates work",xpReward:110,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You grasp how interest works in borrowing and investing."},good:{min:5,max:7,message:"Good knowledge of interest basics, but review recommended for stronger comprehension."},needsImprovement:{max:4,message:"Needs improvement — revisit the interest rates lesson to master this important concept."}},questions:[{id:"interest-1",question:"What is simple interest?",options:["Interest calculated on principal and accumulated interest","Interest calculated only on the principal amount","Interest that changes daily","Interest that is tax-free"],correctAnswer:1,difficulty:"Easy"},{id:"interest-2",question:"What is compound interest?",options:["Interest calculated only on principal","Interest that compounds monthly","Interest calculated on principal plus accumulated interest","Interest that never changes"],correctAnswer:2,difficulty:"Easy"},{id:"interest-3",question:"Which grows your money faster over time?",options:["Simple interest","Compound interest","They grow at the same rate","It depends on the principal amount"],correctAnswer:1,difficulty:"Medium"},{id:"interest-4",question:"What does APR stand for?",options:["Annual Payment Rate","Average Percentage Rate","Annual Percentage Rate","Automatic Payment Rate"],correctAnswer:2,difficulty:"Easy"},{id:"interest-5",question:"What does APY stand for?",options:["Annual Percentage Yield","Average Payment Yearly","Annual Payment Year","Automatic Percentage Yield"],correctAnswer:0,difficulty:"Easy"},{id:"interest-6",question:"For borrowers, which is better?",options:["Higher interest rates","Lower interest rates","Variable interest rates","Interest rates don't matter"],correctAnswer:1,difficulty:"Easy"},{id:"interest-7",question:"For savers, which is better?",options:["Lower APY","Higher APY","APY doesn't matter","Variable APY only"],correctAnswer:1,difficulty:"Easy"},{id:"interest-8",question:"How often does compound interest typically compound in savings accounts?",options:["Annually","Quarterly","Monthly","Daily"],correctAnswer:3,difficulty:"Medium"},{id:"interest-9",question:"If you invest $1,000 at 5% compound interest annually, how much will you have after 2 years?",options:["$1,100","$1,102.50","$1,105","$1,050"],correctAnswer:1,difficulty:"Hard"},{id:"interest-10",question:"What is the 'Rule of 72'?",options:["A way to calculate loan payments","A method to estimate how long it takes money to double","A credit score calculation","A budgeting rule"],correctAnswer:1,difficulty:"Hard"}]},{id:"loans-and-mortgages",title:"Loans & Mortgages",description:"Test your knowledge of different types of loans and mortgage basics",xpReward:130,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're prepared to make informed borrowing decisions."},good:{min:5,max:7,message:"Good grasp of loan basics, but review recommended before major borrowing decisions."},needsImprovement:{max:4,message:"Needs improvement — revisit the loans lesson before considering any major borrowing."}},questions:[{id:"loans-1",question:"What is a secured loan?",options:["A loan that's guaranteed to be approved","A loan backed by collateral","A loan with no interest","A loan from a secure bank"],correctAnswer:1,difficulty:"Medium"},{id:"loans-2",question:"What is an unsecured loan?",options:["A loan without collateral","A loan that's not safe","A loan with variable rates","A loan from an online bank"],correctAnswer:0,difficulty:"Medium"},{id:"loans-3",question:"What is PMI in mortgages?",options:["Principal Monthly Interest","Private Mortgage Insurance","Property Management Income","Primary Mortgage Investment"],correctAnswer:1,difficulty:"Hard"},{id:"loans-4",question:"When is PMI typically required?",options:["When you put down less than 10%","When you put down less than 20%","When you put down less than 30%","PMI is always required"],correctAnswer:1,difficulty:"Medium"},{id:"loans-5",question:"What is a typical mortgage term length?",options:["10 years","15 years","30 years","Both 15 and 30 years are common"],correctAnswer:3,difficulty:"Easy"},{id:"loans-6",question:"What does 'pre-approved' mean for a mortgage?",options:["You're guaranteed to get the house","The bank has checked your finances and given you a loan estimate","You don't need a down payment","You get the best interest rate"],correctAnswer:1,difficulty:"Medium"},{id:"loans-7",question:"Which loan type typically has the highest interest rate?",options:["Mortgage","Auto loan","Personal loan","Student loan"],correctAnswer:2,difficulty:"Medium"},{id:"loans-8",question:"What is refinancing?",options:["Taking out a second loan","Paying off a loan early","Replacing an existing loan with a new one","Increasing your loan amount"],correctAnswer:2,difficulty:"Hard"},{id:"loans-9",question:"What's included in a mortgage payment (PITI)?",options:["Principal, Interest, Taxes, Insurance","Payment, Interest, Transfer, Insurance","Principal, Investment, Taxes, Income","Payment, Investment, Transfer, Income"],correctAnswer:0,difficulty:"Hard"},{id:"loans-10",question:"Which factor most affects your loan interest rate?",options:["Your age","Your credit score","Your job title","Your education level"],correctAnswer:1,difficulty:"Easy"}]},{id:"investment-basics",title:"Investment Basics",description:"Test your knowledge of stocks, bonds, funds, and investment principles",xpReward:140,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to start building an investment portfolio."},good:{min:5,max:7,message:"Good foundation in investing, but review recommended before making investment decisions."},needsImprovement:{max:4,message:"Needs improvement — revisit the investment lesson before considering any investments."}},questions:[{id:"invest-1",question:"What does a stock represent?",options:["A loan to a company","Ownership in a company","A government bond","A savings account"],correctAnswer:1,difficulty:"Easy"},{id:"invest-2",question:"What is a bond?",options:["Ownership in a company","A type of stock","A loan to a company or government","A savings account"],correctAnswer:2,difficulty:"Easy"},{id:"invest-3",question:"What is diversification?",options:["Buying only one stock","Spreading investments across different assets","Investing all money at once","Only investing in bonds"],correctAnswer:1,difficulty:"Medium"},{id:"invest-4",question:"What is an ETF?",options:["Electronic Transfer Fund","Exchange Traded Fund","Emergency Trust Fund","Equity Trading Fund"],correctAnswer:1,difficulty:"Medium"},{id:"invest-5",question:"What is dollar-cost averaging?",options:["Investing a large sum all at once","Investing a fixed amount regularly regardless of market conditions","Only investing when markets are down","Only investing when markets are up"],correctAnswer:1,difficulty:"Hard"},{id:"invest-6",question:"Which investment typically has the highest long-term returns?",options:["Savings accounts","Bonds","Stocks","CDs"],correctAnswer:2,difficulty:"Medium"},{id:"invest-7",question:"What is a mutual fund?",options:["A single stock","A pooled investment vehicle managed by professionals","A type of bond","A savings account"],correctAnswer:1,difficulty:"Medium"},{id:"invest-8",question:"When should you start investing?",options:["When you have $10,000 saved","When you're 30 years old","As early as possible","Only when markets are performing well"],correctAnswer:2,difficulty:"Easy"},{id:"invest-9",question:"What is market volatility?",options:["Steady, predictable returns","Up and down movements in investment values","Only upward movements","Only downward movements"],correctAnswer:1,difficulty:"Hard"},{id:"invest-10",question:"Which investment approach is recommended for beginners?",options:["Day trading individual stocks","Low-cost index funds or ETFs","Cryptocurrency only","Individual company stocks only"],correctAnswer:1,difficulty:"Hard"}]},{id:"risk-vs-return",title:"Risk vs Return",description:"Test your understanding of investment risk and return relationships",xpReward:125,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You can balance risk and return to meet your goals."},good:{min:5,max:7,message:"Good grasp of risk concepts, but review recommended for better risk management."},needsImprovement:{max:4,message:"Needs improvement — revisit the risk vs return lesson for safer investing."}},questions:[{id:"risk-1",question:"What is the general relationship between risk and return?",options:["Higher risk, lower return","Higher risk, higher potential return","Risk and return are unrelated","Lower risk, higher return"],correctAnswer:1,difficulty:"Easy"},{id:"risk-2",question:"Which investment is typically considered the safest?",options:["Individual stocks","Corporate bonds","Government bonds","Cryptocurrency"],correctAnswer:2,difficulty:"Easy"},{id:"risk-3",question:"What is risk tolerance?",options:["How much money you can invest","How much loss you can emotionally and financially handle","How long you plan to invest","How much return you expect"],correctAnswer:1,difficulty:"Medium"},{id:"risk-4",question:"Who typically can take more investment risk?",options:["Someone near retirement","Someone who needs money in 1 year","A young person with decades until retirement","Someone with no emergency fund"],correctAnswer:2,difficulty:"Medium"},{id:"risk-5",question:"What is systematic risk?",options:["Risk specific to one company","Risk that affects the entire market","Risk you can eliminate through diversification","Risk from poor management"],correctAnswer:1,difficulty:"Hard"},{id:"risk-6",question:"How can you reduce investment risk?",options:["Put all money in one stock","Diversify across different investments","Only invest when markets are up","Avoid all investments"],correctAnswer:1,difficulty:"Medium"},{id:"risk-7",question:"What is inflation risk?",options:["Risk of market crashes","Risk that returns won't keep up with rising prices","Risk of company bankruptcy","Risk of interest rate changes"],correctAnswer:1,difficulty:"Hard"},{id:"risk-8",question:"Which asset allocation is more aggressive?",options:["80% bonds, 20% stocks","50% bonds, 50% stocks","20% bonds, 80% stocks","100% bonds"],correctAnswer:2,difficulty:"Medium"},{id:"risk-9",question:"What should drive your risk tolerance?",options:["Current market performance","Your friend's investment choices","Your age, goals, and financial situation","Latest investment trends"],correctAnswer:2,difficulty:"Hard"},{id:"risk-10",question:"When should you reassess your risk tolerance?",options:["Never, it should stay the same","Only during market crashes","Regularly, as your life circumstances change","Only when you lose money"],correctAnswer:2,difficulty:"Easy"}]},{id:"understanding-inflation",title:"Understanding Inflation",description:"Test your knowledge of inflation and its impact on your money",xpReward:105,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You know how to protect your money from inflation."},good:{min:5,max:7,message:"Good grasp of inflation basics, but review recommended for better protection strategies."},needsImprovement:{max:4,message:"Needs improvement — revisit the inflation lesson to protect your purchasing power."}},questions:[{id:"inflation-1",question:"What is inflation?",options:["When prices go down over time","When prices go up over time","When money becomes worth more","When interest rates are high"],correctAnswer:1,difficulty:"Easy"},{id:"inflation-2",question:"How does inflation affect your money?",options:["It increases purchasing power","It decreases purchasing power","It has no effect on money","It only affects investments"],correctAnswer:1,difficulty:"Easy"},{id:"inflation-3",question:"What is a typical healthy inflation rate?",options:["0%","2%","5%","10%"],correctAnswer:1,difficulty:"Medium"},{id:"inflation-4",question:"Which type of account is most hurt by inflation?",options:["Stock investments","Real estate","Cash in a low-interest savings account","Commodities"],correctAnswer:2,difficulty:"Medium"},{id:"inflation-5",question:"What are TIPS?",options:["Tax Interest Proof Securities","Treasury Inflation-Protected Securities","Total Investment Protection Schemes","Time Interest Payment Systems"],correctAnswer:1,difficulty:"Hard"},{id:"inflation-6",question:"Which often provides better inflation protection?",options:["Cash under a mattress","Low-interest savings accounts","Stock investments","Fixed-rate bonds"],correctAnswer:2,difficulty:"Medium"},{id:"inflation-7",question:"What causes inflation?",options:["Increased demand for goods and services","Rising production costs","Monetary policy changes","All of the above"],correctAnswer:3,difficulty:"Hard"},{id:"inflation-8",question:"How does inflation affect fixed-rate debt?",options:["It makes debt more expensive","It makes debt easier to pay off","It has no effect on debt","It only affects variable-rate debt"],correctAnswer:1,difficulty:"Hard"},{id:"inflation-9",question:"Which group is most hurt by unexpected inflation?",options:["Young workers","People on fixed incomes","Stock investors","Real estate owners"],correctAnswer:1,difficulty:"Medium"},{id:"inflation-10",question:"What is deflation?",options:["Very high inflation","Moderate inflation","When prices decrease over time","When inflation stops"],correctAnswer:2,difficulty:"Easy"}]},{id:"tax-fundamentals",title:"Tax Fundamentals",description:"Test your knowledge of taxes, deductions, and tax planning strategies",xpReward:135,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're ready to optimize your tax strategy."},good:{min:5,max:7,message:"Good tax knowledge foundation, but review recommended for better tax planning."},needsImprovement:{max:4,message:"Needs improvement — revisit the tax lesson for better financial planning."}},questions:[{id:"tax-1",question:"What is a progressive tax system?",options:["Everyone pays the same rate","Higher earners pay higher rates","Lower earners pay higher rates","No one pays taxes"],correctAnswer:1,difficulty:"Medium"},{id:"tax-2",question:"What is the difference between deductions and credits?",options:["There is no difference","Deductions reduce taxable income, credits reduce tax owed","Credits reduce taxable income, deductions reduce tax owed","Both reduce tax owed dollar-for-dollar"],correctAnswer:1,difficulty:"Hard"},{id:"tax-3",question:"Which is more valuable?",options:["A $1,000 tax deduction","A $1,000 tax credit","They have the same value","It depends on your tax bracket"],correctAnswer:1,difficulty:"Medium"},{id:"tax-4",question:"What is the standard deduction for 2024 (single filer)?",options:["$12,550","$13,850","$14,600","$15,000"],correctAnswer:1,difficulty:"Hard"},{id:"tax-5",question:"What are payroll taxes used for?",options:["General government operations","Social Security and Medicare","Military spending","Education funding"],correctAnswer:1,difficulty:"Medium"},{id:"tax-6",question:"When are taxes typically due?",options:["April 1st","April 15th","March 15th","May 1st"],correctAnswer:1,difficulty:"Easy"},{id:"tax-7",question:"What is a traditional 401(k)?",options:["A post-tax retirement account","A pre-tax retirement account","A type of savings account","A government bond"],correctAnswer:1,difficulty:"Medium"},{id:"tax-8",question:"What is capital gains tax?",options:["Tax on your salary","Tax on investment profits","Tax on your home","Tax on business income"],correctAnswer:1,difficulty:"Medium"},{id:"tax-9",question:"How long must you hold an investment for long-term capital gains treatment?",options:["6 months","1 year","More than 1 year","2 years"],correctAnswer:2,difficulty:"Hard"},{id:"tax-10",question:"What is tax loss harvesting?",options:["Growing vegetables to reduce taxes","Selling losing investments to offset gains","Avoiding all investments","Only investing in tax-free accounts"],correctAnswer:1,difficulty:"Hard"}]},{id:"retirement-planning",title:"Retirement Planning",description:"Test your knowledge of 401(k)s, IRAs, and retirement strategies",xpReward:150,masteryScoring:{excellent:{min:8,message:"Excellent understanding! You're well-prepared to plan for a secure retirement."},good:{min:5,max:7,message:"Good retirement planning foundation, but review recommended for optimal planning."},needsImprovement:{max:4,message:"Needs improvement — revisit the retirement lesson to secure your financial future."}},questions:[{id:"retirement-1",question:"What is the main difference between a traditional and Roth IRA?",options:["Traditional is for young people, Roth is for older people","Traditional offers tax deduction now, Roth offers tax-free withdrawals later","Traditional has higher contribution limits","There is no difference"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-2",question:"What is employer matching in a 401(k)?",options:["When your employer pays your salary","When your employer contributes money based on your contributions","When your employer manages your investments","When your employer pays your taxes"],correctAnswer:1,difficulty:"Easy"},{id:"retirement-3",question:"What is the 2024 contribution limit for 401(k)s?",options:["$20,500","$22,500","$23,000","$25,000"],correctAnswer:2,difficulty:"Hard"},{id:"retirement-4",question:"When can you withdraw from a 401(k) without penalty?",options:["Age 55","Age 59½","Age 62","Age 65"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-5",question:"What percentage of income should you save for retirement?",options:["5-8%","10-15%","20-25%","30%+"],correctAnswer:1,difficulty:"Medium"},{id:"retirement-6",question:"What is Social Security?",options:["A government retirement program","A type of 401(k)","A private insurance plan","A savings account"],correctAnswer:0,difficulty:"Easy"},{id:"retirement-7",question:"At what age can you collect full Social Security benefits?",options:["62","65","67 (for most people)","70"],correctAnswer:2,difficulty:"Medium"},{id:"retirement-8",question:"What is a target-date fund?",options:["A fund that expires on a certain date","A fund that automatically adjusts allocation as you age","A fund that only invests in one company","A fund with guaranteed returns"],correctAnswer:1,difficulty:"Hard"},{id:"retirement-9",question:"What is the penalty for early 401(k) withdrawal?",options:["5%","10%","15%","20%"],correctAnswer:1,difficulty:"Hard"},{id:"retirement-10",question:"Why is starting retirement savings early important?",options:["You get better investment options","Compound interest has more time to work","Early savers get government bonuses","You can retire at 50"],correctAnswer:1,difficulty:"Easy"}]}];function uC(n){return Du.find(r=>r.id===n)}function Xp(n,r){const i=n.questions.reduce((p,h,g)=>p+(h.correctAnswer===r[g]?1:0),0),s=Math.round(i/n.questions.length*100);let l,u,f;return i>=n.masteryScoring.excellent.min?(l="excellent",u=n.masteryScoring.excellent.message,f=n.xpReward):i>=n.masteryScoring.good.min?(l="good",u=n.masteryScoring.good.message,f=Math.round(n.xpReward*.7)):(l="needsImprovement",u=n.masteryScoring.needsImprovement.message,f=Math.round(n.xpReward*.3)),{score:i,percentage:s,masteryLevel:l,message:u,xpEarned:f}}const Ou=[{level:1,title:"Finance Novice",minXP:0,maxXP:199,description:"Just starting your financial journey",badge:"🌱"},{level:2,title:"Budget Builder",minXP:200,maxXP:449,description:"Learning to manage money basics",badge:"💰"},{level:3,title:"Credit Climber",minXP:450,maxXP:749,description:"Understanding credit and debt management",badge:"📈"},{level:4,title:"Investment Explorer",minXP:750,maxXP:1099,description:"Discovering the world of investing",badge:"🎯"},{level:5,title:"Risk Manager",minXP:1100,maxXP:1499,description:"Balancing risk and return like a pro",badge:"⚖️"},{level:6,title:"Tax Strategist",minXP:1500,maxXP:1999,description:"Optimizing your tax situation",badge:"🧮"},{level:7,title:"Retirement Planner",minXP:2e3,maxXP:2599,description:"Building wealth for the future",badge:"🏆"},{level:8,title:"Finance Expert",minXP:2600,maxXP:3299,description:"Mastering advanced financial concepts",badge:"🎓"},{level:9,title:"Wealth Builder",minXP:3300,maxXP:4099,description:"Creating substantial financial wealth",badge:"💎"},{level:10,title:"Financial Guru",minXP:4100,maxXP:1/0,description:"Peak financial literacy mastery",badge:"👑"}];function hy(n){return Ou.find(r=>n>=r.minXP&&n<=r.maxXP)||Ou[0]}function dC(n){return Ou.find(r=>r.level===n+1)||null}function gy(n){const r=hy(n),i=dC(r.level);if(!i)return{currentLevel:r,nextLevel:null,progressToNext:100,xpNeededForNext:0};const s=n-r.minXP,l=i.minXP-r.minXP,u=Math.round(s/l*100),f=i.minXP-n;return{currentLevel:r,nextLevel:i,progressToNext:u,xpNeededForNext:f}}function yy(n){typeof window<"u"&&localStorage.setItem("fintechlearn_progress",JSON.stringify(n))}function vy(){if(typeof window<"u"){const n=localStorage.getItem("fintechlearn_progress");if(n)return JSON.parse(n)}return{totalXP:0,currentLevel:1,completedQuizzes:[],badges:[]}}function fC(n,r){const i=n.totalXP+r,s=hy(i),l={...n,totalXP:i,currentLevel:s.level};return s.level>n.currentLevel&&(l.badges=[...n.badges,s.badge]),yy(l),l}function mC(n,r,i){if(n.completedQuizzes.includes(r))return n;const s=fC(n,i);return s.completedQuizzes=[...n.completedQuizzes,r],yy(s),s}function pC(){const[n,r]=y.useState(null);y.useEffect(()=>{r(vy())},[]);const i=h=>{switch(h){case"Easy":return"bg-green-100 text-green-700";case"Medium":return"bg-yellow-100 text-yellow-700";case"Hard":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}},s=h=>(n==null?void 0:n.completedQuizzes.includes(h))||!1,l=()=>(n==null?void 0:n.completedQuizzes.length)||0,u=()=>l()>0?85:0,f=()=>l()>0?"Budgeting":"-",p=n?gy(n.totalXP):null;return c.jsx(Tr,{children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:"Financial Knowledge Quizzes"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Test your financial literacy with our interactive quizzes. Track your progress and identify areas for improvement."})]}),p&&c.jsx(Ee,{className:"mb-8 bg-gradient-to-r from-primary/10 to-blue-50",children:c.jsxs(Re,{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold",children:[p.currentLevel.badge," Level"," ",p.currentLevel.level,": ",p.currentLevel.title]}),c.jsx("p",{className:"text-gray-600",children:p.currentLevel.description})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("div",{className:"text-2xl font-bold",children:[n==null?void 0:n.totalXP," XP"]}),p.nextLevel&&c.jsxs("div",{className:"text-sm text-gray-600",children:[p.xpNeededForNext," XP to next level"]})]})]}),p.nextLevel&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-sm",children:[c.jsxs("span",{children:["Progress to ",p.nextLevel.badge," ",p.nextLevel.title]}),c.jsxs("span",{children:[p.progressToNext,"%"]})]}),c.jsx(Ko,{value:p.progressToNext,className:"h-3"})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-12",children:[c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(xu,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:Du.length}),c.jsx("div",{className:"text-sm text-gray-600",children:"Available Quizzes"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Sr,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:l()}),c.jsx("div",{className:"text-sm text-gray-600",children:"Completed"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Aa,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsxs("div",{className:"text-2xl font-bold text-gray-900",children:[u(),"%"]}),c.jsx("div",{className:"text-sm text-gray-600",children:"Average Score"})]})}),c.jsx(Ee,{className:"text-center",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(wu,{className:"w-8 h-8 text-primary mx-auto mb-2"}),c.jsx("div",{className:"text-2xl font-bold text-gray-900",children:f()}),c.jsx("div",{className:"text-sm text-gray-600",children:"Best Category"})]})})]}),c.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",children:Du.map(h=>{const g=s(h.id),w=h.questions.reduce((b,v)=>(b[v.difficulty]=(b[v.difficulty]||0)+1,b),{});return c.jsxs(Ee,{className:"hover:shadow-lg transition-shadow border-0 shadow-md",children:[c.jsxs($t,{className:"pb-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex gap-2",children:[c.jsxs(it,{className:"bg-primary/10 text-primary",children:[h.questions.length," Questions"]}),c.jsxs(it,{className:"bg-blue-100 text-blue-700",children:["+",h.xpReward," XP"]})]}),c.jsxs("div",{className:"flex gap-2",children:[Object.entries(w).map(([b,v])=>c.jsxs(it,{className:i(b),variant:"outline",children:[v," ",b]},b)),g&&c.jsxs(it,{className:"bg-green-100 text-green-700",children:[c.jsx(qu,{className:"w-3 h-3 mr-1"}),"Completed"]})]})]}),c.jsx(_t,{className:"text-xl mb-2",children:h.title}),c.jsx(kr,{className:"text-base mb-4",children:h.description}),c.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(xu,{className:"w-4 h-4"}),h.questions.length," questions"]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Ma,{className:"w-4 h-4"}),"~15 min"]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(La,{className:"w-4 h-4"}),"+",h.xpReward," XP"]})]})]}),c.jsx(Re,{className:"pt-0",children:c.jsx(Ie,{asChild:!0,className:"w-full",size:"lg",children:c.jsx(Ue,{to:`/quiz/${h.id}`,children:g?c.jsxs(c.Fragment,{children:[c.jsx(Aa,{className:"mr-2 w-4 h-4"}),"Retake Quiz"]}):c.jsxs(c.Fragment,{children:[c.jsx(Hi,{className:"mr-2 w-4 h-4"}),"Start Quiz"]})})})})]},h.id)})}),c.jsx("div",{className:"bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-8 mb-12",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Study Recommendations"}),c.jsx("p",{className:"text-gray-600 mb-6 max-w-2xl mx-auto",children:"Start with our courses to build your knowledge, then come back to test what you've learned with these quizzes."}),c.jsx(Ie,{asChild:!0,size:"lg",children:c.jsxs(Ue,{to:"/courses",children:["Browse Courses",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})]})}),c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Coming Soon"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[c.jsx(Ee,{className:"text-center border-dashed",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Aa,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Leaderboards"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Compete with other learners"})]})}),c.jsx(Ee,{className:"text-center border-dashed",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(Sr,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Achievements"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Earn badges for milestones"})]})}),c.jsx(Ee,{className:"text-center border-dashed",children:c.jsxs(Re,{className:"pt-6",children:[c.jsx(wu,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("div",{className:"font-medium text-gray-700",children:"Analytics"}),c.jsx("div",{className:"text-sm text-gray-500",children:"Detailed progress tracking"})]})})]})]})]})})}function hC(){const[n,r]=y.useState("annual"),i=[{id:"free",name:"Free",description:"Perfect for getting started with financial basics",price:{monthly:0,annual:0},originalPrice:null,popular:!1,icon:cn,iconColor:"text-gray-600",bgColor:"bg-gray-50",borderColor:"border-gray-200",buttonVariant:"outline",features:["Access to basic financial literacy courses","Community support","Limited quizzes (3 per month)","Basic progress tracking","Email newsletter with tips"]},{id:"premium",name:"Premium",description:"Most popular choice for serious learners",price:{monthly:15.99,annual:10.99},originalPrice:{monthly:null,annual:15.99},popular:!0,icon:La,iconColor:"text-primary",bgColor:"bg-primary/5",borderColor:"border-primary",buttonVariant:"default",features:["Everything in Free","Access to premium video lessons","Personalized learning paths","AI tutor with advanced support","Unlimited quizzes and practice tests","Certificate of completion","Mobile app access"]},{id:"pro",name:"Pro",description:"Complete solution with personal coaching",price:{monthly:19.99,annual:15.99},originalPrice:{monthly:null,annual:19.99},popular:!1,icon:yw,iconColor:"text-yellow-600",bgColor:"bg-gradient-to-br from-yellow-50 to-orange-50",borderColor:"border-yellow-300",buttonVariant:"default",features:["Everything in Premium","1-on-1 finance coaching sessions (2 per month)","Personalized lesson feedback","Priority email support (24h response)","Custom learning roadmap","Access to exclusive webinars","Financial planning templates","Direct coach messaging"]}],s=u=>u.price[n]===0?"Free":`$${u.price[n]}`,l=u=>{var f;return n==="annual"&&((f=u.originalPrice)!=null&&f.annual)?`Save ${Math.round((u.originalPrice.annual-u.price.annual)/u.originalPrice.annual*100)}%`:null};return c.jsx(Tr,{children:c.jsx("div",{className:"py-16 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:"Choose Your Learning Path"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:"Start your financial literacy journey with the plan that fits your goals. Upgrade or downgrade anytime."}),c.jsxs("div",{className:"flex items-center justify-center space-x-4 mb-12",children:[c.jsx("span",{className:ve("text-sm font-medium",n==="monthly"?"text-gray-900":"text-gray-500"),children:"Monthly"}),c.jsx("button",{onClick:()=>r(n==="monthly"?"annual":"monthly"),className:ve("relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",n==="annual"?"bg-primary":"bg-gray-300"),children:c.jsx("span",{className:ve("inline-block h-4 w-4 transform rounded-full bg-white transition-transform",n==="annual"?"translate-x-6":"translate-x-1")})}),c.jsx("span",{className:ve("text-sm font-medium",n==="annual"?"text-gray-900":"text-gray-500"),children:"Annual"}),n==="annual"&&c.jsx(it,{className:"bg-green-100 text-green-700 ml-2",children:"2 months free!"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:i.map(u=>{var h;const f=u.icon,p=l(u);return c.jsxs(Ee,{className:ve("relative transition-all duration-200 hover:shadow-lg",u.popular?"ring-2 ring-primary shadow-lg scale-105":"hover:shadow-md",u.borderColor),children:[u.popular&&c.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:c.jsxs(it,{className:"bg-primary text-white px-4 py-1 text-sm font-medium",children:[c.jsx(La,{className:"w-3 h-3 mr-1"}),"Most Popular"]})}),c.jsxs($t,{className:ve("text-center pb-4",u.bgColor),children:[c.jsx("div",{className:"flex justify-center mb-4",children:c.jsx("div",{className:ve("w-12 h-12 rounded-full flex items-center justify-center",u.popular?"bg-primary/10":u.id==="pro"?"bg-yellow-100":"bg-gray-100"),children:c.jsx(f,{className:ve("w-6 h-6",u.iconColor)})})}),c.jsx(_t,{className:"text-2xl font-bold mb-2",children:u.name}),c.jsx("p",{className:"text-gray-600 text-sm mb-6",children:u.description}),c.jsxs("div",{className:"flex items-baseline justify-center space-x-2",children:[c.jsx("span",{className:"text-4xl font-bold text-gray-900",children:s(u)}),u.price[n]>0&&c.jsxs("span",{className:"text-gray-500",children:["/",n==="annual"?"year":"month"]})]}),p&&c.jsx("div",{className:"mt-2",children:c.jsx(it,{className:"bg-green-100 text-green-700",children:p})}),n==="annual"&&((h=u.originalPrice)==null?void 0:h.annual)&&c.jsx("p",{className:"text-sm text-gray-500 mt-1",children:c.jsxs("span",{className:"line-through",children:["$",u.originalPrice.annual,"/year"]})})]}),c.jsxs(Re,{className:"pt-6",children:[c.jsx(Ie,{className:ve("w-full mb-6",u.popular?"shadow-md":""),variant:u.buttonVariant,size:"lg",children:u.id==="free"?c.jsxs(c.Fragment,{children:[c.jsx(cn,{className:"mr-2 w-4 h-4"}),"Get Started Free"]}):c.jsxs(c.Fragment,{children:[c.jsx(Pw,{className:"mr-2 w-4 h-4"}),"Choose ",u.name]})}),c.jsx("ul",{className:"space-y-3",children:u.features.map((g,w)=>c.jsxs("li",{className:"flex items-start space-x-3",children:[c.jsx(hw,{className:"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"}),c.jsx("span",{className:"text-gray-700 text-sm",children:g})]},w))})]})]},u.id)})}),c.jsxs("div",{className:"mt-16 text-center",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12",children:[c.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[c.jsx(Jh,{className:"w-6 h-6 text-red-500"}),c.jsx("span",{className:"text-gray-700",children:"30-day money-back guarantee"})]}),c.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[c.jsx(Ga,{className:"w-6 h-6 text-blue-500"}),c.jsx("span",{className:"text-gray-700",children:"Join 10,000+ learners"})]}),c.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[c.jsx(ku,{className:"w-6 h-6 text-green-500"}),c.jsx("span",{className:"text-gray-700",children:"24/7 support available"})]})]}),c.jsxs("div",{className:"border-t pt-12",children:[c.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:"Frequently Asked Questions"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Can I upgrade or downgrade my plan?"}),c.jsx("p",{className:"text-gray-600 text-sm",children:"Yes! You can change your plan anytime. Upgrades take effect immediately, and downgrades take effect at your next billing cycle."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Is there a free trial for premium plans?"}),c.jsx("p",{className:"text-gray-600 text-sm",children:"All premium plans come with a 30-day money-back guarantee. Try any paid plan risk-free!"})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"What payment methods do you accept?"}),c.jsx("p",{className:"text-gray-600 text-sm",children:"We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Do you offer student discounts?"}),c.jsx("p",{className:"text-gray-600 text-sm",children:"Yes! Students get 50% off all premium plans with a valid student ID. Contact support to apply."})]})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Still have questions?"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"We're here to help you choose the right plan for your financial learning journey."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(Ue,{to:"/about",children:[c.jsx(ku,{className:"mr-2 w-4 h-4"}),"Contact Support"]})}),c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",children:c.jsxs(Ue,{to:"/courses",children:[c.jsx(Rw,{className:"mr-2 w-4 h-4"}),"View Course Preview"]})})]})]})]})]})]})})})}const gC=()=>{const n=Xi();return y.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),c.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),c.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},xy=y.forwardRef(({className:n,type:r,...i},s)=>c.jsx("input",{type:r,className:ve("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:s,...i}));xy.displayName="Input";var yC=y.createContext(void 0);function vC(n){const r=y.useContext(yC);return n||r||"ltr"}function xC(n,[r,i]){return Math.min(i,Math.max(r,n))}function wC(n,r){return y.useReducer((i,s)=>r[i][s]??i,n)}var ld="ScrollArea",[wy,pR]=es(ld),[bC,Xt]=wy(ld),by=y.forwardRef((n,r)=>{const{__scopeScrollArea:i,type:s="hover",dir:l,scrollHideDelay:u=600,...f}=n,[p,h]=y.useState(null),[g,w]=y.useState(null),[b,v]=y.useState(null),[C,E]=y.useState(null),[k,S]=y.useState(null),[T,I]=y.useState(0),[j,D]=y.useState(0),[$,U]=y.useState(!1),[z,G]=y.useState(!1),V=He(r,ie=>h(ie)),Y=vC(l);return c.jsx(bC,{scope:i,type:s,dir:Y,scrollHideDelay:u,scrollArea:p,viewport:g,onViewportChange:w,content:b,onContentChange:v,scrollbarX:C,onScrollbarXChange:E,scrollbarXEnabled:$,onScrollbarXEnabledChange:U,scrollbarY:k,onScrollbarYChange:S,scrollbarYEnabled:z,onScrollbarYEnabledChange:G,onCornerWidthChange:I,onCornerHeightChange:D,children:c.jsx(De.div,{dir:Y,...f,ref:V,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":j+"px",...n.style}})})});by.displayName=ld;var ky="ScrollAreaViewport",Sy=y.forwardRef((n,r)=>{const{__scopeScrollArea:i,children:s,nonce:l,...u}=n,f=Xt(ky,i),p=y.useRef(null),h=He(r,p,f.onViewportChange);return c.jsxs(c.Fragment,{children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),c.jsx(De.div,{"data-radix-scroll-area-viewport":"",...u,ref:h,style:{overflowX:f.scrollbarXEnabled?"scroll":"hidden",overflowY:f.scrollbarYEnabled?"scroll":"hidden",...n.style},children:c.jsx("div",{ref:f.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});Sy.displayName=ky;var Rn="ScrollAreaScrollbar",cd=y.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Xt(Rn,n.__scopeScrollArea),{onScrollbarXEnabledChange:u,onScrollbarYEnabledChange:f}=l,p=n.orientation==="horizontal";return y.useEffect(()=>(p?u(!0):f(!0),()=>{p?u(!1):f(!1)}),[p,u,f]),l.type==="hover"?c.jsx(kC,{...s,ref:r,forceMount:i}):l.type==="scroll"?c.jsx(SC,{...s,ref:r,forceMount:i}):l.type==="auto"?c.jsx(Cy,{...s,ref:r,forceMount:i}):l.type==="always"?c.jsx(ud,{...s,ref:r}):null});cd.displayName=Rn;var kC=y.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Xt(Rn,n.__scopeScrollArea),[u,f]=y.useState(!1);return y.useEffect(()=>{const p=l.scrollArea;let h=0;if(p){const g=()=>{window.clearTimeout(h),f(!0)},w=()=>{h=window.setTimeout(()=>f(!1),l.scrollHideDelay)};return p.addEventListener("pointerenter",g),p.addEventListener("pointerleave",w),()=>{window.clearTimeout(h),p.removeEventListener("pointerenter",g),p.removeEventListener("pointerleave",w)}}},[l.scrollArea,l.scrollHideDelay]),c.jsx(Vi,{present:i||u,children:c.jsx(Cy,{"data-state":u?"visible":"hidden",...s,ref:r})})}),SC=y.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Xt(Rn,n.__scopeScrollArea),u=n.orientation==="horizontal",f=il(()=>h("SCROLL_END"),100),[p,h]=wC("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return y.useEffect(()=>{if(p==="idle"){const g=window.setTimeout(()=>h("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(g)}},[p,l.scrollHideDelay,h]),y.useEffect(()=>{const g=l.viewport,w=u?"scrollLeft":"scrollTop";if(g){let b=g[w];const v=()=>{const C=g[w];b!==C&&(h("SCROLL"),f()),b=C};return g.addEventListener("scroll",v),()=>g.removeEventListener("scroll",v)}},[l.viewport,u,h,f]),c.jsx(Vi,{present:i||p!=="hidden",children:c.jsx(ud,{"data-state":p==="hidden"?"hidden":"visible",...s,ref:r,onPointerEnter:Pe(n.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:Pe(n.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),Cy=y.forwardRef((n,r)=>{const i=Xt(Rn,n.__scopeScrollArea),{forceMount:s,...l}=n,[u,f]=y.useState(!1),p=n.orientation==="horizontal",h=il(()=>{if(i.viewport){const g=i.viewport.offsetWidth<i.viewport.scrollWidth,w=i.viewport.offsetHeight<i.viewport.scrollHeight;f(p?g:w)}},10);return qi(i.viewport,h),qi(i.content,h),c.jsx(Vi,{present:s||u,children:c.jsx(ud,{"data-state":u?"visible":"hidden",...l,ref:r})})}),ud=y.forwardRef((n,r)=>{const{orientation:i="vertical",...s}=n,l=Xt(Rn,n.__scopeScrollArea),u=y.useRef(null),f=y.useRef(0),[p,h]=y.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),g=Ay(p.viewport,p.content),w={...s,sizes:p,onSizesChange:h,hasThumb:g>0&&g<1,onThumbChange:v=>u.current=v,onThumbPointerUp:()=>f.current=0,onThumbPointerDown:v=>f.current=v};function b(v,C){return AC(v,f.current,p,C)}return i==="horizontal"?c.jsx(CC,{...w,ref:r,onThumbPositionChange:()=>{if(l.viewport&&u.current){const v=l.viewport.scrollLeft,C=Jp(v,p,l.dir);u.current.style.transform=`translate3d(${C}px, 0, 0)`}},onWheelScroll:v=>{l.viewport&&(l.viewport.scrollLeft=v)},onDragScroll:v=>{l.viewport&&(l.viewport.scrollLeft=b(v,l.dir))}}):i==="vertical"?c.jsx(EC,{...w,ref:r,onThumbPositionChange:()=>{if(l.viewport&&u.current){const v=l.viewport.scrollTop,C=Jp(v,p);u.current.style.transform=`translate3d(0, ${C}px, 0)`}},onWheelScroll:v=>{l.viewport&&(l.viewport.scrollTop=v)},onDragScroll:v=>{l.viewport&&(l.viewport.scrollTop=b(v))}}):null}),CC=y.forwardRef((n,r)=>{const{sizes:i,onSizesChange:s,...l}=n,u=Xt(Rn,n.__scopeScrollArea),[f,p]=y.useState(),h=y.useRef(null),g=He(r,h,u.onScrollbarXChange);return y.useEffect(()=>{h.current&&p(getComputedStyle(h.current))},[h]),c.jsx(Ry,{"data-orientation":"horizontal",...l,ref:g,sizes:i,style:{bottom:0,left:u.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:u.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":rl(i)+"px",...n.style},onThumbPointerDown:w=>n.onThumbPointerDown(w.x),onDragScroll:w=>n.onDragScroll(w.x),onWheelScroll:(w,b)=>{if(u.viewport){const v=u.viewport.scrollLeft+w.deltaX;n.onWheelScroll(v),Iy(v,b)&&w.preventDefault()}},onResize:()=>{h.current&&u.viewport&&f&&s({content:u.viewport.scrollWidth,viewport:u.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:Wa(f.paddingLeft),paddingEnd:Wa(f.paddingRight)}})}})}),EC=y.forwardRef((n,r)=>{const{sizes:i,onSizesChange:s,...l}=n,u=Xt(Rn,n.__scopeScrollArea),[f,p]=y.useState(),h=y.useRef(null),g=He(r,h,u.onScrollbarYChange);return y.useEffect(()=>{h.current&&p(getComputedStyle(h.current))},[h]),c.jsx(Ry,{"data-orientation":"vertical",...l,ref:g,sizes:i,style:{top:0,right:u.dir==="ltr"?0:void 0,left:u.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":rl(i)+"px",...n.style},onThumbPointerDown:w=>n.onThumbPointerDown(w.y),onDragScroll:w=>n.onDragScroll(w.y),onWheelScroll:(w,b)=>{if(u.viewport){const v=u.viewport.scrollTop+w.deltaY;n.onWheelScroll(v),Iy(v,b)&&w.preventDefault()}},onResize:()=>{h.current&&u.viewport&&f&&s({content:u.viewport.scrollHeight,viewport:u.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:Wa(f.paddingTop),paddingEnd:Wa(f.paddingBottom)}})}})}),[RC,Ey]=wy(Rn),Ry=y.forwardRef((n,r)=>{const{__scopeScrollArea:i,sizes:s,hasThumb:l,onThumbChange:u,onThumbPointerUp:f,onThumbPointerDown:p,onThumbPositionChange:h,onDragScroll:g,onWheelScroll:w,onResize:b,...v}=n,C=Xt(Rn,i),[E,k]=y.useState(null),S=He(r,V=>k(V)),T=y.useRef(null),I=y.useRef(""),j=C.viewport,D=s.content-s.viewport,$=Ze(w),U=Ze(h),z=il(b,10);function G(V){if(T.current){const Y=V.clientX-T.current.left,ie=V.clientY-T.current.top;g({x:Y,y:ie})}}return y.useEffect(()=>{const V=Y=>{const ie=Y.target;(E==null?void 0:E.contains(ie))&&$(Y,D)};return document.addEventListener("wheel",V,{passive:!1}),()=>document.removeEventListener("wheel",V,{passive:!1})},[j,E,D,$]),y.useEffect(U,[s,U]),qi(E,z),qi(C.content,z),c.jsx(RC,{scope:i,scrollbar:E,hasThumb:l,onThumbChange:Ze(u),onThumbPointerUp:Ze(f),onThumbPositionChange:U,onThumbPointerDown:Ze(p),children:c.jsx(De.div,{...v,ref:S,style:{position:"absolute",...v.style},onPointerDown:Pe(n.onPointerDown,V=>{V.button===0&&(V.target.setPointerCapture(V.pointerId),T.current=E.getBoundingClientRect(),I.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",C.viewport&&(C.viewport.style.scrollBehavior="auto"),G(V))}),onPointerMove:Pe(n.onPointerMove,G),onPointerUp:Pe(n.onPointerUp,V=>{const Y=V.target;Y.hasPointerCapture(V.pointerId)&&Y.releasePointerCapture(V.pointerId),document.body.style.webkitUserSelect=I.current,C.viewport&&(C.viewport.style.scrollBehavior=""),T.current=null})})})}),Ha="ScrollAreaThumb",Py=y.forwardRef((n,r)=>{const{forceMount:i,...s}=n,l=Ey(Ha,n.__scopeScrollArea);return c.jsx(Vi,{present:i||l.hasThumb,children:c.jsx(PC,{ref:r,...s})})}),PC=y.forwardRef((n,r)=>{const{__scopeScrollArea:i,style:s,...l}=n,u=Xt(Ha,i),f=Ey(Ha,i),{onThumbPositionChange:p}=f,h=He(r,b=>f.onThumbChange(b)),g=y.useRef(),w=il(()=>{g.current&&(g.current(),g.current=void 0)},100);return y.useEffect(()=>{const b=u.viewport;if(b){const v=()=>{if(w(),!g.current){const C=NC(b,p);g.current=C,p()}};return p(),b.addEventListener("scroll",v),()=>b.removeEventListener("scroll",v)}},[u.viewport,w,p]),c.jsx(De.div,{"data-state":f.hasThumb?"visible":"hidden",...l,ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:Pe(n.onPointerDownCapture,b=>{const C=b.target.getBoundingClientRect(),E=b.clientX-C.left,k=b.clientY-C.top;f.onThumbPointerDown({x:E,y:k})}),onPointerUp:Pe(n.onPointerUp,f.onThumbPointerUp)})});Py.displayName=Ha;var dd="ScrollAreaCorner",Ty=y.forwardRef((n,r)=>{const i=Xt(dd,n.__scopeScrollArea),s=!!(i.scrollbarX&&i.scrollbarY);return i.type!=="scroll"&&s?c.jsx(TC,{...n,ref:r}):null});Ty.displayName=dd;var TC=y.forwardRef((n,r)=>{const{__scopeScrollArea:i,...s}=n,l=Xt(dd,i),[u,f]=y.useState(0),[p,h]=y.useState(0),g=!!(u&&p);return qi(l.scrollbarX,()=>{var b;const w=((b=l.scrollbarX)==null?void 0:b.offsetHeight)||0;l.onCornerHeightChange(w),h(w)}),qi(l.scrollbarY,()=>{var b;const w=((b=l.scrollbarY)==null?void 0:b.offsetWidth)||0;l.onCornerWidthChange(w),f(w)}),g?c.jsx(De.div,{...s,ref:r,style:{width:u,height:p,position:"absolute",right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function Wa(n){return n?parseInt(n,10):0}function Ay(n,r){const i=n/r;return isNaN(i)?0:i}function rl(n){const r=Ay(n.viewport,n.content),i=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,s=(n.scrollbar.size-i)*r;return Math.max(s,18)}function AC(n,r,i,s="ltr"){const l=rl(i),u=l/2,f=r||u,p=l-f,h=i.scrollbar.paddingStart+f,g=i.scrollbar.size-i.scrollbar.paddingEnd-p,w=i.content-i.viewport,b=s==="ltr"?[0,w]:[w*-1,0];return Ny([h,g],b)(n)}function Jp(n,r,i="ltr"){const s=rl(r),l=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,u=r.scrollbar.size-l,f=r.content-r.viewport,p=u-s,h=i==="ltr"?[0,f]:[f*-1,0],g=xC(n,h);return Ny([0,f],[0,p])(g)}function Ny(n,r){return i=>{if(n[0]===n[1]||r[0]===r[1])return r[0];const s=(r[1]-r[0])/(n[1]-n[0]);return r[0]+s*(i-n[0])}}function Iy(n,r){return n>0&&n<r}var NC=(n,r=()=>{})=>{let i={left:n.scrollLeft,top:n.scrollTop},s=0;return function l(){const u={left:n.scrollLeft,top:n.scrollTop},f=i.left!==u.left,p=i.top!==u.top;(f||p)&&r(),i=u,s=window.requestAnimationFrame(l)}(),()=>window.cancelAnimationFrame(s)};function il(n,r){const i=Ze(n),s=y.useRef(0);return y.useEffect(()=>()=>window.clearTimeout(s.current),[]),y.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(i,r)},[i,r])}function qi(n,r){const i=Ze(r);At(()=>{let s=0;if(n){const l=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(i)});return l.observe(n),()=>{window.cancelAnimationFrame(s),l.unobserve(n)}}},[n,i])}var jy=by,IC=Sy,jC=Ty;const My=y.forwardRef(({className:n,children:r,...i},s)=>c.jsxs(jy,{ref:s,className:ve("relative overflow-hidden",n),...i,children:[c.jsx(IC,{className:"h-full w-full rounded-[inherit]",children:r}),c.jsx(Ly,{}),c.jsx(jC,{})]}));My.displayName=jy.displayName;const Ly=y.forwardRef(({className:n,orientation:r="vertical",...i},s)=>c.jsx(cd,{ref:s,orientation:r,className:ve("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:c.jsx(Py,{className:"relative flex-1 rounded-full bg-border"})}));Ly.displayName=cd.displayName;function MC(n,r){const i=y.createContext(r),s=u=>{const{children:f,...p}=u,h=y.useMemo(()=>p,Object.values(p));return c.jsx(i.Provider,{value:h,children:f})};s.displayName=n+"Provider";function l(u){const f=y.useContext(i);if(f)return f;if(r!==void 0)return r;throw new Error(`\`${u}\` must be used within \`${n}\``)}return[s,l]}function LC(n,r=[]){let i=[];function s(u,f){const p=y.createContext(f),h=i.length;i=[...i,f];const g=b=>{var T;const{scope:v,children:C,...E}=b,k=((T=v==null?void 0:v[n])==null?void 0:T[h])||p,S=y.useMemo(()=>E,Object.values(E));return c.jsx(k.Provider,{value:S,children:C})};g.displayName=u+"Provider";function w(b,v){var k;const C=((k=v==null?void 0:v[n])==null?void 0:k[h])||p,E=y.useContext(C);if(E)return E;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[g,w]}const l=()=>{const u=i.map(f=>y.createContext(f));return function(p){const h=(p==null?void 0:p[n])||u;return y.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return l.scopeName=n,[s,DC(l,...r)]}function DC(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const f=s.reduce((p,{useScope:h,scopeName:g})=>{const b=h(u)[`__scope${g}`];return{...p,...b}},{});return y.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return i.scopeName=r.scopeName,i}var su="focusScope.autoFocusOnMount",au="focusScope.autoFocusOnUnmount",Zp={bubbles:!1,cancelable:!0},OC="FocusScope",Dy=y.forwardRef((n,r)=>{const{loop:i=!1,trapped:s=!1,onMountAutoFocus:l,onUnmountAutoFocus:u,...f}=n,[p,h]=y.useState(null),g=Ze(l),w=Ze(u),b=y.useRef(null),v=He(r,k=>h(k)),C=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(s){let k=function(j){if(C.paused||!p)return;const D=j.target;p.contains(D)?b.current=D:pr(b.current,{select:!0})},S=function(j){if(C.paused||!p)return;const D=j.relatedTarget;D!==null&&(p.contains(D)||pr(b.current,{select:!0}))},T=function(j){if(document.activeElement===document.body)for(const $ of j)$.removedNodes.length>0&&pr(p)};document.addEventListener("focusin",k),document.addEventListener("focusout",S);const I=new MutationObserver(T);return p&&I.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",k),document.removeEventListener("focusout",S),I.disconnect()}}},[s,p,C.paused]),y.useEffect(()=>{if(p){th.add(C);const k=document.activeElement;if(!p.contains(k)){const T=new CustomEvent(su,Zp);p.addEventListener(su,g),p.dispatchEvent(T),T.defaultPrevented||(FC(HC(Oy(p)),{select:!0}),document.activeElement===k&&pr(p))}return()=>{p.removeEventListener(su,g),setTimeout(()=>{const T=new CustomEvent(au,Zp);p.addEventListener(au,w),p.dispatchEvent(T),T.defaultPrevented||pr(k??document.body,{select:!0}),p.removeEventListener(au,w),th.remove(C)},0)}}},[p,g,w,C]);const E=y.useCallback(k=>{if(!i&&!s||C.paused)return;const S=k.key==="Tab"&&!k.altKey&&!k.ctrlKey&&!k.metaKey,T=document.activeElement;if(S&&T){const I=k.currentTarget,[j,D]=$C(I);j&&D?!k.shiftKey&&T===D?(k.preventDefault(),i&&pr(j,{select:!0})):k.shiftKey&&T===j&&(k.preventDefault(),i&&pr(D,{select:!0})):T===I&&k.preventDefault()}},[i,s,C.paused]);return c.jsx(De.div,{tabIndex:-1,...f,ref:v,onKeyDown:E})});Dy.displayName=OC;function FC(n,{select:r=!1}={}){const i=document.activeElement;for(const s of n)if(pr(s,{select:r}),document.activeElement!==i)return}function $C(n){const r=Oy(n),i=eh(r,n),s=eh(r.reverse(),n);return[i,s]}function Oy(n){const r=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const l=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||l?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function eh(n,r){for(const i of n)if(!_C(i,{upTo:r}))return i}function _C(n,{upTo:r}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(r!==void 0&&n===r)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function BC(n){return n instanceof HTMLInputElement&&"select"in n}function pr(n,{select:r=!1}={}){if(n&&n.focus){const i=document.activeElement;n.focus({preventScroll:!0}),n!==i&&BC(n)&&r&&n.select()}}var th=zC();function zC(){let n=[];return{add(r){const i=n[0];r!==i&&(i==null||i.pause()),n=nh(n,r),n.unshift(r)},remove(r){var i;n=nh(n,r),(i=n[0])==null||i.resume()}}}function nh(n,r){const i=[...n],s=i.indexOf(r);return s!==-1&&i.splice(s,1),i}function HC(n){return n.filter(r=>r.tagName!=="A")}function WC(n,r){return y.useReducer((i,s)=>r[i][s]??i,n)}var ol=n=>{const{present:r,children:i}=n,s=UC(r),l=typeof i=="function"?i({present:s.isPresent}):y.Children.only(i),u=He(s.ref,qC(l));return typeof i=="function"||s.isPresent?y.cloneElement(l,{ref:u}):null};ol.displayName="Presence";function UC(n){const[r,i]=y.useState(),s=y.useRef({}),l=y.useRef(n),u=y.useRef("none"),f=n?"mounted":"unmounted",[p,h]=WC(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const g=ka(s.current);u.current=p==="mounted"?g:"none"},[p]),At(()=>{const g=s.current,w=l.current;if(w!==n){const v=u.current,C=ka(g);n?h("MOUNT"):C==="none"||(g==null?void 0:g.display)==="none"?h("UNMOUNT"):h(w&&v!==C?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,h]),At(()=>{if(r){let g;const w=r.ownerDocument.defaultView??window,b=C=>{const k=ka(s.current).includes(C.animationName);if(C.target===r&&k&&(h("ANIMATION_END"),!l.current)){const S=r.style.animationFillMode;r.style.animationFillMode="forwards",g=w.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=S)})}},v=C=>{C.target===r&&(u.current=ka(s.current))};return r.addEventListener("animationstart",v),r.addEventListener("animationcancel",b),r.addEventListener("animationend",b),()=>{w.clearTimeout(g),r.removeEventListener("animationstart",v),r.removeEventListener("animationcancel",b),r.removeEventListener("animationend",b)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:y.useCallback(g=>{g&&(s.current=getComputedStyle(g)),i(g)},[])}}function ka(n){return(n==null?void 0:n.animationName)||"none"}function qC(n){var s,l;let r=(s=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:s.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=(l=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}var lu=0;function VC(){y.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??rh()),document.body.insertAdjacentElement("beforeend",n[1]??rh()),lu++,()=>{lu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),lu--}},[])}function rh(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var kn=function(){return kn=Object.assign||function(r){for(var i,s=1,l=arguments.length;s<l;s++){i=arguments[s];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(r[u]=i[u])}return r},kn.apply(this,arguments)};function Fy(n,r){var i={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&r.indexOf(s)<0&&(i[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(n);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(n,s[l])&&(i[s[l]]=n[s[l]]);return i}function YC(n,r,i){if(i||arguments.length===2)for(var s=0,l=r.length,u;s<l;s++)(u||!(s in r))&&(u||(u=Array.prototype.slice.call(r,0,s)),u[s]=r[s]);return n.concat(u||Array.prototype.slice.call(r))}var Ia="right-scroll-bar-position",ja="width-before-scroll-bar",GC="with-scroll-bars-hidden",QC="--removed-body-scroll-bar-size";function cu(n,r){return typeof n=="function"?n(r):n&&(n.current=r),n}function KC(n,r){var i=y.useState(function(){return{value:n,callback:r,facade:{get current(){return i.value},set current(s){var l=i.value;l!==s&&(i.value=s,i.callback(s,l))}}}})[0];return i.callback=r,i.facade}var XC=typeof window<"u"?y.useLayoutEffect:y.useEffect,ih=new WeakMap;function JC(n,r){var i=KC(null,function(s){return n.forEach(function(l){return cu(l,s)})});return XC(function(){var s=ih.get(i);if(s){var l=new Set(s),u=new Set(n),f=i.current;l.forEach(function(p){u.has(p)||cu(p,null)}),u.forEach(function(p){l.has(p)||cu(p,f)})}ih.set(i,n)},[n]),i}function ZC(n){return n}function eE(n,r){r===void 0&&(r=ZC);var i=[],s=!1,l={read:function(){if(s)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:n},useMedium:function(u){var f=r(u,s);return i.push(f),function(){i=i.filter(function(p){return p!==f})}},assignSyncMedium:function(u){for(s=!0;i.length;){var f=i;i=[],f.forEach(u)}i={push:function(p){return u(p)},filter:function(){return i}}},assignMedium:function(u){s=!0;var f=[];if(i.length){var p=i;i=[],p.forEach(u),f=i}var h=function(){var w=f;f=[],w.forEach(u)},g=function(){return Promise.resolve().then(h)};g(),i={push:function(w){f.push(w),g()},filter:function(w){return f=f.filter(w),i}}}};return l}function tE(n){n===void 0&&(n={});var r=eE(null);return r.options=kn({async:!0,ssr:!1},n),r}var $y=function(n){var r=n.sideCar,i=Fy(n,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var s=r.read();if(!s)throw new Error("Sidecar medium not found");return y.createElement(s,kn({},i))};$y.isSideCarExport=!0;function nE(n,r){return n.useMedium(r),$y}var _y=tE(),uu=function(){},sl=y.forwardRef(function(n,r){var i=y.useRef(null),s=y.useState({onScrollCapture:uu,onWheelCapture:uu,onTouchMoveCapture:uu}),l=s[0],u=s[1],f=n.forwardProps,p=n.children,h=n.className,g=n.removeScrollBar,w=n.enabled,b=n.shards,v=n.sideCar,C=n.noIsolation,E=n.inert,k=n.allowPinchZoom,S=n.as,T=S===void 0?"div":S,I=n.gapMode,j=Fy(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),D=v,$=JC([i,r]),U=kn(kn({},j),l);return y.createElement(y.Fragment,null,w&&y.createElement(D,{sideCar:_y,removeScrollBar:g,shards:b,noIsolation:C,inert:E,setCallbacks:u,allowPinchZoom:!!k,lockRef:i,gapMode:I}),f?y.cloneElement(y.Children.only(p),kn(kn({},U),{ref:$})):y.createElement(T,kn({},U,{className:h,ref:$}),p))});sl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};sl.classNames={fullWidth:ja,zeroRight:Ia};var rE=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function iE(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var r=rE();return r&&n.setAttribute("nonce",r),n}function oE(n,r){n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}function sE(n){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(n)}var aE=function(){var n=0,r=null;return{add:function(i){n==0&&(r=iE())&&(oE(r,i),sE(r)),n++},remove:function(){n--,!n&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},lE=function(){var n=aE();return function(r,i){y.useEffect(function(){return n.add(r),function(){n.remove()}},[r&&i])}},By=function(){var n=lE(),r=function(i){var s=i.styles,l=i.dynamic;return n(s,l),null};return r},cE={left:0,top:0,right:0,gap:0},du=function(n){return parseInt(n||"",10)||0},uE=function(n){var r=window.getComputedStyle(document.body),i=r[n==="padding"?"paddingLeft":"marginLeft"],s=r[n==="padding"?"paddingTop":"marginTop"],l=r[n==="padding"?"paddingRight":"marginRight"];return[du(i),du(s),du(l)]},dE=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return cE;var r=uE(n),i=document.documentElement.clientWidth,s=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,s-i+r[2]-r[0])}},fE=By(),Ii="data-scroll-locked",mE=function(n,r,i,s){var l=n.left,u=n.top,f=n.right,p=n.gap;return i===void 0&&(i="margin"),`
  .`.concat(GC,` {
   overflow: hidden `).concat(s,`;
   padding-right: `).concat(p,"px ").concat(s,`;
  }
  body[`).concat(Ii,`] {
    overflow: hidden `).concat(s,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(s,";"),i==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(s,`;
    `),i==="padding"&&"padding-right: ".concat(p,"px ").concat(s,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ia,` {
    right: `).concat(p,"px ").concat(s,`;
  }
  
  .`).concat(ja,` {
    margin-right: `).concat(p,"px ").concat(s,`;
  }
  
  .`).concat(Ia," .").concat(Ia,` {
    right: 0 `).concat(s,`;
  }
  
  .`).concat(ja," .").concat(ja,` {
    margin-right: 0 `).concat(s,`;
  }
  
  body[`).concat(Ii,`] {
    `).concat(QC,": ").concat(p,`px;
  }
`)},oh=function(){var n=parseInt(document.body.getAttribute(Ii)||"0",10);return isFinite(n)?n:0},pE=function(){y.useEffect(function(){return document.body.setAttribute(Ii,(oh()+1).toString()),function(){var n=oh()-1;n<=0?document.body.removeAttribute(Ii):document.body.setAttribute(Ii,n.toString())}},[])},hE=function(n){var r=n.noRelative,i=n.noImportant,s=n.gapMode,l=s===void 0?"margin":s;pE();var u=y.useMemo(function(){return dE(l)},[l]);return y.createElement(fE,{styles:mE(u,!r,l,i?"":"!important")})},Fu=!1;if(typeof window<"u")try{var Sa=Object.defineProperty({},"passive",{get:function(){return Fu=!0,!0}});window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{Fu=!1}var Ri=Fu?{passive:!1}:!1,gE=function(n){return n.tagName==="TEXTAREA"},zy=function(n,r){if(!(n instanceof Element))return!1;var i=window.getComputedStyle(n);return i[r]!=="hidden"&&!(i.overflowY===i.overflowX&&!gE(n)&&i[r]==="visible")},yE=function(n){return zy(n,"overflowY")},vE=function(n){return zy(n,"overflowX")},sh=function(n,r){var i=r.ownerDocument,s=r;do{typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&(s=s.host);var l=Hy(n,s);if(l){var u=Wy(n,s),f=u[1],p=u[2];if(f>p)return!0}s=s.parentNode}while(s&&s!==i.body);return!1},xE=function(n){var r=n.scrollTop,i=n.scrollHeight,s=n.clientHeight;return[r,i,s]},wE=function(n){var r=n.scrollLeft,i=n.scrollWidth,s=n.clientWidth;return[r,i,s]},Hy=function(n,r){return n==="v"?yE(r):vE(r)},Wy=function(n,r){return n==="v"?xE(r):wE(r)},bE=function(n,r){return n==="h"&&r==="rtl"?-1:1},kE=function(n,r,i,s,l){var u=bE(n,window.getComputedStyle(r).direction),f=u*s,p=i.target,h=r.contains(p),g=!1,w=f>0,b=0,v=0;do{var C=Wy(n,p),E=C[0],k=C[1],S=C[2],T=k-S-u*E;(E||T)&&Hy(n,p)&&(b+=T,v+=E),p instanceof ShadowRoot?p=p.host:p=p.parentNode}while(!h&&p!==document.body||h&&(r.contains(p)||r===p));return(w&&Math.abs(b)<1||!w&&Math.abs(v)<1)&&(g=!0),g},Ca=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},ah=function(n){return[n.deltaX,n.deltaY]},lh=function(n){return n&&"current"in n?n.current:n},SE=function(n,r){return n[0]===r[0]&&n[1]===r[1]},CE=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},EE=0,Pi=[];function RE(n){var r=y.useRef([]),i=y.useRef([0,0]),s=y.useRef(),l=y.useState(EE++)[0],u=y.useState(By)[0],f=y.useRef(n);y.useEffect(function(){f.current=n},[n]),y.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(l));var k=YC([n.lockRef.current],(n.shards||[]).map(lh),!0).filter(Boolean);return k.forEach(function(S){return S.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),k.forEach(function(S){return S.classList.remove("allow-interactivity-".concat(l))})}}},[n.inert,n.lockRef.current,n.shards]);var p=y.useCallback(function(k,S){if("touches"in k&&k.touches.length===2||k.type==="wheel"&&k.ctrlKey)return!f.current.allowPinchZoom;var T=Ca(k),I=i.current,j="deltaX"in k?k.deltaX:I[0]-T[0],D="deltaY"in k?k.deltaY:I[1]-T[1],$,U=k.target,z=Math.abs(j)>Math.abs(D)?"h":"v";if("touches"in k&&z==="h"&&U.type==="range")return!1;var G=sh(z,U);if(!G)return!0;if(G?$=z:($=z==="v"?"h":"v",G=sh(z,U)),!G)return!1;if(!s.current&&"changedTouches"in k&&(j||D)&&(s.current=$),!$)return!0;var V=s.current||$;return kE(V,S,k,V==="h"?j:D)},[]),h=y.useCallback(function(k){var S=k;if(!(!Pi.length||Pi[Pi.length-1]!==u)){var T="deltaY"in S?ah(S):Ca(S),I=r.current.filter(function($){return $.name===S.type&&($.target===S.target||S.target===$.shadowParent)&&SE($.delta,T)})[0];if(I&&I.should){S.cancelable&&S.preventDefault();return}if(!I){var j=(f.current.shards||[]).map(lh).filter(Boolean).filter(function($){return $.contains(S.target)}),D=j.length>0?p(S,j[0]):!f.current.noIsolation;D&&S.cancelable&&S.preventDefault()}}},[]),g=y.useCallback(function(k,S,T,I){var j={name:k,delta:S,target:T,should:I,shadowParent:PE(T)};r.current.push(j),setTimeout(function(){r.current=r.current.filter(function(D){return D!==j})},1)},[]),w=y.useCallback(function(k){i.current=Ca(k),s.current=void 0},[]),b=y.useCallback(function(k){g(k.type,ah(k),k.target,p(k,n.lockRef.current))},[]),v=y.useCallback(function(k){g(k.type,Ca(k),k.target,p(k,n.lockRef.current))},[]);y.useEffect(function(){return Pi.push(u),n.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:v}),document.addEventListener("wheel",h,Ri),document.addEventListener("touchmove",h,Ri),document.addEventListener("touchstart",w,Ri),function(){Pi=Pi.filter(function(k){return k!==u}),document.removeEventListener("wheel",h,Ri),document.removeEventListener("touchmove",h,Ri),document.removeEventListener("touchstart",w,Ri)}},[]);var C=n.removeScrollBar,E=n.inert;return y.createElement(y.Fragment,null,E?y.createElement(u,{styles:CE(l)}):null,C?y.createElement(hE,{gapMode:n.gapMode}):null)}function PE(n){for(var r=null;n!==null;)n instanceof ShadowRoot&&(r=n.host,n=n.host),n=n.parentNode;return r}const TE=nE(_y,RE);var Uy=y.forwardRef(function(n,r){return y.createElement(sl,kn({},n,{ref:r,sideCar:TE}))});Uy.classNames=sl.classNames;var AE=function(n){if(typeof document>"u")return null;var r=Array.isArray(n)?n[0]:n;return r.ownerDocument.body},Ti=new WeakMap,Ea=new WeakMap,Ra={},fu=0,qy=function(n){return n&&(n.host||qy(n.parentNode))},NE=function(n,r){return r.map(function(i){if(n.contains(i))return i;var s=qy(i);return s&&n.contains(s)?s:(console.error("aria-hidden",i,"in not contained inside",n,". Doing nothing"),null)}).filter(function(i){return!!i})},IE=function(n,r,i,s){var l=NE(r,Array.isArray(n)?n:[n]);Ra[i]||(Ra[i]=new WeakMap);var u=Ra[i],f=[],p=new Set,h=new Set(l),g=function(b){!b||p.has(b)||(p.add(b),g(b.parentNode))};l.forEach(g);var w=function(b){!b||h.has(b)||Array.prototype.forEach.call(b.children,function(v){if(p.has(v))w(v);else try{var C=v.getAttribute(s),E=C!==null&&C!=="false",k=(Ti.get(v)||0)+1,S=(u.get(v)||0)+1;Ti.set(v,k),u.set(v,S),f.push(v),k===1&&E&&Ea.set(v,!0),S===1&&v.setAttribute(i,"true"),E||v.setAttribute(s,"true")}catch(T){console.error("aria-hidden: cannot operate on ",v,T)}})};return w(r),p.clear(),fu++,function(){f.forEach(function(b){var v=Ti.get(b)-1,C=u.get(b)-1;Ti.set(b,v),u.set(b,C),v||(Ea.has(b)||b.removeAttribute(s),Ea.delete(b)),C||b.removeAttribute(i)}),fu--,fu||(Ti=new WeakMap,Ti=new WeakMap,Ea=new WeakMap,Ra={})}},jE=function(n,r,i){i===void 0&&(i="data-aria-hidden");var s=Array.from(Array.isArray(n)?n:[n]),l=AE(n);return l?(s.push.apply(s,Array.from(l.querySelectorAll("[aria-live]"))),IE(s,l,i,"aria-hidden")):function(){return null}},fd="Dialog",[Vy,hR]=LC(fd),[ME,fn]=Vy(fd),Yy=n=>{const{__scopeDialog:r,children:i,open:s,defaultOpen:l,onOpenChange:u,modal:f=!0}=n,p=y.useRef(null),h=y.useRef(null),[g=!1,w]=Th({prop:s,defaultProp:l,onChange:u});return c.jsx(ME,{scope:r,triggerRef:p,contentRef:h,contentId:tu(),titleId:tu(),descriptionId:tu(),open:g,onOpenChange:w,onOpenToggle:y.useCallback(()=>w(b=>!b),[w]),modal:f,children:i})};Yy.displayName=fd;var Gy="DialogTrigger",Qy=y.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=fn(Gy,i),u=He(r,l.triggerRef);return c.jsx(De.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":hd(l.open),...s,ref:u,onClick:Pe(n.onClick,l.onOpenToggle)})});Qy.displayName=Gy;var md="DialogPortal",[LE,Ky]=Vy(md,{forceMount:void 0}),Xy=n=>{const{__scopeDialog:r,forceMount:i,children:s,container:l}=n,u=fn(md,r);return c.jsx(LE,{scope:r,forceMount:i,children:y.Children.map(s,f=>c.jsx(ol,{present:i||u.open,children:c.jsx(Lg,{asChild:!0,container:l,children:f})}))})};Xy.displayName=md;var Ua="DialogOverlay",Jy=y.forwardRef((n,r)=>{const i=Ky(Ua,n.__scopeDialog),{forceMount:s=i.forceMount,...l}=n,u=fn(Ua,n.__scopeDialog);return u.modal?c.jsx(ol,{present:s||u.open,children:c.jsx(DE,{...l,ref:r})}):null});Jy.displayName=Ua;var DE=y.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=fn(Ua,i);return c.jsx(Uy,{as:zi,allowPinchZoom:!0,shards:[l.contentRef],children:c.jsx(De.div,{"data-state":hd(l.open),...s,ref:r,style:{pointerEvents:"auto",...s.style}})})}),ei="DialogContent",Zy=y.forwardRef((n,r)=>{const i=Ky(ei,n.__scopeDialog),{forceMount:s=i.forceMount,...l}=n,u=fn(ei,n.__scopeDialog);return c.jsx(ol,{present:s||u.open,children:u.modal?c.jsx(OE,{...l,ref:r}):c.jsx(FE,{...l,ref:r})})});Zy.displayName=ei;var OE=y.forwardRef((n,r)=>{const i=fn(ei,n.__scopeDialog),s=y.useRef(null),l=He(r,i.contentRef,s);return y.useEffect(()=>{const u=s.current;if(u)return jE(u)},[]),c.jsx(ev,{...n,ref:l,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Pe(n.onCloseAutoFocus,u=>{var f;u.preventDefault(),(f=i.triggerRef.current)==null||f.focus()}),onPointerDownOutside:Pe(n.onPointerDownOutside,u=>{const f=u.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0;(f.button===2||p)&&u.preventDefault()}),onFocusOutside:Pe(n.onFocusOutside,u=>u.preventDefault())})}),FE=y.forwardRef((n,r)=>{const i=fn(ei,n.__scopeDialog),s=y.useRef(!1),l=y.useRef(!1);return c.jsx(ev,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:u=>{var f,p;(f=n.onCloseAutoFocus)==null||f.call(n,u),u.defaultPrevented||(s.current||(p=i.triggerRef.current)==null||p.focus(),u.preventDefault()),s.current=!1,l.current=!1},onInteractOutside:u=>{var h,g;(h=n.onInteractOutside)==null||h.call(n,u),u.defaultPrevented||(s.current=!0,u.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const f=u.target;((g=i.triggerRef.current)==null?void 0:g.contains(f))&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&l.current&&u.preventDefault()}})}),ev=y.forwardRef((n,r)=>{const{__scopeDialog:i,trapFocus:s,onOpenAutoFocus:l,onCloseAutoFocus:u,...f}=n,p=fn(ei,i),h=y.useRef(null),g=He(r,h);return VC(),c.jsxs(c.Fragment,{children:[c.jsx(Dy,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:l,onUnmountAutoFocus:u,children:c.jsx(Yu,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":hd(p.open),...f,ref:g,onDismiss:()=>p.onOpenChange(!1)})}),c.jsxs(c.Fragment,{children:[c.jsx($E,{titleId:p.titleId}),c.jsx(BE,{contentRef:h,descriptionId:p.descriptionId})]})]})}),pd="DialogTitle",tv=y.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=fn(pd,i);return c.jsx(De.h2,{id:l.titleId,...s,ref:r})});tv.displayName=pd;var nv="DialogDescription",rv=y.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=fn(nv,i);return c.jsx(De.p,{id:l.descriptionId,...s,ref:r})});rv.displayName=nv;var iv="DialogClose",ov=y.forwardRef((n,r)=>{const{__scopeDialog:i,...s}=n,l=fn(iv,i);return c.jsx(De.button,{type:"button",...s,ref:r,onClick:Pe(n.onClick,()=>l.onOpenChange(!1))})});ov.displayName=iv;function hd(n){return n?"open":"closed"}var sv="DialogTitleWarning",[gR,av]=MC(sv,{contentName:ei,titleName:pd,docsSlug:"dialog"}),$E=({titleId:n})=>{const r=av(sv),i=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return y.useEffect(()=>{n&&(document.getElementById(n)||console.error(i))},[i,n]),null},_E="DialogDescriptionWarning",BE=({contentRef:n,descriptionId:r})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${av(_E).contentName}}.`;return y.useEffect(()=>{var u;const l=(u=n.current)==null?void 0:u.getAttribute("aria-describedby");r&&l&&(document.getElementById(r)||console.warn(s))},[s,n,r]),null},zE=Yy,HE=Qy,WE=Xy,lv=Jy,cv=Zy,uv=tv,dv=rv,UE=ov;const fv=zE,qE=HE,VE=WE,mv=y.forwardRef(({className:n,...r},i)=>c.jsx(lv,{ref:i,className:ve("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r}));mv.displayName=lv.displayName;const gd=y.forwardRef(({className:n,children:r,...i},s)=>c.jsxs(VE,{children:[c.jsx(mv,{}),c.jsxs(cv,{ref:s,className:ve("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...i,children:[r,c.jsxs(UE,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[c.jsx(ng,{className:"h-4 w-4"}),c.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));gd.displayName=cv.displayName;const yd=({className:n,...r})=>c.jsx("div",{className:ve("flex flex-col space-y-1.5 text-center sm:text-left",n),...r});yd.displayName="DialogHeader";const vd=y.forwardRef(({className:n,...r},i)=>c.jsx(uv,{ref:i,className:ve("text-lg font-semibold leading-none tracking-tight",n),...r}));vd.displayName=uv.displayName;const xd=y.forwardRef(({className:n,...r},i)=>c.jsx(dv,{ref:i,className:ve("text-sm text-muted-foreground",n),...r}));xd.displayName=dv.displayName;function YE({className:n}){const[r,i]=y.useState(!1),[s,l]=y.useState([{id:"1",content:"Hi! I'm your AI finance tutor from FintechLearn. I'm here to help you learn about budgeting, saving, investing, credit management, and more. Ask me any personal finance question!",sender:"bot",timestamp:new Date}]),[u,f]=y.useState(""),[p,h]=y.useState(!1),g=y.useRef(null),w=()=>{if(g.current){const E=g.current.querySelector("[data-radix-scroll-area-viewport]");E&&(E.scrollTop=E.scrollHeight)}};y.useEffect(()=>{w()},[s]);const b=async()=>{if(!u.trim()||p)return;const E={id:Date.now().toString(),content:u,sender:"user",timestamp:new Date};l(k=>[...k,E]),f(""),h(!0);try{const k=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:u})});if(!k.ok)throw new Error("Failed to get AI response");const T=(await k.json()).response||"I'm sorry, I couldn't process your request right now.",I={id:(Date.now()+1).toString(),content:T,sender:"bot",timestamp:new Date};l(j=>[...j,I])}catch(k){console.error("Chat error:",k);const S={id:(Date.now()+1).toString(),content:"I'm sorry, I'm having trouble connecting right now. Please try again later, or explore our courses to learn more about personal finance!",sender:"bot",timestamp:new Date};l(T=>[...T,S])}finally{h(!1)}},v=E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),b())},C=E=>E.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return c.jsx(c.Fragment,{children:c.jsxs(fv,{open:r,onOpenChange:i,children:[c.jsx(qE,{asChild:!0,children:c.jsx(Ie,{size:"lg",className:ve("fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all",n),children:c.jsx(ku,{className:"h-6 w-6"})})}),c.jsxs(gd,{className:"sm:max-w-md h-[600px] flex flex-col p-0",children:[c.jsxs(yd,{className:"p-6 pb-0",children:[c.jsxs(vd,{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 bg-primary rounded-full flex items-center justify-center",children:c.jsx(Zc,{className:"w-5 h-5 text-white"})}),"AI Finance Tutor",c.jsx(Sw,{className:"w-4 h-4 text-yellow-500"})]}),c.jsx(xd,{children:"Ask me anything about personal finance, budgeting, investing, and more!"})]}),c.jsxs("div",{className:"flex-1 flex flex-col min-h-0",children:[c.jsx(My,{className:"flex-1 px-6",ref:g,children:c.jsxs("div",{className:"space-y-4 py-4",children:[s.map(E=>c.jsxs("div",{className:ve("flex gap-3 items-start",E.sender==="user"&&"flex-row-reverse"),children:[c.jsx("div",{className:ve("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",E.sender==="user"?"bg-primary text-white":"bg-gray-200 text-gray-600"),children:E.sender==="user"?c.jsx(Ew,{className:"w-4 h-4"}):c.jsx(Zc,{className:"w-4 h-4"})}),c.jsxs("div",{className:ve("max-w-[80%] rounded-lg p-3 text-sm",E.sender==="user"?"bg-primary text-white":"bg-gray-100 text-gray-900"),children:[c.jsx("p",{className:"whitespace-pre-wrap",children:E.content}),c.jsx("p",{className:ve("text-xs mt-1 opacity-70",E.sender==="user"?"text-primary-foreground":"text-gray-500"),children:C(E.timestamp)})]})]},E.id)),p&&c.jsxs("div",{className:"flex gap-3 items-start",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center",children:c.jsx(Zc,{className:"w-4 h-4"})}),c.jsx("div",{className:"bg-gray-100 rounded-lg p-3",children:c.jsx(ww,{className:"w-4 h-4 animate-spin text-gray-500"})})]})]})}),c.jsxs("div",{className:"border-t p-4",children:[c.jsxs("div",{className:"flex gap-2",children:[c.jsx(xy,{placeholder:"Ask me about budgeting, investing, credit...",value:u,onChange:E=>f(E.target.value),onKeyPress:v,disabled:p,className:"flex-1"}),c.jsx(Ie,{onClick:b,disabled:!u.trim()||p,size:"icon",children:c.jsx(kw,{className:"w-4 h-4"})})]}),c.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Powered by OpenAI GPT-3.5. Responses are for educational purposes."})]})]})]})]})})}function Wn({title:n,intro:r,sections:i,videoEmbed:s,duration:l,difficulty:u,nextLessonPath:f,nextLessonTitle:p,prevLessonPath:h,prevLessonTitle:g,quizId:w}){const b=od(),v=C=>{switch(C){case"Beginner":return"bg-green-100 text-green-700";case"Intermediate":return"bg-yellow-100 text-yellow-700";case"Advanced":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}};return c.jsx(Tr,{children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("nav",{className:"mb-8",children:c.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600",children:[c.jsx(Ue,{to:"/courses",className:"hover:text-primary",children:"Courses"}),c.jsx("span",{children:"/"}),c.jsx("span",{className:"text-gray-900",children:n})]})}),c.jsxs("div",{className:"mb-12",children:[c.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[c.jsx(it,{className:v(u),children:u}),c.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-600",children:[c.jsx(Ma,{className:"w-4 h-4"}),l]})]}),c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:n}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl",children:r})]}),s&&c.jsxs(Ee,{className:"mb-12",children:[c.jsx($t,{children:c.jsxs(_t,{className:"flex items-center gap-2",children:[c.jsx(Hi,{className:"w-5 h-5 text-primary"}),"Watch & Learn"]})}),c.jsx(Re,{children:s})]}),c.jsx("div",{className:"space-y-8 mb-12",children:i.map((C,E)=>c.jsxs(Ee,{className:"border-l-4 border-l-primary",children:[c.jsx($t,{children:c.jsxs(_t,{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm",children:E+1}),C.title]})}),c.jsx(Re,{children:c.jsx("div",{className:"prose prose-gray max-w-none",children:C.content.split(`

`).map((k,S)=>c.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:k},S))})})]},E))}),c.jsx(Ee,{className:"mb-12 bg-gradient-to-r from-primary/10 to-blue-50",children:c.jsxs(Re,{className:"p-8 text-center",children:[c.jsx(Sr,{className:"w-12 h-12 text-primary mx-auto mb-4"}),c.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Ready to test yourself?"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Take a quick quiz to see how well you understand this lesson."}),c.jsxs(Ie,{size:"lg",onClick:()=>w&&b(`/quiz/${w}`),disabled:!w,children:[c.jsx(cn,{className:"mr-2 w-5 h-5"}),"Take Quiz"]}),!w&&c.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Quiz coming soon"})]})}),c.jsxs("div",{className:"flex flex-col sm:flex-row justify-between gap-4",children:[h?c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",className:"flex-1",children:c.jsxs(Ue,{to:h,children:[c.jsx(vu,{className:"mr-2 w-5 h-5"}),g]})}):c.jsx(Ie,{asChild:!0,variant:"outline",size:"lg",className:"flex-1",children:c.jsxs(Ue,{to:"/courses",children:[c.jsx(vu,{className:"mr-2 w-5 h-5"}),"Back to Courses"]})}),f?c.jsx(Ie,{asChild:!0,size:"lg",className:"flex-1",children:c.jsxs(Ue,{to:f,children:[p,c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})}):c.jsx(Ie,{asChild:!0,size:"lg",className:"flex-1",children:c.jsxs(Ue,{to:"/courses",children:["Browse More Courses",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})})]})]})})}function Cn({videoId:n,title:r}){return c.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:c.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-lg",src:`https://www.youtube.com/embed/${n}?rel=0&modestbranding=1`,title:r||"Educational Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}function GE(){const n=[{title:"Understanding the Fundamentals of Budgeting",content:`Budgeting is the cornerstone of personal financial success. At its core, budgeting is the process of creating a detailed plan that outlines how you'll allocate your income across various expenses, savings, and financial goals over a specific period, typically monthly.

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

Remember: budgeting is a skill that improves with practice. Start simple, be consistent, and gradually incorporate more sophisticated strategies as you become comfortable with the basics.`}];return c.jsx(Wn,{title:"Budgeting & Saving",intro:"Learn how to create a budget that works for you and build a strong savings foundation for your financial future.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"-Of_WRjDrx0",title:"How to Make a Budget | Beginner's Guide to Budgeting"}),duration:"15 min",difficulty:"Beginner",nextLessonPath:"/lessons/understanding-credit",nextLessonTitle:"Understanding Credit",quizId:"budgeting-and-saving"})}function QE(){const n=[{title:"The Foundation of Credit: What You Need to Know",content:`Credit is fundamentally about trust and reputation in the financial world. When you use credit, you're entering into a contractual agreement where a lender provides you with money, goods, or services immediately, and you promise to repay the debt according to agreed-upon terms.

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

Remember: excellent credit is not an end goal but a tool for achieving broader financial objectives. Use it wisely to build wealth, not to accumulate possessions you can't afford.`}];return c.jsx(Wn,{title:"Understanding Credit",intro:"Master the fundamentals of credit scores, credit reports, and how to build excellent credit for life.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"-z2ObeDKjlw",title:"How Do Credit Cards Work?"}),duration:"12 min",difficulty:"Beginner",prevLessonPath:"/lessons/budgeting-and-saving",prevLessonTitle:"Budgeting & Saving",nextLessonPath:"/lessons/interest-rates",nextLessonTitle:"Interest Rates Explained",quizId:"understanding-credit"})}function KE(){const n=[{title:"Understanding Interest: The Foundation of Finance",content:`Interest is one of the most fundamental concepts in personal finance, yet it's often misunderstood. At its core, interest represents the time value of money - the idea that money available today is worth more than the same amount in the future because of its earning potential.

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

Remember: Understanding interest rates isn't just about calculations - it's about making informed decisions that align with your financial goals and risk tolerance. The knowledge you gain here will serve you throughout your financial life, helping you build wealth more effectively and avoid costly mistakes.`}];return c.jsx(Wn,{title:"Interest Rates Explained",intro:"Understand how interest rates work and how they impact your borrowing and saving decisions.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"lMVwYoiiV0w",title:"Simple vs. Compound Interest | Simple Beginners Guide"}),duration:"10 min",difficulty:"Beginner",prevLessonPath:"/lessons/understanding-credit",prevLessonTitle:"Understanding Credit",nextLessonPath:"/lessons/loans-and-mortgages",nextLessonTitle:"Loans & Mortgages",quizId:"interest-rates"})}function XE(){const n=[{title:"Understanding Different Types of Loans",content:`Loans are essential financial tools that allow you to make major purchases and investments by borrowing money today and repaying it over time. Understanding the different types helps you choose the right financing for your needs.

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

Remember: Loans are tools that can either build or destroy wealth depending on how they're used. Focus on borrowing for appreciating assets and investments that generate returns exceeding the loan's cost.`}];return c.jsx(Wn,{title:"Loans & Mortgages",intro:"Navigate the world of borrowing with confidence, from personal loans to home mortgages.",sections:n,videoEmbed:c.jsxs("div",{className:"space-y-4",children:[c.jsx(Cn,{videoId:"fuiiJuB7tJs",title:"Loans 101 (Loan Basics 1/3)"}),c.jsx(Cn,{videoId:"l4J5RvGB-iM",title:"Mortgage Explained | Personal Finance 101"})]}),duration:"18 min",difficulty:"Intermediate",prevLessonPath:"/lessons/interest-rates",prevLessonTitle:"Interest Rates Explained",nextLessonPath:"/lessons/investment-basics",nextLessonTitle:"Investment Basics",quizId:"loans-and-mortgages"})}function JE(){const n=[{title:"The Fundamental Reasons to Invest",content:`Investing is essential for building long-term wealth and achieving financial independence. Understanding why you should invest helps motivate consistent, disciplined investing behavior.

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

Remember: Successful investing is more about time in the market than timing the market. Start early, invest consistently, diversify broadly, and stay disciplined through market ups and downs.`}];return c.jsx(Wn,{title:"Investment Basics",intro:"Learn the fundamentals of investing in stocks, bonds, and funds to build long-term wealth.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"Ay4fmZdZqJE",title:"How to Invest for Beginners in 2025"}),duration:"20 min",difficulty:"Intermediate",prevLessonPath:"/lessons/loans-and-mortgages",prevLessonTitle:"Loans & Mortgages",nextLessonPath:"/lessons/risk-vs-return",nextLessonTitle:"Risk vs Return",quizId:"investment-basics"})}function ZE(){const n=[{title:"The Complete Guide to Investment Risk",content:`Investment risk is the possibility that your actual returns will differ from your expected returns. Understanding different types of risk helps you make informed investment decisions and build appropriate portfolios.

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

Remember: Risk management is not about eliminating all risk—it's about taking appropriate risks for your situation and goals while avoiding catastrophic losses that could derail your financial future.`}];return c.jsx(Wn,{title:"Risk vs Return",intro:"Learn to balance investment risk with potential returns to create a strategy that matches your goals.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"7mo167ohvJw",title:"What is risk and return? | Financial Literacy | Khan Academy"}),duration:"15 min",difficulty:"Intermediate",prevLessonPath:"/lessons/investment-basics",prevLessonTitle:"Investment Basics",nextLessonPath:"/lessons/understanding-inflation",nextLessonTitle:"Understanding Inflation",quizId:"risk-vs-return"})}function eR(){const n=[{title:"Understanding Inflation: The Silent Wealth Killer",content:`Inflation is the sustained increase in the general price level of goods and services over time. While it might seem like a abstract economic concept, inflation directly impacts your daily life and long-term wealth.

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

Remember: No single strategy provides perfect inflation protection. The key is diversification across different inflation-resistant assets and regular portfolio review to ensure your strategy remains appropriate for the current environment.`}];return c.jsx(Wn,{title:"Understanding Inflation",intro:"Discover how inflation affects your money and learn strategies to protect your purchasing power.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"Ou0l5lcGrR4",title:"What is Inflation? | It's simple."}),duration:"8 min",difficulty:"Beginner",prevLessonPath:"/lessons/risk-vs-return",prevLessonTitle:"Risk vs Return",nextLessonPath:"/lessons/tax-fundamentals",nextLessonTitle:"Tax Fundamentals",quizId:"understanding-inflation"})}function tR(){const n=[{title:"Understanding the U.S. Tax System",content:`The United States has a complex tax system with multiple types of taxes at federal, state, and local levels. Understanding how these taxes work is essential for effective financial planning.

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

Remember: Tax planning is most effective when integrated with your overall financial plan. Regular review and adjustment of strategies ensures you're taking advantage of all available opportunities while staying compliant with tax laws.`}];return c.jsx(Wn,{title:"Tax Fundamentals",intro:"Learn about different types of taxes, deductions, credits, and strategies to minimize your tax burden legally.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"ROb2Vp5Rs7A",title:"How Taxes Work in the U.S."}),duration:"16 min",difficulty:"Intermediate",prevLessonPath:"/lessons/understanding-inflation",prevLessonTitle:"Understanding Inflation",nextLessonPath:"/lessons/retirement-planning",nextLessonTitle:"Retirement Planning",quizId:"tax-fundamentals"})}function nR(){const n=[{title:"The Power of Starting Early: Why Time Is Your Greatest Asset",content:`Retirement planning is one of the most important financial decisions you'll make, and time is your most powerful ally. The earlier you start, the less you need to save each month to reach your goals, thanks to the magic of compound interest.

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

Remember: Advanced retirement planning strategies require careful consideration of your specific circumstances, goals, and risk tolerance. Many of these strategies have complex tax and legal implications that may benefit from professional advice. The key is to start with solid fundamentals and gradually incorporate more sophisticated strategies as appropriate for your situation.`}];return c.jsx(Wn,{title:"Retirement Planning",intro:"Plan for a secure financial future with 401(k)s, IRAs, and smart retirement strategies.",sections:n,videoEmbed:c.jsx(Cn,{videoId:"pZNnueqfj_A",title:"Retirement Planning Guide"}),duration:"22 min",difficulty:"Intermediate",prevLessonPath:"/lessons/tax-fundamentals",prevLessonTitle:"Tax Fundamentals",quizId:"retirement-planning"})}function rR({quiz:n,onComplete:r}){var G;const[i,s]=y.useState(0),[l,u]=y.useState(new Array(n.questions.length).fill(-1)),[f,p]=y.useState(!1),[h,g]=y.useState(null),[w,b]=y.useState(!1),[v,C]=y.useState(null);y.useEffect(()=>{g(vy())},[]);const E=n.questions[i],k=i===n.questions.length-1,S=l[i],T=V=>{const Y=[...l];Y[i]=V,u(Y)},I=()=>{k?D():s(i+1)},j=()=>{i>0&&s(i-1)},D=()=>{if(!h)return;const V=Xp(n,l),Y=h.currentLevel,ie=mC(h,n.id,V.xpEarned);g(ie),ie.currentLevel>Y&&(C(ie.currentLevel),b(!0)),p(!0)},$=()=>{s(0),u(new Array(n.questions.length).fill(-1)),p(!1)},U=V=>{switch(V){case"Easy":return"bg-green-100 text-green-700";case"Medium":return"bg-yellow-100 text-yellow-700";case"Hard":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}},z=V=>{switch(V){case"excellent":return"text-green-600";case"good":return"text-yellow-600";case"needsImprovement":return"text-red-600";default:return"text-gray-600"}};if(f){const V=Xp(n,l),Y=h?gy(h.totalXP):null;return c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs(Ee,{className:"text-center",children:[c.jsxs($t,{children:[c.jsx("div",{className:"flex justify-center mb-4",children:V.masteryLevel==="excellent"?c.jsx(Aa,{className:"w-16 h-16 text-yellow-500"}):V.masteryLevel==="good"?c.jsx(La,{className:"w-16 h-16 text-blue-500"}):c.jsx(vp,{className:"w-16 h-16 text-gray-500"})}),c.jsx(_t,{className:"text-3xl mb-2",children:"Quiz Complete!"}),c.jsxs("div",{className:"text-6xl font-bold mb-2",children:[V.score,"/",n.questions.length]}),c.jsxs("div",{className:"text-xl text-gray-600 mb-4",children:[V.percentage,"% Correct"]}),c.jsx(it,{className:ve("text-lg px-4 py-2",z(V.masteryLevel)),children:V.masteryLevel==="excellent"?"Excellent!":V.masteryLevel==="good"?"Good Work!":"Keep Learning!"})]}),c.jsxs(Re,{className:"space-y-6",children:[c.jsx("p",{className:"text-lg",children:V.message}),c.jsxs("div",{className:"bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-6",children:[c.jsxs("div",{className:"text-lg font-semibold mb-2",children:["XP Earned: +",V.xpEarned]}),Y&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-sm",children:[c.jsxs("span",{children:[Y.currentLevel.badge," Level"," ",Y.currentLevel.level,": ",Y.currentLevel.title]}),c.jsxs("span",{children:[h==null?void 0:h.totalXP," /"," ",((G=Y.nextLevel)==null?void 0:G.minXP)||"Max Level"]})]}),c.jsx(Ko,{value:Y.progressToNext,className:"h-3"}),Y.nextLevel&&c.jsxs("div",{className:"text-sm text-gray-600",children:[Y.xpNeededForNext," XP to ",Y.nextLevel.badge," ",Y.nextLevel.title]})]})]}),c.jsxs("div",{className:"flex gap-4 justify-center",children:[c.jsxs(Ie,{onClick:$,variant:"outline",size:"lg",children:[c.jsx(vp,{className:"mr-2 w-5 h-5"}),"Retake Quiz"]}),c.jsxs(Ie,{onClick:r,size:"lg",children:["Continue Learning",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})]}),c.jsxs("div",{className:"mt-8 text-left",children:[c.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Review Answers"}),c.jsx("div",{className:"space-y-4",children:n.questions.map((ie,ee)=>c.jsx(Ee,{className:ve("border-l-4",l[ee]===ie.correctAnswer?"border-l-green-500":"border-l-red-500"),children:c.jsxs(Re,{className:"pt-4",children:[c.jsxs("div",{className:"flex justify-between items-start mb-2",children:[c.jsxs("h4",{className:"font-medium",children:[ee+1,". ",ie.question]}),c.jsx(it,{className:U(ie.difficulty),children:ie.difficulty})]}),c.jsx("div",{className:"space-y-2",children:ie.options.map((pe,J)=>c.jsx("div",{className:ve("p-2 rounded text-sm",J===ie.correctAnswer?"bg-green-100 text-green-800":J===l[ee]&&l[ee]!==ie.correctAnswer?"bg-red-100 text-red-800":"bg-gray-50"),children:c.jsxs("div",{className:"flex items-center gap-2",children:[J===ie.correctAnswer?c.jsx(qu,{className:"w-4 h-4 text-green-600"}):J===l[ee]&&l[ee]!==ie.correctAnswer?c.jsx(gw,{className:"w-4 h-4 text-red-600"}):null,pe]})},J))})]})},ie.id))})]})]})]}),c.jsx(fv,{open:w,onOpenChange:b,children:c.jsxs(gd,{className:"sm:max-w-md",children:[c.jsxs(yd,{children:[c.jsx(vd,{className:"text-center",children:"Level Up! 🎉"}),c.jsx(xd,{className:"text-center",children:"Congratulations! You've reached a new level!"})]}),c.jsxs("div",{className:"text-center py-6",children:[c.jsx("div",{className:"text-6xl mb-4",children:Y==null?void 0:Y.currentLevel.badge}),c.jsxs("div",{className:"text-2xl font-bold mb-2",children:["Level ",v,": ",Y==null?void 0:Y.currentLevel.title]}),c.jsx("p",{className:"text-gray-600",children:Y==null?void 0:Y.currentLevel.description})]}),c.jsx(Ie,{onClick:()=>b(!1),className:"w-full",size:"lg",children:"Awesome!"})]})})]})}return c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsxs("h1",{className:"text-3xl font-bold",children:[n.title," Quiz"]}),c.jsxs(it,{className:"text-lg px-3 py-1",children:[i+1," of ",n.questions.length]})]}),c.jsx(Ko,{value:(i+1)/n.questions.length*100,className:"h-3"})]}),c.jsxs(Ee,{className:"mb-8",children:[c.jsx($t,{children:c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsx(_t,{className:"text-xl flex-1",children:E.question}),c.jsx(it,{className:U(E.difficulty),children:E.difficulty})]})}),c.jsx(Re,{children:c.jsx("div",{className:"space-y-3",children:E.options.map((V,Y)=>c.jsx("button",{onClick:()=>T(Y),className:ve("w-full p-4 text-left rounded-lg border-2 transition-all hover:bg-gray-50",S===Y?"border-primary bg-primary/5":"border-gray-200"),children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:ve("w-6 h-6 rounded-full border-2 flex items-center justify-center",S===Y?"border-primary bg-primary text-white":"border-gray-300"),children:S===Y&&c.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})}),c.jsx("span",{className:"text-lg",children:V})]})},Y))})})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx(Ie,{onClick:j,disabled:i===0,variant:"outline",size:"lg",children:"Previous"}),c.jsxs(Ie,{onClick:I,disabled:S===-1,size:"lg",children:[k?"Finish Quiz":"Next",c.jsx(Kt,{className:"ml-2 w-5 h-5"})]})]})]})}function iR(){const{quizId:n}=CS(),r=od(),i=n?uC(n):null;return i?c.jsx(Tr,{children:c.jsx(rR,{quiz:i,onComplete:()=>r("/quizzes")})}):c.jsx(Tr,{children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center",children:[c.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Quiz Not Found"}),c.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"The quiz you're looking for doesn't exist."}),c.jsxs(Ie,{onClick:()=>r("/quizzes"),size:"lg",children:[c.jsx(vu,{className:"mr-2 w-5 h-5"}),"Back to Quizzes"]})]})})}const oR=new Vk;function sR(){return c.jsx(Gk,{client:oR,children:c.jsxs(Ck,{children:[c.jsx(cb,{}),c.jsx($b,{}),c.jsxs(VS,{children:[c.jsxs(_S,{children:[c.jsx(ft,{path:"/",element:c.jsx(eC,{})}),c.jsx(ft,{path:"/courses",element:c.jsx(lC,{})}),c.jsx(ft,{path:"/pricing",element:c.jsx(hC,{})}),c.jsx(ft,{path:"/about",element:c.jsx(cC,{})}),c.jsx(ft,{path:"/quizzes",element:c.jsx(pC,{})}),c.jsx(ft,{path:"/lessons/budgeting-and-saving",element:c.jsx(GE,{})}),c.jsx(ft,{path:"/lessons/understanding-credit",element:c.jsx(QE,{})}),c.jsx(ft,{path:"/lessons/interest-rates",element:c.jsx(KE,{})}),c.jsx(ft,{path:"/lessons/loans-and-mortgages",element:c.jsx(XE,{})}),c.jsx(ft,{path:"/lessons/investment-basics",element:c.jsx(JE,{})}),c.jsx(ft,{path:"/lessons/risk-vs-return",element:c.jsx(ZE,{})}),c.jsx(ft,{path:"/lessons/understanding-inflation",element:c.jsx(eR,{})}),c.jsx(ft,{path:"/lessons/tax-fundamentals",element:c.jsx(tR,{})}),c.jsx(ft,{path:"/lessons/retirement-planning",element:c.jsx(nR,{})}),c.jsx(ft,{path:"/quiz/:quizId",element:c.jsx(iR,{})}),c.jsx(ft,{path:"*",element:c.jsx(gC,{})})]}),c.jsx(YE,{})]})]})})}gx.createRoot(document.getElementById("root")).render(c.jsx(sR,{}));
