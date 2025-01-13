(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vc={exports:{}},Io={},Gc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function u0(){if(dm)return _t;dm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(k,ne,Le){this.props=k,this.context=ne,this.refs=E,this.updater=Le||y}S.prototype.isReactComponent={},S.prototype.setState=function(k,ne){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ne,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(k,ne,Le){this.props=k,this.context=ne,this.refs=E,this.updater=Le||y}var C=L.prototype=new v;C.constructor=L,M(C,S.prototype),C.isPureReactComponent=!0;var A=Array.isArray,z=Object.prototype.hasOwnProperty,U={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function B(k,ne,Le){var Q,de={},Se=null,pe=null;if(ne!=null)for(Q in ne.ref!==void 0&&(pe=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)z.call(ne,Q)&&!D.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var ve=arguments.length-2;if(ve===1)de.children=Le;else if(1<ve){for(var be=Array(ve),Ve=0;Ve<ve;Ve++)be[Ve]=arguments[Ve+2];de.children=be}if(k&&k.defaultProps)for(Q in ve=k.defaultProps,ve)de[Q]===void 0&&(de[Q]=ve[Q]);return{$$typeof:s,type:k,key:Se,ref:pe,props:de,_owner:U.current}}function b(k,ne){return{$$typeof:s,type:k.type,key:ne,ref:k.ref,props:k.props,_owner:k._owner}}function w(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function I(k){var ne={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return ne[Le]})}var H=/\/+/g;function W(k,ne){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ne.toString(36)}function j(k,ne,Le,Q,de){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(Se){case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case s:case e:pe=!0}}if(pe)return pe=k,de=de(pe),k=Q===""?"."+W(pe,0):Q,A(de)?(Le="",k!=null&&(Le=k.replace(H,"$&/")+"/"),j(de,ne,Le,"",function(Ve){return Ve})):de!=null&&(w(de)&&(de=b(de,Le+(!de.key||pe&&pe.key===de.key?"":(""+de.key).replace(H,"$&/")+"/")+k)),ne.push(de)),1;if(pe=0,Q=Q===""?".":Q+":",A(k))for(var ve=0;ve<k.length;ve++){Se=k[ve];var be=Q+W(Se,ve);pe+=j(Se,ne,Le,be,de)}else if(be=_(k),typeof be=="function")for(k=be.call(k),ve=0;!(Se=k.next()).done;)Se=Se.value,be=Q+W(Se,ve++),pe+=j(Se,ne,Le,be,de);else if(Se==="object")throw ne=String(k),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return pe}function le(k,ne,Le){if(k==null)return k;var Q=[],de=0;return j(k,Q,"","",function(Se){return ne.call(Le,Se,de++)}),Q}function re(k){if(k._status===-1){var ne=k._result;ne=ne(),ne.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=ne)}if(k._status===1)return k._result.default;throw k._result}var ae={current:null},G={transition:null},ce={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:G,ReactCurrentOwner:U};function oe(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:le,forEach:function(k,ne,Le){le(k,function(){ne.apply(this,arguments)},Le)},count:function(k){var ne=0;return le(k,function(){ne++}),ne},toArray:function(k){return le(k,function(ne){return ne})||[]},only:function(k){if(!w(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=L,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,_t.act=oe,_t.cloneElement=function(k,ne,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Q=M({},k.props),de=k.key,Se=k.ref,pe=k._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,pe=U.current),ne.key!==void 0&&(de=""+ne.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(be in ne)z.call(ne,be)&&!D.hasOwnProperty(be)&&(Q[be]=ne[be]===void 0&&ve!==void 0?ve[be]:ne[be])}var be=arguments.length-2;if(be===1)Q.children=Le;else if(1<be){ve=Array(be);for(var Ve=0;Ve<be;Ve++)ve[Ve]=arguments[Ve+2];Q.children=ve}return{$$typeof:s,type:k.type,key:de,ref:Se,props:Q,_owner:pe}},_t.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},_t.createElement=B,_t.createFactory=function(k){var ne=B.bind(null,k);return ne.type=k,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(k){return{$$typeof:f,render:k}},_t.isValidElement=w,_t.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:re}},_t.memo=function(k,ne){return{$$typeof:h,type:k,compare:ne===void 0?null:ne}},_t.startTransition=function(k){var ne=G.transition;G.transition={};try{k()}finally{G.transition=ne}},_t.unstable_act=oe,_t.useCallback=function(k,ne){return ae.current.useCallback(k,ne)},_t.useContext=function(k){return ae.current.useContext(k)},_t.useDebugValue=function(){},_t.useDeferredValue=function(k){return ae.current.useDeferredValue(k)},_t.useEffect=function(k,ne){return ae.current.useEffect(k,ne)},_t.useId=function(){return ae.current.useId()},_t.useImperativeHandle=function(k,ne,Le){return ae.current.useImperativeHandle(k,ne,Le)},_t.useInsertionEffect=function(k,ne){return ae.current.useInsertionEffect(k,ne)},_t.useLayoutEffect=function(k,ne){return ae.current.useLayoutEffect(k,ne)},_t.useMemo=function(k,ne){return ae.current.useMemo(k,ne)},_t.useReducer=function(k,ne,Le){return ae.current.useReducer(k,ne,Le)},_t.useRef=function(k){return ae.current.useRef(k)},_t.useState=function(k){return ae.current.useState(k)},_t.useSyncExternalStore=function(k,ne,Le){return ae.current.useSyncExternalStore(k,ne,Le)},_t.useTransition=function(){return ae.current.useTransition()},_t.version="18.3.1",_t}var hm;function Wi(){return hm||(hm=1,Gc.exports=u0()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function c0(){if(pm)return Io;pm=1;var s=Wi(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:y,props:g,_owner:o.current}}return Io.Fragment=t,Io.jsx=c,Io.jsxs=c,Io}var mm;function f0(){return mm||(mm=1,Vc.exports=c0()),Vc.exports}var Ae=f0(),yr=Wi(),ll={},Wc={exports:{}},bn={},Xc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function d0(){return gm||(gm=1,function(s){function e(G,ce){var oe=G.length;G.push(ce);e:for(;0<oe;){var k=oe-1>>>1,ne=G[k];if(0<o(ne,ce))G[k]=ce,G[oe]=ne,oe=k;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ce=G[0],oe=G.pop();if(oe!==ce){G[0]=oe;e:for(var k=0,ne=G.length,Le=ne>>>1;k<Le;){var Q=2*(k+1)-1,de=G[Q],Se=Q+1,pe=G[Se];if(0>o(de,oe))Se<ne&&0>o(pe,de)?(G[k]=pe,G[Se]=oe,k=Se):(G[k]=de,G[Q]=oe,k=Q);else if(Se<ne&&0>o(pe,oe))G[k]=pe,G[Se]=oe,k=Se;else break e}}return ce}function o(G,ce){var oe=G.sortIndex-ce.sortIndex;return oe!==0?oe:G.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,g=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(G){for(var ce=t(h);ce!==null;){if(ce.callback===null)r(h);else if(ce.startTime<=G)r(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function A(G){if(E=!1,C(G),!M)if(t(d)!==null)M=!0,re(z);else{var ce=t(h);ce!==null&&ae(A,ce.startTime-G)}}function z(G,ce){M=!1,E&&(E=!1,v(B),B=-1),y=!0;var oe=_;try{for(C(ce),g=t(d);g!==null&&(!(g.expirationTime>ce)||G&&!I());){var k=g.callback;if(typeof k=="function"){g.callback=null,_=g.priorityLevel;var ne=k(g.expirationTime<=ce);ce=s.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&r(d),C(ce)}else r(d);g=t(d)}if(g!==null)var Le=!0;else{var Q=t(h);Q!==null&&ae(A,Q.startTime-ce),Le=!1}return Le}finally{g=null,_=oe,y=!1}}var U=!1,D=null,B=-1,b=5,w=-1;function I(){return!(s.unstable_now()-w<b)}function H(){if(D!==null){var G=s.unstable_now();w=G;var ce=!0;try{ce=D(!0,G)}finally{ce?W():(U=!1,D=null)}}else U=!1}var W;if(typeof L=="function")W=function(){L(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,le=j.port2;j.port1.onmessage=H,W=function(){le.postMessage(null)}}else W=function(){S(H,0)};function re(G){D=G,U||(U=!0,W())}function ae(G,ce){B=S(function(){G(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,re(z))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var oe=_;_=ce;try{return G()}finally{_=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ce){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=_;_=G;try{return ce()}finally{_=oe}},s.unstable_scheduleCallback=function(G,ce,oe){var k=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,G){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,G={id:m++,callback:ce,priorityLevel:G,startTime:oe,expirationTime:ne,sortIndex:-1},oe>k?(G.sortIndex=oe,e(h,G),t(d)===null&&G===t(h)&&(E?(v(B),B=-1):E=!0,ae(A,oe-k))):(G.sortIndex=ne,e(d,G),M||y||(M=!0,re(z))),G},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(G){var ce=_;return function(){var oe=_;_=ce;try{return G.apply(this,arguments)}finally{_=oe}}}}(jc)),jc}var vm;function h0(){return vm||(vm=1,Xc.exports=d0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function p0(){if(_m)return bn;_m=1;var s=Wi(),e=h0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,u,p,x,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,u){var p=S.hasOwnProperty(i)?S[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,p,u)&&(a=null),u||p===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),U=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),I=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),G=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function ne(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Le=!1;function Q(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var u=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){u=se}n.call(i.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),x=u.stack.split(`
`),T=p.length-1,F=x.length-1;1<=T&&0<=F&&p[T]!==x[F];)F--;for(;1<=T&&0<=F;T--,F--)if(p[T]!==x[F]){if(T!==1||F!==1)do if(T--,F--,0>F||p[T]!==x[F]){var V=`
`+p[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=F);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function de(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case U:return"Portal";case b:return"Profiler";case B:return"StrictMode";case W:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,x.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ct(n){n._valueTracker||(n._valueTracker=Ve(n))}function ge(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ce(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qe(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function Ge(n,i){Ee(n,i);var a=ve(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nt(n,i.type,a):i.hasOwnProperty("defaultValue")&&nt(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Pe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function nt(n,i,a){(i!=="number"||Ce(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ne=Array.isArray;function N(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ne(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function fe(n,i){var a=ve(i.value),u=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ke(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,We=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function at(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=it(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var qe=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(n,i){if(i){if(qe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ft(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,ue=null,me=null;function ke(n){if(n=xo(n)){if(typeof Ie!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ma(i),Ie(n.stateNode,n.type,i))}}function Fe(n){ue?me?me.push(n):me=[n]:ue=n}function dt(){if(ue){var n=ue,i=me;if(me=ue=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function It(n,i){return n(i)}function Kt(){}var Tt=!1;function Tn(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return It(n,i,a)}finally{Tt=!1,(ue!==null||me!==null)&&(Kt(),dt())}}function xn(n,i){var a=n.stateNode;if(a===null)return null;var u=Ma(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ts=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ts=!1}function yi(n,i,a,u,p,x,T,F,V){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ye){this.onError(ye)}}var Si=!1,Ar=null,Cr=!1,ji=null,ea={onError:function(n){Si=!0,Ar=n}};function ns(n,i,a,u,p,x,T,F,V){Si=!1,Ar=null,yi.apply(ea,arguments)}function ta(n,i,a,u,p,x,T,F,V){if(ns.apply(this,arguments),Si){if(Si){var se=Ar;Si=!1,Ar=null}else throw Error(t(198));Cr||(Cr=!0,ji=se)}}function li(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ia(n){if(li(n)!==n)throw Error(t(188))}function fu(n){var i=n.alternate;if(!i){if(i=li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return ia(p),n;if(x===u)return ia(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=x;else{for(var T=!1,F=p.child;F;){if(F===a){T=!0,a=p,u=x;break}if(F===u){T=!0,u=p,a=x;break}F=F.sibling}if(!T){for(F=x.child;F;){if(F===a){T=!0,a=x,u=p;break}if(F===u){T=!0,u=x,a=p;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ra(n){return n=fu(n),n!==null?sa(n):null}function sa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=sa(n);if(i!==null)return i;n=n.sibling}return null}var oa=e.unstable_scheduleCallback,P=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ie=e.unstable_requestPaint,J=e.unstable_now,K=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,Ze=null;function St(n){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Et,Wt=Math.log,Ft=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Wt(n)/Ft|0)|0}var tt=64,Xt=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function fn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~p;F!==0?u=yt(F):(x&=T,x!==0&&(u=yt(x)))}else T=a&~p,T!==0?u=yt(T):x!==0&&(u=yt(x));if(u===0)return 0;if(i!==0&&i!==u&&!(i&p)&&(p=u&-u,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if(u&4&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-pt(i),p=1<<a,u|=n[a],i&=~p;return u}function qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-pt(x),F=1<<T,V=p[T];V===-1?(!(F&a)||F&u)&&(p[T]=qi(F,i)):V<=i&&(n.expiredLanes|=F),x&=~F}}function Mi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=tt;return tt<<=1,!(tt&4194240)&&(tt=64),n}function dn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-pt(i),n[i]=a}function ln(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-pt(a),x=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~x}}function nn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-pt(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var wt=0;function ui(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xd,du,jd,qd,Yd,hu=!1,aa=[],Yi=null,$i=null,Ki=null,no=new Map,io=new Map,Zi=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":no.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(i.pointerId)}}function ro(n,i,a,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},i!==null&&(i=xo(i),i!==null&&du(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Nv(n,i,a,u,p){switch(i){case"focusin":return Yi=ro(Yi,n,i,a,u,p),!0;case"dragenter":return $i=ro($i,n,i,a,u,p),!0;case"mouseover":return Ki=ro(Ki,n,i,a,u,p),!0;case"pointerover":var x=p.pointerId;return no.set(x,ro(no.get(x)||null,n,i,a,u,p)),!0;case"gotpointercapture":return x=p.pointerId,io.set(x,ro(io.get(x)||null,n,i,a,u,p)),!0}return!1}function Kd(n){var i=Rr(n.target);if(i!==null){var a=li(i);if(a!==null){if(i=a.tag,i===13){if(i=na(a),i!==null){n.blockedOn=i,Yd(n.priority,function(){jd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function la(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Pt=u,a.target.dispatchEvent(u),Pt=null}else return i=xo(a),i!==null&&du(i),n.blockedOn=a,!1;i.shift()}return!0}function Zd(n,i,a){la(n)&&a.delete(i)}function Iv(){hu=!1,Yi!==null&&la(Yi)&&(Yi=null),$i!==null&&la($i)&&($i=null),Ki!==null&&la(Ki)&&(Ki=null),no.forEach(Zd),io.forEach(Zd)}function so(n,i){n.blockedOn===i&&(n.blockedOn=null,hu||(hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iv)))}function oo(n){function i(p){return so(p,n)}if(0<aa.length){so(aa[0],n);for(var a=1;a<aa.length;a++){var u=aa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&so(Yi,n),$i!==null&&so($i,n),Ki!==null&&so(Ki,n),no.forEach(i),io.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&Zi.shift()}var is=A.ReactCurrentBatchConfig,ua=!0;function Uv(n,i,a,u){var p=wt,x=is.transition;is.transition=null;try{wt=1,pu(n,i,a,u)}finally{wt=p,is.transition=x}}function Ov(n,i,a,u){var p=wt,x=is.transition;is.transition=null;try{wt=4,pu(n,i,a,u)}finally{wt=p,is.transition=x}}function pu(n,i,a,u){if(ua){var p=mu(n,i,a,u);if(p===null)Du(n,i,u,ca,a),$d(n,u);else if(Nv(p,n,i,a,u))u.stopPropagation();else if($d(n,u),i&4&&-1<Dv.indexOf(n)){for(;p!==null;){var x=xo(p);if(x!==null&&Xd(x),x=mu(n,i,a,u),x===null&&Du(n,i,u,ca,a),x===p)break;p=x}p!==null&&u.stopPropagation()}else Du(n,i,u,null,a)}}var ca=null;function mu(n,i,a,u){if(ca=null,n=q(u),n=Rr(n),n!==null)if(i=li(n),i===null)n=null;else if(a=i.tag,a===13){if(n=na(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ca=n,null}function Jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K()){case we:return 1;case Ue:return 4;case ze:case Ye:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Ji=null,gu=null,fa=null;function Qd(){if(fa)return fa;var n,i=gu,a=i.length,u,p="value"in Ji?Ji.value:Ji.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===p[x-u];u++);return fa=p.slice(n,1<u?1-u:void 0)}function da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ha(){return!0}function eh(){return!1}function Un(n){function i(a,u,p,x,T){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ha:eh,this.isPropagationStopped=eh,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Un(rs),ao=oe({},rs,{view:0,detail:0}),Fv=Un(ao),_u,xu,lo,pa=oe({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lo&&(lo&&n.type==="mousemove"?(_u=n.screenX-lo.screenX,xu=n.screenY-lo.screenY):xu=_u=0,lo=n),_u)},movementY:function(n){return"movementY"in n?n.movementY:xu}}),th=Un(pa),kv=oe({},pa,{dataTransfer:0}),Bv=Un(kv),zv=oe({},ao,{relatedTarget:0}),yu=Un(zv),Hv=oe({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=Un(Hv),Gv=oe({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wv=Un(Gv),Xv=oe({},rs,{data:0}),nh=Un(Xv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Yv[n])?!!i[n]:!1}function Su(){return $v}var Kv=oe({},ao,{key:function(n){if(n.key){var i=jv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zv=Un(Kv),Jv=oe({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=Un(Jv),Qv=oe({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),e_=Un(Qv),t_=oe({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),n_=Un(t_),i_=oe({},pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r_=Un(i_),s_=[9,13,27,32],Mu=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var o_=f&&"TextEvent"in window&&!uo,rh=f&&(!Mu||uo&&8<uo&&11>=uo),sh=" ",oh=!1;function ah(n,i){switch(n){case"keyup":return s_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function a_(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(oh=!0,sh);case"textInput":return n=i.data,n===sh&&oh?null:n;default:return null}}function l_(n,i){if(ss)return n==="compositionend"||!Mu&&ah(n,i)?(n=Qd(),fa=gu=Ji=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!u_[n.type]:i==="textarea"}function ch(n,i,a,u){Fe(u),i=xa(i,"onChange"),0<i.length&&(a=new vu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var co=null,fo=null;function c_(n){Rh(n,0)}function ma(n){var i=cs(n);if(ge(i))return n}function f_(n,i){if(n==="change")return i}var fh=!1;if(f){var Eu;if(f){var Tu="oninput"in document;if(!Tu){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Tu=typeof dh.oninput=="function"}Eu=Tu}else Eu=!1;fh=Eu&&(!document.documentMode||9<document.documentMode)}function hh(){co&&(co.detachEvent("onpropertychange",ph),fo=co=null)}function ph(n){if(n.propertyName==="value"&&ma(fo)){var i=[];ch(i,fo,n,q(n)),Tn(c_,i)}}function d_(n,i,a){n==="focusin"?(hh(),co=i,fo=a,co.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function h_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ma(fo)}function p_(n,i){if(n==="click")return ma(i)}function m_(n,i){if(n==="input"||n==="change")return ma(i)}function g_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Kn=typeof Object.is=="function"?Object.is:g_;function ho(n,i){if(Kn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Kn(n[p],i[p]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var a=mh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mh(a)}}function vh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function _h(){for(var n=window,i=Ce();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ce(n.document)}return i}function wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function v_(n){var i=_h(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&vh(a.ownerDocument.documentElement,a)){if(u!==null&&wu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=gh(a,x);var T=gh(a,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var __=f&&"documentMode"in document&&11>=document.documentMode,os=null,Au=null,po=null,Cu=!1;function xh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||os==null||os!==Ce(u)||(u=os,"selectionStart"in u&&wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),po&&ho(po,u)||(po=u,u=xa(Au,"onSelect"),0<u.length&&(i=new vu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=os)))}function ga(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var as={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Ru={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function va(n){if(Ru[n])return Ru[n];if(!as[n])return n;var i=as[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in yh)return Ru[n]=i[a];return n}var Sh=va("animationend"),Mh=va("animationiteration"),Eh=va("animationstart"),Th=va("transitionend"),wh=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){wh.set(n,i),l(i,[n])}for(var Pu=0;Pu<Ah.length;Pu++){var bu=Ah[Pu],x_=bu.toLowerCase(),y_=bu[0].toUpperCase()+bu.slice(1);Qi(x_,"on"+y_)}Qi(Sh,"onAnimationEnd"),Qi(Mh,"onAnimationIteration"),Qi(Eh,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Ch(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ta(u,i,void 0,n),n.currentTarget=null}function Rh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var x=void 0;if(i)for(var T=u.length-1;0<=T;T--){var F=u[T],V=F.instance,se=F.currentTarget;if(F=F.listener,V!==x&&p.isPropagationStopped())break e;Ch(p,F,se),x=V}else for(T=0;T<u.length;T++){if(F=u[T],V=F.instance,se=F.currentTarget,F=F.listener,V!==x&&p.isPropagationStopped())break e;Ch(p,F,se),x=V}}}if(Cr)throw n=ji,Cr=!1,ji=null,n}function Ut(n,i){var a=i[ku];a===void 0&&(a=i[ku]=new Set);var u=n+"__bubble";a.has(u)||(Ph(i,n,2,!1),a.add(u))}function Lu(n,i,a){var u=0;i&&(u|=4),Ph(a,n,u,i)}var _a="_reactListening"+Math.random().toString(36).slice(2);function go(n){if(!n[_a]){n[_a]=!0,r.forEach(function(a){a!=="selectionchange"&&(S_.has(a)||Lu(a,!1,n),Lu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_a]||(i[_a]=!0,Lu("selectionchange",!1,i))}}function Ph(n,i,a,u){switch(Jd(i)){case 1:var p=Uv;break;case 4:p=Ov;break;default:p=pu}a=p.bind(null,i,a,n),p=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Du(n,i,a,u,p){var x=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;T=T.return}for(;F!==null;){if(T=Rr(F),T===null)return;if(V=T.tag,V===5||V===6){u=x=T;continue e}F=F.parentNode}}u=u.return}Tn(function(){var se=x,ye=q(a),Me=[];e:{var xe=wh.get(n);if(xe!==void 0){var He=vu,$e=n;switch(n){case"keypress":if(da(a)===0)break e;case"keydown":case"keyup":He=Zv;break;case"focusin":$e="focus",He=yu;break;case"focusout":$e="blur",He=yu;break;case"beforeblur":case"afterblur":He=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=e_;break;case Sh:case Mh:case Eh:He=Vv;break;case Th:He=n_;break;case"scroll":He=Fv;break;case"wheel":He=r_;break;case"copy":case"cut":case"paste":He=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=ih}var Je=(i&4)!==0,qt=!Je&&n==="scroll",Z=Je?xe!==null?xe+"Capture":null:xe;Je=[];for(var X=se,te;X!==null;){te=X;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,Z!==null&&(Re=xn(X,Z),Re!=null&&Je.push(vo(X,Re,te)))),qt)break;X=X.return}0<Je.length&&(xe=new He(xe,$e,null,a,ye),Me.push({event:xe,listeners:Je}))}}if(!(i&7)){e:{if(xe=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",xe&&a!==Pt&&($e=a.relatedTarget||a.fromElement)&&(Rr($e)||$e[Ei]))break e;if((He||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,He?($e=a.relatedTarget||a.toElement,He=se,$e=$e?Rr($e):null,$e!==null&&(qt=li($e),$e!==qt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=se),He!==$e)){if(Je=th,Re="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Je=ih,Re="onPointerLeave",Z="onPointerEnter",X="pointer"),qt=He==null?xe:cs(He),te=$e==null?xe:cs($e),xe=new Je(Re,X+"leave",He,a,ye),xe.target=qt,xe.relatedTarget=te,Re=null,Rr(ye)===se&&(Je=new Je(Z,X+"enter",$e,a,ye),Je.target=te,Je.relatedTarget=qt,Re=Je),qt=Re,He&&$e)t:{for(Je=He,Z=$e,X=0,te=Je;te;te=ls(te))X++;for(te=0,Re=Z;Re;Re=ls(Re))te++;for(;0<X-te;)Je=ls(Je),X--;for(;0<te-X;)Z=ls(Z),te--;for(;X--;){if(Je===Z||Z!==null&&Je===Z.alternate)break t;Je=ls(Je),Z=ls(Z)}Je=null}else Je=null;He!==null&&bh(Me,xe,He,Je,!1),$e!==null&&qt!==null&&bh(Me,qt,$e,Je,!0)}}e:{if(xe=se?cs(se):window,He=xe.nodeName&&xe.nodeName.toLowerCase(),He==="select"||He==="input"&&xe.type==="file")var et=f_;else if(uh(xe))if(fh)et=m_;else{et=h_;var rt=d_}else(He=xe.nodeName)&&He.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(et=p_);if(et&&(et=et(n,se))){ch(Me,et,a,ye);break e}rt&&rt(n,xe,se),n==="focusout"&&(rt=xe._wrapperState)&&rt.controlled&&xe.type==="number"&&nt(xe,"number",xe.value)}switch(rt=se?cs(se):window,n){case"focusin":(uh(rt)||rt.contentEditable==="true")&&(os=rt,Au=se,po=null);break;case"focusout":po=Au=os=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,xh(Me,a,ye);break;case"selectionchange":if(__)break;case"keydown":case"keyup":xh(Me,a,ye)}var st;if(Mu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else ss?ah(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(rh&&a.locale!=="ko"&&(ss||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&ss&&(st=Qd()):(Ji=ye,gu="value"in Ji?Ji.value:Ji.textContent,ss=!0)),rt=xa(se,ut),0<rt.length&&(ut=new nh(ut,n,null,a,ye),Me.push({event:ut,listeners:rt}),st?ut.data=st:(st=lh(a),st!==null&&(ut.data=st)))),(st=o_?a_(n,a):l_(n,a))&&(se=xa(se,"onBeforeInput"),0<se.length&&(ye=new nh("onBeforeInput","beforeinput",null,a,ye),Me.push({event:ye,listeners:se}),ye.data=st))}Rh(Me,i)})}function vo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function xa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=xn(n,a),x!=null&&u.unshift(vo(n,x,p)),x=xn(n,i),x!=null&&u.push(vo(n,x,p))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bh(n,i,a,u,p){for(var x=i._reactName,T=[];a!==null&&a!==u;){var F=a,V=F.alternate,se=F.stateNode;if(V!==null&&V===u)break;F.tag===5&&se!==null&&(F=se,p?(V=xn(a,x),V!=null&&T.unshift(vo(a,V,F))):p||(V=xn(a,x),V!=null&&T.push(vo(a,V,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var M_=/\r\n?/g,E_=/\u0000|\uFFFD/g;function Lh(n){return(typeof n=="string"?n:""+n).replace(M_,`
`).replace(E_,"")}function ya(n,i,a){if(i=Lh(i),Lh(n)!==i&&a)throw Error(t(425))}function Sa(){}var Nu=null,Iu=null;function Uu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(A_)}:Ou;function A_(n){setTimeout(function(){throw n})}function Fu(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),oo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);oo(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),ci="__reactFiber$"+us,_o="__reactProps$"+us,Ei="__reactContainer$"+us,ku="__reactEvents$"+us,C_="__reactListeners$"+us,R_="__reactHandles$"+us;function Rr(n){var i=n[ci];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ei]||a[ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[ci])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function xo(n){return n=n[ci]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ma(n){return n[_o]||null}var Bu=[],fs=-1;function tr(n){return{current:n}}function Ot(n){0>fs||(n.current=Bu[fs],Bu[fs]=null,fs--)}function Nt(n,i){fs++,Bu[fs]=n.current,n.current=i}var nr={},hn=tr(nr),wn=tr(!1),Pr=nr;function ds(n,i){var a=n.type.contextTypes;if(!a)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function An(n){return n=n.childContextTypes,n!=null}function Ea(){Ot(wn),Ot(hn)}function Ih(n,i,a){if(hn.current!==nr)throw Error(t(168));Nt(hn,i),Nt(wn,a)}function Uh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,pe(n)||"Unknown",p));return oe({},a,u)}function Ta(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Pr=hn.current,Nt(hn,n),Nt(wn,wn.current),!0}function Oh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Uh(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,Ot(wn),Ot(hn),Nt(hn,n)):Ot(wn),Nt(wn,a)}var Ti=null,wa=!1,zu=!1;function Fh(n){Ti===null?Ti=[n]:Ti.push(n)}function P_(n){wa=!0,Fh(n)}function ir(){if(!zu&&Ti!==null){zu=!0;var n=0,i=wt;try{var a=Ti;for(wt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ti=null,wa=!1}catch(p){throw Ti!==null&&(Ti=Ti.slice(n+1)),oa(we,ir),p}finally{wt=i,zu=!1}}return null}var hs=[],ps=0,Aa=null,Ca=0,Vn=[],Gn=0,br=null,wi=1,Ai="";function Lr(n,i){hs[ps++]=Ca,hs[ps++]=Aa,Aa=n,Ca=i}function kh(n,i,a){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=br,br=n;var u=wi;n=Ai;var p=32-pt(u)-1;u&=~(1<<p),a+=1;var x=32-pt(i)+p;if(30<x){var T=p-p%5;x=(u&(1<<T)-1).toString(32),u>>=T,p-=T,wi=1<<32-pt(i)+p|a<<p|u,Ai=x+n}else wi=1<<x|a<<p|u,Ai=n}function Hu(n){n.return!==null&&(Lr(n,1),kh(n,1,0))}function Vu(n){for(;n===Aa;)Aa=hs[--ps],hs[ps]=null,Ca=hs[--ps],hs[ps]=null;for(;n===br;)br=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var On=null,Fn=null,kt=!1,Zn=null;function Bh(n,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,Fn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,Fn=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wu(n){if(kt){var i=Fn;if(i){var a=i;if(!zh(n,i)){if(Gu(n))throw Error(t(418));i=er(a.nextSibling);var u=On;i&&zh(n,i)?Bh(u,a):(n.flags=n.flags&-4097|2,kt=!1,On=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,On=n}}}function Hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Ra(n){if(n!==On)return!1;if(!kt)return Hh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Uu(n.type,n.memoizedProps)),i&&(i=Fn)){if(Gu(n))throw Vh(),Error(t(418));for(;i;)Bh(n,i),i=er(i.nextSibling)}if(Hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Fn=er(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=On?er(n.stateNode.nextSibling):null;return!0}function Vh(){for(var n=Fn;n;)n=er(n.nextSibling)}function ms(){Fn=On=null,kt=!1}function Xu(n){Zn===null?Zn=[n]:Zn.push(n)}var b_=A.ReactCurrentBatchConfig;function yo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(T){var F=p.refs;T===null?delete F[x]:F[x]=T},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Pa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function Wh(n){function i(Z,X){if(n){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function a(Z,X){if(!n)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function u(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function p(Z,X){return Z=fr(Z,X),Z.index=0,Z.sibling=null,Z}function x(Z,X,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,X,te,Re){return X===null||X.tag!==6?(X=Oc(te,Z.mode,Re),X.return=Z,X):(X=p(X,te),X.return=Z,X)}function V(Z,X,te,Re){var et=te.type;return et===D?ye(Z,X,te.props.children,Re,te.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&Gh(et)===X.type)?(Re=p(X,te.props),Re.ref=yo(Z,X,te),Re.return=Z,Re):(Re=Qa(te.type,te.key,te.props,null,Z.mode,Re),Re.ref=yo(Z,X,te),Re.return=Z,Re)}function se(Z,X,te,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Fc(te,Z.mode,Re),X.return=Z,X):(X=p(X,te.children||[]),X.return=Z,X)}function ye(Z,X,te,Re,et){return X===null||X.tag!==7?(X=Br(te,Z.mode,Re,et),X.return=Z,X):(X=p(X,te),X.return=Z,X)}function Me(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Oc(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return te=Qa(X.type,X.key,X.props,null,Z.mode,te),te.ref=yo(Z,null,X),te.return=Z,te;case U:return X=Fc(X,Z.mode,te),X.return=Z,X;case re:var Re=X._init;return Me(Z,Re(X._payload),te)}if(Ne(X)||ce(X))return X=Br(X,Z.mode,te,null),X.return=Z,X;Pa(Z,X)}return null}function xe(Z,X,te,Re){var et=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return et!==null?null:F(Z,X,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return te.key===et?V(Z,X,te,Re):null;case U:return te.key===et?se(Z,X,te,Re):null;case re:return et=te._init,xe(Z,X,et(te._payload),Re)}if(Ne(te)||ce(te))return et!==null?null:ye(Z,X,te,Re,null);Pa(Z,te)}return null}function He(Z,X,te,Re,et){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Z=Z.get(te)||null,F(X,Z,""+Re,et);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case z:return Z=Z.get(Re.key===null?te:Re.key)||null,V(X,Z,Re,et);case U:return Z=Z.get(Re.key===null?te:Re.key)||null,se(X,Z,Re,et);case re:var rt=Re._init;return He(Z,X,te,rt(Re._payload),et)}if(Ne(Re)||ce(Re))return Z=Z.get(te)||null,ye(X,Z,Re,et,null);Pa(X,Re)}return null}function $e(Z,X,te,Re){for(var et=null,rt=null,st=X,ut=X=0,on=null;st!==null&&ut<te.length;ut++){st.index>ut?(on=st,st=null):on=st.sibling;var Ct=xe(Z,st,te[ut],Re);if(Ct===null){st===null&&(st=on);break}n&&st&&Ct.alternate===null&&i(Z,st),X=x(Ct,X,ut),rt===null?et=Ct:rt.sibling=Ct,rt=Ct,st=on}if(ut===te.length)return a(Z,st),kt&&Lr(Z,ut),et;if(st===null){for(;ut<te.length;ut++)st=Me(Z,te[ut],Re),st!==null&&(X=x(st,X,ut),rt===null?et=st:rt.sibling=st,rt=st);return kt&&Lr(Z,ut),et}for(st=u(Z,st);ut<te.length;ut++)on=He(st,Z,ut,te[ut],Re),on!==null&&(n&&on.alternate!==null&&st.delete(on.key===null?ut:on.key),X=x(on,X,ut),rt===null?et=on:rt.sibling=on,rt=on);return n&&st.forEach(function(dr){return i(Z,dr)}),kt&&Lr(Z,ut),et}function Je(Z,X,te,Re){var et=ce(te);if(typeof et!="function")throw Error(t(150));if(te=et.call(te),te==null)throw Error(t(151));for(var rt=et=null,st=X,ut=X=0,on=null,Ct=te.next();st!==null&&!Ct.done;ut++,Ct=te.next()){st.index>ut?(on=st,st=null):on=st.sibling;var dr=xe(Z,st,Ct.value,Re);if(dr===null){st===null&&(st=on);break}n&&st&&dr.alternate===null&&i(Z,st),X=x(dr,X,ut),rt===null?et=dr:rt.sibling=dr,rt=dr,st=on}if(Ct.done)return a(Z,st),kt&&Lr(Z,ut),et;if(st===null){for(;!Ct.done;ut++,Ct=te.next())Ct=Me(Z,Ct.value,Re),Ct!==null&&(X=x(Ct,X,ut),rt===null?et=Ct:rt.sibling=Ct,rt=Ct);return kt&&Lr(Z,ut),et}for(st=u(Z,st);!Ct.done;ut++,Ct=te.next())Ct=He(st,Z,ut,Ct.value,Re),Ct!==null&&(n&&Ct.alternate!==null&&st.delete(Ct.key===null?ut:Ct.key),X=x(Ct,X,ut),rt===null?et=Ct:rt.sibling=Ct,rt=Ct);return n&&st.forEach(function(l0){return i(Z,l0)}),kt&&Lr(Z,ut),et}function qt(Z,X,te,Re){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case z:e:{for(var et=te.key,rt=X;rt!==null;){if(rt.key===et){if(et=te.type,et===D){if(rt.tag===7){a(Z,rt.sibling),X=p(rt,te.props.children),X.return=Z,Z=X;break e}}else if(rt.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&Gh(et)===rt.type){a(Z,rt.sibling),X=p(rt,te.props),X.ref=yo(Z,rt,te),X.return=Z,Z=X;break e}a(Z,rt);break}else i(Z,rt);rt=rt.sibling}te.type===D?(X=Br(te.props.children,Z.mode,Re,te.key),X.return=Z,Z=X):(Re=Qa(te.type,te.key,te.props,null,Z.mode,Re),Re.ref=yo(Z,X,te),Re.return=Z,Z=Re)}return T(Z);case U:e:{for(rt=te.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Z,X.sibling),X=p(X,te.children||[]),X.return=Z,Z=X;break e}else{a(Z,X);break}else i(Z,X);X=X.sibling}X=Fc(te,Z.mode,Re),X.return=Z,Z=X}return T(Z);case re:return rt=te._init,qt(Z,X,rt(te._payload),Re)}if(Ne(te))return $e(Z,X,te,Re);if(ce(te))return Je(Z,X,te,Re);Pa(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(a(Z,X.sibling),X=p(X,te),X.return=Z,Z=X):(a(Z,X),X=Oc(te,Z.mode,Re),X.return=Z,Z=X),T(Z)):a(Z,X)}return qt}var gs=Wh(!0),Xh=Wh(!1),ba=tr(null),La=null,vs=null,ju=null;function qu(){ju=vs=La=null}function Yu(n){var i=ba.current;Ot(ba),n._currentValue=i}function $u(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function _s(n,i){La=n,ju=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Cn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(ju!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(La===null)throw Error(t(308));vs=n,La.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Dr=null;function Ku(n){Dr===null?Dr=[n]:Dr.push(n)}function jh(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,Ku(i)):(a.next=p.next,p.next=a),i.interleaved=a,Ci(n,u)}function Ci(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var rr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,At&2){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,Ci(n,a)}return p=u.interleaved,p===null?(i.next=i,Ku(u)):(i.next=p.next,p.next=i),u.interleaved=i,Ci(n,a)}function Da(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,nn(n,a)}}function Yh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Na(n,i,a,u){var p=n.updateQueue;rr=!1;var x=p.firstBaseUpdate,T=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var V=F,se=V.next;V.next=null,T===null?x=se:T.next=se,T=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=se:F.next=se,ye.lastBaseUpdate=V))}if(x!==null){var Me=p.baseState;T=0,ye=se=V=null,F=x;do{var xe=F.lane,He=F.eventTime;if((u&xe)===xe){ye!==null&&(ye=ye.next={eventTime:He,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var $e=n,Je=F;switch(xe=i,He=a,Je.tag){case 1:if($e=Je.payload,typeof $e=="function"){Me=$e.call(He,Me,xe);break e}Me=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Je.payload,xe=typeof $e=="function"?$e.call(He,Me,xe):$e,xe==null)break e;Me=oe({},Me,xe);break e;case 2:rr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=p.effects,xe===null?p.effects=[F]:xe.push(F))}else He={eventTime:He,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(se=ye=He,V=Me):ye=ye.next=He,T|=xe;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(ye===null&&(V=Me),p.baseState=V,p.firstBaseUpdate=se,p.lastBaseUpdate=ye,i=p.shared.interleaved,i!==null){p=i;do T|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);Ur|=T,n.lanes=T,n.memoizedState=Me}}function $h(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var So={},fi=tr(So),Mo=tr(So),Eo=tr(So);function Nr(n){if(n===So)throw Error(t(174));return n}function Ju(n,i){switch(Nt(Eo,i),Nt(Mo,n),Nt(fi,So),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ke(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ke(i,n)}Ot(fi),Nt(fi,i)}function xs(){Ot(fi),Ot(Mo),Ot(Eo)}function Kh(n){Nr(Eo.current);var i=Nr(fi.current),a=Ke(i,n.type);i!==a&&(Nt(Mo,n),Nt(fi,a))}function Qu(n){Mo.current===n&&(Ot(fi),Ot(Mo))}var Ht=tr(0);function Ia(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ec=[];function tc(){for(var n=0;n<ec.length;n++)ec[n]._workInProgressVersionPrimary=null;ec.length=0}var Ua=A.ReactCurrentDispatcher,nc=A.ReactCurrentBatchConfig,Ir=0,Vt=null,Zt=null,rn=null,Oa=!1,To=!1,wo=0,L_=0;function pn(){throw Error(t(321))}function ic(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Kn(n[a],i[a]))return!1;return!0}function rc(n,i,a,u,p,x){if(Ir=x,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=n===null||n.memoizedState===null?U_:O_,n=a(u,p),To){x=0;do{if(To=!1,wo=0,25<=x)throw Error(t(301));x+=1,rn=Zt=null,i.updateQueue=null,Ua.current=F_,n=a(u,p)}while(To)}if(Ua.current=Ba,i=Zt!==null&&Zt.next!==null,Ir=0,rn=Zt=Vt=null,Oa=!1,i)throw Error(t(300));return n}function sc(){var n=wo!==0;return wo=0,n}function di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=n:rn=rn.next=n,rn}function Xn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Vt.memoizedState=rn=n:rn=rn.next=n}return rn}function Ao(n,i){return typeof i=="function"?i(n):i}function oc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Zt,p=u.baseQueue,x=a.pending;if(x!==null){if(p!==null){var T=p.next;p.next=x.next,x.next=T}u.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,u=u.baseState;var F=T=null,V=null,se=x;do{var ye=se.lane;if((Ir&ye)===ye)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var Me={lane:ye,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(F=V=Me,T=u):V=V.next=Me,Vt.lanes|=ye,Ur|=ye}se=se.next}while(se!==null&&se!==x);V===null?T=u:V.next=F,Kn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do x=p.lane,Vt.lanes|=x,Ur|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ac(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do x=n(x,T.action),T=T.next;while(T!==p);Kn(x,i.memoizedState)||(Cn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,u]}function Zh(){}function Jh(n,i){var a=Vt,u=Xn(),p=i(),x=!Kn(u.memoizedState,p);if(x&&(u.memoizedState=p,Cn=!0),u=u.queue,lc(tp.bind(null,a,u,n),[n]),u.getSnapshot!==i||x||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Co(9,ep.bind(null,a,u,p,i),void 0,null),sn===null)throw Error(t(349));Ir&30||Qh(a,i,p)}return p}function Qh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ep(n,i,a,u){i.value=a,i.getSnapshot=u,np(i)&&ip(n)}function tp(n,i,a){return a(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Kn(n,a)}catch{return!0}}function ip(n){var i=Ci(n,1);i!==null&&ti(i,n,1,-1)}function rp(n){var i=di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:n},i.queue=n,n=n.dispatch=I_.bind(null,Vt,n),[i.memoizedState,n]}function Co(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function sp(){return Xn().memoizedState}function Fa(n,i,a,u){var p=di();Vt.flags|=n,p.memoizedState=Co(1|i,a,void 0,u===void 0?null:u)}function ka(n,i,a,u){var p=Xn();u=u===void 0?null:u;var x=void 0;if(Zt!==null){var T=Zt.memoizedState;if(x=T.destroy,u!==null&&ic(u,T.deps)){p.memoizedState=Co(i,a,x,u);return}}Vt.flags|=n,p.memoizedState=Co(1|i,a,x,u)}function op(n,i){return Fa(8390656,8,n,i)}function lc(n,i){return ka(2048,8,n,i)}function ap(n,i){return ka(4,2,n,i)}function lp(n,i){return ka(4,4,n,i)}function up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cp(n,i,a){return a=a!=null?a.concat([n]):null,ka(4,4,up.bind(null,i,n),a)}function uc(){}function fp(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function dp(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function hp(n,i,a){return Ir&21?(Kn(a,i)||(a=Dt(),Vt.lanes|=a,Ur|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a)}function D_(n,i){var a=wt;wt=a!==0&&4>a?a:4,n(!0);var u=nc.transition;nc.transition={};try{n(!1),i()}finally{wt=a,nc.transition=u}}function pp(){return Xn().memoizedState}function N_(n,i,a){var u=ur(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,a);else if(a=jh(n,i,a,u),a!==null){var p=Mn();ti(a,n,u,p),vp(a,i,u)}}function I_(n,i,a){var u=ur(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var T=i.lastRenderedState,F=x(T,a);if(p.hasEagerState=!0,p.eagerState=F,Kn(F,T)){var V=i.interleaved;V===null?(p.next=p,Ku(i)):(p.next=V.next,V.next=p),i.interleaved=p;return}}catch{}finally{}a=jh(n,i,p,u),a!==null&&(p=Mn(),ti(a,n,u,p),vp(a,i,u))}}function mp(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function gp(n,i){To=Oa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function vp(n,i,a){if(a&4194240){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,nn(n,a)}}var Ba={readContext:Wn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},U_={readContext:Wn,useCallback:function(n,i){return di().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:op,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Fa(4194308,4,up.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Fa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fa(4,2,n,i)},useMemo:function(n,i){var a=di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=di();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=N_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=di();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:uc,useDeferredValue:function(n){return di().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=D_.bind(null,n[1]),di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,p=di();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));Ir&30||Qh(u,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,op(tp.bind(null,u,x,n),[n]),u.flags|=2048,Co(9,ep.bind(null,u,x,a,i),void 0,null),a},useId:function(){var n=di(),i=sn.identifierPrefix;if(kt){var a=Ai,u=wi;a=(u&~(1<<32-pt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=wo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=L_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},O_={readContext:Wn,useCallback:fp,useContext:Wn,useEffect:lc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:oc,useRef:sp,useState:function(){return oc(Ao)},useDebugValue:uc,useDeferredValue:function(n){var i=Xn();return hp(i,Zt.memoizedState,n)},useTransition:function(){var n=oc(Ao)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1},F_={readContext:Wn,useCallback:fp,useContext:Wn,useEffect:lc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:ac,useRef:sp,useState:function(){return ac(Ao)},useDebugValue:uc,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:hp(i,Zt.memoizedState,n)},useTransition:function(){var n=ac(Ao)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1};function Jn(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function cc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var za={isMounted:function(n){return(n=n._reactInternals)?li(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Mn(),p=ur(n),x=Ri(u,p);x.payload=i,a!=null&&(x.callback=a),i=sr(n,x,p),i!==null&&(ti(i,n,p,u),Da(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Mn(),p=ur(n),x=Ri(u,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=sr(n,x,p),i!==null&&(ti(i,n,p,u),Da(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),u=ur(n),p=Ri(a,u);p.tag=2,i!=null&&(p.callback=i),i=sr(n,p,u),i!==null&&(ti(i,n,u,a),Da(i,n,u))}};function _p(n,i,a,u,p,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,T):i.prototype&&i.prototype.isPureReactComponent?!ho(a,u)||!ho(p,x):!0}function xp(n,i,a){var u=!1,p=nr,x=i.contextType;return typeof x=="object"&&x!==null?x=Wn(x):(p=An(i)?Pr:hn.current,u=i.contextTypes,x=(u=u!=null)?ds(n,p):nr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function yp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&za.enqueueReplaceState(i,i.state,null)}function fc(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Zu(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Wn(x):(x=An(i)?Pr:hn.current,p.context=ds(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(cc(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&za.enqueueReplaceState(p,p.state,null),Na(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function dc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function hc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var k_=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){qa||(qa=!0,Rc=u),hc(n,i)},a}function Mp(n,i,a){a=Ri(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){hc(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){hc(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Ep(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new k_;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=J_.bind(null,n,i,a),i.then(n,n))}function Tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wp(n,i,a,u,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,sr(a,i,1))),a.lanes|=1),n)}var B_=A.ReactCurrentOwner,Cn=!1;function Sn(n,i,a,u){i.child=n===null?Xh(i,null,a,u):gs(i,n.child,a,u)}function Ap(n,i,a,u,p){a=a.render;var x=i.ref;return _s(i,p),u=rc(n,i,a,u,x,p),a=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Pi(n,i,p)):(kt&&a&&Hu(i),i.flags|=1,Sn(n,i,u,p),i.child)}function Cp(n,i,a,u,p){if(n===null){var x=a.type;return typeof x=="function"&&!Uc(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,Rp(n,i,x,u,p)):(n=Qa(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,!(n.lanes&p)){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(T,u)&&n.ref===i.ref)return Pi(n,i,p)}return i.flags|=1,n=fr(x,u),n.ref=i.ref,n.return=i,i.child=n}function Rp(n,i,a,u,p){if(n!==null){var x=n.memoizedProps;if(ho(x,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=x,(n.lanes&p)!==0)n.flags&131072&&(Cn=!0);else return i.lanes=n.lanes,Pi(n,i,p)}return pc(n,i,a,u,p)}function Pp(n,i,a){var u=i.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ms,kn),kn|=a;else{if(!(a&1073741824))return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ms,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,Nt(Ms,kn),kn|=u}else x!==null?(u=x.baseLanes|a,i.memoizedState=null):u=a,Nt(Ms,kn),kn|=u;return Sn(n,i,p,a),i.child}function bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function pc(n,i,a,u,p){var x=An(a)?Pr:hn.current;return x=ds(i,x),_s(i,p),a=rc(n,i,a,u,x,p),u=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Pi(n,i,p)):(kt&&u&&Hu(i),i.flags|=1,Sn(n,i,a,p),i.child)}function Lp(n,i,a,u,p){if(An(a)){var x=!0;Ta(i)}else x=!1;if(_s(i,p),i.stateNode===null)Va(n,i),xp(i,a,u),fc(i,a,u,p),u=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var V=T.context,se=a.contextType;typeof se=="object"&&se!==null?se=Wn(se):(se=An(a)?Pr:hn.current,se=ds(i,se));var ye=a.getDerivedStateFromProps,Me=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==u||V!==se)&&yp(i,T,u,se),rr=!1;var xe=i.memoizedState;T.state=xe,Na(i,u,T,p),V=i.memoizedState,F!==u||xe!==V||wn.current||rr?(typeof ye=="function"&&(cc(i,a,ye,u),V=i.memoizedState),(F=rr||_p(i,a,F,u,xe,V,se))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),T.props=u,T.state=V,T.context=se,u=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,qh(n,i),F=i.memoizedProps,se=i.type===i.elementType?F:Jn(i.type,F),T.props=se,Me=i.pendingProps,xe=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=Wn(V):(V=An(a)?Pr:hn.current,V=ds(i,V));var He=a.getDerivedStateFromProps;(ye=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Me||xe!==V)&&yp(i,T,u,V),rr=!1,xe=i.memoizedState,T.state=xe,Na(i,u,T,p);var $e=i.memoizedState;F!==Me||xe!==$e||wn.current||rr?(typeof He=="function"&&(cc(i,a,He,u),$e=i.memoizedState),(se=rr||_p(i,a,se,u,xe,$e,V)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,$e,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,$e,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),T.props=u,T.state=$e,T.context=V,u=se):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return mc(n,i,a,u,x,p)}function mc(n,i,a,u,p,x){bp(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return p&&Oh(i,a,!1),Pi(n,i,x);u=i.stateNode,B_.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=gs(i,n.child,null,x),i.child=gs(i,null,F,x)):Sn(n,i,F,x),i.memoizedState=u.state,p&&Oh(i,a,!0),i.child}function Dp(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),Ju(n,i.containerInfo)}function Np(n,i,a,u,p){return ms(),Xu(p),i.flags|=256,Sn(n,i,a,u),i.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function vc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,a){var u=i.pendingProps,p=Ht.current,x=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Nt(Ht,p&1),n===null)return Wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(T=u.children,n=u.fallback,x?(u=i.mode,x=i.child,T={mode:"hidden",children:T},!(u&1)&&x!==null?(x.childLanes=0,x.pendingProps=T):x=el(T,u,0,null),n=Br(n,u,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=vc(a),i.memoizedState=gc,n):_c(i,T));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return z_(n,i,T,u,F,p,a);if(x){x=u.fallback,T=i.mode,p=n.child,F=p.sibling;var V={mode:"hidden",children:u.children};return!(T&1)&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=fr(p,V),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?x=fr(F,x):(x=Br(x,T,a,null),x.flags|=2),x.return=i,u.return=i,u.sibling=x,i.child=u,u=x,x=i.child,T=n.child.memoizedState,T=T===null?vc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,i.memoizedState=gc,u}return x=n.child,n=x.sibling,u=fr(x,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function _c(n,i){return i=el({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ha(n,i,a,u){return u!==null&&Xu(u),gs(i,n.child,null,a),n=_c(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function z_(n,i,a,u,p,x,T){if(a)return i.flags&256?(i.flags&=-257,u=dc(Error(t(422))),Ha(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=u.fallback,p=i.mode,u=el({mode:"visible",children:u.children},p,0,null),x=Br(x,p,T,null),x.flags|=2,u.return=i,x.return=i,u.sibling=x,i.child=u,i.mode&1&&gs(i,n.child,null,T),i.child.memoizedState=vc(T),i.memoizedState=gc,x);if(!(i.mode&1))return Ha(n,i,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,x=Error(t(419)),u=dc(x,u,void 0),Ha(n,i,T,u)}if(F=(T&n.childLanes)!==0,Cn||F){if(u=sn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(u.suspendedLanes|T)?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Ci(n,p),ti(u,n,p,-1))}return Ic(),u=dc(Error(t(421))),Ha(n,i,T,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Q_.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,Fn=er(p.nextSibling),On=i,kt=!0,Zn=null,n!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=br,wi=n.id,Ai=n.overflow,br=i),i=_c(i,u.children),i.flags|=4096,i)}function Up(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),$u(n.return,i,a)}function xc(n,i,a,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=p)}function Op(n,i,a){var u=i.pendingProps,p=u.revealOrder,x=u.tail;if(Sn(n,i,u.children,a),u=Ht.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Up(n,a,i);else if(n.tag===19)Up(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(Ht,u),!(i.mode&1))i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ia(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),xc(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ia(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}xc(i,!0,a,null,x);break;case"together":xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function H_(n,i,a){switch(i.tag){case 3:Dp(i),ms();break;case 5:Kh(i);break;case 1:An(i.type)&&Ta(i);break;case 4:Ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Nt(ba,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Ht,Ht.current&1),i.flags|=128,null):a&i.child.childLanes?Ip(n,i,a):(Nt(Ht,Ht.current&1),n=Pi(n,i,a),n!==null?n.sibling:null);Nt(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,n.flags&128){if(u)return Op(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Nt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,Pp(n,i,a)}return Pi(n,i,a)}var Fp,yc,kp,Bp;Fp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yc=function(){},kp=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,Nr(fi.current);var x=null;switch(a){case"input":p=O(n,p),u=O(n,u),x=[];break;case"select":p=oe({},p,{value:void 0}),u=oe({},u,{value:void 0}),x=[];break;case"textarea":p=R(n,p),u=R(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Sa)}vt(a,u);var T;a=null;for(se in p)if(!u.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var F=p[se];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?x||(x=[]):(x=x||[]).push(se,null));for(se in u){var V=u[se];if(F=p!=null?p[se]:void 0,u.hasOwnProperty(se)&&V!==F&&(V!=null||F!=null))if(se==="style")if(F){for(T in F)!F.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&F[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(x||(x=[]),x.push(se,a)),a=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(x=x||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&Ut("scroll",n),x||F===V||(x=[])):(x=x||[]).push(se,V))}a&&(x=x||[]).push("style",a);var se=x;(i.updateQueue=se)&&(i.flags|=4)}},Bp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ro(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function V_(n,i,a){var u=i.pendingProps;switch(Vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return An(i.type)&&Ea(),mn(i),null;case 3:return u=i.stateNode,xs(),Ot(wn),Ot(hn),tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ra(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Zn!==null&&(Lc(Zn),Zn=null))),yc(n,i),mn(i),null;case 5:Qu(i);var p=Nr(Eo.current);if(a=i.type,n!==null&&i.stateNode!=null)kp(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Nr(fi.current),Ra(i)){u=i.stateNode,a=i.type;var x=i.memoizedProps;switch(u[ci]=i,u[_o]=x,n=(i.mode&1)!==0,a){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(p=0;p<mo.length;p++)Ut(mo[p],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":Qe(u,x),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Ut("invalid",u);break;case"textarea":ee(u,x),Ut("invalid",u)}vt(a,x),p=null;for(var T in x)if(x.hasOwnProperty(T)){var F=x[T];T==="children"?typeof F=="string"?u.textContent!==F&&(x.suppressHydrationWarning!==!0&&ya(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&ya(u.textContent,F,n),p=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Ut("scroll",u)}switch(a){case"input":ct(u),Pe(u,x,!0);break;case"textarea":ct(u),_e(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=Sa)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[ci]=i,n[_o]=u,Fp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ft(a,u),a){case"dialog":Ut("cancel",n),Ut("close",n),p=u;break;case"iframe":case"object":case"embed":Ut("load",n),p=u;break;case"video":case"audio":for(p=0;p<mo.length;p++)Ut(mo[p],n);p=u;break;case"source":Ut("error",n),p=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),p=u;break;case"details":Ut("toggle",n),p=u;break;case"input":Qe(n,u),p=O(n,u),Ut("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=oe({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":ee(n,u),p=R(n,u),Ut("invalid",n);break;default:p=u}vt(a,p),F=p;for(x in F)if(F.hasOwnProperty(x)){var V=F[x];x==="style"?at(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&We(n,V)):x==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ht(n,V):typeof V=="number"&&ht(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Ut("scroll",n):V!=null&&C(n,x,V,T))}switch(a){case"input":ct(n),Pe(n,u,!1);break;case"textarea":ct(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?N(n,!!u.multiple,x,!1):u.defaultValue!=null&&N(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Sa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(Eo.current),Nr(fi.current),Ra(i)){if(u=i.stateNode,a=i.memoizedProps,u[ci]=i,(x=u.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:ya(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ya(u.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ci]=i,i.stateNode=u}return mn(i),null;case 13:if(Ot(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Fn!==null&&i.mode&1&&!(i.flags&128))Vh(),ms(),i.flags|=98560,x=!1;else if(x=Ra(i),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ci]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;mn(i),x=!1}else Zn!==null&&(Lc(Zn),Zn=null),x=!0;if(!x)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Ht.current&1?Jt===0&&(Jt=3):Ic())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return xs(),yc(n,i),n===null&&go(i.stateNode.containerInfo),mn(i),null;case 10:return Yu(i.type._context),mn(i),null;case 17:return An(i.type)&&Ea(),mn(i),null;case 19:if(Ot(Ht),x=i.memoizedState,x===null)return mn(i),null;if(u=(i.flags&128)!==0,T=x.rendering,T===null)if(u)Ro(x,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(T=Ia(n),T!==null){for(i.flags|=128,Ro(x,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)x=a,n=u,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(Ht,Ht.current&1|2),i.child}n=n.sibling}x.tail!==null&&J()>Es&&(i.flags|=128,u=!0,Ro(x,!1),i.lanes=4194304)}else{if(!u)if(n=Ia(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ro(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!kt)return mn(i),null}else 2*J()-x.renderingStartTime>Es&&a!==1073741824&&(i.flags|=128,u=!0,Ro(x,!1),i.lanes=4194304);x.isBackwards?(T.sibling=i.child,i.child=T):(a=x.last,a!==null?a.sibling=T:i.child=T,x.last=T)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=J(),i.sibling=null,a=Ht.current,Nt(Ht,u?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return Nc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?kn&1073741824&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function G_(n,i){switch(Vu(i),i.tag){case 1:return An(i.type)&&Ea(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Ot(wn),Ot(hn),tc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Qu(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return xs(),null;case 10:return Yu(i.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Ga=!1,gn=!1,W_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ss(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function Sc(n,i,a){try{a()}catch(u){jt(n,i,u)}}var zp=!1;function X_(n,i){if(Nu=ua,n=_h(),wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,F=-1,V=-1,se=0,ye=0,Me=n,xe=null;t:for(;;){for(var He;Me!==a||p!==0&&Me.nodeType!==3||(F=T+p),Me!==x||u!==0&&Me.nodeType!==3||(V=T+u),Me.nodeType===3&&(T+=Me.nodeValue.length),(He=Me.firstChild)!==null;)xe=Me,Me=He;for(;;){if(Me===n)break t;if(xe===a&&++se===p&&(F=T),xe===x&&++ye===u&&(V=T),(He=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=He}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Iu={focusedElem:n,selectionRange:a},ua=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var $e=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Je=$e.memoizedProps,qt=$e.memoizedState,Z=i.stateNode,X=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Je:Jn(i.type,Je),qt);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){jt(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return $e=zp,zp=!1,$e}function Po(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Sc(i,a,x)}p=p.next}while(p!==u)}}function Wa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Mc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ci],delete i[_o],delete i[ku],delete i[C_],delete i[R_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ec(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Sa));else if(u!==4&&(n=n.child,n!==null))for(Ec(n,i,a),n=n.sibling;n!==null;)Ec(n,i,a),n=n.sibling}function Tc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,a),n=n.sibling;n!==null;)Tc(n,i,a),n=n.sibling}var un=null,Qn=!1;function or(n,i,a){for(a=a.child;a!==null;)Wp(n,i,a),a=a.sibling}function Wp(n,i,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 5:gn||Ss(a,i);case 6:var u=un,p=Qn;un=null,or(n,i,a),un=u,Qn=p,un!==null&&(Qn?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(Qn?(n=un,a=a.stateNode,n.nodeType===8?Fu(n.parentNode,a):n.nodeType===1&&Fu(n,a),oo(n)):Fu(un,a.stateNode));break;case 4:u=un,p=Qn,un=a.stateNode.containerInfo,Qn=!0,or(n,i,a),un=u,Qn=p;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,T=x.destroy;x=x.tag,T!==void 0&&(x&2||x&4)&&Sc(a,i,T),p=p.next}while(p!==u)}or(n,i,a);break;case 1:if(!gn&&(Ss(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(F){jt(a,i,F)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,or(n,i,a),gn=u):or(n,i,a);break;default:or(n,i,a)}}function Xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new W_),i.forEach(function(u){var p=e0.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function ei(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var x=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:un=F.stateNode,Qn=!1;break e;case 3:un=F.stateNode.containerInfo,Qn=!0;break e;case 4:un=F.stateNode.containerInfo,Qn=!0;break e}F=F.return}if(un===null)throw Error(t(160));Wp(x,T,p),un=null,Qn=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(se){jt(p,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,n),i=i.sibling}function jp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ei(i,n),hi(n),u&4){try{Po(3,n,n.return),Wa(3,n)}catch(Je){jt(n,n.return,Je)}try{Po(5,n,n.return)}catch(Je){jt(n,n.return,Je)}}break;case 1:ei(i,n),hi(n),u&512&&a!==null&&Ss(a,a.return);break;case 5:if(ei(i,n),hi(n),u&512&&a!==null&&Ss(a,a.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(Je){jt(n,n.return,Je)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&Ee(p,x),ft(F,T);var se=ft(F,x);for(T=0;T<V.length;T+=2){var ye=V[T],Me=V[T+1];ye==="style"?at(p,Me):ye==="dangerouslySetInnerHTML"?We(p,Me):ye==="children"?ht(p,Me):C(p,ye,Me,se)}switch(F){case"input":Ge(p,x);break;case"textarea":fe(p,x);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var He=x.value;He!=null?N(p,!!x.multiple,He,!1):xe!==!!x.multiple&&(x.defaultValue!=null?N(p,!!x.multiple,x.defaultValue,!0):N(p,!!x.multiple,x.multiple?[]:"",!1))}p[_o]=x}catch(Je){jt(n,n.return,Je)}}break;case 6:if(ei(i,n),hi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(Je){jt(n,n.return,Je)}}break;case 3:if(ei(i,n),hi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{oo(i.containerInfo)}catch(Je){jt(n,n.return,Je)}break;case 4:ei(i,n),hi(n);break;case 13:ei(i,n),hi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Cc=J())),u&4&&Xp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(se=gn)||ye,ei(i,n),gn=se):ei(i,n),hi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ye&&n.mode&1)for(Xe=n,ye=n.child;ye!==null;){for(Me=Xe=ye;Xe!==null;){switch(xe=Xe,He=xe.child,xe.tag){case 0:case 11:case 14:case 15:Po(4,xe,xe.return);break;case 1:Ss(xe,xe.return);var $e=xe.stateNode;if(typeof $e.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Je){jt(u,a,Je)}}break;case 5:Ss(xe,xe.return);break;case 22:if(xe.memoizedState!==null){$p(Me);continue}}He!==null?(He.return=xe,Xe=He):$p(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{p=Me.stateNode,se?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Me.stateNode,V=Me.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=it("display",T))}catch(Je){jt(n,n.return,Je)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=se?"":Me.memoizedProps}catch(Je){jt(n,n.return,Je)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ei(i,n),hi(n),u&4&&Xp(n);break;case 21:break;default:ei(i,n),hi(n)}}function hi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ht(p,""),u.flags&=-33);var x=Gp(n);Tc(n,x,p);break;case 3:case 4:var T=u.stateNode.containerInfo,F=Gp(n);Ec(n,F,T);break;default:throw Error(t(161))}}catch(V){jt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function j_(n,i,a){Xe=n,qp(n)}function qp(n,i,a){for(var u=(n.mode&1)!==0;Xe!==null;){var p=Xe,x=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Ga;if(!T){var F=p.alternate,V=F!==null&&F.memoizedState!==null||gn;F=Ga;var se=gn;if(Ga=T,(gn=V)&&!se)for(Xe=p;Xe!==null;)T=Xe,V=T.child,T.tag===22&&T.memoizedState!==null?Kp(p):V!==null?(V.return=T,Xe=V):Kp(p);for(;x!==null;)Xe=x,qp(x),x=x.sibling;Xe=p,Ga=F,gn=se}Yp(n)}else p.subtreeFlags&8772&&x!==null?(x.return=p,Xe=x):Yp(n)}}function Yp(n){for(;Xe!==null;){var i=Xe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:gn||Wa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Jn(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&$h(i,x,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$h(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ye=se.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&oo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&Mc(i)}catch(xe){jt(i,i.return,xe)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function $p(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Kp(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Wa(4,i)}catch(V){jt(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(V){jt(i,p,V)}}var x=i.return;try{Mc(i)}catch(V){jt(i,x,V)}break;case 5:var T=i.return;try{Mc(i)}catch(V){jt(i,T,V)}}}catch(V){jt(i,i.return,V)}if(i===n){Xe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Xe=F;break}Xe=i.return}}var q_=Math.ceil,Xa=A.ReactCurrentDispatcher,wc=A.ReactCurrentOwner,jn=A.ReactCurrentBatchConfig,At=0,sn=null,Yt=null,cn=0,kn=0,Ms=tr(0),Jt=0,bo=null,Ur=0,ja=0,Ac=0,Lo=null,Rn=null,Cc=0,Es=1/0,bi=null,qa=!1,Rc=null,ar=null,Ya=!1,lr=null,$a=0,Do=0,Pc=null,Ka=-1,Za=0;function Mn(){return At&6?J():Ka!==-1?Ka:Ka=J()}function ur(n){return n.mode&1?At&2&&cn!==0?cn&-cn:b_.transition!==null?(Za===0&&(Za=Dt()),Za):(n=wt,n!==0||(n=window.event,n=n===void 0?16:Jd(n.type)),n):1}function ti(n,i,a,u){if(50<Do)throw Do=0,Pc=null,Error(t(185));tn(n,a,u),(!(At&2)||n!==sn)&&(n===sn&&(!(At&2)&&(ja|=a),Jt===4&&cr(n,cn)),Pn(n,u),a===1&&At===0&&!(i.mode&1)&&(Es=J()+500,wa&&ir()))}function Pn(n,i){var a=n.callbackNode;yn(n,i);var u=fn(n,n===sn?cn:0);if(u===0)a!==null&&P(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&P(a),i===1)n.tag===0?P_(Jp.bind(null,n)):Fh(Jp.bind(null,n)),w_(function(){!(At&6)&&ir()}),a=null;else{switch(ui(u)){case 1:a=we;break;case 4:a=Ue;break;case 16:a=ze;break;case 536870912:a=lt;break;default:a=ze}a=om(a,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zp(n,i){if(Ka=-1,Za=0,At&6)throw Error(t(327));var a=n.callbackNode;if(Ts()&&n.callbackNode!==a)return null;var u=fn(n,n===sn?cn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Ja(n,u);else{i=u;var p=At;At|=2;var x=em();(sn!==n||cn!==i)&&(bi=null,Es=J()+500,Fr(n,i));do try{K_();break}catch(F){Qp(n,F)}while(!0);qu(),Xa.current=x,At=p,Yt!==null?i=0:(sn=null,cn=0,i=Jt)}if(i!==0){if(i===2&&(p=Mi(n),p!==0&&(u=p,i=bc(n,p))),i===1)throw a=bo,Fr(n,0),cr(n,u),Pn(n,J()),a;if(i===6)cr(n,u);else{if(p=n.current.alternate,!(u&30)&&!Y_(p)&&(i=Ja(n,u),i===2&&(x=Mi(n),x!==0&&(u=x,i=bc(n,x))),i===1))throw a=bo,Fr(n,0),cr(n,u),Pn(n,J()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Rn,bi);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=Cc+500-J(),10<i)){if(fn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Ou(kr.bind(null,n,Rn,bi),i);break}kr(n,Rn,bi);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var T=31-pt(u);x=1<<T,T=i[T],T>p&&(p=T),u&=~x}if(u=p,u=J()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*q_(u/1960))-u,10<u){n.timeoutHandle=Ou(kr.bind(null,n,Rn,bi),u);break}kr(n,Rn,bi);break;case 5:kr(n,Rn,bi);break;default:throw Error(t(329))}}}return Pn(n,J()),n.callbackNode===a?Zp.bind(null,n):null}function bc(n,i){var a=Lo;return n.current.memoizedState.isDehydrated&&(Fr(n,i).flags|=256),n=Ja(n,i),n!==2&&(i=Rn,Rn=a,i!==null&&Lc(i)),n}function Lc(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function Y_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],x=p.getSnapshot;p=p.value;try{if(!Kn(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~Ac,i&=~ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-pt(i),u=1<<a;n[a]=-1,i&=~u}}function Jp(n){if(At&6)throw Error(t(327));Ts();var i=fn(n,0);if(!(i&1))return Pn(n,J()),null;var a=Ja(n,i);if(n.tag!==0&&a===2){var u=Mi(n);u!==0&&(i=u,a=bc(n,u))}if(a===1)throw a=bo,Fr(n,0),cr(n,i),Pn(n,J()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Rn,bi),Pn(n,J()),null}function Dc(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Es=J()+500,wa&&ir())}}function Or(n){lr!==null&&lr.tag===0&&!(At&6)&&Ts();var i=At;At|=1;var a=jn.transition,u=wt;try{if(jn.transition=null,wt=1,n)return n()}finally{wt=u,jn.transition=a,At=i,!(At&6)&&ir()}}function Nc(){kn=Ms.current,Ot(Ms)}function Fr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,T_(a)),Yt!==null)for(a=Yt.return;a!==null;){var u=a;switch(Vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ea();break;case 3:xs(),Ot(wn),Ot(hn),tc();break;case 5:Qu(u);break;case 4:xs();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Yu(u.type._context);break;case 22:case 23:Nc()}a=a.return}if(sn=n,Yt=n=fr(n.current,null),cn=kn=i,Jt=0,bo=null,Ac=ja=Ur=0,Rn=Lo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,x=a.pending;if(x!==null){var T=x.next;x.next=p,u.next=T}a.pending=u}Dr=null}return n}function Qp(n,i){do{var a=Yt;try{if(qu(),Ua.current=Ba,Oa){for(var u=Vt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Oa=!1}if(Ir=0,rn=Zt=Vt=null,To=!1,wo=0,wc.current=null,a===null||a.return===null){Jt=1,bo=i,Yt=null;break}e:{var x=n,T=a.return,F=a,V=i;if(i=cn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,ye=F,Me=ye.tag;if(!(ye.mode&1)&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var He=Tp(T);if(He!==null){He.flags&=-257,wp(He,T,F,x,i),He.mode&1&&Ep(x,se,i),i=He,V=se;var $e=i.updateQueue;if($e===null){var Je=new Set;Je.add(V),i.updateQueue=Je}else $e.add(V);break e}else{if(!(i&1)){Ep(x,se,i),Ic();break e}V=Error(t(426))}}else if(kt&&F.mode&1){var qt=Tp(T);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),wp(qt,T,F,x,i),Xu(ys(V,F));break e}}x=V=ys(V,F),Jt!==4&&(Jt=2),Lo===null?Lo=[x]:Lo.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var Z=Sp(x,V,i);Yh(x,Z);break e;case 1:F=V;var X=x.type,te=x.stateNode;if(!(x.flags&128)&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(ar===null||!ar.has(te)))){x.flags|=65536,i&=-i,x.lanes|=i;var Re=Mp(x,F,i);Yh(x,Re);break e}}x=x.return}while(x!==null)}nm(a)}catch(et){i=et,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function em(){var n=Xa.current;return Xa.current=Ba,n===null?Ba:n}function Ic(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||!(Ur&268435455)&&!(ja&268435455)||cr(sn,cn)}function Ja(n,i){var a=At;At|=2;var u=em();(sn!==n||cn!==i)&&(bi=null,Fr(n,i));do try{$_();break}catch(p){Qp(n,p)}while(!0);if(qu(),At=a,Xa.current=u,Yt!==null)throw Error(t(261));return sn=null,cn=0,Jt}function $_(){for(;Yt!==null;)tm(Yt)}function K_(){for(;Yt!==null&&!Y();)tm(Yt)}function tm(n){var i=sm(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?nm(n):Yt=i,wc.current=null}function nm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=G_(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Yt=null;return}}else if(a=V_(a,i,kn),a!==null){Yt=a;return}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Jt===0&&(Jt=5)}function kr(n,i,a){var u=wt,p=jn.transition;try{jn.transition=null,wt=1,Z_(n,i,a,u)}finally{jn.transition=p,wt=u}return null}function Z_(n,i,a,u){do Ts();while(lr!==null);if(At&6)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(ln(n,x),n===sn&&(Yt=sn=null,cn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ya||(Ya=!0,om(ze,function(){return Ts(),null})),x=(a.flags&15990)!==0,a.subtreeFlags&15990||x){x=jn.transition,jn.transition=null;var T=wt;wt=1;var F=At;At|=4,wc.current=null,X_(n,a),jp(a,n),v_(Iu),ua=!!Nu,Iu=Nu=null,n.current=a,j_(a),ie(),At=F,wt=T,jn.transition=x}else n.current=a;if(Ya&&(Ya=!1,lr=n,$a=p),x=n.pendingLanes,x===0&&(ar=null),St(a.stateNode),Pn(n,J()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(qa)throw qa=!1,n=Rc,Rc=null,n;return $a&1&&n.tag!==0&&Ts(),x=n.pendingLanes,x&1?n===Pc?Do++:(Do=0,Pc=n):Do=0,ir(),null}function Ts(){if(lr!==null){var n=ui($a),i=jn.transition,a=wt;try{if(jn.transition=null,wt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,$a=0,At&6)throw Error(t(331));var p=At;for(At|=4,Xe=n.current;Xe!==null;){var x=Xe,T=x.child;if(Xe.flags&16){var F=x.deletions;if(F!==null){for(var V=0;V<F.length;V++){var se=F[V];for(Xe=se;Xe!==null;){var ye=Xe;switch(ye.tag){case 0:case 11:case 15:Po(8,ye,x)}var Me=ye.child;if(Me!==null)Me.return=ye,Xe=Me;else for(;Xe!==null;){ye=Xe;var xe=ye.sibling,He=ye.return;if(Hp(ye),ye===se){Xe=null;break}if(xe!==null){xe.return=He,Xe=xe;break}Xe=He}}}var $e=x.alternate;if($e!==null){var Je=$e.child;if(Je!==null){$e.child=null;do{var qt=Je.sibling;Je.sibling=null,Je=qt}while(Je!==null)}}Xe=x}}if(x.subtreeFlags&2064&&T!==null)T.return=x,Xe=T;else e:for(;Xe!==null;){if(x=Xe,x.flags&2048)switch(x.tag){case 0:case 11:case 15:Po(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,Xe=Z;break e}Xe=x.return}}var X=n.current;for(Xe=X;Xe!==null;){T=Xe;var te=T.child;if(T.subtreeFlags&2064&&te!==null)te.return=T,Xe=te;else e:for(T=X;Xe!==null;){if(F=Xe,F.flags&2048)try{switch(F.tag){case 0:case 11:case 15:Wa(9,F)}}catch(et){jt(F,F.return,et)}if(F===T){Xe=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,Xe=Re;break e}Xe=F.return}}if(At=p,ir(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{wt=a,jn.transition=i}}return!1}function im(n,i,a){i=ys(a,i),i=Sp(n,i,1),n=sr(n,i,1),i=Mn(),n!==null&&(tn(n,1,i),Pn(n,i))}function jt(n,i,a){if(n.tag===3)im(n,n,a);else for(;i!==null;){if(i.tag===3){im(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=ys(a,n),n=Mp(i,n,1),i=sr(i,n,1),n=Mn(),i!==null&&(tn(i,1,n),Pn(i,n));break}}i=i.return}}function J_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(Jt===4||Jt===3&&(cn&130023424)===cn&&500>J()-Cc?Fr(n,0):Ac|=a),Pn(n,i)}function rm(n,i){i===0&&(n.mode&1?(i=Xt,Xt<<=1,!(Xt&130023424)&&(Xt=4194304)):i=1);var a=Mn();n=Ci(n,i),n!==null&&(tn(n,i,a),Pn(n,a))}function Q_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(n,a)}function e0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),rm(n,a)}var sm;sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)Cn=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Cn=!1,H_(n,i,a);Cn=!!(n.flags&131072)}else Cn=!1,kt&&i.flags&1048576&&kh(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(n,i),n=i.pendingProps;var p=ds(i,hn.current);_s(i,a),p=rc(null,i,u,n,p,a);var x=sc();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(x=!0,Ta(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Zu(i),p.updater=za,i.stateNode=p,p._reactInternals=i,fc(i,u,n,a),i=mc(null,i,u,!0,x,a)):(i.tag=0,kt&&x&&Hu(i),Sn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=n0(u),n=Jn(u,n),p){case 0:i=pc(null,i,u,n,a);break e;case 1:i=Lp(null,i,u,n,a);break e;case 11:i=Ap(null,i,u,n,a);break e;case 14:i=Cp(null,i,u,Jn(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Jn(u,p),pc(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Jn(u,p),Lp(n,i,u,p,a);case 3:e:{if(Dp(i),n===null)throw Error(t(387));u=i.pendingProps,x=i.memoizedState,p=x.element,qh(n,i),Na(i,u,null,a);var T=i.memoizedState;if(u=T.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=ys(Error(t(423)),i),i=Np(n,i,u,a,p);break e}else if(u!==p){p=ys(Error(t(424)),i),i=Np(n,i,u,a,p);break e}else for(Fn=er(i.stateNode.containerInfo.firstChild),On=i,kt=!0,Zn=null,a=Xh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),u===p){i=Pi(n,i,a);break e}Sn(n,i,u,a)}i=i.child}return i;case 5:return Kh(i),n===null&&Wu(i),u=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,T=p.children,Uu(u,p)?T=null:x!==null&&Uu(u,x)&&(i.flags|=32),bp(n,i),Sn(n,i,T,a),i.child;case 6:return n===null&&Wu(i),null;case 13:return Ip(n,i,a);case 4:return Ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,a):Sn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Jn(u,p),Ap(n,i,u,p,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,x=i.memoizedProps,T=p.value,Nt(ba,u._currentValue),u._currentValue=T,x!==null)if(Kn(x.value,T)){if(x.children===p.children&&!wn.current){i=Pi(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var F=x.dependencies;if(F!==null){T=x.child;for(var V=F.firstContext;V!==null;){if(V.context===u){if(x.tag===1){V=Ri(-1,a&-a),V.tag=2;var se=x.updateQueue;if(se!==null){se=se.shared;var ye=se.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),se.pending=V}}x.lanes|=a,V=x.alternate,V!==null&&(V.lanes|=a),$u(x.return,a,i),F.lanes|=a;break}V=V.next}}else if(x.tag===10)T=x.type===i.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),$u(T,a,i),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===i){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Sn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,_s(i,a),p=Wn(p),u=u(p),i.flags|=1,Sn(n,i,u,a),i.child;case 14:return u=i.type,p=Jn(u,i.pendingProps),p=Jn(u.type,p),Cp(n,i,u,p,a);case 15:return Rp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Jn(u,p),Va(n,i),i.tag=1,An(u)?(n=!0,Ta(i)):n=!1,_s(i,a),xp(i,u,p),fc(i,u,p,a),mc(null,i,u,!0,n,a);case 19:return Op(n,i,a);case 22:return Pp(n,i,a)}throw Error(t(156,i.tag))};function om(n,i){return oa(n,i)}function t0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,a,u){return new t0(n,i,a,u)}function Uc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function n0(n){if(typeof n=="function")return Uc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===le)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Qa(n,i,a,u,p,x){var T=2;if(u=n,typeof n=="function")Uc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case D:return Br(a.children,p,x,i);case B:T=8,p|=8;break;case b:return n=qn(12,a,i,p|2),n.elementType=b,n.lanes=x,n;case W:return n=qn(13,a,i,p),n.elementType=W,n.lanes=x,n;case j:return n=qn(19,a,i,p),n.elementType=j,n.lanes=x,n;case ae:return el(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:T=10;break e;case I:T=9;break e;case H:T=11;break e;case le:T=14;break e;case re:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(T,a,i,p),i.elementType=n,i.type=u,i.lanes=x,i}function Br(n,i,a,u){return n=qn(7,n,u,i),n.lanes=a,n}function el(n,i,a,u){return n=qn(22,n,u,i),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function Oc(n,i,a){return n=qn(6,n,null,i),n.lanes=a,n}function Fc(n,i,a){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function i0(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function kc(n,i,a,u,p,x,T,F,V){return n=new i0(n,i,a,F,V),i===1?(i=1,x===!0&&(i|=8)):i=0,x=qn(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(x),n}function r0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function am(n){if(!n)return nr;n=n._reactInternals;e:{if(li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return Uh(n,a,i)}return i}function lm(n,i,a,u,p,x,T,F,V){return n=kc(a,u,!0,n,p,x,T,F,V),n.context=am(null),a=n.current,u=Mn(),p=ur(a),x=Ri(u,p),x.callback=i??null,sr(a,x,p),n.current.lanes=p,tn(n,p,u),Pn(n,u),n}function tl(n,i,a,u){var p=i.current,x=Mn(),T=ur(p);return a=am(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(x,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(p,i,T),n!==null&&(ti(n,p,T,x),Da(n,p,T)),T}function nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Bc(n,i){um(n,i),(n=n.alternate)&&um(n,i)}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zc(n){this._internalRoot=n}il.prototype.render=zc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));tl(n,i,null,null)},il.prototype.unmount=zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){tl(null,n,null,null)}),i[Ei]=null}};function il(n){this._internalRoot=n}il.prototype.unstable_scheduleHydration=function(n){if(n){var i=qd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&Kd(n)}};function Hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function s0(n,i,a,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var se=nl(T);x.call(se)}}var T=lm(i,u,n,0,null,!1,!1,"",fm);return n._reactRootContainer=T,n[Ei]=T.current,go(n.nodeType===8?n.parentNode:n),Or(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var se=nl(V);F.call(se)}}var V=kc(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=V,n[Ei]=V.current,go(n.nodeType===8?n.parentNode:n),Or(function(){tl(i,V,a,u)}),V}function sl(n,i,a,u,p){var x=a._reactRootContainer;if(x){var T=x;if(typeof p=="function"){var F=p;p=function(){var V=nl(T);F.call(V)}}tl(i,T,n,p)}else T=s0(a,i,n,p,u);return nl(T)}Xd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=yt(i.pendingLanes);a!==0&&(nn(i,a|1),Pn(i,J()),!(At&6)&&(Es=J()+500,ir()))}break;case 13:Or(function(){var u=Ci(n,1);if(u!==null){var p=Mn();ti(u,n,1,p)}}),Bc(n,1)}},du=function(n){if(n.tag===13){var i=Ci(n,134217728);if(i!==null){var a=Mn();ti(i,n,134217728,a)}Bc(n,134217728)}},jd=function(n){if(n.tag===13){var i=ur(n),a=Ci(n,i);if(a!==null){var u=Mn();ti(a,n,i,u)}Bc(n,i)}},qd=function(){return wt},Yd=function(n,i){var a=wt;try{return wt=n,i()}finally{wt=a}},Ie=function(n,i,a){switch(i){case"input":if(Ge(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Ma(u);if(!p)throw Error(t(90));ge(u),Ge(u,p)}}}break;case"textarea":fe(n,a);break;case"select":i=a.value,i!=null&&N(n,!!a.multiple,i,!1)}},It=Dc,Kt=Or;var o0={usingClientEntryPoint:!1,Events:[xo,cs,Ma,Fe,dt,Dc]},No={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a0={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ra(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{ot=ol.inject(a0),Ze=ol}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0,bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(i))throw Error(t(200));return r0(n,i,null,a)},bn.createRoot=function(n,i){if(!Hc(n))throw Error(t(299));var a=!1,u="",p=cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=kc(n,1,!1,null,null,a,!1,u,p),n[Ei]=i.current,go(n.nodeType===8?n.parentNode:n),new zc(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ra(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Or(n)},bn.hydrate=function(n,i,a){if(!rl(i))throw Error(t(200));return sl(null,n,i,!0,a)},bn.hydrateRoot=function(n,i,a){if(!Hc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,x="",T=cm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=lm(i,null,n,1,a??null,p,!1,x,T),n[Ei]=i.current,go(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new il(i)},bn.render=function(n,i,a){if(!rl(i))throw Error(t(200));return sl(null,n,i,!1,a)},bn.unmountComponentAtNode=function(n){if(!rl(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},bn.unstable_batchedUpdates=Dc,bn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return sl(n,i,a,!1,u)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var xm;function wd(){if(xm)return Wc.exports;xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wc.exports=p0(),Wc.exports}var ym;function m0(){if(ym)return ll;ym=1;var s=wd();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var g0=m0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="172",v0=0,Sm=1,_0=2,Xg=1,x0=2,Fi=3,Er=0,Dn=1,ki=2,Sr=0,Vs=1,Mm=2,Em=3,Tm=4,y0=5,Yr=100,S0=101,M0=102,E0=103,T0=104,w0=200,A0=201,C0=202,R0=203,If=204,Uf=205,P0=206,b0=207,L0=208,D0=209,N0=210,I0=211,U0=212,O0=213,F0=214,Of=0,Ff=1,kf=2,js=3,Bf=4,zf=5,Hf=6,Vf=7,Cd=0,k0=1,B0=2,Mr=0,z0=1,H0=2,V0=3,G0=4,W0=5,X0=6,j0=7,jg=300,qs=301,Ys=302,Gf=303,Wf=304,iu=306,Xf=1e3,Kr=1001,jf=1002,ai=1003,q0=1004,ul=1005,mi=1006,qc=1007,Zr=1008,Gi=1009,qg=1010,Yg=1011,Xo=1012,Rd=1013,Jr=1014,Bi=1015,$o=1016,Pd=1017,bd=1018,$s=1020,$g=35902,Kg=1021,Zg=1022,oi=1023,Jg=1024,Qg=1025,Gs=1026,Ks=1027,ev=1028,Ld=1029,tv=1030,Dd=1031,Nd=1033,ql=33776,Yl=33777,$l=33778,Kl=33779,qf=35840,Yf=35841,$f=35842,Kf=35843,Zf=36196,Jf=37492,Qf=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,ud=37817,cd=37818,fd=37819,dd=37820,hd=37821,Zl=36492,pd=36494,md=36495,nv=36283,gd=36284,vd=36285,_d=36286,Y0=3200,$0=3201,iv=0,K0=1,xr="",$n="srgb",Zs="srgb-linear",eu="linear",bt="srgb",ws=7680,wm=519,Z0=512,J0=513,Q0=514,rv=515,ex=516,tx=517,nx=518,ix=519,Am=35044,Cm="300 es",zi=2e3,tu=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,xd=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function rx(s,e){return(s%e+e)%e}function $c(s,e,t){return(1-t)*s+t*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,r,o,l,c,f,d,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],m=r[4],g=r[7],_=r[2],y=r[5],M=r[8],E=o[0],S=o[3],v=o[6],L=o[1],C=o[4],A=o[7],z=o[2],U=o[5],D=o[8];return l[0]=c*E+f*L+d*z,l[3]=c*S+f*C+d*U,l[6]=c*v+f*A+d*D,l[1]=h*E+m*L+g*z,l[4]=h*S+m*C+g*U,l[7]=h*v+m*A+g*D,l[2]=_*E+y*L+M*z,l[5]=_*S+y*C+M*U,l[8]=_*v+y*A+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-r*l*m+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*c-f*h,_=f*d-m*l,y=h*l-c*d,M=t*g+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(f*r-o*c)*E,e[3]=_*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-f*t)*E,e[6]=y*E,e[7]=(r*d-h*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new mt;function sv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sx(){const s=nu("canvas");return s.style.display="block",s}const Rm={};function Bs(s){s in Rm||(Rm[s]=!0,console.warn(s))}function ox(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function ax(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(o.r=Hi(o.r),o.g=Hi(o.g),o.b=Hi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===xr?eu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:eu,toXYZ:Pm,fromXYZ:bm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:Pm,fromXYZ:bm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const Rt=ux();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=nu("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Hi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Hi(t[r]/255)*255):t[r]=Hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class ov{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Zc(o[c].image)):l.push(Zc(o[c]))}else l=Zc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dx=0;class Nn extends Qs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=Kr,o=Kr,l=mi,c=Zr,f=oi,d=Gi,h=Nn.DEFAULT_ANISOTROPY,m=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=eo(),this.name="",this.source=new ov(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=jg;Nn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],y=d[5],M=d[9],E=d[2],S=d[6],v=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,A=(y+1)/2,z=(v+1)/2,U=(m+_)/4,D=(g+E)/4,B=(M+S)/4;return C>A&&C>z?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=U/r,l=D/r):A>z?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=U/o,l=B/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=D/l,o=B/l),this.set(r,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hx extends Qs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Nn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ov(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends hx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class av extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ai,this.minFilter=ai,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class px extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ai,this.minFilter=ai,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const _=l[c+0],y=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||h!==y||m!==M){let S=1-f;const v=d*_+h*y+m*M+g*E,L=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const z=Math.sqrt(C),U=Math.atan2(z,v*L);S=Math.sin(S*U)/z,f=Math.sin(f*U)/z}const A=f*L;if(d=d*S+_*A,h=h*S+y*A,m=m*S+M*A,g=g*S+E*A,S===1-f){const z=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=z,h*=z,m*=z,g*=z}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[c],_=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+m*g+d*y-h*_,e[t+1]=d*M+m*_+h*g-f*y,e[t+2]=h*M+m*y+f*_-d*g,e[t+3]=m*M-f*g-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),g=f(l/2),_=d(r/2),y=d(o/2),M=d(l/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=r+f+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(c-o)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(m-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+h)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(c-o)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*f+o*h-l*d,this._y=o*m+c*d+l*f-r*h,this._z=l*m+c*h+r*d-o*f,this._w=c*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=r*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),m=2*(f*t-l*o),g=2*(l*r-c*t);return this.x=t+d*h+c*g-f*m,this.y=r+d*m+f*h-l*g,this.z=o+d*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new $,Lm=new Ko;class Zo{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ni):ni.fromBufferAttribute(l,c),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),fl.subVectors(this.max,Oo),Cs.subVectors(e.a,Oo),Rs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),hr.subVectors(Rs,Cs),pr.subVectors(Ps,Rs),zr.subVectors(Cs,Ps);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-zr.z,zr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,zr.z,0,-zr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-zr.y,zr.x,0];return!Qc(t,Cs,Rs,Ps,fl)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,Cs,Rs,Ps,fl))?!1:(dl.crossVectors(hr,pr),t=[dl.x,dl.y,dl.z],Qc(t,Cs,Rs,Ps,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new $,new $,new $,new $,new $,new $,new $,new $],ni=new $,cl=new Zo,Cs=new $,Rs=new $,Ps=new $,hr=new $,pr=new $,zr=new $,Oo=new $,fl=new $,dl=new $,Hr=new $;function Qc(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Hr.fromArray(s,l);const f=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),d=e.dot(Hr),h=t.dot(Hr),m=r.dot(Hr);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const mx=new Zo,Fo=new $,ef=new $;class Id{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):mx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Fo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(ef)),this.expandByPoint(Fo.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new $,tf=new $,hl=new $,mr=new $,nf=new $,pl=new $,rf=new $;class gx{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){tf.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(tf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(hl),f=mr.dot(this.direction),d=-mr.dot(hl),h=mr.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*d-f,_=c*f-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,y=g*(g+c*_+2*f)+_*(c*g+_+2*d)+h}else _=l,g=Math.max(0,-(c*_+f)),y=-g*g+_*(_+2*d)+h;else _=-l,g=Math.max(0,-(c*_+f)),y=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-c*l+f)),_=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),y=_*(_+2*d)+h):(g=Math.max(0,-(c*l+f)),_=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+_*(_+2*d)+h);else _=c>0?-l:l,g=Math.max(0,-(c*_+f)),y=-g*g+_*(_+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(tf).addScaledVector(hl,_),y}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),o=Di.dot(Di)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),g>=0?(f=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,r,o,l){nf.subVectors(t,e),pl.subVectors(r,e),rf.crossVectors(nf,pl);let c=this.direction.dot(rf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;mr.subVectors(this.origin,e);const d=f*this.direction.dot(pl.crossVectors(mr,pl));if(d<0)return null;const h=f*this.direction.dot(nf.cross(mr));if(h<0||d+h>c)return null;const m=-f*mr.dot(rf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,o,l,c,f,d,h,m,g,_,y,M,E,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,m,g,_,y,M,E,S)}set(e,t,r,o,l,c,f,d,h,m,g,_,y,M,E,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=d,v[2]=h,v[6]=m,v[10]=g,v[14]=_,v[3]=y,v[7]=M,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=c*m,y=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=_-E*h,t[9]=-f*d,t[2]=E-_*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,y=d*g,M=h*m,E=h*g;t[0]=_+E*f,t[4]=M*f-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-f,t[2]=y*f-M,t[6]=E+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,y=d*g,M=h*m,E=h*g;t[0]=_-E*f,t[4]=-c*g,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*m,t[9]=E-_*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=M*h-y,t[8]=_*h+E,t[1]=d*g,t[5]=E*h+_,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,y=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*d,y=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=f*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,_x)}lookAt(e,t,r){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),gr.crossVectors(r,Bn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),gr.crossVectors(r,Bn)),gr.normalize(),ml.crossVectors(Bn,gr),o[0]=gr.x,o[4]=ml.x,o[8]=Bn.x,o[1]=gr.y,o[5]=ml.y,o[9]=Bn.y,o[2]=gr.z,o[6]=ml.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],m=r[1],g=r[5],_=r[9],y=r[13],M=r[2],E=r[6],S=r[10],v=r[14],L=r[3],C=r[7],A=r[11],z=r[15],U=o[0],D=o[4],B=o[8],b=o[12],w=o[1],I=o[5],H=o[9],W=o[13],j=o[2],le=o[6],re=o[10],ae=o[14],G=o[3],ce=o[7],oe=o[11],k=o[15];return l[0]=c*U+f*w+d*j+h*G,l[4]=c*D+f*I+d*le+h*ce,l[8]=c*B+f*H+d*re+h*oe,l[12]=c*b+f*W+d*ae+h*k,l[1]=m*U+g*w+_*j+y*G,l[5]=m*D+g*I+_*le+y*ce,l[9]=m*B+g*H+_*re+y*oe,l[13]=m*b+g*W+_*ae+y*k,l[2]=M*U+E*w+S*j+v*G,l[6]=M*D+E*I+S*le+v*ce,l[10]=M*B+E*H+S*re+v*oe,l[14]=M*b+E*W+S*ae+v*k,l[3]=L*U+C*w+A*j+z*G,l[7]=L*D+C*I+A*le+z*ce,l[11]=L*B+C*H+A*re+z*oe,l[15]=L*b+C*W+A*ae+z*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],v=e[15];return M*(+l*d*g-o*h*g-l*f*_+r*h*_+o*f*y-r*d*y)+E*(+t*d*y-t*h*_+l*c*_-o*c*y+o*h*m-l*d*m)+S*(+t*h*g-t*f*y-l*c*g+r*c*y+l*f*m-r*h*m)+v*(-o*f*m-t*d*g+t*f*_+o*c*g-r*c*_+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],v=e[15],L=g*S*h-E*_*h+E*d*y-f*S*y-g*d*v+f*_*v,C=M*_*h-m*S*h-M*d*y+c*S*y+m*d*v-c*_*v,A=m*E*h-M*g*h+M*f*y-c*E*y-m*f*v+c*g*v,z=M*g*d-m*E*d-M*f*_+c*E*_+m*f*S-c*g*S,U=t*L+r*C+o*A+l*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=L*D,e[1]=(E*_*l-g*S*l-E*o*y+r*S*y+g*o*v-r*_*v)*D,e[2]=(f*S*l-E*d*l+E*o*h-r*S*h-f*o*v+r*d*v)*D,e[3]=(g*d*l-f*_*l-g*o*h+r*_*h+f*o*y-r*d*y)*D,e[4]=C*D,e[5]=(m*S*l-M*_*l+M*o*y-t*S*y-m*o*v+t*_*v)*D,e[6]=(M*d*l-c*S*l-M*o*h+t*S*h+c*o*v-t*d*v)*D,e[7]=(c*_*l-m*d*l+m*o*h-t*_*h-c*o*y+t*d*y)*D,e[8]=A*D,e[9]=(M*g*l-m*E*l-M*r*y+t*E*y+m*r*v-t*g*v)*D,e[10]=(c*E*l-M*f*l+M*r*h-t*E*h-c*r*v+t*f*v)*D,e[11]=(m*f*l-c*g*l-m*r*h+t*g*h+c*r*y-t*f*y)*D,e[12]=z*D,e[13]=(m*E*o-M*g*o+M*r*_-t*E*_-m*r*S+t*g*S)*D,e[14]=(M*f*o-c*E*o-M*r*d+t*E*d+c*r*S-t*f*S)*D,e[15]=(c*g*o-m*f*o+m*r*d-t*g*d-c*r*_+t*f*_)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*c,0,h*d-o*f,m*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,g=f+f,_=l*h,y=l*m,M=l*g,E=c*m,S=c*g,v=f*g,L=d*h,C=d*m,A=d*g,z=r.x,U=r.y,D=r.z;return o[0]=(1-(E+v))*z,o[1]=(y+A)*z,o[2]=(M-C)*z,o[3]=0,o[4]=(y-A)*U,o[5]=(1-(_+v))*U,o[6]=(S+L)*U,o[7]=0,o[8]=(M+C)*D,o[9]=(S-L)*D,o[10]=(1-(_+E))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=bs.set(o[0],o[1],o[2]).length();const c=bs.set(o[4],o[5],o[6]).length(),f=bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ii.copy(this);const h=1/l,m=1/c,g=1/f;return ii.elements[0]*=h,ii.elements[1]*=h,ii.elements[2]*=h,ii.elements[4]*=m,ii.elements[5]*=m,ii.elements[6]*=m,ii.elements[8]*=g,ii.elements[9]*=g,ii.elements[10]*=g,t.setFromRotationMatrix(ii),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=zi){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let y,M;if(f===zi)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===tu)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=zi){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(c-l),_=(t+e)*h,y=(r+o)*m;let M,E;if(f===zi)M=(c+l)*g,E=-2*g;else if(f===tu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bs=new $,ii=new zt,vx=new $(0,0,0),_x=new $(1,1,1),gr=new $,ml=new $,Bn=new $,Dm=new zt,Nm=new Ko;class _i{constructor(e=0,t=0,r=0,o=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],m=o[9],g=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const Im=new $,Ls=new Ko,Ni=new zt,gl=new $,ko=new $,yx=new $,Sx=new Ko,Um=new $(1,0,0),Om=new $(0,1,0),Fm=new $(0,0,1),km={type:"added"},Mx={type:"removed"},Ds={type:"childadded",child:null},sf={type:"childremoved",child:null};class In extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new $,t=new _i,r=new Ko,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new mt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ko,gl,this.up):Ni.lookAt(gl,ko,this.up),this.quaternion.setFromRotationMatrix(Ni),o&&(Ni.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mx),sf.child=e,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new $(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new $,Ii=new $,of=new $,Ui=new $,Ns=new $,Is=new $,Bm=new $,af=new $,lf=new $,uf=new $,cf=new Lt,ff=new Lt,df=new Lt;class si{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ri.subVectors(e,t),o.cross(ri);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ri.subVectors(o,t),Ii.subVectors(r,t),of.subVectors(e,t);const c=ri.dot(ri),f=ri.dot(Ii),d=ri.dot(of),h=Ii.dot(Ii),m=Ii.dot(of),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const _=1/g,y=(h*d-f*m)*_,M=(c*m-f*d)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,Ui)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Ui.x),d.addScaledVector(c,Ui.y),d.addScaledVector(f,Ui.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return cf.setScalar(0),ff.setScalar(0),df.setScalar(0),cf.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,r),df.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(cf,l.x),c.addScaledVector(ff,l.y),c.addScaledVector(df,l.z),c}static isFrontFacing(e,t,r,o){return ri.subVectors(r,t),Ii.subVectors(e,t),ri.cross(Ii).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ri.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Ns.subVectors(o,r),Is.subVectors(l,r),af.subVectors(e,r);const d=Ns.dot(af),h=Is.dot(af);if(d<=0&&h<=0)return t.copy(r);lf.subVectors(e,o);const m=Ns.dot(lf),g=Is.dot(lf);if(m>=0&&g<=m)return t.copy(o);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(Ns,c);uf.subVectors(e,l);const y=Ns.dot(uf),M=Is.dot(uf);if(M>=0&&y<=M)return t.copy(l);const E=y*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(Is,f);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return Bm.subVectors(l,o),f=(g-m)/(g-m+(y-M)),t.copy(o).addScaledVector(Bm,f);const v=1/(S+E+_);return c=E*v,f=_*v,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function hf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=rx(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=hf(c,l,e+1/3),this.g=hf(c,l,e),this.b=hf(c,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=$n){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const r=uv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Rt.fromWorkingColorSpace(_n.copy(this),e),Math.round(xt(_n.r*255,0,255))*65536+Math.round(xt(_n.g*255,0,255))*256+Math.round(xt(_n.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=$n){Rt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(vl);const r=$c(vr.h,vl.h,t),o=$c(vr.s,vl.s,t),l=$c(vr.l,vl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Mt;Mt.NAMES=uv;let Ex=0;class Jo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Vs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Uf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==If&&(r.blendSrc=this.blendSrc),this.blendDst!==Uf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cv extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new $,_l=new Be;class vi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Am,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class fv extends vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class dv extends vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vi extends vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Tx=0;const Yn=new zt,pf=new In,Us=new $,zn=new Zo,Bo=new Zo,an=new $;class wr extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?dv:fv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,r){return Yn.makeTranslation(e,t,r),this.applyMatrix4(Yn),this}scale(e,t,r){return Yn.makeScale(e,t,r),this.applyMatrix4(Yn),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Id);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Bo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(zn.min,Bo.min),zn.expandByPoint(an),an.addVectors(zn.max,Bo.max),zn.expandByPoint(an)):(zn.expandByPoint(Bo.min),zn.expandByPoint(Bo.max))}zn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)an.fromBufferAttribute(f,h),d&&(Us.fromBufferAttribute(e,h),an.add(Us)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<r.count;B++)f[B]=new $,d[B]=new $;const h=new $,m=new $,g=new $,_=new Be,y=new Be,M=new Be,E=new $,S=new $;function v(B,b,w){h.fromBufferAttribute(r,B),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),_.fromBufferAttribute(l,B),y.fromBufferAttribute(l,b),M.fromBufferAttribute(l,w),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const I=1/(y.x*M.y-M.x*y.y);isFinite(I)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(I),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(I),f[B].add(E),f[b].add(E),f[w].add(E),d[B].add(S),d[b].add(S),d[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,b=L.length;B<b;++B){const w=L[B],I=w.start,H=w.count;for(let W=I,j=I+H;W<j;W+=3)v(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const C=new $,A=new $,z=new $,U=new $;function D(B){z.fromBufferAttribute(o,B),U.copy(z);const b=f[B];C.copy(b),C.sub(z.multiplyScalar(z.dot(b))).normalize(),A.crossVectors(U,b);const I=A.dot(d[B])<0?-1:1;c.setXYZW(B,C.x,C.y,C.z,I)}for(let B=0,b=L.length;B<b;++B){const w=L[B],I=w.start,H=w.count;for(let W=I,j=I+H;W<j;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new $,l=new $,c=new $,f=new $,d=new $,h=new $,m=new $,g=new $;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,_=new h.constructor(d.length*m);let y=0,M=0;for(let E=0,S=d.length;E<S;E++){f.isInterleavedBufferAttribute?y=d[E]*f.data.stride+f.offset:y=d[E]*m;for(let v=0;v<m;v++)_[M++]=h[y++]}return new vi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zm=new zt,Vr=new gx,xl=new Id,Hm=new $,yl=new $,Sl=new $,Ml=new $,mf=new $,El=new $,Vm=new $,Tl=new $;class gi extends In{constructor(e=new wr,t=new cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){El.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(mf.fromBufferAttribute(g,e),c?El.addScaledVector(mf,m):El.addScaledVector(mf.sub(t),m))}t.add(El)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(xl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(xl,Hm)===null||Vr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(zm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(zm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=c[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,z=C;A<z;A+=3){const U=f.getX(A),D=f.getX(A+1),B=f.getX(A+2);o=wl(this,v,e,r,h,m,g,U,D,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const L=f.getX(S),C=f.getX(S+1),A=f.getX(S+2);o=wl(this,c,e,r,h,m,g,L,C,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=c[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,z=C;A<z;A+=3){const U=A,D=A+1,B=A+2;o=wl(this,v,e,r,h,m,g,U,D,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const L=S,C=S+1,A=S+2;o=wl(this,c,e,r,h,m,g,L,C,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function wx(s,e,t,r,o,l,c,f){let d;if(e.side===Dn?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===Er,f),d===null)return null;Tl.copy(f),Tl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Tl);return h<t.near||h>t.far?null:{distance:h,point:Tl.clone(),object:s}}function wl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,yl),s.getVertexPosition(d,Sl),s.getVertexPosition(h,Ml);const m=wx(s,e,t,r,yl,Sl,Ml,Vm);if(m){const g=new $;si.getBarycoord(Vm,yl,Sl,Ml,g),o&&(m.uv=si.getInterpolatedAttribute(o,f,d,h,g,new Be)),l&&(m.uv1=si.getInterpolatedAttribute(l,f,d,h,g,new Be)),c&&(m.normal=si.getInterpolatedAttribute(c,f,d,h,g,new $),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new $,materialIndex:0};si.getNormal(yl,Sl,Ml,_.normal),m.face=_,m.barycoord=g}return m}class Qo extends wr{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Vi(h,3)),this.setAttribute("normal",new Vi(m,3)),this.setAttribute("uv",new Vi(g,2));function M(E,S,v,L,C,A,z,U,D,B,b){const w=A/D,I=z/B,H=A/2,W=z/2,j=U/2,le=D+1,re=B+1;let ae=0,G=0;const ce=new $;for(let oe=0;oe<re;oe++){const k=oe*I-W;for(let ne=0;ne<le;ne++){const Le=ne*w-H;ce[E]=Le*L,ce[S]=k*C,ce[v]=j,h.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[v]=U>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(ne/D),g.push(1-oe/B),ae+=1}}for(let oe=0;oe<B;oe++)for(let k=0;k<D;k++){const ne=_+k+le*oe,Le=_+k+le*(oe+1),Q=_+(k+1)+le*(oe+1),de=_+(k+1)+le*oe;d.push(ne,Le,de),d.push(Le,Q,de),G+=6}f.addGroup(y,G,b),y+=G,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const r=Js(s[t]);for(const o in r)e[o]=r[o]}return e}function Ax(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Cx={clone:Js,merge:En};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class pv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new $,Gm=new Be,Wm=new Be;class Hn extends pv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,Gm,Wm),t.subVectors(Wm,Gm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Fs=1;class bx extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Os,Fs,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Os,Fs,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Os,Fs,e,t);c.layers=this.layers,this.add(c);const f=new Hn(Os,Fs,e,t);f.layers=this.layers,this.add(f);const d=new Hn(Os,Fs,e,t);d.layers=this.layers,this.add(d);const h=new Hn(Os,Fs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class mv extends Nn{constructor(e,t,r,o,l,c,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,r,o,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qo(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:Sr});l.uniforms.tEquirect.value=t;const c=new gi(o,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=mi),new bx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Dx extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gf=new $,Nx=new $,Ix=new mt;class jr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gf.subVectors(r,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ix.getNormalMatrix(e),o=this.coplanarPoint(gf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Id,Al=new $;class Ud{constructor(e=new jr,t=new jr,r=new jr,o=new jr,l=new jr,c=new jr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],h=o[4],m=o[5],g=o[6],_=o[7],y=o[8],M=o[9],E=o[10],S=o[11],v=o[12],L=o[13],C=o[14],A=o[15];if(r[0].setComponents(d-l,_-h,S-y,A-v).normalize(),r[1].setComponents(d+l,_+h,S+y,A+v).normalize(),r[2].setComponents(d+c,_+m,S+M,A+L).normalize(),r[3].setComponents(d-c,_-m,S-M,A-L).normalize(),r[4].setComponents(d-f,_-g,S-E,A-C).normalize(),t===zi)r[5].setComponents(d+f,_+g,S+E,A+C).normalize();else if(t===tu)r[5].setComponents(f,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gv extends Nn{constructor(e,t,r,o,l,c,f,d,h,m=Gs){if(m!==Gs&&m!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Gs&&(r=Jr),r===void 0&&m===Ks&&(r=$s),super(null,o,l,c,f,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ai,this.minFilter=d!==void 0?d:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const m=r[o],_=r[o+1]-m,y=(c-m)/_;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Be:new $);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new $,o=[],l=[],c=[],f=new $,d=new zt;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new $)}l[0]=new $,c[0]=new $;let h=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);m<=h&&(h=m,r.set(1,0,0)),g<=h&&(h=g,r.set(0,1,0)),_<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(xt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(d.makeRotationAxis(f,M))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(xt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(o[M],y*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Od extends xi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new Be){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=d-this.aX,y=h-this.aY;d=_*m-y*g+this.aX,h=_*g+y*m+this.aY}return r.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ux extends Od{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,m,g){let _=(c-l)/h-(f-l)/(h+m)+(f-c)/m,y=(f-c)/m-(d-c)/(m+g)+(d-f)/g;_*=m,y*=m,o(c,f,_,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Rl=new $,vf=new Fd,_f=new Fd,xf=new Fd;class Ox extends xi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new $){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,m;this.closed||f>0?h=o[(f-1)%l]:(Rl.subVectors(o[0],o[1]).add(o[0]),h=Rl);const g=o[f%l],_=o[(f+1)%l];if(this.closed||f+2<l?m=o[(f+2)%l]:(Rl.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),y),E=Math.pow(g.distanceToSquared(_),y),S=Math.pow(_.distanceToSquared(m),y);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),vf.initNonuniformCatmullRom(h.x,g.x,_.x,m.x,M,E,S),_f.initNonuniformCatmullRom(h.y,g.y,_.y,m.y,M,E,S),xf.initNonuniformCatmullRom(h.z,g.z,_.z,m.z,M,E,S)}else this.curveType==="catmullrom"&&(vf.initCatmullRom(h.x,g.x,_.x,m.x,this.tension),_f.initCatmullRom(h.y,g.y,_.y,m.y,this.tension),xf.initCatmullRom(h.z,g.z,_.z,m.z,this.tension));return r.set(vf.calc(d),_f.calc(d),xf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new $().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,d=s*f;return(2*t-2*r+l+c)*d+(-3*t+3*r-2*l-c)*f+l*s+t}function Fx(s,e){const t=1-s;return t*t*e}function kx(s,e){return 2*(1-s)*s*e}function Bx(s,e){return s*s*e}function Go(s,e,t,r){return Fx(s,e)+kx(s,t)+Bx(s,r)}function zx(s,e){const t=1-s;return t*t*t*e}function Hx(s,e){const t=1-s;return 3*t*t*s*e}function Vx(s,e){return 3*(1-s)*s*s*e}function Gx(s,e){return s*s*s*e}function Wo(s,e,t,r,o){return zx(s,e)+Hx(s,t)+Vx(s,r)+Gx(s,o)}class vv extends xi{constructor(e=new Be,t=new Be,r=new Be,o=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Wo(e,o.x,l.x,c.x,f.x),Wo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wx extends xi{constructor(e=new $,t=new $,r=new $,o=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new $){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Wo(e,o.x,l.x,c.x,f.x),Wo(e,o.y,l.y,c.y,f.y),Wo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _v extends xi{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xx extends xi{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xv extends xi{constructor(e=new Be,t=new Be,r=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Go(e,o.x,l.x,c.x),Go(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends xi{constructor(e=new $,t=new $,r=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new $){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Go(e,o.x,l.x,c.x),Go(e,o.y,l.y,c.y),Go(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yv extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,d=o[c===0?c:c-1],h=o[c],m=o[c>o.length-2?o.length-1:c+1],g=o[c>o.length-3?o.length-1:c+2];return r.set(Xm(f,d.x,h.x,m.x,g.x),Xm(f,d.y,h.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Be().fromArray(o))}return this}}var yd=Object.freeze({__proto__:null,ArcCurve:Ux,CatmullRomCurve3:Ox,CubicBezierCurve:vv,CubicBezierCurve3:Wx,EllipseCurve:Od,LineCurve:_v,LineCurve3:Xx,QuadraticBezierCurve:xv,QuadraticBezierCurve3:jx,SplineCurve:yv});class qx extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yd[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],d=f.getLength(),h=d===0?0:1-c/d;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(f);for(let h=0;h<d.length;h++){const m=d[h];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new yd[o.type]().fromJSON(o))}return this}}class Sd extends qx{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new _v(this.currentPoint.clone(),new Be(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new xv(this.currentPoint.clone(),new Be(e,t),new Be(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new vv(this.currentPoint.clone(),new Be(e,t),new Be(r,o),new Be(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new yv(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+f,t+d,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,d){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,r,o,l,c,f,d),this}absellipse(e,t,r,o,l,c,f,d){const h=new Od(e,t,r,o,l,c,f,d);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jl extends Sd{constructor(e){super(e),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Sd().fromJSON(o))}return this}}const Yx={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Sv(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,d,h,m,g,_,y;if(r&&(l=Qx(s,e,l,t)),s.length>80*t){f=h=s[0],d=m=s[1];for(let M=t;M<o;M+=t)g=s[M],_=s[M+1],g<f&&(f=g),_<d&&(d=_),g>h&&(h=g),_>m&&(m=_);y=Math.max(h-f,m-d),y=y!==0?32767/y:0}return jo(l,c,t,f,d,y,0),c}};function Sv(s,e,t,r,o){let l,c;if(o===cy(s,e,t,r)>0)for(l=e;l<t;l+=r)c=jm(l,s[l],s[l+1],c);else for(l=t-r;l>=e;l-=r)c=jm(l,s[l],s[l+1],c);return c&&ru(c,c.next)&&(Yo(c),c=c.next),c}function es(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ru(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Yo(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function jo(s,e,t,r,o,l,c){if(!s)return;!c&&l&&ry(s,r,o,l);let f=s,d,h;for(;s.prev!==s.next;){if(d=s.prev,h=s.next,l?Kx(s,r,o,l):$x(s)){e.push(d.i/t|0),e.push(s.i/t|0),e.push(h.i/t|0),Yo(s),s=h.next,f=h.next;continue}if(s=h,s===f){c?c===1?(s=Zx(es(s),e,t),jo(s,e,t,r,o,l,2)):c===2&&Jx(s,e,t,r,o,l):jo(es(s),e,t,r,o,l,1);break}}}function $x(s){const e=s.prev,t=s,r=s.next;if(Gt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,d=t.y,h=r.y,m=o<l?o<c?o:c:l<c?l:c,g=f<d?f<h?f:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,y=f>d?f>h?f:h:d>h?d:h;let M=r.next;for(;M!==e;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=y&&zs(o,f,l,d,c,h,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Kx(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Gt(o,l,c)>=0)return!1;const f=o.x,d=l.x,h=c.x,m=o.y,g=l.y,_=c.y,y=f<d?f<h?f:h:d<h?d:h,M=m<g?m<_?m:_:g<_?g:_,E=f>d?f>h?f:h:d>h?d:h,S=m>g?m>_?m:_:g>_?g:_,v=Md(y,M,e,t,r),L=Md(E,S,e,t,r);let C=s.prevZ,A=s.nextZ;for(;C&&C.z>=v&&A&&A.z<=L;){if(C.x>=y&&C.x<=E&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&zs(f,m,d,g,h,_,C.x,C.y)&&Gt(C.prev,C,C.next)>=0||(C=C.prevZ,A.x>=y&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==c&&zs(f,m,d,g,h,_,A.x,A.y)&&Gt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;C&&C.z>=v;){if(C.x>=y&&C.x<=E&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&zs(f,m,d,g,h,_,C.x,C.y)&&Gt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;A&&A.z<=L;){if(A.x>=y&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==c&&zs(f,m,d,g,h,_,A.x,A.y)&&Gt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Zx(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!ru(o,l)&&Mv(o,r,r.next,l)&&qo(o,l)&&qo(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Yo(r),Yo(r.next),r=s=l),r=r.next}while(r!==s);return es(r)}function Jx(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&ay(c,f)){let d=Ev(c,f);c=es(c,c.next),d=es(d,d.next),jo(c,e,t,r,o,l,0),jo(d,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function Qx(s,e,t,r){const o=[];let l,c,f,d,h;for(l=0,c=e.length;l<c;l++)f=e[l]*r,d=l<c-1?e[l+1]*r:s.length,h=Sv(s,f,d,r,!1),h===h.next&&(h.steiner=!0),o.push(oy(h));for(o.sort(ey),l=0;l<o.length;l++)t=ty(o[l],t);return t}function ey(s,e){return s.x-e.x}function ty(s,e){const t=ny(s,e);if(!t)return e;const r=Ev(t,s);return es(r,r.next),es(t,t.next)}function ny(s,e){let t=e,r=-1/0,o;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const _=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=l&&_>r&&(r=_,o=t.x<t.next.x?t:t.next,_===l))return o}t=t.next}while(t!==e);if(!o)return null;const f=o,d=o.x,h=o.y;let m=1/0,g;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&zs(c<h?l:r,c,d,h,c<h?r:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),qo(t,s)&&(g<m||g===m&&(t.x>o.x||t.x===o.x&&iy(o,t)))&&(o=t,m=g)),t=t.next;while(t!==f);return o}function iy(s,e){return Gt(s.prev,s,e.prev)<0&&Gt(e.next,s,s.next)<0}function ry(s,e,t,r){let o=s;do o.z===0&&(o.z=Md(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,sy(o)}function sy(s){let e,t,r,o,l,c,f,d,h=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,r=t,f=0,e=0;e<h&&(f++,r=r.nextZ,!!r);e++);for(d=h;f>0||d>0&&r;)f!==0&&(d===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,f--):(o=r,r=r.nextZ,d--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,h*=2}while(c>1);return s}function Md(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function oy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zs(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function ay(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ly(s,e)&&(qo(s,e)&&qo(e,s)&&uy(s,e)&&(Gt(s.prev,s,e.prev)||Gt(s,e.prev,e))||ru(s,e)&&Gt(s.prev,s,s.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ru(s,e){return s.x===e.x&&s.y===e.y}function Mv(s,e,t,r){const o=bl(Gt(s,e,t)),l=bl(Gt(s,e,r)),c=bl(Gt(t,r,s)),f=bl(Gt(t,r,e));return!!(o!==l&&c!==f||o===0&&Pl(s,t,e)||l===0&&Pl(s,r,e)||c===0&&Pl(t,s,r)||f===0&&Pl(t,e,r))}function Pl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function bl(s){return s>0?1:s<0?-1:0}function ly(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Mv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function qo(s,e){return Gt(s.prev,s,s.next)<0?Gt(s,e,s.next)>=0&&Gt(s,s.prev,e)>=0:Gt(s,e,s.prev)<0||Gt(s,s.next,e)<0}function uy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Ev(s,e){const t=new Ed(s.i,s.x,s.y),r=new Ed(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function jm(s,e,t,r){const o=new Ed(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ed(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cy(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Xs{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Xs.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];qm(e),Ym(r,e);let c=e.length;t.forEach(qm);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,Ym(r,t[d]);const f=Yx.triangulate(r,o);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function qm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ym(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class kd extends wr{constructor(e=new Jl([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,d=e.length;f<d;f++){const h=e[f];c(h)}this.setAttribute("position",new Vi(o,3)),this.setAttribute("uv",new Vi(l,2)),this.computeVertexNormals();function c(f){const d=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:fy;let C,A=!1,z,U,D,B;v&&(C=v.getSpacedPoints(m),A=!0,_=!1,z=v.computeFrenetFrames(m,!1),U=new $,D=new $,B=new $),_||(S=0,y=0,M=0,E=0);const b=f.extractPoints(h);let w=b.shape;const I=b.holes;if(!Xs.isClockWise(w)){w=w.reverse();for(let ge=0,Ce=I.length;ge<Ce;ge++){const O=I[ge];Xs.isClockWise(O)&&(I[ge]=O.reverse())}}const W=Xs.triangulateShape(w,I),j=w;for(let ge=0,Ce=I.length;ge<Ce;ge++){const O=I[ge];w=w.concat(O)}function le(ge,Ce,O){return Ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Ce,O)}const re=w.length,ae=W.length;function G(ge,Ce,O){let Qe,Ee,Ge;const Pe=ge.x-Ce.x,nt=ge.y-Ce.y,Ne=O.x-ge.x,N=O.y-ge.y,R=Pe*Pe+nt*nt,ee=Pe*N-nt*Ne;if(Math.abs(ee)>Number.EPSILON){const fe=Math.sqrt(R),_e=Math.sqrt(Ne*Ne+N*N),he=Ce.x-nt/fe,Ke=Ce.y+Pe/fe,De=O.x-N/_e,We=O.y+Ne/_e,ht=((De-he)*N-(We-Ke)*Ne)/(Pe*N-nt*Ne);Qe=he+Pe*ht-ge.x,Ee=Ke+nt*ht-ge.y;const Te=Qe*Qe+Ee*Ee;if(Te<=2)return new Be(Qe,Ee);Ge=Math.sqrt(Te/2)}else{let fe=!1;Pe>Number.EPSILON?Ne>Number.EPSILON&&(fe=!0):Pe<-Number.EPSILON?Ne<-Number.EPSILON&&(fe=!0):Math.sign(nt)===Math.sign(N)&&(fe=!0),fe?(Qe=-nt,Ee=Pe,Ge=Math.sqrt(R)):(Qe=Pe,Ee=nt,Ge=Math.sqrt(R/2))}return new Be(Qe/Ge,Ee/Ge)}const ce=[];for(let ge=0,Ce=j.length,O=Ce-1,Qe=ge+1;ge<Ce;ge++,O++,Qe++)O===Ce&&(O=0),Qe===Ce&&(Qe=0),ce[ge]=G(j[ge],j[O],j[Qe]);const oe=[];let k,ne=ce.concat();for(let ge=0,Ce=I.length;ge<Ce;ge++){const O=I[ge];k=[];for(let Qe=0,Ee=O.length,Ge=Ee-1,Pe=Qe+1;Qe<Ee;Qe++,Ge++,Pe++)Ge===Ee&&(Ge=0),Pe===Ee&&(Pe=0),k[Qe]=G(O[Qe],O[Ge],O[Pe]);oe.push(k),ne=ne.concat(k)}for(let ge=0;ge<S;ge++){const Ce=ge/S,O=y*Math.cos(Ce*Math.PI/2),Qe=M*Math.sin(Ce*Math.PI/2)+E;for(let Ee=0,Ge=j.length;Ee<Ge;Ee++){const Pe=le(j[Ee],ce[Ee],Qe);pe(Pe.x,Pe.y,-O)}for(let Ee=0,Ge=I.length;Ee<Ge;Ee++){const Pe=I[Ee];k=oe[Ee];for(let nt=0,Ne=Pe.length;nt<Ne;nt++){const N=le(Pe[nt],k[nt],Qe);pe(N.x,N.y,-O)}}}const Le=M+E;for(let ge=0;ge<re;ge++){const Ce=_?le(w[ge],ne[ge],Le):w[ge];A?(D.copy(z.normals[0]).multiplyScalar(Ce.x),U.copy(z.binormals[0]).multiplyScalar(Ce.y),B.copy(C[0]).add(D).add(U),pe(B.x,B.y,B.z)):pe(Ce.x,Ce.y,0)}for(let ge=1;ge<=m;ge++)for(let Ce=0;Ce<re;Ce++){const O=_?le(w[Ce],ne[Ce],Le):w[Ce];A?(D.copy(z.normals[ge]).multiplyScalar(O.x),U.copy(z.binormals[ge]).multiplyScalar(O.y),B.copy(C[ge]).add(D).add(U),pe(B.x,B.y,B.z)):pe(O.x,O.y,g/m*ge)}for(let ge=S-1;ge>=0;ge--){const Ce=ge/S,O=y*Math.cos(Ce*Math.PI/2),Qe=M*Math.sin(Ce*Math.PI/2)+E;for(let Ee=0,Ge=j.length;Ee<Ge;Ee++){const Pe=le(j[Ee],ce[Ee],Qe);pe(Pe.x,Pe.y,g+O)}for(let Ee=0,Ge=I.length;Ee<Ge;Ee++){const Pe=I[Ee];k=oe[Ee];for(let nt=0,Ne=Pe.length;nt<Ne;nt++){const N=le(Pe[nt],k[nt],Qe);A?pe(N.x,N.y+C[m-1].y,C[m-1].x+O):pe(N.x,N.y,g+O)}}}Q(),de();function Q(){const ge=o.length/3;if(_){let Ce=0,O=re*Ce;for(let Qe=0;Qe<ae;Qe++){const Ee=W[Qe];ve(Ee[2]+O,Ee[1]+O,Ee[0]+O)}Ce=m+S*2,O=re*Ce;for(let Qe=0;Qe<ae;Qe++){const Ee=W[Qe];ve(Ee[0]+O,Ee[1]+O,Ee[2]+O)}}else{for(let Ce=0;Ce<ae;Ce++){const O=W[Ce];ve(O[2],O[1],O[0])}for(let Ce=0;Ce<ae;Ce++){const O=W[Ce];ve(O[0]+re*m,O[1]+re*m,O[2]+re*m)}}r.addGroup(ge,o.length/3-ge,0)}function de(){const ge=o.length/3;let Ce=0;Se(j,Ce),Ce+=j.length;for(let O=0,Qe=I.length;O<Qe;O++){const Ee=I[O];Se(Ee,Ce),Ce+=Ee.length}r.addGroup(ge,o.length/3-ge,1)}function Se(ge,Ce){let O=ge.length;for(;--O>=0;){const Qe=O;let Ee=O-1;Ee<0&&(Ee=ge.length-1);for(let Ge=0,Pe=m+S*2;Ge<Pe;Ge++){const nt=re*Ge,Ne=re*(Ge+1),N=Ce+Qe+nt,R=Ce+Ee+nt,ee=Ce+Ee+Ne,fe=Ce+Qe+Ne;be(N,R,ee,fe)}}}function pe(ge,Ce,O){d.push(ge),d.push(Ce),d.push(O)}function ve(ge,Ce,O){Ve(ge),Ve(Ce),Ve(O);const Qe=o.length/3,Ee=L.generateTopUV(r,o,Qe-3,Qe-2,Qe-1);ct(Ee[0]),ct(Ee[1]),ct(Ee[2])}function be(ge,Ce,O,Qe){Ve(ge),Ve(Ce),Ve(Qe),Ve(Ce),Ve(O),Ve(Qe);const Ee=o.length/3,Ge=L.generateSideWallUV(r,o,Ee-6,Ee-3,Ee-2,Ee-1);ct(Ge[0]),ct(Ge[1]),ct(Ge[3]),ct(Ge[1]),ct(Ge[2]),ct(Ge[3])}function Ve(ge){o.push(d[ge*3+0]),o.push(d[ge*3+1]),o.push(d[ge*3+2])}function ct(ge){l.push(ge.x),l.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return dy(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new yd[o.type]().fromJSON(o)),new kd(r,e.options)}}const fy={generateTopUV:function(s,e,t,r,o){const l=e[t*3],c=e[t*3+1],f=e[r*3],d=e[r*3+1],h=e[o*3],m=e[o*3+1];return[new Be(l,c),new Be(f,d),new Be(h,m)]},generateSideWallUV:function(s,e,t,r,o,l){const c=e[t*3],f=e[t*3+1],d=e[t*3+2],h=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[o*3],y=e[o*3+1],M=e[o*3+2],E=e[l*3],S=e[l*3+1],v=e[l*3+2];return Math.abs(f-m)<Math.abs(c-h)?[new Be(c,1-d),new Be(h,1-g),new Be(_,1-M),new Be(E,1-v)]:[new Be(f,1-d),new Be(m,1-g),new Be(y,1-M),new Be(S,1-v)]}};function dy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class su extends wr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,g=e/f,_=t/d,y=[],M=[],E=[],S=[];for(let v=0;v<m;v++){const L=v*_-c;for(let C=0;C<h;C++){const A=C*g-l;M.push(A,-L,0),E.push(0,0,1),S.push(C/f),S.push(1-v/d)}}for(let v=0;v<d;v++)for(let L=0;L<f;L++){const C=L+h*v,A=L+h*(v+1),z=L+1+h*(v+1),U=L+1+h*v;y.push(C,A,U),y.push(A,z,U)}this.setIndex(y),this.setAttribute("position",new Vi(M,3)),this.setAttribute("normal",new Vi(E,3)),this.setAttribute("uv",new Vi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class hy extends Jo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iv,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class py extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $m={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class gy{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){f++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const vy=new gy;class Bd{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class _y extends Error{constructor(e,t){super(e),this.response=t}}class xy extends Bd{constructor(e){super(e)}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=$m.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:r,onError:o});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:r,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Oi[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(v){L();function L(){g.read().then(({done:C,value:A})=>{if(C)v.close();else{E+=A.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let U=0,D=m.length;U<D;U++){const B=m[U];B.onProgress&&B.onProgress(z)}v.enqueue(A),L()}},C=>{v.error(C)})}}});return new Response(S)}else throw new _y(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{$m.add(e,h);const m=Oi[e];delete Oi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=Oi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Oi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yy extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yf=new zt,Km=new $,Zm=new $;class Sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zm),t.updateMatrixWorld(),yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jm=new zt,zo=new $,Sf=new $;class My extends Sy{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),r.position.copy(zo),Sf.copy(r.position),Sf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Sf),r.updateMatrixWorld(),o.makeTranslation(-zo.x,-zo.y,-zo.z),Jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm)}}class Ey extends yy{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new My}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ty extends pv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wy extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ay{constructor(){this.type="ShapePath",this.color=new Mt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Sd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,c){return this.currentPath.bezierCurveTo(e,t,r,o,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const L=[];for(let C=0,A=v.length;C<A;C++){const z=v[C],U=new Jl;U.curves=z.curves,L.push(U)}return L}function r(v,L){const C=L.length;let A=!1;for(let z=C-1,U=0;U<C;z=U++){let D=L[z],B=L[U],b=B.x-D.x,w=B.y-D.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(D=L[U],b=-b,B=L[z],w=-w),v.y<D.y||v.y>B.y)continue;if(v.y===D.y){if(v.x===D.x)return!0}else{const I=w*(v.x-D.x)-b*(v.y-D.y);if(I===0)return!0;if(I<0)continue;A=!A}}else{if(v.y!==D.y)continue;if(B.x<=v.x&&v.x<=D.x||D.x<=v.x&&v.x<=B.x)return!0}}return A}const o=Xs.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,f,d;const h=[];if(l.length===1)return f=l[0],d=new Jl,d.curves=f.curves,h.push(d),h;let m=!o(l[0].getPoints());m=e?!m:m;const g=[],_=[];let y=[],M=0,E;_[M]=void 0,y[M]=[];for(let v=0,L=l.length;v<L;v++)f=l[v],E=f.getPoints(),c=o(E),c=e?!c:c,c?(!m&&_[M]&&M++,_[M]={s:new Jl,p:E},_[M].s.curves=f.curves,m&&M++,y[M]=[]):y[M].push({h:f,p:E[0]});if(!_[0])return t(l);if(_.length>1){let v=!1,L=0;for(let C=0,A=_.length;C<A;C++)g[C]=[];for(let C=0,A=_.length;C<A;C++){const z=y[C];for(let U=0;U<z.length;U++){const D=z[U];let B=!0;for(let b=0;b<_.length;b++)r(D.p,_[b].p)&&(C!==b&&L++,B?(B=!1,g[b].push(D)):v=!0);B&&g[C].push(D)}}L>0&&v===!1&&(y=g)}let S;for(let v=0,L=_.length;v<L;v++){d=_[v].s,h.push(d),S=y[v];for(let C=0,A=S.length;C<A;C++)d.holes.push(S[C].h)}return h}}function Qm(s,e,t,r){const o=Cy(r);switch(t){case Kg:return s*e;case Jg:return s*e;case Qg:return s*e*2;case ev:return s*e/o.components*o.byteLength;case Ld:return s*e/o.components*o.byteLength;case tv:return s*e*2/o.components*o.byteLength;case Dd:return s*e*2/o.components*o.byteLength;case Zg:return s*e*3/o.components*o.byteLength;case oi:return s*e*4/o.components*o.byteLength;case Nd:return s*e*4/o.components*o.byteLength;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yf:case Kf:return Math.max(s,16)*Math.max(e,8)/4;case qf:case $f:return Math.max(s,8)*Math.max(e,8)/2;case Zf:case Jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zl:case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nv:case gd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vd:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cy(s){switch(s){case Gi:case qg:return{byteLength:1,components:1};case Xo:case Yg:case $o:return{byteLength:2,components:1};case Pd:case bd:return{byteLength:2,components:4};case Jr:case Rd:case Bi:return{byteLength:4,components:1};case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ry(s){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,h){const m=d.array,g=d.updateRanges;if(s.bindBuffer(h,f),g.length===0)s.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];s.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
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
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,Gy=`#ifdef USE_BUMPMAP
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",oS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,MS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,CS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kS=`#if defined( USE_POINTS_UV )
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
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
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
#endif`,XS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,hM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
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
}`,UM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OM=`#define DISTANCE
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
}`,FM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
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
}`,HM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#define LAMBERT
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
}`,XM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,jM=`#define MATCAP
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
}`,qM=`#define MATCAP
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
}`,YM=`#define NORMAL
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
}`,$M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
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
}`,ZM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,JM=`#define STANDARD
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
}`,QM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,eE=`#define TOON
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
}`,tE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
}`,rE=`#include <common>
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
}`,sE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,oE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Py,alphahash_pars_fragment:by,alphamap_fragment:Ly,alphamap_pars_fragment:Dy,alphatest_fragment:Ny,alphatest_pars_fragment:Iy,aomap_fragment:Uy,aomap_pars_fragment:Oy,batching_pars_vertex:Fy,batching_vertex:ky,begin_vertex:By,beginnormal_vertex:zy,bsdfs:Hy,iridescence_fragment:Vy,bumpmap_pars_fragment:Gy,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:qy,color_fragment:Yy,color_pars_fragment:$y,color_pars_vertex:Ky,color_vertex:Zy,common:Jy,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:eS,displacementmap_pars_vertex:tS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:rS,colorspace_fragment:sS,colorspace_pars_fragment:oS,envmap_fragment:aS,envmap_common_pars_fragment:lS,envmap_pars_fragment:uS,envmap_pars_vertex:cS,envmap_physical_pars_fragment:SS,envmap_vertex:fS,fog_vertex:dS,fog_pars_vertex:hS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_pars_fragment:vS,lights_lambert_fragment:_S,lights_lambert_pars_fragment:xS,lights_pars_begin:yS,lights_toon_fragment:MS,lights_toon_pars_fragment:ES,lights_phong_fragment:TS,lights_phong_pars_fragment:wS,lights_physical_fragment:AS,lights_physical_pars_fragment:CS,lights_fragment_begin:RS,lights_fragment_maps:PS,lights_fragment_end:bS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:IS,map_fragment:US,map_pars_fragment:OS,map_particle_fragment:FS,map_particle_pars_fragment:kS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:zS,morphinstance_vertex:HS,morphcolor_vertex:VS,morphnormal_vertex:GS,morphtarget_pars_vertex:WS,morphtarget_vertex:XS,normal_fragment_begin:jS,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:$S,normal_vertex:KS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:rM,project_vertex:sM,dithering_fragment:oM,dithering_pars_fragment:aM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:cM,shadowmap_pars_vertex:fM,shadowmap_vertex:dM,shadowmask_pars_fragment:hM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:gM,skinnormal_vertex:vM,specularmap_fragment:_M,specularmap_pars_fragment:xM,tonemapping_fragment:yM,tonemapping_pars_fragment:SM,transmission_fragment:MM,transmission_pars_fragment:EM,uv_pars_fragment:TM,uv_pars_vertex:wM,uv_vertex:AM,worldpos_vertex:CM,background_vert:RM,background_frag:PM,backgroundCube_vert:bM,backgroundCube_frag:LM,cube_vert:DM,cube_frag:NM,depth_vert:IM,depth_frag:UM,distanceRGBA_vert:OM,distanceRGBA_frag:FM,equirect_vert:kM,equirect_frag:BM,linedashed_vert:zM,linedashed_frag:HM,meshbasic_vert:VM,meshbasic_frag:GM,meshlambert_vert:WM,meshlambert_frag:XM,meshmatcap_vert:jM,meshmatcap_frag:qM,meshnormal_vert:YM,meshnormal_frag:$M,meshphong_vert:KM,meshphong_frag:ZM,meshphysical_vert:JM,meshphysical_frag:QM,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:sE,sprite_vert:oE,sprite_frag:aE},Oe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},pi={basic:{uniforms:En([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:En([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:En([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:En([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:En([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:En([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:En([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:En([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:En([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:En([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:En([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:En([Oe.common,Oe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:En([Oe.lights,Oe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ll={r:0,b:0,g:0},Wr=new _i,lE=new zt;function uE(s,e,t,r,o,l,c){const f=new Mt(0);let d=l===!0?0:1,h,m,g=null,_=0,y=null;function M(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function E(C){let A=!1;const z=M(C);z===null?v(f,d):z&&z.isColor&&(v(z,1),A=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,A){const z=M(A);z&&(z.isCubeTexture||z.mapping===iu)?(m===void 0&&(m=new gi(new Qo(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Js(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Wr.copy(A.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.material.uniforms.envMap.value=z,m.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Wr)),m.material.toneMapped=Rt.getTransfer(z.colorSpace)!==bt,(g!==z||_!==z.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,g=z,_=z.version,y=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new gi(new su(2,2),new Tr({name:"BackgroundMaterial",uniforms:Js(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(z.colorSpace)!==bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||_!==z.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,g=z,_=z.version,y=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,A){C.getRGB(Ll,hv(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(C,A=1){f.set(C),d=A,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,v(f,d)},render:E,addToRenderList:S,dispose:L}}function cE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,c=!1;function f(w,I,H,W,j){let le=!1;const re=g(W,H,I);l!==re&&(l=re,h(l.object)),le=y(w,W,H,j),le&&M(w,W,H,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,A(w,I,H,W),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return s.createVertexArray()}function h(w){return s.bindVertexArray(w)}function m(w){return s.deleteVertexArray(w)}function g(w,I,H){const W=H.wireframe===!0;let j=r[w.id];j===void 0&&(j={},r[w.id]=j);let le=j[I.id];le===void 0&&(le={},j[I.id]=le);let re=le[W];return re===void 0&&(re=_(d()),le[W]=re),re}function _(w){const I=[],H=[],W=[];for(let j=0;j<t;j++)I[j]=0,H[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:W,object:w,attributes:{},index:null}}function y(w,I,H,W){const j=l.attributes,le=I.attributes;let re=0;const ae=H.getAttributes();for(const G in ae)if(ae[G].location>=0){const oe=j[G];let k=le[G];if(k===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;re++}return l.attributesNum!==re||l.index!==W}function M(w,I,H,W){const j={},le=I.attributes;let re=0;const ae=H.getAttributes();for(const G in ae)if(ae[G].location>=0){let oe=le[G];oe===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),j[G]=k,re++}l.attributes=j,l.attributesNum=re,l.index=W}function E(){const w=l.newAttributes;for(let I=0,H=w.length;I<H;I++)w[I]=0}function S(w){v(w,0)}function v(w,I){const H=l.newAttributes,W=l.enabledAttributes,j=l.attributeDivisors;H[w]=1,W[w]===0&&(s.enableVertexAttribArray(w),W[w]=1),j[w]!==I&&(s.vertexAttribDivisor(w,I),j[w]=I)}function L(){const w=l.newAttributes,I=l.enabledAttributes;for(let H=0,W=I.length;H<W;H++)I[H]!==w[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function C(w,I,H,W,j,le,re){re===!0?s.vertexAttribIPointer(w,I,H,j,le):s.vertexAttribPointer(w,I,H,W,j,le)}function A(w,I,H,W){E();const j=W.attributes,le=H.getAttributes(),re=I.defaultAttributeValues;for(const ae in le){const G=le[ae];if(G.location>=0){let ce=j[ae];if(ce===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const oe=ce.normalized,k=ce.itemSize,ne=e.get(ce);if(ne===void 0)continue;const Le=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===s.INT||Q===s.UNSIGNED_INT||ce.gpuType===Rd;if(ce.isInterleavedBufferAttribute){const pe=ce.data,ve=pe.stride,be=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<G.locationSize;Ve++)v(G.location+Ve,pe.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)S(G.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ve=0;Ve<G.locationSize;Ve++)C(G.location+Ve,k/G.locationSize,Q,oe,ve*de,(be+k/G.locationSize*Ve)*de,Se)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)v(G.location+pe,ce.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<G.locationSize;pe++)S(G.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let pe=0;pe<G.locationSize;pe++)C(G.location+pe,k/G.locationSize,Q,oe,k*de,k/G.locationSize*pe*de,Se)}}else if(re!==void 0){const oe=re[ae];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(G.location,oe);break;case 3:s.vertexAttrib3fv(G.location,oe);break;case 4:s.vertexAttrib4fv(G.location,oe);break;default:s.vertexAttrib1fv(G.location,oe)}}}}L()}function z(){B();for(const w in r){const I=r[w];for(const H in I){const W=I[H];for(const j in W)m(W[j].object),delete W[j];delete I[H]}delete r[w]}}function U(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const H in I){const W=I[H];for(const j in W)m(W[j].object),delete W[j];delete I[H]}delete r[w.id]}function D(w){for(const I in r){const H=r[I];if(H[w.id]===void 0)continue;const W=H[w.id];for(const j in W)m(W[j].object),delete W[j];delete H[w.id]}}function B(){b(),c=!0,l!==o&&(l=o,h(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function fE(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,g){g!==0&&(s.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,r,1)}function d(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function dE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(D){return!(D!==oi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const B=D===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Bi&&!B)}function d(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:z,maxSamples:U}}function hE(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new jr,f=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||o;return o=_,r=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,v=s.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const L=l?0:r,C=L*4;let A=v.clippingState||null;d.value=A,A=m(M,_,C,y);for(let z=0;z!==C;++z)A[z]=t[z];v.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const v=y+E*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let C=0,A=y;C!==E;++C,A+=4)c.copy(g[C]).applyMatrix4(L,f),c.normal.toArray(S,A),S[A+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function pE(s){let e=new WeakMap;function t(c,f){return f===Gf?c.mapping=qs:f===Wf&&(c.mapping=Ys),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Gf||f===Wf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new Lx(d.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,eg=[.125,.215,.35,.446,.526,.582],$r=20,Mf=new Ty,tg=new Mt;let Ef=null,Tf=0,wf=0,Af=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,ng=[new $(-qr,ks,0),new $(qr,ks,0),new $(-ks,0,qr),new $(ks,0,qr),new $(0,qr,-ks),new $(0,qr,ks),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:$o,format:oi,colorSpace:Zs,depthBuffer:!1},o=rg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(l)),this._blurMaterial=gE(l,e,t)}return o}_compileMaterial(e){const t=new gi(this._lodPlanes[0],e);this._renderer.compile(t,Mf)}_sceneToCubeUV(e,t,r,o){const f=new Hn(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(tg),m.toneMapping=Mr,m.autoClear=!1;const y=new cv({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),M=new gi(new Qo,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(tg),E=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(f.up.set(0,d[v],0),f.lookAt(h[v],0,0)):L===1?(f.up.set(0,0,d[v]),f.lookAt(0,h[v],0)):(f.up.set(0,d[v],0),f.lookAt(0,0,h[v]));const C=this._cubeSize;Dl(o,L*C,v>2?C:0,C,C),m.setRenderTarget(o),E&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===qs||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new gi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Dl(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Mf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ng[(o-l-1)%ng.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new gi(this._lodPlanes[o],h),_=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*$r-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):$r;S>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const v=[];let L=0;for(let D=0;D<$r;++D){const B=D/E,b=Math.exp(-B*B/2);v.push(b),D===0?L+=b:D<S&&(L+=2*b)}for(let D=0;D<v.length;D++)v[D]=v[D]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-r;const A=this._sizeLods[o],z=3*A*(o>C-Hs?o-C+Hs:0),U=4*(this._cubeSize-A);Dl(t,z,U,3*A,2*A),d.setRenderTarget(t),d.render(g,Mf)}}function mE(s){const e=[],t=[],r=[];let o=s;const l=s-Hs+1+eg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>s-Hs?d=eg[c-s+Hs-1]:c===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,E=3,S=2,v=1,L=new Float32Array(E*M*y),C=new Float32Array(S*M*y),A=new Float32Array(v*M*y);for(let U=0;U<y;U++){const D=U%3*2/3-1,B=U>2?0:-1,b=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];L.set(b,E*M*U),C.set(_,S*M*U);const w=[U,U,U,U,U,U];A.set(w,v*M*U)}const z=new wr;z.setAttribute("position",new vi(L,E)),z.setAttribute("uv",new vi(C,S)),z.setAttribute("faceIndex",new vi(A,v)),e.push(z),o>Hs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function rg(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function gE(s,e,t){const r=new Float32Array($r),o=new $(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function sg(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function og(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===Gf||d===Wf,m=d===qs||d===Ys;if(h||m){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new ig(s)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new ig(s)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function _E(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function xE(s,e,t,r){const o={},l=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete o[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(g,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let C=0,A=L.length;C<A;C+=3){const z=L[C+0],U=L[C+1],D=L[C+2];_.push(z,U,U,D,D,z)}}else if(M!==void 0){const L=M.array;E=M.version;for(let C=0,A=L.length/3-1;C<A;C+=3){const z=C+0,U=C+1,D=C+2;_.push(z,U,U,D,D,z)}}else return;const S=new(sv(_)?dv:fv)(_,1);S.version=E;const v=l.get(g);v&&e.remove(v),l.set(g,S)}function m(g){const _=l.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function yE(s,e,t){let r;function o(_){r=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,y){s.drawElements(r,y,l,_*c),t.update(y,r,1)}function h(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,_*c,M),t.update(y,r,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];t.update(S,r,1)}function g(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)h(_[v]/c,y[v],E[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*E[L];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function SE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function ME(s,e,t){const r=new WeakMap,o=new Lt;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(f);if(_===void 0||_.count!==g){let w=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var y=w;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let z=f.attributes.position.count*A,U=1;z>e.maxTextureSize&&(U=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const D=new Float32Array(z*U*4*g),B=new av(D,z,U,g);B.type=Bi,B.needsUpdate=!0;const b=A*4;for(let I=0;I<g;I++){const H=v[I],W=L[I],j=C[I],le=z*U*4*I;for(let re=0;re<H.count;re++){const ae=re*b;M===!0&&(o.fromBufferAttribute(H,re),D[le+ae+0]=o.x,D[le+ae+1]=o.y,D[le+ae+2]=o.z,D[le+ae+3]=0),E===!0&&(o.fromBufferAttribute(W,re),D[le+ae+4]=o.x,D[le+ae+5]=o.y,D[le+ae+6]=o.z,D[le+ae+7]=0),S===!0&&(o.fromBufferAttribute(j,re),D[le+ae+8]=o.x,D[le+ae+9]=o.y,D[le+ae+10]=o.z,D[le+ae+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new Be(z,U)},r.set(f,_),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function EE(s,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==h&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function c(){o=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const wv=new Nn,ag=new gv(1,1),Av=new av,Cv=new px,Rv=new mv,lg=[],ug=[],cg=new Float32Array(16),fg=new Float32Array(9),dg=new Float32Array(4);function to(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=lg[o];if(l===void 0&&(l=new Float32Array(o),lg[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ou(s,e){let t=ug[e];t===void 0&&(t=new Int32Array(e),ug[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function TE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function RE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;dg.set(r),s.uniformMatrix2fv(this.addr,!1,dg),en(t,r)}}function PE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;fg.set(r),s.uniformMatrix3fv(this.addr,!1,fg),en(t,r)}}function bE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;cg.set(r),s.uniformMatrix4fv(this.addr,!1,cg),en(t,r)}}function LE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function DE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function NE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function UE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function FE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function BE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ag.compareFunction=rv,l=ag):l=wv,t.setTexture2D(e||l,o)}function zE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Cv,o)}function HE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Rv,o)}function VE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Av,o)}function GE(s){switch(s){case 5126:return TE;case 35664:return wE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return bE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return NE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return OE;case 36295:return FE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return VE}}function WE(s,e){s.uniform1fv(this.addr,e)}function XE(s,e){const t=to(e,this.size,2);s.uniform2fv(this.addr,t)}function jE(s,e){const t=to(e,this.size,3);s.uniform3fv(this.addr,t)}function qE(s,e){const t=to(e,this.size,4);s.uniform4fv(this.addr,t)}function YE(s,e){const t=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $E(s,e){const t=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KE(s,e){const t=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ZE(s,e){s.uniform1iv(this.addr,e)}function JE(s,e){s.uniform2iv(this.addr,e)}function QE(s,e){s.uniform3iv(this.addr,e)}function e1(s,e){s.uniform4iv(this.addr,e)}function t1(s,e){s.uniform1uiv(this.addr,e)}function n1(s,e){s.uniform2uiv(this.addr,e)}function i1(s,e){s.uniform3uiv(this.addr,e)}function r1(s,e){s.uniform4uiv(this.addr,e)}function s1(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||wv,l[c])}function o1(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Cv,l[c])}function a1(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Rv,l[c])}function l1(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Av,l[c])}function u1(s){switch(s){case 5126:return WE;case 35664:return XE;case 35665:return jE;case 35666:return qE;case 35674:return YE;case 35675:return $E;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return JE;case 35668:case 35672:return QE;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}class c1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=GE(t.type)}}class f1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}}class d1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function hg(s,e){s.seq.push(e),s.map[e.id]=e}function h1(s,e,t){const r=s.name,o=r.length;for(Cf.lastIndex=0;;){const l=Cf.exec(r),c=Cf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){hg(t,h===void 0?new c1(f,s,e):new f1(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new d1(f),hg(t,g)),t=g}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);h1(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function pg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const p1=37297;let m1=0;function g1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const mg=new mt;function v1(s){Rt._getMatrix(mg,Rt.workingColorSpace,s);const e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case eu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+g1(s.getShaderSource(e),c)}else return o}function _1(s,e){const t=v1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x1(s,e){let t;switch(e){case z0:t="Linear";break;case H0:t="Reinhard";break;case V0:t="Cineon";break;case G0:t="ACESFilmic";break;case X0:t="AgX";break;case j0:t="Neutral";break;case W0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new $;function y1(){Rt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function M1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function E1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Vo(s){return s!==""}function vg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(T1,A1)}const w1=new Map;function A1(s,e){let t=gt[e];if(t===void 0){const r=w1.get(e);if(r!==void 0)t=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(s){return s.replace(C1,R1)}function R1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function D1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case k0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function N1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function I1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=P1(t),h=b1(t),m=L1(t),g=D1(t),_=N1(t),y=S1(t),M=M1(l),E=o.createProgram();let S,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(S=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Mr?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),c=Td(c),c=vg(c,t),c=_g(c,t),f=Td(f),f=vg(f,t),f=_g(f,t),c=xg(c),f=xg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=L+S+c,A=L+v+f,z=pg(o,o.VERTEX_SHADER,C),U=pg(o,o.FRAGMENT_SHADER,A);o.attachShader(E,z),o.attachShader(E,U),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function D(I){if(s.debug.checkShaderErrors){const H=o.getProgramInfoLog(E).trim(),W=o.getShaderInfoLog(z).trim(),j=o.getShaderInfoLog(U).trim();let le=!0,re=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,z,U);else{const ae=gg(o,z,"vertex"),G=gg(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ae+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(W===""||j==="")&&(re=!1);re&&(I.diagnostics={runnable:le,programLog:H,vertexShader:{log:W,prefix:S},fragmentShader:{log:j,prefix:v}})}o.deleteShader(z),o.deleteShader(U),B=new Ql(o,E),b=E1(o,E)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(E,p1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=U,this}let U1=0;class O1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new F1(e),t.set(e,r)),r}}class F1{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}}function k1(s,e,t,r,o,l,c){const f=new lv,d=new O1,h=new Set,m=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,w,I,H,W){const j=H.fog,le=W.geometry,re=b.isMeshStandardMaterial?H.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),G=ae&&ae.mapping===iu?ae.image.height:null,ce=M[b.type];b.precision!==null&&(y=o.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const oe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,k=oe!==void 0?oe.length:0;let ne=0;le.morphAttributes.position!==void 0&&(ne=1),le.morphAttributes.normal!==void 0&&(ne=2),le.morphAttributes.color!==void 0&&(ne=3);let Le,Q,de,Se;if(ce){const Tt=pi[ce];Le=Tt.vertexShader,Q=Tt.fragmentShader}else Le=b.vertexShader,Q=b.fragmentShader,d.update(b),de=d.getVertexShaderID(b),Se=d.getFragmentShaderID(b);const pe=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),be=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,ct=!!b.map,ge=!!b.matcap,Ce=!!ae,O=!!b.aoMap,Qe=!!b.lightMap,Ee=!!b.bumpMap,Ge=!!b.normalMap,Pe=!!b.displacementMap,nt=!!b.emissiveMap,Ne=!!b.metalnessMap,N=!!b.roughnessMap,R=b.anisotropy>0,ee=b.clearcoat>0,fe=b.dispersion>0,_e=b.iridescence>0,he=b.sheen>0,Ke=b.transmission>0,De=R&&!!b.anisotropyMap,We=ee&&!!b.clearcoatMap,ht=ee&&!!b.clearcoatNormalMap,Te=ee&&!!b.clearcoatRoughnessMap,je=_e&&!!b.iridescenceMap,it=_e&&!!b.iridescenceThicknessMap,at=he&&!!b.sheenColorMap,qe=he&&!!b.sheenRoughnessMap,vt=!!b.specularMap,ft=!!b.specularColorMap,Pt=!!b.specularIntensityMap,q=Ke&&!!b.transmissionMap,Ie=Ke&&!!b.thicknessMap,ue=!!b.gradientMap,me=!!b.alphaMap,ke=b.alphaTest>0,Fe=!!b.alphaHash,dt=!!b.extensions;let It=Mr;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Kt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Le,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Zs,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:ge,envMap:Ce,envMapMode:Ce&&ae.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:Qe,bumpMap:Ee,normalMap:Ge,displacementMap:_&&Pe,emissiveMap:nt,normalMapObjectSpace:Ge&&b.normalMapType===K0,normalMapTangentSpace:Ge&&b.normalMapType===iv,metalnessMap:Ne,roughnessMap:N,anisotropy:R,anisotropyMap:De,clearcoat:ee,clearcoatMap:We,clearcoatNormalMap:ht,clearcoatRoughnessMap:Te,dispersion:fe,iridescence:_e,iridescenceMap:je,iridescenceThicknessMap:it,sheen:he,sheenColorMap:at,sheenRoughnessMap:qe,specularMap:vt,specularColorMap:ft,specularIntensityMap:Pt,transmission:Ke,transmissionMap:q,thicknessMap:Ie,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Vs&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:ke,alphaHash:Fe,combine:b.combine,mapUv:ct&&E(b.map.channel),aoMapUv:O&&E(b.aoMap.channel),lightMapUv:Qe&&E(b.lightMap.channel),bumpMapUv:Ee&&E(b.bumpMap.channel),normalMapUv:Ge&&E(b.normalMap.channel),displacementMapUv:Pe&&E(b.displacementMap.channel),emissiveMapUv:nt&&E(b.emissiveMap.channel),metalnessMapUv:Ne&&E(b.metalnessMap.channel),roughnessMapUv:N&&E(b.roughnessMap.channel),anisotropyMapUv:De&&E(b.anisotropyMap.channel),clearcoatMapUv:We&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:at&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:qe&&E(b.sheenRoughnessMap.channel),specularMapUv:vt&&E(b.specularMap.channel),specularColorMapUv:ft&&E(b.specularColorMap.channel),specularIntensityMapUv:Pt&&E(b.specularIntensityMap.channel),transmissionMapUv:q&&E(b.transmissionMap.channel),thicknessMapUv:Ie&&E(b.thicknessMap.channel),alphaMapUv:me&&E(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ge||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!le.attributes.uv&&(ct||me),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:ve,skinning:W.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:nt&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ki,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:dt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&b.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function v(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(L(w,b),C(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function L(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function C(b,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const w=M[b.type];let I;if(w){const H=pi[w];I=Cx.clone(H.uniforms)}else I=b.uniforms;return I}function z(b,w){let I;for(let H=0,W=m.length;H<W;H++){const j=m[H];if(j.cacheKey===w){I=j,++I.usedTimes;break}}return I===void 0&&(I=new I1(s,w,b,l),m.push(I)),I}function U(b){if(--b.usedTimes===0){const w=m.indexOf(b);m[w]=m[m.length-1],m.pop(),b.destroy()}}function D(b){d.remove(b)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:z,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:B}}function B1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function z1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g,_,y,M,E,S){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},s[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=E,v.group=S),e++,v}function f(g,_,y,M,E,S){const v=c(g,_,y,M,E,S);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function d(g,_,y,M,E,S){const v=c(g,_,y,M,E,S);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function h(g,_){t.length>1&&t.sort(g||z1),r.length>1&&r.sort(_||Sg),o.length>1&&o.sort(_||Sg)}function m(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:m,sort:h}}function H1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Mg,s.set(r,[c])):o>=l.length?(c=new Mg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function V1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Mt};break;case"SpotLight":t={position:new $,direction:new $,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function G1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let W1=0;function X1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j1(s){const e=new V1,t=G1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const o=new $,l=new zt,c=new zt;function f(h){let m=0,g=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let y=0,M=0,E=0,S=0,v=0,L=0,C=0,A=0,z=0,U=0,D=0;h.sort(X1);for(let b=0,w=h.length;b<w;b++){const I=h[b],H=I.color,W=I.intensity,j=I.distance,le=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=H.r*W,g+=H.g*W,_+=H.b*W;else if(I.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(I.sh.coefficients[re],W);D++}else if(I.isDirectionalLight){const re=e.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ae=I.shadow,G=t.get(I);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,r.directionalShadow[y]=G,r.directionalShadowMap[y]=le,r.directionalShadowMatrix[y]=I.shadow.matrix,L++}r.directional[y]=re,y++}else if(I.isSpotLight){const re=e.get(I);re.position.setFromMatrixPosition(I.matrixWorld),re.color.copy(H).multiplyScalar(W),re.distance=j,re.coneCos=Math.cos(I.angle),re.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),re.decay=I.decay,r.spot[E]=re;const ae=I.shadow;if(I.map&&(r.spotLightMap[z]=I.map,z++,ae.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[E]=ae.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,r.spotShadow[E]=G,r.spotShadowMap[E]=le,A++}E++}else if(I.isRectAreaLight){const re=e.get(I);re.color.copy(H).multiplyScalar(W),re.halfWidth.set(I.width*.5,0,0),re.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=re,S++}else if(I.isPointLight){const re=e.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity),re.distance=I.distance,re.decay=I.decay,I.castShadow){const ae=I.shadow,G=t.get(I);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,r.pointShadow[M]=G,r.pointShadowMap[M]=le,r.pointShadowMatrix[M]=I.shadow.matrix,C++}r.point[M]=re,M++}else if(I.isHemisphereLight){const re=e.get(I);re.skyColor.copy(I.color).multiplyScalar(W),re.groundColor.copy(I.groundColor).multiplyScalar(W),r.hemi[v]=re,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=_;const B=r.hash;(B.directionalLength!==y||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==S||B.hemiLength!==v||B.numDirectionalShadows!==L||B.numPointShadows!==C||B.numSpotShadows!==A||B.numSpotMaps!==z||B.numLightProbes!==D)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+z-U,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=D,B.directionalLength=y,B.pointLength=M,B.spotLength=E,B.rectAreaLength=S,B.hemiLength=v,B.numDirectionalShadows=L,B.numPointShadows=C,B.numSpotShadows=A,B.numSpotMaps=z,B.numLightProbes=D,r.version=W1++)}function d(h,m){let g=0,_=0,y=0,M=0,E=0;const S=m.matrixWorldInverse;for(let v=0,L=h.length;v<L;v++){const C=h[v];if(C.isDirectionalLight){const A=r.directional[g];A.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),g++}else if(C.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(C.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:f,setupView:d,state:r}}function Eg(s){const e=new j1(s),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function c(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function q1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Eg(s),e.set(o,[f])):l>=c.length?(f=new Eg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function K1(s,e,t){let r=new Ud;const o=new Be,l=new Be,c=new Lt,f=new py({depthPacking:$0}),d=new my,h={},m=t.maxTextureSize,g={[Er]:Dn,[Dn]:Er,[ki]:ki},_=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new wr;M.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new gi(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let v=this.type;this.render=function(U,D,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Sr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const W=v!==Fi&&this.type===Fi,j=v===Fi&&this.type!==Fi;for(let le=0,re=U.length;le<re;le++){const ae=U[le],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ce=G.getFrameExtents();if(o.multiply(ce),l.copy(G.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ce.x),o.x=l.x*ce.x,G.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ce.y),o.y=l.y*ce.y,G.mapSize.y=l.y)),G.map===null||W===!0||j===!0){const k=this.type!==Fi?{minFilter:ai,magFilter:ai}:{};G.map!==null&&G.map.dispose(),G.map=new Qr(o.x,o.y,k),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const oe=G.getViewportCount();for(let k=0;k<oe;k++){const ne=G.getViewport(k);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),H.viewport(c),G.updateMatrices(ae,k),r=G.getFrustum(),A(D,B,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&L(G,B),G.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(b,w,I)};function L(U,D){const B=e.update(E);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Qr(o.x,o.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(D,null,B,_,E,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(D,null,B,y,E,null)}function C(U,D,B,b){let w=null;const I=B.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)w=I;else if(w=B.isPointLight===!0?d:f,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const H=w.uuid,W=D.uuid;let j=h[H];j===void 0&&(j={},h[H]=j);let le=j[W];le===void 0&&(le=w.clone(),j[W]=le,D.addEventListener("dispose",z)),w=le}if(w.visible=D.visible,w.wireframe=D.wireframe,b===Fi?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:g[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=s.properties.get(w);H.light=B}return w}function A(U,D,B,b,w){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===Fi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,U.matrixWorld);const W=e.update(U),j=U.material;if(Array.isArray(j)){const le=W.groups;for(let re=0,ae=le.length;re<ae;re++){const G=le[re],ce=j[G.materialIndex];if(ce&&ce.visible){const oe=C(U,ce,b,w);U.onBeforeShadow(s,U,D,B,W,oe,G),s.renderBufferDirect(B,null,W,oe,U,G),U.onAfterShadow(s,U,D,B,W,oe,G)}}}else if(j.visible){const le=C(U,j,b,w);U.onBeforeShadow(s,U,D,B,W,le,null),s.renderBufferDirect(B,null,W,le,U,null),U.onAfterShadow(s,U,D,B,W,le,null)}}const H=U.children;for(let W=0,j=H.length;W<j;W++)A(H[W],D,B,b,w)}function z(U){U.target.removeEventListener("dispose",z);for(const B in h){const b=h[B],w=U.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Z1={[Of]:Ff,[kf]:Hf,[Bf]:Vf,[js]:zf,[Ff]:Of,[Hf]:kf,[Vf]:Bf,[zf]:js};function J1(s,e){function t(){let q=!1;const Ie=new Lt;let ue=null;const me=new Lt(0,0,0,0);return{setMask:function(ke){ue!==ke&&!q&&(s.colorMask(ke,ke,ke,ke),ue=ke)},setLocked:function(ke){q=ke},setClear:function(ke,Fe,dt,It,Kt){Kt===!0&&(ke*=It,Fe*=It,dt*=It),Ie.set(ke,Fe,dt,It),me.equals(Ie)===!1&&(s.clearColor(ke,Fe,dt,It),me.copy(Ie))},reset:function(){q=!1,ue=null,me.set(-1,0,0,0)}}}function r(){let q=!1,Ie=!1,ue=null,me=null,ke=null;return{setReversed:function(Fe){if(Ie!==Fe){const dt=e.get("EXT_clip_control");Ie?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const It=ke;ke=null,this.setClear(It)}Ie=Fe},getReversed:function(){return Ie},setTest:function(Fe){Fe?pe(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Fe){ue!==Fe&&!q&&(s.depthMask(Fe),ue=Fe)},setFunc:function(Fe){if(Ie&&(Fe=Z1[Fe]),me!==Fe){switch(Fe){case Of:s.depthFunc(s.NEVER);break;case Ff:s.depthFunc(s.ALWAYS);break;case kf:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Bf:s.depthFunc(s.EQUAL);break;case zf:s.depthFunc(s.GEQUAL);break;case Hf:s.depthFunc(s.GREATER);break;case Vf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Fe}},setLocked:function(Fe){q=Fe},setClear:function(Fe){ke!==Fe&&(Ie&&(Fe=1-Fe),s.clearDepth(Fe),ke=Fe)},reset:function(){q=!1,ue=null,me=null,ke=null,Ie=!1}}}function o(){let q=!1,Ie=null,ue=null,me=null,ke=null,Fe=null,dt=null,It=null,Kt=null;return{setTest:function(Tt){q||(Tt?pe(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!q&&(s.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,Tn,xn){(ue!==Tt||me!==Tn||ke!==xn)&&(s.stencilFunc(Tt,Tn,xn),ue=Tt,me=Tn,ke=xn)},setOp:function(Tt,Tn,xn){(Fe!==Tt||dt!==Tn||It!==xn)&&(s.stencilOp(Tt,Tn,xn),Fe=Tt,dt=Tn,It=xn)},setLocked:function(Tt){q=Tt},setClear:function(Tt){Kt!==Tt&&(s.clearStencil(Tt),Kt=Tt)},reset:function(){q=!1,Ie=null,ue=null,me=null,ke=null,Fe=null,dt=null,It=null,Kt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,v=null,L=null,C=null,A=null,z=null,U=null,D=new Mt(0,0,0),B=0,b=!1,w=null,I=null,H=null,W=null,j=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ae=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),re=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),re=ae>=2);let ce=null,oe={};const k=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Le=new Lt().fromArray(k),Q=new Lt().fromArray(ne);function de(q,Ie,ue,me){const ke=new Uint8Array(4),Fe=s.createTexture();s.bindTexture(q,Fe),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ue;dt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ie+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Fe}const Se={};Se[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),c.setFunc(js),Ee(!1),Ge(Sm),pe(s.CULL_FACE),O(Sr);function pe(q){m[q]!==!0&&(s.enable(q),m[q]=!0)}function ve(q){m[q]!==!1&&(s.disable(q),m[q]=!1)}function be(q,Ie){return g[q]!==Ie?(s.bindFramebuffer(q,Ie),g[q]=Ie,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ie),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ve(q,Ie){let ue=y,me=!1;if(q){ue=_.get(Ie),ue===void 0&&(ue=[],_.set(Ie,ue));const ke=q.textures;if(ue.length!==ke.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Fe=0,dt=ke.length;Fe<dt;Fe++)ue[Fe]=s.COLOR_ATTACHMENT0+Fe;ue.length=ke.length,me=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,me=!0);me&&s.drawBuffers(ue)}function ct(q){return M!==q?(s.useProgram(q),M=q,!0):!1}const ge={[Yr]:s.FUNC_ADD,[S0]:s.FUNC_SUBTRACT,[M0]:s.FUNC_REVERSE_SUBTRACT};ge[E0]=s.MIN,ge[T0]=s.MAX;const Ce={[w0]:s.ZERO,[A0]:s.ONE,[C0]:s.SRC_COLOR,[If]:s.SRC_ALPHA,[N0]:s.SRC_ALPHA_SATURATE,[L0]:s.DST_COLOR,[P0]:s.DST_ALPHA,[R0]:s.ONE_MINUS_SRC_COLOR,[Uf]:s.ONE_MINUS_SRC_ALPHA,[D0]:s.ONE_MINUS_DST_COLOR,[b0]:s.ONE_MINUS_DST_ALPHA,[I0]:s.CONSTANT_COLOR,[U0]:s.ONE_MINUS_CONSTANT_COLOR,[O0]:s.CONSTANT_ALPHA,[F0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(q,Ie,ue,me,ke,Fe,dt,It,Kt,Tt){if(q===Sr){E===!0&&(ve(s.BLEND),E=!1);return}if(E===!1&&(pe(s.BLEND),E=!0),q!==y0){if(q!==S||Tt!==b){if((v!==Yr||A!==Yr)&&(s.blendEquation(s.FUNC_ADD),v=Yr,A=Yr),Tt)switch(q){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.ONE,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,C=null,z=null,U=null,D.set(0,0,0),B=0,S=q,b=Tt}return}ke=ke||Ie,Fe=Fe||ue,dt=dt||me,(Ie!==v||ke!==A)&&(s.blendEquationSeparate(ge[Ie],ge[ke]),v=Ie,A=ke),(ue!==L||me!==C||Fe!==z||dt!==U)&&(s.blendFuncSeparate(Ce[ue],Ce[me],Ce[Fe],Ce[dt]),L=ue,C=me,z=Fe,U=dt),(It.equals(D)===!1||Kt!==B)&&(s.blendColor(It.r,It.g,It.b,Kt),D.copy(It),B=Kt),S=q,b=!1}function Qe(q,Ie){q.side===ki?ve(s.CULL_FACE):pe(s.CULL_FACE);let ue=q.side===Dn;Ie&&(ue=!ue),Ee(ue),q.blending===Vs&&q.transparent===!1?O(Sr):O(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const me=q.stencilWrite;f.setTest(me),me&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(q){w!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),w=q)}function Ge(q){q!==v0?(pe(s.CULL_FACE),q!==I&&(q===Sm?s.cullFace(s.BACK):q===_0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),I=q}function Pe(q){q!==H&&(re&&s.lineWidth(q),H=q)}function nt(q,Ie,ue){q?(pe(s.POLYGON_OFFSET_FILL),(W!==Ie||j!==ue)&&(s.polygonOffset(Ie,ue),W=Ie,j=ue)):ve(s.POLYGON_OFFSET_FILL)}function Ne(q){q?pe(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function N(q){q===void 0&&(q=s.TEXTURE0+le-1),ce!==q&&(s.activeTexture(q),ce=q)}function R(q,Ie,ue){ue===void 0&&(ce===null?ue=s.TEXTURE0+le-1:ue=ce);let me=oe[ue];me===void 0&&(me={type:void 0,texture:void 0},oe[ue]=me),(me.type!==q||me.texture!==Ie)&&(ce!==ue&&(s.activeTexture(ue),ce=ue),s.bindTexture(q,Ie||Se[q]),me.type=q,me.texture=Ie)}function ee(){const q=oe[ce];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(q){Le.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Le.copy(q))}function qe(q){Q.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function vt(q,Ie){let ue=h.get(Ie);ue===void 0&&(ue=new WeakMap,h.set(Ie,ue));let me=ue.get(q);me===void 0&&(me=s.getUniformBlockIndex(Ie,q.name),ue.set(q,me))}function ft(q,Ie){const me=h.get(Ie).get(q);d.get(Ie)!==me&&(s.uniformBlockBinding(Ie,me,q.__bindingPointIndex),d.set(Ie,me))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ce=null,oe={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,v=null,L=null,C=null,A=null,z=null,U=null,D=new Mt(0,0,0),B=0,b=!1,w=null,I=null,H=null,W=null,j=null,Le.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:ve,bindFramebuffer:be,drawBuffers:Ve,useProgram:ct,setBlending:O,setMaterial:Qe,setFlipSided:Ee,setCullFace:Ge,setLineWidth:Pe,setPolygonOffset:nt,setScissorTest:Ne,activeTexture:N,bindTexture:R,unbindTexture:ee,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:je,texImage3D:it,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:ht,texStorage3D:Te,texSubImage2D:he,texSubImage3D:Ke,compressedTexSubImage2D:De,compressedTexSubImage3D:We,scissor:at,viewport:qe,reset:Pt}}function Q1(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,R){return y?new OffscreenCanvas(N,R):nu("canvas")}function E(N,R,ee){let fe=1;const _e=Ne(N);if((_e.width>ee||_e.height>ee)&&(fe=ee/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(fe*_e.width),Ke=Math.floor(fe*_e.height);g===void 0&&(g=M(he,Ke));const De=R?M(he,Ke):g;return De.width=he,De.height=Ke,De.getContext("2d").drawImage(N,0,0,he,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ke+")."),De}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(N,R,ee,fe,_e=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=R;if(R===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),R===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),R===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),R===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),R===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ee===s.UNSIGNED_INT&&(he=s.RGB32UI),ee===s.BYTE&&(he=s.RGB8I),ee===s.SHORT&&(he=s.RGB16I),ee===s.INT&&(he=s.RGB32I)),R===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ee===s.UNSIGNED_INT&&(he=s.RGBA32UI),ee===s.BYTE&&(he=s.RGBA8I),ee===s.SHORT&&(he=s.RGBA16I),ee===s.INT&&(he=s.RGBA32I)),R===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),R===s.RGBA){const Ke=_e?eu:Rt.getTransfer(fe);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=Ke===bt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function A(N,R){let ee;return N?R===null||R===Jr||R===$s?ee=s.DEPTH24_STENCIL8:R===Bi?ee=s.DEPTH32F_STENCIL8:R===Xo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Jr||R===$s?ee=s.DEPTH_COMPONENT24:R===Bi?ee=s.DEPTH_COMPONENT32F:R===Xo&&(ee=s.DEPTH_COMPONENT16),ee}function z(N,R){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==ai&&N.minFilter!==mi?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function U(N){const R=N.target;R.removeEventListener("dispose",U),B(R),R.isVideoTexture&&m.delete(R)}function D(N){const R=N.target;R.removeEventListener("dispose",D),w(R)}function B(N){const R=r.get(N);if(R.__webglInit===void 0)return;const ee=N.source,fe=_.get(ee);if(fe){const _e=fe[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(N),Object.keys(fe).length===0&&_.delete(ee)}r.remove(N)}function b(N){const R=r.get(N);s.deleteTexture(R.__webglTexture);const ee=N.source,fe=_.get(ee);delete fe[R.__cacheKey],c.memory.textures--}function w(N){const R=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(R.__webglFramebuffer[fe]))for(let _e=0;_e<R.__webglFramebuffer[fe].length;_e++)s.deleteFramebuffer(R.__webglFramebuffer[fe][_e]);else s.deleteFramebuffer(R.__webglFramebuffer[fe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[fe])}else{if(Array.isArray(R.__webglFramebuffer))for(let fe=0;fe<R.__webglFramebuffer.length;fe++)s.deleteFramebuffer(R.__webglFramebuffer[fe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let fe=0;fe<R.__webglColorRenderbuffer.length;fe++)R.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[fe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=N.textures;for(let fe=0,_e=ee.length;fe<_e;fe++){const he=r.get(ee[fe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(ee[fe])}r.remove(N)}let I=0;function H(){I=0}function W(){const N=I;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),I+=1,N}function j(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function le(N,R){const ee=r.get(N);if(N.isVideoTexture&&Pe(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const fe=N.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,N,R);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+R)}function re(N,R){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+R)}function ae(N,R){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,R);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+R)}function G(N,R){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){de(ee,N,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+R)}const ce={[Xf]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[jf]:s.MIRRORED_REPEAT},oe={[ai]:s.NEAREST,[q0]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[qc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},k={[Z0]:s.NEVER,[ix]:s.ALWAYS,[J0]:s.LESS,[rv]:s.LEQUAL,[Q0]:s.EQUAL,[nx]:s.GEQUAL,[ex]:s.GREATER,[tx]:s.NOTEQUAL};function ne(N,R){if(R.type===Bi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===mi||R.magFilter===qc||R.magFilter===ul||R.magFilter===Zr||R.minFilter===mi||R.minFilter===qc||R.minFilter===ul||R.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ce[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ce[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ce[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,oe[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ai||R.minFilter!==ul&&R.minFilter!==Zr||R.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Le(N,R){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",U));const fe=R.source;let _e=_.get(fe);_e===void 0&&(_e={},_.set(fe,_e));const he=j(R);if(he!==N.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),_e[he].usedTimes++;const Ke=_e[N.__cacheKey];Ke!==void 0&&(_e[N.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(R)),N.__cacheKey=he,N.__webglTexture=_e[he].texture}return ee}function Q(N,R,ee){let fe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(fe=s.TEXTURE_3D);const _e=Le(N,R),he=R.source;t.bindTexture(fe,N.__webglTexture,s.TEXTURE0+ee);const Ke=r.get(he);if(he.version!==Ke.__version||_e===!0){t.activeTexture(s.TEXTURE0+ee);const De=Rt.getPrimaries(Rt.workingColorSpace),We=R.colorSpace===xr?null:Rt.getPrimaries(R.colorSpace),ht=R.colorSpace===xr||De===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Te=E(R.image,!1,o.maxTextureSize);Te=nt(R,Te);const je=l.convert(R.format,R.colorSpace),it=l.convert(R.type);let at=C(R.internalFormat,je,it,R.colorSpace,R.isVideoTexture);ne(fe,R);let qe;const vt=R.mipmaps,ft=R.isVideoTexture!==!0,Pt=Ke.__version===void 0||_e===!0,q=he.dataReady,Ie=z(R,Te);if(R.isDepthTexture)at=A(R.format===Ks,R.type),Pt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,at,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,at,Te.width,Te.height,0,je,it,null));else if(R.isDataTexture)if(vt.length>0){ft&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ie,at,vt[0].width,vt[0].height);for(let ue=0,me=vt.length;ue<me;ue++)qe=vt[ue],ft?q&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,qe.width,qe.height,je,it,qe.data):t.texImage2D(s.TEXTURE_2D,ue,at,qe.width,qe.height,0,je,it,qe.data);R.generateMipmaps=!1}else ft?(Pt&&t.texStorage2D(s.TEXTURE_2D,Ie,at,Te.width,Te.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,je,it,Te.data)):t.texImage2D(s.TEXTURE_2D,0,at,Te.width,Te.height,0,je,it,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ft&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,at,vt[0].width,vt[0].height,Te.depth);for(let ue=0,me=vt.length;ue<me;ue++)if(qe=vt[ue],R.format!==oi)if(je!==null)if(ft){if(q)if(R.layerUpdates.size>0){const ke=Qm(qe.width,qe.height,R.format,R.type);for(const Fe of R.layerUpdates){const dt=qe.data.subarray(Fe*ke/qe.data.BYTES_PER_ELEMENT,(Fe+1)*ke/qe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Fe,qe.width,qe.height,1,je,dt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,qe.width,qe.height,Te.depth,je,qe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,at,qe.width,qe.height,Te.depth,0,qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,qe.width,qe.height,Te.depth,je,it,qe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,at,qe.width,qe.height,Te.depth,0,je,it,qe.data)}else{ft&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ie,at,vt[0].width,vt[0].height);for(let ue=0,me=vt.length;ue<me;ue++)qe=vt[ue],R.format!==oi?je!==null?ft?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,qe.width,qe.height,je,qe.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,at,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?q&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,qe.width,qe.height,je,it,qe.data):t.texImage2D(s.TEXTURE_2D,ue,at,qe.width,qe.height,0,je,it,qe.data)}else if(R.isDataArrayTexture)if(ft){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,at,Te.width,Te.height,Te.depth),q)if(R.layerUpdates.size>0){const ue=Qm(Te.width,Te.height,R.format,R.type);for(const me of R.layerUpdates){const ke=Te.data.subarray(me*ue/Te.data.BYTES_PER_ELEMENT,(me+1)*ue/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,je,it,ke)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,je,it,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,at,Te.width,Te.height,Te.depth,0,je,it,Te.data);else if(R.isData3DTexture)ft?(Pt&&t.texStorage3D(s.TEXTURE_3D,Ie,at,Te.width,Te.height,Te.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,je,it,Te.data)):t.texImage3D(s.TEXTURE_3D,0,at,Te.width,Te.height,Te.depth,0,je,it,Te.data);else if(R.isFramebufferTexture){if(Pt)if(ft)t.texStorage2D(s.TEXTURE_2D,Ie,at,Te.width,Te.height);else{let ue=Te.width,me=Te.height;for(let ke=0;ke<Ie;ke++)t.texImage2D(s.TEXTURE_2D,ke,at,ue,me,0,je,it,null),ue>>=1,me>>=1}}else if(vt.length>0){if(ft&&Pt){const ue=Ne(vt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,at,ue.width,ue.height)}for(let ue=0,me=vt.length;ue<me;ue++)qe=vt[ue],ft?q&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,je,it,qe):t.texImage2D(s.TEXTURE_2D,ue,at,je,it,qe);R.generateMipmaps=!1}else if(ft){if(Pt){const ue=Ne(Te);t.texStorage2D(s.TEXTURE_2D,Ie,at,ue.width,ue.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,it,Te)}else t.texImage2D(s.TEXTURE_2D,0,at,je,it,Te);S(R)&&v(fe),Ke.__version=he.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function de(N,R,ee){if(R.image.length!==6)return;const fe=Le(N,R),_e=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const he=r.get(_e);if(_e.version!==he.__version||fe===!0){t.activeTexture(s.TEXTURE0+ee);const Ke=Rt.getPrimaries(Rt.workingColorSpace),De=R.colorSpace===xr?null:Rt.getPrimaries(R.colorSpace),We=R.colorSpace===xr||Ke===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const ht=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,je=[];for(let me=0;me<6;me++)!ht&&!Te?je[me]=E(R.image[me],!0,o.maxCubemapSize):je[me]=Te?R.image[me].image:R.image[me],je[me]=nt(R,je[me]);const it=je[0],at=l.convert(R.format,R.colorSpace),qe=l.convert(R.type),vt=C(R.internalFormat,at,qe,R.colorSpace),ft=R.isVideoTexture!==!0,Pt=he.__version===void 0||fe===!0,q=_e.dataReady;let Ie=z(R,it);ne(s.TEXTURE_CUBE_MAP,R);let ue;if(ht){ft&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,vt,it.width,it.height);for(let me=0;me<6;me++){ue=je[me].mipmaps;for(let ke=0;ke<ue.length;ke++){const Fe=ue[ke];R.format!==oi?at!==null?ft?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Fe.width,Fe.height,at,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,vt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Fe.width,Fe.height,at,qe,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,vt,Fe.width,Fe.height,0,at,qe,Fe.data)}}}else{if(ue=R.mipmaps,ft&&Pt){ue.length>0&&Ie++;const me=Ne(je[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,vt,me.width,me.height)}for(let me=0;me<6;me++)if(Te){ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je[me].width,je[me].height,at,qe,je[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,je[me].width,je[me].height,0,at,qe,je[me].data);for(let ke=0;ke<ue.length;ke++){const dt=ue[ke].image[me].image;ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,dt.width,dt.height,at,qe,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,vt,dt.width,dt.height,0,at,qe,dt.data)}}else{ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,at,qe,je[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,at,qe,je[me]);for(let ke=0;ke<ue.length;ke++){const Fe=ue[ke];ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,at,qe,Fe.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,vt,at,qe,Fe.image[me])}}}S(R)&&v(s.TEXTURE_CUBE_MAP),he.__version=_e.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Se(N,R,ee,fe,_e,he){const Ke=l.convert(ee.format,ee.colorSpace),De=l.convert(ee.type),We=C(ee.internalFormat,Ke,De,ee.colorSpace),ht=r.get(R),Te=r.get(ee);if(Te.__renderTarget=R,!ht.__hasExternalTextures){const je=Math.max(1,R.width>>he),it=Math.max(1,R.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,We,je,it,R.depth,0,Ke,De,null):t.texImage2D(_e,he,We,je,it,0,Ke,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Ge(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,_e,Te.__webglTexture,0,Ee(R)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,_e,Te.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(N,R,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer){const fe=R.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,he=A(R.stencilBuffer,_e),Ke=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=Ee(R);Ge(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,he,R.width,R.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,he,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,he,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,N)}else{const fe=R.textures;for(let _e=0;_e<fe.length;_e++){const he=fe[_e],Ke=l.convert(he.format,he.colorSpace),De=l.convert(he.type),We=C(he.internalFormat,Ke,De,he.colorSpace),ht=Ee(R);ee&&Ge(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,We,R.width,R.height):Ge(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,We,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,We,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(R.depthTexture);fe.__renderTarget=R,(!fe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),le(R.depthTexture,0);const _e=fe.__webglTexture,he=Ee(R);if(R.depthTexture.format===Gs)Ge(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(R.depthTexture.format===Ks)Ge(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function be(N){const R=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),fe){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=fe}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ve(R.__webglFramebuffer,N)}else if(ee){R.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[fe]),R.__webglDepthbuffer[fe]===void 0)R.__webglDepthbuffer[fe]=s.createRenderbuffer(),pe(R.__webglDepthbuffer[fe],N,!1);else{const _e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=R.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),pe(R.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(N,R,ee){const fe=r.get(N);R!==void 0&&Se(fe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&be(N)}function ct(N){const R=N.texture,ee=r.get(N),fe=r.get(R);N.addEventListener("dispose",D);const _e=N.textures,he=N.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=R.version,c.memory.textures++),he){ee.__webglFramebuffer=[];for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[De]=[];for(let We=0;We<R.mipmaps.length;We++)ee.__webglFramebuffer[De][We]=s.createFramebuffer()}else ee.__webglFramebuffer[De]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let De=0;De<R.mipmaps.length;De++)ee.__webglFramebuffer[De]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let De=0,We=_e.length;De<We;De++){const ht=r.get(_e[De]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(N.samples>0&&Ge(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let De=0;De<_e.length;De++){const We=_e[De];ee.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[De]);const ht=l.convert(We.format,We.colorSpace),Te=l.convert(We.type),je=C(We.internalFormat,ht,Te,We.colorSpace,N.isXRRenderTarget===!0),it=Ee(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,je,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ee.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,R);for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0)for(let We=0;We<R.mipmaps.length;We++)Se(ee.__webglFramebuffer[De][We],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,We);else Se(ee.__webglFramebuffer[De],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(R)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let De=0,We=_e.length;De<We;De++){const ht=_e[De],Te=r.get(ht);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),ne(s.TEXTURE_2D,ht),Se(ee.__webglFramebuffer,N,ht,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),S(ht)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,fe.__webglTexture),ne(De,R),R.mipmaps&&R.mipmaps.length>0)for(let We=0;We<R.mipmaps.length;We++)Se(ee.__webglFramebuffer[We],N,R,s.COLOR_ATTACHMENT0,De,We);else Se(ee.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,De,0);S(R)&&v(De),t.unbindTexture()}N.depthBuffer&&be(N)}function ge(N){const R=N.textures;for(let ee=0,fe=R.length;ee<fe;ee++){const _e=R[ee];if(S(_e)){const he=L(N),Ke=r.get(_e).__webglTexture;t.bindTexture(he,Ke),v(he),t.unbindTexture()}}}const Ce=[],O=[];function Qe(N){if(N.samples>0){if(Ge(N)===!1){const R=N.textures,ee=N.width,fe=N.height;let _e=s.COLOR_BUFFER_BIT;const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(N),De=R.length>1;if(De)for(let We=0;We<R.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let We=0;We<R.length;We++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[We]);const ht=r.get(R[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,ee,fe,0,0,ee,fe,_e,s.NEAREST),d===!0&&(Ce.length=0,O.length=0,Ce.push(s.COLOR_ATTACHMENT0+We),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(he),O.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<R.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[We]);const ht=r.get(R[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const R=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function Ee(N){return Math.min(o.maxSamples,N.samples)}function Ge(N){const R=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pe(N){const R=c.render.frame;m.get(N)!==R&&(m.set(N,R),N.update())}function nt(N,R){const ee=N.colorSpace,fe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Zs&&ee!==xr&&(Rt.getTransfer(ee)===bt?(fe!==oi||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=le,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=Ve,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ge}function eT(s,e){function t(r,o=xr){let l;const c=Rt.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===qg)return s.BYTE;if(r===Yg)return s.SHORT;if(r===Xo)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===Kg)return s.ALPHA;if(r===Zg)return s.RGB;if(r===oi)return s.RGBA;if(r===Jg)return s.LUMINANCE;if(r===Qg)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===ev)return s.RED;if(r===Ld)return s.RED_INTEGER;if(r===tv)return s.RG;if(r===Dd)return s.RG_INTEGER;if(r===Nd)return s.RGBA_INTEGER;if(r===ql||r===Yl||r===$l||r===Kl)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qf||r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$f)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf||r===Jf||r===Qf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Zf||r===Jf)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Qf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd||r===fd||r===dd||r===hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ed)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===od)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ad)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ud)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zl||r===pd||r===md)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===md)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nv||r===gd||r===vd||r===_d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const tT={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),v=this._getHandJoint(h,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Cl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const nT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iT=`
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

}`;class rT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Nn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:nT,fragmentShader:iT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gi(new su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sT extends Qs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,g=null,_=null,y=null,M=null;const E=new rT,S=t.getContextAttributes();let v=null,L=null;const C=[],A=[],z=new Be;let U=null;const D=new Hn;D.viewport=new Lt;const B=new Hn;B.viewport=new Lt;const b=[D,B],w=new wy;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=C[Q];return de===void 0&&(de=new Rf,C[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=C[Q];return de===void 0&&(de=new Rf,C[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=C[Q];return de===void 0&&(de=new Rf,C[Q]=de),de.getHandSpace()};function W(Q){const de=A.indexOf(Q.inputSource);if(de===-1)return;const Se=C[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,h||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",le);for(let Q=0;Q<C.length;Q++){const de=A[Q];de!==null&&(A[Q]=null,C[Q].disconnect(de))}I=null,H=null,E.reset(),e.setRenderTarget(v),y=null,_=null,g=null,o=null,L=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",j),o.addEventListener("inputsourceschange",le),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(z),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let Se=null,pe=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?Ks:Gs,pe=S.stencil?$s:Jr);const be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(be),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Qr(_.textureWidth,_.textureHeight,{format:oi,type:Gi,depthTexture:new gv(_.textureWidth,_.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Qr(y.framebufferWidth,y.framebufferHeight,{format:oi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function le(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],pe=A.indexOf(Se);pe>=0&&(A[pe]=null,C[pe].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let pe=A.indexOf(Se);if(pe===-1){for(let be=0;be<C.length;be++)if(be>=A.length){A.push(Se),pe=be;break}else if(A[be]===null){A[be]=Se,pe=be;break}if(pe===-1)break}const ve=C[pe];ve&&ve.connect(Se)}}const re=new $,ae=new $;function G(Q,de,Se){re.setFromMatrixPosition(de.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const pe=re.distanceTo(ae),ve=de.projectionMatrix.elements,be=Se.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),ct=ve[14]/(ve[10]+1),ge=(ve[9]+1)/ve[5],Ce=(ve[9]-1)/ve[5],O=(ve[8]-1)/ve[0],Qe=(be[8]+1)/be[0],Ee=Ve*O,Ge=Ve*Qe,Pe=pe/(-O+Qe),nt=Pe*-O;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(nt),Q.translateZ(Pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ne=Ve+Pe,N=ct+Pe,R=Ee-nt,ee=Ge+(pe-nt),fe=ge*ct/N*Ne,_e=Ce*ct/N*Ne;Q.projectionMatrix.makePerspective(R,ee,fe,_e,Ne,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let de=Q.near,Se=Q.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),w.near=B.near=D.near=de,w.far=B.far=D.far=Se,(I!==w.near||H!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,H=w.far),D.layers.mask=Q.layers.mask|2,B.layers.mask=Q.layers.mask|4,w.layers.mask=D.layers.mask|B.layers.mask;const pe=Q.parent,ve=w.cameras;ce(w,pe);for(let be=0;be<ve.length;be++)ce(ve[be],pe);ve.length===2?G(w,D,B):w.projectionMatrix.copy(D.projectionMatrix),oe(Q,w,pe)};function oe(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let k=null;function ne(Q,de){if(m=de.getViewerPose(h||c),M=de,m!==null){const Se=m.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let pe=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let be=0;be<Se.length;be++){const Ve=Se[be];let ct=null;if(y!==null)ct=y.getViewport(Ve);else{const Ce=g.getViewSubImage(_,Ve);ct=Ce.viewport,be===0&&(e.setRenderTargetTextures(L,Ce.colorTexture,_.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(L))}let ge=b[be];ge===void 0&&(ge=new Hn,ge.layers.enable(be),ge.viewport=new Lt,b[be]=ge),ge.matrix.fromArray(Ve.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ve.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ct.x,ct.y,ct.width,ct.height),be===0&&(w.matrix.copy(ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(ge)}const ve=o.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const be=g.getDepthInformation(Se[0]);be&&be.isValid&&be.texture&&E.init(e,be,o.renderState)}}for(let Se=0;Se<C.length;Se++){const pe=A[Se],ve=C[Se];pe!==null&&ve!==void 0&&ve.update(pe,de,h||c)}k&&k(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Le=new Tv;Le.setAnimationLoop(ne),this.setAnimationLoop=function(Q){k=Q},this.dispose=function(){}}}const Xr=new _i,oT=new zt;function aT(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,hv(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,C,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),g(S,v)):v.isMeshPhongMaterial?(l(S,v),m(S,v)):v.isMeshStandardMaterial?(l(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,A)):v.isMeshMatcapMaterial?(l(S,v),M(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),E(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?d(S,v,L,C):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Dn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Dn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),C=L.envMap,A=L.envMapRotation;C&&(S.envMap.value=C,Xr.copy(A),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),S.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(Xr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function d(S,v,L,C){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=C*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function lT(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,C){const A=C.program;r.uniformBlockBinding(L,A)}function h(L,C){let A=o[L.id];A===void 0&&(M(L),A=m(L),o[L.id]=A,L.addEventListener("dispose",S));const z=C.program;r.updateUBOMapping(L,z);const U=e.render.frame;l[L.id]!==U&&(_(L),l[L.id]=U)}function m(L){const C=g();L.__bindingPointIndex=C;const A=s.createBuffer(),z=L.__size,U=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,z,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,A),A}function g(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const C=o[L.id],A=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let U=0,D=A.length;U<D;U++){const B=Array.isArray(A[U])?A[U]:[A[U]];for(let b=0,w=B.length;b<w;b++){const I=B[b];if(y(I,U,b,z)===!0){const H=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let le=0;le<W.length;le++){const re=W[le],ae=E(re);typeof re=="number"||typeof re=="boolean"?(I.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,H+j,I.__data)):re.isMatrix3?(I.__data[0]=re.elements[0],I.__data[1]=re.elements[1],I.__data[2]=re.elements[2],I.__data[3]=0,I.__data[4]=re.elements[3],I.__data[5]=re.elements[4],I.__data[6]=re.elements[5],I.__data[7]=0,I.__data[8]=re.elements[6],I.__data[9]=re.elements[7],I.__data[10]=re.elements[8],I.__data[11]=0):(re.toArray(I.__data,j),j+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,C,A,z){const U=L.value,D=C+"_"+A;if(z[D]===void 0)return typeof U=="number"||typeof U=="boolean"?z[D]=U:z[D]=U.clone(),!0;{const B=z[D];if(typeof U=="number"||typeof U=="boolean"){if(B!==U)return z[D]=U,!0}else if(B.equals(U)===!1)return B.copy(U),!0}return!1}function M(L){const C=L.uniforms;let A=0;const z=16;for(let D=0,B=C.length;D<B;D++){const b=Array.isArray(C[D])?C[D]:[C[D]];for(let w=0,I=b.length;w<I;w++){const H=b[w],W=Array.isArray(H.value)?H.value:[H.value];for(let j=0,le=W.length;j<le;j++){const re=W[j],ae=E(re),G=A%z,ce=G%ae.boundary,oe=G+ce;A+=ce,oe!==0&&z-oe<ae.storage&&(A+=z-oe),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=ae.storage}}}const U=A%z;return U>0&&(A+=z-U),L.__size=A,L.__cache={},this}function E(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function S(L){const C=L.target;C.removeEventListener("dispose",S);const A=c.indexOf(C.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);c=[],o={},l={}}return{bind:d,update:h,dispose:v}}class uT{constructor(e={}){const{canvas:t=sx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,v=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Mr,this.toneMappingExposure=1;const A=this;let z=!1,U=0,D=0,B=null,b=-1,w=null;const I=new Lt,H=new Lt;let W=null;const j=new Mt(0);let le=0,re=t.width,ae=t.height,G=1,ce=null,oe=null;const k=new Lt(0,0,re,ae),ne=new Lt(0,0,re,ae);let Le=!1;const Q=new Ud;let de=!1,Se=!1;this.transmissionResolutionScale=1;const pe=new zt,ve=new zt,be=new $,Ve=new Lt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ce(){return B===null?G:1}let O=r;function Qe(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ad}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),O===null){const Y="webgl2";if(O=Qe(Y,P),O===null)throw Qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ee,Ge,Pe,nt,Ne,N,R,ee,fe,_e,he,Ke,De,We,ht,Te,je,it,at,qe,vt,ft,Pt,q;function Ie(){Ee=new _E(O),Ee.init(),ft=new eT(O,Ee),Ge=new dE(O,Ee,e,ft),Pe=new J1(O,Ee),Ge.reverseDepthBuffer&&_&&Pe.buffers.depth.setReversed(!0),nt=new SE(O),Ne=new B1,N=new Q1(O,Ee,Pe,Ne,Ge,ft,nt),R=new pE(A),ee=new vE(A),fe=new Ry(O),Pt=new cE(O,fe),_e=new xE(O,fe,nt,Pt),he=new EE(O,_e,fe,nt),at=new ME(O,Ge,N),Te=new hE(Ne),Ke=new k1(A,R,ee,Ee,Ge,Pt,Te),De=new aT(A,Ne),We=new H1,ht=new q1(Ee),it=new uE(A,R,ee,Pe,he,y,d),je=new K1(A,he,Ge),q=new lT(O,nt,Ge,Pe),qe=new fE(O,Ee,nt),vt=new yE(O,Ee,nt),nt.programs=Ke.programs,A.capabilities=Ge,A.extensions=Ee,A.properties=Ne,A.renderLists=We,A.shadowMap=je,A.state=Pe,A.info=nt}Ie();const ue=new sT(A,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(re,ae,!1))},this.getSize=function(P){return P.set(re,ae)},this.setSize=function(P,Y,ie=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=P,ae=Y,t.width=Math.floor(P*G),t.height=Math.floor(Y*G),ie===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(re*G,ae*G).floor()},this.setDrawingBufferSize=function(P,Y,ie){re=P,ae=Y,G=ie,t.width=Math.floor(P*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,Y,ie,J){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,Y,ie,J),Pe.viewport(I.copy(k).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,Y,ie,J){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,Y,ie,J),Pe.scissor(H.copy(ne).multiplyScalar(G).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(P){Pe.setScissorTest(Le=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(P=!0,Y=!0,ie=!0){let J=0;if(P){let K=!1;if(B!==null){const we=B.texture.format;K=we===Nd||we===Dd||we===Ld}if(K){const we=B.texture.type,Ue=we===Gi||we===Jr||we===Xo||we===$s||we===Pd||we===bd,ze=it.getClearColor(),Ye=it.getClearAlpha(),lt=ze.r,ot=ze.g,Ze=ze.b;Ue?(M[0]=lt,M[1]=ot,M[2]=Ze,M[3]=Ye,O.clearBufferuiv(O.COLOR,0,M)):(E[0]=lt,E[1]=ot,E[2]=Ze,E[3]=Ye,O.clearBufferiv(O.COLOR,0,E))}else J|=O.COLOR_BUFFER_BIT}Y&&(J|=O.DEPTH_BUFFER_BIT),ie&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),it.dispose(),We.dispose(),ht.dispose(),Ne.dispose(),R.dispose(),ee.dispose(),he.dispose(),Pt.dispose(),q.dispose(),Ke.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ts),ue.removeEventListener("sessionend",Xi),yi.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const P=nt.autoReset,Y=je.enabled,ie=je.autoUpdate,J=je.needsUpdate,K=je.type;Ie(),nt.autoReset=P,je.enabled=Y,je.autoUpdate=ie,je.needsUpdate=J,je.type=K}function Fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const Y=P.target;Y.removeEventListener("dispose",dt),It(Y)}function It(P){Kt(P),Ne.remove(P)}function Kt(P){const Y=Ne.get(P).programs;Y!==void 0&&(Y.forEach(function(ie){Ke.releaseProgram(ie)}),P.isShaderMaterial&&Ke.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ie,J,K,we){Y===null&&(Y=ct);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,ze=na(P,Y,ie,J,K);Pe.setMaterial(J,Ue);let Ye=ie.index,lt=1;if(J.wireframe===!0){if(Ye=_e.getWireframeAttribute(ie),Ye===void 0)return;lt=2}const ot=ie.drawRange,Ze=ie.attributes.position;let St=ot.start*lt,pt=(ot.start+ot.count)*lt;we!==null&&(St=Math.max(St,we.start*lt),pt=Math.min(pt,(we.start+we.count)*lt)),Ye!==null?(St=Math.max(St,0),pt=Math.min(pt,Ye.count)):Ze!=null&&(St=Math.max(St,0),pt=Math.min(pt,Ze.count));const Wt=pt-St;if(Wt<0||Wt===1/0)return;Pt.setup(K,J,ze,ie,Ye);let Ft,Et=qe;if(Ye!==null&&(Ft=fe.get(Ye),Et=vt,Et.setIndex(Ft)),K.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*Ce()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(K.isLine){let tt=J.linewidth;tt===void 0&&(tt=1),Pe.setLineWidth(tt*Ce()),K.isLineSegments?Et.setMode(O.LINES):K.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else K.isPoints?Et.setMode(O.POINTS):K.isSprite&&Et.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const tt=K._multiDrawStarts,Xt=K._multiDrawCounts,yt=K._multiDrawCount,fn=Ye?fe.get(Ye).bytesPerElement:1,qi=Ne.get(J).currentProgram.getUniforms();for(let yn=0;yn<yt;yn++)qi.setValue(O,"_gl_DrawID",yn),Et.render(tt[yn]/fn,Xt[yn])}else if(K.isInstancedMesh)Et.renderInstances(St,Wt,K.count);else if(ie.isInstancedBufferGeometry){const tt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xt=Math.min(ie.instanceCount,tt);Et.renderInstances(St,Wt,Xt)}else Et.render(St,Wt)};function Tt(P,Y,ie){P.transparent===!0&&P.side===ki&&P.forceSinglePass===!1?(P.side=Dn,P.needsUpdate=!0,ns(P,Y,ie),P.side=Er,P.needsUpdate=!0,ns(P,Y,ie),P.side=ki):ns(P,Y,ie)}this.compile=function(P,Y,ie=null){ie===null&&(ie=P),v=ht.get(ie),v.init(Y),C.push(v),ie.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),P!==ie&&P.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const J=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const we=K.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const ze=we[Ue];Tt(ze,ie,K),J.add(ze)}else Tt(we,ie,K),J.add(we)}),C.pop(),v=null,J},this.compileAsync=function(P,Y,ie=null){const J=this.compile(P,Y,ie);return new Promise(K=>{function we(){if(J.forEach(function(Ue){Ne.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){K(P);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Tn=null;function xn(P){Tn&&Tn(P)}function ts(){yi.stop()}function Xi(){yi.start()}const yi=new Tv;yi.setAnimationLoop(xn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(P){Tn=P,ue.setAnimationLoop(P),P===null?yi.stop():yi.start()},ue.addEventListener("sessionstart",ts),ue.addEventListener("sessionend",Xi),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,Y,B),v=ht.get(P,C.length),v.init(Y),C.push(v),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(ve),Se=this.localClippingEnabled,de=Te.init(this.clippingPlanes,Se),S=We.get(P,L.length),S.init(),L.push(S),ue.enabled===!0&&ue.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&Si(we,Y,-1/0,A.sortObjects)}Si(P,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ce,oe),ge=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ge&&it.addToRenderList(S,P),this.info.render.frame++,de===!0&&Te.beginShadows();const ie=v.state.shadowsArray;je.render(ie,P,Y),de===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=S.opaque,K=S.transmissive;if(v.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(K.length>0)for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Ye=we[Ue];Cr(J,K,P,Ye)}ge&&it.render(P);for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Ye=we[Ue];Ar(S,P,Ye,Ye.viewport)}}else K.length>0&&Cr(J,K,P,Y),ge&&it.render(P),Ar(S,P,Y);B!==null&&D===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(A,P,Y),Pt.resetDefaultState(),b=-1,w=null,C.pop(),C.length>0?(v=C[C.length-1],de===!0&&Te.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Si(P,Y,ie,J){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){J&&Ve.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ve);const Ue=he.update(P),ze=P.material;ze.visible&&S.push(P,Ue,ze,ie,Ve.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const Ue=he.update(P),ze=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ve.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ve.copy(Ue.boundingSphere.center)),Ve.applyMatrix4(P.matrixWorld).applyMatrix4(ve)),Array.isArray(ze)){const Ye=Ue.groups;for(let lt=0,ot=Ye.length;lt<ot;lt++){const Ze=Ye[lt],St=ze[Ze.materialIndex];St&&St.visible&&S.push(P,Ue,St,ie,Ve.z,Ze)}}else ze.visible&&S.push(P,Ue,ze,ie,Ve.z,null)}}const we=P.children;for(let Ue=0,ze=we.length;Ue<ze;Ue++)Si(we[Ue],Y,ie,J)}function Ar(P,Y,ie,J){const K=P.opaque,we=P.transmissive,Ue=P.transparent;v.setupLightsView(ie),de===!0&&Te.setGlobalState(A.clippingPlanes,ie),J&&Pe.viewport(I.copy(J)),K.length>0&&ji(K,Y,ie),we.length>0&&ji(we,Y,ie),Ue.length>0&&ji(Ue,Y,ie),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Cr(P,Y,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new Qr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?$o:Gi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=v.state.transmissionRenderTarget[J.id],Ue=J.viewport||I;we.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const ze=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(j),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),ge&&it.render(ie);const Ye=A.toneMapping;A.toneMapping=Mr;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),de===!0&&Te.setGlobalState(A.clippingPlanes,J),ji(P,ie,J),N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ze=0,St=Y.length;Ze<St;Ze++){const pt=Y[Ze],Wt=pt.object,Ft=pt.geometry,Et=pt.material,tt=pt.group;if(Et.side===ki&&Wt.layers.test(J.layers)){const Xt=Et.side;Et.side=Dn,Et.needsUpdate=!0,ea(Wt,ie,J,Ft,Et,tt),Et.side=Xt,Et.needsUpdate=!0,ot=!0}}ot===!0&&(N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we))}A.setRenderTarget(ze),A.setClearColor(j,le),lt!==void 0&&(J.viewport=lt),A.toneMapping=Ye}function ji(P,Y,ie){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,we=P.length;K<we;K++){const Ue=P[K],ze=Ue.object,Ye=Ue.geometry,lt=J===null?Ue.material:J,ot=Ue.group;ze.layers.test(ie.layers)&&ea(ze,Y,ie,Ye,lt,ot)}}function ea(P,Y,ie,J,K,we){P.onBeforeRender(A,Y,ie,J,K,we),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(A,Y,ie,J,P,we),K.transparent===!0&&K.side===ki&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,A.renderBufferDirect(ie,Y,J,K,P,we),K.side=Er,K.needsUpdate=!0,A.renderBufferDirect(ie,Y,J,K,P,we),K.side=ki):A.renderBufferDirect(ie,Y,J,K,P,we),P.onAfterRender(A,Y,ie,J,K,we)}function ns(P,Y,ie){Y.isScene!==!0&&(Y=ct);const J=Ne.get(P),K=v.state.lights,we=v.state.shadowsArray,Ue=K.state.version,ze=Ke.getParameters(P,K.state,we,Y,ie),Ye=Ke.getProgramCacheKey(ze);let lt=J.programs;J.environment=P.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(P.isMeshStandardMaterial?ee:R).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,lt===void 0&&(P.addEventListener("dispose",dt),lt=new Map,J.programs=lt);let ot=lt.get(Ye);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Ue)return li(P,ze),ot}else ze.uniforms=Ke.getUniforms(P),P.onBeforeCompile(ze,A),ot=Ke.acquireProgram(ze,Ye),lt.set(Ye,ot),J.uniforms=ze.uniforms;const Ze=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=Te.uniform),li(P,ze),J.needsLights=fu(P),J.lightsStateVersion=Ue,J.needsLights&&(Ze.ambientLightColor.value=K.state.ambient,Ze.lightProbe.value=K.state.probe,Ze.directionalLights.value=K.state.directional,Ze.directionalLightShadows.value=K.state.directionalShadow,Ze.spotLights.value=K.state.spot,Ze.spotLightShadows.value=K.state.spotShadow,Ze.rectAreaLights.value=K.state.rectArea,Ze.ltc_1.value=K.state.rectAreaLTC1,Ze.ltc_2.value=K.state.rectAreaLTC2,Ze.pointLights.value=K.state.point,Ze.pointLightShadows.value=K.state.pointShadow,Ze.hemisphereLights.value=K.state.hemi,Ze.directionalShadowMap.value=K.state.directionalShadowMap,Ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ze.spotShadowMap.value=K.state.spotShadowMap,Ze.spotLightMatrix.value=K.state.spotLightMatrix,Ze.spotLightMap.value=K.state.spotLightMap,Ze.pointShadowMap.value=K.state.pointShadowMap,Ze.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function ta(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Ql.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function li(P,Y){const ie=Ne.get(P);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function na(P,Y,ie,J,K){Y.isScene!==!0&&(Y=ct),N.resetTextureUnits();const we=Y.fog,Ue=J.isMeshStandardMaterial?Y.environment:null,ze=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zs,Ye=(J.isMeshStandardMaterial?ee:R).get(J.envMap||Ue),lt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ot=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!ie.morphAttributes.position,St=!!ie.morphAttributes.normal,pt=!!ie.morphAttributes.color;let Wt=Mr;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Wt=A.toneMapping);const Ft=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Et=Ft!==void 0?Ft.length:0,tt=Ne.get(J),Xt=v.state.lights;if(de===!0&&(Se===!0||P!==w)){const ln=P===w&&J.id===b;Te.setState(J,P,ln)}let yt=!1;J.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xt.state.version||tt.outputColorSpace!==ze||K.isBatchedMesh&&tt.batching===!1||!K.isBatchedMesh&&tt.batching===!0||K.isBatchedMesh&&tt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&tt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&tt.instancing===!1||!K.isInstancedMesh&&tt.instancing===!0||K.isSkinnedMesh&&tt.skinning===!1||!K.isSkinnedMesh&&tt.skinning===!0||K.isInstancedMesh&&tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&tt.instancingMorph===!1&&K.morphTexture!==null||tt.envMap!==Ye||J.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Te.numPlanes||tt.numIntersection!==Te.numIntersection)||tt.vertexAlphas!==lt||tt.vertexTangents!==ot||tt.morphTargets!==Ze||tt.morphNormals!==St||tt.morphColors!==pt||tt.toneMapping!==Wt||tt.morphTargetsCount!==Et)&&(yt=!0):(yt=!0,tt.__version=J.version);let fn=tt.currentProgram;yt===!0&&(fn=ns(J,Y,K));let qi=!1,yn=!1,Mi=!1;const Dt=fn.getUniforms(),dn=tt.uniforms;if(Pe.useProgram(fn.program)&&(qi=!0,yn=!0,Mi=!0),J.id!==b&&(b=J.id,yn=!0),qi||w!==P){Pe.buffers.depth.getReversed()?(pe.copy(P.projectionMatrix),ax(pe),lx(pe),Dt.setValue(O,"projectionMatrix",pe)):Dt.setValue(O,"projectionMatrix",P.projectionMatrix),Dt.setValue(O,"viewMatrix",P.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(O,be.setFromMatrixPosition(P.matrixWorld)),Ge.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,yn=!0,Mi=!0)}if(K.isSkinnedMesh){Dt.setOptional(O,K,"bindMatrix"),Dt.setOptional(O,K,"bindMatrixInverse");const ln=K.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(O,"boneTexture",ln.boneTexture,N))}K.isBatchedMesh&&(Dt.setOptional(O,K,"batchingTexture"),Dt.setValue(O,"batchingTexture",K._matricesTexture,N),Dt.setOptional(O,K,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",K._indirectTexture,N),Dt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",K._colorsTexture,N));const tn=ie.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&at.update(K,ie,fn),(yn||tt.receiveShadow!==K.receiveShadow)&&(tt.receiveShadow=K.receiveShadow,Dt.setValue(O,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(dn.envMap.value=Ye,dn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(dn.envMapIntensity.value=Y.environmentIntensity),yn&&(Dt.setValue(O,"toneMappingExposure",A.toneMappingExposure),tt.needsLights&&ia(dn,Mi),we&&J.fog===!0&&De.refreshFogUniforms(dn,we),De.refreshMaterialUniforms(dn,J,G,ae,v.state.transmissionRenderTarget[P.id]),Ql.upload(O,ta(tt),dn,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ql.upload(O,ta(tt),dn,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(O,"center",K.center),Dt.setValue(O,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(O,"normalMatrix",K.normalMatrix),Dt.setValue(O,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let nn=0,wt=ln.length;nn<wt;nn++){const ui=ln[nn];q.update(ui,fn),q.bind(ui,fn)}}return fn}function ia(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function fu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,Y,ie){Ne.get(P.texture).__webglTexture=Y,Ne.get(P.depthTexture).__webglTexture=ie;const J=Ne.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const ie=Ne.get(P);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};const ra=O.createFramebuffer();this.setRenderTarget=function(P,Y=0,ie=0){B=P,U=Y,D=ie;let J=!0,K=null,we=!1,Ue=!1;if(P){const Ye=Ne.get(P);if(Ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Ye.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Ye.__hasExternalTextures)N.rebindTextures(P,Ne.get(P.texture).__webglTexture,Ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ze=P.depthTexture;if(Ye.__boundDepthTexture!==Ze){if(Ze!==null&&Ne.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ue=!0);const ot=Ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?K=ot[Y][ie]:K=ot[Y],we=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?K=Ne.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?K=ot[ie]:K=ot,I.copy(P.viewport),H.copy(P.scissor),W=P.scissorTest}else I.copy(k).multiplyScalar(G).floor(),H.copy(ne).multiplyScalar(G).floor(),W=Le;if(ie!==0&&(K=ra),Pe.bindFramebuffer(O.FRAMEBUFFER,K)&&J&&Pe.drawBuffers(P,K),Pe.viewport(I),Pe.scissor(H),Pe.setScissorTest(W),we){const Ye=Ne.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ye.__webglTexture,ie)}else if(Ue){const Ye=Ne.get(P.texture),lt=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,ie,lt)}else if(P!==null&&ie!==0){const Ye=Ne.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,ie)}b=-1},this.readRenderTargetPixels=function(P,Y,ie,J,K,we,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){Pe.bindFramebuffer(O.FRAMEBUFFER,ze);try{const Ye=P.texture,lt=Ye.format,ot=Ye.type;if(!Ge.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-J&&ie>=0&&ie<=P.height-K&&O.readPixels(Y,ie,J,K,ft.convert(lt),ft.convert(ot),we)}finally{const Ye=B!==null?Ne.get(B).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,Y,ie,J,K,we,Ue){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){const Ye=P.texture,lt=Ye.format,ot=Ye.type;if(!Ge.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-J&&ie>=0&&ie<=P.height-K){Pe.bindFramebuffer(O.FRAMEBUFFER,ze);const Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(Y,ie,J,K,ft.convert(lt),ft.convert(ot),0);const St=B!==null?Ne.get(B).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,St);const pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ox(O,pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.deleteBuffer(Ze),O.deleteSync(pt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,ie=0){P.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const J=Math.pow(2,-ie),K=Math.floor(P.image.width*J),we=Math.floor(P.image.height*J),Ue=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;N.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,ie,0,0,Ue,ze,K,we),Pe.unbindTexture()};const sa=O.createFramebuffer(),oa=O.createFramebuffer();this.copyTextureToTexture=function(P,Y,ie=null,J=null,K=0,we=null){P.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],Y=arguments[2],we=arguments[3]||0,ie=null),we===null&&(K!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=K,K=0):we=0);let Ue,ze,Ye,lt,ot,Ze,St,pt,Wt;const Ft=P.isCompressedTexture?P.mipmaps[we]:P.image;if(ie!==null)Ue=ie.max.x-ie.min.x,ze=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,lt=ie.min.x,ot=ie.min.y,Ze=ie.isBox3?ie.min.z:0;else{const tn=Math.pow(2,-K);Ue=Math.floor(Ft.width*tn),ze=Math.floor(Ft.height*tn),P.isDataArrayTexture?Ye=Ft.depth:P.isData3DTexture?Ye=Math.floor(Ft.depth*tn):Ye=1,lt=0,ot=0,Ze=0}J!==null?(St=J.x,pt=J.y,Wt=J.z):(St=0,pt=0,Wt=0);const Et=ft.convert(Y.format),tt=ft.convert(Y.type);let Xt;Y.isData3DTexture?(N.setTexture3D(Y,0),Xt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),Xt=O.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),Xt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=O.getParameter(O.UNPACK_ROW_LENGTH),fn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qi=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),Mi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);const Dt=P.isDataArrayTexture||P.isData3DTexture,dn=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const tn=Ne.get(P),ln=Ne.get(Y),nn=Ne.get(tn.__renderTarget),wt=Ne.get(ln.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ui=0;ui<Ye;ui++)Dt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(P).__webglTexture,K,Ze+ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(Y).__webglTexture,we,Wt+ui)),O.blitFramebuffer(lt,ot,Ue,ze,St,pt,Ue,ze,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||Ne.has(P)){const tn=Ne.get(P),ln=Ne.get(Y);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,sa),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,oa);for(let nn=0;nn<Ye;nn++)Dt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,K,Ze+nn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,K),dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,we,Wt+nn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,we),K!==0?O.blitFramebuffer(lt,ot,Ue,ze,St,pt,Ue,ze,O.COLOR_BUFFER_BIT,O.NEAREST):dn?O.copyTexSubImage3D(Xt,we,St,pt,Wt+nn,lt,ot,Ue,ze):O.copyTexSubImage2D(Xt,we,St,pt,lt,ot,Ue,ze);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Xt,we,St,pt,Wt,Ue,ze,Ye,Et,tt,Ft.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Xt,we,St,pt,Wt,Ue,ze,Ye,Et,Ft.data):O.texSubImage3D(Xt,we,St,pt,Wt,Ue,ze,Ye,Et,tt,Ft):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,St,pt,Ue,ze,Et,tt,Ft.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,St,pt,Ft.width,Ft.height,Et,Ft.data):O.texSubImage2D(O.TEXTURE_2D,we,St,pt,Ue,ze,Et,tt,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,yt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qi),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mi),we===0&&Y.generateMipmaps&&O.generateMipmap(Xt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,ie=null,J=null,K=0){return P.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,J=arguments[1]||null,P=arguments[2],Y=arguments[3],K=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,ie,J,K)},this.initRenderTarget=function(P){Ne.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Pe.unbindTexture()},this.resetState=function(){U=0,D=0,B=null,Pe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class cT extends Bd{constructor(e){super(e)}load(e,t,r,o){const l=this,c=new xy(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){const d=l.parse(JSON.parse(f));t&&t(d)},r,o)}parse(e){return new fT(e)}}class fT{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const r=[],o=dT(e,t,this.data);for(let l=0,c=o.length;l<c;l++)r.push(...o[l].toShapes());return r}}function dT(s,e,t){const r=Array.from(s),o=e/t.resolution,l=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,c=[];let f=0,d=0;for(let h=0;h<r.length;h++){const m=r[h];if(m===`
`)f=0,d-=l;else{const g=hT(m,o,f,d,t);f+=g.offsetX,c.push(g.path)}}return c}function hT(s,e,t,r,o){const l=o.glyphs[s]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const c=new Ay;let f,d,h,m,g,_,y,M;if(l.o){const E=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let S=0,v=E.length;S<v;)switch(E[S++]){case"m":f=E[S++]*e+t,d=E[S++]*e+r,c.moveTo(f,d);break;case"l":f=E[S++]*e+t,d=E[S++]*e+r,c.lineTo(f,d);break;case"q":h=E[S++]*e+t,m=E[S++]*e+r,g=E[S++]*e+t,_=E[S++]*e+r,c.quadraticCurveTo(g,_,h,m);break;case"b":h=E[S++]*e+t,m=E[S++]*e+r,g=E[S++]*e+t,_=E[S++]*e+r,y=E[S++]*e+t,M=E[S++]*e+r,c.bezierCurveTo(g,_,y,M,h,m);break}}return{offsetX:l.ha*e,path:c}}class pT extends kd{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}function mT({pcImageUrl:s,mobileImageUrl:e,children:t}){const[r,o]=yr.useState(window.innerWidth<=768);return yr.useEffect(()=>{const l=()=>{o(window.innerWidth<=768)};return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),Ae.jsx("div",{className:"bg-cover bg-center bg-fixed",style:{backgroundImage:`url(${r?e:s})`},children:t})}const gT=({header:s,children:e})=>Ae.jsx(mT,{pcImageUrl:"/background1.png",mobileImageUrl:"/background2.png",children:Ae.jsxs("div",{className:"flex flex-col min-h-screen",children:[Ae.jsx("nav",{className:"sticky top-0 z-50",children:s}),Ae.jsx("main",{className:"flex-grow",children:e})]})});var Bt={},Il={},Ul={},Ol={},Pf,Tg;function vT(){if(Tg)return Pf;Tg=1;var s="Expected a function",e=NaN,t="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,d=typeof al=="object"&&al&&al.Object===Object&&al,h=typeof self=="object"&&self&&self.Object===Object&&self,m=d||h||Function("return this")(),g=Object.prototype,_=g.toString,y=Math.max,M=Math.min,E=function(){return m.Date.now()};function S(U,D,B){var b,w,I,H,W,j,le=0,re=!1,ae=!1,G=!0;if(typeof U!="function")throw new TypeError(s);D=z(D)||0,L(B)&&(re=!!B.leading,ae="maxWait"in B,I=ae?y(z(B.maxWait)||0,D):I,G="trailing"in B?!!B.trailing:G);function ce(ve){var be=b,Ve=w;return b=w=void 0,le=ve,H=U.apply(Ve,be),H}function oe(ve){return le=ve,W=setTimeout(Le,D),re?ce(ve):H}function k(ve){var be=ve-j,Ve=ve-le,ct=D-be;return ae?M(ct,I-Ve):ct}function ne(ve){var be=ve-j,Ve=ve-le;return j===void 0||be>=D||be<0||ae&&Ve>=I}function Le(){var ve=E();if(ne(ve))return Q(ve);W=setTimeout(Le,k(ve))}function Q(ve){return W=void 0,G&&b?ce(ve):(b=w=void 0,H)}function de(){W!==void 0&&clearTimeout(W),le=0,b=j=w=W=void 0}function Se(){return W===void 0?H:Q(E())}function pe(){var ve=E(),be=ne(ve);if(b=arguments,w=this,j=ve,be){if(W===void 0)return oe(j);if(ae)return W=setTimeout(Le,D),ce(j)}return W===void 0&&(W=setTimeout(Le,D)),H}return pe.cancel=de,pe.flush=Se,pe}function v(U,D,B){var b=!0,w=!0;if(typeof U!="function")throw new TypeError(s);return L(B)&&(b="leading"in B?!!B.leading:b,w="trailing"in B?!!B.trailing:w),S(U,D,{leading:b,maxWait:D,trailing:w})}function L(U){var D=typeof U;return!!U&&(D=="object"||D=="function")}function C(U){return!!U&&typeof U=="object"}function A(U){return typeof U=="symbol"||C(U)&&_.call(U)==t}function z(U){if(typeof U=="number")return U;if(A(U))return e;if(L(U)){var D=typeof U.valueOf=="function"?U.valueOf():U;U=L(D)?D+"":D}if(typeof U!="string")return U===0?U:+U;U=U.replace(r,"");var B=l.test(U);return B||c.test(U)?f(U.slice(2),B?2:8):o.test(U)?e:+U}return Pf=v,Pf}var Ho={},wg;function Hd(){if(wg)return Ho;wg=1,Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.addPassiveEventListener=function(t,r,o){var l=o.name;l||(l=r,console.warn("Listener must be a named function.")),s.has(r)||s.set(r,new Set);var c=s.get(r);if(!c.has(l)){var f=function(){var d=!1;try{var h=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,h)}catch{}return d}();t.addEventListener(r,o,f?{passive:!0}:!1),c.add(l)}},Ho.removePassiveEventListener=function(t,r,o){t.removeEventListener(r,o),s.get(r).delete(o.name||r)};var s=new Map;return Ho}var Ag;function Vd(){if(Ag)return Ol;Ag=1,Object.defineProperty(Ol,"__esModule",{value:!0});var s=vT(),e=r(s),t=Hd();function r(c){return c&&c.__esModule?c:{default:c}}var o=function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(f,d)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,d){if(f){var h=o(function(m){l.scrollHandler(f)},d);l.scrollSpyContainers.push(f),(0,t.addPassiveEventListener)(f,"scroll",h)}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var d=window.pageYOffset!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.pageXOffset:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var d=window.pageXOffset!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.pageYOffset:h?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var d=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];d.forEach(function(h){return h(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,d){var h=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(d)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(f),f(l.currentPositionX(d),l.currentPositionY(d))},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,d){l.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(d)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(d),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return Ol.default=l,Ol}var Fl={},kl={},Cg;function au(){if(Cg)return kl;Cg=1,Object.defineProperty(kl,"__esModule",{value:!0});var s=function(f,d){var h=f.indexOf("#")===0?f.substring(1):f,m=h?"#"+h:"",g=window&&window.location,_=m?g.pathname+g.search+m:g.pathname+g.search;d?history.pushState(history.state,"",_):history.replaceState(history.state,"",_)},e=function(){return window.location.hash.replace(/^#/,"")},t=function(f){return function(d){return f.contains?f!=d&&f.contains(d):!!(f.compareDocumentPosition(d)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},o=function(f,d){for(var h=f.offsetTop,m=f.offsetParent;m&&!d(m);)h+=m.offsetTop,m=m.offsetParent;return{offsetTop:h,offsetParent:m}},l=function(f,d,h){if(h)return f===document?d.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?d.offsetLeft:d.offsetLeft-f.offsetLeft;if(f===document)return d.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(d.offsetParent!==f){var m=function(S){return S===f||S===document},g=o(d,m),_=g.offsetTop,y=g.offsetParent;if(y!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return _}return d.offsetTop}if(d.offsetParent===f.offsetParent)return d.offsetTop-f.offsetTop;var M=function(S){return S===document};return o(d,M).offsetTop-o(f,M).offsetTop};return kl.default={updateHash:s,getHash:e,filterElementInContainer:t,scrollOffset:l},kl}var Bl={},zl={},Rg;function _T(){return Rg||(Rg=1,Object.defineProperty(zl,"__esModule",{value:!0}),zl.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),zl}var Hl={},Pg;function xT(){if(Pg)return Hl;Pg=1,Object.defineProperty(Hl,"__esModule",{value:!0});var s=Hd(),e=["mousedown","mousewheel","touchmove","keydown"];return Hl.default={subscribe:function(r){return typeof document<"u"&&e.forEach(function(o){return(0,s.addPassiveEventListener)(document,o,r)})}},Hl}var Vl={},bg;function Gd(){if(bg)return Vl;bg=1,Object.defineProperty(Vl,"__esModule",{value:!0});var s={registered:{},scrollEvent:{register:function(t,r){s.registered[t]=r},remove:function(t){s.registered[t]=null}}};return Vl.default=s,Vl}var Lg;function Pv(){if(Lg)return Bl;Lg=1,Object.defineProperty(Bl,"__esModule",{value:!0});var s=Object.assign||function(w){for(var I=1;I<arguments.length;I++){var H=arguments[I];for(var W in H)Object.prototype.hasOwnProperty.call(H,W)&&(w[W]=H[W])}return w},e=au();d(e);var t=_T(),r=d(t),o=xT(),l=d(o),c=Gd(),f=d(c);function d(w){return w&&w.__esModule?w:{default:w}}var h=function(I){return r.default[I.smooth]||r.default.defaultEasing},m=function(I){return typeof I=="function"?I:function(){return I}},g=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},_=function(){return g()||function(w,I,H){window.setTimeout(w,H||1e3/60,new Date().getTime())}}(),y=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},M=function(I){var H=I.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollLeft;var W=window.pageXOffset!==void 0,j=(document.compatMode||"")==="CSS1Compat";return W?window.pageXOffset:j?document.documentElement.scrollLeft:document.body.scrollLeft},E=function(I){var H=I.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollTop;var W=window.pageXOffset!==void 0,j=(document.compatMode||"")==="CSS1Compat";return W?window.pageYOffset:j?document.documentElement.scrollTop:document.body.scrollTop},S=function(I){var H=I.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollWidth-H.offsetWidth;var W=document.body,j=document.documentElement;return Math.max(W.scrollWidth,W.offsetWidth,j.clientWidth,j.scrollWidth,j.offsetWidth)},v=function(I){var H=I.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollHeight-H.offsetHeight;var W=document.body,j=document.documentElement;return Math.max(W.scrollHeight,W.offsetHeight,j.clientHeight,j.scrollHeight,j.offsetHeight)},L=function w(I,H,W){var j=H.data;if(!H.ignoreCancelEvents&&j.cancel){f.default.registered.end&&f.default.registered.end(j.to,j.target,j.currentPositionY);return}if(j.delta=Math.round(j.targetPosition-j.startPosition),j.start===null&&(j.start=W),j.progress=W-j.start,j.percent=j.progress>=j.duration?1:I(j.progress/j.duration),j.currentPosition=j.startPosition+Math.ceil(j.delta*j.percent),j.containerElement&&j.containerElement!==document&&j.containerElement!==document.body?H.horizontal?j.containerElement.scrollLeft=j.currentPosition:j.containerElement.scrollTop=j.currentPosition:H.horizontal?window.scrollTo(j.currentPosition,0):window.scrollTo(0,j.currentPosition),j.percent<1){var le=w.bind(null,I,H);_.call(window,le);return}f.default.registered.end&&f.default.registered.end(j.to,j.target,j.currentPosition)},C=function(I){I.data.containerElement=I?I.containerId?document.getElementById(I.containerId):I.container&&I.container.nodeType?I.container:document:null},A=function(I,H,W,j){H.data=H.data||y(),window.clearTimeout(H.data.delayTimeout);var le=function(){H.data.cancel=!0};if(l.default.subscribe(le),C(H),H.data.start=null,H.data.cancel=!1,H.data.startPosition=H.horizontal?M(H):E(H),H.data.targetPosition=H.absolute?I:I+H.data.startPosition,H.data.startPosition===H.data.targetPosition){f.default.registered.end&&f.default.registered.end(H.data.to,H.data.target,H.data.currentPosition);return}H.data.delta=Math.round(H.data.targetPosition-H.data.startPosition),H.data.duration=m(H.duration)(H.data.delta),H.data.duration=isNaN(parseFloat(H.data.duration))?1e3:parseFloat(H.data.duration),H.data.to=W,H.data.target=j;var re=h(H),ae=L.bind(null,re,H);if(H&&H.delay>0){H.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),_.call(window,ae)},H.delay);return}f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),_.call(window,ae)},z=function(I){return I=s({},I),I.data=I.data||y(),I.absolute=!0,I},U=function(I){A(0,z(I))},D=function(I,H){A(I,z(H))},B=function(I){I=z(I),C(I),A(I.horizontal?S(I):v(I),I)},b=function(I,H){H=z(H),C(H);var W=H.horizontal?M(H):E(H);A(I+W,H)};return Bl.default={animateTopScroll:A,getAnimationType:h,scrollToTop:U,scrollToBottom:B,scrollTo:D,scrollMore:b},Bl}var Dg;function lu(){if(Dg)return Fl;Dg=1,Object.defineProperty(Fl,"__esModule",{value:!0});var s=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var _=arguments[g];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(m[y]=_[y])}return m},e=au(),t=f(e),r=Pv(),o=f(r),l=Gd(),c=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var d={},h=void 0;return Fl.default={unmount:function(){d={}},register:function(g,_){d[g]=_},unregister:function(g){delete d[g]},get:function(g){return d[g]||document.getElementById(g)||document.getElementsByName(g)[0]||document.getElementsByClassName(g)[0]},setActiveLink:function(g){return h=g},getActiveLink:function(){return h},scrollTo:function(g,_){var y=this.get(g);if(!y){console.warn("target Element not found");return}_=s({},_,{absolute:!1});var M=_.containerId,E=_.container,S=void 0;M?S=document.getElementById(M):E&&E.nodeType?S=E:S=document,_.absolute=!0;var v=_.horizontal,L=t.default.scrollOffset(S,y,v)+(_.offset||0);if(!_.smooth){c.default.registered.begin&&c.default.registered.begin(g,y),S===document?_.horizontal?window.scrollTo(L,0):window.scrollTo(0,L):S.scrollTop=L,c.default.registered.end&&c.default.registered.end(g,y);return}o.default.animateTopScroll(L,_,g,y)}},Fl}var bf={exports:{}},Lf,Ng;function yT(){if(Ng)return Lf;Ng=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lf=s,Lf}var Df,Ig;function ST(){if(Ig)return Df;Ig=1;var s=yT();function e(){}function t(){}return t.resetWarningCache=e,Df=function(){function r(c,f,d,h,m,g){if(g!==s){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Df}var Ug;function uu(){return Ug||(Ug=1,bf.exports=ST()()),bf.exports}var Gl={},Og;function bv(){if(Og)return Gl;Og=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Hd();var s=au(),e=t(s);function t(o){return o&&o.__esModule?o:{default:o}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,c){this.containers[l]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,c=this.getHash();c?window.setTimeout(function(){l.scrollTo(c,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,c){var f=this.scroller,d=f.get(l);if(d&&(c||l!==f.getActiveLink())){var h=this.containers[l]||document;f.scrollTo(l,{container:h})}},getHash:function(){return e.default.getHash()},changeHash:function(l,c){this.isInitialized()&&e.default.getHash()!==l&&e.default.updateHash(l,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Gl.default=r,Gl}var Fg;function Wd(){if(Fg)return Ul;Fg=1,Object.defineProperty(Ul,"__esModule",{value:!0});var s=Object.assign||function(v){for(var L=1;L<arguments.length;L++){var C=arguments[L];for(var A in C)Object.prototype.hasOwnProperty.call(C,A)&&(v[A]=C[A])}return v},e=function(){function v(L,C){for(var A=0;A<C.length;A++){var z=C[A];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(L,z.key,z)}}return function(L,C,A){return C&&v(L.prototype,C),A&&v(L,A),L}}(),t=Wi(),r=_(t),o=Vd(),l=_(o),c=lu(),f=_(c),d=uu(),h=_(d),m=bv(),g=_(m);function _(v){return v&&v.__esModule?v:{default:v}}function y(v,L){if(!(v instanceof L))throw new TypeError("Cannot call a class as a function")}function M(v,L){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L&&(typeof L=="object"||typeof L=="function")?L:v}function E(v,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof L);v.prototype=Object.create(L&&L.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),L&&(Object.setPrototypeOf?Object.setPrototypeOf(v,L):v.__proto__=L)}var S={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return Ul.default=function(v,L){var C=L||f.default,A=function(U){E(D,U);function D(B){y(this,D);var b=M(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,B));return z.call(b),b.state={active:!1},b}return e(D,[{key:"getScrollSpyContainer",value:function(){var b=this.props.containerId,w=this.props.container;return b&&!w?document.getElementById(b):w&&w.nodeType?w:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var b=this.getScrollSpyContainer();l.default.isMounted(b)||l.default.mount(b,this.props.spyThrottle),this.props.hashSpy&&(g.default.isMounted()||g.default.mount(C),g.default.mapContainer(this.props.to,b)),l.default.addSpyHandler(this.spyHandler,b),this.setState({container:b})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var b="";this.state&&this.state.active?b=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():b=this.props.className;var w={};this.state&&this.state.active?w=s({},this.props.style,this.props.activeStyle):w=s({},this.props.style);var I=s({},this.props);for(var H in S)I.hasOwnProperty(H)&&delete I[H];return I.className=b,I.style=w,I.onClick=this.handleClick,r.default.createElement(v,I)}}]),D}(r.default.PureComponent),z=function(){var D=this;this.scrollTo=function(B,b){C.scrollTo(B,s({},D.state,b))},this.handleClick=function(B){D.props.onClick&&D.props.onClick(B),B.stopPropagation&&B.stopPropagation(),B.preventDefault&&B.preventDefault(),D.scrollTo(D.props.to,D.props)},this.spyHandler=function(B,b){var w=D.getScrollSpyContainer();if(!(g.default.isMounted()&&!g.default.isInitialized())){var I=D.props.horizontal,H=D.props.to,W=null,j=void 0,le=void 0;if(I){var re=0,ae=0,G=0;if(w.getBoundingClientRect){var ce=w.getBoundingClientRect();G=ce.left}if(!W||D.props.isDynamic){if(W=C.get(H),!W)return;var oe=W.getBoundingClientRect();re=oe.left-G+B,ae=re+oe.width}var k=B-D.props.offset;j=k>=Math.floor(re)&&k<Math.floor(ae),le=k<Math.floor(re)||k>=Math.floor(ae)}else{var ne=0,Le=0,Q=0;if(w.getBoundingClientRect){var de=w.getBoundingClientRect();Q=de.top}if(!W||D.props.isDynamic){if(W=C.get(H),!W)return;var Se=W.getBoundingClientRect();ne=Se.top-Q+b,Le=ne+Se.height}var pe=b-D.props.offset;j=pe>=Math.floor(ne)&&pe<Math.floor(Le),le=pe<Math.floor(ne)||pe>=Math.floor(Le)}var ve=C.getActiveLink();if(le){if(H===ve&&C.setActiveLink(void 0),D.props.hashSpy&&g.default.getHash()===H){var be=D.props.saveHashHistory,Ve=be===void 0?!1:be;g.default.changeHash("",Ve)}D.props.spy&&D.state.active&&(D.setState({active:!1}),D.props.onSetInactive&&D.props.onSetInactive(H,W))}if(j&&(ve!==H||D.state.active===!1)){C.setActiveLink(H);var ct=D.props.saveHashHistory,ge=ct===void 0?!1:ct;D.props.hashSpy&&g.default.changeHash(H,ge),D.props.spy&&(D.setState({active:!0}),D.props.onSetActive&&D.props.onSetActive(H,W))}}}};return A.propTypes=S,A.defaultProps={offset:0},A},Ul}var kg;function MT(){if(kg)return Il;kg=1,Object.defineProperty(Il,"__esModule",{value:!0});var s=Wi(),e=o(s),t=Wd(),r=o(t);function o(h){return h&&h.__esModule?h:{default:h}}function l(h,m){if(!(h instanceof m))throw new TypeError("Cannot call a class as a function")}function c(h,m){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:h}function f(h,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);h.prototype=Object.create(m&&m.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(h,m):h.__proto__=m)}var d=function(h){f(m,h);function m(){var g,_,y,M;l(this,m);for(var E=arguments.length,S=Array(E),v=0;v<E;v++)S[v]=arguments[v];return M=(_=(y=c(this,(g=m.__proto__||Object.getPrototypeOf(m)).call.apply(g,[this].concat(S))),y),y.render=function(){return e.default.createElement("a",y.props,y.props.children)},_),c(y,M)}return m}(e.default.Component);return Il.default=(0,r.default)(d),Il}var Wl={},Bg;function ET(){if(Bg)return Wl;Bg=1,Object.defineProperty(Wl,"__esModule",{value:!0});var s=function(){function m(g,_){for(var y=0;y<_.length;y++){var M=_[y];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(g,M.key,M)}}return function(g,_,y){return _&&m(g.prototype,_),y&&m(g,y),g}}(),e=Wi(),t=l(e),r=Wd(),o=l(r);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function f(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:m}function d(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var h=function(m){d(g,m);function g(){return c(this,g),f(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return s(g,[{key:"render",value:function(){return t.default.createElement("button",this.props,this.props.children)}}]),g}(t.default.Component);return Wl.default=(0,o.default)(h),Wl}var Xl={},jl={},zg;function Lv(){if(zg)return jl;zg=1,Object.defineProperty(jl,"__esModule",{value:!0});var s=Object.assign||function(y){for(var M=1;M<arguments.length;M++){var E=arguments[M];for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&(y[S]=E[S])}return y},e=function(){function y(M,E){for(var S=0;S<E.length;S++){var v=E[S];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(M,v.key,v)}}return function(M,E,S){return E&&y(M.prototype,E),S&&y(M,S),M}}(),t=Wi(),r=h(t),o=wd();h(o);var l=lu(),c=h(l),f=uu(),d=h(f);function h(y){return y&&y.__esModule?y:{default:y}}function m(y,M){if(!(y instanceof M))throw new TypeError("Cannot call a class as a function")}function g(y,M){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:y}function _(y,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);y.prototype=Object.create(M&&M.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(y,M):y.__proto__=M)}return jl.default=function(y){var M=function(E){_(S,E);function S(v){m(this,S);var L=g(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,v));return L.childBindings={domNode:null},L}return e(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(L){this.props.name!==L.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(L){c.default.register(L,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(y,s({},this.props,{parentBindings:this.childBindings}))}}]),S}(r.default.Component);return M.propTypes={name:d.default.string,id:d.default.string},M},jl}var Hg;function TT(){if(Hg)return Xl;Hg=1,Object.defineProperty(Xl,"__esModule",{value:!0});var s=Object.assign||function(y){for(var M=1;M<arguments.length;M++){var E=arguments[M];for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&(y[S]=E[S])}return y},e=function(){function y(M,E){for(var S=0;S<E.length;S++){var v=E[S];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(M,v.key,v)}}return function(M,E,S){return E&&y(M.prototype,E),S&&y(M,S),M}}(),t=Wi(),r=d(t),o=Lv(),l=d(o),c=uu(),f=d(c);function d(y){return y&&y.__esModule?y:{default:y}}function h(y,M){if(!(y instanceof M))throw new TypeError("Cannot call a class as a function")}function m(y,M){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:y}function g(y,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);y.prototype=Object.create(M&&M.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(y,M):y.__proto__=M)}var _=function(y){g(M,y);function M(){return h(this,M),m(this,(M.__proto__||Object.getPrototypeOf(M)).apply(this,arguments))}return e(M,[{key:"render",value:function(){var S=this,v=s({},this.props);return delete v.name,v.parentBindings&&delete v.parentBindings,r.default.createElement("div",s({},v,{ref:function(C){S.props.parentBindings.domNode=C}}),this.props.children)}}]),M}(r.default.Component);return _.propTypes={name:f.default.string,id:f.default.string},Xl.default=(0,l.default)(_),Xl}var Nf,Vg;function wT(){if(Vg)return Nf;Vg=1;var s=Object.assign||function(_){for(var y=1;y<arguments.length;y++){var M=arguments[y];for(var E in M)Object.prototype.hasOwnProperty.call(M,E)&&(_[E]=M[E])}return _},e=function(){function _(y,M){for(var E=0;E<M.length;E++){var S=M[E];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,M,E){return M&&_(y.prototype,M),E&&_(y,E),y}}();function t(_,y){if(!(_ instanceof y))throw new TypeError("Cannot call a class as a function")}function r(_,y){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:_}function o(_,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);_.prototype=Object.create(y&&y.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(_,y):_.__proto__=y)}var l=Wi();wd(),au();var c=Vd(),f=lu(),d=uu(),h=bv(),m={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},g={Scroll:function(y,M){console.warn("Helpers.Scroll is deprecated since v1.7.0");var E=M||f,S=function(L){o(C,L);function C(A){t(this,C);var z=r(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,A));return v.call(z),z.state={active:!1},z}return e(C,[{key:"getScrollSpyContainer",value:function(){var z=this.props.containerId,U=this.props.container;return z?document.getElementById(z):U&&U.nodeType?U:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var z=this.getScrollSpyContainer();c.isMounted(z)||c.mount(z,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(E),h.mapContainer(this.props.to,z)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,z),this.setState({container:z})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var z="";this.state&&this.state.active?z=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():z=this.props.className;var U=s({},this.props);for(var D in m)U.hasOwnProperty(D)&&delete U[D];return U.className=z,U.onClick=this.handleClick,l.createElement(y,U)}}]),C}(l.Component),v=function(){var C=this;this.scrollTo=function(A,z){E.scrollTo(A,s({},C.state,z))},this.handleClick=function(A){C.props.onClick&&C.props.onClick(A),A.stopPropagation&&A.stopPropagation(),A.preventDefault&&A.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){E.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(A){var z=C.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var U=C.props.to,D=null,B=0,b=0,w=0;if(z.getBoundingClientRect){var I=z.getBoundingClientRect();w=I.top}if(!D||C.props.isDynamic){if(D=E.get(U),!D)return;var H=D.getBoundingClientRect();B=H.top-w+A,b=B+H.height}var W=A-C.props.offset,j=W>=Math.floor(B)&&W<Math.floor(b),le=W<Math.floor(B)||W>=Math.floor(b),re=E.getActiveLink();if(le)return U===re&&E.setActiveLink(void 0),C.props.hashSpy&&h.getHash()===U&&h.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),c.updateStates();if(j&&re!==U)return E.setActiveLink(U),C.props.hashSpy&&h.changeHash(U),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive(U)),c.updateStates()}}};return S.propTypes=m,S.defaultProps={offset:0},S},Element:function(y){console.warn("Helpers.Element is deprecated since v1.7.0");var M=function(E){o(S,E);function S(v){t(this,S);var L=r(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,v));return L.childBindings={domNode:null},L}return e(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(L){this.props.name!==L.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(L){f.register(L,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(y,s({},this.props,{parentBindings:this.childBindings}))}}]),S}(l.Component);return M.propTypes={name:d.string,id:d.string},M}};return Nf=g,Nf}var Gg;function AT(){if(Gg)return Bt;Gg=1,Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.Helpers=Bt.ScrollElement=Bt.ScrollLink=Bt.animateScroll=Bt.scrollSpy=Bt.Events=Bt.scroller=Bt.Element=Bt.Button=Bt.Link=void 0;var s=MT(),e=A(s),t=ET(),r=A(t),o=TT(),l=A(o),c=lu(),f=A(c),d=Gd(),h=A(d),m=Vd(),g=A(m),_=Pv(),y=A(_),M=Wd(),E=A(M),S=Lv(),v=A(S),L=wT(),C=A(L);function A(z){return z&&z.__esModule?z:{default:z}}return Bt.Link=e.default,Bt.Button=r.default,Bt.Element=l.default,Bt.scroller=f.default,Bt.Events=h.default,Bt.scrollSpy=g.default,Bt.animateScroll=y.default,Bt.ScrollLink=E.default,Bt.ScrollElement=v.default,Bt.Helpers=C.default,Bt.default={Link:e.default,Button:r.default,Element:l.default,scroller:f.default,Events:h.default,scrollSpy:g.default,animateScroll:y.default,ScrollLink:E.default,ScrollElement:v.default,Helpers:C.default},Bt}var Wg=AT();function CT(){const[s,e]=yr.useState(!1),t=["About","Works","Skills","Certifications"];return Ae.jsxs("header",{className:"fixed top-0 left-0 w-full text-white shadow-md z-10 h-16 md:h-20 backdrop-blur-sm bg-black/60 rounded-lg",children:[Ae.jsxs("nav",{className:"max-w-screen-lg mx-auto flex justify-between items-center px-4 md:px-20 py-4 h-full",children:[Ae.jsx("h1",{className:"text-xl md:text-2xl font-bold",children:"My Portfolio"}),Ae.jsx("button",{className:"md:hidden",onClick:()=>e(!s),children:Ae.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Ae.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),Ae.jsx("ul",{className:"hidden md:flex md:space-x-8",children:t.map((r,o)=>Ae.jsx("li",{children:Ae.jsx(Wg.Link,{to:r.toLowerCase(),smooth:!0,duration:500,className:"text-lg md:text-xl hover:text-gray-300 transition cursor-pointer",children:r})},o))})]}),s&&Ae.jsx("ul",{className:"md:hidden bg-black/90 py-4",children:t.map((r,o)=>Ae.jsx("li",{className:"px-4 py-2",children:Ae.jsx(Wg.Link,{to:r.toLowerCase(),smooth:!0,duration:500,className:"text-lg hover:text-gray-300 transition cursor-pointer",onClick:()=>e(!1),children:r})},o))})]})}function cu({id:s,title:e,className:t,width:r,height:o,children:l}){return Ae.jsx("section",{id:s,className:`flex flex-col justify-center items-center ${t||""}`,style:{width:r||"100%",height:o||"auto",minHeight:"100vh"},children:Ae.jsxs("div",{className:"bg-white/50 p-8 rounded-lg",children:[Ae.jsx("h2",{className:"text-4xl font-bold text-center mb-8",children:e}),Ae.jsx("div",{className:"w-full max-w-7xl",children:l})]})})}function RT(){return Ae.jsx(cu,{id:"about",title:"About Me",className:"bg-transparent flex justify-center py-8",children:Ae.jsxs("div",{className:"container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[Ae.jsxs("div",{className:"flex flex-col items-center text-center",children:[Ae.jsx("a",{href:"https://github.com/Omusubi0123",target:"_blank",rel:"noopener noreferrer",children:Ae.jsx("img",{src:"/icon.png",alt:"Icon",className:"w-60 h-60 rounded-full mb-8"})}),Ae.jsxs("p",{className:"text-lg font-medium",children:["いざわ",Ae.jsx("br",{}),"東京大学工学部 電子情報工学科3年"]})]}),Ae.jsxs("div",{className:"overflow-y-auto h-[30rem] p-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl rounded-lg",children:[Ae.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:"これまでの経歴"}),Ae.jsxs("ul",{className:"list-disc list-inside text-base leading-loose text-left",children:[Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2020年: 大学卒業 (コンピュータサイエンス専攻)"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2021年: Webエンジニアとしてキャリアをスタート"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2022年: フリーランスとして多くのプロジェクトに参画"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2023年: 新しい技術スタックの導入とチームリーダーとしての経験"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2024年: 大規模プロジェクトの成功とクライアントからの高評価"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2025年: 技術ブログの開始とコミュニティへの貢献"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2026年: オープンソースプロジェクトへの参加とコントリビューション"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2027年: 新しいスタートアップの立ち上げと成功"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2028年: 複数の技術カンファレンスでの講演"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2029年: 技術書の執筆と出版"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2030年: グローバルな技術コミュニティでのリーダーシップ"}),Ae.jsx("li",{className:"border-b border-gray-300 pb-2",children:"2031年: 次世代のエンジニア育成プログラムの開始"}),Ae.jsx("li",{children:"現在: ReactとNode.jsを中心に開発"}),Ae.jsx("li",{children:"2032年: 継続的な学習と自己成長"})]})]})]})})}function PT({title:s,description:e,media:t,isVideo:r=!1,onClose:o,link:l,github:c,my_skills:f,other_skills:d,cd_skills:h}){return Ae.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",onClick:o,children:Ae.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 max-w-6xl w-full flex",onClick:m=>m.stopPropagation(),children:[Ae.jsxs("div",{className:"flex-1 pr-4",children:[Ae.jsx("h2",{className:"text-3xl font-bold mb-4",children:s}),Ae.jsx("p",{className:"text-gray-700 text-lg",children:e}),l&&Ae.jsxs("p",{className:"mt-4",children:[Ae.jsx("span",{className:"text-black",children:"Link: "}),Ae.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500",children:l})]}),c&&Ae.jsxs("p",{className:"mt-4",children:[Ae.jsx("span",{className:"text-black",children:"Github: "}),Ae.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500",children:c})]}),(f||d)&&Ae.jsxs("p",{className:"mt-4",children:[Ae.jsx("span",{className:"text-black",children:"仕様技術: "}),f&&f.map((m,g)=>Ae.jsxs("span",{className:"text-black",children:[m,g<f.length-1&&", "]},g)),f&&d&&", ",d&&d.map((m,g)=>Ae.jsxs("span",{className:"text-gray-500",children:[m,g<d.length-1&&", "]},g)),f&&h&&", ",h&&h.map((m,g)=>Ae.jsxs("span",{className:"text-green-500",children:[m,g<h.length-1&&", "]},g))]})]}),Ae.jsx("div",{className:"flex-1",children:Ae.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:r?Ae.jsx("video",{src:t,controls:!0,className:"w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"}):Ae.jsx("img",{src:t,alt:s,className:"w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"})})})]})})}function bT({work:s,onClick:e}){return Ae.jsxs("div",{className:"relative group flex justify-center items-center cursor-pointer",onClick:e,children:[Ae.jsx("img",{src:s.media,alt:s.title,className:"w-full h-full object-cover rounded-lg shadow-lg"}),Ae.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg",children:Ae.jsx("span",{className:"text-white text-2xl text-center px-2",children:s.title})}),Ae.jsx("span",{className:"absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg",children:s.title})]})}const LT=[{id:1,title:"にほんGO UP APP",description:`UMP-JUSTが主催する生成AIハッカソンでの作品です．外国人労働者の日本語学習を支援するためのサービスを作成しました．
    backendの開発を担当しました．
    ハッカソンへの参加は初めてでしたが，非常に優秀なメンバーのおかげで技術賞とcotomi賞を受賞することができました．
    継続開発を行いデプロイしたいと考えています．`,media:"/nihon_go_up_app.png",isVideo:!1,link:"https://nihon-go-up-app.vercel.app/",github:"https://github.com/Omusubi0123/nihon-go-up-app",my_skills:["FastAPI","Azure AI Search","Amazon Bedrock","cotomi API"],other_skills:["TypeScript","React","Vite","Docker","Google Cloud Platform","Vercel"]},{id:2,title:"ネットレンド",description:`大学の「情報可視化とデータ分析」実験演習にて作成したWebアプリです．
    ニコニコ動画データセットを解析し，2007年~2021年のネットの流行を可視化しました．
    frontendの開発はこれが初めてで，D3以外のライブラリやフレームワークを使用せずに開発したことで基礎技術への理解が深まりました．
    3人チームで作成し，「画面3」を担当しました．
    実験最終回に行われたプレゼンの結果，Well Implimented Award を受賞することができました．`,media:"/netrend.png",isVideo:!1,link:"https://netrend.vercel.app/",my_skills:["HTML","CSS","JavaScript","D3.js","FastAPI","Docker","Cloudflare tunnel"]},{id:3,title:"Life DiaLog",description:`JP HACKSが主催する2024年のハッカソンでの作品です．日々の記録し人生と対話する，をコンセプトとした「Life DiaLog」というサービスを作成しました．
    LINEから日々の出来事をリアルタイムで登録し，毎日の記録を検索しながらAIと対話することで人生を振り返るサービスです．
    backendの開発を担当しました．
    開発期間は2日間でしたが，非常に優秀なメンバーのおかげで企業賞3つを受賞することができました．
    ハッカソン終了後にDB等のサービスを変更して自分用にデプロイしており，今でも愛用しています．`,media:"/life_dialog.png",isVideo:!1,link:"https://life-dialog.vercel.app/",github:"https://github.com/Omusubi0123/life-dialog",my_skills:["FastAPI","LINE Messaging API","Firebase Firestore","Azure AI Search","OpenAI API"],other_skills:["TypeScript","React","Vite","Docker","Google Cloud Platform","Vercel"],cd_skills:["PostgreSQL","pgvector","docker-compose","Cloudflare tunnel","(自宅サーバー)"]}];function DT(){const[s,e]=yr.useState(null),t=o=>{e(o)},r=()=>{e(null)};return Ae.jsxs(cu,{id:"works",title:"My Works",className:"bg-transparent flex justify-center py-8",children:[Ae.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl px-4",children:LT.map(o=>Ae.jsx(bT,{work:o,onClick:()=>t(o)},o.id))}),s&&Ae.jsx(PT,{title:s.title,description:s.description,media:s.media,isVideo:s.isVideo,onClose:r,link:s.link,github:s.github,my_skills:s.my_skills,other_skills:s.other_skills,cd_skills:s.cd_skills})]})}function NT(){const s=[{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"C",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"HTML",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"},{name:"CSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"},{name:"Vite",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"},{name:"FastAPI",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"},{name:"Firebase",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"},{name:"Cloudflare",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"},{name:"Docker",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"},{name:"GCP",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"},{name:"Vercel",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg"},{name:"Transformers",icon:"https://huggingface.co/front/assets/huggingface_logo-noborder.svg"},{name:"PyTorch",icon:"https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"}];return Ae.jsx(cu,{id:"skills",title:"Skills",className:"bg-transparent flex justify-center py-8",children:Ae.jsx("div",{className:"w-full max-w-4xl px-4",children:Ae.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8",children:s.map((e,t)=>Ae.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2 p-3 sm:p-4 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105",children:[Ae.jsx("img",{src:e.icon,alt:e.name,className:"w-12 h-12 sm:w-16 sm:h-16 object-contain"}),Ae.jsx("span",{className:"text-sm sm:text-base md:text-lg font-medium text-center",children:e.name})]},t))})})})}function IT(){const s=["Certified Kubernetes Administrator (CKA)","AWS Certified Solutions Architect – Associate","Google Cloud Professional Data Engineer","TOEIC 800+"];return Ae.jsx(cu,{id:"certifications",title:"Certifications",className:"bg-transparent flex justify-center py-8",children:Ae.jsx("ul",{className:"list-disc text-lg",children:s.map((e,t)=>Ae.jsx("li",{className:"mb-2",children:e},t))})})}function UT(){const[s,e]=yr.useState(!1),t=yr.useRef(null);return yr.useEffect(()=>{if(!t.current)return;const r=new Dx,o=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=10;const l=new uT;return l.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(l.domElement),r.background=new Mt(0),new cT().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",f=>{const d=[],h=[],m=[-2.5,0,2.5],g="いざわ",_=new Ey(16777215,1,100);_.position.set(10,10,10),r.add(_);for(let E=0;E<g.length;E++){const S=new pT(g[E],{font:f,size:1,height:.2}),v=new hy({color:16777215}),L=new gi(S,v);L.position.set(m[E],10,0),r.add(L),d.push(v),h.push(L)}let y=0;const M=()=>{if(requestAnimationFrame(M),y<h.length){const E=h[y];E.position.y-=.2,E.position.y<=0&&(E.position.y=0,y++)}y===h.length&&(d.forEach(E=>{E.emissive=new Mt(16766720)}),setTimeout(()=>e(!0),1e3)),l.render(r,o)};M()}),()=>{for(l.dispose();r.children.length>0;)r.remove(r.children[0])}},[]),Ae.jsx("div",{children:s?Ae.jsxs(gT,{header:Ae.jsx(CT,{}),children:[Ae.jsx(RT,{}),Ae.jsx(DT,{}),Ae.jsx(NT,{}),Ae.jsx(IT,{})]}):Ae.jsx("div",{ref:t,style:{width:"100vw",height:"100vh"}})})}g0.createRoot(document.getElementById("root")).render(Ae.jsx(yr.StrictMode,{children:Ae.jsx(UT,{})}));
