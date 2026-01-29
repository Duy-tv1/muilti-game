(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const k of m)if(k.type==="childList")for(const z of k.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function o(m){const k={};return m.integrity&&(k.integrity=m.integrity),m.referrerPolicy&&(k.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?k.credentials="include":m.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function c(m){if(m.ep)return;m.ep=!0;const k=o(m);fetch(m.href,k)}})();function xc(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var al={exports:{}},ri={},ul={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc;function jf(){if(sc)return ee;sc=1;var u=Symbol.for("react.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),fe=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),re=Symbol.iterator;function ie(g){return g===null||typeof g!="object"?null:(g=re&&g[re]||g["@@iterator"],typeof g=="function"?g:null)}var Ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,me={};function ae(g,S,G){this.props=g,this.context=S,this.refs=me,this.updater=G||Ze}ae.prototype.isReactComponent={},ae.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},ae.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Ct(){}Ct.prototype=ae.prototype;function D(g,S,G){this.props=g,this.context=S,this.refs=me,this.updater=G||Ze}var Ie=D.prototype=new Ct;Ie.constructor=D,Ve(Ie,ae.prototype),Ie.isPureReactComponent=!0;var ge=Array.isArray,st=Object.prototype.hasOwnProperty,ke={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function ot(g,S,G){var X,J={},Z=null,oe=null;if(S!=null)for(X in S.ref!==void 0&&(oe=S.ref),S.key!==void 0&&(Z=""+S.key),S)st.call(S,X)&&!ze.hasOwnProperty(X)&&(J[X]=S[X]);var ce=arguments.length-2;if(ce===1)J.children=G;else if(1<ce){for(var de=Array(ce),Ke=0;Ke<ce;Ke++)de[Ke]=arguments[Ke+2];J.children=de}if(g&&g.defaultProps)for(X in ce=g.defaultProps,ce)J[X]===void 0&&(J[X]=ce[X]);return{$$typeof:u,type:g,key:Z,ref:oe,props:J,_owner:ke.current}}function et(g,S){return{$$typeof:u,type:g.type,key:S,ref:g.ref,props:g.props,_owner:g._owner}}function We(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function $e(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return S[G]})}var tt=/\/+/g;function De(g,S){return typeof g=="object"&&g!==null&&g.key!=null?$e(""+g.key):S.toString(36)}function Se(g,S,G,X,J){var Z=typeof g;(Z==="undefined"||Z==="boolean")&&(g=null);var oe=!1;if(g===null)oe=!0;else switch(Z){case"string":case"number":oe=!0;break;case"object":switch(g.$$typeof){case u:case l:oe=!0}}if(oe)return oe=g,J=J(oe),g=X===""?"."+De(oe,0):X,ge(J)?(G="",g!=null&&(G=g.replace(tt,"$&/")+"/"),Se(J,S,G,"",function(Ke){return Ke})):J!=null&&(We(J)&&(J=et(J,G+(!J.key||oe&&oe.key===J.key?"":(""+J.key).replace(tt,"$&/")+"/")+g)),S.push(J)),1;if(oe=0,X=X===""?".":X+":",ge(g))for(var ce=0;ce<g.length;ce++){Z=g[ce];var de=X+De(Z,ce);oe+=Se(Z,S,G,de,J)}else if(de=ie(g),typeof de=="function")for(g=de.call(g),ce=0;!(Z=g.next()).done;)Z=Z.value,de=X+De(Z,ce++),oe+=Se(Z,S,G,de,J);else if(Z==="object")throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return oe}function qe(g,S,G){if(g==null)return g;var X=[],J=0;return Se(g,X,"","",function(Z){return S.call(G,Z,J++)}),X}function _e(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var ye={current:null},R={transition:null},Q={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:R,ReactCurrentOwner:ke};function O(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:qe,forEach:function(g,S,G){qe(g,function(){S.apply(this,arguments)},G)},count:function(g){var S=0;return qe(g,function(){S++}),S},toArray:function(g){return qe(g,function(S){return S})||[]},only:function(g){if(!We(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ee.Component=ae,ee.Fragment=o,ee.Profiler=m,ee.PureComponent=D,ee.StrictMode=c,ee.Suspense=b,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ee.act=O,ee.cloneElement=function(g,S,G){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var X=Ve({},g.props),J=g.key,Z=g.ref,oe=g._owner;if(S!=null){if(S.ref!==void 0&&(Z=S.ref,oe=ke.current),S.key!==void 0&&(J=""+S.key),g.type&&g.type.defaultProps)var ce=g.type.defaultProps;for(de in S)st.call(S,de)&&!ze.hasOwnProperty(de)&&(X[de]=S[de]===void 0&&ce!==void 0?ce[de]:S[de])}var de=arguments.length-2;if(de===1)X.children=G;else if(1<de){ce=Array(de);for(var Ke=0;Ke<de;Ke++)ce[Ke]=arguments[Ke+2];X.children=ce}return{$$typeof:u,type:g.type,key:J,ref:Z,props:X,_owner:oe}},ee.createContext=function(g){return g={$$typeof:z,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:k,_context:g},g.Consumer=g},ee.createElement=ot,ee.createFactory=function(g){var S=ot.bind(null,g);return S.type=g,S},ee.createRef=function(){return{current:null}},ee.forwardRef=function(g){return{$$typeof:V,render:g}},ee.isValidElement=We,ee.lazy=function(g){return{$$typeof:ne,_payload:{_status:-1,_result:g},_init:_e}},ee.memo=function(g,S){return{$$typeof:fe,type:g,compare:S===void 0?null:S}},ee.startTransition=function(g){var S=R.transition;R.transition={};try{g()}finally{R.transition=S}},ee.unstable_act=O,ee.useCallback=function(g,S){return ye.current.useCallback(g,S)},ee.useContext=function(g){return ye.current.useContext(g)},ee.useDebugValue=function(){},ee.useDeferredValue=function(g){return ye.current.useDeferredValue(g)},ee.useEffect=function(g,S){return ye.current.useEffect(g,S)},ee.useId=function(){return ye.current.useId()},ee.useImperativeHandle=function(g,S,G){return ye.current.useImperativeHandle(g,S,G)},ee.useInsertionEffect=function(g,S){return ye.current.useInsertionEffect(g,S)},ee.useLayoutEffect=function(g,S){return ye.current.useLayoutEffect(g,S)},ee.useMemo=function(g,S){return ye.current.useMemo(g,S)},ee.useReducer=function(g,S,G){return ye.current.useReducer(g,S,G)},ee.useRef=function(g){return ye.current.useRef(g)},ee.useState=function(g){return ye.current.useState(g)},ee.useSyncExternalStore=function(g,S,G){return ye.current.useSyncExternalStore(g,S,G)},ee.useTransition=function(){return ye.current.useTransition()},ee.version="18.3.1",ee}var oc;function Sl(){return oc||(oc=1,ul.exports=jf()),ul.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc;function Tf(){if(lc)return ri;lc=1;var u=Sl(),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function z(V,b,fe){var ne,re={},ie=null,Ze=null;fe!==void 0&&(ie=""+fe),b.key!==void 0&&(ie=""+b.key),b.ref!==void 0&&(Ze=b.ref);for(ne in b)c.call(b,ne)&&!k.hasOwnProperty(ne)&&(re[ne]=b[ne]);if(V&&V.defaultProps)for(ne in b=V.defaultProps,b)re[ne]===void 0&&(re[ne]=b[ne]);return{$$typeof:l,type:V,key:ie,ref:Ze,props:re,_owner:m.current}}return ri.Fragment=o,ri.jsx=z,ri.jsxs=z,ri}var ac;function Rf(){return ac||(ac=1,al.exports=Tf()),al.exports}var d=Rf(),te=Sl();const Pf=xc(te);var gs={},cl={exports:{}},pt={},dl={exports:{}},fl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function zf(){return uc||(uc=1,(function(u){function l(R,Q){var O=R.length;R.push(Q);e:for(;0<O;){var g=O-1>>>1,S=R[g];if(0<m(S,Q))R[g]=Q,R[O]=S,O=g;else break e}}function o(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var Q=R[0],O=R.pop();if(O!==Q){R[0]=O;e:for(var g=0,S=R.length,G=S>>>1;g<G;){var X=2*(g+1)-1,J=R[X],Z=X+1,oe=R[Z];if(0>m(J,O))Z<S&&0>m(oe,J)?(R[g]=oe,R[Z]=O,g=Z):(R[g]=J,R[X]=O,g=X);else if(Z<S&&0>m(oe,O))R[g]=oe,R[Z]=O,g=Z;else break e}}return Q}function m(R,Q){var O=R.sortIndex-Q.sortIndex;return O!==0?O:R.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;u.unstable_now=function(){return k.now()}}else{var z=Date,V=z.now();u.unstable_now=function(){return z.now()-V}}var b=[],fe=[],ne=1,re=null,ie=3,Ze=!1,Ve=!1,me=!1,ae=typeof setTimeout=="function"?setTimeout:null,Ct=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ie(R){for(var Q=o(fe);Q!==null;){if(Q.callback===null)c(fe);else if(Q.startTime<=R)c(fe),Q.sortIndex=Q.expirationTime,l(b,Q);else break;Q=o(fe)}}function ge(R){if(me=!1,Ie(R),!Ve)if(o(b)!==null)Ve=!0,_e(st);else{var Q=o(fe);Q!==null&&ye(ge,Q.startTime-R)}}function st(R,Q){Ve=!1,me&&(me=!1,Ct(ot),ot=-1),Ze=!0;var O=ie;try{for(Ie(Q),re=o(b);re!==null&&(!(re.expirationTime>Q)||R&&!$e());){var g=re.callback;if(typeof g=="function"){re.callback=null,ie=re.priorityLevel;var S=g(re.expirationTime<=Q);Q=u.unstable_now(),typeof S=="function"?re.callback=S:re===o(b)&&c(b),Ie(Q)}else c(b);re=o(b)}if(re!==null)var G=!0;else{var X=o(fe);X!==null&&ye(ge,X.startTime-Q),G=!1}return G}finally{re=null,ie=O,Ze=!1}}var ke=!1,ze=null,ot=-1,et=5,We=-1;function $e(){return!(u.unstable_now()-We<et)}function tt(){if(ze!==null){var R=u.unstable_now();We=R;var Q=!0;try{Q=ze(!0,R)}finally{Q?De():(ke=!1,ze=null)}}else ke=!1}var De;if(typeof D=="function")De=function(){D(tt)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,qe=Se.port2;Se.port1.onmessage=tt,De=function(){qe.postMessage(null)}}else De=function(){ae(tt,0)};function _e(R){ze=R,ke||(ke=!0,De())}function ye(R,Q){ot=ae(function(){R(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_continueExecution=function(){Ve||Ze||(Ve=!0,_e(st))},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return ie},u.unstable_getFirstCallbackNode=function(){return o(b)},u.unstable_next=function(R){switch(ie){case 1:case 2:case 3:var Q=3;break;default:Q=ie}var O=ie;ie=Q;try{return R()}finally{ie=O}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=ie;ie=R;try{return Q()}finally{ie=O}},u.unstable_scheduleCallback=function(R,Q,O){var g=u.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?g+O:g):O=g,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=O+S,R={id:ne++,callback:Q,priorityLevel:R,startTime:O,expirationTime:S,sortIndex:-1},O>g?(R.sortIndex=O,l(fe,R),o(b)===null&&R===o(fe)&&(me?(Ct(ot),ot=-1):me=!0,ye(ge,O-g))):(R.sortIndex=S,l(b,R),Ve||Ze||(Ve=!0,_e(st))),R},u.unstable_shouldYield=$e,u.unstable_wrapCallback=function(R){var Q=ie;return function(){var O=ie;ie=Q;try{return R.apply(this,arguments)}finally{ie=O}}}})(fl)),fl}var cc;function Lf(){return cc||(cc=1,dl.exports=zf()),dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function Of(){if(dc)return pt;dc=1;var u=Sl(),l=Lf();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,m={};function k(e,t){z(e,t),z(e+"Capture",t)}function z(e,t){for(m[e]=t,e=0;e<t.length;e++)c.add(t[e])}var V=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,fe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},re={};function ie(e){return b.call(re,e)?!0:b.call(ne,e)?!1:fe.test(e)?re[e]=!0:(ne[e]=!0,!1)}function Ze(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,r){if(t===null||typeof t>"u"||Ze(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new me(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new me(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new me(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new me(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ae[e]=new me(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ae[e]=new me(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ae[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ct=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ct,D);ae[t]=new me(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ct,D);ae[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ct,D);ae[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ie(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,i,r)&&(n=null),r||i===null?ie(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ge=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,st=Symbol.for("react.element"),ke=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),We=Symbol.for("react.provider"),$e=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),R=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,g;function S(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var G=!1;function X(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,f=s.length-1;1<=a&&0<=f&&i[a]!==s[f];)f--;for(;1<=a&&0<=f;a--,f--)if(i[a]!==s[f]){if(a!==1||f!==1)do if(a--,f--,0>f||i[a]!==s[f]){var p=`
`+i[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=f);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?S(e):""}function J(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case ke:return"Portal";case et:return"Profiler";case ot:return"StrictMode";case De:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $e:return(e.displayName||"Context")+".Consumer";case We:return(e._context.displayName||"Context")+".Provider";case tt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function oe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===ot?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=de(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ht(e){e._valueTracker||(e._valueTracker=Ke(e))}function oi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ae(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gr(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ee(e,t){t=t.checked,t!=null&&Ie(e,"checked",t,!1)}function on(e,t){Ee(e,t);var n=ce(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qt(e,t.type,n):t.hasOwnProperty("defaultValue")&&qt(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ln(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qt(e,t,n){(t!=="number"||$t(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dt=Array.isArray;function jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(Dt(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Wn(e,t){var n=ce(t.value),r=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function li(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?li(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $n,ai=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Es=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Es.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function ui(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Yt(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ui(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cs=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xr(e,t){if(t){if(Cs[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function wr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kr=null;function Sr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,an=null,un=null;function ci(e){if(e=Vr(e)){if(typeof _r!="function")throw Error(o(280));var t=e.stateNode;t&&(t=zi(t),_r(e.stateNode,e.type,t))}}function B(e){an?un?un.push(e):un=[e]:an=e}function W(){if(an){var e=an,t=un;if(un=an=null,ci(e),t)for(e=0;e<t.length;e++)ci(t[e])}}function H(e,t){return e(t)}function P(){}var w=!1;function j(e,t,n){if(w)return e(t,n);w=!0;try{return H(e,t,n)}finally{w=!1,(an!==null||un!==null)&&(P(),W())}}function T(e,t){var n=e.stateNode;if(n===null)return null;var r=zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var F=!1;if(V)try{var Y={};Object.defineProperty(Y,"passive",{get:function(){F=!0}}),window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,Y)}catch{F=!1}function pe(e,t,n,r,i,s,a,f,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(N){this.onError(N)}}var nt=!1,Tt=null,Gt=!1,Rt=null,Oc={onError:function(e){nt=!0,Tt=e}};function Ic(e,t,n,r,i,s,a,f,p){nt=!1,Tt=null,pe.apply(Oc,arguments)}function Ac(e,t,n,r,i,s,a,f,p){if(Ic.apply(this,arguments),nt){if(nt){var x=Tt;nt=!1,Tt=null}else throw Error(o(198));Gt||(Gt=!0,Rt=x)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rl(e){if(Ln(e)!==e)throw Error(o(188))}function bc(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rl(i),e;if(s===r)return Rl(i),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,f=i.child;f;){if(f===n){a=!0,n=i,r=s;break}if(f===r){a=!0,r=i,n=s;break}f=f.sibling}if(!a){for(f=s.child;f;){if(f===n){a=!0,n=s,r=i;break}if(f===r){a=!0,r=s,n=i;break}f=f.sibling}if(!a)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function Pl(e){return e=bc(e),e!==null?zl(e):null}function zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zl(e);if(t!==null)return t;e=e.sibling}return null}var Ll=l.unstable_scheduleCallback,Ol=l.unstable_cancelCallback,Mc=l.unstable_shouldYield,Dc=l.unstable_requestPaint,Re=l.unstable_now,Bc=l.unstable_getCurrentPriorityLevel,js=l.unstable_ImmediatePriority,Il=l.unstable_UserBlockingPriority,di=l.unstable_NormalPriority,Fc=l.unstable_LowPriority,Al=l.unstable_IdlePriority,fi=null,Bt=null;function Uc(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Qc,Vc=Math.log,Hc=Math.LN2;function Qc(e){return e>>>=0,e===0?32:31-(Vc(e)/Hc|0)|0}var pi=64,hi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var f=a&~i;f!==0?r=Nr(f):(s&=a,s!==0&&(r=Nr(s)))}else a=n&~i,a!==0?r=Nr(a):s!==0&&(r=Nr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $c(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Pt(s),f=1<<a,p=i[a];p===-1?((f&n)===0||(f&r)!==0)&&(i[a]=Wc(f,t)):p<=t&&(e.expiredLanes|=f),s&=~f}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bl(){var e=pi;return pi<<=1,(pi&4194240)===0&&(pi=64),e}function Rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dl,zs,Bl,Fl,Ul,Ls=!1,gi=[],cn=null,dn=null,fn=null,Cr=new Map,jr=new Map,pn=[],Kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vl(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Tr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Vr(t),t!==null&&zs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yc(e,t,n,r,i){switch(t){case"focusin":return cn=Tr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Tr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Tr(fn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cr.set(s,Tr(Cr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jr.set(s,Tr(jr.get(s)||null,e,t,n,r,i)),!0}return!1}function Hl(e){var t=On(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Tl(n),t!==null){e.blockedOn=t,Ul(e.priority,function(){Bl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kr=r,n.target.dispatchEvent(r),kr=null}else return t=Vr(n),t!==null&&zs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ql(e,t,n){yi(e)&&n.delete(t)}function Gc(){Ls=!1,cn!==null&&yi(cn)&&(cn=null),dn!==null&&yi(dn)&&(dn=null),fn!==null&&yi(fn)&&(fn=null),Cr.forEach(Ql),jr.forEach(Ql)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Gc)))}function Pr(e){function t(i){return Rr(i,e)}if(0<gi.length){Rr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Rr(cn,e),dn!==null&&Rr(dn,e),fn!==null&&Rr(fn,e),Cr.forEach(t),jr.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Hl(n),n.blockedOn===null&&pn.shift()}var qn=ge.ReactCurrentBatchConfig,vi=!0;function Xc(e,t,n,r){var i=he,s=qn.transition;qn.transition=null;try{he=1,Os(e,t,n,r)}finally{he=i,qn.transition=s}}function Jc(e,t,n,r){var i=he,s=qn.transition;qn.transition=null;try{he=4,Os(e,t,n,r)}finally{he=i,qn.transition=s}}function Os(e,t,n,r){if(vi){var i=Is(e,t,n,r);if(i===null)Xs(e,t,r,xi,n),Vl(e,r);else if(Yc(i,e,t,n,r))r.stopPropagation();else if(Vl(e,r),t&4&&-1<Kc.indexOf(e)){for(;i!==null;){var s=Vr(i);if(s!==null&&Dl(s),s=Is(e,t,n,r),s===null&&Xs(e,t,r,xi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xs(e,t,r,null,n)}}var xi=null;function Is(e,t,n,r){if(xi=null,e=Sr(r),e=On(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Wl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case js:return 1;case Il:return 4;case di:case Fc:return 16;case Al:return 536870912;default:return 16}default:return 16}}var hn=null,As=null,wi=null;function $l(){if(wi)return wi;var e,t=As,n=t.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function ql(){return!1}function mt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Si:ql,this.isPropagationStopped=ql,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=mt(Kn),zr=O({},Kn,{view:0,detail:0}),Zc=mt(zr),Ms,Ds,Lr,_i=O({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ms=e.screenX-Lr.screenX,Ds=e.screenY-Lr.screenY):Ds=Ms=0,Lr=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Kl=mt(_i),ed=O({},_i,{dataTransfer:0}),td=mt(ed),nd=O({},zr,{relatedTarget:0}),Bs=mt(nd),rd=O({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),id=mt(rd),sd=O({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),od=mt(sd),ld=O({},Kn,{data:0}),Yl=mt(ld),ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cd[e])?!!t[e]:!1}function Fs(){return dd}var fd=O({},zr,{key:function(e){if(e.key){var t=ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pd=mt(fd),hd=O({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=mt(hd),md=O({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),gd=mt(md),yd=O({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vd=mt(yd),xd=O({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wd=mt(xd),kd=[9,13,27,32],Us=V&&"CompositionEvent"in window,Or=null;V&&"documentMode"in document&&(Or=document.documentMode);var Sd=V&&"TextEvent"in window&&!Or,Xl=V&&(!Us||Or&&8<Or&&11>=Or),Jl=" ",Zl=!1;function ea(e,t){switch(e){case"keyup":return kd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function _d(e,t){switch(e){case"compositionend":return ta(t);case"keypress":return t.which!==32?null:(Zl=!0,Jl);case"textInput":return e=t.data,e===Jl&&Zl?null:e;default:return null}}function Nd(e,t){if(Yn)return e==="compositionend"||!Us&&ea(e,t)?(e=$l(),wi=As=hn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xl&&t.locale!=="ko"?null:t.data;default:return null}}var Ed={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ed[e.type]:t==="textarea"}function ra(e,t,n,r){B(r),t=Ti(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Ar=null;function Cd(e){ka(e,0)}function Ni(e){var t=er(e);if(oi(t))return e}function jd(e,t){if(e==="change")return t}var ia=!1;if(V){var Vs;if(V){var Hs="oninput"in document;if(!Hs){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Hs=typeof sa.oninput=="function"}Vs=Hs}else Vs=!1;ia=Vs&&(!document.documentMode||9<document.documentMode)}function oa(){Ir&&(Ir.detachEvent("onpropertychange",la),Ar=Ir=null)}function la(e){if(e.propertyName==="value"&&Ni(Ar)){var t=[];ra(t,Ar,e,Sr(e)),j(Cd,t)}}function Td(e,t,n){e==="focusin"?(oa(),Ir=t,Ar=n,Ir.attachEvent("onpropertychange",la)):e==="focusout"&&oa()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(Ar)}function Pd(e,t){if(e==="click")return Ni(t)}function zd(e,t){if(e==="input"||e==="change")return Ni(t)}function Ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Ld;function br(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!b.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function ca(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ca(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function da(){for(var e=window,t=$t();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$t(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=da(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ca(n.ownerDocument.documentElement,n)){if(r!==null&&Qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ua(n,s);var a=ua(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Id=V&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ws=null,Mr=null,$s=!1;function fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$s||Gn==null||Gn!==$t(r)||(r=Gn,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&br(Mr,r)||(Mr=r,r=Ti(Ws,"onSelect"),0<r.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},qs={},pa={};V&&(pa=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ci(e){if(qs[e])return qs[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pa)return qs[e]=t[n];return e}var ha=Ci("animationend"),ma=Ci("animationiteration"),ga=Ci("animationstart"),ya=Ci("transitionend"),va=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){va.set(e,t),k(t,[e])}for(var Ks=0;Ks<xa.length;Ks++){var Ys=xa[Ks],Ad=Ys.toLowerCase(),bd=Ys[0].toUpperCase()+Ys.slice(1);mn(Ad,"on"+bd)}mn(ha,"onAnimationEnd"),mn(ma,"onAnimationIteration"),mn(ga,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(ya,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Md=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function ka(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var f=r[a],p=f.instance,x=f.currentTarget;if(f=f.listener,p!==s&&i.isPropagationStopped())break e;wa(i,f,x),s=p}else for(a=0;a<r.length;a++){if(f=r[a],p=f.instance,x=f.currentTarget,f=f.listener,p!==s&&i.isPropagationStopped())break e;wa(i,f,x),s=p}}}if(Gt)throw e=Rt,Gt=!1,Rt=null,e}function xe(e,t){var n=t[ro];n===void 0&&(n=t[ro]=new Set);var r=e+"__bubble";n.has(r)||(Sa(t,e,2,!1),n.add(r))}function Gs(e,t,n){var r=0;t&&(r|=4),Sa(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[ji]){e[ji]=!0,c.forEach(function(n){n!=="selectionchange"&&(Md.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,Gs("selectionchange",!1,t))}}function Sa(e,t,n,r){switch(Wl(t)){case 1:var i=Xc;break;case 4:i=Jc;break;default:i=Os}n=i.bind(null,t,n,e),i=void 0,!F||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xs(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var f=r.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;a=a.return}for(;f!==null;){if(a=On(f),a===null)return;if(p=a.tag,p===5||p===6){r=s=a;continue e}f=f.parentNode}}r=r.return}j(function(){var x=s,N=Sr(n),E=[];e:{var _=va.get(e);if(_!==void 0){var L=bs,A=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":L=pd;break;case"focusin":A="focus",L=Bs;break;case"focusout":A="blur",L=Bs;break;case"beforeblur":case"afterblur":L=Bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=gd;break;case ha:case ma:case ga:L=id;break;case ya:L=vd;break;case"scroll":L=Zc;break;case"wheel":L=wd;break;case"copy":case"cut":case"paste":L=od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Gl}var M=(t&4)!==0,Pe=!M&&e==="scroll",y=M?_!==null?_+"Capture":null:_;M=[];for(var h=x,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,y!==null&&(C=T(h,y),C!=null&&M.push(Fr(h,C,v)))),Pe)break;h=h.return}0<M.length&&(_=new L(_,A,null,n,N),E.push({event:_,listeners:M}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",_&&n!==kr&&(A=n.relatedTarget||n.fromElement)&&(On(A)||A[Xt]))break e;if((L||_)&&(_=N.window===N?N:(_=N.ownerDocument)?_.defaultView||_.parentWindow:window,L?(A=n.relatedTarget||n.toElement,L=x,A=A?On(A):null,A!==null&&(Pe=Ln(A),A!==Pe||A.tag!==5&&A.tag!==6)&&(A=null)):(L=null,A=x),L!==A)){if(M=Kl,C="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(M=Gl,C="onPointerLeave",y="onPointerEnter",h="pointer"),Pe=L==null?_:er(L),v=A==null?_:er(A),_=new M(C,h+"leave",L,n,N),_.target=Pe,_.relatedTarget=v,C=null,On(N)===x&&(M=new M(y,h+"enter",A,n,N),M.target=v,M.relatedTarget=Pe,C=M),Pe=C,L&&A)t:{for(M=L,y=A,h=0,v=M;v;v=Jn(v))h++;for(v=0,C=y;C;C=Jn(C))v++;for(;0<h-v;)M=Jn(M),h--;for(;0<v-h;)y=Jn(y),v--;for(;h--;){if(M===y||y!==null&&M===y.alternate)break t;M=Jn(M),y=Jn(y)}M=null}else M=null;L!==null&&_a(E,_,L,M,!1),A!==null&&Pe!==null&&_a(E,Pe,A,M,!0)}}e:{if(_=x?er(x):window,L=_.nodeName&&_.nodeName.toLowerCase(),L==="select"||L==="input"&&_.type==="file")var U=jd;else if(na(_))if(ia)U=zd;else{U=Rd;var $=Td}else(L=_.nodeName)&&L.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(U=Pd);if(U&&(U=U(e,x))){ra(E,U,n,N);break e}$&&$(e,_,x),e==="focusout"&&($=_._wrapperState)&&$.controlled&&_.type==="number"&&qt(_,"number",_.value)}switch($=x?er(x):window,e){case"focusin":(na($)||$.contentEditable==="true")&&(Gn=$,Ws=x,Mr=null);break;case"focusout":Mr=Ws=Gn=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,fa(E,n,N);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":fa(E,n,N)}var q;if(Us)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Yn?ea(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Xl&&n.locale!=="ko"&&(Yn||K!=="onCompositionStart"?K==="onCompositionEnd"&&Yn&&(q=$l()):(hn=N,As="value"in hn?hn.value:hn.textContent,Yn=!0)),$=Ti(x,K),0<$.length&&(K=new Yl(K,e,null,n,N),E.push({event:K,listeners:$}),q?K.data=q:(q=ta(n),q!==null&&(K.data=q)))),(q=Sd?_d(e,n):Nd(e,n))&&(x=Ti(x,"onBeforeInput"),0<x.length&&(N=new Yl("onBeforeInput","beforeinput",null,n,N),E.push({event:N,listeners:x}),N.data=q))}ka(E,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=T(e,n),s!=null&&r.unshift(Fr(e,s,i)),s=T(e,t),s!=null&&r.push(Fr(e,s,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var f=n,p=f.alternate,x=f.stateNode;if(p!==null&&p===r)break;f.tag===5&&x!==null&&(f=x,i?(p=T(n,s),p!=null&&a.unshift(Fr(n,p,f))):i||(p=T(n,s),p!=null&&a.push(Fr(n,p,f)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Dd=/\r\n?/g,Bd=/\u0000|\uFFFD/g;function Na(e){return(typeof e=="string"?e:""+e).replace(Dd,`
`).replace(Bd,"")}function Ri(e,t,n){if(t=Na(t),Na(e)!==t&&n)throw Error(o(425))}function Pi(){}var Js=null,Zs=null;function eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var to=typeof setTimeout=="function"?setTimeout:void 0,Fd=typeof clearTimeout=="function"?clearTimeout:void 0,Ea=typeof Promise=="function"?Promise:void 0,Ud=typeof queueMicrotask=="function"?queueMicrotask:typeof Ea<"u"?function(e){return Ea.resolve(null).then(e).catch(Vd)}:to;function Vd(e){setTimeout(function(){throw e})}function no(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Zn,Ur="__reactProps$"+Zn,Xt="__reactContainer$"+Zn,ro="__reactEvents$"+Zn,Hd="__reactListeners$"+Zn,Qd="__reactHandles$"+Zn;function On(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ca(e);e!==null;){if(n=e[Ft])return n;e=Ca(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Ft]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function zi(e){return e[Ur]||null}var io=[],tr=-1;function yn(e){return{current:e}}function we(e){0>tr||(e.current=io[tr],io[tr]=null,tr--)}function ve(e,t){tr++,io[tr]=e.current,e.current=t}var vn={},Ye=yn(vn),at=yn(!1),In=vn;function nr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function Li(){we(at),we(Ye)}function ja(e,t,n){if(Ye.current!==vn)throw Error(o(168));ve(Ye,t),ve(at,n)}function Ta(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(o(108,oe(e)||"Unknown",i));return O({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,In=Ye.current,ve(Ye,e),ve(at,at.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ta(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,we(at),we(Ye),ve(Ye,e)):we(at),ve(at,n)}var Jt=null,Ii=!1,so=!1;function Pa(e){Jt===null?Jt=[e]:Jt.push(e)}function Wd(e){Ii=!0,Pa(e)}function xn(){if(!so&&Jt!==null){so=!0;var e=0,t=he;try{var n=Jt;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,Ii=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),Ll(js,xn),i}finally{he=t,so=!1}}return null}var rr=[],ir=0,Ai=null,bi=0,xt=[],wt=0,An=null,Zt=1,en="";function bn(e,t){rr[ir++]=bi,rr[ir++]=Ai,Ai=e,bi=t}function za(e,t,n){xt[wt++]=Zt,xt[wt++]=en,xt[wt++]=An,An=e;var r=Zt;e=en;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Pt(t)+i|n<<i|r,en=s+e}else Zt=1<<s|n<<i|r,en=e}function oo(e){e.return!==null&&(bn(e,1),za(e,1,0))}function lo(e){for(;e===Ai;)Ai=rr[--ir],rr[ir]=null,bi=rr[--ir],rr[ir]=null;for(;e===An;)An=xt[--wt],xt[wt]=null,en=xt[--wt],xt[wt]=null,Zt=xt[--wt],xt[wt]=null}var gt=null,yt=null,Ne=!1,Lt=null;function La(e,t){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,yt=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,yt=null,!0):!1;default:return!1}}function ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uo(e){if(Ne){var t=yt;if(t){var n=t;if(!Oa(e,t)){if(ao(e))throw Error(o(418));t=gn(n.nextSibling);var r=gt;t&&Oa(e,t)?La(r,n):(e.flags=e.flags&-4097|2,Ne=!1,gt=e)}}else{if(ao(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,gt=e}}}function Ia(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Mi(e){if(e!==gt)return!1;if(!Ne)return Ia(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eo(e.type,e.memoizedProps)),t&&(t=yt)){if(ao(e))throw Aa(),Error(o(418));for(;t;)La(e,t),t=gn(t.nextSibling)}if(Ia(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=gt?gn(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=yt;e;)e=gn(e.nextSibling)}function sr(){yt=gt=null,Ne=!1}function co(e){Lt===null?Lt=[e]:Lt.push(e)}var $d=ge.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var f=i.refs;a===null?delete f[s]:f[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Ma(e){function t(y,h){if(e){var v=y.deletions;v===null?(y.deletions=[h],y.flags|=16):v.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=jn(y,h),y.index=0,y.sibling=null,y}function s(y,h,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<h?(y.flags|=2,h):v):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,h,v,C){return h===null||h.tag!==6?(h=nl(v,y.mode,C),h.return=y,h):(h=i(h,v),h.return=y,h)}function p(y,h,v,C){var U=v.type;return U===ze?N(y,h,v.props.children,C,v.key):h!==null&&(h.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===_e&&ba(U)===h.type)?(C=i(h,v.props),C.ref=Hr(y,h,v),C.return=y,C):(C=as(v.type,v.key,v.props,null,y.mode,C),C.ref=Hr(y,h,v),C.return=y,C)}function x(y,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=rl(v,y.mode,C),h.return=y,h):(h=i(h,v.children||[]),h.return=y,h)}function N(y,h,v,C,U){return h===null||h.tag!==7?(h=Qn(v,y.mode,C,U),h.return=y,h):(h=i(h,v),h.return=y,h)}function E(y,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=nl(""+h,y.mode,v),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case st:return v=as(h.type,h.key,h.props,null,y.mode,v),v.ref=Hr(y,null,h),v.return=y,v;case ke:return h=rl(h,y.mode,v),h.return=y,h;case _e:var C=h._init;return E(y,C(h._payload),v)}if(Dt(h)||Q(h))return h=Qn(h,y.mode,v,null),h.return=y,h;Di(y,h)}return null}function _(y,h,v,C){var U=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return U!==null?null:f(y,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case st:return v.key===U?p(y,h,v,C):null;case ke:return v.key===U?x(y,h,v,C):null;case _e:return U=v._init,_(y,h,U(v._payload),C)}if(Dt(v)||Q(v))return U!==null?null:N(y,h,v,C,null);Di(y,v)}return null}function L(y,h,v,C,U){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(v)||null,f(h,y,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case st:return y=y.get(C.key===null?v:C.key)||null,p(h,y,C,U);case ke:return y=y.get(C.key===null?v:C.key)||null,x(h,y,C,U);case _e:var $=C._init;return L(y,h,v,$(C._payload),U)}if(Dt(C)||Q(C))return y=y.get(v)||null,N(h,y,C,U,null);Di(h,C)}return null}function A(y,h,v,C){for(var U=null,$=null,q=h,K=h=0,Ue=null;q!==null&&K<v.length;K++){q.index>K?(Ue=q,q=null):Ue=q.sibling;var ue=_(y,q,v[K],C);if(ue===null){q===null&&(q=Ue);break}e&&q&&ue.alternate===null&&t(y,q),h=s(ue,h,K),$===null?U=ue:$.sibling=ue,$=ue,q=Ue}if(K===v.length)return n(y,q),Ne&&bn(y,K),U;if(q===null){for(;K<v.length;K++)q=E(y,v[K],C),q!==null&&(h=s(q,h,K),$===null?U=q:$.sibling=q,$=q);return Ne&&bn(y,K),U}for(q=r(y,q);K<v.length;K++)Ue=L(q,y,K,v[K],C),Ue!==null&&(e&&Ue.alternate!==null&&q.delete(Ue.key===null?K:Ue.key),h=s(Ue,h,K),$===null?U=Ue:$.sibling=Ue,$=Ue);return e&&q.forEach(function(Tn){return t(y,Tn)}),Ne&&bn(y,K),U}function M(y,h,v,C){var U=Q(v);if(typeof U!="function")throw Error(o(150));if(v=U.call(v),v==null)throw Error(o(151));for(var $=U=null,q=h,K=h=0,Ue=null,ue=v.next();q!==null&&!ue.done;K++,ue=v.next()){q.index>K?(Ue=q,q=null):Ue=q.sibling;var Tn=_(y,q,ue.value,C);if(Tn===null){q===null&&(q=Ue);break}e&&q&&Tn.alternate===null&&t(y,q),h=s(Tn,h,K),$===null?U=Tn:$.sibling=Tn,$=Tn,q=Ue}if(ue.done)return n(y,q),Ne&&bn(y,K),U;if(q===null){for(;!ue.done;K++,ue=v.next())ue=E(y,ue.value,C),ue!==null&&(h=s(ue,h,K),$===null?U=ue:$.sibling=ue,$=ue);return Ne&&bn(y,K),U}for(q=r(y,q);!ue.done;K++,ue=v.next())ue=L(q,y,K,ue.value,C),ue!==null&&(e&&ue.alternate!==null&&q.delete(ue.key===null?K:ue.key),h=s(ue,h,K),$===null?U=ue:$.sibling=ue,$=ue);return e&&q.forEach(function(Cf){return t(y,Cf)}),Ne&&bn(y,K),U}function Pe(y,h,v,C){if(typeof v=="object"&&v!==null&&v.type===ze&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case st:e:{for(var U=v.key,$=h;$!==null;){if($.key===U){if(U=v.type,U===ze){if($.tag===7){n(y,$.sibling),h=i($,v.props.children),h.return=y,y=h;break e}}else if($.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===_e&&ba(U)===$.type){n(y,$.sibling),h=i($,v.props),h.ref=Hr(y,$,v),h.return=y,y=h;break e}n(y,$);break}else t(y,$);$=$.sibling}v.type===ze?(h=Qn(v.props.children,y.mode,C,v.key),h.return=y,y=h):(C=as(v.type,v.key,v.props,null,y.mode,C),C.ref=Hr(y,h,v),C.return=y,y=C)}return a(y);case ke:e:{for($=v.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(y,h.sibling),h=i(h,v.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=rl(v,y.mode,C),h.return=y,y=h}return a(y);case _e:return $=v._init,Pe(y,h,$(v._payload),C)}if(Dt(v))return A(y,h,v,C);if(Q(v))return M(y,h,v,C);Di(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,v),h.return=y,y=h):(n(y,h),h=nl(v,y.mode,C),h.return=y,y=h),a(y)):n(y,h)}return Pe}var or=Ma(!0),Da=Ma(!1),Bi=yn(null),Fi=null,lr=null,fo=null;function po(){fo=lr=Fi=null}function ho(e){var t=Bi.current;we(Bi),e._currentValue=t}function mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Fi=e,fo=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ct=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(fo!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Fi===null)throw Error(o(308));lr=e,Fi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Mn=null;function go(e){Mn===null?Mn=[e]:Mn.push(e)}function Ba(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,go(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,go(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var i=e.updateQueue;wn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var p=f,x=p.next;p.next=null,a===null?s=x:a.next=x,a=p;var N=e.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==a&&(f===null?N.firstBaseUpdate=x:f.next=x,N.lastBaseUpdate=p))}if(s!==null){var E=i.baseState;a=0,N=x=p=null,f=s;do{var _=f.lane,L=f.eventTime;if((r&_)===_){N!==null&&(N=N.next={eventTime:L,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var A=e,M=f;switch(_=t,L=n,M.tag){case 1:if(A=M.payload,typeof A=="function"){E=A.call(L,E,_);break e}E=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=M.payload,_=typeof A=="function"?A.call(L,E,_):A,_==null)break e;E=O({},E,_);break e;case 2:wn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,_=i.effects,_===null?i.effects=[f]:_.push(f))}else L={eventTime:L,lane:_,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(x=N=L,p=E):N=N.next=L,a|=_;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;_=f,f=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(N===null&&(p=E),i.baseState=p,i.firstBaseUpdate=x,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=E}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(o(191,i));i.call(r)}}}var Qr={},Ut=yn(Qr),Wr=yn(Qr),$r=yn(Qr);function Dn(e){if(e===Qr)throw Error(o(174));return e}function vo(e,t){switch(ve($r,t),ve(Wr,e),ve(Ut,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vr(t,e)}we(Ut),ve(Ut,t)}function ur(){we(Ut),we(Wr),we($r)}function Ha(e){Dn($r.current);var t=Dn(Ut.current),n=vr(t,e.type);t!==n&&(ve(Wr,e),ve(Ut,n))}function xo(e){Wr.current===e&&(we(Ut),we(Wr))}var Ce=yn(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function ko(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Qi=ge.ReactCurrentDispatcher,So=ge.ReactCurrentBatchConfig,Bn=0,je=null,be=null,Be=null,Wi=!1,qr=!1,Kr=0,qd=0;function Ge(){throw Error(o(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function No(e,t,n,r,i,s){if(Bn=s,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qi.current=e===null||e.memoizedState===null?Xd:Jd,e=n(r,i),qr){s=0;do{if(qr=!1,Kr=0,25<=s)throw Error(o(301));s+=1,Be=be=null,t.updateQueue=null,Qi.current=Zd,e=n(r,i)}while(qr)}if(Qi.current=Ki,t=be!==null&&be.next!==null,Bn=0,Be=be=je=null,Wi=!1,t)throw Error(o(300));return e}function Eo(){var e=Kr!==0;return Kr=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?je.memoizedState=Be=e:Be=Be.next=e,Be}function St(){if(be===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Be===null?je.memoizedState:Be.next;if(t!==null)Be=t,be=e;else{if(e===null)throw Error(o(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Be===null?je.memoizedState=Be=e:Be=Be.next=e}return Be}function Yr(e,t){return typeof t=="function"?t(e):t}function Co(e){var t=St(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var f=a=null,p=null,x=s;do{var N=x.lane;if((Bn&N)===N)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var E={lane:N,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(f=p=E,a=r):p=p.next=E,je.lanes|=N,Fn|=N}x=x.next}while(x!==null&&x!==s);p===null?a=r:p.next=f,zt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,je.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=St(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);zt(s,t.memoizedState)||(ct=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qa(){}function Wa(e,t){var n=je,r=St(),i=t(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,To(Ka.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Gr(9,qa.bind(null,n,r,i,t),void 0,null),Fe===null)throw Error(o(349));(Bn&30)!==0||$a(n,t,i)}return i}function $a(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qa(e,t,n,r){t.value=n,t.getSnapshot=r,Ya(t)&&Ga(e)}function Ka(e,t,n){return n(function(){Ya(t)&&Ga(e)})}function Ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Ga(e){var t=tn(e,1);t!==null&&bt(t,e,1,-1)}function Xa(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gd.bind(null,je,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ja(){return St().memoizedState}function $i(e,t,n,r){var i=Vt();je.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function qi(e,t,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(be!==null){var a=be.memoizedState;if(s=a.destroy,r!==null&&_o(r,a.deps)){i.memoizedState=Gr(t,n,s,r);return}}je.flags|=e,i.memoizedState=Gr(1|t,n,s,r)}function Za(e,t){return $i(8390656,8,e,t)}function To(e,t){return qi(2048,8,e,t)}function eu(e,t){return qi(4,2,e,t)}function tu(e,t){return qi(4,4,e,t)}function nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ru(e,t,n){return n=n!=null?n.concat([e]):null,qi(4,4,nu.bind(null,t,e),n)}function Ro(){}function iu(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function su(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ou(e,t,n){return(Bn&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n):(zt(n,t)||(n=bl(),je.lanes|=n,Fn|=n,e.baseState=!0),t)}function Kd(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{he=n,So.transition=r}}function lu(){return St().memoizedState}function Yd(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},au(e))uu(t,n);else if(n=Ba(e,t,n,r),n!==null){var i=it();bt(n,e,r,i),cu(n,t,r)}}function Gd(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(au(e))uu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,f=s(a,n);if(i.hasEagerState=!0,i.eagerState=f,zt(f,a)){var p=t.interleaved;p===null?(i.next=i,go(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}n=Ba(e,t,i,r),n!==null&&(i=it(),bt(n,e,r,i),cu(n,t,r))}}function au(e){var t=e.alternate;return e===je||t!==null&&t===je}function uu(e,t){qr=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}var Ki={readContext:kt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Xd={readContext:kt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Za,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yd.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Ro,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=Kd.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Vt();if(Ne){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Fe===null)throw Error(o(349));(Bn&30)!==0||$a(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Za(Ka.bind(null,r,s,e),[e]),r.flags|=2048,Gr(9,qa.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Fe.identifierPrefix;if(Ne){var n=en,r=Zt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jd={readContext:kt,useCallback:iu,useContext:kt,useEffect:To,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:su,useReducer:Co,useRef:Ja,useState:function(){return Co(Yr)},useDebugValue:Ro,useDeferredValue:function(e){var t=St();return ou(t,be.memoizedState,e)},useTransition:function(){var e=Co(Yr)[0],t=St().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Wa,useId:lu,unstable_isNewReconciler:!1},Zd={readContext:kt,useCallback:iu,useContext:kt,useEffect:To,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:su,useReducer:jo,useRef:Ja,useState:function(){return jo(Yr)},useDebugValue:Ro,useDeferredValue:function(e){var t=St();return be===null?t.memoizedState=e:ou(t,be.memoizedState,e)},useTransition:function(){var e=jo(Yr)[0],t=St().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Wa,useId:lu,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=En(e),s=nn(r,i);s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,i),t!==null&&(bt(t,e,i,r),Ui(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=En(e),s=nn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,i),t!==null&&(bt(t,e,i,r),Ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=En(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(bt(t,e,r,n),Ui(t,e,r))}};function du(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(i,s):!0}function fu(e,t,n){var r=!1,i=vn,s=t.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ut(t)?In:Ye.current,r=t.contextTypes,s=(r=r!=null)?nr(e,i):vn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function zo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ut(t)?In:Ye.current,i.context=nr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Po(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yi.enqueueReplaceState(i,i.state,null),Vi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ef=typeof WeakMap=="function"?WeakMap:Map;function hu(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ns||(ns=!0,Ko=r),Oo(e,t)},n}function mu(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oo(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ef;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var tf=ge.ReactCurrentOwner,ct=!1;function rt(e,t,n,r){t.child=e===null?Da(t,null,n,r):or(t,e.child,n,r)}function xu(e,t,n,r,i){n=n.render;var s=t.ref;return ar(t,i),r=No(e,t,n,r,s,i),n=Eo(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(Ne&&n&&oo(t),t.flags|=1,rt(e,t,r,i),t.child)}function wu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!tl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ku(e,t,s,r,i)):(e=as(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(a,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=jn(s,r),e.ref=t.ref,e.return=t,t.child=e}function ku(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(br(s,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Io(e,t,n,r,i)}function Su(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(fr,vt),vt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(fr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(fr,vt),vt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ve(fr,vt),vt|=r;return rt(e,t,i,n),t.child}function _u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Io(e,t,n,r,i){var s=ut(n)?In:Ye.current;return s=nr(t,s),ar(t,i),n=No(e,t,n,r,s,i),r=Eo(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(Ne&&r&&oo(t),t.flags|=1,rt(e,t,n,i),t.child)}function Nu(e,t,n,r,i){if(ut(n)){var s=!0;Oi(t)}else s=!1;if(ar(t,i),t.stateNode===null)Xi(e,t),fu(t,n,r),zo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,f=t.memoizedProps;a.props=f;var p=a.context,x=n.contextType;typeof x=="object"&&x!==null?x=kt(x):(x=ut(n)?In:Ye.current,x=nr(t,x));var N=n.getDerivedStateFromProps,E=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function";E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==r||p!==x)&&pu(t,a,r,x),wn=!1;var _=t.memoizedState;a.state=_,Vi(t,r,a,i),p=t.memoizedState,f!==r||_!==p||at.current||wn?(typeof N=="function"&&(Po(t,n,N,r),p=t.memoizedState),(f=wn||du(t,n,f,r,_,p,x))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=x,r=f):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fa(e,t),f=t.memoizedProps,x=t.type===t.elementType?f:Ot(t.type,f),a.props=x,E=t.pendingProps,_=a.context,p=n.contextType,typeof p=="object"&&p!==null?p=kt(p):(p=ut(n)?In:Ye.current,p=nr(t,p));var L=n.getDerivedStateFromProps;(N=typeof L=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==E||_!==p)&&pu(t,a,r,p),wn=!1,_=t.memoizedState,a.state=_,Vi(t,r,a,i);var A=t.memoizedState;f!==E||_!==A||at.current||wn?(typeof L=="function"&&(Po(t,n,L,r),A=t.memoizedState),(x=wn||du(t,n,x,r,_,A,p)||!1)?(N||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,A,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,A,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),a.props=r,a.state=A,a.context=p,r=x):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,s,i)}function Ao(e,t,n,r,i,s){_u(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ra(t,n,!1),rn(e,t,s);r=t.stateNode,tf.current=t;var f=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=or(t,e.child,null,s),t.child=or(t,null,f,s)):rt(e,t,f,s),t.memoizedState=r.state,i&&Ra(t,n,!0),t.child}function Eu(e){var t=e.stateNode;t.pendingContext?ja(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(e,t.context,!1),vo(e,t.containerInfo)}function Cu(e,t,n,r,i){return sr(),co(i),t.flags|=256,rt(e,t,n,r),t.child}var bo={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ju(e,t,n){var r=t.pendingProps,i=Ce.current,s=!1,a=(t.flags&128)!==0,f;if((f=a)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=us(a,r,0,null),e=Qn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Mo(n),t.memoizedState=bo,e):Do(t,a));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return nf(e,t,a,r,f,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,f=i.sibling;var p={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=jn(i,p),r.subtreeFlags=i.subtreeFlags&14680064),f!==null?s=jn(f,s):(s=Qn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Mo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=bo,r}return s=e.child,e=s.sibling,r=jn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,n,r){return r!==null&&co(r),or(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Lo(Error(o(422))),Gi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=us({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&or(t,e.child,null,a),t.child.memoizedState=Mo(a),t.memoizedState=bo,s);if((t.mode&1)===0)return Gi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var f=r.dgst;return r=f,s=Error(o(419)),r=Lo(s,r,void 0),Gi(e,t,a,r)}if(f=(a&e.childLanes)!==0,ct||f){if(r=Fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(e,i),bt(r,e,i,-1))}return el(),r=Lo(Error(o(421))),Gi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,yt=gn(i.nextSibling),gt=t,Ne=!0,Lt=null,e!==null&&(xt[wt++]=Zt,xt[wt++]=en,xt[wt++]=An,Zt=e.id,en=e.overflow,An=t),t=Do(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mo(e.return,t,n)}function Bo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ru(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(rt(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bo(t,!0,n,null,s);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rf(e,t,n){switch(t.tag){case 3:Eu(t),sr();break;case 5:Ha(t);break;case 1:ut(t.type)&&Oi(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ju(e,t,n):(ve(Ce,Ce.current&1),e=rn(e,t,n),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ru(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,n)}return rn(e,t,n)}var Pu,Fo,zu,Lu;Pu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Fo=function(){},zu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dn(Ut.current);var s=null;switch(n){case"input":i=Ae(e,i),r=Ae(e,r),s=[];break;case"select":i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),s=[];break;case"textarea":i=lt(e,i),r=lt(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}xr(n,r);var a;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var f=i[x];for(a in f)f.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(m.hasOwnProperty(x)?s||(s=[]):(s=s||[]).push(x,null));for(x in r){var p=r[x];if(f=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&p!==f&&(p!=null||f!=null))if(x==="style")if(f){for(a in f)!f.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in p)p.hasOwnProperty(a)&&f[a]!==p[a]&&(n||(n={}),n[a]=p[a])}else n||(s||(s=[]),s.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,f=f?f.__html:void 0,p!=null&&f!==p&&(s=s||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(s=s||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(m.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&xe("scroll",e),s||f===p||(s=[])):(s=s||[]).push(x,p))}n&&(s=s||[]).push("style",n);var x=s;(t.updateQueue=x)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return ut(t.type)&&Li(),Xe(t),null;case 3:return r=t.stateNode,ur(),we(at),we(Ye),ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(Xo(Lt),Lt=null))),Fo(e,t),Xe(t),null;case 5:xo(t);var i=Dn($r.current);if(n=t.type,e!==null&&t.stateNode!=null)zu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Xe(t),null}if(e=Dn(Ut.current),Mi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ft]=t,r[Ur]=s,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)xe(Dr[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":gr(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":yr(r,s),xe("invalid",r)}xr(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var f=s[a];a==="children"?typeof f=="string"?r.textContent!==f&&(s.suppressHydrationWarning!==!0&&Ri(r.textContent,f,e),i=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Ri(r.textContent,f,e),i=["children",""+f]):m.hasOwnProperty(a)&&f!=null&&a==="onScroll"&&xe("scroll",r)}switch(n){case"input":ht(r),ln(r,s,!0);break;case"textarea":ht(r),Pn(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=li(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ft]=t,e[Ur]=r,Pu(e,t,!1,!1),t.stateNode=e;e:{switch(a=wr(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)xe(Dr[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":gr(e,r),i=Ae(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=O({},r,{value:void 0}),xe("invalid",e);break;case"textarea":yr(e,r),i=lt(e,r),xe("invalid",e);break;default:i=r}xr(n,i),f=i;for(s in f)if(f.hasOwnProperty(s)){var p=f[s];s==="style"?Yt(e,p):s==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ai(e,p)):s==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Kt(e,p):typeof p=="number"&&Kt(e,""+p):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(m.hasOwnProperty(s)?p!=null&&s==="onScroll"&&xe("scroll",e):p!=null&&Ie(e,s,p,a))}switch(n){case"input":ht(e),ln(e,r,!1);break;case"textarea":ht(e),Pn(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?jt(e,!!r.multiple,s,!1):r.defaultValue!=null&&jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=Dn($r.current),Dn(Ut.current),Mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(s=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return Xe(t),null;case 13:if(we(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Aa(),sr(),t.flags|=98560,s=!1;else if(s=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Ft]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),s=!1}else Lt!==null&&(Xo(Lt),Lt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Me===0&&(Me=3):el())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return ur(),Fo(e,t),e===null&&Br(t.stateNode.containerInfo),Xe(t),null;case 10:return ho(t.type._context),Xe(t),null;case 17:return ut(t.type)&&Li(),Xe(t),null;case 19:if(we(Ce),s=t.memoizedState,s===null)return Xe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Xr(s,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Hi(e),a!==null){for(t.flags|=128,Xr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&Re()>pr&&(t.flags|=128,r=!0,Xr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ne)return Xe(t),null}else 2*Re()-s.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Xr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Re(),t.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(vt&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function of(e,t){switch(lo(t),t.tag){case 1:return ut(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),we(at),we(Ye),ko(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(we(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ce),null;case 4:return ur(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var Ji=!1,Je=!1,lf=typeof WeakSet=="function"?WeakSet:Set,I=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Uo(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Ou=!1;function af(e,t){if(Js=vi,e=da(),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,f=-1,p=-1,x=0,N=0,E=e,_=null;t:for(;;){for(var L;E!==n||i!==0&&E.nodeType!==3||(f=a+i),E!==s||r!==0&&E.nodeType!==3||(p=a+r),E.nodeType===3&&(a+=E.nodeValue.length),(L=E.firstChild)!==null;)_=E,E=L;for(;;){if(E===e)break t;if(_===n&&++x===i&&(f=a),_===s&&++N===r&&(p=a),(L=E.nextSibling)!==null)break;E=_,_=E.parentNode}E=L}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zs={focusedElem:e,selectionRange:n},vi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var M=A.memoizedProps,Pe=A.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?M:Ot(t.type,M),Pe);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(C){Te(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return A=Ou,Ou=!1,A}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uo(t,n,s)}i=i.next}while(i!==r)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Ur],delete t[ro],delete t[Hd],delete t[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Au(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}var He=null,It=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Mu(e,t,n),n=n.sibling}function Mu(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(fi,n)}catch{}switch(n.tag){case 5:Je||dr(n,t);case 6:var r=He,i=It;He=null,Sn(e,t,n),He=r,It=i,He!==null&&(It?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(It?(e=He,n=n.stateNode,e.nodeType===8?no(e.parentNode,n):e.nodeType===1&&no(e,n),Pr(e)):no(He,n.stateNode));break;case 4:r=He,i=It,He=n.stateNode.containerInfo,It=!0,Sn(e,t,n),He=r,It=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&Uo(n,t,a),i=i.next}while(i!==r)}Sn(e,t,n);break;case 1:if(!Je&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Te(n,t,f)}Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Sn(e,t,n),Je=r):Sn(e,t,n);break;default:Sn(e,t,n)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lf),t.forEach(function(r){var i=yf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,f=a;e:for(;f!==null;){switch(f.tag){case 5:He=f.stateNode,It=!1;break e;case 3:He=f.stateNode.containerInfo,It=!0;break e;case 4:He=f.stateNode.containerInfo,It=!0;break e}f=f.return}if(He===null)throw Error(o(160));Mu(s,a,i),He=null,It=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(x){Te(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ht(e),r&4){try{Jr(3,e,e.return),Zi(3,e)}catch(M){Te(e,e.return,M)}try{Jr(5,e,e.return)}catch(M){Te(e,e.return,M)}}break;case 1:At(t,e),Ht(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(At(t,e),Ht(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{Kt(i,"")}catch(M){Te(e,e.return,M)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,f=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&Ee(i,s),wr(f,a);var x=wr(f,s);for(a=0;a<p.length;a+=2){var N=p[a],E=p[a+1];N==="style"?Yt(i,E):N==="dangerouslySetInnerHTML"?ai(i,E):N==="children"?Kt(i,E):Ie(i,N,E,x)}switch(f){case"input":on(i,s);break;case"textarea":Wn(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?jt(i,!!s.multiple,L,!1):_!==!!s.multiple&&(s.defaultValue!=null?jt(i,!!s.multiple,s.defaultValue,!0):jt(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ur]=s}catch(M){Te(e,e.return,M)}}break;case 6:if(At(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(o(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(M){Te(e,e.return,M)}}break;case 3:if(At(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(M){Te(e,e.return,M)}break;case 4:At(t,e),Ht(e);break;case 13:At(t,e),Ht(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qo=Re())),r&4&&Du(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(x=Je)||N,At(t,e),Je=x):At(t,e),Ht(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!N&&(e.mode&1)!==0)for(I=e,N=e.child;N!==null;){for(E=I=N;I!==null;){switch(_=I,L=_.child,_.tag){case 0:case 11:case 14:case 15:Jr(4,_,_.return);break;case 1:dr(_,_.return);var A=_.stateNode;if(typeof A.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(M){Te(r,n,M)}}break;case 5:dr(_,_.return);break;case 22:if(_.memoizedState!==null){Vu(E);continue}}L!==null?(L.return=_,I=L):Vu(E)}N=N.sibling}e:for(N=null,E=e;;){if(E.tag===5){if(N===null){N=E;try{i=E.stateNode,x?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=E.stateNode,p=E.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,f.style.display=ui("display",a))}catch(M){Te(e,e.return,M)}}}else if(E.tag===6){if(N===null)try{E.stateNode.nodeValue=x?"":E.memoizedProps}catch(M){Te(e,e.return,M)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;N===E&&(N=null),E=E.return}N===E&&(N=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:At(t,e),Ht(e),r&4&&Du(e);break;case 21:break;default:At(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Au(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kt(i,""),r.flags&=-33);var s=bu(e);Qo(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,f=bu(e);Ho(e,f,a);break;default:throw Error(o(161))}}catch(p){Te(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uf(e,t,n){I=e,Fu(e)}function Fu(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ji;if(!a){var f=i.alternate,p=f!==null&&f.memoizedState!==null||Je;f=Ji;var x=Je;if(Ji=a,(Je=p)&&!x)for(I=i;I!==null;)a=I,p=a.child,a.tag===22&&a.memoizedState!==null?Hu(i):p!==null?(p.return=a,I=p):Hu(i);for(;s!==null;)I=s,Fu(s),s=s.sibling;I=i,Ji=f,Je=x}Uu(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Uu(e)}}function Uu(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||Zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Va(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,a,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var N=x.memoizedState;if(N!==null){var E=N.dehydrated;E!==null&&Pr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Je||t.flags&512&&Vo(t)}catch(_){Te(t,t.return,_)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Vu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Hu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(p){Te(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(p){Te(t,i,p)}}var s=t.return;try{Vo(t)}catch(p){Te(t,s,p)}break;case 5:var a=t.return;try{Vo(t)}catch(p){Te(t,a,p)}}}catch(p){Te(t,t.return,p)}if(t===e){I=null;break}var f=t.sibling;if(f!==null){f.return=t.return,I=f;break}I=t.return}}var cf=Math.ceil,es=ge.ReactCurrentDispatcher,Wo=ge.ReactCurrentOwner,_t=ge.ReactCurrentBatchConfig,le=0,Fe=null,Le=null,Qe=0,vt=0,fr=yn(0),Me=0,Zr=null,Fn=0,ts=0,$o=0,ei=null,dt=null,qo=0,pr=1/0,sn=null,ns=!1,Ko=null,_n=null,rs=!1,Nn=null,is=0,ti=0,Yo=null,ss=-1,os=0;function it(){return(le&6)!==0?Re():ss!==-1?ss:ss=Re()}function En(e){return(e.mode&1)===0?1:(le&2)!==0&&Qe!==0?Qe&-Qe:$d.transition!==null?(os===0&&(os=bl()),os):(e=he,e!==0||(e=window.event,e=e===void 0?16:Wl(e.type)),e)}function bt(e,t,n,r){if(50<ti)throw ti=0,Yo=null,Error(o(185));Er(e,n,r),((le&2)===0||e!==Fe)&&(e===Fe&&((le&2)===0&&(ts|=n),Me===4&&Cn(e,Qe)),ft(e,r),n===1&&le===0&&(t.mode&1)===0&&(pr=Re()+500,Ii&&xn()))}function ft(e,t){var n=e.callbackNode;$c(e,t);var r=mi(e,e===Fe?Qe:0);if(r===0)n!==null&&Ol(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ol(n),t===1)e.tag===0?Wd(Wu.bind(null,e)):Pa(Wu.bind(null,e)),Ud(function(){(le&6)===0&&xn()}),n=null;else{switch(Ml(r)){case 1:n=js;break;case 4:n=Il;break;case 16:n=di;break;case 536870912:n=Al;break;default:n=di}n=Zu(n,Qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qu(e,t){if(ss=-1,os=0,(le&6)!==0)throw Error(o(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=mi(e,e===Fe?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ls(e,r);else{t=r;var i=le;le|=2;var s=qu();(Fe!==e||Qe!==t)&&(sn=null,pr=Re()+500,Vn(e,t));do try{pf();break}catch(f){$u(e,f)}while(!0);po(),es.current=s,le=i,Le!==null?t=0:(Fe=null,Qe=0,t=Me)}if(t!==0){if(t===2&&(i=Ts(e),i!==0&&(r=i,t=Go(e,i))),t===1)throw n=Zr,Vn(e,0),Cn(e,r),ft(e,Re()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!df(i)&&(t=ls(e,r),t===2&&(s=Ts(e),s!==0&&(r=s,t=Go(e,s))),t===1))throw n=Zr,Vn(e,0),Cn(e,r),ft(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:Hn(e,dt,sn);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=qo+500-Re(),10<t)){if(mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=to(Hn.bind(null,e,dt,sn),t);break}Hn(e,dt,sn);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Pt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cf(r/1960))-r,10<r){e.timeoutHandle=to(Hn.bind(null,e,dt,sn),r);break}Hn(e,dt,sn);break;case 5:Hn(e,dt,sn);break;default:throw Error(o(329))}}}return ft(e,Re()),e.callbackNode===n?Qu.bind(null,e):null}function Go(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=ls(e,t),e!==2&&(t=dt,dt=n,t!==null&&Xo(t)),e}function Xo(e){dt===null?dt=e:dt.push.apply(dt,e)}function df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~$o,t&=~ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Wu(e){if((le&6)!==0)throw Error(o(327));hr();var t=mi(e,0);if((t&1)===0)return ft(e,Re()),null;var n=ls(e,t);if(e.tag!==0&&n===2){var r=Ts(e);r!==0&&(t=r,n=Go(e,r))}if(n===1)throw n=Zr,Vn(e,0),Cn(e,t),ft(e,Re()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,dt,sn),ft(e,Re()),null}function Jo(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(pr=Re()+500,Ii&&xn())}}function Un(e){Nn!==null&&Nn.tag===0&&(le&6)===0&&hr();var t=le;le|=1;var n=_t.transition,r=he;try{if(_t.transition=null,he=1,e)return e()}finally{he=r,_t.transition=n,le=t,(le&6)===0&&xn()}}function Zo(){vt=fr.current,we(fr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fd(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:ur(),we(at),we(Ye),ko();break;case 5:xo(r);break;case 4:ur();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:ho(r.type._context);break;case 22:case 23:Zo()}n=n.return}if(Fe=e,Le=e=jn(e.current,null),Qe=vt=t,Me=0,Zr=null,$o=ts=Fn=0,dt=ei=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Mn=null}return e}function $u(e,t){do{var n=Le;try{if(po(),Qi.current=Ki,Wi){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wi=!1}if(Bn=0,Be=be=je=null,qr=!1,Kr=0,Wo.current=null,n===null||n.return===null){Me=1,Zr=t,Le=null;break}e:{var s=e,a=n.return,f=n,p=t;if(t=Qe,f.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,N=f,E=N.tag;if((N.mode&1)===0&&(E===0||E===11||E===15)){var _=N.alternate;_?(N.updateQueue=_.updateQueue,N.memoizedState=_.memoizedState,N.lanes=_.lanes):(N.updateQueue=null,N.memoizedState=null)}var L=yu(a);if(L!==null){L.flags&=-257,vu(L,a,f,s,t),L.mode&1&&gu(s,x,t),t=L,p=x;var A=t.updateQueue;if(A===null){var M=new Set;M.add(p),t.updateQueue=M}else A.add(p);break e}else{if((t&1)===0){gu(s,x,t),el();break e}p=Error(o(426))}}else if(Ne&&f.mode&1){var Pe=yu(a);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),vu(Pe,a,f,s,t),co(cr(p,f));break e}}s=p=cr(p,f),Me!==4&&(Me=2),ei===null?ei=[s]:ei.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=hu(s,p,t);Ua(s,y);break e;case 1:f=p;var h=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_n===null||!_n.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=mu(s,f,t);Ua(s,C);break e}}s=s.return}while(s!==null)}Yu(n)}catch(U){t=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function qu(){var e=es.current;return es.current=Ki,e===null?Ki:e}function el(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(Fn&268435455)===0&&(ts&268435455)===0||Cn(Fe,Qe)}function ls(e,t){var n=le;le|=2;var r=qu();(Fe!==e||Qe!==t)&&(sn=null,Vn(e,t));do try{ff();break}catch(i){$u(e,i)}while(!0);if(po(),le=n,es.current=r,Le!==null)throw Error(o(261));return Fe=null,Qe=0,Me}function ff(){for(;Le!==null;)Ku(Le)}function pf(){for(;Le!==null&&!Mc();)Ku(Le)}function Ku(e){var t=Ju(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Yu(e):Le=t,Wo.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sf(n,t,vt),n!==null){Le=n;return}}else{if(n=of(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function Hn(e,t,n){var r=he,i=_t.transition;try{_t.transition=null,he=1,hf(e,t,n,r)}finally{_t.transition=i,he=r}return null}function hf(e,t,n,r){do hr();while(Nn!==null);if((le&6)!==0)throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(qc(e,s),e===Fe&&(Le=Fe=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||rs||(rs=!0,Zu(di,function(){return hr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=_t.transition,_t.transition=null;var a=he;he=1;var f=le;le|=4,Wo.current=null,af(e,n),Bu(n,e),Od(Zs),vi=!!Js,Zs=Js=null,e.current=n,uf(n),Dc(),le=f,he=a,_t.transition=s}else e.current=n;if(rs&&(rs=!1,Nn=e,is=i),s=e.pendingLanes,s===0&&(_n=null),Uc(n.stateNode),ft(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ns)throw ns=!1,e=Ko,Ko=null,e;return(is&1)!==0&&e.tag!==0&&hr(),s=e.pendingLanes,(s&1)!==0?e===Yo?ti++:(ti=0,Yo=e):ti=0,xn(),null}function hr(){if(Nn!==null){var e=Ml(is),t=_t.transition,n=he;try{if(_t.transition=null,he=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,is=0,(le&6)!==0)throw Error(o(331));var i=le;for(le|=4,I=e.current;I!==null;){var s=I,a=s.child;if((I.flags&16)!==0){var f=s.deletions;if(f!==null){for(var p=0;p<f.length;p++){var x=f[p];for(I=x;I!==null;){var N=I;switch(N.tag){case 0:case 11:case 15:Jr(8,N,s)}var E=N.child;if(E!==null)E.return=N,I=E;else for(;I!==null;){N=I;var _=N.sibling,L=N.return;if(Iu(N),N===x){I=null;break}if(_!==null){_.return=L,I=_;break}I=L}}}var A=s.alternate;if(A!==null){var M=A.child;if(M!==null){A.child=null;do{var Pe=M.sibling;M.sibling=null,M=Pe}while(M!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,I=a;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,I=y;break e}I=s.return}}var h=e.current;for(I=h;I!==null;){a=I;var v=a.child;if((a.subtreeFlags&2064)!==0&&v!==null)v.return=a,I=v;else e:for(a=h;I!==null;){if(f=I,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Zi(9,f)}}catch(U){Te(f,f.return,U)}if(f===a){I=null;break e}var C=f.sibling;if(C!==null){C.return=f.return,I=C;break e}I=f.return}}if(le=i,xn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(fi,e)}catch{}r=!0}return r}finally{he=n,_t.transition=t}}return!1}function Gu(e,t,n){t=cr(n,t),t=hu(e,t,1),e=kn(e,t,1),t=it(),e!==null&&(Er(e,1,t),ft(e,t))}function Te(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=cr(n,e),e=mu(t,e,1),t=kn(t,e,1),e=it(),t!==null&&(Er(t,1,e),ft(t,e));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Qe&n)===n&&(Me===4||Me===3&&(Qe&130023424)===Qe&&500>Re()-qo?Vn(e,0):$o|=n),ft(e,t)}function Xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=hi,hi<<=1,(hi&130023424)===0&&(hi=4194304)));var n=it();e=tn(e,t),e!==null&&(Er(e,t,n),ft(e,n))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function yf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Xu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ct=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ct=!1,rf(e,t,n);ct=(e.flags&131072)!==0}else ct=!1,Ne&&(t.flags&1048576)!==0&&za(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xi(e,t),e=t.pendingProps;var i=nr(t,Ye.current);ar(t,n),i=No(null,t,r,e,i,n);var s=Eo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(s=!0,Oi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yo(t),i.updater=Yi,t.stateNode=i,i._reactInternals=t,zo(t,r,e,n),t=Ao(null,t,r,!0,s,n)):(t.tag=0,Ne&&s&&oo(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xf(r),e=Ot(r,e),i){case 0:t=Io(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=wu(null,t,r,Ot(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Io(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Nu(e,t,r,i,n);case 3:e:{if(Eu(t),e===null)throw Error(o(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Fa(e,t),Vi(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=cr(Error(o(423)),t),t=Cu(e,t,r,n,i);break e}else if(r!==i){i=cr(Error(o(424)),t),t=Cu(e,t,r,n,i);break e}else for(yt=gn(t.stateNode.containerInfo.firstChild),gt=t,Ne=!0,Lt=null,n=Da(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){t=rn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Ha(t),e===null&&uo(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,eo(r,i)?a=null:s!==null&&eo(r,s)&&(t.flags|=32),_u(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&uo(t),null;case 13:return ju(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),xu(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ve(Bi,r._currentValue),r._currentValue=a,s!==null)if(zt(s.value,a)){if(s.children===i.children&&!at.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var f=s.dependencies;if(f!==null){a=s.child;for(var p=f.firstContext;p!==null;){if(p.context===r){if(s.tag===1){p=nn(-1,n&-n),p.tag=2;var x=s.updateQueue;if(x!==null){x=x.shared;var N=x.pending;N===null?p.next=p:(p.next=N.next,N.next=p),x.pending=p}}s.lanes|=n,p=s.alternate,p!==null&&(p.lanes|=n),mo(s.return,n,t),f.lanes|=n;break}p=p.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(o(341));a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),mo(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=kt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),wu(e,t,r,i,n);case 15:return ku(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Xi(e,t),t.tag=1,ut(r)?(e=!0,Oi(t)):e=!1,ar(t,n),fu(t,r,i),zo(t,r,i,n),Ao(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return Su(e,t,n)}throw Error(o(156,t.tag))};function Zu(e,t){return Ll(e,t)}function vf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,r){return new vf(e,t,n,r)}function tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tt)return 11;if(e===qe)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")tl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ze:return Qn(n.children,i,s,t);case ot:a=8,i|=8;break;case et:return e=Nt(12,n,t,i|2),e.elementType=et,e.lanes=s,e;case De:return e=Nt(13,n,t,i),e.elementType=De,e.lanes=s,e;case Se:return e=Nt(19,n,t,i),e.elementType=Se,e.lanes=s,e;case ye:return us(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case We:a=10;break e;case $e:a=9;break e;case tt:a=11;break e;case qe:a=14;break e;case _e:a=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Nt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Qn(e,t,n,r){return e=Nt(7,e,r,t),e.lanes=n,e}function us(e,t,n,r){return e=Nt(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function il(e,t,n,r,i,s,a,f,p){return e=new wf(e,t,n,f,p),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(s),e}function kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return vn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(ut(n))return Ta(e,n,t)}return t}function tc(e,t,n,r,i,s,a,f,p){return e=il(n,r,!0,e,i,s,a,f,p),e.context=ec(null),n=e.current,r=it(),i=En(n),s=nn(r,i),s.callback=t??null,kn(n,s,i),e.current.lanes=i,Er(e,i,r),ft(e,r),e}function cs(e,t,n,r){var i=t.current,s=it(),a=En(i);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,a),e!==null&&(bt(e,i,a,s),Ui(e,i,a)),a}function ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sl(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function Sf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ol(e){this._internalRoot=e}fs.prototype.render=ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));cs(e,t,null,null)},fs.prototype.unmount=ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){cs(null,e,null,null)}),t[Xt]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Hl(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function _f(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var x=ds(a);s.call(x)}}var a=tc(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=a,e[Xt]=a.current,Br(e.nodeType===8?e.parentNode:e),Un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var f=r;r=function(){var x=ds(p);f.call(x)}}var p=il(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=p,e[Xt]=p.current,Br(e.nodeType===8?e.parentNode:e),Un(function(){cs(t,p,n,r)}),p}function hs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var f=i;i=function(){var p=ds(a);f.call(p)}}cs(t,a,e,i)}else a=_f(n,t,e,i,r);return ds(a)}Dl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Ps(t,n|1),ft(t,Re()),(le&6)===0&&(pr=Re()+500,xn()))}break;case 13:Un(function(){var r=tn(e,1);if(r!==null){var i=it();bt(r,e,1,i)}}),sl(e,1)}},zs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=it();bt(t,e,134217728,n)}sl(e,134217728)}},Bl=function(e){if(e.tag===13){var t=En(e),n=tn(e,t);if(n!==null){var r=it();bt(n,e,t,r)}sl(e,t)}},Fl=function(){return he},Ul=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},_r=function(e,t,n){switch(t){case"input":if(on(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zi(r);if(!i)throw Error(o(90));oi(r),on(r,i)}}}break;case"textarea":Wn(e,n);break;case"select":t=n.value,t!=null&&jt(e,!!n.multiple,t,!1)}},H=Jo,P=Un;var Nf={usingClientEntryPoint:!1,Events:[Vr,er,zi,B,W,Jo]},ni={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ef={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pl(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||Sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{fi=ms.inject(Ef),Bt=ms}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf,pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(t))throw Error(o(200));return kf(e,t,null,n)},pt.createRoot=function(e,t){if(!ll(e))throw Error(o(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=il(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Br(e.nodeType===8?e.parentNode:e),new ol(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Pl(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Un(e)},pt.hydrate=function(e,t,n){if(!ps(t))throw Error(o(200));return hs(null,e,t,!0,n)},pt.hydrateRoot=function(e,t,n){if(!ll(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tc(t,null,e,1,n??null,i,!1,s,a),e[Xt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fs(t)},pt.render=function(e,t,n){if(!ps(t))throw Error(o(200));return hs(null,e,t,!1,n)},pt.unmountComponentAtNode=function(e){if(!ps(e))throw Error(o(40));return e._reactRootContainer?(Un(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1},pt.unstable_batchedUpdates=Jo,pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ps(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return hs(e,t,n,!1,r)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var fc;function If(){if(fc)return cl.exports;fc=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(l){console.error(l)}}return u(),cl.exports=Of(),cl.exports}var pc;function Af(){if(pc)return gs;pc=1;var u=If();return gs.createRoot=u.createRoot,gs.hydrateRoot=u.hydrateRoot,gs}var bf=Af();const Mf=xc(bf),Wt=Object.create(null);Wt.open="0";Wt.close="1";Wt.ping="2";Wt.pong="3";Wt.message="4";Wt.upgrade="5";Wt.noop="6";const xs=Object.create(null);Object.keys(Wt).forEach(u=>{xs[Wt[u]]=u});const gl={type:"error",data:"parser error"},wc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",kc=typeof ArrayBuffer=="function",Sc=u=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(u):u&&u.buffer instanceof ArrayBuffer,_l=({type:u,data:l},o,c)=>wc&&l instanceof Blob?o?c(l):hc(l,c):kc&&(l instanceof ArrayBuffer||Sc(l))?o?c(l):hc(new Blob([l]),c):c(Wt[u]+(l||"")),hc=(u,l)=>{const o=new FileReader;return o.onload=function(){const c=o.result.split(",")[1];l("b"+(c||""))},o.readAsDataURL(u)};function mc(u){return u instanceof Uint8Array?u:u instanceof ArrayBuffer?new Uint8Array(u):new Uint8Array(u.buffer,u.byteOffset,u.byteLength)}let pl;function Df(u,l){if(wc&&u.data instanceof Blob)return u.data.arrayBuffer().then(mc).then(l);if(kc&&(u.data instanceof ArrayBuffer||Sc(u.data)))return l(mc(u.data));_l(u,!1,o=>{pl||(pl=new TextEncoder),l(pl.encode(o))})}const gc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",si=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let u=0;u<gc.length;u++)si[gc.charCodeAt(u)]=u;const Bf=u=>{let l=u.length*.75,o=u.length,c,m=0,k,z,V,b;u[u.length-1]==="="&&(l--,u[u.length-2]==="="&&l--);const fe=new ArrayBuffer(l),ne=new Uint8Array(fe);for(c=0;c<o;c+=4)k=si[u.charCodeAt(c)],z=si[u.charCodeAt(c+1)],V=si[u.charCodeAt(c+2)],b=si[u.charCodeAt(c+3)],ne[m++]=k<<2|z>>4,ne[m++]=(z&15)<<4|V>>2,ne[m++]=(V&3)<<6|b&63;return fe},Ff=typeof ArrayBuffer=="function",Nl=(u,l)=>{if(typeof u!="string")return{type:"message",data:_c(u,l)};const o=u.charAt(0);return o==="b"?{type:"message",data:Uf(u.substring(1),l)}:xs[o]?u.length>1?{type:xs[o],data:u.substring(1)}:{type:xs[o]}:gl},Uf=(u,l)=>{if(Ff){const o=Bf(u);return _c(o,l)}else return{base64:!0,data:u}},_c=(u,l)=>{switch(l){case"blob":return u instanceof Blob?u:new Blob([u]);case"arraybuffer":default:return u instanceof ArrayBuffer?u:u.buffer}},Nc="",Vf=(u,l)=>{const o=u.length,c=new Array(o);let m=0;u.forEach((k,z)=>{_l(k,!1,V=>{c[z]=V,++m===o&&l(c.join(Nc))})})},Hf=(u,l)=>{const o=u.split(Nc),c=[];for(let m=0;m<o.length;m++){const k=Nl(o[m],l);if(c.push(k),k.type==="error")break}return c};function Qf(){return new TransformStream({transform(u,l){Df(u,o=>{const c=o.length;let m;if(c<126)m=new Uint8Array(1),new DataView(m.buffer).setUint8(0,c);else if(c<65536){m=new Uint8Array(3);const k=new DataView(m.buffer);k.setUint8(0,126),k.setUint16(1,c)}else{m=new Uint8Array(9);const k=new DataView(m.buffer);k.setUint8(0,127),k.setBigUint64(1,BigInt(c))}u.data&&typeof u.data!="string"&&(m[0]|=128),l.enqueue(m),l.enqueue(o)})}})}let hl;function ys(u){return u.reduce((l,o)=>l+o.length,0)}function vs(u,l){if(u[0].length===l)return u.shift();const o=new Uint8Array(l);let c=0;for(let m=0;m<l;m++)o[m]=u[0][c++],c===u[0].length&&(u.shift(),c=0);return u.length&&c<u[0].length&&(u[0]=u[0].slice(c)),o}function Wf(u,l){hl||(hl=new TextDecoder);const o=[];let c=0,m=-1,k=!1;return new TransformStream({transform(z,V){for(o.push(z);;){if(c===0){if(ys(o)<1)break;const b=vs(o,1);k=(b[0]&128)===128,m=b[0]&127,m<126?c=3:m===126?c=1:c=2}else if(c===1){if(ys(o)<2)break;const b=vs(o,2);m=new DataView(b.buffer,b.byteOffset,b.length).getUint16(0),c=3}else if(c===2){if(ys(o)<8)break;const b=vs(o,8),fe=new DataView(b.buffer,b.byteOffset,b.length),ne=fe.getUint32(0);if(ne>Math.pow(2,21)-1){V.enqueue(gl);break}m=ne*Math.pow(2,32)+fe.getUint32(4),c=3}else{if(ys(o)<m)break;const b=vs(o,m);V.enqueue(Nl(k?b:hl.decode(b),l)),c=0}if(m===0||m>u){V.enqueue(gl);break}}}})}const Ec=4;function Oe(u){if(u)return $f(u)}function $f(u){for(var l in Oe.prototype)u[l]=Oe.prototype[l];return u}Oe.prototype.on=Oe.prototype.addEventListener=function(u,l){return this._callbacks=this._callbacks||{},(this._callbacks["$"+u]=this._callbacks["$"+u]||[]).push(l),this};Oe.prototype.once=function(u,l){function o(){this.off(u,o),l.apply(this,arguments)}return o.fn=l,this.on(u,o),this};Oe.prototype.off=Oe.prototype.removeListener=Oe.prototype.removeAllListeners=Oe.prototype.removeEventListener=function(u,l){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var o=this._callbacks["$"+u];if(!o)return this;if(arguments.length==1)return delete this._callbacks["$"+u],this;for(var c,m=0;m<o.length;m++)if(c=o[m],c===l||c.fn===l){o.splice(m,1);break}return o.length===0&&delete this._callbacks["$"+u],this};Oe.prototype.emit=function(u){this._callbacks=this._callbacks||{};for(var l=new Array(arguments.length-1),o=this._callbacks["$"+u],c=1;c<arguments.length;c++)l[c-1]=arguments[c];if(o){o=o.slice(0);for(var c=0,m=o.length;c<m;++c)o[c].apply(this,l)}return this};Oe.prototype.emitReserved=Oe.prototype.emit;Oe.prototype.listeners=function(u){return this._callbacks=this._callbacks||{},this._callbacks["$"+u]||[]};Oe.prototype.hasListeners=function(u){return!!this.listeners(u).length};const _s=typeof Promise=="function"&&typeof Promise.resolve=="function"?l=>Promise.resolve().then(l):(l,o)=>o(l,0),Et=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),qf="arraybuffer";function Cc(u,...l){return l.reduce((o,c)=>(u.hasOwnProperty(c)&&(o[c]=u[c]),o),{})}const Kf=Et.setTimeout,Yf=Et.clearTimeout;function Ns(u,l){l.useNativeTimers?(u.setTimeoutFn=Kf.bind(Et),u.clearTimeoutFn=Yf.bind(Et)):(u.setTimeoutFn=Et.setTimeout.bind(Et),u.clearTimeoutFn=Et.clearTimeout.bind(Et))}const Gf=1.33;function Xf(u){return typeof u=="string"?Jf(u):Math.ceil((u.byteLength||u.size)*Gf)}function Jf(u){let l=0,o=0;for(let c=0,m=u.length;c<m;c++)l=u.charCodeAt(c),l<128?o+=1:l<2048?o+=2:l<55296||l>=57344?o+=3:(c++,o+=4);return o}function jc(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Zf(u){let l="";for(let o in u)u.hasOwnProperty(o)&&(l.length&&(l+="&"),l+=encodeURIComponent(o)+"="+encodeURIComponent(u[o]));return l}function ep(u){let l={},o=u.split("&");for(let c=0,m=o.length;c<m;c++){let k=o[c].split("=");l[decodeURIComponent(k[0])]=decodeURIComponent(k[1])}return l}class tp extends Error{constructor(l,o,c){super(l),this.description=o,this.context=c,this.type="TransportError"}}class El extends Oe{constructor(l){super(),this.writable=!1,Ns(this,l),this.opts=l,this.query=l.query,this.socket=l.socket,this.supportsBinary=!l.forceBase64}onError(l,o,c){return super.emitReserved("error",new tp(l,o,c)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(l){this.readyState==="open"&&this.write(l)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(l){const o=Nl(l,this.socket.binaryType);this.onPacket(o)}onPacket(l){super.emitReserved("packet",l)}onClose(l){this.readyState="closed",super.emitReserved("close",l)}pause(l){}createUri(l,o={}){return l+"://"+this._hostname()+this._port()+this.opts.path+this._query(o)}_hostname(){const l=this.opts.hostname;return l.indexOf(":")===-1?l:"["+l+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(l){const o=Zf(l);return o.length?"?"+o:""}}class np extends El{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(l){this.readyState="pausing";const o=()=>{this.readyState="paused",l()};if(this._polling||!this.writable){let c=0;this._polling&&(c++,this.once("pollComplete",function(){--c||o()})),this.writable||(c++,this.once("drain",function(){--c||o()}))}else o()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(l){const o=c=>{if(this.readyState==="opening"&&c.type==="open"&&this.onOpen(),c.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(c)};Hf(l,this.socket.binaryType).forEach(o),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const l=()=>{this.write([{type:"close"}])};this.readyState==="open"?l():this.once("open",l)}write(l){this.writable=!1,Vf(l,o=>{this.doWrite(o,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const l=this.opts.secure?"https":"http",o=this.query||{};return this.opts.timestampRequests!==!1&&(o[this.opts.timestampParam]=jc()),!this.supportsBinary&&!o.sid&&(o.b64=1),this.createUri(l,o)}}let Tc=!1;try{Tc=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const rp=Tc;function ip(){}class sp extends np{constructor(l){if(super(l),typeof location<"u"){const o=location.protocol==="https:";let c=location.port;c||(c=o?"443":"80"),this.xd=typeof location<"u"&&l.hostname!==location.hostname||c!==l.port}}doWrite(l,o){const c=this.request({method:"POST",data:l});c.on("success",o),c.on("error",(m,k)=>{this.onError("xhr post error",m,k)})}doPoll(){const l=this.request();l.on("data",this.onData.bind(this)),l.on("error",(o,c)=>{this.onError("xhr poll error",o,c)}),this.pollXhr=l}}class Qt extends Oe{constructor(l,o,c){super(),this.createRequest=l,Ns(this,c),this._opts=c,this._method=c.method||"GET",this._uri=o,this._data=c.data!==void 0?c.data:null,this._create()}_create(){var l;const o=Cc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");o.xdomain=!!this._opts.xd;const c=this._xhr=this.createRequest(o);try{c.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){c.setDisableHeaderCheck&&c.setDisableHeaderCheck(!0);for(let m in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(m)&&c.setRequestHeader(m,this._opts.extraHeaders[m])}}catch{}if(this._method==="POST")try{c.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{c.setRequestHeader("Accept","*/*")}catch{}(l=this._opts.cookieJar)===null||l===void 0||l.addCookies(c),"withCredentials"in c&&(c.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(c.timeout=this._opts.requestTimeout),c.onreadystatechange=()=>{var m;c.readyState===3&&((m=this._opts.cookieJar)===null||m===void 0||m.parseCookies(c.getResponseHeader("set-cookie"))),c.readyState===4&&(c.status===200||c.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof c.status=="number"?c.status:0)},0))},c.send(this._data)}catch(m){this.setTimeoutFn(()=>{this._onError(m)},0);return}typeof document<"u"&&(this._index=Qt.requestsCount++,Qt.requests[this._index]=this)}_onError(l){this.emitReserved("error",l,this._xhr),this._cleanup(!0)}_cleanup(l){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ip,l)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Qt.requests[this._index],this._xhr=null}}_onLoad(){const l=this._xhr.responseText;l!==null&&(this.emitReserved("data",l),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Qt.requestsCount=0;Qt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",yc);else if(typeof addEventListener=="function"){const u="onpagehide"in Et?"pagehide":"unload";addEventListener(u,yc,!1)}}function yc(){for(let u in Qt.requests)Qt.requests.hasOwnProperty(u)&&Qt.requests[u].abort()}const op=(function(){const u=Rc({xdomain:!1});return u&&u.responseType!==null})();class lp extends sp{constructor(l){super(l);const o=l&&l.forceBase64;this.supportsBinary=op&&!o}request(l={}){return Object.assign(l,{xd:this.xd},this.opts),new Qt(Rc,this.uri(),l)}}function Rc(u){const l=u.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!l||rp))return new XMLHttpRequest}catch{}if(!l)try{return new Et[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Pc=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ap extends El{get name(){return"websocket"}doOpen(){const l=this.uri(),o=this.opts.protocols,c=Pc?{}:Cc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(c.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(l,o,c)}catch(m){return this.emitReserved("error",m)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=l=>this.onClose({description:"websocket connection closed",context:l}),this.ws.onmessage=l=>this.onData(l.data),this.ws.onerror=l=>this.onError("websocket error",l)}write(l){this.writable=!1;for(let o=0;o<l.length;o++){const c=l[o],m=o===l.length-1;_l(c,this.supportsBinary,k=>{try{this.doWrite(c,k)}catch{}m&&_s(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const l=this.opts.secure?"wss":"ws",o=this.query||{};return this.opts.timestampRequests&&(o[this.opts.timestampParam]=jc()),this.supportsBinary||(o.b64=1),this.createUri(l,o)}}const ml=Et.WebSocket||Et.MozWebSocket;class up extends ap{createSocket(l,o,c){return Pc?new ml(l,o,c):o?new ml(l,o):new ml(l)}doWrite(l,o){this.ws.send(o)}}class cp extends El{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(l){return this.emitReserved("error",l)}this._transport.closed.then(()=>{this.onClose()}).catch(l=>{this.onError("webtransport error",l)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(l=>{const o=Wf(Number.MAX_SAFE_INTEGER,this.socket.binaryType),c=l.readable.pipeThrough(o).getReader(),m=Qf();m.readable.pipeTo(l.writable),this._writer=m.writable.getWriter();const k=()=>{c.read().then(({done:V,value:b})=>{V||(this.onPacket(b),k())}).catch(V=>{})};k();const z={type:"open"};this.query.sid&&(z.data=`{"sid":"${this.query.sid}"}`),this._writer.write(z).then(()=>this.onOpen())})})}write(l){this.writable=!1;for(let o=0;o<l.length;o++){const c=l[o],m=o===l.length-1;this._writer.write(c).then(()=>{m&&_s(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var l;(l=this._transport)===null||l===void 0||l.close()}}const dp={websocket:up,webtransport:cp,polling:lp},fp=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,pp=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function yl(u){if(u.length>8e3)throw"URI too long";const l=u,o=u.indexOf("["),c=u.indexOf("]");o!=-1&&c!=-1&&(u=u.substring(0,o)+u.substring(o,c).replace(/:/g,";")+u.substring(c,u.length));let m=fp.exec(u||""),k={},z=14;for(;z--;)k[pp[z]]=m[z]||"";return o!=-1&&c!=-1&&(k.source=l,k.host=k.host.substring(1,k.host.length-1).replace(/;/g,":"),k.authority=k.authority.replace("[","").replace("]","").replace(/;/g,":"),k.ipv6uri=!0),k.pathNames=hp(k,k.path),k.queryKey=mp(k,k.query),k}function hp(u,l){const o=/\/{2,9}/g,c=l.replace(o,"/").split("/");return(l.slice(0,1)=="/"||l.length===0)&&c.splice(0,1),l.slice(-1)=="/"&&c.splice(c.length-1,1),c}function mp(u,l){const o={};return l.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(c,m,k){m&&(o[m]=k)}),o}const vl=typeof addEventListener=="function"&&typeof removeEventListener=="function",ws=[];vl&&addEventListener("offline",()=>{ws.forEach(u=>u())},!1);class Rn extends Oe{constructor(l,o){if(super(),this.binaryType=qf,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,l&&typeof l=="object"&&(o=l,l=null),l){const c=yl(l);o.hostname=c.host,o.secure=c.protocol==="https"||c.protocol==="wss",o.port=c.port,c.query&&(o.query=c.query)}else o.host&&(o.hostname=yl(o.host).host);Ns(this,o),this.secure=o.secure!=null?o.secure:typeof location<"u"&&location.protocol==="https:",o.hostname&&!o.port&&(o.port=this.secure?"443":"80"),this.hostname=o.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=o.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},o.transports.forEach(c=>{const m=c.prototype.name;this.transports.push(m),this._transportsByName[m]=c}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},o),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ep(this.opts.query)),vl&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ws.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(l){const o=Object.assign({},this.opts.query);o.EIO=Ec,o.transport=l,this.id&&(o.sid=this.id);const c=Object.assign({},this.opts,{query:o,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[l]);return new this._transportsByName[l](c)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const l=this.opts.rememberUpgrade&&Rn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const o=this.createTransport(l);o.open(),this.setTransport(o)}setTransport(l){this.transport&&this.transport.removeAllListeners(),this.transport=l,l.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",o=>this._onClose("transport close",o))}onOpen(){this.readyState="open",Rn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(l){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",l),this.emitReserved("heartbeat"),l.type){case"open":this.onHandshake(JSON.parse(l.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const o=new Error("server error");o.code=l.data,this._onError(o);break;case"message":this.emitReserved("data",l.data),this.emitReserved("message",l.data);break}}onHandshake(l){this.emitReserved("handshake",l),this.id=l.sid,this.transport.query.sid=l.sid,this._pingInterval=l.pingInterval,this._pingTimeout=l.pingTimeout,this._maxPayload=l.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const l=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+l,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},l),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const l=this._getWritablePackets();this.transport.send(l),this._prevBufferLen=l.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let o=1;for(let c=0;c<this.writeBuffer.length;c++){const m=this.writeBuffer[c].data;if(m&&(o+=Xf(m)),c>0&&o>this._maxPayload)return this.writeBuffer.slice(0,c);o+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const l=Date.now()>this._pingTimeoutTime;return l&&(this._pingTimeoutTime=0,_s(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),l}write(l,o,c){return this._sendPacket("message",l,o,c),this}send(l,o,c){return this._sendPacket("message",l,o,c),this}_sendPacket(l,o,c,m){if(typeof o=="function"&&(m=o,o=void 0),typeof c=="function"&&(m=c,c=null),this.readyState==="closing"||this.readyState==="closed")return;c=c||{},c.compress=c.compress!==!1;const k={type:l,data:o,options:c};this.emitReserved("packetCreate",k),this.writeBuffer.push(k),m&&this.once("flush",m),this.flush()}close(){const l=()=>{this._onClose("forced close"),this.transport.close()},o=()=>{this.off("upgrade",o),this.off("upgradeError",o),l()},c=()=>{this.once("upgrade",o),this.once("upgradeError",o)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?c():l()}):this.upgrading?c():l()),this}_onError(l){if(Rn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",l),this._onClose("transport error",l)}_onClose(l,o){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),vl&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const c=ws.indexOf(this._offlineEventListener);c!==-1&&ws.splice(c,1)}this.readyState="closed",this.id=null,this.emitReserved("close",l,o),this.writeBuffer=[],this._prevBufferLen=0}}}Rn.protocol=Ec;class gp extends Rn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let l=0;l<this._upgrades.length;l++)this._probe(this._upgrades[l])}_probe(l){let o=this.createTransport(l),c=!1;Rn.priorWebsocketSuccess=!1;const m=()=>{c||(o.send([{type:"ping",data:"probe"}]),o.once("packet",re=>{if(!c)if(re.type==="pong"&&re.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",o),!o)return;Rn.priorWebsocketSuccess=o.name==="websocket",this.transport.pause(()=>{c||this.readyState!=="closed"&&(ne(),this.setTransport(o),o.send([{type:"upgrade"}]),this.emitReserved("upgrade",o),o=null,this.upgrading=!1,this.flush())})}else{const ie=new Error("probe error");ie.transport=o.name,this.emitReserved("upgradeError",ie)}}))};function k(){c||(c=!0,ne(),o.close(),o=null)}const z=re=>{const ie=new Error("probe error: "+re);ie.transport=o.name,k(),this.emitReserved("upgradeError",ie)};function V(){z("transport closed")}function b(){z("socket closed")}function fe(re){o&&re.name!==o.name&&k()}const ne=()=>{o.removeListener("open",m),o.removeListener("error",z),o.removeListener("close",V),this.off("close",b),this.off("upgrading",fe)};o.once("open",m),o.once("error",z),o.once("close",V),this.once("close",b),this.once("upgrading",fe),this._upgrades.indexOf("webtransport")!==-1&&l!=="webtransport"?this.setTimeoutFn(()=>{c||o.open()},200):o.open()}onHandshake(l){this._upgrades=this._filterUpgrades(l.upgrades),super.onHandshake(l)}_filterUpgrades(l){const o=[];for(let c=0;c<l.length;c++)~this.transports.indexOf(l[c])&&o.push(l[c]);return o}}let yp=class extends gp{constructor(l,o={}){const c=typeof l=="object"?l:o;(!c.transports||c.transports&&typeof c.transports[0]=="string")&&(c.transports=(c.transports||["polling","websocket","webtransport"]).map(m=>dp[m]).filter(m=>!!m)),super(l,c)}};function vp(u,l="",o){let c=u;o=o||typeof location<"u"&&location,u==null&&(u=o.protocol+"//"+o.host),typeof u=="string"&&(u.charAt(0)==="/"&&(u.charAt(1)==="/"?u=o.protocol+u:u=o.host+u),/^(https?|wss?):\/\//.test(u)||(typeof o<"u"?u=o.protocol+"//"+u:u="https://"+u),c=yl(u)),c.port||(/^(http|ws)$/.test(c.protocol)?c.port="80":/^(http|ws)s$/.test(c.protocol)&&(c.port="443")),c.path=c.path||"/";const k=c.host.indexOf(":")!==-1?"["+c.host+"]":c.host;return c.id=c.protocol+"://"+k+":"+c.port+l,c.href=c.protocol+"://"+k+(o&&o.port===c.port?"":":"+c.port),c}const xp=typeof ArrayBuffer=="function",wp=u=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(u):u.buffer instanceof ArrayBuffer,zc=Object.prototype.toString,kp=typeof Blob=="function"||typeof Blob<"u"&&zc.call(Blob)==="[object BlobConstructor]",Sp=typeof File=="function"||typeof File<"u"&&zc.call(File)==="[object FileConstructor]";function Cl(u){return xp&&(u instanceof ArrayBuffer||wp(u))||kp&&u instanceof Blob||Sp&&u instanceof File}function ks(u,l){if(!u||typeof u!="object")return!1;if(Array.isArray(u)){for(let o=0,c=u.length;o<c;o++)if(ks(u[o]))return!0;return!1}if(Cl(u))return!0;if(u.toJSON&&typeof u.toJSON=="function"&&arguments.length===1)return ks(u.toJSON(),!0);for(const o in u)if(Object.prototype.hasOwnProperty.call(u,o)&&ks(u[o]))return!0;return!1}function _p(u){const l=[],o=u.data,c=u;return c.data=xl(o,l),c.attachments=l.length,{packet:c,buffers:l}}function xl(u,l){if(!u)return u;if(Cl(u)){const o={_placeholder:!0,num:l.length};return l.push(u),o}else if(Array.isArray(u)){const o=new Array(u.length);for(let c=0;c<u.length;c++)o[c]=xl(u[c],l);return o}else if(typeof u=="object"&&!(u instanceof Date)){const o={};for(const c in u)Object.prototype.hasOwnProperty.call(u,c)&&(o[c]=xl(u[c],l));return o}return u}function Np(u,l){return u.data=wl(u.data,l),delete u.attachments,u}function wl(u,l){if(!u)return u;if(u&&u._placeholder===!0){if(typeof u.num=="number"&&u.num>=0&&u.num<l.length)return l[u.num];throw new Error("illegal attachments")}else if(Array.isArray(u))for(let o=0;o<u.length;o++)u[o]=wl(u[o],l);else if(typeof u=="object")for(const o in u)Object.prototype.hasOwnProperty.call(u,o)&&(u[o]=wl(u[o],l));return u}const Ep=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var se;(function(u){u[u.CONNECT=0]="CONNECT",u[u.DISCONNECT=1]="DISCONNECT",u[u.EVENT=2]="EVENT",u[u.ACK=3]="ACK",u[u.CONNECT_ERROR=4]="CONNECT_ERROR",u[u.BINARY_EVENT=5]="BINARY_EVENT",u[u.BINARY_ACK=6]="BINARY_ACK"})(se||(se={}));class Cp{constructor(l){this.replacer=l}encode(l){return(l.type===se.EVENT||l.type===se.ACK)&&ks(l)?this.encodeAsBinary({type:l.type===se.EVENT?se.BINARY_EVENT:se.BINARY_ACK,nsp:l.nsp,data:l.data,id:l.id}):[this.encodeAsString(l)]}encodeAsString(l){let o=""+l.type;return(l.type===se.BINARY_EVENT||l.type===se.BINARY_ACK)&&(o+=l.attachments+"-"),l.nsp&&l.nsp!=="/"&&(o+=l.nsp+","),l.id!=null&&(o+=l.id),l.data!=null&&(o+=JSON.stringify(l.data,this.replacer)),o}encodeAsBinary(l){const o=_p(l),c=this.encodeAsString(o.packet),m=o.buffers;return m.unshift(c),m}}class jl extends Oe{constructor(l){super(),this.reviver=l}add(l){let o;if(typeof l=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");o=this.decodeString(l);const c=o.type===se.BINARY_EVENT;c||o.type===se.BINARY_ACK?(o.type=c?se.EVENT:se.ACK,this.reconstructor=new jp(o),o.attachments===0&&super.emitReserved("decoded",o)):super.emitReserved("decoded",o)}else if(Cl(l)||l.base64)if(this.reconstructor)o=this.reconstructor.takeBinaryData(l),o&&(this.reconstructor=null,super.emitReserved("decoded",o));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+l)}decodeString(l){let o=0;const c={type:Number(l.charAt(0))};if(se[c.type]===void 0)throw new Error("unknown packet type "+c.type);if(c.type===se.BINARY_EVENT||c.type===se.BINARY_ACK){const k=o+1;for(;l.charAt(++o)!=="-"&&o!=l.length;);const z=l.substring(k,o);if(z!=Number(z)||l.charAt(o)!=="-")throw new Error("Illegal attachments");c.attachments=Number(z)}if(l.charAt(o+1)==="/"){const k=o+1;for(;++o&&!(l.charAt(o)===","||o===l.length););c.nsp=l.substring(k,o)}else c.nsp="/";const m=l.charAt(o+1);if(m!==""&&Number(m)==m){const k=o+1;for(;++o;){const z=l.charAt(o);if(z==null||Number(z)!=z){--o;break}if(o===l.length)break}c.id=Number(l.substring(k,o+1))}if(l.charAt(++o)){const k=this.tryParse(l.substr(o));if(jl.isPayloadValid(c.type,k))c.data=k;else throw new Error("invalid payload")}return c}tryParse(l){try{return JSON.parse(l,this.reviver)}catch{return!1}}static isPayloadValid(l,o){switch(l){case se.CONNECT:return vc(o);case se.DISCONNECT:return o===void 0;case se.CONNECT_ERROR:return typeof o=="string"||vc(o);case se.EVENT:case se.BINARY_EVENT:return Array.isArray(o)&&(typeof o[0]=="number"||typeof o[0]=="string"&&Ep.indexOf(o[0])===-1);case se.ACK:case se.BINARY_ACK:return Array.isArray(o)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class jp{constructor(l){this.packet=l,this.buffers=[],this.reconPack=l}takeBinaryData(l){if(this.buffers.push(l),this.buffers.length===this.reconPack.attachments){const o=Np(this.reconPack,this.buffers);return this.finishedReconstruction(),o}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function vc(u){return Object.prototype.toString.call(u)==="[object Object]"}const Tp=Object.freeze(Object.defineProperty({__proto__:null,Decoder:jl,Encoder:Cp,get PacketType(){return se}},Symbol.toStringTag,{value:"Module"}));function Mt(u,l,o){return u.on(l,o),function(){u.off(l,o)}}const Rp=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Lc extends Oe{constructor(l,o,c){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=l,this.nsp=o,c&&c.auth&&(this.auth=c.auth),this._opts=Object.assign({},c),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const l=this.io;this.subs=[Mt(l,"open",this.onopen.bind(this)),Mt(l,"packet",this.onpacket.bind(this)),Mt(l,"error",this.onerror.bind(this)),Mt(l,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...l){return l.unshift("message"),this.emit.apply(this,l),this}emit(l,...o){var c,m,k;if(Rp.hasOwnProperty(l))throw new Error('"'+l.toString()+'" is a reserved event name');if(o.unshift(l),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(o),this;const z={type:se.EVENT,data:o};if(z.options={},z.options.compress=this.flags.compress!==!1,typeof o[o.length-1]=="function"){const ne=this.ids++,re=o.pop();this._registerAckCallback(ne,re),z.id=ne}const V=(m=(c=this.io.engine)===null||c===void 0?void 0:c.transport)===null||m===void 0?void 0:m.writable,b=this.connected&&!(!((k=this.io.engine)===null||k===void 0)&&k._hasPingExpired());return this.flags.volatile&&!V||(b?(this.notifyOutgoingListeners(z),this.packet(z)):this.sendBuffer.push(z)),this.flags={},this}_registerAckCallback(l,o){var c;const m=(c=this.flags.timeout)!==null&&c!==void 0?c:this._opts.ackTimeout;if(m===void 0){this.acks[l]=o;return}const k=this.io.setTimeoutFn(()=>{delete this.acks[l];for(let V=0;V<this.sendBuffer.length;V++)this.sendBuffer[V].id===l&&this.sendBuffer.splice(V,1);o.call(this,new Error("operation has timed out"))},m),z=(...V)=>{this.io.clearTimeoutFn(k),o.apply(this,V)};z.withError=!0,this.acks[l]=z}emitWithAck(l,...o){return new Promise((c,m)=>{const k=(z,V)=>z?m(z):c(V);k.withError=!0,o.push(k),this.emit(l,...o)})}_addToQueue(l){let o;typeof l[l.length-1]=="function"&&(o=l.pop());const c={id:this._queueSeq++,tryCount:0,pending:!1,args:l,flags:Object.assign({fromQueue:!0},this.flags)};l.push((m,...k)=>(this._queue[0],m!==null?c.tryCount>this._opts.retries&&(this._queue.shift(),o&&o(m)):(this._queue.shift(),o&&o(null,...k)),c.pending=!1,this._drainQueue())),this._queue.push(c),this._drainQueue()}_drainQueue(l=!1){if(!this.connected||this._queue.length===0)return;const o=this._queue[0];o.pending&&!l||(o.pending=!0,o.tryCount++,this.flags=o.flags,this.emit.apply(this,o.args))}packet(l){l.nsp=this.nsp,this.io._packet(l)}onopen(){typeof this.auth=="function"?this.auth(l=>{this._sendConnectPacket(l)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(l){this.packet({type:se.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},l):l})}onerror(l){this.connected||this.emitReserved("connect_error",l)}onclose(l,o){this.connected=!1,delete this.id,this.emitReserved("disconnect",l,o),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(l=>{if(!this.sendBuffer.some(c=>String(c.id)===l)){const c=this.acks[l];delete this.acks[l],c.withError&&c.call(this,new Error("socket has been disconnected"))}})}onpacket(l){if(l.nsp===this.nsp)switch(l.type){case se.CONNECT:l.data&&l.data.sid?this.onconnect(l.data.sid,l.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case se.EVENT:case se.BINARY_EVENT:this.onevent(l);break;case se.ACK:case se.BINARY_ACK:this.onack(l);break;case se.DISCONNECT:this.ondisconnect();break;case se.CONNECT_ERROR:this.destroy();const c=new Error(l.data.message);c.data=l.data.data,this.emitReserved("connect_error",c);break}}onevent(l){const o=l.data||[];l.id!=null&&o.push(this.ack(l.id)),this.connected?this.emitEvent(o):this.receiveBuffer.push(Object.freeze(o))}emitEvent(l){if(this._anyListeners&&this._anyListeners.length){const o=this._anyListeners.slice();for(const c of o)c.apply(this,l)}super.emit.apply(this,l),this._pid&&l.length&&typeof l[l.length-1]=="string"&&(this._lastOffset=l[l.length-1])}ack(l){const o=this;let c=!1;return function(...m){c||(c=!0,o.packet({type:se.ACK,id:l,data:m}))}}onack(l){const o=this.acks[l.id];typeof o=="function"&&(delete this.acks[l.id],o.withError&&l.data.unshift(null),o.apply(this,l.data))}onconnect(l,o){this.id=l,this.recovered=o&&this._pid===o,this._pid=o,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(l=>this.emitEvent(l)),this.receiveBuffer=[],this.sendBuffer.forEach(l=>{this.notifyOutgoingListeners(l),this.packet(l)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(l=>l()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:se.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(l){return this.flags.compress=l,this}get volatile(){return this.flags.volatile=!0,this}timeout(l){return this.flags.timeout=l,this}onAny(l){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(l),this}prependAny(l){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(l),this}offAny(l){if(!this._anyListeners)return this;if(l){const o=this._anyListeners;for(let c=0;c<o.length;c++)if(l===o[c])return o.splice(c,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(l){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(l),this}prependAnyOutgoing(l){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(l),this}offAnyOutgoing(l){if(!this._anyOutgoingListeners)return this;if(l){const o=this._anyOutgoingListeners;for(let c=0;c<o.length;c++)if(l===o[c])return o.splice(c,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(l){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const o=this._anyOutgoingListeners.slice();for(const c of o)c.apply(this,l.data)}}}function mr(u){u=u||{},this.ms=u.min||100,this.max=u.max||1e4,this.factor=u.factor||2,this.jitter=u.jitter>0&&u.jitter<=1?u.jitter:0,this.attempts=0}mr.prototype.duration=function(){var u=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var l=Math.random(),o=Math.floor(l*this.jitter*u);u=(Math.floor(l*10)&1)==0?u-o:u+o}return Math.min(u,this.max)|0};mr.prototype.reset=function(){this.attempts=0};mr.prototype.setMin=function(u){this.ms=u};mr.prototype.setMax=function(u){this.max=u};mr.prototype.setJitter=function(u){this.jitter=u};class kl extends Oe{constructor(l,o){var c;super(),this.nsps={},this.subs=[],l&&typeof l=="object"&&(o=l,l=void 0),o=o||{},o.path=o.path||"/socket.io",this.opts=o,Ns(this,o),this.reconnection(o.reconnection!==!1),this.reconnectionAttempts(o.reconnectionAttempts||1/0),this.reconnectionDelay(o.reconnectionDelay||1e3),this.reconnectionDelayMax(o.reconnectionDelayMax||5e3),this.randomizationFactor((c=o.randomizationFactor)!==null&&c!==void 0?c:.5),this.backoff=new mr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(o.timeout==null?2e4:o.timeout),this._readyState="closed",this.uri=l;const m=o.parser||Tp;this.encoder=new m.Encoder,this.decoder=new m.Decoder,this._autoConnect=o.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(l){return arguments.length?(this._reconnection=!!l,l||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(l){return l===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=l,this)}reconnectionDelay(l){var o;return l===void 0?this._reconnectionDelay:(this._reconnectionDelay=l,(o=this.backoff)===null||o===void 0||o.setMin(l),this)}randomizationFactor(l){var o;return l===void 0?this._randomizationFactor:(this._randomizationFactor=l,(o=this.backoff)===null||o===void 0||o.setJitter(l),this)}reconnectionDelayMax(l){var o;return l===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=l,(o=this.backoff)===null||o===void 0||o.setMax(l),this)}timeout(l){return arguments.length?(this._timeout=l,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(l){if(~this._readyState.indexOf("open"))return this;this.engine=new yp(this.uri,this.opts);const o=this.engine,c=this;this._readyState="opening",this.skipReconnect=!1;const m=Mt(o,"open",function(){c.onopen(),l&&l()}),k=V=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",V),l?l(V):this.maybeReconnectOnOpen()},z=Mt(o,"error",k);if(this._timeout!==!1){const V=this._timeout,b=this.setTimeoutFn(()=>{m(),k(new Error("timeout")),o.close()},V);this.opts.autoUnref&&b.unref(),this.subs.push(()=>{this.clearTimeoutFn(b)})}return this.subs.push(m),this.subs.push(z),this}connect(l){return this.open(l)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const l=this.engine;this.subs.push(Mt(l,"ping",this.onping.bind(this)),Mt(l,"data",this.ondata.bind(this)),Mt(l,"error",this.onerror.bind(this)),Mt(l,"close",this.onclose.bind(this)),Mt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(l){try{this.decoder.add(l)}catch(o){this.onclose("parse error",o)}}ondecoded(l){_s(()=>{this.emitReserved("packet",l)},this.setTimeoutFn)}onerror(l){this.emitReserved("error",l)}socket(l,o){let c=this.nsps[l];return c?this._autoConnect&&!c.active&&c.connect():(c=new Lc(this,l,o),this.nsps[l]=c),c}_destroy(l){const o=Object.keys(this.nsps);for(const c of o)if(this.nsps[c].active)return;this._close()}_packet(l){const o=this.encoder.encode(l);for(let c=0;c<o.length;c++)this.engine.write(o[c],l.options)}cleanup(){this.subs.forEach(l=>l()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(l,o){var c;this.cleanup(),(c=this.engine)===null||c===void 0||c.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",l,o),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const l=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const o=this.backoff.duration();this._reconnecting=!0;const c=this.setTimeoutFn(()=>{l.skipReconnect||(this.emitReserved("reconnect_attempt",l.backoff.attempts),!l.skipReconnect&&l.open(m=>{m?(l._reconnecting=!1,l.reconnect(),this.emitReserved("reconnect_error",m)):l.onreconnect()}))},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}}onreconnect(){const l=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",l)}}const ii={};function Ss(u,l){typeof u=="object"&&(l=u,u=void 0),l=l||{};const o=vp(u,l.path||"/socket.io"),c=o.source,m=o.id,k=o.path,z=ii[m]&&k in ii[m].nsps,V=l.forceNew||l["force new connection"]||l.multiplex===!1||z;let b;return V?b=new kl(c,l):(ii[m]||(ii[m]=new kl(c,l)),b=ii[m]),o.query&&!l.query&&(l.query=o.queryKey),b.socket(o.path,l)}Object.assign(Ss,{Manager:kl,Socket:Lc,io:Ss,connect:Ss});const Pp=()=>{const[u,l]=te.useState("home"),[o,c]=te.useState(null),[m,k]=te.useState(""),[z,V]=te.useState(""),[b,fe]=te.useState(""),[ne,re]=te.useState("team"),[ie,Ze]=te.useState(4),[Ve,me]=te.useState(15),[ae,Ct]=te.useState(30),[D,Ie]=te.useState(null),[ge,st]=te.useState([]),[ke,ze]=te.useState(0),[ot,et]=te.useState(null),[We,$e]=te.useState(!1),[tt,De]=te.useState(30),[Se,qe]=te.useState([]),[_e,ye]=te.useState(-1),[R,Q]=te.useState(0),[O,g]=te.useState(!1),[S,G]=te.useState(!1),[X,J]=te.useState(null),[Z,oe]=te.useState(!1),[ce,de]=te.useState(null),[Ke,ht]=te.useState(null),[oi,$t]=te.useState(!1),Ae=te.useRef(null),gr=te.useRef(0),Ee=te.useRef(null),on=te.useRef(0),ln=te.useRef(-1),qt=te.useRef(null);te.useEffect(()=>{on.current=R},[R]),te.useEffect(()=>{ln.current=_e},[_e]),te.useEffect(()=>{qt.current=m},[m]);const Dt=B=>{try{localStorage.setItem("gameSession",JSON.stringify(B))}catch(W){console.error("Failed to save game session:",W)}},jt=()=>{try{const B=localStorage.getItem("gameSession");if(B)return JSON.parse(B)}catch(B){console.error("Failed to load game session:",B)}return null},lt=()=>{try{localStorage.removeItem("gameSession")}catch(B){console.error("Failed to clear game session:",B)}},yr=(B,W)=>{const H=W;let P=0;for(let j=0;j<H.length;j++)P=(P<<5)-P+H.charCodeAt(j),P=P&P;const w=[...B];for(let j=w.length-1;j>0;j--){P=(P*9301+49297)%233280;const T=Math.abs(P%(j+1));[w[j],w[T]]=[w[T],w[j]]}return w},Wn=B=>{const W=((o==null?void 0:o.id)||"")+B.id,H=[0,1,2,3];let P=0;for(let Y=0;Y<W.length;Y++)P=(P<<5)-P+W.charCodeAt(Y),P=P&P;const w=[...H];for(let Y=w.length-1;Y>0;Y--){const pe=Math.abs(P%(Y+1));[w[Y],w[pe]]=[w[pe],w[Y]],P=(P*9301+49297)%233280}let j=B.correctAnswerIndex;if(j==null||j<0)if(B.correctAnswer){const Y=String(B.correctAnswer).trim();j=B.options.findIndex(pe=>pe.trim().toLowerCase()===Y.toLowerCase()),j<0&&(j={A:0,B:1,C:2,D:3}[Y.toUpperCase()]??0)}else j=0;const T=w.indexOf(j),F=w.map(Y=>B.options[Y]);return{...B,options:F,correctAnswerIndex:T}};te.useEffect(()=>{let W="http://localhost:3002";try{W.startsWith("/")&&(W=window.location.origin)}catch{}const H=Ss(W);c(H);const P=jt();return P&&!O&&(g(!0),k(P.gameId),P.isHost?(fe(P.hostName||""),H.emit("rejoin-as-host",{gameId:P.gameId,hostName:P.hostName})):(V(P.playerName||""),H.emit("rejoin-as-player",{gameId:P.gameId,playerName:P.playerName}))),H.on("game-created",({gameId:w,game:j})=>{k(w),Ie(j),l("lobby"),Dt({gameId:w,hostName:j.hostName,isHost:!0,phase:"lobby"})}),H.on("game-updated",w=>{Ie(w),w.phase==="lobby"&&l(j=>{if((j==="join"||j==="home")&&w.players.some(F=>F.id===H.id)){const F=w.players.find(Y=>Y.id===H.id);return F&&Dt({gameId:w.id,playerName:F.name,isHost:!1,phase:"lobby"}),"lobby"}return j})}),H.on("rejoined",({game:w,isHost:j})=>{Ie(w),g(!1);const T=jt(),F=(T==null?void 0:T.playerName)||z;Ae.current&&clearInterval(Ae.current),Ee.current&&clearTimeout(Ee.current);const Y=w.host===H.id||j;if(w.phase==="lobby")l("lobby");else if(w.phase==="playing"){if(w.questions&&w.questions.length>0){const nt=yr(w.questions,H.id);st(nt)}const pe=(T==null?void 0:T.currentQuestion)??0;if(ze(pe),Y)l("host-view");else{let nt=!1;for(const Tt of w.teams){const Gt=Tt.players.find(Rt=>Rt.name===F);if(Gt){ye(Tt.index),Q(Gt.score||0),nt=!0;break}}nt?($e(!1),et(null),oe(!1),de(null),Ee.current&&(clearTimeout(Ee.current),Ee.current=null),l("playing"),setTimeout(()=>{Pn()},100)):(lt(),l("home"))}}else w.phase==="finished"&&(w.teams&&qe(w.teams.map(pe=>({name:pe.name,index:pe.index,score:pe.score,playerCount:pe.players.length,players:pe.players||[]}))),l("results"))}),H.on("rejoin-failed",()=>{lt(),g(!1),l("home"),ht("Game không tồn tại hoặc đã kết thúc. Vui lòng tạo game mới."),setTimeout(()=>ht(null),3e3)}),H.on("game-started",w=>{Ie(w);const j=w.players.find(F=>F.id===H.id);if(j&&ye(j.teamIndex),w.questions&&w.questions.length>0){const F=yr(w.questions,H.id);st(F)}J(3),setTimeout(()=>{J(2),setTimeout(()=>{J(1),setTimeout(()=>{J("GO!"),setTimeout(()=>{J(null),et(null),$e(!1),oe(!1),de(null),w.host===H.id?l("host-view"):(l("playing"),Pn())},800)},1e3)},1e3)},1e3),ze(0),$e(!1);const T=jt();T&&Dt({...T,phase:w.host===H.id?"host-view":"playing"})}),H.on("question-changed",({currentQuestion:w})=>{G(!0),setTimeout(()=>{ze(w),$e(!1),et(null),oe(!1),de(null),De(30),Pn(),G(!1)},300)}),H.on("game-finished",w=>{if(qt.current&&ln.current!==void 0){const j=on.current||0;H.emit("player-finished",{gameId:qt.current,playerId:H.id,finalScore:j,teamIndex:ln.current})}Ie(w),w&&w.teams&&qe(w.teams.map(j=>({name:j.name,index:j.index,score:j.score,playerCount:j.players.length,players:j.players||[]}))),l("results"),Ae.current&&clearInterval(Ae.current),Ee.current&&clearTimeout(Ee.current),lt()}),H.on("scores-updated",({teams:w})=>{console.log("[scores-updated] Received scores:",w),qe(w),Ie(j=>j&&{...j,teams:j.teams.map((T,F)=>{const Y=w.find(pe=>pe.index===F);return Y?{...T,score:Y.score}:T})})}),H.on("game-ended",({finalScores:w})=>{if(qt.current&&ln.current!==void 0){const j=on.current||0;H.emit("player-finished",{gameId:qt.current,playerId:H.id,finalScore:j,teamIndex:ln.current})}qe(w),l("results"),lt(),Ae.current&&clearInterval(Ae.current)}),H.on("host-disconnected",()=>{ht("Host đã thoát. Game kết thúc."),setTimeout(()=>{lt(),Yt()},2e3)}),H.on("game-deleted",({message:w})=>{ht(w),setTimeout(()=>{lt(),Yt()},2e3)}),H.on("error",({message:w})=>{ht(w),setTimeout(()=>ht(null),5e3),u==="lobby"&&(w.includes("Host đã thoát")||w.includes("Game đã bị xóa"))&&setTimeout(()=>{lt(),Yt()},2e3)}),()=>{H.close()}},[]),te.useEffect(()=>{if(D&&o&&(D.host,o.id),tt===0&&!We&&u==="playing"){if($e(!0),!D||!D.questions)return;const B=Wn(D.questions[ke]);de(B.correctAnswerIndex),oe(!0),o&&m&&o.emit("player-answered",{gameId:m,isCorrect:!1,points:0,timeTaken:D.settings.timePerQuestion||30}),Ee.current&&clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>{Kt()},3e3)}},[tt,We,u,ke,o,m,D]);const Pn=()=>{Ae.current&&clearInterval(Ae.current);const B=(D==null?void 0:D.settings.timePerQuestion)||30;De(B),gr.current=Date.now(),Ae.current=window.setInterval(()=>{De(W=>W<=1?(Ae.current&&clearInterval(Ae.current),0):W-1)},1e3)},li=()=>{!b.trim()||!o||o.emit("create-game",{hostName:b.trim(),gameSettings:{teamCount:ne==="individual"?1:ie,questionCount:Ve,timePerQuestion:ae,gameMode:ne}})},vr=()=>{if(!m.trim()||!z.trim()||!o){ht("Vui lòng điền đầy đủ thông tin!");return}o.emit("join-game",{gameId:m.trim().toUpperCase(),playerName:z.trim()})},$n=()=>{!o||!m||o.emit("start-game",{gameId:m})},ai=B=>{var Y;if(We||!o||!m||_e===-1)return;et(B),$e(!0);const H=(Date.now()-gr.current)/1e3;if(!ge||ge.length===0)return;const P=ge[ke],w=Wn(P),j=B===w.correctAnswerIndex;let T=0;if(j){const pe=((Y=D==null?void 0:D.settings)==null?void 0:Y.timePerQuestion)||30,nt=Math.max(0,(pe-H)/pe);T=100+Math.floor(nt*50)}const F=R+T;Q(F),de(w.correctAnswerIndex),oe(!0),o.emit("update-score",{gameId:m,teamIndex:_e,points:T}),Ee.current&&clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>{Kt()},3e3)},Kt=()=>{var W;if(!ge||ge.length===0)return;const B=ge.length;if(ke<B-1){Ee.current&&(clearTimeout(Ee.current),Ee.current=null);const H=ke+1;ze(H),$e(!1),et(null),oe(!1),de(null),De(((W=D==null?void 0:D.settings)==null?void 0:W.timePerQuestion)||30),Pn();const P=jt();P&&Dt({...P,currentQuestion:H,myScore:R})}else l("waiting-results"),Ae.current&&clearInterval(Ae.current),Ee.current&&clearTimeout(Ee.current),lt(),o&&m&&o.emit("player-finished",{gameId:m,playerId:o.id,finalScore:on.current,teamIndex:_e})},zn=()=>{!o||!m||o.emit("end-game",{gameId:m})},Es=()=>{!o||!m||$t(!0)},ui=()=>{!o||!m||(o.emit("delete-game",{gameId:m}),lt(),Yt(),$t(!1))},Yt=()=>{lt(),o&&m&&o.emit("leave-room",{gameId:m}),l("home"),k(""),V(""),fe(""),Ze(4),me(15),Ie(null),ze(0),et(null),$e(!1),qe([]),ye(-1),Ae.current&&clearInterval(Ae.current),Ee.current&&clearTimeout(Ee.current)},Cs=D&&o&&D.host===o.id,xr=()=>d.jsxs("div",{className:"multiplayer-home",children:[d.jsxs("div",{className:"hero-section",children:[d.jsx("h1",{className:"game-title",children:"Gắn kết tình thân"}),d.jsx("p",{className:"game-subtitle",children:"Trò chơi trực tuyến theo thời gian thực"})]}),d.jsxs("div",{className:"action-cards",children:[d.jsxs("div",{className:"action-card",onClick:()=>l("create"),children:[d.jsx("div",{className:"card-icon",children:"🎮"}),d.jsx("h3",{children:"Tạo Game Mới"}),d.jsx("p",{children:"Làm host và mời bạn bè tham gia"})]}),d.jsxs("div",{className:"action-card",onClick:()=>l("join"),children:[d.jsx("div",{className:"card-icon",children:"🚀"}),d.jsx("h3",{children:"Tham Gia Game"}),d.jsx("p",{children:"Nhập mã game để chơi cùng bạn bè"})]})]})]}),wr=()=>d.jsxs("div",{className:"create-game",children:[d.jsx("button",{onClick:()=>l("home"),className:"back-button",children:"← Quay lại"}),d.jsxs("div",{className:"form-container",children:[d.jsx("h2",{children:"⚙️ Cấu Hình Game"}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Tên của bạn (Host)"}),d.jsx("input",{type:"text",value:b,onChange:B=>fe(B.target.value),placeholder:"Nhập tên của bạn",className:"game-input"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Chế độ chơi"}),d.jsxs("div",{className:"game-mode-selector",children:[d.jsxs("button",{className:`mode-button ${ne==="team"?"active":""}`,onClick:()=>re("team"),children:[d.jsx("span",{className:"mode-icon",children:"👥"}),d.jsx("span",{className:"mode-name",children:"Theo Nhóm"}),d.jsx("br",{}),d.jsx("span",{className:"mode-desc",children:"Chia đội và tính điểm theo nhóm"})]}),d.jsxs("button",{className:`mode-button ${ne==="individual"?"active":""}`,onClick:()=>re("individual"),children:[d.jsx("span",{className:"mode-icon",children:"🏃"}),d.jsx("span",{className:"mode-name",children:"Cá Nhân"}),d.jsx("br",{}),d.jsx("span",{className:"mode-desc",children:"Mỗi người chơi tự tính điểm"})]})]})]}),ne==="team"&&d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Số lượng nhóm: ",ie]}),d.jsx("input",{type:"range",min:"2",max:"8",value:ie,onChange:B=>Ze(parseInt(B.target.value)),className:"slider"})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Số câu hỏi: ",Ve]}),d.jsx("input",{type:"range",min:"10",max:"30",value:Ve,onChange:B=>me(parseInt(B.target.value)),className:"slider"})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Thời gian mỗi câu: ",ae," giây"]}),d.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:ae,onChange:B=>Ct(parseInt(B.target.value)),className:"slider"})]}),d.jsxs("div",{className:"settings-preview",children:[d.jsx("h3",{children:"📝 Tóm tắt:"}),d.jsxs("ul",{children:[ne==="team"?d.jsxs(d.Fragment,{children:[d.jsxs("li",{children:["👥 ",ie," nhóm thi đấu"]}),d.jsx("li",{children:"🎯 Tự động phân nhóm ngẫu nhiên"})]}):d.jsx("li",{children:"🏃 Chơi cá nhân - tính điểm riêng"}),d.jsxs("li",{children:["❓ ",Ve," câu hỏi"]}),d.jsxs("li",{children:["⏱️ ",ae," giây/câu"]})]})]}),d.jsx("button",{onClick:li,className:"primary-button",children:"Tạo Phòng Chơi"})]})]}),kr=()=>d.jsxs("div",{className:"join-game",children:[d.jsx("button",{onClick:()=>l("home"),className:"back-button",children:"← Quay lại"}),d.jsxs("div",{className:"form-container",children:[d.jsx("h2",{children:"Tham Gia Game"}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Mã Game"}),d.jsx("input",{type:"text",value:m,onChange:B=>k(B.target.value.toUpperCase()),placeholder:"Nhập mã 6 ký tự",maxLength:6,className:"game-input game-code"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Tên của bạn"}),d.jsx("input",{type:"text",value:z,onChange:B=>V(B.target.value),placeholder:"Nhập tên của bạn",className:"game-input"})]}),d.jsx("div",{className:"join-info",children:d.jsx("p",{children:"Bạn sẽ được tự động phân vào nhóm khi game bắt đầu"})}),d.jsx("button",{onClick:vr,className:"primary-button",children:"Tham Gia"})]})]}),Sr=()=>D?d.jsxs("div",{className:"lobby",children:[d.jsxs("div",{className:"lobby-header",children:[d.jsx("h2",{children:"🎮 Phòng Chờ"}),d.jsxs("div",{className:"game-code-display",children:[d.jsx("span",{className:"code-label",children:"Mã Game:"}),d.jsx("span",{className:"code-value",children:D.id})]})]}),d.jsxs("div",{className:"lobby-stats",children:[d.jsx("div",{className:"stat-card",children:d.jsxs("div",{children:[d.jsx("span",{className:"stat-icon",children:"👥 "}),d.jsx("span",{className:"stat-value",children:D.players.length})," ",d.jsx("span",{className:"stat-label",children:" Người chơi"})]})}),D.settings.gameMode==="team"&&d.jsx("div",{className:"stat-card",children:d.jsxs("div",{children:[d.jsx("span",{className:"stat-icon",children:"🏆 "}),d.jsx("span",{className:"stat-value",children:D.settings.teamCount}),d.jsx("span",{className:"stat-label",children:" Nhóm"})]})}),d.jsx("div",{className:"stat-card",children:d.jsxs("div",{children:[d.jsx("span",{className:"stat-icon",children:"❓ "}),d.jsx("span",{className:"stat-value",children:D.settings.questionCount})," ",d.jsx("span",{className:"stat-label",children:" Câu hỏi"})]})})]}),d.jsxs("div",{className:"players-waiting",children:[d.jsxs("h3",{children:["Người chơi đang chờ (",D.players.length,")"]}),d.jsx("div",{className:"players-grid",children:D.players.map((B,W)=>d.jsxs("div",{className:"player-card",children:[d.jsx("span",{className:"player-avatar",children:"👤"}),d.jsx("span",{className:"player-name",children:B.name})]},W))}),D.players.length===0&&d.jsx("div",{className:"empty-state",children:d.jsx("p",{children:"Chưa có người chơi nào. Chia sẻ mã game để mời bạn bè!"})})]}),d.jsx("div",{className:"lobby-info",children:D.settings.gameMode==="team"?d.jsxs("p",{children:["Khi bắt đầu, tất cả người chơi sẽ được phân ngẫu nhiên vào ",D.settings.teamCount," nhóm"]}):d.jsx("p",{children:"🏃 Chế độ cá nhân - Mỗi người chơi thi đấu riêng và tự tính điểm"})}),d.jsx("div",{className:"lobby-actions",children:Cs?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:$n,disabled:D.players.length===0,className:"primary-button large",children:"🚀 Bắt Đầu Game"}),d.jsx("button",{onClick:Es,className:"delete-button",style:{marginTop:"1rem"},children:"🗑️ Xóa Phòng"})]}):d.jsx("p",{className:"waiting-text",children:"Đang chờ host bắt đầu game..."})})]}):null,_r=()=>{var H,P,w,j;if(!D)return null;const B=D.settings.gameMode==="individual",W=B?(()=>{var F;const T=(F=Se[0])!=null&&F.players&&Se[0].players.length>0?Se[0].players:D.players.map(Y=>({name:Y.name,score:Y.score||0}));return[{...Se[0],players:[...T].sort((Y,pe)=>pe.score-Y.score)}]})():[...Se].sort((T,F)=>F.score-T.score);return D.players.length,(ke+1)/D.settings.questionCount*100,d.jsxs("div",{className:"host-view",children:[d.jsx("div",{className:"host-header",children:d.jsxs("div",{className:"host-title-section",children:[d.jsx("h2",{children:"🎯 Màn Hình Host"}),d.jsxs("div",{className:"live-indicator",children:[d.jsx("span",{className:"live-dot"}),d.jsx("span",{children:"LIVE"})]})]})}),d.jsxs("div",{className:"host-leaderboard-container",children:[d.jsxs("div",{className:"leaderboard-header",children:[d.jsx("h3",{children:"🏆 Bảng Xếp Hạng"}),d.jsx("div",{className:"live-badge",children:"Cập nhật trực tiếp"})]}),d.jsx("div",{className:"podium",children:B?(H=W[0])!=null&&H.players&&W[0].players.length>0?W[0].players.slice(0,3).map((T,F)=>d.jsxs("div",{className:`podium-place place-${F+1}`,children:[d.jsxs("div",{className:"medal",children:[F===0&&"🥇",F===1&&"🥈",F===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsxs("h3",{children:["👤 ",T.name]}),d.jsxs("p",{className:"score",children:[T.score," điểm"]})]})]},F)):null:W.slice(0,3).map((T,F)=>d.jsxs("div",{className:`podium-place place-${F+1}`,children:[d.jsxs("div",{className:"medal",children:[F===0&&"🥇",F===1&&"🥈",F===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsx("h3",{children:T.name}),d.jsxs("p",{className:"score",children:[T.score," điểm"]}),d.jsxs("p",{className:"members",children:["👥 ",T.playerCount," thành viên"]}),T.players&&T.players.length>0&&d.jsx("div",{className:"podium-players",children:T.players.map((Y,pe)=>d.jsxs("span",{className:"podium-player",children:[Y.name,": ",d.jsxs("strong",{children:[Y.score,"đ"]})]},pe))})]})]},T.index))}),(B&&((w=(P=W[0])==null?void 0:P.players)==null?void 0:w.length)>3||!B&&W.length>3)&&d.jsxs("div",{className:"full-rankings",children:[d.jsx("h3",{children:"Xếp Hạng Còn Lại"}),B?(j=W[0])!=null&&j.players&&W[0].players.length>3?W[0].players.slice(3).map((T,F)=>d.jsx("div",{className:"ranking-item",children:d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",F+4]}),d.jsxs("span",{className:"team-name",children:["👤 ",T.name]}),d.jsxs("span",{className:"team-score",children:[T.score," điểm"]})]})},F)):null:W.slice(3).map((T,F)=>d.jsxs("div",{className:"ranking-item",children:[d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",F+4]}),d.jsx("span",{className:"team-name",children:T.name}),d.jsxs("span",{className:"team-score",children:[T.score," điểm"]})]}),T.players&&T.players.length>0&&d.jsx("div",{className:"ranking-players",children:T.players.map((Y,pe)=>d.jsxs("span",{className:"ranking-player",children:[Y.name,": ",Y.score,"đ"]},pe))})]},T.index))]})]}),d.jsx("div",{className:"host-controls",children:d.jsx("button",{onClick:zn,className:"primary-button large",children:"🏁 Kết Thúc Game"})})]})},an=()=>{var H;if(!D)return null;const B=D.settings.gameMode==="individual",W=B?(()=>{var w;const P=(w=Se[0])!=null&&w.players&&Se[0].players.length>0?Se[0].players:D.players.map(j=>({name:j.name,score:j.score||0}));return[{...Se[0],players:[...P].sort((j,T)=>T.score-j.score)}]})():[...Se].sort((P,w)=>w.score-P.score);return d.jsxs("div",{className:"waiting-results",children:[d.jsxs("div",{className:"waiting-header",children:[d.jsx("h2",{children:"✅ Bạn đã hoàn thành!"}),d.jsx("p",{className:"waiting-subtitle",children:"Đang chờ host kết thúc game..."})]}),d.jsx("div",{className:"my-final-score",children:d.jsxs("div",{className:"score-card",children:[d.jsx("span",{className:"score-label",children:"Điểm của bạn"}),d.jsx("span",{className:"score-value",children:R})]})}),d.jsxs("div",{className:"player-leaderboard-container",children:[d.jsxs("div",{className:"leaderboard-header",children:[d.jsx("h3",{children:"🏆 Bảng Xếp Hạng"}),d.jsx("div",{className:"live-badge",children:"Cập nhật trực tiếp"})]}),B?((H=W[0])==null?void 0:H.players)&&W[0].players.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"podium",children:W[0].players.slice(0,3).map((P,w)=>d.jsxs("div",{className:`podium-place place-${w+1} ${P.name===z?"my-highlight":""}`,children:[d.jsxs("div",{className:"medal",children:[w===0&&"🥇",w===1&&"🥈",w===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsxs("h3",{children:["👤 ",P.name]}),d.jsxs("p",{className:"score",children:[P.score," điểm"]})]})]},w))}),W[0].players.length>3&&d.jsxs("div",{className:"full-rankings",children:[d.jsx("h3",{children:"Xếp Hạng Còn Lại"}),W[0].players.slice(3).map((P,w)=>d.jsx("div",{className:`ranking-item ${P.name===z?"my-highlight":""}`,children:d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",w+4]}),d.jsxs("span",{className:"team-name",children:["👤 ",P.name]}),d.jsxs("span",{className:"team-score",children:[P.score," điểm"]})]})},w))]})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"podium",children:W.slice(0,3).map((P,w)=>d.jsxs("div",{className:`podium-place place-${w+1} ${P.index===_e?"my-highlight":""}`,children:[d.jsxs("div",{className:"medal",children:[w===0&&"🥇",w===1&&"🥈",w===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsx("h3",{children:P.name}),d.jsxs("p",{className:"score",children:[P.score," điểm"]}),d.jsxs("p",{className:"members",children:["👥 ",P.playerCount," thành viên"]}),P.players&&P.players.length>0&&d.jsx("div",{className:"podium-players",children:P.players.map((j,T)=>d.jsxs("span",{className:"podium-player",children:[j.name,": ",d.jsxs("strong",{children:[j.score,"đ"]})]},T))})]})]},P.index))}),W.length>3&&d.jsxs("div",{className:"full-rankings",children:[d.jsx("h3",{children:"Xếp Hạng Còn Lại"}),W.slice(3).map((P,w)=>d.jsxs("div",{className:`ranking-item ${P.index===_e?"my-highlight":""}`,children:[d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",w+4]}),d.jsx("span",{className:"team-name",children:P.name}),d.jsxs("span",{className:"team-score",children:[P.score," điểm"]})]}),P.players&&P.players.length>0&&d.jsx("div",{className:"ranking-players",children:P.players.map((j,T)=>d.jsxs("span",{className:"ranking-player",children:[j.name,": ",j.score,"đ"]},T))})]},P.index))]})]})]})]})},un=()=>{var w;if(!D||_e===-1||!ge||ge.length===0)return null;const B=ge[ke];if(!B)return null;const W=Wn(B);if(!W.options||W.options.length===0)return console.error("Invalid question - no options:",W),d.jsx("div",{className:"error-message",children:"Câu hỏi không hợp lệ. Vui lòng liên hệ host."});const H=((w=D==null?void 0:D.settings)==null?void 0:w.gameMode)==="individual",P=H?null:D.teams[_e];return d.jsxs("div",{className:"playing",children:[d.jsxs("div",{className:"game-header",children:[!H&&P?d.jsxs("div",{className:"team-badge",children:[d.jsx("span",{className:"team-label",children:"Nhóm:"}),d.jsx("span",{className:"team-name-badge",children:P.name}),d.jsxs("span",{className:"my-score-badge",children:["💎 ",P.score," điểm"]})]}):d.jsxs("div",{className:"team-badge",children:[d.jsxs("span",{className:"team-label",children:["👤 ",z]}),d.jsxs("span",{className:"my-score-badge",children:["💎 ",R," điểm"]})]}),d.jsxs("div",{className:`timer ${tt<=5?"urgent":""}`,children:["⏱️ ",tt,"s"]})]}),d.jsx("div",{className:"question-info-bar",children:d.jsxs("span",{className:"question-number",children:["Câu ",ke+1,"/",ge.length]})}),H?d.jsx("div",{className:"mini-leaderboard"}):P&&d.jsxs("div",{className:"team-players-list",children:[d.jsx("h4",{children:"👥 Thành viên:"}),d.jsx("div",{className:"teammates",children:P.players.map((j,T)=>d.jsxs("span",{className:`teammate ${j.name===z?"me":""}`,children:[j.name===z&&"⭐ ",j.name]},T))})]}),d.jsxs("div",{className:`question-container ${S?"fade-out":"fade-in"}`,children:[d.jsx("h2",{className:"question-text",children:W.question}),d.jsx("div",{className:"answers-grid",children:W.options.map((j,T)=>{const F=Z&&T===ce,Y=We&&T===ot,pe=Y&&F,nt=Y&&Z&&!F,Tt=F&&!Y&&Z,Gt=Y&&!Z;let Rt="";return pe?Rt="correct":nt?Rt="incorrect":Tt?Rt="timeout-correct":Gt&&(Rt="selected"),d.jsxs("button",{onClick:()=>ai(T),disabled:We,className:`answer-option ${Rt}`,children:[d.jsx("span",{className:"option-letter",children:String.fromCharCode(65+T)}),d.jsx("span",{className:"option-text",children:j}),pe&&d.jsx("span",{className:"check-mark",children:"✓"}),nt&&d.jsx("span",{className:"x-mark",children:"✗"}),Tt&&d.jsx("span",{className:"check-mark",children:"✓"})]},T)})}),We&&Z&&d.jsxs("div",{className:"next-question-section",children:[d.jsx("button",{onClick:Kt,className:"next-question-button",children:"➡️ Câu tiếp theo"}),d.jsx("p",{className:"auto-next-text",children:"Hoặc đợi tự động chuyển sau 3 giây..."})]})]})]})},ci=()=>{var H,P;if(((H=D==null?void 0:D.settings)==null?void 0:H.gameMode)==="individual"){const w=((P=Se[0])==null?void 0:P.players)||[],j=w.length>0?w:((D==null?void 0:D.players)||[]).map(T=>({name:T.name,score:T.score||0})).sort((T,F)=>F.score-T.score);return d.jsxs("div",{className:"results",children:[d.jsx("h1",{className:"results-title",children:"🏆 Kết Quả - Chế độ Cá Nhân"}),j.length>0?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"podium",children:j.slice(0,3).map((T,F)=>d.jsxs("div",{className:`podium-place place-${F+1}`,children:[d.jsxs("div",{className:"medal",children:[F===0&&"🥇",F===1&&"🥈",F===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsxs("h3",{children:["👤 ",T.name]}),d.jsxs("p",{className:"score",children:[T.score," điểm"]})]})]},F))}),d.jsxs("div",{className:"full-rankings",children:[d.jsx("h3",{children:"Bảng Xếp Hạng Đầy Đủ"}),j.slice(3).map((T,F)=>d.jsx("div",{className:"ranking-item",children:d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",F+4]}),d.jsxs("span",{className:"team-name",children:["👤 ",T.name]}),d.jsxs("span",{className:"team-score",children:[T.score," điểm"]})]})},F)),j.length<=3&&d.jsx("p",{style:{textAlign:"center",color:"#999",padding:"2rem"},children:"Không có người chơi khác"})]})]}):d.jsx("p",{style:{textAlign:"center",color:"#fff",padding:"2rem"},children:"Chưa có dữ liệu xếp hạng"}),d.jsx("button",{onClick:Yt,className:"primary-button",children:"Về Trang Chủ"})]})}const W=[...Se].sort((w,j)=>j.score-w.score);return d.jsxs("div",{className:"results",children:[d.jsx("h1",{className:"results-title",children:"🏆 Kết Quả - Chế độ Nhóm"}),d.jsx("div",{className:"podium",children:W.slice(0,3).map((w,j)=>d.jsxs("div",{className:`podium-place place-${j+1}`,children:[d.jsxs("div",{className:"medal",children:[j===0&&"🥇",j===1&&"🥈",j===2&&"🥉"]}),d.jsxs("div",{className:"team-info",children:[d.jsx("h3",{children:w.name}),d.jsxs("p",{className:"score",children:[w.score," điểm"]}),d.jsxs("p",{className:"players",children:[w.playerCount," thành viên"]}),w.players&&w.players.length>0&&d.jsx("div",{className:"player-list",children:w.players.map((T,F)=>d.jsxs("div",{className:"player-item",children:["👤 ",T.name,": ",d.jsxs("strong",{children:[T.score," điểm"]})]},F))})]})]},j))}),d.jsxs("div",{className:"full-rankings",children:[d.jsx("h3",{children:"Bảng Xếp Hạng Đầy Đủ"}),W.slice(3).map((w,j)=>d.jsxs("div",{className:"ranking-item",children:[d.jsxs("div",{className:"ranking-header",children:[d.jsxs("span",{className:"rank",children:["#",j+4]}),d.jsx("span",{className:"team-name",children:w.name}),d.jsxs("span",{className:"team-score",children:[w.score," điểm"]})]}),w.players&&w.players.length>0&&d.jsx("div",{className:"ranking-players",children:w.players.map((T,F)=>d.jsxs("span",{className:"ranking-player",children:["👤 ",T.name," (",T.score," điểm)"]},F))})]},j)),W.length<=3&&d.jsx("p",{style:{textAlign:"center",color:"#999",padding:"2rem"},children:"Không có nhóm khác"})]}),d.jsx("button",{onClick:Yt,className:"primary-button",children:"Về Trang Chủ"})]})};return d.jsxs("div",{className:"multiplayer-game",children:[u==="home"&&xr(),u==="create"&&wr(),u==="join"&&kr(),u==="lobby"&&Sr(),u==="host-view"&&_r(),u==="playing"&&un(),u==="waiting-results"&&an(),u==="results"&&ci(),Ke&&d.jsx("div",{className:"error-toast",children:d.jsxs("div",{className:"error-toast-content",children:[d.jsx("span",{className:"error-icon",children:"⚠️"}),d.jsx("span",{className:"error-text",children:Ke}),d.jsx("button",{className:"error-close",onClick:()=>ht(null),children:"✕"})]})}),oi&&d.jsx("div",{className:"modal-overlay",onClick:()=>$t(!1),children:d.jsxs("div",{className:"modal-content",onClick:B=>B.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("span",{className:"modal-icon",children:"⚠️"}),d.jsx("h3",{children:"Xác nhận xóa phòng"})]}),d.jsxs("p",{className:"modal-message",children:["Bạn có chắc muốn xóa phòng game này?",d.jsx("br",{}),"Tất cả người chơi sẽ bị đưa ra khỏi phòng."]}),d.jsxs("div",{className:"modal-actions",children:[d.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:()=>$t(!1),children:"Hủy"}),d.jsx("button",{className:"modal-btn modal-btn-confirm",onClick:ui,children:"Xóa phòng"})]})]})}),X!==null&&d.jsx("div",{className:"countdown-overlay",children:d.jsx("div",{className:`countdown-number ${X==="GO!"?"countdown-go":""}`,children:X})}),d.jsx("style",{children:`
        .multiplayer-game {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5e6d3 0%, #faf8f3 50%, #f5e6d3 100%);
          position: relative;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .multiplayer-game::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/img/dongson-drum.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.04;
          pointer-events: none;
          z-index: 0;
        }

        .multiplayer-game > * {
          position: relative;
          z-index: 1;
        }

        .multiplayer-home {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-section {
          text-align: center;
          color: #8b5a00;
          margin-bottom: 4rem;
        }

        .game-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #b8860b, #cd7f32, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          animation: fadeInDown 0.8s ease;
        }

        .game-subtitle {
          font-size: 1.5rem;
          color: #a0662f;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease;
        }

        .action-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .action-card {
          background: linear-gradient(135deg, #fff9f0 0%, #ffffff 100%);
          border: 3px solid #d4a574;
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(184, 134, 11, 0.2);
        }

        .action-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 40px rgba(184, 134, 11, 0.3);
          border-color: #b8860b;
          background: linear-gradient(135deg, #fffef9 0%, #fff9f0 100%);
        }

        .action-card:active {
          transform: translateY(-5px) scale(0.98);
        }

        .card-icon {
          font-size: 5rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .action-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .action-card h3 {
          color: #b8860b;
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
        }

        .action-card p {
          color: #666;
        }

        .form-container {
          max-width: 500px;
          margin: 2rem auto;
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .form-container h2 {
          color: #667eea;
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 600;
        }

        .game-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .game-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .game-code {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 0.3rem;
          text-transform: uppercase;
        }

        .back-button {
          background: rgba(255,255,255,0.2);
          color: #8b5a00;
          border: 2px solid white;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: white;
          color: #667eea;
        }

        .primary-button {
          width: 100%;
          background: linear-gradient(135deg, #d4a574 0%, #b8860b 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(184, 134, 11, 0.4);
        }

        .primary-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(184, 134, 11, 0.6);
          background: linear-gradient(135deg, #e0b380 0%, #cd7f32 100%);
        }

        .primary-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .primary-button.large {
          padding: 1.5rem 3rem;
          font-size: 1.3rem;
        }

        .delete-button {
          width: 100%;
          background: linear-gradient(135deg, #f44336 0%, #e91e63 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(244, 67, 54, 0.4);
        }

        .delete-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(244, 67, 54, 0.6);
        }

        .delete-button:active {
          transform: translateY(0);
          box-shadow: 0 3px 10px rgba(244, 67, 54, 0.4);
        }

        .primary-button:active {
          transform: translateY(1px);
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .lobby {
          max-width: 1200px;
          margin: 0 auto;
        }

        .lobby-header {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .lobby-header h2 {
          color: #667eea;
          margin: 0;
        }

        .game-code-display {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .code-label {
          color: #666;
          font-weight: 600;
        }

        .code-value {
          background: #b8860b;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 0.2rem;
        }

        .lobby-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.2);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          color: #666;
          font-size: 0.9rem;
        }

        .players-waiting {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 1rem;
        }

        .players-waiting h3 {
          color: #667eea;
          margin-bottom: 1.5rem;
        }

        .players-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .player-card {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          min-width: 150px;
          flex: 0 0 auto;
        }

        .player-avatar {
          font-size: 1.5rem;
        }

        .player-name {
          font-weight: 600;
          color: #333;
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          background: rgba(255,255,255,0.2);
          border-radius: 15px;
          color: white;
        }

        .lobby-info {
          background: #fff3e0;
          padding: 1.2rem;
          border-radius: 10px;
          border-left: 4px solid #b8860b;
          text-align: center;
          margin-bottom: 1rem;
        }

        .lobby-info p {
          margin: 0;
          color: #8b5a00;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .lobby-actions {
          text-align: center;
        }

        .waiting-text {
          color: white;
          font-size: 1.2rem;
          text-align: center;
          padding: 1rem;
          background: #b8860b;
          border-radius: 10px;
          display: inline-block;
        }

        .playing {
          max-width: 1000px;
          margin: 0 auto;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          margin-bottom: 1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .question-number {
          font-size: 1.2rem;
          font-weight: bold;
          color: #b8860b;
        }

        .timer {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4caf50;
          padding: 0.5rem 1rem;
          background: #e8f5e9;
          border-radius: 10px;
        }

        .timer.urgent {
          color: #f44336;
          background: #ffebee;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .question-container {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .question-text {
          color: #333;
          font-size: 1.8rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .answer-option {
          background: #f8f9fa;
          border: 3px solid transparent;
          padding: 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          font-size: 1rem;
        }

        .answer-option:hover:not(:disabled) {
          background: #e0e7ff;
          border-color: #667eea;
          transform: translateX(5px);
        }

        .answer-option:disabled {
          cursor: default;
        }

        .answer-option.selected {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-color: #2196f3;
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
        }

        .answer-option.correct {
          background: #4caf50;
          border-color: #388e3c;
          color: white;
        }

        .answer-option.incorrect {
          background: #f44336;
          border-color: #d32f2f;
          color: white;
        }

        .answer-option.timeout-correct {
          background: #2196f3;
          border-color: #1976d2;
          color: white;
        }

        .option-letter {
          background: #b8860b;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .answer-option.correct .option-letter,
        .answer-option.incorrect .option-letter,
        .answer-option.timeout-correct .option-letter {
          background: rgba(255,255,255,0.3);
        }

        .option-text {
          flex: 1;
          text-align: left;
        }

        .check-mark, .x-mark {
          position: absolute;
          right: 15px;
          font-size: 1.5rem;
        }

        .next-question-section {
          margin-top: 2rem;
          text-align: center;
          animation: fadeInUp 0.5s ease;
        }

        .next-question-button {
          background: linear-gradient(135deg, #d4a574 0%, #b8860b 100%);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .next-question-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .next-question-button:active {
          transform: translateY(-1px);
        }

        .auto-next-text {
          color: white;
          opacity: 0.8;
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        .results {
          max-width: 1000px;
          margin: 0 auto;
        }

        .results-title {
          text-align: center;
          color: white;
          font-size: 3rem;
          margin-bottom: 3rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .podium {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .podium-place {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }

        .podium-place:hover {
          transform: translateY(-10px);
        }

        .place-1 {
          order: 2;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .place-2 {
          order: 1;
          background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: 0s;
          opacity: 0;
        }

        .place-3 {
          order: 3;
          background: linear-gradient(135deg, #cd7f32 0%, #e8b27f 100%);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .medal {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .team-info h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .score {
          font-size: 2rem;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .players {
          color: #666;
        }

        .player-list {
          margin-top: 1rem;
          padding: 0.75rem;
          background: rgba(102, 126, 234, 0.05);
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .player-item {
          padding: 0.4rem 0;
          color: #555;
          font-size: 0.95rem;
        }

        .player-item strong {
          color: #667eea;
        }

        .full-rankings {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .full-rankings h3 {
          color: #667eea;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .ranking-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border-bottom: 1px solid #f0f0f0;
          gap: 0.5rem;
        }

        .ranking-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .ranking-item:last-child {
          border-bottom: none;
        }

        .rank {
          font-weight: bold;
          color: #667eea;
          font-size: 1.2rem;
          width: 50px;
        }

        .ranking-item .team-name {
          flex: 1;
          font-weight: 600;
          color: #333;
        }

        .ranking-item .team-score {
          background: #b8860b;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
        }

        .ranking-players {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-left: 66px;
          margin-top: 0.5rem;
        }

        .ranking-player {
          font-size: 0.9rem;
          color: #666;
          padding: 0.3rem 0.8rem;
          background: rgba(102, 126, 234, 0.08);
          border-radius: 12px;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-out {
          animation: fadeOut 0.3s ease forwards;
        }

        .fade-in {
          animation: fadeIn 0.4s ease forwards;
        }

        .countdown-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .countdown-number {
          font-size: 10rem;
          font-weight: 900;
          color: #fff;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                       0 0 60px rgba(102, 126, 234, 0.8);
          animation: countdownPulse 1s ease;
        }

        .countdown-go {
          color: #4ade80;
          font-size: 12rem;
          text-shadow: 0 0 40px rgba(74, 222, 128, 0.8),
                       0 0 80px rgba(74, 222, 128, 0.6);
          animation: countdownGo 0.8s ease;
        }

        @keyframes countdownPulse {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes countdownGo {
          0% {
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .error-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          animation: slideDown 0.3s ease-out;
        }

        .error-toast-content {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 300px;
          max-width: 500px;
        }

        .error-icon {
          font-size: 1.5rem;
          animation: shake 0.5s ease-in-out;
        }

        .error-text {
          flex: 1;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .error-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background 0.2s;
        }

        .error-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        @keyframes slideDown {
          from {
            transform: translate(-50%, -100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          max-width: 450px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: scaleIn 0.3s ease-out;
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .modal-icon {
          font-size: 2rem;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.5rem;
          color: #2d3748;
        }

        .modal-message {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
          margin: 1.5rem 0;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .modal-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn-cancel {
          background: #e2e8f0;
          color: #4a5568;
        }

        .modal-btn-cancel:hover {
          background: #cbd5e0;
        }

        .modal-btn-confirm {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: white;
        }

        .modal-btn-confirm:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .game-mode-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .mode-button {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .mode-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 193, 7, 0.5);
        }

        .mode-button.active {
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.2));
          border-color: #ffc107;
        }

        .mode-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .mode-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #8b5a00;
          margin-bottom: 0.25rem;
        }

        .mode-desc {
          font-size: 0.85rem;
          color: #8b5a00;
        }

        .settings-preview {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          margin-top: 1.5rem;
        }

        .settings-preview h3 {
          color: #667eea;
          margin-bottom: 1rem;
        }

        .settings-preview ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .settings-preview li {
          padding: 0.5rem 0;
          color: #333;
        }

        .join-info {
          background: #fff3e0;
          padding: 1.2rem;
          border-radius: 10px;
          border-left: 4px solid #b8860b;
          margin: 1rem 0;
        }

        .join-info p {
          margin: 0;
          color: #8b5a00;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .slider {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #e0e0e0;
          outline: none;
          -webkit-appearance: none;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #b8860b;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #b8860b;
          cursor: pointer;
          border: none;
        }

        .question-info-bar {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .team-players-list {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
          padding: 1.3rem 1.5rem;
          border-radius: 15px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.12);
          border: 2px solid rgba(102, 126, 234, 0.1);
        }

        .team-players-list h4 {
          margin: 0 0 0.8rem 0;
          color: #667eea;
          font-size: 1rem;
          font-weight: 700;
        }

        .teammates {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .teammate {
          background: #f0f0f0;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          color: #333;
        }

        .teammate.me {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          font-weight: bold;
        }

        .team-badge {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
          padding: 1rem 1.8rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
          border: 2px solid rgba(102, 126, 234, 0.1);
        }

        .team-label {
          color: #7f8c8d;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .team-name-badge {
          color: #667eea;
          font-weight: 800;
          font-size: 1.2rem;
          text-shadow: 0 1px 2px rgba(102, 126, 234, 0.1);
        }

        .my-score-badge {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #1a1a1a;
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          font-weight: 800;
          font-size: 1.1rem;
          margin-left: 0.8rem;
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
          border: 2px solid rgba(255, 215, 0, 0.4);
        }

        .host-view {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .host-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 2.5rem;
          border-radius: 25px;
          margin-bottom: 1.5rem;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.35);
          position: relative;
          overflow: hidden;
        }

        .host-title-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .host-header h2 {
          color: white;
          margin: 0;
          font-size: 2.2rem;
          font-weight: 800;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .live-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .live-dot {
          width: 10px;
          height: 10px;
          background: #ff4444;
          border-radius: 50%;
          animation: livePulse 1.5s ease-in-out infinite;
          box-shadow: 0 0 10px #ff4444;
        }

        @keyframes livePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .host-leaderboard-container {
          background: white;
          padding: 2.5rem;
          border-radius: 25px;
          margin-bottom: 2rem;
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.15);
          border: 3px solid rgba(102, 126, 234, 0.1);
        }

        .leaderboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid rgba(102, 126, 234, 0.1);
        }

        .leaderboard-header h3 {
          color: #667eea;
          margin: 0;
          font-size: 2rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .live-badge {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
        }

        .host-controls {
          text-align: center;
          margin-top: 2rem;
        }

        .host-controls .primary-button {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: white;
          border: none;
          padding: 1.2rem 3rem;
          border-radius: 15px;
          font-size: 1.3rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .host-controls .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 107, 0.5);
        }

        .podium-players {
          margin-top: 1rem;
          padding-top: 0.8rem;
          border-top: 2px solid rgba(102, 126, 234, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 200px;
        }

        .podium-player {
          font-size: 0.85rem;
          color: #64748b;
          padding: 0.4rem 0.6rem;
          background: rgba(102, 126, 234, 0.08);
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .podium-player strong {
          color: #667eea;
          font-weight: 700;
        }

        .player-leaderboard-container {
          background: white;
          padding: 2.5rem;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.15);
          border: 3px solid rgba(102, 126, 234, 0.1);
        }

        .waiting-results {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
        }

        .waiting-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .waiting-header h2 {
          color: #4caf50;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .waiting-subtitle {
          color: #666;
          font-size: 1.2rem;
        }

        .my-final-score {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .my-final-score .score-card {
          background: linear-gradient(135deg, #d4a574 0%, #b8860b 100%);
          color: white;
          padding: 2rem 4rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(184, 134, 11, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .my-final-score .score-label {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .my-final-score .score-value {
          font-size: 4rem;
          font-weight: bold;
        }

        .my-highlight {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          border: 2px solid #5568d3 !important;
          box-shadow: 0 10px 35px rgba(102, 126, 234, 0.5) !important;
        }

        @media (max-width: 768px) {
          .game-title {
            font-size: 2.5rem;
          }

          .podium {
            grid-template-columns: 1fr;
          }

          .place-1, .place-2, .place-3 {
            order: initial;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})};Mf.createRoot(document.getElementById("root")).render(d.jsx(Pf.StrictMode,{children:d.jsx(Pp,{})}));
