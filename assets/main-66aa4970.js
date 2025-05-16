(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w_={exports:{}},dc={},E_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),q0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),Y0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),eS=Symbol.for("react.suspense"),tS=Symbol.for("react.memo"),nS=Symbol.for("react.lazy"),Bp=Symbol.iterator;function rS(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I_=Object.assign,C_={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||S_}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T_(){}T_.prototype=Ns.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||S_}var Ah=Ph.prototype=new T_;Ah.constructor=Ph;I_(Ah,Ns.prototype);Ah.isPureReactComponent=!0;var jp=Array.isArray,k_=Object.prototype.hasOwnProperty,xh={current:null},R_={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k_.call(e,r)&&!R_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:t,key:s,ref:o,props:i,_owner:xh.current}}function iS(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function sS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $p=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sS(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case q0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cu(o,0):r,jp(i)?(n="",t!=null&&(n=t.replace($p,"$&/")+"/"),Za(i,e,n,"",function(c){return c})):i!=null&&(Oh(i)&&(i=iS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($p,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cu(s,a);o+=Za(s,e,n,l,i)}else if(l=rS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cu(s,a++),o+=Za(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},el={transition:null},aS={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:el,ReactCurrentOwner:xh};function N_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Ns;oe.Fragment=K0;oe.Profiler=Y0;oe.PureComponent=Ph;oe.StrictMode=Q0;oe.Suspense=eS;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;oe.act=N_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)k_.call(e,l)&&!R_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ca,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:X0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J0,_context:t},t.Consumer=t};oe.createElement=b_;oe.createFactory=function(t){var e=b_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:Z0,render:t}};oe.isValidElement=Oh;oe.lazy=function(t){return{$$typeof:nS,_payload:{_status:-1,_result:t},_init:oS}};oe.memo=function(t,e){return{$$typeof:tS,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};oe.unstable_act=N_;oe.useCallback=function(t,e){return Ct.current.useCallback(t,e)};oe.useContext=function(t){return Ct.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Ct.current.useEffect(t,e)};oe.useId=function(){return Ct.current.useId()};oe.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Ct.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};oe.useRef=function(t){return Ct.current.useRef(t)};oe.useState=function(t){return Ct.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Ct.current.useTransition()};oe.version="18.3.1";E_.exports=oe;var W=E_.exports;const lS=H0(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=W,uS=Symbol.for("react.element"),dS=Symbol.for("react.fragment"),hS=Object.prototype.hasOwnProperty,fS=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pS={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hS.call(e,r)&&!pS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uS,type:t,key:s,ref:o,props:i,_owner:fS.current}}dc.Fragment=dS;dc.jsx=P_;dc.jsxs=P_;w_.exports=dc;var E=w_.exports,id={},A_={exports:{}},Gt={},x_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Q){var J=M.length;M.push(Q);e:for(;0<J;){var C=J-1>>>1,S=M[C];if(0<i(S,Q))M[C]=Q,M[J]=S,J=C;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Q=M[0],J=M.pop();if(J!==Q){M[0]=J;e:for(var C=0,S=M.length,$=S>>>1;C<$;){var v=2*(C+1)-1,T=M[v],I=v+1,L=M[I];if(0>i(T,J))I<S&&0>i(L,T)?(M[C]=L,M[I]=J,C=I):(M[C]=T,M[v]=J,C=v);else if(I<S&&0>i(L,J))M[C]=L,M[I]=J,C=I;else break e}}return Q}function i(M,Q){var J=M.sortIndex-Q.sortIndex;return J!==0?J:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,g=!1,_=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=M)r(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function y(M){if(w=!1,m(M),!_)if(n(l)!==null)_=!0,cr(k);else{var Q=n(c);Q!==null&&ur(y,Q.startTime-M)}}function k(M,Q){_=!1,w&&(w=!1,p(b),b=-1),g=!0;var J=h;try{for(m(Q),u=n(l);u!==null&&(!(u.expirationTime>Q)||M&&!gt());){var C=u.callback;if(typeof C=="function"){u.callback=null,h=u.priorityLevel;var S=C(u.expirationTime<=Q);Q=t.unstable_now(),typeof S=="function"?u.callback=S:u===n(l)&&r(l),m(Q)}else r(l);u=n(l)}if(u!==null)var $=!0;else{var v=n(c);v!==null&&ur(y,v.startTime-Q),$=!1}return $}finally{u=null,h=J,g=!1}}var D=!1,O=null,b=-1,Z=5,Y=-1;function gt(){return!(t.unstable_now()-Y<Z)}function yn(){if(O!==null){var M=t.unstable_now();Y=M;var Q=!0;try{Q=O(!0,M)}finally{Q?Mn():(D=!1,O=null)}}else D=!1}var Mn;if(typeof f=="function")Mn=function(){f(yn)};else if(typeof MessageChannel<"u"){var Ui=new MessageChannel,Mi=Ui.port2;Ui.port1.onmessage=yn,Mn=function(){Mi.postMessage(null)}}else Mn=function(){A(yn,0)};function cr(M){O=M,D||(D=!0,Mn())}function ur(M,Q){b=A(function(){M(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,cr(k))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var J=h;h=Q;try{return M()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=h;h=M;try{return Q()}finally{h=J}},t.unstable_scheduleCallback=function(M,Q,J){var C=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?C+J:C):J=C,M){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=J+S,M={id:d++,callback:Q,priorityLevel:M,startTime:J,expirationTime:S,sortIndex:-1},J>C?(M.sortIndex=J,e(c,M),n(l)===null&&M===n(c)&&(w?(p(b),b=-1):w=!0,ur(y,J-C))):(M.sortIndex=S,e(l,M),_||g||(_=!0,cr(k))),M},t.unstable_shouldYield=gt,t.unstable_wrapCallback=function(M){var Q=h;return function(){var J=h;h=Q;try{return M.apply(this,arguments)}finally{h=J}}}})(O_);x_.exports=O_;var mS=x_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=W,$t=mS;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D_=new Set,bo={};function bi(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(bo[t]=e,t=0;t<e.length;t++)D_.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,_S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},zp={};function vS(t){return sd.call(zp,t)?!0:sd.call(Wp,t)?!1:_S.test(t)?zp[t]=!0:(Wp[t]=!0,!1)}function yS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wS(t,e,n,r){if(e===null||typeof e>"u"||yS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Lh);lt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Lh);lt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Lh);lt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wS(e,n,i,r)&&(n=null),r||i===null?vS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),M_=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,uu;function io(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var du=!1;function hu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function ES(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case zi:return"Portal";case od:return"Profiler";case Mh:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:cd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return cd(t(e))}catch{}}return null}function SS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IS(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=IS(t))}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ud(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j_(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function dd(t,e){j_(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(so(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function $_(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CS=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){CS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function G_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TS=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(TS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,rs=null,is=null;function Qp(t){if(t=ha(t)){if(typeof vd!="function")throw Error(R(280));var e=t.stateNode;e&&(e=gc(e),vd(t.stateNode,t.type,e))}}function H_(t){rs?is?is.push(t):is=[t]:rs=t}function q_(){if(rs){var t=rs,e=is;if(is=rs=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function K_(t,e){return t(e)}function Q_(){}var fu=!1;function Y_(t,e,n){if(fu)return t(e,n);fu=!0;try{return K_(t,e,n)}finally{fu=!1,(rs!==null||is!==null)&&(Q_(),q_())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var yd=!1;if(Jn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){yd=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{yd=!1}function kS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ho=!1,_l=null,vl=!1,wd=null,RS={onError:function(t){ho=!0,_l=t}};function bS(t,e,n,r,i,s,o,a,l){ho=!1,_l=null,kS.apply(RS,arguments)}function NS(t,e,n,r,i,s,o,a,l){if(bS.apply(this,arguments),ho){if(ho){var c=_l;ho=!1,_l=null}else throw Error(R(198));vl||(vl=!0,wd=c)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yp(t){if(Ni(t)!==t)throw Error(R(188))}function PS(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yp(i),t;if(s===r)return Yp(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function X_(t){return t=PS(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var ev=$t.unstable_scheduleCallback,Jp=$t.unstable_cancelCallback,AS=$t.unstable_shouldYield,xS=$t.unstable_requestPaint,Ue=$t.unstable_now,OS=$t.unstable_getCurrentPriorityLevel,$h=$t.unstable_ImmediatePriority,tv=$t.unstable_UserBlockingPriority,yl=$t.unstable_NormalPriority,DS=$t.unstable_LowPriority,nv=$t.unstable_IdlePriority,hc=null,Pn=null;function LS(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:FS,US=Math.log,MS=Math.LN2;function FS(t){return t>>>=0,t===0?32:31-(US(t)/MS|0)|0}var Da=64,La=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oo(a):(s&=o,s!==0&&(r=oo(s)))}else o=n&~i,o!==0?r=oo(o):s!==0&&(r=oo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function BS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=BS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function $S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,zh,ov,av,lv,Sd=!1,Ua=[],Sr=null,Ir=null,Cr=null,Ao=new Map,xo=new Map,mr=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zS(t,e,n,r,i){switch(e){case"focusin":return Sr=Vs(Sr,t,e,n,r,i),!0;case"dragenter":return Ir=Vs(Ir,t,e,n,r,i),!0;case"mouseover":return Cr=Vs(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Vs(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Vs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function cv(t){var e=ti(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_d=r,n.target.dispatchEvent(r),_d=null}else return e=ha(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zp(t,e,n){tl(t)&&n.delete(e)}function VS(){Sd=!1,Sr!==null&&tl(Sr)&&(Sr=null),Ir!==null&&tl(Ir)&&(Ir=null),Cr!==null&&tl(Cr)&&(Cr=null),Ao.forEach(Zp),xo.forEach(Zp)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,VS)))}function Oo(t){function e(i){return Gs(i,t)}if(0<Ua.length){Gs(Ua[0],t);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&Gs(Sr,t),Ir!==null&&Gs(Ir,t),Cr!==null&&Gs(Cr,t),Ao.forEach(e),xo.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)cv(n),n.blockedOn===null&&mr.shift()}var ss=ir.ReactCurrentBatchConfig,El=!0;function GS(t,e,n,r){var i=fe,s=ss.transition;ss.transition=null;try{fe=1,Vh(t,e,n,r)}finally{fe=i,ss.transition=s}}function HS(t,e,n,r){var i=fe,s=ss.transition;ss.transition=null;try{fe=4,Vh(t,e,n,r)}finally{fe=i,ss.transition=s}}function Vh(t,e,n,r){if(El){var i=Id(t,e,n,r);if(i===null)Cu(t,e,r,Sl,n),Xp(t,r);else if(zS(i,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<WS.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&sv(s),s=Id(t,e,n,r),s===null&&Cu(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cu(t,e,r,null,n)}}var Sl=null;function Id(t,e,n,r){if(Sl=null,t=jh(r),t=ti(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OS()){case $h:return 1;case tv:return 4;case yl:case DS:return 16;case nv:return 536870912;default:return 16}default:return 16}}var _r=null,Gh=null,nl=null;function dv(){if(nl)return nl;var t,e=Gh,n=e.length,r,i="value"in _r?_r.value:_r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function em(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:em,this.isPropagationStopped=em,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Ht(Ps),da=Oe({},Ps,{view:0,detail:0}),qS=Ht(da),mu,gu,Hs,fc=Oe({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(mu=t.screenX-Hs.screenX,gu=t.screenY-Hs.screenY):gu=mu=0,Hs=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),tm=Ht(fc),KS=Oe({},fc,{dataTransfer:0}),QS=Ht(KS),YS=Oe({},da,{relatedTarget:0}),_u=Ht(YS),JS=Oe({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Ht(JS),ZS=Oe({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eI=Ht(ZS),tI=Oe({},Ps,{data:0}),nm=Ht(tI),nI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iI[t])?!!e[t]:!1}function qh(){return sI}var oI=Oe({},da,{key:function(t){if(t.key){var e=nI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aI=Ht(oI),lI=Oe({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Ht(lI),cI=Oe({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),uI=Ht(cI),dI=Oe({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),hI=Ht(dI),fI=Oe({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pI=Ht(fI),mI=[9,13,27,32],Kh=Jn&&"CompositionEvent"in window,fo=null;Jn&&"documentMode"in document&&(fo=document.documentMode);var gI=Jn&&"TextEvent"in window&&!fo,hv=Jn&&(!Kh||fo&&8<fo&&11>=fo),im=String.fromCharCode(32),sm=!1;function fv(t,e){switch(t){case"keyup":return mI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function _I(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(sm=!0,im);case"textInput":return t=e.data,t===im&&sm?null:t;default:return null}}function vI(t,e){if(Gi)return t==="compositionend"||!Kh&&fv(t,e)?(t=dv(),nl=Gh=_r=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hv&&e.locale!=="ko"?null:e.data;default:return null}}var yI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yI[t.type]:e==="textarea"}function mv(t,e,n,r){H_(r),e=Il(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Do=null;function wI(t){kv(t,0)}function pc(t){var e=Ki(t);if(B_(e))return t}function EI(t,e){if(t==="change")return e}var gv=!1;if(Jn){var vu;if(Jn){var yu="oninput"in document;if(!yu){var am=document.createElement("div");am.setAttribute("oninput","return;"),yu=typeof am.oninput=="function"}vu=yu}else vu=!1;gv=vu&&(!document.documentMode||9<document.documentMode)}function lm(){po&&(po.detachEvent("onpropertychange",_v),Do=po=null)}function _v(t){if(t.propertyName==="value"&&pc(Do)){var e=[];mv(e,Do,t,jh(t)),Y_(wI,e)}}function SI(t,e,n){t==="focusin"?(lm(),po=e,Do=n,po.attachEvent("onpropertychange",_v)):t==="focusout"&&lm()}function II(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(Do)}function CI(t,e){if(t==="click")return pc(e)}function TI(t,e){if(t==="input"||t==="change")return pc(e)}function kI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:kI;function Lo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=cm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yv(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RI(t){var e=yv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vv(n.ownerDocument.documentElement,n)){if(r!==null&&Qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=um(n,s);var o=um(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bI=Jn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Cd=null,mo=null,Td=!1;function dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||Hi==null||Hi!==gl(r)||(r=Hi,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Lo(mo,r)||(mo=r,r=Il(Cd,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},wu={},wv={};Jn&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function mc(t){if(wu[t])return wu[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return wu[t]=e[n];return t}var Ev=mc("animationend"),Sv=mc("animationiteration"),Iv=mc("animationstart"),Cv=mc("transitionend"),Tv=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Tv.set(t,e),bi(e,[t])}for(var Eu=0;Eu<hm.length;Eu++){var Su=hm[Eu],NI=Su.toLowerCase(),PI=Su[0].toUpperCase()+Su.slice(1);Vr(NI,"on"+PI)}Vr(Ev,"onAnimationEnd");Vr(Sv,"onAnimationIteration");Vr(Iv,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Cv,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NS(r,e,void 0,t),t.currentTarget=null}function kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fm(i,a,c),s=l}}}if(vl)throw t=wd,vl=!1,wd=null,t}function we(t,e){var n=e[Pd];n===void 0&&(n=e[Pd]=new Set);var r=t+"__bubble";n.has(r)||(Rv(e,t,2,!1),n.add(r))}function Iu(t,e,n){var r=0;e&&(r|=4),Rv(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[Ba]){t[Ba]=!0,D_.forEach(function(n){n!=="selectionchange"&&(AI.has(n)||Iu(n,!1,t),Iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,Iu("selectionchange",!1,e))}}function Rv(t,e,n,r){switch(uv(e)){case 1:var i=GS;break;case 4:i=HS;break;default:i=Vh}n=i.bind(null,e,n,t),i=void 0,!yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y_(function(){var c=s,d=jh(n),u=[];e:{var h=Tv.get(t);if(h!==void 0){var g=Hh,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":g=aI;break;case"focusin":_="focus",g=_u;break;case"focusout":_="blur",g=_u;break;case"beforeblur":case"afterblur":g=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uI;break;case Ev:case Sv:case Iv:g=XS;break;case Cv:g=hI;break;case"scroll":g=qS;break;case"wheel":g=pI;break;case"copy":case"cut":case"paste":g=eI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rm}var w=(e&4)!==0,A=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Po(f,p),y!=null&&w.push(Mo(f,y,m)))),A)break;f=f.return}0<w.length&&(h=new g(h,_,null,n,d),u.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==_d&&(_=n.relatedTarget||n.fromElement)&&(ti(_)||_[Xn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?ti(_):null,_!==null&&(A=Ni(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(w=tm,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=rm,y="onPointerLeave",p="onPointerEnter",f="pointer"),A=g==null?h:Ki(g),m=_==null?h:Ki(_),h=new w(y,f+"leave",g,n,d),h.target=A,h.relatedTarget=m,y=null,ti(d)===c&&(w=new w(p,f+"enter",_,n,d),w.target=m,w.relatedTarget=A,y=w),A=y,g&&_)t:{for(w=g,p=_,f=0,m=w;m;m=Fi(m))f++;for(m=0,y=p;y;y=Fi(y))m++;for(;0<f-m;)w=Fi(w),f--;for(;0<m-f;)p=Fi(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Fi(w),p=Fi(p)}w=null}else w=null;g!==null&&pm(u,h,g,w,!1),_!==null&&A!==null&&pm(u,A,_,w,!0)}}e:{if(h=c?Ki(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=EI;else if(om(h))if(gv)k=TI;else{k=II;var D=SI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=CI);if(k&&(k=k(t,c))){mv(u,k,n,d);break e}D&&D(t,h,c),t==="focusout"&&(D=h._wrapperState)&&D.controlled&&h.type==="number"&&hd(h,"number",h.value)}switch(D=c?Ki(c):window,t){case"focusin":(om(D)||D.contentEditable==="true")&&(Hi=D,Cd=c,mo=null);break;case"focusout":mo=Cd=Hi=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,dm(u,n,d);break;case"selectionchange":if(bI)break;case"keydown":case"keyup":dm(u,n,d)}var O;if(Kh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Gi?fv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(hv&&n.locale!=="ko"&&(Gi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Gi&&(O=dv()):(_r=d,Gh="value"in _r?_r.value:_r.textContent,Gi=!0)),D=Il(c,b),0<D.length&&(b=new nm(b,t,null,n,d),u.push({event:b,listeners:D}),O?b.data=O:(O=pv(n),O!==null&&(b.data=O)))),(O=gI?_I(t,n):vI(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(d=new nm("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=O))}kv(u,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Mo(t,s,i)),s=Po(t,e),s!=null&&r.push(Mo(t,s,i))),t=t.return}return r}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Po(n,s),l!=null&&o.unshift(Mo(n,l,a))):i||(l=Po(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xI=/\r\n?/g,OI=/\u0000|\uFFFD/g;function mm(t){return(typeof t=="string"?t:""+t).replace(xI,`
`).replace(OI,"")}function ja(t,e,n){if(e=mm(e),mm(t)!==e&&n)throw Error(R(425))}function Cl(){}var kd=null,Rd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,DI=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,LI=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(t){return gm.resolve(null).then(t).catch(UI)}:Nd;function UI(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),In="__reactFiber$"+As,Fo="__reactProps$"+As,Xn="__reactContainer$"+As,Pd="__reactEvents$"+As,MI="__reactListeners$"+As,FI="__reactHandles$"+As;function ti(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[In])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[In]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function gc(t){return t[Fo]||null}var Ad=[],Qi=-1;function Gr(t){return{current:t}}function Ee(t){0>Qi||(t.current=Ad[Qi],Ad[Qi]=null,Qi--)}function _e(t,e){Qi++,Ad[Qi]=t.current,t.current=e}var Lr={},mt=Gr(Lr),At=Gr(!1),pi=Lr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Tl(){Ee(At),Ee(mt)}function vm(t,e,n){if(mt.current!==Lr)throw Error(R(168));_e(mt,e),_e(At,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,SS(t)||"Unknown",i));return Oe({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,pi=mt.current,_e(mt,t),_e(At,At.current),!0}function ym(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=bv(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,Ee(At),Ee(mt),_e(mt,t)):Ee(At),_e(At,n)}var Bn=null,_c=!1,ku=!1;function Nv(t){Bn===null?Bn=[t]:Bn.push(t)}function BI(t){_c=!0,Nv(t)}function Hr(){if(!ku&&Bn!==null){ku=!0;var t=0,e=fe;try{var n=Bn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,_c=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),ev($h,Hr),i}finally{fe=e,ku=!1}}return null}var Yi=[],Ji=0,Rl=null,bl=0,qt=[],Kt=0,mi=null,$n=1,Wn="";function Jr(t,e){Yi[Ji++]=bl,Yi[Ji++]=Rl,Rl=t,bl=e}function Pv(t,e,n){qt[Kt++]=$n,qt[Kt++]=Wn,qt[Kt++]=mi,mi=t;var r=$n;t=Wn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-fn(e)+i|n<<i|r,Wn=s+t}else $n=1<<s|n<<i|r,Wn=t}function Yh(t){t.return!==null&&(Jr(t,1),Pv(t,1,0))}function Jh(t){for(;t===Rl;)Rl=Yi[--Ji],Yi[Ji]=null,bl=Yi[--Ji],Yi[Ji]=null;for(;t===mi;)mi=qt[--Kt],qt[Kt]=null,Wn=qt[--Kt],qt[Kt]=null,$n=qt[--Kt],qt[Kt]=null}var jt=null,Ft=null,be=!1,dn=null;function Av(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Ft=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:$n,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Ft=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(be){var e=Ft;if(e){var n=e;if(!wm(t,e)){if(xd(t))throw Error(R(418));e=Tr(n.nextSibling);var r=jt;e&&wm(t,e)?Av(r,n):(t.flags=t.flags&-4097|2,be=!1,jt=t)}}else{if(xd(t))throw Error(R(418));t.flags=t.flags&-4097|2,be=!1,jt=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function $a(t){if(t!==jt)return!1;if(!be)return Em(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Ft)){if(xd(t))throw xv(),Error(R(418));for(;e;)Av(t,e),e=Tr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=jt?Tr(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Ft;t;)t=Tr(t.nextSibling)}function _s(){Ft=jt=null,be=!1}function Xh(t){dn===null?dn=[t]:dn.push(t)}var jI=ir.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sm(t){var e=t._init;return e(t._payload)}function Ov(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Nr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=Ou(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var k=m.type;return k===Vi?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===fr&&Sm(k)===f.type)?(y=i(f,m.props),y.ref=qs(p,f,m),y.return=p,y):(y=ul(m.type,m.key,m.props,null,p.mode,y),y.ref=qs(p,f,m),y.return=p,y)}function c(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Du(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,k){return f===null||f.tag!==7?(f=li(m,p.mode,y,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ou(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Aa:return m=ul(f.type,f.key,f.props,null,p.mode,m),m.ref=qs(p,null,f),m.return=p,m;case zi:return f=Du(f,p.mode,m),f.return=p,f;case fr:var y=f._init;return u(p,y(f._payload),m)}if(so(f)||Ws(f))return f=li(f,p.mode,m,null),f.return=p,f;Wa(p,f)}return null}function h(p,f,m,y){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return m.key===k?l(p,f,m,y):null;case zi:return m.key===k?c(p,f,m,y):null;case fr:return k=m._init,h(p,f,k(m._payload),y)}if(so(m)||Ws(m))return k!==null?null:d(p,f,m,y,null);Wa(p,m)}return null}function g(p,f,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,k);case zi:return p=p.get(y.key===null?m:y.key)||null,c(f,p,y,k);case fr:var D=y._init;return g(p,f,m,D(y._payload),k)}if(so(y)||Ws(y))return p=p.get(m)||null,d(f,p,y,k,null);Wa(f,y)}return null}function _(p,f,m,y){for(var k=null,D=null,O=f,b=f=0,Z=null;O!==null&&b<m.length;b++){O.index>b?(Z=O,O=null):Z=O.sibling;var Y=h(p,O,m[b],y);if(Y===null){O===null&&(O=Z);break}t&&O&&Y.alternate===null&&e(p,O),f=s(Y,f,b),D===null?k=Y:D.sibling=Y,D=Y,O=Z}if(b===m.length)return n(p,O),be&&Jr(p,b),k;if(O===null){for(;b<m.length;b++)O=u(p,m[b],y),O!==null&&(f=s(O,f,b),D===null?k=O:D.sibling=O,D=O);return be&&Jr(p,b),k}for(O=r(p,O);b<m.length;b++)Z=g(O,p,b,m[b],y),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?b:Z.key),f=s(Z,f,b),D===null?k=Z:D.sibling=Z,D=Z);return t&&O.forEach(function(gt){return e(p,gt)}),be&&Jr(p,b),k}function w(p,f,m,y){var k=Ws(m);if(typeof k!="function")throw Error(R(150));if(m=k.call(m),m==null)throw Error(R(151));for(var D=k=null,O=f,b=f=0,Z=null,Y=m.next();O!==null&&!Y.done;b++,Y=m.next()){O.index>b?(Z=O,O=null):Z=O.sibling;var gt=h(p,O,Y.value,y);if(gt===null){O===null&&(O=Z);break}t&&O&&gt.alternate===null&&e(p,O),f=s(gt,f,b),D===null?k=gt:D.sibling=gt,D=gt,O=Z}if(Y.done)return n(p,O),be&&Jr(p,b),k;if(O===null){for(;!Y.done;b++,Y=m.next())Y=u(p,Y.value,y),Y!==null&&(f=s(Y,f,b),D===null?k=Y:D.sibling=Y,D=Y);return be&&Jr(p,b),k}for(O=r(p,O);!Y.done;b++,Y=m.next())Y=g(O,p,b,Y.value,y),Y!==null&&(t&&Y.alternate!==null&&O.delete(Y.key===null?b:Y.key),f=s(Y,f,b),D===null?k=Y:D.sibling=Y,D=Y);return t&&O.forEach(function(yn){return e(p,yn)}),be&&Jr(p,b),k}function A(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Vi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:e:{for(var k=m.key,D=f;D!==null;){if(D.key===k){if(k=m.type,k===Vi){if(D.tag===7){n(p,D.sibling),f=i(D,m.props.children),f.return=p,p=f;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===fr&&Sm(k)===D.type){n(p,D.sibling),f=i(D,m.props),f.ref=qs(p,D,m),f.return=p,p=f;break e}n(p,D);break}else e(p,D);D=D.sibling}m.type===Vi?(f=li(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=ul(m.type,m.key,m.props,null,p.mode,y),y.ref=qs(p,f,m),y.return=p,p=y)}return o(p);case zi:e:{for(D=m.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Du(m,p.mode,y),f.return=p,p=f}return o(p);case fr:return D=m._init,A(p,f,D(m._payload),y)}if(so(m))return _(p,f,m,y);if(Ws(m))return w(p,f,m,y);Wa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ou(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return A}var vs=Ov(!0),Dv=Ov(!1),Nl=Gr(null),Pl=null,Xi=null,Zh=null;function ef(){Zh=Xi=Pl=null}function tf(t){var e=Nl.current;Ee(Nl),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){Pl=t,Zh=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(Pl===null)throw Error(R(308));Xi=t,Pl.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var ni=null;function nf(t){ni===null?ni=[t]:ni.push(t)}function Lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,nf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wh(t,n)}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){u=_.call(g,u,h);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(g,u,h):_,h==null)break e;u=Oe({},u,h);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=u}}function Cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var fa={},An=Gr(fa),Bo=Gr(fa),jo=Gr(fa);function ri(t){if(t===fa)throw Error(R(174));return t}function sf(t,e){switch(_e(jo,e),_e(Bo,t),_e(An,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}Ee(An),_e(An,e)}function ys(){Ee(An),Ee(Bo),Ee(jo)}function Mv(t){ri(jo.current);var e=ri(An.current),n=pd(e,t.type);e!==n&&(_e(Bo,t),_e(An,n))}function of(t){Bo.current===t&&(Ee(An),Ee(Bo))}var Pe=Gr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function af(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var sl=ir.ReactCurrentDispatcher,bu=ir.ReactCurrentBatchConfig,gi=0,xe=null,ze=null,Qe=null,Ol=!1,go=!1,$o=0,$I=0;function ut(){throw Error(R(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(gi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?GI:HI,t=n(r,i),go){s=0;do{if(go=!1,$o=0,25<=s)throw Error(R(301));s+=1,Qe=ze=null,e.updateQueue=null,sl.current=qI,t=n(r,i)}while(go)}if(sl.current=Dl,e=ze!==null&&ze.next!==null,gi=0,Qe=ze=xe=null,Ol=!1,e)throw Error(R(300));return t}function uf(){var t=$o!==0;return $o=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?xe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function rn(){if(ze===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Qe===null?xe.memoizedState:Qe.next;if(e!==null)Qe=e,ze=t;else{if(t===null)throw Error(R(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Qe===null?xe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Wo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=rn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gi&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,xe.lanes|=d,_i|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=rn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function Bv(t,e){var n=xe,r=rn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,df(Wv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,zo(9,$v.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(R(349));gi&30||jv(n,e,i)}return i}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $v(t,e,n,r){e.value=n,e.getSnapshot=r,zv(e)&&Vv(t)}function Wv(t,e,n){return n(function(){zv(e)&&Vv(t)})}function zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function Vv(t){var e=Zn(t,1);e!==null&&pn(e,t,1,-1)}function Tm(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=VI.bind(null,xe,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gv(){return rn().memoizedState}function ol(t,e,n,r){var i=Sn();xe.flags|=t,i.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function vc(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&lf(r,o.deps)){i.memoizedState=zo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=zo(1|e,n,s,r)}function km(t,e){return ol(8390656,8,t,e)}function df(t,e){return vc(2048,8,t,e)}function Hv(t,e){return vc(4,2,t,e)}function qv(t,e){return vc(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,Kv.bind(null,e,t),n)}function hf(){}function Yv(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jv(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return gi&21?(gn(n,e)||(n=rv(),xe.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function WI(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=bu.transition;bu.transition={};try{t(!1),e()}finally{fe=n,bu.transition=r}}function Zv(){return rn().memoizedState}function zI(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ey(t))ty(e,n);else if(n=Lv(t,e,n,r),n!==null){var i=St();pn(n,t,r,i),ny(n,e,r)}}function VI(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ey(t))ty(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,nf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Lv(t,e,i,r),n!==null&&(i=St(),pn(n,t,r,i),ny(n,e,r))}}function ey(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function ty(t,e){go=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ny(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wh(t,n)}}var Dl={readContext:nn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},GI={readContext:nn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zI.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:hf,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=WI.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Sn();if(be){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Ze===null)throw Error(R(349));gi&30||jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(Wv.bind(null,r,s,t),[t]),r.flags|=2048,zo(9,$v.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ze.identifierPrefix;if(be){var n=Wn,r=$n;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$I++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:nn,useCallback:Yv,useContext:nn,useEffect:df,useImperativeHandle:Qv,useInsertionEffect:Hv,useLayoutEffect:qv,useMemo:Jv,useReducer:Nu,useRef:Gv,useState:function(){return Nu(Wo)},useDebugValue:hf,useDeferredValue:function(t){var e=rn();return Xv(e,ze.memoizedState,t)},useTransition:function(){var t=Nu(Wo)[0],e=rn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Bv,useId:Zv,unstable_isNewReconciler:!1},qI={readContext:nn,useCallback:Yv,useContext:nn,useEffect:df,useImperativeHandle:Qv,useInsertionEffect:Hv,useLayoutEffect:qv,useMemo:Jv,useReducer:Pu,useRef:Gv,useState:function(){return Pu(Wo)},useDebugValue:hf,useDeferredValue:function(t){var e=rn();return ze===null?e.memoizedState=t:Xv(e,ze.memoizedState,t)},useTransition:function(){var t=Pu(Wo)[0],e=rn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Bv,useId:Zv,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=br(t),s=Hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(pn(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=br(t),s=Hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(pn(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=br(t),i=Hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(pn(e,t,r,n),il(e,t,r))}};function Rm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,r)||!Lo(i,s):!0}function ry(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=xt(e)?pi:mt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=xt(e)?pi:mt.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yc.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=ES(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KI=typeof WeakMap=="function"?WeakMap:Map;function iy(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,qd=r),Md(t,e)},n}function sy(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lC.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var QI=ir.ReactCurrentOwner,Nt=!1;function yt(t,e,n,r){e.child=t===null?Dv(e,null,n,r):vs(e,t.child,n,r)}function xm(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=cf(t,e,n,r,s,i),n=uf(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(be&&n&&Yh(e),e.flags|=1,yt(t,e,r,i),e.child)}function Om(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oy(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function oy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Lo(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,er(t,e,i)}return Fd(t,e,n,r,i)}function ay(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(es,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(es,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(es,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(es,Ut),Ut|=r;return yt(t,e,i,n),e.child}function ly(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fd(t,e,n,r,i){var s=xt(n)?pi:mt.current;return s=gs(e,s),os(e,i),n=cf(t,e,n,r,s,i),r=uf(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(be&&r&&Yh(e),e.flags|=1,yt(t,e,n,i),e.child)}function Dm(t,e,n,r,i){if(xt(n)){var s=!0;kl(e)}else s=!1;if(os(e,i),e.stateNode===null)al(t,e),ry(e,n,r),Ud(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=xt(n)?pi:mt.current,c=gs(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&bm(e,o,r,c),pr=!1;var h=e.memoizedState;o.state=h,Al(e,r,o,i),l=e.memoizedState,a!==r||h!==l||At.current||pr?(typeof d=="function"&&(Ld(e,n,d,r),l=e.memoizedState),(a=pr||Rm(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=xt(n)?pi:mt.current,l=gs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&bm(e,o,r,l),pr=!1,h=e.memoizedState,o.state=h,Al(e,r,o,i);var _=e.memoizedState;a!==u||h!==_||At.current||pr?(typeof g=="function"&&(Ld(e,n,g,r),_=e.memoizedState),(c=pr||Rm(e,n,c,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Bd(t,e,n,r,s,i)}function Bd(t,e,n,r,i,s){ly(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ym(e,n,!1),er(t,e,s);r=e.stateNode,QI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&ym(e,n,!0),e.child}function cy(t){var e=t.stateNode;e.pendingContext?vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vm(t,e.context,!1),sf(t,e.containerInfo)}function Lm(t,e,n,r,i){return _s(),Xh(i),e.flags|=256,yt(t,e,n,r),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function uy(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Pe,i&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=jd,t):ff(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ff(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&Xh(r),vs(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Au(Error(R(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sc({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=jd,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Au(s,r,void 0),za(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),pn(r,t,i,-1))}return yf(),r=Au(Error(R(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Tr(i.nextSibling),jt=e,be=!0,dn=null,t!==null&&(qt[Kt++]=$n,qt[Kt++]=Wn,qt[Kt++]=mi,$n=t.id,Wn=t.overflow,mi=e),e=ff(e,r.children),e.flags|=4096,e)}function Um(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dd(t.return,e,n)}function xu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,n,e);else if(t.tag===19)Um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JI(t,e,n){switch(e.tag){case 3:cy(e),_s();break;case 5:Mv(e);break;case 1:xt(e.type)&&kl(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?uy(t,e,n):(_e(Pe,Pe.current&1),t=er(t,e,n),t!==null?t.sibling:null);_e(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,ay(t,e,n)}return er(t,e,n)}var hy,Wd,fy,py;hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};fy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(An.current);var s=null;switch(n){case"input":i=ud(t,i),r=ud(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=fd(t,i),r=fd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}md(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};py=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XI(t,e,n){var r=e.pendingProps;switch(Jh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return xt(e.type)&&Tl(),dt(e),null;case 3:return r=e.stateNode,ys(),Ee(At),Ee(mt),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Yd(dn),dn=null))),Wd(t,e),dt(e),null;case 5:of(e);var i=ri(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)fy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return dt(e),null}if(t=ri(An.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ao.length;i++)we(ao[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Gp(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":qp(r,s),we("invalid",r)}md(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,a,t),i=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":xa(r),Hp(r,s,!0);break;case"textarea":xa(r),Kp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Fo]=r,hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ao.length;i++)we(ao[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Gp(t,r),i=ud(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),we("invalid",t);break;case"textarea":qp(t,r),i=fd(t,r),we("invalid",t);break;default:i=r}md(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":xa(t),Hp(t,r,!1);break;case"textarea":xa(t),Kp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)py(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ri(jo.current),ri(An.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return dt(e),null;case 13:if(Ee(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Ft!==null&&e.mode&1&&!(e.flags&128))xv(),_s(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[In]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else dn!==null&&(Yd(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ge===0&&(Ge=3):yf())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return ys(),Wd(t,e),t===null&&Uo(e.stateNode.containerInfo),dt(e),null;case 10:return tf(e.type._context),dt(e),null;case 17:return xt(e.type)&&Tl(),dt(e),null;case 19:if(Ee(Pe),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Es&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return dt(e),null}else 2*Ue()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,_e(Pe,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function ZI(t,e){switch(Jh(e),e.tag){case 1:return xt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),Ee(At),Ee(mt),af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return of(e),null;case 13:if(Ee(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Pe),null;case 4:return ys(),null;case 10:return tf(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Va=!1,ht=!1,eC=typeof WeakSet=="function"?WeakSet:Set,F=null;function Zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function zd(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Mm=!1;function tC(t,e){if(kd=El,t=yv(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},El=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,A=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:cn(e.type,w),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(y){Le(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return _=Mm,Mm=!1,_}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zd(e,n,s)}i=i.next}while(i!==r)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function my(t){var e=t.alternate;e!==null&&(t.alternate=null,my(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Fo],delete e[Pd],delete e[MI],delete e[FI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gy(t){return t.tag===5||t.tag===3||t.tag===4}function Fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var st=null,un=!1;function dr(t,e,n){for(n=n.child;n!==null;)_y(t,e,n),n=n.sibling}function _y(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:ht||Zi(n,e);case 6:var r=st,i=un;st=null,dr(t,e,n),st=r,un=i,st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),Oo(t)):Tu(st,n.stateNode));break;case 4:r=st,i=un,st=n.stateNode.containerInfo,un=!0,dr(t,e,n),st=r,un=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zd(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!ht&&(Zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,dr(t,e,n),ht=r):dr(t,e,n);break;default:dr(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(r){var i=uC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,un=!1;break e;case 3:st=a.stateNode.containerInfo,un=!0;break e;case 4:st=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(st===null)throw Error(R(160));_y(s,o,i),st=null,un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vy(e,t),e=e.sibling}function vy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),En(t),r&4){try{_o(3,t,t.return),wc(3,t)}catch(w){Le(t,t.return,w)}try{_o(5,t,t.return)}catch(w){Le(t,t.return,w)}}break;case 1:an(e,t),En(t),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(an(e,t),En(t),r&512&&n!==null&&Zi(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(w){Le(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&j_(i,s),gd(a,o);var c=gd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?G_(i,u):d==="dangerouslySetInnerHTML"?z_(i,u):d==="children"?No(i,u):Uh(i,d,u,c)}switch(a){case"input":dd(i,s);break;case"textarea":$_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ns(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(w){Le(t,t.return,w)}}break;case 6:if(an(e,t),En(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Le(t,t.return,w)}}break;case 3:if(an(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(w){Le(t,t.return,w)}break;case 4:an(e,t),En(t);break;case 13:an(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gf=Ue())),r&4&&Bm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||d,an(e,t),ht=c):an(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(F=t,d=t.child;d!==null;){for(u=F=d;F!==null;){switch(h=F,g=h.child,h.tag){case 0:case 11:case 14:case 15:_o(4,h,h.return);break;case 1:Zi(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Le(r,n,w)}}break;case 5:Zi(h,h.return);break;case 22:if(h.memoizedState!==null){$m(u);continue}}g!==null?(g.return=h,F=g):$m(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(w){Le(t,t.return,w)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){Le(t,t.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:an(e,t),En(t),r&4&&Bm(t);break;case 21:break;default:an(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gy(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=Fm(t);Hd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fm(t);Gd(t,a,o);break;default:throw Error(R(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){F=t,yy(t)}function yy(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=Va;var c=ht;if(Va=o,(ht=l)&&!c)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Wm(i):l!==null?(l.return=o,F=l):Wm(i);for(;s!==null;)F=s,yy(s),s=s.sibling;F=i,Va=a,ht=c}jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):jm(t)}}function jm(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Oo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ht||e.flags&512&&Vd(e)}catch(h){Le(e,e.return,h)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function $m(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Wm(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Vd(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Vd(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var rC=Math.ceil,Ll=ir.ReactCurrentDispatcher,pf=ir.ReactCurrentOwner,en=ir.ReactCurrentBatchConfig,ce=0,Ze=null,je=null,ot=0,Ut=0,es=Gr(0),Ge=0,Vo=null,_i=0,Ec=0,mf=0,vo=null,Rt=null,gf=0,Es=1/0,Fn=null,Ul=!1,qd=null,Rr=null,Ga=!1,vr=null,Ml=0,yo=0,Kd=null,ll=-1,cl=0;function St(){return ce&6?Ue():ll!==-1?ll:ll=Ue()}function br(t){return t.mode&1?ce&2&&ot!==0?ot&-ot:jI.transition!==null?(cl===0&&(cl=rv()),cl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:uv(t.type)),t):1}function pn(t,e,n,r){if(50<yo)throw yo=0,Kd=null,Error(R(185));ua(t,n,r),(!(ce&2)||t!==Ze)&&(t===Ze&&(!(ce&2)&&(Ec|=n),Ge===4&&gr(t,ot)),Ot(t,r),n===1&&ce===0&&!(e.mode&1)&&(Es=Ue()+500,_c&&Hr()))}function Ot(t,e){var n=t.callbackNode;jS(t,e);var r=wl(t,t===Ze?ot:0);if(r===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?BI(zm.bind(null,t)):Nv(zm.bind(null,t)),LI(function(){!(ce&6)&&Hr()}),n=null;else{switch(iv(r)){case 1:n=$h;break;case 4:n=tv;break;case 16:n=yl;break;case 536870912:n=nv;break;default:n=yl}n=Ry(n,wy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wy(t,e){if(ll=-1,cl=0,ce&6)throw Error(R(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=wl(t,t===Ze?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=ce;ce|=2;var s=Sy();(Ze!==t||ot!==e)&&(Fn=null,Es=Ue()+500,ai(t,e));do try{oC();break}catch(a){Ey(t,a)}while(1);ef(),Ll.current=s,ce=i,je!==null?e=0:(Ze=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=Qd(t,i))),e===1)throw n=Vo,ai(t,0),gr(t,r),Ot(t,Ue()),n;if(e===6)gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!iC(i)&&(e=Fl(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=Qd(t,s))),e===1))throw n=Vo,ai(t,0),gr(t,r),Ot(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Xr(t,Rt,Fn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=gf+500-Ue(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nd(Xr.bind(null,t,Rt,Fn),e);break}Xr(t,Rt,Fn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rC(r/1960))-r,10<r){t.timeoutHandle=Nd(Xr.bind(null,t,Rt,Fn),r);break}Xr(t,Rt,Fn);break;case 5:Xr(t,Rt,Fn);break;default:throw Error(R(329))}}}return Ot(t,Ue()),t.callbackNode===n?wy.bind(null,t):null}function Qd(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Yd(e)),t}function Yd(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function iC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~mf,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function zm(t){if(ce&6)throw Error(R(327));as();var e=wl(t,0);if(!(e&1))return Ot(t,Ue()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=Qd(t,r))}if(n===1)throw n=Vo,ai(t,0),gr(t,e),Ot(t,Ue()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Rt,Fn),Ot(t,Ue()),null}function _f(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Es=Ue()+500,_c&&Hr())}}function vi(t){vr!==null&&vr.tag===0&&!(ce&6)&&as();var e=ce;ce|=1;var n=en.transition,r=fe;try{if(en.transition=null,fe=1,t)return t()}finally{fe=r,en.transition=n,ce=e,!(ce&6)&&Hr()}}function vf(){Ut=es.current,Ee(es)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DI(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Jh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:ys(),Ee(At),Ee(mt),af();break;case 5:of(r);break;case 4:ys();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:tf(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Ze=t,je=t=Nr(t.current,null),ot=Ut=e,Ge=0,Vo=null,mf=Ec=_i=0,Rt=vo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function Ey(t,e){do{var n=je;try{if(ef(),sl.current=Dl,Ol){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(gi=0,Qe=ze=xe=null,go=!1,$o=0,pf.current=null,n===null||n.return===null){Ge=1,Vo=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Pm(o);if(g!==null){g.flags&=-257,Am(g,o,a,s,e),g.mode&1&&Nm(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Nm(s,c,e),yf();break e}l=Error(R(426))}}else if(be&&a.mode&1){var A=Pm(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Am(A,o,a,s,e),Xh(ws(l,a));break e}}s=l=ws(l,a),Ge!==4&&(Ge=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=iy(s,l,e);Im(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Rr===null||!Rr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sy(s,a,e);Im(s,y);break e}}s=s.return}while(s!==null)}Cy(n)}catch(k){e=k,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function Sy(){var t=Ll.current;return Ll.current=Dl,t===null?Dl:t}function yf(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(_i&268435455)&&!(Ec&268435455)||gr(Ze,ot)}function Fl(t,e){var n=ce;ce|=2;var r=Sy();(Ze!==t||ot!==e)&&(Fn=null,ai(t,e));do try{sC();break}catch(i){Ey(t,i)}while(1);if(ef(),ce=n,Ll.current=r,je!==null)throw Error(R(261));return Ze=null,ot=0,Ge}function sC(){for(;je!==null;)Iy(je)}function oC(){for(;je!==null&&!AS();)Iy(je)}function Iy(t){var e=ky(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?Cy(t):je=e,pf.current=null}function Cy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZI(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,je=null;return}}else if(n=XI(n,e,Ut),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ge===0&&(Ge=5)}function Xr(t,e,n){var r=fe,i=en.transition;try{en.transition=null,fe=1,aC(t,e,n,r)}finally{en.transition=i,fe=r}return null}function aC(t,e,n,r){do as();while(vr!==null);if(ce&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($S(t,s),t===Ze&&(je=Ze=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,Ry(yl,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=fe;fe=1;var a=ce;ce|=4,pf.current=null,tC(t,n),vy(n,t),RI(Rd),El=!!kd,Rd=kd=null,t.current=n,nC(n),xS(),ce=a,fe=o,en.transition=s}else t.current=n;if(Ga&&(Ga=!1,vr=t,Ml=i),s=t.pendingLanes,s===0&&(Rr=null),LS(n.stateNode),Ot(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=qd,qd=null,t;return Ml&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Kd?yo++:(yo=0,Kd=t):yo=0,Hr(),null}function as(){if(vr!==null){var t=iv(Ml),e=en.transition,n=fe;try{if(en.transition=null,fe=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Ml=0,ce&6)throw Error(R(331));var i=ce;for(ce|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(F=c;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var u=d.child;if(u!==null)u.return=d,F=u;else for(;F!==null;){d=F;var h=d.sibling,g=d.return;if(my(d),d===c){F=null;break}if(h!==null){h.return=g,F=h;break}F=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,F=p;break e}F=s.return}}var f=t.current;for(F=f;F!==null;){o=F;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,F=m;else e:for(o=f;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(k){Le(a,a.return,k)}if(a===o){F=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,F=y;break e}F=a.return}}if(ce=i,Hr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(hc,t)}catch{}r=!0}return r}finally{fe=n,en.transition=e}}return!1}function Vm(t,e,n){e=ws(n,e),e=iy(t,e,1),t=kr(t,e,1),e=St(),t!==null&&(ua(t,1,e),Ot(t,e))}function Le(t,e,n){if(t.tag===3)Vm(t,t,n);else for(;e!==null;){if(e.tag===3){Vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=ws(n,t),t=sy(e,t,1),e=kr(e,t,1),t=St(),e!==null&&(ua(e,1,t),Ot(e,t));break}}e=e.return}}function lC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Ue()-gf?ai(t,0):mf|=n),Ot(t,e)}function Ty(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=St();t=Zn(t,e),t!==null&&(ua(t,e,n),Ot(t,n))}function cC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ty(t,n)}function uC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Ty(t,n)}var ky;ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,JI(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,be&&e.flags&1048576&&Pv(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var i=gs(e,mt.current);os(e,n),i=cf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rf(e),i.updater=yc,e.stateNode=i,i._reactInternals=e,Ud(e,r,t,n),e=Bd(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Yh(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hC(r),t=cn(r,t),i){case 0:e=Fd(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=xm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,cn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Dm(t,e,r,i,n);case 3:e:{if(cy(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Uv(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(R(423)),e),e=Lm(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(R(424)),e),e=Lm(t,e,r,n,i);break e}else for(Ft=Tr(e.stateNode.containerInfo.firstChild),jt=e,be=!0,dn=null,n=Dv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=er(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return Mv(e),t===null&&Od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),ly(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Od(e),null;case 13:return uy(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),xm(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Nl,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!At.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Hn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=nn(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),Om(t,e,r,i,n);case 15:return oy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),al(t,e),e.tag=1,xt(r)?(t=!0,kl(e)):t=!1,os(e,n),ry(e,r,i),Ud(e,r,i,n),Bd(null,e,r,!0,t,n);case 19:return dy(t,e,n);case 22:return ay(t,e,n)}throw Error(R(156,e.tag))};function Ry(t,e){return ev(t,e)}function dC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new dC(t,e,n,r)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hC(t){if(typeof t=="function")return wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Bh)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return li(n.children,i,s,e);case Mh:o=8,i|=8;break;case od:return t=Yt(12,n,e,i|2),t.elementType=od,t.lanes=s,t;case ad:return t=Yt(13,n,e,i),t.elementType=ad,t.lanes=s,t;case ld:return t=Yt(19,n,e,i),t.elementType=ld,t.lanes=s,t;case M_:return Sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case U_:o=9;break e;case Fh:o=11;break e;case Bh:o=14;break e;case fr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Sc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=M_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,r,i,s,o,a,l){return t=new fC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(s),t}function pC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(xt(n))return bv(t,n,e)}return e}function Ny(t,e,n,r,i,s,o,a,l){return t=Ef(n,r,!0,t,i,s,o,a,l),t.context=by(null),n=t.current,r=St(),i=br(n),s=Hn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,ua(t,i,r),Ot(t,r),t}function Ic(t,e,n,r){var i=e.current,s=St(),o=br(i);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(pn(t,i,o,s),il(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sf(t,e){Gm(t,e),(t=t.alternate)&&Gm(t,e)}function mC(){return null}var Py=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}Cc.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Ic(t,e,null,null)};Cc.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){Ic(null,t,null,null)}),e[Xn]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&cv(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function gC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bl(o);s.call(c)}}var o=Ny(e,r,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[Xn]=o.current,Uo(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bl(l);a.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=l,t[Xn]=l.current,Uo(t.nodeType===8?t.parentNode:t),vi(function(){Ic(e,l,n,r)}),l}function kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bl(o);a.call(l)}}Ic(e,o,t,i)}else o=gC(n,e,t,i,r);return Bl(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Wh(e,n|1),Ot(e,Ue()),!(ce&6)&&(Es=Ue()+500,Hr()))}break;case 13:vi(function(){var r=Zn(t,1);if(r!==null){var i=St();pn(r,t,1,i)}}),Sf(t,1)}};zh=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=St();pn(e,t,134217728,n)}Sf(t,134217728)}};ov=function(t){if(t.tag===13){var e=br(t),n=Zn(t,e);if(n!==null){var r=St();pn(n,t,e,r)}Sf(t,e)}};av=function(){return fe};lv=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};vd=function(t,e,n){switch(e){case"input":if(dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(R(90));B_(r),dd(r,i)}}}break;case"textarea":$_(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};K_=_f;Q_=vi;var _C={usingClientEntryPoint:!1,Events:[ha,Ki,gc,H_,q_,_f]},Qs={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vC={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||mC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{hc=Ha.inject(vC),Pn=Ha}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_C;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(R(200));return pC(t,e,null,n)};Gt.createRoot=function(t,e){if(!Cf(t))throw Error(R(299));var n=!1,r="",i=Py;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new If(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return vi(t)};Gt.hydrate=function(t,e,n){if(!Tc(e))throw Error(R(200));return kc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Py;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ny(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cc(e)};Gt.render=function(t,e,n){if(!Tc(e))throw Error(R(200));return kc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(R(40));return t._reactRootContainer?(vi(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Gt.unstable_batchedUpdates=_f;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return kc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function Ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ay)}catch(t){console.error(t)}}Ay(),A_.exports=Gt;var yC=A_.exports,qm=yC;id.createRoot=qm.createRoot,id.hydrateRoot=qm.hydrateRoot;/**
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
 */const xy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+xy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Oy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[d],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new EC;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dy=function(t){const e=Oy(t);return Tf.encodeByteArray(e,!0)},jl=function(t){return Dy(t).replace(/\./g,"")},$l=function(t){try{return Tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SC(t){return Go(void 0,t)}function Go(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IC(n)||(t[n]=Go(t[n],e[n]));return t}function IC(t){return t!=="__proto__"}/**
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
 */function CC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TC=()=>CC().__FIREBASE_DEFAULTS__,kC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$l(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return TC()||kC()||RC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ly=()=>{var t;return(t=kf())===null||t===void 0?void 0:t.config},bC=t=>{var e;return(e=kf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Uy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function bf(){var t;const e=(t=kf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NC(){return typeof self=="object"&&self.self===self}function My(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function By(){return xy.NODE_ADMIN===!0}function Wl(){try{return typeof indexedDB=="object"}catch{return!1}}function PC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const AC="FirebaseError";class It extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AC,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new It(i,a,r)}}function xC(t,e){return t.replace(OC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OC=/\{\$([^}]+)}/g;/**
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
 */function Ho(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
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
 */const jy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ho($l(s[0])||""),n=Ho($l(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DC=function(t){const e=jy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},LC=function(t){const e=jy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Km(s)&&Km(o)){if(!Jd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class UC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $y(t,e){const n=new MC(t,e);return n.subscribe.bind(n)}class MC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lu),i.error===void 0&&(i.error=Lu),i.complete===void 0&&(i.complete=Lu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}/**
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
 */const H=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Dt(t,e){return`${t} failed: ${e} argument `}function Ye(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Dt(t,e)+"must be a valid function.")}function Qm(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Dt(t,e)+"must be a valid context object.")}/**
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
 */const BC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function z(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class Wy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($C(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(t){return t===Zr?void 0:t}function $C(t){return t.instantiationMode==="EAGER"}/**
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
 */class zy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Nf=[];var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Vy={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},WC=he.INFO,zC={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},VC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=WC,this._logHandler=VC,this._userLogHandler=null,Nf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}function GC(t){Nf.forEach(e=>{e.setLogLevel(t)})}function HC(t,e){for(const n of Nf){let r=null;e&&e.level&&(r=Vy[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:he[s].toLowerCase(),message:a,args:o,type:i.name})}}}const qC=(t,e)=>e.some(n=>t instanceof n);let Ym,Jm;function KC(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QC(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gy=new WeakMap,Xd=new WeakMap,Hy=new WeakMap,Uu=new WeakMap,Pf=new WeakMap;function YC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gy.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function JC(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XC(t){Zd=t(Zd)}function ZC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mu(this),e,...n);return Hy.set(r,e.sort?e.sort():[e]),Pr(r)}:QC().includes(t)?function(...e){return t.apply(Mu(this),e),Pr(Gy.get(this))}:function(...e){return Pr(t.apply(Mu(this),e))}}function eT(t){return typeof t=="function"?ZC(t):(t instanceof IDBTransaction&&JC(t),qC(t,KC())?new Proxy(t,Zd):t)}function Pr(t){if(t instanceof IDBRequest)return YC(t);if(Uu.has(t))return Uu.get(t);const e=eT(t);return e!==t&&(Uu.set(t,e),Pf.set(e,t)),e}const Mu=t=>Pf.get(t);function tT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pr(o.result),l.oldVersion,l.newVersion,Pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nT=["get","getKey","getAll","getAllKeys","count"],rT=["put","add","delete","clear"],Fu=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fu.set(e,s),s}XC(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
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
 */class iT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",Zm="0.9.13";/**
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
 */const wi=new pa("@firebase/app"),oT="@firebase/app-compat",aT="@firebase/analytics-compat",lT="@firebase/analytics",cT="@firebase/app-check-compat",uT="@firebase/app-check",dT="@firebase/auth",hT="@firebase/auth-compat",fT="@firebase/database",pT="@firebase/database-compat",mT="@firebase/functions",gT="@firebase/functions-compat",_T="@firebase/installations",vT="@firebase/installations-compat",yT="@firebase/messaging",wT="@firebase/messaging-compat",ET="@firebase/performance",ST="@firebase/performance-compat",IT="@firebase/remote-config",CT="@firebase/remote-config-compat",TT="@firebase/storage",kT="@firebase/storage-compat",RT="@firebase/firestore",bT="@firebase/firestore-compat",NT="firebase",PT="9.23.0";/**
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
 */const Ur="[DEFAULT]",AT={[eh]:"fire-core",[oT]:"fire-core-compat",[lT]:"fire-analytics",[aT]:"fire-analytics-compat",[uT]:"fire-app-check",[cT]:"fire-app-check-compat",[dT]:"fire-auth",[hT]:"fire-auth-compat",[fT]:"fire-rtdb",[pT]:"fire-rtdb-compat",[mT]:"fire-fn",[gT]:"fire-fn-compat",[_T]:"fire-iid",[vT]:"fire-iid-compat",[yT]:"fire-fcm",[wT]:"fire-fcm-compat",[ET]:"fire-perf",[ST]:"fire-perf-compat",[IT]:"fire-rc",[CT]:"fire-rc-compat",[TT]:"fire-gcs",[kT]:"fire-gcs-compat",[RT]:"fire-fst",[bT]:"fire-fst-compat","fire-js":"fire-js",[NT]:"fire-js-all"};/**
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
 */const Mr=new Map,qo=new Map;function Gl(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qy(t,e){t.container.addOrOverwriteComponent(e)}function tr(t){const e=t.name;if(qo.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,t);for(const n of Mr.values())Gl(n,t);return!0}function Ky(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xT(t,e,n=Ur){Ky(t,e).clearInstance(n)}function OT(){qo.clear()}/**
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
 */const DT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new Pi("app","Firebase",DT);/**
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
 */let LT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}};/**
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
 */const sr=PT;function Af(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ur,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=Ly()),!n)throw qn.create("no-options");const s=Mr.get(i);if(s){if(Jd(n,s.options)&&Jd(r,s.config))return s;throw qn.create("duplicate-app",{appName:i})}const o=new zy(i);for(const l of qo.values())o.addComponent(l);const a=new LT(n,r,o);return Mr.set(i,a),a}function UT(t=Ur){const e=Mr.get(t);if(!e&&t===Ur&&Ly())return Af();if(!e)throw qn.create("no-app",{appName:t});return e}function MT(){return Array.from(Mr.values())}async function Qy(t){const e=t.name;Mr.has(e)&&(Mr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function tn(t,e,n){var r;let i=(r=AT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}tr(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Yy(t,e){if(t!==null&&typeof t!="function")throw qn.create("invalid-log-argument");HC(t,e)}function Jy(t){GC(t)}/**
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
 */const FT="firebase-heartbeat-database",BT=1,Ko="firebase-heartbeat-store";let Bu=null;function Xy(){return Bu||(Bu=tT(FT,BT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ko)}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function jT(t){try{return await(await Xy()).transaction(Ko).objectStore(Ko).get(Zy(t))}catch(e){if(e instanceof It)wi.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function eg(t,e){try{const r=(await Xy()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,Zy(t)),await r.done}catch(n){if(n instanceof It)wi.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function Zy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $T=1024,WT=30*24*60*60*1e3;class zT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tg(),{heartbeatsToSend:n,unsentEntries:r}=VT(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tg(){return new Date().toISOString().substring(0,10)}function VT(t,e=$T){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wl()?PC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ng(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function HT(t){tr(new zt("platform-logger",e=>new iT(e),"PRIVATE")),tr(new zt("heartbeat",e=>new zT(e),"PRIVATE")),tn(eh,Zm,t),tn(eh,Zm,"esm2017"),tn("fire-js","")}HT("");const qT=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:It,SDK_VERSION:sr,_DEFAULT_ENTRY_NAME:Ur,_addComponent:Gl,_addOrOverwriteComponent:qy,_apps:Mr,_clearComponents:OT,_components:qo,_getProvider:Ky,_registerComponent:tr,_removeServiceInstance:xT,deleteApp:Qy,getApp:UT,getApps:MT,initializeApp:Af,onLog:Yy,registerVersion:tn,setLogLevel:Jy},Symbol.toStringTag,{value:"Module"}));/**
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
 */class KT{constructor(e,n){this._delegate=e,this.firebase=n,Gl(e,new zt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Qy(this._delegate)))}_getService(e,n=Ur){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ur){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Gl(this._delegate,e)}_addOrOverwriteComponent(e){qy(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const QT={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},rg=new Pi("app-compat","Firebase",QT);/**
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
 */function YT(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:tn,setLogLevel:Jy,onLog:Yy,apps:null,SDK_VERSION:sr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:qT}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ur,!Wt(e,c))throw rg.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const u=Af(c,d);if(Wt(e,u.name))return e[u.name];const h=new t(u,n);return e[u.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,u=d.replace("-compat","");if(tr(c)&&c.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[u]!="function")throw rg.create("invalid-app-argument",{appName:d});return g[u]()};c.serviceProps!==void 0&&Go(h,c.serviceProps),n[u]=h,t.prototype[u]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[u]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function ew(){const t=YT(KT);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ew,extendNamespace:e,createSubscribe:$y,ErrorFactory:Pi,deepExtend:Go});function e(n){Go(t,n)}return t}const JT=ew();/**
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
 */const ig=new pa("@firebase/app-compat"),XT="@firebase/app-compat",ZT="0.2.13";/**
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
 */function ek(t){tn(XT,ZT,t)}/**
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
 */if(NC()&&self.firebase!==void 0){ig.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ig.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const K=JT;ek();var tk="firebase",nk="9.23.0";/**
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
 */K.registerVersion(tk,nk,"app-compat");function xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ys={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Bi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function rk(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ik=rk,sk=tw,nw=new Pi("auth","Firebase",tw());/**
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
 */const Hl=new pa("@firebase/auth");function ok(t,...e){Hl.logLevel<=he.WARN&&Hl.warn(`Auth (${sr}): ${t}`,...e)}function dl(t,...e){Hl.logLevel<=he.ERROR&&Hl.error(`Auth (${sr}): ${t}`,...e)}/**
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
 */function ct(t,...e){throw Of(t,...e)}function at(t,...e){return Of(t,...e)}function rw(t,e,n){const r=Object.assign(Object.assign({},sk()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Os(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),rw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nw.create(t,...e)}function N(t,e,...n){if(!t)throw Of(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function _n(t,e){t||Nn(e)}/**
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
 */function Qo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Df(){return sg()==="http:"||sg()==="https:"}function sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Df()||My()||"connection"in navigator)?navigator.onLine:!0}function lk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=Rf()||Rc()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lf(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ck={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uk=new ma(3e4,6e4);function We(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function He(t,e,n,r,i={}){return sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iw.fetch()(ow(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ck),e);try{const i=new dk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw co(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rw(t,d,c);ct(t,d)}}catch(i){if(i instanceof It)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function or(t,e,n,r,i={}){const s=await He(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lf(t.config,i):`${t.config.apiScheme}://${i}`}class dk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),uk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function hk(t,e){return He(t,"POST","/v1/accounts:delete",e)}async function fk(t,e){return He(t,"POST","/v1/accounts:update",e)}async function pk(t,e){return He(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mk(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Nc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(ju(i.auth_time)),issuedAtTime:wo(ju(i.iat)),expirationTime:wo(ju(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function Nc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$l(n);return i?JSON.parse(i):(dl("Failed to decode base64 JWT payload"),null)}catch(i){return dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gk(t){const e=Nc(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&_k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nr(t,pk(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ek(s.providerUserInfo):[],a=wk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aw(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function yk(t){const e=z(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ek(t){return t.map(e=>{var{providerId:n}=e,r=xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Sk(t,e){const n=await sw(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ow(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jo;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function hr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mk(this,e)}reload(){return yk(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,hk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:D,stsTokenManager:O}=n;N(m&&O,e,"internal-error");const b=Jo.fromJSON(this.name,O);N(typeof m=="string",e,"internal-error"),hr(u,e.name),hr(h,e.name),N(typeof y=="boolean",e,"internal-error"),N(typeof k=="boolean",e,"internal-error"),hr(g,e.name),hr(_,e.name),hr(w,e.name),hr(A,e.name),hr(p,e.name),hr(f,e.name);const Z=new ci({uid:m,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:k,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:f});return D&&Array.isArray(D)&&(Z.providerData=D.map(Y=>Object.assign({},Y))),A&&(Z._redirectEventId=A),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jo;i.updateFromServerResponse(n);const s=new ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yo(s),s}}/**
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
 */const og=new Map;function Bt(t){_n(t instanceof Function,"Expected a class definition");let e=og.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,og.set(t,e),e)}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lw.type="NONE";const Ss=lw;/**
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
 */function ui(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=ui("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Bt(Ss),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bt(Ss);const o=ui(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=ci._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(fw(e))return"Webos";if(Uf(e))return"Safari";if((e.includes("chrome/")||uw(e))&&!e.includes("edge/"))return"Chrome";if(ga(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cw(t=$e()){return/firefox\//i.test(t)}function Uf(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uw(t=$e()){return/crios\//i.test(t)}function dw(t=$e()){return/iemobile/i.test(t)}function ga(t=$e()){return/android/i.test(t)}function hw(t=$e()){return/blackberry/i.test(t)}function fw(t=$e()){return/webos/i.test(t)}function Ds(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ik(t=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Ck(t=$e()){var e;return Ds(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tk(){return Fy()&&document.documentMode===10}function pw(t=$e()){return Ds(t)||ga(t)||fw(t)||hw(t)||/windows phone/i.test(t)||dw(t)}function kk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mw(t,e=[]){let n;switch(t){case"Browser":n=ag($e());break;case"Worker":n=`${ag($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${r}`}/**
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
 */async function Rk(t){return(await He(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function gw(t,e){return He(t,"GET","/v2/recaptchaConfig",We(t,e))}/**
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
 */function lg(t){return t!==void 0&&t.getResponse!==void 0}function cg(t){return t!==void 0&&t.enterprise!==void 0}class _w{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function bk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bk().appendChild(r)})}function vw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Nk="https://www.google.com/recaptcha/enterprise.js?render=",Pk="recaptcha-enterprise",Ak="NO_RECAPTCHA";class yw{constructor(e){this.type=Pk,this.auth=Me(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _w(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ak)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mf(Nk+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fr(t,e,n,r=!1){const i=new yw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Ok{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?z(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}async initializeRecaptchaConfig(){const e=await gw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _w(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ok(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Me(t){return z(t)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=$y(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lk(t,e,n){const r=Me(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ww(e),{host:o,port:a}=Uk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mk()}function ww(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uk(t){const e=ww(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dg(o)}}}function dg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ls{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function Ew(t,e){return He(t,"POST","/v1/accounts:resetPassword",We(t,e))}async function Sw(t,e){return He(t,"POST","/v1/accounts:update",e)}async function Fk(t,e){return He(t,"POST","/v1/accounts:update",We(t,e))}/**
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
 */async function $u(t,e){return or(t,"POST","/v1/accounts:signInWithPassword",We(t,e))}async function Pc(t,e){return He(t,"POST","/v1/accounts:sendOobCode",We(t,e))}async function Bk(t,e){return Pc(t,e)}async function Wu(t,e){return Pc(t,e)}async function zu(t,e){return Pc(t,e)}async function jk(t,e){return Pc(t,e)}/**
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
 */async function $k(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",We(t,e))}async function Wk(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",We(t,e))}/**
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
 */class Xo extends Ls{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Fr(e,r,"signInWithPassword");return $u(e,i)}else return $u(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Fr(e,r,"signInWithPassword");return $u(e,s)}else return Promise.reject(i)});case"emailLink":return $k(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wk(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kn(t,e){return or(t,"POST","/v1/accounts:signInWithIdp",We(t,e))}/**
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
 */const zk="http://localhost";class Dn extends Ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:zk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */async function Vk(t,e){return He(t,"POST","/v1/accounts:sendVerificationCode",We(t,e))}async function Gk(t,e){return or(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,e))}async function Hk(t,e){const n=await or(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,e));if(n.temporaryProof)throw co(t,"account-exists-with-different-credential",n);return n}const qk={USER_NOT_FOUND:"user-not-found"};async function Kk(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return or(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,n),qk)}/**
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
 */class di extends Ls{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new di({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new di({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Gk(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Hk(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Kk(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new di({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yk(t){const e=ts(lo(t)).link,n=e?ts(lo(e)).deep_link_id:null,r=ts(lo(t)).deep_link_id;return(r?ts(lo(r)).link:null)||r||n||e||t}class Ac{constructor(e){var n,r,i,s,o,a;const l=ts(lo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Qk((i=l.mode)!==null&&i!==void 0?i:null);N(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Yk(e);try{return new Ac(n)}catch{return null}}}/**
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
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ac.parseLink(n);return N(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class cs extends Us{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),Dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),Dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return cs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return cs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new cs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Cn extends Us{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class kn extends Us{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */const Jk="http://localhost";class Is extends Ls{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Is(r,s)}static _create(e,n){return new Is(e,n)}buildRequest(){return{requestUri:Jk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Xk="saml.";class ql extends ar{constructor(e){N(e.startsWith(Xk),"argument-error"),super(e)}static credentialFromResult(e){return ql.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ql.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Is.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Is._create(r,n)}catch{return null}}}/**
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
 */class Rn extends Us{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function hl(t,e){return or(t,"POST","/v1/accounts:signUp",We(t,e))}/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ci._fromIdTokenResponse(e,r,i),o=hg(r);return new sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hg(r);return new sn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Zk(t){var e;const n=Me(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hl(n,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Kl extends It{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function Iw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Cw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function eR(t,e){const n=z(t);await xc(!0,n,e);const{providerUserInfo:r}=await fk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Cw(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ff(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}async function xc(t,e,n){await Yo(e);const r=Cw(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function Tw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nr(t,Iw(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Nc(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),sn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function kw(t,e,n=!1){const r="signIn",i=await Iw(t,r,e),s=await sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Oc(t,e){return kw(Me(t),e)}async function Rw(t,e){const n=z(t);return await xc(!1,n,e.providerId),Ff(n,e)}async function bw(t,e){return Tw(z(t),e)}/**
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
 */async function tR(t,e){return or(t,"POST","/v1/accounts:signInWithCustomToken",We(t,e))}/**
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
 */async function nR(t,e){const n=Me(t),r=await tR(n,{token:e,returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class _a{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bf._fromServerResponse(e,n):"totpInfo"in n?jf._fromServerResponse(e,n):ct(e,"internal-error")}}class Bf extends _a{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bf(n)}}class jf extends _a{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new jf(n)}}/**
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
 */function us(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function rR(t,e,n){var r;const i=Me(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Fr(i,s,"getOobCode",!0);n&&us(i,o,n),await Wu(i,o)}else n&&us(i,s,n),await Wu(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Fr(i,s,"getOobCode",!0);n&&us(i,a,n),await Wu(i,a)}else return Promise.reject(o)})}async function iR(t,e,n){await Ew(z(t),{oobCode:e,newPassword:n})}async function sR(t,e){await Fk(z(t),{oobCode:e})}async function Nw(t,e){const n=z(t),r=await Ew(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=_a._fromServerResponse(Me(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function oR(t,e){const{data:n}=await Nw(z(t),e);return n.email}async function aR(t,e,n){var r;const i=Me(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Fr(i,s,"signUpPassword");o=hl(i,c)}else o=hl(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Fr(i,s,"signUpPassword");return hl(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await sn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function lR(t,e,n){return Oc(z(t),qr.credential(e,n))}/**
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
 */async function cR(t,e,n){var r;const i=Me(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){N(l.handleCodeInApp,i,"argument-error"),l&&us(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Fr(i,s,"getOobCode",!0);o(a,n),await zu(i,a)}else o(s,n),await zu(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Fr(i,s,"getOobCode",!0);o(l,n),await zu(i,l)}else return Promise.reject(a)})}function uR(t,e){const n=Ac.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function dR(t,e,n){const r=z(t),i=qr.credentialWithLink(e,n||Qo());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Oc(r,i)}/**
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
 */async function hR(t,e){return He(t,"POST","/v1/accounts:createAuthUri",We(t,e))}/**
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
 */async function fR(t,e){const n=Df()?Qo():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await hR(z(t),r);return i||[]}async function pR(t,e){const n=z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&us(n.auth,i,e);const{email:s}=await Bk(n.auth,i);s!==t.email&&await t.reload()}async function mR(t,e,n){const r=z(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&us(r.auth,s,n);const{email:o}=await jk(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function gR(t,e){return He(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _R(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await nr(r,gR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vR(t,e){return Pw(z(t),e,null)}function yR(t,e){return Pw(z(t),null,e)}async function Pw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await nr(t,Sw(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function wR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Nc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ds(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new ER(s,i);case"github.com":return new SR(s,i);case"google.com":return new IR(s,i);case"twitter.com":return new CR(s,i,t.screenName||null);case"custom":case"anonymous":return new ds(s,null);default:return new ds(s,r,i)}}class ds{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Aw extends ds{constructor(e,n,r,i){super(e,n,r),this.username=i}}class ER extends ds{constructor(e,n){super(e,"facebook.com",n)}}class SR extends Aw{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class IR extends ds{constructor(e,n){super(e,"google.com",n)}}class CR extends Aw{constructor(e,n,r){super(e,"twitter.com",n,r)}}function TR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:wR(n)}class ii{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ii("enroll",e,n)}static _fromMfaPendingCredential(e){return new ii("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ii._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ii._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class $f{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Me(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>_a._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=ii._fromMfaPendingCredential(i.mfaPendingCredential);return new $f(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await sn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return N(n.user,r,"internal-error"),sn._forOperation(n.user,n.operationType,c);default:ct(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function kR(t,e){var n;const r=z(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),$f._fromError(r,i)}/**
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
 */function RR(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:start",We(t,e))}function bR(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:finalize",We(t,e))}function NR(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:withdraw",We(t,e))}class Wf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>_a._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wf(e)}async getSession(){return ii._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await nr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await nr(this.user,NR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Vu=new WeakMap;function PR(t){const e=z(t);return Vu.has(e)||Vu.set(e,Wf._fromUser(e)),Vu.get(e)}const Ql="__sak";/**
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
 */class xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function AR(){const t=$e();return Uf(t)||Ds(t)}const xR=1e3,OR=10;class Ow extends xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AR()&&kk(),this.fallbackToPolling=pw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const zf=Ow;/**
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
 */class Dw extends xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const Ei=Dw;/**
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
 */function DR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await DR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
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
 */function va(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=va("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function UR(t){Be().location.href=t}/**
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
 */function Vf(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function MR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return Vf()?self:null}/**
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
 */const Lw="firebaseLocalStorageDb",jR=1,Yl="firebaseLocalStorage",Uw="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function $R(){const t=indexedDB.deleteDatabase(Lw);return new ya(t).toPromise()}function th(){const t=indexedDB.open(Lw,jR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:Uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await $R(),e(await th()))})})}async function fg(t,e,n){const r=Lc(t,!0).put({[Uw]:e,value:n});return new ya(r).toPromise()}async function WR(t,e){const n=Lc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function pg(t,e){const n=Lc(t,!0).delete(e);return new ya(n).toPromise()}const zR=800,VR=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MR(),!this.activeServiceWorker)return;this.sender=new LR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await fg(e,Ql,"1"),await pg(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const Zo=Mw;/**
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
 */function GR(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:start",We(t,e))}function HR(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:finalize",We(t,e))}/**
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
 */const qR=500,KR=6e4,qa=1e12;class QR{constructor(e){this.auth=e,this.counter=qa,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new YR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||qa;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||qa;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||qa;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class YR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JR(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},KR)},qR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JR(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Gu=vw("rcb"),XR=new ma(3e4,6e4),ZR="https://www.google.com/recaptcha/api.js?";class eb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Be().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(tb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&lg(Be().grecaptcha)?Promise.resolve(Be().grecaptcha):new Promise((r,i)=>{const s=Be().setTimeout(()=>{i(at(e,"network-request-failed"))},XR.get());Be()[Gu]=()=>{Be().clearTimeout(s),delete Be()[Gu];const a=Be().grecaptcha;if(!a||!lg(a)){i(at(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const u=l(c,d);return this.counter++,u},this.hostLanguage=n,r(a)};const o=`${ZR}?${Ai({onload:Gu,render:"explicit",hl:n})}`;Mf(o).catch(()=>{clearTimeout(s),i(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Be().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nb{async load(e){return new QR(e)}clearedOneInstance(){}}/**
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
 */const Fw="recaptcha",rb={theme:"light",type:"image"};let ib=class{constructor(e,n=Object.assign({},rb),r){this.parameters=n,this.type=Fw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nb:new eb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Be()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Df()&&!Vf(),this.auth,"internal-error"),await sb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Rk(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function sb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Gf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=di._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ob(t,e,n){const r=Me(t),i=await Uc(r,e,z(n));return new Gf(i,s=>Oc(r,s))}async function ab(t,e,n){const r=z(t);await xc(!1,r,"phone");const i=await Uc(r.auth,e,z(n));return new Gf(i,s=>Rw(r,s))}async function lb(t,e,n){const r=z(t),i=await Uc(r.auth,e,z(n));return new Gf(i,s=>bw(r,s))}async function Uc(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===Fw,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await RR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await GR(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Vk(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function cb(t,e){await Ff(z(t),e)}/**
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
 */let Si=class fl{constructor(e){this.providerId=fl.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,n){return Uc(this.auth,e,z(n))}static credential(e,n){return di._fromVerification(e,n)}static credentialFromResult(e){const n=e;return fl.credentialFromTaggedObject(n)}static credentialFromError(e){return fl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?di._fromTokenResponse(n,r):null}};Si.PROVIDER_ID="phone";Si.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xi(t,e){return e?Bt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends Ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ub(t){return kw(t.auth,new Hf(t),t.bypassAuthState)}function db(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Tw(n,new Hf(t),t.bypassAuthState)}async function hb(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Ff(n,new Hf(t),t.bypassAuthState)}/**
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
 */class Bw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ub;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:ct(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fb=new ma(2e3,1e4);async function pb(t,e,n){const r=Me(t);Os(t,e,ar);const i=xi(r,n);return new zn(r,"signInViaPopup",e,i).executeNotNull()}async function mb(t,e,n){const r=z(t);Os(r.auth,e,ar);const i=xi(r.auth,n);return new zn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function gb(t,e,n){const r=z(t);Os(r.auth,e,ar);const i=xi(r.auth,n);return new zn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class zn extends Bw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fb.get())};e()}}zn.currentPopupAction=null;/**
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
 */const _b="pendingRedirect",Eo=new Map;class vb extends Bw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yb(t,e){const n=$w(e),r=jw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function qf(t,e){return jw(t)._set($w(e),"true")}function wb(){Eo.clear()}function Kf(t,e){Eo.set(t._key(),e)}function jw(t){return Bt(t._redirectPersistence)}function $w(t){return ui(_b,t.config.apiKey,t.name)}/**
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
 */function Eb(t,e,n){return Sb(t,e,n)}async function Sb(t,e,n){const r=Me(t);Os(t,e,ar),await r._initializationPromise;const i=xi(r,n);return await qf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Ib(t,e,n){return Cb(t,e,n)}async function Cb(t,e,n){const r=z(t);Os(r.auth,e,ar),await r.auth._initializationPromise;const i=xi(r.auth,n);await qf(i,r.auth);const s=await Ww(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Tb(t,e,n){return kb(t,e,n)}async function kb(t,e,n){const r=z(t);Os(r.auth,e,ar),await r.auth._initializationPromise;const i=xi(r.auth,n);await xc(!1,r,e.providerId),await qf(i,r.auth);const s=await Ww(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Rb(t,e){return await Me(t)._initializationPromise,Mc(t,e,!1)}async function Mc(t,e,n=!1){const r=Me(t),i=xi(r,e),o=await new vb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ww(t){const e=va(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const bb=10*60*1e3;class zw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vw(t);default:return!1}}/**
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
 */async function Gw(t,e={}){return He(t,"GET","/v1/projects",e)}/**
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
 */const Pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ab=/^https?/;async function xb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gw(t);for(const n of e)try{if(Ob(n))return}catch{}ct(t,"unauthorized-domain")}function Ob(t){const e=Qo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ab.test(n))return!1;if(Pb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Db=new ma(3e4,6e4);function gg(){const t=Be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Lb(t){return new Promise((e,n)=>{var r,i,s;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(at(t,"network-request-failed"))},timeout:Db.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Be().gapi)===null||s===void 0)&&s.load)o();else{const a=vw("iframefcb");return Be()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Mf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pl=null,e})}let pl=null;function Ub(t){return pl=pl||Lb(t),pl}/**
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
 */const Mb=new ma(5e3,15e3),Fb="__/auth/iframe",Bb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wb(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lf(e,Bb):`https://${t.config.authDomain}/${Fb}`,r={apiKey:e.apiKey,appName:t.name,v:sr},i=$b.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ai(r).slice(1)}`}async function zb(t){const e=await Ub(t),n=Be().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:Wb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=Be().setTimeout(()=>{s(o)},Mb.get());function l(){Be().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Hb=600,qb="_blank",Kb="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qb(t,e,n,r=Gb,i=Hb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$e().toLowerCase();n&&(a=uw(c)?qb:n),cw(c)&&(e=e||Kb,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Ck(c)&&a!=="_self")return Yb(e||"",a),new _g(null);const u=window.open(e||"",a,d);N(u,t,"popup-blocked");try{u.focus()}catch{}return new _g(u)}function Yb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Jb="__/auth/handler",Xb="emulator/auth/handler",Zb=encodeURIComponent("fac");async function nh(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:sr,eventId:i};if(e instanceof ar){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Us){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${Zb}=${encodeURIComponent(l)}`:"";return`${eN(t)}?${Ai(a).slice(1)}${c}`}function eN({config:t}){return t.emulator?Lf(t,Xb):`https://${t.authDomain}/${Jb}`}/**
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
 */const Hu="webStorageSupport";class tN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=Mc,this._overrideRedirectResult=Kf}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nh(e,n,r,Qo(),i);return Qb(e,o,va())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await nh(e,n,r,Qo(),i);return UR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zb(e),r=new zw(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hu];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pw()||Uf()||Ds()}}const nN=tN;class rN{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Nn("unexpected MultiFactorSessionType")}}}class Qf extends rN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qf(e)}_finalizeEnroll(e,n,r){return bR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return HR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hw{constructor(){}static assertion(e){return Qf._fromCredential(e)}}Hw.FACTOR_ID="phone";var vg="@firebase/auth",yg="0.23.2";/**
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
 */class iN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oN(t){tr(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mw(t)},c=new Ok(r,i,s,l);return Dk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new zt("auth-internal",e=>{const n=Me(e.getProvider("auth").getImmediate());return(r=>new iN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(vg,yg,sN(t)),tn(vg,yg,"esm2017")}/**
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
 */const aN=5*60;bC("authIdTokenMaxAge");oN("Browser");/**
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
 */function Ii(){return window}/**
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
 */const lN=2e3;async function cN(t,e,n){var r;const{BuildInfo:i}=Ii();_n(e.sessionId,"AuthEvent did not contain a session ID");const s=await pN(e.sessionId),o={};return Ds()?o.ibi=i.packageName:ga()?o.apn=i.packageName:ct(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,nh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function uN(t){const{BuildInfo:e}=Ii(),n={};Ds()?n.iosBundleId=e.packageName:ga()?n.androidPackageName=e.packageName:ct(t,"operation-not-supported-in-this-environment"),await Gw(t,n)}function dN(t){const{cordova:e}=Ii();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Ik()?"_blank":"_system","location=yes"),n(i)})})}async function hN(t,e,n){const{cordova:r}=Ii();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var u;s();const h=(u=r.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(at(t,"redirect-cancelled-by-user"))},lN))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),ga()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function fN(t){var e,n,r,i,s,o,a,l,c,d;const u=Ii();N(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=u==null?void 0:u.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=u==null?void 0:u.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((d=(c=u==null?void 0:u.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function pN(t){const e=mN(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mN(t){if(_n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const gN=20;class _N extends zw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function vN(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:EN(),postBody:null,tenantId:t.tenantId,error:at(t,"no-auth-event")}}function yN(t,e){return rh()._set(ih(t),e)}async function wg(t){const e=await rh()._get(ih(t));return e&&await rh()._remove(ih(t)),e}function wN(t,e){var n,r;const i=IN(e);if(i.includes("/__/auth/callback")){const s=ml(i),o=s.firebaseError?SN(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?at(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function EN(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<gN;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function rh(){return Bt(zf)}function ih(t){return ui("authEvent",t.config.apiKey,t.name)}function SN(t){try{return JSON.parse(t)}catch{return null}}function IN(t){const e=ml(t),n=e.link?decodeURIComponent(e.link):void 0,r=ml(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ml(i).link||i||r||n||t}function ml(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ts(n.join("?"))}/**
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
 */const CN=500;class TN{constructor(){this._redirectPersistence=Ei,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mc,this._overrideRedirectResult=Kf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new _N(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){fN(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),wb(),await this._originValidation(e);const o=vN(e,r,i);await yN(e,o);const a=await cN(e,o,n),l=await dN(a);return hN(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uN(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ii(),o=setTimeout(async()=>{await wg(e),n.onEvent(Eg())},CN),a=async d=>{clearTimeout(o);const u=await wg(e);let h=null;u&&(d!=null&&d.url)&&(h=wN(u,d.url)),n.onEvent(h||Eg())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Ii().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(u){console.error(u)}}}}const kN=TN;function Eg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
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
 */function RN(t,e){Me(t)._logFramework(e)}var bN="@firebase/auth-compat",NN="0.4.2";/**
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
 */const PN=1e3;function So(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function AN(){return So()==="http:"||So()==="https:"}function qw(t=$e()){return!!((So()==="file:"||So()==="ionic:"||So()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function xN(){return Rc()||bf()}function ON(){return Fy()&&(document==null?void 0:document.documentMode)===11}function DN(t=$e()){return/Edge\/\d+/.test(t)}function LN(t=$e()){return ON()||DN(t)}function Kw(){try{const t=self.localStorage,e=va();if(t)return t.setItem(e,"1"),t.removeItem(e),LN()?Wl():!0}catch{return Yf()&&Wl()}return!1}function Yf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qu(){return(AN()||My()||qw())&&!xN()&&Kw()&&!Yf()}function Qw(){return qw()&&typeof document<"u"}async function UN(){return Qw()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},PN);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function MN(){return typeof window<"u"?window:null}/**
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
 */const Mt={LOCAL:"local",NONE:"none",SESSION:"session"},Js=N,Yw="persistence";function FN(t,e){if(Js(Object.values(Mt).includes(e),t,"invalid-persistence-type"),Rc()){Js(e!==Mt.SESSION,t,"unsupported-persistence-type");return}if(bf()){Js(e===Mt.NONE,t,"unsupported-persistence-type");return}if(Yf()){Js(e===Mt.NONE||e===Mt.LOCAL&&Wl(),t,"unsupported-persistence-type");return}Js(e===Mt.NONE||Kw(),t,"unsupported-persistence-type")}async function sh(t){await t._initializationPromise;const e=Jw(),n=ui(Yw,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function BN(t,e){const n=Jw();if(!n)return[];const r=ui(Yw,t,e);switch(n.getItem(r)){case Mt.NONE:return[Ss];case Mt.LOCAL:return[Zo,Ei];case Mt.SESSION:return[Ei];default:return[]}}function Jw(){var t;try{return((t=MN())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const jN=N;class yr{constructor(){this.browserResolver=Bt(nN),this.cordovaResolver=Bt(kN),this.underlyingResolver=null,this._redirectPersistence=Ei,this._completeRedirectFn=Mc,this._overrideRedirectResult=Kf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Qw()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return jN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Xw(t){return t.unwrap()}function $N(t){return t.wrapped()}/**
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
 */function WN(t){return Zw(t)}function zN(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new VN(t,kR(t,e))}else if(r){const i=Zw(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Zw(t){const{_tokenResponse:e}=t instanceof It?t.customData:t;if(!e)return null;if(!(t instanceof It)&&"temporaryProof"in e&&"phoneNumber"in e)return Si.credentialFromResult(t);const n=e.providerId;if(!n||n===Ys.PASSWORD)return null;let r;switch(n){case Ys.GOOGLE:r=Tn;break;case Ys.FACEBOOK:r=Cn;break;case Ys.GITHUB:r=kn;break;case Ys.TWITTER:r=Rn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Is._create(n,a):Dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new cs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof It?r.credentialFromError(t):r.credentialFromResult(t)}function kt(t,e){return e.catch(n=>{throw n instanceof It&&zN(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:WN(n),additionalUserInfo:TR(n),user:Vn.getOrCreate(i)}})}async function oh(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>kt(t,n.confirm(r))}}class VN{constructor(e,n){this.resolver=n,this.auth=$N(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return kt(Xw(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Vn{constructor(e){this._delegate=e,this.multiFactor=PR(e)}static getOrCreate(e){return Vn.USER_MAP.has(e)||Vn.USER_MAP.set(e,new Vn(e)),Vn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return kt(this.auth,Rw(this._delegate,e))}async linkWithPhoneNumber(e,n){return oh(this.auth,ab(this._delegate,e,n))}async linkWithPopup(e){return kt(this.auth,gb(this._delegate,e,yr))}async linkWithRedirect(e){return await sh(Me(this.auth)),Tb(this._delegate,e,yr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return kt(this.auth,bw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return oh(this.auth,lb(this._delegate,e,n))}reauthenticateWithPopup(e){return kt(this.auth,mb(this._delegate,e,yr))}async reauthenticateWithRedirect(e){return await sh(Me(this.auth)),Ib(this._delegate,e,yr)}sendEmailVerification(e){return pR(this._delegate,e)}async unlink(e){return await eR(this._delegate,e),this}updateEmail(e){return vR(this._delegate,e)}updatePassword(e){return yR(this._delegate,e)}updatePhoneNumber(e){return cb(this._delegate,e)}updateProfile(e){return _R(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return mR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Vn.USER_MAP=new WeakMap;/**
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
 */const Xs=N;class ah{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Xs(r,"invalid-api-key",{appName:e.name}),Xs(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?yr:void 0;this._delegate=n.initialize({options:{persistence:GN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(ik),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Vn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Lk(this._delegate,e,n)}applyActionCode(e){return sR(this._delegate,e)}checkActionCode(e){return Nw(this._delegate,e)}confirmPasswordReset(e,n){return iR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return kt(this._delegate,aR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return fR(this._delegate,e)}isSignInWithEmailLink(e){return uR(this._delegate,e)}async getRedirectResult(){Xs(qu(),this._delegate,"operation-not-supported-in-this-environment");const e=await Rb(this._delegate,yr);return e?kt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){RN(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Sg(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Sg(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return cR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return rR(this._delegate,e,n||void 0)}async setPersistence(e){FN(this._delegate,e);let n;switch(e){case Mt.SESSION:n=Ei;break;case Mt.LOCAL:n=await Bt(Zo)._isAvailable()?Zo:zf;break;case Mt.NONE:n=Ss;break;default:return ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return kt(this._delegate,Zk(this._delegate))}signInWithCredential(e){return kt(this._delegate,Oc(this._delegate,e))}signInWithCustomToken(e){return kt(this._delegate,nR(this._delegate,e))}signInWithEmailAndPassword(e,n){return kt(this._delegate,lR(this._delegate,e,n))}signInWithEmailLink(e,n){return kt(this._delegate,dR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return oh(this._delegate,ob(this._delegate,e,n))}async signInWithPopup(e){return Xs(qu(),this._delegate,"operation-not-supported-in-this-environment"),kt(this._delegate,pb(this._delegate,e,yr))}async signInWithRedirect(e){return Xs(qu(),this._delegate,"operation-not-supported-in-this-environment"),await sh(this._delegate),Eb(this._delegate,e,yr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return oR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ah.Persistence=Mt;function Sg(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Vn.getOrCreate(o)),error:e,complete:n}}function GN(t,e){const n=BN(t,e);if(typeof self<"u"&&!n.includes(Zo)&&n.push(Zo),typeof window<"u")for(const r of[zf,Ei])n.includes(r)||n.push(r);return n.includes(Ss)||n.push(Ss),n}/**
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
 */class Jf{constructor(){this.providerId="phone",this._delegate=new Si(Xw(K.auth()))}static credential(e,n){return Si.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Jf.PHONE_SIGN_IN_METHOD=Si.PHONE_SIGN_IN_METHOD;Jf.PROVIDER_ID=Si.PROVIDER_ID;/**
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
 */const HN=N;class qN{constructor(e,n,r=K.app()){var i;HN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ib(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const KN="auth-compat";function QN(t){t.INTERNAL.registerComponent(new zt(KN,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ah(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Bi.EMAIL_SIGNIN,PASSWORD_RESET:Bi.PASSWORD_RESET,RECOVER_EMAIL:Bi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Bi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Bi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Bi.VERIFY_EMAIL}},EmailAuthProvider:qr,FacebookAuthProvider:Cn,GithubAuthProvider:kn,GoogleAuthProvider:Tn,OAuthProvider:cs,SAMLAuthProvider:ql,PhoneAuthProvider:Jf,PhoneMultiFactorGenerator:Hw,RecaptchaVerifier:qN,TwitterAuthProvider:Rn,Auth:ah,AuthCredential:Ls,Error:It}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(bN,NN)}QN(K);const Ig="@firebase/database",Cg="0.14.4";/**
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
 */let eE="";function tE(t){eE=t}/**
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
 */class YN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ho(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class JN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YN(e)}}catch{}return new JN},si=nE("localStorage"),lh=nE("sessionStorage");/**
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
 */const hs=new pa("@firebase/database"),rE=function(){let t=1;return function(){return t++}}(),iE=function(t){const e=BC(t),n=new UC;n.update(e);const r=n.digest();return Tf.encodeByteArray(r)},wa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=wa.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let hi=null,Tg=!0;const sE=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hs.logLevel=he.VERBOSE,hi=hs.log.bind(hs),e&&lh.set("logging_enabled",!0)):typeof t=="function"?hi=t:(hi=null,lh.remove("logging_enabled"))},Xe=function(...t){if(Tg===!0&&(Tg=!1,hi===null&&lh.get("logging_enabled")===!0&&sE(!0)),hi){const e=wa.apply(null,t);hi(e)}},Ea=function(t){return function(...e){Xe(t,...e)}},ch=function(...t){const e="FIREBASE INTERNAL ERROR: "+wa(...t);hs.error(e)},Ln=function(...t){const e=`FIREBASE FATAL ERROR: ${wa(...t)}`;throw hs.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+wa(...t);hs.warn(e)},XN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ZN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Br="[MIN_NAME]",rr="[MAX_NAME]",Oi=function(t,e){if(t===e)return 0;if(t===Br||e===rr)return-1;if(e===Br||t===rr)return 1;{const n=kg(t),r=kg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},eP=function(t,e){return t===e?0:t<e?-1:1},Zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},Xf=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=Xf(t[e[r]]);return n+="}",n},oE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aE=function(t){P(!Fc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},tP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const iP=new RegExp("^-?(0*)\\d{1,10}$"),sP=-2147483648,oP=2147483647,kg=function(t){if(iP.test(t)){const e=Number(t);if(e>=sP&&e<=oP)return e}return null},Ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},aP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Io=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fs.OWNER="owner";/**
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
 */const Zf="5",lE="v",cE="s",uE="r",dE="f",hE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fE="ls",pE="p",uh="ac",mE="websocket",gE="long_polling";/**
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
 */class _E{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vE(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===mE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uP(t)&&(n.ns=t.namespace);const i=[];return et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class dP{constructor(){this.counters_={}}incrementCounter(e,n=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SC(this.counters_)}}/**
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
 */const Ku={},Qu={};function ep(t){const e=t.toString();return Ku[e]||(Ku[e]=new dP),Ku[e]}function hP(t,e){const n=t.toString();return Qu[n]||(Qu[n]=e()),Qu[n]}/**
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
 */class fP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ms(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Rg="start",pP="close",mP="pLPCommand",gP="pRTLPCB",yE="id",wE="pw",EE="ser",_P="cb",vP="seg",yP="ts",wP="d",EP="dframe",SE=1870,IE=30,SP=SE-IE,IP=25e3,CP=3e4;class wr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(e),this.stats_=ep(n),this.urlFn=l=>(this.appCheckToken&&(l[uh]=this.appCheckToken),vE(n,gE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CP)),ZN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tp((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rg)this.id=a,this.password=l;else if(o===pP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Rg]="t",r[EE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_P]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lE]=Zf,this.transportSessionId&&(r[cE]=this.transportSessionId),this.lastSessionId&&(r[fE]=this.lastSessionId),this.applicationId&&(r[pE]=this.applicationId),this.appCheckToken&&(r[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&hE.test(location.hostname)&&(r[uE]=dE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wr.forceAllow_=!0}static forceDisallow(){wr.forceDisallow_=!0}static isAvailable(){return wr.forceAllow_?!0:!wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tP()&&!nP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Dy(n),i=oE(r,SP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[EP]="t",r[yE]=e,r[wE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rE(),window[mP+this.uniqueCallbackIdentifier]=e,window[gP+this.uniqueCallbackIdentifier]=n,this.myIFrame=tp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xe("frame writing exception"),a.stack&&Xe(a.stack),Xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yE]=this.myID,e[wE]=this.myPW,e[EE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+IE+r.length<=SE;){const o=this.pendingSegs.shift();r=r+"&"+vP+i+"="+o.seg+"&"+yP+i+"="+o.ts+"&"+wP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(IP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const TP=16384,kP=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=ep(n),this.connURL=Qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lE]=Zf,typeof location<"u"&&location.hostname&&hE.test(location.hostname)&&(o[uE]=dE),n&&(o[cE]=n),r&&(o[fE]=r),i&&(o[uh]=i),s&&(o[pE]=s),vE(e,mE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let r;By(),this.mySock=new Jl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!Qt.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ho(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oE(n,TP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
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
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wr,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of Cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
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
 */const RP=6e4,bP=5e3,NP=10*1024,PP=100*1024,Yu="t",bg="d",AP="s",Ng="r",xP="e",Pg="o",Ag="a",xg="n",Og="p",OP="h";class DP{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Io(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yu in e){const n=e[Yu];n===Ag?this.upgradeIfSecondaryHealthy_():n===Ng?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ag,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zs(Yu,e);if(bg in e){const r=e[bg];if(n===OP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AP?this.onConnectionShutdown_(r):n===Ng?this.onReset_(r):n===xP?ch("Server Error: "+r):n===Pg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ch("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zf!==r&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Io(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Io(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Og,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class CE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class TE{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Xl extends TE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Dg=32,Lg=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new de("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jr(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ea(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Et(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return Et(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function UP(t,e){const n=ea(t,0),r=ea(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Oi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rp(t,e){if(jr(t)!==jr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jr(t)>jr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MP{constructor(e,n){this.errorPrefix_=n,this.parts_=ea(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bc(this.parts_[r]);RE(this)}}function FP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bc(e),RE(t)}function BP(t){const e=t.parts_.pop();t.byteLength_-=bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function RE(t){if(t.byteLength_>Lg)throw new Error(t.errorPrefix_+"has a key path longer than "+Lg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dg+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ip extends TE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ip}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const eo=1e3,jP=60*5*1e3,Ug=30*1e3,$P=1.3,WP=3e4,zP="server_kill",Mg=3;class Qn extends CE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=jP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!By())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ip.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ve(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new bt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wt(e,"w")){const r=yi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ug)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ch("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WP&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$P)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new DP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{pt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(zP)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&pt(u),l())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zl(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mg&&(this.reconnectDelay_=Ug,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+eE.replace(/\./g,"-")]=1,Rf()?e["framework.cordova"]=1:Rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return zl(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class Bc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Br,e),i=new se(Br,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
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
 */let Ka;class bE extends Bc{static get __EMPTY_NODE(){return Ka}static set __EMPTY_NODE(e){Ka=e}compare(e,n){return Oi(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(rr,Ka)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Ka)}toString(){return".key"}}const xn=new bE;/**
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
 */class Qa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Pt.EMPTY_NODE,this.right=s??Pt.EMPTY_NODE}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class VP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pt{constructor(e,n=Pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qa(this.root_,null,this.comparator_,!0,e)}}Pt.EMPTY_NODE=new VP;/**
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
 */function GP(t,e){return Oi(t.name,e.name)}function sp(t,e){return Oi(t,e)}/**
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
 */let dh;function HP(t){dh=t}const NE=function(t){return typeof t=="number"?"number:"+aE(t):"string:"+t},PE=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else P(t===dh||t.isEmpty(),"priority of unexpected type.");P(t===dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fg;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PE(this.priorityNode_)}static set __childrenNodeConstructor(e){Fg=e}static get __childrenNodeConstructor(){return Fg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||jr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+NE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aE(this.value_):e+=this.value_,this.lazyHash_=iE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),s=Ke.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let AE,xE;function qP(t){AE=t}function KP(t){xE=t}class QP extends Bc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Oi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(rr,new Ke("[PRIORITY-POST]",xE))}makePost(e,n){const r=AE(e);return new se(n,new Ke("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new QP;/**
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
 */const YP=Math.log(2);class JP{constructor(e){const n=s=>parseInt(Math.log(s)/YP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new Je(h,u.node,Je.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),w=i(g+1,c);return u=t[g],h=n?n(u):u,new Je(h,u.node,Je.BLACK,_,w)}},s=function(l){let c=null,d=null,u=t.length;const h=function(_,w){const A=u-_,p=u;u-=_;const f=i(A+1,p),m=t[A],y=n?n(m):m;g(new Je(y,m.node,w,null,f))},g=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),A=Math.pow(2,l.count-(_+1));w?h(A,Je.BLACK):(h(A,Je.BLACK),h(A,Je.RED))}return d},o=new JP(t.length),a=s(o);return new Pt(r||e,a)};/**
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
 */let Ju;const ji={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ji&&ve,"ChildrenNode.ts has not been loaded"),Ju=Ju||new Gn({".priority":ji},{".priority":ve}),Ju}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pt?n:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Zl(r,e.getCompare()):a=ji;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Gn(d,c)}addToIndexes(e,n){const r=Vl(this.indexes_,(i,s)=>{const o=yi(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zl(a,o.getCompare())}else return ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new Gn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vl(this.indexes_,i=>{if(i===ji)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new Gn(r,this.indexSet_)}}/**
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
 */let to;class V{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&PE(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return to||(to=new V(new Pt(sp),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?to:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?to:this.priorityNode_;return new V(i,o,s)}}updateChild(e,n){const r=re(e);if(r===null)return n;{P(re(e)!==".priority"||jr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),r++,s&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+NE(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sa?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XP extends V{constructor(){super(new Pt(sp),V.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Sa=new XP;Object.defineProperties(se,{MIN:{value:new se(Br,V.EMPTY_NODE)},MAX:{value:new se(rr,Sa)}});bE.__EMPTY_NODE=V.EMPTY_NODE;Ke.__childrenNodeConstructor=V;HP(Sa);KP(Sa);/**
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
 */const ZP=!0;function Ae(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,Ae(e))}if(!(t instanceof Array)&&ZP){const n=[];let r=!1;if(et(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return V.EMPTY_NODE;const s=Zl(n,GP,o=>o.name,sp);if(r){const o=Zl(n,ve.getCompare());return new V(s,Ae(e),new Gn({".priority":o},{".priority":ve}))}else return new V(s,Ae(e),Gn.Default)}else{let n=V.EMPTY_NODE;return et(t,(r,i)=>{if(Wt(t,r)&&r.substring(0,1)!=="."){const s=Ae(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ae(e))}}qP(Ae);/**
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
 */class op extends Bc{constructor(e){super(),this.indexPath_=e,P(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Oi(e.name,n.name):s}makePost(e,n){const r=Ae(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Sa);return new se(rr,e)}toString(){return ea(this.indexPath_,0).join("/")}}/**
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
 */class e1 extends Bc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Oi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=Ae(e);return new se(n,r)}toString(){return".value"}}const ap=new e1;/**
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
 */function OE(t){return{type:"value",snapshotNode:t}}function Ts(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ta(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function na(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ta(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ts(n,r)):o.trackChildChange(na(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(ta(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(na(i,s,o))}else r.trackChildChange(Ts(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ra{constructor(e){this.indexedFilter_=new lp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ra.getStartPost_(e),this.endPost_=ra.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class n1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ra(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=V.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(na(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ta(n,u));const w=a.updateImmediateChild(n,V.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ts(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ta(c.name,c.node)),s.trackChildChange(Ts(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
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
 */class jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Br}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r1(t){return t.loadsAllData()?new lp(t.getIndex()):t.hasLimit()?new n1(t):new ra(t)}function i1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function s1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function hh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function o1(t,e,n){let r;return t.index_===xn||n?r=hh(t,e,n):r=hh(t,e,rr),r.startAfterSet_=!0,r}function fh(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function a1(t,e,n){let r;return t.index_===xn||n?r=fh(t,e,n):r=fh(t,e,Br),r.endBeforeSet_=!0,r}function $c(t,e){const n=t.copy();return n.index_=e,n}function Bg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===ap?n="$value":t.index_===xn?n="$key":(P(t.index_ instanceof op,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class ec extends CE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ea("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ec.getListenId_(e,r),a={};this.listens_[o]=a;const l=Bg(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),yi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=ec.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bg(e._queryParams),r=e._path.toString(),i=new bt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ai(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ho(a.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class l1{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tc(){return{value:null,children:new Map}}function Fs(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,tc());const i=t.children.get(r);e=me(e),Fs(i,e,n)}}function ph(t,e){if(ie(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ve,(r,i)=>{Fs(t,new de(r),i)}),ph(t,e)}}else if(t.children.size>0){const n=re(e);return e=me(e),t.children.has(n)&&ph(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function mh(t,e,n){t.value!==null?n(e,t.value):c1(t,(r,i)=>{const s=new de(e.toString()+"/"+r);mh(i,s,n)})}function c1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class u1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const $g=10*1e3,d1=30*1e3,h1=5*60*1e3;class f1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new u1(e);const r=$g+(d1-$g)*Math.random();Io(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;et(e,(i,s)=>{s>0&&Wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Io(this.reportStats_.bind(this),Math.floor(Math.random()*2*h1))}}/**
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
 */var hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function cp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function up(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=hn.ACK_USER_WRITE,this.source=cp()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new nc(ue(),n,this.revert)}}else return P(re(this.path)===e,"operationForChild called for unrelated child."),new nc(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class ia{constructor(e,n){this.source=e,this.path=n,this.type=hn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new ia(this.source,ue()):new ia(this.source,me(this.path))}}/**
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
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=hn.OVERWRITE}operationForChild(e){return ie(this.path)?new Ci(this.source,ue(),this.snap.getImmediateChild(e)):new Ci(this.source,me(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=hn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new Ci(this.source,ue(),n.value):new ks(this.source,ue(),n)}else return P(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class p1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function m1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(t1(o.childName,o.snapshotNode))}),no(t,i,"child_removed",e,r,n),no(t,i,"child_added",e,r,n),no(t,i,"child_moved",s,r,n),no(t,i,"child_changed",e,r,n),no(t,i,"value",e,r,n),i}function no(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>_1(t,a,l)),o.forEach(a=>{const l=g1(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function g1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _1(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wc(t,e){return{eventCache:t,serverCache:e}}function Co(t,e,n,r){return Wc(new $r(e,n,r),t.serverCache)}function DE(t,e,n,r){return Wc(t.eventCache,new $r(e,n,r))}function rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xu;const v1=()=>(Xu||(Xu=new Pt(eP)),Xu);class ge{constructor(e,n=v1()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return et(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const r=re(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),n);return s!=null?{path:Ne(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(me(e)):new ge(null)}}set(e,n){if(ie(e))return new ge(n,this.children);{const r=re(e),s=(this.children.get(r)||new ge(null)).set(me(e),n),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(me(e)):null}}setTree(e,n){if(ie(e))return n;{const r=re(e),s=(this.children.get(r)||new ge(null)).setTree(me(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ie(e))return null;{const s=re(e),o=this.children.get(s);return o?o.findOnPath_(me(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const i=re(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),Ne(n,i),r):new ge(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new ge(null))}}function To(t,e,n){if(ie(e))return new mn(new ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Et(i,e);return s=s.updateChild(o,n),new mn(t.writeTree_.set(i,s))}else{const i=new ge(n),s=t.writeTree_.setTree(e,i);return new mn(s)}}}function gh(t,e,n){let r=t;return et(n,(i,s)=>{r=To(r,Ne(e,i),s)}),r}function Wg(t,e){if(ie(e))return mn.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new mn(n)}}function _h(t,e){return Di(t,e)!=null}function Di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Et(n.path,e)):null}function zg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function Ar(t,e){if(ie(e))return t;{const n=Di(t,e);return n!=null?new mn(new ge(n)):new mn(t.writeTree_.subtree(e))}}function vh(t){return t.writeTree_.isEmpty()}function Rs(t,e){return LE(ue(),t.writeTree_,e)}function LE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=LE(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
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
 */function zc(t,e){return BE(e,t)}function y1(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=To(t.visibleWrites,e,n)),t.lastWriteId=r}function w1(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=gh(t.visibleWrites,e,n),t.lastWriteId=r}function E1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function S1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&I1(a,r.path)?i=!1:Jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return C1(t),!0;if(r.snap)t.visibleWrites=Wg(t.visibleWrites,r.path);else{const a=r.children;et(a,l=>{t.visibleWrites=Wg(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function I1(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Ne(t.path,n),e))return!0;return!1}function C1(t){t.visibleWrites=UE(t.allWrites,T1,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function T1(t){return t.visible}function UE(t,e,n){let r=mn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Jt(n,o)?(a=Et(n,o),r=To(r,a,s.snap)):Jt(o,n)&&(a=Et(o,n),r=To(r,ue(),s.snap.getChild(a)));else if(s.children){if(Jt(n,o))a=Et(n,o),r=gh(r,a,s.children);else if(Jt(o,n))if(a=Et(o,n),ie(a))r=gh(r,ue(),s.children);else{const l=yi(s.children,re(a));if(l){const c=l.getChild(me(a));r=To(r,ue(),c)}}}else throw xs("WriteRecord should have .snap or .children")}}return r}function ME(t,e,n,r,i){if(!r&&!i){const s=Di(t.visibleWrites,e);if(s!=null)return s;{const o=Ar(t.visibleWrites,e);if(vh(o))return n;if(n==null&&!_h(o,ue()))return null;{const a=n||V.EMPTY_NODE;return Rs(o,a)}}}else{const s=Ar(t.visibleWrites,e);if(!i&&vh(s))return n;if(!i&&n==null&&!_h(s,ue()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},a=UE(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Rs(a,l)}}}function k1(t,e,n){let r=V.EMPTY_NODE;const i=Di(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ar(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=Rs(Ar(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),zg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ar(t.visibleWrites,e);return zg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function R1(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(_h(t.visibleWrites,s))return null;{const o=Ar(t.visibleWrites,s);return vh(o)?i.getChild(n):Rs(o,i.getChild(n))}}function b1(t,e,n,r){const i=Ne(e,n),s=Di(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ar(t.visibleWrites,i);return Rs(o,r.getNode().getImmediateChild(n))}else return null}function N1(t,e){return Di(t.visibleWrites,e)}function P1(t,e,n,r,i,s,o){let a;const l=Ar(t.visibleWrites,e),c=Di(l,ue());if(c!=null)a=c;else if(n!=null)a=Rs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function A1(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function ic(t,e,n,r){return ME(t.writeTree,t.treePath,e,n,r)}function hp(t,e){return k1(t.writeTree,t.treePath,e)}function Vg(t,e,n,r){return R1(t.writeTree,t.treePath,e,n,r)}function sc(t,e){return N1(t.writeTree,Ne(t.treePath,e))}function x1(t,e,n,r,i,s){return P1(t.writeTree,t.treePath,e,n,r,i,s)}function fp(t,e,n){return b1(t.writeTree,t.treePath,e,n)}function FE(t,e){return BE(Ne(t.treePath,e),t.writeTree)}function BE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class O1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,na(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ta(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ts(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,na(r,e.snapshotNode,i.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class D1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jE=new D1;class pp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),s=x1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function L1(t){return{filter:t}}function U1(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function M1(t,e,n,r,i){const s=new O1;let o,a;if(n.type===hn.OVERWRITE){const c=n;c.source.fromUser?o=yh(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=oc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===hn.MERGE){const c=n;c.source.fromUser?o=B1(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wh(t,e,c.path,c.children,r,i,a,s))}else if(n.type===hn.ACK_USER_WRITE){const c=n;c.revert?o=W1(t,e,c.path,r,i,s):o=j1(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===hn.LISTEN_COMPLETE)o=$1(t,e,n.path,r,s);else throw xs("Unknown operation type: "+n.type);const l=s.getChanges();return F1(e,o,l),{viewCache:o,changes:l}}function F1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(OE(rc(e)))}}function $E(t,e,n,r,i,s){const o=e.eventCache;if(sc(r,n)!=null)return e;{let a,l;if(ie(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ti(e),d=c instanceof V?c:V.EMPTY_NODE,u=hp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=ic(r,Ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=re(n);if(c===".priority"){P(jr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Vg(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=me(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Vg(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=fp(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Co(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function oc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=re(n);if(!l.isCompleteForPath(n)&&jr(n)>1)return e;const _=me(n),A=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=d.updatePriority(l.getNode(),A):c=d.updateChild(l.getNode(),g,A,_,jE,null)}const u=DE(e,c,l.isFullyInitialized()||ie(n),d.filtersNodes()),h=new pp(i,u,s);return $E(t,u,n,i,h,a)}function yh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new pp(i,e,s);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Co(e,c,!0,t.filter.filtersNodes());else{const u=re(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Co(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=me(n),g=a.getNode().getImmediateChild(u);let _;if(ie(h))_=r;else{const w=d.getCompleteChild(u);w!=null?np(h)===".priority"&&w.getChild(kE(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=V.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),u,_,h,d,o);l=Co(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Gg(t,e){return t.eventCache.isCompleteForChild(e)}function B1(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ne(n,l);Gg(e,re(d))&&(a=yh(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ne(n,l);Gg(e,re(d))||(a=yh(t,a,d,c,i,s,o))}),a}function Hg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function wh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=r:c=new ge(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=Hg(t,g,h);l=oc(t,l,new de(u),_,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),w=Hg(t,_,h);l=oc(t,l,new de(u),w,i,s,o,a)}}),l}function j1(t,e,n,r,i,s,o){if(sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ie(n)){let c=new ge(null);return l.getNode().forEachChild(xn,(d,u)=>{c=c.set(new de(d),u)}),wh(t,e,n,c,i,s,a,o)}else return e}else{let c=new ge(null);return r.foreach((d,u)=>{const h=Ne(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),wh(t,e,n,c,i,s,a,o)}}function $1(t,e,n,r,i){const s=e.serverCache,o=DE(e,s.getNode(),s.isFullyInitialized()||ie(n),s.isFiltered());return $E(t,o,n,r,jE,i)}function W1(t,e,n,r,i,s){let o;if(sc(r,n)!=null)return e;{const a=new pp(r,e,i),l=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ic(r,Ti(e));else{const u=e.serverCache.getNode();P(u instanceof V,"serverChildren would be complete if leaf node"),d=hp(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=re(n);let u=fp(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,me(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,V.EMPTY_NODE,me(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ic(r,Ti(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||sc(r,ue())!=null,Co(e,c,o,t.filter.filtersNodes())}}/**
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
 */class z1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lp(r.getIndex()),s=r1(r);this.processor_=L1(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(V.EMPTY_NODE,a.getNode(),null),d=new $r(l,o.isFullyInitialized(),i.filtersNodes()),u=new $r(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wc(u,d),this.eventGenerator_=new p1(this.query_)}get query(){return this.query_}}function V1(t){return t.viewCache_.serverCache.getNode()}function G1(t){return rc(t.viewCache_)}function H1(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function qg(t){return t.eventRegistrations_.length===0}function q1(t,e){t.eventRegistrations_.push(e)}function Kg(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Qg(t,e,n,r){e.type===hn.MERGE&&e.source.queryId!==null&&(P(Ti(t.viewCache_),"We should always have a full cache before handling merges"),P(rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=M1(t.processor_,i,e,n,r);return U1(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,WE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function K1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(Ts(s,o))}),n.isFullyInitialized()&&r.push(OE(n.getNode())),WE(t,r,n.getNode(),e)}function WE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return m1(t.eventGenerator_,e,n,i)}/**
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
 */let ac;class zE{constructor(){this.views=new Map}}function Q1(t){P(!ac,"__referenceConstructor has already been defined"),ac=t}function Y1(){return P(ac,"Reference.ts has not been loaded"),ac}function J1(t){return t.views.size===0}function mp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),Qg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Qg(o,e,n,r));return s}}function VE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ic(n,i?r:null),l=!1;a?l=!0:r instanceof V?(a=hp(n,r),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Wc(new $r(a,l,!1),new $r(r,i,!1));return new z1(e,c)}return o}function X1(t,e,n,r,i,s){const o=VE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),q1(o,n),K1(o,n)}function Z1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Wr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Kg(c,n,r)),qg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Kg(l,n,r)),qg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wr(t)&&s.push(new(Y1())(e._repo,e._path)),{removed:s,events:o}}function GE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xr(t,e){let n=null;for(const r of t.views.values())n=n||H1(r,e);return n}function HE(t,e){if(e._queryParams.loadsAllData())return Vc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function qE(t,e){return HE(t,e)!=null}function Wr(t){return Vc(t)!=null}function Vc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let lc;function eA(t){P(!lc,"__referenceConstructor has already been defined"),lc=t}function tA(){return P(lc,"Reference.ts has not been loaded"),lc}let nA=1;class Yg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=A1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gp(t,e,n,r,i){return y1(t.pendingWriteTree_,e,n,r,i),i?Bs(t,new Ci(cp(),e,n)):[]}function rA(t,e,n,r){w1(t.pendingWriteTree_,e,n,r);const i=ge.fromObject(n);return Bs(t,new ks(cp(),e,i))}function Er(t,e,n=!1){const r=E1(t.pendingWriteTree_,e);if(S1(t.pendingWriteTree_,e)){let s=new ge(null);return r.snap!=null?s=s.set(ue(),!0):et(r.children,o=>{s=s.set(new de(o),!0)}),Bs(t,new nc(r.path,s,n))}else return[]}function Ia(t,e,n){return Bs(t,new Ci(up(),e,n))}function iA(t,e,n){const r=ge.fromObject(n);return Bs(t,new ks(up(),e,r))}function sA(t,e){return Bs(t,new ia(up(),e))}function oA(t,e,n){const r=_p(t,n);if(r){const i=vp(r),s=i.path,o=i.queryId,a=Et(s,e),l=new ia(dp(o),a);return yp(t,s,l)}else return[]}function cc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||qE(o,e))){const l=Z1(o,e,n,r);J1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,g)=>Wr(g));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=cA(h);for(let _=0;_<g.length;++_){const w=g[_],A=w.query,p=JE(t,w);t.listenProvider_.startListening(ko(A),sa(t,A),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ko(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(Hc(h));t.listenProvider_.stopListening(ko(h),g)}))}uA(t,c)}return a}function KE(t,e,n,r){const i=_p(t,r);if(i!=null){const s=vp(i),o=s.path,a=s.queryId,l=Et(o,e),c=new Ci(dp(a),l,n);return yp(t,o,c)}else return[]}function aA(t,e,n,r){const i=_p(t,r);if(i){const s=vp(i),o=s.path,a=s.queryId,l=Et(o,e),c=ge.fromObject(n),d=new ks(dp(a),l,c);return yp(t,o,d)}else return[]}function Eh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Et(h,i);s=s||xr(g,_),o=o||Wr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Wr(a),s=s||xr(a,ue())):(a=new zE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const w=xr(_,ue());w&&(s=s.updateImmediateChild(g,w))}));const c=qE(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Hc(e);P(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=dA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=zc(t.pendingWriteTree_,i);let u=X1(a,e,n,d,s,l);if(!c&&!o&&!r){const h=HE(a,e);u=u.concat(hA(t,e,h))}return u}function Gc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Et(o,e),c=xr(a,l);if(c)return c});return ME(i,e,s,n,!0)}function lA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Et(c,n);r=r||xr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||xr(i,ue()):(i=new zE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=zc(t.pendingWriteTree_,e._path),l=VE(i,e,a,s?o.getNode():V.EMPTY_NODE,s);return G1(l)}function Bs(t,e){return QE(e,t.syncPointTree_,null,zc(t.pendingWriteTree_,ue()))}function QE(t,e,n,r){if(ie(t.path))return YE(t,e,n,r);{const i=e.get(ue());n==null&&i!=null&&(n=xr(i,ue()));let s=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=FE(r,o);s=s.concat(QE(a,l,c,d))}return i&&(s=s.concat(mp(i,t,r,n))),s}}function YE(t,e,n,r){const i=e.get(ue());n==null&&i!=null&&(n=xr(i,ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=FE(r,o),d=t.operationForChild(o);d&&(s=s.concat(YE(d,a,l,c)))}),i&&(s=s.concat(mp(i,t,r,n))),s}function JE(t,e){const n=e.query,r=sa(t,n);return{hashFn:()=>(V1(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?oA(t,n._path,r):sA(t,n._path);{const s=rP(i,n);return cc(t,n,null,s)}}}}function sa(t,e){const n=Hc(e);return t.queryToTagMap.get(n)}function Hc(t){return t._path.toString()+"$"+t._queryIdentifier}function _p(t,e){return t.tagToQueryMap.get(e)}function vp(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function yp(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=zc(t.pendingWriteTree_,e);return mp(r,n,i,null)}function cA(t){return t.fold((e,n,r)=>{if(n&&Wr(n))return[Vc(n)];{let i=[];return n&&(i=GE(n)),et(r,(s,o)=>{i=i.concat(o)}),i}})}function ko(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tA())(t._repo,t._path):t}function uA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function dA(){return nA++}function hA(t,e,n){const r=e._path,i=sa(t,e),s=JE(t,n),o=t.listenProvider_.startListening(ko(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!ie(c)&&d&&Wr(d))return[Vc(d).query];{let h=[];return d&&(h=h.concat(GE(d).map(g=>g.query))),et(u,(g,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(ko(d),sa(t,d))}}return o}/**
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
 */class wp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wp(n)}node(){return this.node_}}class Ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Ep(this.syncTree_,n)}node(){return Gc(this.syncTree_,this.path_)}}const fA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jg=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mA(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},mA=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},XE=function(t,e,n,r){return Ip(e,new Ep(n,t),r)},Sp=function(t,e,n){return Ip(t,new wp(e),n)};function Ip(t,e,n){const r=t.getPriority().val(),i=Jg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Jg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,Ae(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ke(i))),o.forEachChild(ve,(a,l)=>{const c=Ip(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Cp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qc(t,e){let n=e instanceof de?e:new de(e),r=t,i=re(n);for(;i!==null;){const s=yi(r.node.children,i)||{children:{},childCount:0};r=new Cp(i,r,s),n=me(n),i=re(n)}return r}function Li(t){return t.node.value}function Tp(t,e){t.node.value=e,Sh(t)}function ZE(t){return t.node.childCount>0}function gA(t){return Li(t)===void 0&&!ZE(t)}function Kc(t,e){et(t.node.children,(n,r)=>{e(new Cp(n,t,r))})}function e0(t,e,n,r){n&&!r&&e(t),Kc(t,i=>{e0(i,e,!0,r)}),n&&r&&e(t)}function _A(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ca(t){return new de(t.parent===null?t.name:Ca(t.parent)+"/"+t.name)}function Sh(t){t.parent!==null&&vA(t.parent,t.name,t)}function vA(t,e,n){const r=gA(n),i=Wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Sh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sh(t))}/**
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
 */const yA=/[\[\].#$\/\u0000-\u001F\u007F]/,wA=/[\[\].#$\u0000-\u001F\u007F]/,Zu=10*1024*1024,Qc=function(t){return typeof t=="string"&&t.length!==0&&!yA.test(t)},t0=function(t){return typeof t=="string"&&t.length!==0&&!wA.test(t)},EA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),t0(t)},oa=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fc(t)||t&&typeof t=="object"&&Wt(t,".sv")},Un=function(t,e,n,r){r&&e===void 0||Ta(Dt(t,"value"),e,n)},Ta=function(t,e,n){const r=n instanceof de?new MP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(Fc(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>Zu/3&&bc(e)>Zu)throw new Error(t+"contains a string greater than "+Zu+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(et(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Qc(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FP(r,o),Ta(t,a,r),BP(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},SA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ea(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Qc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(UP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},n0=function(t,e,n,r){if(r&&e===void 0)return;const i=Dt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];et(e,(o,a)=>{const l=new de(o);if(Ta(i,a,Ne(n,l)),np(l)===".priority"&&!oa(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),SA(i,s)},kp=function(t,e,n){if(!(n&&e===void 0)){if(Fc(e))throw new Error(Dt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!oa(e))throw new Error(Dt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ka=function(t,e,n,r){if(!(r&&n===void 0)&&!Qc(n))throw new Error(Dt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},aa=function(t,e,n,r){if(!(r&&n===void 0)&&!t0(n))throw new Error(Dt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aa(t,e,n,r)},Xt=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},r0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EA(n))throw new Error(Dt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class CA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function i0(t,e,n){Yc(t,n),s0(t,r=>rp(r,e))}function Vt(t,e,n){Yc(t,n),s0(t,r=>Jt(r,e)||Jt(e,r))}function s0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(TA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function TA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hi&&Xe("event: "+n.toString()),Ms(r)}}}/**
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
 */const o0="repo_interrupt",kA=25;class RA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tc(),this.transactionQueueTree_=new Cp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bA(t,e,n){if(t.stats_=ep(t.repoInfo_),t.forceRestClient_||aP())t.server_=new ec(t.repoInfo_,(r,i,s,o)=>{Xg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(r,i,s,o)=>{Xg(t,r,i,s,o)},r=>{Zg(t,r)},r=>{NA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=hP(t.repoInfo_,()=>new f1(t.stats_,t.server_)),t.infoData_=new l1,t.infoSyncTree_=new Yg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ia(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rp(t,"connected",!1),t.serverSyncTree_=new Yg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Vt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function a0(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ra(t){return fA({timestamp:a0(t)})}function Xg(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Vl(n,c=>Ae(c));o=aA(t.serverSyncTree_,s,l,i)}else{const l=Ae(n);o=KE(t.serverSyncTree_,s,l,i)}else if(r){const l=Vl(n,c=>Ae(c));o=iA(t.serverSyncTree_,s,l)}else{const l=Ae(n);o=Ia(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=bs(t,s)),Vt(t.eventQueue_,a,o)}function Zg(t,e){Rp(t,"connected",e),e===!1&&xA(t)}function NA(t,e){et(e,(n,r)=>{Rp(t,n,r)})}function Rp(t,e,n){const r=new de("/.info/"+e),i=Ae(n);t.infoData_.updateSnapshot(r,i);const s=Ia(t.infoSyncTree_,r,i);Vt(t.eventQueue_,r,s)}function Jc(t){return t.nextWriteId_++}function PA(t,e,n){const r=lA(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ae(i).withIndex(e._queryParams.getIndex());Eh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ia(t.serverSyncTree_,e._path,s);else{const a=sa(t.serverSyncTree_,e);o=KE(t.serverSyncTree_,e._path,s,a)}return Vt(t.eventQueue_,e._path,o),cc(t.serverSyncTree_,e,n,null,!0),s},i=>(js(t,"get for query "+Ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function bp(t,e,n,r,i){js(t,"set",{path:e.toString(),value:n,priority:r});const s=Ra(t),o=Ae(n,r),a=Gc(t.serverSyncTree_,e),l=Sp(o,a,s),c=Jc(t),d=gp(t.serverSyncTree_,e,l,c,!0);Yc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||pt("set at "+e+" failed: "+h);const w=Er(t.serverSyncTree_,c,!_);Vt(t.eventQueue_,e,w),zr(t,i,h,g)});const u=Pp(t,e);bs(t,u),Vt(t.eventQueue_,u,[])}function AA(t,e,n,r){js(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ra(t),o={};if(et(n,(a,l)=>{i=!1,o[a]=XE(Ne(e,a),Ae(l),t.serverSyncTree_,s)}),i)Xe("update() called with empty data.  Don't do anything."),zr(t,r,"ok",void 0);else{const a=Jc(t),l=rA(t.serverSyncTree_,e,o,a);Yc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||pt("update at "+e+" failed: "+c);const h=Er(t.serverSyncTree_,a,!u),g=h.length>0?bs(t,e):e;Vt(t.eventQueue_,g,h),zr(t,r,c,d)}),et(n,c=>{const d=Pp(t,Ne(e,c));bs(t,d)}),Vt(t.eventQueue_,e,[])}}function xA(t){js(t,"onDisconnectEvents");const e=Ra(t),n=tc();mh(t.onDisconnect_,ue(),(i,s)=>{const o=XE(i,s,t.serverSyncTree_,e);Fs(n,i,o)});let r=[];mh(n,ue(),(i,s)=>{r=r.concat(Ia(t.serverSyncTree_,i,s));const o=Pp(t,i);bs(t,o)}),t.onDisconnect_=tc(),Vt(t.eventQueue_,ue(),r)}function OA(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&ph(t.onDisconnect_,e),zr(t,n,r,i)})}function e_(t,e,n,r){const i=Ae(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Fs(t.onDisconnect_,e,i),zr(t,r,s,o)})}function DA(t,e,n,r,i){const s=Ae(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Fs(t.onDisconnect_,e,s),zr(t,i,o,a)})}function LA(t,e,n,r){if(zl(n)){Xe("onDisconnect().update() called with empty data.  Don't do anything."),zr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&et(n,(o,a)=>{const l=Ae(a);Fs(t.onDisconnect_,Ne(e,o),l)}),zr(t,r,i,s)})}function UA(t,e,n){let r;re(e._path)===".info"?r=Eh(t.infoSyncTree_,e,n):r=Eh(t.serverSyncTree_,e,n),i0(t.eventQueue_,e._path,r)}function Ih(t,e,n){let r;re(e._path)===".info"?r=cc(t.infoSyncTree_,e,n):r=cc(t.serverSyncTree_,e,n),i0(t.eventQueue_,e._path,r)}function l0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(o0)}function MA(t){t.persistentConnection_&&t.persistentConnection_.resume(o0)}function js(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function zr(t,e,n,r){e&&Ms(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function FA(t,e,n,r,i,s){js(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:rE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Np(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ta("transaction failed: Data returned ",l,o.path),o.status=0;const c=qc(t.transactionQueueTree_,e),d=Li(c)||[];d.push(o),Tp(c,d);let u;typeof l=="object"&&l!==null&&Wt(l,".priority")?(u=yi(l,".priority"),P(oa(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Gc(t.serverSyncTree_,e)||V.EMPTY_NODE).getPriority().val();const h=Ra(t),g=Ae(l,u),_=Sp(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=Jc(t);const w=gp(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Vt(t.eventQueue_,e,w),Xc(t,t.transactionQueueTree_)}}function Np(t,e,n){return Gc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Xc(t,e=t.transactionQueueTree_){if(e||Zc(t,e),Li(e)){const n=u0(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BA(t,Ca(e),n)}else ZE(e)&&Kc(e,n=>{Xc(t,n)})}function BA(t,e,n){const r=n.map(c=>c.currentWriteId),i=Np(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Et(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{js(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Er(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Zc(t,qc(t.transactionQueueTree_,e)),Xc(t,t.transactionQueueTree_),Vt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Ms(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{pt("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}bs(t,e)}},o)}function bs(t,e){const n=c0(t,e),r=Ca(n),i=u0(t,n);return jA(t,i,r),r}function jA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Et(n,l.path);let d=!1,u;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kA)d=!0,u="maxretry",i=i.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Np(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Ta("transaction failed: Data returned ",g,l.path);let _=Ae(g);typeof g=="object"&&g!=null&&Wt(g,".priority")||(_=_.updatePriority(h.getPriority()));const A=l.currentWriteId,p=Ra(t),f=Sp(_,h,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=Jc(t),o.splice(o.indexOf(A),1),i=i.concat(gp(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Er(t.serverSyncTree_,A,!0))}else d=!0,u="nodata",i=i.concat(Er(t.serverSyncTree_,l.currentWriteId,!0))}Vt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Zc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ms(r[a]);Xc(t,t.transactionQueueTree_)}function c0(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&Li(r)===void 0;)r=qc(r,n),e=me(e),n=re(e);return r}function u0(t,e){const n=[];return d0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function d0(t,e,n){const r=Li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kc(e,i=>{d0(t,i,n)})}function Zc(t,e){const n=Li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Tp(e,n.length>0?n:void 0)}Kc(e,r=>{Zc(t,r)})}function Pp(t,e){const n=Ca(c0(t,e)),r=qc(t.transactionQueueTree_,e);return _A(r,i=>{ed(t,i)}),ed(t,r),e0(r,i=>{ed(t,i)}),n}function ed(t,e){const n=Li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tp(e,void 0):n.length=s+1,Vt(t.eventQueue_,Ca(e),i);for(let o=0;o<r.length;o++)Ms(r[o])}}/**
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
 */function $A(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ch=function(t,e){const n=zA(t),r=n.namespace;n.domain==="firebase.com"&&Ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _E(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},zA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=$A(t.substring(d,u)));const h=WA(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const t_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",VA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=t_.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=t_.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class h0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class f0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ap{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let GA=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new bt;return OA(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xt("OnDisconnect.remove",this._path);const e=new bt;return e_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xt("OnDisconnect.set",this._path),Un("OnDisconnect.set",e,this._path,!1);const n=new bt;return e_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Xt("OnDisconnect.setWithPriority",this._path),Un("OnDisconnect.setWithPriority",e,this._path,!1),kp("OnDisconnect.setWithPriority",n,!1);const r=new bt;return DA(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Xt("OnDisconnect.update",this._path),n0("OnDisconnect.update",e,this._path,!1);const n=new bt;return LA(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class Lt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ie(this._path)?null:np(this._path)}get ref(){return new on(this._repo,this._path)}get _queryIdentifier(){const e=jg(this._queryParams),n=Xf(e);return n==="{}"?"default":n}get _queryObject(){return jg(this._queryParams)}isEqual(e){if(e=z(e),!(e instanceof Lt))return!1;const n=this._repo===e._repo,r=rp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LP(this._path)}}function eu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Kr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===xn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Br)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==rr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ve){if(e!=null&&!oa(e)||n!=null&&!oa(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(P(t.getIndex()instanceof op||t.getIndex()===ap,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function tu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class on extends Lt{constructor(e,n){super(e,n,new jc,!1)}get parent(){const e=kE(this._path);return e===null?null:new on(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let nu=class Th{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=ki(this.ref,e);return new Th(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Th(i,ki(this.ref,r),ve)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function p0(t,e){return t=z(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function n_(t,e){t=z(t),t._checkNotDeleted("refFromURL");const n=Ch(e,t._repo.repoInfo_.nodeAdmin);r0("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Ln("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),p0(t,n.path.toString())}function ki(t,e){return t=z(t),re(t._path)===null?IA("child","path",e,!1):aa("child","path",e,!1),new on(t._repo,Ne(t._path,e))}function HA(t,e){t=z(t),Xt("push",t._path),Un("push",e,t._path,!0);const n=a0(t._repo),r=VA(n),i=ki(t,r),s=ki(t,r);let o;return e!=null?o=xp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function qA(t){return Xt("remove",t._path),xp(t,null)}function xp(t,e){t=z(t),Xt("set",t._path),Un("set",e,t._path,!1);const n=new bt;return bp(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function KA(t,e){t=z(t),Xt("setPriority",t._path),kp("setPriority",e,!1);const n=new bt;return bp(t._repo,Ne(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function QA(t,e,n){if(Xt("setWithPriority",t._path),Un("setWithPriority",e,t._path,!1),kp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new bt;return bp(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function YA(t,e){n0("update",e,t._path,!1);const n=new bt;return AA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function JA(t){t=z(t);const e=new Ap(()=>{}),n=new ba(e);return PA(t._repo,t,n).then(r=>new nu(r,new on(t._repo,t._path),t._queryParams.getIndex()))}class ba{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new h0("value",this,new nu(e.snapshotNode,new on(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new f0(this,e,n):null}matches(e){return e instanceof ba?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ru{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new f0(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=ki(new on(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new h0(e.type,this,new nu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ru?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Na(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{Ih(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ap(n,s||void 0),a=e==="value"?new ba(o):new ru(e,o);return UA(t._repo,t,a),()=>Ih(t._repo,t,a)}function kh(t,e,n,r){return Na(t,"value",e,n,r)}function r_(t,e,n,r){return Na(t,"child_added",e,n,r)}function i_(t,e,n,r){return Na(t,"child_changed",e,n,r)}function s_(t,e,n,r){return Na(t,"child_moved",e,n,r)}function o_(t,e,n,r){return Na(t,"child_removed",e,n,r)}function a_(t,e,n){let r=null;const i=n?new Ap(n):null;e==="value"?r=new ba(i):e&&(r=new ru(e,i)),Ih(t._repo,t,r)}class vn{}class m0 extends vn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Un("endAt",this._value,e._path,!0);const n=fh(e._queryParams,this._value,this._key);if(tu(n),Kr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Lt(e._repo,e._path,n,e._orderByCalled)}}function XA(t,e){return ka("endAt","key",e,!0),new m0(t,e)}class ZA extends vn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Un("endBefore",this._value,e._path,!1);const n=a1(e._queryParams,this._value,this._key);if(tu(n),Kr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Lt(e._repo,e._path,n,e._orderByCalled)}}function ex(t,e){return ka("endBefore","key",e,!0),new ZA(t,e)}class g0 extends vn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Un("startAt",this._value,e._path,!0);const n=hh(e._queryParams,this._value,this._key);if(tu(n),Kr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Lt(e._repo,e._path,n,e._orderByCalled)}}function tx(t=null,e){return ka("startAt","key",e,!0),new g0(t,e)}class nx extends vn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Un("startAfter",this._value,e._path,!1);const n=o1(e._queryParams,this._value,this._key);if(tu(n),Kr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Lt(e._repo,e._path,n,e._orderByCalled)}}function rx(t,e){return ka("startAfter","key",e,!0),new nx(t,e)}class ix extends vn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Lt(e._repo,e._path,i1(e._queryParams,this._limit),e._orderByCalled)}}function sx(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new ix(t)}class ox extends vn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Lt(e._repo,e._path,s1(e._queryParams,this._limit),e._orderByCalled)}}function ax(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new ox(t)}class lx extends vn{constructor(e){super(),this._path=e}_apply(e){eu(e,"orderByChild");const n=new de(this._path);if(ie(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new op(n),i=$c(e._queryParams,r);return Kr(i),new Lt(e._repo,e._path,i,!0)}}function cx(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return aa("orderByChild","path",t,!1),new lx(t)}class ux extends vn{_apply(e){eu(e,"orderByKey");const n=$c(e._queryParams,xn);return Kr(n),new Lt(e._repo,e._path,n,!0)}}function dx(){return new ux}class hx extends vn{_apply(e){eu(e,"orderByPriority");const n=$c(e._queryParams,ve);return Kr(n),new Lt(e._repo,e._path,n,!0)}}function fx(){return new hx}class px extends vn{_apply(e){eu(e,"orderByValue");const n=$c(e._queryParams,ap);return Kr(n),new Lt(e._repo,e._path,n,!0)}}function mx(){return new px}class gx extends vn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Un("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new m0(this._value,this._key)._apply(new g0(this._value,this._key)._apply(e))}}function _x(t,e){return ka("equalTo","key",e,!0),new gx(t,e)}function ln(t,...e){let n=z(t);for(const r of e)n=r._apply(n);return n}Q1(on);eA(on);/**
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
 */const vx="FIREBASE_DATABASE_EMULATOR_HOST",Rh={};let yx=!1;function wx(t,e,n,r){t.repoInfo_=new _E(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ch(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[vx]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ch(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new fs(fs.OWNER):new cP(t.name,t.options,e);r0("Invalid Firebase Database URL",o),ie(o.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Sx(a,t,d,new lP(t.name,n));return new Ix(u,t)}function Ex(t,e){const n=Rh[e];(!n||n[t.key]!==t)&&Ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),l0(t),delete n[t.key]}function Sx(t,e,n,r){let i=Rh[e.name];i||(i={},Rh[e.name]=i);let s=i[t.toURLString()];return s&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new RA(t,yx,n,r),i[t.toURLString()]=s,s}let Ix=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new on(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ex(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}};function v0(){Cs.IS_TRANSPORT_INITIALIZED&&pt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Cx(){v0(),wr.forceDisallow()}function Tx(){v0(),Qt.forceDisallow(),wr.forceAllow()}function kx(t,e,n,r={}){t=z(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ln("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fs(fs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Uy(r.mockUserToken,t.app.options.projectId);s=new fs(o)}wx(i,e,n,s)}function Rx(t){t=z(t),t._checkNotDeleted("goOffline"),l0(t._repo)}function bx(t){t=z(t),t._checkNotDeleted("goOnline"),MA(t._repo)}function Nx(t,e){sE(t,e)}/**
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
 */function Px(t){tE(sr),tr(new zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),tn(Ig,Cg,t),tn(Ig,Cg,"esm2017")}/**
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
 */const Ax={".sv":"timestamp"};function xx(){return Ax}function Ox(t){return{".sv":{increment:t}}}/**
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
 */let Dx=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function Lx(t,e,n){var r;if(t=z(t),Xt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new bt,o=(l,c,d)=>{let u=null;l?s.reject(l):(u=new nu(d,new on(t._repo,t._path),ve),s.resolve(new Dx(c,u)))},a=kh(t,()=>{});return FA(t._repo,t._path,e,o,a,i),s.promise}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Px();const Ux="@firebase/database-compat",Mx="0.3.4";/**
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
 */const Fx=new pa("@firebase/database-compat"),y0=function(t){const e="FIREBASE WARNING: "+t;Fx.warn(e)};/**
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
 */const Bx=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Dt(t,e)+"must be a boolean.")},jx=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Dt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class $x{constructor(e){this._delegate=e}cancel(e){H("OnDisconnect.cancel",0,1,arguments.length),Ye("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){H("OnDisconnect.remove",0,1,arguments.length),Ye("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){H("OnDisconnect.set",1,2,arguments.length),Ye("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){H("OnDisconnect.setWithPriority",2,3,arguments.length),Ye("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(H("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,y0("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ye("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class Wx{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return H("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Or{constructor(e,n){this._database=e,this._delegate=n}val(){return H("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return H("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return H("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return H("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return H("DataSnapshot.child",0,1,arguments.length),e=String(e),aa("DataSnapshot.child","path",e,!1),new Or(this._database,this._delegate.child(e))}hasChild(e){return H("DataSnapshot.hasChild",1,1,arguments.length),aa("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return H("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return H("DataSnapshot.forEach",1,1,arguments.length),Ye("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Or(this._database,n)))}hasChildren(){return H("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return H("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return H("DataSnapshot.ref",0,0,arguments.length),new oi(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class it{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;H("Query.on",2,4,arguments.length),Ye("Query.on","callback",n,!1);const o=it.getCancelAndContextArgs_("Query.on",r,i),a=(c,d)=>{n.call(o.context,new Or(this.database,c),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return kh(this._delegate,a,l),n;case"child_added":return r_(this._delegate,a,l),n;case"child_removed":return o_(this._delegate,a,l),n;case"child_changed":return i_(this._delegate,a,l),n;case"child_moved":return s_(this._delegate,a,l),n;default:throw new Error(Dt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(H("Query.off",0,3,arguments.length),jx("Query.off",e,!0),Ye("Query.off","callback",n,!0),Qm("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,a_(this._delegate,e,i)}else a_(this._delegate,e)}get(){return JA(this._delegate).then(e=>new Or(this.database,e))}once(e,n,r,i){H("Query.once",1,4,arguments.length),Ye("Query.once","callback",n,!0);const s=it.getCancelAndContextArgs_("Query.once",r,i),o=new bt,a=(c,d)=>{const u=new Or(this.database,c);n&&n.call(s.context,u,d),o.resolve(u)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":kh(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":r_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":o_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":i_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":s_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(Dt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return H("Query.limitToFirst",1,1,arguments.length),new it(this.database,ln(this._delegate,sx(e)))}limitToLast(e){return H("Query.limitToLast",1,1,arguments.length),new it(this.database,ln(this._delegate,ax(e)))}orderByChild(e){return H("Query.orderByChild",1,1,arguments.length),new it(this.database,ln(this._delegate,cx(e)))}orderByKey(){return H("Query.orderByKey",0,0,arguments.length),new it(this.database,ln(this._delegate,dx()))}orderByPriority(){return H("Query.orderByPriority",0,0,arguments.length),new it(this.database,ln(this._delegate,fx()))}orderByValue(){return H("Query.orderByValue",0,0,arguments.length),new it(this.database,ln(this._delegate,mx()))}startAt(e=null,n){return H("Query.startAt",0,2,arguments.length),new it(this.database,ln(this._delegate,tx(e,n)))}startAfter(e=null,n){return H("Query.startAfter",0,2,arguments.length),new it(this.database,ln(this._delegate,rx(e,n)))}endAt(e=null,n){return H("Query.endAt",0,2,arguments.length),new it(this.database,ln(this._delegate,XA(e,n)))}endBefore(e=null,n){return H("Query.endBefore",0,2,arguments.length),new it(this.database,ln(this._delegate,ex(e,n)))}equalTo(e,n){return H("Query.equalTo",1,2,arguments.length),new it(this.database,ln(this._delegate,_x(e,n)))}toString(){return H("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return H("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(H("Query.isEqual",1,1,arguments.length),!(e instanceof it)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ye(e,"cancel",i.cancel,!0),i.context=r,Qm(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Dt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new oi(this.database,new on(this._delegate._repo,this._delegate._path))}}let oi=class Wi extends it{constructor(e,n){super(e,new Lt(n._repo,n._path,new jc,!1)),this.database=e,this._delegate=n}getKey(){return H("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return H("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Wi(this.database,ki(this._delegate,e))}getParent(){H("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Wi(this.database,e):null}getRoot(){return H("Reference.root",0,0,arguments.length),new Wi(this.database,this._delegate.root)}set(e,n){H("Reference.set",1,2,arguments.length),Ye("Reference.set","onComplete",n,!0);const r=xp(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(H("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,y0("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Xt("Reference.update",this._delegate._path),Ye("Reference.update","onComplete",n,!0);const r=YA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){H("Reference.setWithPriority",2,3,arguments.length),Ye("Reference.setWithPriority","onComplete",r,!0);const i=QA(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){H("Reference.remove",0,1,arguments.length),Ye("Reference.remove","onComplete",e,!0);const n=qA(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){H("Reference.transaction",1,3,arguments.length),Ye("Reference.transaction","transactionUpdate",e,!1),Ye("Reference.transaction","onComplete",n,!0),Bx("Reference.transaction","applyLocally",r,!0);const i=Lx(this._delegate,e,{applyLocally:r}).then(s=>new Wx(s.committed,new Or(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){H("Reference.setPriority",1,2,arguments.length),Ye("Reference.setPriority","onComplete",n,!0);const r=KA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){H("Reference.push",0,2,arguments.length),Ye("Reference.push","onComplete",n,!0);const r=HA(this._delegate,e),i=r.then(o=>new Wi(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Wi(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return Xt("Reference.onDisconnect",this._delegate._path),new $x(new GA(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}};/**
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
 */class la{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Cx,forceLongPolling:Tx}}useEmulator(e,n,r={}){kx(this._delegate,e,n,r)}ref(e){if(H("database.ref",0,1,arguments.length),e instanceof oi){const n=n_(this._delegate,e.toString());return new oi(this,n)}else{const n=p0(this._delegate,e);return new oi(this,n)}}refFromURL(e){H("database.refFromURL",1,1,arguments.length);const r=n_(this._delegate,e);return new oi(this,r)}goOffline(){return H("database.goOffline",0,0,arguments.length),Rx(this._delegate)}goOnline(){return H("database.goOnline",0,0,arguments.length),bx(this._delegate)}}la.ServerValue={TIMESTAMP:xx(),increment:t=>Ox(t)};/**
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
 */function zx({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){tE(n);const o=new Wy("auth-internal",new zy("database-standalone"));return o.setComponent(new zt("auth-internal",()=>r,"PRIVATE")),{instance:new la(_0(t,o,void 0,e,s),t),namespace:i}}var Vx=Object.freeze({__proto__:null,initStandalone:zx});/**
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
 */const Gx=la.ServerValue;function Hx(t){t.INTERNAL.registerComponent(new zt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new la(i,r)},"PUBLIC").setServiceProps({Reference:oi,Query:it,Database:la,DataSnapshot:Or,enableLogging:Nx,INTERNAL:Vx,ServerValue:Gx}).setMultipleInstances(!0)),t.registerVersion(Ux,Mx)}Hx(K);/**
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
 */const w0="firebasestorage.googleapis.com",E0="storageBucket",qx=2*60*1e3,Kx=10*60*1e3,Qx=1e3;/**
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
 */class De extends It{constructor(e,n,r=0){super(td(e),`Firebase Storage: ${n} (${td(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return td(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function td(t){return"storage/"+t}function Op(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Se.UNKNOWN,t)}function Yx(t){return new De(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Jx(t){return new De(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Se.UNAUTHENTICATED,t)}function Zx(){return new De(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eO(t){return new De(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function S0(){return new De(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function I0(){return new De(Se.CANCELED,"User canceled the upload/download.")}function tO(t){return new De(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function nO(t){return new De(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rO(){return new De(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+E0+"' property when initializing the app?")}function C0(){return new De(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iO(){return new De(Se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function sO(){return new De(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oO(t){return new De(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ps(t){return new De(Se.INVALID_ARGUMENT,t)}function T0(){return new De(Se.APP_DELETED,"The Firebase app was deleted.")}function k0(t){return new De(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ro(t,e){return new De(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ro(t){throw new De(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(r.path==="")return r;throw nO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${d}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},w=n===w0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${A}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:c},{regex:p,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<m.length;y++){const k=m[y],D=k.regex.exec(e);if(D){const O=D[k.indices.bucket];let b=D[k.indices.path];b||(b=""),r=new ft(O,b),k.postModify(r);break}}if(r==null)throw tO(e);return r}}class aO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...A){c||(c=!0,e.apply(null,A))}function u(A){i=setTimeout(()=>{i=null,t(g,l())},A)}function h(){s&&clearTimeout(s)}function g(A,...p){if(c){h();return}if(A){h(),d.call(null,A,...p);return}if(l()||o){h(),d.call(null,A,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,u(m)}let _=!1;function w(A){_||(_=!0,h(),!c&&(i!==null?(A||(a=2),clearTimeout(i),u(0)):A||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function cO(t){t(!1)}/**
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
 */function uO(t){return t!==void 0}function dO(t){return typeof t=="function"}function hO(t){return typeof t=="object"&&!Array.isArray(t)}function iu(t){return typeof t=="string"||t instanceof String}function l_(t){return Dp()&&t instanceof Blob}function Dp(){return typeof Blob<"u"&&!bf()}function bh(t,e,n,r){if(r<e)throw ps(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ps(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Qr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function R0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var fi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fi||(fi={}));/**
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
 */function b0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class fO{constructor(e,n,r,i,s,o,a,l,c,d,u,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ya(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===fi.NO_ERROR,l=s.getStatus();if(!a||b0(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===fi.ABORT;r(!1,new Ya(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Ya(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Op();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?T0():I0();o(l)}else{const l=S0();o(l)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=lO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function pO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _O(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vO(t,e,n,r,i,s,o=!0){const a=R0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gO(c,e),pO(c,n),mO(c,s),_O(c,r),new fO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function yO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wO(...t){const e=yO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dp())return new Blob(t);throw new De(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function SO(t){if(typeof atob>"u")throw oO("base-64");return atob(t)}/**
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
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nd{constructor(e,n){this.data=e,this.contentType=n||null}}function N0(t,e){switch(t){case Zt.RAW:return new nd(P0(e));case Zt.BASE64:case Zt.BASE64URL:return new nd(A0(t,e));case Zt.DATA_URL:return new nd(CO(e),TO(e))}throw Op()}function P0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function IO(t){let e;try{e=decodeURIComponent(t)}catch{throw Ro(Zt.DATA_URL,"Malformed data URL.")}return P0(e)}function A0(t,e){switch(t){case Zt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ro(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ro(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SO(e)}catch(i){throw i.message.includes("polyfill")?i:Ro(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class x0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ro(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function CO(t){const e=new x0(t);return e.base64?A0(Zt.BASE64,e.rest):IO(e.rest)}function TO(t){return new x0(t).contentType}function kO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class jn{constructor(e,n){let r=0,i="";l_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(l_(this.data_)){const r=this.data_,i=EO(r,e,n);return i===null?null:new jn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jn(r,!0)}}static getBlob(...e){if(Dp()){const n=e.map(r=>r instanceof jn?r.data_:r);return new jn(wO.apply(null,n))}else{const n=e.map(o=>iu(o)?N0(Zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new jn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Lp(t){let e;try{e=JSON.parse(t)}catch{return null}return hO(e)?e:null}/**
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
 */function RO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function O0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function NO(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||NO}}let Ja=null;function PO(t){return!iu(t)||t.length<2?t:O0(t)}function su(){if(Ja)return Ja;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(s,o){return PO(o)}const n=new vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Ja=t,Ja}function AO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ft(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AO(r,t),r}function D0(t,e,n){const r=Lp(e);return r===null?null:xO(t,r,n)}function OO(t,e,n,r){const i=Lp(e);if(i===null||!iu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,h="/b/"+o(d)+"/o/"+o(u),g=Qr(h,n,r),_=R0({alt:"media",token:c});return g+_})[0]}function Up(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const c_="prefixes",u_="items";function DO(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[c_])for(const i of n[c_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ft(e,s));r.prefixes.push(o)}if(n[u_])for(const i of n[u_]){const s=t._makeStorageReference(new ft(e,i.name));r.items.push(s)}return r}function LO(t,e,n){const r=Lp(n);return r===null?null:DO(t,e,r)}class lr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function On(t){if(!t)throw Op()}function ou(t,e){function n(r,i){const s=D0(t,i,e);return On(s!==null),s}return n}function UO(t,e){function n(r,i){const s=LO(t,e,i);return On(s!==null),s}return n}function MO(t,e){function n(r,i){const s=D0(t,i,e);return On(s!==null),OO(s,i,t.host,t._protocol)}return n}function $s(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Zx():i=Xx():n.getStatus()===402?i=Jx(t.bucket):n.getStatus()===403?i=eO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function au(t){const e=$s(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Yx(t.path)),s.serverResponse=i.serverResponse,s}return n}function L0(t,e,n){const r=e.fullServerUrl(),i=Qr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new lr(i,s,ou(t,n),o);return a.errorHandler=au(e),a}function FO(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Qr(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new lr(a,l,UO(t,e.bucket),c);return d.urlParams=s,d.errorHandler=$s(e),d}function BO(t,e,n){const r=e.fullServerUrl(),i=Qr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new lr(i,s,MO(t,n),o);return a.errorHandler=au(e),a}function jO(t,e,n,r){const i=e.fullServerUrl(),s=Qr(i,t.host,t._protocol),o="PATCH",a=Up(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new lr(s,o,ou(t,r),c);return d.headers=l,d.body=a,d.errorHandler=au(e),d}function $O(t,e){const n=e.fullServerUrl(),r=Qr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new lr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=au(e),a}function WO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function U0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=WO(null,e)),r}function zO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let y=0;y<2;y++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=U0(e,r,i),d=Up(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=jn.getBlob(u,r,h);if(g===null)throw C0();const _={name:c.fullPath},w=Qr(s,t.host,t._protocol),A="POST",p=t.maxUploadRetryTime,f=new lr(w,A,ou(t,n),p);return f.urlParams=_,f.headers=o,f.body=g.uploadData(),f.errorHandler=$s(e),f}class uc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Mp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{On(!1)}return On(!!n&&(e||["active"]).indexOf(n)!==-1),n}function VO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=U0(e,r,i),a={name:o.fullPath},l=Qr(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Up(o,n),h=t.maxUploadRetryTime;function g(w){Mp(w);let A;try{A=w.getResponseHeader("X-Goog-Upload-URL")}catch{On(!1)}return On(iu(A)),A}const _=new lr(l,c,g,h);return _.urlParams=a,_.headers=d,_.body=u,_.errorHandler=$s(e),_}function GO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Mp(c,["active","final"]);let u=null;try{u=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{On(!1)}u||On(!1);const h=Number(u);return On(!isNaN(h)),new uc(h,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new lr(n,o,s,a);return l.headers=i,l.errorHandler=$s(e),l}const d_=256*1024;function HO(t,e,n,r,i,s,o,a){const l=new uc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw iO();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const u=l.current,h=u+d;let g="";d===0?g="finalize":c===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(u,h);if(w===null)throw C0();function A(y,k){const D=Mp(y,["active","final"]),O=l.current+d,b=r.size();let Z;return D==="final"?Z=ou(e,s)(y,k):Z=null,new uc(O,b,D==="final",Z)}const p="POST",f=e.maxUploadRetryTime,m=new lr(n,p,A,f);return m.headers=_,m.body=w.uploadData(),m.progressCallback=a||null,m.errorHandler=$s(t),m}/**
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
 */const qO={STATE_CHANGED:"state_changed"},wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function rd(t){switch(t){case"running":case"pausing":case"canceling":return wt.RUNNING;case"paused":return wt.PAUSED;case"success":return wt.SUCCESS;case"canceled":return wt.CANCELED;case"error":return wt.ERROR;default:return wt.ERROR}}/**
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
 */class KO{constructor(e,n,r){if(dO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function $i(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class QO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class YO extends QO{initXhr(){this.xhr_.responseType="text"}}function bn(){return new YO}/**
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
 */class M0{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=su(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(b0(i.status,[]))if(s)i=S0();else{this.sleepTime=Math.max(this.sleepTime*2,Qx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Se.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=VO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=GO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,bn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=d_*this._chunkMultiplier,n=new uc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=HO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,bn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){d_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=L0(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=zO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=I0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=rd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new KO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(rd(this._state)){case wt.SUCCESS:$i(this._resolve.bind(null,this.snapshot))();break;case wt.CANCELED:case wt.ERROR:const n=this._reject;$i(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(rd(this._state)){case wt.RUNNING:case wt.PAUSED:e.next&&$i(e.next.bind(e,this.snapshot))();break;case wt.SUCCESS:e.complete&&$i(e.complete.bind(e))();break;case wt.CANCELED:case wt.ERROR:e.error&&$i(e.error.bind(e,this._error))();break;default:e.error&&$i(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ri{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return O0(this._location.path)}get storage(){return this._service}get parent(){const e=RO(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw k0(e)}}function JO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new M0(t,new jn(e),n)}function XO(t){const e={prefixes:[],items:[]};return F0(t,e).then(()=>e)}async function F0(t,e,n){const i=await B0(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await F0(t,e,i.nextPageToken)}function B0(t,e){e!=null&&typeof e.maxResults=="number"&&bh("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=FO(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,bn)}function ZO(t){t._throwIfRoot("getMetadata");const e=L0(t.storage,t._location,su());return t.storage.makeRequestWithTokens(e,bn)}function eD(t,e){t._throwIfRoot("updateMetadata");const n=jO(t.storage,t._location,e,su());return t.storage.makeRequestWithTokens(n,bn)}function tD(t){t._throwIfRoot("getDownloadURL");const e=BO(t.storage,t._location,su());return t.storage.makeRequestWithTokens(e,bn).then(n=>{if(n===null)throw sO();return n})}function nD(t){t._throwIfRoot("deleteObject");const e=$O(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bn)}function j0(t,e){const n=bO(t._location.path,e),r=new ft(t._location.bucket,n);return new Ri(t.storage,r)}/**
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
 */function rD(t){return/^[A-Za-z]+:\/\//.test(t)}function iD(t,e){return new Ri(t,e)}function $0(t,e){if(t instanceof Fp){const n=t;if(n._bucket==null)throw rO();const r=new Ri(n,n._bucket);return e!=null?$0(r,e):r}else return e!==void 0?j0(t,e):t}function sD(t,e){if(e&&rD(e)){if(t instanceof Fp)return iD(t,e);throw ps("To use ref(service, url), the first argument must be a Storage instance.")}else return $0(t,e)}function h_(t,e){const n=e==null?void 0:e[E0];return n==null?null:ft.makeFromBucketSpec(n,t)}function oD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Uy(i,t.app.options.projectId))}class Fp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=w0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qx,this._maxUploadRetryTime=Kx,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=h_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=h_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new aO(T0());{const o=vO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const f_="@firebase/storage",p_="0.11.2";/**
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
 */const aD="storage";function lD(t,e,n){return t=z(t),JO(t,e,n)}function cD(t){return t=z(t),ZO(t)}function uD(t,e){return t=z(t),eD(t,e)}function dD(t,e){return t=z(t),B0(t,e)}function hD(t){return t=z(t),XO(t)}function fD(t){return t=z(t),tD(t)}function pD(t){return t=z(t),nD(t)}function m_(t,e){return t=z(t),sD(t,e)}function mD(t,e){return j0(t,e)}function gD(t,e,n,r={}){oD(t,e,n,r)}function _D(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fp(n,r,i,e,sr)}function vD(){tr(new zt(aD,_D,"PUBLIC").setMultipleInstances(!0)),tn(f_,p_,""),tn(f_,p_,"esm2017")}vD();/**
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
 */class Xa{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class g_{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Xa(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Xa(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Xa(o,this,this._ref)):s={next:n.next?o=>n.next(new Xa(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class __{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Yn(e,this._service))}get items(){return this._delegate.items.map(e=>new Yn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Yn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=mD(this._delegate,e);return new Yn(n,this.storage)}get root(){return new Yn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Yn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new g_(lD(this._delegate,e,n),this)}putString(e,n=Zt.RAW,r){this._throwIfRoot("putString");const i=N0(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new g_(new M0(this._delegate,new jn(i.data,!0),s),this)}listAll(){return hD(this._delegate).then(e=>new __(e,this.storage))}list(e){return dD(this._delegate,e||void 0).then(n=>new __(n,this.storage))}getMetadata(){return cD(this._delegate)}updateMetadata(e){return uD(this._delegate,e)}getDownloadURL(){return fD(this._delegate)}delete(){return this._throwIfRoot("delete"),pD(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw k0(e)}}/**
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
 */class W0{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(v_(e))throw ps("ref() expected a child path but got a URL, use refFromURL instead.");return new Yn(m_(this._delegate,e),this)}refFromURL(e){if(!v_(e))throw ps("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ft.makeFromUrl(e,this._delegate.host)}catch{throw ps("refFromUrl() expected a valid full URL but got an invalid one.")}return new Yn(m_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){gD(this._delegate,e,n,r)}}function v_(t){return/^[A-Za-z]+:\/\//.test(t)}const yD="@firebase/storage-compat",wD="0.3.2";/**
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
 */const ED="storage-compat";function SD(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new W0(n,r)}function ID(t){const e={TaskState:wt,TaskEvent:qO,StringFormat:Zt,Storage:W0,Reference:Yn};t.INTERNAL.registerComponent(new zt(ED,SD,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(yD,wD)}ID(K);const CD={apiKey:"AIzaSyBzKwHZ5Qa4NfxeBUn5-KoymCUI1Z0EyXE",authDomain:"pixpair.firebaseapp.com",databaseURL:"https://pixpair-default-rtdb.firebaseio.com",projectId:"pixpair",storageBucket:"pixpair.appspot.com",messagingSenderId:"743134014753",appId:"1:743134014753:web:da56b2391f4eb69a63a260",measurementId:"G-08ST8X93R2"};K.apps.length||K.initializeApp(CD);const y_=K.auth(),rt=K.database(),TD=({onCreateSession:t,onJoinSession:e,onSignOut:n})=>{const[r,i]=W.useState(""),[s,o]=W.useState(""),[a,l]=W.useState(!1),[c,d]=W.useState(null),[u,h]=W.useState(!1);W.useEffect(()=>{try{const f=new URLSearchParams(window.location.search).get("sessionId");f&&K.auth().currentUser?g(f):f&&localStorage.setItem("pendingSessionId",f)}catch(p){console.error("Error in session URL processing:",p),d("Could not process session information from URL.")}},[]),W.useEffect(()=>{try{const p=localStorage.getItem("pendingSessionId"),f=K.auth().currentUser;p&&f&&(g(p),localStorage.removeItem("pendingSessionId"))}catch(p){console.error("Error checking pending session:",p)}},[K.auth().currentUser]);const g=async p=>{if(p)try{if(d(null),h(!0),!(await K.database().ref(`sessions/${p}`).once("value")).val()){d("Session not found. Please check the ID and try again.");return}const y=K.auth().currentUser,k=y==null?void 0:y.uid;if(!k){d("You must be signed in to join a session.");return}await K.database().ref(`sessions/${p}/members/${k}`).set({joinedAt:K.database.ServerValue.TIMESTAMP}),typeof e=="function"&&e(p)}catch(f){console.error("Error joining session:",f),d("Failed to join session. Please try again.")}finally{h(!1)}},_=async p=>{p.preventDefault(),d(null),h(!0);try{if(a?await K.auth().createUserWithEmailAndPassword(r,s):await K.auth().signInWithEmailAndPassword(r,s),!K.auth().currentUser)throw new Error("Authentication succeeded but user is not available.")}catch(f){console.error("Authentication error:",f),d(f.message||"Authentication failed. Please try again.")}finally{h(!1)}},w=async()=>{d(null),h(!0);try{const p=new K.auth.GoogleAuthProvider;if(await K.auth().signInWithPopup(p),!K.auth().currentUser)throw new Error("Google authentication succeeded but user is not available.")}catch(p){console.error("Google auth error:",p),d(p.message||"Google sign-in failed. Please try again.")}finally{h(!1)}},A=async()=>{d(null),h(!0);try{const p=await K.auth().signInAnonymously();if(console.log("Anonymous authentication successful",p),await new Promise(m=>setTimeout(m,1e3)),!K.auth().currentUser)throw new Error("Anonymous authentication succeeded but user is not available.")}catch(p){console.error("Anonymous auth error:",p),p.message.includes("PERMISSION_DENIED")?d("Database permission denied. Please check Firebase rules."):d(p.message||"Guest sign-in failed. Please try again.")}finally{h(!1)}};return E.jsxs("div",{className:"auth-screen",children:[E.jsx("h1",{children:"PixCrab"}),E.jsx("p",{children:"Synchronized Photo Capture"}),c&&E.jsx("div",{className:"error",children:c}),E.jsxs("div",{className:"auth-options",children:[E.jsx("button",{className:"btn btn-google rainbow-button w-full",onClick:w,disabled:u,"aria-label":"Continue with Google",children:"Continue with Google"}),E.jsx("button",{className:"btn btn-text",onClick:A,disabled:u,"aria-label":"Continue as Guest",children:"Continue as Guest"}),E.jsx("div",{className:"auth-separator",children:E.jsx("span",{children:"or"})})]}),E.jsxs("form",{onSubmit:_,children:[E.jsx("h2",{children:a?"Create Account":"Sign In"}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",name:"email",value:r,onChange:p=>i(p.target.value),required:!0,autoComplete:"email","aria-required":"true"})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"password",children:"Password"}),E.jsx("input",{type:"password",id:"password",name:"password",value:s,onChange:p=>o(p.target.value),required:!0,autoComplete:a?"new-password":"current-password","aria-required":"true"})]}),E.jsx("button",{type:"submit",className:"auth-form-button",disabled:u,children:a?"Sign Up":"Sign In"})]}),E.jsx("button",{className:"btn btn-secondary",onClick:()=>l(!a),disabled:u,children:a?"Already have an account? Sign In":"Need an account? Sign Up"})]})},kD=({onCreateSession:t,onJoinSession:e,onSignOut:n,onViewAlbum:r,initialSessionId:i})=>{const[s,o]=W.useState(""),[a,l]=W.useState(null),[c,d]=W.useState(null),[u,h]=W.useState(""),g=W.useRef(null);W.useEffect(()=>{i&&A(i)},[i]),W.useEffect(()=>{c&&g.current&&p(c)},[c]);const _=async()=>{try{l(null),h("");const m=K.auth().currentUser;if(!m){setTimeout(()=>{const y=K.auth().currentUser;if(!y){l("Authentication required. Please sign in before creating a session.");return}w(y)},1e3);return}w(m)}catch(m){console.error("Error creating session:",m),l("Failed to create session. Please try again.")}},w=async m=>{try{const y=Math.random().toString(36).substring(2,8).toUpperCase(),k=m.uid;await K.database().ref(`/sessions/${y}`).set({id:y,owner:k,created:K.database.ServerValue.TIMESTAMP,status:"active"}),await K.database().ref(`/sessions/${y}/members/${k}`).set(!0),console.log("Session created successfully:",y),d(y),typeof t=="function"&&t(y)}catch(y){console.error("Error in session creation:",y),y.message.includes("PERMISSION_DENIED")?l("Database permission denied. Please check Firebase rules."):l("Failed to create session. Please try again.")}},A=async m=>{try{l(null),h("");const y=m||s;if(!y){l("Please enter a session ID");return}const k=K.auth().currentUser;if(!k){l("Authentication required. Please sign in before joining a session.");return}if(!(await K.database().ref(`sessions/${y}`).once("value")).val()){l("Session not found. Please check the ID and try again.");return}const b=k.uid;await K.database().ref(`sessions/${y}/members/${b}`).set({joinedAt:K.database.ServerValue.TIMESTAMP}),d(y),typeof e=="function"&&e(y)}catch(y){console.error("Error joining session:",y),l("Failed to join session. Please try again.")}},p=m=>{if(g.current){g.current.innerHTML="";const y=`${window.location.origin}${window.location.pathname}?sessionId=${m}`;try{new QRCode(g.current,{text:y,width:256,height:256,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}catch(k){console.error("Error generating QR code:",k),g.current&&(g.current.innerHTML='<p style="color: red;">Failed to generate QR code</p>')}}},f=()=>{c&&navigator.clipboard.writeText(c).then(()=>{h("Copied!"),setTimeout(()=>h(""),2e3)}).catch(m=>{console.error("Failed to copy:",m),h("Failed to copy")})};return E.jsxs("div",{className:"session-setup pt-20",children:[E.jsx("h1",{className:"text-3xl font-bold mt-4",children:"PixCrab"}),E.jsx("p",{className:"text-gray-600 mt-2",children:"Create a new session or join an existing one"}),a&&E.jsx("div",{className:"error",children:a}),E.jsxs("div",{className:"session-actions",children:[E.jsx("button",{className:"btn btn-primary rainbow-button",onClick:_,"aria-label":"Create New Session",children:"Create New Session"}),E.jsxs("div",{className:"session-join",children:[E.jsx("label",{htmlFor:"sessionId",className:"sr-only",children:"Enter Session ID"}),E.jsx("input",{id:"sessionId",name:"sessionId",type:"text",placeholder:"Enter Session ID",value:s,onChange:m=>o(m.target.value),autoComplete:"off","aria-label":"Session ID"}),E.jsx("button",{className:"btn btn-secondary",onClick:()=>A(),"aria-label":"Join Session",children:"Join Session"})]}),E.jsx("button",{className:"btn btn-secondary view-album-btn",onClick:r,"aria-label":"View Photo Album",children:"View Photo Album"})]}),c&&E.jsxs("div",{className:"session-info",children:[E.jsxs("div",{className:"session-id-container",children:[E.jsx("span",{className:"session-id-label",children:"Session ID:"}),E.jsx("span",{className:"session-id",children:c}),E.jsx("button",{className:"btn btn-icon",onClick:f,title:"Copy Session ID","aria-label":"Copy Session ID",children:"Copy"}),u&&E.jsx("span",{className:"copy-status","aria-live":"polite",children:u})]}),E.jsx("p",{children:"Scan this QR code to join the session:"}),E.jsx("div",{className:"qr-code-container",ref:g,"aria-label":"QR code to join session"})]}),E.jsx("button",{className:"btn btn-text",onClick:n,"aria-label":"Sign Out",children:"Sign Out"})]})},RD=()=>E.jsx("div",{className:"logo-container",children:E.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/pixpair.firebasestorage.app/o/crab5.svg?alt=media&token=93592dde-03d2-4140-bf36-c4cb0ca39f85",alt:"PixCrab logo",className:"logo-image"})});var Nh={exports:{}};(function(t,e){(function(n,r){r(e,W)})(G0,function(n,r){function i(C){return C&&typeof C=="object"&&"default"in C?C:{default:C}}var s=i(r),o=function(){return o=Object.assign||function(S){for(var $,v=1,T=arguments.length;v<T;v++){$=arguments[v];for(var I in $)Object.prototype.hasOwnProperty.call($,I)&&(S[I]=$[I])}return S},o.apply(this,arguments)};function a(C,S,$){if($||arguments.length===2)for(var v=0,T=S.length,I;v<T;v++)(I||!(v in S))&&(I||(I=Array.prototype.slice.call(S,0,v)),I[v]=S[v]);return C.concat(I||Array.prototype.slice.call(S))}typeof SuppressedError=="function"&&SuppressedError;var l={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function u(){if(d)return c;d=1;var C=s.default,S=Symbol.for("react.element"),$=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,T=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function L(B,U,G){var x,j={},ee=null,te=null;G!==void 0&&(ee=""+G),U.key!==void 0&&(ee=""+U.key),U.ref!==void 0&&(te=U.ref);for(x in U)v.call(U,x)&&!I.hasOwnProperty(x)&&(j[x]=U[x]);if(B&&B.defaultProps)for(x in U=B.defaultProps,U)j[x]===void 0&&(j[x]=U[x]);return{$$typeof:S,type:B,key:ee,ref:te,props:j,_owner:T.current}}return c.Fragment=$,c.jsx=L,c.jsxs=L,c}l.exports=u();var h=l.exports,g=function(C,S,$){return typeof C=="function"?C($):typeof C=="object"?C:S($)},_={3:"rotate(180deg)",2:"rotateY(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},w=16,A={display:"flex",flexWrap:"wrap"},p=function(C){var S=C.item,$=_[S.orientation],v={cursor:"pointer",maxWidth:"none",width:S.scaledWidth,height:S.scaledHeight,marginLeft:S.marginLeft,marginTop:0,transform:$};if(S.isSelected){var T=S.scaledWidth/S.scaledHeight,I=S.scaledHeight-w*2,L=S.viewportWidth-w*2,B=void 0,U=void 0;S.scaledWidth>S.scaledHeight?(U=S.scaledWidth-w*2,B=Math.floor(U/T)):(B=S.scaledHeight-w*2,U=Math.floor(B*T));var G=Math.abs(Math.floor((I-B)/2)),x=Math.abs(Math.floor((L-U)/2));v.width=U,v.height=B,v.marginLeft=x===0?0:-x,v.marginTop=G===0?0:-G}return v},f=function(C){var S=C.item,$={width:S.viewportWidth,height:S.scaledHeight,overflow:"hidden"};return S.nano&&($.background="url(".concat(S.nano,")"),$.backgroundSize="cover",$.backgroundPosition="center center"),S.isSelected&&($.width=S.viewportWidth-w*2,$.height=S.scaledHeight-w*2,$.margin=w),$},m=function(C){var S=C.hover;return{pointerEvents:"none",opacity:S?1:0,position:"absolute",height:"100%",width:"100%"}},y=function(C){var S=C.margin;return{margin:S,WebkitUserSelect:"none",position:"relative",background:"#eee",padding:"0px"}},k=function(C){var S=C.showOverlay;return{pointerEvents:"none",opacity:1,position:"absolute",height:"100%",width:"100%",background:S?"linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)":"none"}},D={pointerEvents:"none",opacity:1,position:"absolute",height:"36px",width:"100%"},O={background:"white",width:"100%",margin:0,userSelect:"text",WebkitUserSelect:"text",MozUserSelect:"text",overflow:"hidden"},b={padding:"2px",pointerEvents:"none",position:"absolute",minHeight:"0px",maxHeight:"160px",width:"100%",bottom:"0px",overflow:"hidden"},Z={display:"inline-block",cursor:"pointer",pointerEvents:"visible",margin:"2px"},Y=function(){return{display:"inline",padding:".2em .6em .3em",fontSize:"75%",fontWeight:"600",lineHeight:"1",color:"yellow",background:"rgba(0,0,0,0.65)",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em"}},gt=function(C){var S=C.isVisible;return{visibility:S?"visible":"hidden",background:"none",float:"left",width:36,height:36,border:"none",padding:6,cursor:"pointer",pointerEvents:"visible"}},yn=function(C){var S=C.isSelected,$=S===void 0?!1:S,v=C.isVisible,T=v===void 0?!0:v,I=C.onClick,L=C.color,B=L===void 0?"#FFFFFFB2":L,U=C.selectedColor,G=U===void 0?"#4285F4FF":U,x=C.hoverColor,j=x===void 0?"#FFFFFFFF":x,ee=r.useState(!1),te=ee[0],ae=ee[1],ye={display:$?"block":"none"},Fe=$?G:te?j:B,Ie=function(){return ae(!0)},Ce=function(){return ae(!1)};return h.jsx("div",o({"data-testid":"grid-gallery-item_check-button",title:"Select",style:gt({isVisible:T}),onClick:I,onMouseOver:Ie,onMouseOut:Ce},{children:h.jsxs("svg",o({fill:Fe,height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},{children:[h.jsxs("radialGradient",o({id:"shadow",cx:"38",cy:"95.488",r:"10.488",gradientTransform:"matrix(1 0 0 -1 -26 109)",gradientUnits:"userSpaceOnUse"},{children:[h.jsx("stop",{offset:".832",stopColor:"#010101"}),h.jsx("stop",{offset:"1",stopColor:"#010101",stopOpacity:"0"})]})),h.jsx("circle",{style:ye,opacity:".26",fill:"url(#shadow)",cx:"12",cy:"13.512",r:"10.488"}),h.jsx("circle",{style:ye,fill:"#FFF",cx:"12",cy:"12.2",r:"8.292"}),h.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),h.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})]}))}))},Mn=function(C){var S=C.item,$=C.thumbnailImageComponent,v=C.isSelectable,T=v===void 0?!0:v,I=C.thumbnailStyle,L=C.tagStyle,B=C.tileViewportStyle,U=C.margin,G=C.index,x=C.onSelect,j=C.onClick,ee={item:S},te=r.useState(!1),ae=te[0],ye=te[1],Fe={key:G,"data-testid":"grid-gallery-item_thumbnail",src:S.src,alt:S.alt?S.alt:"",title:typeof S.caption=="string"?S.caption:null,style:g(I,p,ee)},Ie=function(ne){T&&x(G,ne)},Ce=function(ne){j(G,ne)},q={item:S,index:G,margin:U,onSelect:x,onClick:j,isSelectable:T,tileViewportStyle:B,thumbnailStyle:I,tagStyle:L};return h.jsxs("div",o({className:"ReactGridGallery_tile","data-testid":"grid-gallery-item",onMouseEnter:function(){return ye(!0)},onMouseLeave:function(){return ye(!1)},style:y({margin:U})},{children:[h.jsx("div",o({className:"ReactGridGallery_tile-icon-bar",style:D},{children:h.jsx(yn,{isSelected:S.isSelected,isVisible:S.isSelected||T&&ae,onClick:Ie})})),!!S.tags&&h.jsx("div",o({className:"ReactGridGallery_tile-bottom-bar",style:b},{children:S.tags.map(function(ne,Te){return h.jsx("div",o({title:ne.title,style:Z},{children:h.jsx("span",o({style:g(L,Y,ee)},{children:ne.value}))}),ne.key||Te)})})),!!S.customOverlay&&h.jsx("div",o({className:"ReactGridGallery_custom-overlay",style:m({hover:ae})},{children:S.customOverlay})),h.jsx("div",{className:"ReactGridGallery_tile-overlay",style:k({showOverlay:ae&&!S.isSelected&&T})}),h.jsx("div",o({className:"ReactGridGallery_tile-viewport","data-testid":"grid-gallery-item_viewport",style:g(B,f,ee),onClick:Ce},{children:$?h.jsx($,o({},q,{imageProps:Fe})):h.jsx("img",o({},Fe))})),S.thumbnailCaption&&h.jsx("div",o({className:"ReactGridGallery_tile-description",style:O},{children:S.thumbnailCaption}))]}))};function Ui(C){var S=r.useRef(null),$=r.useRef(),v=r.useState(C),T=v[0],I=v[1],L=r.useCallback(function(B){var U;(U=$.current)===null||U===void 0||U.disconnect(),$.current=void 0,S.current=B;var G=function(){if(S.current){var x=S.current.clientWidth;try{x=S.current.getBoundingClientRect().width}catch{}I(Math.floor(x))}};G(),B&&typeof ResizeObserver<"u"&&($.current=new ResizeObserver(G),$.current.observe(B))},[]);return{containerRef:L,containerWidth:T}}var Mi=function(C,S,$){var v=[],T=0;for(var I in C){var L=C[I],B=L.scaledWidth/S;v[I]=Math.floor(B*$),T+=v[I]}for(var U=$-T;U>0;)for(var I in v)if(v[I]++,U--,U<0)break;return v},cr=function(C,S){for(var $=S.containerWidth,v=S.rowHeight,T=S.margin,I=[],L=2*T,B=a([],C,!0),U=0;B.length>0&&U<$;){var G=B.shift(),x=Math.floor(v*(G.width/G.height)),j=o(o({},G),{scaledHeight:v,scaledWidth:x,viewportWidth:x,marginLeft:0});I.push(j),U+=j.scaledWidth+L}var ee=U-$;if(I.length>0&&ee>0){var te=Mi(I,U,ee);for(var ae in I){var ye=te[ae],G=I[ae];G.marginLeft=-Math.abs(Math.floor(ye/2)),G.viewportWidth=G.scaledWidth-ye}}return[I,B]},ur=function(C,S,$){$===void 0&&($=[]);var v=cr(C,S),T=v[0],I=v[1],L=a(a([],$,!0),[T],!1);return S.maxRows&&L.length>=S.maxRows?L:I.length?ur(I,S,L):L},M=function(C,S){var $=S.containerWidth,v=S.maxRows,T=S.rowHeight,I=S.margin;if(T=typeof T>"u"?180:T,I=typeof I>"u"?2:I,!C)return[];if(!$)return[];var L={containerWidth:$,maxRows:v,rowHeight:T,margin:I};return ur(C,L)},Q=function(C,S){var $=M(C,S);return[].concat.apply([],$)},J=function(C){var S=C.images,$=C.id,v=$===void 0?"ReactGridGallery":$,T=C.enableImageSelection,I=T===void 0?!0:T,L=C.onSelect,B=L===void 0?function(){}:L,U=C.rowHeight,G=U===void 0?180:U,x=C.maxRows,j=C.margin,ee=j===void 0?2:j,te=C.defaultContainerWidth,ae=te===void 0?0:te,ye=C.onClick,Fe=ye===void 0?function(){}:ye,Ie=C.tileViewportStyle,Ce=C.thumbnailStyle,q=C.tagStyle,ne=C.thumbnailImageComponent,Te=Ui(ae),ke=Te.containerRef,le=Te.containerWidth,Re=Q(S,{containerWidth:le,maxRows:x,rowHeight:G,margin:ee}),X=function(tt,qe){qe.preventDefault(),B(tt,S[tt],qe)},_t=function(tt,qe){Fe(tt,S[tt],qe)};return h.jsx("div",o({id:v,className:"ReactGridGallery",ref:ke},{children:h.jsx("div",o({style:A},{children:Re.map(function(tt,qe){return h.jsx(Mn,{item:tt,index:qe,margin:ee,height:G,isSelectable:I,onClick:_t,onSelect:X,tagStyle:q,tileViewportStyle:Ie,thumbnailStyle:Ce,thumbnailImageComponent:ne},tt.key||qe)})}))}))};J.displayName="Gallery",n.CheckButton=yn,n.Gallery=J,n.buildLayout=M,n.buildLayoutFlat=Q,Object.defineProperty(n,"__esModule",{value:!0})})})(Nh,Nh.exports);var z0=Nh.exports;class pe{static debugLog(e){this.info(e)}static info(e){const n=typeof e=="string"&&e.length>100?e.substring(0,97)+"...":e;console.log(`[PixCrab] ${n}`);const r=document.getElementById("debugConsole");if(r){const i=new Date,s=i.toLocaleTimeString()+"."+i.getMilliseconds().toString().padStart(3,"0"),o=document.createElement("div");o.textContent=`[${s}] ${n}`,r.appendChild(o),r.scrollTop=r.scrollHeight}}static showToast(e,n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("hidden")},n))}static formatSessionId(e){return e?e.length===6?`${e.slice(0,3)}-${e.slice(3)}`:e:""}static async capturePhoto(e){return new Promise((n,r)=>{try{if(!e||!(e instanceof HTMLVideoElement)){r(new Error("Invalid video element"));return}const i=document.createElement("canvas"),s=e.videoWidth/e.videoHeight,o=2160,a=Math.round(o/s);i.width=o,i.height=a,i.getContext("2d").drawImage(e,0,0,o,a);const c=i.toDataURL("image/jpeg",.92);pe.debugLog(`Photo captured: ${Math.round(o)}x${Math.round(a)}`),n(c)}catch(i){pe.debugLog(`Error capturing photo: ${i.message}`),r(i)}})}static async generateSafeSessionId(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="";if(window.crypto&&window.crypto.getRandomValues){const r=new Uint8Array(6);window.crypto.getRandomValues(r);for(let i=0;i<6;i++)n+=e.charAt(r[i]%e.length)}else for(let r=0;r<6;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}static copyToClipboard(e){if(!e)return Promise.reject(new Error("No text to copy"));if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(e).then(()=>(pe.debugLog("Text copied to clipboard"),pe.showToast("Copied to clipboard"),!0)).catch(n=>(pe.debugLog(`Clipboard write failed: ${n.message}`),!1));try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const r=document.execCommand("copy");return document.body.removeChild(n),r?(pe.showToast("Copied to clipboard"),Promise.resolve(!0)):Promise.reject(new Error("execCommand copy failed"))}catch(n){return Promise.reject(n)}}static isMobileDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static generateQRCode(e,n,r={}){if(typeof QRCode>"u")throw new Error("QRCode library not loaded");return new QRCode(e,{text:n,width:r.width||184,height:r.height||184,colorDark:r.colorDark||"#4831D4",colorLight:r.colorLight||"#ffffff",correctLevel:QRCode.CorrectLevel.H})}}const bD=({imageUrl:t,onClose:e})=>(pe.info(`MODAL: PhotoModal render, imageUrl exists: ${!!t}`),t?E.jsx("div",{className:"photo-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]",onClick:e,style:{pointerEvents:"auto"},children:E.jsxs("div",{className:"modal-content bg-white p-2 rounded-lg shadow-xl max-w-full max-h-full relative",onClick:n=>n.stopPropagation(),children:[E.jsx("img",{src:t,alt:"Full size",className:"modal-image max-w-[90vw] max-h-[90vh] object-contain",onLoad:()=>pe.info("MODAL: Full-size image loaded successfully"),onError:n=>console.error("MODAL ERROR: Error loading full-size image:",n)}),E.jsx("button",{onClick:e,className:"close-modal-button absolute top-2 right-2 text-white rounded-full","aria-label":"Close modal",style:{backgroundColor:"rgba(0, 0, 0, 0.5)",border:"0px none rgb(255, 255, 255)",borderRadius:"50%",padding:"4px 12px",width:"36px",height:"36px"},children:"✕"})]})}):null),ND=({photos:t,participantInfo:e})=>{const[n,r]=W.useState(null);if(W.useEffect(()=>{pe.info(`GALLERY: Photos received by gallery: ${t.length}`)},[t]),W.useEffect(()=>{pe.info(`GALLERY: selectedFullImageUrl state changed: ${n?"URL set":"null"}`)},[n]),!t||t.length===0)return pe.info("GALLERY: No photos to display"),E.jsx("div",{className:"combined-photo-empty text-center p-4",children:E.jsx("p",{children:"No photos captured yet. Combined photos will appear here."})});const i=t.filter(l=>l.isCombined||l.participantIds).sort((l,c)=>(c.timestamp||0)-(l.timestamp||0)),s=l=>l?new Date(l).toLocaleString():"",o=(l,c,d)=>{pe.info(`CLICK: Image clicked at index: ${l}`);try{const u=i[l];if(!u){console.error("CLICK ERROR: No photo found at index",l);return}u.dataUrl?(pe.info(`CLICK: Setting full image URL from photo.dataUrl (length: ${u.dataUrl.length})`),r(u.dataUrl)):console.error("CLICK ERROR: No dataUrl found for full image")}catch(u){console.error("CLICK ERROR: Exception in handleClick:",u)}},a=i.map((l,c)=>{let h=E.jsxs("div",{children:[E.jsx("div",{className:"font-medium",children:"Combined Photo"}),E.jsx("div",{className:"text-xs",children:s(l.timestamp)}),l.participantIds&&l.participantIds.length>0&&E.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:l.participantIds.map((g,_)=>E.jsx("span",{className:"inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs",children:e&&e[g]?e[g].name||g:`User ${_+1}`},g))})]});return{src:l.dataUrl,thumbnail:l.thumbnailDataUrl||l.dataUrl,thumbnailWidth:800,thumbnailHeight:450,caption:h}});return E.jsxs("div",{className:"combined-photo-gallery p-3 w-full",children:[E.jsx(z0.Gallery,{images:a,enableImageSelection:!1,rowHeight:180,margin:8,onClick:o}),E.jsx(bD,{imageUrl:n,onClose:()=>{pe.info("GALLERY: Modal close clicked"),r(null)}})]})},PD=({sessionId:t,onExitSession:e,onSignOut:n})=>{const[r,i]=W.useState(null),[s,o]=W.useState(!1),[a,l]=W.useState([]),[c,d]=W.useState(!1),[u,h]=W.useState(null),[g,_]=W.useState({}),[w,A]=W.useState(0),[p,f]=W.useState(""),[m,y]=W.useState([]),[k,D]=W.useState(!1),O=W.useRef(null),b=W.useRef(null),Z=W.useRef(null);W.useEffect(()=>{if(!t){console.log("No session ID provided, exiting session"),Y(),typeof e=="function"&&e();return}},[t,e]),W.useEffect(()=>{var T;function v(){const I=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.setProperty("--viewport-height",`${I}px`),console.log("📏 Updated viewport height:",I)}return v(),(T=window.visualViewport)==null||T.addEventListener("resize",v),window.addEventListener("resize",v),()=>{var I;(I=window.visualViewport)==null||I.removeEventListener("resize",v),window.removeEventListener("resize",v)}},[]),W.useEffect(()=>{var v;console.log("🔍 BUTTON RENDER CONDITIONS:",{cameraReady:s,uploading:c,countdown:u,participantCount:w,disabled:!s||c||u!==null||w<2,videoRef:b.current?"exists":"null",videoSrcObject:(v=b.current)!=null&&v.srcObject?"stream active":"no stream"})},[s,c,u,w]),W.useEffect(()=>()=>{console.log("🎥 CameraScreen unmounting - stopping camera"),Y(),O.current&&clearInterval(O.current)},[]),W.useEffect(()=>{var v,T,I,L,B;console.log("🎥 CAMERA READY STATE CHANGED:",s),console.log("🎥 DEBUG: Camera state details:",{ready:s,videoRef:b.current?"exists":"null",videoSrcObject:(v=b.current)!=null&&v.srcObject?"stream active":"no stream",videoWidth:((T=b.current)==null?void 0:T.videoWidth)||"unknown",videoHeight:((I=b.current)==null?void 0:I.videoHeight)||"unknown",tracks:((B=(L=b.current)==null?void 0:L.srcObject)==null?void 0:B.getTracks().length)||0})},[s]),W.useEffect(()=>{if(!t)return;console.log("📊 DEBUG: Setting up Firebase listeners for session:",t),Y(),Mi();const v=K.auth().currentUser;if(v){const x=v.uid,j=v.isAnonymous,ee=v.displayName||(j?"Guest User":v.email||"Unknown");console.log(`📊 DEBUG: Adding current user to participants: ${x}, isAnonymous: ${j}`),rt.ref(`sessions/${t}/participants/${x}`).set({connected:!0,lastSeen:K.database.ServerValue.TIMESTAMP,displayName:ee,photoURL:v.photoURL||null,isAnonymous:j}),rt.ref(`sessions/${t}/members/${x}`).set({isAnonymous:j,joinTime:K.database.ServerValue.TIMESTAMP})}const T=rt.ref(`sessions/${t}`);T.once("value",x=>{console.log("📊 DEBUG: Initial session data check:",JSON.stringify(x.val()));const j=x.val();if(j){const ee=Object.keys(j);console.log("📊 DEBUG: Session exists with fields:",ee)}else console.log("📊 DEBUG: Session does not exist")}),console.log("📊 DEBUG: Setting up all Firebase listeners for path:",`sessions/${t}`);const I=rt.ref(".info/connected"),L=rt.ref(`sessions/${t}/photos`),B=rt.ref(`sessions/${t}/combinedPhotos`);console.log("📊 DEBUG: Setting up child_added listener for photos"),L.on("child_added",x=>{const j={id:x.key,...x.val()};console.log("📊 DEBUG: New photo detected in Firebase -",x.key,"with timestamp:",j.timestamp),l(ee=>(console.log("📊 DEBUG: Updating photosTaken state, current count:",ee.length),[...ee,j]))},x=>{console.error("📊 DEBUG: Error in child_added listener:",x)}),console.log("📊 DEBUG: Testing Firebase write permission..."),T.child("test").set({test:"write-test",timestamp:Date.now()}).then(()=>(console.log("📊 DEBUG: Firebase test write successful"),T.child("test").once("value"))).then(x=>{console.log("📊 DEBUG: Firebase test read successful:",x.val())}).catch(x=>{console.error("📊 DEBUG: Firebase permission error:",x.message)}),I.on("value",x=>{x.val()===!0?console.log("📊 DEBUG: Connected to Firebase"):console.log("📊 DEBUG: Disconnected from Firebase")}),console.log("📊 DEBUG: Setting up value listener for combined photos"),B.on("value",x=>{console.log("📊 DEBUG: Combined photos value event triggered");const j=x.val()||{};console.log("📊 DEBUG: Combined photos data structure:",JSON.stringify(j));const ee=Object.entries(j).map(([te,ae])=>(console.log(`📊 DEBUG: Processing combined photo ${te}`),{id:te,isCombined:!0,...ae}));ee.length>0&&(console.log(`📊 DEBUG: Found ${ee.length} combined photos`),console.log("📊 DEBUG: Combined photo list:",JSON.stringify(ee.map(te=>({id:te.id,hasDataUrl:!!te.dataUrl,dataUrlLength:te.dataUrl?te.dataUrl.length:0,timestamp:te.timestamp,participantIds:te.participantIds})))),y(ee))}),L.on("value",x=>{console.log("📊 DEBUG: Photos value event triggered");const j=x.val()||{};console.log("📊 DEBUG: Photos data structure:",JSON.stringify(j));const ee=[];Object.entries(j).forEach(([te,ae])=>{console.log(`📊 DEBUG: Processing photos for user ${te}:`,JSON.stringify(ae)),ae.dataUrl?(console.log(`📊 DEBUG: Found direct photo object for user ${te}`),ee.push({userId:te,dataUrl:ae.dataUrl,timestamp:ae.timestamp})):typeof ae=="object"&&(console.log(`📊 DEBUG: Found collection of photos for user ${te}`),Object.entries(ae).forEach(([ye,Fe])=>{console.log(`📊 DEBUG: Adding photo ${ye} to combined list`),ee.push({userId:te,photoId:ye,...Fe})}))}),ee.sort((te,ae)=>ae.timestamp-te.timestamp),console.log(`📊 DEBUG: Combined photos state update: ${ee.length} photos from ${Object.keys(j).length} participants`),console.log("📊 DEBUG: Full photo list:",JSON.stringify(ee)),m.length===0&&y(ee)},x=>{console.error("📊 DEBUG: Error in value listener:",x)}),console.log("📊 DEBUG: Setting up participants listener");const U=rt.ref(`sessions/${t}/participants`);U.on("value",x=>{const j=x.val()||{};console.log("📊 DEBUG: Participants updated:",JSON.stringify(j)),_(j),A(Object.keys(j).length)}),console.log("📊 DEBUG: Setting up capture time listener");const G=rt.ref(`sessions/${t}/capture`);return G.on("value",x=>{const j=x.val();console.log("📊 DEBUG: Capture data update:",JSON.stringify(j)),j&&j.captureTime?(console.log("📊 DEBUG: Valid capture time received, starting countdown"),Ui(j.captureTime)):console.log("📊 DEBUG: No valid capture time in the data")}),()=>{console.log("🧹 DEBUG: Cleaning up Firebase listeners and camera"),Y(),T.off(),L.off(),B.off(),I.off(),U.off(),G.off(),O.current&&clearInterval(O.current),console.log("🧹 DEBUG: All listeners removed")}},[t]);const Y=()=>{b.current&&b.current.srcObject?(console.log("🎥 STOPPING CAMERA"),b.current.srcObject.getTracks().forEach(T=>{console.log(`🎥 Stopping track: ${T.kind}, enabled: ${T.enabled}`),T.stop()}),b.current.srcObject=null,o(!1),console.log("🎥 CAMERA STOPPED")):console.log("🎥 No camera stream to stop")},gt=()=>{console.log("🎥 Exit session - stopping camera"),Y(),typeof e=="function"&&e()},yn=()=>{t&&navigator.clipboard.writeText(t).then(()=>{f("Copied!"),setTimeout(()=>f(""),2e3)}).catch(v=>{console.error("Failed to copy:",v),f("Failed to copy")})},Mn=async()=>{var v;console.log("📸 DEBUG: initiateCapture function called");try{console.log("📸 DEBUG: Measuring network latency...");const T=Date.now();await rt.ref(".info/serverTimeOffset").once("value");const L=Date.now()-T;console.log(`📸 DEBUG: Network latency measured: ${L}ms`);const B=Math.max(1e3,L*2);console.log(`📸 DEBUG: Calculated buffer time: ${B}ms`);const U=Date.now()+3e3+B;console.log(`📸 DEBUG: Set capture time to: ${new Date(U).toISOString()}`),console.log("📸 DEBUG: Saving capture data to Firebase..."),await rt.ref(`sessions/${t}/capture`).set({captureTime:U,initiatedBy:((v=K.auth().currentUser)==null?void 0:v.uid)||"anonymous",initiated:K.database.ServerValue.TIMESTAMP,approximateLatency:L}),console.log(`📸 DEBUG: Capture data saved successfully! Initiated capture for time: ${new Date(U).toISOString()} (buffer: ${B}ms)`)}catch(T){console.error("❌ ERROR in initiateCapture:",T),i("Failed to initiate synchronized capture.")}},Ui=v=>{console.log("📸 DEBUG: startCountdown function called with captureTime:",v);try{O.current&&(console.log("📸 DEBUG: Clearing existing countdown interval"),clearInterval(O.current));const T=Date.now(),I=v-T;if(console.log(`📸 DEBUG: Time until capture: ${I}ms`),I<=0){console.log("📸 DEBUG: Capture time already passed, aborting countdown");return}console.log(`📸 DEBUG: Starting countdown for capture at ${new Date(v).toISOString()}`);const L=Math.ceil(I/1e3);console.log(`📸 DEBUG: Initial countdown value: ${L}`),h(L),console.log("📸 DEBUG: Setting up countdown interval"),O.current=setInterval(()=>{try{const B=v-Date.now(),U=Math.ceil(B/1e3);console.log(`📸 DEBUG: Countdown tick - ${U}s remaining`),U===2&&!s&&(console.log("📸 DEBUG: 2 seconds left, ensuring camera is ready"),b.current&&b.current.srcObject?(console.log("📸 DEBUG: Video element appears ready but cameraReady is false, forcing ready"),o(!0)):(console.log("📸 DEBUG: Attempting to re-initialize camera"),Mi())),h(G=>{try{return U<=0||G<=1?(console.log("📸 DEBUG: Countdown reached zero, clearing interval and taking photo"),clearInterval(O.current),!s&&b.current&&b.current.srcObject?(console.log("📸 DEBUG: Forcing camera ready before photo capture"),o(!0),setTimeout(()=>cr(),100)):cr(),null):U}catch(x){return console.error("❌ ERROR in countdown state update:",x),clearInterval(O.current),null}})}catch(B){console.error("❌ ERROR in countdown interval:",B),clearInterval(O.current)}},100),console.log("📸 DEBUG: Setting safety timeout for",I+500,"ms"),setTimeout(()=>{try{O.current&&(console.log("📸 DEBUG: Safety timeout triggered - clearing countdown"),clearInterval(O.current),h(null))}catch(B){console.error("❌ ERROR in safety timeout:",B)}},I+500)}catch(T){console.error("❌ ERROR in startCountdown:",T),i("Failed to start countdown timer.")}},Mi=async()=>{console.log("🎥 STARTING CAMERA INITIALIZATION");try{if(s){console.log("🎥 DEBUG: Camera is already ready, no need to initialize again");return}const v=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});if(console.log("🎥 CAMERA STREAM OBTAINED:",v?"success":"failed","tracks:",v.getTracks().length),b.current){b.current.srcObject=v,console.log("🎥 ASSIGNED STREAM TO VIDEO ELEMENT");const T=v.getVideoTracks();console.log("🎥 DEBUG: Video tracks:",T.length),T.forEach(I=>{console.log("🎥 DEBUG: Track details:",{kind:I.kind,id:I.id,enabled:I.enabled,readyState:I.readyState,muted:I.muted}),I.addEventListener("ended",()=>{console.log("🎥 DEBUG: Video track ended"),o(!1)})}),b.current.onloadedmetadata=()=>{console.log("🎥 VIDEO METADATA LOADED, SETTING CAMERA READY"),console.log("🎥 DEBUG: Video dimensions after metadata loaded:",{width:b.current.videoWidth,height:b.current.videoHeight}),o(!0)}}else console.error("🎥 VIDEO REF IS NULL"),v.getTracks().forEach(T=>T.stop())}catch(v){console.error("🎥 ERROR ACCESSING CAMERA:",v),i("Could not access camera. Please check permissions.")}},cr=async()=>{if(console.log("📸 DEBUG: takePhoto function called"),!s||c){if(console.log(`📸 DEBUG: Cannot take photo - cameraReady: ${s}, uploading: ${c}`),!s&&b.current&&b.current.srcObject){console.log("📸 DEBUG: Attempting to recover camera ready state...");const v=b.current.srcObject.getVideoTracks();if(console.log("📸 DEBUG: Video tracks status:",v.map(T=>({kind:T.kind,enabled:T.enabled,readyState:T.readyState}))),v.length>0&&v[0].readyState==="live"&&b.current.videoWidth>0){console.log("📸 DEBUG: Video appears ready but cameraReady state is false, forcing ready state"),o(!0),setTimeout(()=>{console.log("📸 DEBUG: Retrying takePhoto after recovery attempt"),M()},500);return}}console.log("📸 DEBUG: Cannot recover camera state, aborting photo capture");return}await M()},ur=(v,T)=>{console.log("🔍 DEBUG: Performing direct check of Firebase photos structure"),rt.ref(`sessions/${v}/photos`).once("value").then(I=>{const L=I.val();if(console.log("🔍 DEBUG: Direct Firebase check - Session photos data:",JSON.stringify(L)),!L)console.log("🔍 DEBUG: No photos found in this session");else{L[T]?console.log(`🔍 DEBUG: Found photo for user ${T}:`,JSON.stringify(L[T])):console.log(`🔍 DEBUG: No photo found for user ${T} in the session`);const B=Object.keys(L);console.log(`🔍 DEBUG: Participants with photos: ${B.length}`),console.log("🔍 DEBUG: Participant IDs with photos:",B)}}).catch(I=>{console.error("🔍 DEBUG: Error checking Firebase photos:",I)})},M=async()=>{console.log("📸 DEBUG: Starting actual photo capture implementation");try{console.log("📸 DEBUG: Starting photo capture process"),d(!0),i(null);const v=b.current,T=Z.current;if(!v||!T)throw new Error("Video or canvas reference is missing");if(v.videoWidth<=0||v.videoHeight<=0)throw console.error("📸 DEBUG: Video dimensions are invalid:",v.videoWidth,v.videoHeight),new Error("Video not ready for capture");console.log(`📸 DEBUG: Video dimensions: ${v.videoWidth}x${v.videoHeight}`),T.width=v.videoWidth,T.height=v.videoHeight,console.log("📸 DEBUG: Drawing video frame to canvas"),T.getContext("2d").drawImage(v,0,0),console.log("📸 DEBUG: Converting canvas to data URL");const L=T.toDataURL("image/jpeg",.8);console.log(`📸 DEBUG: Data URL generated, length: ${L.length} characters`);const B=K.auth().currentUser;if(!B)throw console.error("❌ ERROR: No authenticated user found when trying to save photo"),new Error("You must be signed in to take photos");const U=B.uid;console.log(`📸 DEBUG: Current user ID: ${U}`),console.log("📸 DEBUG: Saving photo to Firebase..."),console.log("📸 DEBUG: Session ID:",t),console.log("📸 DEBUG: Building reference path:",`sessions/${t}/photos/${U}`),await rt.ref(`sessions/${t}/photos/${U}`).set({dataUrl:L,timestamp:K.database.ServerValue.TIMESTAMP}),console.log("📸 DEBUG: Photo saved successfully to Firebase"),setTimeout(()=>{ur(t,U),console.log("📸 DEBUG: Attempting to call checkAndCreateCombinedPhoto."),Q(t)},1500)}catch(v){console.error("❌ ERROR in takePhoto:",v),i("Failed to take photo. Please try again.")}finally{d(!1),console.log("📸 DEBUG: Photo capture process completed")}},Q=v=>{if(console.log("🔄 DEBUG: checkAndCreateCombinedPhoto called"),console.log(`🔄 DEBUG: Current session ID for check: ${v}`),!v){console.log("🔄 DEBUG: No session ID provided, skipping combined photo check");return}if(!Z.current){console.error("🔄 ERROR: Canvas reference is not available for creating combined photo");return}console.log(`🔄 DEBUG: Canvas dimensions: ${Z.current.width}x${Z.current.height}`);const T=K.auth().currentUser;if(!T){console.error("🔄 ERROR: No authenticated user for combined photo check.");return}const I=T.uid,L=T.isAnonymous;console.log(`🔄 DEBUG: Current user: ID=${I}, isAnonymous=${L}`);const B=Date.now(),U=rt.ref(`sessions/${v}/participants`);console.log(`🔄 DEBUG: Fetching participants data from Firebase path: ${U.toString()}`),U.once("value").then(G=>{const x=G.val()||{},j=Object.keys(x);console.log(`🔄 DEBUG: Found ${j.length} participants in the session:`,j);const ee=j.map(te=>rt.ref(`sessions/${v}/participants/${te}`).once("value"));Promise.all(ee).then(te=>{const ae={};te.forEach(Fe=>{if(Fe.exists()){const Ie=Fe.key,Ce=Fe.val();ae[Ie]=Ce}}),console.log("🔄 DEBUG: Participant details:",JSON.stringify(ae));const ye=rt.ref(`sessions/${v}/photos`);console.log(`🔄 DEBUG: Checking photos at Firebase path: ${ye.toString()}`),ye.once("value").then(async Fe=>{console.log(`🔄 DEBUG: Successfully retrieved photos data from Firebase (${Date.now()-B}ms)`);const Ie=Fe.val()||{},Ce=Object.keys(Ie);console.log(`🔄 DEBUG: Found photos from ${Ce.length} participants:`,Ce),console.log("🔄 DEBUG: Photos data structure:",JSON.stringify(Object.keys(Ie).map(X=>({id:X,hasDataUrl:!!Ie[X].dataUrl,dataUrlLength:Ie[X].dataUrl?Ie[X].dataUrl.length:0,timestamp:Ie[X].timestamp}))));const q=Object.entries(Ie).every(([X,_t])=>_t&&_t.dataUrl);if(console.log(`🔄 DEBUG: All photos valid and contain dataUrl: ${q}`),!q){console.error("🔄 ERROR: Some photos are missing dataUrl property");return}if(Ce.length<2){console.log("🔄 DEBUG: Not enough photos to create a combined photo yet");return}console.log("🔄 DEBUG: Checking for existing combined photos with these participants");const ne=rt.ref(`sessions/${v}/combinedPhotos`);console.log(`🔄 DEBUG: Checking combined photos at Firebase path: ${ne.toString()}`);const Te={};for(const X of Ce)Te[X]={uid:X,isAnonymous:!0},ae[X]&&(ae[X].isAnonymous!==void 0?Te[X].isAnonymous=ae[X].isAnonymous:ae[X].displayName==="Guest"&&(Te[X].isAnonymous=!0)),X===I&&(Te[X].isAnonymous=L);console.log("🔄 DEBUG: Participant authentication state:",JSON.stringify(Te));const ke=Ce.filter(X=>Te[X]&&!Te[X].isAnonymous);console.log("🔄 DEBUG: Authenticated participants:",ke);let le=!1,Re="";if(ke.length>0)if(!L&&ke.includes(I))if(ke.length===1)le=!0,Re="Only authenticated user";else{const X=ke.sort()[0];le=I===X,Re=`Lowest authenticated UID (${X})`}else le=!1,Re="Guest user with authenticated participants present";else{const X=Ce.sort()[0];le=I===X,Re=`All guests, using lowest UID (${X})`}if(console.log(`🔄 DEBUG: Should create combined photo: ${le}, Reason: ${Re}`),!le){console.log("🔄 DEBUG: This device should NOT create the combined photo, skipping creation");return}ne.once("value").then(X=>{console.log(`🔄 DEBUG: Successfully retrieved combined photos data from Firebase (${Date.now()-B}ms)`);const _t=X.val()||{};if(console.log(`🔄 DEBUG: Found ${Object.keys(_t).length} existing combined photos`),Object.values(_t).some(nt=>{if(!nt.participantIds)return console.log("🔄 DEBUG: Found a combined photo without participantIds field"),!1;const wn=nt.participantIds.length===Ce.length,Yr=Ce.every(lu=>nt.participantIds.includes(lu));return wn&&Yr&&console.log("🔄 DEBUG: Found existing combined photo with same participants:",JSON.stringify({participantIds:nt.participantIds,timestamp:nt.timestamp})),wn&&Yr})){console.log("🔄 DEBUG: A combined photo with these participants already exists, skipping creation");return}console.log("🔄 DEBUG: No existing combined photo found with these participants, creating new one"),console.log("🔄 DEBUG: Creating combined photo from participant photos"),J(v,Ie,Ce,{mergedBy:I,mergerIsAnonymous:L}).then(nt=>{const wn=Date.now()-B;nt?(console.log(`🔄 DEBUG: Successfully created combined photo with ID: ${nt} (total time: ${wn}ms)`),f(`Combined photo saved by ${L?"guest":"authenticated"} user!`),setTimeout(()=>f(""),3e3)):console.log(`🔄 DEBUG: Failed to create combined photo (total time: ${wn}ms)`)}).catch(nt=>{console.error("🔄 ERROR in createCombinedPhoto promise:",nt)})}).catch(X=>{console.error("🔄 ERROR checking existing combined photos:",X)})}).catch(Fe=>{console.error("🔄 ERROR checking for photos:",Fe)})}).catch(te=>{console.error("🔄 ERROR fetching participant details:",te)})}).catch(G=>{console.error("🔄 ERROR fetching participants:",G)})},J=async(v,T,I,L)=>{var B,U;try{console.log("🔄 DEBUG: Starting combined photo creation"),console.log(`🔄 DEBUG: Creating combined photo for ${I.length} participants`),console.log("🔄 DEBUG: Participant IDs:",JSON.stringify(I)),console.log("🔄 DEBUG: Merger info:",JSON.stringify(L));const G=I.map(q=>{console.log(`🔄 DEBUG: Processing photo from participant ${q}`);const ne=T[q];return console.log("🔄 DEBUG: Photo data structure:",JSON.stringify({hasDataUrl:!!ne.dataUrl,dataUrlLength:ne.dataUrl?ne.dataUrl.length:0,timestamp:ne.timestamp})),ne.dataUrl||console.error(`🔄 ERROR: Missing dataUrl for photo from participant ${q}`),ne.dataUrl});console.log("🔄 DEBUG: Extracted data URLs for all participants");const x=Z.current;if(!x)throw new Error("Canvas reference is not available");console.log(`🔄 DEBUG: Canvas dimensions before setup: ${x.width}x${x.height}`);const j=x.getContext("2d");if(!j)throw new Error("Could not get canvas 2D context");console.log("🔄 DEBUG: Canvas 2D context obtained successfully"),console.log("🔄 DEBUG: Loading images from data URLs");const ee=G.map((q,ne)=>new Promise((Te,ke)=>{console.log(`🔄 DEBUG: Creating image object for URL ${ne+1}`);const le=new Image;le.crossOrigin="anonymous",le.onload=()=>{console.log(`🔄 DEBUG: Image ${ne+1} loaded successfully: ${le.width}x${le.height}`),Te(le)},le.onerror=Re=>{console.error(`🔄 ERROR: Failed to load image ${ne+1}:`,Re),ke(new Error(`Failed to load image ${ne+1}`))},console.log(`🔄 DEBUG: Setting source for image ${ne+1}`),le.src=q}));console.log(`🔄 DEBUG: Waiting for all ${ee.length} images to load`);const te=await Promise.all(ee);console.log(`🔄 DEBUG: All ${te.length} images loaded successfully`),te.forEach((q,ne)=>{console.log(`🔄 DEBUG: Image ${ne+1} dimensions: ${q.width}x${q.height}`)}),console.log("🔄 DEBUG: Using vertical stacking layout (first photo on top, second on bottom)");const ae=2160,ye=1920,Fe=ae/ye;console.log(`🔄 DEBUG: Using fixed dimensions: ${ae}x${ye} per image`),console.log(`🔄 DEBUG: Setting canvas dimensions to: ${ae}x${ye*2}`),console.log("🛠️ DEBUG: canvasRef.current:",Z.current),console.log("🛠️ DEBUG: canvas element id/class:",(B=Z.current)==null?void 0:B.id,(U=Z.current)==null?void 0:U.className),console.log("🛠️ DEBUG: pre-set dimensions:",x.width,x.height),x.width=ae,x.height=ye*2,console.log("🔄 DEBUG: Clearing canvas with black background"),j.fillStyle="#000",j.fillRect(0,0,x.width,x.height),te.forEach((q,ne)=>{const Te=q.width/q.height;let ke,le,Re,X;Te>Fe?(X=q.height,Re=q.height*Fe,ke=(q.width-Re)/2,le=0,console.log(`🔄 DEBUG: Image ${ne+1} is wider, cropping sides: sourceX=${ke}, sourceWidth=${Re}`)):(Re=q.width,X=q.width/Fe,ke=0,le=(q.height-X)/2,console.log(`🔄 DEBUG: Image ${ne+1} is taller, cropping top/bottom: sourceY=${le}, sourceHeight=${X}`));const _t=0,tt=ne*ye;console.log(`🔄 DEBUG: Drawing image ${ne+1}: source(${ke},${le},${Re},${X}) -> dest(${_t},${tt},${ae},${ye})`);try{j.drawImage(q,ke,le,Re,X,_t,tt,ae,ye),console.log(`🔄 DEBUG: Successfully drew image ${ne+1}`)}catch(qe){throw console.error(`🔄 ERROR: Failed to draw image ${ne+1}:`,qe),qe}}),console.log("🔄 DEBUG: Adding watermark");try{j.font="bold 48px Arial",j.fillStyle="rgba(255, 255, 255, 0.7)",j.textAlign="right",j.textBaseline="bottom",j.fillText("PixCrab",x.width-40,x.height-40),console.log("🔄 DEBUG: Successfully added watermark")}catch(q){console.error("🔄 ERROR: Failed to add watermark:",q)}console.log("🔄 DEBUG: Converting canvas to data URL");let Ie;try{Ie=x.toDataURL("image/jpeg",.95),console.log(`🔄 DEBUG: Combined photo created, data URL length: ${Ie.length}`)}catch(q){throw console.error("🔄 ERROR: Failed to convert canvas to data URL:",q),q}console.log("🔄 DEBUG: Generating thumbnail");let Ce="";try{const q=document.createElement("canvas"),ne=q.getContext("2d"),Te=270,ke=480;q.width=Te,q.height=ke;const le=new Image;await new Promise((lu,V0)=>{le.onload=lu,le.onerror=V0,le.src=Ie}),console.log(`🔄 DEBUG: Temporary image for thumbnail loaded: ${le.width}x${le.height}`);const Re=le.width,X=le.height,_t=Re/X,tt=Te/ke;let qe,nt,wn,Yr;_t>tt?(nt=ke,qe=nt*_t,wn=(Te-qe)/2,Yr=0):(qe=Te,nt=qe/_t,wn=0,Yr=(ke-nt)/2),console.log(`🔄 DEBUG: Drawing thumbnail with source dimensions: ${Re}x${X}, target: ${Te}x${ke}, draw dimensions: ${qe}x${nt} at ${wn},${Yr}`),ne.drawImage(le,wn,Yr,qe,nt),Ce=q.toDataURL("image/jpeg",.9),console.log(`🔄 DEBUG: Thumbnail created, data URL length: ${Ce.length}`)}catch(q){console.error("🔄 ERROR: Failed to generate thumbnail:",q)}console.log("🔄 DEBUG: Saving combined photo to Firebase");try{const q=K.database().ref().push().key;console.log(`🔄 DEBUG: Generated Firebase key: ${q}`);const ne=rt.ref(`sessions/${v}/combinedPhotos/${q}`);if(console.log(`🔄 DEBUG: Created Firebase reference at: sessions/${v}/combinedPhotos/${q}`),!Ie)throw new Error("Combined photo data URL is missing");console.log(`🔄 DEBUG: dataUrl length: ${Ie.length}, thumbnailDataUrl length: ${(Ce==null?void 0:Ce.length)||0}`);const Te={dataUrl:Ie,thumbnailDataUrl:Ce||null,timestamp:K.database.ServerValue.TIMESTAMP,participantIds:I,isCombined:!0,mergerInfo:L||null};if(await ne.set(Te),console.log(`🔄 DEBUG: Combined photo saved to Firebase Realtime Database with ID: ${q}`),L&&!L.mergerIsAnonymous){console.log(`🔄 DEBUG: Saving combined photo to Firebase Storage for authenticated user: ${L.mergedBy}`);try{const le=await(await fetch(Ie)).blob(),Re=`users/${L.mergedBy}/combined/${q}.jpg`;console.log(`🔄 DEBUG: Storage path: ${Re}`);const tt=await(await K.storage().ref(Re).put(le)).ref.getDownloadURL();console.log(`🔄 DEBUG: Upload successful, download URL: ${tt}`),await ne.update({storagePath:Re,downloadURL:tt}),console.log(`🔄 DEBUG: Database updated with storage info for combined photo: ${q}`),f(`Combined photo saved to cloud storage path: ${Re}`),setTimeout(()=>f(""),3e3)}catch(ke){console.error("🔄 ERROR: Failed to save to Firebase Storage:",ke)}}else console.log("🔄 DEBUG: Skipping Firebase Storage upload - user is anonymous or mergerInfo missing");return q}catch(q){throw console.error("🔄 ERROR: Failed to save combined photo to Firebase:",q),q}}catch(G){return console.error("🔄 ERROR creating combined photo:",G),null}},C=v=>{const T=v.dataUrl||v.downloadURL;return T?E.jsxs("div",{className:"photo-item",children:[E.jsx("img",{src:T,alt:"Captured"}),E.jsxs("p",{children:["Taken at: ",new Date(v.timestamp).toLocaleTimeString()]})]},v.id):E.jsx("div",{className:"photo-item error",children:E.jsx("p",{children:"Photo unavailable"})},v.id)},S=()=>{D(!k)},$=W.useCallback(()=>{if(m.length===0){i("No photos to save");return}try{const v=K.auth().currentUser;if(!v){pe.info("No user found, cannot save photos"),i("User not logged in");return}const T=v.isAnonymous;pe.info(`Saving combined photos to album. User: ${v.uid}, isAnonymous: ${T}`);const I={};I[v.uid]={isAnonymous:T,displayName:v.displayName||"Unknown",email:v.email||null},Object.entries(g).forEach(([x,j])=>{x!==v.uid&&(I[x]={isAnonymous:j.isAnonymous!==void 0?j.isAnonymous:!0,displayName:j.displayName||"Unknown"})}),pe.info(`Participant authentication status: ${JSON.stringify(I)}`);const L=localStorage.getItem("combinedSessions"),B=L?JSON.parse(L):[],U={id:t,timestamp:Date.now(),photos:m,participantsCount:Object.keys(g).length,savedByUser:v.uid,isAnonymous:T,participantAuthStatus:I,savePath:T?"localStorage":`users/${v.uid}/combined/`},G=[U,...B];localStorage.setItem("combinedSessions",JSON.stringify(G)),i(null),f(`Saved to ${T?"local":"cloud"} album!`),setTimeout(()=>f(""),2e3),pe.info(`Successfully saved ${m.length} photos to album at ${U.savePath}`)}catch(v){console.error("Error saving combined photos:",v),i("Failed to save photos to album")}},[m,t,g,i,f]);return W.useEffect(()=>{if(m.length>0){const v=K.auth().currentUser;if(!v){pe.info("Auto-save skipped - no authenticated user");return}const T=v.isAnonymous,I=[],L=[];Object.entries(g).forEach(([G,x])=>{x.isAnonymous===!1?I.push(G):L.push(G)}),pe.info(`Auto-save check: Auth users: ${I.length}, Guest users: ${L.length}`);let B=!1,U="";if(I.length>0)if(T)B=!1,U="Guest user with authenticated participants present";else if(I.length===1)B=!0,U="Only authenticated user in session";else{const G=I.sort()[0];B=v.uid===G,U=`Authenticated user with lowest UID (${G})`}else{const x=Object.keys(g).sort()[0];B=v.uid===x,U=`All guests, using lowest UID (${x})`}pe.info(`Auto-save decision: ${B?"YES":"NO"}, Reason: ${U}`),B?($(),pe.info("Combined photos automatically saved to album")):pe.info(`Auto-save skipped - ${U}`)}},[m,$,g]),W.useEffect(()=>{pe.info(`combinedPhotos state changed: ${m.length} photos`);const v=m.filter(I=>I.isCombined||I.participantIds).length,T=m.length-v;if(pe.info(`Photo breakdown - ${v} combined, ${T} individual`),m.length>0){const I=m[0];pe.info(`First photo: id=${I.id}, combined=${!!I.isCombined}`)}},[m]),E.jsxs("div",{className:"camera-screen",children:[E.jsxs("div",{className:`camera-container ${k?"hidden":""}`,children:[E.jsx("video",{ref:b,autoPlay:!0,playsInline:!0,muted:!0,className:"h-full w-auto object-cover mx-auto"}),E.jsx("canvas",{ref:Z,style:{display:"none"}}),u!==null&&E.jsx("div",{className:"countdown-overlay",children:E.jsx("div",{className:"countdown-number",children:u})})]}),k&&E.jsx("div",{className:"combined-gallery-container",children:E.jsx(ND,{photos:m,participantInfo:g})}),E.jsxs("div",{className:"camera-screen-content",children:[E.jsxs("div",{className:"header-area",children:[E.jsxs("div",{className:"participants-count",children:["Participants: ",w,"/2"]}),r&&E.jsx("div",{className:"error",children:r}),E.jsxs("div",{className:"session-header",children:[E.jsx("button",{className:"btn btn-primary rainbow-button",onClick:S,title:k?"Return to Camera":"View Combined Photos",children:k?"Camera":"Gallery"}),E.jsx("button",{className:"btn-icon exit-btn",onClick:gt,title:"Exit Session",children:E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[E.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),E.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),E.jsxs("button",{className:"session-id-btn",onClick:yn,title:"Copy Session ID",children:[t,E.jsxs("svg",{className:"copy-icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[E.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),E.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),p&&E.jsx("span",{className:"copy-status",children:p})]})]})]}),!k&&E.jsx("div",{className:"viewfinder-area"}),!k&&E.jsx("div",{className:"controls-area",children:E.jsx("div",{className:"shutter-button-container",children:s&&E.jsx("button",{className:`
                    btn-circle btn-circle-rainbow
                    w-16 h-16 bg-white shadow-lg
                    border-4 border-gray-200 z-50
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `,onClick:Mn,disabled:!s||c||u!==null||w<2,children:E.jsx("span",{className:"block w-8 h-8 bg-gray-200 rounded-full m-auto"})})})})]}),!k&&E.jsx("div",{className:"photos-grid",children:a.map(C)})]})},AD=({onCreateSession:t,onReturn:e})=>{const[n,r]=W.useState([]),[i,s]=W.useState([]);W.useEffect(()=>{const a=()=>{const c=localStorage.getItem("albumPhotos");c&&r(JSON.parse(c))},l=()=>{const c=localStorage.getItem("combinedSessions");c&&s(JSON.parse(c))};a(),l()},[]);const o=()=>{typeof t=="function"&&t()};return E.jsxs("div",{className:"album-screen",children:[E.jsxs("div",{className:"album-header",children:[E.jsx("h1",{children:"My Album"}),E.jsxs("div",{className:"album-actions",children:[E.jsx("button",{className:"btn btn-primary rainbow-button",onClick:o,children:"Create New Session"}),E.jsx("button",{className:"btn btn-secondary return-btn",onClick:e,children:"Return to Sessions"})]})]}),i.length>0&&E.jsxs("div",{className:"combined-sessions",children:[E.jsx("h2",{children:"Combined Photo Sessions"}),E.jsx("div",{className:"sessions-grid",children:i.map((a,l)=>E.jsxs("div",{className:"session-card",children:[E.jsxs("h3",{children:["Session: ",a.id.substring(0,8),"..."]}),E.jsx("div",{className:"session-photos-preview",children:a.photos.slice(0,4).map((c,d)=>E.jsx("div",{className:"preview-photo",children:E.jsx("img",{src:c.dataUrl,alt:`Session preview ${d}`})},d))}),E.jsx("p",{children:new Date(a.timestamp).toLocaleString()})]},l))})]}),n.length>0?E.jsxs("div",{className:"album-content",children:[E.jsx("h2",{children:"Individual Photos"}),E.jsx(z0.Gallery,{images:n.map(a=>({src:a.url,thumbnail:a.url,thumbnailWidth:a.width,thumbnailHeight:a.height,caption:new Date(a.timestamp).toLocaleString(),alt:`Photo taken at ${new Date(a.timestamp).toLocaleString()}`})),enableImageSelection:!1,rowHeight:180,margin:4})]}):E.jsx("div",{className:"empty-album",children:E.jsx("p",{children:"No photos yet. Start a new session to take some pictures!"})})]})},xD=W.createContext(null),OD=({children:t,value:e})=>E.jsx(xD.Provider,{value:e,children:t});function DD(){const[t,e]=W.useState("auth"),[n,r]=W.useState(null),[i,s]=W.useState(null),[o,a]=W.useState(!1),[l,c]=W.useState(null);W.useEffect(()=>{try{if(!K.apps.length){c("Firebase initialization failed. Please check your setup.");return}a(!0)}catch(A){console.error("Error initializing app:",A),c("Failed to initialize the application. Please try again later.")}},[]),W.useEffect(()=>{if(!o)return;const A=y_.onAuthStateChanged(m=>{r(m),e(m?"session":"auth")}),f=new URLSearchParams(window.location.search).get("sessionId");return f&&s(f),()=>A()},[o]);const d=A=>{s(A),e("camera")},u=A=>{s(A),e("camera")},h=()=>{s(null),e("session")},g=()=>{e("album")},_=()=>{e("session")},w=async()=>{try{await y_.signOut(),e("auth"),s(null)}catch(A){console.error("Error signing out:",A)}};return l?E.jsx("div",{className:"app-container",children:E.jsx("div",{className:"error",children:l})}):o?E.jsx(OD,{value:{user:n,sessionId:i},children:E.jsxs("div",{className:`app-container ${t==="camera"?"camera-mode":""}`,children:[t!=="camera"&&E.jsx("div",{className:"flex justify-center items-center w-full mb-4",children:E.jsx(RD,{})}),t==="auth"&&E.jsx(TD,{onCreateSession:d,onJoinSession:u,onSignOut:w}),t==="session"&&E.jsx(kD,{onCreateSession:d,onJoinSession:u,onSignOut:w,onViewAlbum:g,initialSessionId:i}),t==="camera"&&E.jsx(PD,{sessionId:i,onExitSession:h,onSignOut:w}),t==="album"&&E.jsx(AD,{onCreateSession:d,onReturn:_})]})}):E.jsx("div",{className:"app-container",children:E.jsx("div",{children:"Loading..."})})}id.createRoot(document.getElementById("root")).render(E.jsx(lS.StrictMode,{children:E.jsx(DD,{})}));
//# sourceMappingURL=main-66aa4970.js.map
