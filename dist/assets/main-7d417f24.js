(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E_={exports:{}},hc={},I_={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),J0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),sI=Symbol.for("react.lazy"),jp=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,T_={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||S_}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=Ts.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||S_}var Ah=bh.prototype=new k_;Ah.constructor=bh;C_(Ah,Ts.prototype);Ah.isPureReactComponent=!0;var $p=Array.isArray,R_=Object.prototype.hasOwnProperty,Dh={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,r)&&!P_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:oa,type:t,key:s,ref:o,props:i,_owner:Dh.current}}function aI(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case Y0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cu(o,0):r,$p(i)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),Za(i,e,n,"",function(c){return c})):i!=null&&(xh(i)&&(i=aI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$p(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cu(s,a);o+=Za(s,e,n,l,i)}else if(l=oI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cu(s,a++),o+=Za(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},el={transition:null},uI={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:el,ReactCurrentOwner:Dh};function b_(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Ts;Y.Fragment=J0;Y.Profiler=Z0;Y.PureComponent=bh;Y.StrictMode=X0;Y.Suspense=rI;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;Y.act=b_;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R_.call(e,l)&&!P_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:oa,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};Y.createElement=N_;Y.createFactory=function(t){var e=N_.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:nI,render:t}};Y.isValidElement=xh;Y.lazy=function(t){return{$$typeof:sI,_payload:{_status:-1,_result:t},_init:cI}};Y.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};Y.unstable_act=b_;Y.useCallback=function(t,e){return dt.current.useCallback(t,e)};Y.useContext=function(t){return dt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return dt.current.useEffect(t,e)};Y.useId=function(){return dt.current.useId()};Y.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return dt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};Y.useRef=function(t){return dt.current.useRef(t)};Y.useState=function(t){return dt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return dt.current.useTransition()};Y.version="18.3.1";I_.exports=Y;var x=I_.exports;const dI=Q0(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hI=x,fI=Symbol.for("react.element"),pI=Symbol.for("react.fragment"),mI=Object.prototype.hasOwnProperty,gI=hI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_I={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mI.call(e,r)&&!_I.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fI,type:t,key:s,ref:o,props:i,_owner:gI.current}}hc.Fragment=pI;hc.jsx=A_;hc.jsxs=A_;E_.exports=hc;var w=E_.exports,id={},D_={exports:{}},Lt={},x_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,B){var z=b.length;b.push(B);e:for(;0<z;){var se=z-1>>>1,re=b[se];if(0<i(re,B))b[se]=B,b[z]=re,z=se;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var B=b[0],z=b.pop();if(z!==B){b[0]=z;e:for(var se=0,re=b.length,Ai=re>>>1;se<Ai;){var R=2*(se+1)-1,O=b[R],D=R+1,G=b[D];if(0>i(O,z))D<re&&0>i(G,O)?(b[se]=G,b[D]=z,se=D):(b[se]=O,b[R]=z,se=R);else if(D<re&&0>i(G,z))b[se]=G,b[D]=z,se=D;else break e}}return B}function i(b,B){var z=b.sortIndex-B.sortIndex;return z!==0?z:b.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,g=!1,_=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=b)r(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function v(b){if(y=!1,m(b),!_)if(n(l)!==null)_=!0,Rn(E);else{var B=n(c);B!==null&&zr(v,B.startTime-b)}}function E(b,B){_=!1,y&&(y=!1,p(C),C=-1),g=!0;var z=h;try{for(m(B),u=n(l);u!==null&&(!(u.expirationTime>B)||b&&!Re());){var se=u.callback;if(typeof se=="function"){u.callback=null,h=u.priorityLevel;var re=se(u.expirationTime<=B);B=t.unstable_now(),typeof re=="function"?u.callback=re:u===n(l)&&r(l),m(B)}else r(l);u=n(l)}if(u!==null)var Ai=!0;else{var R=n(c);R!==null&&zr(v,R.startTime-B),Ai=!1}return Ai}finally{u=null,h=z,g=!1}}var N=!1,P=null,C=-1,W=5,j=-1;function Re(){return!(t.unstable_now()-j<W)}function Yt(){if(P!==null){var b=t.unstable_now();j=b;var B=!0;try{B=P(!0,b)}finally{B?kn():(N=!1,P=null)}}else N=!1}var kn;if(typeof f=="function")kn=function(){f(Yt)};else if(typeof MessageChannel<"u"){var Ni=new MessageChannel,bi=Ni.port2;Ni.port1.onmessage=Yt,kn=function(){bi.postMessage(null)}}else kn=function(){I(Yt,0)};function Rn(b){P=b,N||(N=!0,kn())}function zr(b,B){C=I(function(){b(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Rn(E))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var z=h;h=B;try{return b()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,B){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=h;h=b;try{return B()}finally{h=z}},t.unstable_scheduleCallback=function(b,B,z){var se=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?se+z:se):z=se,b){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,b={id:d++,callback:B,priorityLevel:b,startTime:z,expirationTime:re,sortIndex:-1},z>se?(b.sortIndex=z,e(c,b),n(l)===null&&b===n(c)&&(y?(p(C),C=-1):y=!0,zr(v,z-se))):(b.sortIndex=re,e(l,b),_||g||(_=!0,Rn(E))),b},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(b){var B=h;return function(){var z=h;h=B;try{return b.apply(this,arguments)}finally{h=z}}}})(O_);x_.exports=O_;var vI=x_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=x,At=vI;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L_=new Set,Co={};function Ei(t,e){ds(t,e),ds(t+"Capture",e)}function ds(t,e){for(Co[t]=e,t=0;t<e.length;t++)L_.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,wI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},Vp={};function EI(t){return sd.call(Vp,t)?!0:sd.call(Wp,t)?!1:wI.test(t)?Vp[t]=!0:(Wp[t]=!0,!1)}function II(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SI(t,e,n,r){if(e===null||typeof e>"u"||II(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oh,Lh);Je[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oh,Lh);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oh,Lh);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SI(e,n,i,r)&&(n=null),r||i===null?EI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),F_=Symbol.for("react.offscreen"),Gp=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,uu;function eo(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var du=!1;function hu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function CI(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ji:return"Fragment";case Bi:return"Portal";case od:return"Profiler";case Mh:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case U_:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:cd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return cd(t(e))}catch{}}return null}function TI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kI(t){var e=B_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=kI(t))}function j_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ud(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $_(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function dd(t,e){$_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(to(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function z_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RI=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){RI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function G_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function H_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=G_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(PI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,Zi=null,es=null;function Yp(t){if(t=ca(t)){if(typeof vd!="function")throw Error(S(280));var e=t.stateNode;e&&(e=_c(e),vd(t.stateNode,t.type,e))}}function q_(t){Zi?es?es.push(t):es=[t]:Zi=t}function K_(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Yp(t),e)for(t=0;t<e.length;t++)Yp(e[t])}}function Q_(t,e){return t(e)}function Y_(){}var fu=!1;function J_(t,e,n){if(fu)return t(e,n);fu=!0;try{return Q_(t,e,n)}finally{fu=!1,(Zi!==null||es!==null)&&(Y_(),K_())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var yd=!1;if(Wn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){yd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{yd=!1}function NI(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,_l=null,vl=!1,wd=null,bI={onError:function(t){ao=!0,_l=t}};function AI(t,e,n,r,i,s,o,a,l){ao=!1,_l=null,NI.apply(bI,arguments)}function DI(t,e,n,r,i,s,o,a,l){if(AI.apply(this,arguments),ao){if(ao){var c=_l;ao=!1,_l=null}else throw Error(S(198));vl||(vl=!0,wd=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(Ii(t)!==t)throw Error(S(188))}function xI(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jp(i),t;if(s===r)return Jp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Z_(t){return t=xI(t),t!==null?ev(t):null}function ev(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ev(t);if(e!==null)return e;t=t.sibling}return null}var tv=At.unstable_scheduleCallback,Xp=At.unstable_cancelCallback,OI=At.unstable_shouldYield,LI=At.unstable_requestPaint,Pe=At.unstable_now,UI=At.unstable_getCurrentPriorityLevel,$h=At.unstable_ImmediatePriority,nv=At.unstable_UserBlockingPriority,yl=At.unstable_NormalPriority,MI=At.unstable_LowPriority,rv=At.unstable_IdlePriority,fc=null,yn=null;function FI(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:$I,BI=Math.log,jI=Math.LN2;function $I(t){return t>>>=0,t===0?32:31-(BI(t)/jI|0)|0}var Oa=64,La=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=no(a):(s&=o,s!==0&&(r=no(s)))}else o=n&~i,o!==0?r=no(o):s!==0&&(r=no(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function zI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iv(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function VI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ov,Wh,av,lv,cv,Id=!1,Ua=[],pr=null,mr=null,gr=null,Ro=new Map,Po=new Map,or=[],GI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&Wh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HI(t,e,n,r,i){switch(e){case"focusin":return pr=js(pr,t,e,n,r,i),!0;case"dragenter":return mr=js(mr,t,e,n,r,i),!0;case"mouseover":return gr=js(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,js(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,js(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=Kr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=X_(n),e!==null){t.blockedOn=e,cv(t.priority,function(){av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_d=r,n.target.dispatchEvent(r),_d=null}else return e=ca(n),e!==null&&Wh(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){tl(t)&&n.delete(e)}function qI(){Id=!1,pr!==null&&tl(pr)&&(pr=null),mr!==null&&tl(mr)&&(mr=null),gr!==null&&tl(gr)&&(gr=null),Ro.forEach(em),Po.forEach(em)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,qI)))}function No(t){function e(i){return $s(i,t)}if(0<Ua.length){$s(Ua[0],t);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&$s(pr,t),mr!==null&&$s(mr,t),gr!==null&&$s(gr,t),Ro.forEach(e),Po.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&or.shift()}var ts=Yn.ReactCurrentBatchConfig,El=!0;function KI(t,e,n,r){var i=ne,s=ts.transition;ts.transition=null;try{ne=1,Vh(t,e,n,r)}finally{ne=i,ts.transition=s}}function QI(t,e,n,r){var i=ne,s=ts.transition;ts.transition=null;try{ne=4,Vh(t,e,n,r)}finally{ne=i,ts.transition=s}}function Vh(t,e,n,r){if(El){var i=Sd(t,e,n,r);if(i===null)Cu(t,e,r,Il,n),Zp(t,r);else if(HI(i,t,e,n,r))r.stopPropagation();else if(Zp(t,r),e&4&&-1<GI.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&ov(s),s=Sd(t,e,n,r),s===null&&Cu(t,e,r,Il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cu(t,e,r,null,n)}}var Il=null;function Sd(t,e,n,r){if(Il=null,t=jh(r),t=Kr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UI()){case $h:return 1;case nv:return 4;case yl:case MI:return 16;case rv:return 536870912;default:return 16}default:return 16}}var lr=null,Gh=null,nl=null;function hv(){if(nl)return nl;var t,e=Gh,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function tm(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:tm,this.isPropagationStopped=tm,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Ut(ks),la=Se({},ks,{view:0,detail:0}),YI=Ut(la),mu,gu,zs,pc=Se({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(mu=t.screenX-zs.screenX,gu=t.screenY-zs.screenY):gu=mu=0,zs=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),nm=Ut(pc),JI=Se({},pc,{dataTransfer:0}),XI=Ut(JI),ZI=Se({},la,{relatedTarget:0}),_u=Ut(ZI),eS=Se({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Ut(eS),nS=Se({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Ut(nS),iS=Se({},ks,{data:0}),rm=Ut(iS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function qh(){return lS}var cS=Se({},la,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=Ut(cS),dS=Se({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Ut(dS),hS=Se({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),fS=Ut(hS),pS=Se({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Ut(pS),gS=Se({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Ut(gS),vS=[9,13,27,32],Kh=Wn&&"CompositionEvent"in window,lo=null;Wn&&"documentMode"in document&&(lo=document.documentMode);var yS=Wn&&"TextEvent"in window&&!lo,fv=Wn&&(!Kh||lo&&8<lo&&11>=lo),sm=String.fromCharCode(32),om=!1;function pv(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function wS(t,e){switch(t){case"compositionend":return mv(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function ES(t,e){if($i)return t==="compositionend"||!Kh&&pv(t,e)?(t=hv(),nl=Gh=lr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fv&&e.locale!=="ko"?null:e.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IS[t.type]:e==="textarea"}function gv(t,e,n,r){q_(r),e=Sl(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,bo=null;function SS(t){Rv(t,0)}function mc(t){var e=Vi(t);if(j_(e))return t}function CS(t,e){if(t==="change")return e}var _v=!1;if(Wn){var vu;if(Wn){var yu="oninput"in document;if(!yu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),yu=typeof lm.oninput=="function"}vu=yu}else vu=!1;_v=vu&&(!document.documentMode||9<document.documentMode)}function cm(){co&&(co.detachEvent("onpropertychange",vv),bo=co=null)}function vv(t){if(t.propertyName==="value"&&mc(bo)){var e=[];gv(e,bo,t,jh(t)),J_(SS,e)}}function TS(t,e,n){t==="focusin"?(cm(),co=e,bo=n,co.attachEvent("onpropertychange",vv)):t==="focusout"&&cm()}function kS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(bo)}function RS(t,e){if(t==="click")return mc(e)}function PS(t,e){if(t==="input"||t==="change")return mc(e)}function NS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:NS;function Ao(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sd.call(e,i)||!an(t[i],e[i]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bS(t){var e=wv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(r!==null&&Qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dm(n,s);var o=dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AS=Wn&&"documentMode"in document&&11>=document.documentMode,zi=null,Cd=null,uo=null,Td=!1;function hm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||zi==null||zi!==gl(r)||(r=zi,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Ao(uo,r)||(uo=r,r=Sl(Cd,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},wu={},Ev={};Wn&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function gc(t){if(wu[t])return wu[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return wu[t]=e[n];return t}var Iv=gc("animationend"),Sv=gc("animationiteration"),Cv=gc("animationstart"),Tv=gc("transitionend"),kv=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){kv.set(t,e),Ei(e,[t])}for(var Eu=0;Eu<fm.length;Eu++){var Iu=fm[Eu],DS=Iu.toLowerCase(),xS=Iu[0].toUpperCase()+Iu.slice(1);Ur(DS,"on"+xS)}Ur(Iv,"onAnimationEnd");Ur(Sv,"onAnimationIteration");Ur(Cv,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Tv,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function pm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DI(r,e,void 0,t),t.currentTarget=null}function Rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pm(i,a,c),s=l}}}if(vl)throw t=wd,vl=!1,wd=null,t}function pe(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var r=t+"__bubble";n.has(r)||(Pv(e,t,2,!1),n.add(r))}function Su(t,e,n){var r=0;e&&(r|=4),Pv(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[Ba]){t[Ba]=!0,L_.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,Su("selectionchange",!1,e))}}function Pv(t,e,n,r){switch(dv(e)){case 1:var i=KI;break;case 4:i=QI;break;default:i=Vh}n=i.bind(null,e,n,t),i=void 0,!yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}J_(function(){var c=s,d=jh(n),u=[];e:{var h=kv.get(t);if(h!==void 0){var g=Hh,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":g=uS;break;case"focusin":_="focus",g=_u;break;case"focusout":_="blur",g=_u;break;case"beforeblur":case"afterblur":g=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=XI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fS;break;case Iv:case Sv:case Cv:g=tS;break;case Tv:g=mS;break;case"scroll":g=YI;break;case"wheel":g=_S;break;case"copy":case"cut":case"paste":g=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=im}var y=(e&4)!==0,I=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=c,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=ko(f,p),v!=null&&y.push(xo(f,v,m)))),I)break;f=f.return}0<y.length&&(h=new g(h,_,null,n,d),u.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==_d&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[Vn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Kr(_):null,_!==null&&(I=Ii(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=nm,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=im,v="onPointerLeave",p="onPointerEnter",f="pointer"),I=g==null?h:Vi(g),m=_==null?h:Vi(_),h=new y(v,f+"leave",g,n,d),h.target=I,h.relatedTarget=m,v=null,Kr(d)===c&&(y=new y(p,f+"enter",_,n,d),y.target=m,y.relatedTarget=I,v=y),I=v,g&&_)t:{for(y=g,p=_,f=0,m=y;m;m=Oi(m))f++;for(m=0,v=p;v;v=Oi(v))m++;for(;0<f-m;)y=Oi(y),f--;for(;0<m-f;)p=Oi(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Oi(y),p=Oi(p)}y=null}else y=null;g!==null&&mm(u,h,g,y,!1),_!==null&&I!==null&&mm(u,I,_,y,!0)}}e:{if(h=c?Vi(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=CS;else if(am(h))if(_v)E=PS;else{E=kS;var N=TS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=RS);if(E&&(E=E(t,c))){gv(u,E,n,d);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&hd(h,"number",h.value)}switch(N=c?Vi(c):window,t){case"focusin":(am(N)||N.contentEditable==="true")&&(zi=N,Cd=c,uo=null);break;case"focusout":uo=Cd=zi=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,hm(u,n,d);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":hm(u,n,d)}var P;if(Kh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else $i?pv(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(fv&&n.locale!=="ko"&&($i||C!=="onCompositionStart"?C==="onCompositionEnd"&&$i&&(P=hv()):(lr=d,Gh="value"in lr?lr.value:lr.textContent,$i=!0)),N=Sl(c,C),0<N.length&&(C=new rm(C,t,null,n,d),u.push({event:C,listeners:N}),P?C.data=P:(P=mv(n),P!==null&&(C.data=P)))),(P=yS?wS(t,n):ES(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(d=new rm("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=P))}Rv(u,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(xo(t,s,i)),s=ko(t,e),s!=null&&r.push(xo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ko(n,s),l!=null&&o.unshift(xo(n,l,a))):i||(l=ko(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LS=/\r\n?/g,US=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(US,"")}function ja(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(S(425))}function Cl(){}var kd=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(BS)}:Nd;function BS(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),hn="__reactFiber$"+Rs,Oo="__reactProps$"+Rs,Vn="__reactContainer$"+Rs,bd="__reactEvents$"+Rs,jS="__reactListeners$"+Rs,$S="__reactHandles$"+Rs;function Kr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[hn])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[hn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function _c(t){return t[Oo]||null}var Ad=[],Gi=-1;function Mr(t){return{current:t}}function me(t){0>Gi||(t.current=Ad[Gi],Ad[Gi]=null,Gi--)}function ue(t,e){Gi++,Ad[Gi]=t.current,t.current=e}var Rr={},it=Mr(Rr),wt=Mr(!1),ai=Rr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Tl(){me(wt),me(it)}function ym(t,e,n){if(it.current!==Rr)throw Error(S(168));ue(it,e),ue(wt,n)}function Nv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,TI(t)||"Unknown",i));return Se({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ai=it.current,ue(it,t),ue(wt,wt.current),!0}function wm(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Nv(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,me(wt),me(it),ue(it,t)):me(wt),ue(wt,n)}var An=null,vc=!1,ku=!1;function bv(t){An===null?An=[t]:An.push(t)}function zS(t){vc=!0,bv(t)}function Fr(){if(!ku&&An!==null){ku=!0;var t=0,e=ne;try{var n=An;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,vc=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),tv($h,Fr),i}finally{ne=e,ku=!1}}return null}var Hi=[],qi=0,Rl=null,Pl=0,Mt=[],Ft=0,li=null,xn=1,On="";function Vr(t,e){Hi[qi++]=Pl,Hi[qi++]=Rl,Rl=t,Pl=e}function Av(t,e,n){Mt[Ft++]=xn,Mt[Ft++]=On,Mt[Ft++]=li,li=t;var r=xn;t=On;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-rn(e)+i|n<<i|r,On=s+t}else xn=1<<s|n<<i|r,On=t}function Yh(t){t.return!==null&&(Vr(t,1),Av(t,1,0))}function Jh(t){for(;t===Rl;)Rl=Hi[--qi],Hi[qi]=null,Pl=Hi[--qi],Hi[qi]=null;for(;t===li;)li=Mt[--Ft],Mt[Ft]=null,On=Mt[--Ft],Mt[Ft]=null,xn=Mt[--Ft],Mt[Ft]=null}var bt=null,Pt=null,ve=!1,tn=null;function Dv(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Pt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:xn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Pt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(ve){var e=Pt;if(e){var n=e;if(!Em(t,e)){if(Dd(t))throw Error(S(418));e=_r(n.nextSibling);var r=bt;e&&Em(t,e)?Dv(r,n):(t.flags=t.flags&-4097|2,ve=!1,bt=t)}}else{if(Dd(t))throw Error(S(418));t.flags=t.flags&-4097|2,ve=!1,bt=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function $a(t){if(t!==bt)return!1;if(!ve)return Im(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Pt)){if(Dd(t))throw xv(),Error(S(418));for(;e;)Dv(t,e),e=_r(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=bt?_r(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Pt;t;)t=_r(t.nextSibling)}function fs(){Pt=bt=null,ve=!1}function Xh(t){tn===null?tn=[t]:tn.push(t)}var WS=Yn.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sm(t){var e=t._init;return e(t._payload)}function Ov(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Er(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,v){return f===null||f.tag!==6?(f=xu(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,v){var E=m.type;return E===ji?d(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&Sm(E)===f.type)?(v=i(f,m.props),v.ref=Ws(p,f,m),v.return=p,v):(v=ul(m.type,m.key,m.props,null,p.mode,v),v.ref=Ws(p,f,m),v.return=p,v)}function c(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ou(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,v,E){return f===null||f.tag!==7?(f=ti(m,p.mode,v,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=xu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Aa:return m=ul(f.type,f.key,f.props,null,p.mode,m),m.ref=Ws(p,null,f),m.return=p,m;case Bi:return f=Ou(f,p.mode,m),f.return=p,f;case ir:var v=f._init;return u(p,v(f._payload),m)}if(to(f)||Fs(f))return f=ti(f,p.mode,m,null),f.return=p,f;za(p,f)}return null}function h(p,f,m,v){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return m.key===E?l(p,f,m,v):null;case Bi:return m.key===E?c(p,f,m,v):null;case ir:return E=m._init,h(p,f,E(m._payload),v)}if(to(m)||Fs(m))return E!==null?null:d(p,f,m,v,null);za(p,m)}return null}function g(p,f,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(f,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return p=p.get(v.key===null?m:v.key)||null,l(f,p,v,E);case Bi:return p=p.get(v.key===null?m:v.key)||null,c(f,p,v,E);case ir:var N=v._init;return g(p,f,m,N(v._payload),E)}if(to(v)||Fs(v))return p=p.get(m)||null,d(f,p,v,E,null);za(f,v)}return null}function _(p,f,m,v){for(var E=null,N=null,P=f,C=f=0,W=null;P!==null&&C<m.length;C++){P.index>C?(W=P,P=null):W=P.sibling;var j=h(p,P,m[C],v);if(j===null){P===null&&(P=W);break}t&&P&&j.alternate===null&&e(p,P),f=s(j,f,C),N===null?E=j:N.sibling=j,N=j,P=W}if(C===m.length)return n(p,P),ve&&Vr(p,C),E;if(P===null){for(;C<m.length;C++)P=u(p,m[C],v),P!==null&&(f=s(P,f,C),N===null?E=P:N.sibling=P,N=P);return ve&&Vr(p,C),E}for(P=r(p,P);C<m.length;C++)W=g(P,p,C,m[C],v),W!==null&&(t&&W.alternate!==null&&P.delete(W.key===null?C:W.key),f=s(W,f,C),N===null?E=W:N.sibling=W,N=W);return t&&P.forEach(function(Re){return e(p,Re)}),ve&&Vr(p,C),E}function y(p,f,m,v){var E=Fs(m);if(typeof E!="function")throw Error(S(150));if(m=E.call(m),m==null)throw Error(S(151));for(var N=E=null,P=f,C=f=0,W=null,j=m.next();P!==null&&!j.done;C++,j=m.next()){P.index>C?(W=P,P=null):W=P.sibling;var Re=h(p,P,j.value,v);if(Re===null){P===null&&(P=W);break}t&&P&&Re.alternate===null&&e(p,P),f=s(Re,f,C),N===null?E=Re:N.sibling=Re,N=Re,P=W}if(j.done)return n(p,P),ve&&Vr(p,C),E;if(P===null){for(;!j.done;C++,j=m.next())j=u(p,j.value,v),j!==null&&(f=s(j,f,C),N===null?E=j:N.sibling=j,N=j);return ve&&Vr(p,C),E}for(P=r(p,P);!j.done;C++,j=m.next())j=g(P,p,C,j.value,v),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?C:j.key),f=s(j,f,C),N===null?E=j:N.sibling=j,N=j);return t&&P.forEach(function(Yt){return e(p,Yt)}),ve&&Vr(p,C),E}function I(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===ji&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:e:{for(var E=m.key,N=f;N!==null;){if(N.key===E){if(E=m.type,E===ji){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&Sm(E)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=Ws(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===ji?(f=ti(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=ul(m.type,m.key,m.props,null,p.mode,v),v.ref=Ws(p,f,m),v.return=p,p=v)}return o(p);case Bi:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ou(m,p.mode,v),f.return=p,p=f}return o(p);case ir:return N=m._init,I(p,f,N(m._payload),v)}if(to(m))return _(p,f,m,v);if(Fs(m))return y(p,f,m,v);za(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=xu(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return I}var ps=Ov(!0),Lv=Ov(!1),Nl=Mr(null),bl=null,Ki=null,Zh=null;function ef(){Zh=Ki=bl=null}function tf(t){var e=Nl.current;me(Nl),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){bl=t,Zh=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(bl===null)throw Error(S(308));Ki=t,bl.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var Qr=null;function nf(t){Qr===null?Qr=[t]:Qr.push(t)}function Uv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,nf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}function Cm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){u=_.call(g,u,h);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,u,h):_,h==null)break e;u=Se({},u,h);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ui|=o,t.lanes=o,t.memoizedState=u}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ua={},wn=Mr(ua),Lo=Mr(ua),Uo=Mr(ua);function Yr(t){if(t===ua)throw Error(S(174));return t}function sf(t,e){switch(ue(Uo,e),ue(Lo,t),ue(wn,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}me(wn),ue(wn,e)}function ms(){me(wn),me(Lo),me(Uo)}function Fv(t){Yr(Uo.current);var e=Yr(wn.current),n=pd(e,t.type);e!==n&&(ue(Lo,t),ue(wn,n))}function of(t){Lo.current===t&&(me(wn),me(Lo))}var we=Mr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function af(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var sl=Yn.ReactCurrentDispatcher,Pu=Yn.ReactCurrentBatchConfig,ci=0,Ie=null,Le=null,je=null,xl=!1,ho=!1,Mo=0,VS=0;function Ze(){throw Error(S(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(ci=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?KS:QS,t=n(r,i),ho){s=0;do{if(ho=!1,Mo=0,25<=s)throw Error(S(301));s+=1,je=Le=null,e.updateQueue=null,sl.current=YS,t=n(r,i)}while(ho)}if(sl.current=Ol,e=Le!==null&&Le.next!==null,ci=0,je=Le=Ie=null,xl=!1,e)throw Error(S(300));return t}function uf(){var t=Mo!==0;return Mo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ie.memoizedState=je=t:je=je.next=t,je}function qt(){if(Le===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=je===null?Ie.memoizedState:je.next;if(e!==null)je=e,Le=t;else{if(t===null)throw Error(S(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?Ie.memoizedState=je=t:je=je.next=t}return je}function Fo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=qt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ci&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,Ie.lanes|=d,ui|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,an(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=qt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Bv(){}function jv(t,e){var n=Ie,r=qt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,df(Wv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Bo(9,zv.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(S(349));ci&30||$v(n,e,i)}return i}function $v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zv(t,e,n,r){e.value=n,e.getSnapshot=r,Vv(e)&&Gv(t)}function Wv(t,e,n){return n(function(){Vv(e)&&Gv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function Gv(t){var e=Gn(t,1);e!==null&&sn(e,t,1,-1)}function km(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=qS.bind(null,Ie,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hv(){return qt().memoizedState}function ol(t,e,n,r){var i=dn();Ie.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function yc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&lf(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function Rm(t,e){return ol(8390656,8,t,e)}function df(t,e){return yc(2048,8,t,e)}function qv(t,e){return yc(4,2,t,e)}function Kv(t,e){return yc(4,4,t,e)}function Qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yv(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,Qv.bind(null,e,t),n)}function hf(){}function Jv(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xv(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zv(t,e,n){return ci&21?(an(n,e)||(n=iv(),Ie.lanes|=n,ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function GS(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Pu.transition;Pu.transition={};try{t(!1),e()}finally{ne=n,Pu.transition=r}}function ey(){return qt().memoizedState}function HS(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ty(t))ny(e,n);else if(n=Uv(t,e,n,r),n!==null){var i=ct();sn(n,t,r,i),ry(n,e,r)}}function qS(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ty(t))ny(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,an(a,o)){var l=e.interleaved;l===null?(i.next=i,nf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Uv(t,e,i,r),n!==null&&(i=ct(),sn(n,t,r,i),ry(n,e,r))}}function ty(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function ny(t,e){ho=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ry(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}var Ol={readContext:Ht,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},KS={readContext:Ht,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:hf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=GS.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=dn();if(ve){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ve===null)throw Error(S(349));ci&30||$v(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rm(Wv.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ve.identifierPrefix;if(ve){var n=On,r=xn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:Ht,useCallback:Jv,useContext:Ht,useEffect:df,useImperativeHandle:Yv,useInsertionEffect:qv,useLayoutEffect:Kv,useMemo:Xv,useReducer:Nu,useRef:Hv,useState:function(){return Nu(Fo)},useDebugValue:hf,useDeferredValue:function(t){var e=qt();return Zv(e,Le.memoizedState,t)},useTransition:function(){var t=Nu(Fo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Bv,useSyncExternalStore:jv,useId:ey,unstable_isNewReconciler:!1},YS={readContext:Ht,useCallback:Jv,useContext:Ht,useEffect:df,useImperativeHandle:Yv,useInsertionEffect:qv,useLayoutEffect:Kv,useMemo:Xv,useReducer:bu,useRef:Hv,useState:function(){return bu(Fo)},useDebugValue:hf,useDeferredValue:function(t){var e=qt();return Le===null?e.memoizedState=t:Zv(e,Le.memoizedState,t)},useTransition:function(){var t=bu(Fo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Bv,useSyncExternalStore:jv,useId:ey,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=wr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(sn(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=wr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(sn(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=wr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(sn(e,t,r,n),il(e,t,r))}};function Pm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function iy(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Et(e)?ai:it.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Et(e)?ai:it.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wc.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",r=e;do n+=CI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function sy(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,qd=r),Md(t,e)},n}function oy(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dC.bind(null,t,e,n),e.then(t,t))}function Am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var XS=Yn.ReactCurrentOwner,vt=!1;function ot(t,e,n,r){e.child=t===null?Lv(e,null,n,r):ps(e,t.child,n,r)}function xm(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=cf(t,e,n,r,s,i),n=uf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ve&&n&&Yh(e),e.flags|=1,ot(t,e,r,i),e.child)}function Om(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ay(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function ay(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Fd(t,e,n,r,i)}function ly(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Yi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Yi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Yi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Yi,kt),kt|=r;return ot(t,e,i,n),e.child}function cy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fd(t,e,n,r,i){var s=Et(n)?ai:it.current;return s=hs(e,s),ns(e,i),n=cf(t,e,n,r,s,i),r=uf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ve&&r&&Yh(e),e.flags|=1,ot(t,e,n,i),e.child)}function Lm(t,e,n,r,i){if(Et(n)){var s=!0;kl(e)}else s=!1;if(ns(e,i),e.stateNode===null)al(t,e),iy(e,n,r),Ud(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Et(n)?ai:it.current,c=hs(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Nm(e,o,r,c),sr=!1;var h=e.memoizedState;o.state=h,Al(e,r,o,i),l=e.memoizedState,a!==r||h!==l||wt.current||sr?(typeof d=="function"&&(Ld(e,n,d,r),l=e.memoizedState),(a=sr||Pm(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zt(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=Et(n)?ai:it.current,l=hs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&Nm(e,o,r,l),sr=!1,h=e.memoizedState,o.state=h,Al(e,r,o,i);var _=e.memoizedState;a!==u||h!==_||wt.current||sr?(typeof g=="function"&&(Ld(e,n,g,r),_=e.memoizedState),(c=sr||Pm(e,n,c,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Bd(t,e,n,r,s,i)}function Bd(t,e,n,r,i,s){cy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wm(e,n,!1),Hn(t,e,s);r=e.stateNode,XS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&wm(e,n,!0),e.child}function uy(t){var e=t.stateNode;e.pendingContext?ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ym(t,e.context,!1),sf(t,e.containerInfo)}function Um(t,e,n,r,i){return fs(),Xh(i),e.flags|=256,ot(t,e,n,r),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function dy(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(we,i&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=jd,t):ff(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ff(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&Xh(r),ps(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Au(Error(S(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sc({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=jd,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Au(s,r,void 0),Wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),sn(r,t,i,-1))}return yf(),r=Au(Error(S(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=_r(i.nextSibling),bt=e,ve=!0,tn=null,t!==null&&(Mt[Ft++]=xn,Mt[Ft++]=On,Mt[Ft++]=li,xn=t.id,On=t.overflow,li=e),e=ff(e,r.children),e.flags|=4096,e)}function Mm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Od(t.return,e,n)}function Du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,n,e);else if(t.tag===19)Mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eC(t,e,n){switch(e.tag){case 3:uy(e),fs();break;case 5:Fv(e);break;case 1:Et(e.type)&&kl(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?dy(t,e,n):(ue(we,we.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);ue(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,ly(t,e,n)}return Hn(t,e,n)}var fy,zd,py,my;fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};py=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(wn.current);var s=null;switch(n){case"input":i=ud(t,i),r=ud(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=fd(t,i),r=fd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}md(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};my=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tC(t,e,n){var r=e.pendingProps;switch(Jh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Et(e.type)&&Tl(),et(e),null;case 3:return r=e.stateNode,ms(),me(wt),me(it),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Yd(tn),tn=null))),zd(t,e),et(e),null;case 5:of(e);var i=Yr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)py(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return et(e),null}if(t=Yr(wn.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)pe(ro[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Hp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Kp(r,s),pe("invalid",r)}md(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,a,t),i=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Da(r),qp(r,s,!0);break;case"textarea":Da(r),Qp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Oo]=r,fy(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)pe(ro[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Hp(t,r),i=ud(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Kp(t,r),i=fd(t,r),pe("invalid",t);break;default:i=r}md(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":Da(t),qp(t,r,!1);break;case"textarea":Da(t),Qp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)my(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Yr(Uo.current),Yr(wn.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return et(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Pt!==null&&e.mode&1&&!(e.flags&128))xv(),fs(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[hn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else tn!==null&&(Yd(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):yf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ms(),zd(t,e),t===null&&Do(e.stateNode.containerInfo),et(e),null;case 10:return tf(e.type._context),et(e),null;case 17:return Et(e.type)&&Tl(),et(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>_s&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*Pe()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,ue(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function nC(t,e){switch(Jh(e),e.tag){case 1:return Et(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),me(wt),me(it),af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return of(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return ms(),null;case 10:return tf(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Va=!1,tt=!1,rC=typeof WeakSet=="function"?WeakSet:Set,A=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Wd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Fm=!1;function iC(t,e){if(kd=El,t=wv(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},El=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,I=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zt(e.type,y),I);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){ke(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return _=Fm,Fm=!1,_}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wd(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gy(t){var e=t.alternate;e!==null&&(t.alternate=null,gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Oo],delete e[bd],delete e[jS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _y(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var Ke=null,en=!1;function nr(t,e,n){for(n=n.child;n!==null;)vy(t,e,n),n=n.sibling}function vy(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:tt||Qi(n,e);case 6:var r=Ke,i=en;Ke=null,nr(t,e,n),Ke=r,en=i,Ke!==null&&(en?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(en?(t=Ke,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),No(t)):Tu(Ke,n.stateNode));break;case 4:r=Ke,i=en,Ke=n.stateNode.containerInfo,en=!0,nr(t,e,n),Ke=r,en=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wd(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!tt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,nr(t,e,n),tt=r):nr(t,e,n);break;default:nr(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rC),e.forEach(function(r){var i=fC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,en=!1;break e;case 3:Ke=a.stateNode.containerInfo,en=!0;break e;case 4:Ke=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(Ke===null)throw Error(S(160));vy(s,o,i),Ke=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yy(e,t),e=e.sibling}function yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),un(t),r&4){try{fo(3,t,t.return),Ec(3,t)}catch(y){ke(t,t.return,y)}try{fo(5,t,t.return)}catch(y){ke(t,t.return,y)}}break;case 1:Jt(e,t),un(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Jt(e,t),un(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(y){ke(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$_(i,s),gd(a,o);var c=gd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?H_(i,u):d==="dangerouslySetInnerHTML"?V_(i,u):d==="children"?To(i,u):Uh(i,d,u,c)}switch(a){case"input":dd(i,s);break;case"textarea":z_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xi(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(y){ke(t,t.return,y)}}break;case 6:if(Jt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ke(t,t.return,y)}}break;case 3:if(Jt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(y){ke(t,t.return,y)}break;case 4:Jt(e,t),un(t);break;case 13:Jt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gf=Pe())),r&4&&jm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Jt(e,t),tt=c):Jt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(u=A=d;A!==null;){switch(h=A,g=h.child,h.tag){case 0:case 11:case 14:case 15:fo(4,h,h.return);break;case 1:Qi(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ke(r,n,y)}}break;case 5:Qi(h,h.return);break;case 22:if(h.memoizedState!==null){zm(u);continue}}g!==null?(g.return=h,A=g):zm(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=G_("display",o))}catch(y){ke(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ke(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Jt(e,t),un(t),r&4&&jm(t);break;case 21:break;default:Jt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_y(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=Bm(t);Hd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bm(t);Gd(t,a,o);break;default:throw Error(S(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sC(t,e,n){A=t,wy(t)}function wy(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=Va;var c=tt;if(Va=o,(tt=l)&&!c)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Wm(i):l!==null?(l.return=o,A=l):Wm(i);for(;s!==null;)A=s,wy(s),s=s.sibling;A=i,Va=a,tt=c}$m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):$m(t)}}function $m(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&No(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}tt||e.flags&512&&Vd(e)}catch(h){ke(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function zm(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Wm(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{Vd(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{Vd(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var oC=Math.ceil,Ll=Yn.ReactCurrentDispatcher,pf=Yn.ReactCurrentOwner,Vt=Yn.ReactCurrentBatchConfig,J=0,Ve=null,Ae=null,Qe=0,kt=0,Yi=Mr(0),Me=0,jo=null,ui=0,Ic=0,mf=0,po=null,gt=null,gf=0,_s=1/0,bn=null,Ul=!1,qd=null,yr=null,Ga=!1,cr=null,Ml=0,mo=0,Kd=null,ll=-1,cl=0;function ct(){return J&6?Pe():ll!==-1?ll:ll=Pe()}function wr(t){return t.mode&1?J&2&&Qe!==0?Qe&-Qe:WS.transition!==null?(cl===0&&(cl=iv()),cl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:dv(t.type)),t):1}function sn(t,e,n,r){if(50<mo)throw mo=0,Kd=null,Error(S(185));aa(t,n,r),(!(J&2)||t!==Ve)&&(t===Ve&&(!(J&2)&&(Ic|=n),Me===4&&ar(t,Qe)),It(t,r),n===1&&J===0&&!(e.mode&1)&&(_s=Pe()+500,vc&&Fr()))}function It(t,e){var n=t.callbackNode;WI(t,e);var r=wl(t,t===Ve?Qe:0);if(r===0)n!==null&&Xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xp(n),e===1)t.tag===0?zS(Vm.bind(null,t)):bv(Vm.bind(null,t)),FS(function(){!(J&6)&&Fr()}),n=null;else{switch(sv(r)){case 1:n=$h;break;case 4:n=nv;break;case 16:n=yl;break;case 536870912:n=rv;break;default:n=yl}n=Py(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(ll=-1,cl=0,J&6)throw Error(S(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=wl(t,t===Ve?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=J;J|=2;var s=Sy();(Ve!==t||Qe!==e)&&(bn=null,_s=Pe()+500,ei(t,e));do try{cC();break}catch(a){Iy(t,a)}while(1);ef(),Ll.current=s,J=i,Ae!==null?e=0:(Ve=null,Qe=0,e=Me)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=Qd(t,i))),e===1)throw n=jo,ei(t,0),ar(t,r),It(t,Pe()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!aC(i)&&(e=Fl(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=Qd(t,s))),e===1))throw n=jo,ei(t,0),ar(t,r),It(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Gr(t,gt,bn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=gf+500-Pe(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nd(Gr.bind(null,t,gt,bn),e);break}Gr(t,gt,bn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oC(r/1960))-r,10<r){t.timeoutHandle=Nd(Gr.bind(null,t,gt,bn),r);break}Gr(t,gt,bn);break;case 5:Gr(t,gt,bn);break;default:throw Error(S(329))}}}return It(t,Pe()),t.callbackNode===n?Ey.bind(null,t):null}function Qd(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Yd(e)),t}function Yd(t){gt===null?gt=t:gt.push.apply(gt,t)}function aC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~mf,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Vm(t){if(J&6)throw Error(S(327));rs();var e=wl(t,0);if(!(e&1))return It(t,Pe()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=Qd(t,r))}if(n===1)throw n=jo,ei(t,0),ar(t,e),It(t,Pe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,gt,bn),It(t,Pe()),null}function _f(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(_s=Pe()+500,vc&&Fr())}}function di(t){cr!==null&&cr.tag===0&&!(J&6)&&rs();var e=J;J|=1;var n=Vt.transition,r=ne;try{if(Vt.transition=null,ne=1,t)return t()}finally{ne=r,Vt.transition=n,J=e,!(J&6)&&Fr()}}function vf(){kt=Yi.current,me(Yi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Jh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:ms(),me(wt),me(it),af();break;case 5:of(r);break;case 4:ms();break;case 13:me(we);break;case 19:me(we);break;case 10:tf(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Ve=t,Ae=t=Er(t.current,null),Qe=kt=e,Me=0,jo=null,mf=Ic=ui=0,gt=po=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function Iy(t,e){do{var n=Ae;try{if(ef(),sl.current=Ol,xl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(ci=0,je=Le=Ie=null,ho=!1,Mo=0,pf.current=null,n===null||n.return===null){Me=1,jo=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Am(o);if(g!==null){g.flags&=-257,Dm(g,o,a,s,e),g.mode&1&&bm(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){bm(s,c,e),yf();break e}l=Error(S(426))}}else if(ve&&a.mode&1){var I=Am(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Dm(I,o,a,s,e),Xh(gs(l,a));break e}}s=l=gs(l,a),Me!==4&&(Me=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=sy(s,l,e);Cm(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yr===null||!yr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=oy(s,a,e);Cm(s,v);break e}}s=s.return}while(s!==null)}Ty(n)}catch(E){e=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Sy(){var t=Ll.current;return Ll.current=Ol,t===null?Ol:t}function yf(){(Me===0||Me===3||Me===2)&&(Me=4),Ve===null||!(ui&268435455)&&!(Ic&268435455)||ar(Ve,Qe)}function Fl(t,e){var n=J;J|=2;var r=Sy();(Ve!==t||Qe!==e)&&(bn=null,ei(t,e));do try{lC();break}catch(i){Iy(t,i)}while(1);if(ef(),J=n,Ll.current=r,Ae!==null)throw Error(S(261));return Ve=null,Qe=0,Me}function lC(){for(;Ae!==null;)Cy(Ae)}function cC(){for(;Ae!==null&&!OI();)Cy(Ae)}function Cy(t){var e=Ry(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Ty(t):Ae=e,pf.current=null}function Ty(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nC(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ae=null;return}}else if(n=tC(n,e,kt),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Me===0&&(Me=5)}function Gr(t,e,n){var r=ne,i=Vt.transition;try{Vt.transition=null,ne=1,uC(t,e,n,r)}finally{Vt.transition=i,ne=r}return null}function uC(t,e,n,r){do rs();while(cr!==null);if(J&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VI(t,s),t===Ve&&(Ae=Ve=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,Py(yl,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ne;ne=1;var a=J;J|=4,pf.current=null,iC(t,n),yy(n,t),bS(Rd),El=!!kd,Rd=kd=null,t.current=n,sC(n),LI(),J=a,ne=o,Vt.transition=s}else t.current=n;if(Ga&&(Ga=!1,cr=t,Ml=i),s=t.pendingLanes,s===0&&(yr=null),FI(n.stateNode),It(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=qd,qd=null,t;return Ml&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Kd?mo++:(mo=0,Kd=t):mo=0,Fr(),null}function rs(){if(cr!==null){var t=sv(Ml),e=Vt.transition,n=ne;try{if(Vt.transition=null,ne=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Ml=0,J&6)throw Error(S(331));var i=J;for(J|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var u=d.child;if(u!==null)u.return=d,A=u;else for(;A!==null;){d=A;var h=d.sibling,g=d.return;if(gy(d),d===c){A=null;break}if(h!==null){h.return=g,A=h;break}A=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,A=m;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(E){ke(a,a.return,E)}if(a===o){A=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}if(J=i,Fr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(fc,t)}catch{}r=!0}return r}finally{ne=n,Vt.transition=e}}return!1}function Gm(t,e,n){e=gs(n,e),e=sy(t,e,1),t=vr(t,e,1),e=ct(),t!==null&&(aa(t,1,e),It(t,e))}function ke(t,e,n){if(t.tag===3)Gm(t,t,n);else for(;e!==null;){if(e.tag===3){Gm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=gs(n,t),t=oy(e,t,1),e=vr(e,t,1),t=ct(),e!==null&&(aa(e,1,t),It(e,t));break}}e=e.return}}function dC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Qe&n)===n&&(Me===4||Me===3&&(Qe&130023424)===Qe&&500>Pe()-gf?ei(t,0):mf|=n),It(t,e)}function ky(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ct();t=Gn(t,e),t!==null&&(aa(t,e,n),It(t,n))}function hC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ky(t,n)}function fC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),ky(t,n)}var Ry;Ry=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,eC(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ve&&e.flags&1048576&&Av(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var i=hs(e,it.current);ns(e,n),i=cf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rf(e),i.updater=wc,e.stateNode=i,i._reactInternals=e,Ud(e,r,t,n),e=Bd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Yh(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mC(r),t=Zt(r,t),i){case 0:e=Fd(null,e,r,t,n);break e;case 1:e=Lm(null,e,r,t,n);break e;case 11:e=xm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,Zt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Lm(t,e,r,i,n);case 3:e:{if(uy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mv(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(S(423)),e),e=Um(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(S(424)),e),e=Um(t,e,r,n,i);break e}else for(Pt=_r(e.stateNode.containerInfo.firstChild),bt=e,ve=!0,tn=null,n=Lv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=Hn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return Fv(e),t===null&&xd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pd(r,i)?o=null:s!==null&&Pd(r,s)&&(e.flags|=32),cy(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return dy(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),xm(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Nl,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!wt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Ht(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Om(t,e,r,i,n);case 15:return ay(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),al(t,e),e.tag=1,Et(r)?(t=!0,kl(e)):t=!1,ns(e,n),iy(e,r,i),Ud(e,r,i,n),Bd(null,e,r,!0,t,n);case 19:return hy(t,e,n);case 22:return ly(t,e,n)}throw Error(S(156,e.tag))};function Py(t,e){return tv(t,e)}function pC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new pC(t,e,n,r)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mC(t){if(typeof t=="function")return wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Bh)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ji:return ti(n.children,i,s,e);case Mh:o=8,i|=8;break;case od:return t=jt(12,n,e,i|2),t.elementType=od,t.lanes=s,t;case ad:return t=jt(13,n,e,i),t.elementType=ad,t.lanes=s,t;case ld:return t=jt(19,n,e,i),t.elementType=ld,t.lanes=s,t;case F_:return Sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U_:o=10;break e;case M_:o=9;break e;case Fh:o=11;break e;case Bh:o=14;break e;case ir:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Sc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=F_,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Ou(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,r,i,s,o,a,l){return t=new gC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(s),t}function _C(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ny(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Et(n))return Nv(t,n,e)}return e}function by(t,e,n,r,i,s,o,a,l){return t=Ef(n,r,!0,t,i,s,o,a,l),t.context=Ny(null),n=t.current,r=ct(),i=wr(n),s=Fn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,aa(t,i,r),It(t,r),t}function Cc(t,e,n,r){var i=e.current,s=ct(),o=wr(i);return n=Ny(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(sn(t,i,o,s),il(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){Hm(t,e),(t=t.alternate)&&Hm(t,e)}function vC(){return null}var Ay=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sf(t){this._internalRoot=t}Tc.prototype.render=Sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Cc(t,e,null,null)};Tc.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){Cc(null,t,null,null)}),e[Vn]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&uv(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function yC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bl(o);s.call(c)}}var o=by(e,r,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[Vn]=o.current,Do(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bl(l);a.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[Vn]=l.current,Do(t.nodeType===8?t.parentNode:t),di(function(){Cc(e,l,n,r)}),l}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bl(o);a.call(l)}}Cc(e,o,t,i)}else o=yC(n,e,t,i,r);return Bl(o)}ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(zh(e,n|1),It(e,Pe()),!(J&6)&&(_s=Pe()+500,Fr()))}break;case 13:di(function(){var r=Gn(t,1);if(r!==null){var i=ct();sn(r,t,1,i)}}),If(t,1)}};Wh=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=ct();sn(e,t,134217728,n)}If(t,134217728)}};av=function(t){if(t.tag===13){var e=wr(t),n=Gn(t,e);if(n!==null){var r=ct();sn(n,t,e,r)}If(t,e)}};lv=function(){return ne};cv=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};vd=function(t,e,n){switch(e){case"input":if(dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(S(90));j_(r),dd(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};Q_=_f;Y_=di;var wC={usingClientEntryPoint:!1,Events:[ca,Vi,_c,q_,K_,_f]},Gs={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EC={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||vC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{fc=Ha.inject(EC),yn=Ha}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wC;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(S(200));return _C(t,e,null,n)};Lt.createRoot=function(t,e){if(!Cf(t))throw Error(S(299));var n=!1,r="",i=Ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Do(t.nodeType===8?t.parentNode:t),new Sf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Z_(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return di(t)};Lt.hydrate=function(t,e,n){if(!kc(e))throw Error(S(200));return Rc(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=by(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tc(e)};Lt.render=function(t,e,n){if(!kc(e))throw Error(S(200));return Rc(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!kc(t))throw Error(S(40));return t._reactRootContainer?(di(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=_f;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Rc(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function Dy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy)}catch(t){console.error(t)}}Dy(),D_.exports=Lt;var IC=D_.exports,Km=IC;id.createRoot=Km.createRoot,id.hydrateRoot=Km.hydrateRoot;/**
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
 */const k=function(t,e){if(!t)throw Ps(e)},Ps=function(t){return new Error("Firebase Database ("+xy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Oy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[d],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new CC;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ly=function(t){const e=Oy(t);return Tf.encodeByteArray(e,!0)},jl=function(t){return Ly(t).replace(/\./g,"")},$l=function(t){try{return Tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TC(t){return $o(void 0,t)}function $o(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kC(n)||(t[n]=$o(t[n],e[n]));return t}function kC(t){return t!=="__proto__"}/**
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
 */function RC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PC=()=>RC().__FIREBASE_DEFAULTS__,NC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$l(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return PC()||NC()||bC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uy=()=>{var t;return(t=kf())===null||t===void 0?void 0:t.config},AC=t=>{var e;return(e=kf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function My(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),a].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Pf(){var t;const e=(t=kf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DC(){return typeof self=="object"&&self.self===self}function Fy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function By(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jy(){return xy.NODE_ADMIN===!0}function zl(){try{return typeof indexedDB=="object"}catch{return!1}}function xC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const OC="FirebaseError";class ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OC,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,r)}}function LC(t,e){return t.replace(UC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UC=/\{\$([^}]+)}/g;/**
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
 */function zo(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
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
 */const $y=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=zo($l(s[0])||""),n=zo($l(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},MC=function(t){const e=$y(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FC=function(t){const e=$y(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qm(s)&&Qm(o)){if(!Jd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
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
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class BC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function zy(t,e){const n=new jC(t,e);return n.subscribe.bind(n)}class jC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$C(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lu),i.error===void 0&&(i.error=Lu),i.complete===void 0&&(i.complete=Lu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $C(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}/**
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
 */const F=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function St(t,e){return`${t} failed: ${e} argument `}function $e(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(St(t,e)+"must be a valid function.")}function Ym(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(St(t,e)+"must be a valid context object.")}/**
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
 */const zC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function L(t){return t&&t._delegate?t._delegate:t}let xt=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Hr="[DEFAULT]";/**
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
 */class Wy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _t;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VC(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WC(t){return t===Hr?void 0:t}function VC(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Nf=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Gy={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},GC=te.INFO,HC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},qC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=GC,this._logHandler=qC,this._userLogHandler=null,Nf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function KC(t){Nf.forEach(e=>{e.setLogLevel(t)})}function QC(t,e){for(const n of Nf){let r=null;e&&e.level&&(r=Gy[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}const YC=(t,e)=>e.some(n=>t instanceof n);let Jm,Xm;function JC(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XC(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hy=new WeakMap,Xd=new WeakMap,qy=new WeakMap,Uu=new WeakMap,bf=new WeakMap;function ZC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hy.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function eT(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tT(t){Zd=t(Zd)}function nT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mu(this),e,...n);return qy.set(r,e.sort?e.sort():[e]),Ir(r)}:XC().includes(t)?function(...e){return t.apply(Mu(this),e),Ir(Hy.get(this))}:function(...e){return Ir(t.apply(Mu(this),e))}}function rT(t){return typeof t=="function"?nT(t):(t instanceof IDBTransaction&&eT(t),YC(t,JC())?new Proxy(t,Zd):t)}function Ir(t){if(t instanceof IDBRequest)return ZC(t);if(Uu.has(t))return Uu.get(t);const e=rT(t);return e!==t&&(Uu.set(t,e),bf.set(e,t)),e}const Mu=t=>bf.get(t);function iT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],Fu=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fu.set(e,s),s}tT(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",eg="0.9.13";/**
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
 */const fi=new da("@firebase/app"),cT="@firebase/app-compat",uT="@firebase/analytics-compat",dT="@firebase/analytics",hT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",gT="@firebase/database",_T="@firebase/database-compat",vT="@firebase/functions",yT="@firebase/functions-compat",wT="@firebase/installations",ET="@firebase/installations-compat",IT="@firebase/messaging",ST="@firebase/messaging-compat",CT="@firebase/performance",TT="@firebase/performance-compat",kT="@firebase/remote-config",RT="@firebase/remote-config-compat",PT="@firebase/storage",NT="@firebase/storage-compat",bT="@firebase/firestore",AT="@firebase/firestore-compat",DT="firebase",xT="9.23.0";/**
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
 */const Pr="[DEFAULT]",OT={[eh]:"fire-core",[cT]:"fire-core-compat",[dT]:"fire-analytics",[uT]:"fire-analytics-compat",[fT]:"fire-app-check",[hT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[gT]:"fire-rtdb",[_T]:"fire-rtdb-compat",[vT]:"fire-fn",[yT]:"fire-fn-compat",[wT]:"fire-iid",[ET]:"fire-iid-compat",[IT]:"fire-fcm",[ST]:"fire-fcm-compat",[CT]:"fire-perf",[TT]:"fire-perf-compat",[kT]:"fire-rc",[RT]:"fire-rc-compat",[PT]:"fire-gcs",[NT]:"fire-gcs-compat",[bT]:"fire-fst",[AT]:"fire-fst-compat","fire-js":"fire-js",[DT]:"fire-js-all"};/**
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
 */const Nr=new Map,Wo=new Map;function Gl(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ky(t,e){t.container.addOrOverwriteComponent(e)}function qn(t){const e=t.name;if(Wo.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Wo.set(e,t);for(const n of Nr.values())Gl(n,t);return!0}function Qy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function LT(t,e,n=Pr){Qy(t,e).clearInstance(n)}function UT(){Wo.clear()}/**
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
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Si("app","Firebase",MT);/**
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
 */let FT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}};/**
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
 */const Jn=xT;function Af(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=Uy()),!n)throw Bn.create("no-options");const s=Nr.get(i);if(s){if(Jd(n,s.options)&&Jd(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new Vy(i);for(const l of Wo.values())o.addComponent(l);const a=new FT(n,r,o);return Nr.set(i,a),a}function BT(t=Pr){const e=Nr.get(t);if(!e&&t===Pr&&Uy())return Af();if(!e)throw Bn.create("no-app",{appName:t});return e}function jT(){return Array.from(Nr.values())}async function Yy(t){const e=t.name;Nr.has(e)&&(Nr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gt(t,e,n){var r;let i=(r=OT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}qn(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Jy(t,e){if(t!==null&&typeof t!="function")throw Bn.create("invalid-log-argument");QC(t,e)}function Xy(t){KC(t)}/**
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
 */const $T="firebase-heartbeat-database",zT=1,Vo="firebase-heartbeat-store";let Bu=null;function Zy(){return Bu||(Bu=iT($T,zT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vo)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function WT(t){try{return await(await Zy()).transaction(Vo).objectStore(Vo).get(ew(t))}catch(e){if(e instanceof ut)fi.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function tg(t,e){try{const r=(await Zy()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,ew(t)),await r.done}catch(n){if(n instanceof ut)fi.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function ew(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VT=1024,GT=30*24*60*60*1e3;class HT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ng();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ng(),{heartbeatsToSend:n,unsentEntries:r}=qT(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ng(){return new Date().toISOString().substring(0,10)}function qT(t,e=VT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?xC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rg(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QT(t){qn(new xt("platform-logger",e=>new aT(e),"PRIVATE")),qn(new xt("heartbeat",e=>new HT(e),"PRIVATE")),Gt(eh,eg,t),Gt(eh,eg,"esm2017"),Gt("fire-js","")}QT("");const YT=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ut,SDK_VERSION:Jn,_DEFAULT_ENTRY_NAME:Pr,_addComponent:Gl,_addOrOverwriteComponent:Ky,_apps:Nr,_clearComponents:UT,_components:Wo,_getProvider:Qy,_registerComponent:qn,_removeServiceInstance:LT,deleteApp:Yy,getApp:BT,getApps:jT,initializeApp:Af,onLog:Jy,registerVersion:Gt,setLogLevel:Xy},Symbol.toStringTag,{value:"Module"}));/**
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
 */class JT{constructor(e,n){this._delegate=e,this.firebase=n,Gl(e,new xt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yy(this._delegate)))}_getService(e,n=Pr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Pr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Gl(this._delegate,e)}_addOrOverwriteComponent(e){Ky(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ig=new Si("app-compat","Firebase",XT);/**
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
 */function ZT(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Gt,setLogLevel:Xy,onLog:Jy,apps:null,SDK_VERSION:Jn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:YT}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Pr,!Dt(e,c))throw ig.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const u=Af(c,d);if(Dt(e,u.name))return e[u.name];const h=new t(u,n);return e[u.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,u=d.replace("-compat","");if(qn(c)&&c.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[u]!="function")throw ig.create("invalid-app-argument",{appName:d});return g[u]()};c.serviceProps!==void 0&&$o(h,c.serviceProps),n[u]=h,t.prototype[u]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[u]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function tw(){const t=ZT(JT);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:tw,extendNamespace:e,createSubscribe:zy,ErrorFactory:Si,deepExtend:$o});function e(n){$o(t,n)}return t}const ek=tw();/**
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
 */const sg=new da("@firebase/app-compat"),tk="@firebase/app-compat",nk="0.2.13";/**
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
 */function rk(t){Gt(tk,nk,t)}/**
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
 */if(DC()&&self.firebase!==void 0){sg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&sg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const V=ek;rk();var ik="firebase",sk="9.23.0";/**
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
 */V.registerVersion(ik,sk,"app-compat");function Df(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Hs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Li={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function ok(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ak=ok,lk=nw,rw=new Si("auth","Firebase",nw());/**
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
 */const Hl=new da("@firebase/auth");function ck(t,...e){Hl.logLevel<=te.WARN&&Hl.warn(`Auth (${Jn}): ${t}`,...e)}function dl(t,...e){Hl.logLevel<=te.ERROR&&Hl.error(`Auth (${Jn}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw xf(t,...e)}function Ye(t,...e){return xf(t,...e)}function iw(t,e,n){const r=Object.assign(Object.assign({},lk()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Ns(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(t,"argument-error"),iw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rw.create(t,...e)}function T(t,e,...n){if(!t)throw xf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function ln(t,e){t||vn(e)}/**
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
 */function Go(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Of(){return og()==="http:"||og()==="https:"}function og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Of()||Fy()||"connection"in navigator)?navigator.onLine:!0}function dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Rf()||Pc()}get(){return uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lf(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fk=new ha(3e4,6e4);function xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fe(t,e,n,r,i={}){return ow(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sw.fetch()(aw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ow(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hk),e);try{const i=new pk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iw(t,d,c);Xe(t,d)}}catch(i){if(i instanceof ut)throw i;Xe(t,"network-request-failed",{message:String(i)})}}async function Xn(t,e,n,r,i={}){const s=await Fe(t,e,n,r,i);return"mfaPendingCredential"in s&&Xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lf(t.config,i):`${t.config.apiScheme}://${i}`}class pk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function mk(t,e){return Fe(t,"POST","/v1/accounts:delete",e)}async function gk(t,e){return Fe(t,"POST","/v1/accounts:update",e)}async function _k(t,e){return Fe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vk(t,e=!1){const n=L(t),r=await n.getIdToken(e),i=bc(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:go(ju(i.auth_time)),issuedAtTime:go(ju(i.iat)),expirationTime:go(ju(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$l(n);return i?JSON.parse(i):(dl("Failed to decode base64 JWT payload"),null)}catch(i){return dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yk(t){const e=bc(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ut&&wk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kn(t,_k(n,{idToken:r}));T(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ck(s.providerUserInfo):[],a=Sk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lw(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function Ik(t){const e=L(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ck(t){return t.map(e=>{var{providerId:n}=e,r=Df(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Tk(t,e){const n=await ow(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qo;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function rr(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ni{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vk(this,e)}reload(){return Ik(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:v,isAnonymous:E,providerData:N,stsTokenManager:P}=n;T(m&&P,e,"internal-error");const C=qo.fromJSON(this.name,P);T(typeof m=="string",e,"internal-error"),rr(u,e.name),rr(h,e.name),T(typeof v=="boolean",e,"internal-error"),T(typeof E=="boolean",e,"internal-error"),rr(g,e.name),rr(_,e.name),rr(y,e.name),rr(I,e.name),rr(p,e.name),rr(f,e.name);const W=new ni({uid:m,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:E,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:C,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(W.providerData=N.map(j=>Object.assign({},j))),I&&(W._redirectEventId=I),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new qo;i.updateFromServerResponse(n);const s=new ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ho(s),s}}/**
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
 */const ag=new Map;function Nt(t){ln(t instanceof Function,"Expected a class definition");let e=ag.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ag.set(t,e),e)}/**
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
 */class cw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cw.type="NONE";const vs=cw;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ri(this.userKey,i.apiKey,s),this.fullPersistenceKey=ri("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(Nt(vs),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nt(vs);const o=ri(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=ni._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new is(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new is(s,e,r))}}/**
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
 */function lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(pw(e))return"Webos";if(Uf(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(fa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uw(t=De()){return/firefox\//i.test(t)}function Uf(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(t=De()){return/crios\//i.test(t)}function hw(t=De()){return/iemobile/i.test(t)}function fa(t=De()){return/android/i.test(t)}function fw(t=De()){return/blackberry/i.test(t)}function pw(t=De()){return/webos/i.test(t)}function bs(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kk(t=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Rk(t=De()){var e;return bs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pk(){return By()&&document.documentMode===10}function mw(t=De()){return bs(t)||fa(t)||pw(t)||fw(t)||/windows phone/i.test(t)||hw(t)}function Nk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=lg(De());break;case"Worker":n=`${lg(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${r}`}/**
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
 */async function bk(t){return(await Fe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function _w(t,e){return Fe(t,"GET","/v2/recaptchaConfig",xe(t,e))}/**
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
 */function cg(t){return t!==void 0&&t.getResponse!==void 0}function ug(t){return t!==void 0&&t.enterprise!==void 0}class vw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Ak(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ak().appendChild(r)})}function yw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Dk="https://www.google.com/recaptcha/enterprise.js?render=",xk="recaptcha-enterprise",Ok="NO_RECAPTCHA";class ww{constructor(e){this.type=xk,this.auth=Ne(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_w(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ok)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ug(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mf(Dk+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function br(t,e,n,r=!1){const i=new ww(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Lk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Uk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new Lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?L(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}async initializeRecaptchaConfig(){const e=await _w(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ww(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ne(t){return L(t)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=zy(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fk(t,e,n){const r=Ne(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ew(e),{host:o,port:a}=Bk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jk()}function Ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bk(t){const e=Ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class As{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Iw(t,e){return Fe(t,"POST","/v1/accounts:resetPassword",xe(t,e))}async function Sw(t,e){return Fe(t,"POST","/v1/accounts:update",e)}async function $k(t,e){return Fe(t,"POST","/v1/accounts:update",xe(t,e))}/**
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
 */async function $u(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}async function Ac(t,e){return Fe(t,"POST","/v1/accounts:sendOobCode",xe(t,e))}async function zk(t,e){return Ac(t,e)}async function zu(t,e){return Ac(t,e)}async function Wu(t,e){return Ac(t,e)}async function Wk(t,e){return Ac(t,e)}/**
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
 */async function Vk(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}async function Gk(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}/**
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
 */class Ko extends As{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await br(e,r,"signInWithPassword");return $u(e,i)}else return $u(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await br(e,r,"signInWithPassword");return $u(e,s)}else return Promise.reject(i)});case"emailLink":return Vk(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gk(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}/**
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
 */const Hk="http://localhost";class Sn extends As{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Df(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}buildRequest(){const e={requestUri:Hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */async function qk(t,e){return Fe(t,"POST","/v1/accounts:sendVerificationCode",xe(t,e))}async function Kk(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e))}async function Qk(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e));if(n.temporaryProof)throw so(t,"account-exists-with-different-credential",n);return n}const Yk={USER_NOT_FOUND:"user-not-found"};async function Jk(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,n),Yk)}/**
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
 */class ii extends As{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Kk(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Qk(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Jk(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Xk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zk(t){const e=Ji(io(t)).link,n=e?Ji(io(e)).deep_link_id:null,r=Ji(io(t)).deep_link_id;return(r?Ji(io(r)).link:null)||r||n||e||t}class Dc{constructor(e){var n,r,i,s,o,a;const l=Ji(io(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Xk((i=l.mode)!==null&&i!==void 0?i:null);T(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zk(e);try{return new Dc(n)}catch{return null}}}/**
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
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dc.parseLink(n);return T(r,"argument-error"),Ko._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ss extends Ds{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return T("providerId"in n&&"signInMethod"in n,"argument-error"),Sn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),Sn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ss.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ss.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new ss(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class fn extends Ds{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends Ds{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */const eR="http://localhost";class ys extends As{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ys(r,s)}static _create(e,n){return new ys(e,n)}buildRequest(){return{requestUri:eR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const tR="saml.";class ql extends Zn{constructor(e){T(e.startsWith(tR),"argument-error"),super(e)}static credentialFromResult(e){return ql.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ql.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ys.fromJSON(e);return T(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ys._create(r,n)}catch{return null}}}/**
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
 */class gn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return Sn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function hl(t,e){return Xn(t,"POST","/v1/accounts:signUp",xe(t,e))}/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ni._fromIdTokenResponse(e,r,i),o=fg(r);return new Kt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fg(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function nR(t){var e;const n=Ne(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hl(n,{returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Kl extends ut{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function Cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Tw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function rR(t,e){const n=L(t);await xc(!0,n,e);const{providerUserInfo:r}=await gk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Tw(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ff(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}async function xc(t,e,n){await Ho(e);const r=Tw(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";T(r.has(n)===t,e.auth,i)}/**
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
 */async function kw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Kn(t,Cw(r,i,e,t),n);T(s.idToken,r,"internal-error");const o=bc(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(t.uid===a,r,"user-mismatch"),Kt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
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
 */async function Rw(t,e,n=!1){const r="signIn",i=await Cw(t,r,e),s=await Kt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Oc(t,e){return Rw(Ne(t),e)}async function Pw(t,e){const n=L(t);return await xc(!1,n,e.providerId),Ff(n,e)}async function Nw(t,e){return kw(L(t),e)}/**
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
 */async function iR(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",xe(t,e))}/**
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
 */async function sR(t,e){const n=Ne(t),r=await iR(n,{token:e,returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class pa{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bf._fromServerResponse(e,n):"totpInfo"in n?jf._fromServerResponse(e,n):Xe(e,"internal-error")}}class Bf extends pa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bf(n)}}class jf extends pa{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new jf(n)}}/**
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
 */function os(t,e,n){var r;T(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),T(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function oR(t,e,n){var r;const i=Ne(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await br(i,s,"getOobCode",!0);n&&os(i,o,n),await zu(i,o)}else n&&os(i,s,n),await zu(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await br(i,s,"getOobCode",!0);n&&os(i,a,n),await zu(i,a)}else return Promise.reject(o)})}async function aR(t,e,n){await Iw(L(t),{oobCode:e,newPassword:n})}async function lR(t,e){await $k(L(t),{oobCode:e})}async function bw(t,e){const n=L(t),r=await Iw(n,{oobCode:e}),i=r.requestType;switch(T(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=pa._fromServerResponse(Ne(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function cR(t,e){const{data:n}=await bw(L(t),e);return n.email}async function uR(t,e,n){var r;const i=Ne(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await br(i,s,"signUpPassword");o=hl(i,c)}else o=hl(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await br(i,s,"signUpPassword");return hl(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Kt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function dR(t,e,n){return Oc(L(t),Br.credential(e,n))}/**
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
 */async function hR(t,e,n){var r;const i=Ne(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){T(l.handleCodeInApp,i,"argument-error"),l&&os(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await br(i,s,"getOobCode",!0);o(a,n),await Wu(i,a)}else o(s,n),await Wu(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await br(i,s,"getOobCode",!0);o(l,n),await Wu(i,l)}else return Promise.reject(a)})}function fR(t,e){const n=Dc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function pR(t,e,n){const r=L(t),i=Br.credentialWithLink(e,n||Go());return T(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Oc(r,i)}/**
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
 */async function mR(t,e){return Fe(t,"POST","/v1/accounts:createAuthUri",xe(t,e))}/**
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
 */async function gR(t,e){const n=Of()?Go():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await mR(L(t),r);return i||[]}async function _R(t,e){const n=L(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&os(n.auth,i,e);const{email:s}=await zk(n.auth,i);s!==t.email&&await t.reload()}async function vR(t,e,n){const r=L(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&os(r.auth,s,n);const{email:o}=await Wk(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function yR(t,e){return Fe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=L(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kn(r,yR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ER(t,e){return Aw(L(t),e,null)}function IR(t,e){return Aw(L(t),null,e)}async function Aw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Kn(t,Sw(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function SR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=bc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new as(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new CR(s,i);case"github.com":return new TR(s,i);case"google.com":return new kR(s,i);case"twitter.com":return new RR(s,i,t.screenName||null);case"custom":case"anonymous":return new as(s,null);default:return new as(s,r,i)}}class as{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Dw extends as{constructor(e,n,r,i){super(e,n,r),this.username=i}}class CR extends as{constructor(e,n){super(e,"facebook.com",n)}}class TR extends Dw{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class kR extends as{constructor(e,n){super(e,"google.com",n)}}class RR extends Dw{constructor(e,n,r){super(e,"twitter.com",n,r)}}function PR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:SR(n)}class Jr{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Jr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Jr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Jr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Jr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class $f{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ne(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>pa._fromServerResponse(r,a));T(i.mfaPendingCredential,r,"internal-error");const o=Jr._fromMfaPendingCredential(i.mfaPendingCredential);return new $f(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Kt._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return T(n.user,r,"internal-error"),Kt._forOperation(n.user,n.operationType,c);default:Xe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function NR(t,e){var n;const r=L(t),i=e;return T(e.customData.operationType,r,"argument-error"),T((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),$f._fromError(r,i)}/**
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
 */function bR(t,e){return Fe(t,"POST","/v2/accounts/mfaEnrollment:start",xe(t,e))}function AR(t,e){return Fe(t,"POST","/v2/accounts/mfaEnrollment:finalize",xe(t,e))}function DR(t,e){return Fe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",xe(t,e))}class zf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>pa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new zf(e)}async getSession(){return Jr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Kn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Kn(this.user,DR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Vu=new WeakMap;function xR(t){const e=L(t);return Vu.has(e)||Vu.set(e,zf._fromUser(e)),Vu.get(e)}const Ql="__sak";/**
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
 */function OR(){const t=De();return Uf(t)||bs(t)}const LR=1e3,UR=10;class Ow extends xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OR()&&Nk(),this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Pk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const Wf=Ow;/**
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
 */class Lw extends xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lw.type="SESSION";const pi=Lw;/**
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
 */function MR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await MR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
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
 */function ma(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ma("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function BR(t){be().location.href=t}/**
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
 */function Vf(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function jR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $R(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zR(){return Vf()?self:null}/**
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
 */const Uw="firebaseLocalStorageDb",WR=1,Yl="firebaseLocalStorage",Mw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function VR(){const t=indexedDB.deleteDatabase(Uw);return new ga(t).toPromise()}function th(){const t=indexedDB.open(Uw,WR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:Mw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await VR(),e(await th()))})})}async function pg(t,e,n){const r=Uc(t,!0).put({[Mw]:e,value:n});return new ga(r).toPromise()}async function GR(t,e){const n=Uc(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function mg(t,e){const n=Uc(t,!0).delete(e);return new ga(n).toPromise()}const HR=800,qR=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(zR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await pg(e,Ql,"1"),await mg(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uc(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const Qo=Fw;/**
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
 */function KR(t,e){return Fe(t,"POST","/v2/accounts/mfaSignIn:start",xe(t,e))}function QR(t,e){return Fe(t,"POST","/v2/accounts/mfaSignIn:finalize",xe(t,e))}/**
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
 */const YR=500,JR=6e4,qa=1e12;class XR{constructor(e){this.auth=e,this.counter=qa,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||qa;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||qa;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||qa;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ZR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;T(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},JR)},YR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Gu=yw("rcb"),tP=new ha(3e4,6e4),nP="https://www.google.com/recaptcha/api.js?";class rP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=be().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return T(iP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&cg(be().grecaptcha)?Promise.resolve(be().grecaptcha):new Promise((r,i)=>{const s=be().setTimeout(()=>{i(Ye(e,"network-request-failed"))},tP.get());be()[Gu]=()=>{be().clearTimeout(s),delete be()[Gu];const a=be().grecaptcha;if(!a||!cg(a)){i(Ye(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const u=l(c,d);return this.counter++,u},this.hostLanguage=n,r(a)};const o=`${nP}?${Ci({onload:Gu,render:"explicit",hl:n})}`;Mf(o).catch(()=>{clearTimeout(s),i(Ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=be().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class sP{async load(e){return new XR(e)}clearedOneInstance(){}}/**
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
 */const Bw="recaptcha",oP={theme:"light",type:"image"};let aP=class{constructor(e,n=Object.assign({},oP),r){this.parameters=n,this.type=Bw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(r),this.isInvisible=this.parameters.size==="invisible",T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;T(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sP:new rP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=be()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(Of()&&!Vf(),this.auth,"internal-error"),await lP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bk(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function lP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Gf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function cP(t,e,n){const r=Ne(t),i=await Mc(r,e,L(n));return new Gf(i,s=>Oc(r,s))}async function uP(t,e,n){const r=L(t);await xc(!1,r,"phone");const i=await Mc(r.auth,e,L(n));return new Gf(i,s=>Pw(r,s))}async function dP(t,e,n){const r=L(t),i=await Mc(r.auth,e,L(n));return new Gf(i,s=>Nw(r,s))}async function Mc(t,e,n){var r;const i=await n.verify();try{T(typeof i=="string",t,"argument-error"),T(n.type===Bw,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return T(o.type==="enroll",t,"internal-error"),(await bR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{T(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return T(a,t,"missing-multi-factor-info"),(await KR(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await qk(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function hP(t,e){await Ff(L(t),e)}/**
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
 */let mi=class fl{constructor(e){this.providerId=fl.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,n){return Mc(this.auth,e,L(n))}static credential(e,n){return ii._fromVerification(e,n)}static credentialFromResult(e){const n=e;return fl.credentialFromTaggedObject(n)}static credentialFromError(e){return fl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ii._fromTokenResponse(n,r):null}};mi.PROVIDER_ID="phone";mi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ti(t,e){return e?Nt(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends As{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fP(t){return Rw(t.auth,new Hf(t),t.bypassAuthState)}function pP(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),kw(n,new Hf(t),t.bypassAuthState)}async function mP(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Ff(n,new Hf(t),t.bypassAuthState)}/**
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
 */class jw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fP;case"linkViaPopup":case"linkViaRedirect":return mP;case"reauthViaPopup":case"reauthViaRedirect":return pP;default:Xe(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gP=new ha(2e3,1e4);async function _P(t,e,n){const r=Ne(t);Ns(t,e,Zn);const i=Ti(r,n);return new Ln(r,"signInViaPopup",e,i).executeNotNull()}async function vP(t,e,n){const r=L(t);Ns(r.auth,e,Zn);const i=Ti(r.auth,n);return new Ln(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function yP(t,e,n){const r=L(t);Ns(r.auth,e,Zn);const i=Ti(r.auth,n);return new Ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ln extends jw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gP.get())};e()}}Ln.currentPopupAction=null;/**
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
 */const wP="pendingRedirect",_o=new Map;class EP extends jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await IP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IP(t,e){const n=zw(e),r=$w(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function qf(t,e){return $w(t)._set(zw(e),"true")}function SP(){_o.clear()}function Kf(t,e){_o.set(t._key(),e)}function $w(t){return Nt(t._redirectPersistence)}function zw(t){return ri(wP,t.config.apiKey,t.name)}/**
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
 */function CP(t,e,n){return TP(t,e,n)}async function TP(t,e,n){const r=Ne(t);Ns(t,e,Zn),await r._initializationPromise;const i=Ti(r,n);return await qf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function kP(t,e,n){return RP(t,e,n)}async function RP(t,e,n){const r=L(t);Ns(r.auth,e,Zn),await r.auth._initializationPromise;const i=Ti(r.auth,n);await qf(i,r.auth);const s=await Ww(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function PP(t,e,n){return NP(t,e,n)}async function NP(t,e,n){const r=L(t);Ns(r.auth,e,Zn),await r.auth._initializationPromise;const i=Ti(r.auth,n);await xc(!1,r,e.providerId),await qf(i,r.auth);const s=await Ww(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function bP(t,e){return await Ne(t)._initializationPromise,Fc(t,e,!1)}async function Fc(t,e,n=!1){const r=Ne(t),i=Ti(r,e),o=await new EP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ww(t){const e=ma(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const AP=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gw(t);default:return!1}}/**
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
 */async function Hw(t,e={}){return Fe(t,"GET","/v1/projects",e)}/**
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
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function LP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hw(t);for(const n of e)try{if(UP(n))return}catch{}Xe(t,"unauthorized-domain")}function UP(t){const e=Go(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OP.test(n))return!1;if(xP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MP=new ha(3e4,6e4);function _g(){const t=be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FP(t){return new Promise((e,n)=>{var r,i,s;function o(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(Ye(t,"network-request-failed"))},timeout:MP.get()})}if(!((i=(r=be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=be().gapi)===null||s===void 0)&&s.load)o();else{const a=yw("iframefcb");return be()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Mf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pl=null,e})}let pl=null;function BP(t){return pl=pl||FP(t),pl}/**
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
 */const jP=new ha(5e3,15e3),$P="__/auth/iframe",zP="emulator/auth/iframe",WP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lf(e,zP):`https://${t.config.authDomain}/${$P}`,r={apiKey:e.apiKey,appName:t.name,v:Jn},i=VP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ci(r).slice(1)}`}async function HP(t){const e=await BP(t),n=be().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=be().setTimeout(()=>{s(o)},jP.get());function l(){be().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,QP=600,YP="_blank",JP="http://localhost";class vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XP(t,e,n,r=KP,i=QP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();n&&(a=dw(c)?YP:n),uw(c)&&(e=e||JP,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Rk(c)&&a!=="_self")return ZP(e||"",a),new vg(null);const u=window.open(e||"",a,d);T(u,t,"popup-blocked");try{u.focus()}catch{}return new vg(u)}function ZP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eN="__/auth/handler",tN="emulator/auth/handler",nN=encodeURIComponent("fac");async function nh(t,e,n,r,i,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jn,eventId:i};if(e instanceof Zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ds){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${nN}=${encodeURIComponent(l)}`:"";return`${rN(t)}?${Ci(a).slice(1)}${c}`}function rN({config:t}){return t.emulator?Lf(t,tN):`https://${t.authDomain}/${eN}`}/**
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
 */const Hu="webStorageSupport";class iN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pi,this._completeRedirectFn=Fc,this._overrideRedirectResult=Kf}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nh(e,n,r,Go(),i);return XP(e,o,ma())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await nh(e,n,r,Go(),i);return BR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HP(e),r=new Vw(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hu];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||Uf()||bs()}}const sN=iN;class oN{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return vn("unexpected MultiFactorSessionType")}}}class Qf extends oN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qf(e)}_finalizeEnroll(e,n,r){return AR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return QR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qw{constructor(){}static assertion(e){return Qf._fromCredential(e)}}qw.FACTOR_ID="phone";var yg="@firebase/auth",wg="0.23.2";/**
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
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cN(t){qn(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},c=new Uk(r,i,s,l);return Mk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new xt("auth-internal",e=>{const n=Ne(e.getProvider("auth").getImmediate());return(r=>new aN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(yg,wg,lN(t)),Gt(yg,wg,"esm2017")}/**
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
 */const uN=5*60;AC("authIdTokenMaxAge");cN("Browser");/**
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
 */function gi(){return window}/**
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
 */const dN=2e3;async function hN(t,e,n){var r;const{BuildInfo:i}=gi();ln(e.sessionId,"AuthEvent did not contain a session ID");const s=await _N(e.sessionId),o={};return bs()?o.ibi=i.packageName:fa()?o.apn=i.packageName:Xe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,nh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function fN(t){const{BuildInfo:e}=gi(),n={};bs()?n.iosBundleId=e.packageName:fa()?n.androidPackageName=e.packageName:Xe(t,"operation-not-supported-in-this-environment"),await Hw(t,n)}function pN(t){const{cordova:e}=gi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,kk()?"_blank":"_system","location=yes"),n(i)})})}async function mN(t,e,n){const{cordova:r}=gi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var u;s();const h=(u=r.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Ye(t,"redirect-cancelled-by-user"))},dN))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),fa()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function gN(t){var e,n,r,i,s,o,a,l,c,d;const u=gi();T(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T(typeof((n=u==null?void 0:u.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T(typeof((s=(i=(r=u==null?void 0:u.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((l=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((d=(c=u==null?void 0:u.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _N(t){const e=vN(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function vN(t){if(ln(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const yN=20;class wN extends Vw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function EN(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:CN(),postBody:null,tenantId:t.tenantId,error:Ye(t,"no-auth-event")}}function IN(t,e){return rh()._set(ih(t),e)}async function Eg(t){const e=await rh()._get(ih(t));return e&&await rh()._remove(ih(t)),e}function SN(t,e){var n,r;const i=kN(e);if(i.includes("/__/auth/callback")){const s=ml(i),o=s.firebaseError?TN(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ye(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function CN(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<yN;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function rh(){return Nt(Wf)}function ih(t){return ri("authEvent",t.config.apiKey,t.name)}function TN(t){try{return JSON.parse(t)}catch{return null}}function kN(t){const e=ml(t),n=e.link?decodeURIComponent(e.link):void 0,r=ml(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ml(i).link||i||r||n||t}function ml(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ji(n.join("?"))}/**
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
 */const RN=500;class PN{constructor(){this._redirectPersistence=pi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Fc,this._overrideRedirectResult=Kf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new wN(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Xe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){gN(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),SP(),await this._originValidation(e);const o=EN(e,r,i);await IN(e,o);const a=await hN(e,o,n),l=await pN(a);return mN(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fN(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=gi(),o=setTimeout(async()=>{await Eg(e),n.onEvent(Ig())},RN),a=async d=>{clearTimeout(o);const u=await Eg(e);let h=null;u&&(d!=null&&d.url)&&(h=SN(u,d.url)),n.onEvent(h||Ig())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;gi().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(u){console.error(u)}}}}const NN=PN;function Ig(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ye("no-auth-event")}}/**
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
 */function bN(t,e){Ne(t)._logFramework(e)}var AN="@firebase/auth-compat",DN="0.4.2";/**
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
 */const xN=1e3;function vo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function ON(){return vo()==="http:"||vo()==="https:"}function Kw(t=De()){return!!((vo()==="file:"||vo()==="ionic:"||vo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function LN(){return Pc()||Pf()}function UN(){return By()&&(document==null?void 0:document.documentMode)===11}function MN(t=De()){return/Edge\/\d+/.test(t)}function FN(t=De()){return UN()||MN(t)}function Qw(){try{const t=self.localStorage,e=ma();if(t)return t.setItem(e,"1"),t.removeItem(e),FN()?zl():!0}catch{return Yf()&&zl()}return!1}function Yf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qu(){return(ON()||Fy()||Kw())&&!LN()&&Qw()&&!Yf()}function Yw(){return Kw()&&typeof document<"u"}async function BN(){return Yw()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},xN);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function jN(){return typeof window<"u"?window:null}/**
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
 */const Rt={LOCAL:"local",NONE:"none",SESSION:"session"},qs=T,Jw="persistence";function $N(t,e){if(qs(Object.values(Rt).includes(e),t,"invalid-persistence-type"),Pc()){qs(e!==Rt.SESSION,t,"unsupported-persistence-type");return}if(Pf()){qs(e===Rt.NONE,t,"unsupported-persistence-type");return}if(Yf()){qs(e===Rt.NONE||e===Rt.LOCAL&&zl(),t,"unsupported-persistence-type");return}qs(e===Rt.NONE||Qw(),t,"unsupported-persistence-type")}async function sh(t){await t._initializationPromise;const e=Xw(),n=ri(Jw,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function zN(t,e){const n=Xw();if(!n)return[];const r=ri(Jw,t,e);switch(n.getItem(r)){case Rt.NONE:return[vs];case Rt.LOCAL:return[Qo,pi];case Rt.SESSION:return[pi];default:return[]}}function Xw(){var t;try{return((t=jN())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const WN=T;class ur{constructor(){this.browserResolver=Nt(sN),this.cordovaResolver=Nt(NN),this.underlyingResolver=null,this._redirectPersistence=pi,this._completeRedirectFn=Fc,this._overrideRedirectResult=Kf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Yw()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return WN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await BN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Zw(t){return t.unwrap()}function VN(t){return t.wrapped()}/**
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
 */function GN(t){return eE(t)}function HN(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new qN(t,NR(t,e))}else if(r){const i=eE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function eE(t){const{_tokenResponse:e}=t instanceof ut?t.customData:t;if(!e)return null;if(!(t instanceof ut)&&"temporaryProof"in e&&"phoneNumber"in e)return mi.credentialFromResult(t);const n=e.providerId;if(!n||n===Hs.PASSWORD)return null;let r;switch(n){case Hs.GOOGLE:r=pn;break;case Hs.FACEBOOK:r=fn;break;case Hs.GITHUB:r=mn;break;case Hs.TWITTER:r=gn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ys._create(n,a):Sn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new ss(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof ut?r.credentialFromError(t):r.credentialFromResult(t)}function mt(t,e){return e.catch(n=>{throw n instanceof ut&&HN(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:GN(n),additionalUserInfo:PR(n),user:Un.getOrCreate(i)}})}async function oh(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>mt(t,n.confirm(r))}}class qN{constructor(e,n){this.resolver=n,this.auth=VN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return mt(Zw(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Un{constructor(e){this._delegate=e,this.multiFactor=xR(e)}static getOrCreate(e){return Un.USER_MAP.has(e)||Un.USER_MAP.set(e,new Un(e)),Un.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return mt(this.auth,Pw(this._delegate,e))}async linkWithPhoneNumber(e,n){return oh(this.auth,uP(this._delegate,e,n))}async linkWithPopup(e){return mt(this.auth,yP(this._delegate,e,ur))}async linkWithRedirect(e){return await sh(Ne(this.auth)),PP(this._delegate,e,ur)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return mt(this.auth,Nw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return oh(this.auth,dP(this._delegate,e,n))}reauthenticateWithPopup(e){return mt(this.auth,vP(this._delegate,e,ur))}async reauthenticateWithRedirect(e){return await sh(Ne(this.auth)),kP(this._delegate,e,ur)}sendEmailVerification(e){return _R(this._delegate,e)}async unlink(e){return await rR(this._delegate,e),this}updateEmail(e){return ER(this._delegate,e)}updatePassword(e){return IR(this._delegate,e)}updatePhoneNumber(e){return hP(this._delegate,e)}updateProfile(e){return wR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return vR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Un.USER_MAP=new WeakMap;/**
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
 */const Ks=T;class ah{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ks(r,"invalid-api-key",{appName:e.name}),Ks(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ur:void 0;this._delegate=n.initialize({options:{persistence:KN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(ak),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Un.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Fk(this._delegate,e,n)}applyActionCode(e){return lR(this._delegate,e)}checkActionCode(e){return bw(this._delegate,e)}confirmPasswordReset(e,n){return aR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return mt(this._delegate,uR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gR(this._delegate,e)}isSignInWithEmailLink(e){return fR(this._delegate,e)}async getRedirectResult(){Ks(qu(),this._delegate,"operation-not-supported-in-this-environment");const e=await bP(this._delegate,ur);return e?mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bN(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Sg(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Sg(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return hR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return oR(this._delegate,e,n||void 0)}async setPersistence(e){$N(this._delegate,e);let n;switch(e){case Rt.SESSION:n=pi;break;case Rt.LOCAL:n=await Nt(Qo)._isAvailable()?Qo:Wf;break;case Rt.NONE:n=vs;break;default:return Xe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return mt(this._delegate,nR(this._delegate))}signInWithCredential(e){return mt(this._delegate,Oc(this._delegate,e))}signInWithCustomToken(e){return mt(this._delegate,sR(this._delegate,e))}signInWithEmailAndPassword(e,n){return mt(this._delegate,dR(this._delegate,e,n))}signInWithEmailLink(e,n){return mt(this._delegate,pR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return oh(this._delegate,cP(this._delegate,e,n))}async signInWithPopup(e){return Ks(qu(),this._delegate,"operation-not-supported-in-this-environment"),mt(this._delegate,_P(this._delegate,e,ur))}async signInWithRedirect(e){return Ks(qu(),this._delegate,"operation-not-supported-in-this-environment"),await sh(this._delegate),CP(this._delegate,e,ur)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return cR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ah.Persistence=Rt;function Sg(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Un.getOrCreate(o)),error:e,complete:n}}function KN(t,e){const n=zN(t,e);if(typeof self<"u"&&!n.includes(Qo)&&n.push(Qo),typeof window<"u")for(const r of[Wf,pi])n.includes(r)||n.push(r);return n.includes(vs)||n.push(vs),n}/**
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
 */class Jf{constructor(){this.providerId="phone",this._delegate=new mi(Zw(V.auth()))}static credential(e,n){return mi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Jf.PHONE_SIGN_IN_METHOD=mi.PHONE_SIGN_IN_METHOD;Jf.PROVIDER_ID=mi.PROVIDER_ID;/**
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
 */const QN=T;class YN{constructor(e,n,r=V.app()){var i;QN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const JN="auth-compat";function XN(t){t.INTERNAL.registerComponent(new xt(JN,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ah(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Li.EMAIL_SIGNIN,PASSWORD_RESET:Li.PASSWORD_RESET,RECOVER_EMAIL:Li.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Li.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Li.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Li.VERIFY_EMAIL}},EmailAuthProvider:Br,FacebookAuthProvider:fn,GithubAuthProvider:mn,GoogleAuthProvider:pn,OAuthProvider:ss,SAMLAuthProvider:ql,PhoneAuthProvider:Jf,PhoneMultiFactorGenerator:qw,RecaptchaVerifier:YN,TwitterAuthProvider:gn,Auth:ah,AuthCredential:As,Error:ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(AN,DN)}XN(V);const Cg="@firebase/database",Tg="0.14.4";/**
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
 */let tE="";function nE(t){tE=t}/**
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
 */class ZN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZN(e)}}catch{}return new eb},Xr=rE("localStorage"),lh=rE("sessionStorage");/**
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
 */const ls=new da("@firebase/database"),iE=function(){let t=1;return function(){return t++}}(),sE=function(t){const e=zC(t),n=new BC;n.update(e);const r=n.digest();return Tf.encodeByteArray(r)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_a.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let si=null,kg=!0;const oE=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=te.VERBOSE,si=ls.log.bind(ls),e&&lh.set("logging_enabled",!0)):typeof t=="function"?si=t:(si=null,lh.remove("logging_enabled"))},We=function(...t){if(kg===!0&&(kg=!1,si===null&&lh.get("logging_enabled")===!0&&oE(!0)),si){const e=_a.apply(null,t);si(e)}},va=function(t){return function(...e){We(t,...e)}},ch=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);ls.error(e)},Cn=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw ls.error(e),new Error(e)},rt=function(...t){const e="FIREBASE WARNING: "+_a(...t);ls.warn(e)},tb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ar="[MIN_NAME]",Qn="[MAX_NAME]",ki=function(t,e){if(t===e)return 0;if(t===Ar||e===Qn)return-1;if(e===Ar||t===Qn)return 1;{const n=Rg(t),r=Rg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},rb=function(t,e){return t===e?0:t<e?-1:1},Qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Xf=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ue(e[r]),n+=":",n+=Xf(t[e[r]]);return n+="}",n},aE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lE=function(t){k(!Bc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},ib=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ob(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ab=new RegExp("^-?(0*)\\d{1,10}$"),lb=-2147483648,cb=2147483647,Rg=function(t){if(ab.test(t)){const e=Number(t);if(e>=lb&&e<=cb)return e}return null},xs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ub=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class db{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rt(e)}}class cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cs.OWNER="owner";/**
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
 */const Zf="5",cE="v",uE="s",dE="r",hE="f",fE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pE="ls",mE="p",uh="ac",gE="websocket",_E="long_polling";/**
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
 */class vE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yE(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===gE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_E)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fb(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class pb{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TC(this.counters_)}}/**
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
 */const Ku={},Qu={};function ep(t){const e=t.toString();return Ku[e]||(Ku[e]=new pb),Ku[e]}function mb(t,e){const n=t.toString();return Qu[n]||(Qu[n]=e()),Qu[n]}/**
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
 */class gb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pg="start",_b="close",vb="pLPCommand",yb="pRTLPCB",wE="id",EE="pw",IE="ser",wb="cb",Eb="seg",Ib="ts",Sb="d",Cb="dframe",SE=1870,CE=30,Tb=SE-CE,kb=25e3,Rb=3e4;class dr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=va(e),this.stats_=ep(n),this.urlFn=l=>(this.appCheckToken&&(l[uh]=this.appCheckToken),yE(n,_E,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rb)),nb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tp((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pg)this.id=a,this.password=l;else if(o===_b)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pg]="t",r[IE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[wb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[cE]=Zf,this.transportSessionId&&(r[uE]=this.transportSessionId),this.lastSessionId&&(r[pE]=this.lastSessionId),this.applicationId&&(r[mE]=this.applicationId),this.appCheckToken&&(r[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&fE.test(location.hostname)&&(r[dE]=hE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dr.forceAllow_=!0}static forceDisallow(){dr.forceDisallow_=!0}static isAvailable(){return dr.forceAllow_?!0:!dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ib()&&!sb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ly(n),i=aE(r,Tb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Cb]="t",r[wE]=e,r[EE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iE(),window[vb+this.uniqueCallbackIdentifier]=e,window[yb+this.uniqueCallbackIdentifier]=n,this.myIFrame=tp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wE]=this.myID,e[EE]=this.myPW,e[IE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+CE+r.length<=SE;){const o=this.pendingSegs.shift();r=r+"&"+Eb+i+"="+o.seg+"&"+Ib+i+"="+o.ts+"&"+Sb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(kb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Pb=16384,Nb=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class Bt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=va(this.connId),this.stats_=ep(n),this.connURL=Bt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[cE]=Zf,typeof location<"u"&&location.hostname&&fE.test(location.hostname)&&(o[dE]=hE),n&&(o[uE]=n),r&&(o[pE]=r),i&&(o[uh]=i),s&&(o[mE]=s),yE(e,gE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xr.set("previous_websocket_failure",!0);try{let r;jy(),this.mySock=new Jl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!Bt.forceDisallow_}static previouslyFailed(){return Xr.isInMemoryStorage||Xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=zo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=aE(n,Pb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
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
 */class ws{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dr,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bt&&Bt.isAvailable();let r=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Bt];else{const i=this.transports_=[];for(const s of ws.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ws.globalTransportInitialized_=!1;/**
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
 */const bb=6e4,Ab=5e3,Db=10*1024,xb=100*1024,Yu="t",Ng="d",Ob="s",bg="r",Lb="e",Ag="o",Dg="a",xg="n",Og="p",Ub="h";class Mb{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=va("c:"+this.id+":"),this.transportManager_=new ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Db?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yu in e){const n=e[Yu];n===Dg?this.upgradeIfSecondaryHealthy_():n===bg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ag&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qs("t",e),r=Qs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qs("t",e),r=Qs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qs(Yu,e);if(Ng in e){const r=e[Ng];if(n===Ub){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ob?this.onConnectionShutdown_(r):n===bg?this.onReset_(r):n===Lb?ch("Server Error: "+r):n===Ag?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ch("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zf!==r&&rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ab))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Og,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class TE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kE{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Xl extends kE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Lg=32,Ug=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ee("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dr(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Fb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function RE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return lt(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bb(t,e){const n=Yo(t,0),r=Yo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ki(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rp(t,e){if(Dr(t)!==Dr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dr(t)>Dr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jb{constructor(e,n){this.errorPrefix_=n,this.parts_=Yo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nc(this.parts_[r]);PE(this)}}function $b(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nc(e),PE(t)}function zb(t){const e=t.parts_.pop();t.byteLength_-=Nc(e),t.parts_.length>0&&(t.byteLength_-=1)}function PE(t){if(t.byteLength_>Ug)throw new Error(t.errorPrefix_+"has a key path longer than "+Ug+" bytes ("+t.byteLength_+").");if(t.parts_.length>Lg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lg+") or object contains a cycle "+qr(t))}function qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ip extends kE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ip}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ys=1e3,Wb=60*5*1e3,Mg=30*1e3,Vb=1.3,Gb=3e4,Hb="server_kill",Fg=3;class $n extends TE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=Wb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ip.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ue(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _t,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const r=hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ch("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gb&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Mb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{rt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hb)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&rt(u),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wl(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fg&&(this.reconnectDelay_=Mg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tE.replace(/\./g,"-")]=1,Rf()?e["framework.cordova"]=1:Pc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return Wl(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Ar,e),i=new K(Ar,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
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
 */let Ka;class NE extends jc{static get __EMPTY_NODE(){return Ka}static set __EMPTY_NODE(e){Ka=e}compare(e,n){return ki(e.name,n.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Qn,Ka)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ka)}toString(){return".key"}}const En=new NE;/**
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
 */class Qa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??yt.EMPTY_NODE,this.right=s??yt.EMPTY_NODE}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ze.RED=!0;ze.BLACK=!1;class qb{copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qa(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new qb;/**
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
 */function Kb(t,e){return ki(t.name,e.name)}function sp(t,e){return ki(t,e)}/**
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
 */let dh;function Qb(t){dh=t}const bE=function(t){return typeof t=="number"?"number:"+lE(t):"string:"+t},AE=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else k(t===dh||t.isEmpty(),"priority of unexpected type.");k(t===dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bg;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AE(this.priorityNode_)}static set __childrenNodeConstructor(e){Bg=e}static get __childrenNodeConstructor(){return Bg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:H(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lE(this.value_):e+=this.value_,this.lazyHash_=sE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let DE,xE;function Yb(t){DE=t}function Jb(t){xE=t}class Xb extends jc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ki(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Qn,new Be("[PRIORITY-POST]",xE))}makePost(e,n){const r=DE(e);return new K(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const de=new Xb;/**
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
 */const Zb=Math.log(2);class e1{constructor(e){const n=s=>parseInt(Math.log(s)/Zb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new ze(h,u.node,ze.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),y=i(g+1,c);return u=t[g],h=n?n(u):u,new ze(h,u.node,ze.BLACK,_,y)}},s=function(l){let c=null,d=null,u=t.length;const h=function(_,y){const I=u-_,p=u;u-=_;const f=i(I+1,p),m=t[I],v=n?n(m):m;g(new ze(v,m.node,y,null,f))},g=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));y?h(I,ze.BLACK):(h(I,ze.BLACK),h(I,ze.RED))}return d},o=new e1(t.length),a=s(o);return new yt(r||e,a)};/**
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
 */let Ju;const Ui={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Ui&&de,"ChildrenNode.ts has not been loaded"),Ju=Ju||new Mn({".priority":Ui},{".priority":de}),Ju}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==En,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Zl(r,e.getCompare()):a=Ui;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Mn(d,c)}addToIndexes(e,n){const r=Vl(this.indexes_,(i,s)=>{const o=hi(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zl(a,o.getCompare())}else return Ui;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vl(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
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
 */let Js;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AE(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Js||(Js=new M(new yt(sp),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Js}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Js:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Js:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{k(H(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bE(this.getPriority().val())+":"),this.forEachChild(de,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ya?-1:0}withIndex(e){if(e===En||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===En||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(de),i=n.getIterator(de);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===En?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class t1 extends M{constructor(){super(new yt(sp),M.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const ya=new t1;Object.defineProperties(K,{MIN:{value:new K(Ar,M.EMPTY_NODE)},MAX:{value:new K(Qn,ya)}});NE.__EMPTY_NODE=M.EMPTY_NODE;Be.__childrenNodeConstructor=M;Qb(ya);Jb(ya);/**
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
 */const n1=!0;function Ee(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Ee(e))}if(!(t instanceof Array)&&n1){const n=[];let r=!1;if(Ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=Zl(n,Kb,o=>o.name,sp);if(r){const o=Zl(n,de.getCompare());return new M(s,Ee(e),new Mn({".priority":o},{".priority":de}))}else return new M(s,Ee(e),Mn.Default)}else{let n=M.EMPTY_NODE;return Ge(t,(r,i)=>{if(Dt(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}Yb(Ee);/**
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
 */class op extends jc{constructor(e){super(),this.indexPath_=e,k(!q(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ki(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,ya);return new K(Qn,e)}toString(){return Yo(this.indexPath_,0).join("/")}}/**
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
 */class r1 extends jc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ki(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=Ee(e);return new K(n,r)}toString(){return".value"}}const ap=new r1;/**
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
 */function OE(t){return{type:"value",snapshotNode:t}}function Es(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function i1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Jo(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Es(n,r)):o.trackChildChange(Xo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(de,(i,s)=>{n.hasChild(i)||r.trackChildChange(Jo(i,s))}),n.isLeafNode()||n.forEachChild(de,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Xo(i,s,o))}else r.trackChildChange(Es(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zo{constructor(e){this.indexedFilter_=new lp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zo.getStartPost_(e),this.endPost_=Zo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class s1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Zo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new K(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Xo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Jo(n,u));const y=a.updateImmediateChild(n,M.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Es(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Jo(c.name,c.node)),s.trackChildChange(Es(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class $c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ar}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new $c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function o1(t){return t.loadsAllData()?new lp(t.getIndex()):t.hasLimit()?new s1(t):new Zo(t)}function a1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function l1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function hh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function c1(t,e,n){let r;return t.index_===En||n?r=hh(t,e,n):r=hh(t,e,Qn),r.startAfterSet_=!0,r}function fh(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function u1(t,e,n){let r;return t.index_===En||n?r=fh(t,e,n):r=fh(t,e,Ar),r.endBeforeSet_=!0,r}function zc(t,e){const n=t.copy();return n.index_=e,n}function jg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===ap?n="$value":t.index_===En?n="$key":(k(t.index_ instanceof op,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $g(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class ec extends TE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=va("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ec.getListenId_(e,r),a={};this.listens_[o]=a;const l=jg(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),hi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=ec.getListenId_(e,n);delete this.listens_[r]}get(e){const n=jg(e._queryParams),r=e._path.toString(),i=new _t;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zo(a.responseText)}catch{rt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&rt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class d1{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tc(){return{value:null,children:new Map}}function Os(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,tc());const i=t.children.get(r);e=ie(e),Os(i,e,n)}}function ph(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(de,(r,i)=>{Os(t,new ee(r),i)}),ph(t,e)}}else if(t.children.size>0){const n=H(e);return e=ie(e),t.children.has(n)&&ph(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function mh(t,e,n){t.value!==null?n(e,t.value):h1(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);mh(i,s,n)})}function h1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class f1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const zg=10*1e3,p1=30*1e3,m1=5*60*1e3;class g1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new f1(e);const r=zg+(p1-zg)*Math.random();yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&Dt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*m1))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function cp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function up(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=cp()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new nc(Z(),n,this.revert)}}else return k(H(this.path)===e,"operationForChild called for unrelated child."),new nc(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class ea{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ea(this.source,Z()):new ea(this.source,ie(this.path))}}/**
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
 */class _i{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return q(this.path)?new _i(this.source,Z(),this.snap.getImmediateChild(e)):new _i(this.source,ie(this.path),this.snap)}}/**
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
 */class Is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new _i(this.source,Z(),n.value):new Is(this.source,Z(),n)}else return k(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Is(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function v1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(i1(o.childName,o.snapshotNode))}),Xs(t,i,"child_removed",e,r,n),Xs(t,i,"child_added",e,r,n),Xs(t,i,"child_moved",s,r,n),Xs(t,i,"child_changed",e,r,n),Xs(t,i,"value",e,r,n),i}function Xs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>w1(t,a,l)),o.forEach(a=>{const l=y1(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function y1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function w1(t,e,n){if(e.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wc(t,e){return{eventCache:t,serverCache:e}}function wo(t,e,n,r){return Wc(new xr(e,n,r),t.serverCache)}function LE(t,e,n,r){return Wc(t.eventCache,new xr(e,n,r))}function rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xu;const E1=()=>(Xu||(Xu=new yt(rb)),Xu);class ce{constructor(e,n=E1()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Ge(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ie(e),n);return s!=null?{path:ye(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ie(e)):new ce(null)}}set(e,n){if(q(e))return new ce(n,this.children);{const r=H(e),s=(this.children.get(r)||new ce(null)).set(ie(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ie(e)):null}}setTree(e,n){if(q(e))return n;{const r=H(e),s=(this.children.get(r)||new ce(null)).setTree(ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ie(e),ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ie(e),ye(n,i),r):new ce(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new ce(null))}}function Eo(t,e,n){if(q(e))return new on(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=lt(i,e);return s=s.updateChild(o,n),new on(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new on(s)}}}function gh(t,e,n){let r=t;return Ge(n,(i,s)=>{r=Eo(r,ye(e,i),s)}),r}function Wg(t,e){if(q(e))return on.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new on(n)}}function _h(t,e){return Ri(t,e)!=null}function Ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Vg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Sr(t,e){if(q(e))return t;{const n=Ri(t,e);return n!=null?new on(new ce(n)):new on(t.writeTree_.subtree(e))}}function vh(t){return t.writeTree_.isEmpty()}function Ss(t,e){return UE(Z(),t.writeTree_,e)}function UE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=UE(ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ye(t,".priority"),r)),n}}/**
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
 */function Vc(t,e){return jE(e,t)}function I1(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Eo(t.visibleWrites,e,n)),t.lastWriteId=r}function S1(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=gh(t.visibleWrites,e,n),t.lastWriteId=r}function C1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function T1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&k1(a,r.path)?i=!1:$t(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return R1(t),!0;if(r.snap)t.visibleWrites=Wg(t.visibleWrites,r.path);else{const a=r.children;Ge(a,l=>{t.visibleWrites=Wg(t.visibleWrites,ye(r.path,l))})}return!0}else return!1}function k1(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(ye(t.path,n),e))return!0;return!1}function R1(t){t.visibleWrites=ME(t.allWrites,P1,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function P1(t){return t.visible}function ME(t,e,n){let r=on.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)$t(n,o)?(a=lt(n,o),r=Eo(r,a,s.snap)):$t(o,n)&&(a=lt(o,n),r=Eo(r,Z(),s.snap.getChild(a)));else if(s.children){if($t(n,o))a=lt(n,o),r=gh(r,a,s.children);else if($t(o,n))if(a=lt(o,n),q(a))r=gh(r,Z(),s.children);else{const l=hi(s.children,H(a));if(l){const c=l.getChild(ie(a));r=Eo(r,Z(),c)}}}else throw Ps("WriteRecord should have .snap or .children")}}return r}function FE(t,e,n,r,i){if(!r&&!i){const s=Ri(t.visibleWrites,e);if(s!=null)return s;{const o=Sr(t.visibleWrites,e);if(vh(o))return n;if(n==null&&!_h(o,Z()))return null;{const a=n||M.EMPTY_NODE;return Ss(o,a)}}}else{const s=Sr(t.visibleWrites,e);if(!i&&vh(s))return n;if(!i&&n==null&&!_h(s,Z()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&($t(c.path,e)||$t(e,c.path))},a=ME(t.allWrites,o,e),l=n||M.EMPTY_NODE;return Ss(a,l)}}}function N1(t,e,n){let r=M.EMPTY_NODE;const i=Ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Sr(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=Ss(Sr(s,new ee(o)),a);r=r.updateImmediateChild(o,l)}),Vg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Sr(t.visibleWrites,e);return Vg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function b1(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(_h(t.visibleWrites,s))return null;{const o=Sr(t.visibleWrites,s);return vh(o)?i.getChild(n):Ss(o,i.getChild(n))}}function A1(t,e,n,r){const i=ye(e,n),s=Ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Sr(t.visibleWrites,i);return Ss(o,r.getNode().getImmediateChild(n))}else return null}function D1(t,e){return Ri(t.visibleWrites,e)}function x1(t,e,n,r,i,s,o){let a;const l=Sr(t.visibleWrites,e),c=Ri(l,Z());if(c!=null)a=c;else if(n!=null)a=Ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function O1(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function ic(t,e,n,r){return FE(t.writeTree,t.treePath,e,n,r)}function hp(t,e){return N1(t.writeTree,t.treePath,e)}function Gg(t,e,n,r){return b1(t.writeTree,t.treePath,e,n,r)}function sc(t,e){return D1(t.writeTree,ye(t.treePath,e))}function L1(t,e,n,r,i,s){return x1(t.writeTree,t.treePath,e,n,r,i,s)}function fp(t,e,n){return A1(t.writeTree,t.treePath,e,n)}function BE(t,e){return jE(ye(t.treePath,e),t.writeTree)}function jE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class U1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Xo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Jo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Es(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Xo(r,e.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class M1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $E=new M1;class pp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vi(this.viewCache_),s=L1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function F1(t){return{filter:t}}function B1(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function j1(t,e,n,r,i){const s=new U1;let o,a;if(n.type===nn.OVERWRITE){const c=n;c.source.fromUser?o=yh(t,e,c.path,c.snap,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=oc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===nn.MERGE){const c=n;c.source.fromUser?o=z1(t,e,c.path,c.children,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wh(t,e,c.path,c.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const c=n;c.revert?o=G1(t,e,c.path,r,i,s):o=W1(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=V1(t,e,n.path,r,s);else throw Ps("Unknown operation type: "+n.type);const l=s.getChanges();return $1(e,o,l),{viewCache:o,changes:l}}function $1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(OE(rc(e)))}}function zE(t,e,n,r,i,s){const o=e.eventCache;if(sc(r,n)!=null)return e;{let a,l;if(q(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vi(e),d=c instanceof M?c:M.EMPTY_NODE,u=hp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=ic(r,vi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=H(n);if(c===".priority"){k(Dr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Gg(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=ie(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Gg(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=fp(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return wo(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function oc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=H(n);if(!l.isCompleteForPath(n)&&Dr(n)>1)return e;const _=ie(n),I=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=d.updatePriority(l.getNode(),I):c=d.updateChild(l.getNode(),g,I,_,$E,null)}const u=LE(e,c,l.isFullyInitialized()||q(n),d.filtersNodes()),h=new pp(i,u,s);return zE(t,u,n,i,h,a)}function yh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new pp(i,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wo(e,c,!0,t.filter.filtersNodes());else{const u=H(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=wo(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ie(n),g=a.getNode().getImmediateChild(u);let _;if(q(h))_=r;else{const y=d.getCompleteChild(u);y!=null?np(h)===".priority"&&y.getChild(RE(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=M.EMPTY_NODE}if(g.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),u,_,h,d,o);l=wo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hg(t,e){return t.eventCache.isCompleteForChild(e)}function z1(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ye(n,l);Hg(e,H(d))&&(a=yh(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ye(n,l);Hg(e,H(d))||(a=yh(t,a,d,c,i,s,o))}),a}function qg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function wh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=r:c=new ce(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=qg(t,g,h);l=oc(t,l,new ee(u),_,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),y=qg(t,_,h);l=oc(t,l,new ee(u),y,i,s,o,a)}}),l}function W1(t,e,n,r,i,s,o){if(sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(q(n)){let c=new ce(null);return l.getNode().forEachChild(En,(d,u)=>{c=c.set(new ee(d),u)}),wh(t,e,n,c,i,s,a,o)}else return e}else{let c=new ce(null);return r.foreach((d,u)=>{const h=ye(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),wh(t,e,n,c,i,s,a,o)}}function V1(t,e,n,r,i){const s=e.serverCache,o=LE(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return zE(t,o,n,r,$E,i)}function G1(t,e,n,r,i,s){let o;if(sc(r,n)!=null)return e;{const a=new pp(r,e,i),l=e.eventCache.getNode();let c;if(q(n)||H(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ic(r,vi(e));else{const u=e.serverCache.getNode();k(u instanceof M,"serverChildren would be complete if leaf node"),d=hp(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=H(n);let u=fp(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,ie(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,M.EMPTY_NODE,ie(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ic(r,vi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||sc(r,Z())!=null,wo(e,c,o,t.filter.filtersNodes())}}/**
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
 */class H1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lp(r.getIndex()),s=o1(r);this.processor_=F1(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),d=new xr(l,o.isFullyInitialized(),i.filtersNodes()),u=new xr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wc(u,d),this.eventGenerator_=new _1(this.query_)}get query(){return this.query_}}function q1(t){return t.viewCache_.serverCache.getNode()}function K1(t){return rc(t.viewCache_)}function Q1(t,e){const n=vi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function Kg(t){return t.eventRegistrations_.length===0}function Y1(t,e){t.eventRegistrations_.push(e)}function Qg(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Yg(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(k(vi(t.viewCache_),"We should always have a full cache before handling merges"),k(rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=j1(t.processor_,i,e,n,r);return B1(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,WE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function J1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{r.push(Es(s,o))}),n.isFullyInitialized()&&r.push(OE(n.getNode())),WE(t,r,n.getNode(),e)}function WE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return v1(t.eventGenerator_,e,n,i)}/**
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
 */let ac;class VE{constructor(){this.views=new Map}}function X1(t){k(!ac,"__referenceConstructor has already been defined"),ac=t}function Z1(){return k(ac,"Reference.ts has not been loaded"),ac}function eA(t){return t.views.size===0}function mp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Yg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Yg(o,e,n,r));return s}}function GE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ic(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=hp(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const c=Wc(new xr(a,l,!1),new xr(r,i,!1));return new H1(e,c)}return o}function tA(t,e,n,r,i,s){const o=GE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Y1(o,n),J1(o,n)}function nA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Or(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Qg(c,n,r)),Kg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Qg(l,n,r)),Kg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Or(t)&&s.push(new(Z1())(e._repo,e._path)),{removed:s,events:o}}function HE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cr(t,e){let n=null;for(const r of t.views.values())n=n||Q1(r,e);return n}function qE(t,e){if(e._queryParams.loadsAllData())return Gc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function KE(t,e){return qE(t,e)!=null}function Or(t){return Gc(t)!=null}function Gc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let lc;function rA(t){k(!lc,"__referenceConstructor has already been defined"),lc=t}function iA(){return k(lc,"Reference.ts has not been loaded"),lc}let sA=1;class Jg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=O1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gp(t,e,n,r,i){return I1(t.pendingWriteTree_,e,n,r,i),i?Ls(t,new _i(cp(),e,n)):[]}function oA(t,e,n,r){S1(t.pendingWriteTree_,e,n,r);const i=ce.fromObject(n);return Ls(t,new Is(cp(),e,i))}function hr(t,e,n=!1){const r=C1(t.pendingWriteTree_,e);if(T1(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(Z(),!0):Ge(r.children,o=>{s=s.set(new ee(o),!0)}),Ls(t,new nc(r.path,s,n))}else return[]}function wa(t,e,n){return Ls(t,new _i(up(),e,n))}function aA(t,e,n){const r=ce.fromObject(n);return Ls(t,new Is(up(),e,r))}function lA(t,e){return Ls(t,new ea(up(),e))}function cA(t,e,n){const r=_p(t,n);if(r){const i=vp(r),s=i.path,o=i.queryId,a=lt(s,e),l=new ea(dp(o),a);return yp(t,s,l)}else return[]}function cc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||KE(o,e))){const l=nA(o,e,n,r);eA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,g)=>Or(g));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=hA(h);for(let _=0;_<g.length;++_){const y=g[_],I=y.query,p=XE(t,y);t.listenProvider_.startListening(Io(I),ta(t,I),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Io(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(qc(h));t.listenProvider_.stopListening(Io(h),g)}))}fA(t,c)}return a}function QE(t,e,n,r){const i=_p(t,r);if(i!=null){const s=vp(i),o=s.path,a=s.queryId,l=lt(o,e),c=new _i(dp(a),l,n);return yp(t,o,c)}else return[]}function uA(t,e,n,r){const i=_p(t,r);if(i){const s=vp(i),o=s.path,a=s.queryId,l=lt(o,e),c=ce.fromObject(n),d=new Is(dp(a),l,c);return yp(t,o,d)}else return[]}function Eh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=lt(h,i);s=s||Cr(g,_),o=o||Or(g)});let a=t.syncPointTree_.get(i);a?(o=o||Or(a),s=s||Cr(a,Z())):(a=new VE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=Cr(_,Z());y&&(s=s.updateImmediateChild(g,y))}));const c=KE(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=qc(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=pA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Vc(t.pendingWriteTree_,i);let u=tA(a,e,n,d,s,l);if(!c&&!o&&!r){const h=qE(a,e);u=u.concat(mA(t,e,h))}return u}function Hc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=Cr(a,l);if(c)return c});return FE(i,e,s,n,!0)}function dA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=lt(c,n);r=r||Cr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Cr(i,Z()):(i=new VE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new xr(r,!0,!1):null,a=Vc(t.pendingWriteTree_,e._path),l=GE(i,e,a,s?o.getNode():M.EMPTY_NODE,s);return K1(l)}function Ls(t,e){return YE(e,t.syncPointTree_,null,Vc(t.pendingWriteTree_,Z()))}function YE(t,e,n,r){if(q(t.path))return JE(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Cr(i,Z()));let s=[];const o=H(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=BE(r,o);s=s.concat(YE(a,l,c,d))}return i&&(s=s.concat(mp(i,t,r,n))),s}}function JE(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Cr(i,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=BE(r,o),d=t.operationForChild(o);d&&(s=s.concat(JE(d,a,l,c)))}),i&&(s=s.concat(mp(i,t,r,n))),s}function XE(t,e){const n=e.query,r=ta(t,n);return{hashFn:()=>(q1(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cA(t,n._path,r):lA(t,n._path);{const s=ob(i,n);return cc(t,n,null,s)}}}}function ta(t,e){const n=qc(e);return t.queryToTagMap.get(n)}function qc(t){return t._path.toString()+"$"+t._queryIdentifier}function _p(t,e){return t.tagToQueryMap.get(e)}function vp(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function yp(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Vc(t.pendingWriteTree_,e);return mp(r,n,i,null)}function hA(t){return t.fold((e,n,r)=>{if(n&&Or(n))return[Gc(n)];{let i=[];return n&&(i=HE(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function Io(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iA())(t._repo,t._path):t}function fA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=qc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function pA(){return sA++}function mA(t,e,n){const r=e._path,i=ta(t,e),s=XE(t,n),o=t.listenProvider_.startListening(Io(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Or(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!q(c)&&d&&Or(d))return[Gc(d).query];{let h=[];return d&&(h=h.concat(HE(d).map(g=>g.query))),Ge(u,(g,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Io(d),ta(t,d))}}return o}/**
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
 */class wp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wp(n)}node(){return this.node_}}class Ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Ep(this.syncTree_,n)}node(){return Hc(this.syncTree_,this.path_)}}const gA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xg=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _A(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vA(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_A=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},vA=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ZE=function(t,e,n,r){return Sp(e,new Ep(n,t),r)},Ip=function(t,e,n){return Sp(t,new wp(e),n)};function Sp(t,e,n){const r=t.getPriority().val(),i=Xg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(de,(a,l)=>{const c=Sp(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Cp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Kc(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=H(n);for(;i!==null;){const s=hi(r.node.children,i)||{children:{},childCount:0};r=new Cp(i,r,s),n=ie(n),i=H(n)}return r}function Pi(t){return t.node.value}function Tp(t,e){t.node.value=e,Ih(t)}function e0(t){return t.node.childCount>0}function yA(t){return Pi(t)===void 0&&!e0(t)}function Qc(t,e){Ge(t.node.children,(n,r)=>{e(new Cp(n,t,r))})}function t0(t,e,n,r){n&&!r&&e(t),Qc(t,i=>{t0(i,e,!0,r)}),n&&r&&e(t)}function wA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ea(t){return new ee(t.parent===null?t.name:Ea(t.parent)+"/"+t.name)}function Ih(t){t.parent!==null&&EA(t.parent,t.name,t)}function EA(t,e,n){const r=yA(n),i=Dt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ih(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ih(t))}/**
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
 */const IA=/[\[\].#$\/\u0000-\u001F\u007F]/,SA=/[\[\].#$\u0000-\u001F\u007F]/,Zu=10*1024*1024,Yc=function(t){return typeof t=="string"&&t.length!==0&&!IA.test(t)},n0=function(t){return typeof t=="string"&&t.length!==0&&!SA.test(t)},CA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n0(t)},na=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bc(t)||t&&typeof t=="object"&&Dt(t,".sv")},Tn=function(t,e,n,r){r&&e===void 0||Ia(St(t,"value"),e,n)},Ia=function(t,e,n){const r=n instanceof ee?new jb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+qr(r)+" with contents = "+e.toString());if(Bc(e))throw new Error(t+"contains "+e.toString()+" "+qr(r));if(typeof e=="string"&&e.length>Zu/3&&Nc(e)>Zu)throw new Error(t+"contains a string greater than "+Zu+" utf8 bytes "+qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Yc(o)))throw new Error(t+" contains an invalid key ("+o+") "+qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$b(r,o),Ia(t,a,r),zb(r)}),i&&s)throw new Error(t+' contains ".value" child '+qr(r)+" in addition to actual children.")}},TA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Yo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Yc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Bb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&$t(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},r0=function(t,e,n,r){if(r&&e===void 0)return;const i=St(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ge(e,(o,a)=>{const l=new ee(o);if(Ia(i,a,ye(n,l)),np(l)===".priority"&&!na(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),TA(i,s)},kp=function(t,e,n){if(!(n&&e===void 0)){if(Bc(e))throw new Error(St(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!na(e))throw new Error(St(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Sa=function(t,e,n,r){if(!(r&&n===void 0)&&!Yc(n))throw new Error(St(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ra=function(t,e,n,r){if(!(r&&n===void 0)&&!n0(n))throw new Error(St(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ra(t,e,n,r)},zt=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},i0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CA(n))throw new Error(St(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function s0(t,e,n){Jc(t,n),o0(t,r=>rp(r,e))}function Ot(t,e,n){Jc(t,n),o0(t,r=>$t(r,e)||$t(e,r))}function o0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(PA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();si&&We("event: "+n.toString()),xs(r)}}}/**
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
 */const a0="repo_interrupt",NA=25;class bA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tc(),this.transactionQueueTree_=new Cp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AA(t,e,n){if(t.stats_=ep(t.repoInfo_),t.forceRestClient_||ub())t.server_=new ec(t.repoInfo_,(r,i,s,o)=>{Zg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>e_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{Zg(t,r,i,s,o)},r=>{e_(t,r)},r=>{DA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=mb(t.repoInfo_,()=>new g1(t.stats_,t.server_)),t.infoData_=new d1,t.infoSyncTree_=new Jg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=wa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rp(t,"connected",!1),t.serverSyncTree_=new Jg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ot(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function l0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ca(t){return gA({timestamp:l0(t)})}function Zg(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Vl(n,c=>Ee(c));o=uA(t.serverSyncTree_,s,l,i)}else{const l=Ee(n);o=QE(t.serverSyncTree_,s,l,i)}else if(r){const l=Vl(n,c=>Ee(c));o=aA(t.serverSyncTree_,s,l)}else{const l=Ee(n);o=wa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Cs(t,s)),Ot(t.eventQueue_,a,o)}function e_(t,e){Rp(t,"connected",e),e===!1&&LA(t)}function DA(t,e){Ge(e,(n,r)=>{Rp(t,n,r)})}function Rp(t,e,n){const r=new ee("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=wa(t.infoSyncTree_,r,i);Ot(t.eventQueue_,r,s)}function Xc(t){return t.nextWriteId_++}function xA(t,e,n){const r=dA(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ee(i).withIndex(e._queryParams.getIndex());Eh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=wa(t.serverSyncTree_,e._path,s);else{const a=ta(t.serverSyncTree_,e);o=QE(t.serverSyncTree_,e._path,s,a)}return Ot(t.eventQueue_,e._path,o),cc(t.serverSyncTree_,e,n,null,!0),s},i=>(Us(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function Pp(t,e,n,r,i){Us(t,"set",{path:e.toString(),value:n,priority:r});const s=Ca(t),o=Ee(n,r),a=Hc(t.serverSyncTree_,e),l=Ip(o,a,s),c=Xc(t),d=gp(t.serverSyncTree_,e,l,c,!0);Jc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||rt("set at "+e+" failed: "+h);const y=hr(t.serverSyncTree_,c,!_);Ot(t.eventQueue_,e,y),Lr(t,i,h,g)});const u=bp(t,e);Cs(t,u),Ot(t.eventQueue_,u,[])}function OA(t,e,n,r){Us(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ca(t),o={};if(Ge(n,(a,l)=>{i=!1,o[a]=ZE(ye(e,a),Ee(l),t.serverSyncTree_,s)}),i)We("update() called with empty data.  Don't do anything."),Lr(t,r,"ok",void 0);else{const a=Xc(t),l=oA(t.serverSyncTree_,e,o,a);Jc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||rt("update at "+e+" failed: "+c);const h=hr(t.serverSyncTree_,a,!u),g=h.length>0?Cs(t,e):e;Ot(t.eventQueue_,g,h),Lr(t,r,c,d)}),Ge(n,c=>{const d=bp(t,ye(e,c));Cs(t,d)}),Ot(t.eventQueue_,e,[])}}function LA(t){Us(t,"onDisconnectEvents");const e=Ca(t),n=tc();mh(t.onDisconnect_,Z(),(i,s)=>{const o=ZE(i,s,t.serverSyncTree_,e);Os(n,i,o)});let r=[];mh(n,Z(),(i,s)=>{r=r.concat(wa(t.serverSyncTree_,i,s));const o=bp(t,i);Cs(t,o)}),t.onDisconnect_=tc(),Ot(t.eventQueue_,Z(),r)}function UA(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&ph(t.onDisconnect_,e),Lr(t,n,r,i)})}function t_(t,e,n,r){const i=Ee(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Os(t.onDisconnect_,e,i),Lr(t,r,s,o)})}function MA(t,e,n,r,i){const s=Ee(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Os(t.onDisconnect_,e,s),Lr(t,i,o,a)})}function FA(t,e,n,r){if(Wl(n)){We("onDisconnect().update() called with empty data.  Don't do anything."),Lr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Ge(n,(o,a)=>{const l=Ee(a);Os(t.onDisconnect_,ye(e,o),l)}),Lr(t,r,i,s)})}function BA(t,e,n){let r;H(e._path)===".info"?r=Eh(t.infoSyncTree_,e,n):r=Eh(t.serverSyncTree_,e,n),s0(t.eventQueue_,e._path,r)}function Sh(t,e,n){let r;H(e._path)===".info"?r=cc(t.infoSyncTree_,e,n):r=cc(t.serverSyncTree_,e,n),s0(t.eventQueue_,e._path,r)}function c0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(a0)}function jA(t){t.persistentConnection_&&t.persistentConnection_.resume(a0)}function Us(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function Lr(t,e,n,r){e&&xs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function $A(t,e,n,r,i,s){Us(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:iE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Np(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ia("transaction failed: Data returned ",l,o.path),o.status=0;const c=Kc(t.transactionQueueTree_,e),d=Pi(c)||[];d.push(o),Tp(c,d);let u;typeof l=="object"&&l!==null&&Dt(l,".priority")?(u=hi(l,".priority"),k(na(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Hc(t.serverSyncTree_,e)||M.EMPTY_NODE).getPriority().val();const h=Ca(t),g=Ee(l,u),_=Ip(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=Xc(t);const y=gp(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Ot(t.eventQueue_,e,y),Zc(t,t.transactionQueueTree_)}}function Np(t,e,n){return Hc(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Zc(t,e=t.transactionQueueTree_){if(e||eu(t,e),Pi(e)){const n=d0(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zA(t,Ea(e),n)}else e0(e)&&Qc(e,n=>{Zc(t,n)})}function zA(t,e,n){const r=n.map(c=>c.currentWriteId),i=Np(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=lt(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Us(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(hr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();eu(t,Kc(t.transactionQueueTree_,e)),Zc(t,t.transactionQueueTree_),Ot(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)xs(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{rt("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Cs(t,e)}},o)}function Cs(t,e){const n=u0(t,e),r=Ea(n),i=d0(t,n);return WA(t,i,r),r}function WA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let d=!1,u;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NA)d=!0,u="maxretry",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Np(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Ia("transaction failed: Data returned ",g,l.path);let _=Ee(g);typeof g=="object"&&g!=null&&Dt(g,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,p=Ca(t),f=Ip(_,h,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=Xc(t),o.splice(o.indexOf(I),1),i=i.concat(gp(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(hr(t.serverSyncTree_,I,!0))}else d=!0,u="nodata",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0))}Ot(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}eu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xs(r[a]);Zc(t,t.transactionQueueTree_)}function u0(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&Pi(r)===void 0;)r=Kc(r,n),e=ie(e),n=H(e);return r}function d0(t,e){const n=[];return h0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function h0(t,e,n){const r=Pi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qc(e,i=>{h0(t,i,n)})}function eu(t,e){const n=Pi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Tp(e,n.length>0?n:void 0)}Qc(e,r=>{eu(t,r)})}function bp(t,e){const n=Ea(u0(t,e)),r=Kc(t.transactionQueueTree_,e);return wA(r,i=>{ed(t,i)}),ed(t,r),t0(r,i=>{ed(t,i)}),n}function ed(t,e){const n=Pi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tp(e,void 0):n.length=s+1,Ot(t.eventQueue_,Ea(e),i);for(let o=0;o<r.length;o++)xs(r[o])}}/**
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
 */function VA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ch=function(t,e){const n=HA(t),r=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},HA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=VA(t.substring(d,u)));const h=GA(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const n_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=n_.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=n_.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class f0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class p0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ap{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let KA=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new _t;return UA(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){zt("OnDisconnect.remove",this._path);const e=new _t;return t_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){zt("OnDisconnect.set",this._path),Tn("OnDisconnect.set",e,this._path,!1);const n=new _t;return t_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){zt("OnDisconnect.setWithPriority",this._path),Tn("OnDisconnect.setWithPriority",e,this._path,!1),kp("OnDisconnect.setWithPriority",n,!1);const r=new _t;return MA(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){zt("OnDisconnect.update",this._path),r0("OnDisconnect.update",e,this._path,!1);const n=new _t;return FA(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class Ct{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:np(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=$g(this._queryParams),n=Xf(e);return n==="{}"?"default":n}get _queryObject(){return $g(this._queryParams)}isEqual(e){if(e=L(e),!(e instanceof Ct))return!1;const n=this._repo===e._repo,r=rp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fb(this._path)}}function tu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function jr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===En){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Ar)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Qn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===de){if(e!=null&&!na(e)||n!=null&&!na(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(k(t.getIndex()instanceof op||t.getIndex()===ap,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function nu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Qt extends Ct{constructor(e,n){super(e,n,new $c,!1)}get parent(){const e=RE(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let ru=class Th{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=yi(this.ref,e);return new Th(this._node.getChild(n),r,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Th(i,yi(this.ref,r),de)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function m0(t,e){return t=L(t),t._checkNotDeleted("ref"),e!==void 0?yi(t._root,e):t._root}function r_(t,e){t=L(t),t._checkNotDeleted("refFromURL");const n=Ch(e,t._repo.repoInfo_.nodeAdmin);i0("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Cn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),m0(t,n.path.toString())}function yi(t,e){return t=L(t),H(t._path)===null?kA("child","path",e,!1):ra("child","path",e,!1),new Qt(t._repo,ye(t._path,e))}function QA(t,e){t=L(t),zt("push",t._path),Tn("push",e,t._path,!0);const n=l0(t._repo),r=qA(n),i=yi(t,r),s=yi(t,r);let o;return e!=null?o=Dp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function YA(t){return zt("remove",t._path),Dp(t,null)}function Dp(t,e){t=L(t),zt("set",t._path),Tn("set",e,t._path,!1);const n=new _t;return Pp(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function JA(t,e){t=L(t),zt("setPriority",t._path),kp("setPriority",e,!1);const n=new _t;return Pp(t._repo,ye(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function XA(t,e,n){if(zt("setWithPriority",t._path),Tn("setWithPriority",e,t._path,!1),kp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new _t;return Pp(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function ZA(t,e){r0("update",e,t._path,!1);const n=new _t;return OA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function eD(t){t=L(t);const e=new Ap(()=>{}),n=new Ta(e);return xA(t._repo,t,n).then(r=>new ru(r,new Qt(t._repo,t._path),t._queryParams.getIndex()))}class Ta{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new f0("value",this,new ru(e.snapshotNode,new Qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new p0(this,e,n):null}matches(e){return e instanceof Ta?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class iu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new p0(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=yi(new Qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new f0(e.type,this,new ru(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof iu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ka(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{Sh(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ap(n,s||void 0),a=e==="value"?new Ta(o):new iu(e,o);return BA(t._repo,t,a),()=>Sh(t._repo,t,a)}function kh(t,e,n,r){return ka(t,"value",e,n,r)}function i_(t,e,n,r){return ka(t,"child_added",e,n,r)}function s_(t,e,n,r){return ka(t,"child_changed",e,n,r)}function o_(t,e,n,r){return ka(t,"child_moved",e,n,r)}function a_(t,e,n,r){return ka(t,"child_removed",e,n,r)}function l_(t,e,n){let r=null;const i=n?new Ap(n):null;e==="value"?r=new Ta(i):e&&(r=new iu(e,i)),Sh(t._repo,t,r)}class cn{}class g0 extends cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Tn("endAt",this._value,e._path,!0);const n=fh(e._queryParams,this._value,this._key);if(nu(n),jr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ct(e._repo,e._path,n,e._orderByCalled)}}function tD(t,e){return Sa("endAt","key",e,!0),new g0(t,e)}class nD extends cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Tn("endBefore",this._value,e._path,!1);const n=u1(e._queryParams,this._value,this._key);if(nu(n),jr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ct(e._repo,e._path,n,e._orderByCalled)}}function rD(t,e){return Sa("endBefore","key",e,!0),new nD(t,e)}class _0 extends cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Tn("startAt",this._value,e._path,!0);const n=hh(e._queryParams,this._value,this._key);if(nu(n),jr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ct(e._repo,e._path,n,e._orderByCalled)}}function iD(t=null,e){return Sa("startAt","key",e,!0),new _0(t,e)}class sD extends cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Tn("startAfter",this._value,e._path,!1);const n=c1(e._queryParams,this._value,this._key);if(nu(n),jr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ct(e._repo,e._path,n,e._orderByCalled)}}function oD(t,e){return Sa("startAfter","key",e,!0),new sD(t,e)}class aD extends cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ct(e._repo,e._path,a1(e._queryParams,this._limit),e._orderByCalled)}}function lD(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new aD(t)}class cD extends cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ct(e._repo,e._path,l1(e._queryParams,this._limit),e._orderByCalled)}}function uD(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new cD(t)}class dD extends cn{constructor(e){super(),this._path=e}_apply(e){tu(e,"orderByChild");const n=new ee(this._path);if(q(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new op(n),i=zc(e._queryParams,r);return jr(i),new Ct(e._repo,e._path,i,!0)}}function hD(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ra("orderByChild","path",t,!1),new dD(t)}class fD extends cn{_apply(e){tu(e,"orderByKey");const n=zc(e._queryParams,En);return jr(n),new Ct(e._repo,e._path,n,!0)}}function pD(){return new fD}class mD extends cn{_apply(e){tu(e,"orderByPriority");const n=zc(e._queryParams,de);return jr(n),new Ct(e._repo,e._path,n,!0)}}function gD(){return new mD}class _D extends cn{_apply(e){tu(e,"orderByValue");const n=zc(e._queryParams,ap);return jr(n),new Ct(e._repo,e._path,n,!0)}}function vD(){return new _D}class yD extends cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Tn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new g0(this._value,this._key)._apply(new _0(this._value,this._key)._apply(e))}}function wD(t,e){return Sa("equalTo","key",e,!0),new yD(t,e)}function Xt(t,...e){let n=L(t);for(const r of e)n=r._apply(n);return n}X1(Qt);rA(Qt);/**
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
 */const ED="FIREBASE_DATABASE_EMULATOR_HOST",Rh={};let ID=!1;function SD(t,e,n,r){t.repoInfo_=new vE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function v0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ch(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ED]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ch(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new cs(cs.OWNER):new hb(t.name,t.options,e);i0("Invalid Firebase Database URL",o),q(o.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=TD(a,t,d,new db(t.name,n));return new kD(u,t)}function CD(t,e){const n=Rh[e];(!n||n[t.key]!==t)&&Cn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),c0(t),delete n[t.key]}function TD(t,e,n,r){let i=Rh[e.name];i||(i={},Rh[e.name]=i);let s=i[t.toURLString()];return s&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bA(t,ID,n,r),i[t.toURLString()]=s,s}let kD=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}};function y0(){ws.IS_TRANSPORT_INITIALIZED&&rt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function RD(){y0(),dr.forceDisallow()}function PD(){y0(),Bt.forceDisallow(),dr.forceAllow()}function ND(t,e,n,r={}){t=L(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new cs(cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:My(r.mockUserToken,t.app.options.projectId);s=new cs(o)}SD(i,e,n,s)}function bD(t){t=L(t),t._checkNotDeleted("goOffline"),c0(t._repo)}function AD(t){t=L(t),t._checkNotDeleted("goOnline"),jA(t._repo)}function DD(t,e){oE(t,e)}/**
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
 */function xD(t){nE(Jn),qn(new xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return v0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Gt(Cg,Tg,t),Gt(Cg,Tg,"esm2017")}/**
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
 */const OD={".sv":"timestamp"};function LD(){return OD}function UD(t){return{".sv":{increment:t}}}/**
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
 */let MD=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function FD(t,e,n){var r;if(t=L(t),zt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new _t,o=(l,c,d)=>{let u=null;l?s.reject(l):(u=new ru(d,new Qt(t._repo,t._path),de),s.resolve(new MD(c,u)))},a=kh(t,()=>{});return $A(t._repo,t._path,e,o,a,i),s.promise}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xD();const BD="@firebase/database-compat",jD="0.3.4";/**
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
 */const $D=new da("@firebase/database-compat"),w0=function(t){const e="FIREBASE WARNING: "+t;$D.warn(e)};/**
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
 */const zD=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(St(t,e)+"must be a boolean.")},WD=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(St(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class VD{constructor(e){this._delegate=e}cancel(e){F("OnDisconnect.cancel",0,1,arguments.length),$e("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){F("OnDisconnect.remove",0,1,arguments.length),$e("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){F("OnDisconnect.set",1,2,arguments.length),$e("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){F("OnDisconnect.setWithPriority",2,3,arguments.length),$e("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(F("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,w0("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}$e("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class GD{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return F("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Tr{constructor(e,n){this._database=e,this._delegate=n}val(){return F("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return F("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return F("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return F("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return F("DataSnapshot.child",0,1,arguments.length),e=String(e),ra("DataSnapshot.child","path",e,!1),new Tr(this._database,this._delegate.child(e))}hasChild(e){return F("DataSnapshot.hasChild",1,1,arguments.length),ra("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return F("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return F("DataSnapshot.forEach",1,1,arguments.length),$e("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Tr(this._database,n)))}hasChildren(){return F("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return F("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return F("DataSnapshot.ref",0,0,arguments.length),new Zr(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class qe{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;F("Query.on",2,4,arguments.length),$e("Query.on","callback",n,!1);const o=qe.getCancelAndContextArgs_("Query.on",r,i),a=(c,d)=>{n.call(o.context,new Tr(this.database,c),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return kh(this._delegate,a,l),n;case"child_added":return i_(this._delegate,a,l),n;case"child_removed":return a_(this._delegate,a,l),n;case"child_changed":return s_(this._delegate,a,l),n;case"child_moved":return o_(this._delegate,a,l),n;default:throw new Error(St("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(F("Query.off",0,3,arguments.length),WD("Query.off",e,!0),$e("Query.off","callback",n,!0),Ym("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,l_(this._delegate,e,i)}else l_(this._delegate,e)}get(){return eD(this._delegate).then(e=>new Tr(this.database,e))}once(e,n,r,i){F("Query.once",1,4,arguments.length),$e("Query.once","callback",n,!0);const s=qe.getCancelAndContextArgs_("Query.once",r,i),o=new _t,a=(c,d)=>{const u=new Tr(this.database,c);n&&n.call(s.context,u,d),o.resolve(u)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":kh(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":i_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":a_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":s_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":o_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(St("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return F("Query.limitToFirst",1,1,arguments.length),new qe(this.database,Xt(this._delegate,lD(e)))}limitToLast(e){return F("Query.limitToLast",1,1,arguments.length),new qe(this.database,Xt(this._delegate,uD(e)))}orderByChild(e){return F("Query.orderByChild",1,1,arguments.length),new qe(this.database,Xt(this._delegate,hD(e)))}orderByKey(){return F("Query.orderByKey",0,0,arguments.length),new qe(this.database,Xt(this._delegate,pD()))}orderByPriority(){return F("Query.orderByPriority",0,0,arguments.length),new qe(this.database,Xt(this._delegate,gD()))}orderByValue(){return F("Query.orderByValue",0,0,arguments.length),new qe(this.database,Xt(this._delegate,vD()))}startAt(e=null,n){return F("Query.startAt",0,2,arguments.length),new qe(this.database,Xt(this._delegate,iD(e,n)))}startAfter(e=null,n){return F("Query.startAfter",0,2,arguments.length),new qe(this.database,Xt(this._delegate,oD(e,n)))}endAt(e=null,n){return F("Query.endAt",0,2,arguments.length),new qe(this.database,Xt(this._delegate,tD(e,n)))}endBefore(e=null,n){return F("Query.endBefore",0,2,arguments.length),new qe(this.database,Xt(this._delegate,rD(e,n)))}equalTo(e,n){return F("Query.equalTo",1,2,arguments.length),new qe(this.database,Xt(this._delegate,wD(e,n)))}toString(){return F("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return F("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(F("Query.isEqual",1,1,arguments.length),!(e instanceof qe)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,$e(e,"cancel",i.cancel,!0),i.context=r,Ym(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(St(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Zr(this.database,new Qt(this._delegate._repo,this._delegate._path))}}let Zr=class Fi extends qe{constructor(e,n){super(e,new Ct(n._repo,n._path,new $c,!1)),this.database=e,this._delegate=n}getKey(){return F("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return F("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Fi(this.database,yi(this._delegate,e))}getParent(){F("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Fi(this.database,e):null}getRoot(){return F("Reference.root",0,0,arguments.length),new Fi(this.database,this._delegate.root)}set(e,n){F("Reference.set",1,2,arguments.length),$e("Reference.set","onComplete",n,!0);const r=Dp(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(F("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,w0("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}zt("Reference.update",this._delegate._path),$e("Reference.update","onComplete",n,!0);const r=ZA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){F("Reference.setWithPriority",2,3,arguments.length),$e("Reference.setWithPriority","onComplete",r,!0);const i=XA(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){F("Reference.remove",0,1,arguments.length),$e("Reference.remove","onComplete",e,!0);const n=YA(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){F("Reference.transaction",1,3,arguments.length),$e("Reference.transaction","transactionUpdate",e,!1),$e("Reference.transaction","onComplete",n,!0),zD("Reference.transaction","applyLocally",r,!0);const i=FD(this._delegate,e,{applyLocally:r}).then(s=>new GD(s.committed,new Tr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){F("Reference.setPriority",1,2,arguments.length),$e("Reference.setPriority","onComplete",n,!0);const r=JA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){F("Reference.push",0,2,arguments.length),$e("Reference.push","onComplete",n,!0);const r=QA(this._delegate,e),i=r.then(o=>new Fi(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Fi(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return zt("Reference.onDisconnect",this._delegate._path),new VD(new KA(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}};/**
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
 */class ia{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:RD,forceLongPolling:PD}}useEmulator(e,n,r={}){ND(this._delegate,e,n,r)}ref(e){if(F("database.ref",0,1,arguments.length),e instanceof Zr){const n=r_(this._delegate,e.toString());return new Zr(this,n)}else{const n=m0(this._delegate,e);return new Zr(this,n)}}refFromURL(e){F("database.refFromURL",1,1,arguments.length);const r=r_(this._delegate,e);return new Zr(this,r)}goOffline(){return F("database.goOffline",0,0,arguments.length),bD(this._delegate)}goOnline(){return F("database.goOnline",0,0,arguments.length),AD(this._delegate)}}ia.ServerValue={TIMESTAMP:LD(),increment:t=>UD(t)};/**
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
 */function HD({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){nE(n);const o=new Wy("auth-internal",new Vy("database-standalone"));return o.setComponent(new xt("auth-internal",()=>r,"PRIVATE")),{instance:new ia(v0(t,o,void 0,e,s),t),namespace:i}}var qD=Object.freeze({__proto__:null,initStandalone:HD});/**
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
 */const KD=ia.ServerValue;function QD(t){t.INTERNAL.registerComponent(new xt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new ia(i,r)},"PUBLIC").setServiceProps({Reference:Zr,Query:qe,Database:ia,DataSnapshot:Tr,enableLogging:DD,INTERNAL:qD,ServerValue:KD}).setMultipleInstances(!0)),t.registerVersion(BD,jD)}QD(V);/**
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
 */const E0="firebasestorage.googleapis.com",I0="storageBucket",YD=2*60*1e3,JD=10*60*1e3,XD=1e3;/**
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
 */class Ce extends ut{constructor(e,n,r=0){super(td(e),`Firebase Storage: ${n} (${td(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return td(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function td(t){return"storage/"+t}function xp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(ge.UNKNOWN,t)}function ZD(t){return new Ce(ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ex(t){return new Ce(ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(ge.UNAUTHENTICATED,t)}function nx(){return new Ce(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rx(t){return new Ce(ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function S0(){return new Ce(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C0(){return new Ce(ge.CANCELED,"User canceled the upload/download.")}function ix(t){return new Ce(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function sx(t){return new Ce(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ox(){return new Ce(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+I0+"' property when initializing the app?")}function T0(){return new Ce(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ax(){return new Ce(ge.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lx(){return new Ce(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cx(t){return new Ce(ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function us(t){return new Ce(ge.INVALID_ARGUMENT,t)}function k0(){return new Ce(ge.APP_DELETED,"The Firebase app was deleted.")}function R0(t){return new Ce(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new Ce(ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zs(t){throw new Ce(ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nt.makeFromUrl(e,n)}catch{return new nt(e,"")}if(r.path==="")return r;throw sx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(v){v.path_=decodeURIComponent(v.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${d}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},y=n===E0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${I}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:c},{regex:p,indices:{bucket:1,path:2},postModify:c}];for(let v=0;v<m.length;v++){const E=m[v],N=E.regex.exec(e);if(N){const P=N[E.indices.bucket];let C=N[E.indices.path];C||(C=""),r=new nt(P,C),E.postModify(r);break}}if(r==null)throw ix(e);return r}}class ux{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...I){c||(c=!0,e.apply(null,I))}function u(I){i=setTimeout(()=>{i=null,t(g,l())},I)}function h(){s&&clearTimeout(s)}function g(I,...p){if(c){h();return}if(I){h(),d.call(null,I,...p);return}if(l()||o){h(),d.call(null,I,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,u(m)}let _=!1;function y(I){_||(_=!0,h(),!c&&(i!==null?(I||(a=2),clearTimeout(i),u(0)):I||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function hx(t){t(!1)}/**
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
 */function fx(t){return t!==void 0}function px(t){return typeof t=="function"}function mx(t){return typeof t=="object"&&!Array.isArray(t)}function su(t){return typeof t=="string"||t instanceof String}function c_(t){return Op()&&t instanceof Blob}function Op(){return typeof Blob<"u"&&!Pf()}function Ph(t,e,n,r){if(r<e)throw us(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw us(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $r(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function P0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
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
 */function N0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class gx{constructor(e,n,r,i,s,o,a,l,c,d,u,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ya(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oi.NO_ERROR,l=s.getStatus();if(!a||N0(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===oi.ABORT;r(!1,new Ya(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Ya(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=xp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?k0():C0();o(l)}else{const l=S0();o(l)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=dx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _x(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ex(t,e,n,r,i,s,o=!0){const a=P0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yx(c,e),_x(c,n),vx(c,s),wx(c,r),new gx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Ix(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sx(...t){const e=Ix();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Op())return new Blob(t);throw new Ce(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Cx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Tx(t){if(typeof atob>"u")throw cx("base-64");return atob(t)}/**
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
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nd{constructor(e,n){this.data=e,this.contentType=n||null}}function b0(t,e){switch(t){case Wt.RAW:return new nd(A0(e));case Wt.BASE64:case Wt.BASE64URL:return new nd(D0(t,e));case Wt.DATA_URL:return new nd(Rx(e),Px(e))}throw xp()}function A0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function kx(t){let e;try{e=decodeURIComponent(t)}catch{throw So(Wt.DATA_URL,"Malformed data URL.")}return A0(e)}function D0(t,e){switch(t){case Wt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Tx(e)}catch(i){throw i.message.includes("polyfill")?i:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class x0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Nx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Rx(t){const e=new x0(t);return e.base64?D0(Wt.BASE64,e.rest):kx(e.rest)}function Px(t){return new x0(t).contentType}function Nx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dn{constructor(e,n){let r=0,i="";c_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(c_(this.data_)){const r=this.data_,i=Cx(r,e,n);return i===null?null:new Dn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(r,!0)}}static getBlob(...e){if(Op()){const n=e.map(r=>r instanceof Dn?r.data_:r);return new Dn(Sx.apply(null,n))}else{const n=e.map(o=>su(o)?b0(Wt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Lp(t){let e;try{e=JSON.parse(t)}catch{return null}return mx(e)?e:null}/**
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
 */function bx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ax(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function O0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Dx(t,e){return e}class st{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Dx}}let Ja=null;function xx(t){return!su(t)||t.length<2?t:O0(t)}function ou(){if(Ja)return Ja;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(s,o){return xx(o)}const n=new st("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=r,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),Ja=t,Ja}function Ox(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Lx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Ox(r,t),r}function L0(t,e,n){const r=Lp(e);return r===null?null:Lx(t,r,n)}function Ux(t,e,n,r){const i=Lp(e);if(i===null||!su(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,h="/b/"+o(d)+"/o/"+o(u),g=$r(h,n,r),_=P0({alt:"media",token:c});return g+_})[0]}function Up(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const u_="prefixes",d_="items";function Mx(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[u_])for(const i of n[u_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new nt(e,s));r.prefixes.push(o)}if(n[d_])for(const i of n[d_]){const s=t._makeStorageReference(new nt(e,i.name));r.items.push(s)}return r}function Fx(t,e,n){const r=Lp(n);return r===null?null:Mx(t,e,r)}class er{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function In(t){if(!t)throw xp()}function au(t,e){function n(r,i){const s=L0(t,i,e);return In(s!==null),s}return n}function Bx(t,e){function n(r,i){const s=Fx(t,e,i);return In(s!==null),s}return n}function jx(t,e){function n(r,i){const s=L0(t,i,e);return In(s!==null),Ux(s,i,t.host,t._protocol)}return n}function Ms(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=nx():i=tx():n.getStatus()===402?i=ex(t.bucket):n.getStatus()===403?i=rx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function lu(t){const e=Ms(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ZD(t.path)),s.serverResponse=i.serverResponse,s}return n}function U0(t,e,n){const r=e.fullServerUrl(),i=$r(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new er(i,s,au(t,n),o);return a.errorHandler=lu(e),a}function $x(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=$r(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new er(a,l,Bx(t,e.bucket),c);return d.urlParams=s,d.errorHandler=Ms(e),d}function zx(t,e,n){const r=e.fullServerUrl(),i=$r(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new er(i,s,jx(t,n),o);return a.errorHandler=lu(e),a}function Wx(t,e,n,r){const i=e.fullServerUrl(),s=$r(i,t.host,t._protocol),o="PATCH",a=Up(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new er(s,o,au(t,r),c);return d.headers=l,d.body=a,d.errorHandler=lu(e),d}function Vx(t,e){const n=e.fullServerUrl(),r=$r(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new er(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=lu(e),a}function Gx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function M0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Gx(null,e)),r}function Hx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let v=0;v<2;v++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=M0(e,r,i),d=Up(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Dn.getBlob(u,r,h);if(g===null)throw T0();const _={name:c.fullPath},y=$r(s,t.host,t._protocol),I="POST",p=t.maxUploadRetryTime,f=new er(y,I,au(t,n),p);return f.urlParams=_,f.headers=o,f.body=g.uploadData(),f.errorHandler=Ms(e),f}class uc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Mp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{In(!1)}return In(!!n&&(e||["active"]).indexOf(n)!==-1),n}function qx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=M0(e,r,i),a={name:o.fullPath},l=$r(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Up(o,n),h=t.maxUploadRetryTime;function g(y){Mp(y);let I;try{I=y.getResponseHeader("X-Goog-Upload-URL")}catch{In(!1)}return In(su(I)),I}const _=new er(l,c,g,h);return _.urlParams=a,_.headers=d,_.body=u,_.errorHandler=Ms(e),_}function Kx(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Mp(c,["active","final"]);let u=null;try{u=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{In(!1)}u||In(!1);const h=Number(u);return In(!isNaN(h)),new uc(h,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new er(n,o,s,a);return l.headers=i,l.errorHandler=Ms(e),l}const h_=256*1024;function Qx(t,e,n,r,i,s,o,a){const l=new uc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw ax();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const u=l.current,h=u+d;let g="";d===0?g="finalize":c===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(u,h);if(y===null)throw T0();function I(v,E){const N=Mp(v,["active","final"]),P=l.current+d,C=r.size();let W;return N==="final"?W=au(e,s)(v,E):W=null,new uc(P,C,N==="final",W)}const p="POST",f=e.maxUploadRetryTime,m=new er(n,p,I,f);return m.headers=_,m.body=y.uploadData(),m.progressCallback=a||null,m.errorHandler=Ms(t),m}/**
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
 */const Yx={STATE_CHANGED:"state_changed"},at={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function rd(t){switch(t){case"running":case"pausing":case"canceling":return at.RUNNING;case"paused":return at.PAUSED;case"success":return at.SUCCESS;case"canceled":return at.CANCELED;case"error":return at.ERROR;default:return at.ERROR}}/**
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
 */class Jx{constructor(e,n,r){if(px(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Mi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Xx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Zx extends Xx{initXhr(){this.xhr_.responseType="text"}}function _n(){return new Zx}/**
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
 */class F0{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ou(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ge.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(N0(i.status,[]))if(s)i=S0();else{this.sleepTime=Math.max(this.sleepTime*2,XD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ge.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=qx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Kx(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,_n,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=h_*this._chunkMultiplier,n=new uc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Qx(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,_n,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){h_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=U0(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Hx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=C0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=rd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Jx(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(rd(this._state)){case at.SUCCESS:Mi(this._resolve.bind(null,this.snapshot))();break;case at.CANCELED:case at.ERROR:const n=this._reject;Mi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(rd(this._state)){case at.RUNNING:case at.PAUSED:e.next&&Mi(e.next.bind(e,this.snapshot))();break;case at.SUCCESS:e.complete&&Mi(e.complete.bind(e))();break;case at.CANCELED:case at.ERROR:e.error&&Mi(e.error.bind(e,this._error))();break;default:e.error&&Mi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class wi{constructor(e,n){this._service=e,n instanceof nt?this._location=n:this._location=nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wi(e,n)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return O0(this._location.path)}get storage(){return this._service}get parent(){const e=bx(this._location.path);if(e===null)return null;const n=new nt(this._location.bucket,e);return new wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw R0(e)}}function eO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new F0(t,new Dn(e),n)}function tO(t){const e={prefixes:[],items:[]};return B0(t,e).then(()=>e)}async function B0(t,e,n){const i=await j0(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await B0(t,e,i.nextPageToken)}function j0(t,e){e!=null&&typeof e.maxResults=="number"&&Ph("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=$x(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,_n)}function nO(t){t._throwIfRoot("getMetadata");const e=U0(t.storage,t._location,ou());return t.storage.makeRequestWithTokens(e,_n)}function rO(t,e){t._throwIfRoot("updateMetadata");const n=Wx(t.storage,t._location,e,ou());return t.storage.makeRequestWithTokens(n,_n)}function iO(t){t._throwIfRoot("getDownloadURL");const e=zx(t.storage,t._location,ou());return t.storage.makeRequestWithTokens(e,_n).then(n=>{if(n===null)throw lx();return n})}function sO(t){t._throwIfRoot("deleteObject");const e=Vx(t.storage,t._location);return t.storage.makeRequestWithTokens(e,_n)}function $0(t,e){const n=Ax(t._location.path,e),r=new nt(t._location.bucket,n);return new wi(t.storage,r)}/**
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
 */function oO(t){return/^[A-Za-z]+:\/\//.test(t)}function aO(t,e){return new wi(t,e)}function z0(t,e){if(t instanceof Fp){const n=t;if(n._bucket==null)throw ox();const r=new wi(n,n._bucket);return e!=null?z0(r,e):r}else return e!==void 0?$0(t,e):t}function lO(t,e){if(e&&oO(e)){if(t instanceof Fp)return aO(t,e);throw us("To use ref(service, url), the first argument must be a Storage instance.")}else return z0(t,e)}function f_(t,e){const n=e==null?void 0:e[I0];return n==null?null:nt.makeFromBucketSpec(n,t)}function cO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:My(i,t.app.options.projectId))}class Fp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=E0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YD,this._maxUploadRetryTime=JD,this._requests=new Set,i!=null?this._bucket=nt.makeFromBucketSpec(i,this._host):this._bucket=f_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=f_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ux(k0());{const o=Ex(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p_="@firebase/storage",m_="0.11.2";/**
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
 */const uO="storage";function dO(t,e,n){return t=L(t),eO(t,e,n)}function hO(t){return t=L(t),nO(t)}function fO(t,e){return t=L(t),rO(t,e)}function pO(t,e){return t=L(t),j0(t,e)}function mO(t){return t=L(t),tO(t)}function gO(t){return t=L(t),iO(t)}function _O(t){return t=L(t),sO(t)}function g_(t,e){return t=L(t),lO(t,e)}function vO(t,e){return $0(t,e)}function yO(t,e,n,r={}){cO(t,e,n,r)}function wO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fp(n,r,i,e,Jn)}function EO(){qn(new xt(uO,wO,"PUBLIC").setMultipleInstances(!0)),Gt(p_,m_,""),Gt(p_,m_,"esm2017")}EO();/**
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
 */class __{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Xa(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Xa(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Xa(o,this,this._ref)):s={next:n.next?o=>n.next(new Xa(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class v_{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new zn(e,this._service))}get items(){return this._delegate.items.map(e=>new zn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class zn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=vO(this._delegate,e);return new zn(n,this.storage)}get root(){return new zn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new zn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new __(dO(this._delegate,e,n),this)}putString(e,n=Wt.RAW,r){this._throwIfRoot("putString");const i=b0(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new __(new F0(this._delegate,new Dn(i.data,!0),s),this)}listAll(){return mO(this._delegate).then(e=>new v_(e,this.storage))}list(e){return pO(this._delegate,e||void 0).then(n=>new v_(n,this.storage))}getMetadata(){return hO(this._delegate)}updateMetadata(e){return fO(this._delegate,e)}getDownloadURL(){return gO(this._delegate)}delete(){return this._throwIfRoot("delete"),_O(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw R0(e)}}/**
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
 */class W0{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(y_(e))throw us("ref() expected a child path but got a URL, use refFromURL instead.");return new zn(g_(this._delegate,e),this)}refFromURL(e){if(!y_(e))throw us("refFromURL() expected a full URL but got a child path, use ref() instead.");try{nt.makeFromUrl(e,this._delegate.host)}catch{throw us("refFromUrl() expected a valid full URL but got an invalid one.")}return new zn(g_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){yO(this._delegate,e,n,r)}}function y_(t){return/^[A-Za-z]+:\/\//.test(t)}const IO="@firebase/storage-compat",SO="0.3.2";/**
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
 */const CO="storage-compat";function TO(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new W0(n,r)}function kO(t){const e={TaskState:at,TaskEvent:Yx,StringFormat:Wt,Storage:W0,Reference:zn};t.INTERNAL.registerComponent(new xt(CO,TO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(IO,SO)}kO(V);const RO={apiKey:"AIzaSyBzKwHZ5Qa4NfxeBUn5-KoymCUI1Z0EyXE",authDomain:"pixpair.firebaseapp.com",databaseURL:"https://pixpair-default-rtdb.firebaseio.com",projectId:"pixpair",storageBucket:"pixpair.appspot.com",messagingSenderId:"743134014753",appId:"1:743134014753:web:da56b2391f4eb69a63a260",measurementId:"G-08ST8X93R2"};V.apps.length||V.initializeApp(RO);const w_=V.auth(),pt=V.database(),PO=({onCreateSession:t,onJoinSession:e,onSignOut:n})=>{const[r,i]=x.useState(""),[s,o]=x.useState(""),[a,l]=x.useState(!1),[c,d]=x.useState(null),[u,h]=x.useState(!1);x.useEffect(()=>{try{const f=new URLSearchParams(window.location.search).get("sessionId");f&&V.auth().currentUser?g(f):f&&localStorage.setItem("pendingSessionId",f)}catch(p){console.error("Error in session URL processing:",p),d("Could not process session information from URL.")}},[]),x.useEffect(()=>{try{const p=localStorage.getItem("pendingSessionId"),f=V.auth().currentUser;p&&f&&(g(p),localStorage.removeItem("pendingSessionId"))}catch(p){console.error("Error checking pending session:",p)}},[V.auth().currentUser]);const g=async p=>{if(p)try{if(d(null),h(!0),!(await V.database().ref(`sessions/${p}`).once("value")).val()){d("Session not found. Please check the ID and try again.");return}const v=V.auth().currentUser,E=v==null?void 0:v.uid;if(!E){d("You must be signed in to join a session.");return}await V.database().ref(`sessions/${p}/members/${E}`).set({joinedAt:V.database.ServerValue.TIMESTAMP}),typeof e=="function"&&e(p)}catch(f){console.error("Error joining session:",f),d("Failed to join session. Please try again.")}finally{h(!1)}},_=async p=>{p.preventDefault(),d(null),h(!0);try{if(a?await V.auth().createUserWithEmailAndPassword(r,s):await V.auth().signInWithEmailAndPassword(r,s),!V.auth().currentUser)throw new Error("Authentication succeeded but user is not available.")}catch(f){console.error("Authentication error:",f),d(f.message||"Authentication failed. Please try again.")}finally{h(!1)}},y=async()=>{d(null),h(!0);try{const p=new V.auth.GoogleAuthProvider;if(await V.auth().signInWithPopup(p),!V.auth().currentUser)throw new Error("Google authentication succeeded but user is not available.")}catch(p){console.error("Google auth error:",p),d(p.message||"Google sign-in failed. Please try again.")}finally{h(!1)}},I=async()=>{d(null),h(!0);try{const p=await V.auth().signInAnonymously();if(console.log("Anonymous authentication successful",p),await new Promise(m=>setTimeout(m,1e3)),!V.auth().currentUser)throw new Error("Anonymous authentication succeeded but user is not available.")}catch(p){console.error("Anonymous auth error:",p),p.message.includes("PERMISSION_DENIED")?d("Database permission denied. Please check Firebase rules."):d(p.message||"Guest sign-in failed. Please try again.")}finally{h(!1)}};return w.jsxs("div",{className:"auth-screen",children:[w.jsx("h1",{children:"PixCrab"}),w.jsx("p",{children:"Synchronized Photo Capture"}),c&&w.jsx("div",{className:"error",children:c}),w.jsxs("div",{className:"auth-options",children:[w.jsx("button",{className:"btn btn-google rainbow-button w-full",onClick:y,disabled:u,"aria-label":"Continue with Google",children:"Continue with Google"}),w.jsx("button",{className:"btn btn-text",onClick:I,disabled:u,"aria-label":"Continue as Guest",children:"Continue as Guest"}),w.jsx("div",{className:"auth-separator",children:w.jsx("span",{children:"or"})})]}),w.jsxs("form",{onSubmit:_,children:[w.jsx("h2",{children:a?"Create Account":"Sign In"}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"email",children:"Email"}),w.jsx("input",{type:"email",id:"email",name:"email",value:r,onChange:p=>i(p.target.value),required:!0,autoComplete:"email","aria-required":"true"})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"password",children:"Password"}),w.jsx("input",{type:"password",id:"password",name:"password",value:s,onChange:p=>o(p.target.value),required:!0,autoComplete:a?"new-password":"current-password","aria-required":"true"})]}),w.jsx("button",{type:"submit",className:"auth-form-button",disabled:u,children:a?"Sign Up":"Sign In"})]}),w.jsx("button",{className:"btn btn-secondary",onClick:()=>l(!a),disabled:u,children:a?"Already have an account? Sign In":"Need an account? Sign Up"})]})},NO=({onCreateSession:t,onJoinSession:e,onSignOut:n,onViewAlbum:r,initialSessionId:i})=>{const[s,o]=x.useState(""),[a,l]=x.useState(null),[c,d]=x.useState(null),[u,h]=x.useState(""),g=x.useRef(null);x.useEffect(()=>{i&&I(i)},[i]),x.useEffect(()=>{c&&g.current&&p(c)},[c]);const _=async()=>{try{l(null),h("");const m=V.auth().currentUser;if(!m){setTimeout(()=>{const v=V.auth().currentUser;if(!v){l("Authentication required. Please sign in before creating a session.");return}y(v)},1e3);return}y(m)}catch(m){console.error("Error creating session:",m),l("Failed to create session. Please try again.")}},y=async m=>{try{const v=Math.random().toString(36).substring(2,8).toUpperCase(),E=m.uid;await V.database().ref(`/sessions/${v}`).set({id:v,owner:E,created:V.database.ServerValue.TIMESTAMP,status:"active"}),await V.database().ref(`/sessions/${v}/members/${E}`).set(!0),console.log("Session created successfully:",v),d(v),typeof t=="function"&&t(v)}catch(v){console.error("Error in session creation:",v),v.message.includes("PERMISSION_DENIED")?l("Database permission denied. Please check Firebase rules."):l("Failed to create session. Please try again.")}},I=async m=>{try{l(null),h("");const v=m||s;if(!v){l("Please enter a session ID");return}const E=V.auth().currentUser;if(!E){l("Authentication required. Please sign in before joining a session.");return}if(!(await V.database().ref(`sessions/${v}`).once("value")).val()){l("Session not found. Please check the ID and try again.");return}const C=E.uid;await V.database().ref(`sessions/${v}/members/${C}`).set({joinedAt:V.database.ServerValue.TIMESTAMP}),d(v),typeof e=="function"&&e(v)}catch(v){console.error("Error joining session:",v),l("Failed to join session. Please try again.")}},p=m=>{if(g.current){g.current.innerHTML="";const v=`${window.location.origin}${window.location.pathname}?sessionId=${m}`;try{new QRCode(g.current,{text:v,width:256,height:256,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}catch(E){console.error("Error generating QR code:",E),g.current&&(g.current.innerHTML='<p style="color: red;">Failed to generate QR code</p>')}}},f=()=>{c&&navigator.clipboard.writeText(c).then(()=>{h("Copied!"),setTimeout(()=>h(""),2e3)}).catch(m=>{console.error("Failed to copy:",m),h("Failed to copy")})};return w.jsxs("div",{className:"session-setup pt-20",children:[w.jsx("h1",{className:"text-3xl font-bold mt-4",children:"PixCrab"}),w.jsx("p",{className:"text-gray-600 mt-2",children:"Create a new session or join an existing one"}),a&&w.jsx("div",{className:"error",children:a}),w.jsxs("div",{className:"session-actions",children:[w.jsx("button",{className:"btn btn-primary rainbow-button",onClick:_,"aria-label":"Create New Session",children:"Create New Session"}),w.jsxs("div",{className:"session-join",children:[w.jsx("label",{htmlFor:"sessionId",className:"sr-only",children:"Enter Session ID"}),w.jsx("input",{id:"sessionId",name:"sessionId",type:"text",placeholder:"Enter Session ID",value:s,onChange:m=>o(m.target.value),autoComplete:"off","aria-label":"Session ID"}),w.jsx("button",{className:"btn btn-secondary",onClick:()=>I(),"aria-label":"Join Session",children:"Join Session"})]}),w.jsx("button",{className:"btn btn-secondary view-album-btn",onClick:r,"aria-label":"View Photo Album",children:"View Photo Album"})]}),c&&w.jsxs("div",{className:"session-info",children:[w.jsxs("div",{className:"session-id-container",children:[w.jsx("span",{className:"session-id-label",children:"Session ID:"}),w.jsx("span",{className:"session-id",children:c}),w.jsx("button",{className:"btn btn-icon",onClick:f,title:"Copy Session ID","aria-label":"Copy Session ID",children:"Copy"}),u&&w.jsx("span",{className:"copy-status","aria-live":"polite",children:u})]}),w.jsx("p",{children:"Scan this QR code to join the session:"}),w.jsx("div",{className:"qr-code-container",ref:g,"aria-label":"QR code to join session"})]}),w.jsx("button",{className:"btn btn-text",onClick:n,"aria-label":"Sign Out",children:"Sign Out"})]})},bO=()=>w.jsx("div",{className:"logo-container",children:w.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/pixpair.firebasestorage.app/o/crab5.svg?alt=media&token=93592dde-03d2-4140-bf36-c4cb0ca39f85",alt:"PixCrab logo",className:"logo-image"})}),AO=({imageUrl:t,onClose:e})=>(console.log("🖼️ MODAL DEBUG: PhotoModal render, imageUrl exists:",!!t,typeof t=="string"?t.substring(0,50)+"...":"null"),t?w.jsx("div",{className:"photo-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]",onClick:e,style:{pointerEvents:"auto"},children:w.jsxs("div",{className:"modal-content bg-white p-2 rounded-lg shadow-xl max-w-full max-h-full relative",onClick:n=>n.stopPropagation(),children:[w.jsx("img",{src:t,alt:"Full size",className:"modal-image max-w-[90vw] max-h-[90vh] object-contain",onLoad:()=>console.log("🖼️ MODAL DEBUG: Full-size image loaded successfully"),onError:n=>console.error("🖼️ MODAL DEBUG: Error loading full-size image:",n)}),w.jsx("button",{onClick:e,className:"close-modal-button absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-sm","aria-label":"Close modal",children:"✕"})]})}):null),DO=({photos:t,participantInfo:e})=>{const[n,r]=x.useState(null);if(x.useEffect(()=>{console.log("🖼️ GALLERY DEBUG: Photos received by gallery:",t.length),t.length>0&&t.forEach((a,l)=>{console.log(`🖼️ GALLERY DEBUG: Photo ${l+1} details:`,JSON.stringify({id:a.id,isCombined:!!a.isCombined,timestamp:a.timestamp,hasThumbnail:!!a.thumbnailDataUrl,thumbnailLength:a.thumbnailDataUrl?a.thumbnailDataUrl.length:0,hasFullImage:!!a.dataUrl,fullImageLength:a.dataUrl?a.dataUrl.length:0}))})},[t]),x.useEffect(()=>{console.log("🖼️ GALLERY DEBUG: selectedFullImageUrl state changed:",n?"URL set (length: "+n.length+")":"null")},[n]),!t||t.length===0)return console.log("🖼️ GALLERY DEBUG: No photos to display"),w.jsx("div",{className:"combined-photo-empty text-center p-4",children:w.jsx("p",{children:"No photos captured yet. Combined photos will appear here."})});const i=t.filter(a=>a.isCombined||a.participantIds).sort((a,l)=>(l.timestamp||0)-(a.timestamp||0));console.log("🖼️ GALLERY DEBUG: selectedFullImageUrl state before render:",n?"URL set":"null");const s=a=>{console.log("🖼️ CLICK DEBUG: Setting image URL, url exists:",!!a),r(a)},o=a=>a?new Date(a).toLocaleString():"";return w.jsxs("div",{className:"combined-photo-gallery p-3 w-full",children:[w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:i.map((a,l)=>w.jsxs("div",{className:"photo-item flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white",style:{cursor:"pointer"},onClick:()=>s(a.dataUrl),children:[w.jsxs("div",{className:"relative pt-[177.78%]",children:[" ",w.jsx("img",{src:a.thumbnailDataUrl||a.dataUrl,alt:"Combined photo",className:"absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer",onLoad:()=>console.log(`🖼️ GALLERY DEBUG: Thumbnail loaded for ${a.id}`),onError:c=>console.error(`🖼️ GALLERY DEBUG: Error loading thumbnail for ${a.id}:`,c)})]}),w.jsxs("div",{className:"p-2 text-sm",children:[w.jsx("div",{className:"font-medium text-gray-900",children:"Combined Photo"}),w.jsx("div",{className:"text-xs text-gray-500",children:o(a.timestamp)}),a.participantIds&&a.participantIds.length>0&&w.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:a.participantIds.map((c,d)=>w.jsx("span",{className:"inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs",children:e&&e[c]?e[c].name||c:`User ${d+1}`},c))})]})]},`combined-${a.id||l}`))}),w.jsx(AO,{imageUrl:n,onClose:()=>{console.log("🖼️ GALLERY DEBUG: Modal close clicked"),r(null)}})]})},xO=({sessionId:t,onExitSession:e,onSignOut:n})=>{const[r,i]=x.useState(null),[s,o]=x.useState(!1),[a,l]=x.useState([]),[c,d]=x.useState(!1),[u,h]=x.useState(null),[g,_]=x.useState({}),[y,I]=x.useState(0),[p,f]=x.useState(""),[m,v]=x.useState([]),[E,N]=x.useState(!1),P=x.useRef(null),C=x.useRef(null),W=x.useRef(null);x.useEffect(()=>{if(!t){console.log("No session ID provided, exiting session"),j(),typeof e=="function"&&e();return}},[t,e]),x.useEffect(()=>{var O;function R(){const D=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.setProperty("--viewport-height",`${D}px`),console.log("📏 Updated viewport height:",D)}return R(),(O=window.visualViewport)==null||O.addEventListener("resize",R),window.addEventListener("resize",R),()=>{var D;(D=window.visualViewport)==null||D.removeEventListener("resize",R),window.removeEventListener("resize",R)}},[]),x.useEffect(()=>{var R;console.log("🔍 BUTTON RENDER CONDITIONS:",{cameraReady:s,uploading:c,countdown:u,participantCount:y,disabled:!s||c||u!==null||y<2,videoRef:C.current?"exists":"null",videoSrcObject:(R=C.current)!=null&&R.srcObject?"stream active":"no stream"})},[s,c,u,y]),x.useEffect(()=>()=>{console.log("🎥 CameraScreen unmounting - stopping camera"),j(),P.current&&clearInterval(P.current)},[]),x.useEffect(()=>{var R,O,D,G,X;console.log("🎥 CAMERA READY STATE CHANGED:",s),console.log("🎥 DEBUG: Camera state details:",{ready:s,videoRef:C.current?"exists":"null",videoSrcObject:(R=C.current)!=null&&R.srcObject?"stream active":"no stream",videoWidth:((O=C.current)==null?void 0:O.videoWidth)||"unknown",videoHeight:((D=C.current)==null?void 0:D.videoHeight)||"unknown",tracks:((X=(G=C.current)==null?void 0:G.srcObject)==null?void 0:X.getTracks().length)||0})},[s]),x.useEffect(()=>{if(!t)return;console.log("📊 DEBUG: Setting up Firebase listeners for session:",t),j(),bi();const R=pt.ref(`sessions/${t}`);R.once("value",$=>{console.log("📊 DEBUG: Initial session data check:",JSON.stringify($.val()));const Q=$.val();if(Q){const Te=Object.keys(Q);console.log("📊 DEBUG: Session exists with fields:",Te)}else console.log("📊 DEBUG: Session does not exist")}),console.log("📊 DEBUG: Setting up all Firebase listeners for path:",`sessions/${t}`);const O=pt.ref(".info/connected"),D=pt.ref(`sessions/${t}/photos`),G=pt.ref(`sessions/${t}/combinedPhotos`);console.log("📊 DEBUG: Setting up child_added listener for photos"),D.on("child_added",$=>{const Q={id:$.key,...$.val()};console.log("📊 DEBUG: New photo detected in Firebase -",$.key,"with timestamp:",Q.timestamp),l(Te=>(console.log("📊 DEBUG: Updating photosTaken state, current count:",Te.length),[...Te,Q]))},$=>{console.error("📊 DEBUG: Error in child_added listener:",$)}),console.log("📊 DEBUG: Testing Firebase write permission..."),R.child("test").set({test:"write-test",timestamp:Date.now()}).then(()=>(console.log("📊 DEBUG: Firebase test write successful"),R.child("test").once("value"))).then($=>{console.log("📊 DEBUG: Firebase test read successful:",$.val())}).catch($=>{console.error("📊 DEBUG: Firebase permission error:",$.message)}),O.on("value",$=>{$.val()===!0?console.log("📊 DEBUG: Connected to Firebase"):console.log("📊 DEBUG: Disconnected from Firebase")}),console.log("📊 DEBUG: Setting up value listener for combined photos"),G.on("value",$=>{console.log("📊 DEBUG: Combined photos value event triggered");const Q=$.val()||{};console.log("📊 DEBUG: Combined photos data structure:",JSON.stringify(Q));const Te=Object.entries(Q).map(([he,ae])=>(console.log(`📊 DEBUG: Processing combined photo ${he}`),{id:he,isCombined:!0,...ae}));Te.length>0&&(console.log(`📊 DEBUG: Found ${Te.length} combined photos`),console.log("📊 DEBUG: Combined photo list:",JSON.stringify(Te.map(he=>({id:he.id,hasDataUrl:!!he.dataUrl,dataUrlLength:he.dataUrl?he.dataUrl.length:0,timestamp:he.timestamp,participantIds:he.participantIds})))),v(Te))}),D.on("value",$=>{console.log("📊 DEBUG: Photos value event triggered");const Q=$.val()||{};console.log("📊 DEBUG: Photos data structure:",JSON.stringify(Q));const Te=[];Object.entries(Q).forEach(([he,ae])=>{console.log(`📊 DEBUG: Processing photos for user ${he}:`,JSON.stringify(ae)),ae.dataUrl?(console.log(`📊 DEBUG: Found direct photo object for user ${he}`),Te.push({userId:he,dataUrl:ae.dataUrl,timestamp:ae.timestamp})):typeof ae=="object"&&(console.log(`📊 DEBUG: Found collection of photos for user ${he}`),Object.entries(ae).forEach(([He,tr])=>{console.log(`📊 DEBUG: Adding photo ${He} to combined list`),Te.push({userId:he,photoId:He,...tr})}))}),Te.sort((he,ae)=>ae.timestamp-he.timestamp),console.log(`📊 DEBUG: Combined photos state update: ${Te.length} photos from ${Object.keys(Q).length} participants`),console.log("📊 DEBUG: Full photo list:",JSON.stringify(Te)),m.length===0&&v(Te)},$=>{console.error("📊 DEBUG: Error in value listener:",$)}),console.log("📊 DEBUG: Setting up participants listener");const X=pt.ref(`sessions/${t}/members`);X.on("value",$=>{const Q=$.val()||{};console.log("📊 DEBUG: Participants updated:",JSON.stringify(Q)),_(Q),I(Object.keys(Q).length)}),console.log("📊 DEBUG: Setting up capture time listener");const oe=pt.ref(`sessions/${t}/capture`);return oe.on("value",$=>{const Q=$.val();console.log("📊 DEBUG: Capture data update:",JSON.stringify(Q)),Q&&Q.captureTime?(console.log("📊 DEBUG: Valid capture time received, starting countdown"),Ni(Q.captureTime)):console.log("📊 DEBUG: No valid capture time in the data")}),()=>{console.log("🧹 DEBUG: Cleaning up Firebase listeners and camera"),j(),R.off(),D.off(),G.off(),O.off(),X.off(),oe.off(),P.current&&clearInterval(P.current),console.log("🧹 DEBUG: All listeners removed")}},[t]);const j=()=>{C.current&&C.current.srcObject?(console.log("🎥 STOPPING CAMERA"),C.current.srcObject.getTracks().forEach(O=>{console.log(`🎥 Stopping track: ${O.kind}, enabled: ${O.enabled}`),O.stop()}),C.current.srcObject=null,o(!1),console.log("🎥 CAMERA STOPPED")):console.log("🎥 No camera stream to stop")},Re=()=>{console.log("🎥 Exit session - stopping camera"),j(),typeof e=="function"&&e()},Yt=()=>{t&&navigator.clipboard.writeText(t).then(()=>{f("Copied!"),setTimeout(()=>f(""),2e3)}).catch(R=>{console.error("Failed to copy:",R),f("Failed to copy")})},kn=async()=>{var R;console.log("📸 DEBUG: initiateCapture function called");try{console.log("📸 DEBUG: Measuring network latency...");const O=Date.now();await pt.ref(".info/serverTimeOffset").once("value");const G=Date.now()-O;console.log(`📸 DEBUG: Network latency measured: ${G}ms`);const X=Math.max(1e3,G*2);console.log(`📸 DEBUG: Calculated buffer time: ${X}ms`);const oe=Date.now()+3e3+X;console.log(`📸 DEBUG: Set capture time to: ${new Date(oe).toISOString()}`),console.log("📸 DEBUG: Saving capture data to Firebase..."),await pt.ref(`sessions/${t}/capture`).set({captureTime:oe,initiatedBy:((R=V.auth().currentUser)==null?void 0:R.uid)||"anonymous",initiated:V.database.ServerValue.TIMESTAMP,approximateLatency:G}),console.log(`📸 DEBUG: Capture data saved successfully! Initiated capture for time: ${new Date(oe).toISOString()} (buffer: ${X}ms)`)}catch(O){console.error("❌ ERROR in initiateCapture:",O),i("Failed to initiate synchronized capture.")}},Ni=R=>{console.log("📸 DEBUG: startCountdown function called with captureTime:",R);try{P.current&&(console.log("📸 DEBUG: Clearing existing countdown interval"),clearInterval(P.current));const O=Date.now(),D=R-O;if(console.log(`📸 DEBUG: Time until capture: ${D}ms`),D<=0){console.log("📸 DEBUG: Capture time already passed, aborting countdown");return}console.log(`📸 DEBUG: Starting countdown for capture at ${new Date(R).toISOString()}`);const G=Math.ceil(D/1e3);console.log(`📸 DEBUG: Initial countdown value: ${G}`),h(G),console.log("📸 DEBUG: Setting up countdown interval"),P.current=setInterval(()=>{try{const X=R-Date.now(),oe=Math.ceil(X/1e3);console.log(`📸 DEBUG: Countdown tick - ${oe}s remaining`),oe===2&&!s&&(console.log("📸 DEBUG: 2 seconds left, ensuring camera is ready"),C.current&&C.current.srcObject?(console.log("📸 DEBUG: Video element appears ready but cameraReady is false, forcing ready"),o(!0)):(console.log("📸 DEBUG: Attempting to re-initialize camera"),bi())),h($=>{try{return oe<=0||$<=1?(console.log("📸 DEBUG: Countdown reached zero, clearing interval and taking photo"),clearInterval(P.current),!s&&C.current&&C.current.srcObject?(console.log("📸 DEBUG: Forcing camera ready before photo capture"),o(!0),setTimeout(()=>Rn(),100)):Rn(),null):oe}catch(Q){return console.error("❌ ERROR in countdown state update:",Q),clearInterval(P.current),null}})}catch(X){console.error("❌ ERROR in countdown interval:",X),clearInterval(P.current)}},100),console.log("📸 DEBUG: Setting safety timeout for",D+500,"ms"),setTimeout(()=>{try{P.current&&(console.log("📸 DEBUG: Safety timeout triggered - clearing countdown"),clearInterval(P.current),h(null))}catch(X){console.error("❌ ERROR in safety timeout:",X)}},D+500)}catch(O){console.error("❌ ERROR in startCountdown:",O),i("Failed to start countdown timer.")}},bi=async()=>{console.log("🎥 STARTING CAMERA INITIALIZATION");try{if(s){console.log("🎥 DEBUG: Camera is already ready, no need to initialize again");return}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});if(console.log("🎥 CAMERA STREAM OBTAINED:",R?"success":"failed","tracks:",R.getTracks().length),C.current){C.current.srcObject=R,console.log("🎥 ASSIGNED STREAM TO VIDEO ELEMENT");const O=R.getVideoTracks();console.log("🎥 DEBUG: Video tracks:",O.length),O.forEach(D=>{console.log("🎥 DEBUG: Track details:",{kind:D.kind,id:D.id,enabled:D.enabled,readyState:D.readyState,muted:D.muted}),D.addEventListener("ended",()=>{console.log("🎥 DEBUG: Video track ended"),o(!1)})}),C.current.onloadedmetadata=()=>{console.log("🎥 VIDEO METADATA LOADED, SETTING CAMERA READY"),console.log("🎥 DEBUG: Video dimensions after metadata loaded:",{width:C.current.videoWidth,height:C.current.videoHeight}),o(!0)}}else console.error("🎥 VIDEO REF IS NULL"),R.getTracks().forEach(O=>O.stop())}catch(R){console.error("🎥 ERROR ACCESSING CAMERA:",R),i("Could not access camera. Please check permissions.")}},Rn=async()=>{if(console.log("📸 DEBUG: takePhoto function called"),!s||c){if(console.log(`📸 DEBUG: Cannot take photo - cameraReady: ${s}, uploading: ${c}`),!s&&C.current&&C.current.srcObject){console.log("📸 DEBUG: Attempting to recover camera ready state...");const R=C.current.srcObject.getVideoTracks();if(console.log("📸 DEBUG: Video tracks status:",R.map(O=>({kind:O.kind,enabled:O.enabled,readyState:O.readyState}))),R.length>0&&R[0].readyState==="live"&&C.current.videoWidth>0){console.log("📸 DEBUG: Video appears ready but cameraReady state is false, forcing ready state"),o(!0),setTimeout(()=>{console.log("📸 DEBUG: Retrying takePhoto after recovery attempt"),b()},500);return}}console.log("📸 DEBUG: Cannot recover camera state, aborting photo capture");return}await b()},zr=(R,O)=>{console.log("🔍 DEBUG: Performing direct check of Firebase photos structure"),pt.ref(`sessions/${R}/photos`).once("value").then(D=>{const G=D.val();if(console.log("🔍 DEBUG: Direct Firebase check - Session photos data:",JSON.stringify(G)),!G)console.log("🔍 DEBUG: No photos found in this session");else{G[O]?console.log(`🔍 DEBUG: Found photo for user ${O}:`,JSON.stringify(G[O])):console.log(`🔍 DEBUG: No photo found for user ${O} in the session`);const X=Object.keys(G);console.log(`🔍 DEBUG: Participants with photos: ${X.length}`),console.log("🔍 DEBUG: Participant IDs with photos:",X)}}).catch(D=>{console.error("🔍 DEBUG: Error checking Firebase photos:",D)})},b=async()=>{console.log("📸 DEBUG: Starting actual photo capture implementation");try{console.log("📸 DEBUG: Starting photo capture process"),d(!0),i(null);const R=C.current,O=W.current;if(!R||!O)throw new Error("Video or canvas reference is missing");if(R.videoWidth<=0||R.videoHeight<=0)throw console.error("📸 DEBUG: Video dimensions are invalid:",R.videoWidth,R.videoHeight),new Error("Video not ready for capture");console.log(`📸 DEBUG: Video dimensions: ${R.videoWidth}x${R.videoHeight}`),O.width=R.videoWidth,O.height=R.videoHeight,console.log("📸 DEBUG: Drawing video frame to canvas"),O.getContext("2d").drawImage(R,0,0),console.log("📸 DEBUG: Converting canvas to data URL");const G=O.toDataURL("image/jpeg",.8);console.log(`📸 DEBUG: Data URL generated, length: ${G.length} characters`);const X=V.auth().currentUser;if(!X)throw console.error("❌ ERROR: No authenticated user found when trying to save photo"),new Error("You must be signed in to take photos");const oe=X.uid;console.log(`📸 DEBUG: Current user ID: ${oe}`),console.log("📸 DEBUG: Saving photo to Firebase..."),console.log("📸 DEBUG: Session ID:",t),console.log("📸 DEBUG: Building reference path:",`sessions/${t}/photos/${oe}`),await pt.ref(`sessions/${t}/photos/${oe}`).set({dataUrl:G,timestamp:V.database.ServerValue.TIMESTAMP}),console.log("📸 DEBUG: Photo saved successfully to Firebase"),setTimeout(()=>{zr(t,oe),console.log("📸 DEBUG: Attempting to call checkAndCreateCombinedPhoto."),B(t)},1500)}catch(R){console.error("❌ ERROR in takePhoto:",R),i("Failed to take photo. Please try again.")}finally{d(!1),console.log("📸 DEBUG: Photo capture process completed")}},B=R=>{if(console.log("🔄 DEBUG: checkAndCreateCombinedPhoto called"),console.log(`🔄 DEBUG: Current session ID for check: ${R}`),!R){console.log("🔄 DEBUG: No session ID provided, skipping combined photo check");return}if(!W.current){console.error("🔄 ERROR: Canvas reference is not available for creating combined photo");return}console.log(`🔄 DEBUG: Canvas dimensions: ${W.current.width}x${W.current.height}`);const O=V.auth().currentUser;if(!O){console.error("🔄 ERROR: No authenticated user for combined photo check.");return}const D=O.uid;console.log(`🔄 DEBUG: Current user ID for owner check: ${D}`);const G=Date.now(),X=pt.ref(`sessions/${R}`);console.log(`🔄 DEBUG: Fetching session data from Firebase path: ${X.toString()}`),X.once("value").then(oe=>{const $=oe.val();if(!$||!$.owner){console.error("🔄 ERROR: Could not fetch session data or owner ID.");return}const Q=$.owner;if(console.log(`🔄 DEBUG: Fetched session owner ID: ${Q}`),D!==Q){console.log(`🔄 DEBUG: Current user (${D}) is NOT session owner (${Q}). Skipping combined photo creation.`);return}console.log(`🔄 DEBUG: Current user (${D}) IS session owner. Proceeding with combined photo creation.`);const Te=pt.ref(`sessions/${R}/photos`);console.log(`🔄 DEBUG: Checking photos at Firebase path: ${Te.toString()}`),Te.once("value").then(he=>{console.log(`🔄 DEBUG: Successfully retrieved photos data from Firebase (${Date.now()-G}ms)`);const ae=he.val()||{},He=Object.keys(ae);console.log(`🔄 DEBUG: Found photos from ${He.length} participants:`,He),console.log("🔄 DEBUG: Photos data structure:",JSON.stringify(Object.keys(ae).map(ft=>({id:ft,hasDataUrl:!!ae[ft].dataUrl,dataUrlLength:ae[ft].dataUrl?ae[ft].dataUrl.length:0,timestamp:ae[ft].timestamp}))));const tr=Object.entries(ae).every(([ft,U])=>U&&U.dataUrl);if(console.log(`🔄 DEBUG: All photos valid and contain dataUrl: ${tr}`),!tr){console.error("🔄 ERROR: Some photos are missing dataUrl property");return}if(He.length<2){console.log("🔄 DEBUG: Not enough photos to create a combined photo yet");return}console.log("🔄 DEBUG: Checking for existing combined photos with these participants");const Wr=pt.ref(`sessions/${R}/combinedPhotos`);console.log(`🔄 DEBUG: Checking combined photos at Firebase path: ${Wr.toString()}`),Wr.once("value").then(ft=>{console.log(`🔄 DEBUG: Successfully retrieved combined photos data from Firebase (${Date.now()-G}ms)`);const U=ft.val()||{};if(console.log(`🔄 DEBUG: Found ${Object.keys(U).length} existing combined photos`),Object.keys(U).length>0&&console.log("🔄 DEBUG: Existing combined photos:",JSON.stringify(Object.keys(U).map(le=>({id:le,hasDataUrl:!!U[le].dataUrl,hasParticipantIds:!!U[le].participantIds,participantCount:U[le].participantIds?U[le].participantIds.length:0})))),Object.values(U).some(le=>{if(!le.participantIds)return console.log("🔄 DEBUG: Found a combined photo without participantIds field"),!1;const Oe=le.participantIds.length===He.length,fe=He.every(Tt=>le.participantIds.includes(Tt));return Oe&&fe&&console.log("🔄 DEBUG: Found existing combined photo with same participants:",JSON.stringify({participantIds:le.participantIds,timestamp:le.timestamp})),Oe&&fe})){console.log("🔄 DEBUG: A combined photo with these participants already exists, skipping creation");return}console.log("🔄 DEBUG: No existing combined photo found with these participants, creating new one"),console.log("🔄 DEBUG: Creating combined photo from participant photos"),z(R,ae,He).then(le=>{const Oe=Date.now()-G;console.log(le?`🔄 DEBUG: Successfully created combined photo with ID: ${le} (total time: ${Oe}ms)`:`🔄 DEBUG: Failed to create combined photo (total time: ${Oe}ms)`)}).catch(le=>{console.error("🔄 ERROR in createCombinedPhoto promise:",le)})}).catch(ft=>{console.error("🔄 ERROR checking existing combined photos:",ft)})}).catch(he=>{console.error("🔄 ERROR checking for photos:",he)})}).catch(oe=>{console.error("🔄 ERROR fetching session data for owner check:",oe)})},z=async(R,O,D)=>{var G,X;try{console.log("🔄 DEBUG: Starting combined photo creation"),console.log(`🔄 DEBUG: Creating combined photo for ${D.length} participants`),console.log("🔄 DEBUG: Participant IDs:",JSON.stringify(D));const oe=D.map(U=>{console.log(`🔄 DEBUG: Processing photo from participant ${U}`);const _e=O[U];return console.log("🔄 DEBUG: Photo data structure:",JSON.stringify({hasDataUrl:!!_e.dataUrl,dataUrlLength:_e.dataUrl?_e.dataUrl.length:0,timestamp:_e.timestamp})),O[U].dataUrl});console.log("🔄 DEBUG: Extracted data URLs for all participants");const $=W.current;if(!$)throw new Error("Canvas reference is not available");console.log(`🔄 DEBUG: Canvas dimensions before setup: ${$.width}x${$.height}`);const Q=$.getContext("2d");if(!Q)throw new Error("Could not get canvas 2D context");console.log("🔄 DEBUG: Canvas 2D context obtained successfully"),console.log("🔄 DEBUG: Loading images from data URLs");const Te=oe.map((U,_e)=>new Promise((le,Oe)=>{console.log(`🔄 DEBUG: Creating image object for URL ${_e+1}`);const fe=new Image;fe.crossOrigin="anonymous",fe.onload=()=>{console.log(`🔄 DEBUG: Image ${_e+1} loaded successfully: ${fe.width}x${fe.height}`),le(fe)},fe.onerror=Tt=>{console.error(`🔄 ERROR: Failed to load image ${_e+1}:`,Tt),Oe(new Error(`Failed to load image ${_e+1}`))},console.log(`🔄 DEBUG: Setting source for image ${_e+1}`),fe.src=U}));console.log(`🔄 DEBUG: Waiting for all ${Te.length} images to load`);const he=await Promise.all(Te);console.log(`🔄 DEBUG: All ${he.length} images loaded successfully`),he.forEach((U,_e)=>{console.log(`🔄 DEBUG: Image ${_e+1} dimensions: ${U.width}x${U.height}`)}),console.log("🔄 DEBUG: Using vertical stacking layout (first photo on top, second on bottom)");const ae=2160,He=1920,tr=ae/He;console.log(`🔄 DEBUG: Using fixed dimensions: ${ae}x${He} per image`),console.log(`🔄 DEBUG: Setting canvas dimensions to: ${ae}x${He*2}`),console.log("🛠️ DEBUG: canvasRef.current:",W.current),console.log("🛠️ DEBUG: canvas element id/class:",(G=W.current)==null?void 0:G.id,(X=W.current)==null?void 0:X.className),console.log("🛠️ DEBUG: pre-set dimensions:",$.width,$.height),$.width=ae,$.height=He*2,console.log("🔄 DEBUG: Clearing canvas with black background"),Q.fillStyle="#000",Q.fillRect(0,0,$.width,$.height),he.forEach((U,_e)=>{const le=U.width/U.height;let Oe,fe,Tt,Pn;le>tr?(Pn=U.height,Tt=U.height*tr,Oe=(U.width-Tt)/2,fe=0,console.log(`🔄 DEBUG: Image ${_e+1} is wider, cropping sides: sourceX=${Oe}, sourceWidth=${Tt}`)):(Tt=U.width,Pn=U.width/tr,Oe=0,fe=(U.height-Pn)/2,console.log(`🔄 DEBUG: Image ${_e+1} is taller, cropping top/bottom: sourceY=${fe}, sourceHeight=${Pn}`));const Di=0,Ra=_e*He;console.log(`🔄 DEBUG: Drawing image ${_e+1}: source(${Oe},${fe},${Tt},${Pn}) -> dest(${Di},${Ra},${ae},${He})`);try{Q.drawImage(U,Oe,fe,Tt,Pn,Di,Ra,ae,He),console.log(`🔄 DEBUG: Successfully drew image ${_e+1}`)}catch(Nn){throw console.error(`🔄 ERROR: Failed to draw image ${_e+1}:`,Nn),Nn}}),console.log("🔄 DEBUG: Adding watermark");try{Q.font="bold 48px Arial",Q.fillStyle="rgba(255, 255, 255, 0.7)",Q.textAlign="right",Q.textBaseline="bottom",Q.fillText("PixCrab",$.width-40,$.height-40),console.log("🔄 DEBUG: Successfully added watermark")}catch(U){console.error("🔄 ERROR: Failed to add watermark:",U)}console.log("🔄 DEBUG: Converting canvas to data URL");let Wr;try{Wr=$.toDataURL("image/jpeg",.95),console.log(`🔄 DEBUG: Combined photo created, data URL length: ${Wr.length}`)}catch(U){throw console.error("🔄 ERROR: Failed to convert canvas to data URL:",U),U}console.log("🔄 DEBUG: Generating thumbnail");let ft="";try{const U=document.createElement("canvas"),_e=U.getContext("2d"),le=270,Oe=480;U.width=le,U.height=Oe;const fe=new Image;await new Promise((q0,K0)=>{fe.onload=q0,fe.onerror=K0,fe.src=Wr}),console.log(`🔄 DEBUG: Temporary image for thumbnail loaded: ${fe.width}x${fe.height}`);const Tt=fe.width,Pn=fe.height,Di=Tt/Pn,Ra=le/Oe;let Nn,xi,Pa,Na;Di>Ra?(xi=Oe,Nn=xi*Di,Pa=(le-Nn)/2,Na=0):(Nn=le,xi=Nn/Di,Pa=0,Na=(Oe-xi)/2),console.log(`🔄 DEBUG: Drawing thumbnail with source dimensions: ${Tt}x${Pn}, target: ${le}x${Oe}, draw dimensions: ${Nn}x${xi} at ${Pa},${Na}`),_e.drawImage(fe,Pa,Na,Nn,xi),ft=U.toDataURL("image/jpeg",.9),console.log(`🔄 DEBUG: Thumbnail created, data URL length: ${ft.length}`)}catch(U){console.error("🔄 ERROR: Failed to generate thumbnail:",U)}console.log("🔄 DEBUG: Saving combined photo to Firebase");try{const U=V.database().ref().push().key;console.log(`🔄 DEBUG: Generated Firebase key: ${U}`);const _e=pt.ref(`sessions/${R}/combinedPhotos/${U}`);return console.log(`🔄 DEBUG: Created Firebase reference at: sessions/${R}/combinedPhotos/${U}`),await _e.set({dataUrl:Wr,thumbnailDataUrl:ft,timestamp:V.database.ServerValue.TIMESTAMP,participantIds:D,isCombined:!0}),console.log(`🔄 DEBUG: Combined photo saved to Firebase with ID: ${U}`),U}catch(U){throw console.error("🔄 ERROR: Failed to save combined photo to Firebase:",U),U}}catch(oe){return console.error("🔄 ERROR creating combined photo:",oe),null}},se=R=>{const O=R.dataUrl||R.downloadURL;return O?w.jsxs("div",{className:"photo-item",children:[w.jsx("img",{src:O,alt:"Captured"}),w.jsxs("p",{children:["Taken at: ",new Date(R.timestamp).toLocaleTimeString()]})]},R.id):w.jsx("div",{className:"photo-item error",children:w.jsx("p",{children:"Photo unavailable"})},R.id)},re=()=>{N(!E)},Ai=()=>{if(m.length===0){i("No photos to save");return}try{const R=localStorage.getItem("combinedSessions"),O=R?JSON.parse(R):[],G=[{id:t,timestamp:Date.now(),photos:m,participants:Object.keys(g).length},...O];localStorage.setItem("combinedSessions",JSON.stringify(G)),i(null),f("Saved to album!"),setTimeout(()=>f(""),2e3)}catch(R){console.error("Error saving combined photos:",R),i("Failed to save photos to album")}};return x.useEffect(()=>{console.log("🖼️ DEBUG: combinedPhotos state changed:",m.length,"photos now in state");const R=m.filter(D=>D.isCombined||D.participantIds).length,O=m.length-R;if(console.log(`🖼️ DEBUG: Photo breakdown - ${R} combined photos, ${O} individual photos`),m.length>0){const D=m[0];console.log("🖼️ DEBUG: First photo in combined photos:",JSON.stringify({id:D.id,userId:D.userId,timestamp:D.timestamp,hasDataUrl:!!D.dataUrl,dataUrlLength:D.dataUrl?D.dataUrl.length:0,isCombined:!!D.isCombined,hasParticipantIds:!!D.participantIds,participantIds:D.participantIds})),setTimeout(()=>{const G=document.querySelectorAll(".participant-photo img");G.length>0&&(console.log(`🖼️ DEBUG: Found ${G.length} rendered gallery images`),Array.from(G).forEach((X,oe)=>{console.log(`🖼️ DEBUG: Rendered image ${oe+1} dimensions: ${X.naturalWidth}x${X.naturalHeight}, displayed: ${X.offsetWidth}x${X.offsetHeight}`)}))},500)}},[m]),w.jsxs("div",{className:"camera-screen",children:[w.jsxs("div",{className:`camera-container ${E?"hidden":""}`,children:[w.jsx("video",{ref:C,autoPlay:!0,playsInline:!0,muted:!0,className:"h-full w-auto object-cover mx-auto"}),w.jsx("canvas",{ref:W,style:{display:"none"}}),u!==null&&w.jsx("div",{className:"countdown-overlay",children:w.jsx("div",{className:"countdown-number",children:u})})]}),E&&w.jsxs("div",{className:"combined-gallery-container",children:[w.jsx(DO,{photos:m,participantInfo:g}),w.jsx("div",{className:"gallery-save-controls",children:w.jsx("button",{className:"btn btn-primary save-btn",onClick:Ai,disabled:m.length===0,children:"Save to Album"})})]}),w.jsxs("div",{className:"camera-screen-content",children:[w.jsxs("div",{className:"header-area",children:[w.jsxs("div",{className:"participants-count",children:["Participants: ",y,"/2"]}),r&&w.jsx("div",{className:"error",children:r}),w.jsxs("div",{className:"session-header",children:[w.jsx("button",{className:"btn btn-primary rainbow-button",onClick:re,title:E?"Return to Camera":"View Combined Photos",children:E?"Camera":"Gallery"}),w.jsx("button",{className:"btn-icon exit-btn",onClick:Re,title:"Exit Session",children:w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),w.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),w.jsxs("button",{className:"session-id-btn",onClick:Yt,title:"Copy Session ID",children:[t,w.jsxs("svg",{className:"copy-icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),w.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),p&&w.jsx("span",{className:"copy-status",children:p})]})]})]}),!E&&w.jsx("div",{className:"viewfinder-area"}),!E&&w.jsx("div",{className:"controls-area",children:w.jsx("div",{className:"shutter-button-container",children:s&&w.jsx("button",{className:`
                    btn-circle btn-circle-rainbow
                    w-16 h-16 bg-white shadow-lg
                    border-4 border-gray-200 z-50
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `,onClick:kn,disabled:!s||c||u!==null||y<2,children:w.jsx("span",{className:"block w-8 h-8 bg-gray-200 rounded-full m-auto"})})})})]}),!E&&w.jsx("div",{className:"photos-grid",children:a.map(se)})]})};function OO(t){const e=x.useRef(t);return(!t||!e.current||t.length!==e.current.length||e.current.some((n,r)=>n!==t[r]))&&(e.current=t),e.current}function LO(t,[e,n]){const[r,i]=t;return r!==void 0&&i!==void 0&&e!==void 0&&n!==void 0&&e>r&&e-r<=20&&n<i?[r,n]:r!==e||i!==n?[e,n]:t}function UO(t,e){let n=t==null?void 0:t.clientWidth;if(n!==void 0&&e&&e.length>0){const r=[...e.filter(i=>i>0)].sort((i,s)=>s-i);r.push(Math.floor(r[r.length-1]/2)),n=r.find((i,s)=>i<=n||s===r.length-1)}return n}function MO(t,e,n){const[[r],i]=x.useReducer(LO,[n]),s=OO(e),o=x.useRef(void 0);return{containerRef:x.useCallback(l=>{var d;(d=o.current)==null||d.disconnect(),o.current=void 0;const c=()=>i([UO(l,s),window.innerWidth-document.documentElement.clientWidth]);c(),l&&typeof ResizeObserver<"u"&&(o.current=new ResizeObserver(c),o.current.observe(l)),typeof t=="function"?t(l):t&&(t.current=l)},[t,s]),containerWidth:r}}function FO(...t){return[...t].filter(Boolean).join(" ")}function V0(t){return["react-photo-album",t].filter(Boolean).join("--")}function BO(t){return`--${V0(t)}`}function Bp({width:t,height:e}){return t/e}const jO=Object.freeze([1200,600,300,0]);function fr(t,e){return typeof t=="function"?t(e):t}function G0(t,e){return e!==void 0?fr(t,e):void 0}function $O(t,e){const n=jO.findIndex(r=>r<=e);return fr(t[Math.max(n,0)],e)}function Nh(t,e,n,r=0){if(e===void 0)return;const i=G0(t,e);return Math.round(Math.max(i===void 0?$O(n,e):i,r))}function zO(t,{spacing:e,padding:n,componentsProps:r,render:i}){return{spacing:Nh(e,t,[20,15,10,5]),padding:Nh(n,t,[0,0,0,0]),componentsProps:fr(r,t)||{},render:fr(i,t)}}function sa(t,e=0){const n=10**e;return Math.round((t+Number.EPSILON)*n)/n}function WO(t,e,n,r,i,s,o){let a,l;const c=u=>{var g;const h=s*(i-1)+2*o*i;return`calc((${((g=u.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:g[1])??u} - ${h}px) / ${sa((r-h)/n,5)})`},d=t.srcSet;return d&&d.length>0&&(a=d.concat(d.some(({width:u})=>u===t.width)?[]:[{src:t.src,width:t.width,height:t.height}]).sort((u,h)=>u.width-h.width).map(u=>`${u.src} ${u.width}w`).join(", ")),e!=null&&e.size?l=(e.sizes||[]).map(({viewport:u,size:h})=>`${u} ${c(h)}`).concat(c(e.size)).join(", "):l=`${Math.ceil(n/r*100)}vw`,{srcSet:a,sizes:l}}function VO({as:t,render:e,context:n,classes:r=[],variables:i={},style:s,className:o,children:a,...l},c){const d=FO(...(Array.isArray(r)?r:[r]).filter(_=>typeof _=="string").map(V0),o),h={style:{...Object.fromEntries(Object.entries(i).map(([_,y])=>[BO(_.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),typeof y=="number"?sa(y,5):y])),...s},className:d,children:a,...l};if(e){const _=e({ref:c,...h},n);if(_)return _}const g=t||"div";return w.jsx(g,{ref:c,...h})}const dc=x.forwardRef(VO);function GO({photo:t,index:e,width:n,height:r,onClick:i,render:{wrapper:s,link:o,button:a,image:l,extras:c}={},componentsProps:{link:d,button:u,wrapper:h,image:g}={}},_){const{href:y}=t,I={photo:t,index:e,width:sa(n,3),height:sa(r,3)};let p;return y?p={...d,as:"a",render:o,classes:["photo","link"],href:y,onClick:i}:i?p={...u,as:"button",type:"button",render:a,classes:["photo","button"],onClick:i}:p={...h,render:s,classes:"photo"},w.jsxs(dc,{ref:_,variables:{photoWidth:I.width,photoHeight:I.height},context:I,...p,children:[w.jsx(dc,{as:"img",classes:"image",render:l,context:I,...g}),c==null?void 0:c({},I)]})}const HO=x.forwardRef(GO);function qO({layout:t,sizes:e,model:n,skeleton:r,onClick:i,render:{container:s,track:o,photo:a,...l}={},componentsProps:{container:c,track:d,link:u,button:h,wrapper:g,image:_}={}},y){const{spacing:I,padding:p,containerWidth:f,tracks:m,variables:v,horizontal:E}=n||{};return w.jsxs(dc,{role:"group","aria-label":"Photo album",...c,variables:{spacing:I,padding:p,containerWidth:f,...v},classes:["",t],render:s,ref:y,children:[I!==void 0&&p!==void 0&&f!==void 0&&(m==null?void 0:m.map(({photos:N,variables:P},C)=>{const W=N.length,j=E?W:m.length;return x.createElement(dc,{...d,key:C,render:o,classes:"track",variables:{trackSize:W,...P}},N.map(Re=>{const{photo:Yt,index:kn,width:Ni}=Re,{key:bi,src:Rn,alt:zr,title:b,label:B}=Yt,z=i?re=>{i({event:re,photo:Yt,index:kn})}:void 0;if(a){const re=a({onClick:z},Re);if(re)return re}const se=re=>B?{"aria-label":B,...re}:re;return w.jsx(HO,{onClick:z,render:l,componentsProps:{image:{loading:"lazy",decoding:"async",src:Rn,alt:zr,title:b,...WO(Yt,e,Ni,f,j,I,p),...fr(_,Re)},link:se(fr(u,Re)),button:se(fr(h,Re)),wrapper:fr(g,Re)},...Re},bi??Rn)}))})),f===void 0&&r]})}const KO=x.forwardRef(qO);function QO(t,{photos:e,targetRowHeight:n,rowConstraints:r,...i}){const{spacing:s,padding:o,componentsProps:a,render:l}=zO(t,i),{singleRowMaxHeight:c,minPhotos:d,maxPhotos:u}=G0(r,t)||{};if(c!==void 0&&s!==void 0&&o!==void 0){const h=Math.floor(e.reduce((g,{width:_,height:y})=>g+_/y*c-2*o,o*e.length*2+s*(e.length-1)));h>0&&(a.container={...a.container},a.container.style={maxWidth:h,...a.container.style})}return{...i,targetRowHeight:Nh(n,t,[h=>h/5,h=>h/4,h=>h/3,h=>h/2]),render:l,spacing:s,padding:o,minPhotos:d,maxPhotos:u,componentsProps:a}}function YO(t){return(e,n)=>t(n)-t(e)}function JO(t){let e=0;const n=[],r=(d,u)=>t(n[d],n[u])<0,i=(d,u)=>{const h=n[d];n[d]=n[u],n[u]=h},s=d=>{let u=d,h=Math.floor(u/2);for(;u>1&&r(h,u);)i(h,u),u=h,h=Math.floor(u/2)},o=d=>{let u=d,h=u*2;for(;h<=e&&(h<e&&r(h,h+1)&&(h+=1),!!r(u,h));)i(u,h),u=h,h=u*2};return{push:d=>{e+=1,n[e]=d,s(e)},pop:()=>{if(e===0)return;i(1,e),e-=1;const d=n.pop();return o(1),d},size:()=>e}}function XO(t,e,n){const r=new Map,i=new Set,s=new Map;s.set(e,0);const o=JO(YO(a=>a[1]));for(o.push([e,0]);o.size()>0;){const[a,l]=o.pop();if(!i.has(a)){const c=t(a);i.add(a),c.forEach((d,u)=>{const h=l+d,g=r.get(u),_=s.get(u);(_===void 0||_>h&&(_/h>1.005||g!==void 0&&g<a))&&(s.set(u,h),o.push([u,h]),r.set(u,a))})}}return s.has(n)?r:void 0}function ZO(t,e){if(!t)return;const n=[];for(let r=e;r!==void 0;r=t.get(r))n.push(r);return n.reverse()}function eL(t,e,n){return ZO(XO(t,e,n),n)}function tL(t,e,n,r){return sa(e/n/Math.min(...t.map(i=>Bp(i))))+(r||0)+2}function H0(t,e,n,r){return(e-(t.length-1)*n-2*r*t.length)/t.reduce((i,s)=>i+Bp(s),0)}function nL(t,e,n,r,i,s,o){const a=t.slice(e,n),l=H0(a,r,i,s);return l>0?(l-o)**2*a.length:void 0}function rL(t,e,n,r,i,s,o,a){return l=>{const c=new Map;c.set(l,0);const d=o||1,u=Math.min(s,a||1/0);for(let h=l+d;h<t.length+1&&!(h-l>u);h+=1){const g=nL(t,l,h,r,e,n,i);if(g===void 0)break;c.set(h,g)}return c}}function iL(t,e,n,r,i,s,o){const a=tL(t,r,i,s),l=rL(t,e,n,r,i,a,s,o),c=eL(l,0,t.length);if(!c)return;const d=[];for(let u=1;u<c.length;u+=1){const h=t.map((_,y)=>({photo:_,index:y})).slice(c[u-1],c[u]),g=H0(h.map(({photo:_})=>_),r,e,n);d.push({photos:h.map(({photo:_,index:y})=>({photo:_,index:y,width:g*Bp(_),height:g}))})}return{spacing:e,padding:n,containerWidth:r,tracks:d,horizontal:!0}}function sL({photos:t,breakpoints:e,defaultContainerWidth:n,...r},i){const{containerRef:s,containerWidth:o}=MO(i,e,n),{spacing:a,padding:l,targetRowHeight:c,minPhotos:d,maxPhotos:u,...h}=QO(o,{photos:t,...r}),g=x.useMemo(()=>o!==void 0&&a!==void 0&&l!==void 0&&c!==void 0?iL(t,a,l,o,c,d,u):void 0,[t,a,l,o,c,d,u]);return w.jsx(KO,{layout:"rows",ref:s,model:g,...h})}const oL=x.forwardRef(sL);const aL=({onCreateSession:t,onReturn:e})=>{const[n,r]=x.useState([]),[i,s]=x.useState([]);x.useEffect(()=>{const a=()=>{const c=localStorage.getItem("albumPhotos");c&&r(JSON.parse(c))},l=()=>{const c=localStorage.getItem("combinedSessions");c&&s(JSON.parse(c))};a(),l()},[]);const o=()=>{typeof t=="function"&&t()};return w.jsxs("div",{className:"album-screen",children:[w.jsxs("div",{className:"album-header",children:[w.jsx("h1",{children:"My Album"}),w.jsxs("div",{className:"album-actions",children:[w.jsx("button",{className:"btn btn-primary rainbow-button",onClick:o,children:"Create New Session"}),w.jsx("button",{className:"btn btn-secondary return-btn",onClick:e,children:"Return to Sessions"})]})]}),i.length>0&&w.jsxs("div",{className:"combined-sessions",children:[w.jsx("h2",{children:"Combined Photo Sessions"}),w.jsx("div",{className:"sessions-grid",children:i.map((a,l)=>w.jsxs("div",{className:"session-card",children:[w.jsxs("h3",{children:["Session: ",a.id.substring(0,8),"..."]}),w.jsx("div",{className:"session-photos-preview",children:a.photos.slice(0,4).map((c,d)=>w.jsx("div",{className:"preview-photo",children:w.jsx("img",{src:c.dataUrl,alt:`Session preview ${d}`})},d))}),w.jsx("p",{children:new Date(a.timestamp).toLocaleString()})]},l))})]}),n.length>0?w.jsxs("div",{className:"album-content",children:[w.jsx("h2",{children:"Individual Photos"}),w.jsx(oL,{photos:n.map(a=>({src:a.url,width:a.width,height:a.height,alt:a.timestamp}))})]}):w.jsx("div",{className:"empty-album",children:w.jsx("p",{children:"No photos yet. Start a new session to take some pictures!"})})]})},lL=x.createContext(null),cL=({children:t,value:e})=>w.jsx(lL.Provider,{value:e,children:t});function uL(){const[t,e]=x.useState("auth"),[n,r]=x.useState(null),[i,s]=x.useState(null),[o,a]=x.useState(!1),[l,c]=x.useState(null);x.useEffect(()=>{try{if(!V.apps.length){c("Firebase initialization failed. Please check your setup.");return}a(!0)}catch(I){console.error("Error initializing app:",I),c("Failed to initialize the application. Please try again later.")}},[]),x.useEffect(()=>{if(!o)return;const I=w_.onAuthStateChanged(m=>{r(m),e(m?"session":"auth")}),f=new URLSearchParams(window.location.search).get("sessionId");return f&&s(f),()=>I()},[o]);const d=I=>{s(I),e("camera")},u=I=>{s(I),e("camera")},h=()=>{s(null),e("session")},g=()=>{e("album")},_=()=>{e("session")},y=async()=>{try{await w_.signOut(),e("auth"),s(null)}catch(I){console.error("Error signing out:",I)}};return l?w.jsx("div",{className:"app-container",children:w.jsx("div",{className:"error",children:l})}):o?w.jsx(cL,{value:{user:n,sessionId:i},children:w.jsxs("div",{className:`app-container ${t==="camera"?"camera-mode":""}`,children:[t!=="camera"&&w.jsx("div",{className:"flex justify-center items-center w-full mb-4",children:w.jsx(bO,{})}),t==="auth"&&w.jsx(PO,{onCreateSession:d,onJoinSession:u,onSignOut:y}),t==="session"&&w.jsx(NO,{onCreateSession:d,onJoinSession:u,onSignOut:y,onViewAlbum:g,initialSessionId:i}),t==="camera"&&w.jsx(xO,{sessionId:i,onExitSession:h,onSignOut:y}),t==="album"&&w.jsx(aL,{onCreateSession:d,onReturn:_})]})}):w.jsx("div",{className:"app-container",children:w.jsx("div",{children:"Loading..."})})}id.createRoot(document.getElementById("root")).render(w.jsx(dI.StrictMode,{children:w.jsx(uL,{})}));
//# sourceMappingURL=main-7d417f24.js.map
