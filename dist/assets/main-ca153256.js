(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var AS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tv={exports:{}},Pc={},nv={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),DS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),US=Symbol.for("react.profiler"),MS=Symbol.for("react.provider"),FS=Symbol.for("react.context"),BS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),$S=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),gm=Symbol.iterator;function zS(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,sv={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||rv}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ov(){}ov.prototype=Bs.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||rv}var Xh=Jh.prototype=new ov;Xh.constructor=Jh;iv(Xh,Bs.prototype);Xh.isPureReactComponent=!0;var _m=Array.isArray,av=Object.prototype.hasOwnProperty,Zh={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,r)&&!lv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:Zh.current}}function VS(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function GS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vm=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GS(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case DS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ru(o,0):r,_m(i)?(n="",t!=null&&(n=t.replace(vm,"$&/")+"/"),gl(i,e,n,"",function(c){return c})):i!=null&&(ef(i)&&(i=VS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_m(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ru(s,a);o+=gl(s,e,n,l,i)}else if(l=zS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ru(s,a++),o+=gl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},_l={transition:null},qS={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Zh};function uv(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=Bs;me.Fragment=OS;me.Profiler=US;me.PureComponent=Jh;me.StrictMode=LS;me.Suspense=jS;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;me.act=uv;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)av.call(e,l)&&!lv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:FS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MS,_context:t},t.Consumer=t};me.createElement=cv;me.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:BS,render:t}};me.isValidElement=ef;me.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:HS}};me.memo=function(t,e){return{$$typeof:$S,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};me.unstable_act=uv;me.useCallback=function(t,e){return Ft.current.useCallback(t,e)};me.useContext=function(t){return Ft.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};me.useEffect=function(t,e){return Ft.current.useEffect(t,e)};me.useId=function(){return Ft.current.useId()};me.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Ft.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};me.useRef=function(t){return Ft.current.useRef(t)};me.useState=function(t){return Ft.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Ft.current.useTransition()};me.version="18.3.1";nv.exports=me;var j=nv.exports;const KS=xS(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=j,YS=Symbol.for("react.element"),JS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,ZS=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eI={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!eI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YS,type:t,key:s,ref:o,props:i,_owner:ZS.current}}Pc.Fragment=JS;Pc.jsx=dv;Pc.jsxs=dv;tv.exports=Pc;var I=tv.exports,Sd={},hv={exports:{}},an={},fv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var ee=L.length;L.push(K);e:for(;0<ee;){var P=ee-1>>>1,R=L[P];if(0<i(R,K))L[P]=K,L[ee]=R,ee=P;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],ee=L.pop();if(ee!==K){L[0]=ee;e:for(var P=0,R=L.length,$=R>>>1;P<$;){var F=2*(P+1)-1,ae=L[F],H=F+1,ie=L[H];if(0>i(ae,ee))H<R&&0>i(ie,ae)?(L[P]=ie,L[H]=ee,P=H):(L[P]=ae,L[F]=ee,P=F);else if(H<R&&0>i(ie,ee))L[P]=ie,L[H]=ee,P=H;else break e}}return K}function i(L,K){var ee=L.sortIndex-K.sortIndex;return ee!==0?ee:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,g=!1,_=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=L)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function y(L){if(v=!1,m(L),!_)if(n(l)!==null)_=!0,At(C);else{var K=n(c);K!==null&&_t(y,K.startTime-L)}}function C(L,K){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var ee=h;try{for(m(K),u=n(l);u!==null&&(!(u.expirationTime>K)||L&&!ce());){var P=u.callback;if(typeof P=="function"){u.callback=null,h=u.priorityLevel;var R=P(u.expirationTime<=K);K=t.unstable_now(),typeof R=="function"?u.callback=R:u===n(l)&&r(l),m(K)}else r(l);u=n(l)}if(u!==null)var $=!0;else{var F=n(c);F!==null&&_t(y,F.startTime-K),$=!1}return $}finally{u=null,h=ee,g=!1}}var T=!1,b=null,N=-1,V=5,W=-1;function ce(){return!(t.unstable_now()-W<V)}function ge(){if(b!==null){var L=t.unstable_now();W=L;var K=!0;try{K=b(!0,L)}finally{K?se():(T=!1,b=null)}}else T=!1}var se;if(typeof f=="function")se=function(){f(ge)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ze=Oe.port2;Oe.port1.onmessage=ge,se=function(){Ze.postMessage(null)}}else se=function(){E(ge,0)};function At(L){b=L,T||(T=!0,se())}function _t(L,K){N=E(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,At(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var ee=h;h=K;try{return L()}finally{h=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ee=h;h=L;try{return K()}finally{h=ee}},t.unstable_scheduleCallback=function(L,K,ee){var P=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?P+ee:P):ee=P,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=ee+R,L={id:d++,callback:K,priorityLevel:L,startTime:ee,expirationTime:R,sortIndex:-1},ee>P?(L.sortIndex=ee,e(c,L),n(l)===null&&L===n(c)&&(v?(p(N),N=-1):v=!0,_t(y,ee-P))):(L.sortIndex=R,e(l,L),_||g||(_=!0,At(C))),L},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(L){var K=h;return function(){var ee=h;h=K;try{return L.apply(this,arguments)}finally{h=ee}}}})(pv);fv.exports=pv;var tI=fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI=j,nn=tI;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,$o={};function ji(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for($o[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Id=Object.prototype.hasOwnProperty,rI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},wm={};function iI(t){return Id.call(wm,t)?!0:Id.call(ym,t)?!1:rI.test(t)?wm[t]=!0:(ym[t]=!0,!1)}function sI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oI(t,e,n,r){if(e===null||typeof e>"u"||sI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);St[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);St[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);St[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oI(e,n,i,r)&&(n=null),r||i===null?iI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=nI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),vv=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,bu;function go(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Pu=!1;function Nu(t,e){if(!t||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function aI(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Zi:return"Portal";case Cd:return"Profiler";case sf:return"StrictMode";case Td:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _v:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function lI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cI(t){var e=yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=cI(t))}function wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bd(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Pd(t,e){Ev(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nd(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nd(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(_o(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function Sv(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,Cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uI=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){uI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function kv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dI=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(t,e){if(e){if(dI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ud=null,fs=null,ps=null;function km(t){if(t=ba(t)){if(typeof Ud!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Oc(e),Ud(t.stateNode,t.type,e))}}function Rv(t){fs?ps?ps.push(t):ps=[t]:fs=t}function bv(){if(fs){var t=fs,e=ps;if(ps=fs=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function Pv(t,e){return t(e)}function Nv(){}var Au=!1;function Av(t,e,n){if(Au)return t(e,n);Au=!0;try{return Pv(t,e,n)}finally{Au=!1,(fs!==null||ps!==null)&&(Nv(),bv())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Md=!1;if(dr)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Md=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Md=!1}function hI(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Co=!1,Ol=null,Ll=!1,Fd=null,fI={onError:function(t){Co=!0,Ol=t}};function pI(t,e,n,r,i,s,o,a,l){Co=!1,Ol=null,hI.apply(fI,arguments)}function mI(t,e,n,r,i,s,o,a,l){if(pI.apply(this,arguments),Co){if(Co){var c=Ol;Co=!1,Ol=null}else throw Error(A(198));Ll||(Ll=!0,Fd=c)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if($i(t)!==t)throw Error(A(188))}function gI(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rm(i),t;if(s===r)return Rm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Dv(t){return t=gI(t),t!==null?Ov(t):null}function Ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ov(t);if(e!==null)return e;t=t.sibling}return null}var Lv=nn.unstable_scheduleCallback,bm=nn.unstable_cancelCallback,_I=nn.unstable_shouldYield,vI=nn.unstable_requestPaint,Je=nn.unstable_now,yI=nn.unstable_getCurrentPriorityLevel,cf=nn.unstable_ImmediatePriority,Uv=nn.unstable_UserBlockingPriority,Ul=nn.unstable_NormalPriority,wI=nn.unstable_LowPriority,Mv=nn.unstable_IdlePriority,Nc=null,Vn=null;function EI(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Nc,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:CI,SI=Math.log,II=Math.LN2;function CI(t){return t>>>=0,t===0?32:31-(SI(t)/II|0)|0}var Ja=64,Xa=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vo(a):(s&=o,s!==0&&(r=vo(s)))}else o=n&~i,o!==0?r=vo(o):s!==0&&(r=vo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function TI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fv(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function RI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Re=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,df,$v,Wv,zv,jd=!1,Za=[],Or=null,Lr=null,Ur=null,Vo=new Map,Go=new Map,Rr=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ba(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PI(t,e,n,r,i){switch(e){case"focusin":return Or=to(Or,t,e,n,r,i),!0;case"dragenter":return Lr=to(Lr,t,e,n,r,i),!0;case"mouseover":return Ur=to(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,to(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Go.set(s,to(Go.get(s)||null,t,e,n,r,i)),!0}return!1}function Vv(t){var e=hi(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,zv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ld=r,n.target.dispatchEvent(r),Ld=null}else return e=ba(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){vl(t)&&n.delete(e)}function NI(){jd=!1,Or!==null&&vl(Or)&&(Or=null),Lr!==null&&vl(Lr)&&(Lr=null),Ur!==null&&vl(Ur)&&(Ur=null),Vo.forEach(Nm),Go.forEach(Nm)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,NI)))}function Ho(t){function e(i){return no(i,t)}if(0<Za.length){no(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&no(Or,t),Lr!==null&&no(Lr,t),Ur!==null&&no(Ur,t),Vo.forEach(e),Go.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)Vv(n),n.blockedOn===null&&Rr.shift()}var ms=vr.ReactCurrentBatchConfig,Fl=!0;function AI(t,e,n,r){var i=Re,s=ms.transition;ms.transition=null;try{Re=1,hf(t,e,n,r)}finally{Re=i,ms.transition=s}}function xI(t,e,n,r){var i=Re,s=ms.transition;ms.transition=null;try{Re=4,hf(t,e,n,r)}finally{Re=i,ms.transition=s}}function hf(t,e,n,r){if(Fl){var i=$d(t,e,n,r);if(i===null)Wu(t,e,r,Bl,n),Pm(t,r);else if(PI(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<bI.indexOf(t)){for(;i!==null;){var s=ba(i);if(s!==null&&jv(s),s=$d(t,e,n,r),s===null&&Wu(t,e,r,Bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var Bl=null;function $d(t,e,n,r){if(Bl=null,t=lf(r),t=hi(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function Gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yI()){case cf:return 1;case Uv:return 4;case Ul:case wI:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var Pr=null,ff=null,yl=null;function Hv(){if(yl)return yl;var t,e=ff,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Am(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:Am,this.isPropagationStopped=Am,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=ln(js),Ra=He({},js,{view:0,detail:0}),DI=ln(Ra),Du,Ou,ro,Ac=He({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Du=t.screenX-ro.screenX,Ou=t.screenY-ro.screenY):Ou=Du=0,ro=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),xm=ln(Ac),OI=He({},Ac,{dataTransfer:0}),LI=ln(OI),UI=He({},Ra,{relatedTarget:0}),Lu=ln(UI),MI=He({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),FI=ln(MI),BI=He({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jI=ln(BI),$I=He({},js,{data:0}),Dm=ln($I),WI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VI[t])?!!e[t]:!1}function mf(){return GI}var HI=He({},Ra,{key:function(t){if(t.key){var e=WI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qI=ln(HI),KI=He({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=ln(KI),QI=He({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),YI=ln(QI),JI=He({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),XI=ln(JI),ZI=He({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=ln(ZI),tC=[9,13,27,32],gf=dr&&"CompositionEvent"in window,To=null;dr&&"documentMode"in document&&(To=document.documentMode);var nC=dr&&"TextEvent"in window&&!To,qv=dr&&(!gf||To&&8<To&&11>=To),Lm=String.fromCharCode(32),Um=!1;function Kv(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function rC(t,e){switch(t){case"compositionend":return Qv(e);case"keypress":return e.which!==32?null:(Um=!0,Lm);case"textInput":return t=e.data,t===Lm&&Um?null:t;default:return null}}function iC(t,e){if(ts)return t==="compositionend"||!gf&&Kv(t,e)?(t=Hv(),yl=ff=Pr=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function Yv(t,e,n,r){Rv(r),e=jl(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,qo=null;function oC(t){ay(t,0)}function xc(t){var e=is(t);if(wv(e))return t}function aC(t,e){if(t==="change")return e}var Jv=!1;if(dr){var Uu;if(dr){var Mu="oninput"in document;if(!Mu){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Mu=typeof Fm.oninput=="function"}Uu=Mu}else Uu=!1;Jv=Uu&&(!document.documentMode||9<document.documentMode)}function Bm(){ko&&(ko.detachEvent("onpropertychange",Xv),qo=ko=null)}function Xv(t){if(t.propertyName==="value"&&xc(qo)){var e=[];Yv(e,qo,t,lf(t)),Av(oC,e)}}function lC(t,e,n){t==="focusin"?(Bm(),ko=e,qo=n,ko.attachEvent("onpropertychange",Xv)):t==="focusout"&&Bm()}function cC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(qo)}function uC(t,e){if(t==="click")return xc(e)}function dC(t,e){if(t==="input"||t==="change")return xc(e)}function hC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:hC;function Ko(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Id.call(e,i)||!xn(t[i],e[i]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,e){var n=jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function Zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ey(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=ey(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zv(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$m(n,s);var o=$m(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=dr&&"documentMode"in document&&11>=document.documentMode,ns=null,Wd=null,Ro=null,zd=!1;function Wm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||ns==null||ns!==Dl(r)||(r=ns,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Ko(Ro,r)||(Ro=r,r=jl(Wd,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ns)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Fu={},ty={};dr&&(ty=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Dc(t){if(Fu[t])return Fu[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ty)return Fu[t]=e[n];return t}var ny=Dc("animationend"),ry=Dc("animationiteration"),iy=Dc("animationstart"),sy=Dc("transitionend"),oy=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){oy.set(t,e),ji(e,[t])}for(var Bu=0;Bu<zm.length;Bu++){var ju=zm[Bu],mC=ju.toLowerCase(),gC=ju[0].toUpperCase()+ju.slice(1);ni(mC,"on"+gC)}ni(ny,"onAnimationEnd");ni(ry,"onAnimationIteration");ni(iy,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(sy,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_C=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mI(r,e,void 0,t),t.currentTarget=null}function ay(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vm(i,a,c),s=l}}}if(Ll)throw t=Fd,Ll=!1,Fd=null,t}function Ue(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||(ly(e,t,2,!1),n.add(r))}function $u(t,e,n){var r=0;e&&(r|=4),ly(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[nl]){t[nl]=!0,mv.forEach(function(n){n!=="selectionchange"&&(_C.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,$u("selectionchange",!1,e))}}function ly(t,e,n,r){switch(Gv(e)){case 1:var i=AI;break;case 4:i=xI;break;default:i=hf}n=i.bind(null,e,n,t),i=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Av(function(){var c=s,d=lf(n),u=[];e:{var h=oy.get(t);if(h!==void 0){var g=pf,_=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":g=qI;break;case"focusin":_="focus",g=Lu;break;case"focusout":_="blur",g=Lu;break;case"beforeblur":case"afterblur":g=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=LI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=YI;break;case ny:case ry:case iy:g=FI;break;case sy:g=XI;break;case"scroll":g=DI;break;case"wheel":g=eC;break;case"copy":case"cut":case"paste":g=jI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Om}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=c,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=zo(f,p),y!=null&&v.push(Yo(f,y,m)))),E)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),u.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ld&&(_=n.relatedTarget||n.fromElement)&&(hi(_)||_[hr]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?hi(_):null,_!==null&&(E=$i(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(v=xm,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Om,y="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?h:is(g),m=_==null?h:is(_),h=new v(y,f+"leave",g,n,d),h.target=E,h.relatedTarget=m,y=null,hi(d)===c&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=E,y=v),E=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=Ki(m))f++;for(m=0,y=p;y;y=Ki(y))m++;for(;0<f-m;)v=Ki(v),f--;for(;0<m-f;)p=Ki(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ki(v),p=Ki(p)}v=null}else v=null;g!==null&&Gm(u,h,g,v,!1),_!==null&&E!==null&&Gm(u,E,_,v,!0)}}e:{if(h=c?is(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=aC;else if(Mm(h))if(Jv)C=dC;else{C=cC;var T=lC}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=uC);if(C&&(C=C(t,c))){Yv(u,C,n,d);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Nd(h,"number",h.value)}switch(T=c?is(c):window,t){case"focusin":(Mm(T)||T.contentEditable==="true")&&(ns=T,Wd=c,Ro=null);break;case"focusout":Ro=Wd=ns=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,Wm(u,n,d);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":Wm(u,n,d)}var b;if(gf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ts?Kv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(qv&&n.locale!=="ko"&&(ts||N!=="onCompositionStart"?N==="onCompositionEnd"&&ts&&(b=Hv()):(Pr=d,ff="value"in Pr?Pr.value:Pr.textContent,ts=!0)),T=jl(c,N),0<T.length&&(N=new Dm(N,t,null,n,d),u.push({event:N,listeners:T}),b?N.data=b:(b=Qv(n),b!==null&&(N.data=b)))),(b=nC?rC(t,n):iC(t,n))&&(c=jl(c,"onBeforeInput"),0<c.length&&(d=new Dm("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=b))}ay(u,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=zo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=zo(n,s),l!=null&&o.unshift(Yo(n,l,a))):i||(l=zo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,yC=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(yC,"")}function rl(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(A(425))}function $l(){}var Vd=null,Gd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(SC)}:qd;function SC(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Mn="__reactFiber$"+$s,Jo="__reactProps$"+$s,hr="__reactContainer$"+$s,Kd="__reactEvents$"+$s,IC="__reactListeners$"+$s,CC="__reactHandles$"+$s;function hi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[Mn])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[Mn]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Oc(t){return t[Jo]||null}var Qd=[],ss=-1;function ri(t){return{current:t}}function Me(t){0>ss||(t.current=Qd[ss],Qd[ss]=null,ss--)}function xe(t,e){ss++,Qd[ss]=t.current,t.current=e}var qr={},Nt=ri(qr),Gt=ri(!1),Ti=qr;function ks(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function Wl(){Me(Gt),Me(Nt)}function Qm(t,e,n){if(Nt.current!==qr)throw Error(A(168));xe(Nt,e),xe(Gt,n)}function cy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,lI(t)||"Unknown",i));return He({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Ti=Nt.current,xe(Nt,t),xe(Gt,Gt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=cy(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,Me(Gt),Me(Nt),xe(Nt,t)):Me(Gt),xe(Gt,n)}var Zn=null,Lc=!1,Vu=!1;function uy(t){Zn===null?Zn=[t]:Zn.push(t)}function TC(t){Lc=!0,uy(t)}function ii(){if(!Vu&&Zn!==null){Vu=!0;var t=0,e=Re;try{var n=Zn;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,Lc=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(t+1)),Lv(cf,ii),i}finally{Re=e,Vu=!1}}return null}var os=[],as=0,Vl=null,Gl=0,cn=[],un=0,ki=null,tr=1,nr="";function li(t,e){os[as++]=Gl,os[as++]=Vl,Vl=t,Gl=e}function dy(t,e,n){cn[un++]=tr,cn[un++]=nr,cn[un++]=ki,ki=t;var r=tr;t=nr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tr=1<<32-bn(e)+i|n<<i|r,nr=s+t}else tr=1<<s|n<<i|r,nr=t}function vf(t){t.return!==null&&(li(t,1),dy(t,1,0))}function yf(t){for(;t===Vl;)Vl=os[--as],os[as]=null,Gl=os[--as],os[as]=null;for(;t===ki;)ki=cn[--un],cn[un]=null,nr=cn[--un],cn[un]=null,tr=cn[--un],cn[un]=null}var tn=null,Zt=null,je=!1,kn=null;function hy(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Zt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Zt=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jd(t){if(je){var e=Zt;if(e){var n=e;if(!Jm(t,e)){if(Yd(t))throw Error(A(418));e=Mr(n.nextSibling);var r=tn;e&&Jm(t,e)?hy(r,n):(t.flags=t.flags&-4097|2,je=!1,tn=t)}}else{if(Yd(t))throw Error(A(418));t.flags=t.flags&-4097|2,je=!1,tn=t}}}function Xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function il(t){if(t!==tn)return!1;if(!je)return Xm(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=Zt)){if(Yd(t))throw fy(),Error(A(418));for(;e;)hy(t,e),e=Mr(e.nextSibling)}if(Xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=tn?Mr(t.stateNode.nextSibling):null;return!0}function fy(){for(var t=Zt;t;)t=Mr(t.nextSibling)}function Rs(){Zt=tn=null,je=!1}function wf(t){kn===null?kn=[t]:kn.push(t)}var kC=vr.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function py(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$r(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=Ju(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var C=m.type;return C===es?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tr&&Zm(C)===f.type)?(y=i(f,m.props),y.ref=io(p,f,m),y.return=p,y):(y=Rl(m.type,m.key,m.props,null,p.mode,y),y.ref=io(p,f,m),y.return=p,y)}function c(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Xu(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,C){return f===null||f.tag!==7?(f=yi(m,p.mode,y,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ju(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ka:return m=Rl(f.type,f.key,f.props,null,p.mode,m),m.ref=io(p,null,f),m.return=p,m;case Zi:return f=Xu(f,p.mode,m),f.return=p,f;case Tr:var y=f._init;return u(p,y(f._payload),m)}if(_o(f)||Zs(f))return f=yi(f,p.mode,m,null),f.return=p,f;sl(p,f)}return null}function h(p,f,m,y){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:return m.key===C?l(p,f,m,y):null;case Zi:return m.key===C?c(p,f,m,y):null;case Tr:return C=m._init,h(p,f,C(m._payload),y)}if(_o(m)||Zs(m))return C!==null?null:d(p,f,m,y,null);sl(p,m)}return null}function g(p,f,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,C);case Zi:return p=p.get(y.key===null?m:y.key)||null,c(f,p,y,C);case Tr:var T=y._init;return g(p,f,m,T(y._payload),C)}if(_o(y)||Zs(y))return p=p.get(m)||null,d(f,p,y,C,null);sl(f,y)}return null}function _(p,f,m,y){for(var C=null,T=null,b=f,N=f=0,V=null;b!==null&&N<m.length;N++){b.index>N?(V=b,b=null):V=b.sibling;var W=h(p,b,m[N],y);if(W===null){b===null&&(b=V);break}t&&b&&W.alternate===null&&e(p,b),f=s(W,f,N),T===null?C=W:T.sibling=W,T=W,b=V}if(N===m.length)return n(p,b),je&&li(p,N),C;if(b===null){for(;N<m.length;N++)b=u(p,m[N],y),b!==null&&(f=s(b,f,N),T===null?C=b:T.sibling=b,T=b);return je&&li(p,N),C}for(b=r(p,b);N<m.length;N++)V=g(b,p,N,m[N],y),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?N:V.key),f=s(V,f,N),T===null?C=V:T.sibling=V,T=V);return t&&b.forEach(function(ce){return e(p,ce)}),je&&li(p,N),C}function v(p,f,m,y){var C=Zs(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var T=C=null,b=f,N=f=0,V=null,W=m.next();b!==null&&!W.done;N++,W=m.next()){b.index>N?(V=b,b=null):V=b.sibling;var ce=h(p,b,W.value,y);if(ce===null){b===null&&(b=V);break}t&&b&&ce.alternate===null&&e(p,b),f=s(ce,f,N),T===null?C=ce:T.sibling=ce,T=ce,b=V}if(W.done)return n(p,b),je&&li(p,N),C;if(b===null){for(;!W.done;N++,W=m.next())W=u(p,W.value,y),W!==null&&(f=s(W,f,N),T===null?C=W:T.sibling=W,T=W);return je&&li(p,N),C}for(b=r(p,b);!W.done;N++,W=m.next())W=g(b,p,N,W.value,y),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?N:W.key),f=s(W,f,N),T===null?C=W:T.sibling=W,T=W);return t&&b.forEach(function(ge){return e(p,ge)}),je&&li(p,N),C}function E(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===es&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:e:{for(var C=m.key,T=f;T!==null;){if(T.key===C){if(C=m.type,C===es){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tr&&Zm(C)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=io(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===es?(f=yi(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Rl(m.type,m.key,m.props,null,p.mode,y),y.ref=io(p,f,m),y.return=p,p=y)}return o(p);case Zi:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Xu(m,p.mode,y),f.return=p,p=f}return o(p);case Tr:return T=m._init,E(p,f,T(m._payload),y)}if(_o(m))return _(p,f,m,y);if(Zs(m))return v(p,f,m,y);sl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ju(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return E}var bs=py(!0),my=py(!1),Hl=ri(null),ql=null,ls=null,Ef=null;function Sf(){Ef=ls=ql=null}function If(t){var e=Hl.current;Me(Hl),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){ql=t,Ef=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(ql===null)throw Error(A(308));ls=t,ql.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var fi=null;function Cf(t){fi===null?fi=[t]:fi.push(t)}function gy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,fr(t,r)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fr(t,n)}return i=r.interleaved,i===null?(e.next=e,Cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,fr(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uf(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){u=_.call(g,u,h);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,u,h):_,h==null)break e;u=He({},u,h);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=u}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Pa={},Gn=ri(Pa),Xo=ri(Pa),Zo=ri(Pa);function pi(t){if(t===Pa)throw Error(A(174));return t}function kf(t,e){switch(xe(Zo,e),xe(Xo,t),xe(Gn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}Me(Gn),xe(Gn,e)}function Ps(){Me(Gn),Me(Xo),Me(Zo)}function vy(t){pi(Zo.current);var e=pi(Gn.current),n=xd(e,t.type);e!==n&&(xe(Xo,t),xe(Gn,n))}function Rf(t){Xo.current===t&&(Me(Gn),Me(Xo))}var We=ri(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function bf(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var Sl=vr.ReactCurrentDispatcher,Hu=vr.ReactCurrentBatchConfig,Ri=0,Ge=null,ot=null,dt=null,Yl=!1,bo=!1,ea=0,RC=0;function Tt(){throw Error(A(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function Nf(t,e,n,r,i,s){if(Ri=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?AC:xC,t=n(r,i),bo){s=0;do{if(bo=!1,ea=0,25<=s)throw Error(A(301));s+=1,dt=ot=null,e.updateQueue=null,Sl.current=DC,t=n(r,i)}while(bo)}if(Sl.current=Jl,e=ot!==null&&ot.next!==null,Ri=0,dt=ot=Ge=null,Yl=!1,e)throw Error(A(300));return t}function Af(){var t=ea!==0;return ea=0,t}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ge.memoizedState=dt=t:dt=dt.next=t,dt}function yn(){if(ot===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=dt===null?Ge.memoizedState:dt.next;if(e!==null)dt=e,ot=t;else{if(t===null)throw Error(A(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Ge.memoizedState=dt=t:dt=dt.next=t}return dt}function ta(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=yn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ri&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,Ge.lanes|=d,bi|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,xn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ge.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=yn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function yy(){}function wy(t,e){var n=Ge,r=yn(),i=e(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,xf(Iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,na(9,Sy.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(A(349));Ri&30||Ey(n,e,i)}return i}function Ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sy(t,e,n,r){e.value=n,e.getSnapshot=r,Cy(e)&&Ty(t)}function Iy(t,e,n){return n(function(){Cy(e)&&Ty(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function Ty(t){var e=fr(t,1);e!==null&&Pn(e,t,1,-1)}function ng(t){var e=Un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,Ge,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ky(){return yn().memoizedState}function Il(t,e,n,r){var i=Un();Ge.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function Uc(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,r!==null&&Pf(r,o.deps)){i.memoizedState=na(e,n,s,r);return}}Ge.flags|=t,i.memoizedState=na(1|e,n,s,r)}function rg(t,e){return Il(8390656,8,t,e)}function xf(t,e){return Uc(2048,8,t,e)}function Ry(t,e){return Uc(4,2,t,e)}function by(t,e){return Uc(4,4,t,e)}function Py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ny(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,Py.bind(null,e,t),n)}function Df(){}function Ay(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xy(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dy(t,e,n){return Ri&21?(xn(n,e)||(n=Fv(),Ge.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function bC(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=Hu.transition;Hu.transition={};try{t(!1),e()}finally{Re=n,Hu.transition=r}}function Oy(){return yn().memoizedState}function PC(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ly(t))Uy(e,n);else if(n=gy(t,e,n,r),n!==null){var i=Ut();Pn(n,t,r,i),My(n,e,r)}}function NC(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ly(t))Uy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,o)){var l=e.interleaved;l===null?(i.next=i,Cf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gy(t,e,i,r),n!==null&&(i=Ut(),Pn(n,t,r,i),My(n,e,r))}}function Ly(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function Uy(t,e){bo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function My(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uf(t,n)}}var Jl={readContext:vn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},AC={readContext:vn,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,Py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PC.bind(null,Ge,t),[r.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:Df,useDeferredValue:function(t){return Un().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=bC.bind(null,t[1]),Un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ge,i=Un();if(je){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),mt===null)throw Error(A(349));Ri&30||Ey(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg(Iy.bind(null,r,s,t),[t]),r.flags|=2048,na(9,Sy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Un(),e=mt.identifierPrefix;if(je){var n=nr,r=tr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xC={readContext:vn,useCallback:Ay,useContext:vn,useEffect:xf,useImperativeHandle:Ny,useInsertionEffect:Ry,useLayoutEffect:by,useMemo:xy,useReducer:qu,useRef:ky,useState:function(){return qu(ta)},useDebugValue:Df,useDeferredValue:function(t){var e=yn();return Dy(e,ot.memoizedState,t)},useTransition:function(){var t=qu(ta)[0],e=yn().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:wy,useId:Oy,unstable_isNewReconciler:!1},DC={readContext:vn,useCallback:Ay,useContext:vn,useEffect:xf,useImperativeHandle:Ny,useInsertionEffect:Ry,useLayoutEffect:by,useMemo:xy,useReducer:Ku,useRef:ky,useState:function(){return Ku(ta)},useDebugValue:Df,useDeferredValue:function(t){var e=yn();return ot===null?e.memoizedState=t:Dy(e,ot.memoizedState,t)},useTransition:function(){var t=Ku(ta)[0],e=yn().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:wy,useId:Oy,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=jr(t),s=or(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(Pn(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=jr(t),s=or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(Pn(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=jr(t),i=or(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(Pn(e,t,r,n),El(e,t,r))}};function ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,s):!0}function Fy(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Ht(e)?Ti:Nt.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Ht(e)?Ti:Nt.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=aI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OC=typeof WeakMap=="function"?WeakMap:Map;function By(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zl||(Zl=!0,dh=r),th(t,e)},n}function jy(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){th(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var LC=vr.ReactCurrentOwner,zt=!1;function Dt(t,e,n,r){e.child=t===null?my(e,null,n,r):bs(e,t.child,n,r)}function cg(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=Nf(t,e,n,r,s,i),n=Af(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(je&&n&&vf(e),e.flags|=1,Dt(t,e,r,i),e.child)}function ug(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$y(t,e,s,r,i)):(t=Rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return pr(t,e,i)}return e.flags|=1,t=$r(s,r),t.ref=e.ref,t.return=e,e.child=t}function $y(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ko(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,pr(t,e,i)}return nh(t,e,n,r,i)}function Wy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(us,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(us,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(us,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(us,Jt),Jt|=r;return Dt(t,e,i,n),e.child}function zy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nh(t,e,n,r,i){var s=Ht(n)?Ti:Nt.current;return s=ks(e,s),gs(e,i),n=Nf(t,e,n,r,s,i),r=Af(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(je&&r&&vf(e),e.flags|=1,Dt(t,e,n,i),e.child)}function dg(t,e,n,r,i){if(Ht(n)){var s=!0;zl(e)}else s=!1;if(gs(e,i),e.stateNode===null)Cl(t,e),Fy(e,n,r),eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=vn(c):(c=Ht(n)?Ti:Nt.current,c=ks(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&sg(e,o,r,c),kr=!1;var h=e.memoizedState;o.state=h,Kl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Gt.current||kr?(typeof d=="function"&&(Zd(e,n,d,r),l=e.memoizedState),(a=kr||ig(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_y(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Cn(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=Ht(n)?Ti:Nt.current,l=ks(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&sg(e,o,r,l),kr=!1,h=e.memoizedState,o.state=h,Kl(e,r,o,i);var _=e.memoizedState;a!==u||h!==_||Gt.current||kr?(typeof g=="function"&&(Zd(e,n,g,r),_=e.memoizedState),(c=kr||ig(e,n,c,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return rh(t,e,n,r,s,i)}function rh(t,e,n,r,i,s){zy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),pr(t,e,s);r=e.stateNode,LC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Dt(t,e,a,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function Vy(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),kf(t,e.containerInfo)}function hg(t,e,n,r,i){return Rs(),wf(i),e.flags|=256,Dt(t,e,n,r),e.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var r=e.pendingProps,i=We.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(We,i&1),t===null)return Jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,r,0,null),t=yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sh(n),e.memoizedState=ih,t):Of(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ih,r}return s=t.child,t=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Of(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&wf(r),bs(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qu(Error(A(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jc({mode:"visible",children:r.children},i,0,null),s=yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=ih,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Qu(s,r,void 0),ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=mt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fr(t,i),Pn(r,t,i,-1))}return jf(),r=Qu(Error(A(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=Mr(i.nextSibling),tn=e,je=!0,kn=null,t!==null&&(cn[un++]=tr,cn[un++]=nr,cn[un++]=ki,tr=t.id,nr=t.overflow,ki=e),e=Of(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xd(t.return,e,n)}function Yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=We.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(We,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MC(t,e,n){switch(e.tag){case 3:Vy(e),Rs();break;case 5:vy(e);break;case 1:Ht(e.type)&&zl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(We,We.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(xe(We,We.current&1),t=pr(t,e,n),t!==null?t.sibling:null);xe(We,We.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(We,We.current),r)break;return null;case 22:case 23:return e.lanes=0,Wy(t,e,n)}return pr(t,e,n)}var qy,oh,Ky,Qy;qy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};Ky=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(Gn.current);var s=null;switch(n){case"input":i=bd(t,i),r=bd(t,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Ad(t,i),r=Ad(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Dd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Qy=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FC(t,e,n){var r=e.pendingProps;switch(yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return Ht(e.type)&&Wl(),kt(e),null;case 3:return r=e.stateNode,Ps(),Me(Gt),Me(Nt),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(ph(kn),kn=null))),oh(t,e),kt(e),null;case 5:Rf(e);var i=pi(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ky(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return kt(e),null}if(t=pi(Gn.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)Ue(yo[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":Sm(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":Cm(r,s),Ue("invalid",r)}Dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":Qa(r),Im(r,s,!0);break;case"textarea":Qa(r),Tm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Jo]=r,qy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Od(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)Ue(yo[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":Sm(t,r),i=bd(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":Cm(t,r),i=Ad(t,r),Ue("invalid",t);break;default:i=r}Dd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ue("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":Qa(t),Im(t,r,!1);break;case"textarea":Qa(t),Tm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Qy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=pi(Zo.current),pi(Gn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return kt(e),null;case 13:if(Me(We),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Zt!==null&&e.mode&1&&!(e.flags&128))fy(),Rs(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Mn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else kn!==null&&(ph(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||We.current&1?lt===0&&(lt=3):jf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ps(),oh(t,e),t===null&&Qo(e.stateNode.containerInfo),kt(e),null;case 10:return If(e.type._context),kt(e),null;case 17:return Ht(e.type)&&Wl(),kt(e),null;case 19:if(Me(We),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(We,We.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>As&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return kt(e),null}else 2*Je()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=We.current,xe(We,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function BC(t,e){switch(yf(e),e.tag){case 1:return Ht(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),Me(Gt),Me(Nt),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(Me(We),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(We),null;case 4:return Ps(),null;case 10:return If(e.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var al=!1,Rt=!1,jC=typeof WeakSet=="function"?WeakSet:Set,z=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(t,e,r)}else n.current=null}function ah(t,e,n){try{n()}catch(r){Ye(t,e,r)}}var pg=!1;function $C(t,e){if(Vd=Fl,t=ey(),_f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gd={focusedElem:t,selectionRange:n},Fl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,E=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Cn(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(y){Ye(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return _=pg,pg=!1,_}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ah(e,n,s)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Jo],delete e[Kd],delete e[IC],delete e[CC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jy(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var yt=null,Tn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)Xy(t,e,n),n=n.sibling}function Xy(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:Rt||cs(n,e);case 6:var r=yt,i=Tn;yt=null,Ir(t,e,n),yt=r,Tn=i,yt!==null&&(Tn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Tn?(t=yt,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Ho(t)):zu(yt,n.stateNode));break;case 4:r=yt,i=Tn,yt=n.stateNode.containerInfo,Tn=!0,Ir(t,e,n),yt=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ah(n,e,o),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!Rt&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ye(n,e,a)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Ir(t,e,n),Rt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jC),e.forEach(function(r){var i=YC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,Tn=!1;break e;case 3:yt=a.stateNode.containerInfo,Tn=!0;break e;case 4:yt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(yt===null)throw Error(A(160));Xy(s,o,i),yt=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zy(e,t),e=e.sibling}function Zy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Ln(t),r&4){try{Po(3,t,t.return),Fc(3,t)}catch(v){Ye(t,t.return,v)}try{Po(5,t,t.return)}catch(v){Ye(t,t.return,v)}}break;case 1:Sn(e,t),Ln(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(Sn(e,t),Ln(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{Wo(i,"")}catch(v){Ye(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ev(i,s),Od(a,o);var c=Od(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?kv(i,u):d==="dangerouslySetInnerHTML"?Cv(i,u):d==="children"?Wo(i,u):rf(i,d,u,c)}switch(a){case"input":Pd(i,s);break;case"textarea":Sv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?hs(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(v){Ye(t,t.return,v)}}break;case 6:if(Sn(e,t),Ln(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ye(t,t.return,v)}}break;case 3:if(Sn(e,t),Ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(v){Ye(t,t.return,v)}break;case 4:Sn(e,t),Ln(t);break;case 13:Sn(e,t),Ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mf=Je())),r&4&&gg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(c=Rt)||d,Sn(e,t),Rt=c):Sn(e,t),Ln(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(u=z=d;z!==null;){switch(h=z,g=h.child,h.tag){case 0:case 11:case 14:case 15:Po(4,h,h.return);break;case 1:cs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ye(r,n,v)}}break;case 5:cs(h,h.return);break;case 22:if(h.memoizedState!==null){vg(u);continue}}g!==null?(g.return=h,z=g):vg(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(v){Ye(t,t.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){Ye(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Sn(e,t),Ln(t),r&4&&gg(t);break;case 21:break;default:Sn(e,t),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wo(i,""),r.flags&=-33);var s=mg(t);uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mg(t);ch(t,a,o);break;default:throw Error(A(161))}}catch(l){Ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WC(t,e,n){z=t,ew(t)}function ew(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=al;var c=Rt;if(al=o,(Rt=l)&&!c)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?yg(i):l!==null?(l.return=o,z=l):yg(i);for(;s!==null;)z=s,ew(s),s=s.sibling;z=i,al=a,Rt=c}_g(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):_g(t)}}function _g(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Ho(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Rt||e.flags&512&&lh(e)}catch(h){Ye(e,e.return,h)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function vg(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function yg(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){Ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ye(e,i,l)}}var s=e.return;try{lh(e)}catch(l){Ye(e,s,l)}break;case 5:var o=e.return;try{lh(e)}catch(l){Ye(e,o,l)}}}catch(l){Ye(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var zC=Math.ceil,Xl=vr.ReactCurrentDispatcher,Lf=vr.ReactCurrentOwner,gn=vr.ReactCurrentBatchConfig,Ie=0,mt=null,nt=null,wt=0,Jt=0,us=ri(0),lt=0,ra=null,bi=0,Bc=0,Uf=0,No=null,$t=null,Mf=0,As=1/0,Xn=null,Zl=!1,dh=null,Br=null,ll=!1,Nr=null,ec=0,Ao=0,hh=null,Tl=-1,kl=0;function Ut(){return Ie&6?Je():Tl!==-1?Tl:Tl=Je()}function jr(t){return t.mode&1?Ie&2&&wt!==0?wt&-wt:kC.transition!==null?(kl===0&&(kl=Fv()),kl):(t=Re,t!==0||(t=window.event,t=t===void 0?16:Gv(t.type)),t):1}function Pn(t,e,n,r){if(50<Ao)throw Ao=0,hh=null,Error(A(185));ka(t,n,r),(!(Ie&2)||t!==mt)&&(t===mt&&(!(Ie&2)&&(Bc|=n),lt===4&&br(t,wt)),qt(t,r),n===1&&Ie===0&&!(e.mode&1)&&(As=Je()+500,Lc&&ii()))}function qt(t,e){var n=t.callbackNode;kI(t,e);var r=Ml(t,t===mt?wt:0);if(r===0)n!==null&&bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bm(n),e===1)t.tag===0?TC(wg.bind(null,t)):uy(wg.bind(null,t)),EC(function(){!(Ie&6)&&ii()}),n=null;else{switch(Bv(r)){case 1:n=cf;break;case 4:n=Uv;break;case 16:n=Ul;break;case 536870912:n=Mv;break;default:n=Ul}n=lw(n,tw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tw(t,e){if(Tl=-1,kl=0,Ie&6)throw Error(A(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Ml(t,t===mt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tc(t,r);else{e=r;var i=Ie;Ie|=2;var s=rw();(mt!==t||wt!==e)&&(Xn=null,As=Je()+500,vi(t,e));do try{HC();break}catch(a){nw(t,a)}while(1);Sf(),Xl.current=s,Ie=i,nt!==null?e=0:(mt=null,wt=0,e=lt)}if(e!==0){if(e===2&&(i=Bd(t),i!==0&&(r=i,e=fh(t,i))),e===1)throw n=ra,vi(t,0),br(t,r),qt(t,Je()),n;if(e===6)br(t,r);else{if(i=t.current.alternate,!(r&30)&&!VC(i)&&(e=tc(t,r),e===2&&(s=Bd(t),s!==0&&(r=s,e=fh(t,s))),e===1))throw n=ra,vi(t,0),br(t,r),qt(t,Je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:ci(t,$t,Xn);break;case 3:if(br(t,r),(r&130023424)===r&&(e=Mf+500-Je(),10<e)){if(Ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qd(ci.bind(null,t,$t,Xn),e);break}ci(t,$t,Xn);break;case 4:if(br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zC(r/1960))-r,10<r){t.timeoutHandle=qd(ci.bind(null,t,$t,Xn),r);break}ci(t,$t,Xn);break;case 5:ci(t,$t,Xn);break;default:throw Error(A(329))}}}return qt(t,Je()),t.callbackNode===n?tw.bind(null,t):null}function fh(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(vi(t,e).flags|=256),t=tc(t,e),t!==2&&(e=$t,$t=n,e!==null&&ph(e)),t}function ph(t){$t===null?$t=t:$t.push.apply($t,t)}function VC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Uf,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function wg(t){if(Ie&6)throw Error(A(327));_s();var e=Ml(t,0);if(!(e&1))return qt(t,Je()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var r=Bd(t);r!==0&&(e=r,n=fh(t,r))}if(n===1)throw n=ra,vi(t,0),br(t,e),qt(t,Je()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,$t,Xn),qt(t,Je()),null}function Ff(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(As=Je()+500,Lc&&ii())}}function Pi(t){Nr!==null&&Nr.tag===0&&!(Ie&6)&&_s();var e=Ie;Ie|=1;var n=gn.transition,r=Re;try{if(gn.transition=null,Re=1,t)return t()}finally{Re=r,gn.transition=n,Ie=e,!(Ie&6)&&ii()}}function Bf(){Jt=us.current,Me(us)}function vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(yf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:Ps(),Me(Gt),Me(Nt),bf();break;case 5:Rf(r);break;case 4:Ps();break;case 13:Me(We);break;case 19:Me(We);break;case 10:If(r.type._context);break;case 22:case 23:Bf()}n=n.return}if(mt=t,nt=t=$r(t.current,null),wt=Jt=e,lt=0,ra=null,Uf=Bc=bi=0,$t=No=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function nw(t,e){do{var n=nt;try{if(Sf(),Sl.current=Jl,Yl){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(Ri=0,dt=ot=Ge=null,bo=!1,ea=0,Lf.current=null,n===null||n.return===null){lt=1,ra=e,nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ag(o);if(g!==null){g.flags&=-257,lg(g,o,a,s,e),g.mode&1&&og(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){og(s,c,e),jf();break e}l=Error(A(426))}}else if(je&&a.mode&1){var E=ag(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),lg(E,o,a,s,e),wf(Ns(l,a));break e}}s=l=Ns(l,a),lt!==4&&(lt=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=By(s,l,e);eg(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Br===null||!Br.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=jy(s,a,e);eg(s,y);break e}}s=s.return}while(s!==null)}sw(n)}catch(C){e=C,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function rw(){var t=Xl.current;return Xl.current=Jl,t===null?Jl:t}function jf(){(lt===0||lt===3||lt===2)&&(lt=4),mt===null||!(bi&268435455)&&!(Bc&268435455)||br(mt,wt)}function tc(t,e){var n=Ie;Ie|=2;var r=rw();(mt!==t||wt!==e)&&(Xn=null,vi(t,e));do try{GC();break}catch(i){nw(t,i)}while(1);if(Sf(),Ie=n,Xl.current=r,nt!==null)throw Error(A(261));return mt=null,wt=0,lt}function GC(){for(;nt!==null;)iw(nt)}function HC(){for(;nt!==null&&!_I();)iw(nt)}function iw(t){var e=aw(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?sw(t):nt=e,Lf.current=null}function sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,nt=null;return}}else if(n=FC(n,e,Jt),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);lt===0&&(lt=5)}function ci(t,e,n){var r=Re,i=gn.transition;try{gn.transition=null,Re=1,qC(t,e,n,r)}finally{gn.transition=i,Re=r}return null}function qC(t,e,n,r){do _s();while(Nr!==null);if(Ie&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RI(t,s),t===mt&&(nt=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,lw(Ul,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=Re;Re=1;var a=Ie;Ie|=4,Lf.current=null,$C(t,n),Zy(n,t),fC(Gd),Fl=!!Vd,Gd=Vd=null,t.current=n,WC(n),vI(),Ie=a,Re=o,gn.transition=s}else t.current=n;if(ll&&(ll=!1,Nr=t,ec=i),s=t.pendingLanes,s===0&&(Br=null),EI(n.stateNode),qt(t,Je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zl)throw Zl=!1,t=dh,dh=null,t;return ec&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===hh?Ao++:(Ao=0,hh=t):Ao=0,ii(),null}function _s(){if(Nr!==null){var t=Bv(ec),e=gn.transition,n=Re;try{if(gn.transition=null,Re=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,ec=0,Ie&6)throw Error(A(331));var i=Ie;for(Ie|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Po(8,d,s)}var u=d.child;if(u!==null)u.return=d,z=u;else for(;z!==null;){d=z;var h=d.sibling,g=d.return;if(Yy(d),d===c){z=null;break}if(h!==null){h.return=g,z=h;break}z=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,z=p;break e}z=s.return}}var f=t.current;for(z=f;z!==null;){o=z;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,z=m;else e:for(o=f;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(C){Ye(a,a.return,C)}if(a===o){z=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,z=y;break e}z=a.return}}if(Ie=i,ii(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Nc,t)}catch{}r=!0}return r}finally{Re=n,gn.transition=e}}return!1}function Eg(t,e,n){e=Ns(n,e),e=By(t,e,1),t=Fr(t,e,1),e=Ut(),t!==null&&(ka(t,1,e),qt(t,e))}function Ye(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=Ns(n,t),t=jy(e,t,1),e=Fr(e,t,1),t=Ut(),e!==null&&(ka(e,1,t),qt(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(wt&n)===n&&(lt===4||lt===3&&(wt&130023424)===wt&&500>Je()-Mf?vi(t,0):Uf|=n),qt(t,e)}function ow(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=Ut();t=fr(t,e),t!==null&&(ka(t,e,n),qt(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ow(t,n)}function YC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),ow(t,n)}var aw;aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,MC(t,e,n);zt=!!(t.flags&131072)}else zt=!1,je&&e.flags&1048576&&dy(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=ks(e,Nt.current);gs(e,n),i=Nf(null,e,r,t,i,n);var s=Af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tf(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,eh(e,r,t,n),e=rh(null,e,r,!0,s,n)):(e.tag=0,je&&s&&vf(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XC(r),t=Cn(r,t),i){case 0:e=nh(null,e,r,t,n);break e;case 1:e=dg(null,e,r,t,n);break e;case 11:e=cg(null,e,r,t,n);break e;case 14:e=ug(null,e,r,Cn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),nh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),dg(t,e,r,i,n);case 3:e:{if(Vy(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_y(t,e),Kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(A(423)),e),e=hg(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(A(424)),e),e=hg(t,e,r,n,i);break e}else for(Zt=Mr(e.stateNode.containerInfo.firstChild),tn=e,je=!0,kn=null,n=my(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=pr(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return vy(e),t===null&&Jd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hd(r,i)?o=null:s!==null&&Hd(r,s)&&(e.flags|=32),zy(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Jd(e),null;case 13:return Gy(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),cg(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(Hl,r._currentValue),r._currentValue=o,s!==null)if(xn(s.value,o)){if(s.children===i.children&&!Gt.current){e=pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=vn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=Cn(r,e.pendingProps),i=Cn(r.type,i),ug(t,e,r,i,n);case 15:return $y(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),Cl(t,e),e.tag=1,Ht(r)?(t=!0,zl(e)):t=!1,gs(e,n),Fy(e,r,i),eh(e,r,i,n),rh(null,e,r,!0,t,n);case 19:return Hy(t,e,n);case 22:return Wy(t,e,n)}throw Error(A(156,e.tag))};function lw(t,e){return Lv(t,e)}function JC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new JC(t,e,n,r)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XC(t){if(typeof t=="function")return $f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return yi(n.children,i,s,e);case sf:o=8,i|=8;break;case Cd:return t=hn(12,n,e,i|2),t.elementType=Cd,t.lanes=s,t;case Td:return t=hn(13,n,e,i),t.elementType=Td,t.lanes=s,t;case kd:return t=hn(19,n,e,i),t.elementType=kd,t.lanes=s,t;case vv:return jc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case _v:o=9;break e;case of:o=11;break e;case af:o=14;break e;case Tr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yi(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=hn(22,t,r,e),t.elementType=vv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ju(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Xu(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,r,i,s,o,a,l){return t=new ZC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function eT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cw(t){if(!t)return qr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Ht(n))return cy(t,n,e)}return e}function uw(t,e,n,r,i,s,o,a,l){return t=Wf(n,r,!0,t,i,s,o,a,l),t.context=cw(null),n=t.current,r=Ut(),i=jr(n),s=or(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,ka(t,i,r),qt(t,r),t}function $c(t,e,n,r){var i=e.current,s=Ut(),o=jr(i);return n=cw(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(Pn(t,i,o,s),El(t,i,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){Sg(t,e),(t=t.alternate)&&Sg(t,e)}function tT(){return null}var dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Wc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));$c(t,e,null,null)};Wc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){$c(null,t,null,null)}),e[hr]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&Vv(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function nT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=nc(o);s.call(c)}}var o=uw(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[hr]=o.current,Qo(t.nodeType===8?t.parentNode:t),Pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=nc(l);a.call(c)}}var l=Wf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=l,t[hr]=l.current,Qo(t.nodeType===8?t.parentNode:t),Pi(function(){$c(e,l,n,r)}),l}function Vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=nc(o);a.call(l)}}$c(e,o,t,i)}else o=nT(n,e,t,i,r);return nc(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(uf(e,n|1),qt(e,Je()),!(Ie&6)&&(As=Je()+500,ii()))}break;case 13:Pi(function(){var r=fr(t,1);if(r!==null){var i=Ut();Pn(r,t,1,i)}}),zf(t,1)}};df=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Ut();Pn(e,t,134217728,n)}zf(t,134217728)}};$v=function(t){if(t.tag===13){var e=jr(t),n=fr(t,e);if(n!==null){var r=Ut();Pn(n,t,e,r)}zf(t,e)}};Wv=function(){return Re};zv=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};Ud=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error(A(90));wv(r),Pd(r,i)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Pv=Ff;Nv=Pi;var rT={usingClientEntryPoint:!1,Events:[ba,is,Oc,Rv,bv,Ff]},oo={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iT={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Nc=cl.inject(iT),Vn=cl}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(A(200));return eT(t,e,null,n)};an.createRoot=function(t,e){if(!Gf(t))throw Error(A(299));var n=!1,r="",i=dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,r,i),t[hr]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Vf(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Pi(t)};an.hydrate=function(t,e,n){if(!zc(e))throw Error(A(200));return Vc(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uw(e,null,t,1,n??null,i,!1,s,o),t[hr]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wc(e)};an.render=function(t,e,n){if(!zc(e))throw Error(A(200));return Vc(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!zc(t))throw Error(A(40));return t._reactRootContainer?(Pi(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1};an.unstable_batchedUpdates=Ff;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Vc(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hw)}catch(t){console.error(t)}}hw(),hv.exports=an;var sT=hv.exports,Cg=sT;Sd.createRoot=Cg.createRoot,Sd.hydrateRoot=Cg.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Ws(e)},Ws=function(t){return new Error("Firebase Database ("+fw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[d],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new aT;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mw=function(t){const e=pw(t);return Hf.encodeByteArray(e,!0)},rc=function(t){return mw(t).replace(/\./g,"")},ic=function(t){try{return Hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){return ia(void 0,t)}function ia(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cT(n)||(t[n]=ia(t[n],e[n]));return t}function cT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=()=>uT().__FIREBASE_DEFAULTS__,hT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},qf=()=>{try{return dT()||hT()||fT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gw=()=>{var t;return(t=qf())===null||t===void 0?void 0:t.config},pT=t=>{var e;return(e=qf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Qf(){var t;const e=(t=qf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mT(){return typeof self=="object"&&self.self===self}function vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yw(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return fw.NODE_ADMIN===!0}function sc(){try{return typeof indexedDB=="object"}catch{return!1}}function gT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_T,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function vT(t,e){return t.replace(yT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=sa(ic(s[0])||""),n=sa(ic(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},wT=function(t){const e=Ew(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ET=function(t){const e=Ew(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ac(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tg(s)&&Tg(o)){if(!mh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Sw(t,e){const n=new IT(t,e);return n.subscribe.bind(n)}class IT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zu),i.error===void 0&&(i.error=Zu),i.complete===void 0&&(i.complete=Zu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zu(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Kt(t,e){return`${t} failed: ${e} argument `}function ht(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Kt(t,e)+"must be a valid function.")}function kg(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Kt(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RT(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kT(t){return t===ui?void 0:t}function RT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=[];var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const Tw={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},bT=ke.INFO,PT={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},NT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Na{constructor(e){this.name=e,this._logLevel=bT,this._logHandler=NT,this._userLogHandler=null,Yf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}function AT(t){Yf.forEach(e=>{e.setLogLevel(t)})}function xT(t,e){for(const n of Yf){let r=null;e&&e.level&&(r=Tw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ke[s].toLowerCase(),message:a,args:o,type:i.name})}}}const DT=(t,e)=>e.some(n=>t instanceof n);let Rg,bg;function OT(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LT(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,gh=new WeakMap,Rw=new WeakMap,ed=new WeakMap,Jf=new WeakMap;function UT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kw.set(n,t)}).catch(()=>{}),Jf.set(e,t),e}function MT(t){if(gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gh.set(t,e)}let _h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FT(t){_h=t(_h)}function BT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(td(this),e,...n);return Rw.set(r,e.sort?e.sort():[e]),Wr(r)}:LT().includes(t)?function(...e){return t.apply(td(this),e),Wr(kw.get(this))}:function(...e){return Wr(t.apply(td(this),e))}}function jT(t){return typeof t=="function"?BT(t):(t instanceof IDBTransaction&&MT(t),DT(t,OT())?new Proxy(t,_h):t)}function Wr(t){if(t instanceof IDBRequest)return UT(t);if(ed.has(t))return ed.get(t);const e=jT(t);return e!==t&&(ed.set(t,e),Jf.set(e,t)),e}const td=t=>Jf.get(t);function $T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WT=["get","getKey","getAll","getAllKeys","count"],zT=["put","add","delete","clear"],nd=new Map;function Pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return nd.set(e,s),s}FT(t=>({...t,get:(e,n,r)=>Pg(e,n)||t.get(e,n,r),has:(e,n)=>!!Pg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",Ng="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Na("@firebase/app"),HT="@firebase/app-compat",qT="@firebase/analytics-compat",KT="@firebase/analytics",QT="@firebase/app-check-compat",YT="@firebase/app-check",JT="@firebase/auth",XT="@firebase/auth-compat",ZT="@firebase/database",ek="@firebase/database-compat",tk="@firebase/functions",nk="@firebase/functions-compat",rk="@firebase/installations",ik="@firebase/installations-compat",sk="@firebase/messaging",ok="@firebase/messaging-compat",ak="@firebase/performance",lk="@firebase/performance-compat",ck="@firebase/remote-config",uk="@firebase/remote-config-compat",dk="@firebase/storage",hk="@firebase/storage-compat",fk="@firebase/firestore",pk="@firebase/firestore-compat",mk="firebase",gk="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",_k={[vh]:"fire-core",[HT]:"fire-core-compat",[KT]:"fire-analytics",[qT]:"fire-analytics-compat",[YT]:"fire-app-check",[QT]:"fire-app-check-compat",[JT]:"fire-auth",[XT]:"fire-auth-compat",[ZT]:"fire-rtdb",[ek]:"fire-rtdb-compat",[tk]:"fire-fn",[nk]:"fire-fn-compat",[rk]:"fire-iid",[ik]:"fire-iid-compat",[sk]:"fire-fcm",[ok]:"fire-fcm-compat",[ak]:"fire-perf",[lk]:"fire-perf-compat",[ck]:"fire-rc",[uk]:"fire-rc-compat",[dk]:"fire-gcs",[hk]:"fire-gcs-compat",[fk]:"fire-fst",[pk]:"fire-fst-compat","fire-js":"fire-js",[mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,oa=new Map;function lc(t,e){try{t.container.addComponent(e)}catch(n){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bw(t,e){t.container.addOrOverwriteComponent(e)}function mr(t){const e=t.name;if(oa.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,t);for(const n of Qr.values())lc(n,t);return!0}function Pw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vk(t,e,n=Kr){Pw(t,e).clearInstance(n)}function yk(){oa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new Wi("app","Firebase",wk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ek=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=gk;function Xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=gw()),!n)throw ar.create("no-options");const s=Qr.get(i);if(s){if(mh(n,s.options)&&mh(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new Cw(i);for(const l of oa.values())o.addComponent(l);const a=new Ek(n,r,o);return Qr.set(i,a),a}function Sk(t=Kr){const e=Qr.get(t);if(!e&&t===Kr&&gw())return Xf();if(!e)throw ar.create("no-app",{appName:t});return e}function Ik(){return Array.from(Qr.values())}async function Nw(t){const e=t.name;Qr.has(e)&&(Qr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _n(t,e,n){var r;let i=(r=_k[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(a.join(" "));return}mr(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Aw(t,e){if(t!==null&&typeof t!="function")throw ar.create("invalid-log-argument");xT(t,e)}function xw(t){AT(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="firebase-heartbeat-database",Tk=1,aa="firebase-heartbeat-store";let rd=null;function Dw(){return rd||(rd=$T(Ck,Tk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(aa)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),rd}async function kk(t){try{return await(await Dw()).transaction(aa).objectStore(aa).get(Ow(t))}catch(e){if(e instanceof Mt)Ai.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(n.message)}}}async function Ag(t,e){try{const r=(await Dw()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,Ow(t)),await r.done}catch(n){if(n instanceof Mt)Ai.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ai.warn(r.message)}}}function Ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=1024,bk=30*24*60*60*1e3;class Pk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xg(),{heartbeatsToSend:n,unsentEntries:r}=Nk(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xg(){return new Date().toISOString().substring(0,10)}function Nk(t,e=Rk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?gT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){mr(new sn("platform-logger",e=>new VT(e),"PRIVATE")),mr(new sn("heartbeat",e=>new Pk(e),"PRIVATE")),_n(vh,Ng,t),_n(vh,Ng,"esm2017"),_n("fire-js","")}xk("");const Dk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Mt,SDK_VERSION:yr,_DEFAULT_ENTRY_NAME:Kr,_addComponent:lc,_addOrOverwriteComponent:bw,_apps:Qr,_clearComponents:yk,_components:oa,_getProvider:Pw,_registerComponent:mr,_removeServiceInstance:vk,deleteApp:Nw,getApp:Sk,getApps:Ik,initializeApp:Xf,onLog:Aw,registerVersion:_n,setLogLevel:xw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this._delegate=e,this.firebase=n,lc(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Nw(this._delegate)))}_getService(e,n=Kr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Kr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){lc(this._delegate,e)}_addOrOverwriteComponent(e){bw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Og=new Wi("app-compat","Firebase",Lk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:_n,setLogLevel:xw,onLog:Aw,apps:null,SDK_VERSION:yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Dk}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Kr,!rn(e,c))throw Og.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const u=Xf(c,d);if(rn(e,u.name))return e[u.name];const h=new t(u,n);return e[u.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,u=d.replace("-compat","");if(mr(c)&&c.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[u]!="function")throw Og.create("invalid-app-argument",{appName:d});return g[u]()};c.serviceProps!==void 0&&ia(h,c.serviceProps),n[u]=h,t.prototype[u]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[u]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){const t=Uk(Ok);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Lw,extendNamespace:e,createSubscribe:Sw,ErrorFactory:Wi,deepExtend:ia});function e(n){ia(t,n)}return t}const Mk=Lw();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Na("@firebase/app-compat"),Fk="@firebase/app-compat",Bk="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){_n(Fk,Bk,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(mT()&&self.firebase!==void 0){Lg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Lg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Y=Mk;jk();var $k="firebase",Wk="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.registerVersion($k,Wk,"app-compat");function Zf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ao={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Qi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function Uw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vk=zk,Gk=Uw,Mw=new Wi("auth","Firebase",Uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Na("@firebase/auth");function Hk(t,...e){cc.logLevel<=ke.WARN&&cc.warn(`Auth (${yr}): ${t}`,...e)}function bl(t,...e){cc.logLevel<=ke.ERROR&&cc.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,...e){throw ep(t,...e)}function Et(t,...e){return ep(t,...e)}function Fw(t,e,n){const r=Object.assign(Object.assign({},Gk()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function zs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(t,"argument-error"),Fw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mw.create(t,...e)}function x(t,e,...n){if(!t)throw ep(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function Dn(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tp(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tp()||vw()||"connection"in navigator)?navigator.onLine:!0}function Kk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kf()||Gc()}get(){return qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new Aa(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ct(t,e,n,r,i={}){return jw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bw.fetch()($w(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qk),e);try{const i=new Jk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fw(t,d,c);It(t,d)}}catch(i){if(i instanceof Mt)throw i;It(t,"network-request-failed",{message:String(i)})}}async function wr(t,e,n,r,i={}){const s=await ct(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?np(t.config,i):`${t.config.apiScheme}://${i}`}class Jk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),Yk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){return ct(t,"POST","/v1/accounts:delete",e)}async function Zk(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function eR(t,e){return ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tR(t,e=!1){const n=Q(t),r=await n.getIdToken(e),i=qc(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(id(i.auth_time)),issuedAtTime:xo(id(i.iat)),expirationTime:xo(id(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function id(t){return Number(t)*1e3}function qc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ic(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nR(t){const e=qc(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&rR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gr(t,eR(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aR(s.providerUserInfo):[],a=oR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ww(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function sR(t){const e=Q(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aR(t){return t.map(e=>{var{providerId:n}=e,r=Zf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){const n=await jw(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ua;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ww(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tR(this,e)}reload(){return sR(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gr(this,Xk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:T,stsTokenManager:b}=n;x(m&&b,e,"internal-error");const N=ua.fromJSON(this.name,b);x(typeof m=="string",e,"internal-error"),Cr(u,e.name),Cr(h,e.name),x(typeof y=="boolean",e,"internal-error"),x(typeof C=="boolean",e,"internal-error"),Cr(g,e.name),Cr(_,e.name),Cr(v,e.name),Cr(E,e.name),Cr(p,e.name),Cr(f,e.name);const V=new wi({uid:m,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(V.providerData=T.map(W=>Object.assign({},W))),E&&(V._redirectEventId=E),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new ua;i.updateFromServerResponse(n);const s=new wi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ca(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function en(t){Dn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zw.type="NONE";const xs=zw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ei(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ei("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(en(xs),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||en(xs);const o=Ei(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=wi._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qw(e))return"Blackberry";if(Kw(e))return"Webos";if(rp(e))return"Safari";if((e.includes("chrome/")||Gw(e))&&!e.includes("edge/"))return"Chrome";if(xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vw(t=rt()){return/firefox\//i.test(t)}function rp(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gw(t=rt()){return/crios\//i.test(t)}function Hw(t=rt()){return/iemobile/i.test(t)}function xa(t=rt()){return/android/i.test(t)}function qw(t=rt()){return/blackberry/i.test(t)}function Kw(t=rt()){return/webos/i.test(t)}function Vs(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cR(t=rt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function uR(t=rt()){var e;return Vs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dR(){return yw()&&document.documentMode===10}function Qw(t=rt()){return Vs(t)||xa(t)||Kw(t)||qw(t)||/windows phone/i.test(t)||Hw(t)}function hR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e=[]){let n;switch(t){case"Browser":n=Fg(rt());break;case"Worker":n=`${Fg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t){return(await ct(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Jw(t,e){return ct(t,"GET","/v2/recaptchaConfig",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){return t!==void 0&&t.getResponse!==void 0}function jg(t){return t!==void 0&&t.enterprise!==void 0}class Xw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ip(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pR().appendChild(r)})}function Zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mR="https://www.google.com/recaptcha/enterprise.js?render=",gR="recaptcha-enterprise",_R="NO_RECAPTCHA";class eE{constructor(e){this.type=gR,this.auth=Xe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Jw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Xw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(_R)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&jg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ip(mR+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Yr(t,e,n,r=!1){const i=new eE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new vR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Q(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}async initializeRecaptchaConfig(){const e=await Jw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new eE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xe(t){return Q(t)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ER(t,e,n){const r=Xe(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tE(e),{host:o,port:a}=SR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IR()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SR(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wg(o)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e){return ct(t,"POST","/v1/accounts:resetPassword",it(t,e))}async function rE(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function CR(t,e){return ct(t,"POST","/v1/accounts:update",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}async function Kc(t,e){return ct(t,"POST","/v1/accounts:sendOobCode",it(t,e))}async function TR(t,e){return Kc(t,e)}async function od(t,e){return Kc(t,e)}async function ad(t,e){return Kc(t,e)}async function kR(t,e){return Kc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function bR(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Gs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new da(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new da(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yr(e,r,"signInWithPassword");return sd(e,i)}else return sd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yr(e,r,"signInWithPassword");return sd(e,s)}else return Promise.reject(i)});case"emailLink":return RR(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bR(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="http://localhost";class Kn extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}buildRequest(){const e={requestUri:PR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e){return ct(t,"POST","/v1/accounts:sendVerificationCode",it(t,e))}async function AR(t,e){return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e))}async function xR(t,e){const n=await wr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e));if(n.temporaryProof)throw Eo(t,"account-exists-with-different-credential",n);return n}const DR={USER_NOT_FOUND:"user-not-found"};async function OR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,n),DR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Gs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Si({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Si({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return AR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return xR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return OR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Si({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UR(t){const e=ds(wo(t)).link,n=e?ds(wo(e)).deep_link_id:null,r=ds(wo(t)).deep_link_id;return(r?ds(wo(r)).link:null)||r||n||e||t}class Qc{constructor(e){var n,r,i,s,o,a;const l=ds(wo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=LR((i=l.mode)!==null&&i!==void 0?i:null);x(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UR(e);try{return new Qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return da._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qc.parseLink(n);return x(r,"argument-error"),da._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ys extends Hs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),Kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),Kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ys.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ys.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new ys(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Hs{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Hs{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="http://localhost";class Ds extends Gs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ds(r,s)}static _create(e,n){return new Ds(e,n)}buildRequest(){return{requestUri:MR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="saml.";class uc extends Er{constructor(e){x(e.startsWith(FR),"argument-error"),super(e)}static credentialFromResult(e){return uc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return uc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ds.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ds._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Hs{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,e){return wr(t,"POST","/v1/accounts:signUp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wi._fromIdTokenResponse(e,r,i),o=zg(r);return new wn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zg(r);return new wn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t){var e;const n=Xe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Pl(n,{returnSecureToken:!0}),i=await wn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dc(e,n,r,i)}}function iE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e){const n=Q(t);await Yc(!0,n,e);const{providerUserInfo:r}=await Zk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=sE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function sp(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",r)}async function Yc(t,e,n){await ca(e);const r=sE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await gr(t,iE(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=qc(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),wn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e,n=!1){const r="signIn",i=await iE(t,r,e),s=await wn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jc(t,e){return aE(Xe(t),e)}async function lE(t,e){const n=Q(t);return await Yc(!1,n,e.providerId),sp(n,e)}async function cE(t,e){return oE(Q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return wr(t,"POST","/v1/accounts:signInWithCustomToken",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e){const n=Xe(t),r=await $R(n,{token:e,returnSecureToken:!0}),i=await wn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?op._fromServerResponse(e,n):"totpInfo"in n?ap._fromServerResponse(e,n):It(e,"internal-error")}}class op extends Da{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new op(n)}}class ap extends Da{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new ap(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(t,e,n){var r;const i=Xe(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Yr(i,s,"getOobCode",!0);n&&ws(i,o,n),await od(i,o)}else n&&ws(i,s,n),await od(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Yr(i,s,"getOobCode",!0);n&&ws(i,a,n),await od(i,a)}else return Promise.reject(o)})}async function VR(t,e,n){await nE(Q(t),{oobCode:e,newPassword:n})}async function GR(t,e){await CR(Q(t),{oobCode:e})}async function uE(t,e){const n=Q(t),r=await nE(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Da._fromServerResponse(Xe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function HR(t,e){const{data:n}=await uE(Q(t),e);return n.email}async function qR(t,e,n){var r;const i=Xe(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Yr(i,s,"signUpPassword");o=Pl(i,c)}else o=Pl(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Yr(i,s,"signUpPassword");return Pl(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await wn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function KR(t,e,n){return Jc(Q(t),si.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e,n){var r;const i=Xe(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){x(l.handleCodeInApp,i,"argument-error"),l&&ws(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Yr(i,s,"getOobCode",!0);o(a,n),await ad(i,a)}else o(s,n),await ad(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Yr(i,s,"getOobCode",!0);o(l,n),await ad(i,l)}else return Promise.reject(a)})}function YR(t,e){const n=Qc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function JR(t,e,n){const r=Q(t),i=si.credentialWithLink(e,n||la());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Jc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e){return ct(t,"POST","/v1/accounts:createAuthUri",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){const n=tp()?la():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await XR(Q(t),r);return i||[]}async function eb(t,e){const n=Q(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ws(n.auth,i,e);const{email:s}=await TR(n.auth,i);s!==t.email&&await t.reload()}async function tb(t,e,n){const r=Q(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ws(r.auth,s,n);const{email:o}=await kR(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e){return ct(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Q(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,nb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ib(t,e){return dE(Q(t),e,null)}function sb(t,e){return dE(Q(t),null,e)}async function dE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await gr(t,rE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=qc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Es(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new ab(s,i);case"github.com":return new lb(s,i);case"google.com":return new cb(s,i);case"twitter.com":return new ub(s,i,t.screenName||null);case"custom":case"anonymous":return new Es(s,null);default:return new Es(s,r,i)}}class Es{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class hE extends Es{constructor(e,n,r,i){super(e,n,r),this.username=i}}class ab extends Es{constructor(e,n){super(e,"facebook.com",n)}}class lb extends hE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class cb extends Es{constructor(e,n){super(e,"google.com",n)}}class ub extends hE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function db(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ob(n)}class mi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Xe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Da._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=mi._fromMfaPendingCredential(i.mfaPendingCredential);return new lp(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await wn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return x(n.user,r,"internal-error"),wn._forOperation(n.user,n.operationType,c);default:It(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function hb(t,e){var n;const r=Q(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),lp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:start",it(t,e))}function pb(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:finalize",it(t,e))}function mb(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:withdraw",it(t,e))}class cp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Da._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new cp(e)}async getSession(){return mi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await gr(this.user,mb(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ld=new WeakMap;function gb(t){const e=Q(t);return ld.has(e)||ld.set(e,cp._fromUser(e)),ld.get(e)}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){const t=rt();return rp(t)||Vs(t)}const vb=1e3,yb=10;class pE extends fE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_b()&&hR(),this.fallbackToPolling=Qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pE.type="LOCAL";const up=pE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends fE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mE.type="SESSION";const xi=mE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await wb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Oa("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Sb(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Ib(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="firebaseLocalStorageDb",kb=1,fc="firebaseLocalStorage",_E="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function Rb(){const t=indexedDB.deleteDatabase(gE);return new La(t).toPromise()}function yh(){const t=indexedDB.open(gE,kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:_E})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await Rb(),e(await yh()))})})}async function Vg(t,e,n){const r=Zc(t,!0).put({[_E]:e,value:n});return new La(r).toPromise()}async function bb(t,e){const n=Zc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function Gg(t,e){const n=Zc(t,!0).delete(e);return new La(n).toPromise()}const Pb=800,Nb=3;class vE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ib(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await Vg(e,hc,"1"),await Gg(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zc(i,!1).getAll();return new La(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vE.type="LOCAL";const ha=vE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:start",it(t,e))}function xb(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:finalize",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=500,Ob=6e4,ul=1e12;class Lb{constructor(e){this.auth=e,this.counter=ul,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Ub(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ul;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ul;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ul;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Ub{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Mb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Ob)},Db))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Mb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=Zw("rcb"),Fb=new Aa(3e4,6e4),Bb="https://www.google.com/recaptcha/api.js?";class jb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x($b(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Bg(tt().grecaptcha)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(Et(e,"network-request-failed"))},Fb.get());tt()[cd]=()=>{tt().clearTimeout(s),delete tt()[cd];const a=tt().grecaptcha;if(!a||!Bg(a)){i(Et(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const u=l(c,d);return this.counter++,u},this.hostLanguage=n,r(a)};const o=`${Bb}?${zi({onload:cd,render:"explicit",hl:n})}`;ip(o).catch(()=>{clearTimeout(s),i(Et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=tt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $b(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Wb{async load(e){return new Lb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="recaptcha",zb={theme:"light",type:"image"};let Vb=class{constructor(e,n=Object.assign({},zb),r){this.parameters=n,this.type=yE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(r),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Wb:new jb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(tp()&&!dp(),this.auth,"internal-error"),await Gb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fR(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Gb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Si._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Hb(t,e,n){const r=Xe(t),i=await eu(r,e,Q(n));return new hp(i,s=>Jc(r,s))}async function qb(t,e,n){const r=Q(t);await Yc(!1,r,"phone");const i=await eu(r.auth,e,Q(n));return new hp(i,s=>lE(r,s))}async function Kb(t,e,n){const r=Q(t),i=await eu(r.auth,e,Q(n));return new hp(i,s=>cE(r,s))}async function eu(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===yE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await fb(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await Ab(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await NR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Qb(t,e){await sp(Q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di=class Nl{constructor(e){this.providerId=Nl.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,n){return eu(this.auth,e,Q(n))}static credential(e,n){return Si._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Nl.credentialFromTaggedObject(n)}static credentialFromError(e){return Nl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Si._fromTokenResponse(n,r):null}};Di.PROVIDER_ID="phone";Di.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){return e?en(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yb(t){return aE(t.auth,new fp(t),t.bypassAuthState)}function Jb(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),oE(n,new fp(t),t.bypassAuthState)}async function Xb(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),sp(n,new fp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yb;case"linkViaPopup":case"linkViaRedirect":return Xb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:It(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new Aa(2e3,1e4);async function eP(t,e,n){const r=Xe(t);zs(t,e,Er);const i=Vi(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}async function tP(t,e,n){const r=Q(t);zs(r.auth,e,Er);const i=Vi(r.auth,n);return new rr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function nP(t,e,n){const r=Q(t);zs(r.auth,e,Er);const i=Vi(r.auth,n);return new rr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class rr extends wE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zb.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="pendingRedirect",Do=new Map;class iP extends wE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await sP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sP(t,e){const n=SE(e),r=EE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function pp(t,e){return EE(t)._set(SE(e),"true")}function oP(){Do.clear()}function mp(t,e){Do.set(t._key(),e)}function EE(t){return en(t._redirectPersistence)}function SE(t){return Ei(rP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t,e,n){return lP(t,e,n)}async function lP(t,e,n){const r=Xe(t);zs(t,e,Er),await r._initializationPromise;const i=Vi(r,n);return await pp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function cP(t,e,n){return uP(t,e,n)}async function uP(t,e,n){const r=Q(t);zs(r.auth,e,Er),await r.auth._initializationPromise;const i=Vi(r.auth,n);await pp(i,r.auth);const s=await IE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function dP(t,e,n){return hP(t,e,n)}async function hP(t,e,n){const r=Q(t);zs(r.auth,e,Er),await r.auth._initializationPromise;const i=Vi(r.auth,n);await Yc(!1,r,e.providerId),await pp(i,r.auth);const s=await IE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function fP(t,e){return await Xe(t)._initializationPromise,tu(t,e,!1)}async function tu(t,e,n=!1){const r=Xe(t),i=Vi(r,e),o=await new iP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function IE(t){const e=Oa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=10*60*1e3;class CE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e={}){return ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_P=/^https?/;async function vP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kE(t);for(const n of e)try{if(yP(n))return}catch{}It(t,"unauthorized-domain")}function yP(t){const e=la(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_P.test(n))return!1;if(gP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Aa(3e4,6e4);function qg(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EP(t){return new Promise((e,n)=>{var r,i,s;function o(){qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qg(),n(Et(t,"network-request-failed"))},timeout:wP.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=Zw("iframefcb");return tt()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},ip(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Al=null,e})}let Al=null;function SP(t){return Al=Al||EP(t),Al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new Aa(5e3,15e3),CP="__/auth/iframe",TP="emulator/auth/iframe",kP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bP(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?np(e,TP):`https://${t.config.authDomain}/${CP}`,r={apiKey:e.apiKey,appName:t.name,v:yr},i=RP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zi(r).slice(1)}`}async function PP(t){const e=await SP(t),n=tt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:bP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},IP.get());function l(){tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AP=500,xP=600,DP="_blank",OP="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LP(t,e,n,r=AP,i=xP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(a=Gw(c)?DP:n),Vw(c)&&(e=e||OP,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(uR(c)&&a!=="_self")return UP(e||"",a),new Kg(null);const u=window.open(e||"",a,d);x(u,t,"popup-blocked");try{u.focus()}catch{}return new Kg(u)}function UP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="__/auth/handler",FP="emulator/auth/handler",BP=encodeURIComponent("fac");async function wh(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:i};if(e instanceof Er){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Hs){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${BP}=${encodeURIComponent(l)}`:"";return`${jP(t)}?${zi(a).slice(1)}${c}`}function jP({config:t}){return t.emulator?np(t,FP):`https://${t.authDomain}/${MP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="webStorageSupport";class $P{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=tu,this._overrideRedirectResult=mp}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wh(e,n,r,la(),i);return LP(e,o,Oa())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wh(e,n,r,la(),i);return Sb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PP(e),r=new CE(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ud,{type:ud},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ud];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qw()||rp()||Vs()}}const WP=$P;class zP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return zn("unexpected MultiFactorSessionType")}}}class gp extends zP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gp(e)}_finalizeEnroll(e,n,r){return pb(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return xb(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class RE{constructor(){}static assertion(e){return gp._fromCredential(e)}}RE.FACTOR_ID="phone";var Qg="@firebase/auth",Yg="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HP(t){mr(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yw(t)},c=new yR(r,i,s,l);return wR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new sn("auth-internal",e=>{const n=Xe(e.getProvider("auth").getImmediate());return(r=>new VP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Qg,Yg,GP(t)),_n(Qg,Yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=5*60;pT("authIdTokenMaxAge");HP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=2e3;async function QP(t,e,n){var r;const{BuildInfo:i}=Oi();Dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await eN(e.sessionId),o={};return Vs()?o.ibi=i.packageName:xa()?o.apn=i.packageName:It(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function YP(t){const{BuildInfo:e}=Oi(),n={};Vs()?n.iosBundleId=e.packageName:xa()?n.androidPackageName=e.packageName:It(t,"operation-not-supported-in-this-environment"),await kE(t,n)}function JP(t){const{cordova:e}=Oi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,cR()?"_blank":"_system","location=yes"),n(i)})})}async function XP(t,e,n){const{cordova:r}=Oi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var u;s();const h=(u=r.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Et(t,"redirect-cancelled-by-user"))},KP))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),xa()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ZP(t){var e,n,r,i,s,o,a,l,c,d;const u=Oi();x(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=u==null?void 0:u.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=u==null?void 0:u.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((d=(c=u==null?void 0:u.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function eN(t){const e=tN(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function tN(t){if(Dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=20;class rN extends CE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function iN(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:aN(),postBody:null,tenantId:t.tenantId,error:Et(t,"no-auth-event")}}function sN(t,e){return Eh()._set(Sh(t),e)}async function Jg(t){const e=await Eh()._get(Sh(t));return e&&await Eh()._remove(Sh(t)),e}function oN(t,e){var n,r;const i=cN(e);if(i.includes("/__/auth/callback")){const s=xl(i),o=s.firebaseError?lN(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Et(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function aN(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<nN;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Eh(){return en(up)}function Sh(t){return Ei("authEvent",t.config.apiKey,t.name)}function lN(t){try{return JSON.parse(t)}catch{return null}}function cN(t){const e=xl(t),n=e.link?decodeURIComponent(e.link):void 0,r=xl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return xl(i).link||i||r||n||t}function xl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ds(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=500;class dN{constructor(){this._redirectPersistence=xi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=tu,this._overrideRedirectResult=mp}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new rN(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){It(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){ZP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),oP(),await this._originValidation(e);const o=iN(e,r,i);await sN(e,o);const a=await QP(e,o,n),l=await JP(a);return XP(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Oi(),o=setTimeout(async()=>{await Jg(e),n.onEvent(Xg())},uN),a=async d=>{clearTimeout(o);const u=await Jg(e);let h=null;u&&(d!=null&&d.url)&&(h=oN(u,d.url)),n.onEvent(h||Xg())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Oi().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(u){console.error(u)}}}}const hN=dN;function Xg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Et("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t,e){Xe(t)._logFramework(e)}var pN="@firebase/auth-compat",mN="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=1e3;function Oo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function _N(){return Oo()==="http:"||Oo()==="https:"}function bE(t=rt()){return!!((Oo()==="file:"||Oo()==="ionic:"||Oo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function vN(){return Gc()||Qf()}function yN(){return yw()&&(document==null?void 0:document.documentMode)===11}function wN(t=rt()){return/Edge\/\d+/.test(t)}function EN(t=rt()){return yN()||wN(t)}function PE(){try{const t=self.localStorage,e=Oa();if(t)return t.setItem(e,"1"),t.removeItem(e),EN()?sc():!0}catch{return _p()&&sc()}return!1}function _p(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function dd(){return(_N()||vw()||bE())&&!vN()&&PE()&&!_p()}function NE(){return bE()&&typeof document<"u"}async function SN(){return NE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},gN);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function IN(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},lo=x,AE="persistence";function CN(t,e){if(lo(Object.values(Xt).includes(e),t,"invalid-persistence-type"),Gc()){lo(e!==Xt.SESSION,t,"unsupported-persistence-type");return}if(Qf()){lo(e===Xt.NONE,t,"unsupported-persistence-type");return}if(_p()){lo(e===Xt.NONE||e===Xt.LOCAL&&sc(),t,"unsupported-persistence-type");return}lo(e===Xt.NONE||PE(),t,"unsupported-persistence-type")}async function Ih(t){await t._initializationPromise;const e=xE(),n=Ei(AE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function TN(t,e){const n=xE();if(!n)return[];const r=Ei(AE,t,e);switch(n.getItem(r)){case Xt.NONE:return[xs];case Xt.LOCAL:return[ha,xi];case Xt.SESSION:return[xi];default:return[]}}function xE(){var t;try{return((t=IN())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=x;class Ar{constructor(){this.browserResolver=en(WP),this.cordovaResolver=en(hN),this.underlyingResolver=null,this._redirectPersistence=xi,this._completeRedirectFn=tu,this._overrideRedirectResult=mp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return NE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return kN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await SN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){return t.unwrap()}function RN(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){return OE(t)}function PN(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new NN(t,hb(t,e))}else if(r){const i=OE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function OE(t){const{_tokenResponse:e}=t instanceof Mt?t.customData:t;if(!e)return null;if(!(t instanceof Mt)&&"temporaryProof"in e&&"phoneNumber"in e)return Di.credentialFromResult(t);const n=e.providerId;if(!n||n===ao.PASSWORD)return null;let r;switch(n){case ao.GOOGLE:r=Bn;break;case ao.FACEBOOK:r=Fn;break;case ao.GITHUB:r=jn;break;case ao.TWITTER:r=$n;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ds._create(n,a):Kn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new ys(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Mt?r.credentialFromError(t):r.credentialFromResult(t)}function jt(t,e){return e.catch(n=>{throw n instanceof Mt&&PN(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:bN(n),additionalUserInfo:db(n),user:ir.getOrCreate(i)}})}async function Ch(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>jt(t,n.confirm(r))}}class NN{constructor(e,n){this.resolver=n,this.auth=RN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(DE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._delegate=e,this.multiFactor=gb(e)}static getOrCreate(e){return ir.USER_MAP.has(e)||ir.USER_MAP.set(e,new ir(e)),ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,lE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ch(this.auth,qb(this._delegate,e,n))}async linkWithPopup(e){return jt(this.auth,nP(this._delegate,e,Ar))}async linkWithRedirect(e){return await Ih(Xe(this.auth)),dP(this._delegate,e,Ar)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,cE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ch(this.auth,Kb(this._delegate,e,n))}reauthenticateWithPopup(e){return jt(this.auth,tP(this._delegate,e,Ar))}async reauthenticateWithRedirect(e){return await Ih(Xe(this.auth)),cP(this._delegate,e,Ar)}sendEmailVerification(e){return eb(this._delegate,e)}async unlink(e){return await jR(this._delegate,e),this}updateEmail(e){return ib(this._delegate,e)}updatePassword(e){return sb(this._delegate,e)}updatePhoneNumber(e){return Qb(this._delegate,e)}updateProfile(e){return rb(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return tb(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ir.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=x;class Th{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;co(r,"invalid-api-key",{appName:e.name}),co(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ar:void 0;this._delegate=n.initialize({options:{persistence:AN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Vk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ER(this._delegate,e,n)}applyActionCode(e){return GR(this._delegate,e)}checkActionCode(e){return uE(this._delegate,e)}confirmPasswordReset(e,n){return VR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return jt(this._delegate,qR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ZR(this._delegate,e)}isSignInWithEmailLink(e){return YR(this._delegate,e)}async getRedirectResult(){co(dd(),this._delegate,"operation-not-supported-in-this-environment");const e=await fP(this._delegate,Ar);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){fN(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Zg(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Zg(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return QR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return zR(this._delegate,e,n||void 0)}async setPersistence(e){CN(this._delegate,e);let n;switch(e){case Xt.SESSION:n=xi;break;case Xt.LOCAL:n=await en(ha)._isAvailable()?ha:up;break;case Xt.NONE:n=xs;break;default:return It("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,BR(this._delegate))}signInWithCredential(e){return jt(this._delegate,Jc(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,WR(this._delegate,e))}signInWithEmailAndPassword(e,n){return jt(this._delegate,KR(this._delegate,e,n))}signInWithEmailLink(e,n){return jt(this._delegate,JR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ch(this._delegate,Hb(this._delegate,e,n))}async signInWithPopup(e){return co(dd(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,eP(this._delegate,e,Ar))}async signInWithRedirect(e){return co(dd(),this._delegate,"operation-not-supported-in-this-environment"),await Ih(this._delegate),aP(this._delegate,e,Ar)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return HR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Th.Persistence=Xt;function Zg(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ir.getOrCreate(o)),error:e,complete:n}}function AN(t,e){const n=TN(t,e);if(typeof self<"u"&&!n.includes(ha)&&n.push(ha),typeof window<"u")for(const r of[up,xi])n.includes(r)||n.push(r);return n.includes(xs)||n.push(xs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.providerId="phone",this._delegate=new Di(DE(Y.auth()))}static credential(e,n){return Di.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}vp.PHONE_SIGN_IN_METHOD=Di.PHONE_SIGN_IN_METHOD;vp.PROVIDER_ID=Di.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=x;class DN{constructor(e,n,r=Y.app()){var i;xN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Vb(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="auth-compat";function LN(t){t.INTERNAL.registerComponent(new sn(ON,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Th(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Qi.EMAIL_SIGNIN,PASSWORD_RESET:Qi.PASSWORD_RESET,RECOVER_EMAIL:Qi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Qi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Qi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Qi.VERIFY_EMAIL}},EmailAuthProvider:si,FacebookAuthProvider:Fn,GithubAuthProvider:jn,GoogleAuthProvider:Bn,OAuthProvider:ys,SAMLAuthProvider:uc,PhoneAuthProvider:vp,PhoneMultiFactorGenerator:RE,RecaptchaVerifier:DN,TwitterAuthProvider:$n,Auth:Th,AuthCredential:Gs,Error:Mt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(pN,mN)}LN(Y);const e_="@firebase/database",t_="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LE="";function UE(t){LE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UN(e)}}catch{}return new MN},gi=ME("localStorage"),kh=ME("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Na("@firebase/database"),FE=function(){let t=1;return function(){return t++}}(),BE=function(t){const e=TT(t),n=new ST;n.update(e);const r=n.digest();return Hf.encodeByteArray(r)},Ua=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ua.apply(null,r):typeof r=="object"?e+=at(r):e+=r,e+=" "}return e};let Ii=null,n_=!0;const jE=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ss.logLevel=ke.VERBOSE,Ii=Ss.log.bind(Ss),e&&kh.set("logging_enabled",!0)):typeof t=="function"?Ii=t:(Ii=null,kh.remove("logging_enabled"))},pt=function(...t){if(n_===!0&&(n_=!1,Ii===null&&kh.get("logging_enabled")===!0&&jE(!0)),Ii){const e=Ua.apply(null,t);Ii(e)}},Ma=function(t){return function(...e){pt(t,...e)}},Rh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ua(...t);Ss.error(e)},Qn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ua(...t)}`;throw Ss.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+Ua(...t);Ss.warn(e)},FN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jr="[MIN_NAME]",_r="[MAX_NAME]",Gi=function(t,e){if(t===e)return 0;if(t===Jr||e===_r)return-1;if(e===Jr||t===_r)return 1;{const n=r_(t),r=r_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},jN=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},yp=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=at(e[r]),n+=":",n+=yp(t[e[r]]);return n+="}",n},$E=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const WE=function(t){D(!nu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},$N=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const VN=new RegExp("^-?(0*)\\d{1,10}$"),GN=-2147483648,HN=2147483647,r_=function(t){if(VN.test(t)){const e=Number(t);if(e>=GN&&e<=HN)return e}return null},qs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},qN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="5",zE="v",VE="s",GE="r",HE="f",qE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,KE="ls",QE="p",bh="ac",YE="websocket",JE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function YN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ZE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===YE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);YN(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={},fd={};function Ep(t){const e=t.toString();return hd[e]||(hd[e]=new JN),hd[e]}function XN(t,e){const n=t.toString();return fd[n]||(fd[n]=e()),fd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="start",e1="close",t1="pLPCommand",n1="pRTLPCB",e0="id",t0="pw",n0="ser",r1="cb",i1="seg",s1="ts",o1="d",a1="dframe",r0=1870,i0=30,l1=r0-i0,c1=25e3,u1=3e4;class xr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ma(e),this.stats_=Ep(n),this.urlFn=l=>(this.appCheckToken&&(l[bh]=this.appCheckToken),ZE(n,JE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u1)),BN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sp((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===i_)this.id=a,this.password=l;else if(o===e1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[i_]="t",r[n0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[r1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zE]=wp,this.transportSessionId&&(r[VE]=this.transportSessionId),this.lastSessionId&&(r[KE]=this.lastSessionId),this.applicationId&&(r[QE]=this.applicationId),this.appCheckToken&&(r[bh]=this.appCheckToken),typeof location<"u"&&location.hostname&&qE.test(location.hostname)&&(r[GE]=HE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xr.forceAllow_=!0}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){return xr.forceAllow_?!0:!xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$N()&&!WN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mw(n),i=$E(r,l1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[a1]="t",r[e0]=e,r[t0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FE(),window[t1+this.uniqueCallbackIdentifier]=e,window[n1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[e0]=this.myID,e[t0]=this.myPW,e[n0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+i0+r.length<=r0;){const o=this.pendingSegs.shift();r=r+"&"+i1+i+"="+o.seg+"&"+s1+i+"="+o.ts+"&"+o1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(c1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=16384,h1=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class dn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ma(this.connId),this.stats_=Ep(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[zE]=wp,typeof location<"u"&&location.hostname&&qE.test(location.hostname)&&(o[GE]=HE),n&&(o[VE]=n),r&&(o[KE]=r),i&&(o[bh]=i),s&&(o[QE]=s),ZE(e,YE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gi.set("previous_websocket_failure",!0);try{let r;ww(),this.mySock=new pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pc!==null&&!dn.forceDisallow_}static previouslyFailed(){return gi.isInMemoryStorage||gi.get("previous_websocket_failure")===!0}markConnectionHealthy(){gi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$E(n,d1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xr,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of Os.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=6e4,p1=5e3,m1=10*1024,g1=100*1024,pd="t",s_="d",_1="s",o_="r",v1="e",a_="o",l_="a",c_="n",u_="p",y1="h";class w1{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ma("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pd in e){const n=e[pd];n===l_?this.upgradeIfSecondaryHealthy_():n===o_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(pd,e);if(s_ in e){const r=e[s_];if(n===y1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_1?this.onConnectionShutdown_(r):n===o_?this.onReset_(r):n===v1?Rh("Server Error: "+r):n===a_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wp!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(f1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends o0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=32,h_=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new Te("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xr(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function Ip(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function E1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function a0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function $e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function fe(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=he(t),r=he(e);if(n===null)return e;if(n===r)return Lt(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function S1(t,e){const n=fa(t,0),r=fa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Gi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Cp(t,e){if(Xr(t)!==Xr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Xr(t)>Xr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class I1{constructor(e,n){this.errorPrefix_=n,this.parts_=fa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Hc(this.parts_[r]);l0(this)}}function C1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hc(e),l0(t)}function T1(t){const e=t.parts_.pop();t.byteLength_-=Hc(e),t.parts_.length>0&&(t.byteLength_-=1)}function l0(t){if(t.byteLength_>h_)throw new Error(t.errorPrefix_+"has a key path longer than "+h_+" bytes ("+t.byteLength_+").");if(t.parts_.length>d_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d_+") or object contains a cycle "+di(t))}function di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends o0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Tp}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1e3,k1=60*5*1e3,f_=30*1e3,R1=1.3,b1=3e4,P1="server_kill",p_=3;class cr extends s0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cr.nextPersistentConnectionId_++,this.log_=Ma("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=k1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ww())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(at(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Wt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;cr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const r=Ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ET(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=f_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rh("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>b1&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*R1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new w1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Pt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(P1)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Pt(u),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oc(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p_&&(this.reconnectDelay_=f_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+LE.replace(/\./g,"-")]=1,Kf()?e["framework.cordova"]=1:Gc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return oc(this.interruptReasons_)&&e}}cr.nextPersistentConnectionId_=0;cr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new pe(Jr,e),i=new pe(Jr,n);return this.compare(r,i)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class c0 extends ru{static get __EMPTY_NODE(){return dl}static set __EMPTY_NODE(e){dl=e}compare(e,n){return Gi(e.name,n.name)}isDefinedOn(e){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(_r,dl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,dl)}toString(){return".key"}}const Hn=new c0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??Vt.EMPTY_NODE,this.right=s??Vt.EMPTY_NODE}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Vt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class N1{copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,n=Vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hl(this.root_,null,this.comparator_,!0,e)}}Vt.EMPTY_NODE=new N1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){return Gi(t.name,e.name)}function kp(t,e){return Gi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;function x1(t){Ph=t}const u0=function(t){return typeof t=="number"?"number:"+WE(t):"string:"+t},d0=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else D(t===Ph||t.isEmpty(),"priority of unexpected type.");D(t===Ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_;class ut{constructor(e,n=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),d0(this.priorityNode_)}static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:he(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=he(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+u0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=WE(this.value_):e+=this.value_,this.lazyHash_=BE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ut.VALUE_TYPE_ORDER.indexOf(n),s=ut.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0,f0;function D1(t){h0=t}function O1(t){f0=t}class L1 extends ru{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Gi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(_r,new ut("[PRIORITY-POST]",f0))}makePost(e,n){const r=h0(e);return new pe(n,new ut("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new L1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=Math.log(2);class M1{constructor(e){const n=s=>parseInt(Math.log(s)/U1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new ft(h,u.node,ft.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),v=i(g+1,c);return u=t[g],h=n?n(u):u,new ft(h,u.node,ft.BLACK,_,v)}},s=function(l){let c=null,d=null,u=t.length;const h=function(_,v){const E=u-_,p=u;u-=_;const f=i(E+1,p),m=t[E],y=n?n(m):m;g(new ft(y,m.node,v,null,f))},g=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?h(E,ft.BLACK):(h(E,ft.BLACK),h(E,ft.RED))}return d},o=new M1(t.length),a=s(o);return new Vt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;const Yi={};class sr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Yi&&De,"ChildrenNode.ts has not been loaded"),md=md||new sr({".priority":Yi},{".priority":De}),md}get(e){const n=Ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Vt?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(pe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=gc(r,e.getCompare()):a=Yi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new sr(d,c)}addToIndexes(e,n){const r=ac(this.indexes_,(i,s)=>{const o=Ni(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gc(a,o.getCompare())}else return Yi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new sr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ac(this.indexes_,i=>{if(i===Yi)return i;{const s=n.get(e.name);return s?i.remove(new pe(e.name,s)):i}});return new sr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class te{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&d0(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new te(new Vt(kp),null,sr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new pe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new te(i,o,s)}}updateChild(e,n){const r=he(e);if(r===null)return n;{D(he(e)!==".priority"||Xr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+u0(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":BE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new pe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fa?-1:0}withIndex(e){if(e===Hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hn?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class F1 extends te{constructor(){super(new Vt(kp),te.EMPTY_NODE,sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Fa=new F1;Object.defineProperties(pe,{MIN:{value:new pe(Jr,te.EMPTY_NODE)},MAX:{value:new pe(_r,Fa)}});c0.__EMPTY_NODE=te.EMPTY_NODE;ut.__childrenNodeConstructor=te;x1(Fa);O1(Fa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=!0;function ze(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ut(n,ze(e))}if(!(t instanceof Array)&&B1){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return te.EMPTY_NODE;const s=gc(n,A1,o=>o.name,kp);if(r){const o=gc(n,De.getCompare());return new te(s,ze(e),new sr({".priority":o},{".priority":De}))}else return new te(s,ze(e),sr.Default)}else{let n=te.EMPTY_NODE;return gt(t,(r,i)=>{if(rn(t,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(e))}}D1(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends ru{constructor(e){super(),this.indexPath_=e,D(!fe(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Gi(e.name,n.name):s}makePost(e,n){const r=ze(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Fa);return new pe(_r,e)}toString(){return fa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1 extends ru{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Gi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const r=ze(e);return new pe(n,r)}toString(){return".value"}}const bp=new j1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ma(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(pa(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,r)):o.trackChildChange(ma(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(pa(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ma(i,s,o))}else r.trackChildChange(Ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.indexedFilter_=new Pp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ga.getStartPost_(e),this.endPost_=ga.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new pe(n,r))||(r=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new pe(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ga(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new pe(n,r))||(r=te.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new pe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ma(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(pa(n,u));const v=a.updateImmediateChild(n,te.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ls(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(pa(c.name,c.node)),s.trackChildChange(Ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new iu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function z1(t){return t.loadsAllData()?new Pp(t.getIndex()):t.hasLimit()?new W1(t):new ga(t)}function V1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function G1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Nh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function H1(t,e,n){let r;return t.index_===Hn||n?r=Nh(t,e,n):r=Nh(t,e,_r),r.startAfterSet_=!0,r}function Ah(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function q1(t,e,n){let r;return t.index_===Hn||n?r=Ah(t,e,n):r=Ah(t,e,Jr),r.endBeforeSet_=!0,r}function su(t,e){const n=t.copy();return n.index_=e,n}function g_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===bp?n="$value":t.index_===Hn?n="$key":(D(t.index_ instanceof Rp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=at(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+at(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=at(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function __(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends s0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ma("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_c.getListenId_(e,r),a={};this.listens_[o]=a;const l=g_(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Ni(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=_c.getListenId_(e,n);delete this.listens_[r]}get(e){const n=g_(e._queryParams),r=e._path.toString(),i=new Wt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sa(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return{value:null,children:new Map}}function Ks(t,e,n){if(fe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,vc());const i=t.children.get(r);e=Pe(e),Ks(i,e,n)}}function xh(t,e){if(fe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(De,(r,i)=>{Ks(t,new Te(r),i)}),xh(t,e)}}else if(t.children.size>0){const n=he(e);return e=Pe(e),t.children.has(n)&&xh(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Dh(t,e,n){t.value!==null?n(e,t.value):Q1(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);Dh(i,s,n)})}function Q1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=10*1e3,J1=30*1e3,X1=5*60*1e3;class Z1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y1(e);const r=v_+(J1-v_)*Math.random();Lo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&rn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*X1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function Np(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ap(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=Np()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new yc(Ce(),n,this.revert)}}else return D(he(this.path)===e,"operationForChild called for unrelated child."),new yc(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.source=e,this.path=n,this.type=Rn.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new _a(this.source,Ce()):new _a(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return fe(this.path)?new Li(this.source,Ce(),this.snap.getImmediateChild(e)):new Li(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(fe(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Li(this.source,Ce(),n.value):new Us(this.source,Ce(),n)}else return D(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($1(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,r,n),po(t,i,"child_added",e,r,n),po(t,i,"child_moved",s,r,n),po(t,i,"child_changed",e,r,n),po(t,i,"value",e,r,n),i}function po(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>rA(t,a,l)),o.forEach(a=>{const l=nA(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function nA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rA(t,e,n){if(e.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){return{eventCache:t,serverCache:e}}function Uo(t,e,n,r){return ou(new Zr(e,n,r),t.serverCache)}function m0(t,e,n,r){return ou(t.eventCache,new Zr(e,n,r))}function wc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ui(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;const iA=()=>(gd||(gd=new Vt(jN)),gd);class Ae{constructor(e,n=iA()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return gt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(fe(e))return null;{const r=he(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),n);return s!=null?{path:$e(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const n=he(e),r=this.children.get(n);return r!==null?r.subtree(Pe(e)):new Ae(null)}}set(e,n){if(fe(e))return new Ae(n,this.children);{const r=he(e),s=(this.children.get(r)||new Ae(null)).set(Pe(e),n),o=this.children.insert(r,s);return new Ae(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=he(e),r=this.children.get(n);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ae(null):new Ae(this.value,s)}else return this}}get(e){if(fe(e))return this.value;{const n=he(e),r=this.children.get(n);return r?r.get(Pe(e)):null}}setTree(e,n){if(fe(e))return n;{const r=he(e),s=(this.children.get(r)||new Ae(null)).setTree(Pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ae(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($e(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(fe(e))return null;{const s=he(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),$e(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,r){if(fe(e))return this;{this.value&&r(n,this.value);const i=he(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),$e(n,i),r):new Ae(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new Ae(null))}}function Mo(t,e,n){if(fe(e))return new Nn(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Lt(i,e);return s=s.updateChild(o,n),new Nn(t.writeTree_.set(i,s))}else{const i=new Ae(n),s=t.writeTree_.setTree(e,i);return new Nn(s)}}}function Oh(t,e,n){let r=t;return gt(n,(i,s)=>{r=Mo(r,$e(e,i),s)}),r}function y_(t,e){if(fe(e))return Nn.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new Nn(n)}}function Lh(t,e){return Hi(t,e)!=null}function Hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function w_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new pe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new pe(r,i.value))}),e}function zr(t,e){if(fe(e))return t;{const n=Hi(t,e);return n!=null?new Nn(new Ae(n)):new Nn(t.writeTree_.subtree(e))}}function Uh(t){return t.writeTree_.isEmpty()}function Ms(t,e){return g0(Ce(),t.writeTree_,e)}function g0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=g0($e(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($e(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){return w0(e,t)}function sA(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Mo(t.visibleWrites,e,n)),t.lastWriteId=r}function oA(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Oh(t.visibleWrites,e,n),t.lastWriteId=r}function aA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cA(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return uA(t),!0;if(r.snap)t.visibleWrites=y_(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=y_(t.visibleWrites,$e(r.path,l))})}return!0}else return!1}function cA(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn($e(t.path,n),e))return!0;return!1}function uA(t){t.visibleWrites=_0(t.allWrites,dA,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dA(t){return t.visible}function _0(t,e,n){let r=Nn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=Lt(n,o),r=Mo(r,a,s.snap)):fn(o,n)&&(a=Lt(o,n),r=Mo(r,Ce(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=Lt(n,o),r=Oh(r,a,s.children);else if(fn(o,n))if(a=Lt(o,n),fe(a))r=Oh(r,Ce(),s.children);else{const l=Ni(s.children,he(a));if(l){const c=l.getChild(Pe(a));r=Mo(r,Ce(),c)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function v0(t,e,n,r,i){if(!r&&!i){const s=Hi(t.visibleWrites,e);if(s!=null)return s;{const o=zr(t.visibleWrites,e);if(Uh(o))return n;if(n==null&&!Lh(o,Ce()))return null;{const a=n||te.EMPTY_NODE;return Ms(o,a)}}}else{const s=zr(t.visibleWrites,e);if(!i&&Uh(s))return n;if(!i&&n==null&&!Lh(s,Ce()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=_0(t.allWrites,o,e),l=n||te.EMPTY_NODE;return Ms(a,l)}}}function hA(t,e,n){let r=te.EMPTY_NODE;const i=Hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=zr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=Ms(zr(s,new Te(o)),a);r=r.updateImmediateChild(o,l)}),w_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=zr(t.visibleWrites,e);return w_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fA(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$e(e,n);if(Lh(t.visibleWrites,s))return null;{const o=zr(t.visibleWrites,s);return Uh(o)?i.getChild(n):Ms(o,i.getChild(n))}}function pA(t,e,n,r){const i=$e(e,n),s=Hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=zr(t.visibleWrites,i);return Ms(o,r.getNode().getImmediateChild(n))}else return null}function mA(t,e){return Hi(t.visibleWrites,e)}function gA(t,e,n,r,i,s,o){let a;const l=zr(t.visibleWrites,e),c=Hi(l,Ce());if(c!=null)a=c;else if(n!=null)a=Ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function _A(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function Ec(t,e,n,r){return v0(t.writeTree,t.treePath,e,n,r)}function Dp(t,e){return hA(t.writeTree,t.treePath,e)}function E_(t,e,n,r){return fA(t.writeTree,t.treePath,e,n,r)}function Sc(t,e){return mA(t.writeTree,$e(t.treePath,e))}function vA(t,e,n,r,i,s){return gA(t.writeTree,t.treePath,e,n,r,i,s)}function Op(t,e,n){return pA(t.writeTree,t.treePath,e,n)}function y0(t,e){return w0($e(t.treePath,e),t.writeTree)}function w0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ma(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ma(r,e.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const E0=new wA;class Lp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Op(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ui(this.viewCache_),s=vA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){return{filter:t}}function SA(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function IA(t,e,n,r,i){const s=new yA;let o,a;if(n.type===Rn.OVERWRITE){const c=n;c.source.fromUser?o=Mh(t,e,c.path,c.snap,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!fe(c.path),o=Ic(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Rn.MERGE){const c=n;c.source.fromUser?o=TA(t,e,c.path,c.children,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Fh(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Rn.ACK_USER_WRITE){const c=n;c.revert?o=bA(t,e,c.path,r,i,s):o=kA(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Rn.LISTEN_COMPLETE)o=RA(t,e,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const l=s.getChanges();return CA(e,o,l),{viewCache:o,changes:l}}function CA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(p0(wc(e)))}}function S0(t,e,n,r,i,s){const o=e.eventCache;if(Sc(r,n)!=null)return e;{let a,l;if(fe(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ui(e),d=c instanceof te?c:te.EMPTY_NODE,u=Dp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Ec(r,Ui(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=he(n);if(c===".priority"){D(Xr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=E_(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=Pe(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=E_(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Op(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Uo(e,a,o.isFullyInitialized()||fe(n),t.filter.filtersNodes())}}function Ic(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(fe(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=he(n);if(!l.isCompleteForPath(n)&&Xr(n)>1)return e;const _=Pe(n),E=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),g,E,_,E0,null)}const u=m0(e,c,l.isFullyInitialized()||fe(n),d.filtersNodes()),h=new Lp(i,u,s);return S0(t,u,n,i,h,a)}function Mh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Lp(i,e,s);if(fe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Uo(e,c,!0,t.filter.filtersNodes());else{const u=he(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Uo(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Pe(n),g=a.getNode().getImmediateChild(u);let _;if(fe(h))_=r;else{const v=d.getCompleteChild(u);v!=null?Ip(h)===".priority"&&v.getChild(a0(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=te.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),u,_,h,d,o);l=Uo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function S_(t,e){return t.eventCache.isCompleteForChild(e)}function TA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=$e(n,l);S_(e,he(d))&&(a=Mh(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=$e(n,l);S_(e,he(d))||(a=Mh(t,a,d,c,i,s,o))}),a}function I_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Fh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;fe(n)?c=r:c=new Ae(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=I_(t,g,h);l=Ic(t,l,new Te(u),_,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),v=I_(t,_,h);l=Ic(t,l,new Te(u),v,i,s,o,a)}}),l}function kA(t,e,n,r,i,s,o){if(Sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(fe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ic(t,e,n,l.getNode().getChild(n),i,s,a,o);if(fe(n)){let c=new Ae(null);return l.getNode().forEachChild(Hn,(d,u)=>{c=c.set(new Te(d),u)}),Fh(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ae(null);return r.foreach((d,u)=>{const h=$e(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Fh(t,e,n,c,i,s,a,o)}}function RA(t,e,n,r,i){const s=e.serverCache,o=m0(e,s.getNode(),s.isFullyInitialized()||fe(n),s.isFiltered());return S0(t,o,n,r,E0,i)}function bA(t,e,n,r,i,s){let o;if(Sc(r,n)!=null)return e;{const a=new Lp(r,e,i),l=e.eventCache.getNode();let c;if(fe(n)||he(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ec(r,Ui(e));else{const u=e.serverCache.getNode();D(u instanceof te,"serverChildren would be complete if leaf node"),d=Dp(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=he(n);let u=Op(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,Pe(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,te.EMPTY_NODE,Pe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ec(r,Ui(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Sc(r,Ce())!=null,Uo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pp(r.getIndex()),s=z1(r);this.processor_=EA(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(te.EMPTY_NODE,a.getNode(),null),d=new Zr(l,o.isFullyInitialized(),i.filtersNodes()),u=new Zr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ou(u,d),this.eventGenerator_=new eA(this.query_)}get query(){return this.query_}}function NA(t){return t.viewCache_.serverCache.getNode()}function AA(t){return wc(t.viewCache_)}function xA(t,e){const n=Ui(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!fe(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function C_(t){return t.eventRegistrations_.length===0}function DA(t,e){t.eventRegistrations_.push(e)}function T_(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function k_(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&(D(Ui(t.viewCache_),"We should always have a full cache before handling merges"),D(wc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=IA(t.processor_,i,e,n,r);return SA(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,I0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function OA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Ls(s,o))}),n.isFullyInitialized()&&r.push(p0(n.getNode())),I0(t,r,n.getNode(),e)}function I0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;class C0{constructor(){this.views=new Map}}function LA(t){D(!Cc,"__referenceConstructor has already been defined"),Cc=t}function UA(){return D(Cc,"Reference.ts has not been loaded"),Cc}function MA(t){return t.views.size===0}function Up(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),k_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(k_(o,e,n,r));return s}}function T0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ec(n,i?r:null),l=!1;a?l=!0:r instanceof te?(a=Dp(n,r),l=!1):(a=te.EMPTY_NODE,l=!1);const c=ou(new Zr(a,l,!1),new Zr(r,i,!1));return new PA(e,c)}return o}function FA(t,e,n,r,i,s){const o=T0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DA(o,n),OA(o,n)}function BA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ei(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(T_(c,n,r)),C_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(T_(l,n,r)),C_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ei(t)&&s.push(new(UA())(e._repo,e._path)),{removed:s,events:o}}function k0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vr(t,e){let n=null;for(const r of t.views.values())n=n||xA(r,e);return n}function R0(t,e){if(e._queryParams.loadsAllData())return lu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function b0(t,e){return R0(t,e)!=null}function ei(t){return lu(t)!=null}function lu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;function jA(t){D(!Tc,"__referenceConstructor has already been defined"),Tc=t}function $A(){return D(Tc,"Reference.ts has not been loaded"),Tc}let WA=1;class R_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=_A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mp(t,e,n,r,i){return sA(t.pendingWriteTree_,e,n,r,i),i?Qs(t,new Li(Np(),e,n)):[]}function zA(t,e,n,r){oA(t.pendingWriteTree_,e,n,r);const i=Ae.fromObject(n);return Qs(t,new Us(Np(),e,i))}function Dr(t,e,n=!1){const r=aA(t.pendingWriteTree_,e);if(lA(t.pendingWriteTree_,e)){let s=new Ae(null);return r.snap!=null?s=s.set(Ce(),!0):gt(r.children,o=>{s=s.set(new Te(o),!0)}),Qs(t,new yc(r.path,s,n))}else return[]}function Ba(t,e,n){return Qs(t,new Li(Ap(),e,n))}function VA(t,e,n){const r=Ae.fromObject(n);return Qs(t,new Us(Ap(),e,r))}function GA(t,e){return Qs(t,new _a(Ap(),e))}function HA(t,e,n){const r=Fp(t,n);if(r){const i=Bp(r),s=i.path,o=i.queryId,a=Lt(s,e),l=new _a(xp(o),a);return jp(t,s,l)}else return[]}function kc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||b0(o,e))){const l=BA(o,e,n,r);MA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,g)=>ei(g));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=QA(h);for(let _=0;_<g.length;++_){const v=g[_],E=v.query,p=x0(t,v);t.listenProvider_.startListening(Fo(E),va(t,E),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Fo(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(uu(h));t.listenProvider_.stopListening(Fo(h),g)}))}YA(t,c)}return a}function P0(t,e,n,r){const i=Fp(t,r);if(i!=null){const s=Bp(i),o=s.path,a=s.queryId,l=Lt(o,e),c=new Li(xp(a),l,n);return jp(t,o,c)}else return[]}function qA(t,e,n,r){const i=Fp(t,r);if(i){const s=Bp(i),o=s.path,a=s.queryId,l=Lt(o,e),c=Ae.fromObject(n),d=new Us(xp(a),l,c);return jp(t,o,d)}else return[]}function Bh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Lt(h,i);s=s||Vr(g,_),o=o||ei(g)});let a=t.syncPointTree_.get(i);a?(o=o||ei(a),s=s||Vr(a,Ce())):(a=new C0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Vr(_,Ce());v&&(s=s.updateImmediateChild(g,v))}));const c=b0(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=uu(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=JA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=au(t.pendingWriteTree_,i);let u=FA(a,e,n,d,s,l);if(!c&&!o&&!r){const h=R0(a,e);u=u.concat(XA(t,e,h))}return u}function cu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Lt(o,e),c=Vr(a,l);if(c)return c});return v0(i,e,s,n,!0)}function KA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Lt(c,n);r=r||Vr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Vr(i,Ce()):(i=new C0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Zr(r,!0,!1):null,a=au(t.pendingWriteTree_,e._path),l=T0(i,e,a,s?o.getNode():te.EMPTY_NODE,s);return AA(l)}function Qs(t,e){return N0(e,t.syncPointTree_,null,au(t.pendingWriteTree_,Ce()))}function N0(t,e,n,r){if(fe(t.path))return A0(t,e,n,r);{const i=e.get(Ce());n==null&&i!=null&&(n=Vr(i,Ce()));let s=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=y0(r,o);s=s.concat(N0(a,l,c,d))}return i&&(s=s.concat(Up(i,t,r,n))),s}}function A0(t,e,n,r){const i=e.get(Ce());n==null&&i!=null&&(n=Vr(i,Ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=y0(r,o),d=t.operationForChild(o);d&&(s=s.concat(A0(d,a,l,c)))}),i&&(s=s.concat(Up(i,t,r,n))),s}function x0(t,e){const n=e.query,r=va(t,n);return{hashFn:()=>(NA(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HA(t,n._path,r):GA(t,n._path);{const s=zN(i,n);return kc(t,n,null,s)}}}}function va(t,e){const n=uu(e);return t.queryToTagMap.get(n)}function uu(t){return t._path.toString()+"$"+t._queryIdentifier}function Fp(t,e){return t.tagToQueryMap.get(e)}function Bp(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function jp(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=au(t.pendingWriteTree_,e);return Up(r,n,i,null)}function QA(t){return t.fold((e,n,r)=>{if(n&&ei(n))return[lu(n)];{let i=[];return n&&(i=k0(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Fo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($A())(t._repo,t._path):t}function YA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=uu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function JA(){return WA++}function XA(t,e,n){const r=e._path,i=va(t,e),s=x0(t,n),o=t.listenProvider_.startListening(Fo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!ei(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!fe(c)&&d&&ei(d))return[lu(d).query];{let h=[];return d&&(h=h.concat(k0(d).map(g=>g.query))),gt(u,(g,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Fo(d),va(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $p(n)}node(){return this.node_}}class Wp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Wp(this.syncTree_,n)}node(){return cu(this.syncTree_,this.path_)}}const ZA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},b_=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ex(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tx(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ex=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},tx=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},D0=function(t,e,n,r){return Vp(e,new Wp(n,t),r)},zp=function(t,e,n){return Vp(t,new $p(e),n)};function Vp(t,e,n){const r=t.getPriority().val(),i=b_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=b_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ut(a,ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ut(i))),o.forEachChild(De,(a,l)=>{const c=Vp(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function du(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=he(n);for(;i!==null;){const s=Ni(r.node.children,i)||{children:{},childCount:0};r=new Gp(i,r,s),n=Pe(n),i=he(n)}return r}function qi(t){return t.node.value}function Hp(t,e){t.node.value=e,jh(t)}function O0(t){return t.node.childCount>0}function nx(t){return qi(t)===void 0&&!O0(t)}function hu(t,e){gt(t.node.children,(n,r)=>{e(new Gp(n,t,r))})}function L0(t,e,n,r){n&&!r&&e(t),hu(t,i=>{L0(i,e,!0,r)}),n&&r&&e(t)}function rx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ja(t){return new Te(t.parent===null?t.name:ja(t.parent)+"/"+t.name)}function jh(t){t.parent!==null&&ix(t.parent,t.name,t)}function ix(t,e,n){const r=nx(n),i=rn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=/[\[\].#$\/\u0000-\u001F\u007F]/,ox=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,fu=function(t){return typeof t=="string"&&t.length!==0&&!sx.test(t)},U0=function(t){return typeof t=="string"&&t.length!==0&&!ox.test(t)},ax=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),U0(t)},ya=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!nu(t)||t&&typeof t=="object"&&rn(t,".sv")},Yn=function(t,e,n,r){r&&e===void 0||$a(Kt(t,"value"),e,n)},$a=function(t,e,n){const r=n instanceof Te?new I1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+di(r));if(typeof e=="function")throw new Error(t+"contains a function "+di(r)+" with contents = "+e.toString());if(nu(e))throw new Error(t+"contains "+e.toString()+" "+di(r));if(typeof e=="string"&&e.length>_d/3&&Hc(e)>_d)throw new Error(t+"contains a string greater than "+_d+" utf8 bytes "+di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fu(o)))throw new Error(t+" contains an invalid key ("+o+") "+di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C1(r,o),$a(t,a,r),T1(r)}),i&&s)throw new Error(t+' contains ".value" child '+di(r)+" in addition to actual children.")}},lx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=fa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(S1);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&fn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},M0=function(t,e,n,r){if(r&&e===void 0)return;const i=Kt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const l=new Te(o);if($a(i,a,$e(n,l)),Ip(l)===".priority"&&!ya(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),lx(i,s)},qp=function(t,e,n){if(!(n&&e===void 0)){if(nu(e))throw new Error(Kt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ya(e))throw new Error(Kt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Wa=function(t,e,n,r){if(!(r&&n===void 0)&&!fu(n))throw new Error(Kt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},wa=function(t,e,n,r){if(!(r&&n===void 0)&&!U0(n))throw new Error(Kt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wa(t,e,n,r)},pn=function(t,e){if(he(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},F0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ax(n))throw new Error(Kt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function B0(t,e,n){pu(t,n),j0(t,r=>Cp(r,e))}function on(t,e,n){pu(t,n),j0(t,r=>fn(r,e)||fn(e,r))}function j0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(dx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&pt("event: "+n.toString()),qs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="repo_interrupt",hx=25;class fx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ux,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vc(),this.transactionQueueTree_=new Gp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function px(t,e,n){if(t.stats_=Ep(t.repoInfo_),t.forceRestClient_||qN())t.server_=new _c(t.repoInfo_,(r,i,s,o)=>{P_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>N_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cr(t.repoInfo_,e,(r,i,s,o)=>{P_(t,r,i,s,o)},r=>{N_(t,r)},r=>{mx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=XN(t.repoInfo_,()=>new Z1(t.stats_,t.server_)),t.infoData_=new K1,t.infoSyncTree_=new R_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ba(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Kp(t,"connected",!1),t.serverSyncTree_=new R_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);on(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function W0(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function za(t){return ZA({timestamp:W0(t)})}function P_(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ac(n,c=>ze(c));o=qA(t.serverSyncTree_,s,l,i)}else{const l=ze(n);o=P0(t.serverSyncTree_,s,l,i)}else if(r){const l=ac(n,c=>ze(c));o=VA(t.serverSyncTree_,s,l)}else{const l=ze(n);o=Ba(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Fs(t,s)),on(t.eventQueue_,a,o)}function N_(t,e){Kp(t,"connected",e),e===!1&&vx(t)}function mx(t,e){gt(e,(n,r)=>{Kp(t,n,r)})}function Kp(t,e,n){const r=new Te("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(r,i);const s=Ba(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function mu(t){return t.nextWriteId_++}function gx(t,e,n){const r=KA(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ze(i).withIndex(e._queryParams.getIndex());Bh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ba(t.serverSyncTree_,e._path,s);else{const a=va(t.serverSyncTree_,e);o=P0(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),kc(t.serverSyncTree_,e,n,null,!0),s},i=>(Ys(t,"get for query "+at(e)+" failed: "+i),Promise.reject(new Error(i))))}function Qp(t,e,n,r,i){Ys(t,"set",{path:e.toString(),value:n,priority:r});const s=za(t),o=ze(n,r),a=cu(t.serverSyncTree_,e),l=zp(o,a,s),c=mu(t),d=Mp(t.serverSyncTree_,e,l,c,!0);pu(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Pt("set at "+e+" failed: "+h);const v=Dr(t.serverSyncTree_,c,!_);on(t.eventQueue_,e,v),ti(t,i,h,g)});const u=Jp(t,e);Fs(t,u),on(t.eventQueue_,u,[])}function _x(t,e,n,r){Ys(t,"update",{path:e.toString(),value:n});let i=!0;const s=za(t),o={};if(gt(n,(a,l)=>{i=!1,o[a]=D0($e(e,a),ze(l),t.serverSyncTree_,s)}),i)pt("update() called with empty data.  Don't do anything."),ti(t,r,"ok",void 0);else{const a=mu(t),l=zA(t.serverSyncTree_,e,o,a);pu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Pt("update at "+e+" failed: "+c);const h=Dr(t.serverSyncTree_,a,!u),g=h.length>0?Fs(t,e):e;on(t.eventQueue_,g,h),ti(t,r,c,d)}),gt(n,c=>{const d=Jp(t,$e(e,c));Fs(t,d)}),on(t.eventQueue_,e,[])}}function vx(t){Ys(t,"onDisconnectEvents");const e=za(t),n=vc();Dh(t.onDisconnect_,Ce(),(i,s)=>{const o=D0(i,s,t.serverSyncTree_,e);Ks(n,i,o)});let r=[];Dh(n,Ce(),(i,s)=>{r=r.concat(Ba(t.serverSyncTree_,i,s));const o=Jp(t,i);Fs(t,o)}),t.onDisconnect_=vc(),on(t.eventQueue_,Ce(),r)}function yx(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&xh(t.onDisconnect_,e),ti(t,n,r,i)})}function A_(t,e,n,r){const i=ze(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ks(t.onDisconnect_,e,i),ti(t,r,s,o)})}function wx(t,e,n,r,i){const s=ze(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ks(t.onDisconnect_,e,s),ti(t,i,o,a)})}function Ex(t,e,n,r){if(oc(n)){pt("onDisconnect().update() called with empty data.  Don't do anything."),ti(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&gt(n,(o,a)=>{const l=ze(a);Ks(t.onDisconnect_,$e(e,o),l)}),ti(t,r,i,s)})}function Sx(t,e,n){let r;he(e._path)===".info"?r=Bh(t.infoSyncTree_,e,n):r=Bh(t.serverSyncTree_,e,n),B0(t.eventQueue_,e._path,r)}function $h(t,e,n){let r;he(e._path)===".info"?r=kc(t.infoSyncTree_,e,n):r=kc(t.serverSyncTree_,e,n),B0(t.eventQueue_,e._path,r)}function z0(t){t.persistentConnection_&&t.persistentConnection_.interrupt($0)}function Ix(t){t.persistentConnection_&&t.persistentConnection_.resume($0)}function Ys(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function ti(t,e,n,r){e&&qs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Cx(t,e,n,r,i,s){Ys(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:FE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Yp(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{$a("transaction failed: Data returned ",l,o.path),o.status=0;const c=du(t.transactionQueueTree_,e),d=qi(c)||[];d.push(o),Hp(c,d);let u;typeof l=="object"&&l!==null&&rn(l,".priority")?(u=Ni(l,".priority"),D(ya(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(cu(t.serverSyncTree_,e)||te.EMPTY_NODE).getPriority().val();const h=za(t),g=ze(l,u),_=zp(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=mu(t);const v=Mp(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);on(t.eventQueue_,e,v),gu(t,t.transactionQueueTree_)}}function Yp(t,e,n){return cu(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function gu(t,e=t.transactionQueueTree_){if(e||_u(t,e),qi(e)){const n=G0(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tx(t,ja(e),n)}else O0(e)&&hu(e,n=>{gu(t,n)})}function Tx(t,e,n){const r=n.map(c=>c.currentWriteId),i=Yp(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];D(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Lt(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ys(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Dr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_u(t,du(t.transactionQueueTree_,e)),gu(t,t.transactionQueueTree_),on(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)qs(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Pt("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Fs(t,e)}},o)}function Fs(t,e){const n=V0(t,e),r=ja(n),i=G0(t,n);return kx(t,i,r),r}function kx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Lt(n,l.path);let d=!1,u;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hx)d=!0,u="maxretry",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Yp(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){$a("transaction failed: Data returned ",g,l.path);let _=ze(g);typeof g=="object"&&g!=null&&rn(g,".priority")||(_=_.updatePriority(h.getPriority()));const E=l.currentWriteId,p=za(t),f=zp(_,h,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=mu(t),o.splice(o.indexOf(E),1),i=i.concat(Mp(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Dr(t.serverSyncTree_,E,!0))}else d=!0,u="nodata",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}_u(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qs(r[a]);gu(t,t.transactionQueueTree_)}function V0(t,e){let n,r=t.transactionQueueTree_;for(n=he(e);n!==null&&qi(r)===void 0;)r=du(r,n),e=Pe(e),n=he(e);return r}function G0(t,e){const n=[];return H0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function H0(t,e,n){const r=qi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hu(e,i=>{H0(t,i,n)})}function _u(t,e){const n=qi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hp(e,n.length>0?n:void 0)}hu(e,r=>{_u(t,r)})}function Jp(t,e){const n=ja(V0(t,e)),r=du(t.transactionQueueTree_,e);return rx(r,i=>{vd(t,i)}),vd(t,r),L0(r,i=>{vd(t,i)}),n}function vd(t,e){const n=qi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hp(e,void 0):n.length=s+1,on(t.eventQueue_,ja(e),i);for(let o=0;o<r.length;o++)qs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wh=function(t,e){const n=Px(t),r=n.namespace;n.domain==="firebase.com"&&Qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new XE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},Px=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=Rx(t.substring(d,u)));const h=bx(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Nx=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=x_.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=x_.charAt(e[i]);return D(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class K0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ax=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Wt;return yx(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pn("OnDisconnect.remove",this._path);const e=new Wt;return A_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pn("OnDisconnect.set",this._path),Yn("OnDisconnect.set",e,this._path,!1);const n=new Wt;return A_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){pn("OnDisconnect.setWithPriority",this._path),Yn("OnDisconnect.setWithPriority",e,this._path,!1),qp("OnDisconnect.setWithPriority",n,!1);const r=new Wt;return wx(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){pn("OnDisconnect.update",this._path),M0("OnDisconnect.update",e,this._path,!1);const n=new Wt;return Ex(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return fe(this._path)?null:Ip(this._path)}get ref(){return new En(this._repo,this._path)}get _queryIdentifier(){const e=__(this._queryParams),n=yp(e);return n==="{}"?"default":n}get _queryObject(){return __(this._queryParams)}isEqual(e){if(e=Q(e),!(e instanceof Qt))return!1;const n=this._repo===e._repo,r=Cp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+E1(this._path)}}function vu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function oi(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Hn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Jr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==_r)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===De){if(e!=null&&!ya(e)||n!=null&&!ya(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof Rp||t.getIndex()===bp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function yu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class En extends Qt{constructor(e,n){super(e,n,new iu,!1)}get parent(){const e=a0(this._path);return e===null?null:new En(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let wu=class zh{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=Mi(this.ref,e);return new zh(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new zh(i,Mi(this.ref,r),De)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Q0(t,e){return t=Q(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function D_(t,e){t=Q(t),t._checkNotDeleted("refFromURL");const n=Wh(e,t._repo.repoInfo_.nodeAdmin);F0("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Qn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),Q0(t,n.path.toString())}function Mi(t,e){return t=Q(t),he(t._path)===null?cx("child","path",e,!1):wa("child","path",e,!1),new En(t._repo,$e(t._path,e))}function xx(t,e){t=Q(t),pn("push",t._path),Yn("push",e,t._path,!0);const n=W0(t._repo),r=Nx(n),i=Mi(t,r),s=Mi(t,r);let o;return e!=null?o=Zp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Dx(t){return pn("remove",t._path),Zp(t,null)}function Zp(t,e){t=Q(t),pn("set",t._path),Yn("set",e,t._path,!1);const n=new Wt;return Qp(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ox(t,e){t=Q(t),pn("setPriority",t._path),qp("setPriority",e,!1);const n=new Wt;return Qp(t._repo,$e(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function Lx(t,e,n){if(pn("setWithPriority",t._path),Yn("setWithPriority",e,t._path,!1),qp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new Wt;return Qp(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function Ux(t,e){M0("update",e,t._path,!1);const n=new Wt;return _x(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Mx(t){t=Q(t);const e=new Xp(()=>{}),n=new Va(e);return gx(t._repo,t,n).then(r=>new wu(r,new En(t._repo,t._path),t._queryParams.getIndex()))}class Va{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new q0("value",this,new wu(e.snapshotNode,new En(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new K0(this,e,n):null}matches(e){return e instanceof Va?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Eu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new K0(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=Mi(new En(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new q0(e.type,this,new wu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Eu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ga(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{$h(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Xp(n,s||void 0),a=e==="value"?new Va(o):new Eu(e,o);return Sx(t._repo,t,a),()=>$h(t._repo,t,a)}function Vh(t,e,n,r){return Ga(t,"value",e,n,r)}function O_(t,e,n,r){return Ga(t,"child_added",e,n,r)}function L_(t,e,n,r){return Ga(t,"child_changed",e,n,r)}function U_(t,e,n,r){return Ga(t,"child_moved",e,n,r)}function M_(t,e,n,r){return Ga(t,"child_removed",e,n,r)}function F_(t,e,n){let r=null;const i=n?new Xp(n):null;e==="value"?r=new Va(i):e&&(r=new Eu(e,i)),$h(t._repo,t,r)}class On{}class Y0 extends On{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yn("endAt",this._value,e._path,!0);const n=Ah(e._queryParams,this._value,this._key);if(yu(n),oi(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Qt(e._repo,e._path,n,e._orderByCalled)}}function Fx(t,e){return Wa("endAt","key",e,!0),new Y0(t,e)}class Bx extends On{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yn("endBefore",this._value,e._path,!1);const n=q1(e._queryParams,this._value,this._key);if(yu(n),oi(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Qt(e._repo,e._path,n,e._orderByCalled)}}function jx(t,e){return Wa("endBefore","key",e,!0),new Bx(t,e)}class J0 extends On{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yn("startAt",this._value,e._path,!0);const n=Nh(e._queryParams,this._value,this._key);if(yu(n),oi(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Qt(e._repo,e._path,n,e._orderByCalled)}}function $x(t=null,e){return Wa("startAt","key",e,!0),new J0(t,e)}class Wx extends On{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yn("startAfter",this._value,e._path,!1);const n=H1(e._queryParams,this._value,this._key);if(yu(n),oi(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Qt(e._repo,e._path,n,e._orderByCalled)}}function zx(t,e){return Wa("startAfter","key",e,!0),new Wx(t,e)}class Vx extends On{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Qt(e._repo,e._path,V1(e._queryParams,this._limit),e._orderByCalled)}}function Gx(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Vx(t)}class Hx extends On{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Qt(e._repo,e._path,G1(e._queryParams,this._limit),e._orderByCalled)}}function qx(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Hx(t)}class Kx extends On{constructor(e){super(),this._path=e}_apply(e){vu(e,"orderByChild");const n=new Te(this._path);if(fe(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Rp(n),i=su(e._queryParams,r);return oi(i),new Qt(e._repo,e._path,i,!0)}}function Qx(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return wa("orderByChild","path",t,!1),new Kx(t)}class Yx extends On{_apply(e){vu(e,"orderByKey");const n=su(e._queryParams,Hn);return oi(n),new Qt(e._repo,e._path,n,!0)}}function Jx(){return new Yx}class Xx extends On{_apply(e){vu(e,"orderByPriority");const n=su(e._queryParams,De);return oi(n),new Qt(e._repo,e._path,n,!0)}}function Zx(){return new Xx}class eD extends On{_apply(e){vu(e,"orderByValue");const n=su(e._queryParams,bp);return oi(n),new Qt(e._repo,e._path,n,!0)}}function tD(){return new eD}class nD extends On{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Yn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Y0(this._value,this._key)._apply(new J0(this._value,this._key)._apply(e))}}function rD(t,e){return Wa("equalTo","key",e,!0),new nD(t,e)}function In(t,...e){let n=Q(t);for(const r of e)n=r._apply(n);return n}LA(En);jA(En);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="FIREBASE_DATABASE_EMULATOR_HOST",Gh={};let sD=!1;function oD(t,e,n,r){t.repoInfo_=new XE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function X0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wh(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[iD]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Wh(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Is(Is.OWNER):new QN(t.name,t.options,e);F0("Invalid Firebase Database URL",o),fe(o.path)||Qn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lD(a,t,d,new KN(t.name,n));return new cD(u,t)}function aD(t,e){const n=Gh[e];(!n||n[t.key]!==t)&&Qn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),z0(t),delete n[t.key]}function lD(t,e,n,r){let i=Gh[e.name];i||(i={},Gh[e.name]=i);let s=i[t.toURLString()];return s&&Qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fx(t,sD,n,r),i[t.toURLString()]=s,s}let cD=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(px(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new En(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qn("Cannot call "+e+" on a deleted database.")}};function Z0(){Os.IS_TRANSPORT_INITIALIZED&&Pt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function uD(){Z0(),xr.forceDisallow()}function dD(){Z0(),dn.forceDisallow(),xr.forceAllow()}function hD(t,e,n,r={}){t=Q(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Is(Is.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:_w(r.mockUserToken,t.app.options.projectId);s=new Is(o)}oD(i,e,n,s)}function fD(t){t=Q(t),t._checkNotDeleted("goOffline"),z0(t._repo)}function pD(t){t=Q(t),t._checkNotDeleted("goOnline"),Ix(t._repo)}function mD(t,e){jE(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){UE(yr),mr(new sn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return X0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(e_,t_,t),_n(e_,t_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D={".sv":"timestamp"};function vD(){return _D}function yD(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wD=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function ED(t,e,n){var r;if(t=Q(t),pn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new Wt,o=(l,c,d)=>{let u=null;l?s.reject(l):(u=new wu(d,new En(t._repo,t._path),De),s.resolve(new wD(c,u)))},a=Vh(t,()=>{});return Cx(t._repo,t._path,e,o,a,i),s.promise}cr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gD();const SD="@firebase/database-compat",ID="0.3.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new Na("@firebase/database-compat"),eS=function(t){const e="FIREBASE WARNING: "+t;CD.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Kt(t,e)+"must be a boolean.")},kD=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Kt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this._delegate=e}cancel(e){ne("OnDisconnect.cancel",0,1,arguments.length),ht("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){ne("OnDisconnect.remove",0,1,arguments.length),ht("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){ne("OnDisconnect.set",1,2,arguments.length),ht("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){ne("OnDisconnect.setWithPriority",2,3,arguments.length),ht("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(ne("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,eS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ht("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return ne("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this._database=e,this._delegate=n}val(){return ne("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return ne("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return ne("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return ne("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return ne("DataSnapshot.child",0,1,arguments.length),e=String(e),wa("DataSnapshot.child","path",e,!1),new Gr(this._database,this._delegate.child(e))}hasChild(e){return ne("DataSnapshot.hasChild",1,1,arguments.length),wa("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return ne("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return ne("DataSnapshot.forEach",1,1,arguments.length),ht("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Gr(this._database,n)))}hasChildren(){return ne("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return ne("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return ne("DataSnapshot.ref",0,0,arguments.length),new _i(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class vt{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;ne("Query.on",2,4,arguments.length),ht("Query.on","callback",n,!1);const o=vt.getCancelAndContextArgs_("Query.on",r,i),a=(c,d)=>{n.call(o.context,new Gr(this.database,c),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Vh(this._delegate,a,l),n;case"child_added":return O_(this._delegate,a,l),n;case"child_removed":return M_(this._delegate,a,l),n;case"child_changed":return L_(this._delegate,a,l),n;case"child_moved":return U_(this._delegate,a,l),n;default:throw new Error(Kt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(ne("Query.off",0,3,arguments.length),kD("Query.off",e,!0),ht("Query.off","callback",n,!0),kg("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,F_(this._delegate,e,i)}else F_(this._delegate,e)}get(){return Mx(this._delegate).then(e=>new Gr(this.database,e))}once(e,n,r,i){ne("Query.once",1,4,arguments.length),ht("Query.once","callback",n,!0);const s=vt.getCancelAndContextArgs_("Query.once",r,i),o=new Wt,a=(c,d)=>{const u=new Gr(this.database,c);n&&n.call(s.context,u,d),o.resolve(u)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Vh(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":O_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":M_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":L_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":U_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(Kt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return ne("Query.limitToFirst",1,1,arguments.length),new vt(this.database,In(this._delegate,Gx(e)))}limitToLast(e){return ne("Query.limitToLast",1,1,arguments.length),new vt(this.database,In(this._delegate,qx(e)))}orderByChild(e){return ne("Query.orderByChild",1,1,arguments.length),new vt(this.database,In(this._delegate,Qx(e)))}orderByKey(){return ne("Query.orderByKey",0,0,arguments.length),new vt(this.database,In(this._delegate,Jx()))}orderByPriority(){return ne("Query.orderByPriority",0,0,arguments.length),new vt(this.database,In(this._delegate,Zx()))}orderByValue(){return ne("Query.orderByValue",0,0,arguments.length),new vt(this.database,In(this._delegate,tD()))}startAt(e=null,n){return ne("Query.startAt",0,2,arguments.length),new vt(this.database,In(this._delegate,$x(e,n)))}startAfter(e=null,n){return ne("Query.startAfter",0,2,arguments.length),new vt(this.database,In(this._delegate,zx(e,n)))}endAt(e=null,n){return ne("Query.endAt",0,2,arguments.length),new vt(this.database,In(this._delegate,Fx(e,n)))}endBefore(e=null,n){return ne("Query.endBefore",0,2,arguments.length),new vt(this.database,In(this._delegate,jx(e,n)))}equalTo(e,n){return ne("Query.equalTo",1,2,arguments.length),new vt(this.database,In(this._delegate,rD(e,n)))}toString(){return ne("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return ne("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(ne("Query.isEqual",1,1,arguments.length),!(e instanceof vt)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,ht(e,"cancel",i.cancel,!0),i.context=r,kg(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Kt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new _i(this.database,new En(this._delegate._repo,this._delegate._path))}}let _i=class Xi extends vt{constructor(e,n){super(e,new Qt(n._repo,n._path,new iu,!1)),this.database=e,this._delegate=n}getKey(){return ne("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return ne("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Xi(this.database,Mi(this._delegate,e))}getParent(){ne("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Xi(this.database,e):null}getRoot(){return ne("Reference.root",0,0,arguments.length),new Xi(this.database,this._delegate.root)}set(e,n){ne("Reference.set",1,2,arguments.length),ht("Reference.set","onComplete",n,!0);const r=Zp(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(ne("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,eS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}pn("Reference.update",this._delegate._path),ht("Reference.update","onComplete",n,!0);const r=Ux(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){ne("Reference.setWithPriority",2,3,arguments.length),ht("Reference.setWithPriority","onComplete",r,!0);const i=Lx(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){ne("Reference.remove",0,1,arguments.length),ht("Reference.remove","onComplete",e,!0);const n=Dx(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){ne("Reference.transaction",1,3,arguments.length),ht("Reference.transaction","transactionUpdate",e,!1),ht("Reference.transaction","onComplete",n,!0),TD("Reference.transaction","applyLocally",r,!0);const i=ED(this._delegate,e,{applyLocally:r}).then(s=>new bD(s.committed,new Gr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){ne("Reference.setPriority",1,2,arguments.length),ht("Reference.setPriority","onComplete",n,!0);const r=Ox(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){ne("Reference.push",0,2,arguments.length),ht("Reference.push","onComplete",n,!0);const r=xx(this._delegate,e),i=r.then(o=>new Xi(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Xi(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return pn("Reference.onDisconnect",this._delegate._path),new RD(new Ax(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:uD,forceLongPolling:dD}}useEmulator(e,n,r={}){hD(this._delegate,e,n,r)}ref(e){if(ne("database.ref",0,1,arguments.length),e instanceof _i){const n=D_(this._delegate,e.toString());return new _i(this,n)}else{const n=Q0(this._delegate,e);return new _i(this,n)}}refFromURL(e){ne("database.refFromURL",1,1,arguments.length);const r=D_(this._delegate,e);return new _i(this,r)}goOffline(){return ne("database.goOffline",0,0,arguments.length),fD(this._delegate)}goOnline(){return ne("database.goOnline",0,0,arguments.length),pD(this._delegate)}}Ea.ServerValue={TIMESTAMP:vD(),increment:t=>yD(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){UE(n);const o=new Iw("auth-internal",new Cw("database-standalone"));return o.setComponent(new sn("auth-internal",()=>r,"PRIVATE")),{instance:new Ea(X0(t,o,void 0,e,s),t),namespace:i}}var ND=Object.freeze({__proto__:null,initStandalone:PD});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=Ea.ServerValue;function xD(t){t.INTERNAL.registerComponent(new sn("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Ea(i,r)},"PUBLIC").setServiceProps({Reference:_i,Query:vt,Database:Ea,DataSnapshot:Gr,enableLogging:mD,INTERNAL:ND,ServerValue:AD}).setMultipleInstances(!0)),t.registerVersion(SD,ID)}xD(Y);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebasestorage.googleapis.com",nS="storageBucket",DD=2*60*1e3,OD=10*60*1e3,LD=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Mt{constructor(e,n,r=0){super(yd(e),`Firebase Storage: ${n} (${yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function yd(t){return"storage/"+t}function em(){const t="An unknown error occurred, please check the error payload for server response.";return new qe(Fe.UNKNOWN,t)}function UD(t){return new qe(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MD(t){return new qe(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe(Fe.UNAUTHENTICATED,t)}function BD(){return new qe(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jD(t){return new qe(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rS(){return new qe(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iS(){return new qe(Fe.CANCELED,"User canceled the upload/download.")}function $D(t){return new qe(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function WD(t){return new qe(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zD(){return new qe(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nS+"' property when initializing the app?")}function sS(){return new qe(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VD(){return new qe(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function GD(){return new qe(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HD(t){return new qe(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cs(t){return new qe(Fe.INVALID_ARGUMENT,t)}function oS(){return new qe(Fe.APP_DELETED,"The Firebase app was deleted.")}function aS(t){return new qe(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bo(t,e){return new qe(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function mo(t){throw new qe(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(r.path==="")return r;throw WD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${d}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},v=n===tS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${E}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:c},{regex:p,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<m.length;y++){const C=m[y],T=C.regex.exec(e);if(T){const b=T[C.indices.bucket];let N=T[C.indices.path];N||(N=""),r=new bt(b,N),C.postModify(r);break}}if(r==null)throw $D(e);return r}}class qD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...E){c||(c=!0,e.apply(null,E))}function u(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function h(){s&&clearTimeout(s)}function g(E,...p){if(c){h();return}if(E){h(),d.call(null,E,...p);return}if(l()||o){h(),d.call(null,E,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,u(m)}let _=!1;function v(E){_||(_=!0,h(),!c&&(i!==null?(E||(a=2),clearTimeout(i),u(0)):E||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function QD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){return t!==void 0}function JD(t){return typeof t=="function"}function XD(t){return typeof t=="object"&&!Array.isArray(t)}function Su(t){return typeof t=="string"||t instanceof String}function B_(t){return tm()&&t instanceof Blob}function tm(){return typeof Blob<"u"&&!Qf()}function Hh(t,e,n,r){if(r<e)throw Cs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ci;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ci||(Ci={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i,s,o,a,l,c,d,u,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ci.NO_ERROR,l=s.getStatus();if(!a||cS(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ci.ABORT;r(!1,new fl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new fl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=em();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?oS():iS();o(l)}else{const l=rS();o(l)}};this.canceled_?n(!1,new fl(!1,null,!0)):this.backoffId_=KD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iO(t,e,n,r,i,s,o=!0){const a=lS(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nO(c,e),eO(c,n),tO(c,s),rO(c,r),new ZD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oO(...t){const e=sO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tm())return new Blob(t);throw new qe(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){if(typeof atob>"u")throw HD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wd{constructor(e,n){this.data=e,this.contentType=n||null}}function uS(t,e){switch(t){case mn.RAW:return new wd(dS(e));case mn.BASE64:case mn.BASE64URL:return new wd(hS(t,e));case mn.DATA_URL:return new wd(uO(e),dO(e))}throw em()}function dS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cO(t){let e;try{e=decodeURIComponent(t)}catch{throw Bo(mn.DATA_URL,"Malformed data URL.")}return dS(e)}function hS(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lO(e)}catch(i){throw i.message.includes("polyfill")?i:Bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bo(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uO(t){const e=new fS(t);return e.base64?hS(mn.BASE64,e.rest):cO(e.rest)}function dO(t){return new fS(t).contentType}function hO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){let r=0,i="";B_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(B_(this.data_)){const r=this.data_,i=aO(r,e,n);return i===null?null:new er(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(tm()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(oO.apply(null,n))}else{const n=e.map(o=>Su(o)?uS(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new er(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){let e;try{e=JSON.parse(t)}catch{return null}return XD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function pS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t,e){return e}class xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mO}}let pl=null;function gO(t){return!Su(t)||t.length<2?t:pS(t)}function Iu(){if(pl)return pl;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(s,o){return gO(o)}const n=new xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xt("size");return i.xform=r,t.push(i),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),pl=t,pl}function _O(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _O(r,t),r}function mS(t,e,n){const r=nm(e);return r===null?null:vO(t,r,n)}function yO(t,e,n,r){const i=nm(e);if(i===null||!Su(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,h="/b/"+o(d)+"/o/"+o(u),g=ai(h,n,r),_=lS({alt:"media",token:c});return g+_})[0]}function rm(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="prefixes",$_="items";function wO(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[j_])for(const i of n[j_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new bt(e,s));r.prefixes.push(o)}if(n[$_])for(const i of n[$_]){const s=t._makeStorageReference(new bt(e,i.name));r.items.push(s)}return r}function EO(t,e,n){const r=nm(n);return r===null?null:wO(t,e,r)}class Sr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!t)throw em()}function Cu(t,e){function n(r,i){const s=mS(t,i,e);return qn(s!==null),s}return n}function SO(t,e){function n(r,i){const s=EO(t,e,i);return qn(s!==null),s}return n}function IO(t,e){function n(r,i){const s=mS(t,i,e);return qn(s!==null),yO(s,i,t.host,t._protocol)}return n}function Js(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=BD():i=FD():n.getStatus()===402?i=MD(t.bucket):n.getStatus()===403?i=jD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Tu(t){const e=Js(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=UD(t.path)),s.serverResponse=i.serverResponse,s}return n}function gS(t,e,n){const r=e.fullServerUrl(),i=ai(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,Cu(t,n),o);return a.errorHandler=Tu(e),a}function CO(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ai(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new Sr(a,l,SO(t,e.bucket),c);return d.urlParams=s,d.errorHandler=Js(e),d}function TO(t,e,n){const r=e.fullServerUrl(),i=ai(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,IO(t,n),o);return a.errorHandler=Tu(e),a}function kO(t,e,n,r){const i=e.fullServerUrl(),s=ai(i,t.host,t._protocol),o="PATCH",a=rm(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new Sr(s,o,Cu(t,r),c);return d.headers=l,d.body=a,d.errorHandler=Tu(e),d}function RO(t,e){const n=e.fullServerUrl(),r=ai(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Sr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Tu(e),a}function bO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _S(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bO(null,e)),r}function PO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let y=0;y<2;y++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=_S(e,r,i),d=rm(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=er.getBlob(u,r,h);if(g===null)throw sS();const _={name:c.fullPath},v=ai(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new Sr(v,E,Cu(t,n),p);return f.urlParams=_,f.headers=o,f.body=g.uploadData(),f.errorHandler=Js(e),f}class Rc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function im(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qn(!1)}return qn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function NO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_S(e,r,i),a={name:o.fullPath},l=ai(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=rm(o,n),h=t.maxUploadRetryTime;function g(v){im(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{qn(!1)}return qn(Su(E)),E}const _=new Sr(l,c,g,h);return _.urlParams=a,_.headers=d,_.body=u,_.errorHandler=Js(e),_}function AO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=im(c,["active","final"]);let u=null;try{u=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qn(!1)}u||qn(!1);const h=Number(u);return qn(!isNaN(h)),new Rc(h,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Sr(n,o,s,a);return l.headers=i,l.errorHandler=Js(e),l}const W_=256*1024;function xO(t,e,n,r,i,s,o,a){const l=new Rc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw VD();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const u=l.current,h=u+d;let g="";d===0?g="finalize":c===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(u,h);if(v===null)throw sS();function E(y,C){const T=im(y,["active","final"]),b=l.current+d,N=r.size();let V;return T==="final"?V=Cu(e,s)(y,C):V=null,new Rc(b,N,T==="final",V)}const p="POST",f=e.maxUploadRetryTime,m=new Sr(n,p,E,f);return m.headers=_,m.body=v.uploadData(),m.progressCallback=a||null,m.errorHandler=Js(t),m}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO={STATE_CHANGED:"state_changed"},Ot={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ed(t){switch(t){case"running":case"pausing":case"canceling":return Ot.RUNNING;case"paused":return Ot.PAUSED;case"success":return Ot.SUCCESS;case"canceled":return Ot.CANCELED;case"error":return Ot.ERROR;default:return Ot.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r){if(JD(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class LO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ci.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ci.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ci.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw mo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UO extends LO{initXhr(){this.xhr_.responseType="text"}}function Wn(){return new UO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Iu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(cS(i.status,[]))if(s)i=rS();else{this.sleepTime=Math.max(this.sleepTime*2,LD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=NO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=AO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Wn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=W_*this._chunkMultiplier,n=new Rc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=xO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Wn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){W_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=gS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Wn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=PO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ed(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new OO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ed(this._state)){case Ot.SUCCESS:Ji(this._resolve.bind(null,this.snapshot))();break;case Ot.CANCELED:case Ot.ERROR:const n=this._reject;Ji(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ed(this._state)){case Ot.RUNNING:case Ot.PAUSED:e.next&&Ji(e.next.bind(e,this.snapshot))();break;case Ot.SUCCESS:e.complete&&Ji(e.complete.bind(e))();break;case Ot.CANCELED:case Ot.ERROR:e.error&&Ji(e.error.bind(e,this._error))();break;default:e.error&&Ji(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pS(this._location.path)}get storage(){return this._service}get parent(){const e=fO(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aS(e)}}function MO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new vS(t,new er(e),n)}function FO(t){const e={prefixes:[],items:[]};return yS(t,e).then(()=>e)}async function yS(t,e,n){const i=await wS(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await yS(t,e,i.nextPageToken)}function wS(t,e){e!=null&&typeof e.maxResults=="number"&&Hh("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=CO(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Wn)}function BO(t){t._throwIfRoot("getMetadata");const e=gS(t.storage,t._location,Iu());return t.storage.makeRequestWithTokens(e,Wn)}function jO(t,e){t._throwIfRoot("updateMetadata");const n=kO(t.storage,t._location,e,Iu());return t.storage.makeRequestWithTokens(n,Wn)}function $O(t){t._throwIfRoot("getDownloadURL");const e=TO(t.storage,t._location,Iu());return t.storage.makeRequestWithTokens(e,Wn).then(n=>{if(n===null)throw GD();return n})}function WO(t){t._throwIfRoot("deleteObject");const e=RO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Wn)}function ES(t,e){const n=pO(t._location.path,e),r=new bt(t._location.bucket,n);return new Fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){return/^[A-Za-z]+:\/\//.test(t)}function VO(t,e){return new Fi(t,e)}function SS(t,e){if(t instanceof sm){const n=t;if(n._bucket==null)throw zD();const r=new Fi(n,n._bucket);return e!=null?SS(r,e):r}else return e!==void 0?ES(t,e):t}function GO(t,e){if(e&&zO(e)){if(t instanceof sm)return VO(t,e);throw Cs("To use ref(service, url), the first argument must be a Storage instance.")}else return SS(t,e)}function z_(t,e){const n=e==null?void 0:e[nS];return n==null?null:bt.makeFromBucketSpec(n,t)}function HO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_w(i,t.app.options.projectId))}class sm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=OD,this._requests=new Set,i!=null?this._bucket=bt.makeFromBucketSpec(i,this._host):this._bucket=z_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=z_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new qD(oS());{const o=iO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const V_="@firebase/storage",G_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="storage";function KO(t,e,n){return t=Q(t),MO(t,e,n)}function QO(t){return t=Q(t),BO(t)}function YO(t,e){return t=Q(t),jO(t,e)}function JO(t,e){return t=Q(t),wS(t,e)}function XO(t){return t=Q(t),FO(t)}function ZO(t){return t=Q(t),$O(t)}function eL(t){return t=Q(t),WO(t)}function H_(t,e){return t=Q(t),GO(t,e)}function tL(t,e){return ES(t,e)}function nL(t,e,n,r={}){HO(t,e,n,r)}function rL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sm(n,r,i,e,yr)}function iL(){mr(new sn(qO,rL,"PUBLIC").setMultipleInstances(!0)),_n(V_,G_,""),_n(V_,G_,"esm2017")}iL();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new ml(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new ml(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new ml(o,this,this._ref)):s={next:n.next?o=>n.next(new ml(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class K_{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new ur(e,this._service))}get items(){return this._delegate.items.map(e=>new ur(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=tL(this._delegate,e);return new ur(n,this.storage)}get root(){return new ur(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new ur(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new q_(KO(this._delegate,e,n),this)}putString(e,n=mn.RAW,r){this._throwIfRoot("putString");const i=uS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new q_(new vS(this._delegate,new er(i.data,!0),s),this)}listAll(){return XO(this._delegate).then(e=>new K_(e,this.storage))}list(e){return JO(this._delegate,e||void 0).then(n=>new K_(n,this.storage))}getMetadata(){return QO(this._delegate)}updateMetadata(e){return YO(this._delegate,e)}getDownloadURL(){return ZO(this._delegate)}delete(){return this._throwIfRoot("delete"),eL(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw aS(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Q_(e))throw Cs("ref() expected a child path but got a URL, use refFromURL instead.");return new ur(H_(this._delegate,e),this)}refFromURL(e){if(!Q_(e))throw Cs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{bt.makeFromUrl(e,this._delegate.host)}catch{throw Cs("refFromUrl() expected a valid full URL but got an invalid one.")}return new ur(H_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){nL(this._delegate,e,n,r)}}function Q_(t){return/^[A-Za-z]+:\/\//.test(t)}const sL="@firebase/storage-compat",oL="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="storage-compat";function lL(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new IS(n,r)}function cL(t){const e={TaskState:Ot,TaskEvent:DO,StringFormat:mn,Storage:IS,Reference:ur};t.INTERNAL.registerComponent(new sn(aL,lL,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(sL,oL)}cL(Y);const uL={apiKey:"AIzaSyBzKwHZ5Qa4NfxeBUn5-KoymCUI1Z0EyXE",authDomain:"pixpair.firebaseapp.com",databaseURL:"https://pixpair-default-rtdb.firebaseio.com",projectId:"pixpair",storageBucket:"pixpair.appspot.com",messagingSenderId:"743134014753",appId:"1:743134014753:web:da56b2391f4eb69a63a260",measurementId:"G-08ST8X93R2"};Y.apps.length||Y.initializeApp(uL);const qh=Y.auth(),st=Y.database(),dL=({onCreateSession:t,onJoinSession:e,onSignOut:n})=>{const[r,i]=j.useState(""),[s,o]=j.useState(""),[a,l]=j.useState(!1),[c,d]=j.useState(null),[u,h]=j.useState(!1);j.useEffect(()=>{try{const f=new URLSearchParams(window.location.search).get("sessionId");f&&Y.auth().currentUser?g(f):f&&localStorage.setItem("pendingSessionId",f)}catch(p){console.error("Error in session URL processing:",p),d("Could not process session information from URL.")}},[]),j.useEffect(()=>{try{const p=localStorage.getItem("pendingSessionId"),f=Y.auth().currentUser;p&&f&&(g(p),localStorage.removeItem("pendingSessionId"))}catch(p){console.error("Error checking pending session:",p)}},[Y.auth().currentUser]);const g=async p=>{if(p)try{if(d(null),h(!0),!(await Y.database().ref(`sessions/${p}`).once("value")).val()){d("Session not found. Please check the ID and try again.");return}const y=Y.auth().currentUser,C=y==null?void 0:y.uid;if(!C){d("You must be signed in to join a session.");return}await Y.database().ref(`sessions/${p}/members/${C}`).set({joinedAt:Y.database.ServerValue.TIMESTAMP}),typeof e=="function"&&e(p)}catch(f){console.error("Error joining session:",f),d("Failed to join session. Please try again.")}finally{h(!1)}},_=async p=>{p.preventDefault(),d(null),h(!0);try{if(a?await Y.auth().createUserWithEmailAndPassword(r,s):await Y.auth().signInWithEmailAndPassword(r,s),!Y.auth().currentUser)throw new Error("Authentication succeeded but user is not available.")}catch(f){console.error("Authentication error:",f),d(f.message||"Authentication failed. Please try again.")}finally{h(!1)}},v=async()=>{d(null),h(!0);try{const p=new Y.auth.GoogleAuthProvider;if(await Y.auth().signInWithPopup(p),!Y.auth().currentUser)throw new Error("Google authentication succeeded but user is not available.")}catch(p){console.error("Google auth error:",p),d(p.message||"Google sign-in failed. Please try again.")}finally{h(!1)}},E=async()=>{d(null),h(!0);try{const p=await Y.auth().signInAnonymously();if(console.log("Anonymous authentication successful",p),await new Promise(m=>setTimeout(m,1e3)),!Y.auth().currentUser)throw new Error("Anonymous authentication succeeded but user is not available.")}catch(p){console.error("Anonymous auth error:",p),p.message.includes("PERMISSION_DENIED")?d("Database permission denied. Please check Firebase rules."):d(p.message||"Guest sign-in failed. Please try again.")}finally{h(!1)}};return I.jsxs("div",{className:"auth-screen",children:[I.jsx("div",{className:"auth-header",children:I.jsx("h1",{children:"PixCrab"})}),I.jsxs("div",{className:"auth-container",children:[c&&I.jsx("div",{className:"error",children:c}),I.jsxs("div",{className:"auth-options",children:[I.jsx("button",{className:"btn btn-google rainbow-button w-full",onClick:v,disabled:u,"aria-label":"Continue with Google",children:"Continue with Google"}),I.jsx("button",{className:"btn btn-text",onClick:E,disabled:u,"aria-label":"Continue as Guest",children:"Continue as Guest"}),I.jsx("div",{className:"auth-separator",children:I.jsx("span",{children:"or"})})]}),I.jsxs("form",{onSubmit:_,children:[I.jsx("h2",{children:a?"Create Account":"Sign In"}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"email",children:"Email"}),I.jsx("input",{type:"email",id:"email",name:"email",value:r,onChange:p=>i(p.target.value),required:!0,autoComplete:"email","aria-required":"true"})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"password",children:"Password"}),I.jsx("input",{type:"password",id:"password",name:"password",value:s,onChange:p=>o(p.target.value),required:!0,autoComplete:a?"new-password":"current-password","aria-required":"true"})]}),I.jsx("button",{type:"submit",className:"auth-form-button",disabled:u,children:a?"Sign Up":"Sign In"})]}),I.jsx("button",{className:"btn btn-secondary",onClick:()=>l(!a),disabled:u,children:a?"Already have an account? Sign In":"Need an account? Sign Up"})]})]})},hL=({onCreateSession:t,onJoinSession:e,onSignOut:n,onViewAlbum:r,initialSessionId:i})=>{const[s,o]=j.useState(""),[a,l]=j.useState(null),[c,d]=j.useState(null),[u,h]=j.useState(""),[g,_]=j.useState(null),v=j.useRef(null);j.useEffect(()=>{i&&f(i)},[i]),j.useEffect(()=>{c&&v.current&&m(c)},[c]),j.useEffect(()=>{const C=qh.onAuthStateChanged(T=>_(T));return()=>C()},[]);const E=async()=>{try{l(null),h("");const C=Y.auth().currentUser;if(!C){setTimeout(()=>{const T=Y.auth().currentUser;if(!T){l("Authentication required. Please sign in before creating a session.");return}p(T)},1e3);return}p(C)}catch(C){console.error("Error creating session:",C),l("Failed to create session. Please try again.")}},p=async C=>{try{const T=Math.random().toString(36).substring(2,8).toUpperCase(),b=C.uid;await Y.database().ref(`/sessions/${T}`).set({id:T,owner:b,created:Y.database.ServerValue.TIMESTAMP,status:"active"}),await Y.database().ref(`/sessions/${T}/members/${b}`).set(!0),console.log("Session created successfully:",T),d(T),typeof t=="function"&&t(T)}catch(T){console.error("Error in session creation:",T),T.message.includes("PERMISSION_DENIED")?l("Database permission denied. Please check Firebase rules."):l("Failed to create session. Please try again.")}},f=async C=>{try{l(null),h("");const T=C||s;if(!T){l("Please enter a session ID");return}const b=Y.auth().currentUser;if(!b){l("Authentication required. Please sign in before joining a session.");return}if(!(await Y.database().ref(`sessions/${T}`).once("value")).val()){l("Session not found. Please check the ID and try again.");return}const W=b.uid;await Y.database().ref(`sessions/${T}/members/${W}`).set({joinedAt:Y.database.ServerValue.TIMESTAMP}),d(T),typeof e=="function"&&e(T)}catch(T){console.error("Error joining session:",T),l("Failed to join session. Please try again.")}},m=C=>{if(v.current){v.current.innerHTML="";const T=`${window.location.origin}${window.location.pathname}?sessionId=${C}`;try{new QRCode(v.current,{text:T,width:256,height:256,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}catch(b){console.error("Error generating QR code:",b),v.current&&(v.current.innerHTML='<p style="color: red;">Failed to generate QR code</p>')}}},y=()=>{c&&navigator.clipboard.writeText(c).then(()=>{h("Copied!"),setTimeout(()=>h(""),2e3)}).catch(C=>{console.error("Failed to copy:",C),h("Failed to copy")})};return I.jsxs("div",{className:"session-setup pt-20",children:[I.jsx("h1",{className:"text-3xl font-bold mt-4",children:g?g.isAnonymous?"Hi Crabbie":`Hi ${(g.displayName||g.email.split("@")[0]).split(" ")[0]}`:"Welcome"}),I.jsx("p",{className:"text-gray-600 mt-2",children:"Create a new session or join an existing one"}),a&&I.jsx("div",{className:"error",children:a}),I.jsxs("div",{className:"session-actions",children:[I.jsx("div",{className:"w-full flex justify-center",children:I.jsx("button",{className:"btn btn-primary rainbow-button",onClick:E,"aria-label":"Create New Session",style:{width:"100%",maxWidth:"20rem"},children:"Create New Session"})}),I.jsxs("div",{className:"session-join w-full flex flex-col items-center",children:[I.jsx("label",{htmlFor:"sessionId",className:"sr-only",children:"Enter Session ID"}),I.jsx("div",{className:"w-full max-w-xs",children:I.jsx("input",{id:"sessionId",name:"sessionId",type:"text",placeholder:"Enter Session ID",value:s,onChange:C=>o(C.target.value),autoComplete:"off","aria-label":"Session ID",className:"w-full p-2 border rounded"})}),I.jsx("div",{className:"w-full flex justify-center",children:I.jsx("button",{className:"album-button w-full max-w-xs",onClick:()=>f(),"aria-label":"Join Session",children:"Join Session"})})]}),I.jsx("div",{className:"w-full flex justify-center mt-4",children:I.jsx("button",{className:"album-button w-full max-w-xs",onClick:r,"aria-label":"View Photo Album",children:"View Photo Album"})})]}),c&&I.jsxs("div",{className:"session-info",children:[I.jsxs("div",{className:"session-id-container",children:[I.jsx("span",{className:"session-id-label",children:"Session ID:"}),I.jsx("span",{className:"session-id",children:c}),I.jsx("button",{className:"btn btn-icon",onClick:y,title:"Copy Session ID","aria-label":"Copy Session ID",children:"Copy"}),u&&I.jsx("span",{className:"copy-status","aria-live":"polite",children:u})]}),I.jsx("p",{children:"Scan this QR code to join the session:"}),I.jsx("div",{className:"qr-code-container",ref:v,"aria-label":"QR code to join session"})]}),I.jsx("button",{className:"btn btn-text",onClick:n,"aria-label":"Sign Out",children:"Sign Out"})]})};function fL(t){return Object.prototype.toString.call(t)==="[object Object]"}function Y_(t){return fL(t)||Array.isArray(t)}function pL(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function om(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==s?!1:n.every(o=>{const a=t[o],l=e[o];return typeof a=="function"?`${a}`==`${l}`:!Y_(a)||!Y_(l)?a===l:om(a,l)})}function J_(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function mL(t,e){if(t.length!==e.length)return!1;const n=J_(t),r=J_(e);return n.every((i,s)=>{const o=r[s];return om(i,o)})}function am(t){return typeof t=="number"}function Kh(t){return typeof t=="string"}function ku(t){return typeof t=="boolean"}function X_(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ve(t){return Math.abs(t)}function lm(t){return Math.sign(t)}function jo(t,e){return Ve(t-e)}function gL(t,e){if(t===0||e===0||Ve(t)<=Ve(e))return 0;const n=jo(Ve(t),Ve(e));return Ve(n/t)}function _L(t){return Math.round(t*100)/100}function Sa(t){return Ia(t).map(Number)}function An(t){return t[Ha(t)]}function Ha(t){return Math.max(0,t.length-1)}function cm(t,e){return e===Ha(t)}function Z_(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function Ia(t){return Object.keys(t)}function CS(t,e){return[t,e].reduce((n,r)=>(Ia(r).forEach(i=>{const s=n[i],o=r[i],a=X_(s)&&X_(o);n[i]=a?CS(s,o):o}),n),{})}function Qh(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function vL(t,e){const n={start:r,center:i,end:s};function r(){return 0}function i(l){return s(l)/2}function s(l){return e-l}function o(l,c){return Kh(t)?n[t](l):t(e,l,c)}return{measure:o}}function Ca(){let t=[];function e(i,s,o,a={passive:!0}){let l;if("addEventListener"in i)i.addEventListener(s,o,a),l=()=>i.removeEventListener(s,o,a);else{const c=i;c.addListener(o),l=()=>c.removeListener(o)}return t.push(l),r}function n(){t=t.filter(i=>i())}const r={add:e,clear:n};return r}function yL(t,e,n,r){const i=Ca(),s=1e3/60;let o=null,a=0,l=0;function c(){i.add(t,"visibilitychange",()=>{t.hidden&&_()})}function d(){g(),i.clear()}function u(E){if(!l)return;o||(o=E,n(),n());const p=E-o;for(o=E,a+=p;a>=s;)n(),a-=s;const f=a/s;r(f),l&&(l=e.requestAnimationFrame(u))}function h(){l||(l=e.requestAnimationFrame(u))}function g(){e.cancelAnimationFrame(l),o=null,a=0,l=0}function _(){o=null,a=0}return{init:c,destroy:d,start:h,stop:g,update:n,render:r}}function wL(t,e){const n=e==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",o=!r&&n?-1:1,a=d(),l=u();function c(_){const{height:v,width:E}=_;return r?v:E}function d(){return r?"top":n?"right":"left"}function u(){return r?"bottom":n?"left":"right"}function h(_){return _*o}return{scroll:i,cross:s,startEdge:a,endEdge:l,measureSize:c,direction:h}}function Bi(t=0,e=0){const n=Ve(t-e);function r(c){return c<t}function i(c){return c>e}function s(c){return r(c)||i(c)}function o(c){return s(c)?r(c)?t:e:c}function a(c){return n?c-n*Math.ceil((c-e)/n):c}return{length:n,max:e,min:t,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function TS(t,e,n){const{constrain:r}=Bi(0,t),i=t+1;let s=o(e);function o(h){return n?Ve((i+h)%i):r(h)}function a(){return s}function l(h){return s=o(h),u}function c(h){return d().set(a()+h)}function d(){return TS(t,a(),n)}const u={get:a,set:l,add:c,clone:d};return u}function EL(t,e,n,r,i,s,o,a,l,c,d,u,h,g,_,v,E,p,f){const{cross:m,direction:y}=t,C=["INPUT","SELECT","TEXTAREA"],T={passive:!1},b=Ca(),N=Ca(),V=Bi(50,225).constrain(g.measure(20)),W={mouse:300,touch:400},ce={mouse:500,touch:600},ge=_?43:25;let se=!1,Oe=0,Ze=0,At=!1,_t=!1,L=!1,K=!1;function ee(S){if(!f)return;function O(B){(ku(f)||f(S,B))&&H(B)}const U=e;b.add(U,"dragstart",B=>B.preventDefault(),T).add(U,"touchmove",()=>{},T).add(U,"touchend",()=>{}).add(U,"touchstart",O).add(U,"mousedown",O).add(U,"touchcancel",oe).add(U,"contextmenu",oe).add(U,"click",J,!0)}function P(){b.clear(),N.clear()}function R(){const S=K?n:e;N.add(S,"touchmove",ie,T).add(S,"touchend",oe).add(S,"mousemove",ie,T).add(S,"mouseup",oe)}function $(S){const O=S.nodeName||"";return C.includes(O)}function F(){return(_?ce:W)[K?"mouse":"touch"]}function ae(S,O){const U=u.add(lm(S)*-1),B=d.byDistance(S,!_).distance;return _||Ve(S)<V?B:E&&O?B*.5:d.byIndex(U.get(),0).distance}function H(S){const O=Qh(S,r);K=O,L=_&&O&&!S.buttons&&se,se=jo(i.get(),o.get())>=2,!(O&&S.button!==0)&&($(S.target)||(At=!0,s.pointerDown(S),c.useFriction(0).useDuration(0),i.set(o),R(),Oe=s.readPoint(S),Ze=s.readPoint(S,m),h.emit("pointerDown")))}function ie(S){if(!Qh(S,r)&&S.touches.length>=2)return oe(S);const U=s.readPoint(S),B=s.readPoint(S,m),X=jo(U,Oe),M=jo(B,Ze);if(!_t&&!K&&(!S.cancelable||(_t=X>M,!_t)))return oe(S);const q=s.pointerMove(S);X>v&&(L=!0),c.useFriction(.3).useDuration(.75),a.start(),i.add(y(q)),S.preventDefault()}function oe(S){const U=d.byDistance(0,!1).index!==u.get(),B=s.pointerUp(S)*F(),X=ae(y(B),U),M=gL(B,X),q=ge-10*M,le=p+M/50;_t=!1,At=!1,N.clear(),c.useDuration(q).useFriction(le),l.distance(X,!_),K=!1,h.emit("pointerUp")}function J(S){L&&(S.stopPropagation(),S.preventDefault(),L=!1)}function w(){return At}return{init:ee,destroy:P,pointerDown:w}}function SL(t,e){let r,i;function s(u){return u.timeStamp}function o(u,h){const _=`client${(h||t.scroll)==="x"?"X":"Y"}`;return(Qh(u,e)?u:u.touches[0])[_]}function a(u){return r=u,i=u,o(u)}function l(u){const h=o(u)-o(i),g=s(u)-s(r)>170;return i=u,g&&(r=u),h}function c(u){if(!r||!i)return 0;const h=o(i)-o(r),g=s(u)-s(r),_=s(u)-s(i)>170,v=h/g;return g&&!_&&Ve(v)>.1?v:0}return{pointerDown:a,pointerMove:l,pointerUp:c,readPoint:o}}function IL(){function t(n){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:o}=n;return{top:r,right:i+s,bottom:r+o,left:i,width:s,height:o}}return{measure:t}}function CL(t){function e(r){return t*(r/100)}return{measure:e}}function TL(t,e,n,r,i,s,o){const a=[t].concat(r);let l,c,d=[],u=!1;function h(E){return i.measureSize(o.measure(E))}function g(E){if(!s)return;c=h(t),d=r.map(h);function p(f){for(const m of f){if(u)return;const y=m.target===t,C=r.indexOf(m.target),T=y?c:d[C],b=h(y?t:r[C]);if(Ve(b-T)>=.5){E.reInit(),e.emit("resize");break}}}l=new ResizeObserver(f=>{(ku(s)||s(E,f))&&p(f)}),n.requestAnimationFrame(()=>{a.forEach(f=>l.observe(f))})}function _(){u=!0,l&&l.disconnect()}return{init:g,destroy:_}}function kL(t,e,n,r,i,s){let o=0,a=0,l=i,c=s,d=t.get(),u=0;function h(){const T=r.get()-t.get(),b=!l;let N=0;return b?(o=0,n.set(r),t.set(r),N=T):(n.set(t),o+=T/l,o*=c,d+=o,t.add(o),N=d-u),a=lm(N),u=d,C}function g(){const T=r.get()-e.get();return Ve(T)<.001}function _(){return l}function v(){return a}function E(){return o}function p(){return m(i)}function f(){return y(s)}function m(T){return l=T,C}function y(T){return c=T,C}const C={direction:v,duration:_,velocity:E,seek:h,settled:g,useBaseFriction:f,useBaseDuration:p,useFriction:y,useDuration:m};return C}function RL(t,e,n,r,i){const s=i.measure(10),o=i.measure(50),a=Bi(.1,.99);let l=!1;function c(){return!(l||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function d(g){if(!c())return;const _=t.reachedMin(e.get())?"min":"max",v=Ve(t[_]-e.get()),E=n.get()-e.get(),p=a.constrain(v/o);n.subtract(E*p),!g&&Ve(E)<s&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function u(g){l=!g}return{shouldConstrain:c,constrain:d,toggleActive:u}}function bL(t,e,n,r,i){const s=Bi(-e+t,0),o=u(),a=d(),l=h();function c(_,v){return jo(_,v)<=1}function d(){const _=o[0],v=An(o),E=o.lastIndexOf(_),p=o.indexOf(v)+1;return Bi(E,p)}function u(){return n.map((_,v)=>{const{min:E,max:p}=s,f=s.constrain(_),m=!v,y=cm(n,v);return m?p:y||c(E,f)?E:c(p,f)?p:f}).map(_=>parseFloat(_.toFixed(3)))}function h(){if(e<=t+i)return[s.max];if(r==="keepSnaps")return o;const{min:_,max:v}=a;return o.slice(_,v)}return{snapsContained:l,scrollContainLimit:a}}function PL(t,e,n){const r=e[0],i=n?r-t:An(e);return{limit:Bi(i,r)}}function NL(t,e,n,r){const s=e.min+.1,o=e.max+.1,{reachedMin:a,reachedMax:l}=Bi(s,o);function c(h){return h===1?l(n.get()):h===-1?a(n.get()):!1}function d(h){if(!c(h))return;const g=t*(h*-1);r.forEach(_=>_.add(g))}return{loop:d}}function AL(t){const{max:e,length:n}=t;function r(s){const o=s-e;return n?o/-n:0}return{get:r}}function xL(t,e,n,r,i){const{startEdge:s,endEdge:o}=t,{groupSlides:a}=i,l=u().map(e.measure),c=h(),d=g();function u(){return a(r).map(v=>An(v)[o]-v[0][s]).map(Ve)}function h(){return r.map(v=>n[s]-v[s]).map(v=>-Ve(v))}function g(){return a(c).map(v=>v[0]).map((v,E)=>v+l[E])}return{snaps:c,snapsAligned:d}}function DL(t,e,n,r,i,s){const{groupSlides:o}=i,{min:a,max:l}=r,c=d();function d(){const h=o(s),g=!t||e==="keepSnaps";return n.length===1?[s]:g?h:h.slice(a,l).map((_,v,E)=>{const p=!v,f=cm(E,v);if(p){const m=An(E[0])+1;return Z_(m)}if(f){const m=Ha(s)-An(E)[0]+1;return Z_(m,An(E)[0])}return _})}return{slideRegistry:c}}function OL(t,e,n,r,i){const{reachedAny:s,removeOffset:o,constrain:a}=r;function l(_){return _.concat().sort((v,E)=>Ve(v)-Ve(E))[0]}function c(_){const v=t?o(_):a(_),E=e.map((f,m)=>({diff:d(f-v,0),index:m})).sort((f,m)=>Ve(f.diff)-Ve(m.diff)),{index:p}=E[0];return{index:p,distance:v}}function d(_,v){const E=[_,_+n,_-n];if(!t)return _;if(!v)return l(E);const p=E.filter(f=>lm(f)===v);return p.length?l(p):An(E)-n}function u(_,v){const E=e[_]-i.get(),p=d(E,v);return{index:_,distance:p}}function h(_,v){const E=i.get()+_,{index:p,distance:f}=c(E),m=!t&&s(E);if(!v||m)return{index:p,distance:_};const y=e[p]-f,C=_+d(y,0);return{index:p,distance:C}}return{byDistance:h,byIndex:u,shortcut:d}}function LL(t,e,n,r,i,s,o){function a(u){const h=u.distance,g=u.index!==e.get();s.add(h),h&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),g&&(n.set(e.get()),e.set(u.index),o.emit("select"))}function l(u,h){const g=i.byDistance(u,h);a(g)}function c(u,h){const g=e.clone().set(u),_=i.byIndex(g.get(),h);a(_)}return{distance:l,index:c}}function UL(t,e,n,r,i,s,o,a){const l={passive:!0,capture:!0};let c=0;function d(g){if(!a)return;function _(v){if(new Date().getTime()-c>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const f=n.findIndex(m=>m.includes(v));am(f)&&(i.useDuration(0),r.index(f,0),o.emit("slideFocus"))}s.add(document,"keydown",u,!1),e.forEach((v,E)=>{s.add(v,"focus",p=>{(ku(a)||a(g,p))&&_(E)},l)})}function u(g){g.code==="Tab"&&(c=new Date().getTime())}return{init:d}}function So(t){let e=t;function n(){return e}function r(l){e=o(l)}function i(l){e+=o(l)}function s(l){e-=o(l)}function o(l){return am(l)?l:l.get()}return{get:n,set:r,add:i,subtract:s}}function kS(t,e){const n=t.scroll==="x"?o:a,r=e.style;let i=null,s=!1;function o(h){return`translate3d(${h}px,0px,0px)`}function a(h){return`translate3d(0px,${h}px,0px)`}function l(h){if(s)return;const g=_L(t.direction(h));g!==i&&(r.transform=n(g),i=g)}function c(h){s=!h}function d(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:d,to:l,toggleActive:c}}function ML(t,e,n,r,i,s,o,a,l){const d=Sa(i),u=Sa(i).reverse(),h=p().concat(f());function g(b,N){return b.reduce((V,W)=>V-i[W],N)}function _(b,N){return b.reduce((V,W)=>g(V,N)>0?V.concat([W]):V,[])}function v(b){return s.map((N,V)=>({start:N-r[V]+.5+b,end:N+e-.5+b}))}function E(b,N,V){const W=v(N);return b.map(ce=>{const ge=V?0:-n,se=V?n:0,Oe=V?"end":"start",Ze=W[ce][Oe];return{index:ce,loopPoint:Ze,slideLocation:So(-1),translate:kS(t,l[ce]),target:()=>a.get()>Ze?ge:se}})}function p(){const b=o[0],N=_(u,b);return E(N,n,!1)}function f(){const b=e-o[0]-1,N=_(d,b);return E(N,-n,!0)}function m(){return h.every(({index:b})=>{const N=d.filter(V=>V!==b);return g(N,e)<=.1})}function y(){h.forEach(b=>{const{target:N,translate:V,slideLocation:W}=b,ce=N();ce!==W.get()&&(V.to(ce),W.set(ce))})}function C(){h.forEach(b=>b.translate.clear())}return{canLoop:m,clear:C,loop:y,loopPoints:h}}function FL(t,e,n){let r,i=!1;function s(l){if(!n)return;function c(d){for(const u of d)if(u.type==="childList"){l.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(d=>{i||(ku(n)||n(l,d))&&c(d)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:s,destroy:o}}function BL(t,e,n,r){const i={};let s=null,o=null,a,l=!1;function c(){a=new IntersectionObserver(_=>{l||(_.forEach(v=>{const E=e.indexOf(v.target);i[E]=v}),s=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(_=>a.observe(_))}function d(){a&&a.disconnect(),l=!0}function u(_){return Ia(i).reduce((v,E)=>{const p=parseInt(E),{isIntersecting:f}=i[p];return(_&&f||!_&&!f)&&v.push(p),v},[])}function h(_=!0){if(_&&s)return s;if(!_&&o)return o;const v=u(_);return _&&(s=v),_||(o=v),v}return{init:c,destroy:d,get:h}}function jL(t,e,n,r,i,s){const{measureSize:o,startEdge:a,endEdge:l}=t,c=n[0]&&i,d=_(),u=v(),h=n.map(o),g=E();function _(){if(!c)return 0;const f=n[0];return Ve(e[a]-f[a])}function v(){if(!c)return 0;const f=s.getComputedStyle(An(r));return parseFloat(f.getPropertyValue(`margin-${l}`))}function E(){return n.map((f,m,y)=>{const C=!m,T=cm(y,m);return C?h[m]+d:T?h[m]+u:y[m+1][a]-f[a]}).map(Ve)}return{slideSizes:h,slideSizesWithGaps:g,startGap:d,endGap:u}}function $L(t,e,n,r,i,s,o,a,l){const{startEdge:c,endEdge:d,direction:u}=t,h=am(n);function g(p,f){return Sa(p).filter(m=>m%f===0).map(m=>p.slice(m,m+f))}function _(p){return p.length?Sa(p).reduce((f,m,y)=>{const C=An(f)||0,T=C===0,b=m===Ha(p),N=i[c]-s[C][c],V=i[c]-s[m][d],W=!r&&T?u(o):0,ce=!r&&b?u(a):0,ge=Ve(V-ce-(N+W));return y&&ge>e+l&&f.push(m),b&&f.push(p.length),f},[]).map((f,m,y)=>{const C=Math.max(y[m-1]||0);return p.slice(C,f)}):[]}function v(p){return h?g(p,n):_(p)}return{groupSlides:v}}function WL(t,e,n,r,i,s,o){const{align:a,axis:l,direction:c,startIndex:d,loop:u,duration:h,dragFree:g,dragThreshold:_,inViewThreshold:v,slidesToScroll:E,skipSnaps:p,containScroll:f,watchResize:m,watchSlides:y,watchDrag:C,watchFocus:T}=s,b=2,N=IL(),V=N.measure(e),W=n.map(N.measure),ce=wL(l,c),ge=ce.measureSize(V),se=CL(ge),Oe=vL(a,ge),Ze=!u&&!!f,At=u||!!f,{slideSizes:_t,slideSizesWithGaps:L,startGap:K,endGap:ee}=jL(ce,V,W,n,At,i),P=$L(ce,ge,E,u,V,W,K,ee,b),{snaps:R,snapsAligned:$}=xL(ce,Oe,V,W,P),F=-An(R)+An(L),{snapsContained:ae,scrollContainLimit:H}=bL(ge,F,$,f,b),ie=Ze?ae:$,{limit:oe}=PL(F,ie,u),J=TS(Ha(ie),d,u),w=J.clone(),k=Sa(n),S=({dragHandler:ue,scrollBody:Ne,scrollBounds:et,options:{loop:Z}})=>{Z||et.constrain(ue.pointerDown()),Ne.seek()},O=({scrollBody:ue,translate:Ne,location:et,offsetLocation:Z,previousLocation:Se,scrollLooper:Be,slideLooper:Yt,dragHandler:Qe,animation:Ct,eventHandler:Jn,scrollBounds:Xs,options:{loop:dm}},hm)=>{const fm=ue.settled(),PS=!Xs.shouldConstrain(),pm=dm?fm:fm&&PS,mm=pm&&!Qe.pointerDown();mm&&Ct.stop();const NS=et.get()*hm+Se.get()*(1-hm);Z.set(NS),dm&&(Be.loop(ue.direction()),Yt.loop()),Ne.to(Z.get()),mm&&Jn.emit("settle"),pm||Jn.emit("scroll")},U=yL(r,i,()=>S(we),ue=>O(we,ue)),B=.68,X=ie[J.get()],M=So(X),q=So(X),le=So(X),ye=So(X),re=kL(M,le,q,ye,h,B),_e=OL(u,ie,F,oe,ye),de=LL(U,J,w,re,_e,ye,o),Ke=AL(oe),be=Ca(),G=BL(e,n,o,v),{slideRegistry:Ee}=DL(Ze,f,ie,H,P,k),Le=UL(t,n,Ee,de,re,be,o,T),we={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:V,slideRects:W,animation:U,axis:ce,dragHandler:EL(ce,t,r,i,ye,SL(ce,i),M,U,de,re,_e,J,o,se,g,_,p,B,C),eventStore:be,percentOfView:se,index:J,indexPrevious:w,limit:oe,location:M,offsetLocation:le,previousLocation:q,options:s,resizeHandler:TL(e,o,i,n,ce,m,N),scrollBody:re,scrollBounds:RL(oe,le,ye,re,se),scrollLooper:NL(F,oe,le,[M,le,q,ye]),scrollProgress:Ke,scrollSnapList:ie.map(Ke.get),scrollSnaps:ie,scrollTarget:_e,scrollTo:de,slideLooper:ML(ce,ge,F,_t,L,R,ie,le,n),slideFocus:Le,slidesHandler:FL(e,o,y),slidesInView:G,slideIndexes:k,slideRegistry:Ee,slidesToScroll:P,target:ye,translate:kS(ce,e)};return we}function zL(){let t={},e;function n(c){e=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(d=>d(e,c)),l}function s(c,d){return t[c]=r(c).concat([d]),l}function o(c,d){return t[c]=r(c).filter(u=>u!==d),l}function a(){t={}}const l={init:n,emit:i,off:o,on:s,clear:a};return l}const VL={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function GL(t){function e(s,o){return CS(s,o||{})}function n(s){const o=s.breakpoints||{},a=Ia(o).filter(l=>t.matchMedia(l).matches).map(l=>o[l]).reduce((l,c)=>e(l,c),{});return e(s,a)}function r(s){return s.map(o=>Ia(o.breakpoints||{})).reduce((o,a)=>o.concat(a),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function HL(t){let e=[];function n(s,o){return e=o.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),e.forEach(a=>a.init(s,t)),o.reduce((a,l)=>Object.assign(a,{[l.name]:l}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:n,destroy:r}}function bc(t,e,n){const r=t.ownerDocument,i=r.defaultView,s=GL(i),o=HL(s),a=Ca(),l=zL(),{mergeOptions:c,optionsAtMedia:d,optionsMediaQueries:u}=s,{on:h,off:g,emit:_}=l,v=ce;let E=!1,p,f=c(VL,bc.globalOptions),m=c(f),y=[],C,T,b;function N(){const{container:k,slides:S}=m;T=(Kh(k)?t.querySelector(k):k)||t.children[0];const U=Kh(S)?T.querySelectorAll(S):S;b=[].slice.call(U||T.children)}function V(k){const S=WL(t,T,b,r,i,k,l);if(k.loop&&!S.slideLooper.canLoop()){const O=Object.assign({},k,{loop:!1});return V(O)}return S}function W(k,S){E||(f=c(f,k),m=d(f),y=S||y,N(),p=V(m),u([f,...y.map(({options:O})=>O)]).forEach(O=>a.add(O,"change",ce)),m.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(w),p.eventHandler.init(w),p.resizeHandler.init(w),p.slidesHandler.init(w),p.options.loop&&p.slideLooper.loop(),T.offsetParent&&b.length&&p.dragHandler.init(w),C=o.init(w,y)))}function ce(k,S){const O=P();ge(),W(c({startIndex:O},k),S),l.emit("reInit")}function ge(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),o.destroy(),a.clear()}function se(){E||(E=!0,a.clear(),ge(),l.emit("destroy"),l.clear())}function Oe(k,S,O){!m.active||E||(p.scrollBody.useBaseFriction().useDuration(S===!0?0:m.duration),p.scrollTo.index(k,O||0))}function Ze(k){const S=p.index.add(1).get();Oe(S,k,-1)}function At(k){const S=p.index.add(-1).get();Oe(S,k,1)}function _t(){return p.index.add(1).get()!==P()}function L(){return p.index.add(-1).get()!==P()}function K(){return p.scrollSnapList}function ee(){return p.scrollProgress.get(p.offsetLocation.get())}function P(){return p.index.get()}function R(){return p.indexPrevious.get()}function $(){return p.slidesInView.get()}function F(){return p.slidesInView.get(!1)}function ae(){return C}function H(){return p}function ie(){return t}function oe(){return T}function J(){return b}const w={canScrollNext:_t,canScrollPrev:L,containerNode:oe,internalEngine:H,destroy:se,off:g,on:h,emit:_,plugins:ae,previousScrollSnap:R,reInit:v,rootNode:ie,scrollNext:Ze,scrollPrev:At,scrollProgress:ee,scrollSnapList:K,scrollTo:Oe,selectedScrollSnap:P,slideNodes:J,slidesInView:$,slidesNotInView:F};return W(e,n),setTimeout(()=>l.emit("init"),0),w}bc.globalOptions=void 0;function um(t={},e=[]){const n=j.useRef(t),r=j.useRef(e),[i,s]=j.useState(),[o,a]=j.useState(),l=j.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return j.useEffect(()=>{om(n.current,t)||(n.current=t,l())},[t,l]),j.useEffect(()=>{mL(r.current,e)||(r.current=e,l())},[e,l]),j.useEffect(()=>{if(pL()&&o){bc.globalOptions=um.globalOptions;const c=bc(o,n.current,r.current);return s(c),()=>c.destroy()}else s(void 0)},[o,s]),[a,i]}um.globalOptions=void 0;const qL=()=>I.jsx("div",{className:"logo-container",children:I.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/pixpair.firebasestorage.app/o/crab5.svg?alt=media&token=93592dde-03d2-4140-bf36-c4cb0ca39f85",alt:"PixCrab logo",className:"logo-image"})});var Yh={exports:{}};(function(t,e){(function(n,r){r(e,j)})(AS,function(n,r){function i(P){return P&&typeof P=="object"&&"default"in P?P:{default:P}}var s=i(r),o=function(){return o=Object.assign||function(R){for(var $,F=1,ae=arguments.length;F<ae;F++){$=arguments[F];for(var H in $)Object.prototype.hasOwnProperty.call($,H)&&(R[H]=$[H])}return R},o.apply(this,arguments)};function a(P,R,$){if($||arguments.length===2)for(var F=0,ae=R.length,H;F<ae;F++)(H||!(F in R))&&(H||(H=Array.prototype.slice.call(R,0,F)),H[F]=R[F]);return P.concat(H||Array.prototype.slice.call(R))}typeof SuppressedError=="function"&&SuppressedError;var l={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function u(){if(d)return c;d=1;var P=s.default,R=Symbol.for("react.element"),$=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,ae=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function ie(oe,J,w){var k,S={},O=null,U=null;w!==void 0&&(O=""+w),J.key!==void 0&&(O=""+J.key),J.ref!==void 0&&(U=J.ref);for(k in J)F.call(J,k)&&!H.hasOwnProperty(k)&&(S[k]=J[k]);if(oe&&oe.defaultProps)for(k in J=oe.defaultProps,J)S[k]===void 0&&(S[k]=J[k]);return{$$typeof:R,type:oe,key:O,ref:U,props:S,_owner:ae.current}}return c.Fragment=$,c.jsx=ie,c.jsxs=ie,c}l.exports=u();var h=l.exports,g=function(P,R,$){return typeof P=="function"?P($):typeof P=="object"?P:R($)},_={3:"rotate(180deg)",2:"rotateY(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},v=16,E={display:"flex",flexWrap:"wrap"},p=function(P){var R=P.item,$=_[R.orientation],F={cursor:"pointer",maxWidth:"none",width:R.scaledWidth,height:R.scaledHeight,marginLeft:R.marginLeft,marginTop:0,transform:$};if(R.isSelected){var ae=R.scaledWidth/R.scaledHeight,H=R.scaledHeight-v*2,ie=R.viewportWidth-v*2,oe=void 0,J=void 0;R.scaledWidth>R.scaledHeight?(J=R.scaledWidth-v*2,oe=Math.floor(J/ae)):(oe=R.scaledHeight-v*2,J=Math.floor(oe*ae));var w=Math.abs(Math.floor((H-oe)/2)),k=Math.abs(Math.floor((ie-J)/2));F.width=J,F.height=oe,F.marginLeft=k===0?0:-k,F.marginTop=w===0?0:-w}return F},f=function(P){var R=P.item,$={width:R.viewportWidth,height:R.scaledHeight,overflow:"hidden"};return R.nano&&($.background="url(".concat(R.nano,")"),$.backgroundSize="cover",$.backgroundPosition="center center"),R.isSelected&&($.width=R.viewportWidth-v*2,$.height=R.scaledHeight-v*2,$.margin=v),$},m=function(P){var R=P.hover;return{pointerEvents:"none",opacity:R?1:0,position:"absolute",height:"100%",width:"100%"}},y=function(P){var R=P.margin;return{margin:R,WebkitUserSelect:"none",position:"relative",background:"#eee",padding:"0px"}},C=function(P){var R=P.showOverlay;return{pointerEvents:"none",opacity:1,position:"absolute",height:"100%",width:"100%",background:R?"linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)":"none"}},T={pointerEvents:"none",opacity:1,position:"absolute",height:"36px",width:"100%"},b={background:"white",width:"100%",margin:0,userSelect:"text",WebkitUserSelect:"text",MozUserSelect:"text",overflow:"hidden"},N={padding:"2px",pointerEvents:"none",position:"absolute",minHeight:"0px",maxHeight:"160px",width:"100%",bottom:"0px",overflow:"hidden"},V={display:"inline-block",cursor:"pointer",pointerEvents:"visible",margin:"2px"},W=function(){return{display:"inline",padding:".2em .6em .3em",fontSize:"75%",fontWeight:"600",lineHeight:"1",color:"yellow",background:"rgba(0,0,0,0.65)",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em"}},ce=function(P){var R=P.isVisible;return{visibility:R?"visible":"hidden",background:"none",float:"left",width:36,height:36,border:"none",padding:6,cursor:"pointer",pointerEvents:"visible"}},ge=function(P){var R=P.isSelected,$=R===void 0?!1:R,F=P.isVisible,ae=F===void 0?!0:F,H=P.onClick,ie=P.color,oe=ie===void 0?"#FFFFFFB2":ie,J=P.selectedColor,w=J===void 0?"#4285F4FF":J,k=P.hoverColor,S=k===void 0?"#FFFFFFFF":k,O=r.useState(!1),U=O[0],B=O[1],X={display:$?"block":"none"},M=$?w:U?S:oe,q=function(){return B(!0)},le=function(){return B(!1)};return h.jsx("div",o({"data-testid":"grid-gallery-item_check-button",title:"Select",style:ce({isVisible:ae}),onClick:H,onMouseOver:q,onMouseOut:le},{children:h.jsxs("svg",o({fill:M,height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},{children:[h.jsxs("radialGradient",o({id:"shadow",cx:"38",cy:"95.488",r:"10.488",gradientTransform:"matrix(1 0 0 -1 -26 109)",gradientUnits:"userSpaceOnUse"},{children:[h.jsx("stop",{offset:".832",stopColor:"#010101"}),h.jsx("stop",{offset:"1",stopColor:"#010101",stopOpacity:"0"})]})),h.jsx("circle",{style:X,opacity:".26",fill:"url(#shadow)",cx:"12",cy:"13.512",r:"10.488"}),h.jsx("circle",{style:X,fill:"#FFF",cx:"12",cy:"12.2",r:"8.292"}),h.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),h.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})]}))}))},se=function(P){var R=P.item,$=P.thumbnailImageComponent,F=P.isSelectable,ae=F===void 0?!0:F,H=P.thumbnailStyle,ie=P.tagStyle,oe=P.tileViewportStyle,J=P.margin,w=P.index,k=P.onSelect,S=P.onClick,O={item:R},U=r.useState(!1),B=U[0],X=U[1],M={key:w,"data-testid":"grid-gallery-item_thumbnail",src:R.src,alt:R.alt?R.alt:"",title:typeof R.caption=="string"?R.caption:null,style:g(H,p,O)},q=function(re){ae&&k(w,re)},le=function(re){S(w,re)},ye={item:R,index:w,margin:J,onSelect:k,onClick:S,isSelectable:ae,tileViewportStyle:oe,thumbnailStyle:H,tagStyle:ie};return h.jsxs("div",o({className:"ReactGridGallery_tile","data-testid":"grid-gallery-item",onMouseEnter:function(){return X(!0)},onMouseLeave:function(){return X(!1)},style:y({margin:J})},{children:[h.jsx("div",o({className:"ReactGridGallery_tile-icon-bar",style:T},{children:h.jsx(ge,{isSelected:R.isSelected,isVisible:R.isSelected||ae&&B,onClick:q})})),!!R.tags&&h.jsx("div",o({className:"ReactGridGallery_tile-bottom-bar",style:N},{children:R.tags.map(function(re,_e){return h.jsx("div",o({title:re.title,style:V},{children:h.jsx("span",o({style:g(ie,W,O)},{children:re.value}))}),re.key||_e)})})),!!R.customOverlay&&h.jsx("div",o({className:"ReactGridGallery_custom-overlay",style:m({hover:B})},{children:R.customOverlay})),h.jsx("div",{className:"ReactGridGallery_tile-overlay",style:C({showOverlay:B&&!R.isSelected&&ae})}),h.jsx("div",o({className:"ReactGridGallery_tile-viewport","data-testid":"grid-gallery-item_viewport",style:g(oe,f,O),onClick:le},{children:$?h.jsx($,o({},ye,{imageProps:M})):h.jsx("img",o({},M))})),R.thumbnailCaption&&h.jsx("div",o({className:"ReactGridGallery_tile-description",style:b},{children:R.thumbnailCaption}))]}))};function Oe(P){var R=r.useRef(null),$=r.useRef(),F=r.useState(P),ae=F[0],H=F[1],ie=r.useCallback(function(oe){var J;(J=$.current)===null||J===void 0||J.disconnect(),$.current=void 0,R.current=oe;var w=function(){if(R.current){var k=R.current.clientWidth;try{k=R.current.getBoundingClientRect().width}catch{}H(Math.floor(k))}};w(),oe&&typeof ResizeObserver<"u"&&($.current=new ResizeObserver(w),$.current.observe(oe))},[]);return{containerRef:ie,containerWidth:ae}}var Ze=function(P,R,$){var F=[],ae=0;for(var H in P){var ie=P[H],oe=ie.scaledWidth/R;F[H]=Math.floor(oe*$),ae+=F[H]}for(var J=$-ae;J>0;)for(var H in F)if(F[H]++,J--,J<0)break;return F},At=function(P,R){for(var $=R.containerWidth,F=R.rowHeight,ae=R.margin,H=[],ie=2*ae,oe=a([],P,!0),J=0;oe.length>0&&J<$;){var w=oe.shift(),k=Math.floor(F*(w.width/w.height)),S=o(o({},w),{scaledHeight:F,scaledWidth:k,viewportWidth:k,marginLeft:0});H.push(S),J+=S.scaledWidth+ie}var O=J-$;if(H.length>0&&O>0){var U=Ze(H,J,O);for(var B in H){var X=U[B],w=H[B];w.marginLeft=-Math.abs(Math.floor(X/2)),w.viewportWidth=w.scaledWidth-X}}return[H,oe]},_t=function(P,R,$){$===void 0&&($=[]);var F=At(P,R),ae=F[0],H=F[1],ie=a(a([],$,!0),[ae],!1);return R.maxRows&&ie.length>=R.maxRows?ie:H.length?_t(H,R,ie):ie},L=function(P,R){var $=R.containerWidth,F=R.maxRows,ae=R.rowHeight,H=R.margin;if(ae=typeof ae>"u"?180:ae,H=typeof H>"u"?2:H,!P)return[];if(!$)return[];var ie={containerWidth:$,maxRows:F,rowHeight:ae,margin:H};return _t(P,ie)},K=function(P,R){var $=L(P,R);return[].concat.apply([],$)},ee=function(P){var R=P.images,$=P.id,F=$===void 0?"ReactGridGallery":$,ae=P.enableImageSelection,H=ae===void 0?!0:ae,ie=P.onSelect,oe=ie===void 0?function(){}:ie,J=P.rowHeight,w=J===void 0?180:J,k=P.maxRows,S=P.margin,O=S===void 0?2:S,U=P.defaultContainerWidth,B=U===void 0?0:U,X=P.onClick,M=X===void 0?function(){}:X,q=P.tileViewportStyle,le=P.thumbnailStyle,ye=P.tagStyle,re=P.thumbnailImageComponent,_e=Oe(B),de=_e.containerRef,Ke=_e.containerWidth,be=K(R,{containerWidth:Ke,maxRows:k,rowHeight:w,margin:O}),G=function(Le,we){we.preventDefault(),oe(Le,R[Le],we)},Ee=function(Le,we){M(Le,R[Le],we)};return h.jsx("div",o({id:F,className:"ReactGridGallery",ref:de},{children:h.jsx("div",o({style:E},{children:be.map(function(Le,we){return h.jsx(se,{item:Le,index:we,margin:O,height:w,isSelectable:H,onClick:Ee,onSelect:G,tagStyle:ye,tileViewportStyle:q,thumbnailStyle:le,thumbnailImageComponent:re},Le.key||we)})}))}))};ee.displayName="Gallery",n.CheckButton=ge,n.Gallery=ee,n.buildLayout=L,n.buildLayoutFlat=K,Object.defineProperty(n,"__esModule",{value:!0})})})(Yh,Yh.exports);var RS=Yh.exports;class ve{static debugLog(e){this.info(e)}static info(e){const n=typeof e=="string"&&e.length>100?e.substring(0,97)+"...":e;console.log(`[PixCrab] ${n}`);const r=document.getElementById("debugConsole");if(r){const i=new Date,s=i.toLocaleTimeString()+"."+i.getMilliseconds().toString().padStart(3,"0"),o=document.createElement("div");o.textContent=`[${s}] ${n}`,r.appendChild(o),r.scrollTop=r.scrollHeight}}static showToast(e,n=3e3){const r=document.getElementById("toast");if(!r){console.error("Toast element missing!");return}r.textContent=e,r.classList.remove("hidden"),r.style.display="block",r.style.opacity="1",r.style.transform="translateX(-50%) translateY(0)",window._toastHideTimeout&&clearTimeout(window._toastHideTimeout),window._toastHideTimeout=setTimeout(()=>{r.classList.add("hidden")},n)}static formatSessionId(e){return e?e.length===6?`${e.slice(0,3)}-${e.slice(3)}`:e:""}static async capturePhoto(e){return new Promise((n,r)=>{try{if(!e||!(e instanceof HTMLVideoElement)){r(new Error("Invalid video element"));return}const i=document.createElement("canvas"),s=e.videoWidth/e.videoHeight,o=2160,a=Math.round(o/s);i.width=o,i.height=a,i.getContext("2d").drawImage(e,0,0,o,a);const c=i.toDataURL("image/jpeg",.92);ve.debugLog(`Photo captured: ${Math.round(o)}x${Math.round(a)}`),n(c)}catch(i){ve.debugLog(`Error capturing photo: ${i.message}`),r(i)}})}static async generateSafeSessionId(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="";if(window.crypto&&window.crypto.getRandomValues){const r=new Uint8Array(6);window.crypto.getRandomValues(r);for(let i=0;i<6;i++)n+=e.charAt(r[i]%e.length)}else for(let r=0;r<6;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}static copyToClipboard(e){if(!e)return Promise.reject(new Error("No text to copy"));if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(e).then(()=>(ve.debugLog("Text copied to clipboard"),ve.showToast("Copied to clipboard"),!0)).catch(n=>(ve.debugLog(`Clipboard write failed: ${n.message}`),!1));try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const r=document.execCommand("copy");return document.body.removeChild(n),r?(ve.showToast("Copied to clipboard"),Promise.resolve(!0)):Promise.reject(new Error("execCommand copy failed"))}catch(n){return Promise.reject(n)}}static isMobileDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static generateQRCode(e,n,r={}){if(typeof QRCode>"u")throw new Error("QRCode library not loaded");return new QRCode(e,{text:n,width:r.width||184,height:r.height||184,colorDark:r.colorDark||"#4831D4",colorLight:r.colorLight||"#ffffff",correctLevel:QRCode.CorrectLevel.H})}static initToastListeners(){console.log("Toast system using direct method calls instead of events")}}const bS=({imageUrl:t,onClose:e})=>(j.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return document.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]),ve.info(`MODAL: PhotoModal render, imageUrl exists: ${!!t}`),t?I.jsx("div",{className:"photo-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]",onClick:e,style:{pointerEvents:"auto"},children:I.jsxs("div",{className:"relative max-w-[90vw] max-h-[90vh]",onClick:n=>n.stopPropagation(),children:[I.jsx("img",{src:t,alt:"Full size view",className:"max-w-full max-h-[90vh] object-contain"}),I.jsx("button",{onClick:e,className:"close-modal-button absolute top-2 right-2 text-white rounded-full","aria-label":"Close modal",style:{backgroundColor:"rgba(0, 0, 0, 0.5)",border:"0px none rgb(255, 255, 255)",borderRadius:"50%",padding:"4px 12px",width:"36px",height:"36px"},children:"✕"})]})}):null),KL=({photos:t,participantInfo:e})=>{const[n,r]=j.useState(null);j.useEffect(()=>{ve.info(`GALLERY: Photos received by gallery: ${t.length}`);const l=t.filter(d=>d.isCombined||d.participantIds).length,c=t.length-l;ve.info(`GALLERY: Received ${l} combined photos and ${c} individual photos`)},[t]),j.useEffect(()=>{ve.info(`GALLERY: selectedFullImageUrl state changed: ${n?"URL set":"null"}`)},[n]);const i=t.filter(l=>l.isCombined||l.participantIds).sort((l,c)=>(c.timestamp||0)-(l.timestamp||0));if(ve.info(`GALLERY: Displaying ${i.length} combined photos only`),!i||i.length===0)return ve.info("GALLERY: No combined photos to display"),I.jsx("div",{className:"combined-photo-empty text-center p-4",children:I.jsx("p",{children:"No combined photos captured yet. Combined photos will appear here."})});const s=l=>l?new Date(l).toLocaleString():"",o=(l,c,d)=>{ve.info(`CLICK: Image clicked at index: ${l}`);try{const u=i[l];if(!u){console.error("CLICK ERROR: No photo found at index",l);return}u.dataUrl?(ve.info(`CLICK: Setting full image URL from photo.dataUrl (length: ${u.dataUrl.length}) [dataUrl omitted]`),r(u.dataUrl)):console.error("CLICK ERROR: No dataUrl found for full image")}catch(u){console.error("CLICK ERROR: Exception in handleClick:",u)}},a=i.map((l,c)=>{let h=I.jsxs("div",{children:[I.jsx("div",{className:"font-medium",children:"Combined Photo"}),I.jsx("div",{className:"text-xs",children:s(l.timestamp)}),l.participantIds&&l.participantIds.length>0&&I.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:l.participantIds.map((g,_)=>I.jsx("span",{className:"inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs",children:e&&e[g]?e[g].name||g:`User ${_+1}`},g))})]});return{src:l.dataUrl,thumbnail:l.thumbnailDataUrl||l.dataUrl,thumbnailWidth:800,thumbnailHeight:450,caption:h}});return I.jsxs("div",{className:"combined-photo-gallery p-3 w-full",children:[I.jsx(RS.Gallery,{images:a,enableImageSelection:!1,rowHeight:180,margin:8,onClick:o}),I.jsx(bS,{imageUrl:n,onClose:()=>{ve.info("GALLERY: Modal close clicked"),r(null)}})]})},ev={carousel:"overflow-hidden",container:"flex",slide:"flex-shrink-0 min-w-0 mx-1 rounded"},QL=({sessionId:t,onExitSession:e,onSignOut:n})=>{const[r,i]=j.useState(null),[s,o]=j.useState(!1),[a,l]=j.useState([]),[c,d]=j.useState(!1),[u,h]=j.useState(null),[g,_]=j.useState({}),[v,E]=j.useState(0),[p,f]=j.useState(""),[m,y]=j.useState([]),[C,T]=j.useState(!1),[b,N]=j.useState([]),[V,W]=j.useState(null);console.log(`💾 DEBUG: Current thumbnails in carousel: ${b.length}`);const[ce]=um({loop:!1,align:"start",containScroll:"trimSnaps"}),ge=j.useRef(null),se=j.useRef(null),Oe=j.useRef(null);j.useEffect(()=>{if(!t){console.log("No session ID provided, exiting session"),Ze(),typeof e=="function"&&e();return}},[t,e]),j.useEffect(()=>{var k;function w(){const S=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.setProperty("--viewport-height",`${S}px`),console.log("📏 Updated viewport height:",S)}return w(),(k=window.visualViewport)==null||k.addEventListener("resize",w),window.addEventListener("resize",w),()=>{var S;(S=window.visualViewport)==null||S.removeEventListener("resize",w),window.removeEventListener("resize",w)}},[]),j.useEffect(()=>{var w;console.log("🔍 BUTTON RENDER CONDITIONS:",{cameraReady:s,uploading:c,countdown:u,participantCount:v,disabled:!s||c||u!==null||v<2,videoRef:se.current?"exists":"null",videoSrcObject:(w=se.current)!=null&&w.srcObject?"stream active":"no stream"})},[s,c,u,v]),j.useEffect(()=>()=>{console.log("🎥 CameraScreen unmounting - stopping camera"),Ze();const w=document.getElementById("slideContainer");w&&(console.log("🧹 DEBUG: Removing legacy slideContainer on unmount"),w.remove());const k=document.getElementById("hintText");k&&(console.log("🧹 DEBUG: Removing legacy hintText on unmount"),k.remove()),ge.current&&clearInterval(ge.current)},[]),j.useEffect(()=>{var w,k,S,O,U;console.log("🎥 CAMERA READY STATE CHANGED:",s),console.log("🎥 DEBUG: Camera state details:",{ready:s,videoRef:se.current?"exists":"null",videoSrcObject:(w=se.current)!=null&&w.srcObject?"stream active":"no stream",videoWidth:((k=se.current)==null?void 0:k.videoWidth)||"unknown",videoHeight:((S=se.current)==null?void 0:S.videoHeight)||"unknown",tracks:((U=(O=se.current)==null?void 0:O.srcObject)==null?void 0:U.getTracks().length)||0})},[s]),j.useEffect(()=>{if(!t)return;console.log("📊 DEBUG: Setting up Firebase listeners for session:",t),Ze(),ee();const w=Y.auth().currentUser;if(w){const M=w.uid,q=w.isAnonymous,le=w.displayName||(q?"Guest User":w.email||"Unknown");console.log(`📊 DEBUG: Adding current user to participants: ${M}, isAnonymous: ${q}`),st.ref(`sessions/${t}/participants/${M}`).set({connected:!0,lastSeen:Y.database.ServerValue.TIMESTAMP,displayName:le,photoURL:w.photoURL||null,isAnonymous:q}),st.ref(`sessions/${t}/members/${M}`).set({isAnonymous:q,joinTime:Y.database.ServerValue.TIMESTAMP})}const k=st.ref(`sessions/${t}`);k.once("value",M=>{console.log("📊 DEBUG: Initial session data check:",JSON.stringify(M.val()));const q=M.val();if(q){const le=Object.keys(q);console.log("📊 DEBUG: Session exists with fields:",le)}else console.log("📊 DEBUG: Session does not exist")}),console.log("📊 DEBUG: Setting up all Firebase listeners for path:",`sessions/${t}`);const S=st.ref(".info/connected"),O=st.ref(`sessions/${t}/photos`),U=st.ref(`sessions/${t}/combinedPhotos`);console.log("📊 DEBUG: Setting up child_added listener for photos"),O.on("child_added",M=>{const q={id:M.key,...M.val()};console.log("📊 DEBUG: New photo detected in Firebase -",M.key,"with timestamp:",q.timestamp),l(le=>(console.log("📊 DEBUG: Updating photosTaken state, current count:",le.length),[...le,q]))},M=>{console.error("📊 DEBUG: Error in child_added listener:",M)}),console.log("📊 DEBUG: Testing Firebase write permission..."),k.child("test").set({test:"write-test",timestamp:Date.now()}).then(()=>(console.log("📊 DEBUG: Firebase test write successful"),k.child("test").once("value"))).then(M=>{console.log("📊 DEBUG: Firebase test read successful:",M.val())}).catch(M=>{console.error("📊 DEBUG: Firebase permission error:",M.message)}),S.on("value",M=>{M.val()===!0?console.log("📊 DEBUG: Connected to Firebase"):console.log("📊 DEBUG: Disconnected from Firebase")}),console.log("📊 DEBUG: Setting up value listener for combined photos"),U.on("value",M=>{try{const q=M.val()||{};ve.info(`combinedPhotos state changed: ${Object.keys(q).length} photos`);const le=Object.entries(q).map(([_e,de])=>({id:_e,...de})).sort((_e,de)=>(de.timestamp||0)-(_e.timestamp||0)),ye=le.filter(_e=>_e.isCombined).length,re=le.length-ye;if(ve.info(`Photo breakdown - ${ye} combined, ${re} individual`),le.length>0){ve.info(`First photo: id=${le[0].id}, combined=${le[0].isCombined}`);const _e=le.filter(de=>de.isCombined).map(de=>de.thumbnailUrl||de.url||"").filter(de=>de&&de.length>0);console.log(`🔄 DEBUG: Found ${_e.length} combined photo thumbnails for carousel`),_e.length>0&&N(de=>{const Ke=[...de];let be=!1;return _e.forEach(G=>{Ke.includes(G)||(console.log("🔄 DEBUG: Adding combined photo thumbnail to carousel"),Ke.push(G),be=!0)}),console.log(`🔄 DEBUG: Carousel now has ${Ke.length} thumbnails after update`),be?Ke:de})}y(le)}catch(q){console.error("Error in combined photos listener:",q)}}),O.on("value",M=>{console.log("📊 DEBUG: Photos value event triggered");const q=M.val()||{};console.log("📊 DEBUG: Photos participants count:",Object.keys(q).length);const le=[];Object.entries(q).forEach(([ye,re])=>{console.log(`📊 DEBUG: Processing photos for user ${ye}`),typeof re=="object"&&(re.dataUrl?(console.log(`📊 DEBUG: Found legacy format photo for user ${ye}`),le.push({userId:ye,dataUrl:re.dataUrl,timestamp:re.timestamp})):(console.log(`📊 DEBUG: Found ${Object.keys(re).length} photos for user ${ye}`),Object.entries(re).forEach(([_e,de])=>{de&&de.dataUrl&&(console.log(`📊 DEBUG: Processing photo ${_e} for user ${ye}`),le.push({userId:ye,photoId:_e,...de}))})))}),le.sort((ye,re)=>(re.timestamp||0)-(ye.timestamp||0)),console.log(`📊 DEBUG: Processed ${le.length} individual photos from ${Object.keys(q).length} participants`)},M=>{console.error("📊 DEBUG: Error in value listener:",M)}),console.log("📊 DEBUG: Setting up participants listener");const B=st.ref(`sessions/${t}/participants`);B.on("value",M=>{const q=M.val()||{};console.log("📊 DEBUG: Participants updated:",JSON.stringify(q)),_(q),E(Object.keys(q).length)}),console.log("📊 DEBUG: Setting up capture time listener");const X=st.ref(`sessions/${t}/capture`);return X.on("value",M=>{const q=M.val();console.log("📊 DEBUG: Capture data update:",JSON.stringify(q)),q&&q.captureTime?(console.log("📊 DEBUG: Valid capture time received, starting countdown"),K(q.captureTime)):console.log("📊 DEBUG: No valid capture time in the data")}),()=>{console.log("🧹 DEBUG: Cleaning up Firebase listeners and camera"),Ze(),k.off(),O.off(),U.off(),S.off(),B.off(),X.off(),ge.current&&clearInterval(ge.current),console.log("🧹 DEBUG: All listeners removed")}},[t]);const Ze=()=>{se.current&&se.current.srcObject?(console.log("🎥 STOPPING CAMERA"),se.current.srcObject.getTracks().forEach(k=>{console.log(`🎥 Stopping track: ${k.kind}, enabled: ${k.enabled}`),k.stop()}),se.current.srcObject=null,o(!1),console.log("🎥 CAMERA STOPPED")):console.log("🎥 No camera stream to stop")},At=()=>{console.log("🎥 Exit session - stopping camera"),Ze();const w=document.getElementById("slideContainer");w&&(console.log("🧹 DEBUG: Removing legacy slideContainer"),w.remove());const k=document.getElementById("hintText");k&&(console.log("🧹 DEBUG: Removing legacy hintText"),k.remove()),N([]),typeof e=="function"&&e()},_t=()=>{t&&navigator.clipboard.writeText(t).then(()=>{f("Copied!"),setTimeout(()=>f(""),2e3)}).catch(w=>{console.error("Failed to copy:",w),f("Failed to copy")})},L=async()=>{var w;console.log("📸 DEBUG: initiateCapture function called");try{console.log("📸 DEBUG: Measuring network latency...");const k=Date.now();await st.ref(".info/serverTimeOffset").once("value");const O=Date.now()-k;console.log(`📸 DEBUG: Network latency measured: ${O}ms`);const U=Math.max(1e3,O*2);console.log(`📸 DEBUG: Calculated buffer time: ${U}ms`);const B=Date.now()+3e3+U;console.log(`📸 DEBUG: Set capture time to: ${new Date(B).toISOString()}`),console.log("📸 DEBUG: Saving capture data to Firebase..."),await st.ref(`sessions/${t}/capture`).set({captureTime:B,initiatedBy:((w=Y.auth().currentUser)==null?void 0:w.uid)||"anonymous",initiated:Y.database.ServerValue.TIMESTAMP,approximateLatency:O}),console.log(`📸 DEBUG: Capture data saved successfully! Initiated capture for time: ${new Date(B).toISOString()} (buffer: ${U}ms)`)}catch(k){console.error("❌ ERROR in initiateCapture:",k),i("Failed to initiate synchronized capture.")}},K=w=>{console.log("📸 DEBUG: startCountdown function called with captureTime:",w);try{ge.current&&(console.log("📸 DEBUG: Clearing existing countdown interval"),clearInterval(ge.current));const k=Date.now(),S=w-k;if(console.log(`📸 DEBUG: Time until capture: ${S}ms`),S<=0){console.log("📸 DEBUG: Capture time already passed, aborting countdown");return}console.log(`📸 DEBUG: Starting countdown for capture at ${new Date(w).toISOString()}`);const O=Math.ceil(S/1e3);console.log(`📸 DEBUG: Initial countdown value: ${O}`),h(O),console.log("📸 DEBUG: Setting up countdown interval"),ge.current=setInterval(()=>{try{const U=w-Date.now(),B=Math.ceil(U/1e3);console.log(`📸 DEBUG: Countdown tick - ${B}s remaining`),B===2&&!s&&(console.log("📸 DEBUG: 2 seconds left, ensuring camera is ready"),se.current&&se.current.srcObject?(console.log("📸 DEBUG: Video element appears ready but cameraReady is false, forcing ready"),o(!0)):(console.log("📸 DEBUG: Attempting to re-initialize camera"),ee())),h(X=>{try{return B<=0||X<=1?(console.log("📸 DEBUG: Countdown reached zero, clearing interval and taking photo"),clearInterval(ge.current),!s&&se.current&&se.current.srcObject?(console.log("📸 DEBUG: Forcing camera ready before photo capture"),o(!0),setTimeout(()=>P(),100)):P(),null):B}catch(M){return console.error("❌ ERROR in countdown state update:",M),clearInterval(ge.current),null}})}catch(U){console.error("❌ ERROR in countdown interval:",U),clearInterval(ge.current)}},100),console.log("📸 DEBUG: Setting safety timeout for",S+500,"ms"),setTimeout(()=>{try{ge.current&&(console.log("📸 DEBUG: Safety timeout triggered - clearing countdown"),clearInterval(ge.current),h(null))}catch(U){console.error("❌ ERROR in safety timeout:",U)}},S+500)}catch(k){console.error("❌ ERROR in startCountdown:",k),i("Failed to start countdown timer.")}},ee=async()=>{console.log("🎥 STARTING CAMERA INITIALIZATION");try{if(s){console.log("🎥 DEBUG: Camera is already ready, no need to initialize again");return}const w=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});if(console.log("🎥 CAMERA STREAM OBTAINED:",w?"success":"failed","tracks:",w.getTracks().length),se.current){se.current.srcObject=w,console.log("🎥 ASSIGNED STREAM TO VIDEO ELEMENT");const k=w.getVideoTracks();console.log("🎥 DEBUG: Video tracks:",k.length),k.forEach(S=>{console.log("🎥 DEBUG: Track details:",{kind:S.kind,id:S.id,enabled:S.enabled,readyState:S.readyState,muted:S.muted}),S.addEventListener("ended",()=>{console.log("🎥 DEBUG: Video track ended"),o(!1)})}),se.current.onloadedmetadata=()=>{console.log("🎥 VIDEO METADATA LOADED, SETTING CAMERA READY"),console.log("🎥 DEBUG: Video dimensions after metadata loaded:",{width:se.current.videoWidth,height:se.current.videoHeight}),o(!0)}}else console.error("🎥 VIDEO REF IS NULL"),w.getTracks().forEach(k=>k.stop())}catch(w){console.error("🎥 ERROR ACCESSING CAMERA:",w),i("Could not access camera. Please check permissions.")}},P=async()=>{if(console.log("📸 DEBUG: takePhoto function called"),!s||c){if(console.log(`📸 DEBUG: Cannot take photo - cameraReady: ${s}, uploading: ${c}`),!s&&se.current&&se.current.srcObject){console.log("📸 DEBUG: Attempting to recover camera ready state...");const w=se.current.srcObject.getVideoTracks();if(console.log("📸 DEBUG: Video tracks status:",w.map(k=>({kind:k.kind,enabled:k.enabled,readyState:k.readyState}))),w.length>0&&w[0].readyState==="live"&&se.current.videoWidth>0){console.log("📸 DEBUG: Video appears ready but cameraReady state is false, forcing ready state"),o(!0),setTimeout(()=>{console.log("📸 DEBUG: Retrying takePhoto after recovery attempt"),$()},500);return}}console.log("📸 DEBUG: Cannot recover camera state, aborting photo capture");return}await $()},R=(w,k)=>{console.log("🔍 DEBUG: Performing direct check of Firebase photos structure"),st.ref(`sessions/${w}/photos`).once("value").then(S=>{const O=S.val();if(console.log("🔍 DEBUG: Direct Firebase check - Session photos data:","[data omitted]"),!O)console.log("🔍 DEBUG: No photos found in this session");else{O[k]?console.log(`🔍 DEBUG: Found photo for user ${k}: [data omitted]`):console.log(`🔍 DEBUG: No photo found for user ${k} in the session`);const U=Object.keys(O);console.log(`🔍 DEBUG: Participants with photos: ${U.length}`),console.log("🔍 DEBUG: Participant IDs with photos:",U)}}).catch(S=>{console.error("🔍 DEBUG: Error checking Firebase photos:",S)})},$=async()=>{console.log("📸 DEBUG: Starting actual photo capture implementation");try{console.log("📸 DEBUG: Starting photo capture process"),d(!0),i(null);const w=se.current,k=Oe.current;if(!w||!k)throw console.error("📸 DEBUG: Video or canvas reference is null"),new Error("Video or canvas reference is missing");if(!w.videoWidth||!w.videoHeight)throw console.error("📸 DEBUG: Video dimensions are invalid:",w.videoWidth,w.videoHeight),new Error("Video not ready for capture");console.log(`📸 DEBUG: Video dimensions: ${w.videoWidth}x${w.videoHeight}`),k.width=w.videoWidth,k.height=w.videoHeight,console.log("📸 DEBUG: Drawing video frame to canvas"),k.getContext("2d").drawImage(w,0,0),console.log("📸 DEBUG: Converting canvas to data URL");const O=k.toDataURL("image/jpeg",.8);console.log(`📸 DEBUG: Data URL generated, length: ${O.length} characters [dataUrl omitted]`);const U=Y.auth().currentUser;if(!U)throw console.error("❌ ERROR: No authenticated user found when trying to save photo"),new Error("You must be signed in to take photos");const B=U.uid;console.log(`📸 DEBUG: Current user ID: ${B}`),console.log("📸 DEBUG: Saving photo to Firebase..."),console.log("📸 DEBUG: Session ID:",t),console.log("📸 DEBUG: Building reference path:",`sessions/${t}/photos/${B}`),await st.ref(`sessions/${t}/photos/${B}`).push().set({dataUrl:O,timestamp:Y.database.ServerValue.TIMESTAMP}),setTimeout(()=>{R(t,B),console.log("📸 DEBUG: Attempting to call checkAndCreateCombinedPhoto."),F(t)},1500)}catch(w){console.error("❌ ERROR in takePhoto:",w),i("Failed to take photo. Please try again.")}finally{d(!1),console.log("📸 DEBUG: Photo capture process completed")}},F=w=>{if(console.log("🔄 DEBUG: checkAndCreateCombinedPhoto called"),console.log(`🔄 DEBUG: Current session ID for check: ${w}`),!w){console.log("🔄 DEBUG: No session ID provided, skipping combined photo check");return}if(!Oe.current){console.error("🔄 ERROR: Canvas reference is not available for creating combined photo");return}console.log(`🔄 DEBUG: Canvas dimensions: ${Oe.current.width}x${Oe.current.height}`);const k=Y.auth().currentUser;if(!k){console.error("🔄 ERROR: No authenticated user for combined photo check.");return}const S=k.uid,O=k.isAnonymous;console.log(`🔄 DEBUG: Current user: ID=${S}, isAnonymous=${O}`);const U=Date.now(),B=st.ref(`sessions/${w}/participants`);console.log(`🔄 DEBUG: Fetching participants data from Firebase path: ${B.toString()}`),B.once("value").then(X=>{const M=X.val()||{},q=Object.keys(M);console.log(`🔄 DEBUG: Found ${q.length} participants in the session:`,q);const le=q.map(ye=>st.ref(`sessions/${w}/participants/${ye}`).once("value"));Promise.all(le).then(ye=>{const re={};ye.forEach(de=>{if(de.exists()){const Ke=de.key,be=de.val();re[Ke]=be}}),console.log("🔄 DEBUG: Participant details:",JSON.stringify(re));const _e=st.ref(`sessions/${w}/photos`);console.log(`🔄 DEBUG: Checking photos at Firebase path: ${_e.toString()}`),_e.once("value").then(async de=>{console.log(`🔄 DEBUG: Successfully retrieved photos data from Firebase (${Date.now()-U}ms)`);const Ke=de.val()||{},be=Object.keys(Ke);console.log(`🔄 DEBUG: Found photos from ${be.length} participants:`,be);const G={};for(const Z of be){const Se=Ke[Z];if(Se.dataUrl)console.log(`🔄 DEBUG: Using legacy format photo for user ${Z}`),G[Z]=Se;else{const Be=Object.entries(Se);if(Be.length===0)continue;Be.sort((Ct,Jn)=>(Jn[1].timestamp||0)-(Ct[1].timestamp||0));const[Yt,Qe]=Be[0];console.log(`🔄 DEBUG: Using latest photo ${Yt} for user ${Z} from ${Be.length} photos`),G[Z]=Qe}}console.log("🔄 DEBUG: Latest photos data structure:",JSON.stringify(Object.keys(G).map(Z=>({id:Z,hasDataUrl:!!G[Z].dataUrl,dataUrlLength:G[Z].dataUrl?G[Z].dataUrl.length:0,timestamp:G[Z].timestamp}))));const Ee=Object.entries(G).every(([Z,Se])=>Se&&Se.dataUrl);if(console.log(`🔄 DEBUG: All photos valid and contain dataUrl: ${Ee}`),!Ee){console.error("🔄 ERROR: Some photos are missing dataUrl property");return}if(be.length<2){console.log("🔄 DEBUG: Not enough photos to create a combined photo yet");return}console.log("🔄 DEBUG: Checking for existing combined photos with these participants");const Le=st.ref(`sessions/${w}/combinedPhotos`);console.log(`🔄 DEBUG: Checking combined photos at Firebase path: ${Le.toString()}`);const we={};for(const Z of be)we[Z]={uid:Z,isAnonymous:!0},re[Z]&&(re[Z].isAnonymous!==void 0?we[Z].isAnonymous=re[Z].isAnonymous:re[Z].displayName==="Guest"&&(we[Z].isAnonymous=!0)),Z===S&&(we[Z].isAnonymous=O);console.log("🔄 DEBUG: Participant authentication state:",JSON.stringify(we));const ue=be.filter(Z=>we[Z]&&!we[Z].isAnonymous);console.log("🔄 DEBUG: Authenticated participants:",ue);let Ne=!1,et="";if(ue.length>0)if(!O&&ue.includes(S))if(ue.length===1)Ne=!0,et="Only authenticated user";else{const Z=ue.sort()[0];Ne=S===Z,et=`Lowest authenticated UID (${Z})`}else Ne=!1,et="Guest user with authenticated participants present";else{const Z=be.sort()[0];Ne=S===Z,et=`All guests, using lowest UID (${Z})`}if(console.log(`🔄 DEBUG: Should create combined photo: ${Ne}, Reason: ${et}`),!Ne){console.log("🔄 DEBUG: This device should NOT create the combined photo, skipping creation");return}Le.once("value").then(Z=>{console.log(`🔄 DEBUG: Successfully retrieved combined photos data from Firebase (${Date.now()-U}ms)`);const Se=Z.val()||{};if(console.log(`🔄 DEBUG: Found ${Object.keys(Se).length} existing combined photos`),Object.values(Se).some(Qe=>{if(!Qe.participantIds)return console.log("🔄 DEBUG: Found a combined photo without participantIds field"),!1;const Ct=Qe.participantIds.length===be.length,Jn=be.every(Xs=>Qe.participantIds.includes(Xs));return Ct&&Jn&&console.log("🔄 DEBUG: Found existing combined photo with same participants:",JSON.stringify({participantIds:Qe.participantIds,timestamp:Qe.timestamp})),Ct&&Jn})){console.log("🔄 DEBUG: A combined photo with these participants already exists, skipping creation");return}console.log("🔄 DEBUG: No existing combined photo found with these participants, creating new one"),console.log("🔄 DEBUG: Creating combined photo from participant photos"),ae(w,G,be,{mergedBy:S,mergerIsAnonymous:O}).then(Qe=>{const Ct=Date.now()-U;Qe?(console.log(`🔄 DEBUG: Successfully created combined photo with ID: ${Qe} (total time: ${Ct}ms)`),f(`Combined photo saved by ${O?"guest":"authenticated"} user!`),setTimeout(()=>f(""),3e3)):console.log(`🔄 DEBUG: Failed to create combined photo (total time: ${Ct}ms)`)}).catch(Qe=>{console.error("🔄 ERROR in createCombinedPhoto promise:",Qe)})}).catch(Z=>{console.error("🔄 ERROR checking existing combined photos:",Z)})}).catch(de=>{console.error("🔄 ERROR checking for photos:",de)})}).catch(ye=>{console.error("🔄 ERROR fetching participant details:",ye)})}).catch(X=>{console.error("🔄 ERROR fetching participants:",X)})},ae=async(w,k,S,O)=>{var U,B;console.log("🔄 DEBUG: Create combined photo called with session ID:",w);try{console.log("🔄 DEBUG: Creating combined photo for",S.length,"participants"),console.log("🔄 DEBUG: Participant IDs:",JSON.stringify(S)),console.log("🔄 DEBUG: Merger info:",JSON.stringify(O));const X=S.map(G=>{console.log(`🔄 DEBUG: Processing photo from participant ${G}`);const Ee=k[G];return console.log("🔄 DEBUG: Photo data structure:",JSON.stringify({hasDataUrl:!!Ee.dataUrl,dataUrlLength:Ee.dataUrl?Ee.dataUrl.length:0,timestamp:Ee.timestamp})),Ee.dataUrl||console.error(`🔄 ERROR: Missing dataUrl for photo from participant ${G}`),Ee.dataUrl});console.log("🔄 DEBUG: Extracted data URLs for all participants");const M=Oe.current;if(!M)throw new Error("Canvas reference is not available");console.log(`🔄 DEBUG: Canvas dimensions before setup: ${M.width}x${M.height}`);const q=M.getContext("2d");if(!q)throw new Error("Could not get canvas 2D context");console.log("🔄 DEBUG: Canvas 2D context obtained successfully"),console.log("🔄 DEBUG: Loading images from data URLs");const le=X.map((G,Ee)=>new Promise((Le,we)=>{console.log(`🔄 DEBUG: Creating image object for URL ${Ee+1}`);const ue=new Image;ue.crossOrigin="anonymous",ue.onload=()=>{console.log(`🔄 DEBUG: Image ${Ee+1} loaded successfully: ${ue.width}x${ue.height}`),Le(ue)},ue.onerror=Ne=>{console.error(`🔄 ERROR: Failed to load image ${Ee+1}:`,Ne),we(new Error(`Failed to load image ${Ee+1}`))},console.log(`🔄 DEBUG: Setting source for image ${Ee+1}`),ue.src=G}));console.log(`🔄 DEBUG: Waiting for all ${le.length} images to load`);const ye=await Promise.all(le);console.log(`🔄 DEBUG: All ${ye.length} images loaded successfully`),ye.forEach((G,Ee)=>{console.log(`🔄 DEBUG: Image ${Ee+1} dimensions: ${G.width}x${G.height}`)}),console.log("🔄 DEBUG: Using vertical stacking layout (first photo on top, second on bottom)");const re=2160,_e=1920,de=re/_e;console.log(`🔄 DEBUG: Using fixed dimensions: ${re}x${_e} per image`),console.log(`🔄 DEBUG: Setting canvas dimensions to: ${re}x${_e*2}`),console.log("🛠️ DEBUG: canvasRef.current:",Oe.current),console.log("🛠️ DEBUG: canvas element id/class:",(U=Oe.current)==null?void 0:U.id,(B=Oe.current)==null?void 0:B.className),console.log("🛠️ DEBUG: pre-set dimensions:",M.width,M.height),M.width=re,M.height=_e*2,console.log("🔄 DEBUG: Clearing canvas with black background"),q.fillStyle="#000",q.fillRect(0,0,M.width,M.height),ye.forEach((G,Ee)=>{const Le=G.width/G.height;let we,ue,Ne,et;Le>de?(et=G.height,Ne=G.height*de,we=(G.width-Ne)/2,ue=0,console.log(`🔄 DEBUG: Image ${Ee+1} is wider, cropping sides: sourceX=${we}, sourceWidth=${Ne}`)):(Ne=G.width,et=G.width/de,we=0,ue=(G.height-et)/2,console.log(`🔄 DEBUG: Image ${Ee+1} is taller, cropping top/bottom: sourceY=${ue}, sourceHeight=${et}`));const Z=0,Se=Ee*_e;console.log(`🔄 DEBUG: Drawing image ${Ee+1}: source(${we},${ue},${Ne},${et}) -> dest(${Z},${Se},${re},${_e})`);try{q.drawImage(G,we,ue,Ne,et,Z,Se,re,_e),console.log(`🔄 DEBUG: Successfully drew image ${Ee+1}`)}catch(Be){throw console.error(`🔄 ERROR: Failed to draw image ${Ee+1}:`,Be),Be}}),console.log("🔄 DEBUG: Adding watermark");try{q.font="bold 48px Arial",q.fillStyle="rgba(255, 255, 255, 0.7)",q.textAlign="right",q.textBaseline="bottom",q.fillText("PixCrab",M.width-40,M.height-40),console.log("🔄 DEBUG: Successfully added watermark")}catch(G){console.error("🔄 ERROR: Failed to add watermark:",G)}console.log("🔄 DEBUG: Converting canvas to data URL");let Ke;try{Ke=M.toDataURL("image/jpeg",.95),console.log(`🔄 DEBUG: Combined photo created, data URL length: ${Ke.length}`),N(G=>[...G,Ke])}catch(G){throw console.error("🔄 ERROR: Failed to convert canvas to data URL:",G),G}console.log("🔄 DEBUG: Generating thumbnail");let be="";try{const G=document.createElement("canvas"),Ee=G.getContext("2d"),Le=270,we=480;G.width=Le,G.height=we;const ue=new Image;await new Promise((Jn,Xs)=>{ue.onload=Jn,ue.onerror=Xs,ue.src=Ke}),console.log(`🔄 DEBUG: Temporary image for thumbnail loaded: ${ue.width}x${ue.height}`);const Ne=ue.width,et=ue.height,Z=Ne/et,Se=Le/we;let Be,Yt,Qe,Ct;Z>Se?(Yt=we,Be=Yt*Z,Qe=(Le-Be)/2,Ct=0):(Be=Le,Yt=Be/Z,Qe=0,Ct=(we-Yt)/2),console.log(`🔄 DEBUG: Drawing thumbnail with source dimensions: ${Ne}x${et}, target: ${Le}x${we}, draw dimensions: ${Be}x${Yt} at ${Qe},${Ct}`),Ee.drawImage(ue,Qe,Ct,Be,Yt),be=G.toDataURL("image/jpeg",.9),console.log(`📸 DEBUG: Thumbnail created, data URL length: ${be.length}`)}catch(G){console.error("🔄 ERROR: Failed to generate thumbnail:",G)}console.log("🔄 DEBUG: Saving combined photo to Firebase");try{let G=Y.database().ref().push().key;console.log(`🔄 DEBUG: Generated Firebase key: ${G}`);const Ee=st.ref(`sessions/${w}/combinedPhotos/${G}`);if(console.log(`🔄 DEBUG: Created Firebase reference at: sessions/${w}/combinedPhotos/${G}`),!Ke)throw new Error("Combined photo data URL is missing");console.log(`🔄 DEBUG: dataUrl length: ${Ke.length}, thumbnailDataUrl length: ${(be==null?void 0:be.length)||0}`);const Le={url:combinedPhotoUrl,thumbnailUrl:be,dataUrl:combinedPhotoDataUrl,width:combinedCanvasWidth,height:combinedCanvasHeight,timestamp:Y.database.ServerValue.TIMESTAMP,isCombined:!0,sessionId:w,creatorId:userId,participantIds:S,combinationInfo:O},we={isCombined:!0,participantIds:S,width:combinedCanvasWidth,height:combinedCanvasHeight,thumbnailUrl:be,dataUrl:combinedPhotoDataUrl};G=await ie(combinedPhotoUrl,Le,we),G?(console.log(`✅ Successfully created and saved combined photo with ID: ${G}`),ve.info(`COMBINED: Successfully created and saved combined photo with ID: ${G}`)):console.error("Failed to save combined photo");const ue=[],Ne=[];for(const Se of S)participantAuthState[Se]&&!participantAuthState[Se].isAnonymous?ue.push(Se):Ne.push(Se);console.log(`🔄 DEBUG: Auth participants: ${ue.length}, Guest participants: ${Ne.length}`);const Z=await(await fetch(Ke)).blob();if(ue.length>0){console.log("🔄 DEBUG: At least one participant is authenticated, storing in their account");for(const Se of ue)try{const Be=`users/${Se}/combined/${G}.jpg`;console.log(`🔄 DEBUG: Storing photo for auth user ${Se} at path: ${Be}`);const Ct=await(await Y.storage().ref(Be).put(Z)).ref.getDownloadURL();await Ee.child("storageInfo").child(Se).set({storagePath:Be,downloadURL:Ct,isAnonymous:!1}),console.log(`🔄 DEBUG: Successfully stored for auth user ${Se}`)}catch(Be){console.error(`🔄 ERROR: Failed to save to Storage for auth user ${Se}:`,Be)}}else if(Ne.length>0){console.log("🔄 DEBUG: All participants are guests, storing in guest storage");try{const Se=`analysisData/guests/${w}/combined/${G}.jpg`;console.log(`🔄 DEBUG: Storing photo in guest path: ${Se}`);const Qe=await(await Y.storage().ref(Se).put(Z)).ref.getDownloadURL();await Ee.child("storageInfo").set({storagePath:Se,downloadURL:Qe,isGuestStorage:!0}),console.log("🔄 DEBUG: Successfully stored for guest users")}catch(Se){console.error("🔄 ERROR: Failed to save to Storage for guests:",Se)}}return ue.length>0?f(`Combined photo saved to ${ue.length} authenticated user(s)`):f("Combined photo saved to guest storage"),setTimeout(()=>f(""),3e3),G}catch(G){throw console.error("🔄 ERROR: Failed to save combined photo to Firebase:",G),G}}catch(X){return console.error("🔄 ERROR creating combined photo:",X),null}},H=w=>{const k=w.dataUrl||w.downloadURL;return k?I.jsxs("div",{className:"photo-item",children:[I.jsx("img",{src:k,alt:"Captured"}),I.jsxs("p",{children:["Taken at: ",new Date(w.timestamp).toLocaleTimeString()]})]},w.id):I.jsx("div",{className:"photo-item error",children:I.jsx("p",{children:"Photo unavailable"})},w.id)},ie=async(w,k,S={})=>{try{const O=Y.auth().currentUser;if(!O)return console.error("Cannot save photo - user not logged in"),null;const U=O.uid,B=Y.database().ref().push().key,X={url:w,createdAt:Y.database.ServerValue.TIMESTAMP,userId:U,sessionId:t,...S};return await st.ref(`sessions/${t}/photos/${B}`).set(X),await st.ref(`users/${U}/photos/${B}`).set(X),ve.info(`Photo saved to both session and personal gallery: ${B}`),B}catch(O){return console.error("Error saving photo to album:",O),null}},oe=()=>{T(!C)},J=j.useCallback(()=>{if(m.length===0){i("No photos to save");return}try{const w=Y.auth().currentUser;if(!w){ve.info("No user found, cannot save photos"),i("User not logged in");return}const k=w.isAnonymous;ve.info(`Saving combined photos to album. User: ${w.uid}, isAnonymous: ${k}`);const S={},O=[],U=[];S[w.uid]={isAnonymous:k,displayName:w.displayName||"Unknown",email:w.email||null},k?U.push(w.uid):O.push(w.uid),Object.entries(g).forEach(([re,_e])=>{if(re!==w.uid){const de=_e.isAnonymous!==void 0?_e.isAnonymous:!0;S[re]={isAnonymous:de,displayName:_e.displayName||"Unknown"},de?U.push(re):O.push(re)}}),ve.info(`Auth participants: ${O.length}, Guest participants: ${U.length}`);let B="",X=!1;if(O.length>0?k?(ve.info("Current user is guest but authenticated users exist - saving skipped for this device"),X=!1):(B=`users/${w.uid}/combined/`,X=!0,ve.info("Saving to authenticated user storage (current user)")):(B=`analysisData/guests/${t}/combined/`,X=!0,ve.info("All participants are guests - saving to guest storage")),!X){f("Skipped saving - authenticated users exist"),setTimeout(()=>f(""),2e3);return}const M=localStorage.getItem("combinedSessions"),q=M?JSON.parse(M):[],le={id:t,timestamp:Date.now(),photos:m.filter(re=>re.isCombined||re.participantIds),participantsCount:Object.keys(g).length,savedByUser:w.uid,isAnonymous:k,participantAuthStatus:S,savePath:B},ye=[le,...q];localStorage.setItem("combinedSessions",JSON.stringify(ye)),i(null),f(`Saved ${le.photos.length} combined photos to ${B}`),setTimeout(()=>f(""),2e3),ve.info(`Successfully saved ${le.photos.length} combined photos to ${B}`)}catch(w){console.error("Error saving combined photos:",w),i("Failed to save photos to album")}},[m,t,g,i,f]);return j.useEffect(()=>{if(m.length>0){const w=Y.auth().currentUser;if(!w){ve.info("Auto-save skipped - no authenticated user");return}const k=w.isAnonymous,S=[],O=[];Object.entries(g).forEach(([X,M])=>{M.isAnonymous===!1?S.push(X):O.push(X)}),ve.info(`Auto-save check: Auth users: ${S.length}, Guest users: ${O.length}`);let U=!1,B="";if(S.length>0)if(k)U=!1,B="Guest user with authenticated participants present";else if(S.length===1)U=!0,B="Only authenticated user in session";else{const X=S.sort()[0];U=w.uid===X,B=`Authenticated user with lowest UID (${X})`}else{const M=Object.keys(g).sort()[0];U=w.uid===M,B=`All guests, using lowest UID (${M})`}ve.info(`Auto-save decision: ${U?"YES":"NO"}, Reason: ${B}`),U?(J(),ve.info("Combined photos automatically saved to album")):ve.info(`Auto-save skipped - ${B}`)}},[m,J,g]),j.useEffect(()=>{ve.info(`combinedPhotos state changed: ${m.length} photos`);const w=m.filter(S=>S.isCombined||S.participantIds).length,k=m.length-w;if(ve.info(`Photo breakdown - ${w} combined, ${k} individual`),m.length>0){const S=m[0];ve.info(`First photo: id=${S.id}, combined=${!!S.isCombined}`)}},[m]),j.useEffect(()=>{N([])},[t]),I.jsxs("div",{className:"camera-screen",children:[I.jsxs("div",{className:`camera-container ${C?"hidden":""}`,children:[I.jsx("video",{ref:se,autoPlay:!0,playsInline:!0,muted:!0,className:"h-full w-auto object-cover mx-auto"}),I.jsx("canvas",{ref:Oe,style:{display:"none"}}),u!==null&&I.jsx("div",{className:"countdown-overlay",children:I.jsx("div",{className:"countdown-number",children:u})})]}),C&&I.jsx("div",{className:"combined-gallery-container",children:I.jsx(KL,{photos:m,participantInfo:g})}),I.jsxs("div",{className:"camera-screen-content",children:[I.jsxs("div",{className:"header-area",children:[I.jsxs("div",{className:"participants-count",children:["Participants: ",v,"/2"]}),r&&I.jsx("div",{className:"error",children:r}),I.jsxs("div",{className:"session-header",children:[I.jsx("button",{className:"btn btn-primary rainbow-button gallery-btn",onClick:oe,title:C?"Return to Camera":"View Combined Photos",children:C?"Camera":"Gallery"}),I.jsx("button",{className:"btn-icon exit-btn",onClick:At,title:"Exit Session",children:I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),I.jsxs("button",{className:"session-id-btn",onClick:_t,title:"Copy Session ID",children:[t,I.jsxs("svg",{className:"copy-icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),I.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),p&&I.jsx("span",{className:"copy-status",children:p})]})]})]}),!C&&I.jsx("div",{className:"viewfinder-area"}),!C&&b.length>0&&I.jsx("div",{className:"absolute bottom-20 left-0 right-0 z-50 p-2 pointer-events-none",children:I.jsx("div",{className:`${ev.carousel} pointer-events-auto bg-black bg-opacity-30 p-2 rounded-lg`,ref:ce,children:I.jsx("div",{className:ev.container,children:b.map((w,k)=>I.jsx("div",{className:"w-24 h-40 mx-1 rounded overflow-hidden flex items-center justify-center bg-transparent cursor-pointer",onClick:()=>{console.log(`🖱️ DEBUG: Thumbnail clicked, setting modal image URL: ${w}`),W(w)},style:{pointerEvents:"auto"},children:I.jsx("img",{src:w,alt:`Session photo ${k+1}`,className:"object-contain w-[110%] h-[110%]",onClick:S=>{S.stopPropagation(),console.log(`🖱️ DEBUG: Image clicked directly, setting modal image URL: ${w}`),W(w)},style:{pointerEvents:"auto"}})},k))})})}),!C&&I.jsx("div",{className:"controls-area",children:I.jsx("div",{className:"shutter-button-container",children:s&&I.jsx("button",{className:`
                    btn-circle btn-circle-rainbow
                    w-16 h-16 bg-white shadow-lg
                    border-4 border-gray-200 z-50
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `,onClick:L,disabled:!s||c||u!==null||v<2,children:I.jsx("span",{className:"block w-8 h-8 bg-gray-200 rounded-full m-auto"})})})})]}),!C&&I.jsx("div",{className:"photos-grid",children:a.map(H)}),V&&I.jsx(bS,{imageUrl:V,onClose:()=>{console.log("🖱️ DEBUG: Closing photo modal"),W(null)}})]})},YL=({onCreateSession:t,onReturn:e})=>{const[n,r]=j.useState([]),[i,s]=j.useState([]);j.useEffect(()=>{const a=()=>{const c=localStorage.getItem("albumPhotos");c&&r(JSON.parse(c))},l=()=>{const c=localStorage.getItem("combinedSessions");c&&s(JSON.parse(c))};a(),l()},[]);const o=()=>{typeof t=="function"&&t()};return I.jsxs("div",{className:"album-screen",children:[I.jsxs("div",{className:"album-header",children:[I.jsx("h1",{children:"My Album"}),I.jsxs("div",{className:"album-actions",children:[I.jsx("button",{className:"btn btn-primary rainbow-button",onClick:o,children:"Create New Session"}),I.jsx("button",{className:"btn btn-secondary return-btn",onClick:e,children:"Return to Sessions"})]})]}),i.length>0&&I.jsxs("div",{className:"combined-sessions",children:[I.jsx("h2",{children:"Combined Photo Sessions"}),I.jsx("div",{className:"sessions-grid",children:i.map((a,l)=>I.jsxs("div",{className:"session-card",children:[I.jsxs("h3",{children:["Session: ",a.id.substring(0,8),"..."]}),I.jsx("div",{className:"session-photos-preview",children:a.photos.slice(0,4).map((c,d)=>I.jsx("div",{className:"preview-photo",children:I.jsx("img",{src:c.dataUrl,alt:`Session preview ${d}`})},d))}),I.jsx("p",{children:new Date(a.timestamp).toLocaleString()})]},l))})]}),n.length>0?I.jsxs("div",{className:"album-content",children:[I.jsx("h2",{children:"Individual Photos"}),I.jsx(RS.Gallery,{images:n.map(a=>({src:a.url,thumbnail:a.url,thumbnailWidth:a.width,thumbnailHeight:a.height,caption:new Date(a.timestamp).toLocaleString(),alt:`Photo taken at ${new Date(a.timestamp).toLocaleString()}`})),enableImageSelection:!1,rowHeight:180,margin:4})]}):I.jsx("div",{className:"empty-album",children:I.jsx("p",{children:"No photos yet. Start a new session to take some pictures!"})})]})},JL=j.createContext(null),XL=({children:t,value:e})=>I.jsx(JL.Provider,{value:e,children:t});function ZL(){const[t,e]=j.useState("auth"),[n,r]=j.useState(null),[i,s]=j.useState(null),[o,a]=j.useState(!1),[l,c]=j.useState(null);j.useEffect(()=>{try{if(!Y.apps.length){c("Firebase initialization failed. Please check your setup.");return}a(!0)}catch(E){console.error("Error initializing app:",E),c("Failed to initialize the application. Please try again later.")}},[]),j.useEffect(()=>{if(!o)return;const E=qh.onAuthStateChanged(m=>{r(m),e(m?"session":"auth")}),f=new URLSearchParams(window.location.search).get("sessionId");return f&&s(f),()=>E()},[o]);const d=E=>{s(E),e("camera")},u=E=>{s(E),e("camera")},h=()=>{s(null),e("session")},g=()=>{e("album")},_=()=>{e("session")},v=async()=>{try{await qh.signOut(),e("auth"),s(null)}catch(E){console.error("Error signing out:",E)}};return l?I.jsx("div",{className:"app-container",children:I.jsx("div",{className:"error",children:l})}):o?I.jsx(XL,{value:{user:n,sessionId:i},children:I.jsxs("div",{className:`app-container ${t==="camera"?"camera-mode":""}`,children:[t!=="camera"&&I.jsx("div",{className:"flex justify-center items-center w-full mb-4",children:I.jsx(qL,{})}),t==="auth"&&I.jsx(dL,{onCreateSession:d,onJoinSession:u,onSignOut:v}),t==="session"&&I.jsx(hL,{onCreateSession:d,onJoinSession:u,onSignOut:v,onViewAlbum:g,initialSessionId:i}),t==="camera"&&I.jsx(QL,{sessionId:i,onExitSession:h,onSignOut:v}),t==="album"&&I.jsx(YL,{onCreateSession:d,onReturn:_})]})}):I.jsx("div",{className:"app-container",children:I.jsx("div",{children:"Loading..."})})}Sd.createRoot(document.getElementById("root")).render(I.jsx(KS.StrictMode,{children:I.jsx(ZL,{})}));
//# sourceMappingURL=main-ca153256.js.map
